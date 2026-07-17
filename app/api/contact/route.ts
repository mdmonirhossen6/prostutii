import { NextResponse } from 'next/server';

// --- Types ---------------------------------------------------------------
interface ContactPayload {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  // Honeypot field: must always be empty for a real submission.
  website?: unknown;
}

// --- Validation helpers --------------------------------------------------
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

function truncate(value: string, max: number): string {
  return value.length > max ? value.slice(0, max) : value;
}

// --- In-memory rate limiting (per serverless instance) -------------------
// Note: this is best-effort. On Vercel each function instance keeps its own
// map, so it limits abuse within a single instance. For stricter limits,
// pair this with Vercel's Edge rate-limiting or an Upstash store.
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5; // 5 submissions per minute per IP
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entries = requestLog.get(ip) ?? [];
  const recent = entries.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  requestLog.set(ip, recent);

  // Keep the map from growing without bound.
  if (requestLog.size > 1000) {
    requestLog.clear();
  }

  return recent.length > RATE_LIMIT_MAX;
}

function getClientIp(request: Request): string {
  const headers = request.headers;
  return (
    headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    headers.get('x-real-ip') ||
    'unknown'
  );
}

// --- POST handler --------------------------------------------------------
export async function POST(request: Request) {
  try {
    // 1. Basic request validation.
    if (request.headers.get('content-type')?.includes('application/json') === false) {
      return NextResponse.json({ error: 'Unsupported content type' }, { status: 415 });
    }

    // 2. Parse body with a size guard (prevents absurd payloads).
    const text = await request.text();
    if (text.length > 16_000) {
      return NextResponse.json({ error: 'Payload too large' }, { status: 413 });
    }

    let data: ContactPayload;
    try {
      data = JSON.parse(text) as ContactPayload;
    } catch {
      return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
    }

    // 3. Rate limiting.
    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
    }

    // 4. Honeypot: a real user never fills the hidden "website" field.
    if (isNonEmptyString(data.website)) {
      // Pretend success so bots don't learn the field is a trap.
      return NextResponse.json({ success: true });
    }

    // 5. Field validation + sanitization.
    if (
      !isNonEmptyString(data.name) ||
      !isNonEmptyString(data.email) ||
      !isNonEmptyString(data.message)
    ) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const name = truncate(data.name.trim(), 100);
    const email = truncate(data.email.trim(), 254);
    const message = truncate(data.message.trim(), 5000);

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    if (name.length < 2) {
      return NextResponse.json({ error: 'Name too short' }, { status: 400 });
    }

    if (message.length < 5) {
      return NextResponse.json({ error: 'Message too short' }, { status: 400 });
    }

    // 6. Deliver via Resend. If no API key is configured, log locally so the
    //    form still works in development without silently swallowing data.
    const apiKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.CONTACT_NOTIFY_EMAIL || 'prostutibdapp@gmail.com';

    if (!apiKey) {
      console.warn(
        '[contact] RESEND_API_KEY not set — submission logged to server console only.',
        { name, email, timestamp: new Date().toISOString() }
      );
      return NextResponse.json({ success: true });
    }

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Prostuti Contact <onboarding@resend.dev>',
        to: [notifyEmail],
        reply_to: email,
        subject: `New contact form message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      }),
    });

    if (!resendRes.ok) {
      const errText = await resendRes.text();
      console.error('[contact] Resend API error:', resendRes.status, errText);
      return NextResponse.json({ error: 'Failed to send message' }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--space-6)',
        background: 'var(--color-surface-bg)',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '520px' }}>
        {/* Big 404 */}
        <div
          style={{
            fontSize: 'clamp(80px, 18vw, 160px)',
            fontWeight: 800,
            lineHeight: 1,
            background: 'linear-gradient(135deg, var(--color-surface-strong) 0%, #4d6bff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: 'var(--space-4)',
            letterSpacing: '-0.04em',
          }}
        >
          404
        </div>

        <h1
          style={{
            fontSize: 'clamp(22px, 4vw, 30px)',
            fontWeight: 800,
            color: 'var(--color-text-primary)',
            marginBottom: 'var(--space-3)',
          }}
        >
          পেজটি খুঁজে পাওয়া যায়নি
        </h1>

        <p
          style={{
            fontSize: 'var(--font-size-md)',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.6,
            marginBottom: 'var(--space-8)',
          }}
        >
          দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি বিদ্যমান নেই বা সরিয়ে ফেলা হয়েছে।
          <br />
          <span style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-sm)' }}>
            The page you are looking for doesn&apos;t exist or has been moved.
          </span>
        </p>

        {/* CTAs */}
        <div
          style={{
            display: 'flex',
            gap: 'var(--space-3)',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Link
            href="/"
            className="btn btn-primary"
            style={{
              borderRadius: '24px',
              fontWeight: 700,
              padding: '12px 28px',
              textDecoration: 'none',
              background: 'var(--color-surface-strong)',
              color: 'var(--color-text-pure)',
              border: 'none',
              display: 'inline-block',
            }}
          >
            হোমে ফিরে যান
          </Link>
          <Link
            href="/blog"
            className="btn btn-secondary"
            style={{
              borderRadius: '24px',
              fontWeight: 700,
              padding: '12px 28px',
              textDecoration: 'none',
              border: '1px solid var(--color-border-default)',
              color: 'var(--color-text-primary)',
              display: 'inline-block',
            }}
          >
            ব্লগ পড়ুন
          </Link>
        </div>
      </div>
    </main>
  );
}

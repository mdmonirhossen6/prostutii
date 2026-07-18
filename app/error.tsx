'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface runtime errors to server logs so we can diagnose them.
    console.error('[global-error]', error);
  }, [error]);

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
        <div
          aria-hidden
          style={{
            fontSize: '48px',
            marginBottom: 'var(--space-4)',
          }}
        >
          ⚠️
        </div>

        <h1
          style={{
            fontSize: 'clamp(22px, 4vw, 30px)',
            fontWeight: 800,
            color: 'var(--color-text-primary)',
            marginBottom: 'var(--space-3)',
          }}
        >
          কিছু একটা সমস্যা হয়েছে
        </h1>

        <p
          style={{
            fontSize: 'var(--font-size-md)',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.6,
            marginBottom: 'var(--space-6)',
          }}
        >
          অপ্রত্যাশিত একটি ত্রুটি ঘটেছে। নিচের বাটনে ক্লিক করে আবার চেষ্টা করুন।
          <br />
          <span style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-sm)' }}>
            Something went wrong. Please try again.
          </span>
        </p>

        {error.digest && (
          <p
            style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-text-tertiary)',
              marginBottom: 'var(--space-6)',
              fontFamily: 'monospace',
            }}
          >
            Error ID: {error.digest}
          </p>
        )}

        <div
          style={{
            display: 'flex',
            gap: 'var(--space-3)',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={reset}
            style={{
              borderRadius: '24px',
              fontWeight: 700,
              padding: '12px 28px',
              border: 'none',
              cursor: 'pointer',
              background: 'var(--color-surface-strong)',
              color: 'var(--color-text-pure)',
            }}
          >
            আবার চেষ্টা করুন
          </button>
          <a
            href="/"
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
            হোমে যান
          </a>
        </div>
      </div>
    </main>
  );
}

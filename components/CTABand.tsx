'use client';

import { spawnSpark } from '@/utils/spark';

interface CTABandProps {
  lang: 'bn' | 'en';
}

const copy = {
  bn: {
    eyebrow: 'আর দেরি নয়',
    headline: 'তোমার পরীক্ষার প্রস্তুতি',
    headline2: 'এখনই শুরু হোক',
    body: 'লক্ষাধিক শিক্ষার্থীর সাথে যোগ দাও এবং প্রস্তুতির বিজ্ঞানসম্মত পদ্ধতিতে সাফল্যের দিকে এগিয়ে যাও।',
    primary: 'বিনামূল্যে অ্যাকাউন্ট খুলুন',
    secondary: 'ডেমো দেখুন',
    note: '',
  },
  en: {
    eyebrow: "Don't Wait",
    headline: 'Start Your Exam',
    headline2: 'Preparation Now',
    body: 'Join millions of students and move towards success with Prostuti\'s science-backed study method.',
    primary: 'Open Free Account',
    secondary: 'Watch Demo',
    note: '',
  },
};

export default function CTABand({ lang }: CTABandProps) {
  const t = copy[lang];

  return (
    <section
      aria-labelledby="cta-band-heading"
      style={{
        background: `
          radial-gradient(ellipse 100% 100% at 50% 50%, rgba(0,150,109,0.20) 0%, transparent 70%),
          linear-gradient(135deg, #010508 0%, #050c14 100%)
        `,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0,150,109,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,150,109,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
        }}
      />

      {/* Glowing orbs */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '10%',
          transform: 'translateY(-50%)',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'rgba(0,150,109,0.08)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          right: '10%',
          transform: 'translateY(-50%)',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'rgba(77,107,255,0.06)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container-page"
        style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}
      >
        <p
          style={{
            fontSize: 'var(--font-size-sm)',
            fontWeight: 700,
            color: 'var(--color-surface-strong)',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '16px',
          }}
          aria-hidden="true"
        >
          {t.eyebrow}
        </p>

        <h2
          id="cta-band-heading"
          style={{
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: '20px',
            letterSpacing: '-1px',
          }}
        >
          {t.headline} <span className="gradient-text">{t.headline2}</span>
        </h2>

        <p
          style={{
            fontSize: 'var(--font-size-lg)',
            color: '#cbd5e1',
            lineHeight: 1.6,
            maxWidth: '540px',
            margin: '0 auto 36px',
          }}
        >
          {t.body}
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '20px',
          }}
        >
          <a
            href="https://web.prostuti.bd"
            className="btn btn-primary btn-lg"
            onClick={(e) => spawnSpark(e)}
            aria-label={lang === 'bn' ? 'প্রস্তুতিতে বিনামূল্যে অ্যাকাউন্ট খুলুন' : 'Open a free Prostuti account'}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
            {t.primary}
          </a>
          <a
            href="#how-it-works"
            className="btn btn-secondary btn-lg"
            onClick={(e) => spawnSpark(e)}
            aria-label={lang === 'bn' ? 'প্রস্তুতি কীভাবে কাজ করে তার ডেমো দেখুন' : 'Watch how Prostuti works'}
            style={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.2)' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/>
              <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/>
            </svg>
            {t.secondary}
          </a>
        </div>

        <p
          style={{
            fontSize: 'var(--font-size-xs)',
            color: '#94a3b8',
          }}
        >
          {t.note}
        </p>
      </div>
    </section>
  );
}

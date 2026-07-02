'use client';

interface HeroProps {
  lang: 'bn' | 'en';
}

const copy = {
  bn: {
    badge: 'বাংলাদেশের #১ পরীক্ষা প্রস্তুতি প্ল্যাটফর্ম',
    headline1: 'পরীক্ষায় সাফল্যের',
    headline2: 'নিশ্চিত পথ',
    subheadline: 'HSC, SSC ও বিশ্ববিদ্যালয় ভর্তি পরীক্ষার জন্য বিজ্ঞানসম্মত প্র্যাকটিস, মডেল টেস্ট, এবং পার্সোনালাইজড অ্যানালিটিক্স — একটি প্ল্যাটফর্মে।',
    ctaPrimary: 'ফ্রি প্র্যাকটিস শুরু করুন',
    ctaSecondary: 'কীভাবে কাজ করে দেখুন',
  },
  en: {
    badge: "Bangladesh's #1 Exam Prep Platform",
    headline1: 'Your Surest Path to',
    headline2: 'Exam Success',
    subheadline: 'Science-backed practice, model tests, and personalized analytics for HSC, SSC, and Admission exams — all in one place.',
    ctaPrimary: 'Start Practicing Free',
    ctaSecondary: 'See How It Works',
  },
};

export default function Hero({ lang }: HeroProps) {
  const t = copy[lang];

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '80px',
        background: 'var(--color-surface-base)'
      }}
      aria-labelledby="hero-heading"
    >
      {/* Background gradients */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,150,109,0.18) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 80% 50%, rgba(77,107,255,0.10) 0%, transparent 60%),
            radial-gradient(ellipse 50% 60% at 20% 60%, rgba(0,150,109,0.06) 0%, transparent 60%)
          `,
          pointerEvents: 'none',
        }}
      />

      {/* Grid pattern overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
        }}
      />

      <div className="container-page" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: 'var(--space-7)',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left: Text content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            {/* Badge */}
            <div>
              <span className="badge badge-green">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true" style={{ marginRight: '6px' }}>
                  <path d="M6 0L7.5 4.5H12L8.25 7.3L9.75 12L6 9.2L2.25 12L3.75 7.3L0 4.5H4.5L6 0Z"/>
                </svg>
                {t.badge}
              </span>
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              style={{
                fontSize: 'clamp(36px, 5vw, var(--font-size-xl))',
                fontWeight: 800,
                lineHeight: 1.1,
                color: 'var(--color-text-primary)',
                letterSpacing: '-1px',
              }}
            >
              {t.headline1}{' '}
              <span className="gradient-text">{t.headline2}</span>
            </h1>

            {/* Subheadline */}
            <p
              style={{
                fontSize: 'var(--font-size-lg)',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.7,
                maxWidth: '520px',
              }}
            >
              {t.subheadline}
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
              <a
                href="https://web.prostuti.bd"
                className="btn btn-primary btn-lg"
                aria-label={lang === 'bn' ? 'বিনামূল্যে প্র্যাকটিস শুরু করুন' : 'Start practicing for free'}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
                {t.ctaPrimary}
              </a>
              <a
                href="#how-it-works"
                className="btn btn-secondary btn-lg"
                aria-label={lang === 'bn' ? 'প্রস্তুতি কীভাবে কাজ করে তা দেখুন' : 'See how Prostuti works'}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/>
                  <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/>
                </svg>
                {t.ctaSecondary}
              </a>
            </div>

          </div>

          {/* Right: App Preview */}
          <div
            style={{
              position: 'relative',
              animation: 'pulseGlow 4s ease-in-out infinite',
              display: 'flex',
              justifyContent: 'center',
            }}
            className="hero-card"
            role="complementary"
            aria-label={lang === 'bn' ? 'প্রস্তুতি মোবাইল অ্যাপের চিত্র' : 'Prostuti App Preview'}
          >
            {/* Phone Frame */}
            <div
              style={{
                width: '100%',
                maxWidth: '340px',
                aspectRatio: '1 / 2.1', // Closer to modern phone ratio
                background: 'var(--color-surface-base)',
                borderRadius: '40px',
                border: '10px solid #13131a',
                boxShadow: '0 24px 80px rgba(0,0,0,0.8), var(--shadow-glow)',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {/* Mobile Notch */}
              <div
                style={{
                  position: 'absolute',
                  top: '-1px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '40%',
                  height: '28px',
                  background: '#13131a',
                  borderBottomLeftRadius: '18px',
                  borderBottomRightRadius: '18px',
                  zIndex: 10,
                }}
              />
              
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <img 
                  src="https://pub-e2c71a91f86f428982fe1b1f721d68b9.r2.dev/image/host/02-07-2026/prostuti/img_1782975874051.png" 
                  alt="Prostuti App" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    background: '#070a12'
                  }} 
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .hero-card {
            max-width: 520px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}

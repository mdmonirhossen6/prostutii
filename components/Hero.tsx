'use client';

import { useState, useEffect, useRef } from 'react';

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
    chartTitle: 'অধ্যায়ভিত্তিক নির্ভুলতা',
    streakLabel: '🔥 স্ট্রিক',
    streakDays: '১৪ দিন',
    rankLabel: '🏅 র‍্যাঙ্ক',
    rankValue: '#৩',
  },
  en: {
    badge: "Bangladesh's #1 Exam Prep Platform",
    headline1: 'Your Surest Path to',
    headline2: 'Exam Success',
    subheadline: 'Science-backed practice, model tests, and personalized analytics for HSC, SSC, and Admission exams — all in one place.',
    ctaPrimary: 'Start Practicing Free',
    ctaSecondary: 'See How It Works',
    chartTitle: 'Chapter-Wise Accuracy',
    streakLabel: '🔥 Streak',
    streakDays: '14 Days',
    rankLabel: '🏅 Rank',
    rankValue: '#3',
  },
};

const chartData = [
  { subject: { bn: 'পদার্থবিজ্ঞান', en: 'Physics' }, accuracy: 87, color: '#00d9a0' },
  { subject: { bn: 'রসায়ন', en: 'Chemistry' }, accuracy: 72, color: '#4d6bff' },
  { subject: { bn: 'উচ্চতর গণিত', en: 'Higher Math' }, accuracy: 94, color: '#8b5cf6' },
  { subject: { bn: 'জীববিজ্ঞান', en: 'Biology' }, accuracy: 68, color: '#f59e0b' },
  { subject: { bn: 'ইংরেজি', en: 'English' }, accuracy: 81, color: '#06b6d4' },
];

function useCountUp(target: number, duration: number = 1200, startOnView: boolean = true) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!startOnView) {
      setValue(target);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            setValue(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, startOnView]);

  return { value, ref };
}

export default function Hero({ lang }: HeroProps) {
  const t = copy[lang];

  // Individual count-up hooks for each bar
  const counters = chartData.map((d) => useCountUp(d.accuracy));

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
          backgroundImage: `linear-gradient(var(--color-grid-pattern) 1px, transparent 1px), linear-gradient(90deg, var(--color-grid-pattern) 1px, transparent 1px)`,
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
                fontSize: 'clamp(36px, 5vw, 60px)',
                fontWeight: 800,
                lineHeight: 1.1,
                color: 'var(--color-text-primary)',
                letterSpacing: '-1px',
              }}
            >
              {t.headline1}
              <br />
              <span className="gradient-text">{t.headline2}</span>
            </h1>

            {/* Subheadline */}
            <p
              style={{
                fontSize: 'calc(var(--font-size-lg) + 1px)',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.8,
                maxWidth: '540px',
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

            {/* Trust Signals */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginTop: 'var(--space-1)' }}>
              {/* Avatar Stack */}
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {[
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&q=80',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&q=80',
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&q=80',
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=64&q=80',
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Student avatar"
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      border: '2px solid var(--color-surface-base)',
                      marginLeft: i === 0 ? 0 : '-12px',
                      boxShadow: 'var(--shadow-card)',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                ))}
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    border: '2px solid var(--color-surface-base)',
                    background: 'var(--color-surface-strong)',
                    color: '#fff',
                    fontSize: '11px',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: '-12px',
                    boxShadow: 'var(--shadow-card)',
                  }}
                >
                  +5k
                </div>
              </div>
              {/* Rating Text */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="var(--color-accent-yellow)" stroke="none">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', fontWeight: 500 }}>
                  {lang === 'bn' ? '৫,০০০+ শিক্ষার্থীর আস্থার পরীক্ষা প্রস্তুতি' : 'Joined by 5,000+ students practicing daily'}
                </span>
              </div>
            </div>

          </div>

          {/* Right: Analytics Widget Card with layered depth */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
            }}
            className="hero-card"
            role="complementary"
            aria-label={lang === 'bn' ? 'প্রস্তুতি অ্যানালিটিক্স উইজেট' : 'Prostuti Analytics Widget'}
          >
            {/* Backdrop Glow */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                width: '380px',
                height: '380px',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'var(--hero-glow)',
                filter: 'blur(50px)',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 0,
              }}
            />

            {/* PART 5: Secondary layered card — streak/rank callout */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '-16px',
                right: '-20px',
                width: '180px',
                background: 'var(--color-surface-card)',
                border: '1px solid var(--color-border-default)',
                borderRadius: 'var(--radius-sm)',
                padding: '14px 16px',
                boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
                transform: 'rotate(4deg)',
                zIndex: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-text-secondary)' }}>{t.streakLabel}</span>
                <span style={{ fontSize: '14px', fontWeight: 800, color: '#f59e0b', fontFamily: 'monospace' }}>{t.streakDays}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-text-secondary)' }}>{t.rankLabel}</span>
                <span style={{ fontSize: '14px', fontWeight: 800, color: '#00d9a0', fontFamily: 'monospace' }}>{t.rankValue}</span>
              </div>
            </div>

            {/* Primary Analytics Bar Chart Card */}
            <div
              ref={counters[0].ref}
              style={{
                width: '100%',
                maxWidth: '420px',
                background: 'var(--color-surface-card)',
                border: '1px solid var(--color-border-default)',
                borderRadius: 'var(--radius-sm)',
                padding: '28px 24px',
                boxShadow: '0 24px 80px rgba(0,0,0,0.6), var(--shadow-glow)',
                position: 'relative',
                zIndex: 1,
              }}
            >
              {/* Card header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-text-primary)', margin: 0 }}>
                  📊 {t.chartTitle}
                </h3>
                <span style={{
                  fontSize: '10px',
                  fontWeight: 700,
                  color: '#00d9a0',
                  background: 'rgba(0,150,109,0.12)',
                  padding: '3px 8px',
                  borderRadius: '6px',
                  border: '1px solid rgba(0,150,109,0.25)',
                  letterSpacing: '0.5px',
                }}>
                  LIVE
                </span>
              </div>

              {/* Bar chart */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {chartData.map((item, idx) => (
                  <div key={item.subject.en} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {/* Subject label */}
                    <span style={{
                      width: '90px',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: 'var(--color-text-secondary)',
                      textAlign: 'right',
                      flexShrink: 0,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}>
                      {item.subject[lang]}
                    </span>

                    {/* Bar container */}
                    <div style={{ flex: 1, height: '22px', background: 'rgba(255,255,255,0.04)', borderRadius: '4px', overflow: 'hidden', position: 'relative' }}>
                      <div
                        style={{
                          height: '100%',
                          width: `${counters[idx].value}%`,
                          background: `linear-gradient(90deg, ${item.color}cc, ${item.color})`,
                          borderRadius: '4px',
                          transition: 'width 0.05s linear',
                          boxShadow: `0 0 12px ${item.color}33`,
                        }}
                      />
                    </div>

                    {/* Percentage */}
                    <span style={{
                      width: '42px',
                      fontSize: '13px',
                      fontWeight: 800,
                      color: 'var(--color-text-primary)',
                      fontFamily: 'monospace',
                      textAlign: 'right',
                      flexShrink: 0,
                    }}>
                      {counters[idx].value}%
                    </span>
                  </div>
                ))}
              </div>

              {/* Average score footer */}
              <div style={{
                marginTop: '20px',
                paddingTop: '16px',
                borderTop: '1px solid var(--color-border-default)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)', fontWeight: 600 }}>
                  {lang === 'bn' ? 'গড় নির্ভুলতা' : 'Average Accuracy'}
                </span>
                <span style={{ fontSize: '20px', fontWeight: 800, color: '#00d9a0', fontFamily: 'monospace' }}>
                  {Math.round(counters.reduce((sum, c) => sum + c.value, 0) / counters.length)}%
                </span>
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

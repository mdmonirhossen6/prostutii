'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { useTiltEffect } from '@/hooks/useTiltEffect';
import { spawnSpark } from '@/utils/spark';

interface HeroProps {
  lang: 'bn' | 'en';
}

const copy = {
  bn: {
    badge: 'বাংলাদেশের #১ পরীক্ষা প্রস্তুতি প্ল্যাটফর্ম',
    headline1: 'HSC & Admission প্রস্তুতির',
    headline2: 'সম্পূর্ণ সলিউশন',
    subheadline: 'HSC থেকে শুরু করে বিশ্ববিদ্যালয় ভর্তি পরীক্ষা— স্মার্ট প্র্যাকটিস, মডেল টেস্ট এবং পার্সোনালাইজড অ্যানালিটিক্সের মাধ্যমে নিজেকে যাচাই করুন এক অ্যাপেই।',
    ctaPrimary: 'ফ্রি প্র্যাকটিস শুরু করুন',
    ctaSecondary: 'কীভাবে কাজ করে দেখুন',
    streakLabel: '🔥 স্ট্রিক',
    streakDays: '১৪ দিন',
    rankLabel: '🏅 র‍্যাঙ্ক',
    rankValue: '#৩',
  },
  en: {
    badge: "Bangladesh's #1 Exam Prep Platform",
    headline1: 'Complete Preparation Solution for',
    headline2: 'HSC & Admission',
    subheadline: 'From HSC to university admission exams — validate yourself through smart practice, model tests, and personalized analytics, all in one app.',
    ctaPrimary: 'Start Practicing Free',
    ctaSecondary: 'See How It Works',
    streakLabel: '🔥 Streak',
    streakDays: '14 Days',
    rankLabel: '🏅 Rank',
    rankValue: '#3',
  },
};

export default function Hero({ lang }: HeroProps) {
  const t = copy[lang];
  const sectionRef = useRef<HTMLElement>(null);
  useTiltEffect(sectionRef, '.tilt-card');

  return (
    <section
      ref={sectionRef}
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
                onClick={(e) => spawnSpark(e)}
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
                onClick={(e) => spawnSpark(e)}
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
                  <Image
                    key={i}
                    src={src}
                    alt="Student avatar"
                    width={32}
                    height={32}
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
                    color: 'var(--color-text-pure)',
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

          {/* Right: Real App Screenshot with layered depth */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              padding: '20px',
            }}
            className="hero-card"
            role="complementary"
            aria-label={lang === 'bn' ? 'প্রস্তুতি অ্যাপের ড্যাশবোর্ড' : 'Prostuti App Screenshot'}
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

            {/* Badge A (streak) — top-right offset */}
            <div
              aria-hidden="true"
              className="badge-streak"
              style={{
                position: 'absolute',
                top: '-20px',
                right: '0',
                background: 'var(--color-surface-card)',
                border: '1px solid rgba(245, 158, 11, 0.8)',
                borderRadius: 'var(--radius-sm)',
                padding: '12px 16px',
                boxShadow: 'var(--shadow-card), 0 0 24px rgba(245, 158, 11, 0.25)',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-text-secondary)' }}>{t.streakLabel}</span>
              <span style={{ fontSize: '14px', fontWeight: 800, color: '#f59e0b', fontFamily: 'monospace' }}>{t.streakDays}</span>
            </div>

            {/* Badge B (rank) — bottom-left offset */}
            <div
              aria-hidden="true"
              className="badge-rank"
              style={{
                position: 'absolute',
                bottom: '15%',
                left: '-24px',
                background: 'var(--color-surface-card)',
                border: '1px solid rgba(0, 217, 160, 0.8)',
                borderRadius: 'var(--radius-sm)',
                padding: '12px 16px',
                boxShadow: 'var(--shadow-card), 0 0 24px rgba(0, 217, 160, 0.25)',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-text-secondary)' }}>{t.rankLabel}</span>
              <span style={{ fontSize: '14px', fontWeight: 800, color: '#00d9a0', fontFamily: 'monospace' }}>{t.rankValue}</span>
            </div>

            {/* Primary App Screenshot */}
            <div
              className="tilt-card"
              style={{
                position: 'relative',
                zIndex: 1,
              }}
            >
              <Image
                src="https://pub-e2c71a91f86f428982fe1b1f721d68b9.r2.dev/image/host/02-07-2026/prostuti/img_1782975874051.png"
                alt={lang === 'bn' ? 'প্রস্তুতি অ্যাপের ড্যাশবোর্ড' : 'Prostuti app dashboard'}
                width={320}
                height={693}
                priority
                style={{
                  width: '100%',
                  maxWidth: '320px',
                  height: 'auto',
                  borderRadius: '24px',
                  border: '1px solid var(--color-overlay-10)',
                  boxShadow: '0 24px 80px rgba(0, 150, 109, 0.2), 0 0 0 1px rgba(0, 150, 109, 0.3)',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes badgeEnter {
          from { opacity: 0; transform: scale(0.85) translateY(6px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        .badge-streak { animation: badgeEnter 0.5s ease-out 0.6s both, floatBadge 3.2s ease-in-out infinite 1.1s; }
        .badge-rank   { animation: badgeEnter 0.5s ease-out 0.9s both, floatBadge 3.2s ease-in-out infinite 1.9s; }

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
        
        @media (max-width: 480px) {
          .badge-streak {
            right: 0 !important;
            top: 5% !important;
          }
          .badge-rank {
            left: 0 !important;
            bottom: 5% !important;
          }
        }
      `}</style>
    </section>
  );
}

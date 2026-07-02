'use client';

import { useState } from 'react';

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
    sandboxHeader: 'web.prostuti.bd/practice',
    sandboxSubject: 'HSC পদার্থবিজ্ঞান — মহাকর্ষ ও অভিকর্ষ',
    sandboxQuestion: 'একটি বস্তুকে পৃথিবীর কেন্দ্রে নিয়ে গেলে তার ওজন কত হবে?',
    sandboxOptions: [
      'দ্বিগুণ (Double)',
      'অর্ধেক (Half)',
      'শূন্য (Zero)',
      'অপরিবর্তিত (Unchanged)'
    ],
    sandboxExplanation: 'পৃথিবীর কেন্দ্রে অভিকর্ষজ ত্বরণ (g) = ০, তাই বস্তুর ওজন (W = mg) শূন্য হবে।',
    sandboxCorrectMsg: 'অভিনন্দন! সঠিক উত্তর।',
    sandboxIncorrectMsg: 'ভুল উত্তর। সঠিক উত্তরটি নিচে দেখুন।',
    sandboxReset: 'আবার চেষ্টা করুন'
  },
  en: {
    badge: "Bangladesh's #1 Exam Prep Platform",
    headline1: 'Your Surest Path to',
    headline2: 'Exam Success',
    subheadline: 'Science-backed practice, model tests, and personalized analytics for HSC, SSC, and Admission exams — all in one place.',
    ctaPrimary: 'Start Practicing Free',
    ctaSecondary: 'See How It Works',
    sandboxHeader: 'web.prostuti.bd/practice',
    sandboxSubject: 'HSC Physics — Gravity & Gravitation',
    sandboxQuestion: 'What will be the weight of an object if it is taken to the center of the Earth?',
    sandboxOptions: [
      'Double',
      'Half',
      'Zero',
      'Unchanged'
    ],
    sandboxExplanation: 'At the center of the Earth, gravitational acceleration (g) = 0, hence weight (W = mg) is zero.',
    sandboxCorrectMsg: 'Congratulations! Correct answer.',
    sandboxIncorrectMsg: 'Incorrect answer. See the correct solution below.',
    sandboxReset: 'Try Again'
  },
};

export default function Hero({ lang }: HeroProps) {
  const t = copy[lang];
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const isCorrect = selectedOption === 2;

  const handleOptionClick = (idx: number) => {
    if (selectedOption === null) {
      setSelectedOption(idx);
    }
  };

  const handleReset = () => {
    setSelectedOption(null);
  };

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
            radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,150,109,0.12) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 80% 50%, rgba(77,107,255,0.06) 0%, transparent 60%)
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
          backgroundImage: `linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)`,
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
              <span className="badge">
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

          {/* Right: Live Interactive Sandbox */}
          <div className="hero-card" style={{ width: '100%' }}>
            <div
              style={{
                background: 'var(--color-surface-card)',
                border: '1px solid var(--color-border-default)',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Browser Header Bar */}
              <div
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  borderBottom: '1px solid var(--color-border-default)',
                  padding: '10px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                {/* Window Dots */}
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f' }} />
                </div>
                {/* Mock URL Bar */}
                <div
                  style={{
                    flex: 1,
                    background: 'rgba(0,0,0,0.2)',
                    border: '1px solid var(--color-border-default)',
                    borderRadius: '6px',
                    padding: '4px 12px',
                    fontSize: '11px',
                    color: 'var(--color-text-tertiary)',
                    textAlign: 'center',
                    fontFamily: 'monospace',
                    letterSpacing: '0.5px'
                  }}
                >
                  {t.sandboxHeader}
                </div>
              </div>

              {/* Sandbox App Body */}
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                
                {/* Subject tag */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="badge" style={{ fontSize: '10px', padding: '2px 8px' }}>
                    {t.sandboxSubject}
                  </span>
                  {selectedOption !== null && (
                    <span 
                      style={{ 
                        fontSize: '11px', 
                        fontWeight: 700, 
                        color: isCorrect ? 'var(--color-surface-strong)' : '#ef4444' 
                      }}
                    >
                      {isCorrect ? t.sandboxCorrectMsg : t.sandboxIncorrectMsg}
                    </span>
                  )}
                </div>

                {/* Question */}
                <h3 
                  style={{ 
                    fontSize: '17px', 
                    fontWeight: 700, 
                    color: 'var(--color-text-primary)', 
                    lineHeight: 1.4,
                    margin: 0
                  }}
                >
                  {t.sandboxQuestion}
                </h3>

                {/* Options List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {t.sandboxOptions.map((opt, idx) => {
                    const alphabet = ['A', 'B', 'C', 'D'][idx];
                    let borderStyle = '1px solid var(--color-border-default)';
                    let bgStyle = 'rgba(255, 255, 255, 0.01)';
                    let textColor = 'var(--color-text-secondary)';

                    if (selectedOption !== null) {
                      if (idx === 2) {
                        // Correct option
                        borderStyle = '1.5px solid var(--color-surface-strong)';
                        bgStyle = 'rgba(0, 150, 109, 0.08)';
                        textColor = 'var(--color-text-primary)';
                      } else if (selectedOption === idx) {
                        // Incorrect selection
                        borderStyle = '1.5px solid #ef4444';
                        bgStyle = 'rgba(239, 68, 68, 0.08)';
                        textColor = 'var(--color-text-primary)';
                      } else {
                        // Deselected option
                        bgStyle = 'transparent';
                        textColor = 'var(--color-text-tertiary)';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleOptionClick(idx)}
                        disabled={selectedOption !== null}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '12px 16px',
                          borderRadius: '8px',
                          border: borderStyle,
                          background: bgStyle,
                          color: textColor,
                          textAlign: 'left',
                          cursor: selectedOption === null ? 'pointer' : 'default',
                          transition: 'all 0.2s ease',
                          fontSize: '14px',
                          fontWeight: 500
                        }}
                        className="sandbox-option-btn"
                      >
                        <span 
                          style={{ 
                            width: 24, 
                            height: 24, 
                            borderRadius: '4px', 
                            background: selectedOption !== null && idx === 2 ? 'var(--color-surface-strong)' : 'rgba(255,255,255,0.05)',
                            color: selectedOption !== null && idx === 2 ? '#fff' : 'inherit',
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            fontSize: '11px', 
                            fontWeight: 700 
                          }}
                        >
                          {alphabet}
                        </span>
                        {opt}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation Card */}
                {selectedOption !== null && (
                  <div
                    style={{
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px dashed var(--color-border-default)',
                      borderRadius: '8px',
                      padding: '14px 16px',
                      fontSize: '13px',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.5,
                      animation: 'fadeIn 0.3s ease-in-out'
                    }}
                  >
                    <strong style={{ color: 'var(--color-text-primary)', display: 'block', marginBottom: '4px' }}>
                      {lang === 'bn' ? 'ব্যাখ্যা:' : 'Explanation:'}
                    </strong>
                    {t.sandboxExplanation}
                    
                    <button
                      onClick={handleReset}
                      style={{
                        marginTop: '12px',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid var(--color-border-default)',
                        color: 'var(--color-text-primary)',
                        padding: '6px 12px',
                        borderRadius: '4px',
                        fontSize: '11px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'block'
                      }}
                    >
                      {t.sandboxReset}
                    </button>
                  </div>
                )}

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
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

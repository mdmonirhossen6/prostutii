'use client';

import { useState, useEffect, useRef } from 'react';

interface MockTestWidgetProps {
  lang: 'bn' | 'en';
}

const modelTestTracks = [
  {
    id: 'weekly',
    iconType: 'calendar',
    color: '#ef4444',
    labelBn: 'সাপ্তাহিক পরীক্ষা',
    labelEn: 'WEEKLY EXAM',
    descBn: 'সাপ্তাহিক Varsity ও Engineering ভর্তি পরীক্ষা — লিডারবোর্ড সহ',
    descEn: 'Weekly Varsity & Engineering admission exams with leaderboard',
  },
  {
    id: 'hsc',
    iconType: 'hsc',
    color: '#00966d',
    labelBn: 'HSC মডেল টেস্ট',
    labelEn: 'HSC MODEL TEST',
    descBn: 'HSC প্রস্তুতির জন্য বিষয় ও পেপার ফাইনাল টেস্ট',
    descEn: 'Subject & Paper Final tests for HSC standard preparation',
  },
  {
    id: 'medical',
    iconType: 'medical',
    color: '#f97316',
    labelBn: 'মেডিকেল',
    labelEn: 'MEDICAL',
    descBn: 'পেপার ফাইনাল, বিষয় ফাইনাল ও ফুল টেস্ট',
    descEn: 'Paper Final, Subject Final & Full Tests',
  },
  {
    id: 'varsity',
    iconType: 'varsity',
    color: '#4d6bff',
    labelBn: 'ভার্সিটি',
    labelEn: 'VARSITY',
    descBn: 'বিশ্ববিদ্যালয়-ভিত্তিক Unit মডেল টেস্ট',
    descEn: 'University-wise unit-based Model Tests',
  },
  {
    id: 'engineering',
    iconType: 'engineering',
    color: '#f59e0b',
    labelBn: 'ইঞ্জিনিয়ারিং',
    labelEn: 'ENGINEERING',
    descBn: 'বুয়েট, DIU ও Tech Unit মডেল টেস্ট',
    descEn: 'BUET, DIUsal & Tech Unit Model Tests',
  },
  {
    id: 'battle',
    iconType: 'battle',
    color: '#8b5cf6',
    labelBn: 'Battle Royale',
    labelEn: 'BATTLE ROYALE',
    descBn: 'সরাসরি প্রতিযোগীদের বিরুদ্ধে লাইভ প্রতিযোগিতা',
    descEn: 'Live competitive battles against peers in real time',
    hot: true,
  },
];

const copy = {
  bn: {
    badge: 'মডেল টেস্ট হাব',
    title: '৬ ধরনের মডেল টেস্ট',
    subtitle: 'আসল পরীক্ষার মতো পরিবেশ — সময়-নির্ধারিত, বোর্ড প্যাটার্নে। প্রতিদিন নিজেকে চ্যালেঞ্জ করুন এবং অগ্রগতি ট্র্যাক করুন।',
    selectLabel: 'Model Test Hub',
    start: 'মক শুরু করুন',
    hot: '🔥 নতুন',
  },
  en: {
    badge: 'Model Test Hub',
    title: '6 Types of Model Tests',
    subtitle: 'Exam-like conditions — timed, board-pattern. Challenge yourself with exam-standard questions and track your progress daily.',
    selectLabel: 'Model Test Hub',
    start: 'Start Test',
    hot: '🔥 New',
  },
};

function renderTrackIcon(type: string, color: string) {
  const props = {
    width: 18,
    height: 18,
    stroke: color,
    strokeWidth: 2.2,
    fill: 'none',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  switch (type) {
    case 'calendar':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );
    case 'hsc':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
        </svg>
      );
    case 'medical':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path d="M18 22V8a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
          <path d="M10 14h4" />
          <path d="M12 12v4" />
          <path d="M2 22h20" />
        </svg>
      );
    case 'varsity':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <line x1="3" y1="22" x2="21" y2="22" />
          <line x1="6" y1="18" x2="6" y2="11" />
          <line x1="10" y1="18" x2="10" y2="11" />
          <line x1="14" y1="18" x2="14" y2="11" />
          <line x1="18" y1="18" x2="18" y2="11" />
          <path d="M12 2L2 7h20L12 2z" />
          <path d="M2 18h20" />
        </svg>
      );
    case 'engineering':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.5 1z" />
        </svg>
      );
    case 'battle':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    default:
      return null;
  }
}

export default function MockTestWidget({ lang }: MockTestWidgetProps) {
  const t = copy[lang];
  const [selected, setSelected] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      section.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    section.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="mock-tests" aria-labelledby="mock-heading" style={{ padding: '110px 0', background: 'rgba(8,12,24,0.8)' }}>
      <div className="container-page">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-7)', alignItems: 'center' }} className="mock-grid">

          {/* Left: copy */}
          <div className="reveal">
            <span className="badge badge-blue" style={{ marginBottom: 'var(--space-4)' }}>{t.badge}</span>
            <h2 id="mock-heading" style={{ fontSize: 'clamp(24px, 4vw, var(--font-size-h1))', fontWeight: 800, color: 'var(--color-text-primary)', lineHeight: 1.15, marginBottom: 'var(--space-4)', letterSpacing: '-0.5px' }}>
              {t.title}
            </h2>
            <p style={{ fontSize: 'var(--font-size-h3)', color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: 'var(--space-5)' }}>
              {t.subtitle}
            </p>

            <ul role="list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {modelTestTracks.map((track) => (
                <li key={track.id} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: track.color, flexShrink: 0 }} aria-hidden="true" />
                  <span style={{ fontSize: 'var(--font-size-md)', fontWeight: 600, color: 'var(--color-text-primary)', minWidth: 140 }}>
                    {lang === 'bn' ? track.labelBn : track.labelEn}
                  </span>
                  <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
                    {lang === 'bn' ? track.descBn : track.descEn}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: interactive selector */}
          <div
            className="reveal"
            role="region"
            aria-label={t.selectLabel}
            style={{ background: 'var(--color-surface-card)', border: '1px solid var(--color-border-default)', borderRadius: 'var(--radius-sm)', overflow: 'hidden', boxShadow: 'var(--shadow-navy)' }}
          >
            <div style={{ padding: 'var(--space-3) var(--space-4)', borderBottom: '1px solid var(--color-border-default)', textAlign: 'center' }}>
              <p style={{ fontSize: 'var(--font-size-md)', fontWeight: 600, color: 'var(--color-text-primary)' }}>{t.selectLabel}</p>
            </div>

            <ul role="list" style={{ listStyle: 'none' }}>
              {modelTestTracks.map((track) => {
                const isSelected = selected === track.id;
                return (
                  <li key={track.id}>
                    <button
                      onClick={() => setSelected(isSelected ? null : track.id)}
                      aria-pressed={isSelected}
                      aria-label={`${lang === 'bn' ? track.labelBn : track.labelEn} model test`}
                      className="track-btn"
                      style={{
                        background: isSelected ? `${track.color}12` : 'transparent',
                      }}
                    >
                      <span style={{ width: 34, height: 34, borderRadius: 'var(--radius-xs)', background: `${track.color}18`, border: `1px solid ${track.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }} aria-hidden="true">
                        {renderTrackIcon(track.iconType, track.color)}
                      </span>
                      <div style={{ flex: 1, textAlign: 'left' }}>
                        <p style={{ fontSize: 'var(--font-size-md)', fontWeight: 700, color: isSelected ? track.color : 'var(--color-text-primary)', letterSpacing: '0.3px', lineHeight: 1 }}>
                          {lang === 'bn' ? track.labelBn : track.labelEn}
                        </p>
                        <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)', marginTop: 'var(--space-1)' }}>
                          {lang === 'bn' ? track.descBn : track.descEn}
                        </p>
                      </div>
                      {track.hot && (
                        <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, color: '#8b5cf6', background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)', borderRadius: 'var(--radius-md)', padding: '2px 8px', flexShrink: 0, marginRight: '8px' }}>
                          {lang === 'bn' ? 'নতুন' : 'NEW'}
                        </span>
                      )}
                      <svg 
                        className="chevron-svg" 
                        width="14" 
                        height="14" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke={isSelected ? track.color : 'var(--color-text-tertiary)'} 
                        strokeWidth="2.5" 
                        aria-hidden="true"
                      >
                        <path d="M9 18l6-6-6-6"/>
                      </svg>
                    </button>
                  </li>
                );
              })}
            </ul>

            <div style={{ padding: 'var(--space-3) var(--space-4)' }}>
              <a href="https://web.prostuti.bd" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} aria-label={lang === 'bn' ? 'মক টেস্ট শুরু করতে নিবন্ধন করুন' : 'Register to start a model test'}>
                {t.start} →
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .track-btn {
          width: 100%;
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding: var(--space-3) var(--space-4);
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--color-border-default);
          cursor: pointer;
          font-family: var(--font-family-primary);
          transition: background var(--duration-fast) var(--easing-default);
          outline: none;
        }
        .track-btn:focus-visible {
          background: rgba(255, 255, 255, 0.04) !important;
          outline: 2px solid var(--color-link);
          outline-offset: -2px;
        }
        .track-btn:hover {
          background: rgba(255, 255, 255, 0.03);
        }
        :global(.chevron-svg) {
          transition: transform var(--duration-fast) var(--easing-default);
        }
        .track-btn:hover :global(.chevron-svg), .track-btn:focus-visible :global(.chevron-svg) {
          transform: translateX(3px);
        }
        @media (max-width: 900px) {
          .mock-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}

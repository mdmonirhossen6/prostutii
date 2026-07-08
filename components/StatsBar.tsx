'use client';

import { useEffect, useRef, useState } from 'react';

interface StatsBarProps {
  lang: 'bn' | 'en';
}

const statsData = {
  bn: [
    { value: 200000, suffix: '+', label: 'প্রশ্ন সমূহ', iconType: 'document' },
    { value: 4, suffix: 'টি', label: 'পরীক্ষার প্রোগ্রাম', iconType: 'target' },
    { value: 98, suffix: '%', label: 'দৈনিক লক্ষ্য সম্পন্নতা', iconType: 'fire' },
    { value: 1781, suffix: '+', label: 'সর্বোচ্চ সাপ্তাহিক XP', iconType: 'trophy' },
  ],
  en: [
    { value: 200000, suffix: '+', label: 'Questions', iconType: 'document' },
    { value: 4, suffix: '', label: 'Exam Programs', iconType: 'target' },
    { value: 98, suffix: '%', label: 'Daily Goal Rate', iconType: 'fire' },
    { value: 1781, suffix: '+', label: 'Top Weekly XP', iconType: 'trophy' },
  ],
};

const EN_TO_BN_DIGITS: { [key: string]: string } = {
  '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪',
  '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯'
};

function toBanglaNumerals(num: string | number): string {
  return num.toString().split('').map(char => EN_TO_BN_DIGITS[char] || char).join('');
}

function formatDisplay(value: number, lang: 'bn' | 'en', target: number): string {
  if (target === 200000) {
    if (lang === 'bn') {
      const lakhs = (value / 100000).toFixed(value >= 200000 ? 0 : 1);
      return toBanglaNumerals(lakhs) + ' লক্ষ';
    } else {
      return (value / 1000).toFixed(0) + 'k';
    }
  }
  
  const formatted = Math.floor(value).toLocaleString('en-US');
  return lang === 'bn' ? toBanglaNumerals(formatted) : formatted;
}

function renderIcon(type: string, color: string = 'var(--color-surface-strong)') {
  const props = {
    width: 28,
    height: 28,
    stroke: color,
    strokeWidth: 2,
    fill: 'none',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  switch (type) {
    case 'document':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      );
    case 'target':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case 'fire':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
        </svg>
      );
    case 'trophy':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
          <path d="M12 2a7 7 0 0 0-7 7c0 2.22 1.2 4.15 3 5.19l.34.2a2.32 2.32 0 0 0 2.32 0l.34-.2a6.97 6.97 0 0 0 3-5.19C19 4.22 15.78 2 12 2z" />
        </svg>
      );
    default:
      return null;
  }
}

function AnimatedCounter({ target, suffix, lang }: { target: number; suffix: string; lang: 'bn' | 'en' }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { 
        if (entry.isIntersecting && !started) {
          const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          if (prefersReducedMotion) {
            setCount(target);
            setStarted(true);
          } else {
            setStarted(true);
          }
        } 
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started, target]);

  useEffect(() => {
    if (!started || count === target) return;
    let start = 0;
    const duration = 1500;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start = Math.min(start + step, target);
      setCount(Math.floor(start));
      if (start >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [started, target]);

  const display = formatDisplay(count, lang, target);
  const finalSuffix = lang === 'bn' ? toBanglaNumerals(suffix) : suffix;

  return (
    <span ref={ref}>
      {display}{finalSuffix}
    </span>
  );
}

export default function StatsBar({ lang }: StatsBarProps) {
  const items = statsData[lang];

  return (
    <section
      aria-label={lang === 'bn' ? 'প্রস্তুতির পরিসংখ্যান' : 'Prostuti statistics'}
    >
      <div className="divider-glow" role="separator" aria-hidden="true" />

      <div
        className="container-page"
        style={{
          marginTop: 'var(--space-1)',
          background: 'linear-gradient(135deg, rgba(0,150,109,0.06) 0%, rgba(77,107,255,0.04) 100%)',
          borderBottom: '1px solid var(--color-border-default)',
          borderTop: '1px solid var(--color-border-default)',
          borderLeft: 'none',
          borderRight: 'none',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0',
          }}
          className="stats-grid"
          role="list"
        >
          {items.map((stat, i) => (
            <div
              key={i}
              role="listitem"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'var(--space-6) var(--space-4)',
                borderRight: i < items.length - 1 ? '1px solid var(--color-border-default)' : 'none',
                textAlign: 'center',
                transition: 'background var(--duration-fast) var(--easing-default)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(0,150,109,0.05)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = 'transparent';
              }}
            >
              <span style={{ height: '28px', marginBottom: 'var(--space-2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {renderIcon(stat.iconType, 'var(--color-surface-strong)')}
              </span>
              <p
                style={{
                  fontSize: 'var(--font-size-h2)',
                  fontWeight: 800,
                  color: 'var(--color-text-primary)',
                  lineHeight: 1,
                  marginBottom: 'var(--space-2)',
                }}
                aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} lang={lang} />
              </p>
              <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)', fontWeight: 500 }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="divider-glow" role="separator" aria-hidden="true" />

      <style jsx>{`
        @media (max-width: 900px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .stats-grid > div {
            border-bottom: 1px solid var(--color-border-default);
          }
          .stats-grid > div:nth-child(2n) {
            border-right: none !important;
          }
          .stats-grid > div:nth-child(3), .stats-grid > div:nth-child(4) {
            border-bottom: none !important;
          }
        }
        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';

interface StatsBarProps {
  lang: 'bn' | 'en';
}

const stats = {
  bn: [
    { value: 200000, suffix: '+', label: 'প্রশ্ন সমূহ', icon: '📝' },
    { value: 4, suffix: 'টি', label: 'পরীক্ষার ট্র্যাক', icon: '🎯' },
    { value: 98, suffix: '%', label: 'Daily Goal সম্পন্নতা', icon: '🔥' },
    { value: 1781, suffix: '+', label: 'সর্বোচ্চ সাপ্তাহিক XP', icon: '🏆' },
  ],
  en: [
    { value: 200000, suffix: '+', label: 'Questions', icon: '📝' },
    { value: 4, suffix: '', label: 'Exam Tracks', icon: '🎯' },
    { value: 98, suffix: '%', label: 'Daily Goal Rate', icon: '🔥' },
    { value: 1781, suffix: '+', label: 'Top Weekly XP', icon: '🏆' },
  ],
};


function formatNumber(n: number): string {
  if (n >= 100000) return (n / 100000).toFixed(0) + ' লক্ষ';
  if (n >= 1000) return (n / 1000).toFixed(0) + ' হাজার';
  return n.toString();
}

function AnimatedCounter({ target, suffix, lang }: { target: number; suffix: string; lang: 'bn' | 'en' }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
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

  const display = lang === 'bn' && target >= 1000 ? formatNumber(count) : count.toLocaleString();

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  );
}

export default function StatsBar({ lang }: StatsBarProps) {
  const items = stats[lang];

  return (
    <section
      aria-label={lang === 'bn' ? 'প্রস্তুতির পরিসংখ্যান' : 'Prostuti statistics'}
      style={{ padding: '0 0 var(--space-8) 0' }}
    >
      <div className="divider-glow" role="separator" aria-hidden="true" />

      <div
        className="container-page"
        style={{
          marginTop: '2px',
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
              <span style={{ fontSize: '28px', marginBottom: '8px' }} role="img" aria-label={stat.label}>
                {stat.icon}
              </span>
              <p
                style={{
                  fontSize: '28px',
                  fontWeight: 800,
                  color: 'var(--color-text-primary)',
                  lineHeight: 1,
                  marginBottom: '6px',
                }}
                aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} lang={lang} />
              </p>
              <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-inverse)', fontWeight: 500 }}>
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
            grid-template-columns: repeat(3, 1fr) !important;
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

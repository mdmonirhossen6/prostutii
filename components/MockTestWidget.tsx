'use client';

import { useState } from 'react';

interface MockTestWidgetProps {
  lang: 'bn' | 'en';
}

const modelTestTracks = [
  {
    id: 'weekly',
    icon: '📅',
    color: '#ef4444',
    labelBn: 'সাপ্তাহিক পরীক্ষা',
    labelEn: 'WEEKLY EXAM',
    descBn: 'সাপ্তাহিক Varsity ও Engineering ভর্তি পরীক্ষা — লিডারবোর্ড সহ',
    descEn: 'Weekly Varsity & Engineering admission exams with leaderboard',
  },
  {
    id: 'hsc',
    icon: '🏫',
    color: '#00966d',
    labelBn: 'HSC মডেল টেস্ট',
    labelEn: 'HSC MODEL TEST',
    descBn: 'HSC প্রস্তুতির জন্য বিষয় ও পেপার ফাইনাল টেস্ট',
    descEn: 'Subject & Paper Final tests for HSC standard preparation',
  },
  {
    id: 'medical',
    icon: '🏥',
    color: '#f97316',
    labelBn: 'মেডিকেল',
    labelEn: 'MEDICAL',
    descBn: 'পেপার ফাইনাল, বিষয় ফাইনাল ও ফুল টেস্ট',
    descEn: 'Paper Final, Subject Final & Full Tests',
  },
  {
    id: 'varsity',
    icon: '🏛️',
    color: '#4d6bff',
    labelBn: 'ভার্সিটি',
    labelEn: 'VARSITY',
    descBn: 'বিশ্ববিদ্যালয়-ভিত্তিক Unit মডেল টেস্ট',
    descEn: 'University-wise unit-based Model Tests',
  },
  {
    id: 'engineering',
    icon: '⚙️',
    color: '#f59e0b',
    labelBn: 'ইঞ্জিনিয়ারিং',
    labelEn: 'ENGINEERING',
    descBn: 'বুয়েট, DIU ও Tech Unit মডেল টেস্ট',
    descEn: 'BUET, DIUsal & Tech Unit Model Tests',
  },
  {
    id: 'battle',
    icon: '⚡',
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

export default function MockTestWidget({ lang }: MockTestWidgetProps) {
  const t = copy[lang];
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="mock-tests" aria-labelledby="mock-heading" style={{ padding: 'var(--space-8) 0', background: 'rgba(8,12,24,0.8)' }}>
      <div className="container-page">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }} className="mock-grid">

          {/* Left: copy */}
          <div>
            <span className="badge badge-blue" style={{ marginBottom: '20px' }}>{t.badge}</span>
            <h2 id="mock-heading" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: 'var(--color-text-primary)', lineHeight: 1.15, marginBottom: '16px', letterSpacing: '-0.5px' }}>
              {t.title}
            </h2>
            <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: '28px' }}>
              {t.subtitle}
            </p>

            <ul role="list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {modelTestTracks.map((track) => (
                <li key={track.id} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: track.color, flexShrink: 0 }} aria-hidden="true" />
                  <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text-primary)', minWidth: 140 }}>
                    {lang === 'bn' ? track.labelBn : track.labelEn}
                  </span>
                  <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-inverse)' }}>
                    {lang === 'bn' ? track.descBn : track.descEn}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: interactive selector */}
          <div
            role="region"
            aria-label={t.selectLabel}
            style={{ background: 'var(--color-surface-card)', border: '1px solid var(--color-border-default)', borderRadius: 'var(--radius-sm)', overflow: 'hidden', boxShadow: 'var(--shadow-navy)' }}
          >
            <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--color-border-default)', textAlign: 'center' }}>
              <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text-primary)' }}>{t.selectLabel}</p>
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
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        padding: '14px 20px',
                        background: isSelected ? `${track.color}12` : 'transparent',
                        border: 'none',
                        borderBottom: '1px solid var(--color-border-default)',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-family-primary)',
                        transition: 'background var(--duration-fast) var(--easing-default)',
                        textAlign: 'left',
                      }}
                      onMouseEnter={(e) => { if (!isSelected) (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.03)'; }}
                      onMouseLeave={(e) => { if (!isSelected) (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
                    >
                      <span style={{ width: 34, height: 34, borderRadius: 'var(--radius-xs)', background: `${track.color}18`, border: `1px solid ${track.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', flexShrink: 0 }} aria-hidden="true">
                        {track.icon}
                      </span>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: 700, color: isSelected ? track.color : 'var(--color-text-primary)', letterSpacing: '0.3px', lineHeight: 1 }}>
                          {lang === 'bn' ? track.labelBn : track.labelEn}
                        </p>
                        <p style={{ fontSize: '11px', color: 'var(--color-text-inverse)', marginTop: '3px' }}>
                          {lang === 'bn' ? track.descBn : track.descEn}
                        </p>
                      </div>
                      {track.hot && (
                        <span style={{ fontSize: '10px', fontWeight: 700, color: '#8b5cf6', background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)', borderRadius: 'var(--radius-md)', padding: '2px 8px', flexShrink: 0 }}>
                          {t.hot}
                        </span>
                      )}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={isSelected ? track.color : 'var(--color-text-inverse)'} strokeWidth="2" aria-hidden="true">
                        <path d="M9 18l6-6-6-6"/>
                      </svg>
                    </button>
                  </li>
                );
              })}
            </ul>

            <div style={{ padding: '14px 20px' }}>
              <a href="https://web.prostuti.bd" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} aria-label={lang === 'bn' ? 'মক টেস্ট শুরু করতে নিবন্ধন করুন' : 'Register to start a model test'}>
                {t.start} →
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .mock-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}

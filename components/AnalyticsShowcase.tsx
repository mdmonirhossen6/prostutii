'use client';

import { useState } from 'react';

interface AnalyticsShowcaseProps {
  lang: 'bn' | 'en';
}

type Track = 'hsc' | 'engineering' | 'medical';

const trackData = {
  hsc: {
    bn: {
      name: 'HSC বিজ্ঞান বিভাগ',
      subjects: [
        { name: 'পদার্থবিজ্ঞান', accuracy: 82 },
        { name: 'রসায়ন', accuracy: 68 },
        { name: 'উচ্চতর গণিত', accuracy: 90 },
        { name: 'জীববিজ্ঞান', accuracy: 74 }
      ],
      weakTopics: [
        { topic: 'পদার্থবিজ্ঞান — তড়িৎ চৌম্বকীয় আবেশ', accuracy: 48, reco: 'পরবর্তী ৩ দিন এই টপিকে ফোকাস করুন' },
        { topic: 'রসায়ন — তড়িৎ রসায়ন ও কোষ', accuracy: 55, reco: 'বিগত ৫ বছরের বোর্ড প্রশ্ন সমাধান করুন' },
        { topic: 'জীববিজ্ঞান — রক্ত ও সংবহনতন্ত্র', accuracy: 60, reco: 'অধ্যায়ভিত্তিক অনুধাবনমূলক প্রশ্ন প্র্যাকটিস করুন' }
      ]
    },
    en: {
      name: 'HSC Science Track',
      subjects: [
        { name: 'Physics', accuracy: 82 },
        { name: 'Chemistry', accuracy: 68 },
        { name: 'Higher Math', accuracy: 90 },
        { name: 'Biology', accuracy: 74 }
      ],
      weakTopics: [
        { topic: 'Physics — Electromagnetic Induction', accuracy: 48, reco: 'Focus on this topic for the next 3 days' },
        { topic: 'Chemistry — Electrochemistry', accuracy: 55, reco: 'Solve last 5 years board questions' },
        { topic: 'Biology — Blood & Circulation', accuracy: 60, reco: 'Practice chapter-wise analytical MCQs' }
      ]
    }
  },
  engineering: {
    bn: {
      name: 'ইঞ্জিনিয়ারিং প্রস্তুতি',
      subjects: [
        { name: 'পদার্থবিজ্ঞান', accuracy: 72 },
        { name: 'রসায়ন', accuracy: 60 },
        { name: 'উচ্চতর গণিত', accuracy: 85 },
        { name: 'ইংরেজি', accuracy: 65 }
      ],
      weakTopics: [
        { topic: 'গণিত — কনিক ও পরাবৃত্ত', accuracy: 42, reco: 'লিখিত প্রশ্নব্যাংক সমাধান করুন' },
        { topic: 'পদার্থবিজ্ঞান — নিউটনীয় বলবিদ্যা', accuracy: 50, reco: 'Type-wise গাণিতিক সমস্যা প্র্যাকটিস করুন' },
        { topic: 'রসায়ন — রাসায়নিক পরিবর্তন', accuracy: 58, reco: 'বিক্রিয়ার সাম্যাবস্থা ও pH ম্যাথ রিভিশন দিন' }
      ]
    },
    en: {
      name: 'Engineering Track',
      subjects: [
        { name: 'Physics', accuracy: 72 },
        { name: 'Chemistry', accuracy: 60 },
        { name: 'Higher Math', accuracy: 85 },
        { name: 'English', accuracy: 65 }
      ],
      weakTopics: [
        { topic: 'Math — Conics & Parabola', accuracy: 42, reco: 'Solve written question bank problems' },
        { topic: 'Physics — Newtonian Mechanics', accuracy: 50, reco: 'Practice type-wise math problems' },
        { topic: 'Chemistry — Chemical Change', accuracy: 58, reco: 'Revise chemical equilibrium & pH calculations' }
      ]
    }
  },
  medical: {
    bn: {
      name: 'মেডিকেল প্রস্তুতি',
      subjects: [
        { name: 'জীববিজ্ঞান', accuracy: 86 },
        { name: 'রসায়ন', accuracy: 70 },
        { name: 'পদার্থবিজ্ঞান', accuracy: 64 },
        { name: 'সাধারণ জ্ঞান', accuracy: 78 }
      ],
      weakTopics: [
        { topic: 'পদার্থবিজ্ঞান — ভৌত আলোকবিজ্ঞান', accuracy: 40, reco: 'সংজ্ঞা ও মৌলিক সূত্রাবলী মুখস্থ করুন' },
        { topic: 'রসায়ন — জৈব রসায়ন', accuracy: 52, reco: 'গুরুত্বপূর্ণ পলিমার ও বিক্রিয়ার ছকগুলো পড়ুন' },
        { topic: 'সাধারণ জ্ঞান — বাংলাদেশের ইতিহাস', accuracy: 58, reco: 'বিগত ১০ বছরের মেডিকেল জিকে পড়ুন' }
      ]
    },
    en: {
      name: 'Medical Track',
      subjects: [
        { name: 'Biology', accuracy: 86 },
        { name: 'Chemistry', accuracy: 70 },
        { name: 'Physics', accuracy: 64 },
        { name: 'General Knowledge', accuracy: 78 }
      ],
      weakTopics: [
        { topic: 'Physics — Physical Optics', accuracy: 40, reco: 'Memorize core definitions and wave formulas' },
        { topic: 'Chemistry — Organic Chemistry', accuracy: 52, reco: 'Read polymer reactions and identity charts' },
        { topic: 'General Knowledge — History of BD', accuracy: 58, reco: 'Study last 10 years medical GK questions' }
      ]
    }
  }
};

const copy = {
  bn: {
    badge: 'পারফরম্যান্স অ্যানালিটিক্স',
    title: 'তোমার দুর্বলতা চিহ্নিত করো',
    subtitle: 'অ্যানালিটিক্স ড্যাশবোর্ড থেকে তোমার প্রস্তুতি ট্র্যাক করো। দুর্বল টপিক চিহ্নিত করে AI সহায়তায় প্রস্তুতি নিখুঁত করো।',
    chartTitle: 'বিষয়ভিত্তিক নির্ভুলতা (%)',
    weakTopicsTitle: 'দুর্বল অধ্যায় ও টপিক (weakest first)',
    aiPill: 'AI পরামর্শ',
    actionCta: 'প্র্যাকটিস শুরু করুন'
  },
  en: {
    badge: 'Performance Analytics',
    title: 'Pinpoint Your Weaknesses',
    subtitle: 'Track your preparation from the analytics dashboard. Identify weak topics and perfect them with AI insights.',
    chartTitle: 'Subject Accuracy (%)',
    weakTopicsTitle: 'Weak Chapters & Topics (weakest first)',
    aiPill: 'AI Advice',
    actionCta: 'Start Practice'
  }
};

export default function AnalyticsShowcase({ lang }: AnalyticsShowcaseProps) {
  const t = copy[lang];
  const [activeTrack, setActiveTrack] = useState<Track>('hsc');
  const data = trackData[activeTrack][lang];

  // SVG dimensions
  const size = 300;
  const center = size / 2;
  const radius = 100;

  // Accuracies mapped to 4 axes
  const p0 = (data.subjects[0].accuracy / 100) * radius;
  const p1 = (data.subjects[1].accuracy / 100) * radius;
  const p2 = (data.subjects[2].accuracy / 100) * radius;
  const p3 = (data.subjects[3].accuracy / 100) * radius;

  // Radar polygon points
  const pointsStr = `
    ${center},${center - p0}
    ${center + p1},${center}
    ${center},${center + p2}
    ${center - p3},${center}
  `.trim().replace(/\s+/g, ' ');

  return (
    <section id="analytics" aria-labelledby="analytics-heading" style={{ padding: 'var(--space-8) 0', background: 'var(--color-surface-card-deep)', borderTop: '1px solid var(--color-border-default)' }}>
      <div className="container-page">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-7)' }}>
          <span className="badge badge-green" style={{ marginBottom: 'var(--space-4)' }}>{t.badge}</span>
          <h2 id="analytics-heading" className="section-title" style={{ marginBottom: 'var(--space-3)' }}>{t.title}</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>{t.subtitle}</p>
        </div>

        {/* Track Selector Tab */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '40px', flexWrap: 'wrap' }}>
          {(['hsc', 'engineering', 'medical'] as Track[]).map((trk) => (
            <button
              key={trk}
              onClick={() => setActiveTrack(trk)}
              style={{
                background: activeTrack === trk ? 'var(--color-surface-strong)' : 'rgba(255,255,255,0.02)',
                border: '1px solid var(--color-border-default)',
                color: activeTrack === trk ? '#000' : 'var(--color-text-secondary)',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {trackData[trk][lang].name}
            </button>
          ))}
        </div>

        {/* Main Analytics Content */}
        <div className="analytics-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '48px', alignItems: 'center' }}>
          
          {/* Radar Chart Display */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'var(--color-surface-card)', border: '1px solid var(--color-border-default)', borderRadius: '12px', padding: '24px', boxShadow: 'var(--shadow-navy)' }}>
            <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '20px' }}>
              {t.chartTitle}
            </h3>

            <svg viewBox={`0 0 ${size} ${size}`} style={{ width: '100%', maxWidth: '280px', height: 'auto' }}>
              {/* Outer Grid rings */}
              {[25, 50, 75, 100].map((percent) => {
                const r = (percent / 100) * radius;
                return (
                  <polygon
                    key={percent}
                    points={`
                      ${center},${center - r}
                      ${center + r},${center}
                      ${center},${center + r}
                      ${center - r},${center}
                    `}
                    fill="none"
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth="1"
                  />
                );
              })}

              {/* Axis Grid lines */}
              <line x1={center} y1={center - radius} x2={center} y2={center + radius} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
              <line x1={center - radius} y1={center} x2={center + radius} y2={center} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

              {/* Student Accuracy Shape (Refined Green Accent only - no purple) */}
              <polygon
                points={pointsStr}
                fill="rgba(0,150,109,0.12)"
                stroke="var(--color-surface-strong)"
                strokeWidth="2.5"
                style={{ transition: 'all 0.4s ease' }}
              />

              {/* Outer Ring boundary labels */}
              {/* Top Axis Label */}
              <text x={center} y={center - radius - 12} textAnchor="middle" fill="var(--color-text-secondary)" fontSize="11" fontWeight="700" style={{ fontFamily: 'monospace' }}>
                {data.subjects[0].name} ({data.subjects[0].accuracy}%)
              </text>
              {/* Right Axis Label */}
              <text x={center + radius + 10} y={center + 4} textAnchor="start" fill="var(--color-text-secondary)" fontSize="11" fontWeight="700" style={{ fontFamily: 'monospace' }}>
                {data.subjects[1].name} ({data.subjects[1].accuracy}%)
              </text>
              {/* Bottom Axis Label */}
              <text x={center} y={center + radius + 20} textAnchor="middle" fill="var(--color-text-secondary)" fontSize="11" fontWeight="700" style={{ fontFamily: 'monospace' }}>
                {data.subjects[2].name} ({data.subjects[2].accuracy}%)
              </text>
              {/* Left Axis Label */}
              <text x={center - radius - 10} y={center + 4} textAnchor="end" fill="var(--color-text-secondary)" fontSize="11" fontWeight="700" style={{ fontFamily: 'monospace' }}>
                {data.subjects[3].name} ({data.subjects[3].accuracy}%)
              </text>
            </svg>
          </div>

          {/* Weak Topics List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-text-primary)' }}>
              {t.weakTopicsTitle}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {data.weakTopics.map((topicItem, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'var(--color-surface-card)',
                    border: '1px solid var(--color-border-default)',
                    borderRadius: '8px',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                      {topicItem.topic}
                    </span>
                    <span style={{ fontFamily: 'monospace', fontSize: '12px', fontWeight: 700, color: '#f59e0b' }}>
                      {lang === 'bn' ? 'নির্ভুলতা' : 'Accuracy'}: {topicItem.accuracy}%
                    </span>
                  </div>

                  {/* Intensity Bar (Amber/Yellow gradient - no red) */}
                  <div style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div
                      style={{
                        height: '100%',
                        width: `${topicItem.accuracy}%`,
                        background: 'linear-gradient(90deg, #f59e0b 0%, #eab308 100%)',
                        borderRadius: '3px',
                        transition: 'width 0.4s ease'
                      }}
                    />
                  </div>

                  {/* AI Recommendation Box */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', background: 'rgba(139,92,246,0.05)', border: '1px solid rgba(139,92,246,0.12)', borderRadius: '6px', padding: '8px 12px' }}>
                    <span style={{ fontSize: '10px', fontWeight: 800, background: 'var(--color-accent-purple)', color: '#fff', padding: '2px 6px', borderRadius: '4px' }}>
                      {t.aiPill}
                    </span>
                    <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                      {topicItem.reco}
                    </span>
                  </div>

                  {/* Practice Action Link/Button */}
                  <a
                    href="https://web.prostuti.bd"
                    style={{
                      alignSelf: 'flex-end',
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid var(--color-border-default)',
                      borderRadius: '4px',
                      color: 'var(--color-text-primary)',
                      padding: '6px 12px',
                      fontSize: '11px',
                      fontWeight: 700,
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-surface-strong)';
                      (e.currentTarget as HTMLAnchorElement).style.color = '#000';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.02)';
                      (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text-primary)';
                    }}
                  >
                    {t.actionCta}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </a>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .analytics-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}

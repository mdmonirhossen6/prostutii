'use client';

import { useState, useEffect, useRef } from 'react';

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
        { topic: 'রসায়ন — তড়িৎ রসায়ন ও কোষ', accuracy: 55, reco: 'বিগত ৫ বছরের বোর্ড প্রশ্ন সমাধান করুন' },
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
        { topic: 'রসায়ন — জৈব রসায়ন', accuracy: 52, reco: 'গুরুত্বপূর্ণ পলিমার ও বিক্রিয়ার ছকগুলো পড়ুন' },
        { topic: 'সাধারণ জ্ঞান — বাংলাদেশের ইতিহাস', accuracy: 58, reco: 'বিগত ১০ বছরের মেডিকেল জিকে পড়ুন' }
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
    subtitle: 'অ্যানালিটিক্স ড্যাশবোর্ড থেকে তোমার প্রস্তুতি ট্র্যাক করো। দুর্বল টপিক চিহ্নিত করে AI সহায়তায় প্রস্তুতি নিখুঁত করো।',
    chartTitle: 'বিষয়ভিত্তিক নির্ভুলতা (%)',
    weakTopicsTitle: 'দুর্বল অধ্যায় ও টপিক',
    tableHeaderTopic: 'টপিক',
    tableHeaderAccuracy: 'নির্ভুলতা',
    tableHeaderAction: 'পরামর্শ',
    aiPill: 'AI',
    actionCta: 'প্র্যাকটিস শুরু করুন'
  },
  en: {
    badge: 'Performance Analytics',
    title: 'Pinpoint Your Weaknesses',
    subtitle: 'Track your preparation from the analytics dashboard. Identify weak topics and perfect them with AI insights.',
    chartTitle: 'Subject Accuracy (%)',
    weakTopicsTitle: 'Weak Chapters & Topics',
    tableHeaderTopic: 'Topic',
    tableHeaderAccuracy: 'Accuracy',
    tableHeaderAction: 'Action',
    aiPill: 'AI',
    actionCta: 'Start Practice'
  }
};

export default function AnalyticsShowcase({ lang }: AnalyticsShowcaseProps) {
  const t = copy[lang];
  const [activeTrack, setActiveTrack] = useState<Track>('hsc');
  const data = trackData[activeTrack][lang];

  // Radar draw animation
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [drawProgress, setDrawProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  // Scroll reveal for .reveal elements
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      section.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    section.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const startTime = performance.now();
    const duration = 1200;
    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDrawProgress(eased);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible]);

  // SVG dimensions — wider for Bengali labels
  const svgW = 520;
  const svgH = 440;
  const cx = svgW / 2;
  const cy = svgH / 2;
  const radius = 140;

  // Accuracies mapped to 4 axes (top, right, bottom, left) with animation
  const p0 = (data.subjects[0].accuracy / 100) * radius * drawProgress;
  const p1 = (data.subjects[1].accuracy / 100) * radius * drawProgress;
  const p2 = (data.subjects[2].accuracy / 100) * radius * drawProgress;
  const p3 = (data.subjects[3].accuracy / 100) * radius * drawProgress;

  // Radar polygon points
  const pointsStr = `
    ${cx},${cy - p0}
    ${cx + p1},${cy}
    ${cx},${cy + p2}
    ${cx - p3},${cy}
  `.trim().replace(/\s+/g, ' ');

  return (
    <section
      id="analytics"
      ref={sectionRef}
      aria-labelledby="analytics-heading"
      style={{
        minHeight: '90vh',
        padding: '120px 0 140px',
        background: 'var(--color-surface-card-deep)',
        borderTop: '1px solid var(--color-border-default)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Enhanced grid texture overlay — slightly higher opacity */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Ambient green glow behind chart */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '25%',
          width: '500px',
          height: '500px',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(0,150,109,0.15) 0%, rgba(0,150,109,0.05) 40%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container-page" style={{ position: 'relative', zIndex: 1 }}>
        <div className="analytics-grid reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '56px', alignItems: 'center' }}>
          
          {/* Left Column: Text Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            
            {/* Section Header */}
            <div>
              <span className="badge badge-green" style={{ marginBottom: 'var(--space-4)' }}>{t.badge}</span>
              <h2 id="analytics-heading" className="section-title" style={{ textAlign: 'left', marginBottom: 'var(--space-3)' }}>{t.title}</h2>
              <p className="section-subtitle" style={{ textAlign: 'left', margin: 0 }}>{t.subtitle}</p>
            </div>

            {/* Track Selector Tab */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {(['hsc', 'engineering', 'medical'] as Track[]).map((trk) => (
                <button
                  key={trk}
                  onClick={() => { setActiveTrack(trk); setDrawProgress(0); setIsVisible(false); setTimeout(() => setIsVisible(true), 50); }}
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

            {/* Weak Topics — restyled as data table */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                {t.weakTopicsTitle}
              </h3>

              {/* Data Table */}
              <div style={{
                background: 'var(--color-surface-card)',
                border: '1px solid var(--color-border-default)',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-navy)',
              }}>
                {/* Table header row */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '2fr 100px 1fr',
                  gap: '12px',
                  padding: '14px 20px',
                  background: 'rgba(255,255,255,0.02)',
                  borderBottom: '1px solid var(--color-border-default)',
                }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-text-tertiary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {t.tableHeaderTopic}
                  </span>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-text-tertiary)', textTransform: 'uppercase', letterSpacing: '1px', textAlign: 'center' }}>
                    {t.tableHeaderAccuracy}
                  </span>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-text-tertiary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {t.tableHeaderAction}
                  </span>
                </div>

                {/* Table body rows */}
                {data.weakTopics.map((topicItem, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '2fr 100px 1fr',
                      gap: '12px',
                      padding: '16px 20px',
                      borderBottom: idx < data.weakTopics.length - 1 ? '1px solid var(--color-border-default)' : 'none',
                      alignItems: 'center',
                      transition: 'background 0.2s ease',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.02)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = 'transparent'; }}
                  >
                    {/* Topic */}
                    <div>
                      <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-text-primary)', lineHeight: 1.4, display: 'block' }}>
                        {topicItem.topic}
                      </span>
                    </div>

                    {/* Accuracy with visual bar */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                      <span style={{ fontFamily: 'monospace', fontSize: '14px', fontWeight: 800, color: '#f59e0b' }}>
                        {topicItem.accuracy}%
                      </span>
                      <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
                        <div
                          style={{
                            height: '100%',
                            width: `${topicItem.accuracy * drawProgress}%`,
                            background: 'linear-gradient(90deg, #f59e0b 0%, #eab308 100%)',
                            borderRadius: '2px',
                            transition: 'width 0.4s ease'
                          }}
                        />
                      </div>
                    </div>

                    {/* Action — AI recommendation + CTA */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                        <span style={{ fontSize: '9px', fontWeight: 800, background: 'var(--color-accent-purple)', color: '#fff', padding: '1px 5px', borderRadius: '3px', flexShrink: 0, marginTop: '2px' }}>
                          {t.aiPill}
                        </span>
                        <span style={{ fontSize: '11px', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
                          {topicItem.reco}
                        </span>
                      </div>
                      <a
                        href="https://web.prostuti.bd"
                        style={{
                          alignSelf: 'flex-start',
                          background: 'transparent',
                          border: '1px solid var(--color-border-default)',
                          borderRadius: '4px',
                          color: 'var(--color-text-primary)',
                          padding: '4px 10px',
                          fontSize: '10px',
                          fontWeight: 700,
                          textDecoration: 'none',
                          transition: 'all 0.2s ease',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-surface-strong)';
                          (e.currentTarget as HTMLAnchorElement).style.color = '#000';
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                          (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text-primary)';
                        }}
                      >
                        {t.actionCta}
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Radar Chart Display — scaled up significantly */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'var(--color-surface-card)',
            border: '1px solid var(--color-border-default)',
            borderRadius: '12px',
            padding: '32px 24px',
            boxShadow: '0 24px 64px rgba(0,0,0,0.5), var(--shadow-glow)',
            position: 'relative',
          }}>
            {/* Card glow accent */}
            <div aria-hidden="true" style={{
              position: 'absolute',
              top: '-1px',
              left: '20%',
              right: '20%',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, var(--color-surface-strong), transparent)',
              borderRadius: '2px',
            }} />

            <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '20px' }}>
              {t.chartTitle}
            </h3>

            <svg viewBox={`0 0 ${svgW} ${svgH}`} style={{ width: '100%', maxWidth: '460px', height: 'auto' }} overflow="visible">
              {/* Outer Grid rings */}
              {[25, 50, 75, 100].map((percent) => {
                const r = (percent / 100) * radius;
                return (
                  <polygon
                    key={percent}
                    points={`
                      ${cx},${cy - r}
                      ${cx + r},${cy}
                      ${cx},${cy + r}
                      ${cx - r},${cy}
                    `}
                    fill="none"
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth="1"
                  />
                );
              })}

              {/* Axis Grid lines */}
              <line x1={cx} y1={cy - radius} x2={cx} y2={cy + radius} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
              <line x1={cx - radius} y1={cy} x2={cx + radius} y2={cy} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

              {/* Student Accuracy Shape — animated draw */}
              <polygon
                points={pointsStr}
                fill="rgba(0,150,109,0.15)"
                stroke="var(--color-surface-strong)"
                strokeWidth="2.5"
                style={{
                  opacity: drawProgress,
                  filter: `drop-shadow(0 0 ${8 * drawProgress}px rgba(0,150,109,0.4))`,
                }}
              />

              {/* Axis dot markers */}
              <circle cx={cx} cy={cy - p0} r="5" fill="var(--color-surface-strong)" style={{ opacity: drawProgress }} />
              <circle cx={cx + p1} cy={cy} r="5" fill="var(--color-surface-strong)" style={{ opacity: drawProgress }} />
              <circle cx={cx} cy={cy + p2} r="5" fill="var(--color-surface-strong)" style={{ opacity: drawProgress }} />
              <circle cx={cx - p3} cy={cy} r="5" fill="var(--color-surface-strong)" style={{ opacity: drawProgress }} />

              {/* Labels — placed with generous margins */}
              {/* Top */}
              <text x={cx} y={cy - radius - 20} textAnchor="middle" fill="var(--color-text-secondary)" fontSize="14" fontWeight="700">
                {data.subjects[0].name}
              </text>
              <text x={cx} y={cy - radius - 5} textAnchor="middle" fill="#00d9a0" fontSize="13" fontWeight="700" style={{ fontFamily: 'monospace' }}>
                {Math.round(data.subjects[0].accuracy * drawProgress)}%
              </text>
              {/* Right */}
              <text x={cx + radius + 18} y={cy - 5} textAnchor="start" fill="var(--color-text-secondary)" fontSize="14" fontWeight="700">
                {data.subjects[1].name}
              </text>
              <text x={cx + radius + 18} y={cy + 14} textAnchor="start" fill="#00d9a0" fontSize="13" fontWeight="700" style={{ fontFamily: 'monospace' }}>
                {Math.round(data.subjects[1].accuracy * drawProgress)}%
              </text>
              {/* Bottom */}
              <text x={cx} y={cy + radius + 24} textAnchor="middle" fill="var(--color-text-secondary)" fontSize="14" fontWeight="700">
                {data.subjects[2].name}
              </text>
              <text x={cx} y={cy + radius + 42} textAnchor="middle" fill="#00d9a0" fontSize="13" fontWeight="700" style={{ fontFamily: 'monospace' }}>
                {Math.round(data.subjects[2].accuracy * drawProgress)}%
              </text>
              {/* Left */}
              <text x={cx - radius - 18} y={cy - 5} textAnchor="end" fill="var(--color-text-secondary)" fontSize="14" fontWeight="700">
                {data.subjects[3].name}
              </text>
              <text x={cx - radius - 18} y={cy + 14} textAnchor="end" fill="#00d9a0" fontSize="13" fontWeight="700" style={{ fontFamily: 'monospace' }}>
                {Math.round(data.subjects[3].accuracy * drawProgress)}%
              </text>
            </svg>
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

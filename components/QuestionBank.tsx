'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTiltEffect } from '@/hooks/useTiltEffect';

interface QuestionBankProps {
  lang: 'bn' | 'en';
}

type Program = 'hsc' | 'varsity' | 'medical' | 'engineering';

const copy = {
  bn: {
    badge: 'সম্পূর্ণ প্রশ্নব্যাংক',
    title: 'তোমার প্রোগ্রামের সব প্রশ্ন, এক জায়গায়',
    subtitle: '২ লক্ষ+ প্রশ্ন — বোর্ড, বিশ্ববিদ্যালয় ও ইঞ্জিনিয়ারিং প্রশ্নব্যাংক এক প্ল্যাটফর্মে।',
    hscTab: 'HSC',
    varsityTab: 'Varsity',
    medicalTab: 'Medical',
    engineeringTab: 'Engineering',
    cta: 'সম্পূর্ণ প্রশ্নব্যাংক দেখুন →'
  },
  en: {
    badge: 'Complete Question Bank',
    title: 'All questions for your program, in one place',
    subtitle: '200k+ questions — Board, University & Engineering question banks in one platform.',
    hscTab: 'HSC',
    varsityTab: 'Varsity',
    medicalTab: 'Medical',
    engineeringTab: 'Engineering',
    cta: 'View full question bank →'
  }
};

const qbData = {
  hsc: [
    { id: 'hsc-qb', icon: 'institution', color: '#10b981', titleBn: 'প্রশ্নব্যাংক', descBn: 'বোর্ড অনুযায়ী বছরভিত্তিক প্রশ্ন', titleEn: 'Question Bank', descEn: 'Year-wise board questions' },
    { id: 'hsc-cq', icon: 'graduation-cap', color: '#f59e0b', titleBn: 'কলেজ প্রশ্ন', descBn: 'সেরা কলেজের সমাধানসহ প্রশ্ন', titleEn: 'College Questions', descEn: 'Top colleges questions with solutions' },
    { id: 'hsc-tp', icon: 'book', color: '#8b5cf6', titleBn: 'টেস্ট পেপার', descBn: 'সেরা কলেজের প্র্যাকটিস টেস্ট পেপার', titleEn: 'Test Paper', descEn: 'Top college practice test papers' },
    { id: 'hsc-tw', icon: 'droplet', color: '#ec4899', titleBn: 'টাইপ ওয়াইজ সিকিউ', descBn: 'ধরনভিত্তিক সৃজনশীল প্রশ্ন প্র্যাকটিস', titleEn: 'Type-wise CQ', descEn: 'Type-based creative question practice' },
    { id: 'hsc-ku', icon: 'open-book', color: '#3b82f6', titleBn: 'জ্ঞান ও অনুধাবন', descBn: 'ক ও খ প্রশ্ন প্র্যাকটিস', titleEn: 'Knowledge & Understanding', descEn: 'Ka & Kha question practice' },
    { id: 'hsc-cb', icon: 'book', color: '#4d6bff', titleBn: 'কম্প্যাক্ট বুক', descBn: 'কম্প্যাক্ট টেক্সটবুক MCQ সমাধান', titleEn: 'Compact Book', descEn: 'Compact textbook MCQ solutions' },
  ],
  varsity: [
    { id: 'var-mqb', icon: 'layered-diamond', color: '#6366f1', titleBn: 'মাস্টার প্রশ্নব্যাংক', descBn: 'বিষয়ভিত্তিক সাজানো মাস্টার কোশ্চেন ব্যাংক', titleEn: 'Master Question Bank', descEn: 'Subject-wise sorted master question bank' },
    { id: 'var-wqb', icon: 'pencil', color: '#ec4899', titleBn: 'লিখিত প্রশ্নব্যাংক', descBn: 'ভার্সিটি ভর্তির জন্য বিষয়ভিত্তিক লিখিত প্রশ্নোত্তর', titleEn: 'Written Question Bank', descEn: 'Subject-wise written Q&A for varsity admission' },
    { id: 'var-qb', icon: 'institution', color: '#f59e0b', titleBn: 'ভার্সিটি প্রশ্নব্যাংক', descBn: 'নির্দিষ্ট বিশ্ববিদ্যালয় অনুযায়ী বছরভিত্তিক সরকারি প্রশ্ন', titleEn: 'Varsity Question Bank', descEn: 'University-wise year-based official questions' },
    { id: 'var-mqbm', icon: 'game-controller', color: '#10b981', titleBn: 'মাস্টার প্রশ্নব্যাংক মক', descBn: 'টপিক-ভিত্তিক মাস্টার প্রশ্নব্যাংক দিয়ে কাস্টম টাইমারসহ মক পরীক্ষা তৈরি করুন', titleEn: 'Master QB Mock', descEn: 'Create custom timed mock exams using topic-based master QB' },
  ],
  medical: [
    { id: 'med-mqb', icon: 'layered-diamond', color: '#6366f1', titleBn: 'মেডিকেল মাস্টার প্রশ্নব্যাংক', descBn: 'চ্যাপ্টার-টপিকভিত্তিক সাজানো মাস্টার কোশ্চেন ব্যাংক', titleEn: 'Medical Master QB', descEn: 'Chapter-topic wise sorted master question bank' },
    { id: 'med-mqbm', icon: 'game-controller', color: '#10b981', titleBn: 'মেডিকেল মাস্টার প্রশ্নব্যাংক মক', descBn: 'মাস্টার কোশ্চেন ব্যাংক ভিত্তিক কাস্টম মক টেস্ট', titleEn: 'Medical Master QB Mock', descEn: 'Custom mock tests based on master question bank' },
    { id: 'med-qb', icon: 'folded-page', color: '#ef4444', titleBn: 'মেডিকেল প্রশ্নব্যাংক', descBn: 'বিগত বছরের প্রশ্নব্যাংক', titleEn: 'Medical Question Bank', descEn: 'Previous years question bank' },
    { id: 'med-es', icon: 'open-book', color: '#14b8a6', titleBn: 'অনুশীলনী সলভ', descBn: 'পাঠ্যবইয়ের অনুশীলনী সমাধান', titleEn: 'Exercise Solve', descEn: 'Textbook exercise solutions' },
    { id: 'med-mt', icon: 'clipboard', color: '#f59e0b', titleBn: 'মডেল টেস্ট', descBn: 'মেডিকেল স্ট্যান্ডার্ড টেস্ট', titleEn: 'Model Test', descEn: 'Medical standard tests' },
  ],
  engineering: [
    { id: 'eng-mqb', icon: 'layered-diamond', color: '#6366f1', titleBn: 'ইঞ্জিনিয়ারিং মাস্টার প্রশ্নব্যাংক', descBn: 'ইঞ্জিনিয়ারিং বিষয় অনুযায়ী সাজানো টপিক-ভিত্তিক প্রস্তুতি', titleEn: 'Engineering Master QB', descEn: 'Topic-wise prep sorted by engineering subjects' },
    { id: 'eng-wqb', icon: 'pencil', color: '#ec4899', titleBn: 'ইঞ্জিনিয়ারিং লিখিত প্রশ্নব্যাংক', descBn: 'ইঞ্জিনিয়ারিং ভর্তির জন্য বিষয়ভিত্তিক লিখিত প্রশ্নোত্তর', titleEn: 'Engineering Written QB', descEn: 'Subject-wise written Q&A for engineering admission' },
    { id: 'eng-qb', icon: 'institution', color: '#f59e0b', titleBn: 'ইঞ্জিনিয়ারিং প্রশ্নব্যাংক', descBn: 'নির্দিষ্ট ইঞ্জিনিয়ারিং বিশ্ববিদ্যালয় অনুযায়ী বছরভিত্তিক সরকারি প্রশ্ন', titleEn: 'Engineering Question Bank', descEn: 'University-wise year-based official questions' },
    { id: 'eng-mqbm', icon: 'game-controller', color: '#10b981', titleBn: 'ইঞ্জিনিয়ারিং মাস্টার প্রশ্নব্যাংক মক', descBn: 'টপিক-ভিত্তিক মাস্টার প্রশ্নব্যাংক দিয়ে কাস্টম টাইমারসহ মক পরীক্ষা তৈরি করুন', titleEn: 'Engineering Master QB Mock', descEn: 'Create custom timed mock exams using topic-based master QB' },
  ]
};

function renderIcon(type: string, color: string) {
  const props = {
    width: 20,
    height: 20,
    stroke: color,
    strokeWidth: 2,
    fill: 'none',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  switch (type) {
    case 'institution':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path d="M12 2L2 7h20L12 2z" />
          <line x1="6" y1="18" x2="6" y2="11" />
          <line x1="10" y1="18" x2="10" y2="11" />
          <line x1="14" y1="18" x2="14" y2="11" />
          <line x1="18" y1="18" x2="18" y2="11" />
          <line x1="2" y1="18" x2="22" y2="18" />
          <line x1="2" y1="22" x2="22" y2="22" />
        </svg>
      );
    case 'graduation-cap':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
        </svg>
      );
    case 'book':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        </svg>
      );
    case 'droplet':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      );
    case 'open-book':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      );
    case 'layered-diamond':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      );
    case 'pencil':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      );
    case 'game-controller':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <path d="M6 12h4M8 10v4M15 13h.01M18 11h.01" />
        </svg>
      );
    case 'folded-page':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      );
    case 'clipboard':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        </svg>
      );
    default:
      return null;
  }
}

export default function QuestionBank({ lang }: QuestionBankProps) {
  const t = copy[lang];
  const [activeTab, setActiveTab] = useState<Program>('hsc');
  const [fadeKey, setFadeKey] = useState<number>(0); // Used for triggering fade animation
  const sectionRef = useRef<HTMLElement>(null);
  useTiltEffect(sectionRef, '.tilt-card');
  
  // Program tabs list
  const tabs: { id: Program; label: string }[] = [
    { id: 'hsc', label: t.hscTab },
    { id: 'varsity', label: t.varsityTab },
    { id: 'medical', label: t.medicalTab },
    { id: 'engineering', label: t.engineeringTab }
  ];

  const handleTabChange = (tabId: Program) => {
    if (tabId === activeTab) return;
    setActiveTab(tabId);
    setFadeKey(prev => prev + 1);
  };

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
    <section ref={sectionRef} id="question-bank" aria-labelledby="qb-heading" style={{ background: 'var(--color-surface-base)' }}>
      <div className="container-page">
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 'var(--space-7)', alignItems: 'center' }} className="qb-grid">
          
          {/* Left Column: Content */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            
            {/* Intro Section */}
            <div className="reveal" style={{ textAlign: 'left', marginBottom: 'var(--space-6)' }}>
              <span className="badge badge-purple" style={{ marginBottom: 'var(--space-4)' }}>
                {t.badge}
              </span>
              <h2 id="qb-heading" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: 'var(--color-text-primary)', lineHeight: 1.15, marginBottom: 'var(--space-3)', letterSpacing: '-0.5px' }}>
                {t.title}
              </h2>
              <p style={{ fontSize: 'var(--font-size-h3)', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                {t.subtitle}
              </p>
            </div>

            {/* Tabs */}
            <div 
              className="reveal" 
              role="tablist" 
              aria-label="Question Bank Programs"
              style={{ 
                display: 'flex', 
                gap: 'var(--space-2)', 
                marginBottom: 'var(--space-4)', 
                overflowX: 'auto', 
                paddingBottom: '8px',
                scrollbarWidth: 'none'
              }}
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  aria-controls={`panel-${tab.id}`}
                  id={`tab-${tab.id}`}
                  onClick={() => handleTabChange(tab.id)}
                  className="qb-tab-btn"
                  style={{
                    background: activeTab === tab.id ? 'var(--color-surface-strong)' : 'transparent',
                    color: activeTab === tab.id ? '#000' : 'var(--color-text-secondary)',
                    border: '1px solid',
                    borderColor: activeTab === tab.id ? 'var(--color-surface-strong)' : 'var(--color-border-default)',
                    padding: '10px 24px',
                    borderRadius: '100px',
                    fontSize: '14px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* List Panel */}
            <div 
              className="reveal" 
              style={{ 
                background: 'var(--color-surface-card)', 
                border: '1px solid var(--color-border-default)', 
                borderRadius: 'var(--radius-sm)', 
                overflow: 'hidden', 
                boxShadow: 'var(--shadow-navy)' 
              }}
            >
              <div 
                key={fadeKey} 
                id={`panel-${activeTab}`}
                role="tabpanel"
                aria-labelledby={`tab-${activeTab}`}
                className="qb-fade-in"
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                {qbData[activeTab].map((item, index) => (
                  <div
                    key={item.id}
                    className="qb-row"
                    tabIndex={0}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-4)',
                      padding: 'var(--space-4)',
                      borderBottom: index < qbData[activeTab].length - 1 ? '1px solid var(--color-border-default)' : 'none',
                      cursor: 'pointer',
                      transition: 'background var(--duration-fast) var(--easing-default)',
                      outline: 'none'
                    }}
                  >
                    <span 
                      style={{ 
                        width: 44, 
                        height: 44, 
                        borderRadius: '10px', 
                        background: `${item.color}15`, 
                        border: `1px solid ${item.color}30`, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        flexShrink: 0 
                      }} 
                      aria-hidden="true"
                    >
                      {renderIcon(item.icon, item.color)}
                    </span>
                    
                    <div style={{ flex: 1, textAlign: 'left' }}>
                      <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-text-primary)', letterSpacing: '0.3px', lineHeight: 1.2, marginBottom: '4px' }}>
                        {lang === 'bn' ? item.titleBn : item.titleEn}
                      </h3>
                      <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                        {lang === 'bn' ? item.descBn : item.descEn}
                      </p>
                    </div>
                    
                    <div className="qb-chevron" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-tertiary)" strokeWidth="2.5" aria-hidden="true">
                        <path d="M9 18l6-6-6-6"/>
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
              
              <div style={{ padding: 'var(--space-4)', borderTop: '1px solid var(--color-border-default)', background: 'var(--color-overlay-3)' }}>
                <a href="https://web.prostuti.bd" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center', fontWeight: 700 }}>
                  {t.cta}
                </a>
              </div>
            </div>
            
          </div>

          {/* Right Column: Visual Mockup */}
          <div className="reveal" style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div aria-hidden="true" style={{
              position: 'absolute',
              width: '80%',
              height: '80%',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
              filter: 'blur(50px)',
              pointerEvents: 'none',
              zIndex: 0
            }} />
            
            <div style={{
              position: 'relative',
              zIndex: 1,
            }}
            className="tilt-card qb-mockup"
            >
              <Image
                src="https://pub-e2c71a91f86f428982fe1b1f721d68b9.r2.dev/image/host/02-07-2026/prostuti/img_1782975874051.png"
                alt={lang === 'bn' ? 'প্রশ্নব্যাংক অ্যাপ' : 'Question Bank App'}
                width={320}
                height={693}
                style={{
                  width: '100%',
                  maxWidth: '320px',
                  height: 'auto',
                  borderRadius: '24px',
                  border: '1px solid var(--color-overlay-10)',
                  boxShadow: '0 24px 80px rgba(139, 92, 246, 0.2), 0 0 0 1px rgba(139, 92, 246, 0.3)',
                  display: 'block',
                }}
              />
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .qb-tab-btn:hover:not([aria-selected="true"]) {
          background: var(--color-overlay-5) !important;
        }
        .qb-tab-btn:focus-visible {
          outline: 2px solid var(--color-link);
          outline-offset: 2px;
        }
        
        .qb-row:hover, .qb-row:focus-visible {
          background: var(--color-overlay-3);
        }
        .qb-row:focus-visible {
          outline: 2px solid var(--color-link) !important;
          outline-offset: -2px;
        }
        
        .qb-chevron {
          transition: transform var(--duration-fast) var(--easing-default);
        }
        .qb-row:hover .qb-chevron, .qb-row:focus-visible .qb-chevron {
          transform: translateX(4px);
        }
        .qb-row:hover .qb-chevron svg, .qb-row:focus-visible .qb-chevron svg {
          stroke: var(--color-surface-strong) !important;
        }
        
        .qb-fade-in {
          animation: qbFadeIn 0.3s ease-out forwards;
        }
        @keyframes qbFadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .qb-mockup:hover {
          transform: rotate(0deg) scale(1.02) !important;
        }

        @media (max-width: 900px) {
          .qb-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .qb-mockup {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}

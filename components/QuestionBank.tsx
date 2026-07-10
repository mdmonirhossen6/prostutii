'use client';

import { useState, useEffect, useRef } from 'react';
import { useTiltEffect } from '@/hooks/useTiltEffect';
import { spawnSpark } from '@/utils/spark';

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
    { id: 'hsc-tp', icon: 'book', color: '#8b5cf6', titleBn: 'অধ্যায়ভিত্তিক প্রশ্নব্যাংক', descBn: 'অধ্যায়ভিত্তিক প্রশ্নব্যাংক প্র্যাকটিস', titleEn: 'Chapter Wise QB', descEn: 'Chapter-organized question bank practice' },
    { id: 'hsc-tw', icon: 'droplet', color: '#ec4899', titleBn: 'টাইপ ওয়াইজ সিকিউ', descBn: 'ধরনভিত্তিক সৃজনশীল প্রশ্ন প্র্যাকটিস', titleEn: 'Type Wise CQ', descEn: 'Type-based creative question practice' },
    { id: 'hsc-ku', icon: 'open-book', color: '#3b82f6', titleBn: 'জ্ঞান ও অনুধাবন', descBn: 'ক ও খ প্রশ্ন প্র্যাকটিস', titleEn: 'Knowledge & Understanding', descEn: 'Ka & Kha question practice' },
  ],
  varsity: [
    { id: 'var-mqb', icon: 'layered-diamond', color: '#8b5cf6', titleBn: 'মাস্টার প্রশ্নব্যাংক', descBn: 'Topic-wise organized preparation sorted cleanly by subject concepts.', titleEn: 'Master Question Bank', descEn: 'Topic-wise organized preparation sorted cleanly by subject concepts.' },
    { id: 'var-wqb', icon: 'pencil', color: '#ec4899', titleBn: 'লিখিত প্রশ্নব্যাংক', descBn: 'Subject-wise written question and answer bank for varsity admission.', titleEn: 'Written Question Bank', descEn: 'Subject-wise written question and answer bank for varsity admission.' },
    { id: 'var-qb', icon: 'institution', color: '#6366f1', titleBn: 'ভার্সিটি প্রশ্নব্যাংক', descBn: 'Yearly official question papers categorized by specific universities.', titleEn: 'Varsity Question Bank', descEn: 'Yearly official question papers categorized by specific universities.' },
    { id: 'var-mqbm', icon: 'game-controller', color: '#10b981', titleBn: 'মাস্টার প্রশ্নব্যাংক মক', descBn: 'Create dynamic simulated mock exams using topic-wise master question bank with customizable timers.', titleEn: 'Master Question Bank Mock', descEn: 'Create dynamic simulated mock exams using topic-wise master question bank with customizable timers.' },
  ],
  medical: [
    { id: 'med-mqb', icon: 'layered-diamond', color: '#8b5cf6', titleBn: 'Medical Master QB', descBn: 'চ্যাপ্টার-টপিকভিত্তিক সাজানো মাস্টার কোশ্চেন ব্যাংক', titleEn: 'Medical Master QB', descEn: 'চ্যাপ্টার-টপিকভিত্তিক সাজানো মাস্টার কোশ্চেন ব্যাংক' },
    { id: 'med-mqbm', icon: 'game-controller', color: '#10b981', titleBn: 'Medical Master QB Mock', descBn: 'মাস্টার কোশ্চেন ব্যাংক ভিত্তিক কাস্টম মক টেস্ট', titleEn: 'Medical Master QB Mock', descEn: 'মাস্টার কোশ্চেন ব্যাংক ভিত্তিক কাস্টম মক টেস্ট' },
    { id: 'med-qb', icon: 'folded-page', color: '#ef4444', titleBn: 'MEDICAL QB', descBn: 'Previous year question bank', titleEn: 'MEDICAL QB', descEn: 'Previous year question bank' },
    { id: 'med-es', icon: 'open-book', color: '#14b8a6', titleBn: 'অনুশীলনি সলভ', descBn: 'Textbook exercise solutions', titleEn: 'অনুশীলনি সলভ', descEn: 'Textbook exercise solutions' },
    { id: 'med-mt', icon: 'clipboard', color: '#f59e0b', titleBn: 'মডেল টেস্ট', descBn: 'Medical Standard Tests', titleEn: 'মডেল টেস্ট', descEn: 'Medical Standard Tests' },
  ],
  engineering: [
    { id: 'eng-mqb', icon: 'layered-diamond', color: '#8b5cf6', titleBn: 'Engineering Master QB', descBn: 'Topic-wise organized preparation sorted cleanly by engineering concepts.', titleEn: 'Engineering Master QB', descEn: 'Topic-wise organized preparation sorted cleanly by engineering concepts.' },
    { id: 'eng-wqb', icon: 'pencil', color: '#ec4899', titleBn: 'Engineering Written QB', descBn: 'Subject-wise written question and answer bank for engineering admission.', titleEn: 'Engineering Written QB', descEn: 'Subject-wise written question and answer bank for engineering admission.' },
    { id: 'eng-qb', icon: 'institution', color: '#f59e0b', titleBn: 'Engineering Question Bank', descBn: 'Yearly official question papers categorized by specific engineering universities.', titleEn: 'Engineering Question Bank', descEn: 'Yearly official question papers categorized by specific engineering universities.' },
    { id: 'eng-mqbm', icon: 'game-controller', color: '#10b981', titleBn: 'Engineering Master QB Mock', descBn: 'Create dynamic simulated mock exams using topic-wise master question bank with customizable timers.', titleEn: 'Engineering Master QB Mock', descEn: 'Create dynamic simulated mock exams using topic-wise master question bank with customizable timers.' },
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
  const [fadeKey, setFadeKey] = useState<number>(0); 
  const sectionRef = useRef<HTMLElement>(null);
  useTiltEffect(sectionRef, '.tilt-card');
  
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
                  onClick={(e) => { handleTabChange(tab.id); spawnSpark(e); }}
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
                    onClick={(e) => spawnSpark(e)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); spawnSpark(e); } }}
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
                <a href="https://web.prostuti.bd" className="btn btn-secondary" onClick={(e) => spawnSpark(e)} style={{ width: '100%', justifyContent: 'center', fontWeight: 700 }}>
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
              <div style={{
                width: '100%',
                minWidth: '240px',
                maxWidth: '320px',
                height: '620px',
                background: 'var(--color-surface-card)',
                borderRadius: '32px',
                border: '8px solid #0f172a',
                boxShadow: '0 24px 80px rgba(139, 92, 246, 0.2), inset 0 0 0 1px rgba(255,255,255,0.05)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                fontFamily: 'var(--font-family-primary)'
              }}>
                {/* Notch */}
                <div style={{
                  position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                  width: '100px', height: '24px', background: '#0f172a',
                  borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', zIndex: 10
                }} />
                
                {/* Mockup Header */}
                <div style={{ padding: '36px 20px 16px', borderBottom: '1px solid var(--color-border-default)', background: 'var(--color-surface-base)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <h4 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '4px' }}>
                        {activeTab === 'hsc' ? 'HSC Preparation' : activeTab === 'varsity' ? 'Varsity Hub' : activeTab === 'medical' ? 'Medical Hub' : 'Engineering Hub'}
                      </h4>
                      <p style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                        {activeTab === 'hsc' ? 'All your resources in one place' : activeTab === 'varsity' ? 'University admission prep' : activeTab === 'medical' ? 'Medical admission prep' : 'BUET & Engineering prep'}
                      </p>
                    </div>
                    <span style={{ fontSize: '10px', fontWeight: 700, background: 'rgba(139,92,246,0.15)', color: '#a78bfa', padding: '4px 8px', borderRadius: '8px' }}>
                      {qbData[activeTab].length} Sections
                    </span>
                  </div>
                </div>

                {/* Scrollable Content */}
                <div key={`mockup-${fadeKey}`} className="qb-fade-in" style={{ flex: 1, overflowY: 'auto', padding: '16px', scrollbarWidth: 'none' }}>
                  {activeTab === 'hsc' && (
                    <div style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(139,92,246,0.15))', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '16px', padding: '16px', marginBottom: '16px' }}>
                      <h5 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '6px' }}>Prepare Smartly</h5>
                      <p style={{ fontSize: '11px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                        Board questions, CQ practice, test papers and college solutions in one beautiful platform.
                      </p>
                    </div>
                  )}

                  {/* List Rows */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {qbData[activeTab].map((item, idx) => (
                      <div key={idx} style={{
                        display: 'flex', alignItems: 'center', gap: '12px',
                        background: 'var(--color-surface-base)', border: '1px solid var(--color-border-default)',
                        borderRadius: '12px', padding: '12px',
                      }}>
                        <span style={{ width: 36, height: 36, borderRadius: '8px', background: `${item.color}15`, border: `1px solid ${item.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          {renderIcon(item.icon, item.color)}
                        </span>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <h6 style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {lang === 'bn' ? item.titleBn : item.titleEn}
                          </h6>
                          <p style={{ fontSize: '11px', color: 'var(--color-text-secondary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {lang === 'bn' ? item.descBn : item.descEn}
                          </p>
                        </div>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-tertiary)" strokeWidth="2.5" style={{ flexShrink: 0 }}>
                          <path d="M9 18l6-6-6-6"/>
                        </svg>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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

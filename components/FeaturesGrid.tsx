'use client';

import { useState, useEffect, useRef } from 'react';
import { useTiltEffect } from '@/hooks/useTiltEffect';
import { spawnSpark } from '@/utils/spark';

interface FeaturesGridProps {
  lang: 'bn' | 'en';
}

const content = {
  bn: {
    badge: 'সবকিছু এক জায়গায়',
    title: 'প্রস্তুতির সম্পূর্ণ ইকোসিস্টেম',
    subtitle: 'MCQ প্র্যাকটিস, মক টেস্ট, AI টিউটর, এডমিশন প্রস্তুতি এবং লাইভ লিডারবোর্ড — সবকিছু একটি মাত্র প্ল্যাটফর্মে।',
    hscTitle: 'HSC Preparation',
    hscDesc: 'অধ্যায়ভিত্তিক প্র্যাকটিস, বিগত বছরের প্রশ্ন এবং স্মার্ট অ্যানালিটিক্স।',
    aiTitle: 'Prostuti AI',
    aiDesc: 'আপনার যেকোনো প্রশ্নের উত্তর দিতে প্রস্তুত আমাদের এআই টিউটর।',
    mockTitle: 'Mock Test Hub',
    mockDesc: 'বাস্তব পরীক্ষার অভিজ্ঞতা পেতে লাইভ মক টেস্ট।',
    leaderboardTitle: 'Weekly Leaderboard',
    leaderboardDesc: 'সাপ্তাহিক লিডারবোর্ডে নিজের অবস্থান যাচাই করুন।',
    admissionTitle: 'Admission Hub',
    admissionDesc: 'মেডিকেল, ইঞ্জিনিয়ারিং এবং ভার্সিটি ভর্তির পূর্ণাঙ্গ প্রস্তুতি।',
    goalsTitle: 'Daily Goals & XP',
    goalsDesc: 'প্রতিদিনের লক্ষ্য পূরণ করে XP এবং রিওয়ার্ড অর্জন করুন।',
    
    // UI Text
    hscSubjects: ['পদার্থবিজ্ঞান', 'রসায়ন', 'উচ্চতর গণিত', 'জীববিজ্ঞান'],
    aiChatUser: 'g এর মান কোথায় বেশি?',
    aiChatBot: 'পৃথিবীর মেরু অঞ্চলে (Poles) g এর মান সবচেয়ে বেশি (৯.৮৩ m/s²)।',
    mockTime: 'সময় বাকি: ১২:৩৯:২২',
    mockStatus: 'পরীক্ষা চলছে',
    leaderboardUsers: [
      { name: 'মনির হোসেন', xp: '৯,৩২১ XP', rank: 1 },
      { name: 'সাদিয়া ইসলাম', xp: '৮,৪২০ XP', rank: 2 },
      { name: 'নাবিল আহমেদ', xp: '৭,৮৫০ XP', rank: 3 }
    ],
    goalsList: [
      { text: '২০টি পদার্থবিজ্ঞান MCQ সমাধান', xp: '+৫০ XP', done: true },
      { text: '১টি সম্পূর্ণ মক টেস্ট দেওয়া', xp: '+১০০ XP', done: false },
      { text: 'AI সহকারীর সাথে ১টি প্রশ্ন বিশ্লেষণ', xp: '+৩০ XP', done: false }
    ],
    admissionPrograms: ['University Program', 'Medical Program', 'Engineering Program'],
    fullLeaderboardLink: 'সম্পূর্ণ লিডারবোর্ড দেখুন →'
  },
  en: {
    badge: 'Everything in one place',
    title: 'The Complete Ecosystem',
    subtitle: 'MCQ practice, mock tests, AI tutor, admission prep, and live leaderboard — all in a single platform.',
    hscTitle: 'HSC Preparation',
    hscDesc: 'Chapter-wise practice, previous year questions, and smart analytics.',
    aiTitle: 'Prostuti AI',
    aiDesc: 'Our AI tutor is ready to answer any of your questions.',
    mockTitle: 'Mock Test Hub',
    mockDesc: 'Live mock tests for a real exam experience.',
    leaderboardTitle: 'Weekly Leaderboard',
    leaderboardDesc: 'Check your position on the weekly leaderboard.',
    admissionTitle: 'Admission Hub',
    admissionDesc: 'Complete preparation for Medical, Engineering, and University admission.',
    goalsTitle: 'Daily Goals & XP',
    goalsDesc: 'Complete daily goals to earn XP and rewards.',

    // UI Text
    hscSubjects: ['Physics', 'Chemistry', 'Higher Math', 'Biology'],
    aiChatUser: 'Where is g value maximum?',
    aiChatBot: 'The value of g is maximum at the poles of the Earth (9.83 m/s²).',
    mockTime: 'Time Left: 12:39:22',
    mockStatus: 'Exam in progress',
    leaderboardUsers: [
      { name: 'Monir Hossen', xp: '9,321 XP', rank: 1 },
      { name: 'Sadia Islam', xp: '8,420 XP', rank: 2 },
      { name: 'Nabil Ahmed', xp: '7,850 XP', rank: 3 }
    ],
    goalsList: [
      { text: 'Solve 20 Physics MCQs', xp: '+50 XP', done: true },
      { text: 'Complete 1 Mock Test', xp: '+100 XP', done: false },
      { text: 'Review 1 concept with AI', xp: '+30 XP', done: false }
    ],
    admissionPrograms: ['University Program', 'Medical Program', 'Engineering Program'],
    fullLeaderboardLink: 'View full leaderboard →'
  }
};

export default function FeaturesGrid({ lang }: FeaturesGridProps) {
  const t = content[lang];
  const [activeChat, setActiveChat] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveChat((prev) => !prev);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Scroll reveal with IntersectionObserver
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

  // 3D Tilt Effect logic
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll<HTMLElement>('.bento-card');
    
    const handleMouseMove = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; 
      const y = e.clientY - rect.top;  
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Increased multiplier for much stronger tilt (max ~15 degrees)
      const rotateX = ((y - centerY) / centerY) * -12; 
      const rotateY = ((x - centerX) / centerX) * 12;  
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
      card.style.setProperty('--rotate-x', `${rotateX}deg`);
      card.style.setProperty('--rotate-y', `${rotateY}deg`);
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      card.style.setProperty('--rotate-x', `0deg`);
      card.style.setProperty('--rotate-y', `0deg`);
    };

    cards.forEach((card) => {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });
    
    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <section ref={sectionRef} id="features" style={{ background: 'var(--color-surface-base)' }}>
      <div className="container-page">
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 'var(--space-8)', maxWidth: '680px', margin: '0 auto var(--space-7)' }}>
          <span className="badge badge-recommended" style={{ marginBottom: 'var(--space-4)' }}>
            {t.badge}
          </span>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, color: 'var(--color-text-primary)', lineHeight: 1.15, marginBottom: 'var(--space-4)', letterSpacing: '-0.5px' }}>
            {t.title}
          </h2>
          <p style={{ fontSize: 'var(--font-size-h3)', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
            {t.subtitle}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          


          {/* 2. Prostuti AI (Tall) */}
          <div 
            className="bento-card bento-ai reveal" 
            style={{ transitionDelay: '0ms' }}
            onClick={(e) => spawnSpark(e)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); spawnSpark(e); } }}
            tabIndex={0}
          >
            <div className="bento-content" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <h3 className="bento-title">{t.aiTitle}</h3>
              <p className="bento-desc">{t.aiDesc}</p>
              
              <div className="bento-visual ai-visual" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <div className="chat-interface">
                  <div className="chat-user">
                    <p>{t.aiChatUser}</p>
                  </div>
                  <div className={`chat-bot ${activeChat ? 'visible' : 'typing'}`}>
                    {activeChat ? (
                      <p>{t.aiChatBot}</p>
                    ) : (
                      <div className="typing-indicator">
                        <span></span><span></span><span></span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>



          {/* 4. Admission Hub */}
          <div 
            className="bento-card bento-admission reveal" 
            style={{ transitionDelay: '70ms' }}
            onClick={(e) => spawnSpark(e)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); spawnSpark(e); } }}
            tabIndex={0}
          >
            <div className="bento-content">
              <h3 className="bento-title">{t.admissionTitle}</h3>
              <p className="bento-desc">{t.admissionDesc}</p>
              
              <div className="bento-visual admission-visual">
                {t.admissionPrograms.map((program, i) => (
                  <div key={i} className="admission-program-pill">
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: i === 0 ? '#4d6bff' : i === 1 ? '#ec4899' : '#00d9a0' }}></span>
                    <span style={{ fontSize: '13px', fontWeight: 600 }}>{program}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 6. Daily Goals & XP */}
          <div 
            className="bento-card bento-goals reveal" 
            style={{ transitionDelay: '210ms' }}
            onClick={(e) => spawnSpark(e)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); spawnSpark(e); } }}
            tabIndex={0}
          >
            <div className="bento-content">
              <h3 className="bento-title">{t.goalsTitle}</h3>
              <p className="bento-desc">{t.goalsDesc}</p>
              
              <div className="bento-visual goals-visual">
                {t.goalsList.map((goal, i) => (
                  <div key={i} className={`goal-row ${goal.done ? 'done' : ''}`}>
                    <div className="goal-checkbox">
                      {goal.done && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>}
                    </div>
                    <span className="goal-text">{goal.text}</span>
                    <span className="goal-xp">{goal.xp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-auto-rows: minmax(280px, auto);
          gap: var(--space-4);
        }

        .bento-card {
          background: var(--color-surface-card);
          border: 1px solid var(--color-border-default);
          border-radius: var(--radius-sm);
          padding: var(--space-5);
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), border-color 0.4s ease, box-shadow 0.4s ease;
          transform-style: preserve-3d;
          --rotate-x: 0deg;
          --rotate-y: 0deg;
          /* Base transform so transition applies on mouse leave */
          transform: perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);
        }

        .bento-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(600px circle at var(--mouse-x, -500px) var(--mouse-y, -500px), rgba(0, 217, 160, 0.15), transparent 40%);
          pointer-events: none;
          z-index: 0;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .bento-card:hover::before {
          opacity: 1;
        }
        
        .bento-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          height: 100%;
          transform: translateZ(40px); /* Pop out even more */
        }

        .bento-card:hover {
          background: var(--color-surface-hover);
          border-color: var(--color-overlay-20);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 217, 160, 0.1);
          transform: perspective(800px) rotateX(var(--rotate-x)) rotateY(var(--rotate-y)) scale3d(1.04, 1.04, 1.04);
          transition: transform 0.1s ease-out, border-color 0.2s ease, box-shadow 0.2s ease;
          z-index: 10;
        }

        .bento-title {
          fontSize: 22px;
          fontWeight: 700;
          color: var(--color-text-primary);
          marginBottom: 8px;
        }

        .bento-desc {
          fontSize: 14px;
          color: var(--color-text-secondary);
          lineHeight: 1.5;
          marginBottom: 24px;
        }

        .bento-visual {
          marginTop: auto;
        }

        /* Specific Grid Placements */
        .bento-ai { grid-column: span 1; }
        .bento-admission { grid-column: span 1; }
        .bento-goals { grid-column: span 2; }


        /* AI Visual */
        .chat-interface {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .chat-user {
          align-self: flex-end;
          background: var(--color-surface-strong);
          color: #fff;
          padding: 12px 16px;
          border-radius: 16px 16px 0 16px;
          font-size: 13px;
          max-width: 85%;
        }
        .chat-bot {
          align-self: flex-start;
          background: var(--color-overlay-5);
          border: 1px solid var(--color-overlay-10);
          color: var(--color-text-secondary);
          padding: 12px 16px;
          border-radius: 16px 16px 16px 0;
          font-size: 13px;
          max-width: 90%;
          line-height: 1.5;
        }
        .typing-indicator {
          display: flex;
          gap: 4px;
          padding: 4px;
        }
        .typing-indicator span {
          width: 6px;
          height: 6px;
          background: var(--color-text-tertiary);
          border-radius: 50%;
          animation: bounce 1.4s infinite ease-in-out both;
        }
        .typing-indicator span:nth-child(1) { animation-delay: -0.32s; }
        .typing-indicator span:nth-child(2) { animation-delay: -0.16s; }
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }


        /* Admission Visual */
        .admission-visual {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .admission-program-pill {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: var(--color-overlay-3);
          border: 1px solid var(--color-overlay-5);
          border-radius: 8px;
          color: var(--color-text-secondary);
        }

        /* Leaderboard Visual */
        .leaderboard-visual {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .lb-user-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          background: var(--color-overlay-3);
          border: 1px solid var(--color-overlay-5);
          border-radius: 8px;
          font-size: 13px;
        }
        .lb-rank {
          font-weight: 800;
          color: var(--color-surface-strong);
        }
        .lb-name {
          flex: 1;
          margin-left: 12px;
          color: var(--color-text-primary);
          font-weight: 600;
        }
        .lb-xp {
          font-family: monospace;
          color: #f59e0b;
          font-weight: 700;
        }

        /* Goals Visual */
        .goals-visual {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .goal-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          background: var(--color-overlay-3);
          border: 1px solid var(--color-overlay-5);
          border-radius: 8px;
        }
        .goal-row.done {
          background: rgba(0, 217, 160, 0.05);
          border-color: rgba(0, 217, 160, 0.2);
        }
        .goal-checkbox {
          width: 18px;
          height: 18px;
          border-radius: 4px;
          border: 1px solid var(--color-text-tertiary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #00d9a0;
        }
        .goal-row.done .goal-checkbox {
          background: rgba(0, 217, 160, 0.15);
          border-color: #00d9a0;
        }
        .goal-text {
          flex: 1;
          font-size: 13px;
          color: var(--color-text-secondary);
        }
        .goal-row.done .goal-text {
          color: var(--color-text-tertiary);
          text-decoration: line-through;
        }
        .goal-xp {
          font-family: monospace;
          font-weight: 700;
          color: #f59e0b;
          font-size: 13px;
        }

        @media (max-width: 900px) {
          .bento-grid {
            grid-template-columns: 1fr;
          }
          .bento-ai, .bento-goals {
            grid-column: span 1;
            grid-row: span 1;
          }
        }
      `}</style>
    </section>
  );
}

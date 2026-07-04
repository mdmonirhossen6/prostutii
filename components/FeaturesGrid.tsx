'use client';

import { useState, useEffect } from 'react';

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
    admissionTracks: ['University Track', 'Medical Track', 'Engineering Track']
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
    admissionTracks: ['University Track', 'Medical Track', 'Engineering Track']
  }
};

export default function FeaturesGrid({ lang }: FeaturesGridProps) {
  const t = content[lang];
  const [activeChat, setActiveChat] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveChat((prev) => !prev);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="features" style={{ padding: '110px 0', background: 'var(--color-surface-base)' }}>
      <div className="container-page">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)', maxWidth: '680px', margin: '0 auto var(--space-7)' }}>
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
          
          {/* 1. HSC Preparation (Large) */}
          <div className="bento-card bento-hsc">
            <div className="bento-content">
              <h3 className="bento-title">{t.hscTitle}</h3>
              <p className="bento-desc">{t.hscDesc}</p>
              
              <div className="bento-visual hsc-visual">
                {t.hscSubjects.map((sub, i) => (
                  <div key={i} className="hsc-subject-bar">
                    <div className="hsc-subject-info">
                      <span className="hsc-subject-name">{sub}</span>
                      <span className="hsc-subject-pct">{75 - i * 10}%</span>
                    </div>
                    <div className="hsc-progress-track">
                      <div className="hsc-progress-fill" style={{ width: `${75 - i * 10}%`, background: i === 0 ? '#00d9a0' : 'var(--color-surface-strong)' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Prostuti AI (Tall) */}
          <div className="bento-card bento-ai">
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

          {/* 3. Mock Test Hub */}
          <div className="bento-card bento-mock">
            <div className="bento-content">
              <h3 className="bento-title">{t.mockTitle}</h3>
              <p className="bento-desc">{t.mockDesc}</p>
              
              <div className="bento-visual mock-visual">
                <div className="mock-timer-box">
                  <div className="mock-pulse"></div>
                  <div style={{ zIndex: 1 }}>
                    <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', marginBottom: '4px' }}>{t.mockStatus}</div>
                    <div style={{ fontSize: '20px', fontWeight: 700, color: '#f59e0b', fontFamily: 'monospace' }}>{t.mockTime}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Admission Hub */}
          <div className="bento-card bento-admission">
            <div className="bento-content">
              <h3 className="bento-title">{t.admissionTitle}</h3>
              <p className="bento-desc">{t.admissionDesc}</p>
              
              <div className="bento-visual admission-visual">
                {t.admissionTracks.map((track, i) => (
                  <div key={i} className="admission-track-pill">
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: i === 0 ? '#4d6bff' : i === 1 ? '#ec4899' : '#00d9a0' }}></span>
                    <span style={{ fontSize: '13px', fontWeight: 600 }}>{track}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 5. Weekly Leaderboard */}
          <div className="bento-card bento-leaderboard">
            <div className="bento-content">
              <h3 className="bento-title">{t.leaderboardTitle}</h3>
              <p className="bento-desc">{t.leaderboardDesc}</p>
              
              <div className="bento-visual leaderboard-visual">
                {t.leaderboardUsers.map((user, i) => (
                  <div key={i} className="lb-user-row">
                    <span className="lb-rank">#{user.rank}</span>
                    <span className="lb-name">{user.name}</span>
                    <span className="lb-xp">{user.xp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 6. Daily Goals & XP */}
          <div className="bento-card bento-goals">
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
          grid-template-columns: repeat(3, 1fr);
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
          transition: all var(--duration-fast) var(--easing-default);
        }

        .bento-card:hover {
          background: var(--color-surface-hover);
          border-color: rgba(255, 255, 255, 0.15);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
          transform: translateY(-2px);
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
        .bento-hsc { grid-column: span 2; }
        .bento-ai { grid-column: span 1; grid-row: span 2; }
        .bento-goals { grid-column: span 2; }

        /* HSC Visual */
        .hsc-visual {
          display: flex;
          flex-direction: column;
          gap: 12px;
          background: rgba(255,255,255,0.02);
          padding: 16px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.05);
        }
        .hsc-subject-info {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          color: var(--color-text-secondary);
          margin-bottom: 6px;
          font-weight: 600;
        }
        .hsc-progress-track {
          height: 6px;
          background: rgba(255,255,255,0.05);
          border-radius: 3px;
          overflow: hidden;
        }
        .hsc-progress-fill {
          height: 100%;
          border-radius: 3px;
          transition: width 1s ease-out;
        }

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
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
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

        /* Mock Visual */
        .mock-timer-box {
          background: rgba(245, 158, 11, 0.05);
          border: 1px solid rgba(245, 158, 11, 0.2);
          border-radius: 12px;
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .mock-pulse {
          position: absolute;
          width: 8px;
          height: 8px;
          background: #f59e0b;
          border-radius: 50%;
          top: 16px;
          right: 16px;
          box-shadow: 0 0 10px #f59e0b;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.5); }
          100% { opacity: 1; transform: scale(1); }
        }

        /* Admission Visual */
        .admission-visual {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .admission-track-pill {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
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
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
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
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
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
          .bento-hsc, .bento-ai, .bento-goals {
            grid-column: span 1;
            grid-row: span 1;
          }
        }
      `}</style>
    </section>
  );
}

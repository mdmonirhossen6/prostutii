'use client';

import { useState, useEffect } from 'react';

interface FeaturesGridProps {
  lang: 'bn' | 'en';
}

const content = {
  bn: {
    sectionBadge: 'বৈশিষ্ট্যসমূহ',
    title: 'যা পাবেন প্রস্তুতিতে',
    subtitle: 'একটি প্ল্যাটফর্মে সব কিছু — প্রশ্ন, মক টেস্ট, AI সহকারী, এবং লিডারবোর্ড।',
    hscTitle: 'HSC প্রিপারেশন',
    hscDesc: 'বোর্ড প্রশ্নব্যাংক, স্বনামধন্য কলেজ প্রশ্ন, টেস্ট পেপার ও CQ সমাধান — অধ্যায়ভিত্তিক প্র্যাকটিস করুন।',
    hscSubjects: ['পদার্থবিজ্ঞান', 'রসায়ন', 'উচ্চতর গণিত', 'জীববিজ্ঞান'],
    hscChapters: {
      'পদার্থবিজ্ঞান': ['ভেক্টর', 'মহাকর্ষ ও অভিকর্ষ', 'পর্যায়বৃত্ত গতি'],
      'রসায়ন': ['গুণগত রসায়ন', 'তড়িৎ রসায়ন', 'পরিবেশ রসায়ন'],
      'উচ্চতর গণিত': ['ম্যাট্রিক্স ও নির্ণায়ক', 'ত্রিকোণমিতি', 'কনিক'],
      'জীববিজ্ঞান': ['কোষ ও এর গঠন', 'রক্ত ও সংবহন', 'জেনেটিক্স'],
    },
    aiTitle: 'Prostuti AI',
    aiDesc: 'চ্যাট-ভিত্তিক AI স্টাডি সহকারী। যেকোনো প্রশ্নের ব্যাখ্যা বুঝে নিন বাংলায়।',
    aiChatUser: 'g এর মান কোথায় বেশি?',
    aiChatBot: 'পৃথিবীর মেরু অঞ্চলে (Poles) g এর মান সবচেয়ে বেশি (৯.৮৩ m/s²)।',
    mockTitle: 'মক টেস্ট হাব',
    mockDesc: 'সময়-নির্ধারিত বোর্ড স্ট্যান্ডার্ড এবং ভর্তি পরীক্ষা প্যাটার্নে লাইভ মক টেস্ট।',
    mockTimer: 'বাকি সময়:',
    mockTypes: ['HSC বোর্ড মক', 'Varsity ভর্তি মক', 'Engineering মক'],
    leaderboardTitle: 'সাপ্তাহিক লিডারবোর্ড',
    leaderboardDesc: 'সারা বাংলাদেশের শিক্ষার্থীদের সাথে লাইভ স্কোরিং ও র‍্যাংকিং প্রতিযোগিতা।',
    leaderboardUsers: [
      { rank: 1, name: 'মনির হোসেন', xp: '৪,৫২০ XP', medal: '🥇' },
      { rank: 2, name: 'সাদিয়া ইসলাম', xp: '৪,১২০ XP', medal: '🥈' },
      { rank: 3, name: 'নাবিল আহমেদ', xp: '৩,৯৮০ XP', medal: '🥉' }
    ],
    admissionTitle: 'Admission Hub',
    admissionDesc: 'Varsity, Medical এবং Engineering ট্র্যাকে আলাদাভাবে সম্পূর্ণ ভর্তি প্রস্তুতি।',
    admissionTracks: ['University', 'Medical', 'Engineering'],
    practiceTitle: 'অধ্যায়ভিত্তিক প্র্যাকটিস',
    practiceDesc: 'প্রতিটি অধ্যায়ের অগ্রগতি ট্র্যাকিং এবং দুর্বল টপিক চিহ্নিতকরণ।',
    practiceStats: [
      { subject: 'পদার্থবিজ্ঞান', progress: 80 },
      { subject: 'রসায়ন', progress: 55 },
      { subject: 'উচ্চতর গণিত', progress: 95 }
    ],
    goalsTitle: 'Daily Goals & XP',
    goalsDesc: 'প্রতিদিন নতুন চ্যালেঞ্জ সম্পন্ন করে XP অর্জন করুন এবং লিগ টেবিলে উঠুন।',
    goalsList: [
      { id: 1, text: '২০টি পদার্থবিজ্ঞান MCQ সমাধান', xp: '+৫০ XP' },
      { id: 2, text: '১টি সম্পূর্ণ মক টেস্ট দেওয়া', xp: '+১০০ XP' },
      { id: 3, text: 'AI সহকারীর সাথে ১টি প্রশ্ন বিশ্লেষণ', xp: '+৩০ XP' }
    ]
  },
  en: {
    sectionBadge: 'Features',
    title: 'Everything Inside Prostuti',
    subtitle: 'One platform — MCQ practice, mock tests, AI tutor, admission prep, and live leaderboard.',
    hscTitle: 'HSC Preparation',
    hscDesc: 'Board question banks, top college questions, test papers & CQ solutions — practice by chapter.',
    hscSubjects: ['Physics', 'Chemistry', 'Higher Math', 'Biology'],
    hscChapters: {
      'Physics': ['Vector', 'Gravity & Gravitation', 'Periodic Motion'],
      'Chemistry': ['Qualitative Chemistry', 'Electrochemistry', 'Environmental Chemistry'],
      'Higher Math': ['Matrix & Determinants', 'Trigonometry', 'Conics'],
      'Biology': ['Cell & Structure', 'Blood & Circulation', 'Genetics'],
    },
    aiTitle: 'Prostuti AI',
    aiDesc: 'Chat-based AI study assistant. Get instant explanations in Bengali.',
    aiChatUser: 'Where is g value maximum?',
    aiChatBot: 'The value of g is maximum at the poles of the Earth (9.83 m/s²).',
    mockTitle: 'Mock Test Hub',
    mockDesc: 'Timed, board-standard, and admission-pattern full mock exams.',
    mockTimer: 'Time Left:',
    mockTypes: ['HSC Board Mock', 'Varsity Admission Mock', 'Engineering Mock'],
    leaderboardTitle: 'Weekly Leaderboard',
    leaderboardDesc: 'Live scoring, league ranking, and competition with students across Bangladesh.',
    leaderboardUsers: [
      { rank: 1, name: 'Monir Hossen', xp: '4,520 XP', medal: '🥇' },
      { rank: 2, name: 'Sadia Islam', xp: '4,120 XP', medal: '🥈' },
      { rank: 3, name: 'Nabil Ahmed', xp: '3,980 XP', medal: '🥉' }
    ],
    admissionTitle: 'Admission Hub',
    admissionDesc: 'Complete prep tracks for Varsity, Medical, and Engineering exams.',
    admissionTracks: ['University', 'Medical', 'Engineering'],
    practiceTitle: 'Chapter Progress',
    practiceDesc: 'Track topic coverage and identify weak chapters with analytics.',
    practiceStats: [
      { subject: 'Physics', progress: 80 },
      { subject: 'Chemistry', progress: 55 },
      { subject: 'Higher Math', progress: 95 }
    ],
    goalsTitle: 'Daily Goals & XP',
    goalsDesc: 'Complete daily targets, level up your profile, and earn Aura points.',
    goalsList: [
      { id: 1, text: 'Solve 20 Physics MCQs', xp: '+50 XP' },
      { id: 2, text: 'Complete 1 Mock Test', xp: '+100 XP' },
      { id: 3, text: 'Review 1 concept with AI', xp: '+30 XP' }
    ]
  }
};

export default function FeaturesGrid({ lang }: FeaturesGridProps) {
  const t = content[lang];

  // Bento States
  const [activeHscSub, setActiveHscSub] = useState<string>(t.hscSubjects[0]);
  const [aiTyping, setAiTyping] = useState<boolean>(false);
  const [aiMessages, setAiMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string }>>([]);
  const [timeLeft, setTimeLeft] = useState<string>('14:59');
  const [completedGoals, setCompletedGoals] = useState<Record<number, boolean>>({ 1: true });

  // Simulate AI Chat Box
  useEffect(() => {
    setAiMessages([]);
    const userTimeout = setTimeout(() => {
      setAiMessages([{ sender: 'user', text: t.aiChatUser }]);
      setAiTyping(true);
      
      const botTimeout = setTimeout(() => {
        setAiTyping(false);
        setAiMessages(prev => [...prev, { sender: 'bot', text: t.aiChatBot }]);
      }, 1500);

      return () => clearTimeout(botTimeout);
    }, 1000);

    return () => clearTimeout(userTimeout);
  }, [lang, t.aiChatUser, t.aiChatBot]);

  // Simulate Timer Countdown
  useEffect(() => {
    let min = 14;
    let sec = 59;
    const interval = setInterval(() => {
      if (sec > 0) {
        sec--;
      } else {
        if (min > 0) {
          min--;
          sec = 59;
        } else {
          min = 14;
          sec = 59;
        }
      }
      setTimeLeft(`${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleGoal = (id: number) => {
    setCompletedGoals(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="question-bank" aria-labelledby="features-heading" style={{ padding: 'var(--space-8) 0', background: 'var(--color-surface-base)' }}>
      <div className="container-page">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-7)' }}>
          <span className="badge" style={{ marginBottom: 'var(--space-4)' }}>{t.sectionBadge}</span>
          <h2 id="features-heading" className="section-title" style={{ marginBottom: 'var(--space-3)' }}>{t.title}</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>{t.subtitle}</p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          
          {/* Card 1: HSC Prep (col-span-2) */}
          <div className="bento-card col-span-2 flex-col" style={{ gap: '16px' }}>
            <div>
              <span className="badge" style={{ marginBottom: '8px', fontSize: '10px' }}>HSC</span>
              <h3 className="bento-title">{t.hscTitle}</h3>
              <p className="bento-desc">{t.hscDesc}</p>
            </div>
            
            {/* Interactive Subject & Chapter Viewer */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: 'auto' }}>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {t.hscSubjects.map((sub) => (
                  <button
                    key={sub}
                    onClick={() => setActiveHscSub(sub)}
                    style={{
                      background: activeHscSub === sub ? 'var(--color-surface-strong)' : 'rgba(255,255,255,0.02)',
                      border: '1px solid var(--color-border-default)',
                      color: activeHscSub === sub ? '#000' : 'var(--color-text-secondary)',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {sub}
                  </button>
                ))}
              </div>
              <div 
                style={{ 
                  background: 'rgba(0,0,0,0.15)', 
                  border: '1px solid var(--color-border-default)', 
                  borderRadius: '8px', 
                  padding: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                {(t.hscChapters as Record<string, string[]>)[activeHscSub]?.map((chap, i) => (
                  <div 
                    key={chap} 
                    style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      fontSize: '13px',
                      color: 'var(--color-text-secondary)'
                    }}
                  >
                    <span>{chap}</span>
                    <span style={{ fontSize: '11px', color: 'var(--color-text-tertiary)' }}>
                      {lang === 'bn' ? `প্রশ্ন সেট ০${i+1}` : `Question Set 0${i+1}`}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Prostuti AI (col-span-1) */}
          <div className="bento-card col-span-1 flex-col" style={{ gap: '14px' }}>
            <div>
              <span className="badge" style={{ marginBottom: '8px', fontSize: '10px' }}>AI Tutor</span>
              <h3 className="bento-title">{t.aiTitle}</h3>
              <p className="bento-desc">{t.aiDesc}</p>
            </div>

            {/* Interactive Chat Box Mock */}
            <div 
              style={{ 
                background: 'rgba(0,0,0,0.15)', 
                border: '1px solid var(--color-border-default)', 
                borderRadius: '8px', 
                padding: '12px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                minHeight: '130px',
                justifyContent: 'flex-end',
                marginTop: 'auto'
              }}
            >
              {aiMessages.map((msg, i) => (
                <div 
                  key={i} 
                  style={{
                    alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                    background: msg.sender === 'user' ? 'var(--color-border-default)' : 'rgba(139,92,246,0.12)',
                    border: msg.sender === 'bot' ? '1px solid rgba(139,92,246,0.2)' : 'none',
                    color: msg.sender === 'user' ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                    borderRadius: '8px',
                    padding: '6px 10px',
                    fontSize: '12px',
                    maxWidth: '85%',
                    lineHeight: '1.4'
                  }}
                >
                  {msg.text}
                </div>
              ))}
              {aiTyping && (
                <div style={{ fontSize: '11px', color: 'var(--color-text-tertiary)', fontStyle: 'italic', paddingLeft: '4px' }}>
                  AI typing...
                </div>
              )}
            </div>
          </div>

          {/* Card 3: Mock Test Hub (col-span-1) */}
          <div className="bento-card col-span-1 flex-col" style={{ gap: '14px' }}>
            <div>
              <span className="badge" style={{ marginBottom: '8px', fontSize: '10px' }}>Mock</span>
              <h3 className="bento-title">{t.mockTitle}</h3>
              <p className="bento-desc">{t.mockDesc}</p>
            </div>

            {/* Timed Live Pulse Indicator */}
            <div 
              style={{ 
                background: 'rgba(0,0,0,0.15)', 
                border: '1px solid var(--color-border-default)', 
                borderRadius: '8px', 
                padding: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 'auto'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="live-pulse" />
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                  {t.mockTimer}
                </span>
              </div>
              <span style={{ fontSize: '16px', fontWeight: 700, fontFamily: 'monospace', color: '#ff5f56' }}>
                {timeLeft}
              </span>
            </div>
          </div>

          {/* Card 4: Leaderboard (col-span-2) */}
          <div className="bento-card col-span-2 flex-col" style={{ gap: '16px' }}>
            <div>
              <span className="badge" style={{ marginBottom: '8px', fontSize: '10px' }}>Live</span>
              <h3 className="bento-title">{t.leaderboardTitle}</h3>
              <p className="bento-desc">{t.leaderboardDesc}</p>
            </div>

            {/* Live Leaderboard Ticker */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: 'auto' }}>
              {t.leaderboardUsers.map((user) => (
                <div
                  key={user.rank}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 12px',
                    background: 'rgba(255,255,255,0.01)',
                    border: '1px solid var(--color-border-default)',
                    borderRadius: '8px',
                    fontSize: '13px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '14px', width: '20px' }}>{user.medal}</span>
                    <span style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>{user.name}</span>
                  </div>
                  <span style={{ fontFamily: 'monospace', fontWeight: 700, color: 'var(--color-surface-strong)' }}>
                    {user.xp}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 5: Admission Hub (col-span-1) */}
          <div className="bento-card col-span-1 flex-col" style={{ gap: '14px' }}>
            <div>
              <span className="badge" style={{ marginBottom: '8px', fontSize: '10px' }}>Admission</span>
              <h3 className="bento-title">{t.admissionTitle}</h3>
              <p className="bento-desc">{t.admissionDesc}</p>
            </div>

            {/* Admission Track Badges */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: 'auto' }}>
              {t.admissionTracks.map((tr) => (
                <div
                  key={tr}
                  style={{
                    padding: '8px 12px',
                    border: '1px solid var(--color-border-default)',
                    background: 'rgba(255,255,255,0.02)',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: 700,
                    color: 'var(--color-text-primary)',
                    textAlign: 'center'
                  }}
                >
                  {tr} Prep Track
                </div>
              ))}
            </div>
          </div>

          {/* Card 6: Chapter progress (col-span-1) */}
          <div className="bento-card col-span-1 flex-col" style={{ gap: '14px' }}>
            <div>
              <span className="badge" style={{ marginBottom: '8px', fontSize: '10px' }}>Analytics</span>
              <h3 className="bento-title">{t.practiceTitle}</h3>
              <p className="bento-desc">{t.practiceDesc}</p>
            </div>

            {/* Progress Bars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: 'auto' }}>
              {t.practiceStats.map((stat) => (
                <div key={stat.subject}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--color-text-secondary)', marginBottom: '4px' }}>
                    <span>{stat.subject}</span>
                    <span style={{ fontFamily: 'monospace' }}>{stat.progress}%</span>
                  </div>
                  <div style={{ height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${stat.progress}%`, background: 'var(--color-surface-strong)' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 7: Daily Goals (col-span-1) */}
          <div className="bento-card col-span-1 flex-col" style={{ gap: '14px' }}>
            <div>
              <span className="badge" style={{ marginBottom: '8px', fontSize: '10px' }}>Rewards</span>
              <h3 className="bento-title">{t.goalsTitle}</h3>
              <p className="bento-desc">{t.goalsDesc}</p>
            </div>

            {/* Goal Checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: 'auto' }}>
              {t.goalsList.map((g) => {
                const isDone = completedGoals[g.id];
                return (
                  <button
                    key={g.id}
                    onClick={() => toggleGoal(g.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '8px 10px',
                      border: '1px solid var(--color-border-default)',
                      background: isDone ? 'rgba(0,150,109,0.04)' : 'rgba(255,255,255,0.01)',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '11px',
                      textAlign: 'left',
                      transition: 'all 0.2s ease',
                      width: '100%'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: isDone ? 'var(--color-text-primary)' : 'var(--color-text-secondary)' }}>
                      <span style={{ fontSize: '12px' }}>{isDone ? '✓' : '○'}</span>
                      <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>{g.text}</span>
                    </div>
                    <span style={{ fontWeight: 700, color: 'var(--color-surface-strong)', fontFamily: 'monospace' }}>
                      {g.xp}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-4);
        }
        .bento-card {
          background: var(--color-surface-card);
          border: 1px solid var(--color-border-default);
          border-radius: 12px;
          padding: var(--space-5);
          display: flex;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }
        .bento-card:hover {
          border-color: rgba(255, 255, 255, 0.12);
        }
        .flex-col {
          flex-direction: column;
        }
        .col-span-2 {
          grid-column: span 2;
        }
        .col-span-1 {
          grid-column: span 1;
        }
        .bento-title {
          font-size: var(--font-size-h3);
          font-weight: 700;
          color: var(--color-text-primary);
          margin-bottom: 6px;
        }
        .bento-desc {
          font-size: var(--font-size-sm);
          color: var(--color-text-secondary);
          line-height: 1.5;
        }
        .live-pulse {
          width: 8px;
          height: 8px;
          background: var(--color-surface-strong);
          border-radius: 50%;
          display: inline-block;
          animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
          0% { transform: scale(0.9); opacity: 0.7; }
          50% { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(0.9); opacity: 0.7; }
        }
        @media (max-width: 900px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .col-span-2 {
            grid-column: span 2;
          }
        }
        @media (max-width: 640px) {
          .bento-grid {
            grid-template-columns: 1fr;
          }
          .col-span-2 {
            grid-column: span 1;
          }
        }
      `}</style>
    </section>
  );
}

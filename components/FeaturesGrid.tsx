'use client';

import { useState, useEffect, useRef } from 'react';

interface FeaturesGridProps {
  lang: 'bn' | 'en';
}

const content = {
  bn: {
    sectionBadge: 'ফিউচারিস্টিক ককপিট',
    title: 'everything inside prostuti',
    subtitle: 'One platform — MCQ practice, mock tests, AI tutor, admission prep, and live leaderboard.',
    chiseledSubtitle: 'যা পাবেন প্রস্তুতিতে',
    coreSyllabus: 'CORE SYLLABUS',
    activeEvaluation: 'ACTIVE EVALUATION',
    goalsRewards: 'GOALS & REWARDS',
    hscTitle: 'HSC Preparation',
    hscSubjects: ['পদার্থবিজ্ঞান', 'রসায়ন', 'উচ্চতর গণিত', 'জীববিজ্ঞান'],
    hscChapters: {
      'পদার্থবিজ্ঞান': ['ভেক্টর', 'মহাকর্ষ ও অভিকর্ষ', 'পর্যায়বৃত্ত গতি'],
      'রসায়ন': ['গুণগত রসায়ন', 'তড়িৎ রসায়ন', 'পরিবেশ রসায়ন'],
      'উচ্চতর গণিত': ['ম্যাট্রিক্স ও নির্ণায়ক', 'ত্রিকোণমিতি', 'কনিক'],
      'জীববিজ্ঞান': ['কোষ ও এর গঠন', 'রক্ত ও সংবহন', 'জেনেটিক্স'],
    },
    aiTitle: 'Prostuti AI',
    aiLabel: 'এআই টিউটর',
    aiStatusTyping: 'টাইপ করছেন...',
    aiChatUser: 'g এর মান কোথায় বেশি?',
    aiChatBot: 'পৃথিবীর মেরু অঞ্চলে (Poles) g এর মান সবচেয়ে বেশি (৯.৮৩ m/s²)।',
    mockTitle: 'Mock Test Hub',
    mockTimer: 'বাকি সময়:',
    leaderboardTitle: 'Weekly Leaderboard',
    leaderboardUsers: [
      { rank: 1, name: 'মনির হোসেন', xp: '৯,৩২১ XP', medal: '🥇' },
      { rank: 2, name: 'সাদিয়া ইসলাম', xp: '৮,৪২০ XP', medal: '🥈' },
      { rank: 3, name: 'নাবিল আহমেদ', xp: '৭,৮৫০ XP', medal: '🥉' }
    ],
    admissionTitle: 'Admission Hub',
    admissionTracks: [
      { name: 'University Prep Track', color: '#00f2fe' },
      { name: 'Medical Prep Track', color: '#ec4899' },
      { name: 'Engineering Prep Track', color: '#a855f7' }
    ],
    auraPointsDesc: 'অরা পয়েন্টস: প্রতিদিনের লক্ষ্য সম্পন্ন করে আপনার অরা বৃদ্ধি করুন এবং উইকলি লিগে আধিপত্য বিস্তার করুন।',
    goalsTitle: 'Daily Goals & XP',
    goalsList: [
      { id: 1, text: '২০টি পদার্থবিজ্ঞান MCQ সমাধান', xp: 50 },
      { id: 2, text: '১টি সম্পূর্ণ মক টেস্ট দেওয়া', xp: 100 },
      { id: 3, text: 'AI সহকারীর সাথে ১টি প্রশ্ন বিশ্লেষণ', xp: 30 }
    ]
  },
  en: {
    sectionBadge: 'Futuristic Cockpit',
    title: 'everything inside prostuti',
    subtitle: 'One platform — MCQ practice, mock tests, AI tutor, admission prep, and live leaderboard.',
    chiseledSubtitle: 'যা পাবেন প্রস্তুতিতে',
    coreSyllabus: 'CORE SYLLABUS',
    activeEvaluation: 'ACTIVE EVALUATION',
    goalsRewards: 'GOALS & REWARDS',
    hscTitle: 'HSC Preparation',
    hscSubjects: ['Physics', 'Chemistry', 'Higher Math', 'Biology'],
    hscChapters: {
      'Physics': ['Vector', 'Gravity & Gravitation', 'Periodic Motion'],
      'Chemistry': ['Qualitative Chemistry', 'Electrochemistry', 'Environmental Chemistry'],
      'Higher Math': ['Matrix & Determinants', 'Trigonometry', 'Conics'],
      'Biology': ['Cell & Structure', 'Blood & Circulation', 'Genetics'],
    },
    aiTitle: 'Prostuti AI',
    aiLabel: 'AI Tutor',
    aiStatusTyping: 'typing...',
    aiChatUser: 'Where is g value maximum?',
    aiChatBot: 'The value of g is maximum at the poles of the Earth (9.83 m/s²).',
    mockTitle: 'Mock Test Hub',
    mockTimer: 'Time Left:',
    leaderboardTitle: 'Weekly Leaderboard',
    leaderboardUsers: [
      { rank: 1, name: 'Monir Hossen', xp: '9,321 XP', medal: '🥇' },
      { rank: 2, name: 'Sadia Islam', xp: '8,420 XP', medal: '🥈' },
      { rank: 3, name: 'Nabil Ahmed', xp: '7,850 XP', medal: '🥉' }
    ],
    admissionTitle: 'Admission Hub',
    admissionTracks: [
      { name: 'University Prep Track', color: '#00f2fe' },
      { name: 'Medical Prep Track', color: '#ec4899' },
      { name: 'Engineering Prep Track', color: '#a855f7' }
    ],
    auraPointsDesc: 'Aura Points: Complete daily goals to level up your profile, earn exclusive titles, and dominate the weekly leaderboard.',
    goalsTitle: 'Daily Goals & XP',
    goalsList: [
      { id: 1, text: 'Solve 20 Physics MCQs', xp: 50 },
      { id: 2, text: 'Complete 1 Mock Test', xp: 100 },
      { id: 3, text: 'Review 1 concept with AI', xp: 30 }
    ]
  }
};

export default function FeaturesGrid({ lang }: FeaturesGridProps) {
  const t = content[lang];

  // Component States
  const [activeHscSub, setActiveHscSub] = useState<string>(t.hscSubjects[0]);
  const [completedGoals, setCompletedGoals] = useState<Record<number, boolean>>({ 1: true });
  const [auraPoints, setAuraPoints] = useState<number>(350);
  const [timeLeft, setTimeLeft] = useState<string>('12:40:00');

  // AI Chat Simulation States
  const [chatStage, setChatStage] = useState<'idle' | 'user-typing' | 'user-done' | 'bot-typing' | 'bot-done'>('idle');
  const [userText, setUserText] = useState<string>('');
  const [botText, setBotText] = useState<string>('');

  // Track state resets on language change
  useEffect(() => {
    setActiveHscSub(t.hscSubjects[0]);
  }, [lang, t.hscSubjects]);

  // Daily goals XP update logic
  const toggleGoal = (id: number, xp: number) => {
    const isCurrentlyCompleted = !!completedGoals[id];
    setCompletedGoals(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
    setAuraPoints(prev => isCurrentlyCompleted ? prev - xp : prev + xp);
  };

  // Chronometer Countdown simulation
  useEffect(() => {
    let seconds = 12 * 3600 + 40 * 60;
    const interval = setInterval(() => {
      if (seconds > 0) {
        seconds--;
        const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
        const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        setTimeLeft(`${h}:${m}:${s}`);
      } else {
        seconds = 12 * 3600 + 40 * 60;
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // AI Typing simulation effect loop
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const runChatLoop = () => {
      // Clear previous texts
      setUserText('');
      setBotText('');
      setChatStage('idle');
      
      // Start user typing after a small pause
      timeoutId = setTimeout(() => {
        setChatStage('user-typing');
        const uText = t.aiChatUser;
        let uIdx = 0;
        
        const typeUserChar = () => {
          if (uIdx < uText.length) {
            const charToType = uText.charAt(uIdx);
            setUserText(prev => prev + charToType);
            uIdx++;
            timeoutId = setTimeout(typeUserChar, 60);
          } else {
            setChatStage('user-done');
            
            // Wait before AI starts typing
            timeoutId = setTimeout(() => {
              setChatStage('bot-typing');
              
              // Wait 800ms while showing "typing..." before actual characters start appearing
              timeoutId = setTimeout(() => {
                let bText = t.aiChatBot;
                let bIdx = 0;
                
                const typeBotChar = () => {
                  if (bIdx < bText.length) {
                    const charToType = bText.charAt(bIdx);
                    setBotText(prev => prev + charToType);
                    bIdx++;
                    timeoutId = setTimeout(typeBotChar, 45);
                  } else {
                    setChatStage('bot-done');
                    // Hold message for 8 seconds before restarting loop
                    timeoutId = setTimeout(runChatLoop, 8000);
                  }
                };
                typeBotChar();
              }, 800);
              
            }, 1000);
          }
        };
        typeUserChar();
      }, 1000);
    };

    runChatLoop();
    return () => clearTimeout(timeoutId);
  }, [lang, t.aiChatUser, t.aiChatBot]);

  // Subject progress config for Admission Hub
  const subjectProgress = [
    { name: lang === 'bn' ? 'পদার্থবিজ্ঞান' : 'Physics', percentage: 60, color: '#00f2fe' },
    { name: lang === 'bn' ? 'রসায়ন' : 'Chemistry', percentage: 45, color: '#ec4899' },
    { name: lang === 'bn' ? 'উচ্চতর গণিত' : 'Higher Math', percentage: 75, color: '#a855f7' },
    { name: lang === 'bn' ? 'জীববিজ্ঞান' : 'Biology', percentage: 50, color: '#10b981' }
  ];

  return (
    <section
      id="question-bank"
      aria-labelledby="features-heading"
      className="cockpit-section"
    >
      {/* Background Pulsing Grid and Interconnecting Lines */}
      <div className="cockpit-bg-network">
        <svg className="network-svg" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(0, 242, 254, 0.4)" />
              <stop offset="50%" stopColor="rgba(139, 92, 246, 0.3)" />
              <stop offset="100%" stopColor="rgba(0, 242, 254, 0.1)" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          {/* Pulsing connection paths representing central cockpit routing */}
          <path className="network-path p1" d="M 150,150 L 500,150 L 500,450" fill="none" stroke="url(#lineGrad)" strokeWidth="2" filter="url(#glow)" />
          <path className="network-path p2" d="M 850,200 L 500,200 L 500,450" fill="none" stroke="url(#lineGrad)" strokeWidth="2" filter="url(#glow)" />
          <path className="network-path p3" d="M 150,650 L 500,650 L 500,450" fill="none" stroke="url(#lineGrad)" strokeWidth="2" filter="url(#glow)" />
          <path className="network-path p4" d="M 850,650 L 500,650 L 500,450" fill="none" stroke="url(#lineGrad)" strokeWidth="2" filter="url(#glow)" />
          <circle cx="500" cy="450" r="8" fill="#00f2fe" filter="url(#glow)" className="center-node-pulse" />
        </svg>
      </div>

      <div className="container-page" style={{ position: 'relative', zIndex: 2 }}>
        {/* Cockpit Volumetric Spotlights */}
        <div className="volumetric-spotlight spotlight-left"></div>
        <div className="volumetric-spotlight spotlight-right"></div>

        {/* Dynamic Glowing Header */}
        <div className="cockpit-header">
          <span className="cockpit-badge">{t.sectionBadge}</span>
          <h2 id="features-heading" className="cockpit-main-title">
            {t.title}
          </h2>
          <h3 className="cockpit-chiseled-title">
            {t.chiseledSubtitle}
          </h3>
          <p className="cockpit-subtitle">{t.subtitle}</p>
        </div>

        {/* Central Control Cockpit Layout */}
        <div className="cockpit-grid">
          
          {/* ================= COLUMN 1: CORE SYLLABUS ================= */}
          <div className="cockpit-column">
            <div className="column-label">{t.coreSyllabus}</div>
            
            {/* HSC Preparation */}
            <div className="cockpit-panel glass-card perspective-card float-anim-1">
              <div className="panel-header-glow"></div>
              <div className="panel-top-bar">
                <span className="panel-tag">HSC SYLLABUS</span>
                <div className="panel-dots"><span className="dot"></span><span className="dot"></span><span className="dot"></span></div>
              </div>
              <h4 className="panel-title">{t.hscTitle}</h4>
              
              {/* Translucent Crystal Book Page Tabs */}
              <div className="crystal-book-tabs">
                {t.hscSubjects.map((sub) => (
                  <button
                    key={sub}
                    onClick={() => setActiveHscSub(sub)}
                    className={`crystal-tab ${activeHscSub === sub ? 'active' : ''}`}
                  >
                    {sub}
                  </button>
                ))}
              </div>

              {/* Translucent Crystal Book Content Area */}
              <div className="crystal-book-display">
                <div className="crystal-book-page left-page">
                  <div className="page-watermark">HSC</div>
                  <div className="page-lines">
                    <span className="line-bar w-3/4"></span>
                    <span className="line-bar w-1/2"></span>
                    <span className="line-bar w-5/6"></span>
                  </div>
                </div>
                <div className="crystal-book-page right-page">
                  {/* Floating topic tree of chapter nodes */}
                  <div className="topic-tree">
                    <svg className="tree-lines-svg" width="100%" height="100%">
                      <line x1="20%" y1="50%" x2="50%" y2="25%" stroke="rgba(0, 242, 254, 0.4)" strokeWidth="1.5" />
                      <line x1="20%" y1="50%" x2="50%" y2="75%" stroke="rgba(0, 242, 254, 0.4)" strokeWidth="1.5" />
                      <line x1="50%" y1="25%" x2="80%" y2="50%" stroke="rgba(0, 242, 254, 0.4)" strokeWidth="1.5" />
                      <line x1="50%" y1="75%" x2="80%" y2="50%" stroke="rgba(0, 242, 254, 0.4)" strokeWidth="1.5" />
                    </svg>

                    {(t.hscChapters as Record<string, string[]>)[activeHscSub]?.map((chap, idx) => {
                      // Node placements
                      const positions = [
                        { left: '10%', top: '40%' },
                        { left: '42%', top: '15%' },
                        { left: '72%', top: '40%' },
                      ];
                      const pos = positions[idx % positions.length];
                      return (
                        <div
                          key={chap}
                          className="topic-node-glowing"
                          style={{ left: pos.left, top: pos.top }}
                        >
                          <span className="node-pulse"></span>
                          <span className="node-text">{chap}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Admission Hub */}
            <div className="cockpit-panel glass-card perspective-card float-anim-2">
              <div className="panel-header-glow pink-glow"></div>
              <div className="panel-top-bar">
                <span className="panel-tag">ADMISSION PORTALS</span>
                <div className="panel-dots"><span className="dot pink"></span><span className="dot pink"></span></div>
              </div>
              <h4 className="panel-title">{lang === 'en' ? 'Admission Hub' : 'ভর্তি হাব'}</h4>

              {/* Trio of ornate, glowing holographic doorways */}
              <div className="doorways-container">
                {t.admissionTracks.map((track) => (
                  <div key={track.name} className="doorway-wrapper">
                    <div className="doorway-frame" style={{ '--doorway-color': track.color } as React.CSSProperties}>
                      <div className="doorway-portal">
                        <div className="portal-vortex"></div>
                      </div>
                    </div>
                    <span className="doorway-label">{track.name}</span>
                  </div>
                ))}
              </div>

              {/* Stem-and-leaf visualization of a growing crystal structure */}
              <div className="crystal-progress-container">
                <span className="crystal-title">{lang === 'en' ? 'Chapter Progress (Crystal Growth)' : 'অধ্যায়ের অগ্রগতি (ক্রিস্টাল গ্রোথ)'}</span>
                <div className="crystal-tree-box">
                  <svg className="crystal-tree-svg" viewBox="0 0 200 120" width="100%" height="100%">
                    {/* Main Trunk */}
                    <path d="M 100,120 Q 100,80 100,50" stroke="#00f2fe" strokeWidth="3" fill="none" strokeLinecap="round" />
                    
                    {/* Dynamic percentage branches */}
                    {subjectProgress.map((subj, index) => {
                      // Angle and end coordinates based on branch index
                      const angles = [-35, -15, 15, 35];
                      const angle = angles[index];
                      const length = 40 + (subj.percentage / 100) * 30; // crystal grows according to progress
                      const rad = (angle - 90) * (Math.PI / 180);
                      const xEnd = 100 + length * Math.cos(rad);
                      const yEnd = 50 + length * Math.sin(rad);

                      return (
                        <g key={subj.name}>
                          {/* Branch Line */}
                          <line
                            x1="100"
                            y1="50"
                            x2={xEnd}
                            y2={yEnd}
                            stroke={subj.color}
                            strokeWidth="2"
                            strokeDasharray="200"
                            strokeDashoffset="0"
                            className="crystal-branch"
                          />
                          {/* Leaf Node representing progress */}
                          <circle
                            cx={xEnd}
                            cy={yEnd}
                            r="8"
                            fill="#0d1225"
                            stroke={subj.color}
                            strokeWidth="2"
                            className="crystal-leaf-node"
                          />
                          {/* Inside leaf percentage */}
                          <text
                            x={xEnd}
                            y={yEnd + 3}
                            fill="#ffffff"
                            fontSize="6"
                            fontWeight="bold"
                            textAnchor="middle"
                          >
                            {subj.percentage}%
                          </text>
                          {/* Name label hover box */}
                          <text
                            x={xEnd}
                            y={yEnd - 12}
                            fill="rgba(255,255,255,0.7)"
                            fontSize="5.5"
                            textAnchor="middle"
                          >
                            {subj.name}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* ================= COLUMN 2: ACTIVE EVALUATION ================= */}
          <div className="cockpit-column">
            <div className="column-label">{t.activeEvaluation}</div>

            {/* Mock Test Hub */}
            <div className="cockpit-panel glass-card perspective-card float-anim-3">
              <div className="panel-header-glow cyan-glow"></div>
              <div className="panel-top-bar">
                <span className="panel-tag">LIVE EVALUATION</span>
                <div className="panel-dots"><span className="dot cyan"></span><span className="dot cyan"></span></div>
              </div>
              <h4 className="panel-title">{t.mockTitle}</h4>

              {/* Rotating futuristic chronometer */}
              <div className="chronometer-stage">
                <div className="chronometer-base">
                  <svg className="chronometer-dial" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" stroke="rgba(0, 242, 254, 0.15)" strokeWidth="1.5" fill="none" />
                    <circle cx="50" cy="50" r="41" stroke="rgba(139, 92, 246, 0.1)" strokeWidth="1" fill="none" strokeDasharray="3 3" />
                    {/* Ring ticks */}
                    {[...Array(12)].map((_, i) => {
                      const angle = i * 30 * (Math.PI / 180);
                      const x1 = 50 + 38 * Math.cos(angle);
                      const y1 = 50 + 38 * Math.sin(angle);
                      const x2 = 50 + 44 * Math.cos(angle);
                      const y2 = 50 + 44 * Math.sin(angle);
                      return (
                        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(0, 242, 254, 0.6)" strokeWidth="1" />
                      );
                    })}
                    {/* Concentric rotating gear overlay */}
                    <circle cx="50" cy="50" r="32" stroke="rgba(0, 242, 254, 0.3)" strokeWidth="1.5" fill="none" strokeDasharray="25 15" className="gear-ring-1" />
                    <circle cx="50" cy="50" r="26" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="1" fill="none" strokeDasharray="10 5" className="gear-ring-2" />
                    
                    {/* Glowing Sweep Hand */}
                    <line x1="50" y1="50" x2="50" y2="12" stroke="#00f2fe" strokeWidth="1.5" strokeLinecap="round" className="sweep-hand" />
                    <circle cx="50" cy="50" r="3" fill="#00f2fe" />
                  </svg>
                </div>

                {/* Floating time projection pedestal */}
                <div className="time-projection-pedestal">
                  <div className="pedestal-surface">
                    <span className="projection-label">{t.mockTimer}</span>
                    <span className="projection-value">{timeLeft}</span>
                  </div>
                  <div className="pedestal-shadow"></div>
                </div>
              </div>
            </div>

            {/* Weekly Leaderboard */}
            <div className="cockpit-panel glass-card perspective-card float-anim-1">
              <div className="panel-header-glow purple-glow"></div>
              <div className="panel-top-bar">
                <span className="panel-tag">LEADERBOARD LEAGUE</span>
                <div className="panel-dots"><span className="dot purple"></span><span className="dot purple"></span></div>
              </div>
              <h4 className="panel-title">{t.leaderboardTitle}</h4>

              {/* Multi-tiered holographic podium */}
              <div className="podium-container">
                <div className="podium-wrapper">
                  
                  {/* Rank 2 (Left) */}
                  <div className="podium-tier tier-2">
                    <div className="podium-acrylic-plaque">
                      <span className="plaque-rank">2</span>
                      <span className="plaque-name">{t.leaderboardUsers[1].name}</span>
                      <span className="plaque-xp">{t.leaderboardUsers[1].xp}</span>
                    </div>
                    <div className="podium-pedestal-block block-2">
                      <div className="pedestal-glow"></div>
                      <div className="medal-3d silver-medal">🥈</div>
                    </div>
                  </div>

                  {/* Rank 1 (Center - highest) */}
                  <div className="podium-tier tier-1">
                    <div className="podium-acrylic-plaque winner-plaque">
                      <span className="plaque-rank glow-text">1</span>
                      <span className="plaque-name">{t.leaderboardUsers[0].name}</span>
                      <span className="plaque-xp">{t.leaderboardUsers[0].xp}</span>
                    </div>
                    <div className="podium-pedestal-block block-1">
                      <div className="pedestal-glow gold-glow"></div>
                      <div className="medal-3d gold-medal animate-bounce">🥇</div>
                    </div>
                  </div>

                  {/* Rank 3 (Right) */}
                  <div className="podium-tier tier-3">
                    <div className="podium-acrylic-plaque">
                      <span className="plaque-rank">3</span>
                      <span className="plaque-name">{t.leaderboardUsers[2].name}</span>
                      <span className="plaque-xp">{t.leaderboardUsers[2].xp}</span>
                    </div>
                    <div className="podium-pedestal-block block-3">
                      <div className="pedestal-glow"></div>
                      <div className="medal-3d bronze-medal">🥉</div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* ================= COLUMN 3: GOALS & REWARDS ================= */}
          <div className="cockpit-column">
            <div className="column-label">{t.goalsRewards}</div>

            {/* Prostuti AI */}
            <div className="cockpit-panel glass-card perspective-card float-anim-2">
              <div className="panel-header-glow purple-glow"></div>
              <div className="panel-top-bar">
                <span className="panel-tag">COGNITIVE COMPUTE</span>
                <div className="panel-dots"><span className="dot purple"></span><span className="dot purple"></span><span className="dot purple"></span></div>
              </div>
              <h4 className="panel-title">{t.aiTitle}</h4>

              {/* Glowing crystal sphere with synapses inside */}
              <div className="sphere-stage">
                <div className="synaptic-sphere">
                  <div className="sphere-plasma-glow"></div>
                  <div className="sphere-inner-synapses">
                    <svg width="100%" height="100%" viewBox="0 0 100 100">
                      {/* Rotating synapsis grid */}
                      <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(139, 92, 246, 0.15)" strokeWidth="0.5" />
                      <circle cx="50" cy="50" r="25" fill="none" stroke="rgba(0, 242, 254, 0.2)" strokeWidth="0.5" />
                      <path d="M 50,10 L 50,90 M 10,50 L 90,50" stroke="rgba(139, 92, 246, 0.1)" strokeWidth="0.5" />
                      <circle cx="50" cy="20" r="2" fill="#00f2fe" className="synapse-dot d1" />
                      <circle cx="20" cy="50" r="2" fill="#8b5cf6" className="synapse-dot d2" />
                      <circle cx="50" cy="80" r="2" fill="#00f2fe" className="synapse-dot d3" />
                      <circle cx="80" cy="50" r="2" fill="#8b5cf6" className="synapse-dot d4" />
                      <path d="M 30,30 Q 50,50 70,70" stroke="url(#lineGrad)" strokeWidth="1" fill="none" className="synapse-path-1" />
                      <path d="M 70,30 Q 50,50 30,70" stroke="url(#lineGrad)" strokeWidth="1" fill="none" className="synapse-path-2" />
                    </svg>
                  </div>
                </div>

                {/* Holographic Projection chat box above sphere */}
                <div className="holographic-projection">
                  <div className="hologram-scanlines"></div>
                  <div className="hologram-inner">
                    <div className="hologram-header">
                      <span className="chiseled-tutor">{t.aiLabel}</span>
                      <span className="pulse-indicator"></span>
                      {chatStage === 'bot-typing' && (
                        <span className="status-typing">{t.aiStatusTyping}</span>
                      )}
                    </div>
                    
                    <div className="hologram-chat-scroll">
                      {/* User message */}
                      {userText && (
                        <div className="chat-bubble user-bubble">
                          <span className="chat-sender">User</span>
                          <p>{userText}</p>
                        </div>
                      )}
                      
                      {/* Bot message */}
                      {botText && (
                        <div className="chat-bubble bot-bubble">
                          <span className="chat-sender-bot">{t.aiLabel}</span>
                          <p>{botText}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Daily Goals & XP */}
            <div className="cockpit-panel glass-card perspective-card float-anim-3">
              <div className="panel-header-glow gold-glow"></div>
              <div className="panel-top-bar">
                <span className="panel-tag">REWARDS INTERFACE</span>
                <div className="panel-dots"><span className="dot yellow"></span><span className="dot yellow"></span></div>
              </div>
              
              <div className="panel-heading-row">
                <h4 className="panel-title">{t.goalsTitle}</h4>
                <div className="aura-counter">
                  <span className="aura-title">AURA</span>
                  <span className="aura-num">{auraPoints}</span>
                </div>
              </div>
              
              <p className="aura-description">{t.auraPointsDesc}</p>

              {/* Physical check-list tablet */}
              <div className="checklist-tablet">
                <div className="tablet-screen">
                  {t.goalsList.map((goal) => {
                    const isDone = !!completedGoals[goal.id];
                    return (
                      <div
                        key={goal.id}
                        onClick={() => toggleGoal(goal.id, goal.xp)}
                        className={`checklist-item-row ${isDone ? 'checked' : ''}`}
                      >
                        <div className="interactive-checkmark">
                          <div className={`checkmark-box ${isDone ? 'active' : ''}`}>
                            {isDone && <span className="checkmark-icon">✓</span>}
                          </div>
                        </div>
                        
                        <div className="goal-text-content">
                          <span className={`goal-main-text ${isDone ? 'strike' : ''}`}>
                            {goal.text}
                          </span>
                        </div>

                        {/* Stylized gold coins */}
                        <div className="coin-wrapper">
                          <div className={`gold-coin-3d ${isDone ? 'spin-coin' : ''}`}>
                            <div className="coin-face front">+{goal.xp}</div>
                            <div className="coin-face back">XP</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* Tablet bezel bottom accent */}
                <div className="tablet-bezel-bottom">
                  <div className="bezel-home-button"></div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      <style jsx>{`
        .cockpit-section {
          position: relative;
          padding: 100px 0;
          background: #080c18;
          overflow: hidden;
          perspective: 1500px;
        }

        /* Ambient cockpit grid background */
        .cockpit-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(0, 242, 254, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 242, 254, 0.02) 1px, transparent 1px);
          background-size: 50px 50px;
          background-position: center;
          pointer-events: none;
          z-index: 1;
        }

        /* Background Network SVG Overlay */
        .cockpit-bg-network {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          opacity: 0.35;
          pointer-events: none;
        }
        .network-svg {
          width: 100%;
          height: 100%;
        }

        /* Pulsing networks animations */
        .network-path {
          stroke-dasharray: 12, 12;
          animation: networkPulse 25s linear infinite;
        }
        .p2 { animation-duration: 20s; animation-direction: reverse; }
        .p3 { animation-duration: 30s; }
        .p4 { animation-duration: 15s; animation-direction: reverse; }

        @keyframes networkPulse {
          to {
            stroke-dashoffset: -1000;
          }
        }

        .center-node-pulse {
          animation: centerPulse 3s ease-in-out infinite;
        }
        @keyframes centerPulse {
          0%, 100% { r: 6; opacity: 0.6; }
          50% { r: 10; opacity: 1; }
        }

        /* Volumetric spotlights */
        .volumetric-spotlight {
          position: absolute;
          top: -20%;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          filter: blur(150px);
          pointer-events: none;
          z-index: 1;
          opacity: 0.15;
        }
        .spotlight-left {
          left: -10%;
          background: radial-gradient(circle, #00f2fe 0%, transparent 70%);
        }
        .spotlight-right {
          right: -10%;
          background: radial-gradient(circle, #8b5cf6 0%, transparent 70%);
        }

        /* Dynamic Glowing Header styling */
        .cockpit-header {
          text-align: left;
          margin-bottom: 70px;
          position: relative;
          z-index: 10;
          max-width: 680px;
        }
        .cockpit-badge {
          display: inline-block;
          font-family: monospace;
          color: #00f2fe;
          background: rgba(0, 242, 254, 0.08);
          border: 1px solid rgba(0, 242, 254, 0.25);
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 24px;
          box-shadow: 0 0 15px rgba(0, 242, 254, 0.1);
        }
        .cockpit-main-title {
          font-size: 46px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 3px;
          background: linear-gradient(135deg, #00f2fe 0%, #a855f7 50%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
          filter: drop-shadow(0 0 20px rgba(0, 242, 254, 0.2));
          margin: 0;
        }
        .cockpit-chiseled-title {
          font-size: 26px;
          font-weight: 800;
          color: #ffffff;
          margin-top: 10px;
          margin-bottom: 18px;
          letter-spacing: 1px;
          text-shadow: 
            0 1px 0 #1e293b, 
            0 2px 0 #0f172a, 
            0 3px 0 #020617,
            0 4px 10px rgba(0,0,0,0.5);
        }
        .cockpit-subtitle {
          font-size: 16px;
          color: #94a3b8;
          max-width: 680px;
          line-height: 1.6;
        }

        /* 3-Column Cockpit Layout */
        .cockpit-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          align-items: start;
        }

        .cockpit-column {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .column-label {
          font-size: 11px;
          font-weight: 800;
          color: #475569;
          letter-spacing: 3px;
          text-transform: uppercase;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 10px;
          margin-bottom: -10px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .column-label::before {
          content: '';
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #00f2fe;
          box-shadow: 0 0 8px #00f2fe;
        }

        /* Holographic glass panel base styling */
        .glass-card {
          background: rgba(13, 25, 48, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-top: 1px solid rgba(0, 242, 254, 0.3);
          border-bottom: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 20px;
          padding: 24px;
          backdrop-filter: blur(16px) saturate(130%);
          box-shadow: 
            0 15px 35px rgba(0,0,0,0.5), 
            inset 0 0 15px rgba(0, 242, 254, 0.02);
          position: relative;
          overflow: hidden;
          transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
        }

        /* Interactive 3D Slant Hover Effects */
        .perspective-card {
          transform-style: preserve-3d;
          transform: rotateX(2deg) rotateY(-2deg) translateZ(0);
        }
        .perspective-card:hover {
          transform: rotateX(0deg) rotateY(0deg) translateZ(10px) scale(1.01);
          border-color: rgba(0, 242, 254, 0.35);
          box-shadow: 
            0 25px 45px rgba(0,0,0,0.6), 
            0 0 30px rgba(0, 242, 254, 0.15),
            inset 0 0 25px rgba(0, 242, 254, 0.05);
        }

        /* Header Accent Glows on Panels */
        .panel-header-glow {
          position: absolute;
          top: 0;
          left: 10%;
          right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, #00f2fe, transparent);
          box-shadow: 0 0 15px #00f2fe;
          pointer-events: none;
        }
        .pink-glow {
          background: linear-gradient(90deg, transparent, #ec4899, transparent);
          box-shadow: 0 0 15px #ec4899;
        }
        .purple-glow {
          background: linear-gradient(90deg, transparent, #8b5cf6, transparent);
          box-shadow: 0 0 15px #8b5cf6;
        }
        .cyan-glow {
          background: linear-gradient(90deg, transparent, #00f2fe, transparent);
          box-shadow: 0 0 15px #00f2fe;
        }
        .gold-glow {
          background: linear-gradient(90deg, transparent, #f59e0b, transparent);
          box-shadow: 0 0 15px #f59e0b;
        }

        .panel-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        .panel-tag {
          font-family: monospace;
          font-size: 9px;
          font-weight: 700;
          color: #94a3b8;
          letter-spacing: 1.5px;
          opacity: 0.8;
        }
        .panel-dots {
          display: flex;
          gap: 4px;
        }
        .dot {
          width: 4px;
          height: 4px;
          background: rgba(255,255,255,0.2);
          border-radius: 50%;
        }
        .dot.pink { background: #ec4899; }
        .dot.cyan { background: #00f2fe; }
        .dot.purple { background: #8b5cf6; }
        .dot.yellow { background: #f59e0b; }

        .panel-title {
          font-size: 20px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 20px 0;
          letter-spacing: 0.5px;
        }

        /* 1. HSC Prep: Translucent Crystal Book Panels */
        .crystal-book-tabs {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
          margin-bottom: 16px;
        }
        .crystal-tab {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          color: #94a3b8;
          border-radius: 8px;
          padding: 8px 12px;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: center;
        }
        .crystal-tab:hover {
          background: rgba(0, 242, 254, 0.06);
          color: #ffffff;
          border-color: rgba(0, 242, 254, 0.3);
        }
        .crystal-tab.active {
          background: linear-gradient(135deg, rgba(0, 242, 254, 0.15), rgba(139, 92, 246, 0.15));
          border-color: rgba(0, 242, 254, 0.5);
          color: #ffffff;
          box-shadow: 0 0 15px rgba(0, 242, 254, 0.1);
        }

        .crystal-book-display {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4px;
          background: rgba(8, 12, 24, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 12px;
          padding: 12px;
          height: 180px;
          position: relative;
          perspective: 600px;
        }
        .crystal-book-page {
          background: rgba(255, 255, 255, 0.03);
          border: 1.5px solid rgba(255, 255, 255, 0.07);
          border-radius: 6px;
          padding: 10px;
          height: 100%;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(8px);
        }
        .left-page {
          transform: rotateY(15deg);
          transform-origin: right center;
          border-right: 1px dashed rgba(255, 255, 255, 0.15);
        }
        .right-page {
          transform: rotateY(-15deg);
          transform-origin: left center;
          border-left: 1px dashed rgba(255, 255, 255, 0.15);
        }
        .page-watermark {
          position: absolute;
          bottom: 10px;
          left: 10px;
          font-size: 32px;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.015);
          pointer-events: none;
        }
        .page-lines {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 10px;
        }
        .line-bar {
          height: 4px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 2px;
        }

        /* Floating topic tree chapter labels */
        .topic-tree {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .tree-lines-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        .topic-node-glowing {
          position: absolute;
          background: rgba(8, 12, 24, 0.85);
          border: 1px solid rgba(0, 242, 254, 0.6);
          box-shadow: 0 0 10px rgba(0, 242, 254, 0.3);
          border-radius: 20px;
          padding: 4px 10px;
          font-size: 10px;
          font-weight: 700;
          color: #ffffff;
          white-space: nowrap;
          transform: translate(-50%, -50%);
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .topic-node-glowing:hover {
          border-color: #8b5cf6;
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.6);
          transform: translate(-50%, -50%) scale(1.1);
        }
        .node-pulse {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #00f2fe;
          display: inline-block;
          box-shadow: 0 0 5px #00f2fe;
          animation: nodeFlash 1.5s infinite;
        }
        @keyframes nodeFlash {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        .node-text {
          font-size: 9px;
        }

        /* 2. Prostuti AI: Crystal Sphere & Chat Hologram */
        .sphere-stage {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          position: relative;
          min-height: 290px;
          justify-content: flex-end;
        }
        .synaptic-sphere {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.7) 0%, rgba(8, 12, 24, 0.95) 70%, #00f2fe 100%);
          box-shadow: 
            0 0 25px rgba(139, 92, 246, 0.4), 
            0 0 50px rgba(0, 242, 254, 0.2), 
            inset 0 0 20px rgba(255, 255, 255, 0.2);
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.1);
          z-index: 10;
        }
        .sphere-plasma-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, rgba(0, 242, 254, 0.3) 0%, transparent 60%);
          animation: plasma 4s ease-in-out infinite alternate;
        }
        @keyframes plasma {
          0% { transform: scale(0.8) translate(-10px, -10px); }
          100% { transform: scale(1.2) translate(10px, 10px); }
        }
        .sphere-inner-synapses {
          position: absolute;
          inset: 0;
          animation: spinSphere 20s linear infinite;
        }
        @keyframes spinSphere {
          to { transform: rotate(360deg); }
        }
        
        .synapse-dot {
          animation: synapsePulse 2s infinite alternate;
        }
        .d2 { animation-delay: 0.5s; }
        .d3 { animation-delay: 1s; }
        .d4 { animation-delay: 1.5s; }

        @keyframes synapsePulse {
          0% { opacity: 0.2; r: 1.5; }
          100% { opacity: 1; r: 3.5; }
        }

        /* Chat Hologram screen projection */
        .holographic-projection {
          position: absolute;
          top: 0;
          width: 100%;
          background: rgba(8, 20, 48, 0.6);
          border: 1.5px solid rgba(0, 242, 254, 0.45);
          box-shadow: 
            0 0 20px rgba(0, 242, 254, 0.15),
            inset 0 0 15px rgba(0, 242, 254, 0.1);
          border-radius: 12px;
          padding: 12px;
          backdrop-filter: blur(10px);
          z-index: 11;
          transform: rotateX(10deg);
          transform-origin: bottom center;
        }
        .hologram-scanlines {
          position: absolute;
          inset: 0;
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 242, 254, 0.08) 50%);
          background-size: 100% 4px;
          border-radius: 12px;
          pointer-events: none;
          animation: scanlineScroll 12s linear infinite;
        }
        @keyframes scanlineScroll {
          0% { background-position: 0 0; }
          100% { background-position: 0 100%; }
        }

        .hologram-inner {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .hologram-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(0, 242, 254, 0.2);
          padding-bottom: 6px;
        }
        .chiseled-tutor {
          font-family: monospace;
          font-size: 10px;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: 1px;
          text-shadow: 0 0 5px #00f2fe;
          text-transform: uppercase;
        }
        .pulse-indicator {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #00f2fe;
          box-shadow: 0 0 8px #00f2fe;
          animation: statusPulse 1.5s infinite;
        }
        @keyframes statusPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .status-typing {
          font-size: 9px;
          font-style: italic;
          color: rgba(0, 242, 254, 0.85);
          margin-left: auto;
          margin-right: 8px;
        }

        .hologram-chat-scroll {
          display: flex;
          flex-direction: column;
          gap: 8px;
          max-height: 125px;
          overflow-y: auto;
          scrollbar-width: none; /* Firefox */
        }
        .hologram-chat-scroll::-webkit-scrollbar {
          display: none; /* Safari / Chrome */
        }

        .chat-bubble {
          border-radius: 8px;
          padding: 6px 10px;
          font-size: 11px;
          line-height: 1.4;
          max-width: 90%;
        }
        .chat-sender {
          display: block;
          font-size: 8px;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          margin-bottom: 2px;
        }
        .chat-sender-bot {
          display: block;
          font-size: 8px;
          font-weight: 800;
          color: rgba(0, 242, 254, 0.8);
          text-transform: uppercase;
          margin-bottom: 2px;
        }

        .user-bubble {
          align-self: flex-end;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #ffffff;
        }
        .bot-bubble {
          align-self: flex-start;
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.4);
          color: #cbd5e1;
        }

        /* 3. Mock Test Hub: Chronometer & Projection */
        .chronometer-stage {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 10px 0;
        }
        .chronometer-base {
          width: 140px;
          height: 140px;
          background: radial-gradient(circle, rgba(13, 25, 48, 0.6) 0%, rgba(8, 12, 24, 0.98) 100%);
          border: 2px solid rgba(0, 242, 254, 0.25);
          border-radius: 50%;
          box-shadow: 
            0 0 25px rgba(0, 242, 254, 0.15),
            inset 0 0 15px rgba(0, 242, 254, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 10;
        }
        .chronometer-dial {
          width: 100%;
          height: 100%;
        }

        /* Concentric dial gears */
        .gear-ring-1 {
          transform-origin: center;
          animation: spinGear 30s linear infinite;
        }
        .gear-ring-2 {
          transform-origin: center;
          animation: spinGear 12s linear infinite reverse;
        }
        @keyframes spinGear {
          to { transform: rotate(360deg); }
        }
        .sweep-hand {
          transform-origin: center;
          animation: sweep 60s steps(60) infinite;
        }
        @keyframes sweep {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Raised pedestal display platform */
        .time-projection-pedestal {
          position: relative;
          width: 100%;
          height: 60px;
          margin-top: -15px;
          perspective: 200px;
          z-index: 11;
        }
        .pedestal-surface {
          background: linear-gradient(180deg, rgba(0, 242, 254, 0.25) 0%, rgba(13, 25, 48, 0.95) 80%);
          border: 1.5px solid rgba(0, 242, 254, 0.55);
          border-radius: 8px;
          transform: rotateX(25deg);
          transform-origin: bottom center;
          padding: 8px 12px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 5px 15px rgba(0, 242, 254, 0.25);
        }
        .projection-label {
          font-size: 9px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .projection-value {
          font-family: monospace;
          font-size: 20px;
          font-weight: 900;
          color: #00f2fe;
          text-shadow: 0 0 10px rgba(0, 242, 254, 0.6);
          letter-spacing: 1px;
        }
        .pedestal-shadow {
          position: absolute;
          bottom: 2px;
          left: 10%;
          right: 10%;
          height: 10px;
          background: rgba(0, 242, 254, 0.3);
          filter: blur(8px);
          border-radius: 50%;
        }

        /* 4. Weekly Leaderboard: Holographic Podium & Plaques */
        .podium-container {
          height: 200px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          margin-top: 10px;
        }
        .podium-wrapper {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          width: 100%;
          gap: 12px;
        }
        .podium-tier {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
        }
        
        /* Floating acrylic plaque */
        .podium-acrylic-plaque {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 8px 6px;
          text-align: center;
          width: 100%;
          backdrop-filter: blur(10px);
          margin-bottom: 8px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
          display: flex;
          flex-direction: column;
          gap: 2px;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .winner-plaque {
          border-color: rgba(245, 158, 11, 0.35);
          box-shadow: 0 4px 20px rgba(245, 158, 11, 0.15);
        }
        .winner-plaque:hover {
          border-color: #f59e0b;
        }
        .podium-acrylic-plaque:hover {
          border-color: #00f2fe;
        }

        .plaque-rank {
          font-family: monospace;
          font-size: 14px;
          font-weight: 900;
          color: #94a3b8;
        }
        .glow-text {
          color: #f59e0b;
          text-shadow: 0 0 8px rgba(245, 158, 11, 0.6);
        }
        .plaque-name {
          font-size: 11px;
          font-weight: 700;
          color: #ffffff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .plaque-xp {
          font-size: 10px;
          font-family: monospace;
          color: #00f2fe;
          font-weight: 700;
        }

        /* 3D-angled pedestal block */
        .podium-pedestal-block {
          width: 100%;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-top: 1px solid rgba(0, 242, 254, 0.35);
          border-radius: 4px 4px 0 0;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .block-1 {
          height: 70px;
          background: linear-gradient(180deg, rgba(245, 158, 11, 0.15) 0%, rgba(13, 25, 48, 0.95) 100%);
          border-top-color: rgba(245, 158, 11, 0.5);
        }
        .block-2 {
          height: 48px;
          background: linear-gradient(180deg, rgba(0, 242, 254, 0.12) 0%, rgba(13, 25, 48, 0.95) 100%);
        }
        .block-3 {
          height: 32px;
          background: linear-gradient(180deg, rgba(139, 92, 246, 0.1) 0%, rgba(13, 25, 48, 0.95) 100%);
        }

        .pedestal-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: #00f2fe;
          box-shadow: 0 0 10px #00f2fe;
        }
        .gold-glow {
          background: #f59e0b;
          box-shadow: 0 0 10px #f59e0b;
        }

        .medal-3d {
          font-size: 18px;
          position: absolute;
          top: -12px;
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.5));
        }

        /* 5. Admission Hub: Doorways and Crystal progress */
        .doorways-container {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 24px;
        }
        .doorway-wrapper {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }
        
        /* Holographic doorways */
        .doorway-frame {
          width: 44px;
          height: 64px;
          border: 1.5px solid var(--doorway-color);
          border-bottom: none;
          border-radius: 20px 20px 0 0;
          padding: 2px;
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 0 8px var(--doorway-color);
        }
        .doorway-frame:hover {
          transform: scale(1.1);
          box-shadow: 0 0 20px var(--doorway-color), inset 0 0 10px var(--doorway-color);
        }
        .doorway-portal {
          width: 100%;
          height: 100%;
          border-radius: 18px 18px 0 0;
          background: rgba(13, 25, 48, 0.85);
          overflow: hidden;
          position: relative;
        }
        .portal-vortex {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, var(--doorway-color) 0%, transparent 80%);
          opacity: 0.25;
          animation: portalSpin 3s linear infinite;
        }
        @keyframes portalSpin {
          0% { transform: rotate(0deg) scale(0.9); opacity: 0.2; }
          50% { opacity: 0.4; transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(0.9); opacity: 0.2; }
        }
        
        .doorway-label {
          font-size: 8px;
          font-weight: 700;
          color: #94a3b8;
          text-align: center;
          line-height: 1.2;
        }

        .crystal-progress-container {
          background: rgba(8, 12, 24, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 12px;
          padding: 12px;
        }
        .crystal-title {
          display: block;
          font-size: 9px;
          font-weight: 800;
          color: #94a3b8;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 12px;
          border-left: 2px solid #00f2fe;
          padding-left: 6px;
        }
        .crystal-tree-box {
          height: 120px;
          width: 100%;
        }

        /* SVG Crystal Growing animation */
        .crystal-branch {
          animation: growLine 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        @keyframes growLine {
          from { stroke-dashoffset: 200; }
          to { stroke-dashoffset: 0; }
        }

        .crystal-leaf-node {
          animation: popNode 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.5s forwards;
          transform-origin: center;
          opacity: 0;
          transform: scale(0);
        }
        @keyframes popNode {
          to { opacity: 1; transform: scale(1); }
        }

        /* 6. Daily Goals: Tablet & Coin Animation */
        .panel-heading-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }
        .aura-counter {
          background: rgba(245, 158, 11, 0.08);
          border: 1.5px solid rgba(245, 158, 11, 0.35);
          padding: 4px 10px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .aura-title {
          font-family: monospace;
          font-size: 8px;
          font-weight: 800;
          color: #f59e0b;
        }
        .aura-num {
          font-family: monospace;
          font-size: 14px;
          font-weight: 900;
          color: #f59e0b;
          text-shadow: 0 0 6px rgba(245, 158, 11, 0.4);
        }
        .aura-description {
          font-size: 11px;
          color: #94a3b8;
          line-height: 1.4;
          margin-bottom: 16px;
        }

        /* Checklist physical tablet */
        .checklist-tablet {
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          border: 2.5px solid #334155;
          border-radius: 14px;
          padding: 6px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.5);
        }
        .tablet-screen {
          background: rgba(8, 12, 24, 0.92);
          border: 1px solid #1e293b;
          border-radius: 8px;
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .checklist-item-row {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          padding: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .checklist-item-row:hover {
          background: rgba(0, 242, 254, 0.04);
          border-color: rgba(0, 242, 254, 0.25);
        }
        .checklist-item-row.checked {
          background: rgba(16, 185, 129, 0.05);
          border-color: rgba(16, 185, 129, 0.25);
        }

        .interactive-checkmark {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .checkmark-box {
          width: 18px;
          height: 18px;
          border: 1.5px solid rgba(255,255,255,0.25);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        .checkmark-box.active {
          background: #10b981;
          border-color: #10b981;
          box-shadow: 0 0 8px rgba(16, 185, 129, 0.6);
        }
        .checkmark-icon {
          color: #ffffff;
          font-size: 11px;
          font-weight: bold;
        }

        .goal-text-content {
          flex: 1;
        }
        .goal-main-text {
          font-size: 11px;
          font-weight: 500;
          color: #cbd5e1;
          transition: all 0.2s ease;
        }
        .goal-main-text.strike {
          text-decoration: line-through;
          color: #64748b;
        }

        /* 3D Gold coin checkmarks */
        .coin-wrapper {
          perspective: 100px;
        }
        .gold-coin-3d {
          width: 34px;
          height: 22px;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.6s;
        }
        .spin-coin {
          transform: rotateY(180deg);
        }
        .coin-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: monospace;
          font-size: 9px;
          font-weight: 900;
        }
        .front {
          background: radial-gradient(circle, #ffe066 0%, #f59e0b 60%, #b45309 100%);
          border: 1px solid #ffe066;
          color: #78350f;
          box-shadow: 0 2px 5px rgba(245, 158, 11, 0.4);
        }
        .back {
          background: radial-gradient(circle, #ffe066 0%, #d97706 60%, #92400e 100%);
          border: 1px solid #ffe066;
          color: #ffffff;
          transform: rotateY(180deg);
        }

        .tablet-bezel-bottom {
          display: flex;
          justify-content: center;
          padding: 8px 0 4px 0;
        }
        .bezel-home-button {
          width: 8px;
          height: 8px;
          border: 1px solid #475569;
          border-radius: 50%;
        }

        /* Floating animations definitions */
        .float-anim-1 { animation: floatPanel1 6s ease-in-out infinite alternate; }
        .float-anim-2 { animation: floatPanel2 7s ease-in-out infinite alternate; }
        .float-anim-3 { animation: floatPanel3 5s ease-in-out infinite alternate; }

        @keyframes floatPanel1 {
          0% { transform: rotateX(2deg) rotateY(-2deg) translateY(0); }
          100% { transform: rotateX(1.5deg) rotateY(-1.5deg) translateY(-8px); }
        }
        @keyframes floatPanel2 {
          0% { transform: rotateX(2deg) rotateY(-2deg) translateY(0); }
          100% { transform: rotateX(2.5deg) rotateY(-2.5deg) translateY(-6px); }
        }
        @keyframes floatPanel3 {
          0% { transform: rotateX(2deg) rotateY(-2deg) translateY(0); }
          100% { transform: rotateX(2deg) rotateY(-1deg) translateY(-10px); }
        }

        /* Responsive cockpit design styles */
        @media (max-width: 1024px) {
          .cockpit-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
          .cockpit-column:last-child {
            grid-column: span 2;
          }
        }

        @media (max-width: 640px) {
          .cockpit-grid {
            grid-template-columns: 1fr;
          }
          .cockpit-column:last-child {
            grid-column: span 1;
          }
          .cockpit-main-title {
            font-size: 32px;
          }
          .cockpit-chiseled-title {
            font-size: 20px;
          }
          .crystal-book-display {
            grid-template-columns: 1fr;
            height: auto;
          }
          .left-page {
            transform: none;
            border-right: none;
            border-bottom: 1px dashed rgba(255, 255, 255, 0.15);
            margin-bottom: 8px;
            padding-bottom: 12px;
          }
          .right-page {
            transform: none;
            border-left: none;
          }
        }
      `}</style>
    </section>
  );
}

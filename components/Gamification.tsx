'use client';

import { useState, useEffect, useRef } from 'react';

interface GamificationProps {
  lang: 'bn' | 'en';
}

const copy = {
  bn: {
    badge: 'গেমিফিকেশন ও রিওয়ার্ডস',
    title: 'পড়াশোনা এখন আরও আনন্দদায়ক',
    subtitle: 'প্রতিদিন লক্ষ্য পূরণ করুন, Aura পয়েন্ট অর্জন করুন এবং আকর্ষণীয় পুরস্কার জিতে নিন।',
    features: [
      { icon: '🏆', title: 'লিগ ও র‍্যাংকিং', desc: 'সিলভার, গোল্ড ও ডায়মন্ড লিগে উন্নীত হোন।' },
      { icon: '🔥', title: 'ডেইলি স্ট্রিক', desc: 'টানা পড়াশোনা করে স্ট্রিক বজায় রাখুন।' },
      { icon: '🎁', title: 'আকর্ষণীয় পুরস্কার', desc: 'Aura দিয়ে টি-শার্ট ও স্যান্ড ওয়াচ জিতে নিন।' },
    ],
    sliderLabel: 'দৈনিক প্র্যাকটিস লক্ষ্যমাত্রা:',
    sliderSuffix: 'টি প্রশ্ন/দিন',
    mockup: {
      name: 'মনির হোসেন',
      email: 'contract.monir.hossen@gmail.com',
      premium: 'প্রিমিয়াম মেম্বার',
      silverLeague: 'সিলভার লীগ',
      goldLeague: 'গোল্ড লীগ',
      diamondLeague: 'ডায়মন্ড লীগ',
      nextLeague: 'পরবর্তী লীগ',
      aura: 'Aura',
      progressRemaining: 'Aura প্রয়োজন',
      rankSub: 'সর্বকালীন র‍্যাঙ্ক',
      ptsSub: 'Q পয়েন্ট',
      streakSub: 'দিন 🔥',
      rewardTitle: 'একটি "প্রস্তুতি" টি-শার্ট জিতুন',
      rewardSub: 'বিজেতা',
      requirements: {
        points: 'পয়েন্ট',
        streak: 'স্ট্রিক',
        rank: 'র‍্যাঙ্ক'
      },
      notMet: 'শর্ত পূরণ হয়নি',
      claimable: 'পুরস্কার ক্লেইম করুন! 🎉'
    }
  },
  en: {
    badge: 'Gamification & Rewards',
    title: 'Make Learning Fun & Rewarding',
    subtitle: 'Hit daily goals, earn Aura points, climb the leagues, and win exclusive physical rewards.',
    features: [
      { icon: '🏆', title: 'Leagues & Ranking', desc: 'Progress through Silver, Gold, and Diamond leagues.' },
      { icon: '🔥', title: 'Daily Streaks', desc: 'Maintain your study streak by practicing every day.' },
      { icon: '🎁', title: 'Exclusive Rewards', desc: 'Redeem Aura for Prostuti T-Shirts & Sand Watches.' },
    ],
    sliderLabel: 'Daily Practice Target:',
    sliderSuffix: 'questions/day',
    mockup: {
      name: 'Monir Hossen',
      email: 'contract.monir.hossen@gmail.com',
      premium: 'Premium Member',
      silverLeague: 'Silver League',
      goldLeague: 'Gold League',
      diamondLeague: 'Diamond League',
      nextLeague: 'Next League',
      aura: 'Aura',
      progressRemaining: 'Aura more',
      rankSub: 'All-Time Rank',
      ptsSub: 'Q pts',
      streakSub: 'Days 🔥',
      rewardTitle: 'Get A "Prostuti" T Shirt',
      rewardSub: 'Conqueror',
      requirements: {
        points: 'Points',
        streak: 'Streak',
        rank: 'Rank'
      },
      notMet: 'Requirements Not Met',
      claimable: 'Claim Your Reward! 🎉'
    }
  }
};

export default function Gamification({ lang }: GamificationProps) {
  const t = copy[lang];
  const [points, setPoints] = useState<number>(1760);
  const [streak, setStreak] = useState<number>(9);
  const [rankProgress, setRankProgress] = useState<number>(37); // Maps to rank 13
  const [celebrate, setCelebrate] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  // Dynamic calculations based on slider input
  const auraPoints = points;
  const progressPercent = Math.min(100, Math.floor((auraPoints / 3000) * 100));
  const remainingAura = Math.max(0, 3000 - auraPoints);
  
  const streakDays = streak;
  const rankVal = 50 - rankProgress; // goes from 50 down to 1
  const qPoints = Math.floor(auraPoints * 1.5 + streakDays * 12);

  let leagueIcon = '🥈';
  let leagueName = t.mockup.silverLeague;
  let nextLeagueInfo = t.mockup.goldLeague;

  if (rankVal <= 10) {
    leagueIcon = '💎';
    leagueName = t.mockup.diamondLeague;
    nextLeagueInfo = 'Max League Reached';
  } else if (rankVal <= 25) {
    leagueIcon = '🥇';
    leagueName = t.mockup.goldLeague;
    nextLeagueInfo = t.mockup.diamondLeague;
  }

  const allMet = points >= 3000 && streak >= 25 && rankVal <= 5;
  const isRewardClaimable = allMet;

  useEffect(() => {
    if (allMet) {
      setCelebrate(true);
      const timer = setTimeout(() => setCelebrate(false), 1200);
      return () => clearTimeout(timer);
    } else {
      setCelebrate(false);
    }
  }, [allMet]);

  return (
    <section ref={sectionRef} id="gamification" aria-labelledby="gamification-heading" style={{ padding: '110px 0', overflow: 'hidden', background: 'var(--color-surface-base)' }}>
      <div className="container-page">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-7)', alignItems: 'center' }} className="gamification-grid">
          
          {/* Left: Text & Features */}
          <div className="reveal">
            <span className="badge badge-recommended" style={{ marginBottom: 'var(--space-4)', background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b', borderColor: 'rgba(245, 158, 11, 0.3)' }}>
              ✦ {t.badge}
            </span>
            <h2 id="gamification-heading" style={{ fontSize: 'clamp(24px, 4vw, var(--font-size-h1))', fontWeight: 800, color: 'var(--color-text-primary)', lineHeight: 1.15, marginBottom: 'var(--space-4)', letterSpacing: '-0.5px' }}>
              {t.title}
            </h2>
            <p style={{ fontSize: 'var(--font-size-h3)', color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: 'var(--space-6)' }}>
              {t.subtitle}
            </p>

            {/* 3 Interactive Sliders */}
            <div 
              className="reveal"
              style={{ 
                background: 'rgba(255,255,255,0.02)', 
                border: '1px solid var(--color-border-default)', 
                borderRadius: '12px', 
                padding: '24px',
                marginBottom: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
              }}
            >
              {/* Points Slider */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <label htmlFor="pts-slider" style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-text-primary)' }}>{t.mockup.requirements.points}</label>
                  <span style={{ fontSize: '15px', fontWeight: 800, color: 'var(--color-surface-strong)', fontFamily: 'monospace' }}>{points} / 3000</span>
                </div>
                <input 
                  id="pts-slider"
                  type="range" 
                  min="0" max="3200" step="50" 
                  value={points} 
                  onChange={(e) => setPoints(parseInt(e.target.value))} 
                  style={{ width: '100%', accentColor: 'var(--color-surface-strong)', cursor: 'pointer' }} 
                  aria-valuemin={0} aria-valuemax={3200} aria-valuenow={points} 
                />
              </div>

              {/* Streak Slider */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <label htmlFor="streak-slider" style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-text-primary)' }}>{t.mockup.requirements.streak}</label>
                  <span style={{ fontSize: '15px', fontWeight: 800, color: 'var(--color-surface-strong)', fontFamily: 'monospace' }}>{streak} {lang === 'bn' ? 'দিন' : 'Days'}</span>
                </div>
                <input 
                  id="streak-slider"
                  type="range" 
                  min="0" max="30" step="1" 
                  value={streak} 
                  onChange={(e) => setStreak(parseInt(e.target.value))} 
                  style={{ width: '100%', accentColor: 'var(--color-surface-strong)', cursor: 'pointer' }} 
                  aria-valuemin={0} aria-valuemax={30} aria-valuenow={streak} 
                />
              </div>

              {/* Rank Slider */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <label htmlFor="rank-slider" style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-text-primary)' }}>{t.mockup.requirements.rank}</label>
                  <span style={{ fontSize: '15px', fontWeight: 800, color: 'var(--color-surface-strong)', fontFamily: 'monospace' }}>#{rankVal}</span>
                </div>
                <input 
                  id="rank-slider"
                  type="range" 
                  min="0" max="49" step="1" 
                  value={rankProgress} 
                  onChange={(e) => setRankProgress(parseInt(e.target.value))} 
                  style={{ width: '100%', accentColor: 'var(--color-surface-strong)', cursor: 'pointer', direction: 'ltr' }} 
                  aria-valuemin={1} aria-valuemax={50} aria-valuenow={rankVal} 
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {t.features.map((feat, i) => (
                <div key={i} className="reveal" style={{ display: 'flex', gap: 'var(--space-4)', transitionDelay: `${i * 70}ms` }}>
                  <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-sm)', background: 'var(--color-surface-card)', border: '1px solid var(--color-border-default)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0, boxShadow: 'var(--shadow-navy)' }}>
                    {feat.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: 'var(--font-size-md)', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 'var(--space-1)' }}>{feat.title}</h3>
                    <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dashboard Mockup */}
          <div className="mockup-container reveal" style={{ 
            background: 'var(--color-surface-base)', 
            border: '1px solid var(--color-border-default)', 
            borderRadius: 'var(--radius-md)', 
            padding: 'var(--space-5)',
            boxShadow: '0 24px 64px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
            transformStyle: 'preserve-3d',
            transition: 'all 0.3s ease'
          }}>
            
            {/* User Profile Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginBottom: 'var(--space-5)', background: 'var(--color-surface-card)', padding: 'var(--space-4)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-default)' }}>
              <div style={{ width: 56, height: 56, borderRadius: '12px', background: 'var(--color-surface-strong)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontSize: '24px', fontWeight: 800, position: 'relative' }}>
                M
                <div style={{ position: 'absolute', bottom: -4, right: -4, width: 20, height: 20, background: '#4d6bff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', border: '2px solid var(--color-surface-card)' }}>📷</div>
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: 'var(--font-size-body)', fontWeight: 700, color: 'var(--color-text-primary)' }}>{t.mockup.name}</h4>
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-tertiary)', marginBottom: 'var(--space-1)' }}>{t.mockup.email}</p>
                <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, color: '#f59e0b', background: 'rgba(245,158,11,0.15)', padding: '4px 8px', borderRadius: '4px' }}>
                  {t.mockup.premium}
                </span>
              </div>
            </div>

            {/* League Banner */}
            <div style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))', border: '1px solid var(--color-border-default)', borderRadius: 'var(--radius-sm)', padding: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-4)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                  <div style={{ fontSize: '28px', transition: 'transform 0.3s ease' }}>{leagueIcon}</div>
                  <div>
                    <h5 style={{ fontSize: 'var(--font-size-body)', fontWeight: 800, color: 'var(--color-text-primary)' }}>{leagueName}</h5>
                    <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>{t.mockup.nextLeague}: {nextLeagueInfo}</p>
                  </div>
                </div>
                <div style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b', border: '1px solid rgba(245, 158, 11, 0.2)', fontSize: 'var(--font-size-sm)', fontWeight: 800, padding: '4px 12px', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  ⚡ <span style={{ fontFamily: 'monospace' }}>{auraPoints}</span> {t.mockup.aura}
                </div>
              </div>
              {/* Progress Bar */}
              <div style={{ height: 6, background: 'rgba(255,255,255,0.1)', borderRadius: '3px', marginBottom: 'var(--space-2)', overflow: 'hidden' }}>
                <div style={{ width: `${progressPercent}%`, height: '100%', background: 'var(--color-surface-strong)', borderRadius: '3px', transition: 'width 0.3s ease' }}></div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
                <span style={{ fontFamily: 'monospace' }}>{auraPoints} / 3000</span>
                <span>{lang === 'bn' ? 'আরও' : 'Need'} <span style={{ fontFamily: 'monospace' }}>{remainingAura}</span> {t.mockup.progressRemaining}</span>
              </div>
            </div>

            {/* Stats Row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 'var(--space-3)', marginBottom: 'var(--space-5)' }}>
              {[
                { icon: '🏆', title: `#${rankVal}`, sub: t.mockup.rankSub },
                { icon: '📊', title: `+${qPoints}`, sub: t.mockup.ptsSub },
                { icon: '🔥', title: `${streakDays}`, sub: t.mockup.streakSub }
              ].map((stat, idx) => (
                <div key={idx} style={{ background: 'var(--color-surface-card)', border: '1px solid var(--color-border-default)', borderRadius: 'var(--radius-sm)', padding: 'var(--space-3)' }}>
                  <div style={{ fontSize: '14px', marginBottom: 'var(--space-2)' }}>{stat.icon}</div>
                  <div style={{ fontSize: 'var(--font-size-body)', fontWeight: 800, color: 'var(--color-text-primary)', fontFamily: 'monospace' }}>{stat.title}</div>
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>{stat.sub}</div>
                </div>
              ))}
            </div>

            {/* Reward Card */}
            <div style={{ background: 'var(--color-surface-card)', border: '1px solid var(--color-border-default)', borderRadius: 'var(--radius-sm)', padding: 'var(--space-4)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                <div style={{ width: 40, height: 40, background: isRewardClaimable ? 'rgba(0,150,109,0.15)' : 'rgba(255,255,255,0.05)', color: isRewardClaimable ? 'var(--color-surface-strong)' : '#888', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', transition: 'all 0.3s ease' }}>👕</div>
                <div>
                  <h6 style={{ fontSize: 'var(--font-size-sm)', fontWeight: 700, color: 'var(--color-text-primary)' }}>{t.mockup.rewardTitle}</h6>
                  <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>{t.mockup.rewardSub}</p>
                </div>
              </div>
              
              {/* Requirements List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                {[
                  { label: t.mockup.requirements.points, val: `${auraPoints} / 3000`, met: auraPoints >= 3000 },
                  { label: t.mockup.requirements.streak, val: `${streakDays} / 25`, met: streakDays >= 25 },
                  { label: t.mockup.requirements.rank, val: `#${rankVal} / #5`, met: rankVal <= 5 },
                ].map((req, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 'var(--font-size-xs)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--color-text-secondary)' }}>
                      <div style={{ 
                        width: 18, height: 18, 
                        borderRadius: '50%', 
                        border: req.met ? 'none' : '2px solid var(--color-border-default)', 
                        background: req.met ? 'var(--color-surface-strong)' : 'transparent', 
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)', 
                        transform: req.met ? 'scale(1.1)' : 'scale(1)' 
                      }}>
                        {req.met && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="4"><path d="M20 6L9 17l-5-5"/></svg>}
                      </div>
                      <span style={{ fontWeight: 600 }}>{req.label}</span>
                    </div>
                    <div style={{ color: req.met ? 'var(--color-surface-strong)' : 'var(--color-text-tertiary)', fontWeight: 700, fontFamily: 'monospace', transition: 'color 0.2s' }}>
                      {req.val}
                    </div>
                  </div>
                ))}
              </div>

              {/* Status */}
              <button 
                disabled={!isRewardClaimable}
                aria-label={isRewardClaimable ? t.mockup.claimable : t.mockup.notMet}
                className={celebrate ? 'celebration-active' : ''}
                style={{ 
                  width: '100%',
                  background: isRewardClaimable ? 'var(--color-surface-strong)' : 'rgba(255,255,255,0.05)', 
                  border: isRewardClaimable ? '1px solid transparent' : '1px solid var(--color-border-default)',
                  padding: 'var(--space-3)', 
                  borderRadius: 'var(--radius-xs)', 
                  textAlign: 'center', 
                  fontSize: 'var(--font-size-sm)', 
                  fontWeight: 800, 
                  color: isRewardClaimable ? '#fff' : 'var(--color-text-tertiary)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: 'var(--space-2)',
                  cursor: isRewardClaimable ? 'pointer' : 'not-allowed',
                  transition: 'all 0.3s ease',
                  boxShadow: isRewardClaimable ? '0 8px 24px rgba(0, 150, 109, 0.4)' : 'none',
                  position: 'relative'
                }}
              >
                {/* Celebration Particles */}
                {celebrate && [...Array(12)].map((_, i) => (
                  <span key={i} className="confetti" style={{ 
                    '--tx': `${Math.cos(i * 30 * Math.PI / 180) * 60}px`, 
                    '--ty': `${Math.sin(i * 30 * Math.PI / 180) * 60}px`,
                    background: ['#00d9a0', '#8b5cf6', '#f59e0b'][i % 3] 
                  } as React.CSSProperties} />
                ))}

                {!isRewardClaimable && <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>}
                {isRewardClaimable ? t.mockup.claimable : t.mockup.notMet}
              </button>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        .mockup-container {
          transform: perspective(1000px) rotateY(-3deg) rotateX(1deg);
        }
        .celebration-active {
          animation: pulseBorder 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        @keyframes pulseBorder {
          0% { transform: scale(1); }
          20% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        .confetti {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          animation: popOut 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0;
          pointer-events: none;
          top: 50%;
          left: 50%;
          margin-top: -4px;
          margin-left: -4px;
        }
        @keyframes popOut {
          0% { transform: translate(0, 0) scale(0); opacity: 1; }
          70% { opacity: 1; }
          100% { transform: translate(var(--tx), var(--ty)) scale(1.5); opacity: 0; }
        }
        @media (max-width: 900px) {
          .gamification-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .mockup-container {
            transform: none;
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}

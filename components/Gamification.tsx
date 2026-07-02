'use client';

import { useState } from 'react';

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
  const [targetQuestions, setTargetQuestions] = useState<number>(30);

  // Dynamic calculations based on slider input
  const auraPoints = targetQuestions * 24 + 1042;
  const progressPercent = Math.min(100, Math.floor((auraPoints / 3000) * 100));
  const remainingAura = Math.max(0, 3000 - auraPoints);
  
  const streakDays = Math.floor(targetQuestions / 4) + 2;
  const rankVal = Math.max(1, 18 - Math.floor(targetQuestions / 6));
  const qPoints = targetQuestions * 8;

  let leagueIcon = '🥈';
  let leagueName = t.mockup.silverLeague;
  let nextLeagueInfo = t.mockup.goldLeague;

  if (targetQuestions >= 80) {
    leagueIcon = '💎';
    leagueName = t.mockup.diamondLeague;
    nextLeagueInfo = 'Max League Reached';
  } else if (targetQuestions >= 40) {
    leagueIcon = '🥇';
    leagueName = t.mockup.goldLeague;
    nextLeagueInfo = t.mockup.diamondLeague;
  }

  const isRewardClaimable = targetQuestions >= 90;

  return (
    <section id="gamification" aria-labelledby="gamification-heading" style={{ padding: 'var(--space-8) 0', overflow: 'hidden', background: 'var(--color-surface-base)' }}>
      <div className="container-page">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-7)', alignItems: 'center' }} className="gamification-grid">
          
          {/* Left: Text & Features */}
          <div>
            <span className="badge badge-recommended" style={{ marginBottom: 'var(--space-4)', background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b', borderColor: 'rgba(245, 158, 11, 0.3)' }}>
              ✦ {t.badge}
            </span>
            <h2 id="gamification-heading" style={{ fontSize: 'clamp(24px, 4vw, var(--font-size-h1))', fontWeight: 800, color: 'var(--color-text-primary)', lineHeight: 1.15, marginBottom: 'var(--space-4)', letterSpacing: '-0.5px' }}>
              {t.title}
            </h2>
            <p style={{ fontSize: 'var(--font-size-h3)', color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: 'var(--space-6)' }}>
              {t.subtitle}
            </p>

            {/* Slider Control */}
            <div 
              style={{ 
                background: 'rgba(255,255,255,0.02)', 
                border: '1px solid var(--color-border-default)', 
                borderRadius: '12px', 
                padding: '20px',
                marginBottom: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                  {t.sliderLabel}
                </span>
                <span style={{ fontSize: '16px', fontWeight: 800, color: 'var(--color-surface-strong)', fontFamily: 'monospace' }}>
                  {targetQuestions} {t.sliderSuffix}
                </span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="100" 
                step="5"
                value={targetQuestions} 
                onChange={(e) => setTargetQuestions(parseInt(e.target.value))}
                style={{ 
                  width: '100%', 
                  accentColor: 'var(--color-surface-strong)',
                  cursor: 'pointer'
                }} 
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {t.features.map((feat, i) => (
                <div key={i} style={{ display: 'flex', gap: 'var(--space-4)' }}>
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
          <div style={{ 
            background: 'var(--color-surface-base)', 
            border: '1px solid var(--color-border-default)', 
            borderRadius: 'var(--radius-md)', 
            padding: 'var(--space-5)',
            boxShadow: '0 24px 64px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
            transform: 'perspective(1000px) rotateY(-3deg) rotateX(1deg)',
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
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
                {[
                  { label: t.mockup.requirements.points, val: `${auraPoints} / 3000`, met: auraPoints >= 3000 },
                  { label: t.mockup.requirements.streak, val: `${streakDays} / 25`, met: streakDays >= 25 },
                  { label: t.mockup.requirements.rank, val: `#${rankVal} / #5`, met: rankVal <= 5 },
                ].map((req, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 'var(--font-size-xs)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--color-text-secondary)' }}>
                      <div style={{ width: 12, height: 12, borderRadius: '50%', border: '1px solid var(--color-border-default)', background: req.met ? 'var(--color-surface-strong)' : 'transparent', transition: 'background 0.3s ease' }}></div>
                      {req.label}
                    </div>
                    <div style={{ color: 'var(--color-text-tertiary)', fontFamily: 'monospace' }}>{req.val}</div>
                  </div>
                ))}
              </div>

              {/* Status */}
              <button 
                disabled={!isRewardClaimable}
                aria-label={isRewardClaimable ? t.mockup.claimable : t.mockup.notMet}
                style={{ 
                  width: '100%',
                  background: isRewardClaimable ? 'var(--color-surface-strong)' : 'rgba(255,255,255,0.05)', 
                  border: isRewardClaimable ? '1px solid var(--color-surface-strong)' : 'none',
                  padding: 'var(--space-2) var(--space-3)', 
                  borderRadius: 'var(--radius-xs)', 
                  textAlign: 'center', 
                  fontSize: 'var(--font-size-sm)', 
                  fontWeight: 700, 
                  color: isRewardClaimable ? '#000' : 'var(--color-text-tertiary)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: 'var(--space-2)',
                  cursor: isRewardClaimable ? 'pointer' : 'not-allowed',
                  transition: 'all 0.3s ease'
                }}
              >
                {!isRewardClaimable && <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>}
                {isRewardClaimable ? t.mockup.claimable : t.mockup.notMet}
              </button>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .gamification-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}

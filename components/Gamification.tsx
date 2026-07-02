'use client';

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
    mockup: {
      name: 'Monir Hossen',
      email: 'contract.monir.hossen@gmail.com',
      premium: 'Premium Member',
      league: 'সিলভার লীগ',
      leagueSub: 'পরবর্তী: গোল্ড লীগ',
      aura: '1402 Aura',
      progressText: '1402 / 3000',
      progressRemaining: 'আরও 1598 Aura প্রয়োজন',
      rankTitle: '#10',
      rankSub: 'All-Time Rank',
      ptsTitle: '200+',
      ptsSub: 'Q pts',
      streakTitle: '6',
      streakSub: 'Days 🔥',
      rewardTitle: 'Get A "Prostuti" T Shirt',
      rewardSub: 'Conqueror',
      requirements: {
        points: { label: 'Points', value: '1402 / 10000' },
        streak: { label: 'Streak', value: '6 / 180' },
        rank: { label: 'Rank', value: '#10 / Top 5' }
      },
      notMet: 'Requirements Not Met'
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
    mockup: {
      name: 'Monir Hossen',
      email: 'contract.monir.hossen@gmail.com',
      premium: 'Premium Member',
      league: 'Silver League',
      leagueSub: 'Next: Gold League',
      aura: '1402 Aura',
      progressText: '1402 / 3000',
      progressRemaining: 'Need 1598 Aura more',
      rankTitle: '#10',
      rankSub: 'All-Time Rank',
      ptsTitle: '200+',
      ptsSub: 'Q pts',
      streakTitle: '6',
      streakSub: 'Days 🔥',
      rewardTitle: 'Get A "Prostuti" T Shirt',
      rewardSub: 'Conqueror',
      requirements: {
        points: { label: 'Points', value: '1402 / 10000' },
        streak: { label: 'Streak', value: '6 / 180' },
        rank: { label: 'Rank', value: '#10 / Top 5' }
      },
      notMet: 'Requirements Not Met'
    }
  }
};

export default function Gamification({ lang }: GamificationProps) {
  const t = copy[lang];

  return (
    <section id="gamification" aria-labelledby="gamification-heading" style={{ padding: 'var(--space-8) 0', overflow: 'hidden' }}>
      <div className="container-page">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }} className="gamification-grid">
          
          {/* Left: Text & Features */}
          <div>
            <span className="badge badge-recommended" style={{ marginBottom: '20px', background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b', borderColor: 'rgba(245, 158, 11, 0.3)' }}>
              ✦ {t.badge}
            </span>
            <h2 id="gamification-heading" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: 'var(--color-text-primary)', lineHeight: 1.15, marginBottom: '16px', letterSpacing: '-0.5px' }}>
              {t.title}
            </h2>
            <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: '32px' }}>
              {t.subtitle}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {t.features.map((feat, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-sm)', background: 'var(--color-surface-card)', border: '1px solid var(--color-border-default)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0, boxShadow: 'var(--shadow-navy)' }}>
                    {feat.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: 'var(--font-size-md)', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '4px' }}>{feat.title}</h3>
                    <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dashboard Mockup */}
          <div style={{ 
            background: 'var(--color-surface-bg)', 
            border: '1px solid var(--color-border-default)', 
            borderRadius: 'var(--radius-md)', 
            padding: '24px',
            boxShadow: '0 24px 64px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
            transform: 'perspective(1000px) rotateY(-5deg) rotateX(2deg)',
            transformStyle: 'preserve-3d'
          }}>
            
            {/* User Profile Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px', background: 'var(--color-surface-card)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-default)' }}>
              <div style={{ width: 56, height: 56, borderRadius: '12px', background: '#8b5cf6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '24px', fontWeight: 800, position: 'relative' }}>
                M
                <div style={{ position: 'absolute', bottom: -4, right: -4, width: 20, height: 20, background: '#4d6bff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', border: '2px solid var(--color-surface-card)' }}>📷</div>
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-text-primary)' }}>{t.mockup.name}</h4>
                <p style={{ fontSize: '12px', color: 'var(--color-text-inverse)', marginBottom: '6px' }}>{t.mockup.email}</p>
                <span style={{ fontSize: '10px', fontWeight: 700, color: '#f59e0b', background: 'rgba(245,158,11,0.15)', padding: '4px 8px', borderRadius: '4px' }}>
                  {t.mockup.premium}
                </span>
              </div>
            </div>

            {/* League Banner */}
            <div style={{ background: 'linear-gradient(135deg, rgba(148,163,184,0.15), rgba(148,163,184,0.05))', border: '1px solid rgba(148,163,184,0.2)', borderRadius: 'var(--radius-sm)', padding: '20px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ fontSize: '28px' }}>🥈</div>
                  <div>
                    <h5 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--color-text-primary)' }}>{t.mockup.league}</h5>
                    <p style={{ fontSize: '11px', color: 'var(--color-text-inverse)' }}>{t.mockup.leagueSub}</p>
                  </div>
                </div>
                <div style={{ background: 'rgba(245,158,11,0.15)', color: '#f59e0b', fontSize: '12px', fontWeight: 800, padding: '6px 12px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  ⚡ {t.mockup.aura}
                </div>
              </div>
              {/* Progress Bar */}
              <div style={{ height: 6, background: 'rgba(255,255,255,0.1)', borderRadius: '3px', marginBottom: '8px', overflow: 'hidden' }}>
                <div style={{ width: '46%', height: '100%', background: '#fff', borderRadius: '3px' }}></div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--color-text-inverse)' }}>
                <span>{t.mockup.progressText}</span>
                <span>{t.mockup.progressRemaining}</span>
              </div>
            </div>

            {/* Stats Row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '24px' }}>
              {[
                { icon: '🏆', title: t.mockup.rankTitle, sub: t.mockup.rankSub, color: '#f59e0b' },
                { icon: '📊', title: t.mockup.ptsTitle, sub: t.mockup.ptsSub, color: '#4d6bff' },
                { icon: '🔥', title: t.mockup.streakTitle, sub: t.mockup.streakSub, color: '#ef4444' }
              ].map((stat, idx) => (
                <div key={idx} style={{ background: 'var(--color-surface-card)', border: '1px solid var(--color-border-default)', borderRadius: 'var(--radius-sm)', padding: '12px' }}>
                  <div style={{ fontSize: '14px', marginBottom: '8px' }}>{stat.icon}</div>
                  <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--color-text-primary)' }}>{stat.title}</div>
                  <div style={{ fontSize: '11px', color: 'var(--color-text-inverse)' }}>{stat.sub}</div>
                </div>
              ))}
            </div>

            {/* Reward Card */}
            <div style={{ background: 'var(--color-surface-card)', border: '1px solid var(--color-border-default)', borderRadius: 'var(--radius-sm)', padding: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{ width: 40, height: 40, background: 'rgba(236,72,153,0.15)', color: '#ec4899', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>👕</div>
                <div>
                  <h6 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-text-primary)' }}>{t.mockup.rewardTitle}</h6>
                  <p style={{ fontSize: '11px', color: 'var(--color-text-inverse)' }}>{t.mockup.rewardSub}</p>
                </div>
              </div>
              
              {/* Requirements List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
                {[
                  { label: t.mockup.requirements.points.label, val: t.mockup.requirements.points.value },
                  { label: t.mockup.requirements.streak.label, val: t.mockup.requirements.streak.value },
                  { label: t.mockup.requirements.rank.label, val: t.mockup.requirements.rank.value },
                ].map((req, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-secondary)' }}>
                      <div style={{ width: 12, height: 12, borderRadius: '50%', border: '1px solid var(--color-border-default)', background: 'transparent' }}></div>
                      {req.label}
                    </div>
                    <div style={{ color: 'var(--color-text-inverse)', fontFamily: 'monospace' }}>{req.val}</div>
                  </div>
                ))}
              </div>

              {/* Status */}
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '6px', textAlign: 'center', fontSize: '12px', fontWeight: 700, color: 'var(--color-text-inverse)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>
                {t.mockup.notMet}
              </div>
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

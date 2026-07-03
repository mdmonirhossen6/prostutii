'use client';

import { useState, useCallback } from 'react';

interface TestimonialsProps {
  lang: 'bn' | 'en';
}

const testimonials = {
  bn: [
    {
      name: 'তাহমিদ হাসান',
      batch: 'HSC ২০২৫, বিজ্ঞান বিভাগ',
      avatar: 'ত',
      color: '#00966d',
      quote: 'প্রস্তুটি ছাড়া আমার পদার্থবিজ্ঞান এত ভালো হতো গঠন হতো না। প্রতিদিনের MCQ প্র্যাকটিস আমাকে ধারাবাহিকভাবে শেখার অভ্যাস তৈরি করেছে। HSC-তে পদার্থে A+ পেয়েছি!',
      result: 'GPA ৫.০০',
      exam: 'HSC ২০২৫',
      verified: true,
    },
    {
      name: 'সুমাইয়া আক্তার',
      batch: 'মেডিকেল ভর্তি ২০২৫',
      avatar: 'স',
      color: '#4d6bff',
      quote: 'মেডিকেল ভর্তি পরীক্ষার জন্য প্রস্তুতির প্রশ্নব্যাংক অসাধারণ। পুরো বায়োলজি সিলেবাস অধ্যায়ভিত্তিক প্র্যাকটিস করেছি। ঢামেক-এ চান্স পেয়েছি।',
      result: 'ঢাকা মেডিকেল',
      exam: 'Medical Admission ২০২৫',
      verified: true,
    },
    {
      name: 'রাফসান মাহমুদ',
      batch: 'ঢাকা বিশ্ববিদ্যালয় (DU) ভর্তি ২০২৫',
      avatar: 'র',
      color: '#e85d04',
      quote: 'DU-এর প্রশ্নপ্যাটার্ন বোঝা খুব জরুরি। প্রস্তুতির মডেল টেস্ট আর বিগত বছরের প্রশ্নব্যাংক আমাকে আত্মবিশ্বাসী করেছে। স্বপ্নের বিশ্ববিদ্যালয়ে চান্স পেয়েছি।',
      result: 'DU - ক ইউনিট',
      exam: 'DU Admission ২০২৫',
      verified: true,
    },
    {
      name: 'আরিয়ান খান',
      batch: 'বুয়েট ভর্তি ২০২৫',
      avatar: 'আ',
      color: '#06b6d4',
      quote: 'বুয়েটের জন্য পদার্থ ও গণিতের উচ্চতর অঙ্কের প্রস্তুতি এখানেই করেছি। Prostuti AI আমার দুর্বল অধ্যায়গুলো খুঁজে বের করে দিয়েছে — এটি গেম চেঞ্জার।',
      result: 'বুয়েট সিএসই',
      exam: 'BUET Admission ২০২৫',
      verified: true,
    },
  ],
  en: [
    {
      name: 'Tahmid Hassan',
      batch: 'HSC 2025, Science',
      avatar: 'T',
      color: '#00966d',
      quote: "Without Prostuti, my Physics wouldn't have been this strong. Daily MCQ practice built a consistent learning habit. I got A+ in Physics in HSC!",
      result: 'GPA 5.00',
      exam: 'HSC 2025',
      verified: true,
    },
    {
      name: 'Sumaiya Akter',
      batch: 'Medical Admission 2025',
      avatar: 'S',
      color: '#4d6bff',
      quote: "Prostuti's question bank for medical admission was exceptional. I practiced all of Biology chapter-by-chapter and got into Dhaka Medical College.",
      result: 'Dhaka Medical',
      exam: 'Medical Admission 2025',
      verified: true,
    },
    {
      name: 'Rafsan Mahmud',
      batch: 'DU Admission 2025',
      avatar: 'R',
      color: '#e85d04',
      quote: "Understanding DU's question pattern is crucial. Prostuti's model tests and previous years' question bank made me confident.",
      result: 'DU - A Unit',
      exam: 'DU Admission 2025',
      verified: true,
    },
    {
      name: 'Ariyan Khan',
      batch: 'BUET Admission 2025',
      avatar: 'A',
      color: '#06b6d4',
      quote: 'I prepared for BUET Physics and Math here. Prostuti AI finding my weak chapters was a complete game changer.',
      result: 'BUET CSE',
      exam: 'BUET Admission 2025',
      verified: true,
    },
  ],
};

// Real leaderboard data from the live app
const leaderboardData = [
  { rank: 1, name: 'Slam', pts: 1781, medal: '🥇', color: '#f59e0b' },
  { rank: 2, name: 'Tr Ritu', pts: 1775, medal: '🥈', color: '#94a3b8' },
  { rank: 3, name: 'Joy Biswas', pts: 789, medal: '🥉', color: '#cd7c2f' },
  { rank: 4, name: 'Soumya', pts: 763, medal: null, color: '#4d6bff' },
  { rank: 5, name: 'Rabiul Islam Sahab', pts: 593, medal: null, color: '#00966d' },
];

const copy = {
  bn: {
    badge: 'সাফল্যের গল্প',
    title: 'শিক্ষার্থীরা যা বলেন',
    subtitle: 'হাজার হাজার শিক্ষার্থীর সত্যিকারের সাফল্যের গল্প।',
    verified: '✓ যাচাইকৃত',
    result: 'ফলাফল',
    leaderboardTitle: 'সাপ্তাহিক লিডারবোর্ড',
    leaderboardSub: 'এই সপ্তাহের শীর্ষ প্র্যাকটিসকারী',
    pts: 'পয়েন্ট',
    weeklyTop: 'WEEKLY TOP',
    joinLeader: 'লিডারবোর্ডে যোগ দিন →',
  },
  en: {
    badge: 'Success Stories',
    title: 'What Students Say',
    subtitle: 'Real success stories from thousands of students.',
    verified: '✓ Verified',
    result: 'Result',
    leaderboardTitle: 'Weekly Leaderboard',
    leaderboardSub: "This week's top practitioners",
    pts: 'pts',
    weeklyTop: 'WEEKLY TOP',
    joinLeader: 'Join the leaderboard →',
  },
};

const EN_TO_BN_DIGITS: { [key: string]: string } = {
  '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪',
  '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯'
};

function toBanglaNumerals(num: string | number): string {
  return num.toString().split('').map(char => EN_TO_BN_DIGITS[char] || char).join('');
}

export default function Testimonials({ lang }: TestimonialsProps) {
  const t = copy[lang];
  const items = testimonials[lang];
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = useCallback(() => {
    setActiveIdx((i) => (i - 1 + items.length) % items.length);
  }, [items.length]);

  const next = useCallback(() => {
    setActiveIdx((i) => (i + 1) % items.length);
  }, [items.length]);

  return (
    <section
      id="leaderboard"
      aria-labelledby="testimonials-heading"
      style={{
        padding: '110px 0',
        background: 'radial-gradient(circle at 90% 80%, rgba(77, 107, 255, 0.05) 0%, transparent 60%), rgba(4, 6, 12, 0.99)',
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.003) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.003) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
      }}
    >
      <div className="container-page">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-7)' }}>
          <span className="badge badge-recommended" style={{ marginBottom: 'var(--space-4)' }}>
            {t.badge}
          </span>
          <h2
            id="testimonials-heading"
            className="section-title"
            style={{ marginBottom: 'var(--space-3)' }}
          >
            {t.title}
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            {t.subtitle}
          </p>
        </div>

        {/* Featured testimonial */}
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto var(--space-6)',
            position: 'relative',
          }}
          aria-live="polite"
          aria-label={lang === 'bn' ? 'বর্তমান প্রশংসাপত্র' : 'Current testimonial'}
        >
          <div
            key={activeIdx}
            style={{
              background: 'var(--color-surface-card)',
              border: '1px solid var(--color-border-default)',
              borderRadius: 'var(--radius-sm)',
              padding: 'var(--space-7)',
              position: 'relative',
              animation: 'fadeInUp 0.3s ease forwards',
            }}
          >
            {/* Quote mark */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                fontSize: '80px',
                color: 'rgba(0,150,109,0.12)',
                lineHeight: 1,
                fontFamily: 'serif',
              }}
            >
              "
            </div>

            {/* Avatar + name */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: '50%',
                  background: items[activeIdx].color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#fff',
                  flexShrink: 0,
                }}
                role="img"
                aria-label={items[activeIdx].name}
              >
                {items[activeIdx].avatar}
              </div>
              <div>
                <p style={{ fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '2px' }}>
                  {items[activeIdx].name}
                </p>
                <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
                  {items[activeIdx].batch}
                </p>
              </div>
              <div style={{ marginLeft: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 'var(--space-1)' }}>
                {items[activeIdx].verified && (
                  <span className="badge badge-green" style={{ fontSize: 'var(--font-size-xs)' }}>
                    {t.verified}
                  </span>
                )}
                <span
                  style={{
                    fontSize: 'var(--font-size-xs)',
                    color: '#00d9a0',
                    fontWeight: 700,
                  }}
                >
                  {t.result}: {items[activeIdx].result}
                </span>
              </div>
            </div>

            <blockquote
              style={{
                fontSize: '1.25rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.7,
                fontStyle: 'italic',
                margin: 0,
              }}
            >
              "{items[activeIdx].quote}"
            </blockquote>
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-4)', marginTop: 'var(--space-5)' }}>
            <button
              onClick={prev}
              aria-label={lang === 'bn' ? 'আগের মতামত' : 'Previous testimonial'}
              style={{ 
                width: 44, 
                height: 44, 
                padding: 0, 
                borderRadius: '50%',
                background: 'var(--color-surface-raised)',
                border: '1px solid var(--color-border-default)',
                color: 'var(--color-text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all var(--duration-fast) var(--easing-default)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--color-surface-hover)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--color-surface-raised)';
                e.currentTarget.style.borderColor = 'var(--color-border-default)';
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M19 12H5M12 5l-7 7 7 7"/>
              </svg>
            </button>

            {/* Dots */}
            <div style={{ display: 'flex', gap: 'var(--space-2)' }} role="tablist" aria-label={lang === 'bn' ? 'প্রশংসাপত্র নেভিগেশন' : 'Testimonial navigation'}>
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  role="tab"
                  aria-selected={i === activeIdx}
                  aria-label={`${lang === 'bn' ? 'প্রশংসাপত্র' : 'Testimonial'} ${i + 1}: ${items[i].name}`}
                  style={{
                    width: i === activeIdx ? 24 : 8,
                    height: 8,
                    borderRadius: 'var(--radius-md)',
                    background: i === activeIdx ? 'var(--color-surface-strong)' : 'rgba(255,255,255,0.2)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all var(--duration-fast) var(--easing-default)',
                    padding: 0,
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label={lang === 'bn' ? 'পরবর্তী মতামত' : 'Next testimonial'}
              style={{ 
                width: 44, 
                height: 44, 
                padding: 0, 
                borderRadius: '50%',
                background: 'var(--color-surface-raised)',
                border: '1px solid var(--color-border-default)',
                color: 'var(--color-text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all var(--duration-fast) var(--easing-default)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--color-surface-hover)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--color-surface-raised)';
                e.currentTarget.style.borderColor = 'var(--color-border-default)';
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom: testimonial selector + live leaderboard */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)', alignItems: 'start' }} className="testimonials-bottom-grid">
          {/* Testimonial selector */}
          <ul
            role="list"
            style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}
          >
            {items.map((item, i) => (
              <li key={i}>
                <button
                  onClick={() => setActiveIdx(i)}
                  aria-pressed={i === activeIdx}
                  aria-label={`${item.name} — ${item.result}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-3)',
                    width: '100%',
                    padding: 'var(--space-3) var(--space-4)',
                    background: i === activeIdx ? 'rgba(0,150,109,0.10)' : 'var(--color-surface-card)',
                    border: `1px solid ${i === activeIdx ? 'rgba(0,150,109,0.4)' : 'var(--color-border-default)'}`,
                    borderRadius: 'var(--radius-xs)',
                    cursor: 'pointer',
                    transition: 'all var(--duration-fast) var(--easing-default)',
                    fontFamily: 'var(--font-family-primary)',
                    textAlign: 'left',
                  }}
                  onMouseEnter={(e) => {
                    if (i !== activeIdx) {
                      (e.currentTarget as HTMLButtonElement).style.background = 'var(--color-surface-hover)';
                      (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.15)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (i !== activeIdx) {
                      (e.currentTarget as HTMLButtonElement).style.background = 'var(--color-surface-card)';
                      (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-border-default)';
                    }
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: item.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                      fontWeight: 700,
                      color: '#fff',
                      flexShrink: 0,
                    }}
                    role="img"
                    aria-label={item.name}
                    aria-hidden="true"
                  >
                    {item.avatar}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {item.name}
                    </p>
                    <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
                      {item.result} — {item.exam}
                    </p>
                  </div>
                </button>
              </li>
            ))}
          </ul>

          {/* Live Leaderboard Snapshot */}
          <div
            style={{
              background: 'var(--color-surface-card)',
              border: '1px solid var(--color-border-default)',
              borderRadius: 'var(--radius-sm)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-navy)',
            }}
            role="region"
            aria-label={t.leaderboardTitle}
          >
            {/* Header */}
            <div
              style={{
                padding: 'var(--space-4) var(--space-5)',
                borderBottom: '1px solid var(--color-border-default)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'rgba(0,150,109,0.06)',
              }}
            >
              <div>
                <p style={{ fontWeight: 700, color: 'var(--color-text-primary)', fontSize: 'var(--font-size-md)' }}>
                  🏆 {t.leaderboardTitle}
                </p>
                <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)', marginTop: '2px' }}>
                  {t.leaderboardSub}
                </p>
              </div>
              <span
                style={{
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 700,
                  color: '#f59e0b',
                  background: 'rgba(245,158,11,0.12)',
                  border: '1px solid rgba(245,158,11,0.25)',
                  borderRadius: 'var(--radius-md)',
                  padding: '3px 10px',
                }}
              >
                {t.weeklyTop}
              </span>
            </div>

            {/* Leaderboard rows */}
            <ul role="list" style={{ listStyle: 'none' }}>
              {leaderboardData.map((entry, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-3)',
                    padding: 'var(--space-3) var(--space-5)',
                    borderBottom: i < leaderboardData.length - 1 ? '1px solid var(--color-border-default)' : 'none',
                    transition: 'background var(--duration-fast) var(--easing-default)',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLLIElement).style.background = 'rgba(255,255,255,0.03)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLLIElement).style.background = 'transparent'; }}
                  aria-label={`#${entry.rank} ${entry.name}: ${entry.pts} ${t.pts}`}
                >
                  {/* Rank */}
                  <span
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      background: entry.medal ? 'transparent' : 'rgba(255,255,255,0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: entry.medal ? '18px' : 'var(--font-size-xs)',
                      fontWeight: 700,
                      color: 'var(--color-text-tertiary)',
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  >
                    {entry.medal ?? `#${lang === 'bn' ? toBanglaNumerals(entry.rank) : entry.rank}`}
                  </span>

                  {/* Avatar */}
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      background: entry.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      fontWeight: 700,
                      color: '#fff',
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  >
                    {entry.name.charAt(0).toUpperCase()}
                  </div>

                  {/* Name */}
                  <span style={{ flex: 1, fontSize: 'var(--font-size-sm)', color: 'var(--color-text-primary)', fontWeight: entry.rank <= 3 ? 600 : 400 }}>
                    {entry.name}
                  </span>

                  {/* Score */}
                  <span
                    style={{
                      fontSize: 'var(--font-size-sm)',
                      fontWeight: 700,
                      color: entry.rank === 1 ? '#f59e0b' : entry.rank === 2 ? '#94a3b8' : entry.rank === 3 ? '#cd7c2f' : 'var(--color-text-tertiary)',
                    }}
                  >
                    {lang === 'bn' ? toBanglaNumerals(entry.pts.toLocaleString('en-US')) : entry.pts.toLocaleString()} <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 400 }}>{t.pts}</span>
                  </span>
                </li>
              ))}
            </ul>

            {/* Join CTA */}
            <div style={{ padding: 'var(--space-3) var(--space-5)', borderTop: '1px solid var(--color-border-default)' }}>
              <a
                href="https://web.prostuti.bd"
                style={{
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--color-surface-strong)',
                  fontWeight: 600,
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 'var(--space-2)',
                  transition: 'opacity var(--duration-fast) var(--easing-default)',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.75'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; }}
                aria-label={lang === 'bn' ? 'লিডারবোর্ডে যোগ দিতে নিবন্ধন করুন' : 'Register to join the leaderboard'}
              >
                {t.joinLeader}
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .testimonials-bottom-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

'use client';

interface HowItWorksProps {
  lang: 'bn' | 'en';
}

const content = {
  bn: {
    badge: 'কীভাবে কাজ করে',
    title: 'শুরু থেকে সাফল্য পর্যন্ত',
    subtitle: 'মাত্র ৪টি ধাপে পরীক্ষার প্রস্তুতি শুরু করুন।',
    steps: [
      {
        num: '০১',
        iconType: 'target',
        title: 'ট্র্যাক বেছে নিন',
        desc: 'HSC, Varsity, Medical, Engineering বা Onushiloni — আপনার পরীক্ষার লক্ষ্য অনুযায়ী ট্র্যাক সিলেক্ট করুন। Mock Test বা Free Practice যেকোনো দিয়ে শুরু করা যায়।',
        color: '#00966d',
        bg: 'rgba(0,150,109,0.1)',
      },
      {
        num: '০২',
        iconType: 'practice',
        title: 'প্র্যাকটিস করুন',
        desc: 'অধ্যায়ভিত্তিক MCQ, বোর্ড প্রশ্নব্যাংক, কলেজ প্রশ্ন, টেস্ট পেপার ও Type Wise CQ — নিজের গতিতে প্র্যাকটিস করুন। প্রতিটি উত্তরে তাৎক্ষণিক ব্যাখ্যা পাবেন।',
        color: '#4d6bff',
        bg: 'rgba(77,107,255,0.1)',
      },
      {
        num: '০৩',
        iconType: 'ai',
        title: 'AI-তে জিজ্ঞেস করুন',
        desc: 'কোনো প্রশ্ন বুঝতে না পারলে Prostuti AI-কে জিজ্ঞেস করুন। বাংলায় সহজ ব্যাখ্যা, ছবি দিয়ে প্রশ্ন করার সুবিধা, এবং আপনার দুর্বল অধ্যায় চিহ্নিতকরণ।',
        color: '#8b5cf6',
        bg: 'rgba(139,92,246,0.1)',
      },
      {
        num: '০৪',
        iconType: 'leaderboard',
        title: 'লিডারবোর্ডে এগিয়ে যান',
        desc: 'Daily Goals পূরণ করে XP অর্জন করুন। সাপ্তাহিক লিডারবোর্ডে সারা বাংলাদেশের শিক্ষার্থীদের সাথে প্রতিযোগিতা করুন এবং নিজের অগ্রগতি ট্র্যাক করুন।',
        color: '#f59e0b',
        bg: 'rgba(245,158,11,0.1)',
      },
    ],
  },
  en: {
    badge: 'How It Works',
    title: 'From Start to Success',
    subtitle: 'Begin your exam preparation in just 4 steps.',
    steps: [
      {
        num: '01',
        iconType: 'target',
        title: 'Choose Your Track',
        desc: 'HSC, Varsity, Medical, Engineering, or Onushiloni — pick the track that matches your goal. Start with Mock Test or Free Practice anytime.',
        color: '#00966d',
        bg: 'rgba(0,150,109,0.1)',
      },
      {
        num: '02',
        iconType: 'practice',
        title: 'Practice Daily',
        desc: 'Chapter MCQs, board question banks, college questions, test papers & Type Wise CQ — practice at your own pace with instant answer explanations.',
        color: '#4d6bff',
        bg: 'rgba(77,107,255,0.1)',
      },
      {
        num: '03',
        iconType: 'ai',
        title: 'Ask Prostuti AI',
        desc: "Can't understand a concept? Ask Prostuti AI in Bengali. Get simple explanations, image-based questions, and personalized weak-chapter identification.",
        color: '#8b5cf6',
        bg: 'rgba(139,92,246,0.1)',
      },
      {
        num: '04',
        iconType: 'leaderboard',
        title: 'Climb the Leaderboard',
        desc: 'Hit your Daily Goals to earn XP. Compete on the weekly leaderboard with students across Bangladesh and track your improvement over time.',
        color: '#f59e0b',
        bg: 'rgba(245,158,11,0.1)',
      },
    ],
  },
};

function renderStepIcon(type: string, color: string) {
  const props = {
    width: 28,
    height: 28,
    stroke: color,
    strokeWidth: 2,
    fill: 'none',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  switch (type) {
    case 'target':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case 'practice':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      );
    case 'ai':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <rect x="3" y="11" width="18" height="10" rx="2" />
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v4" />
          <line x1="8" y1="16" x2="8" y2="16" />
          <line x1="16" y1="16" x2="16" y2="16" />
        </svg>
      );
    case 'leaderboard':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
          <path d="M12 2a7 7 0 0 0-7 7c0 2.22 1.2 4.15 3 5.19l.34.2a2.32 2.32 0 0 0 2.32 0l.34-.2a6.97 6.97 0 0 0 3-5.19C19 4.22 15.78 2 12 2z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function HowItWorks({ lang }: HowItWorksProps) {
  const t = content[lang];

  return (
    <section id="how-it-works" aria-labelledby="hiw-heading" style={{ padding: '110px 0', background: 'rgba(13,18,37,0.6)' }}>
      <div className="container-page">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-7)' }}>
          <span className="badge badge-blue" style={{ marginBottom: 'var(--space-4)' }}>{t.badge}</span>
          <h2 id="hiw-heading" className="section-title" style={{ marginBottom: 'var(--space-3)' }}>{t.title}</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>{t.subtitle}</p>
        </div>

        {/* Steps grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-5)', position: 'relative' }} className="hiw-grid">
          {/* Connector line */}
          <div aria-hidden="true" style={{ position: 'absolute', top: 36, left: '12.5%', right: '12.5%', height: 2, background: 'linear-gradient(90deg, #00966d, #4d6bff, #8b5cf6, #f59e0b)', opacity: 0.25, zIndex: 0 }} className="hiw-connector" />

          {t.steps.map((step, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 1 }}>
              {/* Icon circle */}
              <div style={{ width: 72, height: 72, borderRadius: '50%', background: step.bg, border: `2px solid ${step.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-4)', boxShadow: `0 0 24px ${step.color}20`, flexShrink: 0 }} role="img" aria-label={step.title}>
                {renderStepIcon(step.iconType, step.color)}
              </div>

              {/* Step number */}
              <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 800, color: step.color, letterSpacing: '1px', marginBottom: 'var(--space-2)', fontFamily: 'monospace' }}>
                {step.num}
              </span>

              <h3 style={{ fontSize: 'var(--font-size-h3)', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 'var(--space-2)', lineHeight: 1.3 }}>
                {step.title}
              </h3>
              <p style={{ fontSize: 'var(--font-size-md)', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
                {step.desc}
              </p>

              {/* Responsive connector arrow for vertical stack */}
              {i < 3 && (
                <div
                  className="mobile-step-arrow"
                  style={{
                    display: 'none',
                    position: 'absolute',
                    bottom: '-38px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 0,
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={step.color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
                    <line x1="12" y1="4" x2="12" y2="20"></line>
                    <polyline points="18 14 12 20 6 14"></polyline>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .hiw-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 40px !important; }
          .hiw-connector { display: none !important; }
        }
        @media (max-width: 560px) {
          .hiw-grid { 
            grid-template-columns: 1fr !important; 
            gap: 56px !important;
          }
          .mobile-step-arrow { display: block !important; }
        }
      `}</style>
    </section>
  );
}

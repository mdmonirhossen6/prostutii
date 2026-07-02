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
        icon: '🎯',
        title: 'ট্র্যাক বেছে নিন',
        desc: 'HSC, Varsity, Medical, Engineering বা Onushiloni — আপনার পরীক্ষার লক্ষ্য অনুযায়ী ট্র্যাক সিলেক্ট করুন। Mock Test বা Free Practice যেকোনো দিয়ে শুরু করা যায়।',
        color: '#00966d',
        bg: 'rgba(0,150,109,0.1)',
      },
      {
        num: '০২',
        icon: '📝',
        title: 'প্র্যাকটিস করুন',
        desc: 'অধ্যায়ভিত্তিক MCQ, বোর্ড প্রশ্নব্যাংক, কলেজ প্রশ্ন, টেস্ট পেপার ও Type Wise CQ — নিজের গতিতে প্র্যাকটিস করুন। প্রতিটি উত্তরে তাৎক্ষণিক ব্যাখ্যা পাবেন।',
        color: '#4d6bff',
        bg: 'rgba(77,107,255,0.1)',
      },
      {
        num: '০৩',
        icon: '🤖',
        title: 'AI-তে জিজ্ঞেস করুন',
        desc: 'কোনো প্রশ্ন বুঝতে না পারলে Prostuti AI-কে জিজ্ঞেস করুন। বাংলায় সহজ ব্যাখ্যা, ছবি দিয়ে প্রশ্ন করার সুবিধা, এবং আপনার দুর্বল অধ্যায় চিহ্নিতকরণ।',
        color: '#8b5cf6',
        bg: 'rgba(139,92,246,0.1)',
      },
      {
        num: '০৪',
        icon: '🏆',
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
        icon: '🎯',
        title: 'Choose Your Track',
        desc: 'HSC, Varsity, Medical, Engineering, or Onushiloni — pick the track that matches your goal. Start with Mock Test or Free Practice anytime.',
        color: '#00966d',
        bg: 'rgba(0,150,109,0.1)',
      },
      {
        num: '02',
        icon: '📝',
        title: 'Practice Daily',
        desc: 'Chapter MCQs, board question banks, college questions, test papers & Type Wise CQ — practice at your own pace with instant answer explanations.',
        color: '#4d6bff',
        bg: 'rgba(77,107,255,0.1)',
      },
      {
        num: '03',
        icon: '🤖',
        title: 'Ask Prostuti AI',
        desc: "Can't understand a concept? Ask Prostuti AI in Bengali. Get simple explanations, image-based questions, and personalized weak-chapter identification.",
        color: '#8b5cf6',
        bg: 'rgba(139,92,246,0.1)',
      },
      {
        num: '04',
        icon: '🏆',
        title: 'Climb the Leaderboard',
        desc: 'Hit your Daily Goals to earn XP. Compete on the weekly leaderboard with students across Bangladesh and track your improvement over time.',
        color: '#f59e0b',
        bg: 'rgba(245,158,11,0.1)',
      },
    ],
  },
};

export default function HowItWorks({ lang }: HowItWorksProps) {
  const t = content[lang];

  return (
    <section id="how-it-works" aria-labelledby="hiw-heading" style={{ padding: 'var(--space-8) 0', background: 'rgba(13,18,37,0.6)' }}>
      <div className="container-page">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-7)' }}>
          <span className="badge badge-blue" style={{ marginBottom: '16px' }}>{t.badge}</span>
          <h2 id="hiw-heading" className="section-title" style={{ marginBottom: '14px' }}>{t.title}</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>{t.subtitle}</p>
        </div>

        {/* Steps grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', position: 'relative' }} className="hiw-grid">
          {/* Connector line */}
          <div aria-hidden="true" style={{ position: 'absolute', top: 36, left: '12.5%', right: '12.5%', height: 2, background: 'linear-gradient(90deg, #00966d, #4d6bff, #8b5cf6, #f59e0b)', opacity: 0.25, zIndex: 0 }} className="hiw-connector" />

          {t.steps.map((step, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 1 }}>
              {/* Icon circle */}
              <div style={{ width: 72, height: 72, borderRadius: '50%', background: step.bg, border: `2px solid ${step.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '20px', boxShadow: `0 0 24px ${step.color}20`, flexShrink: 0 }} role="img" aria-label={step.title}>
                {step.icon}
              </div>

              {/* Step number */}
              <span style={{ fontSize: '11px', fontWeight: 800, color: step.color, letterSpacing: '1px', marginBottom: '8px', fontFamily: 'monospace' }}>
                {step.num}
              </span>

              <h3 style={{ fontSize: 'var(--font-size-md)', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '10px', lineHeight: 1.3 }}>
                {step.title}
              </h3>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .hiw-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .hiw-connector { display: none !important; }
        }
        @media (max-width: 560px) {
          .hiw-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

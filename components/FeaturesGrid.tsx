'use client';

interface FeaturesGridProps {
  lang: 'bn' | 'en';
}

const features = {
  bn: {
    sectionBadge: 'বৈশিষ্ট্যসমূহ',
    title: 'যা পাবেন প্রস্তুতিতে',
    subtitle: 'একটি প্ল্যাটফর্মে সব কিছু — প্রশ্ন, মক টেস্ট, AI সহকারী, এবং লিডারবোর্ড।',
    cards: [
      {
        iconType: 'hsc',
        tag: 'HSC',
        title: 'HSC প্রিপারেশন',
        desc: '৬টি বিভাগ: প্রশ্নব্যাংক, কলেজ প্রশ্ন, টেস্ট পেপার, Type Wise CQ, জ্ঞান ও অনুশন্ধান, কমপ্যাক্ট বুক।',
        color: '#00966d',
      },
      {
        iconType: 'mock',
        tag: 'মক',
        title: 'মক টেস্ট',
        desc: '৫ ধরনের মক: HSC, Varsity, Medical, Engineering ও Onushiloni — বোর্ড প্যাটার্নে সময়-নির্ধারিত।',
        color: '#4d6bff',
      },
      {
        iconType: 'admission',
        tag: 'ভর্তি',
        title: 'Admission Hub',
        desc: 'Varsity Admission (Master QB + Mock), Medical Admission এবং Engineering — আলাদা ট্র্যাকে সম্পূর্ণ প্রস্তুতি।',
        color: '#06b6d4',
      },
      {
        iconType: 'engineering',
        tag: 'Engineering',
        title: 'Engineering প্র্যাকটিস',
        desc: 'Master QB, Written QB, Question Bank ও AI-structured Master QB Mock — বুয়েট ও প্রকৌশল বিশ্ববিদ্যালয়ের জন্য।',
        color: '#f97316',
      },
      {
        iconType: 'ai',
        tag: 'AI',
        title: 'Prostuti AI',
        desc: 'চ্যাট-ভিত্তিক AI স্টাডি সহকারী। MCQ ব্যাখ্যা, ছবি বিশ্লেষণ, এবং বাংলায় সহজ ভাষায় উত্তর।',
        color: '#8b5cf6',
      },
      {
        iconType: 'practice',
        tag: 'অনুশীলনী',
        title: 'অনুশীলনী (Chapter Practice)',
        desc: 'অধ্যায়ভিত্তিক পদার্থ, রসায়ন, জীববিজ্ঞান — পেপার ১ ও পেপার ২ আলাদাভাবে। ফলাফল চার্টে দেখুন।',
        color: '#00966d',
      },
      {
        iconType: 'free',
        tag: 'ফ্রি',
        title: 'ফ্রি প্র্যাকটিস',
        desc: 'HSC, Engineering, Varsity ও Medical — চার ট্র্যাকে বিনামূল্যে MCQ। কোনো অ্যাকাউন্ট ছাড়াও চেষ্টা করুন।',
        color: '#f59e0b',
      },
      {
        iconType: 'goals',
        tag: 'গেমিফিকেশন',
        title: 'Daily Goals & XP',
        desc: 'Easy/Medium/Hard ডিফিকাল্টি বেছে নিন। প্রতিদিনের লক্ষ্য পূরণ করে XP অর্জন করুন।',
        color: '#f59e0b',
      },
      {
        iconType: 'leaderboard',
        tag: 'লাইভ',
        title: 'সাপ্তাহিক লিডারবোর্ড',
        desc: 'সারা বাংলাদেশের শিক্ষার্থীদের সাথে প্রতিযোগিতা। সাপ্তাহিক XP র‍্যাংকিং লাইভ আপডেট।',
        color: '#eab308',
      },
    ],
  },
  en: {
    sectionBadge: 'Features',
    title: 'Everything Inside Prostuti',
    subtitle: 'One platform — MCQ practice, mock tests, AI tutor, admission prep, and live leaderboard.',
    cards: [
      {
        iconType: 'hsc',
        tag: 'HSC',
        title: 'HSC Preparation',
        desc: '6 sections: Question Bank, College Questions, Test Paper, Type Wise CQ, Knowledge & Research, and Compact Book.',
        color: '#00966d',
      },
      {
        iconType: 'mock',
        tag: 'Mock',
        title: 'Mock Test',
        desc: '5 types: HSC, Varsity, Medical, Engineering & Onushiloni — timed, board-pattern full mock exams.',
        color: '#4d6bff',
      },
      {
        iconType: 'admission',
        tag: 'Admission',
        title: 'Admission Hub',
        desc: 'Varsity Admission (Master QB + Mock), Medical Admission, and Engineering tracks — complete prep for each.',
        color: '#06b6d4',
      },
      {
        iconType: 'engineering',
        tag: 'Engineering',
        title: 'Engineering Practice',
        desc: 'Master QB, Written QB, Question Bank & AI-structured Master QB Mock — tailored for BUET & engineering universities.',
        color: '#f97316',
      },
      {
        iconType: 'ai',
        tag: 'AI',
        title: 'Prostuti AI',
        desc: 'Chat-based AI study assistant. Ask any question, get MCQ explanations, image analysis, and answers in Bengali.',
        color: '#8b5cf6',
      },
      {
        iconType: 'practice',
        tag: 'Practice',
        title: 'Chapter Practice (Onushiloni)',
        desc: 'Physics, Chemistry, Biology by chapter — practice Paper 1 & 2 separately. Track results in per-subject charts.',
        color: '#00966d',
      },
      {
        iconType: 'free',
        tag: 'Free',
        title: 'Free Practice',
        desc: 'HSC, Engineering, Varsity & Medical tracks available free. No account required to try.',
        color: '#f59e0b',
      },
      {
        iconType: 'goals',
        tag: 'Goals',
        title: 'Daily Goals & XP',
        desc: 'Choose Easy/Medium/Hard difficulty. Complete daily targets and earn XP to climb the leaderboard.',
        color: '#f59e0b',
      },
      {
        iconType: 'leaderboard',
        tag: 'Live',
        title: 'Weekly Leaderboard',
        desc: 'Compete with students across Bangladesh. Live weekly XP rankings updated in real time.',
        color: '#eab308',
      },
    ],
  },
};

const tagColorMap: Record<string, string> = {
  HSC: 'badge-green', Mock: 'badge-blue', মক: 'badge-blue',
  Admission: 'badge-blue', ভর্তি: 'badge-blue',
  Engineering: 'badge-blue',
  AI: 'badge-recommended',
  Practice: 'badge-green', অনুশীলনী: 'badge-green',
  Free: 'badge-recommended', ফ্রি: 'badge-recommended',
  Goals: 'badge-recommended', গেমিফিকেশন: 'badge-recommended',
  Live: 'badge-green', লাইভ: 'badge-green',
};

function renderFeatureIcon(type: string, color: string) {
  const props = {
    width: 24,
    height: 24,
    stroke: color,
    strokeWidth: 2,
    fill: 'none',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  switch (type) {
    case 'hsc':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
        </svg>
      );
    case 'mock':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <path d="M9 12h6M9 16h6" />
        </svg>
      );
    case 'admission':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <line x1="3" y1="22" x2="21" y2="22" />
          <line x1="6" y1="18" x2="6" y2="11" />
          <line x1="10" y1="18" x2="10" y2="11" />
          <line x1="14" y1="18" x2="14" y2="11" />
          <line x1="18" y1="18" x2="18" y2="11" />
          <path d="M12 2L2 7h20L12 2z" />
          <path d="M2 18h20" />
        </svg>
      );
    case 'engineering':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.5 1z" />
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
    case 'practice':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      );
    case 'free':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case 'goals':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
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

export default function FeaturesGrid({ lang }: FeaturesGridProps) {
  const t = features[lang];

  return (
    <section id="question-bank" aria-labelledby="features-heading" style={{ padding: 'var(--space-8) 0' }}>
      <div className="container-page">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-7)' }}>
          <span className="badge badge-green" style={{ marginBottom: 'var(--space-4)' }}>{t.sectionBadge}</span>
          <h2 id="features-heading" className="section-title" style={{ marginBottom: 'var(--space-3)' }}>{t.title}</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>{t.subtitle}</p>
        </div>

        <ul role="list" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-4)', listStyle: 'none' }} className="features-grid">
          {t.cards.map((card, i) => (
            <li key={i}>
              <article className="card-base" style={{ padding: 'var(--space-5)', height: '100%', cursor: 'default' }} aria-label={card.title}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 'var(--space-3)' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-xs)', background: `${card.color}18`, border: `1px solid ${card.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }} role="img" aria-label={card.title}>
                    {renderFeatureIcon(card.iconType, card.color)}
                  </div>
                  <span className={`badge ${tagColorMap[card.tag] || 'badge-blue'}`}>{card.tag}</span>
                </div>
                <h3 style={{ fontSize: 'var(--font-size-h3)', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 'var(--space-2)', lineHeight: 1.3 }}>{card.title}</h3>
                <p style={{ fontSize: 'var(--font-size-md)', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>{card.desc}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        @media (max-width: 900px) { .features-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) { .features-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

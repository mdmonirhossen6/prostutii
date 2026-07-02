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
        icon: '🏫',
        tag: 'HSC',
        title: 'HSC প্রিপারেশন',
        desc: '৬টি বিভাগ: প্রশ্নব্যাংক, কলেজ প্রশ্ন, টেস্ট পেপার, Type Wise CQ, জ্ঞান ও অনুশন্ধান, কমপ্যাক্ট বুক।',
        color: '#00966d',
      },
      {
        icon: '📋',
        tag: 'মক',
        title: 'মক টেস্ট',
        desc: '৫ ধরনের মক: HSC, Varsity, Medical, Engineering ও Onushiloni — বোর্ড প্যাটার্নে সময়-নির্ধারিত।',
        color: '#4d6bff',
      },
      {
        icon: '🏛️',
        tag: 'ভর্তি',
        title: 'Admission Hub',
        desc: 'Varsity Admission (Master QB + Mock), Medical Admission এবং Engineering — আলাদা ট্র্যাকে সম্পূর্ণ প্রস্তুতি।',
        color: '#06b6d4',
      },
      {
        icon: '⚙️',
        tag: 'Engineering',
        title: 'Engineering প্র্যাকটিস',
        desc: 'Master QB, Written QB, Question Bank ও AI-structured Master QB Mock — বুয়েট ও প্রকৌশল বিশ্ববিদ্যালয়ের জন্য।',
        color: '#f97316',
      },
      {
        icon: '🤖',
        tag: 'AI',
        title: 'Prostuti AI',
        desc: 'চ্যাট-ভিত্তিক AI স্টাডি সহকারী। MCQ ব্যাখ্যা, ছবি বিশ্লেষণ, এবং বাংলায় সহজ ভাষায় উত্তর।',
        color: '#8b5cf6',
      },
      {
        icon: '📝',
        tag: 'অনুশীলনী',
        title: 'অনুশীলনী (Chapter Practice)',
        desc: 'অধ্যায়ভিত্তিক পদার্থ, রসায়ন, জীববিজ্ঞান — পেপার ১ ও পেপার ২ আলাদাভাবে। ফলাফল চার্টে দেখুন।',
        color: '#00966d',
      },
      {
        icon: '⚡',
        tag: 'ফ্রি',
        title: 'ফ্রি প্র্যাকটিস',
        desc: 'HSC, Engineering, Varsity ও Medical — চার ট্র্যাকে বিনামূল্যে MCQ। কোনো অ্যাকাউন্ট ছাড়াও চেষ্টা করুন।',
        color: '#f59e0b',
      },
      {
        icon: '🎯',
        tag: 'গেমিফিকেশন',
        title: 'Daily Goals & XP',
        desc: 'Easy/Medium/Hard ডিফিকাল্টি বেছে নিন। প্রতিদিনের লক্ষ্য পূরণ করে XP অর্জন করুন।',
        color: '#f59e0b',
      },
      {
        icon: '🏆',
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
        icon: '🏫',
        tag: 'HSC',
        title: 'HSC Preparation',
        desc: '6 sections: Question Bank, College Questions, Test Paper, Type Wise CQ, Knowledge & Research, and Compact Book.',
        color: '#00966d',
      },
      {
        icon: '📋',
        tag: 'Mock',
        title: 'Mock Test',
        desc: '5 types: HSC, Varsity, Medical, Engineering & Onushiloni — timed, board-pattern full mock exams.',
        color: '#4d6bff',
      },
      {
        icon: '🏛️',
        tag: 'Admission',
        title: 'Admission Hub',
        desc: 'Varsity Admission (Master QB + Mock), Medical Admission, and Engineering tracks — complete prep for each.',
        color: '#06b6d4',
      },
      {
        icon: '⚙️',
        tag: 'Engineering',
        title: 'Engineering Practice',
        desc: 'Master QB, Written QB, Question Bank & AI-structured Master QB Mock — tailored for BUET & engineering universities.',
        color: '#f97316',
      },
      {
        icon: '🤖',
        tag: 'AI',
        title: 'Prostuti AI',
        desc: 'Chat-based AI study assistant. Ask any question, get MCQ explanations, image analysis, and answers in Bengali.',
        color: '#8b5cf6',
      },
      {
        icon: '📝',
        tag: 'Practice',
        title: 'Chapter Practice (অনুশীলনী)',
        desc: 'Physics, Chemistry, Biology by chapter — practice Paper 1 & 2 separately. Track results in per-subject charts.',
        color: '#00966d',
      },
      {
        icon: '⚡',
        tag: 'Free',
        title: 'Free Practice',
        desc: 'HSC, Engineering, Varsity & Medical tracks available free. No account required to try.',
        color: '#f59e0b',
      },
      {
        icon: '🎯',
        tag: 'Goals',
        title: 'Daily Goals & XP',
        desc: 'Choose Easy/Medium/Hard difficulty. Complete daily targets and earn XP to climb the leaderboard.',
        color: '#f59e0b',
      },
      {
        icon: '🏆',
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

export default function FeaturesGrid({ lang }: FeaturesGridProps) {
  const t = features[lang];

  return (
    <section id="question-bank" aria-labelledby="features-heading" style={{ padding: 'var(--space-8) 0' }}>
      <div className="container-page">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-7)' }}>
          <span className="badge badge-green" style={{ marginBottom: '16px' }}>{t.sectionBadge}</span>
          <h2 id="features-heading" className="section-title" style={{ marginBottom: '14px' }}>{t.title}</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>{t.subtitle}</p>
        </div>

        <ul role="list" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', listStyle: 'none' }} className="features-grid">
          {t.cards.map((card, i) => (
            <li key={i}>
              <article className="card-base" style={{ padding: 'var(--space-5)', height: '100%', cursor: 'default' }} aria-label={card.title}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-xs)', background: `${card.color}18`, border: `1px solid ${card.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }} role="img" aria-label={card.title}>
                    {card.icon}
                  </div>
                  <span className={`badge ${tagColorMap[card.tag] || 'badge-blue'}`}>{card.tag}</span>
                </div>
                <h3 style={{ fontSize: 'var(--font-size-md)', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '8px', lineHeight: 1.3 }}>{card.title}</h3>
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>{card.desc}</p>
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

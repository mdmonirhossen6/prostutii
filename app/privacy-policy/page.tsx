'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { usePersistentLang } from '@/hooks/usePersistentLang';

const copy = {
  bn: {
    title: 'প্রাইভেসি পলিসি',
    sections: [
      {
        heading: '১. তথ্য সংগ্রহ',
        body: 'আপনার অভিজ্ঞতা ব্যক্তিগতকৃত করতে এবং একটি সুনির্দিষ্ট শেখার পরিবেশ দিতে আমরা কিছু প্রাথমিক প্রোফাইল তথ্য সংগ্রহ করি।',
        bullets: [
          'পরিচয়ের তথ্য: নিবন্ধনের সময় ব্যবহৃত নাম এবং ইমেইল ঠিকানা।',
          'সিস্টেম আইডেন্টিফায়ার: আপনার বিভিন্ন ডিভাইসে নির্ভরযোগ্য অ্যাকাউন্ট সিঙ্ক রাখতে ডিভাইস আইডি।',
        ],
      },
      {
        heading: '২. ব্যবহার ও তথ্য প্রসেসিং',
        body: 'আপনার তথ্য কেবলমাত্র অ্যাপ্লিকেশনের অভ্যন্তরীণ ফিচার পরিচালনার জন্য ব্যবহৃত হয়। আমরা আপনার ব্যক্তিগত তথ্য তৃতীয় পক্ষের কাছে বিক্রি করি না।',
        bullets: [
          'অগ্রগতি ট্র্যাকিং: আপনার কোর্সওয়ার্ক ইতিহাস ও অর্জন সংরক্ষণ।',
          'গেমিফিকেশন: আঞ্চলিক লিডারবোর্ডে নিরাপদ অবস্থান ব্যবস্থাপনা।',
          'অ্যাকাউন্ট নিরাপত্তা: সিস্টেমের সততা নিশ্চিতকরণ ও ডুপ্লিকেট অপব্যবহার প্রতিরোধ।',
        ],
      },
      {
        heading: '৩. তথ্য নিরাপত্তা',
        body: 'Firebase নিরাপত্তা পরিবেশের মাধ্যমে ট্রানজিট ও স্টোরেজ উভয় ক্ষেত্রেই উচ্চমানের এনক্রিপশন ব্যবহার করে আমরা আপনার ব্যক্তিগত তথ্য নিরাপদ রাখতে শিল্প-মানের পদক্ষেপ গ্রহণ করি।',
        bullets: [],
      },
      {
        heading: '৪. তৃতীয় পক্ষের সেবা',
        body: 'স্কেলেবল অ্যাপ্লিকেশন পারফরম্যান্স, নিরাপদ মিডিয়া বিতরণ এবং দক্ষ কম্পিউটিং নিশ্চিত করতে আমাদের অবকাঠামো বেশ কয়েকটি নিরাপত্তা-কেন্দ্রিক বহিরাগত পার্টনারের ওপর নির্ভর করে:',
        bullets: [
          'অ্যাসেট ক্যাশিং এবং নিরাপদ অপ্টিমাইজড বিতরণের জন্য Cloudflare R2।',
          'ডেটাবেস ব্যবস্থাপনা ও নিরাপদ ইউজার অথেন্টিকেশনের জন্য Supabase এবং Firebase।',
          'রিয়েল-টাইম ইন্টারঅ্যাকটিভ ফিডব্যাক দিতে নির্বাচিত AI API।',
        ],
      },
    ],
    questionsHeading: 'প্রশ্ন আছে?',
    questionsBody: 'এই শর্তাবলী সম্পর্কে কোনো বিষয়ে জানতে চাইলে আমাদের সাপোর্ট টিমের সাথে যোগাযোগ করুন:',
  },
  en: {
    title: 'Privacy Policy',
    sections: [
      {
        heading: '1. Data Collection',
        body: 'We collect basic profile details to customize your interactions and provide a personalized learning experience.',
        bullets: [
          'Identity details: Name and email address used during registration.',
          'System identifiers: Device ID to support reliable account sync across your devices.',
        ],
      },
      {
        heading: '2. Usage & Data Processing',
        body: 'Your data is strictly utilized to operate internal application features. We do not sell your personal data to third parties.',
        bullets: [
          'Progress Tracking: Maintaining your coursework history and achievements.',
          'Gamification: Managing secure placements on regional leaderboards.',
          'Account Security: Ensuring system integrity and preventing duplicate abuse.',
        ],
      },
      {
        heading: '3. Data Security',
        body: 'We implement industry-standard practices to help keep your personal information secure, utilizing high-grade encryption systems during transit and at rest via Firebase security environments.',
        bullets: [],
      },
      {
        heading: '4. Third-Party Services',
        body: 'To support scalable application performance, safe media distribution, and efficient computing, our application infrastructure relies on several security-focused external partners:',
        bullets: [
          'Cloudflare R2 for asset caching and secure, optimized distribution.',
          'Supabase and Firebase for database management and secure user authentication.',
          'Select AI APIs to provide real-time interactive training feedback.',
        ],
      },
    ],
    questionsHeading: 'Have questions?',
    questionsBody: 'If you need clarification regarding any of these terms, please connect with our support team at',
  },
};

export default function PrivacyPolicyPage() {
  const [lang, setLang] = usePersistentLang('bn');
  const t = copy[lang];

  return (
    <>
      <Navbar lang={lang} onLangChange={setLang} />

      <main style={{ paddingTop: '100px', minHeight: '80vh', background: 'var(--color-surface-bg)' }}>
        <div className="container-page">
          <h1 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '32px' }}>
            {t.title}
          </h1>
          <div style={{ background: '#1c2230', border: '1px solid var(--color-overlay-5)', borderRadius: 'var(--radius-md)', padding: '32px', maxWidth: '800px' }}>
            {t.sections.map((section, idx) => (
              <div key={idx} style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '12px' }}>
                  {section.heading}
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: section.bullets.length ? '12px' : 0 }}>
                  {section.body}
                </p>
                {section.bullets.length > 0 && (
                  <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {section.bullets.map((bullet, bidx) => (
                      <li key={bidx} style={{ fontSize: '15px', color: 'var(--color-text-secondary)', display: 'flex', gap: '8px' }}>
                        <span style={{ color: 'var(--color-text-inverse)' }}>•</span> {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div style={{ borderTop: '1px solid var(--color-overlay-10)', paddingTop: '24px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '8px' }}>
                {t.questionsHeading}
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--color-text-inverse)' }}>
                {t.questionsBody}{' '}
                <a href="mailto:prostutibdapp@gmail.com" style={{ color: '#4d6bff', textDecoration: 'none' }}>
                  prostutibdapp@gmail.com
                </a>.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer lang={lang} onLangChange={setLang} />
    </>
  );
}

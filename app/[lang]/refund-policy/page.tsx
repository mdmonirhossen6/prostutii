'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { usePersistentLang } from '@/hooks/usePersistentLang';

const copy = {
  bn: {
    title: 'রিফান্ড পলিসি',
    sections: [
      {
        heading: '১. প্রিমিয়াম অ্যাক্সেস শর্তাবলী',
        body: 'প্রিমিয়াম ফিচার, স্বতন্ত্র কোর্স বা সাবস্ক্রিপশন সেবা সংক্রান্ত সকল লেনদেন চূড়ান্ত। আপনার প্রিমিয়াম অ্যাক্সেস শুরু হওয়ার পর সাধারণত পেমেন্ট চার্জ রিফান্ডযোগ্য নয়।',
        bullets: [],
      },
      {
        heading: '২. অ্যাক্টিভেশন যাচাইয়ের সমস্যা',
        body: 'লেনদেন সম্পন্ন হওয়ার পরও যদি আপনার প্রিমিয়াম অ্যাকাউন্ট স্ট্যাটাস স্বয়ংক্রিয়ভাবে আনলক না হয়, তবে আমরা ম্যানুয়ালি আপনার প্ল্যান অ্যাক্টিভেট করতে পারি — সে জন্য সাপোর্টে যোগাযোগ করুন:',
        bullets: [
          'আপনার ইমেইল ঠিকানা এবং রসিদ থেকে ট্রানজেকশন আইডি প্রদান করুন।',
          'আমাদের যাচাইকৃত হোয়াটসঅ্যাপ বা টেলিগ্রাম চ্যানেলের মাধ্যমে সরাসরি সাপোর্ট ডেস্কে যোগাযোগ করুন।',
        ],
      },
      {
        heading: '৩. ট্রায়াল সুবিধা',
        body: 'যেকোনো আর্থিক প্রতিশ্রুতি দেওয়ার আগে আমরা ব্যবহারকারীদের আমাদের ফ্রি ফিচার বা ট্রায়াল টিয়ার ব্যবহার করতে জোরালো ভাবে সুপারিশ করি। এতে নিশ্চিত হবেন যে আমাদের অ্যাপ ও উপাদান আপনার শেখার প্রত্যাশা পূরণ করে।',
        bullets: [],
      },
      {
        heading: '৪. বিশেষ ক্ষেত্রে সমন্বয়',
        body: 'নীতি কঠোর থাকলেও, বিশেষ পরিস্থিতিতে প্রশাসন কর্তৃক ব্যতিক্রম বিবেচনা করা হতে পারে:',
        bullets: [
          'স্থানীয় পেমেন্ট প্রোভাইডার সমস্যার কারণে দ্বৈত-বিলিং ত্রুটি।',
          'ক্রয়-পরবর্তী সময়ে অ্যাক্সেস সক্রিয়ভাবে সীমাবদ্ধ করে এমন দীর্ঘায়িত প্রযুক্তিগত সিস্টেম বিভ্রাট।',
        ],
      },
    ],
    questionsHeading: 'প্রশ্ন আছে?',
    questionsBody: 'এই শর্তাবলী সম্পর্কে কোনো বিষয়ে জানতে চাইলে আমাদের সাপোর্ট টিমের সাথে যোগাযোগ করুন:',
  },
  en: {
    title: 'Refund Policy',
    sections: [
      {
        heading: '1. Premium Access Terms',
        body: 'All transactions involving premium features, individual courses, or subscription services are considered final. Payment charges are generally non-refundable once your premium access is initialized.',
        bullets: [],
      },
      {
        heading: '2. Activation Verification Issues',
        body: 'If a processed payment fails to unlock your premium account status automatically, please contact support so we can manually activate your plan:',
        bullets: [
          'Provide your email address and transaction ID from your receipt.',
          'Contact our support desk directly via our verified WhatsApp or Telegram channels.',
        ],
      },
      {
        heading: '3. Trial Availability',
        body: 'We highly recommend that users take advantage of our free features or trial tiers prior to making any financial commitments. This ensures our app and material meet your learning expectations.',
        bullets: [],
      },
      {
        heading: '4. Exceptional Adjustments',
        body: 'While policies remain strict, exceptions may be reviewed by administration under specialized circumstances:',
        bullets: [
          'Double-billing errors resulting from localized payment provider issues.',
          'Extended technical system outages that actively restrict access immediately post-purchase.',
        ],
      },
    ],
    questionsHeading: 'Have questions?',
    questionsBody: 'If you need clarification regarding any of these terms, please connect with our support team at',
  },
};

export default function RefundPolicyPage() {
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
              <div key={idx} style={{ marginBottom: idx === t.sections.length - 1 ? '32px' : '24px' }}>
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

'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { usePersistentLang } from '@/hooks/usePersistentLang';

const copy = {
  bn: {
    title: 'কুকি নীতি',
    intro: 'প্রস্তুতি আমাদের সেবায় কার্যকলাপ ট্র্যাক করতে এবং নির্দিষ্ট তথ্য সংরক্ষণ করতে কুকি ও অনুরূপ ট্র্যাকিং প্রযুক্তি ব্যবহার করে।',
    sections: [
      {
        heading: 'অপরিহার্য কুকি',
        body: 'এই কুকিগুলো ওয়েবসাইট চালু রাখার জন্য অপরিহার্য এবং আমাদের সিস্টেমে বন্ধ করা যায় না। সাধারণত এগুলো কেবল আপনার প্রাইভেসি পছন্দ নির্ধারণ, লগইন করা বা ফর্ম পূরণের মতো সেবার অনুরোধমূলক কাজের প্রতিক্রিয়ায় সেট হয়।',
      },
      {
        heading: 'অ্যানালিটিক্স কুকি',
        body: 'ইউজার অভিজ্ঞতা উন্নত করতে দর্শকরা কীভাবে আমাদের প্ল্যাটফর্মের সাথে ইন্টারঅ্যাক্ট করে তা বুঝতে আমরা এগুলো ব্যবহার করি। এই কুকিগুলো সংগৃহীত সকল তথ্য সমষ্টিগত এবং সেই কারণে বেনামী।',
      },
    ],
    closing: 'আপনি আপনার ব্রাউজারকে সকল কুকি প্রত্যাখ্যান করতে বা কুকি পাঠানোর সময় নির্দেশ দিতে বলতে পারেন। তবে, আপনি যদি কুকি গ্রহণ না করেন, তবে আমাদের সেবার কিছু অংশ ব্যবহার করতে নাও পারতে পারেন।',
  },
  en: {
    title: 'Cookie Policy',
    intro: 'Prostuti uses cookies and similar tracking technologies to track activity on our service and hold certain information.',
    sections: [
      {
        heading: 'Essential Cookies',
        body: 'These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.',
      },
      {
        heading: 'Analytics Cookies',
        body: 'We use these to understand how visitors interact with our platform to improve user experience. All information these cookies collect is aggregated and therefore anonymous.',
      },
    ],
    closing: 'You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.',
  },
};

export default function CookiePolicyPage() {
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
            <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
              {t.intro}
            </p>

            {t.sections.map((section, idx) => (
              <div key={idx} style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '12px' }}>
                  {section.heading}
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  {section.body}
                </p>
              </div>
            ))}

            <div style={{ borderTop: '1px solid var(--color-overlay-10)', paddingTop: '24px' }}>
              <p style={{ fontSize: '15px', color: 'var(--color-text-inverse)' }}>
                {t.closing}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer lang={lang} onLangChange={setLang} />
    </>
  );
}

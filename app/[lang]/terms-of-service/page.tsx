'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { usePersistentLang } from '@/hooks/usePersistentLang';

const copy = {
  bn: {
    title: 'সেবার শর্তাবলী',
    intro: 'প্রস্তুতিতে স্বাগতম! আমাদের প্ল্যাটফর্ম ব্যবহার করার মাধ্যমে আপনি নিচের ব্যবহারের শর্তাবলী মেনে চলতে এবং আবদ্ধ হতে সম্মত হচ্ছেন।',
    sections: [
      {
        heading: '১. ব্যবহারের সীমাবদ্ধতা',
        body: 'আমাদের লিখিত অনুমতি ছাড়া সেবার কোনো অংশ, সেবার ব্যবহার, বা সেবায় প্রবেশাধিকার পুনরুৎপাদন, নকল, কপি, বিক্রি, পুনরায় বিক্রি বা শোষণ করতে নয় এই মর্মে আপনি সম্মত হন। প্রদত্ত কন্টেন্ট কেবলমাত্র ব্যক্তিগত শিক্ষামূলক ব্যবহারের জন্য।',
      },
      {
        heading: '২. অ্যাকাউন্ট দায়িত্ব',
        body: 'আপনার অ্যাকাউন্ট ও পাসওয়ার্ডের নিরাপত্তা বজায় রাখার দায়িত্ব আপনার। এই নিরাপত্তা বাধ্যবাধকতা মানতে ব্যর্থ হওয়ার ফলে যেকোনো ক্ষতি বা ক্ষয়ক্ষতির জন্য প্রস্তুতি দায়ী থাকবে না। অ্যাকাউন্ট শেয়ার করা সম্পূর্ণ নিষিদ্ধ।',
      },
    ],
    contactBody: 'বিস্তারিত জিজ্ঞাসার জন্য যোগাযোগ করুন:',
  },
  en: {
    title: 'Terms of Service',
    intro: 'Welcome to Prostuti! By using our platform, you agree to comply with and be bound by the following terms of use.',
    sections: [
      {
        heading: '1. Usage Restrictions',
        body: 'You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service without express written permission by us. Content provided is strictly for personal educational use.',
      },
      {
        heading: '2. Account Responsibilities',
        body: 'You are responsible for maintaining the security of your account and password. Prostuti cannot and will not be liable for any loss or damage from your failure to comply with this security obligation. Account sharing is strictly prohibited.',
      },
    ],
    contactBody: 'For detailed queries, contact us at',
  },
};

export default function TermsPage() {
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
                {t.contactBody}{' '}
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

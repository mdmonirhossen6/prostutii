'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

const copy = {
  bn: {
    badge: 'প্রেস ও মিডিয়া',
    title: 'মিডিয়া কিট ও তথ্য',
    subtitle: 'প্রস্তুতির লোগো, ব্র্যান্ড গাইডলাইন এবং সংবাদ প্রকাশের জন্য প্রয়োজনীয় তথ্যসমূহ ডাউনলোড ও ব্যবহারের জন্য এখানে রয়েছে।',
    boilerplateTitle: 'আমাদের পরিচিতি (Boilerplate)',
    boilerplateDesc: 'প্রস্তুতি (Prostuti) বাংলাদেশের শিক্ষার্থীদের জন্য একটি আধুনিক, প্রযুক্তি-ভিত্তিক পরীক্ষা প্রস্তুতি প্ল্যাটফর্ম। HSC, SSC এবং বিশ্ববিদ্যালয় ভর্তি ইচ্ছুকদের জন্য আমরা বিজ্ঞানসম্মত প্রশ্নব্যাংক, দুর্বলতা বিশ্লেষণ এবং গেমিফাইড লিডারবোর্ডের মাধ্যমে পড়াশোনাকে সহজ, আনন্দদায়ক ও ফলপ্রসূ করে তুলছি।',
    downloadTitle: 'মিডিয়া কিট ডাউনলোড করুন',
    downloadDesc: 'আমাদের অফিশিয়াল ব্র্যান্ড লোগো (PNG, SVG) এবং কালার প্যালেট গাইডলাইন একসঙ্গে ডাউনলোড করুন।',
    downloadBtn: 'লোগো প্যাক ডাউনলোড করুন (.zip)',
    contactTitle: 'মিডিয়া যোগাযোগ',
    contactDesc: 'সাংবাদিক বা কনটেন্ট ক্রিয়েটর? আমাদের সাথে যেকোনো সাক্ষাৎকার, প্রেস রিলিজ বা তথ্য অনুসন্ধানের জন্য সরাসরি যোগাযোগ করুন।',
    contactMail: 'prostutibdapp@gmail.com'
  },
  en: {
    badge: 'Press & Media',
    title: 'Media Kit & Info',
    subtitle: 'Find official logos, brand assets, and statements for publications and media coverage.',
    boilerplateTitle: 'Who We Are (Boilerplate)',
    boilerplateDesc: 'Prostuti is a modern, tech-enabled test prep platform for students in Bangladesh. Supporting HSC, SSC, and Varsity Admission tracks, we utilize high-fidelity question banks, weakness analytics, and gamified mechanics to make exam preparation accurate, affordable, and engaging.',
    downloadTitle: 'Download Media Kit',
    downloadDesc: 'Download our official brand logo assets (PNG, SVG format) and the color palette guidelines in one package.',
    downloadBtn: 'Download Logo Pack (.zip)',
    contactTitle: 'Media Relations',
    contactDesc: 'Journalist or Content Creator? Reach out to us directly for interview requests, press releases, or inquiries.',
    contactMail: 'prostutibdapp@gmail.com'
  }
};

export default function PressPage() {
  const [lang, setLang] = useState<'bn' | 'en'>('bn');
  const t = copy[lang];

  return (
    <>
      <Navbar lang={lang} onLangChange={setLang} />
      
      <main style={{ paddingTop: '120px', paddingBottom: '80px', background: 'var(--color-surface-base)', minHeight: '100vh' }}>
        <div className="container-page" style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
          
          {/* Header */}
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <span className="badge badge-green" style={{ marginBottom: '16px' }}>{t.badge}</span>
            <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '24px' }}>
              {t.title}
            </h1>
            <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
              {t.subtitle}
            </p>
          </div>

          {/* Boilerplate Section */}
          <section id="boilerplate" style={{ padding: 0 }}>
            <div style={{ background: 'var(--color-surface-card)', border: '1px solid var(--color-border-default)', borderRadius: '8px', padding: '32px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '16px' }}>
                {t.boilerplateTitle}
              </h2>
              <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.7, margin: 0 }}>
                {t.boilerplateDesc}
              </p>
            </div>
          </section>

          {/* Media Kit Download */}
          <section id="download" style={{ padding: 0 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '40px', alignItems: 'center' }} className="press-download-grid">
              <div>
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '12px' }}>
                  {t.downloadTitle}
                </h2>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {t.downloadDesc}
                </p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <a 
                  href="https://pub-e2c71a91f86f428982fe1b1f721d68b9.r2.dev/image/host/02-07-2026/prostuti/img_1782975909440.png"
                  download
                  style={{
                    display: 'inline-block',
                    background: 'var(--color-surface-strong)',
                    color: '#000',
                    fontWeight: 700,
                    fontSize: '13px',
                    padding: '12px 24px',
                    borderRadius: '24px',
                    textDecoration: 'none',
                    transition: 'opacity 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                  📥 {t.downloadBtn}
                </a>
              </div>
            </div>
          </section>

          {/* Media Contact Card */}
          <section id="contact" style={{ padding: 0 }}>
            <div style={{ background: 'var(--color-surface-card)', border: '1px solid var(--color-border-default)', borderRadius: '8px', padding: '32px', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '12px' }}>
                {t.contactTitle}
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                {t.contactDesc}
              </p>
              <a 
                href={`mailto:${t.contactMail}`}
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: 'var(--color-surface-strong)',
                  textDecoration: 'none',
                  borderBottom: '2px solid var(--color-surface-strong)',
                  paddingBottom: '2px',
                  transition: 'opacity 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                {t.contactMail}
              </a>
            </div>
          </section>

          {/* 
              FUTURE PRESS INSERTION POINT:
              Add news clippings or press release links in the section below.
              Do not add fake mentions. Render cards only when verified coverage exists.
          */}
          {/*
          <section id="press-mentions" style={{ padding: 0 }}>
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-text-primary)', textAlign: 'center', marginBottom: '24px' }}>
              In the News
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              // Insert verified articles here
            </div>
          </section>
          */}

        </div>
      </main>

      <Footer lang={lang} onLangChange={setLang} />

      <style jsx>{`
        @media (max-width: 768px) {
          .press-download-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            text-align: center !important;
          }
        }
      `}</style>
    </>
  );
}

'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { usePersistentLang } from '@/hooks/usePersistentLang';

const copy = {
  bn: {
    badge: 'ক্যারিয়ার',
    title: 'আমাদের সাথে কাজ করুন',
    subtitle: 'আমরা বাংলাদেশের শিক্ষাব্যবস্থাকে আরও আধুনিক ও সবার জন্য সহজলভ্য করতে একটি দক্ষ টিম তৈরি করছি।',
    perksTitle: 'সুবিধাসমূহ ও সংস্কৃতি',
    perks: [
      { icon: '🏠', title: 'সম্পূর্ণ রিমোট ওয়ার্ক', desc: 'আপনার সুবিধাজনক স্থান থেকে স্বাধীনভাবে কাজ করুন।' },
      { icon: '🏥', title: 'স্বাস্থ্য ভাতা', desc: 'আমাদের সকল টিম মেম্বারদের জন্য বার্ষিক চিকিৎসা ও স্বাস্থ্য বীমা সুবিধা।' },
      { icon: '📈', title: 'লার্নিং ও গ্রোথ বাজেট', desc: 'নতুন স্কিল শেখা বা কোর্সের জন্য প্রতি বছর বার্ষিক বাজেট সুবিধা।' }
    ],
    jobsTitle: 'উন্মুক্ত পদসমূহ',
    applyBtn: 'আবেদন করুন',
    postedLabel: 'পোস্ট করা হয়েছে:',
    remoteLabel: 'সম্পূর্ণ রিমোট',
    jobs: [
      {
        id: 'curriculum-dev',
        title: 'Curriculum Developer (Physics / Chemistry)',
        desc: 'HSC ও এডমিশন লেভেলের পদার্থবিজ্ঞান ও রসায়নের প্রশ্নব্যাংক তৈরি ও রিভিউ করা। গাণিতিক সমস্যাগুলোর সহজ ও নিখুঁত ব্যাখ্যা প্রস্তুত করতে হবে।',
        postedDate: '৩ জুলাই, ২০২৬',
        subject: 'Application: Curriculum Developer (Physics/Chemistry)'
      },
      {
        id: 'ai-engineer',
        title: 'AI Integration Engineer (Next.js & LLM)',
        desc: 'Next.js প্রজেক্টে আমাদের AI স্টাডি সহকারী (LLM) যুক্ত করা। প্রম্পট ইঞ্জিনিয়ারিং, মডেল ফাইন-টিউনিং ও ইউজার ইন্টারেকশন উন্নত করা।',
        postedDate: '২ জুলাই, ২০২৬',
        subject: 'Application: AI Integration Engineer (Next.js & LLM)'
      },
      {
        id: 'success-executive',
        title: 'Student Success Executive',
        desc: 'শিক্ষার্থীদের প্ল্যাটফর্ম ব্যবহারে সাহায্য করা এবং যেকোনো টেকনিক্যাল বা অ্যাকাডেমিক সমস্যার সমাধান দেওয়া।',
        postedDate: '৩০ জুন, ২০২৬',
        subject: 'Application: Student Success Executive'
      }
    ]
  },
  en: {
    badge: 'Careers',
    title: 'Join Our Team',
    subtitle: 'We are building a remote team to transform and democratize education in Bangladesh.',
    perksTitle: 'Benefits & Culture',
    perks: [
      { icon: '🏠', title: 'Remote-First', desc: 'Work from anywhere in Bangladesh with flexible hours.' },
      { icon: '🏥', title: 'Health Allowance', desc: 'Annual health insurance and medical package support.' },
      { icon: '📈', title: 'Growth Budget', desc: 'Annual budget allocation for courses, certifications, and books.' }
    ],
    jobsTitle: 'Open Positions',
    applyBtn: 'Apply Now',
    postedLabel: 'Posted:',
    remoteLabel: 'Remote',
    jobs: [
      {
        id: 'curriculum-dev',
        title: 'Curriculum Developer (Physics / Chemistry)',
        desc: 'Develop and review question banks for Physics and Chemistry (HSC & Admission). Create simple, accurate explanations for complex problems.',
        postedDate: 'July 3, 2026',
        subject: 'Application: Curriculum Developer (Physics/Chemistry)'
      },
      {
        id: 'ai-engineer',
        title: 'AI Integration Engineer (Next.js & LLM)',
        desc: 'Integrate LLM API endpoints into our Next.js frontend. Optimize prompt flows, handle contextual queries, and improve chatbot responsiveness.',
        postedDate: 'July 2, 2026',
        subject: 'Application: AI Integration Engineer (Next.js & LLM)'
      },
      {
        id: 'success-executive',
        title: 'Student Success Executive',
        desc: 'Assist students with platform onboarding, resolve technical inquiries, and gather feedback for product improvements.',
        postedDate: 'June 30, 2026',
        subject: 'Application: Student Success Executive'
      }
    ]
  }
};

export default function CareersPage() {
  const [lang, setLang] = usePersistentLang('bn');
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

          {/* Benefits & Culture */}
          <section id="perks" style={{ padding: 0 }}>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-text-primary)', textAlign: 'center', marginBottom: '32px' }}>
              {t.perksTitle}
            </h2>
            <div className="perks-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              {t.perks.map((p, i) => (
                <div 
                  key={i} 
                  style={{ 
                    background: 'var(--color-surface-card)', 
                    border: '1px solid var(--color-border-default)', 
                    borderRadius: '8px', 
                    padding: '24px' 
                  }}
                >
                  <div style={{ fontSize: '32px', marginBottom: '12px' }}>{p.icon}</div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '8px' }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Job Listings */}
          {/* 
              DEVELOPER COMMENT:
              To add, remove, or update job postings, edit the t.jobs array in the `copy` constant above.
              Make sure to update or delete listings as soon as positions are filled to keep data accurate.
          */}
          <section id="openings" style={{ padding: 0 }}>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-text-primary)', textAlign: 'center', marginBottom: '32px' }}>
              {t.jobsTitle}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
              {t.jobs.map((job) => (
                <div 
                  key={job.id} 
                  style={{ 
                    background: 'var(--color-surface-card)', 
                    border: '1px solid var(--color-border-default)', 
                    borderRadius: '8px', 
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                    <div>
                      <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--color-text-primary)', margin: 0 }}>
                        {job.title}
                      </h3>
                      <span className="badge badge-blue" style={{ fontSize: '9px', padding: '2px 6px', marginTop: '6px' }}>
                        {t.remoteLabel}
                      </span>
                    </div>
                    <span style={{ fontSize: '11px', color: 'var(--color-text-tertiary)', fontFamily: 'monospace' }}>
                      {t.postedLabel} {job.postedDate}
                    </span>
                  </div>

                  <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {job.desc}
                  </p>

                  <a 
                    href={`mailto:prostutibdapp@gmail.com?subject=${encodeURIComponent(job.subject)}`}
                    style={{ 
                      alignSelf: 'flex-end', 
                      background: 'var(--color-surface-strong)', 
                      color: '#000', 
                      padding: '8px 16px', 
                      borderRadius: '20px', 
                      fontSize: '12px', 
                      fontWeight: 700, 
                      textDecoration: 'none', 
                      transition: 'opacity 0.2s',
                      marginTop: '8px'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                  >
                    {t.applyBtn}
                  </a>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer lang={lang} onLangChange={setLang} />

      <style jsx>{`
        @media (max-width: 768px) {
          .perks-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </>
  );
}

'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function AboutPage() {
  const [lang, setLang] = useState<'bn' | 'en'>('bn');

  return (
    <>
      <Navbar lang={lang} onLangChange={setLang} />
      
      <main style={{ paddingTop: '100px', minHeight: '80vh', background: 'var(--color-surface-bg)' }}>
        <div className="container-page">
          <h1 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '32px' }}>
            {lang === 'bn' ? 'আমাদের সম্পর্কে' : 'About Us'}
          </h1>
          <div style={{ background: '#1c2230', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)', padding: '32px', maxWidth: '800px' }}>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              {lang === 'bn' 
                ? 'প্রস্তুতি (Prostuti) বাংলাদেশের শিক্ষার্থীদের জন্য একটি আধুনিক এবং পূর্ণাঙ্গ এডটেক প্ল্যাটফর্ম। আমরা একটি স্মার্ট, সাশ্রয়ী, এবং কার্যকর উপায়ে পরীক্ষার প্রস্তুতি নেওয়ার সুযোগ তৈরি করতে কাজ করছি।'
                : 'Prostuti is a modern and comprehensive EdTech platform for students in Bangladesh. We are working to create a smart, affordable, and effective way to prepare for exams.'}
            </p>
          </div>
        </div>
      </main>

      <Footer lang={lang} onLangChange={setLang} />
    </>
  );
}

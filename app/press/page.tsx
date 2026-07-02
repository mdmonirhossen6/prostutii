'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function PressPage() {
  const [lang, setLang] = useState<'bn' | 'en'>('bn');

  return (
    <>
      <Navbar lang={lang} onLangChange={setLang} />
      
      <main style={{ paddingTop: '100px', minHeight: '80vh', background: 'var(--color-surface-bg)' }}>
        <div className="container-page">
          <h1 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '32px' }}>
            {lang === 'bn' ? 'প্রেস' : 'Press'}
          </h1>
          <div style={{ background: '#1c2230', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)', padding: '32px', maxWidth: '800px', textAlign: 'center' }}>
            <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              {lang === 'bn' 
                ? 'যেকোনো প্রেস বা মিডিয়া সংক্রান্ত তথ্যের জন্য অনুগ্রহ করে আমাদের সাথে যোগাযোগ করুন।' 
                : 'For any press or media inquiries, please contact us.'}
            </p>
            <p style={{ marginTop: '16px' }}>
              <a href="mailto:prostutibdapp@gmail.com" style={{ color: '#4d6bff', textDecoration: 'none' }}>prostutibdapp@gmail.com</a>
            </p>
          </div>
        </div>
      </main>

      <Footer lang={lang} onLangChange={setLang} />
    </>
  );
}

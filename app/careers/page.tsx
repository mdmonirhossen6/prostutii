'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function CareersPage() {
  const [lang, setLang] = useState<'bn' | 'en'>('bn');

  return (
    <>
      <Navbar lang={lang} onLangChange={setLang} />
      
      <main style={{ paddingTop: '100px', minHeight: '80vh', background: 'var(--color-surface-bg)' }}>
        <div className="container-page">
          <h1 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '32px' }}>
            {lang === 'bn' ? 'ক্যারিয়ার' : 'Careers'}
          </h1>
          <div style={{ background: '#1c2230', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)', padding: '32px', maxWidth: '800px', textAlign: 'center' }}>
            <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              {lang === 'bn' 
                ? 'বর্তমানে আমাদের কোনো উন্মুক্ত পদ নেই। তবে আপনার সিভি prostutibdapp@gmail.com এ পাঠিয়ে রাখতে পারেন।' 
                : 'We currently do not have any open positions. However, you can send your CV to prostutibdapp@gmail.com.'}
            </p>
          </div>
        </div>
      </main>

      <Footer lang={lang} onLangChange={setLang} />
    </>
  );
}

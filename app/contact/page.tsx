'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function ContactPage() {
  const [lang, setLang] = useState<'bn' | 'en'>('bn');

  return (
    <>
      <Navbar lang={lang} onLangChange={setLang} />
      
      <main style={{ paddingTop: '100px', minHeight: '80vh', background: 'var(--color-surface-bg)' }}>
        <div className="container-page">
          <h1 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '32px' }}>
            {lang === 'bn' ? 'যোগাযোগ করুন' : 'Contact Us'}
          </h1>
          <div style={{ background: '#1c2230', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)', padding: '32px', maxWidth: '800px' }}>
            <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
              {lang === 'bn' 
                ? 'যেকোনো প্রশ্ন, পরামর্শ বা সাহায্যের জন্য আমাদের সাথে যোগাযোগ করুন। আমরা আপনার সহায়তায় সব সময় প্রস্তুত।' 
                : 'Contact us for any questions, suggestions, or assistance. We are always ready to help.'}
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <span style={{ fontSize: '20px' }}>📧</span>
                <div>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-inverse)' }}>Email Support</p>
                  <a href="mailto:prostutibdapp@gmail.com" style={{ fontSize: '16px', fontWeight: 600, color: '#4d6bff', textDecoration: 'none' }}>
                    prostutibdapp@gmail.com
                  </a>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <span style={{ fontSize: '20px' }}>💬</span>
                <div>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-inverse)' }}>Telegram Support</p>
                  <a href="https://t.me/prostutibd" target="_blank" rel="noreferrer" style={{ fontSize: '16px', fontWeight: 600, color: '#4d6bff', textDecoration: 'none' }}>
                    t.me/prostutibd
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer lang={lang} onLangChange={setLang} />
    </>
  );
}

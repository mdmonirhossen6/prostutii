'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function CookiePolicyPage() {
  const [lang, setLang] = useState<'bn' | 'en'>('bn');

  return (
    <>
      <Navbar lang={lang} onLangChange={setLang} />
      
      <main style={{ paddingTop: '100px', minHeight: '80vh', background: 'var(--color-surface-bg)' }}>
        <div className="container-page">
          <h1 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '32px' }}>
            {lang === 'bn' ? 'কুকি নীতি (Cookie Policy)' : 'Cookie Policy'}
          </h1>
          <div style={{ background: '#1c2230', border: '1px solid var(--color-overlay-5)', borderRadius: 'var(--radius-md)', padding: '32px', maxWidth: '800px' }}>
            
            <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
              Prostuti uses cookies and similar tracking technologies to track activity on our service and hold certain information.
            </p>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '12px' }}>Essential Cookies</h3>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.
              </p>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '12px' }}>Analytics Cookies</h3>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                We use these to understand how visitors interact with our platform to improve user experience. All information these cookies collect is aggregated and therefore anonymous.
              </p>
            </div>

            <div style={{ borderTop: '1px solid var(--color-overlay-10)', paddingTop: '24px' }}>
              <p style={{ fontSize: '15px', color: 'var(--color-text-inverse)' }}>
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer lang={lang} onLangChange={setLang} />
    </>
  );
}

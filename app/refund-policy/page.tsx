'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function RefundPolicyPage() {
  const [lang, setLang] = useState<'bn' | 'en'>('bn');

  return (
    <>
      <Navbar lang={lang} onLangChange={setLang} />
      
      <main style={{ paddingTop: '100px', minHeight: '80vh', background: 'var(--color-surface-bg)' }}>
        <div className="container-page">
          <h1 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '32px' }}>
            Refund Policy
          </h1>
          <div style={{ background: '#1c2230', border: '1px solid var(--color-overlay-5)', borderRadius: 'var(--radius-md)', padding: '32px', maxWidth: '800px' }}>
            
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '12px' }}>1. Premium Access Terms</h3>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                All transactions involving premium features, individual courses, or subscription services are considered final. Payment charges are generally non-refundable once your premium access is initialized.
              </p>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '12px' }}>2. Activation Verification Issues</h3>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '12px' }}>
                If a processed payment fails to unlock your premium account status automatically, please contact support so we can manually activate your plan:
              </p>
              <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li style={{ fontSize: '15px', color: 'var(--color-text-secondary)', display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--color-text-inverse)' }}>•</span> Provide your email address and transaction ID from your receipt.
                </li>
                <li style={{ fontSize: '15px', color: 'var(--color-text-secondary)', display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--color-text-inverse)' }}>•</span> Contact our support desk directly via our verified WhatsApp or Telegram channels.
                </li>
              </ul>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '12px' }}>3. Trial Availability</h3>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                We highly recommend that users take advantage of our free features or trial tiers prior to making any financial commitments. This ensures our app and material meet your learning expectations.
              </p>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '12px' }}>4. Exceptional Adjustments</h3>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '12px' }}>
                While policies remain strict, exceptions may be reviewed by administration under specialized circumstances:
              </p>
              <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li style={{ fontSize: '15px', color: 'var(--color-text-secondary)', display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--color-text-inverse)' }}>•</span> Double-billing errors resulting from localized payment provider issues.
                </li>
                <li style={{ fontSize: '15px', color: 'var(--color-text-secondary)', display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--color-text-inverse)' }}>•</span> Extended technical system outages that actively restrict access immediately post-purchase.
                </li>
              </ul>
            </div>

            <div style={{ borderTop: '1px solid var(--color-overlay-10)', paddingTop: '24px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '8px' }}>Have questions?</h3>
              <p style={{ fontSize: '15px', color: 'var(--color-text-inverse)' }}>
                If you need clarification regarding any of these terms, please connect with our support team at <a href="mailto:prostutibdapp@gmail.com" style={{ color: '#4d6bff', textDecoration: 'none' }}>prostutibdapp@gmail.com</a>.
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer lang={lang} onLangChange={setLang} />
    </>
  );
}

'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function PrivacyPolicyPage() {
  const [lang, setLang] = useState<'bn' | 'en'>('bn');

  return (
    <>
      <Navbar lang={lang} onLangChange={setLang} />
      
      <main style={{ paddingTop: '100px', minHeight: '80vh', background: 'var(--color-surface-bg)' }}>
        <div className="container-page">
          <h1 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '32px' }}>
            Privacy Policy
          </h1>
          <div style={{ background: '#1c2230', border: '1px solid var(--color-overlay-5)', borderRadius: 'var(--radius-md)', padding: '32px', maxWidth: '800px' }}>
            
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '12px' }}>1. Data Collection</h3>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '12px' }}>
                We collect basic profile details to customize your interactions and provide a personalized learning experience.
              </p>
              <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li style={{ fontSize: '15px', color: 'var(--color-text-secondary)', display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--color-text-inverse)' }}>•</span> Identity details: Name and email address used during registration.
                </li>
                <li style={{ fontSize: '15px', color: 'var(--color-text-secondary)', display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--color-text-inverse)' }}>•</span> System identifiers: Device ID to support reliable account sync across your devices.
                </li>
              </ul>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '12px' }}>2. Usage & Data Processing</h3>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '12px' }}>
                Your data is strictly utilized to operate internal application features. We do not sell your personal data to third parties.
              </p>
              <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li style={{ fontSize: '15px', color: 'var(--color-text-secondary)', display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--color-text-inverse)' }}>•</span> Progress Tracking: Maintaining your coursework history and achievements.
                </li>
                <li style={{ fontSize: '15px', color: 'var(--color-text-secondary)', display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--color-text-inverse)' }}>•</span> Gamification: Managing secure placements on regional leaderboards.
                </li>
                <li style={{ fontSize: '15px', color: 'var(--color-text-secondary)', display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--color-text-inverse)' }}>•</span> Account Security: Ensuring system integrity and preventing duplicate abuse.
                </li>
              </ul>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '12px' }}>3. Data Security</h3>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                We implement industry-standard practices to help keep your personal information secure, utilizing high-grade encryption systems during transit and at rest via Firebase security environments.
              </p>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '12px' }}>4. Third-Party Services</h3>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '12px' }}>
                To support scalable application performance, safe media distribution, and efficient computing, our application infrastructure relies on several security-focused external partners:
              </p>
              <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li style={{ fontSize: '15px', color: 'var(--color-text-secondary)', display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--color-text-inverse)' }}>•</span> Cloudflare R2 for asset caching and secure, optimized distribution.
                </li>
                <li style={{ fontSize: '15px', color: 'var(--color-text-secondary)', display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--color-text-inverse)' }}>•</span> Supabase and Firebase for database management and secure user authentication.
                </li>
                <li style={{ fontSize: '15px', color: 'var(--color-text-secondary)', display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--color-text-inverse)' }}>•</span> Select AI APIs to provide real-time interactive training feedback.
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

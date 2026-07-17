'use client';

import { useState } from 'react';

interface ContactSectionProps {
  lang: 'bn' | 'en';
}

const copy = {
  bn: {
    badge: 'যোগাযোগ',
    title: 'আমাদের সাথে কথা বলুন',
    subtitle: 'যেকোনো প্রশ্ন, পরামর্শ বা ফিডব্যাক — আমরা ২৪ ঘণ্টার মধ্যে উত্তর দেব।',
    labelName: 'আপনার নাম',
    labelEmail: 'ইমেইল',
    labelMsg: 'মেসেজ',
    placeholderName: 'যেমন: মনির হোসেন',
    placeholderEmail: 'example@gmail.com',
    placeholderMsg: 'আপনার প্রশ্ন বা মতামত লিখুন...',
    submitBtn: 'পাঠান',
    submittingBtn: 'পাঠানো হচ্ছে...',
    successMsg: 'ধন্যবাদ! আপনার মেসেজটি সফলভাবে পাঠানো হয়েছে।',
    errorMsg: 'দুঃখিত! মেসেজটি পাঠানো যায়নি। আবার চেষ্টা করুন।',
    validationName: 'অনুগ্রহ করে আপনার নাম লিখুন।',
    validationEmail: 'একটি সঠিক ইমেইল লিখুন।',
    validationMsg: 'অনুগ্রহ করে মেসেজটি লিখুন।',
    quickLabel: 'অথবা সরাসরি',
  },
  en: {
    badge: 'Contact',
    title: 'Get in Touch',
    subtitle: 'Any questions, suggestions or feedback — we reply within 24 hours.',
    labelName: 'Your Name',
    labelEmail: 'Email',
    labelMsg: 'Message',
    placeholderName: 'e.g. Monir Hossen',
    placeholderEmail: 'example@gmail.com',
    placeholderMsg: 'Write your question or feedback...',
    submitBtn: 'Send',
    submittingBtn: 'Sending...',
    successMsg: 'Thank you! Your message was sent successfully.',
    errorMsg: 'Sorry, the message could not be sent. Please try again.',
    validationName: 'Please enter your name.',
    validationEmail: 'Please enter a valid email.',
    validationMsg: 'Please write your message.',
    quickLabel: 'Or reach out directly',
  },
};

export default function ContactSection({ lang }: ContactSectionProps) {
  const t = copy[lang];
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [website, setWebsite] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorStatus, setErrorStatus] = useState<string | null>(null);
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [msgErr, setMsgErr] = useState(false);

  const validateEmail = (v: string) => /\S+@\S+\.\S+/.test(v);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNameErr(false);
    setEmailErr(false);
    setMsgErr(false);
    setErrorStatus(null);

    let hasErr = false;
    if (!name.trim()) { setNameErr(true); hasErr = true; }
    if (!email.trim() || !validateEmail(email)) { setEmailErr(true); hasErr = true; }
    if (!message.trim()) { setMsgErr(true); hasErr = true; }
    if (hasErr) return;

    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, website }),
      });
      if (res.ok) {
        setSuccess(true);
        setName(''); setEmail(''); setMessage('');
      } else {
        setErrorStatus(t.errorMsg);
      }
    } catch {
      setErrorStatus(t.errorMsg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section aria-label={lang === 'bn' ? 'যোগাযোগ ফর্ম' : 'Contact form'} style={{ padding: 'var(--space-12) 0', background: 'var(--color-surface-bg)' }}>
      <div className="container-page" style={{ maxWidth: '600px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
          <span className="badge badge-green" style={{ marginBottom: 'var(--space-3)' }}>{t.badge}</span>
          <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 34px)', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: 'var(--space-3)', lineHeight: 1.2 }}>
            {t.title}
          </h2>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
            {t.subtitle}
          </p>
        </div>

        {/* Status */}
        <div aria-live="polite" style={{ marginBottom: 'var(--space-4)' }}>
          {success && (
            <div style={{ background: 'rgba(0,150,109,0.1)', border: '1px solid rgba(0,150,109,0.2)', color: 'var(--color-surface-strong)', padding: '12px 16px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--font-size-sm)', fontWeight: 600, textAlign: 'center' }}>
              {t.successMsg}
            </div>
          )}
          {errorStatus && (
            <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', color: '#f87171', padding: '12px 16px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--font-size-sm)', fontWeight: 600, textAlign: 'center' }}>
              {errorStatus}
            </div>
          )}
        </div>

        {/* Form */}
        {!success && (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', background: 'var(--color-surface-card)', border: '1px solid var(--color-border-default)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)' }}>
            {/* Honeypot */}
            <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
              <input type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
            </div>

            {/* Name + Email row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)' }} className="contact-name-email-row">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label htmlFor="home-name" style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, color: 'var(--color-text-secondary)' }}>{t.labelName}</label>
                <input
                  id="home-name"
                  type="text"
                  value={name}
                  onChange={(e) => { setName(e.target.value); if (e.target.value.trim()) setNameErr(false); }}
                  placeholder={t.placeholderName}
                  style={{
                    background: 'var(--color-overlay-3)',
                    border: `1px solid ${nameErr ? '#f87171' : 'var(--color-border-default)'}`,
                    borderRadius: 'var(--radius-sm)',
                    padding: '10px 14px',
                    color: 'var(--color-text-primary)',
                    fontSize: 'var(--font-size-sm)',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                />
                {nameErr && <span style={{ fontSize: '11px', color: '#f87171' }}>{t.validationName}</span>}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label htmlFor="home-email" style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, color: 'var(--color-text-secondary)' }}>{t.labelEmail}</label>
                <input
                  id="home-email"
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (validateEmail(e.target.value)) setEmailErr(false); }}
                  placeholder={t.placeholderEmail}
                  style={{
                    background: 'var(--color-overlay-3)',
                    border: `1px solid ${emailErr ? '#f87171' : 'var(--color-border-default)'}`,
                    borderRadius: 'var(--radius-sm)',
                    padding: '10px 14px',
                    color: 'var(--color-text-primary)',
                    fontSize: 'var(--font-size-sm)',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                />
                {emailErr && <span style={{ fontSize: '11px', color: '#f87171' }}>{t.validationEmail}</span>}
              </div>
            </div>

            {/* Message */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label htmlFor="home-msg" style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, color: 'var(--color-text-secondary)' }}>{t.labelMsg}</label>
              <textarea
                id="home-msg"
                value={message}
                onChange={(e) => { setMessage(e.target.value); if (e.target.value.trim()) setMsgErr(false); }}
                placeholder={t.placeholderMsg}
                rows={4}
                style={{
                  background: 'var(--color-overlay-3)',
                  border: `1px solid ${msgErr ? '#f87171' : 'var(--color-border-default)'}`,
                  borderRadius: 'var(--radius-sm)',
                  padding: '10px 14px',
                  color: 'var(--color-text-primary)',
                  fontSize: 'var(--font-size-sm)',
                  outline: 'none',
                  resize: 'none',
                  transition: 'border-color 0.2s',
                }}
              />
              {msgErr && <span style={{ fontSize: '11px', color: '#f87171' }}>{t.validationMsg}</span>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              style={{
                background: 'var(--color-surface-strong)',
                color: '#000',
                fontWeight: 700,
                fontSize: 'var(--font-size-sm)',
                padding: '12px 24px',
                borderRadius: '24px',
                border: 'none',
                cursor: submitting ? 'not-allowed' : 'pointer',
                transition: 'opacity 0.2s, transform 0.15s',
                alignSelf: 'center',
                opacity: submitting ? 0.7 : 1,
              }}
              onMouseEnter={(e) => { if (!submitting) e.currentTarget.style.opacity = '0.85'; }}
              onMouseLeave={(e) => { if (!submitting) e.currentTarget.style.opacity = '1'; }}
            >
              {submitting ? t.submittingBtn : t.submitBtn}
            </button>

            {/* Quick links */}
            <p style={{ textAlign: 'center', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)', marginTop: 'var(--space-2)' }}>
              {t.quickLabel}{' '}
              <a href="https://wa.me/8801836083902" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', textDecoration: 'none', fontWeight: 600 }}>
                WhatsApp
              </a>
              {' · '}
              <a href="https://t.me/prostutibd" target="_blank" rel="noopener noreferrer" style={{ color: '#0088cc', textDecoration: 'none', fontWeight: 600 }}>
                Telegram
              </a>
            </p>
          </form>
        )}

        <style jsx>{`
          @media (max-width: 520px) {
            .contact-name-email-row {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';

interface ContactSectionProps {
  lang: 'bn' | 'en';
}

const copy = {
  bn: {
    badge: 'যোগাযোগ',
    title: 'আমাদের সাথে যোগাযোগ করুন',
    subtitle: 'যেকোনো প্রশ্ন, পরামর্শ বা ফিডব্যাকের জন্য সরাসরি যোগাযোগ করতে পারেন।',
    whatsappTitle: 'হোয়াটসঅ্যাপ সাপোর্ট',
    whatsappDesc: 'দ্রুত সমাধানের জন্য আমাদের সাপোর্ট টিমের সাথে চ্যাট করুন।',
    whatsappCta: 'মেসেজ পাঠান',
    telegramTitle: 'টেলিগ্রাম কমিউনিটি',
    telegramDesc: 'আমাদের অফিশিয়াল গ্রুপে যুক্ত হয়ে অন্যান্য শিক্ষার্থীদের সাথে আলোচনা করুন।',
    telegramCta: 'গ্রুপে যুক্ত হোন',
    formTitle: 'মেসেজ পাঠান',
    formDesc: 'সাধারণত ২৪ ঘণ্টার মধ্যে উত্তর দেওয়া হয়।',
    labelName: 'আপনার নাম',
    labelEmail: 'ইমেইল অ্যাড্রেস',
    labelMsg: 'আপনার মেসেজ',
    placeholderName: 'যেমন: মনির হোসেন',
    placeholderEmail: 'যেমন: monir@example.com',
    placeholderMsg: 'আপনার প্রশ্ন বা মতামত বিস্তারিত লিখুন...',
    submitBtn: 'পাঠান',
    submittingBtn: 'পাঠানো হচ্ছে...',
    successMsg: 'ধন্যবাদ! আপনার মেসেজটি সফলভাবে আমাদের কাছে পৌঁছেছে। আমরা দ্রুত আপনার সাথে যোগাযোগ করব।',
    errorMsg: 'দুঃখিত! মেসেজটি পাঠানো যায়নি। অনুগ্রহ করে আবার চেষ্টা করুন।',
    validationName: 'অনুগ্রহ করে আপনার নাম লিখুন।',
    validationEmail: 'একটি সঠিক ইমেইল ঠিকানা লিখুন।',
    validationMsg: 'অনুগ্রহ করে আপনার মেসেজটি লিখুন।'
  },
  en: {
    badge: 'Contact',
    title: 'Get in Touch',
    subtitle: 'Reach out to us directly for support, feedback, or any questions.',
    whatsappTitle: 'WhatsApp Support',
    whatsappDesc: 'Chat directly with our student support team for fast resolutions.',
    whatsappCta: 'Send Message',
    telegramTitle: 'Telegram Community',
    telegramDesc: 'Join our official channel to connect with other students.',
    telegramCta: 'Join Community',
    formTitle: 'Send a Message',
    formDesc: 'Usually replied within 24 hours.',
    labelName: 'Your Name',
    labelEmail: 'Email Address',
    labelMsg: 'Your Message',
    placeholderName: 'e.g., Monir Hossen',
    placeholderEmail: 'e.g., monir@example.com',
    placeholderMsg: 'Write your questions or suggestions in detail...',
    submitBtn: 'Send Message',
    submittingBtn: 'Sending...',
    successMsg: 'Thank you! Your message was delivered successfully. We will get back to you shortly.',
    errorMsg: 'Sorry, the message could not be sent. Please try again.',
    validationName: 'Please enter your name.',
    validationEmail: 'Please enter a valid email address.',
    validationMsg: 'Please write your message.'
  }
};

export default function ContactSection({ lang }: ContactSectionProps) {
  const t = copy[lang];

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [website, setWebsite] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorStatus, setErrorStatus] = useState<string | null>(null);

  // Field validation errors
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [messageErr, setMessageErr] = useState(false);

  const validateEmail = (emailStr: string) => {
    return /^\S+@\S+\.\S+$/.test(emailStr);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset validations
    setNameErr(false);
    setEmailErr(false);
    setMessageErr(false);
    setErrorStatus(null);

    let hasError = false;
    if (!name.trim()) {
      setNameErr(true);
      hasError = true;
    }
    if (!email.trim() || !validateEmail(email)) {
      setEmailErr(true);
      hasError = true;
    }
    if (!message.trim()) {
      setMessageErr(true);
      hasError = true;
    }

    if (hasError) return;

    setSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, website })
      });

      if (res.ok) {
        setSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setErrorStatus(t.errorMsg);
      }
    } catch (err) {
      console.error(err);
      setErrorStatus(t.errorMsg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact-section" aria-label={lang === 'bn' ? 'যোগাযোগ ফর্ম' : 'Contact form'} style={{ padding: '100px 0', background: 'var(--color-surface-base)' }}>
      <div className="container-page" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <span className="badge badge-green" style={{ marginBottom: '16px' }}>{t.badge}</span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '24px' }}>
            {t.title}
          </h2>
          <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
            {t.subtitle}
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          
          {/* Left Column: Direct channels (WhatsApp, Telegram) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* WhatsApp Card */}
            <div 
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '24px' }}>💬</span>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--color-text-primary)', margin: 0 }}>
                  {t.whatsappTitle}
                </h3>
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                {t.whatsappDesc}
              </p>
              <a 
                href="https://wa.me/8801836083902" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  alignSelf: 'flex-start',
                  background: '#25D366',
                  color: '#000',
                  fontWeight: 700,
                  fontSize: '12px',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  textDecoration: 'none',
                  marginTop: '8px',
                  transition: 'opacity 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                {t.whatsappCta}
              </a>
            </div>

            {/* Telegram Card */}
            <div 
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '24px' }}>📢</span>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--color-text-primary)', margin: 0 }}>
                  {t.telegramTitle}
                </h3>
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                {t.telegramDesc}
              </p>
              <a 
                href="https://t.me/prostutibd" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  alignSelf: 'flex-start',
                  background: '#0088cc',
                  color: 'var(--color-text-pure)',
                  fontWeight: 700,
                  fontSize: '12px',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  textDecoration: 'none',
                  marginTop: '8px',
                  transition: 'opacity 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                {t.telegramCta}
              </a>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div style={{ background: 'var(--color-surface-card)', border: '1px solid var(--color-border-default)', borderRadius: '8px', padding: '32px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '4px' }}>
              {t.formTitle}
            </h3>
            <p style={{ fontSize: '12px', color: 'var(--color-text-tertiary)', marginBottom: '24px' }}>
              {t.formDesc}
            </p>

            {/* ARIA Live Region for Status Feedback */}
            <div aria-live="polite" style={{ marginBottom: '16px' }}>
              {success && (
                <div style={{ background: 'rgba(0,150,109,0.1)', border: '1px solid rgba(0,150,109,0.2)', color: 'var(--color-surface-strong)', padding: '12px', borderRadius: '6px', fontSize: '13px' }}>
                  {t.successMsg}
                </div>
              )}
              {errorStatus && (
                <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', color: '#f87171', padding: '12px', borderRadius: '6px', fontSize: '13px' }}>
                  {errorStatus}
                </div>
              )}
            </div>

            {!success && (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                
                {/* Name field */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="contact-name" style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-text-secondary)' }}>
                    {t.labelName}
                  </label>
                  <input 
                    id="contact-name"
                    type="text" 
                    value={name}
                    onChange={(e) => { setName(e.target.value); if (e.target.value.trim()) setNameErr(false); }}
                    placeholder={t.placeholderName}
                    style={{
                      background: 'var(--color-overlay-3)',
                      border: `1px solid ${nameErr ? '#f87171' : 'var(--color-border-default)'}`,
                      borderRadius: '6px',
                      padding: '10px 14px',
                      color: 'var(--color-text-primary)',
                      fontSize: '13.5px',
                      outline: 'none'
                    }}
                  />
                  {nameErr && <span style={{ fontSize: '11px', color: '#f87171' }}>{t.validationName}</span>}
                </div>

                {/* Email field */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="contact-email" style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-text-secondary)' }}>
                    {t.labelEmail}
                  </label>
                  <input 
                    id="contact-email"
                    type="email" 
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); if (validateEmail(e.target.value)) setEmailErr(false); }}
                    placeholder={t.placeholderEmail}
                    style={{
                      background: 'var(--color-overlay-3)',
                      border: `1px solid ${emailErr ? '#f87171' : 'var(--color-border-default)'}`,
                      borderRadius: '6px',
                      padding: '10px 14px',
                      color: 'var(--color-text-primary)',
                      fontSize: '13.5px',
                      outline: 'none'
                    }}
                  />
                  {emailErr && <span style={{ fontSize: '11px', color: '#f87171' }}>{t.validationEmail}</span>}
                </div>

                {/* Message field */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="contact-msg" style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-text-secondary)' }}>
                    {t.labelMsg}
                  </label>
                  <textarea 
                    id="contact-msg"
                    value={message}
                    onChange={(e) => { setMessage(e.target.value); if (e.target.value.trim()) setMessageErr(false); }}
                    placeholder={t.placeholderMsg}
                    rows={5}
                    style={{
                      background: 'var(--color-overlay-3)',
                      border: `1px solid ${messageErr ? '#f87171' : 'var(--color-border-default)'}`,
                      borderRadius: '6px',
                      padding: '10px 14px',
                      color: 'var(--color-text-primary)',
                      fontSize: '13.5px',
                      outline: 'none',
                      resize: 'none'
                    }}
                  />
                  {messageErr && <span style={{ fontSize: '11px', color: '#f87171' }}>{t.validationMsg}</span>}
                </div>

                {/* Submit Button */}
                {/* Honeypot field — hidden from real users, catches bots. */}
                <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
                  <label htmlFor="contact-website">Website</label>
                  <input
                    id="contact-website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={submitting}
                  style={{
                    background: 'var(--color-surface-strong)',
                    color: '#000',
                    fontWeight: 700,
                    fontSize: '13px',
                    padding: '10px 20px',
                    borderRadius: '24px',
                    border: 'none',
                    cursor: submitting ? 'not-allowed' : 'pointer',
                    transition: 'opacity 0.2s',
                    marginTop: '8px'
                  }}
                  onMouseEnter={(e) => { if (!submitting) e.currentTarget.style.opacity = '0.9'; }}
                  onMouseLeave={(e) => { if (!submitting) e.currentTarget.style.opacity = '1'; }}
                >
                  {submitting ? t.submittingBtn : t.submitBtn}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
      <style jsx>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}

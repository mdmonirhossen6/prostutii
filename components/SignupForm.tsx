'use client';

import { useState, useId, useRef } from 'react';

interface SignupFormProps {
  lang: 'bn' | 'en';
}

const copy = {
  bn: {
    badge: 'বিনামূল্যে যোগ দিন',
    headline: 'আজই শুরু করুন',
    sub: 'এখনই নিবন্ধন করুন এবং বাংলাদেশের সেরা পরীক্ষা প্রস্তুতির প্ল্যাটফর্মে স্বাগত জানান।',
    namePlaceholder: 'আপনার নাম',
    emailPlaceholder: 'আপনার ইমেইল ঠিকানা',
    phonePlaceholder: 'মোবাইল নম্বর (01XXXXXXXXX)',
    submitBtn: 'বিনামূল্যে প্র্যাকটিস শুরু করুন',
    submitting: 'প্রক্রিয়াকরণ হচ্ছে...',
    success: '🎉 সফলভাবে নিবন্ধিত! শিগগিরই ইমেইল পাবেন।',
    errors: {
      nameRequired: 'নাম লিখুন।',
      emailRequired: 'ইমেইল ঠিকানা লিখুন।',
      emailInvalid: 'সঠিক ইমেইল ঠিকানা লিখুন।',
      phoneRequired: 'মোবাইল নম্বর লিখুন।',
      phoneInvalid: '১১ ডিজিটের সঠিক নম্বর লিখুন (01X দিয়ে শুরু)।',
    },
    guarantee: '৭ দিনের মানি-ব্যাক গ্যারান্টি',
    noCard: 'কোনো ক্রেডিট কার্ড নেই',
    cancel: 'যেকোনো সময় বাতিল',
  },
  en: {
    badge: 'Join Free',
    headline: 'Start Today',
    sub: 'Register now and get access to the best exam prep platform in Bangladesh.',
    namePlaceholder: 'Your full name',
    emailPlaceholder: 'Your email address',
    phonePlaceholder: 'Mobile number (01XXXXXXXXX)',
    submitBtn: 'Start Practicing Free',
    submitting: 'Processing...',
    success: '🎉 Successfully registered! Check your email shortly.',
    errors: {
      nameRequired: 'Please enter your name.',
      emailRequired: 'Please enter your email address.',
      emailInvalid: 'Please enter a valid email address.',
      phoneRequired: 'Please enter your mobile number.',
      phoneInvalid: 'Please enter a valid 11-digit number (starting with 01X).',
    },
    guarantee: '7-day money-back guarantee',
    noCard: 'No credit card',
    cancel: 'Cancel anytime',
  },
};

interface FormState {
  name: string;
  email: string;
  phone: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

export default function SignupForm({ lang }: SignupFormProps) {
  const t = copy[lang];
  const uid = useId();
  const errorRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = t.errors.nameRequired;
    if (!form.email.trim()) errs.email = t.errors.emailRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = t.errors.emailInvalid;
    if (!form.phone.trim()) errs.phone = t.errors.phoneRequired;
    else if (!/^01[3-9]\d{8}$/.test(form.phone)) errs.phone = t.errors.phoneInvalid;
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      errorRef.current?.focus();
      return;
    }
    setErrors({});
    setStatus('loading');
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('success');
  };

  const inputStyle = (fieldName: keyof FormErrors): React.CSSProperties => ({
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${errors[fieldName] ? '#ef4444' : 'var(--color-border-default)'}`,
    borderRadius: 'var(--radius-xs)',
    color: 'var(--color-text-primary)',
    fontFamily: 'var(--font-family-primary)',
    fontSize: 'var(--font-size-md)',
    padding: '12px 16px',
    outline: 'none',
    transition: 'border-color var(--duration-fast) var(--easing-default), background var(--duration-fast) var(--easing-default)',
    minHeight: '48px',
  });

  return (
    <section
      id="signup"
      aria-labelledby="signup-heading"
      style={{
        padding: 'var(--space-8) 0',
        background: `
          radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,150,109,0.12) 0%, transparent 70%),
          var(--color-surface-base)
        `,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative lines */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,150,109,0.04) 1px, transparent 1px)', backgroundSize: '100% 60px', pointerEvents: 'none' }} />

      <div className="container-page" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            maxWidth: '520px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <span className="badge badge-green" style={{ marginBottom: '16px' }}>
            {t.badge}
          </span>
          <h2
            id="signup-heading"
            className="section-title"
            style={{ marginBottom: '12px', fontSize: '40px' }}
          >
            {t.headline}
          </h2>
          <p
            style={{
              fontSize: 'var(--font-size-md)',
              color: 'var(--color-text-secondary)',
              marginBottom: '32px',
              lineHeight: 1.6,
            }}
          >
            {t.sub}
          </p>

          {/* Error summary for screen readers */}
          {Object.keys(errors).length > 0 && (
            <div
              ref={errorRef}
              tabIndex={-1}
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
              style={{
                background: 'rgba(239,68,68,0.10)',
                border: '1px solid rgba(239,68,68,0.4)',
                borderRadius: 'var(--radius-xs)',
                padding: '12px 16px',
                marginBottom: '20px',
                textAlign: 'left',
              }}
            >
              <p style={{ fontSize: 'var(--font-size-sm)', color: '#f87171', fontWeight: 600, marginBottom: '6px' }}>
                {lang === 'bn' ? 'অনুগ্রহ করে নিচের ত্রুটিগুলো ঠিক করুন:' : 'Please fix the following errors:'}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {Object.values(errors).map((err, i) => (
                  <li key={i} style={{ fontSize: 'var(--font-size-xs)', color: '#fca5a5' }}>• {err}</li>
                ))}
              </ul>
            </div>
          )}

          {status === 'success' ? (
            <div
              role="status"
              aria-live="polite"
              style={{
                background: 'rgba(0,150,109,0.12)',
                border: '1px solid rgba(0,150,109,0.5)',
                borderRadius: 'var(--radius-sm)',
                padding: '32px',
                textAlign: 'center',
              }}
            >
              <p style={{ fontSize: '24px', marginBottom: '8px' }}>🎉</p>
              <p style={{ fontSize: 'var(--font-size-lg)', fontWeight: 700, color: '#00d9a0' }}>
                {t.success}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              style={{
                background: 'var(--color-surface-card)',
                border: '1px solid var(--color-border-default)',
                borderRadius: 'var(--radius-sm)',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                textAlign: 'left',
              }}
              aria-label={lang === 'bn' ? 'নিবন্ধন ফর্ম' : 'Registration form'}
            >
              {/* Name */}
              <div>
                <label
                  htmlFor={`${uid}-name`}
                  style={{ display: 'block', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginBottom: '6px', fontWeight: 500 }}
                >
                  {lang === 'bn' ? 'পুরো নাম' : 'Full Name'} <span aria-hidden="true" style={{ color: '#ef4444' }}>*</span>
                  <span style={{ position: 'absolute', left: '-9999px' }}>{lang === 'bn' ? '(বাধ্যতামূলক)' : '(required)'}</span>
                </label>
                <input
                  id={`${uid}-name`}
                  type="text"
                  placeholder={t.namePlaceholder}
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? `${uid}-name-error` : undefined}
                  style={inputStyle('name')}
                  onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = '#4d6bff'; (e.target as HTMLInputElement).style.background = 'rgba(77,107,255,0.05)'; }}
                  onBlur={(e) => { if (!errors.name) { (e.target as HTMLInputElement).style.borderColor = 'var(--color-border-default)'; (e.target as HTMLInputElement).style.background = 'rgba(255,255,255,0.04)'; } }}
                  disabled={status === 'loading'}
                />
                {errors.name && (
                  <p id={`${uid}-name-error`} role="alert" style={{ fontSize: 'var(--font-size-xs)', color: '#f87171', marginTop: '4px' }}>
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor={`${uid}-email`}
                  style={{ display: 'block', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginBottom: '6px', fontWeight: 500 }}
                >
                  {lang === 'bn' ? 'ইমেইল ঠিকানা' : 'Email Address'} <span aria-hidden="true" style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  id={`${uid}-email`}
                  type="email"
                  placeholder={t.emailPlaceholder}
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? `${uid}-email-error` : undefined}
                  style={inputStyle('email')}
                  onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = '#4d6bff'; (e.target as HTMLInputElement).style.background = 'rgba(77,107,255,0.05)'; }}
                  onBlur={(e) => { if (!errors.email) { (e.target as HTMLInputElement).style.borderColor = 'var(--color-border-default)'; (e.target as HTMLInputElement).style.background = 'rgba(255,255,255,0.04)'; } }}
                  disabled={status === 'loading'}
                />
                {errors.email && (
                  <p id={`${uid}-email-error`} role="alert" style={{ fontSize: 'var(--font-size-xs)', color: '#f87171', marginTop: '4px' }}>
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor={`${uid}-phone`}
                  style={{ display: 'block', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginBottom: '6px', fontWeight: 500 }}
                >
                  {lang === 'bn' ? 'মোবাইল নম্বর' : 'Mobile Number'} <span aria-hidden="true" style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  id={`${uid}-phone`}
                  type="tel"
                  placeholder={t.phonePlaceholder}
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  aria-required="true"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? `${uid}-phone-error` : undefined}
                  style={inputStyle('phone')}
                  onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = '#4d6bff'; (e.target as HTMLInputElement).style.background = 'rgba(77,107,255,0.05)'; }}
                  onBlur={(e) => { if (!errors.phone) { (e.target as HTMLInputElement).style.borderColor = 'var(--color-border-default)'; (e.target as HTMLInputElement).style.background = 'rgba(255,255,255,0.04)'; } }}
                  disabled={status === 'loading'}
                />
                {errors.phone && (
                  <p id={`${uid}-phone-error`} role="alert" style={{ fontSize: 'var(--font-size-xs)', color: '#f87171', marginTop: '4px' }}>
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn btn-primary btn-lg"
                disabled={status === 'loading'}
                aria-describedby="signup-benefits"
                style={{ width: '100%', marginTop: '4px' }}
              >
                {status === 'loading' ? (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin 1s linear infinite' }} aria-hidden="true">
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                    </svg>
                    {t.submitting}
                  </>
                ) : (
                  t.submitBtn
                )}
              </button>

              {/* Trust signals */}
              <div
                id="signup-benefits"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '20px',
                  flexWrap: 'wrap',
                  paddingTop: '8px',
                }}
              >
                {[t.guarantee, t.noCard, t.cancel].map((txt, i) => (
                  <p key={i} style={{ fontSize: '11px', color: 'var(--color-text-inverse)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span aria-hidden="true">✓</span> {txt}
                  </p>
                ))}
              </div>
            </form>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}

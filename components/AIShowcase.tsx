'use client';

import { useState } from 'react';

interface AIShowcaseProps {
  lang: 'bn' | 'en';
}

const copy = {
  bn: {
    badge: 'Prostuti AI',
    title: 'তোমার স্মার্ট পড়ার সঙ্গী',
    subtitle: 'যেকোনো প্রশ্ন বুঝতে সমস্যা হলে AI-কে জিজ্ঞেস করো। বাংলায় সহজ ব্যাখ্যা, ছবি দিয়ে প্রশ্ন করার সুবিধা।',
    features: [
      { icon: '💬', text: 'বাংলায় চ্যাট করুন' },
      { icon: '🖼️', text: 'ছবি দিয়ে প্রশ্ন করুন' },
      { icon: '📊', text: 'দুর্বল অধ্যায় বিশ্লেষণ' },
      { icon: '⚡', text: 'তাৎক্ষণিক MCQ ব্যাখ্যা' },
    ],
    cta: 'AI দিয়ে পড়া শুরু করুন',
    chatLabel: 'Prostuti AI চ্যাট',
    inputPlaceholder: 'যেকোনো বিষয়ে জিজ্ঞেস করুন...',
    aiName: 'Prostuti AI',
    aiTagline: 'Text and Image study assistant',
    conversation: [
      {
        role: 'ai',
        text: 'হ্যালো! আমি Prostuti AI — তোমার স্মার্ট স্টাডি সহকারী। পদার্থ, রসায়ন, জীব বা যেকোনো বিষয়ে প্রশ্ন করো।',
      },
      {
        role: 'user',
        text: 'পর্যায় সারণির একই গ্রুপের মৌলগুলো কোন বৈশিষ্ট্য শেয়ার করে?',
        isQuestion: true,
        options: ['A. পারমাণবিক সংখ্যা', 'B. ইলেকট্রন সংখ্যা', 'C. যোজ্যতা ইলেকট্রন সংখ্যা', 'D. পারমাণবিক ভর'],
        correct: 'C',
        selected: 'D',
        verdict: 'incorrect',
      },
      {
        role: 'ai',
        text: '💡 ব্যাখ্যা: একই গ্রুপের মৌলগুলো একই সংখ্যক যোজ্যতা ইলেকট্রন (Valence electrons) ধারণ করে, তাই তাদের রাসায়নিক ধর্ম প্রায় একই হয়।\n\nসঠিক উত্তর: C. যোজ্যতা ইলেকট্রন সংখ্যা',
      },
    ],
  },
  en: {
    badge: 'Prostuti AI',
    title: 'Your Smart Study Companion',
    subtitle: 'Struggling with a concept? Ask AI. Simple explanations in Bengali, image-based questions supported.',
    features: [
      { icon: '💬', text: 'Chat in Bengali' },
      { icon: '🖼️', text: 'Ask with images' },
      { icon: '📊', text: 'Weak chapter analysis' },
      { icon: '⚡', text: 'Instant MCQ explanations' },
    ],
    cta: 'Start Studying with AI',
    chatLabel: 'Prostuti AI Chat',
    inputPlaceholder: 'Ask anything...',
    aiName: 'Prostuti AI',
    aiTagline: 'Text and Image study assistant',
    conversation: [
      {
        role: 'ai',
        text: "Hi! I'm Prostuti AI — your smart study assistant. Ask me anything about Physics, Chemistry, Biology, or any subject.",
      },
      {
        role: 'user',
        text: 'Elements in the same group of the periodic table share which property?',
        isQuestion: true,
        options: ['A. Atomic number', 'B. Number of electrons', 'C. Number of valence electrons', 'D. Atomic mass'],
        correct: 'C',
        selected: 'D',
        verdict: 'incorrect',
      },
      {
        role: 'ai',
        text: '💡 Explanation: Elements in the same group have the same number of valence electrons, which gives them similar chemical properties.\n\nCorrect answer: C. Number of valence electrons',
      },
    ],
  },
};

export default function AIShowcase({ lang }: AIShowcaseProps) {
  const t = copy[lang];
  const [inputFocused, setInputFocused] = useState(false);

  return (
    <section
      id="ai-showcase"
      aria-labelledby="ai-heading"
    >
      <div className="container-page">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }} className="ai-grid">

          {/* Left: copy */}
          <div>
            <span className="badge badge-recommended" style={{ marginBottom: '20px', background: 'rgba(139,92,246,0.15)', color: '#a78bfa', borderColor: 'rgba(139,92,246,0.3)' }}>
              ✦ {t.badge}
            </span>
            <h2 id="ai-heading" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: 'var(--color-text-primary)', lineHeight: 1.15, marginBottom: '16px', letterSpacing: '-0.5px' }}>
              {t.title}
            </h2>
            <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: '32px' }}>
              {t.subtitle}
            </p>

            {/* Feature pills */}
            <ul role="list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px' }}>
              {t.features.map((f, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ width: 36, height: 36, borderRadius: 'var(--radius-xs)', background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 }} aria-hidden="true">
                    {f.icon}
                  </span>
                  <span style={{ fontSize: 'var(--font-size-md)', color: 'var(--color-text-secondary)', fontWeight: 500 }}>{f.text}</span>
                </li>
              ))}
            </ul>

            <a href="https://web.prostuti.bd" className="btn btn-primary btn-lg" style={{ background: 'linear-gradient(135deg, #7c3aed, #8b5cf6)', boxShadow: '0 4px 20px rgba(139,92,246,0.35)' }}
              aria-label={lang === 'bn' ? 'Prostuti AI দিয়ে পড়া শুরু করতে অ্যাকাউন্ট খুলুন' : 'Open account to study with Prostuti AI'}>
              🤖 {t.cta}
            </a>
          </div>

          {/* Right: AI chat mockup */}
          <div
            role="img"
            aria-label={t.chatLabel}
            style={{
              background: 'var(--color-surface-card)',
              border: '1px solid var(--color-border-default)',
              borderRadius: 'var(--radius-sm)',
              overflow: 'hidden',
              boxShadow: '0 8px 48px rgba(139,92,246,0.15), var(--shadow-navy)',
            }}
          >
            {/* Header bar */}
            <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-border-default)', background: 'rgba(139,92,246,0.06)', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg,#7c3aed,#8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }} aria-hidden="true">🤖</div>
              <div>
                <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: 700, color: 'var(--color-text-primary)', lineHeight: 1 }}>{t.aiName}</p>
                <p style={{ fontSize: '11px', color: 'var(--color-text-inverse)', marginTop: '2px' }}>{t.aiTagline}</p>
              </div>
              <div style={{ marginLeft: 'auto', width: 8, height: 8, borderRadius: '50%', background: '#00d9a0', boxShadow: '0 0 6px #00d9a0' }} aria-hidden="true" />
            </div>

            {/* Chat messages */}
            <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '14px', minHeight: '280px' }}>
              {t.conversation.map((msg, i) => (
                <div key={i}>
                  {msg.role === 'ai' ? (
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg,#7c3aed,#8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', flexShrink: 0 }} aria-hidden="true">🤖</div>
                      <div style={{ background: 'var(--color-overlay-5)', border: '1px solid var(--color-border-default)', borderRadius: '0 12px 12px 12px', padding: '10px 14px', maxWidth: '85%' }}>
                        <p style={{ fontSize: '12px', color: 'var(--color-text-secondary)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{msg.text}</p>
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                      <div style={{ background: '#5b21b6', borderRadius: '12px 0 12px 12px', padding: '10px 14px', maxWidth: '90%' }}>
                        <p style={{ fontSize: '12px', color: '#e9d5ff', lineHeight: 1.5, marginBottom: '8px' }}>{msg.text}</p>
                        {msg.isQuestion && msg.options && (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            {msg.options.map((opt, j) => {
                              const letter = opt.charAt(0);
                              const isCorrect = letter === msg.correct;
                              const isSelected = letter === msg.selected;
                              return (
                                <div key={j} style={{ padding: '5px 10px', borderRadius: '6px', fontSize: '11px', background: isCorrect ? 'rgba(0,217,160,0.2)' : isSelected ? 'rgba(239,68,68,0.2)' : 'var(--color-overlay-5)', color: isCorrect ? '#00d9a0' : isSelected ? '#fca5a5' : '#c4b5fd', border: `1px solid ${isCorrect ? 'rgba(0,217,160,0.3)' : isSelected ? 'rgba(239,68,68,0.3)' : 'transparent'}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                  <span>{opt}</span>
                                  {isCorrect && <span aria-label="correct">✓</span>}
                                  {isSelected && !isCorrect && <span aria-label="incorrect">✗ Incorrect</span>}
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Input bar */}
            <div style={{ padding: '12px 16px', borderTop: '1px solid var(--color-border-default)', display: 'flex', gap: '10px', alignItems: 'center' }}>
              <div style={{ flex: 1, background: 'var(--color-overlay-5)', border: `1px solid ${inputFocused ? 'rgba(139,92,246,0.5)' : 'var(--color-border-default)'}`, borderRadius: 'var(--radius-md)', padding: '8px 14px', display: 'flex', alignItems: 'center', transition: 'border-color var(--duration-fast) var(--easing-default)', cursor: 'text' }} onClick={() => setInputFocused(true)}>
                <span style={{ fontSize: '12px', color: 'var(--color-text-inverse)' }}>{t.inputPlaceholder}</span>
              </div>
              <button aria-label={lang === 'bn' ? 'পাঠান' : 'Send'} style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg,#7c3aed,#8b5cf6)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .ai-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}

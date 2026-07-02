'use client';

import { useState } from 'react';

interface QuizDemoProps {
  lang: 'bn' | 'en';
}

type OptionState = 'default' | 'selected' | 'correct' | 'incorrect';

interface Question {
  id: string;
  subject: string;
  chapter: string;
  text: string;
  options: { label: string; text: string; isCorrect: boolean }[];
  explanation: string;
}

const questions: Record<'bn' | 'en', Question[]> = {
  bn: [
    {
      id: 'q1',
      subject: 'পদার্থবিজ্ঞান',
      chapter: 'গতিবিদ্যা',
      text: 'একটি গাড়ি স্থিরাবস্থা থেকে 4 m/s² ত্বরণে চলতে শুরু করে। 5 সেকেন্ড পরে তার বেগ কত হবে?',
      options: [
        { label: 'ক', text: '10 m/s', isCorrect: false },
        { label: 'খ', text: '20 m/s', isCorrect: true },
        { label: 'গ', text: '25 m/s', isCorrect: false },
        { label: 'ঘ', text: '40 m/s', isCorrect: false },
      ],
      explanation: 'v = u + at = 0 + (4)(5) = 20 m/s। এখানে u = 0 (স্থিরাবস্থা), a = 4 m/s², t = 5 s।',
    },
    {
      id: 'q2',
      subject: 'রসায়ন',
      chapter: 'পর্যায় সারণি',
      text: 'পর্যায় সারণিতে একই গ্রুপে অবস্থিত মৌলগুলোর মধ্যে কোন বৈশিষ্ট্যটি একই থাকে?',
      options: [
        { label: 'ক', text: 'পারমাণবিক সংখ্যা', isCorrect: false },
        { label: 'খ', text: 'ইলেকট্রন সংখ্যা', isCorrect: false },
        { label: 'গ', text: 'যোজ্যতা ইলেকট্রন সংখ্যা', isCorrect: true },
        { label: 'ঘ', text: 'পারমাণবিক ভর', isCorrect: false },
      ],
      explanation: 'একই গ্রুপের মৌলগুলোর যোজ্যতা শেলে ইলেকট্রন সংখ্যা একই থাকে, যে কারণে তারা একই রাসায়নিক বৈশিষ্ট্য প্রদর্শন করে।',
    },
    {
      id: 'q3',
      subject: 'গণিত',
      chapter: 'বীজগণিত',
      text: 'যদি x + y = 7 এবং xy = 12 হয়, তাহলে x² + y² = ?',
      options: [
        { label: 'ক', text: '25', isCorrect: true },
        { label: 'খ', text: '37', isCorrect: false },
        { label: 'গ', text: '49', isCorrect: false },
        { label: 'ঘ', text: '24', isCorrect: false },
      ],
      explanation: 'x² + y² = (x+y)² - 2xy = 7² - 2(12) = 49 - 24 = 25।',
    },
  ],
  en: [
    {
      id: 'q1',
      subject: 'Physics',
      chapter: 'Kinematics',
      text: 'A car starts from rest with acceleration 4 m/s². What is its velocity after 5 seconds?',
      options: [
        { label: 'A', text: '10 m/s', isCorrect: false },
        { label: 'B', text: '20 m/s', isCorrect: true },
        { label: 'C', text: '25 m/s', isCorrect: false },
        { label: 'D', text: '40 m/s', isCorrect: false },
      ],
      explanation: 'v = u + at = 0 + (4)(5) = 20 m/s. Here u = 0 (rest), a = 4 m/s², t = 5 s.',
    },
    {
      id: 'q2',
      subject: 'Chemistry',
      chapter: 'Periodic Table',
      text: 'Elements in the same group of the periodic table share which property?',
      options: [
        { label: 'A', text: 'Atomic number', isCorrect: false },
        { label: 'B', text: 'Number of electrons', isCorrect: false },
        { label: 'C', text: 'Number of valence electrons', isCorrect: true },
        { label: 'D', text: 'Atomic mass', isCorrect: false },
      ],
      explanation: 'Elements in the same group have the same number of valence electrons, which gives them similar chemical properties.',
    },
    {
      id: 'q3',
      subject: 'Mathematics',
      chapter: 'Algebra',
      text: 'If x + y = 7 and xy = 12, then x² + y² = ?',
      options: [
        { label: 'A', text: '25', isCorrect: true },
        { label: 'B', text: '37', isCorrect: false },
        { label: 'C', text: '49', isCorrect: false },
        { label: 'D', text: '24', isCorrect: false },
      ],
      explanation: 'x² + y² = (x+y)² - 2xy = 7² - 2(12) = 49 - 24 = 25.',
    },
  ],
};

const copy = {
  bn: {
    badge: 'ইন্টারেক্টিভ ডেমো',
    title: 'এখনই একটি প্রশ্ন চেষ্টা করুন',
    subtitle: 'প্রতিটি উত্তরের সাথে তাৎক্ষণিক ব্যাখ্যা পাবেন — ঠিক যেমন আসল পরীক্ষায়।',
    selectPrompt: 'একটি বিকল্প বেছে নিন',
    correct: '✅ সঠিক উত্তর!',
    incorrect: '❌ ভুল উত্তর',
    explanation: '💡 ব্যাখ্যা',
    next: 'পরের প্রশ্ন',
    tryAgain: 'আবার চেষ্টা করুন',
    question: 'প্রশ্ন',
    of: 'এর মধ্যে',
    score: 'স্কোর',
    complete: 'ডেমো সম্পন্ন! প্রস্তুতিতে যোগ দিন সম্পূর্ণ প্রস্তুতির জন্য।',
    joinNow: 'এখনই যোগ দিন',
    chapter: 'অধ্যায়',
  },
  en: {
    badge: 'Interactive Demo',
    title: 'Try a Question Right Now',
    subtitle: 'Get instant explanations with every answer — exactly like the real Prostuti experience.',
    selectPrompt: 'Select one option',
    correct: '✅ Correct Answer!',
    incorrect: '❌ Incorrect',
    explanation: '💡 Explanation',
    next: 'Next Question',
    tryAgain: 'Try Again',
    question: 'Question',
    of: 'of',
    score: 'Score',
    complete: 'Demo complete! Join Prostuti for the full experience.',
    joinNow: 'Join Now',
    chapter: 'Chapter',
  },
};

export default function QuizDemo({ lang }: QuizDemoProps) {
  const t = copy[lang];
  const qs = questions[lang];

  const [currentQ, setCurrentQ] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = qs[currentQ];

  const getOptionState = (idx: number): OptionState => {
    if (!answered) return selectedIdx === idx ? 'selected' : 'default';
    const opt = q.options[idx];
    if (opt.isCorrect) return 'correct';
    if (idx === selectedIdx && !opt.isCorrect) return 'incorrect';
    return 'default';
  };

  const optionStyles: Record<OptionState, React.CSSProperties> = {
    default: {
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid var(--color-border-default)',
      color: 'var(--color-text-secondary)',
    },
    selected: {
      background: 'rgba(77,107,255,0.15)',
      border: '1px solid rgba(77,107,255,0.5)',
      color: 'var(--color-text-primary)',
    },
    correct: {
      background: 'rgba(0,150,109,0.15)',
      border: '1px solid rgba(0,150,109,0.6)',
      color: 'var(--color-text-primary)',
    },
    incorrect: {
      background: 'rgba(239,68,68,0.10)',
      border: '1px solid rgba(239,68,68,0.5)',
      color: 'var(--color-text-primary)',
    },
  };

  const handleSelect = (idx: number) => {
    if (answered) return;
    setSelectedIdx(idx);
    setAnswered(true);
    if (q.options[idx].isCorrect) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (currentQ < qs.length - 1) {
      setCurrentQ((c) => c + 1);
      setSelectedIdx(null);
      setAnswered(false);
    } else {
      setDone(true);
    }
  };

  const handleReset = () => {
    setCurrentQ(0);
    setSelectedIdx(null);
    setAnswered(false);
    setScore(0);
    setDone(false);
  };

  return (
    <section
      aria-labelledby="quiz-heading"
      style={{
        padding: 'var(--space-8) 0',
        background: 'linear-gradient(180deg, transparent 0%, rgba(77,107,255,0.04) 50%, transparent 100%)',
      }}
    >
      <div className="container-page">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-7)' }}>
          <span className="badge badge-blue" style={{ marginBottom: '16px' }}>
            {t.badge}
          </span>
          <h2
            id="quiz-heading"
            className="section-title"
            style={{ marginBottom: '14px' }}
          >
            {t.title}
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            {t.subtitle}
          </p>
        </div>

        {/* Quiz card */}
        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            background: 'var(--color-surface-card)',
            border: '1px solid var(--color-border-default)',
            borderRadius: 'var(--radius-sm)',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
          }}
          role="region"
          aria-label={lang === 'bn' ? 'ইন্টারেক্টিভ কুইজ ডেমো' : 'Interactive quiz demo'}
        >
          {/* Quiz top bar */}
          <div
            style={{
              padding: '16px 24px',
              borderBottom: '1px solid var(--color-border-default)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'rgba(0,150,109,0.05)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span className="badge badge-green">{q.subject}</span>
              <span
                style={{
                  fontSize: 'var(--font-size-xs)',
                  color: 'var(--color-text-inverse)',
                }}
              >
                {t.chapter}: {q.chapter}
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span
                style={{
                  fontSize: 'var(--font-size-xs)',
                  color: 'var(--color-text-inverse)',
                }}
                aria-live="polite"
              >
                {t.question} {currentQ + 1} {t.of} {qs.length}
              </span>
              <span
                style={{
                  fontSize: 'var(--font-size-xs)',
                  color: '#00d9a0',
                  fontWeight: 700,
                }}
                aria-live="polite"
                aria-label={`${t.score}: ${score}`}
              >
                {t.score}: {score}/{qs.length}
              </span>
            </div>
          </div>

          {/* Progress bar */}
          <div style={{ height: 3, background: 'rgba(255,255,255,0.06)' }}>
            <div
              style={{
                height: '100%',
                width: `${((currentQ + (answered ? 1 : 0)) / qs.length) * 100}%`,
                background: 'var(--color-surface-strong)',
                transition: 'width 0.4s ease',
              }}
              role="progressbar"
              aria-valuenow={currentQ + 1}
              aria-valuemin={1}
              aria-valuemax={qs.length}
              aria-label={`${currentQ + 1} ${lang === 'bn' ? 'এর মধ্যে' : 'of'} ${qs.length} ${lang === 'bn' ? 'সম্পন্ন' : 'complete'}`}
            />
          </div>

          {done ? (
            /* Completion state */
            <div
              style={{
                padding: '48px 32px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px',
              }}
              role="status"
              aria-live="polite"
            >
              <div style={{ fontSize: '48px' }} role="img" aria-label={lang === 'bn' ? 'ট্রফি' : 'trophy'}>
                🏆
              </div>
              <div>
                <p
                  style={{
                    fontSize: '24px',
                    fontWeight: 800,
                    color: 'var(--color-text-primary)',
                    marginBottom: '8px',
                  }}
                >
                  {score}/{qs.length} {lang === 'bn' ? 'সঠিক' : 'correct'}
                </p>
                <p style={{ fontSize: 'var(--font-size-md)', color: 'var(--color-text-secondary)' }}>
                  {t.complete}
                </p>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={handleReset}
                  className="btn btn-secondary"
                  aria-label={lang === 'bn' ? 'ডেমো আবার শুরু করুন' : 'Restart the quiz demo'}
                >
                  {t.tryAgain}
                </button>
                <a
                  href="#signup"
                  className="btn btn-primary"
                  aria-label={lang === 'bn' ? 'প্রস্তুতিতে বিনামূল্যে যোগ দিন' : 'Join Prostuti for free'}
                >
                  {t.joinNow}
                </a>
              </div>
            </div>
          ) : (
            /* Question state */
            <div style={{ padding: '28px 28px 24px' }}>
              {/* Question text */}
              <p
                style={{
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: 600,
                  color: 'var(--color-text-primary)',
                  lineHeight: 1.6,
                  marginBottom: '24px',
                }}
                id={`question-text-${q.id}`}
              >
                {q.text}
              </p>

              {/* Live feedback region */}
              <div aria-live="polite" aria-atomic="true" style={{ position: 'absolute', left: '-9999px' }}>
                {answered && (
                  q.options[selectedIdx!]?.isCorrect
                    ? (lang === 'bn' ? 'সঠিক উত্তর' : 'Correct answer')
                    : (lang === 'bn' ? 'ভুল উত্তর' : 'Incorrect answer')
                )}
              </div>

              {/* Options */}
              <fieldset
                style={{ border: 'none', padding: 0, marginBottom: '20px' }}
                aria-labelledby={`question-text-${q.id}`}
              >
                <legend style={{ position: 'absolute', left: '-9999px' }}>
                  {lang === 'bn' ? 'উত্তর বিকল্পসমূহ' : 'Answer options'}
                </legend>
                {q.options.map((opt, idx) => {
                  const state = getOptionState(idx);
                  return (
                    <button
                      key={opt.label}
                      onClick={() => handleSelect(idx)}
                      disabled={answered}
                      aria-pressed={selectedIdx === idx}
                      aria-label={`${lang === 'bn' ? 'বিকল্প' : 'Option'} ${opt.label}: ${opt.text}${answered && opt.isCorrect ? (lang === 'bn' ? ' — সঠিক' : ' — correct') : ''}${answered && idx === selectedIdx && !opt.isCorrect ? (lang === 'bn' ? ' — ভুল' : ' — incorrect') : ''}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        width: '100%',
                        padding: '12px 16px',
                        marginBottom: '8px',
                        borderRadius: 'var(--radius-xs)',
                        cursor: answered ? 'default' : 'pointer',
                        fontFamily: 'var(--font-family-primary)',
                        fontSize: 'var(--font-size-md)',
                        textAlign: 'left',
                        transition: 'all var(--duration-fast) var(--easing-default)',
                        minHeight: '48px',
                        ...optionStyles[state],
                      }}
                      onMouseEnter={(e) => {
                        if (!answered) {
                          (e.currentTarget as HTMLButtonElement).style.background = 'rgba(77,107,255,0.10)';
                          (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(77,107,255,0.4)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!answered && state === 'default') {
                          (e.currentTarget as HTMLButtonElement).style.background = optionStyles.default.background as string;
                          (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-border-default)';
                        }
                      }}
                    >
                      <span
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: '50%',
                          background: state === 'correct' ? 'var(--color-surface-strong)'
                            : state === 'incorrect' ? 'rgba(239,68,68,0.3)'
                            : state === 'selected' ? 'rgba(77,107,255,0.3)'
                            : 'rgba(255,255,255,0.06)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '11px',
                          fontWeight: 800,
                          color: state === 'correct' ? '#fff' : 'var(--color-text-secondary)',
                          flexShrink: 0,
                          transition: 'all var(--duration-fast) var(--easing-default)',
                        }}
                        aria-hidden="true"
                      >
                        {opt.label}
                      </span>
                      <span style={{ flex: 1 }}>{opt.text}</span>
                      {/* State indicator icon */}
                      {answered && opt.isCorrect && (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d9a0" strokeWidth="2.5" style={{ flexShrink: 0 }} aria-hidden="true">
                          <path d="M20 6L9 17l-5-5"/>
                        </svg>
                      )}
                      {answered && idx === selectedIdx && !opt.isCorrect && (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" style={{ flexShrink: 0 }} aria-hidden="true">
                          <path d="M18 6L6 18M6 6l12 12"/>
                        </svg>
                      )}
                    </button>
                  );
                })}
              </fieldset>

              {/* Feedback + explanation */}
              {answered && (
                <div
                  style={{
                    padding: '16px',
                    borderRadius: 'var(--radius-xs)',
                    background: q.options[selectedIdx!]?.isCorrect
                      ? 'rgba(0,150,109,0.10)'
                      : 'rgba(239,68,68,0.08)',
                    borderLeft: `3px solid ${q.options[selectedIdx!]?.isCorrect ? 'var(--color-surface-strong)' : '#ef4444'}`,
                    marginBottom: '20px',
                  }}
                  role="status"
                  aria-live="assertive"
                >
                  <p
                    style={{
                      fontSize: 'var(--font-size-sm)',
                      fontWeight: 700,
                      color: q.options[selectedIdx!]?.isCorrect ? '#00d9a0' : '#f87171',
                      marginBottom: '8px',
                    }}
                  >
                    {q.options[selectedIdx!]?.isCorrect ? t.correct : t.incorrect}
                  </p>
                  <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
                    <strong style={{ color: 'var(--color-text-primary)' }}>{t.explanation}: </strong>
                    {q.explanation}
                  </p>
                </div>
              )}

              {/* Actions */}
              {answered && (
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                  <button
                    onClick={handleNext}
                    className="btn btn-primary"
                    aria-label={currentQ < qs.length - 1
                      ? (lang === 'bn' ? 'পরের প্রশ্নে যান' : 'Go to next question')
                      : (lang === 'bn' ? 'ডেমো শেষ করুন' : 'Finish demo')
                    }
                  >
                    {currentQ < qs.length - 1 ? t.next : (lang === 'bn' ? 'ডেমো শেষ করুন' : 'Finish Demo')}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              )}

              {!answered && (
                <p
                  style={{
                    fontSize: 'var(--font-size-xs)',
                    color: 'var(--color-text-inverse)',
                    textAlign: 'center',
                    marginTop: '4px',
                  }}
                  aria-live="polite"
                >
                  {t.selectPrompt}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

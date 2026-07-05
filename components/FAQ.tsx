'use client';

import { useState, useCallback, useRef, useEffect } from 'react';

interface FAQProps {
  lang: 'bn' | 'en';
}

const content = {
  bn: {
    badge: 'প্রশ্নোত্তর',
    title: 'শিক্ষার্থীরা যা জিজ্ঞেস করে।',
    subtitle: 'এখানে নেই? আমাদের জিজ্ঞেস করো ➔',
    items: [
      {
        q: 'অ্যাপটি ব্যবহার করতে কি কোনো টাকা লাগবে?',
        a: 'অ্যাপটি ডাউনলোড করা এবং ফ্রি ফিচারগুলো ব্যবহার করা সম্পূর্ণ ফ্রী। তবে প্রিমিয়াম টেস্ট, AI টিউটর ও ফুল প্রশ্নব্যাংক ব্যবহারের জন্য আমাদের সাশ্রয়ী সাবস্ক্রিপশন প্ল্যান রয়েছে।',
      },
      {
        q: 'কোন কোন বোর্ড আর ক্লাস?',
        a: 'বর্তমানে একাদশ-দ্বাদশ শ্রেণি (HSC) এবং মেডিকেল, ইঞ্জিনিয়ারিং ও ভার্সিটি এডমিশন পরীক্ষার্থীদের জন্য সকল বোর্ডের সিলেবাস অনুযায়ী কন্টেন্ট রয়েছে।',
      },
      {
        q: 'পুরনো ফোনে চলবে তো?',
        a: 'হ্যাঁ, প্রস্তুতি একটি লাইটওয়েট প্ল্যাটফর্ম যা যেকোনো স্মার্টফোন বা কম্পিউটার থেকে ওয়েব ব্রাউজারের মাধ্যমে কোনো ল্যাগ ছাড়াই ব্যবহার করা যায়।',
      },
      {
        q: 'প্রশ্নগুলো আসে কোথা থেকে?',
        a: 'আমাদের প্রশ্নব্যাংক দেশের শীর্ষস্থানীয় শিক্ষক, বিষয়ভিত্তিক এক্সপার্ট এবং বিগত বছরের বোর্ড ও এডমিশন পরীক্ষার প্রশ্নের সমন্বয়ে তৈরি।',
      },
      {
        q: 'আমার ডেটা নিরাপদ?',
        a: 'অবশ্যই। আপনার ব্যক্তিগত তথ্য এবং প্র্যাকটিস ডেটা সম্পূর্ণ এনক্রিপ্টেড ও সুরক্ষিত রাখতে আমরা সর্বাধুনিক সিকিউরিটি ব্যবস্থা ব্যবহার করি।',
      },
      {
        q: 'ভুল উত্তর পেলে কী করব?',
        a: 'প্রশ্নের নিচে "রিপোর্ট" অপশন রয়েছে। কোনো ভুল মনে হলে রিপোর্ট করুন, আমাদের এক্সপার্ট টিম তা যাচাই করে দ্রুত সমাধান করে দেবে।',
      },
    ],
  },
  en: {
    badge: 'FAQ',
    title: 'Questions Students Ask.',
    subtitle: "Not here? Ask us directly ➔",
    items: [
      {
        q: 'Is it free to use the app?',
        a: 'Downloading the app and using free features is completely free. However, premium tests, AI tutor, and the full question bank require one of our affordable subscription plans.',
      },
      {
        q: 'Which boards and classes are covered?',
        a: 'Currently, we provide content according to all board syllabuses for HSC students and University, Medical, and Engineering admission candidates.',
      },
      {
        q: 'Will it work on older phones?',
        a: 'Yes, Prostuti is a lightweight platform that can be used smoothly from any smartphone or computer via a web browser without any lag.',
      },
      {
        q: 'Where do the questions come from?',
        a: 'Our question bank is curated by top teachers, subject experts, and includes previous years\' board and admission test questions.',
      },
      {
        q: 'Is my data secure?',
        a: 'Absolutely. We use state-of-the-art security measures to keep your personal information and practice data completely encrypted and secure.',
      },
      {
        q: 'What if I find a wrong answer?',
        a: 'There is a "Report" option below each question. If you find any error, please report it, and our expert team will verify and fix it quickly.',
      },
    ],
  },
};

export default function FAQ({ lang }: FAQProps) {
  const t = content[lang];
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = useCallback((idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  }, []);

  const handleKey = useCallback((e: React.KeyboardEvent, idx: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle(idx);
    }
  }, [toggle]);

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      section.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    section.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="faq"
      aria-labelledby="faq-heading"
      style={{
        padding: '110px 0',
        background: 'var(--color-surface-base)',
      }}
    >
      <div className="container-page">
        <div className="faq-grid">
          {/* Left Column */}
          <div className="faq-header-box reveal">
            <span style={{ 
              fontSize: '12px', 
              fontWeight: 700, 
              color: 'var(--color-text-tertiary)', 
              letterSpacing: '1px', 
              marginBottom: '16px', 
              display: 'block' 
            }}>
              {t.badge}
            </span>
            <h2
              id="faq-heading"
              style={{
                fontSize: 'clamp(36px, 5vw, 48px)',
                fontWeight: 900,
                color: 'var(--color-text-primary)',
                lineHeight: 1.1,
                marginBottom: '24px',
                letterSpacing: '-1px'
              }}
            >
              {t.title}
            </h2>
            <a href="https://web.prostuti.bd" className="faq-contact-link">
              {t.subtitle}
            </a>
          </div>

          {/* Right Column: Accordion */}
          <div className="faq-accordion" role="list">
            {t.items.map((item, idx) => {
              const isOpen = openIdx === idx;
              const answerId = `faq-answer-${idx}`;
              const buttonId = `faq-btn-${idx}`;

              return (
                <div key={idx} className="reveal" style={{ transitionDelay: `${idx * 60}ms` }}>
                  <div
                    role="listitem"
                    className={`faq-card ${isOpen ? 'open' : ''}`}
                  >
                    <button
                      id={buttonId}
                      onClick={() => toggle(idx)}
                      onKeyDown={(e) => handleKey(e, idx)}
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      className="faq-button"
                    >
                      <span className="faq-question">
                        {item.q}
                      </span>
                      <span className="faq-icon-wrapper" aria-hidden="true">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          className={`faq-icon ${isOpen ? 'rotated' : ''}`}
                        >
                          <path d="M12 5v14M5 12h14"/>
                        </svg>
                      </span>
                    </button>

                    <div
                      id={answerId}
                      role="region"
                      aria-labelledby={buttonId}
                      ref={(el) => { answerRefs.current[idx] = el; }}
                      className="faq-answer-container"
                      style={{
                        maxHeight: isOpen ? '200px' : '0',
                      }}
                    >
                      <p className="faq-answer-text">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .faq-grid {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 60px;
          align-items: start;
        }

        .faq-contact-link {
          font-size: 14px;
          font-weight: 600;
          color: var(--color-text-secondary);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          transition: color var(--duration-fast) var(--easing-default);
        }
        
        .faq-contact-link:hover {
          color: var(--color-surface-strong);
        }

        .faq-accordion {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .faq-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-sm);
          overflow: hidden;
          transition: all var(--duration-normal) var(--easing-default);
        }

        .faq-card:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.1);
        }

        .faq-button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 20px 24px;
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          text-align: left;
        }

        .faq-question {
          font-size: var(--font-size-md);
          font-weight: 600;
          color: var(--color-text-primary);
          line-height: 1.4;
          transition: color var(--duration-fast) var(--easing-default);
        }

        .faq-card.open .faq-question {
          color: #fff;
        }

        .faq-icon-wrapper {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--color-text-secondary);
          transition: all var(--duration-fast) var(--easing-default);
        }

        .faq-card.open .faq-icon-wrapper {
          background: rgba(255,255,255,0.1);
          color: #fff;
        }

        .faq-icon {
          transition: transform var(--duration-fast) var(--easing-default);
        }

        .faq-icon.rotated {
          transform: rotate(45deg);
        }

        .faq-answer-container {
          overflow: hidden;
          transition: max-height 0.3s var(--easing-default);
        }

        .faq-answer-text {
          font-size: var(--font-size-sm);
          color: var(--color-text-secondary);
          line-height: 1.6;
          padding: 0 24px 20px 24px;
          margin: 0;
        }

        @media (max-width: 900px) {
          .faq-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .faq-header-box {
            text-align: center;
          }
          
          .faq-button {
            padding: 16px 20px;
          }
          
          .faq-answer-text {
            padding: 0 20px 16px 20px;
          }
        }
      `}</style>
    </section>
  );
}

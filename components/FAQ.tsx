'use client';

import { useState, useCallback, useRef } from 'react';

interface FAQProps {
  lang: 'bn' | 'en';
}

const content = {
  bn: {
    badge: 'সাধারণ প্রশ্ন',
    title: 'প্রায়ই জিজ্ঞাসিত প্রশ্নোত্তর',
    subtitle: 'আপনার মনে যা প্রশ্ন আছে, আমরা উত্তর দিচ্ছি।',
    items: [
      {
        q: 'প্রস্তুতিতে কোন কোন পরীক্ষার ট্র্যাক আছে?',
        a: 'প্রস্তুতিতে চারটি প্রধান ট্র্যাক রয়েছে: (১) এইচএসসি প্র্যাকটিস — HSC সকল বিষয় পেপার ১ ও ২ আলাদাভাবে, (২) ইঞ্জিনিয়ারিং প্র্যাকটিস — বুয়েট ও প্রকৌশল বিশ্ববিদ্যালয়, (৩) ভার্সিটি প্র্যাকটিস — ঢাবি ও সাধারণ বিশ্ববিদ্যালয়, (৪) মেডিকেল প্র্যাকটিস — ডাক্তারি ভর্তি পরীক্ষা।',
      },
      {
        q: 'Daily Goals ও XP সিস্টেম কীভাবে কাজ করে?',
        a: 'প্রতিদিন নির্দিষ্ট পরিমাণ MCQ, মক পরীক্ষা ও অনুশীলনী সম্পন্ন করে XP (অভিজ্ঞতা পয়েন্ট) অর্জন করা যায়। ডিফিকাল্টি লেভেল (Easy/Medium/Hard) বেছে নিয়ে দৈনিক লক্ষ্যমাত্রা নির্ধারণ করুন। প্রতি সপ্তাহের শীর্ষ XP-অর্জনকারীরা সাপ্তাহিক লিডারবোর্ডে দেখা যায়।',
      },
      {
        q: 'Prostuti AI কী এবং কীভাবে আমাকে সাহায্য করবে?',
        a: 'Prostuti AI আপনার প্র্যাকটিস হিস্ট্রি বিশ্লেষণ করে দুর্বল অধ্যায় চিহ্নিত করে এবং তাৎক্ষণিক ব্যাখ্যা প্রদান করে। আপনার ভুল উত্তরের প্যাটার্ন দেখে AI বলে দেবে কোন কনসেপ্টে আরও সময় দেওয়া প্রয়োজন।',
      },
      {
        q: 'অনুশীলনি ফলাফলে কী দেখা যায়?',
        a: 'অনুশীলনি ফলাফল বিভাগে প্রতিটি বিষয় (Physics, Chemistry, Biology ইত্যাদি) ও পেপার (1st Paper / 2nd Paper) অনুযায়ী আপনার স্কোর আলাদাভাবে দেখতে পাবেন। কোন অধ্যায়ে কতবার প্র্যাকটিস করেছেন এবং স্কোর কেমন — সবই ট্র্যাক হয়।',
      },
      {
        q: 'প্রস্তুতিতে কি সাপোর্ট পাওয়া যায়?',
        a: 'হ্যাঁ! WhatsApp-এ সরাসরি সাপোর্ট পাবেন: +8801836083902। অ্যাপের ভেতরেও সাপোর্ট অপশন আছে। প্রিমিয়াম ব্যবহারকারীরা অগ্রাধিকার সাপোর্ট পান।',
      },
      {
        q: 'ফ্রি প্ল্যান ও প্রিমিয়ামের মধ্যে পার্থক্য কী?',
        a: 'ফ্রি প্ল্যানে সীমিত প্রশ্ন প্র্যাকটিস ও বেসিক ফিচার পাওয়া যায়। প্রিমিয়ামে সম্পূর্ণ প্রশ্নব্যাংক (২ লক্ষ+), সীমাহীন মক টেস্ট, Prostuti AI এবং বিস্তারিত পারফরম্যান্স অ্যানালিটিক্স পাওয়া যায়।',
      },
      {
        q: 'প্রস্তুতি কি মোবাইলে ভালো কাজ করে?',
        a: 'হ্যাঁ, প্রস্তুতি মোবাইল-ফার্স্ট ডিজাইনে তৈরি। যেকোনো অ্যান্ড্রয়েড বা iOS ব্রাউজারে ওয়েব অ্যাপ হিসেবে ব্যবহার করা যায়। বটম নেভিগেশন বার দিয়ে হোম, অধ্যয়ন, লিডারবোর্ড ও সেটিংস সহজে অ্যাক্সেস করা যায়।',
      },
    ],
  },
  en: {
    badge: 'FAQ',
    title: 'Frequently Asked Questions',
    subtitle: 'We have answers to the questions on your mind.',
    items: [
      {
        q: 'Which exam tracks does Prostuti cover?',
        a: 'Prostuti has four main tracks: (1) HSC Practice — all subjects with Paper 1 & 2 separately, (2) Engineering Practice — BUET and engineering universities, (3) Varsity Practice — DU and general universities, (4) Medical Practice — medical admission exam prep.',
      },
      {
        q: 'How do Daily Goals and the XP system work?',
        a: 'Complete a set number of MCQs, mock tests, and chapter practice each day to earn XP (experience points). Choose your difficulty level (Easy/Medium/Hard) to set your daily target. The top XP earners each week appear on the Weekly Leaderboard.',
      },
      {
        q: 'What is Prostuti AI and how does it help me?',
        a: "Prostuti AI analyzes your practice history to identify weak chapters and provides instant explanations. By detecting patterns in your wrong answers, AI tells you which concepts need more attention — so you study smarter, not harder.",
      },
      {
        q: 'What do I see in Practice Results (অনুশীলনি ফলাফল)?',
        a: 'The Practice Results section shows your scores per subject (Physics, Chemistry, Biology, etc.) and per paper (1st Paper / 2nd Paper) separately. It tracks how many times you practiced each chapter and your score trend over time.',
      },
      {
        q: 'How can I get support?',
        a: 'You can reach us directly on WhatsApp: +8801836083902. There\'s also an in-app support option. Premium users receive priority support.',
      },
      {
        q: 'What is the difference between Free and Premium?',
        a: 'The free plan gives you limited question practice and basic features. Premium unlocks the full question bank (200,000+), unlimited mock tests, Prostuti AI, and detailed performance analytics.',
      },
      {
        q: 'Does Prostuti work well on mobile?',
        a: 'Yes — Prostuti is designed mobile-first. It works as a web app on any Android or iOS browser. The bottom navigation bar gives quick access to Home, Study, Leaderboard, and Settings.',
      },
    ],
  },
};


export default function FAQ({ lang }: FAQProps) {
  const t = content[lang];
  const [openIdx, setOpenIdx] = useState<number | null>(null);
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

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      style={{
        padding: 'var(--space-8) 0',
        background: 'radial-gradient(circle at 10% 20%, rgba(0, 150, 109, 0.05) 0%, transparent 60%), rgba(8, 10, 20, 0.98)',
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.005) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.005) 1px, transparent 1px)`,
        backgroundSize: '30px 30px',
      }}
    >
      <div className="container-page">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-7)' }}>
          <span className="badge badge-green" style={{ marginBottom: '16px' }}>
            {t.badge}
          </span>
          <h2
            id="faq-heading"
            className="section-title"
            style={{ marginBottom: '14px' }}
          >
            {t.title}
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            {t.subtitle}
          </p>
        </div>

        {/* Accordion */}
        <div
          style={{ maxWidth: '760px', margin: '0 auto' }}
          role="list"
        >
          {t.items.map((item, idx) => {
            const isOpen = openIdx === idx;
            const answerId = `faq-answer-${idx}`;
            const buttonId = `faq-btn-${idx}`;

            return (
              <div
                key={idx}
                role="listitem"
                style={{
                  borderBottom: idx < t.items.length - 1 ? '1px solid var(--color-border-default)' : 'none',
                }}
              >
                <button
                  id={buttonId}
                  onClick={() => toggle(idx)}
                  onKeyDown={(e) => handleKey(e, idx)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    padding: '20px 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-family-primary)',
                    textAlign: 'left',
                    minHeight: 44,
                  }}
                >
                  <span
                    style={{
                      fontSize: 'var(--font-size-md)',
                      fontWeight: 600,
                      color: isOpen ? '#00d9a0' : 'var(--color-text-primary)',
                      transition: 'color var(--duration-fast) var(--easing-default)',
                      lineHeight: 1.4,
                    }}
                  >
                    {item.q}
                  </span>
                  <span
                    aria-hidden="true"
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      background: isOpen ? 'rgba(0,150,109,0.15)' : 'rgba(255,255,255,0.05)',
                      border: `1px solid ${isOpen ? 'rgba(0,150,109,0.4)' : 'var(--color-border-default)'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all var(--duration-fast) var(--easing-default)',
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={isOpen ? '#00d9a0' : 'var(--color-text-secondary)'}
                      strokeWidth="2.5"
                      style={{
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        transition: 'transform var(--duration-fast) var(--easing-default)',
                      }}
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
                  style={{
                    overflow: 'hidden',
                    maxHeight: isOpen ? '400px' : '0',
                    transition: 'max-height 0.3s var(--easing-default)',
                  }}
                >
                  <p
                    style={{
                      fontSize: 'var(--font-size-md)',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.7,
                      paddingBottom: '20px',
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

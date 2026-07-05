'use client';

import { useEffect, useRef } from 'react';

interface PricingProps {
  lang: 'bn' | 'en';
}

const srOnly: React.CSSProperties = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0,0,0,0)',
  whiteSpace: 'nowrap',
  border: 0,
};

const copy = {
  bn: {
    badge: 'প্রিমিয়াম সাবস্ক্রিপশন',
    title: 'আপনার পছন্দমতো সাবস্ক্রিপশন বেছে নিন',
    subtitle: 'একটি Premium Subscription-এ HSC থেকে Admission পর্যন্ত সম্পূর্ণ প্রস্তুতির সব সুবিধা পাবে।',
    allIncluded: 'সব প্ল্যানে সব ফিচার অন্তর্ভুক্ত',
    checklistTitle: 'সব প্ল্যানে যা যা থাকছে',
    currency: '৳',
    perMonth: '/মাস',
    rowLabels: {
      total: 'মোট মূল্য',
      price: 'আপনার মূল্য',
      monthly: 'মাসিক হিসাবে',
      savings: 'সাশ্রয়',
    },
    planColHeader: 'প্ল্যান',
    scrollHint: '→ পাশে স্ক্রল করে সবগুলো প্ল্যান দেখুন',
    features: [
      'HSC-এর সব অধ্যায়ভিত্তিক অনুশীলন',
      'নিজের পছন্দমতো মক টেস্ট',
      'বোর্ড প্রশ্ন ও সেরা কলেজের টেস্ট পেপার',
      'ধরনভিত্তিক সৃজনশীল ও MCQ সংগ্রহ (অধ্যায়ভিত্তিক ক, খ)',
      'বিশ্ববিদ্যালয়, ইঞ্জিনিয়ারিং ও মেডিকেল ভর্তি প্রস্তুতি',
      'মাস্টার প্রশ্নব্যাংক ও লিখিত প্রশ্নব্যাংক',
      'বিগত বছরের প্রশ্নব্যাংক',
      'বইয়ের অনুশীলনী প্র্যাকটিস ও মক টেস্ট',
      'সাপ্তাহিক পরীক্ষা, বিষয় ফাইনাল ও পেপার ফাইনাল পরীক্ষা',
      'ব্যাটল রয়্যাল (বন্ধুদের সাথে লাইভ পরীক্ষা)',
      'স্মার্ট রুটিন ও ফোকাস টাইমার',
      'দৈনিক পড়াশোনা ট্র্যাকার ও সিলেবাস ট্র্যাকিং',
      'Prostuti AI-এর আনলিমিটেড সাপোর্ট',
    ],
    plans: [
      { id: '1m', name: 'মাসিক', price: '১৪৯', originalPrice: '২৪৯', perMonthPrice: '১৪৯', savings: null, tag: null },
      { id: '3m', name: '৩ মাস', price: '২৯৯', originalPrice: '৪৯৯', perMonthPrice: '১০০', savings: '৩৩%', tag: null },
      { id: '6m', name: '৬ মাস', price: '৪৯৯', originalPrice: '৭৯৯', perMonthPrice: '৮৩', savings: '৪৪%', tag: null },
      { id: '12m', name: 'বার্ষিক', price: '৭৯৯', originalPrice: '১২৯৯', perMonthPrice: '৬৭', savings: '৫৫%', tag: null },
      { id: '24m', name: '২৪ মাস', price: '১২০০', originalPrice: '২৫৯৯', perMonthPrice: '৫০', savings: '৬৬%', tag: 'সেরা মূল্য' },
    ],
  },
  en: {
    badge: 'Premium Subscription',
    title: 'Select Your Subscription',
    subtitle: 'One Premium Subscription unlocks everything — from HSC to Admission, all features included.',
    allIncluded: 'All features included in every plan',
    checklistTitle: "What's included in every plan",
    currency: '৳',
    perMonth: '/mo',
    rowLabels: {
      total: 'Total price',
      price: 'Your price',
      monthly: 'Per month',
      savings: 'You save',
    },
    planColHeader: 'Plan',
    scrollHint: '→ Scroll sideways to see all plans',
    features: [
      'All HSC Chapter-wise Practice',
      'Custom Mock Tests',
      'Board Questions & Top College Test Papers',
      'Type-wise CQ & MCQ Collection (Chapter ক, খ)',
      'University, Engineering & Medical Admission Prep',
      'Master Question Bank & Written Question Bank',
      'Previous Year Question Bank',
      'Textbook Exercise Practice & Mock Tests',
      'Weekly Exam, Subject Final & Paper Final Exam',
      'Battle Royale (Live Exam with Friends)',
      'Smart Routine & Focus Timer',
      'Daily Study Tracker & Syllabus Tracking',
      'Unlimited Prostuti AI Support',
    ],
    plans: [
      { id: '1m', name: 'Monthly', price: '149', originalPrice: '249', perMonthPrice: '149', savings: null, tag: null },
      { id: '3m', name: '3 Months', price: '299', originalPrice: '499', perMonthPrice: '100', savings: '33%', tag: null },
      { id: '6m', name: '6 Months', price: '499', originalPrice: '799', perMonthPrice: '83', savings: '44%', tag: null },
      { id: '12m', name: 'Yearly', price: '799', originalPrice: '1299', perMonthPrice: '67', savings: '55%', tag: null },
      { id: '24m', name: '24 Months', price: '1200', originalPrice: '2599', perMonthPrice: '50', savings: '66%', tag: 'BEST VALUE' },
    ],
  },
};

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00d9a0" strokeWidth="2.5" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export default function Pricing({ lang }: PricingProps) {
  const t = copy[lang];
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 700 && scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
  }, []);

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
    <section ref={sectionRef} id="pricing" aria-labelledby="pricing-heading" style={{ padding: '110px 0', background: 'var(--color-surface-base)' }}>
      <div className="container-page">

        <div className="reveal" style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
          <span className="badge badge-recommended" style={{ marginBottom: 'var(--space-4)' }}>{t.badge}</span>
          <h2 id="pricing-heading" className="section-title" style={{ marginBottom: 'var(--space-3)' }}>{t.title}</h2>
          <p className="section-subtitle" style={{ margin: '0 auto', marginBottom: '16px' }}>{t.subtitle}</p>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: 'rgba(0,150,109,0.10)', border: '1px solid rgba(0,150,109,0.25)',
            color: '#00d9a0', fontSize: '13px', fontWeight: 700, padding: '6px 16px', borderRadius: '20px',
          }}>
            <CheckIcon />
            {t.allIncluded}
          </span>
        </div>

        <div className="reveal" style={{
          background: 'var(--color-surface-card)', border: '1px solid var(--color-border-default)',
          borderRadius: 'var(--radius-sm)', padding: '28px 32px', marginBottom: 'var(--space-7)',
        }}>
          <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '18px' }}>
            {t.checklistTitle}
          </h3>
          <ul style={{
            listStyle: 'none', margin: 0, padding: 0,
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px 24px',
          }}>
            {t.features.map((feature, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: 'var(--color-text-secondary)' }}>
                <CheckIcon />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mobile-only" style={{ fontSize: '12px', color: 'var(--color-text-tertiary)', marginBottom: '8px' }}>
          {t.scrollHint}
        </p>
        <div ref={scrollRef} className="pricing-table-container" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
          <table
            role="table"
            aria-label={lang === 'bn' ? 'সাবস্ক্রিপশন মূল্য তুলনা' : 'Subscription price comparison'}
            style={{
              width: '100%', minWidth: '640px', borderCollapse: 'separate', borderSpacing: 0,
              background: 'var(--color-surface-card)', border: '1px solid var(--color-border-default)',
              borderRadius: 'var(--radius-sm)', overflow: 'hidden', boxShadow: 'var(--shadow-navy)',
            }}
          >
            <thead>
              <tr>
                <th scope="col" style={{
                  padding: '20px 24px', textAlign: 'left', fontSize: '13px', fontWeight: 700,
                  color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '1px',
                  borderBottom: '1px solid var(--color-border-default)', background: 'rgba(255,255,255,0.01)',
                  position: 'sticky', left: 0, zIndex: 2,
                }}>
                  {t.planColHeader}
                </th>
                {t.plans.map((plan) => {
                  const isHighlighted = plan.tag !== null;
                  return (
                    <th key={plan.id} scope="col" style={{
                      padding: '20px 16px', textAlign: 'center',
                      borderBottom: '1px solid var(--color-border-default)',
                      background: isHighlighted
                        ? 'linear-gradient(180deg, rgba(0,150,109,0.12) 0%, rgba(0,150,109,0.04) 100%)'
                        : 'rgba(255,255,255,0.01)',
                      borderLeft: isHighlighted ? '2px solid var(--color-surface-strong)' : 'none',
                      borderRight: isHighlighted ? '2px solid var(--color-surface-strong)' : 'none',
                      position: 'relative',
                    }}>
                      {plan.tag && (
                        <span style={{
                          position: 'absolute', top: '-1px', left: '50%', transform: 'translateX(-50%)',
                          background: 'var(--color-surface-strong)', color: '#fff', fontSize: '10px', fontWeight: 800,
                          padding: '3px 10px', borderRadius: '0 0 6px 6px', letterSpacing: '0.5px',
                        }}>
                          {plan.tag}
                        </span>
                      )}
                      <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                        {plan.name}
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody>
              <tr>
                <th scope="row" style={rowHeaderStyle}>{t.rowLabels.total}</th>
                {t.plans.map((plan) => (
                  <td key={plan.id} style={{ ...cellStyle(plan.tag !== null), fontFamily: 'monospace', textDecoration: 'line-through', color: 'var(--color-text-tertiary)' }}>
                    {t.currency}{plan.originalPrice}
                  </td>
                ))}
              </tr>

              <tr>
                <th scope="row" style={rowHeaderStyle}>{t.rowLabels.price}</th>
                {t.plans.map((plan) => {
                  const isHighlighted = plan.tag !== null;
                  return (
                    <td key={plan.id} style={{ ...cellStyle(isHighlighted), fontFamily: 'monospace', fontSize: '18px', fontWeight: 800, color: isHighlighted ? '#00d9a0' : 'var(--color-text-primary)' }}>
                      {t.currency}{plan.price}
                    </td>
                  );
                })}
              </tr>

              <tr>
                <th scope="row" style={rowHeaderStyle}>{t.rowLabels.monthly}</th>
                {t.plans.map((plan) => (
                  <td key={plan.id} style={{ ...cellStyle(plan.tag !== null), fontFamily: 'monospace', color: 'var(--color-text-secondary)' }}>
                    {t.currency}{plan.perMonthPrice}{t.perMonth}
                  </td>
                ))}
              </tr>

              <tr>
                <th scope="row" style={{ ...rowHeaderStyle, borderBottom: 'none' }}>{t.rowLabels.savings}</th>
                {t.plans.map((plan) => {
                  const isHighlighted = plan.tag !== null;
                  return (
                    <td key={plan.id} style={{ ...cellStyle(isHighlighted, true), fontFamily: 'monospace', fontWeight: 700, color: plan.savings ? '#00d9a0' : 'var(--color-text-tertiary)' }}>
                      {plan.savings ?? '—'}
                    </td>
                  );
                })}
              </tr>
            </tbody>

            <tfoot>
              <tr>
                <td style={{ padding: '16px 24px', borderTop: '1px solid var(--color-border-default)', background: 'rgba(255,255,255,0.01)', position: 'sticky', left: 0, zIndex: 1 }} />
                {t.plans.map((plan) => {
                  const isHighlighted = plan.tag !== null;
                  return (
                    <td key={plan.id} style={{
                      padding: '16px 16px', textAlign: 'center', borderTop: '1px solid var(--color-border-default)',
                      background: isHighlighted ? 'rgba(0,150,109,0.06)' : 'transparent',
                      borderLeft: isHighlighted ? '2px solid var(--color-surface-strong)' : 'none',
                      borderRight: isHighlighted ? '2px solid var(--color-surface-strong)' : 'none',
                      borderBottom: isHighlighted ? '2px solid var(--color-surface-strong)' : 'none',
                    }}>
                      <a
                        href="https://web.prostuti.bd"
                        className={isHighlighted ? 'btn btn-primary btn-sm' : 'btn btn-secondary btn-sm'}
                        style={{ width: '100%', fontSize: '12px', padding: '8px 12px', minHeight: '36px' }}
                      >
                        {lang === 'bn' ? 'শুরু করুন' : 'Get Started'}
                      </a>
                    </td>
                  );
                })}
              </tr>
            </tfoot>
          </table>
        </div>

      </div>

      <style jsx>{`
        .mobile-only { display: none; }
        .pricing-table-container::-webkit-scrollbar { display: none; }
        .pricing-table-container { -ms-overflow-style: none; scrollbar-width: none; }
        
        @media (max-width: 700px) {
          .mobile-only { display: block; }
        }
      `}</style>
    </section>
  );
}

const rowHeaderStyle: React.CSSProperties = {
  padding: '14px 24px',
  textAlign: 'left',
  fontSize: '13px',
  fontWeight: 600,
  color: 'var(--color-text-secondary)',
  borderBottom: '1px solid var(--color-border-default)',
  background: 'rgba(255,255,255,0.01)',
  position: 'sticky',
  left: 0,
  zIndex: 1,
};

function cellStyle(isHighlighted: boolean, isLastRow = false): React.CSSProperties {
  return {
    padding: '14px 16px',
    textAlign: 'center',
    borderBottom: isLastRow ? 'none' : '1px solid var(--color-border-default)',
    background: isHighlighted ? 'rgba(0,150,109,0.03)' : 'transparent',
    borderLeft: isHighlighted ? '2px solid var(--color-surface-strong)' : 'none',
    borderRight: isHighlighted ? '2px solid var(--color-surface-strong)' : 'none',
  };
}

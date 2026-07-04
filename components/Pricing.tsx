'use client';

interface PricingProps {
  lang: 'bn' | 'en';
}

const allTrue = [true, true, true, true, true, true, true, true, true, true, true, true, true];

const copy = {
  bn: {
    badge: 'প্রিমিয়াম সাবস্ক্রিপশন',
    title: 'আপনার পছন্দমতো সাবস্ক্রিপশন বেছে নিন',
    subtitle: 'একটি Premium Subscription-এ HSC থেকে Admission পর্যন্ত সম্পূর্ণ প্রস্তুতির সব সুবিধা পাবে।',
    allIncluded: 'সব প্ল্যানে সব ফিচার অন্তর্ভুক্ত',
    currency: '৳',
    perMonth: '/মাস',
    features: [
      'HSC-এর সব Chapter-wise Practice',
      'Custom Mock Test',
      'Board Question & Top College Test Paper',
      'Type-wise CQ & MCQ Collection (অধ্যায়ভিত্তিক ক, খ)',
      'University, Engineering & Medical Admission Prep',
      'Master Question Bank & Written Question Bank',
      'Previous Year Question Bank',
      'বইয়ের অনুশীলনী প্র্যাকটিস ও Mock Test',
      'Weekly Exam, Subject Final & Paper Final Exam',
      'Battle Royale (Friends-এর সাথে Live Exam)',
      'Smart Routine & Focus Timer',
      'Daily Study Tracker & Syllabus Tracking',
      'Prostuti AI-এর আনলিমিটেড সাপোর্ট',
    ],
    plans: [
      { id: '1m', name: 'মাসিক', price: '১৪৯', originalPrice: '২৪৯', perMonthPrice: '১৪৯', tag: null, checks: allTrue },
      { id: '3m', name: '৩ মাস', price: '২৯৯', originalPrice: '৪৯৯', perMonthPrice: '১০০', tag: null, checks: allTrue },
      { id: '6m', name: '৬ মাস', price: '৪৯৯', originalPrice: '৭৯৯', perMonthPrice: '৮৩', tag: null, checks: allTrue },
      { id: '12m', name: 'বার্ষিক', price: '৭৯৯', originalPrice: '১২৯৯', perMonthPrice: '৬৭', tag: null, checks: allTrue },
      { id: '24m', name: '২৪ মাস', price: '১২০০', originalPrice: '২৫৯৯', perMonthPrice: '৫০', tag: 'সেরা মূল্য', checks: allTrue },
    ]
  },
  en: {
    badge: 'Premium Subscription',
    title: 'Select Your Subscription',
    subtitle: 'One Premium Subscription unlocks everything — from HSC to Admission, all features included.',
    allIncluded: 'All features included in every plan',
    currency: '৳',
    perMonth: '/mo',
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
      { id: '1m', name: 'Monthly', price: '149', originalPrice: '249', perMonthPrice: '149', tag: null, checks: allTrue },
      { id: '3m', name: '3 Months', price: '299', originalPrice: '499', perMonthPrice: '100', tag: null, checks: allTrue },
      { id: '6m', name: '6 Months', price: '499', originalPrice: '799', perMonthPrice: '83', tag: null, checks: allTrue },
      { id: '12m', name: 'Yearly', price: '799', originalPrice: '1299', perMonthPrice: '67', tag: null, checks: allTrue },
      { id: '24m', name: '24 Months', price: '1200', originalPrice: '2599', perMonthPrice: '50', tag: 'BEST VALUE', checks: allTrue },
    ]
  }
};

export default function Pricing({ lang }: PricingProps) {
  const t = copy[lang];

  return (
    <section id="pricing" aria-labelledby="pricing-heading" style={{ padding: '110px 0', background: 'var(--color-surface-base)' }}>
      <div className="container-page">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
          <span className="badge badge-recommended" style={{ marginBottom: 'var(--space-4)' }}>{t.badge}</span>
          <h2 id="pricing-heading" className="section-title" style={{ marginBottom: 'var(--space-3)' }}>{t.title}</h2>
          <p className="section-subtitle" style={{ margin: '0 auto', marginBottom: '16px' }}>{t.subtitle}</p>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(0,150,109,0.10)',
            border: '1px solid rgba(0,150,109,0.25)',
            color: '#00d9a0',
            fontSize: '13px',
            fontWeight: 700,
            padding: '6px 16px',
            borderRadius: '20px',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00d9a0" strokeWidth="2.5" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
            {t.allIncluded}
          </span>
        </div>

        {/* Comparison Table */}
        <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
          <table
            role="table"
            aria-label={lang === 'bn' ? 'সাবস্ক্রিপশন তুলনা সারণি' : 'Subscription comparison table'}
            style={{
              width: '100%',
              minWidth: '700px',
              borderCollapse: 'separate',
              borderSpacing: 0,
              background: 'var(--color-surface-card)',
              border: '1px solid var(--color-border-default)',
              borderRadius: 'var(--radius-sm)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-navy)',
            }}
          >
            {/* Table Header — Plan Columns */}
            <thead>
              <tr>
                {/* Feature label column header */}
                <th style={{
                  padding: '20px 24px',
                  textAlign: 'left',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: 'var(--color-text-secondary)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  borderBottom: '1px solid var(--color-border-default)',
                  background: 'rgba(255,255,255,0.01)',
                  position: 'sticky',
                  left: 0,
                  zIndex: 2,
                }}>
                  {/* empty */}
                </th>
                {t.plans.map((plan) => {
                  const isHighlighted = plan.tag !== null;
                  return (
                    <th key={plan.id} style={{
                      padding: '20px 16px',
                      textAlign: 'center',
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
                          position: 'absolute',
                          top: '-1px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          background: 'var(--color-surface-strong)',
                          color: '#fff',
                          fontSize: '10px',
                          fontWeight: 800,
                          padding: '3px 10px',
                          borderRadius: '0 0 6px 6px',
                          letterSpacing: '0.5px',
                        }}>
                          {plan.tag}
                        </span>
                      )}
                      <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '4px' }}>
                        {plan.name}
                      </div>
                      <div style={{ fontSize: '11px', color: 'var(--color-text-tertiary)', textDecoration: 'line-through', marginBottom: '2px' }}>
                        {t.currency}{plan.originalPrice}
                      </div>
                      <div style={{ fontSize: '20px', fontWeight: 800, color: isHighlighted ? '#00d9a0' : 'var(--color-text-primary)', fontFamily: 'monospace', lineHeight: 1.2 }}>
                        {t.currency}{plan.price}
                      </div>
                      <div style={{ fontSize: '11px', color: 'var(--color-text-tertiary)', marginTop: '2px', fontFamily: 'monospace' }}>
                        {t.currency}{plan.perMonthPrice}{t.perMonth}
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>

            {/* Feature Rows */}
            <tbody>
              {t.features.map((feature, fIdx) => (
                <tr key={fIdx}>
                  <td style={{
                    padding: '14px 24px',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--color-text-secondary)',
                    borderBottom: fIdx < t.features.length - 1 ? '1px solid var(--color-border-default)' : 'none',
                    background: 'rgba(255,255,255,0.01)',
                    position: 'sticky',
                    left: 0,
                    zIndex: 1,
                  }}>
                    {feature}
                  </td>
                  {t.plans.map((plan) => {
                    const isHighlighted = plan.tag !== null;
                    const hasFeature = plan.checks[fIdx];
                    return (
                      <td key={plan.id} style={{
                        padding: '14px 16px',
                        textAlign: 'center',
                        borderBottom: fIdx < t.features.length - 1 ? '1px solid var(--color-border-default)' : 'none',
                        background: isHighlighted ? 'rgba(0,150,109,0.03)' : 'transparent',
                        borderLeft: isHighlighted ? '2px solid var(--color-surface-strong)' : 'none',
                        borderRight: isHighlighted ? '2px solid var(--color-surface-strong)' : 'none',
                      }}>
                        {hasFeature ? (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d9a0" strokeWidth="2.5" style={{ display: 'inline-block' }} aria-label="Included">
                            <path d="M20 6L9 17l-5-5"/>
                          </svg>
                        ) : (
                          <span style={{ color: 'rgba(255,255,255,0.12)', fontSize: '16px' }} aria-label="Not included">—</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>

            {/* Bottom row: CTA */}
            <tfoot>
              <tr>
                <td style={{
                  padding: '16px 24px',
                  borderTop: '1px solid var(--color-border-default)',
                  background: 'rgba(255,255,255,0.01)',
                  position: 'sticky',
                  left: 0,
                  zIndex: 1,
                }} />
                {t.plans.map((plan) => {
                  const isHighlighted = plan.tag !== null;
                  return (
                    <td key={plan.id} style={{
                      padding: '16px 16px',
                      textAlign: 'center',
                      borderTop: '1px solid var(--color-border-default)',
                      background: isHighlighted ? 'rgba(0,150,109,0.06)' : 'transparent',
                      borderLeft: isHighlighted ? '2px solid var(--color-surface-strong)' : 'none',
                      borderRight: isHighlighted ? '2px solid var(--color-surface-strong)' : 'none',
                      borderBottom: isHighlighted ? '2px solid var(--color-surface-strong)' : 'none',
                    }}>
                      <a
                        href="https://web.prostuti.bd"
                        className={isHighlighted ? 'btn btn-primary btn-sm' : 'btn btn-secondary btn-sm'}
                        style={{
                          width: '100%',
                          fontSize: '12px',
                          padding: '8px 12px',
                          minHeight: '36px',
                        }}
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
    </section>
  );
}

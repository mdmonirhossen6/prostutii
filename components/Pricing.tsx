'use client';

interface PricingProps {
  lang: 'bn' | 'en';
}

const copy = {
  bn: {
    badge: 'প্রিমিয়াম সাবস্ক্রিপশন',
    title: 'আপনার পছন্দমতো সাবস্ক্রিপশন বেছে নিন',
    subtitle: 'অফুরন্ত প্র্যাকটিস, সম্পূর্ণ প্রশ্নব্যাংক এবং আনলিমিটেড মক টেস্টের জন্য আজই প্রিমিয়াম শুরু করুন।',
    currency: '৳',
    perMonth: '/মাস',
    totalPrice: 'মোট মূল্য',
    monthlyRate: 'মাসিক হার',
    features: [
      'আনলিমিটেড MCQ প্র্যাকটিস',
      'সম্পূর্ণ প্রশ্নব্যাংক অ্যাক্সেস',
      'আনলিমিটেড মক টেস্ট',
      'AI টিউটর সাপোর্ট',
      'বিস্তারিত অ্যানালিটিক্স',
      'অ্যাডমিশন প্রেপ ট্র্যাক',
      'প্রায়োরিটি সাপোর্ট',
    ],
    plans: [
      { id: '1m', name: 'মাসিক', price: '১৪৯', originalPrice: '২৪৯', perMonthPrice: '১৪৯', tag: null, checks: [true, true, true, false, false, false, false] },
      { id: '3m', name: '৩ মাস', price: '২৯৯', originalPrice: '৪৯৯', perMonthPrice: '১০০', tag: null, checks: [true, true, true, true, false, false, false] },
      { id: '6m', name: '৬ মাস', price: '৪৯৯', originalPrice: '৭৯৯', perMonthPrice: '৮৩', tag: null, checks: [true, true, true, true, true, false, false] },
      { id: '12m', name: 'বার্ষিক', price: '৭৯৯', originalPrice: '১২৯৯', perMonthPrice: '৬৭', tag: null, checks: [true, true, true, true, true, true, false] },
      { id: '24m', name: '২৪ মাস', price: '১২০০', originalPrice: '২৫৯৯', perMonthPrice: '৫০', tag: 'সেরা মূল্য', checks: [true, true, true, true, true, true, true] },
    ]
  },
  en: {
    badge: 'Premium Subscription',
    title: 'Select Your Subscription',
    subtitle: 'Unlock unlimited practice, the full question bank, and unlimited mock tests today.',
    currency: '৳',
    perMonth: '/mo',
    totalPrice: 'Total',
    monthlyRate: 'Monthly',
    features: [
      'Unlimited MCQ Practice',
      'Full Question Bank Access',
      'Unlimited Mock Tests',
      'AI Tutor Support',
      'Detailed Analytics',
      'Admission Prep Track',
      'Priority Support',
    ],
    plans: [
      { id: '1m', name: 'Monthly', price: '149', originalPrice: '249', perMonthPrice: '149', tag: null, checks: [true, true, true, false, false, false, false] },
      { id: '3m', name: '3 Months', price: '299', originalPrice: '499', perMonthPrice: '100', tag: null, checks: [true, true, true, true, false, false, false] },
      { id: '6m', name: '6 Months', price: '499', originalPrice: '799', perMonthPrice: '83', tag: null, checks: [true, true, true, true, true, false, false] },
      { id: '12m', name: 'Yearly', price: '799', originalPrice: '1299', perMonthPrice: '67', tag: null, checks: [true, true, true, true, true, true, false] },
      { id: '24m', name: '24 Months', price: '1200', originalPrice: '2599', perMonthPrice: '50', tag: 'BEST VALUE', checks: [true, true, true, true, true, true, true] },
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
          <p className="section-subtitle" style={{ margin: '0 auto' }}>{t.subtitle}</p>
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
                    whiteSpace: 'nowrap',
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

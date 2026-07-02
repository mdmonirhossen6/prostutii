'use client';

interface PricingProps {
  lang: 'bn' | 'en';
}

const copy = {
  bn: {
    badge: 'প্রিমিয়াম সাবস্ক্রিপশন',
    title: 'আপনার পছন্দমতো সাবস্ক্রিপশন বেছে নিন',
    subtitle: 'অফুরন্ত প্র্যাকটিস, সম্পূর্ণ প্রশ্নব্যাংক এবং আনলিমিটেড মক টেস্টের জন্য আজই প্রিমিয়াম শুরু করুন।',
    promoLabel: 'প্রোমো / রেফারেল কোড',
    promoPlaceholder: 'কোড লিখুন',
    apply: 'Apply',
    currency: '৳',
    perMonth: '/ মাস',
    plans: [
      { id: '1m', name: 'মাসিক', duration: '১ মাসের জন্য', price: '১৪৯', originalPrice: '২৪৯', perMonthPrice: '১৪৯', tag: null },
      { id: '3m', name: '৩ মাস', duration: '৩ মাসের জন্য', price: '২৯৯', originalPrice: '৪৯৯', perMonthPrice: '১০০', tag: null },
      { id: '6m', name: '৬ মাস', duration: '৬ মাসের জন্য', price: '৪৯৯', originalPrice: '৭৯৯', perMonthPrice: '৮৩', tag: null },
      { id: '12m', name: 'বার্ষিক', duration: '১২ মাসের জন্য', price: '৭৯৯', originalPrice: '১২৯৯', perMonthPrice: '৬৭', tag: null },
      { id: '24m', name: '২৪ মাস', duration: '২৪ মাসের জন্য', price: '১২০০', originalPrice: '২৫৯৯', perMonthPrice: '৫০', tag: 'সেরা মূল্য' },
    ]
  },
  en: {
    badge: 'Premium Subscription',
    title: 'Select Your Subscription',
    subtitle: 'Unlock unlimited practice, the full question bank, and unlimited mock tests today.',
    promoLabel: 'Promo / Referral Code',
    promoPlaceholder: 'Enter code',
    apply: 'Apply',
    currency: '৳',
    perMonth: '/ MONTH',
    plans: [
      { id: '1m', name: 'Monthly', duration: 'for 1 month', price: '149', originalPrice: '249', perMonthPrice: '149', tag: null },
      { id: '3m', name: '3 Months', duration: 'for 3 months', price: '299', originalPrice: '499', perMonthPrice: '100', tag: null },
      { id: '6m', name: '6 Months', duration: 'for 6 months', price: '499', originalPrice: '799', perMonthPrice: '83', tag: null },
      { id: '12m', name: 'Yearly', duration: 'for 12 months', price: '799', originalPrice: '1299', perMonthPrice: '67', tag: null },
      { id: '24m', name: '24 Months', duration: 'for 24 months', price: '1200', originalPrice: '2599', perMonthPrice: '50', tag: 'BEST VALUE' },
    ]
  }
};

export default function Pricing({ lang }: PricingProps) {
  const t = copy[lang];

  return (
    <section id="pricing" aria-labelledby="pricing-heading" style={{ padding: 'var(--space-8) 0', background: 'var(--color-surface-base)' }}>
      <div className="container-page" style={{ maxWidth: '720px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
          <span className="badge badge-recommended" style={{ marginBottom: 'var(--space-4)' }}>{t.badge}</span>
          <h2 id="pricing-heading" className="section-title" style={{ marginBottom: 'var(--space-3)' }}>{t.title}</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>{t.subtitle}</p>
        </div>

        {/* Subscription List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
          {t.plans.map((plan) => {
            const isRecommended = plan.tag !== null;
            return (
              <div key={plan.id} style={{ position: 'relative' }}>
                {plan.tag && (
                  <span style={{ 
                    position: 'absolute', 
                    top: '-12px', 
                    left: '24px', 
                    background: 'var(--color-surface-strong)', 
                    color: '#fff', 
                    fontSize: 'var(--font-size-xs)', 
                    fontWeight: 800, 
                    padding: '4px var(--space-3)', 
                    borderRadius: 'var(--radius-xs)', 
                    zIndex: 10, 
                    letterSpacing: '0.5px',
                    boxShadow: 'var(--shadow-2)'
                  }}>
                    {plan.tag}
                  </span>
                )}
                <div 
                  style={{ 
                    background: isRecommended ? 'linear-gradient(135deg, rgba(0, 150, 109, 0.08) 0%, var(--color-surface-raised) 100%)' : 'var(--color-surface-card)', 
                    border: isRecommended ? '2px solid var(--color-surface-strong)' : '1px solid var(--color-border-default)', 
                    borderRadius: 'var(--radius-sm)', 
                    padding: isRecommended ? '24px var(--space-5)' : '20px var(--space-5)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    transition: 'all var(--duration-fast) var(--easing-default)',
                    boxShadow: isRecommended ? 'var(--shadow-3), var(--shadow-navy)' : 'var(--shadow-navy)',
                    transform: isRecommended ? 'scale(1.015)' : 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (!isRecommended) {
                      e.currentTarget.style.borderColor = 'rgba(0, 150, 109, 0.35)';
                      e.currentTarget.style.background = 'var(--color-surface-hover)';
                    } else {
                      e.currentTarget.style.transform = 'scale(1.025)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-1), var(--shadow-navy)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isRecommended) {
                      e.currentTarget.style.borderColor = 'var(--color-border-default)';
                      e.currentTarget.style.background = 'var(--color-surface-card)';
                    } else {
                      e.currentTarget.style.transform = 'scale(1.015)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-3), var(--shadow-navy)';
                    }
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: 'var(--font-size-h3)', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 'var(--space-1)' }}>{plan.name}</h3>
                    <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-tertiary)' }}>{plan.duration}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 'var(--font-size-h2)', fontWeight: 800, color: 'var(--color-text-primary)', lineHeight: 1, marginBottom: 'var(--space-2)' }}>
                      {t.currency}{plan.price}
                    </div>
                    <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 'var(--space-2)' }}>
                      <span style={{ textDecoration: 'line-through', color: '#ef4444' }}>{t.currency}{plan.originalPrice}</span>
                      <span>{t.currency}{plan.perMonthPrice} {t.perMonth}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

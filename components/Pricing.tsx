'use client';

interface PricingProps {
  lang: 'bn' | 'en';
}

const copy = {
  bn: {
    badge: 'প্রিমিয়াম সাবস্ক্রিপশন',
    title: 'আপনার পছন্দমতো সাবস্ক্রিপশন বেছে নিন',
    subtitle: 'অফুরন্ত প্র্যাকটিস, সম্পূর্ণ প্রশ্নব্যাংক এবং আনলিমিটেড মক টেস্টের জন্য আজই প্রিমিয়াম শুরু করুন।',
    bestValue: 'সেরা অফার',
    promoLabel: 'প্রোমো / রেফারেল কোড',
    promoPlaceholder: 'কোড লিখুন',
    apply: 'Apply',
    currency: '৳',
    perMonth: '/ মাস',
    plans: [
      { id: '1m', name: 'Monthly', duration: 'for 1 month', price: '১৪৯', originalPrice: '২৪৯', tag: null },
      { id: '3m', name: '3 Months', duration: 'for 3 months', price: '২৯৯', originalPrice: '৪৯৯', tag: null },
      { id: '6m', name: '6 Months', duration: 'for 6 months', price: '৪৯৯', originalPrice: '৭৯৯', tag: 'BEST VALUE' },
      { id: '12m', name: 'Yearly', duration: 'for 12 months', price: '৭৯৯', originalPrice: '১২৯৯', tag: 'BEST VALUE' },
      { id: '24m', name: '24 Months', duration: 'for 24 months', price: '১২০০', originalPrice: '২৫৯৯', tag: null },
    ]
  },
  en: {
    badge: 'Premium Subscription',
    title: 'Select Your Subscription',
    subtitle: 'Unlock unlimited practice, the full question bank, and unlimited mock tests today.',
    bestValue: 'BEST VALUE',
    promoLabel: 'Promo / Referral Code',
    promoPlaceholder: 'Enter code',
    apply: 'Apply',
    currency: '৳',
    perMonth: '/ MONTH',
    plans: [
      { id: '1m', name: 'Monthly', duration: 'for 1 month', price: '149', originalPrice: '249', tag: null },
      { id: '3m', name: '3 Months', duration: 'for 3 months', price: '299', originalPrice: '499', tag: null },
      { id: '6m', name: '6 Months', duration: 'for 6 months', price: '499', originalPrice: '799', tag: 'BEST VALUE' },
      { id: '12m', name: 'Yearly', duration: 'for 12 months', price: '799', originalPrice: '1299', tag: 'BEST VALUE' },
      { id: '24m', name: '24 Months', duration: 'for 24 months', price: '1200', originalPrice: '2599', tag: null },
    ]
  }
};

export default function Pricing({ lang }: PricingProps) {
  const t = copy[lang];

  return (
    <section id="pricing" aria-labelledby="pricing-heading" style={{ padding: 'var(--space-8) 0', background: 'var(--color-surface-bg)' }}>
      <div className="container-page" style={{ maxWidth: '720px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
          <span className="badge badge-recommended" style={{ marginBottom: '16px' }}>{t.badge}</span>
          <h2 id="pricing-heading" className="section-title" style={{ marginBottom: '14px' }}>{t.title}</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>{t.subtitle}</p>
        </div>

        {/* Subscription List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
          {t.plans.map((plan) => (
            <div key={plan.id} style={{ position: 'relative' }}>
              {plan.tag && (
                <span style={{ position: 'absolute', top: '-10px', left: '20px', background: '#4d6bff', color: '#fff', fontSize: '10px', fontWeight: 800, padding: '4px 10px', borderRadius: '4px', zIndex: 10, letterSpacing: '0.5px' }}>
                  {plan.tag}
                </span>
              )}
              <div 
                style={{ 
                  background: 'var(--color-surface-card)', 
                  border: plan.tag ? '1px solid #4d6bff' : '1px solid var(--color-border-default)', 
                  borderRadius: 'var(--radius-sm)', 
                  padding: '20px 24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s',
                  boxShadow: plan.tag ? '0 0 20px rgba(77,107,255,0.1)' : 'none'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '4px' }}>{plan.name}</h3>
                  <p style={{ fontSize: '12px', color: 'var(--color-text-inverse)' }}>{plan.duration}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-text-primary)', lineHeight: 1, marginBottom: '6px' }}>
                    {t.currency}{plan.price}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--color-text-inverse)' }}>
                    <span style={{ textDecoration: 'line-through', color: '#ef4444', marginRight: '6px' }}>{t.currency}{plan.originalPrice}</span>
                    {t.currency}{plan.price} {t.perMonth}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>



      </div>
    </section>
  );
}

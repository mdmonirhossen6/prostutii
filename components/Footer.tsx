'use client';

interface FooterProps {
  lang: 'bn' | 'en';
  onLangChange: (lang: 'bn' | 'en') => void;
}

const content = {
  bn: {
    tagline: 'বাংলাদেশের শিক্ষার্থীদের জন্য — সেরা পরীক্ষা প্রস্তুতি।',
    product: {
      heading: 'পণ্য',
      links: [
        { label: 'প্রশ্নব্যাংক', href: '#question-bank' },

        { label: 'মক টেস্ট', href: '#mock-tests' },
        { label: 'পারফরম্যান্স অ্যানালিটিক্স', href: '#analytics' },
        { label: 'লিডারবোর্ড', href: '#leaderboard' },
        { label: 'মূল্য পরিকল্পনা', href: '#pricing' },
      ],
    },
    company: {
      heading: 'প্রতিষ্ঠান',
      links: [
        { label: 'আমাদের সম্পর্কে', href: '#about' },
        { label: 'ব্লগ', href: '#blog' },
        { label: 'ক্যারিয়ার', href: '#careers' },
        { label: 'প্রেস', href: '#press' },
        { label: 'যোগাযোগ', href: '#contact' },
      ],
    },
    legal: {
      heading: 'আইনি',
      links: [
        { label: 'গোপনীয়তা নীতি', href: '/privacy-policy' },
        { label: 'সেবার শর্তাবলী', href: '#terms' },
        { label: 'কুকি নীতি', href: '#cookies' },
        { label: 'রিফান্ড নীতি', href: '/refund-policy' },
      ],
    },
    social: {
      heading: 'সামাজিক মাধ্যম',
    },
    copyright: '© ২০২৬ প্রস্তুতি। সর্বস্বত্ব সংরক্ষিত।',
    langToggle: 'EN',
    langLabel: 'Switch to English',
    madeWith: 'বাংলাদেশে তৈরি',
  },
  en: {
    tagline: 'For Bangladeshi students — the best exam preparation.',
    product: {
      heading: 'Product',
      links: [
        { label: 'Question Bank', href: '#question-bank' },

        { label: 'Mock Tests', href: '#mock-tests' },
        { label: 'Performance Analytics', href: '#analytics' },
        { label: 'Leaderboard', href: '#leaderboard' },
        { label: 'Pricing', href: '#pricing' },
      ],
    },
    company: {
      heading: 'Company',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Blog', href: '#blog' },
        { label: 'Careers', href: '#careers' },
        { label: 'Press', href: '#press' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    legal: {
      heading: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Terms of Service', href: '#terms' },
        { label: 'Cookie Policy', href: '#cookies' },
        { label: 'Refund Policy', href: '/refund-policy' },
      ],
    },
    social: {
      heading: 'Social',
    },
    copyright: '© 2026 Prostuti. All rights reserved.',
    langToggle: 'বাংলা',
    langLabel: 'বাংলায় পরিবর্তন করুন',
    madeWith: 'Made in Bangladesh 🇧🇩',
  },
};

const socialLinks = [
  {
    label: 'Facebook Page',
    href: 'https://www.facebook.com/prostutinow',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'Facebook Group',
    href: 'https://www.facebook.com/groups/1996383970996863/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    label: 'Telegram',
    href: 'https://t.me/prostutibd',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="22" y1="2" x2="11" y2="13"></line>
        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
      </svg>
    ),
  },
];

export default function Footer({ lang, onLangChange }: FooterProps) {
  const t = content[lang];

  return (
    <footer
      style={{
        background: 'var(--color-surface-raised)',
        borderTop: '1px solid var(--color-border-default)',
      }}
      aria-label={lang === 'bn' ? 'পেজের নিচের অংশ' : 'Page footer'}
    >
      <div className="container-page">
        {/* Top grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
            gap: '40px',
            padding: 'var(--space-7) 0 var(--space-6)',
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img 
                src="https://pub-e2c71a91f86f428982fe1b1f721d68b9.r2.dev/image/host/02-07-2026/prostuti/img_1782975909440.png" 
                alt="Prostuti Logo" 
                style={{
                  height: '36px',
                  width: 'auto',
                  display: 'block'
                }}
              />
            </div>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-inverse)', lineHeight: 1.6, maxWidth: '260px' }}>
              {t.tagline}
            </p>

            {/* Social links */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 'var(--radius-xs)',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid var(--color-border-default)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-text-inverse)',
                    transition: 'all var(--duration-fast) var(--easing-default)',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(0,150,109,0.15)';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#00d9a0';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0,150,109,0.4)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.05)';
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text-inverse)';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--color-border-default)';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Language toggle */}
            <button
              onClick={() => onLangChange(lang === 'bn' ? 'en' : 'bn')}
              aria-label={t.langLabel}
              style={{
                alignSelf: 'flex-start',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--color-border-default)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--color-text-secondary)',
                padding: '6px 14px',
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-xs)',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all var(--duration-fast) var(--easing-default)',
                minHeight: 36,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.10)';
                (e.currentTarget as HTMLButtonElement).style.color = 'var(--color-text-primary)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.05)';
                (e.currentTarget as HTMLButtonElement).style.color = 'var(--color-text-secondary)';
              }}
            >
              🌐 {t.langToggle}
            </button>
          </div>

          {/* Product links */}
          <nav aria-label={t.product.heading}>
            <h3
              style={{
                fontSize: 'var(--font-size-sm)',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                marginBottom: '16px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              {t.product.heading}
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {t.product.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--color-text-inverse)',
                      textDecoration: 'none',
                      transition: 'color var(--duration-fast) var(--easing-default)',
                      display: 'block',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text-primary)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text-inverse)'; }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company links */}
          <nav aria-label={t.company.heading}>
            <h3
              style={{
                fontSize: 'var(--font-size-sm)',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                marginBottom: '16px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              {t.company.heading}
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {t.company.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--color-text-inverse)',
                      textDecoration: 'none',
                      transition: 'color var(--duration-fast) var(--easing-default)',
                      display: 'block',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text-primary)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text-inverse)'; }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal links */}
          <nav aria-label={t.legal.heading}>
            <h3
              style={{
                fontSize: 'var(--font-size-sm)',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                marginBottom: '16px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              {t.legal.heading}
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {t.legal.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--color-text-inverse)',
                      textDecoration: 'none',
                      transition: 'color var(--duration-fast) var(--easing-default)',
                      display: 'block',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text-primary)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text-inverse)'; }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social / Contact column */}
          <div>
            <h3
              style={{
                fontSize: 'var(--font-size-sm)',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                marginBottom: '16px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              {t.social.heading}
            </h3>
            <address
              style={{
                fontStyle: 'normal',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <a
                href="https://t.me/prostutibot"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-inverse)', textDecoration: 'none', transition: 'color var(--duration-fast) var(--easing-default)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#0088cc'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text-inverse)'; }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.18-.08-.05-.19-.02-.27 0-.11.03-1.84 1.18-5.21 3.47-.49.34-.94.5-1.35.49-.45-.01-1.3-.25-1.94-.46-.78-.26-1.4-.4-1.35-.85.03-.23.36-.47.99-.71 3.88-1.69 6.47-2.8 7.76-3.34 3.69-1.54 4.45-1.81 4.94-1.82.11 0 .35.03.5.15.12.1.16.23.18.33.01.1.02.26.02.38z"/></svg>
                Telegram Support
              </a>
              <a
                href="https://wa.me/+8801836083902"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-inverse)', textDecoration: 'none', transition: 'color var(--duration-fast) var(--easing-default)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#25D366'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text-inverse)'; }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Support
              </a>
              <a
                href="mailto:prostutibdapp@gmail.com"
                style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-inverse)', textDecoration: 'none', transition: 'color var(--duration-fast) var(--easing-default)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text-inverse)'; }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                prostutibdapp@gmail.com
              </a>
              <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-inverse)', lineHeight: 1.5, marginTop: '4px' }}>
                {lang === 'bn' ? '২৪/৭ গ্রাহক সেবা' : '24/7 Customer Service'}
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid var(--color-border-default)',
            padding: '20px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-inverse)' }}>
            {t.copyright}
          </p>
          <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-inverse)' }}>
            {t.madeWith}
          </p>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}

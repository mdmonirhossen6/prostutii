'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface NavbarProps {
  lang: 'bn' | 'en';
  onLangChange: (lang: 'bn' | 'en') => void;
}

const navItems = {
  bn: [
    { label: 'প্রশ্নব্যাংক', href: '#question-bank' },
    { label: 'ফলাফল ও র‍্যাংকিং', href: '#leaderboard' },
    { label: 'মূল্য পরিকল্পনা', href: '#pricing' },
    { label: 'ব্লগ', href: '#blog' },
  ],
  en: [
    { label: 'Question Bank', href: '#question-bank' },
    { label: 'Leaderboard', href: '#leaderboard' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Blog', href: '#blog' },
  ],
};

const copy = {
  bn: { cta: 'লগইন / সাইন আপ', logo: 'প্রস্তুতি', appDownload: 'অ্যাপ ডাউনলোড' },
  en: { cta: 'Login / Sign Up', logo: 'Prostuti', appDownload: 'App Download' },
};

export default function Navbar({ lang, onLangChange }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const t = copy[lang];
  const items = navItems[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close drawer on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && drawerOpen) {
        setDrawerOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [drawerOpen]);

  // Prevent body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  const handleNavClick = () => setDrawerOpen(false);

  return (
    <>
      <nav
        aria-label="Main navigation"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? 'rgba(4,4,6,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--color-border-default)' : 'none',
          transition: 'background var(--duration-normal) var(--easing-default), backdrop-filter var(--duration-normal) var(--easing-default)',
        }}
      >
        <div
          className="container-page"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '64px',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="Prostuti - Home"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              textDecoration: 'none',
            }}
          >
            <img 
              src="https://pub-e2c71a91f86f428982fe1b1f721d68b9.r2.dev/image/host/02-07-2026/prostuti/img_1782975909440.png" 
              alt="Prostuti Logo" 
              style={{
                height: '36px',
                width: 'auto',
                display: 'block'
              }}
            />
          </Link>

          {/* Desktop nav links */}
          <ul
            role="list"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-1)',
              listStyle: 'none',
            }}
            className="nav-desktop"
          >
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  style={{
                    color: 'var(--color-text-secondary)',
                    textDecoration: 'none',
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: 500,
                    padding: 'var(--space-2) var(--space-3)',
                    borderRadius: 'var(--radius-xs)',
                    transition: 'color var(--duration-fast) var(--easing-default), background var(--duration-fast) var(--easing-default)',
                    display: 'block',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text-primary)';
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.05)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text-secondary)';
                    (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
            {/* Segmented language toggle */}
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                background: 'rgba(255,255,255,0.06)', 
                border: '1px solid var(--color-border-default)',
                borderRadius: 'var(--radius-md)', 
                padding: '2px',
                minHeight: '36px',
              }}
              role="group"
              aria-label={lang === 'bn' ? 'ভাষা পরিবর্তন করুন' : 'Change language'}
            >
              <button
                onClick={() => onLangChange('bn')}
                aria-pressed={lang === 'bn'}
                style={{
                  background: lang === 'bn' ? 'var(--color-surface-strong)' : 'transparent',
                  border: 'none',
                  borderRadius: 'calc(var(--radius-md) - 2px)',
                  color: lang === 'bn' ? '#fff' : 'var(--color-text-tertiary)',
                  padding: '4px 10px',
                  fontFamily: 'var(--font-family-primary)',
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all var(--duration-fast) var(--easing-default)',
                  minWidth: '40px',
                }}
              >
                BN
              </button>
              <button
                onClick={() => onLangChange('en')}
                aria-pressed={lang === 'en'}
                style={{
                  background: lang === 'en' ? 'var(--color-surface-strong)' : 'transparent',
                  border: 'none',
                  borderRadius: 'calc(var(--radius-md) - 2px)',
                  color: lang === 'en' ? '#fff' : 'var(--color-text-tertiary)',
                  padding: '4px 10px',
                  fontFamily: 'var(--font-family-primary)',
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all var(--duration-fast) var(--easing-default)',
                  minWidth: '40px',
                }}
              >
                EN
              </button>
            </div>

            {/* App Download Button (Demoted to Secondary outline) */}
            <a 
              href="https://github.com/prostuti/app/releases/download/download/prostuti_v_1.0.6_app-arm64-v8a-release.apk"
              className="btn btn-secondary btn-sm nav-cta-desktop"
              style={{ 
                border: '1px solid var(--color-border-default)', 
                background: 'transparent',
                display: 'flex', 
                alignItems: 'center', 
                gap: 'var(--space-2)', 
                padding: '0 var(--space-4)', 
                borderRadius: '24px',
                color: 'var(--color-text-secondary)',
                fontWeight: 500,
                transition: 'all var(--duration-fast) var(--easing-default)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                e.currentTarget.style.color = 'var(--color-text-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border-default)';
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--color-text-secondary)';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              {t.appDownload}
            </a>

            {/* CTA Login / Signup (Elevated to Primary solid) */}
            <a 
              href="https://web.prostuti.bd" 
              className="btn btn-primary btn-sm nav-cta-desktop" 
              style={{ 
                borderRadius: '24px', 
                fontWeight: 700,
                background: 'var(--color-surface-strong)',
                borderColor: 'var(--color-surface-strong)',
                color: '#fff'
              }}
            >
              {t.cta}
            </a>

            {/* Hamburger — mobile only */}
            <button
              ref={hamburgerRef}
              className="hamburger-btn"
              aria-label={drawerOpen ? 'মেনু বন্ধ করুন' : 'মেনু খুলুন'}
              aria-expanded={drawerOpen}
              aria-controls="mobile-drawer"
              onClick={() => setDrawerOpen((v) => !v)}
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid var(--color-border-default)',
                borderRadius: 'var(--radius-xs)',
                color: 'var(--color-text-primary)',
                width: 44,
                height: 44,
                display: 'none',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--space-1)',
                cursor: 'pointer',
                padding: '8px',
              }}
            >
              <span
                style={{
                  display: 'block',
                  width: 20,
                  height: 2,
                  background: 'var(--color-text-primary)',
                  borderRadius: 2,
                  transition: 'transform var(--duration-fast) var(--easing-default)',
                  transform: drawerOpen ? 'rotate(45deg) translateY(7px)' : 'none',
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: 20,
                  height: 2,
                  background: 'var(--color-text-primary)',
                  borderRadius: 2,
                  transition: 'opacity var(--duration-fast) var(--easing-default)',
                  opacity: drawerOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: 20,
                  height: 2,
                  background: 'var(--color-text-primary)',
                  borderRadius: 2,
                  transition: 'transform var(--duration-fast) var(--easing-default)',
                  transform: drawerOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        id="mobile-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 99,
          background: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(4px)',
          opacity: drawerOpen ? 1 : 0,
          pointerEvents: drawerOpen ? 'all' : 'none',
          transition: 'opacity var(--duration-normal) var(--easing-default)',
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) setDrawerOpen(false);
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: '280px',
            background: '#070a12',
            borderLeft: '1px solid var(--color-border-default)',
            padding: 'var(--space-8) var(--space-5) var(--space-6)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-2)',
            transform: drawerOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform var(--duration-normal) var(--easing-default)',
          }}
        >
          <ul role="list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleNavClick}
                  style={{
                    display: 'block',
                    padding: 'var(--space-3) var(--space-4)',
                    color: 'var(--color-text-secondary)',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: 'var(--font-size-md)',
                    borderRadius: 'var(--radius-xs)',
                    transition: 'all var(--duration-fast) var(--easing-default)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text-primary)';
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.05)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text-secondary)';
                    (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            {/* Segmented language control on mobile */}
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                background: 'rgba(255,255,255,0.06)', 
                border: '1px solid var(--color-border-default)',
                borderRadius: 'var(--radius-md)', 
                padding: '2px',
                minHeight: '44px',
              }}
              role="group"
              aria-label={lang === 'bn' ? 'ভাষা পরিবর্তন করুন' : 'Change language'}
            >
              <button
                onClick={() => { onLangChange('bn'); setDrawerOpen(false); }}
                aria-pressed={lang === 'bn'}
                style={{
                  flex: 1,
                  height: '38px',
                  background: lang === 'bn' ? 'var(--color-surface-strong)' : 'transparent',
                  border: 'none',
                  borderRadius: 'calc(var(--radius-md) - 2px)',
                  color: lang === 'bn' ? '#fff' : 'var(--color-text-tertiary)',
                  fontFamily: 'var(--font-family-primary)',
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all var(--duration-fast) var(--easing-default)',
                }}
              >
                বাংলা (BN)
              </button>
              <button
                onClick={() => { onLangChange('en'); setDrawerOpen(false); }}
                aria-pressed={lang === 'en'}
                style={{
                  flex: 1,
                  height: '38px',
                  background: lang === 'en' ? 'var(--color-surface-strong)' : 'transparent',
                  border: 'none',
                  borderRadius: 'calc(var(--radius-md) - 2px)',
                  color: lang === 'en' ? '#fff' : 'var(--color-text-tertiary)',
                  fontFamily: 'var(--font-family-primary)',
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all var(--duration-fast) var(--easing-default)',
                }}
              >
                English (EN)
              </button>
            </div>

            {/* App Download (Demoted) */}
            <a 
              href="https://github.com/prostuti/app/releases/download/download/prostuti_v_1.0.6_app-arm64-v8a-release.apk" 
              className="btn btn-secondary" 
              onClick={handleNavClick} 
              style={{ textAlign: 'center', border: '1px solid var(--color-border-default)', background: 'transparent', color: 'var(--color-text-secondary)' }}
            >
              {t.appDownload}
            </a>

            {/* Login / Register (Elevated) */}
            <a 
              href="https://web.prostuti.bd" 
              className="btn btn-primary" 
              onClick={handleNavClick} 
              style={{ textAlign: 'center', fontWeight: 700, background: 'var(--color-surface-strong)', borderColor: 'var(--color-surface-strong)', color: '#fff' }}
            >
              {t.cta}
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-cta-desktop { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}

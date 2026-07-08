'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
  bn: { 
    cta: 'লগইন / সাইন আপ', 
    logo: 'প্রস্তুতি', 
    appDownload: 'অ্যাপ ডাউনলোড',
    themeToggle: 'থিম পরিবর্তন করুন'
  },
  en: { 
    cta: 'Login / Sign Up', 
    logo: 'Prostuti', 
    appDownload: 'App Download',
    themeToggle: 'Toggle theme'
  },
};

export default function Navbar({ lang, onLangChange }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const t = copy[lang];
  const items = navItems[lang];
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  // Initialize theme from document attribute (populated by blocking script in head)
  useEffect(() => {
    const initialTheme = document.documentElement.getAttribute('data-theme') as 'light' | 'dark' || 'dark';
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight Active Section using IntersectionObserver
  useEffect(() => {
    const sections = ['question-bank', 'leaderboard', 'pricing'];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(`#${id}`);
            }
          });
        },
        {
          rootMargin: '-120px 0px -70% 0px',
        }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
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
          background: scrolled ? 'var(--color-navbar-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--color-border-default)' : '1px solid transparent',
          transition: 'background 200ms ease-out, backdrop-filter 200ms ease-out, border-color 200ms ease-out',
        }}
      >
        {/* Integrated Scroll Progress Bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: '2px',
            width: `${scrollProgress}%`,
            background: 'linear-gradient(90deg, var(--color-surface-strong) 0%, #00d9a0 100%)',
            zIndex: 101,
            transition: 'width 0.1s ease-out',
            opacity: scrolled ? 1 : 0,
          }}
        />

        <div
          className="container-page"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: scrolled ? '56px' : '64px',
            transition: 'height 200ms ease-out',
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
              mixBlendMode: theme === 'light' ? 'multiply' : 'screen'
            }}
          >
            <Image 
              src="https://pub-e2c71a91f86f428982fe1b1f721d68b9.r2.dev/image/host/02-07-2026/prostuti/img_1782975909440.png" 
              alt="Prostuti Logo" 
              width={120}
              height={42}
              priority
              style={{
                height: '42px',
                width: 'auto',
                display: 'block',
                filter: theme === 'light' ? 'invert(1) hue-rotate(180deg)' : 'none'
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
            {items.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    style={{
                      color: isActive ? 'var(--color-surface-strong)' : 'var(--color-text-secondary)',
                      textDecoration: 'none',
                      fontSize: 'var(--font-size-sm)',
                      fontWeight: isActive ? 700 : 500,
                      padding: 'var(--space-2) var(--space-3)',
                      borderRadius: 'var(--radius-xs)',
                      background: isActive ? 'rgba(0, 150, 109, 0.08)' : 'transparent',
                      transition: 'all var(--duration-fast) var(--easing-default)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text-primary)';
                        (e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-overlay-5)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text-secondary)';
                        (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                      }
                    }}
                  >
                    {isActive && (
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: 'var(--color-surface-strong)',
                          display: 'inline-block',
                        }}
                      />
                    )}
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right side actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
            {/* Globe Language Toggle Button */}
            <button
              onClick={() => onLangChange(lang === 'bn' ? 'en' : 'bn')}
              aria-label={lang === 'bn' ? 'ভাষা পরিবর্তন করুন' : 'Change language'}
              title={lang === 'bn' ? 'Switch to English' : 'বাংলায় পরিবর্তন করুন'}
              style={{
                background: 'var(--color-nav-hover-bg)',
                border: '1px solid var(--color-border-default)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--color-text-primary)',
                minHeight: '36px',
                padding: '0 var(--space-3)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                transition: 'all var(--duration-fast) var(--easing-default)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-surface-strong)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border-default)';
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ opacity: 0.85 }}>
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <path d="M2 12h20" />
              </svg>
              <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, letterSpacing: '0.5px' }}>
                {lang === 'bn' ? 'EN' : 'বাং'}
              </span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={t.themeToggle}
              style={{
                background: 'var(--color-nav-hover-bg)',
                border: '1px solid var(--color-border-default)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--color-text-primary)',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all var(--duration-fast) var(--easing-default)',
                padding: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-surface-strong)';
                e.currentTarget.style.color = 'var(--color-surface-strong)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border-default)';
                e.currentTarget.style.color = 'var(--color-text-primary)';
              }}
            >
              {theme === 'dark' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: 'var(--color-accent-yellow)' }}>
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: 'var(--color-link)' }}>
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              )}
            </button>

            {/* App Download Button (Pop accent outline) */}
            <a 
              href="https://github.com/prostuti/app/releases/download/download/prostuti_v_1.0.6_app-arm64-v8a-release.apk"
              className="btn btn-secondary btn-sm nav-cta-desktop"
              style={{ 
                border: '1px solid var(--color-badge-green-border)', 
                background: 'var(--color-badge-green-bg)',
                display: 'flex', 
                alignItems: 'center', 
                gap: 'var(--space-2)', 
                padding: '0 var(--space-4)', 
                borderRadius: '24px',
                color: 'var(--color-badge-green-text)',
                fontWeight: 700,
                transition: 'all var(--duration-fast) var(--easing-default)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--color-badge-green-border)';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 217, 160, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--color-badge-green-bg)';
                e.currentTarget.style.boxShadow = 'none';
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
                color: 'var(--color-text-pure)',
                transition: 'all var(--duration-fast) var(--easing-default)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 217, 160, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
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
                background: 'var(--color-nav-hover-bg)',
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
            background: 'var(--color-surface-card)',
            borderLeft: '1px solid var(--color-border-default)',
            padding: 'var(--space-8) var(--space-5) var(--space-6)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-2)',
            transform: drawerOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform var(--duration-normal) var(--easing-default)',
            overflowY: 'auto',
          }}
        >
          <ul role="list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
            {items.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={handleNavClick}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: 'var(--space-3) var(--space-4)',
                      color: isActive ? 'var(--color-surface-strong)' : 'var(--color-text-secondary)',
                      background: isActive ? 'rgba(0, 150, 109, 0.08)' : 'transparent',
                      textDecoration: 'none',
                      fontWeight: isActive ? 700 : 500,
                      fontSize: 'var(--font-size-md)',
                      borderRadius: 'var(--radius-xs)',
                      transition: 'all var(--duration-fast) var(--easing-default)',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text-primary)';
                        (e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-overlay-5)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text-secondary)';
                        (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                      }
                    }}
                  >
                    {isActive && (
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: 'var(--color-surface-strong)',
                          display: 'inline-block',
                        }}
                      />
                    )}
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            {/* Segmented language control on mobile */}
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                background: 'var(--color-nav-hover-bg)', 
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

            {/* Theme Toggle row on mobile */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'var(--color-nav-hover-bg)',
                border: '1px solid var(--color-border-default)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-2) var(--space-4)',
                minHeight: '44px',
              }}
            >
              <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
                {lang === 'bn' ? 'ডার্ক থিম' : 'Dark Theme'}
              </span>
              <button
                onClick={toggleTheme}
                aria-label={t.themeToggle}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--color-text-primary)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  padding: 0,
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: 700,
                }}
              >
                {theme === 'dark' ? (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: 'var(--color-accent-yellow)' }}>
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                    </svg>
                    <span>{lang === 'bn' ? 'লাইট করুন' : 'Light'}</span>
                  </>
                ) : (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: 'var(--color-link)' }}>
                      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                    </svg>
                    <span>{lang === 'bn' ? 'ডার্ক করুন' : 'Dark'}</span>
                  </>
                )}
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
              style={{ textAlign: 'center', fontWeight: 700, background: 'var(--color-surface-strong)', borderColor: 'var(--color-surface-strong)', color: 'var(--color-text-pure)' }}
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

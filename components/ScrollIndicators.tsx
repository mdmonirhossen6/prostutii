'use client';

import { useState, useEffect } from 'react';

interface ScrollIndicatorsProps {
  lang: 'bn' | 'en';
}

export default function ScrollIndicators({ lang }: ScrollIndicatorsProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showSubNav, setShowSubNav] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // 1. Scroll Progress Calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // 2. Show/Hide Sticky Sub-Nav (when scrolled past hero section)
      const heroElement = document.getElementById('hero');
      const heroHeight = heroElement ? heroElement.offsetHeight : 600;
      setShowSubNav(window.scrollY > heroHeight - 64);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3. Highlight Active Section using IntersectionObserver
  useEffect(() => {
    const sections = ['question-bank', 'pricing', 'faq'];
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

  const links = lang === 'bn' ? [
    { label: 'বৈশিষ্ট্য', href: '#question-bank' },
    { label: 'মূল্য পরিকল্পনা', href: '#pricing' },
    { label: 'প্রশ্নোত্তর', href: '#faq' }
  ] : [
    { label: 'Features', href: '#question-bank' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' }
  ];

  return (
    <>
      {/* Scroll Progress Bar at the top of the viewport */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '3px',
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, var(--color-surface-strong) 0%, #00d9a0 100%)',
          zIndex: 110,
          transition: 'width 0.1s ease-out',
        }}
      />

      {/* Sticky Secondary Nav Bar */}
      <div
        style={{
          position: 'fixed',
          top: '64px',
          left: 0,
          right: 0,
          height: '48px',
          background: 'var(--color-surface-raised)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--color-border-default)',
          zIndex: 90,
          transform: showSubNav ? 'translateY(0)' : 'translateY(-100%)',
          opacity: showSubNav ? 1 : 0,
          transition: 'transform var(--duration-normal) var(--easing-default), opacity var(--duration-normal) var(--easing-default)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-4)',
            maxWidth: '1200px',
            width: '100%',
            padding: '0 var(--space-6)',
          }}
        >
          {links.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#00d9a0' : 'var(--color-text-secondary)',
                  textDecoration: 'none',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-md)',
                  background: isActive ? 'rgba(0,150,109,0.1)' : 'transparent',
                  transition: 'all var(--duration-fast) var(--easing-default)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text-primary)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text-secondary)';
                  }
                }}
              >
                {isActive && (
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#00d9a0',
                      display: 'inline-block',
                    }}
                  />
                )}
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </>
  );
}

'use client';

import { useEffect, useRef, useCallback } from 'react';

/**
 * Centralized scroll-reveal hook using IntersectionObserver.
 * Adds `.is-visible` to `.reveal` elements when they enter the viewport.
 * Supports staggered children via `data-reveal-stagger` attribute.
 * 
 * Usage:
 *   const revealRef = useScrollReveal();
 *   <div ref={revealRef}> ... </div>
 * 
 * The hook observes the container. Any child with `.reveal` will animate
 * when the container enters the viewport. Children with `data-reveal-delay`
 * get a stagger delay applied.
 */
export function useScrollReveal(threshold = 0.15) {
  const containerRef = useRef<HTMLElement | null>(null);
  const observedRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || observedRef.current) return;

    // Check for reduced-motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Immediately reveal everything
      container.querySelectorAll('.reveal').forEach((el) => {
        el.classList.add('is-visible');
      });
      if (container.classList.contains('reveal')) {
        container.classList.add('is-visible');
      }
      observedRef.current = true;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.add('is-visible');

            // Apply stagger delays to children with data-reveal-delay
            const staggerItems = target.querySelectorAll('[data-reveal-delay]');
            staggerItems.forEach((item) => {
              const delay = (item as HTMLElement).dataset.revealDelay;
              if (delay) {
                (item as HTMLElement).style.transitionDelay = `${delay}ms`;
              }
            });

            // Also reveal staggered children that are `.reveal` themselves
            const revealChildren = target.querySelectorAll('.reveal:not(.is-visible)');
            revealChildren.forEach((child) => {
              child.classList.add('is-visible');
            });

            observer.unobserve(target);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    // Observe the container itself if it has .reveal
    if (container.classList.contains('reveal')) {
      observer.observe(container);
    }

    // Also observe all .reveal children individually for finer control
    container.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    observedRef.current = true;

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const setRef = useCallback((node: HTMLElement | null) => {
    containerRef.current = node;
  }, []);

  return setRef;
}

/**
 * Hook to animate a number counting up from 0 to target.
 * Uses ease-out timing for a decelerating feel.
 * Respects prefers-reduced-motion.
 */
export function useCountUp(
  target: number,
  duration = 800,
  isVisible: boolean
) {
  const frameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isVisible) return;
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    startTimeRef.current = null;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [target, duration, isVisible]);
}

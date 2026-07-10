'use client';

import { useEffect, useRef } from 'react';

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    // Config
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    const particleCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 20 : 40;
    
    // We update colors dynamically but here are base defaults
    const getColors = () => {
      const isLightTheme = document.documentElement.getAttribute('data-theme') === 'light';
      return isLightTheme 
        ? ['rgba(0, 135, 98, 0.2)', 'rgba(37, 99, 235, 0.15)', 'rgba(124, 58, 237, 0.15)'] // Darker/visible for light mode
        : ['rgba(0, 150, 109, 0.4)', 'rgba(77, 107, 255, 0.3)', 'rgba(139, 92, 246, 0.3)']; // Brighter for dark mode
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.size = Math.random() * 2.5 + 0.5; // Small stars/particles
        this.speedX = (Math.random() - 0.5) * 0.3; // Very slow
        this.speedY = (Math.random() - 0.5) * 0.3;
        
        const colors = getColors();
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update(w: number, h: number) {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around edges
        if (this.x < 0) this.x = w;
        if (this.x > w) this.x = 0;
        if (this.y < 0) this.y = h;
        if (this.y > h) this.y = 0;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        // Add subtle glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fill();
        // Reset shadow for performance
        ctx.shadowBlur = 0;
      }
    }

    const resize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Re-init particles on resize to ensure full coverage
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Subtle connection lines (optional, maybe too complex, keeping it just glowing dots for now to match "হালকা, স্লো-মুভিং পার্টিকল অ্যানিমেশন")
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(canvas.width, canvas.height);
        particles[i].draw(ctx);
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    // Observers to watch theme changes to adjust particle colors
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          // Re-initialize particles to grab new colors
          resize();
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    window.addEventListener('resize', resize);
    
    // Init
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0, // Put it behind the content but above background
        opacity: 0.6 // Keep it subtle
      }}
      aria-hidden="true"
    />
  );
}

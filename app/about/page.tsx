'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

// Deterministic geometric avatar generator using a simple hash
function GeometricAvatar({ name, email }: { name: string; email: string }) {
  const seedStr = name + email;
  let hash = 0;
  for (let i = 0; i < seedStr.length; i++) {
    hash = seedStr.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h = Math.abs(hash);

  // Generate grid patterns based on hash
  const r1 = (h % 30) + 10;
  const r2 = ((h >> 2) % 30) + 10;
  const rotate1 = (h >> 4) % 360;
  const rotate2 = ((h >> 6) % 360) + 45;

  const color1 = (h % 2) === 0 ? 'var(--color-surface-strong)' : 'var(--color-accent-purple)';
  const color2 = (h % 2) === 0 ? 'var(--color-accent-purple)' : 'var(--color-surface-strong)';

  return (
    <div style={{ position: 'relative', width: '80px', height: '80px', margin: '0 auto 16px', overflow: 'hidden', borderRadius: '8px', background: '#0f1524', border: '1px solid var(--color-border-default)' }}>
      <svg width="100%" height="100%" viewBox="0 0 100 100" style={{ display: 'block' }}>
        {/* Animated Gradient Background */}
        <defs>
          <linearGradient id={`grad-${h}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0d1225" />
          </linearGradient>
        </defs>
        <rect width="100" height="100" fill={`url(#grad-${h})`} />

        {/* Floating animated geometric elements */}
        <g style={{ transformOrigin: '50px 50px', animation: 'calmRotate 20s linear infinite' }}>
          <rect
            x="25"
            y="25"
            width="50"
            height="50"
            fill="none"
            stroke={color1}
            strokeWidth="3"
            strokeDasharray="4 4"
            style={{ transform: `rotate(${rotate1}deg)`, transformOrigin: '50px 50px' }}
          />
          <circle
            cx="50"
            cy="50"
            r={r1}
            fill="none"
            stroke={color2}
            strokeWidth="2.5"
            opacity="0.75"
          />
          <polygon
            points="50,15 85,80 15,80"
            fill="none"
            stroke={color1}
            strokeWidth="2"
            opacity="0.4"
            style={{ transform: `rotate(${rotate2}deg)`, transformOrigin: '50px 50px' }}
          />
        </g>
      </svg>
      <style jsx>{`
        @keyframes calmRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

const copy = {
  bn: {
    metaTitle: 'আমাদের সম্পর্কে | প্রস্তুতি',
    missionTitle: 'লক্ষ্য ও উদ্দেশ্য',
    missionDesc: 'প্রস্তুতির মূল লক্ষ্য হলো বাংলাদেশের প্রতিটি প্রান্তে শিক্ষার্থীদের জন্য প্রযুক্তিনির্ভর, সহজলভ্য এবং কার্যকর পরীক্ষার প্রস্তুতি নিশ্চিত করা। বোর্ড পরীক্ষা থেকে শুরু করে বিশ্ববিদ্যালয়ের কঠিনতম ভর্তি যুদ্ধ — প্রতিটি পদক্ষেপে শিক্ষার্থীদের পাশে থেকে সাফল্যের পথ সুগম করাই আমাদের উদ্দেশ্য।',
    pillarsTitle: 'আমাদের মূল ভিত্তি',
    pillars: [
      { title: 'বিজ্ঞানসম্মত অনুশীলন', desc: 'ডাটা-ড্রিভেন কোয়ালিটি কন্ট্রোল এবং বিশ্লেষণ নির্ভর প্রশ্নব্যাংক যা পড়াশোনাকে করে তোলে সুনির্দিষ্ট।' },
      { title: 'সাশ্রয়ী অ্যাক্সেস', desc: 'ব্যয়বহুল কোচিং সেন্টারের বিকল্প হিসেবে অত্যন্ত সাশ্রয়ী মূল্যে সর্বোচ্চ মানের রিসোর্স সবার কাছে পৌঁছে দেওয়া।' },
      { title: 'গেমিফাইড মোটিভেশন', desc: 'দৈনিক গোল, স্ট্রিক কাউন্ট ও লিগ র‍্যাংকিংয়ের মাধ্যমে প্রস্তুতিকে একঘেয়েমিমুক্ত রাখা।' }
    ],
    tractionTitle: 'প্রস্তুতির অগ্রগতি',
    traction: [
      { value: '২০০,০০০+', label: 'প্রশ্নসমূহ' },
      { value: '৪টি', label: 'পরীক্ষার ট্র্যাক' },
      { value: '৯৮%', label: 'দৈনিক লক্ষ্য সম্পন্নতা' }
    ],
    teamTitle: 'আমাদের টিম',
    team: [
      {
        name: "Saruar Abedin",
        role: "Founder, Prostuti",
        facebook: "https://www.facebook.com/SaruarDU",
        email: "saruar.du105@gmail.com",
      },
      {
        name: "Monir Hossen",
        role: "CEO, Prostuti",
        facebook: "https://www.facebook.com/mdmonirhossen007/",
        email: "contract.monir.hossen@gmail.com",
      }
    ]
  },
  en: {
    metaTitle: 'About Us | Prostuti',
    missionTitle: 'Mission & Vision',
    missionDesc: 'Our mission is to democratize high-quality, tech-enabled exam preparation for every student in Bangladesh. From board exams to varsity admissions, we aim to streamline the study path with personalized analytics and high-yield resources.',
    pillarsTitle: 'Core Pillars',
    pillars: [
      { title: 'Scientific Practice', desc: 'Data-driven quality control and detailed analytics that focus on weakness tracking.' },
      { title: 'Affordable Access', desc: 'Premium, institutional-quality practice assets made accessible at a fraction of traditional costs.' },
      { title: 'Gamified Motivation', desc: 'Daily practice targets, streak tracking, and live ranking leagues to eliminate burnouts.' }
    ],
    tractionTitle: 'Real-Time Progress',
    traction: [
      { value: '200,000+', label: 'Questions Compiled' },
      { value: '4 Tracks', label: 'Exam Tracks Active' },
      { value: '98%', label: 'Daily Goal Rate' }
    ],
    teamTitle: 'Meet the Team',
    team: [
      {
        name: "Saruar Abedin",
        role: "Founder, Prostuti",
        facebook: "https://www.facebook.com/SaruarDU",
        email: "saruar.du105@gmail.com",
      },
      {
        name: "Monir Hossen",
        role: "CEO, Prostuti",
        facebook: "https://www.facebook.com/mdmonirhossen007/",
        email: "contract.monir.hossen@gmail.com",
      }
    ]
  }
};

export default function AboutPage() {
  const [lang, setLang] = useState<'bn' | 'en'>('bn');
  const t = copy[lang];

  return (
    <>
      <Navbar lang={lang} onLangChange={setLang} />
      
      <main style={{ paddingTop: '120px', paddingBottom: '80px', background: 'var(--color-surface-base)', minHeight: '100vh' }}>
        <div className="container-page" style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
          
          {/* Mission & Vision */}
          <section id="mission" style={{ padding: 0 }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <span className="badge badge-green" style={{ marginBottom: '16px' }}>{t.missionTitle}</span>
              <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '24px', letterSpacing: '-0.5px' }}>
                {t.metaTitle.split(' | ')[0]}
              </h1>
              <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                {t.missionDesc}
              </p>
            </div>
          </section>

          {/* Core Pillars */}
          <section id="pillars" style={{ padding: 0 }}>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-text-primary)', textAlign: 'center', marginBottom: '32px' }}>
              {t.pillarsTitle}
            </h2>
            <div className="pillars-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              {t.pillars.map((pillar, i) => (
                <div 
                  key={i} 
                  style={{ 
                    background: 'var(--color-surface-card)', 
                    border: '1px solid var(--color-border-default)', 
                    borderRadius: '8px', 
                    padding: '24px' 
                  }}
                >
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '12px' }}>
                    {pillar.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Traction Section */}
          <section id="traction" style={{ padding: '40px 0', borderTop: '1px solid var(--color-border-default)', borderBottom: '1px solid var(--color-border-default)' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-text-primary)', textAlign: 'center', marginBottom: '32px' }}>
              {t.tractionTitle}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', textAlign: 'center' }} className="traction-grid">
              {t.traction.map((stat, i) => (
                <div key={i}>
                  <div style={{ fontSize: '36px', fontWeight: 800, color: 'var(--color-surface-strong)', fontFamily: 'monospace', letterSpacing: '-1px' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginTop: '8px' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section id="team" style={{ padding: 0 }}>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-text-primary)', textAlign: 'center', marginBottom: '40px' }}>
              {t.teamTitle}
            </h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}>
              {t.team.map((member, i) => (
                <div 
                  key={i} 
                  style={{ 
                    background: 'var(--color-surface-card)', 
                    border: '1px solid var(--color-border-default)', 
                    borderRadius: '8px', 
                    padding: '32px',
                    width: '280px',
                    textAlign: 'center',
                    boxShadow: 'var(--shadow-navy)'
                  }}
                >
                  <GeometricAvatar name={member.name} email={member.email} />
                  
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '4px' }}>
                    {member.name}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--color-text-tertiary)', marginBottom: '20px' }}>
                    {member.role}
                  </p>

                  {/* Social & Contact Icons */}
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
                    <a 
                      href={member.facebook} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label={`${member.name} Facebook`}
                      style={{ color: 'var(--color-text-inverse)', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#3b5998'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-inverse)'}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                      </svg>
                    </a>
                    <a 
                      href={`mailto:${member.email}`} 
                      aria-label={`${member.name} Email`}
                      style={{ color: 'var(--color-text-inverse)', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-surface-strong)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-inverse)'}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer lang={lang} onLangChange={setLang} />

      <style jsx>{`
        @media (max-width: 768px) {
          .pillars-grid, .traction-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </>
  );
}

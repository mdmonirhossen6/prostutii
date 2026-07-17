'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import BoardMarquee from '@/components/BoardMarquee';
import FeaturesGrid from '@/components/FeaturesGrid';
import QuestionBank from '@/components/QuestionBank';
import HowItWorks from '@/components/HowItWorks';
import MockTestWidget from '@/components/MockTestWidget';
import Gamification from '@/components/Gamification';
import AIShowcase from '@/components/AIShowcase';
import QuizDemo from '@/components/QuizDemo';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import CTABand from '@/components/CTABand';

import Footer from '@/components/Footer';
import { usePersistentLang } from '@/hooks/usePersistentLang';

export default function HomePage() {
  const [lang, setLang] = usePersistentLang('bn');

  return (
    <>
      <a
        href="#main-content"
        style={{ position: 'absolute', top: '-100px', left: '16px', background: 'var(--color-surface-strong)', color: 'var(--color-text-pure)', padding: '12px 24px', borderRadius: 'var(--radius-xs)', fontWeight: 700, zIndex: 9999, textDecoration: 'none', transition: 'top 0.2s' }}
        onFocus={(e) => { (e.currentTarget as HTMLAnchorElement).style.top = '16px'; }}
        onBlur={(e) => { (e.currentTarget as HTMLAnchorElement).style.top = '-100px'; }}
      >
        {lang === 'bn' ? 'মূল বিষয়বস্তুতে যান' : 'Skip to main content'}
      </a>

      <Navbar lang={lang} onLangChange={setLang} />

      <main id="main-content">
        <Hero lang={lang} />
        <BoardMarquee lang={lang} />
        <StatsBar lang={lang} />
        <QuestionBank lang={lang} />
        <FeaturesGrid lang={lang} />
        <HowItWorks lang={lang} />
        <Gamification lang={lang} />
        <MockTestWidget lang={lang} />
        <AIShowcase lang={lang} />
        <QuizDemo lang={lang} />
        <Testimonials lang={lang} />
        <Pricing lang={lang} />
        <FAQ lang={lang} />
        <CTABand lang={lang} />

      </main>

      <Footer lang={lang} onLangChange={setLang} />
    </>
  );
}

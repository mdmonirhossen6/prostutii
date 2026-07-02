'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

interface Article {
  id: number;
  track: 'bn' | 'en';
  category: string;
  title: string;
  summary: string;
  body: string;
  date: string;
  readTime: string;
}

const articlesData: Record<string, Article[]> = {
  bn: [
    {
      id: 1,
      track: 'bn',
      category: 'HSC Science',
      title: 'HSC ২০২৬: বিগত বছরের বোর্ড প্রশ্নের প্যাটার্ন বিশ্লেষণ ও অধ্যায়ভিত্তিক প্রস্তুতি পরিকল্পনা',
      summary: 'বিগত বছরগুলোর বোর্ড পরীক্ষার প্রশ্ন বিশ্লেষণ করলে দেখা যায় যে পদার্থবিজ্ঞান ১ম ও ২য় পত্রের নির্দিষ্ট কিছু অধ্যায় থেকে প্রতি বছর গড়ে [INSERT_VERIFIED_STAT] টি সৃজনশীল প্রশ্ন অবশ্যই থাকে। প্রস্তুতি গোছাতে জেনে নিন সঠিক কৌশল।',
      date: '৩ জুলাই, ২০২৬',
      readTime: '৫ মিনিট পড়ার সময়',
      body: `বোর্ড পরীক্ষার প্রস্তুতিকে নিখুঁত করতে বিগত বছরের প্রশ্ন বিশ্লেষণের কোনো বিকল্প নেই।

১. পদার্থবিজ্ঞান ১ম পত্র:
গত ৫ বছরের বোর্ড পরীক্ষার তথ্য অনুযায়ী, গতিবিদ্যা ও নিউটনীয় বলবিদ্যা অধ্যায় থেকে প্রতি বছর গড়ে [INSERT_VERIFIED_STAT] টি সৃজনশীল প্রশ্ন আসে। বিশেষ করে প্রাসের গতি, কৌণিক ভরবেগ এবং ঘর্ষণ বল সংক্রান্ত গাণিতিক সমস্যাগুলো সবচেয়ে গুরুত্বপূর্ণ।

২. চল তড়িৎ ও স্থির তড়িৎ:
তড়িৎ বিজ্ঞানের ক্ষেত্রে কার্শফের সূত্র ও হুইটস্টোন ব্রিজের ম্যাথ সবচেয়ে বেশিবার রিপিট হয়েছে। বোর্ড প্রশ্নব্যাংকের ডেটা অনুযায়ী, এই অংশ থেকে প্রতি বছর অন্তত [INSERT_VERIFIED_STAT] সেট প্রশ্ন সাজানো হয়।

পরিকল্পনা:
- প্রথমে প্রতিটি অধ্যায়ের গাণিতিক সূত্রগুলোর একটি সংক্ষিপ্ত নোট তৈরি করুন।
- বিগত বছরগুলোর বোর্ড প্রশ্নের টাইপ-ভিত্তিক ম্যাথ সলভ করুন।
- [INSERT_VERIFIED_STAT] পার্সেন্টাইল নির্ভুলতা নিশ্চিত করতে নিয়মিত টাইমার ধরে মডেল টেস্ট দিন।`
    },
    {
      id: 2,
      track: 'bn',
      category: 'Engineering / Varsity',
      title: 'বুয়েট ও ভার্সিটি ভর্তি গণিত: প্রশ্নব্যাংক অনুযায়ী সবচেয়ে বেশি আসা টপিকের র্যাংকিং',
      summary: 'বুয়েট ও ঢাকা বিশ্ববিদ্যালয় ভর্তি পরীক্ষার বিগত ২০ বছরের গণিত প্রশ্নব্যাংক পর্যালোচনা করলে দেখা যায় যে ক্যালকুলাস এবং বিন্যাস-সমাবেশ টপিক দুটি থেকে সর্বোচ্চ সংখ্যক প্রশ্ন এসেছে।',
      date: '১ জুলাই, ২০২৬',
      readTime: '৭ মিনিট পড়ার সময়',
      body: `ইঞ্জিনিয়ারিং ও ভার্সিটি ভর্তি পরীক্ষায় গণিত অংশটি অত্যন্ত প্রতিযোগিতাপূর্ণ। প্রশ্নব্যাংকের ডেটা অনুযায়ী সর্বাধিক আসা টপিকগুলোর র্যাংকিং নিচে আলোচনা করা হলো:

১. ক্যালকুলাস (Calculus):
ভর্তি পরীক্ষায় গণিত অংশের প্রায় [INSERT_VERIFIED_STAT]% প্রশ্নই আসে ক্যালকুলাস থেকে। এর মধ্যে অন্তরীকরণের ক্ষেত্রে সীমা (Limits) এবং পর্যায়ক্রমিক অন্তরীকরণ, এবং যোগজীকরণের ক্ষেত্রে নির্দিষ্ট যোগজ ও ক্ষেত্রফল নির্ণয়ের প্রশ্ন সবচেয়ে বেশি দেখা যায়।

২. বিন্যাস ও সমাবেশ (Permutations & Combinations):
শব্দ গঠন এবং সংখ্যার বিন্যাস সম্পর্কিত প্রশ্নগুলো প্রতি বছরই ইঞ্জিনিয়ারিং ভর্তি পরীক্ষায় রিপিট হয়ে থাকে। বিগত ২০ বছরে বুয়েটে এই অংশ থেকে মোট [INSERT_VERIFIED_STAT] টি লিখিত প্রশ্ন এসেছে।

পরামর্শ:
- ক্যালকুলাসের শর্টকাট টেকনিক শেখার আগে মূল নিয়মের বেসিক ক্লিয়ার করুন।
- ইঞ্জিনিয়ারিং ভর্তি পরীক্ষার জন্য রিটেন প্রশ্নব্যাংক অন্তত ২ বার সম্পূর্ণ সলভ করুন।`
    },
    {
      id: 3,
      track: 'bn',
      category: 'Medical Admission',
      title: 'মেডিকেল ভর্তি পরীক্ষা: প্রশ্নব্যাংকের ডেটা অনুযায়ী হাই-প্রায়োরিটি অধ্যায়সমূহ',
      summary: 'মেডিকেল ভর্তি পরীক্ষায় জীববিজ্ঞান অংশ অত্যন্ত গুরুত্বপূর্ণ। বিগত বছরগুলোর প্রশ্নব্যাংকের ডেটা অনুযায়ী উদ্ভিদবিজ্ঞান ও প্রাণিবিজ্ঞানের নির্দিষ্ট কিছু অধ্যায় থেকে সবচেয়ে বেশি প্রশ্ন আসে।',
      date: '২৮ জুন, ২০২৬',
      readTime: '৬ মিনিট পড়ার সময়',
      body: `মেডিকেল ভর্তি পরীক্ষায় সাফল্য পেতে জীববিজ্ঞানের হাই-প্রায়োরিটি অধ্যায়গুলো চিহ্নিত করে পড়া জরুরি।

১. মানব শারীরতত্ত্ব (Human Physiology):
রক্ত ও সংবহন, চলন ও অঙ্গচালনা এবং সমন্বয় ও নিয়ন্ত্রণ অধ্যায়গুলো থেকে প্রতি বছর গড়ে [INSERT_VERIFIED_STAT] টি প্রশ্ন থাকে। হৃদপিণ্ডের গঠন, বিভিন্ন কপাটিকার কাজ এবং রক্তের উপাদান সম্পর্কিত চার্টগুলো অত্যন্ত গুরুত্বপূর্ণ।

২. জিনতত্ত্ব ও বিবর্তন (Genetics):
মেন্ডেলের সূত্রের ব্যতিক্রম ও জিনগত রোগসমূহ (যেমন- বর্ণান্ধতা, হিমোফিলিয়া) থেকে বিগত বছরগুলোতে মোট [INSERT_VERIFIED_STAT] বার প্রশ্ন এসেছে।

পরামর্শ:
- মূল বইয়ের প্রতি লাইনের গুরুত্বপূর্ণ তথ্যগুলো হাইলাইট করে পড়ুন।
- অধ্যায়ভিত্তিক ছক ও পার্থক্যগুলো বারবার রিভিশন দিন।
- মেডিকেল ভর্তি পরীক্ষার প্রশ্নব্যাংকের জিকে ও ইংরেজি নিয়মিত প্র্যাকটিস করুন।`
    }
  ],
  en: [
    {
      id: 1,
      track: 'en',
      category: 'HSC Science',
      title: 'HSC 2026: Board Exam Question Pattern Analysis & Chapter Prep Guidelines',
      summary: 'Analyzing past board papers reveals that certain chapters in Physics Papers 1 & 2 consistently yield [INSERT_VERIFIED_STAT] creative questions. Build your roadmap today.',
      date: 'July 3, 2026',
      readTime: '5 min read',
      body: `Analyzing previous board questions is the most effective way to optimize your HSC preparation.

1. Physics Paper 1:
Based on past 5 years of board data, chapters like Dynamics and Newtonian Mechanics yield an average of [INSERT_VERIFIED_STAT] CQ sets per year. Focus heavily on projectile motion, angular momentum, and friction calculations.

2. Current Electricity & Electrostatics:
For electricity concepts, Kirhhoff's laws and Wheatstone bridge problems are highly repetitive. Board data indicates at least [INSERT_VERIFIED_STAT] sets of questions originate from this core area.

Roadmap:
- Create formula cheat sheets for every chapter.
- Solve past board questions topic-wise.
- Target an accuracy percentage of [INSERT_VERIFIED_STAT]% by taking timed tests.`
    },
    {
      id: 2,
      track: 'en',
      category: 'Engineering / Varsity',
      title: 'BUET & Varsity Admission Math: Topic Rankings from Question Bank Data',
      summary: 'A review of the past 20 years of admission papers shows Calculus and Permutations & Combinations as the highest frequency math topics.',
      date: 'July 1, 2026',
      readTime: '7 min read',
      body: `Admission tests for engineering require speed and accuracy. Here is the data-driven ranking of math topics based on query trends:

1. Calculus:
Historically, approximately [INSERT_VERIFIED_STAT]% of math questions in BUET and varsity admission exams focus on Calculus. Key concepts include limits, successive differentiation, definite integrals, and calculating areas under curves.

2. Permutations & Combinations:
Problems regarding word formation and number arrangements are highly recurring. In the past 20 years, BUET has included [INSERT_VERIFIED_STAT] written questions from this section alone.

Advice:
- Master the underlying concepts before learning shortcut techniques.
- Solve the written question banks at least twice to build speed.`
    },
    {
      id: 3,
      track: 'en',
      category: 'Medical Admission',
      title: 'Medical Admission Test: High-Priority Biology Chapters based on Data',
      summary: 'Biology is the highest scoring section in Medical Admissions. Learn which chapters in Zoology and Botany are high priority based on past test papers.',
      date: 'June 28, 2026',
      readTime: '6 min read',
      body: `To secure a seat in medical college, you must prioritize biology chapters effectively.

1. Human Physiology:
Blood circulation, locomotion, and nervous coordination chapters yield an average of [INSERT_VERIFIED_STAT] questions annually. Core topics include cardiac anatomy, heart valves, and blood composition tables.

2. Genetics & Evolution:
Mendel's laws deviations and genetic disorders (color blindness, hemophilia) have been asked [INSERT_VERIFIED_STAT] times in past medical admission exams.

Advice:
- Highlight important terms in textbooks.
- Focus heavily on comparative tables and summary lists.
- Practice medical question bank general knowledge and english daily.`
    }
  ]
};

export default function BlogPage() {
  const [lang, setLang] = useState<'bn' | 'en'>('bn');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const articles = articlesData[lang];

  return (
    <>
      <Navbar lang={lang} onLangChange={setLang} />
      
      <main style={{ paddingTop: '120px', paddingBottom: '80px', background: 'var(--color-surface-base)', minHeight: '100vh' }}>
        <div className="container-page">
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="badge badge-green" style={{ marginBottom: '16px' }}>
              {lang === 'bn' ? 'ব্লগ ও আপডেট' : 'Blog & Analysis'}
            </span>
            <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '16px' }}>
              {lang === 'bn' ? 'প্রশ্নব্যাংক ও প্রস্তুতি বিশ্লেষণ' : 'Question Bank & Prep Analysis'}
            </h1>
            <p style={{ fontSize: 'var(--font-size-md)', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              {lang === 'bn' 
                ? 'বিগত বছরগুলোর পরীক্ষার ডাটা বিশ্লেষণ এবং বিজ্ঞানসম্মত গাইডলাইন।' 
                : 'Data-driven exam analysis, study roadmaps, and guidelines.'}
            </p>
          </div>

          {/* Article Grid */}
          <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {articles.map((art) => (
              <article 
                key={art.id} 
                onClick={() => setSelectedArticle(art)}
                style={{ 
                  background: 'var(--color-surface-card)', 
                  border: '1px solid var(--color-border-default)', 
                  borderRadius: '8px', 
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-navy)',
                  transition: 'all 0.2s ease'
                }}
                className="blog-card"
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="badge badge-blue" style={{ fontSize: '10px' }}>{art.category}</span>
                  <span style={{ fontSize: '11px', color: 'var(--color-text-tertiary)', fontFamily: 'monospace' }}>{art.readTime}</span>
                </div>

                <h2 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--color-text-primary)', lineHeight: 1.4, margin: 0 }}>
                  {art.title}
                </h2>

                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0, flexGrow: 1 }}>
                  {art.summary}
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px', borderTop: '1px solid var(--color-border-default)', paddingTop: '12px' }}>
                  <span style={{ fontSize: '11px', color: 'var(--color-text-tertiary)', fontFamily: 'monospace' }}>{art.date}</span>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-surface-strong)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    {lang === 'bn' ? 'পড়ুন' : 'Read'} 
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Reading Modal */}
          {selectedArticle && (
            <div 
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(8,12,24,0.85)',
                backdropFilter: 'blur(8px)',
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '24px'
              }}
              onClick={() => setSelectedArticle(null)}
            >
              <div 
                style={{
                  background: 'var(--color-surface-card)',
                  border: '1px solid var(--color-border-default)',
                  borderRadius: '12px',
                  width: '100%',
                  maxWidth: '700px',
                  maxHeight: '85vh',
                  overflowY: 'auto',
                  padding: '32px',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.8)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid var(--color-border-default)', paddingBottom: '16px' }}>
                  <div>
                    <span className="badge badge-blue" style={{ marginBottom: '8px' }}>{selectedArticle.category}</span>
                    <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-text-primary)', lineHeight: 1.4 }}>
                      {selectedArticle.title}
                    </h2>
                    <p style={{ fontSize: '11px', color: 'var(--color-text-tertiary)', marginTop: '4px', fontFamily: 'monospace' }}>
                      {selectedArticle.date} • {selectedArticle.readTime}
                    </p>
                  </div>
                  <button 
                    onClick={() => setSelectedArticle(null)}
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-border-default)', color: 'var(--color-text-primary)', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', cursor: 'pointer' }}
                  >
                    Close
                  </button>
                </div>

                {/* Modal Body */}
                <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
                  {selectedArticle.body}
                </div>
              </div>
            </div>
          )}

        </div>
      </main>

      <Footer lang={lang} onLangChange={setLang} />

      <style jsx>{`
        .blog-card:hover {
          transform: translateY(-4px);
          border-color: rgba(0, 150, 109, 0.35) !important;
          box-shadow: var(--shadow-1), var(--shadow-navy) !important;
        }
        @media (max-width: 900px) {
          .blog-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Particles from "@/components/Particles";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://prostutii.vercel.app"),
  verification: {
    google: "da6093064bf6d1ce",
  },
  title: "প্রস্তুতি | Bangladesh's #1 Exam Prep Platform — HSC, SSC, Admission",
  description:
    "প্রস্তুতিতে HSC, SSC ও বিশ্ববিদ্যালয় ভর্তি পরীক্ষার জন্য বিজ্ঞানসম্মত প্র্যাকটিস করুন। ২ লক্ষ+ প্রশ্ন, মডেল টেস্ট, AI স্টাডি প্ল্যান। বিনামূল্যে শুরু করুন। | Science-backed MCQ practice, model tests, and AI study plans for Bangladeshi students.",
  keywords: [
    "HSC preparation",
    "SSC practice",

    "Bangladesh exam prep",
    "question bank",
    "MCQ practice",
    "প্রস্তুতি",
    "HSC প্রস্তুতি",
    "SSC প্রশ্নব্যাংক",
    "ভর্তি পরীক্ষা",
  ],
  openGraph: {
    title: "প্রস্তুতি — Bangladesh's #1 Exam Prep Platform",
    description:
      "HSC, SSC, and Admission exam preparation with 200,000+ questions, model tests, and AI-powered study plans.",
    url: "https://web.prostuti.bd",
    siteName: "Prostuti",
    locale: "bn_BD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "প্রস্তুতি — Bangladesh's #1 Exam Prep Platform",
    description: "HSC, SSC, and Admission exam preparation. Start free today.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

// --- Structured data (JSON-LD) -------------------------------------------
// Helps search engines render rich results (organization knowledge panel,
// FAQ rich snippets). Sourced from the on-page FAQ content.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://prostutii.vercel.app/#organization',
      name: 'Prostuti',
      alternateName: 'প্রস্তুতি',
      url: 'https://prostutii.vercel.app',
      logo: 'https://pub-e2c71a91f86f428982fe1b1f721d68b9.r2.dev/image/host/02-07-2026/prostuti/img_1782975909440.png',
      description:
        "Bangladesh's #1 exam preparation platform for HSC, SSC, and university admission tests.",
      sameAs: ['https://t.me/prostutibd'],
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'prostutibdapp@gmail.com',
        contactType: 'customer support',
        availableLanguage: ['Bengali', 'English'],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://prostutii.vercel.app/#website',
      url: 'https://prostutii.vercel.app',
      name: 'Prostuti',
      inLanguage: 'bn-BD',
      publisher: { '@id': 'https://prostutii.vercel.app/#organization' },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://prostutii.vercel.app/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is it free to use the app?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Downloading the app and using free features is completely free. However, premium tests, AI tutor, and the full question bank require one of our affordable subscription plans.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which boards and classes are covered?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Currently, we provide content according to all board syllabuses for HSC students and University, Medical, and Engineering admission candidates.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will it work on older phones?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, Prostuti is a lightweight platform that can be used smoothly from any smartphone or computer via a web browser without any lag.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is my data secure?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely. We use state-of-the-art security measures to keep your personal information and practice data completely encrypted and secure.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <Particles />
        {children}
        {/* Structured data for search engines (rich results). */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Vercel observability — page views, Core Web Vitals. */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

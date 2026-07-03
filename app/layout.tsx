import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
      <body>{children}</body>
    </html>
  );
}

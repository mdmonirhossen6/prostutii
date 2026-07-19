import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ব্লগ ও সাজেশন | প্রস্তুতি',
  description: 'HSC ও বিশ্ববিদ্যালয় ভর্তি পরীক্ষার বিগত বছরগুলোর ডাটা বিশ্লেষণ, সাজেশন এবং বিজ্ঞানসম্মত গাইডলাইন।',
  openGraph: {
    title: 'ব্লগ ও সাজেশন | প্রস্তুতি',
    description: 'HSC ও বিশ্ববিদ্যালয় ভর্তি পরীক্ষার বিগত বছরগুলোর ডাটা বিশ্লেষণ, সাজেশন এবং বিজ্ঞানসম্মত গাইডলাইন।',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}

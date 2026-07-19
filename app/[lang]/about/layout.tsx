import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'আমাদের সম্পর্কে | প্রস্তুতি',
  description: 'প্রস্তুতির মূল লক্ষ্য হলো বাংলাদেশের প্রতিটি প্রান্তে শিক্ষার্থীদের জন্য প্রযুক্তিনির্ভর, সহজলভ্য এবং কার্যকর পরীক্ষার প্রস্তুতি নিশ্চিত করা।',
  openGraph: {
    title: 'আমাদের সম্পর্কে | প্রস্তুতি',
    description: 'প্রস্তুতির মূল লক্ষ্য হলো বাংলাদেশের প্রতিটি প্রান্তে শিক্ষার্থীদের জন্য প্রযুক্তিনির্ভর, সহজলভ্য এবং কার্যকর পরীক্ষার প্রস্তুতি নিশ্চিত করা।',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'যোগাযোগ | প্রস্তুতি',
  description: 'যেকোনো প্রশ্ন, পরামর্শ বা ফিডব্যাকের জন্য আমাদের সাপোর্ট টিমের সাথে যোগাযোগ করুন।',
  openGraph: {
    title: 'যোগাযোগ | প্রস্তুতি',
    description: 'যেকোনো প্রশ্ন, পরামর্শ বা ফিডব্যাকের জন্য আমাদের সাপোর্ট টিমের সাথে যোগাযোগ করুন।',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

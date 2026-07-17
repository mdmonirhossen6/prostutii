'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { usePersistentLang } from '@/hooks/usePersistentLang';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ব্লগ ও সাজেশন | প্রস্তুতি',
  description: 'HSC ও বিশ্ববিদ্যালয় ভর্তি পরীক্ষার বিগত বছরগুলোর ডাটা বিশ্লেষণ, সাজেশন এবং বিজ্ঞানসম্মত গাইডলাইন।',
  openGraph: {
    title: 'ব্লগ ও সাজেশন | প্রস্তুতি',
    description: 'HSC ও বিশ্ববিদ্যালয় ভর্তি পরীক্ষার বিগত বছরগুলোর ডাটা বিশ্লেষণ, সাজেশন এবং বিজ্ঞানসম্মত গাইডলাইন।',
  }
};

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
      category: 'HSC Physics',
      title: 'HSC Physics 1st Paper: বিগত বছরের বোর্ড প্রশ্ন এনালাইসিস ও মাস্টার সাজেশন',
      summary: 'এইচএসসি (HSC) পরীক্ষায় বিজ্ঞান বিভাগের শিক্ষার্থীদের সবচেয়ে বড় ভয়ের নাম পদার্থবিজ্ঞান। তবে বিগত কয়েক বছরের বোর্ড প্রশ্ন এনালাইসিস করলে দেখা যায়, প্রশ্নকর্তাদের কিছু নির্দিষ্ট প্যাটার্ন রয়েছে।',
      date: '৮ জুলাই, ২০২৬',
      readTime: '৫ মিনিট পড়ার সময়',
      body: `ভূমিকা:
এইচএসসি (HSC) পরীক্ষায় বিজ্ঞান বিভাগের শিক্ষার্থীদের সবচেয়ে বড় ভয়ের নাম পদার্থবিজ্ঞান বা ফিজিক্স। তবে বিগত কয়েক বছরের বোর্ড প্রশ্ন এনালাইসিস করলে দেখা যায়, প্রশ্নকর্তাদের কিছু নির্দিষ্ট প্যাটার্ন রয়েছে। একটু স্মার্টলি পড়লেই ফিজিক্সে এ প্লাস (A+) পাওয়া খুব সহজ।

গুরুত্বপূর্ণ অধ্যায় ও টপিকসমূহ:
• ভেক্টর (Vector): নদী-নৌকার অঙ্ক, ডট ও ক্রস গুণনের সাহায্যে লম্ব বা সমান্তরাল প্রমাণ করা এবং আপেক্ষিক বেগের ম্যাথগুলো বোর্ডের সবচেয়ে প্রিয়।
• কাজ, শক্তি ও ক্ষমতা: কুয়া বা চৌবাচ্চা খালি করার ম্যাথ এবং শক্তির নিত্যতা সূত্র প্রমাণের অঙ্কগুলো ভালোভাবে প্র্যাকটিস করতে হবে। পাম্পের কর্মদক্ষতা নির্ণয় থেকেও প্রচুর প্রশ্ন আসে।
• পর্যাবৃত্ত গতি: সরল দোলকের সাহায্যে পাহাড়ের উচ্চতা নির্ণয় এবং সময় হারানো/লাভ করার অঙ্কগুলো থেকে প্রতি বছর প্রশ্ন থাকে।
• আদর্শ গ্যাস ও গ্যাসের গতিতত্ত্ব: শিশিরাঙ্ক ও আপেক্ষিক আর্দ্রতা নির্ণয়ের ম্যাথগুলো (গ্লেসিয়ারের সমীকরণ) এই অধ্যায়ের প্রাণ।

কীভাবে প্রস্তুতি নেবে?
সূত্র মুখস্থ করার আগে বেসিক ক্লিয়ার করো। এরপর টেস্ট পেপার থেকে বিগত বছরের বোর্ড প্রশ্নগুলো সলভ করো। তোমার প্রস্তুতি যাচাই করতে আজই Prostuti অ্যাপে লগইন করে ফিজিক্সের Chapter-wise Practice ও Custom Mock Test দেওয়া শুরু করো!`
    },
    {
      id: 2,
      track: 'bn',
      category: 'BUET Admission',
      title: 'BUET Admission: ফিজিক্স রিটেন পরীক্ষার জন্য প্রস্তুতি কীভাবে শুরু করবে?',
      summary: 'বুয়েট (BUET) ভর্তি পরীক্ষা মানেই দেশের সেরা মেধাগুলোর লড়াই। এই লড়াইয়ে টিকে থাকতে হলে ফিজিক্স রিটেন অংশে ভালো করার কোনো বিকল্প নেই।',
      date: '৭ জুলাই, ২০২৬',
      readTime: '৬ মিনিট পড়ার সময়',
      body: `ভূমিকা:
বুয়েট (BUET) ভর্তি পরীক্ষা মানেই দেশের সেরা মেধাগুলোর লড়াই। এই লড়াইয়ে টিকে থাকতে হলে ফিজিক্স রিটেন অংশে ভালো করার কোনো বিকল্প নেই। বেসিক স্ট্রং থাকলে বুয়েটের ফিজিক্স প্রশ্ন সলভ করা খুব একটা কঠিন নয়।

প্রস্তুতির ধাপে ধাপে গাইডলাইন:
• কনসেপ্ট ক্লিয়ারেন্স: বুয়েটে সরাসরি সূত্র বসিয়ে উত্তর বের করার প্রশ্ন আসে না। মূল বইয়ের প্রতিটি থিওরি খুব ভালোভাবে বুঝতে হবে।
• বিগত ২০ বছরের প্রশ্নব্যাংক: ইঞ্জিনিয়ারিং প্রশ্নব্যাংক হচ্ছে তোমার সবচেয়ে বড় হাতিয়ার। বিগত ২০ বছরের বুয়েটের প্রশ্নগুলো নিজে সলভ করার চেষ্টা করো।
• ক্যালকুলেশন স্পিড: ভর্তি পরীক্ষায় অল্প জায়গা দেওয়া থাকে। তাই দ্রুত ক্যালকুলেটর ব্যবহার করে সঠিক উত্তর বের করার প্র্যাকটিস করতে হবে।
• টাইম ম্যানেজমেন্ট: ৩ মিনিটে একটি রিটেন ম্যাথ সলভ করার টার্গেট রাখতে হবে।

তোমার ইঞ্জিনিয়ারিং প্রস্তুতিকে গুছিয়ে নিতে Prostuti অ্যাপের "Master Question Bank & Written Question Bank" থেকে আজই প্র্যাকটিস শুরু করো!`
    },
    {
      id: 3,
      track: 'bn',
      category: 'DU Admission',
      title: 'ঢাকা বিশ্ববিদ্যালয় (A Unit): রিটেন ও এমসিকিউ-এর ব্যালেন্সড প্রস্তুতি',
      summary: 'ঢাকা বিশ্ববিদ্যালয়ের ‘ক’ ইউনিটের পরীক্ষায় এমসিকিউ (MCQ) এবং রিটেন—উভয় অংশেই সমান গুরুত্ব দিতে হয়। অনেকেই এমসিকিউতে ভালো করলেও রিটেনে গিয়ে আটকে যায়।',
      date: '৬ জুলাই, ২০২৬',
      readTime: '৫ মিনিট পড়ার সময়',
      body: `ভূমিকা:
ঢাকা বিশ্ববিদ্যালয়ের ‘ক’ ইউনিটের পরীক্ষায় এমসিকিউ (MCQ) এবং রিটেন—উভয় অংশেই সমান গুরুত্ব দিতে হয়। অনেকেই এমসিকিউতে ভালো করলেও রিটেনে গিয়ে আটকে যায়।

কীভাবে ব্যালেন্স করবে?
• MCQ-এর জন্য শর্টকাট: ঢাবিতে ক্যালকুলেটর ব্যবহার করা যায় মিলিটারি। তাই হাতে ক্যালকুলেশন করার স্পিড বাড়াতে হবে। বিশেষ করে ফিজিক্স ও কেমিস্ট্রির ছোট ছোট ম্যাথগুলো মুখে মুখে করার প্র্যাকটিস করো।
• রিটেনের জন্য মেইন বই: রিটেনের প্রশ্নগুলো সাধারণত মূল বইয়ের থিওরি থেকেই আসে। কেমিস্ট্রির বিক্রিয়া, ফিজিক্সের ছোট প্রমাণ এবং ম্যাথের বেসিক কনসেপ্টগুলো লিখে প্র্যাকটিস করো।
• বায়োলজি নাকি ম্যাথ? তোমার যেটিতে বেশি দখল, সেটি আগে উত্তর করবে। তবে ঢাবির জন্য বায়োলজি মেইন বই রিডিং পড়া সবচেয়ে বেশি কাজে দেয়।

এমসিকিউ এবং রিটেনের সেরা প্রস্তুতির জন্য Prostuti অ্যাপের Previous Year Question Bank সলভ করে নিজেকে একধাপ এগিয়ে রাখো।`
    },
    {
      id: 4,
      track: 'bn',
      category: 'Medical Admission',
      title: 'মেডিকেল ভর্তি পরীক্ষা: জীববিজ্ঞানের হাই-প্রায়োরিটি অধ্যায়সমূহ',
      summary: 'মেডিকেল ভর্তি পরীক্ষায় চান্স পাওয়ার মূল চাবিকাঠি হলো জীববিজ্ঞান (Biology)। বোটানি এবং জুলোজি মিলিয়ে সবচেয়ে বেশি মার্কস থাকে এই অংশে।',
      date: '৫ জুলাই, ২০২৬',
      readTime: '৪ মিনিট পড়ার সময়',
      body: `ভূমিকা:
মেডিকেল ভর্তি পরীক্ষায় চান্স পাওয়ার মূল চাবিকাঠি হলো জীববিজ্ঞান (Biology)। বোটানি এবং জুলোজি মিলিয়ে সবচেয়ে বেশি মার্কস থাকে এই অংশে।

কোন অধ্যায়গুলো বেশি গুরুত্বপূর্ণ?
• প্রাণিবিজ্ঞান (Zoology): মানবদেহ (Human Physiology) অংশের পরিপাক, রক্ত ও সঞ্চালন, শ্বাসক্রিয়া এবং রেচন থেকে সবচেয়ে বেশি প্রশ্ন আসে। এছাড়া রুই মাছ ও ঘাসফড়িং অংশটি মেডিকেলের জন্য খুবই গুরুত্বপূর্ণ।
• উদ্ভিদবিজ্ঞান (Botany): কোষ ও কোষের গঠন, কোষ বিভাজন, নগ্নবীজী ও আবৃতবীজী উদ্ভিদ এবং প্ল্যান্ট ফিজিওলজি অধ্যায়গুলো থেকে প্রতি বছর প্রশ্ন নিশ্চিত থাকে।

পড়ার কৌশল:
মেডিকেলের জন্য মূল বই (হাসান স্যার ও আজমল স্যারের বই) দাগিয়ে পড়ার কোনো বিকল্প নেই। বইয়ের ছক, পার্থক্য এবং বোল্ড করা লাইনগুলো ঠোঁটস্থ রাখতে হবে। তোমার মেডিকেল প্রস্তুতি যাচাই করতে Prostuti অ্যাপের Subject Final ও Paper Final Exam গুলোতে অংশ নাও।`
    },
    {
      id: 5,
      track: 'bn',
      category: 'HSC Math',
      title: 'HSC Math: ক্যালকুলাস ভীতি দূর করার কার্যকরী টেকনিক',
      summary: 'এইচএসসি ম্যাথে সবচেয়ে বেশি যে টপিকটি শিক্ষার্থীদের ভোগায়, তা হলো ক্যালকুলাস। অথচ ভার্সিটি বা ইঞ্জিনিয়ারিং—যেকোনো ভর্তি পরীক্ষাতেই এখান থেকে সবচেয়ে বেশি প্রশ্ন আসে।',
      date: '৪ জুলাই, ২০২৬',
      readTime: '৫ মিনিট পড়ার সময়',
      body: `ভূমিকা:
এইচএসসি ম্যাথে সবচেয়ে বেশি যে টপিকটি শিক্ষার্থীদের ভোগায়, তা হলো ক্যালকুলাস (ডিফারেন্সিয়েশন ও ইন্টিগ্রেশন)। অথচ ভার্সিটি বা ইঞ্জিনিয়ারিং—যেকোনো ভর্তি পরীক্ষাতেই এখান থেকে সবচেয়ে বেশি প্রশ্ন আসে।

ভীতি দূর করার উপায়:
• ত্রিকোণমিতির সূত্র: ক্যালকুলাস পারার প্রথম শর্ত হলো ত্রিকোণমিতির সূত্রগুলো একদম মুখস্থ রাখা। ত্রিকোণমিতি না পারলে ক্যালকুলাসের অর্ধেক ম্যাথেই আটকে যাবে।
• সূত্র খাতায় লেখা: ডিফারেন্সিয়েশন ও ইন্টিগ্রেশনের সব সূত্র একটি খাতায় লিখে পড়ার টেবিলের সামনে টানিয়ে রাখো।
• টাইপ-ভিত্তিক ম্যাথ সলভ: পুরো বইয়ের সব অঙ্ক না করে, প্রতিটি টাইপ থেকে ২-৩টি করে ম্যাথ বুঝে সলভ করো। এতে সিলেবাস দ্রুত শেষ হবে।

ক্যালকুলাসের চ্যাপ্টার-ভিত্তিক কুইক প্র্যাকটিস করতে Prostuti অ্যাপের Type-wise CQ & MCQ Collection ফিচারটি আজই ব্যবহার করে দেখো।`
    },
    {
      id: 6,
      track: 'bn',
      category: 'Engineering',
      title: 'Engineering Chemistry Question Bank Analysis',
      summary: 'ইঞ্জিনিয়ারিং প্রস্তুতির ক্ষেত্রে কেমিস্ট্রি অনেক সময় গেম-চেঞ্জার হয়ে দাঁড়ায়। ফিজিক্স ও ম্যাথে সবাই কমবেশি ফাইট দিলেও, কেমিস্ট্রিতে ভালো মার্কস তুলতে পারলে র্যাংকিংয়ে অনেক এগিয়ে যাওয়া যায়।',
      date: '৩ জুলাই, ২০২৬',
      readTime: '৬ মিনিট পড়ার সময়',
      body: `ভূমিকা:
ইঞ্জিনিয়ারিং প্রস্তুতির ক্ষেত্রে কেমিস্ট্রি অনেক সময় গেম-চেঞ্জার হয়ে দাঁড়ায়। ফিজিক্স ও ম্যাথে সবাই কমবেশি ফাইট দিলেও, কেমিস্ট্রিতে ভালো মার্কস তুলতে পারলে র্যাংকিংয়ে অনেক এগিয়ে যাওয়া যায়।

কোন টপিকে ফোকাস করবে?
• জৈব রসায়ন (Organic Chemistry): নামধারী বিক্রিয়া (যেমন- অ্যালডল, ক্যানিজারো), রূপান্তর এবং মেকানিজমগুলো খুব ভালো করে আয়ত্ত করতে হবে।
• পরিমাণগত রসায়ন: টাইট্রেশন, জারণ-বিজারণ সমতাকরণ এবং পিপিএম (ppm) নির্ণয়ের ম্যাথগুলো বুয়েট রিটেনের জন্য খুবই ইম্পর্টেন্ট।
• পরিবেশ রসায়ন: গ্যাস সূত্র এবং আর্হেনিয়াস সমীকরণের ম্যাথগুলো ভালোভাবে দেখতে হবে।

বিগত বছরের ইঞ্জিনিয়ারিং কেমিস্ট্রি প্রশ্ন সলভ করতে Prostuti অ্যাপের Engineering Written Question Bank সেকশনটি তোমার সেরা সঙ্গী হতে পারে।`
    },
    {
      id: 7,
      track: 'bn',
      category: 'Varsity Admission',
      title: 'ভার্সিটি ভর্তি পরীক্ষা: টাইম ম্যানেজমেন্টের সেরা কৌশল',
      summary: 'বিশ্ববিদ্যালয় ভর্তি পরীক্ষায় প্রশ্ন খুব কঠিন হয় না, কিন্তু নির্দিষ্ট সময়ের মধ্যে সব উত্তর করাটাই সবচেয়ে বড় চ্যালেঞ্জ।',
      date: '২ জুলাই, ২০২৬',
      readTime: '৪ মিনিট পড়ার সময়',
      body: `ভূমিকা:
বিশ্ববিদ্যালয় ভর্তি পরীক্ষায় প্রশ্ন খুব কঠিন হয় না, কিন্তু নির্দিষ্ট সময়ের মধ্যে সব উত্তর করাটাই সবচেয়ে বড় চ্যালেঞ্জ।

টাইম ম্যানেজমেন্টের হ্যাকস:
• স্কিপিং মেথড (Skipping Method): যে প্রশ্নটি এক দেখায় কঠিন মনে হবে বা ক্যালকুলেশন বড় মনে হবে, সেটি সাথে সাথে স্কিপ করে পরের প্রশ্নে চলে যাও। কোনো প্রশ্নে ইগো দেখানো যাবে বায়।
• সহজ অংশ আগে দাগানো: সাধারণত বায়োলজি এবং কেমিস্ট্রি দাগাতে সময় কম লাগে। এগুলো আগে শেষ করে ম্যাথ ও ফিজিক্সের জন্য সময় বাঁচিয়ে রাখো।
• ওএমআর (OMR) শিট দ্রুত পূরণ: একসাথে সব প্রশ্নের উত্তর বের করে শেষে ওএমআর পূরণ করতে যেও না। প্রতি ১০টি বা একটি বিষয়ের উত্তর বের করার পর সাথে সাথেই বৃত্ত ভরাট করে ফেলো।

বাসায় বসে টাইম ম্যানেজমেন্ট প্র্যাকটিস করতে Prostuti অ্যাপের Live Exam এবং Custom Mock Test-এর ফোকাস টাইমার ব্যবহার করো।`
    },
    {
      id: 8,
      track: 'bn',
      category: 'HSC ICT',
      title: 'HSC ICT: প্রোগ্রামিং (C Programming) থেকে ফুল মার্কস তোলার উপায়',
      summary: 'এইচএসসি আইসিটি (ICT) বইয়ের ৫ম অধ্যায় অর্থাৎ সি-প্রোগ্রামিং নিয়ে অনেকেরই ভীতি কাজ করে। তবে প্রোগ্রামিংয়ের লজিক একবার বুঝে গেলে এখান থেকে খুব সহজেই ফুল মার্কস তোলা সম্ভব।',
      date: '১ জুলাই, ২০২৬',
      readTime: '৫ মিনিট পড়ার সময়',
      body: `ভূমিকা:
এইচএসসি আইসিটি (ICT) বইয়ের ৫ম অধ্যায় অর্থাৎ সি-প্রোগ্রামিং নিয়ে অনেকেরই ভীতি কাজ করে। তবে প্রোগ্রামিংয়ের লজিক একবার বুঝে গেলে এখান থেকে খুব সহজেই ফুল মার্কস তোলা সম্ভব।

গুরুত্বপূর্ণ টপিক:
• অ্যালগরিদম ও ফ্লোচার্ট (বিশেষ করে লুপ ও কন্ডিশনাল স্টেটমেন্ট)।
• লুপ (For, While, Do-while) ব্যবহার করে সিরিজ বা ধারার যোগফল নির্ণয়।
• কন্ডিশনাল স্টেটমেন্ট (If-else) ব্যবহার করে জোড়-বিজোড়, লিপ ইয়ার বা বড়-ছোট সংখ্যা নির্ণয়।

প্রস্তুতির কৌশল:
প্রোগ্রামিং মুখস্থ করার বিষয় নয়। বইয়ের বেসিক প্রোগ্রামগুলো নিজে খাতায় লিখে ড্রাই-রান (Dry-run) করো। বিগত বছরের বোর্ড প্রশ্নগুলো সলভ করলে প্রোগ্রামিংয়ের প্যাটার্ন বুঝতে পারবে। আইসিটির এমসিকিউ প্র্যাকটিস করতে Prostuti অ্যাপের Chapter-wise Practice সেকশনটি ঘুরে এসো।`
    },
    {
      id: 9,
      track: 'bn',
      category: 'Study Tips',
      title: 'পড়াশোনায় মন বসানোর উপায়: Smart Routine ও Focus Timer',
      summary: 'পড়তে বসলেই ফোন চালাতে ইচ্ছে করে? কিংবা একটু পড়লেই মনোযোগ হারিয়ে যায়? শিক্ষার্থীদের জন্য এটি একটি সাধারণ সমস্যা। তবে কিছু বৈজ্ঞানিক পদ্ধতি ব্যবহার করে খুব সহজেই এই সমস্যার সমাধান করা সম্ভব।',
      date: '৩০ জুন, ২০২৬',
      readTime: '৪ মিনিট পড়ার সময়',
      body: `ভূমিকা:
পড়তে বসলেই ফোন চালাতে ইচ্ছে করে? কিংবা একটু পড়লেই মনোযোগ হারিয়ে যায়? শিক্ষার্থীদের জন্য এটি একটি সাধারণ সমস্যা। তবে কিছু বৈজ্ঞানিক পদ্ধতি ব্যবহার করে খুব সহজেই এই সমস্যার সমাধান করা সম্ভব।

মনোযোগ বাড়ানোর উপায়:
• পোমোডোরো টেকনিক (Pomodoro Technique): একটানা না পড়ে ২৫ মিনিট গভীর মনোযোগ দিয়ে পড়ো এবং এরপর ৫ মিনিটের ছোট একটি ব্রেক নাও। এটি ব্রেনকে রিফ্রেশ করে।
• স্মার্ট রুটিন তৈরি: দিনের শুরুতেই ঠিক করে নাও আজকে তুমি ঠিক কোন কোন অধ্যায় শেষ করবে।
• ডিস্ট্র্যাকশন ফ্রি জোন: পড়ার সময় মোবাইল ফোনটি অন্য ঘরে রাখো অথবা ইন্টারনেট কানেকশন বন্ধ করে দাও।

পড়াশোনাকে ট্র্যাক করতে এবং নিজের ডেইলি টার্গেট ফিলাপ করতে Prostuti অ্যাপের Daily Study Tracker & Smart Routine ফিচারগুলো তোমার দারুণ উপকারে আসবে।`
    },
    {
      id: 10,
      track: 'bn',
      category: 'Exam Strategy',
      title: 'টেস্ট পেপার সল্ভ করার সঠিক নিয়ম: কীভাবে পড়লে ১০০% কমন পাওয়া যায়?',
      summary: 'এইচএসসি পরীক্ষার আগে টেস্ট পেপার সলভ করা কতটা জরুরি, তা নতুন করে বলার কিছু নেই। কিন্তু অনেকেই বুঝতে পারে না কীভাবে টেস্ট পেপার সলভ করলে সর্বোচ্চ আউটপুট পাওয়া যায়।',
      date: '২৯ জুন, ২০২৬',
      readTime: '৫ মিনিট পড়ার সময়',
      body: `ভূমিকা:
এইচএসসি পরীক্ষার আগে টেস্ট পেপার সলভ করা কতটা জরুরি, তা নতুন করে বলার কিছু নেই। কিন্তু অনেকেই বুঝতে পারে না কীভাবে টেস্ট পেপার সলভ করলে সর্বোচ্চ আউটপুট পাওয়া যায়।

টেস্ট পেপার সলভের ৩টি ধাপ:
• ধাপ ১ (অধ্যায়ভিত্তিক সলভ): প্রথমে একটি অধ্যায় রিভিশন দিয়ে টেস্ট পেপারের ঐ অধ্যায়ের শীর্ষ কলেজগুলোর প্রশ্ন সলভ করো।
• ধাপ ২ (বোর্ড প্রশ্ন সলভ): বিগত ৩-৪ বছরের বোর্ড প্রশ্নগুলো সময় ধরে সলভ করো। এতে বোর্ডের প্রশ্নের স্ট্যান্ডার্ড সম্পর্কে ক্লিয়ার ধারণা পাবে।
• ধাপ ৩ (ফুল পেপার মক টেস্ট): পরীক্ষার ঠিক ১ মাস আগে ঘড়ি ধরে ৩ ঘণ্টার পূর্ণাঙ্গ পরীক্ষা দাও। এতে পরীক্ষার হলে টাইম ম্যানেজমেন্টের সমস্যা কেটে যাবে।

বইয়ের অনুশীলনী প্র্যাকটিস ও বোর্ড স্ট্যান্ডার্ড প্রশ্নের লাইভ পরীক্ষা দিতে আজই ডাউনলোড করো Prostuti অ্যাপ!`
    },
    {
      id: 11,
      track: 'bn',
      category: 'HSC Chemistry',
      title: 'HSC Chemistry 2nd Paper: জৈব রসায়ন (Organic Chemistry) সহজে মনে রাখার উপায়',
      summary: 'এইচএসসি কেমিস্ট্রি ২য় পত্রের সবচেয়ে বড় এবং ভয়ের চ্যাপ্টার হলো জৈব রসায়ন। অনেক শিক্ষার্থী এই অধ্যায়টি স্কিপ করার কথা ভাবে, কিন্তু ভর্তি পরীক্ষায় এটি থেকে সবচেয়ে বেশি প্রশ্ন আসে।',
      date: '২৮ জুন, ২০২৬',
      readTime: '৫ মিনিট পড়ার সময়',
      body: `ভূমিকা:
এইচএসসি কেমিস্ট্রি ২য় পত্রের সবচেয়ে বড় এবং ভয়ের চ্যাপ্টার হলো জৈব রসায়ন। অনেক শিক্ষার্থী এই অধ্যায়টি স্কিপ করার কথা ভাবে, কিন্তু ভর্তি পরীক্ষায় (বিশেষ করে বুয়েট ও ঢাবিতে) এটি থেকে সবচেয়ে বেশি প্রশ্ন আসে।

কীভাবে পড়লে মনে থাকবে?
• রিঅ্যাকশন ম্যাপ (Reaction Map): বইয়ের পাতা উল্টে এলোমেলোভাবে বিক্রিয়া মুখস্থ না করে, একটি ফ্লোচার্ট বা মাইন্ড ম্যাপ তৈরি করো। যেমন—অ্যালকেন থেকে কীভাবে অ্যালকোহল বা অ্যালডিহাইড তৈরি করা যায়, তার একটি সিকোয়েন্স খাতায় লিখে রাখো।
• নামধারী বিক্রিয়া (Name Reactions): উটজ বিক্রিয়া, ক্যানিজারো, অ্যালডল ঘনীভবন—এই নামধারী বিক্রিয়াগুলো বোর্ড এবং এডমিশন উভয়ের জন্যই থ্রি-স্টার (***) ইম্পর্টেন্ট।
• মেকানিজম বা কৌশল: শুধু বিক্রিয়ার উৎপাদ মুখস্থ না করে, সেটি কীভাবে তৈরি হলো তার কৌশল (যেমন: SN1, SN2) বুঝে পড়লে আর ভুলবে পণ্ডিত না।

জৈব রসায়নের এমসিকিউ এবং রিটেন প্রশ্নের সেরা প্রস্তুতির জন্য Prostuti অ্যাপের Type-wise CQ & MCQ Collection ফিচারে আজই প্র্যাকটিস শুরু করো।`
    },
    {
      id: 12,
      track: 'bn',
      category: 'GST Admission',
      title: 'গুচ্ছ (GST) ভার্সিটি ভর্তি পরীক্ষা: শর্টকাটে চান্স পাওয়ার স্ট্র্যাটেজি',
      summary: '২৪টি সাধারণ এবং বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় নিয়ে গুচ্ছ (GST) ভর্তি পরীক্ষা অনুষ্ঠিত হয়। এখানে একবার ভালো স্কোর করতে পারলে একসাথে অনেকগুলো বিশ্ববিদ্যালয়ে চান্স পাওয়ার সুযোগ তৈরি হয়।',
      date: '২৭ জুন, ২০২৬',
      readTime: '৬ মিনিট পড়ার সময়',
      body: `ভূমিকা:
২৪টি সাধারণ এবং বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় নিয়ে গুচ্ছ (GST) ভর্তি পরীক্ষা অনুষ্ঠিত হয়। এখানে একবার ভালো স্কোর করতে পারলে একসাথে অনেকগুলো বিশ্ববিদ্যালয়ে চান্স পাওয়ার সুযোগ তৈরি হয়।

গুচ্ছের জন্য সেরা স্ট্র্যাটেজি:
• সিলেবাস সম্পর্কে ধারণা: গুচ্ছের প্রশ্ন সাধারণত একদম বেসিক থেকে হয় এবং এইচএসসি সিলেবাসের ওপর ভিত্তি করেই করা হয়। তাই মেইন বইয়ের প্রতিটি টপিকের কনসেপ্ট ক্লিয়ার রাখা জরুরি।
• নেগেটিভ মার্কিং এড়ানো: গুচ্ছে নেগেটিভ মার্কিংয়ের কারণে অনেকেই ছিটকে যায়। তাই ১০০% সিওর না হলে আন্দাজে দাগানোর প্রবণতা বাদ দিতে হবে।
• বিষয় নির্বাচন: ম্যাথ কঠিন মনে হলে অনেকেই আইসিটি বা বায়োলজি দাগাতে চায়। তবে সাবজেক্ট চয়েসের ক্ষেত্রে ম্যাথ দাগালে ইঞ্জিনিয়ারিং বা পিওর সায়েন্সের ভালো সাবজেক্টগুলো পাওয়া সহজ হয়।

গুচ্ছ ভর্তি পরীক্ষার আসল ফ্লেভার পেতে Prostuti অ্যাপের Model Test সেকশনে গিয়ে গুচ্ছ স্ট্যান্ডার্ড লাইভ এক্সাম দেওয়া শুরু করো!`
    },
    {
      id: 13,
      track: 'bn',
      category: 'Medical Admission',
      title: 'মেডিকেল ভর্তি পরীক্ষা: ফিজিক্স ও কেমিস্ট্রিতে ভালো করার উপায়',
      summary: 'মেডিকেল ভর্তি পরীক্ষা মানেই যে শুধু জীববিজ্ঞান, তা কিন্তু নয়! চান্স পাওয়া নির্ভর করে বায়োলজির ওপর, কিন্তু তোমার পজিশন বা ভালো মেডিকেল কলেজ পাওয়াটা পুরোপুরি নির্ভর করে ফিজিক্স ও কেমিস্ট্রি মার্কসের ওপর।',
      date: '২৬ জুন, ২০২৬',
      readTime: '৫ মিনিট পড়ার সময়',
      body: `ভূমিকা:
মেডিকেল ভর্তি পরীক্ষা মানেই যে শুধু জীববিজ্ঞান, তা কিন্তু নয়! চান্স পাওয়া নির্ভর করে বায়োলজির ওপর, কিন্তু তোমার পজিশন বা ভালো মেডিকেল কলেজ পাওয়াটা পুরোপুরি নির্ভর করে ফিজিক্স ও কেমিস্ট্রি মার্কসের ওপর।

কীভাবে প্রস্তুতি নেবে?
• কেমিস্ট্রি: হাজারী স্যারের বইয়ের অনুশীলনী এবং ভেতরের বোল্ড করা লাইনগুলো সবচেয়ে বেশি ইম্পর্টেন্ট। এছাড়া বিভিন্ন বিজ্ঞানীদের নাম, আবিষ্কার এবং ছকগুলো মুখস্থ রাখতে হবে।
• ফিজিক্স: মেডিকেলে ফিজিক্সে বড় কোনো ম্যাথ আসে না। ছোট ছোট ম্যাথ (যা ক্যালকুলেটর ছাড়া করা যায়), একক, মাত্রা এবং বিভিন্ন ধ্রুবকের মান খুব ভালোভাবে পড়তে হবে। ইসহাক স্যারের বইয়ের পেছনের এমসিকিউগুলো অবশ্যই সলভ করবে।

মেডিকেলের বিগত বছরের প্রশ্ন এনালাইসিস করতে ও বইয়ের অনুশীলনী প্র্যাকটিস করতে Prostuti অ্যাপের Medical Admission Preparation প্যানেলটি ব্যবহার করো।`
    },
    {
      id: 14,
      track: 'bn',
      category: 'Engineering Math',
      title: 'Engineering Math: কণিক ও ইন্টিগ্রেশনের ভয় জয় করবে কীভাবে?',
      summary: 'ইঞ্জিনিয়ারিং প্রস্তুতির ক্ষেত্রে ম্যাথের দুটি অধ্যায় সবচেয়ে বেশি ভোগায়—কণিক (Conics) এবং ইন্টিগ্রেশন (Integration)। তবে গ্রাফিক্যাল কনসেপ্ট ক্লিয়ার থাকলে এই দুই অধ্যায়ে ফুল মার্কস তোলা সম্ভব।',
      date: '২৫ জুন, ২০২৬',
      readTime: '৫ মিনিট পড়ার সময়',
      body: `ভূমিকা:
ইঞ্জিনিয়ারিং প্রস্তুতির ক্ষেত্রে ম্যাথের দুটি অধ্যায় সবচেয়ে বেশি ভোগায়—কণিক (Conics) এবং ইন্টিগ্রেশন (Integration)। তবে গ্রাফিক্যাল কনসেপ্ট ক্লিয়ার থাকলে এই দুই অধ্যায়ে ফুল মার্কস তোলা সম্ভব।

সহজ করার উপায়:
• গ্রাফ আঁকা শেখো: কণিকের যেকোনো ম্যাথ পড়ার সময় আগে রাফ খাতায় এর গ্রাফ বা চিত্রটি এঁকে নাও। পরাবৃত্ত বা উপবৃত্তের চিত্র চোখের সামনে থাকলে সূত্র এমনিতেই মনে পড়বে।
• ইন্টিগ্রেশনের শর্টকাট: বুয়েট বা রুয়েট-কুয়েট-চুয়েট (CKRUET) এমসিকিউতে অনেক বড় ইন্টিগ্রেশন আসে। এগুলো শর্টকাট ফর্মুলা (যেমন: Gamma function, Wallis formula) দিয়ে ১০ সেকেন্ডে সলভ করা যায়।
• টাইপ ধরে পড়া: ইন্টিগ্রেশনের হাজারটা ম্যাথ না করে প্রতিটি টাইপ থেকে ৩-৪টি ম্যাথ বুঝে সলভ করো।

ম্যাথের ইঞ্জিনিয়ারিং স্ট্যান্ডার্ড রিটেন ও এমসিকিউ প্র্যাকটিস করতে Prostuti অ্যাপের Master Question Bank সেকশনটি তোমার জন্য দারুণ হেল্পফুল হবে।`
    },
    {
      id: 15,
      track: 'bn',
      category: 'HSC Biology',
      title: 'HSC Biology: পরীক্ষায় চিত্র আঁকার সঠিক নিয়ম ও কৌশল',
      summary: 'এইচএসসি বায়োলজি (বিশেষ করে প্র্যাকটিক্যাল ও সিকিউ) অংশে ভালো মার্কস পাওয়ার মূল অস্ত্র হলো সুন্দর এবং সঠিক চিত্র। অনেক সময় থিওরি একটু কম লিখলেও চিত্র ভালো হলে টিচাররা ফুল মার্কস দিয়ে দেন।',
      date: '২৪ জুন, ২০২৬',
      readTime: '৪ মিনিট পড়ার সময়',
      body: `ভূমিকা:
এইচএসসি বায়োলজি (বিশেষ করে প্র্যাকটিক্যাল ও সিকিউ) অংশে ভালো মার্কস পাওয়ার মূল অস্ত্র হলো সুন্দর এবং সঠিক চিত্র। অনেক সময় থিওরি একটু কম লিখলেও চিত্র ভালো হলে টিচাররা ফুল মার্কস দিয়ে দেন।

চিত্র আঁকার হ্যাকস:
• পেন্সিলের ব্যবহার: চিত্র অবশ্যই HB বা 2B পেন্সিল দিয়ে আঁকবে। কখনো কলম ব্যবহার করবে না।
• লেবেলিং (Labeling): চিত্রের বিভিন্ন অংশের নাম (লেবেলিং) সবসময় খাতার ডান পাশে স্কেল ধরে এক লাইনে লেখার চেষ্টা করবে। এতে খাতা খুব সুন্দর দেখায়।
• দ্রুত আঁকার প্র্যাকটিস: পরীক্ষার হলে একটি চিত্র আঁকতে সর্বোচ্চ ৩-৪ মিনিট সময় নেওয়া উচিত। বাসায় ঘড়ি ধরে হৃদপিণ্ড, নেফ্রন বা চোখের চিত্র দ্রুত আঁকার প্র্যাকটিস করো।

বায়োলজির চ্যাপ্টার-ভিত্তিক সিকিউ (CQ) প্রশ্ন এবং টপ কলেজের টেস্ট পেপার সলভ করতে আজই Prostuti অ্যাপটি ইন্সটল করো।`
    },
    {
      id: 16,
      track: 'bn',
      category: 'Exam Strategy',
      title: 'শেষ ৩০ দিনের রিভিশন স্ট্র্যাটেজি (HSC ও Admission)',
      summary: 'পরীক্ষার আগের এক মাস হলো সবচেয়ে ক্রুশিয়াল সময়। সারা বছর অনেক পড়াশোনা করেও শুধু শেষ মাসের এলোমেলো প্রস্তুতির কারণে অনেকেই পিছিয়ে পড়ে।',
      date: '২৩ জুন, ২০২৬',
      readTime: '৫ মিনিট পড়ার সময়',
      body: `ভূমিকা:
পরীক্ষার আগের এক মাস হলো সবচেয়ে ক্রুশিয়াল সময়। সারা বছর অনেক পড়াশোনা করেও শুধু শেষ মাসের এলোমেলো প্রস্তুতির কারণে অনেকেই পিছিয়ে পড়ে।

শেষ মাসের করণীয়:
• নতুন কিছু না পড়া: শেষ ৩০ দিনে নতুন কোনো কঠিন টপিক ধরতে যাবে না। সারা বছর যা পড়েছ, সেগুলোই বারবার রিভিশন দাও।
• Spaced Repetition: আজকে যে অধ্যায় পড়লে, ৩ দিন পর সেটার ওপর একটি শর্ট পরীক্ষা দাও। এটি ব্রেনে তথ্য গেঁথে রাখতে সাহায্য করে।
• ডেইলি মডেল টেস্ট: প্রতিদিন অন্তত একটি ফুল লেংথ মডেল টেস্ট দাও। এতে পরীক্ষার হলের টাইম ম্যানেজমেন্টের ভয় কেটে যাবে।

তোমার শেষ সময়ের প্রস্তুতিকে শতভাগ নিখুঁত করতে Prostuti অ্যাপের Daily Study Tracker এবং Weekly Exam ফিচারগুলো ব্যবহার করে নিজের প্রগ্রেস ট্র্যাক করো।`
    },
    {
      id: 17,
      track: 'bn',
      category: 'HSC English',
      title: 'HSC English: গ্রামারে ফুল মার্কস পাওয়ার উপায়',
      summary: 'বিজ্ঞান বিভাগের অনেক মেধাবী শিক্ষার্থী ফিজিক্স-ম্যাথে ভালো করলেও ইংরেজিতে এ প্লাস (A+) মিস করে। বিশেষ করে English 2nd Paper-এর গ্রামার অংশে মার্কস কমে যায়।',
      date: '২২ জুন, ২০২৬',
      readTime: '৪ মিনিট পড়ার সময়',
      body: `ভূমিকা:
বিজ্ঞান বিভাগের অনেক মেধাবী শিক্ষার্থী ফিজিক্স-ম্যাথে ভালো করলেও ইংরেজিতে এ প্লাস (A+) মিস করে। বিশেষ করে English 2nd Paper-এর গ্রামার অংশে মার্কস কমে যায়।

গ্রামারে স্ট্রং হওয়ার উপায়:
• বোর্ড প্রশ্ন সলভ: বিগত ৫ বছরের সব বোর্ডের গ্রামার প্রশ্ন সলভ করো। এইচএসসিতে গ্রামার রুলস প্রায় ৮০% সময় রিপিট হয়।
• Vocabulary বা শব্দভাণ্ডার: Right form of verbs বা Preposition-এ ভালো করতে হলে বাক্যের অর্থ বোঝা জরুরি। তাই নিয়মিত ভোকাবুলারি পড়ার অভ্যাস করো।
• রুলস মুখস্থ নয়, প্র্যাকটিস করো: শুধু বই থেকে রুলস পড়লে মনে থাকবে না। রুলস পড়ার সাথে সাথে সেগুলোর এক্সারসাইজ সলভ করো।

ইংরেজি প্রস্তুতির জন্য Prostuti অ্যাপের Previous Year Question Bank সেকশন থেকে বোর্ড প্রশ্নগুলোর কুইক প্র্যাকটিস করতে পারো।`
    },
    {
      id: 18,
      track: 'bn',
      category: 'Mental Health',
      title: 'পরীক্ষার হলের নার্ভাসনেস ও স্ট্রেস ম্যানেজমেন্ট',
      summary: 'স্ট্রেস বা প্যানিক তোমার ভালো প্রস্তুতিকেও নষ্ট করে দিতে পারে। পরীক্ষার হলে গিয়ে নার্ভাসনেসের কারণে সব ভুলে যাওয়ার সমস্যা অনেকেরই থাকে।',
      date: '২১ জুন, ২০২৬',
      readTime: '৫ মিনিট পড়ার সময়',
      body: `ভূমিকা:
"পড়াশোনা খুব ভালো হয়েছিল, কিন্তু পরীক্ষার হলে গিয়ে নার্ভাসনেসের কারণে সব ভুলে গেছি!"—এই আফসোস অনেকেরই থাকে। স্ট্রেস বা প্যানিক তোমার ভালো প্রস্তুতিকেও নষ্ট করে দিতে পারে।

স্ট্রেস কাটানোর উপায়:
• ডিপ ব্রিদিং (Deep Breathing): প্রশ্ন পাওয়ার পর যদি মাথা ব্ল্যাঙ্ক হয়ে যায়, তবে চোখ বন্ধ করে ৩ বার দীর্ঘ শ্বাস নাও এবং ছাড়ো। এটি ব্রেনে অক্সিজেন ফ্লো বাড়িয়ে তোমাকে শান্ত করবে।
• সহজ প্রশ্ন দিয়ে শুরু: প্রশ্নপত্রে প্রথম ২-৩টি প্রশ্ন কঠিন হলে ঘাবড়ানোর কিছু নেই। সহজ প্রশ্নগুলো খুঁজে বের করে আগে সেগুলোর উত্তর করো। এতে কনফিডেন্স ফিরে আসবে।
• পর্যাপ্ত ঘুম: পরীক্ষার আগের রাতে না ঘুমিয়ে পড়ার অভ্যাস বাদ দাও। ব্রেনকে ফাংশন করার জন্য ৬-৭ ঘণ্টার ঘুম বাধ্যতামূলক।

পরীক্ষার হলের স্ট্রেস ও প্রেশার আগে থেকেই ফেস করতে Prostuti অ্যাপের Battle Royale (বন্ধুদের সাথে Live Exam) ফিচারটি ট্রাই করে দেখো!`
    },
    {
      id: 19,
      track: 'bn',
      category: 'EdTech',
      title: 'Prostuti AI: তোমার পার্সোনাল স্টাডি অ্যাসিস্ট্যান্ট কীভাবে কাজ করে?',
      summary: 'পড়তে বসে হঠাৎ একটা ম্যাথে আটকে গেলে? রাত ২টায় তো আর টিচারকে ফোন দেওয়া সম্ভব না! এই সমস্যার সমাধান দিতেই শিক্ষাক্ষেত্রে যুক্ত হয়েছে আর্টিফিশিয়াল ইন্টেলিজেন্স বা AI।',
      date: '২০ জুন, ২০২৬',
      readTime: '৪ মিনিট পড়ার সময়',
      body: `ভূমিকা:
পড়তে বসে হঠাৎ একটা ম্যাথে আটকে গেলে? রাত ২টায় তো আর টিচারকে ফোন দেওয়া সম্ভব না! এই সমস্যার সমাধান দিতেই শিক্ষাক্ষেত্রে যুক্ত হয়েছে আর্টিফিশিয়াল ইন্টেলিজেন্স বা AI।

Prostuti AI-এর সুবিধা:
• ইনস্ট্যান্ট ডাউট সল্ভ: ফিজিক্স বা ম্যাথের যেকোনো প্রশ্ন স্ক্যান করে বা লিখে দিলেই Prostuti AI তোমাকে সাথে সাথে সেটির ধাপে ধাপে সমাধান বুঝিয়ে দেবে।
• বইয়ের রেফারেন্স: এটি শুধু উত্তর দেয় স্বাধীনতা, বরং এইচএসসি সিলেবাসের কোন বই থেকে কনসেপ্টটি নেওয়া হয়েছে, তাও বলে দেয়।
• ২৪/৭ সাপোর্ট: দিন বা রাত, যেকোনো সময় তোমার যেকোনো একাডেমিক প্রশ্নের উত্তর দিতে Prostuti AI প্রস্তুত।

পড়াশোনাকে আরও স্মার্ট ও আধুনিক করতে আজই Prostuti প্রিমিয়াম সাবস্ক্রিপশন নিয়ে আনলিমিটেড AI সাপোর্ট উপভোগ করো!`
    },
    {
      id: 20,
      track: 'bn',
      category: 'DU Admission',
      title: 'ঢাবি ক ইউনিট (DU A Unit) প্রস্তুতি: মেইন বই কতটা জরুরি?',
      summary: 'ঢাকা বিশ্ববিদ্যালয়ে প্রতি বছর লাখো শিক্ষার্থী পরীক্ষা দেয়। অনেকেই বাজার থেকে মোটা মোটা গাইড কিনে পড়া শুরু করে, অথচ ঢাবির প্রশ্ন মূলত মেইন বইয়ের একদম বেসিক থেকেই হয়।',
      date: '১৯ জুন, ২০২৬',
      readTime: '৫ মিনিট পড়ার সময়',
      body: `ভূমিকা:
ঢাকা বিশ্ববিদ্যালয়ে প্রতি বছর লাখো শিক্ষার্থী পরীক্ষা দেয়। অনেকেই বাজার থেকে মোটা মোটা গাইড কিনে পড়া শুরু করে, অথচ ঢাবির প্রশ্ন মূলত মেইন বইয়ের একদম বেসিক থেকেই হয়।

মেইন বইয়ের গুরুত্ব:
• বায়োলজি ও কেমিস্ট্রি: এই দুটি বিষয়ের জন্য মেইন বই রিডিং পড়ার কোনো বিকল্প নেই। কেমিস্ট্রির ব্যতিক্রম ধর্মগুলো এবং বায়োলজির উদাহরণগুলো থেকে ঢাবিতে সরাসরি প্রশ্ন আসে।
• ফিজিক্স ও ম্যাথ: ম্যাথের জন্য বইয়ের উদাহরণ ও কাজ অংশে দেওয়া ছোট ছোট ম্যাথগুলো ঢাকা বিশ্ববিদ্যালয়ের জন্য খুবই ইম্পর্টেন্ট।
• রিটেন প্রস্তুতি: ঢাবির রিটেন অংশে ৩-৪ লাইনে উত্তর করতে হয়। মেইন বইয়ের থিওরি ক্লিয়ার না থাকলে রিটেনে ভালো করা প্রায় অসম্ভব।

ঢাবির আগের বছরগুলোর প্রশ্নব্যাংক এনালাইসিস করতে ও মক টেস্ট দিতে Prostuti অ্যাপের University Admission Preparation সেকশনটি আজই ভিজিট করো।`
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
  const [lang, setLang] = usePersistentLang('bn');
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
                    style={{ background: 'var(--color-overlay-5)', border: '1px solid var(--color-border-default)', color: 'var(--color-text-primary)', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', cursor: 'pointer' }}
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

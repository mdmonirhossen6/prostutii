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

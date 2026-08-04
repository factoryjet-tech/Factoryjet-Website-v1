import type { Metadata } from 'next';
import Breadcrumbs from '@/components/v2/Breadcrumbs';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import IndustriesGrid, { type IndustryCard } from '@/components/v2/IndustriesGrid';
import CityContextSection from '@/components/v2/CityContextSection';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import Heading from '@/components/v2/Heading';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

const CANONICAL = 'https://factoryjet.com/digital-marketing/delhi';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in Delhi | FactoryJet',
  description:
    'Looking for a digital marketing agency or company in Delhi? FactoryJet helps Delhi and NCR businesses get found on Google and AI tools like ChatGPT, and turn clicks into real enquiries. One senior in-house team for SEO, ads, websites and more.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Digital Marketing Agency in Delhi | FactoryJet',
    description:
      'One senior in-house team that gets Delhi and NCR businesses found on Google and AI search, and turns visitors into enquiries. SEO, ads, websites, social and more.',
    url: CANONICAL,
    images: [
      {
        url: 'https://factoryjet.com/images/services/digital-marketing/delhi/hero.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet: Digital Marketing Agency in Delhi',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency in Delhi | FactoryJet',
    description:
      'Get found on Google and AI search across Delhi and NCR, and turn visitors into customers. One senior in-house team.',
    images: ['https://factoryjet.com/images/services/digital-marketing/delhi/hero.webp'],
  },
  alternates: {
    canonical: CANONICAL,
    languages: {
      'en-IN': CANONICAL,
      'x-default': CANONICAL,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/* ────────────────────────────────────────────────────────────────────────
   Content is plain language, no pricing anywhere. Every jargon word is
   explained the first time it appears, so a first-time reader in Delhi
   gets it instantly. FAQs, headings and the listicle are grounded in live
   DataForSEO People-Also-Ask, related searches and keyword-suggestion
   volumes for "digital marketing agency / company in delhi" and related
   terms (India, location_code 2356, checked July 2026). Market stats are
   cited to resolving authoritative sources (DataReportal, IBEF, OpenAI).
   ──────────────────────────────────────────────────────────────────────── */

const HERO_TRUST = [
  '500+ businesses helped',
  '12 years of experience',
  'One senior in-house team',
  'Works across Delhi and NCR',
];

const STATS = [
  { value: '500+', label: 'Businesses helped', note: 'Across India, US, UK and UAE' },
  { value: '12 yrs', label: 'Years doing this', note: 'Not a new agency practising on you' },
  { value: 'In-house', label: 'Senior team', note: 'No work handed to freshers' },
  { value: 'Delhi + NCR', label: 'Fully covered', note: 'Delhi, Gurgaon, Noida, Faridabad' },
];

// Channel grid = the internal-link authority hub. Each card links into an
// existing FactoryJet service page so this Delhi page passes authority down.
const CHANNELS: IndustryCard[] = [
  {
    name: 'SEO (get found on Google)',
    description:
      'SEO means search engine optimisation. In plain words: showing up on Google when a Delhi customer searches to buy, without paying for each click.',
    linkLabel: 'Explore SEO',
    linkHref: '/seo',
  },
  {
    name: 'Websites that sell',
    description:
      'A fast, mobile-first website that loads quickly on patchy Delhi mobile networks and turns visitors into calls and enquiries, instead of just looking nice.',
    linkLabel: 'See web design',
    linkHref: '/web-design',
  },
  {
    name: 'Online stores',
    description:
      'Ecommerce means selling online. We build stores that are easy for customers to buy from and easy for you to run and ship across Delhi NCR and India.',
    linkLabel: 'See ecommerce',
    linkHref: '/services/ecommerce-development',
  },
  {
    name: 'AI search (get picked by ChatGPT)',
    description:
      'When people ask ChatGPT, Gemini or Google’s AI for a recommendation, we help your Delhi business be one of the answers. This newer skill is called GEO.',
    linkLabel: 'Explore AI SEO',
    linkHref: '/ai-seo',
  },
  {
    name: 'Chatbots and automation',
    description:
      'Smart helpers that reply to customers day and night and do repeat tasks for you, so your Delhi team saves hours every week.',
    linkLabel: 'See AI agents',
    linkHref: '/services/ai-agent-development',
  },
  {
    name: 'WhatsApp for business',
    description:
      'Answer customers and collect leads automatically on WhatsApp, the app almost every Delhi customer already opens dozens of times a day.',
    linkLabel: 'See WhatsApp chatbot',
    linkHref: '/whatsapp-chatbot',
  },
  {
    name: 'Shopify stores',
    description:
      'Shopify is a popular tool for online shops. We build custom Shopify stores that look great and load fast, ready for Delhi and pan-India delivery.',
    linkLabel: 'See Shopify',
    linkHref: '/shopify-development',
  },
  {
    name: 'WordPress websites',
    description:
      'WordPress is the world’s most-used website tool. We build flexible sites on it that you fully own and control.',
    linkLabel: 'See WordPress',
    linkHref: '/wordpress-development',
  },
];

// Delhi market context: every stat below is cited to a resolving,
// authoritative outbound source (verified July 2026).
const DELHI_MARKET_STATS = [
  {
    value: '1.03B',
    label:
      'internet users in India, one of the largest online markets in the world, and a big share of them search from Delhi and NCR every day.',
    sourceUrl: 'https://datareportal.com/reports/digital-2026-india',
    sourceLabel: 'DataReportal / Kepios 2026',
  },
  {
    value: '100M+',
    label:
      'people in India now ask ChatGPT something every week, making India its second biggest market, so being missing from AI answers is a real gap.',
    sourceUrl:
      'https://www.indiatvnews.com/technology/news/india-becomes-second-largest-market-worldwide-with-100-million-chatgpt-users-per-week-sam-altman-2026-02-16-1030489',
    sourceLabel: 'India TV News / OpenAI, Feb 2026',
  },
  {
    value: '3.9 lakh',
    label:
      'registered small and medium businesses in Delhi alone, which means a lot of competitors are fighting for the same customers you want.',
    sourceUrl: 'https://www.ibef.org/states/delhi',
    sourceLabel: 'IBEF Delhi',
  },
] as const;

// Delhi verticals: a net-new listicle grounded in the vertical searches
// that show up in Delhi SERPs (doctors, D2C, real estate, coaching, food).
const DELHI_BUSINESS_TYPES = [
  {
    name: 'Shops and local service businesses',
    who: 'Salons, gyms, repair services, home services and local stores.',
    works:
      'Showing up on Google and Google Maps when someone nearby searches, plus quick WhatsApp replies, brings the most walk-ins and calls.',
  },
  {
    name: 'Doctors, clinics and dentists',
    who: 'Single clinics and multi-branch chains across Delhi and NCR.',
    works:
      'Patients search by area, such as "near Saket" or "in South Delhi", read a little, then book. Simple trust pages and easy enquiries win them.',
  },
  {
    name: 'Online stores and D2C brands',
    who: 'Brands that want to sell directly, not only through Amazon or Flipkart.',
    works:
      'A fast store, Google and Instagram, and getting picked by AI shopping answers bring steady orders you actually own.',
  },
  {
    name: 'Restaurants, cafes and cloud kitchens',
    who: 'Dine-in spots, cafes and delivery-only kitchens.',
    works:
      'Most new customers come from Google Maps searches, reviews and a quick link to order or book a table on a phone.',
  },
  {
    name: 'Real estate and property businesses',
    who: 'Developers, brokers and property consultants.',
    works:
      'Buyers search by area and compare a lot. Photo-rich pages, local search and instant WhatsApp enquiries reach serious buyers fast.',
  },
  {
    name: 'Coaching centres, institutes and schools',
    who: 'Test-prep centres, skill institutes and schools.',
    works:
      'Parents and students search and read reviews before they call. Ranking for your courses and area, and looking trustworthy, decides who they pick.',
  },
];

const COMPARE_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Typical Delhi agency' },
  { label: 'Freelancer' },
  { label: 'Your own team' },
] as const;

const COMPARE_ROWS = [
  {
    feature: 'Who actually does your work',
    values: ['Senior, in-house', 'Often freshers', 'One person', 'You hire and train'],
  },
  {
    feature: 'All channels handled in one place',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="ih" kind="partial" />,
    ],
  },
  {
    feature: 'Understands Delhi and NCR local search',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="ih" kind="partial" />,
    ],
  },
  {
    feature: 'Content that works in Hindi and English',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="ih" kind="partial" />,
    ],
  },
  {
    feature: 'Sets up your Google Business Profile and Maps listing',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="ih" kind="no" />,
    ],
  },
  {
    feature: 'Simple monthly report you can actually read',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="ih" kind="partial" />,
    ],
  },
  {
    feature: 'Shows real enquiries, not just likes and views',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="ih" kind="partial" />,
    ],
  },
  {
    feature: 'Gets you into AI search (ChatGPT, Gemini, Google AI)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="no" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="ih" kind="partial" />,
    ],
  },
  {
    feature: 'One point of contact who knows your account',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="ih" kind="yes" />,
    ],
  },
  {
    feature: 'Honest about what will not work',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="ih" kind="yes" />,
    ],
  },
  {
    feature: 'Start quickly, no long lock-in',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="no" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="ih" kind="no" />,
    ],
  },
];

// "Three reasons money gets wasted": now rendered as a LIGHT section
// (the single dark section on this page is Testimonials).
type Reason = { badge: string; title: string; body: string };

const REASONS: Reason[] = [
  {
    badge: '01',
    title: 'Delhi is crowded, so one channel is not enough',
    body:
      'Every category in Delhi has dozens of businesses fighting for the same customer. Doing only SEO, or only ads, or only Instagram leaves gaps. Buyers hop between Google, Instagram and WhatsApp before they decide. We join the channels so nothing leaks between them.',
  },
  {
    badge: '02',
    title: 'Freshers learning on your business',
    body:
      'Plenty of Delhi agencies win you over with senior people in the pitch, then quietly hand your work to trainees. You pay for experience you never actually get. At FactoryJet, experienced people do the real work on your account.',
  },
  {
    badge: '03',
    title: 'Ignoring AI search is a costly mistake',
    body:
      'More than 100 million people in India now ask ChatGPT something every week, and a big share of that is in and around Delhi NCR. Many ask which company they should pick. Agencies stuck on old-style SEO miss this completely. We get you found on Google and inside AI answers.',
  },
];

// Named-competitor comparison, built from live DataForSEO SERP + ranked-keyword
// data for "digital marketing agency in delhi" (India, checked July 2026).
// These are the agencies actually ranking on Google for the term. Honest,
// positive, with open self-disclosure that FactoryJet is on the list.
const AGENCIES = [
  {
    name: 'FactoryJet',
    bestFor:
      'Delhi and NCR businesses that want one senior team across website, Google, ads and AI search, with plain-English reports. (Yes, that is us. We include ourselves openly and let the comparison speak for itself.)',
    isUs: true,
  },
  {
    name: 'WebeeSocial',
    bestFor: 'Brands that want strong social media and creative campaigns as their main focus.',
  },
  {
    name: 'Techmagnate',
    bestFor: 'Larger companies that need deep, heavy SEO (Google rankings) at scale.',
  },
  {
    name: 'Volume',
    bestFor: 'Businesses that lean on paid advertising and performance media buying across Delhi NCR.',
  },
  {
    name: 'FruitBowl Digital',
    bestFor: 'Brands that want wide digital coverage with a public-relations and creative flavour.',
  },
  {
    name: 'Digital Markitors',
    bestFor: 'Small businesses whose first priority is steady SEO on a focused plan.',
  },
];

const JOURNEY: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'A free, no-pressure chat',
    description: 'We learn about your Delhi business, your customers and your goals. No jargon, no hard sell.',
  },
  {
    number: '02',
    title: 'A clear, simple plan',
    description: 'We show you exactly what we will do and why, in words you can understand and approve.',
  },
  {
    number: '03',
    title: 'We build and run it',
    description: 'Website, Google, ads, AI search, whatever you picked. Our senior team does the actual work.',
  },
  {
    number: '04',
    title: 'You see the results',
    description: 'A simple monthly report: visitors, enquiries and what we did. Real numbers, plainly shown.',
  },
  {
    number: '05',
    title: 'We keep improving',
    description: 'We do more of what brings you leads and drop what does not. Month after month.',
  },
];

const FAQ_CATEGORIES: FAQCategory[] = [
  { key: 'choosing', label: 'Choosing an agency' },
  { key: 'services', label: 'What we do' },
  { key: 'local', label: 'Delhi and NCR' },
  { key: 'business', label: 'Businesses we help' },
  { key: 'results', label: 'Results and reports' },
  { key: 'trust', label: 'Trust and safety' },
  { key: 'start', label: 'Getting started' },
  { key: 'ai', label: 'AI and the future' },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'choosing',
    question: 'Which is the best digital marketing agency in Delhi?',
    answer:
      'There is no single "best" one for everyone in a city as big as Delhi. The best agency for you is the one that fits your size, your goals and your budget. A large brand in Connaught Place and a small shop in Lajpat Nagar need very different help. Lower on this page we compare the agencies that actually rank for this in Delhi, honestly, including ourselves, so you can pick the right fit instead of the loudest name.',
  },
  {
    category: 'choosing',
    question: 'How do I choose the right digital marketing agency in Delhi?',
    answer:
      'Ask three simple questions before you sign anything. One: who will actually do my work, a senior person or a fresher? Two: what exactly will I get each month, in plain words? Three: can you show me real results for a business like mine? A Delhi agency that answers all three clearly is usually a safe choice.',
  },
  {
    category: 'choosing',
    question: 'What is the difference between a digital marketing agency and a digital marketing company in Delhi?',
    answer:
      'In practice, almost nothing. In Delhi you will see the words agency, company and firm used for the same thing. Some people picture a company as bigger and an agency as more creative, but there is no fixed rule. What actually matters is not the label. It is who does your work, what you get each month, and whether they can show real results. Judge that, not the word.',
  },
  {
    category: 'choosing',
    question: 'How do I check if a Delhi agency is actually good before I hire them?',
    answer:
      'Do three quick checks. Ask to see two or three businesses like yours that they have helped, and look at the real result, not just a nice screenshot. Search their own name on Google and see whether they practise what they preach. And ask who will run your account day to day. A good Delhi agency answers all three without dodging.',
  },
  {
    category: 'choosing',
    question: 'Should I trust "top 10 digital marketing agencies in Delhi" lists?',
    answer:
      'Be careful with them. Many of those "top 10" and "top 5" lists are paid placements or written by the agencies themselves, so being on one does not prove quality. Use them to build a shortlist, then judge each agency the same way: who does the work, what you get monthly, and real proof. The order on a list matters far less than the answers you get on a call.',
  },
  {
    category: 'choosing',
    question: 'Which agency is best for digital marketing if I run a small business or startup in Delhi?',
    answer:
      'Small businesses and startups do best with an agency that puts a real senior person on their account and covers several channels together. You want one team that can build your website, get you found on Google and run your ads, instead of hiring five separate people across Delhi. Look for clear monthly reports so you always know what you are getting.',
  },
  {
    category: 'choosing',
    question: 'Agency vs freelancer vs your own team: which is right for me?',
    answer:
      'A freelancer is one person. They are handy for a single small task, but one person cannot cover SEO, ads, design and content all at once. Building your own team in Delhi gives you full control but takes months to hire and train, and salaries in NCR are not small. An agency gives you a whole team instantly, across every skill. For most growing businesses, an agency is the fastest way to cover everything without the hiring headache.',
  },
  {
    category: 'services',
    question: 'What does a digital marketing agency in Delhi actually do?',
    answer:
      'In simple words, it helps more of the right people find your business online and turn into customers. That means building or fixing your website, getting you to show up on Google (this is called SEO, short for search engine optimisation), running ads, posting on social media, and staying in touch by email or WhatsApp. The goal is always the same: more calls, more enquiries, more sales for your Delhi business.',
  },
  {
    category: 'services',
    question: 'What are the 7 types of digital marketing?',
    answer:
      'The seven you will hear about most are: SEO (showing up on Google for free), paid search and social ads (paying Google, Instagram or Facebook to show your business), social media marketing (posting to build trust), content marketing (blogs and videos that pull people in), email marketing, WhatsApp and messaging, and now AI search (getting recommended by tools like ChatGPT). A good agency mixes only the few that fit your business, not all seven at once.',
  },
  {
    category: 'services',
    question: 'What are the 4 types of digital marketing?',
    answer:
      'When people say "the 4 main types" they usually mean: SEO (free Google traffic), paid ads (Google and social ads you pay for), social media marketing, and content marketing. Email and WhatsApp are often folded in as a fifth. The names matter less than the outcome. We pick the mix that brings your Delhi business the most enquiries.',
  },
  {
    category: 'services',
    question: 'How is digital marketing different from social media marketing?',
    answer:
      'Social media marketing is just one part of digital marketing. Digital marketing is the whole picture: your website, showing up on Google, ads, email, WhatsApp and AI search, as well as social media. Social media on its own builds trust but rarely brings enough enquiries by itself. For most Delhi businesses, social works best as one piece of a bigger plan, not the whole plan.',
  },
  {
    category: 'services',
    question: 'What is performance marketing, and is it right for my Delhi business?',
    answer:
      'Performance marketing simply means marketing where you can see and count the result, like enquiries or sales, and you focus on what works. Running Google or Instagram ads and tracking the leads they bring is performance marketing. It suits Delhi businesses that want quick, measurable results and can handle a steady flow of enquiries. We always tie effort to real outcomes, not just clicks.',
  },
  {
    category: 'services',
    question: 'What is a landing page, and does my Delhi business need one?',
    answer:
      'A landing page is a single, focused page built for one job, usually to turn an ad click into an enquiry. Instead of dropping someone on your busy homepage, you send them to a clean page about the one thing they searched for. For Delhi businesses running ads, a good landing page often brings far more enquiries from the same clicks. If you are not running ads yet, you may not need one.',
  },
  {
    category: 'services',
    question: 'What is the 3-3-3 rule in marketing?',
    answer:
      'The 3-3-3 rule is an informal guideline, not an official law, and people use it a few different ways. The most common version is about content: grab attention in the first 3 seconds, hold it for about 3 minutes, and leave one idea people still remember 3 days later. Some marketers use it to mean a simple posting mix instead. Do not get lost in the rule itself. What matters is whether your content actually brings you enquiries.',
  },
  {
    category: 'services',
    question: 'What is the rule of 7 in marketing?',
    answer:
      'The rule of 7 is an old idea that a person usually needs to come across your business about seven times before they feel ready to buy. It is not a hard law, but the point holds: one ad or one post is rarely enough. That is why we mix channels, so a Delhi customer sees you on Google, then on Instagram, then gets a helpful WhatsApp reply, and slowly starts to trust you.',
  },
  {
    category: 'services',
    question: 'What is the golden rule of marketing?',
    answer:
      'The oldest golden rule is simple: treat the customer the way you would want to be treated. In everyday marketing that means being clear, being honest, and making it easy for someone to say yes. Clever tactics come and go, but a Delhi business that is easy to trust and easy to buy from almost always wins over one that just shouts the loudest.',
  },
  {
    category: 'services',
    question: 'Which channels bring the most enquiries for Delhi businesses?',
    answer:
      'It depends on your business, and any agency that says "do everything" is guessing. For most Delhi small businesses, showing up on Google when someone is searching to buy, plus a fast mobile website and quick WhatsApp follow-up, brings the most enquiries. Instagram builds trust but works more slowly. We pick channels based on where your Delhi customers already are, not on what is trendy.',
  },
  {
    category: 'services',
    question: 'Do I need SEO, ads, or social media first?',
    answer:
      'If you need customers this week, start with ads, because they bring visitors the day you switch them on. If you want steady free traffic that grows over months, start with SEO. In a competitive Delhi market, most businesses do best with a small mix: ads for quick results while SEO builds up quietly in the background.',
  },
  {
    category: 'local',
    question: 'Do I need an agency with an office in Delhi, or can it be remote?',
    answer:
      'You do not need an agency sitting in your own part of Delhi. Almost all digital marketing work happens online, so a good team can help your business from anywhere. What matters more is whether they understand your Delhi customers and reply quickly. We work with businesses across India, the US, the UK and the UAE, all remotely, and it works smoothly.',
  },
  {
    category: 'local',
    question: 'Do you work with businesses across Delhi NCR, Gurgaon, Noida and Faridabad?',
    answer:
      'Yes. Delhi NCR is really one big connected market, and we treat it that way. We help businesses in Delhi itself, plus Gurgaon, Noida, Ghaziabad and Faridabad. Because the work is online, being in a different part of NCR from us changes nothing about how well we can help you grow.',
  },
  {
    category: 'local',
    question: 'What is the difference between a Delhi agency and a Delhi NCR agency?',
    answer:
      'There is no real difference. Delhi NCR just means Delhi plus the connected cities around it, like Gurgaon, Noida, Ghaziabad and Faridabad. An agency that says Delhi NCR is simply telling you it serves the whole region. Because the work happens online, we help businesses across all of Delhi and NCR the same way, whichever part you are in.',
  },
  {
    category: 'local',
    question: 'Do you cover South Delhi and areas like Connaught Place, Nehru Place and Saket?',
    answer:
      'Yes. We help businesses right across Delhi, from South Delhi and Saket to Connaught Place, Nehru Place, Karol Bagh and beyond. If your customers search for you by area, for example "near Saket" or "in South Delhi", we can help you show up for those local searches on Google and Google Maps.',
  },
  {
    category: 'local',
    question: 'Can you help my business show up on Google Maps in my part of Delhi?',
    answer:
      'Yes. When someone searches for a service near them, Google often shows a small map with a few businesses on top. Getting your business into that box, and onto Google Maps, is called local SEO. We set up and clean your Google Business Profile, fix your address and phone details, and help you collect reviews, so you show up when people search near Saket, Rohini, Dwarka or wherever you are.',
  },
  {
    category: 'local',
    question: 'How is marketing for a Delhi business different from other cities?',
    answer:
      'Delhi is crowded and competitive, so standing out takes sharper work than in a smaller city. Buyers here compare a lot before deciding, and they move between Hindi and English easily, so your content should feel natural to them. NCR is also spread across Delhi, Gurgaon and Noida, so local search and Google Maps matter more. We build for how Delhi customers actually search and buy.',
  },
  {
    category: 'local',
    question: 'Is a Delhi agency better for me than a Gurgaon one?',
    answer:
      'Not automatically. Since the work happens online, whether an agency sits in Delhi or Gurgaon matters far less than the quality of its team and how well it understands your customers. Judge the people and the work, not the pin code. We serve the whole of Delhi NCR the same way, wherever you and we happen to be based.',
  },
  {
    category: 'business',
    question: 'Do you help doctors, clinics and dentists in Delhi?',
    answer:
      'Yes. Clinics and doctors in Delhi do well when patients can find them for area searches like "near Saket" or "in South Delhi", read a little about them and trust them, then book easily. We build simple, fast pages, help you show up on Google and Google Maps, and set up quick WhatsApp or call enquiries, so more of the people searching actually reach you.',
  },
  {
    category: 'business',
    question: 'Do you help online stores and D2C brands in Delhi?',
    answer:
      'Yes. D2C means selling your own products directly to customers instead of only through Amazon or Flipkart. We build fast online stores, get them found on Google, run ads on Google and Instagram, and help your products get picked by AI shopping answers. The aim is steady orders that you own, not sales that depend on one marketplace.',
  },
  {
    category: 'business',
    question: 'Do you help restaurants, cafes and cloud kitchens in Delhi?',
    answer:
      'Yes. For food businesses in Delhi, most new customers come from Google Maps searches, reviews and a quick link to order or book. We help you show up when people nearby search to eat, keep your listing and photos looking good, and make ordering or reserving a table simple on a phone.',
  },
  {
    category: 'business',
    question: 'Do you help real estate and property businesses in Delhi?',
    answer:
      'Yes. Property buyers in Delhi search by area and compare a lot before they call. We build photo-rich pages for your projects and areas, help you rank for local property searches, and set up WhatsApp enquiries so a serious buyer can reach you in seconds instead of filling a long form.',
  },
  {
    category: 'business',
    question: 'Do you help coaching centres, institutes and schools in Delhi?',
    answer:
      'Yes. Parents and students almost always search and read reviews before they visit or call. We help your centre rank for the courses and areas you teach, look trustworthy to a first-time visitor, and collect enquiries cleanly, so more of the people already searching in your area choose you.',
  },
  {
    category: 'results',
    question: 'How long does digital marketing take to show results in a market as competitive as Delhi?',
    answer:
      'Ads can bring enquiries within days. SEO (free Google traffic) usually takes three to six months to build up, and a little longer in very competitive Delhi categories where many businesses are fighting for the same searches. Social media and content also need a few months to earn trust. Anyone who promises big results in a week is not being honest with you.',
  },
  {
    category: 'results',
    question: 'How do you measure return on investment, or ROI, in plain terms?',
    answer:
      'ROI just means what you get back compared with what you put in. In plain terms, we look at how many enquiries and sales your marketing brought, not how many likes or views. We agree at the start what a good result looks like for your Delhi business, then show it in the monthly report in simple numbers, so you can see whether the work is paying off.',
  },
  {
    category: 'results',
    question: 'What reports will I get, and how do I know it is working?',
    answer:
      'You should get a simple monthly report that a normal person can read, not a page full of confusing charts. It should answer three things: how many people visited, how many enquiries or calls came in, and what we did that month. The only numbers that truly matter are enquiries and sales, not likes or views. If an agency cannot show you leads in plain numbers, treat it as a warning sign.',
  },
  {
    category: 'trust',
    question: 'How much does a digital marketing agency in Delhi charge?',
    answer:
      'Anyone who promises you a set figure before learning about your business is guessing. What your plan involves depends on three things: how many channels you need, how competitive your Delhi market is, and how fast you want results. That is why we do not publish one-size packages. After a free, no-pressure chat we build a plan around exactly what your business needs, and you choose what to take up. You are never pushed into more than you want.',
  },
  {
    category: 'trust',
    question: 'Who will actually do my work, seniors or freshers?',
    answer:
      'This is the most important question most people forget to ask. Many Delhi agencies win you over with senior people in the pitch, then hand your work to freshers. Always ask who will run your account day to day. At FactoryJet, experienced people do the work, not trainees practising on your business.',
  },
  {
    category: 'trust',
    question: 'What are the warning signs of a bad digital marketing agency in Delhi?',
    answer:
      'Watch out for these: a "guaranteed" number-one spot on Google, offers that seem too good to be true, big confusing words instead of clear answers, no real examples of past work, and being locked into a long contract before anything is proven. Any single one of these is a good reason to slow down and ask more questions.',
  },
  {
    category: 'trust',
    question: 'Do agencies lock you into long contracts?',
    answer:
      'Some do, and it is often to protect themselves rather than you. A confident agency is happy to prove its value month by month. Always ask how easy it is to leave if you are not happy. If leaving is made difficult, ask yourself why they built it that way. We would rather earn your next month than trap you into it.',
  },
  {
    category: 'start',
    question: 'How do I get started with a digital marketing agency in Delhi?',
    answer:
      'It is easier than most people expect. You book a free, no-pressure chat, we learn about your Delhi business and your goals, and we give you a simple plan of what will bring you the most enquiries. There is no jargon and no hard sell. You look at the plan and decide what, if anything, you want to start with.',
  },
  {
    category: 'start',
    question: 'I searched for a digital marketing course or job in Delhi and landed here. Can you still help?',
    answer:
      'This page is for business owners who want more customers, not for courses, training or jobs, so we may not be the right fit if you are looking to learn or to get hired. But if you run a business in Delhi and want to be found on Google and AI tools, and turn visitors into enquiries, then yes, this is exactly what we do. A quick chat will tell us both in a few minutes.',
  },
  {
    category: 'ai',
    question: 'Should my Delhi business show up in AI search like ChatGPT and Google AI Overviews?',
    answer:
      'Yes, and most Delhi agencies are not doing this yet, which is your opening. When people ask ChatGPT, Gemini or Google’s AI for a recommendation, you want your business to be one of the answers. Getting mentioned by AI tools is a newer skill called GEO (short for generative engine optimisation). We build it into our work, so you are found on Google and inside AI answers.',
  },
  {
    category: 'ai',
    question: 'What is GEO and AEO, and does my business need them?',
    answer:
      'GEO means getting recommended by AI tools like ChatGPT and Gemini. AEO, short for answer engine optimisation, means shaping your website so AI tools and Google’s instant answers pick your business as the reply. They are close cousins. If your customers are the kind of people who ask ChatGPT or Google a question before buying, and in Delhi many now do, then yes, you need both. If you are not sure, we can check for free whether AI tools already mention you.',
  },
  {
    category: 'ai',
    question: 'Will AI tools like ChatGPT replace digital marketing agencies in Delhi?',
    answer:
      'No, but they are changing the work, and that is a good thing for you. AI tools make some tasks faster, yet someone still has to set the strategy, judge what is working and make it fit your Delhi business. More importantly, your customers now ask AI tools for recommendations, so being one of those answers is a new job in itself. We use AI to move faster and to get you found inside AI answers.',
  },
];

/* ── Structured data (server-rendered in initial HTML, so AI crawlers read it) ── */

// Freshness signal. Benchmark: 56% of Google-AI-Overview-cited pages carry
// dateModified; these pages carried none. Keep this honest: bump it when the
// page's content actually changes, not on every unrelated deploy.
const PAGE_MODIFIED = '2026-08-04';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/digital-marketing/delhi#webpage',
  url: 'https://factoryjet.com/digital-marketing/delhi',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Digital Marketing Services in Delhi',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet Technologies',
    url: 'https://factoryjet.com',
    telephone: '+919699977699',
    address: { '@type': 'PostalAddress', addressCountry: 'IN' },
  },
  areaServed: { '@type': 'City', name: 'Delhi' },
  serviceType: 'Digital Marketing',
  description:
    'Integrated digital marketing for Delhi and NCR businesses: SEO, paid ads, social media, websites, WhatsApp and AI search, handled by one senior in-house team.',
};

const agenciesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Digital marketing agencies in Delhi, compared (July 2026)',
  itemListElement: AGENCIES.map((a, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: a.name,
  })),
};

const webpageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${CANONICAL}#webpage`,
  url: CANONICAL,
  name: 'Digital Marketing Agency in Delhi | FactoryJet',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
};

export default function DelhiDigitalMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="delhi-dm-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="delhi-dm-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="delhi-dm-agencies-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agenciesSchema) }}
      />
      <script
        id="delhi-dm-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Digital Marketing', url: 'https://factoryjet.com/digital-marketing' },
          { name: 'Delhi', url: CANONICAL },
        ]}
      />

      <SiteHeader locale="in" />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Digital Marketing', url: 'https://factoryjet.com/digital-marketing' },
          { name: 'Delhi', url: CANONICAL },
        ]} />
        <Hero
          eyebrow="DIGITAL MARKETING AGENCY · DELHI"
          headline="A Digital Marketing Agency in Delhi That Brings You Real Customers"
          lead="We help Delhi and NCR businesses get found on Google and AI tools like ChatGPT, and turn visitors into real enquiries. One senior in-house team, plain-English reports, no jargon."
          formSlot={<HeroInlineForm region="in" source="in_delhi_digital_marketing_hero" />}
          secondaryCta={{ label: 'Get a Free Growth Plan', modal: true as const, region: 'in' as const }}
          trustItems={HERO_TRUST}
          accent="orange"
          rightSlot={
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div aria-hidden className="absolute -right-3 -top-3 h-24 w-24 rounded-2xl bg-[#F05A28]/10" />
              <div aria-hidden className="absolute -bottom-4 -left-4 h-28 w-28 rounded-2xl bg-fj-ink/[0.04]" />
              <div className="relative overflow-hidden rounded-2xl border border-fj-neutral-200 shadow-sm">
                <img
                  src="/images/services/digital-marketing/delhi/hero.webp"
                  alt="A digital marketing professional in a modern Delhi office"
                  width={900}
                  height={1316}
                  fetchPriority="high"
                  className="aspect-[3/4] w-full object-cover"
                />
                <div className="absolute bottom-3 left-3 rounded-xl bg-white/95 px-4 py-2.5 shadow-sm">
                  <p className="font-fj-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[#B23E13]">
                    Serving Delhi and all of NCR
                  </p>
                  <p className="mt-0.5 font-fj-display text-sm font-semibold text-fj-ink">
                    500+ businesses, 12 years
                  </p>
                </div>
              </div>
            </div>
          }
        />

        {/* Answer-first block (BLUF): the direct answer, written to be quoted by
            Google AI Overviews, ChatGPT, Gemini and Perplexity. */}
        <section className="border-y border-fj-ink/10 bg-white px-6 py-14 md:px-8 md:py-16">
          <div className="mx-auto max-w-3xl">
            <Heading as="h2" size="h3" className="text-fj-ink">
              So, which is the best digital marketing agency in Delhi?
            </Heading>
            <p className="mt-4 text-lg leading-relaxed text-fj-ink/80">
              The honest answer: there is no single best agency for every business in Delhi. The right
              one for you depends on your size, your goals and, most of all, who actually does your
              work. For small and mid-size Delhi and NCR businesses that want one senior team to handle
              everything, from your website to Google to AI search, FactoryJet is a strong choice.
              Below we compare the digital marketing companies that actually rank for this in Delhi,
              openly, including ourselves, so you can decide for yourself.
            </p>
          </div>
        </section>

        <LogoBar tagline="Trusted by 500+ businesses across India, the US, the UK and the UAE" />

        {/* Cream statement band: keyword-rich positioning, no pricing. */}
        <BigThreeTrustBlock
          variant="statement"
          eyebrow="WHY DELHI BUSINESSES PICK US"
          headline="A digital marketing company in Delhi that puts a senior team on your business, not a fresher learning on the job"
        />

        {/* Proof band: 4 across on desktop, 2x2 on mobile, hairline dividers */}
        <section className="bg-white px-6 py-12 md:px-8 md:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-fj-ink/10 bg-fj-ink/10 md:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="bg-white px-4 py-8 text-center md:px-6 md:py-12">
                  <div className="font-fj-display text-2xl font-semibold leading-none tracking-tight text-[#F05A28] md:text-[2.75rem]">
                    {s.value}
                  </div>
                  <div className="mt-3 font-fj-body text-sm font-semibold text-fj-ink">{s.label}</div>
                  <div className="mt-1.5 font-fj-body text-xs leading-relaxed text-fj-neutral-600">{s.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceExplanation
          eyebrow="WHAT WE DO, IN PLAIN WORDS"
          headline="What a digital marketing agency does for a Delhi business"
          lead="Strip away the buzzwords and it comes down to one thing: helping more of the right people in Delhi find your business and become customers."
          body={
            <>
              <p>
                Some agencies make this sound complicated on purpose. It is not. Your customers are
                already searching on Google, scrolling Instagram, and now asking ChatGPT for
                recommendations. Our job is to make sure your Delhi business shows up in those moments,
                and that the person who clicks actually turns into a call, a message or a sale.
              </p>
              <p>
                We do that by joining the pieces together: a fast website, showing up on Google (SEO),
                ads when you need quick results, social media, WhatsApp follow-up, and getting picked
                by AI tools. Not every business needs all of it. We choose the few that will bring you
                the most enquiries in a crowded Delhi market, and we tell you honestly which ones will
                not. The team in the photo is the kind of senior, in-house team that runs your account.
              </p>
            </>
          }
          rightSlot={
            <div className="relative">
              <div aria-hidden className="absolute -bottom-4 -right-4 h-28 w-28 rounded-2xl bg-[#F05A28]/10" />
              <img
                src="/images/services/digital-marketing/delhi/team.webp"
                alt="A senior digital marketing team collaborating in a modern Delhi office"
                width={1200}
                height={822}
                loading="lazy"
                className="relative aspect-[4/3] w-full rounded-2xl border border-fj-neutral-200 object-cover shadow-sm"
              />
            </div>
          }
        />

        {/* Delhi market context: cited to resolving authoritative sources. */}
        <CityContextSection
          eyebrow="WHY IT MATTERS IN DELHI RIGHT NOW"
          headline="Why digital marketing matters more for a Delhi business than ever"
          leadParagraphs={[
            'Delhi is one of India’s busiest business cities. Close to four lakh registered small and medium businesses sit here, and most of them want the same customers you do. Standing out online is harder in Delhi than in a small town, so the way you show up on Google and on a phone really matters.',
            'The way Delhi customers search is changing fast. India now has more than a billion internet users, and most of them are on a phone. On top of that, over 100 million people in India ask ChatGPT something every week, and OpenAI even opened its New Delhi office in 2025. Many of those questions are "which company should I pick". If your business is missing from Google and from AI answers, a Delhi customer simply picks someone else.',
            'We build for how Delhi actually buys: quick mobile pages, content that reads naturally in both Hindi and English, fast WhatsApp follow-up, and a real effort to get you found on Google Maps for your area. The businesses that get these basics right do not just look better. They get more calls and enquiries from the same number of visitors.',
          ]}
          bodySlot={
            <>
              <div className="border-l-2 py-1 pl-5" style={{ borderLeftColor: '#F05A28' }}>
                <p
                  className="fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  In a city this crowded, being easy to find is already half the sale.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {['South Delhi', 'Connaught Place', 'Nehru Place', 'Saket', 'Karol Bagh', 'Rohini', 'Dwarka', 'Gurgaon', 'Noida'].map(
                  (area) => (
                    <span
                      key={area}
                      className="inline-flex items-center rounded-full border border-[#F05A28]/25 bg-[#F05A28]/8 px-3 py-1 font-fj-mono font-medium text-[#B23E13]"
                      style={{ fontSize: '10px', letterSpacing: '0.08em' }}
                    >
                      {area}
                    </span>
                  ),
                )}
              </div>
            </>
          }
          stats={DELHI_MARKET_STATS}
        />

        <IndustriesGrid
          variant="cards"
          eyebrow="EVERYTHING IN ONE PLACE"
          headline="One team for every part of your online growth in Delhi"
          lead="Instead of hiring five different people across NCR, you get one senior team that covers the whole picture. Each of these links to how we do it."
          sectors={CHANNELS}
        />

        {/* Our approach for Delhi: second ServiceExplanation, reversed layout. */}
        <ServiceExplanation
          eyebrow="OUR APPROACH FOR DELHI"
          headline="How we grow a Delhi business, step by step"
          lead="No secret sauce, no big words. Here is the plain order of work we use to turn a crowded Delhi market into steady enquiries for you."
          reverseOnDesktop
          body={
            <>
              <p>
                First we make sure you can be found. That means a fast, mobile-first website, and
                digital marketing services in Delhi built around real searches: getting you onto
                Google for what your customers actually type, and setting up your Google Business
                Profile so you appear on Google Maps for your area, like South Delhi or Dwarka.
              </p>
              <p>
                Then we make sure the visitor turns into an enquiry. We write in clear Hindi and
                English, add quick WhatsApp and call buttons, and remove the small things that make
                people leave. If you need customers this week, we run Google and Instagram ads while
                your free Google traffic builds up in the background.
              </p>
              <p>
                Finally, we future-proof you. Most digital marketing companies in Delhi NCR still
                ignore AI search, so we help you get picked by ChatGPT, Gemini and Google’s AI
                answers. Every month you get a simple report in plain words, and we do more of what
                brings leads and drop what does not.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  What a Delhi growth plan usually includes
                </p>
              </div>
              <ul className="divide-y divide-fj-neutral-100 px-7">
                {[
                  'A fast, mobile-first website that loads on patchy networks',
                  'Showing up on Google for what your Delhi customers search',
                  'A clean Google Business Profile and Maps listing for your area',
                  'Content that reads naturally in Hindi and English',
                  'Quick WhatsApp and call follow-up so no enquiry is missed',
                  'Google and Instagram ads when you need results this week',
                  'Getting picked by AI answers in ChatGPT, Gemini and Google',
                  'A simple monthly report in plain words',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 py-3.5">
                    <span
                      className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
                      style={{ background: 'rgba(240,90,40,0.10)' }}
                      aria-hidden="true"
                    >
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2.5 6.2l2.2 2.2 4.8-5.2"
                          stroke="#B23E13"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="font-fj-body text-[0.9375rem] leading-[1.5] text-fj-neutral-600">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-7 py-5">
                <div className="mb-2 h-[3px] w-8 rounded-full" style={{ background: '#F05A28' }} aria-hidden="true" />
                <p
                  className="fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1rem', lineHeight: 1.3, letterSpacing: '-0.02em' }}
                >
                  You only take up what you actually need.
                </p>
              </div>
            </div>
          }
        />

        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs a typical Delhi agency vs a freelancer vs your own team"
          lead="There is no single right answer for every business. Here is an honest look at how the options differ, so you can pick what fits you."
          pullQuote={{
            stat: 'One team',
            caption:
              'across your website, Google, ads, WhatsApp and AI search, so nothing leaks between channels and no enquiry gets dropped.',
          }}
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
          footer="Every business is different. If a freelancer or your own team is the better fit, we will tell you so on the call."
        />

        {/* Three reasons money gets wasted: LIGHT section (Testimonials is the
            single dark section on this page). */}
        <section className="border-y border-fj-ink/10 bg-white px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-5xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#B23E13]">
              WHY MONEY GETS WASTED
            </p>
            <Heading as="h2" size="h2" className="text-fj-ink">
              Three reasons most digital marketing spend disappears in Delhi
            </Heading>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fj-ink/80">
              If past marketing did not work, it is usually one of these three, and all three are easy
              to avoid once you know them.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {REASONS.map((r) => (
                <div
                  key={r.badge}
                  className="rounded-2xl border border-fj-ink/10 bg-fj-cream p-6 md:p-7"
                >
                  <span
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full font-fj-mono text-sm font-bold text-white"
                    style={{ background: '#B23E13' }}
                  >
                    {r.badge}
                  </span>
                  <h3 className="mt-4 font-fj-display text-lg font-semibold leading-snug text-fj-ink">
                    {r.title}
                  </h3>
                  <p className="mt-2 font-fj-body text-[0.9375rem] leading-relaxed text-fj-ink/75">
                    {r.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mid-page CTA: headline and sub overridden to no-pricing growth copy. */}
        <FinalCTA
          variant="light"
          eyebrow="TALK TO US"
          headline="See what real growth could look like for your Delhi business"
          sub="Tell us about your Delhi business and your goals. We will look at where your customers are searching and send back a simple, honest plan of what will bring you the most enquiries. No jargon, no pressure."
          primaryCta={{ label: 'Get my free growth plan', modal: true, region: 'in' }}
          secondaryCta={{ label: 'Check if AI tools recommend you', href: '/ai-visibility-checker' }}
        />

        {/* Delhi verticals listicle: net-new, grounded in vertical search demand. */}
        <section className="bg-fj-cream px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-5xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#B23E13]">
              WHO WE GROW
            </p>
            <Heading as="h2" size="h2" className="text-fj-ink">
              Types of Delhi businesses we help win more customers
            </Heading>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fj-ink/80">
              Different Delhi businesses need different things. Here are the kinds we help most often,
              and the plain reason each one grows online, so you can see where yours fits.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {DELHI_BUSINESS_TYPES.map((b) => (
                <div key={b.name} className="rounded-2xl border border-fj-ink/10 bg-white p-6 md:p-7">
                  <h3 className="font-fj-display text-lg font-bold leading-snug text-fj-ink">{b.name}</h3>
                  <p className="mt-2 font-fj-body text-sm leading-relaxed text-fj-ink/70">
                    <span className="font-semibold text-fj-ink">Who: </span>
                    {b.who}
                  </p>
                  <p className="mt-2 font-fj-body text-[0.9375rem] leading-relaxed text-fj-ink/75">
                    <span className="font-semibold text-fj-ink">What works: </span>
                    {b.works}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-relaxed text-fj-ink/70">
              Do not see your exact business here? That is fine. If your customers search on Google or
              ask ChatGPT before buying, we can almost certainly help you get found and turn that
              interest into enquiries.
            </p>
          </div>
        </section>

        {/* Named-competitor comparison: the honest "who is best for what" listicle. */}
        <section className="bg-white px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#B23E13]">
              THE DELHI AGENCIES, COMPARED HONESTLY
            </p>
            <Heading as="h2" size="h2" className="text-fj-ink">
              The digital marketing agencies in Delhi, and who each one suits
            </Heading>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fj-ink/80">
              We looked at which agencies actually rank on Google for digital marketing in Delhi using
              live search data in July 2026, and what each is known for. We include ourselves and say
              so openly, because hiding it would be the opposite of honest.
            </p>

            <ol className="mt-10 space-y-4">
              {AGENCIES.map((a, i) => (
                <li
                  key={a.name}
                  className={`flex gap-4 rounded-2xl border p-5 md:p-6 ${
                    a.isUs ? 'border-[#F05A28]/40 bg-[#F05A28]/5' : 'border-fj-ink/10 bg-fj-cream'
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                      a.isUs ? 'bg-[#B23E13] text-white' : 'bg-fj-ink/5 text-fj-ink'
                    }`}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-fj-ink">
                      {a.name}
                      {a.isUs && (
                        <span className="ml-2 rounded-full bg-[#B23E13] px-2 py-0.5 text-xs font-semibold text-white">
                          That is us
                        </span>
                      )}
                    </h3>
                    <p className="mt-1 leading-relaxed text-fj-ink/75">
                      <span className="font-semibold text-fj-ink">Best for: </span>
                      {a.bestFor}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-6 text-sm leading-relaxed text-fj-ink/70">
              A quick note on fairness: every agency here is a genuine, capable Delhi team. The "best
              for" lines are our honest read of who each one suits, based on their public work and what
              they rank for. The right pick is the one that matches your business, not the one that
              shouts loudest.
            </p>
          </div>
        </section>

        <ServiceJourneyRow
          eyebrow="HOW WORKING WITH US FEELS"
          headline="From first chat to real results, in five simple steps"
          lead="No confusing process, no surprises. Here is exactly what happens when you work with us."
          stages={JOURNEY}
          closingNote="5 SIMPLE STEPS · SENIOR TEAM · HONEST MONTHLY REPORTS"
        />

        {/* Reach across Delhi NCR (plain language + safe internal links to hubs). */}
        <section className="border-y border-fj-ink/10 bg-white px-6 py-14 md:px-8 md:py-16">
          <div className="mx-auto max-w-3xl">
            <Heading as="h2" size="h3" className="text-fj-ink">
              We help businesses grow right across Delhi and NCR
            </Heading>
            <p className="mt-4 text-lg leading-relaxed text-fj-ink/80">
              Because the work happens online, your exact location does not limit us. We help shops,
              clinics, service businesses and brands in South Delhi, Connaught Place, Nehru Place,
              Saket, Karol Bagh, Rohini and Dwarka, plus Gurgaon, Noida, Ghaziabad and Faridabad across
              NCR. Whether you need to{' '}
              <a href="/seo" className="font-semibold text-[#B23E13] underline underline-offset-2">
                get found on Google
              </a>
              , build a{' '}
              <a href="/web-design" className="font-semibold text-[#B23E13] underline underline-offset-2">
                website that sells
              </a>
              , open an{' '}
              <a
                href="/services/ecommerce-development"
                className="font-semibold text-[#B23E13] underline underline-offset-2"
              >
                online store
              </a>
              , or get picked by{' '}
              <a href="/ai-seo" className="font-semibold text-[#B23E13] underline underline-offset-2">
                AI search
              </a>
              , the same senior team handles it.{' '}
              You can also{' '}
              <a href="/digital-marketing" className="font-semibold text-[#B23E13] underline underline-offset-2">
                compare the top 10 digital marketing agencies in India
              </a>
              , including us, before you decide.
            </p>
          </div>
        </section>

        <TestimonialsSection
          eyebrow="REAL RESULTS"
          headline="What business owners say after working with us"
          region="in"
        />

        <FAQ
          eyebrow="QUESTIONS DELHI OWNERS ACTUALLY ASK"
          headline="Digital marketing in Delhi, answered in plain words"
          lead="Real questions from real Delhi searches, answered simply, with no jargon and no sales spin."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        <FinalCTA
          variant="light"
          eyebrow="READY WHEN YOU ARE"
          headline="Want to see how many customers your Delhi business is missing?"
          sub="Book a free, no-pressure chat. We will look at your website and where your Delhi customers are, and tell you honestly what will bring you more enquiries, even if we never work together."
          primaryCta={{ label: 'Get My Free Growth Plan', modal: true, region: 'in' }}
          secondaryCta={{ label: 'Check if AI tools recommend you', href: '/ai-visibility-checker' }}
          objectionHandler="No jargon. No long contract. Just an honest plan you can use straight away."
        />
      </main>

      <SiteFooter locale="in" />
    </>
  );
}

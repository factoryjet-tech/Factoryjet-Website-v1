import type { Metadata } from 'next';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import CityContextSection from '@/components/v2/CityContextSection';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import IndustriesGrid, { type IndustryCard } from '@/components/v2/IndustriesGrid';
import StrategicDarkSection, { type Pillar } from '@/components/v2/StrategicDarkSection';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import Heading from '@/components/v2/Heading';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

const CANONICAL = 'https://factoryjet.com/digital-marketing/pune';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in Pune | FactoryJet',
  description:
    'Looking for a digital marketing agency in Pune? FactoryJet helps Pune businesses get found on Google and AI tools like ChatGPT, and turn clicks into real enquiries. One senior in-house team for SEO, ads, websites and more.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Digital Marketing Agency in Pune | FactoryJet',
    description:
      'One senior in-house team that gets Pune businesses found on Google and AI search, and turns visitors into enquiries. SEO, ads, websites, social and more.',
    url: CANONICAL,
    images: [
      {
        url: 'https://factoryjet.com/images/services/digital-marketing/pune/hero.webp',
        width: 832,
        height: 1216,
        alt: 'FactoryJet, Digital Marketing Agency in Pune',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency in Pune | FactoryJet',
    description:
      'Get found on Google and AI search across Pune, and turn visitors into customers. One senior in-house team for Pune businesses.',
    images: ['https://factoryjet.com/images/services/digital-marketing/pune/hero.webp'],
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
   Content (plain language, no pricing anywhere). Every jargon word is
   explained the first time it appears, so a first-time reader gets it.
   Pune-specific throughout: real areas (Hinjewadi, Baner, Wakad, PCMC,
   Kharadi), real local business types (IT, auto and manufacturing,
   education, real estate, D2C), grounded in live search data (July 2026).
   ──────────────────────────────────────────────────────────────────────── */

const HERO_TRUST = [
  '500+ businesses helped',
  '12 years of experience',
  'One senior in-house team',
  'Serving Pune and all of India',
];

const STATS = [
  { value: '500+', label: 'Businesses helped', note: 'Across India, US, UK and UAE' },
  { value: '12 yrs', label: 'Years doing this', note: 'Not a new agency practising on you' },
  { value: 'In-house', label: 'Senior team', note: 'No work handed to freshers' },
  { value: '4', label: 'Countries served', note: 'India, US, UK and UAE' },
];

// Cited market context for Pune. Every stat has a real, resolving outbound
// source (verified July 2026): IBEF (India Brand Equity Foundation, a Ministry
// of Commerce trust), DataReportal's Digital 2026 India report, and TechCrunch.
const MARKET_STATS = [
  {
    value: '4,000+',
    label:
      'manufacturing units sit in the Pimpri-Chinchwad belt alone, part of what makes Pune India’s largest auto hub',
    sourceUrl: 'https://www.ibef.org/states/maharashtra',
    sourceLabel: 'IBEF, Maharashtra',
  },
  {
    value: '1.03B',
    label:
      'people in India are now online, about 70 percent of the country, so your next Pune customer is almost certainly searching',
    sourceUrl: 'https://datareportal.com/reports/digital-2026-india',
    sourceLabel: 'DataReportal 2026',
  },
  {
    value: '100M',
    label:
      'Indians ask ChatGPT something every week, and India is now its second-largest market, so AI answers are a real place to be found',
    sourceUrl:
      'https://techcrunch.com/2026/02/15/india-has-100m-weekly-active-chatgpt-users-sam-altman-says/',
    sourceLabel: 'TechCrunch, Feb 2026',
  },
];

// "Types of Pune businesses we help grow" listicle. Verticals and long-tail
// city keywords are drawn from live DataForSEO suggestions (e.g. "real estate
// digital marketing agency in pune", "healthcare digital marketing agency in
// pune") so the copy matches how people actually search.
const BUSINESS_TYPES = [
  {
    name: 'Software and IT companies',
    where: 'Hinjewadi, Kharadi, Magarpatta',
    body:
      'B2B firms and product teams around Pune’s IT parks that need a sharp website, a strong Google and LinkedIn presence, and steady enquiries from the right buyers, not just visits that go nowhere.',
  },
  {
    name: 'Auto and manufacturing units',
    where: 'Pimpri-Chinchwad, Chakan',
    body:
      'Pune sits at the centre of India’s largest auto belt. We help suppliers and factories get found by dealers and B2B buyers who search online long before they ever pick up the phone.',
  },
  {
    name: 'Coaching classes and education',
    where: 'across the city',
    body:
      'Pune is a student city, and parents and students compare online first. We help institutes fill batches with local SEO, a clear website, and admission enquiries that get followed up properly.',
  },
  {
    name: 'Real estate builders and brokers',
    where: 'Baner, Wakad, Kharadi and beyond',
    body:
      '"Real estate digital marketing agency in Pune" is a real search for a reason. We turn project interest into site-visit enquiries with fast landing pages, Google Ads, and WhatsApp follow-up.',
  },
  {
    name: 'Clinics, hospitals and healthcare',
    where: 'Kothrud, Viman Nagar and more',
    body:
      'People looking for a doctor or clinic want someone close and trusted. As a healthcare-friendly team, we help you show up on Google Maps and turn "near me" searches into booked appointments.',
  },
  {
    name: 'D2C brands and online stores',
    where: 'shipping across India',
    body:
      'From Pune-made labels to online shops, we build stores that are easy to buy from, and run ads and SEO that bring real buyers rather than window shoppers.',
  },
  {
    name: 'Restaurants, salons and local retail',
    where: 'every corner of Pune',
    body:
      'For walk-in businesses, a strong Google listing, honest reviews, and simple Instagram often beat everything else. We keep it focused on filling tables, chairs, and shelves.',
  },
];

// Channel grid = the internal-link authority hub. Each card links into an
// existing FactoryJet service page so this Pune hub passes authority down.
const CHANNELS: IndustryCard[] = [
  {
    name: 'SEO (get found on Google)',
    description:
      'SEO means search engine optimisation. In plain words: showing up on Google when a Pune customer searches to buy, without paying for each click.',
    linkLabel: 'Explore SEO',
    linkHref: '/seo',
  },
  {
    name: 'Websites that sell',
    description:
      'A fast, mobile-first website that loads quickly on any phone and turns visitors into calls and enquiries, instead of just looking nice.',
    linkLabel: 'See web design',
    linkHref: '/web-design',
  },
  {
    name: 'Online stores',
    description:
      'Ecommerce means selling online. We build stores that are easy for customers to buy from and easy for you to run, whether you ship across Pune or all of India.',
    linkLabel: 'See ecommerce',
    linkHref: '/services/ecommerce-development',
  },
  {
    name: 'AI search (get picked by ChatGPT)',
    description:
      'When people ask ChatGPT, Gemini or Google’s AI for a recommendation, we help your Pune business be one of the answers. This newer skill is called GEO.',
    linkLabel: 'Explore AI SEO',
    linkHref: '/ai-seo',
  },
  {
    name: 'Chatbots and automation',
    description:
      'Smart helpers that reply to customers day and night and do repeat tasks for you, so your Pune team saves hours every week.',
    linkLabel: 'See AI agents',
    linkHref: '/services/ai-agent-development',
  },
  {
    name: 'WhatsApp for business',
    description:
      'Answer customers and collect leads automatically on WhatsApp, the app nearly every buyer in Pune already uses every day.',
    linkLabel: 'See WhatsApp chatbot',
    linkHref: '/whatsapp-chatbot',
  },
  {
    name: 'Shopify stores',
    description:
      'Shopify is a popular tool for online shops. We build custom Shopify stores that look great and load fast on mobile.',
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

const COMPARE_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Typical Pune agency' },
  { label: 'Freelancer' },
  { label: 'Your own team' },
] as const;

const COMPARE_ROWS = [
  {
    feature: 'Who actually does your work',
    values: [
      'Senior, in-house',
      'Often freshers',
      'One person',
      'You hire and train',
    ],
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
    feature: 'Simple monthly report you can actually read',
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
  {
    feature: 'You keep ownership of your website, Google and social accounts',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="ih" kind="yes" />,
    ],
  },
  {
    feature: 'Local SEO for Pune (Google Maps and "near me" searches)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="ih" kind="partial" />,
    ],
  },
  {
    feature: 'Knows Pune areas and buyers (Hinjewadi, PCMC, Baner)',
    values: ['Yes, local', 'Usually', 'Sometimes', 'Yes'],
  },
  {
    feature: 'Keeps running when one person is on leave',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="yes" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="ih" kind="partial" />,
    ],
  },
  {
    feature: 'One senior point of contact who replies quickly',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="ih" kind="yes" />,
    ],
  },
];

const PILLARS: Pillar[] = [
  {
    icon: '\u{1F9E9}',
    title: 'One channel alone is not a plan',
    body:
      'Doing only SEO, or only ads, or only Instagram leaves gaps. A Pune buyer might find you on Google, check your Instagram, then message you on WhatsApp before deciding. We join the channels so no enquiry leaks between them.',
  },
  {
    icon: '\u{1F464}',
    title: 'Freshers learning on your business',
    body:
      'Many Pune agencies win you over with senior people, then quietly hand your work to trainees. You pay for experience you never actually get. At FactoryJet, experienced people do the real work on your account.',
  },
  {
    icon: '\u{1F916}',
    title: 'Ignoring AI search is a costly mistake',
    body:
      'More than 100 million Indians ask ChatGPT something every week, often "which company should I pick". Agencies stuck on old-style SEO miss this completely. We get you found on Google and inside AI answers.',
  },
];

// Named-competitor comparison, built from live DataForSEO ranking data for
// Pune (checked July 2026). Honest, positive, with open self-disclosure.
const AGENCIES = [
  {
    name: 'FactoryJet',
    bestFor:
      'Pune businesses that want one senior team across website, Google, ads and AI search, with plain-English reports. (Yes, that is us. We include ourselves openly and let the comparison speak for itself.)',
    isUs: true,
  },
  {
    name: 'SRV Media',
    bestFor:
      'Bigger brands, and especially real estate and education names, that want a large full-service Pune agency with media, PR and creative muscle.',
  },
  {
    name: 'Awrange Digital',
    bestFor:
      'Businesses that want one Pune team covering digital marketing, SEO and web design together under a single roof.',
  },
  {
    name: 'Itorix Infotech',
    bestFor:
      'Companies that want their SEO and marketing tied closely to a software and IT development team.',
  },
  {
    name: 'Dimakh Consultants',
    bestFor:
      'Established organisations and institutions that want a long-standing Pune partner for websites, branding and SEO.',
  },
  {
    name: 'SAVIT Interactive',
    bestFor: 'Businesses whose main need is steady, content-led SEO (climbing Google rankings over time).',
  },
  {
    name: 'Gatitaa',
    bestFor:
      'Smaller businesses that want SEO alongside social media and content from a boutique Pune team.',
  },
];

const JOURNEY: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'A free, no-pressure chat',
    description: 'We learn about your Pune business, your customers and your goals. No jargon, no hard sell.',
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
  { key: 'local', label: 'Pune and nearby' },
  { key: 'results', label: 'Results and reports' },
  { key: 'trust', label: 'Trust and safety' },
  { key: 'ai', label: 'AI and the future' },
];

// Every FAQ is grounded in real "People Also Ask" and related searches pulled
// from live Google data for "digital marketing agency pune" and "seo company
// in pune" (India, July 2026). Career and "how to earn" questions are excluded
// on purpose because they are not buyer intent.
const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'choosing',
    question: 'Which is the best digital marketing agency in Pune?',
    answer:
      'There is no single "best" one for every business. The best agency for you is the one that fits your size, your goals and who your customers are. A large real estate brand in Baner and a small clinic in Kothrud need very different help. Lower on this page we compare the top Pune agencies honestly, including ourselves, so you can pick the right fit instead of the loudest name.',
  },
  {
    category: 'choosing',
    question: 'Which is the best SEO agency in Pune?',
    answer:
      'SEO means getting found on Google without paying for each click. The best SEO agency in Pune is the one that shows you real ranking and enquiry results for a business like yours, and explains its plan in plain words. Be careful of anyone who "guarantees" the number-one spot. Nobody can promise that, and honest teams never do. We compare several strong Pune SEO names further down so you can judge for yourself.',
  },
  {
    category: 'choosing',
    question: 'Which agency is best for digital marketing?',
    answer:
      'It depends on what you actually need. If you want one team to handle your website, Google, ads and AI search together, pick a full-service agency with senior people. If you only need one small task done once, a specialist or freelancer may be enough. Match the agency to your goal, not to whoever has the flashiest office.',
  },
  {
    category: 'choosing',
    question: 'Which company has the best SEO in Pune?',
    answer:
      'The right way to judge this is not who claims to be number one, but who can show real proof: businesses they have moved up on Google, and clear monthly reports. Several Pune companies do solid SEO, and we name a few honestly on this page. Ask each one who will actually do your work and how they will measure success, then compare their answers.',
  },
  {
    category: 'choosing',
    question: 'How do I choose the right digital marketing agency in Pune?',
    answer:
      'Ask three simple questions before you sign anything. One: who will actually do my work, a senior person or a fresher? Two: what exactly will I get each month, in plain words? Three: can you show me real results for a business like mine? A Pune agency that answers all three clearly is usually a safe choice.',
  },
  {
    category: 'choosing',
    question: 'Who are the top 10 digital marketing agencies in Pune?',
    answer:
      'You will see many "top 10 in Pune" lists online, and most are paid placements rather than honest rankings. We took a different route: we looked at which Pune agencies actually rank on Google for digital marketing and SEO using live search data, and what each is genuinely known for. You will find that short, honest comparison further down this page, with us included openly.',
  },
  {
    category: 'services',
    question: 'What does a digital marketing agency actually do?',
    answer:
      'In simple words, it helps more of the right people find your business online and turn into customers. That means building or fixing your website, getting you to show up on Google (this is called SEO, short for search engine optimisation), running ads, posting on social media, and staying in touch by email or WhatsApp. For a Pune business, the goal is always the same: more calls, more enquiries, more sales.',
  },
  {
    category: 'services',
    question: 'What are the 7 types of digital marketing?',
    answer:
      'People usually list them as: SEO (showing up on Google for free), paid ads (paying Google or Instagram to show your business), social media marketing (Instagram, Facebook, LinkedIn), content marketing (blogs and videos that pull people in), email marketing, affiliate marketing (others promote you for a cut), and mobile or messaging marketing like WhatsApp. A good agency mixes only the few that fit your business, not all seven at once.',
  },
  {
    category: 'services',
    question: 'What are the 4 types of digital marketing?',
    answer:
      'When people shorten the list to four, they usually mean SEO (free Google traffic), paid ads, social media, and content or email. Think of it this way: SEO and content pull people in slowly and for free, ads bring visitors fast but only while you pay, and social media builds trust in between. Most Pune businesses do best with a small mix rather than all four.',
  },
  {
    category: 'services',
    question: 'What are the 4 types of SEO?',
    answer:
      'SEO is usually split into four parts. On-page SEO is fixing the words and structure on your own pages. Off-page SEO is earning links and mentions from other trusted sites. Technical SEO is making your site fast and easy for Google to read. Local SEO is showing up when someone nearby searches, for example "near me" or "in Pune", including your Google Business listing and map results. Local SEO matters a lot for shops and clinics across Pune.',
  },
  {
    category: 'services',
    question: 'What does SEO mean, and who does it in a company?',
    answer:
      'SEO stands for search engine optimisation, which simply means getting your business found on Google without paying for each click. Inside a company it can be an in-house SEO specialist, a small marketing team, or an outside agency that does it for you. For most small and mid-size Pune businesses, hiring one full SEO person is slow and expensive, so they hand it to an agency that already has the skills and tools.',
  },
  {
    category: 'services',
    question: 'What is a performance marketing agency, and do I need one in Pune?',
    answer:
      'Performance marketing means paying only for clear results, like clicks, leads or sales, mostly through ads on Google and social media. A performance marketing agency in Pune focuses on those paid channels. It is great when you need enquiries quickly, but ads stop the moment you stop paying. We usually pair paid ads with SEO and a strong website, so you get quick wins now and free traffic that grows quietly in the background.',
  },
  {
    category: 'services',
    question: 'Do I need SEO, ads, or social media first?',
    answer:
      'If you need customers this week, start with ads, because they bring visitors the day you switch them on. If you want steady free traffic that grows over months, start with SEO. Most Pune businesses do best with a small mix: ads for quick enquiries while SEO builds up quietly in the background.',
  },
  {
    category: 'local',
    question: 'Do you work with businesses in Hinjewadi, Baner, Wakad and PCMC?',
    answer:
      'Yes. We help businesses right across Pune: the IT parks in Hinjewadi, the offices and showrooms in Baner, Balewadi, Aundh and Wakad, the shops and clinics in areas like Kothrud and Viman Nagar, and the manufacturing belt around Pimpri-Chinchwad (PCMC) and Chakan. Because the work happens online, we serve every part of the city and the whole Pune metro region.',
  },
  {
    category: 'local',
    question: 'Do I need a Pune-based agency, or can I work with one remotely?',
    answer:
      'You do not need an agency sitting in your own part of Pune. Almost all digital marketing work happens online, so a good team can help your Pune business from anywhere. What matters more is whether they understand your customers and reply quickly. We work with businesses across Pune, the rest of India, the US, the UK and the UAE, all remotely, with clear calls and reports.',
  },
  {
    category: 'local',
    question: 'What kinds of Pune businesses do you help?',
    answer:
      'A wide range. Pune has software and IT companies around Hinjewadi and Kharadi, a big auto and manufacturing belt around PCMC and Chakan, a huge student and education scene, a busy real estate market, plus clinics, restaurants, retailers and growing D2C (direct-to-consumer) brands. We have worked across these kinds of businesses and shape the plan to how your particular customers search and buy.',
  },
  {
    category: 'local',
    question: 'Do you serve businesses in Mumbai and the rest of Maharashtra too, or only Pune?',
    answer:
      'Both. Pune and Mumbai are close and many businesses run in both cities, so we regularly help companies across Maharashtra and all of India, not just Pune. Working remotely means your location does not limit the quality of work. Judge any agency by its team and its results, not by which city its office sits in.',
  },
  {
    category: 'results',
    question: 'How long does digital marketing take to show results in Pune?',
    answer:
      'Ads can bring enquiries within days. SEO (free Google traffic) usually takes three to six months to build up, and longer in very competitive Pune markets like real estate or coaching. Social media and content also need a few months to earn trust. Anyone who promises big results in a week is not being honest with you.',
  },
  {
    category: 'results',
    question: 'How is performance measured, and what reports should I expect?',
    answer:
      'You should get a simple monthly report that a normal person can read, not a page full of confusing charts. It should answer three things: how many people visited, how many enquiries or calls came in, and what we did that month. If a Pune agency cannot show you leads in plain numbers, treat it as a warning sign.',
  },
  {
    category: 'results',
    question: 'How do you measure whether digital marketing is actually working?',
    answer:
      'The only numbers that truly matter are enquiries and sales, not likes or views. We track how many real leads (calls, form fills, WhatsApp messages) your marketing brings in, and where they came from. If the work is not bringing you more customers over time, it is not working, no matter how pretty the report looks.',
  },
  {
    category: 'trust',
    question: 'Who will actually do my work, seniors or freshers?',
    answer:
      'This is the most important question most people forget to ask, and it matters even more in a city like Pune with so many trainees fresh out of college. Many agencies win you over with senior people, then hand your account to freshers learning on your business. Always ask who will run your work day to day. At FactoryJet, experienced people do it, not trainees practising on you.',
  },
  {
    category: 'trust',
    question: 'What is the cost of digital marketing in Pune, and how much do agencies charge?',
    answer:
      'We will not throw a random number at you, because an honest price depends entirely on what you actually need. Getting found on Google is different work from running ads or building a store, so a real quote only makes sense after we understand your goals. What we can promise is how we prove value: by the number of real enquiries you get, not by how much you spend. Book a free chat and we will scope it honestly to your business.',
  },
  {
    category: 'trust',
    question: 'What is the cost of SEO in Pune?',
    answer:
      'The same honest answer applies to SEO. The work needed for a small local clinic is not the same as for a company competing across all of India, so there is no one-size price and we will not pretend there is. We would rather look at your website and your goals first, then explain exactly what the work involves and how we will measure it in enquiries. No pressure, no vague packages.',
  },
  {
    category: 'trust',
    question: 'What are the red flags of a bad digital marketing agency?',
    answer:
      'Watch out for these: a "guaranteed" number-one spot on Google, offers that seem too good to be true, big confusing words instead of clear answers, no real examples of past work, and being locked into a long contract before anything is proven. Any single one of these is a good reason to be careful, whether the agency is in Pune or anywhere else.',
  },
  {
    category: 'trust',
    question: 'Is it safe to outsource my digital marketing to an agency?',
    answer:
      'Yes, when you pick the right partner. Most successful businesses outsource marketing because building a full in-house team is slow and costly. To stay safe, keep ownership of your own accounts (website, Google, social media and ads), get clear monthly reports, and start with a small scope before expanding. A trustworthy Pune agency will happily agree to all of this.',
  },
  {
    category: 'ai',
    question: 'Can you help my Pune business show up in AI tools like ChatGPT and Google AI Overviews?',
    answer:
      'Yes, and most Pune agencies are not doing this yet, which is your opening. When people ask ChatGPT, Gemini or Google’s AI for a recommendation, you want your business to be one of the answers. Getting mentioned by AI tools is a newer skill called GEO (short for generative engine optimisation). We build it into our work, so you are found on Google and inside AI answers.',
  },
  {
    category: 'ai',
    question: 'What is answer engine optimisation, and does my business need it?',
    answer:
      'Answer engine optimisation, or AEO, simply means shaping your website so AI tools and Google’s instant answers pick your business as the reply. It is closely related to GEO. If your customers are the kind of people who ask ChatGPT or Google a question before buying, and in Pune many now do, then yes, you need it. If you are not sure, we can check for free whether AI tools already mention you.',
  },
  {
    category: 'choosing',
    question: 'Should I pick a big Pune agency or a smaller specialist team?',
    answer:
      'Both can work, and it depends on what you need. A big Pune agency has many people and can run large campaigns, but your account may be handed to a junior person while the senior staff chase new clients. A smaller senior team gives you the experienced people directly and replies faster, though it takes on fewer clients at a time. Ask either one the same question: who exactly will do my work, and how quickly will they reply? The honest answer tells you more than the size of the office.',
  },
  {
    category: 'services',
    question: 'What is the difference between an SEO company and a full digital marketing agency in Pune?',
    answer:
      'An SEO company in Pune focuses on one job: getting you found on Google without paying for each click. A full digital marketing agency does that plus the rest, ads, social media, your website, WhatsApp and AI search, and joins them together. If your only gap is Google rankings, an SEO specialist may be enough. If you want one team to bring you enquiries from every direction, a full agency fits better. We do both, so we can start with just SEO and add more only when it earns its place.',
  },
  {
    category: 'services',
    question: 'What is the difference between SEO and paid ads?',
    answer:
      'SEO gets you found on Google for free, but it builds up slowly over months. Paid ads put you at the top the day you switch them on, but you pay for every click and the traffic stops the moment you turn them off. Think of SEO as planting a tree and ads as renting a stall. Most Pune businesses use ads for quick enquiries now while SEO grows quietly for free traffic later.',
  },
  {
    category: 'services',
    question: 'What is the 70/20/10 rule in digital marketing?',
    answer:
      'It is a simple way to split your effort. Put about 70 percent into what already works for you, 20 percent into promising new ideas worth testing, and 10 percent into bold experiments that might fail. For a Pune business this stops you betting everything on one channel, while still leaving room to try something new like AI search. It is a guide, not a strict law, and we shape the split around your goals.',
  },
  {
    category: 'services',
    question: 'What is the 3-3-3 rule in marketing?',
    answer:
      'It is a content habit, not a law. One common version says grab attention in the first 3 seconds, hold it for 3 more, and leave one clear message people remember for 3 days. The point is simple: say the important thing first and do not bury it. We use the same idea on Pune websites and ads, because a visitor decides within seconds whether to stay or leave.',
  },
  {
    category: 'services',
    question: 'Is content marketing worth it for a Pune business?',
    answer:
      'Content marketing means earning attention with helpful blogs, videos and guides instead of only paying for ads. It is slower than ads, but it keeps working long after it is published, and it is one of the best ways to get picked by Google and AI tools. It is worth it when your customers research before they buy, which is common for coaching classes, clinics, real estate and B2B firms in Pune. For a simple local shop, a strong Google listing may matter more first.',
  },
  {
    category: 'local',
    question: 'Can you help me show up for "near me" and Google Maps searches in Pune?',
    answer:
      'Yes. This is called local SEO, and it is how a shop, clinic or office gets found when someone nearby searches "near me" or looks on Google Maps. It means setting up and improving your free Google Business listing, keeping your name, address and phone number the same everywhere, and earning genuine reviews. For businesses with walk-in customers across Pune, this is often the fastest win of all.',
  },
  {
    category: 'local',
    question: 'Can you help me rank in specific Pune areas like Baner, Kharadi or Hinjewadi?',
    answer:
      'Yes. Many people search with an area name, like a service in Baner, Kharadi, Wakad or Hinjewadi, because they want someone close by. We build pages and Google Business signals that match those area searches, so your business shows up for the neighbourhoods you actually serve. This matters most for local services, clinics and offices tied to one part of the city.',
  },
  {
    category: 'results',
    question: 'What is a realistic goal for the first three months?',
    answer:
      'In the first month we usually fix the basics: a faster website, a proper Google listing, and clear tracking so we can see where enquiries come from. Months two and three are about early enquiries from ads and the first signs of movement in Google rankings. Big organic growth takes longer, so the honest goal early on is a working system and a steady trickle of leads, not overnight number-one rankings.',
  },
  {
    category: 'trust',
    question: 'What questions should I ask a Pune agency before hiring them?',
    answer:
      'Ask five simple things. Who will actually do my work day to day? What exactly will I get each month? Can you show real results for a business like mine? Do I keep ownership of my website, Google and social accounts? And what happens if I want to leave? Clear, calm answers are a good sign. Vague answers, big promises, or pressure to sign a long contract are all reasons to slow down.',
  },
  {
    category: 'ai',
    question: 'Will AI tools replace digital marketing agencies in Pune?',
    answer:
      'AI is changing the work, not ending it. Tools can now write drafts, sort data and answer customers faster, and a good agency uses them to do more for you. What AI cannot do is decide your strategy, judge what is honest, or take responsibility for your results. The Pune agencies worth hiring are the ones using AI to work smarter while a real person still owns your outcome.',
  },
  {
    category: 'ai',
    question: 'How can I check whether ChatGPT or Google’s AI already mentions my business?',
    answer:
      'The quickest way is to ask the tools yourself. Open ChatGPT, Gemini or Google and ask something a customer would, like which company they should pick for your service in Pune, and see if your name comes up. If it does not, that is a gap worth closing while most local competitors still ignore it. We also run a free check that shows whether AI tools recommend you, linked near the bottom of this page.',
  },
];

/* ── Structured data (server-rendered in initial HTML, so AI crawlers read it) ──
   FAQPage mainEntity is derived from FAQ_ITEMS so the schema can never drift
   from what a human reads on the page. */

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
  name: 'Digital Marketing Services in Pune',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet Technologies',
    url: 'https://factoryjet.com',
    telephone: '+919699977699',
    address: { '@type': 'PostalAddress', addressCountry: 'IN' },
  },
  areaServed: { '@type': 'City', name: 'Pune' },
  serviceType: 'Digital Marketing',
  description:
    'Integrated digital marketing for Pune businesses: SEO, paid ads, social media, websites, WhatsApp and AI search, handled by one senior in-house team.',
};

const agenciesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Top digital marketing agencies in Pune (July 2026)',
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
  name: 'Digital Marketing Agency in Pune | FactoryJet',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
};

export default function DigitalMarketingPunePage() {
  return (
    <>
      <script
        id="in-dm-pune-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="in-dm-pune-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="in-dm-pune-agencies-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agenciesSchema) }}
      />
      <script
        id="in-dm-pune-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Digital Marketing', url: 'https://factoryjet.com/digital-marketing' },
          { name: 'Pune', url: CANONICAL },
        ]}
      />

      <SiteHeader locale="in" />

      <main className="bg-fj-cream">
        <Hero
          eyebrow="DIGITAL MARKETING AGENCY · PUNE"
          headline="A Digital Marketing Agency in Pune That Brings You Real Customers"
          lead="We help Pune businesses get found on Google and AI tools like ChatGPT, and turn visitors into real enquiries. One senior in-house team, plain-English reports, no jargon."
          formSlot={<HeroInlineForm region="in" source="in_dm_pune_hero" />}
          secondaryCta={{ label: 'Get a Free Growth Plan', modal: true as const, region: 'in' as const }}
          trustItems={HERO_TRUST}
          accent="orange"
          rightSlot={
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div aria-hidden className="absolute -right-3 -top-3 h-24 w-24 rounded-2xl bg-[#F05A28]/10" />
              <div aria-hidden className="absolute -bottom-4 -left-4 h-28 w-28 rounded-2xl bg-fj-ink/[0.04]" />
              <div className="relative overflow-hidden rounded-2xl border border-fj-neutral-200 shadow-sm">
                <img
                  src="/images/services/digital-marketing/pune/hero.webp"
                  alt="A digital marketing professional in a modern Pune office"
                  width={832}
                  height={1216}
                  fetchPriority="high"
                  className="aspect-[3/4] w-full object-cover"
                />
                <div className="absolute bottom-3 left-3 rounded-xl bg-white/95 px-4 py-2.5 shadow-sm">
                  <p className="font-fj-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[#B23E13]">
                    Serving Pune and all of India
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
              So, which is the best digital marketing agency in Pune?
            </Heading>
            <p className="mt-4 text-lg leading-relaxed text-fj-ink/80">
              The honest answer: there is no single best agency for every Pune business. The right one
              for you depends on your size, your customers and, most of all, who actually does your
              work. For small and mid-size Pune businesses that want one senior team to handle
              everything, from your website to Google to AI search, FactoryJet is a strong choice.
              Below we compare the top Pune agencies openly, including ourselves, so you can decide for
              yourself.
            </p>
          </div>
        </section>

        <LogoBar tagline="Trusted by 500+ businesses across India, the US, the UK and the UAE" />

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

        {/* Cited Pune market context. Three real, resolving outbound sources
            (IBEF, DataReportal, TechCrunch) verified July 2026. */}
        <CityContextSection
          eyebrow="THE PUNE MARKET, IN PLAIN NUMBERS"
          headline="Pune is many markets at once, and each one searches differently"
          leadParagraphs={[
            'Pune is not one single market, it is several at the same time. There are the software and IT parks in Hinjewadi and Kharadi, a huge auto and manufacturing belt around Pimpri-Chinchwad and Chakan, one of the largest student populations in the country, a fast-moving property market, and thousands of clinics, shops and restaurants. A plan that works for a coaching class in Kothrud will not fit a manufacturing supplier in PCMC.',
            'What has changed is how all of these customers look for you. Almost the whole country is online now, and a growing share start by asking an AI tool like ChatGPT before they even open Google. Being found in Pune today means showing up in Google search, on Google Maps for "near me" searches, and inside the answers these AI tools give.',
            'We build the plan around how your particular Pune customers actually search and buy, not around a template. That is why a real estate builder in Baner, a dental clinic in Viman Nagar, and a D2C brand shipping across India each get a different mix from us, and all of it is measured the same honest way: by the number of real enquiries it brings in.',
          ]}
          bodySlot={
            <>
              <div className="border-l-2 py-1 pl-5" style={{ borderLeftColor: '#F05A28' }}>
                <p
                  className="fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  The real question is never "which is the best agency in Pune". It is which plan fits how your Pune customers search.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Hinjewadi', 'Baner', 'Wakad', 'Kharadi', 'Aundh', 'Kothrud', 'Viman Nagar', 'PCMC', 'Chakan'].map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center rounded-full border border-[#F05A28]/25 bg-[#F05A28]/8 px-3 py-1 font-fj-mono font-medium text-[#B23E13]"
                    style={{ fontSize: '10px', letterSpacing: '0.08em' }}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </>
          }
          stats={MARKET_STATS}
        />

        <ServiceExplanation
          eyebrow="WHAT WE DO, IN PLAIN WORDS"
          headline="What a digital marketing agency actually does for a Pune business"
          lead="Strip away the buzzwords and it comes down to one thing: helping more of the right people in and around Pune find your business and become customers."
          body={
            <>
              <p>
                Some agencies make this sound complicated on purpose. It is not. Your customers are
                already searching on Google, scrolling Instagram, and now asking ChatGPT for
                recommendations. Our job is to make sure your business shows up in those moments, and
                that the person who clicks actually turns into a call, a message or a sale.
              </p>
              <p>
                We do that by joining the pieces together: a fast website, showing up on Google (SEO),
                ads when you need quick results, social media, WhatsApp follow-up, and getting picked
                by AI tools. Not every Pune business needs all of it. We choose the few that will bring
                you the most enquiries, and we tell you honestly which ones will not.
              </p>
            </>
          }
          rightSlot={
            <div className="relative">
              <div aria-hidden className="absolute -bottom-4 -right-4 h-28 w-28 rounded-2xl bg-[#F05A28]/10" />
              <img
                src="/images/services/digital-marketing/pune/team.webp"
                alt="A digital marketing team in a modern Pune office collaborating around a laptop"
                width={1216}
                height={832}
                loading="lazy"
                className="relative aspect-[4/3] w-full rounded-2xl border border-fj-neutral-200 object-cover shadow-sm"
              />
            </div>
          }
        />

        <IndustriesGrid
          variant="cards"
          eyebrow="EVERYTHING IN ONE PLACE"
          headline="One team for every part of your online growth"
          lead="Instead of hiring five different people, you get one senior team that covers the whole picture for your Pune business. Each of these links to how we do it."
          sectors={CHANNELS}
        />

        {/* Second ServiceExplanation: our actual approach for a Pune business. */}
        <ServiceExplanation
          eyebrow="OUR APPROACH FOR PUNE"
          headline="How we actually grow a Pune business"
          lead="No secret formula and no jargon. We start with the few things that will bring you enquiries fastest, prove they work, and only then add more."
          reverseOnDesktop
          body={
            <>
              <p>
                First we look at where your Pune customers already are and how they search. Then we
                fix the leaks: a slow website, a missing Google listing, ads that spend on the wrong
                clicks. Small fixes early often bring the first extra enquiries before we build
                anything big.
              </p>
              <p>
                Next we join the channels so nothing leaks between them. A buyer might find you on
                Google, check your Instagram, then message you on WhatsApp before deciding. When those
                pieces talk to each other, fewer enquiries slip away. We also make sure AI tools like
                ChatGPT and Google’s AI can find and recommend you, which most Pune agencies still
                ignore.
              </p>
              <p>
                Every month you get a plain report that answers three questions: how many people came,
                how many enquiries you got, and what we did. If something is not bringing leads, we say
                so and change it. You keep full ownership of your website and accounts the whole time,
                so you are never locked in.
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
                  What you get every month
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100 px-7">
                {[
                  { t: 'A plain-English report', n: 'Visitors, enquiries and what we did, in words you can read' },
                  { t: 'Senior people on your account', n: 'Experienced hands do the work, not trainees' },
                  { t: 'Found on Google and AI search', n: 'Search, Maps, and answers from ChatGPT and Google AI' },
                  { t: 'Full ownership, no lock-in', n: 'Your website, Google and social accounts stay yours' },
                  { t: 'One honest point of contact', n: 'A real person who replies, not a call centre' },
                ].map((item) => (
                  <div key={item.t} className="flex items-start gap-3 py-3.5">
                    <span
                      className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#F05A28]/10"
                      aria-hidden="true"
                    >
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2.5 6l2.2 2.2 4.8-5"
                          stroke="#B23E13"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <div>
                      <p className="font-fj-body text-[0.9375rem] font-semibold text-fj-ink">{item.t}</p>
                      <p className="font-fj-body text-[0.8125rem] leading-relaxed text-fj-neutral-500">{item.n}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        {/* Listicle: the kinds of Pune businesses we help grow. Long-tail city
            keywords (real estate / healthcare / IT) woven in naturally. */}
        <section className="bg-fj-cream px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-5xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#B23E13]">
              BUILT FOR HOW PUNE ACTUALLY WORKS
            </p>
            <Heading as="h2" size="h2" className="text-fj-ink">
              The types of Pune businesses we help grow
            </Heading>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fj-ink/80">
              Pune is not one market, so we do not sell one package. These are the kinds of businesses
              we help most, and what growth looks like for each. If yours is not on the list, it almost
              certainly still fits, the plan just changes.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {BUSINESS_TYPES.map((b) => (
                <div key={b.name} className="rounded-2xl border border-fj-ink/10 bg-white p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-lg font-bold text-fj-ink">{b.name}</h3>
                    <span className="shrink-0 font-fj-mono text-[10px] uppercase tracking-[0.08em] text-[#B23E13]">
                      {b.where}
                    </span>
                  </div>
                  <p className="mt-2 leading-relaxed text-fj-ink/75">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs a typical Pune agency vs a freelancer vs your own team"
          lead="There is no single right answer for every business. Here is an honest look at how the options differ, so you can pick what fits you."
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
        />

        <BigThreeTrustBlock
          variant="statement"
          eyebrow="WHY PUNE OWNERS STAY WITH US"
          headline="No freshers on your account, no long lock-in, and a plain report every month you can actually read"
        />

        <StrategicDarkSection
          eyebrow="WHY MONEY GETS WASTED"
          headline="Three reasons most digital marketing spend disappears"
          lead="If past marketing did not work, it is usually one of these, and all three are avoidable."
          pillars={PILLARS}
        />

        {/* Named-competitor comparison: the honest "who is best for what" listicle. */}
        <section className="bg-fj-cream px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#B23E13]">
              THE TOP PUNE AGENCIES, COMPARED HONESTLY
            </p>
            <Heading as="h2" size="h2" className="text-fj-ink">
              The best digital marketing agencies in Pune, and who each one suits
            </Heading>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fj-ink/80">
              We looked at which agencies actually rank on Google for digital marketing and SEO in Pune
              using live search data in July 2026, and what each is genuinely known for. We include
              ourselves and say so openly, because hiding it would be the opposite of honest.
            </p>

            <ol className="mt-10 space-y-4">
              {AGENCIES.map((a, i) => (
                <li
                  key={a.name}
                  className={`flex gap-4 rounded-2xl border p-5 md:p-6 ${
                    a.isUs
                      ? 'border-[#F05A28]/40 bg-[#F05A28]/5'
                      : 'border-fj-ink/10 bg-white'
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
              A quick note on fairness: every agency here is a genuine, capable Pune team. The "best
              for" lines are our honest read of who each one suits, based on their public work and what
              they rank for. The right pick is the one that matches your business, not the one that
              shouts loudest.
            </p>
          </div>
        </section>

        {/* Mid-page CTA. Headline and sub overridden to keep the page free of any
            price/cost framing (per the page's no-pricing rule). */}
        <FinalCTA
          variant="light"
          eyebrow="TALK TO US"
          headline="Tell us what your Pune business needs"
          sub="Send us where you are today and what you want more of. We’ll reply with a simple plan and honest next steps, usually within one working day. No jargon, no pressure."
          primaryCta={{ label: 'Get my free growth plan', modal: true, region: 'in' }}
          secondaryCta={{ label: 'Check if AI tools recommend you', href: '/ai-visibility-checker' }}
        />

        <ServiceJourneyRow
          eyebrow="HOW WORKING WITH US FEELS"
          headline="From first chat to real results, in five simple steps"
          lead="No confusing process, no surprises. Here is exactly what happens when you work with us."
          stages={JOURNEY}
          closingNote="5 SIMPLE STEPS · SENIOR TEAM · HONEST MONTHLY REPORTS"
        />

        {/* Reach across Pune (plain language + safe internal links to hubs). */}
        <section className="border-y border-fj-ink/10 bg-white px-6 py-14 md:px-8 md:py-16">
          <div className="mx-auto max-w-3xl">
            <Heading as="h2" size="h3" className="text-fj-ink">
              We help businesses grow right across Pune
            </Heading>
            <p className="mt-4 text-lg leading-relaxed text-fj-ink/80">
              Because the work happens online, no part of the city is out of reach. We help software
              and IT firms around Hinjewadi and Kharadi, showrooms and offices in Baner, Balewadi,
              Aundh and Wakad, the manufacturing belt around Pimpri-Chinchwad and Chakan, and the shops,
              clinics and restaurants in Kothrud, Viman Nagar and beyond. Whether you need to{' '}
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
                see how the top agencies in India compare
              </a>
              , we include ourselves openly.
            </p>
          </div>
        </section>

        <TestimonialsSection
          eyebrow="REAL RESULTS"
          headline="What business owners say after working with us"
          region="in"
        />

        <FAQ
          eyebrow="QUESTIONS PUNE OWNERS ACTUALLY ASK"
          headline="Digital marketing in Pune, answered in plain words"
          lead="Real questions from real Pune searches, answered simply, with no jargon and no sales spin."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        <FinalCTA
          variant="light"
          eyebrow="READY WHEN YOU ARE"
          headline="Want to see how many customers your Pune business is missing?"
          sub="Book a free, no-pressure chat. We will look at your website and where your customers are, and tell you honestly what will bring you more enquiries, even if we never work together."
          primaryCta={{ label: 'Get My Free Growth Plan', modal: true, region: 'in' }}
          secondaryCta={{ label: 'Check if AI tools recommend you', href: '/ai-visibility-checker' }}
          objectionHandler="No jargon. No long contract. Just an honest plan you can use straight away."
        />
      </main>

      <SiteFooter locale="in" />
    </>
  );
}

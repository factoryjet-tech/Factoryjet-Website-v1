import type { Metadata } from 'next';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import IndustriesGrid, { type IndustryCard } from '@/components/v2/IndustriesGrid';
import CityContextSection from '@/components/v2/CityContextSection';
import StrategicDarkSection, { type Pillar } from '@/components/v2/StrategicDarkSection';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import Heading from '@/components/v2/Heading';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

const CANONICAL = 'https://factoryjet.com/digital-marketing/bangalore';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in Bangalore | FactoryJet',
  description:
    'Looking for a digital marketing agency in Bangalore? FactoryJet helps Bangalore businesses get found on Google and AI tools like ChatGPT, and turn clicks into real customers. One senior in-house team for SEO, ads, websites and more.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Digital Marketing Agency in Bangalore | FactoryJet',
    description:
      'One senior in-house team that gets Bangalore businesses found on Google and AI search, and turns visitors into enquiries. SEO, ads, websites, social and more.',
    url: CANONICAL,
    images: [
      {
        url: 'https://factoryjet.com/images/services/digital-marketing/bangalore/team.webp',
        width: 1216,
        height: 832,
        alt: 'FactoryJet digital marketing team in Bangalore',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency in Bangalore | FactoryJet',
    description:
      'Get found on Google and AI search, and turn visitors into customers. One senior in-house team for Bangalore businesses.',
    images: ['https://factoryjet.com/images/services/digital-marketing/bangalore/team.webp'],
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
   Written for Bangalore: startups, D2C brands, clinics, restaurants,
   real estate, coaching centres and local service businesses.
   ──────────────────────────────────────────────────────────────────────── */

const HERO_TRUST = [
  '500+ businesses helped',
  '12 years of experience',
  'Senior team, not freshers',
  'Found on Google and AI search',
];

const STATS = [
  { value: '500+', label: 'Businesses helped', note: 'Across India, US, UK and UAE' },
  { value: '12 yrs', label: 'Years doing this', note: 'Not a new agency practising on you' },
  { value: 'In-house', label: 'Senior team', note: 'No work handed to freshers' },
  { value: '4', label: 'Countries served', note: 'India, US, UK and UAE' },
];

// Channel grid = the internal-link authority hub. Each card links into an
// existing FactoryJet service page so this Bangalore page passes authority down.
const CHANNELS: IndustryCard[] = [
  {
    name: 'SEO (get found on Google)',
    description:
      'SEO means search engine optimisation. In plain words: showing up on Google when a Bangalore customer searches to buy, without paying for every click.',
    linkLabel: 'Explore SEO',
    linkHref: '/seo',
  },
  {
    name: 'Websites that sell',
    description:
      'A fast, mobile-first website that loads quickly on Bangalore data speeds and turns visitors into calls and enquiries, instead of just looking nice.',
    linkLabel: 'See web design',
    linkHref: '/web-design',
  },
  {
    name: 'Online stores',
    description:
      'Ecommerce means selling online. We build stores that are easy for customers to buy from and easy for you to run, a fit for the many D2C brands born in Bangalore.',
    linkLabel: 'See ecommerce',
    linkHref: '/services/ecommerce-development',
  },
  {
    name: 'AI search (get picked by ChatGPT)',
    description:
      'When people ask ChatGPT, Gemini or Google’s AI for a recommendation, we help your business be one of the answers. This newer skill is called GEO. Bangalore’s tech crowd already asks AI first.',
    linkLabel: 'Explore AI SEO',
    linkHref: '/ai-seo',
  },
  {
    name: 'Chatbots and automation',
    description:
      'Smart helpers that reply to customers day and night and do repeat tasks for you, so your small Bangalore team saves hours every week.',
    linkLabel: 'See AI agents',
    linkHref: '/services/ai-agent-development',
  },
  {
    name: 'WhatsApp for business',
    description:
      'Answer customers and collect leads automatically on WhatsApp, the app nearly every Bangalore customer already checks a dozen times a day.',
    linkLabel: 'See WhatsApp chatbot',
    linkHref: '/whatsapp-chatbot',
  },
  {
    name: 'Shopify stores',
    description:
      'Shopify is a popular tool for online shops. We build custom Shopify stores that look great and load fast, popular with Bangalore D2C and boutique brands.',
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
  { label: 'Traditional agency' },
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
    feature: 'Real work on local search (Google Maps and reviews)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="ih" kind="partial" />,
    ],
  },
  {
    feature: 'Sets up proper tracking so you know what works',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="ih" kind="partial" />,
    ],
  },
  {
    feature: 'Tells you which channel is bringing the leads',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="ih" kind="partial" />,
    ],
  },
  {
    feature: 'Knows Bangalore neighbourhoods and local buyers',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      'You already do',
    ],
  },
  {
    feature: 'Replies quickly, usually the same day',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="ih" kind="yes" />,
    ],
  },
];

// Live-data-backed market context for Bangalore. Every stat is a real,
// current figure from a named source, and each links out to that source
// (verified July 2026). Used by the cited CityContextSection.
const MARKET_STATS = [
  {
    value: '958M',
    label:
      'active internet users in India in 2025, up about 8% in a year. In a phone-first city like Bangalore, your customers search before they call or visit.',
    sourceUrl:
      'https://telanganatoday.com/indias-internet-user-base-crosses-950-million-in-2025-iamai-report',
    sourceLabel: 'IAMAI + Kantar, 2025',
  },
  {
    value: '100M',
    label:
      'people in India use ChatGPT every week, second only to the United States. Many now ask an AI tool "which company should I pick" before they buy.',
    sourceUrl:
      'https://techcrunch.com/2026/02/15/india-has-100m-weekly-active-chatgpt-users-sam-altman-says/',
    sourceLabel: 'TechCrunch, Feb 2026',
  },
  {
    value: '70%+',
    label:
      "of Karnataka's 21,163 recognised startups are based in Bengaluru, alongside global tech offices, D2C brands and local shops. It is India's most crowded city to stand out in.",
    sourceUrl:
      'https://thefederal.com/category/news/maharashtra-tops-india-startup-list-karnataka-comes-second-start-up-india-10-years-dpiit-226618',
    sourceLabel: 'The Federal / DPIIT, 2025',
  },
];

// Bangalore-specific business segments listicle. Distinct from the channel
// grid above (which lists services): this lists the kinds of Bangalore
// businesses we grow, and what actually moves the needle for each. Weaves in
// high-volume city search terms naturally (startups, social media, SEO).
const BUSINESS_SEGMENTS = [
  {
    name: 'Startups and SaaS teams',
    where: 'Koramangala · HSR Layout · Indiranagar',
    body:
      'A digital marketing agency for startups in Bangalore has to do two things at once: bring leads this month to prove the idea works, and build a base that keeps growing without burning cash. We run ads for quick results while SEO and content build up quietly underneath.',
  },
  {
    name: 'D2C and boutique brands',
    where: 'Online-first, selling across India',
    body:
      'Bangalore is a nursery for direct-to-customer brands. We build fast online stores, run social ads that actually sell, and get you into AI answers, so people find you without you renting space on a big marketplace.',
  },
  {
    name: 'Clinics and healthcare',
    where: 'Dentists · physios · diagnostic labs',
    body:
      'When someone needs a doctor near them, they search on the spot and pick fast. We put you at the top of local search and Google Maps, make booking easy on WhatsApp, and build the trust signals that turn a worried searcher into a booking.',
  },
  {
    name: 'Restaurants, cafes and cloud kitchens',
    where: 'Indiranagar · Koramangala · Whitefield',
    body:
      'Hungry people decide in seconds. We work on your Google Maps listing, your reviews and your Instagram so you show up first when someone nearby searches for a place to eat or order from.',
  },
  {
    name: 'Real estate and interiors',
    where: 'Whitefield · Sarjapur · North Bangalore',
    body:
      'Big decisions, long research. We build local landing pages for the areas you sell in, run WhatsApp enquiry flows, and show your projects clearly, so serious buyers reach you instead of a portal.',
  },
  {
    name: 'Coaching centres and edtech',
    where: 'Jayanagar · JP Nagar · online',
    body:
      'Parents and students search and compare before they ever walk in or call. We get you ranking for the courses you teach, and make your results and reviews easy to find, so you are the safe, obvious choice.',
  },
  {
    name: 'Local service businesses',
    where: 'Salons · repairs · home services',
    body:
      'These are won on "near me" searches and reviews. We make sure you appear when someone close by needs you, and that your reviews and quick WhatsApp replies close the deal before a competitor does.',
  },
  {
    name: 'IT services and B2B',
    where: 'Electronic City · Outer Ring Road',
    body:
      'Longer sales, careful buyers. We combine steady SEO, content that answers real questions, and now AI search, so decision-makers find you on Google and see you recommended when they ask an AI tool for options.',
  },
];

const PILLARS: Pillar[] = [
  {
    icon: '\u{1F9E9}',
    title: 'One channel alone is not a plan',
    body:
      'Doing only SEO, or only ads, or only Instagram leaves gaps. A Bangalore customer might find you on Google, check your Instagram, read a review, then message you on WhatsApp before they decide. We join the channels so nothing leaks between them.',
  },
  {
    icon: '\u{1F464}',
    title: 'Freshers learning on your business',
    body:
      'Bangalore has thousands of agencies, and many win you over with senior people, then quietly hand your work to trainees. You pay for experience you never actually get. At FactoryJet, experienced people do the real work.',
  },
  {
    icon: '\u{1F916}',
    title: 'Ignoring AI search is a costly mistake',
    body:
      'Bangalore is one of the most AI-savvy cities in India. Techies, founders and students here ask ChatGPT and Gemini "which company should I pick" every day. Agencies stuck on old-style SEO miss this. We get you found on Google and inside AI answers.',
  },
];

// Named-competitor comparison, built from live DataForSEO ranking data for
// Bangalore search terms (checked July 2026). Honest, positive, with open
// self-disclosure. Every agency here genuinely ranks for Bangalore digital
// marketing or SEO searches.
const AGENCIES = [
  {
    name: 'FactoryJet',
    bestFor:
      'Small and mid-size Bangalore businesses that want one senior team across website, Google, ads and AI search, with plain-English reports. (Yes, that is us. We include ourselves openly and let the comparison speak for itself.)',
    isUs: true,
  },
  {
    name: 'FruitBowl Digital',
    bestFor: 'Brands that want wide digital coverage plus advertising and public-relations style promotion.',
  },
  {
    name: 'Digital Corsel',
    bestFor: 'Bangalore businesses focused on paid advertising and steady lead generation.',
  },
  {
    name: 'BrandStory',
    bestFor: 'Businesses that want SEO (Google rankings) bundled with web design and branding.',
  },
  {
    name: 'DigiMark Agency',
    bestFor: 'Businesses whose main need is strong, steady SEO and content marketing.',
  },
  {
    name: 'BrandShark',
    bestFor: 'Bangalore startups and D2C brands that want performance marketing and creative.',
  },
  {
    name: 'Nextwebi',
    bestFor: 'Businesses that need a website or app built alongside their marketing, all in one place.',
  },
];

const JOURNEY: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'A free, no-pressure chat',
    description: 'We learn about your Bangalore business, your customers and your goals. No jargon, no hard sell.',
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
  { key: 'cost', label: 'Cost and value' },
  { key: 'local', label: 'Bangalore and location' },
  { key: 'results', label: 'Results and reports' },
  { key: 'trust', label: 'Trust and safety' },
  { key: 'ai', label: 'AI and the future' },
];

// Every FAQ below is grounded in real Google "People also ask" and related-search
// data for "digital marketing agency bangalore" and "seo company bangalore"
// (DataForSEO, India, July 2026). Career, course and "how to earn" queries were
// excluded because they are not buyer intent.
const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'choosing',
    question: 'Which is the best digital marketing agency in Bangalore?',
    answer:
      'There is no single "best" one for everyone. Bangalore has hundreds of agencies, and the best one for you is the one that fits your size, your goals and your customers. A funded startup in Koramangala and a family clinic in Jayanagar need very different help. Lower on this page we compare the agencies that actually rank for Bangalore searches, honestly and including ourselves, so you can pick the right fit instead of the loudest name.',
  },
  {
    category: 'choosing',
    question: 'Which company is best for digital marketing?',
    answer:
      'It depends entirely on what you are trying to do. Some agencies are strongest at paid ads, some at SEO (getting found on Google for free), some at social media or branding. The better question is: who will put a senior person on my account, and can they show me real results for a business like mine? Judge an agency by that, not by which name comes up first in a list.',
  },
  {
    category: 'choosing',
    question: 'How do I find the top 10 digital marketing companies in Bangalore?',
    answer:
      'Be careful with "top 10" and "top 50" lists you find online. Many of them are paid placements, where the agency pays the website to be listed, so the order tells you who spent money, not who does good work. A safer way is to search for the exact service you need, look at who ranks naturally, then read real reviews and case studies. That is the approach we used to build the honest comparison further down this page.',
  },
  {
    category: 'choosing',
    question: 'How do I choose the right digital marketing agency in Bangalore?',
    answer:
      'Ask three simple questions before you sign anything. One: who will actually do my work, a senior person or a fresher? Two: what exactly will I get each month, in plain words? Three: can you show me real results for a business like mine? An agency that answers all three clearly, without hiding behind big words, is usually a safe choice.',
  },
  {
    category: 'choosing',
    question: 'Which agency is best for a startup in Bangalore?',
    answer:
      'Bangalore startups usually need two things at once: quick leads to prove the business works, and a base that keeps growing without burning cash. Look for an agency that can run ads for fast results while building SEO and content quietly in the background, and that reports in plain numbers you can show investors. Avoid anyone who wants a huge fixed retainer before proving anything. Start small, watch the leads, then scale what works.',
  },
  {
    category: 'choosing',
    question: 'Agency vs freelancer vs your own team: which is right for me?',
    answer:
      'A freelancer is one person. They are handy for a single small task, but one person cannot cover SEO, ads, design and content all at once. Building your own team gives you full control but takes months to hire and train, and Bangalore hiring is competitive and slow. An agency gives you a whole team instantly, across every skill. For most growing businesses, an agency is the fastest way to cover everything without the hiring headache.',
  },
  {
    category: 'choosing',
    question: 'How do I check an agency’s reviews before I hire them?',
    answer:
      'Look in more than one place. Read their Google reviews, check their profile on sites like Justdial or Clutch, and search their name on Reddit to see what real people say when the agency is not watching. The most useful reviews mention specific results, not just "great team". If an agency has only five-star reviews all posted in the same week, be a little suspicious. Real feedback is usually a mix.',
  },
  {
    category: 'choosing',
    question: 'I have an agency’s contact number. What should I ask on the first call?',
    answer:
      'Ask who will personally run your account and how many years they have done this. Ask to see two or three examples of businesses like yours that they have helped. Ask what you will get in the first month, and how you can leave if it is not working. A good agency answers all of this happily. If they dodge the "who does the work" question or push a long contract straight away, treat that as a warning.',
  },
  {
    category: 'services',
    question: 'What does a digital marketing agency in Bangalore actually do?',
    answer:
      'In simple words, it helps more of the right people find your business online and turn into customers. That means building or fixing your website, getting you to show up on Google (this is called SEO, short for search engine optimisation), running ads, posting on social media, and staying in touch by email or WhatsApp. The goal is always the same: more calls, more enquiries, more sales.',
  },
  {
    category: 'services',
    question: 'What are the 7 types of digital marketing?',
    answer:
      'People usually list them as: SEO (showing up on Google for free), paid ads (paying Google or Instagram to show your business), social media marketing (Instagram, Facebook, LinkedIn), content marketing (blogs and videos that pull people in), email marketing, affiliate or influencer marketing (others promote you), and now AI search, which means getting recommended by tools like ChatGPT. A good agency mixes the few that fit your business best, not all seven at once.',
  },
  {
    category: 'services',
    question: 'What are the 4 types of digital marketing?',
    answer:
      'When people shorten it to four, they usually mean: SEO (free Google traffic), paid ads (fast, paid visitors), social media (building trust and a following), and content and email (blogs, videos and messages that keep customers coming back). Think of these as four levers. Most businesses pull two or three, not all four, and the right mix depends on where your customers already spend time.',
  },
  {
    category: 'services',
    question: 'What is an SEO company, and what does an SEO company in Bangalore do?',
    answer:
      'SEO is short for search engine optimisation, which just means getting your website to show up higher on Google when someone searches, without paying for each click. An SEO company in Bangalore studies what your customers type into Google, fixes your website so Google trusts it, writes helpful pages, and builds your reputation online. Done well, it brings you a steady stream of visitors for months without you paying per click. We handle SEO as part of a full plan, not as a stand-alone trick.',
  },
  {
    category: 'services',
    question: 'Which channels actually bring leads for Bangalore businesses?',
    answer:
      'It depends on your business, and any agency that says "do everything" is guessing. For most Bangalore businesses, showing up on Google when someone is searching to buy, plus a fast mobile website and quick WhatsApp follow-up, brings the most enquiries. For food, retail and local services, Google Maps and reviews matter a lot too. Social media builds trust but works more slowly. We pick channels based on where your customers already are.',
  },
  {
    category: 'services',
    question: 'Do I need SEO, ads, or social media first?',
    answer:
      'If you need customers this week, start with ads, because they bring visitors the day you switch them on. If you want steady free traffic that grows over months, start with SEO. Most Bangalore businesses do best with a small mix: ads for quick results while SEO builds up quietly in the background. Social media supports both by building trust.',
  },
  {
    category: 'cost',
    question: 'What is the cost of digital marketing in Bangalore?',
    answer:
      'It depends entirely on what you need, because "digital marketing" can mean one small task or a full plan across many channels. A new website, ongoing SEO, ads, and social media are very different amounts of work. The better question is what result you want, more enquiries and more customers, and what that is worth to your business. We map out a plan for your goals and explain the value in plain terms before you commit to anything.',
  },
  {
    category: 'cost',
    question: 'How much does a digital marketing agency cost?',
    answer:
      'It varies a lot, and anyone who quotes a firm figure before understanding your business is guessing. The right way to think about it is value, not price: a good agency should bring in more business than it takes to run. Be careful with offers that look unusually low, because they often mean freshers doing rushed work, or important things being skipped. We would rather show you a clear plan and the results it is built to bring than throw out a random number.',
  },
  {
    category: 'local',
    question: 'Do I need a Bangalore-based agency, or can I work with one remotely?',
    answer:
      'You do not strictly need an agency sitting in Bangalore. Almost all digital marketing work happens online, so a good team can help your business from anywhere. What matters more is whether they understand Bangalore customers and reply quickly. We work with businesses across India and in the US, the UK and the UAE, and we know the Bangalore market well, so you get local understanding without needing someone to drive across town in the traffic.',
  },
  {
    category: 'local',
    question: 'Which parts of Bangalore do you work with?',
    answer:
      'All of it. We help businesses in Koramangala, Indiranagar, HSR Layout, Whitefield, Electronic City, Jayanagar, JP Nagar, MG Road, Marathahalli and everywhere in between, plus nearby areas like Electronic City and the outer tech parks. Because the work is online, your exact location does not limit what we can do. What we do pay attention to is the kind of customer each area brings, since a cafe in Indiranagar and a factory near Peenya reach people in different ways.',
  },
  {
    category: 'results',
    question: 'How long does digital marketing take to show results?',
    answer:
      'Ads can bring enquiries within days. SEO (free Google traffic) usually takes three to six months to build up, and longer in a crowded market like Bangalore where many businesses compete for the same searches. Social media and content also need a few months to earn trust. Anyone who promises big results in a week is not being honest with you.',
  },
  {
    category: 'results',
    question: 'How is performance measured, and what reports should I expect?',
    answer:
      'You should get a simple monthly report that a normal person can read, not a page full of confusing charts. It should answer three things: how many people visited, how many enquiries or calls came in, and what we did that month. If an agency cannot show you leads in plain numbers, treat it as a warning sign.',
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
      'This is the most important question most people forget to ask. Many agencies win you over with senior people, then hand your work to freshers straight out of a three-month course. Always ask who will run your account day to day. At FactoryJet, experienced people do the work, not trainees practising on your business.',
  },
  {
    category: 'trust',
    question: 'What are the red flags of a bad digital marketing agency?',
    answer:
      'Watch out for these: a "guaranteed" number-one spot on Google, offers that seem too good to be true, big confusing words instead of clear answers, no real examples of past work, and being locked into a long contract before anything is proven. Any single one of these is a good reason to be careful.',
  },
  {
    category: 'trust',
    question: 'Do agencies lock you into long contracts?',
    answer:
      'Some do, and it is often to protect themselves rather than you. A confident agency is happy to prove its value month by month. Always ask how easy it is to leave if you are not happy. If leaving is made difficult, ask yourself why they built it that way.',
  },
  {
    category: 'ai',
    question: 'Should my Bangalore business show up in AI search like ChatGPT and Google AI Overviews?',
    answer:
      'Yes, and in a tech-first city like Bangalore it matters even more, because so many people here ask ChatGPT or Gemini before they buy. When someone asks an AI tool for a recommendation, you want your business to be one of the answers. Getting mentioned by AI tools is a newer skill called GEO, short for generative engine optimisation. Most agencies are not doing this yet, which is your opening. We build it into our work, so you are found on Google and inside AI answers.',
  },
  {
    category: 'ai',
    question: 'What is answer engine optimisation, and does my business need it?',
    answer:
      'Answer engine optimisation, or AEO, simply means shaping your website so AI tools and Google’s instant answers pick your business as the reply. It is closely related to GEO. If your customers are the kind of people who ask ChatGPT or Google a question before buying, and in Bangalore many are, then yes, you need it. If you are not sure, we can check for free whether AI tools already mention you.',
  },

  /* ── Added from more live Bangalore "People also ask" + related-search data
        (DataForSEO, India, July 2026): SEO, social media, performance
        marketing and getting-started queries. ── */
  {
    category: 'cost',
    question: 'How much does SEO cost in Bangalore?',
    answer:
      'There is no fixed number, because SEO can mean a small clean-up or months of steady work to win competitive Bangalore searches. What you should look at is not the figure, but the return: how many real enquiries the extra Google traffic brings you, and whether the people doing the work are experienced. Be careful with very low offers, because they usually mean a fresher doing rushed work that Google ignores. We map out a plan for your goals and explain the value plainly before you commit to anything.',
  },
  {
    category: 'services',
    question: 'What are the 4 types of SEO?',
    answer:
      'People usually split SEO into four parts. On-page SEO is fixing the words and structure on your own pages so Google understands them. Off-page SEO is building your reputation, mostly through other trusted sites mentioning or linking to you. Technical SEO is the behind-the-scenes health of your site, like speed and mobile-friendliness. Local SEO is showing up for "near me" searches and on Google Maps, which matters most for a Bangalore shop, clinic or restaurant. A good plan uses all four together, not just one.',
  },
  {
    category: 'local',
    question: 'What is local SEO, and does my Bangalore business need it?',
    answer:
      'Local SEO is the work that makes you show up when someone nearby searches, for example "dentist in Jayanagar" or "cafe near me", and on Google Maps. It includes your Google Business Profile, your reviews, and making your address and phone number consistent everywhere. If customers come to you in person, or you serve a specific part of Bangalore, local SEO is often the fastest way to get more calls and walk-ins, so yes, you almost certainly need it.',
  },
  {
    category: 'ai',
    question: 'Is SEO being replaced by AI?',
    answer:
      'No, but it is changing. People still search on Google every day, so getting found there still matters a lot. What is new is that many people, especially in a tech-first city like Bangalore, now also ask ChatGPT or Google’s AI for a recommendation. So the smart move is not to drop SEO, it is to do good SEO and add the newer work that gets you mentioned inside AI answers. We do both, so you are covered whichever way your customer searches.',
  },
  {
    category: 'services',
    question: 'Can I do SEO myself, or should I hire a company?',
    answer:
      'You can do the basics yourself: claim your Google Business Profile, ask happy customers for reviews, and write clear pages about what you offer. That alone helps. The harder parts, like competitive Bangalore keywords, technical fixes and building trust over months, usually need experience and time most business owners do not have. A simple rule: do the easy wins yourself, and bring in a company when you want steady growth without it becoming your second job.',
  },
  {
    category: 'choosing',
    question: 'Should I hire an SEO freelancer or an SEO company in Bangalore?',
    answer:
      'A freelancer or solo SEO expert in Bangalore can be great for one focused task and is easy to start with. The catch is that one person cannot cover on-page, technical, content and local SEO all at once, and if they get busy or unwell, your work stops. A company gives you a small team across those skills and does not pause when one person is away. For a quick fix, a freelancer is fine. For steady growth you can rely on, a company is usually the safer choice.',
  },
  {
    category: 'choosing',
    question: 'Which company is best for social media marketing in Bangalore?',
    answer:
      'There is no single best social media marketing agency in Bangalore for everyone. A funded startup, a restaurant and a clinic all need very different content and very different platforms. The better question is whether the agency will put an experienced person on your account, post consistently, and show you real enquiries and not just likes. Judge them on that, and on work they have actually done for a business like yours, rather than on which name appears first in a list.',
  },
  {
    category: 'cost',
    question: 'How much does a social media marketing agency charge?',
    answer:
      'It varies a lot, because "social media" can mean a few posts a month or full content, ads and replies handled for you. Rather than chasing the lowest figure, think about value: is the work bringing you real enquiries and customers, or just numbers that look nice? Offers that look unusually low often mean copy-paste posts that do nothing. We would rather show you a clear plan built around your goals and explain what it is designed to bring in.',
  },
  {
    category: 'services',
    question: 'Do you offer social media marketing packages, and how do they work?',
    answer:
      'We do not force you into a fixed box, because a boutique brand and a coaching centre need very different things. We start by understanding your business and goals, then agree on exactly what we will do each month, in plain words, and how we will measure it. You always know what is happening and why, and you can change the plan as you see what is working. It is a plan built for you, not a one-size-fits-all package.',
  },
  {
    category: 'services',
    question: 'What does a performance marketing agency in Bangalore do?',
    answer:
      'Performance marketing just means advertising where the focus is on real results you can count, like leads and sales, not on how many people saw the ad. A performance marketing agency runs your ads on Google, Instagram, Facebook and similar, watches which ones bring enquiries, and quietly shifts your money toward those. Done honestly, it should always tie back to one question: for every rupee spent, how much business came back?',
  },
  {
    category: 'services',
    question: 'How do I start digital marketing for my Bangalore business?',
    answer:
      'Start with two simple things: make sure people can find you when they search, and make it easy for them to contact you. That usually means claiming your Google Business Profile, having a fast mobile website, and a quick way to message you like WhatsApp. Then pick one or two channels where your customers already are and stay consistent. You do not need to do everything at once. We can look at where you are today and tell you the two or three steps that will bring the fastest results.',
  },
  {
    category: 'services',
    question: 'What is the 3-3-3 rule in marketing?',
    answer:
      'You will see a few different "3-3-3 rules" online, so do not worry about the exact one. The common idea in marketing is simple: focus on a few channels, keep repeating a few clear messages, and give each new effort about three months before you judge it. The lesson matters more than the numbers, which is that trying to do everything, everywhere, all at once usually works worse than doing a few things consistently and giving them time.',
  },
  {
    category: 'services',
    question: 'What is the 80/20 rule for social media?',
    answer:
      'The 80/20 rule for social media means roughly 80% of your posts should be helpful, interesting or entertaining for your audience, and only about 20% should directly sell something. If every post is an advert, people stop paying attention. When most of your content is genuinely useful, the occasional sales post lands far better, because people already trust and enjoy hearing from you.',
  },
];

/* ── Structured data (server-rendered in initial HTML, so AI crawlers read it) ── */

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
  name: 'Digital Marketing Services in Bangalore',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet Technologies',
    url: 'https://factoryjet.com',
    telephone: '+919699977699',
    address: { '@type': 'PostalAddress', addressCountry: 'IN' },
  },
  areaServed: { '@type': 'City', name: 'Bangalore' },
  serviceType: 'Digital Marketing',
  description:
    'Integrated digital marketing for Bangalore businesses: SEO, paid ads, social media, websites, WhatsApp and AI search, handled by one senior in-house team.',
};

const agenciesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Top digital marketing agencies in Bangalore (July 2026)',
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
  name: 'Digital Marketing Agency in Bangalore | FactoryJet',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
};

export default function BangaloreDigitalMarketingPage() {
  return (
    <>
      <script
        id="blr-dm-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="blr-dm-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="blr-dm-agencies-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agenciesSchema) }}
      />
      <script
        id="blr-dm-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Digital Marketing', url: 'https://factoryjet.com/digital-marketing' },
          { name: 'Bangalore', url: CANONICAL },
        ]}
      />

      <SiteHeader locale="in" />

      <main className="bg-fj-cream">
        <Hero
          eyebrow="DIGITAL MARKETING AGENCY · BANGALORE"
          headline="A Digital Marketing Agency in Bangalore That Brings You Real Customers"
          lead="We help Bangalore businesses get found on Google and AI tools like ChatGPT, and turn visitors into real enquiries. One senior in-house team, plain-English reports, no jargon."
          formSlot={<HeroInlineForm region="in" source="in_digital_marketing_bangalore_hero" />}
          secondaryCta={{ label: 'Get a Free Growth Plan', modal: true as const, region: 'in' as const }}
          trustItems={HERO_TRUST}
          accent="orange"
          rightSlot={
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div aria-hidden className="absolute -right-3 -top-3 h-24 w-24 rounded-2xl bg-[#F05A28]/10" />
              <div aria-hidden className="absolute -bottom-4 -left-4 h-28 w-28 rounded-2xl bg-fj-ink/[0.04]" />
              <div className="relative overflow-hidden rounded-2xl border border-fj-neutral-200 shadow-sm">
                <img
                  src="/images/services/digital-marketing/bangalore/hero.webp"
                  alt="A digital marketing professional in a modern Bangalore office"
                  width={832}
                  height={1216}
                  fetchPriority="high"
                  className="aspect-[3/4] w-full object-cover"
                />
                <div className="absolute bottom-3 left-3 rounded-xl bg-white/95 px-4 py-2.5 shadow-sm">
                  <p className="font-fj-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[#B23E13]">
                    Trusted across 4 markets
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
              So, which is the best digital marketing agency in Bangalore?
            </Heading>
            <p className="mt-4 text-lg leading-relaxed text-fj-ink/80">
              The honest answer: there is no single best agency for every Bangalore business. The
              right one for you depends on your size, your goals and, most of all, who actually does
              your work. For small and mid-size businesses that want one senior team to handle
              everything, from your website to Google to AI search, FactoryJet is a strong choice.
              Below we compare the agencies that genuinely rank for Bangalore searches, including
              ourselves, so you can decide for yourself.
            </p>
          </div>
        </section>

        <LogoBar tagline="Trusted by 500+ businesses across India, the US, the UK and the UAE" />

        <BigThreeTrustBlock
          variant="statement"
          eyebrow="WHY BANGALORE BUSINESSES CHOOSE US"
          headline="One senior team that gets Bangalore businesses found on Google and AI search, and turns clicks into real enquiries."
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
          headline="What a digital marketing agency actually does for you"
          lead="Strip away the buzzwords and it comes down to one thing: helping more of the right people in Bangalore find your business and become customers."
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
                by AI tools. Not every business needs all of it. We choose the few that will bring you
                the most enquiries, and we tell you honestly which ones will not.
              </p>
            </>
          }
          rightSlot={
            <div className="relative">
              <div aria-hidden className="absolute -bottom-4 -right-4 h-28 w-28 rounded-2xl bg-[#F05A28]/10" />
              <img
                src="/images/services/digital-marketing/bangalore/team.webp"
                alt="FactoryJet digital marketing team collaborating in a Bangalore office"
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
          lead="Instead of hiring five different people, you get one senior team that covers the whole picture. Each of these links to how we do it."
          sectors={CHANNELS}
        />

        {/* Cited local-market context. Every stat links out to a named,
            current source (verified July 2026): IAMAI + Kantar, TechCrunch,
            and DPIIT via The Federal. */}
        <CityContextSection
          eyebrow="BANGALORE'S DIGITAL MARKET"
          headline="Bangalore is India's most competitive city to get noticed in"
          leadParagraphs={[
            "Bangalore is often called the Silicon Valley of India, and the numbers back it up. More than 70% of Karnataka's 21,163 recognised startups sit right here, next to global tech offices, fast-growing D2C brands, clinics, restaurants and shops all fighting for the same customers. Standing out here is harder than almost anywhere else in the country.",
            'Your customers are online, and they check before they buy. India crossed 958 million active internet users in 2025, and in a phone-first city like Bangalore most people search on their phone before they call or visit. If your business does not show up in that moment, a competitor does.',
            'Bangalore is also one of the most AI-savvy cities in India. About 100 million people in the country now use ChatGPT every week, and here that habit runs deep. People ask an AI tool "which company should I pick" the way they used to ask a friend. We build your presence for both places at once: found on Google, and named inside those AI answers.',
          ]}
          bodySlot={
            <>
              <div className="border-l-2 py-1 pl-5" style={{ borderLeftColor: '#F05A28' }}>
                <p
                  className="fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  In Bangalore, being invisible online is the same as being closed.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Koramangala', 'Indiranagar', 'HSR Layout', 'Whitefield', 'Electronic City', 'Jayanagar', 'JP Nagar', 'Marathahalli'].map((area) => (
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

        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs a traditional agency vs a freelancer vs your own team"
          lead="There is no single right answer for every business. Here is an honest look at how the options differ, so you can pick what fits you."
          pullQuote={{
            stat: '12 years',
            caption:
              'of doing the actual work with senior people. On your account you get experience, not a fresher practising on your business.',
          }}
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
          footer="Every option here can work for the right business. The honest read is simple: a freelancer suits one small job, your own team gives you control but takes months to build, and a senior agency covers everything from day one."
        />

        {/* Mid-page conversion moment. Headline and sub overridden to stay on
            topic for Bangalore digital marketing and free of any cost framing. */}
        <FinalCTA
          variant="light"
          eyebrow="TALK TO US"
          headline="Want more Bangalore customers? Start with a free plan."
          sub="Tell us about your Bangalore business and your goals. We will map out what will actually bring you more enquiries, in plain words, with no jargon and no pressure to sign anything."
          primaryCta={{ label: 'Get my free growth plan', modal: true, region: 'in' }}
          secondaryCta={{ label: 'Check if AI tools recommend you', href: '/ai-visibility-checker' }}
        />

        <StrategicDarkSection
          eyebrow="WHY MONEY GETS WASTED"
          headline="Three reasons most digital marketing spend disappears"
          lead="If past marketing did not work, it is usually one of these, and all three are avoidable."
          pillars={PILLARS}
        />

        <ServiceExplanation
          eyebrow="OUR APPROACH, BUILT FOR BANGALORE"
          headline="How we get a Bangalore business found and chosen"
          lead="Bangalore is crowded and fast. What works here is not more noise. It is showing up in the exact moment your customer is deciding, and making it easy for them to pick you."
          reverseOnDesktop
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {[
                  'Local search',
                  'Google Maps',
                  'Fast mobile site',
                  'WhatsApp replies',
                  'AI search',
                  'Honest tracking',
                ].map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center rounded-full border border-[#F05A28]/25 bg-[#F05A28]/8 px-3 py-1 font-fj-mono font-semibold uppercase text-[#B23E13]"
                    style={{ fontSize: '10px', letterSpacing: '0.10em' }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <p>
                We start by finding out where your Bangalore customers already look and what they
                type when they are ready to buy. Then we make sure you are there: at the top of
                Google for the searches that matter, on Google Maps for "near me" moments, and named
                inside AI answers when someone asks ChatGPT or Gemini for a recommendation.
              </p>
              <p>
                Getting the click is only half the job. A fast mobile site, clear next steps and a
                quick reply on WhatsApp are what turn a visitor into an enquiry. We tie the whole
                path together so nothing leaks between the search and the sale.
              </p>
              <p>
                And we are honest about the numbers. We set up proper tracking so you can see which
                channel actually brought each lead, and we do more of what works and drop what does
                not. No vanity likes, no confusing charts, just real enquiries you can count.
              </p>
            </>
          }
          rightSlot={
            <div
              className="w-full overflow-hidden rounded-2xl bg-white shadow-sm"
              style={{
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'rgb(229, 231, 235)',
                borderTopWidth: '2px',
                borderTopColor: '#F05A28',
              }}
            >
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-500"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  The Bangalore Playbook
                </p>
              </div>
              <ol className="divide-y divide-fj-neutral-100 px-7">
                {[
                  { step: 'Get found on Google', note: 'For the searches your buyers actually use' },
                  { step: 'Win local search', note: 'Google Maps, reviews and "near me" moments' },
                  { step: 'Show up in AI answers', note: 'Named when people ask ChatGPT or Gemini' },
                  { step: 'Fast mobile site', note: 'Loads quickly, makes the next step obvious' },
                  { step: 'Reply fast on WhatsApp', note: 'Catch the enquiry while they are still keen' },
                  { step: 'Track and improve', note: 'See what brings leads, do more of it' },
                ].map((item, i) => (
                  <li key={item.step} className="flex items-start gap-4 py-3.5">
                    <span
                      className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full font-fj-mono text-[11px] font-bold text-[#B23E13]"
                      style={{ background: 'rgba(240,90,40,0.10)' }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-fj-body text-[0.9375rem] font-semibold text-fj-ink">
                        {item.step}
                      </p>
                      <p className="font-fj-body text-[0.8125rem] leading-relaxed text-fj-neutral-600">
                        {item.note}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-7 py-5">
                <div className="mb-2 h-[3px] w-8 rounded-full" style={{ background: '#F05A28' }} aria-hidden="true" />
                <p
                  className="fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1rem', lineHeight: 1.3, letterSpacing: '-0.02em' }}
                >
                  Found on Google. Named by AI. Chosen by customers.
                </p>
              </div>
            </div>
          }
        />

        {/* Named-competitor comparison: the honest "who is best for what" listicle. */}
        <section className="bg-fj-cream px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#B23E13]">
              THE TOP BANGALORE AGENCIES, COMPARED HONESTLY
            </p>
            <Heading as="h2" size="h2" className="text-fj-ink">
              The best digital marketing agencies in Bangalore, and who each one suits
            </Heading>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fj-ink/80">
              We looked at which agencies actually rank on Google for digital marketing and SEO in
              Bangalore using live search data in July 2026, and what each is known for. We include
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
              A quick note on fairness: every agency here is a genuine, capable team that ranks for
              Bangalore searches. The "best for" lines are our honest read of who each one suits,
              based on their public work and what they rank for. The right pick is the one that
              matches your business, not the one that shouts loudest.
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

        {/* Bangalore business-types listicle: the segments we grow and what
            actually moves the needle for each. Card grid, distinct from the
            numbered competitor list above. */}
        <section className="bg-fj-cream px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#B23E13]">
              WHO WE GROW IN BANGALORE
            </p>
            <Heading as="h2" size="h2" className="text-fj-ink">
              The types of Bangalore businesses we help grow, and what works for each
            </Heading>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fj-ink/80">
              Different businesses win in different ways. A startup in Koramangala and a clinic in
              Jayanagar need very different plans. Here is who we help across Bangalore, and the
              handful of things that bring each of them the most enquiries.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
              {BUSINESS_SEGMENTS.map((seg) => (
                <div
                  key={seg.name}
                  className="rounded-2xl border border-fj-ink/10 bg-white p-6 md:p-7"
                >
                  <h3 className="font-fj-display text-lg font-bold text-fj-ink">{seg.name}</h3>
                  <p className="mt-1 font-fj-mono text-[11px] uppercase tracking-[0.10em] text-[#B23E13]">
                    {seg.where}
                  </p>
                  <p className="mt-3 leading-relaxed text-fj-ink/75">{seg.body}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-fj-ink/70">
              Not sure where your business fits? That is fine. Tell us what you do and who you want
              to reach, and we will point you to the two or three moves that matter most for you.
            </p>
          </div>
        </section>

        {/* Reach across Bangalore (plain language + safe internal links to hubs). */}
        <section className="border-y border-fj-ink/10 bg-white px-6 py-14 md:px-8 md:py-16">
          <div className="mx-auto max-w-3xl">
            <Heading as="h2" size="h3" className="text-fj-ink">
              We help businesses grow across Bangalore, in every neighbourhood
            </Heading>
            <p className="mt-4 text-lg leading-relaxed text-fj-ink/80">
              Because the work happens online, your area does not limit us. We help startups, shops,
              clinics, restaurants and service businesses in Koramangala, Indiranagar, HSR Layout,
              Whitefield, Electronic City, Jayanagar, JP Nagar and beyond. Whether you need to{' '}
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
              , get picked by{' '}
              <a href="/ai-seo" className="font-semibold text-[#B23E13] underline underline-offset-2">
                AI search
              </a>
              , or add{' '}
              <a
                href="/services/ai-agent-development"
                className="font-semibold text-[#B23E13] underline underline-offset-2"
              >
                chatbots and automation
              </a>
              , the same senior team handles it.{' '}
              You can also read our national guide to{' '}
              <a href="/digital-marketing" className="font-semibold text-[#B23E13] underline underline-offset-2">
                choosing a digital marketing agency in India
              </a>
              , so you can compare before you commit.
            </p>
          </div>
        </section>

        <TestimonialsSection
          eyebrow="REAL RESULTS"
          headline="What business owners say after working with us"
          region="in"
        />

        <FAQ
          eyebrow="QUESTIONS PEOPLE ACTUALLY ASK"
          headline="Digital marketing in Bangalore, answered in plain words"
          lead="Real questions from real Bangalore searches, answered simply, with no jargon and no sales spin."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        <FinalCTA
          variant="light"
          eyebrow="READY WHEN YOU ARE"
          headline="Want to see how many customers you are missing in Bangalore?"
          sub="Book a free, no-pressure chat. We will look at your website and where your Bangalore customers are, and tell you honestly what will bring you more enquiries, even if we never work together."
          primaryCta={{ label: 'Get My Free Growth Plan', modal: true, region: 'in' }}
          secondaryCta={{ label: 'Check if AI tools recommend you', href: '/ai-visibility-checker' }}
          objectionHandler="No jargon. No long contract. Just an honest plan you can use straight away."
        />
      </main>

      <SiteFooter locale="in" />
    </>
  );
}

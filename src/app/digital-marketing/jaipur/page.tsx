import type { Metadata } from 'next';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import LogoBar from '@/components/v2/LogoBar';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import IndustriesGrid, { type IndustryCard } from '@/components/v2/IndustriesGrid';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import CityContextSection from '@/components/v2/CityContextSection';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import Heading from '@/components/v2/Heading';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

const CANONICAL = 'https://factoryjet.com/digital-marketing/jaipur';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in Jaipur | SEO + Ads | FactoryJet',
  description:
    'Looking for a digital marketing agency in Jaipur? We help Rajasthan businesses get found on Google and AI search, and win real enquiries.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Digital Marketing Agency in Jaipur | SEO + Ads | FactoryJet',
    description:
      'One senior in-house team that gets Jaipur businesses found on Google and AI search, and turns visitors into enquiries. SEO, ads, websites, social and more.',
    url: CANONICAL,
    images: [
      {
        url: 'https://factoryjet.com/images/services/digital-marketing/jaipur/hero.webp',
        width: 832,
        height: 1216,
        alt: 'FactoryJet: Digital Marketing Agency in Jaipur',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency in Jaipur | FactoryJet',
    description:
      'Get found on Google and AI search, and turn Jaipur visitors into customers. One senior in-house team.',
    images: ['https://factoryjet.com/images/services/digital-marketing/jaipur/hero.webp'],
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
   Jaipur city page. Plain language, no pricing anywhere.

   Research basis (31 July 2026, pipeline/research/data/):
     - india_demand_full.csv: digital marketing agency in jaipur (4,400/mo KD 24), web development company jaipur (2,400/mo KD 31), seo company in jaipur (1,600/mo KD 33), best seo company jaipur (1,300/mo KD 23)
     - city5_paa.json: live People-Also-Ask for "digital marketing agency in jaipur".
     - city4_agencies.json: top-ranking agencies with their OWN meta descriptions,
       so every "best for" line reflects how each agency describes itself.
       Nothing about a named competitor is invented.
   ──────────────────────────────────────────────────────────────────────── */

const HERO_TRUST = [
  '500+ businesses helped',
  '12 years of experience',
  'One senior in-house team',
  'Found on Google and AI search',
];

/* Every figure below is fetch-verified against the cited source. Nothing here
   is estimated or rounded up by us. */
const MARKET_STATS = [
  {
    value: '25.4 crore',
    label:
      'tourists visited Rajasthan in 2025, up nearly 10 percent year on year, and Jaipur is the state’s front door. Almost every one of them chose where to stay and shop on a phone.',
    sourceUrl:
      'https://www.business-standard.com/industry/news/rajasthan-records-9-74-growth-in-domestic-tourist-arrivals-in-2025-126012600689_1.html',
    sourceLabel: 'Business Standard, Rajasthan Tourism data',
  },
  {
    value: '1.03 billion',
    label:
      'people in India now use the internet, about 70 in every 100 Indians. Your buyers are already searching before they ever call you.',
    sourceUrl:
      'https://datareportal.com/reports/digital-2026-india',
    sourceLabel: 'DataReportal Digital 2026',
  },
  {
    value: '100 million+',
    label:
      'weekly ChatGPT users are in India, its second-largest market after the US. More buyers now ask an AI tool who to pick before they contact anyone.',
    sourceUrl:
      'https://techcrunch.com/2026/02/15/india-has-100m-weekly-active-chatgpt-users-sam-altman-says/',
    sourceLabel: 'TechCrunch, Feb 2026',
  },
];

const STATS = [
  { value: '500+', label: 'Businesses helped', note: 'Across India, US, UK and UAE' },
  { value: '12 yrs', label: 'Years doing this', note: 'Not a new agency practising on you' },
  { value: 'In-house', label: 'Senior team', note: 'No work handed to freshers' },
  { value: '4', label: 'Countries served', note: 'India, US, UK and UAE' },
];

// Channel grid = the internal-link authority hub. Each card links into an
// existing FactoryJet service page so this Jaipur page passes authority down.
const CHANNELS: IndustryCard[] = [
  {
    name: 'SEO (get found on Google)',
    description:
      'SEO means search engine optimisation. In plain words: showing up on Google when a buyer searches for what you sell, without paying for every click.',
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
      'Ecommerce means selling online. For a Jaipur jewellery or block-print brand, that means a store buyers can order from directly instead of only through the trade.',
    linkLabel: 'See ecommerce',
    linkHref: '/services/ecommerce-development',
  },
  {
    name: 'AI search (get picked by ChatGPT)',
    description:
      'When a buyer asks ChatGPT, Gemini or Google’s AI "which supplier in Jaipur should I use", we help your business be one of the answers. This newer skill is called GEO.',
    linkLabel: 'Explore AI SEO',
    linkHref: '/ai-seo',
  },
  {
    name: 'Chatbots and automation',
    description:
      'Smart helpers that reply day and night. Useful when a buyer in another time zone messages your Jaipur office at 2am and nobody is there.',
    linkLabel: 'See AI agents',
    linkHref: '/services/ai-agent-development',
  },
  {
    name: 'WhatsApp for business',
    description:
      'A lot of Jaipur trade and booking enquiry runs on WhatsApp. We make it collect leads, send catalogues and follow up automatically instead of by hand.',
    linkLabel: 'See WhatsApp chatbot',
    linkHref: '/whatsapp-chatbot',
  },
  {
    name: 'Shopify stores',
    description:
      'Shopify is a popular tool for online shops. We build custom Shopify stores for Jaipur jewellery, textile and home brands that look great and load fast.',
    linkLabel: 'See Shopify',
    linkHref: '/shopify-development',
  },
  {
    name: 'WordPress websites',
    description:
      'WordPress is the world’s most-used website tool. We build flexible sites on it that you fully own and control, no lock-in.',
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
    feature: 'Understands textile and diamond trade buyers',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="ih" kind="yes" />,
    ],
  },
  {
    feature: 'Can sell to buyers outside Gujarat, not just locally',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="ih" kind="partial" />,
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
    feature: 'Sets up local Jaipur search (Google Maps and the local pack)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="ih" kind="partial" />,
    ],
  },
  {
    feature: 'Fast WhatsApp follow-up so no enquiry is missed',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="ih" kind="yes" />,
    ],
  },
  {
    feature: 'Explains the work in plain words, no jargon',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="ih" kind="yes" />,
    ],
  },
];

/* Named-competitor comparison. Every agency below currently ranks on Google
   for "digital marketing agency in surat" (checked 31 July 2026), and each
   "best for" line is written from that agency's OWN description of itself.
   We do not invent team sizes, client counts or specialisms. */
const AGENCIES = [
  {
    name: 'FactoryJet',
    bestFor:
      'Jaipur businesses that want one senior team across website, Google, ads and AI search, with plain-English monthly reports. (Yes, that is us. We include ourselves openly and let the comparison speak for itself.)',
    isUs: true,
  },
  {
    name: 'Advide Solutions',
    bestFor:
      'Businesses wanting a broad channel mix from one team. Their own listing covers SEO, Google Ads, social media marketing and web work.',
  },
  {
    name: 'The Cogent',
    bestFor:
      'Buyers who need development and video alongside marketing. They describe end-to-end digital marketing plus web and app development and video production.',
  },
  {
    name: 'The Digital Socialite',
    bestFor:
      'Companies that also care about reputation management. Their own description covers SEO, PPC, social media, web development and ORM, with around five years in the market.',
  },
  {
    name: 'AdsGrip',
    bestFor:
      'Businesses focused on return from paid channels. They position themselves around ROI-focused SEO, Google Ads and social media.',
  },
  {
    name: 'DigiRoket',
    bestFor:
      'Buyers wanting search, paid and web development handled together, which is how they describe their own service mix.',
  },
  {
    name: 'Betasaurus',
    bestFor:
      'Companies looking for an agency operating nationally from a Jaipur head office rather than a purely local team.',
  },
];

const JOURNEY: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'A free, no-pressure chat',
    description:
      'We learn about your business, who buys from you, and whether they are in Jaipur, elsewhere in India, or overseas. No jargon, no hard sell.',
  },
  {
    number: '02',
    title: 'A clear, simple plan',
    description: 'We show you exactly what we will do and why, in words you can understand and approve.',
  },
  {
    number: '03',
    title: 'We build and run it',
    description:
      'Website, Google, ads, WhatsApp, AI search, whatever you picked. Our senior team does the actual work.',
  },
  {
    number: '04',
    title: 'You see the results',
    description: 'A simple monthly report: visitors, enquiries and what we did. Real numbers, plainly shown.',
  },
  {
    number: '05',
    title: 'We keep improving',
    description: 'We do more of what brings you enquiries and drop what does not. Month after month.',
  },
];

const SECTORS: IndustryCard[] = [
  {
    name: 'Hotels, travel and hospitality',
    description:
      'Jaipur anchors Rajasthan’s tourism economy, and visitors plan almost everything before they arrive. That makes search and reviews decisive: appearing when someone in Delhi or London searches for where to stay, having photographs that do the property justice, and making booking work on a phone without friction.',
    example: 'Heritage hotels, boutique stays, tour operators and travel businesses.',
  },
  {
    name: 'Gems, jewellery and handicrafts',
    description:
      'Johari Bazaar and the Sitapura export belt sell to buyers well beyond Rajasthan, including overseas. These buyers are cautious and relationship-led, so the website’s job is credibility: certifications, real photography of actual pieces, and a way to open a conversation without a public price list.',
    example: 'Gem dealers, jewellery exporters and handicraft manufacturers selling nationally and abroad.',
  },
  {
    name: 'Education and coaching',
    description:
      'Jaipur draws students from across Rajasthan for competitive exam coaching, universities and professional courses. Admissions run on visible results, genuine reviews, and how fast someone replies when a parent enquires in the evening.',
    example: 'Coaching institutes, universities and training academies.',
  },
  {
    name: 'Healthcare and clinics',
    description:
      'The city is the referral centre for healthcare across much of Rajasthan, with patients travelling in from smaller towns. For clinics and specialists this is local search almost entirely: the map pack, reviews that read as real, and easy booking on a phone.',
    example: 'Hospitals, specialist clinics and diagnostic centres across C Scheme and Malviya Nagar.',
  },
  {
    name: 'Real estate and construction',
    description:
      'Jaipur keeps growing towards Mansarovar, Jagatpura and the ring road, and buyers compare projects online long before visiting. Fast project pages, honest photography and a lead form that reaches a human quickly beat glossy brochures nobody can find.',
    example: 'Developers, brokers and interior firms across the expanding suburbs.',
  },
  {
    name: 'D2C and lifestyle brands',
    description:
      'A generation of Jaipur founders is selling block-print textiles, jewellery and home goods straight to customers across India instead of through the trade. This is where paid ads, a fast store and honest measurement matter most, because the margin between a profitable brand and an expensive hobby is thin.',
    example: 'Textile, jewellery and home brands shipping nationwide.',
  },
];

const FAQ_CATEGORIES: FAQCategory[] = [
  { key: 'choosing', label: 'Choosing an agency' },
  { key: 'cost', label: 'Cost and contracts' },
  { key: 'local', label: 'Jaipur and local search' },
  { key: 'services', label: 'What we do' },
  { key: 'results', label: 'Results and reports' },
  { key: 'ai', label: 'AI and the future' },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'choosing',
    question: 'Which is the best digital marketing agency in Jaipur?',
    answer:
      'There is no single best agency for every Jaipur business. Two companies on the same street can need completely different plans depending on who buys from them. Further down this page we compare the agencies that actually rank in Jaipur, including ourselves, with an honest note on who each one suits. Pick the fit, not the loudest name.',
  },
  {
    category: 'choosing',
    question: 'Which agency is best for digital marketing?',
    answer:
      'The one whose usual client looks like you. An agency built for social media campaigns will not be strong at technical B2B search, and the reverse is also true. Ask any agency to name three clients in your line of work and show what happened. If they cannot, you are their experiment.',
  },
  {
    category: 'choosing',
    question: 'How do I choose a digital marketing agency in Jaipur?',
    answer:
      'Ask three questions before signing. One: who does the actual work, a senior person or a fresher? Two: what exactly do I get each month, in plain words? Three: can you show real results for a business like mine? An agency that answers all three clearly is usually safe. Vague answers to any one of them are the warning.',
  },
  {
    category: 'choosing',
    question: 'Should I hire a Jaipur agency or one from Mumbai or Delhi?',
    answer:
      'It depends on who buys from you. If your customers are in Jaipur, local knowledge and quick in-person meetings help. If you sell across India or export, what matters is skill, not postcode. Most of the work happens online either way, so judge the team and the reporting rather than the address.',
  },
  {
    category: 'choosing',
    question: 'What are the red flags of a bad agency?',
    answer:
      'Guaranteed number one rankings, refusing to give you access to your own Google and Analytics accounts, monthly reports full of charts but no enquiry numbers, and long contracts with heavy exit penalties. Any single one of these is a reason to slow down and ask harder questions.',
  },
  {
    category: 'cost',
    question: 'What is the cost of digital marketing in Jaipur?',
    answer:
      'It varies widely, and any agency quoting a firm number before understanding your business is guessing. What actually moves the figure is how many channels you run, how much ad budget sits on top of the fee, and whether senior people or trainees do the work. Ask for the fee and the ad spend to be written separately.',
  },
  {
    category: 'cost',
    question: 'How much does a digital marketing agency charge?',
    answer:
      'Most charge a monthly retainer, a percentage of ad spend, a per-project fee, or a mix. Watch the percentage model: it quietly rewards the agency for spending more of your money rather than spending it well. Ask which model you are on and what happens to the fee if you cut your ad budget.',
  },
  {
    category: 'cost',
    question: 'Do agencies lock you into long contracts?',
    answer:
      'Many do, often twelve months, and the lock-in usually protects the agency rather than you. We work month to month with 30 days notice. If the work is good you will stay because it is working, not because a clause says you must.',
  },
  {
    category: 'cost',
    question: 'Is digital marketing worth it for a small Jaipur business?',
    answer:
      'It is worth it when people already search for what you sell and you have nobody with the time or skill to capture them. It is not worth it if the product itself is unproven, because marketing only makes you lose money faster. Fix the offer first, then spend on reaching more people.',
  },
  {
    category: 'services',
    question: 'What does a digital marketing agency actually do?',
    answer:
      'In plain words: it helps more of the right people find your business and become customers. That usually means a website worth landing on, showing up on Google without paying for every click, running ads where they pay back, and making sure enquiries get answered fast. Everything else is detail.',
  },
  {
    category: 'services',
    question: 'What are the main types of digital marketing?',
    answer:
      'The ones that matter for most Jaipur businesses are search (SEO), paid ads on Google and Meta, social media, email and WhatsApp, content, and now AI search. You do not need all of them. You need the two or three where your buyers actually are.',
  },
  {
    category: 'services',
    question: 'Do I need SEO, ads, or social media first?',
    answer:
      'If you need enquiries this month, start with ads, because they turn on immediately. If you want cheaper enquiries in a year, start with SEO, because it compounds. Most businesses do best with a small mix: ads for now while search builds underneath.',
  },
  {
    category: 'services',
    question: 'Can you build the website too, or only run marketing?',
    answer:
      'Both. Marketing sending traffic to a slow or confusing website is the most common waste we see. We build the site and run the marketing, which means nobody gets to blame the other side when enquiries do not arrive.',
  },
  {
    category: 'services',
    question: 'Do you handle WhatsApp enquiries?',
    answer:
      'Yes, and in most Indian markets it is where the real conversation happens. We set up WhatsApp so it captures leads, sends catalogues automatically and follows up without someone typing every message by hand. For trade businesses this often recovers more enquiries than any new ad campaign.',
  },
  {
    category: 'results',
    question: 'How long does digital marketing take to show results?',
    answer:
      'Paid ads can bring enquiries within days. SEO usually takes three to six months before it moves meaningfully, and longer in competitive categories. Anyone promising fast SEO results is either overselling or planning something that will cost you later. We tell you which lever is which before you spend.',
  },
  {
    category: 'results',
    question: 'How will I know if it is working?',
    answer:
      'By enquiries, not impressions. Every month you get a short report showing how many people came, how many got in touch, and which channel they came from. If a channel is not producing after a fair run, we say so and move the budget rather than dressing it up.',
  },
  {
    category: 'results',
    question: 'Will I get access to my own accounts?',
    answer:
      'Yes, always, and in your name rather than ours. Your Google Ads, Analytics and Search Console accounts belong to you. Any agency that refuses this is making sure you cannot verify their numbers and cannot leave without starting over.',
  },
  {
    category: 'ai',
    question: 'Should my Jaipur business show up in ChatGPT and Google AI answers?',
    answer:
      'If your buyers ask an AI assistant for a recommendation before calling anyone, then yes. This is already normal for younger B2B buyers researching suppliers. Being the business the AI names is the newer version of ranking first, and most agencies are not doing anything about it yet.',
  },
  {
    category: 'ai',
    question: 'How is AI changing digital marketing?',
    answer:
      'It has taken over most of the production work: drafts, ad variations, routine reporting. What it has not taken over is judgement about which buyers matter and which numbers are worth acting on. The practical change for you is that search now has two front doors, Google and the AI assistants, and you need to be visible in both.',
  },
  {
    category: 'local',
    question: 'How is marketing a Jaipur business different from other cities?',
    answer:
      'Jaipur has three different markets overlapping: tourism, export trade, and ordinary local services. Each buys completely differently, and the most common mistake is running one plan across all three. Tourism is searched in advance and often from abroad, exports are researched slowly by a few serious buyers, and local services are decided in minutes on Google Maps.',
  },
  {
    category: 'local',
    question: 'How do I show up on Google Maps in Jaipur?',
    answer:
      'Claim and complete your Google Business Profile, pick the right category, add real photographs of your actual premises, and collect reviews steadily rather than in one burst. Keep your name, address and phone number identical everywhere. For a clinic, salon or restaurant this is usually the highest-return thing you can fix.',
  },
  {
    category: 'local',
    question: 'Do you work with businesses in C Scheme, Malviya Nagar and Vaishali Nagar?',
    answer:
      'Yes. Because the work happens online, your part of the city does not limit us. We work with businesses across C Scheme, Malviya Nagar, Vaishali Nagar, Mansarovar, Jagatpura, Tonk Road, Johari Bazaar and out towards the Sitapura industrial area.',
  },
  {
    category: 'local',
    question: 'Can you help us reach tourists and overseas buyers?',
    answer:
      'Yes, and they need different work. Reaching visitors means ranking and advertising where they plan the trip, often weeks ahead and from another country. Reaching overseas trade buyers means credibility, product documentation and being findable for the specific searches importers use, which are rarely the ones locals type.',
  },
  {
    category: 'choosing',
    question: 'Which is the best digital marketing institute in Jaipur?',
    answer:
      'We are an agency, not a training institute, so we cannot honestly rank courses. Many people searching this phrase want to learn digital marketing or find a job rather than hire a team. If you are looking to hire an agency to do the work for your business, the comparison further down this page is the useful part.',
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
  name: 'Digital Marketing Services in Jaipur',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet Technologies',
    url: 'https://factoryjet.com',
    telephone: '+919699977699',
    address: { '@type': 'PostalAddress', addressCountry: 'IN' },
  },
  areaServed: { '@type': 'City', name: 'Jaipur' },
  serviceType: 'Digital Marketing',
  description:
    'Integrated digital marketing for Jaipur businesses: SEO, paid ads, social media, websites, WhatsApp and AI search, handled by one senior in-house team.',
};

const agenciesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Digital marketing agencies in Jaipur, compared (July 2026)',
  numberOfItems: AGENCIES.length,
  itemListOrder: 'https://schema.org/ItemListUnordered',
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
  name: 'Digital Marketing Agency in Jaipur | FactoryJet',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
};

export default function JaipurDigitalMarketingPage() {
  return (
    <>
      <script
        id="jaipur-dm-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="jaipur-dm-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="jaipur-dm-agencies-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agenciesSchema) }}
      />
      <script
        id="jaipur-dm-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Digital Marketing', url: 'https://factoryjet.com/digital-marketing' },
          { name: 'Jaipur', url: CANONICAL },
        ]}
      />

      <SiteHeader locale="in" />

      <main className="bg-fj-cream">
        <Hero
          eyebrow="DIGITAL MARKETING AGENCY · JAIPUR"
          headline="A Digital Marketing Agency in Jaipur That Brings You Real Customers"
          lead="We help Jaipur businesses get found on Google and AI tools like ChatGPT, and turn visitors into real enquiries. One senior in-house team, plain-English reports, no jargon."
          formSlot={<HeroInlineForm region="in" source="in_jaipur_digital_marketing_hero" />}
          secondaryCta={{ label: 'Get a Free Growth Plan', modal: true as const, region: 'in' as const }}
          trustItems={HERO_TRUST}
          accent="orange"
          rightSlot={
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div aria-hidden className="absolute -right-3 -top-3 h-24 w-24 rounded-2xl bg-[#F05A28]/10" />
              <div aria-hidden className="absolute -bottom-4 -left-4 h-28 w-28 rounded-2xl bg-fj-ink/[0.04]" />
              <div className="relative overflow-hidden rounded-2xl border border-fj-neutral-200 shadow-sm">
                <img
                  src="/images/services/digital-marketing/jaipur/hero.webp"
                  alt="A professional working on a laptop in the evening"
                  width={832}
                  height={1216}
                  fetchPriority="high"
                  className="aspect-[3/4] w-full object-cover"
                />
                <div className="absolute bottom-3 left-3 rounded-xl bg-white/95 px-4 py-2.5 shadow-sm">
                  <p className="font-fj-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[#B23E13]">
                    Serving Jaipur and all of India
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
              So, which is the best digital marketing agency in Jaipur?
            </Heading>
            <p className="mt-4 text-lg leading-relaxed text-fj-ink/80">
              The honest answer: there is no single best agency for every Jaipur business. A heritage hotel filling rooms and a gems exporter selling to overseas buyers need almost opposite plans. For Jaipur businesses that want one senior team handling the website, Google, ads and AI search together, FactoryJet is a strong choice. Below we compare the agencies that actually rank in Jaipur, including ourselves, so you can decide for yourself.
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

        <ServiceExplanation
          eyebrow="WHAT WE DO, IN PLAIN WORDS"
          headline="What a digital marketing agency in Jaipur actually does for you"
          lead="Strip away the buzzwords and it comes down to one thing: helping more of the right people find your business and become customers."
          body={
            <>
              <p>
                Most Jaipur businesses do not have a marketing problem so much as a targeting problem. Three different markets overlap here: visitors planning a trip, trade buyers sourcing from outside the state, and residents choosing a local service. Running one plan across all three is how most budgets quietly disappear.
              </p>
              <p>
                That is what we fix. We work out which of those buyers is actually yours, then make sure you show up when they search, whether that happens on Google or inside ChatGPT. We make sure the page they land on loads fast and answers the question they actually had. And we make sure the enquiry reaches a human quickly.
              </p>
            </>
          }
        />

        <CityContextSection
          eyebrow="THE JAIPUR MARKET, IN REAL NUMBERS"
          headline="Jaipur sells to visitors, to India, and to the world, often all at once"
          leadParagraphs={[
            'Jaipur is unusual because three very different markets overlap in one city. There is the tourism economy, where hotels, tour operators and retailers compete for visitors who plan everything on a phone before arriving. There is the gems, jewellery and handicraft trade, which sells to buyers in Mumbai, Delhi and overseas. And there is an ordinary city economy of clinics, coaching, real estate and services serving four million residents.',
            'Each of those needs a different plan, and the mistake we see most often is running one plan for all three. Tourism demand is seasonal and searched in advance, often from outside India. Export trade is researched slowly by a small number of serious buyers. Local services are decided in minutes on Google Maps. Treating them the same wastes most of the budget.',
            'The upside is that Jaipur search competition is still moderate. Several commercially valuable searches here are winnable in months, and the city’s craft and jewellery businesses in particular are under-represented online relative to how good their products are.',
          ]}
          bodySlot={
            <>
              <div className="border-l-2 py-1 pl-5" style={{ borderLeftColor: '#F05A28' }}>
                <p
                  className="fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  Three markets share one city here. Running one marketing plan across all three is how most Jaipur budgets get wasted.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {['C Scheme', 'Malviya Nagar', 'Vaishali Nagar', 'Tonk Road', 'Johari Bazaar', 'Mansarovar', 'Sitapura', 'Jagatpura', 'Amer Road'].map(
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
          stats={MARKET_STATS}
        />

        <BigThreeTrustBlock />

        <IndustriesGrid
          variant="cards"
          eyebrow="JAIPUR × DIGITAL MARKETING"
          headline="Marketing built around how Jaipur actually earns"
          lead="The sectors that actually drive Jaipur. Each one buys differently, so each one needs a different plan."
          sectors={SECTORS}
        />

        <IndustriesGrid
          variant="cards"
          eyebrow="WHAT WE CAN RUN FOR YOU"
          headline="Every channel, handled by the same senior team"
          lead="You do not need all of these. You need the two or three where your buyers actually are, and we will tell you honestly which those are."
          sectors={CHANNELS}
        />

        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="Agency, freelancer, or your own team?"
          lead="All three can work. Here is an honest view of what each one is genuinely good at, so you can pick the right shape for your business rather than the one that was pitched hardest."
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
        />

        {/* Named-competitor comparison: the honest "who is best for what" listicle. */}
        <section className="bg-fj-cream px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#B23E13]">
              JAIPUR AGENCIES, COMPARED HONESTLY
            </p>
            <Heading as="h2" size="h2" className="text-fj-ink">
              Digital marketing agencies in Jaipur, and who each one suits
            </Heading>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fj-ink/80">
              Every agency below currently ranks on Google for digital marketing in Jaipur, checked on
              31 July 2026. Each description is written from how that agency describes itself, not
              from our opinion of them. We include ourselves and say so openly, because hiding it
              would be the opposite of honest.
            </p>

            <ol className="mt-10 space-y-4">
              {AGENCIES.map((a, i) => (
                <li
                  key={a.name}
                  className={`flex gap-4 rounded-2xl border p-5 md:p-6 ${
                    a.isUs ? 'border-[#F05A28]/40 bg-[#F05A28]/5' : 'border-fj-ink/10 bg-white'
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                      a.isUs ? 'bg-[#F05A28] text-white' : 'bg-fj-ink/5 text-fj-ink'
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
          </div>
        </section>

        <ServiceJourneyRow
          eyebrow="HOW WORKING WITH US GOES"
          headline="Five steps, no surprises"
          stages={JOURNEY}
        />

        <TestimonialsSection />

        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Common questions from Jaipur businesses"
          lead="The questions Jaipur business owners actually ask us, plus the ones they search for on Google, answered straight."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* Related links: keeps this page inside the India silo rather than orphaned. */}
        <section className="border-t border-fj-ink/10 bg-fj-cream px-6 py-10 md:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-base leading-relaxed text-fj-ink/75">
              We work well beyond Jaipur. See our{' '}
              <a
                href="/digital-marketing"
                className="font-semibold text-[#B23E13] underline underline-offset-2"
              >
                digital marketing agency services across India
              </a>{' '}
              and how the top agencies compare nationally, or read about{' '}
              <a href="/web-design/jaipur" className="font-semibold text-[#B23E13] underline underline-offset-2">
                web design in Jaipur
              </a>{' '}
              if the website is the piece holding you back.
              We also work in <a href="/digital-marketing/indore" className="font-semibold text-[#B23E13] underline underline-offset-2">Indore</a> or <a href="/digital-marketing/chandigarh" className="font-semibold text-[#B23E13] underline underline-offset-2">Chandigarh</a>.
            </p>
          </div>
        </section>

        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Let us find out what is actually costing you enquiries"
          sub="A free, no-pressure conversation. We will look at how you show up on Google and in AI answers today, tell you the two or three things worth fixing first, and be straight with you if marketing is not your real problem."
          primaryCta={{ label: 'Book a Free Growth Chat', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          objectionHandler="Month to month, 30 days notice. Senior people do the work. You own every account we set up."
        />
      </main>

      <SiteFooter locale="in" />
    </>
  );
}

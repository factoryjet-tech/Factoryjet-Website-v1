import type { Metadata } from 'next';
import Breadcrumbs from '@/components/v2/Breadcrumbs';

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

const CANONICAL = 'https://factoryjet.com/digital-marketing/lucknow';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in Lucknow | SEO, Ads | FactoryJet',
  description:
    'Digital marketing agency in Lucknow for clinics, coaching institutes, chikankari brands and builders. SEO, Google Ads, WhatsApp and AI search, one senior team.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Digital Marketing Agency in Lucknow | SEO, Ads | FactoryJet',
    description:
      'Digital marketing agency in Lucknow for clinics, coaching institutes, chikankari brands and builders. SEO, Google Ads, WhatsApp and AI search, one senior team.',
    url: CANONICAL,
    images: [
      {
        url: 'https://factoryjet.com/images/services/digital-marketing/lucknow/hero.webp',
        width: 832,
        height: 1216,
        alt: 'FactoryJet: Digital Marketing Agency in Lucknow',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency in Lucknow | FactoryJet',
    description:
      'Lucknow clinics, coaching centres, food brands and chikankari sellers: get found on Google, Maps and AI search, then answer every lead on WhatsApp.',
    images: ['https://factoryjet.com/images/services/digital-marketing/lucknow/hero.webp'],
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
   Lucknow city page. Plain language, no pricing anywhere.

   Research basis (31 July 2026, pipeline/research/data/):
     - india_demand_full.csv: digital marketing agency in lucknow (4,400/mo KD 18), seo company in lucknow (880/mo KD 0), web development company in lucknow (1,000/mo KD 3), best seo company lucknow (590/mo KD 0)
     - city5_paa.json: live People-Also-Ask for "digital marketing agency in lucknow".
     - city4_agencies.json: top-ranking agencies with their OWN meta descriptions,
       so every "best for" line reflects how each agency describes itself.
       Nothing about a named competitor is invented.
   Copy rewritten 7 Nov 2026 around Lucknow's own business mix (chikankari,
   Awadhi food, coaching, hospitals, Gomti Nagar real estate, state-capital
   suppliers) so it no longer mirrors the other city pages.
   ──────────────────────────────────────────────────────────────────────── */

const HERO_TRUST = [
  '500+ businesses helped',
  '12 years of experience',
  'Senior people on every account',
  'Visible on Google, Maps and AI answers',
];

/* Every figure below is fetch-verified against the cited source. Nothing here
   is estimated or rounded up by us. */
const MARKET_STATS = [
  {
    value: '4.37 million',
    label:
      'people live in the Lucknow metro area. Patients, students and shoppers from smaller UP towns add to that daily, and most of them search on a phone first.',
    sourceUrl:
      'https://www.macrotrends.net/global-metrics/cities/21318/lucknow/population',
    sourceLabel: 'MacroTrends, 2026 estimate',
  },
  {
    value: '1.03 billion',
    label:
      'Indians are online, roughly seven in ten. A parent picking a coaching centre in Aliganj or a family booking a kebab dinner in Aminabad checks Google before deciding.',
    sourceUrl:
      'https://datareportal.com/reports/digital-2026-india',
    sourceLabel: 'DataReportal Digital 2026',
  },
  {
    value: '100 million+',
    label:
      'Indians use ChatGPT every week, its biggest user base outside the US. Lucknow buyers now type "kaunsa hospital achha hai" or "best chikan kurta shop" into AI tools too.',
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
// existing FactoryJet service page so this Lucknow page passes authority down.
const CHANNELS: IndustryCard[] = [
  {
    name: 'SEO (rank on Google for free)',
    description:
      'Search engine optimisation gets your clinic, institute or shop onto page one for searches like "chikan suit wholesale Chowk" or "MRI centre Gomti Nagar". You pay for the work, never per click.',
    linkLabel: 'Explore SEO',
    linkHref: '/seo',
  },
  {
    name: 'Websites that sell',
    description:
      'A light site that opens fast on a budget Android phone, shows your fees, menu or project floor plans clearly, and puts a call and WhatsApp button on every screen.',
    linkLabel: 'See web design',
    linkHref: '/web-design',
  },
  {
    name: 'Online stores',
    description:
      'Chikankari kurtas, sarees and home linen sell to buyers in Bengaluru, Dubai and London who will never visit Chowk. Your own store lets them order from you instead of a reseller.',
    linkLabel: 'See ecommerce',
    linkHref: '/services/ecommerce-development',
  },
  {
    name: 'AI search (get named by ChatGPT)',
    description:
      'People now ask ChatGPT or Gemini to suggest a dentist in Indira Nagar or a NEET coaching centre in Lucknow. GEO is the work that gets your name into those answers.',
    linkLabel: 'Explore AI SEO',
    linkHref: '/ai-seo',
  },
  {
    name: 'Chatbots and automation',
    description:
      'An assistant that answers fee, timing and appointment questions after hours, so a parent asking about batches at 11pm gets a reply before they message the next institute.',
    linkLabel: 'See AI agents',
    linkHref: '/services/ai-agent-development',
  },
  {
    name: 'WhatsApp for business',
    description:
      'Lucknow buyers prefer to chat before they visit. We set WhatsApp to share catalogues, menus or brochures, log every lead, and send reminders without anyone typing by hand.',
    linkLabel: 'See WhatsApp chatbot',
    linkHref: '/whatsapp-chatbot',
  },
  {
    name: 'Shopify stores',
    description:
      'Shopify suits chikankari labels, attar sellers and packaged sweet or namkeen brands that ship across India. We set up payments, cash on delivery and courier links for you.',
    linkLabel: 'See Shopify',
    linkHref: '/shopify-development',
  },
  {
    name: 'WordPress websites',
    description:
      'For hospitals, schools, law chambers and builders who publish often, WordPress lets your own staff add notices, doctors or projects. The site and its login stay in your name.',
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
    feature: 'Person handling your account day to day',
    values: ['Experienced specialist', 'Usually a junior', 'A single generalist', 'Staff you recruit'],
  },
  {
    feature: 'Website, SEO, ads and WhatsApp under one roof',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="ih" kind="partial" />,
    ],
  },
  {
    feature: 'Monthly report that counts calls and walk-ins, not likes',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="ih" kind="partial" />,
    ],
  },
  {
    feature: 'Work on ChatGPT, Gemini and Google AI answers',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="no" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="ih" kind="partial" />,
    ],
  },
  {
    feature: 'Copy and keywords in Hindi and Hinglish as well as English',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="ih" kind="yes" />,
    ],
  },
  {
    feature: 'Can sell chikankari or packaged food beyond Uttar Pradesh',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="ih" kind="partial" />,
    ],
  },
  {
    feature: 'Month-to-month terms from day one',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="no" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="ih" kind="no" />,
    ],
  },
  {
    feature: 'Google Business Profile and map pack for each Lucknow branch',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="ih" kind="partial" />,
    ],
  },
  {
    feature: 'WhatsApp replies and reminders set up to run on their own',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="ih" kind="yes" />,
    ],
  },
  {
    feature: 'Talks to you in everyday language',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="ih" kind="yes" />,
    ],
  },
];

/* Named-competitor comparison. Every agency below currently ranks on Google
   for "digital marketing agency in lucknow" (checked 31 July 2026), and each
   "best for" line is written from that agency's OWN description of itself.
   We do not invent team sizes, client counts or specialisms. */
const AGENCIES = [
  {
    name: 'FactoryJet',
    bestFor:
      'Lucknow clinics, institutes, food brands, builders and craft sellers who want site, search, ads, WhatsApp and AI visibility run by one senior team and reported monthly in plain language. (This entry is us, listed openly.)',
    isUs: true,
  },
  {
    name: 'Digital Jugglers',
    bestFor:
      'Owners who want branding and marketing from a single unified team; that is how they present their Lucknow service.',
  },
  {
    name: 'Tantrash Technologies',
    bestFor:
      'Firms that need custom software as well as promotion, since they call themselves both a software developer and a marketing agency.',
  },
  {
    name: 'Digital Nawab',
    bestFor:
      'Advertisers focused on paid campaigns. They present themselves as a Google Partner handling SEO, Google Ads and Meta Ads.',
  },
  {
    name: 'Digital Marketing Robo',
    bestFor:
      'Clients who want to watch the work happen. Their own pitch opens with transparency and live progress reporting.',
  },
  {
    name: 'Pitch Pine Media',
    bestFor:
      'Buyers drawn to a local agency that sells itself on innovation and trust within Lucknow.',
  },
  {
    name: 'ArikaB2B',
    bestFor:
      'Shops and branches chasing nearby customers. Their stated focus is local SEO, Google Maps and location searches.',
  },
];

const JOURNEY: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Free first call',
    description:
      'Tell us what you sell and where your buyers sit: your own mohalla, the rest of UP, other states, or abroad. We listen before suggesting anything.',
  },
  {
    number: '02',
    title: 'Written plan',
    description: 'You get a short note naming the two or three channels we would start with, the reason for each, and what we need from you.',
  },
  {
    number: '03',
    title: 'Setup and launch',
    description:
      'We fix the website, Google profile, ads, WhatsApp flows or AI search work you approved. Senior specialists do it themselves.',
  },
  {
    number: '04',
    title: 'Monthly numbers',
    description: 'Each month: calls, forms, WhatsApp chats and store orders, with the source of each. One page, no padding.',
  },
  {
    number: '05',
    title: 'Shift the budget',
    description: 'Channels that produce leads get more money. Channels that stall get cut. We tell you which is which.',
  },
];

const SECTORS: IndustryCard[] = [
  {
    name: 'Hospitals, clinics and diagnostic labs',
    description:
      'Families from across UP travel to Lucknow for treatment, and most pick a doctor or lab by searching on a phone. Map pack placement, honest reviews and a booking button that works decide where they go.',
    example: 'Multispecialty hospitals, dental and IVF clinics, pathology labs and imaging centres.',
  },
  {
    name: 'Coaching institutes and schools',
    description:
      'Students arrive from all over the state for NEET, JEE, UPSC and state exam preparation. Parents compare results pages, read reviews and send enquiries late in the evening. The institute that answers first usually wins the seat.',
    example: 'Exam coaching centres in Aliganj and Kapoorthala, schools, and professional course providers.',
  },
  {
    name: 'Real estate in Gomti Nagar and Shaheed Path',
    description:
      'New projects keep going up in Gomti Nagar Extension, along Shaheed Path and on Sultanpur Road. Buyers shortlist online first. Clear project pages, RERA details and a quick callback beat a stack of printed flyers.',
    example: 'Builders, channel partners, interior designers and home loan advisers.',
  },
  {
    name: 'Chikankari and craft sellers',
    description:
      'Hand-embroidered chikan work from Chowk and Aminabad has buyers all over India and in the Gulf, UK and US. Most of them cannot visit. A well-photographed store and search visibility outside UP turn that demand into direct orders.',
    example: 'Chikankari labels, wholesalers moving to retail, and attar and craft brands.',
  },
  {
    name: 'Awadhi restaurants, kebabs and sweets',
    description:
      'Lucknow food is a brand in itself. Diners search "best kebab near me" or "biryani Aminabad" and pick from the top three map results. Current photos, a menu on Google and steady reviews fill tables and delivery orders.',
    example: 'Kebab and biryani houses, cafes, cloud kitchens and mithai and namkeen shops.',
  },
  {
    name: 'Government suppliers and professional firms',
    description:
      'As the state capital, Lucknow has many contractors, suppliers, law chambers and CA firms that serve government departments. Their buyers check credibility quietly. A clear website listing work done and registrations counts for more than social posts.',
    example: 'Contractors, equipment suppliers, advocates, chartered accountants and consultants.',
  },
];

const FAQ_CATEGORIES: FAQCategory[] = [
  { key: 'choosing', label: 'Choosing an agency' },
  { key: 'cost', label: 'Cost and contracts' },
  { key: 'local', label: 'Lucknow and local search' },
  { key: 'services', label: 'What we do' },
  { key: 'results', label: 'Results and reports' },
  { key: 'ai', label: 'AI and the future' },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'choosing',
    question: 'Which is the best digital marketing agency in Lucknow?',
    answer:
      'That depends on what you run. A diagnostic lab in Gomti Nagar needs map rankings and reviews. A chikankari label needs a store that sells in Mumbai and Dubai. Further down we list the agencies ranking in Lucknow today, ourselves included, with a line on who each one suits. Use it to shortlist by fit.',
  },
  {
    category: 'choosing',
    question: 'Which agency is best for digital marketing?',
    answer:
      'Pick the agency whose existing clients resemble your business. A team that mostly runs Instagram for cafes may struggle with a hospital or a government supplier. Ask for two or three examples from your sector and what changed for them. No examples means you would be the trial run.',
  },
  {
    category: 'choosing',
    question: 'How do I choose a digital marketing agency in Lucknow?',
    answer:
      'Before you sign, find out three things. Who exactly will handle your account? What will be delivered every month, written down? Have they grown a business like yours, and can you see it? Clear answers are a good sign. Hesitation on any of the three tells you to keep looking.',
  },
  {
    category: 'choosing',
    question: 'Should I hire a Lucknow agency or one from Mumbai or Delhi?',
    answer:
      'If your buyers are in Lucknow, an agency that knows Hazratganj from Alambagh and reads Hinglish searches well has an edge. If you ship chikankari nationwide or sell to other states, skill matters more than city. The work runs online in both cases, so compare the people and the reports.',
  },
  {
    category: 'choosing',
    question: 'What are the red flags of a bad agency?',
    answer:
      'Watch for promises of a guaranteed first position, Google and Analytics accounts held in the agency name, reports with graphs but no enquiry count, and twelve-month contracts with exit penalties. One of these is enough reason to pause.',
  },
  {
    category: 'cost',
    question: 'What is the cost of digital marketing in Lucknow?',
    answer:
      'The figure moves with three things: the number of channels, the ad budget you add on top, and the seniority of the people doing the work. Anyone quoting before they understand your business is guessing. Ask for the agency fee and the ad spend as two separate lines.',
  },
  {
    category: 'cost',
    question: 'How much does a digital marketing agency charge?',
    answer:
      'You will see four models: a fixed monthly fee, a cut of your ad spend, a one-off project price, or a mix. A cut of ad spend pays the agency more when you spend more, whether or not it works. Ask which model applies and how the fee changes if you lower your budget.',
  },
  {
    category: 'cost',
    question: 'Do agencies lock you into long contracts?',
    answer:
      'Many ask for a year upfront, which protects their income more than your results. We work month to month with 30 days notice. You keep paying only while the leads keep coming.',
  },
  {
    category: 'cost',
    question: 'Is digital marketing worth it for a small Lucknow business?',
    answer:
      'Yes, if customers already search for what you offer and nobody on your side has time to catch those searches. A sweet shop, a tuition centre or a dental clinic usually fits. If the product or service is still untested, fix that first, because ads only speed up whatever is already true.',
  },
  {
    category: 'services',
    question: 'What does a digital marketing agency actually do?',
    answer:
      'It gets the right buyers to find you and then contact you. For a Lucknow business that usually means a fast website, ranking on Google and Maps, ads only where they pay back, and WhatsApp replies that go out within minutes.',
  },
  {
    category: 'services',
    question: 'What are the main types of digital marketing?',
    answer:
      'SEO, Google and Meta ads, social media, email, WhatsApp, content, and now AI search. A coaching institute might need ads and WhatsApp. A hospital might need Maps and reviews. Pick the two or three channels your buyers use and skip the rest.',
  },
  {
    category: 'services',
    question: 'Do I need SEO, ads, or social media first?',
    answer:
      'Need enquiries this admission season or this festive sale? Start with ads, which switch on the same day. Want cheaper leads next year? Begin SEO now, because rankings build over months. A small ad budget running while SEO grows works for most Lucknow businesses.',
  },
  {
    category: 'services',
    question: 'Can you build the website too, or only run marketing?',
    answer:
      'We do both. Paying for ads that land on a slow, confusing site is the waste we see most often. When one team owns the site and the campaigns, there is nobody else to blame if leads drop, so problems get fixed faster.',
  },
  {
    category: 'services',
    question: 'Do you handle WhatsApp enquiries?',
    answer:
      'Yes. Most Lucknow customers would rather message than fill a form. We set up auto-replies with your catalogue, menu, fee list or brochure, tag every lead, and send follow-ups on a schedule. For many clinics and institutes this saves leads that used to go unanswered overnight.',
  },
  {
    category: 'results',
    question: 'How long does digital marketing take to show results?',
    answer:
      'Ads can bring calls in the first week. SEO normally needs three to six months, more in crowded categories like coaching or real estate. Be wary of anyone promising quick rankings. We tell you upfront which channel is the fast one and which is the slow one.',
  },
  {
    category: 'results',
    question: 'How will I know if it is working?',
    answer:
      'Count leads. Your monthly report shows visitors, calls, forms and WhatsApp chats, each tagged to its source. When a channel underperforms after a fair test, we say so and move that money elsewhere.',
  },
  {
    category: 'results',
    question: 'Will I get access to my own accounts?',
    answer:
      'Always. Google Ads, Analytics, Search Console and your Business Profile are set up under your name and email. An agency that keeps those in its own name is stopping you from checking its numbers or leaving cleanly.',
  },
  {
    category: 'ai',
    question: 'Should my Lucknow business show up in ChatGPT and Google AI answers?',
    answer:
      'Yes, if your buyers ask AI for suggestions. Students choosing a coaching centre and families comparing hospitals already do this. Getting named in that answer is the new top ranking, and very few Lucknow businesses are working on it yet.',
  },
  {
    category: 'ai',
    question: 'How is AI changing digital marketing?',
    answer:
      'AI now writes first drafts, ad variations and routine reports. Deciding which customers matter and which numbers to act on is still human work. For you the change is simple: people search in two places now, Google and AI assistants, and you need to appear in both.',
  },
  {
    category: 'local',
    question: 'How is marketing a Lucknow business different from other cities?',
    answer:
      'Many Lucknow searches are typed in Hindi or Hinglish, so keywords and page copy need to match how people actually phrase things. Competition online is also thinner than in Delhi or Mumbai for a city this size. And reputation still drives decisions here, so reviews and a solid website carry extra weight.',
  },
  {
    category: 'local',
    question: 'How do I show up on Google Maps in Lucknow?',
    answer:
      'Claim your Google Business Profile, choose the exact category, upload real photos of your shop or clinic, and ask happy customers for reviews every week. Use the same name, address and number on every listing. For a restaurant in Aminabad or a lab in Indira Nagar, this is often the cheapest fix with the biggest return.',
  },
  {
    category: 'local',
    question: 'Do you work with businesses in Gomti Nagar, Hazratganj and Aliganj?',
    answer:
      'Yes. The work is done online, so your location in the city makes no difference to us. We work with businesses in Gomti Nagar, Hazratganj, Aliganj, Indira Nagar, Alambagh, Chowk, Aminabad and out to Sushant Golf City and Amausi.',
  },
  {
    category: 'local',
    question: 'Can you help us sell outside Lucknow?',
    answer:
      'Yes. For chikankari labels, packaged food brands and consultancies, buyers outside the city are often the larger market. That means targeting searches made in Delhi, Bengaluru or abroad, and building a store and site that earn trust from someone who has never been to Lucknow.',
  },
  {
    category: 'choosing',
    question: 'Which is the best digital marketing institute in Lucknow?',
    answer:
      'We run marketing for businesses and do not teach courses, so we cannot rank institutes fairly. Many people typing this want to study or find a job. If you own a business and want the work done for you, the agency list on this page is the part to read.',
  },
];

/* ── Structured data (server-rendered in initial HTML, so AI crawlers read it) ── */

// Freshness signal. Benchmark: 56% of Google-AI-Overview-cited pages carry
// dateModified; these pages carried none. Keep this honest: bump it when the
// page's content actually changes, not on every unrelated deploy.
const PAGE_MODIFIED = '2026-11-07';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/digital-marketing/lucknow#webpage',
  url: 'https://factoryjet.com/digital-marketing/lucknow',
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
  name: 'Digital Marketing Services in Lucknow',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'City', name: 'Lucknow' },
  serviceType: 'Digital Marketing',
  description:
    'Search, Maps, ads, WhatsApp, websites and AI visibility for Lucknow clinics, institutes, food brands, builders and chikankari sellers, run by one senior team.',
};

const agenciesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Digital marketing agencies in Lucknow, compared (July 2026)',
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
  name: 'Digital Marketing Agency in Lucknow | FactoryJet',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
};

export default function LucknowDigitalMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="lucknow-dm-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="lucknow-dm-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="lucknow-dm-agencies-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agenciesSchema) }}
      />
      <script
        id="lucknow-dm-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Digital Marketing', url: 'https://factoryjet.com/digital-marketing' },
          { name: 'Lucknow', url: CANONICAL },
        ]}
      />

      <SiteHeader locale="in" />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Digital Marketing', url: 'https://factoryjet.com/digital-marketing' },
          { name: 'Lucknow', url: CANONICAL },
        ]} />
        <Hero
          eyebrow="DIGITAL MARKETING AGENCY · LUCKNOW"
          headline="A Digital Marketing Agency in Lucknow That Brings You Real Customers"
          lead="Clinics, coaching institutes, Awadhi food brands, builders and chikankari sellers in Lucknow use us to rank on Google and Maps, appear in AI answers, and reply to every WhatsApp lead fast. Senior specialists, Hindi and English, monthly numbers you can check."
          formSlot={<HeroInlineForm region="in" source="in_lucknow_digital_marketing_hero" />}
          secondaryCta={{ label: 'Get a Free Growth Plan', modal: true as const, region: 'in' as const }}
          trustItems={HERO_TRUST}
          accent="orange"
          rightSlot={
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div aria-hidden className="absolute -right-3 -top-3 h-24 w-24 rounded-2xl bg-[#F05A28]/10" />
              <div aria-hidden className="absolute -bottom-4 -left-4 h-28 w-28 rounded-2xl bg-fj-ink/[0.04]" />
              <div className="relative overflow-hidden rounded-2xl border border-fj-neutral-200 shadow-sm">
                <img
                  src="/images/services/digital-marketing/lucknow/hero.webp"
                  alt="A professional working on a laptop at a desk"
                  width={832}
                  height={1216}
                  fetchPriority="high"
                  className="aspect-[3/4] w-full object-cover"
                />
                <div className="absolute bottom-3 left-3 rounded-xl bg-white/95 px-4 py-2.5 shadow-sm">
                  <p className="font-fj-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[#B23E13]">
                    Working with Lucknow and all of UP
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
              So, which is the best digital marketing agency in Lucknow?
            </Heading>
            <p className="mt-4 text-lg leading-relaxed text-fj-ink/80">
              It depends on who your buyers are. An IVF clinic near Gomti Nagar wants local patients booking this week. A chikankari label in Chowk wants orders from Pune, Dubai and Toronto. Those are opposite plans. If you want one senior team running your website, Google, Maps, ads, WhatsApp and AI visibility together, FactoryJet fits. The list below covers the agencies ranking in Lucknow right now, us included, so you can compare.
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
          headline="What a digital marketing agency in Lucknow actually does for you"
          lead="Our job is narrow: when a Lucknow buyer looks for what you sell, they should find you, trust you and message you."
          body={
            <>
              <p>
                Plenty of good Lucknow businesses run on word of mouth and stay invisible online. The kebab house everyone in Aminabad knows may not appear when a visitor searches from a hotel in Hazratganj. The lab with the best reports may sit below a rival with more reviews.
              </p>
              <p>
                We close that gap in three moves. First, rank you on Google, Maps and AI assistants for the searches your buyers type, in English, Hindi or Hinglish. Second, give them a page that opens fast on a cheap phone and answers fees, timings or prices up front. Third, route every enquiry to WhatsApp or a phone that someone picks up.
              </p>
            </>
          }
        />

        <CityContextSection
          eyebrow="THE LUCKNOW MARKET, IN REAL NUMBERS"
          headline="A state capital with deep demand and thin online competition"
          leadParagraphs={[
            'Lucknow runs Uttar Pradesh. Government departments, the High Court bench, large hospitals, universities and coaching hubs all sit here, and people travel in from Barabanki, Sitapur, Rae Bareli and further for them. Add the chikankari trade, Awadhi food and a busy property market, and the metro holds well over four million people.',
            'Online, the city is under-served. Many commercial searches that would cost a fortune in Delhi still show thin, outdated results here. A well-built page for a clinic, an institute or a builder can climb in months.',
            'Language and trust shape the rest. A lot of searches are typed in Hindi or Hinglish, and buyers lean on reviews and referrals before they call. Match their words, collect real reviews, and answer quickly, and you will be ahead of most local rivals.',
          ]}
          bodySlot={
            <>
              <div className="border-l-2 py-1 pl-5" style={{ borderLeftColor: '#F05A28' }}>
                <p
                  className="fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  Big catchment, few serious competitors online, and buyers who search in their own words: Lucknow rewards the businesses that show up first.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Gomti Nagar', 'Hazratganj', 'Aliganj', 'Indira Nagar', 'Alambagh', 'Chowk', 'Amausi', 'Sushant Golf City', 'Charbagh'].map(
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

        <BigThreeTrustBlock
          description="Websites designed and built for businesses across India, the US, the UK and the UAE: Shopify stores, B2B companies, and DTC brands. Fixed, transparent pricing, your codebase delivered in full, and 7-day delivery."
        />

        <IndustriesGrid
          variant="cards"
          eyebrow="LUCKNOW × DIGITAL MARKETING"
          headline="Plans shaped around the trades Lucknow runs on"
          lead="Six kinds of Lucknow business, six different buying journeys. Here is what each one needs online."
          sectors={SECTORS}
        />

        <IndustriesGrid
          variant="cards"
          eyebrow="WHAT WE CAN RUN FOR YOU"
          headline="Every channel, handled by the same senior team"
          lead="Most Lucknow businesses need two or three of these, rarely all eight. On the first call we tell you which ones to skip."
          sectors={CHANNELS}
        />

        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="Agency, freelancer, or your own team?"
          lead="Each option has a place. A freelancer suits one small job, an in-house hire suits steady volume, an agency suits several channels at once. The table shows where each one holds up."
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
        />

        {/* Named-competitor comparison: the honest "who is best for what" listicle. */}
        <section className="bg-fj-cream px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#B23E13]">
              LUCKNOW AGENCIES, COMPARED HONESTLY
            </p>
            <Heading as="h2" size="h2" className="text-fj-ink">
              Digital marketing agencies in Lucknow, and who each one suits
            </Heading>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fj-ink/80">
              We checked who ranks on Google for Lucknow digital marketing searches on
              31 July 2026. Each line below paraphrases how that agency presents itself on its own
              site. FactoryJet is on the list too, marked clearly, so you know where we stand.
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
          headline="Common questions from Lucknow businesses"
          lead="What Lucknow owners ask us on calls, and what they type into Google before calling, with direct answers."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* Related links: keeps this page inside the India silo rather than orphaned. */}
        <section className="border-t border-fj-ink/10 bg-fj-cream px-6 py-10 md:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-base leading-relaxed text-fj-ink/75">
              Selling beyond Lucknow? Read about our{' '}
              <a
                href="/digital-marketing"
                className="font-semibold text-[#B23E13] underline underline-offset-2"
              >
                digital marketing agency services across India
              </a>{' '}
              and the national agency comparison, or plan{' '}
              <a href="/services/ecommerce-development/lucknow" className="font-semibold text-[#B23E13] underline underline-offset-2">
                an online store built for Lucknow
              </a>{' '}
              for your chikankari or food brand.
              We also work in <a href="/digital-marketing/noida" className="font-semibold text-[#B23E13] underline underline-offset-2">Noida</a> or <a href="/digital-marketing/delhi" className="font-semibold text-[#B23E13] underline underline-offset-2">Delhi</a>.
            </p>
          </div>
        </section>

        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Find out where your Lucknow enquiries are leaking"
          sub="Book a free call. We check how you appear on Google, Maps and AI answers today, name the two or three fixes worth doing first, and tell you plainly if marketing is not the real issue."
          primaryCta={{ label: 'Book a Free Growth Chat', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          objectionHandler="Month to month, 30 days notice. Senior people do the work. You own every account we set up."
        />
      </main>

      <SiteFooter locale="in" />
    </>
  );
}

import type { Metadata } from 'next';
import Breadcrumbs from '@/components/v2/Breadcrumbs';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import LogoBar from '@/components/v2/LogoBar';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import IndustriesGrid, { type IndustryCard } from '@/components/v2/IndustriesGrid';
import { type Pillar } from '@/components/v2/StrategicDarkSection';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import CityContextSection from '@/components/v2/CityContextSection';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import Heading from '@/components/v2/Heading';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

const CANONICAL = 'https://factoryjet.com/digital-marketing/kolkata';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in Kolkata: SEO, Ads | FactoryJet',
  description:
    'Digital marketing agency in Kolkata for tea, jute, wholesale, retail and IT firms. SEO, Google Ads, WhatsApp and AI search, run by one senior team.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Digital Marketing Agency in Kolkata: SEO, Ads | FactoryJet',
    description:
      'Digital marketing agency in Kolkata for tea, jute, wholesale, retail and IT firms. SEO, Google Ads, WhatsApp and AI search, run by one senior team.',
    url: CANONICAL,
    images: [
      {
        url: 'https://factoryjet.com/images/services/web-design.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet: Digital Marketing Agency in Kolkata',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency in Kolkata | FactoryJet',
    description:
      'SEO, Google Ads, WhatsApp and AI search for Kolkata traders, makers and service firms. One senior team.',
    images: ['https://factoryjet.com/images/services/web-design.webp'],
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
   Kolkata city page. Plain language, no pricing anywhere. Copy rewritten
   7 Nov 2026 around Kolkata's own business mix: tea trade and auctions, jute
   mills and exporters, Burrabazar wholesale, sweet shops, Bantala leather,
   engineering and steel traders, Sector V and New Town IT, private hospitals,
   and Durga Puja as the main seasonal buying window. Competitor list comes
   from public Kolkata agency listings and search research checked July 2026.
   ──────────────────────────────────────────────────────────────────────── */

const HERO_TRUST = [
  '500+ businesses helped',
  '12 years of experience',
  'Senior people on every account',
  'Visible in Google and ChatGPT answers',
];

const STATS = [
  { value: '500+', label: 'Businesses helped', note: 'Clients in India, US, UK and UAE' },
  { value: '12 yrs', label: 'In this work', note: 'A settled team with a long record' },
  { value: 'In-house', label: 'Senior people', note: 'Trainees do not run accounts' },
  { value: '4', label: 'Countries', note: 'Same team serves all four' },
];

// Channel grid = the internal-link authority hub. Each card links into an
// existing FactoryJet service page so this Kolkata page passes authority down.
const CHANNELS: IndustryCard[] = [
  {
    name: 'SEO (get found on Google)',
    description:
      'SEO is search engine optimisation. A Burrabazar wholesaler or a Salt Lake clinic shows up on Google for buyer searches, with no fee per click.',
    linkLabel: 'Explore SEO',
    linkHref: '/seo',
  },
  {
    name: 'Websites that sell',
    description:
      'Light pages that open fast on a phone in a crowded market lane, with a call button and an enquiry form placed where people look first.',
    linkLabel: 'See web design',
    linkHref: '/web-design',
  },
  {
    name: 'Online stores',
    description:
      'Ecommerce for Kolkata sellers of tea, sweets, sarees and leather bags, with stock, shipping and payments that your staff can manage.',
    linkLabel: 'See ecommerce',
    linkHref: '/services/ecommerce-development',
  },
  {
    name: 'AI search (get picked by ChatGPT)',
    description:
      'Buyers now type "good jute bag exporter in Kolkata" into ChatGPT or Gemini. GEO is the work that gets your firm named in that reply.',
    linkLabel: 'Explore AI SEO',
    linkHref: '/ai-seo',
  },
  {
    name: 'Chatbots and automation',
    description:
      'An assistant that answers stock, price-list and appointment questions after hours, so an enquiry sent at midnight still gets a reply.',
    linkLabel: 'See AI agents',
    linkHref: '/services/ai-agent-development',
  },
  {
    name: 'WhatsApp for business',
    description:
      'Kolkata trade already runs on WhatsApp. We set up catalogues, auto replies and lead capture there.',
    linkLabel: 'See WhatsApp chatbot',
    linkHref: '/whatsapp-chatbot',
  },
  {
    name: 'Shopify stores',
    description:
      'Shopify suits a mishti brand or a tea label selling across India. We build the store, connect couriers and keep pages quick to load.',
    linkLabel: 'See Shopify',
    linkHref: '/shopify-development',
  },
  {
    name: 'WordPress websites',
    description:
      'WordPress fits a hospital, a school or an engineering firm that publishes often. You keep full ownership of the site and its content.',
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
    feature: 'Person running your account day to day',
    values: [
      'Senior, in-house',
      'Often freshers',
      'One person',
      'You hire and train',
    ],
  },
  {
    feature: 'Search, ads, social and WhatsApp under one roof',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="ih" kind="partial" />,
    ],
  },
  {
    feature: 'Monthly numbers a busy owner can read in five minutes',
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
    feature: 'Knows how Kolkata buyers search',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="ih" kind="yes" />,
    ],
  },
  {
    feature: 'Short start, no year-long contract',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="no" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="ih" kind="no" />,
    ],
  },
  {
    feature: 'Google Maps listings for each Kolkata branch',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="ih" kind="partial" />,
    ],
  },
  {
    feature: 'Quick replies to WhatsApp leads',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="ih" kind="yes" />,
    ],
  },
  {
    feature: 'Talks in everyday words',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="ih" kind="yes" />,
    ],
  },
  {
    feature: 'Written plan signed off before work begins',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="ih" kind="partial" />,
    ],
  },
  {
    feature: 'Past work in a trade close to yours',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="yes" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="ih" kind="no" />,
    ],
  },
];

const PILLARS: Pillar[] = [
  {
    icon: '\u{1F9E9}',
    title: 'Channels that never talk to each other',
    body:
      'A sweet shop customer sees a Puja offer on Instagram, searches the shop name on Google, then sends a WhatsApp order. If those three are run by different people, the order gets lost. We run them as one chain.',
  },
  {
    icon: '\u{1F464}',
    title: 'The senior pitch, the junior delivery',
    body:
      'A partner sells you the plan, and a trainee runs it from week two. For a jute exporter or a hospital, that slip shows up as wasted ad spend and stale pages. At FactoryJet the people who plan the work also do it.',
  },
  {
    icon: '\u{1F916}',
    title: 'Missing from AI answers',
    body:
      'Buyers from outside Bengal ask ChatGPT for a tea supplier or a leather goods maker in Kolkata. Old keyword SEO does nothing for that question. We shape your pages so AI tools can quote you.',
  },
];

// Named-competitor comparison, built from public Kolkata agency listings and
// live search research checked July 2026 for "digital marketing agency in
// kolkata" and "seo agency in kolkata". Honest, positive, with open
// self-disclosure that FactoryJet is on the list.
const AGENCIES = [
  {
    name: 'FactoryJet',
    bestFor:
      'Kolkata traders, makers, clinics and service firms that want senior people on site, search, ads, WhatsApp and AI answers together, with a short monthly report. We wrote this list, so we put ourselves on it in plain view.',
    isUs: true,
  },
  {
    name: 'PromotEdge',
    bestFor: 'FMCG, healthcare and education brands around Salt Lake that want brand thinking joined to paid campaigns.',
  },
  {
    name: 'Webguru Infosystems',
    bestFor: 'Firms that want site builds, online stores and SEO from one older Kolkata company.',
  },
  {
    name: 'Indus Net TechShu',
    bestFor: 'Big companies after data-driven paid campaigns from a large firm with Google and Bing partner status.',
  },
  {
    name: 'Seven Boats',
    bestFor: 'Owners who want a Google Partner for SEO, social posts and content, plus training courses if staff need them.',
  },
  {
    name: 'Brandwizz Communications',
    bestFor: 'Brands where logo, packaging and creative design matter as much as the online campaigns.',
  },
  {
    name: 'Digital Rosogulla',
    bestFor: 'Small local firms that want a homegrown crew for social media, SEO and para-level campaigns.',
  },
];

const JOURNEY: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'A free first call',
    description: 'You tell us what you sell, who buys it and when your busy season falls. We listen and ask questions.',
  },
  {
    number: '02',
    title: 'A written plan',
    description: 'One page listing the channels we suggest, the order we start them in, and the reason for each.',
  },
  {
    number: '03',
    title: 'Senior people do the work',
    description: 'Site fixes, Google listings, ads, WhatsApp flows and AI search pages, done by the same people who planned them.',
  },
  {
    number: '04',
    title: 'Monthly numbers',
    description: 'Calls, forms, WhatsApp chats and orders, set against last month, with a note on what changed.',
  },
  {
    number: '05',
    title: 'Adjust and repeat',
    description: 'Budget moves to what produced enquiries. Weak channels get cut. Puja season gets planned weeks ahead.',
  },
];

// Kolkata market context. Every number below is real, current (July 2026), and
// linked to a source that resolves. These back the CityContextSection so the
// page earns trust with AI answer engines and human readers alike.
const MARKET_STATS = [
  {
    value: '1.03 billion',
    label:
      'internet users in India, roughly 70 of every 100 people. In Kolkata, from Gariahat shoppers to Sector V buyers, most check online first.',
    sourceUrl: 'https://datareportal.com/reports/digital-2026-india',
    sourceLabel: 'DataReportal Digital 2026',
  },
  {
    value: '100 million+',
    label:
      'Indians use ChatGPT every week, making India its second-biggest market after the US. Asking an AI for a supplier is now normal practice.',
    sourceUrl:
      'https://techcrunch.com/2026/02/15/india-has-100m-weekly-active-chatgpt-users-sam-altman-says/',
    sourceLabel: 'TechCrunch, Feb 2026',
  },
  {
    value: '5,240+',
    label:
      'DPIIT-recognised startups are registered in West Bengal, the largest count in eastern India. Each one is competing for the same Kolkata searches as you.',
    sourceUrl: 'https://inc42.com/lists/list-of-startups-in-west-bengal/',
    sourceLabel: 'Inc42 / DPIIT',
  },
];

// The honest "which channels actually bring enquiries" listicle. Ordered by how
// steadily each one brings leads for a typical Kolkata business, not by hype.
// Real high-volume Kolkata search terms are woven in naturally.
const CHANNELS_RANKED = [
  {
    name: 'Ranking on Google for buyer searches (SEO)',
    who: 'Nearly every Kolkata firm, from Burrabazar distributors to Sector V software houses.',
    body:
      'Search engine optimisation gets your pages onto Google for searches such as "jute bag manufacturer Kolkata" or "dentist in Salt Lake". You pay nothing per click. It takes a few months to build up, then it keeps sending enquiries. For a trader whose buyers search before they phone, this is the base of the plan.',
  },
  {
    name: 'Google Maps and the local pack (local SEO)',
    who: 'Sweet shops, clinics, restaurants, salons and showrooms people visit in person.',
    body:
      'Search "mishti near me" in Kolkata and Google shows three shops on a map before any website. Local SEO is the work that puts you in that box: a complete Google Business Profile, correct address and hours, photos and steady reviews. It brings footfall from people who are already nearby and ready to buy.',
  },
  {
    name: 'Google Ads when you need calls fast',
    who: 'New firms, and anyone heading into Durga Puja or the wedding season.',
    body:
      'Paid search puts you at the top of Google from the day the campaign starts. It stops when the budget stops. That makes it the right tool for a festive rush, a new branch opening or testing which product sells, while SEO grows underneath. This paid work is also called performance marketing.',
  },
  {
    name: 'Instagram, Facebook and LinkedIn',
    who: 'Sweet brands, saree and jewellery stores, cafes, and B2B firms building trust on LinkedIn.',
    body:
      'Social posts keep your name familiar until a buyer is ready. A Puja collection reel can do well for a boutique, and LinkedIn suits an engineering supplier. Social works slower than search for direct enquiries, so we run it beside Google instead of on its own.',
  },
  {
    name: 'WhatsApp replies and follow-up',
    who: 'Every Kolkata business that takes orders or bookings.',
    body:
      'Winning the enquiry counts for little if the reply comes the next day. A click-to-chat button, an auto reply, and a person who answers within the hour turn more chats into orders. Wholesale and retail buyers here expect it.',
  },
  {
    name: 'Being named by AI tools (ChatGPT, Gemini, Google AI)',
    who: 'Exporters, hospitals and B2B suppliers whose buyers research from other cities or abroad.',
    body:
      'A buyer in Delhi or Dubai may ask ChatGPT for a reliable tea or leather supplier in Kolkata. GEO, short for generative engine optimisation, shapes your pages so AI tools find clear facts to quote. Few Kolkata agencies work on it yet, so early movers have room.',
  },
];

const FAQ_CATEGORIES: FAQCategory[] = [
  { key: 'choosing', label: 'Choosing an agency' },
  { key: 'services', label: 'What we do' },
  { key: 'channels', label: 'Channels and tactics' },
  { key: 'seo', label: 'SEO in Kolkata' },
  { key: 'local', label: 'Kolkata and nearby' },
  { key: 'results', label: 'Results and reports' },
  { key: 'trust', label: 'Trust and safety' },
  { key: 'ai', label: 'AI and the future' },
];

// FAQ topics follow real "People Also Ask" and related-search queries for
// Kolkata (checked July 2026). Answers rewritten 7 Nov 2026 for Kolkata's
// own trades. Career and "how to earn" queries are left out (not buyer intent).
const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'choosing',
    question: 'Which is the best digital marketing agency in Kolkata?',
    answer:
      'That depends on who is asking. A tea exporter selling abroad, a Ballygunge boutique and a Sector V software firm each need a different kind of team. Further up this page we list well-known Kolkata agencies and what each suits, ourselves included, so you can match one to your trade.',
  },
  {
    category: 'choosing',
    question: 'Which agency is best for digital marketing?',
    answer:
      'Start with your goal. If you want Google rankings, look for SEO depth. If you need a festive sales spike, look for paid ads skill. Then check two more things: a senior person runs your account, and the reports show enquiries and sales, with likes left out.',
  },
  {
    category: 'choosing',
    question: 'Can I trust the "top 10 digital marketing agencies in Kolkata" lists?',
    answer:
      'Use them for names only. Many of those lists are paid spots or one writer’s taste. Pick three or four agencies, then ask each the same things: who handles my account, what do I receive every month, and can you show work for a firm in my trade. Their answers will sort the list for you.',
  },
  {
    category: 'choosing',
    question: 'How should I shortlist a digital marketing agency in Kolkata?',
    answer:
      'Ask for the name of the person who will do your work and meet them. Ask for a sample monthly report. Ask for one example from a similar business, say another wholesaler or another clinic. An agency that answers all three without dodging is worth a second meeting.',
  },
  {
    category: 'choosing',
    question: 'Is a digital marketing agency in Kolkata worth the money?',
    answer:
      'It pays off when the enquiries it brings are more than you would get alone, and you can trace each one to its source. Give it three to six months and judge it on calls, chats and orders. If the agency cannot show where leads came from, you have your answer.',
  },
  {
    category: 'choosing',
    question: 'Should I hire a freelancer, an agency or my own staff in Kolkata?',
    answer:
      'A freelancer suits one job, such as a logo or a single landing page. In-house staff give control, but hiring takes months and good people often move to bigger firms. An agency gives you SEO, ads, design and content skills from day one. Most growing Kolkata firms start with an agency and add staff later.',
  },
  {
    category: 'services',
    question: 'What does a digital marketing agency in Kolkata actually do?',
    answer:
      'It brings buyers to your business through online channels and helps turn them into orders. For a Kolkata firm that usually means a fast website, Google search and Maps listings, some paid ads, social posts, WhatsApp follow-up and, now, a presence in AI answers. Every task is measured against calls, chats and sales.',
  },
  {
    category: 'services',
    question: 'What are the 7 types of digital marketing?',
    answer:
      'They are usually listed as SEO for Google rankings, paid search and social ads, social media posts, content such as blogs and videos, email and WhatsApp messages, influencer tie-ups, and GEO for AI search. A sweet shop might use three of them. An exporter might use four different ones. No firm needs all seven at once.',
  },
  {
    category: 'services',
    question: 'Which channels bring the most enquiries for Kolkata businesses?',
    answer:
      'For most firms here it is Google search plus Google Maps, backed by a quick website and fast WhatsApp replies. Retail and food brands also get good results from Instagram around Durga Puja and Poila Baisakh. B2B suppliers do better with LinkedIn and AI search. We pick from your buyers’ habits, not from trends.',
  },
  {
    category: 'services',
    question: 'Do I need SEO, ads or social media first?',
    answer:
      'If the season is close, such as Puja or Diwali, begin with ads because they work the same week. If you want leads that keep coming without paying per click, begin SEO now. Many Kolkata firms run a small ad budget for a few months while SEO catches up.',
  },
  {
    category: 'services',
    question: 'How is digital marketing different from simply running ads?',
    answer:
      'Ads are one tool inside it. An ad shows your business while you pay and disappears when you stop. Digital marketing also covers your website, Google rankings, Maps, social and content, which keep working after the budget is spent. Think of ads as rented space and the rest as property you own.',
  },
  {
    category: 'seo',
    question: 'Which is the best SEO agency in Kolkata?',
    answer:
      'It varies by need. A Gariahat shop wants Google Maps work. A jute exporter wants rankings in other countries. A hospital chain needs SEO across many doctor and treatment pages. Choose the agency that gives you an honest timeline, explains its steps simply and never promises the top spot, because nobody controls Google.',
  },
  {
    category: 'seo',
    question: 'What does an SEO agency in Kolkata do day to day?',
    answer:
      'It checks your site for technical faults that stop Google reading it, writes pages for the words your buyers search, fills out your Google Business Profile, and earns links from respected sites. For a Kolkata trader, that might mean product pages for every jute or tea grade you sell. Done well, it brings free visits month after month.',
  },
  {
    category: 'seo',
    question: 'Should my SEO expert be based in Kolkata?',
    answer:
      'Location matters less than know-how. SEO is done online, so a good team can rank a Kolkata business from anywhere. What counts is knowing how people here search, including Bengali and Benglish terms, and setting up local listings correctly. Judge the expert on results and clear answers.',
  },
  {
    category: 'seo',
    question: 'Is a bigger SEO agency always better?',
    answer:
      'No. Large SEO firms are built around enterprise clients with huge sites, and a mid-size Kolkata firm can end up as a small line on their list. A smaller senior team usually gives your account more hours and more thought. Pick on attention and fit, not headcount.',
  },
  {
    category: 'local',
    question: 'Do you work only in Kolkata, or also in Howrah and Salt Lake?',
    answer:
      'We work with businesses across the Kolkata Metropolitan Area, including Howrah, Salt Lake, New Town, Dum Dum and the southern suburbs. All the work is online, so your location within the city makes no difference to the service you receive.',
  },
  {
    category: 'local',
    question: 'Do you cover Salt Lake, Sector V, New Town and central Kolkata?',
    answer:
      'Yes. We work with firms in Sector V, New Town (Rajarhat), Park Street, Camac Street, BBD Bagh, Burrabazar and Ballygunge. A BPO in New Town and a wholesaler in Burrabazar need different plans, so each one gets its own.',
  },
  {
    category: 'local',
    question: 'Can an agency outside Kolkata handle my marketing well?',
    answer:
      'Yes, since nearly all the work is online. The test is whether they understand your buyers, reply fast and set up local search properly. Knowing Kolkata habits, like the pre-Puja shopping rush and Bengali search terms, does save time. We work remotely with businesses in India, the US, the UK and the UAE.',
  },
  {
    category: 'local',
    question: 'Which types of Kolkata businesses do you help?',
    answer:
      'Tea traders and packers, jute goods makers and exporters, Burrabazar wholesalers, sweet shops and food brands, leather goods units, engineering and steel suppliers, IT and BPO firms in Sector V and New Town, private hospitals and clinics, schools and coaching centres, and saree and jewellery stores. If your buyers search or ask AI before they buy, we can help.',
  },
  {
    category: 'results',
    question: 'How long does digital marketing take to work in Kolkata?',
    answer:
      'Paid ads can bring calls within days. SEO usually needs three to six months, and longer in crowded fields such as hospitals or coaching. Social media needs a few months of steady posting. Plan festive campaigns at least a month before Durga Puja so the ads and pages are ready when demand peaks.',
  },
  {
    category: 'results',
    question: 'What will your monthly report show?',
    answer:
      'One short page: visits, calls, form fills, WhatsApp chats and orders, compared with last month, plus a list of what we did. Likes and impressions sit at the bottom because they do not pay bills. If enquiries are not rising over a few months, we say so and change the plan.',
  },
  {
    category: 'trust',
    question: 'Will seniors or trainees handle my account?',
    answer:
      'Ask every agency this before you sign. A common pattern is a senior pitch followed by junior delivery. At FactoryJet the senior people who plan your work carry it out, and you can speak to them directly.',
  },
  {
    category: 'trust',
    question: 'What warning signs suggest a poor digital marketing agency in Kolkata?',
    answer:
      'A promise of the number one spot on Google. A price that looks far too low for the work listed. Jargon in place of straight answers. No past work to show. A long lock-in before any result. One of these is a reason to slow down. Two is a reason to walk away.',
  },
  {
    category: 'ai',
    question: 'Should my Kolkata business appear in ChatGPT and Google AI answers?',
    answer:
      'If your buyers research before they buy, yes. Exporters, hospitals and B2B suppliers gain the most, because their buyers often ask AI tools for a shortlist. The work is called GEO, short for generative engine optimisation, and we include it alongside regular SEO.',
  },
  {
    category: 'ai',
    question: 'What are GEO and AEO, and does my business need them?',
    answer:
      'GEO helps AI tools such as ChatGPT and Gemini recommend you. AEO, answer engine optimisation, helps you win the short answer box at the top of Google and AI results. Both come down to clear, factual pages that a machine can quote. If you are unsure whether AI tools mention you now, our free checker will tell you.',
  },
  {
    category: 'choosing',
    question: 'Is a digital marketing company in Kolkata different from an agency?',
    answer:
      'In practice, no. People search both phrases and want the same thing: a team that brings them customers online. Some firms call themselves an agency to sound creative and others a company to sound larger. Compare them on who does the work and what they have delivered.',
  },
  {
    category: 'choosing',
    question: 'What are the big 4 companies in digital marketing, and does my Kolkata business need one?',
    answer:
      'The "big 4" usually means the global advertising holding groups that serve multinational brands. Their setup is built for very large budgets. A Kolkata trader or clinic would be a minor account there and would pay for layers of management it does not use. A focused senior team is the better fit for most local firms.',
  },
  {
    category: 'choosing',
    question: 'Are the top 5 marketing agencies right for a small Kolkata business?',
    answer:
      'Usually not. The famous names are geared to big brands with big budgets, and "top 5" lists are often opinion or paid. A small senior team will spend more time on your account. Shortlist a few, then compare them on who runs your work and what they have done for firms like yours.',
  },
  {
    category: 'services',
    question: 'Can a small Kolkata shop or startup benefit from digital marketing?',
    answer:
      'Yes, and small firms often move faster than large ones. A neighbourhood sweet shop with a complete Google listing and good reviews can outrank a bigger chain on "near me" searches. A New Town startup can reach buyers across India from day one. West Bengal has thousands of registered startups, so being easy to find matters.',
  },
  {
    category: 'services',
    question: 'Can you fix marketing that another Kolkata agency left in a mess?',
    answer:
      'Yes, we do it often. We audit the website, the Google accounts and the ad campaigns, keep what still works and repair the rest. You get a plain list of what was wrong and what we changed. Nothing gets thrown away without a reason.',
  },
  {
    category: 'channels',
    question: 'Do you offer social media marketing in Kolkata?',
    answer:
      'Yes, on Instagram, Facebook and LinkedIn. It suits sweet brands, boutiques, restaurants and clinics that sell on looks and trust, and LinkedIn suits B2B suppliers. Puja and wedding season content often does best. Because social builds slowly, we pair it with Google so you also catch buyers who are searching right now.',
  },
  {
    category: 'channels',
    question: 'Do you run Google Ads for Kolkata businesses, and how quickly do they work?',
    answer:
      'Yes. Paid search can bring calls on the first day. The trade-off is simple: when spending stops, the calls stop. We use ads for festive peaks, new launches and testing demand, and build SEO alongside so you are not paying for every visitor forever.',
  },
  {
    category: 'channels',
    question: 'What is performance marketing, and does my Kolkata business need it?',
    answer:
      'It is paid advertising judged only by results: calls, form fills, orders. Google and Meta show what each rupee returned, so weak ads get cut fast. It suits firms that want measurable enquiries soon. If your margins or season do not suit paid ads, we will tell you before you spend.',
  },
  {
    category: 'channels',
    question: 'How does local SEO get my Kolkata shop onto Google Maps?',
    answer:
      'We complete and verify your Google Business Profile, keep your name, address and phone number the same everywhere online, add real photos and opening hours, and help you collect honest reviews. Then your shop can appear in the map box when someone nearby searches. For a sweet shop, clinic or showroom, this is often the best-paying channel.',
  },
  {
    category: 'seo',
    question: 'Is an SEO company in Kolkata the same as an SEO agency?',
    answer:
      'Yes. Both phrases describe a team that helps you rank on Google. Some are built for local shops chasing Maps results, others for exporters or large sites with many pages. Pick the one that is honest about how long it takes and never guarantees first place.',
  },
  {
    category: 'seo',
    question: 'Do I need an SEO consultant in Kolkata or a full team?',
    answer:
      'A consultant is one expert who gives advice and direction. That works if your own staff can carry out the tasks. If you need the work done, from technical fixes to writing product pages and building local listings, a small senior team gets through far more each month than one person.',
  },
  {
    category: 'ai',
    question: 'How do I check if ChatGPT or Google AI mentions my Kolkata business?',
    answer:
      'Ask them. Type something like "best [your product or service] in Kolkata" into ChatGPT and Google, and see whether your name appears. If it does not, competitors are taking those buyers. Our free AI visibility checker gives you the same answer in more detail, before you commit to anything.',
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
  '@id': 'https://factoryjet.com/digital-marketing/kolkata#webpage',
  url: 'https://factoryjet.com/digital-marketing/kolkata',
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
  name: 'Digital Marketing Services in Kolkata',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'City', name: 'Kolkata' },
  serviceType: 'Digital Marketing',
  description:
    'Digital marketing for Kolkata traders, makers, hospitals and IT firms: SEO, Google Maps, paid ads, social, websites, WhatsApp and AI search from one senior team.',
};

const agenciesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Top digital marketing agencies in Kolkata (July 2026)',
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
  name: 'Digital Marketing Agency in Kolkata | FactoryJet',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
};

export default function KolkataDigitalMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="kolkata-dm-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="kolkata-dm-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="kolkata-dm-agencies-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agenciesSchema) }}
      />
      <script
        id="kolkata-dm-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Digital Marketing', url: 'https://factoryjet.com/digital-marketing' },
          { name: 'Kolkata', url: CANONICAL },
        ]}
      />

      <SiteHeader locale="in" />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Digital Marketing', url: 'https://factoryjet.com/digital-marketing' },
          { name: 'Kolkata', url: CANONICAL },
        ]} />
        <Hero
          eyebrow="DIGITAL MARKETING AGENCY · KOLKATA"
          headline="Digital Marketing Agency in Kolkata for Traders, Makers and Service Firms"
          lead="From Burrabazar wholesalers to Sector V software houses, we put Kolkata businesses on Google, Google Maps and ChatGPT answers, then turn those visits into calls and WhatsApp orders. Senior people do the work."
          formSlot={<HeroInlineForm region="in" source="in_kolkata_digital_marketing_hero" />}
          secondaryCta={{ label: 'Get a Free Growth Plan', modal: true as const, region: 'in' as const }}
          trustItems={HERO_TRUST}
          accent="orange"
          rightSlot={
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div aria-hidden className="absolute -right-3 -top-3 h-24 w-24 rounded-2xl bg-[#F05A28]/10" />
              <div aria-hidden className="absolute -bottom-4 -left-4 h-28 w-28 rounded-2xl bg-fj-ink/[0.04]" />
              <div className="relative overflow-hidden rounded-2xl border border-fj-neutral-200 shadow-sm">
                <img
                  src="/images/services/digital-marketing/kolkata/hero.webp"
                  alt="A digital marketing strategist planning a Kolkata campaign"
                  width={832}
                  height={1216}
                  fetchPriority="high"
                  className="aspect-[3/4] w-full object-cover"
                />
                <div className="absolute bottom-3 left-3 rounded-xl bg-white/95 px-4 py-2.5 shadow-sm">
                  <p className="font-fj-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[#B23E13]">
                    Kolkata, Howrah and beyond
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
              Which digital marketing agency in Kolkata fits my business?
            </Heading>
            <p className="mt-4 text-lg leading-relaxed text-fj-ink/80">
              It depends on your trade. A tea exporter, a sweet shop chain and a New Town IT firm each
              need a different mix of search, ads and social. Look hardest at who will run your account.
              If you want one senior team covering your site, Google, Maps, WhatsApp and AI answers,
              FactoryJet fits that brief. Further down we list other known Kolkata agencies and what
              each suits, with our own name included in plain view.
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
          headline="What our Kolkata digital marketing work covers"
          lead="Kolkata buyers compare on a phone before they ring. Our work puts your business in front of them at that moment and makes the next step easy."
          body={
            <>
              <p>
                A retailer in Gariahat checks Google Maps. A buyer for a jute exporter reads product
                pages and asks ChatGPT for a shortlist. A family choosing a hospital reads reviews
                late at night. Each of these is a moment where your business can be found, or missed.
              </p>
              <p>
                We cover the channels that matter for your trade: a quick website, Google rankings,
                Maps listings, paid ads for busy seasons, social posts, WhatsApp replies and AI search.
                Most Kolkata firms need three or four of these, and we say which ones you can skip.
              </p>
            </>
          }
          rightSlot={
            <div className="relative">
              <div aria-hidden className="absolute -bottom-4 -right-4 h-28 w-28 rounded-2xl bg-[#F05A28]/10" />
              <img
                src="/images/services/digital-marketing/kolkata/team.webp"
                alt="Marketers reviewing search and ad results for a Kolkata business"
                width={1216}
                height={832}
                loading="lazy"
                className="relative aspect-[3/2] w-full rounded-2xl border border-fj-neutral-200 object-cover shadow-sm"
              />
            </div>
          }
        />

        {/* Kolkata market context: real, cited numbers that build trust with
            both AI answer engines and human readers. Outbound links resolve. */}
        <CityContextSection
          eyebrow="HOW KOLKATA BUYS NOW"
          headline="Kolkata trades on tea, jute, wholesale and services, and its buyers search first"
          leadParagraphs={[
            'The city’s business mix is wide. Tea is still traded and auctioned here. Jute mills and exporters line the Hooghly. Burrabazar supplies shops across eastern India. Bantala makes leather goods, Sector V and New Town run IT and BPO work, and private hospitals draw patients from across the region.',
            'Each of those buyers now starts online. A wholesale buyer checks your listing, a patient’s family reads reviews, and an overseas importer asks an AI tool for names. Durga Puja compresses months of retail demand into a few weeks, so being visible before it starts decides who gets the orders.',
            'Many people here search in Bengali or in a mix of Bengali and English. Pages, ads and Google listings that match those words get found more often than ones written only in formal English.',
          ]}
          bodySlot={
            <>
              <div className="border-l-2 py-1 pl-5" style={{ borderLeftColor: '#F05A28' }}>
                <p
                  className="fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  Plan for Puja a month early. The search demand arrives before the crowds do.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Salt Lake', 'Sector V', 'New Town', 'Park Street', 'Camac Street', 'Ballygunge', 'Howrah', 'BBD Bagh'].map(
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

        {/* Light statement band: one-team promise, keyword-rich, no pricing. */}
        <BigThreeTrustBlock
          variant="statement"
          eyebrow="ONE TEAM, EVERY CHANNEL"
          headline="SEO, Google Ads, social media and AI search for Kolkata firms, from one senior team"
        />

        <IndustriesGrid
          variant="cards"
          eyebrow="SERVICES"
          headline="Services Kolkata businesses ask us for"
          lead="Pick the pieces your trade needs. Each card opens a page explaining how we handle that service."
          sectors={CHANNELS}
        />

        {/* Second ServiceExplanation: our actual method for Kolkata, alternating
            layout (card on the left) to break the rhythm. Light. */}
        <ServiceExplanation
          eyebrow="OUR APPROACH FOR KOLKATA"
          headline="Our method for a Kolkata business"
          lead="A Bowbazar jeweller and a Sector V software firm find buyers in different places. So the plan starts from your buyers and your season."
          reverseOnDesktop
          body={
            <>
              <p>
                Step one is mapping where your buyers look. Retail and food brands live on Maps and
                Instagram. Exporters and B2B suppliers live on Google search, LinkedIn and AI tools.
                Hospitals live on reviews and doctor pages.
              </p>
              <p>
                Step two is the build, done by senior staff: a site that opens quickly on mobile data,
                complete Google listings for each branch, and a
                WhatsApp reply flow so chats are answered within the hour.
              </p>
              <p>
                Step three is the monthly review. You see visits, calls, chats and orders against last
                month. Spend moves to whatever worked, and the festive calendar is planned in advance.
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
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  What you get each month
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100 px-7">
                {[
                  { t: 'A plan shaped by your trade', n: 'retail, wholesale, export or services' },
                  { t: 'Senior staff on the account', n: 'the planners do the work' },
                  { t: 'Google and Maps listings', n: 'one per Kolkata branch' },
                  { t: 'WhatsApp replies within the hour', n: 'so no enquiry goes cold' },
                  { t: 'Groundwork for AI answers', n: 'ChatGPT, Gemini and Google AI' },
                  { t: 'A one-page monthly report', n: 'calls, chats, orders, actions' },
                ].map((item) => (
                  <div key={item.t} className="flex items-start gap-3 py-3.5">
                    <span
                      className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
                      style={{ background: 'rgba(240,90,40,0.10)' }}
                      aria-hidden="true"
                    >
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2.5 6.2l2.2 2.2 4.8-5"
                          stroke="#B23E13"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <div>
                      <p className="font-fj-body text-[0.9375rem] font-semibold text-fj-ink">{item.t}</p>
                      <p className="font-fj-body text-[0.8125rem] text-fj-neutral-500">{item.n}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-7 py-5">
                <div className="mb-2 h-[3px] w-8 rounded-full" style={{ background: '#F05A28' }} aria-hidden="true" />
                <p
                  className="fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1rem', lineHeight: 1.3, letterSpacing: '-0.02em' }}
                >
                  Clear plan. Senior hands. Real counts.
                </p>
              </div>
            </div>
          }
        />

        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet, a traditional agency, a freelancer or in-house staff"
          lead="Each option suits a different Kolkata business. This table sets them side by side on the points owners ask about most."
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
        />

        {/* "Three reasons" rendered LIGHT (was StrategicDarkSection). Keeping this
            light means Testimonials stays the single dark section on the page. */}
        <section className="bg-fj-cream px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-5xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#B23E13]">
              WHERE KOLKATA CAMPAIGNS GO WRONG
            </p>
            <Heading as="h2" size="h2" className="text-fj-ink">
              Three common reasons Kolkata marketing stops bringing enquiries
            </Heading>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fj-ink/80">
              We see these three problems most often when owners bring us campaigns that went quiet.
              Each one has a fix.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {PILLARS.map((p) => (
                <div
                  key={p.title}
                  className="flex flex-col rounded-2xl border border-fj-ink/10 bg-white p-6 shadow-sm"
                >
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-2xl text-xl"
                    style={{ background: 'rgba(240,90,40,0.10)' }}
                    aria-hidden="true"
                  >
                    {p.icon}
                  </span>
                  <h3 className="mt-4 font-fj-display text-lg font-semibold text-fj-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-fj-ink/70">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mid-page quote CTA (light). Copy overridden to stay pricing-free. */}
        <FinalCTA
          variant="light"
          eyebrow="TALK TO US"
          headline="Ask for a written plan for your Kolkata business"
          sub="Share what you sell and when your busy season is. We will check where you appear on Google, Maps and AI tools today and send a one-page plan, free."
          primaryCta={{ label: 'Get my free growth plan', modal: true, region: 'in' }}
          secondaryCta={{ label: 'Check if AI tools recommend you', href: '/ai-visibility-checker' }}
        />

        {/* Ranked-channels listicle: which channels actually bring Kolkata
            businesses enquiries, informed by live Kolkata search demand. Light. */}
        <section className="bg-fj-cream px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#B23E13]">
              CHANNELS, RANKED
            </p>
            <Heading as="h2" size="h2" className="text-fj-ink">
              Six digital marketing channels for Kolkata, ranked by steady enquiries
            </Heading>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fj-ink/80">
              Agencies often sell every service at once. This list orders the six main digital
              marketing services in Kolkata by how reliably each produces enquiries for a typical
              local firm, with the trades each one suits.
            </p>

            <ol className="mt-10 space-y-4">
              {CHANNELS_RANKED.map((c, i) => (
                <li
                  key={c.name}
                  className="flex gap-4 rounded-2xl border border-fj-ink/10 bg-white p-5 md:p-6"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-fj-ink/5 text-sm font-bold text-fj-ink">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-fj-ink">{c.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-[#B23E13]">
                      Best for: <span className="font-normal text-fj-ink/75">{c.who}</span>
                    </p>
                    <p className="mt-2 leading-relaxed text-fj-ink/75">{c.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-6 text-sm leading-relaxed text-fj-ink/70">
              Few firms need all six. A shop usually needs Maps, WhatsApp and some Instagram. An
              exporter usually needs SEO, LinkedIn and AI search. We tell you which to drop.
            </p>
          </div>
        </section>

        {/* Named-competitor comparison: the honest "who is best for what" listicle. */}
        <section className="bg-fj-cream px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#B23E13]">
              KOLKATA AGENCIES SIDE BY SIDE
            </p>
            <Heading as="h2" size="h2" className="text-fj-ink">
              Known digital marketing agencies in Kolkata and the clients each suits
            </Heading>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fj-ink/80">
              This list comes from the agencies ranking on Google for Kolkata digital marketing and SEO
              searches in July 2026, plus their public work. FactoryJet appears first because we wrote
              the list, and we flag that clearly.
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
              Every firm on this list does real work for real clients. Each "best for" line is our
              reading of their public portfolio and Kolkata rankings. Meet two or three and choose the
              one whose strengths match your trade.
            </p>
          </div>
        </section>

        <ServiceJourneyRow
          eyebrow="WORKING TOGETHER"
          headline="Five steps from the first call to monthly results"
          lead="The same five steps apply whether you run one shop in Shyambazar or a hospital group."
          stages={JOURNEY}
          closingNote="FIVE STEPS · SENIOR STAFF · MONTHLY NUMBERS"
        />

        {/* Reach across Kolkata (plain language + safe internal links to hubs). */}
        <section className="border-y border-fj-ink/10 bg-white px-6 py-14 md:px-8 md:py-16">
          <div className="mx-auto max-w-3xl">
            <Heading as="h2" size="h3" className="text-fj-ink">
              Kolkata, Howrah, Salt Lake and the wider KMA
            </Heading>
            <p className="mt-4 text-lg leading-relaxed text-fj-ink/80">
              All of this work is done online, so we serve sweet shops in North Kolkata, wholesalers in
              Burrabazar, leather units near Bantala, IT firms in Sector V and New Town, and clinics in
              South Kolkata and Howrah the same way. If you want to{' '}
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
              , add a{' '}
              <a
                href="/services/ai-agent-development"
                className="font-semibold text-[#B23E13] underline underline-offset-2"
              >
                chatbot that never sleeps
              </a>
              , or get picked by{' '}
              <a href="/ai-seo" className="font-semibold text-[#B23E13] underline underline-offset-2">
                AI search
              </a>
              , one senior team takes care of it.{' '}
              For a wider view, see{' '}
              <a href="/digital-marketing" className="font-semibold text-[#B23E13] underline underline-offset-2">
                how the top agencies in India compare
              </a>
              , with us included openly.
            </p>
          </div>
        </section>

        <TestimonialsSection
          eyebrow="REAL RESULTS"
          headline="What business owners say after working with us"
          region="in"
        />

        <FAQ
          eyebrow="KOLKATA OWNERS ASK"
          headline="Kolkata digital marketing questions and straight answers"
          lead="These questions come from what people in Kolkata search on Google. Each answer is short and specific."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        <FinalCTA
          variant="light"
          eyebrow="READY WHEN YOU ARE"
          headline="Find out which Kolkata buyers are choosing a competitor"
          sub="Book a free call. We review your site, your Google and Maps listings and your AI visibility, then tell you the two or three changes most likely to bring more enquiries."
          primaryCta={{ label: 'Get My Free Growth Plan', modal: true, region: 'in' }}
          secondaryCta={{ label: 'Check if AI tools recommend you', href: '/ai-visibility-checker' }}
          objectionHandler="No jargon. No long contract. Just an honest plan you can use straight away."
        />
      </main>

      <SiteFooter locale="in" />
    </>
  );
}

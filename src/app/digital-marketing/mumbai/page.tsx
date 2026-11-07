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

const CANONICAL = 'https://factoryjet.com/digital-marketing/mumbai';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in Mumbai | SEO + AI | FactoryJet',
  description:
    'Digital marketing agency in Mumbai for SEO, Google Ads, social and AI search. One senior team that turns Mumbai searches into calls and WhatsApp enquiries.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Digital Marketing Agency in Mumbai | SEO + AI | FactoryJet',
    description:
      'Digital marketing agency in Mumbai for SEO, Google Ads, social and AI search. One senior team that turns Mumbai searches into calls and WhatsApp enquiries.',
    url: CANONICAL,
    images: [
      {
        url: 'https://factoryjet.com/images/services/web-design.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet: Digital Marketing Agency in Mumbai',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency in Mumbai | FactoryJet',
    description:
      'SEO, Google Ads, social and AI search for Mumbai firms, from BKC finance to Zaveri Bazaar jewellers. One senior team.',
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
   Mumbai city page. No pricing. Jargon is explained on first use. Copy is
   written around Mumbai's own business mix: BFSI around BKC and Nariman Point,
   film and media, D2C and fashion labels, real estate, Zaveri Bazaar jewellers
   and the diamond trade, textile wholesale, and port logistics near Nhava
   Sheva. Competitor and FAQ topics come from DataForSEO data pulled July 2026.
   ──────────────────────────────────────────────────────────────────────── */

const HERO_TRUST = [
  '500+ businesses helped',
  '12 years of experience',
  'Senior people on every Mumbai account',
  'Visible on Google, Maps and ChatGPT',
];

const STATS = [
  { value: '500+', label: 'Businesses helped', note: 'Across India, US, UK and UAE' },
  { value: '12 yrs', label: 'Years doing this', note: 'Not a new agency learning on your budget' },
  { value: 'In-house', label: 'Senior team', note: 'The person you meet runs your account' },
  { value: '4', label: 'Countries served', note: 'India, US, UK and UAE' },
];

// Channel grid doubles as the internal-link hub. Each card points to an
// existing FactoryJet service page so this Mumbai page passes authority down.
const CHANNELS: IndustryCard[] = [
  {
    name: 'SEO (get found on Google)',
    description:
      'Search engine optimisation puts your firm on page one when someone in Mumbai types "CA in Andheri" or "interior designer Powai". You stop paying per click once rankings hold.',
    linkLabel: 'Explore SEO',
    linkHref: '/seo',
  },
  {
    name: 'Websites that sell',
    description:
      'Most Mumbai visitors open your site on a phone between stations. We build pages that load before the train pulls out and push people to call or WhatsApp you.',
    linkLabel: 'See web design',
    linkHref: '/web-design',
  },
  {
    name: 'Online stores',
    description:
      'For fashion labels, home brands and food startups that ship from Mumbai: a store that checks out fast, takes UPI and keeps your packing list tidy.',
    linkLabel: 'See ecommerce',
    linkHref: '/services/ecommerce-development',
  },
  {
    name: 'AI search (get picked by ChatGPT)',
    description:
      'Buyers now ask ChatGPT and Gemini to shortlist a wealth advisor, a broker or a caterer in Mumbai. GEO is the work of getting your name into those shortlists.',
    linkLabel: 'Explore AI SEO',
    linkHref: '/ai-seo',
  },
  {
    name: 'Chatbots and automation',
    description:
      'An assistant that answers rate, stock and booking questions after hours, so a clinic in Chembur or a showroom in Malad keeps catching late enquiries.',
    linkLabel: 'See AI agents',
    linkHref: '/services/ai-agent-development',
  },
  {
    name: 'WhatsApp for business',
    description:
      'Mumbai deals start on WhatsApp. Auto-replies, catalogues and lead capture there mean a broker or wholesaler never misses a message in a busy hour.',
    linkLabel: 'See WhatsApp chatbot',
    linkHref: '/whatsapp-chatbot',
  },
  {
    name: 'Shopify stores',
    description:
      'Custom Shopify builds for Mumbai D2C labels in apparel, beauty and gourmet food, set up for COD checks, fast loading and clean product pages.',
    linkLabel: 'See Shopify',
    linkHref: '/shopify-development',
  },
  {
    name: 'WordPress websites',
    description:
      'Content-heavy sites for law firms, consultancies and real estate developers, on a platform your own staff can edit and that you keep full rights to.',
    linkLabel: 'See WordPress',
    linkHref: '/wordpress-development',
  },
];

const COMPARE_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Big network agency' },
  { label: 'Solo freelancer' },
  { label: 'Hiring in-house' },
] as const;

const COMPARE_ROWS = [
  {
    feature: 'Seniority of the person on your account',
    values: [
      'Experienced lead',
      'Junior executives',
      'Depends on the person',
      'Whoever you can hire',
    ],
  },
  {
    feature: 'SEO, ads, social and web under one roof',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="ih" kind="partial" />,
    ],
  },
  {
    feature: 'Monthly numbers a busy owner can read in two minutes',
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
    feature: 'Knows how Mumbai buyers search, area by area',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="ih" kind="yes" />,
    ],
  },
  {
    feature: 'Can begin within days, no year-long contract',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="no" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="ih" kind="no" />,
    ],
  },
  {
    feature: 'Google Business Profile and map pack for each branch',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="ih" kind="partial" />,
    ],
  },
  {
    feature: 'WhatsApp replies wired to every lead source',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="ih" kind="yes" />,
    ],
  },
  {
    feature: 'Talks in business terms instead of agency jargon',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="ih" kind="yes" />,
    ],
  },
  {
    feature: 'Written scope signed off before spending starts',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="ih" kind="partial" />,
    ],
  },
  {
    feature: 'Past work in a category close to yours',
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
    title: 'Channels run by separate vendors',
    body:
      'A Bandra boutique often has one freelancer on Instagram, another on Google Ads and nobody watching WhatsApp. The shopper who saw your reel and then searched your name lands nowhere useful. We run the channels as one funnel.',
  },
  {
    icon: '\u{1F464}',
    title: 'The pitch team disappears after signing',
    body:
      'In Mumbai, ad clicks in finance, property and healthcare are expensive. When a trainee learns on your account, each wasted month burns real budget. Our senior people stay on the work after the contract is signed.',
  },
  {
    icon: '\u{1F916}',
    title: 'No plan for AI answers',
    body:
      'People shortlisting a home loan advisor, a wedding caterer or a co-working space in Mumbai now ask ChatGPT first. If your site gives AI tools nothing clear to quote, a rival gets named instead. We write for Google and for AI answers together.',
  },
];

// Named agencies taken from DataForSEO ranking data for Mumbai digital
// marketing and SEO searches (July 2026). FactoryJet is listed openly.
const AGENCIES = [
  {
    name: 'FactoryJet',
    bestFor:
      'Mumbai owners who want one senior team for site, Google, ads and AI answers, and a short monthly report in plain English. We put ourselves on this list and say so.',
    isUs: true,
  },
  {
    name: 'DigiChefs',
    bestFor: 'Firms that want a single Mumbai partner splitting effort between organic rankings and paid campaigns.',
  },
  {
    name: 'Brandwitty',
    bestFor: 'Brands around Andheri building a following through social content backed by local search work.',
  },
  {
    name: 'Social Beat',
    bestFor: 'Large consumer brands running social and performance campaigns at high volume.',
  },
  {
    name: 'Techmagnate',
    bestFor: 'Companies with big sites whose priority is technical SEO over several years.',
  },
  {
    name: 'Infidigit',
    bestFor: 'Enterprises that prefer an agency doing SEO alone, with no other channels mixed in.',
  },
  {
    name: 'FruitBowl Digital',
    bestFor: 'Brands after broad digital work plus creative campaigns with a PR flavour.',
  },
];

const JOURNEY: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'A free first call',
    description: 'Tell us what you sell, which Mumbai areas you serve and where enquiries come from today.',
  },
  {
    number: '02',
    title: 'A written plan',
    description: 'You get the channels, the order we tackle them and the reason for each, on one page.',
  },
  {
    number: '03',
    title: 'Senior people do the work',
    description: 'Site fixes, Google, Maps, ads, AI answers: whatever the plan lists, built by experienced hands.',
  },
  {
    number: '04',
    title: 'A monthly scorecard',
    description: 'Calls, forms and WhatsApp leads, set beside the tasks we finished that month.',
  },
  {
    number: '05',
    title: 'Budget follows results',
    description: 'Spend shifts toward whatever produced enquiries last month. Weak channels get cut.',
  },
];

// Mumbai market context. Values, links and sources are unchanged from the
// July 2026 research; only the explanatory labels were rewritten.
const MARKET_STATS = [
  {
    value: '1.03 billion',
    label:
      'Indians are online, about 70 in every 100. A Mumbai buyer checking a jeweller, a clinic or a flat compares options on a phone first.',
    sourceUrl: 'https://datareportal.com/reports/digital-2026-india',
    sourceLabel: 'DataReportal Digital 2026',
  },
  {
    value: '100 million+',
    label:
      'people in India use ChatGPT each week, its second-biggest market after the US. Shortlists for Mumbai services now start inside AI chats.',
    sourceUrl:
      'https://techcrunch.com/2026/02/15/india-has-100m-weekly-active-chatgpt-users-sam-altman-says/',
    sourceLabel: 'TechCrunch, Feb 2026',
  },
  {
    value: '34,444',
    label:
      'DPIIT-recognised startups are registered in Maharashtra, the most of any state. Every one of them is bidding for the same Mumbai attention you want.',
    sourceUrl: 'https://inc42.com/buzz/india-home-to-nearly-2-lakh-dpiit-recognised-startups/',
    sourceLabel: 'Inc42 / DPIIT, Oct 2025',
  },
];

// Channels ranked by how steadily each one produces enquiries for a typical
// Mumbai business. Order reflects lead flow, with search terms used naturally.
const CHANNELS_RANKED = [
  {
    name: 'Showing up on Google when people search to buy (SEO)',
    who: 'Nearly every Mumbai firm, from a Fort law chamber to a Thane coaching class.',
    body:
      'Searches like "chartered accountant Andheri East" or "wholesale sarees Kalbadevi" come from people ready to act. SEO earns you a place on that results page without a fee per click. Expect three to six months before it pays back, then enquiries keep arriving while you sleep. Over a year, no other channel gives most Mumbai owners as many leads.',
  },
  {
    name: 'Local search and Google Maps (local SEO)',
    who: 'Showrooms, clinics, salons, cafes and any counter a customer walks up to.',
    body:
      'Type "dentist near me" in Dadar and Google shows three businesses on a map before anything else. Those three slots drive most of the calls. We set up your Google Business Profile, fix the address and phone details across directories, and help you collect reviews, branch by branch if you have several outlets.',
  },
  {
    name: 'Google Ads for quick enquiries',
    who: 'New launches, seasonal offers and anyone who needs calls before month end.',
    body:
      'Paid search shows you at the top the day the campaign goes live and stops when the budget does. In Mumbai, categories like home loans, property and IVF carry steep clicks, so tight keywords and negative terms matter. We use ads to learn which offers convert while organic rankings grow. Agencies call this performance marketing.',
  },
  {
    name: 'Social media marketing (Instagram, Facebook, LinkedIn)',
    who: 'Fashion and beauty labels, restaurants, event venues and B2B firms selling on reputation.',
    body:
      'Instagram sells looks and LinkedIn sells credibility to the BKC crowd. Reels, offers and replies to DMs keep your name familiar until the buyer is ready. Social is slower than search at producing enquiries, so we tie every campaign to a landing page, a Google listing or a WhatsApp chat.',
  },
  {
    name: 'WhatsApp follow-up',
    who: 'Any Mumbai business, because buyers here expect a reply on WhatsApp first.',
    body:
      'A lead who waits until tomorrow has usually messaged three competitors. Click-to-chat buttons, instant replies with a catalogue, and a named person following up within the hour win far more of those conversations. For brokers and wholesalers, faster replies can matter as much as a bigger ad budget.',
  },
  {
    name: 'Getting picked by AI search (ChatGPT, Gemini, Google AI)',
    who: 'Mumbai firms whose buyers research before they call: finance, health, property, B2B.',
    body:
      'Ask ChatGPT for "a good wealth management firm in South Mumbai" and it names a handful of businesses. Being on that list depends on clear, quotable facts on your site and mentions elsewhere on the web. The discipline is called GEO, generative engine optimisation, and few local agencies offer it yet. We include it from month one.',
  },
];

const FAQ_CATEGORIES: FAQCategory[] = [
  { key: 'choosing', label: 'Choosing an agency' },
  { key: 'services', label: 'What we do' },
  { key: 'channels', label: 'Channels and tactics' },
  { key: 'seo', label: 'SEO in Mumbai' },
  { key: 'local', label: 'Mumbai and nearby' },
  { key: 'results', label: 'Results and reports' },
  { key: 'trust', label: 'Trust and safety' },
  { key: 'ai', label: 'AI and the future' },
];

// FAQ topics come from People Also Ask and related searches for Mumbai
// (DataForSEO, July 2026). Career and "how to earn" queries were left out.
const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'choosing',
    question: 'Which is the best digital marketing agency in Mumbai?',
    answer:
      'It depends on who you are. A listed NBFC in BKC, a jewellery house in Zaveri Bazaar and a cafe in Bandra want different things from an agency. Match the agency to your size, your category and the person who will run your account. Further down we compare well-known Mumbai agencies, FactoryJet included, so you can judge fit for yourself.',
  },
  {
    category: 'choosing',
    question: 'Which kind of agency is best for digital marketing?',
    answer:
      'Start with your goal. If you need walk-ins, pick a team strong in local search. If you sell online, pick one that has run ecommerce ads and stores. If buyers research for weeks, as in finance or B2B, pick one that writes well and works on AI answers. Then check that a senior person handles your work and that reports show enquiries.',
  },
  {
    category: 'choosing',
    question: 'Can I trust the "top 10 digital marketing agencies in Mumbai" lists?',
    answer:
      'Use them for names and little else. Many of those lists are sponsored, and some are written by an agency ranking itself first. Take three or four names, ask each for a sample monthly report, ask who will handle your account, and ask for an example from your own category. Their answers tell you more than the ranking.',
  },
  {
    category: 'choosing',
    question: 'How should I choose a digital marketing agency in Mumbai?',
    answer:
      'Meet two or three, then compare on facts. Who runs the account each week, and how long have they done this? What will you receive every month, item by item? What have they done for a business close to yours, say another clinic, broker or D2C label? Pick the one whose answers you could repeat to your partner without notes.',
  },
  {
    category: 'choosing',
    question: 'Is hiring a digital marketing agency in Mumbai worth the money?',
    answer:
      'It pays when the extra enquiries are worth more than the fee and you can trace where each one came from. Give it three to six months, since SEO and content need time. If the agency cannot show calls, forms or WhatsApp leads by source after that, the spend is not working and you should change course.',
  },
  {
    category: 'choosing',
    question: 'Should a Mumbai business hire an agency, a freelancer or its own team?',
    answer:
      'A freelancer suits one job, such as a logo refresh or a few blog posts. An in-house team gives control, but hiring and keeping good marketers in Mumbai is slow and costly, and you still need SEO, ads, design and analytics skills together. An agency brings all those skills from week one. Many owners start with an agency and hire in-house once the playbook is proven.',
  },
  {
    category: 'services',
    question: 'What does a digital marketing agency in Mumbai do day to day?',
    answer:
      'It makes sure buyers searching for what you sell find you and contact you. In practice that means fixing the website, working on Google rankings (SEO), running Google and Meta ads, posting on social, building WhatsApp and email follow-up, and now making your business quotable for AI tools. Each task is judged by one thing: did it produce calls, forms or chats.',
  },
  {
    category: 'services',
    question: 'What are the 7 types of digital marketing?',
    answer:
      'The usual list is: SEO for free Google traffic, paid search and social ads, social media content, content marketing such as guides and videos, email and WhatsApp marketing, influencer and creator tie-ups, and GEO for AI tools like ChatGPT. A textile wholesaler and a skincare brand would pick different ones. Most Mumbai businesses do well with three or four, run properly.',
  },
  {
    category: 'services',
    question: 'Which channels bring Mumbai businesses the most enquiries?',
    answer:
      'For service firms, clinics and showrooms, Google search and Maps usually lead, followed by fast WhatsApp replies. D2C and fashion labels get more from Instagram and Meta ads feeding a quick store. B2B and finance firms tend to win on LinkedIn, long-form content and AI answers. We look at your past enquiries before recommending anything.',
  },
  {
    category: 'services',
    question: 'Should I start with SEO, ads or social media?',
    answer:
      'Need calls this month? Start with Google Ads. Want enquiries that keep coming without paying per click? Start SEO now, because it takes months. Selling a product people buy on looks? Add Instagram. A sensible pattern for many Mumbai businesses is to run ads for the first few months and lower ad spend as organic rankings take over.',
  },
  {
    category: 'services',
    question: 'How is digital marketing different from simply running ads?',
    answer:
      'Ads rent you a spot at the top of Google or Instagram, and the spot vanishes when spending stops. Digital marketing adds the assets that keep working: a site that converts, rankings you earn, reviews on Maps, content that AI tools quote, and a WhatsApp process that closes leads. Ads work best as one part of that system.',
  },
  {
    category: 'seo',
    question: 'Which is the best SEO agency in Mumbai?',
    answer:
      'The right SEO partner for a Ghatkopar clinic is different from the right one for a bank with a huge website. Look for clear timelines, a written list of what they will fix, and monthly proof in rankings and enquiries. Walk away from anyone promising the number one spot by a date, because no one controls Google.',
  },
  {
    category: 'seo',
    question: 'What does an SEO agency in Mumbai do for my business?',
    answer:
      'Four things. It fixes technical issues so Google can crawl and load your site quickly. It writes pages that match what Mumbai buyers type, such as service plus area. It sets up your Google Business Profile for map results. And it earns links and mentions from trusted sites. Together these bring unpaid visitors every month.',
  },
  {
    category: 'seo',
    question: 'Does my SEO expert need to sit in Mumbai?',
    answer:
      'No. Rankings depend on your site and your listings, and that work is done online. What matters is that the team knows Mumbai search habits, such as people adding the suburb or station name to a query, and searching in Hinglish. Judge an SEO expert on results for similar businesses and how plainly they explain the plan.',
  },
  {
    category: 'seo',
    question: 'Is a bigger SEO agency always better?',
    answer:
      'Not for most Mumbai businesses. Large SEO firms are set up for enterprise sites with thousands of pages, and a mid-size account can end up with a junior executive. A smaller senior team usually spends more time on your site. Choose on attention and track record in your category, and treat headcount as a side detail.',
  },
  {
    category: 'local',
    question: 'Do you work only in Mumbai city, or also in Navi Mumbai and Thane?',
    answer:
      'We work across the whole MMR: South Mumbai, the western and central suburbs, Navi Mumbai, Thane, and further out to Kalyan, Vasai and Panvel. The work is done online, so location inside the region makes no difference to the team you get. We do set up local search for each area you actually serve.',
  },
  {
    category: 'local',
    question: 'Do you work with firms in Andheri, BKC and Lower Parel?',
    answer:
      'Yes. We work with businesses in Andheri, BKC, Lower Parel, Powai, Malad and South Mumbai, among other areas. A Lower Parel media agency and an Andheri SEEPZ exporter need different keywords and channels, so the plan is written for your area and your buyer, with no shared template.',
  },
  {
    category: 'local',
    question: 'Must I hire an agency based in Mumbai, or can an outside team do it?',
    answer:
      'An outside team can do it well, since campaigns, sites and listings are all managed online. Check for three things instead of an address: quick replies, real understanding of Mumbai buyers, and proper local search setup. We work with clients across India, the US, the UK and the UAE, all remotely.',
  },
  {
    category: 'local',
    question: 'What kinds of Mumbai businesses do you work with?',
    answer:
      'Finance and insurance advisors, real estate developers and brokers, jewellers and diamond traders, textile and garment wholesalers, logistics and freight firms, clinics and diagnostic centres, restaurants and caterers, coaching institutes, and D2C labels in fashion, beauty and food. If your buyers search, scroll or ask AI tools before they buy, the same methods apply.',
  },
  {
    category: 'results',
    question: 'How long until digital marketing shows results in a crowded market like Mumbai?',
    answer:
      'Paid ads can produce enquiries in the first week. SEO usually needs three to six months, and longer in crowded Mumbai categories such as property, finance and healthcare. Social and content build trust over a few months. Be wary of any promise of large results within days.',
  },
  {
    category: 'results',
    question: 'What will your monthly report show, and how is success judged?',
    answer:
      'One page each month: visits, calls, form fills and WhatsApp leads by source, and the work we completed. Followers and impressions appear only when they explain a lead trend. Success means more qualified enquiries and sales over time. If those numbers stay flat, we say so and change the plan.',
  },
  {
    category: 'trust',
    question: 'Will seniors or freshers handle my account?',
    answer:
      'Ask every agency this before signing. A common pattern is a senior pitch followed by a fresher running the account, and in Mumbai, with costly clicks, that learning curve costs you money. At FactoryJet, the experienced people you speak to are the people who do the work.',
  },
  {
    category: 'trust',
    question: 'What warning signs suggest a bad digital marketing agency in Mumbai?',
    answer:
      'A guaranteed number one ranking. A price far below every other quote. Answers full of jargon and no specifics. No examples you can verify. A long lock-in before any results. Seeing even one of these is a reason to slow down and ask harder questions.',
  },
  {
    category: 'ai',
    question: 'Should my Mumbai business appear in ChatGPT and Google AI answers?',
    answer:
      'If your buyers research before calling, yes. People already ask ChatGPT, Gemini and Google AI Mode to recommend a CA, a wedding planner or a property consultant in Mumbai. Appearing in those replies is called GEO, generative engine optimisation. Few agencies do it yet, so early movers have room. It sits inside our standard work.',
  },
  {
    category: 'ai',
    question: 'What do GEO and AEO mean, and do I need them?',
    answer:
      'GEO is work that gets AI chat tools to recommend you. AEO, answer engine optimisation, is work that gets you chosen for the direct answer box Google and AI tools show first. Both come down to clear facts, good structure and trusted mentions. Unsure whether you need it? Our free check shows whether AI tools mention you today.',
  },
  {
    category: 'choosing',
    question: 'Is a digital marketing company in Mumbai different from a digital marketing agency?',
    answer:
      'In practice the two names mean the same thing, and Mumbai buyers search both. Some firms call themselves an agency to sound creative and others a company to sound larger. Ignore the label. Ask who handles your work and what results they have produced for businesses like yours.',
  },
  {
    category: 'choosing',
    question: 'Who are the big 4 in digital marketing, and does a Mumbai SME need one?',
    answer:
      'The "big 4" usually refers to the global advertising holding groups that serve multinational brands, several of which run large Mumbai offices. Their structure suits national campaigns with big budgets. A small or mid-size Mumbai firm would be a minor account there and pay for layers it does not use. A focused senior team is usually the better match.',
  },
  {
    category: 'choosing',
    question: 'Are the top 5 marketing agencies the right choice for a small Mumbai business?',
    answer:
      'Usually not. "Top 5" lists favour the largest names, and those firms price and staff for large brands. A small Mumbai business tends to get more senior time from a smaller team. Shortlist from the list if you like, then decide on who runs your account and proof from your category.',
  },
  {
    category: 'services',
    question: 'Can a small Mumbai shop or startup gain from digital marketing, or is it for big brands?',
    answer:
      'Small firms often gain the most, because they can change things in a week where a big brand needs a month. Maharashtra has more DPIIT-recognised startups than any other state, so competition for attention in Mumbai is heavy. A strong Google listing, a quick mobile site and fast WhatsApp replies let a small shop appear beside much larger names.',
  },
  {
    category: 'services',
    question: 'Can you take over and repair marketing another Mumbai agency set up?',
    answer:
      'Yes, we do this often. We audit the website, Google Ads, analytics and listings first, keep what is producing leads, and fix or rebuild the rest. You keep your history and accounts. We write down what was wrong and what we changed, so you can follow every step.',
  },
  {
    category: 'channels',
    question: 'Do you handle social media marketing for Mumbai businesses?',
    answer:
      'Yes. We plan posts, reels and paid campaigns on Instagram, Facebook and LinkedIn, and handle replies. Restaurants, salons, fashion labels and venues usually see the most from it. Social builds familiarity slowly, so we connect it to Google search and WhatsApp, where buyers who are ready to purchase show up.',
  },
  {
    category: 'channels',
    question: 'Do you run Google Ads in Mumbai, and how quickly do they bring leads?',
    answer:
      'Yes. Google Ads place you at the top of search results from the first day a campaign runs, so enquiries can start within hours. Leads stop when spending stops. Mumbai clicks in finance, property and healthcare are expensive, so we keep keyword lists tight and track every call and form back to the ad that produced it.',
  },
  {
    category: 'channels',
    question: 'What is performance marketing, and is it right for my Mumbai firm?',
    answer:
      'Performance marketing means paid campaigns judged only by measurable outcomes such as calls, leads and sales. Google and Meta show you what each rupee returned. It suits businesses that need trackable enquiries quickly. If your margins or category make paid clicks uneconomic, we will tell you and put the effort into SEO instead.',
  },
  {
    category: 'channels',
    question: 'How does local SEO put my Mumbai shop on Google Maps?',
    answer:
      'When someone nearby searches on a phone, Google shows a map with three businesses on top. Local SEO aims to put you in those three. The steps: a complete Google Business Profile, the same name, address and phone number everywhere online, photos, regular posts, and steady genuine reviews. For a showroom or clinic, this often brings more calls than any other channel.',
  },
  {
    category: 'seo',
    question: 'Which is the best SEO company in Mumbai, and is it different from an SEO agency?',
    answer:
      'Both phrases describe a team that improves your Google rankings, and Mumbai buyers use them interchangeably. Some suit small local businesses chasing map results, others suit large sites with thousands of URLs. Pick the one that gives honest timelines, explains the work clearly and refuses to guarantee rankings.',
  },
  {
    category: 'seo',
    question: 'Should I hire an SEO consultant in Mumbai?',
    answer:
      'A consultant is one specialist who advises on strategy while your staff carry out the tasks. That works if you have a developer and a writer in-house. If you want the site fixes, content and local listings done for you, a small senior team covers more ground than one adviser.',
  },
  {
    category: 'ai',
    question: 'How do I check if ChatGPT or Google AI already recommends my Mumbai business?',
    answer:
      'Ask the tools directly. Type something like "best [your service] in Mumbai" into ChatGPT, Gemini and Google, and note whether your name appears and which competitors do. If you are missing, that gap is worth fixing, since more buyers rely on those answers. Our free AI visibility checker runs the same test for you.',
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
  '@id': 'https://factoryjet.com/digital-marketing/mumbai#webpage',
  url: 'https://factoryjet.com/digital-marketing/mumbai',
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
  name: 'Digital Marketing Services in Mumbai',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'City', name: 'Mumbai' },
  serviceType: 'Digital Marketing',
  description:
    'Digital marketing for Mumbai firms in finance, property, retail, media and trade: SEO, Google Ads, social, websites, WhatsApp and AI search from one senior team.',
};

const agenciesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Top digital marketing agencies in Mumbai (July 2026)',
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
  name: 'Digital Marketing Agency in Mumbai | FactoryJet',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
};

export default function MumbaiDigitalMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="mumbai-dm-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="mumbai-dm-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="mumbai-dm-agencies-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agenciesSchema) }}
      />
      <script
        id="mumbai-dm-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Digital Marketing', url: 'https://factoryjet.com/digital-marketing' },
          { name: 'Mumbai', url: CANONICAL },
        ]}
      />

      <SiteHeader locale="in" />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Digital Marketing', url: 'https://factoryjet.com/digital-marketing' },
          { name: 'Mumbai', url: CANONICAL },
        ]} />
        <Hero
          eyebrow="DIGITAL MARKETING AGENCY · MUMBAI"
          headline="Digital Marketing Agency in Mumbai for Firms That Need More Enquiries"
          lead="From BKC finance houses to Zaveri Bazaar jewellers and Andheri D2C labels, we get Mumbai firms onto Google, Maps and ChatGPT, then turn those visits into calls and WhatsApp leads."
          formSlot={<HeroInlineForm region="in" source="in_mumbai_digital_marketing_hero" />}
          secondaryCta={{ label: 'Get a Free Growth Plan', modal: true as const, region: 'in' as const }}
          trustItems={HERO_TRUST}
          accent="orange"
          rightSlot={
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div aria-hidden className="absolute -right-3 -top-3 h-24 w-24 rounded-2xl bg-[#F05A28]/10" />
              <div aria-hidden className="absolute -bottom-4 -left-4 h-28 w-28 rounded-2xl bg-fj-ink/[0.04]" />
              <div className="relative overflow-hidden rounded-2xl border border-fj-neutral-200 shadow-sm">
                <img
                  src="/images/services/digital-marketing/mumbai/hero.webp"
                  alt="A marketing strategist planning a campaign for a Mumbai client"
                  width={832}
                  height={1216}
                  fetchPriority="high"
                  className="aspect-[3/4] w-full object-cover"
                />
                <div className="absolute bottom-3 left-3 rounded-xl bg-white/95 px-4 py-2.5 shadow-sm">
                  <p className="font-fj-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[#B23E13]">
                    Mumbai, the MMR and all of India
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
              Which digital marketing agency in Mumbai should you pick?
            </Heading>
            <p className="mt-4 text-lg leading-relaxed text-fj-ink/80">
              Pick by fit. A Nariman Point wealth firm, a Kalbadevi textile wholesaler and a Bandra cafe
              each need a different mix of search, ads and social. Size, category and the seniority of the
              person running your account decide the match. If you run a small or mid-size Mumbai firm and
              want one senior team across site, Google, ads and AI answers, FactoryJet fits. We compare
              well-known Mumbai agencies below, ourselves included.
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
          headline="The work a Mumbai digital marketing agency does for you"
          lead="Mumbai buyers compare five options on a phone before calling one. Our job is to make you one of those five and the one they call."
          body={
            <>
              <p>
                A flat buyer in Thane searches Google on the Central line. A bride-to-be scrolls
                jewellery reels on Instagram. A CFO asks ChatGPT to shortlist audit firms. Each of
                those moments is a chance to be found, and each click should end in a call, a WhatsApp
                chat or an order.
              </p>
              <p>
                The toolkit is a quick site, Google rankings (SEO), paid ads for speed, social
                content, WhatsApp follow-up and AI search work. A freight forwarder near Nhava Sheva
                needs a different subset from a salon in Khar. We pick the channels your past
                enquiries point to and tell you which ones to skip.
              </p>
            </>
          }
          rightSlot={
            <div className="relative">
              <div aria-hidden className="absolute -bottom-4 -right-4 h-28 w-28 rounded-2xl bg-[#F05A28]/10" />
              <img
                src="/images/services/digital-marketing/mumbai/team.webp"
                alt="Marketers reviewing search and ad results for Mumbai businesses"
                width={1216}
                height={832}
                loading="lazy"
                className="relative aspect-[3/2] w-full rounded-2xl border border-fj-neutral-200 object-cover shadow-sm"
              />
            </div>
          }
        />

        {/* Mumbai market context: real, cited numbers that build trust with
            both AI answer engines and human readers. Outbound links resolve. */}
        <CityContextSection
          eyebrow="MUMBAI BUYERS ONLINE, WITH SOURCES"
          headline="Mumbai buyers shortlist on their phones, and competition for each click is fierce"
          leadParagraphs={[
            'Mumbai holds the head offices of banks, insurers and brokerages, the studios of Hindi film and TV, the country’s busiest diamond and jewellery trade, and thousands of D2C labels. Ad auctions here are among the costliest in India, so wasted clicks hurt.',
            'Searches mix English, Hinglish and some Marathi, and many add a suburb or station name: "physiotherapist Borivali West", "packers and movers Kurla". Pages written for those patterns beat generic city pages.',
            'Firms that grow here run search, Maps, WhatsApp and AI answers as one system. Each part feeds the next, and the figures beside this show how fast buyers across India are moving online and into AI tools.',
          ]}
          bodySlot={
            <>
              <div className="border-l-2 py-1 pl-5" style={{ borderLeftColor: '#F05A28' }}>
                <p
                  className="fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  Mumbai buyers call the first credible name they find. Be that name.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Andheri', 'Bandra', 'BKC', 'Lower Parel', 'Powai', 'South Mumbai', 'Navi Mumbai', 'Thane'].map(
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
          headline="SEO, social media, Google Ads and AI search for Mumbai firms, run by one senior in-house team"
        />

        <IndustriesGrid
          variant="cards"
          eyebrow="EVERYTHING IN ONE PLACE"
          headline="Every channel a Mumbai business needs, from one team"
          lead="Skip juggling a web developer, an ads freelancer and a social agency. Each card below opens the full service page."
          sectors={CHANNELS}
        />

        {/* Second ServiceExplanation: our actual method for Mumbai, alternating
            layout (card on the left) to break the rhythm. Light. */}
        <ServiceExplanation
          eyebrow="OUR APPROACH FOR MUMBAI"
          headline="Our method for Mumbai clients"
          lead="We begin with the channel already sending you the most enquiries, make it stronger, then add the next one."
          reverseOnDesktop
          body={
            <>
              <p>
                Step one is a look at where your buyers come from today. A Zaveri Bazaar jeweller lives
                on walk-ins, Instagram and Maps. A BKC fintech wins on LinkedIn, content and AI answers.
                The plan follows your buyers.
              </p>
              <p>
                Next, an experienced specialist does the hands-on work: speeding up the site for phones
                on crowded networks, building rankings on Google and Maps, and wiring WhatsApp so every
                lead gets a quick reply.
              </p>
              <p>
                Then we report monthly on one page: visits, enquiries by source and tasks completed.
                Budget moves toward what produced leads. Anything that did not gets cut.
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
                  What working with us looks like
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100 px-7">
                {[
                  { t: 'A plan drawn from your own enquiry data', n: 'written for your category and area' },
                  { t: 'An experienced lead on your account', n: 'experienced people do the work' },
                  { t: 'Ranked on Google and Maps', n: 'profiles set up for each branch' },
                  { t: 'WhatsApp follow-up wired in', n: 'catalogue and auto-reply ready' },
                  { t: 'Work on AI answers', n: 'ChatGPT, Gemini and Google AI Mode' },
                  { t: 'A one-page monthly scorecard', n: 'leads by source, tasks done' },
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
                  Clear scope. Experienced hands. Leads you can count.
                </p>
              </div>
            </div>
          }
        />

        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs a network agency, a freelancer or an in-house hire"
          lead="Each option suits someone. This table shows where each one tends to be strong or weak for a Mumbai business."
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
        />

        {/* "Three reasons" rendered LIGHT (was StrategicDarkSection). Keeping this
            light means Testimonials stays the single dark section on the page. */}
        <section className="bg-fj-cream px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-5xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#B23E13]">
              WHERE MUMBAI MARKETING BUDGETS LEAK
            </p>
            <Heading as="h2" size="h2" className="text-fj-ink">
              Three ways Mumbai firms lose money on digital marketing
            </Heading>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fj-ink/80">
              When an owner tells us marketing did nothing, the cause is almost always on this list.
              Each one can be fixed.
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
          headline="Get a written growth plan for your Mumbai business"
          sub="Share what you sell and which parts of Mumbai you serve. We check your Google, Maps and AI visibility and send a short plan you can use with or without us."
          primaryCta={{ label: 'Get my free growth plan', modal: true, region: 'in' }}
          secondaryCta={{ label: 'Check if AI tools recommend you', href: '/ai-visibility-checker' }}
        />

        {/* Ranked-channels listicle: which channels actually bring Mumbai
            businesses enquiries, informed by live Mumbai search demand. Light. */}
        <section className="bg-fj-cream px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#B23E13]">
              WHAT ACTUALLY BRINGS ENQUIRIES
            </p>
            <Heading as="h2" size="h2" className="text-fj-ink">
              Mumbai digital marketing channels, ranked by enquiries
            </Heading>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fj-ink/80">
              Lists of digital marketing services in Mumbai tend to sell every channel as essential.
              This ranking orders them by how reliably each produces enquiries for a typical Mumbai
              firm, with the kind of business each one suits.
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
              Few firms need all six. A quick site, Google and Maps rankings, prompt WhatsApp replies
              and early AI search work cover most Mumbai businesses. We will name the ones to skip.
            </p>
          </div>
        </section>

        {/* Named-competitor comparison: the honest "who is best for what" listicle. */}
        <section className="bg-fj-cream px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#B23E13]">
              MUMBAI AGENCIES AND WHAT EACH DOES BEST
            </p>
            <Heading as="h2" size="h2" className="text-fj-ink">
              Top digital marketing agencies in Mumbai, matched to the buyer they suit
            </Heading>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fj-ink/80">
              These names rank on Google for Mumbai digital marketing and SEO searches, based on live
              search data from July 2026. FactoryJet appears in the list and is marked, so you know which
              entry is ours.
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
              Each agency listed is a capable team. The "best for" notes are our reading of their public
              work and the Mumbai searches they rank for. Match the agency to your business, whatever its
              size or fame.
            </p>
          </div>
        </section>

        <ServiceJourneyRow
          eyebrow="HOW WORKING WITH US FEELS"
          headline="Five steps from first call to monthly leads"
          lead="This is the order things happen once a Mumbai business signs up."
          stages={JOURNEY}
          closingNote="FIVE STEPS · EXPERIENCED TEAM · ONE-PAGE MONTHLY SCORECARD"
        />

        {/* Reach across Mumbai (plain language + safe internal links to hubs). */}
        <section className="border-y border-fj-ink/10 bg-white px-6 py-14 md:px-8 md:py-16">
          <div className="mx-auto max-w-3xl">
            <Heading as="h2" size="h3" className="text-fj-ink">
              Across the MMR, from Colaba to Kalyan
            </Heading>
            <p className="mt-4 text-lg leading-relaxed text-fj-ink/80">
              Campaigns run online, so we serve showrooms, caterers, clinics, brokers, traders and labels
              in Andheri, Bandra, BKC, Lower Parel, Powai, South Mumbai, Navi Mumbai and Thane alike. If
              you want to{' '}
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
              , one senior team covers it.{' '}
              Before deciding, you can{' '}
              <a href="/digital-marketing" className="font-semibold text-[#B23E13] underline underline-offset-2">
                compare the top 10 digital marketing agencies in India
              </a>
              , FactoryJet among them.
            </p>
          </div>
        </section>

        <TestimonialsSection
          eyebrow="REAL RESULTS"
          headline="Owners describe working with FactoryJet"
          region="in"
        />

        <FAQ
          eyebrow="MUMBAI OWNERS ASK"
          headline="Digital marketing in Mumbai: common questions"
          lead="Drawn from what Mumbai buyers type into Google, with short, direct answers."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        <FinalCTA
          variant="light"
          eyebrow="READY WHEN YOU ARE"
          headline="See which Mumbai searches are going to your competitors"
          sub="Book a free call. We review your site, Maps listing and AI visibility, then tell you which fixes would bring the most Mumbai enquiries, whether or not you hire us."
          primaryCta={{ label: 'Get My Free Growth Plan', modal: true, region: 'in' }}
          secondaryCta={{ label: 'Check if AI tools recommend you', href: '/ai-visibility-checker' }}
          objectionHandler="Free call. No lock-in. A plan you keep either way."
        />
      </main>

      <SiteFooter locale="in" />
    </>
  );
}

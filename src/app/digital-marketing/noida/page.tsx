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

const CANONICAL = 'https://factoryjet.com/digital-marketing/noida';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in Noida | SEO + AI | FactoryJet',
  description:
    'Digital marketing agency in Noida for IT firms, builders, coaching centres and exporters. SEO, Google Ads, social and AI search from one senior team.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Digital Marketing Agency in Noida | SEO + AI | FactoryJet',
    description:
      'Digital marketing agency in Noida for IT firms, builders, coaching centres and exporters. SEO, Google Ads, social and AI search from one senior team.',
    url: CANONICAL,
    images: [
      {
        url: 'https://factoryjet.com/images/services/digital-marketing/noida/hero.webp',
        width: 832,
        height: 1216,
        alt: 'FactoryJet: Digital Marketing Agency in Noida',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency in Noida | FactoryJet',
    description:
      'SEO, Google Ads, social and AI search for Noida IT firms, builders, coaching centres and exporters, run by one senior team.',
    images: ['https://factoryjet.com/images/services/digital-marketing/noida/hero.webp'],
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
   Noida city page. Plain language, no pricing anywhere. Every jargon word is
   explained the first time it appears. Content is written for Noida: local
   sectors, local business types, local buying behaviour. Competitor and FAQ
   material is grounded in live search research pulled July 2026 for
   "digital marketing agency in noida" and "seo agency in noida".
   ──────────────────────────────────────────────────────────────────────── */

const HERO_TRUST = [
  '500+ businesses helped',
  '12 years of experience',
  'Senior people on every account',
  'Google, Maps and AI answers',
];

const STATS = [
  { value: '500+', label: 'Businesses helped', note: 'Clients in India, the US, the UK and the UAE' },
  { value: '12 yrs', label: 'Years doing this', note: 'Long enough to have seen Google change many times' },
  { value: 'In-house', label: 'Senior team', note: 'Your account stays with experienced hands' },
  { value: '4', label: 'Countries served', note: 'India, the US, the UK and the UAE' },
];

// Channel grid = the internal-link authority hub. Each card links into an
// existing FactoryJet service page so this Noida page passes authority down.
const CHANNELS: IndustryCard[] = [
  {
    name: 'SEO (get found on Google)',
    description:
      'Search engine optimisation puts your Sector 62 software firm or Expressway project on page one for the terms buyers type, with no fee per click.',
    linkLabel: 'Explore SEO',
    linkHref: '/seo',
  },
  {
    name: 'Websites that sell',
    description:
      'Pages built to load fast on a phone and ask for the call, the demo or the site visit. A builder or a SaaS team gets a site shaped around that one action.',
    linkLabel: 'See web design',
    linkHref: '/web-design',
  },
  {
    name: 'Online stores',
    description:
      'Garment makers and small electronics brands in Noida can sell direct. We set up stores with clear product pages, simple checkout and easy order handling.',
    linkLabel: 'See ecommerce',
    linkHref: '/services/ecommerce-development',
  },
  {
    name: 'AI search (get picked by ChatGPT)',
    description:
      'A CTO shortlisting vendors may ask ChatGPT for options before calling anyone. GEO is the work of getting your name into those AI replies.',
    linkLabel: 'Explore AI SEO',
    linkHref: '/ai-seo',
  },
  {
    name: 'Chatbots and automation',
    description:
      'A bot that answers course fee questions for a coaching centre at midnight, or books a site visit for a flat buyer on Sunday, then hands the lead to you.',
    linkLabel: 'See AI agents',
    linkHref: '/services/ai-agent-development',
  },
  {
    name: 'WhatsApp for business',
    description:
      'Parents, flat buyers and shop owners in Noida reply faster on WhatsApp than by email. We set up auto replies, lead capture and quick handover to your staff.',
    linkLabel: 'See WhatsApp chatbot',
    linkHref: '/whatsapp-chatbot',
  },
  {
    name: 'Shopify stores',
    description:
      'For apparel and accessory labels that want a store running quickly, Shopify handles payments and stock. We design and set it up for your range.',
    linkLabel: 'See Shopify',
    linkHref: '/shopify-development',
  },
  {
    name: 'WordPress websites',
    description:
      'Good for schools, clinics and B2B firms that publish often. You keep full ownership of the site and can switch providers whenever you like.',
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
    feature: 'Who handles your account each day',
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
    feature: 'A monthly summary any owner can follow',
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
    feature: 'Knows how Noida and NCR buyers compare vendors',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="ih" kind="yes" />,
    ],
  },
  {
    feature: 'Quick start with no year-long contract',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="no" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="ih" kind="no" />,
    ],
  },
  {
    feature: 'Google Maps listings set up for each Noida sector you serve',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="ih" kind="partial" />,
    ],
  },
  {
    feature: 'WhatsApp replies within minutes of an enquiry',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="ih" kind="yes" />,
    ],
  },
  {
    feature: 'Each step explained without jargon',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="ih" kind="yes" />,
    ],
  },
  {
    feature: 'Written plan signed off before spending begins',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="ih" kind="partial" />,
    ],
  },
  {
    feature: 'Past work in a field close to yours',
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
    title: 'Running one channel in isolation',
    body:
      'A parent picking a coaching centre in Noida reads Google reviews, checks the Instagram page, then sends a WhatsApp message. If any one of those is weak, the enquiry goes to the next centre. We run all three as one path.',
  },
  {
    icon: '\u{1F464}',
    title: 'Juniors running a senior pitch',
    body:
      'The pitch meeting has a director in it. The monthly work gets passed to an intern. Noida buyers can pick from vendors across Delhi, Gurgaon and Ghaziabad, so a slow quarter costs you real deals. Our experienced staff stay on your account.',
  },
  {
    icon: '\u{1F916}',
    title: 'Leaving AI answers to rivals',
    body:
      'IT buyers and students in Noida use ChatGPT and Google AI Overviews to build shortlists. A firm that only chases blue links never appears in those replies. We plan for both the classic results and the AI summary above them.',
  },
];

// Named-competitor comparison, built from live agency research for Noida
// (checked July 2026). Every agency below is a real, verifiable Noida team
// with a genuine Noida-sector office. Honest, positive, with open
// self-disclosure that FactoryJet is on the list.
const AGENCIES = [
  {
    name: 'FactoryJet',
    bestFor:
      'Noida SMEs, IT firms, builders and institutes that want one experienced team running site, search, ads and AI answers, with a short monthly summary. (This entry is us. We list ourselves so you can weigh us against the rest.)',
    isUs: true,
  },
  {
    name: 'Wildnet Technologies',
    bestFor: 'Firms wanting a big Sector 63 shop with a long client history, running SEO and paid campaigns in volume.',
  },
  {
    name: 'PageTraffic',
    bestFor: 'Sites with heavy technical search problems that need a long-standing Noida and Delhi SEO specialist.',
  },
  {
    name: 'BrandBurp Digital',
    bestFor: 'App and web brands chasing buyers across India who want both promoted by the same team.',
  },
  {
    name: 'Cinzel India',
    bestFor: 'Brands that care most about creative content, backed by ongoing SEO, from Sector 65.',
  },
  {
    name: 'Digital Notebook',
    bestFor: 'Small local firms wanting search, social posts and ads from a hands-on Sector 63 group.',
  },
  {
    name: 'Inquisitive Digital',
    bestFor: 'Startups that judge marketing by revenue and want tight reporting, also based in Sector 63.',
  },
];

const JOURNEY: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'A short first call',
    description: 'Tell us what you sell, who buys it in Noida and NCR, and what a good month looks like for you.',
  },
  {
    number: '02',
    title: 'A written plan',
    description: 'You get the channels we picked, the reason for each, and what we will skip. You approve it first.',
  },
  {
    number: '03',
    title: 'Set-up and launch',
    description: 'Site fixes, Maps listing, ad accounts and AI search groundwork go live, handled by experienced staff.',
  },
  {
    number: '04',
    title: 'Monthly numbers',
    description: 'Leads, calls, WhatsApp chats and the tasks done that month, on one short page.',
  },
  {
    number: '05',
    title: 'Adjust and repeat',
    description: 'Budget moves toward what produced enquiries. Anything that did not gets cut.',
  },
];

// Noida market context. Every number below is real, current (July 2026), and
// linked to a source that resolves. These back the CityContextSection so the
// page earns trust with AI answer engines and human readers alike.
const MARKET_STATS = [
  {
    value: '1.03 billion',
    label:
      'internet users across India, roughly 70 of every 100 people. A Noida buyer checks you on a phone long before the first call.',
    sourceUrl: 'https://datareportal.com/reports/digital-2026-india',
    sourceLabel: 'DataReportal Digital 2026',
  },
  {
    value: '100 million+',
    label:
      'people in India open ChatGPT each week, more than any country except the US. Vendor shortlists in Noida now start there too.',
    sourceUrl:
      'https://techcrunch.com/2026/02/15/india-has-100m-weekly-active-chatgpt-users-sam-altman-says/',
    sourceLabel: 'TechCrunch, Feb 2026',
  },
  {
    value: '14,000+',
    label:
      'startups recognised by the government sit in Uttar Pradesh, and over 3,400 of them are in Noida, the most of any UP city. That is a lot of firms chasing the same buyers.',
    sourceUrl: 'https://www.drishtiias.com/state-pcs-current-affairs/startup-ecosystem-report-2025',
    sourceLabel: 'Startup Ecosystem Report 2025',
  },
];

// The honest "which channels actually bring enquiries" listicle. Ordered by how
// steadily each one brings leads for a typical Noida business, not by hype.
// Real high-volume Noida search terms are woven in naturally.
const CHANNELS_RANKED = [
  {
    name: 'Ranking on Google for buying searches (SEO)',
    who: 'IT service firms, builders, institutes and almost any Noida company with a website, SEO agencies in Noida included.',
    body:
      'SEO, or search engine optimisation, earns you a place in the unpaid Google results. Think of searches like "IIT JEE coaching Sector 62", "3 BHK Noida Extension" or "software testing company Noida". Rankings take a few months to build. Once they hold, they keep sending enquiries without a bill for each visit, which is why we put this first for most firms here.',
  },
  {
    name: 'Google Maps and nearby searches (local SEO)',
    who: 'Clinics, cafes in Sector 18, gyms, salons, schools and showrooms that people visit in person.',
    body:
      'Type "dentist near me" in Sector 50 and Google shows a map with three businesses above everything else. Local SEO is the work of getting into that box. It starts with a complete Google Business Profile, the right category, real photos and steady reviews. Noida has many sectors, so a listing that names your exact sector and landmarks wins nearby searches more often.',
  },
  {
    name: 'Google Ads when you need leads now',
    who: 'New projects, admission season for institutes, product launches and any firm that needs calls this month.',
    body:
      'With Google Ads you pay to sit at the top of the page for chosen searches. Leads can start on day one and stop the day the budget ends. Builders launching a tower and coaching centres before admissions use ads to fill a short window. We also use ads to learn which searches convert before investing months in SEO for them. Some agencies call this performance marketing.',
  },
  {
    name: 'Instagram, Facebook and LinkedIn',
    who: 'Restaurants, fashion labels, edtech brands, and B2B firms in Sector 62 and 63 that sell through LinkedIn.',
    body:
      'Social platforms make people recognise your name before they need you. Consumer brands do well on Instagram. IT and SaaS companies in Noida usually get more from LinkedIn posts by founders and staff. Social is slower to produce enquiries than search, so we run it next to Google work and judge it by the leads it helps close.',
  },
  {
    name: 'Quick replies on WhatsApp',
    who: 'Any Noida business that gets enquiries from forms, ads or calls.',
    body:
      'A lead that waits until tomorrow often signs with someone else today. A WhatsApp button on every page, an instant auto reply and a short script for your staff fix most of that. Property and education buyers in particular expect a reply on WhatsApp within the hour, so this step often lifts results more than extra ad spend.',
  },
  {
    name: 'Being named by AI assistants (ChatGPT, Gemini, Google AI)',
    who: 'SaaS firms, IT exporters, edtech brands and any Noida business whose buyers research with AI tools.',
    body:
      'Ask ChatGPT for "a reliable app development company in Noida" and it names a handful of firms. Most local agencies have not started working on this, so the field is open. The method is called GEO, short for generative engine optimisation. It means clear service pages, facts AI tools can quote, and mentions on sites those tools already trust. We include it from the first month.',
  },
];

const FAQ_CATEGORIES: FAQCategory[] = [
  { key: 'choosing', label: 'Choosing an agency' },
  { key: 'services', label: 'What we do' },
  { key: 'channels', label: 'Channels and tactics' },
  { key: 'seo', label: 'SEO in Noida' },
  { key: 'local', label: 'Noida and nearby' },
  { key: 'results', label: 'Results and reports' },
  { key: 'trust', label: 'Trust and safety' },
  { key: 'ai', label: 'AI and the future' },
];

// Every FAQ below reflects real "People Also Ask" and related-search
// intent for Noida (July 2026). Career and "how to earn" queries were
// deliberately excluded (not buyer intent).
const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'choosing',
    question: 'Which is the best digital marketing agency in Noida?',
    answer:
      'It depends on what you sell. A SaaS company in Sector 62 needs LinkedIn, technical SEO and AI search. A builder on the Expressway needs Google Ads and fast WhatsApp follow-up. A cafe in Sector 18 needs Google Maps. Pick the agency whose past work matches your type of buyer, and check who will run your account. Further down this page we list several Noida agencies, ourselves included, with who each one suits.',
  },
  {
    category: 'choosing',
    question: 'Which kind of agency is best for digital marketing?',
    answer:
      'The one whose strongest skill matches your biggest gap. If buyers cannot find you on Google, hire for SEO. If you need leads before a launch, hire for paid ads. If your brand sells on looks, hire for social content. After that, check two things: an experienced person handles your work, and the monthly report shows leads, not likes.',
  },
  {
    category: 'choosing',
    question: 'Can I trust the "top 10 digital marketing agencies in Noida" lists?',
    answer:
      'Use them for names only. Many of those lists, including the "top 20 digital marketing agencies in Noida" versions, are paid listings or one writer’s view. Take three or four names and ask each the same questions: who works on my account, what do I get every month, and what have you done for a firm like mine? Compare the answers side by side.',
  },
  {
    category: 'choosing',
    question: 'How should I choose a digital marketing agency in Noida?',
    answer:
      'Start with a short brief: what you sell, who buys it, and how many leads you want. Send it to a few agencies and see who asks sharp questions back. Then ask each to name the person who will run your account and to show work for a similar business. In Noida you can also meet agencies across NCR, so judge them on fit, not distance.',
  },
  {
    category: 'choosing',
    question: 'Is hiring a digital marketing agency in Noida worth the money?',
    answer:
      'It pays off when it brings more qualified enquiries than you could get alone, and you can trace each one to a source. Give it three to six months, then compare leads and sales against what you spent. If the agency cannot show where enquiries came from, you cannot judge it, and that alone is a warning.',
  },
  {
    category: 'choosing',
    question: 'Should a Noida business hire an agency, a freelancer or an in-house team?',
    answer:
      'A freelancer suits one clear job, such as a website rebuild. An in-house team gives control but takes months to hire, and good marketers in NCR switch jobs often. An agency gives you SEO, ads, design and content skills from day one. Many Noida firms use an agency first, then hire one in-house marketer to manage it once the channels are working.',
  },
  {
    category: 'services',
    question: 'What does a digital marketing agency in Noida do day to day?',
    answer:
      'It makes sure the people who need your product can find you and contact you. In practice that means fixing your website, improving your Google rankings, running ads, posting on social platforms, setting up WhatsApp replies and tracking every enquiry. For a Noida IT firm the focus may be LinkedIn and search. For a clinic it may be Google Maps and reviews.',
  },
  {
    category: 'services',
    question: 'What are the 7 types of digital marketing?',
    answer:
      'They are usually listed as: SEO for unpaid Google results, paid ads on Google, Meta or LinkedIn, social media, content such as blogs and videos, email and WhatsApp messages, influencer tie-ups, and GEO for AI assistants like ChatGPT. Few businesses need all seven. A Noida builder might use four of them, while a B2B software firm might lean on three.',
  },
  {
    category: 'services',
    question: 'Which channels get Noida businesses the most enquiries?',
    answer:
      'For most firms here it is Google search, a quick mobile website and fast WhatsApp replies working together. Coaching centres and clinics add Google Maps. IT and SaaS companies add LinkedIn. Restaurants and fashion labels add Instagram. We look at where your buyers already spend time and start there, rather than spreading budget across every platform.',
  },
  {
    category: 'services',
    question: 'Should I start with SEO, ads or social media?',
    answer:
      'Start with ads if you need leads within weeks, for example before a project launch or admission season. Start with SEO if you can wait a few months for leads that keep coming without paying per click. Many Noida businesses run a small ad budget while SEO grows, then cut ads back once rankings hold.',
  },
  {
    category: 'services',
    question: 'How is digital marketing different from running ads?',
    answer:
      'Ads are one tool inside digital marketing. They buy you a spot at the top of Google or Instagram, and the spot disappears when the budget ends. Digital marketing also covers your website, unpaid rankings, content, social pages and follow-up. Those parts keep working after an ad stops, which lowers what each lead costs you over time.',
  },
  {
    category: 'seo',
    question: 'Which is the best SEO agency in Noida?',
    answer:
      'The best fit depends on your site. A local clinic needs someone strong at Google Maps. An ecommerce exporter with thousands of product pages needs technical SEO skill. A SaaS firm needs content that ranks for what IT buyers search. Choose an agency that gives honest timelines and explains its work. Walk away from anyone who promises the top spot, because nobody controls Google.',
  },
  {
    category: 'seo',
    question: 'What does an SEO agency in Noida actually do?',
    answer:
      'Search engine optimisation means earning unpaid Google visibility. The agency fixes site problems that stop Google reading your pages, writes pages around the words your buyers use, sets up your Google Business Profile and earns links from respected sites. For a Noida business that might mean a page for each sector or service you cover, each written for real searches.',
  },
  {
    category: 'seo',
    question: 'Does my SEO expert need to be based in Noida?',
    answer:
      'No. SEO is done online, so location matters less than skill. What does matter is knowing how Noida buyers search, for example by sector number, by "Noida Extension" or by "near metro". A good expert sets up your Maps listing with those details and writes pages that match them. Judge them by results and clear explanations.',
  },
  {
    category: 'seo',
    question: 'Is the biggest SEO agency always the best choice?',
    answer:
      'Not for most Noida SMEs. Large agencies are built around enterprise accounts, and a smaller budget can end up at the bottom of their list. A smaller experienced team usually gives your site more attention each month. Ask how many accounts each person handles. That number tells you more than the size of the office.',
  },
  {
    category: 'local',
    question: 'Do you also work with businesses in Greater Noida and Ghaziabad?',
    answer:
      'Yes. We work with businesses across Noida, Greater Noida, Noida Extension, Ghaziabad and the rest of Delhi NCR. The work is done online, so the same experienced team handles a shop in Sector 18, an IT firm near Sector 62, a builder along the Expressway or a manufacturer in Greater Noida. Plans for Greater Noida firms can also reflect interest around the upcoming Jewar airport.',
  },
  {
    category: 'local',
    question: 'Do you cover Sector 18, Sector 62 and Film City?',
    answer:
      'Yes. Sector 18 is mostly retail, food and walk-in trade, so Maps and reviews matter most. Sector 62 and 63 are full of IT, ITES and SaaS firms, where LinkedIn and B2B search pages work better. Film City in Sector 16A is home to media houses that need show and brand promotion. Sector 132 on the Expressway hosts corporate offices. Each area gets a plan suited to its buyers.',
  },
  {
    category: 'local',
    question: 'Should I hire a Noida agency or one from Delhi or Gurgaon?',
    answer:
      'Location is less important than fit. Agencies in Delhi, Gurgaon and Noida all work online and can serve you equally well. Look for one that knows Noida sectors, replies quickly and sets up local listings correctly. We work with clients across India, the US, the UK and the UAE remotely, and judge ourselves on enquiries, not office address.',
  },
  {
    category: 'local',
    question: 'What kinds of Noida businesses do you work with?',
    answer:
      'IT and SaaS firms, ITES providers, real estate developers and brokers, coaching institutes and schools, edtech brands, hospitals and clinics, restaurants, salons, garment exporters, electronics and component suppliers, and media firms around Film City. If your buyers search Google, scroll Instagram, read LinkedIn or ask ChatGPT before choosing, we can help them find you.',
  },
  {
    category: 'results',
    question: 'How soon will I see results from digital marketing in Noida?',
    answer:
      'Paid ads can bring enquiries in the first week. SEO usually needs three to six months, and crowded Noida categories such as real estate and coaching can take longer. Social media takes a few months to build trust. If someone promises big results in a week, ask how, because the honest timeline is months.',
  },
  {
    category: 'results',
    question: 'What will your reports show, and how do you judge success?',
    answer:
      'Each month you get one short summary: visitors, enquiries by source, calls and WhatsApp chats, and the tasks we finished. Success means more qualified leads and sales over time. Likes and impressions appear only if they help explain a lead. If enquiries are not rising after a fair period, we tell you and change the plan.',
  },
  {
    category: 'trust',
    question: 'Will seniors or freshers handle my account?',
    answer:
      'Ask every agency this before signing. A common pattern is a senior pitch followed by a junior who learns on your budget. Ask for the name of the person who will run your account each week and what else they handle. At FactoryJet, experienced staff do the work, and you know who they are from the start.',
  },
  {
    category: 'trust',
    question: 'What warning signs suggest a bad digital marketing agency in Noida?',
    answer:
      'Be careful of promised first-page rankings, prices far below everyone else, answers full of jargon, no samples of past work, and long contracts before any result. Also check whether you will own your website, ad accounts and Google listing. If the agency keeps those in its own name, leaving later becomes hard.',
  },
  {
    category: 'ai',
    question: 'Should my Noida business appear in ChatGPT and Google AI answers?',
    answer:
      'Yes, especially if your buyers research before calling. IT managers, parents comparing institutes and flat buyers now ask AI tools for shortlists. Few Noida agencies work on this yet, so early movers gain ground. The method is called GEO, short for generative engine optimisation, and we include it alongside regular SEO work.',
  },
  {
    category: 'ai',
    question: 'What do GEO and AEO mean for my business?',
    answer:
      'GEO is about getting named by AI assistants such as ChatGPT and Gemini. AEO, answer engine optimisation, is about being the source for the short answer Google shows above the results. Both rely on clear pages, quotable facts and trusted mentions. If your buyers ask questions before they buy, both matter. Our free checker shows whether AI tools mention you today.',
  },
  {
    category: 'choosing',
    question: 'Is a digital marketing company in Noida different from a digital marketing agency?',
    answer:
      'In practice, no. People search both phrases and mean the same service. Some firms call themselves an agency to suggest creative work and others a company to suggest scale, but nothing fixed separates them. Judge either one by who runs your account and the results they can show for a business like yours.',
  },
  {
    category: 'choosing',
    question: 'Who are the big 4 in digital marketing, and does a Noida business need them?',
    answer:
      'The "big 4" usually means the global advertising holding groups that handle multinational brands. They are built for very large budgets. A Noida SME or startup would be a minor account there and would pay for layers it does not use. An experienced smaller team that knows NCR buyers is a better match for most local firms.',
  },
  {
    category: 'choosing',
    question: 'Are the top 5 marketing agencies right for a small Noida firm?',
    answer:
      'Usually not. The most famous names are set up for large brands, and a small account gets limited attention. Rankings of the "top 5" are often opinion or paid placement anyway. Shortlist a few agencies of a size that fits you, then compare who handles the work and what they have achieved for similar firms.',
  },
  {
    category: 'services',
    question: 'Can a small shop or new startup in Noida benefit from digital marketing?',
    answer:
      'Yes, and small firms can often move faster than large ones. Noida alone has more than 3,400 recognised startups, so many young companies compete for the same buyers. A well-built Google listing, a fast site and quick WhatsApp replies let a small firm appear next to much larger names in local results.',
  },
  {
    category: 'services',
    question: 'Can you repair marketing that a previous Noida agency set up badly?',
    answer:
      'Yes. We often take over websites, ad accounts and Google listings left half-done. First we audit what exists, keep what works and fix the rest. Common problems include tracking that was never set up, ad accounts in the old agency’s name, and listings in the wrong category. We explain each fix as we make it.',
  },
  {
    category: 'channels',
    question: 'Do you handle social media marketing in Noida?',
    answer:
      'Yes. We plan posts and run paid campaigns on Instagram, Facebook and LinkedIn. Restaurants, salons and fashion labels in Noida tend to use Instagram. IT firms and B2B suppliers get more from LinkedIn. Social builds familiarity slowly, so we pair it with search, where people are already looking to buy.',
  },
  {
    category: 'channels',
    question: 'Do you run Google Ads for Noida businesses, and how quickly do they work?',
    answer:
      'Yes. Ads can produce calls on the day they go live, which suits property launches, admission seasons and new product lines. The cost stops when the ads stop, and so do the leads. We usually run ads alongside SEO, then reduce ad spend as unpaid rankings start to bring in steady enquiries.',
  },
  {
    category: 'channels',
    question: 'What is performance marketing, and does my Noida business need it?',
    answer:
      'It is paid advertising measured by actions such as calls, forms and sales instead of views. On Google and Meta you can see what each rupee returned. It suits firms that need measurable leads quickly. If your margins or timelines do not support paid ads yet, we will say so and suggest a slower route.',
  },
  {
    category: 'channels',
    question: 'How does local SEO put my Noida shop on Google Maps?',
    answer:
      'When someone nearby searches for your service, Google shows a map pack of three businesses first. Local SEO gets you into it through a complete Google Business Profile, the right categories, your sector and landmark in the address, matching contact details across directories, and genuine reviews. For clinics, salons and stores customers visit, this is often the best value channel.',
  },
  {
    category: 'seo',
    question: 'Is an SEO company in Noida different from an SEO agency?',
    answer:
      'No. Both phrases describe a team that improves your Google rankings, and buyers search them interchangeably. The real differences are in focus: some specialise in local Maps rankings, others in large technical sites or B2B content. Choose based on fit with your site, honest timelines and clear reporting.',
  },
  {
    category: 'seo',
    question: 'Do I need an SEO consultant in Noida?',
    answer:
      'A consultant is usually one specialist who advises and leaves the execution to you. That works if you already have writers and a developer. If you need the work done end to end, from site fixes to new pages to Maps set-up, a small experienced team covers more than one adviser can.',
  },
  {
    category: 'ai',
    question: 'How do I find out whether ChatGPT or Google AI mentions my Noida business?',
    answer:
      'Open ChatGPT and Google and ask the question your buyers would ask, such as "best [your service] in Noida". Note whether your name appears and which competitors do. Try a few phrasings. You can also run our free AI visibility checker, which shows where AI tools mention you today so you have a baseline before you spend anything.',
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
  '@id': 'https://factoryjet.com/digital-marketing/noida#webpage',
  url: 'https://factoryjet.com/digital-marketing/noida',
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
  name: 'Digital Marketing Services in Noida',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'City', name: 'Noida' },
  serviceType: 'Digital Marketing',
  description:
    'Digital marketing for Noida IT firms, builders, institutes, exporters and local shops: SEO, Google Ads, social, websites, WhatsApp and AI search from one experienced team.',
};

const agenciesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Top digital marketing agencies in Noida (July 2026)',
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
  name: 'Digital Marketing Agency in Noida | FactoryJet',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
};

export default function NoidaDigitalMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="noida-dm-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="noida-dm-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="noida-dm-agencies-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agenciesSchema) }}
      />
      <script
        id="noida-dm-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Digital Marketing', url: 'https://factoryjet.com/digital-marketing' },
          { name: 'Noida', url: CANONICAL },
        ]}
      />

      <SiteHeader locale="in" />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Digital Marketing', url: 'https://factoryjet.com/digital-marketing' },
          { name: 'Noida', url: CANONICAL },
        ]} />
        <Hero
          eyebrow="DIGITAL MARKETING AGENCY · NOIDA"
          headline="Digital Marketing Agency in Noida for Firms That Need More Enquiries"
          lead="From Sector 62 software firms to Expressway builders and Greater Noida exporters, we make you easier to find on Google, Maps and ChatGPT, then help turn each visit into a call."
          formSlot={<HeroInlineForm region="in" source="in_noida_digital_marketing_hero" />}
          secondaryCta={{ label: 'Get a Free Growth Plan', modal: true as const, region: 'in' as const }}
          trustItems={HERO_TRUST}
          accent="orange"
          rightSlot={
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div aria-hidden className="absolute -right-3 -top-3 h-24 w-24 rounded-2xl bg-[#F05A28]/10" />
              <div aria-hidden className="absolute -bottom-4 -left-4 h-28 w-28 rounded-2xl bg-fj-ink/[0.04]" />
              <div className="relative overflow-hidden rounded-2xl border border-fj-neutral-200 shadow-sm">
                <img
                  src="/images/services/digital-marketing/noida/hero.webp"
                  alt="Marketing strategist planning a campaign for a Noida client"
                  width={832}
                  height={1216}
                  fetchPriority="high"
                  className="aspect-[3/4] w-full object-cover"
                />
                <div className="absolute bottom-3 left-3 rounded-xl bg-white/95 px-4 py-2.5 shadow-sm">
                  <p className="font-fj-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[#B23E13]">
                    Serving Noida and all of India
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
              So, which is the best digital marketing agency in Noida?
            </Heading>
            <p className="mt-4 text-lg leading-relaxed text-fj-ink/80">
              Short answer: the one that already understands your kind of buyer. An IT services firm,
              a real estate developer and a coaching institute in Noida each win customers through
              different channels. If you want one experienced team covering your site, Google, ads,
              WhatsApp and AI answers, FactoryJet fits well. We compare several Noida agencies further
              down, ourselves included, with who each one suits.
            </p>
          </div>
        </section>

        <LogoBar tagline="500+ businesses helped in India, the US, the UK and the UAE" />

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
          headline="What our Noida digital marketing work covers"
          lead="Put simply, we get the right Noida and NCR buyers to find you, trust you and contact you."
          body={
            <>
              <p>
                Buyers in Noida research on a phone first. An HR head compares IT vendors on LinkedIn,
                a parent reads coaching reviews on Google, and a family looks up flats near the Aqua
                Line between stations. More of them now ask ChatGPT for a shortlist too. We make sure
                your name comes up at each of those points and that the visit ends in a call or a
                WhatsApp message.
              </p>
              <p>
                The toolkit covers a quick site, Google rankings, paid ads for busy seasons, social
                pages, WhatsApp replies and AI search groundwork. Few firms need every item. A garment
                exporter and a Sector 18 cafe need very different mixes, so we pick the channels that
                suit your buyers and say plainly which ones to skip.
              </p>
            </>
          }
          rightSlot={
            <div className="relative">
              <div aria-hidden className="absolute -bottom-4 -right-4 h-28 w-28 rounded-2xl bg-[#F05A28]/10" />
              <img
                src="/images/services/digital-marketing/noida/team.webp"
                alt="Team reviewing search and ad results for a Noida business"
                width={1216}
                height={832}
                loading="lazy"
                className="relative aspect-[3/2] w-full rounded-2xl border border-fj-neutral-200 object-cover shadow-sm"
              />
            </div>
          }
        />

        {/* Noida market context: real, cited numbers that build trust with
            both AI answer engines and human readers. Outbound links resolve. */}
        <CityContextSection
          eyebrow="NOIDA BUYERS, BY THE NUMBERS"
          headline="Noida mixes IT parks, factories, coaching hubs and housing projects, and each buyer group searches differently"
          leadParagraphs={[
            'Few cities pack this many kinds of business into one place. Sector 62 and 63 hold IT, ITES and SaaS companies. Large phone and electronics plants and garment exporters run in the industrial sectors. Film City houses media firms, and the Expressway and Greater Noida are lined with housing projects and corporate towers.',
            'Each group buys in its own way. Software buyers want case studies and quick demos. Flat buyers compare projects on property portals and Google. Parents read reviews of coaching centres. Many now ask ChatGPT for a shortlist, in English or Hindi. The figures beside this show how far that habit has spread across India.',
            'Buyers here can also pick vendors from Delhi, Gurgaon or Ghaziabad with one search. Firms that grow in Noida show up in Google results and on Maps, reply on WhatsApp within minutes, and appear in AI answers, so the enquiry does not drift to a rival across NCR.',
          ]}
          bodySlot={
            <>
              <div className="border-l-2 py-1 pl-5" style={{ borderLeftColor: '#F05A28' }}>
                <p
                  className="fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  Buyers across NCR can pick from three cities. Be the name they find first.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Sector 18', 'Sector 62', 'Sector 63', 'Sector 132', 'Film City', 'Sector 16', 'Greater Noida', 'Noida Expressway'].map(
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
          headline="SEO, Google Ads, social media and AI search for Noida firms, run by one experienced in-house team"
        />

        <IndustriesGrid
          variant="cards"
          eyebrow="EVERYTHING IN ONE PLACE"
          headline="The services Noida businesses ask us for"
          lead="Each card covers one service and links to the full page on how we run it. Pick one or combine several."
          sectors={CHANNELS}
        />

        {/* Second ServiceExplanation: our actual method for Noida, alternating
            layout (card on the left) to break the rhythm. Light. */}
        <ServiceExplanation
          eyebrow="OUR APPROACH FOR NOIDA"
          headline="How a Noida growth plan comes together"
          lead="We begin with the channel most likely to bring your next enquiry, then add others once it works."
          reverseOnDesktop
          body={
            <>
              <p>
                Step one is mapping where your buyers look. A coaching institute near Sector 62
                wins students through Maps, reviews and WhatsApp. A B2B software firm on the
                Expressway wins deals through LinkedIn, search and AI answers. The plan follows that map.
              </p>
              <p>
                Next, an experienced specialist handles set-up: speeding up your site, building pages
                for the searches that matter, completing your Google Business Profile for each sector
                you serve, and connecting WhatsApp so every lead gets a fast reply.
              </p>
              <p>
                Every month you get one page: visits, leads by source and the work completed. Budget
                shifts toward whatever brought enquiries, and weak channels get dropped. You can
                follow every decision we make.
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
                  { t: 'Channels picked for your buyers', n: 'based on how they search' },
                  { t: 'One experienced lead on your account', n: 'named before you sign' },
                  { t: 'Google and Maps for your sectors', n: 'listings with the right landmarks' },
                  { t: 'WhatsApp replies in minutes', n: 'auto reply plus staff handover' },
                  { t: 'Groundwork for AI answers', n: 'ChatGPT, Gemini and Google AI' },
                  { t: 'One-page monthly summary', n: 'leads, sources, tasks done' },
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
                  Clear plan. Experienced hands. Leads you can count.
                </p>
              </div>
            </div>
          }
        />

        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs a traditional agency vs a freelancer vs your own team"
          lead="Each option has trade-offs. This table sets them side by side so a Noida owner can decide quickly."
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
        />

        {/* "Three reasons" rendered LIGHT (was StrategicDarkSection). Keeping this
            light means Testimonials stays the single dark section on the page. */}
        <section className="bg-fj-cream px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-5xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#B23E13]">
              WHERE NOIDA CAMPAIGNS GO WRONG
            </p>
            <Heading as="h2" size="h2" className="text-fj-ink">
              Three mistakes that waste marketing budgets in Noida
            </Heading>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fj-ink/80">
              When earlier spend produced few leads, one of these is usually behind it. Each one has a
              straightforward fix.
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
          headline="Get a written marketing plan for your Noida firm"
          sub="Share what you sell and who buys it. We review your Google, Maps and AI search presence and reply with the first steps we would take, free of charge."
          primaryCta={{ label: 'Get my free growth plan', modal: true, region: 'in' }}
          secondaryCta={{ label: 'Check if AI tools recommend you', href: '/ai-visibility-checker' }}
        />

        {/* Ranked-channels listicle: which channels actually bring Noida
            businesses enquiries, informed by live Noida search demand. Light. */}
        <section className="bg-fj-cream px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#B23E13]">
              WHAT ACTUALLY BRINGS ENQUIRIES
            </p>
            <Heading as="h2" size="h2" className="text-fj-ink">
              Which marketing channels bring Noida firms the most leads
            </Heading>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fj-ink/80">
              Lists of digital marketing services in Noida tend to sell every channel together. This
              ranking orders them by how reliably each one produces enquiries for a typical Noida
              firm, with the type of business each suits.
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
              Most firms here start with three: Google search, Maps or LinkedIn depending on the
              buyer, and WhatsApp replies. AI search comes next. We will tell you which of the six to
              leave out.
            </p>
          </div>
        </section>

        {/* Named-competitor comparison: the honest "who is best for what" listicle. */}
        <section className="bg-fj-cream px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#B23E13]">
              NOIDA AGENCIES SIDE BY SIDE
            </p>
            <Heading as="h2" size="h2" className="text-fj-ink">
              Digital marketing agencies in Noida and the clients each suits
            </Heading>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fj-ink/80">
              In July 2026 we checked which digital marketing and SEO agencies have real offices in
              Noida sectors, and what each leads with. FactoryJet is on the list and marked clearly.
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
              Each agency listed is an established Noida team. The suited-for notes are our reading
              of their public work and lead services. Match the agency to your buyer type before you
              compare anything else.
            </p>
          </div>
        </section>

        <ServiceJourneyRow
          eyebrow="HOW WORKING WITH US FEELS"
          headline="Five steps from first call to steady leads"
          lead="This is the order things happen once a Noida business signs on with us."
          stages={JOURNEY}
          closingNote="5 SIMPLE STEPS · SENIOR TEAM · HONEST MONTHLY REPORTS"
        />

        {/* Reach across Noida (plain language + safe internal links to hubs). */}
        <section className="border-y border-fj-ink/10 bg-white px-6 py-14 md:px-8 md:py-16">
          <div className="mx-auto max-w-3xl">
            <Heading as="h2" size="h3" className="text-fj-ink">
              Where in Noida and NCR we work
            </Heading>
            <p className="mt-4 text-lg leading-relaxed text-fj-ink/80">
              Our clients range from Sector 18 retailers and cafes to IT firms in Sector 62 and 63,
              offices in Sector 132, media houses in Film City, and manufacturers and builders in
              Greater Noida and along the Expressway. Whether you need to{' '}
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
              , the same senior team handles it.{' '}
              You can also read our national guide to{' '}
              <a href="/digital-marketing" className="font-semibold text-[#B23E13] underline underline-offset-2">
                choosing a digital marketing agency in India
              </a>
              , or review our researched comparison of the{' '}
              <a href="/blog/best-ai-seo-agencies-india" className="font-semibold text-[#B23E13] underline underline-offset-2">
                top AI SEO agencies in India
              </a>
              , so you can compare before you commit.
            </p>
          </div>
        </section>

        <TestimonialsSection
          eyebrow="REAL RESULTS"
          headline="Feedback from owners we have worked with"
          region="in"
        />

        <FAQ
          eyebrow="QUESTIONS NOIDA OWNERS ACTUALLY ASK"
          headline="Noida digital marketing questions, answered"
          lead="Questions Noida buyers type into Google and ChatGPT, with direct answers."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        <FinalCTA
          variant="light"
          eyebrow="READY WHEN YOU ARE"
          headline="Find out which Noida enquiries are going to rivals"
          sub="Book a free call. We check your site, Maps listing and AI visibility against Noida competitors and tell you the three changes most likely to bring more leads."
          primaryCta={{ label: 'Get My Free Growth Plan', modal: true, region: 'in' }}
          secondaryCta={{ label: 'Check if AI tools recommend you', href: '/ai-visibility-checker' }}
          objectionHandler="No long contract. You keep the findings either way."
        />
      </main>

      <SiteFooter locale="in" />
    </>
  );
}

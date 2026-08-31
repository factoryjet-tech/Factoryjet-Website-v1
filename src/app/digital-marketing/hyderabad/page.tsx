import type { Metadata } from 'next';
import Breadcrumbs from '@/components/v2/Breadcrumbs';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import CityContextSection from '@/components/v2/CityContextSection';
import IndustriesGrid, { type IndustryCard } from '@/components/v2/IndustriesGrid';
import { type Pillar } from '@/components/v2/StrategicDarkSection';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import Heading from '@/components/v2/Heading';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

const CANONICAL = 'https://factoryjet.com/digital-marketing/hyderabad';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in Hyderabad | FactoryJet',
  description:
    'Looking for a digital marketing agency in Hyderabad? FactoryJet helps Hyderabad businesses get found on Google and AI tools like ChatGPT, and turns visitors into real enquiries. One senior in-house team for SEO, ads, websites, WhatsApp and more.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Digital Marketing Agency in Hyderabad | FactoryJet',
    description:
      'One senior in-house team that gets Hyderabad businesses found on Google and AI search, and turns clicks into enquiries. SEO, ads, websites, social, WhatsApp and more.',
    url: CANONICAL,
    images: [
      {
        url: 'https://factoryjet.com/images/services/digital-marketing/hyderabad/team.webp',
        width: 1216,
        height: 832,
        alt: 'FactoryJet digital marketing team for Hyderabad businesses',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency in Hyderabad | FactoryJet',
    description:
      'Get found on Google and AI search, and turn visitors into customers. One senior in-house team for Hyderabad businesses.',
    images: ['https://factoryjet.com/images/services/digital-marketing/hyderabad/team.webp'],
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
   Written for Hyderabad: HITEC City, Gachibowli, Banjara Hills, Genome
   Valley, Charminar and the neighbourhoods in between.
   ──────────────────────────────────────────────────────────────────────── */

const HERO_TRUST = [
  '500+ businesses helped',
  '12 years, 4 markets',
  'One senior in-house team',
  'Found on Google and AI search',
];

const STATS = [
  { value: '500+', label: 'Businesses helped', note: 'Across India, US, UK and UAE' },
  { value: '12 yrs', label: 'Years doing this', note: 'Not a new agency practising on you' },
  { value: 'In-house', label: 'Senior team', note: 'No work handed to freshers' },
  { value: '4', label: 'Countries served', note: 'India, US, UK and UAE' },
];

// Channel grid = the internal-link authority hub. Each card links into an
// existing FactoryJet service page so this Hyderabad page passes authority down.
const CHANNELS: IndustryCard[] = [
  {
    name: 'SEO (get found on Google)',
    description:
      'SEO means search engine optimisation. In plain words: showing up on Google when someone in Hyderabad searches to buy, without paying for each click.',
    linkLabel: 'Explore SEO',
    linkHref: '/seo',
  },
  {
    name: 'Websites that sell',
    description:
      'A fast, mobile-first website that loads quickly on Hyderabad networks and turns visitors into calls and enquiries, instead of just looking nice.',
    linkLabel: 'See web design',
    linkHref: '/web-design',
  },
  {
    name: 'Online stores',
    description:
      'Ecommerce means selling online. We build stores that are easy for customers to buy from and easy for you to run, whether you ship across Telangana or all of India.',
    linkLabel: 'See ecommerce',
    linkHref: '/services/ecommerce-development',
  },
  {
    name: 'AI search (get picked by ChatGPT)',
    description:
      'When people ask ChatGPT, Gemini or Google’s AI for a recommendation, we help your business be one of the answers. This newer skill is called GEO.',
    linkLabel: 'Explore AI SEO',
    linkHref: '/ai-seo',
  },
  {
    name: 'Chatbots and automation',
    description:
      'Smart helpers that reply to customers day and night and do repeat tasks for you, so your Hyderabad team saves hours every week.',
    linkLabel: 'See AI agents',
    linkHref: '/services/ai-agent-development',
  },
  {
    name: 'WhatsApp for business',
    description:
      'Answer customers and collect leads automatically on WhatsApp, the app nearly everyone in Hyderabad already uses every day.',
    linkLabel: 'See WhatsApp chatbot',
    linkHref: '/whatsapp-chatbot',
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
    feature: 'Local Google Maps and "near me" visibility',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
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
    feature: 'Knows Hyderabad areas and industries (HITEC City, pharma, real estate)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="ih" kind="yes" />,
    ],
  },
  {
    feature: 'Runs Google Ads and PPC (pay per click) for quick enquiries',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="yes" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="ih" kind="partial" />,
    ],
  },
  {
    feature: 'Handles social media and WhatsApp follow-up too',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="ih" kind="partial" />,
    ],
  },
  {
    feature: 'You keep full ownership of your website, Google and ad accounts',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="ih" kind="yes" />,
    ],
  },
  {
    feature: 'A senior person answers when you have a question',
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
      'Doing only SEO, or only ads, or only Instagram leaves gaps. A Hyderabad customer might find you on Google, check your Instagram, then message you on WhatsApp before they buy. We join the channels so nothing leaks between them.',
  },
  {
    icon: '\u{1F464}',
    title: 'Freshers learning on your business',
    body:
      'Hyderabad trains thousands of new marketers every year, and many agencies quietly hand your account to trainees while senior people only appear for the sales pitch. You pay for experience you never actually get. At FactoryJet, experienced people do the real work.',
  },
  {
    icon: '\u{1F916}',
    title: 'Ignoring AI search is a costly mistake',
    body:
      'Over 100 million Indians ask ChatGPT something every week, often "which company should I pick in Hyderabad". Agencies stuck on old-style SEO miss this completely. We get you found on Google and inside AI answers.',
  },
];

// Local market context for Hyderabad. Every figure below is a real, cited
// stat with a resolving outbound link (verified July 2026). These are market
// facts, not our prices. Sources: DataReportal Digital 2025 India, IBEF
// Telangana, and TechCrunch (Feb 2026, Sam Altman / OpenAI).
const HYD_MARKET_STATS = [
  {
    value: '806M',
    label:
      'people in India were online at the start of 2025, and more join every month. Your Hyderabad customers are already searching, scrolling and asking before they buy.',
    sourceUrl: 'https://datareportal.com/reports/digital-2025-india',
    sourceLabel: 'DataReportal 2025',
  },
  {
    value: 'Nearly 20%',
    label:
      'of all the offices global companies open in India (called global capability centres) now sit in Hyderabad, with 70+ added in a single year. This is a busy, competitive place to be found in.',
    sourceUrl: 'https://www.ibef.org/industry/telangana-presentation',
    sourceLabel: 'IBEF / Telangana',
  },
  {
    value: '100M',
    label:
      'Indians now use ChatGPT every week, and many ask it which business to pick. Most Hyderabad agencies still ignore AI answers, and that gap is your opening.',
    sourceUrl:
      'https://techcrunch.com/2026/02/15/india-has-100m-weekly-active-chatgpt-users-sam-altman-says/',
    sourceLabel: 'TechCrunch 2026',
  },
] as const;

// Listicle: which channels actually bring enquiries for which kind of
// Hyderabad business. A decision guide, not a service menu. Terms are drawn
// from live Hyderabad search data (local SEO, PPC, social media, GEO).
const CHANNELS_THAT_WORK = [
  {
    name: 'Local SEO and Google Maps',
    plain:
      'Local SEO means showing up in the little map with three or four businesses when someone searches "near me". Your Google Business Profile is the free listing that powers it.',
    bestFor:
      'Shops, clinics, salons and restaurants people can walk into. When someone in Banjara Hills searches "salon near me", this is what puts you in front of them.',
  },
  {
    name: 'SEO (getting found on Google for free)',
    plain:
      'SEO means shaping your website so Google shows it when people search for what you sell, without paying for each click. It builds slowly but keeps working month after month.',
    bestFor:
      'Businesses that want steady enquiries over time. If people search "seo company in hyderabad" or your service plus the city, this is how you appear.',
  },
  {
    name: 'Google Ads (PPC, pay per click)',
    plain:
      'PPC stands for pay per click. You only pay when someone actually clicks your ad. It can bring enquiries within days, so it fills the gap while SEO builds.',
    bestFor:
      'Anyone who needs enquiries quickly, or is in a crowded field where free rankings take time. Good for a new offer, an event, or a launch.',
  },
  {
    name: 'Social media (Instagram, Facebook, LinkedIn)',
    plain:
      'Posting and running ads on social media keeps you visible and builds trust before someone is ready to buy. It is where people check whether you look real.',
    bestFor:
      'Restaurants, boutiques, clinics and brands that people like to see and share. Many people search "social media marketing agency in hyderabad" for exactly this.',
  },
  {
    name: 'WhatsApp',
    plain:
      'WhatsApp is the app nearly everyone in Hyderabad already uses. You can answer questions and collect leads there, and even set up a helper that replies day and night.',
    bestFor:
      'Almost every business. It is usually where the quick back-and-forth happens after someone finds you on Google or Instagram.',
  },
  {
    name: 'Content (blogs and short videos)',
    plain:
      'Content marketing means helpful blogs and videos that answer the questions your customers ask before they buy. It quietly earns trust and helps your SEO at the same time.',
    bestFor:
      'Services where people research first, like doctors, builders, consultants and B2B companies near HITEC City and Gachibowli.',
  },
  {
    name: 'AI search (GEO, getting picked by ChatGPT)',
    plain:
      'GEO stands for generative engine optimisation. In plain words, it means getting your business named when people ask ChatGPT, Gemini or Google’s AI for a recommendation.',
    bestFor:
      'Any business whose customers ask AI tools before buying, and more do every month. Most local agencies ignore this, so it is an easy edge right now.',
  },
] as const;

// Named-competitor comparison, built from live DataForSEO ranking data for
// Hyderabad (location 2356, checked July 2026). Honest, positive, with open
// self-disclosure. Each name genuinely ranks for Hyderabad search terms.
const AGENCIES = [
  {
    name: 'FactoryJet',
    bestFor:
      'Small and mid-size Hyderabad businesses that want one senior team across website, Google, local maps, ads and AI search, with plain-English reports. (Yes, that is us. We include ourselves openly and let the comparison speak for itself.)',
    isUs: true,
  },
  {
    name: 'Digital Mojo',
    bestFor:
      'The most visible Hyderabad brand on Google for digital marketing. A good fit for larger brands that want broad digital plus advertising and creative under one roof.',
  },
  {
    name: 'Emblix Solutions',
    bestFor:
      'Businesses whose main focus is paid advertising and ad-agency style campaigns across Google and social media.',
  },
  {
    name: '3DM Agency',
    bestFor:
      'Companies that care most about performance marketing, meaning measurable, results-driven ad campaigns you can track to enquiries.',
  },
  {
    name: 'BeTopSEO',
    bestFor:
      'Businesses whose single biggest need is SEO, that is steady Google rankings, more than the full marketing mix.',
  },
  {
    name: 'Web Rocz',
    bestFor:
      'Local shops and service businesses that want Google Business Profile, "near me" visibility and a website handled together.',
  },
];

const JOURNEY: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'A free, no-pressure chat',
    description:
      'We learn about your Hyderabad business, your customers and your goals. No jargon, no hard sell.',
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
      'Website, Google, local maps, ads, AI search, whatever you picked. Our senior team does the actual work.',
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
  { key: 'ads', label: 'Ads and social' },
  { key: 'local', label: 'Hyderabad' },
  { key: 'results', label: 'Results and reports' },
  { key: 'trust', label: 'Trust and safety' },
  { key: 'ai', label: 'AI and the future' },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'choosing',
    question: 'Which is the best digital marketing agency in Hyderabad?',
    answer:
      'There is no single agency that is best for every business in Hyderabad. A pharma brand near Genome Valley, a boutique in Jubilee Hills and a cloud kitchen in Gachibowli all need very different help. The best agency for you is the one that puts a senior person on your account, covers the few channels your customers actually use, and shows you results in plain numbers. Lower on this page we compare the agencies that actually rank in Hyderabad, including ourselves, so you can pick the right fit instead of the loudest name.',
  },
  {
    category: 'choosing',
    question: 'How do I choose the right digital marketing agency in Hyderabad?',
    answer:
      'Ask three plain questions before you sign anything. One: who will do my work day to day, a senior person or a fresher? Two: what exactly will I get each month, in words I can understand? Three: can you show me real results for a business like mine? Hyderabad has hundreds of agencies, and the ones that answer all three clearly are usually the safe choice.',
  },
  {
    category: 'choosing',
    question: 'Can I trust the "top 10 digital marketing agencies in Hyderabad" lists?',
    answer:
      'Be careful with them. Many of those "top 10" and "top 22" lists are directories where agencies pay to appear, or blog posts an agency wrote about itself. They are a fine starting point for names, but do not treat the order as gospel. Check each agency’s own Google reviews, look at real work they have done, and ask to speak to a current client. That tells you far more than a ranked list.',
  },
  {
    category: 'choosing',
    question: 'How do I check an agency’s reviews and reputation before hiring?',
    answer:
      'Start with their Google Business Profile reviews, because those are hard to fake in bulk. Then ask the agency directly for two or three clients you can call or message. A confident team says yes without hesitating. Also look at whether their own website shows up on Google. An agency that cannot get itself found will struggle to get you found.',
  },
  {
    category: 'choosing',
    question: 'What is the difference between a digital marketing agency and an SEO company in Hyderabad?',
    answer:
      'An SEO company focuses on one thing: getting you found on Google’s free results (SEO means search engine optimisation, plainly, showing up on Google without paying for each click). A digital marketing agency covers the whole picture: your website, SEO, paid ads, social media, WhatsApp and now AI search. If your only goal is Google rankings, an SEO company is enough. If you want more calls and enquiries from every direction, an agency joins it all together.',
  },
  {
    category: 'services',
    question: 'What does a digital marketing agency in Hyderabad actually do?',
    answer:
      'In simple words, it helps more of the right people in and around Hyderabad find your business and become customers. That means building or fixing your website, getting you to show up on Google when someone searches to buy, running ads, posting on Instagram and Facebook, replying on WhatsApp, and now getting recommended by AI tools like ChatGPT. Every task points at one goal: more calls, more enquiries, more sales.',
  },
  {
    category: 'services',
    question: 'What are the 7 types of digital marketing?',
    answer:
      'People usually list them as: search engine optimisation (SEO, showing up on Google for free), pay-per-click ads (paying Google or Meta to show your business), social media marketing (Instagram, Facebook, LinkedIn), content marketing (blogs and videos that pull people in), email marketing, influencer or affiliate marketing, and now AI search or GEO (getting picked by tools like ChatGPT). A good agency uses the few that fit your business, not all seven at once.',
  },
  {
    category: 'services',
    question: 'What are the 4 types of digital marketing?',
    answer:
      'When people shorten the list to four, they usually mean: SEO (free Google traffic), paid ads (Google and social media ads), social media marketing, and content marketing (blogs, videos and email). Think of these as the four main buckets. Everything else, including WhatsApp and AI search, sits inside or beside them.',
  },
  {
    category: 'services',
    question: 'What does SEO actually mean, in plain words?',
    answer:
      'SEO stands for search engine optimisation. In plain words, it means shaping your website and its content so it shows up higher on Google when someone searches for what you sell, without paying for each click. If someone in Kondapur searches "best dentist near me" and your clinic appears at the top for free, that is SEO working.',
  },
  {
    category: 'services',
    question: 'What are the 4 types of SEO?',
    answer:
      'The four usual types are: on-page SEO (fixing the words, titles and structure on your own pages), off-page SEO (earning links and mentions from other trusted sites), technical SEO (making your site fast and easy for Google to read), and local SEO (showing up in map results and "near me" searches, which matters a lot for Hyderabad shops and clinics).',
  },
  {
    category: 'services',
    question: 'Which is the best SEO company in Hyderabad?',
    answer:
      'Same honest answer as with agencies: there is no single best one. Some Hyderabad firms are strong at local SEO and Google Maps, others at national rankings. The best SEO partner for you is the one that explains its plan in plain words, never promises a "guaranteed number one in 7 days", and shows real ranking gains for businesses like yours. Any firm promising instant top rankings is not being straight with you.',
  },
  {
    category: 'services',
    question: 'Do you do social media marketing in Hyderabad too?',
    answer:
      'Yes. Social media (posting and running ads on Instagram, Facebook and LinkedIn) is one part of the mix we handle, not a separate service you have to shop for elsewhere. For many Hyderabad businesses, restaurants, boutiques and clinics, social media builds trust and keeps you visible, while Google and WhatsApp bring the quick enquiries. We use the ones that suit your customers.',
  },
  {
    category: 'services',
    question: 'What does an SEO specialist actually do for my business?',
    answer:
      'An SEO specialist is the person who does the day-to-day work of getting you found on Google. They research what your customers type, fix your website so Google understands it, guide your content, earn trustworthy links, and track your rankings over time. In a good setup, this is an experienced person, not a fresher, quietly improving your visibility month after month.',
  },
  {
    category: 'local',
    question: 'Do you only work with businesses in Hyderabad?',
    answer:
      'No. Almost all of this work happens online, so we help businesses across Hyderabad, Telangana and the rest of India, and in the US, the UK and the UAE too. Being based in Hyderabad is not a requirement to work with us, and you do not need us sitting in the same city. What matters is that we understand your customers and reply quickly, both of which we do remotely.',
  },
  {
    category: 'local',
    question: 'Does my Hyderabad business need to show up on Google Maps and "near me" searches?',
    answer:
      'If people can walk into your business, then yes, it is one of the most valuable things you can fix. When someone in Banjara Hills searches "salon near me" or "clinic near me", Google shows a small map with three or four businesses. Getting into that map (this is called local SEO and your Google Business Profile) often brings more calls than anything else for shops, clinics, salons and restaurants across Hyderabad.',
  },
  {
    category: 'local',
    question: 'Do you understand Hyderabad industries like pharma, IT and real estate?',
    answer:
      'Yes. Hyderabad is not one market, it is many. A pharma or biotech firm near Genome Valley, an IT services company in HITEC City, a builder selling flats in Kokapet and Tellapur, and a jewellery shop near Charminar all need very different words and different channels. We start by learning your specific business before we touch anything, so the plan fits your customers, not a template.',
  },
  {
    category: 'local',
    question: 'I could not find your phone number on the agency lists. How do I actually reach you?',
    answer:
      'The quickest way is the short form on this page. Tell us a little about your business and we will get back to you for a free, no-pressure chat, with no call-centre queue and no hard sell. We prefer this over a public number that rings all day, because it lets a senior person actually read about your business before we talk.',
  },
  {
    category: 'results',
    question: 'How much does digital marketing cost in Hyderabad?',
    answer:
      'It depends entirely on the work involved, and here is the honest reason: managing one social media page and running a full website-plus-Google-plus-ads plan are completely different jobs. Anyone promising a one-size answer before understanding your business is guessing. The better question is what result you want, more calls, more online orders, more enquiries, and what that is worth to you. In a free chat we map out what actually moves the needle for your business, then talk specifics.',
  },
  {
    category: 'results',
    question: 'How much does SEO cost in Hyderabad?',
    answer:
      'Same honest answer: it depends on how competitive your market is and how much ground you need to make up. Getting a local clinic found in one part of Hyderabad is a smaller job than ranking a national brand across India. Rather than a number that means nothing on its own, we would rather show you what the work involves and what results are realistic for your situation, then let you decide.',
  },
  {
    category: 'results',
    question: 'How long does digital marketing take to show results?',
    answer:
      'Paid ads can bring enquiries within days of switching on. SEO (free Google traffic) usually takes three to six months to build, and longer in crowded markets. Social media and content also need a few months to earn trust. Anyone promising big results in a week, especially "top of Google in 7 days", is not being honest with you.',
  },
  {
    category: 'results',
    question: 'How will I know it is actually working?',
    answer:
      'You get a simple monthly report a normal person can read, not a wall of confusing charts. It answers three things: how many people visited, how many enquiries or calls came in, and what we did that month. The only numbers that truly matter are real leads (calls, form fills, WhatsApp messages), not likes or views. If those are not growing over time, we change the plan.',
  },
  {
    category: 'trust',
    question: 'Who will actually do my work, a senior person or a fresher?',
    answer:
      'This is the question most people forget to ask, and it matters a lot in Hyderabad. The city trains thousands of new marketers every year, and many agencies quietly hand your account to trainees while senior people only show up for the sales pitch. Always ask who runs your account day to day. At FactoryJet, experienced people do the real work, not freshers practising on your business.',
  },
  {
    category: 'trust',
    question: 'What are the warning signs of a bad digital marketing agency?',
    answer:
      'Watch for these: a "guaranteed number one on Google" or "first page in 7 days" (nobody can honestly promise that), offers that seem too good to be true, big confusing words instead of clear answers, no real examples of past work, and a long lock-in contract before anything is proven. Even one of these is a good reason to slow down and ask more questions.',
  },
  {
    category: 'trust',
    question: 'Do agencies lock you into long contracts?',
    answer:
      'Some do, and it is often to protect themselves rather than you. A confident agency is happy to prove its value month by month. Always ask how easy it is to leave if you are not happy, and keep ownership of your own accounts (website, Google, social media and ads). If leaving is made difficult, ask yourself why they built it that way.',
  },
  {
    category: 'ai',
    question: 'Should my Hyderabad business show up in AI tools like ChatGPT?',
    answer:
      'Yes, and most agencies are not doing this yet, which is your opening. More than 100 million Indians now use tools like ChatGPT every week, and many ask things like "which company should I hire in Hyderabad". Getting recommended by AI is a newer skill called GEO (generative engine optimisation, plainly, getting picked by AI like ChatGPT). We build it into our work so you are found on Google and inside AI answers.',
  },
  {
    category: 'ai',
    question: 'What is answer engine optimisation (AEO), and does my business need it?',
    answer:
      'Answer engine optimisation, or AEO, simply means shaping your website so AI tools and Google’s instant answers pick your business as the reply. It is closely related to GEO. If your customers are the kind of people who ask ChatGPT or Google a question before buying, and more of them are every month, then yes, you want it. Not sure if AI already mentions you? We can check for free.',
  },
  {
    category: 'ai',
    question: 'Is SEO dead now that AI and ChatGPT answer people’s questions?',
    answer:
      'No, but it is changing. People still open Google millions of times a day in Hyderabad, so being found there still matters. What is new is that many people now also ask ChatGPT or Google’s AI first, and get one short answer instead of a list of links. So the smart move is not to drop SEO, it is to do both: stay strong on Google and also get named inside AI answers. Any agency telling you SEO is finished, or that AI makes it pointless, is oversimplifying.',
  },
  {
    category: 'ads',
    question: 'What is PPC, and do you run pay-per-click ads for Hyderabad businesses?',
    answer:
      'PPC stands for pay per click. It means ads on Google or social media where you only pay when someone actually clicks, not just for showing the ad. Yes, we set up and run these for Hyderabad businesses. The big advantage is speed: while SEO (free Google rankings) takes months to build, PPC can bring enquiries within days. We usually use it to fill the gap early on, or when you have a launch or offer that needs attention now.',
  },
  {
    category: 'ads',
    question: 'Which is the best agency for Google Ads in Hyderabad?',
    answer:
      'There is no single best one, same as with digital marketing overall. A good Google Ads partner shows you exactly where your money goes, tracks real enquiries (calls, forms, WhatsApp messages) rather than just clicks, and does not lock you into a long contract. Be careful with anyone who hides the account from you or will not say what is working. You should always be able to see and keep your own Google Ads account.',
  },
  {
    category: 'ads',
    question: 'What is performance marketing, and how is it different from digital marketing?',
    answer:
      'Performance marketing is a part of digital marketing where every rupee is judged by a real result, usually an enquiry or a sale, not by likes or views. Digital marketing is the whole picture (website, SEO, social media, ads, WhatsApp, AI search). Performance marketing is the results-first slice of it, mostly paid ads you can measure end to end. Many Hyderabad businesses search for a "performance marketing agency" when what they really want is enquiries they can track, which we build into everything we do.',
  },
  {
    category: 'ads',
    question: 'Which is the best social media marketing agency in Hyderabad?',
    answer:
      'Again, no single name is best for everyone. The right social media partner for you understands your customers, posts things people actually want to see, and can show that the work leads to real enquiries, not just followers. For many Hyderabad restaurants, boutiques and clinics, social media builds trust while Google and WhatsApp bring the quick enquiries. We handle social media as one part of the mix, so it works together with everything else instead of on its own.',
  },
  {
    category: 'ads',
    question: 'What is the 70/20/10 rule in social media?',
    answer:
      'It is a simple guide for what to post, not a strict law. The idea: about 70 percent of your posts should be helpful or interesting content that builds trust, about 20 percent should be things worth sharing from others, and about 10 percent should directly promote your business. The point is to be useful most of the time so people do not tune you out. We treat it as a rough guide and adjust it to what actually gets your Hyderabad audience to respond.',
  },
  {
    category: 'services',
    question: 'Do you offer branding, logo and design work in Hyderabad too?',
    answer:
      'Yes. Branding is how your business looks and feels: your logo, colours, and the way you speak to customers. It is not separate from marketing, it is the base that makes everything else look trustworthy. When we build a website or run social media for a Hyderabad business, we keep the branding consistent so people recognise you across Google, Instagram, WhatsApp and your shopfront. If you need a fresh logo or a tidy-up of an old one, we can help with that as part of the work.',
  },
  {
    category: 'services',
    question: 'What is content marketing, and does my Hyderabad business need it?',
    answer:
      'Content marketing means creating helpful blogs, guides and short videos that answer the questions your customers ask before they buy. Instead of shouting "buy from us", it earns trust by being genuinely useful. It also helps your SEO, because Google likes pages that answer real questions well. It suits businesses where people research first, like doctors, builders, consultants and B2B companies. For a small shop, a strong Google Business Profile and a few good posts may matter more. We tell you honestly which is worth your time.',
  },
  {
    category: 'services',
    question: 'What is the difference between SEO and local SEO?',
    answer:
      'Regular SEO is about ranking on Google for searches from anywhere, like "best running shoes". Local SEO is about ranking for searches tied to a place, like "running shoes store near me" or "dentist in Kondapur", and about showing up in the little Google Map with a few businesses. For any Hyderabad business people can visit, local SEO and your Google Business Profile usually bring more calls than anything else, so it is often where we start.',
  },
  {
    category: 'choosing',
    question: 'Should I hire an SEO freelancer or an SEO agency in Hyderabad?',
    answer:
      'A freelancer can be a good, low-fuss choice if your need is small and clear, like fixing one website or improving a handful of pages. The risks are simple: one person can only do so much, and if they get busy or move on, your work stalls. An agency gives you a team and cover across more channels, but you have to check that a senior person, not a fresher, actually runs your account. The honest test is the same for both: can they explain the plan in plain words and show real results for a business like yours?',
  },
  {
    category: 'results',
    question: 'What are the 5 main marketing strategies?',
    answer:
      'People phrase them in different ways, but they usually come down to five simple ideas. One: know exactly who your customer is. Two: be easy to find where they already look (Google, maps, social media, AI tools). Three: look trustworthy when they get there, with a clear website and real reviews. Four: follow up quickly, often on WhatsApp, so warm enquiries do not go cold. Five: measure what actually brings enquiries and do more of it. Everything else is detail hanging off these five.',
  },
  {
    category: 'local',
    question: 'I keep seeing "digital marketing jobs in Hyderabad" and "for freshers" in search results. Are you hiring or a training institute?',
    answer:
      'No. A lot of Hyderabad searches around this topic are from people looking for jobs, courses or freshers to hire, so those results mix in. We are none of those. We are an agency that does the marketing work for businesses, so you get more customers. And it matters here: because the city trains so many new marketers, some agencies quietly put freshers on your account. We do the opposite, experienced people do your actual work.',
  },
  {
    category: 'results',
    question: 'What is a realistic goal for the first three months?',
    answer:
      'It depends on which channels you start with. If we switch on paid ads, you can expect enquiries within the first few weeks, and we spend the early period learning which ones convert. SEO and social media are slower, so in the first three months the honest goal is groundwork: a faster website, a fixed Google Business Profile, better rankings starting to move, and a clear monthly report you can read. Real, steady growth from free channels usually shows more clearly from month three onward. Anyone promising a flood of customers in week one is not being straight with you.',
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
  '@id': 'https://factoryjet.com/digital-marketing/hyderabad#webpage',
  url: 'https://factoryjet.com/digital-marketing/hyderabad',
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
  name: 'Digital Marketing Services in Hyderabad',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet Technologies',
    url: 'https://factoryjet.com',
    telephone: '+919699977699',
    address: { '@type': 'PostalAddress', addressCountry: 'IN' },
  },
  areaServed: { '@type': 'City', name: 'Hyderabad' },
  serviceType: 'Digital Marketing',
  description:
    'Integrated digital marketing for Hyderabad businesses: SEO, local Google Maps, paid ads, social media, websites, WhatsApp and AI search, handled by one senior in-house team.',
};

const agenciesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Top digital marketing agencies in Hyderabad (July 2026)',
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
  name: 'Digital Marketing Agency in Hyderabad | FactoryJet',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
};

export default function HyderabadDigitalMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="hyd-dm-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="hyd-dm-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="hyd-dm-agencies-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agenciesSchema) }}
      />
      <script
        id="hyd-dm-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Digital Marketing', url: 'https://factoryjet.com/digital-marketing' },
          { name: 'Hyderabad', url: CANONICAL },
        ]}
      />

      <SiteHeader locale="in" />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Digital Marketing', url: 'https://factoryjet.com/digital-marketing' },
          { name: 'Hyderabad', url: CANONICAL },
        ]} />
        <Hero
          eyebrow="DIGITAL MARKETING AGENCY · HYDERABAD"
          headline="A Digital Marketing Agency in Hyderabad That Brings You Real Customers"
          lead="We help Hyderabad businesses get found on Google and AI tools like ChatGPT, and turn visitors into real enquiries. One senior in-house team, plain-English reports, no jargon."
          formSlot={<HeroInlineForm region="in" source="in_hyderabad_digital_marketing_hero" />}
          secondaryCta={{ label: 'Get a Free Growth Plan', modal: true as const, region: 'in' as const }}
          trustItems={HERO_TRUST}
          accent="orange"
          rightSlot={
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div aria-hidden className="absolute -right-3 -top-3 h-24 w-24 rounded-2xl bg-[#F05A28]/10" />
              <div aria-hidden className="absolute -bottom-4 -left-4 h-28 w-28 rounded-2xl bg-fj-ink/[0.04]" />
              <div className="relative overflow-hidden rounded-2xl border border-fj-neutral-200 shadow-sm">
                <img
                  src="/images/services/digital-marketing/hyderabad/hero.webp"
                  alt="A digital marketing professional in a modern Hyderabad office"
                  width={832}
                  height={1216}
                  fetchPriority="high"
                  className="aspect-[3/4] w-full object-cover"
                />
                <div className="absolute bottom-3 left-3 rounded-xl bg-white/95 px-4 py-2.5 shadow-sm">
                  <p className="font-fj-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[#B23E13]">
                    Serving Hyderabad and all of India
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
              So, which is the best digital marketing agency in Hyderabad?
            </Heading>
            <p className="mt-4 text-lg leading-relaxed text-fj-ink/80">
              The honest answer: there is no single best agency for every Hyderabad business. The
              right one for you depends on your size, your goals and, most of all, who actually does
              your work. For small and mid-size Hyderabad businesses that want one senior team to
              handle everything, from your website to Google to Google Maps to AI search, FactoryJet
              is a strong choice. Below we compare the agencies that genuinely rank in Hyderabad,
              including ourselves, so you can decide for yourself.
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

        <BigThreeTrustBlock
          variant="statement"
          eyebrow="WHAT MAKES ONE THE BEST"
          headline="The best digital marketing agency in Hyderabad is not the loudest name. It is a senior team on the right channels, with honest reporting."
        />

        <ServiceExplanation
          eyebrow="WHAT WE DO, IN PLAIN WORDS"
          headline="What a digital marketing agency in Hyderabad actually does for you"
          lead="Strip away the buzzwords and it comes down to one thing: helping more of the right people around Hyderabad find your business and become customers."
          body={
            <>
              <p>
                Some agencies make this sound complicated on purpose. It is not. Your customers are
                already searching on Google, scrolling Instagram, and now asking ChatGPT for
                recommendations. Our job is to make sure your business shows up in those moments,
                whether someone is in Madhapur, Kukatpally or Secunderabad, and that the person who
                clicks actually turns into a call, a message or a sale.
              </p>
              <p>
                We do that with one senior in-house team, not a group of freshers. We join the pieces
                together: a fast website, showing up on Google (SEO), your Google Maps listing, ads
                when you need quick results, social media, WhatsApp follow-up, and getting picked by
                AI tools. Not every business needs all of it. We choose the few that will bring you the
                most enquiries, and we tell you honestly which ones will not.
              </p>
            </>
          }
          rightSlot={
            <div className="relative">
              <div aria-hidden className="absolute -bottom-4 -right-4 h-28 w-28 rounded-2xl bg-[#F05A28]/10" />
              <img
                src="/images/services/digital-marketing/hyderabad/team.webp"
                alt="FactoryJet digital marketing team collaborating in a Hyderabad office"
                width={1216}
                height={832}
                loading="lazy"
                className="relative aspect-[4/3] w-full rounded-2xl border border-fj-neutral-200 object-cover shadow-sm"
              />
            </div>
          }
        />

        {/* Local market context: real, cited stats with resolving outbound links. */}
        <CityContextSection
          eyebrow="THE HYDERABAD MARKET, IN NUMBERS"
          headline="Hyderabad is a crowded, fast market. Being easy to find is how a small business wins here."
          leadParagraphs={[
            'Hyderabad is not one small market, it is many busy ones stacked together: pharma and biotech near Genome Valley, IT and startups across HITEC City and Gachibowli, builders selling flats in Kokapet and Tellapur, and thousands of shops, clinics and restaurants from Banjara Hills to Secunderabad. Your customers here have plenty of choice, so the business that is easiest to find usually wins the enquiry.',
            'The numbers on the right tell the story. Almost everyone your business wants to reach is already online, the city is thick with companies competing for attention, and a huge and growing group of people now ask AI tools before they buy. You do not need to be on every channel. You need to be found in the few places your customers actually look.',
            'That is the whole job we do. We learn your specific Hyderabad business first, pick the few channels that fit your customers, and get you found on both Google and AI answers, with a senior team doing the real work and a plain monthly report you can read.',
          ]}
          bodySlot={
            <>
              <div className="border-l-2 py-1 pl-5" style={{ borderLeftColor: '#F05A28' }}>
                <p
                  className="fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  In a market this crowded, quietly being findable beats loudly being everywhere.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {['HITEC City', 'Gachibowli', 'Madhapur', 'Banjara Hills', 'Jubilee Hills', 'Kondapur', 'Kukatpally', 'Secunderabad'].map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center rounded-full border border-[#F05A28]/25 bg-[#F05A28]/10 px-3 py-1 font-fj-mono font-medium text-[#B23E13]"
                    style={{ fontSize: '10px', letterSpacing: '0.08em' }}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </>
          }
          stats={HYD_MARKET_STATS}
        />

        <IndustriesGrid
          variant="cards"
          eyebrow="EVERYTHING IN ONE PLACE"
          headline="One team for every part of your online growth"
          lead="Instead of hiring five different people in Hyderabad, you get one senior team that covers the whole picture. Each of these links to how we do it."
          sectors={CHANNELS}
        />

        {/* Second service explanation: our approach, specific to Hyderabad. */}
        <ServiceExplanation
          eyebrow="OUR APPROACH FOR HYDERABAD"
          headline="How we grow Hyderabad businesses: SEO, local maps, ads and AI search, joined up"
          lead="Most agencies sell you a channel. We start with your business and your customers, then pick the few channels that will actually bring you enquiries, and join them so nothing leaks between them."
          reverseOnDesktop
          body={
            <>
              <p>
                We begin every Hyderabad project the same way: by learning who your customers are and
                where they already look. A pharma firm near Genome Valley, a boutique in Jubilee Hills
                and a cloud kitchen in Gachibowli need very different plans, so we never start from a
                template. Once we understand your business, we choose the handful of channels that fit
                and skip the ones that would only look busy.
              </p>
              <p>
                Then we join them up. Someone might find you on Google (SEO), check your Instagram,
                and message you on WhatsApp before they buy. If those pieces are run by different
                people who never talk, enquiries slip through the gaps. One senior in-house team runs
                all of it together, so a person who searches "seo company in hyderabad" or your service
                plus the city has a smooth path from first click to first message.
              </p>
              <p>
                Every month you get a plain report: how many people visited, how many real enquiries
                came in (calls, forms, WhatsApp messages), and what we did. We do more of what brings
                you leads and drop what does not. No jargon, no wall of confusing charts, and no
                fresher quietly practising on your business.
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
                borderTopWidth: '3px',
                borderTopColor: '#F05A28',
              }}
            >
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p
                  className="font-fj-mono font-medium uppercase text-[#B23E13]"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  What our senior team handles for you
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100 px-7">
                {[
                  { item: 'Getting found on Google', note: 'SEO, the free search results' },
                  { item: 'Google Maps and "near me"', note: 'local SEO + your Business Profile' },
                  { item: 'A website that turns clicks into calls', note: 'fast on Hyderabad mobile networks' },
                  { item: 'Google Ads when you need speed', note: 'PPC, you pay only per click' },
                  { item: 'Social media and WhatsApp', note: 'trust, then quick follow-up' },
                  { item: 'Getting picked by AI answers', note: 'GEO, for ChatGPT and Google AI' },
                ].map((row) => (
                  <div key={row.item} className="flex items-start gap-3 py-3.5">
                    <span
                      className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#F05A28]/10"
                      aria-hidden="true"
                    >
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 6.2l2.2 2.2 4.6-5" stroke="#B23E13" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-fj-body text-[0.9375rem] font-semibold text-fj-ink">{row.item}</p>
                      <p className="font-fj-body text-[0.8125rem] leading-relaxed text-fj-neutral-600">{row.note}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-7 py-5">
                <div className="mb-2 h-[3px] w-8 rounded-full" style={{ background: '#F05A28' }} aria-hidden="true" />
                <p className="fj-display font-semibold text-fj-ink" style={{ fontSize: '1rem', lineHeight: 1.3, letterSpacing: '-0.02em' }}>
                  Not every business needs all of it. We pick the few that pay off.
                </p>
              </div>
            </div>
          }
        />

        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs a traditional agency vs a freelancer vs your own team"
          lead="There is no single right answer for every business. Here is an honest look at how the options differ, so you can pick what fits you."
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
        />

        {/* Listicle: which channels actually bring enquiries for which business. */}
        <section className="border-y border-fj-ink/10 bg-white px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#B23E13]">
              WHAT ACTUALLY WORKS HERE
            </p>
            <Heading as="h2" size="h2" className="text-fj-ink">
              The digital marketing channels that actually work for Hyderabad businesses
            </Heading>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fj-ink/80">
              Forget the endless "top 10 digital marketing agency in Hyderabad" lists for a moment.
              The real question is which channels bring enquiries for a business like yours. Here is a
              plain guide, with every term explained, so you can see where your effort should go.
            </p>

            <ol className="mt-10 space-y-4">
              {CHANNELS_THAT_WORK.map((c, i) => (
                <li key={c.name} className="flex gap-4 rounded-2xl border border-fj-ink/10 bg-fj-cream p-5 md:p-6">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#B23E13] text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-fj-ink">{c.name}</h3>
                    <p className="mt-1 leading-relaxed text-fj-ink/75">{c.plain}</p>
                    <p className="mt-2 leading-relaxed text-fj-ink/75">
                      <span className="font-semibold text-fj-ink">Best for: </span>
                      {c.bestFor}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-6 text-sm leading-relaxed text-fj-ink/70">
              You almost never need all seven. For most Hyderabad businesses, two or three of these,
              chosen for your customers and run well together, bring far more enquiries than doing a
              little of everything.
            </p>
          </div>
        </section>

        {/* Why marketing money gets wasted: light version (kept off dark to hold the
            page to a single dark section, which is the testimonials block). */}
        <section
          className="px-6 py-16 md:px-8 md:py-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.055) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            backgroundColor: '#FAFAF7',
          }}
        >
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#B23E13]">
              WHY MONEY GETS WASTED
            </p>
            <Heading as="h2" size="h2" className="text-fj-ink">
              Three reasons digital marketing spend disappears in Hyderabad
            </Heading>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fj-ink/80">
              If past marketing did not work, it is usually one of these, and all three are
              avoidable once you know to look for them.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {PILLARS.map((p, i) => (
                <div key={p.title} className="rounded-2xl border border-fj-ink/10 bg-white p-6">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F05A28]/10 font-fj-mono text-sm font-bold text-[#B23E13]">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-fj-ink">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-fj-ink/75">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mid-page quote CTA. */}
        <FinalCTA
          variant="light"
          eyebrow="TALK TO US"
          headline="Want an honest plan for your Hyderabad business?"
          sub="Tell us a little about your business and your goals. We will look at where your Hyderabad customers are and send back a clear, simple plan you can use, in plain words, with no jargon and no hard sell."
          primaryCta={{ label: 'Get my free growth plan', modal: true, region: 'in' }}
          secondaryCta={{ label: 'Check if AI tools recommend you', href: '/ai-visibility-checker' }}
        />

        {/* Named-competitor comparison: the honest "who is best for what" listicle. */}
        <section className="bg-fj-cream px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#B23E13]">
              THE TOP HYDERABAD AGENCIES, COMPARED HONESTLY
            </p>
            <Heading as="h2" size="h2" className="text-fj-ink">
              The best digital marketing agencies in Hyderabad, and who each one suits
            </Heading>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fj-ink/80">
              We looked at which agencies actually rank on Google for digital marketing in Hyderabad
              using live search data in July 2026, and what each is known for. We include ourselves
              and say so openly, because hiding it would be the opposite of honest.
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
              A quick note on fairness: every agency here is a genuine, capable Hyderabad team. The
              "best for" lines are our honest read of who each one suits, based on their public work
              and the search terms they rank for. The right pick is the one that matches your
              business, not the one that shouts loudest.
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

        {/* Reach across Hyderabad (plain language + safe internal links to hubs). */}
        <section className="border-y border-fj-ink/10 bg-white px-6 py-14 md:px-8 md:py-16">
          <div className="mx-auto max-w-3xl">
            <Heading as="h2" size="h3" className="text-fj-ink">
              We help businesses grow across Hyderabad, in every area
            </Heading>
            <p className="mt-4 text-lg leading-relaxed text-fj-ink/80">
              Because the work happens online, your area does not limit us. We help shops, clinics,
              service businesses and brands in HITEC City, Gachibowli, Madhapur, Banjara Hills,
              Jubilee Hills, Kondapur, Kukatpally, Secunderabad and the neighbourhoods in between.
              Whether you need to{' '}
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
          headline="What business owners say after working with us"
          region="in"
        />

        <FAQ
          eyebrow="QUESTIONS PEOPLE ACTUALLY ASK"
          headline="Digital marketing in Hyderabad, answered in plain words"
          lead="Real questions from real Hyderabad searches, answered simply, with no jargon and no sales spin."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        <FinalCTA
          variant="light"
          eyebrow="READY WHEN YOU ARE"
          headline="Want to see how many customers you are missing in Hyderabad?"
          sub="Book a free, no-pressure chat. We will look at your website and where your Hyderabad customers are, and tell you honestly what will bring you more enquiries, even if we never work together."
          primaryCta={{ label: 'Get My Free Growth Plan', modal: true, region: 'in' }}
          secondaryCta={{ label: 'Check if AI tools recommend you', href: '/ai-visibility-checker' }}
          objectionHandler="No jargon. No long contract. Just an honest plan you can use straight away."
        />
      </main>

      <SiteFooter locale="in" />
    </>
  );
}

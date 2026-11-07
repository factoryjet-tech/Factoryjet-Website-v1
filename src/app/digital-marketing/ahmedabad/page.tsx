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

const CANONICAL = 'https://factoryjet.com/digital-marketing/ahmedabad';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in Ahmedabad | FactoryJet',
  description:
    'Digital marketing agency in Ahmedabad for textile, pharma, engineering and export firms. SEO, Google Ads, WhatsApp and AI search, run by one senior team.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Digital Marketing Agency in Ahmedabad | FactoryJet',
    description:
      'Digital marketing for Ahmedabad traders, makers and exporters. Get found on Google, Google Maps and AI answers, and turn searches into enquiries.',
    url: CANONICAL,
    images: [
      {
        url: 'https://factoryjet.com/images/services/digital-marketing/ahmedabad/hero.webp',
        width: 832,
        height: 1216,
        alt: 'FactoryJet: Digital Marketing Agency in Ahmedabad',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency in Ahmedabad | FactoryJet',
    description:
      'SEO, ads and AI search for Ahmedabad traders, makers and exporters. One senior team.',
    images: ['https://factoryjet.com/images/services/digital-marketing/ahmedabad/hero.webp'],
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
   Ahmedabad city page. Plain language, no pricing anywhere. Every jargon word
   is explained the first time it appears. Copy rewritten 7 Nov 2026 around
   Ahmedabad's own business mix (textiles, pharma and chemicals, engineering,
   family trading firms, exporters, GIFT City, SG Highway real estate, food
   brands). Competitor names come from live search data pulled July 2026 for
   "digital marketing agency in ahmedabad" and "seo company in ahmedabad".
   ──────────────────────────────────────────────────────────────────────── */

const HERO_TRUST = [
  '500+ businesses helped',
  '12 years of experience',
  'Senior people on every account',
  'Visible on Google, Maps and AI answers',
];

const STATS = [
  { value: '500+', label: 'Businesses helped', note: 'In India, the US, the UK and the UAE' },
  { value: '12 yrs', label: 'Years doing this', note: 'Long enough to have seen most mistakes' },
  { value: 'In-house', label: 'Senior team', note: 'Your account stays with experienced hands' },
  { value: '4', label: 'Countries served', note: 'India, the US, the UK and the UAE' },
];

// Channel grid = the internal-link authority hub. Each card links into an
// existing FactoryJet service page so this Ahmedabad page passes authority down.
const CHANNELS: IndustryCard[] = [
  {
    name: 'SEO (get found on Google)',
    description:
      'Search engine optimisation puts your pages in front of buyers who type "fabric wholesaler Ahmedabad" or "pump manufacturer Gujarat", and you pay nothing per visit.',
    linkLabel: 'Explore SEO',
    linkHref: '/seo',
  },
  {
    name: 'Websites that sell',
    description:
      'A quick site with your product range, catalogue PDFs and a clear enquiry button, so a distributor in another state can ask for a quote in one tap.',
    linkLabel: 'See web design',
    linkHref: '/web-design',
  },
  {
    name: 'Online stores',
    description:
      'An ecommerce store lets a namkeen brand, saree label or handicraft seller take orders across India with payments, shipping and stock in one place.',
    linkLabel: 'See ecommerce',
    linkHref: '/services/ecommerce-development',
  },
  {
    name: 'AI search (get picked by ChatGPT)',
    description:
      'Buyers now ask ChatGPT and Gemini to shortlist suppliers in Gujarat. GEO, or generative engine optimisation, is the work that gets your firm onto that shortlist.',
    linkLabel: 'Explore AI SEO',
    linkHref: '/ai-seo',
  },
  {
    name: 'Chatbots and automation',
    description:
      'An assistant that answers price, MOQ and delivery questions after office hours, then hands warm leads to your sales desk in the morning.',
    linkLabel: 'See AI agents',
    linkHref: '/services/ai-agent-development',
  },
  {
    name: 'WhatsApp for business',
    description:
      'Most Ahmedabad trade already runs on WhatsApp. We set up catalogues, quick replies and lead capture so enquiries do not sit unread in a phone.',
    linkLabel: 'See WhatsApp chatbot',
    linkHref: '/whatsapp-chatbot',
  },
  {
    name: 'Shopify stores',
    description:
      'Shopify suits Gujarati snack, apparel and home decor brands selling direct to customers. We build stores on it that open fast on mobile data.',
    linkLabel: 'See Shopify',
    linkHref: '/shopify-development',
  },
  {
    name: 'WordPress websites',
    description:
      'WordPress works well for manufacturers and consultants who publish product pages and articles often. You keep the login, the hosting and the content.',
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
    values: [
      'Senior, in-house',
      'Often freshers',
      'One person',
      'You hire and train',
    ],
  },
  {
    feature: 'SEO, ads, social and WhatsApp under one roof',
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
    feature: 'Work to appear in ChatGPT, Gemini and Google AI answers',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="no" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="ih" kind="partial" />,
    ],
  },
  {
    feature: 'Knows how Gujarat buyers search',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="ih" kind="yes" />,
    ],
  },
  {
    feature: 'Begin within days, no year-long contract',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="no" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="ih" kind="no" />,
    ],
  },
  {
    feature: 'Google Business Profile and Maps listing set up for each branch',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="ih" kind="partial" />,
    ],
  },
  {
    feature: 'Same-day WhatsApp replies to new leads',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="ih" kind="yes" />,
    ],
  },
  {
    feature: 'Talks in business terms, skips the jargon',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="ih" kind="yes" />,
    ],
  },
  {
    feature: 'Written scope you sign off before work begins',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="ih" kind="partial" />,
    ],
  },
  {
    feature: 'Past work in a trade similar to yours',
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
    title: 'Channels running in separate silos',
    body:
      'A dyes and chemicals buyer may see your Google listing, open your IndiaMART page, then ask a cousin on WhatsApp. If each channel is run by a different vendor, nobody joins those steps. We plan them as one path from search to quote.',
  },
  {
    icon: '\u{1F464}',
    title: 'Juniors running the account',
    body:
      'A senior person pitches, then a trainee runs the account. In Ahmedabad trade, where owners judge a supplier on the first reply, that gap costs orders. Our experienced staff keep doing the work after the contract is signed.',
  },
  {
    icon: '\u{1F916}',
    title: 'Missing from AI shortlists',
    body:
      'Purchase managers and families planning a home now ask ChatGPT for a shortlist first. If your site gives AI tools nothing clear to quote, a rival on SG Highway gets named instead. We write pages that both Google and AI tools can cite.',
  },
];

// Named-competitor comparison, built from live ranking data for "digital
// marketing agency in ahmedabad" and "seo company in ahmedabad" (July 2026).
// Every agency below is a real, verifiable Ahmedabad team. Honest, positive,
// with open self-disclosure that FactoryJet is on the list.
const AGENCIES = [
  {
    name: 'FactoryJet',
    bestFor:
      'Ahmedabad manufacturers, traders and service firms that want websites, Google, ads, WhatsApp and AI search handled by one senior team, reported in plain English. (We are on this list too, and we say so up front.)',
    isUs: true,
  },
  {
    name: 'Flora Fountain',
    bestFor:
      'Companies that put brand identity first and want design, content and social work joined to their search plan.',
  },
  {
    name: 'Elsner Technologies',
    bestFor:
      'Firms whose marketing depends on a heavier website or online store build happening at the same time.',
  },
  {
    name: 'Digiadsadda',
    bestFor:
      'Owners who want paid search and SEO judged mainly by lead numbers and cost per enquiry.',
  },
  {
    name: 'AONE SEO Service',
    bestFor:
      'Smaller firms looking for long-term search rankings, review management and paid search from one vendor.',
  },
  {
    name: 'MediaF5',
    bestFor:
      'Consumer and retail brands in the city that want social, content and search planned together.',
  },
  {
    name: 'The Grey Metaphor',
    bestFor:
      'Brands that lead with video and creative campaigns and add paid media around them.',
  },
];

const JOURNEY: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'A free first call',
    description: 'You tell us what you sell, who buys it and where orders come from today. We listen first.',
  },
  {
    number: '02',
    title: 'A written plan',
    description: 'You get a short plan listing channels, tasks and the reason for each, before anything starts.',
  },
  {
    number: '03',
    title: 'Senior people do the work',
    description: 'Site fixes, search pages, ads, Maps listings and AI search work, done by experienced staff.',
  },
  {
    number: '04',
    title: 'A monthly scorecard',
    description: 'Visits, calls, WhatsApp leads and the tasks completed, laid out on one page.',
  },
  {
    number: '05',
    title: 'Adjust and repeat',
    description: 'Channels that bring orders get more effort. Ones that do not get cut.',
  },
];

// Ahmedabad market context. Every number below is real, current (July 2026),
// and linked to a source that resolves. These back the CityContextSection so
// the page earns trust with AI answer engines and human readers alike.
const MARKET_STATS = [
  {
    value: '1.03 billion',
    label:
      'Indians use the internet, roughly 70 out of every 100 people. Buyers of Ahmedabad fabric, pumps and medicines check suppliers online before they ring.',
    sourceUrl: 'https://datareportal.com/reports/digital-2026-india',
    sourceLabel: 'DataReportal Digital 2026',
  },
  {
    value: '100 million+',
    label:
      'people in India use ChatGPT each week, its biggest market outside the US. Many Gujarat buyers now ask it for a supplier shortlist first.',
    sourceUrl:
      'https://techcrunch.com/2026/02/15/india-has-100m-weekly-active-chatgpt-users-sam-altman-says/',
    sourceLabel: 'TechCrunch, Feb 2026',
  },
  {
    value: '19,000+',
    label:
      'DPIIT-recognised startups are registered in Gujarat, a state that has led the Startup India rankings for five years in a row. New firms crowd every search result.',
    sourceUrl:
      'https://www.newkerala.com/news/a/over-19000-dpiit-recognised-ventures-gujarat-powering-indias-start-up-472.htm',
    sourceLabel: 'DPIIT / Startup India, 2026',
  },
];

// The honest "which channels actually bring enquiries" listicle. Ordered by how
// steadily each one brings leads for a typical Ahmedabad business, not by hype.
// Real high-volume Ahmedabad search terms are woven in naturally.
const CHANNELS_RANKED = [
  {
    name: 'Ranking on Google for buying searches (SEO)',
    who: 'Manufacturers, traders, exporters and service firms, including any SEO company in Ahmedabad hunting for its own clients.',
    body:
      'SEO is the slow, steady channel. A buyer types "denim fabric supplier Ahmedabad" or "CA firm in Navrangpura" and finds a page that answers them. It needs three to six months of work on pages, speed and links. After that the visits keep coming without a bill per click, which is why most firms here should start with it.',
  },
  {
    name: 'Google Maps and the local pack (local SEO)',
    who: 'Showrooms, clinics, restaurants, coaching classes and any business people visit in person.',
    body:
      'On a phone, Google shows three nearby businesses on a map above everything else. A full Google Business Profile, matching address details and steady reviews decide who appears there. For a showroom on CG Road or a clinic in Satellite, that box brings calls from people ready to visit today.',
  },
  {
    name: 'Google Ads for leads this month',
    who: 'New firms, seasonal sellers and anyone who needs enquiries before SEO has matured.',
    body:
      'Paid search puts you at the top as soon as the campaign is live and drops you as soon as it stops. That makes it useful for testing offers, or for timed pushes such as festive wear before Navratri and kites before Uttarayan. People also call this performance marketing because every rupee is tracked to a result.',
  },
  {
    name: 'Instagram, Facebook and LinkedIn',
    who: 'Food brands, fashion labels, salons, builders and B2B firms that want decision makers to know their name.',
    body:
      'Social media keeps you familiar until the buyer is ready. Instagram suits snack and apparel brands; LinkedIn suits chemical, engineering and finance firms near GIFT City. A social media marketing agency in Ahmedabad will post and run offers, but social alone rarely fills an order book, so we tie it to search.',
  },
  {
    name: 'WhatsApp follow-up',
    who: 'Every trading and service business in the city, since buyers already negotiate there.',
    body:
      'An enquiry left for a day often goes to the next supplier. A click-to-WhatsApp button, saved replies for price and MOQ questions, and a clear owner for each lead keep conversations moving. This step costs little and saves many lost orders.',
  },
  {
    name: 'Being named in AI answers (ChatGPT, Gemini, Google AI)',
    who: 'Exporters, B2B suppliers and premium brands whose buyers research with AI tools.',
    body:
      'Few local firms work on this yet. When a buyer asks ChatGPT for "reliable pharma packaging suppliers in Gujarat", the tool names a handful of companies. Clear product pages, facts it can quote and mentions on trusted sites raise your odds of being one of them. This is GEO, generative engine optimisation, and we include it from day one.',
  },
];

const FAQ_CATEGORIES: FAQCategory[] = [
  { key: 'choosing', label: 'Choosing an agency' },
  { key: 'services', label: 'What we do' },
  { key: 'channels', label: 'Channels and tactics' },
  { key: 'seo', label: 'SEO in Ahmedabad' },
  { key: 'local', label: 'Ahmedabad and nearby' },
  { key: 'results', label: 'Results and reports' },
  { key: 'trust', label: 'Trust and safety' },
  { key: 'ai', label: 'AI and the future' },
];

// Every FAQ below is grounded in real "People Also Ask" and related-search
// queries for Ahmedabad (July 2026). Career and "how to earn" queries were
// deliberately excluded (not buyer intent).
const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'choosing',
    question: 'Which is the best digital marketing agency in Ahmedabad?',
    answer:
      'That depends on what you sell. A yarn exporter in Narol, a dental clinic in Maninagar and a builder on SG Highway each need a different mix of search, ads and social. Start with your goal, then find the agency whose strengths match it. We list the agencies that rank in Ahmedabad further down, ourselves included, with what each one suits.',
  },
  {
    category: 'choosing',
    question: 'Which agency is best for digital marketing?',
    answer:
      'The one whose main skill matches your main need. If buyers find you on Google, pick a search-strong team. If customers buy on looks, pick one good at social and creative. Then check two more things: a senior person runs your account, and reports show enquiries rather than likes.',
  },
  {
    category: 'choosing',
    question: 'How do I pick from all the "top 10 digital marketing agencies in Ahmedabad" lists?',
    answer:
      'Treat those lists as a phone book. Many are paid listings or one writer’s taste. Pick three or four names, meet them, and ask each who handles your account, what you receive every month, and which client in a trade close to yours they have helped. Their answers will sort the list faster than any ranking.',
  },
  {
    category: 'choosing',
    question: 'How do I choose the right digital marketing agency in Ahmedabad?',
    answer:
      'Bring a short checklist to every meeting. Ask for the name of the person who will do your work. Ask for the monthly deliverables in writing. Ask for one example from a business like yours, whether that is a textile trader or a pharma distributor. Vague replies on any of the three are a warning.',
  },
  {
    category: 'choosing',
    question: 'Is it worth paying a digital marketing agency in Ahmedabad?',
    answer:
      'Yes, if the extra enquiries it brings are worth more than the fee and you can trace where each one came from. Give any agency a few months, then compare leads and orders against what you paid. Many Ahmedabad family firms run this test the same way they judge a new supplier: on delivery.',
  },
  {
    category: 'choosing',
    question: 'Agency vs freelancer vs building my own team in Ahmedabad: which is right?',
    answer:
      'A freelancer suits one job, such as a logo or a single landing page. An in-house team gives control, but hiring a designer, an SEO person, an ads specialist and a writer takes months and they often move on. An agency gives you all four skills from week one. Growing firms usually start with an agency and hire later.',
  },
  {
    category: 'services',
    question: 'What does a digital marketing agency in Ahmedabad actually do?',
    answer:
      'It gets the right buyers to find you online and contact you. In practice that covers your website, Google rankings (SEO), Google Maps, paid ads, social posts, WhatsApp and email follow-up, and now AI search. For a manufacturer the aim is quote requests. For a shop or clinic it is calls and visits.',
  },
  {
    category: 'services',
    question: 'What are the 7 types of digital marketing?',
    answer:
      'The usual seven are SEO for free Google visits, paid ads on Google or Meta, social media, content such as articles and videos, email and WhatsApp messages, influencer posts, and GEO, which is getting named by AI tools like ChatGPT. Few businesses need all seven. A chemical exporter might use three; a snack brand might use five.',
  },
  {
    category: 'services',
    question: 'Which channels bring the most enquiries for Ahmedabad businesses?',
    answer:
      'For most firms here, Google search, a fast site and quick WhatsApp replies bring the bulk of leads. B2B makers also gain from LinkedIn and AI search, since purchase teams research there. Restaurants, salons and fashion labels get more from Instagram. We look at where your buyers already spend time before choosing.',
  },
  {
    category: 'services',
    question: 'Do I need SEO, ads or social media first?',
    answer:
      'Need orders now? Start with Google Ads. Want enquiries that keep coming without a bill per click? Start SEO at the same time, since it takes months to mature. Social comes third for most B2B firms and earlier for consumer brands. A small ads budget plus SEO is the common starting mix here.',
  },
  {
    category: 'services',
    question: 'What is the difference between digital marketing and just running ads?',
    answer:
      'Ads are one tool inside digital marketing. They rent you a top spot for as long as you pay. Digital marketing adds the parts you own: a site that converts, Google rankings, reviews, content and a list of past buyers you can message again. Owned channels keep working after an ad budget runs out.',
  },
  {
    category: 'seo',
    question: 'Which is the best SEO agency in Ahmedabad?',
    answer:
      'It depends on your site and your market. Some SEO teams here focus on local shops and Maps listings. Others handle large catalogue sites for exporters with hundreds of products. Pick one that gives honest timelines, shows its work, and refuses to promise the first position, because nobody controls Google’s rankings.',
  },
  {
    category: 'seo',
    question: 'What does an SEO agency in Ahmedabad actually do, in plain words?',
    answer:
      'It makes your site easy for Google to read and worth showing. That means fixing speed and technical errors, writing pages for the terms your buyers type, such as a product name plus "manufacturer in Gujarat", filling out your Google Business Profile, and earning links from trade sites and directories. Results build month by month.',
  },
  {
    category: 'seo',
    question: 'Do I need an SEO expert based in Ahmedabad specifically?',
    answer:
      'No. Search work is done online, so location matters less than skill. What does matter is that the team knows local terms, area names like Vatva, Naroda or Changodar, and the way Gujarat buyers phrase searches, sometimes in Gujarati. Judge an expert on results and clear explanations.',
  },
  {
    category: 'seo',
    question: 'Is the best SEO agency always the biggest one?',
    answer:
      'Not for most firms here. Large SEO agencies are set up for enterprise sites, and a mid-size trader can end up as a small account handled by juniors. A smaller senior team tends to give your site more attention. Ask who will work on your account each week, then decide.',
  },
  {
    category: 'local',
    question: 'Do you only work with businesses in Ahmedabad, or across the city and Gandhinagar too?',
    answer:
      'We work with firms across Ahmedabad and well beyond it, including Gandhinagar, GIFT City and the industrial belts around Sanand and Changodar. All the work is done online, so a trader in the old city near Manek Chowk and a finance firm in GIFT City get the same senior attention.',
  },
  {
    category: 'local',
    question: 'Do you cover business areas like SG Highway, Prahlad Nagar and CG Road?',
    answer:
      'Yes. We plan local search around the areas your customers live and work in, such as SG Highway, Prahlad Nagar, CG Road, Navrangpura, Satellite, Bopal and Maninagar. A café in Bopal targets nearby residents. A corporate office on SG Highway targets companies across Gujarat. The plan follows your buyer.',
  },
  {
    category: 'local',
    question: 'Do I need an Ahmedabad agency, or can one from Mumbai or elsewhere do the job?',
    answer:
      'Any capable team can do the work remotely, wherever it sits. The test is whether it understands your buyers, answers quickly and sets up your Maps listing correctly. Knowing the city’s trades and areas helps a team get to the point sooner. We work with businesses in India, the US, the UK and the UAE, all online.',
  },
  {
    category: 'local',
    question: 'Which types of Ahmedabad businesses do you help?',
    answer:
      'Textile mills and fabric traders, pharma and chemical makers, engineering and pump manufacturers, exporters, family-run trading houses, builders, jewellers, restaurants and snack brands, clinics, coaching institutes and finance firms near GIFT City. If your buyers search Google, scroll Instagram or ask ChatGPT before they buy, we can help.',
  },
  {
    category: 'results',
    question: 'How long does digital marketing take to show results in a busy market like Ahmedabad?',
    answer:
      'Paid ads can produce calls within the first week. SEO usually takes three to six months, and longer in crowded fields like real estate or textiles. Social and content earn trust over a few months. Seasonal firms should start well before Navratri or Diwali, since rankings cannot be rushed into place.',
  },
  {
    category: 'results',
    question: 'What reports will I get, and how do you measure success?',
    answer:
      'One short report each month showing visits, calls, form fills, WhatsApp leads and the work done. We measure success by enquiries and orders. Followers and impressions appear only as context. If leads are not rising over a few months, we change the plan and tell you why.',
  },
  {
    category: 'trust',
    question: 'Who will actually do my work, seniors or freshers?',
    answer:
      'Ask every agency this before you sign. A common pattern is a senior pitch followed by a junior team. Owners here notice that quickly, because their own buyers expect fast, informed replies. At FactoryJet, experienced staff run the accounts and do the hands-on work.',
  },
  {
    category: 'trust',
    question: 'What are the red flags of a bad digital marketing agency in Ahmedabad?',
    answer:
      'A promised first-page rank. A price far below everyone else with no clear scope. Heavy jargon when you ask simple questions. No past work they can show. A long lock-in before any result. If you hear one of these in a meeting, keep looking.',
  },
  {
    category: 'ai',
    question: 'Should my Ahmedabad business show up in AI search like ChatGPT and Google’s AI answers?',
    answer:
      'Yes, especially if you sell to other businesses or abroad. Buyers ask ChatGPT, Gemini and Google’s AI to name suppliers, and only a few firms get mentioned. Getting into those answers is called GEO, generative engine optimisation. Few Ahmedabad agencies work on it yet, so early movers have room.',
  },
  {
    category: 'ai',
    question: 'What are GEO and AEO, and does my business need them?',
    answer:
      'GEO is the work that gets AI tools like ChatGPT to recommend you. AEO, answer engine optimisation, aims for the short answer Google and AI tools show at the top of a search. Both rely on clear pages with facts a machine can quote. If your buyers ask questions before they purchase, you need them. Our free checker shows where you stand today.',
  },
  {
    category: 'choosing',
    question: 'What is the difference between a digital marketing agency and a digital marketing company in Ahmedabad?',
    answer:
      'For a buyer, there is none. Both searches lead to teams that win you customers online. Some firms call themselves an agency to suggest creative work and others a company to suggest scale, but the label tells you little. Ask who does the work and what results they can show.',
  },
  {
    category: 'choosing',
    question: 'What are the big 4 companies in digital marketing, and do I need one for my Ahmedabad business?',
    answer:
      'The "big 4" usually means the global advertising holding groups that serve multinational brands. Their size suits very large budgets. A mid-size Ahmedabad manufacturer or trader would be a small account there and pay for layers it does not use. A focused senior team is the better match for most firms in the city.',
  },
  {
    category: 'choosing',
    question: 'Who are the top 5 marketing agencies, and are the biggest names right for a small Ahmedabad business?',
    answer:
      'Top 5 lists change with whoever wrote them, and many are paid. The famous names mostly serve large brands with large budgets. A smaller firm in Ahmedabad usually gets more care from a senior team that wants its business. Shortlist a few, then ask each who runs your account and what they did for a firm like yours.',
  },
  {
    category: 'services',
    question: 'Is digital marketing only for big Ahmedabad brands, or can a small shop or startup benefit too?',
    answer:
      'Small firms often gain the most, since they can act faster than a large company. Gujarat has led India’s Startup India rankings for years, so new businesses compete for the same searches every day. A clear site, a full Maps listing and quick WhatsApp replies can put a small shop in the same results as far bigger names.',
  },
  {
    category: 'services',
    question: 'Can you fix marketing that another Ahmedabad agency set up badly?',
    answer:
      'Yes, we take over messy setups often. First we audit the site, the ad accounts and the Google listing. Whatever works stays. Broken tracking, wasted ad spend and thin pages get fixed or rebuilt. You get a written note of what was wrong and what we changed.',
  },
  {
    category: 'channels',
    question: 'Do you offer social media marketing in Ahmedabad?',
    answer:
      'Yes. We plan posts and paid campaigns on Instagram, Facebook and LinkedIn. Instagram fits restaurants, salons, sweet shops and fashion labels, especially around festive seasons. LinkedIn fits engineering, chemical and finance firms. Because social builds slowly, we pair it with Google so ready buyers can still find you.',
  },
  {
    category: 'channels',
    question: 'Do you run Google Ads for Ahmedabad businesses, and how fast do they work?',
    answer:
      'Yes. Google Ads show your business at the top of results for the searches you choose, and calls can start on day one. They stop when the budget stops. We use them for quick leads and seasonal peaks, while SEO grows the free traffic that lasts.',
  },
  {
    category: 'channels',
    question: 'What is performance marketing, and does my Ahmedabad business need it?',
    answer:
      'Performance marketing means paid ads judged only by results: calls, quote requests, orders. On Google and Meta you can see what each rupee returned. It suits firms that want quick, measurable leads, such as a builder launching a new project. If your numbers say ads will not pay back, we will tell you.',
  },
  {
    category: 'channels',
    question: 'What is local SEO, and how does it get my Ahmedabad shop onto Google Maps?',
    answer:
      'Local SEO helps nearby people find you. On a phone search, Google shows three businesses on a map first. To get there you need a complete Google Business Profile, the same name, address and phone number everywhere online, real photos and genuine reviews. For a showroom, clinic or restaurant, this channel often brings the most walk-ins.',
  },
  {
    category: 'seo',
    question: 'Which is the best SEO company in Ahmedabad, and is that different from an SEO agency?',
    answer:
      'The two terms mean the same service: getting your site to rank on Google. No single firm is best for everyone. Some focus on local Maps listings, others on big catalogue sites for exporters. Pick one that is honest about timelines, explains its work clearly and never promises the top spot.',
  },
  {
    category: 'seo',
    question: 'What is an SEO consultant in Ahmedabad, and do I need one?',
    answer:
      'An SEO consultant is usually one specialist who advises on strategy while your own staff carry it out. That works if you already have a developer and a writer. If you want the fixes, pages and listings done for you, a small senior team covers more ground than one adviser.',
  },
  {
    category: 'ai',
    question: 'How can I check whether ChatGPT or Google’s AI already mentions my Ahmedabad business?',
    answer:
      'Ask them yourself. Type something like "best [your product] manufacturers in Ahmedabad" into ChatGPT and Google, then see if your name appears. If it does not, you have a gap worth closing. Our free AI visibility checker runs the same test across tools and shows where you stand before you spend anything.',
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
  '@id': 'https://factoryjet.com/digital-marketing/ahmedabad#webpage',
  url: 'https://factoryjet.com/digital-marketing/ahmedabad',
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
  name: 'Digital Marketing Services in Ahmedabad',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'City', name: 'Ahmedabad' },
  serviceType: 'Digital Marketing',
  description:
    'Digital marketing for Ahmedabad manufacturers, traders, exporters and local firms: SEO, Google Maps, paid ads, social, WhatsApp and AI search from one senior team.',
};

const agenciesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Top digital marketing agencies in Ahmedabad (July 2026)',
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
  name: 'Digital Marketing Agency in Ahmedabad | FactoryJet',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
};

export default function AhmedabadDigitalMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="ahmedabad-dm-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="ahmedabad-dm-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="ahmedabad-dm-agencies-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agenciesSchema) }}
      />
      <script
        id="ahmedabad-dm-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Digital Marketing', url: 'https://factoryjet.com/digital-marketing' },
          { name: 'Ahmedabad', url: CANONICAL },
        ]}
      />

      <SiteHeader locale="in" />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Digital Marketing', url: 'https://factoryjet.com/digital-marketing' },
          { name: 'Ahmedabad', url: CANONICAL },
        ]} />
        <Hero
          eyebrow="DIGITAL MARKETING AGENCY · AHMEDABAD"
          headline="A Digital Marketing Agency in Ahmedabad That Brings You Real Customers"
          lead="For Ahmedabad mills, pharma makers, traders and exporters: we get you found on Google, Google Maps and AI tools like ChatGPT, then turn those searches into quote requests and calls."
          formSlot={<HeroInlineForm region="in" source="in_ahmedabad_digital_marketing_hero" />}
          secondaryCta={{ label: 'Get a Free Growth Plan', modal: true as const, region: 'in' as const }}
          trustItems={HERO_TRUST}
          accent="orange"
          rightSlot={
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div aria-hidden className="absolute -right-3 -top-3 h-24 w-24 rounded-2xl bg-[#F05A28]/10" />
              <div aria-hidden className="absolute -bottom-4 -left-4 h-28 w-28 rounded-2xl bg-fj-ink/[0.04]" />
              <div className="relative overflow-hidden rounded-2xl border border-fj-neutral-200 shadow-sm">
                <img
                  src="/images/services/digital-marketing/ahmedabad/hero.webp"
                  alt="A marketing strategist planning search and ad campaigns for Ahmedabad businesses"
                  width={832}
                  height={1216}
                  fetchPriority="high"
                  className="aspect-[3/4] w-full object-cover"
                />
                <div className="absolute bottom-3 left-3 rounded-xl bg-white/95 px-4 py-2.5 shadow-sm">
                  <p className="font-fj-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[#B23E13]">
                    Serving Ahmedabad and all of India
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
              So, which is the best digital marketing agency in Ahmedabad?
            </Heading>
            <p className="mt-4 text-lg leading-relaxed text-fj-ink/80">
              It depends on your trade. A fabric exporter, a pharma distributor and a café in Bopal
              need different channels, so the right agency is the one whose skills fit your buyers.
              If you run a small or mid-size firm and want one senior team to handle your site,
              Google, ads, WhatsApp and AI search together, FactoryJet is worth a call. Further down
              we list the agencies that rank in Ahmedabad, ourselves included, with what each suits.
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
          headline="What a digital marketing agency in Ahmedabad actually does for you"
          lead="It puts your firm in front of the buyers already searching for what you make or sell, then makes it easy for them to contact you."
          body={
            <>
              <p>
                Ahmedabad trade used to run on referrals, trade fairs and the market lanes of the old
                city. Those still matter. Now the same buyers also check Google, look at your Instagram
                and ask ChatGPT for a shortlist before they pick up the phone. We make sure your firm
                appears at each of those points, and that a visitor can send a quote request or a
                WhatsApp message in seconds.
              </p>
              <p>
                The toolkit is a fast website, Google rankings, Maps listings, paid ads when timing
                matters, social posts, WhatsApp follow-up and AI search. Few firms need every piece.
                A pump maker may need search and LinkedIn; a sweet shop may need Maps and Instagram.
                We pick the channels with the best chance of bringing orders and say plainly which
                ones to skip.
              </p>
            </>
          }
          rightSlot={
            <div className="relative">
              <div aria-hidden className="absolute -bottom-4 -right-4 h-28 w-28 rounded-2xl bg-[#F05A28]/10" />
              <img
                src="/images/services/digital-marketing/ahmedabad/team.webp"
                alt="Marketing specialists reviewing a campaign plan for an Ahmedabad client"
                width={1216}
                height={832}
                loading="lazy"
                className="relative aspect-[3/2] w-full rounded-2xl border border-fj-neutral-200 object-cover shadow-sm"
              />
            </div>
          }
        />

        {/* Ahmedabad market context: real, cited numbers that build trust with
            both AI answer engines and human readers. Outbound links resolve. */}
        <CityContextSection
          eyebrow="THE AHMEDABAD DIGITAL MARKET, IN REAL NUMBERS"
          headline="Ahmedabad built its name on trade, and its buyers now start that trade online"
          leadParagraphs={[
            'The city was once called the Manchester of the East for its textile mills, and fabric trading still fills its markets. Around that sit pharma and chemical makers, engineering and pump manufacturers, family-run trading houses, snack and food brands, and finance firms at GIFT City in nearby Gandhinagar.',
            'Many of these firms sell to buyers they have never met: distributors in other states, importers abroad, families choosing a flat on SG Highway. Those buyers compare suppliers on a phone, sometimes searching in Gujarati, and increasingly ask AI tools to narrow the list. The figures beside this show how large that online audience has become.',
            'That is why a single channel rarely carries an Ahmedabad business. The firms that win join a clear website, Google and Maps visibility, prompt WhatsApp replies and a presence in AI answers, so a buyer who finds them once can reach them easily.',
          ]}
          bodySlot={
            <>
              <div className="border-l-2 py-1 pl-5" style={{ borderLeftColor: '#F05A28' }}>
                <p
                  className="fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  Buyers who cannot find you online order from the next firm on the list.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {['SG Highway', 'CG Road', 'Prahlad Nagar', 'Navrangpura', 'Satellite', 'Bopal', 'Maninagar', 'GIFT City'].map(
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
          headline="SEO, social media, Google Ads and AI search for Ahmedabad firms, run by one senior team"
        />

        <IndustriesGrid
          variant="cards"
          eyebrow="EVERYTHING IN ONE PLACE"
          headline="Every channel an Ahmedabad business needs, handled together"
          lead="Skip hiring a designer, an SEO person, an ads specialist and a developer separately. Each card below links to how we handle that piece."
          sectors={CHANNELS}
        />

        {/* Second ServiceExplanation: our actual method for Ahmedabad, alternating
            layout (card on the left) to break the rhythm. Light. */}
        <ServiceExplanation
          eyebrow="OUR APPROACH FOR AHMEDABAD"
          headline="How we grow an Ahmedabad business, step by step"
          lead="A chemical exporter and a Navrangpura coaching class win customers in different ways, so we build each plan from the buyer backwards."
          reverseOnDesktop
          body={
            <>
              <p>
                Step one is mapping where your buyers look. A jeweller near Manek Chowk relies on
                walk-ins and Instagram. A B2B supplier in Vatva relies on Google, trade directories and
                purchase managers asking AI tools. The plan follows that map.
              </p>
              <p>
                Step two is the work itself, done by experienced staff: speeding up your site, writing
                pages for the terms buyers type, filling out your Google Business Profile, and setting
                up WhatsApp replies so a lead never waits overnight.
              </p>
              <p>
                Step three is a monthly one-page report: visits, calls, WhatsApp leads and tasks
                finished. Effort moves toward what brings orders and away from what does not.
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
                  { t: 'A plan shaped by your buyers', n: 'B2B, retail or both' },
                  { t: 'Experienced staff on the account', n: 'from kickoff to reporting' },
                  { t: 'Google and Maps listings fixed', n: 'every branch and showroom' },
                  { t: 'WhatsApp leads answered fast', n: 'saved replies for price and MOQ' },
                  { t: 'Groundwork for AI answers', n: 'ChatGPT, Gemini and Google AI' },
                  { t: 'One-page monthly report', n: 'visits, leads, tasks done' },
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
                  Buyer first. Senior hands. Clear numbers.
                </p>
              </div>
            </div>
          }
        />

        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs a traditional agency vs a freelancer vs your own team"
          lead="Each option suits some firms. This table sets out where they differ so you can weigh them against your own needs."
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
        />

        {/* "Three reasons" rendered LIGHT (was StrategicDarkSection). Keeping this
            light means Testimonials stays the single dark section on the page. */}
        <section className="bg-fj-cream px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-5xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#B23E13]">
              WHY MARKETING OFTEN FALLS FLAT
            </p>
            <Heading as="h2" size="h2" className="text-fj-ink">
              Three reasons digital marketing quietly stops working in Ahmedabad
            </Heading>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fj-ink/80">
              When past campaigns brought few enquiries, one of these causes is usually behind it.
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
          headline="Want a straight plan for your Ahmedabad firm?"
          sub="Share what you sell and who buys it. We will check how you appear on Google, Maps and AI tools today and send a short plan with the next steps."
          primaryCta={{ label: 'Get my free growth plan', modal: true, region: 'in' }}
          secondaryCta={{ label: 'Check if AI tools recommend you', href: '/ai-visibility-checker' }}
        />

        {/* Ranked-channels listicle: which channels actually bring Ahmedabad
            businesses enquiries, informed by live Ahmedabad search demand. Light. */}
        <section className="bg-fj-cream px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#B23E13]">
              WHAT ACTUALLY BRINGS ENQUIRIES
            </p>
            <Heading as="h2" size="h2" className="text-fj-ink">
              The digital marketing channels that actually work for Ahmedabad businesses
            </Heading>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fj-ink/80">
              Lists of digital marketing services in Ahmedabad tend to sell every channel at once.
              Below, the six main channels are ordered by how reliably they bring leads to a typical
              firm in the city, with the kind of business each one fits.
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
              Six is a menu, and most firms order three or four. For a typical Ahmedabad business,
              a quick site, Google and Maps visibility, fast WhatsApp replies and early AI search work
              cover most of the ground. We will tell you which of the rest to leave out.
            </p>
          </div>
        </section>

        {/* Named-competitor comparison: the honest "who is best for what" listicle. */}
        <section className="bg-fj-cream px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#B23E13]">
              THE TOP AHMEDABAD AGENCIES, COMPARED HONESTLY
            </p>
            <Heading as="h2" size="h2" className="text-fj-ink">
              The best digital marketing agencies in Ahmedabad, and who each one suits
            </Heading>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fj-ink/80">
              In July 2026 we checked which agencies rank on Google for digital marketing and SEO
              searches in Ahmedabad, then noted what each is known for. FactoryJet appears in the list
              and is marked clearly.
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
              Every firm listed here does real work for real clients. The "best for" notes are our
              reading of their public portfolios and the searches they rank for in Ahmedabad. Choose
              the one whose strengths line up with your buyers.
            </p>
          </div>
        </section>

        <ServiceJourneyRow
          eyebrow="HOW WORKING WITH US FEELS"
          headline="From first chat to real results, in five simple steps"
          lead="Here is the sequence from the first call to the monthly report, with nothing hidden."
          stages={JOURNEY}
          closingNote="5 SIMPLE STEPS · SENIOR TEAM · HONEST MONTHLY REPORTS"
        />

        {/* Reach across Ahmedabad (plain language + safe internal links to hubs). */}
        <section className="border-y border-fj-ink/10 bg-white px-6 py-14 md:px-8 md:py-16">
          <div className="mx-auto max-w-3xl">
            <Heading as="h2" size="h3" className="text-fj-ink">
              We help businesses grow across Ahmedabad, and beyond
            </Heading>
            <p className="mt-4 text-lg leading-relaxed text-fj-ink/80">
              The work is done online, so your address does not limit it. Textile traders, pharma and
              engineering firms, showrooms, clinics and food brands across SG Highway, CG Road, Prahlad
              Nagar, Navrangpura, Satellite, Bopal, Maninagar and Gandhinagar all get the same senior
              attention. If you want to{' '}
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
              , one team covers it.{' '}
              Before deciding, you can{' '}
              <a href="/digital-marketing" className="font-semibold text-[#B23E13] underline underline-offset-2">
                compare the top 10 digital marketing agencies in India
              </a>
              , FactoryJet included.
            </p>
          </div>
        </section>

        <TestimonialsSection
          eyebrow="REAL RESULTS"
          headline="What business owners say after working with us"
          region="in"
        />

        <FAQ
          eyebrow="QUESTIONS AHMEDABAD OWNERS ACTUALLY ASK"
          headline="Digital marketing in Ahmedabad, answered in plain words"
          lead="Questions taken from real Ahmedabad searches, with short, direct answers."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        <FinalCTA
          variant="light"
          eyebrow="READY WHEN YOU ARE"
          headline="Want to see how many Ahmedabad customers you are missing?"
          sub="Book a free call. We will review your site, your Google and Maps presence and what AI tools say about you, then tell you which steps would bring more enquiries, whether or not you hire us."
          primaryCta={{ label: 'Get My Free Growth Plan', modal: true, region: 'in' }}
          secondaryCta={{ label: 'Check if AI tools recommend you', href: '/ai-visibility-checker' }}
          objectionHandler="Plain answers. No long lock-in. A plan you can use straight away."
        />
      </main>

      <SiteFooter locale="in" />
    </>
  );
}

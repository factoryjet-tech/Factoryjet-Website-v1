import type { Metadata } from 'next';
import Breadcrumbs from '@/components/v2/Breadcrumbs';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import LogoBar from '@/components/v2/LogoBar';
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
import { digitalMarketingAlternates } from '@/data/hreflangMap';

const CANONICAL = 'https://factoryjet.com/digital-marketing';

export const metadata: Metadata = {
  title: 'Best Digital Marketing Agency in India (2026) | FactoryJet',
  description:
    'Looking for the best digital marketing agency in India? Compare the top 10, built from live search data. One senior team for SEO, ads and AI search.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Best Digital Marketing Agency in India (2026) | FactoryJet',
    description:
      'Compare the top 10 digital marketing agencies in India, built from live search data. One senior in-house team for SEO, ads, websites and AI search.',
    url: CANONICAL,
    images: [
      {
        url: 'https://factoryjet.com/images/services/web-design.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet, Digital Marketing Agency in India',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Digital Marketing Agency in India (2026) | FactoryJet',
    description:
      'Compare the top 10 digital marketing agencies in India, built from live search data. One senior in-house team for Indian businesses.',
    images: ['https://factoryjet.com/images/services/web-design.webp'],
  },
  alternates: {
    canonical: CANONICAL,
    languages: digitalMarketingAlternates,
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
   ──────────────────────────────────────────────────────────────────────── */

const HERO_TRUST = [
  '500+ businesses helped',
  '12 years of experience',
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
// existing FactoryJet service page so this hub passes authority down.
const CHANNELS: IndustryCard[] = [
  {
    name: 'SEO (get found on Google)',
    description:
      'Search engine optimisation gets your pages ranked for the words Indian buyers type, in English, Hindi or a regional language, with no fee per click.',
    linkLabel: 'Explore SEO',
    linkHref: '/seo',
  },
  {
    name: 'Websites that sell',
    description:
      'Most Indian buyers see your site on a mid-range Android phone. We build pages that load fast on one and lead straight to a call, form or WhatsApp chat.',
    linkLabel: 'See web design',
    linkHref: '/web-design',
  },
  {
    name: 'Online stores',
    description:
      'Online stores with UPI and card checkout, cash-on-delivery rules, GST invoices and courier links, set up so a small team can run them.',
    linkLabel: 'See ecommerce',
    linkHref: '/services/ecommerce-development',
  },
  {
    name: 'AI search (get picked by ChatGPT)',
    description:
      'GEO, or generative engine optimisation, is the work that gets your brand named when a buyer asks ChatGPT, Gemini or Google’s AI Overview for options.',
    linkLabel: 'Explore AI SEO',
    linkHref: '/ai-seo',
  },
  {
    name: 'Chatbots and automation',
    description:
      'AI agents that answer enquiries after hours, qualify leads, book calls and update your CRM, so staff time goes to closing sales.',
    linkLabel: 'See AI agents',
    linkHref: '/services/ai-agent-development',
  },
  {
    name: 'WhatsApp for business',
    description:
      'Indian customers ask questions on WhatsApp first. We set up auto-replies, catalogues and lead capture there, linked to your sales team.',
    linkLabel: 'See WhatsApp chatbot',
    linkHref: '/whatsapp-chatbot',
  },
  {
    name: 'Shopify stores',
    description:
      'Custom Shopify stores for D2C brands moving off marketplaces, with Indian payment gateways, shipping apps and fast product pages.',
    linkLabel: 'See Shopify',
    linkHref: '/shopify-development',
  },
  {
    name: 'WordPress websites',
    description:
      'WordPress sites for service firms, schools and manufacturers that want to edit pages in-house and own the code outright.',
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
    feature: 'Tracks and improves how AI assistants describe you',
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
];

const PILLARS: Pillar[] = [
  {
    icon: '\u{1F9E9}',
    title: 'One channel alone is not a plan',
    body:
      'An Indian buyer may see an Instagram post, search your name on Google, read reviews on Justdial and then message on WhatsApp. If four vendors run those four steps, nobody sees the whole path. We run them as one plan.',
  },
  {
    icon: '\u{1F464}',
    title: 'Freshers learning on your business',
    body:
      'A senior strategist pitches, then a trainee runs the account. It is a common complaint about agencies of every size. At FactoryJet the people who plan your work also carry it out.',
  },
  {
    icon: '\u{1F916}',
    title: 'Ignoring AI search is a costly mistake',
    body:
      'India has over 100 million weekly ChatGPT users, and buyers ask it for vendor shortlists. An agency that only tracks Google rankings cannot see whether you appear there. We track and improve both.',
  },
];

// Named-competitor comparison, built from live DataForSEO ranking data
// (re-checked 31 July 2026: Google organic top 10, AI Overview citations, and
// brands named by ChatGPT, Claude, Gemini and Perplexity for the India head terms).
// Honest, positive, with open self-disclosure. Exactly ten, so the list is what
// it says it is.
const AGENCIES = [
  {
    name: 'FactoryJet',
    bestFor:
      'Indian SMBs and mid-size firms that want site, search, ads and AI answers handled by one senior team, with reports in plain English. (This entry is FactoryJet. We list ourselves so you can compare us with the other nine.)',
    isUs: true,
  },
  {
    name: 'Social Panga',
    bestFor: 'Big brands that want bold creative ideas and strong social media campaigns.',
  },
  {
    name: 'FruitBowl Digital',
    bestFor: 'Brands that want wide digital coverage and public-relations style promotion.',
  },
  {
    name: 'Matebiz',
    bestFor: 'Firms that want long-running Google ranking work above all else.',
  },
  {
    name: 'OrangeMantra',
    bestFor: 'Larger companies that want technology and marketing built under one roof.',
  },
  {
    name: 'Nico Digital',
    bestFor: 'Businesses that want a design-led agency with search work alongside it.',
  },
  {
    name: 'Techmagnate',
    bestFor:
      'Companies that want a large, long-established SEO specialist. Of every agency we measured, this is the one AI assistants name most often when asked about India.',
  },
  {
    name: 'BrandStory',
    bestFor: 'Brands looking for storytelling and content-heavy campaigns.',
  },
  {
    name: 'EZ Rankings',
    bestFor: 'Smaller budgets that need straightforward, packaged SEO and marketing work.',
  },
  {
    name: 'Schbang',
    bestFor: 'Bigger brands wanting creative, media and technology under one large agency roof.',
  },
];

const JOURNEY: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'A free, no-pressure chat',
    description: 'You tell us what you sell, who buys it and what a good month looks like. We ask questions and listen.',
  },
  {
    number: '02',
    title: 'A clear, simple plan',
    description: 'A written plan lists the channels, the order we start them in and the result each should produce.',
  },
  {
    number: '03',
    title: 'We build and run it',
    description: 'Senior staff build and run the site, listings, campaigns and tracking you signed off. No hand-off to juniors.',
  },
  {
    number: '04',
    title: 'You see the results',
    description: 'A one-page report each month shows leads by source, cost per lead and the work completed.',
  },
  {
    number: '05',
    title: 'We keep improving',
    description: 'Spend shifts toward whatever produced leads. Channels that did not perform are paused.',
  },
];

const FAQ_CATEGORIES: FAQCategory[] = [
  { key: 'choosing', label: 'Choosing an agency' },
  { key: 'services', label: 'What we do' },
  { key: 'local', label: 'Location' },
  { key: 'results', label: 'Results and reports' },
  { key: 'trust', label: 'Trust and safety' },
  { key: 'ai', label: 'AI and the future' },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'choosing',
    question: 'Which is the best digital marketing agency in India?',
    answer:
      'It depends on your size and goal. A national FMCG brand needs media buying at scale. A clinic in Indore needs Google Maps calls. A B2B exporter needs search and LinkedIn. The table on this page lists ten agencies that rank or get named by AI tools for India searches, ourselves included, and says which kind of business each suits.',
  },
  {
    category: 'choosing',
    question: 'How do I choose the right digital marketing agency?',
    answer:
      'Get three answers in writing before you sign. Who runs your account each day, and their experience. The deliverables for the first month. Two results for businesses like yours, with numbers you can check. Vague answers to any of them mean keep looking.',
  },
  {
    category: 'choosing',
    question: 'What are the "big 4" digital marketing companies, and do I need one?',
    answer:
      'The "big 4" usually means the largest global advertising groups (WPP, Omnicom, Publicis and Dentsu). They work with giant brands and giant budgets. If you run a small or mid-size business in India, you almost never need them. A focused Indian agency will give you far more attention and care.',
  },
  {
    category: 'choosing',
    question: 'Agency vs freelancer vs your own team: which is right for me?',
    answer:
      'Freelancers work well for one defined job, like a logo or a set of ads. An in-house team gives control but needs months of hiring, plus tools and training. An agency brings search, ads, design and content skills on day one. Many Indian businesses start with an agency and hire in-house later for the channel that works best.',
  },
  {
    category: 'choosing',
    question: 'How do I tell a good agency from a bad one before I hire?',
    answer:
      'Good agencies explain things in simple words and show real proof. Bad ones hide behind big confusing terms, promise the number-one spot on Google "guaranteed", and dodge the question of who actually does the work. If someone guarantees instant rankings, walk away. Nobody can promise that, and honest agencies never do.',
  },
  {
    category: 'choosing',
    question: 'Which agency is best for a small business in India?',
    answer:
      'A small business needs a senior person on the account and a short list of channels, usually Google Maps, a fast site and WhatsApp follow-up. One team running all three costs less coordination than three vendors. Ask for a monthly lead report from the first month.',
  },
  {
    category: 'services',
    question: 'What does a digital marketing agency actually do?',
    answer:
      'It gets buyers to find you online and then turns them into leads and sales. The work covers your website, Google rankings (search engine optimisation, or SEO), paid ads on Google and Meta, social posts, and email or WhatsApp follow-up. Success is measured in calls, enquiries and orders.',
  },
  {
    category: 'services',
    question: 'What are the main types of digital marketing?',
    answer:
      'Search rankings (SEO), paid ads on Google and Meta, social media posting, content such as blogs and YouTube videos, email and WhatsApp messaging, and AI search, where tools like ChatGPT recommend you. Most businesses need two to four of these. Picking the right ones matters more than doing all six.',
  },
  {
    category: 'services',
    question: 'Which channels actually bring leads for Indian businesses?',
    answer:
      'Local services get most calls from Google Maps and reviews. B2B firms and exporters get enquiries from search rankings and LinkedIn. D2C brands get first orders from Meta ads and repeat orders from WhatsApp and email. We choose channels by where your buyers already look.',
  },
  {
    category: 'services',
    question: 'Do I need SEO, ads, or social media first?',
    answer:
      'Ads produce leads within days and stop when you stop paying. SEO takes months, then keeps bringing traffic. A common start is a modest ad budget for early leads while rankings build. Social media comes after, to build trust with people who already found you.',
  },
  {
    category: 'services',
    question: 'What is the difference between digital marketing and just running ads?',
    answer:
      'Ads are only one part. Running ads means paying to show your business at the top of Google or Instagram, and it stops the moment you stop paying. Digital marketing is the full picture: your website, showing up on Google for free, social media, content and ads working together. Ads alone are like renting attention; the rest is like building something you own.',
  },
  {
    category: 'local',
    question: 'Do I need a local agency in my city, or can I work with one remotely?',
    answer:
      'No. Search, ads and AI work are all done online, and reviews happen on video calls. Check instead that the agency knows how your buyers search, including in local languages, and replies within a working day. We work with businesses across India, the US, the UK and the UAE, all remotely.',
  },
  {
    category: 'local',
    question: 'Which Indian cities have the best digital marketing talent?',
    answer:
      'Cities like Bangalore, Mumbai, Delhi, Pune and Hyderabad have the most skilled marketers, mainly because big companies and startups are based there. But talent is spread all over India now, and remote work means the city on the map matters far less than the quality of the team. Judge an agency by its work and its people, not its address.',
  },
  {
    category: 'results',
    question: 'How long does digital marketing take to show results?',
    answer:
      'Paid ads can bring leads in the first week. Google rankings usually take three to six months, more in crowded categories like real estate or education. Content and social need a few months before they earn trust. A promise of top rankings in days is a warning sign.',
  },
  {
    category: 'results',
    question: 'How is performance measured, and what reports should I expect?',
    answer:
      'Expect one readable page a month: visits, leads by channel, cost per lead and the work done. Dashboards full of impressions and reach without lead counts tell you little. Ask for leads in plain numbers.',
  },
  {
    category: 'results',
    question: 'How do you measure whether digital marketing is actually working?',
    answer:
      'We tag every call, form, WhatsApp chat and order to the channel that produced it. Likes and views are recorded but are not the goal. If leads and sales do not grow over a quarter, we change the plan.',
  },
  {
    category: 'results',
    question: 'What separates a great agency from an average one?',
    answer:
      'Average agencies do the same copy-paste work for everyone and hide behind big words. Great ones take time to understand your business, explain everything simply, put senior people on your account, and stay honest about what will and will not work. The difference is care and honesty, not fancy dashboards.',
  },
  {
    category: 'trust',
    question: 'Who will actually do my work, seniors or juniors?',
    answer:
      'Ask for the name of the person who will run your account day to day and how long they have done the job. Many businesses meet a senior lead at the pitch and a junior afterwards. At FactoryJet the experienced people you meet do the work.',
  },
  {
    category: 'trust',
    question: 'What are the red flags of a bad digital marketing agency?',
    answer:
      'Five warning signs: a guaranteed first rank on Google, a price far below every other quote, jargon instead of answers, no past work you can verify, and a long lock-in before results. Any one of them is reason enough to pause.',
  },
  {
    category: 'trust',
    question: 'Do agencies lock you into long contracts?',
    answer:
      'Some ask for six or twelve months up front, which protects the agency more than you. Ask what notice period applies if you want to leave. An agency that earns its fee each month does not need a hard exit clause.',
  },
  {
    category: 'trust',
    question: 'Is it safe to outsource my digital marketing?',
    answer:
      'Yes, with a few safeguards. Keep your website, Google, social and ad accounts registered in your own name. Ask for monthly reports. Start with one or two channels and expand once you see leads. A trustworthy agency agrees to all three without argument.',
  },
  {
    category: 'ai',
    question: 'How is AI changing digital marketing in India?',
    answer:
      'A lot, and fast. More than 100 million Indians now use ChatGPT every week, and many ask it things like "which company should I hire" or "what is the best product". That means being liked by AI tools is becoming as important as showing up on Google. Businesses that get mentioned by AI now will have a real head start.',
  },
  {
    category: 'ai',
    question: 'Should my business show up in AI search like ChatGPT and Google AI Overviews?',
    answer:
      'Yes. Buyers now ask ChatGPT, Gemini and Google’s AI Overview for shortlists, and the businesses named there get the first call. The work of getting named is called GEO, generative engine optimisation. Few Indian agencies offer it yet. We include it with Google ranking work.',
  },
  {
    category: 'ai',
    question: 'What is answer engine optimisation, and does my business need it?',
    answer:
      'AEO, answer engine optimisation, means structuring your pages so Google’s quick answers and AI assistants quote you directly. It overlaps with GEO. If your buyers ask questions before they buy, it is worth doing. Our free checker shows whether AI tools mention your business today.',
  },

  /* Added from live People-Also-Ask on Google India, 31 July 2026.
     Source data: pipeline/research/data/dm_paa.csv + dm_paa_round2.json */
  {
    category: 'choosing',
    question: 'Is it worth hiring a digital marketing agency?',
    answer:
      'It is worth it when you have something to sell that people already search for, and nobody in-house with the time or skill to do the work properly. It is not worth it if your product is still unproven, because marketing will only spend money faster. Fix the offer first, then hire an agency to scale it.',
  },
  {
    category: 'choosing',
    question: 'How much does a digital marketing agency cost in India?',
    answer:
      'It varies enormously, and anyone quoting a single number without seeing your business is guessing. The real drivers are how many channels you run, how much ad budget sits on top of the fee, and whether seniors or juniors do the work. Ask any agency to split their fee from your ad spend in writing. Vague bundled pricing usually hides junior labour.',
  },
  {
    category: 'trust',
    question: 'How does a digital marketing agency make money?',
    answer:
      'Agencies earn through a monthly retainer, a cut of your ad spend, a one-off project fee, or a mix. Watch the ad-spend cut: the agency earns more when you spend more, whether or not the spend works. Ask which model applies and how the fee changes if your ad budget falls.',
  },
  {
    category: 'trust',
    question: 'How do I know if my digital marketing agency is legit?',
    answer:
      'Ask for direct access to your own Google Ads, Analytics and Search Console accounts, in your name, not theirs. A legitimate agency hands these over without hesitation. If they refuse, or insist on running everything through their accounts, you cannot verify any number they report and you lose all of it the day you leave.',
  },
  {
    category: 'ai',
    question: 'Will AI replace digital marketers?',
    answer:
      'AI has already replaced a lot of the production work: first drafts, ad variations, routine reporting. What it has not replaced is judgement about which customers matter, what your business should say, and which numbers are worth acting on. The marketers losing work are the ones who only did the production part. The ones using AI to do more thinking are fine.',
  },
  {
    category: 'services',
    question: 'What is the 70/20/10 rule in digital marketing?',
    answer:
      'It is a way to split your budget: 70 percent on what already works, 20 percent on improving it, and 10 percent on genuinely new experiments. The point is that it stops you betting everything on an untested idea while still leaving room to find the next thing that works. Treat it as a starting shape, not a law.',
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
  '@id': 'https://factoryjet.com/digital-marketing#webpage',
  url: 'https://factoryjet.com/digital-marketing',
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
  name: 'Digital Marketing Services in India',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'India' },
  serviceType: 'Digital Marketing',
  description:
    'Digital marketing for Indian SMBs and mid-size firms: search rankings, Google and Meta ads, social media, websites, WhatsApp and AI answers, run by one senior team.',
};

const agenciesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Top 10 digital marketing agencies in India (2026)',
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
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
};

export default function DigitalMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="in-dm-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="in-dm-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="in-dm-agencies-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agenciesSchema) }}
      />
      <script
        id="in-dm-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Digital Marketing', url: CANONICAL },
        ]}
      />

      <SiteHeader locale="in" />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Digital Marketing', url: CANONICAL },
        ]} />
        <Hero
          eyebrow="DIGITAL MARKETING AGENCY · INDIA"
          headline="A Digital Marketing Agency in India That Brings You Real Customers"
          lead="Compare ten agencies that rank or get named by AI tools for India searches. Then see how one senior team gets Indian businesses onto Google and into ChatGPT answers, and turns that into enquiries."
          formSlot={<HeroInlineForm region="in" source="in_digital_marketing_hero" />}
          secondaryCta={{ label: 'Get a Free Growth Plan', modal: true as const, region: 'in' as const }}
          trustItems={HERO_TRUST}
          accent="orange"
          rightSlot={
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div aria-hidden className="absolute -right-3 -top-3 h-24 w-24 rounded-2xl bg-[#F05A28]/10" />
              <div aria-hidden className="absolute -bottom-4 -left-4 h-28 w-28 rounded-2xl bg-fj-ink/[0.04]" />
              <div className="relative overflow-hidden rounded-2xl border border-fj-neutral-200 shadow-sm">
                <img
                  src="/images/services/digital-marketing-hero.webp"
                  alt="A digital marketing professional in India working at her desk"
                  width={900}
                  height={1316}
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
              So, which is the best digital marketing agency in India?
            </Heading>
            <p className="mt-4 text-lg leading-relaxed text-fj-ink/80">
              The honest answer: there is no single best agency for everyone. The right one for you
              depends on your size, your goals and, most of all, who actually does your work. For
              small and mid-size Indian businesses that want one senior team to handle everything,
              from your website to Google to AI search, FactoryJet is a strong choice. Below we
              compare the top agencies openly, including ourselves, so you can decide for yourself.
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
          headline="What an Indian business gets from a digital marketing agency"
          lead="Buyers in India search on phones, compare on Google, ask on WhatsApp and now check AI tools. The agency’s job is to put you in front of them at each step."
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
                src="/images/services/digital-marketing-what.webp"
                alt="A digital marketing team in India collaborating around a laptop"
                width={1200}
                height={822}
                loading="lazy"
                className="relative aspect-[4/3] w-full rounded-2xl border border-fj-neutral-200 object-cover shadow-sm"
              />
            </div>
          }
        />

        <IndustriesGrid
          variant="cards"
          eyebrow="EVERYTHING IN ONE PLACE"
          headline="Eight services, one senior team"
          lead="Search, sites, stores, AI agents, WhatsApp, Shopify and WordPress. Each card opens the page that explains how we do that work."
          sectors={CHANNELS}
        />

        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="Agency, freelancer or in-house: how the options compare"
          lead="Each option suits a different stage of growth. The table shows where each one is strong and where it falls short."
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
        />

        <StrategicDarkSection
          eyebrow="WHY MONEY GETS WASTED"
          headline="Three reasons most digital marketing spend disappears"
          lead="When past marketing failed, one of these three causes is usually behind it."
          pillars={PILLARS}
        />

        {/* Named-competitor comparison: the honest "who is best for what" listicle. */}
        <section className="bg-fj-cream px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#B23E13]">
              THE TOP AGENCIES, COMPARED HONESTLY
            </p>
            <Heading as="h2" size="h2" className="text-fj-ink">
              Top 10 digital marketing agencies in India (2026), and who each one suits
            </Heading>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fj-ink/80">
              This list is built from live search data checked on 31 July 2026, not from opinion. We
              took the agencies that actually rank in Google&rsquo;s top 10 for digital marketing in
              India, the ones Google&rsquo;s AI Overview cites, and the ones ChatGPT, Claude, Gemini
              and Perplexity name when you ask them. Then we wrote who each one genuinely suits. We
              include ourselves and say so openly, because hiding it would be the opposite of honest.
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

            <p className="mt-6 text-sm leading-relaxed text-fj-ink/70">
              A quick note on fairness: every agency here is a genuine, capable team. The "best for"
              lines are our honest read of who each one suits, based on their public work and what
              they rank for. The right pick is the one that matches your business, not the one that
              shouts loudest.
            </p>
          </div>
        </section>

        <ServiceJourneyRow
          eyebrow="HOW WORKING WITH US FEELS"
          headline="What happens after you contact us"
          lead="Five stages. You see and approve the output of each one before the next begins."
          stages={JOURNEY}
          closingNote="TALK · PLAN · BUILD · REPORT · ADJUST"
        />

        {/* Reach across India (plain language + safe internal links to hubs). */}
        <section className="border-y border-fj-ink/10 bg-white px-6 py-14 md:px-8 md:py-16">
          <div className="mx-auto max-w-3xl">
            <Heading as="h2" size="h3" className="text-fj-ink">
              We help businesses grow across India, from anywhere
            </Heading>
            <p className="mt-4 text-lg leading-relaxed text-fj-ink/80">
              Because the work happens online, your city does not limit us. We help shops, service
              businesses and brands in Mumbai, Delhi, Bangalore, Hyderabad, Pune, Chennai, Ahmedabad,
              Kolkata and small towns in between. Whether you need to{' '}
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
              , the same senior team handles it.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-fj-ink/80">
              Dedicated city pages:{' '}
              <a href="/digital-marketing/mumbai" className="font-semibold text-[#B23E13] underline underline-offset-2">Mumbai</a>,{' '}
              <a href="/digital-marketing/bangalore" className="font-semibold text-[#B23E13] underline underline-offset-2">Bangalore</a>,{' '}
              <a href="/digital-marketing/delhi" className="font-semibold text-[#B23E13] underline underline-offset-2">Delhi</a>,{' '}
              <a href="/digital-marketing/pune" className="font-semibold text-[#B23E13] underline underline-offset-2">Pune</a>,{' '}
              <a href="/digital-marketing/hyderabad" className="font-semibold text-[#B23E13] underline underline-offset-2">Hyderabad</a>,{' '}
              <a href="/digital-marketing/noida" className="font-semibold text-[#B23E13] underline underline-offset-2">Noida</a>,{' '}
              <a href="/digital-marketing/ahmedabad" className="font-semibold text-[#B23E13] underline underline-offset-2">Ahmedabad</a>,{' '}
              <a href="/digital-marketing/chennai" className="font-semibold text-[#B23E13] underline underline-offset-2">Chennai</a>,{' '}
              <a href="/digital-marketing/kolkata" className="font-semibold text-[#B23E13] underline underline-offset-2">Kolkata</a>,{' '}
              <a href="/digital-marketing/lucknow" className="font-semibold text-[#B23E13] underline underline-offset-2">Lucknow</a>, and{' '}
              <a href="/digital-marketing/jaipur" className="font-semibold text-[#B23E13] underline underline-offset-2">Jaipur</a>.
            </p>
          </div>
        </section>

        <TestimonialsSection
          eyebrow="REAL RESULTS"
          headline="What Indian business owners say after working with us"
          region="in"
        />

        <FAQ
          eyebrow="QUESTIONS PEOPLE ACTUALLY ASK"
          headline="Digital marketing in India, answered in plain words"
          lead="Questions Indian business owners search before hiring an agency, answered in plain words."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        <FinalCTA
          variant="light"
          eyebrow="READY WHEN YOU ARE"
          headline="Want to see how many customers you are missing?"
          sub="Book a free call. We check your website, Google listing and AI search visibility, then send a short list of fixes you can use with or without us."
          primaryCta={{ label: 'Get My Free Growth Plan', modal: true, region: 'in' }}
          secondaryCta={{ label: 'Check if AI tools recommend you', href: '/ai-visibility-checker' }}
          objectionHandler="Free review. Plain English. The plan is yours to keep."
        />
      </main>

      <SiteFooter locale="in" />
    </>
  );
}

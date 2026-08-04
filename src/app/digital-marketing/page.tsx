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
      'SEO means search engine optimisation. In plain words: showing up on Google when someone searches to buy, without paying for each click.',
    linkLabel: 'Explore SEO',
    linkHref: '/seo',
  },
  {
    name: 'Websites that sell',
    description:
      'A fast, mobile-first website that loads quickly and turns visitors into calls and enquiries, instead of just looking nice.',
    linkLabel: 'See web design',
    linkHref: '/web-design',
  },
  {
    name: 'Online stores',
    description:
      'Ecommerce means selling online. We build stores that are easy for customers to buy from and easy for you to run.',
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
      'Smart helpers that reply to customers day and night and do repeat tasks for you, so you save hours every week.',
    linkLabel: 'See AI agents',
    linkHref: '/services/ai-agent-development',
  },
  {
    name: 'WhatsApp for business',
    description:
      'Answer customers and collect leads automatically on WhatsApp, the app most Indians already use every day.',
    linkLabel: 'See WhatsApp chatbot',
    linkHref: '/whatsapp-chatbot',
  },
  {
    name: 'Shopify stores',
    description:
      'Shopify is a popular tool for online shops. We build custom Shopify stores that look great and load fast.',
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
];

const PILLARS: Pillar[] = [
  {
    icon: '\u{1F9E9}',
    title: 'One channel alone is not a plan',
    body:
      'Doing only SEO, or only ads, or only social media leaves gaps. Customers hop between Google, Instagram and WhatsApp before they buy. We join the channels so nothing leaks between them.',
  },
  {
    icon: '\u{1F464}',
    title: 'Freshers learning on your business',
    body:
      'Many agencies win you over with senior people, then quietly hand your work to trainees. You pay for experience you never actually get. At FactoryJet, experienced people do the real work.',
  },
  {
    icon: '\u{1F916}',
    title: 'Ignoring AI search is a costly mistake',
    body:
      'Over 100 million Indians ask ChatGPT something every week, often "which company should I pick". Agencies stuck on old-style SEO miss this completely. We get you found on Google and inside AI answers.',
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
      'Small and mid-size businesses that want one senior team across website, Google, ads and AI search, with plain-English reports. (Yes, that is us. We include ourselves openly and let the comparison speak for itself.)',
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
    bestFor: 'Businesses whose main need is strong, steady SEO (Google rankings).',
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
    description: 'We learn about your business, your customers and your goals. No jargon, no hard sell.',
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
      'There is no single "best" one for everyone. The best agency for you is the one that fits your size, your goals and your budget. A giant brand and a small local shop need very different help. Lower on this page we compare the top agencies honestly, including ourselves, so you can pick the right fit instead of the loudest name.',
  },
  {
    category: 'choosing',
    question: 'How do I choose the right digital marketing agency?',
    answer:
      'Ask three simple questions before you sign anything. One: who will actually do my work, a senior person or a fresher? Two: what exactly will I get each month, in plain words? Three: can you show me real results for a business like mine? An agency that answers all three clearly is usually a safe choice.',
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
      'A freelancer is one person. They are handy for a single small task, but one person cannot cover SEO, ads, design and content all at once. Building your own team gives you full control but takes months to hire and train. An agency gives you a whole team instantly, across every skill. For most growing businesses, an agency is the fastest way to cover everything without the hiring headache.',
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
      'Small businesses do best with an agency that puts a real senior person on their account and covers several channels together. You want one team that can build your website, get you found on Google and run your ads, instead of hiring five separate people. Look for clear monthly reports so you always know what you are getting.',
  },
  {
    category: 'services',
    question: 'What does a digital marketing agency actually do?',
    answer:
      'In simple words, it helps more of the right people find your business online and turn into customers. That means building or fixing your website, getting you to show up on Google (this is called SEO, short for search engine optimisation), running ads, posting on social media, and staying in touch by email or WhatsApp. The goal is always the same: more calls, more enquiries, more sales.',
  },
  {
    category: 'services',
    question: 'What are the main types of digital marketing?',
    answer:
      'The main ones are: SEO (showing up on Google for free), paid ads (paying Google or Instagram to show your business), social media (posting on Instagram, Facebook and LinkedIn), content (blogs and videos that pull people in), email and WhatsApp (staying in touch with customers), and now AI search (getting recommended by tools like ChatGPT). A good agency mixes the few that fit your business best, not all of them at once.',
  },
  {
    category: 'services',
    question: 'Which channels actually bring leads for Indian businesses?',
    answer:
      'It depends on your business, and any agency that says "do everything" is guessing. For most Indian small businesses, showing up on Google when someone is searching to buy, plus a fast mobile website and quick WhatsApp follow-up, brings the most enquiries. Social media builds trust but works more slowly. We pick channels based on where your customers already are, not on what is trendy.',
  },
  {
    category: 'services',
    question: 'Do I need SEO, ads, or social media first?',
    answer:
      'If you need customers this week, start with ads, because they bring visitors the day you switch them on. If you want steady free traffic that grows over months, start with SEO. Most businesses do best with a small mix: ads for quick results while SEO builds up quietly in the background.',
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
      'You do not need an agency in your own city. Almost all digital marketing work happens online, so a good team can help your business from anywhere in India. What matters more is whether they understand your customers and reply quickly. We work with businesses across India, the US, the UK and the UAE, all remotely.',
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
      'Ads can bring enquiries within days. SEO (free Google traffic) usually takes three to six months to build up, and longer for very competitive markets. Social media and content also need a few months to earn trust. Anyone who promises big results in a week is not being honest with you.',
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
    category: 'results',
    question: 'What separates a great agency from an average one?',
    answer:
      'Average agencies do the same copy-paste work for everyone and hide behind big words. Great ones take time to understand your business, explain everything simply, put senior people on your account, and stay honest about what will and will not work. The difference is care and honesty, not fancy dashboards.',
  },
  {
    category: 'trust',
    question: 'Who will actually do my work, seniors or juniors?',
    answer:
      'This is the most important question most people forget to ask. Many agencies win you over with senior people, then hand your work to freshers. Always ask who will run your account day to day. At FactoryJet, experienced people do the work, not trainees practising on your business.',
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
    category: 'trust',
    question: 'Is it safe to outsource my digital marketing?',
    answer:
      'Yes, when you pick the right partner. Most successful businesses outsource marketing because building a full in-house team is slow. To stay safe, keep ownership of your own accounts (website, Google, social media and ads), get clear monthly reports, and start with a small scope before expanding. A trustworthy agency will happily agree to all of this.',
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
      'Yes, and most agencies are not doing this yet, which is your opening. When people ask ChatGPT, Gemini or Google’s AI for a recommendation, you want your business to be one of the answers. Getting mentioned by AI tools is a newer skill called GEO (short for generative engine optimisation). We build it into our work, so you are found on Google and inside AI answers.',
  },
  {
    category: 'ai',
    question: 'What is answer engine optimisation, and does my business need it?',
    answer:
      'Answer engine optimisation, or AEO, simply means shaping your website so AI tools and Google’s instant answers pick your business as the reply. It is closely related to GEO. If your customers are the kind of people who ask ChatGPT or Google a question before buying, then yes, you need it. If you are not sure, we can check for free whether AI tools already mention you.',
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
      'Most agencies charge a monthly retainer, a percentage of your ad spend, a project fee, or some mix of the three. The percentage model is the one to watch, because it quietly rewards the agency for spending more of your money rather than spending it well. Ask which model you are on and what happens to the fee if your ad budget drops.',
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
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet Technologies',
    url: 'https://factoryjet.com',
    telephone: '+919699977699',
    address: { '@type': 'PostalAddress', addressCountry: 'IN' },
  },
  areaServed: { '@type': 'Country', name: 'India' },
  serviceType: 'Digital Marketing',
  description:
    'Integrated digital marketing for Indian businesses: SEO, paid ads, social media, websites, WhatsApp and AI search, handled by one senior in-house team.',
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
          lead="We help Indian businesses get found on Google and AI tools like ChatGPT, and turn visitors into real enquiries. One senior in-house team, plain-English reports, no jargon."
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
          headline="What a digital marketing agency actually does for you"
          lead="Strip away the buzzwords and it comes down to one thing: helping more of the right people find your business and become customers."
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
          headline="One team for every part of your online growth"
          lead="Instead of hiring five different people, you get one senior team that covers the whole picture. Each of these links to how we do it."
          sectors={CHANNELS}
        />

        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs a traditional agency vs a freelancer vs your own team"
          lead="There is no single right answer for every business. Here is an honest look at how the options differ, so you can pick what fits you."
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
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
          headline="From first chat to real results, in five simple steps"
          lead="No confusing process, no surprises. Here is exactly what happens when you work with us."
          stages={JOURNEY}
          closingNote="5 SIMPLE STEPS · SENIOR TEAM · HONEST MONTHLY REPORTS"
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
              <a href="/digital-marketing/kolkata" className="font-semibold text-[#B23E13] underline underline-offset-2">Kolkata</a>, and{' '}
              <a href="/digital-marketing/surat" className="font-semibold text-[#B23E13] underline underline-offset-2">Surat</a>,{' '}
              <a href="/digital-marketing/indore" className="font-semibold text-[#B23E13] underline underline-offset-2">Indore</a>,{' '}
              <a href="/digital-marketing/chandigarh" className="font-semibold text-[#B23E13] underline underline-offset-2">Chandigarh</a>,{' '}
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
          lead="Real questions from real searches, answered simply, with no jargon and no sales spin."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        <FinalCTA
          variant="light"
          eyebrow="READY WHEN YOU ARE"
          headline="Want to see how many customers you are missing?"
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

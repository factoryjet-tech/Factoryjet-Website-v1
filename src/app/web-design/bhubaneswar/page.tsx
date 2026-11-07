import type { Metadata } from 'next';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import CityContextSection from '@/components/v2/CityContextSection';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import PortfolioShowcase from '@/components/v2/PortfolioShowcase';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import HeroBrowserMockup from '@/components/v2/HeroBrowserMockup';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import GetFreeQuoteCTA from '@/components/v2/GetFreeQuoteCTA';
import WebDesignCityLinksIN from '@/components/v2/WebDesignCityLinksIN';

/* ─────────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
──────────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Web Design Company in Bhubaneswar | FactoryJet',
  description:
    'Web design company in Bhubaneswar for Infocity IT firms, Odisha startups, contractors and exporters. Custom Next.js websites, fixed price, 7-day delivery.',
  keywords: [
    'web design company in Bhubaneswar',
    'website design Bhubaneswar',
    'web development Bhubaneswar',
    'web development company Bhubaneswar',
    'website design company Bhubaneswar',
    'professional website design Bhubaneswar',
    'Bhubaneswar website designer',
    'IT company website design Bhubaneswar',
    'web design Infocity Bhubaneswar',
    'Infocity startup website design',
    'Odisha government contractor website',
    'web design for IT companies Bhubaneswar',
    'Next.js web development Bhubaneswar',
    'web design agency Bhubaneswar',
    'web design Odisha',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Bhubaneswar | FactoryJet',
    description:
      'Web design company in Bhubaneswar building Next.js sites with SEO and GA4 set up. 7-day delivery for IT firms, startups, hotels and Odisha exporters.',
    url: 'https://factoryjet.com/web-design/bhubaneswar',
    images: [
      {
        url: 'https://factoryjet.com/images/services/web-design.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet website design work for Bhubaneswar businesses',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Bhubaneswar | FactoryJet',
    description:
      'Web design company in Bhubaneswar, Odisha. Next.js build, SEO and GA4 set up, 7-day delivery.',
    images: ['https://factoryjet.com/images/services/web-design.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/web-design/bhubaneswar',
    languages: {
      'en-IN': 'https://factoryjet.com/web-design/bhubaneswar',
      'x-default': 'https://factoryjet.com/web-design/bhubaneswar',
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

/* ─────────────────────────────────────────────────────────────────────────────────
   JSON-LD Schemas
──────────────────────────────────────────────────────────────────────────────── */

// Freshness signal. Benchmark: 56% of Google-AI-Overview-cited pages carry
// dateModified; these pages carried none. Keep this honest: bump it when the
// page's content actually changes, not on every unrelated deploy.
const PAGE_MODIFIED = '2026-11-07';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/web-design/bhubaneswar#webpage',
  url: 'https://factoryjet.com/web-design/bhubaneswar',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const localBusinessSchema = { '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' };

/* ─────────────────────────────────────────────────────────────────────────────────
   Section data
──────────────────────────────────────────────────────────────────────────────── */

const BBSR_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Who buys, and why',
    description:
      "We start by naming the buyer your site must win over. In Bhubaneswar that could be a US client vetting an Infocity software vendor, a state department checking a contractor before a tender, a family planning a Puri and Konark trip, or an overseas store sourcing Pattachitra. We look at the rivals that buyer will compare, then lock the page list and copy plan.: Days 1–2",
  },
  {
    number: '02',
    title: 'Phone-first layouts',
    description:
      'Every page is laid out in Figma at phone width, then stretched for desktop. You check each form, button and section against the action you want visitors to take, and approve before any code is written.: Days 3–4',
  },
  {
    number: '03',
    title: 'Build in Next.js',
    description:
      'Pages are coded in Next.js and served from Cloudflare\'s network, so they load in under 1.5 seconds on Indian 4G. We hook up enquiry forms, WhatsApp, booking or catalogue tools and any software you already run, and keep page weight in check from the start.: Days 5–6',
  },
  {
    number: '04',
    title: 'Words, images and search',
    description:
      'We tidy the copy, convert images to WebP, write titles and meta text, add LocalBusiness and FAQ schema, and link pages to each other. The sitemap goes to Search Console, with Bhubaneswar and Odisha terms placed where searchers use them.: Day 6–7',
  },
  {
    number: '05',
    title: 'Launch and training',
    description:
      'Your domain moves to Cloudflare, GA4 and Tag Manager go live and Search Console is verified. You get a recorded walkthrough so staff can run the site alone, plus thirty days of post-launch fixes.: Day 7+',
  },
];

const BBSR_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'included',  label: "What's Included" },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local',     label: 'Bhubaneswar Local' },
  { key: 'support',   label: 'Support & Ownership' },
];

const BBSR_FAQ_ITEMS = [

  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'What does a website cost for a Bhubaneswar business?',
    answer:
      "We price each project on its own. Page count, how hard your search terms are, and extras like online payments, bookings or AI tools all move the number. A free call leads to one written fixed quote, and the code is yours once paid.",
  },
  {
    category: 'pricing',
    question: 'How quickly can you launch my site?',
    answer:
      'In seven days. Research and layout take days one and two, design and coding take days three to six, and copy, search setup and launch happen on day seven. The clock starts once we hold your logo, photos and text.',
  },
  {
    category: 'pricing',
    question: 'Why choose FactoryJet over a Bhubaneswar web agency?',
    answer:
      "The designers and engineers who build your site are the people you talk to. Each project gets Figma design, Next.js code and a Lighthouse test before launch. Your price is fixed in writing before work begins, so there is no billing surprise.",
  },
  {
    category: 'pricing',
    question: 'What is covered by 7-day delivery?',
    answer:
      'Design, build, copy and launch, which is the work we control. Time spent waiting for your content or sign-off is extra. Across every project, 97% have gone live on time.',
  },

  /* ── What's Included ── */
  {
    category: 'included',
    question: "What comes in a typical project?",
    answer:
      'Market research, a Figma design, Next.js code, core copy, search setup with schema and sitemap, GA4 tracking and thirty days of support after launch. On launch day the whole codebase moves into your GitHub account.',
  },
  {
    category: 'included',
    question: 'Do you write the website copy?',
    answer:
      'Yes for the essentials: headlines, the opening section and service text. Longer blog or SEO articles are a paid add-on. You get a content brief before coding so you know what to send us.',
  },
  {
    category: 'included',
    question: 'Is hosting included?',
    answer:
      "We publish on Cloudflare Pages, which is free for most company sites. The account sits in your name and we configure it. We take no monthly hosting fee.",
  },
  {
    category: 'included',
    question: 'Can we change the content ourselves later?',
    answer:
      'Yes. Growth and Custom projects include a headless CMS, either Sanity or Contentful, so your staff edit text and images without code.',
  },

  /* ── Technical & SEO ── */
  {
    category: 'technical',
    question: 'Will the site show up in Google searches across Odisha?',
    answer:
      'Each build ships with schema markup, page titles and meta text, green mobile Core Web Vitals, internal links, a submitted sitemap and WebP images. Searches for your brand name usually find the site within one to two weeks of launch.',
  },
  {
    category: 'technical',
    question: 'What do you build with?',
    answer:
      "Next.js on Cloudflare's global CDN. Our pages open in under 1.5 seconds on Indian 4G, compared with 4–6 seconds for a typical WordPress build. Google measures that speed through Core Web Vitals and uses it in ranking.",
  },
  {
    category: 'technical',
    question: 'How does the site behave on a phone?',
    answer:
      'We design for a 375px screen before anything else. Each build has to score Lighthouse 90+ on mobile with green Core Web Vitals before it goes live, and images load as WebP through Cloudflare only when needed.',
  },
  {
    category: 'technical',
    question: 'Will you set up GA4 and Search Console?',
    answer:
      'Yes. GA4 and Tag Manager are live before launch, tracking form sends, WhatsApp taps and enquiry clicks from day one. We verify Search Console and submit your sitemap.',
  },

  /* ── Bhubaneswar Local ── */
  {
    category: 'local',
    question: 'Do you build sites for Infocity IT firms and Odisha startups?',
    answer:
      "Yes. Bhubaneswar's Infocity and STPI centre host large IT employers such as Infosys, TCS and Wipro, plus many smaller service firms and startups backed by Startup Odisha. A smaller firm here competes for the same overseas and metro clients as the big names, so its site has to show services, case studies and delivery strength clearly.",
  },
  {
    category: 'local',
    question: 'Can you build websites for contractors who work with Odisha government departments?',
    answer:
      "Yes. Odisha runs many services online, from e-District to the Mo Bus app, and its departments research vendors online too. Contractors, consultants and system integrators need pages that list past projects, registrations, certifications and key people, laid out so a procurement officer can check them in minutes.",
  },
  {
    category: 'local',
    question: "Do you know Bhubaneswar's business areas well enough to write about them?",
    answer:
      "Research on your local market is part of every project. In Bhubaneswar that means knowing how Infocity and Patia differ from the Janpath and Saheed Nagar shopping belt, where Nayapalli and Chandrasekharpur offices sit, and how the Old Town temple area draws visitors. Correct area names in copy and schema help pages match local searches.",
  },
  {
    category: 'local',
    question: 'How are you different from Bhubaneswar web agencies?',
    answer:
      "Agencies often quote long timelines and hide their prices. We send a fixed quote first, put the 7-day launch date in the agreement and code on Next.js instead of WordPress. The result is a quicker site, delivered sooner, with code you own.",
  },
  {
    category: 'local',
    question: 'Do you make websites for hotels and tour operators in Bhubaneswar?',
    answer:
      "Yes. Bhubaneswar is known as the Temple City, with the Lingaraj, Mukteshwar and Rajarani temples among its best-known sights, and many visitors pair it with Puri and Konark. Hotels and tour firms need fast mobile pages, booking or enquiry forms, strong photo galleries and pages for the temple circuit searches travellers make.",
  },

  /* ── Support & Ownership ── */
  {
    category: 'support',
    question: 'Will the website belong to me?',
    answer:
      'Completely. On launch day the Next.js code goes into your GitHub, with all Figma files and account logins. No retainer is required and no platform locks you in.',
  },
  {
    category: 'support',
    question: 'What support follows the launch?',
    answer:
      'Thirty days of bug fixes and small edits are free. After that, an optional monthly plan covers code changes, same-day bug replies and a named engineer who knows your site.',
  },
  {
    category: 'support',
    question: 'What if something stops working?',
    answer:
      'In the first thirty days we fix bugs at no charge, usually inside 24 hours. Static files on Cloudflare\'s network avoid the server failures that cause most downtime.',
  },
  {
    category: 'support',
    question: 'Can Bhubaneswar companies retain you monthly?',
    answer:
      'Yes. A monthly retainer pays for code work, text updates, new landing pages, search work and upkeep. Retainer clients get first place in the schedule and keep one engineer.',
  },
  {
    category: 'support',
    question: 'Can you help Odisha handicraft and agri exporters sell abroad online?',
    answer:
      "Yes. Odisha's export goods include Pattachitra paintings, Cuttack silver filigree, Sambalpuri textiles, stone carving and farm produce. Exporters need a catalogue that tells the craft story, shows materials and order sizes, and offers a B2B enquiry form, with English copy for buyers in the US, Europe and Southeast Asia.",
  },

  // Money-query coverage, added 2026-06-11
  {
    category: 'pricing',
    question: 'Who is the best web design agency in Bhubaneswar?',
    answer:
      'Test every shortlisted agency, FactoryJet included, three ways. Open their live sites and try them on your phone. Check their speed scores yourself. Ask for a written price that cannot grow mid-project. We build custom sites in 7 days at a fixed price and welcome that test.',
  },
  {
    category: 'pricing',
    question: 'Should I hire web designer in Bhubaneswar or use an agency?',
    answer:
      'For a one-page site a freelancer is often enough. A company site with forms, tracking, search setup and later support needs several skills, which a small team supplies at a fixed price. If you hire web designer in Bhubaneswar on a freelance basis, put scope and fee in writing.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: BBSR_FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const BBSR_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Bhubaneswar Agency' },
  { label: 'Freelancer' },
  { label: 'Template (Wix/Squarespace)' },
] as const;

const BBSR_COMPARISON_ROWS = [
  {
    feature: 'Time to go live',
    values: ['7 days', '6–14 weeks', '3–12 weeks (unreliable)', '1–2 weeks (you build it)'],
  },
  {
    feature: 'Bespoke Figma design',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="aa" kind="yes" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Coded in Next.js',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="aa" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Search setup from day one',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="aa" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Lighthouse 90+ on phones',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="aa" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'GA4 and Tag Manager live',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="aa" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Price agreed in writing',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="aa" kind="no" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="yes" />,
    ],
  },
  {
    feature: 'Code delivered to your GitHub',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="aa" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Launch within 7 days',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="aa" kind="no" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  '@id': `https://factoryjet.com/web-design/bhubaneswar#howto`,
  name: `How FactoryJet launches a Bhubaneswar website in 7 days`,
  description: `The day-by-day plan we use to design, code and launch a site for a business in Bhubaneswar.`,
  totalTime: 'P7D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Day 1 | First call',
      text: `We learn what you sell, who buys it in Bhubaneswar, Odisha or abroad, and what the site must do.`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Day 2 | Structure and keywords',
      text: `We map the pages, study the Bhubaneswar rivals your buyers will compare, choose search terms and draft the first copy.`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Days 3–4 | Look and feel',
      text: 'Homepage and inner page designs arrive on a preview link, and your changes go in within one day.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Days 5–6 | Code and search',
      text: `We turn the approved design into fast, phone-first code, add Bhubaneswar schema and connect Analytics and Search Console.`,
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Day 7 | Live',
      text: 'We test on five devices and launch. Handover notes and a 30-minute training call follow.',
    },
  ],
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `https://factoryjet.com/web-design/bhubaneswar#webpage`,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: `https://factoryjet.com/web-design/bhubaneswar`,
};

/* ─────────────────────────────────────────────────────────────────────────────────
   Page
──────────────────────────────────────────────────────────────────────────────── */

export default function BhubaneswarWebDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="bbsr-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        id="bbsr-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Web Design', url: 'https://factoryjet.com/web-design' },
          { name: 'Bhubaneswar', url: 'https://factoryjet.com/web-design/bhubaneswar' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Web Design', url: 'https://factoryjet.com/web-design' },
          { name: 'Bhubaneswar', url: 'https://factoryjet.com/web-design/bhubaneswar' },
        ]} />

        {/* ── 1. HERO ───────────────────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="web_design_bhubaneswar_hero" />}
          eyebrow="WEB DESIGN · BHUBANESWAR"
          headline="Website Design in Bhubaneswar for Infocity IT Firms, Odisha Startups and Exporters"
          lead="Bhubaneswar mixes a young IT economy with old craft and temple traditions. Infocity and the STPI centre host national IT employers and fast-growing startups. State departments buy services online. Visitors arrive for Lingaraj, Puri and Konark, and Odisha artisans sell to buyers abroad. FactoryJet designs in Figma, codes in Next.js and launches in 7 days, with every line of code handed to you."
          secondaryCta={{ label: 'Get Free Quote', modal: true as const, region: 'in' as const }}
          trustItems={[
            '7-day delivery',
            '500+ businesses built',
          ]}
          rightSlot={<HeroBrowserMockup />}
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────────────────────── */}
        <LogoBar tagline="500+ businesses in India, the US, the UK and the UAE run on sites we built" />

        {/* ── 3. TRUST BLOCK ─────────────────────────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ websites built. 12 years of web engineering. 7-day delivery."
          description="Our builds span Shopify stores, B2B suppliers and DTC brands in India, the US, the UK and the UAE. Each one comes with a fixed price, a 7-day delivery date and the full codebase."
        />

        {/* ── 4. CITY CONTEXT ────────────────────────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="BHUBANESWAR MARKET"
          headline="What Bhubaneswar Buyers Look For Online"
          leadParagraphs={[
            "Bhubaneswar is Odisha's capital and was planned as a new city after independence. It topped the first round of the national Smart Cities Mission and has become one of eastern India's main IT centres. Infocity and the STPI centre host large IT employers and many smaller service firms. The Startup Odisha programme, set up under the state's 2016 startup policy, lists more than 1,500 startups.",
            "IT is only one part of the economy. NALCO is headquartered here, and the state's iron ore, steel and aluminium industries support many suppliers in the city. AIIMS Bhubaneswar, IIT Bhubaneswar, KIIT and XIM draw students from across India. The old temple town draws pilgrims and tourists all year. Odisha's government runs many services online, so vendors who sell to it are checked online as well.",
            "That gives Bhubaneswar a wide spread of website needs. An Infocity software firm, a temple circuit tour operator, a contractor bidding for state work and a Sambalpuri textile exporter each face a different buyer. We plan every site around the person who will decide whether to call you.",
          ]}
          stats={[
            {
              value: '#1',
              label: "Eastern India's fastest-growing IT centre, on NASSCOM's tracking of tech hiring and investment",
              sourceUrl: 'https://www.nasscom.in/',
              sourceLabel: 'NASSCOM',
            },
            {
              value: '1,500+',
              label: "Startups registered with Startup Odisha, one of the busiest state startup programmes",
              sourceUrl: 'https://startupodisha.gov.in/',
              sourceLabel: 'Startup Odisha',
            },
            {
              value: '700+',
              label: 'Temples in and around Bhubaneswar, the base of the city\'s tourism and hotel trade',
              sourceUrl: 'https://www.odishatourism.gov.in/',
              sourceLabel: 'Odisha Tourism',
            },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION ─────────────────────────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WEB DESIGN · BHUBANESWAR"
          headline="What a Bhubaneswar Business Needs From Its Website"
          lead="Bhubaneswar firms sell to four very different buyers: IT clients, government buyers, travellers and overseas importers of Odisha goods. Each one asks different questions, so each needs a different site plan."
          body={
            <>
              <p>
                
                Software firms and startups in Infocity and the STPI centre use their site to win clients across India and abroad. Buyers compare several vendors before a call, so service pages, case studies, tech stack and a clear demo or contact route decide who gets shortlisted. The site has to make a mid-size Bhubaneswar firm look as dependable as a larger rival.
              </p>
              <p>
                
                Contractors, MEP consultants and integrators who bid for Odisha state work need a site that a procurement officer can verify quickly: past projects, registrations, certifications and the team in charge. Hotels and tour operators near the Old Town temples need the opposite: quick mobile pages, clear room or package details, a booking form and pages built for temple circuit searches.
              </p>
              <p>
                
                Odisha exporters of Pattachitra, silver filigree, Sambalpuri textiles, stone carving and farm produce sell to importers and online shoppers abroad. Their sites need a catalogue, the story of the craft and a B2B enquiry form. Every Bhubaneswar project includes research, Figma design, Next.js code, search setup, GA4 and thirty days of support.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  
                  Four buyers. Four site plans.
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  {
                    type: 'IT & Tech Companies',
                    need: 'Case studies + service pages + demo request',
                    area: 'Infocity IT Park · STPI · Startup Odisha',
                    colour: '#F05A28',
                  },
                  {
                    type: 'Government & Institutional',
                    need: 'Past projects + registrations + team',
                    area: 'Odisha Govt Contractors · MEP · Education',
                    colour: '#0F0F12',
                  },
                  {
                    type: 'Tourism & Hospitality',
                    need: 'Fast mobile + packages + booking form',
                    area: 'Temple City · Heritage Belt · Hotels',
                    colour: '#6B6B6B',
                  },
                  {
                    type: 'Exporters & Handicrafts',
                    need: 'Catalogue + craft story + export enquiry',
                    area: 'Odisha Handicrafts · Agri · Stone Crafts',
                    colour: '#999999',
                  },
                ].map((row) => (
                  <div key={row.type} className="px-7 py-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className="h-2 w-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: row.colour }}
                        aria-hidden="true"
                      />
                      <p
                        className="font-fj-body font-semibold text-fj-ink"
                        style={{ fontSize: '0.9375rem' }}
                      >
                        {row.type}
                      </p>
                    </div>
                    <p
                      className="font-fj-body text-fj-neutral-500 mb-1"
                      style={{ fontSize: '0.875rem' }}
                    >
                      {row.need}
                    </p>
                    <p
                      className="font-fj-mono font-medium text-fj-neutral-400"
                      style={{ fontSize: '0.6875rem', letterSpacing: '0.06em' }}
                    >
                      {row.area}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-7 py-5">
                <div className="mb-2 h-[3px] w-8 rounded-full bg-[#F05A28]" aria-hidden="true" />
                <p
                  className="fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1rem', lineHeight: 1.3, letterSpacing: '-0.02em' }}
                >
                  
                  Same build standard. Plan matched to the buyer.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 6. WHY FACTORYJET (DARK) ─────────────────────────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="Why Bhubaneswar Businesses Work With FactoryJet"
          lead="Agencies often quote months and keep prices private. We give a fixed quote before you sign, commit to a 7-day launch date in writing and build on Next.js. You get quicker pages, no monthly plugin bills and code you own."
          pillars={[
            {
              icon: '⚡',
              title: 'Live in seven days, in writing',
              body: "Startups need a site before an investor meeting. IT firms need one before an RFP deadline, and contractors before the next tender. A three-month build misses those dates. We write the 7-day launch into the agreement, and 97% of our projects have gone live on time.",
            },
            {
              icon: '🏗️',
              title: 'Static pages on Next.js',
              body: "WordPress builds each page with PHP and 40–60 database calls on every visit. Next.js serves pre-built files from Cloudflare's network. That gives under 1.5 seconds on Indian 4G against 4–6 seconds for typical WordPress, and Google rewards the faster page through Core Web Vitals.",
            },
            {
              icon: '📋',
              title: 'Fixed fee, agreed first',
              body: "We quote one fixed price before you commit. There is no discovery charge and no open-ended estimate. Scope and fee are set in writing, so no surprise invoice follows the launch.",
            },
          ]}
        />

        {/* ── 7. OUR PROCESS ──────────────────────────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="Your Bhubaneswar Site in Seven Days"
          lead="Buyer first, phone layout next, then code. Search setup and tracking are live before we launch."
          stages={BBSR_JOURNEY_STAGES}
          closingNote="5 STEPS · 7 DAYS · NEXT.JS ON CLOUDFLARE · GA4 FROM LAUNCH · NO DOWNTIME CUTOVER"
        />

        {/* ── 8. PORTFOLIO ──────────────────────────────────────────────────────────────────── */}
        <PortfolioShowcase
          eyebrow="RECENT WORK"
          headline="Two builds from our recent work."
          cards={[
            {
              industry: 'Wholesale Distribution · Commerceflo',
              title: 'Belle Maison | Mumbai',
              description:
                "Mumbai wholesaler supplying artificial plants and flowers, flower runners, home décor and LED lighting to trade buyers. We built their B2B quote-to-cash store on Commerceflo with tiered trade prices, quote-to-order flow and account-based ordering.",
              imageSrc: '/images/portfolio/belle-maison.webp',
              stat1: 'Lighthouse 95+',
              stat2: 'Commerceflo · B2B',
            },
            {
              industry: 'MEP / BIM Consulting · SEO',
              title: 'Formative Concepts | Pune',
              description:
                'Engineering consultancy for MEP drafting and BIM. We rebuilt the WordPress site so project owners and contractors can check credentials, browse the project portfolio and send an enquiry, with technical SEO for B2B leads.',
              imageSrc: '/images/portfolio/formative-concepts.webp',
              stat1: 'B2B authority site',
              stat2: 'SEO + Next.js',
            },
          ]}
          ctaHref="/portfolio"
          ctaLabel="View full portfolio"
        />

        {/* ── 9. COMPARISON TABLE ────────────────────────────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet Against a Bhubaneswar Agency, a Freelancer and a DIY Builder"
          lead="Here are the four usual routes to a new site in Bhubaneswar, compared on launch time, cost, quality checks and what you keep afterwards."
          pullQuote={{
            stat: '7 days',
            caption:
              'from kickoff to a live site, including Figma design, Next.js code, search setup and a Lighthouse test.',
          }}
          columns={BBSR_COMPARISON_COLUMNS}
          rows={BBSR_COMPARISON_ROWS}
          footer="Any FactoryJet scope can be priced as a fixed contract. A free call comes first, then a written quote."
        />

        {/* ── 10. INDUSTRIES ──────────────────────────────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="BHUBANESWAR × WEB DESIGN"
          headline="Websites for Bhubaneswar's Main Sectors"
          lead="Infocity software firms, Startup Odisha ventures, state contractors, campus businesses, temple tourism, mining and metals suppliers and Odisha exporters all sell to different buyers. Each sector gets its own site plan."
          sectors={[
            {
              name: 'IT & Software Companies',
              description:
                "Infocity is Bhubaneswar's main tech park, home to big IT employers such as Infosys, TCS and Wipro and to many mid-size service firms and product startups. These firms sell to clients who compare vendors carefully. They need service pages, case studies, delivery models and a contact path built for long enterprise deals.",
              example:
                'IT service firms, software product companies, BPO and KPO units and tech startups in Infocity, the STPI centre and Patia.',
            },
            {
              name: 'Startups & Entrepreneurship',
              description:
                "Startup Odisha, created under the state's 2016 startup policy, lists more than 1,500 registered startups, and KIIT and IIT Bhubaneswar both run incubators. Early-stage firms need a site that explains the product quickly, shows traction and team, offers a demo request and can change as the product changes.",
              example:
                "Startup Odisha ventures, campus incubator companies and early-stage tech and D2C brands around Bhubaneswar.",
            },
            {
              name: 'Government Contractors & Consulting',
              description:
                "Odisha delivers many public services online, and its departments and PSUs check vendors online before shortlisting them. Engineering contractors, MEP consultants, system integrators and advisory firms need pages for past projects, registrations, certifications and key staff, written so a procurement team can verify them fast.",
              example:
                'Infrastructure contractors, MEP consultancies, IT integrators and advisory firms working with Odisha departments and PSUs.',
            },
            {
              name: 'Education & EdTech',
              description:
                "AIIMS Bhubaneswar, IIT Bhubaneswar, KIIT and XIM bring students from across India into the city. That supports coaching centres, EdTech platforms, hostels and PG housing, and services aimed at students and faculty. These businesses need clear course or room details, fees pages where they choose to publish them, and simple enquiry forms.",
              example:
                "Coaching centres, EdTech platforms, student housing and service firms near the KIIT, IIT, AIIMS and XIM campuses.",
            },
            {
              name: 'Tourism & Temple Hospitality',
              description:
                "Lingaraj, Mukteshwar and Rajarani are among the hundreds of temples that give Bhubaneswar its Temple City name. Odisha Tourism promotes the Bhubaneswar, Puri and Konark circuit as the state's Golden Triangle. Hotels, tour operators and restaurants on that route need mobile pages, photo galleries, booking forms and pages for the trip searches visitors make.",
              example:
                "Hotels, temple circuit tour operators, restaurants near the Old Town temples and travel firms selling Golden Triangle trips.",
            },
            {
              name: 'Steel, Mining & Industrial',
              description:
                "Odisha leads India in iron ore output, holds major steel and aluminium plants, and NALCO is headquartered in Bhubaneswar. Equipment suppliers, transporters, traders and service firms that sell to these plants need pages showing capacity, certifications and supply history for purchase departments.",
              example:
                'Equipment vendors, industrial transporters, raw material traders and service firms supplying Odisha\'s mining, steel and aluminium plants.',
            },
          ]}
        />

        <GetFreeQuoteCTA />
        {/* ── 12. TESTIMONIALS (DARK) ─────────────────────────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="Founders on life after launch"
        />

        {/* ── 13. FAQ ────────────────────────────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Bhubaneswar Clients Ask Us These"
          lead="Short answers to the questions Bhubaneswar owners bring to our first call."
          categories={BBSR_FAQ_CATEGORIES}
          items={BBSR_FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA (DARK) ────────────────────────────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Start Your Bhubaneswar Website This Week"
          sub="Infocity firms, Startup Odisha founders, state contractors, hotels and exporters all compete for the same searches as Bhubaneswar grows. A weak site sends those buyers to a rival. Book a call today and get a page plan within 72 hours."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price. 7-day delivery. Built in Next.js. You own every file from launch day."
        />

        {/* India web-design city cross-links (silo fix, 31 Jul 2026) */}

        <WebDesignCityLinksIN currentCity="bhubaneswar" />


      </main>

      <SiteFooter locale="in" />
    </>
  );
}

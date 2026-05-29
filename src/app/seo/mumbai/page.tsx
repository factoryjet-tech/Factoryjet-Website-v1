import type { Metadata } from 'next';
import Script from 'next/script';
import { seoCityAlternatesIN } from '@/data/hreflangMap';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import Hero from '@/components/v2/Hero';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import CityContextSection from '@/components/v2/CityContextSection';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import PricingTiers from '@/components/v2/PricingTiers';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import HeroBrowserMockup from '@/components/v2/HeroBrowserMockup';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'SEO Agency in Mumbai | From ₹15,000/Month | FactoryJet',
  description:
    'SEO agency in Mumbai for D2C brands, BFSI firms & B2B exporters. From ₹15,000/month. Local pack + organic + AI Overviews. Serving Andheri, BKC, SEEPZ & Powai.',
  keywords: [
    'seo company in mumbai',
    'seo agency in mumbai',
    'seo services in mumbai',
    'best seo company in mumbai',
    'top seo company in mumbai',
    'professional seo services in mumbai',
    'seo company in navi mumbai',
    'local seo mumbai',
    'ecommerce seo mumbai',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Agency in Mumbai | From ₹15,000/Month | FactoryJet',
    description:
      'SEO agency in Mumbai for D2C brands, BFSI firms & B2B exporters. From ₹15,000/month. Local pack + organic + AI Overviews. Serving Andheri, BKC, SEEPZ & Powai.',
    url: 'https://factoryjet.com/seo/mumbai',
    images: [
      {
        url: 'https://factoryjet.com/images/services/seo.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet SEO Agency in Mumbai',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Mumbai | FactoryJet',
    description:
      'SEO agency in Mumbai. From ₹15,000/month. Local pack + organic + AI Overviews. No lock-in.',
    images: ['https://factoryjet.com/images/services/seo.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/seo/mumbai',
    languages: seoCityAlternatesIN['mumbai'],
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

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD Schemas
───────────────────────────────────────────────────────────────────────────── */

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://factoryjet.com/seo/mumbai#localbusiness',
  name: 'FactoryJet — SEO Agency in Mumbai',
  image: 'https://factoryjet.com/images/services/seo.webp',
  description:
    'SEO agency in Mumbai for D2C brands, BFSI firms, and B2B exporters. Technical SEO, local pack, organic, and AI Overviews optimisation. From ₹15,000/month, no lock-in.',
  url: 'https://factoryjet.com/seo/mumbai',
  telephone: '+919699977699',
  email: 'connect@factoryjet.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  areaServed: [
    { '@type': 'City', name: 'Mumbai' },
    { '@type': 'City', name: 'Navi Mumbai' },
    { '@type': 'City', name: 'Thane' },
    { '@type': 'City', name: 'Andheri' },
    { '@type': 'City', name: 'Bandra Kurla Complex' },
    { '@type': 'City', name: 'Powai' },
  ],
  geo: {
    '@type': 'GeoCircle',
    geoMidpoint: { '@type': 'GeoCoordinates', latitude: 19.076, longitude: 72.8777 },
    geoRadius: '50000',
  },
  serviceType: 'Search Engine Optimisation',
  priceRange: '₹₹',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
    bestRating: '5',
    worstRating: '1',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://factoryjet.com/seo/mumbai#service',
  serviceType: 'SEO Services in Mumbai',
  name: 'SEO Agency in Mumbai — FactoryJet',
  description:
    'SEO agency in Mumbai for D2C brands, BFSI firms & B2B exporters. From ₹15,000/month. Local pack + organic + AI Overviews. Serving Andheri, BKC, SEEPZ & Powai.',
  url: 'https://factoryjet.com/seo/mumbai',
  provider: { '@type': 'Organization', name: 'FactoryJet Technologies', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'City', name: 'Mumbai' },
  offers: { '@type': 'Offer', price: '15000', priceCurrency: 'INR' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does SEO cost in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet SEO in Mumbai starts at ₹15,000/month for the Starter programme — technical fixes, on-page optimisation, and local SEO. Growth (₹30,000/month) adds content and link building. Custom programmes (₹50,000+/month) cover competitive and ecommerce SEO. Mumbai agencies typically charge ₹40,000+/month on a 12-month lock-in. FactoryJet runs month to month.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can FactoryJet rank a Mumbai BFSI firm against established competitors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. BFSI SEO in Mumbai is won on technical authority and content depth, not budget alone. We build E-E-A-T-strong thought-leadership content, target corporate and regulatory-aware keywords that incumbents ignore, and fix the technical foundations that large institutional sites usually neglect. It is a 4–6 month effort for competitive terms, and we report progress monthly.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you cover Navi Mumbai and Thane in local SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We treat Navi Mumbai (Vashi, Belapur CBD) and Thane as part of the extended Mumbai market. We build separate location targeting, Google Business Profile optimisation, and local-pack content for each area where you have a physical presence or serve customers.',
      },
    },
    {
      '@type': 'Question',
      name: "What's a realistic SEO timeline for a Mumbai D2C brand?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For a Mumbai D2C brand, branded and long-tail product rankings typically move within 30–60 days. Competitive category terms — where you are up against national ecommerce players — take 4–6 months of content and link work. We prioritise the high-intent, lower-competition queries first so you see qualified traffic early.',
      },
    },
  ],
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/seo/mumbai#webpage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2:first-of-type'] },
  url: 'https://factoryjet.com/seo/mumbai',
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const MUMBAI_SEO_JOURNEY: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Audit',
    description:
      "Full technical, on-page, and backlink audit of your Mumbai site — crawl health, Core Web Vitals, indexation, and where you stand against the BKC, Andheri, or Lower Parel competitors you actually lose to. Findings in plain English. — Week 1",
  },
  {
    number: '02',
    title: 'Strategy',
    description:
      'A Mumbai-specific keyword map tied to revenue — local-pack terms, "near me" intent, corporate and B2B queries, and the AI Overviews coverage your competitors have not claimed. — Week 1–2',
  },
  {
    number: '03',
    title: 'Implementation',
    description:
      'Technical fixes first — schema, speed, internal linking, crawl budget — then on-page optimisation across your money pages and Google Business Profile. — Week 2–4',
  },
  {
    number: '04',
    title: 'Content & Links',
    description:
      'AI-assisted briefs, human-edited copy aimed at Mumbai buyer intent, and editorial links from real Indian and international sites. No PBNs, no bought links. — Ongoing',
  },
  {
    number: '05',
    title: 'Reporting',
    description:
      'A one-page monthly report: Mumbai rankings that moved, traffic that converts, leads attributed, and the exact three things we are doing next. — Monthly',
  },
];

const MUMBAI_SEO_FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Pricing & Timeline' },
  { key: 'included', label: "What's Included" },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local', label: 'Mumbai Local' },
  { key: 'reporting', label: 'Reporting & Ownership' },
];

const MUMBAI_SEO_FAQ_ITEMS = [
  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'How much does SEO cost in Mumbai?',
    answer:
      'FactoryJet SEO in Mumbai starts at ₹15,000/month for the Starter programme — technical fixes, on-page optimisation, and local SEO. Growth (₹30,000/month) adds content production and link building. Custom programmes (₹50,000+/month) cover competitive and ecommerce SEO. Mumbai agencies typically charge ₹40,000+/month, often on a 12-month lock-in. FactoryJet runs month to month.',
  },
  {
    category: 'pricing',
    question: 'How long until I see SEO results in Mumbai?',
    answer:
      "Mumbai is India's most competitive SEO market, so timelines are honest: branded and local-pack rankings move in 30–60 days, competitive service-plus-Mumbai keywords in 4–6 months. We report leading indicators from week one, so you see direction long before revenue lands.",
  },
  {
    category: 'pricing',
    question: 'Do you require a long-term contract?',
    answer:
      'No. SEO with FactoryJet is month to month, with 30 days notice to pause or stop. We keep Mumbai clients by showing measurable progress, not by locking them into a 12-month agreement.',
  },
  {
    category: 'pricing',
    question: 'Why are you cheaper than other Mumbai SEO agencies?',
    answer:
      'We are a small, AI-native team without a BKC office or a sales floor to fund. AI handles research, briefs, and reporting at scale; senior humans handle strategy, editing, and technical work. You pay for the work that moves rankings, not the overhead around it.',
  },
  /* ── What's Included ── */
  {
    category: 'included',
    question: 'What does a Mumbai SEO programme include?',
    answer:
      'Technical SEO, on-page optimisation of your money pages, and local SEO including Google Business Profile for your Mumbai locations. Growth and Custom tiers add human-edited content, editorial link building, and AI Overviews optimisation. Every tier includes a monthly strategy call and a report you can read in five minutes.',
  },
  {
    category: 'included',
    question: 'Do you do local SEO and Google Business Profile?',
    answer:
      'Yes — and for Mumbai it is often the fastest win. We optimise your Google Business Profile, fix citation consistency across directories, build location-specific pages for the areas you serve, and run a review strategy so you own the local pack for "near me" searches in your district.',
  },
  {
    category: 'included',
    question: 'Can you handle ecommerce SEO for a Mumbai D2C brand?',
    answer:
      'Yes — ecommerce SEO sits in our Custom tier. Category and product-page optimisation, product schema, faceted-navigation crawl control, and content hubs that bring buyers. We work on Shopify and custom Next.js commerce, so we optimise the store you already run.',
  },
  {
    category: 'included',
    question: 'Do you write the content?',
    answer:
      'We do. AI builds the first-draft brief; an experienced editor turns it into copy that reads naturally and answers the Mumbai buyer question directly. You approve every piece before it publishes. Volume scales with your tier.',
  },
  /* ── Technical & SEO ── */
  {
    category: 'technical',
    question: 'Do you optimise for Google AI Overviews?',
    answer:
      'Yes. A large share of Mumbai commercial queries now trigger an AI Overview that answers before any click. We structure your content with question-and-answer architecture, FAQ and Service schema, and citable factual passages so Google AI Overviews, ChatGPT, and Perplexity cite your business — part of every programme, not an add-on.',
  },
  {
    category: 'technical',
    question: 'What technical SEO work do you handle?',
    answer:
      'Crawl-budget control, Core Web Vitals, JSON-LD schema, sitemaps, internal-linking architecture, canonical and indexation management, and render/speed fixes. We can implement directly on a modern stack or hand your developer a precise, prioritised change list.',
  },
  {
    category: 'technical',
    question: 'Will SEO work on my existing Mumbai website?',
    answer:
      'Yes, whatever you run. WordPress and Shopify have well-understood levers; Next.js and headless builds we can often implement on directly. The audit surfaces platform-specific constraints up front. If your site is too slow or broken to rank, we tell you honestly rather than charging you to optimise a foundation that cannot hold.',
  },
  {
    category: 'technical',
    question: 'Do you fix site speed and Core Web Vitals?',
    answer:
      'Yes. Most Mumbai search traffic is mobile on variable 4G, so we target green Core Web Vitals on mobile as part of the technical phase. Speed is both a ranking factor and a conversion factor, so it is never an optional extra.',
  },
  /* ── Mumbai Local ── */
  {
    category: 'local',
    question: 'Can FactoryJet rank a Mumbai BFSI or corporate firm against established competitors?',
    answer:
      "Yes. BFSI and corporate SEO in Mumbai is won on technical authority and content depth. We build E-E-A-T-strong thought-leadership content, target the corporate and regulatory-aware keywords incumbents ignore, and fix the technical foundations large institutional sites usually neglect. Expect a 4–6 month effort for competitive Nariman Point and BKC terms.",
  },
  {
    category: 'local',
    question: 'Do you cover Navi Mumbai and Thane in local SEO?',
    answer:
      'Yes. We treat Navi Mumbai — Vashi, Belapur CBD — and Thane as part of the extended Mumbai market. Separate location targeting, Google Business Profile optimisation, and local-pack content for each area where you have a presence or serve customers.',
  },
  {
    category: 'local',
    question: 'Which Mumbai business districts do you target?',
    answer:
      "We map your SEO to where your buyers actually are: BFSI and corporate in BKC and Nariman Point, export and manufacturing in SEEPZ and MIDC Andheri, media and startups in Lower Parel, and D2C and retail in Bandra, Andheri West, and Powai. LocalBusiness schema with district-level areaServed improves relevance for neighbourhood searches — where many Mumbai businesses actually win.",
  },
  {
    category: 'local',
    question: "What's a realistic SEO timeline for a Mumbai D2C brand?",
    answer:
      'Branded and long-tail product rankings typically move within 30–60 days. Competitive category terms — where you compete with national ecommerce players — take 4–6 months of content and link work. We prioritise high-intent, lower-competition queries first so you see qualified traffic early.',
  },
  /* ── Reporting & Ownership ── */
  {
    category: 'reporting',
    question: 'What does your monthly report look like?',
    answer:
      'One page, five-minute read: the Mumbai keywords that moved and why, traffic that converts, leads attributed to organic, and the exact three things we are doing next month. Full data is available if you want to dig in, but the summary is written for a business owner, not an analyst.',
  },
  {
    category: 'reporting',
    question: 'Do I own the content and links you build?',
    answer:
      'Yes — entirely. Every page, brief, and asset lives on your domain and is yours to keep. If you stop working with us, you keep all of it. There is no proprietary platform you must keep paying for to hold your rankings.',
  },
  {
    category: 'reporting',
    question: 'How do you measure success?',
    answer:
      'By leads and revenue, not rankings for their own sake. We agree target keywords and conversion events up front, wire up GA4 and Search Console properly, and report against the metrics that map to your Mumbai pipeline. A number-one ranking that brings no enquiries is a vanity metric, and we will tell you so.',
  },
  {
    category: 'reporting',
    question: 'Who works on my Mumbai account?',
    answer:
      'A small senior team — FactoryJet is founder-led, so you talk to the people doing the strategy and the technical work, not a junior who inherited your account on day two. AI handles scale; humans own judgement, editing, and the relationship.',
  },
];

const MUMBAI_SEO_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Mumbai Agency' },
  { label: 'Freelancer' },
  { label: 'DIY' },
] as const;

const MUMBAI_SEO_COMPARISON_ROWS = [
  { feature: 'Starting price', values: ['₹15,000/mo', '₹40,000+/mo', '₹15,000–₹25,000/mo', '₹0 (your time)'] },
  { feature: 'Contract lock-in', values: ['None — monthly', '6–12 months typical', 'Varies', 'N/A'] },
  {
    feature: 'AI Overviews optimisation',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />],
  },
  {
    feature: 'Technical SEO + Core Web Vitals',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />],
  },
  {
    feature: 'Local pack + Google Business Profile',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="yes" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />],
  },
  {
    feature: 'Editorial links (no PBNs)',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />],
  },
  {
    feature: 'Reports you can actually read',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="no" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />],
  },
  {
    feature: 'You own all content & links',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="yes" />, <CompareIcon key="diy" kind="yes" />],
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function MumbaiSeoPage() {
  return (
    <>
      <Script id="mumbai-seo-localbusiness" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="mumbai-seo-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="mumbai-seo-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'SEO', url: 'https://factoryjet.com/seo' },
          { name: 'Mumbai', url: 'https://factoryjet.com/seo/mumbai' },
        ]}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          eyebrow="SEO · MUMBAI"
          headline="SEO Agency in Mumbai That Brings Leads — Not Just Vanity Rankings"
          lead="Mumbai's SEO landscape is the most competitive in India. D2C brands in BKC compete with global ecommerce in Worli, BFSI firms in Nariman Point compete with fintech in Andheri SEEPZ, and B2B exporters in Lower Parel compete with multinational agencies. Generic SEO does not work here — you need Mumbai-specific keyword maps, local-pack dominance for 'near me' searches, and AI Overviews coverage for the new SERP. FactoryJet builds SEO programmes that win in Mumbai, from ₹15,000/month, with monthly reports you can actually read."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustItems={['SEO from ₹15,000/month', 'No lock-in contracts', '500+ sites optimised']}
          rightSlot={<HeroBrowserMockup badgeLabel="Local Pack #1" badgeCity="Mumbai" />}
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        {/* ── 3. TRUST BLOCK ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ sites optimised. 4.9 average rating. SEO that wins in Mumbai."
        />

        {/* ── 4. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="MUMBAI MARKET"
          headline="Why SEO in Mumbai Is a Different Game"
          leadParagraphs={[
            "Mumbai contributes roughly 40% of India's corporate tax revenue and houses the headquarters of every major bank, insurer, and stock exchange. With over 2.5 lakh registered businesses packed into one metro, the competition for every commercial Google query is brutal — and the agencies bidding against you have budgets most SMBs cannot match.",
            "That intensity is exactly why generic SEO fails in Mumbai. A D2C brand in Bandra, a BFSI advisory in BKC, and an export manufacturer in SEEPZ are chasing completely different keywords, buyer journeys, and local-pack geographies. Winning means mapping SEO to your specific district and buyer — not running the same playbook agencies sell to everyone.",
            "The Mumbai businesses that win organic are rarely the biggest spenders. They are the ones with cleaner technical foundations, content that answers the buyer's actual question, and AI Overviews coverage their competitors have not even started on. That gap is where FactoryJet works.",
          ]}
          stats={[
            {
              value: '~40%',
              label: "of India's corporate tax revenue is collected from Mumbai",
              sourceUrl: 'https://incometaxindia.gov.in/',
              sourceLabel: 'Income Tax Department / CBDT',
            },
            {
              value: '2.5L+',
              label: 'Registered businesses in Mumbai — the highest concentration in any Indian city',
              sourceUrl: 'https://www.mca.gov.in/',
              sourceLabel: 'Ministry of Corporate Affairs',
            },
            {
              value: '₹21L Cr+',
              label: "Mumbai's annual GDP — India's single largest city economy",
              sourceUrl: 'https://mospi.gov.in/web/mospi/statistical-year-book-india',
              sourceLabel: 'MoSPI Statistical Year Book',
            },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION (two buyer types) ─────────────────────── */}
        <ServiceExplanation
          eyebrow="SEO · MUMBAI"
          headline="What 'SEO' Actually Means for a Mumbai Business"
          lead="Mumbai's economy runs on two very different search behaviours — corporate and BFSI buyers researching for weeks, and D2C and retail consumers deciding in seconds on mobile. Each needs a different SEO strategy. FactoryJet builds for both."
          body={
            <>
              <p>
                For Mumbai&apos;s BFSI, corporate, and B2B firms — in BKC, Nariman Point, and Andheri
                SEEPZ — SEO is about technical authority and depth. Buyers run weeks of research before
                a vendor call. You win by ranking for corporate and regulatory-aware keywords, publishing
                content that demonstrates real expertise, and fixing the technical foundations that large
                institutional sites neglect. Slower-burn, higher-value, and durable.
              </p>
              <p>
                For Mumbai&apos;s D2C brands and retail in Bandra, Powai, Lower Parel, and Andheri West,
                the game is local pack and ecommerce SEO. Consumers search on mobile and decide in seconds.
                You win with Google Business Profile dominance, fast mobile pages, product and category SEO,
                and Maps optimisation for &quot;near me&quot; intent. Quick wins early, compounding over time.
              </p>
              <p>
                Every FactoryJet Mumbai programme covers technical SEO, local SEO, and AI Overviews
                optimisation as standard — then layers content and links by tier. You keep every page,
                brief, and link we build, and the reporting is written so you always know what we are
                doing and why.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p className="font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>
                  Two buyer types. One framework.
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { type: 'BFSI / Corporate / B2B', need: 'Authority content + technical SEO', area: 'BKC · Nariman Point · SEEPZ', colour: '#F05A28' },
                  { type: 'D2C / Retail', need: 'Local pack + ecommerce + Maps', area: 'Bandra · Powai · Lower Parel', colour: '#0F0F12' },
                ].map((row) => (
                  <div key={row.type} className="px-7 py-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: row.colour }} aria-hidden="true" />
                      <p className="font-fj-body font-semibold text-fj-ink" style={{ fontSize: '0.9375rem' }}>{row.type}</p>
                    </div>
                    <p className="font-fj-body text-fj-neutral-500 mb-1" style={{ fontSize: '0.875rem' }}>{row.need}</p>
                    <p className="font-fj-mono font-medium text-fj-neutral-400" style={{ fontSize: '0.6875rem', letterSpacing: '0.06em' }}>{row.area}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-7 py-5">
                <div className="mb-2 h-[3px] w-8 rounded-full bg-[#F05A28]" aria-hidden="true" />
                <p className="fj-display font-semibold text-fj-ink" style={{ fontSize: '1rem', lineHeight: 1.3, letterSpacing: '-0.02em' }}>
                  Same engineering quality. Strategy tailored to your buyer.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 6. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="Why Mumbai Businesses Choose FactoryJet for SEO"
          lead="Mumbai SEO agencies sell 12-month contracts, junior account managers, and 40-page reports nobody reads — at ₹40,000+/month. FactoryJet is AI-native, founder-led, month-to-month, and honest about what SEO can and cannot do in India's most competitive market."
          pillars={[
            {
              icon: '🤖',
              title: 'AI-native, built for the new SERP.',
              body: 'Mumbai queries increasingly trigger AI Overviews that answer before any click. We optimise for AI search from day one — structured content, schema, citable passages — while most local agencies are still chasing ten blue links. AI handles research and scale; senior humans handle strategy and editing.',
            },
            {
              icon: '🛡️',
              title: 'No black-hat tactics. Ever.',
              body: 'No PBNs, no bought links, no doorway pages. In a market as scrutinised as Mumbai, the agencies promising rank-in-30-days are the ones who get clients penalised. We build durable SEO — technical foundations, real content, editorial links — so you rank next year, not just next quarter.',
            },
            {
              icon: '📊',
              title: 'Month-to-month. Reports you read.',
              body: 'One page a month: the Mumbai keywords that moved, the traffic that converted, the leads attributed, and the next three things. No lock-in, no jargon, no vanity metrics. We keep clients by showing progress — not by trapping them in a contract.',
            },
          ]}
        />

        {/* ── 7. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR SEO PROCESS"
          headline="How We Run Your Mumbai SEO Programme"
          lead="Audit before strategy. Technical fixes before content. Reporting from week one."
          stages={MUMBAI_SEO_JOURNEY}
          closingNote="5 STAGES · AI-NATIVE · MONTH-TO-MONTH · NO PBNs · LOCAL PACK + ORGANIC + AI OVERVIEWS"
        />

        {/* ── 8. RECENT WORK (coming soon) ─────────────────────────────────── */}
        <section className="relative overflow-hidden bg-fj-cream py-14 md:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-[0.5]" aria-hidden="true" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <p className="font-fj-mono font-medium uppercase text-[#F05A28]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>RECENT WORK</p>
            <h2 className="fj-display mt-3 font-semibold text-fj-ink" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              Mumbai SEO case studies are on the way
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-fj-body text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              We are publishing documented SEO results — rankings, traffic, and leads — from live FactoryJet programmes in Mumbai and across India. The foundation is the same one behind 500+ websites we have shipped, at a 4.9 average client rating.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-fj-ink/15 bg-white px-6 py-3 font-fj-body font-semibold text-fj-ink transition hover:border-[#F05A28] hover:text-[#F05A28]" style={{ fontSize: '0.9375rem' }}>
                See our website portfolio →
              </a>
            </div>
          </div>
        </section>

        {/* ── 9. COMPARISON TABLE ──────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Mumbai Agency vs. Freelancer vs. DIY"
          lead="Four ways to do SEO in Mumbai. The honest comparison — price, lock-in, what is covered, and what you own when it is done."
          pullQuote={{ stat: 'No lock-in', caption: 'month-to-month SEO from ₹15,000 — the AI-native programme Mumbai agencies sell on a 12-month contract at ₹40,000+.' }}
          columns={MUMBAI_SEO_COMPARISON_COLUMNS}
          rows={MUMBAI_SEO_COMPARISON_ROWS}
          footer="Prices reflect typical Mumbai SEO market ranges as of 2025. FactoryJet programmes run month to month with 30 days notice."
        />

        {/* ── 10. INDUSTRIES ───────────────────────────────────────────────── */}
        <IndustriesGrid
          eyebrow="MUMBAI × SEO"
          headline="SEO for Mumbai's Key Industries"
          lead="From SEEPZ exporters to BKC financial firms to Bandra D2C brands — Mumbai's industries compete on very different queries. FactoryJet has run SEO across each."
          sectors={[
            { name: 'BFSI & Fintech', description: "BKC and Nariman Point financial firms. E-E-A-T content, regulatory-aware keywords, financial-services schema, and lead flows built for long sales cycles." },
            { name: 'Manufacturing & Export', description: 'SEEPZ and MIDC Andheri exporters. Technical B2B keyword targeting, product and datasheet SEO, and content aimed at international buyers researching Indian suppliers.' },
            { name: 'D2C & Retail', description: 'Bandra, Powai, and Andheri brands. Ecommerce SEO, product and category optimisation, local pack, and Maps for "near me" intent.' },
            { name: 'Real Estate', description: "Thane, Navi Mumbai, and MMR developers and brokers. Micro-market keyword targeting, RERA-aware content, and locality pages that capture buyer intent." },
            { name: 'Healthcare & Pharma', description: 'Mumbai clinics, diagnostics, and pharma exporters. Local SEO, appointment-intent keywords, and compliance-aware, authority-strong content.' },
            { name: 'Professional Services', description: "CA firms, law practices, and consultancies in Fort and Nariman Point. Authority content and local pack that turn research into booked consultations." },
          ]}
        />

        {/* ── 11. PRICING ──────────────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="TRANSPARENT PRICING"
            headline="Transparent, Month-to-Month SEO Pricing for Mumbai"
            lead="Mumbai agencies charge ₹40,000+/month on 12-month contracts for comparable scope. FactoryJet publishes every tier, runs month to month, and lets you keep everything we build. First results visible in 60–90 days."
            tiers={[
              {
                name: 'Starter',
                priceRange: '₹15,000/mo',
                description: 'Technical foundations and local SEO for one Mumbai location. Best for SMBs and service businesses that need the local pack and core-service rankings.',
                features: ['Full technical SEO audit + fixes', 'On-page optimisation, core pages', 'Local SEO + Google Business Profile', 'AI Overviews / FAQ schema setup', 'GA4 + Search Console wired up', 'Monthly report + strategy call'],
                cta: { label: 'Get Started', modal: true as const, region: 'in' as const },
              },
              {
                name: 'Growth',
                priceRange: '₹30,000/mo',
                description: 'Content and links on top of the foundations, across multiple Mumbai locations. Best for brands scaling organic as a real lead channel.',
                features: ['Everything in Starter', '4 content pieces / month (human-edited)', 'Editorial link building (no PBNs)', 'Multi-location / multi-service targeting', 'Competitor gap monitoring', 'Priority support + monthly strategy call'],
                cta: { label: 'Get Started', modal: true as const, region: 'in' as const },
                popular: true,
              },
              {
                name: 'Custom',
                priceRange: '₹50,000+/mo',
                description: 'National-scale or ecommerce SEO for competitive Mumbai markets. Best for established businesses where organic is a primary revenue line.',
                features: ['Everything in Growth, scaled', 'Ecommerce / large-catalogue SEO', 'Competitive national keyword targets', 'Digital PR + advanced link acquisition', 'Dedicated senior strategist', 'Custom reporting + quarterly reviews'],
                cta: { label: 'Talk to the Founder', modal: true as const, region: 'in' as const },
              },
            ] as const}
            footnote="All prices in INR per month, no lock-in. You own all content and links produced. GA4, Search Console, and reporting included on every tier. Pause or stop with 30 days notice."
          />
        </div>

        {/* ── 12. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection eyebrow="CLIENT RESULTS" headline="What India's founders say about working with FactoryJet" region="in" />

        {/* ── 13. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="SEO Questions from Mumbai Businesses"
          lead="The questions we answer on every Mumbai SEO discovery call — answered here, without the runaround."
          categories={MUMBAI_SEO_FAQ_CATEGORIES}
          items={MUMBAI_SEO_FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Win Search in Mumbai?"
          sub="Mumbai is the hardest SEO market in India — and the most valuable. Every week your competitors rank for the queries your buyers search is a week of pipeline you are handing away. Start with a free audit: we will show you exactly where you stand against your BKC, Andheri, or Bandra competitors and what the first 90 days look like."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          objectionHandler="From ₹15,000/month. No lock-in. You own everything we build. Reports you'll actually read."
        />

      </main>

      <SiteFooter locale="in" />
    </>
  );
}

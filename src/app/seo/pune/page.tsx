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
  title: 'SEO Agency in Pune | From ₹15,000/Month | FactoryJet',
  description:
    'SEO agency in Pune for IT services, auto-tier suppliers, education & manufacturing. From ₹15,000/month. Local pack + organic + AI Overviews. Serving Hinjewadi, Koregaon Park, Baner & Aundh.',
  keywords: [
    'seo company in pune',
    'seo agency in pune',
    'seo services in pune',
    'best seo company in pune',
    'best seo agency in pune',
    'seo expert in pune',
    'seo consultant in pune',
    'pune seo',
    'local seo pune',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Agency in Pune | From ₹15,000/Month | FactoryJet',
    description:
      'SEO agency in Pune for IT services, auto-tier suppliers, education & manufacturing. From ₹15,000/month. Local pack + organic + AI Overviews. Serving Hinjewadi, Koregaon Park, Baner & Aundh.',
    url: 'https://factoryjet.com/seo/pune',
    images: [
      {
        url: 'https://factoryjet.com/images/services/seo.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet SEO Agency in Pune',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Pune | FactoryJet',
    description: 'SEO agency in Pune. From ₹15,000/month. Local pack + organic + AI Overviews. No lock-in.',
    images: ['https://factoryjet.com/images/services/seo.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/seo/pune',
    languages: seoCityAlternatesIN['pune'],
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
  '@id': 'https://factoryjet.com/seo/pune#localbusiness',
  name: 'FactoryJet — SEO Agency in Pune',
  image: 'https://factoryjet.com/images/services/seo.webp',
  description:
    'SEO agency in Pune for IT services, auto-tier suppliers, education, and manufacturing. Technical SEO, local pack, organic, and AI Overviews optimisation. From ₹15,000/month, no lock-in.',
  url: 'https://factoryjet.com/seo/pune',
  telephone: '+919699977699',
  email: 'connect@factoryjet.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  areaServed: [
    { '@type': 'City', name: 'Pune' },
    { '@type': 'City', name: 'Pimpri-Chinchwad' },
    { '@type': 'City', name: 'Hinjewadi' },
    { '@type': 'City', name: 'Koregaon Park' },
    { '@type': 'City', name: 'Baner' },
    { '@type': 'City', name: 'Chakan' },
  ],
  geo: {
    '@type': 'GeoCircle',
    geoMidpoint: { '@type': 'GeoCoordinates', latitude: 18.5204, longitude: 73.8567 },
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
  '@id': 'https://factoryjet.com/seo/pune#service',
  serviceType: 'SEO Services in Pune',
  name: 'SEO Agency in Pune — FactoryJet',
  description:
    'SEO agency in Pune for IT services, auto-tier suppliers, education & manufacturing. From ₹15,000/month. Local pack + organic + AI Overviews.',
  url: 'https://factoryjet.com/seo/pune',
  provider: { '@type': 'Organization', name: 'FactoryJet Technologies', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'City', name: 'Pune' },
  offers: { '@type': 'Offer', price: '15000', priceCurrency: 'INR' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does SEO cost in Pune?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet SEO in Pune starts at ₹15,000/month for the Starter programme — technical fixes, on-page optimisation, and local SEO. Growth (₹30,000/month) adds content and link building. Custom programmes (₹50,000+/month) cover B2B industrial, competitive, and ecommerce SEO. Pune agencies typically charge ₹35,000+/month on a 12-month lock-in. FactoryJet runs month to month.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can FactoryJet rank a Hinjewadi IT services firm against Bangalore competition?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Pune IT services firms compete with Bangalore for global mandates, and the SEO play is to combine global organic targeting with Pune local credibility. We target service and capability keywords, build case-study and technical content that earns enterprise trust, and fix the technical foundations that hold larger competitors back. A 4–6 month effort for competitive terms.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you handle B2B SEO for Pune auto-tier suppliers in Chakan / PCMC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Auto and industrial B2B SEO is a strong fit. We target part, component, and capability keywords that OEM and tier-1 procurement teams actually search, build product and datasheet content, and optimise for the long, technical B2B buying cycle. Chakan, Talegaon, and Pimpri-Chinchwad supplier sites included.",
      },
    },
    {
      '@type': 'Question',
      name: "What's a realistic SEO timeline for a Pune D2C startup?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Branded and long-tail product rankings move in 30–60 days. Competitive premium-D2C category terms — where you may compete with Mumbai brands — take 3–5 months of content and local-pack work. Pune is less saturated than Mumbai or Bangalore, so well-executed SEO often shows results faster here.',
      },
    },
  ],
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/seo/pune#webpage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2:first-of-type'] },
  url: 'https://factoryjet.com/seo/pune',
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const PUN_SEO_JOURNEY: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Audit',
    description:
      'Full technical, on-page, and backlink audit — crawl health, Core Web Vitals, indexation, and where you stand against the Hinjewadi, Chakan, or Koregaon Park competitors you actually lose to. Findings in plain English. — Week 1',
  },
  {
    number: '02',
    title: 'Strategy',
    description:
      "A Pune-specific keyword map tied to revenue — global plus local for IT, industrial B2B terms for auto and manufacturing, admissions intent for education, local pack for D2C, and the AI Overviews coverage competitors have not claimed. — Week 1–2",
  },
  {
    number: '03',
    title: 'Implementation',
    description:
      'Technical fixes first — schema, speed, internal linking, crawl budget — then on-page optimisation across money pages, capability pages, and Google Business Profile. — Week 2–4',
  },
  {
    number: '04',
    title: 'Content & Links',
    description:
      'AI-assisted briefs, human-edited copy for technical B2B and consumer audiences, and editorial links from real Indian and international sources. No PBNs, no bought links. — Ongoing',
  },
  {
    number: '05',
    title: 'Reporting',
    description:
      'A one-page monthly report: Pune rankings that moved, traffic that converts, leads and enquiries attributed, and the exact three things we are doing next. No lock-in. — Monthly',
  },
];

const PUN_SEO_FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Pricing & Timeline' },
  { key: 'included', label: "What's Included" },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local', label: 'Pune Local' },
  { key: 'reporting', label: 'Reporting & Ownership' },
];

const PUN_SEO_FAQ_ITEMS = [
  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'How much does SEO cost in Pune?',
    answer:
      'FactoryJet SEO in Pune starts at ₹15,000/month for the Starter programme — technical fixes, on-page optimisation, and local SEO. Growth (₹30,000/month) adds content production and link building. Custom programmes (₹50,000+/month) cover B2B industrial, competitive, and ecommerce SEO. Pune agencies typically charge ₹35,000+/month, often on a 12-month lock-in. FactoryJet runs month to month.',
  },
  {
    category: 'pricing',
    question: 'How long until I see SEO results in Pune?',
    answer:
      'Branded and local-pack rankings move in 30–60 days. Competitive service-plus-Pune keywords take 3–5 months. Pune is less saturated than Mumbai or Bangalore, so well-executed SEO often shows results faster here. We report leading indicators from week one.',
  },
  {
    category: 'pricing',
    question: 'Do you require a long-term contract?',
    answer:
      'No. SEO with FactoryJet is month to month, with 30 days notice to pause or stop. We keep Pune clients by showing measurable progress — not by locking them into a 12-month agreement.',
  },
  {
    category: 'pricing',
    question: 'Why are you cheaper than other Pune SEO agencies?',
    answer:
      'We are a small, AI-native team without the office and sales overhead of a full agency. AI handles research, briefs, and reporting at scale; senior humans handle strategy, editing, and technical work. You pay for what moves rankings, not the overhead.',
  },
  /* ── What's Included ── */
  {
    category: 'included',
    question: 'What does a Pune SEO programme include?',
    answer:
      'Technical SEO, on-page optimisation of your money pages, and local SEO including Google Business Profile for your Pune locations. Growth and Custom tiers add human-edited content, editorial link building, and AI Overviews optimisation. Every tier includes a monthly strategy call and a one-page report.',
  },
  {
    category: 'included',
    question: 'Do you do B2B and industrial SEO?',
    answer:
      'Yes — and for Pune it matters. We target the part, component, capability, and service keywords that OEM and enterprise procurement teams actually search, build datasheet and capability content, and optimise for the long, technical B2B buying cycle that auto and engineering suppliers live in.',
  },
  {
    category: 'included',
    question: 'Do you write the content?',
    answer:
      'We do. AI builds the first-draft brief; an experienced editor turns it into copy that holds up for a technical B2B or consumer audience and answers the buyer question directly. You approve every piece before it publishes. Volume scales with your tier.',
  },
  {
    category: 'included',
    question: 'Can you do ecommerce SEO for a Pune D2C brand?',
    answer:
      'Yes — ecommerce SEO sits in our Custom tier. Category and product-page optimisation, product schema, faceted-navigation crawl control, and content hubs that bring buyers. We work on Shopify and custom Next.js commerce.',
  },
  /* ── Technical & SEO ── */
  {
    category: 'technical',
    question: 'Do you optimise for Google AI Overviews?',
    answer:
      'Yes. A growing share of Pune commercial and B2B queries now trigger an AI Overview that answers before any click. We structure content with question-and-answer architecture, FAQ and Service schema, and citable factual passages so Google AI Overviews, ChatGPT, and Perplexity cite your business — part of every programme.',
  },
  {
    category: 'technical',
    question: 'What technical SEO work do you handle?',
    answer:
      'Crawl-budget control, Core Web Vitals, JSON-LD schema, sitemaps, internal-linking architecture, canonical and indexation management, and render/speed fixes. We can implement directly on a modern stack or hand your developer a precise, prioritised change list.',
  },
  {
    category: 'technical',
    question: 'Will SEO work on my existing Pune website?',
    answer:
      'Yes, whatever you run. WordPress and Shopify have well-understood levers; Next.js and headless builds we can often implement on directly. The audit surfaces platform-specific constraints up front. If the site is too slow or broken to rank, we say so honestly rather than charging you to optimise a foundation that cannot hold.',
  },
  {
    category: 'technical',
    question: 'Do you fix site speed and Core Web Vitals?',
    answer:
      'Yes. Speed is a ranking and conversion factor, so it is part of the technical phase. We target green Core Web Vitals on mobile, since most Pune search traffic is mobile on variable 4G.',
  },
  /* ── Pune Local ── */
  {
    category: 'local',
    question: 'Can FactoryJet rank a Hinjewadi IT services firm against Bangalore competition?',
    answer:
      'Yes. The play is to combine global organic targeting with Pune local credibility. We target service and capability keywords, build case-study and technical content that earns enterprise trust, and fix the technical foundations that hold larger competitors back. Expect a 4–6 month effort for competitive global terms.',
  },
  {
    category: 'local',
    question: 'Do you handle B2B SEO for Pune auto-tier suppliers in Chakan / PCMC?',
    answer:
      'Yes. Auto and industrial B2B SEO is a strong fit. We target part, component, and capability keywords that OEM and tier-1 procurement teams search, build product and datasheet content, and optimise for the long, technical B2B buying cycle. Chakan, Talegaon, and Pimpri-Chinchwad supplier sites included.',
  },
  {
    category: 'local',
    question: 'Which Pune areas do you target in local SEO?',
    answer:
      'We map SEO to where your buyers are: IT in Hinjewadi, Wakad, and Kharadi; auto and manufacturing in Chakan, Talegaon, and PCMC; premium D2C and hospitality in Koregaon Park, Kalyani Nagar, and Viman Nagar; and education across the city. LocalBusiness schema with area-level areaServed improves relevance for neighbourhood searches.',
  },
  {
    category: 'local',
    question: "What's a realistic SEO timeline for a Pune D2C startup?",
    answer:
      'Branded and long-tail product rankings move in 30–60 days. Competitive premium-D2C category terms — where you may compete with Mumbai brands — take 3–5 months. Pune is less saturated than Mumbai or Bangalore, so results often come faster.',
  },
  /* ── Reporting & Ownership ── */
  {
    category: 'reporting',
    question: 'What does your monthly report look like?',
    answer:
      'One page, five-minute read: the Pune keywords that moved and why, traffic that converts, leads and enquiries attributed to organic, and the exact three things we are doing next month. Full data available if you want it, but the summary is written for a business owner, not an analyst.',
  },
  {
    category: 'reporting',
    question: 'Do I own the content and links you build?',
    answer:
      'Yes — entirely. Every page, brief, and asset lives on your domain and is yours to keep. If you stop working with us, you keep all of it. No proprietary platform you must keep paying for to hold your rankings.',
  },
  {
    category: 'reporting',
    question: 'How do you measure success?',
    answer:
      'By leads, enquiries, and revenue — not rankings for their own sake. We agree target keywords and conversion events up front, wire up GA4 and Search Console properly, and report against the metrics that map to your Pune pipeline. A number-one ranking that brings no enquiries is a vanity metric, and we say so.',
  },
  {
    category: 'reporting',
    question: 'Who works on my Pune account?',
    answer:
      'A small senior team — FactoryJet is founder-led, so you talk to the people doing the strategy and technical work, not a junior who inherited your account on day two. AI handles scale; humans own judgement, editing, and the relationship.',
  },
];

const PUN_SEO_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Pune Agency' },
  { label: 'Freelancer' },
  { label: 'DIY' },
] as const;

const PUN_SEO_COMPARISON_ROWS = [
  { feature: 'Starting price', values: ['₹15,000/mo', '₹35,000+/mo', '₹12,000–₹22,000/mo', '₹0 (your time)'] },
  { feature: 'Contract lock-in', values: ['None — monthly', '6–12 months typical', 'Varies', 'N/A'] },
  {
    feature: 'B2B / industrial SEO',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />],
  },
  {
    feature: 'AI Overviews optimisation',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />],
  },
  {
    feature: 'Technical SEO + Core Web Vitals',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />],
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

export default function PuneSeoPage() {
  return (
    <>
      <Script id="pun-seo-localbusiness" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="pun-seo-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="pun-seo-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'SEO', url: 'https://factoryjet.com/seo' },
          { name: 'Pune', url: 'https://factoryjet.com/seo/pune' },
        ]}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          eyebrow="SEO · PUNE"
          headline="SEO Agency in Pune for IT, Auto & Education Companies"
          lead="Pune is India's #2 IT export hub, the auto OEM and tier-1 supplier capital, and home to 200+ engineering and management colleges. Hinjewadi IT companies compete with Bangalore for global tenders. Koregaon Park D2C brands compete with Mumbai for premium buyers. Auto suppliers in Chakan and PCMC compete on industrial B2B terms. FactoryJet builds SEO for Pune's specific economic drivers, from ₹15,000/month, with real reporting and zero lock-in contracts."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustItems={['SEO from ₹15,000/month', 'No lock-in contracts', '500+ sites optimised']}
          rightSlot={<HeroBrowserMockup badgeLabel="Best CPC economics" badgeCity="Pune" />}
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        {/* ── 3. TRUST BLOCK ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ sites optimised. 4.9 average rating. SEO built for Pune's economy."
        />

        {/* ── 4. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="PUNE MARKET"
          headline="Why SEO in Pune Has to Match the City's Economy"
          leadParagraphs={[
            "Pune runs on three distinct engines: IT services in Hinjewadi and Kharadi, an auto OEM and tier-1 supplier cluster in Chakan and Pimpri-Chinchwad, and one of India's densest concentrations of engineering and management colleges. Each engine searches Google in a completely different way — and most SEO agencies run the same generic playbook across all of them.",
            "A Hinjewadi IT firm competing with Bangalore for global mandates needs global-plus-local organic. An auto supplier in Chakan needs industrial B2B keyword targeting that procurement teams actually use. An education brand needs admissions-intent content. A Koregaon Park D2C label needs local pack and premium-brand SEO. Matching strategy to engine is the whole job.",
            "Pune is less saturated than Mumbai or Bangalore, which means well-executed SEO often shows results faster and cheaper here — the best per-click economics of any market we work in. The businesses that move now, while competitors run generic packages, capture that advantage. That is where FactoryJet works.",
          ]}
          stats={[
            {
              value: '#2',
              label: "India's IT export hub by revenue, after Bangalore",
              sourceUrl: 'https://stpi.in/',
              sourceLabel: 'STPI',
            },
            {
              value: '200+',
              label: 'Engineering & management colleges in and around Pune',
              sourceUrl: 'https://www.aicte-india.org/',
              sourceLabel: 'AICTE',
            },
            {
              value: 'Auto hub',
              label: "Major share of India's auto OEM and tier-1 supplier capacity (Chakan / PCMC)",
              sourceUrl: 'https://www.siam.in/',
              sourceLabel: 'SIAM',
            },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION (two buyer types) ─────────────────────── */}
        <ServiceExplanation
          eyebrow="SEO · PUNE"
          headline="What 'SEO' Actually Means for a Pune Business"
          lead="Pune runs on two very different search behaviours — technical B2B buyers in IT and auto running long evaluations, and consumers and students deciding quickly. Each needs a different SEO strategy. FactoryJet builds for both."
          body={
            <>
              <p>
                For Pune&apos;s IT, auto, and manufacturing firms — in Hinjewadi, Chakan, PCMC, and
                Magarpatta — SEO is about technical and industrial keyword targeting. OEM procurement
                teams and enterprise buyers run weeks of research before contact. You win by ranking for
                part, component, capability, and service keywords, publishing content that demonstrates
                real engineering depth, and combining global organic with local credibility.
              </p>
              <p>
                For Pune&apos;s premium D2C, hospitality, and education brands in Koregaon Park, Kalyani
                Nagar, and Viman Nagar, the game is local pack and brand SEO. Consumers and students decide
                quickly, often on mobile. You win with Google Business Profile dominance, fast pages,
                admissions or product-intent content, and Maps optimisation for &quot;near me&quot; searches.
              </p>
              <p>
                Every FactoryJet Pune programme covers technical SEO, local SEO, and AI Overviews
                optimisation as standard — then layers industrial, education, or D2C content and links by
                tier. You keep every page, brief, and link, and the reporting is written so you always know
                what we are doing and why.
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
                  { type: 'IT / Auto / B2B', need: 'Industrial + technical SEO', area: 'Hinjewadi · Chakan · PCMC · Magarpatta', colour: '#F05A28' },
                  { type: 'D2C / Education / Premium retail', need: 'Local pack + brand + admissions SEO', area: 'Koregaon Park · Kalyani Nagar · Viman Nagar', colour: '#0F0F12' },
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
          headline="Why Pune Businesses Choose FactoryJet for SEO"
          lead="Pune SEO agencies sell 12-month contracts, junior account managers, and reports nobody reads. FactoryJet is AI-native, founder-led, month-to-month, and built around Pune's actual economic drivers — IT, auto, education, and premium D2C."
          pillars={[
            {
              icon: '🤖',
              title: 'AI-native, built for the new SERP.',
              body: 'Pune commercial and B2B queries increasingly trigger AI Overviews that answer before any click. We optimise for AI search from day one — structured content, schema, citable passages — while most local agencies are still chasing ten blue links. AI handles research and scale; senior humans handle strategy and editing.',
            },
            {
              icon: '🛡️',
              title: 'No black-hat tactics. Ever.',
              body: 'No PBNs, no bought links, no doorway pages. The agencies promising rank-in-30-days are the ones who get clients penalised. We build durable SEO — technical foundations, real content, editorial links — so you rank next year, not just next quarter.',
            },
            {
              icon: '📊',
              title: 'Month-to-month. Reports you read.',
              body: "One page a month: the Pune keywords that moved, the traffic that converted, the leads attributed, and the next three things. No lock-in, no jargon, no vanity metrics. And with Pune's strong per-click economics, your budget goes further here than in Mumbai or Bangalore.",
            },
          ]}
        />

        {/* ── 7. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR SEO PROCESS"
          headline="How We Run Your Pune SEO Programme"
          lead="Audit before strategy. Technical fixes before content. Reporting from week one."
          stages={PUN_SEO_JOURNEY}
          closingNote="5 STAGES · AI-NATIVE · MONTH-TO-MONTH · NO PBNs · B2B + LOCAL PACK + AI OVERVIEWS"
        />

        {/* ── 8. RECENT WORK (coming soon) ─────────────────────────────────── */}
        <section className="relative overflow-hidden bg-fj-cream py-14 md:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-[0.5]" aria-hidden="true" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <p className="font-fj-mono font-medium uppercase text-[#F05A28]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>RECENT WORK</p>
            <h2 className="fj-display mt-3 font-semibold text-fj-ink" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              Pune SEO case studies are on the way
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-fj-body text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              We are publishing documented SEO results — rankings, traffic, and leads — from live FactoryJet programmes in Pune and across India. The foundation is the same one behind 500+ websites we have shipped, at a 4.9 average client rating. We have already built and ranked for Pune clients, including Formative Concepts.
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
          headline="FactoryJet vs. Pune Agency vs. Freelancer vs. DIY"
          lead="Four ways to do SEO in Pune. The honest comparison — price, lock-in, what is covered, and what you own when it is done."
          pullQuote={{ stat: 'No lock-in', caption: "month-to-month SEO from ₹15,000 — with the B2B and AI-search strategy Pune's generic agencies do not run." }}
          columns={PUN_SEO_COMPARISON_COLUMNS}
          rows={PUN_SEO_COMPARISON_ROWS}
          footer="Prices reflect typical Pune SEO market ranges as of 2025. FactoryJet programmes run month to month with 30 days notice."
        />

        {/* ── 10. INDUSTRIES ───────────────────────────────────────────────── */}
        <IndustriesGrid
          eyebrow="PUNE × SEO"
          headline="SEO for Pune's Key Industries"
          lead="From Hinjewadi IT to Chakan auto suppliers to Koregaon Park D2C — Pune's industries compete on very different queries. FactoryJet has run SEO across each."
          sectors={[
            { name: 'IT & Software', description: 'Hinjewadi, Wakad, and Kharadi firms competing with Bangalore for global mandates. Global organic plus local credibility, capability and case-study content.' },
            { name: 'Automotive & Engineering', description: 'Chakan, Talegaon, and PCMC OEM and tier-1 suppliers. Industrial B2B keyword targeting, datasheet and capability content, long-cycle procurement SEO.' },
            { name: 'Education & EdTech', description: "Pune's coaching institutes, colleges, and ed-tech platforms. Admissions-intent keywords, programme-page SEO, and local pack that captures enquiries." },
            { name: 'Manufacturing & MSME', description: 'PCMC manufacturers and MSME exporters. Credibility content, B2B keyword targeting, and technical SEO that surfaces capability to procurement buyers.' },
            { name: 'D2C & Premium Retail', description: 'Koregaon Park, Kalyani Nagar, and Viman Nagar brands. Ecommerce and brand SEO, local pack, and Maps for premium "near me" intent.' },
            { name: 'Professional Services', description: 'CA firms, law practices, and consultancies. Authority content and local pack that turn research into booked consultations.' },
          ]}
        />

        {/* ── 11. PRICING ──────────────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="TRANSPARENT PRICING"
            headline="Transparent, Month-to-Month SEO Pricing for Pune"
            lead="Pune agencies charge ₹35,000+/month on 12-month contracts for comparable scope. FactoryJet publishes every tier, runs month to month, and lets you keep everything we build. With Pune's strong per-click economics, your budget goes further here. First results visible in 60–90 days."
            tiers={[
              {
                name: 'Starter',
                priceRange: '₹15,000/mo',
                description: 'Technical foundations and local SEO for one Pune location. Best for SMBs and service businesses that need the local pack and core-service rankings.',
                features: ['Full technical SEO audit + fixes', 'On-page optimisation, core pages', 'Local SEO + Google Business Profile', 'AI Overviews / FAQ schema setup', 'GA4 + Search Console wired up', 'Monthly report + strategy call'],
                cta: { label: 'Get Started', modal: true as const, region: 'in' as const },
              },
              {
                name: 'Growth',
                priceRange: '₹30,000/mo',
                description: 'Content and links on top of the foundations, across IT, auto, education, or D2C. Best for Pune businesses scaling organic as a real lead channel.',
                features: ['Everything in Starter', '4 content pieces / month (human-edited)', 'B2B / industrial or D2C content focus', 'Editorial link building (no PBNs)', 'Competitor gap monitoring', 'Priority support + monthly strategy call'],
                cta: { label: 'Get Started', modal: true as const, region: 'in' as const },
                popular: true,
              },
              {
                name: 'Custom',
                priceRange: '₹50,000+/mo',
                description: 'Competitive B2B industrial, national, or ecommerce SEO. Best for established Pune businesses where organic is a primary revenue line.',
                features: ['Everything in Growth, scaled', 'Industrial B2B / large-catalogue SEO', 'Competitive national keyword targets', 'Digital PR + advanced link acquisition', 'Dedicated senior strategist', 'Custom reporting + quarterly reviews'],
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
          headline="SEO Questions from Pune Businesses"
          lead="The questions we answer on every Pune SEO discovery call — answered here, without the runaround."
          categories={PUN_SEO_FAQ_CATEGORIES}
          items={PUN_SEO_FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Win Search in Pune?"
          sub="Pune is less saturated than Mumbai or Bangalore, which means well-executed SEO ranks faster and cheaper here — the best per-click economics of any market we work in. The businesses that move now, while competitors run generic packages, capture that edge. Start with a free audit: we will show you exactly where you stand and what the first 90 days look like."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          objectionHandler="From ₹15,000/month. No lock-in. You own everything we build. Reports you'll actually read."
        />

      </main>

      <SiteFooter locale="in" />
    </>
  );
}

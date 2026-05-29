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
  title: 'SEO Agency in Bangalore | From ₹15,000/Month | FactoryJet',
  description:
    'SEO agency in Bangalore for IT companies, D2C startups & SaaS brands. From ₹15,000/month. Local pack + organic + AI Overviews. Serving Koramangala, HSR, Whitefield & Indiranagar.',
  keywords: [
    'seo company in bangalore',
    'seo agency in bangalore',
    'seo services in bangalore',
    'best seo company in bangalore',
    'top seo company in bangalore',
    'best seo agency in bangalore',
    'seo expert in bangalore',
    'saas seo bangalore',
    'local seo bangalore',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Agency in Bangalore | From ₹15,000/Month | FactoryJet',
    description:
      'SEO agency in Bangalore for IT companies, D2C startups & SaaS brands. From ₹15,000/month. Local pack + organic + AI Overviews. Serving Koramangala, HSR, Whitefield & Indiranagar.',
    url: 'https://factoryjet.com/seo/bangalore',
    images: [
      {
        url: 'https://factoryjet.com/images/services/seo.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet SEO Agency in Bangalore',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Bangalore | FactoryJet',
    description: 'SEO agency in Bangalore. From ₹15,000/month. Local pack + organic + AI Overviews. No lock-in.',
    images: ['https://factoryjet.com/images/services/seo.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/seo/bangalore',
    languages: seoCityAlternatesIN['bangalore'],
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
  '@id': 'https://factoryjet.com/seo/bangalore#localbusiness',
  name: 'FactoryJet — SEO Agency in Bangalore',
  image: 'https://factoryjet.com/images/services/seo.webp',
  description:
    'SEO agency in Bangalore for IT companies, SaaS brands, and D2C startups. Technical SEO, local pack, organic, and AI Overviews optimisation. From ₹15,000/month, no lock-in.',
  url: 'https://factoryjet.com/seo/bangalore',
  telephone: '+919699977699',
  email: 'connect@factoryjet.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    addressCountry: 'IN',
  },
  areaServed: [
    { '@type': 'City', name: 'Bangalore' },
    { '@type': 'City', name: 'Koramangala' },
    { '@type': 'City', name: 'HSR Layout' },
    { '@type': 'City', name: 'Whitefield' },
    { '@type': 'City', name: 'Indiranagar' },
    { '@type': 'City', name: 'Electronic City' },
  ],
  geo: {
    '@type': 'GeoCircle',
    geoMidpoint: { '@type': 'GeoCoordinates', latitude: 12.9716, longitude: 77.5946 },
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
  '@id': 'https://factoryjet.com/seo/bangalore#service',
  serviceType: 'SEO Services in Bangalore',
  name: 'SEO Agency in Bangalore — FactoryJet',
  description:
    'SEO agency in Bangalore for IT companies, D2C startups & SaaS brands. From ₹15,000/month. Local pack + organic + AI Overviews.',
  url: 'https://factoryjet.com/seo/bangalore',
  provider: { '@type': 'Organization', name: 'FactoryJet Technologies', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'City', name: 'Bangalore' },
  offers: { '@type': 'Offer', price: '15000', priceCurrency: 'INR' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does SEO cost in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet SEO in Bangalore starts at ₹15,000/month for the Starter programme — technical fixes, on-page optimisation, and local SEO. Growth (₹30,000/month) adds content and link building. Custom programmes (₹50,000+/month) cover SaaS, competitive, and ecommerce SEO. Bangalore agencies typically charge ₹40,000+/month on a 12-month lock-in. FactoryJet runs month to month.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can FactoryJet rank a Bangalore SaaS against US-based competitors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — global SaaS SEO is a core strength. We target comparison and alternative keywords ("X vs Y", "best X for Z"), build comparison-page and integration-page content, and earn editorial links from international sources. Competing with funded US players takes 4–6 months of consistent content and link work, but the comparison-keyword strategy delivers qualified demo traffic earlier.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you cover the Whitefield IT corridor specifically?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We build location-specific SEO and Google Business Profile optimisation for Whitefield, plus the broader IT corridor — Marathahalli, Sarjapur Road, and Electronic City. For IT services firms competing on global mandates, we combine local credibility signals with global organic targeting.',
      },
    },
    {
      '@type': 'Question',
      name: "What's a realistic SEO timeline for a Bangalore D2C startup?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Branded and long-tail product rankings move in 30–60 days. Competitive category terms take 4–6 months, since you are often up against well-funded startups with in-house growth teams. We prioritise high-intent, lower-competition queries first so you see qualified traffic and demo signups early.',
      },
    },
  ],
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/seo/bangalore#webpage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2:first-of-type'] },
  url: 'https://factoryjet.com/seo/bangalore',
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const BLR_SEO_JOURNEY: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Audit',
    description:
      'Full technical, on-page, and backlink audit — crawl health, Core Web Vitals, indexation, and where you stand against the Koramangala, HSR, or Whitefield competitors you actually lose to, including the US-based ones. Findings in plain English. — Week 1',
  },
  {
    number: '02',
    title: 'Strategy',
    description:
      'A Bangalore-specific keyword map: comparison and alternative terms for SaaS, global plus local for IT services, local pack for D2C, and the AI Overviews coverage your funded competitors have not claimed. — Week 1–2',
  },
  {
    number: '03',
    title: 'Implementation',
    description:
      'Technical fixes first — schema, speed, internal linking, crawl budget — then on-page optimisation across money pages, comparison pages, and Google Business Profile. — Week 2–4',
  },
  {
    number: '04',
    title: 'Content & Links',
    description:
      'AI-assisted briefs, human-edited copy for technical and founder/dev audiences, and editorial links from real Indian and international sources. No PBNs, no bought links. — Ongoing',
  },
  {
    number: '05',
    title: 'Reporting',
    description:
      'A one-page monthly report your CEO will actually read: rankings that moved, traffic that converts, demos and leads attributed, and the exact three things we are doing next. — Monthly',
  },
];

const BLR_SEO_FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Pricing & Timeline' },
  { key: 'included', label: "What's Included" },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local', label: 'Bangalore Local' },
  { key: 'reporting', label: 'Reporting & Ownership' },
];

const BLR_SEO_FAQ_ITEMS = [
  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'How much does SEO cost in Bangalore?',
    answer:
      'FactoryJet SEO in Bangalore starts at ₹15,000/month for the Starter programme — technical fixes, on-page optimisation, and local SEO. Growth (₹30,000/month) adds content production and link building. Custom programmes (₹50,000+/month) cover SaaS, competitive, and ecommerce SEO. Bangalore agencies typically charge ₹40,000+/month, often on a 12-month lock-in. FactoryJet runs month to month.',
  },
  {
    category: 'pricing',
    question: 'How long until I see SEO results in Bangalore?',
    answer:
      'Branded and local-pack rankings move in 30–60 days. Competitive terms — where you face well-funded startups and global players — take 4–6 months of consistent content and link work. We report leading indicators from week one so you see direction long before revenue lands.',
  },
  {
    category: 'pricing',
    question: 'Do you require a long-term contract?',
    answer:
      'No. SEO with FactoryJet is month to month, with 30 days notice to pause or stop. We keep Bangalore clients by showing measurable progress — not by locking them into a 12-month agreement.',
  },
  {
    category: 'pricing',
    question: 'Why are you cheaper than other Bangalore SEO agencies?',
    answer:
      'We are a small, AI-native team without a Koramangala office or a sales floor to fund. AI handles research, briefs, and reporting at scale; senior humans handle strategy, editing, and technical work. You pay for what moves rankings, not the overhead.',
  },
  /* ── What's Included ── */
  {
    category: 'included',
    question: 'What does a Bangalore SEO programme include?',
    answer:
      'Technical SEO, on-page optimisation of your money pages, and local SEO including Google Business Profile for your Bangalore locations. Growth and Custom tiers add human-edited content, editorial link building, and AI Overviews optimisation. Every tier includes a monthly strategy call and a one-page report.',
  },
  {
    category: 'included',
    question: 'Do you do SaaS and comparison-page SEO?',
    answer:
      'Yes — it is one of our strengths for Bangalore. We build comparison pages ("X vs Y"), alternative pages ("best X for Z"), integration pages, and bottom-of-funnel content that captures buyers actively evaluating tools. This is where SaaS organic revenue actually comes from, and most local agencies do not do it well.',
  },
  {
    category: 'included',
    question: 'Do you write the content?',
    answer:
      'We do. AI builds the first-draft brief; an experienced editor shapes it into copy that holds up for a technical, founder, or developer audience and answers the buyer question directly. You approve every piece before it publishes. Volume scales with your tier.',
  },
  {
    category: 'included',
    question: 'Can you do ecommerce SEO for a Bangalore D2C brand?',
    answer:
      'Yes — ecommerce SEO sits in our Custom tier. Category and product-page optimisation, product schema, faceted-navigation crawl control, and content hubs that bring buyers. We work on Shopify and custom Next.js commerce.',
  },
  /* ── Technical & SEO ── */
  {
    category: 'technical',
    question: 'Do you optimise for Google AI Overviews?',
    answer:
      'Yes. A large share of Bangalore commercial and "best tool" queries now trigger an AI Overview that answers before any click. We structure content with question-and-answer architecture, FAQ and Service schema, and citable factual passages so Google AI Overviews, ChatGPT, and Perplexity cite your business — part of every programme.',
  },
  {
    category: 'technical',
    question: 'What technical SEO work do you handle?',
    answer:
      'Crawl-budget control, Core Web Vitals, JSON-LD schema, sitemaps, internal-linking architecture, canonical and indexation management, and render/speed fixes. For SaaS and product sites, we are comfortable in the codebase — Next.js, headless, and JS-rendered apps included.',
  },
  {
    category: 'technical',
    question: 'Will SEO work on my SaaS / Next.js / WordPress site?',
    answer:
      "Yes. JS-heavy SaaS and Next.js sites have specific rendering and indexation issues we know how to diagnose and fix — often the reason a Bangalore SaaS isn't ranking despite good content. WordPress and Shopify levers we know cold. The audit surfaces platform constraints up front.",
  },
  {
    category: 'technical',
    question: 'Do you fix site speed and Core Web Vitals?',
    answer:
      'Yes. Speed is a ranking and conversion factor, so it is part of the technical phase. We target green Core Web Vitals on mobile. Where a JS framework is causing structural performance problems, we flag the fix honestly rather than papering over it.',
  },
  /* ── Bangalore Local ── */
  {
    category: 'local',
    question: 'Can FactoryJet rank a Bangalore SaaS against US-based competitors?',
    answer:
      'Yes — global SaaS SEO is a core strength. We target comparison and alternative keywords, build comparison-page and integration-page content, and earn editorial links from international sources. Competing with funded US players takes 4–6 months of consistent work, but the comparison-keyword strategy delivers qualified demo traffic earlier.',
  },
  {
    category: 'local',
    question: 'Do you cover the Whitefield IT corridor specifically?',
    answer:
      'Yes. Location-specific SEO and Google Business Profile for Whitefield, plus the broader corridor — Marathahalli, Sarjapur Road, and Electronic City. For IT services firms chasing global mandates, we combine local credibility signals with global organic targeting.',
  },
  {
    category: 'local',
    question: 'Which Bangalore neighbourhoods do you target in local SEO?',
    answer:
      'We map SEO to where your buyers are: SaaS and startups in Koramangala and HSR Layout, IT services in Whitefield and Electronic City, and D2C and retail in Indiranagar, MG Road, and Jayanagar. LocalBusiness schema with neighbourhood-level areaServed improves relevance for area searches across the city.',
  },
  {
    category: 'local',
    question: "What's a realistic SEO timeline for a Bangalore D2C startup?",
    answer:
      'Branded and long-tail product rankings move in 30–60 days. Competitive category terms take 4–6 months, since you face well-funded startups with in-house growth teams. We prioritise high-intent, lower-competition queries first so you see qualified traffic and signups early.',
  },
  /* ── Reporting & Ownership ── */
  {
    category: 'reporting',
    question: 'What does your monthly report look like?',
    answer:
      'One page, five-minute read: the Bangalore keywords that moved and why, traffic that converts, demos and leads attributed to organic, and the exact three things we are doing next month. Full data available if you want it, but the summary is written for a founder or CEO, not an analyst.',
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
      'By demos, leads, and revenue — not rankings for their own sake. We agree target keywords and conversion events up front, wire up GA4 and Search Console properly, and report against the metrics that map to your pipeline. A number-one ranking that brings no signups is a vanity metric, and we say so.',
  },
  {
    category: 'reporting',
    question: 'Who works on my Bangalore account?',
    answer:
      'A small senior team — FactoryJet is founder-led, so you talk to the people doing the strategy and technical work, not a junior who inherited your account on day two. AI handles scale; humans own judgement, editing, and the relationship.',
  },
];

const BLR_SEO_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Bangalore Agency' },
  { label: 'Freelancer' },
  { label: 'DIY' },
] as const;

const BLR_SEO_COMPARISON_ROWS = [
  { feature: 'Starting price', values: ['₹15,000/mo', '₹40,000+/mo', '₹15,000–₹25,000/mo', '₹0 (your time)'] },
  { feature: 'Contract lock-in', values: ['None — monthly', '6–12 months typical', 'Varies', 'N/A'] },
  {
    feature: 'SaaS / comparison-page SEO',
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

export default function BangaloreSeoPage() {
  return (
    <>
      <Script id="blr-seo-localbusiness" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="blr-seo-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="blr-seo-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'SEO', url: 'https://factoryjet.com/seo' },
          { name: 'Bangalore', url: 'https://factoryjet.com/seo/bangalore' },
        ]}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          eyebrow="SEO · BANGALORE"
          headline="SEO Agency in Bangalore Built for Startups, IT Companies, and D2C Brands"
          lead="Bangalore drives over $20B in annual IT exports and hosts 15,000+ startups — your SEO has to outrank well-funded competitors with in-house growth teams. Koramangala SaaS brands fight HSR startups for the same founder and VC keywords. Whitefield IT firms compete with US and UK agencies for global mandates. FactoryJet builds SEO that works against funded competition, from ₹15,000/month, with monthly reports your CEO will actually read."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustItems={['SEO from ₹15,000/month', 'No lock-in contracts', '500+ sites optimised']}
          rightSlot={<HeroBrowserMockup badgeLabel="Ranks vs funded" badgeCity="Bangalore" />}
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        {/* ── 3. TRUST BLOCK ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ sites optimised. 4.9 average rating. SEO that ranks against funded competition."
        />

        {/* ── 4. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="BANGALORE MARKET"
          headline="Why SEO in Bangalore Means Outranking Funded Competitors"
          leadParagraphs={[
            "Bangalore is India's startup and IT capital — over $20B in annual IT exports and the densest concentration of funded startups in the country. That changes the SEO maths: your competitors are not under-resourced local businesses, they are venture-backed companies with in-house content and growth teams targeting the exact keywords you need.",
            "Winning organic in Bangalore is not about spending more — it is about being sharper. A Koramangala SaaS competes on comparison and alternative keywords, not just brand terms. A Whitefield IT services firm competes globally and locally at once. A D2C startup in Indiranagar fights national ecommerce for category terms. Each needs a distinct strategy, not a generic package.",
            "The Bangalore companies that win organic are the ones doing the work funded competitors are too distracted to do well: clean technical foundations, genuine comparison-page SEO, and AI Overviews coverage. That is precisely where FactoryJet operates.",
          ]}
          stats={[
            {
              value: '$20B+',
              label: "Bangalore's annual IT export revenue — India's largest IT hub",
              sourceUrl: 'https://stpi.in/',
              sourceLabel: 'STPI',
            },
            {
              value: '15,000+',
              label: 'Registered startups in Bangalore — the highest in India',
              sourceUrl: 'https://www.startupindia.gov.in/',
              sourceLabel: 'Startup India',
            },
            {
              value: '~40%',
              label: "of India's IT services workforce is based in Bangalore",
              sourceUrl: 'https://nasscom.in/',
              sourceLabel: 'NASSCOM',
            },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION (two buyer types) ─────────────────────── */}
        <ServiceExplanation
          eyebrow="SEO · BANGALORE"
          headline="What 'SEO' Actually Means for a Bangalore Business"
          lead="Bangalore runs on two search behaviours — B2B IT and SaaS buyers comparing tools and vendors, and D2C consumers deciding on mobile. Each needs a different SEO strategy. FactoryJet builds for both."
          body={
            <>
              <p>
                For Bangalore&apos;s IT and SaaS companies — in Koramangala, HSR Layout, and Whitefield —
                SEO is about comparison-page strategy and technical content. Buyers evaluate tools and
                vendors against alternatives before they ever book a demo. You win by ranking for
                &quot;X vs Y&quot; and &quot;best X for Z&quot; queries, publishing technical content that
                earns developer and founder trust, and mixing global organic with local credibility.
              </p>
              <p>
                For Bangalore&apos;s D2C brands and retail in Indiranagar, MG Road, and Jayanagar, the game
                is local pack and ecommerce SEO. Consumers search on mobile and decide fast. You win with
                Google Business Profile dominance, quick mobile pages, product and category SEO, and Maps
                optimisation for &quot;near me&quot; intent.
              </p>
              <p>
                Every FactoryJet Bangalore programme covers technical SEO, local SEO, and AI Overviews
                optimisation as standard — then layers comparison content, technical content, and links by
                tier. You keep every page, brief, and link, and the reporting is built for a founder, not
                an analyst.
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
                  { type: 'B2B IT / SaaS', need: 'Comparison SEO + technical content', area: 'Koramangala · HSR · Whitefield', colour: '#F05A28' },
                  { type: 'D2C / Retail', need: 'Local pack + ecommerce + Maps', area: 'Indiranagar · MG Road · Jayanagar', colour: '#0F0F12' },
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
          headline="Why Bangalore Businesses Choose FactoryJet for SEO"
          lead="Bangalore SEO agencies sell 12-month contracts, junior account managers, and reports nobody reads — at ₹40,000+/month. FactoryJet is AI-native, founder-led, month-to-month, and built to compete against the funded teams you are up against."
          pillars={[
            {
              icon: '🤖',
              title: 'AI-native, built for the new SERP.',
              body: 'Bangalore "best tool" and comparison queries increasingly trigger AI Overviews that cite a few sources and skip the rest. We optimise for AI search from day one so your product gets cited — while most local agencies are still chasing ten blue links. AI handles research and scale; senior humans handle strategy and editing.',
            },
            {
              icon: '🛡️',
              title: 'No black-hat tactics. Ever.',
              body: 'No PBNs, no bought links, no doorway pages. The agencies promising rank-in-30-days are the ones who get clients penalised. We build durable SEO — technical foundations, real content, editorial links — so you keep ranking after funded competitors burn out their shortcuts.',
            },
            {
              icon: '📊',
              title: 'Month-to-month. Reports your CEO reads.',
              body: 'One page a month: the Bangalore keywords that moved, the traffic that converted, the demos and leads attributed, and the next three things. No lock-in, no jargon, no vanity metrics. We keep clients by showing progress.',
            },
          ]}
        />

        {/* ── 7. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR SEO PROCESS"
          headline="How We Run Your Bangalore SEO Programme"
          lead="Audit before strategy. Technical fixes before content. Reporting from week one."
          stages={BLR_SEO_JOURNEY}
          closingNote="5 STAGES · AI-NATIVE · MONTH-TO-MONTH · NO PBNs · COMPARISON SEO + LOCAL PACK + AI OVERVIEWS"
        />

        {/* ── 8. RECENT WORK (coming soon) ─────────────────────────────────── */}
        <section className="relative overflow-hidden bg-fj-cream py-14 md:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-[0.5]" aria-hidden="true" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <p className="font-fj-mono font-medium uppercase text-[#F05A28]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>RECENT WORK</p>
            <h2 className="fj-display mt-3 font-semibold text-fj-ink" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              Bangalore SEO case studies are on the way
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-fj-body text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              We are publishing documented SEO results — rankings, traffic, and leads — from live FactoryJet programmes in Bangalore and across India. The foundation is the same one behind 500+ websites we have shipped, at a 4.9 average client rating.
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
          headline="FactoryJet vs. Bangalore Agency vs. Freelancer vs. DIY"
          lead="Four ways to do SEO in Bangalore. The honest comparison — price, lock-in, what is covered, and what you own when it is done."
          pullQuote={{ stat: 'No lock-in', caption: 'month-to-month SEO from ₹15,000 — with the comparison-page and AI-search strategy most Bangalore agencies do not run.' }}
          columns={BLR_SEO_COMPARISON_COLUMNS}
          rows={BLR_SEO_COMPARISON_ROWS}
          footer="Prices reflect typical Bangalore SEO market ranges as of 2025. FactoryJet programmes run month to month with 30 days notice."
        />

        {/* ── 10. INDUSTRIES ───────────────────────────────────────────────── */}
        <IndustriesGrid
          eyebrow="BANGALORE × SEO"
          headline="SEO for Bangalore's Key Industries"
          lead="From Koramangala SaaS to Whitefield IT services to Indiranagar D2C — Bangalore's industries compete on very different queries. FactoryJet has run SEO across each."
          sectors={[
            { name: 'SaaS & Software', description: 'Koramangala and HSR product companies. Comparison and alternative-keyword SEO, integration pages, and technical content that earns developer and founder trust.' },
            { name: 'IT Services', description: 'Whitefield and Electronic City firms chasing global mandates. Global organic targeting combined with local credibility signals and case-study content.' },
            { name: 'D2C & Retail', description: 'Indiranagar and Jayanagar brands. Ecommerce SEO, product and category optimisation, local pack, and Maps for "near me" intent.' },
            { name: 'Fintech', description: 'Bangalore fintech competing on trust and compliance. E-E-A-T content, regulatory-aware keywords, and authority signals built for longer evaluation cycles.' },
            { name: 'Healthcare & HealthTech', description: 'Clinics, diagnostics, and health SaaS. Local SEO, appointment-intent keywords, and compliance-aware, authority-strong content.' },
            { name: 'Professional Services', description: 'Consultancies, agencies, and CA/legal firms. Authority content and local pack that turn research into booked consultations.' },
          ]}
        />

        {/* ── 11. PRICING ──────────────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="TRANSPARENT PRICING"
            headline="Transparent, Month-to-Month SEO Pricing for Bangalore"
            lead="Bangalore agencies charge ₹40,000+/month on 12-month contracts for comparable scope. FactoryJet publishes every tier, runs month to month, and lets you keep everything we build. First results visible in 60–90 days."
            tiers={[
              {
                name: 'Starter',
                priceRange: '₹15,000/mo',
                description: 'Technical foundations and local SEO for one Bangalore location. Best for SMBs and service businesses that need the local pack and core-service rankings.',
                features: ['Full technical SEO audit + fixes', 'On-page optimisation, core pages', 'Local SEO + Google Business Profile', 'AI Overviews / FAQ schema setup', 'GA4 + Search Console wired up', 'Monthly report + strategy call'],
                cta: { label: 'Get Started', modal: true as const, region: 'in' as const },
              },
              {
                name: 'Growth',
                priceRange: '₹30,000/mo',
                description: 'Content, comparison pages, and links on top of the foundations. Best for SaaS and brands scaling organic as a real lead channel.',
                features: ['Everything in Starter', '4 content pieces / month (human-edited)', 'Comparison & alternative-page SEO', 'Editorial link building (no PBNs)', 'Competitor gap monitoring', 'Priority support + monthly strategy call'],
                cta: { label: 'Get Started', modal: true as const, region: 'in' as const },
                popular: true,
              },
              {
                name: 'Custom',
                priceRange: '₹50,000+/mo',
                description: 'Global SaaS, national, or ecommerce SEO for competitive Bangalore markets. Best for established businesses where organic is a primary revenue line.',
                features: ['Everything in Growth, scaled', 'Global SaaS / large-catalogue SEO', 'Competitive national keyword targets', 'Digital PR + advanced link acquisition', 'Dedicated senior strategist', 'Custom reporting + quarterly reviews'],
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
          headline="SEO Questions from Bangalore Businesses"
          lead="The questions we answer on every Bangalore SEO discovery call — answered here, without the runaround."
          categories={BLR_SEO_FAQ_CATEGORIES}
          items={BLR_SEO_FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Outrank Funded Competition in Bangalore?"
          sub="In Bangalore you are not competing against under-resourced local businesses — you are competing against venture-backed teams targeting your exact keywords. The way to win is to be sharper, not to outspend. Start with a free audit: we will show you exactly where you stand against your Koramangala, HSR, or Whitefield competitors and what the first 90 days look like."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          objectionHandler="From ₹15,000/month. No lock-in. You own everything we build. Reports your CEO will actually read."
        />

      </main>

      <SiteFooter locale="in" />
    </>
  );
}

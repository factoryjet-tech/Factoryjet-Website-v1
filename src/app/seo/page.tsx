import type { Metadata } from 'next';
import Script from 'next/script';
import { seoHubAlternates } from '@/data/hreflangMap';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import Hero from '@/components/v2/Hero';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
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
  title: 'SEO Services in India | From ₹15,000/Month | FactoryJet',
  description:
    'AI-native SEO agency serving Mumbai, Bangalore, Pune & 19 Indian cities. From ₹15,000/month. No lock-ins. Real reporting. 500+ sites optimised.',
  keywords: [
    'seo company in india',
    'seo agency india',
    'seo services india',
    'best seo company in india',
    'affordable seo services india',
    'ai seo agency india',
    'local seo services india',
    'technical seo company india',
    'seo agency mumbai bangalore pune',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Services in India | From ₹15,000/Month | FactoryJet',
    description:
      'AI-native SEO agency serving Mumbai, Bangalore, Pune & 19 Indian cities. From ₹15,000/month. No lock-ins. Real reporting. 500+ sites optimised.',
    url: 'https://factoryjet.com/seo',
    images: [
      {
        url: 'https://factoryjet.com/images/services/seo.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet SEO Services in India',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Services in India | FactoryJet',
    description:
      'AI-native SEO agency. From ₹15,000/month. No lock-ins. Real reporting you can read. 500+ sites optimised.',
    images: ['https://factoryjet.com/images/services/seo.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/seo',
    languages: seoHubAlternates,
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

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://factoryjet.com/seo#service',
  serviceType: 'Search Engine Optimisation',
  name: 'SEO Services — FactoryJet',
  description:
    'AI-native SEO agency serving Mumbai, Bangalore, Pune and 19 Indian cities. Technical SEO, on-page, local SEO, content, link building, and AI Overviews optimisation. From ₹15,000/month. No lock-in contracts.',
  url: 'https://factoryjet.com/seo',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet Technologies',
    url: 'https://factoryjet.com',
    telephone: '+919699977699',
  },
  areaServed: { '@type': 'Country', name: 'India' },
  offers: {
    '@type': 'Offer',
    price: '15000',
    priceCurrency: 'INR',
    description: 'SEO programmes from ₹15,000/month — Starter tier.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much do SEO services cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "FactoryJet SEO starts at ₹15,000/month for the Starter programme — technical fixes, on-page optimisation, and local SEO for one location. Growth (₹30,000/month) adds content production, link building, and multi-location targeting. Custom programmes (₹50,000+/month) cover competitive national keywords and ecommerce SEO. Indian SEO agencies typically charge ₹40,000+/month for comparable scope, often locked into 12-month contracts. FactoryJet has no lock-in.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does SEO take to show results in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Branded and local-pack rankings typically move within 30–60 days. Competitive service-plus-city keywords take 3–6 months for a site with no prior SEO history. We report progress monthly from week one, so you can see leading indicators — indexation, impressions, and ranking movement — well before revenue impact lands.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you optimise for Google AI Overviews and AI search?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Google AI Overviews, ChatGPT, and Perplexity now answer a large share of commercial queries before a user clicks anything. We structure your content with clear question-and-answer architecture, FAQ schema, and citable, factual passages so AI engines surface and cite your business — not just your competitors.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you require a long-term contract?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. FactoryJet SEO runs month to month. We keep clients by showing measurable progress in a report you can actually read — not by locking you into a 12-month agreement. You can pause or stop with 30 days notice.',
      },
    },
  ],
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/seo#webpage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: 'https://factoryjet.com/seo',
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const SEO_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Audit',
    description:
      'We run a full technical, on-page, and backlink audit — crawl health, Core Web Vitals, indexation gaps, keyword cannibalisation, and where you stand against the three competitors you actually lose deals to. You get the findings in plain English. — Week 1',
  },
  {
    number: '02',
    title: 'Strategy',
    description:
      'We build a keyword map tied to revenue, not vanity volume: which queries bring buyers, which bring tyre-kickers, and which your competitors have left open. Local pack, organic, and AI Overviews coverage planned together. — Week 1–2',
  },
  {
    number: '03',
    title: 'Implementation',
    description:
      'Technical fixes shipped first — schema, site speed, internal linking, crawl budget. Then on-page optimisation across your money pages. We work directly in the codebase or hand your developer a precise change list. — Week 2–4',
  },
  {
    number: '04',
    title: 'Content & Links',
    description:
      'AI-assisted content briefs, human-edited copy, and clean, editorial link acquisition. No private blog networks, no bought links, no tactics that get you penalised. Every asset targets a mapped keyword and a buyer question. — Ongoing',
  },
  {
    number: '05',
    title: 'Reporting',
    description:
      'A monthly report written for a business owner, not an analyst — rankings that matter, traffic that converts, leads attributed, and the exact three things we are doing next. No 40-page PDF you never open. — Monthly',
  },
];

const SEO_FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Pricing & Timeline' },
  { key: 'included', label: "What's Included" },
  { key: 'technical', label: 'Technical' },
  { key: 'reporting', label: 'Reporting & Ownership' },
];

const SEO_FAQ_ITEMS = [
  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'How much do SEO services cost in India?',
    answer:
      "FactoryJet SEO starts at ₹15,000/month for the Starter programme — technical fixes, on-page optimisation, and local SEO for one location. Growth (₹30,000/month) adds content production, link building, and multi-location targeting. Custom programmes (₹50,000+/month) cover competitive national keywords and ecommerce SEO. Indian agencies typically charge ₹40,000+/month for comparable scope, often on a 12-month lock-in. FactoryJet runs month to month.",
  },
  {
    category: 'pricing',
    question: 'How long does SEO take to work?',
    answer:
      'Branded and local-pack rankings usually move within 30–60 days. Competitive service-plus-city keywords take 3–6 months for a new or previously un-optimised site. We report leading indicators — indexation, impressions, ranking movement — from week one, so you see direction long before the revenue impact lands.',
  },
  {
    category: 'pricing',
    question: 'Why is FactoryJet cheaper than other Indian SEO agencies?',
    answer:
      'We are a small, AI-native engineering and content team — not a 40-person agency with account managers and a sales floor to fund. AI handles the heavy lifting on research, briefs, and reporting; humans handle strategy, editing, and the technical work that actually moves rankings. You pay for the work, not the overhead.',
  },
  {
    category: 'pricing',
    question: 'Do I have to sign a long-term contract?',
    answer:
      'No. FactoryJet SEO is month to month. We keep clients by showing measurable progress, not by locking them in. You can pause or stop with 30 days notice, and you keep everything we have built.',
  },
  /* ── What's Included ── */
  {
    category: 'included',
    question: 'What does an SEO programme actually include?',
    answer:
      'Every programme covers technical SEO (crawl, speed, schema, indexation), on-page optimisation of your money pages, and local SEO including Google Business Profile. Growth and Custom tiers add content production, editorial link building, and AI Overviews optimisation. You get a monthly strategy call and a report you can read in five minutes.',
  },
  {
    category: 'included',
    question: 'Do you write the content, or do I?',
    answer:
      'We do. AI generates the first-draft brief and structure; an experienced editor shapes it into copy that reads like a person wrote it and answers the buyer question directly. You review and approve every piece before it publishes. Content volume scales with your tier.',
  },
  {
    category: 'included',
    question: 'Do you do link building, and is it safe?',
    answer:
      'Yes, on Growth and Custom tiers. We only pursue editorial links — digital PR, genuine guest contributions, and resource placements on real sites with real traffic. No private blog networks, no paid link farms, no tactics that risk a manual action. Slower, but it does not blow up your rankings six months later.',
  },
  {
    category: 'included',
    question: 'Can you optimise an ecommerce store?',
    answer:
      'Yes. Ecommerce SEO — category page optimisation, product schema, faceted-navigation crawl control, and content hubs — sits in our Custom tier. We have built and optimised stores on Shopify and custom Next.js commerce, so we work on the platform you already run.',
  },
  /* ── Technical ── */
  {
    category: 'technical',
    question: 'Do you optimise for Google AI Overviews and AI search?',
    answer:
      'Yes. Google AI Overviews, ChatGPT, and Perplexity now answer a large share of commercial queries before a user clicks. We structure content with clear question-and-answer architecture, FAQ and Service schema, and citable, factual passages so AI engines surface and cite your business — a core part of every programme, not an add-on.',
  },
  {
    category: 'technical',
    question: 'What technical SEO work do you handle?',
    answer:
      'Crawl-budget optimisation, Core Web Vitals, JSON-LD schema, XML sitemaps, internal-linking architecture, canonical and indexation control, hreflang for multi-region sites, and render and speed fixes. We can implement directly if your site is on a modern stack, or hand your developer a precise, prioritised change list.',
  },
  {
    category: 'technical',
    question: 'Will SEO work on my WordPress / Shopify / Next.js site?',
    answer:
      'Yes. We work on whatever you run. WordPress and Shopify have well-understood SEO levers we know cold; Next.js and headless builds we can often implement on directly. The audit identifies the platform-specific constraints up front so there are no surprises later.',
  },
  {
    category: 'technical',
    question: 'Do you fix Core Web Vitals and site speed?',
    answer:
      'Yes — site speed is a ranking factor and a conversion factor, so it is part of the technical phase. We target green Core Web Vitals on mobile, since most Indian search traffic is mobile on variable 4G. Where speed problems are structural, we flag the rebuild option honestly rather than papering over it.',
  },
  /* ── Reporting & Ownership ── */
  {
    category: 'reporting',
    question: 'What does your monthly report look like?',
    answer:
      'One page you can read in five minutes: the keywords that moved and why, traffic that converts (not just total sessions), leads attributed to organic, and the exact three things we are doing next month. Backed by full data if you want to dig in — but the summary is written for a business owner, not an analyst.',
  },
  {
    category: 'reporting',
    question: 'Do I own the content and links you create?',
    answer:
      'Yes — entirely. Every page, brief, and asset we produce is yours and lives on your domain. Links point to your site. If you stop working with us, you keep all of it. There is no proprietary platform you have to keep paying for to retain your rankings.',
  },
  {
    category: 'reporting',
    question: 'How do you measure success?',
    answer:
      'By leads and revenue, not rankings for their own sake. We agree the target keywords and conversion events up front, wire up GA4 and Search Console properly, and report against the metrics that map to your pipeline. A number-one ranking that brings no enquiries is a vanity metric, and we say so.',
  },
  {
    category: 'reporting',
    question: 'Who works on my account?',
    answer:
      'A small senior team, not a junior passed your account on day two. FactoryJet is founder-led: you talk to the people doing the strategy and the technical work. AI handles scale; humans own judgement, editing, and the relationship.',
  },
];

const SEO_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Local SEO Agency' },
  { label: 'Freelancer' },
  { label: 'DIY' },
] as const;

const SEO_COMPARISON_ROWS = [
  {
    feature: 'Starting price',
    values: ['₹15,000/mo', '₹40,000+/mo', '₹15,000–₹25,000/mo', '₹0 (your time)'],
  },
  {
    feature: 'Contract lock-in',
    values: ['None — monthly', '6–12 months typical', 'Varies', 'N/A'],
  },
  {
    feature: 'AI Overviews optimisation',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'Technical SEO + Core Web Vitals',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'Editorial link building (no PBNs)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'Reports you can actually read',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="no" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'You own all content & links',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="diy" kind="yes" />,
    ],
  },
  {
    feature: 'Founder-led senior team',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="no" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function SeoHubPage() {
  return (
    <>
      <Script
        id="seo-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="seo-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'SEO', url: 'https://factoryjet.com/seo' },
        ]}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          eyebrow="SEO SERVICES · INDIA"
          headline="SEO Services That Bring Leads — Not Just Rankings"
          lead="Google AI Overviews now answer commercial queries before anyone clicks. Voice and 'near me' searches own the local pack. The SERP your customers see in 2026 looks nothing like the one most Indian agencies still optimise for. FactoryJet builds AI-native SEO programmes for SMBs across Mumbai, Bangalore, Pune and 19 more Indian cities — from ₹15,000/month, no lock-in, with monthly reports you can actually read."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustItems={[
            'SEO from ₹15,000/month',
            'No lock-in contracts',
            '500+ sites optimised',
          ]}
          rightSlot={<HeroBrowserMockup badgeLabel="Core Web Vitals" badgeCity="India" />}
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        {/* ── 3. TRUST BLOCK ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ sites optimised. 4.9 average rating. One report you'll actually read."
        />

        {/* ── 4. WHAT SEO INCLUDES ─────────────────────────────────────────── */}
        <IndustriesGrid
          eyebrow="WHAT'S INCLUDED"
          headline="What 'SEO' Actually Includes at FactoryJet"
          lead="SEO is not one thing — it is six disciplines that have to work together. A perfect technical site with no content does not rank. Great content on a slow, un-crawlable site does not rank either. We cover all six."
          sectors={[
            {
              name: 'Technical SEO',
              description:
                'Crawl-budget control, Core Web Vitals, JSON-LD schema, XML sitemaps, indexation and canonical management, and render/speed fixes. The foundation everything else stands on.',
              example: 'Site speed, schema, crawlability, indexation.',
            },
            {
              name: 'On-Page SEO',
              description:
                'Title and meta optimisation, heading structure, keyword mapping to money pages, content depth, and internal linking that passes authority to the pages that close deals.',
              example: 'Money-page optimisation + internal linking.',
            },
            {
              name: 'Off-Page / Link Building',
              description:
                'Editorial links only — digital PR, genuine contributions, and resource placements on real sites with real traffic. No PBNs, no bought links, no manual-action risk.',
              example: 'Digital PR + editorial placements.',
            },
            {
              name: 'Local SEO + Google Business Profile',
              description:
                'Local-pack dominance for "near me" searches, Google Business Profile optimisation, citation consistency, and review strategy — critical for SMB B2B and service businesses.',
              example: 'Local pack + Maps + GBP.',
            },
            {
              name: 'Content SEO',
              description:
                'AI-assisted briefs, human-edited copy, and topic clusters that build authority around your core service. Every asset targets a mapped keyword and a real buyer question.',
              example: 'Topic clusters + buyer-intent content.',
            },
            {
              name: 'AI Overviews Optimisation',
              description:
                'Structuring content so Google AI Overviews, ChatGPT, and Perplexity cite your business. Question-and-answer architecture, FAQ schema, and citable factual passages.',
              example: 'Get cited by AI search, not skipped.',
            },
          ]}
        />

        {/* ── 5. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="Why SMBs Choose FactoryJet for SEO"
          lead="Most Indian SEO agencies sell you a 12-month contract, a junior account manager, and a 40-page report nobody reads. FactoryJet is built differently: AI-native, founder-led, month-to-month, and honest about what SEO can and cannot do for your business."
          pillars={[
            {
              icon: '🤖',
              title: 'AI-native, not AI-spam.',
              body: 'We use AI where it genuinely helps — research, content briefs, reporting, and AI Overviews optimisation — and put experienced humans on strategy, editing, and the technical work that actually moves rankings. The result is the speed of AI with the judgement of a senior team, at a price a 40-person agency cannot match.',
            },
            {
              icon: '🛡️',
              title: 'No black-hat tactics. Ever.',
              body: 'No private blog networks, no bought links, no doorway pages, no tactics that rank you for six months and then get you penalised. We build SEO the slow, durable way — technical foundations, real content, editorial links — because we want you ranking next year, not just next quarter.',
            },
            {
              icon: '📊',
              title: 'Reports written in plain English.',
              body: 'One page a month: the keywords that moved, the traffic that converted, the leads attributed to organic, and the exact three things we are doing next. No vanity metrics, no jargon, no lock-in. We keep clients by showing progress — not by trapping them in a contract.',
            },
          ]}
        />

        {/* ── 6. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR SEO PROCESS"
          headline="How We Run Your SEO Programme"
          lead="Audit before strategy. Technical fixes before content. Reporting from week one — so you always know what we are doing and why."
          stages={SEO_JOURNEY_STAGES}
          closingNote="5 STAGES · AI-NATIVE · MONTH-TO-MONTH · NO PBNs · REPORTING YOU'LL READ"
        />

        {/* ── 7. RECENT WORK (coming soon) ─────────────────────────────────── */}
        <section className="relative overflow-hidden bg-fj-cream py-14 md:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.5]"
            aria-hidden="true"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <p
              className="font-fj-mono font-medium uppercase text-[#F05A28]"
              style={{ fontSize: '11px', letterSpacing: '0.14em' }}
            >
              RECENT WORK
            </p>
            <h2
              className="fj-display mt-3 font-semibold text-fj-ink"
              style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}
            >
              SEO case studies are on the way
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-fj-body text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              We are publishing documented SEO results — rankings, traffic, and leads — from live FactoryJet programmes. In the meantime, the foundation is the same one behind 500+ websites we have shipped: technical depth, real content, and a 4.9 average client rating.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-fj-ink/15 bg-white px-6 py-3 font-fj-body font-semibold text-fj-ink transition hover:border-[#F05A28] hover:text-[#F05A28]"
                style={{ fontSize: '0.9375rem' }}
              >
                See our website portfolio →
              </a>
            </div>
          </div>
        </section>

        {/* ── 8. COMPARISON TABLE ──────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Local Agency vs. Freelancer vs. DIY"
          lead="There are four ways to do SEO in India. Here is the honest comparison — price, lock-in, what is actually covered, and what you own when it is done."
          pullQuote={{
            stat: 'No lock-in',
            caption:
              'month-to-month SEO from ₹15,000 — the same AI-native programme local agencies sell on a 12-month contract at ₹40,000+.',
          }}
          columns={SEO_COMPARISON_COLUMNS}
          rows={SEO_COMPARISON_ROWS}
          footer="Prices reflect typical Indian SEO market ranges as of 2025. FactoryJet programmes run month to month with 30 days notice to pause or stop."
        />

        {/* ── 9. CITIES WE SERVE ───────────────────────────────────────────── */}
        <IndustriesGrid
          eyebrow="CITIES WE SERVE"
          headline="SEO Programmes Built for Your City's Market"
          lead="Search competition, buyer behaviour, and the keywords that convert differ by city. We build city-specific SEO for India's most competitive markets — with more cities added as we grow."
          sectors={[
            {
              name: 'SEO Agency in Mumbai',
              description:
                "India's most competitive SEO market — D2C in BKC, BFSI in Nariman Point, B2B exporters in Lower Parel. Mumbai-specific keyword maps, local pack, and AI Overviews coverage.",
              example: 'Explore SEO in Mumbai',
              linkLabel: 'Explore SEO in Mumbai',
              linkHref: '/seo/mumbai',
            },
            {
              name: 'SEO Agency in Bangalore',
              description:
                'SEO that ranks against funded competition — SaaS in Koramangala, IT services in Whitefield, D2C startups in Indiranagar. Comparison-page SEO and global-plus-local strategy.',
              example: 'Explore SEO in Bangalore',
              linkLabel: 'Explore SEO in Bangalore',
              linkHref: '/seo/bangalore',
            },
            {
              name: 'SEO Agency in Pune',
              description:
                "Built for Pune's economy — IT in Hinjewadi, auto suppliers in Chakan and PCMC, premium D2C in Koregaon Park. Industrial B2B keyword targeting and local pack.",
              example: 'Explore SEO in Pune',
              linkLabel: 'Explore SEO in Pune',
              linkHref: '/seo/pune',
            },
          ]}
        />

        {/* ── 10. INDUSTRIES ───────────────────────────────────────────────── */}
        <IndustriesGrid
          eyebrow="INDUSTRIES WE SERVE"
          headline="SEO for India's SMB Sectors"
          lead="Different industries compete on different queries and different buyer journeys. We have run SEO across all of these."
          sectors={[
            {
              name: 'E-Commerce & D2C',
              description:
                'Category and product-page SEO, product schema, faceted-navigation crawl control, and content hubs that bring buyers, not browsers. On Shopify or custom commerce.',
            },
            {
              name: 'Professional Services',
              description:
                'CA firms, law practices, consultancies, and agencies. Authority content, local pack, and trust signals that turn research into booked consultations.',
            },
            {
              name: 'Healthcare',
              description:
                'Clinics, diagnostics, and healthcare SaaS. Local SEO, appointment-intent keywords, and compliance-aware, E-E-A-T-strong content.',
            },
            {
              name: 'Retail',
              description:
                'Multi-location retail and franchises. Local pack at scale, Google Business Profile management, and store-locator SEO across every branch.',
            },
            {
              name: 'Restaurants & Hospitality',
              description:
                '"Near me" dominance, Maps optimisation, review strategy, and menu and booking schema — where the local pack is the whole game.',
            },
            {
              name: 'Real Estate',
              description:
                'Project, locality, and developer SEO. Micro-market keyword targeting, RERA-aware content, and lead-capture pages that route enquiries to the right team.',
            },
          ]}
        />

        {/* ── 11. PRICING ──────────────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="TRANSPARENT PRICING"
            headline="Transparent, Month-to-Month SEO Pricing"
            lead="Indian agencies charge ₹40,000+/month on 12-month contracts for comparable scope. FactoryJet publishes every tier, runs month to month, and lets you keep everything we build. First results visible in 60–90 days."
            tiers={[
              {
                name: 'Starter',
                priceRange: '₹15,000/mo',
                description:
                  'Technical foundations and local SEO for one location. Best for SMBs and service businesses that need to show up in the local pack and rank for their core service.',
                features: [
                  'Full technical SEO audit + fixes',
                  'On-page optimisation, core pages',
                  'Local SEO + Google Business Profile',
                  'AI Overviews / FAQ schema setup',
                  'GA4 + Search Console wired up',
                  'Monthly report + strategy call',
                ],
                cta: { label: 'Get Started', modal: true as const, region: 'in' as const },
              },
              {
                name: 'Growth',
                priceRange: '₹30,000/mo',
                description:
                  'Content and links added to the foundations, across multiple locations. Best for SMBs scaling organic as a real lead channel.',
                features: [
                  'Everything in Starter',
                  '4 content pieces / month (human-edited)',
                  'Editorial link building (no PBNs)',
                  'Multi-location / multi-service targeting',
                  'Competitor gap monitoring',
                  'Priority support + monthly strategy call',
                ],
                cta: { label: 'Get Started', modal: true as const, region: 'in' as const },
                popular: true,
              },
              {
                name: 'Custom',
                priceRange: '₹50,000+/mo',
                description:
                  'National-scale or ecommerce SEO for competitive markets. Best for established businesses where organic is a primary revenue line.',
                features: [
                  'Everything in Growth, scaled',
                  'Ecommerce / large-catalogue SEO',
                  'Competitive national keyword targets',
                  'Digital PR + advanced link acquisition',
                  'Dedicated senior strategist',
                  'Custom reporting + quarterly reviews',
                ],
                cta: { label: 'Talk to the Founder', modal: true as const, region: 'in' as const },
              },
            ] as const}
            footnote="All prices in INR per month, no lock-in. You own all content and links produced. GA4, Search Console, and reporting included on every tier. Pause or stop with 30 days notice."
          />
        </div>

        {/* ── 12. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What India's founders say about working with FactoryJet"
          region="in"
        />

        {/* ── 13. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="SEO Questions, Answered Straight"
          lead="The questions every business owner asks before starting SEO — answered here, without the runaround."
          categories={SEO_FAQ_CATEGORIES}
          items={SEO_FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Rank — and Get Cited by AI?"
          sub="The SERP is changing faster than it has in a decade. The businesses that win in 2026 are the ones structuring for AI Overviews and local intent now, while their competitors are still buying links. Start with a free audit — we will show you exactly where you stand and what the first 90 days look like."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          objectionHandler="From ₹15,000/month. No lock-in. You own everything we build. Reports you'll actually read."
        />

      </main>

      <SiteFooter locale="in" />
    </>
  );
}

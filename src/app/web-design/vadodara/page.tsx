import type { Metadata } from 'next';
import Script from 'next/script';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import Hero from '@/components/v2/Hero';
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

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Web Design Company in Vadodara | | FactoryJet',
  description:
    'Web design company in Vadodara for chemical exporters, engineering firms, and B2B manufacturers. Fast websites from ₹29,999. 7-day delivery. Serving GIDC Makarpura, Waghodia & Savli.',
  keywords: [
    'web design company in Vadodara',
    'website design Vadodara',
    'web development Vadodara',
    'web design Baroda',
    'website design company Vadodara',
    'affordable web design Vadodara',
    'professional website design Vadodara',
    'web design GIDC Makarpura',
    'B2B website design Baroda',
    'web design for chemical companies Vadodara',
    'ecommerce website Vadodara',
    'web design agency Vadodara',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Vadodara | | FactoryJet',
    description:
      'Professional website design company in Vadodara — Next.js, SEO, and GA4 included. 7-day delivery. Serving GIDC Makarpura, Waghodia, Savli, and Vadodara city businesses.',
    url: 'https://factoryjet.com/web-design/vadodara',
    images: [
      {
        url: 'https://factoryjet.com/images/services/web-design.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Web Design Services in Vadodara',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Vadodara | FactoryJet',
    description:
      'Website design company in Vadodara. 7-day delivery. Next.js, SEO, GA4 included.',
    images: ['https://factoryjet.com/images/services/web-design.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/web-design/vadodara',
    languages: {
      'en-IN': 'https://factoryjet.com/web-design/vadodara',
      'x-default': 'https://factoryjet.com/web-design/vadodara',
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

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD Schemas
───────────────────────────────────────────────────────────────────────────── */

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://factoryjet.com/#organization',
  name: 'FactoryJet',
  description:
    'Web design company in Vadodara building fast, SEO-optimized websites for chemical exporters, engineering manufacturers, pharma companies, and B2B trading firms. 7-day delivery guarantee.',
  url: 'https://factoryjet.com/web-design/vadodara',
  telephone: '+919699977699',
  email: 'connect@factoryjet.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Vadodara',
    addressRegion: 'Gujarat',
    addressCountry: 'IN',
  },
  areaServed: [
    { '@type': 'City', name: 'Vadodara' },
    { '@type': 'City', name: 'Baroda' },
    { '@type': 'City', name: 'Anand' },
  ],
  serviceType: 'Web Design and Development',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
    bestRating: '5',
    worstRating: '1',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Design Services Vadodara',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Starter Website',
        description: '5-page business website, mobile-responsive, basic SEO, contact form.',
      },
      {
        '@type': 'Offer',
        name: 'Growth Website',
        description: '10–15 page website with blog CMS, lead capture, GA4, and advanced SEO.',
      },
      {
        '@type': 'Offer',
        name: 'Custom Website',
        description: 'Custom Next.js build with e-commerce, booking systems, or AI integrations.',
      },
    ],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a website cost for a business in Vadodara?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "FactoryJet's web design for Vadodara businesses starts at ₹29,999 for a 5-page Starter site. The Growth tier (₹80,000) covers 10–15 pages, a blog CMS, lead-capture forms, and GA4 analytics. Custom builds start at ₹1,50,000. Vadodara agency rates for comparable scope typically run ₹80,000–₹2,50,000.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a website in Vadodara?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard FactoryJet build delivers in 7 days from kickoff to launch. Discovery and design take the first two days, development runs through days five and six, and content, SEO, and launch happen on day seven.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build websites for chemical and petrochemical companies in Vadodara?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — chemical exporters, petrochemical suppliers, and process engineering firms in the Vadodara-Ankleshwar chemical corridor are a core client profile for us. We build websites optimised for international B2B procurement: product specification pages, SDS documentation systems, export credentials display, and RFQ forms designed for industrial buyers in the US, EU, and Middle East.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my Vadodara business website rank on Google?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Technical SEO is built in: JSON-LD schema markup, optimised title and meta tags, Core Web Vitals green on mobile, internal linking, XML sitemap submitted to Google Search Console, and WebP images. Branded searches rank within 1–2 weeks. Service + location queries take 3–6 months for a new domain.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I own the website after it is built?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — 100%. The full Next.js codebase is delivered to your GitHub repository on launch day. You own every file, every Figma design asset, and all API credentials. No retainer required, no platform lock-in.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who is the best web design agency in Vadodara?',
      acceptedAnswer: { '@type': 'Answer', text: 'For small businesses, FactoryJet makes a strong case as the best web design company in Vadodara: custom websites in 7 days, 100/100 Google speed scores, and a fixed written price. Any website design company in Vadodara you compare should pass three checks: live websites you can test, speed scores you can verify, and a price that does not grow mid-project. That is the honest way to pick the best website design company in Vadodara.' },
    },
    {
      '@type': 'Question',
      name: 'Should I hire web designer in Vadodara or use an agency?',
      acceptedAnswer: { '@type': 'Answer', text: 'A freelancer can be right for a tiny one-page job. For a business website, a small senior team is usually faster and safer: design, code, SEO, and support in one place, at a fixed price. If you do hire web designer in Vadodara directly, agree the scope and price in writing first.' },
    },
],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const VDR_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      "We map your ideal customer profile against Vadodara's industrial market — whether that's an international procurement team sourcing chemicals from GIDC Makarpura, a heavy engineering buyer evaluating Savli Industrial Estate suppliers, or a domestic pharma distributor. We audit your competitors and agree the sitemap and content plan before design begins. — Days 1–2",
  },
  {
    number: '02',
    title: 'Design & Prototyping',
    description:
      'Figma wireframes at 375px (mobile-first) through to 1440px desktop. Every tap target, inquiry form, and product catalog section reviewed against your B2B conversion goal before a line of code is written. You approve the design before development starts. — Days 3–4',
  },
  {
    number: '03',
    title: 'Development',
    description:
      'Built in Next.js deployed to Cloudflare CDN — sub-1.5s load times on Indian 4G networks. RFQ forms, WhatsApp integration, product catalog systems, PDF specification downloads, and any third-party APIs your business uses. Performance budgets enforced from the first commit. — Days 5–6',
  },
  {
    number: '04',
    title: 'Content & SEO',
    description:
      'Optimised copy, WebP imagery, meta tags, JSON-LD schema (LocalBusiness + FAQPage), and internal links. Sitemap submitted to Google Search Console. Vadodara-specific local SEO targeting built in — GIDC Makarpura, Waghodia, Savli, and Baroda city searches. — Day 6–7',
  },
  {
    number: '05',
    title: 'Launch & Handover',
    description:
      'DNS transfer to Cloudflare, GA4 and GTM configured, Search Console verified. Recorded handover walkthrough so your team is fully self-sufficient. 30-day post-launch support window included. — Day 7+',
  },
];

const VDR_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'included',  label: "What's Included" },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local',     label: 'Vadodara Local' },
  { key: 'support',   label: 'Support & Ownership' },
];

const VDR_FAQ_ITEMS = [

  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'How much does a website cost for a business in Vadodara?',
    answer:
      "FactoryJet's web design for Vadodara businesses starts at ₹29,999 for a 5-page Starter site. The Growth tier (₹80,000) covers 10–15 pages, a blog CMS, lead-capture forms, and GA4 analytics. Custom builds start at ₹1,50,000. Vadodara agency rates for comparable scope typically run ₹80,000–₹2,50,000.",
  },
  {
    category: 'pricing',
    question: 'How long does it take to build a website?',
    answer:
      'A standard FactoryJet build delivers in 7 days from kickoff to launch. Discovery and design take the first two days, development days three through six, and content, SEO, and launch on day seven. The 7-day clock starts when your brand assets and content are in our shared workspace.',
  },
  {
    category: 'pricing',
    question: 'What makes FactoryJet better value than a Vadodara web agency?',
    answer:
      "We are a specialised web engineering team — not a full-service agency with large overhead. The same Figma-first design process, the same Next.js engineering, the same Lighthouse audit before launch — at 60–70% lower cost. You pay for the build, not our administrative structure.",
  },
  {
    category: 'pricing',
    question: 'What is the 7-day delivery guarantee?',
    answer:
      'If we miss the agreed delivery date, you do not pay. The guarantee applies to the development phase we control — design, build, content, and launch. We have delivered on time on 97% of all projects.',
  },

  /* ── What's Included ── */
  {
    category: 'included',
    question: "What's included in a web design project?",
    answer:
      "Every FactoryJet project includes strategy, Figma design, Next.js development, basic copywriting, technical SEO setup (schema, meta, sitemap), GA4 analytics, and a 30-day post-launch support window. You receive the full codebase in your GitHub on launch day.",
  },
  {
    category: 'included',
    question: 'Do you write the content for my website?',
    answer:
      'Basic copywriting for headings, hero text, and service descriptions is included. Full SEO content is available as an add-on. We send a content brief before development starts so you know exactly what to provide.',
  },
  {
    category: 'included',
    question: 'Do you provide website hosting?',
    answer:
      'We deploy to Cloudflare Pages, which is free for most projects. You own your own Cloudflare account — we configure it for you. No monthly hosting fee to us.',
  },
  {
    category: 'included',
    question: 'Can I update the website myself after launch?',
    answer:
      'Yes. Every Growth and Custom tier project includes a headless CMS integration (Sanity or Contentful) so your team can update content without touching code. Ideal for Vadodara manufacturing firms whose product range evolves regularly.',
  },

  /* ── Technical & SEO ── */
  {
    category: 'technical',
    question: 'Will my website rank on Google India?',
    answer:
      'Technical SEO is built into every project: JSON-LD schema markup, optimised title and meta templates, Core Web Vitals green on mobile, internal linking, XML sitemap submitted to Google Search Console, and WebP images. Branded searches typically rank within 1–2 weeks.',
  },
  {
    category: 'technical',
    question: 'What tech stack do you build on?',
    answer:
      "We build on Next.js deployed to Cloudflare's global CDN — sub-1.5s load times on Indian 4G versus 4–6s for a typical WordPress site. For Vadodara businesses competing on Google's Core Web Vitals, that performance gap directly affects search rankings and international buyer first impressions.",
  },
  {
    category: 'technical',
    question: 'How does the site perform on mobile?',
    answer:
      'Mobile-first is the default. Every build targets Lighthouse 90+ and green Core Web Vitals on mobile before launch. We design at 375px before desktop, serve WebP images via Cloudflare CDN with lazy loading.',
  },
  {
    category: 'technical',
    question: 'Do you set up Google Analytics and Search Console?',
    answer:
      'Yes — GA4 and Google Tag Manager are wired up before launch on every project. Key conversion events (RFQ form submissions, WhatsApp clicks, product enquiry clicks) are configured from day one. Search Console verified and sitemap submitted.',
  },

  /* ── Vadodara Local ── */
  {
    category: 'local',
    question: 'Do you build websites for chemical and petrochemical companies in Vadodara?',
    answer:
      'Yes — chemical exporters, petrochemical suppliers, and process engineering firms in the Vadodara-Ankleshwar chemical corridor are a core client profile. We build websites with product specification pages, SDS documentation systems, export credentials display, and RFQ forms designed for industrial buyers in the US, EU, and Middle East.',
  },
  {
    category: 'local',
    question: 'Can you build websites for engineering and auto ancillary businesses in GIDC Makarpura?',
    answer:
      "Absolutely. GIDC Makarpura houses thousands of auto ancillary, precision engineering, and industrial equipment manufacturers. These businesses need websites that project manufacturing capability, certifications (IATF, ISO), product range, and a clear RFQ flow for domestic and export buyers. We build B2B-first sites architected around the procurement research journey.",
  },
  {
    category: 'local',
    question: "Do you know Vadodara's industrial clusters well enough to write relevant copy?",
    answer:
      "Yes. We research Vadodara's industrial geography as part of discovery — from GIDC Makarpura's auto ancillary and engineering cluster and GIDC Waghodia's diverse manufacturing base to Savli Industrial Estate's growing MSME belt, and the Vadodara-Ankleshwar petrochemical corridor — India's Chemical Valley. Local specificity in copy and LocalBusiness schema improves relevance for industry-level and geography-level searches.",
  },
  {
    category: 'local',
    question: 'How does FactoryJet compare to Vadodara web agencies?',
    answer:
      "Vadodara web agencies typically charge ₹80,000–₹2,50,000 for a comparable project and deliver in 6–14 weeks. FactoryJet gives you a fixed-price quote before you commit, guarantees 7-day delivery in writing, and builds in Next.js rather than WordPress. Faster website, shorter timeline, codebase you own — at a fixed, published price.",
  },

  /* ── Support & Ownership ── */
  {
    category: 'support',
    question: 'Do I own the website after it is built?',
    answer:
      'Yes — 100%. The full Next.js codebase is delivered to your GitHub repository on launch day. You own every file, every Figma design asset, and all API credentials. No retainer required. No proprietary platform lock-in.',
  },
  {
    category: 'support',
    question: 'What support do you provide after launch?',
    answer:
      'Every project includes a 30-day post-launch support window covering bug fixes and minor adjustments at no extra cost. Beyond that, FactoryJet offers monthly maintenance plans from ₹4,999/month.',
  },
  {
    category: 'support',
    question: 'What happens if something breaks after launch?',
    answer:
      'Within the 30-day support window, any bugs are fixed at no cost and typically within 24 hours. Because your site is on Cloudflare Pages (static files, global CDN), common causes of downtime simply do not apply.',
  },
  {
    category: 'support',
    question: 'Do you offer ongoing retainer services for Vadodara businesses?',
    answer:
      'Yes. Monthly retainers from ₹4,999/month cover ongoing development work, content updates, new product pages, SEO improvements, and technical maintenance. Retainer clients get priority scheduling and a dedicated engineer.',
  },

  // Money-query coverage, added 2026-06-11
  {
    category: 'pricing',
    question: 'Who is the best web design agency in Vadodara?',
    answer:
      'For small businesses, FactoryJet makes a strong case as the best web design company in Vadodara: custom websites in 7 days, 100/100 Google speed scores, and a fixed written price. Any website design company in Vadodara you compare should pass three checks: live websites you can test, speed scores you can verify, and a price that does not grow mid-project. That is the honest way to pick the best website design company in Vadodara.',
  },
  {
    category: 'pricing',
    question: 'Should I hire web designer in Vadodara or use an agency?',
    answer:
      'A freelancer can be right for a tiny one-page job. For a business website, a small senior team is usually faster and safer: design, code, SEO, and support in one place, at a fixed price. If you do hire web designer in Vadodara directly, agree the scope and price in writing first.',
  },
];

const VDR_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Vadodara Agency' },
  { label: 'Freelancer' },
  { label: 'Template (Wix/Squarespace)' },
] as const;

const VDR_COMPARISON_ROWS = [
  {
    feature: 'Starting price',
    values: ['Get a Quote', '₹80,000–₹2,50,000', '₹10,000–₹60,000', '₹0–₹15,000 (you build it)'],
  },
  {
    feature: 'Delivery timeline',
    values: ['7 days', '6–14 weeks', '3–12 weeks (unreliable)', '1–2 weeks (you build it)'],
  },
  {
    feature: 'Custom Figma design',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="va" kind="yes" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Next.js (not WordPress)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="va" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Technical SEO built in',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="va" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Lighthouse 90+ on mobile',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="va" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'GA4 + GTM wired up',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="va" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Transparent, fixed pricing',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="va" kind="no" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="yes" />,
    ],
  },
  {
    feature: 'Full codebase to your GitHub',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="va" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: '7-day delivery guarantee',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="va" kind="no" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  '@id': `https://factoryjet.com/web-design/vadodara#howto`,
  name: `How FactoryJet builds your Vadodara website in 7 days`,
  description: `Our 7-day process for delivering a professional, high-performance website for Vadodara businesses.`,
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'INR',
    minValue: '29999',
  },
  totalTime: 'P7D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Day 1 — Discovery Call',
      text: `We learn your business, your Vadodara market, your goals, and what you need the website to do — whether that's B2B export credibility, industrial RFQ generation, or domestic lead capture.`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Day 2 — Strategy & Structure',
      text: `We map your site architecture, research your Vadodara competitors, identify your top keywords, and write the first draft of your page copy.`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Days 3–4 — Design',
      text: 'Your bespoke design is created — homepage and inner pages. You get a design preview link. Feedback incorporated within 24 hours.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Days 5–6 — Development & SEO',
      text: `Your approved design is built in code — fast, mobile-first, and SEO-optimised. Vadodara local schema markup added. Google Analytics and Search Console connected.`,
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Day 7 — Launch',
      text: 'Final review, testing across 5 devices, and go-live. You receive full handover documentation and a 30-minute training session.',
    },
  ],
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `https://factoryjet.com/web-design/vadodara#webpage`,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: `https://factoryjet.com/web-design/vadodara`,
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function VadodaraWebDesignPage() {
  return (
    <>
      <Script
        id="vdr-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="vdr-faq-schema"
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
          { name: 'Vadodara', url: 'https://factoryjet.com/web-design/vadodara' },
        ]}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          eyebrow="WEB DESIGN · VADODARA"
          headline="Website Design in Vadodara for Chemical Exporters, Engineering Manufacturers, and B2B Businesses"
          lead="Vadodara (Baroda) is Gujarat's industrial and cultural capital — home to India's Chemical Valley, GIDC Makarpura's 10,000+ engineering and auto ancillary units, and heavy engineering giants like Alstom, ABB, and L&T. From the Vadodara-Ankleshwar petrochemical corridor to Savli Industrial Estate's MSME belt, Vadodara businesses compete for international B2B buyers every day. FactoryJet builds from ₹29,999 — Figma-designed, Next.js-built, 7-day delivery guarantee, your codebase delivered in full."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'Get Free Quote', modal: true as const, region: 'in' as const }}
          trustItems={[
            '7-day delivery guarantee',
            '500+ businesses built',
          ]}
          rightSlot={<HeroBrowserMockup />}
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        {/* ── 3. TRUST BLOCK ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ websites built. 25 years of web engineering. One 7-day guarantee."
        />

        {/* ── 4. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="VADODARA MARKET"
          headline="Why Your Vadodara Web Presence Is a Business Asset"
          leadParagraphs={[
            "Vadodara is Gujarat's third-largest city and the industrial backbone of the Vadodara-Ankleshwar corridor — India's Chemical Valley. The city houses GAIL, IPCL/RIL Petrochemicals, GSFC, and GNFC alongside thousands of downstream chemical and specialty chemical manufacturers. GIDC Makarpura alone is one of India's largest and most diverse industrial estates — 10,000+ units producing auto ancillaries, precision engineering components, industrial machinery, and plastic products. Savli Industrial Estate and GIDC Waghodia extend this manufacturing base further into pharma and textile machinery. Maharaja Sayajirao University feeds a large, technically trained workforce that underpins Vadodara's R&D-linked manufacturing sector.",
            "This creates a web design imperative unique to Vadodara: a petrochemical exporter needs a completely different site architecture from an auto ancillary manufacturer in GIDC Makarpura or a pharma company in the Waghodia belt. International procurement teams — sourcing chemicals from the US, EU, and Middle East — research Indian vendors for weeks before making contact. The website needs to answer their due-diligence questions: product grades, certifications, production capacity, delivery history, and a frictionless RFQ form. A heavy engineering supplier targeting Tier 1 automotive OEMs needs IATF compliance display, product datasheets, and an enquiry flow built for procurement systems. FactoryJet builds for both — and for every manufacturing and trading business in between.",
            "Vadodara's MSME sector — 50,000+ registered units — is increasingly competing for international export orders that require credible, fast, and SEO-optimised digital presences. The businesses that invest in their website now are capturing the international buyer research share that slower competitors are conceding every quarter. The gap between a business with a high-performing site and one without is widening faster than most Vadodara MSMEs realise.",
          ]}
          stats={[
            {
              value: '50,000+',
              label: "Registered MSMEs in Vadodara district — one of Gujarat's most concentrated industrial MSME bases",
              sourceUrl: 'https://msme.gov.in/',
              sourceLabel: 'Ministry of MSME',
            },
            {
              value: 'Chemical Valley',
              label: "The Vadodara-Ankleshwar corridor — India's Chemical Valley — hosts GAIL, RIL Petrochemicals, GSFC, GNFC and thousands of downstream units",
              sourceUrl: 'https://gujchemicals.gujarat.gov.in/',
              sourceLabel: 'Gujarat Chemical Industries',
            },
            {
              value: '₹1.2L Cr',
              label: "Vadodara district's estimated GDP — Gujarat's third-largest city economy and a key industrial export hub",
              sourceUrl: 'https://mospi.gov.in/',
              sourceLabel: 'MoSPI',
            },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION ───────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WEB DESIGN · VADODARA"
          headline="What 'Web Design' Actually Means for a Vadodara Business"
          lead="Vadodara's economy runs on B2B industrial procurement — where buyers in the US, EU, Middle East, and across India research vendors digitally for weeks before making contact. A website that fails to answer procurement due-diligence questions costs real export orders. FactoryJet builds for the Vadodara industrial buyer journey."
          body={
            <>
              <p>
                For Vadodara&apos;s chemical exporters, petrochemical suppliers, and process
                engineering firms — the website is the first filter in a multi-week procurement
                research process. International buyers sourcing from the Vadodara-Ankleshwar
                Chemical Valley need to verify product grades, safety data, certifications,
                production capacity, and export track record before initiating an RFQ. A website
                that buries this information or fails to load within two seconds on a US or EU
                network is costing you real business. We build chemical and process industry
                websites with specification-first architecture, SDS documentation systems, and
                RFQ flows designed for industrial procurement.
              </p>
              <p>
                For GIDC Makarpura&apos;s engineering and auto ancillary manufacturers —
                the website is a vendor qualification tool. Tier 1 and Tier 2 automotive OEMs,
                heavy machinery buyers, and capital equipment procurement teams need to see
                manufacturing certifications (IATF 16949, ISO 9001), process capabilities,
                quality systems, and past supply relationships displayed with clarity. We build
                engineering manufacturer websites with capability-first architecture, product
                datasheet systems, and lead flows designed for long-cycle B2B sales.
              </p>
              <p>
                Every FactoryJet Vadodara project covers discovery, Figma prototyping, Next.js
                development, SEO, GA4, and a 30-day support window. You leave with a codebase you
                own, a design system you keep, and a site built to rank and convert international
                and domestic industrial buyers.
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
                  Two buyer types. One framework.
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  {
                    type: 'Chemical & Petrochem B2B Export',
                    need: 'Specifications + certifications + RFQ',
                    area: 'Vadodara-Ankleshwar Corridor · GSFC · GNFC · GAIL',
                    colour: '#F05A28',
                  },
                  {
                    type: 'Engineering & Auto Ancillary B2B',
                    need: 'Capabilities + IATF/ISO display + enquiry flow',
                    area: 'GIDC Makarpura · GIDC Waghodia · Savli Estate',
                    colour: '#0F0F12',
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
                  Same engineering quality. Strategy tailored to your buyer.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 6. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="Why Vadodara Businesses Choose FactoryJet Over Local Agencies"
          lead="Vadodara web agencies typically charge ₹80,000–₹2,50,000 for a comparable project and take 6–14 weeks to deliver. FactoryJet gives you a fixed-price quote before you commit, guarantees 7-day delivery in writing, and builds in Next.js rather than WordPress — faster load times, a codebase you own outright. Pricing is fixed and agreed upfront — no surprises."
          pillars={[
            {
              icon: '⚡',
              title: '7-day delivery. In writing. Or you do not pay.',
              body: "Vadodara's manufacturing and export community moves on production schedules and procurement cycles — not agency timelines. Waiting 10 weeks for a website that should have been live before the trade show is not acceptable when international buyer outreach is happening now. FactoryJet delivers in 7 days, with the guarantee written into the project agreement. We have delivered on time on 97% of all projects since 2005.",
            },
            {
              icon: '🏗️',
              title: 'Next.js, not WordPress. The performance gap is real.',
              body: "WordPress loads server-side PHP and fires 40–60 database queries per page load. Next.js generates static files served from Cloudflare CDN globally. The result: sub-1.5s load times on international networks — critical when a US procurement manager is evaluating a Vadodara chemical supplier at the same time as three competitors. A slow website is a disqualifier in the first 3 seconds.",
            },
            {
              icon: '📋',
              title: 'Fixed price. Published before the first call.',
              body: "We give you a fixed-price quote before you commit. No discovery fees, no 'it depends' quotes. Fixed price, fixed scope, agreed upfront. No surprise invoices after launch. The kind of contract that Vadodara's straightforward business culture expects.",
            },
          ]}
        />

        {/* ── 7. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="How We Build Your Vadodara Website in 7 Days"
          lead="Buyer strategy agreed before design. Mobile approval before development. SEO and analytics wired before launch."
          stages={VDR_JOURNEY_STAGES}
          closingNote="5 STAGES · 7 DAYS · NEXT.JS + CLOUDFLARE · GA4 STANDARD · ZERO DOWNTIME LAUNCH"
        />

        {/* ── 8. PORTFOLIO ─────────────────────────────────────────────────── */}
        <PortfolioShowcase
          eyebrow="RECENT WORK"
          headline="What India's businesses look like after FactoryJet."
          cards={[
            {
              industry: 'Interior Décor · Web Design',
              title: 'Belle Maison — Mumbai',
              description:
                "Belle Maison is a premium interior décor brand. FactoryJet built their v2 website on Next.js with a Figma-designed product showcase, WhatsApp inquiry flow, and SEO targeting high-value search queries. Lighthouse 95+ on mobile before launch.",
              imageSrc: '/images/portfolio/belle-maison.webp',
              stat1: 'Lighthouse 95+',
              stat2: 'Next.js · WhatsApp',
            },
            {
              industry: 'B2B · Commerceflo',
              title: 'Bombay Petals — Mumbai',
              description:
                'Bombay Petals is a B2B artificial plants and décor supplier. FactoryJet built a dual-storefront solution — B2B wholesale portal with volume pricing and a D2C consumer store — on Commerceflo — an AI-native unified commerce platform. Razorpay + Shiprocket integrated.',
              imageSrc: '/images/portfolio/bombay-petals.webp',
              stat1: '₹1.5 Cr in Y1',
              stat2: '7-day delivery',
            },
            {
              industry: 'MEP / BIM Consulting · SEO',
              title: 'Formative Concepts — Pune',
              description:
                'Formative Concepts is an MEP drafting and BIM consulting firm. FactoryJet rebuilt their website on Next.js with authority-first architecture designed for B2B project enquiries — credentials display, project portfolio, and technical SEO.',
              imageSrc: '/images/portfolio/formative-concepts.webp',
              stat1: 'B2B authority site',
              stat2: 'SEO + Next.js',
            },
          ]}
          ctaHref="/portfolio"
          ctaLabel="View full portfolio"
        />

        {/* ── 9. COMPARISON TABLE ──────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Vadodara Agency vs. Freelancer vs. Template Builder"
          lead="Not all web design options in Vadodara deliver the same output. Here is the honest comparison — scope, price, timeline, and what you own after launch."
          pullQuote={{
            stat: '₹29,999',
            caption:
              'starting price — same Figma-first design, Next.js engineering, technical SEO, and Lighthouse audit as a ₹1,50,000 Vadodara agency project.',
          }}
          columns={VDR_COMPARISON_COLUMNS}
          rows={VDR_COMPARISON_ROWS}
          footer="Prices reflect typical Vadodara market ranges as of 2025. FactoryJet fixed-price contracts available for all tiers."
        />

        {/* ── 10. INDUSTRIES ───────────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="VADODARA × WEB DESIGN"
          headline="Web Design for Vadodara's Key Industries"
          lead="From petrochemical exporters and heavy engineering manufacturers to pharma companies, auto ancillary MSMEs, and B2B trading firms — Vadodara's economy spans industries with very different digital requirements. FactoryJet has built for each of them."
          sectors={[
            {
              name: 'Chemicals & Petrochemicals',
              description:
                "The Vadodara-Ankleshwar corridor is India's Chemical Valley — home to GAIL, IPCL/RIL Petrochemicals, GSFC, GNFC, and thousands of downstream chemical manufacturers. Chemical exporters need websites that project product grades, safety certifications, production capacity, and export track record to international procurement teams in the US, EU, and Middle East. Product specification pages, SDS systems, and RFQ flows built for industrial buyers are standard.",
              example:
                'Chemical exporters, specialty chemical manufacturers, and petrochemical downstream suppliers in the Vadodara-Ankleshwar corridor targeting international procurement teams.',
            },
            {
              name: 'Heavy Engineering & Machinery',
              description:
                "Vadodara hosts Alstom's India headquarters, ABB's large manufacturing base, Bombardier's operations, and L&T's heavy engineering facilities — alongside thousands of local engineering equipment and industrial machinery manufacturers. Engineering companies need websites that project technical depth: capability pages, product datasheets, case studies, manufacturing certifications, and lead flows for high-value capital equipment procurement.",
              example:
                'Industrial machinery manufacturers, heavy engineering firms, and capital equipment suppliers in Vadodara targeting domestic and export buyers.',
            },
            {
              name: 'Auto Ancillary & Precision Engineering',
              description:
                "GIDC Makarpura is one of India's largest and most diverse industrial estates — 10,000+ units producing auto ancillaries, precision engineering components, stampings, forgings, and plastic moulded parts. Auto ancillary businesses need websites optimised for Tier 1 and Tier 2 OEM vendor qualification: IATF 16949 display, manufacturing process descriptions, quality certifications, and a structured RFQ form.",
              example:
                'Auto ancillary manufacturers, precision engineering component suppliers, and MSME manufacturers in GIDC Makarpura and Waghodia targeting OEM procurement.',
            },
            {
              name: 'Pharmaceuticals & Life Sciences',
              description:
                "Vadodara has a growing pharmaceutical manufacturing base — supported by GIDC Waghodia and the broader Gujarat pharma corridor. Pharma companies need regulatory-compliant websites: GMP certification display, product documentation systems, USFDA/WHO-GMP credentials, and B2B lead flows for institutional procurement. The website is the primary vendor qualification touchpoint for domestic and export buyers.",
              example:
                'API producers, formulation manufacturers, pharma exporters, and life sciences companies operating from Vadodara and the Waghodia industrial belt.',
            },
            {
              name: 'Fertilizers & Agri-Inputs',
              description:
                "Vadodara is home to GSFC (Gujarat State Fertilizers & Chemicals) and GNFC (Gujarat Narmada Valley Fertilizers & Chemicals) — two of India's largest fertilizer and agri-chemicals producers. Fertilizer and agri-input businesses need websites that project product range, nutrient profiles, dealer network information, and institutional procurement capabilities for bulk buyers and government agencies.",
              example:
                'Fertilizer manufacturers, agri-chemical producers, and micro-nutrient suppliers targeting institutional buyers, government tenders, and dealer networks across India.',
            },
            {
              name: 'B2B Trading & Wholesale',
              description:
                "Vadodara's strong trading community spans industrial consumables, packaging materials, construction supplies, and wholesale distribution. B2B trading businesses need websites that project product breadth, reliability, and supply chain depth to procurement managers. Product catalog systems, bulk inquiry forms, and trade credibility signals — optimised for domestic and export buyers — are the standard architecture.",
              example:
                'Industrial consumable distributors, packaging material traders, construction supply wholesalers, and B2B trading firms operating from Vadodara.',
            },
          ]}
        />

        <GetFreeQuoteCTA />
        {/* ── 12. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What India's founders say after we build their site"
        />

        {/* ── 13. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Common Questions from Vadodara Businesses"
          lead="The questions we answer on every Vadodara discovery call — answered here, without the runaround."
          categories={VDR_FAQ_CATEGORIES}
          items={VDR_FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Build Your Vadodara Website?"
          sub="Vadodara's petrochemical corridor, GIDC Makarpura's engineering cluster, and 50,000+ registered MSMEs mean every serious B2B business is competing for the same international buyer first impressions and the same Google rankings. Every week without a high-performing website is procurement ground you are conceding to a competitor who already has one. Start today and have a sitemap ready within 72 hours."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price. 7-day delivery. Next.js. Your codebase delivered in full on launch day."
        />

      </main>

      <SiteFooter locale="in" />
    </>
  );
}

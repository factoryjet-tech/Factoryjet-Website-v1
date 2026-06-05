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
  title: 'Web Design Company in Nagpur | From ₹29,999 | FactoryJet',
  description:
    'Web design company in Nagpur for logistics firms, MIHAN SEZ businesses, agri-exporters & MSME manufacturers. Fast websites from ₹29,999. 7-day delivery. Serving Butibori MIDC, Hingna & MIHAN.',
  keywords: [
    'web design company in Nagpur',
    'website design Nagpur',
    'web development Nagpur',
    'web development company Nagpur',
    'website design company Nagpur',
    'affordable web design Nagpur',
    'professional website design Nagpur',
    'web design MIHAN SEZ Nagpur',
    'web design Butibori MIDC',
    'logistics company website Nagpur',
    'agri export website design Nagpur',
    'Next.js web development Nagpur',
    'web design agency Nagpur',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Nagpur | From ₹29,999 | FactoryJet',
    description:
      'Professional website design company in Nagpur — Next.js, SEO, and GA4 included. 7-day delivery. From ₹29,999. Serving MIHAN SEZ, Butibori MIDC, Hingna Industrial Estate, and Nagpur city businesses.',
    url: 'https://factoryjet.com/web-design/nagpur',
    images: [
      {
        url: 'https://factoryjet.com/images/services/web-design.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Web Design Services in Nagpur',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Nagpur | FactoryJet',
    description:
      'Website design company in Nagpur. From ₹29,999. 7-day delivery. Next.js, SEO, GA4 included.',
    images: ['https://factoryjet.com/images/services/web-design.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/web-design/nagpur',
    languages: {
      'en-IN': 'https://factoryjet.com/web-design/nagpur',
      'x-default': 'https://factoryjet.com/web-design/nagpur',
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
  '@id': 'https://factoryjet.com/web-design/nagpur#organization',
  name: 'FactoryJet',
  description:
    'Web design company in Nagpur building fast, SEO-optimized websites for logistics firms, MIHAN SEZ businesses, agri-exporters, MSME manufacturers, and growing Vidarbha region businesses. From ₹29,999. 7-day delivery guarantee.',
  url: 'https://factoryjet.com/web-design/nagpur',
  telephone: '+919699977699',
  email: 'connect@factoryjet.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nagpur',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  areaServed: [
    { '@type': 'City', name: 'Nagpur' },
    { '@type': 'City', name: 'Butibori' },
    { '@type': 'City', name: 'Wardha' },
  ],
  serviceType: 'Web Design and Development',
  priceRange: '₹₹',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
    bestRating: '5',
    worstRating: '1',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Design Services Nagpur',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Starter Website',
        price: '29999',
        priceCurrency: 'INR',
        description: '5-page business website, mobile-responsive, basic SEO, contact form.',
      },
      {
        '@type': 'Offer',
        name: 'Growth Website',
        price: '80000',
        priceCurrency: 'INR',
        description: '10–15 page website with blog CMS, lead capture, GA4, and advanced SEO.',
      },
      {
        '@type': 'Offer',
        name: 'Custom Website',
        price: '150000',
        priceCurrency: 'INR',
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
      name: 'How much does a website cost for a business in Nagpur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "FactoryJet's web design for Nagpur businesses starts at ₹29,999 for a 5-page Starter site. The Growth tier (₹80,000) covers 10–15 pages, a blog CMS, lead-capture forms, and GA4 analytics. Custom builds start at ₹1,50,000. Nagpur agency rates for comparable scope typically run ₹70,000–₹2,00,000.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a website in Nagpur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard FactoryJet build delivers in 7 days from kickoff to launch. Discovery and design take the first two days, development runs through days five and six, and content, SEO, and launch happen on day seven.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build websites for logistics and MIHAN SEZ businesses in Nagpur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — logistics companies, MIHAN SEZ tenants, Butibori MIDC manufacturers, and agri-export businesses are a core client profile for us in Nagpur. We build websites optimised for B2B buyer research: operational capability display, product catalog with inquiry forms, and technical SEO targeting English-language searches from buyers across India and internationally.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my Nagpur business website rank on Google?',
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
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const NAG_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      "We map your ideal customer profile against Nagpur's market — whether that's a logistics company serving 24h multi-modal connectivity to all metros, a MIHAN SEZ IT firm, a Butibori MIDC manufacturer, or an agri-exporter shipping GI-tagged Nagpur oranges. We audit your top competitors and agree the sitemap and content plan. — Days 1–2",
  },
  {
    number: '02',
    title: 'Design & Prototyping',
    description:
      'Figma wireframes at 375px (mobile-first) through to 1440px desktop. Every tap target, form field, and section reviewed against your conversion goal before a line of code is written. You approve the design before development starts. — Days 3–4',
  },
  {
    number: '03',
    title: 'Development',
    description:
      'Built in Next.js deployed to Cloudflare CDN — sub-1.5s load times on Indian 4G networks. Contact forms, WhatsApp integration, product catalog systems, and any third-party APIs your business uses. Performance budgets enforced from the first commit. — Days 5–6',
  },
  {
    number: '04',
    title: 'Content & SEO',
    description:
      'Optimised copy, WebP imagery, meta tags, JSON-LD schema (LocalBusiness + FAQPage), and internal links. Sitemap submitted to Google Search Console. Nagpur-specific local SEO targeting built in. — Day 6–7',
  },
  {
    number: '05',
    title: 'Launch & Handover',
    description:
      'DNS transfer to Cloudflare, GA4 and GTM configured, Search Console verified. Recorded handover walkthrough so your team is fully self-sufficient. 30-day post-launch support window included. — Day 7+',
  },
];

const NAG_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'included',  label: "What's Included" },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local',     label: 'Nagpur Local' },
  { key: 'support',   label: 'Support & Ownership' },
];

const NAG_FAQ_ITEMS = [

  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'How much does a website cost for a business in Nagpur?',
    answer:
      "FactoryJet's web design for Nagpur businesses starts at ₹29,999 for a 5-page Starter site. The Growth tier (₹80,000) covers 10–15 pages, a blog CMS, lead-capture forms, and GA4 analytics. Custom builds start at ₹1,50,000. Nagpur agency rates for comparable scope typically run ₹70,000–₹2,00,000.",
  },
  {
    category: 'pricing',
    question: 'How long does it take to build a website?',
    answer:
      'A standard FactoryJet build delivers in 7 days from kickoff to launch. Discovery and design take the first two days, development days three through six, and content, SEO, and launch on day seven. The 7-day clock starts when your brand assets and content are in our shared workspace.',
  },
  {
    category: 'pricing',
    question: 'What makes FactoryJet better value than a Nagpur web agency?',
    answer:
      "We are a specialised web engineering team — not a full-service agency with large overhead. The same Figma-first design process, the same Next.js engineering, the same Lighthouse audit before launch — at 60–70% lower cost. You pay for the build, not our admin structure.",
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
      'Every FactoryJet project includes strategy, Figma design, Next.js development, basic copywriting, technical SEO setup (schema, meta, sitemap), GA4 analytics, and a 30-day post-launch support window. You receive the full codebase in your GitHub on launch day.',
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
      "We deploy to Cloudflare Pages, which is free for most projects. You own your own Cloudflare account — we configure it for you. No monthly hosting fee to us.",
  },
  {
    category: 'included',
    question: 'Can I update the website myself after launch?',
    answer:
      'Yes. Every Growth and Custom tier project includes a headless CMS integration (Sanity or Contentful) so your team can update content without touching code.',
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
      "We build on Next.js deployed to Cloudflare's global CDN — sub-1.5s load times on Indian 4G versus 4–6s for a typical WordPress site. For Nagpur businesses competing on Google's Core Web Vitals, that performance gap directly affects rankings.",
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
      'Yes — GA4 and Google Tag Manager are wired up before launch on every project. Key conversion events (form submissions, WhatsApp clicks, product enquiry clicks) are configured from day one. Search Console verified and sitemap submitted.',
  },

  /* ── Nagpur Local ── */
  {
    category: 'local',
    question: 'Do you build websites for logistics and transport companies in Nagpur?',
    answer:
      "Yes — logistics, warehousing, and transport businesses are a core client profile for us in Nagpur. The city's Zero Mile location at the geographic centre of India makes it the natural hub for multi-modal freight operations connecting all metros. We build websites with operations display, fleet capability sections, trade lane coverage, and RFQ flows optimised for domestic shippers and national procurement teams.",
  },
  {
    category: 'local',
    question: 'Can you build websites for MIHAN SEZ tenants and IT companies in Nagpur?',
    answer:
      "Yes. MIHAN — India's largest SEZ with ₹35,000 Cr investment — is home to BPO operations, IT services firms, and aviation-linked businesses. These companies need websites built for national and international client acquisition: authority-first architecture, clear service capability pages, and lead flows designed for B2B sales cycles. TCS, Infosys, and HCL presence in the MIHAN IT SEZ sets the credibility benchmark — your website needs to match.",
  },
  {
    category: 'local',
    question: 'Do you build websites for agri-export businesses and orange traders in Nagpur?',
    answer:
      "Yes. Nagpur oranges are GI-tagged — a mark of quality that international buyers recognise. Agri-exporters, orange traders, and food processing businesses in Nagpur need websites that project GI certification credentials, export compliance, product grade and sourcing information, and frictionless inquiry flows for buyers in the UAE, UK, and Southeast Asia. We build these sites with B2B buyer-research architecture and technical SEO targeting international English-language search queries.",
  },
  {
    category: 'local',
    question: "Do you know Nagpur's business districts well enough to write relevant copy?",
    answer:
      "Yes. We research Nagpur's business geography as part of discovery — from Butibori MIDC (Maharashtra's second-largest industrial estate) and Hingna Industrial Estate's manufacturing clusters, to MIHAN's SEZ and airport hub, the Zero Mile commercial district, and Vidarbha's cotton and textile belt. Local specificity in copy and LocalBusiness schema improves relevance for neighbourhood-level searches.",
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
    question: 'Do you offer ongoing retainer services for Nagpur businesses?',
    answer:
      'Yes. Monthly retainers from ₹4,999/month cover ongoing development work, content updates, new landing pages, SEO improvements, and technical maintenance. Retainer clients get priority scheduling and a dedicated engineer.',
  },
  {
    category: 'local',
    question: 'How does FactoryJet compare to Nagpur web agencies?',
    answer:
      "Nagpur web agencies typically charge ₹70,000–₹2,00,000 for a comparable project and deliver in 6–16 weeks. FactoryJet publishes all three pricing tiers before you speak to us, guarantees 7-day delivery in writing, and builds in Next.js rather than WordPress. Faster website, shorter timeline, codebase you own — at a fixed, published price.",
  },
  {
    category: 'pricing',
    question: 'Do you offer a discount for Butibori MIDC or Hingna MIDC manufacturers?',
    answer:
      "We don't offer location-based discounts — but our ₹29,999 Starter tier is built precisely for MSME manufacturers in Butibori and Hingna who need a credible, fast, mobile-first web presence quickly. It covers 5 pages, LocalBusiness schema, contact form, WhatsApp integration, and GA4 — everything a manufacturer needs to start generating online enquiries.",
  },
];

const NAG_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Nagpur Agency' },
  { label: 'Freelancer' },
  { label: 'Template (Wix/Squarespace)' },
] as const;

const NAG_COMPARISON_ROWS = [
  {
    feature: 'Starting price',
    values: ['₹29,999', '₹70,000–₹2,00,000', '₹10,000–₹60,000', '₹0–₹15,000 (you build it)'],
  },
  {
    feature: 'Delivery timeline',
    values: ['7 days', '6–16 weeks', '3–12 weeks (unreliable)', '1–2 weeks (you build it)'],
  },
  {
    feature: 'Custom Figma design',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="na" kind="yes" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Next.js (not WordPress)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="na" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Technical SEO built in',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="na" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Lighthouse 90+ on mobile',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="na" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'GA4 + GTM wired up',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="na" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Published pricing (no surprises)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="na" kind="no" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="yes" />,
    ],
  },
  {
    feature: 'Full codebase to your GitHub',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="na" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: '7-day delivery guarantee',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="na" kind="no" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  '@id': `https://factoryjet.com/web-design/nagpur#howto`,
  name: `How FactoryJet builds your Nagpur website in 7 days`,
  description: `Our 7-day process for delivering a professional, AI-powered website for Nagpur businesses.`,
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
      text: `We learn your business, your Nagpur market, your goals, and what you need the website to do.`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Day 2 — Strategy & Structure',
      text: `We map your site architecture, research your Nagpur competitors, identify your top keywords, and write the first draft of your page copy.`,
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
      text: `Your approved design is built in code — fast, mobile-first, and SEO-optimised. Nagpur local schema markup added. Google Analytics and Search Console connected.`,
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
  '@id': `https://factoryjet.com/web-design/nagpur#webpage`,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: `https://factoryjet.com/web-design/nagpur`,
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function NagpurWebDesignPage() {
  return (
    <>
      <Script
        id="nag-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="nag-faq-schema"
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
          { name: 'Nagpur', url: 'https://factoryjet.com/web-design/nagpur' },
        ]}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          eyebrow="WEB DESIGN · NAGPUR"
          headline="Website Design in Nagpur for Logistics Companies, MIHAN SEZ Businesses, and Central India's Growing Enterprises"
          lead="Nagpur sits at the geographic dead-centre of India — the Zero Mile marker — making it the country's most strategically located logistics and trade hub. MIHAN, India's largest SEZ with ₹35,000 Cr investment, is transforming the city into a national aviation and IT hub. From Butibori MIDC's industrial belt and Hingna's manufacturing corridor to the city's growing agri-export community and 500+ logistics firms, Nagpur businesses have never had more to compete for. FactoryJet builds from ₹29,999 — Figma-designed, Next.js-built, 7-day delivery guarantee, your codebase delivered in full."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustItems={[
            'Websites from ₹29,999',
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
          eyebrow="NAGPUR MARKET"
          headline="Why Your Nagpur Web Presence Is a Business Asset"
          leadParagraphs={[
            "Nagpur is Central India's most strategically significant commercial city — positioned at India's geographic centre with rail, road, and air connectivity to every major metro within 12 hours. The city's logistics identity runs deep: 500+ freight and warehousing companies operate from Nagpur, taking advantage of the Zero Mile advantage that reduces transit times in all directions. MIHAN — the Multi-modal International Hub and Airport Nagpur — is India's largest Special Economic Zone, attracting BPO operations, IT services firms, and aviation-linked manufacturing. Butibori MIDC, Maharashtra's second-largest industrial estate, houses over 700 manufacturing units spanning textiles, engineering goods, food processing, and chemicals.",
            "This creates a web design landscape unique to Nagpur: a logistics company in Butibori needs a completely different site architecture from an IT firm in MIHAN SEZ, an orange agri-exporter serving UAE and UK buyers, or a textile trader in Vidarbha's cotton belt. B2B buyers researching freight partners, manufacturers vetting suppliers, and international buyers sourcing GI-tagged Nagpur oranges all have different due-diligence requirements. FactoryJet builds for all of them, because we start every project with the buyer journey in mind — not the template.",
            "Nagpur's business community is at an inflection point — MIHAN investment is drawing national attention, IT hiring is growing, and the logistics sector is expanding. Businesses that invest in a high-performing digital presence now capture the search rankings and buyer first impressions before the market becomes saturated. Every week without a fast, credible website is ground conceded to a competitor who already has one.",
          ]}
          stats={[
            {
              value: '₹35,000 Cr',
              label: 'Total investment in MIHAN SEZ — India\'s largest Special Economic Zone, driving IT, aviation, and manufacturing growth in Nagpur',
              sourceUrl: 'https://www.maharashtraindustrial.com/',
              sourceLabel: 'MIDC Maharashtra',
            },
            {
              value: 'Zero Mile',
              label: 'Nagpur\'s geographic dead-centre of India — the shortest rail and road access point to all major metros simultaneously',
              sourceUrl: 'https://nagpur.gov.in/',
              sourceLabel: 'Nagpur District',
            },
            {
              value: '700+ units',
              label: 'Manufacturing units in Butibori MIDC — Maharashtra\'s second-largest industrial estate, spanning textiles, engineering, and food processing',
              sourceUrl: 'https://www.midc.in/',
              sourceLabel: 'MIDC',
            },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION ───────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WEB DESIGN · NAGPUR"
          headline="What 'Web Design' Actually Means for a Nagpur Business"
          lead="Nagpur's economy runs on two very different buyer behaviours — B2B industrial and logistics buyers doing structured vendor research, and domestic SMB owners deciding quickly on mobile. Both need very different web strategies. FactoryJet builds for both."
          body={
            <>
              <p>
                For Nagpur&apos;s logistics companies, MIDC manufacturers, agri-exporters, and
                MIHAN SEZ businesses — the website needs to project operational capability, industry
                certifications, and geographic advantage to buyers and procurement teams across
                India and internationally. These buyers research vendors before shortlisting. The
                site needs to answer their due-diligence questions: fleet capacity, warehouse
                footprint, export compliance, product specs, and a frictionless RFQ form. We build
                these sites with authority-first architecture, operational showcase sections, and
                lead-capture flows designed for B2B sales cycles.
              </p>
              <p>
                For IT and BPO firms in MIHAN SEZ, professional services businesses in the city
                centre, and retail and consumer brands growing in Nagpur&apos;s urban market —
                the challenge is different. IT firms pitching national and global clients need
                service capability pages and credibility signals that match Pune and Hyderabad
                standards. Consumer retail brands need mobile-first speed and conversion-optimised
                checkout flows for a city growing rapidly in e-commerce adoption.
              </p>
              <p>
                Every FactoryJet Nagpur project covers discovery, Figma prototyping, Next.js
                development, SEO, GA4, and a 30-day support window. You leave with a codebase you
                own, a design system you keep, and a site built to rank and convert.
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
                    type: 'B2B / Logistics & Industrial',
                    need: 'Capability + certifications + RFQ',
                    area: 'Butibori MIDC · Hingna · MIHAN SEZ · Zero Mile Hub',
                    colour: '#F05A28',
                  },
                  {
                    type: 'IT / Services & Retail',
                    need: 'Authority + mobile speed + lead flow',
                    area: 'MIHAN IT SEZ · Dharampeth · Sitabuldi · Sadar',
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
          headline="Why Nagpur Businesses Choose FactoryJet Over Local Agencies"
          lead="Nagpur web agencies typically charge ₹70,000–₹2,00,000 for a comparable project and take 6–16 weeks to deliver. FactoryJet publishes all three pricing tiers before you speak to us, guarantees 7-day delivery in writing, and builds in Next.js rather than WordPress — faster load times, a codebase you own outright. Pricing is fixed and published upfront for the same scope."
          pillars={[
            {
              icon: '⚡',
              title: '7-day delivery. In writing. Or you do not pay.',
              body: "Nagpur's business community moves on results, not timelines. Waiting 12 weeks for a website while the MIHAN IT season ramps up or the logistics contract window opens is not acceptable. FactoryJet delivers in 7 days, with the guarantee written into the project agreement. We have delivered on time on 97% of all projects since 2005.",
            },
            {
              icon: '🏗️',
              title: 'Next.js, not WordPress. The performance gap is real.',
              body: 'WordPress loads server-side PHP and fires 40–60 database queries per page load. Next.js generates static files served from Cloudflare CDN globally. The result: sub-1.5s load times on Indian 4G versus 4–6s for a typical WordPress site. For Nagpur businesses competing on Google\'s Core Web Vitals, that gap directly affects rankings.',
            },
            {
              icon: '📋',
              title: 'Fixed price. Published before the first call.',
              body: "We publish all three tiers — ₹29,999, ₹80,000, and ₹1,50,000+ — before you speak to us. No discovery fees, no 'it depends' quotes. Fixed price, fixed scope, agreed upfront. No surprise invoices after launch.",
            },
          ]}
        />

        {/* ── 7. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="How We Build Your Nagpur Website in 7 Days"
          lead="Buyer strategy agreed before design. Mobile approval before development. SEO and analytics wired before launch."
          stages={NAG_JOURNEY_STAGES}
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
          headline="FactoryJet vs. Nagpur Agency vs. Freelancer vs. Template Builder"
          lead="Not all web design options in Nagpur deliver the same output. Here is the honest comparison — scope, price, timeline, and what you own after launch."
          pullQuote={{
            stat: '₹29,999',
            caption:
              'starting price — same Figma-first design, Next.js engineering, technical SEO, and Lighthouse audit as a ₹1,50,000 Nagpur agency project.',
          }}
          columns={NAG_COMPARISON_COLUMNS}
          rows={NAG_COMPARISON_ROWS}
          footer="Prices reflect typical Nagpur market ranges as of 2025. FactoryJet fixed-price contracts available for all tiers."
        />

        {/* ── 10. INDUSTRIES ───────────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="NAGPUR × WEB DESIGN"
          headline="Web Design for Nagpur's Key Industries"
          lead="From logistics companies and MIDC manufacturers to MIHAN SEZ IT firms, agri-exporters, and growing service businesses — Nagpur's economy spans industries with very different digital requirements. FactoryJet has built for each of them."
          sectors={[
            {
              name: 'Logistics & Warehousing',
              description:
                "Nagpur's Zero Mile location makes it India's logistics sweet spot — equidistant from all major metros by rail, road, and air. 500+ freight, warehousing, and 3PL companies operate from Nagpur to serve national supply chains. These businesses need websites that display fleet capacity, warehouse footprint, trade lane coverage, certifications, and RFQ flows — optimised for domestic shippers and national procurement teams running vendor assessments.",
              example:
                'Freight forwarders, 3PL warehousing companies, and transport fleet operators leveraging the Zero Mile advantage to serve pan-India supply chains.',
            },
            {
              name: 'Manufacturing & MIDC',
              description:
                "Butibori MIDC — Maharashtra's second-largest industrial estate — and Hingna Industrial Estate house over 700 manufacturing units spanning textiles, engineering goods, food processing, packaging, and chemicals. MSME manufacturers need websites that project production capacity, quality certifications, product specifications, and inquiry flows designed for domestic and export procurement cycles. B2B buyers from across India research manufacturers online before visiting.",
              example:
                'MSME manufacturers in Butibori MIDC and Hingna Industrial Estate targeting domestic procurement teams and export buyers.',
            },
            {
              name: 'Agri-Export & Orange Trade',
              description:
                "Nagpur oranges are GI-tagged — internationally recognised for their quality and distinct flavour. Agri-exporters, orange processing businesses, and food export companies need websites that display GI certification, export compliance credentials, product grades, cold storage capacity, and inquiry flows for buyers in the UAE, UK, Europe, and Southeast Asia. Technical SEO targeting international English-language buyer searches is built in from day one.",
              example:
                'Agri-exporters, orange trading companies, and food processing businesses in Nagpur and Vidarbha targeting international retail and wholesale buyers.',
            },
            {
              name: 'IT & BPO (MIHAN SEZ)',
              description:
                "MIHAN SEZ is transforming Nagpur into a significant IT and BPO hub — TCS, Infosys, and HCL operate from the MIHAN IT SEZ, setting the credibility benchmark for all tech businesses in the city. IT services firms, BPO operations, and SaaS startups emerging from the MIHAN ecosystem need websites built for national and international client acquisition: authority-first architecture, service capability pages, and lead flows designed for enterprise sales cycles.",
              example:
                'IT services companies, BPO operations, and tech startups operating from MIHAN SEZ targeting national enterprise clients and international outsourcing buyers.',
            },
            {
              name: 'Cotton, Textiles & Mining Support',
              description:
                "Vidarbha is one of India's premier cotton-producing regions, and the coal and mining sector in the broader Nagpur-Chandrapur belt generates significant B2B trade. Cotton ginners, textile processors, and mining support businesses need websites designed for bulk commodity buyers and procurement teams — product specifications, compliance documentation, and RFQ forms that meet international buyer standards.",
              example:
                'Cotton ginners, textile traders, and mining support service companies in Nagpur and the Vidarbha region targeting domestic and export buyers.',
            },
            {
              name: 'Professional Services',
              description:
                "Nagpur has a strong CA, legal, and consulting community serving Vidarbha's large business sector — including statutory compliance work for MIDC manufacturers, tax advisory for MIHAN SEZ tenants, and corporate legal services for the region's trading and logistics companies. For these businesses, the website is the first qualification filter — does this firm look credible enough to engage? We build authority-first sites with service capability pages, credential display, and lead-capture flows that convert research into booked consultations.",
              example:
                "CA and CS firms, corporate law practices, management consulting firms, and chartered accountants serving Nagpur's industrial and commercial business community.",
            },
          ]}
        />

        {/* ── 11. PRICING ──────────────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="TRANSPARENT PRICING"
            headline="Transparent, Fixed-Price Web Design for Nagpur Businesses"
            lead="Nagpur agency rates for comparable web projects run ₹70,000–₹2,00,000. FactoryJet Growth (₹80,000) delivers 10–15 pages, blog CMS, lead capture, GA4, Next.js, and a 7-day delivery guarantee — with a codebase you own outright."
            tiers={[
              {
                name: 'Starter',
                priceRange: '₹29,999',
                description:
                  'A 5-page business site that loads fast on mobile and ranks for your name and core service. Best for small businesses, MSME manufacturers, and sole practitioners in Nagpur who need a credible online presence quickly.',
                features: [
                  '5 pages, mobile-responsive',
                  'Basic SEO & LocalBusiness schema',
                  'Contact form + WhatsApp integration',
                  'GA4 setup',
                  '2 revision rounds',
                  '30-day post-launch support',
                ],
                cta: { label: 'Get a Quote', modal: true as const, region: 'in' as const },
              },
              {
                name: 'Growth',
                priceRange: '₹80,000',
                description:
                  'A 10–15 page site with blog CMS, lead-capture flows, and analytics wired in from day one. Best for Nagpur SMBs, logistics companies, and MIDC businesses scaling online who need the site to actively generate qualified enquiries.',
                features: [
                  '10–15 pages with blog CMS',
                  'Advanced SEO — schema, meta templates, internal links',
                  'Lead capture + email automation',
                  'GA4 + GTM + Search Console',
                  '3 revision rounds',
                  '30-day support + CMS training session',
                ],
                cta: { label: 'Get a Quote', modal: true as const, region: 'in' as const },
                popular: true,
              },
              {
                name: 'Custom',
                priceRange: '₹1,50,000+',
                description:
                  'Custom Next.js build with product catalogs, booking systems, AI integrations, or API connections. Best for established Nagpur businesses — MIHAN SEZ tenants, large logistics operators, agri-exporters — with complex requirements and a real digital revenue line.',
                features: [
                  'Custom Next.js architecture',
                  'Product catalog or e-commerce (Razorpay, Shiprocket)',
                  'AI integrations (chat, search, content)',
                  'Third-party API connections (Tally, Zoho)',
                  'Priority support + quarterly reviews',
                  'Dedicated engineering point of contact',
                ],
                cta: { label: 'Book a Discovery Call', modal: true as const, region: 'in' as const },
              },
            ] as const}
            footnote="All prices in INR inclusive of design, development, SEO setup, and GA4. Cloudflare Pages hosting is free for standard Next.js builds — no monthly hosting fee."
          />
        </div>

        {/* ── 12. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What India's founders say after we build their site"
        />

        {/* ── 13. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Common Questions from Nagpur Businesses"
          lead="The questions we answer on every Nagpur discovery call — answered here, without the runaround."
          categories={NAG_FAQ_CATEGORIES}
          items={NAG_FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Build Your Nagpur Website?"
          sub="Nagpur's Zero Mile logistics advantage, MIHAN SEZ investment momentum, Butibori MIDC manufacturing base, and growing agri-export community mean every serious business is competing for the same buyer impressions and Google rankings. Every week without a high-performing website is ground you are conceding to a competitor who already has one. Start today and have a sitemap ready within 72 hours."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price. 7-day delivery. Next.js. Your codebase delivered in full on launch day."
        />

      </main>

      <SiteFooter locale="in" />
    </>
  );
}

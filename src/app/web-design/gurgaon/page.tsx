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
  title: 'Web Design Company in Gurgaon | From ₹29,999 | FactoryJet',
  description:
    'Web design company in Gurgaon for Fortune 500 GCCs, BFSI firms, and startups. Fast websites from ₹29,999. 7-day delivery. Serving Cyber City, Golf Course Road, MG Road & DLF areas.',
  keywords: [
    'web design company in Gurgaon',
    'website design Gurgaon',
    'web development company Gurgaon',
    'website design company Gurugram',
    'affordable web design Gurgaon',
    'professional website design Gurgaon',
    'web design Cyber City Gurgaon',
    'web design Golf Course Road',
    'BFSI website design Gurgaon',
    'GCC website design Gurgaon',
    'startup website design Gurgaon',
    'web design agency Gurugram',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Gurgaon | From ₹29,999 | FactoryJet',
    description:
      'Professional website design company in Gurgaon — Next.js, SEO, and GA4 included. 7-day delivery. From ₹29,999. Serving Cyber City, Cyber Hub, Golf Course Road, MG Road, DLF areas, and Sohna Road.',
    url: 'https://factoryjet.com/web-design/gurgaon',
    images: [
      {
        url: 'https://factoryjet.com/images/services/web-design.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Web Design Services in Gurgaon',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Gurgaon | FactoryJet',
    description:
      'Website design company in Gurgaon. From ₹29,999. 7-day delivery. Next.js, SEO, GA4 included.',
    images: ['https://factoryjet.com/images/services/web-design.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/web-design/gurgaon',
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
    'Web design company in Gurgaon building fast, SEO-optimized websites for Fortune 500 GCCs, BFSI firms, startups, and growing businesses. From ₹29,999. 7-day delivery guarantee.',
  url: 'https://factoryjet.com/web-design/gurgaon',
  telephone: '+919699977699',
  email: 'connect@factoryjet.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Gurgaon',
    addressRegion: 'Haryana',
    addressCountry: 'IN',
  },
  areaServed: [
    { '@type': 'City', name: 'Gurgaon' },
    { '@type': 'City', name: 'Gurugram' },
    { '@type': 'City', name: 'Cyber City' },
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
    name: 'Web Design Services Gurgaon',
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
      name: 'How much does a website cost for a business in Gurgaon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "FactoryJet's web design for Gurgaon businesses starts at ₹29,999 for a 5-page Starter site. The Growth tier (₹80,000) covers 10–15 pages, a blog CMS, lead-capture forms, and GA4 analytics. Custom builds start at ₹1,50,000. Premium Gurgaon agency rates for comparable scope typically run ₹1,50,000–₹5,00,000.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a website in Gurgaon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard FactoryJet build delivers in 7 days from kickoff to launch. Discovery and design take the first two days, development runs through days five and six, and content, SEO, and launch happen on day seven.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build websites for GCCs and enterprise companies in Gurgaon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — Global Capability Centres, BFSI firms, IT/ITES companies, and enterprise businesses in Cyber City and Golf Course Road are a core client profile for us in Gurgaon. We build websites optimised for corporate credibility, B2B lead acquisition, and international buyer research — with authority-first architecture, compliance-aware content, and enterprise-grade performance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my Gurgaon business website rank on Google?',
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

const GGN_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      "We map your ideal customer profile against Gurgaon's corporate market — whether that's a Fortune 500 GCC in Cyber City, a BFSI firm on Golf Course Road, a D2C brand, or a startup in Sohna Road. We audit your top competitors, identify your highest-value search terms, and agree the sitemap and content plan before design begins. — Days 1–2",
  },
  {
    number: '02',
    title: 'Design & Prototyping',
    description:
      "Figma wireframes at 375px (mobile-first) through to 1440px desktop. Every tap target, form field, and section reviewed against your conversion goal — whether that's an enterprise RFQ, a demo request, or a D2C purchase. You approve the design before development starts. — Days 3–4",
  },
  {
    number: '03',
    title: 'Development',
    description:
      'Built in Next.js deployed to Cloudflare CDN — sub-1.5s load times on Indian 4G networks. Contact forms, WhatsApp integration, CRM connectors (Salesforce, HubSpot, Zoho), and enterprise APIs wired in from day one. Performance budgets enforced from the first commit. — Days 5–6',
  },
  {
    number: '04',
    title: 'Content & SEO',
    description:
      'Optimised copy, WebP imagery, meta tags, JSON-LD schema (LocalBusiness + FAQPage), and internal links. Sitemap submitted to Google Search Console. Gurgaon-specific local SEO targeting built in — Cyber City, Golf Course Road, MG Road, and DLF district searches. — Day 6–7',
  },
  {
    number: '05',
    title: 'Launch & Handover',
    description:
      'DNS transfer to Cloudflare, GA4 and GTM configured, Search Console verified. Recorded handover walkthrough so your team is fully self-sufficient. 30-day post-launch support window included. — Day 7+',
  },
];

const GGN_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'included',  label: "What's Included" },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local',     label: 'Gurgaon Local' },
  { key: 'support',   label: 'Support & Ownership' },
];

const GGN_FAQ_ITEMS = [

  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'How much does a website cost for a business in Gurgaon?',
    answer:
      "FactoryJet's web design for Gurgaon businesses starts at ₹29,999 for a 5-page Starter site. The Growth tier (₹80,000) covers 10–15 pages, a blog CMS, lead-capture forms, and GA4 analytics. Custom builds start at ₹1,50,000. Premium Gurgaon agency rates for comparable scope typically run ₹1,50,000–₹5,00,000.",
  },
  {
    category: 'pricing',
    question: 'How long does it take to build a website?',
    answer:
      'A standard FactoryJet build delivers in 7 days from kickoff to launch. Discovery and design take the first two days, development days three through six, and content, SEO, and launch on day seven. The 7-day clock starts when your brand assets and content are in our shared workspace.',
  },
  {
    category: 'pricing',
    question: 'What makes FactoryJet better value than a Gurgaon web agency?',
    answer:
      'We are a specialised web engineering team — not a full-service agency with large Cyber City or Golf Course Road overheads. The same Figma-first design process, the same Next.js engineering, the same Lighthouse audit before launch — at 60–70% lower cost. You pay for the build, not our real estate.',
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
      'Yes. Every Growth and Custom tier project includes a headless CMS integration (Sanity or Contentful) so your team can update content without touching code. Ideal for Gurgaon corporate teams with dedicated marketing managers.',
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
      "We build on Next.js deployed to Cloudflare's global CDN — sub-1.5s load times on Indian 4G versus 4–6s for a typical WordPress site. For Gurgaon businesses competing on Google's Core Web Vitals, that performance gap directly affects rankings and first-impression credibility with enterprise buyers.",
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
      'Yes — GA4 and Google Tag Manager are wired up before launch on every project. Key conversion events (form submissions, WhatsApp clicks, demo request clicks) are configured from day one. Search Console verified and sitemap submitted.',
  },

  /* ── Gurgaon Local ── */
  {
    category: 'local',
    question: 'Do you build websites for GCCs and enterprise companies in Gurgaon?',
    answer:
      'Yes — Global Capability Centres, BFSI firms, IT/ITES companies, and enterprise businesses in Cyber City and Golf Course Road are a core client profile for us in Gurgaon. We build websites with authority-first architecture, corporate credibility signals, compliance-aware content, and enterprise-grade performance to pass procurement reviews.',
  },
  {
    category: 'local',
    question: 'Can you build websites for Gurgaon startups and D2C brands?',
    answer:
      "Yes. Gurgaon's startup ecosystem — centred around Sector 29, Sohna Road, and co-working clusters across the city — produces a high volume of funded startups and D2C brands. Startup websites need product-led architecture, investor credibility signals, demo request flows, and performance designed for rapid iteration. We build for all of them.",
  },
  {
    category: 'local',
    question: "Do you know Gurgaon's business districts well enough to write relevant copy?",
    answer:
      "Yes. We research Gurgaon's business geography as part of discovery — from Cyber City's Fortune 500 GCC cluster and Cyber Hub's tech-and-lifestyle corridor to Golf Course Road's premium commercial stretch, MG Road's retail and hospitality strip, DLF Phase 1–5's mixed commercial zones, and Sohna Road's rapidly growing startup belt. Local specificity in copy and LocalBusiness schema improves relevance for area-level searches.",
  },
  {
    category: 'local',
    question: 'How does FactoryJet compare to Gurgaon web agencies?',
    answer:
      "Premium Gurgaon web agencies typically charge ₹1,50,000–₹5,00,000 for a comparable project and deliver in 8–20 weeks. FactoryJet publishes all three pricing tiers before you speak to us, guarantees 7-day delivery in writing, and builds in Next.js rather than WordPress. Faster website, shorter timeline, codebase you own — at 60–70% less.",
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
    question: 'Do you offer ongoing retainer services for Gurgaon businesses?',
    answer:
      'Yes. Monthly retainers from ₹4,999/month cover ongoing development work, content updates, new landing pages, SEO improvements, and technical maintenance. Retainer clients get priority scheduling and a dedicated engineer — important for Gurgaon corporate teams who need rapid turnaround.',
  },
];

const GGN_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Gurgaon Premium Agency' },
  { label: 'Freelancer' },
  { label: 'Template (Wix/Squarespace)' },
] as const;

const GGN_COMPARISON_ROWS = [
  {
    feature: 'Starting price',
    values: ['₹29,999', '₹1,50,000–₹5,00,000', '₹10,000–₹75,000', '₹0–₹15,000 (you build it)'],
  },
  {
    feature: 'Delivery timeline',
    values: ['7 days', '8–20 weeks', '4–16 weeks (unreliable)', '1–2 weeks (you build it)'],
  },
  {
    feature: 'Custom Figma design',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ga" kind="yes" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Next.js (not WordPress)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ga" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Technical SEO built in',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ga" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Lighthouse 90+ on mobile',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ga" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'GA4 + GTM wired up',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ga" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Published pricing (no surprises)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ga" kind="no" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="yes" />,
    ],
  },
  {
    feature: 'Full codebase to your GitHub',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ga" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: '7-day delivery guarantee',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ga" kind="no" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  '@id': `https://factoryjet.com/web-design/gurgaon#howto`,
  name: `How FactoryJet builds your Gurgaon website in 7 days`,
  description: `Our 7-day process for delivering a professional, high-performance website for Gurgaon businesses.`,
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
      text: `We learn your business, your Gurgaon market, your goals, and what you need the website to do — whether that's GCC credibility, startup lead gen, or D2C conversions.`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Day 2 — Strategy & Structure',
      text: `We map your site architecture, research your Gurgaon competitors, identify your top keywords, and write the first draft of your page copy.`,
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
      text: `Your approved design is built in code — fast, mobile-first, and SEO-optimised. Gurgaon local schema markup added. Google Analytics and Search Console connected.`,
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
  '@id': `https://factoryjet.com/web-design/gurgaon#webpage`,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: `https://factoryjet.com/web-design/gurgaon`,
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function GurgaonWebDesignPage() {
  return (
    <>
      <Script
        id="gurgaon-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="gurgaon-faq-schema"
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
          { name: 'Gurgaon', url: 'https://factoryjet.com/web-design/gurgaon' },
        ]}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          eyebrow="WEB DESIGN · GURGAON"
          headline="Website Design in Gurgaon for GCCs, BFSI Firms, Startups, and High-Value B2B Businesses"
          lead="Gurgaon is India's corporate capital — home to 250+ Fortune 500 Global Capability Centres, India's largest BFSI corridor, and the fastest-growing startup ecosystem in North India. From Cyber City's GCC cluster to Golf Course Road's premium commercial stretch and Sohna Road's emerging startup belt, Gurgaon businesses demand quality and know how to evaluate it. FactoryJet builds from ₹29,999 — Figma-designed, Next.js-built, 7-day delivery guarantee, your codebase delivered in full."
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
          eyebrow="GURGAON MARKET"
          headline="Why Your Gurgaon Web Presence Is a Competitive Necessity"
          leadParagraphs={[
            "Gurgaon (Gurugram) is India's corporate powerhouse — the country's single largest concentration of Fortune 500 Global Capability Centres, housing operations for Google, Microsoft, Deloitte, American Express, McKinsey, and hundreds more. The city's Cyber City precinct alone employs over 200,000 knowledge workers. Golf Course Road and the DLF phases form one of India's most valuable commercial real estate corridors. MG Road anchors retail and hospitality. And Sohna Road has emerged as North India's fastest-growing startup and tech corridor — attracting Sequoia, SoftBank, and Tiger Global-backed founders at pace.",
            "This corporate density creates a web design challenge unique to Gurgaon: the bar for credibility is higher here than almost anywhere else in India. A BFSI firm on Golf Course Road is being evaluated by procurement teams at global banks. A startup in Sector 29 is pitching to Series A investors who spend 15 minutes researching the founder's digital presence before taking the call. A GCC vendor trying to get on a panel is competing against multinationals with ₹5 crore design budgets. In Gurgaon, a weak website is not just a missed opportunity — it is an active disqualifier.",
            "Gurgaon's startup ecosystem is India's second-largest destination for startup investment by capital deployed — surpassing Pune, Hyderabad, and Chennai. D2C brands, SaaS companies, fintech startups, and HR tech platforms emerging from Gurgaon need websites that look funded, convert fast, and perform under traffic spikes. FactoryJet builds for the full spectrum — from the 5-page credibility site for a boutique consulting firm to the custom Next.js platform for a funded D2C brand scaling to ₹10 crore ARR.",
          ]}
          stats={[
            {
              value: '250+',
              label: 'Fortune 500 GCCs headquartered in Gurgaon — the highest concentration in India',
              sourceUrl: 'https://nasscom.in/',
              sourceLabel: 'NASSCOM',
            },
            {
              value: '#2',
              label: "India's second-largest startup investment hub by capital deployed — after Bengaluru",
              sourceUrl: 'https://www.startupindia.gov.in/',
              sourceLabel: 'Startup India',
            },
            {
              value: '₹4.5L Cr',
              label: "Gurgaon's estimated GDP — Haryana's largest city economy and NCR's corporate engine",
              sourceUrl: 'https://mospi.gov.in/',
              sourceLabel: 'MoSPI',
            },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION ───────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WEB DESIGN · GURGAON"
          headline="What 'Web Design' Actually Means for a Gurgaon Business"
          lead="Gurgaon's economy runs across three buyer types with completely different web requirements — enterprise procurement teams vetting GCC vendors, professional investors and B2B buyers evaluating BFSI and consulting firms, and performance-focused consumers driving D2C growth. FactoryJet builds for all three."
          body={
            <>
              <p>
                For Gurgaon&apos;s GCCs, BFSI firms, IT/ITES companies, and enterprise businesses
                in Cyber City and Golf Course Road — the website is a procurement filter. Global
                procurement teams, enterprise buyers, and institutional clients research vendors for
                weeks before making contact. The site needs to answer their due-diligence questions:
                credentials, service capability, client roster, compliance posture, and a frictionless
                RFP or demo-request flow. We build these sites with authority-first architecture, case
                study systems, and lead flows designed for enterprise sales cycles.
              </p>
              <p>
                For Gurgaon&apos;s startup corridor — Sector 29, Sohna Road, and the co-working
                clusters across the DLF phases — the challenge is different. Investors, strategic
                partners, and enterprise clients are evaluating your digital presence before the first
                Zoom call. A startup website needs to look funded before you are funded: product-led
                architecture, conversion-optimised demo flows, and performance capable of handling
                press spike traffic without breaking.
              </p>
              <p>
                For the D2C brands, retail businesses, and HR and consulting firms operating across
                MG Road, Sector 14, and the broader NCR consumer belt — the priority is mobile-first
                speed, conversion-optimised landing pages, and analytics that surface exactly which
                campaigns are driving qualified leads. Every FactoryJet Gurgaon project covers
                discovery, Figma prototyping, Next.js development, SEO, GA4, and a 30-day support
                window. You leave with a codebase you own and a site built to rank and convert.
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
                  Three buyer types. One framework.
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  {
                    type: 'Enterprise & GCC',
                    need: 'Credentials + procurement credibility',
                    area: 'Cyber City · Golf Course Road · DLF Phase 1–5',
                    colour: '#F05A28',
                  },
                  {
                    type: 'Startup & BFSI',
                    need: 'Authority + demo flows + investor signals',
                    area: 'Sector 29 · Sohna Road · Cyber Hub',
                    colour: '#0F0F12',
                  },
                  {
                    type: 'D2C & Retail',
                    need: 'Speed + mobile + conversion',
                    area: 'MG Road · Sector 14 · South Gurgaon',
                    colour: '#888880',
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
          headline="Why Gurgaon Businesses Choose FactoryJet Over Local Premium Agencies"
          lead="Premium Gurgaon web agencies typically charge ₹1,50,000–₹5,00,000 for a comparable project and take 8–20 weeks to deliver. FactoryJet publishes all three pricing tiers before you speak to us, guarantees 7-day delivery in writing, and builds in Next.js rather than WordPress — faster load times, a codebase you own outright. At 60–70% below the Gurgaon premium agency benchmark for the same scope."
          pillars={[
            {
              icon: '⚡',
              title: '7-day delivery. In writing. Or you do not pay.',
              body: "Gurgaon's corporate culture runs on deadlines. Waiting 16 weeks for a website briefed in Q1 while your competitor has already launched is not an option when procurement reviews and investor diligence cycles move fast. FactoryJet delivers in 7 days, with the guarantee written into the project agreement. We have delivered on time on 97% of all projects since 2005.",
            },
            {
              icon: '🏗️',
              title: 'Next.js, not WordPress. The performance gap is real.',
              body: "WordPress loads server-side PHP and fires 40–60 database queries per page load. Next.js generates static files served from Cloudflare CDN globally. The result: sub-1.5s load times versus 4–6s for a typical WordPress site. For Gurgaon businesses being evaluated by global procurement teams and investors, a slow website signals an under-resourced operation.",
            },
            {
              icon: '📋',
              title: 'Fixed price. Published before the first call.',
              body: "We publish all three tiers — ₹29,999, ₹80,000, and ₹1,50,000+ — before you speak to us. No discovery fees, no 'it depends' quotes, no scope creep invoices. Fixed price, fixed scope, agreed upfront. The kind of contract transparency that Gurgaon's procurement teams actually appreciate.",
            },
          ]}
        />

        {/* ── 7. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="How We Build Your Gurgaon Website in 7 Days"
          lead="Buyer strategy agreed before design. Mobile approval before development. SEO and analytics wired before launch."
          stages={GGN_JOURNEY_STAGES}
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
          headline="FactoryJet vs. Gurgaon Premium Agency vs. Freelancer vs. Template Builder"
          lead="Not all web design options in Gurgaon deliver the same output. Here is the honest comparison — scope, price, timeline, and what you own after launch."
          pullQuote={{
            stat: '₹29,999',
            caption:
              'starting price — same Figma-first design, Next.js engineering, technical SEO, and Lighthouse audit as a ₹3,00,000 Gurgaon premium agency project.',
          }}
          columns={GGN_COMPARISON_COLUMNS}
          rows={GGN_COMPARISON_ROWS}
          footer="Prices reflect typical Gurgaon premium market ranges as of 2025. FactoryJet fixed-price contracts available for all tiers."
        />

        {/* ── 10. INDUSTRIES ───────────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="GURGAON × WEB DESIGN"
          headline="Web Design for Gurgaon's Key Industries"
          lead="From Fortune 500 GCCs and BFSI firms to funded startups, real estate developers, and luxury retail brands — Gurgaon's economy spans industries with very different digital requirements. FactoryJet has built for each of them."
          sectors={[
            {
              name: 'BFSI & Fintech',
              description:
                "Gurgaon is India's largest BFSI corridor — home to Paytm, PolicyBazaar, the Indian arms of American Express, HSBC, Citi, and dozens of fintech unicorns. BFSI websites need compliance-aware content, regulatory credential display, enterprise credibility signals, and B2B lead flows designed for institutional procurement. Every design decision signals trustworthiness to buyers who can detect cutting corners.",
              example:
                'Fintech startups, banking service providers, insurance firms, and wealth management companies operating from Cyber City and Golf Course Road.',
            },
            {
              name: 'IT/ITES & GCCs',
              description:
                "Gurgaon houses 250+ Fortune 500 Global Capability Centres — Google, Microsoft, Deloitte, Accenture, and hundreds more. IT/ITES vendors, service providers, and staffing firms trying to get on GCC vendor panels need websites that pass procurement review: capability pages, case studies, credential display, ISO/SOC certifications, and enterprise-grade performance.",
              example:
                'IT services vendors, staffing firms, BPO and KPO providers, and technology consultancies targeting GCC procurement teams in Cyber City.',
            },
            {
              name: 'Real Estate & Construction',
              description:
                "Gurgaon's real estate market is one of the most active in India — Golf Course Road, Golf Course Extension, Sohna Road, and the DLF phases together form a ₹50,000+ crore residential and commercial market. Developers, brokers, and construction firms need websites with project gallery architecture, floor plan downloads, RERA details, virtual tour embeds, and lead-capture forms designed for high-value buyer journeys.",
              example:
                'Residential developers, commercial real estate firms, brokers, and construction companies operating across Gurgaon and the broader NCR.',
            },
            {
              name: 'Retail & Luxury',
              description:
                "MG Road, Cyber Hub, and the DLF Mall of India corridor make Gurgaon one of India's premium retail destinations. Luxury brands, premium retailers, and F&B businesses need websites that project aspirational quality — high-resolution imagery, immersive product showcase, mobile-first conversion flows, and direct booking or purchase capabilities. The digital experience must match the in-store one.",
              example:
                'Premium retail brands, luxury boutiques, F&B businesses, and lifestyle companies targeting Gurgaon and NCR consumers.',
            },
            {
              name: 'Startups & D2C',
              description:
                "Gurgaon is India's second-largest startup investment destination — home to funded companies in SaaS, edtech, healthtech, agritech, fintech, and D2C. Startups need websites that look credible before Series A, convert demo requests, and perform under press-spike traffic. D2C brands need mobile-first speed, Razorpay checkout integration, and analytics wired from day one.",
              example:
                'Seed and Series A startups, D2C brands, SaaS companies, and founder-led businesses emerging from Sohna Road, Sector 29, and co-working clusters across Gurgaon.',
            },
            {
              name: 'HR & Consulting',
              description:
                "Gurgaon's strong consulting and HR ecosystem — from boutique strategy firms to large staffing companies and management consultancies — needs authority-first websites that convert executive-level buyers. These buyers expect impeccable design, clear service capability pages, thought leadership content, and a friction-free consultation booking flow. First impressions here are everything.",
              example:
                'Management consulting firms, HR and staffing companies, executive search firms, and corporate training providers serving Gurgaon and NCR enterprises.',
            },
          ]}
        />

        {/* ── 11. PRICING ──────────────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="TRANSPARENT PRICING"
            headline="Transparent, Fixed-Price Web Design for Gurgaon Businesses"
            lead="Premium Gurgaon agency rates for comparable web projects run ₹1,50,000–₹5,00,000. FactoryJet Growth (₹80,000) delivers 10–15 pages, blog CMS, lead capture, GA4, Next.js, and a 7-day delivery guarantee — with a codebase you own outright."
            tiers={[
              {
                name: 'Starter',
                priceRange: '₹29,999',
                description:
                  'A 5-page business site that loads fast on mobile and ranks for your name and core service. Best for boutique consulting firms, small businesses, and sole practitioners in Gurgaon who need a credible online presence quickly.',
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
                  'A 10–15 page site with blog CMS, lead-capture flows, and analytics wired in from day one. Best for Gurgaon SMBs, startups, and BFSI firms scaling online who need the site to actively generate qualified enquiries.',
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
                  'Custom Next.js build with product catalogs, booking systems, AI integrations, CRM connectors, or enterprise APIs. Best for established Gurgaon businesses with complex requirements and a real digital revenue line.',
                features: [
                  'Custom Next.js architecture',
                  'CRM integration (Salesforce, HubSpot, Zoho)',
                  'AI integrations (chat, search, content)',
                  'Third-party API connections',
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
          headline="Common Questions from Gurgaon Businesses"
          lead="The questions we answer on every Gurgaon discovery call — answered here, without the runaround."
          categories={GGN_FAQ_CATEGORIES}
          items={GGN_FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Build Your Gurgaon Website?"
          sub="Gurgaon's Fortune 500 GCC density, BFSI corridor, and North India's most active startup ecosystem mean every serious business is competing for the same procurement approvals, the same investor first impressions, and the same Google rankings. Every week without a high-performing website is ground you are conceding to a competitor who already has one. Start today and have a sitemap ready within 72 hours."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price. 7-day delivery. Next.js. Your codebase delivered in full on launch day."
        />

      </main>

      <SiteFooter locale="in" />
    </>
  );
}

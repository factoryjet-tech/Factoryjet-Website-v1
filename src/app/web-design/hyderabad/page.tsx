import type { Metadata } from 'next';
import Script from 'next/script';
import { webDesignCityAlternatesIN } from '@/data/hreflangMap';
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
  title: 'Web Design Company in Hyderabad | From ₹25,000 | FactoryJet',
  description:
    'Web design company in Hyderabad for IT firms, pharma companies & businesses. Fast websites from ₹25,000. 7-day delivery. Serving HITEC City, Gachibowli & Madhapur.',
  keywords: [
    'web design company in Hyderabad',
    'website design Hyderabad',
    'web development company Hyderabad',
    'website design company Hyderabad',
    'affordable web design Hyderabad',
    'professional website design Hyderabad',
    'web design HITEC City',
    'web design Gachibowli',
    'IT company website design Hyderabad',
    'pharma website design Hyderabad',
    'Next.js web development Hyderabad',
    'web design agency Hyderabad',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Hyderabad | From ₹25,000 | FactoryJet',
    description:
      'Professional website design company in Hyderabad — Next.js, SEO, and GA4 included. 7-day delivery. From ₹25,000. Serving HITEC City, Gachibowli, Madhapur, Jubilee Hills.',
    url: 'https://factoryjet.com/web-design/hyderabad',
    images: [
      {
        url: 'https://factoryjet.com/images/services/web-design.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Web Design Services in Hyderabad',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Hyderabad | FactoryJet',
    description:
      'Website design company in Hyderabad. From ₹25,000. 7-day delivery. Next.js, SEO, GA4 included.',
    images: ['https://factoryjet.com/images/services/web-design.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/web-design/hyderabad',
    languages: webDesignCityAlternatesIN['hyderabad'],
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
    'Web design company in Hyderabad building fast, SEO-optimized websites for IT firms, pharma companies, and growing businesses. From ₹25,000. 7-day delivery guarantee.',
  url: 'https://factoryjet.com/web-design/hyderabad',
  telephone: '+919699977699',
  email: 'connect@factoryjet.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    addressCountry: 'IN',
  },
  areaServed: [
    { '@type': 'City', name: 'Hyderabad' },
    { '@type': 'City', name: 'Secunderabad' },
    { '@type': 'City', name: 'Cyberabad' },
  ],
  serviceType: 'Web Design and Development',
  priceRange: '₹₹',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '150',
    bestRating: '5',
    worstRating: '1',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Design Services Hyderabad',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Starter Website',
        price: '25000',
        priceCurrency: 'INR',
        description: '5-page business website, mobile-responsive, basic SEO, contact form.',
      },
      {
        '@type': 'Offer',
        name: 'Growth Website',
        price: '50000',
        priceCurrency: 'INR',
        description: '10–15 page website with blog CMS, lead capture, GA4, and advanced SEO.',
      },
      {
        '@type': 'Offer',
        name: 'Custom Website',
        price: '100000',
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
      name: 'How much does a website cost for a business in Hyderabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "FactoryJet's web design for Hyderabad businesses starts at ₹25,000 for a 5-page Starter site. The Growth tier (₹50,000) covers 10–15 pages, a blog CMS, lead-capture forms, and GA4 analytics. Custom builds start at ₹1,00,000. Hyderabad agency rates for comparable scope typically run ₹1,25,000–₹3,50,000.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a website in Hyderabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard FactoryJet build delivers in 7 days from kickoff to launch. Discovery and design take the first two days, development runs through days five and six, and content, SEO, and launch happen on day seven.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build websites for pharma and biotech companies in Hyderabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — pharma, biotech, and life sciences companies are a core client profile for us in Hyderabad. We build websites with regulatory-aware copy, product documentation systems for API and bulk drug exports, and B2B lead flows designed for institutional procurement. We serve clients in Genome Valley, Patancheru, and Nacharam.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my website rank on Google for Hyderabad searches?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Technical SEO is built in: JSON-LD schema markup, optimised title and meta tags, Core Web Vitals green on mobile, internal linking, XML sitemap submitted to Google Search Console, and WebP images with descriptive alt text. Branded searches rank within 1–2 weeks. Service + location queries take 3–6 months for a new domain.',
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

const HYD_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      "We map your ideal customer profile against Hyderabad's market — whether that's an enterprise IT buyer evaluating vendors in HITEC City, a pharma procurement team in Genome Valley, or a consumer browsing on mobile in Jubilee Hills. We audit your top competitors and agree the sitemap. — Days 1–2",
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
      'Built in Next.js deployed to Cloudflare CDN — sub-1.5s load times on Indian 4G networks. Contact forms, WhatsApp integration, booking flows, and any third-party APIs your business uses. Performance budgets enforced from the first commit. — Days 5–6',
  },
  {
    number: '04',
    title: 'Content & SEO',
    description:
      'Optimised copy, WebP imagery, meta tags, JSON-LD schema (LocalBusiness + FAQPage), and internal links. Sitemap submitted to Google Search Console. Hyderabad-specific local SEO targeting built in. — Day 6–7',
  },
  {
    number: '05',
    title: 'Launch & Handover',
    description:
      'DNS transfer to Cloudflare, GA4 and GTM configured, Search Console verified. Recorded handover walkthrough so your team is fully self-sufficient. 30-day post-launch support window included. — Day 7+',
  },
];

const HYD_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'included',  label: "What's Included" },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local',     label: 'Hyderabad Local' },
  { key: 'support',   label: 'Support & Ownership' },
];

const HYD_FAQ_ITEMS = [

  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'How much does a website cost for a business in Hyderabad?',
    answer:
      "FactoryJet's web design for Hyderabad businesses starts at ₹25,000 for a 5-page Starter site. The Growth tier (₹50,000) covers 10–15 pages, a blog CMS, lead-capture forms, and GA4 analytics. Custom builds start at ₹1,00,000. Hyderabad agency rates for comparable scope typically run ₹1,25,000–₹3,50,000.",
  },
  {
    category: 'pricing',
    question: 'How long does it take to build a website?',
    answer:
      'A standard FactoryJet build delivers in 7 days from kickoff to launch. Discovery and design take the first two days, development days three through six, and content, SEO, and launch on day seven. The 7-day clock starts when your brand assets and content are in our shared workspace.',
  },
  {
    category: 'pricing',
    question: 'Why is FactoryJet cheaper than Hyderabad web agencies?',
    answer:
      "We are a specialised web engineering team — not a full-service agency with multiple layers of overhead. The same Figma-first design process, the same Next.js engineering, the same Lighthouse audit before launch — at 60–70% lower cost. You pay for the build, not our admin structure.",
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
      'Basic copywriting for headings, hero text, and service descriptions is included. Full SEO content is available as an add-on. We send a content brief before development starts.',
  },
  {
    category: 'included',
    question: 'Do you provide website hosting?',
    answer:
      "We deploy to Cloudflare Pages, which is free for most projects (static Next.js builds). You own your own Cloudflare account — we configure it for you. No monthly hosting fee to us.",
  },
  {
    category: 'included',
    question: 'Can I update the website myself after launch?',
    answer:
      'Yes. Every Growth and Custom tier project includes a headless CMS integration (Sanity or Contentful) so your team can add blog posts, update team pages, and change service descriptions without touching code.',
  },

  /* ── Technical & SEO ── */
  {
    category: 'technical',
    question: 'Will my website rank on Google India?',
    answer:
      'Technical SEO is built into every project: JSON-LD schema markup, optimised title and meta templates, Core Web Vitals green on mobile, internal linking, XML sitemap submitted to Google Search Console, and WebP images with descriptive alt text. Branded searches typically rank within 1–2 weeks. Service + location queries take 3–6 months for a new domain.',
  },
  {
    category: 'technical',
    question: 'What tech stack do you build on?',
    answer:
      "We build on Next.js deployed to Cloudflare's global CDN. Next.js generates static pages that load under 1.5 seconds on Indian 4G networks — significantly faster than WordPress. For Hyderabad businesses competing on Google's Core Web Vitals signals, that performance gap directly affects rankings.",
  },
  {
    category: 'technical',
    question: 'How does the site perform on mobile for Indian users?',
    answer:
      'Mobile-first is the default. Every build targets Lighthouse 90+ and green Core Web Vitals on mobile before launch. We design at 375px before desktop, serve WebP images via Cloudflare CDN with lazy loading, and build thumb-friendly tap targets throughout.',
  },
  {
    category: 'technical',
    question: 'Do you set up Google Analytics and Search Console?',
    answer:
      'Yes — GA4 and Google Tag Manager are wired up before launch on every project. Key conversion events (form submissions, WhatsApp clicks, phone clicks) are configured from day one. Search Console is verified and the sitemap submitted.',
  },

  /* ── Hyderabad Local ── */
  {
    category: 'local',
    question: 'Do you build websites for pharma and biotech companies in Hyderabad?',
    answer:
      "Yes — pharma, biotech, and life sciences are a core client profile for us in Hyderabad. We build websites with regulatory-aware copy, product documentation systems for API and bulk drug exports, and B2B lead flows for institutional procurement. We serve clients in Genome Valley, Patancheru, IDA Nacharam, and Mallapur.",
  },
  {
    category: 'local',
    question: 'Can you build websites for IT and tech companies in HITEC City?',
    answer:
      "Yes. HITEC City and Gachibowli house thousands of IT services firms, product companies, and GCCs. These businesses need websites that project technical capability, client credentials, and delivery track record. We build with authority-first architecture, capability pages, and lead-capture flows designed for enterprise B2B sales cycles.",
  },
  {
    category: 'local',
    question: "Do you know Hyderabad's business districts well enough to write relevant copy?",
    answer:
      "Yes. We research Hyderabad's business geography as part of discovery — from HITEC City's IT corridor and Gachibowli's startup cluster to Genome Valley's pharma hub, Jubilee Hills' premium retail, and the Secunderabad business district. Local specificity improves relevance for neighbourhood-level and district-level searches.",
  },
  {
    category: 'local',
    question: 'How does FactoryJet compare to Hyderabad web agencies?',
    answer:
      "Hyderabad web agencies typically charge ₹1,25,000–₹3,50,000 for a comparable project and deliver in 8–16 weeks. FactoryJet publishes all three pricing tiers before you speak to us, guarantees 7-day delivery in writing, and builds in Next.js rather than WordPress. Faster site, shorter timeline, codebase you own — at 60–70% less.",
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
      'Every project includes a 30-day post-launch support window covering bug fixes, minor adjustments, and launch questions at no extra cost. Beyond that, FactoryJet offers monthly maintenance plans from ₹4,999/month.',
  },
  {
    category: 'support',
    question: 'What happens if something breaks after launch?',
    answer:
      'Within the 30-day support window, any bugs are fixed at no cost and typically within 24 hours. Because your site is on Cloudflare Pages, the most common causes of downtime — server crashes, plugin conflicts, database failures — simply do not apply.',
  },
  {
    category: 'support',
    question: 'Do you offer ongoing retainer services for Hyderabad businesses?',
    answer:
      'Yes. Monthly retainers from ₹4,999/month cover ongoing development work, content updates, new landing pages, SEO improvements, and technical maintenance. Retainer clients get priority scheduling and a dedicated engineer.',
  },
];

const HYD_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Hyderabad Agency' },
  { label: 'Freelancer' },
  { label: 'Template (Wix/Squarespace)' },
] as const;

const HYD_COMPARISON_ROWS = [
  {
    feature: 'Starting price',
    values: ['₹25,000', '₹1,25,000–₹3,50,000', '₹15,000–₹80,000', '₹0–₹15,000 (you build it)'],
  },
  {
    feature: 'Delivery timeline',
    values: ['7 days', '8–16 weeks', '4–16 weeks (unreliable)', '1–2 weeks (you build it)'],
  },
  {
    feature: 'Custom Figma design',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ha" kind="yes" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Next.js (not WordPress)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ha" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Technical SEO built in',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ha" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Lighthouse 90+ on mobile',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ha" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'GA4 + GTM wired up',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ha" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Published pricing (no surprises)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ha" kind="no" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="yes" />,
    ],
  },
  {
    feature: 'Full codebase to your GitHub',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ha" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: '7-day delivery guarantee',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ha" kind="no" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  '@id': `https://factoryjet.com/web-design/hyderabad#howto`,
  name: `How FactoryJet builds your Hyderabad website in 7 days`,
  description: `Our 7-day process for delivering a professional, AI-powered website for Hyderabad businesses.`,
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'INR',
    minValue: '25000',
  },
  totalTime: 'P7D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Day 1 — Discovery Call',
      text: `We learn your business, your Hyderabad market, your goals, and what you need the website to do.`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Day 2 — Strategy & Structure',
      text: `We map your site architecture, research your Hyderabad competitors, identify your top keywords, and write the first draft of your page copy.`,
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
      text: `Your approved design is built in code — fast, mobile-first, and SEO-optimised. Hyderabad local schema markup added. Google Analytics and Search Console connected.`,
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
  '@id': `https://factoryjet.com/web-design/hyderabad#webpage`,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: `https://factoryjet.com/web-design/hyderabad`,
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function HyderabadWebDesignPage() {
  return (
    <>
      <Script
        id="hyd-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="hyd-faq-schema"
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
          { name: 'Hyderabad', url: 'https://factoryjet.com/web-design/hyderabad' },
        ]}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          eyebrow="WEB DESIGN · HYDERABAD"
          headline="Website Design in Hyderabad Built for IT Companies, Pharma Firms, and Growing Businesses"
          lead="Hyderabad is India's second-largest IT exporter, home to 8,000+ IT and ITES companies in HITEC City and Gachibowli, India's largest pharma cluster in Genome Valley, and a rapidly growing startup and retail economy. FactoryJet builds from ₹25,000 — Figma-designed, Next.js-built, 7-day delivery guarantee, your codebase delivered in full."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustItems={[
            'Websites from ₹25,000',
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
          eyebrow="HYDERABAD MARKET"
          headline="Why Your Hyderabad Web Presence Is a Competitive Advantage"
          leadParagraphs={[
            "Hyderabad has emerged as India's second Silicon Valley — home to HITEC City and Gachibowli, which house the India offices of Microsoft, Google, Amazon, Facebook, and Apple alongside thousands of mid-size IT services and product companies. The city's $20B+ IT sector is complemented by one of India's largest pharmaceutical and biotechnology clusters — Genome Valley in Shamirpet hosts over 200 pharma and biotech companies, making Hyderabad the Pharma City of India. The Cyberabad corridor connecting HITEC City to Kondapur has become a dense startup ecosystem.",
            "This creates a web design opportunity unique to Hyderabad: a pharma bulk drug exporter in Patancheru needs a completely different site architecture from a SaaS startup in Koramangala or a retail brand in Jubilee Hills. IT services firms need to project global delivery capability; pharma companies need regulatory credibility and B2B procurement lead flows; consumer businesses need mobile-first speed and Instagram integration. FactoryJet builds for all three, because we start every project with the buyer journey in mind.",
            "The businesses winning in Hyderabad's competitive market are those with a faster, better-structured web presence than their competitors. A properly structured credibility page indexed by Google can double inbound enquiry volume for an IT firm. A 1-second load improvement increases consumer conversions by 7%. These outcomes are engineered into every FactoryJet project from day one.",
          ]}
          stats={[
            {
              value: '8,000+',
              label: "IT and ITES companies in Hyderabad's Cyberabad corridor — India's second-largest IT cluster",
              sourceUrl: 'https://nasscom.in/',
              sourceLabel: 'NASSCOM',
            },
            {
              value: '200+',
              label: 'Pharma and biotech companies in Genome Valley — the largest pharma cluster in India',
              sourceUrl: 'https://www.telangana.gov.in/',
              sourceLabel: 'Government of Telangana',
            },
            {
              value: '₹12L Cr+',
              label: "Hyderabad's estimated GDP — one of India's fastest-growing major city economies",
              sourceUrl: 'https://mospi.gov.in/',
              sourceLabel: 'MoSPI',
            },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION ───────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WEB DESIGN · HYDERABAD"
          headline="What 'Web Design' Actually Means for a Hyderabad Business"
          lead="Hyderabad's economy spans B2B enterprise buyers doing months of vendor research, pharma procurement teams with strict compliance requirements, and consumer markets that decide in under 10 seconds on mobile. FactoryJet builds for all three."
          body={
            <>
              <p>
                For Hyderabad&apos;s IT services firms, product companies, and GCCs in HITEC City
                and Gachibowli — a website needs to project technical credibility, delivery
                capability, and client track record. US, EU, and APAC enterprise procurement
                teams research vendors for months before making contact. The site needs to answer
                their evaluation questions clearly: technology stack, engagement models, case
                studies, certifications, and a frictionless RFQ flow. We build these sites with
                authority-first architecture, capability pages, and lead-capture systems designed
                for longer B2B sales cycles.
              </p>
              <p>
                For pharma and biotech companies in Genome Valley and IDA Nacharam — the challenge
                is regulatory credibility and B2B institutional procurement. International buyers
                and domestic hospital procurement teams need to verify GMP certifications, WHO
                compliance, product dossiers, and manufacturing capacity before issuing a PO. We
                build these sites with structured documentation systems, regulatory credential
                display, and lead-capture flows designed for the pharma procurement cycle.
              </p>
              <p>
                Every FactoryJet Hyderabad project covers discovery, Figma prototyping, Next.js
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
                  Three buyer types. One framework.
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  {
                    type: 'IT & Enterprise',
                    need: 'Credibility + capability + RFP flow',
                    area: 'HITEC City · Gachibowli · Madhapur',
                    colour: '#F05A28',
                  },
                  {
                    type: 'Pharma & Biotech',
                    need: 'Compliance + documentation + B2B leads',
                    area: 'Genome Valley · Patancheru · Nacharam',
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
          headline="Why Hyderabad Businesses Choose FactoryJet Over Local Agencies"
          lead="Hyderabad web agencies typically charge ₹1,25,000–₹3,50,000 for a comparable project and take 8–16 weeks to deliver — without publishing their rates upfront. FactoryJet publishes all three pricing tiers before you speak to us, guarantees 7-day delivery in writing, and builds in Next.js rather than WordPress — faster load times, no monthly plugin overhead, a codebase you own outright. At 60–70% below the Hyderabad agency benchmark for the same scope."
          pillars={[
            {
              icon: '⚡',
              title: '7-day delivery. In writing. Or you do not pay.',
              body: "Hyderabad's market moves fast — in IT, pharma, and retail. Waiting 12 weeks for a website briefed in April is not a growth strategy. FactoryJet delivers in 7 days, with the guarantee written into the project agreement. We have delivered on time on 97% of all projects since 2005.",
            },
            {
              icon: '🏗️',
              title: 'Next.js, not WordPress. The performance gap is real.',
              body: 'WordPress loads server-side PHP and fires 40–60 database queries per page load. Next.js generates static files served from Cloudflare CDN globally. The result: sub-1.5s load times on Indian 4G versus 4–6s for a typical WordPress site. For Hyderabad businesses competing on Google\'s Core Web Vitals signals, that gap directly affects rankings.',
            },
            {
              icon: '📋',
              title: 'Fixed price. Published before the first call.',
              body: "We publish all three tiers — ₹25,000, ₹50,000, and ₹1,00,000+ — before you speak to us. No discovery fees, no 'it depends' quotes. Fixed price, fixed scope, agreed upfront. No surprise invoices after launch.",
            },
          ]}
        />

        {/* ── 7. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="How We Build Your Hyderabad Website in 7 Days"
          lead="Buyer strategy agreed before design. Mobile approval before development. SEO and analytics wired before launch."
          stages={HYD_JOURNEY_STAGES}
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
                "Belle Maison is a premium interior décor brand. FactoryJet built their v2 website on Next.js with a Figma-designed product showcase, WhatsApp inquiry flow, and SEO targeting high-value interior design search queries. Lighthouse 95+ on mobile before launch.",
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
                'Formative Concepts is an MEP drafting and BIM consulting firm. FactoryJet rebuilt their website on Next.js with an authority-first architecture designed for B2B project enquiries — credentials display, project portfolio, and technical SEO.',
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
          headline="FactoryJet vs. Hyderabad Agency vs. Freelancer vs. Template Builder"
          lead="Not all web design options in Hyderabad deliver the same output. Here is the honest comparison — scope, price, timeline, and what you own after launch."
          pullQuote={{
            stat: '₹25,000',
            caption:
              'starting price — same Figma-first design, Next.js engineering, technical SEO, and Lighthouse audit as a ₹2,00,000 Hyderabad agency project.',
          }}
          columns={HYD_COMPARISON_COLUMNS}
          rows={HYD_COMPARISON_ROWS}
          footer="Prices reflect typical Hyderabad market ranges as of 2025. FactoryJet fixed-price contracts available for all tiers."
        />

        {/* ── 10. INDUSTRIES ───────────────────────────────────────────────── */}
        <IndustriesGrid
          eyebrow="HYDERABAD × WEB DESIGN"
          headline="Web Design for Hyderabad's Key Industries"
          lead="From HITEC City IT firms to Genome Valley pharma companies to Jubilee Hills retail brands — Hyderabad's economy spans industries with very different digital requirements. FactoryJet has built for each of them."
          sectors={[
            {
              name: 'IT & ITES',
              description:
                "Hyderabad is India's second-largest IT hub — home to Microsoft India headquarters, Amazon's largest campus outside the US, and thousands of mid-size IT services and ITES companies. These businesses compete for global enterprise contracts. Their websites need to project technical credibility, delivery capability, client case studies, and compliance certifications for US and EU procurement teams.",
              example:
                'IT services firms, GCCs, and product companies in HITEC City, Gachibowli, Madhapur, and Kondapur targeting enterprise clients globally.',
            },
            {
              name: 'Pharma & Biotech',
              description:
                "Hyderabad is India's Pharma City — home to Dr. Reddy's, Aurobindo, Hetero, and over 200 companies in Genome Valley. Pharma websites need GMP compliance display, WHO certification credentials, product dossier documentation systems, and B2B institutional procurement lead flows. International buyers require structured regulatory information before any procurement decision.",
              example:
                'Pharma manufacturers, API producers, and biotech companies in Genome Valley, Patancheru, IDA Nacharam, and Mallapur.',
            },
            {
              name: 'Government & PSU',
              description:
                "As India's dual capital (Hyderabad serves both Telangana and Andhra Pradesh), the city hosts significant government and PSU activity. Government contractors, infrastructure firms, and PSU vendors need websites projecting credibility, past project credentials, and compliance documentation to win public sector tenders and empanelment.",
              example:
                'Government contractors, infrastructure consultants, and PSU vendors operating in Hyderabad and the surrounding region.',
            },
            {
              name: 'Real Estate & Construction',
              description:
                "Hyderabad's real estate market has seen sustained growth driven by IT sector demand. Developers, brokers, and construction firms need websites with project gallery architecture, floor plan downloads, RERA details, and lead-capture forms. Local SEO targeting micro-markets like Gachibowli, Kukatpally, and Miyapur is built in.",
              example:
                'Residential developers, commercial real estate brokers, and construction firms operating across Hyderabad and Cyberabad.',
            },
            {
              name: 'Retail & D2C',
              description:
                "Jubilee Hills, Banjara Hills, and the growing retail corridors around Kukatpally and Madhapur are home to premium retail, F&B, and D2C brands. Consumer-facing websites need to convert mobile visitors in under 10 seconds — sub-1.5s load times, above-the-fold product display, Razorpay checkout, and Instagram integration.",
              example:
                'Retail brands, D2C consumer products, and F&B businesses serving Hyderabad\'s growing consumer market.',
            },
            {
              name: 'Professional Services',
              description:
                "Hyderabad's growth has created a large professional services ecosystem — CA firms, law firms, HR companies, and management consulting practices. For these businesses, the website is the first qualification filter. We build authority-first sites with credential display, service capability pages, and lead-capture flows that convert research into booked consultations.",
              example:
                "CA and CS firms, corporate law practices, management consulting, and HR companies serving Hyderabad's growing business community.",
            },
          ]}
        />

        {/* ── 11. PRICING ──────────────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="TRANSPARENT PRICING"
            headline="Transparent, Fixed-Price Web Design for Hyderabad Businesses"
            lead="Hyderabad agency rates for comparable web projects run ₹1,25,000–₹3,50,000. FactoryJet Growth (₹50,000) delivers 10–15 pages, blog CMS, lead capture, GA4, Next.js, and a 7-day delivery guarantee — with a codebase you own outright. No retainer required."
            tiers={[
              {
                name: 'Starter',
                priceRange: '₹25,000',
                description:
                  'A 5-page business site that loads fast on mobile and ranks for your name and core service. Best for small businesses, consultants, and sole traders in Hyderabad who need a credible online presence quickly.',
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
                priceRange: '₹50,000',
                description:
                  'A 10–15 page site with blog CMS, lead-capture flows, and analytics wired in from day one. Best for Hyderabad SMBs and IT/pharma companies scaling online who need the site to actively generate qualified enquiries.',
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
                priceRange: '₹1,00,000+',
                description:
                  'Custom Next.js build with product portals, booking systems, AI integrations, or complex API connections. Best for established Hyderabad businesses with complex requirements and a real digital revenue line.',
                features: [
                  'Custom Next.js architecture',
                  'Product catalog or documentation systems',
                  'AI integrations (chat, search, content)',
                  'Third-party API connections (Zoho, Salesforce)',
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
          headline="Common Questions from Hyderabad Businesses"
          lead="The questions we answer on every Hyderabad discovery call — answered here, without the runaround."
          categories={HYD_FAQ_CATEGORIES}
          items={HYD_FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Build Your Hyderabad Website?"
          sub="Hyderabad's 8,000+ IT companies, 200+ pharma firms, and growing retail economy means every serious business is competing for the same Google rankings and the same first impression with buyers. Every week without a high-performing website is market share you are handing to a competitor who already has one. Start today and have a sitemap ready within 72 hours."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price. 7-day delivery. Next.js. Your codebase delivered in full on launch day."
        />

      </main>

      <SiteFooter locale="in" />
    </>
  );
}

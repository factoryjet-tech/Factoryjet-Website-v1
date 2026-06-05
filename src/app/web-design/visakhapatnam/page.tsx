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
  title: 'Web Design Company in Visakhapatnam | From ₹29,999 | FactoryJet',
  description:
    'Web design company in Visakhapatnam for IT firms, petrochemical companies & businesses. Fast websites from ₹29,999. 7-day delivery. Serving Rushikonda IT SEZ, Madhurawada & MVP Colony.',
  keywords: [
    'web design company in Visakhapatnam',
    'website design Visakhapatnam',
    'web design company Vizag',
    'website design Vizag',
    'web development company Visakhapatnam',
    'website design company Visakhapatnam',
    'affordable web design Vizag',
    'professional website design Visakhapatnam',
    'web design Rushikonda IT SEZ',
    'web design Madhurawada',
    'IT company website design Visakhapatnam',
    'web design agency Vizag',
    'Next.js web development Visakhapatnam',
    'web design Andhra Pradesh',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Visakhapatnam | From ₹29,999 | FactoryJet',
    description:
      'Professional website design company in Visakhapatnam — Next.js, SEO, and GA4 included. 7-day delivery. From ₹29,999. Serving Rushikonda IT SEZ, MVP Colony, Madhurawada, Beach Road.',
    url: 'https://factoryjet.com/web-design/visakhapatnam',
    images: [
      {
        url: 'https://factoryjet.com/images/services/web-design.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Web Design Services in Visakhapatnam',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Visakhapatnam | FactoryJet',
    description:
      'Website design company in Visakhapatnam (Vizag). From ₹29,999. 7-day delivery. Next.js, SEO, GA4 included.',
    images: ['https://factoryjet.com/images/services/web-design.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/web-design/visakhapatnam',
    languages: webDesignCityAlternatesIN['visakhapatnam'],
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
    'Web design company in Visakhapatnam building fast, SEO-optimized websites for IT firms, petrochemical companies, port & logistics businesses, and growing enterprises. From ₹29,999. 7-day delivery guarantee.',
  url: 'https://factoryjet.com/web-design/visakhapatnam',
  telephone: '+919699977699',
  email: 'connect@factoryjet.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Visakhapatnam',
    addressRegion: 'Andhra Pradesh',
    addressCountry: 'IN',
  },
  areaServed: [
    { '@type': 'City', name: 'Visakhapatnam' },
    { '@type': 'City', name: 'Vizag' },
    { '@type': 'State', name: 'Andhra Pradesh' },
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
    name: 'Web Design Services Visakhapatnam',
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
      name: 'How much does a website cost for a business in Visakhapatnam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "FactoryJet's web design for Visakhapatnam businesses starts at ₹29,999 for a 5-page Starter site. The Growth tier (₹80,000) covers 10–15 pages, a blog CMS, lead-capture forms, and GA4 analytics. Custom builds start at ₹1,50,000. Vizag agency rates for comparable scope typically run ₹80,000–₹2,50,000.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a website in Visakhapatnam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard FactoryJet build delivers in 7 days from kickoff to launch. Discovery and design take the first two days, development runs through days five and six, and content, SEO, and launch happen on day seven.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build websites for IT and tech companies in Visakhapatnam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — IT companies, software firms, and tech startups in Rushikonda IT SEZ and Madhurawada are a growing client profile for us in Vizag. With Google\'s AI City investment accelerating tech workforce growth, businesses that establish a strong web presence now will own search rankings when Vizag\'s digital economy fully activates.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my Visakhapatnam business website rank on Google?',
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

const VIZAG_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      "We map your ideal customer profile against Visakhapatnam's market — whether that's a port logistics company in the harbour area, an IT startup in Rushikonda SEZ, a pharma manufacturer in Gajuwaka, or a tourism operator on Beach Road. We audit your top competitors and agree the sitemap and content plan. — Days 1–2",
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
      'Optimised copy, WebP imagery, meta tags, JSON-LD schema (LocalBusiness + FAQPage), and internal links. Sitemap submitted to Google Search Console. Visakhapatnam-specific local SEO targeting built in. — Day 6–7',
  },
  {
    number: '05',
    title: 'Launch & Handover',
    description:
      'DNS transfer to Cloudflare, GA4 and GTM configured, Search Console verified. Recorded handover walkthrough so your team is fully self-sufficient. 30-day post-launch support window included. — Day 7+',
  },
];

const VIZAG_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'included',  label: "What's Included" },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local',     label: 'Visakhapatnam Local' },
  { key: 'support',   label: 'Support & Ownership' },
];

const VIZAG_FAQ_ITEMS = [

  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'How much does a website cost for a business in Visakhapatnam?',
    answer:
      "FactoryJet's web design for Visakhapatnam businesses starts at ₹29,999 for a 5-page Starter site. The Growth tier (₹80,000) covers 10–15 pages, a blog CMS, lead-capture forms, and GA4 analytics. Custom builds start at ₹1,50,000. Vizag agency rates for comparable scope typically run ₹80,000–₹2,50,000.",
  },
  {
    category: 'pricing',
    question: 'How long does it take to build a website?',
    answer:
      'A standard FactoryJet build delivers in 7 days from kickoff to launch. Discovery and design take the first two days, development days three through six, and content, SEO, and launch on day seven. The 7-day clock starts when your brand assets and content are in our shared workspace.',
  },
  {
    category: 'pricing',
    question: 'What makes FactoryJet better value than a Visakhapatnam web agency?',
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
      "We build on Next.js deployed to Cloudflare's global CDN — sub-1.5s load times on Indian 4G versus 4–6s for a typical WordPress site. For Visakhapatnam businesses competing on Google's Core Web Vitals, that performance gap directly affects rankings.",
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

  /* ── Visakhapatnam Local ── */
  {
    category: 'local',
    question: 'Do you build websites for IT and tech companies in Visakhapatnam?',
    answer:
      "Yes — IT companies, software firms, and tech startups in Rushikonda IT SEZ and Madhurawada are a core client profile for us in Vizag. With Google's AI City investment accelerating tech workforce growth in the region, businesses that establish a strong web presence now will own the search rankings when Vizag's digital economy fully activates.",
  },
  {
    category: 'local',
    question: 'Can you build websites for petrochemical and industrial companies in Vizag?',
    answer:
      "Yes. Visakhapatnam's industrial corridor — HPCL refinery, ONGC operations, RINL Vizag Steel, and the Gajuwaka industrial estate — houses some of Andhra Pradesh's largest companies. Industrial and B2B businesses need websites that project technical capability, safety credentials, and procurement contact architecture for institutional buyers.",
  },
  {
    category: 'local',
    question: "Do you know Visakhapatnam's business districts well enough to write relevant copy?",
    answer:
      "Yes. We research Vizag's business geography as part of discovery — from Rushikonda IT SEZ's tech corridor and Madhurawada's emerging commercial zone to Gajuwaka's industrial belt, the Steel Plant township, MVP Colony's commercial hub, and Beach Road's tourism and hospitality strip. Local specificity in copy and LocalBusiness schema improves relevance for neighbourhood-level searches.",
  },
  {
    category: 'local',
    question: 'How does FactoryJet compare to Vizag web agencies?',
    answer:
      "Visakhapatnam web agencies typically charge ₹80,000–₹2,50,000 for a comparable project and deliver in 6–14 weeks. FactoryJet publishes all three pricing tiers before you speak to us, guarantees 7-day delivery in writing, and builds in Next.js rather than WordPress. Faster website, shorter timeline, codebase you own — at 60–70% less.",
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
    question: 'Do you offer ongoing retainer services for Visakhapatnam businesses?',
    answer:
      'Yes. Monthly retainers from ₹4,999/month cover ongoing development work, content updates, new landing pages, SEO improvements, and technical maintenance. Retainer clients get priority scheduling and a dedicated engineer.',
  },
  {
    category: 'support',
    question: 'Can FactoryJet help Vizag businesses prepare for the AI City digital influx?',
    answer:
      "Absolutely. As Google's ₹85,000 Cr AI City investment brings thousands of high-income tech workers to Visakhapatnam, businesses across tourism, hospitality, retail, and professional services will compete for a digitally-savvy audience that discovers everything online first. We build the websites and SEO foundations that will capture that audience — the businesses acting now own the rankings when the workforce arrives.",
  },
];

const VIZAG_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Hyderabad/Vizag Agency' },
  { label: 'Freelancer' },
  { label: 'Template (Wix/Squarespace)' },
] as const;

const VIZAG_COMPARISON_ROWS = [
  {
    feature: 'Starting price',
    values: ['₹29,999', '₹80,000–₹2,50,000', '₹10,000–₹60,000', '₹0–₹15,000 (you build it)'],
  },
  {
    feature: 'Delivery timeline',
    values: ['7 days', '6–14 weeks', '3–12 weeks (unreliable)', '1–2 weeks (you build it)'],
  },
  {
    feature: 'Custom Figma design',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="aa" kind="yes" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Next.js (not WordPress)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="aa" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Technical SEO built in',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="aa" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Lighthouse 90+ on mobile',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="aa" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'GA4 + GTM wired up',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="aa" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Published pricing (no surprises)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="aa" kind="no" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="yes" />,
    ],
  },
  {
    feature: 'Full codebase to your GitHub',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="aa" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: '7-day delivery guarantee',
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
  '@id': `https://factoryjet.com/web-design/visakhapatnam#howto`,
  name: `How FactoryJet builds your Visakhapatnam website in 7 days`,
  description: `Our 7-day process for delivering a professional, AI-powered website for Visakhapatnam businesses.`,
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
      text: `We learn your business, your Visakhapatnam market, your goals, and what you need the website to do.`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Day 2 — Strategy & Structure',
      text: `We map your site architecture, research your Vizag competitors, identify your top keywords, and write the first draft of your page copy.`,
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
      text: `Your approved design is built in code — fast, mobile-first, and SEO-optimised. Visakhapatnam local schema markup added. Google Analytics and Search Console connected.`,
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
  '@id': `https://factoryjet.com/web-design/visakhapatnam#webpage`,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: `https://factoryjet.com/web-design/visakhapatnam`,
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function VisakhapatnamWebDesignPage() {
  return (
    <>
      <Script
        id="vizag-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="vizag-faq-schema"
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
          { name: 'Visakhapatnam', url: 'https://factoryjet.com/web-design/visakhapatnam' },
        ]}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          eyebrow="WEB DESIGN · VISAKHAPATNAM"
          headline="Website Design in Visakhapatnam for Businesses at the Edge of India's AI City Boom"
          lead="Visakhapatnam is India's next major tech hub — Google's ₹85,000 Cr AI City investment, 50%+ IT hiring growth, and Andhra Pradesh's industrial powerhouse. From Rushikonda IT SEZ and Madhurawada to Gajuwaka's petrochemical belt and Beach Road's tourism strip, Vizag businesses are competing in a market that is about to accelerate dramatically. FactoryJet builds from ₹29,999 — Figma-designed, Next.js-built, 7-day delivery guarantee, your codebase delivered in full."
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
          eyebrow="VISAKHAPATNAM MARKET"
          headline="Why Your Vizag Web Presence Is the Investment That Will Compound"
          leadParagraphs={[
            "Visakhapatnam is undergoing the most significant economic transformation of any Indian city right now. Google's ₹85,000 Cr ($10 billion) AI City investment — announced as part of Andhra Pradesh's landmark infrastructure deal — is set to bring thousands of highly-skilled technology workers, research facilities, and global tech companies to the city. This is not future speculation; Andhra Pradesh has committed land, infrastructure, and policy support at a scale that will reshape Vizag's economy over the next decade.",
            "Visakhapatnam already has substantial industrial depth: HPCL's refinery and ONGC's eastern operations anchor the petrochemical sector; RINL Vizag Steel is one of India's largest integrated steel plants; the port is one of India's busiest by cargo tonnage; and Rushikonda IT SEZ plus Madhurawada are already home to major IT and BPO operations. The city's IT workforce is growing at over 50% year-on-year, and Andhra Pradesh's government has been aggressive in attracting global tech investment.",
            "The opportunity for Vizag businesses is clear and time-sensitive: the businesses that build a strong digital presence now will own the Google rankings when this workforce arrives. A tourism operator on Beach Road, a co-working space in Madhurawada, a restaurant near the Steel Plant township, or an IT services firm in Rushikonda SEZ — all of them benefit from being indexed, ranked, and converting traffic before competition intensifies. FactoryJet builds websites designed to rank and convert from day one.",
          ]}
          stats={[
            {
              value: '₹85,000 Cr',
              label: "Google's AI City investment in Visakhapatnam — one of India's largest single tech infrastructure commitments",
              sourceUrl: 'https://www.ap.gov.in/',
              sourceLabel: 'Government of Andhra Pradesh',
            },
            {
              value: '50%+',
              label: 'IT hiring growth rate in Visakhapatnam — among the fastest-growing tech talent markets in India',
              sourceUrl: 'https://www.nasscom.in/',
              sourceLabel: 'NASSCOM',
            },
            {
              value: 'Top 5',
              label: "Visakhapatnam Port's ranking among India's major ports by cargo tonnage — the gateway to AP's industrial economy",
              sourceUrl: 'https://www.vpa.gov.in/',
              sourceLabel: 'Visakhapatnam Port Authority',
            },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION ───────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WEB DESIGN · VISAKHAPATNAM"
          headline="What 'Web Design' Actually Means for a Vizag Business in 2025"
          lead="Visakhapatnam's economy spans industrial B2B businesses, fast-growing IT companies, port and logistics operators, and a tourism sector that is about to see a significant influx of high-income tech workers. Each of these sectors has very different web requirements — and very different windows of opportunity."
          body={
            <>
              <p>
                For Visakhapatnam&apos;s industrial businesses — petrochemical companies, steel
                sector suppliers, port logistics operators, and pharma manufacturers — the website
                is a B2B credibility tool. Procurement managers at large corporations and
                institutional buyers research vendors extensively before making contact. The site
                needs to project technical capability, safety compliance, certifications, and a
                frictionless RFQ flow. We build these sites with authority-first architecture and
                lead-capture flows designed for B2B procurement cycles.
              </p>
              <p>
                For IT companies, software firms, and tech startups in Rushikonda SEZ and
                Madhurawada — the priority is positioning as a credible technology partner before
                the AI City growth wave arrives and competition intensifies. Product-led
                architecture, case study display, and conversion flows designed for enterprise
                sales. For consumer-facing businesses — hospitality, tourism, retail, restaurants,
                and professional services — mobile-first speed and conversion-optimised design are
                non-negotiable for a digitally-native audience.
              </p>
              <p>
                Every FactoryJet Visakhapatnam project covers discovery, Figma prototyping, Next.js
                development, SEO, GA4, and a 30-day support window. You leave with a codebase you
                own, a design system you keep, and a site built to rank and convert from launch day.
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
                    type: 'Industrial & B2B',
                    need: 'Credentials + RFQ + compliance',
                    area: 'Gajuwaka · Steel Plant · Port Area · Pharma',
                    colour: '#F05A28',
                  },
                  {
                    type: 'IT & Tech Companies',
                    need: 'Product-led + case studies + enterprise CTA',
                    area: 'Rushikonda IT SEZ · Madhurawada · Vizag Tech Park',
                    colour: '#0F0F12',
                  },
                  {
                    type: 'Consumer & Hospitality',
                    need: 'Speed + mobile + instant booking',
                    area: 'Beach Road · MVP Colony · Tourism Strip',
                    colour: '#6B6B6B',
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
          headline="Why Visakhapatnam Businesses Choose FactoryJet Over Local Agencies"
          lead="Visakhapatnam and Hyderabad web agencies typically charge ₹80,000–₹2,50,000 for a comparable project and take 6–14 weeks to deliver. FactoryJet publishes all three pricing tiers before you speak to us, guarantees 7-day delivery in writing, and builds in Next.js rather than WordPress — faster load times, a codebase you own outright. At 60–70% below the Andhra Pradesh agency benchmark for the same scope."
          pillars={[
            {
              icon: '⚡',
              title: '7-day delivery. In writing. Or you do not pay.',
              body: "Vizag's business opportunity is accelerating — the AI City growth wave is already underway. Waiting 14 weeks for a website that should have been live in Q1 is not a strategy. FactoryJet delivers in 7 days, with the guarantee written into the project agreement. We have delivered on time on 97% of all projects since 2005.",
            },
            {
              icon: '🏗️',
              title: 'Next.js, not WordPress. The performance gap is real.',
              body: 'WordPress loads server-side PHP and fires 40–60 database queries per page load. Next.js generates static files served from Cloudflare CDN globally. The result: sub-1.5s load times on Indian 4G versus 4–6s for a typical WordPress site. For Vizag businesses competing on Google\'s Core Web Vitals as the AI City workforce arrives, that gap directly affects rankings.',
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
          headline="How We Build Your Visakhapatnam Website in 7 Days"
          lead="Buyer strategy agreed before design. Mobile approval before development. SEO and analytics wired before launch."
          stages={VIZAG_JOURNEY_STAGES}
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
          headline="FactoryJet vs. Hyderabad/Vizag Agency vs. Freelancer vs. Template Builder"
          lead="Not all web design options in Visakhapatnam deliver the same output. Here is the honest comparison — scope, price, timeline, and what you own after launch."
          pullQuote={{
            stat: '₹29,999',
            caption:
              'starting price — same Figma-first design, Next.js engineering, technical SEO, and Lighthouse audit as a ₹2,00,000 Andhra Pradesh agency project.',
          }}
          columns={VIZAG_COMPARISON_COLUMNS}
          rows={VIZAG_COMPARISON_ROWS}
          footer="Prices reflect typical Visakhapatnam and Hyderabad market ranges as of 2025. FactoryJet fixed-price contracts available for all tiers."
        />

        {/* ── 10. INDUSTRIES ───────────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="VISAKHAPATNAM × WEB DESIGN"
          headline="Web Design for Visakhapatnam's Key Industries"
          lead="From IT and AI companies in Rushikonda SEZ to petrochemical giants in Gajuwaka, port logistics operators, pharma manufacturers, tourism operators, and defence-adjacent businesses — Vizag's economy is one of India's most diverse. FactoryJet builds for each of them."
          sectors={[
            {
              name: 'IT & AI Tech Companies',
              description:
                "Rushikonda IT SEZ and Madhurawada are Visakhapatnam's growing technology corridor — hosting major IT services companies, BPO operations, and a rapidly expanding startup ecosystem. With Google's AI City investment accelerating tech workforce growth, IT companies need websites that position them as credible technology partners before competition intensifies. Product-led architecture, service capability pages, case study systems, and lead flows for enterprise sales cycles.",
              example:
                'IT services firms, software companies, BPO operations, and tech startups in Rushikonda IT SEZ and Madhurawada targeting enterprise and government clients.',
            },
            {
              name: 'Petrochemicals & Refining',
              description:
                "Visakhapatnam is home to HPCL's Vizag refinery, ONGC's eastern operations, and dozens of downstream petrochemical and specialty chemical businesses. These companies need websites that project technical capability, safety compliance certifications, and environmental credentials to institutional B2B buyers. Product specification sheets, procurement contact flows, and regulatory document systems are standard.",
              example:
                'Petrochemical manufacturers, refinery supply chain companies, and specialty chemical businesses in the Gajuwaka industrial corridor.',
            },
            {
              name: 'Steel & Manufacturing',
              description:
                "RINL Vizag Steel — one of India's largest integrated steel plants — anchors an entire ecosystem of steel sector suppliers, equipment manufacturers, and logistics companies in the Steel Plant township and surrounding areas. Supplier websites in this sector need to project manufacturing scale, quality certifications, and supply reliability to procurement teams at RINL and its global customers.",
              example:
                'Steel sector suppliers, equipment manufacturers, and raw material traders serving RINL Vizag Steel and the broader manufacturing ecosystem.',
            },
            {
              name: 'Port & Shipping Logistics',
              description:
                "Visakhapatnam Port is one of India's busiest ports by cargo tonnage — handling container, bulk, and liquid cargo for Andhra Pradesh's industrial economy and beyond. Logistics companies, shipping agents, freight forwarders, and port services businesses need websites that project operational capability, service range, and reliability credentials to cargo owners and shipping lines globally.",
              example:
                'Shipping agents, freight forwarders, port logistics companies, and customs brokers operating in and around Visakhapatnam Port.',
            },
            {
              name: 'Pharmaceuticals & Life Sciences',
              description:
                "Visakhapatnam has a growing pharmaceutical and life sciences cluster — benefiting from Andhra Pradesh's overall pharma strength. Pharma manufacturers, API producers, and contract research organisations need regulatory-compliant copy, GMP certification display, product documentation systems, and B2B lead flows for institutional procurement from domestic and international buyers.",
              example:
                'Pharmaceutical manufacturers, API producers, and contract research organisations in the Vizag pharma cluster targeting domestic and international institutional buyers.',
            },
            {
              name: 'Tourism & Hospitality',
              description:
                "Visakhapatnam has one of India's most scenic coastlines — Beach Road, Ramakrishna Beach, and the surrounding hill stations are established tourism assets. As the AI City investment brings thousands of high-income tech workers to Vizag, the tourism, hospitality, and food & beverage sector will see a significant demand increase. Hotels, resorts, restaurants, and tourism operators need mobile-first websites with booking systems and local SEO to capture this audience.",
              example:
                'Hotels, beach resorts, restaurants, tourism operators, and hospitality businesses targeting the Beach Road corridor and the incoming AI City workforce.',
            },
          ]}
        />

        {/* ── 11. PRICING ──────────────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="TRANSPARENT PRICING"
            headline="Transparent, Fixed-Price Web Design for Visakhapatnam Businesses"
            lead="Andhra Pradesh agency rates for comparable web projects run ₹80,000–₹2,50,000. FactoryJet Growth (₹80,000) delivers 10–15 pages, blog CMS, lead capture, GA4, Next.js, and a 7-day delivery guarantee — with a codebase you own outright."
            tiers={[
              {
                name: 'Starter',
                priceRange: '₹29,999',
                description:
                  'A 5-page business site that loads fast on mobile and ranks for your name and core service. Best for small businesses, service providers, and sole practitioners in Visakhapatnam who need a credible online presence quickly.',
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
                  'A 10–15 page site with blog CMS, lead-capture flows, and analytics wired in from day one. Best for Vizag SMBs and IT companies scaling online who need the site to actively generate qualified enquiries.',
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
                  'Custom Next.js build with product catalogs, booking systems, AI integrations, or API connections. Best for established Visakhapatnam businesses with complex requirements and a real digital revenue line.',
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
          headline="Common Questions from Visakhapatnam Businesses"
          lead="The questions we answer on every Vizag discovery call — answered here, without the runaround."
          categories={VIZAG_FAQ_CATEGORIES}
          items={VIZAG_FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Build Your Visakhapatnam Website?"
          sub="Visakhapatnam is on the edge of India's biggest AI City transformation — Google's ₹85,000 Cr investment, 50%+ IT hiring growth, and one of India's most diverse industrial economies. The businesses that get their digital presence sorted now will own the search rankings when the tech workforce arrives. Every week without a high-performing website is ground you are conceding to a competitor who already has one. Start today and have a sitemap ready within 72 hours."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price. 7-day delivery. Next.js. Your codebase delivered in full on launch day."
        />

      </main>

      <SiteFooter locale="in" />
    </>
  );
}

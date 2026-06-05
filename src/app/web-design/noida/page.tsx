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
  title: 'Web Design Company in Noida | From ₹29,999 | FactoryJet',
  description:
    'Web design company in Noida for IT firms, media companies & D2C startups. Fast websites from ₹29,999. 7-day delivery. Serving Sector 62, Sector 18, Film City & Noida Expressway.',
  keywords: [
    'web design company in Noida',
    'website design Noida',
    'web development company Noida',
    'website design company Noida',
    'affordable web design Noida',
    'professional website design Noida',
    'web design Sector 62 Noida',
    'web design Greater Noida',
    'IT company website design Noida',
    'startup website design Noida',
    'Next.js web development Noida',
    'web design agency Noida',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Noida | From ₹29,999 | FactoryJet',
    description:
      'Professional website design company in Noida — Next.js, SEO, and GA4 included. 7-day delivery. From ₹29,999. Serving Sector 62, Sector 18, Film City, NSEZ, and Greater Noida.',
    url: 'https://factoryjet.com/web-design/noida',
    images: [
      {
        url: 'https://factoryjet.com/images/services/web-design.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Web Design Services in Noida',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Noida | FactoryJet',
    description:
      'Website design company in Noida. From ₹29,999. 7-day delivery. Next.js, SEO, GA4 included.',
    images: ['https://factoryjet.com/images/services/web-design.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/web-design/noida',
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
    'Web design company in Noida building fast, SEO-optimized websites for IT firms, media companies, D2C startups, and growing businesses. From ₹29,999. 7-day delivery guarantee.',
  url: 'https://factoryjet.com/web-design/noida',
  telephone: '+919699977699',
  email: 'connect@factoryjet.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Noida',
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN',
  },
  areaServed: [
    { '@type': 'City', name: 'Noida' },
    { '@type': 'City', name: 'Greater Noida' },
    { '@type': 'City', name: 'Ghaziabad' },
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
    name: 'Web Design Services Noida',
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
      name: 'How much does a website cost for a business in Noida?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "FactoryJet's web design for Noida businesses starts at ₹29,999 for a 5-page Starter site. The Growth tier (₹80,000) covers 10–15 pages, a blog CMS, lead-capture forms, and GA4 analytics. Custom builds start at ₹1,50,000. Noida and Delhi NCR agency rates for comparable scope typically run ₹1,20,000–₹4,00,000.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a website in Noida?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard FactoryJet build delivers in 7 days from kickoff to launch. Discovery and design take the first two days, development runs through days five and six, and content, SEO, and launch happen on day seven.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build websites for IT companies and startups in Noida?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes — IT services firms, SaaS startups, and tech-enabled businesses in Sector 62, the Noida Expressway corridor, and Greater Noida are a core client profile. We build product-led websites designed to generate qualified demo requests and enterprise leads, with authority-first architecture, technical SEO, and performance optimised for fast page loads.",
      },
    },
    {
      '@type': 'Question',
      name: 'Will my Noida business website rank on Google?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Technical SEO is built into every project: JSON-LD schema markup, optimised title and meta tags, Core Web Vitals green on mobile, internal linking, XML sitemap submitted to Google Search Console, and WebP images. Branded searches rank within 1–2 weeks. Service + location queries take 3–6 months for a new domain.',
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

const NOIDA_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      "We map your ideal customer profile against Noida's market — whether that's an enterprise buyer evaluating an IT services firm in Sector 62, a B2B buyer researching a pharma company in NSEZ, a media buyer browsing Film City production houses, or a D2C consumer on the Noida Expressway corridor. We audit your top competitors and agree the sitemap and content plan. — Days 1–2",
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
      'Built in Next.js deployed to Cloudflare CDN — sub-1.5s load times on Indian 4G networks. Contact forms, WhatsApp integration, product catalog systems, demo request flows, and any third-party APIs your business uses. Performance budgets enforced from the first commit. — Days 5–6',
  },
  {
    number: '04',
    title: 'Content & SEO',
    description:
      'Optimised copy, WebP imagery, meta tags, JSON-LD schema (LocalBusiness + FAQPage), and internal links. Sitemap submitted to Google Search Console. Noida-specific local SEO targeting built in — "web design Noida" is its own search market, distinct from Delhi. — Day 6–7',
  },
  {
    number: '05',
    title: 'Launch & Handover',
    description:
      'DNS transfer to Cloudflare, GA4 and GTM configured, Search Console verified. Recorded handover walkthrough so your team is fully self-sufficient. 30-day post-launch support window included. — Day 7+',
  },
];

const NOIDA_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'included',  label: "What's Included" },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local',     label: 'Noida Local' },
  { key: 'support',   label: 'Support & Ownership' },
];

const NOIDA_FAQ_ITEMS = [

  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'How much does a website cost for a business in Noida?',
    answer:
      "FactoryJet's web design for Noida businesses starts at ₹29,999 for a 5-page Starter site. The Growth tier (₹80,000) covers 10–15 pages, a blog CMS, lead-capture forms, and GA4 analytics. Custom builds start at ₹1,50,000. Noida and Delhi NCR agency rates for comparable scope typically run ₹1,20,000–₹4,00,000.",
  },
  {
    category: 'pricing',
    question: 'How long does it take to build a website?',
    answer:
      'A standard FactoryJet build delivers in 7 days from kickoff to launch. Discovery and design take the first two days, development days three through six, and content, SEO, and launch on day seven. The 7-day clock starts when your brand assets and content are in our shared workspace.',
  },
  {
    category: 'pricing',
    question: 'What makes FactoryJet better value than a Noida web agency?',
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
      "Technical SEO is built into every project: JSON-LD schema markup, optimised title and meta templates, Core Web Vitals green on mobile, internal linking, XML sitemap submitted to Google Search Console, and WebP images. Branded searches typically rank within 1–2 weeks. Importantly, 'web design Noida' is its own distinct search market from Delhi — so Noida-specific SEO targeting is built into every project for Noida clients.",
  },
  {
    category: 'technical',
    question: 'What tech stack do you build on?',
    answer:
      "We build on Next.js deployed to Cloudflare's global CDN — sub-1.5s load times on Indian 4G versus 4–6s for a typical WordPress site. For Noida businesses competing on Google's Core Web Vitals, that performance gap directly affects rankings.",
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

  /* ── Noida Local ── */
  {
    category: 'local',
    question: 'Do you build websites for IT companies and startups in Sector 62 and the Noida Expressway corridor?',
    answer:
      "Yes — IT services companies, SaaS startups, BPO/ITES firms, and tech-enabled businesses in Sector 62, Sector 63, and the Noida Expressway corridor are a core client profile. We build product-led and service authority websites designed to generate enterprise leads and qualified demo requests — with B2B buyer journey architecture, technical SEO, and performance that holds up under corporate procurement scrutiny.",
  },
  {
    category: 'local',
    question: 'Can you build websites for media and entertainment companies near Film City, Noida?',
    answer:
      "Yes. Film City and the surrounding media cluster in Sector 16A house production houses, OTT studios, post-production companies, and media agencies. We build showreel-integrated websites, video-forward layouts, talent and services showcase pages, and inquiry flows optimised for commissioning conversations. Performance is prioritised so video-heavy pages still score Lighthouse 90+ on mobile.",
  },
  {
    category: 'local',
    question: "Do you know Noida's business districts well enough to write relevant copy?",
    answer:
      "Yes. We research Noida's business geography as part of every discovery — from Sector 62's IT corridor and Sector 18's commercial retail hub to NSEZ (Noida Special Economic Zone) for exporters, Film City for media, and Greater Noida's automotive and manufacturing belt. Noida has distinct search intent from Delhi NCR broadly — local specificity in copy and LocalBusiness schema improves relevance for neighbourhood-level searches.",
  },
  {
    category: 'local',
    question: 'How does FactoryJet compare to Noida and Delhi NCR web agencies?',
    answer:
      "Noida and Delhi NCR web agencies typically charge ₹1,20,000–₹4,00,000 for a comparable project and deliver in 6–16 weeks. FactoryJet publishes all three pricing tiers before you speak to us, guarantees 7-day delivery in writing, and builds in Next.js rather than WordPress. Faster website, shorter timeline, codebase you own — at a fixed, published price.",
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
    question: 'Do you offer ongoing retainer services for Noida businesses?',
    answer:
      'Yes. Monthly retainers from ₹4,999/month cover ongoing development work, content updates, new landing pages, SEO improvements, and technical maintenance. Retainer clients get priority scheduling and a dedicated engineer.',
  },
];

const NOIDA_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Noida/Delhi NCR Agency' },
  { label: 'Freelancer' },
  { label: 'Template (Wix/Squarespace)' },
] as const;

const NOIDA_COMPARISON_ROWS = [
  {
    feature: 'Starting price',
    values: ['₹29,999', '₹1,20,000–₹4,00,000', '₹10,000–₹60,000', '₹0–₹15,000 (you build it)'],
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
  '@id': `https://factoryjet.com/web-design/noida#howto`,
  name: `How FactoryJet builds your Noida website in 7 days`,
  description: `Our 7-day process for delivering a professional, AI-powered website for Noida businesses.`,
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
      text: `We learn your business, your Noida market, your goals, and what you need the website to do.`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Day 2 — Strategy & Structure',
      text: `We map your site architecture, research your Noida competitors, identify your top keywords, and write the first draft of your page copy.`,
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
      text: `Your approved design is built in code — fast, mobile-first, and SEO-optimised. Noida local schema markup added. Google Analytics and Search Console connected.`,
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
  '@id': `https://factoryjet.com/web-design/noida#webpage`,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: `https://factoryjet.com/web-design/noida`,
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function NoidaWebDesignPage() {
  return (
    <>
      <Script
        id="noida-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="noida-faq-schema"
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
          { name: 'Noida', url: 'https://factoryjet.com/web-design/noida' },
        ]}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          eyebrow="WEB DESIGN · NOIDA"
          headline="Website Design in Noida for IT Firms, Media Companies, and Delhi-NCR's Fastest-Growing Startups"
          lead="Noida is Delhi-NCR's IT capital — home to India's largest software and BPO corridor, Film City's media cluster, NSEZ's export zone, and an emerging D2C and EdTech startup ecosystem. From Sector 62's IT corridor to the Noida Expressway's tech parks, Noida businesses compete nationally and globally. FactoryJet builds from ₹29,999 — Figma-designed, Next.js-built, 7-day delivery guarantee, your codebase delivered in full."
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
          eyebrow="NOIDA MARKET"
          headline="Why Your Noida Web Presence Is a Business Asset"
          leadParagraphs={[
            "Noida is not a suburb of Delhi — it is India's IT and media capital in its own right. Sector 62 and the surrounding IT corridor houses offices and development centres for HCL, Infosys, Wipro, Adobe, Samsung, and hundreds of mid-sized software companies and BPO/ITES firms. Film City in Sector 16A is one of India's premier media production hubs. NSEZ (Noida Special Economic Zone) hosts export-oriented manufacturers. The Noida Expressway corridor is home to a growing wave of D2C brands, EdTech startups, and SaaS companies. Greater Noida's automotive and manufacturing belt extends the city's economic footprint further.",
            "This creates a web design opportunity unique to Noida: an IT services firm in Sector 62 needs a completely different site architecture from a production house near Film City, a pharma exporter in NSEZ, or a D2C brand on the Noida Expressway. Enterprise buyers researching IT vendors do weeks of due diligence. A B2B buyer evaluating an NSEZ exporter needs certifications and capacity detail. A consumer D2C brand needs mobile-first speed and instant checkout. FactoryJet builds for all of them — because we start every project with the buyer journey in mind, not the template.",
            "'Web design Noida' is its own distinct search market. Buyers and prospects searching for Noida-based businesses use Noida-specific queries — not generic Delhi NCR terms. The businesses that rank for those queries, with fast-loading sites and credibility-first architecture, capture the leads that their slower competitors are conceding every week.",
          ]}
          stats={[
            {
              value: '1,700+',
              label: 'IT and software companies with offices or development centres in Noida and Greater Noida',
              sourceUrl: 'https://nasscom.in/',
              sourceLabel: 'NASSCOM',
            },
            {
              value: 'Film City',
              label: "India's major media and OTT production hub — over 40 studios and production houses in Sector 16A",
              sourceUrl: 'https://www.filmcitynoida.com/',
              sourceLabel: 'Film City Noida',
            },
            {
              value: '₹1.4L Cr',
              label: "Noida's estimated GDP contribution to Delhi-NCR — one of India's fastest-growing urban economies",
              sourceUrl: 'https://mospi.gov.in/',
              sourceLabel: 'MoSPI',
            },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION ───────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WEB DESIGN · NOIDA"
          headline="What 'Web Design' Actually Means for a Noida Business"
          lead="Noida's economy runs on two very different buyer behaviours — enterprise and B2B buyers doing weeks of vendor evaluation, and direct-to-consumer or startup buyers deciding quickly on mobile. Both need very different web strategies. FactoryJet builds for both."
          body={
            <>
              <p>
                For Noida&apos;s IT services firms, BPO/ITES companies, pharma exporters in NSEZ,
                and media production houses near Film City — the website is a sales and credibility
                instrument. Enterprise buyers spend weeks evaluating vendors. B2B procurement teams
                check for capability pages, client credentials, case studies, certifications, and
                frictionless contact flows. We build these sites with authority-first architecture,
                service deep-dive pages, and lead-capture flows tuned to longer sales cycles.
              </p>
              <p>
                For D2C brands on the Noida Expressway, EdTech and SaaS startups in Greater Noida,
                and consumer retail businesses in Sector 18 — the challenge is different. These
                buyers decide in seconds. Mobile-first speed, conversion-optimised hero sections,
                instant CTAs, and Razorpay checkout are the priorities. Lighthouse 90+ on mobile
                is not optional — it is the baseline.
              </p>
              <p>
                Every FactoryJet Noida project covers discovery, Figma prototyping, Next.js
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
                    type: 'B2B / Enterprise & Export',
                    need: 'Credentials + capability + lead capture',
                    area: 'Sector 62 · NSEZ · Film City · Greater Noida',
                    colour: '#F05A28',
                  },
                  {
                    type: 'D2C / Consumer & Startup',
                    need: 'Speed + mobile + instant CTA',
                    area: 'Noida Expressway · Sector 18 · Sector 135',
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
          headline="Why Noida Businesses Choose FactoryJet Over Local Delhi NCR Agencies"
          lead="Noida and Delhi NCR web agencies typically charge ₹1,20,000–₹4,00,000 for a comparable project and take 6–16 weeks to deliver. FactoryJet publishes all three pricing tiers before you speak to us, guarantees 7-day delivery in writing, and builds in Next.js rather than WordPress — faster load times, a codebase you own outright. Pricing is fixed and published upfront for the same scope."
          pillars={[
            {
              icon: '⚡',
              title: '7-day delivery. In writing. Or you do not pay.',
              body: "Noida's tech-forward business community judges agencies on output, not timelines. Waiting 14 weeks for a website while your competitors are already ranking is unacceptable. FactoryJet delivers in 7 days, with the guarantee written into the project agreement. We have delivered on time on 97% of all projects since 2005.",
            },
            {
              icon: '🏗️',
              title: 'Next.js, not WordPress. The performance gap is real.',
              body: "WordPress loads server-side PHP and fires 40–60 database queries per page load. Next.js generates static files served from Cloudflare CDN globally. The result: sub-1.5s load times on Indian 4G versus 4–6s for a typical WordPress site. For Noida IT firms and D2C brands competing on Google's Core Web Vitals, that gap directly affects rankings.",
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
          headline="How We Build Your Noida Website in 7 Days"
          lead="Buyer strategy agreed before design. Mobile approval before development. SEO and analytics wired before launch."
          stages={NOIDA_JOURNEY_STAGES}
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
          headline="FactoryJet vs. Noida/Delhi NCR Agency vs. Freelancer vs. Template Builder"
          lead="Not all web design options in Noida deliver the same output. Here is the honest comparison — scope, price, timeline, and what you own after launch."
          pullQuote={{
            stat: '₹29,999',
            caption:
              'starting price — same Figma-first design, Next.js engineering, technical SEO, and Lighthouse audit as a ₹2,50,000 Delhi NCR agency project.',
          }}
          columns={NOIDA_COMPARISON_COLUMNS}
          rows={NOIDA_COMPARISON_ROWS}
          footer="Prices reflect typical Noida and Delhi NCR market ranges as of 2025. FactoryJet fixed-price contracts available for all tiers."
        />

        {/* ── 10. INDUSTRIES ───────────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="NOIDA × WEB DESIGN"
          headline="Web Design for Noida's Key Industries"
          lead="From IT services firms and BPO companies to media production houses, NSEZ exporters, D2C startups, and pharma manufacturers — Noida's economy spans industries with very different digital requirements. FactoryJet has built for each of them."
          sectors={[
            {
              name: 'IT & Software Services',
              description:
                "Noida's Sector 62, 63, and 65 corridor is one of India's densest IT clusters — home to HCL Technologies, Infosys, Wipro, Adobe, Samsung R&D, and hundreds of mid-sized software companies, product firms, and offshore development centres. IT services websites need authority-first architecture: capability deep-dives, case study systems, technology stack showcases, and lead-capture flows designed for enterprise procurement cycles.",
              example:
                'Software development companies, IT services firms, and offshore development centres in Sector 62, Sector 63, and the Noida Expressway corridor targeting enterprise buyers in the US, EU, and Australia.',
            },
            {
              name: 'Media & Entertainment',
              description:
                "Film City in Sector 16A is one of India's premier media production hubs — home to production houses, OTT studios, post-production facilities, advertising agencies, and media companies. These businesses need showreel-integrated layouts, video-forward design, talent and services showcase pages, and inquiry flows optimised for commissioning conversations and brand partnerships.",
              example:
                'Production houses, OTT studios, post-production companies, and advertising agencies in and around Film City, Sector 16A.',
            },
            {
              name: 'E-Commerce & D2C',
              description:
                "Noida's Expressway corridor and sectors like 135 and 137 house a growing cluster of D2C brands, e-commerce companies, and digital-first retail businesses. These brands need mobile-first speed, conversion-optimised product pages, Razorpay checkout, Shiprocket integration, and SEO targeting high-intent buyer queries. Performance is everything — every second of load time costs real revenue.",
              example:
                'D2C brands, online retailers, and e-commerce businesses operating from the Noida Expressway corridor and Greater Noida targeting national and international consumers.',
            },
            {
              name: 'Pharma & Healthcare',
              description:
                "NSEZ and the Greater Noida industrial areas house pharmaceutical manufacturers, medical device companies, and healthcare services firms. Pharma websites need regulatory-compliant copy, product documentation systems, GMP and ISO certification display, and B2B lead flows for institutional procurement. Healthcare service providers need appointment booking, doctor profile pages, and local SEO for clinical queries.",
              example:
                'Pharmaceutical manufacturers, medical device companies, and healthcare service providers in NSEZ, Greater Noida, and the surrounding industrial areas.',
            },
            {
              name: 'BPO / ITES & Consulting',
              description:
                "Noida is one of India's top BPO and ITES destinations — with major operations from companies like HCL, Genpact, EXL Service, and hundreds of mid-sized BPO firms. These businesses need professional services websites projecting operational scale, client credential display, service capability pages, and lead forms designed for enterprise procurement teams.",
              example:
                'BPO companies, KPO firms, ITES providers, and management consulting companies in Sector 62, Sector 125, and the Noida Expressway corridor.',
            },
            {
              name: 'EdTech & SaaS Startups',
              description:
                "Noida and Greater Noida are home to a growing EdTech and SaaS startup ecosystem — supported by proximity to IIT Delhi, the National Capital Region's talent pool, and investor networks. Startup websites need product-led architecture, investor credibility signals, demo request flows, pricing pages, and performance designed for rapid iteration. First impressions close or lose seed-stage credibility in seconds.",
              example:
                "EdTech platforms, SaaS companies, and tech startups emerging from Noida and Greater Noida targeting Indian and global growth markets.",
            },
          ]}
        />

        {/* ── 11. PRICING ──────────────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="TRANSPARENT PRICING"
            headline="Transparent, Fixed-Price Web Design for Noida Businesses"
            lead="Noida and Delhi NCR agency rates for comparable web projects run ₹1,20,000–₹4,00,000. FactoryJet Growth (₹80,000) delivers 10–15 pages, blog CMS, lead capture, GA4, Next.js, and a 7-day delivery guarantee — with a codebase you own outright."
            tiers={[
              {
                name: 'Starter',
                priceRange: '₹29,999',
                description:
                  'A 5-page business site that loads fast on mobile and ranks for your name and core service. Best for small businesses, consultants, and sole practitioners in Noida who need a credible online presence quickly.',
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
                  'A 10–15 page site with blog CMS, lead-capture flows, and analytics wired in from day one. Best for Noida IT firms, D2C brands, and growing businesses that need the site to actively generate qualified leads.',
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
                  'Custom Next.js build with product catalogs, booking systems, AI integrations, or API connections. Best for established Noida businesses with complex requirements and a real digital revenue line.',
                features: [
                  'Custom Next.js architecture',
                  'Product catalog or e-commerce (Razorpay, Shiprocket)',
                  'AI integrations (chat, search, content)',
                  'Third-party API connections (Salesforce, Zoho, SAP)',
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
          headline="Common Questions from Noida Businesses"
          lead="The questions we answer on every Noida discovery call — answered here, without the runaround."
          categories={NOIDA_FAQ_CATEGORIES}
          items={NOIDA_FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Build Your Noida Website?"
          sub="Noida's IT corridor, Film City media cluster, NSEZ export zone, and Expressway D2C ecosystem mean every serious business is competing for the same enterprise buyer evaluations, the same Google rankings, and the same consumer first impressions. Every week without a high-performing website is ground you are conceding to a competitor who already has one. Start today and have a sitemap ready within 72 hours."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price. 7-day delivery. Next.js. Your codebase delivered in full on launch day."
        />

      </main>

      <SiteFooter locale="in" />
    </>
  );
}

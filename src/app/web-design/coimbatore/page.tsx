import type { Metadata } from 'next';
import Script from 'next/script';
import { webDesignCityAlternatesIN } from '@/data/hreflangMap';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
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
  title: 'Web Design Company in Coimbatore | FactoryJet',
  description:
    'Web design company in Coimbatore for textile manufacturers, pump & engineering firms, and IT businesses. 7-day delivery. Serving Avinashi Road, Peelamedu & RS Puram.',
  keywords: [
    'web design company in Coimbatore',
    'website design Coimbatore',
    'web development company Coimbatore',
    'website design company Coimbatore',
    'affordable web design Coimbatore',
    'professional website design Coimbatore',
    'web design Avinashi Road',
    'web design Peelamedu',
    'textile website design Coimbatore',
    'engineering company website Coimbatore',
    'Next.js web development Coimbatore',
    'web design agency Coimbatore',
    'pump industry website Coimbatore',
    'IT company website design Coimbatore',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Coimbatore | FactoryJet',
    description:
      'Professional website design company in Coimbatore — Next.js, SEO, and GA4 included. 7-day delivery. Serving Avinashi Road, Peelamedu, RS Puram, Gandhipuram.',
    url: 'https://factoryjet.com/web-design/coimbatore',
    images: [
      {
        url: 'https://factoryjet.com/images/services/web-design.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Web Design Services in Coimbatore',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Coimbatore | FactoryJet',
    description:
      'Website design company in Coimbatore. 7-day delivery. Next.js, SEO, GA4 included.',
    images: ['https://factoryjet.com/images/services/web-design.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/web-design/coimbatore',
    languages: webDesignCityAlternatesIN['coimbatore'],
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
    'Web design company in Coimbatore building fast, SEO-optimized websites for textile manufacturers, pump & engineering firms, IT companies, and growing businesses. 7-day delivery guarantee.',
  url: 'https://factoryjet.com/web-design/coimbatore',
  telephone: '+919699977699',
  email: 'connect@factoryjet.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Coimbatore',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'IN',
  },
  areaServed: [
    { '@type': 'City', name: 'Coimbatore' },
    { '@type': 'City', name: 'Tirupur' },
    { '@type': 'City', name: 'Erode' },
  ],
  serviceType: 'Web Design and Development',
  
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Design Services Coimbatore',
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
      name: 'How much does a website cost for a business in Coimbatore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We don't sell fixed packages. The price depends on how many pages you need, how competitive your market is, and whether you want extras like e-commerce, booking systems, or AI features. You get a clear, fixed quote up front after a free consultation, and the codebase is yours to keep.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a website in Coimbatore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard FactoryJet build delivers in 7 days from kickoff to launch. Discovery and design take the first two days, development runs through days five and six, and content, SEO, and launch happen on day seven.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build websites for textile manufacturers and pump companies in Coimbatore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes — textile manufacturers, pump and engineering firms, and MSME exporters are a core client profile for us in Coimbatore. We build websites optimised for international B2B buyer research: export credentials display, product catalog with inquiry forms, ISO/BIS certification pages, and technical SEO targeting English-language searches from buyers in the US, EU, and Middle East.",
      },
    },
    {
      '@type': 'Question',
      name: 'Will my Coimbatore business website rank on Google?',
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
      name: 'Who is the best web design agency in Coimbatore?',
      acceptedAnswer: { '@type': 'Answer', text: 'For small businesses, FactoryJet makes a strong case as the best web design company in Coimbatore: custom websites in 7 days, 100/100 Google speed scores, and a fixed written price. Any website design company in Coimbatore you compare should pass three checks: live websites you can test, speed scores you can verify, and a price that does not grow mid-project. That is the honest way to pick the best website design company in Coimbatore.' },
    },
    {
      '@type': 'Question',
      name: 'Should I hire web designer in Coimbatore or use an agency?',
      acceptedAnswer: { '@type': 'Answer', text: 'A freelancer can be right for a tiny one-page job. For a business website, a small senior team is usually faster and safer: design, code, SEO, and support in one place, at a fixed price. If you do hire web designer in Coimbatore directly, agree the scope and price in writing first.' },
    },
],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const CBE_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      "We map your ideal customer profile against Coimbatore's market — whether that's an international buyer sourcing pumps or textiles, an IT services company targeting enterprise clients, a healthcare provider reaching local patients, or a D2C brand selling across India. We audit your top competitors and agree the sitemap and content plan. — Days 1–2",
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
      'Optimised copy, WebP imagery, meta tags, JSON-LD schema (LocalBusiness + FAQPage), and internal links. Sitemap submitted to Google Search Console. Coimbatore-specific local SEO targeting built in. — Day 6–7',
  },
  {
    number: '05',
    title: 'Launch & Handover',
    description:
      'DNS transfer to Cloudflare, GA4 and GTM configured, Search Console verified. Recorded handover walkthrough so your team is fully self-sufficient. 30-day post-launch support window included. — Day 7+',
  },
];

const CBE_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'included',  label: "What's Included" },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local',     label: 'Coimbatore Local' },
  { key: 'support',   label: 'Support & Ownership' },
];

const CBE_FAQ_ITEMS = [

  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'How much does a website cost for a business in Coimbatore?',
    answer:
      "We don't sell fixed packages. The price depends on how many pages you need, how competitive your market is, and whether you want extras like e-commerce, booking systems, or AI features. You get a clear, fixed quote up front after a free consultation, and the codebase is yours to keep.",
  },
  {
    category: 'pricing',
    question: 'How long does it take to build a website?',
    answer:
      'A standard FactoryJet build delivers in 7 days from kickoff to launch. Discovery and design take the first two days, development days three through six, and content, SEO, and launch on day seven. The 7-day clock starts when your brand assets and content are in our shared workspace.',
  },
  {
    category: 'pricing',
    question: 'What makes FactoryJet better value than a Coimbatore web agency?',
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
      "We build on Next.js deployed to Cloudflare's global CDN — sub-1.5s load times on Indian 4G versus 4–6s for a typical WordPress site. For Coimbatore businesses competing on Google's Core Web Vitals, that performance gap directly affects rankings.",
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

  /* ── Coimbatore Local ── */
  {
    category: 'local',
    question: 'Do you build websites for textile manufacturers and pump companies in Coimbatore?',
    answer:
      "Yes — textile manufacturers, pump and engineering firms, and MSME exporters are a core client profile for us in Coimbatore. Coimbatore is the world's largest pump manufacturing cluster and Tamil Nadu's textile capital. We build websites optimised for international B2B buyer research: export credentials, product catalog with inquiry forms, ISO/BIS certification pages, and technical SEO targeting English-language searches from buyers in the US, EU, and Middle East.",
  },
  {
    category: 'local',
    question: 'Can you build websites for IT companies on Avinashi Road and Peelamedu?',
    answer:
      "Yes. Avinashi Road and Peelamedu are Coimbatore's IT corridor — home to software companies, IT parks, and tech services firms targeting enterprise clients in India and abroad. We build IT services websites with product-led architecture, case study portfolios, and lead flows designed for B2B software sales cycles.",
  },
  {
    category: 'local',
    question: "Do you know Coimbatore's business districts well enough to write relevant copy?",
    answer:
      "Yes. We research Coimbatore's business geography as part of discovery — from Avinashi Road's IT corridor and Peelamedu's tech parks near the airport, to RS Puram's premium retail and commercial strip, Gandhipuram's high-street commercial hub, SIPCOT's industrial estates, and the Tirupur textile corridor just 55km away. Local specificity in copy and LocalBusiness schema improves relevance for neighbourhood-level searches.",
  },
  {
    category: 'local',
    question: 'How does FactoryJet compare to Coimbatore web agencies?',
    answer:
      "Local web agencies often take much longer to deliver and don't publish their rates upfront. FactoryJet gives you a fixed-price quote before you commit, guarantees 7-day delivery in writing, and builds in Next.js rather than WordPress. You get a faster website, a shorter timeline, and a codebase you own outright.",
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
      'Every project includes a 30-day post-launch support window covering bug fixes and minor adjustments at no extra cost. Beyond that, FactoryJet offers monthly maintenance plans covering development changes, priority same-day bug response, and a dedicated engineer who knows your codebase.',
  },
  {
    category: 'support',
    question: 'What happens if something breaks after launch?',
    answer:
      'Within the 30-day support window, any bugs are fixed at no cost and typically within 24 hours. Because your site is on Cloudflare Pages (static files, global CDN), common causes of downtime simply do not apply.',
  },
  {
    category: 'support',
    question: 'Do you offer ongoing retainer services for Coimbatore businesses?',
    answer:
      'Yes. Monthly retainers cover ongoing development work, content updates, new landing pages, SEO improvements, and technical maintenance. Retainer clients get priority scheduling and a dedicated engineer.',
  },
  {
    category: 'support',
    question: 'Can you help migrate my existing Coimbatore business website to Next.js?',
    answer:
      'Yes. We handle full migrations from WordPress, Wix, Squarespace, or custom-coded sites to Next.js on Cloudflare. The migration includes a technical SEO audit, 301 redirect mapping for all existing URLs, and performance optimisation so you do not lose any ranking equity in the transition.',
  },
  {
    category: 'local',
    question: 'Do you build e-commerce websites for Coimbatore businesses?',
    answer:
      "Yes. For Coimbatore businesses selling online — whether it's industrial pumps B2B or garments D2C — we build e-commerce on Shopify or Next.js with Razorpay and Shiprocket integrated. The Growth tier includes a basic product catalog; Custom tier covers full transactional e-commerce with inventory management.",
  },

  // Money-query coverage, added 2026-06-11
  {
    category: 'pricing',
    question: 'Who is the best web design agency in Coimbatore?',
    answer:
      'For small businesses, FactoryJet makes a strong case as the best web design company in Coimbatore: custom websites in 7 days, 100/100 Google speed scores, and a fixed written price. Any website design company in Coimbatore you compare should pass three checks: live websites you can test, speed scores you can verify, and a price that does not grow mid-project. That is the honest way to pick the best website design company in Coimbatore.',
  },
  {
    category: 'pricing',
    question: 'Should I hire web designer in Coimbatore or use an agency?',
    answer:
      'A freelancer can be right for a tiny one-page job. For a business website, a small senior team is usually faster and safer: design, code, SEO, and support in one place, at a fixed price. If you do hire web designer in Coimbatore directly, agree the scope and price in writing first.',
  },
];

const CBE_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Coimbatore Agency' },
  { label: 'Freelancer' },
  { label: 'Template (Wix/Squarespace)' },
] as const;

const CBE_COMPARISON_ROWS = [
  {
    feature: 'Delivery timeline',
    values: ['7 days', '4–12 weeks', '3–10 weeks (unreliable)', '1–2 weeks (you build it)'],
  },
  {
    feature: 'Custom Figma design',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ca" kind="yes" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Next.js (not WordPress)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ca" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Technical SEO built in',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ca" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Lighthouse 90+ on mobile',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ca" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'GA4 + GTM wired up',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ca" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Transparent, fixed pricing',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ca" kind="no" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="yes" />,
    ],
  },
  {
    feature: 'Full codebase to your GitHub',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ca" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: '7-day delivery guarantee',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ca" kind="no" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  '@id': `https://factoryjet.com/web-design/coimbatore#howto`,
  name: `How FactoryJet builds your Coimbatore website in 7 days`,
  description: `Our 7-day process for delivering a professional, high-performance website for Coimbatore businesses.`,
  totalTime: 'P7D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Day 1 — Discovery Call',
      text: `We learn your business, your Coimbatore market, your goals, and what you need the website to do.`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Day 2 — Strategy & Structure',
      text: `We map your site architecture, research your Coimbatore competitors, identify your top keywords, and write the first draft of your page copy.`,
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
      text: `Your approved design is built in code — fast, mobile-first, and SEO-optimised. Coimbatore local schema markup added. Google Analytics and Search Console connected.`,
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
  '@id': `https://factoryjet.com/web-design/coimbatore#webpage`,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: `https://factoryjet.com/web-design/coimbatore`,
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function CoimbatoreWebDesignPage() {
  return (
    <>
      <Script
        id="cbe-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="cbe-faq-schema"
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
          { name: 'Coimbatore', url: 'https://factoryjet.com/web-design/coimbatore' },
        ]}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="web_design_coimbatore_hero" />}
          eyebrow="WEB DESIGN · COIMBATORE"
          headline="Website Design in Coimbatore for Pump Manufacturers, Textile Firms, and Fast-Growing IT Companies"
          lead="Coimbatore is Tamil Nadu's industrial powerhouse — the world's largest pump manufacturing cluster, a major textile and garments hub, and a rising IT corridor along Avinashi Road. With 262+ startups and over 25,000 MSMEs, it is one of India's most under-served major cities for quality web design. FactoryJet builds Figma-designed, Next.js-built websites with a 7-day delivery guarantee, your codebase delivered in full."
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
          headline="500+ websites built. 12 years of web engineering. One 7-day guarantee."
        />

        {/* ── 4. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="COIMBATORE MARKET"
          headline="Why Your Coimbatore Web Presence Is a Business Asset"
          leadParagraphs={[
            "Coimbatore is not a secondary city — it is a global manufacturing capital hiding in plain sight. The city and its surrounding district account for more than 30% of India's total pump production and a significant share of the world's wet grinder and textile machinery output. The Tirupur corridor just 55km away adds textile and garment export volumes that rival entire states. Coimbatore's MSME density is among the highest in Tamil Nadu, with over 25,000 registered units spanning engineering, textiles, food processing, healthcare, and IT. Yet the city's digital agency landscape remains far thinner than Chennai or Bangalore — meaning the quality gap between a professionally built website and what most Coimbatore businesses currently have is enormous.",
            "This creates a web design opportunity unique to Coimbatore. A pump manufacturer in Singanallur needs a fundamentally different site architecture from an IT company on Avinashi Road, a garment exporter in Tirupur corridor, or a hospital in RS Puram. International B2B buyers from the US, EU, and Middle East research Indian pump and engineering vendors for weeks before making contact. Export-oriented textile firms need product catalogs, mill credentials, and RFQ forms optimised for fabric buyers in Japan, Europe, and the US. IT companies targeting enterprise clients need authority-first positioning and case study architecture. FactoryJet builds for all of them — because we start with the buyer journey, not the template.",
            "Coimbatore businesses that invest in a high-performing website now are capturing search rankings, buyer first impressions, and the digital credibility that their slower competitors are conceding every week. The gap between having a quality site and not having one is widening — and in a city where the competition for international buyers is intensifying, the cost of waiting is real.",
          ]}
          stats={[
            {
              value: '25,000+',
              label: "Registered MSMEs in Coimbatore district — Tamil Nadu's second-largest MSME hub",
              sourceUrl: 'https://msme.gov.in/',
              sourceLabel: 'Ministry of MSME',
            },
            {
              value: 'Pump Capital',
              label: "Coimbatore produces over 30% of India's pumps — the world's largest pump manufacturing cluster",
              sourceUrl: 'https://www.coimbatorepumps.com/',
              sourceLabel: 'Coimbatore Pumps & Motors Manufacturers Association',
            },
            {
              value: '262+',
              label: "Active startups in Coimbatore's growing entrepreneurship ecosystem",
              sourceUrl: 'https://startuptn.in/',
              sourceLabel: 'StartupTN',
            },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION ───────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WEB DESIGN · COIMBATORE"
          headline="What 'Web Design' Actually Means for a Coimbatore Business"
          lead="Coimbatore's economy runs on three very different buyer behaviours — international B2B buyers doing weeks of vendor research, domestic enterprise clients evaluating IT and services firms, and local consumers making fast decisions on mobile. Each needs a different web strategy. FactoryJet builds for all three."
          body={
            <>
              <p>
                For Coimbatore&apos;s pump manufacturers, textile exporters, engineering firms, and
                MSME businesses — the website needs to project manufacturing credentials, product
                range, and export capability to international B2B buyers in the US, EU, and Middle
                East. These buyers research vendors for weeks before making contact. The site needs
                to answer their due-diligence questions: certifications, production capacity, past
                export clients, and a frictionless RFQ form. We build these sites with
                authority-first architecture, product catalog systems, and lead-capture flows
                designed for B2B export sales cycles.
              </p>
              <p>
                For IT companies on Avinashi Road and Peelamedu, education institutions, and
                professional services firms — the challenge is establishing digital credibility at
                scale. These businesses compete nationally and internationally for clients who will
                research them thoroughly before engaging. Authority-first positioning, strong case
                study architecture, and conversion-optimised enquiry flows are non-negotiable.
              </p>
              <p>
                Every FactoryJet Coimbatore project covers discovery, Figma prototyping, Next.js
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
                    type: 'B2B / Export & Manufacturing',
                    need: 'Credentials + catalog + RFQ',
                    area: 'Singanallur · SIPCOT · Peelamedu · Tirupur corridor',
                    colour: '#F05A28',
                  },
                  {
                    type: 'IT & Professional Services',
                    need: 'Authority + case studies + enquiry',
                    area: 'Avinashi Road · Peelamedu IT Park · Saibaba Colony',
                    colour: '#0F0F12',
                  },
                  {
                    type: 'D2C / Consumer & Retail',
                    need: 'Speed + mobile + instant CTA',
                    area: 'RS Puram · Gandhipuram · Saibaba Colony · Race Course',
                    colour: '#6B7280',
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
          headline="Why Coimbatore Businesses Choose FactoryJet Over Local Agencies"
          lead="Local web agencies often take much longer to deliver and don't publish their rates upfront. FactoryJet gives you a fixed-price quote before you commit, guarantees 7-day delivery in writing, and builds in Next.js rather than WordPress — faster load times, no monthly plugin overhead, a codebase you own outright. Pricing is fixed and agreed upfront — no surprises."
          pillars={[
            {
              icon: '⚡',
              title: '7-day delivery. In writing. Or you do not pay.',
              body: "Coimbatore's manufacturing and export community moves on timelines and results. Waiting 10 weeks for a website while your competitor captures the international buyer in their search results is not a viable strategy. FactoryJet delivers in 7 days, with the guarantee written into the project agreement. We have delivered on time on 97% of all projects.",
            },
            {
              icon: '🏗️',
              title: 'Next.js, not WordPress. The performance gap is real.',
              body: 'WordPress loads server-side PHP and fires 40–60 database queries per page load. Next.js generates static files served from Cloudflare CDN globally. The result: sub-1.5s load times on Indian 4G versus 4–6s for a typical WordPress site. For Coimbatore businesses competing on Google\'s Core Web Vitals, that gap directly affects rankings.',
            },
            {
              icon: '📋',
              title: 'Fixed price. Agreed before we start.',
              body: "We give you a fixed-price quote before you commit. No discovery fees, no 'it depends' quotes. Fixed price, fixed scope, agreed upfront. No surprise invoices after launch.",
            },
          ]}
        />

        {/* ── 7. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="How We Build Your Coimbatore Website in 7 Days"
          lead="Buyer strategy agreed before design. Mobile approval before development. SEO and analytics wired before launch."
          stages={CBE_JOURNEY_STAGES}
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
          headline="FactoryJet vs. Coimbatore Agency vs. Freelancer vs. Template Builder"
          lead="Not all web design options in Coimbatore deliver the same output. Here is the honest comparison — scope, price, timeline, and what you own after launch."
          pullQuote={{
            stat: '7 days',
            caption:
              'from kickoff to launch — same Figma-first design, Next.js engineering, technical SEO, and Lighthouse audit as a big-agency project.',
          }}
          columns={CBE_COMPARISON_COLUMNS}
          rows={CBE_COMPARISON_ROWS}
          footer="FactoryJet fixed-price contracts available for every scope. You get a clear quote up front after a free consultation."
        />

        {/* ── 10. INDUSTRIES ───────────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="COIMBATORE × WEB DESIGN"
          headline="Web Design for Coimbatore's Key Industries"
          lead="From pump manufacturers and textile exporters to IT companies and healthcare providers — Coimbatore's economy spans industries with very different digital requirements. FactoryJet has the architecture for each."
          sectors={[
            {
              name: 'Engineering & Pumps',
              description:
                "Coimbatore is the world's largest pump manufacturing cluster — home to hundreds of pump, motor, and engineering equipment manufacturers exporting globally. These businesses need websites that project manufacturing capability, ISO/BIS certifications, product specifications, and export credentials to international industrial buyers in the US, Europe, Middle East, and Southeast Asia. Product catalog systems, technical specification sheets, and B2B inquiry flows are standard.",
              example:
                'Pump and motor manufacturers, engineering equipment exporters, and precision engineering firms targeting international OEMs and industrial buyers.',
            },
            {
              name: 'Textile & Garments',
              description:
                "Coimbatore and the nearby Tirupur corridor form Tamil Nadu's textile backbone — producing cotton yarn, knitted garments, hosiery, and woven fabrics for global fashion brands and retailers. Textile businesses need websites that display product range, fabric specifications, certifications (GOTS, OEKO-TEX), and production capacity to international B2B buyers. Export-ready catalog architecture and RFQ forms are essential.",
              example:
                'Yarn spinners, knitted garment exporters, hosiery manufacturers, and fabric mills in Coimbatore and the Tirupur corridor targeting global fashion and retail buyers.',
            },
            {
              name: 'IT & Software Services',
              description:
                "Coimbatore's IT sector is growing fast along Avinashi Road and in Peelamedu — home to software companies, SaaS startups, IT services firms, and tech product companies targeting enterprise clients across India and abroad. IT services websites need product-led architecture, case study portfolios, service capability pages, and lead flows designed for B2B software and services sales cycles.",
              example:
                'Software development companies, IT services firms, SaaS startups, and tech product companies based in Avinashi Road IT corridor and Peelamedu IT parks.',
            },
            {
              name: 'Education & Ed-Tech',
              description:
                "Coimbatore is home to over 100 engineering colleges, arts and science colleges, and business schools — and a growing ed-tech startup scene. Educational institutions need websites that communicate course credibility, placement records, faculty credentials, and admission processes to prospective students and parents. Ed-tech companies need product-led architecture with demo request flows and online enrollment capability.",
              example:
                'Engineering colleges, arts and science institutions, professional training institutes, and ed-tech startups in Coimbatore targeting students and working professionals.',
            },
            {
              name: 'Healthcare & Hospitals',
              description:
                "Coimbatore has a strong healthcare ecosystem — from large multi-specialty hospitals and specialty clinics to diagnostic centres and Ayurvedic wellness centres. Healthcare businesses need websites that project clinical credibility, specialist credentials, department capability, and streamlined appointment booking — designed to convert local patient searches and attract medical tourism from smaller towns in Tamil Nadu and Kerala.",
              example:
                'Multi-specialty hospitals, specialty clinics, diagnostic centres, dental practices, and Ayurvedic wellness centres serving Coimbatore and the broader Western Tamil Nadu and Kerala border region.',
            },
            {
              name: 'Agri-Business & Food Processing',
              description:
                "Coimbatore district's agricultural hinterland produces coconuts, turmeric, cotton, and vegetables — and the city has a significant food processing and agri-commodity trading sector. Food processing businesses and agri-exporters need websites that display product range, certifications (FSSAI, APEDA, organic), export credentials, and inquiry forms optimised for institutional and international buyers.",
              example:
                'Coconut oil producers, spice exporters, food processing companies, agri-commodity traders, and APEDA-registered exporters targeting domestic and international food buyers.',
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
          headline="Common Questions from Coimbatore Businesses"
          lead="The questions we answer on every Coimbatore discovery call — answered here, without the runaround."
          categories={CBE_FAQ_CATEGORIES}
          items={CBE_FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Build Your Coimbatore Website?"
          sub="Coimbatore's pump exports, textile production, and growing IT sector mean serious businesses are competing for the same international buyer impressions and the same Google rankings. Every week without a high-performing website is ground you are conceding to a competitor who already has one. Start today and have a sitemap ready within 72 hours."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price. 7-day delivery. Next.js. Your codebase delivered in full on launch day."
        />

      </main>

      <SiteFooter locale="in" />
    </>
  );
}

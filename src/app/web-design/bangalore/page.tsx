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
  title: 'Web Design Company in Bangalore | From ₹25,000 | 7-Day Delivery | FactoryJet',
  description:
    'FactoryJet is a web design company in Bangalore building fast, SEO-optimized websites for startups, IT companies, and D2C brands. From ₹25,000. 7-day delivery guarantee. Serving Koramangala, Whitefield, HSR Layout, and Electronic City.',
  keywords: [
    'web design company in Bangalore',
    'website design Bangalore',
    'web development company Bangalore',
    'website design company Bangalore',
    'affordable web design Bangalore',
    'startup website design Bangalore',
    'web design Koramangala',
    'web design Whitefield',
    'IT company website design Bangalore',
    'SaaS website design Bangalore',
    'Next.js web development Bangalore',
    'web design agency Bangalore',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Bangalore | From ₹25,000 | FactoryJet',
    description:
      'Professional website design company in Bangalore — Next.js, SEO, and GA4 included. 7-day delivery. From ₹25,000. Serving Koramangala, Whitefield, HSR Layout, Electronic City.',
    url: 'https://factoryjet.com/web-design/bangalore',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet — Web Design Company in Bangalore',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Bangalore | FactoryJet',
    description:
      'Website design company in Bangalore. From ₹25,000. 7-day delivery. Next.js, SEO, GA4 included.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/web-design/bangalore',
    languages: webDesignCityAlternatesIN['bangalore'],
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
    'Web design company in Bangalore building fast, SEO-optimized websites for startups, IT companies, and D2C brands. From ₹25,000. 7-day delivery guarantee.',
  url: 'https://factoryjet.com/web-design/bangalore',
  telephone: '+919699977699',
  email: 'connect@factoryjet.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bangalore',
    addressRegion: 'Karnataka',
    addressCountry: 'IN',
  },
  areaServed: [
    { '@type': 'City', name: 'Bangalore' },
    { '@type': 'City', name: 'Whitefield' },
    { '@type': 'City', name: 'Electronic City' },
  ],
  serviceType: 'Web Design and Development',
  priceRange: '₹₹',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Design Services Bangalore',
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
        description:
          '10–15 page website with blog CMS, lead capture, GA4, and advanced SEO.',
      },
      {
        '@type': 'Offer',
        name: 'Custom Website',
        price: '100000',
        priceCurrency: 'INR',
        description:
          'Custom Next.js build with e-commerce, booking systems, or AI integrations.',
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
      name: 'How much does a website cost for a startup in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "FactoryJet's web design for Bangalore businesses starts at ₹25,000 for a 5-page Starter site. The Growth tier (₹50,000) covers 10–15 pages, a blog CMS, lead-capture forms, and GA4 analytics. Custom builds with SaaS integrations, booking systems, or AI features start at ₹1,00,000. Bangalore agency rates for comparable scope typically run ₹1,50,000–₹4,00,000.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a website in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard FactoryJet build delivers in 7 days from kickoff to launch. Discovery and design take the first two days, development runs through days five and six, and content, SEO, and launch happen on day seven. The 7-day clock starts when your brand assets and content are in our shared workspace.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build websites for IT companies and SaaS startups in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — IT services, SaaS product companies, and enterprise software firms are a core client profile for us in Bangalore. We build sites with product demo flows, case study architecture, technical capability pages, and lead-capture forms designed for B2B SaaS sales cycles. We serve clients across Koramangala, Whitefield, Electronic City, Indiranagar, and HSR Layout.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my Bangalore business website rank on Google?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Technical SEO is built in: JSON-LD schema markup, optimised title and meta tags, Core Web Vitals green on Indian mobile networks, internal linking, XML sitemap submitted to Google Search Console, and WebP images with descriptive alt text. Branded searches typically rank within 1–2 weeks. Service + location queries take 3–6 months for a new domain.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I own the website after it is built?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — 100%. The full Next.js codebase is delivered to your GitHub repository on launch day. You own every file, every Figma design asset, and all API credentials. No FactoryJet retainer required, no proprietary platform lock-in.',
      },
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const BLR_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      "We map your ideal customer profile against Bangalore's market — whether that's an enterprise IT buyer evaluating vendors in Whitefield, a SaaS prospect researching tools in Koramangala, or a D2C consumer shopping on mobile. We audit your top three competitors and agree the sitemap and content plan. — Days 1–2",
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
      'Built in Next.js deployed to Cloudflare CDN — sub-1.5s load times on Indian 4G networks. Contact forms, WhatsApp integration, booking flows, demo request systems, and any third-party APIs your business uses. Performance budgets enforced from the first commit. — Days 5–6',
  },
  {
    number: '04',
    title: 'Content & SEO',
    description:
      'Optimised copy, WebP imagery, meta tags, JSON-LD schema (LocalBusiness + FAQPage), and internal links. Sitemap submitted to Google Search Console. Bangalore-specific local SEO targeting built in — not sold as an add-on. — Day 6–7',
  },
  {
    number: '05',
    title: 'Launch & Handover',
    description:
      'DNS transfer to Cloudflare, GA4 and GTM configured, Search Console verified. Recorded handover walkthrough so your team is fully self-sufficient. 30-day post-launch support window included. — Day 7+',
  },
];

const BLR_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'included',  label: "What's Included" },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local',     label: 'Bangalore Local' },
  { key: 'support',   label: 'Support & Ownership' },
];

const BLR_FAQ_ITEMS = [

  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'How much does a website cost for a startup in Bangalore?',
    answer:
      "FactoryJet's web design for Bangalore businesses starts at ₹25,000 for a 5-page Starter site. The Growth tier (₹50,000) covers 10–15 pages, a blog CMS, lead-capture forms, and GA4 analytics. Custom builds with SaaS integrations, booking systems, or AI features start at ₹1,00,000. Bangalore agency rates for comparable scope typically run ₹1,50,000–₹4,00,000.",
  },
  {
    category: 'pricing',
    question: 'How long does it take to build a website?',
    answer:
      'A standard FactoryJet build delivers in 7 days from kickoff to launch. Discovery and design take the first two days, development days three through six, and content, SEO, and launch on day seven. The 7-day clock starts when your brand assets and content are in our shared workspace.',
  },
  {
    category: 'pricing',
    question: 'Why is FactoryJet cheaper than Bangalore web agencies?',
    answer:
      "We are a specialised web engineering team — not a full-service agency with account managers, strategy layers, and large office overheads in Koramangala. The same Figma-first design process, the same Next.js engineering, the same Lighthouse audit before launch — at 60–70% lower cost. We have been building websites since 1999. You pay for the build, not our overhead.",
  },
  {
    category: 'pricing',
    question: 'What is the 7-day delivery guarantee?',
    answer:
      'If we miss the agreed delivery date, you do not pay. The guarantee applies to the development phase we control — design, build, content, and launch. If your internal approvals take longer, we agree a revised schedule upfront. We have delivered on time on 97% of all projects.',
  },

  /* ── What's Included ── */
  {
    category: 'included',
    question: "What's included in a web design project?",
    answer:
      'Every FactoryJet project includes strategy, Figma design, Next.js development, basic copywriting, technical SEO setup (schema, meta, sitemap), GA4 analytics, and a 30-day post-launch support window. You receive the full codebase in your GitHub on launch day, the Figma design files, and a recorded handover walkthrough.',
  },
  {
    category: 'included',
    question: 'Do you write the content for my website?',
    answer:
      'Basic copywriting for headings, hero text, and service descriptions is included. Full SEO content — detailed service pages, blog posts, and city landing pages — is available as an add-on. We send a content brief before development starts so you know exactly what to provide and what we will write.',
  },
  {
    category: 'included',
    question: 'Do you provide website hosting?',
    answer:
      "We deploy to Cloudflare Pages, which is free for most projects (static Next.js builds). You set up and own your own Cloudflare account — we configure it for you. No monthly hosting fee to us.",
  },
  {
    category: 'included',
    question: 'Can I update the website myself after launch?',
    answer:
      'Yes. Every Growth and Custom tier project includes a headless CMS integration (Sanity or Contentful) so your team can add blog posts, update team pages, and change service descriptions without touching code. We configure the CMS and walk you through it in the handover session.',
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
    question: 'What tech stack do you build on, and why does it matter?',
    answer:
      "We build on Next.js deployed to Cloudflare's global CDN. Next.js generates static pages that load under 1.5 seconds on Indian 4G networks — significantly faster than WordPress. For Bangalore businesses competing on Google's Core Web Vitals ranking signals, that performance gap is real and measurable.",
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
      'Yes — GA4 and Google Tag Manager are wired up before launch on every project. Key conversion events (form submissions, WhatsApp clicks, demo requests) are configured from day one. Search Console is verified and the sitemap submitted.',
  },

  /* ── Bangalore Local ── */
  {
    category: 'local',
    question: 'Do you build websites for IT companies and SaaS startups in Bangalore?',
    answer:
      "Yes — IT services, SaaS product companies, and enterprise software firms are a core client profile for us in Bangalore. We build sites with product demo flows, case study architecture, technical capability pages, and lead-capture forms designed for B2B SaaS sales cycles. We serve clients across Koramangala, Whitefield, Electronic City, Indiranagar, and HSR Layout.",
  },
  {
    category: 'local',
    question: 'Can you build websites for D2C and consumer brands in Bangalore?',
    answer:
      "Yes. Bangalore's consumer startup ecosystem is thriving — from lifestyle brands in Indiranagar to health-tech D2C companies in Koramangala. D2C websites need sub-1.5s load times on 4G, above-the-fold product display, Razorpay one-tap checkout, and Instagram integration. We build these mobile-first, every time.",
  },
  {
    category: 'local',
    question: "Do you know Bangalore's tech and business districts well enough to write relevant copy?",
    answer:
      "Yes. We research Bangalore's business geography as part of discovery — from Koramangala's startup corridor and Whitefield's IT parks to Electronic City's tech campus cluster and Indiranagar's premium retail strip. Local specificity in copy and LocalBusiness schema (areaServed) improves relevance for neighbourhood-level searches.",
  },
  {
    category: 'local',
    question: 'How does FactoryJet compare to Bangalore web agencies?',
    answer:
      "Bangalore web agencies typically charge ₹1,50,000–₹4,00,000 for a comparable project and deliver in 8–20 weeks. FactoryJet publishes all three pricing tiers before you speak to us, guarantees 7-day delivery in writing, and builds in Next.js rather than WordPress. Faster website, shorter timeline, codebase you own outright — at 60–70% less.",
  },

  /* ── Support & Ownership ── */
  {
    category: 'support',
    question: 'Do I own the website after it is built?',
    answer:
      'Yes — 100%. The full Next.js codebase is delivered to your GitHub repository on launch day. You own every file, every Figma design asset, and all API credentials. No FactoryJet retainer required to keep your site running. No proprietary platform lock-in.',
  },
  {
    category: 'support',
    question: 'What support do you provide after launch?',
    answer:
      'Every project includes a 30-day post-launch support window covering bug fixes, minor adjustments, and launch questions at no extra cost. Beyond that, FactoryJet offers monthly maintenance plans from ₹4,999/month: up to 3 hours of development changes, priority same-day bug response, and a dedicated engineer who knows your codebase.',
  },
  {
    category: 'support',
    question: 'What happens if something breaks after launch?',
    answer:
      'Within the 30-day support window, any bugs are fixed at no cost and typically within 24 hours. Because your site is on Cloudflare Pages (static files, global CDN), the most common causes of downtime — server crashes, plugin conflicts, database failures — simply do not apply.',
  },
  {
    category: 'support',
    question: 'Do you offer ongoing retainer services for Bangalore businesses?',
    answer:
      'Yes. Monthly retainers from ₹4,999/month cover ongoing development work, content updates, new landing pages, SEO improvements, and technical maintenance. Retainer clients get priority scheduling, a dedicated engineer, and quarterly website health reports.',
  },
];

const BLR_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Bangalore Agency' },
  { label: 'Freelancer' },
  { label: 'Template (Wix/Squarespace)' },
] as const;

const BLR_COMPARISON_ROWS = [
  {
    feature: 'Starting price',
    values: ['₹25,000', '₹1,50,000–₹4,00,000', '₹15,000–₹80,000', '₹0–₹15,000 (you build it)'],
  },
  {
    feature: 'Delivery timeline',
    values: ['7 days', '8–20 weeks', '4–16 weeks (unreliable)', '1–2 weeks (you build it)'],
  },
  {
    feature: 'Custom Figma design',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ba" kind="yes" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Next.js (not WordPress)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ba" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Technical SEO built in',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ba" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Lighthouse 90+ on mobile',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ba" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'GA4 + GTM wired up',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ba" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Published pricing (no surprises)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ba" kind="no" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="yes" />,
    ],
  },
  {
    feature: 'Full codebase to your GitHub',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ba" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: '7-day delivery guarantee',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ba" kind="no" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function BangaloreWebDesignPage() {
  return (
    <>
      <Script
        id="blr-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="blr-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Web Design', url: 'https://factoryjet.com/web-design' },
          { name: 'Bangalore', url: 'https://factoryjet.com/web-design/bangalore' },
        ]}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          eyebrow="WEB DESIGN · BANGALORE"
          headline="Website Design in Bangalore Built for Startups, IT Companies, and D2C Brands"
          lead="Bangalore drives $20B+ in annual IT exports, hosts 15,000+ registered startups, and is India's fastest-growing D2C city. Koramangala, Whitefield, HSR Layout, and Electronic City are home to businesses that compete globally — and your website is the first impression every buyer gets. FactoryJet builds from ₹25,000 — Figma-designed, Next.js-built, 7-day delivery guarantee, your codebase delivered in full."
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
          eyebrow="BANGALORE MARKET"
          headline="Why Your Bangalore Web Presence Is a Competitive Advantage — Not a Checkbox"
          leadParagraphs={[
            "Bangalore is India's technology capital — contributing $20B+ annually in IT and software exports and housing over 15,000 registered startups as of 2024. The city's ecosystem spans enterprise IT outsourcing firms in Whitefield and Electronic City, SaaS product companies and D2C brands in Koramangala and HSR Layout, and a rapidly growing medtech and edtech sector across Indiranagar and Jayanagar. More than any other Indian city, Bangalore's businesses compete for global buyers — US enterprise procurement teams evaluating offshore IT vendors, international investors screening SaaS companies, and Indian consumer segments reached primarily through digital channels.",
            "This creates a web design challenge unique to Bangalore: an IT services firm targeting Fortune 500 US clients needs a completely different site architecture from a D2C health brand selling to Indian consumers on Instagram. A SaaS startup pitching seed-stage investors needs different content hierarchy from an established engineering services company building its RFP response pipeline. FactoryJet builds for all of them, because we start every project with the buyer journey in mind — not the template.",
            "Bangalore's competitive density means the gap between a high-performing website and an average one is measured in qualified leads per month, not aesthetics. A 1-second load improvement increases conversion by 7%. A properly structured case study page indexed by Google can become your highest-converting sales asset. These are the outcomes FactoryJet is engineered to deliver — in 7 days.",
          ]}
          stats={[
            {
              value: '$20B+',
              label: "Bangalore's annual IT and software exports — India's largest tech city by export value",
              sourceUrl: 'https://nasscom.in/knowledge-center/publications',
              sourceLabel: 'NASSCOM Annual Report',
            },
            {
              value: '15,000+',
              label: 'Registered startups in Bangalore — India\'s largest startup ecosystem',
              sourceUrl: 'https://www.startupindia.gov.in/',
              sourceLabel: 'Startup India Dashboard',
            },
            {
              value: '₹7.5L Cr',
              label: "Bangalore's estimated GDP — one of India's fastest-growing major city economies",
              sourceUrl: 'https://mospi.gov.in/',
              sourceLabel: 'MoSPI',
            },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION ───────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WEB DESIGN · BANGALORE"
          headline="What 'Web Design' Actually Means for a Bangalore Business"
          lead="Bangalore's economy runs on two very different buyer behaviours — B2B enterprise and SaaS buyers doing weeks of vendor research, and D2C consumers deciding in under 10 seconds on mobile. Both demand very different web strategies. FactoryJet builds for both."
          body={
            <>
              <p>
                For Bangalore&apos;s IT services firms, SaaS companies, and enterprise software
                businesses — companies in Whitefield, Electronic City, Manyata Tech Park, and
                Koramangala — a website needs to project technical credibility, delivery capability,
                and client track record. US and EU procurement teams research vendors for months
                before making contact. The site needs to answer their evaluation questions clearly:
                technology stack, engagement models, case studies, certifications, and a
                frictionless contact flow. We build these sites with authority-first architecture,
                product demo systems, case study libraries, and lead-capture flows designed for
                longer B2B sales cycles.
              </p>
              <p>
                For Bangalore&apos;s D2C brands, consumer startups, and service businesses in
                Indiranagar, Bandra, Koramangala, and Jayanagar — the challenge is entirely
                different. Consumers arriving on mobile from Instagram or Google search make
                decisions in seconds. The site needs to load under 1.5 seconds on a 4G connection,
                present the product or service above the fold, and make the next step obvious. We
                build these sites mobile-first, at 375px before 1440px, with Lighthouse 90+
                performance before launch.
              </p>
              <p>
                Every FactoryJet Bangalore project covers discovery, Figma prototyping, Next.js
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
                    type: 'B2B / IT & SaaS',
                    need: 'Credibility + case studies + demo flow',
                    area: 'Whitefield · Electronic City · Koramangala · MTP',
                    colour: '#F05A28',
                  },
                  {
                    type: 'D2C / Consumer',
                    need: 'Speed + mobile + instant CTA',
                    area: 'Indiranagar · HSR · Bandra · Jayanagar',
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
          headline="Why Bangalore Businesses Choose FactoryJet Over Local Agencies"
          lead="Bangalore web agencies typically charge ₹1,50,000–₹4,00,000 for a comparable project and take 8–20 weeks to deliver — without publishing their rates or timeline upfront. FactoryJet publishes all three pricing tiers before you speak to us, guarantees 7-day delivery in writing, and builds in Next.js rather than WordPress — faster load times, no monthly plugin overhead, a codebase you own outright. At 60–70% below the Bangalore agency benchmark for the same scope."
          pillars={[
            {
              icon: '⚡',
              title: '7-day delivery. In writing. Or you do not pay.',
              body: "Bangalore moves fast — a startup waiting 16 weeks for a website they briefed in April is losing ground to the competitor that shipped in week one. FactoryJet delivers in 7 days, with the guarantee written into the project agreement. We have delivered on time on 97% of all projects since 2005.",
            },
            {
              icon: '🏗️',
              title: 'Next.js, not WordPress. The performance gap is real.',
              body: "WordPress loads server-side PHP and fires 40–60 database queries per page load. Next.js generates static files served from Cloudflare CDN nodes globally. The result: sub-1.5s load times on Indian 4G versus 4–6s for a typical WordPress site. For Bangalore businesses competing on Google's Core Web Vitals signals, that gap directly affects rankings.",
            },
            {
              icon: '📋',
              title: 'Fixed price. Published before the first call.',
              body: "We publish all three tiers — ₹25,000, ₹50,000, and ₹1,00,000+ — before you speak to us. No discovery fees, no 'it depends' quotes. Fixed price, fixed scope, agreed upfront. No surprise invoices after launch. No retainer required to keep your site running.",
            },
          ]}
        />

        {/* ── 7. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="How We Build Your Bangalore Website in 7 Days"
          lead="Buyer strategy agreed before design. Mobile approval before development. SEO and analytics wired before launch."
          stages={BLR_JOURNEY_STAGES}
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
              industry: 'B2B · Shopify E-Commerce',
              title: 'Bombay Petals — Mumbai',
              description:
                'Bombay Petals is a B2B artificial plants and décor supplier. FactoryJet built a dual-storefront solution — B2B wholesale portal with volume pricing and a D2C consumer store — on a unified Shopify backend. Razorpay + Shiprocket integrated.',
              imageSrc: '/images/portfolio/formative-concepts.webp',
              stat1: '₹1.5 Cr in Y1',
              stat2: '7-day delivery',
            },
            {
              industry: 'MEP / BIM Consulting · SEO',
              title: 'Formative Concepts — Pune',
              description:
                'Formative Concepts is an MEP drafting and BIM consulting firm. FactoryJet rebuilt their website on Next.js with an authority-first architecture designed for B2B project enquiries — credentials display, project portfolio, and technical SEO targeting high-value engineering queries.',
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
          headline="FactoryJet vs. Bangalore Agency vs. Freelancer vs. Template Builder"
          lead="Not all web design options in Bangalore deliver the same output. Here is the honest comparison — scope, price, timeline, and what you own after launch."
          pullQuote={{
            stat: '₹25,000',
            caption:
              'starting price — same Figma-first design, Next.js engineering, technical SEO, and Lighthouse audit as a ₹2,50,000 Bangalore agency project.',
          }}
          columns={BLR_COMPARISON_COLUMNS}
          rows={BLR_COMPARISON_ROWS}
          footer="Prices reflect typical Bangalore market ranges as of 2025. FactoryJet fixed-price contracts available for all tiers."
        />

        {/* ── 10. INDUSTRIES ───────────────────────────────────────────────── */}
        <IndustriesGrid
          eyebrow="BANGALORE × WEB DESIGN"
          headline="Web Design for Bangalore's Key Industries"
          lead="From Whitefield IT parks to Koramangala startups to Indiranagar D2C brands — Bangalore's economy spans industries with very different digital requirements. FactoryJet has built for each of them."
          sectors={[
            {
              name: 'IT Services & Software',
              description:
                "Bangalore is India's largest IT outsourcing hub — home to Infosys, Wipro, TCS campuses, and thousands of mid-size and boutique IT services firms. These businesses compete for US, EU, and APAC enterprise contracts. Their websites need to project technical delivery capability, CMMI and ISO certifications, client case studies, and frictionless contact flows for global procurement teams.",
              example:
                'IT outsourcing firms in Whitefield, Electronic City, and Manyata Tech Park targeting enterprise clients in the US, UK, and Europe.',
            },
            {
              name: 'SaaS & Product Startups',
              description:
                "Bangalore is home to India's most active SaaS ecosystem — from seed-stage startups to Series B companies scaling globally. SaaS websites need product demo flows, pricing page architecture, case study libraries, and lead-capture forms designed for free-trial and demo-request conversion. We build for both PLG and sales-led SaaS motions.",
              example:
                'B2B SaaS startups in Koramangala, HSR Layout, and Indiranagar targeting global SMB and enterprise buyers.',
            },
            {
              name: 'D2C & Consumer Brands',
              description:
                "Bangalore's D2C ecosystem has produced some of India's most successful consumer brands — health, wellness, lifestyle, and personal care companies that reach consumers directly through digital channels. D2C websites need to convert mobile visitors in under 10 seconds: sub-1.5s load times, above-the-fold product display, Razorpay one-tap checkout, and Instagram integration.",
              example:
                'D2C health, lifestyle, and personal care brands in Indiranagar, Koramangala, and Jayanagar selling to consumers across India.',
            },
            {
              name: 'Professional & Consulting',
              description:
                "Bangalore's management consulting, legal, CA/CS, and HR consulting sector is growing alongside its tech ecosystem. For these businesses, the website is the first qualification filter — does this firm look credible enough to engage? We build authority-first sites with service capability pages, team credentials, and lead-capture flows that convert research into booked consultations.",
              example:
                'Management consulting, legal, CA/CS firms, and HR companies serving Bangalore\'s corporate and startup ecosystem.',
            },
            {
              name: 'Healthcare & Medtech',
              description:
                "Bangalore has become India's medtech hub — home to a growing cluster of medical device companies, health-tech startups, and hospital groups. Medtech B2B websites need regulatory compliance awareness, clinical evidence display, and institutional procurement lead flows. Hospital and clinic websites need appointment booking integrations, doctor profiles, and local SEO.",
              example:
                'Medical device companies, health-tech startups, hospital groups, and diagnostic chains serving Bangalore and South India.',
            },
            {
              name: 'Education & EdTech',
              description:
                "Bangalore is home to some of India's most prestigious educational institutions and a thriving EdTech startup ecosystem. EdTech websites need course catalog architecture, demo-class booking flows, student testimonials, and lead-nurturing infrastructure. Traditional education institutions need authority-first positioning with admissions enquiry flows and programme detail pages.",
              example:
                "EdTech startups, coaching institutes, and educational institutions across Bangalore serving India's student market.",
            },
          ]}
        />

        {/* ── 11. PRICING ──────────────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="TRANSPARENT PRICING"
            headline="Transparent, Fixed-Price Web Design for Bangalore Businesses"
            lead="Bangalore agency rates for comparable web projects run ₹1,50,000–₹4,00,000. FactoryJet Growth (₹50,000) delivers 10–15 pages, blog CMS, lead capture, GA4, Next.js, and a 7-day delivery guarantee — with a codebase you own outright. No retainer required. No proprietary platform. No surprise invoices."
            tiers={[
              {
                name: 'Starter',
                priceRange: '₹25,000',
                description:
                  'A 5-page business site that loads fast on mobile and ranks for your name and core service. Best for sole traders, consultants, and small businesses in Bangalore who need a credible online presence quickly.',
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
                  'A 10–15 page site with blog CMS, lead-capture flows, and analytics wired in from day one. Best for Bangalore startups and SMBs scaling online who need the site to actively generate qualified enquiries.',
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
                  'Custom Next.js build with SaaS integrations, booking systems, AI features, or API connections. Best for established Bangalore businesses with complex requirements and a real digital revenue line.',
                features: [
                  'Custom Next.js architecture',
                  'SaaS integrations or e-commerce (Razorpay, Shiprocket)',
                  'AI integrations (chat, search, content)',
                  'Third-party API connections (Zoho, Salesforce, HubSpot)',
                  'Priority support + quarterly reviews',
                  'Dedicated engineering point of contact',
                ],
                cta: { label: 'Book a Discovery Call', modal: true as const, region: 'in' as const },
              },
            ] as const}
            footnote="All prices in INR inclusive of design, development, SEO setup, and GA4. Cloudflare Pages hosting is free for standard Next.js builds — no monthly hosting fee. Domain registration billed separately if required."
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
          headline="Common Questions from Bangalore Businesses"
          lead="The questions we answer on every Bangalore discovery call — answered here, without the runaround."
          categories={BLR_FAQ_CATEGORIES}
          items={BLR_FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Build Your Bangalore Website?"
          sub="Bangalore's 15,000+ startups and $20B+ IT ecosystem means every serious business is competing for the same Google rankings and the same first impression. The difference between winning and losing that competition is usually a faster, better-structured web presence. Every week without a high-performing website is market share you are handing to a competitor who shipped theirs first. Start today and have a sitemap ready within 72 hours."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price. 7-day delivery. Next.js. Your codebase delivered in full on launch day."
        />

      </main>

      <SiteFooter locale="in" />
    </>
  );
}

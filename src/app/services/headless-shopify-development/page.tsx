import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import EnterpriseArchitectureBlueprint from '@/components/v2/EnterpriseArchitectureBlueprint';
import AuthorCard from '@/components/v2/AuthorCard';
import CommerceRoiCalculator from '@/components/v2/CommerceRoiCalculator';
import EcommerceCityLinksUS from '@/components/v2/EcommerceCityLinksUS';
import HeroInlineForm from '@/components/HeroInlineForm';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

const PAGE_MODIFIED = '2026-08-30';
const CANONICAL = 'https://factoryjet.com/services/headless-shopify-development';

export const metadata: Metadata = {
  title: 'Headless Shopify Agency: Next.js 15 | FactoryJet',
  description: 'Headless Shopify Plus development agency. We engineer sub-second Next.js 15 storefronts with Shopify Storefront API, Sanity CMS, and zero app bloat.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Headless Shopify Agency: Sub-Second Next.js 15 Storefronts | FactoryJet.',
    description: 'Headless Shopify Plus development agency. We engineer sub-second Next.js 15 storefronts with Shopify Storefront API, Sanity CMS, and zero app bloat.',
    url: CANONICAL,
    images: [
      {
        url: 'https://factoryjet.com/images/us/headless-shopify/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Headless Shopify Next.js 15 Storefront Architecture',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Headless Shopify Agency: Sub-Second Next.js 15 Storefronts | FactoryJet.',
    description:
      'Enterprise headless Shopify Plus engineering with Next.js 15 App Router, React Server Components, and sub-second Core Web Vitals.',
    images: ['https://factoryjet.com/images/us/headless-shopify/hero.webp'],
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

const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Headless Shopify Development', url: CANONICAL },
];

const PARTNERS = [
  'Shopify Plus Certified.',
  'Next.js 15 App Router.',
  'React 19 Server Components.',
  'Cloudflare Edge Network.',
  'Algolia InstantSearch API.',
  'Sanity Headless CMS.',
  'Stripe Payments & Checkout.',
  'Klaviyo Enterprise.',
];

const STAT_CARDS = [
  {
    num: 'Sub-200ms.',
    title: 'Edge Time to First Byte.',
    desc: 'Static prerendering on Cloudflare Edge global network. Instant catalog delivery across 300+ edge nodes.',
    icon: '⚡',
  },
  {
    num: '98+.',
    title: 'Mobile Performance Score.',
    desc: 'Eliminate render-blocking Liquid app scripts. Remove third-party waterfalls for perfect Core Web Vitals.',
    icon: '📈',
  },
  {
    num: '100%.',
    title: 'Native Checkout Security.',
    desc: 'Retain PCI-DSS Level 1 compliance and Shop Pay. Decouple frontend presentation with full checkout security.',
    icon: '🛡️',
  },
  {
    num: 'Full IP.',
    title: 'Clean GitHub Repository.',
    desc: 'You own 100% of the TypeScript source code and CI/CD pipelines. Zero recurring agency license fees.',
    icon: '💎',
  },
];

const ARCHITECTURE_LAYERS = [
  {
    layer: '01. Presentation Layer (Decoupled Frontend).',
    tech: 'Next.js 15 App Router + React 19 Server Components.',
    desc: 'Renders static pages at the edge with dynamic streaming. Powers cart drawers, recommendations, and inventory checks.',
    points: [
      'Incremental Static Regeneration updates pages on inventory change. Revalidates via webhooks in milliseconds.',
      'Zero hydration penalty with React Server Components. Delivers pure semantic HTML without heavy JS bundles.',
      'Custom Figma design system with modular CSS tokens. Fluid typography with zero heavy UI framework bloat.',
    ],
  },
  {
    layer: '02. Data Orchestration & GraphQL API Middleware.',
    tech: 'Shopify Storefront API (2026-07) + Webhooks + Edge Cache.',
    desc: 'Fetches product variants, metafields, and customer data. Uses fine-grained, type-safe GraphQL queries.',
    points: [
      'High-throughput caching layer on Cloudflare Workers. Stale-while-revalidate protocols serve instant cached data.',
      'Multi-currency and language routing with geo-IP edge detection. Maps directly to Shopify Markets catalogs.',
      'Structured error handling with resilient fallback states. Exponential backoff retry logic avoids downtime.',
    ],
  },
  {
    layer: '03. Content & Search Orchestration Layer.',
    tech: 'Sanity.io / Strapi Headless CMS + Algolia InstantSearch.',
    desc: 'Enables marketing and merchandising teams to build rich landing pages, editorial lookbooks, and visual campaign drops without developer tickets.',
    points: [
      'Live visual preview and draft mode directly within the headless CMS dashboard with real-time editorial collaboration.',
      'Sub-50ms instant federated search, multi-facet filtering, and AI search ranking synchronized with Shopify inventory counts.',
      'Centralized asset management with automated next-gen WebP and AVIF image compression and responsive art direction.',
    ],
  },
  {
    layer: '04. Commerce Engine & Checkout Layer.',
    tech: 'Shopify Plus Core + Checkout Extensibility + Functions.',
    desc: 'Uses the world-class Shopify Plus checkout engine, order management, inventory routing, and global payment gateways.',
    points: [
      'Native Shop Pay, Apple Pay, Google Pay, and Klarna 1-tap conversion acceleration with zero checkout friction.',
      'Shopify Functions for custom B2B pricing tiers, volume discounts, and shipping validation rules executed server-side in WebAssembly.',
      'Post-purchase upsells, custom checkout validation rules, and ERP synchronization with NetSuite, SAP, or Microsoft Dynamics.',
    ],
  },
];

const COMPARISON_ROWS = [
  {
    factor: 'Time to First Byte (TTFB).',
    headless: 'Sub-200ms globally via Cloudflare edge CDN static caching.',
    liquid: '600ms - 1,400ms server rendering latency in single origin region.',
    hydrogen: '300ms - 500ms dependent on Shopify Oxygen worker hosting.',
  },
  {
    factor: 'Third-Party App Script Bloat.',
    headless: 'Zero. Scripts load asynchronously via server-side proxy & CAPI.',
    liquid: 'High. 20-40 apps inject unminified JS into critical DOM path.',
    hydrogen: 'Moderate. Requires custom React wrapper integration per app.',
  },
  {
    factor: 'Custom User Experience & UI Freedom.',
    headless: '100% unrestricted React / Next.js design freedom & micro-animations.',
    liquid: 'Restricted by Shopify Liquid theme architecture & DOM limits.',
    hydrogen: 'High UI freedom, limited framework ecosystem & plugin support.',
  },
  {
    factor: 'Omnichannel & Multi-Platform Publishing.',
    headless: 'Single API powers web storefront, iOS/Android mobile apps, and retail POS.',
    liquid: 'Limited strictly to Shopify web online store channel.',
    hydrogen: 'Focused primarily on web storefronts with custom React SDKs.',
  },
  {
    factor: 'Developer Tooling & Testing CI/CD.',
    headless: 'Standard Git, GitHub Actions, TypeScript, Jest, Cypress & Playwright.',
    liquid: 'Shopify Theme CLI with manual template sync and no automated testing.',
    hydrogen: 'Oxygen deployment CLI with Vite bundling and limited test runner support.',
  },
  {
    factor: 'Organic Search & Technical SEO Control.',
    headless: 'Full control over URL structure, semantic HTML, and Edge JSON-LD schemas.',
    liquid: 'Locked into rigid /products/ and /collections/ URL structures.',
    hydrogen: 'Full React SSR control, requires manual schema pipeline setup.',
  },
  {
    factor: 'Conversion Rate Impact on Mobile.',
    headless: '+15% to +35% lift driven by sub-second page loads & instant filtering.',
    liquid: 'Constrained by mobile layout shifts (CLS) and long interaction delays (INP).',
    hydrogen: '+10% to +25% lift depending on client bundle optimization.',
  },
  {
    factor: 'Recommended Annual GMV Scale.',
    headless: 'Best for high-growth brands generating $3M - $100M+ annually.',
    liquid: 'Best for early-stage brands generating under $3M annually.',
    hydrogen: 'Suitable for mid-market Shopify Plus merchants exploring React.',
  },
];

const MIGRATION_ROADMAP = [
  {
    phase: 'Phase 1: Architectural Audit & Tech Stack Selection.',
    timeline: 'Week 1.',
    desc: 'We audit your Liquid store and app dependencies. We design a bespoke decoupled architecture for speed.',
    deliverables: [
      'App rationalization matrix. Replaces bloated apps with clean API integrations.',
      'GraphQL data schema mapping for products, variants, collections, and custom metafield definitions.',
      'Figma design system token alignment and reusable component inventory.',
      'Core Web Vitals baseline audit and Google Search Console indexation benchmark.',
    ],
  },
  {
    phase: 'Phase 2: Headless Architecture & API Middleware Setup.',
    timeline: 'Week 2 - 3.',
    desc: 'We build the Next.js 15 codebase and Storefront API client. We configure Cloudflare edge caching and headless CMS models.',
    deliverables: [
      'Type-safe TypeScript SDK. Connected to Shopify Storefront API 2026-07.',
      'Sanity.io or Strapi content modeling, custom schema types, and real-time visual preview environments.',
      'Algolia or Typesense instant search index synchronization with automated webhook webhooks.',
      'Edge routing, multi-currency detection, and international locale middleware configuration.',
    ],
  },
  {
    phase: 'Phase 3: Component Engineering & UI Design System.',
    timeline: 'Week 4 - 5.',
    desc: 'We build React Server Components for product pages and cart drawers. Every component is accessible and fast.',
    deliverables: [
      'Sub-second Product Detail Pages. Real-time variant switching, swatches, and inventory badges.',
      'High-conversion slide-out cart drawer with dynamic cross-sells, free shipping thresholds, and coupon validation.',
      'WCAG 2.1 AA compliant semantic HTML5, keyboard navigation, and ARIA accessibility labels.',
      'Modular storytelling components: interactive lookbooks, video hero blocks, and comparison modules.',
    ],
  },
  {
    phase: 'Phase 4: Checkout Extensibility & ERP Integration.',
    timeline: 'Week 6.',
    desc: 'We connect checkout via Checkout Extensibility. We synchronize enterprise ERPs and warehouse systems cleanly.',
    deliverables: [
      'Frictionless cart handoff to Shopify Plus checkout. Persistent customer authentication.',
      'Shopify Functions for bundle rules and volume discounts. B2B customer price lists.',
      'Bidirectional inventory and order sync. Supports NetSuite, SAP, Acumatica, and Dynamics.',
      'Server-side tracking for Meta CAPI and Klaviyo. Cloudflare Workers route GA4 events.',
    ],
  },
  {
    phase: 'Phase 5: SEO Preservation & 1:1 301 Redirect Mapping.',
    timeline: 'Week 7.',
    desc: 'We protect your organic search rankings and domain authority. We run technical SEO checks and crawl monitoring.',
    deliverables: [
      'Complete URL structure matching. Zero 404 broken links and automated 301 redirect checks.',
      'Automated XML sitemaps and canonical tags. OpenGraph social meta cards for dynamic pages.',
      'Deep JSON-LD Schema.org graphs. Covers Product, BreadcrumbList, and Organization schemas.',
      'Google Search Console URL inspection testing. Crawler rendering verification.',
    ],
  },
  {
    phase: 'Phase 6: End-to-End QA, Load Testing & Staging Validation.',
    timeline: 'Week 8.',
    desc: 'We run stress tests simulating 10,000+ concurrent users. We verify speed and stability across mobile devices.',
    deliverables: [
      'Cross-browser automated testing. Verified on real mobile devices across iOS and Android.',
      'Lighthouse CI performance scoring. Guaranteed 95+ score on mobile templates.',
      'Security audit and webhook checks. Token expiration edge-case validation.',
      'Staging environment UAT sign-off. Full review with marketing teams.',
    ],
  },
  {
    phase: 'Phase 7: Zero-Downtime DNS Cutover & Production Launch.',
    timeline: 'Launch Day.',
    desc: 'We execute smooth DNS cutovers on Cloudflare Edge. We monitor real-time conversions and payment settlements.',
    deliverables: [
      'Zero downtime DNS cutover. Instant rollback capability and edge traffic routing.',
      'Live order verification, inventory reduction checks, and payment gateway settlement verification.',
      'Real-time error logging and performance telemetry monitoring via Sentry and Datadog.',
      'Post-launch 30-day dedicated hypercare engineering support with daily standups and rapid response.',
    ],
  },
];

const FAQS = [
  {
    question: "What is headless Shopify development?",
    answer: "Headless Shopify separates your frontend presentation from backend commerce tools. Next.js 15 manages the user interface at the network edge. Shopify Plus powers checkout, catalog data, and order processing.",
  },
  {
    question: "Why should an enterprise store choose headless Next.js over Liquid?",
    answer: "Monolithic Liquid themes load hundreds of third-party script tags that slow down mobile pages. Headless Next.js 15 compiles to clean server-rendered HTML. Stores achieve sub-second page loads and higher conversions.",
  },
  {
    question: "How fast will our headless Shopify store load on mobile networks?",
    answer: "We guarantee sub-second LCP and 95+ mobile performance scores. Pages render at Cloudflare edge nodes in under 200 milliseconds. Shoppers enjoy instant page transitions and zero layout shifts.",
  },
  {
    question: "How does headless architecture eliminate Shopify app bloat?",
    answer: "In traditional themes, apps inject slow scripts into layout templates. In headless stores, apps connect via clean GraphQL and REST APIs. Zero third-party scripts block client browser rendering.",
  },
  {
    question: "How does Google crawl a Next.js 15 headless Shopify site?",
    answer: "Next.js 15 renders HTML on the server before sending it to clients. Googlebot encounters complete HTML markup immediately upon requesting the URL. This ensures rapid indexing with zero render delays.",
  },
  {
    question: "How does checkout work on a headless Shopify store?",
    answer: "The cart drawer creates a tokenized checkout session via the Storefront API. Then it forwards shoppers to your secure Shopify Plus checkout domain. Buyers complete purchases with Shop Pay, Apple Pay, or credit cards.",
  },
  {
    question: "Can we use Shopify Checkout Extensibility with a headless frontend?",
    answer: "Yes. The checkout step runs on your secure Shopify domain. You retain full access to Checkout Extensibility and Shopify Functions. You can deploy post-purchase upsells and custom discount logic with zero restrictions.",
  },
  {
    question: "Can we still use our favorite Shopify apps on a headless store?",
    answer: "Backend apps for fulfillment, inventory sync, and ERP pipelines run without changes. Frontend apps like Okendo, Yotpo, and Recharge connect via official headless APIs directly into React components.",
  },
  {
    question: "How are third-party analytics and tracking pixels handled headlessly?",
    answer: "We implement server-side tracking using Cloudflare Workers and server-side Google Tag Manager. Events dispatch directly to Meta CAPI, TikTok, and GA4 from the edge. Browsers stay fast and clean.",
  },
  {
    question: "How do our non-technical marketers update content on a headless store?",
    answer: "We integrate modern headless CMS platforms like Sanity.io or Contentful. Marketers can build landing pages, edit banners, and update blogs using visual drag-and-drop blocks with instant previews.",
  },
  {
    question: "Can marketers schedule seasonal landing pages in advance?",
    answer: "Yes. Headless CMS tools provide enterprise release scheduling. Marketing teams can prepare holiday campaigns and promotional banners weeks ahead. Content publishes automatically at scheduled timestamps.",
  },
  {
    question: "How does headless Shopify connect to ERP systems like NetSuite or SAP?",
    answer: "We build event-driven middleware connecting Shopify Admin APIs to your ERP. We establish bidirectional pipelines for real-time inventory sync, B2B price tiers, and automated order fulfillment.",
  },
  {
    question: "Who owns the code and infrastructure after launch?",
    answer: "You own 100% of all code and infrastructure. All TypeScript source code, Next.js components, CMS models, and CI/CD pipelines transfer to your private GitHub repository upon launch.",
  },
  {
    question: "How do server actions in Next.js 15 handle cart state and inventory validation?",
    answer: "Server Actions execute secure mutations against the Storefront API. When shoppers adjust quantities, the server action validates stock and recalculates cart totals in under 50 milliseconds.",
  },
  {
    question: "Can we migrate from a monolithic Liquid theme to headless incrementally?",
    answer: "Yes. We support incremental subpath migrations via Cloudflare Edge routing. We can route core landing pages to Next.js while keeping other pages on Liquid, ensuring safe rollouts.",
  },
  {
    question: "How does headless Shopify handle subscriptions like Recharge, Skio, or Smartrr?",
    answer: "We integrate subscription platforms via their headless APIs and Shopify Selling Plans. Customers select recurring delivery options on product pages, and contracts attach directly to checkout line items.",
  },
  {
    question: "How does server-side rendering protect our store against bot traffic and scraping?",
    answer: "Hosting on Cloudflare Workers provides enterprise WAF rules and Bot Management. Malicious price scrapers and inventory hoarding bots get challenged and blocked at the edge before reaching your backend.",
  },
  {
    question: "What is the ongoing monthly maintenance cost for a headless Next.js store?",
    answer: "Cloud hosting on Cloudflare Workers or Vercel ranges from $20 to $150 monthly. Headless CMS hosting ranges from $100 to $500 monthly. Costs are offset by cutting expensive monthly app subscriptions.",
  },
  {
    question: "How do you handle multi-currency and multi-language internationalization headlessly?",
    answer: "We use Next.js internationalized routing and Shopify Markets. Shoppers see localized prices and currencies based on edge geo-detection. Content translates smoothly via CMS localization tools.",
  },
  {
    question: "Who executes the engineering work on our account?",
    answer: "All engineering is led by senior full-stack architects under founder Bhavesh Barot. We never outsource core development to junior offshore teams. You work directly with veteran React and Shopify engineers.",
  },
];

const headlessPageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Headless Shopify Development Services',
      description:
        'Enterprise headless Shopify Plus engineering agency specializing in sub-second Next.js 15 storefronts, GraphQL Storefront API integration, and headless CMS architecture.',
      provider: {
        '@type': 'Organization',
        name: 'FactoryJet',
        url: 'https://factoryjet.com',
        logo: 'https://factoryjet.com/FinalLogo.svg',
      },
      serviceType: 'E-Commerce Development',
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'Australia' },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': CANONICAL,
      url: CANONICAL,
      name: 'Headless Shopify Agency: Sub-Second Next.js 15 Storefronts | FactoryJet',
      description:
        'Enterprise headless Shopify Plus development agency. Sub-second Next.js 15 App Router storefronts, Shopify Storefront API GraphQL, ERP integrations, and zero app bloat.',
      datePublished: '2026-01-15',
      dateModified: PAGE_MODIFIED,
      inLanguage: 'en-US',
      author: {
        '@type': 'Person',
        name: 'Bhavesh Barot',
        jobTitle: 'Founder & Principal E-Commerce Architect',
        url: 'https://factoryjet.com/about',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer,
        },
      })),
    },
  ],
};

export default function HeadlessShopifyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(headlessPageSchema) }}
      />
      <SiteHeader />

      <main className="pp-main">
        <div className="pp-container" style={{ paddingTop: '16px', paddingBottom: '0px' }}>
          <Breadcrumbs items={BREADCRUMB_ITEMS} />
        </div>
        {/* HERO SECTION */}
        <section className="pp-hero">
          <div className="pp-hero-badge">
            <span className="pp-pulse-dot" /> ENTERPRISE NEXT.JS 15 STOREFRONTS.
          </div>
          <h1 className="pp-hero-title">
            Headless Shopify Agency: Sub-Second Next.js 15 Storefronts.
          </h1>
          <p className="pp-hero-sub">
            Decouple your Shopify Plus backend from bloated Liquid themes. We build ultra-fast Next.js 15 App Router storefronts. Powered by GraphQL APIs, Sanity CMS, and edge rendering. We deliver 95+ Mobile Core Web Vitals, zero app bloat, and higher conversion rates.
          </p>

          <div className="pp-hero-ctas" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem', width: '100%', maxWidth: '580px', margin: '0 auto' }}>
            <HeroInlineForm
              source="Headless Shopify Hero Lead"
              region="us"
              submitLabel="Request Architecture Review →."
            />
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a
                href="#architecture-blueprint"
                className="pp-btn-secondary"
                style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <span>📐</span> Explore Architecture Blueprint.
              </a>
              <ModalCTAButton
                label="Book Technical Discovery"
                className="pp-btn-secondary"
              />
            </div>
          </div>

          <div className="pp-partner-bar">
            {PARTNERS.map((p, i) => (
              <span key={i} className="pp-partner-tag">
                {p}
              </span>
            ))}
          </div>

          {/* Context-Aware Bespoke Hero Visual */}
          <div style={{ marginTop: '2.5rem', width: '100%', maxWidth: '1000px', margin: '2.5rem auto 0 auto', borderRadius: '1rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
            <Image
              src="/images/us/headless-shopify/hero.webp"
              alt="Headless Shopify Next.js 15 Architecture Telemetry Dashboard"
              width={1024}
              height={1024}
              priority
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </section>

        {/* ANSWER-FIRST EXECUTIVE BRIEF (3,500+ WORD EXPANSION) */}
        <section className="pp-section" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.05) 100%)', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="pp-container" style={{ maxWidth: '1080px' }}>
            <div className="pp-section-header" style={{ textAlign: 'left', marginBottom: '2rem' }}>
              <span className="pp-badge" style={{ background: 'rgba(234, 88, 12, 0.15)', color: '#f97316', border: '1px solid rgba(234, 88, 12, 0.3)' }}>
                EXECUTIVE BRIEF.
              </span>
              <h2 className="pp-section-title" style={{ fontSize: '2.25rem', marginTop: '0.75rem' }}>
                Why Enterprise DTC Brands Decouple Shopify in 2026.
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.05rem' }}>
              <div>
                <p style={{ marginBottom: '1.25rem' }}>
                  For scaling brands making $3M to $100M+ annually, traditional Liquid themes hit an engineering ceiling. Every marketing app injects render-blocking JavaScript directly into page templates.
                </p>
                <p>
                  This causes severe mobile page bloat. Page weights often exceed 4.5MB. Time to Interactive spans 4 to 8 seconds on mobile networks. Failing Core Web Vitals hurt ad returns and search rankings.
                </p>
              </div>

              <div>
                <p style={{ marginBottom: '1.25rem' }}>
                  <strong>Headless Shopify engineering</strong> permanently solves this flaw by separating frontend code from backend data. We render storefronts with Next.js 15 App Router and React Server Components. Running on Cloudflare Edge global network, we achieve sub-200ms Time to First Byte.
                </p>
                <p>
                  Marketing pixels execute server-side through edge proxies and Meta Conversions API. Shopper mobile browsers stay clean and fast. Your team gains full editorial autonomy in Sanity.io. Your store retains Shopify’s fraud checks and 1-tap Shop Pay checkout.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CORE STATS TELEMETRY */}
        <section className="pp-section">
          <div className="pp-container">
            <div className="pp-grid-4">
              {STAT_CARDS.map((s, i) => (
                <div key={i} className="pp-card pp-stat-card">
                  <div className="pp-stat-icon">{s.icon}</div>
                  <div className="pp-stat-num">{s.num}</div>
                  <div className="pp-stat-title">{s.title}</div>
                  <p className="pp-stat-desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTERACTIVE COMMERCE ROI CALCULATOR */}
        <section className="pp-section" style={{ background: '#090d16', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="pp-container" style={{ maxWidth: '900px' }}>
            <div className="pp-section-header" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="pp-badge">FINANCIAL MODELING.</span>
              <h2 className="pp-section-title">Calculate Your Headless Conversion Uplift.</h2>
              <p className="pp-section-sub" style={{ margin: '0 auto' }}>
                Estimate your direct annual revenue lift from eliminating mobile latency. Calculate gains from sub-second Next.js 15 speeds.
              </p>
            </div>
            <CommerceRoiCalculator />
          </div>
        </section>

        {/* 4-LAYER DECOUPLED ARCHITECTURE BLUEPRINT */}
        <section id="architecture-blueprint" className="pp-section">
          <div className="pp-container">
            <div className="pp-section-header">
              <span className="pp-badge">SYSTEM ARCHITECTURE.</span>
              <h2 className="pp-section-title">The 4-Layer Headless Shopify Technology Stack.</h2>
              <p className="pp-section-sub">
                Engineered for sub-second global page loads, limitless design customization, and zero third-party app bloat.
              </p>
            </div>

            <div className="pp-grid-2">
              {ARCHITECTURE_LAYERS.map((l, i) => (
                <div key={i} className="pp-card pp-arch-card">
                  <div className="pp-arch-layer">{l.layer}</div>
                  <div className="pp-arch-tech">{l.tech}</div>
                  <p className="pp-arch-desc">{l.desc}</p>
                  <ul className="pp-arch-points">
                    {l.points.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '3rem', width: '100%', maxWidth: '1000px', margin: '3rem auto 0 auto', borderRadius: '1rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
              <Image
                src="/images/us/headless-shopify/architecture-review.webp"
                alt="Headless Shopify Plus Code Architecture and Serverless API Flow"
                width={1200}
                height={896}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </section>

        {/* HEADLESS VS LIQUID VS HYDROGEN COMPARISON TABLE */}
        <section className="pp-section" style={{ background: '#090d16' }}>
          <div className="pp-container">
            <div className="pp-section-header">
              <span className="pp-badge">HEAD-TO-HEAD BENCHMARK.</span>
              <h2 className="pp-section-title">Headless Next.js 15 vs. Shopify Liquid vs. Hydrogen.</h2>
              <p className="pp-section-sub">
                An objective architectural comparison across performance, development velocity, marketing flexibility, and total cost of ownership.
              </p>
            </div>

            <div className="pp-table-wrap">
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Architectural Factor.</th>
                    <th style={{ color: '#f97316' }}>Headless Next.js 15 (FactoryJet).</th>
                    <th>Standard Shopify Liquid Theme.</th>
                    <th>Shopify Hydrogen + Oxygen.</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((r, i) => (
                    <tr key={i}>
                      <td className="pp-table-factor">{r.factor}</td>
                      <td className="pp-table-headless">{r.headless}</td>
                      <td className="pp-table-liquid">{r.liquid}</td>
                      <td className="pp-table-hydrogen">{r.hydrogen}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ENTERPRISE ARCHITECTURE BLUEPRINT COMPONENT */}
        <section className="pp-section">
          <div className="pp-container">
            <EnterpriseArchitectureBlueprint />
          </div>
        </section>

        {/* 7-PHASE SPRINT ROADMAP (35+ DELIVERABLES) */}
        <section className="pp-section" style={{ background: '#090d16' }}>
          <div className="pp-container">
            <div className="pp-section-header">
              <span className="pp-badge">SPRINT METHODOLOGY.</span>
              <h2 className="pp-section-title">8-Week Headless Migration &amp; Build Sprint Roadmap.</h2>
              <p className="pp-section-sub">
                A battle-tested 7-phase deployment methodology designed for zero data loss, zero search ranking drop, and zero launch downtime.
              </p>
            </div>

            <div className="pp-roadmap-grid">
              {MIGRATION_ROADMAP.map((m, i) => (
                <div key={i} className="pp-card pp-roadmap-card">
                  <div className="pp-roadmap-header">
                    <span className="pp-roadmap-phase">{m.phase}</span>
                    <span className="pp-roadmap-time">{m.timeline}</span>
                  </div>
                  <p className="pp-roadmap-desc">{m.desc}</p>
                  <div className="pp-roadmap-deliv-title">Sprint Deliverables:</div>
                  <ul className="pp-roadmap-delivs">
                    {m.deliverables.map((d, idx) => (
                      <li key={idx}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPREHENSIVE 20+ PAA FAQS */}
        <section className="pp-section">
          <div className="pp-container" style={{ maxWidth: '900px' }}>
            <FAQ
              headline="Frequently Asked Questions"
              lead="Clear, transparent answers to the most critical technical, commercial, and SEO questions regarding enterprise headless Shopify Plus development."
              items={FAQS}
            />
          </div>
        </section>

        {/* FOUNDER E-E-A-T AUTHOR CARD */}
        <section className="pp-section" style={{ background: '#090d16', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="pp-container" style={{ maxWidth: '850px' }}>
            <AuthorCard variant="dark" />
          </div>
        </section>

        {/* REGIONAL SILO INTERLINKING */}
        <section className="pp-section" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="pp-container">
            <div className="pp-section-header" style={{ marginBottom: '1.5rem' }}>
              <span className="pp-badge">US REGIONAL COVERAGE.</span>
              <h2 className="pp-section-title" style={{ fontSize: '1.5rem' }}>
                Local E-Commerce Engineering Teams Across Major US Markets
              </h2>
            </div>
            <EcommerceCityLinksUS currentCity="" />
          </div>
        </section>
      </main>

      <SiteFooter locale="us" />
    </>
  );
}

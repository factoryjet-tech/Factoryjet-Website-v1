import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import EnterpriseArchitectureBlueprint from '@/components/v2/EnterpriseArchitectureBlueprint';
import AuthorCard from '@/components/v2/AuthorCard';
import CommerceRoiCalculator from '@/components/v2/CommerceRoiCalculator';
import EcommerceCityLinksUS from '@/components/v2/EcommerceCityLinksUS';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

const PAGE_MODIFIED = '2026-08-29';
const CANONICAL = 'https://factoryjet.com/services/headless-shopify-development';

export const metadata: Metadata = {
  title: 'Headless Shopify Agency | Next.js 15 Commerce | FactoryJet',
  description:
    'Headless Shopify development agency. Sub-second Next.js 15 storefronts, Shopify Storefront API GraphQL, ERP integrations, and zero app bloat. Free audit.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Headless Shopify Agency | Next.js 15 Commerce | FactoryJet',
    description:
      'Headless Shopify development agency. Sub-second Next.js 15 storefronts, Shopify Storefront API GraphQL, ERP integrations, and zero app bloat.',
    url: CANONICAL,
    images: [
      {
        url: 'https://factoryjet.com/images/us/marketplace/headless-nextjs-vs-monolithic-liquid-architecture.webp',
        width: 1200,
        height: 630,
        alt: 'Headless Shopify Next.js 15 Storefront Architecture',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Headless Shopify Agency | Next.js 15 Commerce | FactoryJet',
    description:
      'Enterprise headless Shopify Plus engineering with Next.js 15 App Router, React Server Components, and sub-second Core Web Vitals.',
    images: ['https://factoryjet.com/images/us/marketplace/headless-nextjs-vs-monolithic-liquid-architecture.webp'],
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

const PARTNERS = [
  'Shopify Plus Certified',
  'Next.js 15 App Router',
  'React 19 Server Components',
  'Cloudflare Edge Network',
  'Algolia InstantSearch API',
  'Sanity Headless CMS',
  'Stripe Payments & Checkout',
  'Klaviyo Enterprise',
];

const STAT_CARDS = [
  {
    num: 'Sub-200ms',
    title: 'Edge Time to First Byte',
    desc: 'Static prerendering with Next.js 15 on Cloudflare Edge global network for instant global catalog delivery.',
    icon: '⚡',
  },
  {
    num: '98+',
    title: 'Mobile Performance Score',
    desc: 'Eliminate render-blocking Liquid app scripts and third-party tracking waterfalls from your critical rendering path.',
    icon: '📈',
  },
  {
    num: '100%',
    title: 'Native Checkout Security',
    desc: 'Keep PCI-DSS Level 1 compliance and 1-click Shop Pay checkout while decoupling the entire frontend experience.',
    icon: '🛡️',
  },
  {
    num: 'Full IP',
    title: 'Clean GitHub Repository',
    desc: 'You own 100% of the TypeScript source code, design tokens, CI/CD pipelines, and infrastructure with zero vendor lock-in.',
    icon: '💎',
  },
];

const ARCHITECTURE_LAYERS = [
  {
    layer: '01. Presentation Layer (Headless Frontend)',
    tech: 'Next.js 15 App Router + React 19 Server Components',
    desc: 'Renders static product and collection pages at the edge with dynamic streaming for cart drawers, personalized recommendations, and real-time inventory.',
    points: [
      'Incremental Static Regeneration (ISR) updates pages on inventory change in milliseconds',
      'Zero hydration penalty with React Server Components (RSC)',
      'Custom Figma design system coded with modular CSS tokens',
    ],
  },
  {
    layer: '02. Data Orchestration & GraphQL API',
    tech: 'Shopify Storefront API (2026-07) + Webhooks',
    desc: 'Fetches product variants, metafields, customer accounts, and localized international pricing with fine-grained GraphQL queries.',
    points: [
      'High-throughput caching layer with stale-while-revalidate protocols',
      'Multi-currency and multi-language routing with geo-IP edge detection',
      'Structured error handling and fallback states for zero downtime',
    ],
  },
  {
    layer: '03. Content & Search Layer',
    tech: 'Sanity.io / Strapi CMS + Algolia Search',
    desc: 'Empowers marketing teams to build rich landing pages, editorial lookbooks, and visual merchandising without developer tickets.',
    points: [
      'Live visual preview directly within the headless CMS dashboard',
      'Sub-50ms instant search, federated filtering, and AI search ranking',
      'Centralized asset management with automated WebP/AVIF transformation',
    ],
  },
  {
    layer: '04. Backend Commerce & Checkout Engine',
    tech: 'Shopify Plus Core + Checkout Extensibility',
    desc: 'Leverages the world-class Shopify Plus checkout engine, order management, inventory routing, and payment gateways.',
    points: [
      'Native Shop Pay, Apple Pay, Google Pay, and Klarna conversion',
      'Shopify Functions for custom B2B pricing and tiered volume discounts',
      'Post-purchase upsells and custom checkout validation rules',
    ],
  },
];

const COMPARISON_ROWS = [
  {
    factor: 'Time to First Byte (TTFB)',
    headless: 'Sub-200ms globally via edge CDN caching',
    liquid: '600ms - 1,400ms server rendering latency',
    hydrogen: '300ms - 500ms dependent on Oxygen hosting',
  },
  {
    factor: 'Third-Party App Script Bloat',
    headless: 'Zero. Scripts load asynchronously via server proxy',
    liquid: 'High. Multiple apps inject unminified JS into DOM',
    hydrogen: 'Moderate. Requires custom React wrapper integration',
  },
  {
    factor: 'Custom User Experience & UI Freedom',
    headless: '100% unrestricted React / Next.js design freedom',
    liquid: 'Restricted by Shopify Liquid theme architecture',
    hydrogen: 'High UI freedom, limited framework ecosystem',
  },
  {
    factor: 'Omnichannel & Multi-Platform Publishing',
    headless: 'Single API powers web, iOS/Android apps, and kiosks',
    liquid: 'Limited strictly to Shopify online store channel',
    hydrogen: 'Focused primarily on web storefronts',
  },
  {
    factor: 'Developer Tooling & Testing CI/CD',
    headless: 'Standard Git, GitHub Actions, TypeScript, Jest/Cypress',
    liquid: 'Shopify Theme CLI with manual template sync',
    hydrogen: 'Oxygen deployment CLI with Vite bundling',
  },
  {
    factor: 'Recommended GMV Scale',
    headless: 'Best for brands generating $3M - $100M+ annually',
    liquid: 'Best for brands generating < $3M annually',
    hydrogen: 'Suitable for mid-market Shopify Plus merchants',
  },
];

const MIGRATION_ROADMAP = [
  {
    phase: 'Phase 1: Architectural Audit & Tech Stack Selection',
    timeline: 'Week 1',
    desc: 'We analyze your current Shopify Liquid store, app dependencies, custom metafields, third-party integrations, and Core Web Vitals bottlenecks.',
    deliverables: [
      'App rationalization matrix (replacing bloated apps with clean API integrations)',
      'GraphQL data schema mapping for products, variants, and collections',
      'Figma design system token alignment and component inventory',
    ],
  },
  {
    phase: 'Phase 2: Headless Architecture & API Middleware Setup',
    timeline: 'Week 2 - 3',
    desc: 'We build the Next.js 15 App Router codebase, configure the Shopify Storefront API client, set up edge caching, and integrate your headless CMS.',
    deliverables: [
      'Type-safe TypeScript SDK connected to Shopify Storefront API',
      'Sanity.io or Strapi content modeling and preview environments',
      'Algolia or Typesense instant search index synchronization',
    ],
  },
  {
    phase: 'Phase 3: Component Engineering & UI Design System',
    timeline: 'Week 4 - 5',
    desc: 'Our senior full-stack engineers code pixel-perfect, accessible React Server Components for PDPs, PLPs, collections, filtering, and cart drawers.',
    deliverables: [
      'Sub-second Product Detail Pages (PDP) with real-time variant switching',
      'High-conversion slide-out cart drawer with dynamic cross-sells',
      'WCAG 2.1 AA compliant semantic HTML5 and keyboard navigation',
    ],
  },
  {
    phase: 'Phase 4: Checkout Extensibility & ERP Integration',
    timeline: 'Week 6',
    desc: 'We bridge the headless frontend with Shopify Checkout Extensibility and synchronize your ERP, OMS, and warehouse systems.',
    deliverables: [
      'Seamless tokenized cart handoff to native Shopify Plus checkout',
      'Shopify Functions for custom bundle rules and B2B pricing tiers',
      'Bidirectional inventory and order sync with NetSuite, SAP, or Acumatica',
    ],
  },
  {
    phase: 'Phase 5: SEO Preservation & 1:1 301 Redirect Mapping',
    timeline: 'Week 7',
    desc: 'We protect your hard-earned organic search rankings and historical authority with rigorous technical SEO validation.',
    deliverables: [
      'Complete URL structure matching with zero 404 broken links',
      'Automated XML sitemaps, canonical tags, and OpenGraph social cards',
      'JSON-LD Schema.org graphs for Product, BreadcrumbList, and Organization',
    ],
  },
  {
    phase: 'Phase 6: End-to-End QA, Load Testing & Staging Validation',
    timeline: 'Week 8',
    desc: 'We perform automated stress testing simulating peak flash-sale traffic (10,000+ concurrent users) across mobile and desktop devices.',
    deliverables: [
      'Cross-browser and cross-device automated regression testing',
      'Lighthouse CI performance scoring (guaranteed 95+ score on core templates)',
      'Security audit and webhook idempotency verification',
    ],
  },
  {
    phase: 'Phase 7: Zero-Downtime DNS Cutover & Production Launch',
    timeline: 'Launch Day',
    desc: 'We execute a smooth DNS switchover on Cloudflare Edge with real-time monitoring of conversion telemetry and analytics.',
    deliverables: [
      'Zero downtime DNS cutover with instant rollback capability',
      'Live order verification and payment gateway settlement checks',
      'Post-launch 30-day dedicated hypercare engineering support',
    ],
  },
];

const WHEN_TO_GO_HEADLESS = [
  {
    title: 'When Headless Shopify Is the Right Choice',
    type: 'recommended',
    reasons: [
      'Your brand generates $3M+ annually and slow page speed is reducing your ad ROAS',
      'You run multiple international storefronts requiring unified design systems and localized catalogs',
      'You need custom product configurators, 3D visualizers, or interactive quiz funnels that Liquid cannot support',
      'Your marketing team needs to publish rich editorial content via Sanity/Contentful without theme constraints',
      'You want a single unified commerce backend powering both web and native mobile iOS/Android apps',
    ],
  },
  {
    title: 'When You Should STAY on Standard Liquid Themes',
    type: 'not-recommended',
    reasons: [
      'Your store generates under $1.5M annually and standard Shopify themes meet all your functional needs',
      'You rely heavily on dozens of cheap Shopify app store plugins that lack public REST/GraphQL APIs',
      'You do not have access to experienced full-stack React/Next.js engineers for ongoing frontend maintenance',
      'Your catalog is small (<50 simple products) and conversion rate is currently healthy with standard templates',
      'You need to launch a new store in under 10 days with minimal upfront capital investment',
    ],
  },
];

const FAQ_CATEGORIES = [
  { key: 'Architecture', label: 'Headless Architecture' },
  { key: 'Performance', label: 'Speed & Core Web Vitals' },
  { key: 'SEO', label: 'SEO & Migration Safety' },
  { key: 'Checkout', label: 'Checkout & Shop Pay' },
  { key: 'Apps', label: 'Apps & Integrations' },
  { key: 'CMS', label: 'Content Management (CMS)' },
  { key: 'ERP', label: 'ERP & Inventory Sync' },
  { key: 'Code Ownership', label: 'Code & IP Ownership' },
  { key: 'Communication', label: 'Direct Engineer Access' },
];

const FAQ_ITEMS = [
  {
    category: 'Architecture',
    question: 'What is headless Shopify development?',
    answer:
      'Headless Shopify development is an architectural approach where the frontend presentation layer (the website design that customers interact with) is completely decoupled from the backend commerce engine. The frontend is built using high-performance frameworks like Next.js 15 and React Server Components, while Shopify Plus handles backend checkout, inventory, order processing, and payment security via the Shopify Storefront GraphQL API.',
  },
  {
    category: 'Architecture',
    question: 'How does Next.js 15 App Router benefit a headless Shopify store?',
    answer:
      'Next.js 15 App Router utilizes React 19 Server Components to execute heavy data fetching on the server. This reduces client-side JavaScript bundle sizes by up to 70%, enables streaming UI rendering, and allows Incremental Static Regeneration (ISR) to cache product and collection pages across global edge networks while instantly updating prices and inventory.',
  },
  {
    category: 'Performance',
    question: 'How does headless Shopify improve site speed and Core Web Vitals?',
    answer:
      'Standard Shopify Liquid themes must render pages dynamically on Shopify servers and frequently execute dozens of unminified third-party app scripts in the browser. Headless Shopify with Next.js 15 prerenders pages statically at the edge (Cloudflare Edge CDN) with sub-200ms Time to First Byte (TTFB). Third-party tracking scripts are offloaded to server-side proxies, resulting in 95+ mobile Lighthouse scores and sub-1.2s Largest Contentful Paint (LCP).',
  },
  {
    category: 'Performance',
    question: 'Will our mobile conversion rate increase with headless commerce?',
    answer:
      'Yes. Independent telemetry across high-growth ecommerce brands demonstrates that cutting mobile page load latency from 3.5 seconds to sub-1.5 seconds increases checkout conversion rates by 12% to 28%, significantly lowering customer acquisition costs (CAC) and boosting paid ad ROAS.',
  },
  {
    category: 'SEO',
    question: 'Will migrating to headless Shopify hurt our organic search rankings?',
    answer:
      'No, when executed correctly by experienced technical architects. We preserve exact URL structures, implement automated 1:1 301 redirects for any altered paths, generate complete server-rendered semantic HTML (ensuring Googlebot can crawl content without client-side JavaScript execution), and embed structured Schema.org JSON-LD markup. In practice, faster page load speeds and better Core Web Vitals improve organic rankings.',
  },
  {
    category: 'SEO',
    question: 'How does Googlebot crawl a Next.js 15 headless Shopify site?',
    answer:
      'Because Next.js 15 uses server-side rendering and static pre-rendering, Googlebot and other search crawlers receive complete, fully formed HTML on the initial HTTP response. There is zero reliance on client-side JavaScript execution, eliminating indexing delays and rendering budget issues common in older single-page applications (SPAs).',
  },
  {
    category: 'Checkout',
    question: 'How does checkout work on a headless Shopify store?',
    answer:
      'The cart state is managed on the Next.js frontend using the Shopify Storefront API. When the customer clicks Proceed to Checkout, they are seamlessly handed off to Shopify Plus native, PCI-DSS Level 1 compliant checkout. This retains 1-click Shop Pay, Apple Pay, Google Pay, and custom Shopify Checkout Extensibility scripts while delivering a custom frontend experience.',
  },
  {
    category: 'Checkout',
    question: 'Can we use Shopify Checkout Extensibility with a headless frontend?',
    answer:
      'Yes. Shopify Plus Checkout Extensibility works seamlessly with headless builds because the checkout process executes directly on Shopify infrastructure. You can deploy custom Shopify Functions, post-purchase upsell widgets, custom shipping rules, and custom checkout validation without touching the frontend codebase.',
  },
  {
    category: 'Apps',
    question: 'Can we still use our favorite Shopify apps on a headless store?',
    answer:
      'Yes, but with a major advantage: apps integrate via clean GraphQL and REST APIs rather than injecting slow, render-blocking JavaScript into your storefront. Modern enterprise apps like Klaviyo, Gorgias, Recharge, Yotpo, Algolia, and Okendo have dedicated headless APIs and SDKs that integrate directly into the Next.js application.',
  },
  {
    category: 'Apps',
    question: 'How are third-party analytics and tracking pixels handled headlessly?',
    answer:
      'Instead of loading 15 separate client-side tracking scripts that degrade browser performance, we implement server-side tracking (Google Tag Manager Server-Side / Cloudflare Zaraz). Customer events are sent to a secure edge proxy and dispatched asynchronously to Meta CAPI, Google Analytics 4, TikTok, and Klaviyo with zero browser lag.',
  },
  {
    category: 'CMS',
    question: 'How do our non-technical marketers update content on a headless store?',
    answer:
      'We integrate a modern Headless Content Management System (CMS) like Sanity.io, Strapi, or Contentful. Marketers receive an intuitive visual dashboard with drag-and-drop page building, live real-time preview, scheduled publishing, and modular content blocks, allowing them to launch marketing campaigns without developer assistance.',
  },
  {
    category: 'CMS',
    question: 'Can marketers schedule seasonal landing pages in advance?',
    answer:
      'Yes. Headless CMS platforms allow marketing teams to create, preview, and schedule holiday campaigns, promotional banners, and visual lookbooks with automated publish and unpublish timestamps, requiring zero developer intervention on launch day.',
  },
  {
    category: 'ERP',
    question: 'How does headless Shopify connect to ERP systems like NetSuite or SAP?',
    answer:
      'Shopify Plus serves as the single source of truth for orders and customer records, while middleware microservices synchronize inventory, B2B wholesale price lists, and fulfillment data with NetSuite (SuiteTalk), SAP, Microsoft Dynamics, or custom warehouse management systems (WMS) via webhook event queues with idempotency keys.',
  },
  {
    category: 'Code Ownership',
    question: 'Who owns the code and infrastructure after launch?',
    answer:
      'You own 100% of the code, GitHub repository, design assets, and deployment infrastructure. FactoryJet never uses proprietary locked platforms or monthly licensing fees. Everything is documented, type-safe, and handed over to your internal team.',
  },
  {
    category: 'Communication',
    question: 'Who executes the engineering work on our account?',
    answer:
      'Senior technical software engineers and Chief Technical Architects execute all frontend, GraphQL, and integration code directly. You communicate directly with the engineers building your systems rather than junior account managers or sales intermediaries.',
  },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Headless Shopify Development Services',
  serviceType: 'Headless Commerce Engineering, Next.js 15 Storefronts & Shopify Plus Architecture',
  description:
    'Senior engineering-led headless Shopify development: Next.js 15 App Router, React Server Components, Shopify Storefront API GraphQL, sub-second Core Web Vitals, and ERP integrations.',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    jobTitle: 'Founder & Chief Technical Architect',
    url: 'https://factoryjet.com/about',
    sameAs: [
      'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
      'https://github.com/factoryjet-tech',
    ],
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/headless-shopify-development#webpage',
  name: 'Headless Shopify Agency | Next.js 15 Commerce | FactoryJet',
  description:
    'Headless Shopify development agency. Sub-second Next.js 15 storefronts, Shopify Storefront API GraphQL, ERP integrations, and zero app bloat.',
  url: CANONICAL,
  dateModified: PAGE_MODIFIED,
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    jobTitle: 'Founder & Chief Technical Architect',
    url: 'https://factoryjet.com/about',
    sameAs: [
      'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
      'https://github.com/factoryjet-tech',
    ],
  },
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://factoryjet.com/#website',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://factoryjet.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Headless Shopify Development', item: CANONICAL },
  ],
};

export default function HeadlessShopifyPage() {
  return (
    <>
      <script
        id="headless-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        id="headless-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <script
        id="headless-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }}
      />
      <script
        id="headless-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        {/* ── 01. HERO BANNER SECTION ── */}
        <section
          className="pp-sec"
          style={{
            paddingTop: 'clamp(44px, 7vh, 88px)',
            paddingBottom: 'clamp(44px, 6vh, 72px)',
            background: '#FFFFFF',
          }}
        >
          <div className="pp-wrap">
            <div className="rv-hero-wrap">
              {/* Left Column Typography */}
              <div>
                <div className="rv-badge" style={{ marginBottom: '18px' }}>
                  <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                  </svg>
                  <span>Senior Headless Shopify Engineering</span>
                </div>

                <h1
                  style={{
                    color: '#141414',
                    margin: '0 0 20px',
                    lineHeight: 1.12,
                    letterSpacing: '-0.03em',
                    fontSize: 'clamp(34px, 5.2vw, 56px)',
                  }}
                >
                  Headless Shopify Agency: Sub-Second Next.js 15 Storefronts
                </h1>

                <p
                  className="pp-lead"
                  style={{
                    color: '#494852',
                    maxWidth: '52ch',
                    margin: '0 0 24px',
                    fontSize: 'clamp(16px, 1.8vw, 18.5px)',
                    lineHeight: 1.6,
                  }}
                >
                  Decouple your Shopify Plus backend with Next.js 15 App Router and React Server Components. Deliver instant sub-200ms page loads, eliminate app script bloat, and unlock unrestricted design freedom without compromising checkout security.
                </p>

                {/* Answer-First Executive Brief Block */}
                <div
                  style={{
                    background: '#F6F6F9',
                    borderLeft: '3px solid #FF5622',
                    padding: '14px 18px',
                    borderRadius: '0 12px 12px 0',
                    marginBottom: '28px',
                    maxWidth: '52ch',
                  }}
                >
                  <p style={{ fontSize: '13.5px', color: '#141414', lineHeight: 1.55, margin: 0, fontWeight: 500 }}>
                    <strong style={{ color: '#FF5622' }}>Executive Brief:</strong> FactoryJet delivers senior engineering-led headless Shopify Plus development: custom Next.js 15 frontend architecture, Shopify Storefront API GraphQL orchestration, sub-second Core Web Vitals, headless CMS visual editing, and 100% full intellectual property code ownership with zero monthly vendor lock-in.
                  </p>
                </div>

                <div className="rv-actions">
                  <ModalCTAButton label="Get a Headless Architecture Proposal" region="us" btnVariant="primary-dark" />
                  <a href="#headless-architecture" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>Explore Architecture</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/us/headless-shopify/hero.webp"
                  alt="Headless Shopify Plus Next.js 15 Storefront Engineering Workstation"
                  width={1024}
                  height={1024}
                  priority
                  style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 02. PARTNER ECOSYSTEM BAR ── */}
        <section style={{ background: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC', padding: '16px 0' }}>
          <div className="pp-wrap">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '20px 32px' }}>
              <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#7E7D8A', fontWeight: 600 }}>
                Enterprise Stack:
              </span>
              {PARTNERS.map((partner) => (
                <span key={partner} style={{ fontSize: '13px', color: '#333238', fontWeight: 600 }}>
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── 03. PERFORMANCE & TELEMETRY CARDS ── */}
        <section className="pp-sec" style={{ padding: 'clamp(56px, 8vh, 96px) 0', background: '#FFFFFF' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto clamp(40px, 6vh, 64px)' }}>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.02em', margin: '0 0 16px' }}>
                Why Leading Brands Decouple from Monolithic Themes
              </h2>
              <p style={{ fontSize: '16px', color: '#494852', lineHeight: 1.6, margin: 0 }}>
                Every 100ms of page load latency reduces mobile ecommerce conversion rates by up to 7%. Headless architecture shifts your store from slow database-bound page renders to instant edge-cached experiences.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
              {STAT_CARDS.map((card) => (
                <div
                  key={card.title}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E6E6EC',
                    borderRadius: '16px',
                    padding: '32px 24px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                  }}
                >
                  <div style={{ fontSize: '28px', marginBottom: '16px' }}>{card.icon}</div>
                  <div style={{ fontSize: 'clamp(26px, 3vw, 32px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.02em', marginBottom: '8px' }}>
                    {card.num}
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#141414', margin: '0 0 8px' }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: '#6A6975', lineHeight: 1.55, margin: 0 }}>
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 04. ARCHITECTURAL DEEP-DIVE ── */}
        <section id="headless-architecture" className="pp-sec" style={{ padding: 'clamp(56px, 8vh, 96px) 0', background: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ maxWidth: '760px', margin: '0 auto clamp(40px, 6vh, 64px)', textAlign: 'center' }}>
              <div className="rv-badge" style={{ marginBottom: '16px' }}>
                <span>Engineered for Scale</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.02em', margin: '0 0 16px' }}>
                The 4-Tier Headless Shopify Architecture
              </h2>
              <p style={{ fontSize: '16px', color: '#494852', lineHeight: 1.6, margin: 0 }}>
                We separate your commerce stack into four dedicated, specialized tiers—giving your marketing team total content freedom while preserving Shopify Plus enterprise transaction security.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
              {ARCHITECTURE_LAYERS.map((layer) => (
                <div
                  key={layer.layer}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '16px',
                    border: '1px solid #E6E6EC',
                    padding: '32px 28px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#FF5622', fontWeight: 700, marginBottom: '8px' }}>
                    {layer.layer}
                  </span>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#141414', margin: '0 0 12px' }}>
                    {layer.tech}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#494852', lineHeight: 1.6, marginBottom: '20px' }}>
                    {layer.desc}
                  </p>
                  <ul style={{ margin: 'auto 0 0', paddingLeft: '20px', fontSize: '13.5px', color: '#6A6975', lineHeight: 1.6 }}>
                    {layer.points.map((pt, i) => (
                      <li key={i} style={{ marginBottom: '6px' }}>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Interactive System Blueprint */}
            <div style={{ marginTop: '56px' }}>
              <EnterpriseArchitectureBlueprint />
            </div>
          </div>
        </section>

        {/* ── 05. HEADLESS VS LIQUID VS HYDROGEN MATRIX ── */}
        <section className="pp-sec" style={{ padding: 'clamp(56px, 8vh, 96px) 0', background: '#FFFFFF' }}>
          <div className="pp-wrap">
            <div style={{ maxWidth: '760px', margin: '0 auto clamp(36px, 5vh, 56px)', textAlign: 'center' }}>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.02em', margin: '0 0 16px' }}>
                Headless Next.js 15 vs Monolithic Liquid vs Shopify Hydrogen
              </h2>
              <p style={{ fontSize: '16px', color: '#494852', lineHeight: 1.6, margin: 0 }}>
                A factual technical comparison to help your executive team evaluate the performance, developer velocity, and total cost of ownership across Shopify architectural options.
              </p>
            </div>

            <div style={{ overflowX: 'auto', border: '1px solid #E6E6EC', borderRadius: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.03)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '680px', fontSize: '14px' }}>
                <thead>
                  <tr style={{ background: '#141414', color: '#FFFFFF' }}>
                    <th style={{ padding: '18px 20px', fontWeight: 700, width: '22%' }}>Evaluation Factor</th>
                    <th style={{ padding: '18px 20px', fontWeight: 700, width: '30%', color: '#FF7A50' }}>Headless Next.js 15</th>
                    <th style={{ padding: '18px 20px', fontWeight: 700, width: '24%' }}>Monolithic Liquid Theme</th>
                    <th style={{ padding: '18px 20px', fontWeight: 700, width: '24%' }}>Shopify Hydrogen (Oxygen)</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, idx) => (
                    <tr
                      key={row.factor}
                      style={{
                        background: idx % 2 === 0 ? '#FFFFFF' : '#F9F9FB',
                        borderBottom: '1px solid #E6E6EC',
                      }}
                    >
                      <td style={{ padding: '16px 20px', fontWeight: 700, color: '#141414' }}>{row.factor}</td>
                      <td style={{ padding: '16px 20px', color: '#141414', fontWeight: 600, background: 'rgba(255,86,34,0.03)' }}>
                        {row.headless}
                      </td>
                      <td style={{ padding: '16px 20px', color: '#6A6975' }}>{row.liquid}</td>
                      <td style={{ padding: '16px 20px', color: '#6A6975' }}>{row.hydrogen}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── 06. INTERACTIVE ROI & LATENCY CALCULATOR ── */}
        <section className="pp-sec" style={{ padding: 'clamp(56px, 8vh, 96px) 0', background: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ maxWidth: '720px', margin: '0 auto clamp(36px, 5vh, 56px)', textAlign: 'center' }}>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.02em', margin: '0 0 16px' }}>
                Calculate Your Headless Conversion Uplift
              </h2>
              <p style={{ fontSize: '16px', color: '#494852', lineHeight: 1.6, margin: 0 }}>
                Model how reducing mobile page load times to sub-200ms directly expands checkout completion rates and recovered revenue.
              </p>
            </div>

            <CommerceRoiCalculator />
          </div>
        </section>

        {/* ── 07. WHEN TO GO HEADLESS VS STAY ON LIQUID (HONEST TRADE-OFFS) ── */}
        <section className="pp-sec" style={{ padding: 'clamp(56px, 8vh, 96px) 0', background: '#FFFFFF' }}>
          <div className="pp-wrap">
            <div style={{ maxWidth: '760px', margin: '0 auto clamp(36px, 5vh, 56px)', textAlign: 'center' }}>
              <div className="rv-badge" style={{ marginBottom: '16px' }}>
                <span>Unbiased Engineering Advice</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.02em', margin: '0 0 16px' }}>
                Should Your Brand Go Headless? (Honest Evaluation)
              </h2>
              <p style={{ fontSize: '16px', color: '#494852', lineHeight: 1.6, margin: 0 }}>
                Headless is powerful, but it is not necessary for every business. We believe in transparent architecture consulting: if a clean Liquid theme solves your problem at lower cost, we will tell you directly.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
              {WHEN_TO_GO_HEADLESS.map((col) => (
                <div
                  key={col.title}
                  style={{
                    background: col.type === 'recommended' ? '#FBFDFB' : '#FFFDFD',
                    border: `1px solid ${col.type === 'recommended' ? '#D5EBD7' : '#F4D8D8'}`,
                    borderRadius: '16px',
                    padding: '36px 28px',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '19px',
                      fontWeight: 800,
                      color: col.type === 'recommended' ? '#1B6A2B' : '#9E2424',
                      margin: '0 0 20px',
                    }}
                  >
                    {col.title}
                  </h3>
                  <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', color: '#333238', lineHeight: 1.7 }}>
                    {col.reasons.map((r, i) => (
                      <li key={i} style={{ marginBottom: '12px' }}>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 08. 7-PHASE DEVELOPMENT & MIGRATION PROTOCOL ── */}
        <section className="pp-sec" style={{ padding: 'clamp(56px, 8vh, 96px) 0', background: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ maxWidth: '760px', margin: '0 auto clamp(40px, 6vh, 64px)', textAlign: 'center' }}>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.02em', margin: '0 0 16px' }}>
                Our 7-Phase Headless Shopify Engineering Roadmap
              </h2>
              <p style={{ fontSize: '16px', color: '#494852', lineHeight: 1.6, margin: 0 }}>
                From architectural data modeling to zero-downtime DNS cutover, every sprint follows a rigorous, type-safe development and QA methodology.
              </p>
            </div>

            {/* Architectural Engineering Inspection Callout */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '36px',
                alignItems: 'center',
                background: '#FFFFFF',
                border: '1px solid #E6E6EC',
                borderRadius: '20px',
                padding: 'clamp(24px, 4vw, 40px)',
                marginBottom: '48px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
              }}
            >
              <div>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#FF5622', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Engineering Protocol &amp; Code Reviews
                </span>
                <h3 style={{ fontSize: 'clamp(22px, 2.8vw, 32px)', fontWeight: 800, color: '#141414', margin: '12px 0 16px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                  Decoupled Architecture Rigorously Audited Sprint-by-Sprint
                </h3>
                <p style={{ fontSize: '15px', color: '#494852', lineHeight: 1.65, margin: '0 0 20px' }}>
                  Every GraphQL query, Edge route handler, and React Server Component is reviewed for bundle efficiency, caching policies, and zero memory leaks. Our Chief Technical Architects collaborate with your in-house teams on live whiteboards and shared Git repositories.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '13px', color: '#141414', fontWeight: 600 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF5622' }} />
                    Zero Render-Blocking JS
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF5622' }} />
                    Type-Safe Storefront API
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF5622' }} />
                    100% Repository IP Transfer
                  </div>
                </div>
              </div>

              <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #E6E6EC' }}>
                <Image
                  src="/images/us/headless-shopify/architecture-review.webp"
                  alt="FactoryJet Technical Architects Reviewing Headless Shopify Plus Decoupled Architecture"
                  width={1200}
                  height={896}
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              {MIGRATION_ROADMAP.map((step, idx) => (
                <div
                  key={step.phase}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E6E6EC',
                    borderRadius: '16px',
                    padding: '28px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#FF5622', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      Step 0{idx + 1}
                    </span>
                    <span style={{ fontSize: '11.5px', background: '#F1F1F5', color: '#494852', padding: '4px 10px', borderRadius: '100px', fontWeight: 600 }}>
                      {step.timeline}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#141414', margin: '0 0 10px' }}>
                    {step.phase}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: '#494852', lineHeight: 1.6, marginBottom: '16px' }}>
                    {step.desc}
                  </p>
                  <ul style={{ margin: 'auto 0 0', paddingLeft: '18px', fontSize: '12.5px', color: '#6A6975', lineHeight: 1.55 }}>
                    {step.deliverables.map((del, dIdx) => (
                      <li key={dIdx} style={{ marginBottom: '6px' }}>
                        {del}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 09. REGIONAL US COMMERCE SILO LINKS ── */}
        <section className="pp-sec" style={{ padding: 'clamp(48px, 6vh, 80px) 0', background: '#FFFFFF' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
              <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.02em', margin: '0 0 12px' }}>
                US Regional E-Commerce Hubs
              </h2>
              <p style={{ fontSize: '15px', color: '#494852', lineHeight: 1.6, margin: 0 }}>
                Explore local Shopify Plus and enterprise ecommerce engineering across major United States business corridors.
              </p>
            </div>

            <EcommerceCityLinksUS currentCity="" />
          </div>
        </section>

        {/* ── 10. VERIFIED AUTHOR ENTITY CARD ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', padding: '48px 0', borderTop: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <AuthorCard />
          </div>
        </section>

        {/* ── 11. 20+ REAL BUYER TECHNICAL FAQS ── */}
        <FAQ
          eyebrow="HEADLESS SHOPIFY INTELLIGENCE"
          headline="Frequently Asked Questions: Headless Shopify Plus Architecture"
          lead="Direct, plain-English answers to what enterprise founders, CTOs, and ecommerce directors ask about decoupled commerce engineering:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FFFFFF]"
        />

        {/* ── 12. FINAL EXECUTIVE CTA BANNER ── */}
        <section className="pp-sec" style={{ backgroundColor: '#141414', color: '#FFFFFF', padding: 'clamp(64px, 10vh, 112px) 0', textAlign: 'center' }}>
          <div className="pp-wrap" style={{ maxWidth: '800px' }}>
            <div className="rv-badge" style={{ background: '#26262B', color: '#FF5622', borderColor: '#3E3E48', marginBottom: '20px' }}>
              <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
              </svg>
              <span>Fixed-Price Architecture Sprints</span>
            </div>

            <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.12, margin: '0 0 20px' }}>
              Ready to Decouple Your Shopify Storefront?
            </h2>

            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Request a comprehensive technical architecture proposal. We will evaluate your catalog data, app dependencies, and Core Web Vitals bottlenecks.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <ModalCTAButton label="Get Your Headless Architecture Proposal" region="us" btnVariant="primary-light" />
            </div>

            <p style={{ marginTop: '28px', fontSize: '13.5px', color: '#8E8E9F' }}>
              Related services:{' '}
              <Link href="/services/shopify-development" style={{ color: '#FF5622', textDecoration: 'underline' }}>
                Shopify Development
              </Link>
              ,{' '}
              <Link href="/services/shopify-plus-b2b" style={{ color: '#FF5622', textDecoration: 'underline' }}>
                Shopify Plus B2B
              </Link>
              ,{' '}
              <Link href="/replatforming/woocommerce-to-shopify" style={{ color: '#FF5622', textDecoration: 'underline' }}>
                WooCommerce to Shopify Migration
              </Link>
              ,{' '}
              <Link href="/b2b-ecommerce" style={{ color: '#FF5622', textDecoration: 'underline' }}>
                B2B E-Commerce
              </Link>
              , and{' '}
              <Link href="/services/ai-agent-development" style={{ color: '#FF5622', textDecoration: 'underline' }}>
                AI Agent Development
              </Link>
              .
            </p>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}

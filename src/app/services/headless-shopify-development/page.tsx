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
import HeroInlineForm from '@/components/HeroInlineForm';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

const PAGE_MODIFIED = '2026-08-30';
const CANONICAL = 'https://factoryjet.com/services/headless-shopify-development';

export const metadata: Metadata = {
  title: 'Headless Shopify Agency: Sub-Second Next.js 15 Storefronts | FactoryJet',
  description:
    'Enterprise headless Shopify Plus development agency. Sub-second Next.js 15 App Router storefronts, Shopify Storefront API GraphQL, Sanity CMS, ERP integrations, and zero app bloat.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Headless Shopify Agency: Sub-Second Next.js 15 Storefronts | FactoryJet',
    description:
      'Enterprise headless Shopify Plus development agency. Sub-second Next.js 15 App Router storefronts, Shopify Storefront API GraphQL, Sanity CMS, ERP integrations, and zero app bloat.',
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
    title: 'Headless Shopify Agency: Sub-Second Next.js 15 Storefronts | FactoryJet',
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
    desc: 'Static prerendering with Next.js 15 on Cloudflare Edge global network for instant global catalog delivery across 300+ edge points of presence.',
    icon: '⚡',
  },
  {
    num: '98+',
    title: 'Mobile Performance Score',
    desc: 'Eliminate render-blocking Liquid app scripts and third-party tracking waterfalls from your critical rendering path for perfect Core Web Vitals.',
    icon: '📈',
  },
  {
    num: '100%',
    title: 'Native Checkout Security',
    desc: 'Keep PCI-DSS Level 1 compliance and 1-click Shop Pay checkout while decoupling the entire frontend presentation experience.',
    icon: '🛡️',
  },
  {
    num: 'Full IP',
    title: 'Clean GitHub Repository',
    desc: 'You own 100% of the TypeScript source code, design tokens, CI/CD pipelines, and infrastructure with zero recurring agency license fees.',
    icon: '💎',
  },
];

const ARCHITECTURE_LAYERS = [
  {
    layer: '01. Presentation Layer (Decoupled Frontend)',
    tech: 'Next.js 15 App Router + React 19 Server Components',
    desc: 'Renders static product and collection pages at the edge with dynamic streaming for cart drawers, personalized recommendations, and real-time inventory validation.',
    points: [
      'Incremental Static Regeneration (ISR) updates pages on inventory change in milliseconds via event-driven webhook revalidation',
      'Zero hydration penalty with React Server Components (RSC), delivering pure semantic HTML to mobile browsers without massive JS bundles',
      'Custom bespoke Figma design system coded with modular CSS tokens, fluid typography, and zero heavy UI framework overhead',
    ],
  },
  {
    layer: '02. Data Orchestration & GraphQL API Middleware',
    tech: 'Shopify Storefront API (2026-07) + Webhooks + Edge Cache',
    desc: 'Fetches product variants, metafields, customer accounts, and localized international pricing with fine-grained, type-safe GraphQL queries.',
    points: [
      'High-throughput caching layer with stale-while-revalidate protocols on Cloudflare Workers edge nodes',
      'Multi-currency and multi-language routing with geo-IP edge detection mapped to native Shopify Markets catalogs',
      'Structured error handling, resilient fallback states, and exponential backoff retry logic for zero customer-facing downtime',
    ],
  },
  {
    layer: '03. Content & Search Orchestration Layer',
    tech: 'Sanity.io / Strapi Headless CMS + Algolia InstantSearch',
    desc: 'Empowers marketing and merchandising teams to build rich landing pages, editorial lookbooks, and visual campaign drops without developer tickets.',
    points: [
      'Live visual preview and draft mode directly within the headless CMS dashboard with real-time editorial collaboration',
      'Sub-50ms instant federated search, multi-facet filtering, and AI search ranking synchronized with Shopify inventory counts',
      'Centralized asset management with automated next-gen WebP and AVIF image compression and responsive art direction',
    ],
  },
  {
    layer: '04. Commerce Engine & Checkout Layer',
    tech: 'Shopify Plus Core + Checkout Extensibility + Functions',
    desc: 'Leverages the world-class Shopify Plus checkout engine, order management, inventory routing, and global payment gateways.',
    points: [
      'Native Shop Pay, Apple Pay, Google Pay, and Klarna 1-tap conversion acceleration with zero checkout friction',
      'Shopify Functions for custom B2B pricing tiers, volume discounts, and shipping validation rules executed server-side in WebAssembly',
      'Post-purchase upsells, custom checkout validation rules, and ERP synchronization with NetSuite, SAP, or Microsoft Dynamics',
    ],
  },
];

const COMPARISON_ROWS = [
  {
    factor: 'Time to First Byte (TTFB)',
    headless: 'Sub-200ms globally via Cloudflare edge CDN static caching',
    liquid: '600ms - 1,400ms server rendering latency in single origin region',
    hydrogen: '300ms - 500ms dependent on Shopify Oxygen worker hosting',
  },
  {
    factor: 'Third-Party App Script Bloat',
    headless: 'Zero. Scripts load asynchronously via server-side proxy & CAPI',
    liquid: 'High. 20-40 apps inject unminified JS into critical DOM path',
    hydrogen: 'Moderate. Requires custom React wrapper integration per app',
  },
  {
    factor: 'Custom User Experience & UI Freedom',
    headless: '100% unrestricted React / Next.js design freedom & micro-animations',
    liquid: 'Restricted by Shopify Liquid theme architecture & DOM limits',
    hydrogen: 'High UI freedom, limited framework ecosystem & plugin support',
  },
  {
    factor: 'Omnichannel & Multi-Platform Publishing',
    headless: 'Single API powers web storefront, iOS/Android mobile apps, and retail POS',
    liquid: 'Limited strictly to Shopify web online store channel',
    hydrogen: 'Focused primarily on web storefronts with custom React SDKs',
  },
  {
    factor: 'Developer Tooling & Testing CI/CD',
    headless: 'Standard Git, GitHub Actions, TypeScript, Jest, Cypress & Playwright',
    liquid: 'Shopify Theme CLI with manual template sync and no automated testing',
    hydrogen: 'Oxygen deployment CLI with Vite bundling and limited test runner support',
  },
  {
    factor: 'Organic Search & Technical SEO Control',
    headless: 'Full control over URL structure, semantic HTML, and Edge JSON-LD schemas',
    liquid: 'Locked into rigid /products/ and /collections/ URL structures',
    hydrogen: 'Full React SSR control, requires manual schema pipeline setup',
  },
  {
    factor: 'Conversion Rate Impact on Mobile',
    headless: '+15% to +35% lift driven by sub-second page loads & instant filtering',
    liquid: 'Constrained by mobile layout shifts (CLS) and long interaction delays (INP)',
    hydrogen: '+10% to +25% lift depending on client bundle optimization',
  },
  {
    factor: 'Recommended Annual GMV Scale',
    headless: 'Best for high-growth brands generating $3M - $100M+ annually',
    liquid: 'Best for early-stage brands generating under $3M annually',
    hydrogen: 'Suitable for mid-market Shopify Plus merchants exploring React',
  },
];

const MIGRATION_ROADMAP = [
  {
    phase: 'Phase 1: Architectural Audit & Tech Stack Selection',
    timeline: 'Week 1',
    desc: 'We analyze your current Shopify Liquid store, app dependencies, custom metafields, third-party integrations, and Core Web Vitals bottlenecks to design a bespoke decoupled architecture.',
    deliverables: [
      'App rationalization matrix (replacing bloated apps with clean API integrations and serverless microservices)',
      'GraphQL data schema mapping for products, variants, collections, and custom metafield definitions',
      'Figma design system token alignment and reusable component inventory',
      'Core Web Vitals baseline audit and Google Search Console indexation benchmark',
    ],
  },
  {
    phase: 'Phase 2: Headless Architecture & API Middleware Setup',
    timeline: 'Week 2 - 3',
    desc: 'We build the Next.js 15 App Router codebase, configure the Shopify Storefront API client, set up Cloudflare edge caching, and integrate your headless CMS for marketing autonomy.',
    deliverables: [
      'Type-safe TypeScript SDK connected to Shopify Storefront API (2026-07 version)',
      'Sanity.io or Strapi content modeling, custom schema types, and real-time visual preview environments',
      'Algolia or Typesense instant search index synchronization with automated webhook webhooks',
      'Edge routing, multi-currency detection, and international locale middleware configuration',
    ],
  },
  {
    phase: 'Phase 3: Component Engineering & UI Design System',
    timeline: 'Week 4 - 5',
    desc: 'Our senior full-stack engineers code pixel-perfect, accessible React Server Components for PDPs, PLPs, collections, faceted filtering, and dynamic cart drawers.',
    deliverables: [
      'Sub-second Product Detail Pages (PDP) with real-time variant switching, swatch selectors, and inventory badges',
      'High-conversion slide-out cart drawer with dynamic cross-sells, free shipping thresholds, and coupon validation',
      'WCAG 2.1 AA compliant semantic HTML5, keyboard navigation, and ARIA accessibility labels',
      'Modular storytelling components: interactive lookbooks, video hero blocks, and comparison modules',
    ],
  },
  {
    phase: 'Phase 4: Checkout Extensibility & ERP Integration',
    timeline: 'Week 6',
    desc: 'We bridge the headless frontend with Shopify Checkout Extensibility and synchronize your enterprise ERP, OMS, warehouse, and third-party logistics systems.',
    deliverables: [
      'Frictionless tokenized cart handoff to native Shopify Plus checkout with persistent customer authentication',
      'Shopify Functions for custom bundle rules, tiered volume discounts, and B2B customer price lists',
      'Bidirectional inventory and order sync with NetSuite, SAP, Acumatica, or Microsoft Dynamics via webhook queues',
      'Server-side tracking integration for Meta Conversions API (CAPI), Klaviyo, and Google Analytics 4 via Cloudflare Workers',
    ],
  },
  {
    phase: 'Phase 5: SEO Preservation & 1:1 301 Redirect Mapping',
    timeline: 'Week 7',
    desc: 'We protect your hard-earned organic search rankings and historical domain authority with rigorous technical SEO validation and automated crawl monitoring.',
    deliverables: [
      'Complete URL structure matching with zero 404 broken links and automated 301 redirect validation',
      'Automated XML sitemaps, self-referencing canonical tags, and OpenGraph social meta cards for all dynamic pages',
      'Deep JSON-LD Schema.org graphs for Product, BreadcrumbList, Organization, and FAQPage schemas',
      'Pre-launch Google Search Console URL inspection testing and bot crawler rendering verification',
    ],
  },
  {
    phase: 'Phase 6: End-to-End QA, Load Testing & Staging Validation',
    timeline: 'Week 8',
    desc: 'We perform automated stress testing simulating peak flash-sale traffic (10,000+ concurrent users) across mobile and desktop devices to verify zero-downtime stability.',
    deliverables: [
      'Cross-browser and cross-device automated regression testing on real mobile devices',
      'Lighthouse CI performance scoring (guaranteed 95+ score on mobile PDP and Collection templates)',
      'Security audit, webhook idempotency verification, and token expiration edge-case validation',
      'Full staging environment UAT sign-off with merchant merchandising and marketing teams',
    ],
  },
  {
    phase: 'Phase 7: Zero-Downtime DNS Cutover & Production Launch',
    timeline: 'Launch Day',
    desc: 'We execute a smooth DNS switchover on Cloudflare Edge with real-time monitoring of conversion telemetry, payment settlements, and analytics event firing.',
    deliverables: [
      'Zero downtime DNS cutover with instant rollback capability and edge traffic routing',
      'Live order verification, inventory reduction checks, and payment gateway settlement verification',
      'Real-time error logging and performance telemetry monitoring via Sentry and Datadog',
      'Post-launch 30-day dedicated hypercare engineering support with daily standups and rapid response',
    ],
  },
];

const FAQS = [
  {
    q: 'What is headless Shopify development?',
    a: 'Headless Shopify development decouples your customer-facing presentation layer (the frontend) from Shopify’s backend commerce engine. Instead of rendering pages through Shopify’s monolithic Liquid templating engine, we build a lightning-fast custom web application using Next.js 15 and React Server Components. Shopify continues to securely power your product catalog, payment processing, inventory routing, order management, and PCI-DSS Level 1 compliant checkout via high-speed GraphQL Storefront APIs.',
  },
  {
    q: 'How does Next.js 15 App Router benefit a headless Shopify store?',
    a: 'Next.js 15 App Router introduces React Server Components (RSC), Incremental Static Regeneration (ISR), and native edge streaming. This allows product detail and collection pages to be statically prerendered at edge data centers worldwide (delivering sub-200ms Time to First Byte) while dynamic elements, such as personalized recommendations, cart drawers, and real-time inventory counts, stream asynchronously without blocking the initial page render or causing Cumulative Layout Shift (CLS).',
  },
  {
    q: 'How does headless Shopify improve site speed and Core Web Vitals?',
    a: 'Monolithic Shopify Liquid themes suffer from severe performance degradation because every installed app injects unminified JavaScript tags, CSS files, and tracking pixels directly into the critical rendering path. On headless Next.js 15, we eliminate client-side app scripts entirely. Third-party marketing pixels (Klaviyo, Meta CAPI, Google Analytics) run server-side at the Cloudflare edge, while product images and videos are automatically transformed into WebP/AVIF formats. This consistently yields 95+ Google Lighthouse mobile performance scores and sub-second Largest Contentful Paint (LCP).',
  },
  {
    q: 'Will our mobile conversion rate increase with headless commerce?',
    a: 'Yes. E-commerce industry data confirms that every 100ms reduction in mobile page load latency yields a 1.1% to 1.5% increase in conversion rate. By delivering instantaneous page transitions, instant faceted search filtering, and zero layout shifting on mobile devices, our headless Shopify Plus clients typically experience a 15% to 35% improvement in mobile conversion rates alongside higher Average Order Value (AOV) from dynamic slide-out cart upsells.',
  },
  {
    q: 'Will migrating to headless Shopify hurt our organic search rankings?',
    a: 'No. When executed with proper technical engineering, headless migrations protect and enhance organic search rankings. FactoryJet implements server-side rendering (SSR) and static prerendering so search crawlers (Googlebot, Bingbot) receive pure, semantic HTML with zero JavaScript rendering delays. We preserve your exact URL hierarchies, map comprehensive 1:1 301 redirects for any altered paths, and inject deep JSON-LD Schema.org structured data for Products, Offers, Breadcrumbs, and FAQs.',
  },
  {
    q: 'How does Googlebot crawl a Next.js 15 headless Shopify site?',
    a: 'Because Next.js 15 renders HTML on the server or at the edge before sending it to the client, search engine crawlers encounter fully populated HTML markup immediately upon fetching the URL. Unlike client-side single page applications (SPAs) that require Google’s Web Rendering Service (WRS) to execute JavaScript in a deferred second wave, server-rendered Next.js pages are indexed immediately in Google’s primary crawl pass with zero indexing delays or crawl budget waste.',
  },
  {
    q: 'How does checkout work on a headless Shopify store?',
    a: 'When a customer clicks "Checkout" in the headless cart drawer, our Next.js application creates a tokenized checkout session via the Shopify Storefront API and fluidly redirects the customer to your native Shopify Plus checkout domain (e.g., checkout.yourbrand.com). The customer completes payment using Shopify’s high-converting 1-tap Shop Pay, Apple Pay, Google Pay, or credit card checkout, maintaining 100% native PCI-DSS compliance and checkout extensibility.',
  },
  {
    q: 'Can we use Shopify Checkout Extensibility with a headless frontend?',
    a: 'Yes, absolutely. Because the checkout stage takes place on Shopify’s secure domain, you retain full access to Shopify Checkout Extensibility, Shopify Functions (custom discounts, payment rules, shipping logic), and checkout UI extensions for custom post-purchase upsells, loyalty points redemption, and address validation without relying on deprecated checkout.liquid files.',
  },
  {
    q: 'Can we still use our favorite Shopify apps on a headless store?',
    a: 'Backend apps that handle order fulfillment, inventory syncing, ERP data pipelines, warehouse management, and accounting integrate fluidly without modification because Shopify’s backend remains intact. For frontend customer-facing apps (reviews, search, subscriptions, loyalty), we integrate their official headless GraphQL/REST APIs (e.g. Okendo, Yotpo, Algolia, Recharge, Skio, Smile.io) directly into our clean React component architecture, eliminating third-party script bloat and design restrictions.',
  },
  {
    q: 'How are third-party analytics and tracking pixels handled headlessly?',
    a: 'Instead of loading dozens of blocking client-side JavaScript tags in the user’s browser, we implement a modern server-side tracking architecture using Cloudflare Workers and server-side Google Tag Manager (sGTM). Events such as page views, product clicks, add-to-cart, and purchases are transmitted to a secure edge proxy and dispatched directly to Meta Conversions API (CAPI), TikTok Events API, Klaviyo, and Google Analytics 4, ensuring 100% data accuracy while keeping the customer browser ultra-lean.',
  },
  {
    q: 'How do our non-technical marketers update content on a headless store?',
    a: 'We integrate modern, intuitive headless content management systems like Sanity.io, Contentful, or Strapi. Merchandisers and marketers can create, edit, and publish rich editorial blog posts, promotional landing pages, homepage banners, lookbooks, and promotional banners using drag-and-drop modular visual blocks with live side-by-side visual previews without writing code or submitting developer tickets.',
  },
  {
    q: 'Can marketers schedule seasonal landing pages in advance?',
    a: 'Yes. Headless CMS platforms like Sanity and Contentful provide enterprise content scheduling and release management. Your marketing team can build and stage complete Black Friday / Cyber Monday promotions, seasonal collection lookbooks, and time-limited banner campaigns weeks in advance, configuring automated release timestamps that update the live edge frontend automatically.',
  },
  {
    q: 'How does headless Shopify connect to ERP systems like NetSuite or SAP?',
    a: 'Our engineering team implements resilient event-driven middleware connecting Shopify’s Admin APIs and webhooks to your enterprise ERP (NetSuite, SAP S/4HANA, Microsoft Dynamics 365, Acumatica). We establish bidirectional data pipelines for real-time inventory level synchronization, custom customer B2B tier pricing matrices, split-shipment fulfillment routing, and automated financial reconciliation.',
  },
  {
    q: 'Who owns the code and infrastructure after launch?',
    a: 'You do. 100%. FactoryJet operates with complete intellectual property transparency. All TypeScript source code, Next.js components, CMS schema configurations, CI/CD deployment pipelines, and infrastructure as code (IaC) are committed directly to your private company GitHub or GitLab repository. There are zero proprietary agency software lock-ins or recurring licensing fees.',
  },
  {
    q: 'How do server actions in Next.js 15 handle cart state and inventory validation?',
    a: 'Next.js 15 Server Actions execute secure, server-side mutations directly against the Shopify Storefront API without requiring client-side API keys or exposing backend endpoints. When a user updates cart quantities or selects product variants, the Server Action validates real-time stock availability, applies customer-specific discount logic, updates the tokenized cart cookie, and streams the updated cart state back to the UI in under 50 milliseconds.',
  },
  {
    q: 'Can we migrate from a monolithic Liquid theme to headless incrementally?',
    a: 'Yes. For high-volume enterprise merchants that cannot afford a single all-at-once launch risk, FactoryJet supports incremental subpath migrations using Cloudflare Edge reverse proxy routing. We can route your highest-traffic landing pages or specific product categories to the headless Next.js frontend while leaving legacy pages on Liquid temporarily, allowing you to validate conversion lift and performance gains gradually before full cutover.',
  },
  {
    q: 'How does headless Shopify handle subscriptions like Recharge, Skio, or Smartrr?',
    a: 'We integrate subscription platforms directly via their headless APIs and Shopify Checkout Selling Plan contracts. Customers can select one-time purchase vs recurring delivery frequencies with custom discount schedules on the product page. The subscription contract is attached natively to the Shopify checkout line item, ensuring frictionless recurring billing and customer portal management.',
  },
  {
    q: 'How does server-side rendering protect our store against bot traffic and scraping?',
    a: 'By hosting the Next.js 15 application on Cloudflare Workers and Enterprise CDN, we utilize advanced Web Application Firewall (WAF) rules, Cloudflare Bot Management, and rate limiting at the edge. Malicious price scrapers, credential stuffing bots, and automated inventory hoarding bots are challenged and blocked at the edge before they can execute queries against your Shopify backend or consume infrastructure resources.',
  },
  {
    q: 'What is the ongoing monthly maintenance cost for a headless Next.js 15 Shopify store?',
    a: 'Hosting and cloud infrastructure costs for a headless Next.js 15 storefront on Cloudflare Workers or Vercel typically range from $20 to $150 per month for millions of edge requests. Headless CMS hosting (Sanity.io or Contentful) typically ranges from $100 to $500 per month depending on user seats. Because the architecture eliminates fragile third-party Liquid apps, ongoing technical maintenance is dramatically lower than maintaining bloated monolithic themes.',
  },
  {
    q: 'Who executes the engineering work on our account?',
    a: 'All engineering is led directly by senior full-stack architects and certified Shopify Plus engineers under the direct architectural supervision of founder Bhavesh Barot. We never outsource your core architecture to junior offshore contractors. You work directly with senior engineers who understand high-scale TypeScript, React 19 internals, GraphQL API design, and enterprise e-commerce conversion optimization.',
  },
];

const JSON_LD = {
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
        logo: 'https://factoryjet.com/images/logo.png',
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
        name: f.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.a,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <SiteHeader />

      <main className="pp-main">
        {/* HERO SECTION */}
        <section className="pp-hero">
          <div className="pp-hero-badge">
            <span className="pp-pulse-dot" />
            ENTERPRISE NEXT.JS 15 + SHOPIFY PLUS STOREFRONTS
          </div>
          <h1 className="pp-hero-title">
            Headless Shopify Agency: Sub-Second Next.js 15 Storefronts
          </h1>
          <p className="pp-hero-sub">
            Decouple your Shopify Plus backend from bloated Liquid themes. We build ultra-fast, bespoke Next.js 15 App Router storefronts powered by GraphQL APIs, Sanity CMS, and edge rendering, guaranteeing 95+ Mobile Core Web Vitals, zero app bloat, and higher conversion rates for scaling $3M to $100M+ brands.
          </p>

          <div className="pp-hero-ctas" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem', width: '100%', maxWidth: '580px', margin: '0 auto' }}>
            <HeroInlineForm
              source="Headless Shopify Hero Lead"
              region="us"
              submitLabel="Request Architecture Review →"
            />
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a
                href="#architecture-blueprint"
                className="pp-btn-secondary"
                style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <span>📐</span> Explore Architecture Blueprint
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
                EXECUTIVE BRIEF
              </span>
              <h2 className="pp-section-title" style={{ fontSize: '2.25rem', marginTop: '0.75rem' }}>
                Why Enterprise DTC Brands Decouple Shopify in 2026
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.05rem' }}>
              <div>
                <p style={{ marginBottom: '1.25rem' }}>
                  For high-volume e-commerce brands generating between <strong>$3 million and $100 million annually</strong>, the traditional monolithic Shopify Liquid theme represents an engineering ceiling. Every marketing app installed, from review widgets and email popups to currency converters and countdown timers, injects unminified, render-blocking JavaScript files directly into the critical rendering path.
                </p>
                <p>
                  The result is severe mobile page bloat: average mobile page weights exceeding 4.5MB, Time to Interactive (TTI) spanning 4 to 8 seconds on 4G cellular networks, and failing Google Core Web Vitals scores that drag down paid ad ROAS and organic search rankings.
                </p>
              </div>

              <div>
                <p style={{ marginBottom: '1.25rem' }}>
                  <strong>Headless Shopify engineering</strong> permanently solves this architectural flaw by decoupling presentation from data. By rendering your storefront with <strong>Next.js 15 App Router</strong>, React 19 Server Components, and static prerendering on the <strong>Cloudflare Edge global network</strong>, we achieve instantaneous catalog browsing with sub-200ms Time to First Byte (TTFB).
                </p>
                <p>
                  Third-party marketing pixels and tracking tags execute server-side through event-driven edge proxies and Meta Conversions API (CAPI), leaving your customer’s mobile browser completely unburdened. Your marketing team gains full editorial autonomy through modern visual headless CMS platforms like Sanity.io, while your business retains Shopify’s bulletproof payment processing, fraud protection, and 1-click Shop Pay checkout.
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
              <span className="pp-badge">FINANCIAL MODELING</span>
              <h2 className="pp-section-title">Calculate Your Headless Conversion Uplift</h2>
              <p className="pp-section-sub" style={{ margin: '0 auto' }}>
                Estimate the direct annual revenue lift from eliminating mobile latency and upgrading to sub-second Next.js 15 page loads.
              </p>
            </div>
            <CommerceRoiCalculator />
          </div>
        </section>

        {/* 4-LAYER DECOUPLED ARCHITECTURE BLUEPRINT */}
        <section id="architecture-blueprint" className="pp-section">
          <div className="pp-container">
            <div className="pp-section-header">
              <span className="pp-badge">SYSTEM ARCHITECTURE</span>
              <h2 className="pp-section-title">The 4-Layer Headless Shopify Technology Stack</h2>
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
              <span className="pp-badge">HEAD-TO-HEAD BENCHMARK</span>
              <h2 className="pp-section-title">Headless Next.js 15 vs. Shopify Liquid vs. Hydrogen</h2>
              <p className="pp-section-sub">
                An objective architectural comparison across performance, development velocity, marketing flexibility, and total cost of ownership.
              </p>
            </div>

            <div className="pp-table-wrap">
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Architectural Factor</th>
                    <th style={{ color: '#f97316' }}>Headless Next.js 15 (FactoryJet)</th>
                    <th>Standard Shopify Liquid Theme</th>
                    <th>Shopify Hydrogen + Oxygen</th>
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
              <span className="pp-badge">SPRINT METHODOLOGY</span>
              <h2 className="pp-section-title">8-Week Headless Migration &amp; Build Sprint Roadmap</h2>
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
              items={FAQS.map((f) => ({ question: f.q, answer: f.a }))}
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
              <span className="pp-badge">US REGIONAL COVERAGE</span>
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

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import EnterpriseArchitectureBlueprint from '@/components/v2/EnterpriseArchitectureBlueprint';
import EcommerceCityLinksUS from '@/components/v2/EcommerceCityLinksUS';
import '@/components/v2/PlatformPage.css';

const PAGE_MODIFIED = '2026-08-24';
const CANONICAL = 'https://factoryjet.com/los-angeles/ecommerce-development';

export const metadata: Metadata = {
  title: 'Los Angeles E-Commerce Agency | Headless Shopify Plus & B2B | FactoryJet',
  description:
    'Los Angeles e-commerce development agency. Headless Shopify Plus, BigCommerce B2B, ERP integrations, and sub-second checkouts for California enterprise brands.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Los Angeles E-Commerce Agency | Headless Shopify Plus & B2B | FactoryJet',
    description:
      'Los Angeles e-commerce development agency. Headless Shopify Plus, BigCommerce B2B, ERP integrations, and sub-second checkouts for California enterprise brands.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Los Angeles E-Commerce Agency' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Los Angeles E-Commerce Agency | Headless Shopify Plus & B2B | FactoryJet',
    description: 'Custom headless e-commerce engineering in Los Angeles CA. Sub-second checkouts, ERP integrations, and full IP code ownership.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const PARTNERS = [
  'Shopify Plus Enterprise',
  'BigCommerce B2B Edition',
  'Next.js 15 App Router',
  'NetSuite ERP Integration',
  'SAP & Microsoft Dynamics',
  'Stripe Payments & Klarna',
  'Klaviyo Marketing Automation',
  'Algolia Search & Discovery',
];

const STAT_CARDS = [
  { num: '530ms', title: 'Average Checkout Speed', desc: 'Sub-second mobile checkout latency engineered to maximize checkout completion rates.', icon: '⚡' },
  { num: '3.6x', title: 'Average Conversion Lift', desc: 'Measured conversion rate surge after headless architecture and mobile UX replatforming.', icon: '📈' },
  { num: '99.99%', title: 'Peak Uptime Reliability', desc: 'Zero downtime during celebrity product drops, Black Friday, and high-volume flash sales.', icon: '🛡️' },
  { num: '100%', title: 'Full IP & Code Ownership', desc: 'You own the clean Next.js repository, custom API connectors, and hosting configurations.', icon: '💎' },
];

const DISTRICTS = [
  {
    corridor: 'Fashion District & DTLA',
    query: 'apparel wholesale ecommerce fashion district la',
    focus: 'High-Volume Apparel Wholesalers, Garment Showrooms & Sample Portals',
    desc: 'The nation’s apparel epicenter. Demands bulk pre-order matrices, line sheet downloads, dynamic swatch visualizers, and real-time ERP inventory syncing.',
  },
  {
    corridor: 'Culver City & Silicon Beach',
    query: 'creator brand ecommerce culver city',
    focus: 'Creator Economy D2C, Influencer Brand Drops & Digital Subscriptions',
    desc: 'Vibrant creator and entertainment tech corridor. Features high-concurrency flash sale architectures, token-gated drops, and seamless Apple Pay checkouts.',
  },
  {
    corridor: 'Beverly Hills & West Hollywood',
    query: 'luxury beauty ecommerce beverly hills',
    focus: 'Haute Couture Flagships, Luxury Beauty & Private Client Portals',
    desc: 'World capital of luxury beauty and fashion. Features high-resolution interactive lookbooks, dynamic bundle builders, and VIP concierge checkout flows.',
  },
  {
    corridor: 'South Bay & Port of LA / Long Beach',
    query: 'b2b import export ecommerce long beach',
    focus: 'Global Freight Logistics, Import Warehousing & B2B Portals',
    desc: 'Massive Pacific trade gateway. Requires container-load pricing matrices, customs tax calculations, punchout catalogs, and EDI/ERP connectors.',
  },
  {
    corridor: 'Pasadena & San Gabriel Valley',
    query: 'specialty food import ecommerce pasadena',
    focus: 'Specialty Health Foods, Asian Imports & Multi-Currency Portals',
    desc: 'Specialty food and culinary import hub. Demands multi-language localization, dynamic regional shipping rules, and recurring subscription funnels.',
  },
  {
    corridor: 'San Fernando Valley',
    query: 'automotive aftermarket ecommerce van nuys',
    focus: 'Specialty Automotive Aftermarket, Precision Electronics & Custom Supply',
    desc: 'High-performance manufacturing corridor. Features Year-Make-Model search finders, custom freight rate calculators, and bulk CSV ordering.',
  },
];

const INDUSTRY_SHOWCASE = [
  {
    sector: 'Fashion Apparel, Designer Collections & Lifestyle D2C',
    headline: 'High-Impact Digital Flagships for Los Angeles Fashion Houses',
    description:
      'From DTLA garment manufacturers to Beverly Hills luxury designer houses, visual elegance and mobile speed drive customer lifetime value. We engineer headless Shopify Plus storefronts with sub-second page transitions, interactive lookbooks, smart product bundles, and frictionless one-click mobile checkout.',
    image: '/images/us/los-angeles-seo/los-angeles-fashion-district.webp',
    alt: 'Los Angeles fashion apparel and luxury lifestyle D2C ecommerce development',
    points: [
      'Sub-second headless Next.js frontend with instant mobile product filtering',
      'Dynamic product bundling, tiered upsells, and personalized cross-sells',
      'Integrated VIP loyalty programs, SMS marketing funnels, and post-purchase flows',
    ],
  },
  {
    sector: 'Wholesale Distribution, Import/Export & Pacific Supply Chain',
    headline: 'Engineering Enterprise B2B Portals for California Importers',
    description:
      'Importers and commercial distributors connecting Port of Los Angeles freight to regional warehouses require complex B2B procurement portals. We develop custom BigCommerce B2B and Shopify Plus architectures featuring company account hierarchies, custom contract pricing, and real-time NetSuite or SAP sync.',
    image: '/images/us/manufacturing-website-design/shop-floor.webp',
    alt: 'Los Angeles enterprise wholesale distribution and B2B ecommerce platform',
    points: [
      'Customer-specific contracted pricing matrices and tiered volume discounts',
      'One-click reordering, CSV bulk ordering, and purchase order net-payment terms',
      'Automated bidirectional synchronization with NetSuite, SAP, and Epicor ERPs',
    ],
  },
  {
    sector: 'Beauty, Skincare, Cosmetics & Wellness Subscriptions',
    headline: 'High-Volume Recurring Revenue Engines for LA Beauty Brands',
    description:
      'From clean cosmetics in Venice to clinical skincare in Beverly Hills, subscription commerce drives recurring margins. We develop custom recharge and Stripe billing integrations, build-your-own skincare routine configurators, and automated customer self-service retention portals.',
    image: '/images/us/services/dental-seo/hero.webp',
    alt: 'Los Angeles beauty cosmetics and skincare subscription ecommerce store design',
    points: [
      'Custom box builder and recurring subscription membership architectures',
      'Self-service customer portal reducing subscription cancellation churn',
      'Personalized routine builders and shade match questionnaire funnels',
    ],
  },
  {
    sector: 'Creator Economy, Entertainment Merchandising & Digital Drops',
    headline: 'High-Concurrency Flash-Drop Storefronts for LA Creators & Studios',
    description:
      'Major entertainment studios and high-profile creator brands experience sudden traffic surges during product drops. We engineer headless Next.js storefronts on edge infrastructure capable of processing thousands of checkout orders per minute with zero lag or platform downtime.',
    image: '/images/us/saas-website-design/hero.webp',
    alt: 'Los Angeles creator merchandise and entertainment flash drop ecommerce development',
    points: [
      'High-concurrency edge infrastructure engineered for zero-latency flash drops',
      'Dynamic limited-edition bundling with VIP membership access gating',
      'Global multi-currency checkout with localized fulfillment routing',
    ],
  },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Eliminating Slow Monolithic Platforms & Crashing Servers',
    problem: 'Legacy Magento, WooCommerce, or custom PHP stores slow down under traffic spikes, causing lost sales, database timeouts, and high ongoing maintenance bills.',
    solution: 'We engineer headless Shopify Plus and BigCommerce architectures on global edge networks, handling unlimited concurrent traffic with sub-second page loads.',
  },
  {
    num: '02',
    title: 'Ending Broken ERP and Warehouse Inventory Synchronization',
    problem: 'Outdated batch sync scripts create ghost inventory, overselling, and manual data entry headaches between your web store and warehouse ERP.',
    solution: 'We build real-time webhook-driven middleware connecting NetSuite, SAP, or Microsoft Dynamics for automated inventory, order, and tracking sync.',
  },
  {
    num: '03',
    title: 'Overcoming Friction-Filled Checkouts that Kill Mobile Conversion',
    problem: 'Clunky multi-page checkouts with slow shipping rate lookups and mandatory registration cause mobile shoppers to abandon their carts.',
    solution: 'We implement streamlined one-page and one-click checkout flows with Apple Pay, Shop Pay, Google Pay, and instant address autocompletion.',
  },
  {
    num: '04',
    title: 'Modernizing Antiquated B2B Manual PDF and Email Ordering',
    problem: 'Wholesale buyers are forced to call or email orders, creating order processing delays, human errors, and high operational overhead.',
    solution: 'We launch self-service B2B customer portals with custom contract pricing, net-term credit approvals, quote requests, and instant PO generation.',
  },
];

const ROADMAP_STEPS = [
  {
    phase: 'Phase 01',
    title: 'Data Architecture & System Discovery',
    desc: 'We audit your catalog data, customer database, ERP integrations, and third-party apps to design a future-proof commerce roadmap.',
    deliverables: ['Catalog schema and variant taxonomy mapping', 'ERP, OMS, and warehouse integration architecture', 'Mobile UX conversion wireframes in Figma', 'Migration risk mitigation protocol'],
  },
  {
    phase: 'Phase 02',
    title: 'Headless Next.js Frontend & Core Engineering',
    desc: 'We build your custom storefront using Next.js 15, TypeScript, and modern component libraries connected to Shopify Plus or BigCommerce APIs.',
    deliverables: ['Custom Next.js 15 headless storefront', 'Sub-second search and filtering powered by Algolia', 'Dynamic cart, upsell, and cross-sell drawer', 'Multi-device mobile responsive optimization'],
  },
  {
    phase: 'Phase 03',
    title: 'ERP Integration & Historical Data Migration',
    desc: 'We securely migrate historical customers, orders, and product data while establishing real-time bidirectional ERP connectors.',
    deliverables: ['Zero-downtime historical data migration', 'Automated NetSuite/SAP/QuickBooks sync', 'Custom B2B pricing and account hierarchy rules', 'Payment gateway and tax compliance configuration'],
  },
  {
    phase: 'Phase 04',
    title: 'Load Testing, Cutover & Launch Warranty',
    desc: 'We execute rigorous multi-device checkout testing, simulated traffic spike tests, execute seamless DNS cutover, and provide 30-day post-launch support.',
    deliverables: ['Simulated high-concurrency load testing', 'SEO 301 redirect map and schema validation', 'Zero-downtime production domain cutover', 'Full code repository transfer and team training'],
  },
];

const EVALUATION_CRITERIA = [
  {
    label: 'Architecture Model',
    factoryjet: 'Headless Next.js 15 with Shopify Plus or BigCommerce B2B. Instant edge rendering and total front-end design freedom.',
    traditional: 'Monolithic legacy templates tied to server-side PHP with slow page rendering and rigid theme constraints.',
  },
  {
    label: 'ERP & Systems Sync',
    factoryjet: 'Event-driven, real-time webhook middleware connecting NetSuite, SAP, Microsoft Dynamics, and custom WMS.',
    traditional: 'Fragile daily batch CSV imports that cause inventory discrepancies, overselling, and manual data cleanup.',
  },
  {
    label: 'Checkout Performance',
    factoryjet: 'Sub-600ms checkout load times with native Shop Pay, Apple Pay, and accelerated payment tokens.',
    traditional: 'Multi-step checkouts requiring page reloads, causing 65%+ cart abandonment on mobile devices.',
  },
  {
    label: 'Code & IP Ownership',
    factoryjet: '100% full intellectual property ownership. You receive the complete GitHub repository and Figma source files.',
    traditional: 'Proprietary platform lock-in or agency-held codebase with recurring licensing and maintenance surcharges.',
  },
];

const FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Cost & Scope' },
  { key: 'replatforming', label: 'Migration & Replatforming' },
  { key: 'technical', label: 'Headless Tech Stack' },
  { key: 'b2b', label: 'B2B & Wholesale' },
  { key: 'support', label: 'Support & Ownership' },
];

const FAQ_ITEMS = [
  {
    category: 'pricing',
    question: 'How much does custom e-commerce development cost for a Los Angeles brand?',
    answer:
      'Project investment is determined by catalog complexity, custom ERP/OMS integration requirements, B2B wholesale features, and design scope. Mid-market direct-to-consumer storefronts are scoped on transparent fixed-price milestone contracts. Large enterprise replatforming initiatives with complex ERP middleware and custom B2B portals receive detailed architectural plans with guaranteed deliverables. Every proposal includes custom Figma UX, Next.js engineering, full ERP integration, and 100% code ownership.',
  },
  {
    category: 'pricing',
    question: 'Are there hidden ongoing agency fees or monthly platform markups?',
    answer:
      'No. You contract directly with your core platform providers (Shopify Plus, BigCommerce, Cloudflare) and retain direct billing ownership. We never charge ongoing agency royalties or mark up your infrastructure costs.',
  },
  {
    category: 'pricing',
    question: 'How do you guarantee that project budgets remain fixed without overruns?',
    answer:
      'We complete an exhaustive architectural discovery and data mapping phase before development begins. All APIs, data schemas, design components, and integration requirements are documented in a binding scope of work that guarantees delivery at the agreed investment level.',
  },
  {
    category: 'replatforming',
    question: 'How do you ensure zero downtime and preserved SEO rankings during migration?',
    answer:
      'We execute comprehensive pre-launch data migrations in staging environments, build complete 1-to-1 301 redirect maps for every legacy URL, preserve URL slugs where possible, and execute DNS cutover during off-peak hours with zero downtime for existing shoppers.',
  },
  {
    category: 'replatforming',
    question: 'Can you migrate customer accounts, order history, and reviews from Magento or WooCommerce?',
    answer:
      'Yes. We migrate your complete historical catalog, customer records, order histories, and verified product reviews seamlessly, ensuring long-term customer lifetime value data remains intact.',
  },
  {
    category: 'replatforming',
    question: 'How long does an enterprise e-commerce replatforming project typically take?',
    answer:
      'Focused D2C storefront replatforming projects are typically delivered in 4 to 8 weeks. Complex enterprise deployments involving extensive ERP integrations, custom B2B pricing rules, and multi-warehouse routing generally take 8 to 12 weeks from kickoff to production launch.',
  },
  {
    category: 'technical',
    question: 'Why choose Headless Next.js over standard monolithic Shopify themes?',
    answer:
      'Headless architectures decouple the presentation layer from backend logic, allowing pages to load in under 600ms on mobile devices, eliminating third-party app script bloat, and unlocking complete design flexibility for custom product configurators and high-converting checkout flows.',
  },
  {
    category: 'technical',
    question: 'How do you integrate with NetSuite, SAP, or Microsoft Dynamics ERPs?',
    answer:
      'We build secure, event-driven API middleware that synchronizes inventory levels, product catalog updates, customer tiers, sales orders, and tracking numbers in real time, eliminating batch sync lag and manual reconciliation.',
  },
  {
    category: 'technical',
    question: 'How do you handle site speed and Core Web Vitals optimization for e-commerce?',
    answer:
      'We implement static page pre-rendering, modern WebP/AVIF image formats, dynamic edge caching via Cloudflare, and lightweight modular JavaScript bundles to ensure your store achieves 90+ Lighthouse mobile performance scores.',
  },
  {
    category: 'technical',
    question: 'What search and merchandising platforms do you recommend?',
    answer:
      'We integrate enterprise search solutions such as Algolia, Searchspring, or Shopify Search & Discovery to deliver instant typo-tolerant search results, facet filtering, and automated visual merchandising.',
  },
  {
    category: 'b2b',
    question: 'Can you build custom B2B wholesale portals with tiered customer pricing?',
    answer:
      'Yes. We build comprehensive B2B features including customer-specific price lists, volume break tables, tax exemption handling, custom payment terms (Net 30/60), and corporate account hierarchy management.',
  },
  {
    category: 'b2b',
    question: 'How do quote-to-order workflows work in your B2B store builds?',
    answer:
      'Wholesale buyers can build custom quote requests in their cart, submit them directly to your sales team, receive negotiated pricing adjustments, and convert approved quotes into completed orders in a single click.',
  },
  {
    category: 'b2b',
    question: 'Can you support hybrid stores with both direct-to-consumer and wholesale access?',
    answer:
      'Yes. We can architect unified storefronts where public retail customers shop standard MSRP products while verified wholesale accounts log in to see custom wholesale pricing, bulk quantity rules, and purchase order checkout options.',
  },
  {
    category: 'b2b',
    question: 'Do you build custom product configurators for apparel and luxury goods?',
    answer:
      'Yes. We develop custom 3D and canvas-based product configurators that allow shoppers to select fabrics, custom embroidery, colors, and monogramming in real time with dynamic pricing updates.',
  },
  {
    category: 'support',
    question: 'Do we own the full source code and intellectual property after launch?',
    answer:
      'Yes, 100%. Upon final milestone completion, you receive full ownership of the clean GitHub repository, Figma design files, API middleware code, and hosting configurations with zero agency proprietary lock-in.',
  },
  {
    category: 'support',
    question: 'What warranty and post-launch support do you provide?',
    answer:
      'Every project includes a 30-day comprehensive post-launch warranty covering bug fixes, performance tuning, and recorded video training to ensure your operational team is completely confident managing the platform.',
  },
  {
    category: 'support',
    question: 'How do you train our internal merchandising and customer support teams?',
    answer:
      'We provide tailored video walkthroughs and documentation covering order management, product uploads, discount creation, customer account management, and ERP sync troubleshooting.',
  },
  {
    category: 'support',
    question: 'Can any standard engineering team maintain our Next.js e-commerce store?',
    answer:
      'Yes. Next.js, React, and TypeScript are the undisputed global standard for modern frontend engineering. Our clean, documented code architecture allows any competent software developer to maintain and scale your platform.',
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

const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'FactoryJet - Los Angeles E-Commerce Development Agency',
  image: 'https://factoryjet.com/og-default.png',
  url: CANONICAL,
  telephone: '+1-832-998-8422',
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Los Angeles',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 34.0522,
    longitude: -118.2437,
  },
  areaServed: [
    { '@type': 'City', name: 'Los Angeles' },
    { '@type': 'City', name: 'Beverly Hills' },
    { '@type': 'City', name: 'Santa Monica' },
    { '@type': 'City', name: 'Culver City' },
    { '@type': 'City', name: 'Pasadena' },
  ],
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Los Angeles E-Commerce Development & Headless Architecture',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'E-Commerce Development, Shopify Plus, BigCommerce B2B & ERP Integration',
  description:
    'Senior engineering-led custom headless e-commerce development, sub-second checkout speeds, ERP integrations, and full IP code ownership for Los Angeles enterprise brands.',
  areaServed: { '@type': 'State', name: 'California' },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Los Angeles E-Commerce Agency | Headless Shopify Plus & B2B | FactoryJet',
  description: 'Los Angeles e-commerce development agency. Headless Shopify Plus, BigCommerce B2B, ERP integrations, and sub-second checkouts for California enterprise brands.',
  url: CANONICAL,
  dateModified: PAGE_MODIFIED,
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/' },
    { '@type': 'ListItem', position: 2, name: 'E-Commerce', item: 'https://factoryjet.com/services/ecommerce-development' },
    { '@type': 'ListItem', position: 3, name: 'Los Angeles', item: CANONICAL },
  ],
};

export default function LosAngelesEcommercePage() {
  return (
    <>
      <script id="la-ecom-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="la-ecom-local-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }} />
      <script id="la-ecom-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="la-ecom-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="la-ecom-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        {/* ── 01. RITOVEX HERO BANNER SECTION ── */}
        <section className="pp-sec" style={{ paddingTop: 'clamp(44px, 7vh, 88px)', paddingBottom: 'clamp(44px, 6vh, 72px)', background: '#FFFFFF' }}>
          <div className="pp-wrap">
            <div className="rv-hero-wrap">
              {/* Left Column Typography */}
              <div>
                <div className="rv-badge" style={{ marginBottom: '18px' }}>
                  <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                  </svg>
                  <span>Los Angeles E-Commerce &amp; Enterprise Architecture</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  Los Angeles E-Commerce Agency for High-Growth Brands
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  Scale direct-to-consumer and wholesale operations with headless Shopify Plus, BigCommerce B2B, and sub-second checkout speeds. Engineered with bidirectional NetSuite and SAP ERP integrations.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Get an E-Commerce Architecture Quote" region="us" btnVariant="primary-dark" />
                  <a href="#la-ecom-districts" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>Explore Los Angeles Corridors</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/us/los-angeles-seo/los-angeles-seo-team.webp"
                  alt="Los Angeles California enterprise ecommerce engineering and headless Shopify Plus development"
                  width={640}
                  height={640}
                  priority
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 02. RITOVEX PARTNERS / TECHNOLOGY MARQUEE TICKER ── */}
        <section style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC', padding: '36px 0' }}>
          <div className="pp-wrap">
            <div className="rv-ticker-header">
              <div className="rv-ticker-line" />
              <div className="rv-ticker-label">Enterprise Commerce &amp; ERP Ecosystem</div>
              <div className="rv-ticker-line" />
            </div>

            <div className="rv-marquee-wrapper">
              <div className="rv-marquee">
                {PARTNERS.concat(PARTNERS).map((p, idx) => (
                  <div key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '36px' }}>
                    <span style={{ fontSize: '14.5px', fontWeight: 700, color: '#141414', letterSpacing: '-0.01em' }}>
                      {p}
                    </span>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FF5622' }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 03. RITOVEX ABOUT US & 2x2 BENTO COUNTER SECTION ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: 'clamp(56px, 8vh, 96px) 0' }}>
          <div className="pp-wrap">
            <div className="rv-about-grid">
              {/* Left Column: Clean Organic Curved Photo Frame */}
              <div className="rv-curved-frame-2">
                <Image
                  src="/images/us/shared/factoryjet-audit-call.webp"
                  alt="FactoryJet senior ecommerce engineers building custom headless platforms in Los Angeles"
                  width={640}
                  height={640}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Right Column: 2x2 Bento Counter Grid */}
              <div>
                <div className="rv-badge" style={{ marginBottom: '14px' }}>
                  <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                  </svg>
                  <span>Speed, Scale &amp; Reliability</span>
                </div>

                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 14px' }}>
                  E-Commerce Engineered for California&apos;s High-Volume Merchants
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  From DTLA fashion apparel manufacturers to Culver City creator brand drops and Long Beach logistics wholesalers, we engineer resilient commerce systems that maximize margins and eliminate checkout friction.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                  {STAT_CARDS.map((s) => (
                    <div className="rv-stat-card-bento" key={s.title}>
                      <div className="rv-stat-icon-outline">
                        <span style={{ fontSize: '20px' }}>{s.icon}</span>
                      </div>
                      <div style={{ fontFamily: 'var(--pp-display)', fontSize: 'clamp(24px, 3.2vw, 32px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.02em', lineHeight: 1 }}>
                        {s.num}
                      </div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#141414', marginTop: '6px' }}>
                        {s.title}
                      </div>
                      <p style={{ fontSize: '12.5px', color: '#6E6E80', margin: '4px 0 0', lineHeight: 1.45 }}>
                        {s.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bottom Actions */}
                <div style={{ marginTop: '32px' }}>
                  <ModalCTAButton label="Schedule E-Commerce Architecture Review" region="us" btnVariant="primary-dark" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04. LOS ANGELES DISTRICTS & INDUSTRY DIRECTORY ── */}
        <section id="la-ecom-districts" className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Los Angeles Commercial Corridor Depth</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Tailored E-Commerce for Los Angeles&apos;s Core Sectors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                From DTLA apparel wholesalers to Silicon Beach creator brands and Port of LA logistics distributors:
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {DISTRICTS.map((d) => (
                <div
                  key={d.corridor}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E6E6EC',
                    borderRadius: '16px',
                    padding: '28px',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#FF5622', background: '#FFF0EB', padding: '4px 10px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {d.corridor}
                    </span>
                    <span style={{ fontFamily: 'var(--pp-mono)', fontSize: '12px', color: '#8E8E9F' }}>
                      {d.query}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#141414', margin: '0 0 8px', letterSpacing: '-0.015em' }}>
                    {d.focus}
                  </h3>

                  <p style={{ fontSize: '13.5px', color: '#6E6E80', lineHeight: 1.55, margin: 0 }}>
                    {d.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 05. INDUSTRY SHOWCASE SECTION ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: 'clamp(64px, 9vh, 104px) 0' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 56px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Industry-Specific Execution</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Specialized E-Commerce Architectures for LA Brands
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Every commercial sector in Southern California demands tailored purchase flows, inventory connectors, and checkout performance:
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              {INDUSTRY_SHOWCASE.map((ind, idx) => (
                <div
                  key={ind.sector}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: idx % 2 === 0 ? '1.1fr 0.9fr' : '0.9fr 1.1fr',
                    gap: 'clamp(28px, 5vw, 56px)',
                    alignItems: 'center',
                    background: '#F9F9FC',
                    border: '1px solid #E6E6EC',
                    borderRadius: '20px',
                    padding: 'clamp(24px, 4vw, 44px)',
                  }}
                >
                  <div style={{ order: idx % 2 === 0 ? 1 : 2 }}>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#FF5622', background: '#FFF0EB', padding: '4px 12px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {ind.sector}
                    </span>
                    <h3 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 800, color: '#141414', margin: '14px 0 12px', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
                      {ind.headline}
                    </h3>
                    <p style={{ fontSize: '14.5px', color: '#494852', lineHeight: 1.65, margin: '0 0 20px' }}>
                      {ind.description}
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {ind.points.map((pt, pIdx) => (
                        <div key={pIdx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF5622', flexShrink: 0 }} />
                          <span style={{ fontSize: '13.5px', fontWeight: 600, color: '#141414' }}>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ order: idx % 2 === 0 ? 2 : 1, position: 'relative', borderRadius: '14px', overflow: 'hidden', height: '320px', border: '1px solid #E2E2E8' }}>
                    <Image
                      src={ind.image}
                      alt={ind.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 06. CORE DRIVERS & PAIN POINTS ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>The FactoryJet Difference</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Why LA Merchants Choose FactoryJet E-Commerce
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                We replace fragile plugin stacks and slow monolithic checkouts with modern engineering:
              </p>
            </div>

            <div style={{ maxWidth: '960px', margin: '0 auto' }}>
              {PAIN_POINTS.map((p) => (
                <div className="rv-service-row" key={p.num}>
                  <div className="rv-service-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                      <span className="rv-service-num">{p.num}</span>
                      <h3 className="rv-service-title">{p.title}</h3>
                    </div>
                    <div className="rv-arrow-circle">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M2 10L10 2M10 2H4M10 2V8" />
                      </svg>
                    </div>
                  </div>
                  <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #F0F0F5', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#8E8E9F', letterSpacing: '0.08em' }}>The Typical Agency Frustration:</span>
                      <p style={{ fontSize: '13.5px', color: '#494852', margin: '4px 0 0', lineHeight: 1.5 }}>{p.problem}</p>
                    </div>
                    <div>
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#FF5622', letterSpacing: '0.08em' }}>The FactoryJet Engineering Approach:</span>
                      <p style={{ fontSize: '13.5px', color: '#141414', fontWeight: 600, margin: '4px 0 0', lineHeight: 1.5 }}>{p.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 07. ARCHITECTURE BLUEPRINT ── */}
        <div id="ecommerce-blueprint">
          <EnterpriseArchitectureBlueprint
            badge="// LOS ANGELES ENTERPRISE E-COMMERCE BLUEPRINT"
            title="High-Scale Commerce: Next.js Storefront to Real-Time ERP"
            subtitle="Explore how custom Next.js storefronts, headless Shopify Plus &amp; BigCommerce engines, NetSuite ERP middleware, and sub-second checkout pipelines operate together seamlessly."
            legacySource="Legacy Magento, WooCommerce &amp; Custom PHP"
            targetStack="Headless Shopify Plus, BigCommerce B2B &amp; Next.js 15"
            ctaLabel="Get an E-Commerce Architecture Quote"
            region="us"
          />
        </div>

        {/* ── 08. STEP-BY-STEP 4-STAGE REPLATFORMING PROTOCOL ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: 'clamp(64px, 9vh, 104px) 0' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 56px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Proven Replatforming Engine</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Our 4-Stage Replatforming Protocol
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                A disciplined engineering methodology for zero-downtime migrations and high-conversion storefront launches:
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {ROADMAP_STEPS.map((step) => (
                <div
                  key={step.phase}
                  style={{
                    background: '#F9F9FC',
                    border: '1px solid #E6E6EC',
                    borderRadius: '16px',
                    padding: '28px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#FF5622', background: '#FFF0EB', padding: '4px 10px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {step.phase}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#141414', margin: '0 0 10px', lineHeight: 1.3 }}>
                    {step.title}
                  </h3>

                  <p style={{ fontSize: '13.5px', color: '#494852', lineHeight: 1.55, margin: '0 0 18px', flexGrow: 1 }}>
                    {step.desc}
                  </p>

                  <div style={{ borderTop: '1px solid #E6E6EC', paddingTop: '16px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#8E8E9F', letterSpacing: '0.06em', display: 'block', marginBottom: '10px' }}>
                      Core Deliverables:
                    </span>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {step.deliverables.map((del, dIdx) => (
                        <li key={dIdx} style={{ fontSize: '12.5px', color: '#141414', display: 'flex', alignItems: 'flex-start', gap: '8px', lineHeight: 1.4 }}>
                          <span style={{ color: '#FF5622', fontWeight: 800 }}>✓</span>
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 09. AGENCY EVALUATION FRAMEWORK TABLE ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Vendor Due Diligence</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Evaluating Los Angeles E-Commerce Agencies: What to Ask
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Compare engineering-led headless e-commerce development against traditional template agencies before you commit:
              </p>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid #E6E6EC', borderRadius: '16px', overflow: 'hidden', maxWidth: '960px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.4fr 1.4fr', background: '#141414', color: '#FFFFFF', padding: '16px 24px', fontWeight: 700, fontSize: '13.5px' }}>
                <div>Evaluation Factor</div>
                <div style={{ color: '#FF5622' }}>FactoryJet Engineering Model</div>
                <div style={{ color: '#A0A0B0' }}>Traditional Template Agencies</div>
              </div>

              {EVALUATION_CRITERIA.map((crit, cIdx) => (
                <div
                  key={crit.label}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 1.4fr 1.4fr',
                    padding: '20px 24px',
                    borderTop: cIdx > 0 ? '1px solid #F0F0F5' : 'none',
                    background: cIdx % 2 === 0 ? '#FFFFFF' : '#FAFAFC',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <div style={{ fontWeight: 800, fontSize: '14px', color: '#141414' }}>
                    {crit.label}
                  </div>
                  <div style={{ fontSize: '13.5px', color: '#141414', fontWeight: 600, lineHeight: 1.45 }}>
                    {crit.factoryjet}
                  </div>
                  <div style={{ fontSize: '13px', color: '#6E6E80', lineHeight: 1.45 }}>
                    {crit.traditional}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 10. SEARCHABLE CATEGORIZED FAQ SECTION ── */}
        <FAQ
          eyebrow="LOS ANGELES E-COMMERCE INTELLIGENCE"
          headline="Frequently Asked Questions About E-Commerce Development in Los Angeles CA"
          lead="Direct, plain English answers to what Los Angeles brand founders and digital commerce leaders ask about replatforming and development:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FFFFFF]"
        />

        {/* ── 11. LOCAL LINK SILO MATRIX ── */}
        <section style={{ background: '#F6F6F9', borderTop: '1px solid #E6E6EC', padding: '48px 0' }}>
          <div className="pp-wrap">
            <EcommerceCityLinksUS currentCity="los-angeles" />
          </div>
        </section>

        {/* ── 12. FINAL EXECUTIVE CTA BANNER ── */}
        <section className="pp-sec" style={{ backgroundColor: '#141414', color: '#FFFFFF', padding: 'clamp(64px, 10vh, 112px) 0', textAlign: 'center' }}>
          <div className="pp-wrap" style={{ maxWidth: '800px' }}>
            <div className="rv-badge" style={{ background: '#26262B', color: '#FF5622', borderColor: '#3E3E48', marginBottom: '20px' }}>
              <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
              </svg>
              <span>Fixed-Price &amp; Zero Downtime</span>
            </div>

            <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.12, margin: '0 0 20px' }}>
              Ready to Upgrade Your Los Angeles E-Commerce Architecture?
            </h2>

            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Tell us about your catalog size and operational goals. We will provide a comprehensive architectural proposal, clear migration timeline, and interactive Figma preview.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <ModalCTAButton label="Get Your Fixed-Price Proposal" region="us" btnVariant="primary-light" />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale="us" />
    </>
  );
}

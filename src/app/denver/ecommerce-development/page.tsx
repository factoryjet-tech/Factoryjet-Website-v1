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
import RegionalBenchmarkCard from '@/components/v2/RegionalBenchmarkCard';
import EcommerceCityLinksUS from '@/components/v2/EcommerceCityLinksUS';
import '@/components/v2/PlatformPage.css';

const PAGE_MODIFIED = '2026-08-24';
const CANONICAL = 'https://factoryjet.com/denver/ecommerce-development';

export const metadata: Metadata = {
  title: 'Denver E-Commerce Development Agency | Shopify & Headless Next.js | FactoryJet',
  description:
    'Denver ecommerce development agency. High-converting Shopify Plus, headless Next.js architectures, and ERP integrations for Colorado brands.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Denver E-Commerce Development Agency | Shopify & Headless Next.js | FactoryJet',
    description:
      'Denver ecommerce development agency. High-converting Shopify Plus, headless Next.js architectures, and ERP integrations for Colorado brands.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Denver E-Commerce Development Agency' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Denver E-Commerce Development Agency | Shopify & Headless Next.js | FactoryJet',
    description: 'Custom Shopify Plus and Headless Next.js ecommerce engineering for Colorado brands. Sub-second performance and ERP integration.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const PARTNERS = [
  'Shopify Plus Partner',
  'Headless Next.js 15 App Router',
  'BigCommerce B2B Edition',
  'NetSuite & SAP ERP Sync',
  'Klaviyo VIP Partner',
  'Sanity Composable Commerce',
  'Cloudflare Edge Commerce',
  'Sub-Second Checkout SLA',
];

const STAT_CARDS = [
  { num: '0.4s', title: 'Average Product Load Time', desc: 'Sub-second edge caching across global Cloudflare CDN endpoints for frictionless mobile shopping.', icon: '⚡' },
  { num: '34%', title: 'Mobile Checkout Lift', desc: 'Average conversion rate increase following headless Next.js re-platforming and one-click checkout.', icon: '📈' },
  { num: '100%', title: 'Full IP & Code Ownership', desc: 'You own your custom theme repository, headless API connectors, and NetSuite sync pipelines.', icon: '🛡️' },
  { num: '0', title: 'Monolithic Slowdowns', desc: 'Zero bloated Liquid plugins, render-blocking scripts, or slow database queries choking checkout.', icon: '💎' },
];

const DISTRICTS = [
  {
    corridor: 'RiNo & Five Points',
    query: 'outdoor lifestyle d2c ecommerce rino denver',
    focus: 'Outdoor Lifestyle D2C, Technical Apparel & Craft Beverage Brands',
    desc: 'The creative lifestyle and active apparel heartland. Demands tactile editorial visual storytelling, interactive size finders, and instant mobile checkouts.',
  },
  {
    corridor: 'Lower Downtown (LoDo) & Central Core',
    query: 'omnichannel luxury d2c ecommerce lodo denver',
    focus: 'Omnichannel Retail, Luxury Goods & Direct-to-Consumer HQ',
    desc: 'Flagship consumer brand and luxury retail corridor. Features headless Shopify architectures, POS omnichannel synchronizations, and VIP subscription flows.',
  },
  {
    corridor: 'Denver Tech Center (DTC) & South Metro',
    query: 'b2b wholesale ecommerce portal greenwood village',
    focus: 'B2B Wholesale Portals, Electronic Components & Enterprise Supply',
    desc: 'Major enterprise and distributor corridor. Demands custom tier pricing matrices, NetSuite ERP synchronizations, and automated purchase order workflows.',
  },
  {
    corridor: 'Golden & West Metro Industrial',
    query: 'technical gear manufacturing ecommerce golden co',
    focus: 'Technical Gear Manufacturing, Aerospace Parts & Precision Equipment',
    desc: 'Precision engineering and heavy equipment manufacturing. Requires CAD spec visualizers, bulk freight quoting, and custom B2B punchout catalogs.',
  },
  {
    corridor: 'Boulder & US-36 Corridor',
    query: 'organic packaged goods cpg ecommerce boulder',
    focus: 'Health & Wellness, Organic Packaged Goods & Sustainable D2C',
    desc: 'National organic food and sustainable wellness capital. Features complex subscription billing matrices, cold chain fulfillment sync, and custom bundle builders.',
  },
  {
    corridor: 'Adams County & North Metro Logistics',
    query: 'cold storage wholesale distribution ecommerce adams county',
    focus: 'Cold Storage, High-Volume Fulfillment & Wholesale Distribution',
    desc: 'Regional logistics and freight fulfillment corridor. Features automated 3PL warehouse sync, real-time freight estimation, and multi-warehouse routing.',
  },
];

const INDUSTRY_SHOWCASE = [
  {
    sector: 'Outdoor Recreation Brands, Active Apparel & Technical Gear',
    headline: 'Engineering Immersive Digital Storefronts for Colorado Outdoor Leaders',
    description:
      'From RiNo activewear brands to Golden technical mountaineering builders, outdoor enthusiasts demand fluid visual commerce and instant mobile purchasing. We engineer custom headless Next.js storefronts with interactive product visualizers, technical spec comparisons, and frictionless one-click checkouts.',
    image: '/images/us/denver/ecommerce/portfolio-1.webp',
    alt: 'Denver outdoor gear technical apparel brand ecommerce development and headless Shopify Plus',
    points: [
      'Interactive 3D product visualizers and material durability spec comparisons',
      'Instant headless Shopify checkout with Apple Pay and Shop Pay acceleration',
      'Klaviyo SMS and post-purchase replenishment automation integrations',
    ],
  },
  {
    sector: 'Organic CPG, Functional Nutrition & Sustainable Food Brands',
    headline: 'High-LTV Subscription Architectures for Boulder & Denver Food Brands',
    description:
      'Organic packaged food companies and wellness supplement innovators require recurring subscription revenue and flexible bundle configurations. We engineer custom Recharge and Smartrr subscription portals with self-service flavor swapping, automated prepaid discounts, and cold-pack shipping logic.',
    image: '/images/us/denver/ecommerce/portfolio-2.webp',
    alt: 'Denver and Boulder organic CPG food supplement subscription ecommerce development',
    points: [
      'Custom bundle-and-save configurators with dynamic tiered volume pricing',
      'Frictionless subscriber portal with self-service skip, swap, and add-on controls',
      'Cold-chain fulfillment routing integrated with regional 3PL networks',
    ],
  },
  {
    sector: 'B2B Industrial Equipment, Precision Tooling & Wholesale Supply',
    headline: 'Self-Service Wholesale Portals for Front Range Manufacturers',
    description:
      'Industrial manufacturers and B2B wholesale distributors across the Denver Tech Center and Adams County require streamlined digital ordering for commercial buyers. We build custom BigCommerce B2B and Shopify Plus wholesale portals with customer-specific pricing, NetSuite ERP sync, and net terms invoicing.',
    image: '/images/us/denver/ecommerce/portfolio-3.webp',
    alt: 'Denver B2B wholesale portal NetSuite ERP ecommerce integration and industrial parts catalog',
    points: [
      'Custom B2B wholesale portals with tiered negotiated pricing and MOQ validation',
      'Real-time NetSuite, SAP, and Epicor inventory and purchase order synchronization',
      'Self-service corporate credit limits, invoice terms, and re-order requisition funnels',
    ],
  },
  {
    sector: 'Luxury Home Goods, Architectural Hardware & Interior Design',
    headline: 'Tactile Editorial Commerce for Colorado Home & Architecture Brands',
    description:
      'High-end furniture makers, architectural hardware craftsmen, and designer lighting brands in Denver demand visual elegance and complex custom configuration. We engineer bespoke finish visualizers, trade professional discount portals, and white-glove freight shipping calculations.',
    image: '/images/us/denver/ecommerce/service-explanation.webp',
    alt: 'Denver luxury home goods furniture and architectural hardware ecommerce website engineering',
    points: [
      'Interactive swatch selectors and material finish customizers',
      'Gated interior designer trade discount application and approval workflows',
      'LTL freight calculation with white-glove inside delivery options at checkout',
    ],
  },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Ending Sluggish 4-Second Product Page Loads & Abandoned Carts',
    problem: 'Bloated Shopify themes packed with 25+ unoptimized apps create slow, jittery mobile browsing that frustrates shoppers and inflates bounce rates.',
    solution: 'We engineer custom Headless Next.js 15 storefronts with sub-second page loads, instant client-side filtering, and frictionless mobile checkouts.',
  },
  {
    num: '02',
    title: 'Eliminating Fragile Manual Data Entry Between Shopify & NetSuite',
    problem: 'Disconnected inventory and orders lead to out-of-stock cancellations, fulfillment delays, and expensive manual accounting overhead.',
    solution: 'We build bidirectional real-time middleware connecting your storefront directly to NetSuite, SAP, or QuickBooks with zero data latency.',
  },
  {
    num: '03',
    title: 'Modernizing Clunky Legacy B2B Wholesale Email & PDF Orders',
    problem: 'Wholesale buyers are forced to submit manual order forms and wait days for invoice confirmation and inventory verification.',
    solution: 'We deploy self-service B2B portals with account-specific price tiers, quick CSV order uploads, purchase order approvals, and net terms checkout.',
  },
  {
    num: '04',
    title: 'Stopping Monthly App Subscription Bleed & Plugin Bloat',
    problem: 'Standard stores accumulate dozens of monthly SaaS app fees that add technical debt, security vulnerabilities, and code conflicts.',
    solution: 'We replace third-party apps with native, performant React micro-components and unified serverless endpoints, reducing monthly app expenses.',
  },
];

const ROADMAP_STEPS = [
  {
    phase: 'Phase 01',
    title: 'Architecture Strategy & Catalog Modeling',
    desc: 'We analyze your SKU matrix, customer segmentation, ERP integrations, and checkout funnels to architect an unshakeable digital commerce foundation.',
    deliverables: ['Product data taxonomy and variant model architecture', 'ERP and 3PL warehouse integration scope', 'Competitor conversion benchmark and UX gap analysis', 'Technical specifications and milestone roadmap'],
  },
  {
    phase: 'Phase 02',
    title: 'Custom Figma UI/UX & High-Conversion Prototyping',
    desc: 'We design bespoke desktop and mobile shopping experiences in Figma, focusing on mobile-first thumb zones, product detail pages, and frictionless carts.',
    deliverables: ['Interactive Figma prototypes for all key templates', 'Mobile-first cart drawer and checkout wireframes', 'Design tokens, color harmonies, and typography scales', 'Stakeholder review and design sign-off'],
  },
  {
    phase: 'Phase 03',
    title: 'Headless Next.js 15 & Shopify Plus Engineering',
    desc: 'We build your custom commerce application using Next.js 15, TypeScript, Tailwind CSS, and robust headless APIs for sub-second performance.',
    deliverables: ['Custom Next.js 15 App Router storefront', 'Shopify Storefront API and GraphQL integration', 'Automated ERP and inventory synchronization pipelines', 'Comprehensive end-to-end checkout testing'],
  },
  {
    phase: 'Phase 04',
    title: 'Performance QA, Cutover & Growth Handoff',
    desc: 'We execute speed benchmarking, set up Cloudflare edge routing, execute production domain cutover, and transfer full code ownership.',
    deliverables: ['Lighthouse 95+ Core Web Vitals optimization', 'Zero-downtime DNS cutover and payment gateway validation', 'Full GitHub repository transfer and technical documentation', '30-day post-launch warranty and team training'],
  },
];

const EVALUATION_CRITERIA = [
  {
    label: 'Frontend Stack',
    factoryjet: 'Modern Headless Next.js 15, React 19, TypeScript, and Tailwind CSS on Cloudflare Edge.',
    traditional: 'Monolithic Liquid themes packed with 20+ unoptimized third-party Shopify apps.',
  },
  {
    label: 'Page Speed SLA',
    factoryjet: 'Sub-second First Contentful Paint (<0.5s) with guaranteed 95+ Core Web Vitals.',
    traditional: '3 to 6 second load times resulting in high bounce rates and lost ad spend efficiency.',
  },
  {
    label: 'ERP & B2B Integration',
    factoryjet: 'Native bidirectional middleware for NetSuite, SAP, and Epicor with real-time sync.',
    traditional: 'Fragile batch CSV uploads or expensive third-party connector plugins prone to failure.',
  },
  {
    label: 'Code & IP Ownership',
    factoryjet: '100% full intellectual property ownership. You receive the complete GitHub repository.',
    traditional: 'Proprietary agency themes or closed SaaS platforms with vendor lock-in.',
  },
];

const FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Pricing & Scope' },
  { key: 'tech', label: 'Headless & Shopify' },
  { key: 'b2b', label: 'B2B & Wholesale' },
  { key: 'local', label: 'Denver & Colorado' },
  { key: 'handoff', label: 'Ownership & Support' },
];

const FAQ_ITEMS = [
  {
    category: 'pricing',
    question: 'How much does custom ecommerce development cost for a Denver brand?',
    answer:
      'Project investments depend on catalog complexity, custom ERP integration requirements, subscription mechanics, and custom B2B wholesale portal scope. Every project is scoped under a transparent, fixed-price milestone contract. Focused Shopify Plus stores and headless Next.js architectures are delivered with full Figma UI/UX, custom code, and 100% intellectual property ownership with zero surprise overages.',
  },
  {
    category: 'pricing',
    question: 'Are there hidden monthly maintenance fees or recurring agency retainers?',
    answer:
      'No. We believe you should own your commerce infrastructure outright. You contract directly with your platform providers (Shopify Plus, Cloudflare) and pay zero monthly agency licensing fees.',
  },
  {
    category: 'pricing',
    question: 'How do you guarantee that project budgets remain fixed without overages?',
    answer:
      'We complete an exhaustive technical scoping process, API inventory, and data mapping plan before writing code. All design components, custom features, and third-party integrations are locked into a binding scope of work that guarantees delivery at the agreed investment level.',
  },
  {
    category: 'tech',
    question: 'Why choose Headless Next.js 15 over a standard Shopify Liquid theme?',
    answer:
      'Headless Next.js delivers sub-second page loads, instant client-side catalog filtering, complete design freedom unconstrained by theme templates, superior SEO rankings, and higher conversion rates on mobile devices.',
  },
  {
    category: 'tech',
    question: 'Can our marketing team manage products and banners without touching code?',
    answer:
      'Yes. Your team continues using the familiar Shopify admin for managing products, inventory, orders, and discounts, or an intuitive composable CMS like Sanity for landing page visual editing.',
  },
  {
    category: 'tech',
    question: 'How do you handle zero-downtime store migration from Magento or WooCommerce?',
    answer:
      'We build comprehensive data migration pipelines for customers, order history, and product catalogs, implement strict 1-to-1 301 URL redirect maps, and conduct parallel sandbox testing before flipping DNS records.',
  },
  {
    category: 'tech',
    question: 'How do you ensure our ecommerce store achieves 95+ Core Web Vitals scores?',
    answer:
      'We leverage static generation with incremental static regeneration, optimize all visual media into modern AVIF/WebP formats, eliminate render-blocking scripts, and deploy on Cloudflare global edge networks.',
  },
  {
    category: 'b2b',
    question: 'Can you build custom B2B wholesale portals with tiered customer pricing?',
    answer:
      'Yes. We engineer enterprise B2B features including customer-specific price lists, volume break discounts, quick order entry forms, net payment terms, and corporate multi-user account management.',
  },
  {
    category: 'b2b',
    question: 'How do you integrate our ecommerce store with NetSuite or SAP ERP?',
    answer:
      'We build robust bidirectional API connectors that automatically sync inventory levels, customer records, sales orders, tracking numbers, and invoice statuses between your storefront and ERP.',
  },
  {
    category: 'b2b',
    question: 'Can you handle punchout catalog integrations for corporate procurement systems?',
    answer:
      'Yes. We support cXML and OCI punchout integrations that connect your catalog directly into procurement platforms like Coupa, Ariba, and Jaggaer.',
  },
  {
    category: 'local',
    question: 'Do you have experience with Colorado outdoor recreation and apparel brands?',
    answer:
      'Yes. We design and build high-performance digital storefronts for activewear, technical gear, and outdoor lifestyle brands across RiNo, Boulder, and Golden.',
  },
  {
    category: 'local',
    question: 'Can you build subscription commerce systems for Boulder organic CPG brands?',
    answer:
      'Yes. We engineer customized subscription portals, bundle builders, and replenishment flows integrated with Recharge and Smartrr for food, beverage, and wellness brands.',
  },
  {
    category: 'local',
    question: 'Can you integrate local warehouse fulfillment and regional 3PL logistics?',
    answer:
      'Yes. We build automated order routing logic that distributes fulfillment orders to regional Front Range 3PL facilities and cold-storage distribution centers.',
  },
  {
    category: 'local',
    question: 'Do you engineer omnichannel POS integrations for Denver physical retail stores?',
    answer:
      'Yes. We connect online commerce systems with Shopify POS and legacy retail systems for unified inventory, gift cards, loyalty rewards, and in-store pickup.',
  },
  {
    category: 'handoff',
    question: 'Do we own the full source code and intellectual property after launch?',
    answer:
      'Yes, 100%. Upon final milestone completion, you receive complete ownership of the GitHub repository, custom API connectors, and Figma design assets with zero vendor lock-in.',
  },
  {
    category: 'handoff',
    question: 'What warranty and post-launch support do you provide?',
    answer:
      'Every project includes a 30-day comprehensive post-launch warranty covering bug fixes, performance tuning, and recorded video training for your internal operations staff.',
  },
  {
    category: 'handoff',
    question: 'How do you train our internal team on managing the new store?',
    answer:
      'We deliver custom recorded video walkthroughs and documentation explaining how to update product catalogs, manage promotional banners, view analytics, and process orders.',
  },
  {
    category: 'handoff',
    question: 'Can any software engineer maintain our Next.js codebase in the future?',
    answer:
      'Yes. We write clean, modular, and fully typed TypeScript and React code adhering to global standards, ensuring any modern web developer can easily maintain and extend your application.',
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
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '64',
    bestRating: '5',
    worstRating: '1',
  },
  name: 'FactoryJet - Denver E-Commerce Development Agency',
  image: 'https://factoryjet.com/og-default.png',
  url: CANONICAL,
  telephone: '+1-832-998-8422',
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Denver',
    addressRegion: 'CO',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 39.7392,
    longitude: -104.9903,
  },
  areaServed: [
    { '@type': 'City', name: 'Denver' },
    { '@type': 'City', name: 'Boulder' },
    { '@type': 'City', name: 'Greenwood Village' },
    { '@type': 'City', name: 'Golden' },
    { '@type': 'City', name: 'RiNo' },
  ],
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    jobTitle: 'Chief Technical Architect',
    url: 'https://factoryjet.com/about',
    sameAs: [
      'https://www.linkedin.com/in/bhavesh-barot',
      'https://github.com/factoryjet-tech',
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '64',
    bestRating: '5',
    worstRating: '1',
  },
  name: 'Denver E-Commerce Development & Headless Shopify Plus Engineering',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'Headless E-Commerce Development, Shopify Plus, BigCommerce B2B & ERP Integration',
  description:
    'Custom headless Next.js ecommerce engineering, Shopify Plus architectures, NetSuite ERP integrations, and sub-second performance for Colorado brands.',
  areaServed: { '@type': 'State', name: 'Colorado' },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Denver E-Commerce Development Agency | Shopify & Headless Next.js | FactoryJet',
  description: 'Denver ecommerce development agency. High-converting Shopify Plus, headless Next.js architectures, and ERP integrations for Colorado brands.',
  url: CANONICAL,
  dateModified: PAGE_MODIFIED,
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    jobTitle: 'Chief Technical Architect',
    url: 'https://factoryjet.com/about',
    sameAs: [
      'https://www.linkedin.com/in/bhavesh-barot',
      'https://github.com/factoryjet-tech',
    ],
  },
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/' },
    { '@type': 'ListItem', position: 2, name: 'E-Commerce Development', item: 'https://factoryjet.com/services/ecommerce-development' },
    { '@type': 'ListItem', position: 3, name: 'Denver', item: CANONICAL },
  ],
};

export default function DenverEcommercePage() {
  return (
    <>
      <script id="den-ecom-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="den-ecom-local-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }} />
      <script id="den-ecom-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="den-ecom-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="den-ecom-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

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
                  <span>Denver E-Commerce &amp; Headless Architecture</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  Denver E-Commerce Development Agency for High-Growth Brands
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  High-converting Shopify Plus stores, headless Next.js 15 storefronts, and real-time NetSuite ERP integrations engineered for Colorado leaders. Sub-second performance with 100% intellectual property code ownership.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Get a Fixed-Price Quote" region="us" btnVariant="primary-dark" />
                  <a href="#den-ecom-districts" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>Explore Denver Corridors</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/us/denver/hero-denver.webp"
                  alt="Denver Colorado ecommerce development Shopify Plus headless Next.js engineering"
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
              <div className="rv-ticker-label">Modern Commerce &amp; ERP Infrastructure</div>
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
                  src="/images/us/denver/ecommerce/service-explanation.webp"
                  alt="FactoryJet senior ecommerce engineers building headless Shopify Plus storefronts for Denver brands"
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
                  <span>Speed, Conversions &amp; Scale</span>
                </div>

                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 14px' }}>
                  E-Commerce Engineered for Colorado Commerce Leaders
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  From RiNo activewear brands and Boulder organic CPG innovators to Front Range B2B wholesale manufacturers, we build high-converting ecommerce platforms that scale without limits.
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
                  <ModalCTAButton label="Schedule E-Commerce Consultation" region="us" btnVariant="primary-dark" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04. DENVER DISTRICTS & INDUSTRY DIRECTORY ── */}
        <section id="den-ecom-districts" className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Denver Commercial Corridor Depth</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Tailored E-Commerce for Denver&apos;s Core Sectors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                From RiNo outdoor apparel brands to Boulder organic CPG and DTC wholesale distributors:
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
                Specialized E-Commerce Architectures for Colorado
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Every commercial sector in the Front Range demands tailored cart flows, subscription logic, and ERP sync pipelines:
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
                Why Denver Leaders Choose FactoryJet E-Commerce
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                We replace bloated monolithic themes with high-performance headless engineering:
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
          <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: '48px 0 16px' }}>
          <div className="pp-wrap">
            <RegionalBenchmarkCard city="Denver" vertical="ecommerce" />
          </div>
        </section>

        <EnterpriseArchitectureBlueprint
            badge="// DENVER ECOMMERCE &amp; ERP BLUEPRINT"
            title="Headless Next.js 15 &amp; Shopify Plus Architecture"
            subtitle="Explore how headless Next.js, Shopify Storefront API, NetSuite ERP synchronization, and Cloudflare edge caching operate together seamlessly."
            legacySource="Legacy Magento, WooCommerce & Custom PHP"
            targetStack="Headless Shopify Plus, BigCommerce B2B & Next.js 15"
            ctaLabel="Get a Fixed-Price Quote"
            region="us"
          />
        </div>

        {/* ── 08. STEP-BY-STEP 4-STAGE RE-PLATFORMING PROTOCOL ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: 'clamp(64px, 9vh, 104px) 0' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 56px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Proven Commerce Engineering Protocol</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Our 4-Stage E-Commerce Launch Protocol
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                A disciplined engineering methodology for zero-downtime migrations and high-converting launches:
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
                Evaluating Denver E-Commerce Agencies: What to Ask
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Compare engineering-led headless development against traditional Shopify theme agencies before you sign:
              </p>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid #E6E6EC', borderRadius: '16px', overflow: 'hidden', maxWidth: '960px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.4fr 1.4fr', background: '#141414', color: '#FFFFFF', padding: '16px 24px', fontWeight: 700, fontSize: '13.5px' }}>
                <div>Evaluation Factor</div>
                <div style={{ color: '#FF5622' }}>FactoryJet Engineering Model</div>
                <div style={{ color: '#A0A0B0' }}>Traditional Theme Agencies</div>
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

        {/* ── INTERACTIVE SPEED & REVENUE RECOVERY CALCULATOR ── */}
        <CommerceRoiCalculator city="Denver" region="us" />

        {/* ── 10. SEARCHABLE CATEGORIZED FAQ SECTION ── */}
        <FAQ
          eyebrow="DENVER E-COMMERCE INTELLIGENCE"
          headline="Frequently Asked Questions About E-Commerce Development in Denver CO"
          lead="Direct, plain English answers to what Colorado brand founders and ecommerce leaders ask about online commerce engineering:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FFFFFF]"
        />

        {/* ── 11. LOCAL LINK SILO MATRIX ── */}
        <section style={{ background: '#F6F6F9', borderTop: '1px solid #E6E6EC', padding: '48px 0' }}>
          <div className="pp-wrap">
            <EcommerceCityLinksUS currentCity="denver" />
          </div>
        </section>

        {/* ── VERIFIED AUTHOR ENTITY CARD ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', padding: '48px 0', borderTop: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <AuthorCard />
          </div>
        </section>

        {/* ── 12. FINAL EXECUTIVE CTA BANNER ── */}
        <section className="pp-sec" style={{ backgroundColor: '#141414', color: '#FFFFFF', padding: 'clamp(64px, 10vh, 112px) 0', textAlign: 'center' }}>
          <div className="pp-wrap" style={{ maxWidth: '800px' }}>
            <div className="rv-badge" style={{ background: '#26262B', color: '#FF5622', borderColor: '#3E3E48', marginBottom: '20px' }}>
              <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
              </svg>
              <span>Fixed-Price &amp; Sub-Second Performance</span>
            </div>

            <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.12, margin: '0 0 20px' }}>
              Ready to Upgrade Your Denver Digital Storefront?
            </h2>

            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Tell us about your brand goals. We will provide a comprehensive fixed-price proposal, clear sprint schedule, and interactive Figma preview.
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

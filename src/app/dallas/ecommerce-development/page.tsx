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
const CANONICAL = 'https://factoryjet.com/dallas/ecommerce-development';

export const metadata: Metadata = {
  title: 'Dallas E-Commerce Development Agency | Shopify Plus & B2B | FactoryJet',
  description:
    'Dallas ecommerce development agency. Shopify Plus, BigCommerce B2B, NetSuite ERP integrations, and custom headless commerce for Texas brands.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Dallas E-Commerce Development Agency | Shopify Plus & B2B | FactoryJet',
    description:
      'Dallas ecommerce development agency. Shopify Plus, BigCommerce B2B, NetSuite ERP integrations, and custom headless commerce for Texas brands.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Dallas E-Commerce Development Agency' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dallas E-Commerce Development Agency | Shopify Plus & B2B | FactoryJet',
    description: 'Enterprise Shopify Plus, B2B wholesale portals, and headless commerce engineering in Dallas TX.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const PARTNERS = [
  'Shopify Plus Certified',
  'BigCommerce B2B Edition',
  'NetSuite ERP Integration',
  'SAP & Microsoft Dynamics',
  'Next.js 15 Headless',
  'Stripe Payments & Klarna',
  'Klaviyo Enterprise',
  'Gorgias & Rebuy Engine',
];

const STAT_CARDS = [
  { num: 'Sub-Second', title: 'Catalog Load Performance', desc: 'High-speed headless storefronts rendering 100,000+ SKU catalogs instantly on mobile devices.', icon: '⚡' },
  { num: '100%', title: 'ERP & Inventory Sync', desc: 'Real-time bidirectional synchronization with NetSuite, SAP, Acumatica, and custom warehouse OMS.', icon: '🔄' },
  { num: 'Custom B2B', title: 'Wholesale Portals', desc: 'Tiered customer pricing, custom payment terms (Net 30/60), punchout catalogs, and quick order pads.', icon: '🏢' },
  { num: 'Zero Bloat', title: 'Custom Liquid & React', desc: 'Eliminate third-party app conflicts and slow cart scripts with clean, performant native code.', icon: '🛡️' },
];

const DISTRICTS = [
  {
    corridor: 'Uptown Dallas & West Village',
    query: 'shopify plus agency dallas',
    focus: 'Direct-to-Consumer Apparel, Luxury Lifestyle & Beauty',
    desc: 'Premier consumer brand headquarters in downtown Dallas. We build bespoke Shopify Plus flagships with custom cart drawers, personalized cross-sells, and frictionless Shop Pay checkout flows.',
  },
  {
    corridor: 'Fort Worth & Alliance Logistics Hub',
    query: 'b2b ecommerce development fort worth',
    focus: 'Industrial Equipment, Replacement Parts & Machinery Wholesale',
    desc: 'The southwest’s largest manufacturing and distribution cluster. We architect B2B ordering portals featuring custom tier pricing, CAD spec sheet downloads, and automated RFQ quote workflows.',
  },
  {
    corridor: 'Plano & Telecom Corridor',
    query: 'headless ecommerce development plano',
    focus: 'Consumer Tech, Hardware & Electronics Commerce',
    desc: 'Technology and hardware headquarters corridor. We build sub-second headless Next.js commerce storefronts supporting complex technical product configurators and international currencies.',
  },
  {
    corridor: 'Frisco & The Star Innovation District',
    query: 'subscription ecommerce agency frisco',
    focus: 'Athletic Apparel, Sports Tech & Nutrition Subscriptions',
    desc: 'Fast-expanding sports lifestyle hub. We engineer recurring subscription bundles, custom replenishment funnels, and frictionless one-click mobile checkout experiences.',
  },
  {
    corridor: 'Irving & Las Colinas Corporate Center',
    query: 'corporate merchandise portal irving',
    focus: 'Corporate Merchandising, Gated Portals & Supply Chains',
    desc: 'Major corporate campus cluster. We build enterprise B2B merchandise portals with company account hierarchies, purchase order terms (Net 30/60), and one-click repeat ordering tools.',
  },
  {
    corridor: 'Arlington & Great Southwest Industrial District',
    query: 'wholesale portal development arlington tx',
    focus: 'Commercial Packaging, Industrial Tools & Bulk Distribution',
    desc: 'Dense logistics and bulk distribution center. We implement bulk tiered pricing matrices, freight carrier LTL rate calculators, and automated Net-30 invoice settlement portals.',
  },
];

const INDUSTRY_SHOWCASE = [
  {
    sector: 'Industrial Equipment, Replacement Parts & Machinery B2B',
    headline: 'Digitizing Complex Wholesale Operations for Texas Industrial Leaders',
    description:
      'Texas industrial distributors handling tens of thousands of SKUs require more than basic consumer checkout templates. We engineer enterprise B2B portals on Shopify Plus and BigCommerce B2B Edition featuring customer-specific contract pricing, exploded parts diagram search, instant CSV bulk ordering, and real-time NetSuite or SAP inventory synchronization.',
    image: '/images/us/marketplace/shopify-plus-b2b-wholesale-portal.webp',
    alt: 'Dallas industrial equipment and B2B wholesale ecommerce portal development',
    points: [
      'Customer-specific contract pricing tiers, volume discounts, and gated wholesale catalogs',
      'Exploded schematic parts lookup and instant bulk CSV order upload tools',
      'Direct bidirectional integration with NetSuite, SAP, and Acumatica ERP systems',
    ],
  },
  {
    sector: 'Direct-to-Consumer Apparel, Footwear & Luxury Goods',
    headline: 'Sub-Second Visual Flagships Driving Global Conversion Rates',
    description:
      'Modern consumer brands cannot tolerate slow mobile cart rendering or clunky checkout flows. We engineer custom Shopify Plus themes and headless Next.js storefronts featuring instant size and color swatch switching, dynamic bundle builders, native Shop Pay integration, and predictive search that doubles mobile conversion rates.',
    image: '/images/us/marketplace/miami-luxury-crossborder-creator-commerce.webp',
    alt: 'Dallas direct to consumer apparel and lifestyle brand ecommerce development',
    points: [
      'Sub-second mobile product page rendering with instant image and variant switches',
      'Custom slide-out cart drawers with tiered free-shipping progress bars and upsells',
      'Native integration with Klaviyo, Gorgias, Rebuy, and Meta conversion APIs',
    ],
  },
  {
    sector: 'Sports Nutrition, Wellness & Recurring Subscriptions',
    headline: 'High-Volume Recurring Commerce & Custom Replenishment Funnels',
    description:
      'Frisco and Dallas are epicenters for sports nutrition and wellness lifestyle brands. We build high-performance storefronts with custom subscription cadence selectors, automated loyalty tier discounts, build-a-box bundlers, and seamless customer retention portals.',
    image: '/images/us/marketplace/bigcommerce-b2b-edition-quoting.webp',
    alt: 'Dallas sports nutrition and subscription ecommerce platform engineering',
    points: [
      'Custom subscription cadence engines with flexible product swaps and pause options',
      'Interactive build-a-box bundlers with live volume discount calculators',
      'One-click mobile re-order workflows powered by Shop Pay and Apple Pay',
    ],
  },
  {
    sector: 'Commercial Supply, Packaging & Wholesale Distribution',
    headline: 'Streamlined Digital Procurement for Commercial Distributors',
    description:
      'Supplying commercial facilities, logistics fleets, and construction jobsites requires purchase order processing, multi-warehouse routing, and tax exemption management. We construct verified B2B marketplaces featuring automated tax-exempt document verification, Net 30/60 purchase order workflows, and multi-department approval hierarchies.',
    image: '/images/us/marketplace/omnichannel-vs-multichannel-unified-data.webp',
    alt: 'Dallas commercial supply and wholesale distribution ecommerce development',
    points: [
      'Automated state tax exemption certificate collection and automated verification',
      'Purchase order (PO) generation with multi-tiered corporate approval workflows',
      'Real-time LTL freight rate calculators integrated with destination commercial dock rules',
    ],
  },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Ending App-Stack Bloat & Mobile Cart Abandonment',
    problem: 'Standard Shopify agencies install 30+ recurring monthly subscription apps that conflict with each other, slow down page speeds, and cause cart checkout crashes.',
    solution: 'We engineer custom Liquid and TypeScript components natively into your theme, eliminating bloated third-party apps while cutting monthly software overhead.',
  },
  {
    num: '02',
    title: 'Eliminating Manual Order Entry & ERP Inventory Disconnects',
    problem: 'Operating disjointed ecommerce platforms forces customer service teams to manually re-enter orders into NetSuite or SAP, causing shipping delays and stockouts.',
    solution: 'We construct robust bidirectional middleware synchronizing inventory counts, customer pricing, sales orders, and tracking updates in real time.',
  },
  {
    num: '03',
    title: 'Replacing Outdated B2B Phone & Fax Orders with Self-Service Portals',
    problem: 'Wholesale buyers in the DFW industrial corridor expect self-service digital portals with custom account terms, volume pricing, and reorder pads.',
    solution: 'We build enterprise B2B wholesale portals with company account hierarchies, purchase order terms (Net 30/60), and one-click repeat ordering tools.',
  },
  {
    num: '04',
    title: 'Preventing Catastrophic Traffic Drops During Ecommerce Migrations',
    problem: 'Replatforming from Magento or WooCommerce without meticulous technical SEO planning causes 404 errors, loss of keyword rankings, and immediate revenue drops.',
    solution: 'We execute 100% URL-by-URL redirect mapping, preserve canonical metadata, and inject structured Product JSON-LD schema to maintain and grow search revenue.',
  },
];

const ROADMAP_STEPS = [
  {
    phase: 'Phase 01',
    title: 'Catalog Data Modeling & ERP Scoping',
    desc: 'We map product variants, SKU hierarchies, B2B pricing matrices, and technical API specifications for NetSuite or SAP integration.',
    deliverables: ['Catalog schema & variant mapping', 'ERP integration API specification', 'B2B pricing tier & account rules', 'Desktop & mobile UX wireframes'],
  },
  {
    phase: 'Phase 02',
    title: 'Custom Storefront & Theme Engineering',
    desc: 'We develop high-performance Shopify Plus or BigCommerce themes with clean native Liquid, custom cart drawers, and sub-second catalog speeds.',
    deliverables: ['Custom theme development', 'Sub-second mobile optimization', 'Interactive product configurator', 'Slide-out cart drawer with upsells'],
  },
  {
    phase: 'Phase 03',
    title: 'Backend ERP & Middleware Integration',
    desc: 'We connect your storefront to ERP, CRM, and warehouse management systems, enabling real-time stock sync and automated wholesale workflows.',
    deliverables: ['NetSuite / SAP bidirectional sync', 'B2B Net 30/60 checkout workflow', 'Automated 3PL warehouse routing', 'Payment gateway & Shop Pay setup'],
  },
  {
    phase: 'Phase 04',
    title: 'Data Migration, End-to-End QA & Launch',
    desc: 'We migrate historic customer data and order histories, execute 301 redirect mapping, validate transactions, and go live.',
    deliverables: ['Customer & order history migration', '100% 301 URL redirect preservation', 'Checkout load & fraud rule testing', 'Staff training & post-launch warranty'],
  },
];

const EVALUATION_CRITERIA = [
  {
    label: 'Code Quality & App Reliance',
    factoryjet: 'Clean Native Architecture. Custom Liquid and TypeScript components with minimal third-party apps, ensuring sub-second speeds and zero plugin conflict crashes.',
    traditional: 'Heavy App Stacking. 35+ third-party monthly subscription apps stacked onto an off-the-shelf theme, resulting in slow 5-second load times and high recurring app costs.',
  },
  {
    label: 'ERP & Complex System Integration',
    factoryjet: 'Enterprise Middleware Expertise. Direct API synchronization with NetSuite, SAP, Acumatica, and custom warehouse management systems.',
    traditional: 'Basic Store Setup Only. Limited to standard Shopify settings with no capability to handle custom B2B workflows, ERP data feeds, or EDI order streams.',
  },
  {
    label: 'Mobile Speed & Conversion Optimization',
    factoryjet: 'Sub-Second Performance SLA. Static asset pre-rendering and optimized image pipelines designed to maximize mobile checkout completion rates.',
    traditional: 'Unoptimized Out-of-the-Box Themes. Bloated scripts and uncompressed assets that drag mobile Lighthouse performance below 40/100.',
  },
  {
    label: 'SEO Migration & Traffic Preservation',
    factoryjet: 'Zero-Downtime SEO Protection. 100% URL-by-URL redirect mapping, canonical preservation, and structured Product JSON-LD schema.',
    traditional: 'Neglected Redirects. Generic wildcard redirects that cause 404 errors, catastrophic organic keyword drops, and lost revenue during replatforming.',
  },
];

const FAQ_CATEGORIES = [
  { key: 'platforms', label: 'Platforms & Tech' },
  { key: 'b2b', label: 'B2B Wholesale' },
  { key: 'integrations', label: 'ERP & Integrations' },
  { key: 'migration', label: 'Migration & SEO' },
  { key: 'cost', label: 'Pricing & Scope' },
  { key: 'speed', label: 'Speed & Conversion' },
];

const FAQ_ITEMS = [
  {
    category: 'platforms',
    question: 'Why should a Dallas business choose Shopify Plus over Magento or custom legacy platforms?',
    answer:
      'Legacy platforms like Magento (Adobe Commerce) or outdated WooCommerce setups demand substantial ongoing server maintenance, security patching, and expensive DevOps overhead. Shopify Plus delivers 99.99% uptime, infinite elasticity during holiday volume spikes, native multi-currency support, and the highest-converting checkout in commerce (Shop Pay) while reducing total cost of ownership by up to 60%.',
  },
  {
    category: 'b2b',
    question: 'How do you engineer B2B wholesale capabilities on Shopify Plus?',
    answer:
      'We utilize Shopify Plus B2B features alongside custom middleware to implement tiered contract pricing, custom payment terms (Net 30/60), company account hierarchies, purchase order processing, quantity price breaks, and gated product catalogs, allowing you to run B2B and DTC operations seamlessly from a single admin backend.',
  },
  {
    category: 'integrations',
    question: 'Can you integrate our Dallas ecommerce store with NetSuite or SAP ERP?',
    answer:
      'Yes. We build robust, bidirectional API integrations connecting your storefront with NetSuite, SAP, Acumatica, Microsoft Dynamics, or custom ERP systems. This synchronizes inventory counts, customer-specific pricing matrices, sales orders, customer credits, and fulfillment tracking numbers in real time.',
  },
  {
    category: 'migration',
    question: 'How do you prevent organic search ranking drops during an ecommerce replatforming?',
    answer:
      'We execute a comprehensive 1-to-1 URL redirect map for every legacy product, category, and blog URL. We preserve title tag structures, breadcrumbs, and image alt text, while injecting rich Product, AggregateRating, and Offer JSON-LD schema to maintain and enhance your organic search visibility.',
  },
  {
    category: 'cost',
    question: 'How much does an enterprise ecommerce development project cost in Dallas?',
    answer:
      'Project investments depend on catalog complexity, custom UI requirements, B2B wholesale scope, and ERP integration depth. We provide fixed-price milestone contracts with transparent scopes and zero surprise fees. Every proposal includes full UX design, custom development, data migration, and launch warranty.',
  },
  {
    category: 'platforms',
    question: 'What is headless commerce and is it right for our brand?',
    answer:
      'Headless commerce decouples the frontend user experience (built in Next.js and React) from the backend commerce engine (such as Shopify Plus). It delivers sub-second page loads, limitless design flexibility, and dynamic omnichannel experiences. It is ideal for high-growth brands with complex product configurators or multi-region flagships.',
  },
  {
    category: 'speed',
    question: 'How do you optimize mobile conversion rates for Dallas ecommerce stores?',
    answer:
      'We optimize every touchpoint: instant product variant switching, sticky Add-to-Cart buttons, high-speed mobile search with instant autocomplete, slide-out cart drawers with free-shipping progress bars, and one-tap checkout via Apple Pay and Shop Pay.',
  },
  {
    category: 'migration',
    question: 'Can you migrate our historical customer data and order history from WooCommerce or Magento?',
    answer:
      'Yes. We extract, sanitize, and migrate complete customer databases, past order histories, product variants, metafields, customer reviews, and category structures with zero data loss.',
  },
  {
    category: 'platforms',
    question: 'Do you build custom subscription billing workflows?',
    answer:
      'Yes. We integrate native subscription engines like Recharge, Smartrr, or custom Shopify Subscriptions API workflows, allowing customers to easily manage recurring orders, swap products, and adjust delivery frequencies from a seamless customer portal.',
  },
  {
    category: 'b2b',
    question: 'How do you handle shipping calculations for heavy freight and LTL shipments in Texas?',
    answer:
      'For industrial B2B and machinery distributors, we integrate custom freight rate calculators (such as FreightClub or ShipStation Carrier API) to provide real-time LTL shipping quotes based on pallet dimensions, weight, and destination commercial loading dock attributes.',
  },
  {
    category: 'speed',
    question: 'How do you ensure our ecommerce storefront remains fast with hundreds of products?',
    answer:
      'We avoid bloated third-party apps by writing clean native Liquid and React code. We implement responsive WebP image pipelines, server-side caching, and asynchronous script loading to guarantee sub-second catalog browsing and 90+ Core Web Vitals scores.',
  },
  {
    category: 'platforms',
    question: 'Can our store support multi-currency and international cross-border sales?',
    answer:
      'Yes. Using Shopify Markets or BigCommerce Multi-Storefront, we configure localized currencies, automatic geo-IP redirection, duties and import tax calculations at checkout, and localized language storefronts.',
  },
  {
    category: 'integrations',
    question: 'What analytics and revenue tracking tools do you configure before launch?',
    answer:
      'We configure server-side Google Analytics 4 (GA4) e-commerce tracking, Google Tag Manager, Meta Conversions API (CAPI), Pinterest Tag, TikTok Pixel, and Klaviyo revenue attribution to ensure complete data accuracy.',
  },
  {
    category: 'cost',
    question: 'Do you offer ongoing conversion rate optimization (CRO) retainers after launch?',
    answer:
      'Yes. We provide monthly growth retainers focused on continuous A/B testing, heatmap analysis, checkout funnel optimization, new landing page development, and retention email marketing.',
  },
  {
    category: 'cost',
    question: 'How long does a complete enterprise ecommerce redesign and launch take?',
    answer:
      'Standard custom Shopify Plus builds take 6 to 8 weeks from initial design to production deployment. Complex enterprise projects with multi-system ERP integrations and large custom catalog migrations typically require 8 to 12 weeks.',
  },
  {
    category: 'integrations',
    question: 'Can you integrate third-party marketplaces like Amazon, Walmart, and Target Plus?',
    answer:
      'Yes. We connect multichannel catalog feeds and inventory management systems to synchronize stock levels, pricing, and orders across your central Shopify admin and third-party marketplaces.',
  },
  {
    category: 'cost',
    question: 'Do we own all custom theme code and design assets upon completion?',
    answer:
      'Yes, 100%. You receive complete ownership of all custom theme code, GitHub repositories, Figma source design files, and backend configurations with zero recurring agency royalties.',
  },
  {
    category: 'integrations',
    question: 'How do you handle sales tax compliance for multi-state ecommerce sales?',
    answer:
      'We integrate automated sales tax calculation engines such as Avalara AvaTax, TaxJar, or Shopify Tax to ensure accurate economic nexus tracking and real-time sales tax collection across all US jurisdictions.',
  },
  {
    category: 'platforms',
    question: 'Can you create custom product configurators or customizer tools?',
    answer:
      'Yes. We build high-performance 2D and 3D product configurators using WebGL and modern React, allowing customers to customize colors, engravings, dimensions, and materials with real-time price updates.',
  },
  {
    category: 'cost',
    question: 'How do we get started on an ecommerce project with FactoryJet in Dallas?',
    answer:
      'Schedule a discovery consultation or request an enterprise ecommerce architecture review. We will evaluate your current tech stack, identify conversion bottlenecks, and provide a clear roadmap and fixed-price proposal within 24 hours.',
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
  name: 'FactoryJet - Dallas E-Commerce Development Agency',
  image: 'https://factoryjet.com/og-default.png',
  url: CANONICAL,
  telephone: '+1-832-998-8422',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dallas',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 32.7767,
    longitude: -96.797,
  },
  areaServed: [
    { '@type': 'City', name: 'Dallas' },
    { '@type': 'City', name: 'Plano' },
    { '@type': 'City', name: 'Frisco' },
    { '@type': 'City', name: 'Irving' },
    { '@type': 'City', name: 'Fort Worth' },
  ],
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Dallas E-Commerce Development & Shopify Plus Architecture',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'E-Commerce Development, Shopify Plus Engineering & B2B Wholesale Portals',
  description:
    'Senior engineering-led custom Shopify Plus storefronts, B2B wholesale portals, ERP integrations, and headless commerce engineering for Dallas businesses.',
  areaServed: { '@type': 'State', name: 'Texas' },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Dallas E-Commerce Development Agency | Shopify Plus & B2B | FactoryJet',
  description: 'Enterprise Shopify Plus, BigCommerce B2B, and headless ecommerce development for Dallas brands.',
  url: CANONICAL,
  dateModified: PAGE_MODIFIED,
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/' },
    { '@type': 'ListItem', position: 2, name: 'E-Commerce Development', item: 'https://factoryjet.com/services/ecommerce-development' },
    { '@type': 'ListItem', position: 3, name: 'Dallas', item: CANONICAL },
  ],
};

export default function DallasEcommercePage() {
  return (
    <>
      <script id="dal-ecom-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="dal-ecom-local-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }} />
      <script id="dal-ecom-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="dal-ecom-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="dal-ecom-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

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
                  <span>Dallas E-Commerce Development &amp; Architecture</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  Enterprise E-Commerce Development for Dallas Brands
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  Scale your direct-to-consumer flagship or B2B wholesale operation with custom Shopify Plus engineering, sub-second catalog speeds, and NetSuite/SAP ERP integrations.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Get an E-Commerce Proposal" region="us" btnVariant="primary-dark" />
                  <a href="#dal-ecom-districts" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>Explore Dallas Corridors</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/us/marketplace/headless-nextjs-vs-monolithic-liquid-architecture.webp"
                  alt="Dallas E-Commerce Development Storefront Architecture"
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
              <div className="rv-ticker-label">Enterprise E-Commerce Stack &amp; ERP Connectors</div>
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
                  src="/images/us/marketplace/ecommerce-speed-core-web-vitals-performance-engine.webp"
                  alt="FactoryJet enterprise ecommerce architects building scalable Shopify Plus systems in Dallas"
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
                  <span>Speed, B2B &amp; Conversion</span>
                </div>

                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 14px' }}>
                  Commerce Platforms Built for High-Volume Operations
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  From direct-to-consumer lifestyle brands in Uptown to industrial equipment distributors in Fort Worth, we build commerce engines that maximize conversion and automate backend operations.
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
                  <ModalCTAButton label="Schedule E-Commerce Strategy Call" region="us" btnVariant="primary-dark" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04. DALLAS DISTRICTS SECTION ── */}
        <section id="dal-ecom-districts" className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>DFW E-Commerce Depth</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Tailored Commerce Solutions for Dallas Corridors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                From high-end DTC brands in Uptown Dallas to industrial B2B hubs in Fort Worth:
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
                <span>Industry-Specific Architecture</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Specialized Commerce Architectures for Dallas Sectors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Discover how our enterprise commerce engineering accelerates wholesale and retail conversions across core industries:
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

        {/* ── 06. CORE PAIN POINTS SECTION ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>The FactoryJet Commerce Difference</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Why Dallas Brands Choose FactoryJet E-Commerce
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                We replace fragile app-stacked storefronts with clean engineering and automated ERP workflows:
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
        <div id="enterprise-architecture-blueprint">
          <EnterpriseArchitectureBlueprint
            badge="// DALLAS ENTERPRISE E-COMMERCE BLUEPRINT"
            title="High-Scale Commerce Architecture: From Storefront to ERP"
            subtitle="Explore how custom Shopify Plus components, NetSuite middleware, real-time inventory pipelines, and sub-second checkout connect."
            legacySource="Legacy Monolithic Storefront"
            targetStack="Shopify Plus & Next.js 15"
            ctaLabel="Get an E-Commerce Architecture Review"
            region="us"
          />
        </div>

        {/* ── 08. STEP-BY-STEP ROADMAP MATRIX ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: 'clamp(64px, 9vh, 104px) 0' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 56px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>8-Week Enterprise Deployment</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Our 8-Week Enterprise Commerce Deployment Protocol
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                A systematic milestone roadmap ensuring zero downtime, safe data migration, and full ERP synchronization:
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

        {/* ── 09. EVALUATION FRAMEWORK TABLE ── */}
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
                Evaluating Dallas E-Commerce Agencies: What to Ask
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Compare engineering-first architecture against off-the-shelf theme stacking before you sign:
              </p>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid #E6E6EC', borderRadius: '16px', overflow: 'hidden', maxWidth: '960px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.4fr 1.4fr', background: '#141414', color: '#FFFFFF', padding: '16px 24px', fontWeight: 700, fontSize: '13.5px' }}>
                <div>Architecture Factor</div>
                <div style={{ color: '#FF5622' }}>FactoryJet Enterprise Commerce</div>
                <div style={{ color: '#A0A0B0' }}>Standard Theme Agencies</div>
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
          eyebrow="DALLAS E-COMMERCE INTELLIGENCE"
          headline="Frequently Asked Questions About E-Commerce in Dallas TX"
          lead="Direct, plain English answers to what Dallas brand founders and operations directors ask about commerce development:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FFFFFF]"
        />

        {/* ── 11. LOCAL LINK SILO MATRIX ── */}
        <section style={{ background: '#F6F6F9', borderTop: '1px solid #E6E6EC', padding: '48px 0' }}>
          <div className="pp-wrap">
            <EcommerceCityLinksUS currentCity="dallas" />
          </div>
        </section>

        {/* ── 12. FINAL EXECUTIVE CTA BANNER ── */}
        <section className="pp-sec" style={{ backgroundColor: '#141414', color: '#FFFFFF', padding: 'clamp(64px, 10vh, 112px) 0', textAlign: 'center' }}>
          <div className="pp-wrap" style={{ maxWidth: '800px' }}>
            <div className="rv-badge" style={{ background: '#26262B', color: '#FF5622', borderColor: '#3E3E48', marginBottom: '20px' }}>
              <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
              </svg>
              <span>Enterprise Shopify Plus &amp; B2B</span>
            </div>

            <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.12, margin: '0 0 20px' }}>
              Ready to Scale Your Dallas E-Commerce Platform?
            </h2>

            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Request a comprehensive technical architecture review. We will evaluate your catalog data, ERP integration scope, and conversion bottlenecks.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <ModalCTAButton label="Request Your Commerce Proposal" region="us" btnVariant="primary-light" />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale="us" />
    </>
  );
}

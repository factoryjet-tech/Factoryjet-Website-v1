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
const CANONICAL = 'https://factoryjet.com/austin/ecommerce-development';

export const metadata: Metadata = {
  title: 'Ecommerce Development Austin TX | Shopify Plus | FactoryJet',
  description:
    'Austin ecommerce development agency. Custom Shopify Plus, WooCommerce, and wholesale B2B portals built for high conversion. Get a fixed quote.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Ecommerce Development Austin TX | Shopify Plus | FactoryJet',
    description:
      'Austin ecommerce development agency. Custom Shopify Plus, WooCommerce, and wholesale B2B portals built for high conversion.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Austin Ecommerce Development Agency' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce Development Austin TX | Shopify Plus | FactoryJet',
    description: 'Custom Shopify Plus and wholesale ecommerce development in Austin TX. High conversion and zero lock-in.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const PARTNERS = [
  'Shopify Plus Partner',
  'Shop Pay Acceleration',
  'Klaviyo Premier',
  'WooCommerce Enterprise',
  'Stripe Payments',
  'Next.js 15 Commerce',
  'Cloudflare Global Edge',
  'Google Analytics 4',
];

const STAT_CARDS = [
  { num: '40%+', title: 'Checkout Conversion Lift', desc: 'Shop Pay one-tap acceleration eliminating mobile checkout abandonment.', icon: '⚡' },
  { num: '95+', title: 'Mobile Speed Score', desc: 'Sub-second product catalog browsing engineered for higher average order value.', icon: '🚀' },
  { num: '500+', title: 'Commerce Builds', desc: 'Storefronts and wholesale ordering portals deployed across DTC, CPG, and B2B.', icon: '🏢' },
  { num: '100%', title: 'Full IP & Code Ownership', desc: 'You own your custom Liquid theme, product data, and payment gateways.', icon: '🛡️' },
];

const DISTRICTS = [
  {
    corridor: 'South Congress & Downtown Flagships',
    query: 'fashion boutique ecommerce austin',
    focus: 'Apparel, Luxury Accessories & Lifestyle DTC',
    desc: 'Iconic consumer corridors where brick-and-mortar storefronts need flawless omnichannel synchronization with online Shopify stores. Point of sale inventory updates seamlessly in real time.',
  },
  {
    corridor: 'The Domain & Silicon Hills Tech Corridor',
    query: 'hardware ecommerce store austin',
    focus: 'Consumer Electronics, Wearables & Tech Hardware',
    desc: 'High-growth tech hardware and IoT brands requiring rich interactive product pages, 3D model visualization, complex warranty options, and global multi-currency checkout.',
  },
  {
    corridor: 'East Austin & Artisan Studios',
    query: 'specialty food ecommerce austin',
    focus: 'Specialty CPG, Craft Beverages & Subscription Goods',
    desc: 'Rapidly scaling food and beverage brands leveraging automated subscription billing workflows, bundled discount matrices, and Klaviyo lifecycle marketing automation.',
  },
  {
    corridor: 'Mueller & Central Austin Commercial',
    query: 'home goods ecommerce developer austin',
    focus: 'Home Furnishings, Wellness & Family Brands',
    desc: 'High-ticket residential consumer brands where custom room visualizers, tiered financing via Affirm and Klarna, and white-glove shipping integrations drive high average order values.',
  },
  {
    corridor: 'North Austin & Industrial Logistics',
    query: 'b2b ecommerce wholesale austin',
    focus: 'Wholesale Portals, Industrial Supply & B2B Parts',
    desc: 'Manufacturing suppliers and regional distributors modernizing phone, fax, and email ordering into self-service digital portals with custom dealer pricing tiers.',
  },
  {
    corridor: 'Round Rock & Williamson County Corridor',
    query: 'multi store ecommerce builder austin',
    focus: 'Multi-Location Retail & Regional Distribution',
    desc: 'Regional commercial brands managing warehouse fulfillment across multiple Central Texas locations with automated routing to the closest distribution depot.',
  },
];

const INDUSTRY_SHOWCASE = [
  {
    sector: 'Direct-to-Consumer Apparel & Lifestyle Brands',
    headline: 'Engineering Frictionless Mobile Checkout for Austin DTC Leaders',
    description:
      'Austin is a national hotspot for modern lifestyle and apparel brands. We build bespoke Shopify Plus themes engineered for one-tap mobile checkout via Shop Pay, rapid product filtering, intelligent size recommendation charts, and dynamic upsell drawers that boost average order values.',
    image: '/images/us/austin/ecommerce/portfolio-1.webp',
    alt: 'Austin DTC apparel and lifestyle ecommerce storefront development',
    points: [
      'Shop Pay and Apple Pay one-tap conversion acceleration',
      'Dynamic slide-out cart drawers with tiered free-shipping progress bars',
      'Klaviyo automated flows for abandoned checkout and back-in-stock alerts',
    ],
  },
  {
    sector: 'Consumer Electronics & Hardware Brands',
    headline: 'High-Performance Storefronts for Silicon Hills Tech Creators',
    description:
      'Selling sophisticated consumer electronics and hardware requires detailed technical specifications, interactive product exploded views, and modular accessory add-on logic. We build fast, clean storefronts that educate customers and convert high-ticket orders with ease.',
    image: '/images/us/austin/ecommerce/service-explanation.webp',
    alt: 'Austin consumer tech and hardware ecommerce development',
    points: [
      'Interactive 3D product visualizers and component spec sheets',
      'Integrated extended warranty and protection plan upsells',
      'Global multi-currency conversion with automatic localization',
    ],
  },
  {
    sector: 'Specialty Food, Craft Beverage & CPG',
    headline: 'Scaling High-Velocity Subscriptions and Bulk Purchasing',
    description:
      'From hot sauces and roasted coffees to craft spirits and wellness supplements, Central Texas CPG brands thrive on recurring revenue. We implement robust subscription engines via Recharge and Smartrr, automated bundle builders, and temperature-controlled shipping rate calculators.',
    image: '/images/us/commerce/ecommerce-growth-agency-team.webp',
    alt: 'Austin specialty food beverage and CPG ecommerce development',
    points: [
      'Flexible subscribe-and-save billing with custom customer portals',
      'Mix-and-match bundle builders with tiered volume discounts',
      'Automated integration with ShipStation and Central Texas cold-chain 3PLs',
    ],
  },
  {
    sector: 'B2B Wholesale Portals & Industrial Distributors',
    headline: 'Self-Service Digital Ordering for Manufacturers & Dealers',
    description:
      'Traditional wholesale manufacturers in Austin lose valuable staff hours manually entering PDF purchase orders. We build enterprise Shopify B2B wholesale portals featuring personalized dealer pricing catalogs, bulk CSV order uploads, NET 30 invoicing terms, and ERP inventory synchronization.',
    image: '/images/us/commerce/b2b-ecommerce-wholesale-portal.webp',
    alt: 'Austin wholesale B2B portal and manufacturing ecommerce engineering',
    points: [
      'Tiered wholesale pricing rules based on customer account tier',
      'Fast bulk reordering matrices and quick CSV order upload tools',
      'Live bi-directional ERP synchronization with NetSuite and QuickBooks',
    ],
  },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Ending Clunky Legacy Platforms That Drop Mobile Checkout Conversions',
    problem: 'Outdated WooCommerce plugins and bloated monolithic stores create sluggish product page loads, broken checkout flows, and high mobile cart abandonment rates.',
    solution: 'We engineer custom Shopify Plus themes with Shop Pay one-tap acceleration, sub-second product pages, and friction-free mobile checkouts.',
  },
  {
    num: '02',
    title: 'Connecting Complex ERP, Warehouse, and Inventory Systems Seamlessly',
    problem: 'Manual inventory entry between your warehouse, physical retail store, and online storefront leads to overselling, stockout errors, and shipping delays.',
    solution: 'We build automated API integrations connecting Shopify to NetSuite, QuickBooks, ShipStation, and custom warehouse management systems.',
  },
  {
    num: '03',
    title: 'Modernizing B2B Wholesale Ordering Out of Phone Calls and Spreadsheets',
    problem: 'Wholesale B2B clients are forced to call or email PDF purchase orders because the website lacks tiered dealer pricing and bulk order sheets.',
    solution: 'We architect enterprise Shopify B2B portals with custom dealer pricing tiers, NET payment terms, quick-order matrices, and company accounts.',
  },
  {
    num: '04',
    title: 'Retaining Full Ownership of Your Store Code and Brand Intellectual Property',
    problem: 'Agencies lock clients into proprietary software or hold theme source code hostage with expensive recurring retainer contracts.',
    solution: 'You retain 100% ownership of your Shopify theme, Git repository, product data, customer lists, and payment processing accounts from day one.',
  },
];

const ROADMAP_STEPS = [
  {
    phase: 'Month 1',
    title: 'Catalog Architecture, ERP Scoping & Figma UI/UX Design',
    desc: 'We map your complete product data schema, variant options, customer group pricing tiers, and warehouse fulfillment logic. We deliver interactive Figma prototypes for all key customer journeys for your direct review.',
    deliverables: [
      'Comprehensive product catalog matrix and tax and shipping logic map',
      'High-fidelity Figma prototypes for desktop and mobile commerce flows',
      'ERP and 3PL warehouse integration architecture specification',
      'Legacy store SEO redirect and data preservation roadmap',
    ],
  },
  {
    phase: 'Month 2',
    title: 'Shopify Plus Theme Engineering & Custom Liquid Components',
    desc: 'We build a lightweight, high-performance Shopify Plus theme with zero app bloat. Every product page, collection grid, and checkout extension is coded for sub-second mobile rendering.',
    deliverables: [
      'Custom Shopify Liquid and React component development',
      'Interactive cart drawer with dynamic upsells and shipping thresholds',
      'Advanced collection filtering and predictive search implementation',
      'Mobile-first responsive QA testing across all iOS and Android devices',
    ],
  },
  {
    phase: 'Month 3',
    title: 'Data Migration, ERP Integration & App Ecosystem Setup',
    desc: 'We migrate all legacy products, customers, order history, and discount codes. We connect your ERP, shipping software, email marketing platform, and analytics tracking.',
    deliverables: [
      'Full migration of products, collections, customer records, and orders',
      'Live API sync with ShipStation, NetSuite, QuickBooks, or custom WMS',
      'Klaviyo e-commerce flow setup and segmentation architecture',
      'Google Analytics 4 e-commerce revenue and event tracking validation',
    ],
  },
  {
    phase: 'Months 4 to 6',
    title: 'Conversion Rate Optimization, B2B Expansion & Scale',
    desc: 'Following a zero-downtime launch, we analyze real customer purchasing behavior, run A/B conversion tests, and expand advanced features like wholesale portals and international multi-currency.',
    deliverables: [
      'Conversion funnel teardowns and checkout optimization iterations',
      'Shopify B2B wholesale pricing tier deployment and customer rollout',
      'International localization with multi-currency and localized shipping',
      'Monthly performance reviews with senior technical commerce engineers',
    ],
  },
];

const EVALUATION_CRITERIA = [
  {
    label: 'Platform Recommendation',
    factoryjet: 'Shopify Plus or Headless Next.js based purely on your operational model.',
    traditional: 'Forces outdated WordPress or custom CMS to keep billing for plugin fixes.',
  },
  {
    label: 'Theme Engineering',
    factoryjet: 'Bespoke, lightweight Liquid code built for sub-second mobile loading speeds.',
    traditional: 'Installs bloated $180 marketplace themes loaded with 20 conflicting plugins.',
  },
  {
    label: 'ERP & Inventory Sync',
    factoryjet: 'Direct API integrations connecting warehouse, ERP, and POS seamlessly.',
    traditional: 'Relies on fragile third-party sync apps that frequently desync inventory.',
  },
  {
    label: 'SEO Migration Safety',
    factoryjet: '1-to-1 301 URL redirect mapping preserving 100% of organic search rankings.',
    traditional: 'Overlooks URL mapping, causing sudden 50% drops in post-launch organic traffic.',
  },
  {
    label: 'Code & Store Ownership',
    factoryjet: 'You own 100% of your theme repository, customer data, and store configuration.',
    traditional: 'Holds theme assets inside agency developer accounts with proprietary lock-ins.',
  },
  {
    label: 'Pricing & Delivery Terms',
    factoryjet: 'Fixed-price milestone contracts with guaranteed sprint delivery timelines.',
    traditional: 'Open-ended hourly billing that drags projects out for 6 to 9 months.',
  },
];

const FAQ_CATEGORIES = [
  { key: 'platform', label: 'Shopify & Platforms' },
  { key: 'b2b', label: 'B2B & Wholesale' },
  { key: 'timeline', label: 'Pricing & Timeline' },
  { key: 'migration', label: 'Data Migration' },
];

const FAQ_ITEMS = [
  {
    category: 'platform',
    question: 'Why do you recommend Shopify Plus for Austin e-commerce brands?',
    answer:
      'Shopify Plus provides 99.99% uptime, built-in Shop Pay checkout with the highest conversion rate in e-commerce, native B2B wholesale portal capabilities, and zero server maintenance overhead compared to fragile self-hosted platforms.',
  },
  {
    category: 'platform',
    question: 'Can you build custom headless commerce solutions with Next.js and Shopify?',
    answer:
      'Yes. For high-growth brands requiring ultra-custom interactive experiences, we build headless frontends using Next.js Commerce and Shopify Storefront API deployed on Cloudflare Global Edge.',
  },
  {
    category: 'platform',
    question: 'How do you ensure our Austin store loads in under one second on mobile?',
    answer:
      'We code clean, modular Liquid templates without relying on bloated third-party page builder apps. We optimize product photography with WebP/AVIF compression, implement asynchronous script loading, and utilize Shopify global edge CDN caching.',
  },
  {
    category: 'platform',
    question: 'Can you integrate custom product personalization and bundle builders?',
    answer:
      'Yes. We build bespoke product customizers, engraving preview tools, and dynamic mix-and-match bundle builders that allow shoppers to configure custom product sets with real-time price updates.',
  },
  {
    category: 'b2b',
    question: 'Can we offer custom wholesale pricing and NET payment terms to B2B buyers?',
    answer:
      'Yes. With Shopify Plus B2B features, you can assign custom price lists, quantity price breaks, NET 30/60 invoice terms, and company customer permissions directly within the same store.',
  },
  {
    category: 'b2b',
    question: 'Can you connect our Austin store to our warehouse and inventory ERP?',
    answer:
      'Yes. We integrate Shopify with leading ERPs and warehouse management systems including NetSuite, QuickBooks Commerce, SAP, ShipStation, and custom internal inventory APIs.',
  },
  {
    category: 'b2b',
    question: 'How does multi-location inventory work for brands with both physical stores and warehouses?',
    answer:
      'Shopify multi-location inventory allows you to route orders based on customer proximity, stock availability, or split fulfillment rules across your South Congress retail store and North Austin warehouse.',
  },
  {
    category: 'b2b',
    question: 'Can B2B buyers submit tax exemption certificates directly at checkout?',
    answer:
      'Yes. We configure automated sales tax exemption workflows via Avalara AvaTax or Shopify Tax, allowing verified wholesale dealers to complete tax-exempt purchases instantly upon account verification.',
  },
  {
    category: 'timeline',
    question: 'How long does it take to build and launch a custom Shopify store in Austin?',
    answer:
      'Standard custom theme builds typically launch in 2 to 4 weeks, while complex enterprise migrations with ERP integrations and wholesale portals typically launch in 4 to 8 weeks on milestone-based delivery.',
  },
  {
    category: 'timeline',
    question: 'How do you price e-commerce development projects?',
    answer:
      'We provide transparent fixed-price quotes based on your exact store scope, catalog size, integration requirements, and design customization, with no surprise hourly overages.',
  },
  {
    category: 'timeline',
    question: 'What ongoing maintenance is required after the store goes live?',
    answer:
      'Unlike WordPress, Shopify is a fully hosted platform that handles security patches, server scaling, and payment compliance automatically. We provide flexible month-to-month optimization support for ongoing feature expansion.',
  },
  {
    category: 'timeline',
    question: 'Do you offer a post-launch warranty on your code?',
    answer:
      'Every FactoryJet build includes a comprehensive 30-day post-launch warranty covering any technical adjustments, bug fixes, and recorded video handover sessions for your internal marketing team.',
  },
  {
    category: 'migration',
    question: 'Can you migrate our products, customer data, and SEO history from WooCommerce or Magento?',
    answer:
      'Yes. We perform complete data migrations for products, customer accounts, past orders, and execute 1-to-1 301 URL redirect maps to ensure you preserve 100% of your existing search rankings.',
  },
  {
    category: 'migration',
    question: 'Will our existing customer passwords transfer to Shopify during migration?',
    answer:
      'Due to industry-standard cryptographic password hashing, passwords cannot be extracted in plain text. We set up automated one-click account activation emails so customers can reset and access their history seamlessly.',
  },
  {
    category: 'migration',
    question: 'How do you prevent duplicate content issues during store replatforming?',
    answer:
      'We clean up legacy URL structures, implement self-referencing canonical tags on all collection and product URLs, and generate structured XML sitemaps to ensure clean indexing by Google.',
  },
  {
    category: 'migration',
    question: 'Can you migrate historical customer reviews to the new Shopify store?',
    answer:
      'Yes. We export verified customer reviews, star ratings, and review photos from your previous platform and import them directly into modern review engines like Okendo, Yotpo, or Judge.me.',
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
  name: 'FactoryJet - Austin Ecommerce Development Agency',
  image: 'https://factoryjet.com/og-default.png',
  url: CANONICAL,
  telephone: '+1-832-998-8422',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Austin',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 30.2672,
    longitude: -97.7431,
  },
  areaServed: [
    { '@type': 'City', name: 'Austin' },
    { '@type': 'City', name: 'Round Rock' },
    { '@type': 'City', name: 'Cedar Park' },
    { '@type': 'City', name: 'West Lake Hills' },
    { '@type': 'City', name: 'Lakeway' },
  ],
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Austin Ecommerce Development & Shopify Plus Engineering',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'Ecommerce Development, Shopify Plus & B2B Portals',
  description:
    'Senior engineering-led Shopify Plus and WooCommerce development, Shop Pay acceleration, wholesale B2B portals, and ERP integrations in Austin TX.',
  areaServed: { '@type': 'State', name: 'Texas' },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Ecommerce Development Austin TX | Shopify Plus | FactoryJet',
  description: 'Custom Shopify Plus, WooCommerce, and wholesale B2B portals built for high conversion in Austin TX.',
  url: CANONICAL,
  dateModified: PAGE_MODIFIED,
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/' },
    { '@type': 'ListItem', position: 2, name: 'Austin', item: 'https://factoryjet.com/austin/seo' },
    { '@type': 'ListItem', position: 3, name: 'Ecommerce Development', item: CANONICAL },
  ],
};

export default function AustinEcommerceDevelopmentPage() {
  return (
    <>
      <script id="austin-ecom-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="austin-ecom-local-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }} />
      <script id="austin-ecom-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="austin-ecom-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="austin-ecom-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

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
                  <span>Austin Ecommerce Engineering</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  Austin Ecommerce Development Agency for High-Growth Brands
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  Scale DTC online sales and wholesale B2B dealer ordering with custom Shopify Plus engineering, Shop Pay acceleration, and seamless ERP inventory synchronization.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Get a Fixed-Price Quote" region="us" btnVariant="primary-dark" />
                  <a href="#austin-ecom-districts" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>Explore Commerce Corridors</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame (Edge-to-Edge) */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/us/austin/ecommerce/service-explanation.webp"
                  alt="Austin Texas ecommerce development team engineering custom Shopify Plus storefronts"
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
              <div className="rv-ticker-label">Modern Commerce &amp; Fulfillment Stack</div>
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
              
              {/* Left Column: Clean Organic Curved Photo Frame (Edge-to-Edge) */}
              <div className="rv-curved-frame-2">
                <Image
                  src="/images/us/commerce/ecommerce-growth-agency-team.webp"
                  alt="FactoryJet senior commerce architects reviewing high-conversion Shopify Plus performance"
                  width={640}
                  height={640}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Right Column: 2x2 Bento Counter Grid + Discovery CTA Button */}
              <div>
                <div className="rv-badge" style={{ marginBottom: '14px' }}>
                  <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                  </svg>
                  <span>Built for Scale &amp; Speed</span>
                </div>

                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 14px' }}>
                  Engineered for High-Growth Commerce in Austin
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  From South Congress DTC lifestyle leaders to Silicon Hills hardware creators and B2B industrial distributors, we build custom storefronts that eliminate checkout friction and scale orders effortlessly.
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

                {/* Bottom Actions: Discovery Call CTA Button */}
                <div style={{ marginTop: '32px' }}>
                  <ModalCTAButton label="Schedule Commerce Strategy Call" region="us" btnVariant="primary-dark" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 04. AUSTIN COMMERCE DISTRICTS DIRECTORY ── */}
        <section id="austin-ecom-districts" className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Central Texas Market Depth</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Tailored E-Commerce for Austin&apos;s Core Sectors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                From South Congress flagship boutiques to Silicon Hills hardware and wholesale distribution:
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

        {/* ── 05. INDUSTRY DEEP-DIVES & PHOTOREALISTIC CASE EXAMPLES ── */}
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
                Specialized Commerce Architectures for Austin Brands
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Every commercial vertical in Austin demands distinct checkout logic, inventory routing, and post-purchase flows:
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

        {/* ── 06. CORE DRIVERS & PAIN POINTS (RITOVEX NUMBERED SERVICES ROWS) ── */}
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
                Why Austin Brands Choose FactoryJet Commerce
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                We replace clunky legacy software with high-converting, scalable e-commerce engineering:
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

        {/* ── 07. ARCHITECTURE BLUEPRINT (AUTO-ROTATING TABS) ── */}
        <div id="ecom-architecture-blueprint">
          <EnterpriseArchitectureBlueprint
            badge="// AUSTIN COMMERCE ARCHITECTURE BLUEPRINT"
            title="Modern E-Commerce: From Catalog to One-Tap Checkout"
            subtitle="Explore how custom Shopify Liquid architecture, Shop Pay acceleration, B2B wholesale portals, and automated ERP sync drive scalable revenue."
            legacySource="Clunky WooCommerce & Manual Phone Orders"
            targetStack="High-Speed Shopify Plus & B2B Portal Engine"
            ctaLabel="Get a Fixed-Price Quote"
            region="us"
          />
        </div>

        {/* ── 08. STEP-BY-STEP 6-MONTH ROADMAP MATRIX ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: 'clamp(64px, 9vh, 104px) 0' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 56px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Predictable Delivery</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Our 6-Month E-Commerce Growth Roadmap
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                A transparent, step-by-step engineering roadmap delivering compounding store conversions and revenue:
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
                Evaluating Austin Ecommerce Agencies: What to Ask
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Compare engineering-led Shopify development against traditional design agencies before you commit:
              </p>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid #E6E6EC', borderRadius: '16px', overflow: 'hidden', maxWidth: '960px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.4fr 1.4fr', background: '#141414', color: '#FFFFFF', padding: '16px 24px', fontWeight: 700, fontSize: '13.5px' }}>
                <div>Evaluation Factor</div>
                <div style={{ color: '#FF5622' }}>FactoryJet Engineering Model</div>
                <div style={{ color: '#A0A0B0' }}>Traditional Design Agencies</div>
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

        {/* ── 10. SEARCHABLE CATEGORIZED FAQ SECTION (16 DETAILED QUESTIONS) ── */}
        <FAQ
          eyebrow="AUSTIN ECOMMERCE INTELLIGENCE"
          headline="Frequently Asked Questions About E-Commerce in Austin TX"
          lead="Direct, plain English answers to what Austin business owners and commerce leaders ask about online store development and Shopify Plus:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FFFFFF]"
        />

        {/* ── 11. LOCAL LINK SILO MATRIX ── */}
        <section style={{ background: '#F6F6F9', borderTop: '1px solid #E6E6EC', padding: '48px 0' }}>
          <div className="pp-wrap">
            <EcommerceCityLinksUS currentCity="austin" />
          </div>
        </section>

        {/* ── 12. FINAL EXECUTIVE CTA BANNER ── */}
        <section className="pp-sec" style={{ backgroundColor: '#141414', color: '#FFFFFF', padding: 'clamp(64px, 10vh, 112px) 0', textAlign: 'center' }}>
          <div className="pp-wrap" style={{ maxWidth: '800px' }}>
            <div className="rv-badge" style={{ background: '#26262B', color: '#FF5622', borderColor: '#3E3E48', marginBottom: '20px' }}>
              <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
              </svg>
              <span>Fixed-Price E-Commerce Engineering</span>
            </div>
            
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.12, margin: '0 0 20px' }}>
              Ready to Scale Your Online Store in Austin?
            </h2>
            
            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Tell us about your brand catalog and goals. We will provide a comprehensive fixed-price proposal, migration architecture, and interactive Figma preview.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <ModalCTAButton label="Get Your Fixed-Price Quote" region="us" btnVariant="primary-light" />
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}

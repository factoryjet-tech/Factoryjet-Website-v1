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
const CANONICAL = 'https://factoryjet.com/charlotte/ecommerce-development';

export const metadata: Metadata = {
  title: 'Ecommerce Development Charlotte NC | Shopify | FactoryJet',
  description:
    'Charlotte ecommerce development agency. Custom Shopify Plus, WooCommerce, and wholesale B2B portals built for high conversion. Get a fixed quote.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Ecommerce Development Charlotte NC | Shopify | FactoryJet',
    description:
      'Charlotte ecommerce development agency. Custom Shopify Plus, WooCommerce, and wholesale B2B portals built for high conversion.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Charlotte Ecommerce Development Agency' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce Development Charlotte NC | Shopify | FactoryJet',
    description: 'Custom Shopify Plus and wholesale ecommerce development in Charlotte NC. High conversion and zero lock-in.',
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
    corridor: 'South End & Design District',
    query: 'dtc brand developer charlotte nc',
    focus: 'Apparel, Luxury Accessories & Lifestyle DTC',
    desc: 'High-energy urban retail corridor where emerging lifestyle and fashion brands require seamless omnichannel POS synchronization with online Shopify Plus storefronts.',
  },
  {
    corridor: 'I-85 & I-77 Industrial Crossroads',
    query: 'wholesale b2b ecommerce charlotte',
    focus: 'Industrial Parts, Machinery & Supply Chain',
    desc: 'Major Southeastern manufacturing corridor where commercial suppliers modernize legacy phone and PDF order taking into self-service digital wholesale portals with custom dealer pricing.',
  },
  {
    corridor: 'SouthPark & Sharon Road',
    query: 'luxury ecommerce designer charlotte',
    focus: 'High-Ticket Consumer Goods, Jewelry & Home Decor',
    desc: 'Affluent consumer market where white-glove shipping integrations, tiered financing options via Affirm, and high-resolution product photography drive higher average order values.',
  },
  {
    corridor: 'Uptown & Financial District',
    query: 'enterprise ecommerce developer charlotte',
    focus: 'Corporate Merchandise & Enterprise Retail',
    desc: 'Corporate enterprise hubs requiring multi-brand management, single sign-on authentication, and complex enterprise resource planning data synchronization.',
  },
  {
    corridor: 'Lake Norman & North Mecklenburg',
    query: 'marine equipment ecommerce charlotte',
    focus: 'Marine, Outdoor & Automotive Aftermarket',
    desc: 'Specialty outdoor, marine, and performance motorsports distributors requiring advanced year-make-model catalog filtering and oversized freight shipping calculators.',
  },
  {
    corridor: 'Cabarrus & Concord Logistics Hub',
    query: 'ecommerce fulfillment integration charlotte',
    focus: 'Multi-Warehouse Logistics & Regional DTC',
    desc: 'High-volume logistics and fulfillment corridor where multi-location inventory routing and automated ShipStation workflows eliminate fulfillment bottlenecks.',
  },
];

const INDUSTRY_SHOWCASE = [
  {
    sector: 'Industrial Manufacturing, OEM Parts & Wholesale B2B',
    headline: 'Self-Service Digital Ordering for Southeastern Manufacturers',
    description:
      'Charlotte is the central industrial crossroads of the Carolinas. We build enterprise Shopify B2B wholesale portals featuring custom dealer pricing tiers, quick-order CSV uploads, NET payment terms, and direct API synchronization with NetSuite and QuickBooks ERP systems.',
    image: '/images/us/charlotte/ecommerce/portfolio-1.webp',
    alt: 'Charlotte wholesale B2B portal and industrial manufacturing ecommerce development',
    points: [
      'Personalized wholesale pricing catalogs mapped to dealer customer accounts',
      'High-velocity bulk reordering matrices and quick CSV order upload tools',
      'Bi-directional ERP and warehouse inventory synchronization with zero manual entry',
    ],
  },
  {
    sector: 'Automotive Aftermarket & Motorsports Parts',
    headline: 'Year-Make-Model Precision for Charlotte Motorsports Leaders',
    description:
      'Anchored by the NASCAR and performance racing hub in Mooresville and Concord, automotive parts retailers require complex catalog filtering. We engineer sub-second year-make-model vehicle lookup engines, fitment verification databases, and dynamic freight shipping calculations.',
    image: '/images/us/charlotte/ecommerce/portfolio-2.webp',
    alt: 'Charlotte automotive and motorsports parts ecommerce engineering',
    points: [
      'Instant year-make-model vehicle fitment lookup engines with zero lag',
      'Oversized and freight shipping rate calculators for engines and heavy components',
      'Interactive exploded component diagrams with one-click assembly cart additions',
    ],
  },
  {
    sector: 'Direct-to-Consumer Apparel & Lifestyle Brands',
    headline: 'Frictionless Mobile Checkout for South End Fashion Creators',
    description:
      'Charlotte’s vibrant DTC fashion and lifestyle scene demands beautiful visual storefronts that convert on mobile devices. We build custom Shopify Plus themes equipped with Shop Pay acceleration, slide-out cart drawers, dynamic bundle builders, and automated Klaviyo email flows.',
    image: '/images/us/charlotte/ecommerce/portfolio-3.webp',
    alt: 'Charlotte DTC apparel and fashion ecommerce storefront development',
    points: [
      'Shop Pay and Apple Pay one-tap mobile checkout acceleration',
      'Slide-out interactive cart drawers with tiered free-shipping progress indicators',
      'Automated Klaviyo lifecycle marketing flows for abandoned carts and VIP retention',
    ],
  },
  {
    sector: 'Specialty Food, Craft Beverage & Regional CPG',
    headline: 'Scaling High-Velocity Subscriptions Across the Carolinas',
    description:
      'From craft coffee roasters and regional barbecue sauces to wellness supplements, food and beverage brands thrive on recurring subscriber revenue. We integrate robust subscription engines via Recharge, custom mix-and-match bundle builders, and automated cold-chain 3PL logistics.',
    image: '/images/us/b2b/b2b-trade-portal.webp',
    alt: 'Charlotte specialty food craft beverage and CPG ecommerce development',
    points: [
      'Flexible subscribe-and-save billing portals with customer self-management',
      'Mix-and-match bundle builders with tiered volume price incentives',
      'Direct API integrations with regional Carolinas cold-storage 3PL fulfillment centers',
    ],
  },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Ending Clunky Legacy Stores That Drop Mobile Checkout Conversions',
    problem: 'Outdated WooCommerce plugins and slow monolithic platforms cause sluggish page loading, cart abandonment, and mobile checkout frustration.',
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
    question: 'Why do you recommend Shopify Plus for Charlotte e-commerce brands?',
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
    question: 'How do you ensure our Charlotte store loads in under one second on mobile?',
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
    question: 'Can you connect our Charlotte store to our warehouse and inventory ERP?',
    answer:
      'Yes. We integrate Shopify with leading ERPs and warehouse management systems including NetSuite, QuickBooks Commerce, SAP, ShipStation, and custom internal inventory APIs.',
  },
  {
    category: 'b2b',
    question: 'How does multi-location inventory work for brands with both physical stores and warehouses?',
    answer:
      'Shopify multi-location inventory allows you to route orders based on customer proximity, stock availability, or split fulfillment rules across your South End retail store and regional Charlotte warehouse.',
  },
  {
    category: 'b2b',
    question: 'Can B2B buyers submit tax exemption certificates directly at checkout?',
    answer:
      'Yes. We configure automated sales tax exemption workflows via Avalara AvaTax or Shopify Tax, allowing verified wholesale dealers to complete tax-exempt purchases instantly upon account verification.',
  },
  {
    category: 'timeline',
    question: 'How long does it take to build and launch a custom Shopify store in Charlotte?',
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
  name: 'FactoryJet - Charlotte Ecommerce Development Agency',
  image: 'https://factoryjet.com/og-default.png',
  url: CANONICAL,
  telephone: '+1-832-998-8422',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Charlotte',
    addressRegion: 'NC',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 35.2271,
    longitude: -80.8431,
  },
  areaServed: [
    { '@type': 'City', name: 'Charlotte' },
    { '@type': 'City', name: 'Huntersville' },
    { '@type': 'City', name: 'Matthews' },
    { '@type': 'City', name: 'Concord' },
    { '@type': 'City', name: 'Fort Mill' },
  ],
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Charlotte Ecommerce Development & Shopify Plus Engineering',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'Ecommerce Development, Shopify Plus & B2B Portals',
  description:
    'Senior engineering-led Shopify Plus and WooCommerce development, Shop Pay acceleration, wholesale B2B portals, and ERP integrations in Charlotte NC.',
  areaServed: { '@type': 'State', name: 'North Carolina' },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Ecommerce Development Charlotte NC | Shopify | FactoryJet',
  description: 'Custom Shopify Plus, WooCommerce, and wholesale B2B portals built for high conversion in Charlotte NC.',
  url: CANONICAL,
  dateModified: PAGE_MODIFIED,
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/' },
    { '@type': 'ListItem', position: 2, name: 'Charlotte', item: 'https://factoryjet.com/charlotte/seo' },
    { '@type': 'ListItem', position: 3, name: 'Ecommerce Development', item: CANONICAL },
  ],
};

export default function CharlotteEcommerceDevelopmentPage() {
  return (
    <>
      <script id="charlotte-ecom-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="charlotte-ecom-local-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }} />
      <script id="charlotte-ecom-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="charlotte-ecom-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="charlotte-ecom-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

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
                  <span>Charlotte Ecommerce Engineering</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  Charlotte Ecommerce Development Agency for Scaling Brands
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  Scale DTC online sales and wholesale B2B dealer ordering with custom Shopify Plus engineering, Shop Pay acceleration, and seamless ERP inventory synchronization.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Get a Fixed-Price Quote" region="us" btnVariant="primary-dark" />
                  <a href="#charlotte-ecom-districts" className="rv-btn-secondary">
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
                  src="/images/us/charlotte/charlotte-site-mockup.webp"
                  alt="Charlotte North Carolina ecommerce development team engineering custom Shopify Plus storefronts"
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
                  src="/images/us/b2b/b2b-erp-integration.webp"
                  alt="FactoryJet senior ecommerce engineers building custom Shopify solutions in Charlotte"
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
                  Engineered for High-Growth Commerce in Charlotte
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  From South End DTC fashion leaders to I-85 industrial manufacturing suppliers and automotive aftermarket distributors, we build custom storefronts that eliminate checkout friction and scale orders effortlessly.
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

        {/* ── 04. CHARLOTTE COMMERCE DISTRICTS DIRECTORY ── */}
        <section id="charlotte-ecom-districts" className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Carolinas Market Depth</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Tailored E-Commerce for Charlotte&apos;s Core Sectors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                From South End lifestyle boutiques to I-85 manufacturing and motorsports wholesale:
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
                Specialized Commerce Architectures for Charlotte Brands
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Every commercial vertical in Charlotte demands distinct checkout logic, inventory routing, and post-purchase flows:
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
                Why Charlotte Brands Choose FactoryJet Commerce
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
            badge="// CHARLOTTE COMMERCE ARCHITECTURE BLUEPRINT"
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
                Evaluating Charlotte Ecommerce Agencies: What to Ask
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
          eyebrow="CHARLOTTE ECOMMERCE INTELLIGENCE"
          headline="Frequently Asked Questions About E-Commerce in Charlotte NC"
          lead="Direct, plain English answers to what Charlotte business owners and commerce leaders ask about online store development and Shopify Plus:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FFFFFF]"
        />

        {/* ── 11. LOCAL LINK SILO MATRIX ── */}
        <section style={{ background: '#F6F6F9', borderTop: '1px solid #E6E6EC', padding: '48px 0' }}>
          <div className="pp-wrap">
            <EcommerceCityLinksUS currentCity="charlotte" />
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
              Ready to Scale Your Online Store in Charlotte?
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

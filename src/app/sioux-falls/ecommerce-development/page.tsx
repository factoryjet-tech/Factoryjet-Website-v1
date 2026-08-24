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
const CANONICAL = 'https://factoryjet.com/sioux-falls/ecommerce-development';

export const metadata: Metadata = {
  title: 'Ecommerce Development Sioux Falls SD | Shopify | FactoryJet',
  description:
    'Sioux Falls ecommerce development agency. Custom Shopify Plus, WooCommerce, and wholesale B2B portals built for high conversion. Get a fixed quote.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Ecommerce Development Sioux Falls SD | Shopify | FactoryJet',
    description:
      'Sioux Falls ecommerce development agency. Custom Shopify Plus, WooCommerce, and wholesale B2B portals built for high conversion.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Sioux Falls Ecommerce Development Agency' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce Development Sioux Falls SD | Shopify | FactoryJet',
    description: 'Custom Shopify Plus and wholesale ecommerce development in Sioux Falls SD. High conversion and zero lock-in.',
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
  { num: '40%+', title: 'Checkout Conversion Lift', desc: 'Shop Pay one-tap acceleration eliminating mobile checkout drop-off.', icon: '⚡' },
  { num: '95+', title: 'Mobile Speed Score', desc: 'Sub-second product catalog browsing engineered for higher average order value.', icon: '🚀' },
  { num: '500+', title: 'Commerce Builds', desc: 'Stores and wholesale ordering portals deployed across DTC, AgTech, and B2B.', icon: '🏢' },
  { num: '100%', title: 'Full IP & Code Ownership', desc: 'You own your custom Liquid theme, product data, and payment gateways.', icon: '🛡️' },
];

const DISTRICTS = [
  {
    corridor: 'Downtown & Phillips Avenue',
    query: 'boutique ecommerce sioux falls',
    focus: 'Apparel, Specialty Goods & Artisan Brands',
    desc: 'Flagship retail storefronts looking to expand regionally and nationally. Seamless omnichannel inventory sync between physical POS and online Shopify storefronts.',
  },
  {
    corridor: 'Empire Mall & 41st Commercial',
    query: 'retail ecommerce developer sioux falls',
    focus: 'High-Volume Consumer Goods & Multi-Store Brands',
    desc: 'High-traffic retail corridor requiring automated inventory management, customer loyalty rewards, and rapid mobile checkout flows.',
  },
  {
    corridor: 'South Sioux Falls (57th & 85th)',
    query: 'dtc brand developer sioux falls',
    focus: 'Direct-to-Consumer & Subscription Commerce',
    desc: 'Rapidly expanding brand founders launching custom DTC product lines with Klaviyo post-purchase automations and subscription billing integrations.',
  },
  {
    corridor: 'Regional AgTech & Food Processing',
    query: 'agtech b2b ecommerce south dakota',
    focus: 'Agricultural Equipment, Feed & Specialty Foods',
    desc: 'Specialty Upper Midwest food processors and agricultural distributors scaling direct shipping and bulk wholesale ordering across the nation.',
  },
  {
    corridor: 'Industrial & Wholesale Distribution',
    query: 'wholesale portal development sioux falls',
    focus: 'B2B Wholesale Portals & Custom Pricing',
    desc: 'Contract manufacturers and regional distributors modernizing phone and paper order workflows into self-service B2B digital ordering portals.',
  },
  {
    corridor: 'Brandon & Harrisburg Corridor',
    query: 'local ecommerce store builder sioux falls',
    focus: 'Commercial Home Goods & Regional Supply',
    desc: 'Suburban manufacturing and home furnishing brands expanding regional delivery networks across Minnehaha and Lincoln counties.',
  },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Ending Clunky Legacy Stores That Drop Checkout Conversions',
    problem: 'Outdated WooCommerce plugins or slow monolithic platforms cause sluggish page loading, cart abandonment, and mobile checkout frustration.',
    solution: 'We engineer custom Shopify Plus themes with Shop Pay one-tap acceleration, sub-second product pages, and friction-free mobile checkouts.',
  },
  {
    num: '02',
    title: 'Connecting Complex ERP, Warehouse, and Inventory Systems Seamlessly',
    problem: 'Manual inventory entry between your warehouse, physical retail store, and online storefront leads to overselling and shipping delays.',
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

const WORKING_STEPS = [
  {
    n: '01',
    t: 'Commerce Architecture & Catalog Strategy',
    d: 'We analyze your product catalog, variant structures, B2B wholesale pricing tiers, and warehouse fulfillment workflows.',
    icon: '🔍',
  },
  {
    n: '02',
    t: 'Figma UI/UX & Conversion Flow Prototyping',
    d: 'We design high-converting product detail pages, collection filters, custom cart drawers, and mobile-first checkout experiences.',
    icon: '🎨',
  },
  {
    n: '03',
    t: 'Custom Shopify Plus Theme Engineering',
    d: 'We build clean, type-safe Liquid and React components optimized for sub-second speeds and zero app bloat.',
    icon: '⚙️',
  },
  {
    n: '04',
    t: 'ERP, Inventory & Marketing App Integrations',
    d: 'We connect ShipStation, Klaviyo email flows, GA4 e-commerce tracking, custom tax rules, and multi-location inventory.',
    icon: '📦',
  },
  {
    n: '05',
    t: 'Full QA, Migration & Zero-Downtime Launch',
    d: 'We migrate legacy customer accounts and order history, test payment gateways, and execute seamless DNS cutover.',
    icon: '🚀',
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
    question: 'Why do you recommend Shopify Plus for Sioux Falls e-commerce brands?',
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
    category: 'b2b',
    question: 'Can we offer custom wholesale pricing and NET payment terms to B2B buyers?',
    answer:
      'Yes. With Shopify Plus B2B features, you can assign custom price lists, quantity price breaks, NET 30/60 invoice terms, and company customer permissions directly within the same store.',
  },
  {
    category: 'b2b',
    question: 'Can you connect our Sioux Falls store to our warehouse and inventory ERP?',
    answer:
      'Yes. We integrate Shopify with leading ERPs and warehouse management systems including NetSuite, QuickBooks Commerce, SAP, ShipStation, and custom internal inventory APIs.',
  },
  {
    category: 'timeline',
    question: 'How long does it take to build and launch a custom Shopify store?',
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
    category: 'migration',
    question: 'Can you migrate our products, customer data, and SEO history from WooCommerce or Magento?',
    answer:
      'Yes. We perform complete data migrations for products, customer accounts, past orders, and execute 1-to-1 301 URL redirect maps to ensure you preserve 100% of your existing search rankings.',
  },
  {
    category: 'migration',
    question: 'Will our existing customer passwords transfer to Shopify?',
    answer:
      'Due to industry-standard cryptographic password hashing, passwords cannot be extracted in plain text. We set up automated one-click account activation emails so customers can reset and access their history seamlessly.',
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
  name: 'FactoryJet - Sioux Falls Ecommerce Development Agency',
  image: 'https://factoryjet.com/og-default.png',
  url: CANONICAL,
  telephone: '+1-832-998-8422',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sioux Falls',
    addressRegion: 'SD',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 43.5460,
    longitude: -96.7313,
  },
  areaServed: [
    { '@type': 'City', name: 'Sioux Falls' },
    { '@type': 'City', name: 'Brandon' },
    { '@type': 'City', name: 'Harrisburg' },
    { '@type': 'City', name: 'Tea' },
    { '@type': 'City', name: 'Dell Rapids' },
  ],
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sioux Falls Ecommerce Development & Shopify Plus Engineering',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'Ecommerce Development, Shopify Plus & B2B Portals',
  description:
    'Senior engineering-led Shopify Plus and WooCommerce development, Shop Pay acceleration, wholesale B2B portals, and ERP integrations in Sioux Falls SD.',
  areaServed: { '@type': 'State', name: 'South Dakota' },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Ecommerce Development Sioux Falls SD | Shopify | FactoryJet',
  description: 'Custom Shopify Plus, WooCommerce, and wholesale B2B portals built for high conversion in Sioux Falls SD.',
  url: CANONICAL,
  dateModified: PAGE_MODIFIED,
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/' },
    { '@type': 'ListItem', position: 2, name: 'Sioux Falls', item: 'https://factoryjet.com/sioux-falls/seo' },
    { '@type': 'ListItem', position: 3, name: 'Ecommerce Development', item: CANONICAL },
  ],
};

export default function SiouxFallsEcommerceDevelopmentPage() {
  return (
    <>
      <script id="sf-ecom-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="sf-ecom-local-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }} />
      <script id="sf-ecom-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="sf-ecom-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="sf-ecom-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

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
                  <span>Sioux Falls Ecommerce Engineering</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  Ecommerce Development Agency in Sioux Falls SD
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  Scale DTC online sales and wholesale B2B dealer ordering with custom Shopify Plus engineering, Shop Pay acceleration, and seamless ERP inventory synchronization.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Get a Fixed-Price Quote" region="us" btnVariant="primary-dark" />
                  <a href="#sf-ecom-districts" className="rv-btn-secondary">
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
                  src="/images/us/commerce/ecommerce-growth-agency-team.webp"
                  alt="Sioux Falls ecommerce development team engineering custom Shopify Plus and B2B portals"
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
                  src="/images/us/commerce/b2b-ecommerce-wholesale-portal.webp"
                  alt="FactoryJet senior commerce architects reviewing wholesale B2B portal performance"
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
                  Engineered for High-Growth Commerce in South Dakota
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  From regional food processors and AgTech manufacturers to high-end apparel brands, we build custom storefronts that eliminate checkout friction and scale orders effortlessly.
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

        {/* ── 04. SIOUX FALLS COMMERCE DISTRICTS DIRECTORY ── */}
        <section id="sf-ecom-districts" className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Sioux Empire Market Depth</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Tailored E-Commerce for Sioux Falls Sectors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                From Downtown retail and DTC brands to AgTech and wholesale distribution:
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

        {/* ── 05. CORE DRIVERS & PAIN POINTS (RITOVEX NUMBERED SERVICES ROWS) ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>The FactoryJet Difference</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Why Sioux Falls Brands Choose FactoryJet Commerce
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

        {/* ── 06. ARCHITECTURE BLUEPRINT (AUTO-ROTATING TABS) ── */}
        <div id="ecom-architecture-blueprint">
          <EnterpriseArchitectureBlueprint
            badge="// SIOUX FALLS COMMERCE ARCHITECTURE BLUEPRINT"
            title="Modern E-Commerce: From Catalog to One-Tap Checkout"
            subtitle="Explore how custom Shopify Liquid architecture, Shop Pay acceleration, B2B wholesale portals, and automated ERP sync drive scalable revenue."
            legacySource="Clunky WooCommerce & Manual Phone Orders"
            targetStack="High-Speed Shopify Plus & B2B Portal Engine"
            ctaLabel="Get a Fixed-Price Quote"
            region="us"
          />
        </div>

        {/* ── 07. RITOVEX WORKING PROCESS (SPLIT LAYOUT) ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 0.85fr) 1.15fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }}>
              
              {/* Left Column Sticky Content */}
              <div style={{ position: 'sticky', top: '100px' }}>
                <div className="rv-badge" style={{ marginBottom: '14px' }}>
                  <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                  </svg>
                  <span>Step-by-Step Delivery</span>
                </div>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 18px' }}>
                  Our 5-Step E-Commerce Delivery Protocol
                </h2>
                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  From catalog architecture and custom Figma UI design to Liquid theme engineering, ERP sync, and zero-downtime launch.
                </p>
                <ModalCTAButton label="Start Your Store Build" region="us" btnVariant="primary-dark" />
              </div>

              {/* Right Column Step Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {WORKING_STEPS.map((s) => (
                  <div key={s.n} style={{ background: '#FFFFFF', border: '1px solid #E6E6EC', borderRadius: '14px', padding: '24px 28px', transition: 'all 0.25s' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#F6F6F9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>
                        {s.icon}
                      </div>
                      <span style={{ fontFamily: 'var(--pp-mono)', fontSize: '14px', fontWeight: 800, color: '#FF5622' }}>
                        {s.n}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#141414', margin: '0 0 6px' }}>
                      {s.t}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#494852', margin: 0, lineHeight: 1.55 }}>
                      {s.d}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── 08. SEARCHABLE CATEGORIZED FAQ SECTION ── */}
        <FAQ
          eyebrow="SIOUX FALLS ECOMMERCE INTELLIGENCE"
          headline="Frequently Asked Questions About E-Commerce in Sioux Falls SD"
          lead="Direct, plain English answers to what South Dakota business owners and commerce leaders ask about online store development:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FFFFFF]"
        />

        {/* ── 09. LOCAL LINK SILO MATRIX ── */}
        <section style={{ background: '#F6F6F9', borderTop: '1px solid #E6E6EC', padding: '48px 0' }}>
          <div className="pp-wrap">
            <EcommerceCityLinksUS currentCity="sioux-falls" />
          </div>
        </section>

        {/* ── 10. FINAL EXECUTIVE CTA BANNER ── */}
        <section className="pp-sec" style={{ backgroundColor: '#141414', color: '#FFFFFF', padding: 'clamp(64px, 10vh, 112px) 0', textAlign: 'center' }}>
          <div className="pp-wrap" style={{ maxWidth: '800px' }}>
            <div className="rv-badge" style={{ background: '#26262B', color: '#FF5622', borderColor: '#3E3E48', marginBottom: '20px' }}>
              <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
              </svg>
              <span>Fixed-Price E-Commerce Engineering</span>
            </div>
            
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.12, margin: '0 0 20px' }}>
              Ready to Scale Your Online Store in Sioux Falls?
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

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
  title: 'Ecommerce Development Austin TX | Shopify & Custom | FactoryJet',
  description:
    'Austin ecommerce development agency. Custom Shopify Plus, WooCommerce, and headless commerce stores built for high conversion. Get a fixed quote.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Ecommerce Development Austin TX | Shopify & Custom | FactoryJet',
    description:
      'High-converting Shopify Plus and custom e-commerce storefronts for Austin brands. Sub-second speed and ERP integrations.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Ecommerce Development Austin TX' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce Development Austin TX | FactoryJet',
    description: 'Custom Shopify Plus and e-commerce development for Austin TX brands. Fixed price, senior delivery.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const PARTNERS = [
  'Shopify Plus Partner',
  'WooCommerce Verified',
  'Klaviyo Master Partner',
  'Gorgias Premier',
  'Recharge Subscriptions',
  'Yotpo Enterprise',
  'Cloudflare Edge CDN',
  'Next.js 15 & React',
];

const STAT_CARDS = [
  { num: 'Sub-1s', title: 'Page Load Speed', desc: 'Lightning-fast mobile rendering optimized for Core Web Vitals.', icon: '⚡' },
  { num: '50%+', title: 'Shop Pay Lift', desc: 'Accelerated 1-click checkout conversion across mobile buyers.', icon: '🛍️' },
  { num: '500+', title: 'Commerce Builds', desc: 'Stores launched across direct-to-consumer and B2B wholesale.', icon: '🚀' },
  { num: 'Fixed Price', title: 'Senior Engineers', desc: 'Transparent upfront scope with zero surprise hourly billing.', icon: '💰' },
];

const AUSTIN_SECTORS = [
  {
    sector: 'Direct-to-Consumer & Apparel',
    badge: 'DTC Brands',
    desc: 'Boutique lifestyle, outdoor gear, and apparel brands clustered around South Congress and East Austin. Built with custom interactive sizing calculators, visual lookbooks, and Shop Pay 1-click checkout.',
  },
  {
    sector: 'B2B Wholesale & Hardware Tech',
    badge: 'Silicon Hills B2B',
    desc: 'Industrial components, electronics, and SaaS hardware firms along The Domain and Parmer Lane. Integrated with NetSuite ERP, customer-tier price matrices, and Net payment terms.',
  },
  {
    sector: 'Beverage, Food & Consumer Packaged Goods',
    badge: 'CPG & Subscriptions',
    desc: 'Craft beverage, specialty coffee, and organic food producers throughout Central Texas. Engineered with recurring subscription engines, custom bundle builders, and cold-chain shipping rules.',
  },
  {
    sector: 'Health, Beauty & Wellness',
    badge: 'Beauty & Wellness',
    desc: 'Fast-growing wellness, organic skincare, and nutritional supplement brands. Structured for high mobile conversion with Gorgias customer service AI and Klaviyo lifecycle automation.',
  },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Ending High Mobile Cart Abandonment with Shop Pay 1-Click Checkout',
    problem: 'Clunky multi-page checkouts force mobile shoppers to manually type credit cards and billing addresses, causing massive drop-offs.',
    solution: 'We integrate Shop Pay accelerated checkout, allowing over 150 million pre-authenticated shoppers to buy in a single click.',
  },
  {
    num: '02',
    title: 'Eliminating Bloated Themes and Slow Third-Party Plugin Sprawl',
    problem: 'Off-the-shelf templates loaded with 30+ conflicting apps create severe Core Web Vitals issues and slow mobile page load times.',
    solution: 'We engineer custom Shopify Online Store 2.0 themes using native Liquid and Tailwind CSS, achieving 95+ Google Lighthouse scores.',
  },
  {
    num: '03',
    title: 'Rebuilding Seamless ERP, 3PL Warehouse, and Inventory Synchronicity',
    problem: 'Out-of-stock items selling online and orders failing to reach warehouse fulfillment software cause costly operational chaos.',
    solution: 'We configure bi-directional API pipelines with NetSuite, Celigo, and ShipStation for sub-second order and inventory updates.',
  },
  {
    num: '04',
    title: 'Protecting 100% of Catalog SEO Equity and Organic Revenue Streams',
    problem: 'Redesigning or replatforming an online store often breaks indexed product URLs and tanks organic revenue overnight.',
    solution: 'We execute comprehensive 1-to-1 301 redirect matrices and structured Product JSON-LD schema to maintain and grow search rankings.',
  },
];

const WORKING_STEPS = [
  {
    n: '01',
    t: 'Discovery & Catalog Architecture Review',
    d: 'We audit your product catalog, variant options, third-party apps, ERP touchpoints, and conversion bottlenecks.',
    icon: '🔍',
  },
  {
    n: '02',
    t: 'Custom UX Design & Conversion Wireframing',
    d: 'We create bespoke mobile-first storefront prototypes designed to maximize average order value (AOV) and conversion rate.',
    icon: '🎨',
  },
  {
    n: '03',
    t: 'Theme Development & App Integration',
    d: 'We build high-performance Shopify OS 2.0 sections, bundle builders, subscription flows, and ERP webhook middleware.',
    icon: '💻',
  },
  {
    n: '04',
    t: 'Data Migration & 1:1 301 Redirect Mapping',
    d: 'We sanitize customer accounts, historical orders, and product data, deploying single-hop 301 redirects for full SEO protection.',
    icon: '🔗',
  },
  {
    n: '05',
    t: 'Zero-Downtime Launch & Continuous Optimization',
    d: 'We perform end-to-end checkout testing, delta sync transactions, switch DNS during off-peak hours, and monitor live sales.',
    icon: '🚀',
  },
];

const FAQ_CATEGORIES = [
  { key: 'platform', label: 'Platforms & Technology' },
  { key: 'pricing', label: 'Pricing & Scoping' },
  { key: 'integrations', label: 'ERP & Integrations' },
  { key: 'process', label: 'Timeline & Launch' },
];

const FAQ_ITEMS = [
  {
    category: 'platform',
    question: 'Why do you recommend Shopify and Shopify Plus for Austin brands?',
    answer:
      'Shopify Plus delivers 99.99% cloud uptime, sub-second global CDN infrastructure, seamless Shop Pay 1-click checkout, and eliminates ongoing server maintenance. It allows marketing teams to publish dynamic promotions in minutes without developer dependencies.',
  },
  {
    category: 'platform',
    question: 'Do you build custom themes or use pre-made templates?',
    answer:
      'We build bespoke Shopify Online Store 2.0 themes tailored specifically to your brand identity, product catalog hierarchy, and conversion goals. This ensures clean code, zero app bloat, and 90+ mobile Lighthouse performance scores.',
  },
  {
    category: 'pricing',
    question: 'How much does custom e-commerce development cost in Austin?',
    answer:
      'Projects range from $5,000 for high-converting starter stores to $25,000+ for enterprise multi-channel Shopify Plus builds with complex ERP integrations. Every project is scoped with a guaranteed fixed-price proposal.',
  },
  {
    category: 'pricing',
    question: 'Are there any hidden monthly agency fees or retainer lock-ins?',
    answer:
      'No. Our development builds are delivered on a fixed-price milestone basis. You own 100% of the code, store assets, and accounts upon completion with zero recurring vendor lock-ins.',
  },
  {
    category: 'integrations',
    question: 'Can you integrate our Austin store with our ERP and 3PL warehouse?',
    answer:
      'Yes. We build custom bi-directional API connections for NetSuite, SAP, Microsoft Dynamics, ShipStation, and Celigo. Real-time inventory levels, customer pricing tiers, and tracking numbers synchronize automatically.',
  },
  {
    category: 'integrations',
    question: 'How do you handle recurring subscriptions and custom bundle builders?',
    answer:
      'We implement Recharge, Smartrr, or native Shopify Subscriptions alongside custom interactive bundle builders that increase average order value while maintaining an effortless checkout experience.',
  },
  {
    category: 'process',
    question: 'How long does an e-commerce development project take to launch?',
    answer:
      'Starter and migration builds typically launch in 2 to 4 weeks. Complex enterprise builds featuring custom middleware and B2B pricing portals take 6 to 8 weeks.',
  },
  {
    category: 'process',
    question: 'Will our existing search rankings drop during a store redesign?',
    answer:
      'No. We inventory all indexed URLs, implement 1-to-1 single-hop 301 redirects, maintain title tag structures, and preserve all structured product schema markup to safeguard organic traffic.',
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
  name: 'Austin Ecommerce Development Services',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'Shopify Plus & Custom Ecommerce Store Development',
  description:
    'Custom Shopify Plus and WooCommerce development for Austin brands. Sub-second Core Web Vitals, ERP integrations, and 1-click checkout optimization.',
  areaServed: { '@type': 'City', name: 'Austin' },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Ecommerce Development Austin TX | Shopify & Custom | FactoryJet',
  description: 'Custom Shopify Plus, WooCommerce, and headless commerce stores built for high conversion in Austin TX.',
  url: CANONICAL,
  dateModified: PAGE_MODIFIED,
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/' },
    { '@type': 'ListItem', position: 2, name: 'Austin', item: 'https://factoryjet.com/austin/web-design' },
    { '@type': 'ListItem', position: 3, name: 'Ecommerce Development', item: CANONICAL },
  ],
};

export default function AustinEcommercePage() {
  return (
    <>
      <script id="austin-ecom-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
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
                  <span>Austin Ecommerce Development</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  High-Converting Ecommerce Development in Austin TX
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  We engineer high-speed Shopify Plus, WooCommerce, and custom headless commerce stores for Austin brands. Built for sub-second mobile speed, Shop Pay 1-click checkout, and robust ERP integration.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Get a Fixed-Price Quote" region="us" btnVariant="primary-dark" />
                  <a href="#austin-sectors" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>Explore Commerce Sectors</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame (Edge-to-Edge) */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/us/commerce/magento-to-shopify-people-lead-dev.webp"
                  alt="Senior ecommerce technical director architecting custom Shopify Plus store for Austin brand"
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
              <div className="rv-ticker-label">Certified Commerce Ecosystem Partners</div>
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
                  src="/images/us/commerce/replatforming-people-team-planning.webp"
                  alt="FactoryJet senior ecommerce engineers planning custom Shopify checkout flow and inventory sync"
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
                  <span>Built for Revenue</span>
                </div>

                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 14px' }}>
                  Engineered for Maximum Mobile Conversion in Austin
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  Most e-commerce stores lose over half their mobile traffic to slow load times and friction-filled checkouts. We eliminate bloat, optimize Core Web Vitals, and unlock Shop Pay to maximize your store revenue.
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
                  <ModalCTAButton label="Schedule Austin Strategy Call" region="us" btnVariant="primary-dark" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 04. AUSTIN COMMERCE SECTORS DIRECTORY ── */}
        <section id="austin-sectors" className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Specialized Commerce</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                E-Commerce Solutions Built for Austin Industries
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                From direct-to-consumer apparel on South Congress to Silicon Hills enterprise hardware:
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {AUSTIN_SECTORS.map((s) => (
                <div
                  key={s.sector}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E6E6EC',
                    borderRadius: '16px',
                    padding: '28px',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#FF5622', background: '#FFF0EB', padding: '4px 10px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'inline-block', marginBottom: '14px' }}>
                    {s.badge}
                  </span>

                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#141414', margin: '0 0 8px', letterSpacing: '-0.015em' }}>
                    {s.sector}
                  </h3>

                  <p style={{ fontSize: '13.5px', color: '#6E6E80', lineHeight: 1.55, margin: 0 }}>
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 05. CORE PROBLEMS & SOLUTIONS (RITOVEX NUMBERED SERVICES ROWS) ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Conversion Optimization</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Why Austin Brands Choose FactoryJet Ecommerce
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                We replace bloated templates and slow checkouts with scalable, high-converting store architecture:
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
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#8E8E9F', letterSpacing: '0.08em' }}>The Common Store Flaw:</span>
                      <p style={{ fontSize: '13.5px', color: '#494852', margin: '4px 0 0', lineHeight: 1.5 }}>{p.problem}</p>
                    </div>
                    <div>
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#FF5622', letterSpacing: '0.08em' }}>The FactoryJet Engineering Fix:</span>
                      <p style={{ fontSize: '13.5px', color: '#141414', fontWeight: 600, margin: '4px 0 0', lineHeight: 1.5 }}>{p.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 06. ARCHITECTURE BLUEPRINT (AUTO-ROTATING TABS) ── */}
        <div id="ecommerce-architecture-blueprint">
          <EnterpriseArchitectureBlueprint
            badge="// AUSTIN ECOMMERCE ARCHITECTURE BLUEPRINT"
            title="Modern E-Commerce Stack: From Edge Storefront to ERP"
            subtitle="Explore how your product catalog, Shop Pay checkout, Klaviyo marketing automation, and warehouse inventory synchronize seamlessly."
            legacySource="Slow Monolith / Generic Template"
            targetStack="Shopify Plus High-Conversion Stack"
            ctaLabel="Schedule Architecture Discovery Call"
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
                  <span>Our Delivery Process</span>
                </div>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 18px' }}>
                  Our 5-Step E-Commerce Protocol
                </h2>
                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  From initial UX wireframing to ERP webhook testing and zero-downtime cutover, we handle the entire build with senior engineering rigor.
                </p>
                <ModalCTAButton label="Get Your Fixed-Price Proposal" region="us" btnVariant="primary-dark" />
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
          eyebrow="AUSTIN ECOMMERCE INTELLIGENCE"
          headline="Frequently Asked Questions About Ecommerce Development in Austin"
          lead="Everything founders, marketing VPs, and operations directors ask when planning a store build:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FFFFFF]"
        />

        {/* ── 09. ECOMMERCE CITY LINKS ── */}
        <section style={{ background: '#F6F6F9', borderTop: '1px solid #E6E6EC', padding: '48px 0' }}>
          <div className="pp-wrap">
            <EcommerceCityLinksUS currentCity="austin" />
          </div>
        </section>

        {/* ── 10. FINAL EXECUTIVE CTA ── */}
        <section className="pp-sec" style={{ backgroundColor: '#141414', color: '#FFFFFF', padding: 'clamp(64px, 10vh, 112px) 0', textAlign: 'center' }}>
          <div className="pp-wrap" style={{ maxWidth: '800px' }}>
            <div className="rv-badge" style={{ background: '#26262B', color: '#FF5622', borderColor: '#3E3E48', marginBottom: '20px' }}>
              <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
              </svg>
              <span>Fixed-Price Austin Ecommerce</span>
            </div>
            
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.12, margin: '0 0 20px' }}>
              Ready to Upgrade Your Austin Online Store?
            </h2>
            
            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Tell us about your brand, SKU volume, and ERP integration requirements. We will provide a comprehensive technical roadmap with a guaranteed fixed quote.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <ModalCTAButton label="Schedule Architecture Discovery Call" region="us" btnVariant="primary-light" />
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import EnterpriseArchitectureBlueprint from '@/components/v2/EnterpriseArchitectureBlueprint';
import '@/components/v2/PlatformPage.css';

const PAGE_MODIFIED = '2026-08-24';

export const metadata: Metadata = {
  title: 'Wix to Shopify Migration Services | FactoryJet',
  description:
    'Migrate Wix to Shopify with zero downtime. We transfer product catalogs, customer records, and order history with 1:1 301 redirects. Get a quote.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Wix to Shopify Migration Services | FactoryJet',
    description:
      'Migrate Wix to Shopify with zero downtime. Transfer product catalogs, customer records, and order history with 1:1 301 redirects.',
    url: 'https://factoryjet.com/replatforming/wix-to-shopify',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Wix to Shopify Migration Services' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wix to Shopify Migration Services | FactoryJet',
    description: 'Migrate Wix to Shopify with zero ranking loss or cutover downtime.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/replatforming/wix-to-shopify' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const FAQ_CATEGORIES = [
  { key: 'basics', label: 'Why Move to Shopify' },
  { key: 'catalog', label: 'Catalog & Variant Mapping' },
  { key: 'speed', label: 'Speed & Conversion' },
  { key: 'cost', label: 'Costs & Fixed Pricing' },
  { key: 'seo', label: 'SEO & 301 Redirects' },
  { key: 'cutover', label: 'Cutover & Timeline' },
];

const FAQ_ITEMS = [
  {
    category: 'basics',
    question: 'Why are growing brands leaving Wix eCommerce for Shopify?',
    answer:
      'Brands outgrow Wix when they encounter severe e-commerce limitations: slow mobile checkout speeds, lack of enterprise third-party marketing apps, rigid inventory controls, and poor multi-channel selling capabilities. Shopify offers a high-performance foundation built specifically for scalable online and omnichannel commerce.',
  },
  {
    category: 'basics',
    question: 'How long does a Wix to Shopify migration take?',
    answer:
      'A standard Wix to Shopify migration takes between 2 to 4 weeks. This includes catalog and customer extraction, custom theme design, app integrations (Klaviyo, reviews, loyalty), comprehensive 301 URL redirect mapping, and zero-downtime DNS cutover.',
  },
  {
    category: 'catalog',
    question: 'How do Wix product variants and custom fields map to Shopify?',
    answer:
      'We extract all Wix product attributes, variant options (size, color, material), inventory counts, and custom input fields into native Shopify variants and metafields. Your entire product catalog transfers with complete data accuracy.',
  },
  {
    category: 'catalog',
    question: 'Can historical customer accounts and order histories be transferred from Wix?',
    answer:
      'Yes. All customer records, contact information, past order archives, and delivery addresses are imported into Shopify. We send automated activation emails so customers can access their new accounts smoothly upon launch.',
  },
  {
    category: 'speed',
    question: 'How much faster is Shopify compared to Wix eCommerce?',
    answer:
      'Shopify delivers a 40% to 65% reduction in mobile page load latency compared to Wix. Shopify operates on a global multi-region CDN with optimized asset compression and lightning-fast Shop Pay checkout, reducing cart abandonment significantly.',
  },
  {
    category: 'speed',
    question: 'What conversion rate increase can we expect from Shop Pay?',
    answer:
      'Shop Pay increases checkout conversion by up to 50% compared to standard guest checkout forms. Over 150 million shoppers have their billing and shipping details saved in Shop Pay, making mobile purchases virtually instantaneous.',
  },
  {
    category: 'cost',
    question: 'How much does a Wix to Shopify migration cost?',
    answer:
      'Our fixed-price Wix migrations typically range between $5,000 and $16,000 depending on catalog size, custom theme redesign requirements, and third-party app integrations. We guarantee no surprise hourly billing.',
  },
  {
    category: 'cost',
    question: 'Does Shopify charge additional transaction fees on sales?',
    answer:
      'When using Shopify Payments (which includes Shop Pay, Apple Pay, Google Pay, and credit cards), there are 0% additional transaction fees. You only pay standard, competitive credit card processing rates.',
  },
  {
    category: 'seo',
    question: 'Will our organic search rankings drop when moving from Wix to Shopify?',
    answer:
      'Not with our migration protocol. Wix uses custom URL slugs. We crawl 100% of your existing indexed URLs, build an exhaustive 1-to-1 redirect map, and deploy single-hop 301 redirects to ensure every customer link and search ranking transfers without equity loss.',
  },
  {
    category: 'seo',
    question: 'How do you preserve blog articles and SEO metadata from Wix?',
    answer:
      'We extract all historical blog posts, author attribution, publish dates, featured images, and custom meta tags from Wix and import them directly into Shopify Blog with structured JSON-LD schemas.',
  },
  {
    category: 'cutover',
    question: 'How do you guarantee zero downtime during DNS switchover?',
    answer:
      'We run a delta sync right before launch to capture recent orders and customer data, configure SSL certificates in advance, point your domain DNS records to Shopify during off-peak hours, and verify live payment processing immediately.',
  },
  {
    category: 'cutover',
    question: 'Can customer reviews and ratings from Wix apps be migrated?',
    answer:
      'Yes. Reviews from Wix apps are exported, formatted, and imported directly into premier Shopify review platforms like Judge.me, Yotpo, or Loox with verified buyer badges intact.',
  },
];

const STAT_CARDS = [
  { num: '50%', title: 'Higher Checkout Speed', desc: 'Shop Pay 1-click checkout dramatically lifts conversion over standard guest forms.', icon: '⚡' },
  { num: '10,000+', title: 'Ecosystem Apps', desc: 'Connect best-in-class tools for marketing, subscriptions, reviews, and loyalty.', icon: '🛍️' },
  { num: 'Multi-Channel', title: 'Sales Sync', desc: 'Manage TikTok Shop, Instagram, Amazon, and physical retail POS in one admin.', icon: '🔄' },
  { num: '100%', title: 'SEO Equity Preserved', desc: 'Comprehensive 1-to-1 301 URL redirect mapping prevents traffic and ranking loss.', icon: '🛡️' },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Ending the Strict E-Commerce Bottlenecks of Wix',
    problem: 'Wix is designed for basic websites, resulting in clunky mobile shopping carts and limited shipping and tax customization.',
    solution: 'Shopify is a dedicated e-commerce powerhouse built to handle high transaction volumes, complex shipping rules, and global commerce.',
  },
  {
    num: '02',
    title: 'Unlocking Shop Pay 1-Click Accelerated Checkout Conversion',
    problem: 'Multi-step checkouts on Wix have high friction and significant mobile cart abandonment rates.',
    solution: 'Shop Pay enables over 150 million pre-authenticated shoppers to complete purchases in a single click, boosting revenue instantly.',
  },
  {
    num: '03',
    title: 'Accessing Premier E-Commerce Marketing & Growth Tools',
    problem: 'Wix has a closed, limited app marketplace that cannot support advanced email flows, SMS marketing, or sophisticated loyalty tiers.',
    solution: 'Instant native integrations with industry-leading tools like Klaviyo, Gorgias, Yotpo, Recharge, and Triple Whale.',
  },
  {
    num: '04',
    title: 'Giving Marketing Teams Total Visual Merchandising Freedom',
    problem: 'Wix absolute-position drag-and-drop editors often create misaligned layouts on mobile screens and slow down page rendering.',
    solution: 'Shopify Online Store 2.0 modular sections ensure clean, responsive layouts that look flawless across all screen sizes.',
  },
];

const PARTNERS = [
  'Shopify Partner',
  'Shop Pay Integration',
  'Klaviyo Master Partner',
  'Gorgias Premier',
  'Yotpo Enterprise',
  'Judge.me Verified Partner',
  'Recharge Subscriptions',
  'Cloudflare Global CDN',
];

const WORKING_STEPS = [
  {
    n: '01',
    t: 'Catalog & Layout Architecture Audit',
    d: 'We inventory all Wix products, variants, blog articles, and custom app features to design a high-converting Shopify store structure.',
    icon: '🔍',
  },
  {
    n: '02',
    t: 'Data Sanitization & Extraction',
    d: 'We extract products, customer profiles, past order archives, blog posts, and SEO metadata into clean Shopify data models.',
    icon: '🧹',
  },
  {
    n: '03',
    t: 'High-Converting Storefront Build',
    d: 'We design and code a custom Shopify 2.0 theme with responsive drag-and-drop sections optimized for mobile speed and conversion.',
    icon: '💻',
  },
  {
    n: '04',
    t: '1-to-1 SEO Crawl & 301 Redirect Mapping',
    d: 'We crawl 100% of your indexed Wix URLs to build single-hop 301 redirects, preserving all domain authority and Google rankings.',
    icon: '🔗',
  },
  {
    n: '05',
    t: 'Delta Sync & Zero-Downtime Launch',
    d: 'We perform a final delta sync of latest customer orders, switch DNS to Shopify during off-peak hours, and verify live transactions.',
    icon: '🚀',
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
  name: 'Wix to Shopify Migration Services',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'E-Commerce Replatforming & Migration',
  description:
    'End-to-end migration from Wix to Shopify with complete product catalog preservation, theme modernization, and 100% SEO ranking protection.',
  areaServed: ['US', 'GB', 'CA', 'AU'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Replatforming Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Wix to Shopify Migration',
        },
      },
    ],
  },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Wix to Shopify Migration Services | FactoryJet',
  description: 'Complete engineering blueprint for migrating Wix stores to Shopify.',
  url: 'https://factoryjet.com/replatforming/wix-to-shopify',
  dateModified: PAGE_MODIFIED,
};

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  logo: 'https://factoryjet.com/logo.png',
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/' },
    { '@type': 'ListItem', position: 2, name: 'Replatforming', item: 'https://factoryjet.com/replatforming' },
    { '@type': 'ListItem', position: 3, name: 'Wix to Shopify', item: 'https://factoryjet.com/replatforming/wix-to-shopify' },
  ],
};

export default function WixToShopifyPage() {
  return (
    <>
      <script id="wix-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="wix-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="wix-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="wix-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="wix-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

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
                  <span>Wix to Shopify Migration</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  Migrate from Wix to Shopify with Zero Ranking Loss
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  Escape Wix e-commerce limits and slow checkouts. We transfer your products, customers, and order history while unlocking Shop Pay 1-click accelerated checkout.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Get a Free Migration Audit" region="us" btnVariant="primary-dark" />
                  <a href="#architecture-blueprint" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>Explore Architecture</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame (Edge-to-Edge) */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/replatforming/wix-hero-owner.webp"
                  alt="E-commerce store owner reviewing Shopify store speed and mobile conversion metrics"
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
              <div className="rv-ticker-label">Trusted Enterprise Technology &amp; Ecosystem Partners</div>
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
                  src="/images/replatforming/wix-team-devs.webp"
                  alt="FactoryJet migration engineers reviewing product inventory and multi-channel sync"
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
                  <span>About FactoryJet</span>
                </div>

                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 14px' }}>
                  Engineered for Zero Downtime. Built for Growth.
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  We specialize in clean, high-performance migrations from Wix to Shopify. We transfer your catalog, customer profiles, and order records while giving your brand higher checkout conversion, sub-second load times, and true multi-channel growth.
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
                  <ModalCTAButton label="Schedule Discovery Call" region="us" btnVariant="primary-dark" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 04. WHY LEAVE WIX (RITOVEX NUMBERED SERVICES ROWS) ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>The Direct Comparison</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Why Growing Brands Are Leaving Wix
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Wix is built for basic websites, not scalable commerce. Here is what changes when you upgrade to Shopify:
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
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#8E8E9F', letterSpacing: '0.08em' }}>The Wix Bottleneck:</span>
                      <p style={{ fontSize: '13.5px', color: '#494852', margin: '4px 0 0', lineHeight: 1.5 }}>{p.problem}</p>
                    </div>
                    <div>
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#FF5622', letterSpacing: '0.08em' }}>The Shopify Fix:</span>
                      <p style={{ fontSize: '13.5px', color: '#141414', fontWeight: 600, margin: '4px 0 0', lineHeight: 1.5 }}>{p.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 05. THE ENTERPRISE ARCHITECTURE BLUEPRINT (AUTO-ROTATING TABS) ── */}
        <div id="architecture-blueprint">
          <EnterpriseArchitectureBlueprint
            badge="// WIX TO SHOPIFY ARCHITECTURE BLUEPRINT"
            title="Enterprise Architecture: Replatforming Wix to Shopify"
            subtitle="Migrate product variants, customer order archives, and reviews while unlocking sub-second Shop Pay conversion and multi-channel sales."
            legacySource="Wix eCommerce"
            targetStack="Shopify Modern Cloud Architecture"
            ctaLabel="Schedule Wix Migration Scoping"
            region="us"
          />
        </div>

        {/* ── 06. RITOVEX SIDE-BY-SIDE COMPARISON TABLE ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Side-by-Side Analysis</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Wix vs. Shopify
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Compare key commerce, checkout, and inventory capabilities side by side:
              </p>
            </div>

            <div style={{ overflowX: 'auto', borderRadius: '14px', border: '1px solid #E6E6EC' }}>
              <table className="pp-table" style={{ margin: 0, width: '100%', background: '#FFFFFF' }}>
                <thead style={{ background: '#F6F6F9' }}>
                  <tr>
                    <th style={{ color: '#141414', fontWeight: 700 }}>Feature / Dimension</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>Wix eCommerce</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>Shopify Cloud Platform</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>What It Means for Your Brand</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Checkout Experience</td>
                    <td>Slow, multi-step checkout form with high mobile drop-off</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Shop Pay 1-click accelerated checkout</td>
                    <td>Up to 50% higher checkout completion across 150M+ saved shoppers</td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>App &amp; Partner Ecosystem</td>
                    <td>Very limited app market with restricted APIs</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>10,000+ top-tier enterprise apps &amp; integrations</td>
                    <td>Seamless compatibility with Klaviyo, Gorgias, Yotpo, and Recharge</td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Mobile Performance</td>
                    <td>Heavy absolute-position JavaScript that slows rendering</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Clean Liquid templates with global CDN asset caching</td>
                    <td>Higher mobile speed scores, lower bounce rates, and better SEO</td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Multi-Channel Commerce</td>
                    <td>Basic social feeds with manual inventory reconciliation</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Unified selling on TikTok, Meta, Amazon, and POS</td>
                    <td>Automated multi-channel stock sync prevents overselling everywhere</td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Scalability &amp; Limits</td>
                    <td>Struggles with large product catalogs and flash sales</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Handles 40,000+ checkouts per minute with 99.99% uptime</td>
                    <td>Scale traffic and product lines without ever crashing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

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
                  <span>Our Working Process</span>
                </div>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 18px' }}>
                  Our 5-Step Migration Protocol
                </h2>
                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  We execute every phase with senior developer precision: data parity is verified before build, and 1-to-1 redirect mapping is tested before DNS switch.
                </p>
                <ModalCTAButton label="Start Your Wix Audit" region="us" btnVariant="primary-dark" />
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

        {/* ── 08. RITOVEX ENTERPRISE CLIENT PROOF & TESTIMONIALS ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: 'clamp(56px, 8vh, 96px) 0', borderTop: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <span className="rv-badge-icon">⭐</span>
                <span>Verified Client Feedback</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                What Brand Founders Say About Our Migration
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Real feedback from store owners who moved from Wix to Shopify:
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              
              {/* Testimonial 1 */}
              <div style={{ background: '#F6F6F9', border: '1px solid #EBEBEF', borderRadius: '16px', padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ color: '#F59E0B', fontSize: '16px', marginBottom: '16px' }}>★★★★★</div>
                  <p style={{ fontSize: '15px', color: '#141414', lineHeight: 1.6, fontStyle: 'italic', margin: 0 }}>
                    &ldquo;Our mobile conversion rate surged 45% immediately after moving to Shopify and enabling Shop Pay. FactoryJet transferred all 1,200 products with zero hiccups.&rdquo;
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '24px', paddingTop: '18px', borderTop: '1px solid #E6E6EC' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#E6E6EC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#141414' }}>
                    DT
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#141414' }}>Daniel Torres</div>
                    <div style={{ fontSize: '12px', color: '#6E6E80' }}>Founder, Handcrafted Leather Goods</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div style={{ background: '#F6F6F9', border: '1px solid #EBEBEF', borderRadius: '16px', padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ color: '#F59E0B', fontSize: '16px', marginBottom: '16px' }}>★★★★★</div>
                  <p style={{ fontSize: '15px', color: '#141414', lineHeight: 1.6, fontStyle: 'italic', margin: 0 }}>
                    &ldquo;We were spending hours manually fixing inventory between online and in-store sales. FactoryJet set up Shopify POS and connected our Klaviyo flows effortlessly.&rdquo;
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '24px', paddingTop: '18px', borderTop: '1px solid #E6E6EC' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#E6E6EC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#141414' }}>
                    HR
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#141414' }}>Hannah Reed</div>
                    <div style={{ fontSize: '12px', color: '#6E6E80' }}>Co-Owner, Specialty Wellness Boutique</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div style={{ background: '#F6F6F9', border: '1px solid #EBEBEF', borderRadius: '16px', padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ color: '#F59E0B', fontSize: '16px', marginBottom: '16px' }}>★★★★★</div>
                  <p style={{ fontSize: '15px', color: '#141414', lineHeight: 1.6, fontStyle: 'italic', margin: 0 }}>
                    &ldquo;FactoryJet mapped every single Wix URL to our new Shopify store. Our Google rankings never dropped for a single day. Seamless migration from start to finish.&rdquo;
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '24px', paddingTop: '18px', borderTop: '1px solid #E6E6EC' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#E6E6EC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#141414' }}>
                    JP
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#141414' }}>Jason Phillips</div>
                    <div style={{ fontSize: '12px', color: '#6E6E80' }}>Managing Director, Gourmet Beverage Brand</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 09. SEARCHABLE CATEGORIZED FAQ SECTION ── */}
        <FAQ
          eyebrow="MIGRATION INTELLIGENCE"
          headline="Frequently Asked Questions About Moving Off Wix"
          lead="Everything store owners, marketing managers, and founders ask when migrating to Shopify:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#F6F6F9]"
        />

        {/* ── 10. FINAL EXECUTIVE REPLATFORMING CTA ── */}
        <section className="pp-sec" style={{ backgroundColor: '#141414', color: '#FFFFFF', padding: 'clamp(64px, 10vh, 112px) 0', textAlign: 'center' }}>
          <div className="pp-wrap" style={{ maxWidth: '800px' }}>
            <div className="rv-badge" style={{ background: '#26262B', color: '#FF5622', borderColor: '#3E3E48', marginBottom: '20px' }}>
              <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
              </svg>
              <span>Fixed-Price Migration Guarantee</span>
            </div>
            
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.12, margin: '0 0 20px' }}>
              Ready to Upgrade Wix to Shopify?
            </h2>
            
            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Send us your Wix store URL. We will audit your current product catalog, customer data, and active apps to provide a detailed technical roadmap with a guaranteed fixed quote.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <ModalCTAButton label="Schedule Wix Discovery Call" region="us" btnVariant="primary-light" />
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}

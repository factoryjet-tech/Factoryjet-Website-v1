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
  title: 'Squarespace to Shopify Migration Services | FactoryJet',
  description:
    'Complete engineering blueprint for migrating from Squarespace to Shopify. We upgrade your beautiful design into a high-converting Shopify store with Shop Pay 1-click checkout, advanced inventory management, and zero SEO ranking loss.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Squarespace to Shopify Migration Services | FactoryJet',
    description:
      'Replatform Squarespace to Shopify without losing your visual design aesthetic, blog history, or search rankings. Fixed price, senior developer delivery.',
    url: 'https://factoryjet.com/replatforming/squarespace-to-shopify',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet Squarespace to Shopify migration services' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Squarespace to Shopify Migration | FactoryJet',
    description: 'Break free from Squarespace e-commerce limitations. Upgrade to Shopify with zero cutover downtime.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/replatforming/squarespace-to-shopify' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const FAQ_CATEGORIES = [
  { key: 'basics', label: 'Why Move to Shopify' },
  { key: 'design', label: 'Design & Visual Aesthetic' },
  { key: 'checkout', label: 'Checkout & Conversion' },
  { key: 'cost', label: 'Costs & Fixed Pricing' },
  { key: 'seo', label: 'SEO & 301 Redirects' },
  { key: 'cutover', label: 'Cutover & Timeline' },
];

const FAQ_ITEMS = [
  {
    category: 'basics',
    question: 'Why are boutique and direct-to-consumer brands leaving Squarespace for Shopify?',
    answer:
      'Brands outgrow Squarespace when they need advanced e-commerce functionality: multi-channel selling, native retail POS, 1-click Shop Pay checkout, third-party logistics integration, advanced customer segmentation, and custom subscription billing. Shopify provides an enterprise-ready foundation that scales without sales limits.',
  },
  {
    category: 'basics',
    question: 'How long does a Squarespace to Shopify migration take?',
    answer:
      'A standard Squarespace migration takes between 2 to 4 weeks. This includes catalog and customer extraction, custom theme styling to preserve or elevate your visual brand, app integrations (Klaviyo, reviews, subscriptions), and complete 301 URL redirect mapping.',
  },
  {
    category: 'design',
    question: 'Will our Shopify store look as clean and aesthetic as our Squarespace site?',
    answer:
      'Yes, and even better. We rebuild your visual identity using custom Shopify Online Store 2.0 sections. You retain complete aesthetic elegance while gaining faster mobile load speeds, smoother interactions, and flexible drag-and-drop merchandising.',
  },
  {
    category: 'design',
    question: 'What happens to our blog articles, portfolios, and gallery layouts?',
    answer:
      'We extract all historical blog posts, author records, gallery images, and portfolio case studies into Shopify Blog and custom page templates. All formatting, typography styles, and image alt tags are preserved.',
  },
  {
    category: 'checkout',
    question: 'How does Shopify checkout compare to Squarespace checkout?',
    answer:
      'Shopify features Shop Pay, the highest-converting accelerated checkout on the internet with over 150 million saved buyers. Shop Pay lifts checkout conversion by up to 50% compared to standard guest checkout forms on Squarespace.',
  },
  {
    category: 'checkout',
    question: 'Can we manage inventory across multiple warehouses or retail stores?',
    answer:
      'Yes. Unlike Squarespace which has limited inventory routing, Shopify natively supports multi-location inventory, warehouse splits, 3PL integrations (ShipBob, Deliverr, Flexport), and in-person retail sales via Shopify POS.',
  },
  {
    category: 'cost',
    question: 'How much does a Squarespace to Shopify migration cost?',
    answer:
      'Our fixed-price Squarespace migrations range between $6,000 and $18,000 depending on catalog size, custom layout complexity, and third-party app requirements. We provide a fixed-price proposal before starting any development.',
  },
  {
    category: 'cost',
    question: 'Does Shopify charge transaction fees on sales?',
    answer:
      'When using Shopify Payments (which powers Shop Pay, Apple Pay, Google Pay, and all major credit cards), there are 0% additional transaction fees. You only pay standard, competitive credit card processing rates.',
  },
  {
    category: 'seo',
    question: 'Will our search engine rankings drop when moving off Squarespace?',
    answer:
      'Not with our migration protocol. Squarespace uses distinct URL routing paths. We crawl 100% of your indexed URLs, create an exhaustive 1-to-1 redirect map, and deploy single-hop 301 redirects to ensure every customer bookmark and search engine ranking transfers seamlessly.',
  },
  {
    category: 'seo',
    question: 'How do you handle Squarespace image URLs and blog metadata?',
    answer:
      'We extract all custom page titles, meta descriptions, image alt attributes, and Open Graph tags from your Squarespace site and configure structured JSON-LD schemas in your new Shopify theme.',
  },
  {
    category: 'cutover',
    question: 'Can historical customer accounts and order histories be transferred?',
    answer:
      'Yes. All customer records, contact information, past order archives, and delivery addresses are imported into Shopify. We send automated activation emails so customers can log in to their new accounts instantly.',
  },
  {
    category: 'cutover',
    question: 'How do you guarantee zero downtime during DNS switchover?',
    answer:
      'We run a delta sync right before launch to capture recent orders and customer data, configure SSL certificates in advance, point your domain DNS records to Shopify during off-peak hours, and verify live payment processing immediately.',
  },
];

const STAT_CARDS = [
  { num: '50%', title: 'Higher Checkout Speed', desc: 'Shop Pay 1-click checkout dramatically lifts conversion over standard guest forms.', icon: '⚡' },
  { num: '10,000+', title: 'Ecosystem Apps', desc: 'Connect best-in-class tools for marketing, subscriptions, reviews, and loyalty.', icon: '🛍️' },
  { num: 'Multi-Location', title: 'Inventory Sync', desc: 'Manage stock across multiple warehouses, 3PLs, and retail store locations.', icon: '🔄' },
  { num: '100%', title: 'SEO Equity Preserved', desc: 'Comprehensive 1-to-1 301 URL redirect mapping prevents traffic and ranking loss.', icon: '🛡️' },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Ending the Strict E-Commerce Limitations of Squarespace',
    problem: 'Squarespace lacks essential commerce capabilities like advanced shipping rules, multi-warehouse routing, and robust B2B pricing tiers.',
    solution: 'Shopify provides an enterprise-grade commerce architecture that supports multi-location fulfillment, automated tax calculations, and global selling.',
  },
  {
    num: '02',
    title: 'Unlocking Shop Pay Accelerated 1-Click Checkout Conversion',
    problem: 'Standard multi-step checkouts on Squarespace create friction for mobile shoppers, leading to high cart abandonment.',
    solution: 'Shop Pay allows over 150 million pre-authenticated shoppers to checkout in a single click, instantly boosting conversion rates.',
  },
  {
    num: '03',
    title: 'Accessing the World’s Premier E-Commerce App Ecosystem',
    problem: 'Squarespace has a very limited extensions library, making advanced email flows, loyalty programs, and reviews difficult to scale.',
    solution: 'Instant native integrations with top tools like Klaviyo, Gorgias, Yotpo, Recharge Subscriptions, and Triple Whale.',
  },
  {
    num: '04',
    title: 'Connecting Physical Retail & Pop-Up POS Effortlessly',
    problem: 'Squarespace POS is basic and lacks deep omnichannel capabilities for multi-store retail brands.',
    solution: 'Shopify POS unifies your online and physical retail sales, inventory counts, customer loyalty, and gift cards on a single platform.',
  },
];

const PARTNERS = [
  'Shopify Partner',
  'Shop Pay Integration',
  'Klaviyo Master Partner',
  'Gorgias Premier',
  'Yotpo Enterprise',
  'Recharge Subscriptions',
  'Judge.me Verified Partner',
  'Cloudflare Global CDN',
];

const WORKING_STEPS = [
  {
    n: '01',
    t: 'Catalog & Layout Architecture Audit',
    d: 'We review your Squarespace products, variants, blog articles, and custom design layouts to build a comprehensive Shopify specification.',
    icon: '🔍',
  },
  {
    n: '02',
    t: 'Data Extraction & Metafield Mapping',
    d: 'We extract products, customer profiles, order history, blog posts, and SEO metadata, organizing them into clean Shopify data models.',
    icon: '📊',
  },
  {
    n: '03',
    t: 'Bespoke Shopify Storefront Build',
    d: 'We design and develop a custom Shopify 2.0 theme that elevates your visual aesthetic while optimizing for sub-second load times.',
    icon: '💻',
  },
  {
    n: '04',
    t: '1-to-1 SEO Crawl & 301 Redirect Matrix',
    d: 'We crawl 100% of your indexed Squarespace URLs to generate single-hop 301 redirects, protecting all search engine equity and backlinks.',
    icon: '🔗',
  },
  {
    n: '05',
    t: 'Delta Sync & Zero-Downtime Launch',
    d: 'We perform a final delta sync of latest customer orders, switch DNS to Shopify during off-peak hours, and verify live payment routing.',
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
  name: 'Squarespace to Shopify Migration Services',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'E-Commerce Replatforming & Design Migration',
  description:
    'End-to-end migration from Squarespace to Shopify with visual design elevation, customer order history transfer, and 100% SEO ranking protection.',
  areaServed: ['US', 'GB', 'CA', 'AU'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Replatforming Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Squarespace to Shopify Migration',
        },
      },
    ],
  },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Squarespace to Shopify Migration Services | FactoryJet',
  description: 'Complete engineering blueprint for migrating Squarespace stores to Shopify.',
  url: 'https://factoryjet.com/replatforming/squarespace-to-shopify',
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
    { '@type': 'ListItem', position: 3, name: 'Squarespace to Shopify', item: 'https://factoryjet.com/replatforming/squarespace-to-shopify' },
  ],
};

export default function SquarespaceToShopifyPage() {
  return (
    <>
      <script id="squarespace-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="squarespace-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="squarespace-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="squarespace-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="squarespace-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

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
                  <span>Squarespace to Shopify Migration</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  Migrate from Squarespace to Shopify with Zero Ranking Loss
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  Keep your elegant visual brand aesthetic while upgrading to the conversion power of Shop Pay 1-click checkout, multi-location inventory, and advanced app integrations.
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
                  src="/images/replatforming/squarespace-hero-director.jpg"
                  alt="Creative director reviewing brand aesthetic and Shopify storefront performance"
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
                  src="/images/replatforming/squarespace-team-designers.jpg"
                  alt="FactoryJet senior e-commerce designers reviewing Shopify theme components and typography"
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
                  We specialize in high-touch migrations from Squarespace to Shopify. We preserve your visual brand identity while unlocking higher checkout conversion, multi-location inventory fulfillment, and access to thousands of enterprise marketing apps.
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

        {/* ── 04. WHY LEAVE SQUARESPACE (RITOVEX NUMBERED SERVICES ROWS) ── */}
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
                Why Growing Brands Are Leaving Squarespace
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Squarespace is great for portfolios, but restrictive for serious commerce. Here is what changes when you upgrade to Shopify:
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
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#8E8E9F', letterSpacing: '0.08em' }}>The Squarespace Limit:</span>
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
            badge="// SQUARESPACE TO SHOPIFY ARCHITECTURE BLUEPRINT"
            title="Enterprise Architecture: Replatforming Squarespace to Shopify"
            subtitle="Upgrade your visual brand into a high-converting Shopify 2.0 store with Shop Pay 1-click checkout, multi-location inventory, and zero cutover downtime."
            legacySource="Squarespace CMS"
            targetStack="Shopify Modern Cloud Architecture"
            ctaLabel="Schedule Squarespace Migration Scoping"
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
                Squarespace vs. Shopify
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
                    <th style={{ color: '#141414', fontWeight: 700 }}>Squarespace</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>Shopify Cloud Platform</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>What It Means for Your Brand</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Checkout Conversion</td>
                    <td>Standard multi-step checkout with high mobile drop-off</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Shop Pay 1-click accelerated checkout</td>
                    <td>Up to 50% higher checkout completion across 150M+ saved shoppers</td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>App &amp; Partner Ecosystem</td>
                    <td>Very small extensions library with limited integrations</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>10,000+ top-tier enterprise apps &amp; integrations</td>
                    <td>Seamless compatibility with Klaviyo, Gorgias, Yotpo, and Recharge</td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Inventory Management</td>
                    <td>Single inventory location with basic stock tracking</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Native multi-location inventory &amp; 3PL warehouse sync</td>
                    <td>Fulfill from multiple distribution centers and retail stores effortlessly</td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Omnichannel &amp; POS</td>
                    <td>Limited in-person POS capabilities</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Native Shopify POS for retail stores &amp; pop-ups</td>
                    <td>Unified customer profiles, gift cards, and inventory across all channels</td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Global Selling</td>
                    <td>Basic currency display with rigid tax rules</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Shopify Markets with localized pricing &amp; duties</td>
                    <td>Sell internationally with local currencies, languages, and checkout</td>
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
                  We execute every phase with strict engineering standards: visual parity is verified before build, and 1-to-1 redirect mapping is tested before DNS switch.
                </p>
                <ModalCTAButton label="Start Your Squarespace Audit" region="us" btnVariant="primary-dark" />
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
                Real feedback from boutique brand founders and creative directors who moved from Squarespace to Shopify:
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              
              {/* Testimonial 1 */}
              <div style={{ background: '#F6F6F9', border: '1px solid #EBEBEF', borderRadius: '16px', padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ color: '#F59E0B', fontSize: '16px', marginBottom: '16px' }}>★★★★★</div>
                  <p style={{ fontSize: '15px', color: '#141414', lineHeight: 1.6, fontStyle: 'italic', margin: 0 }}>
                    &ldquo;We love design aesthetics and were worried Shopify would feel cookie-cutter. FactoryJet built a custom theme that looks even better than our Squarespace site, while our conversion rate increased 38% with Shop Pay.&rdquo;
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '24px', paddingTop: '18px', borderTop: '1px solid #E6E6EC' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#E6E6EC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#141414' }}>
                    CE
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#141414' }}>Claire Edwards</div>
                    <div style={{ fontSize: '12px', color: '#6E6E80' }}>Founder &amp; Creative Director, Studio Ceramic Goods</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div style={{ background: '#F6F6F9', border: '1px solid #EBEBEF', borderRadius: '16px', padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ color: '#F59E0B', fontSize: '16px', marginBottom: '16px' }}>★★★★★</div>
                  <p style={{ fontSize: '15px', color: '#141414', lineHeight: 1.6, fontStyle: 'italic', margin: 0 }}>
                    &ldquo;Our inventory was impossible to manage on Squarespace once we opened a retail store. FactoryJet set up Shopify POS and multi-warehouse sync. Everything is now synchronized in real time.&rdquo;
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '24px', paddingTop: '18px', borderTop: '1px solid #E6E6EC' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#E6E6EC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#141414' }}>
                    BH
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#141414' }}>Benjamin Hayes</div>
                    <div style={{ fontSize: '12px', color: '#6E6E80' }}>Co-Founder, Artisanal Apparel &amp; Accessories</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div style={{ background: '#F6F6F9', border: '1px solid #EBEBEF', borderRadius: '16px', padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ color: '#F59E0B', fontSize: '16px', marginBottom: '16px' }}>★★★★★</div>
                  <p style={{ fontSize: '15px', color: '#141414', lineHeight: 1.6, fontStyle: 'italic', margin: 0 }}>
                    &ldquo;Every single blog post and customer review transferred over with zero broken links. We never lost a single spot on Google, and our revenue hit record highs within the first 60 days.&rdquo;
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '24px', paddingTop: '18px', borderTop: '1px solid #E6E6EC' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#E6E6EC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#141414' }}>
                    NK
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#141414' }}>Nina Kowalski</div>
                    <div style={{ fontSize: '12px', color: '#6E6E80' }}>Managing Director, Plant-Based Wellness Products</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 09. SEARCHABLE CATEGORIZED FAQ SECTION ── */}
        <FAQ
          eyebrow="MIGRATION INTELLIGENCE"
          headline="Frequently Asked Questions About Moving Off Squarespace"
          lead="Everything brand founders, creative directors, and operations managers ask when migrating to Shopify:"
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
              Ready to Upgrade Squarespace to Shopify?
            </h2>
            
            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Send us your Squarespace site URL. We will audit your current layout, product catalog, and delivery workflows to provide a detailed technical roadmap with a guaranteed fixed quote.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <ModalCTAButton label="Schedule Squarespace Discovery Call" region="us" btnVariant="primary-light" />
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}

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
import ReplatformingScopeEstimator from '@/components/commerce/ReplatformingScopeEstimator';
import ZeroDowntimeMigrationMatrix from '@/components/commerce/ZeroDowntimeMigrationMatrix';
import SeoLinkEquityChecklist from '@/components/commerce/SeoLinkEquityChecklist';
import AnswerFirstDefinition from '@/components/commerce/AnswerFirstDefinition';
import '@/components/v2/PlatformPage.css';

const PAGE_MODIFIED = '2026-08-24';

export const metadata: Metadata = {
  title: 'BigCommerce to Shopify Plus Migration | FactoryJet',
  description:
    'Migrate BigCommerce to Shopify Plus with zero data loss. We transfer product option sets, customer history, and 301 redirects. Get a fixed quote.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'BigCommerce to Shopify Plus Migration | FactoryJet',
    description:
      'Migrate BigCommerce to Shopify Plus with zero data loss. Transfer product option sets, customer history, and 301 redirects.',
    url: 'https://factoryjet.com/replatforming/bigcommerce-to-shopify-plus',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'BigCommerce to Shopify Plus Migration Services' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BigCommerce to Shopify Plus Migration | FactoryJet',
    description: 'Migrate BigCommerce to Shopify Plus with zero downtime or SEO loss.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/replatforming/bigcommerce-to-shopify-plus' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const FAQ_CATEGORIES = [
  { key: 'basics', label: 'Why Move to Shopify Plus' },
  { key: 'data', label: 'Catalog & Variant Mapping' },
  { key: 'checkout', label: 'Checkout & Conversion' },
  { key: 'cost', label: 'Costs & Timeline' },
  { key: 'seo', label: 'SEO & 301 Redirects' },
  { key: 'b2b', label: 'B2B & Multi-Store' },
];

const FAQ_ITEMS = [
  {
    category: 'basics',
    question: 'Why are growing brands moving from BigCommerce to Shopify Plus?',
    answer:
      'Brands migrate to Shopify Plus primarily for four reasons: 1) Dramatically higher conversion rates powered by 1-click Shop Pay checkout, 2) Access to the world’s largest e-commerce app and partner ecosystem, 3) Unified multi-channel commerce with native Shopify POS for retail stores, and 4) Far greater developer and theme customizability via modern Shopify Functions and Theme Store 2.0 sections.',
  },
  {
    category: 'basics',
    question: 'How long does a BigCommerce to Shopify Plus migration take?',
    answer:
      'A typical mid-market to enterprise BigCommerce migration takes between 4 to 8 weeks. This includes catalog and customer data auditing, custom theme development, third-party app replacement, ERP webhook integrations, complete 301 URL redirect mapping, and pre-launch quality assurance testing.',
  },
  {
    category: 'data',
    question: 'How do BigCommerce product option sets and modifier rules map to Shopify Plus?',
    answer:
      'BigCommerce uses complex option sets and rules for product variations. We map these into native Shopify variant options, metafield definitions, and combined listing structures. For products with extensive custom personalization fields, we use Shopify custom line-item properties.',
  },
  {
    category: 'data',
    question: 'Can historical customer accounts and order histories be migrated?',
    answer:
      'Yes. All historical customer profiles, saved delivery addresses, past order archives, and invoice records transfer over completely. Because password hashes cannot be exported between platforms, we set up automated, branded customer invite emails so buyers can activate their accounts instantly upon launch.',
  },
  {
    category: 'checkout',
    question: 'What conversion rate improvements do merchants see moving to Shop Pay?',
    answer:
      'Independent studies show that Shop Pay increases checkout conversion by up to 50% compared to standard guest checkouts, and converts 10% higher than other accelerated wallets. Over 150 million shoppers already have their billing and shipping details saved in Shop Pay, making mobile purchases virtually frictionless.',
  },
  {
    category: 'checkout',
    question: 'Can we customize our checkout on Shopify Plus?',
    answer:
      'Yes. Shopify Plus offers Checkout Extensibility, allowing full customization of the checkout experience using modular UI extensions, post-purchase upsells, custom delivery options, and sub-5ms Shopify Functions for complex business logic, all while remaining 100% upgrade-safe.',
  },
  {
    category: 'cost',
    question: 'How much does a BigCommerce to Shopify Plus migration cost?',
    answer:
      'Migration projects typically range from $15,000 to $45,000 depending on SKU volume, custom design requirements, third-party app complexity, and ERP integrations. We provide a guaranteed fixed-price quote before any development begins.',
  },
  {
    category: 'cost',
    question: 'How do BigCommerce GMV trailing revenue tiers compare to Shopify Plus fees?',
    answer:
      'BigCommerce automatically pushes merchants into more expensive enterprise tiers as their revenue grows, charging higher trailing annual fees. Shopify Plus offers transparent, predictable enterprise pricing with clear tier structures and lower credit card processing rates with Shop Pay.',
  },
  {
    category: 'seo',
    question: 'Will we lose our search engine rankings or organic revenue during migration?',
    answer:
      'Not with our migration protocol. BigCommerce and Shopify use different URL structures. We execute a 100% crawl of your indexed URLs, build an exhaustive 1-to-1 redirect map, and implement single-hop 301 redirects to ensure every search ranking and external backlink transfers with zero equity loss.',
  },
  {
    category: 'seo',
    question: 'What happens to BigCommerce blog posts, CMS pages, and brand content?',
    answer:
      'We migrate all historical blog articles, author records, CMS pages, and landing page content into Shopify Blog and Pages, preserving existing metadata, header tags, image alt tags, and JSON-LD structured data for continuous SEO visibility.',
  },
  {
    category: 'b2b',
    question: 'Can BigCommerce B2B Edition features move to Shopify Plus B2B?',
    answer:
      'Yes. BigCommerce B2B features like custom price lists, customer company hierarchies, Net payment terms, and volume discount rules map directly to Shopify Plus B2B. Both wholesale (B2B) and direct-to-consumer (DTC) channels can be operated seamlessly from a single unified Shopify admin.',
  },
  {
    category: 'b2b',
    question: 'Can we manage multiple international regional storefronts from one account?',
    answer:
      'Yes. Shopify Markets and Expansion Stores allow you to localize currencies, languages, localized domain subfolders, and regional pricing catalogs across global territories effortlessly from a centralized dashboard.',
  },
];

const STAT_CARDS = [
  { num: '50%', title: 'Higher Checkout Speed', desc: 'Shop Pay 1-click accelerated checkout dramatically reduces cart abandonment on mobile.', icon: '⚡' },
  { num: '10,000+', title: 'Ecosystem Apps', desc: 'Plug into the world’s most advanced e-commerce tools for marketing, reviews, and loyalty.', icon: '🛍️' },
  { num: '1 Unified', title: 'Omnichannel Admin', desc: 'Manage online D2C, B2B wholesale, and physical retail POS from a single dashboard.', icon: '🔄' },
  { num: '100%', title: 'SEO Equity Preserved', desc: 'Comprehensive 1-to-1 URL crawl and single-hop 301 redirect mapping prevents traffic loss.', icon: '🛡️' },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Ending the Frustration of Stagnant App & Partner Ecosystems',
    problem: 'BigCommerce has a limited third-party app marketplace, forcing merchants to build expensive custom workarounds for modern marketing tools.',
    solution: 'Instant access to top-tier enterprise apps like Klaviyo, Gorgias, Yotpo, Triple Whale, Recharge, and native social commerce integrations.',
  },
  {
    num: '02',
    title: 'Unlocking the Conversion Power of Shop Pay Accelerated Checkout',
    problem: 'Standard multi-step checkouts on BigCommerce suffer from friction and high mobile cart abandonment rates.',
    solution: 'Shop Pay allows over 150 million pre-authenticated shoppers to checkout in a single click, driving immediate conversion rate lifts.',
  },
  {
    num: '03',
    title: 'Replacing Fragile Stencil Templates with Modern Section Architecture',
    problem: 'Customizing BigCommerce Stencil themes requires developer intervention for basic merchandising and promotional updates.',
    solution: 'Shopify Online Store 2.0 visual drag-and-drop sections allow marketing teams to create dynamic landing pages and product promotions in minutes.',
  },
  {
    num: '04',
    title: 'Unifying Retail Stores & POS Without Fragmented Third-Party Tools',
    problem: 'Connecting physical retail POS systems to BigCommerce requires complex third-party synchronization tools that often desync.',
    solution: 'Native Shopify POS integrates real-time inventory, customer profiles, and loyalty programs across online and retail store locations.',
  },
];

const PARTNERS = [
  'Shopify Plus Partner',
  'Shop Pay Integration',
  'Klaviyo Master Partner',
  'Gorgias Premier',
  'Yotpo Enterprise',
  'Recharge Subscriptions',
  'NetSuite ERP Connector',
  'Celigo Integrator',
];

const WORKING_STEPS = [
  {
    n: '01',
    t: 'Comprehensive Catalog & App Audit',
    d: 'We catalog every BigCommerce product option set, custom field, and third-party app to determine the optimal Shopify Plus architecture.',
    icon: '🔍',
  },
  {
    n: '02',
    t: 'Data Migration & Metafield Normalization',
    d: 'We extract and format products, variants, customer records, order histories, and B2B pricing tiers into native Shopify metafields.',
    icon: '📊',
  },
  {
    n: '03',
    t: 'High-Converting Storefront Build',
    d: 'We design and engineer a custom Shopify Plus theme optimized for sub-second page loads, mobile responsiveness, and high conversion.',
    icon: '💻',
  },
  {
    n: '04',
    t: '1-to-1 SEO Crawl & Redirect Matrix',
    d: 'We crawl 100% of your indexed BigCommerce URLs to build single-hop 301 redirects, protecting all domain authority and Google rankings.',
    icon: '🔗',
  },
  {
    n: '05',
    t: 'Delta Sync & Zero-Downtime Cutover',
    d: 'We run a final delta sync of latest customer accounts and transactions, switch DNS during off-peak hours, and verify live payment processing.',
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
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    jobTitle: 'Chief Technical Architect',
    url: 'https://factoryjet.com/about',
    sameAs: [
      'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
      'https://github.com/factoryjet-tech',
    ],
  },
  name: 'BigCommerce to Shopify Plus Migration Services',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  serviceType: 'E-Commerce Replatforming & Migration',
  description:
    'End-to-end enterprise migration from BigCommerce to Shopify Plus with complete data parity, app replacements, and zero ranking loss.',
  areaServed: ['US', 'GB', 'CA', 'AU'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Replatforming Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'BigCommerce to Shopify Plus Migration',
        },
      },
    ],
  },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'BigCommerce to Shopify Plus Migration Services | FactoryJet',
  description: 'Complete engineering blueprint for migrating BigCommerce stores to Shopify Plus.',
  url: 'https://factoryjet.com/replatforming/bigcommerce-to-shopify-plus',
  dateModified: PAGE_MODIFIED,
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    jobTitle: 'Chief Technical Architect',
    url: 'https://factoryjet.com/about',
    sameAs: [
      'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
      'https://github.com/factoryjet-tech',
    ],
  },
};

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://factoryjet.com/#organization',
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
    { '@type': 'ListItem', position: 3, name: 'BigCommerce to Shopify Plus', item: 'https://factoryjet.com/replatforming/bigcommerce-to-shopify-plus' },
  ],
};


const EVALUATION_CRITERIA = [
  {
    label: 'Technical Execution Model',
    factoryjet: 'Senior commerce systems architects write custom ETL scripts and Shopify Functions with 100% full IP ownership.',
    traditional: 'Junior agency generalists relying on generic third-party migration apps that cause database bloat.',
  },
  {
    label: 'SEO & 301 URL Preservation',
    factoryjet: '1-to-1 exact path mapping of 100% legacy URLs with single-hop 301 redirects and schema retention.',
    traditional: 'Wildcard home-page redirects that result in massive Google ranking and organic revenue drops.',
  },
  {
    label: 'ERP & Warehouse Synchronization',
    factoryjet: 'Direct GraphQL webhook pipeline syncing NetSuite, SAP, and Manhattan WMS in under 150ms.',
    traditional: 'Batch CSV file uploads or slow third-party middleware with frequent inventory sync failures.',
  },
  {
    label: 'Commercial Terms & Accountability',
    factoryjet: 'Transparent fixed-price milestone scope with guaranteed zero-downtime cutover SLA.',
    traditional: 'Open-ended hourly retainer billing with frequent scope creep and unexpected overages.',
  },
];

export default function BigCommerceToShopifyPage() {
  return (
    <>
      <script id="bigcommerce-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="bigcommerce-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="bigcommerce-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="bigcommerce-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="bigcommerce-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

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
                  <span>BigCommerce to Shopify Plus Migration</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  Zero-Downtime Migration from BigCommerce to Shopify Plus
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  Escape app ecosystem limitations and clunky checkouts. We map your option sets, transfer customer order history, and unlock the conversion power of Shop Pay with zero SEO ranking loss.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Get a Replatforming Audit" region="us" btnVariant="primary-dark" />
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
                  src="/images/replatforming/bigcommerce-hero-vp.jpg"
                  alt="VP of E-Commerce reviewing conversion analytics and Shopify Plus migration roadmap"
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
              <div className="rv-ticker-label">Trusted Enterprise Technology &amp; ERP Connectors</div>
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
                  src="/images/replatforming/bigcommerce-team-devs.jpg"
                  alt="FactoryJet senior development team auditing catalog attributes and theme templates"
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
                  We specialize in frictionless migrations from BigCommerce to Shopify Plus. We transfer your complex catalog, customer accounts, and order records while giving your marketing team total creative control and higher checkout conversion.
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

            {/* Answer-First Definitions for AI Overviews & Search Engines */}
            <div style={{ marginTop: '56px', display: 'grid', gap: '18px' }}>
              <AnswerFirstDefinition
                term="BigCommerce to Shopify Plus Data Migration"
                definition="Migrating from BigCommerce to Shopify Plus entails extracting catalog option sets, custom modifier rules, buyer address books, historical orders, and gift card balances via the BigCommerce V3 REST API, normalizing the data into Shopify product metafields and variant records, and preserving complete order history."
                keyTakeaways={[
                  'Translates complex BigCommerce Option Sets and Modifiers into Shopify Variant Matrices and Metafields',
                  'Maintains historical customer Lifetime Value (LTV) and tax receipt continuity without data loss',
                  'Pre-validates checkout tax jurisdictions and carrier shipping rules in parallel staging environments',
                ]}
                citationSource="FactoryJet BigCommerce to Shopify Plus Migration Standard (2026)"
              />
              <AnswerFirstDefinition
                term="BigCommerce Custom URL 1:1 Redirect Mapping"
                definition="BigCommerce generates distinct URL structures (e.g. /products/item-name or custom category paths) that differ from Shopify's native /products/ and /collections/ patterns. 1-to-1 301 redirect mapping ensures every legacy BigCommerce URL route points directly to its exact Shopify equivalent without redirect loops or 404 errors."
                keyTakeaways={[
                  'Captures 100% of historical indexable BigCommerce product, category, and blog URLs',
                  'Prevents organic search traffic drop-offs by preserving Google page authority and keyword rankings',
                  'Eliminates soft 404 crawl errors in Google Search Console post-launch',
                ]}
                citationSource="FactoryJet SEO Preservation & URL Routing Standard (2026)"
              />
              <AnswerFirstDefinition
                term="Shop Pay Conversion Uplift Over BigCommerce Checkout"
                definition="Shop Pay is Shopify's 1-click accelerated checkout network with over 150 million pre-authenticated consumers. Compared to standard BigCommerce multi-step checkout forms, Shop Pay increases mobile checkout completion rates by up to 50% and reduces cart abandonment significantly."
                keyTakeaways={[
                  'Pre-fills shipping address, billing info, and credit cards for instant 1-click buying',
                  'Accelerates checkout transaction speed by up to 4x compared to legacy guest checkouts',
                  'Supports native Shop Pay Installments directly without third-party iframe friction',
                ]}
                citationSource="Shopify Enterprise Commerce Conversion Benchmark (2026)"
              />
            </div>
          </div>
        </section>

        {/* ── 04. WHY LEAVE BIGCOMMERCE (RITOVEX NUMBERED SERVICES ROWS) ── */}
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
                Why Leading Brands Are Leaving BigCommerce
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                BigCommerce limits your ecosystem and retail growth. Here is what happens when you upgrade to Shopify Plus:
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
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#8E8E9F', letterSpacing: '0.08em' }}>The BigCommerce Bottleneck:</span>
                      <p style={{ fontSize: '13.5px', color: '#494852', margin: '4px 0 0', lineHeight: 1.5 }}>{p.problem}</p>
                    </div>
                    <div>
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#FF5622', letterSpacing: '0.08em' }}>The Shopify Plus Fix:</span>
                      <p style={{ fontSize: '13.5px', color: '#141414', fontWeight: 600, margin: '4px 0 0', lineHeight: 1.5 }}>{p.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTERACTIVE REPLATFORMING SCOPE & TIMELINE ESTIMATOR ── */}
        <section className="pp-sec tint" id="replatforming-estimator">
          <div className="pp-wrap">
            <ReplatformingScopeEstimator
              source="bigcommerce_to_shopify_plus_page"
              defaultSource="bigcommerce"
              defaultTarget="shopify-plus"
            />
          </div>
        </section>

        {/* ── 05. THE ENTERPRISE ARCHITECTURE BLUEPRINT (AUTO-ROTATING TABS) ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: '48px 0 16px' }}>
          <div className="pp-wrap">
            <RegionalBenchmarkCard city="Enterprise Replatforming" vertical="replatforming" />
          </div>
        </section>

        <div id="architecture-blueprint">
          <EnterpriseArchitectureBlueprint
            badge="// BIGCOMMERCE TO SHOPIFY PLUS BLUEPRINT"
            title="Enterprise Architecture: Replatforming BigCommerce to Shopify Plus"
            subtitle="Upgrade to the world’s highest-converting 1-click checkout ecosystem, modern Theme Store 2.0 sections, and unified omnichannel POS with zero cutover downtime."
            legacySource="BigCommerce Stencil"
            targetStack="Shopify Plus Modern Architecture"
            ctaLabel="Schedule BigCommerce Migration Review"
            region="us"
          />
        </div>

        {/* ── ZERO-DOWNTIME DATA MIGRATION FRAMEWORK MATRIX ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="pp-wrap">
            <ZeroDowntimeMigrationMatrix />
          </div>
        </section>

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
                BigCommerce vs. Shopify Plus
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Compare key operational, conversion, and architectural differences side by side:
              </p>
            </div>

            <div style={{ overflowX: 'auto', borderRadius: '14px', border: '1px solid #E6E6EC' }}>
              <table className="pp-table" style={{ margin: 0, width: '100%', background: '#FFFFFF' }}>
                <thead style={{ background: '#F6F6F9' }}>
                  <tr>
                    <th style={{ color: '#141414', fontWeight: 700 }}>Feature / Dimension</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>BigCommerce</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>Shopify Plus Enterprise</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>What It Means for Your Brand</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Checkout Experience</td>
                    <td>Standard multi-step checkout with high mobile drop-off</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Shop Pay 1-click accelerated checkout</td>
                    <td>Up to 50% higher checkout completion across 150M+ saved shoppers</td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>App &amp; Partner Ecosystem</td>
                    <td>Limited third-party marketplace and smaller agency ecosystem</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>10,000+ top-tier enterprise apps &amp; integrations</td>
                    <td>Instant compatibility with all leading marketing, loyalty, and analytics tools</td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Theme Customization</td>
                    <td>Legacy Stencil framework requiring developer builds</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Visual Online Store 2.0 drag-and-drop sections</td>
                    <td>Marketing launches new campaigns same-day with zero developer dependency</td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Omnichannel &amp; POS</td>
                    <td>Fragmented third-party POS connectors prone to stock desync</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Native unified Shopify POS for physical retail</td>
                    <td>Seamless unified customer profiles, inventory, and omni returns</td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Pricing Model</td>
                    <td>Automatic GMV threshold penalties and trailing fees</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Predictable flat enterprise tier with lower card rates</td>
                    <td>Scale revenue without arbitrary platform plan penalization</td>
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
                  We execute every phase with strict engineering rigor: data parity is verified before templates are built, and 1-to-1 redirect mapping is tested before DNS switch.
                </p>
                <ModalCTAButton label="Start Your BigCommerce Audit" region="us" btnVariant="primary-dark" />
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
                <span>Verified Enterprise Feedback</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                What Enterprise Leaders Say About Our Engineering
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Real feedback from brand founders and marketing leaders who moved off BigCommerce onto Shopify Plus:
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              
              {/* Testimonial 1 */}
              <div style={{ background: '#F6F6F9', border: '1px solid #EBEBEF', borderRadius: '16px', padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ color: '#F59E0B', fontSize: '16px', marginBottom: '16px' }}>★★★★★</div>
                  <p style={{ fontSize: '15px', color: '#141414', lineHeight: 1.6, fontStyle: 'italic', margin: 0 }}>
                    &ldquo;Moving from BigCommerce to Shopify Plus doubled our mobile conversion rate within the first 30 days. Shop Pay is an absolute game-changer, and FactoryJet handled the migration seamlessly.&rdquo;
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '24px', paddingTop: '18px', borderTop: '1px solid #E6E6EC' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#E6E6EC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#141414' }}>
                    CL
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#141414' }}>Courtney Lewis</div>
                    <div style={{ fontSize: '12px', color: '#6E6E80' }}>Co-Founder, Luxury Beauty &amp; Skincare</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div style={{ background: '#F6F6F9', border: '1px solid #EBEBEF', borderRadius: '16px', padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ color: '#F59E0B', fontSize: '16px', marginBottom: '16px' }}>★★★★★</div>
                  <p style={{ fontSize: '15px', color: '#141414', lineHeight: 1.6, fontStyle: 'italic', margin: 0 }}>
                    &ldquo;We had over 25,000 product options and variants. FactoryJet audited the data, normalized it into clean Shopify metafields, and redirected every single indexed URL with zero 404s.&rdquo;
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '24px', paddingTop: '18px', borderTop: '1px solid #E6E6EC' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#E6E6EC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#141414' }}>
                    TG
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#141414' }}>Thomas Gallagher</div>
                    <div style={{ fontSize: '12px', color: '#6E6E80' }}>Head of E-Commerce, Outdoor Gear &amp; Apparel</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div style={{ background: '#F6F6F9', border: '1px solid #EBEBEF', borderRadius: '16px', padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ color: '#F59E0B', fontSize: '16px', marginBottom: '16px' }}>★★★★★</div>
                  <p style={{ fontSize: '15px', color: '#141414', lineHeight: 1.6, fontStyle: 'italic', margin: 0 }}>
                    &ldquo;Our retail stores now run on Shopify POS, synchronized with our online store. Customer profiles and omni gift cards work everywhere. We could never achieve this on BigCommerce.&rdquo;
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '24px', paddingTop: '18px', borderTop: '1px solid #E6E6EC' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#E6E6EC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#141414' }}>
                    MW
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#141414' }}>Megan Walsh</div>
                    <div style={{ fontSize: '12px', color: '#6E6E80' }}>Director of Retail Operations, Contemporary Fashion</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 09. SEARCHABLE CATEGORIZED FAQ SECTION ── */}
        
        {/* ── AGENCY EVALUATION FRAMEWORK TABLE ── */}
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
                Evaluating Migration Partners: What to Ask
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Compare senior engineering replatforming against traditional design agency retainers before you commit:
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

        {/* ── SEO LINK EQUITY PRESERVATION PROTOCOL & CHECKLIST ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="pp-wrap">
            <SeoLinkEquityChecklist sourcePlatform="bigcommerce" />
          </div>
        </section>

        <CommerceRoiCalculator city="Enterprise Store" region="us" />

        <FAQ
          eyebrow="MIGRATION INTELLIGENCE"
          headline="Frequently Asked Questions About Moving Off BigCommerce"
          lead="Everything marketing leaders, operations directors, and founders ask when migrating to Shopify Plus:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#F6F6F9]"
        />

        {/* ── VERIFIED AUTHOR ENTITY CARD ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', padding: '48px 0', borderTop: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <AuthorCard />
          </div>
        </section>

        {/* ── 10. FINAL EXECUTIVE REPLATFORMING CTA ── */}
        <section className="pp-sec" style={{ backgroundColor: '#141414', color: '#FFFFFF', padding: 'clamp(64px, 10vh, 112px) 0', textAlign: 'center' }}>
          <div className="pp-wrap" style={{ maxWidth: '800px' }}>
            <div className="rv-badge" style={{ background: '#26262B', color: '#FF5622', borderColor: '#3E3E48', marginBottom: '20px' }}>
              <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
              </svg>
              <span>Fixed-Price Enterprise Replatforming</span>
            </div>
            
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.12, margin: '0 0 20px' }}>
              Ready to Upgrade BigCommerce to Shopify Plus?
            </h2>
            
            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Send us your store URL, SKU volume, and third-party app list. We will audit your current architecture and deliver a detailed technical roadmap with a guaranteed fixed quote.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <ModalCTAButton label="Schedule BigCommerce Discovery Call" region="us" btnVariant="primary-light" />
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}

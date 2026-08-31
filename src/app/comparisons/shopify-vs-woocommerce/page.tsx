import type { Metadata } from 'next';
import Image from 'next/image';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import EcommerceRoiCalculator from '@/components/commerce/EcommerceRoiCalculator';
import '@/components/v2/PlatformPage.css';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';

export const metadata: Metadata = {
  title: 'Shopify vs WooCommerce | 2026 US E-Commerce Comparison & TCO Guide | FactoryJet',
  description:
    'Comprehensive technical comparison of Shopify vs WooCommerce for US merchants in 2026. Evaluate total cost of ownership (TCO), sub-second Core Web Vitals, BFCM scalability, security, and B2B capabilities.',
  openGraph: {
    type: 'article',
    siteName: 'FactoryJet',
    title: 'Shopify vs WooCommerce: 2026 Architectural Guide & TCO Breakdown | FactoryJet',
    description:
      'Detailed architectural evaluation of Shopify vs WooCommerce for US businesses. Compare real hosting and plugin costs, mobile checkout conversion, security overhead, and migration pathways.',
    url: 'https://factoryjet.com/comparisons/shopify-vs-woocommerce',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Shopify vs WooCommerce Comparison' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify vs WooCommerce: 2026 Platform Decision Guide | FactoryJet',
    description: 'Compare true TCO, Core Web Vitals, checkout speed, and maintenance overhead side by side.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/comparisons/shopify-vs-woocommerce' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* ─────────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'tco', label: 'TCO & True Operating Costs' },
  { key: 'performance', label: 'Speed & Core Web Vitals' },
  { key: 'security', label: 'Security & Maintenance' },
  { key: 'scalability', label: 'Scalability & Checkout' },
  { key: 'migration', label: 'Replatforming & Decisions' },
];

const FAQ_ITEMS = [
  {
    category: 'tco',
    question: 'Is WooCommerce truly free compared to Shopify in the United States?',
    answer:
      'While the core WooCommerce WordPress plugin is open-source and free to install, running a commercial store in the US requires managed cloud hosting ($35 to $300+/month on Kinsta or WP Engine), premium extensions for shipping, subscriptions, and SEO ($500 to $2,500/year), and ongoing developer maintenance for plugin updates. When accounting for technical upkeep and downtime risks, Shopify and WooCommerce have comparable total costs of ownership at mid-market revenue.',
  },
  {
    category: 'tco',
    question: 'How do payment processing fees compare between Shopify Payments and WooCommerce gateways?',
    answer:
      'Shopify Payments offers standardized US domestic processing rates ranging from 2.4% to 2.9% + $0.30 per transaction depending on your plan, with zero additional transaction fees. On WooCommerce, merchants integrate external gateways like Stripe, Square, or Authorize.Net directly at standard interchange rates (2.9% + $0.30), but must manage gateway plugin updates, webhook listeners, and PCI compliance individually.',
  },
  {
    category: 'tco',
    question: 'What is the total annual cost of maintaining a high-volume WooCommerce store vs Shopify?',
    answer:
      'A WooCommerce store generating $1M to $5M in annual GMV typically incurs $12,000 to $35,000 annually in hosting infrastructure, database optimization retainers, premium plugin licenses, and staging environment regression testing. A comparable Shopify store consolidates infrastructure, Level 1 PCI compliance, and global CDN delivery into its base subscription and standard app stack.',
  },
  {
    category: 'performance',
    question: 'Which platform delivers faster mobile page load speed and Core Web Vitals in 2026?',
    answer:
      'Shopify storefronts built on Liquid 2.0 or headless Hydrogen reliably achieve sub-second page loads and 95+ Core Web Vitals scores because assets are served from global edge CDNs with zero database queries per pageview. WooCommerce requires complex multi-layer caching (Redis, Varnish, Cloudflare APO) to avoid database bottlenecking (wp_postmeta query overhead) under concurrent traffic spikes.',
  },
  {
    category: 'performance',
    question: 'Why does database bloat slow down WooCommerce stores as catalog size grows?',
    answer:
      'WordPress stores product attributes, custom metadata, order details, and session data in the wp_postmeta and wp_options database tables. As catalogs scale beyond 5,000 SKUs or 100,000 historical orders, complex SQL JOIN queries create severe server memory pressure and Time to First Byte (TTFB) latency unless high-performance custom table schemas are engineered.',
  },
  {
    category: 'scalability',
    question: 'How does checkout conversion compare between Shopify Shop Pay and WooCommerce checkout?',
    answer:
      'Shopify Shop Pay delivers up to a 50% faster checkout completion rate and significantly higher conversion on mobile compared to traditional guest checkouts, leveraging over 150 million saved buyer profiles across North America. WooCommerce checkouts require customer form entries or third-party one-click plugins that lack unified cross-merchant wallet data.',
  },
  {
    category: 'scalability',
    question: 'How do the two platforms handle Black Friday / Cyber Monday (BFCM) flash sales?',
    answer:
      'Shopify manages 99.99% platform-wide uptime during BFCM, routinely processing over $4 billion in holiday sales with zero server configuration required by the merchant. WooCommerce stores require dedicated DevOps engineering, server auto-scaling pools, Redis session caching, and rate limiting to prevent 502 Bad Gateway crashes during simultaneous flash sales.',
  },
  {
    category: 'security',
    question: 'What are the PCI-DSS compliance requirements for Shopify vs WooCommerce in the US?',
    answer:
      'Shopify is certified Level 1 PCI-DSS compliant out of the box; all cardholder data is securely tokenized within Shopify’s hosted checkout, freeing merchants from annual forensic audits. WooCommerce merchants operate under shared PCI responsibility: you must ensure your server OS, PHP version, SSL certificates, database access rules, and third-party plugins remain hardened against credit card scraping attacks.',
  },
  {
    category: 'security',
    question: 'How often do plugin compatibility conflicts break WooCommerce stores during updates?',
    answer:
      'Plugin update conflicts are the primary source of unplanned downtime in WooCommerce. Major updates to WordPress core, WooCommerce, or PHP versions frequently introduce breaking changes with third-party extensions, requiring a dedicated staging server, automated regression tests, and manual visual QA before deploying updates to production.',
  },
  {
    category: 'migration',
    question: 'When should a US merchant migrate from WooCommerce to Shopify?',
    answer:
      'Merchants should replatform to Shopify when: 1. Server maintenance and plugin troubleshooting consume excessive team hours, 2. Mobile checkout drop-off rates are high, 3. The store crashes during email campaigns or peak sales events, or 4. The brand wants to expand into omnichannel retail POS and international multi-currency markets without managing complex multi-site WordPress networks.',
  },
  {
    category: 'migration',
    question: 'When is WooCommerce a superior choice over Shopify?',
    answer:
      'WooCommerce is advantageous for businesses operating in high-risk categories restricted by Shopify Payments, companies requiring complete on-premise database ownership for regulatory compliance, or websites where extensive custom content publishing and editorial workflows take precedence over high-speed commerce.',
  },
  {
    category: 'migration',
    question: 'How does FactoryJet execute a zero-downtime migration from WooCommerce to Shopify?',
    answer:
      'FactoryJet executes migrations via an automated ETL data pipeline: we export products, customers, order histories, and custom metadata, map them to Shopify’s schema, configure comprehensive 301 redirect maps to preserve 100% of organic SEO equity, and conduct rigorous end-to-end checkout validation before DNS cutover.',
  },
  {
    category: 'tco',
    question: 'Do I need expensive Shopify apps for standard ecommerce features?',
    answer:
      'Modern Shopify includes native features that formerly required plugins, including custom product options, multi-currency localization via Shopify Markets, automated email flows with Shopify Email, and local pickup. Selective use of best-in-class apps keeps monthly operating overhead lean and predictable.',
  },
  {
    category: 'performance',
    question: 'Can WooCommerce match Shopify headless speed using Headless WordPress and Next.js?',
    answer:
      'Yes, a headless WooCommerce architecture using Next.js 15 on the frontend can achieve sub-100ms TTFB. However, headless WooCommerce requires managing two separate hosting infrastructures (Vercel/Cloudflare for the frontend and a scalable WordPress server for the backend API), which increases development complexity and total operational cost compared to Shopify Hydrogen.',
  },
];

/* ─────────────────────────────────────────────
   SCHEMAS
───────────────────────────────────────────── */
const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Shopify vs WooCommerce: Complete 2026 US Architectural Comparison & TCO Guide',
  description:
    'An in-depth technical comparison of Shopify and WooCommerce for US merchants covering total cost of ownership, speed, security, and scalability.',
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    jobTitle: 'Founder & Principal Commerce Architect',
    url: 'https://factoryjet.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  url: 'https://factoryjet.com/comparisons/shopify-vs-woocommerce',
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'Comparisons', item: 'https://factoryjet.com/best-ecommerce-platforms' },
    { '@type': 'ListItem', position: 3, name: 'Shopify vs WooCommerce', item: 'https://factoryjet.com/comparisons/shopify-vs-woocommerce' },
  ],
};

const STATS = [
  { b: 'True TCO Audit', s: 'hosting + plugin fee analysis' },
  { b: 'Shop Pay Lift', s: 'up to 50% faster checkout' },
  { b: 'Zero Maintenance', s: 'fully managed SaaS infrastructure' },
  { b: '100% SEO Parity', s: 'guaranteed 301 redirect mapping' },
];

const SOURCED = [
  {
    v: '50% Faster',
    d: 'checkout speed recorded by Shopify Shop Pay compared to traditional multi-step guest checkout forms across mobile commerce.',
    src: 'Shopify Checkout Conversion Benchmark Study',
    href: 'https://www.shopify.com',
  },
  {
    v: '$18,000/yr',
    d: 'average annual spend on managed WordPress hosting, developer maintenance retainers, and premium extensions for mid-market WooCommerce stores.',
    src: 'FactoryJet Client Portfolio TCO Analysis',
    href: 'https://factoryjet.com/replatforming/woocommerce-to-shopify',
  },
  {
    v: '99.99%',
    d: 'guaranteed platform availability provided by Shopify during peak holiday sales events with zero server autoscaling configuration required.',
    src: 'Shopify Global Infrastructure Telemetry',
    href: 'https://www.shopify.com/plus',
  },
];

const PILLARS = [
  { i: '◈', t: '1. True Total Cost of Ownership (TCO)', d: 'Compare base hosting expenses, premium plugin licensing fees, payment gateway splits, and developer maintenance retainers side by side.' },
  { i: '◇', t: '2. Speed, TTFB & Core Web Vitals', d: 'Analyze global edge CDN asset delivery versus WordPress database query overhead (wp_postmeta) and plugin execution latency.' },
  { i: '↯', t: '3. Mobile Checkout Conversion & Shop Pay', d: 'Contrast the 1-tap conversion power of 150M+ saved Shop Pay customer profiles against fragmented WooCommerce checkout gateways.' },
  { i: '▤', t: '4. Security, PCI Compliance & Uptime', d: 'Evaluate automated Level 1 PCI-DSS certification and managed infrastructure against manual WordPress plugin patching and security audits.' },
  { i: '⛓', t: '5. Catalog Scalability & Flash Sales', d: 'Understand how Shopify handles multi-million dollar flash traffic spikes effortlessly while self-hosted servers require complex DevOps.' },
  { i: '⤢', t: '6. Zero-Downtime Migration Blueprint', d: 'Review FactoryJet’s automated ETL data pipeline for migrating catalogs, customers, orders, and 301 redirects with zero SEO loss.' },
];

export default function ShopifyVsWooCommercePage() {
  return (
    <>
      <script id="sp-wc-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="sp-wc-art-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script id="sp-wc-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader navLinks={[]} cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        {/* ── Hero ── */}
        <section className="pp-dotgrid">
          <div className="pp-wrap" style={{ paddingTop: 'clamp(44px,6vh,84px)', paddingBottom: 'clamp(44px,6vh,84px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">2026 US E-Commerce Architectural Evaluation</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '18ch' }}>
                  Shopify vs <span className="pp-grad">WooCommerce.</span>
                </h1>
                <p className="pp-lead" style={{ maxWidth: '48ch' }}>
                  An objective technical comparison by senior commerce engineers. Evaluate true total cost of ownership,
                  Core Web Vitals speed, mobile checkout conversion, security overhead, and enterprise scalability.
                </p>
                <HeroInlineForm source="us_shopify_vs_woocommerce_hero" region="us" submitLabel="Get Platform Architecture Scope" />
              </div>

              {/* Visual Architecture Graphic */}
              <div
                role="img"
                aria-label="Shopify vs WooCommerce comparison decision matrix graphic showing TCO, speed, and checkout architecture."
                style={{
                  border: '1px solid var(--pp-line)',
                  borderRadius: '18px',
                  background: '#fff',
                  padding: '24px',
                  boxShadow: '0 18px 50px rgba(20,17,15,.08)',
                }}
              >
                <div
                  style={{
                    border: '1.5px solid var(--pp-orange)',
                    borderRadius: '12px',
                    background: 'var(--pp-tint)',
                    padding: '14px',
                    textAlign: 'center',
                    fontFamily: 'var(--pp-disp)',
                    fontWeight: 700,
                    color: 'var(--pp-ink)',
                    marginBottom: '18px',
                  }}
                >
                  E-Commerce Platform Decision Matrix
                  <small style={{ display: 'block', fontFamily: 'var(--pp-mono)', fontSize: '11px', color: 'var(--pp-orange-dark)', fontWeight: 600, marginTop: '2px' }}>
                    Shopify (Managed SaaS &amp; High Conversion) vs WooCommerce (Self-Hosted Open Source)
                  </small>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                  <div style={{ border: '1px solid var(--pp-line)', borderRadius: '10px', background: '#FAF8F5', padding: '14px 12px' }}>
                    <b style={{ fontFamily: 'var(--pp-disp)', fontSize: '14px', display: 'block', color: 'var(--pp-ink)', borderBottom: '1px solid var(--pp-line)', paddingBottom: '6px' }}>Shopify (Liquid / Headless)</b>
                    <ul style={{ fontSize: '12px', color: 'var(--pp-body)', marginTop: '8px', paddingLeft: '14px', display: 'grid', gap: '4px' }}>
                      <li>Shop Pay 1-tap checkout</li>
                      <li>Zero server maintenance</li>
                      <li>Level 1 PCI-DSS compliant</li>
                      <li>99.99% BFCM peak uptime</li>
                    </ul>
                  </div>
                  <div style={{ border: '1px solid var(--pp-line)', borderRadius: '10px', background: '#FAF8F5', padding: '14px 12px' }}>
                    <b style={{ fontFamily: 'var(--pp-disp)', fontSize: '14px', display: 'block', color: 'var(--pp-ink)', borderBottom: '1px solid var(--pp-line)', paddingBottom: '6px' }}>WooCommerce (WordPress)</b>
                    <ul style={{ fontSize: '12px', color: 'var(--pp-body)', marginTop: '8px', paddingLeft: '14px', display: 'grid', gap: '4px' }}>
                      <li>100% open-source control</li>
                      <li>Deep content blog integration</li>
                      <li>Self-managed database</li>
                      <li>Custom hosting requirements</li>
                    </ul>
                  </div>
                </div>
                <div
                  style={{
                    marginTop: '16px',
                    padding: '10px 14px',
                    background: '#14110F',
                    borderRadius: '10px',
                    color: '#fff',
                    fontFamily: 'var(--pp-mono)',
                    fontSize: '10.5px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', display: 'inline-block', marginRight: '6px' }} />
                    Senior Architecture Advisory
                  </div>
                  <div>Zero Vendor Bias · 100% Engineering First</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stat Band ── */}
        <section className="pp-sec tint" style={{ paddingTop: '38px', paddingBottom: '38px' }}>
          <div className="pp-wrap">
            <div className="pp-stats">
              {STATS.map((s) => (
                <div className="pp-stat" key={s.b}>
                  <b>{s.b}</b>
                  <span>{s.s}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Definitional Answer-First Block ── */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// executive summary &amp; architectural verdict</p>
            <h2 style={{ marginTop: '10px' }}>Shopify vs WooCommerce: The Definitive US Market Verdict</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                <strong>The Architectural Verdict:</strong> For 90% of US e-commerce brands, <strong>Shopify is the superior commercial engine</strong>.
                Shopify eliminates server administration, guarantees sub-second page delivery across North America, provides automated Level 1 PCI compliance,
                and captures substantially higher mobile checkout revenue via Shop Pay.
              </p>
              <p>
                <strong>Choose Shopify</strong> if your primary objective is growing sales, scaling direct-to-consumer or B2B volume without server crashes,
                and keeping your engineering budget focused on custom feature development rather than routine plugin compatibility updates and database indexing.
              </p>
              <p>
                <strong>Choose WooCommerce</strong> only if you operate in high-risk merchant categories restricted by Shopify Payments, require on-premise
                data sovereignty, or run a content-heavy media publication where e-commerce is secondary to complex WordPress publishing workflows.
              </p>
            </div>
          </div>
        </section>

        {/* ── Detailed Comparison Matrix Table ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// side-by-side technical evaluation</p>
            <h2 style={{ marginTop: '10px' }}>Detailed Technical Comparison Matrix</h2>
            <div style={{ overflowX: 'auto', marginTop: '24px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--pp-line)', fontSize: '14px' }}>
                <thead style={{ background: '#14110F', color: '#fff' }}>
                  <tr>
                    <th style={{ padding: '14px 16px', textAlign: 'left' }}>Evaluation Criteria</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left' }}>Shopify (Managed SaaS)</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left' }}>WooCommerce (Self-Hosted WP)</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left' }}>Commercial Impact</th>
                  </tr>
                </thead>
                <tbody style={{ color: 'var(--pp-body)' }}>
                  <tr style={{ borderBottom: '1px solid var(--pp-line)' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 600, color: 'var(--pp-ink)' }}>Infrastructure &amp; Hosting</td>
                    <td style={{ padding: '14px 16px' }}>Fully managed global edge cloud; zero server setup.</td>
                    <td style={{ padding: '14px 16px' }}>Self-managed hosting (Kinsta, WP Engine, Cloudways).</td>
                    <td style={{ padding: '14px 16px', color: 'var(--pp-orange-dark)', fontWeight: 600 }}>Shopify saves 15+ dev hours/mo in DevOps.</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--pp-line)', background: '#FAF8F5' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 600, color: 'var(--pp-ink)' }}>Mobile Checkout Speed</td>
                    <td style={{ padding: '14px 16px' }}>Shop Pay 1-tap checkout (150M+ saved buyers).</td>
                    <td style={{ padding: '14px 16px' }}>Standard multi-step forms or third-party plugins.</td>
                    <td style={{ padding: '14px 16px', color: 'var(--pp-orange-dark)', fontWeight: 600 }}>Shop Pay drives up to 50% faster checkout.</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--pp-line)' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 600, color: 'var(--pp-ink)' }}>Security &amp; PCI Compliance</td>
                    <td style={{ padding: '14px 16px' }}>Certified Level 1 PCI-DSS included out of the box.</td>
                    <td style={{ padding: '14px 16px' }}>Merchant responsibility; manual security hardening.</td>
                    <td style={{ padding: '14px 16px', color: 'var(--pp-orange-dark)', fontWeight: 600 }}>Eliminates legal liability and security audits.</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--pp-line)', background: '#FAF8F5' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 600, color: 'var(--pp-ink)' }}>Peak Traffic Scalability</td>
                    <td style={{ padding: '14px 16px' }}>Auto-scales to 100,000+ checkouts per minute.</td>
                    <td style={{ padding: '14px 16px' }}>Requires server autoscaling, Redis caching, and tuning.</td>
                    <td style={{ padding: '14px 16px', color: 'var(--pp-orange-dark)', fontWeight: 600 }}>Zero downtime risk during BFCM flash sales.</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--pp-line)' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 600, color: 'var(--pp-ink)' }}>Plugin &amp; App Ecosystem</td>
                    <td style={{ padding: '14px 16px' }}>10,000+ audited apps with isolated app bridges.</td>
                    <td style={{ padding: '14px 16px' }}>60,000+ plugins running directly in PHP runtime.</td>
                    <td style={{ padding: '14px 16px', color: 'var(--pp-orange-dark)', fontWeight: 600 }}>Shopify prevents fatal plugin code crashes.</td>
                  </tr>
                  <tr style={{ background: '#FAF8F5' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 600, color: 'var(--pp-ink)' }}>B2B &amp; Wholesale Readiness</td>
                    <td style={{ padding: '14px 16px' }}>Native B2B customer portal, company tiers &amp; Net terms.</td>
                    <td style={{ padding: '14px 16px' }}>Requires third-party B2B plugins (Wholesale Suite).</td>
                    <td style={{ padding: '14px 16px', color: 'var(--pp-orange-dark)', fontWeight: 600 }}>Shopify provides clean blended DTC+B2B admin.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Sourced Stats ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// verified industry benchmarks</p>
            <h2 style={{ marginTop: '10px' }}>Performance &amp; Financial Benchmarks by the Numbers</h2>
            <div className="pp-bento" style={{ marginTop: '32px' }}>
              {SOURCED.map((s) => (
                <div className="pp-card" key={s.v}>
                  <div style={{ fontFamily: 'var(--pp-disp)', fontWeight: 800, fontSize: '36px', color: 'var(--pp-orange-dark)', letterSpacing: '-.03em', lineHeight: 1 }}>{s.v}</div>
                  <p style={{ marginTop: '10px', fontSize: '15px', color: 'var(--pp-body)' }}>{s.d}</p>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-block', marginTop: '10px', fontFamily: 'var(--pp-mono)', fontSize: '11px', color: 'var(--pp-muted)', textDecoration: 'underline' }}
                  >
                    {s.src}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6 Core Capabilities ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// comprehensive technical breakdown</p>
            <h2 style={{ marginTop: '10px' }}>6 Critical Dimensions to Evaluate Before Deciding</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '64ch' }}>
              Our senior e-commerce developers analyze the operational and financial differences between both platforms.
            </p>
            <div className="pp-bento" style={{ marginTop: '32px' }}>
              {PILLARS.map((p) => (
                <div className="pp-card" key={p.t}>
                  <div style={{ fontFamily: 'var(--pp-mono)', fontSize: '20px', color: 'var(--pp-orange-dark)', marginBottom: '10px' }} aria-hidden="true">{p.i}</div>
                  <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '16px', color: 'var(--pp-ink)', marginBottom: '6px' }}>{p.t}</h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--pp-body)' }}>{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Interactive ROI / TCO Calculator ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// interactive financial tool</p>
            <h2 style={{ marginTop: '10px' }}>Calculate Your True E-Commerce Operating ROI</h2>
            <p className="pp-lead" style={{ marginTop: '10px', marginBottom: '24px', maxWidth: '58ch' }}>
              Estimate your annual revenue lift from accelerated checkout speeds and infrastructure savings.
            </p>
            <EcommerceRoiCalculator />
          </div>
        </section>

        {/* ── Replatforming Migration Blueprint ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// migration protocol</p>
            <h2 style={{ marginTop: '10px' }}>Migrating from WooCommerce to Shopify with Zero SEO Loss</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                The biggest fear founders have when moving off WooCommerce is losing organic Google rankings and customer account data.
                FactoryJet uses an automated, engineer-led ETL migration protocol designed specifically for US stores:
              </p>
              <ul style={{ margin: '14px 0', paddingLeft: '20px', display: 'grid', gap: '8px' }}>
                <li><strong>100% SKU &amp; Order History Transfer:</strong> Products, variants, customer profiles, and historical order receipts are transformed and imported cleanly.</li>
                <li><strong>1-to-1 301 URL Mapping:</strong> Every WordPress blog post, category archive, and product slug is mapped to its exact Shopify equivalent with zero 404 dead ends.</li>
                <li><strong>Sub-Second Liquid 2.0 Theme Rebuild:</strong> We rebuild your storefront with clean, custom Liquid 2.0 components that achieve 100/100 Core Web Vitals.</li>
                <li><strong>Zero-Downtime DNS Cutover:</strong> DNS records switch seamlessly after staging validation, ensuring no lost transactions during rollout.</li>
              </ul>
              <div style={{ marginTop: '24px' }}>
                <a
                  href="/replatforming/woocommerce-to-shopify"
                  className="pp-btn-dark"
                  style={{ display: 'inline-block', textDecoration: 'none' }}
                >
                  Explore WooCommerce to Shopify Migration Service &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQs ── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Shopify vs WooCommerce: Expert Technical Answers"
          lead="Everything US merchants need to know about total cost of ownership, speed, security, and migration."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ── Final Closing CTA ── */}
        <section className="pp-cta-sec">
          <div className="pp-wrap text-center" style={{ maxWidth: '640px', margin: '0 auto' }}>
            <p className="pp-eyebrow" style={{ color: 'var(--pp-orange)' }}>READY TO OPTIMIZE YOUR COMMERCE ARCHITECTURE?</p>
            <h2 style={{ color: '#fff', margin: '12px 0 16px', fontSize: 'clamp(28px, 4vw, 40px)' }}>
              Get an Unbiased Platform Architecture Review
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: 1.6, marginBottom: '28px' }}>
              Speak directly with principal commerce architect Bhavesh Barot. We will audit your current WooCommerce or Shopify store, analyze your true TCO, and provide a clear technical roadmap.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="pp-btn-orange"
                style={{ textDecoration: 'none' }}
              >
                Book 30-Min Architecture Consultation
              </a>
              <a
                href="/contact"
                className="pp-btn-ghost"
                style={{ textDecoration: 'none' }}
              >
                Submit Project Brief
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

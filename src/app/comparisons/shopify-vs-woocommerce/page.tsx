import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import EcommerceRoiCalculator from '@/components/commerce/EcommerceRoiCalculator';
import '@/components/v2/PlatformPage.css';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const PAGE_MODIFIED = '2026-10-22';
const PAGE_TITLE = 'Shopify vs WooCommerce: Real Costs and Trade-offs (2026)';
const PAGE_DESCRIPTION =
  'Shopify vs WooCommerce for US stores: Shopify plan prices, WooPayments and Shopify Payments rates, hosting needs and upkeep. Vendor sources checked 22 Oct 2026.';

/* Official sources, each fetched and read on 2026-10-22. */
const SRC = {
  shopifyPricing: 'https://www.shopify.com/pricing',
  plusPricing: 'https://www.shopify.com/plus/pricing',
  variants: 'https://help.shopify.com/en/manual/products/variants/add-variants',
  b2bPlans: 'https://help.shopify.com/en/manual/b2b/getting-started/plan-features',
  wooHome: 'https://woocommerce.com/',
  wooPayments: 'https://woocommerce.com/payments/',
  wooFees: 'https://woocommerce.com/document/woopayments/fees/',
  wooServer: 'https://woocommerce.com/document/server-requirements/',
  wooHpos: 'https://woocommerce.com/document/high-performance-order-storage/',
  wpAbout: 'https://wordpress.org/about/',
  wpExport: 'https://wordpress.org/documentation/article/tools-export-screen/',
} as const;

const LINK = { color: 'var(--pp-orange-dark)', textDecoration: 'underline' } as const;
const INLINK = { color: 'var(--pp-orange-dark)', fontWeight: 600, textDecoration: 'underline' } as const;

function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={LINK}>
      {children}
    </a>
  );
}

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    type: 'article',
    siteName: 'FactoryJet',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: 'https://factoryjet.com/comparisons/shopify-vs-woocommerce',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Shopify vs WooCommerce Comparison' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/comparisons/shopify-vs-woocommerce' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* ─────────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'tco', label: 'Prices & Fees' },
  { key: 'performance', label: 'Speed & Database' },
  { key: 'security', label: 'Security, Updates & Data' },
  { key: 'scalability', label: 'Growth & Checkout' },
  { key: 'migration', label: 'Choosing & Switching' },
];

const FAQ_ITEMS = [
  // Prices & Fees
  {
    category: 'tco',
    question: 'Is WooCommerce free compared with Shopify?',
    answer:
      'The software is free: WooCommerce is an open-source plugin for WordPress, which is licensed under GPLv2. Running a store is not free. You pay for hosting that meets WooCommerce’s requirements (PHP 8.3 or newer, MySQL 8.0 or MariaDB 10.6, HTTPS, 256 MB of memory), a domain, any paid extensions, and the time to keep it all updated. Shopify bundles hosting into its monthly plan.',
  },
  {
    category: 'tco',
    question: 'How much does Shopify cost per month in 2026?',
    answer:
      'Shopify lists Basic at $29 a month billed yearly or $39 month to month, Grow at $89 or $105, Advanced at $359 or $399, and Plus from $2,300 a month. Shopify also offers a free 3-day trial, and says most plans then cost $1 a month for the first 3 months. Every plan includes unlimited web hosting and a free SSL certificate.',
  },
  {
    category: 'tco',
    question: 'Is there a cheaper option than Shopify for a small store?',
    answer:
      'WooCommerce can cost less on paper, because there is no platform fee. The saving moves into hosting, extensions and your own time. A small catalog with simple shipping on modest hosting can undercut Shopify Basic. Once you add paid extensions for subscriptions, bookings or shipping rules, plus someone to apply updates, the gap usually closes. Price both with your real extension list.',
  },
  {
    category: 'tco',
    question: 'How do Shopify Payments and WooPayments card fees compare in the US?',
    answer:
      'They start level. WooPayments charges 2.90% + $0.30 for US online cards, plus 1.50% for international cards, 1.00% for currency conversion and $15 per dispute. Shopify Payments charges 2.9% + 30¢ on Basic, 2.7% on Grow, 2.5% on Advanced and 2.25% on Plus, with 1% extra for international cards. On higher Shopify plans the card rate drops below WooPayments.',
  },
  {
    category: 'tco',
    question: 'Does Shopify charge extra if I use Stripe or PayPal instead of Shopify Payments?',
    answer:
      'Yes. Shopify lists third-party transaction fees of 2% on Basic, 1% on Grow, 0.6% on Advanced and 0.2% on Plus. On $500,000 of yearly sales through an outside gateway on Basic, that is $10,000 a year (2% of $500,000). WooCommerce charges no platform fee on any gateway. If you plan to keep your processor, include this fee in every Shopify quote.',
  },
  {
    category: 'tco',
    question: 'Is WooCommerce or Shopify better for a small business?',
    answer:
      'Shopify suits owners who want to sell this week and not think about servers. WooCommerce suits owners who already run a WordPress site, have someone technical on hand, and want full control of code and data. If nobody on your team will update plugins each month, pick Shopify. If your site is mostly articles with a few products, WooCommerce keeps everything in one place.',
  },

  // Speed & Database
  {
    category: 'performance',
    question: 'Which is faster, Shopify or WooCommerce?',
    answer:
      'Build quality matters more than the platform. Shopify serves every store from its own hosting, so speed depends mostly on the theme and apps you add. WooCommerce speed depends on your host, caching, PHP version and how many plugins load on each page. A lean WooCommerce build on good hosting can be fast. A Shopify theme overloaded with app scripts can be slow.',
  },
  {
    category: 'performance',
    question: 'Why do older WooCommerce stores slow down as orders pile up?',
    answer:
      'Before version 8.2, WooCommerce stored orders in WordPress’s general posts and postmeta tables, which grow large and slow to search. High-Performance Order Storage (HPOS) moves orders into dedicated tables such as wc_orders and wc_orders_meta, and it is on by default for new stores from 8.2 onward. Older stores may still need to switch, so check under WooCommerce, Settings, Advanced, Features.',
  },
  {
    category: 'performance',
    question: 'Can a headless WooCommerce store match Shopify on speed?',
    answer:
      'It can, at a cost. A headless WooCommerce build puts a JavaScript front end, often Next.js, in front of the WordPress back end, so you run and secure two systems. Shopify’s headless route uses its Storefront API, and Shopify says Plus stores can deploy its React-based headless stack at no extra cost. For most small stores, a well-built standard theme on either platform is enough.',
  },

  // Security, Updates & Data
  {
    category: 'security',
    question: 'Who is responsible for security and PCI on Shopify vs WooCommerce?',
    answer:
      'On Shopify, buyers enter card details in Shopify’s hosted checkout, so Shopify carries the platform side of card security. On WooCommerce with WooPayments or Stripe, card fields are usually hosted by the processor, which narrows your scope, but you still secure the WordPress server, admin logins, plugins and backups. A neglected plugin is the most common way a WooCommerce site gets hacked.',
  },
  {
    category: 'security',
    question: 'How often do updates break WooCommerce stores?',
    answer:
      'Updates break stores when versions drift apart. WordPress core, WooCommerce, your theme and each extension update on their own schedules, and WooCommerce lists PHP 8.3 or newer, tested up to 8.4. Test updates on a staging copy first, keep a backup from the same day, and remove plugins you no longer use. On Shopify, the platform updates itself and apps update separately.',
  },
  {
    category: 'security',
    question: 'Which is better, WordPress or WooCommerce?',
    answer:
      'They are not rivals. WooCommerce is a plugin that runs inside WordPress, so a WooCommerce store is a WordPress site with a shop added. WordPress.org says WordPress runs over 43% of all sites on the web. If you only publish content, WordPress alone is enough. If you want to sell, add WooCommerce, or keep WordPress for content and run checkout on Shopify.',
  },
  {
    category: 'security',
    question: 'Who owns my store data on each platform?',
    answer:
      'On WooCommerce, the database sits on a server you control, so you can copy it whenever you like, and WordPress’s Tools, Export screen exports posts, pages, custom fields and users. On Shopify, your data lives on Shopify’s servers, and you can export products, customers and orders as CSV files or through the API. Either way, you own the data and can leave.',
  },

  // Growth & Checkout
  {
    category: 'scalability',
    question: 'Can WooCommerce handle Black Friday traffic as well as Shopify?',
    answer:
      'Yes, if the hosting is sized and tested for it. On WooCommerce, capacity depends on your server, caching and database, so run a load test weeks before peak. Shopify handles hosting for every store and reports 99.99% average uptime across Shopify during the biggest sales events of the year, plus checkout load-tested at 10K+ checkouts per minute on Plus. Those are Shopify’s own figures.',
  },
  {
    category: 'scalability',
    question: 'How does Shop Pay compare with WooCommerce checkout options?',
    answer:
      'Shop Pay is Shopify’s saved-details checkout, so returning buyers skip retyping their address and card. WooPayments offers its own express checkout, WooPay, and supports Apple Pay and Google Pay. Both platforms support the big wallets. Shop Pay’s advantage is that shoppers may already have an account from buying at other Shopify stores, which WooPay cannot match on a new site.',
  },
  {
    category: 'scalability',
    question: 'Which platform handles B2B and wholesale better?',
    answer:
      'Shopify, unless you want to build it yourself. Shopify includes B2B companies, catalogs and net payment terms on every plan, with up to 3 active catalogs, and Plus allows unlimited catalogs. WooCommerce needs wholesale extensions for customer-specific prices, minimum orders and net terms. That route works, but each extension is another piece to update and test.',
  },
  {
    category: 'scalability',
    question: 'How do product variant limits compare?',
    answer:
      'Shopify allows up to 2,048 variants and three options per product, such as size, colour and material. WooCommerce builds variable products from attributes you define, with no fixed option count in the core plugin, though large variation counts slow the product page on modest hosting. If you sell made-to-order items with many options, check them against Shopify’s limits before you move.',
  },
  {
    category: 'scalability',
    question: 'Which platform is better for selling in other countries?',
    answer:
      'Both work. WooPayments is available in 38 countries and accepts 135+ currencies, with local methods such as iDEAL and Bancontact. Shopify handles local currencies and domains through Shopify Markets, and Plus adds Managed Markets to simplify cross-border selling. If you sell to many countries with a small team, Shopify needs fewer add-ons.',
  },

  // Choosing & Switching
  {
    category: 'migration',
    question: 'What is the number one ecommerce platform?',
    answer:
      'There is no single winner, and it depends on what you count. WooCommerce says it powers more than 4 million stores. Shopify says millions of merchants sell on it. Store counts tell you little about fit. Pick Shopify if you want hosting and checkout handled for you. Pick WooCommerce if you want open-source code on WordPress that you control.',
  },
  {
    category: 'migration',
    question: 'Is it better to have my own website or a Shopify store?',
    answer:
      'A Shopify store is your own website: it runs on your domain, with your design, products and customer list. The difference is who runs the servers. With Shopify, Shopify does. With WooCommerce, you or your host do. If owning the code itself matters, WooCommerce gives you that. If you only need to own your brand, domain and data, Shopify covers it.',
  },
  {
    category: 'migration',
    question: 'Is Shopify still worth it in 2026 for a growing store?',
    answer:
      'For most growing consumer brands, yes. The case is strongest when you use Shopify Payments, which avoids the third-party fee, and when you have no in-house developer to manage WordPress updates. It is weaker if you depend on a processor Shopify charges a fee on, or your store is mainly a content site where WordPress already does the heavy lifting.',
  },
  {
    category: 'migration',
    question: 'When should a store move from WooCommerce to Shopify?',
    answer:
      'Move when plugin updates break checkout more than once a year, when hosting and maintenance bills keep rising, when the site slows during email campaigns, or when you want to add retail POS or wholesale without stacking more extensions. Stay if WooCommerce is stable, your developer is reliable, and your content site drives the sales. A short audit settles it.',
  },
  {
    category: 'migration',
    question: 'When is WooCommerce the better choice?',
    answer:
      'WooCommerce is the better choice when your products fall into categories Shopify Payments will not process, when you must host data on your own servers, or when publishing articles, courses or member content matters more than the shop. It also suits teams with a WordPress developer on staff, since that person can change any line of code without waiting on a platform.',
  },
  {
    category: 'migration',
    question: 'How does FactoryJet move a WooCommerce store to Shopify?',
    answer:
      'We export products, customers and orders from WooCommerce, map them to Shopify, and give every old URL a one-to-one 301 redirect in a single hop. A custom-theme store takes 3 to 5 weeks; stores with subscriptions, B2B or a large migration take 5 to 8 weeks. You see a working demo on your own data before you sign, and the price is fixed per phase.',
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
  headline: 'Shopify vs WooCommerce: Real Costs and Trade-offs',
  description: PAGE_DESCRIPTION,
  dateModified: PAGE_MODIFIED,
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    jobTitle: 'Founder & Principal Commerce Architect',
    url: 'https://factoryjet.com',
  },
  publisher: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
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
  { b: 'Sourced fees', s: 'plans, card rates, gateway fees' },
  { b: 'Hosted vs plugin', s: 'who runs the servers' },
  { b: 'Demo first', s: 'on your own data, before you sign' },
  { b: 'One-to-one 301s', s: 'single-hop redirect map' },
];

const SOURCED = [
  {
    v: '$29/mo',
    d: 'Shopify Basic billed yearly ($39 month to month), with unlimited web hosting and a free SSL certificate included.',
    src: 'Shopify pricing, checked 22 Oct 2026',
    href: SRC.shopifyPricing,
  },
  {
    v: '2.90% + $0.30',
    d: 'WooPayments fee for a US online card payment, plus 1.50% for international cards and $15 per dispute.',
    src: 'WooPayments fees, checked 22 Oct 2026',
    href: SRC.wooFees,
  },
  {
    v: '2% to 0.2%',
    d: 'Shopify’s third-party transaction fee when you use a gateway other than Shopify Payments, from Basic down to Plus.',
    src: 'Shopify pricing, checked 22 Oct 2026',
    href: SRC.shopifyPricing,
  },
];

const PILLARS = [
  { i: '◈', t: '1. What you pay each month', d: 'Shopify charges a plan fee with hosting included. WooCommerce has no plan fee, but you pay hosting, extensions and upkeep.' },
  { i: '◇', t: '2. What you pay per order', d: 'Compare Shopify Payments, WooPayments and your own processor, plus Shopify’s fee if you keep an outside gateway.' },
  { i: '↯', t: '3. Who keeps it running', d: 'Shopify updates its own platform. On WooCommerce someone updates WordPress, PHP, the theme and every plugin.' },
  { i: '▤', t: '4. How much code you control', d: 'WooCommerce is open-source PHP you can change line by line. Shopify is extended through themes, apps and APIs.' },
  { i: '⛓', t: '5. How content and shop fit', d: 'WordPress is a publishing tool first. Shopify is a shop first, with a simpler blog and pages.' },
  { i: '⤢', t: '6. How easy it is to leave', d: 'Both let you export products, customers and orders. WooCommerce also gives you the whole database.' },
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
                <p className="pp-eyebrow">Platform comparison · Updated 22 October 2026</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '18ch' }}>
                  Shopify vs <span className="pp-grad">WooCommerce.</span>
                </h1>
                <p className="pp-lead" style={{ maxWidth: '48ch' }}>
                  Pick Shopify if you want hosting, updates and checkout handled for you, from $29 a month billed yearly
                  (<Ext href={SRC.shopifyPricing}>Shopify</Ext>). Pick WooCommerce if you already run WordPress, have someone
                  to keep plugins updated, and want full control of the code. WooCommerce itself is free
                  (<Ext href={SRC.wooHome}>WooCommerce</Ext>); you pay for hosting, extensions and upkeep instead.
                </p>
                <HeroInlineForm source="us_shopify_vs_woocommerce_hero" region="us" submitLabel="Get Platform Architecture Scope" />
              </div>

              {/* Visual Architecture Graphic */}
              <div
                role="img"
                aria-label="Shopify vs WooCommerce comparison showing a hosted store with a monthly plan against an open-source WordPress plugin you host yourself."
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
                  Who does the work
                  <small style={{ display: 'block', fontFamily: 'var(--pp-mono)', fontSize: '11px', color: 'var(--pp-orange-dark)', fontWeight: 600, marginTop: '2px' }}>
                    Shopify (hosted, monthly plan) vs WooCommerce (open source, you host)
                  </small>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                  <div style={{ border: '1px solid var(--pp-line)', borderRadius: '10px', background: '#FAF8F5', padding: '14px 12px' }}>
                    <b style={{ fontFamily: 'var(--pp-disp)', fontSize: '14px', display: 'block', color: 'var(--pp-ink)', borderBottom: '1px solid var(--pp-line)', paddingBottom: '6px' }}>Shopify</b>
                    <ul style={{ fontSize: '12px', color: 'var(--pp-body)', marginTop: '8px', paddingLeft: '14px', display: 'grid', gap: '4px' }}>
                      <li>Shop Pay checkout</li>
                      <li>Hosting included</li>
                      <li>Platform updates itself</li>
                      <li>Fee on outside gateways</li>
                    </ul>
                  </div>
                  <div style={{ border: '1px solid var(--pp-line)', borderRadius: '10px', background: '#FAF8F5', padding: '14px 12px' }}>
                    <b style={{ fontFamily: 'var(--pp-disp)', fontSize: '14px', display: 'block', color: 'var(--pp-ink)', borderBottom: '1px solid var(--pp-line)', paddingBottom: '6px' }}>WooCommerce (WordPress)</b>
                    <ul style={{ fontSize: '12px', color: 'var(--pp-body)', marginTop: '8px', paddingLeft: '14px', display: 'grid', gap: '4px' }}>
                      <li>Open-source code control</li>
                      <li>Built into WordPress content</li>
                      <li>Self-managed database</li>
                      <li>You pick and pay the host</li>
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
                  <div>Sourced fees · Fixed price per phase</div>
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
            <p className="pp-mlabel">// the short verdict</p>
            <h2 style={{ marginTop: '10px' }}>Shopify vs WooCommerce: which one fits your business</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                Shopify is a hosted store builder you rent by the month. WooCommerce is a free, open-source plugin that turns a
                WordPress site into a store, and WordPress is licensed under GPLv2 (<Ext href={SRC.wpAbout}>WordPress.org</Ext>).
                Neither is better for everyone. The real question is who on your team will look after the store once it is live.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>Choose Shopify if</h3>
              <ul style={{ margin: '14px 0', paddingLeft: '20px', display: 'grid', gap: '8px' }}>
                <li>Nobody on your team wants to update plugins, PHP or hosting.</li>
                <li>You can use Shopify Payments, so you avoid the third-party fee (<Ext href={SRC.shopifyPricing}>Shopify pricing</Ext>).</li>
                <li>You plan to add retail POS or wholesale, which Shopify covers on every plan (<Ext href={SRC.b2bPlans}>Shopify B2B features</Ext>).</li>
                <li>You want Shop Pay, where returning shoppers may already have saved details.</li>
                <li>Your products fit within 2,048 variants and three options each (<Ext href={SRC.variants}>Shopify Help Center</Ext>).</li>
              </ul>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>Choose WooCommerce if</h3>
              <ul style={{ margin: '14px 0', paddingLeft: '20px', display: 'grid', gap: '8px' }}>
                <li>You already run a WordPress site and content drives most of your sales.</li>
                <li>You have a WordPress developer on staff or on call.</li>
                <li>You sell in a category Shopify Payments will not process.</li>
                <li>You need to keep the database on servers you control.</li>
                <li>You want to change any line of code without platform limits.</li>
              </ul>
              <p>
                We build on both. See our <a href="/services/woocommerce-development" style={INLINK}>WooCommerce development</a> and{' '}
                <a href="/services/shopify-development" style={INLINK}>Shopify development</a> services.
              </p>
            </div>
          </div>
        </section>

        {/* ── Detailed Comparison Matrix Table ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// specs and fees, with sources</p>
            <h2 style={{ marginTop: '10px' }}>Shopify vs WooCommerce: specs and fees side by side</h2>
            <div style={{ overflowX: 'auto', marginTop: '24px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--pp-line)', fontSize: '14px' }}>
                <thead style={{ background: '#14110F', color: '#fff' }}>
                  <tr>
                    <th style={{ padding: '14px 16px', textAlign: 'left' }}>Item</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left' }}>Shopify</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left' }}>WooCommerce</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left' }}>Source</th>
                  </tr>
                </thead>
                <tbody style={{ color: 'var(--pp-body)' }}>
                  <tr style={{ borderBottom: '1px solid var(--pp-line)' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 600, color: 'var(--pp-ink)' }}>Software and plan</td>
                    <td style={{ padding: '14px 16px' }}>Basic $29, Grow $89, Advanced $359 a month billed yearly; Plus from $2,300</td>
                    <td style={{ padding: '14px 16px' }}>Free open-source plugin; you pay hosting and extensions</td>
                    <td style={{ padding: '14px 16px' }}><Ext href={SRC.shopifyPricing}>Shopify</Ext> and <Ext href={SRC.wooHome}>WooCommerce</Ext>, checked 22 Oct 2026</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--pp-line)', background: '#FAF8F5' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 600, color: 'var(--pp-ink)' }}>US online card rate</td>
                    <td style={{ padding: '14px 16px' }}>Shopify Payments: 2.9% + 30¢ (Basic) to 2.25% + 30¢ (Plus)</td>
                    <td style={{ padding: '14px 16px' }}>WooPayments: 2.90% + $0.30</td>
                    <td style={{ padding: '14px 16px' }}><Ext href={SRC.shopifyPricing}>Shopify</Ext> and <Ext href={SRC.wooFees}>WooPayments</Ext>, checked 22 Oct 2026</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--pp-line)' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 600, color: 'var(--pp-ink)' }}>International card surcharge</td>
                    <td style={{ padding: '14px 16px' }}>+1%</td>
                    <td style={{ padding: '14px 16px' }}>+1.50%, plus 1.00% if currency is converted</td>
                    <td style={{ padding: '14px 16px' }}><Ext href={SRC.shopifyPricing}>Shopify</Ext> and <Ext href={SRC.wooFees}>WooPayments</Ext>, checked 22 Oct 2026</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--pp-line)', background: '#FAF8F5' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 600, color: 'var(--pp-ink)' }}>Fee for an outside gateway</td>
                    <td style={{ padding: '14px 16px' }}>2% Basic, 1% Grow, 0.6% Advanced, 0.2% Plus</td>
                    <td style={{ padding: '14px 16px' }}>No platform fee</td>
                    <td style={{ padding: '14px 16px' }}><Ext href={SRC.shopifyPricing}>Shopify pricing</Ext>, checked 22 Oct 2026</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--pp-line)' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 600, color: 'var(--pp-ink)' }}>Hosting</td>
                    <td style={{ padding: '14px 16px' }}>Unlimited web hosting and free SSL included</td>
                    <td style={{ padding: '14px 16px' }}>You provide: WordPress 6.9+, PHP 8.3+, MySQL 8.0+ or MariaDB 10.6+, HTTPS, 256 MB memory</td>
                    <td style={{ padding: '14px 16px' }}><Ext href={SRC.shopifyPricing}>Shopify</Ext> and <Ext href={SRC.wooServer}>WooCommerce requirements</Ext>, checked 22 Oct 2026</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--pp-line)', background: '#FAF8F5' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 600, color: 'var(--pp-ink)' }}>Order storage</td>
                    <td style={{ padding: '14px 16px' }}>Managed by Shopify</td>
                    <td style={{ padding: '14px 16px' }}>HPOS order tables, on by default for new stores from version 8.2</td>
                    <td style={{ padding: '14px 16px' }}><Ext href={SRC.wooHpos}>WooCommerce HPOS</Ext>, checked 22 Oct 2026</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--pp-line)' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 600, color: 'var(--pp-ink)' }}>Variants</td>
                    <td style={{ padding: '14px 16px' }}>Up to 2,048 variants and 3 options per product</td>
                    <td style={{ padding: '14px 16px' }}>Variable products built from attributes you define</td>
                    <td style={{ padding: '14px 16px' }}><Ext href={SRC.variants}>Shopify Help Center</Ext>, checked 22 Oct 2026</td>
                  </tr>
                  <tr style={{ background: '#FAF8F5' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 600, color: 'var(--pp-ink)' }}>B2B and wholesale</td>
                    <td style={{ padding: '14px 16px' }}>Companies, catalogs, net terms on all plans; 3 catalogs, unlimited on Plus</td>
                    <td style={{ padding: '14px 16px' }}>Added through wholesale extensions</td>
                    <td style={{ padding: '14px 16px' }}><Ext href={SRC.b2bPlans}>Shopify B2B plan features</Ext>, checked 22 Oct 2026</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Sourced Stats ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// sourced figures</p>
            <h2 style={{ marginTop: '10px' }}>Three fees that decide most small-store budgets</h2>
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
            <p className="pp-mlabel">// what to compare</p>
            <h2 style={{ marginTop: '10px' }}>Six questions to answer before you decide</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '64ch' }}>
              Answer these with your own numbers and the right platform usually becomes obvious.
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
            <h2 style={{ marginTop: '10px' }}>Estimate your own numbers</h2>
            <p className="pp-lead" style={{ marginTop: '10px', marginBottom: '24px', maxWidth: '58ch' }}>
              Put in your revenue and current costs to see how a move changes them. On WooCommerce, the costs to list are:
            </p>
            <ul style={{ margin: '0 0 24px', paddingLeft: '20px', display: 'grid', gap: '8px', color: 'var(--pp-body)', maxWidth: '64ch' }}>
              <li>Hosting that meets WooCommerce&apos;s server requirements (<Ext href={SRC.wooServer}>WooCommerce</Ext>).</li>
              <li>Yearly licences for paid extensions such as subscriptions, bookings and shipping rules.</li>
              <li>Payment fees, for example WooPayments at 2.90% + $0.30 per US card payment (<Ext href={SRC.wooFees}>WooPayments</Ext>).</li>
              <li>Developer hours for updates, staging tests and fixes after plugin conflicts.</li>
              <li>Backups and security scanning, if your host does not include them.</li>
            </ul>
            <EcommerceRoiCalculator />
          </div>
        </section>

        {/* ── Replatforming Migration Blueprint ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// migration protocol</p>
            <h2 style={{ marginTop: '10px' }}>If you move from WooCommerce to Shopify: how it runs</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                The two worries we hear most are losing Google rankings and losing customer accounts. This is the order we
                work in. A custom-theme store takes 3 to 5 weeks; subscriptions, B2B or a large catalog take 5 to 8 weeks.
              </p>
              <ol style={{ margin: '14px 0', paddingLeft: '20px', display: 'grid', gap: '8px' }}>
                <li><strong>Audit plugins:</strong> list every active plugin and mark each as replaced by a Shopify feature, an app, or dropped.</li>
                <li><strong>Demo on your data:</strong> we load a slice of your real catalog into a working Shopify store before you sign.</li>
                <li><strong>Move the data:</strong> products, variations, customers and order history are exported, mapped and imported, with counts checked.</li>
                <li><strong>Keep the blog:</strong> posts come out through WordPress&apos;s Tools, Export screen (<Ext href={SRC.wpExport}>WordPress.org</Ext>), or stay on WordPress if content is your main traffic source.</li>
                <li><strong>Map every URL:</strong> each product, category and post URL gets a one-to-one 301 to its Shopify path, in a single hop.</li>
                <li><strong>Test on staging:</strong> checkout, taxes, emails and every redirect are tested before DNS changes.</li>
                <li><strong>Launch with cover:</strong> defects after launch are fixed inside the build price for a cover period agreed before work starts.</li>
              </ol>
              <p>
                Customer passwords cannot be moved between platforms, so customers set a new one on first login. More detail on the{' '}
                <a href="/replatforming/woocommerce-to-shopify" style={INLINK}>WooCommerce to Shopify migration</a> page, or use the{' '}
                <a href="/tools/replatforming-cost-calculator" style={INLINK}>replatforming cost calculator</a>. Comparing bigger platforms
                too? See <a href="/comparisons/shopify-plus-vs-bigcommerce" style={INLINK}>Shopify Plus vs BigCommerce</a>.
              </p>
              <div style={{ marginTop: '24px' }}>
                <a
                  href="/services/shopify-migration-agency"
                  className="pp-btn-dark"
                  style={{ display: 'inline-block', textDecoration: 'none' }}
                >
                  Explore the Shopify Migration Service &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQs ── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Shopify vs WooCommerce: questions buyers ask"
          lead="Plain answers on cost, fees, speed, security and switching, using the sources in the table above."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ── Final Closing CTA ── */}
        <section className="pp-cta-sec">
          <div className="pp-wrap text-center" style={{ maxWidth: '640px', margin: '0 auto' }}>
            <p className="pp-eyebrow" style={{ color: 'var(--pp-orange)' }}>NOT SURE WHICH ONE FITS?</p>
            <h2 style={{ color: '#fff', margin: '12px 0 16px', fontSize: 'clamp(28px, 4vw, 40px)' }}>
              Get a Platform Review From Our Founder
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: 1.6, marginBottom: '28px' }}>
              Speak directly with Bhavesh Barot. We look at your current WooCommerce or Shopify store, list what each path costs you,
              and recommend one. FactoryJet quotes a fixed price in writing after a short scoping call.
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

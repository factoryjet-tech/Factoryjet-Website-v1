import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import EnterpriseArchitectureBlueprint from '@/components/v2/EnterpriseArchitectureBlueprint';
import AuthorCard from '@/components/v2/AuthorCard';
import CommerceRoiCalculator from '@/components/v2/CommerceRoiCalculator';
import ZeroDowntimeMigrationMatrix from '@/components/commerce/ZeroDowntimeMigrationMatrix';
import SeoLinkEquityChecklist from '@/components/commerce/SeoLinkEquityChecklist';
import AnswerFirstDefinition from '@/components/commerce/AnswerFirstDefinition';
import '@/components/v2/PlatformPage.css';

// Lazy-load the estimator as a separate chunk so its ~255 KiB JS doesn't block
// initial render. ssr stays true (required in a Server Component) so the
// Migration Guarantees list still renders in the static HTML for crawlers.
const ReplatformingScopeEstimator = dynamic(
  () => import('@/components/commerce/ReplatformingScopeEstimator'),
  { ssr: true }
);

const PAGE_MODIFIED = '2026-10-22';
const PAGE_TITLE = 'WooCommerce to Shopify Migration Services | FactoryJet';
const PAGE_DESCRIPTION =
  'WooCommerce to Shopify migration services: products, customers, orders and subscriptions moved, every /product/ URL 301-mapped, fixed price per phase.';

/* Official sources. Each was fetched and read on 22 Oct 2026. */
const SRC = {
  wooCsv: 'https://woocommerce.com/document/product-csv-importer-exporter/',
  wooHpos: 'https://woocommerce.com/document/high-performance-order-storage/',
  wooRest: 'https://woocommerce.github.io/woocommerce-rest-api-docs/',
  wooPermalinks: 'https://woocommerce.com/document/permalinks/',
  wooPayFees: 'https://woocommerce.com/document/woopayments/fees-and-debits/fees/',
  wooSubs: 'https://woocommerce.com/products/woocommerce-subscriptions/',
  shopifyWooGuide: 'https://help.shopify.com/en/manual/migrating-to-shopify/migrating-from-woocommerce',
  shopifyTransfer: 'https://help.shopify.com/en/manual/migrating-to-shopify/transfer-data',
  shopifyVariants: 'https://help.shopify.com/en/manual/products/variants/add-variants',
  shopifyRedirects: 'https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect',
  shopifyCustomers: 'https://help.shopify.com/en/manual/customers/import-export-customers',
  shopifyPricing: 'https://www.shopify.com/pricing',
  shopifyPlusPlan: 'https://help.shopify.com/en/manual/intro-to-shopify/pricing-plans/plans-features/shopify-plus-plan',
  shopifySubs: 'https://help.shopify.com/en/manual/products/purchase-options/shopify-subscriptions',
  googleSiteMove: 'https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes',
} as const;

const linkStyle = { color: '#B23E13', textDecoration: 'underline' } as const;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: 'https://factoryjet.com/replatforming/woocommerce-to-shopify',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'WooCommerce to Shopify Migration Services' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/replatforming/woocommerce-to-shopify' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const FAQ_CATEGORIES = [
  { key: 'basics', label: 'Hiring and Scope' },
  { key: 'export', label: 'Getting Data Out of WooCommerce' },
  { key: 'payments', label: 'WooPayments and Subscriptions' },
  { key: 'seo', label: 'URLs, Yoast and Redirects' },
  { key: 'cost', label: 'Price and Timeline' },
  { key: 'cutover', label: 'Launch Day' },
];

const FAQ_ITEMS = [
  {
    category: 'basics',
    question: 'What does a WooCommerce to Shopify migration service include?',
    answer:
      'A full service moves products, variants, customers, past orders, blog posts, pages and reviews from WooCommerce into Shopify, then maps every old URL to its new address with a 301 redirect. FactoryJet also replaces WooPayments with Shopify Payments or another provider, rebuilds plugin features with Shopify apps or custom code, and rehearses the switch on a staging store. You see your own catalog working on Shopify before you sign.',
  },
  {
    category: 'basics',
    question: 'Should I hire a WooCommerce to Shopify migration agency or use an app?',
    answer:
      'Use an app if your products are simple, you run few plugins and you sell no subscriptions. Shopify\'s own WooCommerce guide says its Store Migration app reads the WooCommerce product CSV, and that products with more than three options will not have their options imported. Hire an agency when you have four or more attributes per product, WooCommerce Subscriptions renewals, custom checkout fields, or thousands of URLs to redirect.',
  },
  {
    category: 'basics',
    question: 'Is a WooCommerce to Shopify Plus migration different from a move to standard Shopify?',
    answer:
      'The data work is the same. The target features differ. Shopify Plus adds B2B company accounts, checkout extensions and Shopify Functions, plus a far higher redirect cap: Shopify lists 20,000,000 URL redirects on Plus against 100,000 on other plans. Plus costs $2,300 a month on a three-year term in the US, per Shopify\'s help center, so most WooCommerce stores move to a standard plan first.',
  },
  {
    category: 'basics',
    question: 'Is WooCommerce as good as Shopify?',
    answer:
      'For a store that wants full control of its code and already has a WordPress developer, WooCommerce works well. Shopify suits teams that want hosting, security updates and checkout handled by the vendor. The trade is control against upkeep. Our Shopify vs WooCommerce comparison sets both side by side. This page is for stores that have already decided to move and need the move done.',
  },
  {
    category: 'basics',
    question: 'Can WooCommerce and Shopify run side by side?',
    answer:
      'Yes, for a short window. During a migration both stores run while we test the Shopify copy, and WooCommerce stops taking orders at cutover. Some brands keep WordPress for content and sell through Shopify with the Buy Button or a headless front end. Running two live catalogs for months means every stock and price change has to happen twice, so we plan to avoid it.',
  },
  {
    category: 'export',
    question: 'How do you export products, customers and orders from WooCommerce?',
    answer:
      'Products come out through the built-in CSV exporter under Products, Export, which WooCommerce documents as a products-only tool. Customers and orders need a plugin export or the WooCommerce REST API at /wp-json/wc/v3, which exposes customers, orders, coupons, products and reviews. On larger stores we use the API, because CSV exports depend on the server\'s memory and upload limits and can time out.',
  },
  {
    category: 'export',
    question: 'Where does WooCommerce store orders, and why does it matter for migration?',
    answer:
      'Since WooCommerce 8.2, new stores keep orders in High-Performance Order Storage (HPOS) tables such as wc_orders and wc_orders_meta. Older stores may still keep them in wp_posts and wp_postmeta, the general WordPress tables. We check which mode your store runs before export, because some plugins write extra order fields to only one place, and an export that reads the other one misses them.',
  },
  {
    category: 'export',
    question: 'What happens to WooCommerce variable products with many attributes?',
    answer:
      'Shopify allows three options and up to 2,048 variants per product, per its help center. A WooCommerce product built from size, color, material and finish needs a decision before import. We split it into separate products, move the fourth attribute into a metafield (a custom data field on the product), or turn rare choices into line-item properties. Each choice is written into the mapping sheet you approve.',
  },
  {
    category: 'export',
    question: 'Can you migrate WooCommerce product add-ons and Advanced Custom Fields?',
    answer:
      'Yes. The data moves and the plugins stay behind. Fields from Advanced Custom Fields (ACF) or product add-on plugins are stored as post meta in WordPress. We map each field to a Shopify metafield or metaobject, and rebuild paid extras such as engraving or gift wrap as line-item properties or an app. Fields nobody has filled in for years are listed so you can drop them.',
  },
  {
    category: 'export',
    question: 'Will customers have to reset their passwords after we move to Shopify?',
    answer:
      'Yes. Shopify\'s help center says you cannot migrate customer passwords from another store using a CSV, and WordPress stores them hashed anyway. Customers come across with email, addresses, tags and marketing consent, then get an invite to set a new password. We schedule that email for launch day and add a short note to the login page so returning buyers know why.',
  },
  {
    category: 'export',
    question: 'Can WooCommerce product reviews be moved to Shopify?',
    answer:
      'Not with Shopify\'s own tools. Its WooCommerce guide says you cannot export or migrate reviews from WooCommerce to Shopify, and points to apps such as Judge.me, Loox and Yotpo. WooCommerce keeps native reviews as WordPress comments, so we export them, match each one to the new product handle, and import them into the review app you pick.',
  },
  {
    category: 'payments',
    question: 'What happens to WooPayments when we move to Shopify?',
    answer:
      'WooPayments stays with your WordPress site and does not transfer. On Shopify you connect Shopify Payments or another provider. WooPayments lists 2.9% + $0.30 for US cards with no monthly fee for online payments. On Shopify, using a provider other than Shopify Payments adds a fee of 2% on Basic down to 0.2% on Plus, so the provider you pick changes your card costs.',
  },
  {
    category: 'payments',
    question: 'Can WooCommerce Subscriptions customers keep renewing after the move?',
    answer:
      'Yes, when the saved cards can move. WooCommerce Subscriptions charges renewals through gateways such as Stripe, WooPayments or PayPal, which hold the card details. We ask that gateway about moving stored cards to the processor behind your new subscription app, import active contracts into Shopify Subscriptions or a third-party app, and compare the next billing dates. Subscribers whose cards cannot move get a re-authorization email before their next billing date.',
  },
  {
    category: 'payments',
    question: 'How are WooCommerce tax rates and shipping zones moved?',
    answer:
      'We rebuild them by hand, because there is no import route. WooCommerce keeps tax rates and shipping zones in its own settings, while Shopify uses shipping profiles and its own tax settings. We export your current zones, methods and rates, recreate them in Shopify, then place test orders to an address in each zone and compare the totals with the same cart on WooCommerce before launch.',
  },
  {
    category: 'seo',
    question: 'How do WooCommerce URLs change on Shopify?',
    answer:
      'WooCommerce products usually live at /product/slug, categories at /product-category/slug and tags at /product-tag/slug, per its permalink documentation. Shopify uses /products/handle and /collections/handle, and those prefixes cannot be changed. So every product and category URL changes. We keep each WooCommerce slug as the Shopify handle where possible, then load a one-to-one 301 redirect for every old URL.',
  },
  {
    category: 'seo',
    question: 'Will we lose Google rankings moving from WooCommerce to Shopify?',
    answer:
      'Some movement in the first weeks is normal, and no honest agency promises none. What we control: a one-to-one 301 map for every indexed URL, single hops with no chains, titles and descriptions carried over from Yoast or Rank Math, and a crawl of the new store before DNS moves. Google\'s site move guide lists the same steps. We watch Search Console daily after launch.',
  },
  {
    category: 'seo',
    question: 'What happens to Yoast SEO or Rank Math titles and meta descriptions?',
    answer:
      'Yoast and Rank Math save custom titles and meta descriptions as post meta on each product, page and post. We pull them with a database export or the WordPress REST API and write them into Shopify\'s search engine listing fields for the matching product, collection, page or article. Items with no custom title in Yoast fall back to Shopify\'s default title.',
  },
  {
    category: 'seo',
    question: 'How many redirects can a Shopify store hold?',
    answer:
      'Shopify\'s help center lists a maximum of 100,000 URL redirects on standard plans and 20,000,000 on Plus. Most WooCommerce stores fit under 100,000 even after counting products, categories, tags, posts and image attachment pages. Shopify only follows a redirect when the old path is broken, so a redirect from a path that still loads a page does nothing. We test each one after import.',
  },
  {
    category: 'seo',
    question: 'Should we move the WordPress blog to Shopify too?',
    answer:
      'Move it if the blog is small and mainly supports products. Keep WordPress on a subdomain if you publish often or rely on WordPress plugins for content. Shopify blog posts live at /blogs/blog-name/post-handle, so every post URL changes and needs a redirect. Our WordPress to Shopify page covers content-heavy moves in more detail.',
  },
  {
    category: 'cost',
    question: 'How much does a WooCommerce to Shopify migration cost?',
    answer:
      'It depends on catalog size, the number of plugins to replace, subscriptions, and whether you want a new theme. FactoryJet quotes a fixed price in writing after a short scoping call, paid per phase, and builds a working demo on your own product data before you sign. For a first rough scope, try the replatforming cost calculator.',
  },
  {
    category: 'cost',
    question: 'How long does a WooCommerce to Shopify migration take?',
    answer:
      'FactoryJet delivers a custom-theme store in 3 to 5 weeks, and a migration with subscriptions, B2B pricing or heavy data cleanup in 5 to 8 weeks. Headless builds take 8 to 14 weeks. On WooCommerce the biggest time drivers are the number of plugins that change checkout or product data, and how much product data lives in custom fields.',
  },
  {
    category: 'cost',
    question: 'What will we pay Shopify each month after leaving WooCommerce?',
    answer:
      'WooCommerce itself is a free plugin, but you pay separately for hosting, premium extensions and payment processing. Shopify bundles hosting into a monthly plan. Prices vary by country, so check Shopify\'s pricing page for yours. In the US, Shopify Plus is $2,300 a month on a three-year term or $2,500 on a one-year term, per Shopify\'s help center.',
  },
  {
    category: 'cutover',
    question: 'How do you avoid losing orders during the WooCommerce to Shopify cutover?',
    answer:
      'WooCommerce keeps taking orders until DNS moves. We run the full import days ahead, then a final sync of orders and customers created since, pulled from the REST API by date. DNS switches in a quiet hour, and a written rollback rule says when to point back. Orders placed in the last minutes are checked by hand in both admins.',
  },
  {
    category: 'cutover',
    question: 'What happens to the old WordPress site after launch?',
    answer:
      'Keep a private, read-only copy until your refund and returns window has passed. You will still need it to refund old WooPayments or Stripe orders, because refunds go back through the gateway that took the payment. The copy also holds anything you chose not to migrate, such as old plugin logs or abandoned carts. After that, you decide whether to archive the database or delete it, and we hand over every export file either way.',
  },
];

const STAT_CARDS = [
  { num: '/product/', title: 'Every Old URL Mapped', desc: 'Each WooCommerce product, category and tag URL gets its own single-hop 301 to the new Shopify address.', icon: '🛡️' },
  { num: 'Fixed', title: 'Price Per Phase', desc: 'One written price per phase, agreed after scoping. Defects found in the cover period are fixed inside that price.', icon: '💰' },
  { num: 'Demo', title: 'Before You Sign', desc: 'Your own products running on a Shopify test store before any contract.', icon: '🛍️' },
  { num: 'Yours', title: 'Code and Data', desc: 'You own the theme code, the mapping sheet and every export file we produce.', icon: '⚡' },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Plugin Updates That Break Checkout',
    problem: 'A WooCommerce store often depends on plugins from many different vendors. One update to a payment, shipping or subscription plugin can break checkout until a developer rolls it back.',
    solution: 'Shopify runs checkout and core updates itself. Apps add features through Shopify\'s APIs instead of editing shared PHP, so one app update does not rewrite another app\'s files.',
  },
  {
    num: '02',
    title: 'Hosting That Slows Down When Sales Pick Up',
    problem: 'On WooCommerce, page speed depends on your hosting plan, caching setup and the size of the WordPress database. A sale or email blast can push a small server to its limit.',
    solution: 'Shopify hosts the store and its CDN, so Shopify, rather than your own server, absorbs traffic spikes. Speed work shifts to the theme, images and apps.',
  },
  {
    num: '03',
    title: 'Payments Spread Across Plugins',
    problem: 'WooPayments, Stripe, PayPal and buy-now-pay-later plugins each add their own settings, webhooks and update cycles to WordPress.',
    solution: 'Shopify Payments and Shop Pay are built into Shopify checkout. Other providers still work, with a Shopify transaction fee that varies by plan.',
  },
  {
    num: '04',
    title: 'Page Builders Your Team Avoids Touching',
    problem: 'Landing pages built in Elementor, Divi or shortcodes break when the theme or builder updates, so marketers wait for a developer.',
    solution: 'Shopify themes use sections and blocks that marketers can add, move and edit in the theme editor without code.',
  },
];

const PARTNERS = [
  'WooCommerce REST API',
  'WooPayments',
  'WooCommerce Subscriptions',
  'Yoast SEO',
  'Shopify',
  'Shopify Payments',
  'Shopify Subscriptions',
  'Judge.me',
];

const WORKING_STEPS = [
  {
    n: '01',
    t: 'Plugin and Data Audit',
    d: 'We list every active plugin, check whether orders sit in HPOS or wp_posts, count products, variants and attributes, and pull your indexed URLs from Search Console and a crawl.',
    icon: '🔍',
  },
  {
    n: '02',
    t: 'Export Through the REST API',
    d: 'We pull products, customers, orders, coupons and reviews from /wp-json/wc/v3, plus Yoast or Rank Math fields, into a mapping sheet you approve.',
    icon: '🧹',
  },
  {
    n: '03',
    t: 'Shopify Store Build',
    d: 'We build or adapt the theme, rebuild plugin features with apps or custom code, set up Shopify Payments, taxes and shipping profiles, and import in Shopify\'s order: products, then customers, then orders.',
    icon: '💻',
  },
  {
    n: '04',
    t: 'Redirect Map From /product/ to /products/',
    d: 'Every WooCommerce product, category, tag, post and page URL gets one 301 to its Shopify address, loaded by CSV and tested in bulk before launch.',
    icon: '🔗',
  },
  {
    n: '05',
    t: 'Final Sync and DNS Switch',
    d: 'We sync orders and customers created since the first import, switch DNS in a quiet hour, send password invites and watch live orders with a written rollback rule.',
    icon: '🚀',
  },
];

const EXPORT_CHECKLIST = [
  'Products and variations: built-in CSV exporter or REST API /products and /products/{id}/variations',
  'Product attributes and categories: REST API /products/attributes and /products/categories',
  'Customers: REST API /customers (WooCommerce\'s CSV exporter covers products only)',
  'Orders, refunds and order notes: REST API /orders, read from HPOS or wp_posts depending on your store',
  'Coupons: REST API /coupons, rebuilt as Shopify discounts',
  'Reviews: REST API /products/reviews, imported into Judge.me, Loox or Yotpo',
  'Yoast or Rank Math titles and descriptions: post meta, matched to Shopify search listing fields',
  'Active subscriptions: WooCommerce Subscriptions contracts plus the gateway that stores each card',
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
    jobTitle: 'Founder & CEO',
    url: 'https://factoryjet.com/about',
    sameAs: [
      'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
      'https://github.com/factoryjet-tech',
    ],
  },
  name: 'WooCommerce to Shopify Migration Services',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  serviceType: 'WooCommerce to Shopify and Shopify Plus Migration',
  description:
    'Migration from WooCommerce to Shopify or Shopify Plus: REST API export of products, customers, orders and reviews, subscription and payment changeover, and one-to-one 301 redirects from WooCommerce permalinks.',
  areaServed: ['US', 'GB', 'CA', 'AU'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Replatforming Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'WooCommerce to Shopify Migration',
        },
      },
    ],
  },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  url: 'https://factoryjet.com/replatforming/woocommerce-to-shopify',
  dateModified: PAGE_MODIFIED,
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    jobTitle: 'Founder & CEO',
    url: 'https://factoryjet.com/about',
    sameAs: [
      'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
      'https://github.com/factoryjet-tech',
    ],
  },
};

const ORG_SCHEMA = { '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' };

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/' },
    { '@type': 'ListItem', position: 2, name: 'Replatforming', item: 'https://factoryjet.com/replatforming' },
    { '@type': 'ListItem', position: 3, name: 'WooCommerce to Shopify', item: 'https://factoryjet.com/replatforming/woocommerce-to-shopify' },
  ],
};


const EVALUATION_CRITERIA = [
  {
    label: 'How do you read our order data?',
    factoryjet: 'We check HPOS versus wp_posts first, then export through the REST API so plugin fields are not missed.',
    traditional: 'A one-click app run against the product CSV, with customers and orders left for later.',
  },
  {
    label: 'What happens to /product/ URLs?',
    factoryjet: 'One 301 per old URL, keeping the WooCommerce slug as the Shopify handle where possible, tested in bulk.',
    traditional: 'Redirects for top pages only, or a catch-all to the homepage.',
  },
  {
    label: 'What about subscriptions?',
    factoryjet: 'Contracts imported with next billing dates checked, and a plan for each gateway that holds saved cards.',
    traditional: 'Subscribers asked to sign up again after launch.',
  },
  {
    label: 'How are we billed, and who owns the work?',
    factoryjet: 'A fixed price per phase in writing, a demo on your data before you sign, and you own the code and exports.',
    traditional: 'Hourly billing with the scope set as the work goes.',
  },
];

export default function WooCommerceToShopifyPage() {
  return (
    <>
      <script id="woocommerce-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="woocommerce-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="woocommerce-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="woocommerce-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="woocommerce-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

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
                  <span>WooCommerce to Shopify Migration</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  WooCommerce to Shopify Migration Services
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 12px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  A WooCommerce to Shopify migration moves your products, customers, orders, reviews and blog from WordPress into Shopify, then 301-redirects every old /product/ and /product-category/ URL to its new /products/ or /collections/ address. FactoryJet runs it as a fixed-price project: export through the WooCommerce REST API, clean the data, rebuild plugin features, swap WooPayments for Shopify Payments, and switch over with a tested rollback plan.
                </p>

                <p style={{ fontSize: '13px', color: '#6E6E80', margin: '0 0 28px' }}>
                  Updated 22 October 2026. Vendor facts checked against WooCommerce and Shopify documentation on that date.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Get a WooCommerce Migration Audit" region="us" btnVariant="primary-dark" />
                  <a href="#woo-shopify-table" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>See What Moves and How</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame (Edge-to-Edge) */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/replatforming/woocommerce-hero-store-owner-desk.webp"
                  alt="A man in a grey shirt at a wooden desk looking at a laptop with a rising line chart, shelves of plain boxes behind him"
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
              <div className="rv-ticker-label">WooCommerce and Shopify Tools We Work With</div>
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
                  src="/images/replatforming/woocommerce-team-data-audit.webp"
                  alt="Two engineers at a desk, a woman holding a pen toward a monitor that shows a grid of table cells with some shaded green"
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
                  A WordPress Store, Rebuilt on Shopify
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  FactoryJet has served 500+ businesses since 2014 and is a registered Shopify Partner. On a WooCommerce move, most of the work sits in the data: plugin fields hidden in post meta, orders split between old and new tables, and URLs that all change. We also build and maintain WooCommerce stores through our{' '}
                  <Link href="/services/woocommerce-development" style={linkStyle}>WooCommerce development</Link>{' '}
                  team, so we read the source store from the inside. Larger moves run through our{' '}
                  <Link href="/services/shopify-migration-agency" style={linkStyle}>Shopify migration agency</Link>{' '}
                  service.
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
                  <ModalCTAButton label="Book a WooCommerce Scoping Call" region="us" btnVariant="primary-dark" />
                </div>
              </div>

            </div>

            {/* Answer-First Definitions for AI Overviews & Search Engines */}
            <div style={{ marginTop: '56px', display: 'grid', gap: '18px' }}>
              <AnswerFirstDefinition
                term="WooCommerce order storage: HPOS vs wp_posts"
                definition="High-Performance Order Storage (HPOS) keeps WooCommerce orders in dedicated tables (wc_orders, wc_order_addresses, wc_order_operational_data and wc_orders_meta) and has been the default for new stores since WooCommerce 8.2. Before that, orders lived in the general WordPress wp_posts and wp_postmeta tables. A migration has to read whichever store your site actually uses."
                keyTakeaways={[
                  'Check WooCommerce, Settings, Advanced, Features to see which order storage is active',
                  'Some older plugins still write order data only to wp_postmeta',
                  'The REST API reads the active storage, which is why we export through it',
                ]}
                citationSource="WooCommerce HPOS documentation, checked 22 Oct 2026"
              />
              <AnswerFirstDefinition
                term="WooCommerce product export: CSV vs REST API"
                definition="WooCommerce's built-in CSV tool imports, exports and bulk-updates products only, and its upload size is set by your server. The WooCommerce REST API at /wp-json/wc/v3 covers products, variations, customers, orders, refunds, coupons and reviews, using a consumer key and secret tied to a WordPress user. Results are paginated at 10 items per request by default."
                keyTakeaways={[
                  'Product CSV handles simple, variable, grouped, external, virtual and downloadable products',
                  'Customers and orders need the REST API or a plugin export',
                  'Large exports are paged and rate-limited to stay inside your host\'s limits',
                ]}
                citationSource="WooCommerce CSV importer and REST API docs, checked 22 Oct 2026"
              />
              <AnswerFirstDefinition
                term="WooCommerce permalinks to Shopify handles"
                definition="WooCommerce product URLs follow the pattern /product/slug by default, with categories at /product-category/ and tags at /product-tag/. Shopify serves products at /products/handle and collections at /collections/handle, and those paths are fixed. Every WooCommerce product and category URL therefore changes and needs its own 301 redirect."
                keyTakeaways={[
                  'Keep the WooCommerce slug as the Shopify handle so only the prefix changes',
                  'Shopify allows 100,000 redirects on standard plans and 20,000,000 on Plus',
                  'Shopify follows a redirect only when the old path is broken',
                ]}
                citationSource="WooCommerce permalink docs and Shopify Help Center, checked 22 Oct 2026"
              />
            </div>
          </div>
        </section>

        {/* ── 04. WHY LEAVE WOOCOMMERCE (RITOVEX NUMBERED SERVICES ROWS) ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Reasons Stores Move</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Why WooCommerce Stores Switch to Shopify
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                On WooCommerce, your team owns hosting, plugin updates and security. These are the four problems we hear most on scoping calls:
              </p>
              <p style={{ marginTop: '10px', fontSize: '14.5px', lineHeight: 1.6, color: '#494852' }}>
                If you are not yet sure you should move, read our{' '}
                <Link href="/comparisons/shopify-vs-woocommerce" style={linkStyle}>
                  Shopify vs WooCommerce comparison
                </Link>{' '}
                first. Selling to trade buyers too? See{' '}
                <Link href="/services/shopify-plus-agency" style={linkStyle}>
                  Shopify Plus development
                </Link>
                .
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
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#8E8E9F', letterSpacing: '0.08em' }}>On WooCommerce:</span>
                      <p style={{ fontSize: '13.5px', color: '#494852', margin: '4px 0 0', lineHeight: 1.5 }}>{p.problem}</p>
                    </div>
                    <div>
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#FF5622', letterSpacing: '0.08em' }}>On Shopify:</span>
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
              source="woocommerce_to_shopify_page"
              defaultSource="woocommerce"
              defaultTarget="shopify"
            />
          </div>
        </section>

        {/* ── 05. THE ENTERPRISE ARCHITECTURE BLUEPRINT (AUTO-ROTATING TABS) ── */}

        <div id="architecture-blueprint">
          <EnterpriseArchitectureBlueprint
            badge="// WOOCOMMERCE TO SHOPIFY DATA FLOW"
            title="How WooCommerce Data Reaches Shopify"
            subtitle="Products, orders and customers leave WordPress through the REST API, get mapped to Shopify products, metafields and customers, and land in the order Shopify recommends."
            legacySource="WooCommerce on WordPress (MySQL)"
            targetStack="Shopify or Shopify Plus"
            ctaLabel="Scope My WooCommerce Move"
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
        <section id="woo-shopify-table" className="pp-sec" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Sourced Vendor Facts</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                What Moves From WooCommerce to Shopify, and How
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Each row comes from WooCommerce or Shopify documentation, checked on 22 October 2026.
              </p>
            </div>

            <div style={{ overflowX: 'auto', borderRadius: '14px', border: '1px solid #E6E6EC' }}>
              <table className="pp-table" style={{ margin: 0, width: '100%', background: '#FFFFFF' }}>
                <thead style={{ background: '#F6F6F9' }}>
                  <tr>
                    <th style={{ color: '#141414', fontWeight: 700 }}>Data or feature</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>On WooCommerce today</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>On Shopify after the move</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>Source (checked 22 Oct 2026)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Product export</td>
                    <td>Built-in CSV tool for products only: simple, variable, grouped, external, virtual and downloadable. Upload size set by your server.</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Product CSV import, or the Store Migration app reading the WooCommerce product CSV</td>
                    <td><a href={SRC.wooCsv} target="_blank" rel="noopener noreferrer" style={linkStyle}>WooCommerce CSV docs</a>, <a href={SRC.shopifyWooGuide} target="_blank" rel="noopener noreferrer" style={linkStyle}>Shopify WooCommerce guide</a></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Orders</td>
                    <td>HPOS tables by default since WooCommerce 8.2; older stores use wp_posts and wp_postmeta</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Imported last: products first, then customers, then historical orders</td>
                    <td><a href={SRC.wooHpos} target="_blank" rel="noopener noreferrer" style={linkStyle}>WooCommerce HPOS docs</a>, <a href={SRC.shopifyTransfer} target="_blank" rel="noopener noreferrer" style={linkStyle}>Shopify transfer guide</a></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>API access</td>
                    <td>REST API at /wp-json/wc/v3 with a consumer key and secret; 10 items per page by default</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Shopify API listed as a migration route alongside CSV and apps</td>
                    <td><a href={SRC.wooRest} target="_blank" rel="noopener noreferrer" style={linkStyle}>WooCommerce REST API docs</a></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Options and variants</td>
                    <td>Variable products built from product attributes</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Up to three options and 2,048 variants per product</td>
                    <td><a href={SRC.shopifyVariants} target="_blank" rel="noopener noreferrer" style={linkStyle}>Shopify variants help</a></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>URLs</td>
                    <td>/product/slug, /product-category/ and /product-tag/ by default</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Fixed /products/ and /collections/ paths; 100,000 redirects, or 20,000,000 on Plus</td>
                    <td><a href={SRC.wooPermalinks} target="_blank" rel="noopener noreferrer" style={linkStyle}>WooCommerce permalinks</a>, <a href={SRC.shopifyRedirects} target="_blank" rel="noopener noreferrer" style={linkStyle}>Shopify redirects</a></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Customer accounts</td>
                    <td>Passwords stored hashed in WordPress</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Passwords cannot be migrated by CSV; customer CSV files must be 15 MB or smaller</td>
                    <td><a href={SRC.shopifyCustomers} target="_blank" rel="noopener noreferrer" style={linkStyle}>Shopify customer import help</a></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Reviews</td>
                    <td>Native reviews stored as WordPress comments</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>No direct migration with Shopify&apos;s tools; import through Judge.me, Loox or Yotpo</td>
                    <td><a href={SRC.shopifyWooGuide} target="_blank" rel="noopener noreferrer" style={linkStyle}>Shopify WooCommerce guide</a></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Card payments (US)</td>
                    <td>WooPayments: 2.9% + $0.30 per US card, no monthly fee for online payments</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Shopify Payments, or a third-party provider with an added fee of 2% on Basic to 0.2% on Plus</td>
                    <td><a href={SRC.wooPayFees} target="_blank" rel="noopener noreferrer" style={linkStyle}>WooPayments fees</a>, <a href={SRC.shopifyPricing} target="_blank" rel="noopener noreferrer" style={linkStyle}>Shopify pricing</a></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Subscriptions</td>
                    <td>WooCommerce Subscriptions extension, with automatic renewals through 25+ supported gateways</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Shopify Subscriptions app, which supports importing and exporting subscription contracts</td>
                    <td><a href={SRC.wooSubs} target="_blank" rel="noopener noreferrer" style={linkStyle}>WooCommerce Subscriptions</a>, <a href={SRC.shopifySubs} target="_blank" rel="noopener noreferrer" style={linkStyle}>Shopify Subscriptions help</a></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Shopify Plus plan</td>
                    <td>Not applicable: WooCommerce is a free plugin; hosting and extensions are billed separately</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>$2,300 a month on a three-year term or $2,500 on a one-year term (US)</td>
                    <td><a href={SRC.shopifyPlusPlan} target="_blank" rel="noopener noreferrer" style={linkStyle}>Shopify Help Center</a></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ maxWidth: '960px', margin: '40px auto 0' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#141414', margin: '0 0 12px' }}>
                The WooCommerce export list we work from
              </h3>
              <p style={{ fontSize: '14.5px', color: '#494852', lineHeight: 1.6, margin: '0 0 12px' }}>
                Endpoints are from the{' '}
                <a href={SRC.wooRest} target="_blank" rel="noopener noreferrer" style={linkStyle}>WooCommerce REST API documentation</a>.
                Each item becomes a tab in the mapping sheet you sign off before import.
              </p>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14.5px', color: '#494852', lineHeight: 1.7 }}>
                {EXPORT_CHECKLIST.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p style={{ fontSize: '14.5px', color: '#494852', lineHeight: 1.6, margin: '16px 0 0' }}>
                Moving content as well as the store? Read{' '}
                <Link href="/replatforming/wordpress-to-shopify" style={linkStyle}>WordPress to Shopify</Link>
                . Comparing every source platform first? Start at the{' '}
                <Link href="/replatforming" style={linkStyle}>replatforming hub</Link>
                {' '}or the{' '}
                <Link href="/tools/replatforming-cost-calculator" style={linkStyle}>replatforming cost calculator</Link>
                . For the SEO side, Google&apos;s{' '}
                <a href={SRC.googleSiteMove} target="_blank" rel="noopener noreferrer" style={linkStyle}>site move guide</a>
                {' '}and our post on{' '}
                <Link href="/blog/ecommerce-replatforming-without-losing-seo-2026" style={linkStyle}>replatforming without losing SEO</Link>
                {' '}cover the redirect rules we follow.
              </p>
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
                  <span>How the Move Runs</span>
                </div>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 18px' }}>
                  Five Steps From WordPress to Shopify
                </h2>
                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  You approve the data mapping sheet before anything is imported, and the redirect map is tested in bulk before DNS changes.
                </p>
                <ModalCTAButton label="Start Your WooCommerce Audit" region="us" btnVariant="primary-dark" />
              </div>

              {/* Right Column Step Cards */}
              <ol style={{ display: 'flex', flexDirection: 'column', gap: '16px', listStyle: 'none', margin: 0, padding: 0 }}>
                {WORKING_STEPS.map((s) => (
                  <li key={s.n} style={{ background: '#FFFFFF', border: '1px solid #E6E6EC', borderRadius: '14px', padding: '24px 28px', transition: 'all 0.25s' }}>
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
                  </li>
                ))}
              </ol>

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
                <span>Questions for Any Agency</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Four Questions to Ask a WooCommerce Migration Agency
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Put these to every agency you talk to, including us. The answers show who has moved a WooCommerce store before.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid #E6E6EC', borderRadius: '16px', overflow: 'hidden', maxWidth: '960px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.4fr 1.4fr', background: '#141414', color: '#FFFFFF', padding: '16px 24px', fontWeight: 700, fontSize: '13.5px' }}>
                <div>Question</div>
                <div style={{ color: '#FF5622' }}>FactoryJet answer</div>
                <div style={{ color: '#A0A0B0' }}>Warning sign</div>
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
            <SeoLinkEquityChecklist sourcePlatform="woocommerce" />
          </div>
        </section>

        <CommerceRoiCalculator city="Enterprise Store" region="us" />

        <FAQ
          eyebrow="WOOCOMMERCE MIGRATION FAQ"
          headline="WooCommerce to Shopify Migration Questions"
          lead="Answers to what store owners and WordPress developers ask us before moving a WooCommerce store to Shopify or Shopify Plus:"
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
              <span>Fixed Price Per Phase</span>
            </div>

            <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.12, margin: '0 0 20px' }}>
              Ready to Move Your WooCommerce Store?
            </h2>

            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Send your store URL, product count and a list of active plugins. We will check your order storage, plugin list and URL count, then send a written migration plan with a fixed price per phase.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <ModalCTAButton label="Schedule WooCommerce Discovery Call" region="us" btnVariant="primary-light" />
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}

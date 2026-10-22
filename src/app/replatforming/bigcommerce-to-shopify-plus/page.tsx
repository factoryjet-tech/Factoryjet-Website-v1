import type { Metadata } from 'next';
import type { ReactNode } from 'react';
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

const PAGE_TITLE = 'BigCommerce to Shopify Plus Migration & Replatforming';
const PAGE_DESCRIPTION =
  "BigCommerce to Shopify Plus migration: how the Catalog API export, modifiers, customers, orders and the 301 map move, with both platforms' fees.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: 'https://factoryjet.com/replatforming/bigcommerce-to-shopify-plus',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'BigCommerce to Shopify Plus Migration Services' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/replatforming/bigcommerce-to-shopify-plus' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* Vendor sources, all opened and read on 22 Oct 2026. */
const SRC = {
  bcPricing: 'https://www.bigcommerce.com/pricing/',
  bcCatalogApi: 'https://docs.bigcommerce.com/developer/api-reference/rest/admin/catalog/products',
  bcOptions: 'https://docs.bigcommerce.com/developer/learn/courses/catalog-rest-api/options/options',
  shopPlusPricing: 'https://www.shopify.com/plus/pricing',
  shopPricing: 'https://www.shopify.com/pricing',
  shopVariants: 'https://help.shopify.com/en/manual/products/variants/2048-variant-limit',
  shopRedirects: 'https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect',
  shopMigration: 'https://help.shopify.com/en/manual/migrating-to-shopify/store-migration',
  shopB2b: 'https://help.shopify.com/en/manual/b2b',
};

const SRC_LINK_STYLE = { color: '#B23E13', textDecoration: 'underline', textUnderlineOffset: '2px' } as const;

function SourceLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={SRC_LINK_STYLE}>
      {children}
    </a>
  );
}

const FAQ_CATEGORIES = [
  { key: 'basics', label: 'Why Move & What It Involves' },
  { key: 'data', label: 'Catalog, Modifiers & Customers' },
  { key: 'checkout', label: 'Checkout & Payments' },
  { key: 'cost', label: 'Fees & Pricing' },
  { key: 'seo', label: 'URLs, SEO & Launch' },
  { key: 'b2b', label: 'B2B & Multi-Storefront' },
];

const FAQ_ITEMS = [
  {
    category: 'basics',
    question: 'Is moving from BigCommerce to Shopify Plus worth it for a growing brand?',
    answer:
      'It is worth it when you want B2B and direct-to-consumer sales in one admin, more control over checkout, or Shopify POS Pro for retail stores. It is less clear-cut if your BigCommerce plan already covers what you need and your team knows Stencil well. Shopify Plus lists $2,300 a month on a 3-year term and from $2,500 on a 1-year term, so put that next to your current BigCommerce invoice before you decide.',
  },
  {
    category: 'basics',
    question: 'What does Shopify BigCommerce replatforming involve, step by step?',
    answer:
      'Replatforming means moving your catalog, customers, orders, content and URLs off BigCommerce, then rebuilding the storefront, checkout rules and integrations on Shopify Plus. Data comes out through the BigCommerce Catalog API or a CSV export. The Stencil theme is rebuilt in Liquid, each app is replaced or retired, and every old URL gets a single-hop 301. BigCommerce stays live until the Shopify store passes test orders.',
  },
  {
    category: 'basics',
    question: 'How long does a BigCommerce to Shopify Plus migration take?',
    answer:
      'Most BigCommerce moves fit our 5 to 8 week band for advanced builds, because they include data migration and often B2B pricing or subscriptions. A headless or heavily custom storefront runs 8 to 14 weeks. What stretches a timeline is a large set of modifiers, checkout scripts that need rebuilding, and ERP connections, so we count those on the scoping call before we give you a date.',
  },
  {
    category: 'basics',
    question: 'Do we have to rebuild our BigCommerce Stencil theme?',
    answer:
      'Yes. Stencil themes are built from Handlebars templates, and Shopify themes use Liquid with Online Store 2.0 sections, so no theme code carries over. We rebuild the design as a Shopify theme your team can rearrange in the theme editor. Layouts your analytics show are working stay; pages nobody visits are dropped rather than rebuilt.',
  },
  {
    category: 'basics',
    question: 'What happens to the apps we use on BigCommerce?',
    answer:
      'Each app goes on a list with what it does, what data it holds, and its Shopify replacement: a Shopify App Store app, a native Shopify feature, or custom code. Reviews, loyalty points and subscriptions hold customer data, so each gets its own export and import plan. Apps that only add a widget to the theme are rebuilt in the new theme and need no data move.',
  },
  {
    category: 'data',
    question: 'How do BigCommerce variant options and modifier options map to Shopify?',
    answer:
      'BigCommerce splits product choices in two. Variant options create SKUs with tracked stock. Modifier options change how an item is made or shipped, and BigCommerce documents that you cannot track inventory against modifier values. Variant options map to Shopify options and variants. Modifiers such as engraving text or gift wrap become line-item properties, a product options app, or a Shopify Function, never extra variants.',
  },
  {
    category: 'data',
    question: 'What if a BigCommerce product has more variants or options than Shopify allows?',
    answer:
      'Shopify allows up to 2,048 variants and up to three options per product. Most BigCommerce products fit. If one has a fourth option or more combinations than that, we split it into several products shown as a combined listing, or move the extra choice to a modifier. Shopify also notes that some themes and apps do not support more than 100 variants, so we test those products in the new theme early.',
  },
  {
    category: 'data',
    question: 'How do we export products from BigCommerce for the migration?',
    answer:
      'For a small, simple catalog the product CSV export in the BigCommerce control panel is enough. For anything with modifiers, custom fields, price lists or many images, we pull from the BigCommerce Catalog REST API, which returns products, variants, options, modifiers, images and custom fields as structured data. We script that pull so it can run again for the final top-up just before launch.',
  },
  {
    category: 'data',
    question: 'Can customer accounts and order history move from BigCommerce to Shopify?',
    answer:
      'Customers, addresses and past orders can move; passwords cannot. Shopify\'s migration guide lists CSV files or the API for customers, and migration apps or the Order API for historical orders. Passwords are stored as one-way hashes on BigCommerce, so each customer sets a new one from an account invite email. We send those invites in batches after launch so support is not flooded on day one.',
  },
  {
    category: 'data',
    question: 'What happens to BigCommerce custom fields, brands and categories?',
    answer:
      'Custom fields become typed Shopify metafields, so the theme and search filters can read them. Brands become the product vendor field, or a brand metaobject if you want proper brand pages. Categories become collections. Shopify collections are flat, so a nested BigCommerce tree becomes one collection per level plus a navigation menu. Every mapping goes into a spreadsheet you sign off before the first import.',
  },
  {
    category: 'data',
    question: 'Do BigCommerce gift certificates and store credit balances transfer?',
    answer:
      'The balances transfer, but each code needs checking. We export every open BigCommerce gift certificate with its code and remaining value, then recreate it as a Shopify gift card so the customer keeps the same amount. Store credit is recreated in the form your finance team books it. Any balance that does not reconcile before cutover goes on a short list for manual handling.',
  },
  {
    category: 'checkout',
    question: 'Can we customize checkout on Shopify Plus the way we did with BigCommerce scripts?',
    answer:
      'Yes, through different tools. Shopify Plus checkout is changed with checkout extensions and Shopify Functions, which Shopify lists among its Plus features, rather than by editing checkout code directly. Custom fields, delivery rules, discounts and payment method rules are all possible. Scripts you added to the BigCommerce checkout through Script Manager do not carry over, so each is rebuilt or replaced by an app.',
  },
  {
    category: 'checkout',
    question: 'Can we keep our current payment provider after leaving BigCommerce?',
    answer:
      'Often, yes. Shopify Plus works with Shopify Payments and with many third-party providers. Shopify\'s pricing page says third-party transaction fees may apply when you use a provider other than Shopify Payments. BigCommerce\'s pricing page says it charges a monthly fee on self-service plans for orders through Open Payment Providers. Model both before you choose, using your real order volume.',
  },
  {
    category: 'checkout',
    question: 'Does Shopify Plus handle our peak sale traffic?',
    answer:
      'Shopify\'s Plus pricing page states 10K+ checkouts per minute with unlimited bandwidth, transactions and SKUs. That covers the checkout side. The parts we load-test before a sale are the ones you add: apps that call outside services, custom Functions, and any ERP connection that has to accept a burst of orders. We run those tests on the development store before launch, not during your first sale.',
  },
  {
    category: 'cost',
    question: 'How much does a BigCommerce to Shopify Plus migration cost?',
    answer:
      'It depends on SKU count, how many modifiers and custom fields you use, custom checkout logic, the number of apps to replace, and integrations such as an ERP. FactoryJet quotes a fixed price in writing after a short scoping call, priced per phase. You see a working demo on your own BigCommerce data before you sign, and you own the code when the project ends.',
  },
  {
    category: 'cost',
    question: 'How do BigCommerce plan fees compare with Shopify Plus fees?',
    answer:
      'BigCommerce lists Core at $39, Growth at $105 and Scale at $399 a month, with Performance starting at $1,499 a month billed annually. Shopify Plus lists $2,300 a month on a 3-year term, from $2,500 on a 1-year term, or a variable platform fee for more complex businesses. Payment fees sit on top on both platforms, so compare full invoices, not list prices.',
  },
  {
    category: 'cost',
    question: 'Does BigCommerce charge more as our sales grow?',
    answer:
      'Yes. BigCommerce sets your plan from trailing twelve-month GMV, which it defines as gross order value minus 10%. When you pass a threshold, such as $30K on Core or $100K on Growth, it upgrades you to the next plan. On Scale and Performance an overage rate applies to orders above the plan limit instead. Shopify Plus is a term fee or a variable platform fee agreed with Shopify.',
  },
  {
    category: 'seo',
    question: 'Will we lose Google rankings moving from BigCommerce to Shopify Plus?',
    answer:
      'Rankings can wobble for a few weeks after any platform move. What protects them is a complete redirect map. We collect every URL from the BigCommerce XML sitemap, Search Console and backlink data, map each one to its Shopify page, and load them as single-hop 301s before DNS changes. Shopify Plus allows up to 20,000,000 redirects, so even very large catalogs fit.',
  },
  {
    category: 'seo',
    question: 'What do BigCommerce URLs look like, and how do they map to Shopify?',
    answer:
      'BigCommerce lets each store set its own URL format, so product pages may sit at /product-name/, under /products/, or under a category path. Shopify fixes products at /products/handle and collections at /collections/handle. We keep each old slug as the Shopify handle wherever we can, so most redirects follow one pattern, and we list every exception in the map for you to check.',
  },
  {
    category: 'seo',
    question: 'How do you handle BigCommerce filter URLs such as ?_bc_fsnf=1?',
    answer:
      'We do not redirect them one by one. Shopify\'s own redirect help uses a URL like /brands/dell.html?_bc_fsnf=1 as its example of query strings that might not redirect as expected. We redirect the clean category or brand URL, set canonical tags on Shopify filter pages, and let the parameter versions drop out of the index on their own.',
  },
  {
    category: 'seo',
    question: 'Do BigCommerce blog posts and web pages move to Shopify?',
    answer:
      'Yes. BigCommerce blog posts become Shopify blog articles under /blogs/news/ or another blog handle you choose, and web pages become Shopify pages under /pages/. Titles, meta descriptions, images and alt text move with them. Because both paths change, every post and page gets its own 301 in the redirect map.',
  },
  {
    category: 'seo',
    question: 'Can we see the Shopify store working before we switch off BigCommerce?',
    answer:
      'Yes. We build on a Shopify development store, load your real catalog, and run test orders through payments, tax, shipping and any ERP connection. You click through it on a preview link and sign off. Only then do we freeze BigCommerce changes, top up orders and customers placed since the test import, and move DNS.',
  },
  {
    category: 'b2b',
    question: 'Can BigCommerce B2B Edition features move to Shopify Plus B2B?',
    answer:
      'Most of them. Shopify B2B sets up buyers as companies with their own pricing, payment terms and catalogs, and one store can serve both B2B and direct-to-consumer buyers. BigCommerce price lists become Shopify B2B catalogs and company accounts become Shopify companies. Quote requests and buyer approval chains work differently on each side, so we check them feature by feature in the audit.',
  },
  {
    category: 'b2b',
    question: 'We run several BigCommerce storefronts. How does that work on Shopify Plus?',
    answer:
      'You choose between one Shopify store using Markets for countries and languages, or separate expansion stores for each brand. One store is simpler to run and keeps one catalog. Separate stores suit brands with different products, teams or checkout rules. We make this call in the audit, before any data moves, because it decides how the catalog and redirects are built.',
  },
];

const STAT_CARDS = [
  { num: '2,048', title: 'Variants per Product', desc: 'Shopify\'s current limit, with up to three options per product. We flag any BigCommerce product over it.', icon: '🧩' },
  { num: '20M', title: 'Redirects on Plus', desc: 'Shopify Plus allows up to 20,000,000 URL redirects, enough for every old BigCommerce URL.', icon: '🔗' },
  { num: '5-8 wks', title: 'Typical Build', desc: 'Our usual range for a migration with data, B2B or subscriptions. Headless runs 8 to 14 weeks.', icon: '📅' },
  { num: '1-to-1', title: 'Redirect Map', desc: 'Every old URL mapped to its new page with a single-hop 301 redirect.', icon: '🛡️' },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Plan Upgrades Tied to Trailing Sales',
    problem: 'BigCommerce moves a store to the next plan when trailing twelve-month GMV passes a threshold, and charges an overage on Scale and Performance above the plan limit.',
    solution: 'Shopify Plus is a term fee or a variable platform fee agreed up front, so the platform line in your budget is known before the year starts.',
  },
  {
    num: '02',
    title: 'Stencil Edits That Wait for a Developer',
    problem: 'Stencil themes are Handlebars templates. Moving a banner, adding a block or building a campaign page often means a code change and a theme push.',
    solution: 'Online Store 2.0 sections let your marketing team add, reorder and preview page blocks in the Shopify theme editor without touching code.',
  },
  {
    num: '03',
    title: 'Retail Stores Running on Separate Tools',
    problem: 'Selling in physical stores alongside a BigCommerce site usually means a third-party POS and a sync tool between the two.',
    solution: 'Shopify POS Pro is listed as a Plus feature, so in-store and online sales share one product list, one stock count and one customer record.',
  },
  {
    num: '04',
    title: 'Checkout Changes Built on Injected Scripts',
    problem: 'Custom checkout behaviour on BigCommerce is often added through Script Manager snippets that break quietly when the checkout changes underneath them.',
    solution: 'Shopify Plus uses checkout extensions and Shopify Functions, which run inside Shopify\'s checkout and keep working through Shopify\'s own updates.',
  },
];

const PARTNERS = [
  'BigCommerce Catalog API',
  'Shopify Plus',
  'Shop Pay',
  'Klaviyo',
  'Gorgias',
  'Yotpo',
  'Recharge',
  'Celigo',
];

const WORKING_STEPS = [
  {
    n: '01',
    t: 'Catalog API Pull & App Audit',
    d: 'We pull your full catalog through the BigCommerce Catalog API and list every variant option, modifier, custom field, price list and app on one sheet.',
    icon: '🔍',
  },
  {
    n: '02',
    t: 'Field-by-Field Mapping Sign-Off',
    d: 'Each BigCommerce field gets a Shopify home: variant, metafield, line-item property, collection or metaobject. You sign the sheet before anything is imported.',
    icon: '🗺️',
  },
  {
    n: '03',
    t: 'Liquid Theme Build & App Replacement',
    d: 'We rebuild the Stencil design as an Online Store 2.0 theme on a development store and set up the Shopify replacement for each app.',
    icon: '💻',
  },
  {
    n: '04',
    t: 'Full Test Import',
    d: 'Products, customers, orders, blog posts and gift card balances are loaded in full. Products over 2,048 variants or three options are split or reworked here.',
    icon: '📊',
  },
  {
    n: '05',
    t: 'Redirect Map From Sitemap, Search Console & Backlinks',
    d: 'Every BigCommerce URL is mapped to its Shopify page and loaded as a single-hop 301. Filter URLs with query strings are handled with canonicals.',
    icon: '🔗',
  },
  {
    n: '06',
    t: 'Test Orders & Your Sign-Off',
    d: 'We run test orders through payments, tax, shipping and any ERP link, and you review the store on a preview link.',
    icon: '✅',
  },
  {
    n: '07',
    t: 'Freeze, Top-Up & DNS Cutover',
    d: 'BigCommerce changes are frozen, orders and customers since the test import are topped up, DNS moves, and account invites go out in batches.',
    icon: '🚀',
  },
];

const EXPORT_ITEMS = [
  { t: 'Products, variants, options, modifiers, images and custom fields', d: 'BigCommerce Catalog REST API, pulled by script so it can rerun for the final top-up.' },
  { t: 'Simple catalogs with no modifiers', d: 'The product CSV export in the BigCommerce control panel, cleaned and reshaped to the Shopify product CSV format.' },
  { t: 'Customers and saved addresses', d: 'BigCommerce Customers API, loaded into Shopify by CSV or API. Passwords do not move.' },
  { t: 'Historical orders', d: 'BigCommerce Orders API, loaded through the Shopify Order API or a migration app, as Shopify\'s migration guide lists.' },
  { t: 'Blog posts and web pages', d: 'Pulled with titles, meta descriptions, images and alt text, then rebuilt as Shopify articles and pages.' },
  { t: 'Gift certificates, reviews, loyalty points', d: 'Each exported from the app or feature that holds it, then reloaded into its Shopify replacement.' },
  { t: 'The full URL list', d: 'The BigCommerce XML sitemap, Search Console page reports and backlink data, merged and de-duplicated.' },
];

const URL_PATTERNS = [
  { from: '/product-name/ or /products/product-name/', to: '/products/product-name' },
  { from: '/category/ and nested /parent/child/', to: '/collections/child plus a menu entry for the parent' },
  { from: '/brands/brand-name.html', to: '/collections/brand-name' },
  { from: '/blog/post-name/', to: '/blogs/news/post-name' },
  { from: '/shipping-returns/ and other web pages', to: '/pages/shipping-returns' },
  { from: 'Filter URLs with ?_bc_fsnf=1', to: 'No one-to-one redirect; canonical on the Shopify collection' },
];

const PLATFORM_RISKS = [
  'Modifiers with price adjusters: each one has to be rebuilt so the price still changes at checkout.',
  'Customer group pricing: maps to Shopify B2B catalogs or automatic discounts, and the two behave differently at checkout.',
  'Script Manager snippets: tracking, chat and checkout scripts are listed and rebuilt one by one, because none of them carry over.',
  'Multi-Storefront setups: each BigCommerce storefront needs a decision on Markets versus a separate expansion store.',
  'Products over Shopify\'s 2,048 variant or three option limit: split into combined listings before import, not after.',
  'Password resets: every returning customer sets a new password, so the invite email and its timing are planned.',
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
  name: 'BigCommerce to Shopify Plus Migration Services',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  serviceType: 'E-Commerce Replatforming & Migration',
  description:
    'Migration from BigCommerce to Shopify Plus: Catalog API extraction, modifier and custom field mapping, customer and order history import, Liquid theme rebuild, and a one-to-one single-hop 301 redirect map.',
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
  description: 'How a BigCommerce store moves to Shopify Plus: data export, modifier mapping, fees, URL patterns and a 7-step process.',
  url: 'https://factoryjet.com/replatforming/bigcommerce-to-shopify-plus',
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
    { '@type': 'ListItem', position: 3, name: 'BigCommerce to Shopify Plus', item: 'https://factoryjet.com/replatforming/bigcommerce-to-shopify-plus' },
  ],
};


const EVALUATION_CRITERIA = [
  {
    label: 'Catalog Extraction',
    factoryjet: 'A scripted pull from the BigCommerce Catalog API that reruns for the final top-up before launch.',
    traditional: 'A one-off CSV export that drops modifiers and custom fields without anyone noticing.',
  },
  {
    label: 'Modifier Handling',
    factoryjet: 'Every BigCommerce modifier listed and rebuilt as a line-item property, an app or a Shopify Function.',
    traditional: 'Modifiers flattened into variants until products hit Shopify\'s variant limit.',
  },
  {
    label: 'Redirect Coverage',
    factoryjet: 'Every URL from the sitemap, Search Console and backlinks mapped one-to-one as single-hop 301s.',
    traditional: 'Top pages redirected by hand and the rest sent to the homepage.',
  },
  {
    label: 'Commercial Terms',
    factoryjet: 'Fixed price per phase, a demo on your own data before you sign, and you own the code.',
    traditional: 'Hourly billing with the scope left open and no working store until late in the project.',
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
                  BigCommerce to Shopify Plus Migration, Planned From Your Catalog Up
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 12px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  Moving from BigCommerce to Shopify Plus takes most stores 5 to 8 weeks. We pull your catalog through the BigCommerce Catalog API, turn variant options into Shopify variants and modifiers into line-item properties or apps, move customers and order history, and load a one-to-one 301 for every old URL. Shopify Plus lists $2,300 a month on a 3-year term.
                </p>

                <p style={{ fontSize: '13px', color: '#6E6E80', margin: '0 0 28px', fontFamily: 'var(--pp-mono)' }}>
                  Updated 22 October 2026 · By Bhavesh Barot, Founder
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
                  src="/images/replatforming/bigcommerce-hero-ecommerce-lead-desk.webp"
                  alt="A woman in a navy blazer at a wooden desk looking at a laptop that shows plain bars and a rising line"
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
              <div className="rv-ticker-label">Platforms &amp; Tools We Work With on BigCommerce Moves</div>
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
                  src="/images/replatforming/bigcommerce-team-catalogue-audit.webp"
                  alt="Two colleagues at a wooden desk, one pointing a pencil at a monitor that shows rows of grey rectangles and coloured squares"
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
                  Modifiers, Custom Fields and URLs First. Theme Second.
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  FactoryJet has served 500+ businesses since 2014 and is a registered Shopify Partner. On a BigCommerce move the work that decides the outcome is the modifier list, the custom fields, the B2B price lists and the redirect map, so our audit starts there. You see the new store running on your own data before you sign.
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
                definition="Moving from BigCommerce to Shopify Plus means pulling products, variants, modifiers, custom fields, customers and orders out of BigCommerce through the Catalog REST API or a CSV export, reshaping them into Shopify products, variants, metafields and orders, and loading them into a Shopify Plus store that passes test orders before any DNS change."
                keyTakeaways={[
                  'Variant options become Shopify variants; modifier options become line-item properties, an app or a Shopify Function',
                  'Custom fields become typed Shopify metafields that themes and filters can read',
                  'Passwords cannot move, so returning customers set a new one from an account invite',
                ]}
                citationSource="BigCommerce Catalog API docs and Shopify store migration guide, checked 22 Oct 2026"
              />
              <AnswerFirstDefinition
                term="BigCommerce URL to Shopify 301 Redirect Mapping"
                definition="BigCommerce lets each store choose its own URL format, so the redirect map starts from the live sitemap rather than a template. Shopify fixes product URLs at /products/handle and collections at /collections/handle, so every BigCommerce product, category, brand, blog and page URL needs its own single-hop 301."
                keyTakeaways={[
                  'Shopify Plus allows up to 20,000,000 URL redirects',
                  'Shopify redirects only fire for URLs that no longer load a page',
                  'Filter URLs with query strings such as ?_bc_fsnf=1 are handled with canonical tags, not redirects',
                ]}
                citationSource="Shopify Help Center, Creating and managing URL redirects, checked 22 Oct 2026"
              />
              <AnswerFirstDefinition
                term="BigCommerce Plan Fees vs Shopify Plus Fees"
                definition="BigCommerce prices plans by trailing twelve-month GMV and moves stores up a plan as sales cross each threshold. Shopify Plus charges a term-based monthly fee or a variable platform fee for more complex businesses. Payment processing fees sit on top of both."
                keyTakeaways={[
                  'BigCommerce lists Core $39, Growth $105 and Scale $399 a month; Performance starts at $1,499 a month billed annually',
                  'Shopify Plus lists $2,300 a month on a 3-year term and from $2,500 on a 1-year term',
                  'BigCommerce defines GMV as gross order value minus 10% when setting plan thresholds',
                ]}
                citationSource="BigCommerce pricing page and Shopify Plus pricing page, checked 22 Oct 2026"
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
                Why Brands Move Off BigCommerce
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                The four reasons BigCommerce merchants give us most often, and what changes on Shopify Plus:
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

        <div id="architecture-blueprint">
          <EnterpriseArchitectureBlueprint
            badge="// BIGCOMMERCE TO SHOPIFY PLUS BLUEPRINT"
            title="Enterprise Architecture: Replatforming BigCommerce to Shopify Plus"
            subtitle="Catalog API extraction, a Liquid rebuild of your Stencil theme, checkout extensions in place of checkout scripts, and a staged DNS cutover."
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
                BigCommerce vs. Shopify Plus: Fees, Limits and Rules
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Vendor facts only. Each row links to the vendor&apos;s own page, and every page was checked on 22 October 2026.
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
                    <th style={{ color: '#141414', fontWeight: 700 }}>Source (checked 22 Oct 2026)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Listed plan price</td>
                    <td>Core $39, Growth $105, Scale $399 a month; Performance from $1,499 a month billed annually</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>$2,300 a month on a 3-year term, from $2,500 on a 1-year term, or a variable platform fee</td>
                    <td>Compare full invoices including payment fees, not list prices alone</td>
                    <td><SourceLink href={SRC.bcPricing}>BigCommerce pricing</SourceLink>; <SourceLink href={SRC.shopPlusPricing}>Shopify Plus pricing</SourceLink></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>How the plan level is set</td>
                    <td>Trailing twelve-month GMV (gross order value minus 10%); automatic upgrade past thresholds such as $30K on Core or $100K on Growth</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Term fee, or a variable platform fee for more complex business structures</td>
                    <td>BigCommerce cost moves with sales; Shopify Plus cost is agreed with Shopify up front</td>
                    <td><SourceLink href={SRC.bcPricing}>BigCommerce pricing FAQ</SourceLink>; <SourceLink href={SRC.shopPlusPricing}>Shopify Plus pricing</SourceLink></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Product choices</td>
                    <td>Variant options create SKUs with tracked stock; modifier options cannot track inventory</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Up to 2,048 variants and up to three options per product</td>
                    <td>Modifiers need a planned Shopify home before the first import</td>
                    <td><SourceLink href={SRC.bcOptions}>BigCommerce options docs</SourceLink>; <SourceLink href={SRC.shopVariants}>Shopify variant limits</SourceLink></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Third-party payment providers</td>
                    <td>Monthly fee on self-service plans for orders through Open Payment Providers</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Third-party transaction fees may apply if you do not use Shopify Payments</td>
                    <td>Model gateway costs on both platforms with your real order volume</td>
                    <td><SourceLink href={SRC.bcPricing}>BigCommerce pricing</SourceLink>; <SourceLink href={SRC.shopPricing}>Shopify pricing</SourceLink></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>URL redirects</td>
                    <td>Store-defined URL formats; faceted filter URLs carry query strings such as ?_bc_fsnf=1</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Up to 20,000,000 redirects on Plus; query-string URLs might not redirect as expected</td>
                    <td>Redirect clean URLs one-to-one; handle filter URLs with canonicals</td>
                    <td><SourceLink href={SRC.shopRedirects}>Shopify URL redirects help</SourceLink></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Checkout capacity</td>
                    <td>Set by your BigCommerce plan and contract</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>10K+ checkouts per minute with unlimited bandwidth, transactions and SKUs</td>
                    <td>Load-test the parts you add (apps, Functions, ERP links), not Shopify&apos;s checkout</td>
                    <td><SourceLink href={SRC.shopPlusPricing}>Shopify Plus pricing</SourceLink></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>B2B selling</td>
                    <td>Sold as B2B Edition; check your current contract for what is included</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Native B2B with companies, catalogs and payment terms; one store can serve B2B and D2C</td>
                    <td>Price lists and company accounts map to Shopify catalogs and companies</td>
                    <td><SourceLink href={SRC.shopB2b}>Shopify B2B help</SourceLink></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── BIGCOMMERCE EXPORT, URL PATTERNS & RISKS ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', paddingTop: 0 }}>
          <div className="pp-wrap" style={{ maxWidth: '960px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 14px' }}>
              What Comes Out of BigCommerce, and How
            </h2>
            <p style={{ fontSize: '16px', color: '#494852', lineHeight: 1.6, margin: '0 0 20px' }}>
              Each data type has its own export route. The <SourceLink href={SRC.bcCatalogApi}>BigCommerce Catalog REST API</SourceLink> carries the catalog, and <SourceLink href={SRC.shopMigration}>Shopify&apos;s store migration guide</SourceLink> lists how each type loads on the Shopify side.
            </p>
            <ul style={{ margin: '0 0 36px', paddingLeft: '22px', display: 'grid', gap: '10px' }}>
              {EXPORT_ITEMS.map((e) => (
                <li key={e.t} style={{ fontSize: '15px', color: '#494852', lineHeight: 1.55 }}>
                  <strong style={{ color: '#141414' }}>{e.t}:</strong> {e.d}
                </li>
              ))}
            </ul>

            <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#141414', margin: '0 0 12px' }}>
              BigCommerce URL patterns in the 301 map
            </h3>
            <p style={{ fontSize: '16px', color: '#494852', lineHeight: 1.6, margin: '0 0 16px' }}>
              BigCommerce stores set their own URL format, so check your sitemap against these common patterns. The Shopify side is fixed by Shopify.
            </p>
            <ul style={{ margin: '0 0 36px', paddingLeft: '22px', display: 'grid', gap: '10px' }}>
              {URL_PATTERNS.map((u) => (
                <li key={u.from} style={{ fontSize: '15px', color: '#494852', lineHeight: 1.55 }}>
                  <code style={{ fontFamily: 'var(--pp-mono)', fontSize: '13.5px', color: '#141414' }}>{u.from}</code> to {u.to}
                </li>
              ))}
            </ul>

            <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#141414', margin: '0 0 12px' }}>
              Risks specific to BigCommerce moves
            </h3>
            <ul style={{ margin: '0 0 28px', paddingLeft: '22px', display: 'grid', gap: '10px' }}>
              {PLATFORM_RISKS.map((r) => (
                <li key={r} style={{ fontSize: '15px', color: '#494852', lineHeight: 1.55 }}>{r}</li>
              ))}
            </ul>

            <p style={{ fontSize: '16px', color: '#494852', lineHeight: 1.6, margin: 0 }}>
              Still choosing a platform? Read our <Link href="/comparisons/shopify-plus-vs-bigcommerce" style={SRC_LINK_STYLE}>Shopify Plus vs BigCommerce comparison</Link>, or run your numbers in the <Link href="/tools/replatforming-cost-calculator" style={SRC_LINK_STYLE}>replatforming cost calculator</Link>. For the build itself, see our <Link href="/services/shopify-migration-agency" style={SRC_LINK_STYLE}>Shopify migration service</Link>, <Link href="/services/shopify-plus-agency" style={SRC_LINK_STYLE}>Shopify Plus development</Link>, <Link href="/services/shopify-plus-b2b" style={SRC_LINK_STYLE}>Shopify Plus B2B</Link> and <Link href="/services/ecommerce-erp-integration" style={SRC_LINK_STYLE}>ERP integration</Link> pages. Running NetSuite behind your store? The <Link href="/replatforming/netsuite-suitecommerce-to-shopify-plus" style={SRC_LINK_STYLE}>SuiteCommerce to Shopify Plus guide</Link> covers the ERP side, and the <Link href="/replatforming" style={SRC_LINK_STYLE}>replatforming hub</Link> lists every source platform.
            </p>
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
                  Our 7-Step BigCommerce Migration Process
                </h2>
                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  Each step has a sign-off gate. The field map is signed before import, the full test import is checked before the redirect map is loaded, and test orders pass before DNS moves.
                </p>
                <ModalCTAButton label="Start Your BigCommerce Audit" region="us" btnVariant="primary-dark" />
              </div>

              {/* Right Column Step Cards */}
              <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
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
                <span>Vendor Due Diligence</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Evaluating Migration Partners: What to Ask
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Four questions to put to any agency quoting a BigCommerce to Shopify Plus move:
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
          lead="What BigCommerce merchants ask before moving to Shopify Plus, answered from the vendors' own documentation:"
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
              Send us your store URL, SKU count and app list. We reply with a scoped plan and a fixed price per phase in writing, and show you a demo on your own data before you sign.
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

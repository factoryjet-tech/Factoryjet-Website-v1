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
// estimator's default output still renders in the static HTML for crawlers.
// (The "Migration Guarantees" box was removed on 2026-09-17: unverifiable claims.)
// 2026-10-22: partner marquee no longer claims partner tiers we do not hold; it
// lists the platforms and tools we work with.
const ReplatformingScopeEstimator = dynamic(
  () => import('@/components/commerce/ReplatformingScopeEstimator'),
  { ssr: true }
);

const PAGE_MODIFIED = '2026-10-22';
const PAGE_TITLE = 'Ecommerce Replatforming Services | FactoryJet';
const PAGE_DESCRIPTION =
  'Ecommerce replatforming services to Shopify and Shopify Plus from Magento, WooCommerce, BigCommerce, NetSuite, SFCC and Wix, with a one-to-one 301 map.';

/* Official sources. Each was fetched and read on 22 Oct 2026. */
const SRC = {
  adobeLifecycle: 'https://experienceleague.adobe.com/en/docs/commerce-operations/release/planning/lifecycle-policy',
  wooCsv: 'https://woocommerce.com/document/product-csv-importer-exporter/',
  wooRest: 'https://woocommerce.github.io/woocommerce-rest-api-docs/',
  bcCatalog: 'https://docs.bigcommerce.com/docs/rest-catalog/products',
  nsExport: 'https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N663983.html',
  sfccOcapi: 'https://developer.salesforce.com/docs/commerce/b2c-commerce/references/b2c-commerce-ocapi/get-started-with-ocapi.html',
  sfccScapi: 'https://developer.salesforce.com/docs/commerce/commerce-api/guide/get-started.html',
  wpExport: 'https://wordpress.org/documentation/article/tools-export-screen/',
  sqspExport: 'https://support.squarespace.com/hc/en-us/articles/206566687-Exporting-your-site',
  shopifyTransfer: 'https://help.shopify.com/en/manual/migrating-to-shopify/transfer-data',
  shopifyVariants: 'https://help.shopify.com/en/manual/products/variants/add-variants',
  shopifyRedirects: 'https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect',
  shopifyCustomers: 'https://help.shopify.com/en/manual/customers/import-export-customers',
  shopifyB2b: 'https://help.shopify.com/en/manual/b2b',
  shopifyPlusPlan: 'https://help.shopify.com/en/manual/intro-to-shopify/pricing-plans/plans-features/shopify-plus-plan',
  googleSiteMove: 'https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes',
} as const;

const linkStyle = { color: '#B23E13', textDecoration: 'underline' } as const;
const extLink = { target: '_blank', rel: 'noopener noreferrer', style: linkStyle } as const;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: 'https://factoryjet.com/replatforming',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet ecommerce replatforming services' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/replatforming' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const FAQ_CATEGORIES = [
  { key: 'basics', label: 'Replatforming Basics' },
  { key: 'b2b', label: 'B2B and ERP' },
  { key: 'seo', label: 'SEO and Redirects' },
  { key: 'data', label: 'Data and Accounts' },
  { key: 'process', label: 'Process and Timeline' },
  { key: 'pricing', label: 'Pricing and Scope' },
];

const FAQ_ITEMS = [
  {
    category: 'basics',
    question: 'What are ecommerce replatforming services?',
    answer:
      'Ecommerce replatforming services move a live online store from one commerce platform to another. The work covers products, customers, past orders, content, apps, integrations such as your ERP, and every public URL. A good provider also plans the cutover so orders keep flowing, and redirects old addresses so search engines and customers land on the right new page. FactoryJet moves stores to Shopify and Shopify Plus.',
  },
  {
    category: 'basics',
    question: 'When is replatforming worth it, and when should we stay where we are?',
    answer:
      'Replatform when the current system blocks revenue or carries a deadline: a version leaving vendor support, a checkout you cannot change, or an ERP link that breaks every update. Stay if the pain is mainly design or speed, because a theme rebuild or performance work on the current platform costs less. We say which one applies on the scoping call, before any proposal.',
  },
  {
    category: 'basics',
    question: 'Which ecommerce platforms do you migrate from?',
    answer:
      'We move stores from Magento and Adobe Commerce, WooCommerce, BigCommerce, NetSuite SuiteCommerce, Salesforce Commerce Cloud, WordPress, Squarespace and Wix, each with its own guide linked on this page. The destination is Shopify or Shopify Plus, either with a Shopify theme or as a headless build. We do not take on moves away from Shopify to other platforms.',
  },
  {
    category: 'basics',
    question: 'What is the difference between website replatforming and ecommerce replatforming?',
    answer:
      'Website replatforming moves pages and content from one CMS to another, for example WordPress to a new CMS. Ecommerce replatforming also moves the parts that take money: catalog, prices, customer accounts, order history, tax and shipping rules, payment providers and integrations. That extra data is why an ecommerce move needs a data mapping sheet and a cutover plan on top of a content export.',
  },
  {
    category: 'basics',
    question: 'Should we replatform to Shopify or Shopify Plus?',
    answer:
      'Pick Plus when you need higher limits or features that only Plus offers, such as checkout extensions, or when redirect volume is large: Shopify lists 20,000,000 URL redirects on Plus against 100,000 on other plans. Plus costs $2,300 a month on a three-year term or $2,500 on a one-year term in the US, per Shopify\'s help center. Many mid-size stores start on a standard plan.',
  },
  {
    category: 'b2b',
    question: 'What makes B2B ecommerce replatforming harder than a retail store move?',
    answer:
      'B2B stores carry data that retail stores do not: company accounts with several buyers, customer-specific price lists, quantity rules, payment terms, and orders that must reach the ERP the same way they do today. Each of these has to be mapped field by field and tested with real buyer logins. We run a B2B order through the new store and into the ERP before cutover.',
  },
  {
    category: 'b2b',
    question: 'Can Shopify handle company accounts and customer-specific prices?',
    answer:
      'Yes. Shopify\'s B2B features let you set up business customers as companies and personalize pricing, currency, products, payment and shipping methods for each one, from the same store as your retail sales or a separate B2B store. Draft orders, Shopify Flow and ERP integrations are also listed in Shopify\'s B2B help. We map your current price groups into Shopify catalogs before import.',
  },
  {
    category: 'b2b',
    question: 'What happens to our ERP connection when we replatform?',
    answer:
      'The ERP usually stays and the storefront changes, so the connection is rebuilt against Shopify\'s APIs. We have connected stores to Odoo, NetSuite, SAP Business One and ERPNext. Before launch we test the full loop: a web order lands in the ERP, stock levels flow back, and shipment tracking returns to the customer. Our ERP integration service covers this in more detail.',
  },
  {
    category: 'seo',
    question: 'How do you protect SEO during an ecommerce replatform?',
    answer:
      'We crawl the old site and pull indexed URLs from Search Console, map each one to a single new URL, load 301 redirects before DNS moves, carry over titles, descriptions and structured data, and crawl the new store before launch. Google\'s site move guide recommends permanent redirects and warns against redirect chains. Some ranking movement in the first weeks is normal, and we watch Search Console daily.',
  },
  {
    category: 'seo',
    question: 'Why should every redirect be a single hop?',
    answer:
      'A chain such as old page to interim page to final page makes crawlers follow extra steps, and Google\'s site move guidance advises against chains. Chains often appear when a store has been replatformed before and the old redirects are kept as they are. We flatten every chain so each old URL points straight to its final Shopify address with one 301.',
  },
  {
    category: 'seo',
    question: 'How many redirects can a Shopify store hold?',
    answer:
      'Shopify\'s help center lists a limit of 100,000 URL redirects on standard plans and 20,000,000 on Plus. Shopify only follows a redirect when the old path is broken, and it does not let you redirect its fixed paths such as /products and /collections. Large catalogs with many filter and parameter URLs are the main reason a store needs the Plus limit.',
  },
  {
    category: 'data',
    question: 'What data can be moved to Shopify in a replatform?',
    answer:
      'Products, customers, historical orders, gift cards, store credit, blog posts and pages, per Shopify\'s data transfer guide. Shopify says to import products first, then customers, then historical orders, so orders link to the right products and buyers. Settings such as tax rules, shipping rates and payment providers are rebuilt by hand, because no platform exports them in a form Shopify can read.',
  },
  {
    category: 'data',
    question: 'Can customer passwords move from the old platform?',
    answer:
      'No. Shopify\'s help center says you cannot migrate customer passwords from another store using a CSV, and the old platform stores them hashed. Customers move with their emails, addresses, tags and marketing consent, then get an invite to set a new password. On Shopify Plus, Multipass can sign customers in from an outside system, which some B2B stores use during a phased move.',
  },
  {
    category: 'data',
    question: 'What if our products have more options than Shopify allows?',
    answer:
      'Shopify allows three options and up to 2,048 variants per product. Stores coming from Magento, WooCommerce or BigCommerce often have four or more attributes on one product. We decide per product line: split into separate products, move an attribute into a metafield, or offer rare choices as line-item properties. The decision goes into the mapping sheet you approve before import.',
  },
  {
    category: 'data',
    question: 'Can a migration app do the whole replatform for us?',
    answer:
      'For a small, simple catalog, often yes. Shopify\'s transfer guide lists its Store Migration app, CSV import, third-party apps, Shopify Partners and the API as routes. Apps struggle with custom attributes, B2B pricing, subscriptions, ERP links and full redirect maps. We often use an app for the bulk product copy and write scripts for the rest.',
  },
  {
    category: 'process',
    question: 'How long does ecommerce replatforming take?',
    answer:
      'FactoryJet delivers a custom-theme store in 3 to 5 weeks, a migration with subscriptions, B2B or heavy data cleanup in 5 to 8 weeks, and a headless or custom build in 8 to 14 weeks. ERP work and the number of integrations decide where a project lands in those ranges. We confirm the plan in writing before work starts.',
  },
  {
    category: 'process',
    question: 'Will our store go offline during cutover?',
    answer:
      'We plan every cutover so the old store keeps taking orders until DNS moves. Everything is built and tested on a private Shopify store first. Just before launch we sync the latest orders and customers, switch DNS in a quiet hour and watch orders live. A written rollback rule says when to switch back if checkout or order sync fails.',
  },
  {
    category: 'process',
    question: 'Can we see the new store working before we commit?',
    answer:
      'Yes. FactoryJet builds a working demo on your own product data before you sign, so you can click through real products, prices and variants on Shopify. It is the fastest way to find gaps such as a missing attribute or a B2B price rule that does not map. The demo also shows how we work before any contract.',
  },
  {
    category: 'process',
    question: 'Should we redesign the store during the replatform or copy the old design?',
    answer:
      'Copy first if the current design converts and the move has a deadline, such as an end-of-support date. Redesign during the move if the old theme is part of the problem, because building the theme twice costs more than building it once. A middle path is to launch on a lightly adapted Shopify theme and redesign in a second phase.',
  },
  {
    category: 'pricing',
    question: 'How much do ecommerce replatforming services cost?',
    answer:
      'Cost depends on catalog size, the number of integrations, B2B rules, redirects and whether you want a new design. FactoryJet quotes a fixed price in writing after a short scoping call, split by phase. For published market ranges by source platform, read our Shopify Plus migration cost guide, and try the replatforming cost calculator for a first rough scope.',
  },
  {
    category: 'pricing',
    question: 'Do you bill hourly or a fixed price?',
    answer:
      'Fixed price per phase. We scope the source platform, data and integrations up front, then agree a written price for each phase. Defects found during the cover period agreed before work starts are fixed inside that price. Changes you ask for later are quoted and approved one at a time, and ongoing support is optional with no monthly minimum.',
  },
  {
    category: 'pricing',
    question: 'Who owns the code and data after the replatform?',
    answer:
      'You do. The Shopify theme code, any custom apps or scripts we write, the data mapping sheet, the redirect map and every export file belong to you. You can take the store to another agency or an in-house team at any time without asking us for access or permission.',
  },
];

const SPOKES = [
  {
    slug: 'magento-to-shopify',
    name: 'Magento / Adobe Commerce to Shopify Plus',
    badge: 'Adobe Support Dates',
    desc: 'Published cost and timeline ranges, Adobe Commerce end-of-support dates and an 11-phase runbook for moving Magento or Adobe Commerce to Shopify Plus.',
    icon: '⚡',
  },
  {
    slug: 'netsuite-suitecommerce-to-shopify-plus',
    name: 'NetSuite SuiteCommerce to Shopify Plus',
    badge: 'ERP Stays',
    desc: 'Keep NetSuite as the ERP and record of truth while the storefront and B2B buyer portal move to Shopify Plus.',
    icon: '🔄',
  },
  {
    slug: 'bigcommerce-to-shopify-plus',
    name: 'BigCommerce to Shopify Plus',
    badge: 'Options and Modifiers',
    desc: 'Map BigCommerce variant options, modifiers and bulk pricing rules to Shopify variants, metafields and discounts.',
    icon: '🛍️',
  },
  {
    slug: 'woocommerce-to-shopify',
    name: 'WooCommerce to Shopify',
    badge: 'WordPress Data',
    desc: 'Export through the WooCommerce REST API, move subscriptions and WooPayments, and redirect every /product/ URL.',
    icon: '🧹',
  },
  {
    slug: 'salesforce-commerce-cloud-to-shopify-plus',
    name: 'Salesforce Commerce Cloud to Shopify Plus',
    badge: 'Cartridges to Apps',
    desc: 'Rebuild SFCC cartridge logic as Shopify apps and Functions, and move catalogs and customers out through the Commerce APIs.',
    icon: '☁️',
  },
  {
    slug: 'wordpress-to-shopify',
    name: 'WordPress to Shopify',
    badge: 'Content and Store',
    desc: 'Move blog archives, landing pages and a product catalog from WordPress to Shopify, or keep WordPress for content only.',
    icon: '📝',
  },
  {
    slug: 'squarespace-to-shopify',
    name: 'Squarespace to Shopify',
    badge: 'Store Pages',
    desc: 'Squarespace site exports leave out store pages and product blocks, so products move on their own path.',
    icon: '🎨',
  },
  {
    slug: 'wix-to-shopify',
    name: 'Wix to Shopify',
    badge: 'Growing Catalog',
    desc: 'Move Wix products, customers and reviews into Shopify when the catalog, channels or apps outgrow Wix Stores.',
    icon: '🚀',
  },
];

const COMPARISONS = [
  { href: '/comparisons/shopify-plus-vs-magento', label: 'Shopify Plus vs Magento' },
  { href: '/comparisons/shopify-plus-vs-bigcommerce', label: 'Shopify Plus vs BigCommerce' },
  { href: '/comparisons/shopify-vs-woocommerce', label: 'Shopify vs WooCommerce' },
  { href: '/comparisons/headless-commerce-vs-monolithic', label: 'Headless commerce vs monolithic' },
];

const STAT_CARDS = [
  { num: 'Staged', title: 'Cutover Plan', desc: 'The old store keeps selling until DNS moves, with a written rollback rule.', icon: '🛡️' },
  { num: 'Single-Hop', title: '301 Redirects', desc: 'Every indexed URL gets one redirect straight to its new Shopify address.', icon: '🔗' },
  { num: 'Two-Way', title: 'ERP Order and Stock Sync', desc: 'Orders flow into the ERP and stock flows back, tested before launch.', icon: '⚡' },
  { num: 'Fixed Price', title: 'Per Phase', desc: 'A written price for each phase, agreed after scoping, with a demo first.', icon: '💰' },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'A Platform Version Leaving Vendor Support',
    problem: 'Adobe lists the end of standard support for Adobe Commerce 2.4.6 as 11 August 2026, now passed, and for 2.4.7 as 31 May 2027. Staying means paid upgrades or running without full vendor support.',
    solution: 'Shopify updates the platform itself, so there is no version to upgrade. Your team spends that budget on the store instead of the software.',
  },
  {
    num: '02',
    title: 'Marketing Changes That Need a Developer',
    problem: 'On older platforms, a new landing page or promotion block often needs a developer and a deploy.',
    solution: 'Shopify themes use sections and blocks that marketers add and edit in the theme editor, so most page changes ship without code.',
  },
  {
    num: '03',
    title: 'B2B Buyers Stuck on Email and Phone Orders',
    problem: 'When the store cannot show each company its own prices and terms, trade buyers fall back to emailing orders that staff key in by hand.',
    solution: 'Shopify B2B sets up buyers as companies with their own pricing, products, payment and shipping methods, on the same store as retail or a separate one.',
  },
  {
    num: '04',
    title: 'Fear of Losing Rankings and Order History',
    problem: 'Teams delay a move because they expect search traffic to drop, past orders to vanish, or warehouse stock to go out of sync.',
    solution: 'A one-to-one 301 map, historical order import in Shopify\'s recommended order, and an ERP sync tested end to end before launch.',
  },
];

const B2B_CHECKLIST = [
  'Company accounts, with every buyer login linked to the right company and location',
  'Customer-specific price lists and quantity rules, mapped to Shopify B2B catalogs',
  'Payment terms and approved payment methods per company',
  'Reorder history, so buyers can see and repeat past orders after launch',
  'ERP order, stock and invoice sync, tested with a real B2B order end to end',
  'Sales rep access to place orders on behalf of buyers',
];

const PARTNERS = [
  'Shopify Plus',
  'Adobe Commerce',
  'NetSuite',
  'BigCommerce',
  'WooCommerce',
  'Salesforce Commerce Cloud',
  'Klaviyo',
  'Cloudflare',
];

const WORKING_STEPS = [
  {
    n: '01',
    t: 'Data and Integration Audit',
    d: 'We count products, variants, customers, orders and indexed URLs, list every app and integration, and note what the source platform cannot export.',
    icon: '🔍',
  },
  {
    n: '02',
    t: 'Mapping Sheet and ERP Plan',
    d: 'Every source field gets a Shopify destination: product, variant, metafield, customer, company or order. You approve the sheet before import.',
    icon: '⚙️',
  },
  {
    n: '03',
    t: 'Shopify Store Build',
    d: 'We build or adapt the Shopify theme, rebuild app and checkout features, then import in Shopify\'s order: products, customers, orders.',
    icon: '💻',
  },
  {
    n: '04',
    t: 'Crawl and 301 Redirect Map',
    d: 'We crawl the old site, add Search Console URLs, map each to one new address, load the redirects and test them in bulk.',
    icon: '🔗',
  },
  {
    n: '05',
    t: 'Final Sync and Launch',
    d: 'We sync orders and customers created since the first import, switch DNS in a quiet hour, and confirm live orders reach the ERP.',
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
    jobTitle: 'Founder & CEO',
    url: 'https://factoryjet.com/about',
    sameAs: [
      'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
      'https://github.com/factoryjet-tech',
    ],
  },
  name: 'Ecommerce Replatforming Services',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  serviceType: 'Ecommerce Replatforming to Shopify and Shopify Plus',
  description:
    'Ecommerce replatforming from Magento, NetSuite SuiteCommerce, BigCommerce, WooCommerce, Salesforce Commerce Cloud, WordPress, Squarespace and Wix to Shopify or Shopify Plus, with data mapping, ERP integration, one-to-one 301 redirects and a staged cutover.',
  areaServed: ['US', 'GB', 'CA', 'AU'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Replatforming Services',
    itemListElement: SPOKES.map((s) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: s.name,
      },
    })),
  },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  url: 'https://factoryjet.com/replatforming',
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
  ],
};


const EVALUATION_CRITERIA = [
  {
    label: 'Data mapping',
    factoryjet: 'A field-by-field mapping sheet you approve before import, with scripts for anything an app cannot move.',
    traditional: 'A migration app run once, with gaps found by customers after launch.',
  },
  {
    label: 'Redirects',
    factoryjet: 'One 301 per indexed URL, chains flattened, tested in bulk before DNS moves.',
    traditional: 'Redirects for top pages only, or a catch-all to the homepage.',
  },
  {
    label: 'ERP and warehouse',
    factoryjet: 'Order, stock and tracking sync rebuilt against Shopify\'s APIs and tested with a real order.',
    traditional: 'Nightly CSV uploads left in place, with stock that drifts between syncs.',
  },
  {
    label: 'Commercial terms',
    factoryjet: 'Fixed price per phase, a demo on your data before you sign, and you own the code.',
    traditional: 'Open hourly billing with scope set as the work goes.',
  },
];

export default function ReplatformingHubPage() {
  return (
    <>
      <script id="rp-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="rp-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="rp-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="rp-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="rp-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

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
                  <span>Ecommerce Replatforming Services</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  Ecommerce Replatforming Without Losing What You Built
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 12px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  Ecommerce replatforming services move a live store to a new platform: products, customers, past orders, content, integrations and every URL. FactoryJet moves stores from Magento, WooCommerce, BigCommerce, NetSuite SuiteCommerce, Salesforce Commerce Cloud, WordPress, Squarespace and Wix to Shopify or Shopify Plus, with a one-to-one 301 redirect map, ERP links rebuilt, and a working demo on your own data before you sign.
                </p>

                <p style={{ fontSize: '13px', color: '#6E6E80', margin: '0 0 28px' }}>
                  Updated 22 October 2026. Platform facts checked against vendor documentation on that date.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Get a Migration Audit" region="us" btnVariant="primary-dark" />
                  <a href="#migration-spokes" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>Explore Platform Paths</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame (Edge-to-Edge) */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/replatforming/replatforming-hero-architects.webp"
                  alt="A man gesturing at a whiteboard beside a woman holding a notebook"
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
              <div className="rv-ticker-label">Platforms and Tools We Migrate Between</div>
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
                  src="/images/replatforming/replatforming-team-review.webp"
                  alt="FactoryJet senior migration engineers auditing catalog data models and ERP integrations"
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
                  The Storefront Is the Easy Part
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  FactoryJet has served 500+ businesses since 2014, with 97% of projects delivered on time, and is a registered Shopify Partner. We treat a replatform as three jobs: moving data, keeping URLs, and keeping the ERP in step. The Shopify build itself runs through our{' '}
                  <Link href="/services/shopify-migration-agency" style={linkStyle}>Shopify migration agency</Link>{' '}
                  and{' '}
                  <Link href="/services/shopify-plus-agency" style={linkStyle}>Shopify Plus development</Link>{' '}
                  teams, and the ERP side through{' '}
                  <Link href="/services/ecommerce-erp-integration" style={linkStyle}>ecommerce ERP integration</Link>
                  .
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
                term="Staged ecommerce cutover"
                definition="A staged cutover builds and tests the new store in private while the old store keeps taking orders. Products, customers and orders are imported early, a final sync copies anything created since, and DNS moves in a quiet hour. A written rollback rule says when to point the domain back if checkout or order sync fails."
                keyTakeaways={[
                  'The old store stays live until the moment DNS changes',
                  'Shopify recommends importing products first, then customers, then historical orders',
                  'Rollback is decided by a written rule, not on the night',
                ]}
                citationSource="Shopify data transfer guide, checked 22 Oct 2026"
              />
              <AnswerFirstDefinition
                term="One-to-one 301 redirect map"
                definition="A one-to-one redirect map pairs every indexed URL on the old platform (products, categories, posts and pages) with a single matching URL on the new store, using a permanent 301 redirect with no chains. Google's site move guide recommends permanent redirects and advises against chains. On Shopify, redirects only fire when the old path is broken."
                keyTakeaways={[
                  'Shopify allows 100,000 redirects on standard plans and 20,000,000 on Plus',
                  'Catch-all redirects to the homepage throw away page-level relevance',
                  'Titles, descriptions and structured data move with each page',
                ]}
                citationSource="Google Search Central and Shopify Help Center, checked 22 Oct 2026"
              />
              <AnswerFirstDefinition
                term="Customer and order history migration"
                definition="Customer and order history migration copies buyer records, addresses and past order lines into Shopify so customers can see their history and your reports stay continuous. Passwords cannot move: Shopify says customer passwords cannot be migrated by CSV, so customers receive an invite to set a new one. Shopify customer CSV files must be 15 MB or smaller."
                keyTakeaways={[
                  'Past orders keep lifetime value and repeat-purchase reports intact',
                  'Account invites go out on launch day with a note on the login page',
                  'Subscription contracts move separately, with a plan for saved cards',
                ]}
                citationSource="Shopify Help Center, checked 22 Oct 2026"
              />
            </div>
          </div>
        </section>

        {/* ── 04. MIGRATION SPOKES DIRECTORY GRID ── */}
        <section id="migration-spokes" className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Migration Paths</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Choose Your Replatforming Path
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Each guide covers how data leaves that platform, what changes on Shopify, and the redirect patterns to expect:
              </p>
              <p style={{ marginTop: '10px', fontSize: '14.5px', lineHeight: 1.6, color: '#494852' }}>
                For published price ranges and timelines, read{' '}
                <Link href="/blog/shopify-plus-migration-cost-2026" style={linkStyle}>
                  Shopify Plus migration cost by platform
                </Link>
                . To keep your rankings through the move, read{' '}
                <Link href="/blog/ecommerce-replatforming-without-losing-seo-2026" style={linkStyle}>
                  ecommerce replatforming without losing SEO
                </Link>
                .
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {SPOKES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/replatforming/${s.slug}`}
                  style={{
                    display: 'block',
                    background: '#FFFFFF',
                    border: '1px solid #E6E6EC',
                    borderRadius: '16px',
                    padding: '28px',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease',
                  }}
                  className="hover:border-[#FF5622] hover:shadow-md"
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#F6F6F9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
                      {s.icon}
                    </div>
                    <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#B23E13', background: '#FFF0EB', padding: '4px 10px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {s.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#141414', margin: '0 0 8px', letterSpacing: '-0.015em' }}>
                    {s.name}
                  </h3>

                  <p style={{ fontSize: '13.5px', color: '#6E6E80', lineHeight: 1.55, margin: '0 0 16px' }}>
                    {s.desc}
                  </p>

                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13.5px', fontWeight: 700, color: '#FF5622' }}>
                    <span>Read the Migration Guide</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 10L10 2M10 2H4M10 2V8" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>

            {/* Source platform comparison table (vendor facts checked 22 Oct 2026) */}
            <div style={{ maxWidth: '1100px', margin: '56px auto 0' }}>
              <h3 style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.02em', margin: '0 0 10px' }}>
                Source Platform vs What Changes on Shopify
              </h3>
              <p style={{ fontSize: '14.5px', color: '#494852', lineHeight: 1.6, margin: '0 0 20px' }}>
                How data leaves each platform and what has to be rebuilt on Shopify or Shopify Plus. Every row links to the vendor page it came from, checked on 22 October 2026.
              </p>
              <div style={{ overflowX: 'auto', borderRadius: '14px', border: '1px solid #E6E6EC' }}>
                <table className="pp-table" style={{ margin: 0, width: '100%', background: '#FFFFFF' }}>
                  <thead style={{ background: '#F6F6F9' }}>
                    <tr>
                      <th style={{ color: '#141414', fontWeight: 700 }}>Moving from</th>
                      <th style={{ color: '#141414', fontWeight: 700 }}>How data leaves it</th>
                      <th style={{ color: '#141414', fontWeight: 700 }}>What changes on Shopify</th>
                      <th style={{ color: '#141414', fontWeight: 700 }}>Source (checked 22 Oct 2026)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="name" style={{ fontWeight: 700, color: '#141414' }}><Link href="/replatforming/magento-to-shopify" style={linkStyle}>Magento / Adobe Commerce</Link></td>
                      <td>Exports and APIs vary by version; Adobe lists end of standard support for 2.4.6 on 11 Aug 2026 and 2.4.7 on 31 May 2027</td>
                      <td>Attributes beyond three options become metafields or separate products; Shopify allows 2,048 variants per product</td>
                      <td><a href={SRC.adobeLifecycle} {...extLink}>Adobe lifecycle policy</a>, <a href={SRC.shopifyVariants} {...extLink}>Shopify variants</a></td>
                    </tr>
                    <tr>
                      <td className="name" style={{ fontWeight: 700, color: '#141414' }}><Link href="/replatforming/woocommerce-to-shopify" style={linkStyle}>WooCommerce</Link></td>
                      <td>Built-in CSV exports products only; customers and orders come out through the REST API at /wp-json/wc/v3</td>
                      <td>/product/ URLs become /products/; passwords cannot move by CSV, so customers reset them</td>
                      <td><a href={SRC.wooCsv} {...extLink}>WooCommerce CSV</a>, <a href={SRC.wooRest} {...extLink}>REST API</a>, <a href={SRC.shopifyCustomers} {...extLink}>Shopify customers</a></td>
                    </tr>
                    <tr>
                      <td className="name" style={{ fontWeight: 700, color: '#141414' }}><Link href="/replatforming/bigcommerce-to-shopify-plus" style={linkStyle}>BigCommerce</Link></td>
                      <td>The Catalog API manages products, categories, brands and bulk pricing rules</td>
                      <td>Bulk pricing rules are rebuilt as Shopify discounts or B2B catalog pricing</td>
                      <td><a href={SRC.bcCatalog} {...extLink}>BigCommerce Catalog API</a>, <a href={SRC.shopifyB2b} {...extLink}>Shopify B2B</a></td>
                    </tr>
                    <tr>
                      <td className="name" style={{ fontWeight: 700, color: '#141414' }}><Link href="/replatforming/netsuite-suitecommerce-to-shopify-plus" style={linkStyle}>NetSuite SuiteCommerce</Link></td>
                      <td>Saved search results export to CSV, Excel or PDF; NetSuite stays as the ERP</td>
                      <td>B2B buyers become Shopify companies with their own pricing, payment and shipping methods</td>
                      <td><a href={SRC.nsExport} {...extLink}>NetSuite help</a>, <a href={SRC.shopifyB2b} {...extLink}>Shopify B2B</a></td>
                    </tr>
                    <tr>
                      <td className="name" style={{ fontWeight: 700, color: '#141414' }}><Link href="/replatforming/salesforce-commerce-cloud-to-shopify-plus" style={linkStyle}>Salesforce Commerce Cloud</Link></td>
                      <td>Data is read through OCAPI or the Commerce API (SCAPI); sites run across sandbox, staging, development and production instances</td>
                      <td>Cartridge logic is rebuilt as apps and Functions; Plus holds up to 20,000,000 redirects</td>
                      <td><a href={SRC.sfccOcapi} {...extLink}>OCAPI</a>, <a href={SRC.sfccScapi} {...extLink}>Commerce API</a>, <a href={SRC.shopifyRedirects} {...extLink}>Shopify redirects</a></td>
                    </tr>
                    <tr>
                      <td className="name" style={{ fontWeight: 700, color: '#141414' }}><Link href="/replatforming/wordpress-to-shopify" style={linkStyle}>WordPress</Link></td>
                      <td>Tools, Export creates a WXR (XML) file of posts, pages, comments, custom fields and users</td>
                      <td>Posts move to Shopify blogs at new URLs, each with its own 301</td>
                      <td><a href={SRC.wpExport} {...extLink}>WordPress docs</a></td>
                    </tr>
                    <tr>
                      <td className="name" style={{ fontWeight: 700, color: '#141414' }}><Link href="/replatforming/squarespace-to-shopify" style={linkStyle}>Squarespace</Link></td>
                      <td>Site export is a WordPress-format XML file; store pages and product blocks are left out</td>
                      <td>Products move on a separate path from pages and the blog</td>
                      <td><a href={SRC.sqspExport} {...extLink}>Squarespace help</a></td>
                    </tr>
                    <tr>
                      <td className="name" style={{ fontWeight: 700, color: '#141414' }}><Link href="/replatforming/wix-to-shopify" style={linkStyle}>Wix</Link></td>
                      <td>Products, customers and orders exported to file or copied by a migration app</td>
                      <td>Import order on Shopify: products, then customers, then historical orders</td>
                      <td><a href={SRC.shopifyTransfer} {...extLink}>Shopify transfer guide</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p style={{ fontSize: '14.5px', color: '#494852', lineHeight: 1.6, margin: '20px 0 8px' }}>
                Still choosing between platforms? Our comparison pages set the options side by side:
              </p>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14.5px', color: '#494852', lineHeight: 1.7 }}>
                {COMPARISONS.map((c) => (
                  <li key={c.href}>
                    <Link href={c.href} style={linkStyle}>{c.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── INTERACTIVE REPLATFORMING SCOPE & TIMELINE ESTIMATOR ── */}
        <section className="pp-sec tint" id="replatforming-estimator">
          <div className="pp-wrap">
            <ReplatformingScopeEstimator
              source="replatforming_hub_main"
              defaultSource="magento"
              defaultTarget="shopify-plus"
            />
          </div>
        </section>

        {/* ── 05. WHY REPLATFORM (RITOVEX NUMBERED SERVICES ROWS) ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Core Business Drivers</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Why Brands Replatform Their Store
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                The four triggers we hear most often, and what changes on Shopify:
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
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#8E8E9F', letterSpacing: '0.08em' }}>The Problem Today:</span>
                      <p style={{ fontSize: '13.5px', color: '#494852', margin: '4px 0 0', lineHeight: 1.5 }}>{p.problem}</p>
                    </div>
                    <div>
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#FF5622', letterSpacing: '0.08em' }}>After the Move:</span>
                      <p style={{ fontSize: '13.5px', color: '#141414', fontWeight: 600, margin: '4px 0 0', lineHeight: 1.5 }}>{p.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ maxWidth: '960px', margin: '40px auto 0' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#141414', margin: '0 0 12px' }}>
                B2B ecommerce replatforming: what we test before launch
              </h3>
              <p style={{ fontSize: '14.5px', color: '#494852', lineHeight: 1.6, margin: '0 0 12px' }}>
                Trade buyers notice a broken price list on the first order. These items are checked with real buyer logins on the new store, using{' '}
                <a href={SRC.shopifyB2b} {...extLink}>Shopify B2B</a> features:
              </p>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14.5px', color: '#494852', lineHeight: 1.7 }}>
                {B2B_CHECKLIST.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── 06. THE ENTERPRISE ARCHITECTURE BLUEPRINT (AUTO-ROTATING TABS) ── */}

        <div id="architecture-blueprint">
          <EnterpriseArchitectureBlueprint
            badge="// REPLATFORMING DATA FLOW"
            title="How Data, ERP and Redirects Move to Shopify Plus"
            subtitle="See how product data, ERP orders, warehouse stock and the 301 redirect map stay in step during a staged cutover."
            legacySource="Current platform and ERP"
            targetStack="Shopify Plus"
            ctaLabel="Schedule Replatforming Architecture Call"
            region="us"
          />
        </div>

        {/* ── ZERO-DOWNTIME DATA MIGRATION FRAMEWORK MATRIX ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="pp-wrap">
            <ZeroDowntimeMigrationMatrix />
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
                  How a Replatform Runs, in Five Steps
                </h2>
                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  Data parity is checked against the mapping sheet before the build is signed off, and the redirect map is tested before DNS moves. Want a first estimate? Try the{' '}
                  <Link href="/tools/replatforming-cost-calculator" style={linkStyle}>replatforming cost calculator</Link>
                  . Going headless? See{' '}
                  <Link href="/services/headless-shopify-development" style={linkStyle}>headless Shopify development</Link>
                  .
                </p>
                <ModalCTAButton label="Start Your Migration Audit" region="us" btnVariant="primary-dark" />
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
                <span>Choosing a Replatforming Agency</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                How to Compare Replatforming Agencies
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Ask every agency on your shortlist how they handle these four areas, and compare the answers:
              </p>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid #E6E6EC', borderRadius: '16px', overflow: 'hidden', maxWidth: '960px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.4fr 1.4fr', background: '#141414', color: '#FFFFFF', padding: '16px 24px', fontWeight: 700, fontSize: '13.5px' }}>
                <div>Area</div>
                <div style={{ color: '#FF5622' }}>What FactoryJet does</div>
                <div style={{ color: '#A0A0B0' }}>Warning sign elsewhere</div>
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
            <SeoLinkEquityChecklist sourcePlatform="magento" />
            <p style={{ fontSize: '14.5px', color: '#494852', lineHeight: 1.6, margin: '24px auto 0', maxWidth: '960px' }}>
              The redirect rules above follow Google&apos;s{' '}
              <a href={SRC.googleSiteMove} {...extLink}>site move guide</a>
              {' '}and Shopify&apos;s{' '}
              <a href={SRC.shopifyRedirects} {...extLink}>URL redirect documentation</a>
              . The Shopify Plus plan is $2,300 a month on a three-year term or $2,500 on a one-year term in the US, per the{' '}
              <a href={SRC.shopifyPlusPlan} {...extLink}>Shopify Help Center</a>.
            </p>
          </div>
        </section>

        <CommerceRoiCalculator city="Enterprise Store" region="us" />

        <FAQ
          eyebrow="REPLATFORMING FAQ"
          headline="Ecommerce Replatforming Questions, Answered"
          lead="What founders, ecommerce managers and IT leads ask us before they choose a platform and a replatforming agency:"
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
              Ready to Change Platforms?
            </h2>

            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Send us your current store URL, SKU count and the systems it connects to. We will review the setup and send a written plan with a fixed price for each phase.
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

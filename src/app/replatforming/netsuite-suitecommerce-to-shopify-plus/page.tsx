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

const PAGE_TITLE = 'Shopify Plus NetSuite Integration & SuiteCommerce Migration';
const PAGE_DESCRIPTION =
  'Move SuiteCommerce or SCA to Shopify Plus and keep NetSuite as your ERP: saved search exports, matrix items, connector options and the item URL 301 map.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: 'https://factoryjet.com/replatforming/netsuite-suitecommerce-to-shopify-plus',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'NetSuite to Shopify Plus Migration Services' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/replatforming/netsuite-suitecommerce-to-shopify-plus' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* Vendor sources, all opened and read on 22 Oct 2026. */
const SRC = {
  nsExport: 'https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N663983.html',
  nsItemUrl: 'https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N2695545.html',
  nsShopifyFaq: 'https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_163300701450.html',
  nsShopifyB2b: 'https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0217084843.html',
  shopPlusPricing: 'https://www.shopify.com/plus/pricing',
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
  { key: 'basics', label: 'SuiteCommerce vs Shopify' },
  { key: 'erp', label: 'NetSuite Integration & Data' },
  { key: 'b2b', label: 'B2B, Price Levels & Accounts' },
  { key: 'cost', label: 'Costs & Licences' },
  { key: 'seo', label: 'Item URLs & SEO' },
  { key: 'cutover', label: 'Cutover & Timeline' },
];

const FAQ_ITEMS = [
  {
    category: 'basics',
    question: 'SuiteCommerce vs Shopify: which is better for a business that runs on NetSuite?',
    answer:
      'SuiteCommerce suits a store that is mostly a logged-in ordering portal for existing B2B accounts, where living inside NetSuite with no integration matters most. Shopify Plus suits a store that changes often, needs marketing apps, or has a team that wants to edit pages without SuiteScript. Many NetSuite businesses keep NetSuite as the ERP and put Shopify Plus in front of it, joined by an integration.',
  },
  {
    category: 'basics',
    question: 'SuiteCommerce Advanced vs Shopify Plus: what changes for our developers?',
    answer:
      'On SuiteCommerce Advanced, storefront changes are built as extensions on Oracle\'s framework and deployed into NetSuite, with SuiteScript on the server side. On Shopify Plus, storefront work is Liquid theme sections, checkout work is checkout extensions and Shopify Functions, and business logic that belongs to the ERP stays in NetSuite. Your developers stop maintaining a web store inside the ERP and maintain one integration instead.',
  },
  {
    category: 'basics',
    question: 'Do we have to replace NetSuite when we leave SuiteCommerce?',
    answer:
      'No. NetSuite stays your ERP and the system of record for items, customers, inventory, purchasing, fulfilment and the general ledger. Only the SuiteCommerce or SuiteCommerce Advanced web store is retired. Shopify Plus becomes the storefront and checkout, and an integration carries orders into NetSuite and sends stock, prices and fulfilment updates back.',
  },
  {
    category: 'basics',
    question: 'Do I need a NetSuite partner for a Shopify Plus NetSuite integration?',
    answer:
      'No partner badge is needed to connect Shopify Plus to NetSuite. What matters is a team that has mapped items, customers, orders and fulfillments between the two before. FactoryJet is a registered Shopify Partner and has built NetSuite integrations, along with Odoo, SAP Business One and ERPNext work. If Oracle\'s own NetSuite Connector fits your order flow, we will tell you so. Oracle\'s documentation says a new Shopify connector is added through your NetSuite account manager.',
  },
  {
    category: 'erp',
    question: 'How does a Shopify Plus NetSuite integration work?',
    answer:
      'Orders placed on Shopify Plus are created in NetSuite as sales orders or invoices. Stock levels, prices and fulfilment details with tracking numbers flow back to Shopify. There are three common ways to build it: Oracle\'s NetSuite Connector, an integration platform such as Celigo, or custom code against NetSuite\'s SuiteTalk REST web services and RESTlets. The right one depends on how far your order flow strays from the standard path.',
  },
  {
    category: 'erp',
    question: 'Is there a SuiteCommerce to Shopify connector, or do we need custom work?',
    answer:
      'Oracle documents a Shopify connector inside NetSuite Connector, covering order, product, inventory and fulfilment syncs, plus Shopify B2B. It handles standard flows well. Custom work comes in where it stops: Oracle\'s own FAQ says the connector does not add items to orders and suggests a NetSuite workflow or script instead, and it can add or update Shopify metafields but does not delete their content.',
  },
  {
    category: 'erp',
    question: 'How do we export item and customer data out of NetSuite?',
    answer:
      'With saved searches. We build one search per record type (inventory, matrix, kit and assembly items, customers, price levels), add the Internal ID as a results column so records can be joined later, and use the Export CSV option. Oracle notes the Export Lists and Perform Search permissions are needed, and suggests persisting search results when a large search takes a long time to run.',
  },
  {
    category: 'erp',
    question: 'How do NetSuite matrix items map to Shopify variants?',
    answer:
      'Each matrix parent becomes a Shopify product and each matrix child becomes a variant, with NetSuite item options becoming Shopify options. Shopify allows up to 2,048 variants and up to three options per product. A matrix with a fourth option is split, or the extra option moves to a metafield or line-item property. The NetSuite internal ID of every child is stored on its Shopify variant so the integration can match them.',
  },
  {
    category: 'erp',
    question: 'What happens to kit, assembly and non-inventory items?',
    answer:
      'Kits are sold on Shopify as one product, and the integration creates the kit item on the NetSuite sales order so NetSuite still commits the components. Assemblies sell as normal products with stock from NetSuite. Non-inventory items such as services or warranties become Shopify products that do not track stock. We confirm the handling of each item type in the audit before anything is built.',
  },
  {
    category: 'erp',
    question: 'How are multiple NetSuite locations and warehouses handled?',
    answer:
      'Each NetSuite location that ships web orders maps to a Shopify location, and stock syncs per location. Oracle\'s connector FAQ says to set different NetSuite locations to sync to different Shopify locations when multi-location inventory is on in Shopify. Fulfilment still happens in NetSuite, and the item fulfilment record sends the tracking number back to the Shopify order.',
  },
  {
    category: 'erp',
    question: 'Which system should own customer records after the move?',
    answer:
      'For B2B accounts, NetSuite usually stays the owner and pushes companies and contacts to Shopify. For new consumer sign-ups, Shopify creates the customer and the first order carries it into NetSuite. Oracle\'s FAQ explains that NetSuite Connector matches incoming orders to existing customers by a combination of email and name, so duplicate emails in NetSuite are cleaned up before launch.',
  },
  {
    category: 'b2b',
    question: 'How do NetSuite price levels and customer pricing map to Shopify Plus B2B?',
    answer:
      'Price levels, quantity pricing and customer-specific item prices become Shopify B2B catalogs assigned to companies, so a signed-in buyer sees their own prices. Oracle\'s connector FAQ notes that it syncs Shopify wholesale prices as the regular price with a discount, not as a lower item price, so your finance team should check how those orders look in NetSuite reports before launch.',
  },
  {
    category: 'b2b',
    question: 'Can B2B buyers check out on payment terms and receive NetSuite invoices?',
    answer:
      'Yes. Shopify B2B lets you set payment terms, pricing and payment methods per company. Oracle documents a Shopify B2B setup for NetSuite Connector, and once it is on, a new Order Type column in the connector shows which orders are B2B. Invoices are still raised and collected in NetSuite, so accounts receivable keeps working the way it does today.',
  },
  {
    category: 'b2b',
    question: 'What replaces the SuiteCommerce My Account area for B2B customers?',
    answer:
      'Shopify customer accounts show orders placed on Shopify. Older NetSuite orders, open invoices and statements live in NetSuite, so we either import recent order history into Shopify or build an account page that reads it from NetSuite through the integration. Which one depends on how often your buyers reorder from history, and we settle it in the audit.',
  },
  {
    category: 'cost',
    question: 'How much does a SuiteCommerce to Shopify Plus migration cost?',
    answer:
      'It depends on how many item types you sell, how many flows the integration carries (orders, stock, prices, fulfilments, refunds), your B2B pricing rules, and how much custom SuiteScript has to be replaced. FactoryJet quotes a fixed price in writing after a short scoping call, priced per phase, and shows you a working demo on your own data before you sign.',
  },
  {
    category: 'cost',
    question: 'What do we stop paying for, and what do we start paying for?',
    answer:
      'You stop paying the SuiteCommerce line on your NetSuite contract when it renews; we found no public list price for it on 22 October 2026, so check your own renewal. You start paying Shopify Plus, listed at $2,300 a month on a 3-year term or from $2,500 on a 1-year term, plus any connector or integration platform subscription and payment fees.',
  },
  {
    category: 'seo',
    question: 'Will we lose Google rankings moving from SuiteCommerce to Shopify Plus?',
    answer:
      'Rankings can move for a few weeks after any platform change. What protects them is a full redirect map. We pull every item URL component, URL component alias, category URL and content page from NetSuite and Search Console, map each to its Shopify page, and load them as single-hop 301s before DNS changes. Shopify Plus allows up to 20,000,000 redirects.',
  },
  {
    category: 'seo',
    question: 'What do SuiteCommerce item URLs look like, and how do they map?',
    answer:
      'NetSuite builds item URLs from the URL Component field on each item record, giving paths like /namebrandhelmet. If an item has no URL component, NetSuite falls back to the internal ID, such as /product/361. Shopify fixes product pages at /products/handle, so we reuse each URL component as the Shopify handle and redirect the old path to it.',
  },
  {
    category: 'seo',
    question: 'How do you keep product rich results after leaving SuiteCommerce?',
    answer:
      'We check which product, offer and breadcrumb markup Google reads today in Search Console\'s rich result reports, then build the same types into the Shopify theme from Shopify\'s own product data. Prices and stock in that markup come from the synced NetSuite values, so they match what the page shows. Rich results return as Google recrawls the new URLs.',
  },
  {
    category: 'cutover',
    question: 'How do you make sure no orders are lost during cutover?',
    answer:
      'SuiteCommerce writes orders straight into NetSuite, so anything placed on the old store before DNS moves is already in the ERP. The risk is on the Shopify side, so we test the integration queue with real test orders first, then move DNS in a quiet hour and watch the queue and its error log through the first days of live orders.',
  },
  {
    category: 'cutover',
    question: 'How long does a SuiteCommerce to Shopify Plus migration take?',
    answer:
      'Most moves land in our 5 to 8 week band for advanced builds, which covers data migration, B2B pricing and the NetSuite integration. A headless storefront or heavy custom integration runs 8 to 14 weeks. The time goes on the integration and its testing, not the theme, so we size that first on the scoping call.',
  },
  {
    category: 'cutover',
    question: 'Can we run SuiteCommerce and Shopify Plus side by side for a while?',
    answer:
      'Yes. Some teams move consumer sales to Shopify Plus first and keep the SuiteCommerce B2B portal for a few months, with NetSuite taking orders from both. It means keeping two catalogs and two sets of URLs in step for that period, so we plan it with a fixed end date and a second redirect pass when the portal closes.',
  },
  {
    category: 'cutover',
    question: 'Will Shopify Plus keep up with our order volume at peak?',
    answer:
      'Shopify\'s Plus pricing page states 10K+ checkouts per minute with unlimited bandwidth, transactions and SKUs. The slower link is usually the integration: NetSuite has to create each sales order, so we test a burst of orders against your NetSuite sandbox before launch and size the integration queue to absorb your busiest hour.',
  },
];

const STAT_CARDS = [
  { num: 'CSV', title: 'Saved Search Export', desc: 'NetSuite exports most saved search results to CSV or Excel. The item audit starts there.', icon: '📄' },
  { num: '1 Store', title: 'Per NetSuite Connector', desc: 'Oracle documents one Shopify store per connector, so each expansion store needs its own.', icon: '🔌' },
  { num: 'Two-Way', title: 'Order and Stock Sync', desc: 'Orders flow into NetSuite; stock, prices and fulfilments flow back to Shopify.', icon: '🔄' },
  { num: '5-8 wks', title: 'Typical Build', desc: 'Our usual range for a move with B2B pricing and an ERP integration.', icon: '📅' },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Storefront Changes That Need SuiteScript',
    problem: 'SuiteCommerce Advanced customizations are written as extensions and SuiteScript, so a new landing page or layout change goes through a developer and a deploy.',
    solution: 'Shopify Online Store 2.0 sections let your marketing team build and reorder pages in the theme editor, and developers spend their time on the integration.',
  },
  {
    num: '02',
    title: 'Web Store and ERP on One Release Cycle',
    problem: 'Because the store lives inside NetSuite, ERP upgrades and SuiteCommerce version updates touch the storefront, and storefront work waits for ERP testing.',
    solution: 'With Shopify Plus as a separate storefront, ERP changes and store changes are tested on their own schedules, joined only by the integration.',
  },
  {
    num: '03',
    title: 'Few Ready-Made Marketing Tools',
    problem: 'Email, reviews, loyalty and subscription tools usually need custom work before they talk to a SuiteCommerce store.',
    solution: 'Shopify App Store apps such as Klaviyo, Gorgias, Yotpo and Recharge install directly, and NetSuite still receives every order.',
  },
  {
    num: '04',
    title: 'Worry About Losing B2B Pricing and Stock by Location',
    problem: 'Price levels, quantity pricing and stock by location all live in NetSuite, and teams fear a new storefront will lose them.',
    solution: 'Shopify B2B holds company pricing, payment terms and catalogs, and NetSuite locations map to Shopify locations, so NetSuite stays the source.',
  },
];

const PARTNERS = [
  'NetSuite ERP',
  'NetSuite Connector',
  'SuiteTalk REST',
  'Celigo',
  'Shopify Plus',
  'Shopify B2B',
  'Avalara AvaTax',
  'Klaviyo',
];

const WORKING_STEPS = [
  {
    n: '01',
    t: 'Saved Search Export of Items, Customers & Price Levels',
    d: 'We build saved searches for inventory, matrix, kit and assembly items, customers and price levels, add the Internal ID column, and export each to CSV.',
    icon: '🔍',
  },
  {
    n: '02',
    t: 'Integration Pattern Decision',
    d: 'NetSuite Connector, an integration platform such as Celigo, or custom SuiteTalk REST and RESTlet code, picked against your order flow, custom fields and volume.',
    icon: '🔌',
  },
  {
    n: '03',
    t: 'System-of-Record Map',
    d: 'Every field gets one owner, and every flow (orders, stock, prices, fulfilments, refunds) gets a direction and a timing. You sign it before code starts.',
    icon: '🗺️',
  },
  {
    n: '04',
    t: 'Shopify Plus Store & B2B Build',
    d: 'Theme, companies, catalogs and payment terms are set up on a development store. Matrix items load as products with variants.',
    icon: '💻',
  },
  {
    n: '05',
    t: 'Integration Build & Sandbox Test Orders',
    d: 'Test orders must land in your NetSuite sandbox with the right items, tax, location and customer before your finance team signs them off.',
    icon: '🔄',
  },
  {
    n: '06',
    t: 'Redirect Map From URL Components',
    d: 'Every URL component, URL component alias, category and content URL is mapped to its Shopify page as a single-hop 301.',
    icon: '🔗',
  },
  {
    n: '07',
    t: 'Cutover With Queue Watch',
    d: 'DNS moves in a quiet hour, then we watch the integration queue and error log through the first days of live orders.',
    icon: '🚀',
  },
];

const EXPORT_ITEMS = [
  { t: 'Inventory, matrix, kit and assembly items', d: 'One saved search per item type, Internal ID added as a column, exported with the Export CSV option.' },
  { t: 'Matrix parents and children', d: 'Exported together with their option values so each parent becomes a Shopify product and each child a variant.' },
  { t: 'Customers, contacts and addresses', d: 'Customer saved search; Oracle notes all address fields on the customer record can be exported to CSV.' },
  { t: 'Price levels and quantity pricing', d: 'Exported for the audit, then carried by the integration into Shopify B2B catalogs.' },
  { t: 'Item URL components and aliases', d: 'Read from the Search Engine and Feeds section of each item record, for the redirect map.' },
  { t: 'Recent web order history', d: 'Imported to Shopify only where buyers reorder from it; the full history stays in NetSuite.' },
  { t: 'Searches too large to export quickly', d: 'Persisted search results, which Oracle suggests when an export takes a long time to run.' },
];

const URL_PATTERNS = [
  { from: '/namebrandhelmet (URL Component)', to: '/products/namebrandhelmet' },
  { from: '/product/361 (internal ID fallback)', to: '/products/the-item-handle' },
  { from: 'Old URL Component Aliases', to: 'The same Shopify product as the current component' },
  { from: 'Commerce category URLs such as /helmets', to: '/collections/helmets' },
  { from: 'Facet and search URLs with query strings', to: 'No one-to-one redirect; canonical on the Shopify collection' },
  { from: 'Content pages such as /about-us', to: '/pages/about-us' },
];

const PLATFORM_RISKS = [
  'Wholesale prices arrive in NetSuite as a regular price plus a discount when NetSuite Connector syncs them, which changes margin reports.',
  'One NetSuite Connector links to one Shopify store, and Oracle warns against repointing an existing connector at a different shop.',
  'SuiteScript user event scripts that fire on web orders may behave differently on orders created by the integration.',
  'Tax needs one owner: NetSuite, Shopify or a tax service such as Avalara must calculate it, never two of them.',
  'Duplicate customer emails in NetSuite cause mismatched orders, because the connector matches on email and name.',
  'Exports need the Export Lists and Perform Search permissions on the role you use, or the Export button does not appear.',
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
  name: 'NetSuite SuiteCommerce to Shopify Plus Migration Services',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  serviceType: 'Enterprise E-Commerce Replatforming & ERP Integration',
  description:
    'Migration from NetSuite SuiteCommerce or SuiteCommerce Advanced to Shopify Plus with NetSuite kept as the ERP: saved search data export, matrix item mapping, Shopify Plus NetSuite integration, B2B price levels and a one-to-one 301 map.',
  areaServed: ['US', 'GB', 'CA', 'AU'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Replatforming Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SuiteCommerce to Shopify Plus Migration',
        },
      },
    ],
  },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'NetSuite SuiteCommerce to Shopify Plus Migration Services | FactoryJet',
  description: 'How to move from SuiteCommerce to Shopify Plus while NetSuite stays the ERP: exports, integration options, item URLs and a 7-step process.',
  url: 'https://factoryjet.com/replatforming/netsuite-suitecommerce-to-shopify-plus',
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
    { '@type': 'ListItem', position: 3, name: 'NetSuite SuiteCommerce to Shopify Plus', item: 'https://factoryjet.com/replatforming/netsuite-suitecommerce-to-shopify-plus' },
  ],
};


const EVALUATION_CRITERIA = [
  {
    label: 'Field Ownership',
    factoryjet: 'A written map of which system owns each field and flow, signed before any integration code.',
    traditional: 'Everything synced both ways, then a hunt for which system overwrote what.',
  },
  {
    label: 'Integration Choice',
    factoryjet: 'NetSuite Connector, an integration platform or custom SuiteTalk code, picked against your order flow.',
    traditional: 'Whichever connector the agency happens to resell.',
  },
  {
    label: 'Item URL Coverage',
    factoryjet: 'Every URL component, alias and category URL mapped as single-hop 301s.',
    traditional: 'A handful of top pages redirected and the rest left to 404.',
  },
  {
    label: 'Commercial Terms',
    factoryjet: 'One fixed price per phase, a working demo on your own NetSuite data before you sign, and the code is yours.',
    traditional: 'Time-and-materials billing with integration testing left to the end.',
  },
];

export default function NetSuiteToShopifyPage() {
  return (
    <>
      <script id="netsuite-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="netsuite-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="netsuite-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="netsuite-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="netsuite-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

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
                  <span>SuiteCommerce to Shopify Plus Migration</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  Migrate from SuiteCommerce to Shopify Plus While Keeping NetSuite ERP Intact
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 12px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  To leave SuiteCommerce or SuiteCommerce Advanced for Shopify Plus, you keep NetSuite as the ERP and replace only the storefront. Items, customers and price levels come out through saved searches exported to CSV. An integration (Oracle&apos;s NetSuite Connector, a platform such as Celigo, or custom code) then syncs orders, stock and prices both ways. Most builds take 5 to 8 weeks.
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
                  src="/images/replatforming/netsuite-hero-systems-planning.webp"
                  alt="A man in a grey jacket at a white table with a laptop showing joined boxes and a tablet showing horizontal bars"
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
              <div className="rv-ticker-label">Systems We Connect on NetSuite Projects</div>
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
                  src="/images/replatforming/netsuite-team-box-arrow-review.webp"
                  alt="Two people at a desk studying a monitor that shows two columns of coloured boxes joined by arrows in a bright office"
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
                  NetSuite Stays. The Storefront Changes.
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  FactoryJet has served 500+ businesses since 2014 and is a registered Shopify Partner. We have built NetSuite integrations, alongside Odoo, SAP Business One and ERPNext work. When Oracle&apos;s own connector fits better than custom work, we say so.
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
                term="Decoupling SuiteCommerce From NetSuite ERP"
                definition="Decoupling means switching off the SuiteCommerce or SuiteCommerce Advanced web store while NetSuite keeps running as the ERP for accounting, inventory, purchasing and fulfilment. Shopify Plus becomes the storefront and checkout, and an integration moves orders into NetSuite and sends stock, prices and fulfilments back."
                keyTakeaways={[
                  'NetSuite stays the system of record for items, customers and the general ledger',
                  'Only the web store and its SuiteScript storefront customizations are retired',
                  'NetSuite internal IDs are stored on Shopify records as the join key for the integration',
                ]}
                citationSource="Oracle NetSuite Help Center, checked 22 Oct 2026"
              />
              <AnswerFirstDefinition
                term="Shopify Plus NetSuite Integration Options"
                definition="There are three common ways to connect Shopify Plus to NetSuite: Oracle's own NetSuite Connector, which has a documented Shopify connector; an integration platform such as Celigo; or custom code against SuiteTalk REST web services and RESTlets. The right choice depends on how far your order flow differs from the standard path."
                keyTakeaways={[
                  'Oracle documents that each Shopify connector links to a single Shopify store',
                  'NetSuite Connector adds and updates Shopify metafields but does not delete their content',
                  'Oracle notes the connector syncs Shopify wholesale prices as a regular price with a discount',
                ]}
                citationSource="Oracle NetSuite Help Center, Shopify Connector FAQ, checked 22 Oct 2026"
              />
              <AnswerFirstDefinition
                term="SuiteCommerce Item URLs and the 301 Map"
                definition="SuiteCommerce builds item URLs from the URL Component field on each item record. If an item has no URL component, NetSuite uses its internal ID instead, giving URLs such as /product/361. Shopify fixes product URLs at /products/handle, so every item URL, alias and category URL needs a one-to-one 301."
                keyTakeaways={[
                  'URL Component Aliases keep a list of old item URLs that may still carry backlinks',
                  'Shopify Plus allows up to 20,000,000 URL redirects',
                  'Facet URLs with query strings get canonical tags, not one redirect each',
                ]}
                citationSource="Oracle NetSuite Help Center, Customizing Item URLs for SEO; Shopify Help Center, checked 22 Oct 2026"
              />
            </div>
          </div>
        </section>

        {/* ── 04. WHY LEAVE SUITECOMMERCE (RITOVEX NUMBERED SERVICES ROWS) ── */}
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
                Why NetSuite Businesses Move Their Storefront Off SuiteCommerce
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                NetSuite stays a strong ERP. These are the storefront problems that bring its users to Shopify Plus:
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
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#8E8E9F', letterSpacing: '0.08em' }}>The SuiteCommerce Problem:</span>
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
              source="netsuite_to_shopify_plus_page"
              defaultSource="netsuite"
              defaultTarget="shopify-plus"
            />
          </div>
        </section>

        {/* ── 05. THE ENTERPRISE ARCHITECTURE BLUEPRINT (AUTO-ROTATING TABS) ── */}

        <div id="architecture-blueprint">
          <EnterpriseArchitectureBlueprint
            badge="// NETSUITE & SHOPIFY PLUS ENTERPRISE BLUEPRINT"
            title="Enterprise Architecture: Decoupling SuiteCommerce to Shopify Plus"
            subtitle="NetSuite keeps accounting, stock by location and purchasing. Shopify Plus takes the storefront and checkout. One integration joins them, with one owner per field."
            legacySource="NetSuite SuiteCommerce"
            targetStack="Shopify Plus + NetSuite ERP Middleware"
            ctaLabel="Schedule NetSuite Integration Scoping"
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
                NetSuite SuiteCommerce vs. Shopify Plus
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Facts from Oracle&apos;s NetSuite Help Center and Shopify&apos;s own pages, each linked and checked on 22 October 2026.
              </p>
            </div>

            <div style={{ overflowX: 'auto', borderRadius: '14px', border: '1px solid #E6E6EC' }}>
              <table className="pp-table" style={{ margin: 0, width: '100%', background: '#FFFFFF' }}>
                <thead style={{ background: '#F6F6F9' }}>
                  <tr>
                    <th style={{ color: '#141414', fontWeight: 700 }}>Feature / Dimension</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>NetSuite SuiteCommerce</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>Shopify Plus Enterprise</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>What It Means for Your Brand</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>Source (checked 22 Oct 2026)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Listed price</td>
                    <td>Quoted with your NetSuite contract; we found no public list price on 22 Oct 2026</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>$2,300 a month on a 3-year term, from $2,500 on a 1-year term, or a variable platform fee</td>
                    <td>Bring your NetSuite renewal paperwork to the cost comparison</td>
                    <td><SourceLink href={SRC.shopPlusPricing}>Shopify Plus pricing</SourceLink></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Data export</td>
                    <td>Saved search results export to CSV, PDF or Excel; an Internal ID column keeps records joinable</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Products and customers import by CSV; historical orders by app or the Order API</td>
                    <td>Saved searches are the extraction tool; no third-party scraper needed</td>
                    <td><SourceLink href={SRC.nsExport}>Oracle: Exporting Search Results</SourceLink>; <SourceLink href={SRC.shopMigration}>Shopify migration guide</SourceLink></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Item URLs</td>
                    <td>Built from the URL Component field; internal ID fallback such as /product/361</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Fixed /products/handle paths; up to 20,000,000 redirects on Plus</td>
                    <td>Reuse each URL component as the Shopify handle and redirect one-to-one</td>
                    <td><SourceLink href={SRC.nsItemUrl}>Oracle: Customizing Item URLs</SourceLink>; <SourceLink href={SRC.shopRedirects}>Shopify redirects</SourceLink></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Connector scope</td>
                    <td>NetSuite Connector links one Shopify store per connector; an existing connector must not be repointed</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Each Shopify store is its own API connection</td>
                    <td>Expansion stores each need their own connector account</td>
                    <td><SourceLink href={SRC.nsShopifyFaq}>Oracle: Shopify Connector FAQ</SourceLink></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Wholesale pricing</td>
                    <td>Price levels in NetSuite; the connector syncs Shopify wholesale prices as a regular price with a discount</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>B2B companies with their own pricing, payment terms and catalogs; one store can serve B2B and D2C</td>
                    <td>Check how B2B orders appear in NetSuite margin reports before launch</td>
                    <td><SourceLink href={SRC.nsShopifyFaq}>Oracle connector FAQ</SourceLink>; <SourceLink href={SRC.shopB2b}>Shopify B2B</SourceLink></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>B2B order flow</td>
                    <td>Shopify B2B integration documented for NetSuite Connector, with an Order Type column marking B2B orders</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Native B2B checkout inside the same Shopify admin</td>
                    <td>Invoices and collections stay in NetSuite</td>
                    <td><SourceLink href={SRC.nsShopifyB2b}>Oracle: Integrating Shopify B2B</SourceLink></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Matrix items and variants</td>
                    <td>Matrix parent with child items defined by item option values</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Up to 2,048 variants and up to three options per product</td>
                    <td>Matrices with a fourth option are split or reworked before import</td>
                    <td><SourceLink href={SRC.shopVariants}>Shopify variant limits</SourceLink></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── NETSUITE EXPORT, URL PATTERNS & RISKS ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', paddingTop: 0 }}>
          <div className="pp-wrap" style={{ maxWidth: '960px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 14px' }}>
              What Comes Out of NetSuite, and What Stays In It
            </h2>
            <p style={{ fontSize: '16px', color: '#494852', lineHeight: 1.6, margin: '0 0 20px' }}>
              NetSuite keeps the master records. The storefront only needs copies, so the export is narrower than on most migrations. Oracle&apos;s guide to <SourceLink href={SRC.nsExport}>exporting search results</SourceLink> covers the mechanics.
            </p>
            <ul style={{ margin: '0 0 36px', paddingLeft: '22px', display: 'grid', gap: '10px' }}>
              {EXPORT_ITEMS.map((e) => (
                <li key={e.t} style={{ fontSize: '15px', color: '#494852', lineHeight: 1.55 }}>
                  <strong style={{ color: '#141414' }}>{e.t}:</strong> {e.d}
                </li>
              ))}
            </ul>

            <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#141414', margin: '0 0 12px' }}>
              SuiteCommerce URL patterns in the 301 map
            </h3>
            <p style={{ fontSize: '16px', color: '#494852', lineHeight: 1.6, margin: '0 0 16px' }}>
              The first two patterns come from <SourceLink href={SRC.nsItemUrl}>Oracle&apos;s item URL documentation</SourceLink>. The rest depend on how your site was set up, so we confirm them against your sitemap.
            </p>
            <ul style={{ margin: '0 0 36px', paddingLeft: '22px', display: 'grid', gap: '10px' }}>
              {URL_PATTERNS.map((u) => (
                <li key={u.from} style={{ fontSize: '15px', color: '#494852', lineHeight: 1.55 }}>
                  <code style={{ fontFamily: 'var(--pp-mono)', fontSize: '13.5px', color: '#141414' }}>{u.from}</code> to {u.to}
                </li>
              ))}
            </ul>

            <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#141414', margin: '0 0 12px' }}>
              Risks specific to NetSuite and SuiteCommerce moves
            </h3>
            <ul style={{ margin: '0 0 28px', paddingLeft: '22px', display: 'grid', gap: '10px' }}>
              {PLATFORM_RISKS.map((r) => (
                <li key={r} style={{ fontSize: '15px', color: '#494852', lineHeight: 1.55 }}>{r}</li>
              ))}
            </ul>

            <p style={{ fontSize: '16px', color: '#494852', lineHeight: 1.6, margin: 0 }}>
              The integration is most of the work here, so start with our <Link href="/services/ecommerce-erp-integration" style={SRC_LINK_STYLE}>ecommerce ERP integration</Link> page. For the store, see <Link href="/services/shopify-plus-agency" style={SRC_LINK_STYLE}>Shopify Plus development</Link>, <Link href="/services/shopify-plus-b2b" style={SRC_LINK_STYLE}>Shopify Plus B2B</Link> and our <Link href="/services/shopify-migration-agency" style={SRC_LINK_STYLE}>Shopify migration service</Link>. Thinking about a custom front end on top of NetSuite instead? Read about <Link href="/headless-commerce" style={SRC_LINK_STYLE}>headless commerce</Link>. To size the budget, try the <Link href="/tools/replatforming-cost-calculator" style={SRC_LINK_STYLE}>replatforming cost calculator</Link>; for other source platforms, the <Link href="/replatforming" style={SRC_LINK_STYLE}>replatforming hub</Link> and our <Link href="/replatforming/bigcommerce-to-shopify-plus" style={SRC_LINK_STYLE}>BigCommerce to Shopify Plus guide</Link>.
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
                  Our 7-Step NetSuite Replatforming Process
                </h2>
                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  Your back office keeps running throughout. The ownership map is signed before code, sandbox orders pass finance review before the redirect map loads, and DNS moves last.
                </p>
                <ModalCTAButton label="Start Your NetSuite Audit" region="us" btnVariant="primary-dark" />
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
                Questions to put to anyone quoting a Shopify Plus NetSuite integration:
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
            <SeoLinkEquityChecklist sourcePlatform="netsuite" />
          </div>
        </section>

        <CommerceRoiCalculator city="Enterprise Store" region="us" />

        <FAQ
          eyebrow="MIGRATION INTELLIGENCE"
          headline="Frequently Asked Questions About Moving Off SuiteCommerce"
          lead="What NetSuite teams ask about SuiteCommerce, Shopify Plus and the integration between them:"
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
              Ready to Move Your Storefront and Keep NetSuite?
            </h2>

            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Send us the item types you sell, the integrations you run today and your SuiteCommerce URL. We reply with a scoped plan and a fixed price per phase in writing.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <ModalCTAButton label="Schedule NetSuite Architecture Call" region="us" btnVariant="primary-light" />
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}

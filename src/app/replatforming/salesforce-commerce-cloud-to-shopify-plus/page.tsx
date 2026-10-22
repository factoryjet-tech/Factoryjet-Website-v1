import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import EnterpriseArchitectureBlueprint from '@/components/v2/EnterpriseArchitectureBlueprint';
import AuthorCard from '@/components/v2/AuthorCard';
import CommerceRoiCalculator from '@/components/v2/CommerceRoiCalculator';
import ZeroDowntimeMigrationMatrix from '@/components/commerce/ZeroDowntimeMigrationMatrix';
import SeoLinkEquityChecklist from '@/components/commerce/SeoLinkEquityChecklist';
import AnswerFirstDefinition from '@/components/commerce/AnswerFirstDefinition';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

// Lazy-load the estimator as a separate chunk so its ~255 KiB JS doesn't block
// initial render. ssr stays true (required in a Server Component) so the
// Migration Guarantees list still renders in the static HTML for crawlers.
const ReplatformingScopeEstimator = dynamic(
  () => import('@/components/commerce/ReplatformingScopeEstimator'),
  { ssr: true }
);

const PAGE_MODIFIED = '2026-10-22';

const PAGE_TITLE = 'Salesforce Commerce Cloud (Demandware) to Shopify Plus';
const PAGE_DESCRIPTION =
  'Move from Salesforce Commerce Cloud (SFCC, formerly Demandware) to Shopify Plus: cartridge audit, OCAPI exports, price books, subscriptions and the 301 map.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: 'https://factoryjet.com/replatforming/salesforce-commerce-cloud-to-shopify-plus',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet Salesforce Commerce Cloud to Shopify Plus migration' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/replatforming/salesforce-commerce-cloud-to-shopify-plus' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* Vendor sources, all opened and read on 22 Oct 2026. */
const SRC = {
  sfPricing: 'https://www.salesforce.com/commerce/pricing/',
  sfra: 'https://developer.salesforce.com/docs/commerce/sfra/guide/sfra-overview.html',
  ocapi: 'https://developer.salesforce.com/docs/commerce/b2c-commerce/references/b2c-commerce-ocapi/get-started-with-ocapi.html',
  b2cArchitecture: 'https://developer.salesforce.com/docs/commerce/commerce-api/guide/get-started.html',
  sfUrlMapping: 'https://developer.salesforce.com/docs/commerce/commerce-api/guide/url-resolution.html',
  sfSeoUrlRules: 'https://developer.salesforce.com/docs/commerce/sfnext/guide/sfnext-seo-url-rules-best-practices.html',
  shopPlusPricing: 'https://www.shopify.com/plus/pricing',
  shopVariants: 'https://help.shopify.com/en/manual/products/variants/2048-variant-limit',
  shopRedirects: 'https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect',
  shopSubscriptions: 'https://help.shopify.com/en/manual/products/purchase-options/shopify-subscriptions',
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
  { key: 'basics', label: 'SFCC vs Shopify Plus' },
  { key: 'cost', label: 'Costs & Pricing' },
  { key: 'arch', label: 'Cartridges, Jobs & Code' },
  { key: 'data', label: 'Data, Promotions & Subscriptions' },
  { key: 'integrations', label: 'Salesforce & ERP Integrations' },
  { key: 'seo', label: 'URLs, SEO & Cutover' },
];

const FAQ_ITEMS = [
  {
    category: 'basics',
    question: 'How do I migrate from Salesforce Commerce Cloud to Shopify?',
    answer:
      'Start with an inventory of every cartridge, scheduled job and promotion so you know what the store does today. Then export catalogs, price books, customers and orders from Business Manager or through OCAPI, rebuild the SFRA or SiteGenesis storefront as a Shopify theme, rewire integrations such as your ERP, and load a single-hop 301 for every old URL. SFCC stays live until the Shopify store passes test orders.',
  },
  {
    category: 'basics',
    question: 'Is Demandware the same as Salesforce Commerce Cloud?',
    answer:
      'Yes. Salesforce acquired Demandware and renamed it Salesforce Commerce Cloud, and Salesforce\'s developer documentation now calls the platform B2C Commerce. The old name still shows up in URLs such as /on/demandware.store/ and in file and cartridge names. A Demandware to Shopify Plus migration and an SFCC to Shopify Plus migration are the same project.',
  },
  {
    category: 'basics',
    question: 'Salesforce Commerce Cloud vs Shopify Plus: which is the better fit?',
    answer:
      'SFCC fits large estates with many brands, sites and locales, deep use of other Salesforce clouds, and an in-house team that knows cartridges. Shopify Plus fits teams that want a published fee, page changes without code deploys, and an app store. Salesforce lists B2C Commerce Premium as contact for pricing with 100 sites and 3,500 price books; Shopify Plus lists $2,300 a month on a 3-year term.',
  },
  {
    category: 'basics',
    question: 'Is Salesforce Commerce Cloud better than Shopify Plus for a unified checkout?',
    answer:
      'It depends on what unified means for you. On SFCC the checkout is code you own and maintain in cartridges, which gives control but needs SFCC developers for every change. On Shopify Plus, checkout is changed through checkout extensions and Shopify Functions, and Shopify B2B runs inside the same store, so wholesale and consumer buyers share one checkout and one admin.',
  },
  {
    category: 'basics',
    question: 'Can Shopify Plus handle an enterprise SFCC store\'s traffic?',
    answer:
      'Shopify\'s Plus pricing page states 10K+ checkouts per minute with unlimited bandwidth, transactions and SKUs. That covers the platform. What we load-test before launch are the parts you add: apps calling outside services, custom Shopify Functions, and the ERP or order management link that has to absorb a burst of orders. Those tests run on a development store weeks before launch.',
  },
  {
    category: 'basics',
    question: 'We run Oracle Commerce Cloud, not SFCC. Is the move to Shopify Plus the same?',
    answer:
      'The shape is the same: export catalog, price lists, customers and orders, rebuild the storefront as a Shopify theme, reconnect integrations, and map every old URL to a single-hop 301. The export tools and URL formats differ, so we read them from your live sitemap and your admin exports during the audit, and quote after we have seen them.',
  },
  {
    category: 'arch',
    question: 'What happens to our custom SFCC cartridges and ISML templates?',
    answer:
      'Cartridges and ISML templates do not run on Shopify. We list every cartridge in your cartridge path and mark each one keep, replace or retire. Storefront features are rebuilt as Shopify theme sections, checkout logic as checkout extensions or Shopify Functions, and back-office logic as apps or integration code. Cartridges that no longer do anything useful are retired instead of rebuilt.',
  },
  {
    category: 'arch',
    question: 'Does it matter if we are on SiteGenesis, SFRA or PWA Kit?',
    answer:
      'It changes the audit, not the destination. Salesforce describes SFRA as JavaScript controllers in a model-view-controller pattern with Bootstrap, which makes custom code easier to trace. SiteGenesis is the older storefront and usually carries more custom code. PWA Kit, which Salesforce launched in 2021 as an alternative to SFRA, is headless, so a move to a headless Shopify build is worth pricing alongside a theme build.',
  },
  {
    category: 'arch',
    question: 'What happens to SFCC scheduled jobs and server-side integrations?',
    answer:
      'Business Manager jobs such as product feeds, inventory imports and order exports to your ERP stop when SFCC is switched off. Each one needs a new home: Shopify Flow for simple rules, an app for standard feeds, or integration code for ERP and order management flows. We list every job with its schedule and owner during the cartridge audit, so none is missed.',
  },
  {
    category: 'data',
    question: 'How do we get our data out of SFCC?',
    answer:
      'Two routes. Business Manager import and export covers catalogs, price books, inventory lists, customers and orders as files. For scripted pulls and the final top-up we use the Open Commerce API, whose Data API gives read and write access to system resources. Every OCAPI request needs a client ID, and Salesforce notes that data can be exported from Production and Development instances.',
  },
  {
    category: 'data',
    question: 'How do SFCC price books map to Shopify Plus?',
    answer:
      'List price books and sale price books become Shopify product prices and compare-at prices. Country or currency price books become Shopify Markets pricing, and customer-group price books become Shopify B2B catalogs. Salesforce lists B2C Commerce Premium with 3,500 price books, and large estates rarely need them all, so we map each one and merge duplicates before import.',
  },
  {
    category: 'data',
    question: 'How are SFCC promotions, campaigns and coupons rebuilt?',
    answer:
      'Simple promotions become Shopify automatic discounts or discount codes. Rules SFCC handles with qualifiers, exclusivity or stacking order are rebuilt as Shopify Functions. Existing coupon codes are exported and reloaded so printed and emailed codes keep working. Every rebuilt promotion is tested against sample baskets with known totals before launch, so the discount a shopper gets matches what SFCC gave.',
  },
  {
    category: 'data',
    question: 'How do SFCC master products and variation attributes map to Shopify variants?',
    answer:
      'Each SFCC master product becomes a Shopify product, each variation product becomes a variant, and variation attributes such as size and color become Shopify options. Shopify allows up to 2,048 variants and up to three options per product. A master with a fourth variation attribute is split into several products or has the extra attribute moved to a metafield.',
  },
  {
    category: 'data',
    question: 'Can customer accounts and order history move from SFCC to Shopify Plus?',
    answer:
      'Customers, addresses and past orders can move; passwords cannot. Customer lists come out of SFCC and load into Shopify by CSV or API, and historical orders load through the Shopify Order API. SFCC stores passwords as one-way hashes, so each customer sets a new password from an account invite email, which we send in batches after launch.',
  },
  {
    category: 'data',
    question: 'We sell subscriptions on SFCC. How do they move to Shopify Plus?',
    answer:
      'SFCC subscriptions usually run through a third-party cartridge, so the contracts export from that provider. On Shopify, subscriptions are a purchase option: the Shopify Subscriptions app supports plans that renew weekly, monthly or yearly and can import and export subscription contracts, or you can use a third-party app. Saved cards move only through a transfer arranged with your payment providers, so we start that early.',
  },
  {
    category: 'integrations',
    question: 'Can Salesforce and Shopify be integrated?',
    answer:
      'Yes. Leaving SFCC does not mean leaving Salesforce. Sales Cloud, Service Cloud and Marketing Cloud can keep receiving Shopify customers and orders through connector apps or integration middleware. Which one fits depends on your Salesforce objects and custom fields, so we map the data your Salesforce org expects today and confirm the connection method before we quote.',
  },
  {
    category: 'integrations',
    question: 'Do we have to leave Salesforce CRM or Marketing Cloud if we leave SFCC?',
    answer:
      'No. Moving off B2C Commerce only replaces the storefront and checkout. Your CRM records, service cases and marketing journeys stay in Salesforce. What changes is where the order and customer events come from: Shopify instead of SFCC. Journeys that fire on SFCC events are reconnected to the matching Shopify events before launch.',
  },
  {
    category: 'integrations',
    question: 'Can we keep NetSuite, SAP or our order management system connected?',
    answer:
      'Yes. Your ERP and order management stay as they are, and the integration that fed them from SFCC is rebuilt to read from Shopify Plus. Orders, stock by location, prices and fulfilments flow through the new link. We test it with real test orders in your ERP sandbox before cutover, because that link is where most launch problems start.',
  },
  {
    category: 'cost',
    question: 'How much does a Salesforce Commerce Cloud to Shopify Plus migration cost?',
    answer:
      'It depends on how many sites and locales you run, the number of cartridges worth keeping, promotion complexity, and how many systems connect to the store. FactoryJet quotes a fixed price in writing after a short scoping call, priced per phase. You see a working demo on your own SFCC catalog before you sign, and support after launch is optional with no monthly minimum.',
  },
  {
    category: 'cost',
    question: 'What does Shopify Plus cost compared with Salesforce Commerce Cloud?',
    answer:
      'Shopify Plus lists $2,300 a month on a 3-year term, from $2,500 a month on a 1-year term, or a variable platform fee for more complex businesses. Salesforce lists its B2C Commerce editions as contact for pricing, so compare against your own contract. Payment fees sit on top of both; on Shopify, third-party transaction fees may apply if you do not use Shopify Payments.',
  },
  {
    category: 'seo',
    question: 'Will we lose Google rankings moving from SFCC to Shopify Plus?',
    answer:
      'Rankings can move for a few weeks after any platform change. What protects them is a complete redirect map. We collect every URL from your SFCC sitemaps, Search Console and backlink data for each site and locale, map each to its Shopify page, and load them as single-hop 301s before DNS changes. Shopify Plus allows up to 20,000,000 redirects.',
  },
  {
    category: 'seo',
    question: 'What do SFCC URLs look like, and how do they map to Shopify?',
    answer:
      'SFCC URLs depend on your URL rules. SEO URLs often end in .html with a product ID, headless storefronts may use /p/ and /c/ paths, and pages without URL rules show /on/demandware.store/Sites-SiteID-Site/ paths. Shopify fixes products at /products/handle and collections at /collections/handle, so every pattern gets its own mapping rule and every exception is listed.',
  },
  {
    category: 'seo',
    question: 'How do you handle multiple SFCC sites and locales?',
    answer:
      'Each SFCC site becomes either a Shopify Market inside one store or a separate expansion store, decided in the audit. Locale prefixes become Markets subfolders. Shopify notes that URL redirects do not apply to all market subfolders automatically, so each locale gets its own set of redirects rather than one shared set for the default language.',
  },
  {
    category: 'seo',
    question: 'How do you avoid downtime during the SFCC to Shopify Plus cutover?',
    answer:
      'SFCC stays live and untouched until DNS moves. The Shopify store, catalog and integrations are tested with real test orders first. We freeze catalog changes on SFCC, pull the final orders and customers created since the test import, then move DNS in a quiet hour. If a launch check fails, DNS points back to SFCC while we fix it.',
  },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((i) => ({
    '@type': 'Question',
    name: i.question,
    acceptedAnswer: { '@type': 'Answer', text: i.answer },
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
  serviceType: 'Salesforce Commerce Cloud to Shopify Plus Migration',
  name: 'Salesforce Commerce Cloud to Shopify Plus Replatforming',
  description:
    'Migration from Salesforce Commerce Cloud (Demandware) to Shopify Plus: cartridge and job inventory, Business Manager and OCAPI data export, price book and promotion rebuilds, ERP and Salesforce integrations, and a one-to-one single-hop 301 map across sites and locales.',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/replatforming/salesforce-commerce-cloud-to-shopify-plus#webpage',
  url: 'https://factoryjet.com/replatforming/salesforce-commerce-cloud-to-shopify-plus',
  name: 'Salesforce Commerce Cloud to Shopify Plus Migration',
  description: 'How a Salesforce Commerce Cloud (Demandware) store moves to Shopify Plus: exports, cartridges, price books, URL patterns and a 7-step process.',
  dateModified: PAGE_MODIFIED,
  author: { '@type': 'Person', name: 'Bhavesh Barot', url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/', jobTitle: 'Founder, FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
};

const ORG_SCHEMA = { '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' };

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'Replatforming', item: 'https://factoryjet.com/replatforming' },
    { '@type': 'ListItem', position: 3, name: 'Salesforce Commerce Cloud to Shopify Plus', item: 'https://factoryjet.com/replatforming/salesforce-commerce-cloud-to-shopify-plus' },
  ],
};

const PARTNERS = [
  'Business Manager',
  'OCAPI',
  'SCAPI',
  'Shopify Plus',
  'Salesforce Service Cloud',
  'NetSuite',
  'Avalara AvaTax',
  'Klaviyo',
];

const STAT_CARDS = [
  {
    num: '20M',
    title: 'Redirects on Plus',
    desc: 'Shopify Plus allows up to 20,000,000 URL redirects, enough for every site and locale.',
    icon: '🔗',
  },
  {
    num: '5-8 wks',
    title: 'Typical Build',
    desc: 'Our usual range for a migration with data and integrations. Headless or heavy custom work runs 8 to 14 weeks.',
    icon: '📅',
  },
  {
    num: 'Demo',
    title: 'Before You Sign',
    desc: 'A working store on your own SFCC catalog before any contract.',
    icon: '🖥️',
  },
  {
    num: 'Fixed',
    title: 'Price per Phase',
    desc: 'A written fixed price for each phase. Support after launch is optional, with no monthly minimum.',
    icon: '💰',
  },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Pricing You Cannot See Before the Sales Call',
    problem: 'Salesforce lists its B2C Commerce editions as contact for pricing, so platform cost is negotiated contract by contract.',
    solution: 'Shopify Plus publishes its fee: $2,300 a month on a 3-year term, from $2,500 on a 1-year term, or a variable platform fee for complex setups.',
  },
  {
    num: '02',
    title: 'Page Changes That Need a Cartridge Deploy',
    problem: 'Storefront changes on SFRA or SiteGenesis are made in cartridges and moved from sandbox to staging to production.',
    solution: 'Shopify theme sections let merchandisers change pages in the editor, and code deploys are kept for real features.',
  },
  {
    num: '03',
    title: 'A Narrow Developer Pool',
    problem: 'SFCC work needs people who know cartridges, ISML templates, Business Manager and OCAPI, which makes hiring and handovers slow.',
    solution: 'Shopify development uses Liquid, documented public APIs and the Shopify App Store, so more developers can pick up the work.',
  },
  {
    num: '04',
    title: 'SiteGenesis Estates Face a Rebuild Anyway',
    problem: 'Salesforce introduced SFRA and then PWA Kit as newer storefronts, so an older SiteGenesis store needs a rebuild to stay current.',
    solution: 'If a rebuild is coming either way, price a Shopify Plus build next to an SFRA or PWA Kit rebuild before you commit.',
  },
];

const WORKING_STEPS = [
  {
    n: '01',
    t: 'Cartridge, Job & Hook Inventory',
    d: 'Every cartridge in your cartridge path, every scheduled job and every hook is listed and marked keep, replace or retire.',
    icon: '🔍',
  },
  {
    n: '02',
    t: 'Data Export From Business Manager & OCAPI',
    d: 'Catalogs, price books, inventory lists, customers and orders are exported, and the OCAPI Data API is scripted for the final top-up.',
    icon: '📦',
  },
  {
    n: '03',
    t: 'Price Book & Promotion Mapping',
    d: 'Price books map to Shopify prices, Markets and B2B catalogs. Promotions map to discounts or Shopify Functions and are tested against sample baskets.',
    icon: '🗺️',
  },
  {
    n: '04',
    t: 'Theme Build From SFRA or SiteGenesis Templates',
    d: 'ISML templates are rebuilt as Liquid sections on a development store, keeping the layouts your analytics show are working.',
    icon: '💻',
  },
  {
    n: '05',
    t: 'Integrations Rewired',
    d: 'ERP, order management, Salesforce clouds, tax and subscriptions are reconnected to Shopify and tested with real test orders.',
    icon: '⚙️',
  },
  {
    n: '06',
    t: 'Redirect Map Across Sites & Locales',
    d: 'Each URL rule, pipeline URL and locale prefix is mapped to its Shopify page as a single-hop 301, with separate redirects per Markets subfolder.',
    icon: '🔗',
  },
  {
    n: '07',
    t: 'Freeze, Final Top-Up & DNS Cutover',
    d: 'SFCC catalog changes are frozen, new orders and customers are pulled, DNS moves in a quiet hour, and account invites go out in batches.',
    icon: '🚀',
  },
];

const EXPORT_ITEMS = [
  { t: 'Master and storefront catalogs', d: 'Business Manager catalog export: products, variation attributes, categories and category assignments.' },
  { t: 'Price books', d: 'Business Manager price book export, then mapped to Shopify prices, Markets and B2B catalogs.' },
  { t: 'Inventory lists', d: 'Exported per list, then mapped to Shopify locations.' },
  { t: 'Customers and customer groups', d: 'Customer list export; groups become Shopify segments or B2B companies. Passwords do not move.' },
  { t: 'Orders', d: 'Order export or the OCAPI Data API, loaded through the Shopify Order API.' },
  { t: 'Content assets and slots', d: 'Content library export, rebuilt as Shopify pages, sections and metaobjects.' },
  { t: 'Promotions, campaigns and coupons', d: 'Exported for the record and the coupon codes, then rebuilt as Shopify discounts or Functions.' },
  { t: 'Subscription contracts', d: 'Exported from the subscription provider your SFCC cartridge connects to, then imported into the Shopify subscription app.' },
];

const URL_PATTERNS = [
  { from: 'SEO URLs such as /mens-oxford-shirt/12345.html', to: '/products/mens-oxford-shirt' },
  { from: 'Headless paths such as /p/summer-dress/12345', to: '/products/summer-dress' },
  { from: 'Category paths such as /mens/shirts/ or /c/outdoor-furniture/567', to: '/collections/outdoor-furniture' },
  { from: '/on/demandware.store/Sites-SiteID-Site/en_US/Product-Show?pid=12345', to: '/products/the-product-handle' },
  { from: 'Locale prefixes such as /en-gb/', to: 'Shopify Markets subfolders, each with its own redirects' },
  { from: 'Refinement URLs with prefn1 and prefv1 parameters', to: 'No one-to-one redirect; canonical on the Shopify collection' },
];

const PLATFORM_RISKS = [
  'Shopify treats /page.html and /page as the same URL, so .html paths must redirect to a different path such as /products/handle.',
  'Several SFCC sites under one account need a decision on Shopify Markets versus separate expansion stores before the catalog is built.',
  'Promotion exclusivity and stacking rules do not map one-to-one to Shopify discounts and need Functions and basket tests.',
  'Business Manager jobs that feed your ERP or marketplaces stop at cutover unless each one has a new home.',
  'Salesforce Marketing Cloud journeys that fire on SFCC events must be pointed at Shopify events before launch.',
  'Saved payment cards for subscriptions move only through a transfer agreed between your old and new payment providers.',
];

const EVALUATION_CRITERIA = [
  {
    label: 'Cartridge Audit',
    factoryjet: 'Every cartridge, job and hook listed with a keep, replace or retire decision before the quote.',
    traditional: 'A redesign quote that discovers the cartridges halfway through the build.',
  },
  {
    label: 'Promotion Parity',
    factoryjet: 'Each SFCC promotion rebuilt and tested against sample baskets with known totals.',
    traditional: 'Discounts recreated from memory and checked by customers after launch.',
  },
  {
    label: 'Locale-Aware Redirects',
    factoryjet: 'Separate single-hop 301s for every site and locale prefix, including Markets subfolders.',
    traditional: 'One redirect set for the default locale and nothing for the rest.',
  },
  {
    label: 'Commercial Terms',
    factoryjet: 'Fixed price per phase, a demo on your SFCC catalog before you sign, and optional support with no monthly minimum.',
    traditional: 'Retainers priced like an SFCC agency, with the scope left open.',
  },
];

export default function SFCCToShopifyPlusPage() {
  return (
    <>
      <script id="sfcc-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="sfcc-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="sfcc-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="sfcc-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="sfcc-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

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
                  <span>SFCC to Shopify Plus Migration</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  Salesforce Commerce Cloud to Shopify Plus, Cartridge by Cartridge
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 12px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  To move from Salesforce Commerce Cloud (formerly Demandware) to Shopify Plus, you export catalogs, price books, customers and orders from Business Manager or OCAPI, decide what replaces each cartridge, rebuild the SFRA or SiteGenesis storefront as a Shopify theme, and map every old URL to a single-hop 301. Most moves take 5 to 8 weeks; heavily custom ones 8 to 14.
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
                  src="/images/us/shared/factoryjet-senior-engineer.webp"
                  alt="FactoryJet senior commerce architect analyzing enterprise migration pipelines"
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
              <div className="rv-ticker-label">Systems We Work With on SFCC Moves</div>
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
                  src="/images/us/shared/factoryjet-audit-call.webp"
                  alt="FactoryJet engineering leadership conducting enterprise architecture audit"
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
                  Every Cartridge Listed Before We Quote.
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  FactoryJet has served 500+ businesses since 2014 and is a registered Shopify Partner. An SFCC estate usually carries years of cartridges, jobs and promotion rules. We list each one before we price the work, so the fixed price per phase covers what your store does today, and you see a demo on your own catalog before you sign.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                  {STAT_CARDS.map((s) => (
                    <div className="rv-stat-card-bento" key={s.num}>
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

                {/* Bottom Actions: Discovery Call CTA Button (Clean & Prominent) */}
                <div style={{ marginTop: '32px' }}>
                  <ModalCTAButton label="Schedule Discovery Call" region="us" btnVariant="primary-dark" />
                </div>
              </div>

            </div>

            {/* Answer-First Definitions for AI Overviews & Search Engines */}
            <div style={{ marginTop: '56px', display: 'grid', gap: '18px' }}>
              <AnswerFirstDefinition
                term="SFCC Cartridge Inventory and Replacement"
                definition="SFCC custom code lives in cartridges layered on the SFRA or older SiteGenesis storefront, and none of it runs on Shopify. Migration means listing every cartridge, job and hook, deciding whether each one is still needed, and replacing the ones that are with Shopify theme sections, apps, checkout extensions or Shopify Functions."
                keyTakeaways={[
                  'Salesforce describes SFRA as JavaScript controllers in a model-view-controller pattern with Bootstrap',
                  'PWA Kit and Managed Runtime launched in 2021 as Salesforce\'s alternative to SFRA',
                  'Cartridges that no longer do useful work are retired, not rebuilt',
                ]}
                citationSource="Salesforce Developers, Storefront Reference Architecture overview, checked 22 Oct 2026"
              />
              <AnswerFirstDefinition
                term="Getting Data Out of Salesforce Commerce Cloud"
                definition="SFCC data leaves through two routes: Business Manager import and export for catalogs, price books, inventory, customers and orders, and the Open Commerce API (OCAPI) or Salesforce Commerce API (SCAPI) for scripted pulls, including the final top-up just before launch."
                keyTakeaways={[
                  'OCAPI is split into a Shop API, a Data API and a Meta API',
                  'Every OCAPI request needs a client ID',
                  'Salesforce notes data can be exported from Production and Development instances',
                ]}
                citationSource="Salesforce Developers, OCAPI and B2C Commerce architecture docs, checked 22 Oct 2026"
              />
              <AnswerFirstDefinition
                term="SFCC Price Books and Promotions on Shopify Plus"
                definition="SFCC price books and promotions are rebuilt rather than copied. Price books become Shopify prices, Markets pricing or B2B catalogs; promotion rules become Shopify discounts, or a Shopify Function where the rule is custom. Each rebuilt promotion is tested against sample baskets with known totals."
                keyTakeaways={[
                  'Salesforce lists B2C Commerce Premium with 100 sites and 3,500 price books',
                  'Existing coupon codes are exported and reloaded so printed and emailed codes keep working',
                  'Stacking and exclusivity rules are the ones most likely to need a Shopify Function',
                ]}
                citationSource="Salesforce Commerce pricing page, checked 22 Oct 2026"
              />
            </div>
          </div>
        </section>

        {/* ── 04. WHY LEAVE SFCC (RITOVEX NUMBERED SERVICES ROWS) ── */}
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
                Why Brands Replatform Off Salesforce Commerce Cloud
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                The four reasons SFCC teams give us most often, and what changes on Shopify Plus:
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
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#8E8E9F', letterSpacing: '0.08em' }}>The SFCC Bottleneck:</span>
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
              source="salesforce_to_shopify_plus_page"
              defaultSource="salesforce"
              defaultTarget="shopify-plus"
            />
          </div>
        </section>

        {/* ── 05. THE ENTERPRISE ARCHITECTURE BLUEPRINT (RITOVEX AUTO-SCROLL TABS) ── */}

        <div id="architecture-blueprint">
          <EnterpriseArchitectureBlueprint
            badge="// ENTERPRISE MIGRATION BLUEPRINT"
            title="How an SFCC Estate Maps Onto Shopify Plus"
            subtitle="Cartridges become theme sections, apps and Functions. Business Manager jobs move to Flow or integration code. Your ERP and Salesforce clouds stay connected."
            legacySource="SFCC / Demandware"
            targetStack="Shopify Plus Enterprise Architecture"
            ctaLabel="Schedule an Architecture Scoping Call"
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
                Salesforce Commerce Cloud vs. Shopify Plus
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Facts from Salesforce&apos;s and Shopify&apos;s own pages, each linked and checked on 22 October 2026.
              </p>
            </div>

            <div style={{ overflowX: 'auto', borderRadius: '14px', border: '1px solid #E6E6EC' }}>
              <table className="pp-table" style={{ margin: 0, width: '100%', background: '#FFFFFF' }}>
                <thead style={{ background: '#F6F6F9' }}>
                  <tr>
                    <th style={{ color: '#141414', fontWeight: 700 }}>Feature / Dimension</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>Salesforce Commerce Cloud (SFCC)</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>Shopify Plus Enterprise</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>What It Means for Your Brand</th>
                    <th style={{ color: '#141414', fontWeight: 700 }}>Source (checked 22 Oct 2026)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Listed price</td>
                    <td>B2C Commerce Premium: contact for pricing</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>$2,300 a month on a 3-year term, from $2,500 on a 1-year term, or a variable platform fee</td>
                    <td>Compare Shopify&apos;s published fee with your own SFCC contract</td>
                    <td><SourceLink href={SRC.sfPricing}>Salesforce Commerce pricing</SourceLink>; <SourceLink href={SRC.shopPlusPricing}>Shopify Plus pricing</SourceLink></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Sites and price books</td>
                    <td>Premium lists 100 sites and 3,500 price books</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>One store with Markets, or separate expansion stores per brand</td>
                    <td>Each SFCC site needs a Markets or expansion store decision</td>
                    <td><SourceLink href={SRC.sfPricing}>Salesforce Commerce pricing</SourceLink></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Custom code model</td>
                    <td>Cartridges on SFRA (JavaScript controllers, MVC, Bootstrap) or PWA Kit, launched in 2021</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Liquid theme sections, apps, checkout extensions and Shopify Functions</td>
                    <td>Every cartridge needs a keep, replace or retire decision</td>
                    <td><SourceLink href={SRC.sfra}>Salesforce SFRA overview</SourceLink></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Data access</td>
                    <td>OCAPI Shop, Data and Meta APIs; a client ID is mandatory for all requests</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Admin API and CSV imports for products, customers and orders</td>
                    <td>Scripted OCAPI pulls make the final top-up repeatable</td>
                    <td><SourceLink href={SRC.ocapi}>Salesforce OCAPI docs</SourceLink></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Environments</td>
                    <td>One account with production, staging and development instances, plus 3 to 47 sandboxes</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Hosted store, tested on a separate development store before launch</td>
                    <td>Export from Production or Development, not from sandboxes</td>
                    <td><SourceLink href={SRC.b2cArchitecture}>Salesforce B2C Commerce architecture</SourceLink></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Redirects</td>
                    <td>URL rules and URL redirects configured in Business Manager</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Up to 20,000,000 redirects on Plus; Markets subfolders need their own redirects</td>
                    <td>Build one redirect set per locale, not one for the whole store</td>
                    <td><SourceLink href={SRC.sfUrlMapping}>Salesforce URL mapping</SourceLink>; <SourceLink href={SRC.shopRedirects}>Shopify redirects</SourceLink></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Variants</td>
                    <td>Master products with variation attributes</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Up to 2,048 variants and up to three options per product</td>
                    <td>Masters with a fourth attribute are split before import</td>
                    <td><SourceLink href={SRC.shopVariants}>Shopify variant limits</SourceLink></td>
                  </tr>
                  <tr>
                    <td className="name" style={{ fontWeight: 700, color: '#141414' }}>Subscriptions</td>
                    <td>Usually run through a third-party cartridge</td>
                    <td style={{ color: '#047857', fontWeight: 600 }}>Shopify Subscriptions app: weekly, monthly or yearly renewals; contract import and export</td>
                    <td>Plan the contract and saved-card transfer early</td>
                    <td><SourceLink href={SRC.shopSubscriptions}>Shopify Subscriptions help</SourceLink></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── SFCC EXPORT, URL PATTERNS & RISKS ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', paddingTop: 0 }}>
          <div className="pp-wrap" style={{ maxWidth: '960px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 14px' }}>
              What Comes Out of SFCC, and How
            </h2>
            <p style={{ fontSize: '16px', color: '#494852', lineHeight: 1.6, margin: '0 0 20px' }}>
              Business Manager exports cover most objects as files. For repeatable pulls we script the <SourceLink href={SRC.ocapi}>Open Commerce API</SourceLink>, run against an instance type that <SourceLink href={SRC.b2cArchitecture}>Salesforce says allows data export</SourceLink>.
            </p>
            <ul style={{ margin: '0 0 36px', paddingLeft: '22px', display: 'grid', gap: '10px' }}>
              {EXPORT_ITEMS.map((e) => (
                <li key={e.t} style={{ fontSize: '15px', color: '#494852', lineHeight: 1.55 }}>
                  <strong style={{ color: '#141414' }}>{e.t}:</strong> {e.d}
                </li>
              ))}
            </ul>

            <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#141414', margin: '0 0 12px' }}>
              SFCC URL patterns in the 301 map
            </h3>
            <p style={{ fontSize: '16px', color: '#494852', lineHeight: 1.6, margin: '0 0 16px' }}>
              Your URL rules decide which of these you have. Salesforce&apos;s own <SourceLink href={SRC.sfSeoUrlRules}>SEO URL rules guide</SourceLink> tells teams to identify indexed legacy URLs and prepare redirects before changing them, and we start from the same list.
            </p>
            <ul style={{ margin: '0 0 36px', paddingLeft: '22px', display: 'grid', gap: '10px' }}>
              {URL_PATTERNS.map((u) => (
                <li key={u.from} style={{ fontSize: '15px', color: '#494852', lineHeight: 1.55 }}>
                  <code style={{ fontFamily: 'var(--pp-mono)', fontSize: '13.5px', color: '#141414' }}>{u.from}</code> to {u.to}
                </li>
              ))}
            </ul>

            <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#141414', margin: '0 0 12px' }}>
              Risks specific to SFCC moves
            </h3>
            <ul style={{ margin: '0 0 28px', paddingLeft: '22px', display: 'grid', gap: '10px' }}>
              {PLATFORM_RISKS.map((r) => (
                <li key={r} style={{ fontSize: '15px', color: '#494852', lineHeight: 1.55 }}>{r}</li>
              ))}
            </ul>

            <p style={{ fontSize: '16px', color: '#494852', lineHeight: 1.6, margin: 0 }}>
              On PWA Kit today? Compare a theme build with <Link href="/services/headless-shopify-development" style={SRC_LINK_STYLE}>headless Shopify development</Link> and our notes on <Link href="/headless-commerce" style={SRC_LINK_STYLE}>headless commerce</Link>. For the migration itself, see our <Link href="/services/shopify-migration-agency" style={SRC_LINK_STYLE}>Shopify migration service</Link> and <Link href="/services/shopify-plus-agency" style={SRC_LINK_STYLE}>Shopify Plus development</Link>; for ERP and order management links, <Link href="/services/ecommerce-erp-integration" style={SRC_LINK_STYLE}>ecommerce ERP integration</Link>. Size the budget with the <Link href="/tools/replatforming-cost-calculator" style={SRC_LINK_STYLE}>replatforming cost calculator</Link>, or browse other source platforms in the <Link href="/replatforming" style={SRC_LINK_STYLE}>replatforming hub</Link>, including <Link href="/replatforming/netsuite-suitecommerce-to-shopify-plus" style={SRC_LINK_STYLE}>SuiteCommerce to Shopify Plus</Link>.
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
                  Our 7-Step SFCC to Shopify Plus Process
                </h2>
                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  Every phase ends at a sign-off gate. The cartridge list is agreed before the quote, promotions pass basket tests before the theme ships, and the redirect map is checked per locale before DNS moves.
                </p>
                <ModalCTAButton label="Start Your Migration Audit" region="us" btnVariant="primary-dark" />
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

        {/* ── MID-PAGE CTA. Sits after the Working Process section and before the
            agency comparison + SEO checklist below, roughly two-thirds through the page --
            the stretch after the Working Process CTA where a convinced reader otherwise has
            nothing to click until the ROI calculator, many sections later. ── */}
        <MidPageCTA
          headline="Worried about losing rankings during the switch?"
          sub="Send us your sitemap or your top landing pages. We will show you how the 1-to-1 redirect map would handle your SFCC URL rules and locales before you commit to a migration date."
          label="Get my redirect risk review"
        />

        {/* ── 09. RITOVEX FAQ ACCORDION ── */}

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
                Four checks to run on any agency quoting a Salesforce replatform to Shopify Plus:
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
            <SeoLinkEquityChecklist sourcePlatform="salesforce" />
          </div>
        </section>

        <CommerceRoiCalculator city="Enterprise Store" region="us" />

        <FAQ
          eyebrow="SFCC TO SHOPIFY PLUS FAQ"
          headline="Real Questions Enterprise &amp; SMB Teams Ask"
          items={FAQ_ITEMS}
          categories={FAQ_CATEGORIES}
        />

        {/* ── 10. RITOVEX FINAL HIGH-IMPACT CTA BANNER (WITH FOUNDER HEADSHOT) ── */}
        <section className="pp-sec" style={{ backgroundColor: '#141414', color: '#FFFFFF', padding: 'clamp(64px, 8vh, 96px) 0' }}>
          <div className="pp-wrap" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <div className="rv-badge" style={{ background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)', color: '#FFFFFF', marginBottom: '24px' }}>
              <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="#FF5622">
                <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
              </svg>
              <span>Get Started Today</span>
            </div>

            <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.15, margin: '0 0 18px' }}>
              Ready to Scope Your SFCC to Shopify Plus Replatform?
            </h2>

            <p style={{ fontSize: 'clamp(16px, 1.8vw, 18.5px)', color: '#A0A0B2', lineHeight: 1.6, margin: '0 auto 32px', maxWidth: '58ch' }}>
              A short scoping call with founder Bhavesh Barot. We review your cartridges, sites, locales and integrations, then send a fixed price per phase in writing before you commit to anything.
            </p>

            {/* Founder Profile Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '100px', padding: '6px 20px 6px 6px', margin: '0 auto 28px' }}>
              <div style={{ position: 'relative', width: '44px', height: '44px' }}>
                <Image
                  src="/bhavesh_avatar-240.webp"
                  alt="Bhavesh Barot, Founder of FactoryJet"
                  width={44}
                  height={44}
                  style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <span style={{ position: 'absolute', bottom: '0', right: '0', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10B981', border: '2px solid #141414' }} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#FFFFFF' }}>Bhavesh Barot</div>
                <div style={{ fontSize: '11px', color: '#FF7A52', fontFamily: 'var(--pp-mono)' }}>Founder &amp; Principal Commerce Architect</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
              <ModalCTAButton label="Schedule a Free Discovery Call" region="us" btnVariant="primary-light" />
            </div>

            <p style={{ marginTop: '20px', fontSize: '13px', color: '#7E7E92', fontFamily: 'var(--pp-mono)' }}>
              ✓ Engineer-Led · Fixed Price per Phase · Demo Before You Sign
            </p>
          </div>
        </section>

      </main>

      <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', padding: '48px 0', borderTop: '1px solid #E6E6EC' }}>
        <div className="pp-wrap">
          <AuthorCard />
        </div>
      </section>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}

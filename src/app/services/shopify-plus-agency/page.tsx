import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

const PAGE_MODIFIED = '2026-08-06';

export const metadata: Metadata = {
  title: 'Shopify Plus Agency: Enterprise Development | FactoryJet',
  description:
    'Enterprise Shopify Plus agency for US brands. Custom checkout extensibility, Shopify Functions, B2B wholesale catalogs, expansion stores, and ERP sync.',
  keywords: [
    'shopify plus agency',
    'shopify plus development agency',
    'shopify plus ecommerce agency',
    'shopify plus design agency',
    'best shopify plus agency',
    'shopify plus developers',
    'shopify plus partner',
    'enterprise shopify development',
    'shopify plus b2b',
    'shopify functions development',
    'checkout extensibility agency',
    'shopify plus headless',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Shopify Plus Agency | Enterprise Shopify Development | FactoryJet',
    description:
      'Enterprise Shopify Plus builds: checkout extensibility, Shopify Functions, B2B catalogs, expansion stores, automation, headless, and ERP integration.',
    url: 'https://factoryjet.com/services/shopify-plus-agency',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet, Shopify Plus agency for US brands' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Plus Agency | FactoryJet',
    description: 'Enterprise Shopify Plus development: Functions, checkout extensibility, B2B, expansion stores, headless, and ERP integration.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/shopify-plus-agency',
    languages: {
      'en-US': 'https://factoryjet.com/services/shopify-plus-agency',
      'x-default': 'https://factoryjet.com/services/shopify-plus-agency',
    },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const FAQ_CATEGORIES = [
  { key: 'basics', label: 'Plus basics' },
  { key: 'platform', label: 'Plus features' },
  { key: 'b2b', label: 'B2B & wholesale' },
  { key: 'technical', label: 'Build & tech' },
  { key: 'working', label: 'Working together' },
  { key: 'engagement', label: 'Scope & engagement' },
];

const FAQ_ITEMS = [
  {
    category: 'basics',
    question: 'What is a Shopify Plus agency?',
    answer:
      'A Shopify Plus agency builds stores on Shopify enterprise tier. The work focuses on capabilities standard plans do not expose. These include checkout extensibility, Shopify Functions, and B2B catalogs. They also cover expansion stores and organization admin settings. Storefront design matters, but brands hire Plus specialists for backend logic.',
  },
  {
    category: 'basics',
    question: 'What is Shopify Plus?',
    answer:
      'Shopify Plus is the enterprise plan. It supports 9 expansion stores and unlimited staff accounts. It allows up to 25 custom React-based storefronts and up to 200 locations. It also includes 100 themes, unlimited staging environments, Launchpad, and the Checkout Branding API. Growing brands upgrade when standard plan limits restrict operations.',
  },
  {
    category: 'basics',
    question: 'Do we actually need Shopify Plus, or will a standard plan do?',
    answer:
      'Most brands do not need Plus for traffic volume alone. They need it for specific enterprise features. Common drivers include regional expansion stores and native B2B accounts. Others need custom checkout logic or higher API limits. If you cannot name the specific feature you need, you may not be ready. We advise you honestly on our first discovery call.',
  },
  {
    category: 'basics',
    question: 'How is Shopify Plus different from the standard Shopify plans?',
    answer:
      'Standard storefront tools are largely similar. The real difference is the enterprise layer. Plus provides expansion stores under one organization admin and the Checkout Branding API. It includes custom Shopify Functions, B2B company models, Launchpad scheduling, and headless allowances. You are buying control over checkout and back-office logic.',
  },
  {
    category: 'basics',
    question: 'How long does a Shopify Plus build take?',
    answer:
      'A focused Plus build usually runs 4 to 8 weeks. A full replatform takes 8 to 14 weeks. This includes B2B catalogs, ERP integrations, and international markets. Timeline variables include catalog data quality, third-party system connections, and custom Shopify Functions requirements. We scope all technical requirements before providing a fixed quote.',
  },
  {
    category: 'basics',
    question: 'Can you migrate us onto Shopify Plus from another platform?',
    answer:
      'Yes. We migrate stores from Adobe Commerce, Salesforce Commerce Cloud, BigCommerce, WooCommerce, and custom backends. Products, customers, order history, and SEO URLs transfer with comprehensive 301 redirect mapping. We focus on B2B contract pricing and account hierarchies. We reconcile every customer record before go-live.',
  },
  {
    category: 'basics',
    question: 'What does a Shopify Plus agency do that a general Shopify developer does not?',
    answer:
      'A general developer works with Liquid themes, app installs, and standard admin settings. A Plus build requires custom Rust or JavaScript Functions compiled to WebAssembly. It demands custom checkout UI extensions and high-volume GraphQL calls. It also requires B2B data modeling and multi-store architecture. This requires specialized enterprise engineering.',
  },
  {
    category: 'basics',
    question: 'Are you a certified Shopify Plus Partner?',
    answer:
      'We focus on engineering capability rather than marketing badges. Bring us your complex Plus requirements. We build custom checkout rules, B2B company structures, expansion stores, and ERP sync. Judge us on the precision of our technical architecture. Does your procurement team require a formal directory badge? We clarify fit immediately on our discovery call.',
  },
  {
    category: 'platform',
    question: 'How many expansion stores do we get on Shopify Plus?',
    answer:
      'Shopify Plus includes 9 expansion stores as standard. Brands use them for international regions, distinct sub-brands, or dedicated B2B portals. We help you evaluate whether a new market requires a separate store. Shopify Markets often achieves this on a single storefront. It requires far less operational maintenance.',
  },
  {
    category: 'platform',
    question: 'What is checkout extensibility and do we have to move to it?',
    answer:
      'Checkout extensibility is the upgrade-safe framework for customizing checkout. It uses checkout UI extensions, web pixels, and the Checkout Branding API. These replace legacy checkout.liquid files. Shopify deprecated checkout.liquid in February 2023. Every new Plus build must use checkout extensibility from day one.',
  },
  {
    category: 'platform',
    question: 'What happened to checkout.liquid and additional scripts?',
    answer:
      'Shopify retired additional scripts and checkout.liquid. Thank you and Order status pages were moved to new extensibility APIs. Stores that were auto-upgraded often lost tracking pixels and post-purchase scripts. We audit and rebuild conversion tracking and post-purchase surveys. We build order status widgets with modern UI extensions.',
  },
  {
    category: 'platform',
    question: 'Can we run different currencies, languages, and pricing per region?',
    answer:
      'Yes. Shopify Markets controls pricing, currency, and language. You customize catalog availability by country or customer group. A single store with tailored markets works best for most merchants. It avoids the overhead of managing separate stores. It avoids catalog duplication and unifies inventory management.',
  },
  {
    category: 'platform',
    question: 'What is Shopify Audiences and can we use it?',
    answer:
      'Shopify Audiences generates custom high-intent buyer audiences using machine learning across the Shopify network. It exports target segments directly to Meta, Google, and Pinterest ad accounts. It requires Shopify Plus, Shopify Payments, and a US or Canadian store location. It significantly improves top-of-funnel ad efficiency.',
  },
  {
    category: 'platform',
    question: 'What is Launchpad used for?',
    answer:
      'Launchpad automates flash sales, product drops, and theme updates. Events trigger automatically at scheduled times without manual intervention. We combine Launchpad with Shopify Flow workflows. This coordinates price adjustments, inventory publishing, and customer tagging reliably on launch day.',
  },
  {
    category: 'b2b',
    question: 'Can Shopify Plus handle wholesale and B2B properly?',
    answer:
      'Shopify models a company as the primary B2B purchasing entity. Companies contain specific locations, buyer contacts, and role permissions. Each location supports its own shipping addresses and payment terms. You assign custom catalogs with negotiated pricing.',
  },
  {
    category: 'b2b',
    question: 'How do B2B catalogs and negotiated pricing work?',
    answer:
      'You assign customized catalogs to company locations. Catalogs dictate available products and wholesale pricing for authenticated buyers. Volume pricing tiers apply directly in the cart. You also configure minimum order quantities and case pack rules.',
  },
  {
    category: 'b2b',
    question: 'Can B2B and DTC run on the same store?',
    answer:
      'Yes. Running B2B and DTC on a unified storefront is often best practice. You manage a single catalog, unified inventory pool, and centralized orders. B2B buyers log in to access wholesale pricing. A separate expansion store is rarely required. Use one only when brand positioning or catalogs differ completely.',
  },
  {
    category: 'b2b',
    question: 'Can we offer net terms and purchase orders to trade accounts?',
    answer:
      'Yes. Payment terms like Net 30 or Net 60 are assigned per company location. Wholesale buyers check out on account with mandatory purchase order numbers. Credit limits often live in your ERP. We sync them via API to place over-limit orders on hold automatically.',
  },
  {
    category: 'technical',
    question: 'What are Shopify Functions and what can they actually do?',
    answer:
      'Shopify Functions execute custom backend commerce logic within Shopify infrastructure. They compile to WebAssembly using Rust or JavaScript. They run server-side during checkout. They execute in under 5 milliseconds. There is zero latency penalty or script overhead.',
  },
  {
    category: 'technical',
    question: 'We still have Script Editor scripts. What happens to that logic?',
    answer:
      'Legacy Script Editor code is rewritten into modern Shopify Functions. We migrate custom discounts and payment gating into discrete Functions. We also convert custom delivery rules into WebAssembly. This ensures pricing calculations and checkout validation remain 100% accurate.',
  },
  {
    category: 'technical',
    question: 'Do we have to go headless on Shopify Plus?',
    answer:
      'No. Most enterprise brands achieve better ROI with a modern Online Store 2.0 Liquid theme. Headless architecture fits specific needs. It works well when unifying web apps, mobile apps, and digital kiosks. Plus permits up to 25 headless storefronts. However, modern Liquid themes deliver fast performance at lower maintenance cost.',
  },
  {
    category: 'technical',
    question: 'Can you integrate Shopify Plus with our ERP and back office?',
    answer:
      'Yes. We integrate enterprise ERPs including NetSuite, SAP, Microsoft Dynamics 365, and Acumatica. We connect through Admin GraphQL APIs and iPaaS middleware like Celigo. We synchronize multi-location inventory, wholesale catalogs, customer companies, order fulfillment, and financial records.',
  },
  {
    category: 'working',
    question: 'Do we own the code and the accounts?',
    answer:
      'Yes, 100%. We commit all Liquid code and Functions to your GitHub repository. Custom apps live in your repositories as well. You retain administrative control of your Shopify organization. You own all API credentials and cloud environments with zero vendor lock-in.',
  },
  {
    category: 'working',
    question: 'What happens after launch?',
    answer:
      'We provide dedicated monthly engineering retainers post-launch. Retainers cover continuous checkout optimization, new Shopify Functions, ERP integration monitoring, and international expansion. If your team manages operations in-house, we provide comprehensive technical documentation and sprint-based support.',
  },
  {
    category: 'engagement',
    question: 'Do you work without a monthly retainer?',
    answer:
      'Yes. A Shopify Plus build can be a fixed-scope project that ends when it ships. Many brands prefer that option. Retainers make sense when a store evolves continuously with new markets and custom Functions. They should never be a mandatory condition for working together. We always quote stand-alone fixed-scope builds with transparent milestones.',
  },
  {
    category: 'engagement',
    question: 'What does a Shopify Plus development agency do that a regular Shopify agency cannot?',
    answer:
      'Three enterprise capabilities define true Plus development. First is checkout customization using Shopify Functions and checkout extensibility. Second is native B2B company accounts, tiered price lists, and net terms. Third is expansion store architecture paired with automated Shopify Flow operations. We provide verified case studies across all three areas.',
  },
  {
    category: 'engagement',
    question: 'Should we hire a Shopify Plus development agency or move to a headless build?',
    answer:
      'Stay on standard Plus Liquid themes unless you have specific headless requirements. Headless provides custom frontend freedom but introduces infrastructure maintenance. Valid triggers include multi-brand design systems, web-to-native app unification, or complex digital product configurators. Liquid themes deliver outstanding speed and lower total cost of ownership.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((i) => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })),
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Shopify Plus development and enterprise e-commerce implementation',
  name: 'Shopify Plus agency services',
  description:
    'Shopify Plus development for US brands: checkout extensibility and checkout UI extensions, Shopify Functions in Rust and JavaScript, B2B companies, company locations and catalogs, expansion stores and organization admin, Shopify Flow and Launchpad automation, Shopify Markets, headless React storefronts, and ERP integration.',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'BusinessAudience', name: 'Enterprise and high-growth e-commerce brands, B2B sellers, and multi-brand groups' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Shopify Plus services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shopify Plus store design and build' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Checkout extensibility and checkout UI extensions' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shopify Functions development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'B2B on Shopify implementation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Expansion stores and multi-market rollout' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Headless Shopify storefronts' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shopify Plus ERP and systems integration' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Replatforming to Shopify Plus' } },
    ],
  },
};

const webpageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/shopify-plus-agency#webpage',
  url: 'https://factoryjet.com/services/shopify-plus-agency',
  name: 'Shopify Plus Agency',
  description:
    'Shopify Plus agency for US brands: checkout extensibility, Shopify Functions, B2B companies and catalogs, expansion stores, automation, headless, and ERP integration.',
  dateModified: PAGE_MODIFIED,
  author: { '@type': 'Person', name: 'Bhavesh Barot', url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/', jobTitle: 'Founder, FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  about: { '@id': 'https://factoryjet.com/#organization' },
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://factoryjet.com/#organization',
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  description: 'FactoryJet is an e-commerce development agency that builds Shopify, Shopify Plus, and B2B commerce for US brands.',
  sameAs: ['https://www.linkedin.com/company/factoryjet'],
};

/** Single source of truth for the breadcrumb trail. Feeds BOTH the visible
 *  <Breadcrumbs> component and the BreadcrumbList JSON-LD below, so the two
 *  can never drift into showing a different path than the schema claims. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Shopify Plus Agency', url: 'https://factoryjet.com/services/shopify-plus-agency' },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: BREADCRUMB_ITEMS.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
};

const STATS = [
  { b: 'Checkout', s: 'extensibility & UI extensions' },
  { b: 'Functions', s: 'rust & javascript, server side' },
  { b: 'B2B native', s: 'companies, catalogs, terms' },
  { b: 'Any ERP', s: 'netsuite, sap, dynamics 365' },
];

// Citations fetch-verified 2026-08-06 against the linked Shopify primary sources.
// Do not edit a figure or a date here without re-opening the source page first.
const SOURCED = [
  {
    v: '9',
    d: 'expansion stores are supported on the Shopify Plus plan. It includes unlimited staff accounts, 200 locations, and 25 custom storefronts.',
    src: 'Shopify Help Center, Shopify Plus plan',
    href: 'https://help.shopify.com/en/manual/intro-to-shopify/pricing-plans/plans-features/shopify-plus-plan',
  },
  {
    v: 'Feb 2023',
    d: 'Shopify announced checkout.liquid deprecation to improve security and performance. Stores upgraded to checkout extensibility and UI extensions.',
    src: 'Shopify Help Center, checkout upgrade',
    href: 'https://help.shopify.com/en/manual/checkout-settings/checkout-extensibility/checkout-upgrade',
  },
  {
    v: 'Wasm',
    d: 'Shopify Functions execute as WebAssembly inside Shopify. They compile from Rust or JavaScript to deliver server-side speed.',
    src: 'Shopify.dev, Functions',
    href: 'https://shopify.dev/docs/api/functions',
  },
];

const PAINS = [
  {
    i: '⛌',
    t: 'Checkout was auto-upgraded and things broke.',
    d: 'Legacy scripts were lost during migration. Post-purchase offers, tracking pixels, or order status logic quietly stopped working.',
  },
  {
    i: '▦',
    t: 'Apps are doing work Functions should do.',
    d: 'A stack of bundle and discount apps adds monthly cost and script bloat. Most of that logic belongs in native Shopify Functions.',
  },
  {
    i: '⇄',
    t: 'B2B is bolted on with tags and workarounds.',
    d: 'Wholesale runs on customer tags and price spreadsheets. Shopify Plus provides native companies, catalogs, and net terms.',
  },
];

const PLUS_LAYER = [
  { t: "Checkout extensibility.", d: "We build checkout UI extensions and web pixels. They replace checkout.liquid. Customizations remain upgrade-safe across platform releases." },
  { t: "Shopify Functions.", d: "Functions execute server-side WebAssembly. They handle discounts, bundles, and delivery rules. They run in under 5 milliseconds." },
  { t: "B2B on Shopify.", d: "Shopify provides native B2B companies and locations. You manage wholesale catalogs and volume pricing. No third-party app is required." },
  { t: "Expansion stores.", d: "The Plus plan includes 9 expansion stores. Use them for regional markets or wholesale. Manage all stores in one central admin." },
  { t: "Shopify Markets.", d: "Adjust currency, language, and pricing from one store. Serve multiple countries on a single inventory pool. Reduce operational overhead." },
  { t: "Launchpad and Flow.", d: "Launchpad automates sales and product drops. Shopify Flow manages order routing and fraud holds. Both run on automated schedules." },
  { t: "Headless storefronts.", d: "Plus supports up to 25 custom storefronts. Connect via the Storefront API. Deploy to Oxygen or Next.js hosting." },
  { t: "Organization admin.", d: "Manage team access across all stores. Set custom user permissions once. Simplify security and user governance." },
];

const FUNCTIONS_LIST = [
  "Discounts: tiered, stacked, and conditional logic. Functions replace apps and legacy Script Editor scripts.",
  "Cart transform: bundles and kits. Component pricing expands or merges at the line level.",
  "Delivery customization: filter shipping methods. Hide, rename, or reorder options by cart contents or address.",
  "Payment customization: control payment methods. Gate options by order value, customer tag, or B2B account.",
  "Cart validation: verify order rules. Block invalid carts before customers reach payment.",
  "Fulfillment constraints: keep related items together. Ensure matching products ship on the same fulfillment.",
  "Order routing: choose optimal locations. Direct orders to the nearest warehouse automatically.",
  "Pickup points: local collection options. Generate store pickup choices and carrier collection points.",
  "Language support: written in Rust or JavaScript. Code is versioned and deployed with your repository.",
];

const B2B_LIST = [
  "Companies: central purchasing accounts. Each company holds specific locations and buyer contacts.",
  "Company locations: branch management. Each location carries distinct billing and shipping addresses.",
  "Catalogs: tailored product selections. Assign negotiated wholesale pricing per company location.",
  "Quantity rules: order minimums. Enforce case packs, pallet increments, and minimum order values in cart.",
  "Payment terms: purchase orders. Trade buyers order on net terms instead of paying by card.",
  "Credit limits: ERP integration. Hold over-limit wholesale orders for manual review automatically.",
  "Store architecture: unified or separate. Run B2B and DTC on one store, or launch an expansion storefront.",
  "Draft orders: sales rep tools. Sales teams create quotes and draft orders on behalf of trade buyers.",
];

const INTEGRATIONS = [
  "ERP: NetSuite, SAP Business One, Dynamics 365, and Acumatica. We sync multi-location inventory and orders.",
  "Middleware: Celigo, Patchworks, and Alloy Automation. We connect custom microservices via GraphQL APIs.",
  "PIM systems: Akeneo, Salsify, and Plytix. We map metafields and metaobjects for structured catalog data.",
  "Search and merchandising: Algolia, Searchspring, and Klevu. We configure faceted search and discovery.",
  "Marketing: Klaviyo, Attentive, and HubSpot. We synchronize customer events and consent status.",
  "Customer support: Gorgias, Zendesk, and Loop Returns. We wire customer service directly to order data.",
  "Logistics: Avalara, ShipStation, and ShipBob. We calculate tax rates and route multi-warehouse shipping.",
  "Trade integrations: EDI 850 and 810 documents. We configure cXML punchout into Coupa and Ariba systems.",
];

const READY_SIGNS = [
  { n: '01', t: 'Checkout logic keeps getting refused.', d: 'You want a custom checkout rule like hiding a payment method or bundling items. Every solution seems to require a separate app. That is where Plus is required.' },
  { n: '02', t: 'A second region needs its own store.', d: 'Markets on one store is no longer enough. You need separate catalogs, local pricing, and dedicated fulfillment for another country.' },
  { n: '03', t: 'Wholesale is running on workarounds.', d: 'Tags and spreadsheets are standing in for true B2B companies, custom catalogs, and payment terms.' },
  { n: '04', t: 'Your app bill is doing platform work.', d: 'Several apps exist only to add basic logic. Shopify Functions handles these natively with zero script overhead.' },
  { n: '05', t: 'Access control is unmanageable.', d: 'Multiple contractors work across stores without central governance. Organization admin solves permission sprawl.' },
  { n: '06', t: 'Automation limits are the bottleneck.', d: 'Flow limits, staging stores, or staff seat caps restrict your growth. Plus lifts these platform ceilings.' },
];

const STEPS = [
  { n: '01', t: 'Audit and scope.', d: 'We review your store, checkout customizations, app stack, and integrations. We define which logic moves to Functions and which apps should be removed.' },
  { n: '02', t: 'Design and build.', d: 'Storefront design and Liquid theme development. We implement checkout UI extensions and the Branding API instead of legacy code.' },
  { n: '03', t: 'Functions and B2B.', d: 'Custom discount, delivery, and payment logic written as Functions. B2B companies, catalogs, and payment terms configured natively.' },
  { n: '04', t: 'Integrate.', d: 'We wire ERP, PIM, search, and 3PL systems through Admin GraphQL APIs. All sync workflows are verified on staging first.' },
  { n: '05', t: 'Launch and iterate.', d: 'Staging QA, data reconciliation, and 301 redirect validation. We execute monitored cutovers with complete post-launch roadmaps.' },
];

const checkIcon = (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
    <path d="M1 4l2.5 2.5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const bulletList = (items: string[]) => (
  <ul style={{ marginTop: '20px', display: 'grid', gap: '10px' }}>
    {items.map((item) => (
      <li key={item} style={{ display: 'flex', gap: '10px', fontSize: '15px', lineHeight: 1.55, color: 'var(--pp-body)' }}>
        <span
          style={{
            marginTop: '3px', flex: 'none', display: 'inline-flex', height: '18px', width: '18px',
            alignItems: 'center', justifyContent: 'center', borderRadius: '999px',
            background: 'rgba(240,90,40,0.1)', color: 'var(--pp-orange-dark)',
          }}
        >
          {checkIcon}
        </span>
        {item}
      </li>
    ))}
  </ul>
);

export default function ShopifyPlusAgencyPage() {
  return (
    <>
      <script id="splus-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="splus-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="splus-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }} />
      <script id="splus-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script id="splus-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* Hero */}
        <section className="pp-dotgrid" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="pp-wrap" style={{ paddingTop: 'clamp(44px,6vh,84px)', paddingBottom: 'clamp(44px,6vh,84px)', position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">Shopify Plus agency</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '19ch' }}>
                  Shopify Plus work that lives below the theme.
                </h1>
                <p className="pp-lead" style={{ maxWidth: '50ch' }}>
                  We are a Shopify Plus development agency for high-growth US brands. We engineer checkout extensibility, server-side Shopify Functions, and native B2B wholesale. We build expansion stores and live ERP sync. Every system is built so platform updates never break checkout.
                </p>
                <HeroInlineForm source="us_shopify_plus_hero" region="us" submitLabel="Get a Shopify Plus scoping call" />
              </div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--pp-line)', boxShadow: '0 24px 48px -28px rgba(20,17,15,0.28)' }}>
                <Image
                  src="/images/us/services/hero-shopify.webp"
                  alt="An e-commerce team reviewing a Shopify Plus storefront and checkout configuration"
                  width={600}
                  height={400}
                  priority
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stat band */}
        <section className="pp-sec tint" style={{ paddingTop: 'clamp(32px,4vh,52px)', paddingBottom: 'clamp(32px,4vh,52px)' }}>
          <div className="pp-wrap">
            <div className="pp-stats">
              {STATS.map((s) => (<div className="pp-stat" key={s.b}><b>{s.b}</b><span>{s.s}</span></div>))}
            </div>
          </div>
        </section>

        {/* Answer-first definition */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-mlabel">{'// the basics'}</p>
                <h2 style={{ marginTop: '10px' }}>What is a Shopify Plus agency?</h2>
                <div style={{ marginTop: '18px', display: 'grid', gap: '14px' }} className="pp-lead">
                  <p>
                    A Shopify Plus agency builds and runs stores on Shopify enterprise tier. Most of the engineering sits below the theme. We develop checkout extensibility, custom Shopify Functions, native B2B catalogs, and multi-region expansion stores. We also integrate enterprise ERP and warehouse systems.
                  </p>
                  <p>
                    That is the honest distinction between this and general{' '}
                    <Link href="/services/shopify-development" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>
                      Shopify development
                    </Link>. A standard Shopify build is a design, a theme, a product catalog, and an app stack. For many brands, that is the ideal solution. For merchants scaling beyond mobile web into dedicated apps, we also engineer{' '}
                    <Link href="/services/ecommerce-app-development" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>
                      ecommerce app development
                    </Link>{' '}
                    integrating the Shopify Storefront API. A Plus build is a platform engineering project with a custom storefront attached.
                  </p>
                  <p>
                    The practical test is simple. If the thing blocking you is how the store looks, you do not need Plus. If it is custom checkout logic, B2B pricing models, or multi-store permissions, that requires the Plus tier. If you already run Plus and need platform replatforming, see{' '}
                    <Link href="/replatforming" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>
                      e-commerce replatforming
                    </Link>{' '}
                    and our{' '}
                    <Link href="/replatforming/salesforce-commerce-cloud-to-shopify-plus" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>
                      Salesforce Commerce Cloud to Shopify Plus
                    </Link>{' '}
                    migration work.
                  </p>
                </div>
              </div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--pp-line)', boxShadow: '0 24px 48px -28px rgba(20,17,15,0.28)' }}>
                <Image
                  src="/images/us/commerce/salesforce-commerce-cloud-to-shopify-plus-integration-map.webp"
                  alt="An integration map showing a Shopify Plus store connected to ERP, PIM, and logistics systems"
                  width={600}
                  height={375}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sourced facts */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// what shopify documents'}</p>
            <h2 style={{ marginTop: '10px' }}>What the Plus plan actually gives you.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '66ch' }}>
              These metrics come directly from official Shopify documentation. Plan limits and deprecation dates matter. Agency websites frequently publish inaccurate claims about these boundaries.
            </p>
            <ul className="pp-bento" style={{ marginTop: '32px' }}>
              {SOURCED.map((s) => (
                <li className="pp-card" key={s.v}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{s.v}</h3>
                  <p>{s.d}</p>
                  <p style={{ marginTop: '10px', fontSize: '13px' }}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>{s.src}</a>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Problem */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// the problem'}</p>
            <h2 style={{ marginTop: '10px' }}>What we usually find on an inherited Plus store.</h2>
            <ul className="pp-bento" style={{ marginTop: '32px' }}>
              {PAINS.map((p) => (
                <li className="pp-card" key={p.t}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}><span aria-hidden="true">{p.i}</span> {p.t}</h3><p>{p.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* The Plus layer */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// the enterprise layer'}</p>
            <h2 style={{ marginTop: '10px' }}>The eight things a Plus build is really about.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              The storefront tools on Plus are largely the same ones every Shopify store gets. This is the part that is not.
            </p>
            <ul className="pp-bento n8" style={{ marginTop: '32px' }}>
              {PLUS_LAYER.map((f) => (
                <li className="pp-card" key={f.t}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{f.t}</h3><p>{f.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Checkout extensibility */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">{'// checkout'}</p>
            <h2 style={{ marginTop: '10px' }}>Checkout extensibility, and the deadline most stores met badly.</h2>
            <div style={{ marginTop: '18px', display: 'grid', gap: '14px' }} className="pp-lead">
              <p>
                Checkout used to be customized by editing checkout.liquid and pasting scripts into the admin. Shopify deprecated that approach in February 2023. It replaced legacy scripts with checkout extensibility: UI extensions, web pixels, and the Checkout Branding API. These customizations survive platform updates without breaking.
              </p>
              <p>
                The transition dates matter because many stores transitioned without notice. Shopify set August 28, 2025 as the deadline for upgrading Thank you and Order status pages. Automatic upgrades began in January 2026. Legacy scripts and checkout.liquid customizations were disabled. Many Plus stores run today with broken analytics pixels or missing post-purchase widgets. We audit these points first to ensure tracking and conversion funnels remain intact.
              </p>
            </div>
          </div>
        </section>

        {/* Functions */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-mlabel">{'// functions'}</p>
                <h2 style={{ marginTop: '10px' }}>Shopify Functions instead of another app.</h2>
                <p className="pp-lead" style={{ marginTop: '14px' }}>
                  Functions customize the backend logic of Shopify using WebAssembly. Rust is the fastest option, and JavaScript is also supported. Functions execute directly within Shopify infrastructure. They replace slow third-party scripts with fast server-side execution.
                </p>
                {bulletList(FUNCTIONS_LIST)}
              </div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--pp-line)', boxShadow: '0 24px 48px -28px rgba(20,17,15,0.28)' }}>
                <Image
                  src="/images/us/platforms/platform-build.webp"
                  alt="A developer reviewing checkout logic and function code for a Shopify Plus store"
                  width={600}
                  height={450}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* B2B */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'center' }} className="pp-herogrid">
              <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--pp-line)', boxShadow: '0 24px 48px -28px rgba(20,17,15,0.28)' }}>
                <Image
                  src="/images/us/commerce/b2b-ecommerce-trade-counter.webp"
                  alt="A trade counter where wholesale buyers order against their own account pricing"
                  width={600}
                  height={375}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <div>
                <p className="pp-mlabel">{'// b2b on shopify'}</p>
                <h2 style={{ marginTop: '10px' }}>Wholesale modelled properly, not tagged.</h2>
                <p className="pp-lead" style={{ marginTop: '14px' }}>
                  Shopify models a company as the business entity. Each company contains locations and buying contacts.
                  Catalogs attach to company locations to offer exclusive product selections and negotiated pricing. That is a true data model. Migrate onto native structures rather than keeping tag workarounds alive.
                </p>
                {bulletList(B2B_LIST)}
                <p className="pp-lead" style={{ marginTop: '18px' }}>
                  For the wider trade-selling picture, including ERP-integrated dealer portals, see our{' '}
                  <Link href="/b2b-ecommerce" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>B2B e-commerce</Link>{' '}
                  and{' '}
                  <Link href="/ecommerce-for-manufacturers" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>manufacturer commerce</Link>{' '}
                  builds.
                </p>
              </div>
            </div>
          </div>
        </section>

    

        <MidPageCTA
          headline={'Outgrowing standard Shopify?'}
          sub={'Tell us your order volume and where the current setup strains. We will tell you honestly whether Plus is worth it yet.'}
          label={'Talk about Shopify Plus'}
        />

        {/* Multi-store */}
        <section className="pp-sec tint">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">{'// multi-store'}</p>
            <h2 style={{ marginTop: '10px' }}>Expansion stores, markets, and knowing which you need.</h2>
            <div style={{ marginTop: '18px', display: 'grid', gap: '14px' }} className="pp-lead">
              <p>
                Shopify Plus supports up to 9 expansion stores. However, expansion stores require separate operational overhead. Each expansion store carries its own catalog, theme, and app stack. Shopify Markets is often the better initial approach. It adjusts currency, language, pricing, and content from a single catalog. For brands entering international markets, Shopify Markets delivers faster results with less operational friction.
              </p>
              <p>
                Expansion stores are ideal when product catalogs differ substantially across regions. They also suit distinct brand acquisitions requiring custom design systems. Separate stores support localized warehousing, tax compliance, or standalone wholesale portals. The organization admin unifies user access and billing. Staff permissions across all stores live in one dashboard.
              </p>
            </div>
          </div>
        </section>

        {/* Headless */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">{'// headless'}</p>
            <h2 style={{ marginTop: '10px' }}>Headless on Plus, and when to say no to it.</h2>
            <div style={{ marginTop: '18px', display: 'grid', gap: '14px' }} className="pp-lead">
              <p>
                Shopify Plus supports up to 25 custom React-based storefronts. Developers build them with Hydrogen and Oxygen or Next.js via the Storefront API. Headless is a powerful capability, but it is often recommended unnecessarily.
              </p>
              <p>
                Headless is ideal when frontends require complex interactive state that Liquid cannot deliver. It suits organizations with dedicated CMS platforms or unified commerce across mobile apps and POS kiosks. However, headless is usually the wrong choice if speed is your only goal. A well-engineered Liquid theme on Shopify CDN delivers 90+ Core Web Vitals at a fraction of ongoing maintenance cost. We clarify these trade-offs transparently before project kick-off. More on the architecture trade-offs in our{' '}
                <Link href="/headless-commerce" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>headless commerce</Link>{' '}
                build.
              </p>
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-mlabel">{'// integrations'}</p>
                <h2 style={{ marginTop: '10px' }}>What we wire into a Plus build.</h2>
                <p className="pp-lead" style={{ marginTop: '14px' }}>
                  A Plus store rarely acts as the sole system of record. It connects to core enterprise systems. Clean data synchronization ensures teams trust inventory, fulfillment, and financial reports.
                </p>
                {bulletList(INTEGRATIONS)}
              </div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--pp-line)', boxShadow: '0 24px 48px -28px rgba(20,17,15,0.28)' }}>
                <Image
                  src="/images/us/commerce/salesforce-commerce-cloud-to-shopify-plus-multi-market.webp"
                  alt="A multi-market commerce operation running across regions from one platform"
                  width={600}
                  height={375}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mid-page CTA */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <div className="pp-card" style={{ padding: 'clamp(28px,4vw,44px)', textAlign: 'left' }}>
              <h2 style={{ marginTop: 0 }}>Not sure Plus is the right tier yet?</h2>
              <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '62ch' }}>
                Evaluate plan tiers before signing contracts. Share your checkout goals and wholesale pricing models. Tell us how many regional stores you operate. We will confirm if a standard Shopify plan meets your needs.
              </p>
              <div style={{ marginTop: '20px' }}>
                <ModalCTAButton label="Talk to the Founder" region="us" btnVariant="primary-light" />
              </div>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// side by side'}</p>
            <h2 style={{ marginTop: '10px' }}>Shopify Plus against the alternatives.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              Checkout control and B2B depth decide this choice. Hosting responsibilities matter far more than a generic feature list.
            </p>
            <div style={{ marginTop: '32px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead><tr><th>Option.</th><th>Best for.</th><th>Trade-off.</th><th>Our read.</th></tr></thead>
                <tbody>
                  <tr className="me">
                    <td className="name">Shopify Plus.</td>
                    <td>Checkout logic, native B2B, expansion stores, low ops burden.</td>
                    <td>Platform boundaries are Shopify&apos;s, not yours.</td>
                    <td>The default for most US brands at this stage.</td>
                  </tr>
                  <tr>
                    <td className="name">Shopify standard plans.</td>
                    <td>DTC brands whose blocker is design and merchandising.</td>
                    <td>No expansion stores, limited checkout control.</td>
                    <td>Right answer far more often than agencies admit.</td>
                  </tr>
                  <tr>
                    <td className="name">Adobe Commerce.</td>
                    <td>Very large attribute-heavy catalogs and deep native B2B.</td>
                    <td>Hosting, patching, and upgrades are yours to run.</td>
                    <td>Worth it only if the catalog genuinely demands it.</td>
                  </tr>
                  <tr>
                    <td className="name">BigCommerce Enterprise.</td>
                    <td>Mid-market B2B with strong native features.</td>
                    <td>Smaller app and talent ecosystem.</td>
                    <td>A real option, usually a closer call than expected.</td>
                  </tr>
                  <tr>
                    <td className="name">Salesforce Commerce Cloud.</td>
                    <td>Large retailers already deep in the Salesforce stack.</td>
                    <td>Implementation cost and change velocity.</td>
                    <td>Most brands we speak to are leaving it, not joining it.</td>
                  </tr>
                  <tr>
                    <td className="name">Headless on Plus.</td>
                    <td>Custom front ends and multi-surface commerce.</td>
                    <td>You now own a front end and its maintenance.</td>
                    <td>Justified less often than it is proposed.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Ready signs */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// the signals'}</p>
            <h2 style={{ marginTop: '10px' }}>Six signs you have outgrown the standard plan.</h2>
            <ul className="pp-bento" style={{ marginTop: '32px' }}>
              {READY_SIGNS.map((s) => (
                <li className="pp-card" key={s.n}>
                  <p className="pp-mlabel" style={{ marginBottom: '8px' }}>{s.n}</p>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{s.t}</h3><p>{s.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Process */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// how it runs'}</p>
            <h2 style={{ marginTop: '10px' }}>How a Shopify Plus build runs.</h2>
            <ul className="pp-bento n5" style={{ marginTop: '36px' }}>
              {STEPS.map((s) => (
                <li className="pp-card" key={s.n}>
                  <p className="pp-mlabel" style={{ marginBottom: '8px' }}>{s.n}</p>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{s.t}</h3><p>{s.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* People */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// who does this'}</p>
            <h2 style={{ marginTop: '10px' }}>The people a Plus build has to satisfy.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              Enterprise commerce decisions must satisfy three distinct stakeholders. The first person leads revenue growth. The second person maintains architecture stability. The third person is the buyer checking out.
            </p>
            <div className="pp-duo" style={{ marginTop: '32px' }}>
              <figure>
                <div className="pp-shot">
                  <img
                    src="/images/us/commerce/salesforce-commerce-cloud-to-shopify-plus-people-architect-review.webp"
                    alt="A solutions architect reviewing an enterprise commerce integration plan"
                    width={1280} height={800} loading="lazy" decoding="async"
                  />
                </div>
                <figcaption>Functions and integrations get reviewed like code, because that is what they are.</figcaption>
              </figure>
              <figure>
                <div className="pp-shot">
                  <img
                    src="/images/us/commerce/salesforce-commerce-cloud-to-shopify-plus-people-exec-meeting.webp"
                    alt="An executive team reviewing commerce platform decisions"
                    width={1280} height={800} loading="lazy" decoding="async"
                  />
                </div>
                <figcaption>Plan limits and deprecation dates belong in the decision, not in the surprise.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <FAQ
          eyebrow="SHOPIFY PLUS FAQ"
          headline="Questions brands ask before a Plus build."
          items={FAQ_ITEMS}
          categories={FAQ_CATEGORIES}
        />

        <FinalCTA
          variant="dark"
          eyebrow="SHOPIFY PLUS AGENCY"
          headline="Scope your Shopify Plus build."
          sub="Tell us what blocks your checkout conversions. Share your wholesale pricing rules and regional store counts. We review your architecture and send a clear scope proposal before development begins."
          primaryCta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See our Shopify work', href: '/portfolio' }}
          objectionHandler="You retain complete ownership of all code, custom Functions, and merchant accounts. We give direct advice: if a standard plan works, we will tell you."
        />

      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}

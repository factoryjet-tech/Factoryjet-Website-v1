import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

const PAGE_MODIFIED = '2026-08-06';

export const metadata: Metadata = {
  title: 'Shopify Plus Agency | Enterprise Shopify Development | FactoryJet',
  description:
    'Shopify Plus agency for US brands: checkout extensibility, Shopify Functions, B2B companies and catalogs, expansion stores, Shopify Flow and Launchpad, headless Hydrogen, and ERP integration.',
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
  alternates: { canonical: 'https://factoryjet.com/services/shopify-plus-agency' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const FAQ_CATEGORIES = [
  { key: 'basics', label: 'Plus basics' },
  { key: 'platform', label: 'Plus features' },
  { key: 'b2b', label: 'B2B & wholesale' },
  { key: 'technical', label: 'Build & tech' },
  { key: 'working', label: 'Working together' },
];

const FAQ_ITEMS = [
  {
    category: 'basics',
    question: 'What is a Shopify Plus agency?',
    answer:
      'A Shopify Plus agency builds and maintains stores on the enterprise tier of Shopify, where the work is mostly the things the standard plans do not expose: checkout extensibility, Shopify Functions, B2B companies and catalogs, expansion stores, and the organization admin. The store design matters, but the reason a brand hires a Plus specialist is usually the logic underneath it.',
  },
  {
    category: 'basics',
    question: 'What is Shopify Plus?',
    answer:
      'Shopify Plus is the enterprise plan. Shopify documents it as supporting 9 expansion stores, unlimited staff accounts, up to 25 custom React-based storefronts, up to 200 locations, up to 100 themes, unlimited staging stores, 1 TB of file storage per store, Launchpad, and the Checkout Branding API. Those limits are what a growing brand usually runs into first.',
  },
  {
    category: 'basics',
    question: 'Do we actually need Shopify Plus, or will a standard plan do?',
    answer:
      'Most brands do not need Plus for traffic. They need it for a specific capability: a second store for another region, real B2B accounts alongside DTC, custom checkout logic, or higher automation limits. If you cannot name the feature you are buying, you are probably not ready. We will tell you that on the call rather than after the proposal.',
  },
  {
    category: 'basics',
    question: 'How is Shopify Plus different from the standard Shopify plans?',
    answer:
      'The storefront tools are largely the same. The difference is the enterprise layer: expansion stores under one organization admin, the Checkout Branding API, deeper Shopify Functions use, B2B companies and catalogs, Launchpad scheduling, unlimited staff accounts, and headless storefront allowances. You are buying control over checkout, multi-store, and back-office logic, not a faster shop.',
  },
  {
    category: 'basics',
    question: 'How long does a Shopify Plus build take?',
    answer:
      'A focused Plus build usually runs several weeks. A full replatform with B2B, ERP integration, and multiple markets runs longer. The variables that actually move the date are catalog and product data quality, how many integrations are in scope, and whether custom checkout logic needs Functions written and reviewed. We scope those before quoting.',
  },
  {
    category: 'basics',
    question: 'Can you migrate us onto Shopify Plus from another platform?',
    answer:
      'Yes. We migrate from Magento and Adobe Commerce, Salesforce Commerce Cloud, BigCommerce, WooCommerce, and custom builds. Products, customers, order history, SEO URLs, and B2B account structures come across with 301 redirects and a cutover plan. Contract pricing and account hierarchies are the parts most often silently corrupted, so we reconcile those before and after go-live.',
  },
  {
    category: 'basics',
    question: 'What does a Shopify Plus agency do that a general Shopify developer does not?',
    answer:
      'A general Shopify developer works in Liquid, themes, apps, and the admin. A Plus build adds Rust or JavaScript Functions compiled to WebAssembly, checkout UI extensions, the Admin GraphQL API at enterprise volume, B2B data modelling, and multi-store governance. Different skill set, different review process, and a much bigger blast radius if it goes wrong.',
  },
  {
    category: 'basics',
    question: 'Are you a certified Shopify Plus Partner?',
    answer:
      'We are not going to dress up a badge as a capability claim on this page. The useful version is this: bring us your actual Plus problem, the checkout rule you cannot get, the B2B model you need, the expansion store decision, the ERP sync, and judge us on how we answer it. If a formal partner badge is a hard procurement requirement on your side, say so early and we will tell you plainly whether we meet it.',
  },
  {
    category: 'platform',
    question: 'How many expansion stores do we get on Shopify Plus?',
    answer:
      'Shopify documents that the Shopify Plus plan supports 9 expansion stores. In practice they get used for separate regions, separate brands, or a dedicated B2B store sitting beside DTC. We help you decide whether a market genuinely needs its own store or whether Shopify Markets on one store solves it with less operational overhead.',
  },
  {
    category: 'platform',
    question: 'What is checkout extensibility and do we have to move to it?',
    answer:
      'Checkout extensibility is the current, upgrade-safe way to customize checkout using apps, checkout UI extensions, web pixels, and the Checkout Branding API instead of editing checkout.liquid. Shopify announced checkout.liquid as deprecated in February 2023, so yes, this is the supported path now. Any new Plus build should be on it from day one.',
  },
  {
    category: 'platform',
    question: 'What happened to checkout.liquid and additional scripts?',
    answer:
      'Shopify set 28 August 2025 as the deadline for upgrading Thank you and Order status pages, after which additional scripts and checkout.liquid became non-editable and personally identifiable information stopped being accessible through legacy customizations. Shopify then began automatic upgrades in January 2026, with legacy customizations lost. If yours were auto-upgraded, the tracking and post-purchase logic likely needs rebuilding.',
  },
  {
    category: 'platform',
    question: 'Can we run different currencies, languages, and pricing per region?',
    answer:
      'Yes. Shopify Markets lets you control how customers experience the store based on location, customer group, retail location, or sales channel, including currency, language, pricing, and theme content. For most brands one store with well-configured markets beats a store per country, because it avoids duplicating catalog and inventory work.',
  },
  {
    category: 'platform',
    question: 'What is Shopify Audiences and can we use it?',
    answer:
      'Shopify Audiences generates custom audiences for advertising platforms and exports them to your ad account automatically. It requires the Shopify Plus plan, Shopify Payments, and a store located in the United States or Canada. For US DTC brands on Plus it is one of the few plan features that touches acquisition rather than operations.',
  },
  {
    category: 'platform',
    question: 'What is Launchpad used for?',
    answer:
      'Launchpad schedules and automates promotions, so a sale, a product drop, or a theme change happens at a set time without anyone staying up to press a button. Shopify lists it as a Plus plan feature. We normally wire it alongside Shopify Flow so inventory, tagging, and publishing move together on one schedule.',
  },
  {
    category: 'b2b',
    question: 'Can Shopify Plus handle wholesale and B2B properly?',
    answer:
      'Yes, natively, and it is now one of the strongest reasons to be on Plus. Shopify models a company as the business entity making a B2B purchase, containing locations and contacts. Each company location carries its own billing and shipping addresses, and catalogs are associated with company locations to offer exclusive product selections and negotiated pricing.',
  },
  {
    category: 'b2b',
    question: 'How do B2B catalogs and negotiated pricing work?',
    answer:
      'You attach a catalog to a company location. That catalog controls which products the buyer sees and what they pay, so two dealers logging into the same store can see different assortments and different prices. Volume pricing and quantity rules sit on top, which is how case, pallet, and minimum order quantities get enforced at the cart.',
  },
  {
    category: 'b2b',
    question: 'Can B2B and DTC run on the same store?',
    answer:
      'Yes, and for most brands that is the right call. One catalog, one inventory pool, one admin, with B2B buyers seeing their own pricing after login. A separate B2B expansion store makes sense when the assortments barely overlap or when the two sides of the business want genuinely different storefront experiences.',
  },
  {
    category: 'b2b',
    question: 'Can we offer net terms and purchase orders to trade accounts?',
    answer:
      'Yes. Payment terms are assigned at the company location level, so a buyer checks out on account rather than by card, with a purchase order reference captured at checkout. Where credit limits live in your ERP, we read them at checkout so an over-limit account is held for approval instead of ordering freely.',
  },
  {
    category: 'technical',
    question: 'What are Shopify Functions and what can they actually do?',
    answer:
      'Shopify Functions let developers customize the backend logic that powers parts of Shopify, building functionality that is not provided natively. They can be written in any language that compiles to WebAssembly, with Rust recommended as the most performant choice and JavaScript also supported. They run server side inside Shopify, so there is no third-party script slowing checkout.',
  },
  {
    category: 'technical',
    question: 'We still have Script Editor scripts. What happens to that logic?',
    answer:
      'It gets rewritten as Functions. Discount logic, payment method gating, and shipping rules that used to live in Script Editor map onto the discount, payment customization, and delivery customization function APIs. The rewrite is usually the least glamorous and most important part of a checkout extensibility upgrade, because a missed rule shows up as a wrong price.',
  },
  {
    category: 'technical',
    question: 'Do we have to go headless on Shopify Plus?',
    answer:
      'No, and most brands should not. Headless is worth it when you need a custom front end, content that lives in another system, or a storefront shared across apps and kiosks. Shopify documents the Plus plan as supporting up to 25 custom React-based storefronts. If a fast Liquid theme does the job, we will build that instead.',
  },
  {
    category: 'technical',
    question: 'Can you integrate Shopify Plus with our ERP and back office?',
    answer:
      'Yes. We integrate NetSuite, SAP Business One and S/4HANA, Microsoft Dynamics 365 Business Central, Acumatica, Epicor, and Sage, using the Admin GraphQL API plus middleware such as Celigo, Patchworks, or a custom service. Products, inventory by location, customers and companies, orders, invoices, and fulfilment status are the usual sync surface.',
  },
  {
    category: 'working',
    question: 'Do we own the code and the accounts?',
    answer:
      'Yes. The theme code, any Functions and custom apps, and the platform accounts are yours, in your repository and your Shopify organization. There is no proprietary layer you lose access to if you stop working with us, and no part of the build that only we can maintain.',
  },
  {
    category: 'working',
    question: 'What happens after launch?',
    answer:
      'Plus stores are never finished, so we usually continue on a monthly retainer covering platform changes, checkout and Functions work, new markets or expansion stores, integration maintenance, and conversion work. If you would rather run it in-house, we hand over documentation and stay available for the checkout and Functions work specifically.',
  },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((i) => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })),
};

const SERVICE_SCHEMA = {
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

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/shopify-plus-agency#webpage',
  url: 'https://factoryjet.com/services/shopify-plus-agency',
  name: 'Shopify Plus Agency',
  description:
    'Shopify Plus agency for US brands: checkout extensibility, Shopify Functions, B2B companies and catalogs, expansion stores, automation, headless, and ERP integration.',
  dateModified: PAGE_MODIFIED,
  author: { '@type': 'Person', name: 'Bhavesh Barot', url: 'https://www.linkedin.com/in/bhaveshbarot/', jobTitle: 'Founder, FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  about: { '@id': 'https://factoryjet.com/#organization' },
};

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://factoryjet.com/#organization',
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  description: 'FactoryJet is an e-commerce development agency that builds Shopify, Shopify Plus, and B2B commerce for US brands.',
  sameAs: ['https://www.linkedin.com/company/factoryjet'],
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://factoryjet.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Shopify Plus Agency', item: 'https://factoryjet.com/services/shopify-plus-agency' },
  ],
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
    d: 'expansion stores supported on the Shopify Plus plan, alongside unlimited staff accounts, up to 200 locations, up to 100 themes, unlimited staging stores, and up to 25 custom React-based storefronts.',
    src: 'Shopify Help Center, Shopify Plus plan',
    href: 'https://help.shopify.com/en/manual/intro-to-shopify/pricing-plans/plans-features/shopify-plus-plan',
  },
  {
    v: 'Feb 2023',
    d: 'when Shopify announced that checkout.liquid was deprecated, moving to a foundation for checkout and accounts that is more secure, upgrade-safe, and customized using apps. The deadline for Thank you and Order status pages was 28 August 2025, with automatic upgrades starting January 2026.',
    src: 'Shopify Help Center, checkout upgrade',
    href: 'https://help.shopify.com/en/manual/checkout-settings/checkout-extensibility/checkout-upgrade',
  },
  {
    v: 'Wasm',
    d: 'Shopify Functions run as WebAssembly inside Shopify, written in any language that compiles to Wasm, with Rust recommended as the most performant choice and JavaScript also supported.',
    src: 'Shopify.dev, Functions',
    href: 'https://shopify.dev/docs/api/functions',
  },
];

const PAINS = [
  {
    i: '⛌',
    t: 'Checkout was auto-upgraded and things broke',
    d: 'Legacy additional scripts and checkout.liquid customizations were lost in the migration, so post-purchase offers, tracking pixels, or order status logic quietly stopped working and nobody caught it for a month.',
  },
  {
    i: '▦',
    t: 'Apps are doing work Functions should do',
    d: 'A stack of discount, bundle, and shipping apps each add scripts, monthly cost, and a failure mode. Most of that logic belongs in a Function running inside Shopify, not in a third-party script.',
  },
  {
    i: '⇄',
    t: 'B2B is bolted on with tags and workarounds',
    d: 'Wholesale runs on customer tags, a hidden collection, and a spreadsheet of prices, instead of companies, company locations, and catalogs, which is what Shopify actually gives you on Plus.',
  },
];

const PLUS_LAYER = [
  { t: 'Checkout extensibility', d: 'Checkout UI extensions, the Checkout Branding API, and web pixels replacing checkout.liquid and additional scripts. Upgrade-safe, so a Shopify release does not break your checkout.' },
  { t: 'Shopify Functions', d: 'Server-side logic compiled to WebAssembly for discounts, bundles, cart transforms, delivery and payment rules, validation, and order routing.' },
  { t: 'B2B on Shopify', d: 'Companies, company locations, contacts, catalogs, volume pricing, quantity rules, and payment terms, native rather than an app layer.' },
  { t: 'Expansion stores', d: 'Nine additional stores on the Plus plan for regions, brands, or a dedicated wholesale storefront, governed from one organization admin.' },
  { t: 'Shopify Markets', d: 'Currency, language, pricing, and theme content varied by location, customer group, retail location, or sales channel from a single store.' },
  { t: 'Launchpad and Flow', d: 'Launchpad, listed by Shopify as a Plus plan feature, schedules launches, sales, and theme changes. Shopify Flow handles the rules: tagging, fraud holds, stock alerts, and order routing.' },
  { t: 'Headless storefronts', d: 'Up to 25 custom React-based storefronts on the Storefront API where a custom front end genuinely earns its keep.' },
  { t: 'Organization admin', d: 'Access, custom user groups, and store permissions managed across the whole group instead of store by store.' },
];

const FUNCTIONS_LIST = [
  'Discounts: tiered, stacked, and conditional discount logic that used to need an app or a Script Editor script',
  'Cart transform: bundles, kits, and component pricing expanded or merged at the line level',
  'Delivery customization: hiding, renaming, or reordering shipping methods by cart contents, address, or customer',
  'Payment customization: gating payment methods by order value, customer tag, B2B company, or region',
  'Cart and checkout validation: blocking invalid carts before the customer reaches payment',
  'Fulfillment constraints: keeping items that must ship together on the same fulfilment',
  'Order routing: choosing which location fulfils an order rather than accepting the default',
  'Local pickup and pickup point delivery option generators for store collection and carrier pickup networks',
  'Written in Rust or JavaScript, reviewed, versioned, and deployed with the rest of your code',
];

const B2B_LIST = [
  'Companies: the business entity that makes the purchase, holding locations and contacts',
  'Company locations: individual branches with their own billing and shipping addresses',
  'Catalogs attached per location, controlling assortment and negotiated pricing separately for each buyer',
  'Volume pricing and quantity rules so case, pallet, and minimum order quantities are enforced at the cart',
  'Payment terms and purchase order references at checkout, so trade buyers order on account rather than by card',
  'Credit limit checks read from your ERP, holding over-limit orders for approval instead of letting them through',
  'B2B and DTC on one store and one inventory pool, or a dedicated wholesale expansion store where the assortments diverge',
  'Draft orders and quote flows for reps writing orders on behalf of an account',
];

const INTEGRATIONS = [
  'ERP: NetSuite, SAP Business One and S/4HANA, Microsoft Dynamics 365 Business Central, Acumatica, Epicor, Sage Intacct',
  'Middleware: Celigo, Patchworks, Alloy Automation, or a custom service against the Admin GraphQL API',
  'PIM and product data: Akeneo, Salsify, Plytix, plus metafields and metaobjects for structured content in Shopify',
  'Search and merchandising: Algolia, Searchspring, Klevu, and Shopify Search & Discovery',
  'Marketing and CRM: Klaviyo, Attentive, HubSpot, Salesforce, with consent state respected across markets',
  'Support and post-purchase: Gorgias, Zendesk, Loop, and returns portals wired to real order data',
  'Tax, logistics, and 3PL: Avalara, ShipStation, ShipBob, and carrier accounts with multi-location inventory',
  'Trade integrations: EDI 850 and 810 flows, and cXML punchout into Coupa or Ariba for procurement-led buyers',
];

const READY_SIGNS = [
  { n: '01', t: 'Checkout logic keeps getting refused', d: 'You want a rule at checkout, hiding a payment method, a conditional discount, a bundle, and every answer is an app that half does it. That is the Plus line.' },
  { n: '02', t: 'A second region needs its own store', d: 'Markets on one store has stopped stretching, and you need separate catalog, pricing, and operations for another country or brand.' },
  { n: '03', t: 'Wholesale is running on workarounds', d: 'Tags, hidden collections, and a price spreadsheet are standing in for companies, catalogs, and terms.' },
  { n: '04', t: 'Your app bill is doing platform work', d: 'Several apps exist only to add logic Shopify Functions handles natively, each with its own script, cost, and failure mode.' },
  { n: '05', t: 'Access control is unmanageable', d: 'Multiple stores, contractors, and agencies, with permissions handled store by store and nobody sure who has what.' },
  { n: '06', t: 'Automation limits are the bottleneck', d: 'Flow, staging stores, staff seats, or locations are capping how the team works rather than how the store performs.' },
];

const STEPS = [
  { n: '01', t: 'Audit and scope', d: 'We review your current store, checkout customizations, app stack, B2B setup, and integrations, then say plainly which parts belong in Functions, which belong in an app, and which should be deleted.' },
  { n: '02', t: 'Design and build', d: 'Storefront design and Liquid or headless build, with checkout UI extensions and the Checkout Branding API rather than legacy checkout edits.' },
  { n: '03', t: 'Functions and B2B', d: 'Discount, delivery, payment, validation, and routing logic written as Functions. Companies, locations, catalogs, and terms modelled properly.' },
  { n: '04', t: 'Integrate', d: 'ERP, PIM, search, marketing, and logistics wired through the Admin GraphQL API or middleware, with the sync surface agreed before code is written.' },
  { n: '05', t: 'Launch and iterate', d: 'Staging QA, data reconciliation, 301 redirects where a migration is involved, then a monitored cutover and a roadmap rather than a handover email.' },
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
      <script id="splus-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="splus-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="splus-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="splus-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="splus-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">

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
                  We are a Shopify Plus development agency for US brands that have outgrown what a theme and an app stack
                  can do. Checkout extensibility, Shopify Functions, native B2B, expansion stores, and ERP integration,
                  built so a Shopify release never breaks your checkout.
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
                    A Shopify Plus agency builds and runs stores on Shopify&apos;s enterprise tier, where most of the work
                    sits below the theme: checkout extensibility, Shopify Functions, native B2B, expansion stores, and the
                    integrations that connect all of it to the systems already running the business.
                  </p>
                  <p>
                    That is the honest distinction between this and general{' '}
                    <Link href="/services/shopify-development" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>
                      Shopify development
                    </Link>. A standard Shopify build is a design, a theme, a product catalog, and an app stack, and for a
                    great many brands that is exactly the right answer. A Plus build is a platform engineering job with a
                    storefront attached.
                  </p>
                  <p>
                    The practical test is simple. If the thing blocking you is how the store looks, you do not need Plus.
                    If it is what happens at checkout, how wholesale accounts are priced, or how many stores you can run
                    under one set of permissions, that is the Plus tier and it is what this page covers. If you already
                    run Plus and the platform underneath is the problem rather than the tier, see{' '}
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
            <h2 style={{ marginTop: '10px' }}>What the Plus plan actually gives you</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '66ch' }}>
              These three come straight from Shopify&apos;s own documentation, because plan limits and deprecation dates are
              exactly the sort of thing that gets repeated wrongly across agency sites.
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
            <h2 style={{ marginTop: '10px' }}>What we usually find on an inherited Plus store</h2>
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
            <h2 style={{ marginTop: '10px' }}>The eight things a Plus build is really about</h2>
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
            <h2 style={{ marginTop: '10px' }}>Checkout extensibility, and the deadline most stores met badly</h2>
            <div style={{ marginTop: '18px', display: 'grid', gap: '14px' }} className="pp-lead">
              <p>
                Checkout used to be customized by editing checkout.liquid and pasting additional scripts into the admin.
                Shopify announced that approach as deprecated in February 2023 and replaced it with checkout extensibility:
                checkout UI extensions, web pixels, the Checkout Branding API, and app blocks, all of which survive a
                platform update instead of breaking on one.
              </p>
              <p>
                The dates matter because a lot of stores got carried through them without noticing. Shopify set 28 August
                2025 as the deadline for upgrading the Thank you and Order status pages, after which additional scripts and
                checkout.liquid became non-editable and personally identifiable information stopped being available through
                legacy customizations. Automatic upgrades then began in January 2026, and anything still relying on
                additional scripts, script tag apps, or checkout.liquid was lost. So a share of Plus stores are running
                today with post-purchase offers, analytics events, or order status logic that quietly stopped firing. The
                first thing we do on an inherited store is check what the upgrade took with it, because a missing purchase
                event is a reporting problem that turns into a budget decision.
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
                <h2 style={{ marginTop: '10px' }}>Shopify Functions instead of another app</h2>
                <p className="pp-lead" style={{ marginTop: '14px' }}>
                  Functions let developers customize the backend logic that powers parts of Shopify, in any language that
                  compiles to WebAssembly. Rust is the most performant choice and JavaScript is supported. They run inside
                  Shopify, which is why they replace a third-party script rather than adding one.
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
                <h2 style={{ marginTop: '10px' }}>Wholesale modelled properly, not tagged</h2>
                <p className="pp-lead" style={{ marginTop: '14px' }}>
                  Shopify models a company as the business entity making a B2B purchase, containing locations and contacts.
                  Catalogs attach to company locations to offer exclusive product selections and negotiated pricing. That is
                  a real data model, and it is worth migrating onto rather than keeping a tag-based workaround alive.
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

        {/* Multi-store */}
        <section className="pp-sec tint">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">{'// multi-store'}</p>
            <h2 style={{ marginTop: '10px' }}>Expansion stores, markets, and knowing which you need</h2>
            <div style={{ marginTop: '18px', display: 'grid', gap: '14px' }} className="pp-lead">
              <p>
                Shopify documents the Plus plan as supporting 9 expansion stores. That number gets quoted a lot and acted
                on too quickly. An expansion store is a separate store with its own catalog, theme, apps, and operations,
                which is real ongoing work for whoever runs it. Shopify Markets is the lighter answer: it varies currency,
                language, pricing, and theme content by location, customer group, retail location, or sales channel from a
                single store, on one catalog and one inventory pool. For most brands entering a second or third country,
                that is the correct first move.
              </p>
              <p>
                Expansion stores earn their place when the assortment genuinely differs, when a separate brand needs its
                own identity and app stack, when a market has legal or fulfilment requirements a single store cannot carry
                cleanly, or when wholesale wants a storefront of its own. Above the stores sits the organization admin,
                where user access and custom user groups are handled once for the whole group rather than store by store.
              </p>
            </div>
          </div>
        </section>

        {/* Headless */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">{'// headless'}</p>
            <h2 style={{ marginTop: '10px' }}>Headless on Plus, and when to say no to it</h2>
            <div style={{ marginTop: '18px', display: 'grid', gap: '14px' }} className="pp-lead">
              <p>
                Shopify documents the Plus plan as supporting up to 25 custom React-based storefronts, built on the
                Storefront API with Hydrogen and deployed to Oxygen, or on a framework of your choosing. It is a genuine
                capability and it is also the single most oversold thing in this category.
              </p>
              <p>
                Headless is the right call when the front end needs to do something Liquid cannot, when content lives in a
                separate CMS that editors will not leave, or when one commerce backend has to serve a site, an app, and
                in-store screens. It is the wrong call when the actual goal is a faster storefront, because a well-built
                Liquid theme on Shopify&apos;s CDN is already fast and costs far less to maintain. We will tell you which
                of those two you are in before the proposal, not after. More on the architecture trade-offs in our{' '}
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
                <h2 style={{ marginTop: '10px' }}>What we wire into a Plus build</h2>
                <p className="pp-lead" style={{ marginTop: '14px' }}>
                  A Plus store is rarely the system of record. It reads and writes to the things that already run the
                  business, and the quality of that connection decides whether anyone trusts the numbers on screen.
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
                That is worth settling before anyone writes a proposal. Tell us what you are trying to do at checkout, how
                wholesale is priced today, and how many stores you run. We will tell you whether the standard plan still
                covers it, and say so plainly if it does.
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
            <h2 style={{ marginTop: '10px' }}>Shopify Plus against the alternatives</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              Checkout control, B2B depth, and who carries the hosting burden decide this far more than a feature checklist.
            </p>
            <div style={{ marginTop: '32px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead><tr><th>Option</th><th>Best for</th><th>Trade-off</th><th>Our read</th></tr></thead>
                <tbody>
                  <tr className="me">
                    <td className="name">Shopify Plus</td>
                    <td>Checkout logic, native B2B, expansion stores, low ops burden</td>
                    <td>Platform boundaries are Shopify&apos;s, not yours</td>
                    <td>The default for most US brands at this stage</td>
                  </tr>
                  <tr>
                    <td className="name">Shopify standard plans</td>
                    <td>DTC brands whose blocker is design and merchandising</td>
                    <td>No expansion stores, limited checkout control</td>
                    <td>Right answer far more often than agencies admit</td>
                  </tr>
                  <tr>
                    <td className="name">Adobe Commerce</td>
                    <td>Very large attribute-heavy catalogs and deep native B2B</td>
                    <td>Hosting, patching, and upgrades are yours to run</td>
                    <td>Worth it only if the catalog genuinely demands it</td>
                  </tr>
                  <tr>
                    <td className="name">BigCommerce Enterprise</td>
                    <td>Mid-market B2B with strong native features</td>
                    <td>Smaller app and talent ecosystem</td>
                    <td>A real option, usually a closer call than expected</td>
                  </tr>
                  <tr>
                    <td className="name">Salesforce Commerce Cloud</td>
                    <td>Large retailers already deep in the Salesforce stack</td>
                    <td>Implementation cost and change velocity</td>
                    <td>Most brands we speak to are leaving it, not joining it</td>
                  </tr>
                  <tr>
                    <td className="name">Headless on Plus</td>
                    <td>Custom front ends and multi-surface commerce</td>
                    <td>You now own a front end and its maintenance</td>
                    <td>Justified less often than it is proposed</td>
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
            <h2 style={{ marginTop: '10px' }}>Six signs you have outgrown the standard plan</h2>
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
            <h2 style={{ marginTop: '10px' }}>How a Shopify Plus build runs</h2>
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
            <h2 style={{ marginTop: '10px' }}>The people a Plus build has to satisfy</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              Enterprise commerce decisions get made by three people who want different things: the person accountable for
              revenue, the person who has to maintain it, and the buyer placing the order.
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
          headline="Questions brands ask before a Plus build"
          items={FAQ_ITEMS}
          categories={FAQ_CATEGORIES}
        />

        <FinalCTA
          variant="dark"
          eyebrow="SHOPIFY PLUS AGENCY"
          headline="Scope your Shopify Plus build"
          sub="Tell us what is blocking you at checkout, how wholesale is priced today, and how many stores and markets you run. We will tell you what fits and what it takes, in a fixed proposal before any work starts."
          primaryCta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See our Shopify work', href: '/portfolio' }}
          objectionHandler="You own the code, the Functions, and the platform accounts. Platform-agnostic advice: if the standard plan still covers you, we will say so."
        />

      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}

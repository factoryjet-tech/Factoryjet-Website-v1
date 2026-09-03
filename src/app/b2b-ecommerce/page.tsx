import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import EcommerceRoiCalculator from '@/components/commerce/EcommerceRoiCalculator';
import B2bWholesaleCalculator from '@/components/commerce/B2bWholesaleCalculator';
import Net30PaymentComparison from '@/components/commerce/Net30PaymentComparison';
import AnswerFirstDefinition from '@/components/commerce/AnswerFirstDefinition';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const PAGE_MODIFIED = '2026-08-29';

export const metadata: Metadata = {
  title: 'B2B E-Commerce Agency: Wholesale Platforms | FactoryJet',
  description:
    'B2B ecommerce agency building wholesale platforms with tiered pricing, net terms, account hierarchies, EDI, punchout, and ERP integration. Free consultation.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'B2B E-Commerce Agency | Wholesale & Multi-Channel Commerce Platforms | FactoryJet',
    description: 'B2B ecommerce agency building wholesale and multi-channel commerce platforms with tiered pricing, net terms, EDI, punchout, and ERP integration.',
    url: 'https://factoryjet.com/b2b-ecommerce',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet, B2B e-commerce development agency' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'B2B E-Commerce Development Agency | FactoryJet',
    description: 'B2B ecommerce platforms with tiered pricing, net terms, account hierarchies, and ERP integration.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/b2b-ecommerce',
    languages: {
      'en-US': 'https://factoryjet.com/b2b-ecommerce',
      'x-default': 'https://factoryjet.com/b2b-ecommerce',
    },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'B2B Basics' },
  { key: 'platforms', label: 'Platforms' },
  { key: 'features', label: 'Features' },
  { key: 'wholesale', label: 'Wholesale & Multi-Channel' },
  { key: 'integrations', label: 'ERP & Integrations' },
  { key: 'working', label: 'Working Together' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  { category: 'basics', question: 'What is B2B ecommerce?', answer: 'B2B ecommerce is selling to other businesses online, with the rules trade buyers expect: account-specific pricing, net terms, approvals, and fast reordering. We build the storefront and the system underneath it so your buyers self-serve instead of ordering by email and phone.' },
  { category: 'basics', question: 'What is the difference between B2B and DTC ecommerce?', answer: 'A DTC site sells to consumers at one price. A B2B site adds logins for trade accounts, tiered or contract pricing, net terms, quotes and approvals, account hierarchies, and gated catalogs. We can run both on one unified system.' },
  { category: 'basics', question: 'What are some examples of B2B ecommerce?', answer: 'A manufacturer letting distributors place and reorder online; a wholesaler giving each trade account its own price list and net terms; a brand running a DTC store and a gated B2B portal on the same catalog; a distributor with quote-and-approve workflows for large orders. We build all of these.' },
  { category: 'basics', question: 'How do you scope and price B2B ecommerce projects?', answer: 'We scope each engagement on integration depth, catalog complexity, and custom trade workflows. We send a fixed milestone proposal before any work starts, ensuring total cost transparency without hourly billing surprises.' },
  { category: 'basics', question: 'Who else builds B2B ecommerce platforms?', answer: 'Specialist B2B platform vendors such as OroCommerce and Virto Commerce sell software built for distribution. Large generalist agencies take on B2B builds alongside DTC work. We build on Shopify Plus, Adobe Commerce, BigCommerce, or Commerceflo and focus on the ERP-integrated end of B2B.' },
  { category: 'basics', question: 'What are the benefits of B2B ecommerce?', answer: 'Self-service ordering your buyers prefer, fewer manual errors, faster reorders, larger average orders, and hours back for your sales team. One system replaces the email-and-phone process that slows everyone down.' },
  { category: 'basics', question: 'How big is the B2B ecommerce market?', answer: 'US B2B ecommerce sales across sites, password-protected portals, and apps reached roughly $2.3 trillion in 2023, growing 17% year over year, according to Digital Commerce 360.' },
  { category: 'basics', question: 'Can DTC and B2B run on one site with different pricing?', answer: 'Yes. We build one storefront that serves retail shoppers and gives trade buyers their own login with tiered or contract pricing, net terms, and reordering, on one catalog and one inventory.' },
  { category: 'platforms', question: 'What is the best B2B ecommerce platform?', answer: 'There is no single best one; it depends on your catalog size, B2B rules, and budget. Shopify Plus suits a clean DTC-plus-B2B model on one store, Adobe Commerce (Magento) suits deep native B2B and very large catalogs, BigCommerce offers strong mid-market B2B value, and Commerceflo fits when a unified multi-channel engine is the goal.' },
  { category: 'platforms', question: 'How do I choose a B2B ecommerce platform?', answer: 'Match the platform to five things: your catalog size and complexity, your pricing rules (tiers, contracts, customer-specific catalogs), the integrations you need (ERP, PIM, POS, marketplaces), whether you also sell DTC, and your budget.' },
  { category: 'platforms', question: 'Shopify Plus vs Adobe Commerce vs BigCommerce for B2B?', answer: 'Shopify Plus for speed, a clean admin, and DTC + B2B on one store. Adobe Commerce for deep native B2B (company accounts, shared catalogs, requisition lists) and very large catalogs. BigCommerce for strong B2B features at mid-market value.' },
  { category: 'platforms', question: 'Is there an open-source B2B ecommerce platform?', answer: 'Yes. Adobe Commerce (Magento Open Source) and WooCommerce are open-source options we build B2B on. They offer full control and no platform fees, in exchange for hosting and maintenance you own.' },
  { category: 'platforms', question: 'Can you build a wholesale ecommerce platform?', answer: 'Yes. A wholesale ecommerce platform is a B2B store built for trade buyers: gated catalogs, per-account price lists, minimum order quantities, volume tiers, net terms, and fast reordering. We build it on the platform that fits and connect it to your ERP.' },
  { category: 'features', question: 'What B2B ecommerce features can you build?', answer: 'Tiered and contract pricing, quote and approval workflows, account hierarchies, net terms, purchase-order checkout, gated catalogs, customer-specific catalogs, fast reordering, sales-rep order-on-behalf, and ERP integration.' },
  { category: 'features', question: 'Can you integrate our ERP, PIM, POS, and marketplaces?', answer: 'Yes. We connect your ERP, PIM, POS, 3PL, and marketplaces into one order and inventory layer so pricing, stock, and orders stay in sync instead of living in separate systems.' },
  { category: 'features', question: 'Can you build a dealer or distributor portal?', answer: 'Yes. We build dealer, distributor, and wholesale portals with per-account pricing, order history, reordering, quote requests, and net terms, integrated with your ERP.' },
  { category: 'features', question: 'Can my sales reps place orders for accounts?', answer: 'Yes. We build order-on-behalf tools, account dashboards, and quoting so your reps work in the same system your buyers do, with full visibility of pricing and history.' },
  { category: 'wholesale', question: 'What is a wholesale ecommerce platform?', answer: 'A wholesale ecommerce platform is a B2B store built for trade buyers rather than consumers. It holds wholesale pricing behind a login, enforces minimum order quantities and case or pallet units, gives each account its own catalogue and price list, offers net terms and on-account checkout, and makes reordering forty SKUs a one-click job.' },
  { category: 'wholesale', question: 'What is the best B2B wholesale platform?', answer: 'It depends on catalogue size and trade complexity. Shopify Plus handles most wholesale operations cleanly and runs DTC on the same store. Adobe Commerce fits very large catalogues and deep native B2B. BigCommerce sits well in the mid-market.' },
  { category: 'wholesale', question: 'Can you build a B2B ecommerce site for manufacturers?', answer: 'Yes. Manufacturer builds usually mean dealer and distributor portals: per-account pricing, spec sheets and technical attributes, configurable or made-to-order products, warranty registration, and reordering, all synced to the ERP that holds your part master.' },
  { category: 'wholesale', question: 'Can you build B2B ecommerce for distributors?', answer: 'Yes. Distributor builds centre on large attribute-heavy catalogues, parametric and compatibility search, customer-specific assortments, contract pricing, bulk order pads, and tight inventory accuracy across multiple warehouses.' },
  { category: 'wholesale', question: 'What is multi-channel commerce for B2B?', answer: 'Multi-channel commerce means every route an order can arrive by writes to one system. A self-service portal, EDI from national accounts, punchout from procurement platforms, rep-written orders, marketplaces, and retail or POS all share the same catalogue, pricing rules, and inventory pool.' },
  { category: 'wholesale', question: 'Do you support EDI and punchout?', answer: 'Yes. We implement EDI 850 purchase orders, 855 acknowledgements, 856 advance ship notices, and 810 invoices, and cXML or OCI punchout so buyers inside Coupa, Ariba, Jaggaer, or Oracle procurement can shop your catalogue and return an approved requisition.' },
  { category: 'integrations', question: 'Which ERPs do you integrate with?', answer: 'NetSuite, SAP S/4HANA and Business One, Microsoft Dynamics 365 Business Central, Sage Intacct and X3, Acumatica, Epicor Kinetic and Prophet 21, Infor, QuickBooks Enterprise, and Odoo.' },
  { category: 'integrations', question: 'What data actually syncs between the store and the ERP?', answer: 'Customers and account hierarchies, contract and tiered price lists, credit limits and payment terms, inventory by location, orders, invoices, and shipment status.' },
  { category: 'integrations', question: 'Can you connect NetSuite or SAP to Shopify Plus?', answer: 'Yes, both are common builds. NetSuite to Shopify Plus typically syncs items, customers, price levels, inventory, and sales orders. SAP Business One and S/4HANA work the same way through their APIs.' },
  { category: 'integrations', question: 'How do you handle credit limits and net terms against the ERP?', answer: 'The store reads the account credit limit and open balance from the ERP at checkout. If the account is within limit and current, on-account checkout with net terms is offered. If it is over limit or past due, we hold the order for approval.' },
  { category: 'working', question: 'Can you migrate our existing B2B store without losing SEO?', answer: 'Yes. We handle replatforming and data migration, including products, customers, orders, and B2B pricing, with 301 redirects and a cutover plan that protects your rankings and uptime.' },
  { category: 'working', question: 'How long does a B2B ecommerce build take?', answer: 'Most B2B builds and migrations run from a few weeks to a few months, depending on catalog complexity, custom pricing rules, and ERP integration. You get a phased timeline with milestones after scoping.' },
  { category: 'working', question: 'Do you work with US B2B brands?', answer: 'Yes, most of the brands we work with are US-based, across DTC and B2B, with a decade-plus of commerce builds. You own and operate everything we build.' },
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
  serviceType: 'B2B e-commerce development',
  name: 'B2B e-commerce development and implementation',
  description:
    'B2B ecommerce development agency. We build B2B ecommerce platforms with tiered and contract pricing, net terms, account hierarchies, quote and approval workflows, gated catalogs, reordering, and ERP integration, on Shopify Plus, Adobe Commerce (Magento), BigCommerce, WooCommerce, Salesforce Commerce Cloud, or Commerceflo.',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
  ],
  audience: { '@type': 'BusinessAudience', name: 'B2B brands, wholesalers, and distributors' },
};

const HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet builds a B2B ecommerce platform',
  description: 'Our process for designing, building, and implementing a B2B ecommerce platform for US brands, distributors, and wholesalers.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Scope', text: 'We map your catalog, accounts, pricing rules, and ERP, then recommend the B2B ecommerce platform that fits and write a fixed proposal.' },
    { '@type': 'HowToStep', position: 2, name: 'Design and build', text: 'We design and build the storefront and the trade portal: tiered pricing, net terms, quotes, approvals, gated catalogs, and reordering.' },
    { '@type': 'HowToStep', position: 3, name: 'Integrate', text: 'We connect your ERP, PIM, POS, 3PL, and marketplaces into one order and inventory layer.' },
    { '@type': 'HowToStep', position: 4, name: 'Migrate and launch', text: 'We migrate products, customers, orders, and B2B pricing with 301 redirects, test on staging, and run a clean cutover.' },
    { '@type': 'HowToStep', position: 5, name: 'Own and scale', text: 'You own and operate the system; we support and scale it as you add accounts and channels.' },
  ],
};

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://factoryjet.com/#organization',
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  description: 'FactoryJet is an e-commerce development agency that builds B2B and omnichannel commerce for DTC and B2B brands.',
  sameAs: ['https://www.linkedin.com/company/factoryjet'],
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/b2b-ecommerce#webpage',
  url: 'https://factoryjet.com/b2b-ecommerce',
  name: 'B2B E-Commerce Agency | Wholesale & Multi-Channel Commerce Platforms',
  description: 'B2B ecommerce agency building wholesale commerce and multi-channel commerce platforms with tiered pricing, net terms, EDI, punchout, and ERP integration.',
  dateModified: PAGE_MODIFIED,
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
    jobTitle: 'Founder & Chief Technical Architect',
  },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  about: { '@id': 'https://factoryjet.com/#organization' },
};

/** Single source of truth for the breadcrumb trail. Feeds BOTH the visible
 *  <Breadcrumbs> component and the BreadcrumbList JSON-LD below, so the two
 *  can never drift into showing a different path than the schema claims. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'B2B E-Commerce', url: 'https://factoryjet.com/b2b-ecommerce' },
];

const BREADCRUMB_SCHEMA = {
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
  { b: 'DTC + B2B', s: 'on one catalog & inventory' },
  { b: 'Net 30/60', s: 'terms, POs & approvals' },
  { b: 'Any ERP', s: 'integrated to the storefront' },
  { b: '10+ yrs', s: 'building commerce' },
];

const SOURCED = [
  { v: '17%', d: 'year-over-year growth in US B2B ecommerce sales across sites, password-protected portals, and apps in 2023, reaching roughly $2.3 trillion.', src: 'Digital Commerce 360', href: 'https://www.digitalcommerce360.com/2024/02/27/b2b-market-2023-2024/' },
  { v: 'Ten', d: 'channels the average B2B buyer now uses across the buying journey, from researching suppliers to reordering, up from five in 2016.', src: 'McKinsey B2B Pulse', href: 'https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/the-multiplier-effect-of-omnichannel' },
  { v: 'One third', d: 'of B2B buyers prefer digital self-service at any given stage, alongside a third wanting remote contact and a third wanting in-person. Serving only one of the three loses the other two.', src: 'McKinsey B2B Pulse', href: 'https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/the-multiplier-effect-of-omnichannel' },
];

const PAINS = [
  { i: '✉', t: 'Orders by email and phone', d: 'Your team re-keys orders from inboxes and voicemails, and buyers wait on a quote instead of placing the order themselves.' },
  { i: '▦', t: 'Pricing lives in spreadsheets', d: 'Account-specific and tiered pricing sits in files, so every quote is manual and mistakes slip through.' },
  { i: '⛌', t: 'No self-service for buyers', d: 'Trade buyers expect to log in, see their price, and reorder. Without it, they buy from whoever makes it easy.' },
];

const BENEFITS = [
  { i: '↻', t: 'Faster, larger reorders', d: 'One-click reordering and saved lists from a buyer\'s history lift order frequency and size.' },
  { i: '◷', t: 'Hours back for sales', d: 'Self-service ordering frees your reps from re-keying orders so they can sell, not type.' },
  { i: '✓', t: 'Fewer pricing errors', d: 'Each account sees its own correct price automatically, so quotes stop going out wrong.' },
  { i: '⤢', t: 'Higher average order value', d: 'Volume tiers, suggested reorders, and clear availability nudge bigger orders.' },
  { i: '⇄', t: 'One source of truth', d: 'Pricing, stock, and orders read from one record across every channel and your ERP.' },
  { i: '◎', t: 'DTC and B2B together', d: 'Retail and trade on one system, with separate pricing and logins for wholesale buyers.' },
];

const FEATURES = [
  { t: 'Tiered & contract pricing', d: 'Per-account, per-volume, and contract pricing that shows each buyer their price automatically.' },
  { t: 'Net terms & PO checkout', d: 'Net 30/60 terms, credit limits, and purchase-order checkout for approved accounts.' },
  { t: 'Quote & approval workflows', d: 'Request-for-quote, multi-step approvals, and order limits that match how your buyers purchase.' },
  { t: 'Account hierarchies', d: 'Parent and child accounts, buyer roles, and shared order history across a buying organization.' },
  { t: 'Gated & custom catalogs', d: 'Login-gated products and customer-specific catalogs so each account sees only what it should.' },
  { t: 'Fast reordering', d: 'One-click reordering, reorder pads, and saved lists built from a buyer\'s order history.' },
  { t: 'ERP, PIM & marketplace sync', d: 'One order and inventory layer connecting your ERP, PIM, POS, 3PL, and marketplaces.' },
  { t: 'Sales-rep tools', d: 'Order-on-behalf, account dashboards, and quote tools so your reps sell through the same system.' },
];

const INDUSTRIES = [
  { t: 'Manufacturers', d: 'Dealer and distributor portals with per-account pricing, net terms, and reordering, synced to your ERP. Configurable products, spec sheets, and warranty registration where the catalog is technical.' },
  { t: 'Distributors & wholesalers', d: 'Gated wholesale catalogs, volume tiers, minimum order quantities, and fast reordering that replace email-and-phone ordering. Customer-specific catalogs so each account sees its own assortment and price.' },
  { t: 'Industrial & MRO', d: 'Large, attribute-heavy catalogs with parametric search, compatibility finders, and bulk order pads. Contract pricing and approval workflows for procurement teams.' },
  { t: 'Food, beverage & CPG', d: 'Case and pallet ordering, lot and expiry handling, route or delivery-window logic, and 3PL integration. Reorder pads for high-frequency wholesale accounts.' },
  { t: 'Apparel, textiles & home', d: 'Size and color matrices, pre-book and seasonal ordering, line sheets, and B2B linesheet-to-cart flows for buyers placing large, variant-heavy orders.' },
  { t: 'Health, beauty & supplements', d: 'Wholesale and practitioner portals with gated pricing, compliance-aware product content, subscription reordering, and tiered programs for retailers and clinics.' },
];

const WHOLESALE = [
  { t: 'Gated wholesale catalogs', d: 'Trade-only products and price lists behind a login, with per-account assortments so a distributor never sees another distributor\'s range or cost.' },
  { t: 'Volume tiers & MOQs', d: 'Quantity breaks, case and pallet units of measure, minimum order quantities, and order multiples enforced at the cart rather than corrected afterwards.' },
  { t: 'Trade account onboarding', d: 'Application forms, resale certificate and VAT capture, credit checks, and manual approval before an account sees wholesale pricing.' },
  { t: 'Net terms & credit control', d: 'Net 30/60/90, credit limits read live from the ERP, on-account checkout, and automatic holds when an account is over limit or past due.' },
  { t: 'Line sheets & pre-book', d: 'Season-based pre-book ordering, line-sheet-to-cart flows, and size and colour matrices for buyers placing large variant-heavy orders.' },
  { t: 'Rep-assisted ordering', d: 'Order-on-behalf, shared carts, and quote building so field reps and inside sales work inside the same wholesale platform your buyers use.' },
];

const MULTICHANNEL = [
  { t: 'Self-service portal', d: 'The trade portal where most reorders land, with each account\'s own pricing, order history, and one-click reordering.' },
  { t: 'EDI', d: 'For the large accounts that will never use a portal: EDI 850 purchase orders, 855 acknowledgements, 856 ASNs, and 810 invoices mapped to the same order pipeline.' },
  { t: 'Punchout', d: 'cXML and OCI punchout so buyers inside Coupa, Ariba, Jaggaer, or Oracle procurement shop your catalogue and return an approved requisition.' },
  { t: 'Sales reps', d: 'Order-on-behalf and quoting tools so rep-written orders carry the same pricing rules and land in the same system.' },
  { t: 'Marketplaces', d: 'Amazon Business, Faire, and vertical marketplaces fed from the same catalogue and inventory pool.' },
  { t: 'Retail & POS', d: 'Where you also sell direct, POS and DTC orders draw on one shared inventory instead of a separate stock bucket.' },
];

const COMPARE = [
  { name: 'Shopify Plus', best: 'DTC + B2B on one clean store', b2b: 'Native B2B: company accounts, price lists, net terms', catalog: 'Small to large', me: false },
  { name: 'Adobe Commerce (Magento)', best: 'Deep, complex B2B', b2b: 'Requisition lists, shared catalogs, quotes, company accounts', catalog: 'Large to very large', me: false },
  { name: 'BigCommerce', best: 'Mid-market B2B value', b2b: 'Price lists, customer groups, B2B Edition', catalog: 'Mid to large', me: false },
  { name: 'Salesforce Commerce Cloud', best: 'Enterprise B2B', b2b: 'B2B Commerce, accounts, contracts at scale', catalog: 'Very large', me: false },
  { name: 'WooCommerce / Commerceflo', best: 'Full control / unified engine', b2b: 'B2B via build; unified catalog and inventory', catalog: 'Small to mid / any', me: true },
];

const CHOOSE = [
  'Catalog size and complexity, including variants and channel-specific attributes',
  'Pricing rules: tiers, contracts, customer-specific catalogs, and minimums',
  'Integrations you need: ERP, PIM, POS, 3PL, and marketplaces',
  'Whether you also sell DTC on the same catalog and inventory',
  'Budget for the build and the ongoing platform license',
];

const STEPS = [
  { n: '01', t: 'Scope', d: 'We map your catalog, accounts, pricing rules, and ERP, then recommend the platform and write a fixed proposal.' },
  { n: '02', t: 'Design & build', d: 'Storefront plus trade portal: tiered pricing, net terms, quotes, approvals, gated catalogs, and reordering.' },
  { n: '03', t: 'Integrate', d: 'ERP, PIM, POS, 3PL, and marketplaces wired into one order and inventory layer.' },
  { n: '04', t: 'Migrate & launch', d: 'Data migration with 301 redirects, staging QA, then a clean cutover that protects your SEO.' },
];

const checkIcon = (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
    <path d="M1 4l2.5 2.5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function B2BEcommercePage() {
  return (
    <>
      <script id="b2b-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="b2b-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="b2b-howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }} />
      <script id="b2b-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="b2b-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script id="b2b-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />
        {/* ── Hero ── */}
        <section className="pp-dotgrid" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="pp-wrap" style={{ paddingTop: 'clamp(44px,6vh,84px)', paddingBottom: 'clamp(44px,6vh,84px)', position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">B2B e-commerce development</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '17ch' }}>
                  B2B e-commerce your buyers actually want to use.
                </h1>
                <p className="pp-lead" style={{ maxWidth: '47ch' }}>
                  We are a B2B ecommerce development agency. We build B2B ecommerce platforms with the rules trade buyers
                  expect: account pricing, net terms, approvals, and one-click reordering, integrated with your ERP. Your
                  buyers self-serve, your team stops re-keying orders.
                </p>
                <HeroInlineForm source="us_b2b_hero" region="us" submitLabel="Get a B2B commerce audit" />
              </div>
              <div className="pp-stage" role="img" aria-label="A B2B storefront showing per-account price tiers, net terms, and a trade portal.">
                <div className="pp-store" aria-hidden="true">
                  <div className="bar"><i /><i /><i /></div>
                  <div className="body">
                    <div className="row"><span className="k">Standard Tier</span><span className="v">1-9 units</span></div>
                    <div className="row"><span className="k">Volume Tier</span><span className="v">10-49 units</span></div>
                    <div className="row win"><span className="k">Contract Tier · Net 30</span><span className="v">50+ units</span></div>
                    <div className="row"><span className="k">Reorder · 12 SKUs</span><span className="v">1 click</span></div>
                  </div>
                </div>
                <span className="pp-node" style={{ top: '4%', left: '-4%' }} aria-hidden="true"><span className="d" />Trade portal</span>
                <span className="pp-node" style={{ bottom: '6%', right: '-6%', animationDelay: '.8s' }} aria-hidden="true"><span className="d" />ERP synced</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stat band ── */}
        <section className="pp-sec tint" style={{ paddingTop: 'clamp(32px,4vh,52px)', paddingBottom: 'clamp(32px,4vh,52px)' }}>
          <div className="pp-wrap">
            <div className="pp-stats">
              {STATS.map((s) => (
                <div className="pp-stat" key={s.b}><b>{s.b}</b><span>{s.s}</span></div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What is B2B ecommerce ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-mlabel">// the basics</p>
                <h2 style={{ marginTop: '10px' }}>What is B2B e-commerce?</h2>
                <div style={{ marginTop: '18px', display: 'grid', gap: '14px' }} className="pp-lead">
                  <p>
                    B2B e-commerce is selling to other businesses online, the way trade buyers actually purchase. Unlike a
                    direct-to-consumer store with one price for everyone, a B2B ecommerce platform gives each trade account
                    its own login, its own pricing, and the workflows a business buyer needs: net terms, purchase orders,
                    quotes, approvals, account hierarchies, and fast reordering.
                  </p>
                  <p>
                    For manufacturers, distributors, and wholesalers, a good B2B ecommerce solution replaces ordering by
                    email and phone with self-service that buyers prefer and your team does not have to babysit. It connects
                    to your ERP so pricing, inventory, and orders stay in one place, and it can run alongside a DTC store on
                    the same catalog.
                  </p>
                  <p>
                    We design, build, and implement that system on the right platform, then hand it over for you to own and
                    run. You are not buying a tool you rent from us; you are buying a B2B ecommerce platform you own.
                  </p>
                </div>
              </div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--pp-line)', boxShadow: '0 24px 48px -28px rgba(20,17,15,0.28)' }}>
                <Image
                  src="/images/us/b2b/b2b-trade-portal.webp"
                  alt="A wholesale buyer reviewing their B2B trade portal with account-specific pricing and one-click reorder"
                  width={600}
                  height={480}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>

            {/* Answer-First AI Engine Definitions */}
            <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              <AnswerFirstDefinition
                term="Real-Time ERP Synchronization"
                definition="Real-time ERP synchronization for B2B e-commerce is the bi-directional, automated API exchange of inventory availability, contract price matrices, customer credit limits, and sales orders between the storefront and enterprise back-office systems (NetSuite, SAP, Dynamics 365, Acumatica, Epicor). It ensures buyers and finance teams always see identical stock and accounting ledgers."
                keyTakeaways={[
                  'Sub-200ms delta webhooks replace slow overnight batch imports',
                  'Live customer credit checks stop past-due accounts from placing unbacked orders',
                  'Orders instantly generate picking tickets in WMS without manual CSR re-keying',
                ]}
                citationSource="FactoryJet B2B Engineering Architecture (2026)"
              />
              <AnswerFirstDefinition
                term="Tiered Pricing Matrices"
                definition="A tiered pricing matrix is a rule-based discounting system that dynamically calculates unit prices based on customer account tier (e.g. Gold, Silver, Bronze), contract volume breakpoints, or minimum purchase thresholds. Prices are calculated server-side upon buyer login and locked through checkout without manual coupon codes."
                keyTakeaways={[
                  'Per-account negotiated contract pricing locked to company login profiles',
                  'Carton, pallet, and volume bracket discounts update dynamically in line-item grids',
                  'Restricted catalog gating prevents unapproved buyers from seeing confidential trade pricing',
                ]}
                citationSource="FactoryJet Wholesale Pricing Standard (2026)"
              />
              <AnswerFirstDefinition
                term="Self-Serve Wholesale Ordering"
                definition="Self-serve wholesale ordering is a digital trade portal architecture where verified commercial clients manage parent-child corporate company hierarchies, assign buyer permissions, submit purchase orders on Net payment terms, and repeat 100+ SKU restock orders in seconds using matrix pads or CSV uploads."
                keyTakeaways={[
                  'Matrix SKU entry grids allow entering multi-variant quantities simultaneously',
                  'Replaces manual email/PDF order processing with instant digital order capture',
                  'Empowers sales reps to focus on strategic business development instead of typing orders',
                ]}
                citationSource="FactoryJet Digital Commerce Benchmark (2026)"
              />
            </div>
          </div>
        </section>

        {/* ── Sourced stats ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// why B2B is moving online</p>
            <h2 style={{ marginTop: '10px' }}>B2B ecommerce is now the channel buyers prefer</h2>
            <ul className="pp-bento" style={{ marginTop: '36px' }}>
              {SOURCED.map((s) => (
                <li className="pp-card" key={s.v}>
                  <div style={{ fontFamily: 'var(--pp-display)', fontWeight: 800, fontSize: '32px', lineHeight: 1, color: 'var(--pp-orange-dark)', letterSpacing: '-0.03em' }}>{s.v}</div>
                  <p style={{ marginTop: '10px' }}>{s.d}</p>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" style={{ marginTop: '12px', display: 'inline-block', fontFamily: 'var(--pp-mono)', fontSize: '11px', color: 'var(--pp-muted)', textDecoration: 'underline' }}>Source: {s.src}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Problem ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// the problem</p>
            <h2 style={{ marginTop: '10px' }}>Why most B2B sites stall</h2>
            <ul className="pp-bento" style={{ marginTop: '36px' }}>
              {PAINS.map((p) => (
                <li className="pp-card" key={p.t}>
                  <span className="ic" aria-hidden="true" style={{ fontFamily: 'var(--pp-mono)', fontSize: '17px' }}>{p.i}</span>
                  <h3>{p.t}</h3><p>{p.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Benefits ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// why it pays off</p>
            <h2 style={{ marginTop: '10px' }}>The benefits of B2B ecommerce</h2>
            <ul className="pp-bento" style={{ marginTop: '36px' }}>
              {BENEFITS.map((b) => (
                <li className="pp-card" key={b.t}>
                  <span className="ic" aria-hidden="true" style={{ fontFamily: 'var(--pp-mono)', fontSize: '17px' }}>{b.i}</span>
                  <h3>{b.t}</h3><p>{b.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// what we build</p>
            <h2 style={{ marginTop: '10px' }}>B2B ecommerce features, built in</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '60ch' }}>The features that turn a catalog into a self-service ordering system your buyers trust.</p>
            <ul className="pp-bento n8" style={{ marginTop: '36px', gridTemplateColumns: 'repeat(4,1fr)' }}>
              {FEATURES.map((f) => (
                <li className="pp-card" key={f.t}>
                  <h3 style={{ color: 'var(--pp-orange-dark)', fontSize: '15px' }}>{f.t}</h3><p>{f.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── ERP integration ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'center' }} className="pp-herogrid">
              <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--pp-line)', boxShadow: '0 24px 48px -28px rgba(20,17,15,0.28)' }}>
                <Image
                  src="/images/us/b2b/b2b-erp-integration.webp"
                  alt="Multiple dashboards showing a B2B ecommerce store connected to ERP, OMS, and inventory systems"
                  width={600}
                  height={480}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <div>
                <p className="pp-mlabel">// ERP & integrations</p>
                <h2 style={{ marginTop: '10px' }}>ERP-integrated B2B commerce</h2>
                <p className="pp-lead" style={{ marginTop: '14px' }}>
                  A B2B ecommerce platform only works when pricing, inventory, and orders are the same number in every
                  system. We connect your storefront to your ERP, PIM, POS, 3PL, and marketplaces so the data stays in one
                  place, not spread across imports and spreadsheets. Customer records, contract pricing, credit limits,
                  open invoices, and stock read from the ERP rather than from a copy that drifts.
                </p>
                <ul style={{ marginTop: '20px', display: 'grid', gap: '10px' }}>
                  {[
                    'ERP sync: NetSuite, SAP S/4HANA and Business One, Microsoft Dynamics 365 Business Central, Sage Intacct and X3, Acumatica, Epicor Kinetic and Prophet 21, Infor, QuickBooks Enterprise, and Odoo',
                    'What we sync: customers and account hierarchies, contract and tiered price lists, credit limits and terms, inventory by location, orders, invoices, and shipment status',
                    'EDI and punchout: EDI 850/855/856/810 order and invoice flows, plus cXML and OCI punchout into Coupa, Ariba, Jaggaer, and Oracle procurement',
                    'PIM and product data: Akeneo, Salsify, Plytix',
                    'Marketplaces: Amazon Business, Faire, Angi',
                    '3PL and WMS: ShipBob, Extensiv, and custom warehouses',
                    'Custom middleware when a direct connector does not exist',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: '10px', fontSize: '15px', lineHeight: 1.55, color: 'var(--pp-body)' }}>
                      <span style={{ marginTop: '3px', flex: 'none', display: 'inline-flex', height: '18px', width: '18px', alignItems: 'center', justifyContent: 'center', borderRadius: '999px', background: 'rgba(240,90,40,0.1)', color: 'var(--pp-orange-dark)' }}>{checkIcon}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Industries ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// who we build for</p>
            <h2 style={{ marginTop: '10px' }}>B2B ecommerce by industry</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              The B2B rules differ by industry. Here is how we build for the sectors we know best. If you are a
              manufacturer or distributor specifically, our{' '}
              <Link href="/ecommerce-for-manufacturers" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>
                e-commerce for manufacturers and distributors
              </Link>{' '}
              page goes deeper on dealer portals, territory rules, configurable products, and parametric part search.
              Already trading on a platform you have outgrown? See{' '}
              <Link href="/replatforming" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>
                e-commerce replatforming
              </Link>{' '}
              and{' '}
              <Link href="/replatforming/magento-to-shopify" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>
                Magento to Shopify migration
              </Link>.
            </p>
            <ul className="pp-bento" style={{ marginTop: '36px' }}>
              {INDUSTRIES.map((u) => (
                <li className="pp-card" key={u.t}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{u.t}</h3><p>{u.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Wholesale commerce ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// wholesale commerce</p>
            <h2 style={{ marginTop: '10px' }}>Wholesale commerce platforms</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              Wholesale is B2B with its own rules. A wholesale ecommerce platform has to hold trade-only pricing behind a
              login, enforce minimums and case quantities, onboard accounts with credit checks, and let a buyer reorder
              forty SKUs without rebuilding the basket. We build that on Shopify Plus, Adobe Commerce, BigCommerce, or
              Commerceflo, wired to the ERP that already holds your price lists.
            </p>
            <ul className="pp-bento" style={{ marginTop: '36px' }}>
              {WHOLESALE.map((u) => (
                <li className="pp-card" key={u.t}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{u.t}</h3><p>{u.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Multi-channel B2B ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// multi-channel commerce</p>
            <h2 style={{ marginTop: '10px' }}>Multi-channel commerce for B2B</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              Trade buyers do not all order the same way. A national account sends EDI, a procurement team punches out
              from Coupa, a small independent logs into the portal, and a rep keys an order at a trade show. Multi-channel
              commerce means every one of those routes writes to the same catalogue, the same pricing rules, and the same
              inventory pool, so you are not reconciling four order books. If you also sell retail and DTC alongside
              trade, our{' '}
              <Link href="/omnichannel-commerce" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>
                omnichannel commerce
              </Link>{' '}
              build covers the store, POS, and marketplace side of that in more depth.
            </p>
            <ul className="pp-bento" style={{ marginTop: '36px' }}>
              {MULTICHANNEL.map((u) => (
                <li className="pp-card" key={u.t}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{u.t}</h3><p>{u.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Platform comparison ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// platforms</p>
            <h2 style={{ marginTop: '10px' }}>B2B ecommerce platform comparison</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '62ch' }}>
              We are platform-agnostic. Here is how the leading B2B ecommerce platforms compare, so you can see where each fits.
            </p>
            <div style={{ marginTop: '28px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead>
                  <tr><th>Platform</th><th>Best for</th><th>B2B features</th><th>Catalog size</th></tr>
                </thead>
                <tbody>
                  {COMPARE.map((r) => (
                    <tr key={r.name} className={r.me ? 'me' : ''}>
                      <td className="name">{r.name}</td>
                      <td>{r.best}</td>
                      <td>{r.b2b}</td>
                      <td>{r.catalog}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Net-30 Trade Credit Terms Comparison ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <Net30PaymentComparison />
          </div>
        </section>

        {/* ── Interactive B2B Wholesale Savings Calculator ── */}
        <section className="pp-sec tint" id="b2b-roi-calculator">
          <div className="pp-wrap">
            <B2bWholesaleCalculator
              source="us_b2b_ecommerce_page"
              defaultRevenue={4500000}
              defaultAov={2200}
              defaultAccounts={140}
            />
          </div>
        </section>

        {/* ── How to choose ── */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// choosing</p>
            <h2 style={{ marginTop: '10px' }}>How to choose a B2B ecommerce platform</h2>
            <p className="pp-lead" style={{ marginTop: '12px' }}>The right B2B ecommerce platform depends on your business, not a leaderboard. We weigh five things with you, then recommend the fit:</p>
            <ul style={{ marginTop: '20px', display: 'grid', gap: '12px' }}>
              {CHOOSE.map((c) => (
                <li key={c} style={{ display: 'flex', gap: '12px', fontSize: '15px', lineHeight: 1.55, color: 'var(--pp-body)' }}>
                  <span style={{ marginTop: '3px', flex: 'none', display: 'inline-flex', height: '20px', width: '20px', alignItems: 'center', justifyContent: 'center', borderRadius: '999px', background: 'rgba(240,90,40,.1)', color: 'var(--pp-orange-dark)' }}>{checkIcon}</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'center' }} className="pp-herogrid">
              <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--pp-line)', boxShadow: '0 24px 48px -28px rgba(20,17,15,0.28)' }}>
                <Image
                  src="/images/us/b2b/b2b-scoping-call.webp"
                  alt="Founder on a video scoping call mapping out a client's B2B ecommerce platform requirements"
                  width={600}
                  height={480}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <div>
                <p className="pp-mlabel">// how we work</p>
                <h2 style={{ marginTop: '10px' }}>From scope to a system you own</h2>
                <div style={{ marginTop: '32px', display: 'grid', gap: '0' }}>
                  {STEPS.map((s, i) => (
                    <div key={s.n} style={{ display: 'flex', gap: '16px', paddingBottom: i < STEPS.length - 1 ? '28px' : '0', position: 'relative' }}>
                      {i < STEPS.length - 1 && (
                        <div aria-hidden="true" style={{ position: 'absolute', left: '15px', top: '32px', bottom: 0, width: '2px', background: 'var(--pp-line)' }} />
                      )}
                      <div style={{ flex: 'none', width: '32px', height: '32px', borderRadius: '50%', border: '2px solid var(--pp-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', zIndex: 1 }}>
                        <span style={{ fontFamily: 'var(--pp-mono)', fontSize: '10px', fontWeight: 700, color: 'var(--pp-orange-dark)' }}>{s.n}</span>
                      </div>
                      <div style={{ paddingTop: '4px' }}>
                        <div style={{ fontFamily: 'var(--pp-display)', fontWeight: 700, fontSize: '16px', color: 'var(--pp-ink)' }}>{s.t}</div>
                        <p style={{ marginTop: '4px', fontSize: '14.5px', lineHeight: 1.55, color: 'var(--pp-body)' }}>{s.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Portfolio ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// select client work</p>
            <h2 style={{ marginTop: '10px' }}>Wholesale ordering, online</h2>
            <div style={{ marginTop: '28px', display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '16px' }}>
              <article style={{ border: '1px solid var(--pp-line)', borderRadius: '18px', overflow: 'hidden', background: '#fff' }}>
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <Image
                    src="/images/portfolio/bombay-petals-480.webp"
                    alt="Bombay Petals B2B wholesale ecommerce store built by FactoryJet"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 860px) 100vw, 50vw"
                  />
                </div>
                <div style={{ padding: '24px' }}>
                  <div style={{ fontFamily: 'var(--pp-mono)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--pp-orange-dark)' }}>Bombay Petals · B2B</div>
                  <p className="pp-lead" style={{ marginTop: '10px', fontSize: '15px' }}>A B2B commerce build for an artificial-plants and decor wholesaler, so trade buyers place and repeat orders online with tiered pricing, instead of over email and phone.</p>
                  <div style={{ marginTop: '14px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {['B2B / wholesale', 'Trade reordering', 'Tiered pricing'].map((t) => (
                      <span key={t} style={{ borderRadius: '999px', background: '#F4EEE9', padding: '4px 12px', fontFamily: 'var(--pp-mono)', fontSize: '11px', color: '#5C564F' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </article>
              <article style={{ border: '1px solid var(--pp-line)', borderRadius: '18px', overflow: 'hidden', background: '#fff' }}>
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <Image
                    src="/images/portfolio/belle-maison-480.webp"
                    alt="Belle Maison DTC ecommerce storefront built by FactoryJet, ready to add B2B on the same system"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 860px) 100vw, 50vw"
                  />
                </div>
                <div style={{ padding: '24px' }}>
                  <div style={{ fontFamily: 'var(--pp-mono)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--pp-orange-dark)' }}>Belle Maison · B2B</div>
                  <p className="pp-lead" style={{ marginTop: '10px', fontSize: '15px' }}>A direct-to-consumer storefront for an artificial plants and flowers brand, built to convert shoppers and scale its catalog across channels, ready to add a B2B portal on the same system.</p>
                  <div style={{ marginTop: '14px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {['DTC', 'Storefront build', 'Multi-channel ready'].map((t) => (
                      <span key={t} style={{ borderRadius: '999px', background: '#F4EEE9', padding: '4px 12px', fontFamily: 'var(--pp-mono)', fontSize: '11px', color: '#5C564F' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ── People ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// who does this'}</p>
            <h2 style={{ marginTop: '10px' }}>Built for the people placing the orders</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>A trade portal only works if the buyers and the team behind the counter actually prefer it to the phone.</p>
            <div className="pp-duo" style={{ marginTop: '32px' }}>
              <figure>
                <div className="pp-shot" style={{ position: 'relative', height: '380px', borderRadius: '16px', overflow: 'hidden' }}>
                  <Image
                    src="/images/us/commerce/b2b-ecommerce-people-trade-counter-staff.webp"
                    alt="A counter assistant handing a boxed order across a wholesale trade counter"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>
                <figcaption style={{ marginTop: '10px', fontSize: '14px', color: 'var(--pp-muted)' }}>Self-service ordering frees your team from re-keying orders out of inboxes.</figcaption>
              </figure>
              <figure>
                <div className="pp-shot" style={{ position: 'relative', height: '380px', borderRadius: '16px', overflow: 'hidden' }}>
                  <Image
                    src="/images/us/commerce/b2b-ecommerce-people-warehouse-team.webp"
                    alt="Two warehouse workers checking a pallet against a clipboard"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>
                <figcaption style={{ marginTop: '10px', fontSize: '14px', color: 'var(--pp-muted)' }}>Pricing, stock and orders read from one record across every channel and your ERP.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <FAQ
          eyebrow="B2B E-COMMERCE FAQ"
          headline="Questions B2B brands ask before they build."
          lead="Direct, plain English answers to what wholesale distributors, manufacturers, and trade brands ask about B2B ecommerce:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ── CTA ── */}
        <section className="pp-sec tint" id="final-cta">
          <div className="pp-wrap" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'start' }}>
            <div>
              <h2 style={{ maxWidth: '22ch' }}>Give your trade buyers a store worth logging into.</h2>
              <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '52ch' }}>
                Tell us how your buyers order today. We will map your pricing, accounts, and ERP into one B2B ecommerce
                platform and send a fixed proposal before any work starts.
              </p>
              <div style={{ marginTop: '28px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '13px', background: '#B23E13', padding: '14px 24px', fontSize: '15px', fontWeight: 600, color: '#fff', textDecoration: 'none' }}
                >
                  Talk to the Founder
                </a>
                <ModalCTAButton label="Get a B2B commerce audit" region="us" btnVariant="secondary-light" />
              </div>
              <p style={{ marginTop: '28px', fontSize: '14px', color: 'var(--pp-muted)' }}>
                Related:{' '}
                <Link href="/services/ecommerce-development" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>e-commerce development</Link>,{' '}
                <Link href="/services/magento-development" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>Adobe Commerce / Magento</Link>,{' '}
                <Link href="/bigcommerce-development" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>BigCommerce</Link>,{' '}
                <Link href="/agentic-commerce" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>agentic commerce</Link>,{' '}
                <Link href="/omnichannel-commerce" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>omnichannel commerce</Link>, and our{' '}
                <Link href="/best-ecommerce-platforms" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>ecommerce platform comparison</Link>.
              </p>
            </div>
            <div style={{ border: '1px solid var(--pp-line)', borderRadius: '20px', padding: '28px', background: '#fff', boxShadow: '0 12px 32px -16px rgba(20,17,15,0.18)' }}>
              <p style={{ fontFamily: 'var(--pp-display)', fontWeight: 800, fontSize: '22px', letterSpacing: '-0.01em', color: 'var(--pp-ink)', margin: 0 }}>Why teams choose FactoryJet</p>
              <p style={{ marginTop: '8px', fontFamily: 'var(--pp-mono)', fontSize: '11px' }}>
                <a href="/case-studies" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>See real, named client case studies →</a>
              </p>
              <div style={{ margin: '20px 0', borderTop: '1px solid var(--pp-line)' }} />
              {[
                'Fixed proposal, no hourly billing surprises',
                'You own the code and the system, not a subscription',
                'Platform-agnostic: we recommend fit, not the most expensive option',
                'Decade-plus building commerce: DTC, B2B, and unified',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div style={{ flex: 'none', marginTop: '2px', width: '18px', height: '18px', borderRadius: '50%', background: 'rgba(240,90,40,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--pp-orange-dark)' }}>{checkIcon}</div>
                  <span style={{ fontSize: '14px', lineHeight: 1.5, color: 'var(--pp-body)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}

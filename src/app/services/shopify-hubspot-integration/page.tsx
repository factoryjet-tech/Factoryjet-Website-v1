import type { Metadata } from 'next';
import Link from 'next/link';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import HeroInlineForm from '@/components/HeroInlineForm';
import MidPageCTA from '@/components/v2/MidPageCTA';
import FinalCTA from '@/components/v2/FinalCTA';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import ComparisonTable, { type ComparisonColumn, type ComparisonRow } from '@/components/v2/ComparisonTable';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import { ORG_ID, ORG_REF, FOUNDER_ID } from '@/data/organization';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/shopify-hubspot-integration, built 2026-10-29.

   Why this page exists: "shopify hubspot integration" measured 390 US, 50 UK
   and 50 AU monthly searches, CPC $17.24, KD 6 (DataForSEO, backlog report of
   2026-10-29). It was held until Bhavesh confirmed on 29 Oct 2026 that
   FactoryJet delivers HubSpot integrations. No other page owned the topic:
   HubSpot appears on AI agent, automation and blog pages, never as a Shopify
   integration service.

   Truth rules for anyone editing this file:
   - Every HubSpot and Shopify platform fact was read from the vendor's own
     page on 2026-10-29 and links to it through the SRC map below. Vendor docs
     change. Re-read the page before you change a fact.
   - No client is named. None of the clients cleared for naming on 29 Oct 2026
     is a Shopify plus HubSpot project, so naming one here would imply work we
     did not do on this pairing.
   - No FactoryJet prices. The only dollar figure is a sourced market hourly
     rate, inside the one cost FAQ answer. No running or upkeep costs.
   - Mirrors /services/shopify-quickbooks-integration for components and
     schema. Its page-local CSS module and diagram were not copied; this page
     uses Tailwind classes only.

   Schema: WebPage + Service + FAQPage + BreadcrumbList. Organization is
   rendered once sitewide by src/app/layout.tsx and referenced here by @id.
   The FAQPage mainEntity is generated from the exact FAQ_ITEMS array the
   visible <FAQ> component renders. There is no second, hand-written array.
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL_URL = 'https://factoryjet.com/services/shopify-hubspot-integration';
const PAGE_TITLE = 'Shopify HubSpot Integration Services | FactoryJet';
const PAGE_DESC =
  'Shopify HubSpot integration for Shopify and Shopify Plus brands. When the native app is enough, and when B2B, variants, deals or attribution need a custom build.';
const PAGE_PUBLISHED = '2026-10-29';
const PAGE_MODIFIED = '2026-10-29';
const CHECKED_ON = '29 Oct 2026';
const OG_IMAGE = 'https://factoryjet.com/og-default.png';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'shopify hubspot integration',
    'hubspot shopify integration',
    'shopify to hubspot integration',
    'connect shopify to hubspot',
    'hubspot shopify data sync',
    'shopify plus hubspot integration',
    'hubspot shopify b2b integration',
    'sync shopify orders to hubspot',
    'shopify hubspot custom integration',
    'hubspot shopify integration not working',
    'shopify hubspot deals',
    'hubspot ecommerce integration',
  ],
  alternates: {
    canonical: CANONICAL_URL,
    languages: {
      'en-US': CANONICAL_URL,
      'x-default': CANONICAL_URL,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: CANONICAL_URL,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'FactoryJet, Shopify and HubSpot integration services',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

/** Single source of truth for the breadcrumb trail. Feeds BOTH the visible
 *  <Breadcrumbs> component and the BreadcrumbList JSON-LD, so they cannot drift. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Shopify HubSpot Integration', url: CANONICAL_URL },
];

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${CANONICAL_URL}#webpage`,
  url: CANONICAL_URL,
  name: PAGE_TITLE,
  description: PAGE_DESC,
  inLanguage: 'en-US',
  datePublished: PAGE_PUBLISHED,
  dateModified: PAGE_MODIFIED,
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://factoryjet.com/#website',
    url: 'https://factoryjet.com',
    name: 'FactoryJet',
  },
  about: { '@id': `${CANONICAL_URL}#service` },
  publisher: { '@id': ORG_ID },
  reviewedBy: { '@type': 'Person', '@id': FOUNDER_ID, name: 'Bhavesh Barot' },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#short-answer'] },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${CANONICAL_URL}#service`,
  name: 'Shopify HubSpot Integration',
  serviceType:
    'Shopify and HubSpot integration, Shopify Plus and HubSpot, B2B company and catalog sync, order and line item sync, deal pipeline sync, contact deduplication, ecommerce attribution',
  provider: ORG_REF,
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
  ],
  description:
    "FactoryJet plans, builds, tests and supports the connection between a Shopify or Shopify Plus store and HubSpot. Work covers setting up HubSpot's own Shopify app where it fits, and building a custom integration when the business needs B2B companies and catalogs, product variants, metafields, custom objects, deals with line items, subscription or wholesale flows, deduplication rules or attribution the app does not cover.",
  url: CANONICAL_URL,
};

/* ── Sources. One map, used by every inline source link (the `short` label) AND
   by the visible "Sources" list near the foot of the page (the full `label`).
   Each URL was opened on 2026-10-29 and the supporting sentence read before the
   claim was written. ── */
const SRC = {
  hsConnect: {
    short: 'HubSpot: Connect HubSpot and Shopify',
    label: 'HubSpot Knowledge Base: Connect HubSpot and Shopify (Data Sync), last updated September 30, 2026',
    url: 'https://knowledge.hubspot.com/integrations/connect-hubspot-and-shopify',
  },
  hsCustomObjects: {
    short: 'HubSpot: custom objects',
    label: 'HubSpot Knowledge Base: Create and edit custom objects, last updated October 7, 2026',
    url: 'https://knowledge.hubspot.com/object-settings/create-custom-objects',
  },
  hsOrdersApi: {
    short: 'HubSpot developers: orders API',
    label: 'HubSpot Developer Docs: CRM API, Orders',
    url: 'https://developers.hubspot.com/docs/api-reference/crm-orders-v3/guide',
  },
  shopifyB2bHelp: {
    short: 'Shopify Help: B2B',
    label: 'Shopify Help Center: Shopify B2B',
    url: 'https://help.shopify.com/en/manual/b2b',
  },
  shopifyB2bDev: {
    short: 'shopify.dev: apps and B2B',
    label: 'shopify.dev: Apps and B2B (companies, locations and catalogs)',
    url: 'https://shopify.dev/docs/apps/build/b2b',
  },
  shopifyPixels: {
    short: 'shopify.dev: web pixels',
    label: 'shopify.dev: About web pixels',
    url: 'https://shopify.dev/docs/apps/build/marketing-analytics/pixels',
  },
  cartcoders: {
    short: 'CartCoders rate guide, 2026',
    label: 'CartCoders: Shopify Developer Cost Breakdown for 2026',
    url: 'https://cartcoders.com/blog/shopify-development/shopify-developer-cost-hourly-rate-project-pricing/',
  },
} as const;

type SrcKey = keyof typeof SRC;

/* ── FAQ. Single array, rendered visibly below AND used to build the FAQPage
   JSON-LD. Never hand-duplicate this list near the ld+json block. ── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'native', label: "HubSpot's own app" },
  { key: 'custom', label: 'When to build custom' },
  { key: 'data', label: 'Data and reporting' },
  { key: 'working', label: 'Working with us' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  // ── HubSpot's own app ────────────────────────────────────────────
  {
    category: 'native',
    question: 'Does HubSpot integrate with Shopify?',
    answer:
      "Yes. HubSpot publishes its own Shopify integration, which its help center calls Shopify Data Sync. It syncs contacts with Shopify customers, companies, products, orders and abandoned checkouts. Contacts, companies and products sync both ways. Orders and abandoned checkouts only flow from Shopify into HubSpot. For many stores that covers the basics. B2B, variants and deals are where it runs short.",
  },
  {
    category: 'native',
    question: 'How do I connect Shopify to HubSpot?',
    answer:
      "You install HubSpot's Shopify integration from the HubSpot App Marketplace and sign in to your store. HubSpot says you must be a Super Admin or have App Marketplace permissions in your HubSpot account to install it. You then choose which objects to sync and set filters. After the first sync finishes, HubSpot says records sync within 10 minutes of a change.",
  },
  {
    category: 'native',
    question: 'Which HubSpot plan do I need for the Shopify integration?',
    answer:
      "HubSpot lists the integration for all products and plans. One part needs a paid plan. HubSpot says you need at least a Data Hub Starter subscription to create custom field mappings. Without it, you get the default field mappings only. If your team wants extra store fields on the contact or order record, plan for that subscription or a custom build.",
  },
  {
    category: 'native',
    question: 'Does the HubSpot Shopify integration sync product variants?',
    answer:
      "No. HubSpot's help article says Shopify product variants can't sync to HubSpot. If you sell one shirt in five sizes, HubSpot sees one product, not five. That matters when sales reps quote by size or pack, or when reports need sales by variant. A custom integration can write each variant as its own product, or carry the variant on each line item.",
  },
  {
    category: 'native',
    question: 'Does it sync Shopify metafields?',
    answer:
      "No. HubSpot's help article says Shopify meta fields are not supported for sync through the Shopify Data Sync app. Metafields are the extra fields a store adds to products, customers or orders, such as a trade account number or a fabric type. If HubSpot workflows or reports depend on that data, a custom integration reads the metafields through Shopify's API and writes them to HubSpot properties.",
  },
  {
    category: 'native',
    question: 'Can I connect more than one Shopify store to HubSpot?',
    answer:
      "Yes. HubSpot's help article says that once your first store is connected, you can connect additional Shopify stores from the Shopify app page. Before you do, decide how customers who buy from two stores should look in HubSpot. Contacts match on email address, so one person becomes one contact, while their orders from each store sit on that record.",
  },
  // ── When to build custom ─────────────────────────────────────────
  {
    category: 'custom',
    question: 'When is the native HubSpot app enough?',
    answer:
      'It is enough when you sell direct to consumers, one product per SKU is fine, and marketing mainly needs customers, orders and abandoned checkouts in HubSpot for emails and segments. It also suits a first step. Install it, see what your team uses, and only pay for custom work where a gap shows up in daily use.',
  },
  {
    category: 'custom',
    question: 'When do I need a custom Shopify HubSpot integration?',
    answer:
      "When the business has rules the app does not cover. Common ones: B2B company accounts on a plan below Shopify Plus, catalog and price list data, product variants, metafields, orders that should open or update a deal, subscription renewals, wholesale reorders, or duplicate contacts the app keeps creating. Each one is a gap in HubSpot's own documentation, which is where we start.",
  },
  {
    category: 'custom',
    question: 'Does the HubSpot Shopify integration support Shopify B2B?',
    answer:
      "Partly. HubSpot says company sync is only available for Shopify Plus subscriptions. Shopify says its B2B features are available on the Basic, Grow, Advanced and Shopify Plus plans. So a brand selling B2B on Advanced gets no company sync from HubSpot's app. HubSpot's article also does not mention B2B catalogs or payment terms, so those need a custom build on any plan.",
  },
  {
    category: 'custom',
    question: 'Can Shopify orders create deals in HubSpot?',
    answer:
      "HubSpot's app syncs Shopify orders into HubSpot's orders object, one way. Its help article does not describe creating deals. Many B2B sales teams run their pipeline on deals, so a custom integration can open or update a deal when a wholesale order lands, attach the line items, and move the deal to the right stage when the order is paid or shipped.",
  },
  {
    category: 'custom',
    question: 'Can HubSpot send changes back to Shopify orders?',
    answer:
      "Not with HubSpot's own app. Its help article says Shopify orders can't be changed in your HubSpot account, as they sync one way from Shopify to HubSpot. If reps need to edit a wholesale order, add a note the warehouse sees, or create a draft order from a HubSpot quote, that is custom work through Shopify's Admin API.",
  },
  {
    category: 'custom',
    question: 'Can you sync Shopify data into HubSpot custom objects?',
    answer:
      'Yes, if your HubSpot account has them. HubSpot lists custom objects for Enterprise subscriptions of its hubs. A custom object fits data that is not a contact, company, deal or order, such as a subscription contract, a warranty registration or a trade account. We build the sync from Shopify into that object and link it to the right contacts and companies.',
  },
  {
    category: 'custom',
    question: 'How do you handle subscription and wholesale orders?',
    answer:
      "HubSpot's Shopify article does not mention subscriptions, so renewals arrive as ordinary orders. For subscription brands we tag renewals, keep the subscription status on the contact or a custom object, and trigger HubSpot workflows when a subscription pauses or is cancelled. For wholesale, we tie each order to the company and its deal, so reps see reorders without searching.",
  },
  // ── Data and reporting ───────────────────────────────────────────
  {
    category: 'data',
    question: 'Why does the integration create duplicate contacts?',
    answer:
      "HubSpot matches contacts by email address. Its help article says orders from customers without an email address sync as orders with no linked contact, and that records you already imported into either app may sync again and create duplicates. We clean the contact list before connecting, set an email rule, and merge duplicates that already exist.",
  },
  {
    category: 'data',
    question: 'How are products matched between Shopify and HubSpot?',
    answer:
      "By name. HubSpot's help article says data sync matches products based on the product name, after stripping capitalization, special characters and punctuation. Two different products with near-identical names can merge, and one product renamed in Shopify can become a second record. A custom integration matches on the Shopify product or variant ID, which never changes.",
  },
  {
    category: 'data',
    question: 'What happens when I delete a record in one system?',
    answer:
      "Nothing in the other system. HubSpot's help article says a product deleted in Shopify is not deleted in HubSpot, a company deleted in HubSpot is not deleted in Shopify, and a customer deleted in Shopify keeps its contact in HubSpot. That protects data, but it leaves stale records. We set a written rule for archiving them.",
  },
  {
    category: 'data',
    question: 'Can I see order line items in HubSpot?',
    answer:
      "Yes. HubSpot's orders object can be linked to line items, contacts, companies, deals and more, according to its developer documentation. HubSpot's help article also says that when a product is removed from a Shopify cart, the matching line item is removed from the HubSpot record. For reports by product or category, we check the line item fields your team needs before go live.",
  },
  {
    category: 'data',
    question: 'Will HubSpot show which campaign drove a Shopify sale?',
    answer:
      "Partly. HubSpot says installing the integration adds its tracking code to your Shopify store automatically. Checkout is a different surface. Shopify runs tracking there through web pixels, which load in a sandbox. When marketing needs campaign source on every order, we check what reaches HubSpot from storefront to checkout, then close the gaps with a pixel and order properties.",
  },
  // ── Working with us ──────────────────────────────────────────────
  {
    category: 'working',
    question: 'How much does a custom Shopify HubSpot integration cost?',
    answer:
      "It depends on the gaps. HubSpot's own app is listed for all plans, and custom field mappings need Data Hub Starter or higher. For custom work, Shopify developers in the US and Canada typically charge $120 to $200 an hour, according to CartCoders' 2026 rate guide. FactoryJet quotes a fixed price in writing after a short scoping call.",
  },
  {
    category: 'working',
    question: 'How long does a Shopify HubSpot integration take?',
    answer:
      'Installing the native app is a same-day job. A custom integration is a project, and the time goes into three things: cleaning contacts and products, agreeing what each field means, and testing with sample orders. The timeline goes in writing with the quote, and each phase is scoped and signed on its own.',
  },
  {
    category: 'working',
    question: 'Can I see it working before I sign?',
    answer:
      'Yes. Before a contract, we show working software on your own data. For this kind of project that means a sample of your own orders and customers moving from a test store into a HubSpot sandbox or test portal, so your team can check the records, deals and properties it creates.',
  },
  {
    category: 'working',
    question: 'Can I send you a brief or an RFP?',
    answer:
      'Yes, and it speeds things up. Use the form on this page with your name and email. The next step lets you upload a brief or RFP as a PDF or Word file, and tell us your Shopify plan and HubSpot hubs in the message box. Bhavesh, the founder, reads it and replies within 24 hours with questions or a route.',
  },
  {
    category: 'working',
    question: 'Do you also connect Shopify to Salesforce, NetSuite or QuickBooks?',
    answer:
      'Yes. The same team connects Shopify to Salesforce, to ERPs such as NetSuite and Odoo, and to QuickBooks. Many brands need two of these at once, for example HubSpot for marketing and an ERP for stock. We map who owns each field across all of them, so two systems never fight over the same number.',
  },
  {
    category: 'working',
    question: 'Who owns the integration code when it is done?',
    answer:
      'You do, from day one. The code sits in your repository, and the integration can run in your own cloud account at cost, with no markup from us. Defects are fixed inside the build price for a cover period agreed before work starts. After that, support is optional and each change is quoted and approved.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

/* ── What HubSpot's own app syncs. Restates the object table in HubSpot's
   help article as read on 2026-10-29. ── */
type Direction = 'both' | 'toHubspot';

const DIRECTION_LABEL: Record<Direction, string> = {
  both: 'Both ways',
  toHubspot: 'Shopify to HubSpot',
};

const NATIVE_SYNC: ReadonlyArray<{ hubspot: string; shopify: string; dir: Direction; note: string }> = [
  {
    hubspot: 'Contacts',
    shopify: 'Customers',
    dir: 'both',
    note: 'Matched by email address. Orders from a customer with no email arrive with no linked contact.',
  },
  {
    hubspot: 'Companies',
    shopify: 'Companies',
    dir: 'both',
    note: 'Only on Shopify Plus, per HubSpot. Shopify itself offers B2B on Basic, Grow and Advanced too.',
  },
  {
    hubspot: 'Products',
    shopify: 'Products',
    dir: 'both',
    note: 'Matched by product name. Variants do not sync.',
  },
  {
    hubspot: 'Orders',
    shopify: 'Orders',
    dir: 'toHubspot',
    note: 'One way. Orders cannot be changed from HubSpot.',
  },
  {
    hubspot: 'Carts',
    shopify: 'Abandoned checkouts',
    dir: 'toHubspot',
    note: 'One way. Useful for recovery emails from HubSpot.',
  },
];

/* ── The gaps. Eight places a brand outgrows the native app. Each restates a
   vendor page, except where `sources` is empty, which marks our own rule. ── */
const GAPS: ReadonlyArray<{ n: string; t: string; b: string; fix: string; sources: ReadonlyArray<SrcKey> }> = [
  {
    n: '01',
    t: 'B2B companies on a plan below Plus',
    b: 'HubSpot syncs companies only for Shopify Plus. Shopify offers B2B on Basic, Grow and Advanced as well.',
    fix: 'We sync Shopify companies and company locations to HubSpot companies on any plan that has B2B.',
    sources: ['hsConnect', 'shopifyB2bHelp'],
  },
  {
    n: '02',
    t: 'Catalogs, price lists and payment terms',
    b: "Shopify assigns catalogs, with negotiated prices, to each company location. HubSpot's article does not mention catalogs or terms.",
    fix: 'We write the catalog, terms and buyer location to the company record, so a rep sees what that account pays.',
    sources: ['shopifyB2bDev', 'hsConnect'],
  },
  {
    n: '03',
    t: 'Product variants',
    b: 'HubSpot says Shopify product variants cannot sync. A product in five sizes shows as one.',
    fix: 'Each variant becomes its own HubSpot product, matched on the Shopify variant ID, not the name.',
    sources: ['hsConnect'],
  },
  {
    n: '04',
    t: 'Metafields and custom objects',
    b: 'Metafields are not supported by the app. HubSpot custom objects need an Enterprise subscription.',
    fix: 'We read metafields through the Shopify API and write them to properties or to custom objects you already have.',
    sources: ['hsConnect', 'hsCustomObjects'],
  },
  {
    n: '05',
    t: 'Orders that should move a deal',
    b: "The app syncs orders, not deals. HubSpot's orders object can be linked to deals, line items and companies.",
    fix: 'A wholesale order opens or updates a deal, carries its line items, and moves stage when it is paid or shipped.',
    sources: ['hsConnect', 'hsOrdersApi'],
  },
  {
    n: '06',
    t: 'Subscription renewals and wholesale reorders',
    b: "HubSpot's Shopify article does not mention subscriptions. Renewals arrive as ordinary orders.",
    fix: 'Renewals and reorders are tagged, and status changes trigger the HubSpot workflows your team already runs.',
    sources: ['hsConnect'],
  },
  {
    n: '07',
    t: 'Duplicates and name matching',
    b: 'Imported records may sync again as duplicates. Products and companies match on a cleaned name.',
    fix: 'We clean both lists first, then match on IDs that never change, with a written merge rule.',
    sources: ['hsConnect'],
  },
  {
    n: '08',
    t: 'Attribution through checkout',
    b: "HubSpot's tracking code goes on the store. Shopify checkout tracking runs through sandboxed web pixels.",
    fix: 'We test what reaches HubSpot from first visit to paid order, then add a pixel and order properties where it drops.',
    sources: ['hsConnect', 'shopifyPixels'],
  },
];

/* ── House terms, approved by Bhavesh 15 to 16 Oct 2026. Do not reword into
   a fixed monthly, a warranty day count or an uptime promise. ── */
const TERMS: ReadonlyArray<{ t: string; d: string }> = [
  { t: 'Demo before you sign', d: 'Working software on your own data, a sample of your orders in a HubSpot test portal, before any contract.' },
  { t: 'Fixed price per phase', d: 'Each phase is scoped, priced and signed on its own. No open hourly meter.' },
  { t: 'Your code, your accounts', d: 'Code and repository are yours from day one. Hosting can run in your own account at cost, with no markup from us.' },
  { t: 'Defect cover in the build price', d: 'Defects found after launch are fixed for a cover period agreed before work starts.' },
  { t: 'No monthly minimum', d: 'Support after launch is optional. Each change is quoted and approved before we do it.' },
];

/* ── Process. Six steps, in the order we work. ── */
const PROCESS: ReadonlyArray<{ n: string; t: string; b: string }> = [
  {
    n: '01',
    t: 'Read your brief and your setup',
    b: 'Your Shopify plan, your HubSpot hubs and tiers, the apps already installed, and what sales and marketing do in HubSpot each day.',
  },
  {
    n: '02',
    t: 'Try the native app first',
    b: "We check HubSpot's own integration against your list. Where it covers a need, we set it up and stop there. We quote custom work only for the gaps.",
  },
  {
    n: '03',
    t: 'Agree the owner of each field',
    b: 'One line per field: which system holds it, which way it flows, and what happens on a clash. Your team signs this page before we build.',
  },
  {
    n: '04',
    t: 'Clean contacts, companies and products',
    b: 'Duplicates merged, emails fixed, product names and IDs lined up. A sync copies bad data as fast as good data.',
  },
  {
    n: '05',
    t: 'Build and test with sample orders',
    b: 'A retail order, a B2B order on terms, a refund, a renewal and a guest checkout go through a test store into a HubSpot test portal. You check every record.',
  },
  {
    n: '06',
    t: 'Go live, compare counts, stay on',
    b: 'In the first weeks we compare Shopify order counts with HubSpot records each day. The same team stays on for support if you want it.',
  },
];

/* ── Comparison: custom integration vs native app plus mappings vs native app ── */
const COMPARE_COLUMNS: ReadonlyArray<ComparisonColumn> = [
  { label: 'Custom integration built by FactoryJet', isFactoryJet: true },
  { label: 'Native app with custom field mappings' },
  { label: "HubSpot's native app, default setup" },
];

const COMPARE_ROWS: ReadonlyArray<ComparisonRow> = [
  {
    feature: 'B2B companies',
    values: ['Any Shopify plan with B2B', 'Shopify Plus only', 'Shopify Plus only'],
  },
  {
    feature: 'Product variants',
    values: ['Yes, each variant matched by ID', 'No, per HubSpot', 'No, per HubSpot'],
  },
  {
    feature: 'Metafields and extra fields',
    values: ['Yes, to properties or custom objects', 'Extra fields mapped, metafields not supported', 'Default fields only'],
  },
  {
    feature: 'Deals from orders',
    values: ['Yes, with line items and stages', 'Not described by HubSpot', 'Not described by HubSpot'],
  },
  {
    feature: 'HubSpot plan needed',
    values: ['Any plan; Enterprise only for custom objects', 'Data Hub Starter or higher', 'Listed for all plans'],
  },
  {
    feature: 'Right call when',
    values: [
      'B2B, variants, deals or attribution matter to the business',
      'You need a few extra store fields on HubSpot records',
      'You sell direct and marketing needs customers and orders',
    ],
  },
];

const RELATED: ReadonlyArray<{ href: string; t: string; b: string }> = [
  { href: '/services/shopify-plus-b2b', t: 'Shopify Plus B2B', b: 'Company accounts, catalogs and payment terms on the store side.' },
  { href: '/services/shopify-quickbooks-integration', t: 'Shopify QuickBooks integration', b: 'Stock, prices and books in step with the store.' },
  { href: '/services/ecommerce-erp-integration', t: 'Ecommerce ERP integration', b: 'Shopify joined to NetSuite, Odoo, SAP Business One and ERPNext.' },
  { href: '/services/ai-integration-services', t: 'AI integration services', b: 'AI steps added inside HubSpot, Salesforce and Shopify.' },
  { href: '/services/shopify-maintenance-services', t: 'Shopify maintenance and support', b: 'Keeps the store and its connections current after launch.' },
  { href: '/b2b-ecommerce', t: 'B2B ecommerce', b: 'Wholesale portals with account pricing and reordering.' },
];

/** Small inline source links. Same visual pattern as the QuickBooks page.
 *  Renders nothing when a claim is our own and has no source. */
function SourceLinks({ ids }: { ids: ReadonlyArray<SrcKey> }) {
  if (ids.length === 0) return null;
  return (
    <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-0">
      {ids.map((id) => (
        <a
          key={id}
          href={SRC[id].url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 min-w-11 items-center gap-1.5 py-2 font-fj-mono text-xs font-semibold tracking-wide text-[#B23E13] hover:underline"
        >
          <svg width="10" height="10" viewBox="0 0 9 9" fill="none" aria-hidden="true" className="flex-shrink-0">
            <path d="M1.5 7.5L7.5 1.5M7.5 1.5H3M7.5 1.5V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {SRC[id].short}
        </a>
      ))}
    </p>
  );
}

const SOURCE_KEYS = Object.keys(SRC) as SrcKey[];

export default function ShopifyHubSpotIntegrationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />

      <SiteHeader />

      <main className="min-h-screen bg-fj-cream text-fj-ink">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* 1. HERO */}
        <section className="relative overflow-hidden border-b border-fj-neutral-200 bg-fj-cream pt-8 pb-14 md:pt-14 md:pb-16">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              <div className="min-w-0 lg:col-span-7">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F05A28]/30 bg-white px-3 py-1.5">
                  <span className="font-fj-mono text-xs font-bold tracking-wide text-[#B23E13]">
                    SHOPIFY HUBSPOT INTEGRATION &middot; US, UK, AU
                  </span>
                </div>

                <h1 className="font-fj-display text-[1.75rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-fj-ink sm:text-5xl lg:text-[3.2rem]">
                  Shopify HubSpot integration for brands whose sales team works in HubSpot.
                </h1>

                <p className="mt-5 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600">
                  Your store runs on Shopify or Shopify Plus. Your marketing or sales team lives in HubSpot.
                </p>

                <p className="mt-4 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600">
                  HubSpot&rsquo;s own app covers customers and orders. We set it up where it fits, and build the
                  rest when you sell B2B, need variants or deals, or want to know which campaign paid for an order.
                  Send us your brief or RFP and you get a fixed quote in writing.
                </p>

                <div className="mt-6">
                  <HeroInlineForm
                    region="us"
                    source="services_shopify_hubspot_integration_hero"
                    service="Shopify HubSpot Integration"
                    submitLabel="Scope my integration"
                    trustText="Working software on your own data before you sign. Founder replies within 24 hours."
                  />
                </div>

                <div className="mt-5">
                  <Link
                    href={CALENDLY}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 font-fj-body text-sm font-semibold text-fj-ink hover:opacity-70"
                  >
                    Talk to the founder
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="h-4 w-4">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-fj-neutral-200 pt-5 font-fj-mono text-xs text-fj-neutral-600">
                  <span>Registered Shopify Partner</span>
                  <span>500+ businesses served</span>
                  <span>Founded 2014</span>
                  <span>HubSpot facts checked {CHECKED_ON}</span>
                </div>
              </div>

              <div className="min-w-0 lg:col-span-5">
                <figure className="rounded-2xl border border-fj-neutral-200 bg-white p-5 sm:p-6">
                  <figcaption className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">
                    What HubSpot&rsquo;s own Shopify app syncs
                  </figcaption>
                  <ul className="mt-4 divide-y divide-fj-neutral-200">
                    {NATIVE_SYNC.map((row) => (
                      <li key={row.hubspot} className="flex items-baseline justify-between gap-4 py-2.5">
                        <span className="font-fj-body text-[15px] text-fj-ink">
                          <span className="font-semibold">{row.shopify}</span>
                          <span className="text-fj-neutral-600"> to {row.hubspot.toLowerCase()}</span>
                        </span>
                        <span
                          className={`flex-shrink-0 font-fj-mono text-xs font-bold uppercase tracking-wider ${
                            row.dir === 'both' ? 'text-[#B23E13]' : 'text-fj-neutral-600'
                          }`}
                        >
                          {DIRECTION_LABEL[row.dir]}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 font-fj-body text-[13px] leading-snug text-fj-neutral-600">
                    Not on the list: product variants, metafields, deals, subscriptions and B2B catalogs. Those are
                    the gaps we build for.
                  </p>
                  <SourceLinks ids={['hsConnect']} />
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ANSWER-FIRST BLOCK */}
        <section className="border-b border-fj-neutral-200 bg-white py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8">
            <div id="short-answer" className="rounded-2xl border-2 border-[#F05A28]/25 bg-fj-cream p-6 sm:p-8">
              <div className="mb-3 font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">
                Short answer
              </div>
              <p className="font-fj-body text-base leading-relaxed text-fj-ink sm:text-lg">
                Yes, Shopify connects to HubSpot. HubSpot&rsquo;s own integration syncs customers, companies and
                products both ways, and sends orders and abandoned checkouts from Shopify into HubSpot. It is enough
                for a store selling direct to consumers. You need a custom integration when company sync has to work
                below Shopify Plus, or when your team needs product variants, metafields, deals from orders,
                subscription status or campaign source on each order. HubSpot&rsquo;s help article lists none of those
                (as read on {CHECKED_ON}).
              </p>
              <SourceLinks ids={['hsConnect', 'shopifyB2bHelp']} />
            </div>
          </div>
        </section>

        {/* 3. THE NATIVE APP */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Start with what is free</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  What HubSpot&rsquo;s Shopify app does, in HubSpot&rsquo;s words.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  HubSpot calls it Shopify Data Sync. You install it from the HubSpot App Marketplace. HubSpot says you
                  need Super Admin or App Marketplace permissions to do it, and that the install adds HubSpot&rsquo;s
                  tracking code to your store.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  After the first sync, HubSpot says records sync within 10 minutes of a change. Custom field mappings
                  need at least a Data Hub Starter subscription.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  We tell buyers to install it before paying anyone. Then the gaps are real ones your team has hit,
                  not guesses.
                </p>
                <SourceLinks ids={['hsConnect']} />
              </div>

              <div className="lg:col-span-8">
                <div className="overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white">
                  <table className="w-full border-collapse text-left">
                    <caption className="sr-only">Objects synced by HubSpot&rsquo;s Shopify integration</caption>
                    <thead>
                      <tr className="border-b border-fj-neutral-200 bg-fj-cream">
                        <th scope="col" className="px-4 py-3 font-fj-mono text-xs font-bold uppercase tracking-wider text-fj-neutral-600 sm:px-6">
                          Shopify to HubSpot
                        </th>
                        <th scope="col" className="px-4 py-3 font-fj-mono text-xs font-bold uppercase tracking-wider text-fj-neutral-600 sm:px-6">
                          What to know
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {NATIVE_SYNC.map((row) => (
                        <tr key={row.hubspot} className="border-b border-fj-neutral-200 last:border-b-0 align-top">
                          <th scope="row" className="w-[38%] px-4 py-4 font-normal sm:px-6">
                            <div className="font-fj-display text-base font-semibold text-fj-ink">
                              {row.shopify} to {row.hubspot.toLowerCase()}
                            </div>
                            <div
                              className={`mt-1 font-fj-mono text-xs font-bold uppercase tracking-wider ${
                                row.dir === 'both' ? 'text-[#B23E13]' : 'text-fj-neutral-600'
                              }`}
                            >
                              {DIRECTION_LABEL[row.dir]}
                            </div>
                          </th>
                          <td className="px-4 py-4 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600 sm:px-6">
                            {row.note}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
                  Object list and directions from HubSpot&rsquo;s help article, last updated September 30, 2026, as read
                  on {CHECKED_ON}.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. THE GAPS */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <p className="fj-eyebrow">When to build custom</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Eight signs you have outgrown the native app.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Each one comes from what HubSpot and Shopify publish about their own products. If none of these apply,
              keep the native app. If two or more do, it is time to scope a custom integration. A B2B store side, if you still need one, is covered on our{' '}
              <Link href="/services/shopify-plus-b2b" className="font-semibold text-fj-ink underline underline-offset-4">
                Shopify Plus B2B
              </Link>{' '}
              page.
            </p>

            <ol className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-12">
              {GAPS.map((g, i) => (
                <li
                  key={g.n}
                  className={`rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 ${
                    i % 4 === 0 || i % 4 === 3 ? 'lg:col-span-7' : 'lg:col-span-5'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white font-fj-mono text-sm font-bold text-[#B23E13]">
                      {g.n}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{g.t}</h3>
                      <p className="mt-1.5 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{g.b}</p>
                      <p className="mt-3 font-fj-body text-[15px] leading-relaxed text-fj-ink">
                        <span className="font-semibold">What we build.</span> {g.fix}
                      </p>
                      <SourceLinks ids={g.sources} />
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <MidPageCTA
          headline="Send us your brief or RFP. We will mark which gaps are real."
          sub="Tell us your Shopify plan, your HubSpot hubs and what your team needs to see. We reply with what the native app already covers, what needs building, and a fixed quote for that part only."
          label="Send my brief"
          note="Upload a PDF or Word brief in the next step. Bhavesh replies within 24 hours."
        />

        {/* 5. HOUSE TERMS */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="fj-eyebrow">How we work</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  The terms, before you ask.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Customer and order data is what your marketing and sales teams run on. You should own the code that
                  moves it, and never pay a fee you did not choose.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  FactoryJet quotes the build, and any support you choose, as fixed prices in writing.
                </p>
              </div>
              <ul className="grid gap-3 lg:col-span-7">
                {TERMS.map((x) => (
                  <li key={x.t} className="rounded-2xl border border-fj-neutral-200 bg-white p-5">
                    <p className="font-fj-display text-lg font-semibold text-fj-ink">{x.t}</p>
                    <p className="mt-1 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{x.d}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 6. PROCESS */}
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Process</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  How a Shopify HubSpot project runs.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Your marketing or sales lead decides what HubSpot should show. We make Shopify and HubSpot do it,
                  and we keep the connection running. If the same orders also need to reach your books, see{' '}
                  <Link
                    href="/services/shopify-quickbooks-integration"
                    className="font-semibold text-fj-ink underline underline-offset-4"
                  >
                    Shopify QuickBooks integration
                  </Link>{' '}
                  or{' '}
                  <Link
                    href="/services/ecommerce-erp-integration"
                    className="font-semibold text-fj-ink underline underline-offset-4"
                  >
                    ecommerce ERP integration
                  </Link>
                  .
                </p>
              </div>
              <ol className="grid gap-4 lg:col-span-8">
                {PROCESS.map((p) => (
                  <li key={p.n} className="flex items-start gap-4 rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white font-fj-mono text-sm font-bold text-[#B23E13]">
                      {p.n}
                    </div>
                    <div>
                      <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{p.t}</h3>
                      <p className="mt-1.5 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{p.b}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* 7. COMPARISON */}
        <ComparisonTable
          eyebrow="How the routes compare"
          headline="Native app, native app with mappings, or a custom integration."
          lead="HubSpot's own app is often the right answer, and we will say so on the scoping call. A custom integration earns its cost when B2B, variants, deals or attribution matter to how you sell."
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
          footer={`HubSpot and Shopify facts are from each vendor's own pages as read on ${CHECKED_ON}.`}
          scrollRegionLabel="Comparison of ways to connect Shopify and HubSpot"
        />

        {/* 8. RELATED SERVICES */}
        <section className="border-y border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <p className="fj-eyebrow">Next to this page</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Related integration services.
            </h2>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
              {RELATED.map((r, i) => (
                <li key={r.href} className={i % 4 === 0 || i % 4 === 3 ? 'lg:col-span-7' : 'lg:col-span-5'}>
                  <Link
                    href={r.href}
                    className="block h-full rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 transition-colors hover:border-[#F05A28]"
                  >
                    <span className="font-fj-display text-lg font-semibold text-fj-ink">{r.t}</span>
                    <span className="mt-1.5 block font-fj-body text-sm leading-relaxed text-fj-neutral-600">{r.b}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 9. SOURCES + REVIEW LINE */}
        <section className="bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Method</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Sources, checked on {CHECKED_ON}.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Every HubSpot and Shopify fact on this page was read from the vendor pages listed here on that day.
                  Vendors update their apps and plans, so check the linked page before you act on one.
                </p>
                <p className="mt-6 font-fj-mono text-xs leading-relaxed text-fj-neutral-600">
                  Reviewed and updated {PAGE_MODIFIED} &middot;{' '}
                  <Link href="/author/bhavesh-barot" className="underline underline-offset-4">
                    Bhavesh Barot
                  </Link>
                  , Founder
                </p>
              </div>
              <ul className="grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2 lg:col-span-8">
                {SOURCE_KEYS.map((k) => (
                  <li key={k}>
                    <a
                      href={SRC[k].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center font-fj-body text-sm leading-snug text-fj-ink underline decoration-fj-neutral-200 underline-offset-4 hover:decoration-[#F05A28]"
                    >
                      {SRC[k].label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 10. FAQ */}
        <FAQ
          eyebrow="Shopify HubSpot integration FAQ"
          headline="Shopify and HubSpot questions, answered plainly."
          lead={`What marketing, sales and ecommerce leads ask before connecting the two. HubSpot and Shopify answers are from the vendors' own pages as read on ${CHECKED_ON}.`}
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-white"
        />

        {/* 11. FINAL CTA */}
        <FinalCTA
          variant="light"
          eyebrow="Shopify HubSpot integration"
          headline="Every order where your team can see it."
          sub="Send your Shopify plan, your HubSpot hubs and what sales and marketing need. We set up the native app where it fits, build the gaps, test with sample orders and stay on after launch."
          primaryCta={{ label: 'Scope my integration', modal: true, region: 'us' }}
          secondaryCta={{ label: 'Talk to the founder', href: '/contact' }}
          objectionHandler="Registered Shopify Partner. Demo on your data before you sign. Fixed price per phase. You own the code."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}

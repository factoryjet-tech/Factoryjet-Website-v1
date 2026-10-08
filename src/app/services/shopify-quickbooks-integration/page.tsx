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

import SyncMapDiagram from './SyncMapDiagram';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/shopify-quickbooks-integration, built 2026-10-08.

   Why this page exists: US buyers who reached FactoryJet through ChatGPT between
   10 Aug and 8 Oct 2026 landed on narrow pages that name one job, and one of
   them asked for a Shopify store joined to QuickBooks. No page covered it.
   US monthly searches measured 2026-10-08 (DataForSEO, location 2840):
   "shopify quickbooks integration" 720 (KD 16), "shopify quickbooks online
   integration" 260 (KD 14), "shopify quickbooks desktop integration" 30,
   "ecommerce quickbooks integration" 30. Page one is Intuit's own pages,
   connector vendors, Reddit, YouTube and Shopify community threads, with an AI
   Overview on 10 of 10 SERPs that returned.

   Truth rules for anyone editing this file:
   - Every platform fact (what a connector syncs, plan limits, dates, ratings,
     app prices) was read from the maker's own page on 2026-10-08 and links to
     that page through the SRC map below. Ratings and prices move. If you change
     one, re-fetch the page first and update the "as listed on" wording.
   - Written for every industry on purpose. No client is named or described.
   - No FactoryJet prices. The only dollar figures are a third-party app's list
     price and a sourced market rate, both inside the one cost FAQ answer.
   - "QuickBooks is most often the master for items, stock and prices" is how
     Bhavesh described the work on 2026-10-08. Do not harden it into a statistic.
   - Mirrors /services/shopify-checkout-customization for components and schema.

   Schema: WebPage + Service + FAQPage + BreadcrumbList. Organization is
   rendered once sitewide by src/app/layout.tsx and referenced here by @id.
   The FAQPage mainEntity is generated from the exact FAQ_ITEMS array the
   visible <FAQ> component renders. There is no second, hand-written array.
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL_URL = 'https://factoryjet.com/services/shopify-quickbooks-integration';
const PAGE_TITLE = 'Shopify QuickBooks Integration Services | FactoryJet';
const PAGE_DESC =
  'Shopify QuickBooks integration for Online, Desktop and Enterprise. Keep items, stock and prices in step, with orders, fees and payouts in your books.';
const PAGE_PUBLISHED = '2026-10-08';
const PAGE_MODIFIED = '2026-10-08';
const CHECKED_ON = '8 Oct 2026';
const OG_IMAGE = 'https://factoryjet.com/og-default.png';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const IMG = '/images/us/services/shopify-quickbooks-integration';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'shopify quickbooks integration',
    'quickbooks shopify integration',
    'shopify to quickbooks integration',
    'shopify quickbooks online integration',
    'shopify quickbooks desktop integration',
    'shopify quickbooks enterprise integration',
    'ecommerce quickbooks integration',
    'best shopify quickbooks integration',
    'quickbooks shopify connector',
    'shopify quickbooks inventory integration',
    'sync inventory from quickbooks to shopify',
    'how to connect shopify to quickbooks',
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
        alt: 'FactoryJet, Shopify and QuickBooks integration services for US businesses',
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
  { name: 'Shopify QuickBooks Integration', url: CANONICAL_URL },
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
  name: 'Shopify QuickBooks Integration',
  serviceType:
    'Shopify and QuickBooks integration, QuickBooks Online, QuickBooks Desktop and QuickBooks Enterprise, inventory and price sync, order and payout sync',
  provider: ORG_REF,
  areaServed: { '@type': 'Country', name: 'United States' },
  description:
    'FactoryJet plans, builds, tests and supports the connection between a Shopify store and QuickBooks Online, Desktop or Enterprise: items, SKUs, stock counts and prices kept in step, with orders, refunds, fees, sales tax and payouts recorded in the books. Work covers choosing a connector app, setting it up, and building a custom sync when an app cannot follow the business rules.',
  url: CANONICAL_URL,
};

/* ── Sources. One map, used by every inline source link (the `short` label) AND
   by the visible "Sources" list near the foot of the page (the full `label`).
   Each URL was opened on 2026-10-08 and the supporting sentence read before the
   claim was written. help.shopify.com and the Intuit help article were read in
   a real browser, because both refuse plain fetches. ── */
const SRC = {
  intuitConnect: {
    short: 'Intuit Help: connect Shopify',
    label: 'Intuit QuickBooks Help: Connect Shopify to QuickBooks Online (updated Aug 3, 2026)',
    url: 'https://quickbooks.intuit.com/learn-support/en-us/help-article/manage-integrations/connect-shopify-quickbooks-online/L1Xv7ZCFB_US_en_US',
  },
  appQbo: {
    short: 'Shopify App Store: QuickBooks Online',
    label: 'Shopify App Store: QuickBooks Online, by Intuit',
    url: 'https://apps.shopify.com/qbconnector',
  },
  appDesktop: {
    short: 'Shopify App Store: Desktop Connector',
    label: 'Shopify App Store: QuickBooks Desktop Connector, by LINK',
    url: 'https://apps.shopify.com/quickbooks-desktop-connector',
  },
  helpDesktopOverview: {
    short: 'Shopify Help: QuickBooks Desktop overview',
    label: 'Shopify Help Center: Overview of QuickBooks Desktop POS migration',
    url: 'https://help.shopify.com/en/manual/sell-in-person/quickbooks/overview',
  },
  helpDesktopIntegration: {
    short: 'Shopify Help: QuickBooks Desktop integration',
    label: 'Shopify Help Center: Integrating QuickBooks Desktop accounting software with Shopify',
    url: 'https://help.shopify.com/en/manual/sell-in-person/quickbooks/integration',
  },
  intuitStopSell: {
    short: 'Intuit: Desktop sales to new US subscribers',
    label: 'Intuit: QuickBooks Desktop to stop selling to new U.S. subscribers',
    url: 'https://quickbooks.intuit.com/r/whats-new/quickbooks-desktop-stop-sell/',
  },
  intuitInventory: {
    short: 'Intuit Help: inventory products',
    label: 'Intuit QuickBooks Help: Add inventory products in QuickBooks Online (updated Aug 5, 2026)',
    url: 'https://quickbooks.intuit.com/learn-support/en-us/help-article/accounting-bookkeeping/add-inventory-products-quickbooks-online/L6eIyKNFi_US_en_US',
  },
  myworks: {
    short: 'MyWorks Support: sync directions',
    label: 'MyWorks Support: Default fields and sync direction summary, Shopify and QuickBooks Online',
    url: 'https://support.myworks.software/default-fields-sync-direction-summary-shopify-quickbooks-online-sync',
  },
  webgility: {
    short: 'Webgility: QuickBooks and Shopify',
    label: 'Webgility: QuickBooks Shopify integration',
    url: 'https://www.webgility.com/quickbooks-shopify-integration',
  },
  a2x: {
    short: 'A2X: Shopify and QuickBooks Online',
    label: 'A2X: Shopify and QuickBooks Online integration',
    url: 'https://www.a2xaccounting.com/integrations/shopify/quickbooks',
  },
  devInventory: {
    short: 'shopify.dev: set stock quantities',
    label: 'shopify.dev: inventorySetQuantities mutation',
    url: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorySetQuantities',
  },
  cartcoders: {
    short: 'CartCoders rate guide, Mar 10, 2026',
    label: 'CartCoders: Shopify Developer Cost Breakdown for 2026 (Mar 10, 2026)',
    url: 'https://cartcoders.com/blog/shopify-development/shopify-developer-cost-hourly-rate-project-pricing/',
  },
} as const;

type SrcKey = keyof typeof SRC;

/* ── FAQ. Single array, rendered visibly below AND used to build the FAQPage
   JSON-LD. Never hand-duplicate this list near the ld+json block.
   Questions come from People Also Ask and related searches pulled from
   DataForSEO (US, location 2840) on 2026-10-08, plus the page's own queries. ── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'Connecting the two' },
  { key: 'versions', label: 'QuickBooks versions' },
  { key: 'data', label: 'Stock, prices and books' },
  { key: 'working', label: 'Working with us' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  // ── Connecting the two ───────────────────────────────────────────
  {
    category: 'basics',
    question: 'Does Shopify integrate with QuickBooks?',
    answer:
      'Yes. Intuit publishes a connector for QuickBooks Online, listed on the Shopify App Store as QuickBooks Online. It brings Shopify sales, refunds, fees, taxes and payouts into your books. QuickBooks Desktop and Enterprise connect through a separate QuickBooks Desktop Connector app or a third-party tool. Which route fits depends on your QuickBooks version and on which system holds your stock and prices.',
  },
  {
    category: 'basics',
    question: 'How do I connect Shopify to QuickBooks Online?',
    answer:
      "Intuit's help article lists what you need: a QuickBooks Online account, your original myshopify.com store address, your Shopify login, and permission to install apps in Shopify. You then open the Shopify Connector by QuickBooks inside QuickBooks Online and follow the prompts. Intuit says the first import takes between 10 minutes and 3 hours, depending on how many transactions there are.",
  },
  {
    category: 'basics',
    question: 'What is the best app to integrate Shopify and QuickBooks?',
    answer:
      "It depends on which system leads. If Shopify is where sales happen and QuickBooks only needs correct totals, Intuit's own connector is free to install and rated 4.6 out of 5 from 3,330 reviews on the Shopify App Store. If QuickBooks holds your stock and prices, look for an app that documents sending them to Shopify. MyWorks lists that on its support page.",
  },
  {
    category: 'basics',
    question: 'Does Shopify work well with QuickBooks?',
    answer:
      "For sales flowing into the books, yes. Intuit's connector records each sale as a Sales Receipt and its fee as an Expense, and it tracks the sales tax Shopify collected. The other direction is harder. Intuit's help article does not describe QuickBooks sending stock counts or prices to Shopify, so stores that need that add a second tool or a custom sync.",
  },
  {
    category: 'basics',
    question: 'Is the Shopify connector from Intuit free?',
    answer:
      "The Shopify App Store listing says it is free to install and that additional charges may apply. The same listing says the connector is included with a QuickBooks subscription, and that external charges may be billed by Intuit separately from your Shopify invoice. You still pay for QuickBooks Online itself.",
  },
  {
    category: 'basics',
    question: 'Does Shopify include bookkeeping?',
    answer:
      'No. Shopify records your orders, your payouts and the tax it collected, and it has sales reports. It is not accounting software. It does not keep a general ledger, which is the full record of money in and out that your accountant works from. That is why stores connect Shopify to QuickBooks.',
  },
  // ── QuickBooks versions ──────────────────────────────────────────
  {
    category: 'versions',
    question: 'Can Shopify connect to QuickBooks Desktop?',
    answer:
      "Yes. The Shopify App Store lists a QuickBooks Desktop Connector, made by a company called LINK. Shopify's help center says it works with QuickBooks Desktop versions 2021 to 2024 and syncs once a day at a time you choose. Shopify wrote that guide for merchants moving from QuickBooks Desktop POS to Shopify POS, so check that it fits your setup before relying on it.",
  },
  {
    category: 'versions',
    question: 'Can Shopify connect to QuickBooks Enterprise?',
    answer:
      'Yes. Shopify lists QuickBooks Desktop Enterprise (Subscription) as compatible with the QuickBooks Desktop Connector. Third-party tools cover it as well: Webgility says it syncs Shopify with QuickBooks Online or Desktop. When Enterprise holds stock across several sites or price levels by customer, a custom sync is often the cleaner route.',
  },
  {
    category: 'versions',
    question: 'Is QuickBooks Desktop being phased out?',
    answer:
      'Partly. Intuit stopped selling new subscriptions of QuickBooks Desktop Pro Plus, Premier Plus and Mac Plus to US customers after September 30, 2024. Existing subscribers can keep renewing, and Intuit says it will keep providing security updates and support for them. QuickBooks Desktop Enterprise is still sold to new customers.',
  },
  {
    category: 'versions',
    question: 'Which QuickBooks Online plan do I need to track stock?',
    answer:
      "Plus or Advanced. Intuit's help page says that with QuickBooks Online Plus or Advanced you can track how much of each product you have in stock. An inventory item there holds a name, a SKU, a quantity on hand, a reorder point, a sales price and a purchase cost. Those are the fields a Shopify sync reads.",
  },
  {
    category: 'versions',
    question: 'How often does the QuickBooks Desktop Connector sync?',
    answer:
      "Once a day, at a time you pick, with a manual sync available whenever you want one. Shopify's help center says this changed on November 7, 2023. Before that date the connector synced every 5 minutes.",
  },
  // ── Stock, prices and books ──────────────────────────────────────
  {
    category: 'data',
    question: 'Can QuickBooks update my Shopify stock counts?',
    answer:
      "Yes, with the right tool. Intuit's own connector is documented as moving sales into QuickBooks. Sending stock counts the other way takes a two-way connector app or a custom sync. Shopify allows it: its developer documentation has a command that sets stock quantities to an exact number, and that is what a sync uses.",
  },
  {
    category: 'data',
    question: 'Can QuickBooks be the master for prices?',
    answer:
      'Yes. A master is the one copy everyone trusts. If your price list is kept in QuickBooks, a sync can send each change to Shopify so nobody retypes it. MyWorks documents product prices syncing in both directions between QuickBooks Online and Shopify. For price levels by customer, or rules an app cannot follow, we build the sync.',
  },
  {
    category: 'data',
    question: 'How are Shopify sales recorded in QuickBooks?',
    answer:
      "With Intuit's connector, each sale arrives as a Payment Received transaction. When you confirm it, QuickBooks Online creates a Sales Receipt for the sale and an Expense for the fee. Wholesale orders are imported as invoices. Other tools work differently: A2X posts one summary for each Shopify payout.",
  },
  {
    category: 'data',
    question: 'Why does my Shopify payout not match my QuickBooks deposit?',
    answer:
      'A payout is the bank transfer Shopify sends you. Intuit describes it as typically covering sales over a one-day period, with several sales and adjustments inside. It arrives with fees and refunds already taken out, so it will not equal any single order. A good setup records the sales, fees and refunds behind each payout so the deposit can be matched.',
  },
  {
    category: 'data',
    question: 'How far back can I import Shopify sales into QuickBooks?',
    answer:
      "Intuit's connector imports transactions from up to one year ago. Anything older needs a different method, which we scope case by case.",
  },
  {
    category: 'data',
    question: 'Does the integration handle wholesale and B2B orders?',
    answer:
      "Intuit's connector does. Shopify B2B and wholesale orders are imported into QuickBooks as invoices. When a customer pays outside the store and you mark the invoice paid in QuickBooks, that status is sent back and the order is marked paid in Shopify. Payment terms and customer price lists need checking case by case.",
  },
  {
    category: 'data',
    question: 'What happens if a product is in Shopify but not in QuickBooks?',
    answer:
      "Intuit's connector tries to match products by SKU and name with the ones already in QuickBooks Online, to avoid duplicates. A product it cannot match has to be matched or created by hand on the review screen. That is why we clean the item list before connecting anything.",
  },
  // ── Working with us ──────────────────────────────────────────────
  {
    category: 'working',
    question: 'How much does a Shopify QuickBooks integration cost?',
    answer:
      "It depends on the route. Intuit's connector is free to install with a QuickBooks subscription. The QuickBooks Desktop Connector lists a free plan and a B2B plan at $99 a month. For custom work, Shopify developers in the US and Canada typically charge $120 to $200 an hour, according to CartCoders' 2026 rate guide. FactoryJet quotes a fixed price in writing after a short scoping call.",
  },
  {
    category: 'working',
    question: 'How long does a Shopify QuickBooks integration take?',
    answer:
      "Turning on Intuit's connector is a same-day job: Intuit says the first import takes between 10 minutes and 3 hours. A custom sync is a project, so plan time for cleaning the item list and for testing. The timeline goes in writing with the quote.",
  },
  {
    category: 'working',
    question: 'Do you replace my bookkeeper or accountant?',
    answer:
      'No. Your bookkeeper or accountant decides how sales, fees and tax should post. We are engineers. We make Shopify and QuickBooks follow those decisions, and we keep the connection running. We are happy to work with them directly.',
  },
  {
    category: 'working',
    question: 'Can I see it working before I sign?',
    answer:
      'Yes. Before a contract, we show working software on your own data. For this kind of project that means a sample of your own items moving between a test store and QuickBooks, so you can check the entries it creates.',
  },
  {
    category: 'working',
    question: 'Which industries do you work with?',
    answer:
      'Any business that sells stock and keeps its books in QuickBooks: distributors, manufacturers, retailers with a shop and a website, food and drink makers, and consumer brands. FactoryJet was founded in 2014 and has served more than 500 businesses.',
  },
  {
    category: 'working',
    question: 'Is FactoryJet a Shopify Plus Partner?',
    answer:
      'No. FactoryJet is a registered Shopify Partner, without a Plus Partner tier. We do the engineering work itself. If your procurement team requires a Plus Partner badge, tell us on the first call.',
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

/* ── Who leads what. The map FactoryJet sets up when QuickBooks is the master.
   The Shopify-led rows restate Intuit's help article. ── */
type Lead = 'quickbooks' | 'shopify' | 'both';

const LEAD_LABEL: Record<Lead, string> = {
  quickbooks: 'QuickBooks leads',
  shopify: 'Shopify leads',
  both: 'Both ways',
};

const LEADS: ReadonlyArray<{ data: string; lead: Lead; note: string }> = [
  {
    data: 'Items and SKUs',
    lead: 'quickbooks',
    note: 'A SKU is the short code that identifies one product. A new item is created once, in QuickBooks, and appears in the store.',
  },
  {
    data: 'Stock counts',
    lead: 'quickbooks',
    note: 'QuickBooks knows what was received and what was sold through every channel. Each web order lowers that count, and the new number goes back to the store.',
  },
  {
    data: 'Prices',
    lead: 'quickbooks',
    note: 'One price list. A change made in QuickBooks reaches the store without anyone retyping it.',
  },
  {
    data: 'Orders and refunds',
    lead: 'shopify',
    note: "The sale happens in the store. Intuit's connector records each sale as a Sales Receipt and each fee as an Expense.",
  },
  {
    data: 'Fees and payouts',
    lead: 'shopify',
    note: 'A payout is the bank transfer Shopify sends you. Intuit describes it as typically covering sales over a one-day period.',
  },
  {
    data: 'Sales tax collected',
    lead: 'shopify',
    note: "Intuit's connector tracks and records the tax Shopify collected on your behalf.",
  },
  {
    data: 'Customers',
    lead: 'shopify',
    note: 'New buyers are matched to your customer list in QuickBooks, or added to it.',
  },
  {
    data: 'Wholesale invoice status',
    lead: 'both',
    note: 'Wholesale orders arrive in QuickBooks as invoices. Mark one paid there and the order is marked paid in Shopify.',
  },
];

/* ── What each QuickBooks version can do. Three cards, each tied to the pages
   it comes from. Bullets are deliberately uneven in shape and length. ── */
type Version = {
  n: string;
  title: string;
  body: string;
  items: ReadonlyArray<string>;
  note: string;
  sources: ReadonlyArray<SrcKey>;
  span: string;
};

const VERSIONS: ReadonlyArray<Version> = [
  {
    n: '01',
    title: 'QuickBooks Online',
    body: 'The simplest version to connect, because Intuit publishes its own Shopify connector.',
    items: [
      "Listed on the Shopify App Store as QuickBooks Online, made by Intuit. Free to install, and the listing says the connector is included with a QuickBooks subscription",
      'Rated 4.6 out of 5 from 3,330 reviews, and on the App Store since February 23, 2015',
      'Each sale becomes a Sales Receipt and each fee an Expense. Wholesale orders become invoices',
      'Imports transactions from up to one year ago. The first import takes between 10 minutes and 3 hours',
    ],
    note: 'Intuit lists stock tracking for QuickBooks Online Plus and Advanced. If you are on Simple Start or Essentials, check your plan before making QuickBooks the master for stock.',
    sources: ['appQbo', 'intuitConnect', 'intuitInventory'],
    span: 'lg:col-span-7',
  },
  {
    n: '02',
    title: 'QuickBooks Desktop Pro and Premier',
    body: 'Desktop runs on a computer in your office, so it needs a separate connector.',
    items: [
      'The Shopify App Store lists a QuickBooks Desktop Connector made by a company called LINK, with a free plan and a paid B2B plan',
      'It is rated 1.7 out of 5 from 20 reviews',
      "Shopify's help center says it syncs once a day at a time you choose. Until November 7, 2023 it synced every 5 minutes",
      'Supported QuickBooks Desktop versions are 2021 to 2024',
    ],
    note: 'Intuit stopped selling new Desktop Pro Plus and Premier Plus subscriptions to US customers after September 30, 2024. Existing subscribers can still renew. Shopify wrote its Desktop guide for merchants moving from QuickBooks Desktop POS to Shopify POS.',
    sources: ['appDesktop', 'helpDesktopIntegration', 'helpDesktopOverview', 'intuitStopSell'],
    span: 'lg:col-span-5',
  },
  {
    n: '03',
    title: 'QuickBooks Enterprise',
    body: 'Enterprise is the Desktop version Intuit still sells to new customers.',
    items: [
      'Shopify lists QuickBooks Desktop Enterprise (Subscription) as compatible with the Desktop Connector',
      'Third-party connectors cover it too. Webgility says it syncs Shopify with QuickBooks Online or Desktop',
      'A custom sync is the third route. We build one when your rules do not fit an app: several warehouses, price levels by customer, kits, or units that differ between the two systems',
      "The Desktop Connector's 14,500-row limit is written for Pro and Premier. Shopify's guide does not name Enterprise in it",
    ],
    note: 'With a once-a-day sync, the stock count on your store can be up to a day old. For fast-moving items, plan for that before you choose a route.',
    sources: ['helpDesktopOverview', 'helpDesktopIntegration', 'webgility', 'intuitStopSell'],
    span: 'lg:col-span-12',
  },
];

/* ── Connectors a US search for this term surfaces. Each line restates the
   maker's own page as listed on 2026-10-08. Nothing here was tested by us. ── */
const CONNECTORS: ReadonlyArray<{
  name: string;
  maker: string;
  versions: string;
  says: string;
  sources: ReadonlyArray<SrcKey>;
  span: string;
}> = [
  {
    name: 'QuickBooks Online app',
    maker: 'Intuit',
    versions: 'QuickBooks Online',
    says: 'Imports Shopify sales, refunds, fees, taxes and payouts into QuickBooks. Its help article describes one thing going back to Shopify: a wholesale invoice marked paid.',
    sources: ['appQbo', 'intuitConnect'],
    span: 'lg:col-span-7',
  },
  {
    name: 'QuickBooks Desktop Connector',
    maker: 'LINK',
    versions: 'QuickBooks Desktop, including Enterprise',
    says: 'Syncs Shopify POS data, and B2B data on Shopify Plus, to QuickBooks Desktop. Once a day.',
    sources: ['appDesktop', 'helpDesktopIntegration'],
    span: 'lg:col-span-5',
  },
  {
    name: 'MyWorks',
    maker: 'MyWorks Software',
    versions: 'QuickBooks Online',
    says: 'Its support page lists stock levels and product prices syncing from QuickBooks Online to Shopify, and orders syncing from Shopify to QuickBooks.',
    sources: ['myworks'],
    span: 'lg:col-span-5',
  },
  {
    name: 'Webgility',
    maker: 'Webgility',
    versions: 'QuickBooks Online or Desktop',
    says: 'Says inventory updates run across Shopify and QuickBooks with every sale, return or manual adjustment, and that orders can post as often as every 15 minutes.',
    sources: ['webgility'],
    span: 'lg:col-span-7',
  },
  {
    name: 'A2X',
    maker: 'A2X',
    versions: 'QuickBooks Online',
    says: 'Posts a summary of sales, fees and taxes for each Shopify payout. Its page does not mention sending stock or prices to Shopify.',
    sources: ['a2x'],
    span: 'lg:col-span-12',
  },
];

/* ── Where these integrations break. Seven come from the linked pages. The
   second is a rule of ours and carries no source. ── */
const BREAKS: ReadonlyArray<{ t: string; b: string; sources: ReadonlyArray<SrcKey> }> = [
  {
    t: 'SKUs that do not match',
    b: "Intuit's connector matches products by SKU and name. A SKU typed one way in QuickBooks and another way in Shopify becomes two items.",
    sources: ['intuitConnect'],
  },
  {
    t: 'Two systems editing the same number',
    b: 'If staff change a price in Shopify and in QuickBooks, the next sync overwrites one of them. Each field needs one master.',
    sources: [],
  },
  {
    t: 'A QuickBooks Online plan without stock tracking',
    b: 'Intuit lists stock tracking for QuickBooks Online Plus and Advanced.',
    sources: ['intuitInventory'],
  },
  {
    t: 'Payouts that do not equal any order',
    b: 'A Shopify payout usually covers a day of sales, with fees and refunds already taken out. The books need the detail behind the deposit.',
    sources: ['intuitConnect'],
  },
  {
    t: 'A sync that runs once a day',
    b: 'The Desktop Connector moved from every 5 minutes to once a day on November 7, 2023. Stock sold through QuickBooks in the morning may not reach the store until the next sync.',
    sources: ['helpDesktopIntegration'],
  },
  {
    t: 'History that stops at one year',
    b: "Intuit's connector imports transactions from up to one year ago. Older sales need another route.",
    sources: ['intuitConnect'],
  },
  {
    t: 'A Desktop setup you get one go at',
    b: "Shopify's guide says the Desktop integration can be completed only one time, and that the sync mode cannot be changed later.",
    sources: ['helpDesktopIntegration'],
  },
  {
    t: 'More than 14,500 rows on Desktop Pro or Premier',
    b: 'Above that, Shopify says you must use summary mode, which sends totals to QuickBooks in place of full detail.',
    sources: ['helpDesktopIntegration'],
  },
];

/* ── Who this is for. Examples of the kinds of business the work suits, not a
   client list. Pictures were generated on 2026-10-08 and checked at full size. ── */
const INDUSTRIES: ReadonlyArray<{ img: string; alt: string; t: string; b: string }> = [
  {
    img: `${IMG}/distributor-warehouse.webp`,
    alt: 'A woman in a navy work shirt points a handheld scanner at plain cardboard boxes on a warehouse shelf',
    t: 'Wholesale distributors',
    b: 'Thousands of SKUs, price levels by customer, and orders that arrive by phone as well as through the website.',
  },
  {
    img: `${IMG}/parts-room.webp`,
    alt: 'A man in a grey apron counts metal brackets into a tray at a workbench, with a laptop open beside him',
    t: 'Manufacturers and parts makers',
    b: 'Stock that is built as well as bought. The store has to show what can ship today.',
  },
  {
    img: `${IMG}/clothing-stock-room.webp`,
    alt: 'A woman in a cream sweater checks folded shirts on a stock room shelf while holding a tablet',
    t: 'Retail shops with a website',
    b: 'One stock room behind a counter and an online store. A sale in either place has to lower the same count.',
  },
  {
    img: `${IMG}/food-packing-room.webp`,
    alt: 'A man in a white apron seals a plain brown pouch on a steel table beside a row of pouches and a kitchen scale',
    t: 'Food, drink and consumer brands',
    b: 'Batches, bundles and repeat orders. The books need fees, refunds and tax split out from each deposit.',
  },
];

/* ── Process. Six steps, in the order we work. ── */
const PROCESS: ReadonlyArray<{ n: string; t: string; b: string }> = [
  {
    n: '01',
    t: 'List what lives where',
    b: 'We write down every field the two systems share: items, SKUs, stock, prices, customers, tax. Beside each goes the system that holds it today and who edits it.',
  },
  {
    n: '02',
    t: 'Agree the master for each field',
    b: 'One line per field, in writing. Your team signs this page before anything is built.',
  },
  {
    n: '03',
    t: 'Clean the item list first',
    b: 'SKUs are matched and duplicates merged before the systems are joined. A sync copies mistakes as fast as it copies good data.',
  },
  {
    n: '04',
    t: 'Pick the lightest route that works',
    b: "Intuit's own connector beats a paid app. A paid app beats a custom build. We quote custom work only when the first two cannot follow your rules.",
  },
  {
    n: '05',
    t: 'Test with sample orders',
    b: 'A sale, a refund, a discount, a tax-exempt order and a wholesale invoice go through a test store first. You see the entries they create before any live order is touched.',
  },
  {
    n: '06',
    t: 'Go live, compare totals, stay on',
    b: 'In the first weeks we compare Shopify payout totals with what landed in QuickBooks. The same team stays on for support after launch.',
  },
];

/* ── Comparison: custom sync vs two-way connector app vs Intuit's connector ── */
const COMPARE_COLUMNS: ReadonlyArray<ComparisonColumn> = [
  { label: 'Custom sync built by FactoryJet', isFactoryJet: true },
  { label: 'A two-way connector app' },
  { label: "Intuit's own connector" },
];

const COMPARE_ROWS: ReadonlyArray<ComparisonRow> = [
  {
    feature: 'QuickBooks versions',
    values: ['Online, Desktop and Enterprise', "Depends on the app. Check the maker's own page", 'QuickBooks Online'],
  },
  {
    feature: 'Which system can lead',
    values: [
      'Whichever you choose, field by field',
      'Set by the app. Some send stock and prices from QuickBooks to Shopify',
      'Shopify. Sales flow into QuickBooks',
    ],
  },
  {
    feature: 'Stock and price updates into Shopify',
    values: ['Yes, on the schedule you set', 'On apps that document it, such as MyWorks', "Not described in Intuit's help article"],
  },
  {
    feature: 'Recurring fees',
    values: ['No app subscription. Build and support quoted in writing', 'Whatever the app charges', 'Free to install. Intuit says charges may apply'],
  },
  {
    feature: 'Who looks after it',
    values: ['We do, under a support plan. You own the code', "The app's maker", 'Intuit'],
  },
  {
    feature: 'Right call when',
    values: [
      'QuickBooks leads and your rules are specific to your business',
      'An app already matches how you work',
      'Shopify is where sales happen and the books only need the totals right',
    ],
  },
];

const RELATED: ReadonlyArray<{ href: string; t: string; b: string }> = [
  { href: '/services/shopify-development', t: 'Shopify development', b: 'Full store builds, with the accounting link planned from day one.' },
  { href: '/b2b-ecommerce', t: 'B2B ecommerce', b: 'Wholesale portals with account pricing.' },
  { href: '/services/shopify-plus-b2b', t: 'Shopify Plus B2B', b: 'Company accounts, price lists and payment terms.' },
  { href: '/services/ecommerce-audit', t: 'Free ecommerce audit', b: 'A written review of your store before you change anything.' },
  { href: '/services/shopify-maintenance-services', t: 'Shopify maintenance and support', b: 'Keeps the store and its connections current.' },
  { href: '/services/ai-integration-services', t: 'AI integration services', b: 'When the next system to connect is an AI agent.' },
];

/** Small inline source links. Same visual pattern as the checkout page. Renders
 *  nothing when a claim is our own and has no source.
 *  py-1 makes each link 24.5px tall (16.5px of text plus 8px), which clears the
 *  24px tap-target check when links wrap onto stacked rows. mt-3 and gap-y-0
 *  keep the first row where it sat before the padding was added. */
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
          className="inline-flex items-center gap-1.5 py-1 font-fj-mono text-[11px] font-semibold tracking-wide text-[#B23E13] hover:underline"
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

export default function ShopifyQuickBooksIntegrationPage() {
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
        <section className="relative overflow-hidden border-b border-fj-neutral-200 bg-fj-cream pt-12 pb-14 md:pt-14 md:pb-16">
          <div className="mx-auto max-w-[1200px] px-6 md:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F05A28]/30 bg-white px-3 py-1.5">
                  <span className="font-fj-mono text-xs font-bold tracking-wide text-[#B23E13]">
                    SHOPIFY QUICKBOOKS INTEGRATION &middot; UNITED STATES
                  </span>
                </div>

                <h1 className="font-fj-display text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-fj-ink sm:text-5xl lg:text-[3.2rem]">
                  Shopify QuickBooks integration that keeps stock, prices and books in step.
                </h1>

                <p className="mt-5 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600">
                  We connect Shopify to QuickBooks Online, Desktop or Enterprise. If QuickBooks holds your stock and
                  prices, we make Shopify follow it, and every sale flows back into your books. You get a fixed quote
                  in writing before work starts.
                </p>

                <div className="mt-6">
                  <HeroInlineForm
                    region="us"
                    source="services_shopify_quickbooks_integration_hero"
                    service="Shopify QuickBooks Integration"
                    submitLabel="Scope my integration"
                  />
                </div>

                <div className="mt-5">
                  <Link
                    href={CALENDLY}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-fj-body text-sm font-semibold text-fj-ink hover:opacity-70"
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
                  <span>Connector facts checked {CHECKED_ON}</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <figure className="rounded-2xl border border-fj-neutral-200 bg-white p-5 sm:p-6">
                  <figcaption className="font-fj-mono text-[11px] font-bold uppercase tracking-wider text-[#B23E13]">
                    Who leads what, when QuickBooks is the master
                  </figcaption>
                  <SyncMapDiagram />
                  <ul className="mt-4 grid gap-2 font-fj-body text-[13px] leading-snug text-fj-ink">
                    <li className="flex items-start gap-2">
                      <span aria-hidden="true" className="mt-[3px] h-3 w-3 flex-shrink-0 rounded-sm border-[1.5px] border-[#F05A28] bg-[#FFF4EE]" />
                      Orange: QuickBooks leads and Shopify follows.
                    </li>
                    <li className="flex items-start gap-2">
                      <span aria-hidden="true" className="mt-[3px] h-3 w-3 flex-shrink-0 rounded-sm border-[1.5px] border-[#14110F] bg-white" />
                      Black outline: Shopify leads and QuickBooks follows.
                    </li>
                  </ul>
                  <p className="mt-3 font-fj-body text-[13px] leading-snug text-fj-neutral-600">
                    This is the map we set up most often. Yours is agreed in writing, field by field, before anything
                    is built.
                  </p>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ANSWER-FIRST BLOCK */}
        <section className="border-b border-fj-neutral-200 bg-white py-12">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <div id="short-answer" className="rounded-2xl border-2 border-[#F05A28]/25 bg-fj-cream p-6 sm:p-8">
              <div className="mb-3 font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">
                Short answer
              </div>
              <p className="font-fj-body text-base leading-relaxed text-fj-ink sm:text-lg">
                Yes, Shopify connects to QuickBooks. For QuickBooks Online, Intuit&rsquo;s own connector is free to
                install and brings Shopify sales, refunds, fees, taxes and payouts into your books. Intuit&rsquo;s help
                article describes data moving one way, from Shopify into QuickBooks, plus the paid status of a
                wholesale invoice going back. If QuickBooks holds your stock counts and prices and Shopify has to
                follow, you need a two-way connector app or a custom sync. QuickBooks Desktop and Enterprise connect
                through a separate desktop connector or a third-party tool (as listed on {CHECKED_ON}).
              </p>
              <SourceLinks ids={['intuitConnect', 'appQbo', 'helpDesktopOverview']} />
            </div>
          </div>
        </section>

        {/* 3. WHO LEADS WHAT */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">The first decision</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Start with one question: which system is in charge?
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  A master is the one copy everyone trusts. When the same number lives in two systems, one of them has
                  to win.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Most connector apps assume Shopify wins. Many businesses that sell stock work the other way round.
                  The item list, the stock counts and the prices are kept in QuickBooks, often by the person who does
                  the buying, and the store has to follow.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink">
                  In the integrations we set up, QuickBooks is most often the master for items, stock and prices, and
                  Shopify is the master for sales.
                </p>
                <SourceLinks ids={['intuitConnect']} />
              </div>

              <ul className="grid gap-3 lg:col-span-8">
                {LEADS.map((l) => (
                  <li
                    key={l.data}
                    className={`grid grid-cols-1 gap-2 rounded-2xl border bg-white px-5 py-4 sm:grid-cols-[190px_1fr] sm:gap-5 ${
                      l.lead === 'quickbooks' ? 'border-[#F05A28]/45' : 'border-fj-neutral-200'
                    }`}
                  >
                    <div>
                      <div className="font-fj-display text-base font-semibold text-fj-ink">{l.data}</div>
                      <div
                        className={`mt-1 font-fj-mono text-[11px] font-bold uppercase tracking-wider ${
                          l.lead === 'quickbooks' ? 'text-[#B23E13]' : 'text-fj-neutral-600'
                        }`}
                      >
                        {LEAD_LABEL[l.lead]}
                      </div>
                    </div>
                    <p className="font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{l.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 4. BY QUICKBOOKS VERSION */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Your version decides the route</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Shopify with QuickBooks Online, Desktop and Enterprise.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              QuickBooks comes in two families. QuickBooks Online runs in a web browser. QuickBooks Desktop, which
              includes Enterprise, is installed on a computer. They connect to Shopify in different ways, so the first
              thing we ask is which one you use. If the store itself is still to be built, see{' '}
              <Link href="/services/shopify-development" className="font-semibold text-fj-ink underline underline-offset-4">
                Shopify development
              </Link>
              .
            </p>

            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
              {VERSIONS.map((v) => (
                <div key={v.n} className={`rounded-2xl border border-fj-neutral-200 bg-fj-cream p-7 ${v.span}`}>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white font-fj-mono text-sm font-bold text-[#B23E13]">
                    {v.n}
                  </div>
                  <h3 className="font-fj-display text-xl font-semibold text-fj-ink">{v.title}</h3>
                  <p className="mt-2 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{v.body}</p>
                  <ul className="mt-4 grid gap-2">
                    {v.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5 font-fj-body text-[15px] leading-relaxed text-fj-ink">
                        <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 rounded-xl border border-fj-neutral-200 bg-white px-4 py-3 font-fj-body text-sm leading-relaxed text-fj-ink">
                    <span className="font-semibold">Worth knowing.</span> {v.note}
                  </p>
                  <SourceLinks ids={v.sources} />
                </div>
              ))}
            </div>
            <p className="mt-6 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
              Ratings, prices and dates are as listed on {CHECKED_ON}.
            </p>
          </div>
        </section>

        {/* 5. CONNECTORS */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">The apps</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Five Shopify QuickBooks connectors, in their makers&rsquo; own words.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              These are names a US search for Shopify QuickBooks integration brings up. Each line restates what the
              maker&rsquo;s own page says, as listed on {CHECKED_ON}. We did not test these apps for this page. Read
              each one for a single thing: which way stock and prices move.
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12">
              {CONNECTORS.map((c) => (
                <li key={c.name} className={`rounded-2xl border border-fj-neutral-200 bg-white p-6 ${c.span}`}>
                  <div className="font-fj-display text-lg font-semibold text-fj-ink">{c.name}</div>
                  <div className="mt-1 font-fj-mono text-[11px] font-bold uppercase tracking-wider text-fj-neutral-600">
                    Made by {c.maker} &middot; {c.versions}
                  </div>
                  <p className="mt-3 font-fj-body text-[15px] leading-relaxed text-fj-ink">{c.says}</p>
                  <SourceLinks ids={c.sources} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 6. WHERE IT BREAKS */}
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">The traps</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Eight places a Shopify and QuickBooks integration breaks.
            </h2>
            <p className="mt-4 max-w-2xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Knowing these early saves a rebuild. Seven come straight from the linked pages. The second is a rule of
              our own.
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
              {BREAKS.map((l) => (
                <li key={l.t} className="rounded-xl border border-fj-neutral-200 border-l-[3px] border-l-[#F05A28] bg-fj-cream px-5 py-4">
                  <div className="font-fj-display text-[15px] font-semibold text-fj-ink">{l.t}</div>
                  <p className="mt-1 font-fj-body text-sm leading-relaxed text-fj-neutral-600">{l.b}</p>
                  <SourceLinks ids={l.sources} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <MidPageCTA
          headline="Tell us what lives in QuickBooks. We will tell you the route."
          sub="Send your QuickBooks version and what Shopify has to follow. We reply with the lightest way to connect them, and a fixed quote if there is work for us."
          label="Scope my integration"
        />

        {/* 7. WHO THIS IS FOR */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Who this is for</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Built for any business that sells stock.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Your trade changes the details. The job stays the same: one list of products, sold in more than one
                  place, counted in one set of books.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  If you sell to other businesses, our{' '}
                  <Link href="/b2b-ecommerce" className="font-semibold text-fj-ink underline underline-offset-4">
                    B2B ecommerce
                  </Link>{' '}
                  page covers account pricing and reordering.
                </p>
              </div>

              <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-8">
                {INDUSTRIES.map((ind) => (
                  <li key={ind.t} className="overflow-hidden rounded-2xl border border-fj-neutral-200 bg-fj-cream">
                    <img
                      src={ind.img}
                      alt={ind.alt}
                      width={1200}
                      height={800}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[3/2] w-full object-cover"
                    />
                    <div className="p-5">
                      <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{ind.t}</h3>
                      <p className="mt-1.5 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{ind.b}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 8. PROCESS */}
        <section className="bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Process</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  How we plan, build and test the connection.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Your bookkeeper or accountant decides how entries should post. We make the two systems do it. Before
                  a contract, we show working software on your own data. After launch,{' '}
                  <Link
                    href="/services/shopify-maintenance-services"
                    className="font-semibold text-fj-ink underline underline-offset-4"
                  >
                    Shopify maintenance and support
                  </Link>{' '}
                  keeps it current.
                </p>
                <img
                  src={`${IMG}/bookkeeper-and-owner.webp`}
                  alt="Two people at a desk look at a monitor showing two columns of grey bars joined by orange lines"
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="mt-6 aspect-[3/2] w-full rounded-2xl border border-fj-neutral-200 object-cover"
                />
              </div>
              <ol className="grid gap-4 lg:col-span-8">
                {PROCESS.map((p) => (
                  <li key={p.n} className="flex items-start gap-4 rounded-2xl border border-fj-neutral-200 bg-white p-6">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-fj-cream font-fj-mono text-sm font-bold text-[#B23E13]">
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

        {/* 9. COMPARISON: custom sync vs two-way app vs Intuit's connector */}
        <ComparisonTable
          eyebrow="How the routes compare"
          headline="Intuit's connector, a two-way app, or a custom sync."
          lead="Intuit's own connector is often the right answer, and we will say so on the scoping call. A custom sync earns its cost when QuickBooks has to lead and your rules do not fit an app."
          columns={COMPARE_COLUMNS}
          rows={COMPARE_ROWS}
          footer={`Connector facts are from each maker's own pages as listed on ${CHECKED_ON}.`}
          scrollRegionLabel="Comparison of ways to connect Shopify and QuickBooks"
        />

        {/* 10. RELATED SERVICES */}
        <section className="border-y border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Next to this page</p>
            <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Related ecommerce services.
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

        {/* 11. SOURCES + REVIEW LINE */}
        <section className="bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">Method</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
                  Sources, checked on {CHECKED_ON}.
                </h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Every connector fact, rating, price and date on this page was read from the pages listed here on that
                  day. App ratings and prices move, so check the linked page before you act on one.
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
                      className="font-fj-body text-sm leading-snug text-fj-ink underline decoration-fj-neutral-200 underline-offset-4 hover:decoration-[#F05A28]"
                    >
                      {SRC[k].label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 12. FAQ */}
        <FAQ
          eyebrow="Shopify QuickBooks integration FAQ"
          headline="Shopify and QuickBooks questions, answered plainly."
          lead={`What owners and bookkeepers ask before connecting the two. Connector answers are from the makers' own pages as listed on ${CHECKED_ON}.`}
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-white"
        />

        {/* 13. FINAL CTA */}
        <FinalCTA
          variant="light"
          eyebrow="Shopify QuickBooks integration"
          headline="One list of products. One set of books."
          sub="Tell us your QuickBooks version and what the store has to follow. We agree the master for each field, test with sample orders and stay on after launch."
          primaryCta={{ label: 'Scope my integration', modal: true, region: 'us' }}
          secondaryCta={{ label: 'Talk to the founder', href: '/contact' }}
          objectionHandler="Registered Shopify Partner. Fixed quote in writing before work starts. You own the code."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}

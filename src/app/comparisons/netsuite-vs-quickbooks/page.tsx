import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { platformStyles } from './platform-styles';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const PHOTO_DIR = '/images/us/netsuite-vs-quickbooks';
const PHOTO_SIZES = '(min-width: 1180px) 434px, (min-width: 960px) calc(38vw - 16px), (min-width: 700px) 660px, calc(100vw - 40px)';
const PAGE_URL = 'https://factoryjet.com/comparisons/netsuite-vs-quickbooks';
const PAGE_PUBLISHED = '2026-10-29';
const PAGE_MODIFIED = '2026-10-31';
const PAGE_TITLE = 'NetSuite vs QuickBooks: When to Switch (2026)';
const PAGE_DESCRIPTION =
  'NetSuite vs QuickBooks Online and Enterprise: user limits, inventory, multi-entity, Shopify sync and 7 signs you have outgrown QuickBooks. Checked Oct 2026.';

/* Official sources, each fetched and read on 2026-10-29.
   NetSuite's own pricing and OneWorld product pages returned HTTP 403 to our fetch that day,
   so no NetSuite price appears on this page. Oracle's help center pages loaded and are cited. */
const SRC = {
  qboPricing: 'https://quickbooks.intuit.com/pricing/',
  qboInventory:
    'https://quickbooks.intuit.com/learn-support/en-us/help-article/accounting-bookkeeping/add-inventory-products-quickbooks-online/L6eIyKNFi_US_en_US',
  qboCompanies:
    'https://quickbooks.intuit.com/learn-support/en-us/help-article/account-management/create-add-another-company-file-quickbooks-online/L1WEnRQs1_US_en_US',
  qbEnterprise: 'https://quickbooks.intuit.com/desktop/enterprise/pricing/',
  qbStopSell: 'https://quickbooks.intuit.com/r/whats-new/quickbooks-desktop-stop-sell/',
  qboShopify:
    'https://quickbooks.intuit.com/learn-support/en-us/help-article/manage-integrations/connect-shopify-quickbooks-online/L1Xv7ZCFB_US_en_US',
  nsSubsidiaries: 'https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N268563.html',
  nsConsolidated: 'https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N278654.html',
  nsShopify: 'https://apps.shopify.com/oracle-netsuite',
  xeroPricing: 'https://www.xero.com/us/pricing-plans/',
  bcPricing: 'https://www.microsoft.com/en-us/dynamics-365/products/business-central/pricing',
  acumaticaPricing: 'https://www.acumatica.com/pricing/',
  odooPricing: 'https://www.odoo.com/pricing',
  erpnext: 'https://frappe.io/erpnext',
} as const;

/* One trail, used by both the visible breadcrumb and BreadcrumbList schema. */
const CRUMBS = [
  { name: 'Home', href: 'https://factoryjet.com' },
  { name: 'Ecommerce ERP Integration', href: 'https://factoryjet.com/services/ecommerce-erp-integration' },
  { name: 'NetSuite vs QuickBooks', href: PAGE_URL },
] as const;

const LINK = { color: 'var(--pp-orange-dark)', textDecoration: 'underline' } as const;
const INLINK = { color: 'var(--pp-orange-dark)', fontWeight: 600, textDecoration: 'underline' } as const;

function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={LINK}>
      {children}
    </a>
  );
}

function SectionPhoto({ name, alt }: { name: string; alt: string }) {
  const base = `${PHOTO_DIR}/${name}`;
  const avif = `${base}-640.avif 640w, ${base}-960.avif 960w, ${base}-1280.avif 1280w`;
  const webp = `${base}-640.webp 640w, ${base}-960.webp 960w, ${base}-1280.webp 1280w`;

  return (
    <picture className="nqb-photo">
      <source type="image/avif" srcSet={avif} sizes={PHOTO_SIZES} />
      <source type="image/webp" srcSet={webp} sizes={PHOTO_SIZES} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${base}-960.webp`}
        srcSet={webp}
        sizes={PHOTO_SIZES}
        alt={alt}
        width={960}
        height={640}
        decoding="async"
        loading="lazy"
      />
    </picture>
  );
}

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    type: 'article',
    siteName: 'FactoryJet',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'NetSuite vs QuickBooks comparison' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* ─────────────────────────────────────────────
   FAQ DATA
   Questions come from Google People Also Ask for "netsuite vs quickbooks",
   "when to switch from quickbooks to netsuite" and "quickbooks enterprise vs netsuite"
   (DataForSEO, US, 29 Oct 2026), plus the store-sync questions buyers ask us.
───────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'fit', label: 'Which One Fits' },
  { key: 'cost', label: 'Cost' },
  { key: 'switch', label: 'Switching' },
  { key: 'sync', label: 'Store Sync' },
];

const FAQ_ITEMS = [
  // Which One Fits
  {
    category: 'fit',
    question: 'What is the difference between QuickBooks and Oracle NetSuite?',
    answer:
      'QuickBooks is accounting software: books, invoices, bills, bank feeds and, on the higher plans, basic inventory. NetSuite is an ERP (one system that runs accounting, inventory, orders and purchasing together) sold by Oracle. The biggest practical gap is entities. In QuickBooks Online each company needs its own paid subscription. NetSuite OneWorld holds up to 250 subsidiaries in one account and consolidates them.',
  },
  {
    category: 'fit',
    question: 'Is NetSuite easier than QuickBooks?',
    answer:
      'No. QuickBooks is easier to learn and easier to set up yourself. NetSuite has far more screens, roles and settings, and most companies set it up with Oracle or a partner. NetSuite feels easier only once QuickBooks has become the hard part: when month-end means exporting several company files to a spreadsheet, or when stock counts live outside the books.',
  },
  {
    category: 'fit',
    question: 'Is NetSuite better than QuickBooks?',
    answer:
      'Only for a business that has outgrown QuickBooks. For a single company with one bank account, a few users and simple stock, QuickBooks Online does the job at a lower cost and with less setup. NetSuite pays off when you run several legal entities, need consolidated reports in one place, sell through several channels from shared stock, or have more people in the books than a QuickBooks plan allows.',
  },
  {
    category: 'fit',
    question: 'What is the downside to QuickBooks Online?',
    answer:
      'Limits that bite as you grow. Intuit lists 5 users on Plus and 25 on Advanced. Inventory quantity tracking is available only on Plus and Advanced. Each extra company needs its own paid subscription, users must be invited to each one, and list changes in one company do not update the others. A group of three entities runs three sets of books.',
  },
  {
    category: 'fit',
    question: 'What are the downsides of using NetSuite?',
    answer:
      'Cost and dependence on outside help. NetSuite is licensed through Oracle on a quote, not a public price list. Setup runs as a project with milestones. Many changes need an admin or a partner who knows SuiteScript (NetSuite’s scripting language). Oracle’s own help center says some reports do not support consolidation and show one subsidiary at a time, so check the ones you need.',
  },
  {
    category: 'fit',
    question: 'QuickBooks Enterprise vs NetSuite: which fits a distributor?',
    answer:
      'QuickBooks Enterprise is desktop software for up to 30 users on Gold and Platinum, or 40 on Diamond, and Advanced Inventory comes only on Platinum and Diamond. It suits one company with a warehouse and a stable team. NetSuite suits a distributor with several entities, several warehouses across companies, or a wholesale portal and a store that both pull from the same stock.',
  },
  {
    category: 'fit',
    question: 'What are the main NetSuite alternatives?',
    answer:
      'The systems mid-size companies usually shortlist next to NetSuite are Sage Intacct, Microsoft Dynamics 365 Business Central, Acumatica and Odoo. Sage Intacct is strongest on finance. Business Central fits companies already on Microsoft 365. Acumatica and Odoo cover inventory and manufacturing with different licence models. The store side of the project looks much the same whichever one you pick.',
  },
  {
    category: 'fit',
    question: 'Does anyone use QuickBooks anymore?',
    answer:
      'Yes, and most small businesses should stay on it. Intuit still sells QuickBooks Online on five plans and still sells QuickBooks Enterprise. What changed in the US is the older desktop line: Intuit stopped selling new subscriptions to Desktop Pro Plus, Premier Plus and Mac Plus after September 30, 2024. Enterprise was not affected.',
  },

  // Cost
  {
    category: 'cost',
    question: 'How much does NetSuite cost compared with QuickBooks?',
    answer:
      'On 29 October 2026 Intuit’s pricing page listed QuickBooks Online Plus at $140 a month and Advanced at $340 a month, with a three-month half-price offer for new customers. NetSuite does not work that way. Oracle quotes a licence based on modules, users and subsidiaries, so this page shows no NetSuite list price.',
  },
  {
    category: 'cost',
    question: 'Why is QuickBooks so expensive?',
    answer:
      'Usually because the business has spread across several subscriptions. Intuit charges each QuickBooks Online company separately, so three entities means three plans. Add apps for inventory, payroll and store sync, and the monthly total can climb. Before you blame the plan, list every QuickBooks subscription and connected app you pay for. That list is also the first input for a NetSuite comparison.',
  },
  {
    category: 'cost',
    question: 'What does a move from QuickBooks to NetSuite cost?',
    answer:
      'It has three parts: the NetSuite licence (quoted by Oracle), the NetSuite setup (quoted by Oracle or a partner), and the re-wiring of everything that talked to QuickBooks, such as your store, payroll and expense apps. We found no published market range for this move that we could verify, so we price the integration part from your field list, at a fixed price for each phase.',
  },
  {
    category: 'cost',
    question: 'What drives the cost of re-connecting my store to NetSuite?',
    answer:
      'Four things. How many channels post orders (one Shopify store, or Shopify plus wholesale plus Amazon). How many entities and warehouses the orders must route to. Whether you post every order or a daily summary. And how much custom logic sits in your current QuickBooks app, such as tax mapping or bundle rules. A field list answers all four before anyone quotes.',
  },

  // Switching
  {
    category: 'switch',
    question: 'When should a company switch from QuickBooks to NetSuite?',
    answer:
      'When the work around QuickBooks costs more than the software. Typical triggers: a second or third legal entity, month-end consolidation done in spreadsheets, stock counted in a separate app, more staff than your plan’s user limit, or a wholesale channel that needs its own price lists. If two or more of the seven signs on this page apply, start scoping.',
  },
  {
    category: 'switch',
    question: 'Why are people leaving QuickBooks?',
    answer:
      'Growth, mostly. The common reasons are multiple entities that each need their own QuickBooks subscription, inventory that outgrew Plus or Advanced, and user caps of 5 or 25 on QuickBooks Online. Some desktop users also moved after Intuit stopped selling new Pro Plus, Premier Plus and Mac Plus subscriptions in the US after September 30, 2024.',
  },
  {
    category: 'switch',
    question: 'Is QuickBooks Enterprise going away?',
    answer:
      'No end date is announced on the Intuit pages we read on 29 October 2026. When Intuit stopped selling new US Desktop Pro Plus, Premier Plus and Mac Plus subscriptions after September 30, 2024, it said Enterprise was not affected. Gold, Platinum and Diamond were still on sale that day. So base the move on your entities, users and stock, not on a shutdown date.',
  },
  {
    category: 'switch',
    question: 'What will replace QuickBooks Enterprise?',
    answer:
      'For companies staying with Intuit, Intuit’s pricing page now describes Intuit Enterprise Suite as built for multi-entity organizations. Companies leaving Intuit usually move to NetSuite, Sage Intacct, Business Central or Acumatica. Whichever you pick, the store, payroll and expense connections built for QuickBooks have to be rebuilt for the new system, so budget for that work.',
  },
  {
    category: 'switch',
    question: 'Can we move our QuickBooks history into NetSuite?',
    answer:
      'Yes, but most companies do not move every transaction. The usual pattern is opening balances on the go-live date, open invoices and bills, and the customer, vendor and item lists, with one or two years of summary history for reports. Full transaction history stays in QuickBooks, kept read-only for audits. Decide the cut-off date before anyone builds a sync.',
  },
  {
    category: 'switch',
    question: 'How long does a QuickBooks to NetSuite migration take?',
    answer:
      'It depends on your entity count, channels and how much history you move, so we give no stock figure. Plan four stages: a field list, the NetSuite setup, the rebuilt store and app syncs, and one closed month with both systems running side by side. That last stage alone takes a full month, because finance has to close it in both.',
  },
  {
    category: 'switch',
    question: 'Is there a step between QuickBooks Online Plus and NetSuite?',
    answer:
      'Yes. QuickBooks Online Advanced gives 25 users and unlimited classes and locations, which lets one company track divisions or stores separately. That buys time for a single entity. It does not merge separate legal entities, because each QuickBooks company is still its own subscription. If you have several entities, Advanced delays the problem rather than solving it.',
  },

  // Store Sync
  {
    category: 'sync',
    question: 'What happens to my Shopify QuickBooks sync when we move to NetSuite?',
    answer:
      'It stops being useful on go-live day, because it writes to QuickBooks. The replacement has to post the same orders, refunds, fees and payouts into NetSuite, map each one to the right subsidiary, and keep stock flowing back to the store. Run both in parallel for one closed month so finance can compare totals line by line before QuickBooks goes read-only.',
  },
  {
    category: 'sync',
    question: 'Is there a NetSuite Shopify connector?',
    answer:
      'Yes. Oracle NetSuite publishes the NetSuite ERP Connector on the Shopify App Store, and its listing says it syncs product, pricing, inventory, sales order and fulfillment data, with order, coupon and gift certificate sync in the plan features. It is a monthly subscription billed through Shopify. Custom sync is needed when your rules go past what the connector maps.',
  },
  {
    category: 'sync',
    question: 'Can WooCommerce connect to NetSuite like Shopify does?',
    answer:
      'Yes. WooCommerce exposes orders, products and stock through its REST API and webhooks, and NetSuite accepts records through SuiteTalk web services (NetSuite’s API for other systems). The link can run through middleware (a connector service that sits between the two systems) such as Celigo, or through a custom service. The design choices match Shopify: which system owns price and stock, which subsidiary each order belongs to, and how refunds post.',
  },
  {
    category: 'sync',
    question: 'Should store orders post to the ERP one by one or as a daily summary?',
    answer:
      'Post one by one if you need order-level margin, customer history or returns traced to the original sale. Post a daily summary if order volume is high and finance only needs totals by channel. Intuit’s own Shopify connector posts each sale and refund, then groups them into a payout deposit. Pick the pattern before the build starts, because it shapes every mapping.',
  },
];

/* ─────────────────────────────────────────────
   SCHEMAS
───────────────────────────────────────────── */
const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  url: PAGE_URL,
  datePublished: PAGE_PUBLISHED,
  dateModified: PAGE_MODIFIED,
  inLanguage: 'en-US',
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    jobTitle: 'Founder & Principal Commerce Architect',
    url: 'https://factoryjet.com/about',
    sameAs: ['https://www.linkedin.com/in/bhavesh-ai-gtm-expert'],
  },
  publisher: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  about: [
    { '@type': 'SoftwareApplication', name: 'Oracle NetSuite', applicationCategory: 'BusinessApplication' },
    { '@type': 'SoftwareApplication', name: 'QuickBooks', applicationCategory: 'BusinessApplication' },
  ],
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: CRUMBS.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.href })),
};

const STATS = [
  { b: '1 vs 250', s: 'companies per QuickBooks Online subscription vs NetSuite OneWorld subsidiaries' },
  { b: '5 / 25', s: 'users on QuickBooks Online Plus / Advanced' },
  { b: 'Demo first', s: 'on your own data, before you sign' },
  { b: 'Fixed price', s: 'per phase, agreed in writing' },
];

const SOURCED = [
  {
    v: '1 company',
    d: 'per paid QuickBooks Online subscription. Users are invited to each company separately, and list changes in one company do not update the others.',
    src: 'Intuit help: add another company, checked 29 Oct 2026',
    href: SRC.qboCompanies,
  },
  {
    v: '250',
    d: 'subsidiaries allowed in one NetSuite OneWorld account, root included. Elimination subsidiaries, used to balance consolidated financials, do not count toward it.',
    src: 'Oracle NetSuite help: Subsidiaries in OneWorld, checked 29 Oct 2026',
    href: SRC.nsSubsidiaries,
  },
  {
    v: '40 users',
    d: 'the ceiling on QuickBooks Enterprise Diamond. Gold and Platinum stop at 30, and Advanced Inventory comes only on Platinum and Diamond.',
    src: 'Intuit: QuickBooks Desktop Enterprise pricing, checked 29 Oct 2026',
    href: SRC.qbEnterprise,
  },
];

const SIGNS = [
  {
    t: 'You run more than one legal entity.',
    d: 'Each QuickBooks Online company is its own paid subscription with its own users and lists. Two entities means two sets of books, and every shared customer or item is kept in both by hand.',
  },
  {
    t: 'Month-end consolidation happens in a spreadsheet.',
    d: 'If someone exports a trial balance (a list of every account’s balance) from each company file and adds them up in Excel, that is the job NetSuite OneWorld does in its reports, translating each subsidiary into the parent’s currency.',
  },
  {
    t: 'Stock lives in a separate app.',
    d: 'QuickBooks Online tracks quantity only on Plus and Advanced. If your real stock count sits in an inventory app or a warehouse sheet, the books and the shelves disagree every month.',
  },
  {
    t: 'You hit the user limit.',
    d: 'Plus allows 5 users and Advanced 25. Teams start sharing logins to stay under the cap, which wrecks the audit trail of who changed what.',
  },
  {
    t: 'Wholesale needs its own prices and terms.',
    d: 'Trade customers want price lists, credit limits and net terms, while the store sells at retail. Keeping both straight in QuickBooks usually means a second app and manual invoices.',
  },
  {
    t: 'Several channels draw on the same stock.',
    d: 'A Shopify store, a wholesale portal and a marketplace all sell from one warehouse. Without one system that owns stock, each channel oversells in turn.',
  },
  {
    t: 'Finance waits on the store sync to close.',
    d: 'If the close slips because store payouts, fees and refunds need fixing in QuickBooks first, the sync is carrying a load the accounting tool was never built for.',
  },
];

const TERMS = [
  { t: 'You own the code', d: 'The integration code and the repository are yours from day one.' },
  { t: 'Accounts at cost', d: 'Hosting and any AI usage can run in your own accounts, billed at cost, with no markup from us.' },
  { t: 'Defect cover in the build price', d: 'Defects found after launch are fixed inside the build price, for a cover period agreed before work starts.' },
  { t: 'No monthly minimum', d: 'Support after launch is optional. Each change is quoted and approved before we do it.' },
  { t: 'Each phase signed on its own', d: 'Every phase is scoped, priced and signed separately, so you can stop after any one of them.' },
];

// Page-scoped styles are included in the static HTML without a stylesheet request.
const COMPARISON_STYLES = `
.nqb-page :is(h1, h2, h3) {
  text-wrap: balance;
}
.nqb-page :is(.pp-lead, .pp-editorial p, .nqb-steps li, .nqb-cards p) {
  text-wrap: pretty;
}
.nqb-page .nqb-hero-wrap {
  padding-block: clamp(34px, 6vh, 80px);
}
.nqb-page .nqb-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  align-items: start;
  gap: clamp(30px, 5vw, 56px);
}
.nqb-page .nqb-hero h1 {
  margin: 14px 0 12px;
  max-inline-size: 590px;
  font-size: clamp(31px, 5vw, 54px);
}
.nqb-page .nqb-crumbs {
  margin-bottom: 8px;
  font: 12px/18px var(--pp-mono);
  color: var(--pp-muted);
}
.nqb-page .nqb-crumbs ol {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 6px;
}
.nqb-page .nqb-crumbs li {
  white-space: nowrap;
}
.nqb-page .nqb-crumbs a {
  display: inline-flex;
  align-items: center;
  min-inline-size: 44px;
  min-block-size: 44px;
}
.nqb-page .pp-eyebrow {
  line-height: 18px;
  letter-spacing: .09em;
}
.nqb-page .nqb-hero-lead {
  max-inline-size: 580px;
  min-block-size: 5lh;
}
.nqb-page [data-hero-inline-form] {
  container: nqb-form / inline-size;
}
.nqb-page [data-hero-inline-form] :is(input[autocomplete="name"], input[autocomplete="email"], button[type="submit"]) {
  font-size: 16px;
}
.nqb-page :is(a, button, input, summary, [tabindex="0"]):focus-visible {
  outline: 2px solid var(--pp-orange-dark);
  outline-offset: 3px;
}
.nqb-page :is(a, button, input, summary, [tabindex="0"], #final-cta) {
  scroll-margin-block: 112px 86px;
}
.nqb-page .nqb-hero-card {
  border: 1px solid var(--pp-line);
  border-radius: 20px;
  background: #fff;
  padding: clamp(16px, 2.2vw, 26px);
  box-shadow: 0 18px 50px -24px rgba(20, 17, 15, .2);
}
.nqb-page .nqb-hero-card-header {
  border-bottom: 1px solid var(--pp-line);
  padding-bottom: 14px;
  font: 800 20px/1.25 var(--pp-display);
}
.nqb-page .nqb-hero-card-header small,
.nqb-page .nqb-hero-card-footer {
  color: var(--pp-muted);
  font: 12px/1.5 var(--pp-mono);
}
.nqb-page .nqb-hero-card-header small {
  display: block;
  margin-top: 4px;
  color: var(--pp-orange-dark);
}
.nqb-page .nqb-hero-card-columns {
  display: grid;
  grid-template-columns: minmax(0, 1.12fr) minmax(0, 1fr);
  gap: 14px;
  margin-block: 16px;
}
.nqb-page .nqb-hero-card-columns > div {
  border: 1px solid var(--pp-line);
  border-radius: 12px;
  background: #FAF8F5;
  padding: 14px;
}
.nqb-page .nqb-hero-card-columns ul {
  display: grid;
  gap: 8px;
  margin-top: 8px;
  color: var(--pp-body);
  line-height: 1.45;
}
.nqb-page .nqb-hero-card-footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 6px 12px;
  border-top: 1px solid var(--pp-line);
  padding-top: 12px;
}
.nqb-page :is(.pp-mlabel, .pp-stat span, .founder span, .pp-proof .top span) {
  font-size: 12px;
}
.nqb-page .nqb-table {
  margin-top: 14px;
  overflow-x: auto;
  border: 1px solid var(--pp-line);
  border-radius: 14px;
}
.nqb-page .nqb-table .pp-table {
  font-size: 16px;
  line-height: 1.55;
}
.nqb-page .nqb-table .pp-table :is(th, td) {
  padding-inline: 12px;
}
.nqb-page .nqb-table .pp-table thead th {
  font-size: 12px;
}
.nqb-page .nqb-table .pp-table tbody th {
  border-bottom: 1px solid var(--pp-line);
  padding-block: 16px;
  background: #fff;
  color: var(--pp-ink);
  font: 700 16px/1.55 var(--pp-display);
  letter-spacing: normal;
  text-transform: none;
  vertical-align: top;
}
.nqb-page .nqb-table .pp-table .me th {
  background: var(--pp-tint);
}
.nqb-page .nqb-feature {
  display: grid;
  gap: clamp(24px, 5vw, 56px);
  margin-top: clamp(22px, 4vw, 38px);
}
.nqb-page .nqb-photo {
  display: block;
  inline-size: min(100%, 660px);
  align-self: start;
  overflow: hidden;
  border-radius: clamp(16px, 2vw, 24px);
  box-shadow: 0 0 0 1px var(--pp-line), 0 16px 34px -18px rgba(20, 17, 15, .28);
}
.nqb-page .nqb-photo img {
  display: block;
  inline-size: 100%;
  block-size: auto;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: top;
}
.nqb-page :is(.pp-editorial, .nqb-steps) {
  max-inline-size: 70ch;
  font-size: 16px;
  line-height: 1.65;
  color: var(--pp-body);
}
.nqb-page .pp-editorial > p + p {
  margin-top: 1em;
}
.nqb-page .pp-editorial > h3 + p {
  margin-top: .35em;
}
.nqb-page :is(.nqb-steps > li, .pp-editorial > :is(ol, ul) > li) {
  border-top: 1px solid var(--pp-line);
  padding-block: 12px;
}
.nqb-page :is(.nqb-steps, .pp-editorial) strong {
  color: var(--pp-ink);
}
.nqb-page .nqb-cards {
  display: grid;
  gap: 16px;
  margin-top: clamp(24px, 4vw, 34px);
}
.nqb-page .nqb-cards .pp-card {
  display: flex;
  flex-direction: column;
}
.nqb-page .nqb-cards .pp-card:hover {
  transform: none;
}
.nqb-page .nqb-cards .pp-card p,
.nqb-page .pp-proof blockquote,
.nqb-page .founder b,
.nqb-page .pp-primary {
  font-size: 16px;
}
.nqb-page .nqb-citation,
.nqb-page .pp-proof .rate a {
  display: inline-flex;
  align-items: center;
  min-block-size: 44px;
}
.nqb-page .nqb-citation {
  align-self: flex-start;
  margin-top: auto;
  padding-block: 8px;
  color: var(--pp-muted);
  text-decoration: underline;
  font: 12px/1.5 var(--pp-mono);
}
.nqb-page .pp-faqsec .overflow-x-auto {
  flex-wrap: wrap;
  overflow: visible;
}
.nqb-page .pp-faqsec :is(a, summary) {
  min-block-size: 44px;
  min-inline-size: 44px;
}
.nqb-page .pp-faqsec :is([data-faq-answer], [data-faq-question] > span:first-child) {
  font-size: 16px;
}
.nqb-page .pp-faqsec :is(a > span[aria-hidden], .font-fj-mono) {
  font-size: 12px;
}
.nqb-page .pp-faqsec :is(.text-fj-neutral-300, .text-fj-neutral-400, .text-fj-neutral-500) {
  color: var(--pp-muted);
}
.nqb-page .pp-faqsec [id^="faq-"] {
  scroll-margin-top: 112px;
}
@container nqb-form (max-width: 499px) {
  .nqb-page [data-hero-inline-form] div:has(> input[autocomplete="email"]) {
    flex-direction: column;
  }
  .nqb-page [data-hero-inline-form] :is(input[autocomplete="name"], input[autocomplete="email"]) {
    inline-size: 100%;
    flex: none;
  }
}
@media (min-width: 640px) {
  .nqb-page .nqb-cards {
    grid-template-columns: minmax(0, 1.16fr) minmax(0, 1fr);
  }
  .nqb-page .nqb-cards > li:first-child {
    grid-column: 1 / -1;
  }
}
@media (min-width: 960px) {
  .nqb-page .nqb-feature {
    grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
  }
  .nqb-page .nqb-feature > .nqb-photo {
    position: sticky;
    top: 104px;
    grid-area: 1 / 2;
  }
  .nqb-page .nqb-feature > :is(.pp-editorial, .nqb-steps) {
    grid-area: 1 / 1;
  }
  .nqb-page .nqb-feature-reverse {
    grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
  }
  .nqb-page .nqb-feature-reverse > .nqb-photo {
    grid-column: 1;
  }
  .nqb-page .nqb-feature-reverse > .pp-editorial {
    grid-column: 2;
  }
  .nqb-page .nqb-facts {
    grid-template-columns: minmax(0, 1.38fr) minmax(0, 1.08fr) minmax(0, 1fr);
  }
  .nqb-page .nqb-facts > li:first-child {
    grid-column: auto;
  }
}
@media (min-width: 861px) {
  .nqb-page .nqb-hero-card {
    margin-top: 36px;
  }
  .nqb-page .pp-eyebrow span:first-child {
    display: inline-block;
    min-inline-size: 120px;
  }
}
@media (861px <= width <= 900px) {
  .nqb-page .nqb-crumbs li:last-child {
    flex-basis: 100%;
  }
}
@media (min-width: 1180px) {
  .nqb-page .nqb-hero h1 {
    max-inline-size: 612px;
  }
  .nqb-page .nqb-hero h1 span {
    display: block;
    white-space: nowrap;
  }
  .nqb-page .nqb-hero-card-footer {
    display: grid;
  }
}
@media (max-width: 860px) {
  .nqb-page .nqb-hero {
    grid-template-columns: minmax(0, 1fr);
  }
}
@media (max-width: 480px) {
  .nqb-page .nqb-hero-wrap {
    padding-top: 24px;
  }
  .nqb-page .nqb-crumbs li:last-child {
    flex-basis: 100%;
  }
  .nqb-page .pp-eyebrow span {
    display: block;
  }
  .nqb-page .nqb-hero-lead {
    min-block-size: 6lh;
  }
  .nqb-page .nqb-hero-card-columns {
    grid-template-columns: minmax(0, 1fr);
  }
}
@media (390px <= width <= 480px) {
  .nqb-page .nqb-hero h1 {
    font-size: 29px;
  }
  .nqb-page .nqb-hero h1 span {
    display: block;
    white-space: nowrap;
  }
}
@media (max-width: 409px) {
  .nqb-page .nqb-hero-lead {
    min-block-size: 7lh;
  }
}
`;

export default function NetsuiteVsQuickbooksPage() {
  return (
    <>
      <style data-nqb-styles>{platformStyles + COMPARISON_STYLES}</style>
      <script id="ns-qb-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="ns-qb-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="ns-qb-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader navLinks={[]} cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="nqb-page">
        {/* ── Hero ── */}
        <section className="pp-dotgrid">
          <div className="pp-wrap nqb-hero-wrap">
            <div className="pp-herogrid nqb-hero">
              <div>
                <nav aria-label="Breadcrumb" className="nqb-crumbs">
                  <ol>
                    {CRUMBS.map((c, i) => (
                      <li key={c.href}>
                        {i < CRUMBS.length - 1 ? (
                          <>
                            <a href={c.href.replace('https://factoryjet.com', '') || '/'} style={{ color: 'var(--pp-muted)', textDecoration: 'underline' }}>{c.name}</a>
                            <span aria-hidden="true" style={{ marginLeft: '6px' }}>/</span>
                          </>
                        ) : (
                          <span aria-current="page">{c.name}</span>
                        )}
                      </li>
                    ))}
                  </ol>
                </nav>
                <p className="pp-eyebrow"><span>ERP comparison</span><span> · Updated 31 October 2026</span></p>
                <h1>
                  <span>NetSuite vs QuickBooks:</span>{' '}
                  <span>When to Switch and</span>{' '}
                  <span>What It Changes (2026)</span>
                </h1>
                <p className="pp-lead nqb-hero-lead">
                  QuickBooks Online gives you one company per subscription and up to 25 users on Advanced
                  (<Ext href={SRC.qboPricing}>Intuit</Ext>). NetSuite OneWorld runs up to 250 subsidiaries in one account
                  (<Ext href={SRC.nsSubsidiaries}>Oracle</Ext>). This page shows where the line sits, and what a move does to your
                  Shopify or WooCommerce sync.
                </p>
                <HeroInlineForm source="us_netsuite_vs_quickbooks_hero" region="us" submitLabel="Get My Move Scoped" />
              </div>

              {/* Visual comparison graphic */}
              <div className="nqb-hero-card" role="group" aria-labelledby="nqb-hero-comparison">
                <div className="nqb-hero-card-header">
                  <b id="nqb-hero-comparison">Where each one stops</b>
                  <small>
                    QuickBooks (accounting) vs NetSuite (ERP)
                  </small>
                </div>
                <div className="nqb-hero-card-columns">
                  <div>
                    <b>QuickBooks Online</b>
                    <ul>
                      <li>One company per subscription</li>
                      <li>5 users on Plus, 25 on Advanced</li>
                      <li>Stock quantity on Plus and up</li>
                      <li>Set up in days</li>
                    </ul>
                  </div>
                  <div>
                    <b>NetSuite OneWorld</b>
                    <ul>
                      <li>Up to 250 subsidiaries</li>
                      <li>Consolidated reports</li>
                      <li>Orders, stock and books together</li>
                      <li>Set up as a project</li>
                    </ul>
                  </div>
                </div>
                <div className="nqb-hero-card-footer">
                  <div>Store to ERP sync</div>
                  <div>Field map first · Fixed price per phase</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Answer-first block ── */}
        <section className="pp-sec" style={{ paddingTop: '40px', paddingBottom: '24px' }}>
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// the short answer</p>
            <p style={{ marginTop: '10px', fontSize: '19px', lineHeight: 1.55, color: 'var(--pp-ink)' }}>
              In the QuickBooks vs NetSuite choice, stay on QuickBooks while you run one company with simple stock. Move to
              NetSuite when you run several legal entities or sell wholesale and retail from shared stock. QuickBooks bills each
              company separately. NetSuite OneWorld consolidates up to 250 subsidiaries in one account.
            </p>
          </div>
        </section>

        {/* ── Stat Band ── */}
        <section className="pp-sec tint" style={{ paddingTop: '38px', paddingBottom: '38px' }}>
          <div className="pp-wrap">
            <div className="pp-stats">
              {STATS.map((s) => (
                <div className="pp-stat" key={s.b}>
                  <b>{s.b}</b>
                  <span>{s.s}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Comparison table ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// side by side, with sources</p>
            <h2 id="nqb-comparison-table" style={{ marginTop: '10px' }}>NetSuite vs QuickBooks: what each one covers</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              This covers NetSuite vs QuickBooks Online and NetSuite vs QuickBooks Enterprise. Every vendor row comes from
              Intuit or Oracle pages we read on 29 October 2026.
            </p>
            <p className="md:hidden" style={{ marginTop: '20px', fontFamily: 'var(--pp-mono)', fontSize: '12px', color: 'var(--pp-muted)' }}>
              Swipe sideways to see every column.
            </p>
            <div className="nqb-table" role="region" aria-labelledby="nqb-comparison-table" tabIndex={0}>
              <table className="pp-table">
                <thead>
                  <tr>
                    <th scope="col">Item</th>
                    <th scope="col">QuickBooks Online / Enterprise</th>
                    <th scope="col">NetSuite</th>
                    <th scope="col">Source</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="me">
                    <th scope="row">Accounting scope</th>
                    <td>Books, invoices, bills and bank feeds. Classes and locations (tags that split reports by division or store): 40 on Plus, unlimited on Advanced</td>
                    <td>An ERP: accounting, orders, purchasing and inventory in one system</td>
                    <td><Ext href={SRC.qboPricing}>Intuit pricing</Ext>, checked 29 Oct 2026</td>
                  </tr>
                  <tr>
                    <th scope="row">Inventory</th>
                    <td>Online: quantity tracking on Plus and Advanced only. Enterprise: Advanced Inventory on Platinum and Diamond only</td>
                    <td>Inventory is part of the core ERP, shared across subsidiaries</td>
                    <td><Ext href={SRC.qboInventory}>Intuit inventory help</Ext> and <Ext href={SRC.qbEnterprise}>Enterprise pricing</Ext>, checked 29 Oct 2026</td>
                  </tr>
                  <tr className="me">
                    <th scope="row">Multi-entity</th>
                    <td>Each Online company needs its own paid subscription; users and lists are not shared</td>
                    <td>OneWorld: up to 250 subsidiaries, consolidated reports in the parent’s base currency</td>
                    <td><Ext href={SRC.qboCompanies}>Intuit</Ext>, <Ext href={SRC.nsSubsidiaries}>Oracle</Ext> and <Ext href={SRC.nsConsolidated}>Oracle consolidation</Ext>, checked 29 Oct 2026</td>
                  </tr>
                  <tr>
                    <th scope="row">Users</th>
                    <td>Online: 5 on Plus, 25 on Advanced. Enterprise: up to 30 on Gold and Platinum, 40 on Diamond</td>
                    <td>Licensed per user on an Oracle quote</td>
                    <td><Ext href={SRC.qboPricing}>Intuit</Ext> and <Ext href={SRC.qbEnterprise}>Intuit Enterprise</Ext>, checked 29 Oct 2026</td>
                  </tr>
                  <tr className="me">
                    <th scope="row">Ecommerce sync</th>
                    <td>Intuit’s Shopify connector imports each sale and refund, then groups them into a payout deposit</td>
                    <td>Oracle’s NetSuite ERP Connector syncs products, pricing, inventory, sales orders and fulfillments with Shopify</td>
                    <td><Ext href={SRC.qboShopify}>Intuit help</Ext> and <Ext href={SRC.nsShopify}>Shopify App Store</Ext>, checked 29 Oct 2026</td>
                  </tr>
                  <tr>
                    <th scope="row">List price</th>
                    <td>Online Plus $140/mo, Advanced $340/mo (three-month half-price offer for new customers)</td>
                    <td>Quoted by Oracle on modules, users and subsidiaries. No public list price is used here</td>
                    <td><Ext href={SRC.qboPricing}>Intuit pricing</Ext>, checked 29 Oct 2026</td>
                  </tr>
                  <tr className="me">
                    <th scope="row">Implementation effort</th>
                    <td>Self-serve. Many small companies set it up with their bookkeeper</td>
                    <td>A project with Oracle or a partner, plus re-wiring every app that talked to QuickBooks</td>
                    <td>Our scoping experience</td>
                  </tr>
                  <tr>
                    <th scope="row">Who it fits</th>
                    <td>One company, a small finance team, one or two sales channels, simple stock</td>
                    <td>Several entities, shared stock across channels, wholesale terms, a growing finance team</td>
                    <td>Our scoping experience</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── 7 signs ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// the checklist</p>
            <h2 style={{ marginTop: '10px' }}>7 signs you have outgrown QuickBooks</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '64ch' }}>
              One sign is a nuisance. Two or more, and the workarounds cost more each month than a scoping call.
            </p>
            <div className="nqb-feature">
              <SectionPhoto
                name="month-end-controller"
                alt="A person at a desk looks at two monitors with spreadsheet grids beside a stack of folders."
              />
              <ol className="nqb-steps">
                {SIGNS.map((s) => (
                  <li key={s.t}>
                    <strong>{s.t}</strong> {s.d}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ── Sourced figures ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// sourced figures</p>
            <h2 style={{ marginTop: '10px' }}>Three limits that usually decide the move</h2>
            <ul className="nqb-cards nqb-facts">
              {SOURCED.map((s) => (
                <li className="pp-card" key={s.v}>
                  <div style={{ fontFamily: 'var(--pp-display)', fontWeight: 800, fontSize: '36px', color: 'var(--pp-orange-dark)', letterSpacing: '-.03em', lineHeight: 1 }}>{s.v}</div>
                  <p>{s.d}</p>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nqb-citation"
                  >
                    {s.src}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Store sync ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// what happens to the store sync</p>
            <h2 style={{ marginTop: '10px' }}>What moving does to your Shopify or WooCommerce sync</h2>
            <div className="nqb-feature nqb-feature-reverse">
              <SectionPhoto
                name="order-sync-packing-desk"
                alt="A laptop and a printer tray with blank packing slips sit on a desk beside two warehouse sorting lanes."
              />
              <div className="pp-editorial">
                <p>
                  Your store sync today writes to QuickBooks. Intuit’s own Shopify connector, for example, imports each sale as a
                  payment, each refund as its own transaction, and groups them into a payout deposit
                  (<Ext href={SRC.qboShopify}>Intuit help</Ext>). On go-live day that app has nowhere to write. Every order, refund,
                  fee and payout has to land in NetSuite instead, mapped to the right subsidiary.
                </p>
                <h3 style={{ fontFamily: 'var(--pp-display)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>Four decisions to make before anyone builds</h3>
                <ol style={{ margin: '14px 0', paddingLeft: '20px', display: 'grid', gap: '8px' }}>
                  <li><strong>Who owns stock and price.</strong> Usually NetSuite owns both and the store reads them. Write it down per field.</li>
                  <li><strong>Which subsidiary each order belongs to.</strong> By store, by ship-from warehouse, or by customer type. OneWorld needs an answer for every order.</li>
                  <li><strong>Order by order, or a daily summary.</strong> Order-level posting keeps margin and returns traceable. A daily summary keeps volume down.</li>
                  <li><strong>Connector or custom.</strong> Oracle’s NetSuite ERP Connector covers products, pricing, inventory, sales orders and fulfillments (<Ext href={SRC.nsShopify}>Shopify App Store</Ext>). Bundles, wholesale rules or a second channel usually need custom logic around it.</li>
                </ol>
                <h3 style={{ fontFamily: 'var(--pp-display)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>WooCommerce works the same way</h3>
                <p>
                  WooCommerce exposes orders, products and stock through its REST API (a standard way for other software to read
                  and write store data) and webhooks (alerts the store sends the moment an order changes). The four decisions
                  above do not change. Only the store side of the code does, and our{' '}
                  <a href="/services/woocommerce-development" style={INLINK}>WooCommerce development</a> team builds that side.
                </p>
                <h3 style={{ fontFamily: 'var(--pp-display)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>Run both for one closed month</h3>
                <p>
                  Keep QuickBooks receiving store data for one full month after NetSuite goes live, then compare totals by channel,
                  tax and payout. Finance signs off on the match, and QuickBooks goes read-only. Staying on QuickBooks for now? Our{' '}
                  <a href="/services/shopify-quickbooks-integration" style={INLINK}>Shopify QuickBooks integration</a> service fixes the
                  sync you have. Moving? See{' '}
                  <a href="/services/ecommerce-erp-integration" style={INLINK}>ecommerce ERP integration</a> for the store side, and{' '}
                  <a href="/services/netsuite-ai-agents" style={INLINK}>NetSuite AI agents</a> for what can run inside NetSuite once
                  records flow. Our guide to{' '}
                  <a href="/blog/ai-agents-for-finance-accounting-teams-2026" style={INLINK}>AI agents for finance and accounting teams</a>{' '}
                  covers the month-end tasks those agents take on.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Mid-page CTA ── */}
        <MidPageCTA
          headline="Scope your QuickBooks to NetSuite move from one field list"
          sub="List the stores, entities, warehouses and apps that touch QuickBooks today. We reply with what moves, what gets rebuilt and the order we would do it in."
          label="Get my move scoped"
          note="Bhavesh replies within 24 hours."
        />

        {/* ── Cost ── */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// cost, without guessing</p>
            <h2 style={{ marginTop: '10px' }}>NetSuite pricing vs QuickBooks pricing: what we could verify</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                We found no published market range for a QuickBooks to NetSuite move that we could verify, so we price from your
                field list.
              </p>
              <p>
                What we can state: on 29 October 2026 Intuit listed QuickBooks Online Plus at $140 a month and Advanced at $340 a
                month, with a three-month half-price offer for new customers (<Ext href={SRC.qboPricing}>Intuit pricing</Ext>).
                Remember that each QuickBooks Online company is billed on its own (<Ext href={SRC.qboCompanies}>Intuit help</Ext>),
                so multiply by your entity count. NetSuite is sold on an Oracle quote built from modules, users and subsidiaries.
                Its pricing page blocked our fetch on 29 October 2026, so this page gives no NetSuite figure.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-display)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>The cost drivers</h3>
              <ul style={{ margin: '14px 0', paddingLeft: '20px', display: 'grid', gap: '8px' }}>
                <li><strong>Licence:</strong> modules, users and subsidiaries, quoted by Oracle.</li>
                <li><strong>Setup:</strong> chart of accounts, subsidiaries, roles and opening balances, quoted by Oracle or a NetSuite partner.</li>
                <li><strong>Channels:</strong> each store, wholesale portal or marketplace that posts orders adds one sync to build and test.</li>
                <li><strong>Custom rules:</strong> bundles, tax mapping, trade price lists and routing by warehouse add work in every sync.</li>
                <li><strong>History:</strong> opening balances only is the cheapest path. Each extra year of history you move adds checking time.</li>
              </ul>
              <p>
                FactoryJet quotes a fixed price per phase, in writing, for the integration work only. Changes are quoted and
                approved per request, and there is no monthly minimum. We do not sell or mark up the NetSuite licence.
              </p>
            </div>
          </div>
        </section>

        {/* ── Migration timeline ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// the move, in order</p>
            <h2 style={{ marginTop: '10px' }}>How long does a QuickBooks to NetSuite migration take?</h2>
            <div className="nqb-feature">
              <SectionPhoto
                name="finance-cutover-calendar"
                alt="Three people study a wall calendar with gray and blue blocks."
              />
              <div className="pp-editorial">
                <p>
                  We give no stock duration, because entity count, channels and history size change it more than anything else.
                  What does not change is the order. Each stage below has to finish before the next one starts, and the last stage
                  always takes one full closed month.
                </p>
                <ol style={{ margin: '14px 0', paddingLeft: '20px', display: 'grid', gap: '8px' }}>
                  <li><strong>Field list.</strong> Every store, entity, warehouse and app that writes to QuickBooks today, and the fields each one sends.</li>
                  <li><strong>NetSuite setup.</strong> Chart of accounts, subsidiaries, roles and opening balances, done by Oracle or a NetSuite partner.</li>
                  <li><strong>Sync rebuild.</strong> Store, wholesale and app connections rewired to post into NetSuite, mapped to the right subsidiary.</li>
                  <li><strong>One closed month in parallel.</strong> Both systems receive the same data until finance signs off on matching totals.</li>
                </ol>
                <h3 style={{ fontFamily: 'var(--pp-display)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>Check two things before you set a go-live date</h3>
                <p>
                  First, reports. Oracle’s help center says some NetSuite reports do not support consolidation and show one
                  subsidiary at a time (<Ext href={SRC.nsConsolidated}>Oracle help</Ext>). List the month-end reports your finance team
                  runs and confirm each one before the cut-over.
                </p>
                <p>
                  Second, your QuickBooks edition. Intuit stopped selling new US subscriptions to Desktop Pro Plus, Premier Plus,
                  Mac Plus and Enhanced Payroll after September 30, 2024, and said Desktop Enterprise was not affected
                  (<Ext href={SRC.qbStopSell}>Intuit</Ext>). A company on one of those older desktop editions is often moving
                  anyway, so the timing question becomes which system to land on.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Alternatives ── */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// other names on the shortlist</p>
            <h2 style={{ marginTop: '10px' }}>QuickBooks alternatives and NetSuite alternatives to shortlist</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                NetSuite is not the only step up from QuickBooks. Each line below comes from the vendor’s own page, read on 29 or 31
                October 2026. Whichever you pick, the store sync still has to be rebuilt for it.
              </p>
              <ul style={{ margin: '14px 0', paddingLeft: '20px', display: 'grid', gap: '8px' }}>
                <li><strong>Xero.</strong> Charges no per-user licence fees on its US plans, and multi-currency is included only on the Established plan (<Ext href={SRC.xeroPricing}>Xero pricing</Ext>).</li>
                <li><strong>Intuit Enterprise Suite.</strong> Intuit’s pricing page describes it as built for multi-entity organizations, so it keeps you with Intuit (<Ext href={SRC.qboPricing}>Intuit pricing</Ext>).</li>
                <li><strong>Microsoft Dynamics 365 Business Central.</strong> Lists Essentials at $80 and Premium at $110 per user a month, paid yearly, with manufacturing only in Premium (<Ext href={SRC.bcPricing}>Microsoft pricing</Ext>).</li>
                <li><strong>Acumatica.</strong> Prices by the applications you run and the resources you use, not by user seats, and advertises unlimited users (<Ext href={SRC.acumaticaPricing}>Acumatica pricing</Ext>).</li>
                <li><strong>Odoo.</strong> Offers a free plan for one app with unlimited users. Its pricing page also says that adding companies to a database moves you to the paid Custom plan (<Ext href={SRC.odooPricing}>Odoo pricing</Ext>).</li>
                <li><strong>ERPNext.</strong> Describes itself as 100% open-source ERP software you can use, modify or resell (<Ext href={SRC.erpnext}>Frappe</Ext>).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── House terms ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// what you own</p>
            <h2 style={{ marginTop: '10px' }}>What you own after a NetSuite integration</h2>
            <ul className="nqb-cards">
              {TERMS.map((x) => (
                <li className="pp-card" key={x.t}>
                  <h3>{x.t}</h3>
                  <p>{x.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="pp-sec pp-faqsec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// common questions</p>
            <div style={{ marginTop: '16px' }}>
              <FAQ
                headline="Frequently asked questions about NetSuite vs QuickBooks"
                categories={FAQ_CATEGORIES}
                items={FAQ_ITEMS}
                animate={false}
              />
            </div>
          </div>
        </section>

        {/* ── Final CTA + disclosure ── */}
        <section className="pp-sec tint" id="final-cta">
          <div className="pp-wrap">
            <div className="pp-ctagrid">
              <div className="pp-cta">
                <p className="pp-mlabel">// scoping call</p>
                <h2 style={{ margin: '12px 0 16px' }}>Stay on QuickBooks or move to NetSuite?</h2>
                <p className="pp-lead" style={{ maxWidth: '44ch' }}>
                  Book a call with our founder. We go through your entities, channels and the apps tied to QuickBooks, then lay out
                  both paths. FactoryJet quotes a fixed price per phase, in writing, after the call.
                </p>
                <div style={{ marginTop: '24px' }}>
                  <a className="pp-primary" href={CALENDLY} target="_blank" rel="noopener noreferrer">
                    Book a 30-Minute Scoping Call
                  </a>
                </div>
                <div className="founder">
                  <Image
                    src="/bhavesh_avatar-240.webp"
                    alt="Bhavesh Barot, Founder of FactoryJet"
                    width={46}
                    height={46}
                    quality={95}
                    style={{ width: '46px', height: '46px', flexShrink: 0, borderRadius: '50%', objectFit: 'cover', border: '1.5px solid var(--pp-line)' }}
                  />
                  <div>
                    <b>Bhavesh Barot</b>
                    <span>Founder, FactoryJet &bull; building commerce since 2014</span>
                  </div>
                </div>
              </div>
              <div className="pp-proof">
                <div className="top">
                  <div>
                    <b>Who wrote this, and what we sell</b>
                    <span>Disclosure</span>
                  </div>
                </div>
                <blockquote>
                  FactoryJet builds integrations between stores, wholesale portals and ERPs, and AI agents that work on ERP
                  records. We sell the integration work, not the software licence, so we earn nothing from NetSuite or QuickBooks.
                  If QuickBooks still fits, we will say so.
                </blockquote>
                <div className="rate">
                  <a href="/services/ecommerce-erp-integration" style={{ color: 'var(--pp-orange-dark)', fontWeight: 600, textDecoration: 'underline' }}>
                    See our ERP integration work →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

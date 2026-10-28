import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import MidPageCTA from '@/components/v2/MidPageCTA';
import '@/components/v2/PlatformPage.css';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const IMG = '/images/us/ecommerce-erp-integration';
const PAGE_URL = 'https://factoryjet.com/comparisons/netsuite-vs-quickbooks';
const PAGE_MODIFIED = '2026-10-29';
const PAGE_TITLE = 'NetSuite vs QuickBooks: When to Switch (2026)';
const PAGE_DESCRIPTION =
  'NetSuite vs QuickBooks for stores and distributors: user limits, inventory, multi-entity, Shopify sync and the 7 signs you have outgrown QuickBooks. Sources checked 29 Oct 2026.';

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
} as const;

const LINK = { color: 'var(--pp-orange-dark)', textDecoration: 'underline' } as const;
const INLINK = { color: 'var(--pp-orange-dark)', fontWeight: 600, textDecoration: 'underline' } as const;

function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={LINK}>
      {children}
    </a>
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
      'Cost, setup time and dependence on outside help. NetSuite is licensed through Oracle on a quote, and its pricing page would not load for us on 29 October 2026. Setup runs as a project with milestones. Many changes need an admin or a partner who knows SuiteScript (NetSuite’s scripting language). Some reports also do not support consolidation, per Oracle’s own help center, so check the ones you need.',
  },
  {
    category: 'fit',
    question: 'QuickBooks Enterprise vs NetSuite: which fits a distributor?',
    answer:
      'QuickBooks Enterprise is desktop software for up to 30 users on Gold and Platinum, or 40 on Diamond, and Advanced Inventory comes only on Platinum and Diamond. It suits one company with a warehouse and a stable team. NetSuite suits a distributor with several entities, several warehouses across companies, or a wholesale portal and a store that both pull from the same stock.',
  },
  {
    category: 'fit',
    question: 'What are ERP systems similar to NetSuite?',
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
      'On 29 October 2026 Intuit’s pricing page listed QuickBooks Online Plus at $140 a month and Advanced at $340 a month, with a three-month half-price offer for new customers. NetSuite does not work that way. Oracle quotes a licence based on modules, users and subsidiaries, and we could not open NetSuite’s pricing page that day, so we publish no NetSuite figure.',
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
    question: 'How long will QuickBooks Enterprise be around?',
    answer:
      'We found no end date on the Intuit pages we read on 29 October 2026. When Intuit stopped selling new US subscriptions to Desktop Pro Plus, Premier Plus and Mac Plus after September 30, 2024, it stated that QuickBooks Enterprise was not affected, and its Enterprise pricing page still sold Gold, Platinum and Diamond on 29 October 2026. Base the move on your entities, users and stock, since a shutdown date is not on the table today.',
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
    question: 'Does NetSuite have a Shopify connector?',
    answer:
      'Yes. Oracle NetSuite publishes the NetSuite ERP Connector on the Shopify App Store, and its listing says it syncs product, pricing, inventory, sales order and fulfillment data, with order, coupon and gift certificate sync in the plan features. It is a monthly subscription billed through Shopify. Custom sync is needed when your rules go past what the connector maps.',
  },
  {
    category: 'sync',
    question: 'Can WooCommerce connect to NetSuite?',
    answer:
      'Yes. WooCommerce exposes orders, products and stock through its REST API and webhooks, and NetSuite accepts records through SuiteTalk web services. The link can run through middleware such as Celigo or through a custom service. The design choices match Shopify: which system owns price and stock, which subsidiary each order belongs to, and how refunds post.',
  },
  {
    category: 'sync',
    question: 'Should store orders post to the ERP one by one or as a daily summary?',
    answer:
      'Post one by one if you need order-level margin, customer history or returns traced to the original sale. Post a daily summary if order volume is high and finance only needs totals by channel. Intuit’s own Shopify connector posts each sale and refund, then groups them into a payout deposit. Pick the pattern before the build starts, because it shapes every mapping.',
  },
  {
    category: 'sync',
    question: 'Is FactoryJet a NetSuite or Intuit partner?',
    answer:
      'No. FactoryJet is not a NetSuite reseller, an Oracle partner or an Intuit partner, and we earn nothing from either licence. We build the integrations: store to ERP, wholesale portal to ERP, and the AI agents that work on ERP records. That means we can tell you to stay on QuickBooks when the numbers say so.',
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
  name: 'NetSuite vs QuickBooks: When to Switch and What It Changes (2026)',
  description: PAGE_DESCRIPTION,
  url: PAGE_URL,
  dateModified: PAGE_MODIFIED,
  inLanguage: 'en-US',
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    jobTitle: 'Founder & Principal Commerce Architect',
    url: 'https://factoryjet.com',
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
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'Comparisons', item: 'https://factoryjet.com/best-ecommerce-platforms' },
    { '@type': 'ListItem', position: 3, name: 'NetSuite vs QuickBooks', item: PAGE_URL },
  ],
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
    d: 'If someone exports a trial balance from each company file and adds them up in Excel, that is the job NetSuite OneWorld does in its reports, translating each subsidiary into the parent’s currency.',
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

export default function NetsuiteVsQuickbooksPage() {
  return (
    <>
      <script id="ns-qb-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="ns-qb-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="ns-qb-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader navLinks={[]} cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        {/* ── Hero ── */}
        <section className="pp-dotgrid">
          <div className="pp-wrap" style={{ paddingTop: 'clamp(44px,6vh,84px)', paddingBottom: 'clamp(44px,6vh,84px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">ERP comparison · Updated 29 October 2026</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '20ch' }}>
                  NetSuite vs QuickBooks: When to Switch and What It Changes (2026)
                </h1>
                <p className="pp-lead" style={{ maxWidth: '50ch' }}>
                  QuickBooks Online gives you one company per subscription and up to 25 users on Advanced
                  (<Ext href={SRC.qboPricing}>Intuit</Ext>). NetSuite OneWorld runs up to 250 subsidiaries in one account
                  (<Ext href={SRC.nsSubsidiaries}>Oracle</Ext>). This page shows where the line sits, and what a move does to your
                  Shopify or WooCommerce sync.
                </p>
                <HeroInlineForm source="us_netsuite_vs_quickbooks_hero" region="us" submitLabel="Get My Move Scoped" />
              </div>

              {/* Visual comparison graphic */}
              <div
                role="img"
                aria-label="NetSuite vs QuickBooks comparison showing entities, users, inventory and store sync on each system."
                style={{
                  border: '1px solid var(--pp-line)',
                  borderRadius: '18px',
                  background: '#fff',
                  padding: '24px',
                  boxShadow: '0 18px 50px rgba(20,17,15,.08)',
                }}
              >
                <div
                  style={{
                    border: '1.5px solid var(--pp-orange)',
                    borderRadius: '12px',
                    background: 'var(--pp-tint)',
                    padding: '14px',
                    textAlign: 'center',
                    fontFamily: 'var(--pp-disp)',
                    fontWeight: 700,
                    color: 'var(--pp-ink)',
                    marginBottom: '18px',
                  }}
                >
                  Where each one stops
                  <small style={{ display: 'block', fontFamily: 'var(--pp-mono)', fontSize: '11px', color: 'var(--pp-orange-dark)', fontWeight: 600, marginTop: '2px' }}>
                    QuickBooks (accounting) vs NetSuite (ERP)
                  </small>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                  <div style={{ border: '1px solid var(--pp-line)', borderRadius: '10px', background: '#FAF8F5', padding: '14px 12px' }}>
                    <b style={{ fontFamily: 'var(--pp-disp)', fontSize: '14px', display: 'block', color: 'var(--pp-ink)', borderBottom: '1px solid var(--pp-line)', paddingBottom: '6px' }}>QuickBooks Online</b>
                    <ul style={{ fontSize: '12px', color: 'var(--pp-body)', marginTop: '8px', paddingLeft: '14px', display: 'grid', gap: '4px' }}>
                      <li>One company per subscription</li>
                      <li>5 users on Plus, 25 on Advanced</li>
                      <li>Stock quantity on Plus and up</li>
                      <li>Set up in days</li>
                    </ul>
                  </div>
                  <div style={{ border: '1px solid var(--pp-line)', borderRadius: '10px', background: '#FAF8F5', padding: '14px 12px' }}>
                    <b style={{ fontFamily: 'var(--pp-disp)', fontSize: '14px', display: 'block', color: 'var(--pp-ink)', borderBottom: '1px solid var(--pp-line)', paddingBottom: '6px' }}>NetSuite OneWorld</b>
                    <ul style={{ fontSize: '12px', color: 'var(--pp-body)', marginTop: '8px', paddingLeft: '14px', display: 'grid', gap: '4px' }}>
                      <li>Up to 250 subsidiaries</li>
                      <li>Consolidated reports</li>
                      <li>Orders, stock and books together</li>
                      <li>Set up as a project</li>
                    </ul>
                  </div>
                </div>
                <div
                  style={{
                    marginTop: '16px',
                    padding: '10px 14px',
                    background: '#14110F',
                    borderRadius: '10px',
                    color: '#fff',
                    fontFamily: 'var(--pp-mono)',
                    fontSize: '10.5px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', display: 'inline-block', marginRight: '6px' }} />
                    Store to ERP sync
                  </div>
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
              Stay on QuickBooks while you run one company, a few users and simple stock. Move to NetSuite when you run several
              legal entities, close the month in spreadsheets, or sell wholesale and retail from shared stock. QuickBooks bills
              each company separately. NetSuite OneWorld consolidates up to 250 subsidiaries in one account.
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
            <h2 style={{ marginTop: '10px' }}>NetSuite vs QuickBooks: what each one covers</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              Every row comes from Intuit or Oracle pages we read on 29 October 2026. Where a vendor page would not load, the cell
              says so instead of guessing.
            </p>
            <div style={{ marginTop: '32px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>QuickBooks Online / Enterprise</th>
                    <th>NetSuite</th>
                    <th>Source</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="me">
                    <td className="name">Accounting scope</td>
                    <td>Books, invoices, bills and bank feeds. Classes and locations: 40 on Plus, unlimited on Advanced</td>
                    <td>An ERP: accounting, orders, purchasing and inventory in one system</td>
                    <td><Ext href={SRC.qboPricing}>Intuit pricing</Ext>, checked 29 Oct 2026</td>
                  </tr>
                  <tr>
                    <td className="name">Inventory</td>
                    <td>Online: quantity tracking on Plus and Advanced only. Enterprise: Advanced Inventory on Platinum and Diamond only</td>
                    <td>Inventory is part of the core ERP, shared across subsidiaries</td>
                    <td><Ext href={SRC.qboInventory}>Intuit inventory help</Ext> and <Ext href={SRC.qbEnterprise}>Enterprise pricing</Ext>, checked 29 Oct 2026</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Multi-entity</td>
                    <td>Each Online company needs its own paid subscription; users and lists are not shared</td>
                    <td>OneWorld: up to 250 subsidiaries, consolidated reports in the parent’s base currency</td>
                    <td><Ext href={SRC.qboCompanies}>Intuit</Ext>, <Ext href={SRC.nsSubsidiaries}>Oracle</Ext> and <Ext href={SRC.nsConsolidated}>Oracle consolidation</Ext>, checked 29 Oct 2026</td>
                  </tr>
                  <tr>
                    <td className="name">Users</td>
                    <td>Online: 5 on Plus, 25 on Advanced. Enterprise: up to 30 on Gold and Platinum, 40 on Diamond</td>
                    <td>Licensed per user on an Oracle quote</td>
                    <td><Ext href={SRC.qboPricing}>Intuit</Ext> and <Ext href={SRC.qbEnterprise}>Intuit Enterprise</Ext>, checked 29 Oct 2026</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Ecommerce sync</td>
                    <td>Intuit’s Shopify connector imports each sale and refund, then groups them into a payout deposit</td>
                    <td>Oracle’s NetSuite ERP Connector syncs products, pricing, inventory, sales orders and fulfillments with Shopify</td>
                    <td><Ext href={SRC.qboShopify}>Intuit help</Ext> and <Ext href={SRC.nsShopify}>Shopify App Store</Ext>, checked 29 Oct 2026</td>
                  </tr>
                  <tr>
                    <td className="name">List price</td>
                    <td>Online Plus $140/mo, Advanced $340/mo (three-month half-price offer for new customers)</td>
                    <td>Quoted by Oracle. NetSuite’s pricing page returned an error to our fetch, so no figure here</td>
                    <td><Ext href={SRC.qboPricing}>Intuit pricing</Ext>, checked 29 Oct 2026</td>
                  </tr>
                  <tr className="me">
                    <td className="name">Implementation effort</td>
                    <td>Self-serve. Most small companies set it up with their bookkeeper</td>
                    <td>A project with Oracle or a partner, plus re-wiring every app that talked to QuickBooks</td>
                    <td>Our scoping experience</td>
                  </tr>
                  <tr>
                    <td className="name">Who it fits</td>
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
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// the checklist</p>
            <h2 style={{ marginTop: '10px' }}>7 signs you have outgrown QuickBooks</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '64ch' }}>
              One sign is a nuisance. Two or more, and the workarounds cost more each month than a scoping call.
            </p>
            <ol style={{ margin: '24px 0 0', paddingLeft: '22px', display: 'grid', gap: '16px' }}>
              {SIGNS.map((s) => (
                <li key={s.t} style={{ color: 'var(--pp-body)', fontSize: '15.5px', lineHeight: 1.6 }}>
                  <strong style={{ color: 'var(--pp-ink)' }}>{s.t}</strong> {s.d}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Sourced figures ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">// sourced figures</p>
            <h2 style={{ marginTop: '10px' }}>Three limits that usually decide the move</h2>
            <div className="pp-bento" style={{ marginTop: '32px' }}>
              {SOURCED.map((s) => (
                <div className="pp-card" key={s.v}>
                  <div style={{ fontFamily: 'var(--pp-disp)', fontWeight: 800, fontSize: '36px', color: 'var(--pp-orange-dark)', letterSpacing: '-.03em', lineHeight: 1 }}>{s.v}</div>
                  <p style={{ marginTop: '10px', fontSize: '15px', color: 'var(--pp-body)' }}>{s.d}</p>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-block', marginTop: '10px', fontFamily: 'var(--pp-mono)', fontSize: '11px', color: 'var(--pp-muted)', textDecoration: 'underline' }}
                  >
                    {s.src}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Store sync ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// the part nobody budgets for</p>
            <h2 style={{ marginTop: '10px' }}>What moving does to your Shopify or WooCommerce sync</h2>
            <div style={{ margin: '24px 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--pp-line)', boxShadow: '0 12px 36px rgba(0,0,0,0.06)' }}>
              <Image
                src={`${IMG}/field-mapping-cards.webp`}
                alt="Two people at a table join two columns of blank white cards with lengths of orange yarn"
                width={1200}
                height={800}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                Your store sync today writes to QuickBooks. Intuit’s own Shopify connector, for example, imports each sale as a
                payment, each refund as its own transaction, and groups them into a payout deposit
                (<Ext href={SRC.qboShopify}>Intuit help</Ext>). On go-live day that app has nowhere to write. Every order, refund,
                fee and payout has to land in NetSuite instead, mapped to the right subsidiary.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>Four decisions to make before anyone builds</h3>
              <ol style={{ margin: '14px 0', paddingLeft: '20px', display: 'grid', gap: '8px' }}>
                <li><strong>Who owns stock and price.</strong> Usually NetSuite owns both and the store reads them. Write it down per field.</li>
                <li><strong>Which subsidiary each order belongs to.</strong> By store, by ship-from warehouse, or by customer type. OneWorld needs an answer for every order.</li>
                <li><strong>Order by order, or a daily summary.</strong> Order-level posting keeps margin and returns traceable. A daily summary keeps volume down.</li>
                <li><strong>Connector or custom.</strong> Oracle’s NetSuite ERP Connector covers products, pricing, inventory, sales orders and fulfillments (<Ext href={SRC.nsShopify}>Shopify App Store</Ext>). Bundles, wholesale rules or a second channel usually need custom logic around it.</li>
              </ol>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>WooCommerce works the same way</h3>
              <p>
                WooCommerce exposes orders, products and stock through its REST API and webhooks. The four decisions above do not
                change. Only the store side of the code does.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>Run both for one closed month</h3>
              <p>
                Keep QuickBooks receiving store data for one full month after NetSuite goes live, then compare totals by channel,
                tax and payout. Finance signs off on the match, and QuickBooks goes read-only. Staying on QuickBooks for now? Our{' '}
                <a href="/services/shopify-quickbooks-integration" style={INLINK}>Shopify QuickBooks integration</a> service fixes the
                sync you have. Moving? See{' '}
                <a href="/services/ecommerce-erp-integration" style={INLINK}>ecommerce ERP integration</a> for the store side, and{' '}
                <a href="/services/netsuite-ai-agents" style={INLINK}>NetSuite AI agents</a> for what can run inside NetSuite once
                records flow.
              </p>
            </div>
          </div>
        </section>

        {/* ── Mid-page CTA ── */}
        <MidPageCTA
          headline="Send your field list. We map the move and quote each phase at a fixed price."
          sub="List the stores, entities, warehouses and apps that touch QuickBooks today. We reply with what moves, what gets rebuilt and the order we would do it in."
          label="Send my field list"
          note="Bhavesh replies within 24 hours."
        />

        {/* ── Cost ── */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">// cost, without guessing</p>
            <h2 style={{ marginTop: '10px' }}>What a QuickBooks to NetSuite move costs, and what drives it</h2>
            <div className="pp-editorial" style={{ marginTop: '20px' }}>
              <p>
                We keep a sheet of market price ranges, each tied to a published source we fetched. None of its 35 rows covers an
                ERP move or a store to ERP integration, so this page gives no market range for either. A number without a source
                would be a guess.
              </p>
              <p>
                What we can state: on 29 October 2026 Intuit listed QuickBooks Online Plus at $140 a month and Advanced at $340 a
                month, with a three-month half-price offer for new customers (<Ext href={SRC.qboPricing}>Intuit pricing</Ext>).
                Remember that each QuickBooks Online company is billed on its own (<Ext href={SRC.qboCompanies}>Intuit help</Ext>),
                so multiply by your entity count. NetSuite is licensed on an Oracle quote, and its pricing page did not load for us.
              </p>
              <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '18px', marginTop: '20px', color: 'var(--pp-ink)' }}>The cost drivers</h3>
              <ul style={{ margin: '14px 0', paddingLeft: '20px', display: 'grid', gap: '8px' }}>
                <li><strong>Licence:</strong> modules, users and subsidiaries, quoted by Oracle.</li>
                <li><strong>Setup:</strong> chart of accounts, subsidiaries, roles and opening balances, quoted by Oracle or a NetSuite partner.</li>
                <li><strong>Channels:</strong> each store, wholesale portal or marketplace that posts orders adds one sync to build and test.</li>
                <li><strong>Custom rules:</strong> bundles, tax mapping, trade price lists and routing by warehouse add work in every sync.</li>
                <li><strong>History:</strong> opening balances only is the cheapest path. Each extra year of history you move adds checking time.</li>
              </ul>
              <p>
                FactoryJet quotes a fixed price in writing after a short scoping call, for the integration work only. We do not
                sell or mark up the NetSuite licence.
              </p>
            </div>
          </div>
        </section>

        {/* ── House terms ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">// what you own</p>
            <h2 style={{ marginTop: '10px' }}>The code, the accounts and the data stay yours.</h2>
            <ul className="pp-bento" style={{ marginTop: '32px', listStyle: 'none', padding: 0 }}>
              {TERMS.map((x) => (
                <li className="pp-card" key={x.t}>
                  <h3 style={{ fontFamily: 'var(--pp-disp)', fontSize: '16px', color: 'var(--pp-ink)', marginBottom: '6px' }}>{x.t}</h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--pp-body)' }}>{x.d}</p>
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
              />
            </div>
          </div>
        </section>

        {/* ── Final CTA + disclosure ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <div className="pp-ctagrid">
              <div className="pp-cta">
                <p className="pp-mlabel">// scoping call</p>
                <h2 style={{ margin: '12px 0 16px' }}>Stay on QuickBooks or move to NetSuite?</h2>
                <p className="pp-lead" style={{ maxWidth: '44ch' }}>
                  Book a call with our founder. We go through your entities, channels and the apps tied to QuickBooks, then lay out
                  both paths. FactoryJet quotes a fixed price in writing after a short scoping call.
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
                    style={{ width: '46px', height: '46px', flexShrink: 0, borderRadius: '50%', objectFit: 'cover', border: '1.5px solid var(--pp-orange)' }}
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
                  records. We are not a NetSuite reseller, an Oracle partner or an Intuit partner, and we earn nothing from either
                  licence. If QuickBooks still fits, we will say so.
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

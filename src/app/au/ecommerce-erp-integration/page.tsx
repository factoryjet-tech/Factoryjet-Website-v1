import type { Metadata } from 'next';
import { Fragment } from 'react';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import AuFaq from '../components/AuFaq';
import { twinAlternates } from '@/data/hreflangMap';
import '@/components/v2/AiAgentDevelopmentSections.css';
import '../au-page.css';

/* ─────────────────────────────────────────────────────────────────────────────
   /au/ecommerce-erp-integration, built 2026-10-29.

   Why this page exists: no AU page owned store to ERP links. /au/shopify-development
   and /au/ecommerce-development each answer "can you connect Xero or MYOB" in one
   FAQ, and /au/accounts-payable-automation covers supplier bills, not sales. This
   page covers the same topic as /services/ecommerce-erp-integration for Australia.
   Copy was rewritten on 29 Oct 2026 after review found paraphrased US and UK
   sentences; keep it written from AU material (GST, BAS, ATO, AU systems).

   Demand (DataForSEO Google Ads volumes, Australia, location 2036, run 29 Oct 2026):
   "shopify xero integration" 260, "shopify xero" 110, "xero integration" 90,
   "erp integration" 50, "woocommerce xero integration" 50, "shopify myob integration" 30,
   "netsuite shopify integration" 30, "amazon xero integration" 30, "shopify gst" 30,
   "ecommerce erp integration" 20, "ebay xero integration" 20, "cin7 shopify integration" 10,
   "unleashed shopify integration" 10, "odoo shopify integration" 10.
   FAQ questions come from Google AU People Also Ask and related searches for
   "does shopify integrate with xero", "what is erp integration", "how to record
   shopify sales in xero", "shopify myob" and "shopify erp integration" (same run).

   Truth rules for anyone editing this file:
   * Every law, tax rule, platform limit and price below was read on the source's own
     page on 29 Oct 2026 and links to it through SRC. Re-read the page before changing one.
   * No FactoryJet price. The only dollar figures are ATO thresholds and published AUD
     market ranges for a BUILD, each from a named Australian firm. No running,
     subscription, licence or maintenance figures (Bhavesh, 11 Oct 2026).
   * No Australian client is named or implied. Sow Easy is shown as "work we have done"
     on Odoo, restating its own case study only. Do not say where Sow Easy is based.
   * Nothing here says FactoryJet partners with any ERP, accounting or platform maker.
   * Never state where the team is.

   Schema: Service (areaServed Australia) + BreadcrumbList + WebPage + FAQPage. The
   FAQPage mainEntity is mapped from the exact FAQ_ITEMS array AuFaq renders.
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL = 'https://factoryjet.com/au/ecommerce-erp-integration';
const PUBLISHED = '2026-10-29';
const UPDATED = '2026-10-31';
const TITLE = 'Ecommerce ERP Integration Australia | MYOB, NetSuite, Cin7';
const H1 = 'Ecommerce ERP Integration in Australia, With GST Right on Every Order and Refund';
const DESCRIPTION =
  'ERP integration for Australian Shopify and WooCommerce stores on Xero, MYOB, NetSuite, Cin7 or Odoo. Orders, stock, refunds and GST that match at BAS time.';
const OG_IMAGE = 'https://factoryjet.com/og-default.png';

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD, so the
   schema can never describe a trail a human cannot see. Never hand-copy a
   second list here. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'Ecommerce ERP Integration Australia', url: CANONICAL },
];

/* ─── External sources, each read on 29 Oct 2026 ─────────────────────────── */
// ATO, Tax invoices (last updated 18 Sep 2026): "If a customer asks for a tax invoice,
// you must provide one within 28 days, unless it is for a sale of $82.50 (including GST)
// or less." Sales of $1,000 or more "also need to show the buyer's identity or ABN".
// Mixed invoices "must clearly show which items are taxable". "Australia has adopted the
// Peppol framework as the common standard and network for eInvoicing." (The A-NZ
// specification clause was cut on review: not confirmed on the page.) Rounding: the
// total invoice rule and the taxable supply rule. Read in a real browser (403 to fetch).
const SRC_ATO_INVOICES = 'https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/tax-invoices';
// ATO, Adjustment notes (last updated 14 Sep 2026): "You need a valid adjustment note
// before you can make a decreasing adjustment, unless the adjustment is for GST of $75 or
// less." Read in a real browser.
const SRC_ATO_ADJUST = 'https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/completing-your-bas-for-gst/making-adjustments-on-your-activity-statements/adjustment-notes';
// Xero Developer, OAuth 2.0 API limits: 5 concurrent calls, 60 calls per minute, 1,000 a
// day on starter and 5,000 a day on higher tiers, per organisation. "Xero is designed for
// volumes of up to 5,000 Sales invoices (Accounts Receivables) ... per month". "a maximum
// number of 4,000 tracked inventory items per organisation". Read in a real browser.
const SRC_XERO_LIMITS = 'https://developer.xero.com/documentation/guides/oauth2/limits/';
// MYOB, Connect your Shopify account to MYOB (via Amaka): sales sync into MYOB Business,
// summarised into one invoice or kept separate; "Bills are automatically created in MYOB
// Business to reflect any third-party fees"; syncs run once daily; Lite users must upgrade.
const SRC_MYOB_SHOPIFY = 'https://www.myob.com/au/support/myob-business/inventory/connect-your-shopify-account-to-myob';
// Cin7 Core Help, Stock levels in Shopify: "Stock levels are always pushed from Cin7 Core
// to Shopify, never from Shopify to Cin7 Core." Pushed on every stock change (sale
// fulfilment, PO receipt, transfer, write-off, adjustment, return). Read in a real browser.
const SRC_CIN7_STOCK = 'https://help.core.cin7.com/hc/en-us/articles/11797001436943-Stock-levels-in-Shopify';
// Unleashed Support, Shopify integration introduction (16 Mar 2026): "Stock availability
// automatically syncs from your account to your Shopify store at configurable time
// intervals"; "each variant requires a unique SKU that will match your stock's Product Code".
const SRC_UNLEASHED = 'https://intercom.help/unleashed-support/en/articles/11582153-shopify-integration-introduction';
// Odoo 19 docs, Shopify Connector: "Orders: Every 10 minutes."; "Stock is pushed from Odoo
// to Shopify after each order synchronization."
// Shopify App Store, NetSuite ERP Connector, developer Oracle NetSuite: "automatically syncs
// product, pricing, inventory, sales order, and fulfillment data between NetSuite ERP and Shopify".
// Plan list names "Price & Quantity Sync (real-time option)" and "Real-time Order Sync" (checked 31 Oct 2026).
const SRC_NETSUITE_APP = 'https://apps.shopify.com/oracle-netsuite';
const SRC_ODOO = 'https://www.odoo.com/documentation/19.0/applications/sales/sales/shopify_connector.html';
// A2X, Xero page: "Instead of posting individual orders, A2X creates a summary entry",
// covering "the same period covered by your payout", summarised "by taxed, non-taxed, or
// tax excluded".
const SRC_A2X = 'https://www.a2xaccounting.com/xero';
// Exodigital (exodigital.com.au), ERP implementation cost in Australia (10 May 2026):
// "Typical integration costs: AUD $5,000 – $40,000 per integration, depending on
// complexity." Table row: "Shopify / WooCommerce | AUD $4,000–$15,000". GST not stated.
const SRC_EXODIGITAL = 'https://www.exodigital.com.au/blog/erp-implementation-cost-australia-2025';
// Insiteful (insiteful.com.au), ERP to Shopify Integration: NetSuite, Cin7, and Unleashed
// Compared (2026): custom build "typically $25,000 to $80,000 AUD"; Cin7 Omni
// implementation "between $15,000 and $40,000 AUD"; NetSuite implementation consulting
// "between $50,000 and $250,000 AUD". GST not stated. Build figures only are used here.
const SRC_INSITEFUL = 'https://www.insiteful.com.au/shopify-erp-integration-netsuite-cin7-unleashed/';

const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',  label: 'What it is' },
  { key: 'gst',     label: 'GST, invoices and refunds' },
  { key: 'systems', label: 'Xero, MYOB, Cin7 and the rest' },
  { key: 'choose',  label: 'Cost and connector or custom' },
  { key: 'working', label: 'Working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string; links?: { href: string; label: string }[] }[] = [
  // ── What it is ──
  { category: 'basics', question: 'What is ecommerce ERP integration?',
    answer: 'It is the link that lets your online store and your back office share records without anyone retyping them. Products, prices and stock levels go out to the store and to marketplaces. Orders, customers, payouts, refunds and the GST on each of them come back into Xero, MYOB, NetSuite, Cin7, Unleashed or Odoo. ERP stands for enterprise resource planning, the software that runs stock, purchasing and accounts in one place.' },
  { category: 'basics', question: 'Can you give me an example of ERP integration?',
    answer: 'A Brisbane shopper buys two items on your Shopify store, one taxable and one GST-free. The order lands in Cin7 as a sale, Cin7 drops stock by two and pushes the new count back to Shopify. Overnight, the day’s Shopify payout posts to Xero as one summary with sales, card fees and GST split by tax code. When the shopper returns one item, the refund carries the same tax code back.' },
  { category: 'basics', question: 'Is Xero an ERP, or do we need one?',
    answer: 'Xero is accounting software. It keeps your ledger, invoices, bank feeds and BAS, and it tracks simple inventory. Xero’s developer guide recommends a maximum of 4,000 tracked inventory items per organisation. Once you run several warehouses, assemblies, purchase orders or more SKUs than that, most stores add an inventory system such as Cin7 or Unleashed beside Xero, or move to a full ERP such as NetSuite or Odoo.' },
  { category: 'basics', question: 'Is an ERP the same as a CRM?',
    answer: 'No. A CRM (customer relationship management system) tracks leads, contacts and sales conversations. An ERP tracks what you buy, make, hold and sell, plus the money behind it. For a store the ERP is usually the system that owns stock and trade prices, while a CRM such as HubSpot holds the marketing history. The two often share customer records through a link of their own.' },

  // ── GST, invoices and refunds ──
  { category: 'gst', question: 'How should Shopify GST flow into Xero or MYOB?',
    answer: 'The same rules apply to Shopify GST and WooCommerce GST. Every product needs a tax code that matches the one in your books: GST on income for taxable lines, GST-free for exempt lines, and a clear rule for shipping charges that your accountant approves. We map each store tax setting to a ledger tax code before the first sync, then test carts that mix taxable, GST-free and discounted lines.' },
  { category: 'gst', question: 'How are refunds and returns handled for GST in the sync?',
    answer: 'A refund should reverse the exact GST charged on the original line, at the rate and code used that day. We post refunds against the same tax code as the sale, and a partial refund reverses only the GST on the items sent back. The ATO says you need a valid adjustment note before you can make a decreasing adjustment, unless the adjustment is for GST of $75 or less. For trade customers, the ERP should issue that note automatically when a credit is raised.' },
  { category: 'gst', question: 'Do our online orders need to be tax invoices?',
    answer: 'Only when the customer asks, and then fast. The ATO says that if a customer asks for a tax invoice you must provide one within 28 days, unless the sale is $82.50 or less including GST. Sales of $1,000 or more must also show the buyer’s identity or ABN. We make the order email or the ERP invoice carry every required detail, so a trade buyer’s request never needs manual work.' },
  { category: 'gst', question: 'Why is the GST in Xero a few cents different from the store?',
    answer: 'Rounding. The ATO allows two rounding rules on an invoice with several taxable lines: round once on the invoice total, or round each line and then the total. Stores and accounting tools do not always pick the same one, so a cart of ten lines can differ by a few cents. We choose one rule, set both systems to match where they allow it, and post any leftover cent to a rounding account.' },
  { category: 'gst', question: 'Do we need Peppol eInvoicing for our trade customers?',
    answer: 'Only if your trade buyers ask for it. The ATO says Australia has adopted the Peppol framework as its common eInvoicing standard and network. If they do, the job on our side is making sure wholesale orders reach your ERP complete, with ABN, purchase order number and tax per line.' },
  { category: 'gst', question: 'Should every order be its own invoice in Xero, or a daily summary?',
    answer: 'For most retail stores, a summary per payout. Xero’s developer guide says Xero is designed for volumes of up to 5,000 sales invoices a month. A store taking 300 orders a day passes that in under three weeks (300 × 17 = 5,100). Summary apps such as A2X post one entry per payout, split by taxed and GST-free sales. Trade orders, where the buyer needs a tax invoice, still go in one by one.' },

  // ── Xero, MYOB, Cin7 and the rest ──
  { category: 'systems', question: 'Does Shopify integrate with Xero in Australia?',
    answer: 'Yes, through apps or a custom link, and the setup matters more than the app. The common routes are a payout summary app such as A2X, an inventory system such as Cin7 or Unleashed that posts to Xero for you, or a custom link when your rules do not fit either. Before anything syncs, decide whether orders go in one by one or as summaries, and agree tax codes and clearing accounts with your bookkeeper.',
    links: [{ href: '/au/shopify-xero-integration', label: 'Shopify Xero integration in Australia' }] },
  { category: 'systems', question: 'Is there a Shopify app for MYOB?',
    answer: 'Yes. MYOB’s own support page connects Shopify to MYOB Business through Amaka. It says sales can sync as one summarised invoice or separate invoices, and that bills are created automatically for third-party fees. Syncs run once a day, and MYOB Business Lite users need to upgrade to see the sales orders. For MYOB Acumatica or AccountRight files, or rules Amaka cannot express, we build or configure a different route.' },
  { category: 'systems', question: 'Should Cin7 or Shopify be the master for stock?',
    answer: 'Cin7, if you run it. Cin7 Core’s help centre says stock levels are always pushed from Cin7 Core to Shopify, never the other way, and that a push happens on every stock change, from a sale fulfilment to a purchase order receipt or a return. That makes Shopify a copy. Anyone who edits stock in Shopify directly will be overwritten, so we lock that down for staff during setup.' },
  { category: 'systems', question: 'How does Unleashed connect to Shopify?',
    answer: 'Through Unleashed’s own Shopify integration. Unleashed’s support guide says stock syncs from Unleashed to Shopify at intervals you configure, and that each Shopify variant needs a unique SKU matching the Unleashed product code. So the first job is a SKU audit: duplicates and blank SKUs in Shopify are the usual reason a sync fails. Unleashed then passes stock movements for sales on to your accounting system.' },
  { category: 'systems', question: 'Can you connect our store to NetSuite or Odoo?',
    answer: 'Yes. Oracle NetSuite publishes a NetSuite ERP Connector on the Shopify App Store, and Odoo has its own Shopify Connector. We work with either or build a custom link. Odoo’s documentation says its Shopify Connector pulls orders every 10 minutes by default and pushes stock to Shopify after each pull. That suits most catalogues, but a flash sale on fast stock may need a shorter cycle. For NetSuite we choose between Oracle’s connector, an integration platform or custom code based on your order volume and pricing rules.',
    links: [{ href: '/au/netsuite-ai-agents', label: 'NetSuite AI agents in Australia' }] },
  { category: 'systems', question: 'Can marketplace orders go into the same ERP as our store?',
    answer: 'Yes, and they should. Orders from Amazon.com.au, eBay, Kogan and Bunnings Marketplace draw from the same stock count as your store, or you oversell. Each marketplace order comes into the ERP tagged by channel, so margin reports show what Amazon or Bunnings Marketplace sales cost you after fees. Each marketplace pays out separately, so each one gets its own clearing account in Xero or MYOB. An Amazon Xero integration or an eBay Xero integration works the same way: each settlement posts to that marketplace’s clearing account, with fees split out. We set the channel rules in your ERP or inventory system rather than in each marketplace.' },
  { category: 'systems', question: 'How do Afterpay, Zip and Stripe payouts reconcile?',
    answer: 'Payment providers usually deposit sales net of their fees and refunds, often covering several days of orders, so a deposit rarely equals one day of sales. We give Shopify Payments, Stripe, Afterpay, Zip and PayPal a clearing account each. Sales post into the clearing account gross, fees and refunds come out of it, and the deposit clears it to zero. If a clearing account is not zero at month end, something is missing.' },

  // ── Cost and connector or custom ──
  { category: 'choose', question: 'How much does Shopify ERP integration cost in Australia?',
    answer: 'Published Australian ranges are wide. Exodigital puts typical integrations at AUD $5,000 to $40,000 each, and AUD $4,000 to $15,000 for a Shopify or WooCommerce link. Insiteful puts a custom Shopify and ERP build at AUD $25,000 to $80,000 and NetSuite implementation consulting at AUD $50,000 to $250,000. Neither says whether GST is included. FactoryJet quotes a fixed price per phase in writing after a scoping call.' },
  { category: 'choose', question: 'When is a ready-made connector enough, and when is custom better?',
    answer: 'A connector is enough when it moves each record in the direction your owner map says, syncs often enough for your stock, handles your tax codes and fits your order volume. Custom wins when one of those fails: trade price lists the connector cannot read, bundles that must split into components, several warehouses with allocation rules, or marketplaces the connector does not support. Often the answer is a connector plus one small custom piece.' },
  { category: 'choose', question: 'Who builds ecommerce ERP integrations in Australia?',
    answer: 'Four kinds of team, and many projects mix them. The system makers publish their own connectors: Cin7, Unleashed and Odoo each document a Shopify integration, and Oracle NetSuite lists one on the Shopify App Store. App makers such as A2X and Amaka sell ready-made links to Xero or MYOB. Firms such as Exodigital and Insiteful publish Australian price ranges for this work. Development teams like ours set up a connector or write a custom link when the rules do not fit.' },
  { category: 'choose', question: 'How long does an ERP integration take?',
    answer: 'Plan backwards from a BAS quarter. Going live on the first day of a quarter keeps each BAS inside one setup, so the build and testing need to finish before then. Clean-up sets most of the pace: duplicate SKUs, products with no GST setting and tax codes nobody uses any more. Before go-live we replay past weeks of real orders and check the GST totals against the BAS you already lodged. The written timeline follows the signed owner map.' },

  // ── Working with us ──
  { category: 'working', question: 'Can we watch it post a GST-free sale and a refund to a test Xero file first?',
    answer: 'Yes, and that is the test we suggest. Pick the awkward cases from your own catalogue: a cart with a GST-free item next to a taxable one, a discount code, an Afterpay order, a partial refund. We run them through a test copy of your books and your bookkeeper reads the tax code on every line it posts. No contract is signed until those lines look right to them.' },
  { category: 'working', question: 'Can we send a brief, field list or RFP instead of booking a call?',
    answer: 'Yes, through the form on this page. The most useful Australian brief names the tax codes you use today, whether you lodge BAS monthly or quarterly, every marketplace you sell on, and each payment provider, including Afterpay and Zip. Add a recent payout statement and one month of exported orders if you can. Those let us spot the GST and clearing account problems before a call.' },
  { category: 'working', question: 'Can our store keep selling while we change accounting or ERP systems?',
    answer: 'Yes, whether you are moving from Xero to NetSuite or from MYOB to Cin7. The store keeps posting to the old system while the new one is set up, so sales and GST keep reaching the books. We rewrite the owner map for the new system, build the link against a sandbox, replay real orders through it, and switch over on a quiet day at the start of a BAS period so each quarter sits in one system.' },
  { category: 'working', question: 'Who looks after the integration after launch?',
    answer: 'We do, if you want us to. Defects found after launch are fixed inside the build price for a cover period agreed before work starts. After that, support is optional, with no monthly minimum: each change is quoted and approved first. The code, the documentation and every account stay in your name, so another team or your own staff can take over at any point.',
    links: [{ href: '/au/website-maintenance', label: 'Store and website care in Australia' }] },
];

/* ─── JSON-LD ────────────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Ecommerce ERP Integration Australia',
      serviceType: 'Ecommerce and ERP integration: Shopify, Shopify Plus, WooCommerce, BigCommerce and Maropost stores joined to Xero, MYOB, QuickBooks, NetSuite, Odoo, Cin7 and Unleashed, with marketplace, payment and courier links',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'Australia' },
      url: CANONICAL,
      description:
        'FactoryJet connects Australian online stores to Xero, MYOB, NetSuite, Cin7, Unleashed or Odoo so orders, payouts, refunds and GST reach the books coded for BAS. Products, prices and stock go out to the store and marketplaces such as Amazon.com.au, eBay, Kogan and Bunnings Marketplace. Orders, customers, payouts from Shopify Payments, Stripe, Afterpay and Zip, refunds and GST come back, mapped to the right tax codes for BAS.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        item: c.url,
      })),
    },
    {
      '@type': ['WebPage', 'Article'],
      '@id': CANONICAL,
      url: CANONICAL,
      name: TITLE,
      headline: H1,
      description: DESCRIPTION,
      inLanguage: 'en-AU',
      datePublished: PUBLISHED,
      dateModified: UPDATED,
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['[data-speakable="true"]'] },
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
      publisher: { '@id': 'https://factoryjet.com/#organization' },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
      about: { '@id': `${CANONICAL}#service` },
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: FAQ_ITEMS.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL, languages: twinAlternates['ecommerce-erp-integration'] },
  openGraph: {
    title: TITLE,
    description:
      'Store to ERP links for Australian businesses on Xero, MYOB, NetSuite, Cin7, Unleashed or Odoo: one stock count across Shopify and marketplaces, payouts that clear, and GST that matches on every sale and refund.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'FactoryJet, ecommerce ERP integration for Australian businesses' }],
  },
  robots: { index: true, follow: true },
};

/* H1 split for the Family A hero emphasis. Same string as H1 (schema headline). */
const H1_EMPHASIS = 'GST Right on Every Order and Refund';
const H1_LEAD = H1.slice(0, H1.lastIndexOf(H1_EMPHASIS)).trimEnd();

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

const HERO_ICONS = [
  'M3 7h11v9H3V7Zm11 3h4l3 3v3h-7',
  'M5 3h14v18H5V3Zm3 4h8m-8 4h2m4 0h2m-8 4h2m4 0h2',
  'M4 4v16h16M8 16l4-5 3 3 5-6',
] as const;

/* The systems we connect, and what each one usually owns. */
const SYSTEMS: { n: string; t: string; d: string; icon: string }[] = [
  { n: '01', t: 'Xero', d: 'A ledger many Australian bookkeepers work in. It gets payout summaries or trade invoices, tax codes and clearing accounts. Xero suggests a limit of 4,000 tracked items, so bigger catalogues keep stock elsewhere.', icon: 'M5 3h14v18H5V3Zm3 4h8m-8 4h8m-8 4h5' },
  { n: '02', t: 'MYOB Business and MYOB Acumatica', d: 'MYOB Business links to Shopify through Amaka on a daily sync. MYOB Acumatica, the mid-market ERP, needs a connector or a custom link that respects its own item and tax setup.', icon: 'M4 6h16v12H4V6Zm0 4h16M8 14h3' },
  { n: '03', t: 'NetSuite', d: 'For groups with several entities, warehouses or trade price lists. NetSuite owns products, prices, customers and stock, and the store becomes a sales channel feeding it.', icon: 'M4 20h16M6 16V9m4 7V5m4 11v-6m4 6V8' },
  { n: '04', t: 'Cin7 Core (formerly DEAR) and Cin7 Omni', d: 'Inventory and order management between the store and Xero or QuickBooks. Cin7 Core pushes stock to Shopify on every change, so Cin7 is the master and Shopify keeps a copy.', icon: 'M3 7l9-4 9 4-9 4-9-4Zm0 5 9 4 9-4M3 17l9 4 9-4' },
  { n: '05', t: 'Unleashed', d: 'Inventory for makers and wholesalers with assemblies and batch tracking. Stock syncs to Shopify at intervals you set, and every variant must carry a SKU matching its product code.', icon: 'M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 3h7m-3.5-3.5v7' },
  { n: '06', t: 'Odoo and QuickBooks Online', d: 'Odoo’s Shopify Connector pulls orders every 10 minutes by default and pushes stock back after each pull. QuickBooks Online works for smaller back offices that already use it.', icon: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4v5l3 2' },
  { n: '07', t: 'Marketplaces', d: 'Amazon.com.au, eBay, Kogan, Bunnings Marketplace and THE ICONIC, drawing on one stock count and settling into their own clearing accounts so marketplace fees show up in margin.', icon: 'M3 9h18l-2 11H5L3 9Zm5 0V6a4 4 0 0 1 8 0v3' },
  { n: '08', t: 'Payments and couriers', d: 'Shopify Payments, Stripe, Afterpay, Zip and PayPal payouts matched to the bank feed. Australia Post, StarTrack and Sendle tracking written back to the order and the customer.', icon: 'M3 6h18v12H3V6Zm0 4h18M7 15h4' },
];

/* The owner map we propose on a scoping call. A starting point, not a rule. */
const OWNER_ROWS: { rec: string; owner: string; dir: string; note: string }[] = [
  { rec: 'Products and SKUs', owner: 'ERP or inventory system', dir: 'Out to store and marketplaces', note: 'One unique SKU per variant before anything syncs' },
  { rec: 'Retail and trade prices', owner: 'ERP', dir: 'Out to store', note: 'GST-inclusive retail, GST-exclusive trade price lists' },
  { rec: 'Stock on hand', owner: 'ERP or inventory system', dir: 'Out to every channel', note: 'Staff never edit stock in Shopify directly' },
  { rec: 'Orders', owner: 'Store or marketplace', dir: 'In to ERP', note: 'Tagged by channel so margin reports work' },
  { rec: 'Customers', owner: 'Shared', dir: 'Shoppers in, trade accounts out', note: 'Trade accounts carry ABN and payment terms' },
  { rec: 'Payouts and fees', owner: 'Payment provider', dir: 'In to accounting', note: 'One clearing account per provider' },
  { rec: 'Refunds and returns', owner: 'Store', dir: 'In to ERP and accounting', note: 'Same tax code as the original sale' },
  { rec: 'Tax codes', owner: 'Accounting system', dir: 'Mapped once, both ways', note: 'Taxable, GST-free and shipping lines' },
  { rec: 'Shipments and tracking', owner: 'ERP, 3PL or courier app', dir: 'In to store', note: 'Australia Post, StarTrack or Sendle numbers' },
];

/* Numbered project steps. Titles carry their number ("01 · Scoping call"). */
const STAGES: { t: string; d: string }[] = [
  { t: '01 · Scoping call or written brief', d: 'Thirty minutes with the founder, or your brief, RFP or field list by email. We learn which store, marketplaces, payment providers and back-office systems you run, where the retyping happens today and what your bookkeeper fixes before each BAS.' },
  { t: '02 · Owner map and tax code map', d: 'A written table of every record, the system that owns it and the direction it moves, plus a map from each store tax setting to a ledger tax code. You and your bookkeeper sign it off. Nothing is built until this is agreed.' },
  { t: '03 · Demo on your data', d: 'The link runs on your own products against test copies of your store and books. You choose the cases, and the FAQ below lists the ones we suggest. Nothing is signed until your bookkeeper is happy with what it posts.' },
  { t: '04 · Fixed price per phase', d: 'Each phase is scoped, priced and signed on its own, in writing. A typical split is the core order and stock link first, then payouts and refunds, then marketplaces or trade price lists.' },
  { t: '05 · Build, data clean-up and testing', d: 'We configure the connector or write the custom link, clean duplicate SKUs and old tax settings, then replay real orders from past weeks through test copies of both systems and compare the totals to your actual BAS figures.' },
  { t: '06 · Go-live at a period start', d: 'We switch on at the start of a BAS period where we can, so each quarter sits in one setup. For the first weeks we check clearing accounts and stock counts daily and fix anything that drifts.' },
  { t: '07 · Handover and optional support', d: 'Written documentation of every field, rule and account, code in a repository in your name, and defect cover agreed before work started. Ongoing support is optional, with each change quoted first.' },
];

/* Ready-made connectors, each row restating the maker's own page (SRC_* above). */
const CONNECTOR_ROWS: { c: string; sys: string; dir: string; freq: string; s: string; u: string }[] = [
  { c: 'Cin7 Core Shopify integration', sys: 'Cin7 Core and Shopify', dir: 'Stock from Cin7 Core to Shopify, never back', freq: 'On every stock change', s: 'Cin7 Core Help', u: SRC_CIN7_STOCK },
  { c: 'Unleashed Shopify integration', sys: 'Unleashed and Shopify', dir: 'Stock from Unleashed to Shopify', freq: 'At intervals you set', s: 'Unleashed Support', u: SRC_UNLEASHED },
  { c: 'Amaka (MYOB’s Shopify route)', sys: 'Shopify and MYOB Business', dir: 'Sales into MYOB, with bills for third-party fees', freq: 'Once a day', s: 'MYOB support', u: SRC_MYOB_SHOPIFY },
  { c: 'Odoo Shopify Connector', sys: 'Odoo and Shopify', dir: 'Orders into Odoo, stock back to Shopify', freq: 'Orders every 10 minutes by default', s: 'Odoo 19 documentation', u: SRC_ODOO },
  { c: 'NetSuite ERP Connector', sys: 'Oracle NetSuite and Shopify', dir: 'Products, prices, stock, sales orders and fulfilment synced', freq: 'Real-time options on some plans', s: 'Shopify App Store', u: SRC_NETSUITE_APP },
  { c: 'A2X for Xero', sys: 'Shopify and Xero', dir: 'One summary entry per payout into Xero', freq: 'Per payout period', s: 'A2X', u: SRC_A2X },
];

/* Related AU pages (routes verified in src/app/au and sitemap-au on 29 Oct 2026). */
const SIBLINGS: { href: string; t: string; d: string; go: string }[] = [
  { href: '/au/shopify-xero-integration', t: 'Shopify Xero integration Australia', d: 'The Shopify and Xero pairing on its own: payout summaries, tax codes and clearing accounts for each provider.', go: 'Explore Shopify and Xero →' },
  { href: '/au/woocommerce', t: 'WooCommerce development Australia', d: 'WooCommerce stores and trade portals, built to read stock and prices from the ERP behind them.', go: 'Explore WooCommerce →' },
  { href: '/au/b2b-ecommerce', t: 'B2B ecommerce Australia', d: 'Trade ordering with customer price lists, ABNs and payment terms pulled from your ERP.', go: 'Explore B2B ecommerce →' },
  { href: '/au/erp-ai-agents', t: 'ERP AI agents', d: 'Agents that read and update records in your ERP once the store link is in place.', go: 'Explore ERP agents →' },
  { href: '/au/shopify-development', t: 'Shopify development Australia', d: 'New stores, Shopify Plus, B2B and migrations, with Xero, MYOB and courier links built in from day one.', go: 'Explore Shopify →' },
  { href: '/au/ecommerce-development', t: 'Ecommerce development Australia', d: 'Choosing between Shopify, WooCommerce, BigCommerce and Maropost for a catalogue with an ERP behind it.', go: 'Explore ecommerce →' },
  { href: '/au/accounts-payable-automation', t: 'Accounts payable automation', d: 'The other side of the ledger: supplier invoices read, matched to purchase orders and routed for approval in Xero or MYOB.', go: 'Explore AP automation →' },
  { href: '/au/ai-agents', t: 'AI agents for Australian businesses', d: 'Once the records flow, agents that draft quotes, answer order questions and key purchase orders into your ERP.', go: 'Explore AI agents →' },
  { href: '/au/website-maintenance', t: 'Store and website care', d: 'Updates, fixes and monitoring for the store the integration feeds, quoted per change.', go: 'Explore care plans →' },
  { href: '/services/ecommerce-erp-integration', t: 'Ecommerce ERP integration (US guide)', d: 'Our wider guide to store and ERP links, including SAP Business One, ERPNext, EDI and Shopify API limits.', go: 'Read the US guide →' },
];

export default function EcommerceErpIntegrationAUPage() {
  return (
    <>
      <script id="ld-au-ecommerce-erp-integration" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SiteHeader locale="au" logoHref="/au" />
      <div className="aiAgentPage auPage auErpVisual">
      <nav className="crumbs" aria-label="Breadcrumb">
        <div className="wrap">
          {crumbs.map((item, index) => (
            <Fragment key={item.url}>
              {index > 0 && ' / '}
              {index === crumbs.length - 1 ? <b aria-current="page">{item.name}</b> : <a href={item.url}>{item.name}</a>}
            </Fragment>
          ))}
        </div>
      </nav>
      <main id="au-content">

        {/* ═══ HERO (copy + inline form left, spec panel right) ═══ */}
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Ecommerce ERP Integration Australia</div>
              <h1>{H1_LEAD} <span className="hero-emphasis">{H1_EMPHASIS}</span></h1>
              <p className="lead">
                Your store sells on Shopify, WooCommerce or BigCommerce, and maybe Amazon.com.au and Kogan too. Your
                books sit in Xero or MYOB, and stock lives in Cin7, Unleashed, NetSuite or Odoo. Somewhere in between,
                a person is retyping orders and fixing GST before every BAS. FactoryJet designs, builds and supports
                the link that ends that, and you own every line of it.
              </p>
              <HeroInlineForm
                region="au"
                source="au_ecommerce_erp_integration_hero"
                submitLabel="See a demo on my data"
                trustText="Working software on your own data before you sign. Founder replies within 24 hours."
                service="Ecommerce ERP Integration"
              />
            </div>

            <div className="specpanel" aria-label="What an ecommerce ERP integration from FactoryJet covers">
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>INCLUDED · WHAT THE LINK MOVES</span>
                <span className="sys"><span>XERO</span><span>MYOB</span><span>CIN7</span><span>NETSUITE</span></span>
              </div>
              <div className="specpanel-body">
                <div className="specrow run">
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[0]} /></svg></span>
                  <span className="idx">store, marketplaces, couriers</span>
                  <span className="title">One stock count on every channel</span>
                  <span className="tag">ERP owns it</span>
                </div>
                <div className="specrow run">
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[1]} /></svg></span>
                  <span className="idx">taxable, GST-free, shipping, refunds</span>
                  <span className="title">GST mapped to your tax codes</span>
                  <span className="tag">BAS-ready</span>
                </div>
                <div className="specrow hold">
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[2]} /></svg></span>
                  <span className="idx">Shopify Payments, Stripe, Afterpay, Zip</span>
                  <span className="title">Payouts that clear to zero</span>
                  <span className="tag">Reconciled</span>
                </div>
              </div>
              <div className="specpanel-foot">RULE · Every record has one owner, written down and signed off before we build.</div>
            </div>
          </div>
        </section>

        {/* ═══ LEDGER (verified facts only) ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: '$82.50', t: 'sales above this (inc GST) need a tax invoice within 28 days when the customer asks', s: 'ATO, Tax invoices', u: SRC_ATO_INVOICES },
              { v: '$75', t: 'GST adjustments above this need a valid adjustment note before you claim the decrease', s: 'ATO, Adjustment notes', u: SRC_ATO_ADJUST },
              { v: 'Daily', t: 'is how often MYOB Business syncs Shopify sales through Amaka, with third-party fee bills created for you', s: 'MYOB support', u: SRC_MYOB_SHOPIFY },
              { v: '10 min', t: 'default cycle for Odoo’s Shopify Connector to pull orders, with stock pushed back after each pull', s: 'Odoo 19 documentation', u: SRC_ODOO },
            ].map((r) => (
              <div className="ledgercell" key={r.t}>
                <div className="k"><a href={r.u} {...extLink}>{r.s}</a></div>
                <div className="v">
                  <strong className={/\d/.test(r.v) ? 'ledger-number' : 'ledger-word'}>{r.v}</strong>
                  {r.t}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="wrap byline">
          <div className="av">BB</div>
          <div className="who"><b><a href="/about">Bhavesh Barot</a></b>, Founder<br /><span>500+ businesses served since 2014</span></div>
          <div className="upd">Last updated<br />31 October 2026</div>
        </div>

        {/* ═══ ANSWER-FIRST DEFINITION (GEO) → Family A facts ═══ */}
        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <h2 data-speakable="true">What does ecommerce ERP integration do for an Australian business?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p data-speakable="true">
                    <span className="stat">Ecommerce ERP integration joins your online store to the system that runs your stock and accounts.</span>{' '}
                    For an Australian business that usually means Shopify, WooCommerce or BigCommerce on one side and
                    Xero, MYOB, NetSuite, Cin7, Unleashed or Odoo on the other. Stock and prices go out to the store and
                    marketplaces. Orders, payouts, refunds and GST come back, coded so your BAS reconciles without a
                    spreadsheet in the middle.
                  </p>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <div>
                    <div className="factlabel">Words on this page</div>
                    <p>
                      An <b>owner map</b> is a table saying which system is the source of truth for each record. A{' '}
                      <b>clearing account</b> stands in for one payment provider, such as Afterpay or Shopify Payments.
                      When the provider’s deposit lands in your bank, that account should read $0. A <b>tax code</b> is the label that tells your
                      ledger whether a line carries GST. A <b>SKU</b> (stock keeping unit) is the unique code for one product
                      variant. A <b>3PL</b> (third-party logistics provider) is an outside warehouse that packs and ships
                      orders for you. An <b>API call</b> is one request one system sends another, such as “give me
                      today’s orders”.
                    </p>
                  </div>
                </div>
                <div className="fact">
                  <div className="sec">§03</div>
                  <p>
                    If you take hundreds of orders a week across a store and two or three marketplaces, the strain shows
                    in two places. A bookkeeper spends days each quarter matching deposits, and stock is wrong often
                    enough that customers notice. The software exists. What is missing is someone who agrees the rules
                    first, builds the link, and stays accountable for it after launch.
                  </p>
                </div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">Signs the link is missing</div>
                <ul className="trigrows">
                  <li><span className="m">Orders retyped into Xero or MYOB</span><span className="t">Every day</span></li>
                  <li><span className="m">Bank deposits that never match a day of sales</span><span className="t">Every payout</span></li>
                  <li><span className="m">Overselling on Kogan or Amazon</span><span className="t">Every sale</span></li>
                  <li><span className="m">GST fixed by hand before lodging</span><span className="t">Every BAS</span></li>
                  <li><span className="m">Trade buyers asking for tax invoices</span><span className="t">Every week</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SYSTEMS → capgrid ═══ */}
        <section className="section capabilities" id="systems">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">The Australian stack</div>
              <h2>The systems we connect, and what each one should own</h2>
              <p className="lead">
                These are the eight groups of systems we connect for Australian stores. The pairing decides the route: Shopify to
                Xero through a payout app is a different job from Shopify to NetSuite with trade price lists and three
                warehouses.
              </p>
            </div>
            <div className="capgrid">
              {SYSTEMS.map((s, i) => (
                <div key={s.n} className={`cap cap-${i + 1}`}>
                  <div className="caphead"><span className="capid">SYS‑{s.n}</span><svg {...CAP_ICON}><path d={s.icon} /></svg></div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ GST ON ORDERS AND REFUNDS → facts + panel ═══ */}
        <section className="section facts" id="gst">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">GST on orders and refunds</div>
              <h2>Where GST goes wrong between a store and the books</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  <b>Mixed carts.</b> The ATO says a tax invoice covering taxable and non-taxable items must clearly show
                  which items are taxable. A store selling basic food, some medical aids or anything else GST-free next to
                  taxable lines needs every product carrying the right tax setting, and each setting mapped to a ledger
                  tax code. Get one wrong and it repeats on every order until someone notices at BAS time.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  <b>Refunds and returns.</b> A refund should reverse the exact GST that was charged, on the same tax code
                  and at the original amount. The ATO says you need a valid adjustment note before claiming a
                  decreasing adjustment unless the GST involved is $75 or less, so trade credits above that should come
                  out of the ERP with the note attached. We post an exchange as a refund plus a new sale, so each keeps its own GST.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  <b>Trade invoices and rounding.</b> Sales of $1,000 or more need the buyer’s identity or ABN on the
                  tax invoice, so trade accounts carry their ABN from the ERP into each order. The{' '}
                  <a href={SRC_ATO_INVOICES} {...extLink}>ATO’s tax invoice guidance</a> also allows two
                  rounding rules, and when the store and Xero pick different ones the GST drifts by cents. We choose one,
                  match both systems, and route any leftover cent to a rounding account.
                </p></div>
                <div className="fact"><div className="sec">§04</div><div>
                  <p>
                    <b>eInvoicing.</b> The <a href={SRC_ATO_INVOICES} {...extLink}>ATO says</a> Australia has adopted Peppol as its common eInvoicing standard. If
                    your larger trade customers ask for eInvoices, the order has to reach the ERP complete, with ABN,
                    purchase order number and tax per line, so the ERP can send it.
                  </p>
                  <p className="au-note">
                    Sources: <a href={SRC_ATO_INVOICES} {...extLink}>ATO, Tax invoices</a> and{' '}
                    <a href={SRC_ATO_ADJUST} {...extLink}>ATO, Adjustment notes</a>, both read 29 October 2026. We are not
                    tax agents. Your accountant signs off the tax code map before we build.
                  </p>
                </div></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">Every test run includes</div>
                <ul className="trigrows">
                  <li><span className="m">Taxable and GST-free lines in one cart</span><span className="t">Coded</span></li>
                  <li><span className="m">Discount code across mixed lines</span><span className="t">Split</span></li>
                  <li><span className="m">Shipping on a mixed cart</span><span className="t">Coded</span></li>
                  <li><span className="m">Partial refund</span><span className="t">Same code</span></li>
                  <li><span className="m">Trade order over $1,000</span><span className="t">ABN shown</span></li>
                  <li><span className="m">Payout with fees and a refund</span><span className="t">Clears to $0</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ OWNER MAP → table ═══ */}
        <section className="section comparison" id="owner-map">
          <div className="wrap">
            <div className="section-head head-split">
              <div className="eyebrow">The owner map</div>
              <div>
                <h2>Which system owns each record</h2>
                <p className="lead">
                  The usual fault in a broken integration is two systems that both think they own stock, or prices, or
                  customers. This is the starting map we put on the table at a scoping call. Your version
                  will differ, and it gets written down and signed before anything is built.
                </p>
              </div>
            </div>
            <p className="md:hidden tablenote">Swipe sideways to see every column.</p>
            <div className="tablewrap" role="region" tabIndex={0} aria-label="Owner map for an ecommerce ERP integration" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <table style={{ minWidth: 740 }}>
                <thead>
                  <tr>
                    <th>Record</th>
                    <th className="fj">Owner</th>
                    <th>Direction</th>
                    <th>Australian detail</th>
                  </tr>
                </thead>
                <tbody>
                  {OWNER_ROWS.map((r) => (
                    <tr key={r.rec}><th scope="row">{r.rec}</th><td className="fj">{r.owner}</td><td>{r.dir}</td><td>{r.note}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="tablenote">
              This is a starting point for discussion. Stores without an inventory system keep products and stock in
              Shopify and post to Xero or MYOB only.
            </p>
          </div>
        </section>

        <div className="au-midcta">
          <MidPageCTA
            headline={'Still retyping orders or fixing GST before each BAS?'}
            sub={'Tell us your store, your marketplaces and whether you run Xero, MYOB, Cin7, Unleashed, NetSuite or Odoo. On a short call the founder will tell you whether a ready-made connector covers it, or what a custom link would add.'}
            label={'See a demo on my data'}
          />
        </div>

        {/* ═══ CONNECTOR OR CUSTOM → facts + split ═══ */}
        <section className="section facts" id="connector-or-custom">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Connector or custom</div>
              <h2>Read the connector’s direction before you buy it</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Every ready-made connector makes a choice about which way data flows and how often. Cin7 Core’s help
                  centre says stock is always pushed from Cin7 Core to Shopify and never back. Unleashed syncs stock at
                  intervals you set. MYOB’s Shopify route through Amaka runs once a day. Odoo pulls orders every ten
                  minutes. None of those is wrong. Each one fits some stores and fails others.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  A connector is the right call when it moves each record the way your owner map says, often enough for
                  your stock, with your tax codes and at your volume. We set it up properly and stop there. A custom link
                  earns its cost when a check fails: trade price lists per customer, bundles that split into components,
                  allocation across several warehouses, or a marketplace the connector does not cover.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  Volume matters too. Xero’s developer guide lists 60 API calls a minute and 5,000 a day per organisation
                  on its higher tiers, and says Xero is designed for up to 5,000 sales invoices a month. A store posting
                  each order as its own invoice reaches those limits long before a store posting one summary per payout,
                  the way A2X does. We size the design to your order count before choosing.
                </p></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">What we check on any connector</div>
                <ul className="trigrows">
                  <li><span className="m">Direction for each record</span><span className="t">Matches map</span></li>
                  <li><span className="m">Sync schedule vs stock speed</span><span className="t">Fresh enough</span></li>
                  <li><span className="m">Tax code mapping</span><span className="t">Every code</span></li>
                  <li><span className="m">Refunds and partial refunds</span><span className="t">Reversed</span></li>
                  <li><span className="m">Order volume vs plan and API limits</span><span className="t">Headroom</span></li>
                  <li><span className="m">Marketplaces and 3PL</span><span className="t">Covered</span></li>
                </ul>
              </div>
            </div>
            <h3 style={{ marginTop: 40 }}>Ready-made connectors compared</h3>
            <p className="md:hidden tablenote">Swipe sideways to see every column.</p>
            <div className="tablewrap" role="region" tabIndex={0} aria-label="Ready-made ecommerce ERP connectors compared" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <table style={{ minWidth: 740 }}>
                <thead>
                  <tr>
                    <th>Connector</th>
                    <th>Systems</th>
                    <th>Direction</th>
                    <th>How often</th>
                    <th>Source</th>
                  </tr>
                </thead>
                <tbody>
                  {CONNECTOR_ROWS.map((r) => (
                    <tr key={r.c}><th scope="row">{r.c}</th><td>{r.sys}</td><td>{r.dir}</td><td>{r.freq}</td><td><a href={r.u} {...extLink}>{r.s}</a></td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="tablenote">
              Each row restates the maker’s own page, read 29 October 2026. Check the page again before you buy, because
              connector settings change.
            </p>
          </div>
        </section>

        {/* ═══ NUMBERED PROJECT STEPS → timeline ═══ */}
        <section className="section process" id="how-a-project-runs">
          <div className="wrap">
            <div className="section-head head-stack">
              <div className="eyebrow">How a project runs</div>
              <h2>Seven steps from first call to a link your bookkeeper trusts</h2>
              <p className="lead">
                Open each step to see what happens and what we need from you.
              </p>
            </div>
            <div className="timeline timeline-4">
              {STAGES.map((s) => {
                const [idx, title] = s.t.split(' · ');
                return (
                  <details key={s.t} className="tnode">
                    <summary>
                      <div className="idx">{idx}</div>
                      <h3>{title}<span className="chev" aria-hidden="true">+</span></h3>
                    </summary>
                    <p>{s.d}</p>
                  </details>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══ HOUSE TERMS + BRIEF ASK + WORK WE HAVE DONE → ruled rows ═══ */}
        <section className="section platforms" id="terms">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">How we work with you</div>
                <h2>What terms apply to an integration project?</h2>
              </div>
              <p>
                The code, the accounts and the data stay yours. These terms apply to every integration we build, whichever systems sit on each side.
              </p>
            </div>
            <div className="platlist" role="list">
              <div className="plat plat-2col" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>Demo before you sign</h3></div><p className="plat-build">Working software on your own data, with your bookkeeper checking the records it creates, before any contract.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>Fixed price per phase</h3></div><p className="plat-build">Each phase is scoped, priced and signed on its own, in writing. You can stop after any phase.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>Your code, your accounts</h3></div><p className="plat-build">The code and repository are yours from day one. Hosting, and any AI usage, can run in your own accounts at cost, with no markup from us.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">04</span><div className="plat-name"><h3>Defect cover in the build price</h3></div><p className="plat-build">Defects found after launch are fixed for a cover period agreed before work starts.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">05</span><div className="plat-name"><h3>No monthly minimum</h3></div><p className="plat-build">Support after launch is optional. Each change is quoted and approved before we do it.</p></div>
            </div>
            <div className="au-split">
              <div>
                <h3>Send us a brief or an RFP</h3>
                <p style={{ marginTop: 10 }}>
                  Already written a brief, an RFP or a field list? Send it through the form. The reply is a fixed price
                  per phase in writing, or a note that a ready-made connector covers it.
                </p>
                <ModalCTAButton label="Send my brief" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              </div>
              <div className="au-panel">
                <div className="eyebrow">Work we have done</div>
                <ul className="trigrows">
                  <li><span className="m"><a href="/case-studies/sow-easy-distributor-portal">Sow Easy</a></span><span className="n">a WooCommerce trade store reading stock, pricing and SKUs from Odoo, with trade ordering, being tested on staging</span><span className="t">Odoo</span></li>
                </ul>
                <p className="au-note">
                  A store to ERP link from our wider client work, shown for the platform match. Read the{' '}
                  <a href="/case-studies/sow-easy-distributor-portal">Sow Easy case study</a> for the full scope.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ COST → ruled rows + split ═══ */}
        <section className="section platforms" id="cost">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Cost, from published Australian ranges</div>
                <h2>What ecommerce ERP integration costs in Australia</h2>
              </div>
              <p>
                We do not publish our own prices, because two stores on the same pair of systems can differ several
                times over in effort. Here is what named Australian firms publish, and what moves the number.
              </p>
            </div>
            <div className="au-split">
              <div className="au-panel">
                <div className="eyebrow">Published AUD build ranges</div>
                <ul className="trigrows">
                  <li><span className="m">Typical integration, each</span><span className="n">Exodigital</span><span className="t">AUD $5,000 to $40,000</span></li>
                  <li><span className="m">Shopify or WooCommerce link</span><span className="n">Exodigital</span><span className="t">AUD $4,000 to $15,000</span></li>
                  <li><span className="m">Custom Shopify and ERP build</span><span className="n">Insiteful</span><span className="t">AUD $25,000 to $80,000</span></li>
                  <li><span className="m">Cin7 Omni implementation</span><span className="n">Insiteful</span><span className="t">AUD $15,000 to $40,000</span></li>
                  <li><span className="m">NetSuite implementation consulting</span><span className="n">Insiteful</span><span className="t">AUD $50,000 to $250,000</span></li>
                </ul>
                <p className="au-note">
                  Sources: <a href={SRC_EXODIGITAL} {...extLink}>Exodigital, ERP implementation cost in Australia</a> (May
                  2026) and <a href={SRC_INSITEFUL} {...extLink}>Insiteful, ERP to Shopify integration compared</a> (2026),
                  read 29 October 2026. Neither says whether GST is included. They are market estimates. FactoryJet
                  quotes its own price per project.
                </p>
              </div>
              <div>
                <h3>What moves the number</h3>
                <ul className="chg-list chg-list-1col">
                  <li><span><b>Route.</b> Configuring a proven connector costs less than writing a custom link.</span></li>
                  <li><span><b>Channels.</b> Each marketplace and payment provider adds mapping and testing.</span></li>
                  <li><span><b>Pricing rules.</b> Trade price lists, bundles and kits take the most design time.</span></li>
                  <li><span><b>Data state.</b> Duplicate SKUs and old tax settings must be cleaned before go-live.</span></li>
                  <li><span><b>Warehouses.</b> Several locations or a 3PL add allocation rules.</span></li>
                </ul>
                <p>
                  FactoryJet quotes a fixed price per phase in writing after a short scoping call or a written brief.
                </p>
                <ModalCTAButton label="Get a fixed-price scope" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══ AFTER LAUNCH → full-width head ═══ */}
        <section className="section platforms" id="after-launch">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">After launch</div>
              <h2>What happens after the integration goes live?</h2>
              <p className="lead">
                The integration nobody owns is the one that breaks. Connectors change their settings, and a store that
                grows past Xero’s 5,000 sales invoices a month needs a different posting design.
              </p>
              <p className="lead">
                The engineers who build your link support it. Support is optional and quoted per change.
              </p>
            </div>
            <div className="platlist" role="list">
              <div className="plat plat-2col" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>Watch</h3></div><p className="plat-build">Clearing accounts and stock counts checked daily in the first weeks after go-live, with failed records flagged to a person.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>Fix</h3></div><p className="plat-build">Defects fixed inside the build price for the agreed cover period, by the engineers who built the link.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>Extend</h3></div><p className="plat-build">A new marketplace, a second warehouse, Peppol eInvoices or an AI agent on top, each scoped and quoted on its own.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">04</span><div className="plat-name"><h3>Hand over</h3></div><p className="plat-build">Written documentation of every field and rule, with the code in a repository in your name, so another team can take over.</p></div>
            </div>
          </div>
        </section>

        {/* ═══ SIBLING SERVICES → agentdir ═══ */}
        <section className="section agentdir" id="more-services">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Related FactoryJet services</div>
              <h2>Which other services connect to your store and ERP?</h2>
            </div>
            <ul className="agentdir-grid">
              {SIBLINGS.map((s) => (
                <li key={s.href}>
                  <a href={s.href}>
                    <span className="agentdir-t">{s.t}</span>
                    <span className="agentdir-l">{s.d}</span>
                    <span className="agentdir-more">{s.go}</span>
                    <span className="agentdir-go" aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ FAQ (Family A accordion; same FAQ_ITEMS array as the FAQPage JSON-LD) ═══ */}
        <AuFaq
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          heading="Ecommerce ERP integration questions Australian businesses ask"
          askLabel="Still have a question? Ask the founder →"
          askNote="Replies within 24 hours."
        />

        {/* ═══ SOURCES → references ═══ */}
        <section className="section referencesSection references" id="references">
          <div className="wrap">
            <div className="eyebrow">Sources</div>
            <div className="refs">
              <a href={SRC_ATO_INVOICES} {...extLink}>ATO, Tax invoices</a>
              <a href={SRC_ATO_ADJUST} {...extLink}>ATO, Adjustment notes</a>
              <a href={SRC_XERO_LIMITS} {...extLink}>Xero Developer, API limits</a>
              <a href={SRC_MYOB_SHOPIFY} {...extLink}>MYOB, Connect Shopify to MYOB</a>
              <a href={SRC_CIN7_STOCK} {...extLink}>Cin7 Core, Stock levels in Shopify</a>
              <a href={SRC_UNLEASHED} {...extLink}>Unleashed, Shopify integration</a>
              <a href={SRC_NETSUITE_APP} {...extLink}>Shopify App Store, NetSuite ERP Connector</a>
              <a href={SRC_ODOO} {...extLink}>Odoo 19, Shopify Connector</a>
              <a href={SRC_A2X} {...extLink}>A2X, Xero</a>
              <a href={SRC_EXODIGITAL} {...extLink}>Exodigital, ERP cost in Australia</a>
              <a href={SRC_INSITEFUL} {...extLink}>Insiteful, ERP to Shopify compared</a>
            </div>
          </div>
        </section>

        {/* ═══ FINAL CTA (light) ═══ */}
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <div className="eyebrow">Ready when you are</div>
              <h2>Get a store and a set of books that agree with each other</h2>
              <p>
                Send your name and work email, or your brief. The founder replies within 24 hours to book a short call
                about your store, your systems and the right route for the link. No spam, no obligation.
              </p>
            </div>
            <div className="ctas">
              <ModalCTAButton label="See a demo on my data" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              <ModalCTAButton label="Send my brief" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-ghost" />
            </div>
          </div>
        </section>

      </main>
      </div>
      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}

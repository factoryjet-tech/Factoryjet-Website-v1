import type { Metadata } from 'next';
import { Fragment } from 'react';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import AuFaq from '../components/AuFaq';
import '@/components/v2/AiAgentDevelopmentSections.css';
import '../au-page.css';

/* /au/shopify-xero-integration, built 2026-10-29.

   Truth rules for anyone editing this file.
   1. Every third-party fact (ATO GST rules, Xero listing features, Xero API
      limits, Shopify payout and fee behaviour, Afterpay settlement, Cin7 Core
      and A2X behaviour, the Hatchet cost figure) was read on the owner's own
      page on 29 October 2026 and links to it through the SRC map below. ATO,
      Xero App Store, Xero Developer, Shopify Help and Cin7 Core pages were
      read in a real browser because they block or do not render for a plain
      fetch. Re-read the page before changing a claim.
   2. No FactoryJet price, no running or support cost figure. The only money
      figures are ATO thresholds and one sourced market range from a named
      Australian company (Hatchet, Perth).
   3. No client is named or described, and no partner status is claimed.
   4. Structure mirrors /au/shopify-development (components, props, CSS,
      metadata and schema shape). The copy is written fresh for Australia and
      shares no paragraph with /uk/shopify-xero-integration or the US
      /services/shopify-quickbooks-integration page.
   5. The FAQPage schema is generated from FAQ_ITEMS, the same array the
      visible FAQ renders. Never add a second list of questions. */

const CANONICAL = 'https://factoryjet.com/au/shopify-xero-integration';
const UPDATED = '2026-10-29';
const READ_ON = '29 October 2026';
const TITLE = 'Shopify Xero Integration Australia | GST & Payouts | FactoryJet';
const H1_LEAD = 'Shopify Xero Integration for Australian Sellers:';
const H1_EMPHASIS = 'GST, Payouts, Afterpay and Stock That Reconcile';
const H1 = `${H1_LEAD} ${H1_EMPHASIS}`;
const DESCRIPTION =
  'Shopify Xero integration for established Australian stores: GST mapped line by line, Shopify and Afterpay payouts cleared to the cent, stock owned by one system.';

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'Shopify Xero Integration', url: CANONICAL },
];

/* Sources, all read on 29 October 2026. One map feeds every inline note and
   the visible Sources list. */
const SRC = {
  // "Goods and services tax (GST) is a broad-based tax of 10% on most goods, services and other items
  // sold or consumed in Australia." Last updated 14 September 2026.
  atoGst: { label: 'ATO: How GST works', url: 'https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/how-gst-works' },
  // "a GST turnover (gross income from all businesses minus GST) of $75,000 or more (the GST threshold)".
  atoRegister: { label: 'ATO: Registering for GST', url: 'https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/registering-for-gst' },
  // "most basic food" and "exports" listed as GST-free; exported goods are GST-free "if they are exported
  // from Australia within 60 days" of payment or invoice, whichever occurs first.
  atoGstFree: { label: 'ATO: GST-free sales', url: 'https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/when-to-charge-gst-and-when-not-to/gst-free-sales' },
  // "you must provide one within 28 days, unless it is for a sale of $82.50 (including GST) or less";
  // "$1,000 or more also need to show the buyer's identity or ABN"; GST "exactly one-eleventh of the total
  // price". Last updated 18 September 2026.
  atoInvoices: { label: 'ATO: Tax invoices', url: 'https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/tax-invoices' },
  // Peppol network, "over 400,000 Australian businesses"; "eInvoicing is not a compliance or revenue
  // measure". Last updated 7 July 2026.
  atoEinvoicing: { label: 'ATO: About eInvoicing', url: 'https://www.ato.gov.au/businesses-and-organisations/einvoicing/about-einvoicing' },
  // "This integration is free on all Xero plans"; "Daily summary" for high-volume stores or "Per-sale
  // transactions"; Online Store and POS; tax mapping; "up to 90 days of historical data"; Amaka partnership.
  xeroApp: { label: 'Xero App Store AU: Shopify, by Xero', url: 'https://apps.xero.com/au/app/shopify' },
  // "Automatically match payouts from Shopify Payments and other gateways to your bank account".
  xeroShopify: { label: 'Xero AU: Integrate Shopify with Xero', url: 'https://www.xero.com/au/partnerships/shopify/' },
  // Concurrent 5, 60 calls per minute, 1,000 calls per day for starter, 5,000 for higher tiers.
  xeroLimits: { label: 'Xero Developer: API limits', url: 'https://developer.xero.com/documentation/guides/oauth2/limits/' },
  // "operating your business from ... Australia ... taxes are added on processing fees".
  shopifyFees: { label: 'Shopify Help: Shopify Payments payout fees', url: 'https://help.shopify.com/en/manual/payments/shopify-payments/payouts/pay-periods-and-fees' },
  // CSV "includes columns for Amount, Fee, and Net"; chargebacks and dispute fees deducted; bank may take
  // "1 to 3 business days" after Deposited.
  shopifyPayouts: { label: 'Shopify Help: lower or missing payouts', url: 'https://help.shopify.com/en/manual/payments/shopify-payments/payouts/lower-or-missing-payouts' },
  // Online: Afterpay pays "setting off amounts owed to us"; balance "typically up to five business days
  // following the date of the Afterpay purchase".
  afterpayFees: { label: 'Afterpay AU: merchant fees', url: 'https://www.afterpay.com/en-AU/business/afterpay-merchant-fees' },
  // "Cin7 Core does not support Xero inventory tracking. Turn off inventory tracking in Xero."
  cin7Xero: { label: 'Cin7 Core Help: Sync products with Xero', url: 'https://help.core.cin7.com/hc/en-us/articles/13000990556431-Sync-products-with-Xero' },
  // "A2X will create a Shopify payments entry every time you're paid out"; "A2X can create a COGS entry
  // in Xero"; plans depend on "Shopify order volume and desired functionality".
  a2x: { label: 'A2X: Shopify and Xero', url: 'https://www.a2xaccounting.com/integrations/shopify/xero' },
  // Hatchet (Perth), 8 Sep 2026, Matt Hare: "Each integration typically adds $5,000 to $20,000, depending
  // on the quality of the API and how much data mapping is involved." GST treatment not stated.
  hatchet: { label: 'Hatchet: custom software cost in Australia, 2026', url: 'https://hatchet.com.au/blog/how-much-does-custom-software-cost-in-australia-2026-guide/' },
} as const;

type SrcKey = keyof typeof SRC;
const SOURCE_KEYS = Object.keys(SRC) as SrcKey[];

/* FAQ source of truth (drives the visible FAQ and the FAQPage schema).
   Questions shaped by Google results, People Also Ask and related searches for
   "shopify xero integration" and "how to reconcile shopify payments in xero",
   Australia, 29 October 2026 (DataForSEO). */
const FAQ_CATEGORIES = [
  { key: 'basics', label: 'Connecting Shopify and Xero' },
  { key: 'gst', label: 'GST and tax invoices' },
  { key: 'payouts', label: 'Payouts, Afterpay and refunds' },
  { key: 'stock', label: 'Stock, MYOB and other systems' },
  { key: 'working', label: 'Cost and working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string; links?: { href: string; label: string }[] }[] = [
  // ── Connecting Shopify and Xero ──
  { category: 'basics', question: 'Does Shopify integrate with Xero in Australia?',
    answer: 'Yes. Xero lists its own Shopify integration on the Australian Xero App Store, and the listing says it is free on all Xero plans. It brings sales, payouts, fees and taxes across from the Shopify online store and Shopify POS. Connector apps such as A2X and Amaka cover the same ground with more posting choices. A custom link handles the rules neither has a setting for, such as trade invoices on terms or stock kept in another system.' },
  { category: 'basics', question: 'How do I connect Shopify to Xero?',
    answer: 'On the Xero App Store, select Get this app, log in to Xero, connect your Shopify store and follow the prompts. Settle three things with your bookkeeper before that click: daily summary or per-sale posting, which Xero accounts take sales, shipping, refunds and fees, and which Xero tax rate each Shopify tax maps to. Then sync a short period and check it against one real payout before you rely on it.' },
  { category: 'basics', question: 'Should we post a daily summary or every Shopify order to Xero?',
    answer: 'For retail volume, a daily summary. Xero’s listing suggests it for high-volume stores to keep the file clean. Per-sale posting brings customer and line-item detail into Xero, which suits trade accounts you invoice and chase by name. Plenty of established sellers run both: retail orders as one summary a day, wholesale orders as individual invoices with payment terms and the buyer’s ABN.' },
  { category: 'basics', question: 'How much Shopify history can the Xero integration bring across?',
    answer: 'Xero’s listing says it can sync up to 90 days of historical data. That covers one quarter, roughly a BAS period, but not a financial year. If you are catching up further back, or moving from MYOB or spreadsheets part way through the year, agree a cut-over date with your accountant and bring older periods in as journals, so no sale is counted twice.' },
  { category: 'basics', question: 'Is Xero’s free Shopify integration enough for a larger store?',
    answer: 'For plain retail sales it often is. It strains when a store has several payment gateways, GST-free and taxable items in the same cart, more than one Shopify store, marketplace sales, or stock held in Cin7 Core, Unleashed or an ERP. Those are rule problems, and order count has little to do with them. The extra rules live in a connector app or a custom link.' },

  // ── GST and tax invoices ──
  { category: 'gst', question: 'How does GST on Shopify sales show up in Xero?',
    answer: 'The ATO describes GST as a 10% tax on most goods sold in Australia, and Australian Shopify prices are normally shown GST-inclusive. When a total includes GST, the GST is one-eleventh of it. Each Shopify tax has to map to the matching Xero tax rate, so taxable lines land under a GST rate and GST-free lines under a GST-free rate. Get that mapping right once and the BAS figures come straight out of Xero.' },
  { category: 'gst', question: 'When does an online store have to register for GST?',
    answer: 'The ATO says you must register once your GST turnover reaches $75,000, or when you start a business and expect to reach that figure. Turnover here means gross income minus GST. The stores we build for are well past that line, so their question is how GST appears in Xero. Your tax agent should confirm your own position, including any branches or GST groups.' },
  { category: 'gst', question: 'What happens when one cart has GST-free and taxable items?',
    answer: 'The ATO lists most basic food among GST-free items, so a pantry, health or gift store can sell both kinds in one order. Shopify has to tax each line on its own, and the sync has to carry two tax amounts into Xero. A summary that posts the whole day at one rate overstates or understates the GST on your BAS. We test mixed carts before any link goes live.' },
  { category: 'gst', question: 'Do orders shipped to New Zealand or overseas include GST?',
    answer: 'The ATO says exported goods are GST-free if they leave Australia within 60 days of the payment or the invoice, whichever comes first. So an order shipped from your Australian warehouse to Auckland needs a different tax setting in Shopify and its own tax rate in Xero. Ask your tax agent about edge cases such as goods collected here by an overseas buyer.' },
  { category: 'gst', question: 'Does Shopify charge GST on its own fees?',
    answer: 'Shopify Help says that when you use Shopify Payments and operate from Australia, taxes are added on processing fees, and the tax detail sits on the Payouts page. So each payout’s fees should reach Xero as an expense with its GST shown. A sync that posts a single net payout figure hides those fees and the GST inside them, which makes the BAS harder for your bookkeeper.' },
  { category: 'gst', question: 'Can wholesale orders reach Xero as proper tax invoices?',
    answer: 'Yes, and they should. The ATO says that if a customer asks for a tax invoice you must provide one within 28 days, unless the sale is $82.50 including GST or less, and that invoices of $1,000 or more must show the buyer’s identity or ABN. A Shopify order email does not always carry that. A custom link can raise the Xero invoice with the trade buyer’s details from the customer record.' },
  { category: 'gst', question: 'Do we need Peppol eInvoicing for trade customers?',
    answer: 'Only if your buyers ask for it. The ATO describes eInvoicing as the exchange of invoices between suppliers’ and buyers’ software over the Peppol network, which it says connects over 400,000 Australian businesses, and it states eInvoicing is not a compliance or revenue measure. Large retailers and government buyers are the usual askers. When they do, the invoice should be raised in Xero rather than sent as a Shopify receipt.' },

  // ── Payouts, Afterpay and refunds ──
  { category: 'payouts', question: 'Why does our Shopify payout never match the day’s sales?',
    answer: 'Because a payout is a net figure. Shopify Help says the payout export lists Amount, Fee and Net for each transaction, and that chargebacks, dispute fees and adjustments come out of it, often across several days of orders. Record gross sales, fees and refunds separately through a clearing account in Xero, and let the payout clear that account when it lands in your bank feed.' },
  { category: 'payouts', question: 'How do we reconcile Afterpay sales in Xero?',
    answer: 'Treat Afterpay as its own payment channel. Afterpay says that for online sales it pays you after setting off what you owe it, including its fee, typically up to five business days after the purchase. So the sale belongs on the order date, the deposit arrives later as a separate bank line, and the fee is an expense. A dedicated Afterpay clearing account in Xero keeps those three pieces matched. Zip and PayPal need the same treatment.' },
  { category: 'payouts', question: 'What happens to refunds and chargebacks in Xero?',
    answer: 'A refund issued after a payout has gone out comes off a later payout, and Shopify Help says chargebacks take the payment amount plus any dispute fee from your account. Post refunds against the same tax rate as the original sale so the GST reverses, and post chargeback fees as an expense. If the sync cannot tell a refund from a fee, the clearing account never reaches zero.' },
  { category: 'payouts', question: 'Can one Xero file handle several Shopify stores and marketplaces?',
    answer: 'Yes, with care. Each Shopify store has its own payouts, and each marketplace, whether Amazon.com.au, eBay, Kogan, Bunnings Marketplace or THE ICONIC, settles on its own terms with its own fees. Give every channel its own clearing account and a channel tag on its sales, so you can see margin by channel and reconcile each settlement separately. A custom link is often the simplest way to keep those streams apart.' },

  // ── Stock, MYOB and other systems ──
  { category: 'stock', question: 'Should stock live in Shopify, Xero or our inventory system?',
    answer: 'In one of them, never two. Cin7 Core’s help centre asks you to switch off Xero inventory tracking, because Cin7 Core will not work with it. Many Australian sellers run Cin7 Core or Unleashed for stock, so Xero receives the financial entries and Shopify receives the available quantity. We write down which system owns stock, prices and product data before anything is connected.' },
  { category: 'stock', question: 'How does cost of goods sold get into Xero from Shopify?',
    answer: 'It has to come from wherever your unit costs live. A2X says it can post a cost of goods sold entry to Xero from SKU costs you upload. Cin7 Core and Unleashed carry cost from purchasing. A custom link can read cost from your inventory system or ERP. Without a cost entry, Xero shows sales but not gross margin, and stock on the balance sheet drifts.' },
  { category: 'stock', question: 'Can you connect Shopify to MYOB instead of Xero?',
    answer: 'Yes. We connect Shopify to MYOB Business and MYOB Acumatica as well as Xero and QuickBooks Online. The scoping questions are the same: summary or per-order posting, GST mapping, one clearing account per gateway, refunds against the original tax rate, and one owner for stock. If you are choosing between Xero and MYOB at the same time, your bookkeeper’s preference should weigh heavily.' },
  { category: 'stock', question: 'We run NetSuite or Odoo. Where does Xero fit?',
    answer: 'If NetSuite or Odoo already holds your general ledger, Shopify should post there and Xero usually drops out of the order flow. Where a group keeps Xero for one entity and an ERP for another, each Shopify store posts to the books of the entity that sells. Either way the posting rules are the same, and we agree them with your finance team first.' },

  // ── Cost and working with us ──
  { category: 'working', question: 'How much does a Shopify Xero integration cost in Australia?',
    answer: 'Xero’s own integration is free on all Xero plans, per its listing. Connector apps charge by volume: A2X says its plans depend on Shopify order volume and features. For custom work, Hatchet, a Perth software company and Xero Development Partner, wrote in September 2026 that each integration typically adds $5,000 to $20,000 to a build; the article does not say whether GST is included. FactoryJet quotes a fixed price in writing after a short scoping call.',
    links: [{ href: '/au/shopify-development', label: 'Shopify development in Australia' }] },
  { category: 'working', question: 'When is a custom Shopify Xero link worth paying for?',
    answer: 'When your rules have no setting in an app: trade invoices with the buyer’s ABN, stock held in Cin7 Core or an ERP, several entities, marketplace settlements or bundles that must post as their parts. Volume matters too. Xero Developer limits each organisation to 60 API calls a minute, five at a time, and 1,000 a day on the starter tier, so a big sale day needs queued, batched writes.' },
  { category: 'working', question: 'Who owns the integration once it is built?',
    answer: 'You do. The code and the repository are yours from day one, and the link can run in your own hosting and Xero accounts, at cost with no markup. Defects are fixed inside the build price for a cover period we agree before work starts. Support after that is optional: each change is quoted and approved, and there is no monthly minimum.' },
  { category: 'working', question: 'What should our brief or RFP include?',
    answer: 'The systems you run (Shopify plan, Xero or MYOB, inventory system, 3PL), monthly order volume, every payment gateway, the sales channels and marketplaces, the number of entities, which products are GST-free, and what goes wrong at month end today. Name your bookkeeper or accountant too. A one-page brief is enough. The second step of the form on this page takes a PDF or Word file.' },
  { category: 'working', question: 'How do we get started?',
    answer: 'Leave your name and work email in the form on this page. Within 24 hours Bhavesh Barot, the founder, writes back to set up a call. We look at one recent month of payouts against your Xero file, then show you the link working on a copy of your own data before you sign anything. We work with Australian businesses remotely and schedule calls in Australian business hours.' },
];

/* Where Shopify and Xero disagree: the six problems the link exists to fix. */
const GAPS: { n: string; t: string; d: string; src?: SrcKey }[] = [
  { n: '01', t: 'Payouts are net, sales are gross', d: 'A Shopify Payments payout is sales minus fees, refunds and chargebacks, batched across days. Matching the deposit straight to income understates both sales and costs.', src: 'shopifyPayouts' },
  { n: '02', t: 'Shopify’s fees carry tax', d: 'For Australian businesses on Shopify Payments, Shopify adds tax to processing fees. Those fees belong in Xero as expenses with their GST visible, not netted off.', src: 'shopifyFees' },
  { n: '03', t: 'Afterpay pays on its own clock', d: 'Afterpay sets off its fee and pays online sales typically up to five business days later, as a separate bank line. Zip and PayPal behave the same way: separate deposits, separate fees.', src: 'afterpayFees' },
  { n: '04', t: 'GST-free lines hide in taxable carts', d: 'Basic food and exports are GST-free under ATO rules. A day of sales posted at one rate misstates the BAS the moment a cart mixes the two.', src: 'atoGstFree' },
  { n: '05', t: 'Two systems both think they own stock', d: 'Cin7 Core asks you to turn off Xero inventory tracking. When Shopify, Xero and an inventory tool all count stock, the counts and the balance sheet drift apart.', src: 'cin7Xero' },
  { n: '06', t: 'Trade orders need real tax invoices', d: 'For sales of $1,000 or more the ATO requires the buyer’s identity or ABN on the tax invoice. A retail-style daily summary cannot produce one for a stockist.', src: 'atoInvoices' },
];

/* Numbered project steps. */
const STEPS: { t: string; d: string }[] = [
  { t: '01 · Scoping call and a books check', d: 'A short call with the founder, then we read one recent month of Shopify, Afterpay and marketplace payouts against your Xero file and list every line that does not reconcile. You leave knowing which route fits: Xero’s own integration, a connector app, or a custom link.' },
  { t: '02 · Posting rules on one page', d: 'Accounts for sales, shipping, discounts, refunds and fees; a Xero tax rate for every Shopify tax; one clearing account per gateway; summary or per-order posting; one owner for stock and cost. Your bookkeeper signs it off before any build starts, and each phase gets its own fixed price.' },
  { t: '03 · A demo on your own data', d: 'We run last month’s orders through the link into a test copy of your books and show you the result before you sign: payouts cleared, GST split, Afterpay matched. If it does not reconcile on your data, you have lost nothing.' },
  { t: '04 · Build and the awkward cases', d: 'Mixed GST carts, orders to New Zealand, partial refunds after a payout, chargebacks, Afterpay refunds, bundles, gift cards and a sale-day burst that has to queue inside Xero’s API limits. We test every case on purpose before go-live.' },
  { t: '05 · Parallel month and cut-over', d: 'The new link runs beside your current method for a full month and the two are compared to the cent. Your accountant picks the cut-over date, so no order posts twice and no period is missed.' },
  { t: '06 · Handover and support', d: 'Written posting rules, a run book for month end, the code in your repository and the link in your accounts. Defects inside the agreed cover period are fixed in the build price. After that, support is optional and quoted per change.' },
];

/* House terms (approved wording, 16 Oct 2026). */
const TERMS: { n: string; t: string; d: string }[] = [
  { n: '01', t: 'Demo before you sign', d: 'Working software on your own data before you sign. You see your payouts clear in a test copy of your books first.' },
  { n: '02', t: 'Fixed price per phase', d: 'Each phase is scoped, priced and signed on its own. We quote the build, and any support you choose, as fixed prices in writing.' },
  { n: '03', t: 'Defect cover in the build price', d: 'Defects are fixed inside the build price for a cover period we agree before work starts.' },
  { n: '04', t: 'You own it from day one', d: 'The code and repository are yours. Hosting and any API services can run in your own accounts, at cost, with no markup.' },
  { n: '05', t: 'Support is optional', d: 'Each change is quoted and approved before we start. No monthly minimum.' },
];

const SIBLINGS: { href: string; t: string; d: string; go: string }[] = [
  { href: '/au/shopify-development', t: 'Shopify development Australia', d: 'New stores, Shopify Plus, B2B and migrations, with Afterpay, Zip, Australia Post and accounting connected from launch.', go: 'Explore Shopify →' },
  { href: '/au/ecommerce-development', t: 'Ecommerce development Australia', d: 'Platform choice and builds for stores that sell retail, wholesale and through marketplaces.', go: 'Explore ecommerce →' },
  { href: '/au/accounts-payable-automation', t: 'Accounts payable automation', d: 'The other side of the books: supplier invoices read into Xero or MYOB, matched to purchase orders and routed for approval.', go: 'Explore AP automation →' },
  { href: '/au/ai-agents', t: 'AI agents for Australian businesses', d: 'Agents we build to answer order questions, chase exceptions and update records across Shopify and your back office.', go: 'Explore AI agents →' },
  { href: '/au/website-maintenance', t: 'Website and store maintenance', d: 'Ongoing care for the store and the integrations behind it, quoted per change.', go: 'Explore maintenance →' },
  { href: '/services/shopify-quickbooks-integration', t: 'Shopify QuickBooks integration (US)', d: 'The same posting problems for stores whose books run on QuickBooks Online or QuickBooks Enterprise.', go: 'See the QuickBooks route →' },
];

/* ─── JSON-LD ────────────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Shopify Xero Integration Australia',
      serviceType: 'Shopify to Xero accounting integration, payout reconciliation, GST mapping and inventory integration',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'Australia' },
      url: CANONICAL,
      description:
        'Shopify to Xero integration for Australian sellers: GST mapped per line, Shopify Payments, Afterpay, Zip and PayPal payouts cleared through their own clearing accounts, refunds and chargebacks posted against the original tax rate, wholesale tax invoices, marketplace settlements, and stock owned by one system such as Cin7 Core, Unleashed, NetSuite or MYOB Acumatica.',
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
      datePublished: '2026-10-29',
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
  alternates: { canonical: CANONICAL, languages: { 'en-AU': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: TITLE,
    description:
      'Shopify to Xero for Australian sellers: GST split per line, Shopify Payments and Afterpay payouts cleared to the cent, trade tax invoices, and one owner for stock. Demo on your own data before you sign.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

/* Hero spec-panel icons (GST, payouts, stock). */
const HERO_ICONS = [
  'M6 3h12v18l-3-2-3 2-3-2-3 2V3Zm3 5h6m-6 4h6',
  'M3 6h18v12H3V6Zm0 4h18M7 15h4',
  'M4 7l8-4 8 4v10l-8 4-8-4V7Zm0 0 8 4 8-4M12 11v10',
] as const;

/* Icons for the six gap cards (same order as GAPS). */
const GAP_ICONS = [
  'M3 6h18v12H3V6Zm0 4h18M7 15h4',
  'M6 3h12v18l-3-2-3 2-3-2-3 2V3Zm3 5h6m-6 4h6',
  'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4v5l3 2',
  'M4 19h16M7 16V9m5 7V5m5 11v-4',
  'M4 7l8-4 8 4v10l-8 4-8-4V7Zm0 0 8 4 8-4M12 11v10',
  'M5 3h14v18H5V3Zm3 4h8m-8 4h2m4 0h2m-8 4h2m4 0h2',
] as const;

export default function ShopifyXeroIntegrationAUPage() {
  return (
    <>
      <script id="ld-au-shopify-xero-integration" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SiteHeader locale="au" logoHref="/au" />
      <div className="aiAgentPage auPage">
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
              <div className="eyebrow">Shopify Xero Integration Australia</div>
              <h1>{H1_LEAD} <span className="hero-emphasis">{H1_EMPHASIS}</span></h1>
              <p className="lead">
                You sell on Shopify, your books are in Xero, and month end still means a spreadsheet. Shopify
                Payments, Afterpay, Zip and PayPal each pay on their own schedule, GST-free lines sit in taxable
                carts, and Cin7 Core or Unleashed disagrees with Xero about stock. We connect Shopify to Xero (or
                MYOB) so every payout clears to the cent and your bookkeeper signs off the BAS without rework.
              </p>
              <HeroInlineForm region="au" source="au_shopify_xero_integration_hero" submitLabel="See it on my data" />
            </div>

            <form
              className="specpanel"
              aria-label="What a FactoryJet Shopify Xero integration reconciles"
            >
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>RECONCILED · WHAT THE LINK FIXES</span>
                <span className="sys"><span>Shopify</span><span>Xero or MYOB</span></span>
              </div>
              <div className="workflow-controls">
                <label className="workflow-toggle" title="Pause or resume the animation">
                  <input type="checkbox" className="workflow-pause" aria-label="Pause animation" />
                  <svg className="pause-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path d="M5 3v10M11 3v10" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
                  <svg className="play-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path d="m5 3 8 5-8 5Z" fill="currentColor" /></svg>
                </label>
                <button type="reset" className="workflow-replay" aria-label="Replay animation" title="Replay animation">
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6a5 5 0 1 1 0 4M3 2v4h4" /></svg>
                </button>
              </div>
              <div className="specpanel-body" role="radiogroup" aria-label="Explore what the link reconciles">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="shopify-xero-au-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[0]} /></svg></span>
                  <span className="idx">taxable, GST-free and export lines</span>
                  <span className="title">GST mapped per line, ready for the BAS</span>
                  <span className="tag">GST</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="shopify-xero-au-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[1]} /></svg></span>
                  <span className="idx">Shopify Payments, Afterpay, Zip, PayPal</span>
                  <span className="title">One clearing account per gateway</span>
                  <span className="tag">Payouts</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="shopify-xero-au-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[2]} /></svg></span>
                  <span className="idx">Cin7 Core, Unleashed, NetSuite or Shopify</span>
                  <span className="title">One system owns stock and cost</span>
                  <span className="tag">Stock</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · Working software on your own data before you sign. Founder replies within 24 hours.</div>
            </form>
          </div>
        </section>

        {/* ═══ LEDGER (verified facts only) ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: '10%', t: 'GST on most goods sold in Australia, with GST-free exceptions such as most basic food and exports', s: 'ATO, How GST works', u: SRC.atoGst.url },
              { v: '$75,000', t: 'GST turnover at which a business must register for GST', s: 'ATO, Registering for GST', u: SRC.atoRegister.url },
              { v: 'Taxed fees', t: 'Shopify adds tax to Shopify Payments processing fees for businesses operating from Australia', s: 'Shopify Help Center', u: SRC.shopifyFees.url },
              { v: '5 days', t: 'Afterpay typically pays online sales up to five business days after purchase, after setting off its fee', s: 'Afterpay, merchant fees', u: SRC.afterpayFees.url },
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
          <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
          <div className="upd">Last updated<br />29 October 2026</div>
        </div>

        {/* ═══ ANSWER-FIRST DEFINITION (GEO) ═══ */}
        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <h2 data-speakable="true">What a Shopify Xero integration has to get right for an Australian seller</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p data-speakable="true">
                    <span className="stat">A Shopify Xero integration moves every sale, refund, fee and payout from Shopify into Xero so the bank feed reconciles without manual journals.</span>{' '}
                    For an Australian store that means three things: each line carries the right GST treatment for the
                    BAS, each payment gateway clears through its own account, and one system, and only one, owns stock.
                  </p>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <div>
                    <div className="factlabel">Three terms we use on this page</div>
                    <p>
                      A <b>payout</b> is the deposit Shopify or Afterpay sends to your bank, after fees and refunds. A{' '}
                      <b>clearing account</b> is a parking spot in Xero: gross sales go in, the payout comes out,
                      and the balance should drop to zero once each payout lands. The <b>BAS</b> (business activity statement) is
                      the form you lodge with the ATO to report the GST you collected and paid.
                    </p>
                  </div>
                </div>
                <div className="fact">
                  <div className="sec">§03</div>
                  <p>
                    Xero already offers a free Shopify integration on all plans. It handles plain retail well. This page
                    is for the businesses it does not fully fit: established sellers with a bookkeeper or finance team,
                    several payment gateways, a wholesale channel, marketplace sales or an inventory system. Those are
                    the stores where a month end still takes two days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ WHERE THE TWO SYSTEMS DISAGREE → capgrid ═══ */}
        <section className="section capabilities" id="gaps">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Why the numbers drift</div>
              <h2>Six places Shopify and Xero disagree in an Australian store</h2>
              <p className="lead">
                None of these show up on a quiet Tuesday. They show up at BAS time, when the clearing account will
                not reach zero and nobody can say which payout holds the difference.
              </p>
            </div>
            <div className="capgrid">
              {GAPS.map((g, i) => (
                <div key={g.n} className={`cap cap-${i + 1}`}>
                  <div className="caphead"><span className="capid">GAP‑{g.n}</span><svg {...CAP_ICON}><path d={GAP_ICONS[i]} /></svg></div>
                  <h3>{g.t}</h3>
                  <p>
                    {g.d}
                    {g.src ? <> Source: <a href={SRC[g.src].url} {...extLink}>{SRC[g.src].label}</a>.</> : null}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ THREE ROUTES → comparison table ═══ */}
        <section className="section comparison" id="routes">
          <div className="wrap">
            <div className="section-head head-split">
              <div className="eyebrow">Apps or a custom link</div>
              <div>
                <h2>Xero’s own integration, a connector app, or a custom link</h2>
                <p className="lead">
                  Start with the cheapest route that matches your rules. We recommend Xero’s own integration when it
                  fits, and we say so on the first call.
                </p>
              </div>
            </div>
            <div className="tablewrap" role="region" tabIndex={0} aria-label="Shopify Xero integration routes compared">
              <table>
                <thead>
                  <tr>
                    <th>What you need</th>
                    <th>Xero’s own Shopify integration</th>
                    <th>Connector app (A2X, Amaka)</th>
                    <th className="fj">Custom link (FactoryJet)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th scope="row">Price</th><td>Free on all Xero plans</td><td>Monthly, by order volume</td><td className="fj">Fixed build price, quoted in writing</td></tr>
                  <tr><th scope="row">Posting format</th><td>Daily summary or per-sale</td><td>Summary per payout, other formats by app</td><td className="fj">Whatever your bookkeeper signs off, per channel</td></tr>
                  <tr><th scope="row">Shopify tax to Xero tax rate</th><td>Mapped in settings</td><td>Rules per transaction type</td><td className="fj">Per line, including GST-free and export</td></tr>
                  <tr><th scope="row">Afterpay, Zip, PayPal deposits</th><td>Gateways matched to the bank</td><td>Depends on the app</td><td className="fj">Own clearing account each, fees split out</td></tr>
                  <tr><th scope="row">History brought across</th><td>Up to 90 days</td><td>Depends on the app and plan</td><td className="fj">As far back as your accountant needs</td></tr>
                  <tr><th scope="row">Cost of goods sold</th><td>Not described on the listing</td><td>A2X posts a COGS entry from SKU costs</td><td className="fj">From your inventory system or ERP</td></tr>
                  <tr><th scope="row">Trade invoices with buyer ABN</th><td>Not described on the listing</td><td>Check the app’s settings</td><td className="fj">Raised in Xero on payment terms</td></tr>
                  <tr><th scope="row">Marketplaces and several stores</th><td>Shopify Online Store and POS</td><td>Depends on the app</td><td className="fj">Each settlement reconciled on its own</td></tr>
                  <tr><th scope="row">Who fixes it when it breaks</th><td>Xero and Amaka support</td><td>The app’s support desk</td><td className="fj">The engineers who built it</td></tr>
                </tbody>
              </table>
            </div>
            <p className="tablenote">
              Xero column from the <a href={SRC.xeroApp.url} {...extLink}>Xero App Store AU listing</a> and{' '}
              <a href={SRC.xeroShopify.url} {...extLink}>Xero’s Australian Shopify page</a>; A2X from{' '}
              <a href={SRC.a2x.url} {...extLink}>A2X’s Shopify and Xero page</a>. Read on {READ_ON}. Features change, so
              check the listing before you choose.
            </p>
            <div className="au-split">
              <div>
                <h3>When Xero’s own integration is the right answer</h3>
                <p>
                  One Shopify store, Shopify Payments plus maybe PayPal, all products taxable, stock counted in Shopify,
                  and no trade accounts. Set it up with your bookkeeper, choose daily summaries, map the taxes, and
                  check one payout by hand. You may never need us, and that is a fine outcome of a first call.
                </p>
              </div>
              <div>
                <h3>When a custom link pays for itself</h3>
                <p>
                  Stockists on 30-day terms who need tax invoices with their ABN. Stock in Cin7 Core or Unleashed.
                  Amazon.com.au, eBay, Kogan, Bunnings Marketplace or THE ICONIC alongside Shopify. Two entities, or an
                  Australian and a New Zealand store. Bundles that must post as their parts. Each of those is a rule to
                  test against any app before you buy it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ PAYOUTS, AFTERPAY AND FEES → facts + panel ═══ */}
        <section className="section facts" id="payouts">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Payouts and gateways</div>
              <h2>How a Shopify payout, an Afterpay settlement and a fee each reach Xero</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Shopify Help says the export for each payout lists Amount, Fee and Net per transaction, and that
                  chargebacks, dispute fees and adjustments are taken out of it. Once Shopify marks a payout as
                  Deposited, your bank can take another 1 to 3 business days to show it. So the deposit in your bank
                  feed is a net figure that belongs to several days of orders, and matching it straight to income
                  hides your fees.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  Afterpay runs separately. For online sales it pays the purchase amount after setting off what you
                  owe it under your merchant agreement, including its fee, and Afterpay says that balance typically
                  arrives up to five business days after the purchase. A Friday Afterpay order can therefore land in
                  the next week’s bank feed, in a different BAS period if it falls on the last day of a quarter.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  The fix is the same for every gateway. Gross sales and GST go into a clearing account on the order
                  date. Fees go out of it as an expense, with the tax Shopify adds to its processing fees shown
                  separately. Refunds go out against the original tax rate. The deposit clears what is left. When every
                  clearing account is at zero, the month is reconciled.
                </p></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">One clearing account each</div>
                <ul className="trigrows">
                  <li><span className="m">Shopify Payments</span><span className="n">batched, net of fees and chargebacks</span><span className="t">Clearing 1</span></li>
                  <li><span className="m">Afterpay</span><span className="n">separate deposit, fee set off</span><span className="t">Clearing 2</span></li>
                  <li><span className="m">Zip</span><span className="n">pays you separately</span><span className="t">Clearing 3</span></li>
                  <li><span className="m">PayPal</span><span className="n">pays you separately</span><span className="t">Clearing 4</span></li>
                  <li><span className="m">Each marketplace</span><span className="n">own settlement and fees</span><span className="t">Clearing 5+</span></li>
                </ul>
                <p className="au-note">
                  Sources: <a href={SRC.shopifyPayouts.url} {...extLink}>Shopify Help, payouts</a>,{' '}
                  <a href={SRC.shopifyFees.url} {...extLink}>Shopify Help, payout fees</a>,{' '}
                  <a href={SRC.afterpayFees.url} {...extLink}>Afterpay, merchant fees</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="au-midcta">
          <MidPageCTA
            headline={'Send us one month of payouts. We will show you where the gap is.'}
            sub={'Tell us your gateways, your channels and where stock lives. On a short call the founder will tell you whether Xero’s own integration is enough, which connector fits, or whether a custom link is worth it, and you can attach a brief or RFP after the first step of the form.'}
            label={'Book my Shopify Xero scoping call'}
          />
        </div>

        {/* ═══ GST AND TAX INVOICES → facts ═══ */}
        <section className="section facts" id="gst">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">GST, BAS and trade invoices</div>
              <h2>GST rules the sync has to follow, line by line</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  The ATO describes GST as a 10% tax on most goods sold in Australia, and registration is compulsory
                  once GST turnover reaches $75,000. Shopify prices are normally shown including GST. Where the GST is
                  exactly one-eleventh of the total, the ATO accepts the statement &ldquo;Total price includes
                  GST&rdquo; on a tax invoice.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  Not every line is taxable. The ATO lists most basic food among GST-free sales, and exported goods
                  are GST-free if they leave Australia within 60 days of payment or invoice, whichever comes first. A
                  store that ships a hamper with a taxable candle and GST-free coffee, or sends orders to New Zealand,
                  needs those lines kept apart all the way into Xero.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  Trade orders add one more rule. If a customer asks for a tax invoice you must supply one within 28
                  days, unless the sale is $82.50 including GST or less, and invoices for $1,000 or more must show the
                  buyer’s identity or ABN. Where large retailers or government buyers want eInvoices, the ATO’s Peppol
                  network connects over 400,000 Australian businesses, and those invoices should come from Xero.
                </p></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">What we map before go-live</div>
                <ul className="trigrows">
                  <li><span className="m">Taxable retail lines</span><span className="t">GST rate</span></li>
                  <li><span className="m">GST-free lines (food, health)</span><span className="t">GST-free rate</span></li>
                  <li><span className="m">Exports, including New Zealand</span><span className="t">GST-free rate</span></li>
                  <li><span className="m">Shipping charged to the buyer</span><span className="t">Follows the order</span></li>
                  <li><span className="m">Shopify, Afterpay and app fees</span><span className="t">Expense with GST</span></li>
                  <li><span className="m">Trade orders of $1,000 or more</span><span className="t">Invoice with ABN</span></li>
                </ul>
                <p className="au-note">
                  Sources: <a href={SRC.atoGst.url} {...extLink}>ATO, How GST works</a>,{' '}
                  <a href={SRC.atoGstFree.url} {...extLink}>ATO, GST-free sales</a>,{' '}
                  <a href={SRC.atoInvoices.url} {...extLink}>ATO, Tax invoices</a>,{' '}
                  <a href={SRC.atoEinvoicing.url} {...extLink}>ATO, About eInvoicing</a>. We are not tax agents; your
                  accountant confirms the treatment for your products.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ STOCK AND OTHER SYSTEMS → ruled rows ═══ */}
        <section className="section platforms" id="stock">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Stock, cost and the rest of the stack</div>
                <h2>One owner for stock, and Xero gets the money side</h2>
              </div>
              <p>
                Cin7 Core’s own help centre tells users to switch off Xero inventory tracking, which Cin7 Core
                does not work with (<a href={SRC.cin7Xero.url} {...extLink}>Cin7 Core Help</a>). That is the right
                instinct for most Australian sellers with an inventory tool: Shopify shows what is available, the
                inventory system counts it and costs it, and Xero records the value.
              </p>
            </div>
            <div className="platlist" role="list">
              <div className="plat plat-2col" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>Cin7 Core or Unleashed</h3></div><p className="plat-build">Stock, purchasing and cost live here. Shopify receives available quantities, Xero receives sales, purchases and cost of goods sold. Bundles post as their parts.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>NetSuite, Odoo or MYOB Acumatica</h3></div><p className="plat-build">The ERP holds the ledger, so Shopify posts there and Xero leaves the order flow, unless one entity in the group still runs Xero.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>MYOB Business or QuickBooks Online</h3></div><p className="plat-build">Same posting rules, different ledger. If you are moving to Xero at the same time, your accountant sets the cut-over date.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">04</span><div className="plat-name"><h3>Australia Post, StarTrack, Sendle and 3PLs</h3></div><p className="plat-build">Freight the customer pays follows the order’s tax treatment. Freight you pay the courier should arrive as a bill, kept apart from sales.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">05</span><div className="plat-name"><h3>Marketplaces</h3></div><p className="plat-build">Amazon.com.au, eBay, Kogan, Bunnings Marketplace and THE ICONIC each settle with their own fees. Each gets a clearing account and a channel tag in Xero.</p></div>
            </div>
          </div>
        </section>

        {/* ═══ PROJECT STEPS → timeline ═══ */}
        <section className="section process" id="how-it-runs">
          <div className="wrap">
            <div className="head-media">
              <div className="section-head">
                <div className="eyebrow">How a project runs</div>
                <h2>Six steps from a messy month end to a clean BAS</h2>
                <p className="lead">
                  Your bookkeeper is in the room from step two. Open a step for the detail and your part in it.
                </p>
              </div>
              <div className="au-panel">
                <div className="eyebrow">What you bring</div>
                <ul className="trigrows">
                  <li><span className="m">Read access to Shopify and Xero</span><span className="t">Step 1</span></li>
                  <li><span className="m">One recent month of payouts</span><span className="t">Step 1</span></li>
                  <li><span className="m">Your bookkeeper, for an hour</span><span className="t">Step 2</span></li>
                  <li><span className="m">Sign-off on the demo</span><span className="t">Step 3</span></li>
                  <li><span className="m">A cut-over date from your accountant</span><span className="t">Step 5</span></li>
                </ul>
              </div>
            </div>
            <div className="timeline">
              {STEPS.map((s) => {
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

        {/* ═══ HOUSE TERMS → ruled rows ═══ */}
        <section className="section platforms" id="terms">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Terms</div>
                <h2>How we work on a Shopify Xero project</h2>
              </div>
              <p>
                The agencies that build an integration and then stop answering are the reason most finance teams
                distrust the next one. These terms apply to every phase.
              </p>
            </div>
            <div className="platlist" role="list">
              {TERMS.map((t) => (
                <div key={t.n} className="plat plat-2col" role="listitem">
                  <span className="capid">{t.n}</span>
                  <div className="plat-name"><h3>{t.t}</h3></div>
                  <p className="plat-build">{t.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ COST → split ═══ */}
        <section className="section facts" id="cost">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Cost</div>
              <h2>What a Shopify Xero integration costs in Australia</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Xero’s own Shopify integration is free on all Xero plans, according to its{' '}
                  <a href={SRC.xeroApp.url} {...extLink}>Australian App Store listing</a>. Connector apps charge a monthly
                  subscription; <a href={SRC.a2x.url} {...extLink}>A2X</a> says its plans depend on your Shopify order
                  volume and the features you need.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  For custom work, Hatchet, a Perth software company that describes itself as a Xero Development
                  Partner, wrote on 8 September 2026 that each integration typically adds $5,000 to $20,000 to a
                  build, depending on the quality of the API and how much data mapping is involved (<a href={SRC.hatchet.url} {...extLink}>Hatchet</a>). The article does not say whether GST is
                  included. A Shopify to Xero link with Afterpay, marketplaces and an inventory system touches several
                  of those connections.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  FactoryJet quotes a fixed price in writing after a short scoping call, phase by phase, and states
                  whether the figure includes GST. What moves the number: how many gateways and channels, GST-free and
                  export lines, trade invoicing, where stock and cost live, how many entities, and how much history
                  your accountant wants brought across.
                </p></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">Market reference, AUD</div>
                <ul className="trigrows">
                  <li><span className="m">Xero’s own Shopify integration</span><span className="t">Free on Xero plans</span></li>
                  <li><span className="m">Connector apps</span><span className="t">Monthly, by volume</span></li>
                  <li><span className="m">Each custom integration (Hatchet, Perth)</span><span className="t">$5,000 to $20,000</span></li>
                </ul>
                <ModalCTAButton label="Get a fixed-price quote" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══ BRIEF / RFP ASK → ruled rows ═══ */}
        <section className="section platforms" id="brief">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Have a brief or RFP?</div>
                <h2>Send it. A one-page brief gets you a sharper quote</h2>
              </div>
              <p>
                Finance and operations teams that send a written brief get a scoped answer on the first call instead
                of a list of questions. The second step of the form on this page takes a PDF or Word file. If you are
                running a tender, we will answer it in the format you set.
              </p>
            </div>
            <div className="platlist" role="list">
              <div className="plat plat-2col" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>Systems</h3></div><p className="plat-build">Shopify plan, Xero or MYOB edition, inventory system, ERP, 3PL, and any app already syncing.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>Volumes and channels</h3></div><p className="plat-build">Orders a month and on your biggest sale day, each payment gateway, each marketplace and each Shopify store.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>Tax and entities</h3></div><p className="plat-build">Which products are GST-free, whether you export, and which entity sells what.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">04</span><div className="plat-name"><h3>The pain today</h3></div><p className="plat-build">What breaks at month end, how long reconciliation takes, and who signs off the BAS.</p></div>
            </div>
            <div className="ctas">
              <ModalCTAButton label="Send my brief" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
            </div>
          </div>
        </section>

        {/* ═══ SIBLING SERVICES → agentdir ═══ */}
        <section className="section agentdir" id="more-services">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Related FactoryJet services</div>
              <h2>Around the Shopify Xero link</h2>
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

        {/* ═══ FAQ (same FAQ_ITEMS array as the FAQPage JSON-LD) ═══ */}
        <AuFaq
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          heading="Shopify Xero integration questions Australian sellers ask"
          askLabel="Still have a question? Ask the founder →"
          askNote="Replies within 24 hours."
        />

        {/* ═══ SOURCES → references ═══ */}
        <section className="section referencesSection references" id="references">
          <div className="wrap">
            <div className="eyebrow">Sources, read on {READ_ON}</div>
            <div className="refs">
              {SOURCE_KEYS.map((k) => (
                <a key={k} href={SRC[k].url} {...extLink}>{SRC[k].label}</a>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ FINAL CTA (light) ═══ */}
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <div className="eyebrow">Ready when you are</div>
              <h2>Close the month in Xero without the spreadsheet</h2>
              <p>
                Leave your name and work email. Within 24 hours the founder writes back to set up a call about your
                gateways, channels and stock, then shows you the link working on your own data before you sign.
              </p>
            </div>
            <div className="ctas">
              <ModalCTAButton label="Book my Shopify Xero scoping call" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              <a className="btn btn-ghost" href="/au/shopify-development">See Shopify development</a>
            </div>
          </div>
        </section>

      </main>
      </div>
      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}

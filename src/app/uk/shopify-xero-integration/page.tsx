import type { Metadata } from 'next';
import styles from './visual-qa.module.css';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import '../ai-agents/ai-agents.css';

/* /uk/shopify-xero-integration, built 2026-10-11.

   Truth rules for anyone editing this file.
   1. Every third-party fact (connector prices, ratings, plan limits, Shopify
      payout behaviour, VAT and Making Tax Digital rules) was read on the
      maker's or regulator's own page on 2026-10-11 and links to that page
      through the SRC map below. Prices and ratings move. Re-read the page
      before changing one, and update the "11 October 2026" wording.
   2. No FactoryJet price. The only money figures are list prices of named
      connector apps, Xero and Shopify plans, GOV.UK thresholds, and one worked
      example that is labelled as our own arithmetic.
   3. No client is named or described. No partner or accreditation status is
      claimed for FactoryJet.
   4. Structure mirrors /uk/ai-receptionist (imports, components, CSS, schema).
      The copy is written fresh for this page.
   5. The FAQ schema is generated from FAQ_ITEMS, the same array the visible
      FAQ renders. Never add a second list of questions. */

const CANONICAL = 'https://factoryjet.com/uk/shopify-xero-integration';
const UPDATED = '2026-10-11';
const READ_ON = '11 October 2026';
const TITLE = 'Shopify Xero Integration UK: Apps vs Custom | FactoryJet';
const H1 = 'Shopify Xero Integration for UK Sellers: Every Sale, Refund, Fee and Payout in Your Books, VAT Split Out';
const DESCRIPTION =
  'Shopify Xero integration for UK stores: VAT on sales and refunds, payouts matched to the bank line, multi-currency. Connector apps compared, custom links built.';
const IMG = '/images/uk/shopify-xero-integration';

/* Design values, copied from ../ai-agents/ai-agents.css so inline styles stay
   on-system without CSS custom property references in this file. */
const T = {
  ink: '#0F0F12',
  n200: '#E5E5E0',
  n400: '#6E6E68',
  orange: '#FF5C00',
  green: '#047857',
  small: '#B23E13',
  fm: "'Geist Mono',monospace",
  fd: "'Plus Jakarta Sans',sans-serif",
};

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD, so the
   schema can never describe a trail a human cannot see. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'Shopify Xero Integration', url: CANONICAL },
];

/* Sources. One map, used by every inline source note AND by the visible
   Sources list near the foot of the page. Each page was opened on 2026-10-11
   and the supporting words read before the claim was written. The Xero App
   Store, Xero Developer, Shopify Help and the Link My Books price calculator
   were read in a real browser because they do not render for a plain fetch. */
const SRC = {
  xeroApp: { label: 'Xero App Store UK: Shopify, by Xero', url: 'https://apps.xero.com/uk/app/shopify' },
  xeroShopify: { label: 'Xero UK: Integrate Shopify with Xero', url: 'https://www.xero.com/uk/partnerships/shopify/' },
  xeroPricing: { label: 'Xero UK: pricing plans', url: 'https://www.xero.com/uk/pricing-plans/' },
  xeroLimits: { label: 'Xero Developer: API limits and system limits', url: 'https://developer.xero.com/documentation/guides/oauth2/limits/' },
  xeroMtd: { label: 'Xero UK: Making Tax Digital', url: 'https://www.xero.com/uk/programme/making-tax-digital/' },
  xeroAppSearch: { label: 'Xero App Store UK: apps found for Shopify', url: 'https://apps.xero.com/uk/search?q=shopify' },
  shopifyAppXero: { label: 'Shopify App Store: the listing named Xero', url: 'https://apps.shopify.com/xero' },
  amakaShopifyXero: { label: 'Amaka: Shopify + Xero integration', url: 'https://amaka.com/integrations/shopify/xero/' },
  amakaPricing: { label: 'Amaka: pricing', url: 'https://amaka.com/pricing/' },
  amakaGuide: { label: 'Amaka guide: Shopify + Xero bank feed reconciliation', url: 'https://amaka.com/help/guide/shopify-xero-bank-reconciliation/' },
  lmbShopifyXero: { label: 'Link My Books: Xero Shopify integration', url: 'https://linkmybooks.com/uk/integrations/shopify/xero' },
  lmbPricing: { label: 'Link My Books: pricing', url: 'https://linkmybooks.com/pricing' },
  a2xShopifyXero: { label: 'A2X: Shopify and Xero', url: 'https://www.a2xaccounting.com/integrations/shopify/xero' },
  a2xPricing: { label: 'A2X: Shopify pricing', url: 'https://www.a2xaccounting.com/shopify/pricing' },
  shopifyLower: { label: 'Shopify Help: lower or missing payouts', url: 'https://help.shopify.com/en/manual/payments/shopify-payments/payouts/lower-or-missing-payouts' },
  shopifyFees: { label: 'Shopify Help: payout fees', url: 'https://help.shopify.com/en/manual/payments/shopify-payments/payouts/pay-periods-and-fees' },
  shopifyMulti: { label: 'Shopify Help: Multi-Currency Payouts', url: 'https://help.shopify.com/en/manual/payments/shopify-payments/store-currency/payouts-in-multiple-currencies' },
  shopifyPricing: { label: 'Shopify UK: pricing', url: 'https://www.shopify.com/uk/pricing' },
  govVatRates: { label: 'GOV.UK: VAT rates', url: 'https://www.gov.uk/vat-rates' },
  govVatThresholds: { label: 'GOV.UK: VAT thresholds', url: 'https://www.gov.uk/how-vat-works/vat-thresholds' },
  govVatRecords: { label: 'GOV.UK: Keeping VAT records', url: 'https://www.gov.uk/charge-reclaim-record-vat/keeping-vat-records' },
  govNotice: { label: 'GOV.UK: VAT Notice 700/22, Making Tax Digital for VAT', url: 'https://www.gov.uk/government/publications/vat-notice-70022-making-tax-digital-for-vat/vat-notice-70022-making-tax-digital-for-vat' },
  govExports: { label: 'GOV.UK: Exports, sending goods abroad and charging VAT', url: 'https://www.gov.uk/guidance/vat-exports-dispatches-and-supplying-goods-abroad' },
  govMtdIncome: { label: 'GOV.UK: when to use Making Tax Digital for Income Tax', url: 'https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax' },
  govMtdSoftware: { label: 'GOV.UK: software for Making Tax Digital for VAT', url: 'https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-vat' },
} as const;

type SrcKey = keyof typeof SRC;
const SOURCE_KEYS = Object.keys(SRC) as SrcKey[];

/* FAQ source of truth (drives the visible FAQ and the FAQ schema).
   Question wording draws on Google question boxes and related searches for
   "shopify xero integration", "does shopify integrate with xero" and
   "xero shopify", pulled for the United Kingdom on 2026-10-11 (DataForSEO). */
const FAQ_CATEGORIES = [
  { key: 'basics', label: 'Connecting the two' },
  { key: 'apps', label: 'Connector apps' },
  { key: 'vat', label: 'VAT, payouts and MTD' },
  { key: 'custom', label: 'Custom links and the API' },
  { key: 'working', label: 'Working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // Connecting the two
  {
    category: 'basics',
    question: 'Does Shopify integrate with Xero?',
    answer:
      'Yes. Xero publishes its own Shopify integration on the Xero App Store, and the listing says it is free on all Xero plans. It sends sales, payouts, fees and taxes from Shopify into Xero, either as a daily summary or as one transaction per sale. Connector apps such as Amaka, Link My Books and A2X do the same job with more control over VAT and format, and a custom link covers rules no app has a setting for. As listed on 11 October 2026.',
  },
  {
    category: 'basics',
    question: 'Do Shopify and Xero work together?',
    answer:
      'For sales flowing into the books, yes. Xero’s own page says Shopify sales flow to Xero each day and that payouts from Shopify Payments are matched to your bank account, with fees, refunds and taxes handled. The other direction is different. Nothing on Xero’s listing describes stock counts or prices going from Xero back to Shopify, so stores that need that add a second app or a custom link.',
  },
  {
    category: 'basics',
    question: 'How does the Xero Shopify integration work?',
    answer:
      'You start on the Xero App Store, choose Get this app, log in to Xero and connect your Shopify store. You then pick how sales arrive: a daily summary, which Xero suggests for high-volume stores, or per-sale transactions with customer and line-item detail. You map each Shopify tax to a Xero tax rate, and it can bring in up to 90 days of history. Xero says it has partnered with Amaka to help with set-up.',
  },
  {
    category: 'basics',
    question: 'Is the Xero Shopify integration free?',
    answer:
      'Xero’s App Store listing says the integration is free for Xero subscribers on all Xero plans. Xero’s UK page for the integration also calls it free, and in the same section mentions a 30-day free trial of the integration, so read the listing when you connect. You still pay for Xero itself. Its UK plans were listed at £18 to £70 a month before VAT on 11 October 2026.',
  },
  {
    category: 'basics',
    question: 'How do I connect Shopify to Xero?',
    answer:
      'Xero’s instructions are short: log in to Xero, go to the Xero App Store, search for the Shopify integration by Xero and select Get this app. The decisions before that click matter more. Agree with your accountant whether sales post as daily summaries or single orders, which Xero accounts take sales, refunds, shipping and fees, and which Xero tax rate each Shopify tax maps to. Then connect, import a short period and check it against one real payout.',
  },
  {
    category: 'basics',
    question: 'Does Shopify feed into QuickBooks as well?',
    answer:
      'Yes. Shopify connects to QuickBooks through a separate set of apps, and the questions are the same: which system owns each record, and how payouts, fees and tax reach the books. Our Shopify QuickBooks integration page covers that route. In the UK the Xero pairing is searched for more often: 260 searches a month for Shopify Xero integration against 70 for the QuickBooks pairing (DataForSEO, United Kingdom, 11 October 2026).',
  },
  // Connector apps
  {
    category: 'apps',
    question: 'What is the best way to integrate Shopify and Xero?',
    answer:
      'Match the route to the job. One UK store with simple VAT and payouts in pounds: start with Xero’s own free integration. Mixed VAT rates, sales outside the UK or a year of history to catch up: a paid connector such as Link My Books or A2X, which post one summary per payout. Stock or prices held outside Shopify, wholesale invoices on terms, or several stores and sets of books: a custom link. Whichever you pick, agree the accounts and tax rates with your accountant first.',
  },
  {
    category: 'apps',
    question: 'How much does a Shopify Xero integration cost?',
    answer:
      'List prices on 11 October 2026: Xero’s own integration is free on all Xero plans. Amaka is free up to 60 orders a month, then US$18 a month billed annually up to 500 orders. Link My Books runs from £18 a month at 200 orders to £84 at 10,000, for one sales channel, before VAT. A2X starts at US$29 a month for up to 200 orders. For a custom link, FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'apps',
    question: 'Is A2X or Link My Books better for Shopify and Xero?',
    answer:
      'Both post one summary to Xero for each Shopify payout, so the bank line matches. Link My Books prices in pounds and describes product grouping for standard, reduced and zero VAT rates. A2X prices in US dollars, says it separates 20% and zero-rated products and splits UK from non-UK sales, and can post a cost of goods sold entry. Compare them at your own order volume and the amount of history you need, and ask your accountant which one they already use.',
  },
  {
    category: 'apps',
    question: 'What does Amaka have to do with the Xero Shopify integration?',
    answer:
      'Xero’s listing says it has partnered with Amaka, an integrations provider, to help customers set the integration up, and the support contact on the listing is an Amaka address. Amaka also offers its own Shopify and Xero integration with more formats: a sales summary, one invoice per sale, or a summary by category or product. Its pricing page shows a free plan for up to 60 orders a month and paid plans above that.',
  },
  {
    category: 'apps',
    question: 'Should every Shopify order be an invoice in Xero?',
    answer:
      'For a busy shop, no. Xero’s developer documentation says Xero is designed for up to 5,000 sales invoices a month, and its UK pricing page lists 20 invoices on the Ignite plan. A summary per day or per payout, split by VAT rate, keeps the books light and still matches the bank. One invoice per order makes sense for wholesale customers on payment terms, where you need to chase a named invoice.',
  },
  {
    category: 'apps',
    question: 'How far back can a connector import Shopify sales?',
    answer:
      'It depends on the app and the plan. Xero’s own integration syncs up to 90 days of history. Link My Books says its trial imports the last 90 days and paid plans go back up to 24 months, depending on the plan. A2X lists 3 months of history on its Mini plan and 12 months on Professional. Amaka lists up to 1 day on its free plan and up to 365 days on Premium+. Check this before you choose, because catching up a full year is where the plans differ most.',
  },
  // VAT, payouts and MTD
  {
    category: 'vat',
    question: 'How can I reconcile my Shopify payments in Xero?',
    answer:
      'Use a clearing account. Sales, refunds and fees post to it as they happen, and each Shopify payout is recorded as a transfer from the clearing account to your bank account. The transfer then matches the single line on your bank feed. Amaka’s guide to the Xero integration describes this set-up, with a clearing account called the Shopify Payment Balance. What is left in the clearing account should equal the balance Shopify has yet to pay out. If it does not, something was posted at the wrong amount.',
  },
  {
    category: 'vat',
    question: 'Why does my Shopify payout not match my sales?',
    answer:
      'Because Shopify pays you in batches and takes money out first. Its help centre says processing fees are deducted before the payout is sent, and refunds made since the last payout are deducted from the next one. It lists other causes too, including chargebacks, reserves, adjustments and currency conversion. The payout export includes Amount, Fee and Net columns for each transaction, and a good link posts all three.',
  },
  {
    category: 'vat',
    question: 'How should VAT on Shopify sales appear in Xero?',
    answer:
      'Split by rate. GOV.UK lists a 20% standard rate, a 5% reduced rate and a 0% zero rate. HMRC’s Making Tax Digital notice says the digital record of each supply needs the time of supply, the value before VAT and the rate charged, and that supplies at the same rate on one invoice can be recorded as a single entry. Connector summaries follow the same shape, with one line for each VAT rate. Your accountant confirms whether summaries or single orders are the right record for your shop.',
  },
  {
    category: 'vat',
    question: 'How are Shopify refunds handled in Xero?',
    answer:
      'As credits, at the same VAT rate as the sale they reverse. GOV.UK says that when a customer returns goods you settle the balance with a replacement invoice or a credit or debit note, and record it in your accounts. On the money side, Shopify says refunds are deducted from your next available payout. So the credit sits in the clearing account until that payout arrives, and the payout is smaller by the same amount.',
  },
  {
    category: 'vat',
    question: 'Is there VAT on Shopify Payments fees in the UK?',
    answer:
      'Shopify’s help centre says that in the United Kingdom a 0% tax rate, which it calls a reverse charge, applies to Shopify Payments processing fees, and that you need to keep your own tax records for them. How that is coded in Xero is a decision for your accountant. What the link must do is post fees on their own line, apart from sales, so the right Xero tax rate can be applied to them.',
  },
  {
    category: 'vat',
    question: 'Does a Shopify Xero integration meet Making Tax Digital rules?',
    answer:
      'Making Tax Digital is a set of HMRC rules for your business, so no app settles it alone. The rules ask for digital records in compatible software and digital links between any software you use, with no copying and pasting. VAT Notice 700/22 names API transfer and CSV import as accepted digital links. A connector or custom link moves Shopify figures into Xero by API. Ask your accountant to check your whole set-up against the notice.',
  },
  {
    category: 'vat',
    question: 'Does HMRC recognise Xero?',
    answer:
      'Xero’s UK site describes its software as HMRC-recognised for Making Tax Digital, and its pricing page lists submitting VAT returns to HMRC on every UK plan. HMRC runs its own page on GOV.UK where you can check which software packages you can use to keep VAT records and submit VAT Returns. Treat that page as the final word, because it is HMRC’s own.',
  },
  {
    category: 'vat',
    question: 'When does a Shopify seller have to register for VAT?',
    answer:
      'GOV.UK says you must register when your total taxable turnover goes over £90,000, or you expect it to. Taxable turnover is the total value of everything you sell that is not exempt, so Shopify sales count alongside every other sale the business makes. Set the Xero link up with tax rates mapped before you cross the line, and the first VAT Return will not start with a clean-up.',
  },
  {
    category: 'vat',
    question: 'I sell in euros and dollars. What changes in the Xero link?',
    answer:
      'Two plan limits. Shopify’s help centre says stores on the Basic, Grow and Shopify plans are paid out only in their domestic currency, with a conversion fee when a customer pays in another one. Advanced and Shopify Plus stores can add a bank account for each payout currency. On the Xero side, the UK pricing page lists multiple currencies on its two top plans, at £55 and £70 a month before VAT. The link then posts each payout in the currency it was paid in.',
  },
  {
    category: 'vat',
    question: 'Do sole traders selling on Shopify need Making Tax Digital for Income Tax?',
    answer:
      'It depends on qualifying income. GOV.UK says sole traders and landlords with qualifying income over £50,000 in the 2024 to 2025 tax year should have started using Making Tax Digital for Income Tax from 6 April 2026. Over £30,000 in 2025 to 2026, it applies from 6 April 2027. Over £20,000 in 2026 to 2027, from 6 April 2028. Xero’s UK pricing page lists every plan as MTD for Income Tax ready.',
  },
  // Custom links and the API
  {
    category: 'custom',
    question: 'Does Xero have an API for custom integrations?',
    answer:
      'Yes. Xero’s developer documentation sets limits for each connected organisation: 5 calls in progress at once, 60 calls a minute, and 1,000 calls a day on its starter tier or 5,000 on higher tiers. It also says several invoices can be created in one request, with about 50 a practical ceiling. A custom link is built around those limits by batching. One summary per payout uses a handful of calls, where a call for every order can hit the daily limit.',
  },
  {
    category: 'custom',
    question: 'Can Xero send stock levels or prices to Shopify?',
    answer:
      'Xero’s listing for its own Shopify integration describes data moving from Shopify into Xero, and mentions nothing going back. Amaka’s page lists a daily stock-on-hand sync. Xero itself recommends no more than 4,000 tracked inventory items in one organisation. If your stock or price list is kept in Xero, a warehouse system or an ERP and the shop has to follow it, that is a custom link. FactoryJet builds these, with the owner of each number agreed in writing first.',
  },
  {
    category: 'custom',
    question: 'Can you connect WooCommerce to Xero as well?',
    answer:
      'Yes. The same questions apply to WooCommerce: sales split by VAT rate, refunds as credits, gateway fees on their own line and payouts matched to the bank. Link My Books lists WooCommerce as a sales channel and Amaka’s Xero App Store entry names WooCommerce too. Where an app does not fit, for example trade pricing or stock led from another system, FactoryJet builds a custom WooCommerce to Xero link.',
  },
  {
    category: 'custom',
    question: 'When is a custom Shopify Xero link worth it?',
    answer:
      'When the rule belongs to your business and no app has a setting for it. The usual cases: stock or prices led from Xero, a warehouse system or an ERP; wholesale orders that need named invoices with payment terms and a paid status sent back to the store; several stores or several sets of books; sales split by channel or region for management accounts; or another system in the chain, such as EDI orders or a HubSpot CRM.',
  },
  // Working with us
  {
    category: 'working',
    question: 'Will you work with our accountant or bookkeeper?',
    answer:
      'Yes, and we ask to. Your accountant decides how sales, refunds, fees and VAT should post, and which Xero accounts and tax rates to use. Our job is to build the link so it follows those decisions, and to keep it working. The posting rules go into a one-page map that your accountant signs off before anything is built. Tax advice stays with them.',
  },
  {
    category: 'working',
    question: 'Can we see it working before we sign?',
    answer:
      'Yes. Before a contract, we show working software on your own data. For this job that means a handful of your real Shopify orders, a refund and a payout posted into a trial Xero organisation, so you and your accountant can read every entry it creates and compare the total with the bank line.',
  },
  {
    category: 'working',
    question: 'Who owns the link, and who looks after it?',
    answer:
      'You own it: the code, the posting map and the accounts it runs under. FactoryJet quotes the build and the ongoing support as fixed prices in writing after a short scoping call. After launch the same team keeps managing the servers, APIs and maintenance, so your own team does not have to watch it.',
  },
  {
    category: 'working',
    question: 'How long does a Shopify Xero integration take?',
    answer:
      'Switching on a connector app is quick once the accounts and tax rates are agreed: Link My Books describes an easy 15-minute set-up. Agreeing those rules with your accountant and checking the first payouts takes longer than the click. A custom link is a project with its own plan, and the timeline goes in writing with the quote.',
  },
];

/* Who owns each record. The owner column is the map we propose on day one.
   The last column restates the linked pages. */
const OWNERS: { record: string; owner: string; lands: string; note: string }[] = [
  {
    record: 'Sales',
    owner: 'Shopify',
    lands: 'A summary per day or per payout, split by VAT rate. One invoice per order where you need the customer on it.',
    note: 'Xero says it is designed for up to 5,000 sales invoices a month.',
  },
  {
    record: 'Refunds',
    owner: 'Shopify',
    lands: 'A credit line at the same VAT rate as the sale it reverses.',
    note: 'Shopify deducts refunds from your next available payout.',
  },
  {
    record: 'Card and payment fees',
    owner: 'Shopify',
    lands: 'An expense line for each payout, kept apart from sales.',
    note: 'Shopify says a 0% reverse charge applies to its fees in the UK.',
  },
  {
    record: 'Payouts',
    owner: 'Shopify',
    lands: 'A transfer from the clearing account to your bank account.',
    note: 'One bank line can cover hundreds of orders.',
  },
  {
    record: 'Shipping, discounts and gift cards',
    owner: 'Shopify',
    lands: 'Their own lines, so they are not buried inside sales.',
    note: 'Your accountant sets the account and tax rate for each.',
  },
  {
    record: 'Accounts and VAT rates',
    owner: 'Your accountant, in Xero',
    lands: 'Each Shopify tax is mapped once to a Xero tax rate.',
    note: 'GOV.UK lists three rates: 20%, 5% and 0%.',
  },
  {
    record: 'Customers',
    owner: 'Shopify for shoppers, Xero for trade accounts',
    lands: 'One contact for web sales. Named contacts for wholesale customers.',
    note: 'Xero says contact lists greater than 10,000 could cause performance issues.',
  },
  {
    record: 'Products, prices and stock',
    owner: 'Agreed per business: Shopify, Xero or a warehouse system',
    lands: 'Cost of goods and stock value, if you track them in Xero.',
    note: 'Xero recommends no more than 4,000 tracked inventory items.',
  },
];

/* Connector apps (cards and ItemList). Each line restates the maker's own
   page and the Xero App Store rating, as listed on 2026-10-11. */
const CONNECTORS: { name: string; maker: string; price: string; rating: string; says: string; suits: string; sources: SrcKey[] }[] = [
  {
    name: 'Shopify integration by Xero',
    maker: 'Xero',
    price: 'Free on all Xero plans',
    rating: '4.72 out of 5 from 71 reviews',
    says: 'Sends sales, payouts, fees and taxes from Shopify into Xero, as a daily summary or one transaction per sale. Covers the online store and Shopify POS, and syncs up to 90 days of history. Xero says it has partnered with Amaka to help with set-up.',
    suits: 'One UK store that wants sales, fees and payouts in the books at no extra charge.',
    sources: ['xeroApp', 'xeroShopify'],
  },
  {
    name: 'Amaka',
    maker: 'Amaka',
    price: 'Free up to 60 orders a month. US$18 a month, billed annually, up to 500 orders. US$49 a month, billed annually, with no order limit',
    rating: '4.92 out of 5 from 1,394 reviews',
    says: 'A daily sync as a sales summary, one invoice per sale, or a summary by category or product. Its page also lists cost of goods sold and a daily stock-on-hand sync.',
    suits: 'Stores that want to choose the invoice format, or want cost of goods posted as well.',
    sources: ['amakaShopifyXero', 'amakaPricing'],
  },
  {
    name: 'Link My Books',
    maker: 'Link My Books',
    price: '£18 a month at 200 orders, £35 at 1,000, £51 at 5,000 and £84 at 10,000, for one sales channel, before VAT',
    rating: '4.99 out of 5 from 612 reviews',
    says: 'One summary invoice for each Shopify Payments payout, breaking down sales, refunds, fees and VAT, which it says matches the deposit in your bank. Groups products by standard, reduced and zero VAT rates, and says it needs read-only access to your store.',
    suits: 'UK sellers with mixed VAT rates who want payout summaries and a price in pounds.',
    sources: ['lmbShopifyXero', 'lmbPricing'],
  },
  {
    name: 'A2X',
    maker: 'A2X',
    price: 'US$29 a month up to 200 orders, US$45 up to 500, US$79 up to 2,000 and US$115 up to 5,000',
    rating: '4.96 out of 5 from 942 reviews',
    says: 'One entry in Xero each time Shopify pays out. Says it separates 20% VAT and zero-rated products, splits UK sales from non-UK sales, and can post a cost of goods sold entry.',
    suits: 'Stores that sell outside the UK as well as in it, often working with an accountant.',
    sources: ['a2xShopifyXero', 'a2xPricing'],
  },
];

/* Comparison rows. Connector cells restate the maker's own pages. */
const COMPARE: { feat: string; xero: string; amaka: string; lmb: string; a2x: string; fj: string }[] = [
  {
    feat: 'List price',
    xero: 'Free on all Xero plans',
    amaka: 'Free, US$18 or US$49 a month, billed annually',
    lmb: '£18 to £84 a month before VAT, one channel, up to 10,000 orders',
    a2x: 'US$29 to US$115 a month, up to 5,000 orders',
    fj: 'Fixed price, quoted in writing after a scoping call',
  },
  {
    feat: 'How sales reach Xero',
    xero: 'Daily summary or per-sale transactions',
    amaka: 'Summary, one invoice per sale, or by category or product',
    lmb: 'One summary invoice per payout',
    a2x: 'One entry per payout',
    fj: 'The shape your accountant asks for',
  },
  {
    feat: 'History on the entry plan',
    xero: 'Up to 90 days',
    amaka: 'Up to 1 day on Free, 90 days on Premium',
    lmb: '3 months',
    a2x: '3 months',
    fj: 'Agreed in the scope',
  },
  {
    feat: 'VAT handling described',
    xero: 'Map Shopify taxes to Xero tax rates',
    amaka: 'Custom mapping options',
    lmb: 'Product groups for standard, reduced and zero rates',
    a2x: 'Separates 20% and zero-rated, UK and non-UK',
    fj: 'Rules written down with your accountant',
  },
  {
    feat: 'Data back into Shopify',
    xero: 'None described in the listing',
    amaka: 'Daily stock-on-hand sync listed',
    lmb: 'Read-only access to the store',
    a2x: 'None described on its Shopify and Xero page',
    fj: 'Stock, prices or paid status, where you need them',
  },
  {
    feat: 'Who supports it',
    xero: 'Xero, with Amaka for set-up help',
    amaka: 'Amaka',
    lmb: 'Link My Books',
    a2x: 'A2X',
    fj: 'FactoryJet. You own the code',
  },
];

/* JSON-LD. The Organization is referenced by @id only and is defined once,
   sitewide. Never redefine it here. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Shopify Xero Integration UK',
      serviceType: 'Shopify and Xero integration: connector app selection and set-up, custom Shopify to Xero links, VAT and payout mapping, support',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      description:
        'FactoryJet plans, builds, tests and supports the link between a Shopify store and Xero for UK sellers. Sales are split by VAT rate, and refunds, fees and payouts post to the accounts and tax rates the seller’s accountant chooses. Work covers choosing and setting up a connector app, payouts in more than one currency, and a custom link when an app cannot follow the business rules, such as stock or prices led from another system or wholesale invoices on terms.',
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
      inLanguage: 'en-GB',
      datePublished: '2026-10-11',
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
      '@type': 'ItemList',
      '@id': `${CANONICAL}#connectors`,
      name: 'Shopify Xero connector apps',
      itemListElement: CONNECTORS.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
      })),
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
  alternates: { canonical: CANONICAL, languages: { 'en-GB': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: TITLE,
    description:
      'How UK sellers connect Shopify to Xero: VAT by rate, refunds, fees and payouts matched to the bank line. Four connector apps with list prices, and when a custom link is the better job.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: `${IMG}/shopify-xero-og.webp`, width: 1200, height: 630, alt: 'A woman in a navy apron carries three plain cardboard parcels across a bright workroom towards an open door' }],
  },
  robots: { index: true, follow: true },
};

const srcNote = { fontFamily: T.fm, fontSize: 12, color: T.n400, marginTop: 12 } as const;
const srcLink = { textDecoration: 'underline' } as const;
const inlineLink = { textDecoration: 'underline', color: T.ink, fontWeight: 600 } as const;

/* Small source line. Every id comes from the SRC map above. */
function Sources({ ids }: { ids: SrcKey[] }) {
  return (
    <p style={srcNote}>
      Sources, read on {READ_ON}:{' '}
      {ids.map((id, i) => (
        <span key={id}>
          {i > 0 ? '; ' : ''}
          <a href={SRC[id].url} target="_blank" rel="noopener noreferrer" style={srcLink}>{SRC[id].label}</a>
        </span>
      ))}
      .
    </p>
  );
}

export default function ShopifyXeroIntegrationUKPage() {
  return (
    <>
      <script id="ld-uk-shopify-xero-integration" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="uk-aiagents">
      <main className={styles.page}>

        <Breadcrumbs items={crumbs} />

        {/* 1. HERO */}
        <section className={`sec-lg dot-grid ${styles.hero}`} style={{ position: 'relative' }}>
          <div className="wrap">
            <div className="col-6040">
              <div className={styles.heroCopy}>
                <div className="flex-wrap mb-6">
                  <span className="chip"><span className="dot dot-orange" />Shopify Xero Integration UK</span>
                  <span className="chip">Connector App or Custom Link</span>
                  <span className="chip">VAT, Payouts, Currencies</span>
                </div>
                <h1>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  FactoryJet connects Shopify to Xero for UK sellers. We agree with your accountant how sales,
                  refunds, fees and VAT should post, set up the connector app that fits, and build a custom link
                  when no app can follow your rules. You get a fixed quote in writing, and you own what we build.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
                  <div className="upd">Last updated<br />{READ_ON}</div>
                </div>

                <div className={styles.heroForm} style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="uk" source="uk_shopify_xero_integration_hero" service="Shopify Xero Integration" submitLabel="Scope my Xero link" />
                </div>
                
              </div>

              <div className="card" style={{ padding: 8 }}>
                <img src={`${IMG}/shopify-xero-hero.webp`} width={1400} height={933} fetchPriority="high" decoding="async" alt="A woman in a mustard jumper presses down the flap of a plain cardboard box on a wooden packing bench, with shelves of boxes and paper bags behind her" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">What reaches Xero for each payout</span>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Sales, split by VAT rate</div><div className="scorecard-note">standard, reduced and zero</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>20 / 5 / 0</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Refunds as credits</div><div className="scorecard-note">same rate as the original sale</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Credited</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Shopify fees on their own line</div><div className="scorecard-note">tax rate chosen by your accountant</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Separate</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Payout equals the bank line</div><div className="scorecard-note">through a clearing account</div></div>
                    <div className="scorecard-val" style={{ color: T.green, fontSize: 15 }}>Matched</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ANSWER-FIRST DEFINITION */}
        <section className="sec">
          <div className="wrap">
            <div className="def" style={{ maxWidth: 940 }} data-speakable="true">
              <span className="lab">Does Shopify integrate with Xero, and which route suits a UK store?</span>
              <p>
                Yes. Xero publishes its own Shopify integration, and its App Store listing says it is free on all
                Xero plans. It posts sales, payouts, fees and taxes into Xero. Stores with mixed VAT rates, several
                currencies, wholesale invoices or stock held outside Shopify usually need a paid connector app or a
                custom link. As listed on {READ_ON}.
              </p>
            </div>
            <Sources ids={['xeroApp', 'xeroShopify']} />
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">Three terms we use a lot</span>
              <p>
                A <b>payout</b> is the bank transfer Shopify sends you, usually covering many orders with fees and
                refunds already taken out. A <b>clearing account</b> is a holding account in Xero where sales,
                refunds and fees sit until the payout arrives and cancels them out. A <b>digital link</b> is
                HMRC’s name for moving data between software with nobody retyping it.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              Installing an app is the easy part. The harder part is deciding how one bank line from Shopify, which
              may hold 300 orders, four refunds and a day of card fees, becomes entries your accountant can file a
              VAT Return from. That decision is what we scope first, and it is the same decision whether you end up
              on Xero’s free integration or a link we build for you.
            </p>
          </div>
        </section>

        {/* 3. FACTS BAND (each one sourced) */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              {[
                { v: '500+', t: 'businesses served by FactoryJet since it was founded in 2014', s: 'About FactoryJet', u: '/about' },
                { v: 'Free', t: 'is the price Xero lists for its own Shopify integration, on all Xero plans', s: 'Xero App Store UK', u: SRC.xeroApp.url },
                { v: '5,000', t: 'sales invoices a month is the volume Xero says it is designed for, so busy shops post summaries', s: 'Xero Developer, system limits', u: SRC.xeroLimits.url },
                { v: '£90,000', t: 'of taxable turnover is the point where GOV.UK says you must register for VAT', s: 'GOV.UK, VAT thresholds', u: SRC.govVatThresholds.url },
              ].map((r) => (
                <li key={r.t}>
                  <div style={{ fontFamily: T.fd, fontWeight: 800, fontSize: 26, color: T.orange }}>{r.v}</div>
                  <p style={{ fontSize: 13.5, color: T.ink, marginTop: 4 }}>{r.t}</p>
                  <a href={r.u} {...(r.u.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className={styles.citation} style={{ fontFamily: T.fm, fontSize: 12, color: T.n400, textDecoration: 'underline' }}>{r.s}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. WHAT SYNCS, AND WHO OWNS EACH RECORD */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Start with owners</span>
                <h2>What syncs between Shopify and Xero, and which side owns each record</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  A link goes wrong when two systems both believe they are in charge of the same number. So the
                  first thing we write down is an owner for every record: the one place it is created and edited.
                  The apps, the accounts and the tax rates all follow from that list.
                </p>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src={`${IMG}/shopify-xero-record-owners.webp`} width={1200} height={800} loading="lazy" decoding="async" alt="A woman in a green shirt and a man in a cream top arrange blank orange and yellow sticky notes in two columns on a white table" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    Two columns, one for each system. Every record goes in one column only. The finished map is a
                    single page that you and your accountant sign.
                  </p>
                </div>
              </div>
            </div>
            <div className={`card mt-10 ${styles.tableBox}`} tabIndex={0} role="region" aria-label="Comparison table" style={{ padding: 0, overflowX: 'auto' }}><table className="cmp-table" style={{ minWidth: 820 }} data-columns={4}>
                <thead>
                  <tr>
                    <th>Record</th>
                    <th className="fj">Owner</th>
                    <th>What lands in Xero</th>
                    <th>Worth knowing</th>
                  </tr>
                </thead>
                <tbody>
                  {OWNERS.map((o) => (
                    <tr key={o.record}>
                      <td className="feat">{o.record}</td>
                      <td className="fj">{o.owner}</td>
                      <td>{o.lands}</td>
                      <td>{o.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={srcNote}>
              The owner column is the map we propose on day one. Yours is agreed in writing, record by record,
              before anything is built.
            </p>
            <Sources ids={['xeroLimits', 'shopifyLower', 'shopifyFees', 'govVatRates']} />
          </div>
        </section>

        {/* 5. PAYOUTS */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Shopify Payments payouts</span>
                <h2>Why one Shopify payout never matches one sale</h2>
                <div className="stack mt-6">
                  <p>
                    Shopify does not pay you order by order. Its help centre describes payouts as batches, with
                    several transactions combined into one transfer. By the time the money reaches your bank,
                    Shopify has taken its processing fees out, and any refunds you made since the last payout
                    have been deducted too.
                  </p>
                  <p>
                    Shopify’s own list of reasons a payout comes in lower than expected has nine entries,
                    including chargebacks, reserves, adjustments and currency conversion. The payout export it
                    offers includes three columns that tell the story for each transaction: Amount, Fee and Net.
                  </p>
                  <p>
                    A link that posts sales straight to the bank account will never reconcile. The fix is a
                    clearing account. Sales, refunds and fees post there as they happen, and when the payout
                    lands, one transfer moves the net amount to the bank. Amaka’s guide for the Xero integration
                    describes this set-up, with a clearing account it calls the Shopify Payment Balance.
                  </p>
                  <p>
                    Other payment methods need the same care. A2X says it creates a separate entry for each
                    payment gateway on your store, and Link My Books lists PayPal, Klarna and Clearpay among the
                    gateways it covers. We give each one its own clearing account.
                  </p>
                </div>
                <Sources ids={['shopifyLower', 'amakaGuide', 'a2xShopifyXero', 'lmbShopifyXero', 'shopifyPricing']} />
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src={`${IMG}/shopify-xero-payout-matching.webp`} width={1200} height={800} loading="lazy" decoding="async" alt="A grey-haired man in glasses and a navy cardigan sorts blank white paper slips into two piles at a wooden desk beside an orange folder" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">A worked example, at Shopify’s listed Basic card rate</span>
                  <div className="scorecard-row"><div><div className="scorecard-metric">10 orders at £120 each</div><div className="scorecard-note">prices include 20% VAT</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>£1,200.00</div></div>
                  <div className="scorecard-row"><div><div className="scorecard-metric">Card fees at 2% + 25p an order</div><div className="scorecard-note">10 × £2.65</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>-£26.50</div></div>
                  <div className="scorecard-row"><div><div className="scorecard-metric">One order refunded in full</div><div className="scorecard-note">taken out of this payout</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>-£120.00</div></div>
                  <div className="scorecard-row"><div><div className="scorecard-metric">Payout that reaches the bank</div><div className="scorecard-note">one line on the statement</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>£1,053.50</div></div>
                  <div className="scorecard-row"><div><div className="scorecard-metric">VAT inside those entries</div><div className="scorecard-note">£200 on sales, less £20 on the refund</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>£180.00</div></div>
                  <p style={{ fontSize: 12.5, marginTop: 8 }}>
                    Our arithmetic, for illustration. The card rate is the one listed for the Basic plan on
                    Shopify’s UK pricing page on {READ_ON}. Your plan and your mix of cards will change the
                    figures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. VAT */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">VAT, in plain English</span>
              <h2>VAT on sales, refunds, fees and exports: what the link has to carry</h2>
              <div className={styles.comparisonBox} tabIndex={0} role="region" aria-label="Comparison table"><table className={styles.comparisonTable} data-comparison-layout><tbody><tr><th><b>Sales.</b></th><td><p>GOV.UK lists three VAT rates: 20% standard, 5% reduced and 0% zero. A shop that
                  sells children’s clothes beside adult clothes has two of them in one basket. HMRC’s Making Tax
                  Digital notice says the digital record of each supply needs the time of supply, the value
                  before VAT and the rate charged. It also says supplies at the same rate on one invoice, in the
                  same VAT period, can be recorded as a single entry, and that a business on a VAT retail scheme
                  keeps a digital record of its daily gross takings without listing each sale. Whether a daily
                  or per-payout summary is the right record for your shop is a question for your accountant. The
                  link then posts it that way, with one line for each rate.
                </p></td></tr><tr><th><b>Refunds.</b></th><td><p>GOV.UK says that when a customer returns goods you settle the balance with a
                  replacement invoice or a credit or debit note, and that you record these in your accounts. In
                  the link, a refund posts as a credit at the same VAT rate as the sale it reverses. It waits in
                  the clearing account until Shopify takes it out of a payout.
                </p></td></tr><tr><th><b>Fees.</b></th><td><p>Shopify’s help centre says that in the United Kingdom a 0% tax rate, which it
                  calls a reverse charge, applies to Shopify Payments processing fees, and that you need to
                  maintain your own tax records for them. Which Xero tax rate that maps to is your accountant’s
                  call. The link keeps fees on their own line so the answer can be applied.
                </p></td></tr><tr><th><b>Exports.</b></th><td><p>GOV.UK says you can zero rate most exports from Great Britain to any
                  destination outside the UK, as long as you get and keep evidence of the export within three
                  months of the sale. A link can split UK orders from the rest by delivery country. Keeping the
                  evidence stays with you.
                </p></td></tr></tbody></table></div>
              <Sources ids={['govVatRates', 'govNotice', 'govVatRecords', 'shopifyFees', 'govExports']} />
            </div>
            <ul className="col-3 mt-10">
              <li className="card"><h3>What the link does</h3><p className="mt-4">Posts sales by VAT rate, refunds as credits, fees on their own line and each payout as one transfer, into the accounts and tax rates your accountant chose.</p></li>
              <li className="card"><h3>What your accountant decides</h3><p className="mt-4">Which Xero account and tax rate each kind of line uses, whether you post summaries or single orders, and how sales outside the UK are treated.</p></li>
              <li className="card"><h3>What stays with you</h3><p className="mt-4">The VAT Return itself, the export evidence, and the VAT records GOV.UK says you must keep for at least 6 years.</p></li>
            </ul>
          </div>
        </section>

        {/* 7. MAKING TAX DIGITAL */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Making Tax Digital</span>
                <h2>Where a Shopify link sits in Making Tax Digital</h2>
                <div className="stack mt-6">
                  <p>
                    GOV.UK says all VAT-registered businesses should now be signed up for Making Tax Digital for
                    VAT. Under it, some VAT records must be kept digitally, in what HMRC calls compatible
                    software. Xero describes its own software as HMRC-recognised, and its UK pricing page lists
                    ‘Submit VAT returns to HMRC’ on every plan.
                  </p>
                  <p>
                    The part that touches Shopify is the digital link. GOV.UK says that if you use more than one
                    software product to keep records and submit returns, they must be linked digitally, and that
                    you cannot transfer the data by hand or copy and paste it between them. VAT Notice 700/22
                    lists what HMRC accepts as a digital link. API transfer is on the list. So is CSV import and
                    export.
                  </p>
                  <p>
                    A connector app or a custom link moves figures from Shopify into Xero by API, with nobody
                    retyping them. Whether Shopify counts as part of your digital records is a point for your
                    accountant, because the notice treats software differently depending on how you use it.
                    Either way, figures that travel by API are on HMRC’s accepted list.
                  </p>
                  <p>
                    Sole traders have a second date to watch. GOV.UK says Making Tax Digital for Income Tax
                    applies from 6 April 2026 if your qualifying income was over £50,000 in the 2024 to 2025 tax
                    year, from 6 April 2027 if it is over £30,000 in 2025 to 2026, and from 6 April 2028 if it is
                    over £20,000 in 2026 to 2027.
                  </p>
                </div>
                <Sources ids={['govVatRecords', 'govNotice', 'govMtdIncome', 'govMtdSoftware', 'xeroMtd', 'xeroPricing']} />
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What HMRC’s notice says about digital links</span>
                <div className={styles.comparisonBox} tabIndex={0} role="region" aria-label="Comparison table"><table className={styles.comparisonTable} data-comparison-layout><tbody><tr className="scorecard-row"><th><div><div className="scorecard-metric">API transfer</div><div className="scorecard-note">how connector apps and custom links work</div></div></th><td><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Accepted</div></td></tr><tr className="scorecard-row"><th><div><div className="scorecard-metric">CSV import and export</div><div className="scorecard-note">download from one, upload to the other</div></div></th><td><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Accepted</div></td></tr><tr className="scorecard-row"><th><div><div className="scorecard-metric">Emailing a spreadsheet of records</div><div className="scorecard-note">to be imported into other software</div></div></th><td><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Accepted</div></td></tr><tr className="scorecard-row"><th><div><div className="scorecard-metric">Linked spreadsheet cells</div><div className="scorecard-note">a formula that mirrors another cell</div></div></th><td><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Accepted</div></td></tr><tr className="scorecard-row"><th><div><div className="scorecard-metric">Copy and paste, or retyping</div><div className="scorecard-note">HMRC does not count it as a digital link</div></div></th><td><div className="scorecard-val" style={{ fontSize: 14 }}>Not a link</div></td></tr></tbody></table></div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. MULTI-CURRENCY */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Euros, dollars and pounds</span>
                <h2>Selling in more than one currency: two plan limits to check first</h2>
                <div className="stack mt-6">
                  <p>
                    <b>Shopify.</b> Its help centre says stores on the Basic, Grow and Shopify plans can sell in
                    several currencies but are paid out only in their domestic currency, with a conversion fee
                    when a customer pays in another one. Stores on Advanced and Shopify Plus can add one bank
                    account for each supported payout currency. For a UK store that list includes euros and US
                    dollars, and Shopify says pound payouts can only go to a UK bank account.
                  </p>
                  <p>
                    <b>Xero.</b> The UK pricing page lists ‘Use multiple currencies’ on the Comprehensive plan
                    (£55 a month before VAT) and the Ultimate plan (£70). It does not list it on Ignite (£18) or
                    Grow (£39).
                  </p>
                  <p>
                    Put the two together. If every payout arrives in pounds, the books can stay in pounds and the
                    conversion fee posts as a cost. Once you take payouts in euros or dollars, Xero needs a plan
                    with multiple currencies, and the link has to post each payout in the currency it was paid
                    in, against the right bank account.
                  </p>
                  <p>
                    We check both plans on the scoping call, before you pay for an upgrade you may not need.
                  </p>
                </div>
                <Sources ids={['shopifyMulti', 'xeroPricing']} />
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Which plans carry more than one currency</span>
                <div className={styles.comparisonBox} tabIndex={0} role="region" aria-label="Comparison table"><table className={styles.comparisonTable} data-comparison-layout><tbody><tr className="scorecard-row"><th><div><div className="scorecard-metric">Shopify Basic, Grow and Shopify</div><div className="scorecard-note">sell in many, paid out in pounds</div></div></th><td><div className="scorecard-val" style={{ fontSize: 14 }}>Pounds only</div></td></tr><tr className="scorecard-row"><th><div><div className="scorecard-metric">Shopify Advanced and Plus</div><div className="scorecard-note">one bank account per payout currency</div></div></th><td><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Several</div></td></tr><tr className="scorecard-row"><th><div><div className="scorecard-metric">Xero Ignite and Grow</div><div className="scorecard-note">multiple currencies not listed</div></div></th><td><div className="scorecard-val" style={{ fontSize: 14 }}>Pounds only</div></td></tr><tr className="scorecard-row"><th><div><div className="scorecard-metric">Xero’s two top plans</div><div className="scorecard-note">multiple currencies listed</div></div></th><td><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Several</div></td></tr></tbody></table></div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. CONNECTOR APPS (ItemList) + COMPARISON TABLE */}
        <section className="sec-lg" id="connector-apps">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">The apps</span>
              <h2>Four Shopify Xero connector apps, with list prices read on {READ_ON}</h2>
              <p className="lead mt-4">
                A search for Shopify on the Xero App Store UK returned more than 20 apps that day. These four are
                the names that came up in the UK search results we pulled alongside it. Each line restates the
                maker’s own page, and each rating is the one shown on the Xero App Store.
              </p>
            </div>
            <ul className="col-2 mt-10">
              {CONNECTORS.map((c) => (
                <li key={c.name} className="plat-card">
                  <div className="plat-top">
                    <h3 className="plat-name">{c.name}</h3>
                    <span className="plat-pill">{c.maker}</span>
                  </div>
                  <p style={{ fontSize: 14, color: T.ink }}><b>List price:</b> {c.price}.</p>
                  <p style={{ fontSize: 14, marginTop: 8 }}>{c.says}</p>
                  <p className="plat-best"><b>Suits:</b> {c.suits}</p>
                  <p style={{ fontFamily: T.fm, fontSize: 12, color: T.n400, marginTop: 8 }}>Xero App Store: {c.rating}</p>
                  <Sources ids={c.sources} />
                </li>
              ))}
            </ul>

            <h3 className="mt-12" style={{ maxWidth: 820 }}>Xero’s own integration, three connector apps and a custom link, side by side</h3>
            <div className={`card mt-6 ${styles.tableBox}`} tabIndex={0} role="region" aria-label="Comparison table" style={{ padding: 0, overflowX: 'auto' }}><table className="cmp-table" style={{ minWidth: 980 }} data-columns={6}>
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th>Xero’s own integration</th>
                    <th>Amaka</th>
                    <th>Link My Books</th>
                    <th>A2X</th>
                    <th className="fj">Custom link built by FactoryJet</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.map((r) => (
                    <tr key={r.feat}>
                      <td className="feat">{r.feat}</td>
                      <td>{r.xero}</td>
                      <td>{r.amaka}</td>
                      <td>{r.lmb}</td>
                      <td>{r.a2x}</td>
                      <td className="fj">{r.fj}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={srcNote}>
              Prices and ratings are as listed on each maker’s own page and on the Xero App Store on {READ_ON}.
              They change, so read the linked page before you act on one. A2X and Amaka list their prices in US
              dollars. Link My Books prices come from its own calculator, set to one sales channel and pounds.
            </p>
            <p className="mt-6" style={{ maxWidth: 780 }}>
              One thing we saw while reading. On {READ_ON} the listing named Xero on the Shopify App Store read
              ‘This app is not currently available on the Shopify App Store’. Xero’s own page tells you to start
              from the Xero App Store, so that is the place to look.
            </p>
            <Sources ids={['xeroAppSearch', 'shopifyAppXero', 'xeroShopify']} />
          </div>
        </section>

        <MidPageCTA
          headline={'Bring one month of payouts and your Xero plan. We reply with the route.'}
          sub={'Tell us your order volume, the VAT rates you sell at and the currencies you are paid in. On a short call we say whether Xero’s free integration, a paid connector or a custom link is the right job, and we quote a fixed price if there is work for us.'}
          label={'Scope my Xero link'}
        />

        {/* 10. APP OR CUSTOM */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">App or custom</span>
                <h2>When an app is enough, and when a custom link is the better job</h2>
                <div className="stack mt-6">
                  <p>
                    Start with the free route. If Shopify is where every sale happens, you sell at one or two VAT
                    rates, you are paid in pounds and your books only need sales, refunds, fees and payouts,
                    Xero’s own integration or a low-priced connector does the job. We will say so on the first
                    call.
                  </p>
                  <p>
                    A paid connector earns its price when the VAT gets harder: mixed rates in one basket, sales
                    outside the UK, several payment methods paying out on different days, or a year of history
                    to catch up.
                  </p>
                  <p>
                    A custom link is the better job when the rule belongs to your business and no app has a
                    setting for it.
                  </p>
                </div>
                <ul className="scope-list yes-list mt-4" style={{ maxWidth: 600 }}>
                  <li><b>Stock or prices are held outside Shopify.</b> Xero, a warehouse system or an ERP is in charge, and the store has to follow.</li>
                  <li><b>Wholesale orders need real invoices.</b> Named customers, payment terms, and the paid status sent back to the store.</li>
                  <li><b>There is more than one company or set of books.</b> Two stores feeding one Xero organisation, or one store split across two.</li>
                  <li><b>Your management accounts need a split no app offers.</b> By channel, region, brand or sales rep.</li>
                  <li><b>The numbers are too big for one invoice an order.</b> Order detail is kept in a database you own, and Xero receives the summaries.</li>
                  <li><b>Another system sits in the chain.</b> EDI orders, a HubSpot CRM, a warehouse partner or a marketplace feed.</li>
                </ul>
                <p className="mt-6" style={{ maxWidth: 600 }}>
                  FactoryJet builds these links, and the same team supports them after launch. For the store
                  itself, see <a href="/uk/shopify-development" style={inlineLink}>Shopify development in the UK</a>,{' '}
                  <a href="/uk/shopify-plus" style={inlineLink}>Shopify Plus</a> or{' '}
                  <a href="/uk/shopify-migration" style={inlineLink}>moving a store to Shopify</a>.
                </p>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">A rule of thumb</span>
                <div className={styles.comparisonBox} tabIndex={0} role="region" aria-label="Comparison table"><table className={styles.comparisonTable} data-comparison-layout><tbody><tr className="scorecard-row"><th><div><div className="scorecard-metric">One store, pounds, one or two VAT rates</div><div className="scorecard-note">Shopify leads and the books follow</div></div></th><td><div className="scorecard-val" style={{ fontSize: 14 }}>Free app</div></td></tr><tr className="scorecard-row"><th><div><div className="scorecard-metric">Mixed VAT rates or sales outside the UK</div><div className="scorecard-note">payout summaries by rate and country</div></div></th><td><div className="scorecard-val" style={{ fontSize: 14 }}>Paid app</div></td></tr><tr className="scorecard-row"><th><div><div className="scorecard-metric">More than 5,000 orders a month</div><div className="scorecard-note">summaries, never one invoice an order</div></div></th><td><div className="scorecard-val" style={{ fontSize: 14 }}>Paid app</div></td></tr><tr className="scorecard-row"><th><div><div className="scorecard-metric">Stock or prices led from Xero or an ERP</div><div className="scorecard-note">data has to flow into Shopify</div></div></th><td><div className="scorecard-val" style={{ fontSize: 14 }}>Custom</div></td></tr><tr className="scorecard-row"><th><div><div className="scorecard-metric">Wholesale invoices on payment terms</div><div className="scorecard-note">paid status back to the store</div></div></th><td><div className="scorecard-val" style={{ fontSize: 14 }}>Custom</div></td></tr><tr className="scorecard-row"><th><div><div className="scorecard-metric">Several companies, stores or systems</div><div className="scorecard-note">one map across all of them</div></div></th><td><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Custom</div></td></tr></tbody></table></div>
              </div>
            </div>
          </div>
        </section>

        {/* 11. HOW WE BUILD IT (NUMBERED LIST) */}
        <section className="sec-lg" id="how-we-build">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">How we work</span>
                <h2>How we build a Shopify to Xero link, in seven steps</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  The steps are the same for an app set-up and a custom link. Only step four changes. Your
                  accountant is in the room for steps two and five.
                </p>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src={`${IMG}/shopify-xero-stock-count.webp`} width={1200} height={800} loading="lazy" decoding="async" alt="A young man in a grey apron holds a clipboard and reaches for a glass jar on a wooden stock room shelf" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    Before anything is connected we count what is there: products, SKUs, VAT rates and the
                    accounts they post to. Whatever is wrong in the product list on day one will be wrong in the
                    books by day two, so we check it first.
                  </p>
                </div>
              </div>
            </div>
            <figure className={styles.processFigure} data-process-flow aria-label="How we build a Shopify to Xero link, in seven steps"><ol className={`stack mt-10 ${styles.processFlow}`} style={{ maxWidth: 900 }}>
              {[
                { n: '01', t: 'Read one month of payouts', d: 'We take a month of your Shopify payouts and the matching bank lines and list every kind of entry inside them: sales by VAT rate, refunds, fees, chargebacks, gift cards and currencies. That list is the brief.' },
                { n: '02', t: 'Agree the posting rules with your accountant', d: 'For each kind of entry your accountant names the Xero account and the tax rate. We write it down as a one-page map, and both sides sign it before anything is built.' },
                { n: '03', t: 'Name an owner for every record', d: 'Sales, refunds, customers, products, prices and stock each get one home. Where two systems hold the same number, the map says which one wins.' },
                { n: '04', t: 'Choose the lightest route that fits', d: 'Xero’s free integration comes first, then a paid connector, then a custom link. We quote custom work only for the rules the first two cannot follow, and the quote is a fixed price in writing.' },
                { n: '05', t: 'Show it on your own data', d: 'Before a contract, we show working software on your own data: a handful of your real orders, a refund and a payout posted into a trial Xero organisation, so your accountant can check each entry.' },
                { n: '06', t: 'Test the awkward orders', d: 'A part refund, a discount code, a zero-rated item, an order in euros, a gift card and a chargeback all go through before any live order is touched.' },
                { n: '07', t: 'Go live, match the first payouts, stay on', d: 'For the first weeks we compare every Shopify payout with the bank line and the clearing account balance. After that the same team supports the link, and you own the code and the map.' },
              ].map((s) => (
                <li key={s.n} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.small, minWidth: 34 }} className={styles.stageMarker}>{s.n}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{s.t}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol></figure>
          </div>
        </section>

        {/* 12. WHO IT IS FOR */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Who this is for</span>
              <h2>Shopify Xero integration for shops, brands, wholesalers and WooCommerce stores</h2>
              <p className="lead mt-4">
                The trade changes the detail. The job stays the same: every pound Shopify pays you can be traced
                to the sales, refunds and fees behind it.
              </p>
            </div>
            <div className={styles.comparisonBox} tabIndex={0} role="region" aria-label="Comparison table"><table className={styles.comparisonTable} data-comparison-layout><tbody><tr className="svc-card"><th><h3>Shops doing their own books</h3></th><td><p className="mt-4">You sell on Shopify, keep Xero yourself and want the weekly bank matching to take minutes. Usually an app, set up properly once.</p></td></tr><tr className="svc-card"><th><h3>Brands with an accountant</h3></th><td><p className="mt-4">Your accountant wants clean payout summaries and VAT figures they can file from. We build to their rules and work with them directly.</p></td></tr><tr className="svc-card"><th><h3>Wholesale and trade sellers</h3></th><td><p className="mt-4">Trade customers on payment terms need named invoices in Xero and a paid status back in the store, beside the retail orders.</p></td></tr><tr className="svc-card"><th><h3>Sellers in several currencies</h3></th><td><p className="mt-4">Payouts in pounds, euros and dollars, each posted in its own currency and matched to its own bank account in Xero.</p></td></tr><tr className="svc-card"><th><h3>Larger and multi-store businesses</h3></th><td><p className="mt-4">Several stores, high order volumes or a warehouse partner in the chain, with one posting map across all of them.</p></td></tr><tr className="svc-card"><th><h3>WooCommerce stores on Xero</h3></th><td><p className="mt-4">The same questions with a different shop system: VAT by rate, gateway payouts and refunds. Apps exist, and we build custom links here too.</p></td></tr></tbody></table></div>
            <p className="mt-8" style={{ maxWidth: 780 }}>
              If the store itself needs building or rebuilding, see{' '}
              <a href="/uk/ecommerce-development" style={inlineLink}>ecommerce development in the UK</a>,{' '}
              <a href="/uk/shopify-development" style={inlineLink}>Shopify development</a> and{' '}
              <a href="/uk/woocommerce" style={inlineLink}>WooCommerce development</a>. For trade buyers, see{' '}
              <a href="/uk/b2b-ecommerce" style={inlineLink}>B2B ecommerce</a>. For supplier bills paid out of the
              same Xero, see <a href="/uk/accounts-payable-automation" style={inlineLink}>accounts payable automation</a>.
              If your books are in QuickBooks, see{' '}
              <a href="/services/shopify-quickbooks-integration" style={inlineLink}>Shopify QuickBooks integration</a>.
            </p>
          </div>
        </section>

        {/* 13. SIZES OF JOB */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Scope first</span>
                <h2>Three sizes of job, each quoted as a fixed price</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  The first one is where we start. We move up the list only when your rules call for it.
                </p>
                <ul className="scope-list num-list mt-6" style={{ maxWidth: 580 }}>
                  <li><b>Connector set-up.</b> We choose the app with you, map accounts and tax rates with your accountant, import the history you need and check the first payouts against the bank.</li>
                  <li><b>Custom link.</b> A link built for your rules: stock or prices into Shopify, wholesale invoices, several stores or several sets of books.</li>
                  <li><b>Link plus support.</b> Either of the above, with the same team on call after launch for new tax rates, new payment methods and changes to the Shopify or Xero APIs.</li>
                </ul>
                <p className="mt-6" style={{ maxWidth: 560 }}>
                  FactoryJet quotes the build and the ongoing support as fixed prices in writing after a short
                  scoping call. For a custom link we keep managing the servers, APIs and maintenance, so your
                  team does not have to.
                </p>
                <div className="mt-8">
                  <ModalCTAButton label="Scope my Xero link" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What to bring to the scoping call</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">Your Shopify plan and order volume</div><div className="scorecard-note">orders a month, stores, POS or not</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>1</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Your Xero plan</div><div className="scorecard-note">and whether you use more than one currency</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>2</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">One month of payouts</div><div className="scorecard-note">the export with Amount, Fee and Net</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>3</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">The VAT rates you sell at</div><div className="scorecard-note">and any sales outside the UK</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>4</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Your accountant or bookkeeper</div><div className="scorecard-note">they are welcome on the call</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>5</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* 14. SOURCES */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Method</span>
              <h2>Sources, read on {READ_ON}</h2>
              <p className="lead mt-4">
                Every price, rating, plan limit and tax rule on this page was read on the pages below on that day.
                App prices and ratings move, and tax rules are HMRC’s to change, so open the linked page before
                you act on a figure.
              </p>
            </div>
            <ul className="col-2 mt-8" style={{ gap: 10 }}>
              {SOURCE_KEYS.map((k) => (
                <li key={k} style={{ fontSize: 14 }}>
                  <a href={SRC[k].url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: T.ink }}>{SRC[k].label}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 15. FAQ */}
        <section className="sec-lg" id="faq">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>Shopify and Xero questions from UK sellers and their accountants</h2>
            </div>
            <div className="faq-grid">
              <aside className="faq-sidebar">
                <span className="faq-sidebar-topics">Topics</span>
                <nav className="faq-sidebar-nav">
                  {FAQ_CATEGORIES.map((c) => (
                    <a key={c.key} href={`#faq-${c.key}`}>
                      {c.label}
                      <span className="faq-nav-count">{FAQ_ITEMS.filter((f) => f.category === c.key).length}</span>
                    </a>
                  ))}
                </nav>
                <div className="faq-sidebar-cta">
                  <ModalCTAButton label="Ask the founder a question" region="uk" modalVariant="default" btnVariant="secondary-light" />
                  <p>Bhavesh replies within one business day.</p>
                </div>
              </aside>

              <div>
                {FAQ_CATEGORIES.map((c) => (
                  <div key={c.key} id={`faq-${c.key}`} style={{ marginBottom: 40 }}>
                    <div className="faq-cat-header">
                      <span className="faq-cat-bar" />
                      <p className="faq-cat-label">{c.label}</p>
                    </div>
                    <ul className="faq-list">{FAQ_ITEMS.filter((f) => f.category === c.key).map((f) => (
                      <li key={f.question}><details className="faq-item">
                        <summary>
                          <span className="q-text">{f.question}</span>
                          <span className="chevron">
                            <svg viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          </span>
                        </summary>
                        <div className="faq-ans"><p>{f.answer}</p></div>
                      </details></li>
                    ))}</ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 16. FINAL CTA (the only dark section) */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Next step</span>
            <h2>Make every Shopify payout agree with the bank line</h2>
            <p className="mt-4">
              Send your name and work email. Bhavesh replies within one business day to set up a short call about
              your Shopify plan, your Xero plan and how your payouts land. You leave the call knowing whether a
              free app, a paid connector or a custom link is the right job.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="Scope my Xero link" region="uk" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/contact" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>Contact us</a>
            </div>
          </div>
        </section>

      </main>
        <Footer />
      </div>
    </>
  );
}

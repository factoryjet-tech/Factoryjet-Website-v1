import type { Metadata } from 'next';
import { Fragment } from 'react';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import AuFaq from '../components/AuFaq';
import VisualSlot from '../components/VisualSlot';
import '@/components/v2/AiAgentDevelopmentSections.css';
import '../au-page.css';
import '../au-hub.css';
import './page.css';

const CANONICAL = 'https://factoryjet.com/au/b2b-ecommerce';
const UPDATED = '2026-10-29';
const TITLE = 'B2B Ecommerce Australia | Wholesale Trade Portals | FactoryJet';
const H1 = 'B2B Ecommerce Australia: Trade Portals for Wholesalers and Manufacturers';
const DESCRIPTION =
  'B2B ecommerce for Australian wholesalers and manufacturers: trade portals with account pricing ex GST, connected to Xero, MYOB, NetSuite, Cin7, Unleashed or Odoo.';

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD, so the
   schema can never describe a trail a human cannot see. Never hand-copy a
   second list here. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'B2B Ecommerce Australia', url: CANONICAL },
];

/* ─── External sources, each fetched and read 2026-10-29 (HTTP 200, claim
       confirmed in the fetched body). ato.gov.au and accc.gov.au refuse
       scripted clients, so those were read through a text proxy of the same URL. */
// ACCC, Price displays: "If a business is displaying prices only to other
// businesses, it doesn't need to include GST in the total price." and
// "Businesses must display the total price of a product or service as a single figure."
const SRC_ACCC_PRICE = 'https://www.accc.gov.au/business/pricing/price-displays';
// ATO, Tax invoices: "If a customer asks for a tax invoice, you must provide one within
// 28 days" unless the sale is "$82.50 (including GST) or less"; "Tax invoices for sales
// of $1,000 or more also need to show the buyer's identity or ABN."
const SRC_ATO_TAX_INVOICES =
  'https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/tax-invoices';
// ATO, About eInvoicing (last updated 7 July 2026): "over 400,000 Australian businesses"
// on the Peppol network; "buyers don't need to manually enter or scan invoices into their
// software"; "eInvoicing is not a compliance or revenue measure".
const SRC_ATO_EINVOICING = 'https://www.ato.gov.au/businesses-and-organisations/einvoicing/about-einvoicing';
// ATO, Peppol: Peppol is "an international eProcurement framework"; "The Australian
// Government nominated the ATO to be the Australian Peppol Authority"; "your business and
// your trading partners need to connect to the Peppol network"; many small business
// accounting packages "already offer eInvoicing".
const SRC_ATO_PEPPOL = 'https://www.ato.gov.au/businesses-and-organisations/einvoicing/peppol';
// ATO, eInvoicing for government: non-corporate Commonwealth entities to "increase the use
// of eInvoicing to 30% of all invoices received by 1 July 2026" and "enable automated
// processing and sending of eInvoices by December 2026".
const SRC_ATO_GOV =
  'https://www.ato.gov.au/businesses-and-organisations/einvoicing/einvoicing-for-government';
// Xero AU, eInvoicing: "Your business can only send eInvoices domestically within
// Australia"; eInvoices arrive "as draft bills ready for approval"; links to the Peppol
// directory. Xero guide for accountants: "B2B e-invoicing remains voluntary".
const SRC_XERO_EINVOICING = 'https://www.xero.com/au/accounting-software/send-invoices/e-invoicing-software/';
const SRC_XERO_GUIDE = 'https://www.xero.com/au/accountant-bookkeeper-guides/what-is-e-invoicing/';
// Shopify Help Center, B2B features by plan: B2B on "Basic, Grow, Advanced, and Shopify
// Plus"; "up to 3 active catalogs across all your B2B markets" below Plus; Plus "unlimited";
// "Deposit requirements, partial payments, and payment requests per fulfillment are
// available only on the Shopify Plus plan"; direct company catalogs Plus only.
const SRC_SHOPIFY_B2B = 'https://help.shopify.com/en/manual/b2b/getting-started/plan-features';
// Shopify Australia pricing page, for live plan fees in AUD (we never restate them).
const SRC_SHOPIFY_PRICING = 'https://www.shopify.com/au/pricing';
// Cin7 Core help: "Cin7 Core lets you set up to 10 price points for each individual
// product"; tiers assigned to customers or sale orders; "The sale order price tier takes
// priority over the customer price tier."
const SRC_CIN7 =
  'https://help.core.cin7.com/hc/en-us/articles/9034451522703-How-can-I-use-different-prices-for-a-customer';
// Unleashed help, B2B Portal introduction: pushes product information, images, customer
// details, stock and pricing to B2B Stores; "Import from B2B Portal to Unleashed every
// 10-15 minutes"; order status syncs back "every 15 minutes".
const SRC_UNLEASHED = 'https://help-unleashed.theaccessgroup.com/en/articles/11582440-b2b-portal-introduction';
// Market ranges (build only, never FactoryJet prices; neither source says whether GST is
// included). Digitized Kosmos, Sydney and Australia page: "Custom B2B wholesale and
// industrial e-commerce platforms typically range between AUD $20,000 to AUD $65,000".
// What's The Damage? (Focus Search Pty Ltd, ABN 70 167 781 946), BigCommerce Cost in
// Perth, last verified October 2026: "$15,000–$50,000 for B2B and wholesale builds".
const SRC_KOSMOS = 'https://digitizedkosmos.com/locations/sydney-australia';
const SRC_WTD = 'https://whatsthedamage.com.au/bigcommerce-cost-perth/';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',    label: 'B2B ecommerce basics' },
  { key: 'platforms', label: 'Platforms and portals' },
  { key: 'systems',   label: 'Xero, MYOB, ERP and stock' },
  { key: 'gst',       label: 'GST, invoices and Peppol' },
  { key: 'cost',      label: 'Cost and timing' },
  { key: 'working',   label: 'Working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string; links?: { href: string; label: string }[] }[] = [
  // ── B2B ecommerce basics ──
  { category: 'basics', question: 'What does B2B mean in ecommerce?',
    answer: 'B2B means business to business. In ecommerce it is a store where your customers are other companies: retailers, trade contractors, venues or distributors. They log in to an account, see the prices agreed for that account, order in cartons or pallets, and pay on terms instead of by card upfront. A retail store sells to the public at one shelf price. A B2B store sells to known accounts at many prices.' },
  { category: 'basics', question: 'What is a trade portal or dealer portal?',
    answer: 'It is the logged-in part of a B2B store where an approved account does its ordering. A dealer portal is the same idea for manufacturers who sell through dealers, often with spec sheets, warranty forms and parts lookups added. In our Australian keyword data, dealer portal draws about 1,300 searches a month and trade portal about 170, so the words differ by industry while the job stays the same.' },
  { category: 'basics', question: 'What are some examples of B2B ecommerce in Australia?',
    answer: 'A food wholesaler letting cafes reorder online before a delivery cut-off. A building supplies distributor giving each trade account its own prices and a 30-day account. A manufacturer of pumps or fittings letting dealers check stock and order spare parts. A homewares brand running a retail store and a stockist portal from one catalogue. Each one moves orders out of email and phone calls and into a system that writes straight to the books.' },
  { category: 'basics', question: 'Can one store sell to the public and to trade buyers?',
    answer: 'Yes, and for brands with both channels it is usually the better design. One catalogue and one stock pool serve both sides. Retail shoppers see GST-inclusive prices and pay at checkout, with Afterpay or Zip if you offer them. Logged-in trade accounts see their own price list, ex GST if you choose, and can pay on account. The rules about what each group sees live in the store, so staff stop keeping two price files in step.' },

  // ── Platforms and portals ──
  { category: 'platforms', question: 'What is the best B2B ecommerce platform for an Australian wholesaler?',
    answer: 'It depends on where your prices and stock live today. If you already sell retail on Shopify, Shopify B2B or Shopify Plus is usually first to test. If Cin7 Core or Unleashed already holds your customers and price tiers, their own portals or a store fed from them may be enough. Complex quoting, approvals or large catalogues point to Adobe Commerce, BigCommerce or a custom portal. We start from your own price and stock data.',
    links: [{ href: '/blog/best-b2b-ecommerce-platform-manufacturers-distributors-2026', label: 'B2B ecommerce platforms for manufacturers and distributors' }] },
  { category: 'platforms', question: 'Can you do B2B on Shopify?',
    answer: 'Yes. Shopify’s help centre lists B2B features for the Basic, Grow, Advanced and Shopify Plus plans, and not for Starter or Retail. Every supported plan gets company accounts, payment terms and quantity rules. Below Plus you can run up to three active B2B catalogues. Plus has no catalogue cap and adds catalogues set per company, deposits and partial payments. A wholesaler with dozens of negotiated price lists will usually end up on Plus or need a workaround.',
    links: [{ href: SRC_SHOPIFY_B2B, label: 'Shopify Help: B2B features by plan' }] },
  { category: 'platforms', question: 'How much does Shopify B2B cost?',
    answer: 'Shopify includes its B2B features in the Basic, Grow, Advanced and Plus plans, so there is no separate B2B licence on those plans. What you pay is the plan that fits your catalogue and price-list count, plus any apps and the build work to set up companies, catalogues and your accounting connection. Shopify publishes its current plan fees in Australian dollars on its own pricing page, and those change, so read them there.',
    links: [{ href: SRC_SHOPIFY_PRICING, label: 'Shopify Australia pricing' }] },
  { category: 'platforms', question: 'Does Cin7 have a B2B portal, and is it enough?',
    answer: 'Cin7 Core, the product formerly sold as DEAR, has a B2B portal, and its help centre says each product can carry up to 10 price points assigned to customers or to a sale order. For a wholesaler with simple tiers that can be enough. Businesses that need a branded storefront, retail and trade in one place, richer product content or SEO usually put a store in front of Cin7 and let Cin7 keep stock and pricing.',
    links: [{ href: SRC_CIN7, label: 'Cin7 Core: different prices for a customer' }] },
  { category: 'platforms', question: 'Does Unleashed have a B2B store?',
    answer: 'Yes. Unleashed has its own B2B store. Its help centre says the B2B Portal pushes product details, images, customers, stock and pricing to the store, imports orders into Unleashed every 10 to 15 minutes, and syncs order status back every 15 minutes. If a 15-minute gap matters, for example on fast-moving stock or cut-off times, factor that into the design or put a store with a direct connection in front.',
    links: [{ href: SRC_UNLEASHED, label: 'Unleashed: B2B Portal introduction' }] },
  { category: 'platforms', question: 'What is the best website setup for a B2B manufacturer?',
    answer: 'Two parts that share one product database. A public catalogue that ranks in Google and answers buyer questions with specs, drawings and compliance documents. A logged-in portal where approved dealers and distributors see their prices, stock and order history. Many manufacturers launch the public catalogue with a request-for-quote button first, then add the ordering portal once account pricing is mapped. That splits the cost into two signed phases.' },

  // ── Xero, MYOB, ERP and stock ──
  { category: 'systems', question: 'Can a B2B portal connect to Xero?',
    answer: 'Yes. Trade orders become Xero invoices on the right account, with GST coded correctly and the payment terms that account has. Card payments from retail or trade checkout are recorded against the payout so the bank feed reconciles. The important decision is which system owns customers and credit terms. If Xero does, the store reads from it rather than holding its own copy.' },
  { category: 'systems', question: 'Can it connect to MYOB Business or MYOB Acumatica?',
    answer: 'Yes. MYOB Business suits a wholesaler whose stock and pricing are fairly simple, with orders posted in as invoices. MYOB Acumatica is a fuller ERP, so the portal can read customer price lists, stock by warehouse and credit status from it and post orders back as sales orders. We map every field with your bookkeeper or ERP partner first, so nothing lands in the ledger in a shape they have to fix by hand.' },
  { category: 'systems', question: 'Do you integrate with NetSuite, Odoo or QuickBooks?',
    answer: 'Yes. NetSuite and Odoo are full ERPs, so they usually own items, customers, price levels and stock, and the portal reads from them and sends orders back. QuickBooks Online is closer to Xero in role. Our current trade store work includes a WooCommerce store fed by Odoo for stock, pricing and SKUs, so the website never keeps a second copy of that data. We confirm the connection method against your exact edition before quoting.' },
  { category: 'systems', question: 'How do credit limits and account terms work online?',
    answer: 'The portal checks the account at checkout. If the customer is within its limit and not overdue, it can place the order on account, for example on 30-day terms. If it is over the limit or has overdue invoices, the order can be held for your accounts team to approve, or the buyer can pay by card through Stripe instead. The limit itself stays in Xero, MYOB or your ERP, so finance controls it in one place.' },

  // ── GST, invoices and Peppol ──
  { category: 'gst', question: 'Do trade prices on a B2B portal need to include GST?',
    answer: 'Not if only businesses can see them. The ACCC says a business displaying prices only to other businesses does not need to include GST in the total price. Retail shoppers are different: prices shown to consumers must be the total as a single figure. So a mixed store usually shows GST-inclusive prices to the public and ex-GST prices to logged-in trade accounts, with GST added clearly at checkout and on the invoice.',
    links: [{ href: SRC_ACCC_PRICE, label: 'ACCC: price displays' }] },
  { category: 'gst', question: 'What must a B2B tax invoice show in Australia?',
    answer: 'The ATO lists the seller’s identity and ABN, the date, a description of what was sold with quantity and price, the GST, and wording saying the document is intended as a tax invoice. For sales of $1,000 or more it must also show the buyer’s identity or ABN. If a customer asks for a tax invoice you must give one within 28 days, unless the sale is $82.50 including GST or less. We set up order invoices to meet these.',
    links: [{ href: SRC_ATO_TAX_INVOICES, label: 'ATO: tax invoices' }] },
  { category: 'gst', question: 'Is e-invoicing mandatory for businesses in Australia?',
    answer: 'Not between private businesses today. Xero’s guide for accountants says B2B e-invoicing remains voluntary, and the ATO says eInvoicing is not a compliance or revenue measure. Government is further along: the ATO says Commonwealth agencies are working towards 30% of received invoices as eInvoices by 1 July 2026. If you supply government or large buyers who ask for Peppol invoices, it pays to be ready.',
    links: [{ href: SRC_ATO_GOV, label: 'ATO: eInvoicing for government' }] },
  { category: 'gst', question: 'What is a Peppol e-invoice, and is Peppol only for B2B?',
    answer: 'Peppol is an international framework for sending invoices as structured data between accounting systems, so the buyer’s software reads them without anyone typing. The ATO is the Australian Peppol Authority. It works for business to business and business to government invoicing. The ATO says over 400,000 Australian businesses can trade eInvoices on the network, and many accounting packages already include it.',
    links: [{ href: SRC_ATO_PEPPOL, label: 'ATO: Peppol' }] },
  { category: 'gst', question: 'How do I check if a customer can receive Peppol invoices?',
    answer: 'Search for them in the public Peppol directory, which Xero links to from its eInvoicing page. If they are registered, invoices raised from your portal orders in Xero can go to them as eInvoices. Xero says Australian businesses can only send eInvoices within Australia, but can receive them from registered businesses overseas, where they arrive as draft bills ready for approval.',
    links: [{ href: SRC_XERO_EINVOICING, label: 'Xero: eInvoicing' }] },

  // ── Cost and timing ──
  { category: 'cost', question: 'How much does a B2B ecommerce portal cost in Australia?',
    answer: 'Published Australian ranges are wide. Digitized Kosmos, which markets B2B portals to Australian trade suppliers, puts custom wholesale platforms at AUD 20,000 to 65,000. What’s The Damage?, an Australian cost guide, puts BigCommerce B2B and wholesale builds in Perth at AUD 15,000 to 50,000. Neither says whether GST is included. These are market figures, not our prices. FactoryJet quotes a fixed price per phase in writing after scoping.',
    links: [{ href: SRC_KOSMOS, label: 'Digitized Kosmos: Australian B2B portals' }] },
  { category: 'cost', question: 'How long does a B2B ecommerce build take?',
    answer: 'It depends far more on your data than on design. A portal on an existing platform with one accounting connection moves fastest. Each extra system, custom pricing rule or approval step adds time, and so does cleaning a price list that lives in three spreadsheets. We give you a phased timeline after the scoping session, and the first working draft with your own products comes before you sign the build.' },

  // ── Working with us ──
  { category: 'working', question: 'What should our brief or RFP include?',
    answer: 'Five things get you an accurate quote. A product export with SKU count and units of sale. Your account types and how a price is worked out for each. The systems you run, with editions: Xero or MYOB, Cin7, Unleashed, NetSuite or Odoo. One real order traced from the buyer’s email to the invoice. And any channels beyond the portal, such as retail, Amazon.com.au or Bunnings Marketplace. A one-page note is fine.' },
  { category: 'working', question: 'Have you built B2B stores for Australian businesses?',
    answer: 'We do not show any Australian client as proof on this page. What we can show is the same kind of work elsewhere: a live Commerceflo trade storefront for GPSUK, a UK promotional products supplier whose buyers reorder at their own account prices, and a WooCommerce trade store connected to Odoo for Sow Easy, which is in testing. On a call we walk you through both, then build a draft with your own products.',
    links: [{ href: '/case-studies/gpsuk-promotional-products', label: 'GPSUK case study' }] },
  { category: 'working', question: 'Who owns the portal and the code after launch?',
    answer: 'You do. The code, the repository and the admin accounts are in your name from day one, and platform and app fees are billed to your own accounts. Defects found after launch are fixed inside the build price for a cover period agreed before work starts. After that, support is optional: each change is quoted and approved before we do it, and there is no monthly minimum.' },
  { category: 'working', question: 'How do we get started?',
    answer: 'Use the form at the top of this page: a name, a work email and, if you have one, your brief. Bhavesh Barot, the founder, answers within 24 hours and sets up a call on your accounts, price lists and systems. If the fit is right, we build a working draft with your own products and one of your price lists, so you can see the trade portal before you commit to the build.' },
];

/* ─── House terms, approved wording (2026-10-16), same as /b2b-ecommerce ── */
const HOUSE_TERMS: { t: string; d: string }[] = [
  { t: 'A draft before you sign', d: 'We build a working draft with your own products and one of your real price lists, so you see the trade portal before you commit.' },
  { t: 'Fixed price per phase', d: 'Each phase is scoped, priced and signed on its own. Nothing is billed by the hour.' },
  { t: 'You own the code', d: 'The code, the repository and the admin accounts are yours from day one. Platform and app fees go to your own accounts.' },
  { t: 'Defect cover in the build price', d: 'Defects found after launch are fixed inside the build price, for a cover period we agree before work starts.' },
  { t: 'Support only if you want it', d: 'After that, support is optional. Each change is quoted and approved before we do it.' },
  { t: 'No monthly minimum', d: 'There is no monthly fee you pay whether you use it or not.' },
];

/* ─── Numbered project steps (rendered as the process timeline) ──────── */
const STEPS: { n: string; t: string; d: string; out: string }[] = [
  { n: '01', t: 'Trace one real order', d: 'We follow one trade order from the buyer’s email or phone call to the invoice in Xero, MYOB or your ERP, with the person who handles it today. Most of the rules a portal needs show up in that hour.', out: 'a written map of accounts, price rules and systems' },
  { n: '02', t: 'Decide which system owns what', d: 'Customers, price lists, stock, credit limits and invoices each get one owner. Usually that is Xero, MYOB, Cin7, Unleashed, NetSuite or Odoo, and the store reads from it.', out: 'a data ownership table your bookkeeper signs off' },
  { n: '03', t: 'Build a draft with your products', d: 'A working portal with your own catalogue and one real price list, logged in as one of your trade accounts. You see it before you sign the build.', out: 'a draft you can click through, and a fixed price per phase' },
  { n: '04', t: 'Build the portal and the connections', d: 'Account pricing ex GST, quantity rules, reorder lists, payment terms, freight rules for Australia Post, StarTrack or pallet carriers, and the accounting or ERP connection.', out: 'a staging portal fed by your real systems' },
  { n: '05', t: 'Test with real accounts', d: 'Your staff and two or three friendly customers place orders on staging. We check prices, GST, invoices, credit holds and freight against what your team expects.', out: 'a signed test sheet, issue by issue' },
  { n: '06', t: 'Launch and bring accounts across', d: 'We switch on the portal, invite trade accounts in waves, and watch the first orders flow into your books with you. Defect cover starts here.', out: 'live ordering, with the handover documents and code in your name' },
];

/* ─── What a trade portal from us covers ─────────────────────────────── */
const PORTAL_ITEMS: { n: string; t: string; d: string }[] = [
  { n: '01', t: 'Account pricing, ex GST', d: 'Each trade account sees its own price list or tier, shown ex GST if only businesses can see it, with GST added clearly at checkout and on the tax invoice.' },
  { n: '02', t: 'Cartons, pallets and minimums', d: 'Units of sale, case packs, minimum order values and quantity breaks are enforced in the cart, so the warehouse stops fixing orders after they arrive.' },
  { n: '03', t: 'Reorder in a minute', d: 'Past orders, saved lists and quick order by SKU or CSV upload. Most wholesale orders are repeats, so this is the screen buyers use most.' },
  { n: '04', t: 'Pay on account or by card', d: 'Orders on 30-day or other agreed terms for approved accounts, with credit checks read from your accounting system. Card payments through Stripe for everyone else.' },
  { n: '05', t: 'Several buyers, several sites', d: 'One customer company with several staff logins and delivery addresses, so a chain of cafes or a builder with multiple sites orders under one account.' },
  { n: '06', t: 'Quotes and approvals', d: 'Request a quote on large or custom orders, and approval steps when a buyer’s own company needs a manager to sign off.' },
  { n: '07', t: 'Freight that matches your costs', d: 'Australia Post and StarTrack for parcels, pallet rules for bulky goods, delivery cut-offs and regional surcharges set from your real freight costs.' },
  { n: '08', t: 'Rep ordering', d: 'Sales reps place orders for their accounts in the same portal, at the account’s prices, instead of keying them into the ERP later.' },
];

/* ─── Australian systems: who usually owns what ─────────────────────── */
const SYSTEMS: { name: string; owns: string; build: string }[] = [
  { name: 'Xero', owns: 'Customers, invoices, GST and payments, often with stock kept in Cin7 or Unleashed alongside it.', build: 'Portal orders post as invoices on the right account and terms; card payouts reconcile against the bank feed.' },
  { name: 'MYOB Business and MYOB Acumatica', owns: 'Accounts and invoicing in MYOB Business; full ERP records, price lists and stock in MYOB Acumatica.', build: 'Orders post in the shape your MYOB partner expects; with Acumatica the portal reads prices and stock from it.' },
  { name: 'Cin7 Core (formerly DEAR)', owns: 'Stock by location and customer price tiers. Cin7 Core supports up to 10 price points per product.', build: 'A store in front of Cin7 when you need retail and trade together, richer product pages or search traffic.' },
  { name: 'Unleashed', owns: 'Stock, products and pricing, with its own B2B store that imports orders every 10 to 15 minutes.', build: 'Either set up the Unleashed store properly or build a portal with a direct connection where timing matters.' },
  { name: 'NetSuite, Odoo and QuickBooks Online', owns: 'Items, customers, price levels and stock in NetSuite and Odoo; accounts and invoicing in QuickBooks Online.', build: 'The portal reads from the ERP and writes orders back, so there is one set of numbers.' },
];

/* ─── Platform comparison rows ─────────────────────────────────────── */
const PLATFORM_ROWS: { what: string; shopify: string; plus: string; other: string; custom: string }[] = [
  { what: 'Trade price lists', shopify: 'Up to 3 active B2B catalogues', plus: 'Unlimited, plus per-company catalogues', other: 'Native in BigCommerce B2B and Adobe Commerce', custom: 'Read live from your ERP' },
  { what: 'Payment terms on account', shopify: 'Yes', plus: 'Yes, plus deposits and partial payments', other: 'Yes', custom: 'Built to your credit rules' },
  { what: 'Retail and trade in one store', shopify: 'Yes', plus: 'Yes', other: 'Yes', custom: 'If you build both' },
  { what: 'Quotes and approval chains', shopify: 'Draft orders and apps', plus: 'Draft orders and custom apps', other: 'Strongest in Adobe Commerce', custom: 'Built exactly to your rules' },
  { what: 'Who hosts and patches it', shopify: 'Shopify', plus: 'Shopify', other: 'BigCommerce hosts; Adobe Commerce often self-hosted', custom: 'You, or us at your request' },
  { what: 'Best fit, in our view', shopify: 'Brands adding a stockist channel', plus: 'Many negotiated price lists', other: 'Large catalogues, complex quoting', custom: 'Rules no platform handles' },
];

/* ─── Australian demand, DataForSEO Google Ads volumes, location 2036, pulled 29 Oct 2026 ── */
const DEMAND: { kw: string; v: number; kd: string }[] = [
  { kw: 'dealer portal', v: 1300, kd: 'Manufacturers and dealers' },
  { kw: 'shopify b2b', v: 260, kd: 'Platform research' },
  { kw: 'peppol e-invoicing', v: 210, kd: 'Invoicing and finance' },
  { kw: 'b2b portal', v: 170, kd: 'Mixed intent' },
  { kw: 'trade portal', v: 170, kd: 'Wholesale and trade' },
  { kw: 'b2b ecommerce', v: 140, kd: 'Research stage' },
  { kw: 'b2b ecommerce platform', v: 50, kd: 'Platform research' },
  { kw: 'wholesale website', v: 50, kd: 'Buyer intent' },
];
const DEMAND_MAX = 1300;

const SIBLINGS: { href: string; t: string; d: string; go: string }[] = [
  { href: '/au/ecommerce-development', t: 'Ecommerce development Australia', d: 'New stores and replatforms for Australian brands selling direct to consumers as well as to trade.', go: 'Explore ecommerce →' },
  { href: '/au/shopify-development', t: 'Shopify development Australia', d: 'Shopify and Shopify Plus builds, migrations and Shopify B2B set up with Xero or MYOB.', go: 'Explore Shopify →' },
  { href: '/au/accounts-payable-automation', t: 'Accounts payable automation', d: 'Supplier bills, tax invoice checks and Peppol eInvoices handled before they reach Xero or MYOB.', go: 'Explore AP automation →' },
  { href: '/au/ai-agents', t: 'AI agents for Australian businesses', d: 'AI agents that read emailed trade orders and enter them into your portal or ERP for a person to approve.', go: 'Explore AI agents →' },
  { href: '/au/website-maintenance', t: 'Website maintenance Australia', d: 'Updates, fixes and changes after launch, quoted and approved one request at a time.', go: 'Explore maintenance →' },
  { href: '/b2b-ecommerce', t: 'B2B ecommerce (US page)', d: 'Our main B2B ecommerce page, including EDI and punchout work for national accounts and procurement teams.', go: 'Read the US page →' },
];

/* ─── JSON-LD ────────────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'B2B Ecommerce Australia',
      serviceType: 'B2B ecommerce development, wholesale trade portals, dealer portals and accounting or ERP integration',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'Australia' },
      audience: { '@type': 'BusinessAudience', name: 'Australian wholesalers, distributors and manufacturers' },
      url: CANONICAL,
      description:
        'B2B ecommerce for Australian wholesalers and manufacturers: trade and dealer portals with account pricing ex GST, payment terms, reorder lists, quotes, freight rules, and connections to Xero, MYOB Business, MYOB Acumatica, QuickBooks Online, NetSuite, Odoo, Cin7 and Unleashed.',
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
      datePublished: UPDATED,
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
      'Trade portals for Australian wholesalers and manufacturers: account pricing ex GST, payment terms and reorder lists, connected to Xero, MYOB, NetSuite, Cin7, Unleashed or Odoo. A draft with your own products before you sign.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet, B2B ecommerce for Australian wholesalers and manufacturers' }],
  },
  robots: { index: true, follow: true },
};

const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

/* Visual slot page key (route without /au/). */
const PAGE_KEY = 'b2b-ecommerce';

/* H1 split for the Family A hero emphasis. Same string as H1 (schema headline). */
const H1_EMPHASIS = 'Wholesalers and Manufacturers';
const H1_LEAD = H1.slice(0, H1.lastIndexOf(H1_EMPHASIS)).trimEnd();

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

/* Hero spec-panel icons (price tag, connected systems, ownership key). */
const HERO_ICONS = [
  'M3 12V4h8l10 10-8 8L3 12Zm5-4h.01',
  'M10 14a4 4 0 0 0 6 0l3-3a4 4 0 0 0-6-6l-1 1m2 4a4 4 0 0 0-6 0l-3 3a4 4 0 0 0 6 6l1-1',
  'M7 11a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm3 1 9-9m-3 3 3 3',
] as const;

/* Icons for the eight portal cards (same order as PORTAL_ITEMS). */
const PORTAL_ICONS = [
  'M3 12V4h8l10 10-8 8L3 12Zm5-4h.01',
  'M3 7h18v13H3V7Zm4-4h10l4 4H3l4-4Z',
  'M4 12a8 8 0 1 0 2-5.3M4 4v4h4',
  'M3 6h18v12H3V6Zm0 4h18M7 15h4',
  'M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM4 21c0-4 4-6 8-6s8 2 8 6',
  'M6 3h12v18l-3-2-3 2-3-2-3 2V3Zm3 5h6m-6 4h6',
  'M3 7h11v9H3V7Zm11 3h4l3 3v3h-7M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
  'M4 20l4-1 11-11-3-3L5 16l-1 4Z',
] as const;

export default function B2bEcommerceAUPage() {
  return (
    <>
      <script id="ld-au-b2b-ecommerce" type="application/ld+json"
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
              <div className="eyebrow">B2B Ecommerce Australia</div>
              <h1>{H1_LEAD} <span className="hero-emphasis">{H1_EMPHASIS}</span></h1>
              <p className="lead">
                Your trade customers still order by email, phone and spreadsheet, and someone re-keys every order into
                Xero, MYOB, Cin7, Unleashed or NetSuite. FactoryJet builds B2B ecommerce portals for established
                Australian wholesalers and manufacturers: each account sees its own prices ex GST, reorders in a
                minute, pays on terms, and every order lands in your books with the GST right.
              </p>
              <HeroInlineForm region="au" source="au_b2b_ecommerce_hero" submitLabel="See a draft of my trade portal" />
              <p className="hero-alt">
                Working software on your own products and price list before you sign. Founder replies within 24 hours.
              </p>
            </div>

            <form
              className="specpanel"
              aria-label="What a FactoryJet trade portal is built around"
              data-visual-slot={`${PAGE_KEY}:hero`}
              data-visual-kind="diagram"
              data-visual-subject="What a trade portal is built around: account prices ex GST, connections to Xero, MYOB, Cin7, Unleashed and NetSuite, and code that is yours"
              data-visual-ratio="1:1"
              data-visual-status="filled"
            >
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>BUILT AROUND · YOUR TRADE ACCOUNTS</span>
                <span className="sys"><span>Wholesale</span><span>Manufacturing</span><span>Distribution</span></span>
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
              <div className="specpanel-body" role="radiogroup" aria-label="Explore what the portal is built around">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="b2b-au-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[0]} /></svg></span>
                  <span className="idx">per account, shown to logged-in buyers</span>
                  <span className="title">Trade prices ex GST, terms and minimums</span>
                  <span className="tag">Priced</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="b2b-au-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[1]} /></svg></span>
                  <span className="idx">one owner for stock, prices and customers</span>
                  <span className="title">Xero, MYOB, Cin7, Unleashed, NetSuite, Odoo</span>
                  <span className="tag">Connected</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="b2b-au-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[2]} /></svg></span>
                  <span className="idx">repository and accounts in your name</span>
                  <span className="title">Portal code and integrations</span>
                  <span className="tag">Yours</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · Every trade order is tested through to a GST-correct invoice before launch.</div>
            </form>
          </div>
        </section>

        {/* ═══ LEDGER (verified facts only) ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: 'ex GST', t: 'is allowed when prices are shown only to other businesses; shoppers must see the total price', s: 'ACCC, Price displays', u: SRC_ACCC_PRICE },
              { v: '$1,000', t: 'or more: the buyer’s identity or ABN has to appear on the tax invoice too', s: 'ATO, Tax invoices', u: SRC_ATO_TAX_INVOICES },
              { v: '400,000+', t: 'Australian businesses can exchange eInvoices with each other on the Peppol network', s: 'ATO, About eInvoicing', u: SRC_ATO_EINVOICING },
              { v: '3', t: 'active B2B catalogues on Shopify Basic, Grow and Advanced; Shopify Plus has no cap', s: 'Shopify Help Center', u: SRC_SHOPIFY_B2B },
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
              <h2 data-speakable="true">What B2B ecommerce means for an Australian wholesaler or manufacturer</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p data-speakable="true">
                    <span className="stat">B2B ecommerce is an online store where your customers are businesses.</span> Each
                    trade account logs in, sees the prices agreed for it, orders in the units you sell, pays on account
                    or by card, and gets a GST-correct tax invoice. Behind the store, the order goes straight into
                    Xero, MYOB or your ERP instead of being typed in from an email.
                  </p>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <div>
                    <div className="factlabel">Four terms we use on this page</div>
                    <p>
                      A <b>trade portal</b> is the logged-in part of the store for approved accounts. A <b>price
                      list</b> or <b>price tier</b> is the set of prices one account or group pays. An <b>ERP</b> is
                      the system that runs stock, orders and finance, such as NetSuite, Odoo or MYOB Acumatica.{' '}
                      <b>Peppol</b> is the network that lets accounting systems send invoices to each other as data.
                    </p>
                  </div>
                </div>
                <div className="fact">
                  <div className="sec">§03</div>
                  <p>
                    The buyers we build for are not starting out. They already turn over real wholesale volume, have
                    hundreds or thousands of SKUs, and run Xero, MYOB, Cin7, Unleashed or an ERP that works. The
                    portal has to fit that stack. When a portal fails, the cause is almost always a price rule or a
                    stock number that the store and the back office disagree on.
                  </p>
                </div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts" kind="photo" ratio="3:2" className="factphoto" captionClassName="figcap" src={null}
                subject="Shop owner at her counter placing a repeat wholesale order on a tablet through her supplier's trade portal"
                caption={<>The stockist’s side of a trade portal: her account prices, her usual lines, and last month’s order ready to repeat.</>}>
                <img src="/images/au/shopify-development/shopify-development-b2b.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Shop owner at her counter placing a repeat wholesale order for ceramic vases on a tablet, using her supplier's trade portal" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ LISTICLE: WHAT A TRADE PORTAL COVERS → capgrid ═══ */}
        <section className="section capabilities" id="portal">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Trade portal, itemised</div>
              <h2>Eight things a working Australian trade portal has to do</h2>
              <p className="lead">
                These eight cover what a wholesale brief usually asks for. Each one moves a step out of email and
                spreadsheets, and each one has to agree with the numbers in your accounting system.
              </p>
            </div>
            <div className="capgrid">
              {PORTAL_ITEMS.map((s, i) => (
                <div key={s.n} className={`cap cap-${i + 1}`}>
                  <div className="caphead"><span className="capid">CAP‑{s.n}</span><svg {...CAP_ICON}><path d={PORTAL_ICONS[i]} /></svg></div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ AUSTRALIAN SYSTEMS → ruled rows ═══ */}
        <section className="section platforms" id="systems">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Xero, MYOB, Cin7, Unleashed, ERP</div>
                <h2>Which system owns your prices and stock decides the build</h2>
              </div>
              <p>
                Before any design, we agree which system is the single owner of customers, price lists, stock,
                credit limits and invoices. The portal then reads from that owner and writes orders back. Get this
                wrong and two systems hold two different prices for the same customer, which is the most common way
                a wholesale portal loses the trust of the sales team.
              </p>
            </div>
            <div className="platlist" role="list">
              {SYSTEMS.map((s, i) => (
                <div key={s.name} className="plat" role="listitem">
                  <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                  <div className="plat-name"><h3>{s.name}</h3></div>
                  <p className="plat-build">{s.owns}</p>
                  <p className="plat-build">{s.build}</p>
                </div>
              ))}
            </div>
            <p className="sub-note">
              Cin7 figure from <a href={SRC_CIN7} {...extLink}>Cin7 Core help: different prices for a customer</a>. Unleashed
              timing from <a href={SRC_UNLEASHED} {...extLink}>Unleashed help: B2B Portal introduction</a>. Both read 29 October 2026.
            </p>
          </div>
        </section>

        {/* ═══ PLATFORM COMPARISON → table ═══ */}
        <section className="section comparison" id="platforms">
          <div className="wrap">
            <div className="section-head head-split">
              <div className="eyebrow">Platform choice</div>
              <div>
                <h2>Shopify B2B vs Shopify Plus vs BigCommerce or Adobe Commerce vs a custom portal</h2>
                <p className="lead">
                  We are not tied to one platform. Here is how the usual options compare for an Australian wholesaler.
                  The Shopify columns come from Shopify’s own help centre; the last row is our view.
                </p>
              </div>
            </div>
            <div className="tablewrap" role="region" tabIndex={0} aria-label="B2B ecommerce platform comparison">
              <table>
                <thead>
                  <tr>
                    <th>What you need</th>
                    <th>Shopify B2B (Basic to Advanced)</th>
                    <th>Shopify Plus</th>
                    <th>BigCommerce or Adobe Commerce</th>
                    <th className="fj">Custom portal on your ERP</th>
                  </tr>
                </thead>
                <tbody>
                  {PLATFORM_ROWS.map((r) => (
                    <tr key={r.what}>
                      <th scope="row">{r.what}</th>
                      <td>{r.shopify}</td>
                      <td>{r.plus}</td>
                      <td>{r.other}</td>
                      <td className="fj">{r.custom}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="tablenote">
              Shopify figures from <a href={SRC_SHOPIFY_B2B} {...extLink}>Shopify Help Center, B2B features by plan</a>, read 29 October 2026.
              For live plan fees in AUD, see <a href={SRC_SHOPIFY_PRICING} {...extLink}>Shopify’s Australian pricing page</a>.
            </p>
            <div className="au-split">
              <div>
                <h3>Retail, marketplaces and trade from one stock pool</h3>
                <p>
                  Plenty of Australian wholesalers also sell retail, on their own site and on Amazon.com.au, eBay,
                  Kogan, Bunnings Marketplace or THE ICONIC. The portal is one more channel drawing on the same stock
                  number, so a carton sold to a stockist is not also promised to a marketplace order.
                </p>
              </div>
              <div>
                <h3>Payments and freight, set for trade</h3>
                <p>
                  Trade accounts usually pay on terms, with Stripe for card payments when an account is new or over
                  its limit. Afterpay and Zip stay on the retail checkout. Freight rules come from your real costs:
                  Australia Post or Sendle for parcels, StarTrack for heavier consignments, and pallet rates for
                  bulky goods.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ PROCESS → numbered timeline ═══ */}
        <section className="section process" id="how-a-build-runs">
          <div className="wrap">
            <div className="head-media">
              <div className="section-head">
                <div className="eyebrow">How a project runs</div>
                <h2>Six steps from one traced order to live trade ordering</h2>
                <p className="lead">
                  Tap a step for the detail and the thing you hold when it ends. Phases are priced and signed one
                  at a time, so you decide after each whether to carry on.
                </p>
              </div>
              <div className="au-panel">
                <div className="eyebrow">What moves the timeline</div>
                <ul className="trigrows">
                  <li><span className="m">Systems to connect</span><span className="n">Xero only, or Xero plus Cin7 and a 3PL</span><span className="t">Reach</span></li>
                  <li><span className="m">Price rules</span><span className="n">tiers, contracts, quantity breaks</span><span className="t">Logic</span></li>
                  <li><span className="m">Data quality</span><span className="n">one price file or three spreadsheets</span><span className="t">Clean-up</span></li>
                  <li><span className="m">Approvals and quotes</span><span className="n">who signs off what</span><span className="t">Workflow</span></li>
                  <li><span className="m">First call with the founder</span><span className="n">you leave with a clear scope</span><span className="t">Free</span></li>
                </ul>
              </div>
            </div>
            <div className="timeline timeline-4">
              {STEPS.map((s) => (
                <details key={s.n} className="tnode">
                  <summary>
                    <div className="idx">{s.n}</div>
                    <h3>{s.t}<span className="chev" aria-hidden="true">+</span></h3>
                  </summary>
                  <p>{s.d}</p>
                  <p><b>You get:</b> {s.out}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <div className="au-midcta">
          <MidPageCTA
            headline={'Want to see your own price list in a working trade portal?'}
            sub={'Tell us how a trade customer orders from you today and which systems you run. The founder will then say which platform suits you, what the first phase covers, and what a draft built on your own products would show.'}
            label={'See a draft of my trade portal'}
          />
        </div>

        {/* ═══ GST, INVOICES AND PEPPOL → facts ═══ */}
        <section className="section facts" id="gst-and-peppol">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">GST, tax invoices and Peppol</div>
              <h2>The Australian rules a B2B portal is built to follow</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  <b>Prices.</b> The ACCC says a business showing prices only to other businesses does not need to
                  include GST in the total price, while prices shown to consumers must be one total figure. A mixed
                  store therefore shows GST-inclusive prices to the public and can show ex-GST prices to logged-in
                  trade accounts, as long as GST is added clearly at checkout.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  <b>Tax invoices.</b> The ATO requires the buyer’s identity or ABN on tax invoices for sales of
                  $1,000 or more, which covers most wholesale orders. If a customer asks, you must issue a tax invoice
                  within 28 days. We capture the buyer’s ABN when an account is approved, so every portal invoice
                  carries it without anyone checking by hand.
                </p></div>
                <div className="fact"><div className="sec">§03</div><div>
                  <p>
                    <b>Peppol eInvoicing.</b> The ATO is the Australian Peppol Authority, and says over 400,000
                    Australian businesses can exchange eInvoices on the network. Between private businesses it is
                    voluntary, according to Xero’s guide for accountants. Commonwealth agencies are working towards
                    30% of received invoices as eInvoices by 1 July 2026. If your customers include government or
                    large buyers who ask for Peppol, invoices raised from portal orders in Xero can go to them as data.
                  </p>
                  <p className="au-note">
                    Sources: <a href={SRC_ACCC_PRICE} {...extLink}>ACCC, Price displays</a>,{' '}
                    <a href={SRC_ATO_TAX_INVOICES} {...extLink}>ATO, Tax invoices</a>,{' '}
                    <a href={SRC_ATO_PEPPOL} {...extLink}>ATO, Peppol</a>,{' '}
                    <a href={SRC_ATO_GOV} {...extLink}>ATO, eInvoicing for government</a>,{' '}
                    <a href={SRC_XERO_GUIDE} {...extLink}>Xero, e-invoicing guide</a>. We are not tax advisers, so
                    check your invoice setup with your accountant. Supplier bills coming the other way are covered on
                    our <a href="/au/accounts-payable-automation">accounts payable automation page</a>.
                  </p>
                </div></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">Checked on every portal invoice</div>
                <ul className="trigrows">
                  <li><span className="m">Seller ABN and identity</span><span className="t">Always</span></li>
                  <li><span className="m">Buyer identity or ABN</span><span className="t">$1,000 or more</span></li>
                  <li><span className="m">Quantity, price and GST per line</span><span className="t">Always</span></li>
                  <li><span className="m">Trade prices ex GST</span><span className="t">Logged-in only</span></li>
                  <li><span className="m">Retail prices as one total</span><span className="t">Public pages</span></li>
                  <li><span className="m">Peppol delivery</span><span className="t">If the buyer is registered</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ HOUSE TERMS → ruled rows ═══ */}
        <section className="section platforms" id="terms">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Terms</div>
                <h2>How we work with wholesalers and manufacturers</h2>
              </div>
              <p>
                The same terms on every B2B project, written into the proposal before any work starts. You see working
                software before you sign, and you are never tied to a monthly fee.
              </p>
            </div>
            <div className="platlist" role="list">
              {HOUSE_TERMS.map((h, i) => (
                <div key={h.t} className="plat plat-2col" role="listitem">
                  <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                  <div className="plat-name"><h3>{h.t}</h3></div>
                  <p className="plat-build">{h.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ BRIEF / RFP ASK → definition module ═══ */}
        <section className="definition" id="brief">
          <div>
            <VisualSlot page={PAGE_KEY} slot="definition" kind="photo" ratio="3:2" className="definition-image" src={null}
              subject="Warehouse packing bench with incoming orders on a laptop, a label printer and piled courier satchels">
              <img src="/images/au/shopify-development/shopify-development-integrations.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Warehouse packing bench where a laptop shows incoming orders while a printer produces a shipping label beside piled courier satchels" />
            </VisualSlot>
            <p className="figcap">
              One order traced from the buyer’s email to the dispatch desk and the invoice tells us more than a
              forty-page requirements document.
            </p>
          </div>
          <div className="definition-copy">
            <div className="eyebrow">Send us your brief or RFP</div>
            <h2>Already have a brief or a tender document? Send it.</h2>
            <p>
              Serious B2B projects usually start with a written brief that names the systems. If you have one, attach
              it to the form and we reply to it point by point. If you do not, these five items are enough to scope
              accounts, pricing and integrations:
            </p>
            <ol className="au-numlist">
              <li><span><b>Product export.</b> SKU count, units of sale and any carton or pallet rules.</span></li>
              <li><span><b>Account types.</b> How a price is worked out for each kind of customer.</span></li>
              <li><span><b>Systems and editions.</b> Xero or MYOB, Cin7, Unleashed, NetSuite, Odoo or another ERP, plus any 3PL.</span></li>
              <li><span><b>One real order.</b> Traced from the buyer’s email or call to the invoice.</span></li>
              <li><span><b>Other channels.</b> Retail store, marketplaces or reps who also take orders.</span></li>
            </ol>
            <ModalCTAButton label="Send my brief" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
          </div>
        </section>

        {/* ═══ PROOF: WORK WE HAVE DONE → ruled rows ═══ */}
        <section className="section platforms" id="work">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Work we have done</div>
                <h2>B2B trade stores we have built and are building</h2>
              </div>
              <p>
                Neither of these is an Australian client. We show them because the problem matches: trade buyers who
                need their own prices and an ordering flow tied to the back office. On a call we walk you through how
                each one handles accounts, pricing and orders.
              </p>
            </div>
            <div className="platlist" role="list">
              <div className="plat plat-2col" role="listitem">
                <span className="capid">01</span>
                <div className="plat-name"><h3>GPSUK, on Commerceflo</h3></div>
                <p className="plat-build">
                  A live trade storefront for a UK supplier of branded promotional products. Business buyers log in,
                  see their own account pricing and move from quote to order without retyping.{' '}
                  <a href="/case-studies/gpsuk-promotional-products">Read the GPSUK case study</a>.
                </p>
              </div>
              <div className="plat plat-2col" role="listitem">
                <span className="capid">02</span>
                <div className="plat-name"><h3>Sow Easy, WooCommerce and Odoo</h3></div>
                <p className="plat-build">
                  A WooCommerce trade store for a B2B distributor, reading stock, pricing and SKUs from Odoo so the
                  website never holds a second copy of that data. The build is being tested on staging before launch.{' '}
                  <a href="/case-studies/sow-easy-distributor-portal">Read the Sow Easy case study</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ COST → market ranges + drivers ═══ */}
        <section className="section au-top" id="cost">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Market ranges, not our prices</div>
              <h2>How much does B2B ecommerce cost in Australia?</h2>
              <p className="lead">
                <a href={SRC_KOSMOS} {...extLink}>Digitized Kosmos</a>, which markets B2B portals to Australian trade
                suppliers, puts custom wholesale platforms at AUD 20,000 to 65,000.{' '}
                <a href={SRC_WTD} {...extLink}>What’s The Damage?</a>, an Australian cost guide run by Focus Search Pty
                Ltd, puts BigCommerce B2B and wholesale builds in Perth at AUD 15,000 to 50,000. Neither source says
                whether GST is included, so ask every agency you shortlist to quote ex GST. FactoryJet quotes a fixed
                price per phase in writing after scoping.
              </p>
            </div>
            <div className="au-split">
              <div>
                <ol className="au-numlist">
                  <li><span><b>Number of connected systems.</b> Xero alone is one connection; Xero, Cin7 and a 3PL is three.</span></li>
                  <li><span><b>Price logic.</b> Three tiers is quick. Hundreds of negotiated contract prices need care.</span></li>
                  <li><span><b>Catalogue shape.</b> SKU count, variants, units of sale and technical attributes.</span></li>
                  <li><span><b>Workflows.</b> Quotes, approvals, rep ordering and credit holds each add build and testing.</span></li>
                  <li><span><b>Retail on the same store.</b> A shared catalogue and stock pool across two kinds of buyer.</span></li>
                </ol>
                <ModalCTAButton label="Get a fixed-scope B2B quote" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              </div>
              <div className="au-panel">
                <div className="demand">
                  <div className="demand-head"><span>Australia · Monthly Search Demand</span><b>DataForSEO</b></div>
                  <ul>
                    {DEMAND.map((r) => (
                      <li key={r.kw} className="demand-row">
                        <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v.toLocaleString('en-AU')}<small> searches</small></span></div>
                        <div className="demand-bar"><i style={{ width: `${Math.max(3, Math.round((r.v / DEMAND_MAX) * 100))}%` }} /></div>
                        <div className="demand-kd">{r.kd}</div>
                      </li>
                    ))}
                  </ul>
                  <p className="demand-src">Source: DataForSEO, Google Ads volumes, Australia, pulled 29 October 2026</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SIBLING SERVICES → agentdir ═══ */}
        <section className="section agentdir" id="more-services">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Related FactoryJet services</div>
              <h2>Around the trade portal</h2>
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
          heading="B2B ecommerce questions Australian wholesalers and manufacturers ask"
          askLabel="Still have a question? Ask the founder →"
          askNote="Replies within 24 hours."
        />

        {/* ═══ SOURCES → references ═══ */}
        <section className="section referencesSection references" id="references">
          <div className="wrap">
            <div className="eyebrow">Sources</div>
            <div className="refs">
              <a href={SRC_ACCC_PRICE} {...extLink}>ACCC, Price displays</a>
              <a href={SRC_ATO_TAX_INVOICES} {...extLink}>ATO, Tax invoices</a>
              <a href={SRC_ATO_EINVOICING} {...extLink}>ATO, About eInvoicing</a>
              <a href={SRC_ATO_PEPPOL} {...extLink}>ATO, Peppol</a>
              <a href={SRC_ATO_GOV} {...extLink}>ATO, eInvoicing for government</a>
              <a href={SRC_XERO_EINVOICING} {...extLink}>Xero, eInvoicing</a>
              <a href={SRC_XERO_GUIDE} {...extLink}>Xero, e-invoicing guide for accountants</a>
              <a href={SRC_SHOPIFY_B2B} {...extLink}>Shopify, B2B features by plan</a>
              <a href={SRC_CIN7} {...extLink}>Cin7 Core, customer price tiers</a>
              <a href={SRC_UNLEASHED} {...extLink}>Unleashed, B2B Portal</a>
              <a href={SRC_KOSMOS} {...extLink}>Digitized Kosmos, Australian B2B portals</a>
              <a href={SRC_WTD} {...extLink}>What’s The Damage?, BigCommerce cost in Perth</a>
            </div>
          </div>
        </section>

        {/* ═══ FINAL CTA (light) ═══ */}
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <div className="eyebrow">Ready when you are</div>
              <h2>Get trade orders out of the inbox and into your books</h2>
              <p>
                Tell us who your trade customers are and which systems hold their prices. Bhavesh Barot, the
                founder, answers within 24 hours. If the fit is right, the next step is a draft portal loaded with
                your own products and one of your price lists.
              </p>
            </div>
            <div className="ctas">
              <ModalCTAButton label="See a draft of my trade portal" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              <a className="btn btn-ghost" href="/au/ecommerce-development">See ecommerce development</a>
            </div>
          </div>
        </section>

      </main>
      </div>
      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}

import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { twinAlternates } from '@/data/hreflangMap';
import '../ai-agents/ai-agents.css';

/* /uk/shopify-plus-b2b, built 2026-10-29.

   Truth rules for anyone editing this file.
   1. Every Shopify plan fact, payment-term option, GBP list price, UK late
      payment rule and HMRC VAT rule below was read on the publisher's own page
      on 29 October 2026. Each one links to that page through the SRC consts.
      Re-read the page before changing a figure, and update READ_ON.
   2. No FactoryJet price. We looked for a published GBP range for a Shopify
      Plus B2B build from a named UK agency on 29 October 2026 and found none we
      could verify (the UK specialists we read publish no figures), so this page
      gives cost drivers and Shopify's own list price only. Add a range only
      with a named UK source and a link.
   3. Client proof: Sow Easy (WooCommerce plus Odoo, UK trade, Odoo link still
      in build) and GPSUK (Commerceflo). Neither is Shopify work and the copy
      says so. Never present them as Shopify builds.
   4. Structure mirrors /uk/ecommerce-consultant (imports, components, CSS,
      schema). Copy is written fresh for this page; do not paste paragraphs
      from /services/shopify-plus-b2b or /uk/shopify-plus.
   5. The FAQ schema is generated from FAQ_ITEMS, the same array the visible
      FAQ renders. Never add a second list of questions. */

const CANONICAL = 'https://factoryjet.com/uk/shopify-plus-b2b';
const PUBLISHED = '2026-10-29';
const UPDATED = '2026-10-31';
const READ_ON = '29 October 2026';
const ALT_READ_ON = '31 October 2026';
const TITLE = 'Shopify Plus B2B Agency UK | Net Terms, VAT | FactoryJet';
const H1 = 'Shopify Plus B2B for UK Wholesalers: Trade Accounts, Price Lists, Net Terms and VAT Set Up Properly';
const DESCRIPTION =
  'Shopify B2B for UK wholesalers and brands: trade accounts, price lists, net terms, VAT numbers and a link to your accounts system or ERP. Draft first.';

/* Design tokens, copied by value from ../ai-agents/ai-agents.css so inline
   styles stay on-system without CSS custom property references in this file. */
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
   schema can never describe a trail a human cannot see. Never hand-copy a
   second list here. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'Shopify Plus B2B', url: CANONICAL },
];

/* ─── External sources, each read on 2026-10-29 ─────────────────────── */
// Shopify Help, "Shopify B2B features by plan": B2B on Basic, Grow, Advanced
// and Plus; 3 B2B market catalogs on Basic/Grow/Advanced, unlimited on Plus;
// direct company catalogs, deposits (companies and draft orders), partial
// payments and payment requests per fulfillment are Plus only; companies,
// locations, quantity rules, quantity price breaks, net terms, payment
// reminders, vaulted cards, PO numbers, draft order to invoice, checkout to
// draft, easy reorders, sales staff permissions, quick order list on all four.
// Contextual checkout and storefront (Markets) on Advanced and Plus only.
const SRC_PLAN_FEATURES = 'https://help.shopify.com/en/manual/b2b/getting-started/plan-features';
// Shopify Help, B2B overview: "Shopify B2B is available on the Basic, Grow,
// Advanced, and Shopify Plus plans." Starter and Retail are not on that list.
const SRC_B2B = 'https://help.shopify.com/en/manual/b2b';
// Shopify Help, payment terms: net 7, 15, 30, 45, 60 and 90, all starting from
// the day the order is placed; due on fulfillment; fixed date. "Deposit
// requirements are available only on the Shopify Plus plan."
const SRC_TERMS = 'https://help.shopify.com/en/manual/b2b/payment-terms';
// Shopify Help, companies: for Shopify Tax users with UK or EU shipping
// addresses, the Tax ID field becomes "VAT number", and "After you enter the
// VAT number, Shopify Tax validates it."
const SRC_COMPANIES = 'https://help.shopify.com/en/manual/b2b/companies';
// Shopify Help, Plus plan: "9 expansion stores"; "additional B2B capabilities
// such as unlimited catalogs"; possible "variable platform fee based on your
// revenue and business model, which differs for B2B and D2C companies".
const SRC_PLUS_PLAN = 'https://help.shopify.com/en/manual/intro-to-shopify/pricing-plans/plans-features/shopify-plus-plan';
// Shopify UK pricing: Plus "from £1,800/mo", "Starts at £1,800 GBP/mo" on the
// monthly row. The page does not say whether prices include VAT.
const SRC_PLUS_PRICING = 'https://www.shopify.com/uk/plus/pricing';
// GOV.UK: agreed payment dates "must usually be within 30 days for public
// authorities or 60 days for business transactions"; with no agreed date, late
// 30 days after the invoice or delivery, whichever is later.
const SRC_LATE = 'https://www.gov.uk/late-commercial-payments-interest-debt-recovery';
// GOV.UK: statutory interest "is 8% plus the Bank of England base rate for
// business to business transactions"; not claimable if the contract sets a
// different rate.
const SRC_INTEREST = 'https://www.gov.uk/late-commercial-payments-interest-debt-recovery/charging-interest-commercial-debt';
// HMRC VAT Notice 700/21: VAT invoice required for standard or reduced rate
// supplies to another VAT-registered person, "Normally ... within 30 days of
// the date you make the supply"; list of required details; simplified invoice
// allowed at £250 or less including VAT.
const SRC_VAT_INVOICE = 'https://www.gov.uk/guidance/record-keeping-for-vat-notice-70021';
// GOV.UK: "All VAT-registered businesses should now be signed up for Making Tax
// Digital for VAT."
const SRC_MTD = 'https://www.gov.uk/guidance/making-tax-digital-for-vat';
// HMRC VAT Notice 703: zero-rating exports needs export and evidence within 3
// months of the time of supply; official or commercial evidence; Northern
// Ireland to EU follows separate rules.
const SRC_EXPORT = 'https://www.gov.uk/guidance/vat-on-goods-exported-from-the-uk-notice-703';
// SparkLayer home page, read 2026-10-31: "builds proper wholesale into a
// brand's existing online store"; works with Shopify, BigCommerce,
// WooCommerce, Adobe Commerce and Wix; free Basic plan (Shopify only) has up
// to 3 price lists, paid plans unlimited price lists.
const SRC_SPARKLAYER = 'https://www.sparklayer.io/';
// B2B Wave home page, read 2026-10-31: its own B2B storefront and order
// management; footer lists Shopify, Xero and QuickBooks Online integrations.
const SRC_B2BWAVE = 'https://www.b2bwave.com/';

/* House terms, approved wording (2026-10-16), worded for UK trade stores. */
const HOUSE_TERMS = [
  { t: 'A draft of your trade store before you sign', d: 'We build a working draft on Shopify with your own products, one real trade customer and one of your price lists, so your sales team can click through it before anything is agreed.' },
  { t: 'Fixed price per phase', d: 'Each phase is scoped and given a fixed price, quoted in writing, before it starts. Changes are quoted and approved per request.' },
  { t: 'You own the code', d: 'The theme, any Shopify Functions and the integration code sit in your own repository from day one. Shopify and app fees are billed to your own accounts, at cost, with no markup.' },
  { t: 'Defect cover inside the build price', d: 'Defects found after launch are fixed inside the build price, for a cover period we agree before work starts.' },
  { t: 'Support only if you want it', d: 'After that, support is optional. Each change is quoted and approved before we do it.' },
  { t: 'No monthly minimum', d: 'There is no monthly fee you pay whether you use it or not.' },
] as const;

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',  label: 'Shopify B2B basics' },
  { key: 'money',   label: 'Terms, VAT and HMRC' },
  { key: 'systems', label: 'ERP, accounting and channels' },
  { key: 'project', label: 'Cost and how a project runs' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── Shopify B2B basics ──
  { category: 'basics', question: 'What is Shopify B2B?',
    answer: 'Shopify B2B is the set of trade-selling tools built into Shopify itself. You set each trade customer up as a company, add its sites as locations, give its staff logins, and attach catalogues that hold that customer’s products and prices. Payment terms, purchase order numbers and quick reorders sit on top. Retail and trade can run from the same admin, product data and stock.' },
  { category: 'basics', question: 'Is Shopify a B2B or B2C platform?',
    answer: 'Both. Shopify started as a B2C platform, meaning it sells to consumers, and B2B is now built into the same admin. Shopify’s help centre lists B2B on the Basic, Grow, Advanced and Plus plans. One store can show retail prices to the public and trade prices and terms to logged-in company buyers, from one set of products and one stock pool.' },
  { category: 'basics', question: 'How do you set up B2B on Shopify?',
    answer: 'In Shopify’s own order: create each trade customer as a company, add its sites as locations, and add the buyers who may order. Then build catalogues with that customer’s products and prices, and set payment terms and VAT numbers on each location. For a handful of accounts you can do this by hand. For hundreds, we load them in bulk and check every price against your current list.' },
  { category: 'basics', question: 'Can you do wholesale on Shopify?',
    answer: 'Yes. Shopify’s help centre says B2B is available on the Basic, Grow, Advanced and Shopify Plus plans. Starter and Retail are not on that list. What changes between plans is depth: how many catalogues you can run, whether a catalogue can be tied to one company, and whether you can take deposits and part payments. For a UK wholesaler with dozens of negotiated price lists, those limits decide the plan.' },
  { category: 'basics', question: 'Do I need Shopify Plus for B2B?',
    answer: 'Not always. On Basic, Grow and Advanced you get companies, locations, net terms, quantity rules and price breaks, but only three active B2B catalogues and no catalogue assigned directly to one company. Plus removes the catalogue cap and adds direct company catalogues, deposits, partial payments and payment requests per fulfilment. If each trade account has its own negotiated prices, you will usually need Plus.' },
  { category: 'basics', question: 'Is Shopify B2B worth it?',
    answer: 'It is worth it when your trade orders still arrive by email, phone or spreadsheet and someone retypes them. Moving those buyers to a self-serve B2B portal with their own prices and terms saves admin and errors on every order. It is less useful if you have five trade accounts and nothing changes week to week. We tell you which side of that line you sit on during scoping.' },
  { category: 'basics', question: 'Can retail and trade customers share one Shopify store?',
    answer: 'Yes. A blended store shows retail prices to the public and trade prices, terms and catalogues to logged-in company buyers, with one stock pool and one set of product data. Some brands prefer a separate trade store, for a different look, a different catalogue or stricter access. Shopify Plus supports nine expansion stores, and one of them can host a separate trade site.' },
  { category: 'basics', question: 'What is the downside of Shopify for B2B?',
    answer: 'Three things trip UK wholesalers up. Catalogue limits below Plus bite as soon as each account has its own prices. Credit limits and account balances usually live in your accounts system, so Shopify needs a link to show them. And some trade rules, such as quoting freight on a pallet, need custom work. None of these stops a project, but each needs planning before the build starts.' },

  // ── Terms, VAT and HMRC ──
  { category: 'money', question: 'Can trade buyers pay on account with net 30 terms?',
    answer: 'Yes. Shopify’s payment terms page lists net 7, 15, 30, 45, 60 and 90, counted from the day the order is placed, plus due on fulfilment. Fixed-date terms are available only on individual draft orders, so a standing month-end account needs a rep-built draft order or custom work. Approved trade accounts can check out without paying at that moment, and Shopify can send payment reminders. Deposit requirements are Plus only. Which accounts get which terms is a credit decision we set up to match your own rules.' },
  { category: 'money', question: 'Can we offer net 90 to UK trade customers?',
    answer: 'Shopify offers net 90, but UK law adds a check. GOV.UK says agreed payment dates must usually be within 60 days for business transactions, and longer terms are allowed only if they are fair to both sides. Where no date is agreed, payment is late 30 days after the invoice or delivery, whichever is later. Ask your solicitor before standardising anything past 60 days.' },
  { category: 'money', question: 'Can we charge interest when a trade account pays late?',
    answer: 'Under UK law you can usually claim statutory interest on late business payments. GOV.UK puts it at 8% plus the Bank of England base rate for business-to-business transactions, unless your contract sets a different rate, in which case statutory interest does not apply. Shopify reminds buyers that payment is due; chasing and interest normally run from your accounts system, which is why we connect the two.' },
  { category: 'money', question: 'How do VAT numbers work for trade accounts on Shopify?',
    answer: 'Each company location can hold a tax registration number. Shopify’s help centre says that for stores using Shopify Tax, the field becomes VAT number for locations with UK or EU shipping addresses, and Shopify Tax validates the number once it is entered. Tax collection and exemptions are then managed per location. We map which of your accounts need which treatment and confirm it with your accountant.' },
  { category: 'money', question: 'Do our trade buyers need a full VAT invoice?',
    answer: 'Usually, yes. Take a VAT-registered salon that orders £600 of stock including VAT. That is over HMRC’s £250 limit for a simplified invoice, so it needs a full VAT invoice with your VAT number, unit prices and the VAT total. A £180 top-up order could take a simplified one. Many wholesalers simply issue a full invoice on every trade order from their accounts system, and we set Shopify up to pass each order there.' },
  { category: 'money', question: 'Does HMRC check Shopify sales?',
    answer: 'HMRC checks your VAT returns and records, not Shopify as such. GOV.UK says all VAT-registered businesses should now be signed up for Making Tax Digital for VAT. In plain terms, your VAT records should be digital. For a trade store, that means every Shopify order, refund and credit note should reach Xero, Sage or your ERP without being retyped. That link is usually part of our build.' },
  { category: 'money', question: 'Can we sell to trade buyers in the EU from a UK Shopify store?',
    answer: 'Yes. Shopify can give EU trade accounts their own catalogue and prices in euros. The VAT question is evidence: to zero-rate the sale under HMRC Notice 703, you need proof the goods left the UK, such as the courier’s export record. So we make sure each EU order keeps its tracking and export paperwork linked to the order. Northern Ireland follows separate rules, and your accountant confirms the treatment.' },

  // ── ERP, accounting and channels ──
  { category: 'systems', question: 'Can you connect Shopify B2B to Xero, Sage or Business Central?',
    answer: 'Yes, where the system has an API, which is the door other software uses to read and write its data. Our own ERP integration work includes Odoo, NetSuite, SAP Business One and ERPNext. For Xero, Sage or Business Central, we check during scoping which connection your version offers. The first step is deciding which system owns each record: trade prices, stock, credit limits and invoices. The link then moves each record one way, from its owner.' },
  { category: 'systems', question: 'Which system should own our trade prices?',
    answer: 'Whichever one your sales and finance teams already trust. For most UK wholesalers that is the ERP or accounts system, because invoices and margin reports come from there. Shopify then receives the price lists and shows them in each company’s catalogue. If prices are kept in spreadsheets today, we clean them up once, during the project, and load them into the system that will own them.' },
  { category: 'systems', question: 'Can our sales reps place orders for trade customers?',
    answer: 'Yes. Shopify’s plan table lists sales staff permissions, draft order to invoice and checkout to draft on every B2B plan. A rep can build an order for an account, apply the right price list, and send the buyer an invoice or a checkout link. On Plus, a draft order can also ask for a deposit. We set permissions so each rep only sees the accounts they manage.' },
  { category: 'systems', question: 'Can we set minimum order quantities and case packs?',
    answer: 'Yes. Shopify B2B has quantity rules for a minimum, a maximum and an increment on each product in a catalogue, and quantity price breaks, on all B2B plans. That covers selling in cases of 12 or requiring at least two cases. Rules across a whole basket, such as a minimum order value per account, usually need a Shopify Function, which is custom checkout logic we write and you own.' },
  { category: 'systems', question: 'Do you also handle Amazon, eBay and our couriers?',
    answer: 'Yes, when they share stock with the trade store. Many UK brands sell on Amazon.co.uk, eBay UK, OnBuy or ManoMano alongside trade, and ship with Royal Mail, DPD or Evri. If those channels draw on the same stock, they need to read one stock figure, usually from your ERP or a tool like Linnworks. We plan that during scoping so a trade order cannot sell stock a marketplace already sold.' },

  // ── Cost and how a project runs ──
  { category: 'project', question: 'How much does Shopify B2B cost?',
    answer: 'Two parts. Shopify’s UK pricing page lists Plus from £1,800 a month, and Shopify says larger businesses may pay a variable platform fee that differs for B2B and D2C. The page does not say whether that figure includes VAT, so check your invoice. The build depends on accounts, price lists, systems and custom rules. FactoryJet quotes a fixed price in writing after a short scoping call.' },
  { category: 'project', question: 'What should our brief or RFP include?',
    answer: 'Six things help us quote accurately. How many trade accounts you have and how many sites each has. How many distinct price lists you keep. The payment terms you offer. The systems that hold prices, stock and invoices. The channels and couriers you use. Any rules that are hard today, such as pallet freight or approvals. A sample price list and a recent trade order export help most.' },
  { category: 'project', question: 'Can you move us off a wholesale app or tag-based set-up?',
    answer: 'Yes. Many UK stores run trade through customer tags and a pricing app. We export the accounts, rebuild them as companies with locations and buyers, turn tag-based prices into catalogues, and test every account’s prices against your current figures before switching. We plan the switch for a quiet trading day with a written rollback step.' },
  { category: 'project', question: 'Will we see something before we sign?',
    answer: 'Yes, a live demo on your own data. Before you commit, we build a working draft on Shopify with your own products, one real trade account and one of your price lists. Your sales team can log in as that buyer, see the prices and terms, and place a test order. It is the quickest way to find out whether native B2B fits the way your customers buy, before anyone signs a contract.' },
  { category: 'project', question: 'What happens after launch?',
    answer: 'Defects found after launch are fixed inside the build price for a cover period we agree before work starts. You own the code, the repository and the Shopify accounts. After that, support is optional: each change is quoted and approved before we do it, and there is no monthly minimum. You can come back for a quoted change when you add a channel, a system or a price structure.' },
];

/* ─── JSON-LD. The Organization is defined once, sitewide; this page only
       references it by @id and never redefines it. ─────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Shopify Plus B2B Development UK',
      serviceType: 'Shopify B2B and Shopify Plus B2B set-up, trade account migration, price lists, payment terms, VAT handling and ERP integration',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      description:
        'Shopify B2B and Shopify Plus B2B for UK wholesalers and brands: trade accounts as companies, price lists, net terms, VAT numbers and invoices, and links to UK accounts systems and ERPs.',
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
      inLanguage: 'en-GB',
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
      about: { '@id': `${CANONICAL}#service` },
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
  alternates: { canonical: CANONICAL, languages: twinAlternates['shopify-plus-b2b'] },
  openGraph: {
    title: TITLE,
    description:
      'Shopify Plus B2B for UK wholesalers: companies, catalogues, net terms within UK late payment rules, VAT numbers and invoices, and ERP sync. A working draft on your data before you sign.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'Shopify Plus B2B for UK wholesalers by FactoryJet' }],
  },
  robots: { index: true, follow: true },
};

const srcNote = { fontFamily: T.fm, fontSize: 11, color: T.n400, marginTop: 12 } as const;
const srcLink = { textDecoration: 'underline' } as const;
const ext = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

/* Plan rows, restated from Shopify's "B2B features by plan" table read on
   2026-10-29 (SRC_PLAN_FEATURES). "Basic to Advanced" means Basic, Grow and
   Advanced all show the same value, except where noted. */
const PLAN_ROWS: { f: string; low: string; lowTone: 'yes' | 'partial' | 'no'; plus: string }[] = [
  { f: 'Companies, locations and buyer permissions', low: 'Included', lowTone: 'yes', plus: 'Included' },
  { f: 'B2B catalogues assignable to B2B markets', low: '3', lowTone: 'partial', plus: 'Unlimited' },
  { f: 'Catalogue assigned directly to one company', low: 'Not available', lowTone: 'no', plus: 'Included' },
  { f: 'Quantity rules and quantity price breaks', low: 'Included', lowTone: 'yes', plus: 'Included' },
  { f: 'Net terms and payment reminders', low: 'Included', lowTone: 'yes', plus: 'Included' },
  { f: 'Vaulted cards and PO numbers', low: 'Included', lowTone: 'yes', plus: 'Included' },
  { f: 'Deposits on company orders and draft orders', low: 'Not available', lowTone: 'no', plus: 'Included' },
  { f: 'Partial payments, payment request per fulfilment', low: 'Not available', lowTone: 'no', plus: 'Included' },
  { f: 'Draft order to invoice, sales staff permissions', low: 'Included', lowTone: 'yes', plus: 'Included' },
  { f: 'Contextual storefront and checkout (Markets)', low: 'Advanced only, not Basic or Grow', lowTone: 'partial', plus: 'Included' },
];

export default function ShopifyPlusB2BUKPage() {
  return (
    <>
      <script id="ld-uk-shopify-plus-b2b" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="uk-aiagents">
      <main>

        <Breadcrumbs items={crumbs} />

        {/* ═══ 1. HERO ═══ */}
        <section className="sec-lg dot-grid" style={{ position: 'relative' }}>
          <div className="wrap">
            <div className="col-6040">
              <div>
                <div className="flex-wrap mb-6">
                  <span className="chip"><span className="dot dot-orange" />UK Trade on Shopify</span>
                  <span className="chip">Shopify Plus B2B</span>
                  <span className="chip">Draft Before You Sign</span>
                </div>
                <h1>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  You sell to shops, salons, distributors or contractors. Trade orders still arrive by email or phone,
                  each account has its own prices, and finance chases payment from Xero, Sage or Business Central.
                  We move those trade accounts onto Shopify B2B, with their own price lists, net terms and VAT
                  numbers, and link the store to the system that already runs your stock and invoices.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses since 2014</span></div>
                  <div className="upd">Last updated<br />31 October 2026</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm
                    region="uk"
                    source="uk_shopify_plus_b2b_hero"
                    service="Shopify Plus B2B"
                    submitLabel="See a draft of my trade store"
                    trustText="Working software on your own data before you sign. Bhavesh replies within 24 hours."
                  />
                </div>
              </div>

              <div className="card card-top-orange">
                <span className="eyebrow">What a UK trade account needs on Shopify</span>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Company with sites and buyers</div><div className="scorecard-note">head office, branches, who may order</div></div>
                  <div className="scorecard-val" style={{ fontSize: 14 }}>All plans</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Its own negotiated price list</div><div className="scorecard-note">catalogue tied to that company</div></div>
                  <div className="scorecard-val" style={{ fontSize: 14 }}>Plus</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Net 30 or net 60 on account</div><div className="scorecard-note">with reminders when it falls due</div></div>
                  <div className="scorecard-val" style={{ fontSize: 14 }}>All plans</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Deposit on a big order</div><div className="scorecard-note">or part payment per shipment</div></div>
                  <div className="scorecard-val" style={{ fontSize: 14 }}>Plus</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">VAT number checked</div><div className="scorecard-note">UK and EU locations, Shopify Tax</div></div>
                  <div className="scorecard-val" style={{ fontSize: 14 }}>Per location</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Credit limit and balance</div><div className="scorecard-note">held in your accounts system</div></div>
                  <div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>We link it</div>
                </div>
                <p style={srcNote}>
                  Plan split from <a href={SRC_PLAN_FEATURES} {...ext} style={srcLink}>Shopify Help, B2B features by plan</a>, read {READ_ON}.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 2. ANSWER-FIRST DEFINITION (GEO) ═══ */}
        <section className="sec">
          <div className="wrap">
            <div className="def" style={{ maxWidth: 940 }} data-speakable="true">
              <span className="lab">What is Shopify Plus B2B for a UK wholesaler?</span>
              <p>
                Shopify Plus B2B is Shopify’s built-in trade selling, on its top plan. Each trade customer becomes a
                company with locations and buyers, sees its own catalogue and prices, and can pay on terms from net 7
                to net 90. Plus adds unlimited catalogues, catalogues tied to one company, deposits and part payments.
                Basic, Grow and Advanced carry a lighter version with three catalogues. FactoryJet is a Shopify B2B
                agency for UK wholesalers and brands: we set up trade accounts, price lists, net terms and VAT numbers
                on Shopify, and link the store to your accounts system or ERP.
              </p>
            </div>
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">Terms we use a lot</span>
              <p>
                A <b>catalogue</b> is a list of products and prices that only certain trade customers can see. <b>Net
                30</b> means the buyer pays within 30 days of ordering. A <b>company location</b> is one site of a trade
                customer, such as a branch, with its own delivery address and VAT number. An <b>ERP</b> is the system
                that runs your stock, orders and finance, such as Business Central or NetSuite. A <b>SKU</b> is a
                product’s stock code. A <b>3PL</b> is a third-party warehouse that packs and ships for you. <b>D2C</b>{' '}
                means selling direct to consumers, in other words retail. A <b>vaulted card</b> is a card a trade buyer
                saves on file to pay later orders.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ 3. FACTS BAND (verified only) ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              {[
                { v: 'Net 7 to 90', t: 'payment terms Shopify B2B offers, counted from the day the order is placed', s: 'Shopify Help', u: SRC_TERMS },
                { v: '60 days', t: 'the usual ceiling on agreed payment dates between UK businesses', s: 'GOV.UK', u: SRC_LATE },
                { v: '8% + base', t: 'statutory interest on late business-to-business payments', s: 'GOV.UK', u: SRC_INTEREST },
                { v: '30 days', t: 'to issue a VAT invoice to a VAT-registered trade buyer, normally', s: 'HMRC Notice 700/21', u: SRC_VAT_INVOICE },
              ].map((r) => (
                <li key={r.t}>
                  <div style={{ fontFamily: T.fd, fontWeight: 800, fontSize: 26, color: T.orange }}>{r.v}</div>
                  <p style={{ fontSize: 13.5, color: T.ink, marginTop: 4 }}>{r.t}</p>
                  <a href={r.u} {...ext} style={{ fontFamily: T.fm, fontSize: 10, color: T.n400, textDecoration: 'underline' }}>{r.s}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ 4. PLUS OR NOT (comparison table) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <span className="eyebrow">Plan choice</span>
            <h2 style={{ maxWidth: 780 }}>Shopify B2B features by plan: do you need Shopify Plus?</h2>
            <p className="lead mt-4" style={{ maxWidth: 780 }}>
              Shopify B2B now runs on Basic, Grow, Advanced and Plus. That changes the first question in a UK trade
              project. The real test is how many price lists you keep and whether any account pays a deposit. Here is
              the split, restated from Shopify’s help centre on {READ_ON}.
            </p>
            <p className="md:hidden mt-6" style={{ fontFamily: T.fm, fontSize: 12, color: T.n400 }}>Swipe sideways to see every column.</p>
            <div className="card mt-8" style={{ padding: 0, overflowX: 'auto', WebkitOverflowScrolling: 'touch' }} tabIndex={0} role="region" aria-label="Shopify B2B features by plan">
              <table className="cmp-table" style={{ minWidth: 640 }}>
                <thead>
                  <tr>
                    <th>B2B feature</th>
                    <th>Basic, Grow, Advanced</th>
                    <th className="fj">Shopify Plus</th>
                  </tr>
                </thead>
                <tbody>
                  {PLAN_ROWS.map((r) => (
                    <tr key={r.f}>
                      <td className="feat">{r.f}</td>
                      <td><span className={r.lowTone}>{r.low}</span></td>
                      <td className="fj"><span className="yes">{r.plus}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="stack mt-6" style={{ maxWidth: 820 }}>
              <p>
                <b>Our reading for UK wholesalers.</b> If you run one trade price list, or a few bands such as bronze,
                silver and gold, Advanced may carry you for a while. Once accounts have their own negotiated prices,
                the three-catalogue cap and the missing direct company catalogue push you to Plus. The same goes for
                furniture, fit-out or bulk orders where you take a deposit up front.
              </p>
              <p>
                Plus also brings nine expansion stores and, per Shopify, more API capacity for custom apps. Those
                matter if you want a separate trade site or a heavy link to your ERP. If you are still deciding on the
                platform itself, our <a href="/uk/shopify-plus">Shopify Plus agency page for the UK</a> covers builds and
                migrations more widely.
              </p>
            </div>
            <p style={srcNote}>
              Sources: <a href={SRC_PLAN_FEATURES} {...ext} style={srcLink}>Shopify Help, Shopify B2B features by plan</a>;{' '}
              <a href={SRC_B2B} {...ext} style={srcLink}>Shopify Help, Shopify B2B</a>;{' '}
              <a href={SRC_PLUS_PLAN} {...ext} style={srcLink}>Shopify Help, Shopify Plus plan</a>. Read {READ_ON}. Shopify changes plan features; re-check before you choose.
            </p>
          </div>
        </section>

        {/* ═══ 4b. NATIVE B2B VS APPS VS OTHER PLATFORMS ═══ */}
        <section className="sec">
          <div className="wrap">
            <span className="eyebrow">Other routes</span>
            <h2 style={{ maxWidth: 780 }}>Native Shopify B2B, B2B apps such as SparkLayer and B2B Wave, or another platform</h2>
            <div className="stack mt-6" style={{ maxWidth: 820 }}>
              <p>
                <b>Native Shopify B2B</b> keeps trade inside Shopify’s own admin, with the plan limits shown above. Nothing
                extra to license, and Shopify maintains it.
              </p>
              <p>
                <b>SparkLayer</b> adds wholesale ordering to a store you already run. Its site says it works with
                Shopify, BigCommerce, WooCommerce, Adobe Commerce and Wix. Its free Basic plan, on Shopify only, allows
                up to three price lists; its paid plans allow unlimited price lists. That can matter on Basic, Grow or
                Advanced, where Shopify’s own cap is three catalogues.
              </p>
              <p>
                <b>B2B Wave</b> is a separate B2B ordering platform with its own trade storefront. Its site lists
                integrations with Shopify, Xero and QuickBooks Online. Your trade buyers then order on a site that is
                not your Shopify store.
              </p>
              <p>
                If your trade side needs punchout to a buyer’s purchasing system or multi-step quoting, a different
                platform may fit better. Our <a href="/uk/b2b-ecommerce">UK B2B ecommerce</a> page covers those
                builds. We are not tied to one answer, and the draft before you sign shows whether native B2B is enough.
              </p>
            </div>
            <p style={srcNote}>
              Sources: <a href={SRC_SPARKLAYER} {...ext} style={srcLink}>SparkLayer</a>;{' '}
              <a href={SRC_B2BWAVE} {...ext} style={srcLink}>B2B Wave</a>. Read {ALT_READ_ON}. App plans change; check each vendor before you choose.
            </p>
          </div>
        </section>

        {/* ═══ 5. WHAT WE BUILD ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">The work</span>
              <h2>What we set up in a UK Shopify B2B project</h2>
              <p className="lead mt-4">
                Native B2B gives you the parts. The work is fitting them to how your trade customers already buy and how
                your finance team already gets paid. These are the nine pieces we build most often.
              </p>
            </div>
            <ul className="col-2 mt-12">
              <li className="svc-card" style={{ gridColumn: '1 / -1' }}>
                <h3>Trade accounts as companies</h3>
                <p className="mt-4">We move every trade customer across in bulk: the company, each branch as a location with its own delivery address, and the people allowed to order. Location-level permissions decide who can only order and who can manage the account.</p>
              </li>
              <li className="svc-card">
                <h3>Catalogues and price lists</h3>
                <p className="mt-4">Your price bands or negotiated prices become catalogues, and each one is checked line by line against your current figures. Where catalogues overlap, Shopify shows the lowest price, so we plan overlaps on purpose.</p>
              </li>
              <li className="svc-card">
                <h3>Net terms and credit</h3>
                <p className="mt-4">Terms per account, from net 7 to net 90, or due on fulfilment. New accounts can start on card until finance approves credit. On Plus, deposits for large orders and part payments per shipment.</p>
              </li>
              <li className="svc-card">
                <h3>VAT numbers and invoices</h3>
                <p className="mt-4">VAT numbers held per location and validated where Shopify Tax is used, and a clear answer on which system issues the full VAT invoice your trade buyers need to reclaim VAT.</p>
              </li>
              <li className="svc-card">
                <h3>Ordering rules</h3>
                <p className="mt-4">Case packs, minimums and price breaks with Shopify’s quantity rules. Basket-wide rules, such as a minimum order value per account or a pallet surcharge, written as Shopify Functions (small pieces of custom checkout code) that you own.</p>
              </li>
              <li className="svc-card">
                <h3>Fast reordering</h3>
                <p className="mt-4">A quick order list for buyers who know their SKUs, one-click reorders of past orders, and purchase order numbers captured at checkout so your accounts team can match them.</p>
              </li>
              <li className="svc-card">
                <h3>Rep-assisted orders</h3>
                <p className="mt-4">Sales staff permissions so reps build draft orders for their own accounts and send an invoice or a checkout link. Useful for customers who still phone in but should not be retyped.</p>
              </li>
              <li className="svc-card">
                <h3>ERP and accounting link</h3>
                <p className="mt-4">Orders, refunds and credit notes into your accounts system or ERP through its API; prices, stock and credit back to Shopify. See our <a href="/uk/shopify-xero-integration">Shopify Xero integration</a> page for the payout and VAT detail.</p>
              </li>
              <li className="svc-card">
                <h3>Retail and trade together</h3>
                <p className="mt-4">One stock pool across your retail store, trade accounts and marketplaces such as Amazon.co.uk, eBay UK and OnBuy, so a trade order never sells stock a marketplace already took.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* ═══ 6. NET TERMS AND UK LAW ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Paying on account</span>
                <h2>Net terms on Shopify, and the UK late payment rules that sit behind them</h2>
                <div className="stack mt-6">
                  <p>
                    Shopify lets you offer net 7, 15, 30, 45, 60 or 90, counted from the day the order is placed. It
                    also offers payment due on fulfilment. A fixed payment date is available only on individual draft
                    orders, so a standing month-end account needs a fixed date on each rep-built draft order, or custom work.
                  </p>
                  <p>
                    UK law adds limits Shopify does not enforce for you. GOV.UK says agreed payment dates between
                    businesses must usually be within 60 days; longer terms are allowed only if they are fair to both
                    parties. If no date is agreed, a payment is late 30 days after the invoice arrives or the goods are
                    delivered, whichever is later.
                  </p>
                  <p>
                    When a trade account pays late, you can usually claim statutory interest of 8% plus the Bank of
                    England base rate, unless your contract sets its own rate. Shopify sends payment reminders. The
                    chasing, the interest and the credit hold normally live in your accounts system, so we make sure an
                    overdue balance there can stop new orders on terms in Shopify.
                  </p>
                </div>
                <p style={srcNote}>
                  Sources: <a href={SRC_TERMS} {...ext} style={srcLink}>Shopify Help, payment terms</a>;{' '}
                  <a href={SRC_LATE} {...ext} style={srcLink}>GOV.UK, late commercial payments</a>;{' '}
                  <a href={SRC_INTEREST} {...ext} style={srcLink}>GOV.UK, charging interest on commercial debt</a>. Read {READ_ON}.
                  We are not solicitors: we set the store up to match the terms your contracts already use.
                </p>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">How we map terms to accounts</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">New trade applicant</div><div className="scorecard-note">no credit check yet</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Card only</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Approved account</div><div className="scorecard-note">standard UK trade</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Net 30</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Key account</div><div className="scorecard-note">negotiated in contract</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Net 60</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Large or bespoke order</div><div className="scorecard-note">Plus plan</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Deposit first</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Balance overdue in Xero or Sage</div><div className="scorecard-note">read from accounts</div></div><div className="scorecard-val" style={{ color: T.small, fontSize: 14 }}>Terms paused</div></div>
                <p style={{ fontSize: 13, color: T.n400, marginTop: 10 }}>An example set-up, not advice. Your credit policy decides the rows.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 7. VAT, MTD AND EXPORTS ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 820 }}>
              <span className="eyebrow">VAT and HMRC</span>
              <h2>VAT-registered buyers, VAT invoices and Making Tax Digital</h2>
              <p className="lead mt-4">
                Trade buyers who are VAT registered reclaim the VAT you charge them, so the paperwork matters to them
                as much as the price. Three rules shape the build.
              </p>
            </div>
            <div className="stack mt-8" style={{ maxWidth: 820 }}>
              <h3>1. The VAT number sits on each location</h3>
              <p>
                Shopify holds a tax registration number per company location. Shopify’s help centre says that on stores
                using Shopify Tax, the field becomes VAT number for locations with UK or EU shipping addresses, and
                Shopify Tax validates it once entered. A group with three branches can carry the right number on each.
              </p>
              <h3 className="mt-4">2. The trade buyer usually needs a full VAT invoice</h3>
              <p>
                HMRC’s Notice 700/21 says a VAT-registered business must issue a VAT invoice for standard or reduced rate
                supplies to another VAT-registered person, normally within 30 days of the supply. A full invoice carries
                set details: a sequential number, your VAT number, the unit price, the rate and the VAT total in sterling.
                A simplified invoice is allowed only at £250 or less including VAT. We decide early whether Shopify or
                your accounts system issues it, and test a sample against HMRC’s list.
              </p>
              <h3 className="mt-4">3. The order has to reach your VAT records digitally</h3>
              <p>
                GOV.UK says all VAT-registered businesses should now be signed up for Making Tax Digital for VAT. For a
                trade store, every order, refund and credit note should reach Xero, QuickBooks, Sage or your ERP
                without being retyped. That link is part of our build from the first phase.
              </p>
              <h3 className="mt-4">Selling to trade buyers in the EU</h3>
              <p>
                Shopify can give EU accounts their own catalogue. The VAT side is yours to get right: HMRC
                Notice 703 says goods exported from the UK can be zero-rated only if they leave, and you hold official or
                commercial evidence of export, within three months of the supply. Northern Ireland to EU movements follow
                separate rules. We map the flows; your accountant confirms the treatment.
              </p>
            </div>
            <p style={srcNote}>
              Sources: <a href={SRC_COMPANIES} {...ext} style={srcLink}>Shopify Help, B2B companies</a>;{' '}
              <a href={SRC_VAT_INVOICE} {...ext} style={srcLink}>HMRC, VAT Notice 700/21</a>;{' '}
              <a href={SRC_MTD} {...ext} style={srcLink}>GOV.UK, Making Tax Digital for VAT</a>;{' '}
              <a href={SRC_EXPORT} {...ext} style={srcLink}>HMRC, VAT Notice 703</a>. Read {READ_ON}. We are not tax advisers.
            </p>
          </div>
        </section>

        <MidPageCTA
          headline={'Want to see your trade prices on Shopify before you decide?'}
          sub={'Send one price list and a recent trade order export. We will build a working draft with one of your real accounts, show your sales team how it orders, and tell you whether you need Plus or not.'}
          label={'See a draft of my trade store'}
        />

        {/* ═══ 8. SYSTEMS AND OWNERSHIP ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <span className="eyebrow">UK systems</span>
            <h2 style={{ maxWidth: 780 }}>Which system owns each trade record: the question we settle first</h2>
            <p className="lead mt-4" style={{ maxWidth: 780 }}>
              Integrations break most often when two systems both think they own the price or the stock. So we agree one
              owner per record before writing any integration code. The table shows the pattern we start from. We change it
              to match your business.
            </p>
            <p className="md:hidden mt-6" style={{ fontFamily: T.fm, fontSize: 12, color: T.n400 }}>Swipe sideways to see every column.</p>
            <div className="card mt-8" style={{ padding: 0, overflowX: 'auto', WebkitOverflowScrolling: 'touch' }} tabIndex={0} role="region" aria-label="Record ownership between Shopify and UK back-office systems">
              <table className="cmp-table" style={{ minWidth: 760 }}>
                <thead>
                  <tr>
                    <th>Record</th>
                    <th className="fj">Usual owner</th>
                    <th>Shopify’s role</th>
                    <th>Systems we often see in the UK</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Trade prices and bands</td><td className="fj"><span className="yes">ERP or accounts</span></td><td><span className="partial">Shows them in catalogues</span></td><td>Business Central, NetSuite, Sage 200, Odoo</td></tr>
                  <tr><td className="feat">Stock levels</td><td className="fj"><span className="yes">ERP or stock tool</span></td><td><span className="partial">Sells against them</span></td><td>Brightpearl, Linnworks, Mintsoft, Odoo</td></tr>
                  <tr><td className="feat">Credit limit and balance</td><td className="fj"><span className="yes">Accounts</span></td><td><span className="partial">Pauses terms when told</span></td><td>Xero, Sage 50, Sage Intacct, QuickBooks UK</td></tr>
                  <tr><td className="feat">VAT invoice</td><td className="fj"><span className="yes">Accounts, usually</span></td><td><span className="partial">Sends the order</span></td><td>Xero, Sage, Business Central</td></tr>
                  <tr><td className="feat">Trade accounts and buyers</td><td className="fj"><span className="yes">Shopify or CRM</span></td><td><span className="yes">Holds logins and permissions</span></td><td>Shopify companies, HubSpot</td></tr>
                  <tr><td className="feat">Shipping labels and tracking</td><td className="fj"><span className="yes">Courier or 3PL tool</span></td><td><span className="partial">Receives tracking</span></td><td>Royal Mail, DPD, Evri, Mintsoft</td></tr>
                  <tr><td className="feat">Card and direct debit payments</td><td className="fj"><span className="yes">Payment provider</span></td><td><span className="partial">Takes payment at checkout</span></td><td>Shopify Payments, Stripe, GoCardless</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6" style={{ maxWidth: 820 }}>
              On a blended store, consumer payment options such as Klarna or Clearpay usually stay on the retail side,
              while approved trade accounts check out on terms. If your trade team still writes orders from a portal on
              WooCommerce or Magento, our <a href="/uk/shopify-migration">UK Shopify migration</a> service moves
              accounts, order history and redirects across with the B2B set-up.
            </p>
          </div>
        </section>

        {/* ═══ 9. PROOF (labelled, not Shopify) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">UK trade work</span>
                <h2>UK trade stores we have built or are building, and what carries over to Shopify</h2>
                <div className="stack mt-6">
                  <p>
                    Neither of these is a Shopify store, and we say so plainly. They are UK trade projects with the same
                    hard parts a Shopify B2B build has: per-account prices and a back office that has to
                    stay the single source of truth.
                  </p>
                  <p>
                    <a href="/case-studies/sow-easy-distributor-portal" style={{ textDecoration: 'underline' }}>Sow Easy</a> is
                    a UK distributor selling to trade buyers. We are building its WooCommerce trade store with Odoo as the
                    owner of stock, pricing and SKUs. The Odoo link is being tested against Odoo’s staging system and the
                    launch is still ahead.
                  </p>
                  <p>
                    <a href="/case-studies/gpsuk-promotional-products" style={{ textDecoration: 'underline' }}>GPSUK</a> supplies
                    promotional products to UK businesses. Its trade storefront is built on Commerceflo, where buyers log
                    in, see their own account prices and move from quote to order without retyping.
                  </p>
                  <p>
                    The method transfers directly. We settle who owns each record before any code is written, and we test
                    against a copy of the back office, never the live one.
                  </p>
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Our engagement terms</span>
                <ul className="scope-list yes-list mt-4">
                  {HOUSE_TERMS.map((h) => (
                    <li key={h.t}><b>{h.t}.</b> {h.d}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 10. PROJECT STEPS ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 740 }}>
              <span className="eyebrow">How a project runs</span>
              <h2>How we move UK trade accounts onto Shopify B2B, in seven steps</h2>
              <p className="lead mt-4">
                Each phase is scoped, priced and signed on its own. You can stop after any step and keep what was built.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {[
                { n: '01', t: 'Read the brief and a real order', d: 'We read your brief, one trade price list and a recent trade order export, then confirm on a call which plan you need and why.' },
                { n: '02', t: 'Build the draft on your data', d: 'A working Shopify draft with your products, one real trade account and its prices. Your sales team logs in as that buyer and places a test order.' },
                { n: '03', t: 'Agree record owners', d: 'A one-page map of which system owns prices, stock, credit, invoices and accounts, signed off by sales and finance before integration work begins.' },
                { n: '04', t: 'Move the accounts and prices', d: 'Companies, locations, buyers, catalogues, terms and VAT numbers loaded in bulk, then every account’s prices checked against your current figures.' },
                { n: '05', t: 'Connect the back office', d: 'Orders, refunds and credit notes into your accounts system or ERP; prices, stock and credit back to Shopify. Tested against a copy, not live.' },
                { n: '06', t: 'Pilot with a few friendly accounts', d: 'Three to five trusted trade customers order for real while the old route stays open, so issues surface with people who will tell you.' },
                { n: '07', t: 'Switch everyone and stay on', d: 'Invite emails, a short buyer guide, and a quiet-day switch with a written rollback. Defects found after launch are fixed inside the build price for the agreed cover period.' },
              ].map((s) => (
                <li key={s.n} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.small, minWidth: 34 }}>{s.n}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{s.t}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ═══ 11. BRIEF / RFP + COST ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Send us your brief</span>
                <h2>What a Shopify B2B brief or RFP should include</h2>
                <div className="stack mt-6">
                  <p>
                    A written brief that names your systems lets us quote fastest. If yours is
                    half-finished, send it anyway. If you have none, these six answers let us quote a fixed price:
                  </p>
                  <ul className="scope-list num-list" style={{ maxWidth: 580 }}>
                    <li><b>Accounts.</b> How many trade customers order, and how many sites each one has.</li>
                    <li><b>Prices.</b> How many distinct price lists or bands you keep, and where they live today.</li>
                    <li><b>Terms.</b> The payment terms you offer, and whether any order takes a deposit.</li>
                    <li><b>Systems.</b> Your accounts system, ERP, stock tool and courier set-up.</li>
                    <li><b>Channels.</b> Retail store, marketplaces and any EU trade buyers.</li>
                    <li><b>Hard rules.</b> Anything awkward today: pallet freight, approvals, bespoke items.</li>
                  </ul>
                  <p>
                    <b>On cost.</b> Shopify sets the platform fee. Its UK pricing page lists Plus from £1,800 a month, and
                    Shopify says bigger businesses may move to a variable platform fee that differs for B2B and D2C. The
                    page does not say whether the £1,800 includes VAT, so check your Shopify invoice. The build depends
                    on the six answers above. FactoryJet quotes it as a fixed price in writing after a short scoping call.
                  </p>
                </div>
                <div className="mt-8">
                  <ModalCTAButton label="Send my B2B brief" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
                <p style={srcNote}>
                  Sources: <a href={SRC_PLUS_PRICING} {...ext} style={srcLink}>Shopify UK, Plus pricing</a>;{' '}
                  <a href={SRC_PLUS_PLAN} {...ext} style={srcLink}>Shopify Help, Plus plan</a>. Read {READ_ON}.
                </p>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What moves the scope</span>
                <div className="scorecard-row"><div className="scorecard-metric">Number of distinct price lists</div><div className="scorecard-val" style={{ fontSize: 14 }}>Catalogues</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Systems to connect</div><div className="scorecard-val" style={{ fontSize: 14 }}>Integration</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Accounts and order history to move</div><div className="scorecard-val" style={{ fontSize: 14 }}>Migration</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Custom checkout rules</div><div className="scorecard-val" style={{ fontSize: 14 }}>Functions</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Blended store or separate trade site</div><div className="scorecard-val" style={{ fontSize: 14 }}>Design</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Draft on your data before you sign</div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Included</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 12. FAQ ═══ */}
        <section className="sec-lg" id="faq">
          <div className="wrap">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2>Shopify B2B questions from UK wholesalers and their finance teams</h2>
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
                  <ModalCTAButton label="Still have a question? Ask the founder →" region="uk" modalVariant="default" btnVariant="secondary-light" />
                  <p>Bhavesh replies within 24 hours.</p>
                </div>
              </aside>

              <div>
                {FAQ_CATEGORIES.map((c, ci) => (
                  <div key={c.key} id={`faq-${c.key}`} style={{ marginBottom: ci === FAQ_CATEGORIES.length - 1 ? 0 : 40 }}>
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

        {/* ═══ 13. RELATED ═══ */}
        <section className="sec">
          <div className="wrap">
            <span className="eyebrow">Related UK services</span>
            <p className="mt-4" style={{ maxWidth: 820 }}>
              For trade portals on other platforms, see <a href="/uk/b2b-ecommerce">B2B ecommerce in the UK</a>. If you
              want an independent view before choosing a platform, start with our <a href="/uk/ecommerce-consultant">UK
              ecommerce consultant</a> service. Outside the UK, see our <a href="/services/shopify-plus-b2b">Shopify Plus
              B2B</a> page.
            </p>
            <div className="flex-wrap mt-6">
              <a className="city-pill" href="/uk/shopify-plus">Shopify Plus UK</a>
              <a className="city-pill" href="/uk/b2b-ecommerce">B2B ecommerce UK</a>
              <a className="city-pill" href="/uk/shopify-xero-integration">Shopify Xero integration UK</a>
              <a className="city-pill" href="/uk/shopify-migration">Shopify migration UK</a>
              <a className="city-pill" href="/uk/ecommerce-consultant">Ecommerce consultant UK</a>
            </div>
          </div>
        </section>

        {/* ═══ 14. FINAL CTA (the only dark section) ═══ */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Next step</span>
            <h2>See one of your trade accounts ordering on Shopify</h2>
            <p className="mt-4">
              Send your name, work email and, if you have it, a price list or brief. Bhavesh replies within 24 hours.
              We build a draft with one real account and tell you plainly whether you need Plus.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="See a draft of my trade store" region="uk" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/uk/shopify-plus" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>See Shopify Plus UK</a>
            </div>
          </div>
        </section>

      </main>
        <Footer />
      </div>
    </>
  );
}

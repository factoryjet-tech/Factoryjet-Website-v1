import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { twinAlternates } from '@/data/hreflangMap';
import '../ai-agents/ai-agents.css';

/* /uk/bigcommerce-b2b, built 2026-10-29.

   Truth rules for anyone editing this file.
   1. Every platform, tax or legal fact below was read on the vendor's or
      regulator's own page on 29 October 2026 and links to it through the
      SRC_* constants. Re-read the page before changing a fact.
   2. No FactoryJet price. The money figures are BigCommerce's own list
      prices (USD, excluding VAT, as its UK pricing page states) and the USD
      market range from BigCommerce's ecommerce cost guide (SRC_BC_COST),
      labelled "market range, not our price". No GBP range was found.
   3. Client proof: GPSUK is a Commerceflo build and Sow Easy is WooCommerce
      plus Odoo (Odoo link tested against Odoo's staging system, launch still
      ahead). Never present either as BigCommerce work.
   4. ERP experience confirmed by Bhavesh (2026-10-09): Odoo, NetSuite, SAP
      Business One, ERPNext, custom ERPs. Every other system on this page is
      written as "connects through its API", never as past work. */

const CANONICAL = 'https://factoryjet.com/uk/bigcommerce-b2b';
const UPDATED = '2026-10-31';
const TITLE = 'BigCommerce Agency UK for B2B Trade Portals | FactoryJet';
const H1 = 'BigCommerce B2B Edition Agency for UK Distributors and Manufacturers';

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

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'BigCommerce B2B', url: CANONICAL },
];

/* ─── External sources, each read on 2026-10-29 ─────────────────────── */
// BigCommerce Help Center, "B2B Edition": "BigCommerce's enterprise-level B2B
// offering"; company accounts with multi-tier hierarchies and buyer roles;
// sales agents' quotes; sales agents can place orders for consenting
// companies; shared shopping lists; invoice portal with company payment
// terms; per-company payment methods; Quick Order Pad by SKU, past orders or
// CSV; Buyer Portal "enabled by default when creating a new B2B Edition
// account"; "you can enable B2B Edition on any of your native storefronts";
// multicurrency for payments and invoices "is supported". No tax content.
const SRC_B2B_HELP = 'https://support.bigcommerce.com/articles/en_US/Knowledge/B2B-Edition';
// BigCommerce press release, 25 March 2025: "Support for multi-tier account
// structures", role-based permissions, bulk invoice payments, CPQ "built to
// help B2B businesses accelerate quote-to-cash cycles". The release predates
// the parent company's rename (see SRC_SEC_RENAME), so its "Nasdaq: BIGC"
// ticker is out of date. Do not quote that ticker as current.
const SRC_B2B_PRESS = 'https://www.commerce.com/en-GB/press/b2b-multi-account-hierarchy-and-cpq-press-release/';
// BigCommerce UK pricing: "Prices are in US Dollars and exclude all forms of
// tax (US Sales, GST, VAT)." Core $29, Growth $79, Scale $299 a month billed
// annually; Performance custom, starting at $1,499 a month, billed annually.
// B2B Edition not priced on the page.
// SEC Form 8-K, filed for 31 July 2025: BigCommerce Holdings, Inc. changed its
// name to Commerce.com, Inc. effective 31 July 2025, and its Nasdaq ticker
// moved from BIGC to CMRC from the open on 1 August 2025. Commerce.com's FAQ
// says BigCommerce, Feedonomics and Makeswift stay in use as brands.
const SRC_SEC_RENAME = 'https://www.sec.gov/Archives/edgar/data/1626450/000095017025100556/bigc-20250731.htm';
// BigCommerce blog, BigCommerce Payments UK expansion: PayPal-powered, for UK
// merchants on Core, Growth and Scale, including "Buy Now, Pay Later (Klarna,
// Clearpay)". No GoCardless app was found in BigCommerce's own listings on
// 29 Oct 2026, so Direct Debit is written as a scoping item, not a feature.
const SRC_BC_PAYMENTS_UK = 'https://www.bigcommerce.com/blog/bigcommerce-payments-uk-expansion';
const SRC_BC_PRICING = 'https://www.bigcommerce.co.uk/essentials/pricing/';
// BigCommerce, "Ecommerce website cost" (verified 30 Sep 2026 in
// pipeline/research/MARKET-PRICE-RANGES-2026-09-30.md rows 11 and 12):
// "$5,000–$25,000" for custom design and integrations; "$25,000 to $250,000+"
// for mid-market and enterprise brands (page FAQ, re-read 31 Oct 2026).
// Market range, not a FactoryJet price.
const SRC_BC_COST = 'https://www.bigcommerce.com/articles/ecommerce/ecommerce-cost/';
// Platform comparison sources, read 31 Oct 2026.
// Shopify Help Center, B2B: "Shopify B2B is available on the Basic, Grow,
// Advanced, and Shopify Plus plans"; B2B customers are set up as companies.
const SRC_SHOPIFY_B2B = 'https://help.shopify.com/en/manual/b2b';
// Adobe Experience League, B2B for Adobe Commerce: an extension installed and
// enabled in Adobe Commerce; company accounts with roles and hierarchies,
// shared catalogs, Quick Order, Negotiable Quotes, Payment on Account.
const SRC_ADOBE_B2B = 'https://experienceleague.adobe.com/en/docs/commerce-admin/b2b/introduction';
// WooCommerce Marketplace, Extend B2B Ecommerce AIO by Codup: companies with
// several users, RFQ quotes, price list rules, Net30/Net60 payment terms.
const SRC_WOO_B2B = 'https://woocommerce.com/products/b2b-ecommerce-for-woocommerce/';
// HMRC VAT Notice 700/22: "API transfer" and CSV import are digital links;
// HMRC "does not consider the use of 'cut and paste' or 'copy and paste'" a
// digital link.
const SRC_MTD = 'https://www.gov.uk/government/publications/vat-notice-70022-making-tax-digital-for-vat/vat-notice-70022-making-tax-digital-for-vat';
// GOV.UK: statutory interest is "8% plus the Bank of England base rate for
// business to business transactions"; not claimable if the contract sets a
// different rate.
const SRC_LATE_INTEREST = 'https://www.gov.uk/late-commercial-payments-interest-debt-recovery/charging-interest-commercial-debt';
// GOV.UK: with no agreed date, payment is late 30 days after the customer
// gets the invoice or the goods arrive (if later); agreed dates "must usually
// be within ... 60 days for business transactions".
const SRC_LATE_WHEN = 'https://www.gov.uk/late-commercial-payments-interest-debt-recovery';
// HMRC VAT Notice 703: exports zero-rated only "if you comply with all
// relevant conditions"; 3 months to export and get evidence for direct
// exports; GB to EU follows export rules; NI to EU follows separate rules.
const SRC_VAT_EXPORT = 'https://www.gov.uk/guidance/vat-on-goods-exported-from-the-uk-notice-703';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',  label: 'BigCommerce B2B Edition basics' },
  { key: 'uk',      label: 'UK systems, VAT and trade terms' },
  { key: 'project', label: 'Cost, terms and how a project runs' },
  { key: 'choose',  label: 'Choosing a platform' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── Basics ──
  { category: 'basics', question: 'What is BigCommerce B2B Edition?',
    answer: 'B2B Edition is what BigCommerce calls its enterprise-level B2B offering. It is switched on for an existing BigCommerce storefront and runs inside the same account. BigCommerce’s help centre lists company accounts with multi-tier hierarchies and buyer roles, quotes from sales agents, shared shopping lists, a Quick Order Pad, an invoice portal with company payment terms, and payment methods set per company. Existing BigCommerce merchants request it through their customer success manager or BigCommerce sales.' },
  { category: 'basics', question: 'What are the features of B2B ecommerce?',
    answer: 'For a UK distributor the core list is short: a login for each trade customer, prices set for that account, ordering by SKU in bulk, reordering from past orders, quotes for large or unusual orders, pay on account with a credit limit, and invoices that match your accounts system. On top of that, B2B needs several buyers per company with different permissions, such as a site buyer who orders and a manager who approves.' },
  { category: 'basics', question: 'Can a customer with several branches buy on one BigCommerce account?',
    answer: 'Yes. BigCommerce added multi-tier account structures to B2B Edition in March 2025, with role-based permissions. Its help centre describes company accounts with multi-tier hierarchies and buyer roles. So a builders’ merchant group can sit at the top, with each branch as its own company below it. A branch buyer orders for their site, and we set up head office access to branch orders and invoices during scoping.' },
  { category: 'basics', question: 'What is BigCommerce called now?',
    answer: 'The company is now Commerce.com, Inc. Its SEC filing says BigCommerce Holdings, Inc. took that name on 31 July 2025, and its Nasdaq ticker changed from BIGC to CMRC on 1 August 2025. BigCommerce stays as the platform brand, alongside Feedonomics and Makeswift. For a UK buyer nothing practical has changed: B2B Edition, the storefront, the UK site at bigcommerce.co.uk and the developer documentation all keep the BigCommerce name.' },
  { category: 'basics', question: 'Can our sales reps place orders on behalf of trade customers?',
    answer: 'Yes. BigCommerce’s help centre says sales agents can view the Buyer Portal and place orders for consenting companies, and can share quotes with custom products, shipping rates and discounts. For a UK distributor that means the rep on the phone builds the order inside the customer’s own account, at the customer’s own prices, instead of keying it into the ERP afterwards. We set which reps see which accounts.' },
  { category: 'basics', question: 'Can one BigCommerce account run our trade portal and our retail shop?',
    answer: 'Yes. BigCommerce’s help centre says you can enable B2B Edition on any of your native storefronts. So a UK manufacturer can keep a public retail shop for card-paying shoppers and run a separate trade storefront where logged-in buyers see their account prices and pay on terms. We usually plan both around one product catalogue so descriptions and images are kept in one place.' },

  // ── UK systems, VAT and trade terms ──
  { category: 'uk', question: 'Which ERP and accounts systems can you connect to BigCommerce B2B Edition?',
    answer: 'Our ERP work covers Odoo, NetSuite, SAP Business One, ERPNext and custom ERPs. Sage 50, Sage 200, Sage Intacct, Microsoft Dynamics 365 Business Central, Xero, QuickBooks UK, Brightpearl and Linnworks connect to BigCommerce through the API each one exposes. We scope that API on your version and hosting before we quote. Whatever the system, one of them owns each piece of data.' },
  { category: 'uk', question: 'Does a BigCommerce to Xero link meet Making Tax Digital rules?',
    answer: 'It can, if the link is built as a digital link. HMRC’s VAT Notice 700/22 lists API transfer and CSV import as accepted digital links and says copy and paste does not count. A link that sends each trade invoice to Xero by API, with the VAT rate on every line, keeps the trail from order to VAT Return digital. Your accountant should still check your whole setup against the notice.' },
  { category: 'uk', question: 'How do pay-on-account and credit limits work for UK trade buyers?',
    answer: 'BigCommerce’s help centre describes an invoice portal where buyers see invoice history and pay balances, plus payment terms set per company and control over which payment methods each company can use, such as purchase orders or cards. We normally read credit limits and overdue balances from your ERP. An account on stop (blocked for unpaid bills) then cannot keep ordering on terms while finance chases it.' },
  { category: 'uk', question: 'Can we charge interest on late trade invoices?',
    answer: 'In most cases, yes. GOV.UK says statutory interest on late business-to-business payments is 8% plus the Bank of England base rate, and that you cannot claim it if your contract sets a different rate. With no agreed payment date, GOV.UK says a payment is late 30 days after the customer gets the invoice or the goods, whichever is later. We print your terms on portal invoices; your solicitor confirms the wording.' },
  { category: 'uk', question: 'How is VAT shown to trade buyers on a BigCommerce B2B store?',
    answer: 'BigCommerce’s B2B Edition help article does not cover tax, so we treat VAT as a design task. Trade buyers usually see prices ex VAT, with VAT added on the basket and the invoice. We map each product’s VAT treatment and each customer type, such as UK trade, EU business or export, to the same codes your accounts system uses, and your accountant signs off the mapping before launch.' },
  { category: 'uk', question: 'Can we sell to EU trade customers from a UK BigCommerce store?',
    answer: 'Yes. BigCommerce’s help centre says multicurrency payments and invoices are supported in B2B Edition. VAT is the harder part. HMRC’s VAT Notice 703 says goods sent from Great Britain to the EU follow the export rules, and can be zero-rated only if you meet all the conditions, including export and evidence within the time limits. Northern Ireland to EU follows separate rules. We build the order data your evidence trail needs.' },
  { category: 'uk', question: 'Do you connect Royal Mail, DPD and Evri to the trade portal?',
    answer: 'Yes, normally through your warehouse side. We pass each trade order to the tool your team already uses to book Royal Mail, DPD or Evri. That might be Linnworks, a 3PL (an outside logistics warehouse) running Mintsoft warehouse software, or your own shipping software. We also bring tracking back into the buyer’s order history. Pallet and freight orders usually need their own delivery rules at checkout, which we agree with your transport team.' },
  { category: 'uk', question: 'Can we sell on Amazon.co.uk, eBay UK and OnBuy alongside the trade portal?',
    answer: 'Yes, and we plan the channels separately. Trade buyers see account prices and terms; shoppers on Amazon.co.uk, eBay UK, OnBuy or ManoMano see public prices. What matters is one stock figure across all of them, which usually means your ERP, Linnworks or Brightpearl owns stock and feeds BigCommerce and the marketplaces. Overselling a trade customer’s pallet because a marketplace sold the last units is the failure we design against.' },

  // ── Cost, terms and how a project runs ──
  { category: 'project', question: 'How much does BigCommerce B2B Edition cost in the UK?',
    answer: 'BigCommerce’s UK pricing page lists its standard plans in US dollars, excluding VAT: from $29 a month on Core to $299 on Scale, billed annually, with Performance starting at $1,499 a month billed annually. B2B Edition is not priced on that page; BigCommerce quotes it through sales. For the build, BigCommerce’s own cost guide gives a market range, not our price: $5,000 to $25,000 for custom design and integrations, and $25,000 to $250,000 or more for mid-market and enterprise builds. FactoryJet quotes a fixed price per phase in writing after a short scoping call.' },
  { category: 'project', question: 'How long does a BigCommerce B2B project take?',
    answer: 'A B2B Edition build with company accounts, price lists and quick order typically takes 5 to 8 weeks. A headless or heavily custom build runs 8 to 14 weeks. The ERP link sets the pace more than the storefront does. Accounts and prices can go live first from a file, with the live ERP sync in the next phase. Dates for each phase go in the written quote.' },
  { category: 'project', question: 'Do we see anything before we sign?',
    answer: 'Yes. Before you sign, we build a working draft on BigCommerce with a slice of your real catalogue and one of your trade price lists. Your sales team can log in as a buyer, place a quick order by SKU and check that their own prices appear. Your sales team finds out whether trade customers will order this way before you commit.' },
  { category: 'project', question: 'Who owns the store, the code and the integrations?',
    answer: 'You do, from day one. The BigCommerce account, B2B Edition and any apps sit in your company’s name and are billed to you directly, at cost, with no markup from us. Theme changes, middleware (the code that sits between BigCommerce and your ERP) and integration code live in your own repository. Defects found after launch are fixed inside the build price, for a cover period we agree in writing before work starts.' },
  { category: 'project', question: 'Do we have to sign a monthly support contract?',
    answer: 'No. Support after launch is optional. If you want us to stay on, each change is quoted and approved before we do it, and there is no monthly minimum you pay whether you use it or not. A common split is for us to keep the ERP link and price-list changes while your team runs product content. We can also keep managing the hosting and integrations if your team would rather not.' },
  { category: 'project', question: 'What should we put in a BigCommerce B2B brief or RFP?',
    answer: 'Six things: how many trade accounts and buyers per account you have, how prices are set today (bands, customer-specific or contract), which systems hold stock and credit limits, your order volume and delivery types such as parcels and pallets, whether retail or marketplaces run alongside trade, and the date that matters to you. Upload it as a PDF or Word file with the form and the founder replies within 24 hours.' },

  // ── Choosing a platform ──
  { category: 'choose', question: 'BigCommerce vs Shopify for B2B: which is better?',
    answer: 'Both run hosted B2B for UK wholesalers, so the answer comes from your ERP, your price rules and your team. BigCommerce B2B Edition suits distributors who want company hierarchies, sales-agent quotes and an invoice portal inside the platform’s own B2B layer, and trade and retail on separate storefronts of one account. Shopify Plus suits brands whose direct-to-consumer channel is the bigger business. We build on both, so we have no reason to push either.' },
  { category: 'choose', question: 'Is BigCommerce better than WooCommerce for B2B?',
    answer: 'For a distributor with hundreds of trade accounts and an ERP, BigCommerce is usually the steadier choice, because hosting and the core B2B features come from the vendor. WooCommerce suits firms already on WordPress who want full control and are happy to own hosting and plugin updates. We build on both, and our Sow Easy trade store (see below) runs on WooCommerce, so we can say which fits your catalogue.' },
  { category: 'choose', question: 'Should we move from Magento to BigCommerce B2B Edition?',
    answer: 'Sometimes. Heavily customised Magento and Adobe Commerce sites often move to cut hosting and upgrade work. Most of the risk sits in the data: company accounts, price rules, order history and URLs that already rank. We map each one before anything moves, set a 301 redirect (a permanent forward to the new address) for every old URL, and load trade accounts so buyers arrive to their company, colleagues and price lists already in place.' },
];

/* ─── JSON-LD. The Organization is defined once, sitewide; this page only
       references it by @id and never redefines it. ─────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'BigCommerce B2B Edition Development UK',
      serviceType: 'BigCommerce B2B Edition implementation, trade portal build, ERP and accounting integration',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      description:
        'BigCommerce B2B Edition trade portals for UK distributors and manufacturers: company accounts and buyer roles, account price lists, quick order by SKU, sales-agent quotes, invoice portal and pay on terms, connected through its API to the ERP or accounts system that owns stock and prices.',
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
  description:
    'BigCommerce B2B Edition trade portals for UK distributors: account prices, quick order, quotes and pay on terms, linked to the ERP that owns your prices.',
  // No x-default: the US/global page /services/bigcommerce-b2b exists and
  // declares no alternates yet, so pointing x-default here would be wrong.
  alternates: { canonical: CANONICAL, languages: twinAlternates['bigcommerce-b2b'] },
  openGraph: {
    title: TITLE,
    description:
      'We build BigCommerce B2B Edition trade portals for UK distributors and manufacturers and connect them to the ERP that owns stock and account prices. A working draft on your data before you sign.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    // Deliberate placeholder: shared with /uk/b2b-ecommerce until a
    // BigCommerce-B2B-specific 1200x630 OG image is generated (via Codex).
    images: [{ url: '/images/uk/b2b-ecommerce/b2b-ecommerce-og.webp', width: 1200, height: 630, alt: 'A UK wholesale operations manager working on a trade ordering portal in a warehouse office' }],
  },
  robots: { index: true, follow: true },
};

const srcNote = { fontFamily: T.fm, fontSize: 11, color: T.n400, marginTop: 12 } as const;
const srcLink = { textDecoration: 'underline' } as const;

export default function BigCommerceB2BUKPage() {
  return (
    <>
      <script id="ld-uk-bigcommerce-b2b" type="application/ld+json"
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
                  <span className="chip"><span className="dot dot-orange" />BigCommerce B2B Edition UK</span>
                  <span className="chip">Trade Portals</span>
                  <span className="chip">ERP and accounts links</span>
                </div>
                <h1>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  Your trade customers still email orders. Their prices live in Sage 200, Business Central or
                  NetSuite, and someone in the sales office retypes every purchase order. FactoryJet is a
                  BigCommerce agency in the UK for trade sellers. Our BigCommerce development work builds B2B
                  Edition trade portals and connects each one, through its API, to the system that already owns
                  your stock, account prices and credit.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><a href="/about" style={{ color: 'inherit' }}><b>Bhavesh Barot</b></a>, Founder<br /><span>500+ businesses served since 2014</span></div>
                  <div className="upd">Last updated<br />31 October 2026</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="uk" source="uk_bigcommerce_b2b_hero" service="BigCommerce B2B Edition" submitLabel="See a draft of my trade portal" />
                </div>
              </div>

              <div className="card card-top-orange">
                <span className="eyebrow">What a trade buyer gets on day one</span>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">A company account</div><div className="scorecard-note">several buyers, each with a role</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Roles</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Their own prices</div><div className="scorecard-note">read from your ERP, ex VAT</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Account</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Quick Order Pad</div><div className="scorecard-note">by SKU, past order or CSV upload</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Bulk</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Quotes from their rep</div><div className="scorecard-note">custom lines, shipping and discounts</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Quote</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Invoice portal</div><div className="scorecard-note">see balances, pay on agreed terms</div></div>
                  <div className="scorecard-val" style={{ color: T.green, fontSize: 15 }}>On account</div>
                </div>
                <p style={srcNote}>
                  Features as listed in the <a href={SRC_B2B_HELP} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>BigCommerce Help Center, B2B Edition</a>, read 29 October 2026.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 2. ANSWER-FIRST DEFINITION (GEO) ═══ */}
        <section className="sec">
          <div className="wrap">
            <div className="def" style={{ maxWidth: 940 }} data-speakable="true">
              <span className="lab">What does a BigCommerce B2B Edition agency do for a UK distributor?</span>
              <p>
                It turns a BigCommerce store into a trade portal your business customers order from. That means
                setting up company accounts and buyer roles, loading each account’s prices, switching on quick
                order, quotes and the invoice portal, and connecting it all to the ERP or accounts system that
                owns each customer’s prices and credit limit. Most of the work, and most of the risk, sits in that connection.
              </p>
            </div>
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">Four terms we use a lot</span>
              <p>
                <b>B2B Edition</b> is BigCommerce’s enterprise B2B layer, switched on for a storefront. The{' '}
                <b>Buyer Portal</b> is the logged-in area where trade buyers order, reorder and pay; BigCommerce
                turns it on by default for new B2B Edition accounts. An <b>ERP</b> (enterprise resource planning)
                is the system that runs stock, orders and finance, such as Sage 200 or Business Central. A{' '}
                <b>digital link</b> is HMRC’s name for moving records between software with nobody retyping them.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              The storefront is the visible part. The part that decides whether your sales office stops retyping
              orders is quieter: which system is the master for each price, how fast stock reaches the portal, and
              whether a customer on stop can still order on terms. We scope those three before we draw a single
              page.
            </p>
            <p style={srcNote}>
              Sources: <a href={SRC_B2B_HELP} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>BigCommerce Help Center, B2B Edition</a>;{' '}
              <a href={SRC_MTD} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>HMRC, VAT Notice 700/22, Making Tax Digital for VAT</a>. Read 29 October 2026.
            </p>
          </div>
        </section>

        {/* ═══ 3. FACTS BAND (verified only) ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              {[
                { v: 'Multi-tier', t: 'company account structures added to BigCommerce B2B in March 2025, with role-based permissions', s: 'BigCommerce, 25 March 2025', u: SRC_B2B_PRESS },
                { v: 'CSV', t: 'upload is one of three ways a buyer can fill the Quick Order Pad, with SKU and past orders', s: 'BigCommerce Help Center', u: SRC_B2B_HELP },
                { v: '8% + base', t: 'statutory interest on late business-to-business payments, unless your contract sets another rate', s: 'GOV.UK', u: SRC_LATE_INTEREST },
                { v: 'API', t: 'transfer counts as a Making Tax Digital digital link; copy and paste does not', s: 'HMRC VAT Notice 700/22', u: SRC_MTD },
              ].map((r) => (
                <li key={r.t}>
                  <div style={{ fontFamily: T.fd, fontWeight: 800, fontSize: 26, color: T.small }}>{r.v}</div>
                  <p style={{ fontSize: 13.5, color: T.ink, marginTop: 4 }}>{r.t}</p>
                  <a href={r.u} target="_blank" rel="noopener noreferrer nofollow" style={{ fontFamily: T.fm, fontSize: 10, color: T.n400, textDecoration: 'underline' }}>{r.s}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ 4. WHAT WE BUILD ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">The build, piece by piece</span>
              <h2>What we set up in a BigCommerce B2B Edition project</h2>
              <p className="lead mt-4">
                B2B Edition gives you the parts. A UK distributor still has to decide how each part maps to the way
                it trades today: price bands from Sage, a rep who owns the Midlands accounts, a 60-day term for one
                customer and proforma (payment before the goods ship) for another. These are the eight pieces we
                configure and connect.
              </p>
            </div>
            <ul className="col-2 mt-12">
              <li className="svc-card">
                <h3>Company accounts and buyer roles</h3>
                <p className="mt-4">One account per trade customer, with parent and branch companies where a group buys for several sites. Each buyer gets a role, so a site manager can order and only a finance contact can pay invoices.</p>
              </li>
              <li className="svc-card">
                <h3>Account price lists</h3>
                <p className="mt-4">Price bands, customer-specific prices and contract prices, loaded from the ERP that already holds them. Trade buyers see prices ex VAT, and nobody maintains a second price file by hand.</p>
              </li>
              <li className="svc-card">
                <h3>Quick order and reorder</h3>
                <p className="mt-4">The Quick Order Pad takes SKUs, past orders or a CSV upload. Shared shopping lists let a buyer keep the weekly order ready, which matters most for distributors with long SKU lists.</p>
              </li>
              <li className="svc-card">
                <h3>Quotes from your reps</h3>
                <p className="mt-4">Buyers ask for a quote on a large or unusual order; your rep returns it with custom lines, shipping and discounts. Reps can also build an order inside the customer’s account while on the phone.</p>
              </li>
              <li className="svc-card">
                <h3>Invoice portal and terms</h3>
                <p className="mt-4">Buyers see invoice history and pay balances. Payment terms and allowed payment methods are set per company, so one account pays on 30-day terms and a new one pays by card until credit is approved. Direct Debit through a provider such as GoCardless is confirmed during scoping.</p>
              </li>
              <li className="svc-card">
                <h3>ERP and accounts link</h3>
                <p className="mt-4">Orders and new accounts go to your ERP or accounts system through its API, whether that is Sage, Business Central, NetSuite, Odoo, Xero or QuickBooks UK. Stock levels and credit status come back. Our <a href="/uk/shopify-xero-integration">Xero integration</a> page shows how VAT lines map.</p>
              </li>
              <li className="svc-card">
                <h3>Warehouse and couriers</h3>
                <p className="mt-4">Orders reach the tool that books Royal Mail, DPD or Evri, or the Mintsoft warehouse software at your 3PL (outside logistics warehouse), and tracking returns to the buyer’s order history. Pallet orders get their own delivery rules.</p>
              </li>
              <li className="svc-card">
                <h3>Retail and marketplaces alongside</h3>
                <p className="mt-4">A public storefront can run on the same account for retail shoppers, with Klarna and Clearpay available through BigCommerce Payments in the UK. Amazon.co.uk, eBay UK or OnBuy sit alongside it. All of them read one stock figure, so trade orders are never oversold.</p>
              </li>
            </ul>
            <p style={srcNote}>
              B2B Edition features described as listed in the <a href={SRC_B2B_HELP} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>BigCommerce Help Center</a> and the <a href={SRC_B2B_PRESS} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>BigCommerce March 2025 B2B release</a>; Klarna and Clearpay from <a href={SRC_BC_PAYMENTS_UK} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>BigCommerce’s UK payments announcement</a>. Payment providers and marketplaces are confirmed against your BigCommerce plan during scoping.
            </p>
          </div>
        </section>

        {/* ═══ 5. WHICH SYSTEM OWNS WHAT ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <span className="eyebrow">One owner per piece of data</span>
            <h2 style={{ maxWidth: 760 }}>Which UK system owns stock, prices and credit in a BigCommerce B2B build</h2>
            <p className="lead mt-4" style={{ maxWidth: 760 }}>
              In our integration work, most problems come from data ownership. When two systems both think they own
              a customer’s price, the buyer sees one number and the invoice shows another. This is how the jobs
              usually split for the systems UK distributors run. Your setup may differ, and we confirm it on the
              scoping call.
            </p>
            <p className="md:hidden mt-6" style={srcNote}>Swipe sideways to see every column.</p>
            <div className="card mt-8" style={{ padding: 0, overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <table className="cmp-table" style={{ minWidth: 640 }}>
                <thead>
                  <tr>
                    <th>Your main system</th>
                    <th className="fj">Usually the master for</th>
                    <th>BigCommerce owns</th>
                    <th>What we sync</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Sage 50 or Sage 200</td><td className="fj"><span className="yes">Customers, price bands, stock, credit</span></td><td><span className="partial">Buyer logins, baskets, quotes</span></td><td><span className="partial">Orders out; stock, prices and credit status in</span></td></tr>
                  <tr><td className="feat">Sage Intacct or Xero</td><td className="fj"><span className="yes">Invoices, payments, VAT</span></td><td><span className="partial">Catalogue and account prices</span></td><td><span className="partial">Invoices out by API; payments back to the invoice portal</span></td></tr>
                  <tr><td className="feat">Business Central or NetSuite</td><td className="fj"><span className="yes">Almost everything: stock, prices, credit, invoices</span></td><td><span className="partial">The buying experience</span></td><td><span className="partial">Two-way: orders, accounts, prices, stock, invoices</span></td></tr>
                  <tr><td className="feat">Odoo</td><td className="fj"><span className="yes">Stock, pricing and product identifiers</span></td><td><span className="partial">Storefront content and buyer accounts</span></td><td><span className="partial">Products, prices and stock in; orders out</span></td></tr>
                  <tr><td className="feat">Brightpearl or Linnworks</td><td className="fj"><span className="yes">Stock across channels and warehouses</span></td><td><span className="partial">Trade pricing and the Buyer Portal</span></td><td><span className="partial">Stock in; orders out to dispatch and couriers</span></td></tr>
                  <tr><td className="feat">QuickBooks UK</td><td className="fj"><span className="yes">Invoices and VAT</span></td><td><span className="partial">Catalogue, stock count, account prices</span></td><td><span className="partial">Invoices and customers out; payments in</span></td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6" style={{ maxWidth: 820 }}>
              Our{' '}
              <a href="#uk-trade-work" style={{ textDecoration: 'underline' }}>Sow Easy project</a>{' '}
              (described below) follows the same rule on a different storefront platform. The ERP decides, and
              the store displays.
            </p>
          </div>
        </section>

        {/* ═══ 6. UK RULES ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Trading rules in the UK</span>
                <h2>VAT, Making Tax Digital and late payment on a UK trade portal</h2>
                <div className="stack mt-6">
                  <p>
                    <b>Making Tax Digital.</b> HMRC’s VAT Notice 700/22 lists API transfer, CSV import and export,
                    and file upload among the accepted digital links, and says HMRC does not count copy and paste.
                    If a member of staff copies portal orders into Sage or Xero today, that step is the one we
                    replace. Every invoice should reach your accounts by API, with the VAT treatment on each line.
                  </p>
                  <p>
                    <b>VAT on EU trade orders.</b> HMRC’s VAT Notice 703 says goods sent from Great Britain to an EU
                    destination follow the export rules, and can be zero-rated only if all the conditions are met.
                    For direct exports, you have three months to export the goods and get valid evidence. Northern
                    Ireland to EU sales follow separate rules. We make sure each EU order carries the data your
                    evidence trail needs. BigCommerce’s help centre says B2B Edition supports multicurrency payments
                    and invoices, so EU buyers can be invoiced in their own currency.
                  </p>
                  <p>
                    <b>Late payment.</b> GOV.UK says statutory interest on late business-to-business payments is 8%
                    plus the Bank of England base rate, unless your contract sets another rate. With no agreed date,
                    a payment is late 30 days after the customer gets the invoice or the goods, whichever is later,
                    and agreed dates between businesses must usually fall within 60 days. Your terms can be printed
                    on every invoice and statement the portal produces.
                  </p>
                </div>
                <p style={srcNote}>
                  Sources, read 29 October 2026: <a href={SRC_MTD} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>HMRC, VAT Notice 700/22</a>;{' '}
                  <a href={SRC_VAT_EXPORT} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>HMRC, VAT Notice 703</a>;{' '}
                  <a href={SRC_LATE_INTEREST} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>GOV.UK, charging interest on commercial debt</a>;{' '}
                  <a href={SRC_LATE_WHEN} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>GOV.UK, late commercial payments</a>;{' '}
                  <a href={SRC_B2B_HELP} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>BigCommerce Help Center</a>.
                  We are not tax advisers or lawyers: we build what your accountant and solicitor sign off.
                </p>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Checks before launch</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">Every invoice line carries a VAT code</div><div className="scorecard-note">matched to your accounts system</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Mapped</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">No retyping between portal and ERP</div><div className="scorecard-note">API link, not copy and paste</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Digital</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">EU orders keep export data</div><div className="scorecard-note">for your evidence of export</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Traced</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Accounts on stop cannot use terms</div><div className="scorecard-note">credit status read from the ERP</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Blocked</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Your terms on every invoice</div><div className="scorecard-note">wording from your solicitor</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Printed</div></div>
              </div>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline={'Send us one price list and ten SKUs. We send back a working trade portal.'}
          sub={'Tell us which system holds your prices and stock, and how your trade customers order today. Before you sign anything, we put ten of your SKUs and one customer’s prices into a BigCommerce draft, and your sales team tries it as a buyer.'}
          label={'See a draft of my trade portal'}
          note={'The founder replies within 24 hours.'}
        />

        {/* ═══ 7. HOUSE TERMS ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">How we work</span>
                <h2>How a BigCommerce B2B project is priced and owned</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  The same terms apply whether the first phase is a quick-order portal for twenty accounts or a full
                  Business Central integration for a group with several branches.
                </p>
                <ul className="scope-list num-list mt-6" style={{ maxWidth: 580 }}>
                  <li><b>A draft before you sign.</b> We load a slice of your catalogue and one trade customer’s prices into a BigCommerce draft, so you judge a working portal before you commit.</li>
                  <li><b>A fixed price per phase, quoted in writing.</b> Each phase is scoped, priced and signed on its own. You can stop after any phase.</li>
                  <li><b>You own it from day one.</b> The BigCommerce account and apps are in your name, billed to you at cost with no markup. Theme, middleware and integration code sit in your repository.</li>
                  <li><b>Defect cover in the build price.</b> Defects found after launch are fixed inside the build price, for a cover period agreed before work starts.</li>
                  <li><b>Support is optional.</b> Each change is quoted and approved before we do it. There is no monthly minimum you pay whether you use it or not.</li>
                </ul>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What moves the scope</span>
                <div className="scorecard-row"><div className="scorecard-metric">Number of trade accounts and buyers</div><div className="scorecard-val" style={{ fontSize: 14 }}>Accounts</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">How prices are set (bands, contract, customer)</div><div className="scorecard-val" style={{ fontSize: 14 }}>Pricing</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Which ERP, and how it exposes data</div><div className="scorecard-val" style={{ fontSize: 14 }}>Integration</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Retail storefront and marketplaces</div><div className="scorecard-val" style={{ fontSize: 14 }}>Channels</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Migration from Magento or another platform</div><div className="scorecard-val" style={{ fontSize: 14 }}>Migration</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">First call with the founder</div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Free</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 8. PROJECT STEPS ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 740 }}>
              <span className="eyebrow">Step by step</span>
              <h2>How a BigCommerce B2B Edition project runs</h2>
              <p className="lead mt-4">
                Seven steps, in the order we run them for UK distributors. Dates for each phase go into the written
                quote once we have seen how your ERP exposes its data.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {[
                { n: '01', t: 'Read how you trade today', d: 'We take a week of real trade orders, your price structure and your payment terms, and list every way an order reaches you now: email, phone, rep visit, EDI (order files sent straight from the customer’s system) or a spreadsheet.' },
                { n: '02', t: 'Agree which system owns what', d: 'For each piece of data (customer, price, stock, credit, invoice) we name the master system. This page’s table is where that conversation starts.' },
                { n: '03', t: 'Build the draft on your data', d: 'A BigCommerce draft with a slice of your catalogue and one account’s prices. Your sales team logs in as a buyer and places a quick order. You decide whether to go ahead.' },
                { n: '04', t: 'Set up accounts, roles and price lists', d: 'Company accounts, parent and branch structures, buyer roles, price lists, payment terms and allowed payment methods for each company.' },
                { n: '05', t: 'Connect the ERP and accounts', d: 'Orders and new accounts out; stock, prices, credit status and payments in. We test against your ERP’s test company before live data moves.' },
                { n: '06', t: 'Pilot with a handful of trade customers', d: 'Five to ten friendly accounts order for real while we watch every order reach the ERP, the warehouse and the invoice portal.' },
                { n: '07', t: 'Open to every account, then stay on if you want', d: 'Buyers get their logins with their company, colleagues and prices already in place. Defects are covered inside the build price; further support is your choice.' },
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

        {/* ═══ 9. BRIEF / RFP ASK ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Send us your brief</span>
                <h2>What to put in a BigCommerce B2B brief or RFP</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  Serious buyers write things down, and a written brief gets you a sharper answer. Upload it as a PDF
                  or Word file with the form. If you do not have one yet, these six points are enough for us to
                  reply with a route and a plan for the draft.
                </p>
                <ul className="scope-list num-list mt-6" style={{ maxWidth: 580 }}>
                  <li><b>Accounts.</b> How many trade customers, and how many buyers at the largest one.</li>
                  <li><b>Prices.</b> Bands, customer-specific, contract or a mix, and where each lives today.</li>
                  <li><b>Systems.</b> Your ERP or accounts package and version, plus any stock or channel tool such as Brightpearl or Linnworks.</li>
                  <li><b>Orders.</b> Rough weekly order count, average lines per order, and parcels versus pallets.</li>
                  <li><b>Channels.</b> Whether retail, Amazon.co.uk, eBay UK or OnBuy run alongside trade.</li>
                  <li><b>Date.</b> The trade show, price rise or contract renewal you are working towards.</li>
                </ul>
                <div className="mt-8">
                  <ModalCTAButton label="Send my B2B brief" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">When BigCommerce B2B Edition fits</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">Hundreds of trade accounts, long SKU lists</div><div className="scorecard-note">buyers reorder the same lines</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Strong fit</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Groups buying for several branches</div><div className="scorecard-note">multi-tier company accounts</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Strong fit</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Trade and retail from one account</div><div className="scorecard-note">separate storefronts</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Good fit</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Retail is most of the revenue</div><div className="scorecard-note">trade is a side channel</div></div><div className="scorecard-val" style={{ fontSize: 14 }}><a href="/uk/shopify-plus-b2b" style={srcLink}>Compare Shopify Plus</a></div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Already on WordPress, small trade list</div><div className="scorecard-note">team happy to own hosting</div></div><div className="scorecard-val" style={{ fontSize: 14 }}><a href="/uk/woocommerce" style={srcLink}>Compare WooCommerce</a></div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 9b. PLATFORM COMPARISON (vendor docs only) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <span className="eyebrow">Platform comparison</span>
            <h2 style={{ maxWidth: 760 }}>BigCommerce vs Shopify, WooCommerce and Adobe Commerce for B2B</h2>
            <p className="lead mt-4" style={{ maxWidth: 760 }}>
              Each cell below comes from the vendor’s own documentation. Where a vendor page did not cover a
              feature, the cell says so, and we check it during scoping.
            </p>
            <p className="md:hidden mt-6" style={srcNote}>Swipe sideways to see every column.</p>
            <div className="card mt-8" style={{ padding: 0, overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <table className="cmp-table" style={{ minWidth: 720 }}>
                <thead>
                  <tr>
                    <th>Platform</th>
                    <th>Where B2B comes from</th>
                    <th>Company accounts</th>
                    <th>Quotes</th>
                    <th>Pay on terms</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">BigCommerce B2B Edition</td><td>B2B layer switched on for a native storefront; priced through BigCommerce sales</td><td>Multi-tier hierarchies with buyer roles</td><td>Sales-agent quotes with custom lines, shipping and discounts</td><td>Invoice portal with payment terms per company</td></tr>
                  <tr><td className="feat">Shopify</td><td>Built in on Basic, Grow, Advanced and Shopify Plus plans</td><td>B2B customers are set up as companies</td><td>Not covered on the page we read</td><td>Not covered on the page we read</td></tr>
                  <tr><td className="feat">WooCommerce</td><td>Third-party extensions on the WooCommerce Marketplace, such as Codup’s Extend B2B</td><td>Companies with several users and roles (Codup)</td><td>Request-for-quote that converts to an order (Codup)</td><td>Net30 or Net60 terms per customer or role (Codup)</td></tr>
                  <tr><td className="feat">Adobe Commerce</td><td>B2B extension installed and enabled in Adobe Commerce</td><td>Company accounts with roles and hierarchies</td><td>Negotiable Quotes</td><td>Payment on Account against a company credit line</td></tr>
                </tbody>
              </table>
            </div>
            <p style={srcNote}>
              Sources, read 29 to 31 October 2026: <a href={SRC_B2B_HELP} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>BigCommerce Help Center, B2B Edition</a>;{' '}
              <a href={SRC_SHOPIFY_B2B} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>Shopify Help Center, B2B</a>;{' '}
              <a href={SRC_WOO_B2B} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>WooCommerce Marketplace, Extend B2B Ecommerce by Codup</a>;{' '}
              <a href={SRC_ADOBE_B2B} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>Adobe Experience League, B2B for Adobe Commerce</a>.
              See our <a href="/uk/shopify-plus-b2b" style={srcLink}>Shopify Plus B2B</a> and <a href="/uk/woocommerce" style={srcLink}>WooCommerce</a> pages for those builds.
            </p>
          </div>
        </section>

        {/* ═══ 10. PROOF ═══ */}
        <section className="sec-lg dot-grid" id="uk-trade-work">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">UK trade work</span>
              <h2>UK trade projects behind our BigCommerce B2B approach</h2>
              <p className="lead mt-4">
                FactoryJet has worked with more than 500 businesses since 2014, and builds B2B ecommerce on
                BigCommerce, Shopify Plus, Adobe Commerce and WooCommerce. Two UK trade projects show the work
                behind a portal. Neither is a BigCommerce build. Both deal with the problems a BigCommerce B2B
                portal has to handle.
              </p>
            </div>
            <div className="col-6040 mt-12">
              <ul className="stack">
                <li className="svc-card">
                  <h3>GPSUK, built on Commerceflo</h3>
                  <p className="mt-4">A UK supplier of branded promotional products, selling to business customers. Repeat orders used to be rebuilt by email against prices that lived in an inbox. Each business buyer now signs in to prices set for their account, and a quote turns into an order with nothing typed twice. <a href="/case-studies/gpsuk-promotional-products">Read the GPSUK case study</a>.</p>
                </li>
                <li className="svc-card">
                  <h3>Sow Easy, WooCommerce and Odoo</h3>
                  <p className="mt-4">A UK distributor selling to trade buyers, with stock, pricing and product data in Odoo. The trade store reads all three from Odoo so the website never holds a second, conflicting copy. The Odoo link is tested against Odoo’s staging system, and launch is still ahead. <a href="/case-studies/sow-easy-distributor-portal">Read the Sow Easy case study</a>.</p>
                </li>
              </ul>
              <div className="svc-card">
                <h3>What carries over</h3>
                <p className="mt-4">Account pricing read from the system that owns it, quote to order without retyping, and one master for stock. On BigCommerce, those map to price lists, sales-agent quotes and the ERP link described above.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 11. RELATED UK PAGES ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">Related</span>
              <h2>UK services that sit next to a BigCommerce B2B build</h2>
              <div className="stack mt-6">
                <p>
                  Not settled on BigCommerce yet? Our <a href="/uk/b2b-ecommerce">UK B2B ecommerce</a> page compares
                  trade platforms side by side, and our <a href="/uk/ecommerce-consultant">UK ecommerce consultant</a>{' '}
                  service gives you a ranked plan before any build. If your trade arm sits beside a large retail
                  store, see <a href="/uk/shopify-plus">Shopify Plus in the UK</a>. Moving off Magento? See our{' '}
                  <a href="/uk/magento">UK Magento</a> team. Comparing agencies? Read our guide to the{' '}
                  <a href="/blog/best-bigcommerce-agencies-2026">best BigCommerce agencies in 2026</a>. Buying for a US business? See our{' '}
                  <a href="/services/bigcommerce-b2b">BigCommerce B2B Edition</a> page.
                </p>
              </div>
              <div className="flex-wrap mt-6">
                <a className="city-pill" href="/uk/b2b-ecommerce">B2B ecommerce UK</a>
                <a className="city-pill" href="/uk/shopify-xero-integration">Shopify Xero integration UK</a>
                <a className="city-pill" href="/uk/ecommerce-development">Ecommerce development UK</a>
                <a className="city-pill" href="/uk/ecommerce-consultant">Ecommerce consultant UK</a>
                <a className="city-pill" href="/uk/magento">Magento UK</a>
                <a className="city-pill" href="/contact">Contact us</a>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 12. FAQ (canonical Linear Minimal) ═══ */}
        <section className="sec-lg" id="faq">
          <div className="wrap">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2>BigCommerce B2B questions UK distributors ask</h2>
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
                  <p>Replies within 24 hours.</p>
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
            <p style={srcNote}>
              Platform prices from the <a href={SRC_BC_PRICING} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>BigCommerce UK pricing page</a>, read 29 October 2026, in US dollars excluding VAT as that page states. Build cost market range (not our price) from <a href={SRC_BC_COST} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>BigCommerce, Ecommerce website cost</a>, checked 30 September 2026. Company name and ticker from the <a href={SRC_SEC_RENAME} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>Commerce.com, Inc. Form 8-K, 31 July 2025</a>.
            </p>
          </div>
        </section>

        {/* ═══ 13. FINAL CTA (the only dark section) ═══ */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Ready when you are</span>
            <h2>See your trade portal on BigCommerce before you sign</h2>
            <p className="mt-4">
              Send your name and work email, and your brief if you have one. The founder replies within 24 hours to
              book a short call about your trade accounts, your ERP and the date you are working towards.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="See a draft of my trade portal" region="uk" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/uk/b2b-ecommerce" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>See B2B ecommerce UK</a>
            </div>
          </div>
        </section>

      </main>
        <Footer />
      </div>
    </>
  );
}

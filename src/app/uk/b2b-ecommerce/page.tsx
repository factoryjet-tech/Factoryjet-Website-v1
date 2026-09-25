import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import '../ai-agents/ai-agents.css';

const CANONICAL = 'https://factoryjet.com/uk/b2b-ecommerce';
const UPDATED = '2026-09-24';
const TITLE = 'B2B Ecommerce Agency UK | Trade Portals & ERP | FactoryJet';
const H1 = 'B2B Ecommerce Agency UK: Trade Portals Built Around Your Prices, Credit Terms and ERP';
const DESCRIPTION =
  'UK B2B ecommerce agency for manufacturers and wholesalers. Trade portals with account pricing, quick order, credit terms and ERP sync. Founder-led, you own it.';

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
  { name: 'B2B Ecommerce', url: CANONICAL },
];

/* ─── External sources, each fetch-verified 2026-09-24 (HTTP 200, claim
       confirmed in the fetched body) ──────────────────────────────────── */
// ONS Digital Economy Survey 2021 (released 20 April 2023): UK website sales
// up 28.8% on 2019; businesses with 1,000+ employees = 59.4% of website sales;
// 96.9% of website sales to customers outside the UK made via businesses' own
// websites or apps; headline figures exclude EDI. fetch-verified 2026-09-24
const SRC_ONS =
  'https://www.ons.gov.uk/businessindustryandtrade/itandinternetindustry/bulletins/digitaleconomysurvey/2021';
// HMRC VAT Notice 700, section 16: "You must issue a VAT invoice to a
// registered person unless..."; "normally issue a VAT invoice within 30 days
// of the tax point"; no VAT invoice needed for customers who are not VAT
// registered; reverse charge on B2B services received from outside the UK
// (section 4 area). fetch-verified 2026-09-24
const SRC_VAT_700 = 'https://www.gov.uk/guidance/vat-guide-notice-700';
// HMRC VAT Notice 700/22: "All VAT registered businesses must keep and
// preserve certain records ... Under Making Tax Digital, some of these records
// ... must be kept digitally, within functional compatible software", with
// digital links between programs. fetch-verified 2026-09-24
const SRC_MTD =
  'https://www.gov.uk/government/publications/vat-notice-70022-making-tax-digital-for-vat/vat-notice-70022-making-tax-digital-for-vat';
// HMRC: domestic reverse charge for building and construction services,
// introduced 1 March 2021. fetch-verified 2026-09-24 (HTTP 200)
const SRC_DRC_CONSTRUCTION =
  'https://www.gov.uk/guidance/vat-domestic-reverse-charge-for-building-and-construction-services';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',    label: 'B2B ecommerce basics' },
  { key: 'platforms', label: 'Platforms & features' },
  { key: 'erp',       label: 'ERP, VAT & payments' },
  { key: 'working',   label: 'Cost & working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── B2B ecommerce basics ──
  { category: 'basics', question: 'What is B2B ecommerce?',
    answer: 'B2B ecommerce means one business selling to another business online. Instead of a trade customer phoning, emailing or sending a PDF order, they log in to your website, see their own prices and stock, and place the order themselves. The order then flows into your accounts or ERP system. It is the same idea as online shopping, with the rules trade buying needs added on top.' },
  { category: 'basics', question: 'Can ecommerce be B2B?',
    answer: 'Yes. Ecommerce is not only for shoppers buying for themselves. UK manufacturers, wholesalers and distributors use B2B ecommerce so trade customers can order online at any hour. The ONS counts sales through websites and through EDI, a direct computer-to-computer ordering link, as e-commerce. Most B2B websites we build sit behind a login so only approved trade accounts can see prices and order.' },
  { category: 'basics', question: 'What is the difference between B2B and B2C ecommerce?',
    answer: 'B2C (business to consumer) sells to the public, usually at one price, paid by card at checkout. B2B (business to business) sells to trade accounts. Each account can have its own prices, its own product range, credit terms, several buyers with different permissions, and large repeat orders. DTC (direct to consumer) is a brand selling straight to the public. Many businesses run B2B and DTC from one catalogue.' },
  { category: 'basics', question: 'What is a B2B portal or trade portal?',
    answer: 'A B2B portal, often called a trade portal, is the logged-in part of your website that only approved business customers can use. Inside it, a buyer sees their own prices, their order history, open invoices and account balance, and can reorder, request a quote or download documents. Buyers stop phoning and emailing for routine orders, so your sales team can spend its time on the conversations that need a person.' },
  { category: 'basics', question: 'What is a B2B ordering platform?',
    answer: 'A B2B ordering platform is the software trade customers use to place orders online. It can be a full B2B ecommerce website with a public catalogue and a trade login, or a simpler private ordering portal for existing accounts only. The core jobs are the same: show the right prices, check stock, take large orders quickly, allow pay on account, and pass each order to your ERP.' },
  { category: 'basics', question: 'What are some examples of B2B ecommerce?',
    answer: 'A food wholesaler letting cafés and shops reorder weekly online. A manufacturer of building products giving merchants a trade login with their agreed prices. A distributor of engineering parts offering search by part number and bulk order upload. A homeware brand running a public DTC shop and a trade portal for retailers from the same stock. We have built this kind of B2B setup for Bombay Petals.' },
  { category: 'basics', question: 'Is B2B ecommerce still worth investing in?',
    answer: 'For most UK trade businesses, yes. ONS figures show website sales by UK businesses grew 28.8% between 2019 and 2021, and your buyers now expect to check stock, prices and invoices themselves. The case is strongest when your team spends hours keying in orders from emails and PDFs. A trade portal takes that work away and makes ordering from you easier than from a competitor.' },

  // ── Platforms & features ──
  { category: 'platforms', question: 'What is the best B2B ecommerce platform in the UK?',
    answer: 'There is no single best one. Shopify Plus B2B suits most wholesalers who want a fast, hosted platform and often run DTC too. Adobe Commerce B2B suits very large catalogues and complex quoting and approval rules. BigCommerce B2B Edition sits well in the mid-market. WooCommerce B2B suits smaller catalogues and WordPress teams. The right answer depends on your catalogue, pricing rules and ERP.' },
  { category: 'platforms', question: 'Is Shopify suitable for B2B?',
    answer: 'Yes, on Shopify Plus. Shopify Plus B2B includes company accounts with several buyers and locations, customer-specific catalogues and price lists, volume pricing, quantity rules and payment terms. It suits most wholesalers and brands selling to retailers, especially if you also sell to the public. It is less suited to very complex quote and approval chains, which usually point to Adobe Commerce.' },
  { category: 'platforms', question: 'Is Magento good for B2B ecommerce?',
    answer: 'Yes, and it is the deepest option for complex trade selling. The B2B features, such as company accounts, shared catalogues, negotiable quotes, requisition lists and purchase approvals, come with Adobe Commerce, the paid version of Magento. Magento Open Source can do B2B too, but through extensions and custom work. It needs more hosting and developer care than a hosted platform like Shopify Plus.' },
  { category: 'platforms', question: 'Which ecommerce platform is best for wholesale?',
    answer: 'For most UK wholesalers, Shopify Plus B2B or BigCommerce B2B Edition, because they are hosted, quick to run and handle trade pricing, minimum order quantities and payment terms. If you have a very large catalogue, many buyer roles per account, or long quote negotiations, Adobe Commerce is usually the better fit. Small wholesalers already on WordPress can start well with WooCommerce B2B.' },
  { category: 'platforms', question: 'What features does a B2B ecommerce website need?',
    answer: 'At minimum: trade account login and approval, customer-specific prices, quick order by SKU, bulk order upload, one-click reorder, quotes for large or custom orders, pay on account with credit limits, VAT-correct invoices, live stock, and ERP integration. Larger businesses also need several buyers per account with spending limits, approval steps, and a sales rep view. We list twelve in detail on this page.' },
  { category: 'platforms', question: 'Can we run B2B and DTC from one website?',
    answer: 'Yes. We often build one catalogue and one stock pool with two faces: a public shop that shows retail prices, and a trade login that shows each account its own prices, terms and range. That keeps product data, images and stock in one place instead of two. Shopify Plus, Adobe Commerce and BigCommerce all support this, in slightly different ways.' },
  { category: 'platforms', question: 'Should our B2B store be headless?',
    answer: 'Usually not at first. Headless means the website front end is built separately from the commerce platform behind it. It gives full design freedom and speed, but it adds build and maintenance work. It makes sense when you have several brands or sites, a complex product configurator, or specific performance needs. Most UK trade businesses get more value from a well-built standard theme.' },

  // ── ERP, VAT & payments ──
  { category: 'erp', question: 'Which ERP systems can you integrate with?',
    answer: 'We integrate B2B ecommerce with the ERP and accounts systems UK trade businesses actually run, including Sage, Microsoft Dynamics 365 Business Central, NetSuite, SAP Business One and Xero. Where an established connector exists, we use it and configure it properly. Where it does not, or your data is unusual, we build the integration. Either way you own the setup and the documentation.' },
  { category: 'erp', question: 'What data syncs between the website and the ERP?',
    answer: 'Usually products and stock levels, customer accounts and their price lists, credit limits and payment terms, orders, invoices and dispatch status. The rule we follow is that each piece of data has one owner. Your ERP normally owns prices, stock and credit. The website owns the buying experience. That stops two systems fighting over which price or stock number is right.' },
  { category: 'erp', question: 'Can trade customers pay on account instead of by card?',
    answer: 'Yes. Approved accounts can check out on account, for example on 30-day terms, while new or cash customers pay by card. The website reads each account’s credit limit and balance from your ERP. If an order would take them over the limit or they are overdue, it can be held for your credit team to approve rather than blocked outright.' },
  { category: 'erp', question: 'How do VAT invoices work for B2B ecommerce orders?',
    answer: 'HMRC says a VAT-registered business must issue a VAT invoice to a VAT-registered customer, with limited exceptions, and normally within 30 days of the tax point. Trade buyers need that invoice to reclaim the VAT. We set the website so VAT numbers are captured on the account, prices show ex-VAT for trade, and invoices come from your ERP or accounts system with the right details.' },
  { category: 'erp', question: 'Does the reverse charge affect our B2B website?',
    answer: 'It can, for some sectors. The reverse charge means the customer, not the seller, accounts for the VAT. It applies to certain building and construction services, some specified goods, and to services received from outside the UK. If any of your trade sales fall under it, invoices and checkout must show it correctly. Your accountant confirms which rules apply, and we build the website to match.' },
  { category: 'erp', question: 'Does Making Tax Digital affect our ecommerce setup?',
    answer: 'Yes, indirectly. Under Making Tax Digital for VAT, VAT-registered businesses must keep certain VAT records digitally in compatible software, with digital links between programs. That means orders and invoices from your website should flow into your accounts or ERP automatically, not be retyped from a spreadsheet. A properly integrated B2B ecommerce build makes that easier, not harder.' },

  // ── Cost & working with us ──
  { category: 'working', question: 'How much does a B2B ecommerce website cost?',
    answer: 'It depends on scope, not a price list. The main cost drivers are the platform, the number of products and price lists, how many ERP and warehouse systems we connect, how complex your quoting and approval rules are, how much data needs cleaning and migrating, and whether you also run DTC. We scope after a free first call and give you a fixed quote per stage.' },
  { category: 'working', question: 'How long does a B2B ecommerce build take?',
    answer: 'A focused trade portal on a hosted platform with a standard ERP connector can go live in weeks. A larger build with several price structures, a custom ERP integration, quotes and approvals, and a migration from an old site takes a few months. We agree a stage-by-stage timeline in the discovery stage, before you commit to the full build.' },
  { category: 'working', question: 'What is a B2B ecommerce agency?',
    answer: 'A B2B ecommerce agency designs, builds and supports online ordering for businesses that sell to other businesses. The difference from a normal ecommerce agency is the back office work: trade pricing, credit terms, ERP integration, quotes and approvals. A good one spends as much time on your order process and data as on how the website looks, and stays on after launch.' },
  { category: 'working', question: 'Who are the top B2B ecommerce agencies in the UK?',
    answer: 'Names that come up often include 9xb in Leeds, magic42 in Birmingham, Rixxo in Bristol, PushON in Manchester, and Williams Commerce, with offices in Leicester, London and Edinburgh. Each has a different platform focus. We list them, including FactoryJet, further down this page with a neutral note on each, based on their own websites. Talk to two or three before you choose.' },
  { category: 'working', question: 'How do we move customers from phone and email ordering to online?',
    answer: 'In stages, not overnight. We start with your most regular reorderers, load their past orders so reordering is one click, and give your sales team a way to place orders for customers inside the portal. Phone and email stay open. Most customers move once they see their own prices and history online. We help you plan the invites and the first few weeks.' },
  { category: 'working', question: 'Do we own the website and integrations you build?',
    answer: 'Yes. The theme, custom code, integrations and documentation are yours, and the platform account is in your name. We are not a platform you rent. If you move the work in-house or to another agency, it keeps running. We would rather keep you because the support is good than because you are locked in. That is the opposite of agencies that disappear after launch.' },
  { category: 'working', question: 'Do you work with businesses across the UK?',
    answer: 'Yes. We work with manufacturers, wholesalers and distributors across England, Scotland, Wales and Northern Ireland. Projects run remotely with video workshops, shared plans and a staging site you can test. Where it helps, we spend time understanding how your warehouse and sales office really handle an order, because that shapes the build more than any design choice.' },
];

/* ─── Named UK B2B ecommerce agencies (open self-disclosure, ItemList). Each
       note is based on the company’s own homepage, fetched 2026-09-24. ────── */
const B2B_AGENCIES: { name: string; note: string }[] = [
  { name: 'FactoryJet', note: 'That is us. We design, build, integrate and support B2B ecommerce on Shopify Plus, Adobe Commerce, BigCommerce and WooCommerce, with ERP integration done in-house. Founder involved on every project, and you own what we build.' },
  { name: '9xb', note: 'A Leeds-based agency that describes itself as a B2B eCommerce agency, covering discovery, UX and UI design, development and ongoing optimisation of B2B stores.' },
  { name: 'magic42', note: 'A Birmingham-based ecommerce development agency born from a retailer, working on Magento, Adobe Commerce, Shopify and Shopify Plus, with dedicated B2B and integrations services.' },
  { name: 'Rixxo', note: 'A Bristol-based B2B eCommerce agency, trading since 2012, that works with manufacturers, wholesalers and distributors on platform selection, integrations and marketing.' },
  { name: 'PushON', note: 'A Manchester-based Adobe Solution Partner that designs, builds and supports Adobe Commerce and Magento for retailers and B2B businesses, including ERP and PIM integration.' },
  { name: 'Williams Commerce', note: 'A full-service ecommerce agency with UK offices in Leicester, London and Edinburgh, working across Shopify, Adobe Commerce and BigCommerce, with B2B ecommerce as one of its use cases.' },
  { name: 'Appeal Digital', note: 'A B2B web agency for technical businesses in science, engineering and tech, focused on WordPress, with a B2B ecommerce service alongside its website work.' },
  { name: 'Charle', note: 'A London Shopify agency and Shopify Partner covering custom store builds, migrations, integrations and ecommerce SEO, which appears in UK search results for Shopify B2B.' },
  { name: 'Holbi', note: 'A Swindon-based ecommerce agency that says it has 25 years of experience, offering ecommerce development and consulting, with B2B solutions among its services.' },
];

/* ─── Twelve trade-buyer features (listicle) ─────────────────────────── */
const FEATURES: { t: string; d: string }[] = [
  { t: 'A trade login with account approval', d: 'New trade customers apply online. Your team approves them, sets their price list and terms, and only then can they see trade prices. The public never sees your trade pricing.' },
  { t: 'Their own prices, every time', d: 'Each account sees its agreed prices, whether that is a price band, a contract price on certain lines, or volume breaks. The price comes from your ERP, so the website and the invoice always match.' },
  { t: 'Quick order by SKU or part number', d: 'Regular buyers know your codes. A quick order pad lets them type or paste product codes and quantities and add twenty lines to the basket in seconds, without browsing.' },
  { t: 'Bulk order upload', d: 'Buyers upload a CSV file, a simple spreadsheet format, straight from their own purchasing system. The site checks every line against stock and their prices before it goes through.' },
  { t: 'One-click reorder and saved lists', d: 'Most trade orders repeat. Buyers can reorder a past order in one click, or keep saved lists for each site, van or project and order from them whenever they need to.' },
  { t: 'Quotes (RFQ) for big or custom orders', d: 'An RFQ, or request for quote, lets a buyer ask for a price on a large or unusual order. Your team replies with a quote inside the portal, and the buyer turns it into an order with one click.' },
  { t: 'Pay on account with credit limits', d: 'Approved accounts check out on their agreed terms instead of by card. Credit limits and balances come from your ERP, and orders over the limit are held for your credit team.' },
  { t: 'Customer-specific catalogues', d: 'Some accounts should only see some products: a retailer’s agreed range, or lines you sell only to certain regions. Each account sees the catalogue that is right for them.' },
  { t: 'VAT-correct trade invoicing', d: 'Trade prices shown ex-VAT, VAT numbers stored on the account, and VAT invoices your customers can use to reclaim VAT. Invoices and statements can be downloaded from the portal.' },
  { t: 'Live stock and delivery dates', d: 'Stock levels synced from your warehouse or ERP, with honest lead times on items that are out of stock. Trade buyers plan their jobs around this, so accuracy matters more than looks.' },
  { t: 'Several buyers per account, with roles', d: 'One customer might have a buyer at each branch and a manager who approves orders above a set amount. Each person has their own login, permissions and spending limit.' },
  { t: 'A sales rep view', d: 'Your sales team can log in as a customer, see their prices and history, and place or adjust orders for them. Reps sell with the portal instead of competing with it.' },
];

/* ─── How a build runs (steps; visible list only) ─────────────────────── */
const STEPS: { n: string; t: string; d: string }[] = [
  { n: '01', t: 'Discovery', d: 'We sit with your sales office and warehouse and trace how a trade order really moves today: phone, email, PDF, spreadsheet, ERP, pick, pack, invoice. We list every price rule, account type and exception.' },
  { n: '02', t: 'Platform choice', d: 'We recommend Shopify Plus B2B, Adobe Commerce B2B, BigCommerce B2B Edition, WooCommerce B2B or headless, based on your catalogue, pricing rules, ERP and team. No resale deals push the answer.' },
  { n: '03', t: 'Data and ERP mapping', d: 'We decide which system owns each piece of data (prices, stock, credit, customers, orders) and map every field between your ERP and the website before we build anything.' },
  { n: '04', t: 'Design and build', d: 'We design the trade buying journey first: login, quick order, reorder, quotes, checkout on account. Then the public catalogue, if you need one. You test on a staging site throughout.' },
  { n: '05', t: 'Integration and testing', d: 'We connect the ERP, stock and warehouse systems, then test real orders end to end with real accounts, from a rep quote to a VAT invoice in your accounts system.' },
  { n: '06', t: 'Launch, onboarding and support', d: 'We launch in waves, starting with your most regular buyers, train your team, and stay on for support and improvements. You own the site, the code and the integrations.' },
];

/* ─── JSON-LD ────────────────────────────────────────────────────────
   Organization is referenced by @id only. Its definition lives sitewide. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'B2B Ecommerce Agency UK',
      serviceType: 'B2B ecommerce design, development, ERP integration and support',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      audience: { '@type': 'BusinessAudience', name: 'UK manufacturers, wholesalers and distributors' },
      url: CANONICAL,
      description:
        'B2B ecommerce for UK manufacturers, wholesalers and distributors: trade portals with customer-specific prices, quick order, bulk order and reorder, quotes, pay on account with credit limits, VAT-correct invoicing, and ERP integration with Sage, Microsoft Dynamics, NetSuite, SAP Business One and Xero, on Shopify Plus B2B, Adobe Commerce B2B, BigCommerce B2B Edition, WooCommerce B2B or headless.',
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
      datePublished: '2026-09-24',
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
    },
    {
      '@type': 'ItemList',
      '@id': `${CANONICAL}#agencies`,
      name: 'UK B2B ecommerce agencies',
      itemListElement: B2B_AGENCIES.map((a, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: a.name,
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
      'B2B ecommerce for UK manufacturers, wholesalers and distributors: trade portals, customer-specific prices, quotes, pay on account, VAT-correct invoices and ERP integration on Shopify Plus, Adobe Commerce and BigCommerce.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/uk/b2b-ecommerce/b2b-ecommerce-og.webp', width: 1200, height: 630, alt: 'B2B ecommerce agency UK: a wholesale operations manager working on a trade ordering portal in a warehouse office' }],
  },
  robots: { index: true, follow: true },
};

const srcNote = { fontFamily: T.fm, fontSize: 11, color: T.n400, marginTop: 12 } as const;
const srcLink = { textDecoration: 'underline' } as const;

export default function B2bEcommerceUKPage() {
  return (
    <>
      <script id="ld-uk-b2b-ecommerce" type="application/ld+json"
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
                  <span className="chip"><span className="dot dot-orange" />UK B2B Ecommerce Agency</span>
                  <span className="chip">Trade Portals</span>
                  <span className="chip">ERP Integration</span>
                </div>
                <h1>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  FactoryJet is a B2B ecommerce agency for UK manufacturers, wholesalers and distributors. We design,
                  build, integrate and support trade portals where approved customers log in, see their own prices,
                  reorder in seconds, request quotes and pay on account, with every order flowing straight into your
                  ERP. Then we stay on after launch.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
                  <div className="upd">Last updated<br />24 September 2026</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="uk" source="uk_b2b_ecommerce_hero" submitLabel="Talk to the founder about B2B" />
                </div>
              </div>

              <div className="card" style={{ padding: 8 }}>
                <img src="/images/uk/b2b-ecommerce/b2b-ecommerce-hero.webp" width={1400} height={933} fetchPriority="high" decoding="async" alt="An operations manager at a UK wholesale warehouse working on a trade ordering portal on a laptop, with pallet racking of boxed stock behind the glass" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">What your trade buyers get</span>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Their own prices and range</div><div className="scorecard-note">straight from your ERP</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Per account</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Quick order, bulk upload, reorder</div><div className="scorecard-note">built for repeat trade orders</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Seconds</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Pay on account, VAT-correct invoices</div><div className="scorecard-note">credit limits respected</div></div>
                    <div className="scorecard-val" style={{ color: T.green, fontSize: 15 }}>Included</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 2. ANSWER-FIRST DEFINITION (GEO) ═══ */}
        <section className="sec">
          <div className="wrap">
            <div className="def" style={{ maxWidth: 940 }} data-speakable="true">
              <span className="lab">What does a B2B ecommerce agency do for a UK business?</span>
              <p>
                A B2B ecommerce agency builds the website your trade customers order from. It sets up logins for
                approved accounts, shows each one its own prices and terms, adds quick order, reorder and quotes,
                and connects everything to your ERP and stock. A good agency also moves your customers off phone and
                email ordering and supports the system after launch.
              </p>
            </div>
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">Two terms we use a lot</span>
              <p>
                A <b>trade portal</b> (or B2B portal) is the logged-in part of your website that only approved
                business customers can use. An <b>ERP</b>, or enterprise resource planning system, is the software
                that runs your stock, prices, customers and invoices, such as Sage, Microsoft Dynamics, NetSuite or
                SAP Business One.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              Here is why this matters. The Office for National Statistics found that website sales by UK
              businesses grew 28.8% between 2019 and 2021, and that figure leaves out EDI orders, the direct
              computer-to-computer links many large trade accounts use. Your buyers already order online from
              someone. The question is whether it is you.
            </p>
          </div>
        </section>

        {/* ═══ 3. FACTS BAND (verified only) ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              {[
                { v: '28.8%', t: 'growth in UK business website sales between 2019 and 2021', s: 'ONS, Digital Economy Survey', u: SRC_ONS },
                { v: '59.4%', t: 'of UK website sales made by businesses with 1,000 or more staff', s: 'ONS, Digital Economy Survey', u: SRC_ONS },
                { v: '30 days', t: 'the normal time limit to issue a VAT invoice to a VAT-registered customer', s: 'HMRC, VAT Notice 700', u: SRC_VAT_700 },
                { v: 'MTD', t: 'VAT records kept digitally in compatible software, with digital links', s: 'HMRC, VAT Notice 700/22', u: SRC_MTD },
              ].map((r) => (
                <li key={r.t}>
                  <div style={{ fontFamily: T.fd, fontWeight: 800, fontSize: 26, color: T.orange }}>{r.v}</div>
                  <p style={{ fontSize: 13.5, color: T.ink, marginTop: 4 }}>{r.t}</p>
                  <a href={r.u} target="_blank" rel="noopener noreferrer nofollow" style={{ fontFamily: T.fm, fontSize: 10, color: T.n400, textDecoration: 'underline' }}>{r.s}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ 4. B2B VS DTC ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">B2B ecommerce, in plain words</span>
                <h2>What B2B ecommerce is, and why it is not just a shop with a login</h2>
                <div className="stack mt-6">
                  <p>
                    B2B ecommerce, or ecommerce for B2B, is selling to other businesses online. Your customers are
                    builders’ merchants, shops, cafés, installers, hospitals, schools or other manufacturers. They buy
                    often, in bulk, on agreed prices, and usually on credit.
                  </p>
                  <p>
                    A DTC (direct to consumer) shop is simpler: one price for everyone, pay by card, one person
                    buying for themselves. A B2B ecommerce website has to carry the rules your sales office keeps in
                    its head today. This customer gets band C pricing. That one has a contract price on six lines.
                    This branch can order but needs head office approval over a set amount. That account is on hold.
                  </p>
                  <p>
                    That is why off-the-shelf B2C themes with a wholesale plugin bolted on often fail. The hard part
                    of B2B ecommerce is not the storefront. It is getting prices, stock, credit and invoices right,
                    every time, from your ERP.
                  </p>
                </div>
              </div>
              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <table className="cmp-table">
                  <thead>
                    <tr>
                      <th>Area</th>
                      <th className="fj">B2B (trade)</th>
                      <th>DTC (public)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="feat">Who buys</td><td className="fj">Businesses, often several buyers per account</td><td>One person</td></tr>
                    <tr><td className="feat">Price</td><td className="fj">Per account, bands, contracts, volume</td><td>One price for all</td></tr>
                    <tr><td className="feat">Payment</td><td className="fj">On account, card, or bank transfer</td><td>Card or wallet</td></tr>
                    <tr><td className="feat">Order size</td><td className="fj">Large, repeat, many lines</td><td>Small, one-off</td></tr>
                    <tr><td className="feat">Ordering</td><td className="fj">Quick order, upload, reorder, quotes</td><td>Browse and add to basket</td></tr>
                    <tr><td className="feat">VAT</td><td className="fj">Ex-VAT prices, VAT invoice needed</td><td>VAT-inclusive prices</td></tr>
                    <tr><td className="feat">Back office</td><td className="fj">ERP owns prices, stock and credit</td><td>Platform often enough</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 5. LISTICLE: 12 FEATURES ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">B2B ecommerce features</span>
              <h2>12 features UK trade buyers expect from a B2B ecommerce website</h2>
              <p className="lead mt-4">
                Trade buyers are busy people ordering between jobs, often on a phone in a van or a stockroom. These
                are the features that decide whether they use your B2B portal or pick up the phone again.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {FEATURES.map((f, i) => (
                <li key={f.t} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.orange, minWidth: 34 }}>{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{f.t}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{f.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ═══ 6. PLATFORM COMPARISON TABLE ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">B2B ecommerce platforms compared</span>
              <h2>Shopify Plus B2B vs Adobe Commerce B2B vs BigCommerce B2B vs WooCommerce B2B</h2>
              <p className="lead mt-4">
                Every one of these B2B ecommerce platforms can run a trade portal. They differ in how much they do
                out of the box, how big a catalogue they are happy with, and how much hosting and developer effort
                they need. We build on all four, so we have no reason to push one. For platform detail, see our{' '}
                <a href="/uk/shopify-plus" style={{ textDecoration: 'underline' }}>Shopify Plus agency</a>,{' '}
                <a href="/uk/magento" style={{ textDecoration: 'underline' }}>Magento</a> and{' '}
                <a href="/uk/woocommerce" style={{ textDecoration: 'underline' }}>WooCommerce developers</a> pages.
              </p>
            </div>
            <div className="card mt-8" style={{ padding: 0, overflow: 'hidden' }}>
              <table className="cmp-table">
                <thead>
                  <tr>
                    <th>Compared on</th>
                    <th>Shopify Plus B2B</th>
                    <th>Adobe Commerce B2B</th>
                    <th>BigCommerce B2B Edition</th>
                    <th>WooCommerce B2B</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Best fit</td><td><span className="yes">Wholesalers and brands selling B2B and DTC</span></td><td><span className="yes">Complex trade, many buyer roles</span></td><td><span className="yes">Mid-market wholesalers and distributors</span></td><td><span className="partial">Smaller catalogues, WordPress teams</span></td></tr>
                  <tr><td className="feat">Catalogue size</td><td><span className="yes">Small to large</span></td><td><span className="yes">Very large, deep attributes</span></td><td><span className="yes">Medium to large</span></td><td><span className="partial">Small to medium, hosting-dependent</span></td></tr>
                  <tr><td className="feat">Price lists and customer pricing</td><td><span className="yes">Native catalogues, volume pricing</span></td><td><span className="yes">Native shared catalogues, tier pricing</span></td><td><span className="yes">Native price lists</span></td><td><span className="partial">Through B2B plugins</span></td></tr>
                  <tr><td className="feat">Quotes and approvals</td><td><span className="partial">Draft orders, apps for richer RFQ</span></td><td><span className="yes">Negotiable quotes, purchase approvals</span></td><td><span className="yes">Quotes and buyer portal</span></td><td><span className="partial">Plugins or custom work</span></td></tr>
                  <tr><td className="feat">Pay on account</td><td><span className="yes">Payment terms per company</span></td><td><span className="yes">Payment on account, credit limits</span></td><td><span className="yes">Invoice portal and terms</span></td><td><span className="partial">Plugins or custom work</span></td></tr>
                  <tr><td className="feat">ERP fit (Sage, Dynamics, NetSuite, SAP B1, Xero)</td><td><span className="yes">Good connector choice, custom where needed</span></td><td><span className="yes">Very flexible, suits custom integration</span></td><td><span className="yes">Good connector choice</span></td><td><span className="partial">Connectors vary in quality</span></td></tr>
                  <tr><td className="feat">Hosting and effort</td><td><span className="yes">Hosted, lowest upkeep</span></td><td><span className="partial">Cloud or self-managed, most developer care</span></td><td><span className="yes">Hosted, low upkeep</span></td><td><span className="partial">Self-hosted, you own updates and security</span></td></tr>
                  <tr><td className="feat">B2B and DTC on one catalogue</td><td><span className="yes">Yes, one store</span></td><td><span className="yes">Yes, several websites and stores</span></td><td><span className="yes">Yes</span></td><td><span className="yes">Yes, with role-based pricing</span></td></tr>
                </tbody>
              </table>
            </div>
            <ul className="col-3 mt-10">
              <li className="svc-card"><h3>Leaning to Shopify Plus?</h3><p className="mt-4">Shopify Plus B2B is our most common recommendation for UK wholesalers who also sell DTC. See our <a href="/uk/shopify-development">Shopify development in the UK</a>.</p></li>
              <li className="svc-card"><h3>Leaning to Magento?</h3><p className="mt-4">The native B2B module comes with Adobe Commerce, not Magento Open Source. For complex trade rules, see our <a href="/uk/magento">Magento and Adobe Commerce agency in the UK</a>.</p></li>
              <li className="svc-card"><h3>Thinking headless?</h3><p className="mt-4">Headless means a custom front end on top of any of these platforms. It suits multi-brand or configurator-heavy businesses. For everyone else, it is extra cost you can skip.</p></li>
            </ul>
          </div>
        </section>

        <MidPageCTA
          headline={'Not sure which B2B platform fits your business?'}
          sub={'Tell us your catalogue size, how your customers order today and which ERP you run. On a short call with the founder, we will tell you which platform we would pick, why, and what the build would involve.'}
          label={'Talk to the founder about B2B'}
        />

        {/* ═══ 7. HOW A BUILD RUNS ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">B2B ecommerce website development</span>
              <h2>How a B2B ecommerce build runs, step by step</h2>
            </div>
            <ol className="col-3 mt-12">
              {STEPS.map((s) => (
                <li key={s.n} className="card"><span className="stage-num">{s.n}</span><h3>{s.t}</h3><p className="mt-4">{s.d}</p></li>
              ))}
            </ol>
            <p className="lead mt-10" style={{ maxWidth: 820 }}>
              Most of the risk in B2B ecommerce development sits in steps one and three. A beautiful trade portal
              that shows a wrong price once loses a buyer’s trust for months. So we spend the time on your data
              and rules first, and the design second.
            </p>
          </div>
        </section>

        {/* ═══ 8. ERP INTEGRATION ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">B2B ecommerce ERP integration</span>
                <h2>ERP integration, explained simply</h2>
                <div className="stack mt-6">
                  <p>
                    Your ERP is the system of record: it knows what each customer pays, what is in stock, how much
                    credit each account has, and what has been invoiced. Your website is the shop window and the
                    order pad. Integration is the link that keeps the two in step, automatically.
                  </p>
                  <p>
                    We follow one rule: every piece of data has one owner. Prices, stock and credit usually live in
                    the ERP and flow to the website. Orders start on the website and flow to the ERP. Invoices and
                    dispatch updates flow back so buyers can see them in the portal. When two systems both think
                    they own the price, you get wrong invoices and angry customers.
                  </p>
                  <p>
                    We work with the systems UK trade businesses actually run: Sage (including Sage 200 and Sage X3),
                    Microsoft Dynamics 365 Business Central, NetSuite, SAP Business One and Xero, plus warehouse and
                    stock systems. Where a trusted connector exists we use it and configure it properly. Where it
                    does not, our engineers build the integration and document it for you.
                  </p>
                </div>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/uk/b2b-ecommerce/b2b-ecommerce-warehouse.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Two colleagues in a UK warehouse aisle checking a trade order on a tablet, between racks of boxed stock" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">What usually syncs, and which way</span>
                  <div className="scorecard-row"><div><div className="scorecard-metric">Prices and price lists</div><div className="scorecard-note">ERP to website</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>ERP owns</div></div>
                  <div className="scorecard-row"><div><div className="scorecard-metric">Stock by warehouse</div><div className="scorecard-note">ERP or WMS to website</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>ERP owns</div></div>
                  <div className="scorecard-row"><div><div className="scorecard-metric">Credit limits and terms</div><div className="scorecard-note">ERP to website</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>ERP owns</div></div>
                  <div className="scorecard-row"><div><div className="scorecard-metric">Orders and quotes</div><div className="scorecard-note">website to ERP</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Website starts</div></div>
                  <div className="scorecard-row"><div><div className="scorecard-metric">Invoices and dispatch</div><div className="scorecard-note">ERP back to the portal</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Visible to buyers</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 9. MIGRATION FROM PHONE / EMAIL / PDF ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">Moving off phone, email and PDF orders</span>
              <h2>How we move your trade customers online without losing any of them</h2>
              <p className="lead mt-4">
                Most UK wholesalers we speak to still take a large share of orders by phone, email or PDF, keyed in
                by hand. Moving that to a B2B ordering portal works best in stages.
              </p>
            </div>
            <ul className="col-3 mt-12">
              <li className="card"><h3>Start with the regulars</h3><p className="mt-4">Your top repeat buyers get invites first, with their past orders already loaded so their usual order is one click away. Early wins build the habit.</p></li>
              <li className="card"><h3>Keep the phone open</h3><p className="mt-4">Nobody is forced online. Your sales team places phone orders through the same portal, so every order lands in one place and customers see it in their history.</p></li>
              <li className="card"><h3>Turn emailed POs into orders</h3><p className="mt-4">For customers who only send PDF purchase orders, we can add AI that reads the PO and drafts the order for your team to check. See our <a href="/uk/ai-agents">UK AI agent development</a>.</p></li>
              <li className="card"><h3>Move your old website safely</h3><p className="mt-4">If you already have a website, we migrate products, customers and order history, and set up redirects so your search rankings carry over.</p></li>
              <li className="card"><h3>Clean the data once</h3><p className="mt-4">Product codes, descriptions and price bands are often messy after years of manual ordering. We fix them as part of the move, not after launch.</p></li>
              <li className="card"><h3>Measure the shift</h3><p className="mt-4">We track what share of orders arrives online each week, by customer, so you can see who needs a nudge and who has already moved.</p></li>
            </ul>
          </div>
        </section>

        {/* ═══ 10. UK SPECIFICS: VAT, REVERSE CHARGE, MTD ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">B2B ecommerce UK specifics</span>
              <h2>VAT on trade invoices, the reverse charge and Making Tax Digital</h2>
              <div className="stack mt-6">
                <p>
                  <b>VAT invoices.</b> HMRC’s VAT guide says a VAT-registered business must issue a VAT invoice to a
                  VAT-registered customer, with limited exceptions, and should normally do it within 30 days of the
                  tax point, which is the date the sale counts for VAT. Your trade customers need that invoice to
                  reclaim the VAT they paid you. So a B2B ecommerce site must store VAT numbers on each account, show
                  trade prices ex-VAT, and hand orders to a system that produces a correct VAT invoice.
                </p>
                <p>
                  <b>The reverse charge.</b> Under the reverse charge, the customer accounts for the VAT instead of
                  the supplier. HMRC applies it to certain building and construction services (since 1 March 2021),
                  to some specified goods, and to services a UK business receives from outside the UK. If any of
                  your trade sales fall under it, your checkout and invoices must show it correctly. Your accountant
                  decides which rules apply; we build the website to match.
                </p>
                <p>
                  <b>Making Tax Digital.</b> HMRC’s Making Tax Digital rules require VAT-registered businesses to keep
                  certain VAT records digitally in compatible software, with digital links between programs rather
                  than copying and pasting. For a trade business, that is one more reason to have website orders
                  flow into your accounts or ERP automatically instead of being retyped.
                </p>
              </div>
              <p style={srcNote}>
                Sources: <a href={SRC_VAT_700} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>HMRC, VAT guide (VAT Notice 700)</a>;{' '}
                <a href={SRC_DRC_CONSTRUCTION} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>HMRC, domestic reverse charge for building and construction services</a>;{' '}
                <a href={SRC_MTD} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>HMRC, VAT Notice 700/22: Making Tax Digital for VAT</a>.
              </p>
            </div>
            <ul className="col-3 mt-10">
              <li className="card"><h3>What we do</h3><p className="mt-4">Capture VAT numbers at sign-up, show trade prices ex-VAT, apply the right VAT treatment per account, and make sure invoices come from your accounts system.</p></li>
              <li className="card"><h3>What you keep</h3><p className="mt-4">Your ERP or accounts package stays the source of truth for VAT. Nothing gets retyped, which keeps your records clean for Making Tax Digital.</p></li>
              <li className="card"><h3>What we do not do</h3><p className="mt-4">We are not accountants and do not give tax advice. We build to the VAT rules your accountant confirms and document every setting.</p></li>
            </ul>
          </div>
        </section>

        {/* ═══ 11. WHO WE WORK WITH + BOMBAY PETALS ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Who we work with</span>
                <h2>B2B ecommerce for UK manufacturers, wholesalers and distributors</h2>
                <ul className="scope-list num-list mt-6" style={{ maxWidth: 580 }}>
                  <li><b>Manufacturers.</b> Dealer and stockist portals with agreed prices, spec sheets, lead times, and orders flowing straight to production planning.</li>
                  <li><b>Wholesalers.</b> Wholesale ecommerce with price bands, minimum order quantities, case and pallet quantities, and fast weekly reordering.</li>
                  <li><b>Distributors.</b> Large catalogues searched by part number, account-specific ranges, and stock across several warehouses.</li>
                  <li><b>Brands selling to retailers and the public.</b> B2B and B2C ecommerce from one catalogue and one stock pool, with a trade login alongside the public shop.</li>
                </ul>
                <p className="mt-6" style={{ maxWidth: 580 }}>
                  FactoryJet has served 500+ businesses since 2014, with more than a decade in commerce. For the
                  wider picture of our UK builds, see <a href="/uk/ecommerce-development">ecommerce development in the UK</a>.
                </p>
              </div>
              <div className="card card-top-orange" style={{ padding: 8 }}>
                <img src="/images/portfolio/bombay-petals-480.webp" width={480} height={270} loading="lazy" decoding="async" alt="Bombay Petals B2B wholesale ecommerce store built by FactoryJet" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">Client work · B2B</span>
                  <h3 style={{ fontSize: 18, marginTop: 6 }}>Bombay Petals</h3>
                  <p className="mt-2" style={{ marginTop: 6, fontSize: 14 }}>
                    A B2B commerce build for an artificial plants and decor wholesaler, so trade buyers place and
                    repeat orders online with tiered pricing, instead of over email and phone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 12. ENGAGEMENT SHAPES (no pricing) + DEMAND ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Scope, not packages</span>
                <h2>Four ways to work with our B2B ecommerce team</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  Every B2B ecommerce project is quoted for your scope, with a fixed price per stage. These are the
                  shapes it usually takes.
                </p>
                <ul className="scope-list num-list mt-6" style={{ maxWidth: 580 }}>
                  <li><b>B2B discovery.</b> We map how orders move today, list your pricing and account rules, recommend a platform and write a plan with a fixed quote for the build. You can take it to any agency.</li>
                  <li><b>Trade portal build.</b> A new B2B ecommerce website or trade portal on the right platform, integrated with your ERP, with your first customers onboarded.</li>
                  <li><b>Replatform and migrate.</b> Moving an ageing B2B site, or a B2C site with a wholesale add-on, to a platform that fits, with products, customers, orders and search rankings carried across.</li>
                  <li><b>Ongoing support.</b> Monthly support and improvements from the team that built it: new features, platform updates, integration monitoring and help for your sales office.</li>
                </ul>
                <div className="mt-8">
                  <ModalCTAButton label="Talk to the founder about B2B" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>

              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${T.n200}`, padding: '14px 18px' }}>
                  <span style={{ fontFamily: T.fm, fontSize: 10, letterSpacing: '.13em', textTransform: 'uppercase', color: T.n400 }}>UK · Monthly Search Demand</span>
                  <span style={{ background: T.small, color: '#fff', fontFamily: T.fm, fontSize: 10, borderRadius: 999, padding: '3px 9px' }}>DataForSEO</span>
                </div>
                <div style={{ padding: '4px 18px 14px' }}>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    {[
                      { kw: 'b2b ecommerce / ecommerce for b2b', v: '390', w: '100%', kd: 'The head term cluster' },
                      { kw: 'b2b portal', v: '260', w: '67%', kd: 'Buyers and sellers of portals' },
                      { kw: 'b2b ecommerce agency', v: '140', w: '36%', kd: 'Buyer intent' },
                      { kw: 'b2b ecommerce platform', v: '140', w: '36%', kd: 'Choosing the software' },
                      { kw: 'b2b ecommerce website', v: '110', w: '28%', kd: 'Wants a new site' },
                      { kw: 'b2b ecommerce website development', v: '90', w: '23%', kd: 'Ready to build' },
                      { kw: 'magento b2b ecommerce', v: '50', w: '13%', kd: 'Platform already chosen' },
                    ].map((r) => (
                      <li key={r.kw} className="demand-row">
                        <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<span style={{ fontSize: 9, color: T.n400 }}> searches</span></span></div>
                        <div className="demand-bar"><i style={{ width: r.w }} /></div>
                        <div className="demand-kd">{r.kd}</div>
                      </li>
                    ))}
                  </ul>
                  <p style={{ textAlign: 'center', fontFamily: T.fm, fontSize: 10, color: T.n400, marginTop: 10 }}>Source: DataForSEO, United Kingdom, September 2026</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 13. WHY FACTORYJET ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Why FactoryJet</span>
              <h2>A B2B ecommerce agency that stays after launch</h2>
              <p className="lead mt-4">
                The most common story we hear from UK trade businesses is not a bad website. It is an agency that
                launched one, then vanished when the ERP sync broke or the first price change went wrong.
              </p>
            </div>
            <ul className="col-3 mt-12">
              <li className="svc-card"><h3>Engineers, not just designers</h3><p className="mt-4">Integration is where B2B projects succeed or fail, so our engineers do it in-house rather than handing it to a third party.</p></li>
              <li className="svc-card"><h3>Founder on every project</h3><p className="mt-4">Bhavesh Barot, our founder, is involved from the first call to launch. The people who scope your build are the people who deliver it.</p></li>
              <li className="svc-card"><h3>You own everything</h3><p className="mt-4">The platform account, theme, code, integrations and documentation are yours. No licence to us, no lock-in.</p></li>
            </ul>
            <p className="mt-8" style={{ maxWidth: 780 }}>
              Working in the US too? Our <a href="/b2b-ecommerce">B2B ecommerce development service for US brands</a> covers
              net terms, EDI and punchout for North American buyers.
            </p>
          </div>
        </section>

        {/* ═══ 14. COMPETITOR LIST (self-disclosure, ItemList) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">The honest landscape</span>
              <h2>UK B2B ecommerce agencies worth knowing</h2>
              <p className="lead mt-4">
                We are one option, not the only one. These UK agencies show up when people search for a B2B
                ecommerce agency or ask AI assistants for a recommendation. Each note is based on what the company
                says on its own website. Talk to a few and pick the fit.
              </p>
            </div>
            <ul className="stack mt-10" style={{ maxWidth: 900 }}>
              {B2B_AGENCIES.map((a, i) => (
                <li key={a.name} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.orange, minWidth: 30 }}>{i + 1}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{a.name}{a.name === 'FactoryJet' && <span style={{ fontFamily: T.fm, fontSize: 10, background: T.small, color: '#fff', borderRadius: 999, padding: '2px 8px', marginLeft: 8, verticalAlign: 'middle' }}>That is us</span>}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{a.note}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p style={srcNote}>
              Agencies named from live UK search results and AI assistant answers for B2B ecommerce agency queries, September 2026. Notes reflect each company’s own homepage on 24 September 2026. Listing is not endorsement.
            </p>
          </div>
        </section>

        {/* ═══ 15. FAQ (canonical Linear Minimal) ═══ */}
        <section className="sec-lg" id="faq">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>B2B ecommerce questions UK trade businesses actually ask</h2>
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
          </div>
        </section>

        {/* ═══ 16. FINAL CTA (the only dark section) ═══ */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Ready when you are</span>
            <h2>Get your trade customers ordering online, on your terms</h2>
            <p className="mt-4">
              Send your name and work email. The founder replies within 24 hours to book a short call about how
              your customers order today, the ERP you run, and which B2B ecommerce platform fits. No spam, no
              obligation. Prefer to write first? Use our <a href="/contact" style={{ color: '#fff', textDecoration: 'underline' }}>contact page</a>.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="Talk to the founder about B2B" region="uk" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/uk/ecommerce-development" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>See UK ecommerce development</a>
            </div>
          </div>
        </section>

      </main>
        <Footer />
      </div>
    </>
  );
}

import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import '../ai-agents/ai-agents.css';

/* /uk/ecommerce-audit, built 2026-10-29.

   Truth rules for anyone editing this file.
   1. Every law, tax rule, platform threshold and market price below was read
      on the regulator's or publisher's own page on 29 October 2026 and links to
      it through the SRC map. Re-read the page before changing a figure.
   2. No FactoryJet price. The only money figure is one sourced market range
      from a named London agency (Red Eagle Tech), labelled as theirs.
   3. Client proof is limited to GPSUK (built on Commerceflo) and Sow Easy
      (WooCommerce joined to Odoo, still in build), per the 29 Oct naming rule.
      Never present either as Shopify work, and never add a metric for them.
   4. Structure mirrors /uk/ecommerce-consultant (imports, CSS, schema, FAQ
      layout). The copy must be written fresh. A reviewer found shared
      sentences on 29 October 2026 and they were rewritten; check new copy
      against that page and /services/ecommerce-audit before adding it.
   5. FAQ wording draws on Google People Also Ask and related searches for
      "ecommerce audit", "ecommerce website audit", "shopify audit" and "how
      much does a website audit cost uk", pulled for the United Kingdom on
      2026-10-29 (DataForSEO). UK demand for the head terms is small (10 to 30
      searches a month each), so this page is written for the buyer who arrives
      from a referral, an AI answer or a sibling page, not for volume.
   6. The FAQ schema is generated from FAQ_ITEMS, the same array the visible
      FAQ renders. Never add a second list of questions. */

const CANONICAL = 'https://factoryjet.com/uk/ecommerce-audit';
const UPDATED = '2026-10-29';
const READ_ON = '29 October 2026';
const TITLE = 'Ecommerce Audit UK for Trading Stores | FactoryJet';
const H1 = 'Ecommerce Audit UK: A Ranked Fix List for Stores That Already Trade, From the Checkout to Xero';
const DESCRIPTION =
  'Ecommerce audit for established UK online stores: checkout and CMA price rules, speed, marketplaces, Xero, Sage or NetSuite links, couriers and tracking. A ranked fix list.';

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
  { name: 'Ecommerce Audit', url: CANONICAL },
];

/* Sources. One map, used by every inline source note AND by the Sources list
   near the foot of the page. Each page was opened on 2026-10-29 and the
   supporting words read before the claim was written. */
const SRC = {
  // ONS series J4MC, dataset DRSI, released 23 October 2026. CSV: 2026 SEP = 28.3.
  ons: { label: 'ONS: internet sales as a percentage of total retail sales (J4MC)', url: 'https://www.ons.gov.uk/businessindustryandtrade/retailindustry/timeseries/j4mc/drsi' },
  // "You must tell the customer they can cancel their order up to 14 days after
  // their order is delivered." If not told, 12 months. Price "with all taxes included".
  distance: { label: 'GOV.UK: online and distance selling for businesses', url: 'https://www.gov.uk/online-and-distance-selling-for-businesses' },
  // Published 18 November 2025, updated 7 January 2026. Defines drip pricing as
  // "when prices are added as consumers proceed with a transaction".
  cmaPrice: { label: 'CMA: price transparency guidance (CMA209)', url: 'https://www.gov.uk/government/publications/price-transparency-cma209' },
  // 18 November 2025: 8 businesses investigated, advisory letters to 100 firms,
  // fines "up to 10% of global turnover", "introducing unavoidable fees at checkout".
  cmaNews: { label: 'CMA: consumer protection drive on online pricing, 18 November 2025', url: 'https://www.gov.uk/government/news/cma-launches-major-consumer-protection-drive-focused-on-online-pricing-practices' },
  // Para 3.2.1: API transfer, CSV import and export, linked cells and emailed
  // spreadsheets count as digital links; "cut and paste" or "copy and paste" does not.
  mtd: { label: 'GOV.UK: VAT Notice 700/22, Making Tax Digital for VAT', url: 'https://www.gov.uk/government/publications/vat-notice-70022-making-tax-digital-for-vat/vat-notice-70022-making-tax-digital-for-vat' },
  // "allows you to set some types of cookies without having to get consent",
  // including statistical and functionality cookies.
  icoDuaa: { label: 'ICO: the Data (Use and Access) Act 2025, what it means for organisations', url: 'https://ico.org.uk/about-the-ico/what-we-do/legislation-we-cover/data-use-and-access-act-2025/the-data-use-and-access-act-2025-what-does-it-mean-for-organisations/' },
  // Statistical exception: aggregate only, clear information, "simple and free"
  // means to object; "does not apply to purposes related to online advertising".
  icoExceptions: { label: 'ICO: storage and access technologies, what are the exceptions?', url: 'https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/what-are-the-exceptions/' },
  // LCP within 2.5 s, INP 200 ms or less, CLS 0.1 or less, at the 75th percentile.
  vitals: { label: 'web.dev (Google): Web Vitals', url: 'https://web.dev/articles/vitals' },
  // SEO-audit prices. "One-off audits cost £500-£7.5k"; the audit section says
  // "SEO audits in the UK cost £500-£7.5k+" and "enterprise sites with 500+
  // pages cost £5k-£15k+". Updated 9 July 2026. North London agency. VAT not
  // stated in the price sentences.
  redEagle: { label: 'Red Eagle Tech: how much does SEO cost in the UK (updated 9 July 2026)', url: 'https://redeagle.tech/blog/how-much-does-seo-cost-uk' },
} as const;

type SrcKey = keyof typeof SRC;
const SOURCE_KEYS = Object.keys(SRC) as SrcKey[];

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics', label: 'What an audit is' },
  { key: 'scope', label: 'What we check' },
  { key: 'uk', label: 'UK rules and tax' },
  { key: 'cost', label: 'Cost and terms' },
  { key: 'after', label: 'After the report' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── What an audit is ──
  { category: 'basics', question: 'What is an ecommerce audit?',
    answer: 'An ecommerce audit is a written check of a live online store and the systems behind it. We test the checkout, page speed, product data, marketplaces, tracking, and the links to stock, couriers and accounts. Every finding comes with evidence you can open yourself, the likely cost of leaving it, and the effort to fix it. The output is one ranked list, so your team knows what to do on Monday.' },
  { category: 'basics', question: 'How do you do a store audit?',
    answer: 'Start with data, then walk the store as a buyer. We read analytics, Search Console and a month of orders and returns. Then we place real orders on a phone and a laptop, refund one, and follow each order through stock, the courier label and the accounting entry. Last, we interview the people who run the shop. Gaps between what the data says and what staff describe are where most findings sit.' },
  { category: 'basics', question: 'Who is this ecommerce audit for?',
    answer: 'Established UK businesses with a store that already takes orders every day: brands, retailers, wholesalers and manufacturers selling direct or to trade. Typical clients run more than one channel, such as their own site plus Amazon.co.uk or eBay, and an accounting or ERP system behind it. If the store is not live yet, a launch plan is a better first step than an audit.' },
  { category: 'basics', question: 'How is this different from an SEO audit?',
    answer: 'An SEO audit asks whether search engines can find and rank your pages. An ecommerce audit asks whether the business behind those pages makes money on each order: checkout, pricing display, stock accuracy, courier costs, refunds and the books. Search is one section of ours. If search turns out to be your biggest gap, our UK SEO audit goes deeper on crawling, indexing and AI search visibility.' },
  { category: 'basics', question: 'Is an automated audit tool enough?',
    answer: 'A tool is a sensible first check. It can flag slow pages, missing tags and broken links in minutes. It cannot place an order, see that a Klarna refund never reached Xero, or notice that staff retype Amazon orders into Sage every morning. Those are the findings that cost an established store the most, and they need a person who follows the order end to end.' },

  // ── What we check ──
  { category: 'scope', question: 'Which platforms do you audit?',
    answer: 'Shopify and Shopify Plus, WooCommerce, Adobe Commerce (Magento), BigCommerce and custom storefronts. Behind the store we read Xero, Sage 50, Sage 200 and Sage Intacct, QuickBooks UK, NetSuite, Dynamics 365 Business Central and Odoo, plus Brightpearl, Linnworks and Mintsoft for orders and stock. The method stays the same on every platform. The weak points differ, so the checklist adjusts.' },
  { category: 'scope', question: 'Why is my Shopify store running so slowly?',
    answer: 'Common causes are apps that each load their own scripts, oversized product images and a theme that renders too much before the first product appears. Google’s Web Vitals guidance says the main content should appear within 2.5 seconds and a tap should get a response within 200 milliseconds, measured at the 75th percentile. We name the scripts and images behind each miss.' },
  { category: 'scope', question: 'Do you check marketplaces such as Amazon.co.uk, eBay and OnBuy?',
    answer: 'Yes. We compare listings, prices and stock across your own store and Amazon.co.uk, eBay UK, OnBuy, ManoMano, the B&Q marketplace or Zalando, wherever you sell. The usual findings are oversells from slow stock syncs, fees that make one channel lose money once returns are counted, and marketplace sales reaching the books as one lump with no VAT split.' },
  { category: 'scope', question: 'Do you look at payments and refunds?',
    answer: 'Yes. We map how Stripe, PayPal, Shopify Payments, Klarna, Clearpay and GoCardless pay out, and whether each payout, fee and refund lands in the books against the right sale. Buy now, pay later refunds and part refunds are where the numbers drift most often. We also check which payment options appear on a phone at checkout, because a missing wallet is an easy sale to lose.' },
  { category: 'scope', question: 'Do you check couriers and delivery promises?',
    answer: 'Yes. We compare the delivery dates and prices shown on product pages and at checkout with what Royal Mail, DPD, Evri or your 3PL (the outside warehouse that picks and posts your orders) actually deliver. We look at cut-off times, how labels are created, how tracking reaches the customer and what a returned parcel costs, because delivery promises drive both conversion and complaints.' },
  { category: 'scope', question: 'Can you audit a B2B or trade store?',
    answer: 'Yes. A trade store adds account pricing, credit terms, minimum order quantities, quotes and invoices on terms. We check whether trade buyers see their own prices, whether orders reach the ERP without retyping, and whether invoices and payments match. Our work for GPSUK on Commerceflo and the Sow Easy WooCommerce and Odoo build both sit in this kind of trade ordering.' },

  // ── UK rules and tax ──
  { category: 'uk', question: 'Does the audit check the CMA rules on drip pricing?',
    answer: 'Yes. The CMA’s price transparency guidance, published 18 November 2025, describes drip pricing as prices added as a shopper moves through a purchase. The same day the CMA said it can fine companies up to 10% of global turnover. We walk your checkout and list every charge that first appears after the product page, such as a mandatory fee or a delivery charge shown late, so your team and lawyers can decide what to change.' },
  { category: 'uk', question: 'What does the audit check on returns and cancellations?',
    answer: 'Under GOV.UK rules, shoppers must be told about a right to cancel most online orders up to 14 days after delivery, and the window grows to 12 months when nobody tells them. We screenshot the order-confirmation email and the returns-portal screen from our own test order and mark whether each one states that right, a price with all taxes included and the delivery cost.' },
  { category: 'uk', question: 'Do you check our cookies and analytics after the Data (Use and Access) Act 2025?',
    answer: 'Yes. The ICO says the Data (Use and Access) Act 2025 lets you set some cookies without consent, including ones that collect statistical information. Its guidance also says that exception does not cover online advertising, such as ad measurement. We list every tag your store fires, sort each into analytics or advertising, and check your banner. Your data protection lead makes the final call.' },
  { category: 'uk', question: 'How does Making Tax Digital affect an online store?',
    answer: 'HMRC’s VAT Notice 700/22 says records moved between software must use digital links, such as an API transfer or a CSV import, and that copy and paste does not count. We look for the places a person types sales, marketplace payouts or refunds from one screen into Xero, Sage or QuickBooks by hand. Your accountant confirms the fix against the notice.' },
  { category: 'uk', question: 'Do you check VAT on sales to the EU and the EU AI Act?',
    answer: 'We map how EU orders are priced, taxed and shipped, and where that information sits in your systems, then hand the questions to your accountant, because VAT treatment depends on your set-up. If your store uses an AI chatbot or recommendations for EU shoppers, we list it so your legal team can check it against EU rules, including the EU AI Act. Both calls belong to a qualified adviser, and the report says so.' },

  // ── Cost and terms ──
  { category: 'cost', question: 'How much does an ecommerce audit cost in the UK?',
    answer: 'There is no standard price, because the word audit covers anything from an automated report to weeks of work. The nearest published reference is for SEO audits: Red Eagle Tech, a North London agency, puts one-off SEO audits at £500 to £7.5k, and £5k to £15k+ for sites over 500 pages (updated 9 July 2026, VAT not stated). An ecommerce audit that also covers systems and operations sits on scope. FactoryJet quotes a fixed price in writing after a short scoping call.' },
  { category: 'cost', question: 'How long does the audit take?',
    answer: 'Three inputs set the timeline: how many systems an order passes through, how fast the read-only logins arrive, and whether trade ordering is in scope. Each extra system adds another hop to trace with test orders. Logins that take a week to arrive add a week. We put the agreed dates in writing with the price, before work starts.' },
  { category: 'cost', question: 'What access do you need, and is our data safe?',
    answer: 'Read-only access is enough: analytics, Search Console, the store admin as a staff user and a viewer login for the accounting system. We never need write access to audit. You can remove every login the day the report lands. If a test order is needed, we agree it with you first and refund it, so it does not distort your sales or stock figures.' },
  { category: 'cost', question: 'What are your terms?',
    answer: 'The audit is a fixed price, agreed in writing before work starts. If you then ask us to fix things, each phase is scoped, priced and signed on its own. You own the code and the repository from day one, defects are fixed inside the build price for an agreed cover period, and support is optional, quoted per change, with no monthly minimum.' },

  // ── After the report ──
  { category: 'after', question: 'What do we get at the end?',
    answer: 'A written report and a walkthrough call with the founder. Each finding has the evidence (a screenshot, an order number or a log line), the likely cost of leaving it, the effort to fix it and who should do it: your team, your current agency, a supplier or us. The list is ranked, so the first five items are the ones worth starting this month.' },
  { category: 'after', question: 'Do we have to use FactoryJet to fix the findings?',
    answer: 'No. The report is written so your own developers, your current agency or a freelancer can act on it. If you hire us for the fixes, the same people who wrote the report do the work, priced phase by phase, and nothing starts until you sign that phase.' },
  { category: 'after', question: 'What if the audit says we should replatform?',
    answer: 'We say so only when the evidence points there, and we show what staying would cost next to what moving would involve: redirects, customer accounts, order history and every integration. Most audits end with fixes on the current platform. When a move is right, our Shopify migration team plans redirects and data first, so rankings and order history survive the switch.' },
];

/* ─── The audit, area by area (listicle) ─────────────────────────────── */
const AREAS: { n: string; t: string; d: string }[] = [
  { n: '01', t: 'Profit per order, by channel', d: 'Your own site, Amazon.co.uk, eBay UK, OnBuy and trade orders, each net of fees, returns, delivery and ad spend. The channel that looks biggest is not always the one that pays.' },
  { n: '02', t: 'The checkout on a real phone', d: 'We buy, change the basket, use a discount code and pay with a card, a wallet and Klarna or Clearpay where you offer them. Every extra field and every charge that appears late goes on the list.' },
  { n: '03', t: 'Prices shown against UK rules', d: 'Headline prices, delivery charges and fees compared with the CMA price transparency guidance and the GOV.UK pre-purchase information list, screen by screen.' },
  { n: '04', t: 'Speed against Google’s thresholds', d: 'Main content, tap response and layout shift on the home, category, product and basket pages, with the app, script or image behind each miss named.' },
  { n: '05', t: 'Product data and search', d: 'Titles, variants, GTINs (the barcode numbers marketplaces ask for), stock messages and structured data. The same data feeds Google Shopping, marketplaces and AI answers, so one fix pays three times.' },
  { n: '06', t: 'Stock between every channel', d: 'Where the stock number lives (Shopify, Linnworks, Brightpearl, Mintsoft, Odoo or the ERP), how often each channel reads it, and how many oversells and cancellations that caused last month.' },
  { n: '07', t: 'Orders into the books', d: 'Each sale, refund, fee and payout followed into Xero, Sage, QuickBooks UK, NetSuite or Business Central. We mark every manual step, which also matters for HMRC digital links.' },
  { n: '08', t: 'Couriers, labels and returns', d: 'Royal Mail, DPD, Evri or your 3PL: delivery promises against real transit times, label creation, tracking emails and the cost of a returned parcel.' },
  { n: '09', t: 'Tracking, cookies and consent', d: 'Every tag the store fires, sorted into analytics or advertising, checked against the ICO’s guidance, and tested to see whether purchases are counted once and only once.' },
  { n: '10', t: 'The platform’s next three years', d: 'Whether the current platform carries your plans for trade, new markets or more channels, or whether the fixes are turning into workarounds.' },
];

/* ─── JSON-LD. The Organization is referenced by @id only and is defined
       once, sitewide. Never redefine it here. ─────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Ecommerce Audit UK',
      serviceType: 'Ecommerce audit: checkout and pricing, site speed, product data, marketplaces, stock, payments, couriers, tracking and accounting integrations',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      description:
        'A written, ranked audit of an established UK online store and the systems behind it: checkout and price display against CMA guidance, speed against Google Web Vitals, product data, marketplaces such as Amazon.co.uk and eBay UK, stock sync, payment payouts, Royal Mail, DPD and Evri delivery, cookies and tracking, and the links to Xero, Sage, QuickBooks UK, NetSuite, Business Central or Odoo.',
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
  alternates: { canonical: CANONICAL, languages: { 'en-GB': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: TITLE,
    description:
      'For UK stores that already trade: we follow real orders from the checkout through stock, couriers and Xero or Sage, check prices against CMA guidance, and rank every fix by value and effort.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/services/ecommerce-audit-hero.webp', width: 1600, height: 1067, alt: 'A merchant reviewing an online store checkout and order dashboard on a laptop during an ecommerce audit' }],
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

export default function EcommerceAuditUKPage() {
  return (
    <>
      <script id="ld-uk-ecommerce-audit" type="application/ld+json"
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
                  <span className="chip"><span className="dot dot-orange" />Ecommerce Audit UK</span>
                  <span className="chip">Stores Already Trading</span>
                  <span className="chip">Checkout to Xero</span>
                </div>
                <h1>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  Your store takes orders every day. Sales have flattened, or the team spends mornings fixing what the
                  systems got wrong overnight. We audit the whole chain: the checkout on a phone, prices against CMA
                  rules, Amazon.co.uk and eBay listings, stock in Linnworks or Brightpearl, Royal Mail and DPD labels,
                  and every sale and refund as it lands in Xero, Sage or NetSuite. You get one list, ranked by what
                  each fix is worth.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses since 2014</span></div>
                  <div className="upd">Last updated<br />29 October 2026</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="uk" source="uk_ecommerce_audit_hero"
                    submitLabel="Scope my store audit"
                    trustText="Fixed price in writing before you sign. Founder replies within 24 hours."
                    service="Ecommerce Audit" />
                </div>
              </div>

              <div className="card" style={{ padding: 8 }}>
                <img src="/images/services/ecommerce-audit-hero.webp" width={1600} height={1067} fetchPriority="high" decoding="async" alt="A merchant reviewing an online store checkout and order dashboard on a laptop during an ecommerce audit" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">What the report hands you</span>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Fixes ranked by value</div><div className="scorecard-note">evidence, effort and owner on each</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Ranked</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Orders traced end to end</div><div className="scorecard-note">checkout, stock, courier, books</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Traced</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">UK rule checks</div><div className="scorecard-note">CMA pricing, returns, cookies, MTD links</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Listed</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Who fixes it</div><div className="scorecard-note">your team, your agency or us</div></div>
                    <div className="scorecard-val" style={{ color: T.green, fontSize: 15 }}>Your call</div>
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
              <span className="lab">What does an ecommerce audit cover for a UK store that already trades?</span>
              <p>
                An ecommerce audit for a trading UK store follows real orders from the checkout to the bank. It tests
                speed, checkout and price display against Google and CMA guidance, compares stock and listings across
                marketplaces, and traces each sale, refund and payout into Xero, Sage, QuickBooks or the ERP. The
                result is a written list of fixes, ranked by value and effort, with the evidence for each.
              </p>
            </div>
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">Three terms we use on this page</span>
              <p>
                <b>Drip pricing</b> is the CMA’s name for charges added as a shopper moves through a purchase.
                A <b>digital link</b> is HMRC’s term for data moved between software by API or file import, never by
                copy and paste. An <b>ERP</b> is the single system that holds stock, purchase orders and the ledger, such as
                NetSuite, Business Central or Odoo.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ 3. FACTS BAND (verified only) ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              {[
                { v: '28.3%', t: 'of all retail sales in Great Britain were made online in September 2026', s: 'ONS, 23 October 2026', u: SRC.ons.url },
                { v: '10%', t: 'of global turnover: the most the CMA says it can now fine for unfair pricing', s: 'CMA, 18 November 2025', u: SRC.cmaNews.url },
                { v: '14 days', t: 'after delivery: the cancellation right you must tell UK customers about', s: 'GOV.UK', u: SRC.distance.url },
                { v: '200 ms', t: 'or less: Google’s good threshold for how fast a page answers a tap', s: 'web.dev (Google)', u: SRC.vitals.url },
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

        {/* ═══ 4. THE BUYER'S SITUATION ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">When an audit pays for itself</span>
                <h2>Signs a trading store needs an audit before it needs more traffic</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  Buying more traffic into a store with a leak only makes the leak bigger. Common signs a trading
                  store needs an audit.
                </p>
                <ul className="scope-list num-list mt-6" style={{ maxWidth: 580 }}>
                  <li><b>Revenue grew, margin did not.</b> Marketplace fees, returns and courier surcharges ate the extra orders, and nobody can show profit by channel.</li>
                  <li><b>Staff retype orders.</b> Amazon, eBay or trade orders get keyed into Sage, Xero or the ERP by hand, and errors appear at month end.</li>
                  <li><b>Stock disagrees with itself.</b> Shopify, Linnworks and the warehouse show three numbers, and peak season brings oversells and cancellations.</li>
                  <li><b>Payouts never match the bank.</b> Stripe, Klarna or Shopify Payments deposits arrive net of fees and refunds, and the bookkeeper reconciles them by hand.</li>
                  <li><b>Checkout drop-off is high on mobile.</b> Shoppers reach the basket and leave, and the analytics cannot say where.</li>
                  <li><b>An agency wants to rebuild everything.</b> You want an evidence-led view of what is broken before you sign a six-figure replatform.</li>
                </ul>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Audit, consultant or rebuild?</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">Store trades, something leaks</div><div className="scorecard-note">you need the evidence first</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Audit</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Big strategic question</div><div className="scorecard-note">new market, trade channel, platform choice</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Consultant</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">The design itself is the problem</div><div className="scorecard-note">old theme, poor mobile layout</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Redesign</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Only search is weak</div><div className="scorecard-note">crawling, indexing, AI answers</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>SEO audit</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Not live yet</div><div className="scorecard-note">nothing to measure</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Launch plan</div></div>
              </div>
            </div>
            <p className="mt-8" style={{ maxWidth: 900 }}>
              For the bigger strategic questions, our <a href="/uk/ecommerce-consultant" style={inlineLink}>UK ecommerce
              consultant</a> service is the better fit. If the audit shows the design is the real problem, the work moves
              to an <a href="/uk/ecommerce-redesign" style={inlineLink}>ecommerce redesign</a>. If only search is weak,
              the <a href="/uk/seo-audit" style={inlineLink}>UK SEO audit</a> goes deeper there.
            </p>
          </div>
        </section>

        {/* ═══ 5. TEN AREAS (LISTICLE) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 740 }}>
              <span className="eyebrow">What we check</span>
              <h2>Ten areas we audit, in the order we audit them</h2>
              <p className="lead mt-4">
                Money first, because the rest of the list is ranked by it. Every area ends with findings you can check
                yourself: an order number, a screenshot, a log line or a report export.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {AREAS.map((s) => (
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

        {/* ═══ 6. UK RULES THE AUDIT CHECKS ═══ */}
        <section className="sec-lg" id="uk-rules">
          <div className="wrap">
            <div style={{ maxWidth: 820 }}>
              <span className="eyebrow">UK rules, read at the source</span>
              <h2>Four UK rules a store audit should check, and what each one means at checkout</h2>
              <p className="lead mt-4">
                An audit from a generic checklist misses these, because they live in GOV.UK, CMA, HMRC and ICO
                guidance rather than in a speed report. We read each one on the regulator’s own page and test your
                store against it.
              </p>
            </div>
            <div className="stack mt-8" style={{ maxWidth: 820 }}>
              <h3>1. Price transparency and drip pricing (CMA)</h3>
              <p>
                The CMA published its price transparency guidance on 18 November 2025 and updated the page on
                7 January 2026. It names drip pricing, where charges are added as a shopper proceeds, as a practice to
                avoid. The same day it opened investigations into 8 businesses, sent advisory letters to 100 firms, and
                said fines can reach 10% of global turnover. In the audit we screenshot the price at each step, from
                the product page to the payment screen, and list any charge that was not visible at the start.
              </p>
              <h3 className="mt-4">2. Cancellation rights and pre-purchase information (GOV.UK)</h3>
              <p>
                The GOV.UK guidance sets a 14-day cancellation right after delivery for most online orders, which
                stretches to 12 months if the seller never mentions it. It also lists what a shopper must see before
                paying, including a price with all taxes included and delivery costs. From our test order we capture
                the order-confirmation email and the returns-portal screen, then mark each item on that list as shown
                or missing.
              </p>
              <h3 className="mt-4">3. Digital links for VAT records (HMRC)</h3>
              <p>
                VAT Notice 700/22, paragraph 3.2.1, accepts API transfers, CSV imports, linked spreadsheet cells and
                emailed spreadsheets as digital links. It says cut and paste or copy and paste does not count. So when a person types
                last week’s Amazon payout into Xero or Sage, we flag it as a step your accountant should check against
                para 3.2.1, which also covers when manual entry is allowed. We mark every such step on the order map.
              </p>
              <h3 className="mt-4">4. Cookies and analytics (ICO)</h3>
              <p>
                The ICO says the Data (Use and Access) Act 2025 lets organisations set some cookies without consent,
                including ones that collect statistical information. Its guidance adds conditions: the data must be
                aggregate, users must get clear information and a simple, free way to object, and the exception does
                not apply to online advertising, including ad measurement. We list every tag your store fires and
                sort it into one side or the other.
              </p>
            </div>
            <Sources ids={['cmaPrice', 'cmaNews', 'distance', 'mtd', 'icoDuaa', 'icoExceptions']} />
            <p style={srcNote}>
              We are not lawyers or tax advisers. We find where the store and these rules meet, and your legal team or
              accountant makes the call.
            </p>
          </div>
        </section>

        {/* ═══ 7. MID-PAGE CTA ═══ */}
        <MidPageCTA
          headline={'Want the order traced through your own systems?'}
          sub={'Send the store address, the channels you sell on and the systems behind them. We reply with a written scope and a fixed price for the audit. Attach your brief or RFP at step 2.'}
          label={'Scope my store audit'}
        />

        {/* ═══ 8. HOW THE AUDIT RUNS (NUMBERED STEPS) ═══ */}
        <section className="sec-lg dot-grid" id="how-it-runs">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">How it runs</span>
              <h2>How we run an ecommerce audit, in seven steps</h2>
              <p className="lead mt-4">
                The steps stay the same for a Shopify brand and a WooCommerce wholesaler. Only the systems in step four
                change. Your finance lead joins us for steps four and seven.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {[
                { n: '01', t: 'Scope call with the founder', d: 'Channels, systems, order volume and what worries you. We agree what is in scope, the timeline and a fixed price, in writing, before any login is shared.' },
                { n: '02', t: 'Read-only access', d: 'Analytics, Search Console, the store admin as a staff user, a viewer login for the books and, where relevant, Linnworks, Brightpearl or Mintsoft. No write access, ever.' },
                { n: '03', t: 'Buy, change and refund', d: 'Agreed test orders on a phone and a laptop, with a discount, a part refund and each payment method you offer. Each one is refunded and labelled so it never skews your figures.' },
                { n: '04', t: 'Follow every order into the back office', d: 'Each test order traced through stock, the courier label, the payout and the entry in Xero, Sage, QuickBooks UK, NetSuite, Business Central or Odoo.' },
                { n: '05', t: 'Talk to the people who run the shop', d: 'Half an hour each with customer service, the warehouse and finance. Workarounds people stopped noticing show up here.' },
                { n: '06', t: 'Rank by value and effort', d: 'Every finding gets evidence, a likely cost of leaving it, the effort to fix it and an owner. The list is sorted so the top five are this month’s work.' },
                { n: '07', t: 'Walkthrough and hand-over', d: 'A call with the founder through the report, then the document is yours. Your team, your agency or ours can pick it up, and you remove our logins the same day.' },
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

        {/* ═══ 9. HOUSE TERMS + BRIEF ASK ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Terms</span>
                <h2>Terms for the audit, and for any work that follows</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  They are written into the proposal before work starts, and they do not change if the audit leads to
                  a build.
                </p>
                <ul className="scope-list num-list mt-6" style={{ maxWidth: 580 }}>
                  <li><b>A fixed price for the audit.</b> Scoped on the first call and confirmed in writing before you share a single login.</li>
                  <li><b>The report is yours.</b> Written so any team can act on it. You are never tied to us for the fixes.</li>
                  <li><b>Working software on your own data before you sign a build.</b> If you ask us to fix something, we show it on your real products or orders first.</li>
                  <li><b>A fixed price per phase.</b> Each phase is scoped, priced and signed on its own, so you can stop after any one of them.</li>
                  <li><b>You own it from day one.</b> The code and the repository are yours. Hosting and apps can run in your own accounts at cost, with no markup.</li>
                  <li><b>Defects fixed inside the build price.</b> For a cover period we agree before work starts. Support after that is optional, quoted per change, with no monthly minimum.</li>
                </ul>
                <div className="mt-8">
                  <ModalCTAButton label="Scope my store audit" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Have a brief or an RFP? Send it</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">Your brief, RFP or tender document</div><div className="scorecard-note">PDF or Word, attach at step 2 of the form</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>1</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Channels you sell on</div><div className="scorecard-note">own store, marketplaces, trade</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>2</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Systems behind the store</div><div className="scorecard-note">accounts, ERP, stock, 3PL, couriers</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>3</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Orders a month, roughly</div><div className="scorecard-note">and your peak season</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>4</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">The one thing that worries you</div><div className="scorecard-note">margin, stock, the platform or the admin</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>5</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 10. UK PROOF ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">UK work behind the method</span>
              <h2>Two trade stores where the order chain is the job</h2>
              <p className="lead mt-4">
                Both projects are about what happens after the click: account prices, stock held in another system,
                and orders that must reach the back office without retyping. That is the part of a store most audits
                skip.
              </p>
            </div>
            <ul className="col-2 mt-10">
              <li className="svc-card">
                <h3>GPSUK, built on Commerceflo</h3>
                <p className="mt-4">A trade storefront where UK business buyers log in, see their own account prices and move from quote to order without retyping. SEO and AI search work continues. <a href="/case-studies/gpsuk-promotional-products" style={inlineLink}>Read the GPSUK case study</a>.</p>
              </li>
              <li className="svc-card">
                <h3>Sow Easy, WooCommerce joined to Odoo</h3>
                <p className="mt-4">A wholesale store on WordPress WooCommerce that reads stock, pricing and SKUs from Odoo. The Odoo link is still being built, and every change is tried on a staging copy before it goes near live orders. <a href="/case-studies/sow-easy-distributor-portal" style={inlineLink}>Read the Sow Easy case study</a>.</p>
              </li>
            </ul>
            <p className="mt-8" style={{ maxWidth: 820 }}>
              For trade ordering in more depth, see <a href="/uk/b2b-ecommerce" style={inlineLink}>B2B ecommerce in the UK</a>.
              Where an audit finds Shopify sales reaching Xero as one line, the fix usually sits in a{' '}
              <a href="/uk/shopify-xero-integration" style={inlineLink}>Shopify Xero integration</a>.
            </p>
          </div>
        </section>

        {/* ═══ 11. COMPARISON TABLE ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <span className="eyebrow">Side by side</span>
            <h2 style={{ maxWidth: 760 }}>Ecommerce audit options compared: a tool, an agency pitch audit, or a traced audit</h2>
            <p className="lead mt-4" style={{ maxWidth: 760 }}>
              Each has a use. The difference is how far past the storefront each one looks.
            </p>
            <div className="card mt-8" style={{ padding: 0, overflow: 'hidden' }}>
              <table className="cmp-table">
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">Traced audit (FactoryJet)</th>
                    <th>Automated audit tool</th>
                    <th>Pre-sales audit from a build agency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Looks past the storefront</td><td className="fj"><span className="yes">Stock, couriers, payouts, books</span></td><td><span className="no">Public pages only</span></td><td><span className="partial">Usually the site only</span></td></tr>
                  <tr><td className="feat">Places real orders</td><td className="fj"><span className="yes">Yes, agreed and refunded</span></td><td><span className="no">No</span></td><td><span className="partial">Sometimes</span></td></tr>
                  <tr><td className="feat">UK rule checks</td><td className="fj"><span className="yes">CMA, GOV.UK, HMRC, ICO</span></td><td><span className="partial">Cookie scan at most</span></td><td><span className="partial">Varies, ask</span></td></tr>
                  <tr><td className="feat">Ranked by money</td><td className="fj"><span className="yes">Value and effort on each fix</span></td><td><span className="partial">Severity scores</span></td><td><span className="partial">Often ranked toward a rebuild</span></td></tr>
                  <tr><td className="feat">Usable by another team</td><td className="fj"><span className="yes">Written to hand over</span></td><td><span className="yes">Yes</span></td><td><span className="partial">Tied to their proposal</span></td></tr>
                  <tr><td className="feat">Price shape</td><td className="fj"><span className="yes">Fixed, in writing, before access</span></td><td><span className="yes">Free or a subscription</span></td><td><span className="partial">Often folded into a build quote</span></td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6" style={{ maxWidth: 820 }}>
              The table reflects how each option usually works for UK stores in October 2026. It rates no named tool
              or agency.
            </p>
          </div>
        </section>

        {/* ═══ 12. COST (sourced market range only) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Cost</span>
                <h2>What an ecommerce audit costs in the UK</h2>
                <div className="stack mt-6">
                  <p>
                    No price list exists, because audit means anything from a one-hour screen recording to weeks of
                    order tracing. The nearest published UK reference is for SEO audits: Red Eagle Tech, a North London
                    agency, puts one-off SEO audits at £500 to £7.5k, and £5k to £15k+ for sites over 500 pages, in its
                    guide updated 9 July 2026. The guide does not say whether
                    those figures include VAT, so ask any supplier whether a quote is ex or inc VAT before you compare.
                  </p>
                  <p>
                    An audit that follows orders into stock, couriers and the books has more scope than an SEO
                    audit. Four things move it: the number of channels, the number of systems, order volume, and
                    whether trade ordering is included. FactoryJet quotes a fixed price in writing after a short
                    scoping call, and the price does not move once you sign.
                  </p>
                </div>
                <Sources ids={['redEagle']} />
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What moves the scope</span>
                <div className="scorecard-row"><div className="scorecard-metric">Sales channels</div><div className="scorecard-val" style={{ fontSize: 14 }}>Reach</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Systems behind the store</div><div className="scorecard-val" style={{ fontSize: 14 }}>Depth</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Orders a month and catalogue size</div><div className="scorecard-val" style={{ fontSize: 14 }}>Volume</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Trade ordering in scope</div><div className="scorecard-val" style={{ fontSize: 14 }}>B2B</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Scope call with the founder</div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>No charge</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 13. SOURCES ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Method</span>
              <h2>Sources, read on {READ_ON}</h2>
              <p className="lead mt-4">
                Every rule, threshold and price on this page was read on the pages below that day. Regulators update
                guidance and agencies change prices, so open the linked page before you act on a figure.
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

        {/* ═══ 14. FAQ ═══ */}
        <section className="sec-lg dot-grid" id="faq">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>Ecommerce audit questions from UK retailers, brands and wholesalers</h2>
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

        {/* ═══ 15. FINAL CTA (the only dark section) ═══ */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Next step</span>
            <h2>Find the fixes your store is already paying for</h2>
            <p className="mt-4">
              Send your name and work email. The founder replies within 24 hours to book a scope call about your
              channels, your systems and what is going wrong. You leave with a written scope and a fixed price for the
              audit, and no obligation to go ahead.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="Scope my store audit" region="uk" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/uk/shopify-migration" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>Thinking of replatforming?</a>
            </div>
          </div>
        </section>

      </main>
        <Footer />
      </div>
    </>
  );
}

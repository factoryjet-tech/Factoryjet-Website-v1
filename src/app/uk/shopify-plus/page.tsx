import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import '../ai-agents/ai-agents.css';

const CANONICAL = 'https://factoryjet.com/uk/shopify-plus';
const UPDATED = '2026-09-24';
const TITLE = 'Shopify Plus Agency UK | Builds and Migrations | FactoryJet';
const DESCRIPTION =
  'Shopify Plus agency in the UK for new builds, migrations to Plus, B2B and checkout work. Straight advice on Shopify Plus cost and when plain Shopify is enough.';
const H1 = 'Shopify Plus Agency UK: Builds, Migrations and B2B, Plus Straight Advice on When Plus Is Worth It';

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD, so the
   schema can never describe a trail a human cannot see. Never hand-copy a
   second list here. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'Shopify Plus Agency', url: CANONICAL },
];

/* ─── External sources, each fetch-verified 2026-09-24 (HTTP 200, claim
       confirmed in the fetched body) ──────────────────────────────────── */
// fetch-verified 2026-09-24: Plus plan includes "9 expansion stores", "Up to 50 markets",
// "Up to 200 locations", "Unlimited staff accounts", "Unlimited staging stores", Shopify Functions,
// checkout customisation via APIs and extensions, B2B (unlimited catalogs, deposits, partial
// payments), Launchpad, headless storefronts (up to 25 with Hydrogen), priority 24/7 support.
// Pricing: tiered base fee plus a possible "variable platform fee based on your revenue and
// business model, which differs for B2B and D2C companies".
const SRC_PLUS_PLAN =
  'https://help.shopify.com/en/manual/intro-to-shopify/pricing-plans/plans-features/shopify-plus-plan';
// fetch-verified 2026-09-24: "As of June 30, 2026, Shopify Scripts has been deprecated. Any
// Scripts that were still published on your store have been deactivated and no longer work."
// Points merchants to Shopify Functions as the replacement.
const SRC_SCRIPTS = 'https://help.shopify.com/en/manual/checkout-settings/script-editor';
// fetch-verified 2026-09-24: IOSS lets businesses report and pay VAT on imports of low value
// goods to consumers in the EU or Northern Ireland; businesses outside the EU and NI "(including
// Great Britain), must ask an intermediary to register and act on their behalf".
const SRC_IOSS =
  'https://www.gov.uk/guidance/check-if-you-can-register-for-the-vat-import-one-stop-shop-scheme';
// fetch-verified 2026-09-24: Shopify's own Plus pricing page. 1-year and 3-year terms; fixed
// starting price for standard setups; "More complex, higher volume businesses switch to a
// variable platform fee based on their revenue and business model"; card rates vary by country.
// Linked so buyers read current figures from Shopify, never from us.
const SRC_PLUS_PRICING = 'https://www.shopify.com/plus/pricing';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',    label: 'Shopify Plus basics' },
  { key: 'cost',      label: 'Shopify Plus cost' },
  { key: 'agency',    label: 'Choosing a Shopify Plus agency' },
  { key: 'migration', label: 'Migrating to Shopify Plus' },
  { key: 'tech',      label: 'B2B, checkout and Functions' },
  { key: 'intl',      label: 'International, VAT and operations' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── Shopify Plus basics ──
  { category: 'basics', question: 'What is Shopify Plus?',
    answer: 'Shopify Plus is Shopify’s top plan for larger and faster-growing brands. It runs on the same hosted platform as every Shopify store, so Shopify still handles hosting, security and updates. On top, it adds deeper checkout customisation, custom Shopify Functions, native B2B wholesale tools, extra expansion stores, more markets and locations, automation tools and priority support.' },
  { category: 'basics', question: 'Is there a difference between Shopify and Shopify Plus?',
    answer: 'Yes, but it is smaller than most people expect. The storefront, themes and admin are the same. The difference sits underneath: Plus lets you customise checkout and write custom back-end logic, run native B2B with company accounts and price lists, open expansion stores, and get priority support. If your problems are about how the store looks, standard Shopify is usually enough.' },
  { category: 'basics', question: 'Is Shopify Plus worth it?',
    answer: 'It is worth it when a Plus feature solves a problem that is costing you money: wholesale buyers ordering by email, checkout rules you cannot build, several regional stores to run, or app fees piling up to fake what Plus does natively. It is not worth it just because revenue grew. Plenty of brands sell a lot on standard Shopify and should stay there.' },
  { category: 'basics', question: 'When should I upgrade from Shopify to Shopify Plus?',
    answer: 'Upgrade when you hit a real limit, not a revenue milestone. Common triggers are native B2B, custom checkout logic, needing more than one store for different regions or brands, needing more locations or markets than your plan allows, or wanting priority support during big trading peaks like Black Friday. If none of those apply, spend the money on the store instead.' },
  { category: 'basics', question: 'What is the difference between Shopify Advanced and Shopify Plus?',
    answer: 'Advanced is the top standard plan: better reports, more staff accounts and lower card rates than the plans below it. Plus is a separate enterprise plan on a contract. Plus adds custom checkout work, custom Shopify Functions in your own apps, native B2B, expansion stores, unlimited staff accounts and priority support. Check Shopify’s current plan table for exact limits.' },
  { category: 'basics', question: 'Is Shopify still worth it in 2026?',
    answer: 'For most UK direct-to-consumer brands, yes. Shopify runs the hosting, security and updates, the app ecosystem is huge, and your team can change most things without a developer. It fits less well if you need very complex product configuration or pricing logic that fights the platform. That is a case-by-case call, and it is exactly what a scoping call is for.' },

  // ── Shopify Plus cost ──
  { category: 'cost', question: 'How much does Shopify Plus cost?',
    answer: 'Shopify sets the Plus fee, not agencies, so read the current figures on Shopify’s own Plus pricing page. The shape is this: a contract on a one-year or three-year term, a fixed starting fee for standard setups, and for bigger or more complex businesses a variable platform fee based on revenue and business model. Card processing rates vary by country.' },
  { category: 'cost', question: 'Why is Shopify Plus so expensive?',
    answer: 'Because it is priced for businesses where the features pay for themselves: native B2B, custom checkout logic, several stores, higher API limits, priority support and a formal uptime commitment. For a brand that needs those, Plus often costs less than the apps and workarounds it replaces. For a brand that does not, it is simply a bigger bill for the same shop.' },
  { category: 'cost', question: 'What drives the cost of a Shopify Plus build?',
    answer: 'Five things: how much custom design you want, how much data and custom logic comes across in a migration, how many systems connect to the store (ERP, warehouse, email, reviews), whether you need B2B or several stores, and how much checkout and Shopify Functions work there is. We scope each one after a discovery call and quote a fixed price per stage.' },
  { category: 'cost', question: 'How much do Shopify Plus agencies charge?',
    answer: 'It varies widely because the work varies widely. A theme refresh and a replatform from Salesforce Commerce Cloud with an ERP connection are completely different jobs. Most agencies quote fixed-scope builds plus an ongoing support retainer. Be wary of anyone who quotes before seeing your catalogue, integrations and custom logic. We scope first and quote per stage.' },
  { category: 'cost', question: 'Are there transaction fees on Shopify Plus?',
    answer: 'If you use Shopify Payments, you pay card processing rates, which Shopify says vary by country. If you use a third-party payment provider instead, Shopify adds its own transaction fee on top of that provider’s fees. Shopify’s Plus pricing page lists the current rates. It is worth modelling both routes before you choose a payment set-up for your UK store.' },

  // ── Choosing a Shopify Plus agency ──
  { category: 'agency', question: 'What is a Shopify Plus agency?',
    answer: 'A Shopify Plus agency designs, builds, migrates and supports stores on the Plus plan. The useful ones do the engineering below the theme: checkout extensions, Shopify Functions, B2B set-up, multi-store and Markets configuration, and integrations with ERP and warehouse systems. A standard Shopify agency can build a beautiful theme. A Plus agency should also be comfortable with that back-end work.' },
  { category: 'agency', question: 'Are you a Shopify Plus Partner?',
    answer: 'No. FactoryJet does not hold Shopify Plus Partner status or any Shopify partner badge, and we will not pretend otherwise. We are an independent ecommerce engineering team that builds, migrates and supports Shopify and Shopify Plus stores. You do not need a badged partner to run a Plus store, but if your procurement requires one, Shopify’s partner directory lists them.' },
  { category: 'agency', question: 'Is there a Shopify Plus agency in the UK?',
    answer: 'Yes, many. Names that show up often in UK searches include Charle, Imaginaire, Eastside Co and Swanky, and we list them on this page with a short note on each. FactoryJet also works with UK merchants. The right choice depends on whether you want a large accredited partner with a marketing arm, or a senior engineering team focused on build and support.' },
  { category: 'agency', question: 'Do you work with brands in London?',
    answer: 'Yes. Plenty of our UK conversations start with a search for a Shopify Plus agency in London, and we work with London brands all the time. Shopify Plus work is done remotely, with video calls, a shared ticket board and a staging store you can click through, so we serve brands across the UK, from London to Manchester, Birmingham, Leeds and Scotland.' },
  { category: 'agency', question: 'Can you take over a Shopify Plus store another agency built?',
    answer: 'Yes. We start with an audit: theme code, apps, checkout extensions, Shopify Functions, integrations and anything still relying on old Shopify Scripts. You get a ranked list of risks and quick wins. Then we take over support once access is handed across as a collaborator account. If the previous agency has gone quiet, the store owner can grant us access directly.' },

  // ── Migrating to Shopify Plus ──
  { category: 'migration', question: 'How do I move from Shopify to Shopify Plus?',
    answer: 'Upgrading an existing Shopify store to Plus is a plan change, not a migration. Your products, customers, orders and theme stay where they are. You sign the Plus agreement with Shopify, and the Plus features switch on. The real work comes after: building the checkout, B2B, Functions or expansion stores you upgraded for. Plan that work before you sign.' },
  { category: 'migration', question: 'How do you migrate from Magento to Shopify Plus?',
    answer: 'We audit the Magento store first: catalogue structure, customer groups, B2B pricing, extensions and integrations. Then we map every piece to its Shopify Plus equivalent, whether that is native B2B, a Shopify Function, an app or custom code. Data moves in test runs, a full redirect map protects rankings, and we launch after testing real orders on a staging copy.' },
  { category: 'migration', question: 'Can you migrate from WooCommerce, Salesforce Commerce Cloud or BigCommerce?',
    answer: 'Yes. The method is the same for each: audit, map, test-migrate, rebuild custom logic, redirect, test and launch. What changes is where the complexity hides. WooCommerce stores often carry many plugins. Salesforce Commerce Cloud stores usually carry deep custom code and integrations. BigCommerce stores are often closest to Shopify in shape. We tell you which parts are hard after the audit.' },
  { category: 'migration', question: 'Will I lose my Google rankings when I migrate to Shopify Plus?',
    answer: 'You should not, if the migration is done carefully. Shopify uses its own URL patterns, so every old product, category and content URL needs a permanent redirect to its new address. Page titles, descriptions and content that already rank should come across too. Most traffic drops after a replatform come from missed redirects, so we treat the redirect map as a core deliverable.' },
  { category: 'migration', question: 'Is there a Shopify migration app?',
    answer: 'Yes. Shopify offers its own store import tools, and there are third-party migration apps that copy products, customers and orders. They are useful for moving data. They do not rebuild custom logic, B2B pricing, integrations, redirects or design, which is where most of the real migration work sits. We use tools for the data and engineers for everything else.' },

  // ── B2B, checkout and Functions ──
  { category: 'tech', question: 'Does Shopify have a B2B platform?',
    answer: 'Yes. Shopify B2B lets you sell to trade buyers from the same admin as your retail store. You set up each business as a company, with its own locations, buyer contacts, catalogues, price lists and payment terms. Full native B2B is built for the Plus plan. For bigger wholesale operations, it removes the tag-based workarounds many older Shopify stores still rely on.' },
  { category: 'tech', question: 'What is checkout extensibility?',
    answer: 'It is Shopify’s current way to customise checkout safely. In plain terms, you add small approved building blocks to the checkout, such as a gift message box, a delivery date picker or a trust badge, instead of editing checkout code directly. Because the blocks sit on top of Shopify’s checkout, they keep working when Shopify updates it. Plus gets the widest set of options.' },
  { category: 'tech', question: 'What are Shopify Functions, and what happened to Shopify Scripts?',
    answer: 'Shopify Functions are small pieces of custom code that change how Shopify’s back end behaves: custom discounts, hiding a payment method, renaming a delivery option or blocking a basket that breaks a rule. Shopify Scripts did similar jobs the old way. Shopify says that as of 30 June 2026, Scripts are deprecated and any still published have been switched off.' },
  { category: 'tech', question: 'Do I need headless Shopify Plus?',
    answer: 'Usually not. Headless means your shop front is a separate app that talks to Shopify behind the scenes. It suits brands with a heavy content platform, complex interactive product tools or several front ends sharing one catalogue. If your goal is just a faster site, a well-built standard theme is simpler to run and easier for your team to edit. We will tell you which.' },

  // ── International, VAT and operations ──
  { category: 'intl', question: 'Can Shopify Plus sell in GBP and EUR from one store?',
    answer: 'Yes. Shopify Markets lets one store show local prices in pounds, euros and other currencies, with local languages, domains and duty settings per market. Shopify’s Plus plan documentation lists up to 50 markets. When markets need genuinely different catalogues, stock or teams, a Plus expansion store can be the better fit. We help you choose between the two.' },
  { category: 'intl', question: 'How does VAT work when a UK Shopify store sells to the EU?',
    answer: 'It depends on what you sell, to whom and how you ship, so confirm with your accountant. For low-value goods sent to EU consumers, the EU Import One Stop Shop (IOSS) lets VAT be collected at checkout and reported in one return. GOV.UK says businesses in Great Britain must use an intermediary to register. We build the store to show and collect it correctly.' },
  { category: 'intl', question: 'Does HMRC check Shopify?',
    answer: 'HMRC looks at your business records, not at Shopify itself. Your Shopify sales are business income and belong in your accounts and VAT returns like any other sales. The practical risk is mismatched numbers, so make sure orders, refunds, fees and payouts reconcile with your accounting system. A proper integration with Xero, Sage or your ERP makes that routine instead of a monthly headache.' },
  { category: 'intl', question: 'Which systems can you integrate with Shopify Plus?',
    answer: 'The ones UK brands usually run alongside it: ERPs such as NetSuite, Microsoft Dynamics 365 Business Central and Sage, order and stock tools such as Brightpearl and Linnworks, your third-party logistics (3PL) warehouse system, Klaviyo for email, Gorgias for customer service and a PIM for product data. If a system has an API, an integration is normally possible.' },
  { category: 'intl', question: 'What does Shopify Plus support from an agency include?',
    answer: 'Shopify itself supports the platform, and Plus includes priority 24/7 support from Shopify. Agency support covers your store: theme and app fixes, new checkout extensions and Functions, integration monitoring, peak-trading preparation and small improvements, from a named team with a written log of every change. We run that as a monthly support retainer, with the same engineers each month.' },
];

/* ─── Named UK Shopify Plus agencies (open self-disclosure, ItemList) ─
   Each note is based on the company's own homepage, fetched 2026-09-24.
   Partner tiers are quoted as the agency's own claim. */
const PLUS_AGENCIES: { name: string; note: string }[] = [
  { name: 'FactoryJet', note: 'That is us. An independent ecommerce engineering team that builds, migrates and supports Shopify Plus stores for UK brands, with a focus on B2B, checkout, Shopify Functions and ERP and warehouse integrations. We are not a Shopify Plus Partner and hold no Shopify badge. We also build on Magento, so our platform advice is not tied to one option.' },
  { name: 'Charle', note: 'A London Shopify agency with offices in Manchester and New York that describes itself as a Shopify Plus Partner. Offers store design and builds, migrations, SEO, Klaviyo email and SMS, conversion work and support retainers, and runs its own recommendations platform called CSignal.' },
  { name: 'Imaginaire', note: 'A Nottingham ecommerce agency that describes itself as a Shopify Plus Partner. Covers design and build, migrations from Magento and WooCommerce, headless Shopify, SEO, PPC and conversion optimisation, with a four-stage method from understanding to ongoing improvement.' },
  { name: 'Eastside Co', note: 'A London agency with offices in New York and Dubai that describes itself as a Shopify Platinum Partner and a Shopify Plus Partner. Offers Shopify design and development, Plus migrations, app development, marketing and priority support packages.' },
  { name: 'Swanky', note: 'A Shopify agency with offices in the UK, Australia and France that describes itself as a Shopify Platinum Partner and a full-service Shopify Plus agency, covering migrations, B2B, internationalisation, retail and POS, and a growth team for CRO, SEO and paid media.' },
];

/* ─── JSON-LD ────────────────────────────────────────────────────────
   The Organization is defined once, sitewide. This page only references
   it by @id and never redefines name, logo, address or sameAs. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Shopify Plus Agency UK',
      serviceType: 'Shopify Plus builds, migrations to Shopify Plus, Shopify Plus B2B, checkout extensibility, Shopify Functions, multi-store and international set-up, ERP and 3PL integration, and ongoing support',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      description:
        'Shopify Plus agency in the UK. New Shopify Plus builds, migrations from Magento, Adobe Commerce, WooCommerce, Salesforce Commerce Cloud and BigCommerce, native B2B, checkout extensions, Shopify Functions, Shopify Markets and expansion stores, ERP and warehouse integrations, and monthly support.',
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
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['[data-speakable="true"]'] },
    },
    {
      '@type': 'ItemList',
      '@id': `${CANONICAL}#agencies`,
      name: 'UK Shopify Plus agencies',
      itemListElement: PLUS_AGENCIES.map((a, i) => ({
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
      'A UK Shopify Plus agency for new builds, migrations from Magento, WooCommerce, Salesforce Commerce Cloud and BigCommerce, native B2B, checkout extensions, Shopify Functions and ERP integrations. Straight advice on when standard Shopify is enough.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/uk/shopify-plus/shopify-plus-og.webp', width: 1200, height: 630, alt: 'Shopify Plus agency UK, FactoryJet, a UK brand team reviewing their online store on a large monitor' }],
  },
  robots: { index: true, follow: true },
};

export default function ShopifyPlusUKPage() {
  return (
    <>
      <script id="ld-uk-shopify-plus" type="application/ld+json"
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
                  <span className="chip"><span className="dot dot-orange" />UK Shopify Plus Agency</span>
                  <span className="chip">Builds &amp; Migrations</span>
                  <span className="chip">B2B &amp; Checkout</span>
                </div>
                <h1>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  FactoryJet is a Shopify Plus agency for UK brands that have outgrown standard Shopify, or are
                  moving to Plus from Magento, WooCommerce, Salesforce Commerce Cloud or BigCommerce. We build the
                  parts that make Plus worth paying for: checkout extensions, Shopify Functions, native B2B,
                  multi-store and international set-up, and the ERP and warehouse connections behind it. Then we
                  stay and support it.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ projects delivered</span></div>
                  <div className="upd">Last updated<br />24 September 2026</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="uk" source="uk_shopify_plus_hero" submitLabel="Get my free Shopify Plus review" />
                </div>
              </div>

              <div>
                <div className="card" style={{ padding: 8 }}>
                  <img src="/images/uk/shopify-plus/shopify-plus-hero.webp" width={1400} height={933} fetchPriority="high" decoding="async" alt="A UK homeware brand team in a bright studio reviewing product photos on their online store on a large monitor" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                </div>
                <div className="card card-top-orange mt-6">
                  <span className="eyebrow">What we take on</span>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">New Shopify Plus builds</div><div className="scorecard-note">design, theme and back end</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Built</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Migrations to Shopify Plus</div><div className="scorecard-note">data, logic and redirects</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Planned</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">B2B, checkout and Functions</div><div className="scorecard-note">the engineering below the theme</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Engineered</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Code and store ownership</div><div className="scorecard-note">nothing held back by us</div></div>
                    <div className="scorecard-val" style={{ color: 'var(--green)', fontSize: 15 }}>100% yours</div>
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
              <span className="lab">What does a Shopify Plus agency do, and is Plus worth it?</span>
              <p>
                A Shopify Plus agency builds, migrates and supports stores on Shopify’s enterprise plan. The real
                work sits below the theme: custom checkout, Shopify Functions, native B2B, several stores or
                markets, and ERP and warehouse integrations. Plus is worth it when one of those solves a problem
                costing you money. If not, standard Shopify is enough.
              </p>
            </div>
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">And how much does Shopify Plus cost?</span>
              <p>
                Shopify sets that fee, so check{' '}
                <a href={SRC_PLUS_PRICING} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>Shopify’s own Plus pricing page</a>{' '}
                for current figures. The shape: a one-year or three-year contract, a fixed starting fee for
                standard setups, and a variable platform fee based on revenue and business model for bigger or
                more complex businesses. The build cost on top depends on design, migration, integrations and
                custom logic.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              Most UK brands who ask us about Shopify Plus are not really asking about a plan. They are asking
              about a problem. Trade customers still order by email. A discount rule the business depends on
              stopped working when Shopify switched off Scripts. The EU store is a copy of the UK store that
              nobody keeps in sync. Plus can fix those. So can other things. Our job is to tell you which, then
              build it properly.
            </p>
          </div>
        </section>

        {/* ═══ 3. FACTS BAND (verified only) ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              {[
                { v: '9', t: 'expansion stores included with the Plus plan, for extra regions, brands or a separate wholesale store', s: 'Shopify Plus plan', u: SRC_PLUS_PLAN },
                { v: 'Up to 50', t: 'markets on Plus through Shopify Markets, each with its own currency, language and domain settings', s: 'Shopify Plus plan', u: SRC_PLUS_PLAN },
                { v: '30 Jun 2026', t: 'the date Shopify says Scripts were deprecated and any still published were switched off', s: 'Shopify Help Center', u: SRC_SCRIPTS },
                { v: '1 or 3 years', t: 'the Plus contract terms Shopify offers, with better rates on the longer term', s: 'Shopify Plus pricing', u: SRC_PLUS_PRICING },
              ].map((r) => (
                <li key={r.v} className="card" style={{ padding: '16px 18px' }}>
                  <div style={{ fontFamily: 'var(--fd)', fontWeight: 800, fontSize: 24, color: 'var(--orange)' }}>{r.v}</div>
                  <p style={{ fontSize: 13, color: 'var(--ink)', marginTop: 4 }}>{r.t}</p>
                  <a href={r.u} target="_blank" rel="noopener noreferrer nofollow" style={{ fontFamily: 'var(--fm)', fontSize: 10, color: 'var(--n400)', textDecoration: 'underline' }}>{r.s}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ 4. SHOPIFY VS SHOPIFY PLUS (comparison table) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">Shopify vs Shopify Plus</span>
              <h2>Shopify vs Shopify Plus: when it is worth it</h2>
              <p className="lead mt-4">
                The storefront, themes and admin are the same on both. The difference is what you can change
                underneath. If most of your answers sit in the right-hand column, Shopify Plus is worth scoping.
                If they sit in the middle, stay on standard Shopify (Basic, Grow or Advanced) and put the money
                into the store.
              </p>
            </div>
            <div className="card mt-8" style={{ padding: 0, overflow: 'hidden' }}>
              <table className="cmp-table">
                <thead>
                  <tr>
                    <th>Your situation</th>
                    <th>Standard Shopify is enough</th>
                    <th className="fj">Shopify Plus is worth it</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Checkout</td><td><span className="yes">Branding, standard fields and App Store apps cover it</span></td><td className="fj"><span className="yes">You need custom checkout steps, fields or rules</span></td></tr>
                  <tr><td className="feat">Discount and shipping logic</td><td><span className="yes">Standard discounts plus public apps do the job</span></td><td className="fj"><span className="yes">You need your own Shopify Functions in a custom app</span></td></tr>
                  <tr><td className="feat">Trade and wholesale</td><td><span className="partial">A few trade customers, simple price rules</span></td><td className="fj"><span className="yes">Company accounts, price lists, payment terms at scale</span></td></tr>
                  <tr><td className="feat">Stores and regions</td><td><span className="yes">One store, Markets for currency and language</span></td><td className="fj"><span className="yes">Separate stores per region, brand or wholesale</span></td></tr>
                  <tr><td className="feat">Team size</td><td><span className="yes">A small team fits the plan’s staff limits</span></td><td className="fj"><span className="yes">Many staff, custom permission groups, one organisation admin</span></td></tr>
                  <tr><td className="feat">Trading peaks</td><td><span className="partial">Standard support is fine for your peaks</span></td><td className="fj"><span className="yes">Big drops or Black Friday where minutes matter</span></td></tr>
                  <tr><td className="feat">Integrations</td><td><span className="yes">Off-the-shelf apps connect your tools</span></td><td className="fj"><span className="yes">ERP and 3PL syncs that need higher API limits</span></td></tr>
                  <tr><td className="feat">Contract appetite</td><td><span className="yes">You want to stay month to month</span></td><td className="fj"><span className="partial">You accept a one-year or three-year term</span></td></tr>
                </tbody>
              </table>
            </div>
            <div className="stack mt-8" style={{ maxWidth: 820 }}>
              <p>
                The mistake we see most often runs both ways. Some brands pay for Plus for two years and never
                use a single Plus feature, because nobody built the checkout or B2B work they upgraded for.
                Others stay on Advanced and stack six paid apps to fake wholesale pricing, which costs more, runs
                slower and breaks more often than native Plus B2B would.
              </p>
              <p>
                If you are still on standard Shopify and mainly want a better-looking, faster store, start with
                our <a href="/uk/shopify-development">UK Shopify development</a> team. You can upgrade to Plus later
                without rebuilding anything, because moving from Shopify to Shopify Plus is a plan change, not a
                migration.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ 5. LISTICLE: WHAT PLUS ADDS ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 740 }}>
              <span className="eyebrow">Shopify Plus benefits</span>
              <h2>Nine things Shopify Plus adds, in plain English</h2>
              <p className="lead mt-4">
                These are the Shopify Plus features that actually change what a UK brand can do, taken from
                Shopify’s own{' '}
                <a href={SRC_PLUS_PLAN} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>Plus plan documentation</a>.
                Each one only matters if you will use it.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {[
                { n: '01', t: 'Checkout customisation', d: 'Add your own steps, fields and content to checkout through checkout extensions: small approved building blocks such as a gift message, a delivery date picker or a B2B purchase order number. They survive Shopify’s updates because they sit on top of the checkout, not inside it.' },
                { n: '02', t: 'Custom Shopify Functions', d: 'A Shopify Function is a small piece of your own code that changes how Shopify’s back end behaves. Only Plus stores can run custom apps that contain Functions. That is how you build discounts, delivery rules and payment rules that no public app offers.' },
                { n: '03', t: 'Native B2B wholesale', d: 'Trade customers set up as companies, with their own locations, buyers, catalogues, price lists, payment terms, deposits and partial payments. Your wholesale and retail customers shop from the same admin, stock and product data.' },
                { n: '04', t: 'Nine expansion stores', d: 'Extra stores for other regions, brands or a separate wholesale store, all under one organisation admin, so staff and permissions are managed in one place. Useful when catalogues, stock or teams genuinely differ by market.' },
                { n: '05', t: 'Up to 50 markets', d: 'Shopify Markets lets one store sell in many countries with local currency, language and domain. On Plus the ceiling is higher, so a single store can cover the UK, Ireland, the EU and beyond before you need separate stores.' },
                { n: '06', t: 'Unlimited staff and custom permissions', d: 'Unlimited staff accounts and custom user groups, so customer service, warehouse, marketing and finance each see what they need and nothing else. That matters more than it sounds once a team passes a dozen people.' },
                { n: '07', t: 'Automation with Launchpad and Flow', d: 'Launchpad schedules sales, product drops and theme changes to go live at a set time, then switch back. Shopify Flow, which is also on other plans, automates routine jobs such as tagging high-risk orders or alerting the team when stock runs low.' },
                { n: '08', t: 'Higher API limits and staging stores', d: 'An API is the doorway software opens so other software can read and write its data. Plus can request higher limits, which busy ERP and warehouse syncs need, and includes unlimited staging stores for safe testing.' },
                { n: '09', t: 'Priority support and uptime commitment', d: 'Priority 24/7 support from Shopify and a formal uptime commitment. Neither replaces an agency that knows your store, but both matter on the days your biggest sales happen.' },
              ].map((s) => (
                <li key={s.n} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--fm)', fontWeight: 700, fontSize: 15, color: 'var(--orange)', minWidth: 34 }}>{s.n}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{s.t}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ═══ 6. WHAT WE DO ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 740 }}>
              <span className="eyebrow">Shopify Plus development services</span>
              <h2>What our Shopify Plus developers build for UK brands</h2>
              <p className="lead mt-4">
                We are a Shopify Plus development agency for brands that need the engineering, not just the
                theme. Here is all of it, in plain English.
              </p>
            </div>
            <ul className="col-2 mt-12" style={{ gap: 24 }}>
              <li className="card">
                <h3>New Shopify Plus builds</h3>
                <p className="mt-4">Design, theme build and the back end together: product structure, Markets, checkout, Functions and integrations planned as one system, so launch day is not the start of the fixing.</p>
              </li>
              <li className="card">
                <h3>Shopify Plus migration</h3>
                <p className="mt-4">Moving to Plus from Magento and Adobe Commerce, WooCommerce, Salesforce Commerce Cloud or BigCommerce. Data in test runs, custom logic rebuilt properly, and a full redirect map to protect your Google rankings.</p>
              </li>
              <li className="card">
                <h3>Shopify Plus B2B</h3>
                <p className="mt-4">Trade accounts moved off tag-based workarounds and onto native companies, catalogues and price lists, with payment terms and ERP sync, so wholesale buyers can order without emailing your sales team.</p>
              </li>
              <li className="card">
                <h3>Checkout extensions</h3>
                <p className="mt-4">Custom checkout fields, content, upsells and B2B purchase order numbers, built with Shopify’s checkout extensions so they keep working when Shopify updates the checkout.</p>
              </li>
              <li className="card">
                <h3>Shopify Functions</h3>
                <p className="mt-4">Custom discount, delivery, payment and basket rules written as Shopify Functions. If your old Scripts stopped working when Shopify switched them off, this is where we rebuild them.</p>
              </li>
              <li className="card">
                <h3>Multi-store and international</h3>
                <p className="mt-4">Shopify Markets for GBP, EUR and other currencies, expansion stores where regions truly differ, and duties and VAT settings checked against how you actually ship.</p>
              </li>
              <li className="card">
                <h3>ERP and 3PL integration</h3>
                <p className="mt-4">Orders, stock, prices and customer accounts flowing between Shopify Plus and NetSuite, Business Central, Sage, Brightpearl, Linnworks or your warehouse partner, with alerts when a sync fails.</p>
              </li>
              <li className="card">
                <h3>Shopify Plus support</h3>
                <p className="mt-4">A monthly retainer from the same engineers: fixes, improvements, new extensions, peak-trading preparation and integration monitoring, with a written log of every change. Plus <a href="/uk/shopify-seo">Shopify SEO</a> when you need it.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* ═══ 7. CHECKOUT + FUNCTIONS EXPLAINED ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Checkout extensibility and Shopify Functions</span>
                <h2>Checkout and Shopify Functions, explained simply</h2>
                <div className="stack mt-6">
                  <p>
                    Think of your checkout as a building Shopify owns and maintains. In the past, Plus brands were
                    allowed to knock through the walls: they edited the checkout code directly and ran little
                    programs called Shopify Scripts to change discounts, shipping and payments. It worked, until
                    Shopify renovated and the knocked-through walls fell down.
                  </p>
                  <p>
                    Checkout extensibility is the new rule. You no longer edit the building. You add approved
                    fittings in marked spots: a field here, a message there, an upsell block after the delivery
                    step. Because Shopify knows where every fitting is, it can update the checkout without breaking
                    yours.
                  </p>
                  <p>
                    Shopify Functions replace the old Scripts. A Function is a small piece of custom code that runs
                    inside Shopify, very quickly, whenever a basket is priced, shipped or paid for. Shopify’s own
                    help centre says that{' '}
                    <a href={SRC_SCRIPTS} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>as of 30 June 2026 Scripts are deprecated</a>{' '}
                    and any still published have been switched off. If a promotion or shipping rule quietly stopped
                    working over the summer, that is probably why.
                  </p>
                </div>
              </div>
              <div className="card">
                <span className="eyebrow">What Functions and extensions usually do</span>
                <ul className="scope-list yes-list mt-4">
                  <li><b>Tiered and bundle discounts.</b> Buy three, get the fourth at a lower price, or trade-only discounts by company.</li>
                  <li><b>Delivery rules.</b> Hide next-day delivery for oversized items, or rename options to match your courier.</li>
                  <li><b>Payment rules.</b> Offer payment on account only to approved trade buyers.</li>
                  <li><b>Basket validation.</b> Block checkout below a trade minimum or above a stock limit.</li>
                  <li><b>Order routing.</b> Send orders to the right warehouse or store location.</li>
                  <li><b>Checkout fields.</b> Purchase order numbers, gift messages, delivery notes.</li>
                  <li><b>Post-purchase content.</b> Tracking, reorder prompts and surveys on the thank you page.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 8. MIGRATION STEP BY STEP ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Shopify Plus migration</span>
              <h2>How a migration to Shopify Plus runs, step by step</h2>
              <p className="lead mt-4">
                Whether you are coming from Magento, WooCommerce, Salesforce Commerce Cloud or BigCommerce, the
                steps are the same. What changes is where the complexity hides. Here is the order we work in.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {[
                { n: '01', t: 'Audit what you have', d: 'Catalogue structure, customer groups, B2B pricing, extensions or plugins, custom code, integrations and traffic by URL. We write down every behaviour the current store has, including the ones nobody remembers asking for.' },
                { n: '02', t: 'Map it to Shopify Plus', d: 'Each behaviour gets a home: native Shopify, native B2B, Markets, a Shopify Function, a checkout extension, a public app or custom code. Anything that does not fit is flagged early, before you commit to a timeline.' },
                { n: '03', t: 'Build the redirect map', d: 'Shopify uses its own URL patterns, so every product, category and content page needs a permanent redirect to its new address. This protects your Google rankings and is treated as a core deliverable, not an afterthought.' },
                { n: '04', t: 'Test-migrate the data', d: 'Products, variants, images, customers, addresses, order history and trade accounts move in test runs, then get checked against the old store. Customer passwords cannot be moved, so we plan a friendly email for sign-in.' },
                { n: '05', t: 'Rebuild custom logic and integrations', d: 'Functions, checkout extensions and B2B rules replace old extensions and Scripts. ERP, 3PL, email and review integrations are rewired and tested with real order flows.' },
                { n: '06', t: 'Build and test the storefront', d: 'Theme build, then full testing on a staging store: checkout with real payment methods, VAT and duties for each market, trade ordering, and mobile speed.' },
                { n: '07', t: 'Launch at a quiet hour', d: 'A short content freeze, a final data sync, DNS switch and redirect check, with the team watching orders, payments and integrations live.' },
                { n: '08', t: 'Stay for support', d: 'We watch rankings, errors and integrations closely for the first weeks, then move into a monthly support retainer with the same engineers.' },
              ].map((s) => (
                <li key={s.n} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--fm)', fontWeight: 700, fontSize: 15, color: 'var(--orange)', minWidth: 34 }}>{s.n}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{s.t}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="card mt-10" style={{ padding: 0, overflow: 'hidden', maxWidth: 1000 }}>
              <table className="cmp-table">
                <thead>
                  <tr>
                    <th>Coming from</th>
                    <th>Where the work usually hides</th>
                    <th className="fj">What we plan for</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Magento or Adobe Commerce</td><td>Customer groups, tier prices, configurable products, years of extensions and custom modules</td><td className="fj">Native B2B catalogues, Functions for pricing rules, and a big redirect map</td></tr>
                  <tr><td className="feat">WooCommerce</td><td>Dozens of plugins, custom fields in WordPress, blog and product content mixed together</td><td className="fj">Replacing plugins with native features or a small set of apps, moving content cleanly</td></tr>
                  <tr><td className="feat">Salesforce Commerce Cloud</td><td>Deep custom code, complex promotions and tight enterprise integrations</td><td className="fj">Functions and extensions for promotions, careful ERP and order management rewiring</td></tr>
                  <tr><td className="feat">BigCommerce</td><td>Price lists, customer groups and multi-storefront set-ups</td><td className="fj">Mapping to B2B catalogues and Markets or expansion stores</td></tr>
                  <tr><td className="feat">Standard Shopify</td><td>Nothing moves: it is a plan change</td><td className="fj">Building the checkout, B2B or multi-store work you upgraded for</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6" style={{ maxWidth: 820 }}>
              If you are on Magento and not yet sure about leaving, our <a href="/uk/magento">UK Magento agency</a> page
              explains how we decide between staying and moving. Many trade sellers weighing Plus B2B should also read
              our <a href="/uk/b2b-ecommerce">UK B2B ecommerce</a> page.
            </p>
          </div>
        </section>

        <MidPageCTA
          headline={'Not sure whether Shopify Plus is worth it for you?'}
          sub={'Tell us what is straining: trade orders, checkout rules, several regions, or a platform you want to leave. We will give you a free Shopify Plus review with a straight answer on whether Plus, standard Shopify or something else fits, and what the work involves.'}
          label={'Get my free Shopify Plus review'}
        />

        {/* ═══ 9. B2B ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Shopify Plus B2B</span>
                <h2>Shopify Plus B2B: wholesale set up properly, not with tags</h2>
                <div className="stack mt-6">
                  <p>
                    Many UK brands sell to trade on Shopify with a workaround: tag a customer as wholesale, hide
                    prices with an app, and handle anything unusual by email. It works for five trade accounts. It
                    falls apart at fifty.
                  </p>
                  <p>
                    Native B2B on Shopify Plus treats each business as a company. A company has locations (a
                    head office and three shops, say), buyers who can place orders, and a catalogue with its own
                    products and prices. You add payment terms, so approved buyers pay on account, and deposits or
                    partial payments for bigger orders. Retail and wholesale share one admin, one stock pool and
                    one set of product data.
                  </p>
                  <p>
                    The part most agencies skip is the ERP. Trade customers expect their account balance, credit
                    limit and negotiated prices to be right. That data usually lives in NetSuite, Business Central
                    or Sage, so we connect it, rather than asking your team to keep two systems in step by hand.
                  </p>
                </div>
              </div>
              <div className="card">
                <span className="eyebrow">What a Plus B2B build covers</span>
                <ul className="scope-list num-list mt-4">
                  <li><b>Company set-up.</b> Trade accounts moved in bulk, with locations and buyers.</li>
                  <li><b>Catalogues and price lists.</b> Per company or per group, including volume pricing.</li>
                  <li><b>Payment terms.</b> Pay on account, deposits and partial payments where needed.</li>
                  <li><b>Ordering rules.</b> Minimums and quantity steps, enforced with Shopify Functions.</li>
                  <li><b>Trade checkout fields.</b> Purchase order numbers and delivery instructions.</li>
                  <li><b>ERP sync.</b> Prices, stock, credit and invoices kept in step automatically.</li>
                  <li><b>Quick reorder.</b> A simple way for trade buyers to repeat past orders.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 10. INTERNATIONAL + VAT ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Shopify Plus international</span>
                <h2>Selling in GBP and EUR: Shopify Markets, expansion stores and VAT</h2>
                <div className="stack mt-6">
                  <p>
                    Most UK brands going international should start with Shopify Markets. One store shows prices in
                    pounds, euros and other currencies, with local language, domain and duty settings per market.
                    It is less work to run than several stores, because there is one catalogue and one stock pool.
                  </p>
                  <p>
                    Plus expansion stores make sense when markets truly differ: a separate catalogue for the EU, a
                    different brand, local stock from an EU warehouse, or a team that runs its own region. Each
                    expansion store has its own theme and apps, so it adds upkeep. We recommend the smallest set-up
                    that does the job.
                  </p>
                  <p>
                    Tax is where international plans go wrong. Since Brexit, a UK store selling to EU consumers has
                    to decide how import VAT is handled. For low-value goods, the EU Import One Stop Shop (IOSS) lets
                    VAT be collected at checkout and reported in one return, so the customer is not hit with charges
                    at the door. GOV.UK says businesses in{' '}
                    <a href={SRC_IOSS} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>Great Britain must ask an intermediary to register</a>{' '}
                    for IOSS on their behalf. Northern Ireland has its own rules too.
                  </p>
                  <p>
                    We are engineers, not tax advisers, so your accountant makes the tax decisions. We make sure
                    the store shows the right prices, collects the right VAT and duties, and passes clean data to
                    your accounts.
                  </p>
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Markets or expansion store?</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">Same products, different currency</div><div className="scorecard-note">UK, Ireland, EU</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Markets</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Different catalogue per region</div><div className="scorecard-note">range, stock or pricing differ</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Expansion</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">A second brand</div><div className="scorecard-note">own design and apps</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Expansion</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Wholesale alongside retail</div><div className="scorecard-note">shared stock and products</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Native B2B</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Separate trade portal</div><div className="scorecard-note">different look, trade only</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Expansion</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 11. INTEGRATIONS + IMAGE ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Shopify Plus integrations</span>
                <h2>Connecting Shopify Plus to your ERP, warehouse and back office</h2>
                <div className="stack mt-6">
                  <p>
                    A Shopify Plus store is rarely the only system that matters. Orders need to reach the
                    warehouse, stock needs to come back, invoices need to land in the accounts, and trade prices
                    need to match the ERP. When those links are weak, someone on your team fills the gap by hand,
                    and that is where late deliveries and wrong prices start.
                  </p>
                  <p>
                    We build integrations to handle failure properly: retries when a system is busy, alerts when a
                    sync stops, and a clear log of what moved. That is the difference between an integration you
                    trust and one your team double-checks every morning.
                  </p>
                </div>
                <div className="card mt-8" style={{ padding: 8 }}>
                  <img src="/images/uk/shopify-plus/shopify-plus-packing.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A bright UK packing station with parcels, mailers and a laptop showing an order list while an order is packed" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                </div>
              </div>

              <div className="card">
                <span className="eyebrow">Where Shopify Plus plugs in</span>
                <p className="mt-2" style={{ fontSize: 14 }}>
                  The systems UK brands most often run alongside Shopify Plus. If a system has an API, an
                  integration is normally possible. We confirm your exact stack during the review.
                </p>
                <div className="mt-6">
                  <p style={{ fontFamily: 'var(--fm)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: '#B23E13', marginBottom: 4 }}>Finance and ERP</p>
                  <ul className="int-group">
                    <li><b>NetSuite.</b> Orders, stock, pricing and trade accounts in one ERP.</li>
                    <li><b>Microsoft Dynamics 365 Business Central.</b> Stock and trade prices kept in step with the store.</li>
                    <li><b>Sage and Xero.</b> Orders, refunds, fees and payouts reconciled without re-typing.</li>
                  </ul>
                </div>
                <div className="mt-6">
                  <p style={{ fontFamily: 'var(--fm)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: '#B23E13', marginBottom: 4 }}>Orders, stock and fulfilment</p>
                  <ul className="int-group">
                    <li><b>Brightpearl and Linnworks.</b> Stock and order routing across Shopify and marketplaces.</li>
                    <li><b>Your 3PL.</b> A 3PL is a third-party logistics company that stores and ships your stock. We connect its warehouse system so orders flow out and tracking flows back.</li>
                    <li><b>A PIM.</b> One central place for product information, feeding clean data to every store and market.</li>
                  </ul>
                </div>
                <div className="mt-6">
                  <p style={{ fontFamily: 'var(--fm)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: '#B23E13', marginBottom: 4 }}>Customers and marketing</p>
                  <ul className="int-group">
                    <li><b>Klaviyo.</b> Browsing, basket and order events for email and SMS flows.</li>
                    <li><b>Gorgias.</b> Customer service with order data beside every ticket.</li>
                    <li><b>AI agents.</b> Custom <a href="/uk/ai-agents">AI agents</a> that answer order questions from live Shopify data, built for you and owned by you.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 12. AGENCY TYPES COMPARISON ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">Choosing who builds it</span>
              <h2>Shopify Plus Partner agency vs freelancer vs engineering team vs in-house</h2>
              <p className="lead mt-4">
                There is no single right answer. Each option suits a different brand. Here is how they compare on
                the things that matter after launch, not just before it.
              </p>
            </div>
            <div className="card mt-8" style={{ padding: 0, overflow: 'hidden' }}>
              <table className="cmp-table">
                <thead>
                  <tr>
                    <th>What you care about</th>
                    <th>Large Plus Partner agency</th>
                    <th>Freelance developer</th>
                    <th className="fj">Engineering-led agency (us)</th>
                    <th>In-house team</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Best for</td><td>Big brand-led rebuilds with marketing attached</td><td>Small, clearly defined jobs</td><td className="fj">Plus builds and migrations heavy on B2B, checkout and integrations</td><td>Brands with constant, daily development needs</td></tr>
                  <tr><td className="feat">Who does the work</td><td><span className="partial">Varies by project and stage</span></td><td><span className="yes">The person you hired</span></td><td className="fj"><span className="yes">The same senior engineers throughout</span></td><td><span className="yes">Your own staff</span></td></tr>
                  <tr><td className="feat">Cover for holidays and peaks</td><td><span className="yes">Large team</span></td><td><span className="no">One person</span></td><td className="fj"><span className="yes">More than one engineer knows your store</span></td><td><span className="partial">Depends on team size</span></td></tr>
                  <tr><td className="feat">Shopify partner badges</td><td><span className="yes">Usually</span></td><td><span className="partial">Sometimes</span></td><td className="fj"><span className="no">None claimed by us</span></td><td><span className="no">Not applicable</span></td></tr>
                  <tr><td className="feat">Platform advice</td><td><span className="partial">Often Shopify-only</span></td><td><span className="partial">Depends on the person</span></td><td className="fj"><span className="yes">We also build on Magento, so no reason to push Plus</span></td><td><span className="partial">Tied to what the team knows</span></td></tr>
                  <tr><td className="feat">ERP and 3PL integration depth</td><td><span className="partial">Often via partners</span></td><td><span className="partial">Varies</span></td><td className="fj"><span className="yes">Built and supported by us</span></td><td><span className="partial">Varies</span></td></tr>
                  <tr><td className="feat">After launch</td><td><span className="partial">Support tier or handover</span></td><td><span className="partial">If they are free</span></td><td className="fj"><span className="yes">Monthly support from the same team</span></td><td><span className="yes">Always there</span></td></tr>
                </tbody>
              </table>
            </div>
            <div className="stack mt-8" style={{ maxWidth: 820 }}>
              <p>
                A word on the Shopify Plus Partner badge. Shopify runs a partner programme, and agencies that meet
                its criteria can show partner tiers. It is a useful signal. It is not a requirement: any
                competent developer can work on a Plus store once you grant them access. FactoryJet does not hold a
                Shopify Plus Partner badge. If your procurement needs one, pick from the partners below, and we will
                happily tell you so on a call.
              </p>
              <p>
                If you are not sure yet what you need, an independent view helps before you commit to any agency.
                Our <a href="/uk/ecommerce-consultant">UK ecommerce consultant</a> service is built for exactly
                that. For the wider build picture, see our <a href="/uk/ecommerce-development">UK ecommerce development</a> work,
                or our <a href="/services/shopify-plus-agency">US Shopify Plus agency</a> page if you trade in both markets.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ 13. WHO WE WORK WITH ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 740 }}>
              <span className="eyebrow">Who we work with</span>
              <h2>The UK brands Shopify Plus fits best</h2>
              <p className="lead mt-4">
                FactoryJet has worked in commerce since 2014 and served 500+ businesses, from direct-to-consumer
                brands such as Belle Maison to B2B sellers such as Bombay Petals. Three kinds of UK brand make up
                most of our Shopify Plus conversations.
              </p>
            </div>
            <ul className="col-3 mt-12">
              <li className="svc-card">
                <h3>Growing DTC brands</h3>
                <p className="mt-4">Direct-to-consumer brands with big product drops, Black Friday peaks, subscription or bundle offers, and checkout or discount rules that standard Shopify cannot express.</p>
              </li>
              <li className="svc-card">
                <h3>Brands selling retail and trade</h3>
                <p className="mt-4">Makers and wholesalers with trade buyers ordering by email or spreadsheet, who want both on one platform with native B2B and a proper ERP link.</p>
              </li>
              <li className="svc-card">
                <h3>Brands leaving an older platform</h3>
                <p className="mt-4">Merchants on Magento, Adobe Commerce, WooCommerce or Salesforce Commerce Cloud who want less platform upkeep, without losing the rules and integrations they depend on.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* ═══ 14. LONDON + UK DEMAND ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <span className="eyebrow">Shopify Plus agency London and UK-wide</span>
            <h2 style={{ maxWidth: 780 }}>Looking for a Shopify Plus agency in London? We work across the UK</h2>
            <div className="col-6040 mt-8">
              <div>
                <div className="stack">
                  <p>
                    A lot of UK ecommerce is run from London, so &quot;Shopify Plus agency London&quot; is a common
                    search. But none of the work needs anyone in your office. Builds, migrations, Functions and
                    integrations happen in code and on staging stores, with video calls and a shared ticket board.
                  </p>
                  <p>
                    So we work with brands in London, the South East, Manchester, Birmingham, Leeds, Scotland and
                    everywhere between, with the same senior Shopify Plus developers on every account. What matters
                    more than your agency’s postcode is whether the person answering your ticket has seen your code
                    before.
                  </p>
                </div>
                <div className="flex-wrap mt-6">
                  <a className="city-pill" href="/uk/london">London</a>
                  <a className="city-pill" href="/uk/manchester">Manchester</a>
                  <a className="city-pill" href="/uk/birmingham">Birmingham</a>
                  <a className="city-pill" href="/uk/leeds">Leeds</a>
                  <a className="city-pill" href="/uk/shopify-development">Shopify development</a>
                  <a className="city-pill" href="/uk/b2b-ecommerce">B2B ecommerce</a>
                </div>
              </div>

              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--n200)', padding: '14px 18px' }}>
                  <span style={{ fontFamily: 'var(--fm)', fontSize: 10, letterSpacing: '.13em', textTransform: 'uppercase', color: 'var(--n400)' }}>UK · Monthly Search Demand</span>
                  <span style={{ background: '#B23E13', color: '#fff', fontFamily: 'var(--fm)', fontSize: 10, borderRadius: 999, padding: '3px 9px' }}>DataForSEO</span>
                </div>
                <div style={{ padding: '4px 18px 14px' }}>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    {[
                      { kw: 'shopify plus', v: '720', w: '100%', kd: 'The platform itself' },
                      { kw: 'shopify plus cost', v: '320', w: '44%', kd: 'Answered above, qualitatively' },
                      { kw: 'shopify plus agency', v: '210', w: '29%', kd: 'The head term' },
                      { kw: 'shopify plus partner', v: '110', w: '15%', kd: 'We explain the badge honestly' },
                      { kw: 'shopify plus support', v: '110', w: '15%', kd: 'Monthly support retainer' },
                      { kw: 'shopify vs shopify plus', v: '90', w: '13%', kd: 'The comparison table' },
                      { kw: 'shopify plus agency uk', v: '40', w: '6%', kd: 'This page' },
                      { kw: 'shopify plus agency london', v: '40', w: '6%', kd: 'Local, remote-friendly' },
                      { kw: 'shopify plus b2b', v: '40', w: '6%', kd: 'Native B2B section' },
                    ].map((r) => (
                      <li key={r.kw} className="demand-row">
                        <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<span style={{ fontSize: 9, color: 'var(--n400)' }}> searches</span></span></div>
                        <div className="demand-bar"><i style={{ width: r.w }} /></div>
                        <div className="demand-kd">{r.kd}</div>
                      </li>
                    ))}
                  </ul>
                  <p style={{ textAlign: 'center', fontFamily: 'var(--fm)', fontSize: 10, color: 'var(--n400)', marginTop: 10 }}>Source: DataForSEO, United Kingdom, September 2026</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 15. COMPETITOR LISTICLE (self-disclosure, ItemList) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">The honest landscape</span>
              <h2>UK Shopify Plus agencies worth knowing</h2>
              <p className="lead mt-4">
                We would rather you compared than guessed. These Shopify Plus agencies show up again and again in
                UK searches, including us. Several hold Shopify partner tiers and run large marketing teams. Talk
                to a few and pick the fit.
              </p>
            </div>
            <ul className="stack mt-10" style={{ maxWidth: 900 }}>
              {PLUS_AGENCIES.map((a, i) => (
                <li key={a.name} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--fm)', fontWeight: 700, fontSize: 15, color: 'var(--orange)', minWidth: 30 }}>{i + 1}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{a.name}{a.name === 'FactoryJet' && <span style={{ fontFamily: 'var(--fm)', fontSize: 10, background: '#B23E13', color: '#fff', borderRadius: 999, padding: '2px 8px', marginLeft: 8, verticalAlign: 'middle' }}>That is us</span>}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{a.note}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p style={{ fontFamily: 'var(--fm)', fontSize: 11, color: 'var(--n400)', marginTop: 14 }}>
              Agencies named from live UK search results for Shopify Plus agency terms, September 2026. Notes and partner tiers are as each company describes itself on its own website. Listing is not endorsement, and we are one option among them.
            </p>
          </div>
        </section>

        {/* ═══ 16. ENGAGEMENT SHAPES (qualitative, no pricing) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Scope, not packages</span>
                <h2>How a Shopify Plus engagement with us is shaped</h2>
                <div className="stack mt-6">
                  <p>
                    Two brands on the same Shopify Plus plan can need completely different amounts of work. One
                    needs a checkout extension and a few Functions. The other is leaving Salesforce Commerce Cloud
                    with an ERP, a 3PL and four regions. So we do not sell fixed Shopify Plus packages. We look
                    first, then quote a fixed price per stage.
                  </p>
                </div>

                <h3 className="mt-8">The shapes our Shopify Plus work takes</h3>
                <ul className="scope-list num-list mt-4">
                  <li><b>Shopify Plus review.</b> A short, free look at your store or platform and your plans, ending in a straight answer on whether Plus is worth it and what the work involves.</li>
                  <li><b>Plus readiness or store audit.</b> A deeper written audit of theme, apps, checkout, old Scripts, integrations and data, with a ranked list of what to fix or build.</li>
                  <li><b>Build or migration project.</b> A defined project delivered in stages (discovery, build, migration, launch), so you always know what the next stage covers before it starts.</li>
                  <li><b>B2B or checkout project.</b> A focused build of native B2B, checkout extensions or Shopify Functions on an existing Plus store.</li>
                  <li><b>Monthly support retainer.</b> Ongoing Shopify Plus support from the same engineers, with an agreed monthly allowance of time.</li>
                </ul>

                <div className="mt-8">
                  <ModalCTAButton label="Get my free Shopify Plus review" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What moves the scope</span>
                <div className="scorecard-row"><div className="scorecard-metric">Custom design versus a refined theme</div><div className="scorecard-val" style={{ fontSize: 14 }}>Design</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Data and logic coming across</div><div className="scorecard-val" style={{ fontSize: 14 }}>Migration</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Systems connected to the store</div><div className="scorecard-val" style={{ fontSize: 14 }}>Reach</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">B2B, stores and markets</div><div className="scorecard-val" style={{ fontSize: 14 }}>Breadth</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Checkout and Functions work</div><div className="scorecard-val" style={{ fontSize: 14 }}>Depth</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Free review before you commit</div><div className="scorecard-val" style={{ color: 'var(--green)', fontSize: 14 }}>Always</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 17. FAQ (canonical Linear Minimal) ═══ */}
        <section className="sec-lg" id="faq">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>Shopify Plus questions UK brands actually ask</h2>
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

        {/* ═══ 18. FINAL CTA ═══ */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Ready when you are</span>
            <h2>Find out whether Shopify Plus is worth it for your brand</h2>
            <p className="mt-4">
              Send your name and work email. The founder replies within 24 hours to arrange a free Shopify Plus
              review: whether Plus fits, what the build or migration involves, and what to do first. No spam, no
              obligation.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="Get my free Shopify Plus review" region="uk" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/contact" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>Contact FactoryJet</a>
            </div>
          </div>
        </section>

      </main>
        <Footer />
      </div>
    </>
  );
}

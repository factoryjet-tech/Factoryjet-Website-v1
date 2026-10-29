import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import '../ai-agents/ai-agents.css';

/* ─────────────────────────────────────────────────────────────────────────────
   /uk/ecommerce-ai-agents, built 2026-10-29.

   The UK version of /services/ecommerce-ai-agents. Same service, written fresh
   for UK online retailers: UK marketplaces, UK couriers, UK accounting systems,
   HMRC Making Tax Digital, UK GDPR as changed by the Data (Use and Access) Act
   2025, and the EU AI Act for UK stores that sell into the EU. No sentence is
   copied from the US page.

   UK monthly searches (DataForSEO Google Ads, location 2826, pulled
   2026-10-29): "ai for ecommerce" 260, "ai in ecommerce" 260, "ecommerce ai"
   260, "ecommerce chatbot" 30, "ecommerce automation" 30, "ai chatbot for
   ecommerce" 20, "ai tools for ecommerce" 20. "ecommerce ai agents" and "ai
   agents for ecommerce" returned no UK volume. Google's UK question boxes for
   "how much does an ai chatbot cost uk" included "How much does it cost to
   develop an AI chatbot?" and "Is ChatGPT a chatbot or an AI agent?".

   Truth rules for anyone editing this file:
   1. Every law, tax rule, platform fact and price below was read on the linked
      page on 29 October 2026 (SRC map). Re-read the page before changing a fact.
   2. Prices are market ranges from two named UK firms, in the cost FAQ only.
      Never FactoryJet prices. Never a figure for what an agent costs to run.
   3. Client proof: GPSUK (Commerceflo) and Sow Easy (WooCommerce + Odoo, Odoo
      link still in build) only, as src/data/case-studies/index.ts describes
      them. No metrics.
   4. Nothing on the page says where the FactoryJet team is.

   Schema: Service + BreadcrumbList + WebPage + FAQPage. FAQPage mainEntity is
   generated from the same FAQ_ITEMS array the visible FAQ renders.
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL = 'https://factoryjet.com/uk/ecommerce-ai-agents';
const UPDATED = '2026-10-29';
const READ_ON = '29 October 2026';
const TITLE = 'AI Agents for Ecommerce UK: Stores and Marketplaces | FactoryJet';
const H1 = 'Ecommerce AI Agents for UK Online Retailers: Your Store, Your Marketplaces and the Back Office Behind Them';
const DESCRIPTION =
  'We design, build and support AI agents for UK online retailers on any platform: order and returns questions, Amazon.co.uk and eBay listings, trade quotes, stock and Xero.';

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
  { name: 'Ecommerce AI Agents', url: CANONICAL },
];

/* Sources. One map, used by every inline source note AND by the visible
   Sources list near the foot of the page. Each page was opened on 2026-10-29
   and the supporting words read before the claim was written. */
const SRC = {
  govDistance: { label: 'GOV.UK: Online and distance selling for businesses', url: 'https://www.gov.uk/online-and-distance-selling-for-businesses' },
  hmrcMtd: { label: 'GOV.UK: VAT Notice 700/22, Making Tax Digital for VAT', url: 'https://www.gov.uk/government/publications/vat-notice-70022-making-tax-digital-for-vat/vat-notice-70022-making-tax-digital-for-vat' },
  icoDuaa: { label: 'ICO: The Data (Use and Access) Act 2025', url: 'https://ico.org.uk/about-the-ico/what-we-do/legislation-we-cover/data-use-and-access-act-2025/' },
  icoAdm: { label: 'ICO: What are the ADM safeguards? (draft guidance, updated 31 March 2026)', url: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/automated-decision-making/what-are-the-adm-safeguards/' },
  aiActArt50: { label: 'EU AI Act, Article 50: transparency obligations', url: 'https://artificialintelligenceact.eu/article/50/' },
  aiActArt2: { label: 'EU AI Act, Article 2: scope', url: 'https://artificialintelligenceact.eu/article/2/' },
  amzMarketplaces: { label: 'Amazon Selling Partner API: marketplace IDs', url: 'https://developer-docs.amazon/sp-api/docs/marketplace-ids' },
  amzListings: { label: 'Amazon Selling Partner API: Listings Items API', url: 'https://developer-docs.amazon/sp-api/docs/listings-items-api' },
  ebayInventory: { label: 'eBay Developers Program: Inventory API overview', url: 'https://developer.ebay.com/api-docs/sell/inventory/overview.html' },
  brightpearlApi: { label: 'Brightpearl API documentation', url: 'https://api-docs.brightpearl.com/' },
  linnworksApi: { label: 'Linnworks API reference: overview', url: 'https://apidocs.linnworks.net/reference/overview' },
  softomateCost: { label: 'Softomate Solutions: AI chatbot development cost in the UK', url: 'https://www.softomatesolutions.com/blog/ai-chatbot-development-cost-uk/' },
  cloudswitchedCost: { label: 'Cloudswitched: AI software development cost in the UK, 2026', url: 'https://www.cloudswitched.com/blog/ai-software-development-cost-uk-2026' },
} as const;

type SrcKey = keyof typeof SRC;
const SOURCE_KEYS = Object.keys(SRC) as SrcKey[];

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',  label: 'Ecommerce AI agents' },
  { key: 'jobs',    label: 'Store and marketplace jobs' },
  { key: 'systems', label: 'Your systems and safety' },
  { key: 'rules',   label: 'UK and EU rules' },
  { key: 'working', label: 'Cost and working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── Ecommerce AI agents ──
  { category: 'basics', question: 'What is an ecommerce AI agent?',
    answer: 'It is software that does one store job from start to finish. It reads a customer email, a return request, a trade order or a stock report, looks the facts up in your own systems, and prepares the answer, refund, quote or purchase order. A person approves anything that moves money or changes a price. We build each one for your store, and you own it.' },
  { category: 'basics', question: 'Is ChatGPT a chatbot or an AI agent?',
    answer: 'A plain ChatGPT chat answers what you type. It does not hold your store’s API keys, your returns rules or your approval steps. An ecommerce agent is built around a model like it and given those: read access to your orders, a courier tracking lookup, a way to save a draft refund, and rules about when to stop and ask a person. That part is the build.' },
  { category: 'basics', question: 'How is AI used in ecommerce by UK retailers?',
    answer: 'Mostly in four places. Customer service, where most messages are about orders, deliveries and returns. Product data, where listings for Amazon.co.uk, eBay and your own store have to say the same thing. Trade sales, where buyers email orders that someone retypes. And the back office, where orders, stock and payouts have to reach Xero or Sage. We start with whichever costs your team the most hours.' },
  { category: 'basics', question: 'Should we buy an AI app or have a custom agent built?',
    answer: 'Buy the app if it already does the job. Helpdesk tools and your platform’s own AI features handle plenty of standard questions. A custom agent makes sense when the job follows your own rules, crosses two systems such as Shopify and Linnworks, or covers a marketplace the apps ignore. Many stores run both: an app on chat and a built agent on returns or trade orders.' },

  // ── Store and marketplace jobs ──
  { category: 'jobs', question: 'Can an AI agent answer where-is-my-order questions for Royal Mail, DPD and Evri parcels?',
    answer: 'Yes, and it is usually the first job we build. The agent finds the order, reads the tracking number and courier from your store or your shipping software, checks the latest status and replies in the channel the customer used. It only reads data, so the risk is low. We still make it confirm who is asking before it shares an address or a delivery detail.' },
  { category: 'jobs', question: 'Can an agent handle returns and refunds under UK rules?',
    answer: 'It can check each request against your returns policy and the UK cancellation window, then prepare the refund. GOV.UK says customers can cancel most online orders up to 14 days after delivery, and up to 12 months if you never told them about that right. The agent dates every request from the delivery date. A person approves the refund before money goes back through Stripe, Klarna or Clearpay.' },
  { category: 'jobs', question: 'Can an AI agent manage our Amazon.co.uk and eBay listings?',
    answer: 'It can draft and send listing changes through each marketplace’s own API. Amazon’s documentation warns that attributes left out of a full listing update may be dropped, so our agent uses partial updates and previews errors first. On eBay, an inventory item with a SKU must exist before an offer, and the published offer is what becomes the live listing. Price changes stay with a person.' },
  { category: 'jobs', question: 'What about UK marketplaces other than Amazon and eBay?',
    answer: 'Each marketplace has its own seller integration and its own product data rules. Before we quote, we read the integration terms for your seller account and check whether your existing channel software, such as Linnworks or Brightpearl, already lists there. The agent then works on the product data and order flow behind those channels, whichever tool publishes the listing.' },
  { category: 'jobs', question: 'Can an agent handle trade quotes and repeat orders?',
    answer: 'Yes. Trade buyers often email a list of codes and quantities. The agent matches each line to a product, applies that account’s price list, checks stock and saves a draft quote or order for your sales team to send. GPSUK, a UK promotional products supplier, runs its trade store on Commerceflo, where business buyers reorder at their own account prices. The agent work sits on the same kind of data.' },
  { category: 'jobs', question: 'Can an agent draft purchase orders when stock runs low?',
    answer: 'It can. The agent reads stock on hand and recent sales from wherever stock lives, which for many UK sellers is Linnworks, Brightpearl, Mintsoft or an ERP, compares them with the reorder points you set, and drafts a purchase order for your buyer to approve. It never sends a supplier order on its own until you have seen enough correct drafts to change that rule.' },

  // ── Your systems and safety ──
  { category: 'systems', question: 'Which ecommerce platforms do you build agents for?',
    answer: 'Shopify and Shopify Plus, WooCommerce, Adobe Commerce (Magento), BigCommerce, Commerceflo and custom or headless stores. A back-office agent talks to the platform through its admin API, so the platform matters less than you might expect. A customer-facing agent has to fit your theme or front end, which is where most of the platform-specific work sits.' },
  { category: 'systems', question: 'Can the agent work with Linnworks, Brightpearl or Mintsoft?',
    answer: 'Yes, through their APIs. Brightpearl’s API documentation covers sales orders, products and price lists, goods-in and goods-out notes, stock transfers and journals. Linnworks publishes an API for building applications on Linnworks data. When one of these is already the record for stock and orders, the agent reads from it and writes drafts back to it, so your team keeps working in the screen they know.' },
  { category: 'systems', question: 'Can the agent post orders into Xero, Sage or QuickBooks?',
    answer: 'Yes, and for VAT that link matters. HMRC’s Making Tax Digital notice says copy and paste is not a digital link, and that manually moving data between software is not acceptable once it is part of your VAT records. An agent that moves order, refund and fee data by API keeps that chain digital. Your accountant decides which accounts and tax codes each entry posts to.' },
  { category: 'systems', question: 'We run NetSuite, Business Central or Odoo. Can an agent use it?',
    answer: 'Yes. For larger UK sellers the ERP, not the store, usually holds stock, customer prices and credit terms. The agent reads those from NetSuite, Dynamics 365 Business Central, Odoo or Sage Intacct and writes draft orders back. Sow Easy, a UK wholesale client, has a WooCommerce trade store where Odoo stays the master for stock, pricing and product codes. That Odoo link is still being built and tested.' },
  { category: 'systems', question: 'Is it safe to give an AI agent access to our store and payments?',
    answer: 'It is as safe as the key it is given. Each agent gets its own API key with the least access its job needs, starts read-only, and logs every action. Refunds, discounts, price changes and anything touching Stripe, GoCardless, Klarna or Clearpay wait for a person. If the agent misbehaves you can switch off one key without touching the rest of your setup.' },

  // ── UK and EU rules ──
  { category: 'rules', question: 'Does UK GDPR let an AI agent make decisions about customers?',
    answer: 'With safeguards, yes. The Data (Use and Access) Act 2025 received Royal Assent on 19 June 2025 and changed the UK GDPR rules on automated decisions. ICO draft guidance on Article 22C says that for significant decisions made solely by automation, you must give people information about the decision, let them make representations, offer human intervention and let them contest it. We keep a person on refusals, so the agent drafts and staff decide.' },
  { category: 'rules', question: 'Do we have to tell customers they are talking to an AI?',
    answer: 'For shoppers in the EU, plan on it. Article 50 of the EU AI Act says AI systems that talk directly with people must be designed so those people are told they are dealing with an AI, unless that is obvious from the context. The Act’s published timeline applies Article 50 from 2 August 2026. Our shopper-facing agents say they are an AI in their first message, for UK and EU customers alike.' },
  { category: 'rules', question: 'Does the EU AI Act apply to a UK online store?',
    answer: 'It can. Article 2 covers providers placing AI systems on the EU market wherever they are based, and providers and deployers outside the EU where the system’s output is used in the EU. A UK store whose chat agent answers shoppers in Ireland, France or Germany is in that picture. We are not lawyers, so we map where your agents touch EU customers and you confirm the position with your adviser.' },

  // ── Cost and working with us ──
  { category: 'working', question: 'How much does it cost to build an AI agent for a UK online store?',
    answer: 'UK market ranges vary widely. Softomate Solutions, a London agency, lists £15,000 to £40,000 for an advanced build with deep CRM and ERP integration, and £40,000 or more for multiple agents, and its page notes that prices exclude VAT. Cloudswitched, a London IT services firm, lists £15,000 to £40,000 for a reactive agent and £35,000 to £80,000 for a task agent, without saying whether VAT is included. FactoryJet quotes a fixed price in writing after a short scoping call.' },
  { category: 'working', question: 'Can we see it working before we sign?',
    answer: 'Yes. Before any contract we show working software on your own data. For a store agent that usually means twenty or thirty of your real customer emails, return requests or trade orders run through a first version, with its drafts set beside what your team actually sent. You judge it on your own cases, not on a sales demo.' },
  { category: 'working', question: 'What should we send you to get a quote?',
    answer: 'A short written brief is best, and an RFP is welcome. Name the job you want the agent to do first, the systems it touches (store platform, marketplaces, channel or stock software, accounting or ERP, helpdesk), your rough monthly order and message volumes, and what a person must still approve. Attach a few anonymised examples. With that we can come back with a fixed quote for the first phase.' },
  { category: 'working', question: 'Who owns the agent, and what happens after launch?',
    answer: 'You own the code and the repository from day one. Defects are fixed inside the build price for a cover period agreed before work starts. Support after that is optional, each change is quoted and approved, and there is no monthly minimum. If you want, we keep managing the servers, AI models, API connections and maintenance, and FactoryJet quotes that support as a fixed price in writing.' },
  { category: 'working', question: 'Have you worked with UK commerce businesses before?',
    answer: 'Yes. GPSUK, a UK supplier of branded promotional products, runs its trade storefront on Commerceflo, built by FactoryJet, so business buyers reorder at their own account prices. Sow Easy, a UK wholesale client, has a WordPress WooCommerce store linked to Odoo, with the Odoo integration still in build. FactoryJet has worked with more than 500 businesses since 2014, most of them in commerce.' },
];

/* ─── JSON-LD. The Organization is defined once, sitewide; this page only
       references it by @id and never redefines it. ─────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Ecommerce AI Agent Development UK',
      serviceType: 'AI agents for UK online retailers: order and delivery questions, returns and refunds, Amazon.co.uk and eBay listings, trade quotes and reorders, stock and purchase orders, posting to Xero, Sage and ERPs',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      description:
        'FactoryJet designs, builds, tests and supports AI agents for UK online retailers on Shopify, WooCommerce, Adobe Commerce, BigCommerce, Commerceflo and custom stores. Agents work through each system’s API across UK marketplaces, channel and stock software, couriers and accounting, prepare drafts for a person to approve, and are owned by the client.',
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
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL, languages: { 'en-GB': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: TITLE,
    description:
      'AI agents for UK online retailers on any platform: customer messages, returns, Amazon.co.uk and eBay listings, trade orders, stock and Xero. A demo on your data before you sign.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'FactoryJet: AI agents for UK online stores and marketplaces' }],
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

export default function EcommerceAiAgentsUKPage() {
  return (
    <>
      <script id="ld-uk-ecommerce-ai-agents" type="application/ld+json"
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
                  <span className="chip"><span className="dot dot-orange" />Ecommerce AI Agents UK</span>
                  <span className="chip">Any Platform</span>
                  <span className="chip">UK Marketplaces</span>
                </div>
                <h1>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  Your store sells on its own site, on Amazon.co.uk and eBay, and maybe to trade accounts. Orders
                  pass through Linnworks, Brightpearl or Mintsoft, leave with Royal Mail, DPD or Evri, and end up in
                  Xero or Sage. FactoryJet builds AI agents that work across that chain: answering order and returns
                  questions, keeping listings right, drafting trade quotes and purchase orders. A person approves
                  anything that moves money. You own what we build.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses since 2014</span></div>
                  <div className="upd">Last updated<br />{READ_ON}</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm
                    region="uk"
                    source="uk_ecommerce_ai_agents_hero"
                    service="Ecommerce AI Agents"
                    submitLabel="See a demo on my data"
                    trustText="Working software on your own data before you sign. Founder replies within 24 hours."
                  />
                </div>
              </div>

              <div className="card card-top-orange">
                <span className="eyebrow">Jobs UK stores hand an agent first</span>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Where is my parcel?</div><div className="scorecard-note">Royal Mail, DPD and Evri tracking, read only</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Answer</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Returns inside 14 days</div><div className="scorecard-note">checked against policy and delivery date</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Draft</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Amazon.co.uk and eBay listings</div><div className="scorecard-note">partial updates, errors previewed first</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Draft</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Trade orders by email</div><div className="scorecard-note">matched to codes and account prices</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Quote</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Refunds and price changes</div><div className="scorecard-note">Stripe, Klarna, Clearpay, GoCardless</div></div>
                  <div className="scorecard-val" style={{ color: T.green, fontSize: 15 }}>You approve</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 2. ANSWER-FIRST DEFINITION (GEO) ═══ */}
        <section className="sec">
          <div className="wrap">
            <div className="def" style={{ maxWidth: 940 }} data-speakable="true">
              <span className="lab">What does an ecommerce AI agent do for a UK online retailer?</span>
              <p>
                An ecommerce AI agent takes one repeated store job, such as a delivery question, a return, a listing
                update or a trade order, looks up the facts in your store, marketplaces and back-office systems, and
                prepares the reply or the change. Low-risk answers go straight out. Refunds, prices and supplier
                orders wait for a person. FactoryJet builds these agents for any platform, and the client owns them.
              </p>
            </div>
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">Three terms we use a lot</span>
              <p>
                An <b>API</b> is the official door a system offers other software, so an agent can read an order
                without anyone logging in. An <b>API key</b> is the pass for that door, and it decides what the
                agent may see and change. A <b>digital link</b> is HMRC’s name for data moving between software with
                nobody retyping or pasting it.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              Most of an ecommerce agent build is deciding which system owns each fact: stock in Shopify, Linnworks
              or Odoo, trade prices in the store or the ERP, and who approves a refund on a Klarna order. We settle
              that on paper before anything is built.
            </p>
          </div>
        </section>

        {/* ═══ 3. FACTS BAND (verified only) ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              {[
                { v: '14 days', t: 'after delivery: how long UK customers can cancel most online orders', s: 'GOV.UK', u: SRC.govDistance.url },
                { v: 'Not a link', t: 'copy and paste between software, for Making Tax Digital for VAT', s: 'HMRC VAT Notice 700/22', u: SRC.hmrcMtd.url },
                { v: '4 safeguards', t: 'for significant decisions made solely by automation, under UK GDPR Article 22C', s: 'ICO draft guidance', u: SRC.icoAdm.url },
                { v: '2 Aug 2026', t: 'when the EU AI Act’s rule on telling people they are talking to an AI applies', s: 'EU AI Act, Article 50', u: SRC.aiActArt50.url },
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

        {/* ═══ 4. JOBS WE BUILD ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">What the agents do</span>
              <h2>Nine store jobs we build AI agents for</h2>
              <p className="lead mt-4">
                Each agent does one job well before it gets a second. These are the jobs UK sellers bring to us most,
                roughly in the order they tend to build them.
              </p>
            </div>
            <ul className="col-3 mt-12">
              <li className="svc-card">
                <h3>Delivery questions</h3>
                <p className="mt-4">The agent reads the order, the courier and the tracking number, checks the latest Royal Mail, DPD or Evri status and replies by email, chat or marketplace message. It confirms who is asking before sharing an address.</p>
              </li>
              <li className="svc-card">
                <h3>Returns and refunds</h3>
                <p className="mt-4">Each request is checked against your policy and dated from delivery, so the 14-day cancellation window is applied the same way every time. The agent prepares the refund and a person releases it.</p>
              </li>
              <li className="svc-card">
                <h3>Amazon.co.uk listings</h3>
                <p className="mt-4">Changes go through Amazon’s Selling Partner API on the UK marketplace (ID A1F83G8C2ARO7P). We use partial updates, because Amazon warns that attributes left out of a full update may be dropped.</p>
              </li>
              <li className="svc-card">
                <h3>eBay UK offers</h3>
                <p className="mt-4">On eBay’s Inventory API an item record with your SKU comes first, then an offer, and publishing the offer creates the live listing. The agent keeps the item data clean so offers publish without errors.</p>
              </li>
              <li className="svc-card">
                <h3>Other UK marketplaces</h3>
                <p className="mt-4">Each other marketplace you sell on has its own product rules and integration route. We read the integration terms for your seller account before we quote, and the agent prepares the product data behind it, whichever connector publishes it.</p>
              </li>
              <li className="svc-card">
                <h3>Trade quotes and reorders</h3>
                <p className="mt-4">A buyer emails twenty codes and quantities. The agent matches each line, applies that account’s prices, checks stock and saves a draft for your sales team. See our <a href="/uk/b2b-ecommerce" style={inlineLink}>B2B ecommerce</a> work.</p>
              </li>
              <li className="svc-card">
                <h3>Stock and purchase orders</h3>
                <p className="mt-4">Stock and sales are read from Linnworks, Brightpearl, Mintsoft or your ERP and compared with your reorder points. The agent drafts the purchase order. Your buyer sends it.</p>
              </li>
              <li className="svc-card">
                <h3>Orders into the books</h3>
                <p className="mt-4">Sales, refunds and fees post to Xero, Sage or QuickBooks by API, on the accounts and tax codes your accountant chooses. Our <a href="/uk/shopify-xero-integration" style={inlineLink}>Shopify Xero integration</a> page covers the detail.</p>
              </li>
              <li className="svc-card">
                <h3>Customer service triage</h3>
                <p className="mt-4">Messages are sorted by what they need: answered, drafted for a person, or escalated. For a support desk built around agents, see <a href="/uk/ai-customer-service" style={inlineLink}>AI customer service</a>.</p>
              </li>
            </ul>
            <Sources ids={['amzMarketplaces', 'amzListings', 'ebayInventory', 'govDistance']} />
          </div>
        </section>

        {/* ═══ 5. SYSTEMS TABLE ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <span className="eyebrow">Your systems</span>
            <h2 style={{ maxWidth: 780 }}>What the agent reads, what it drafts, and what stays with your team</h2>
            <p className="lead mt-4" style={{ maxWidth: 780 }}>
              The same rule runs through every system: read freely, write drafts, and leave money and prices to a
              person until the logs show the agent follows your rules.
            </p>
            <div className="card mt-8" style={{ padding: 0, overflow: 'hidden' }}>
              <table className="cmp-table">
                <thead>
                  <tr>
                    <th>System</th>
                    <th className="fj">The agent reads</th>
                    <th>The agent drafts</th>
                    <th>A person approves</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Store: Shopify, WooCommerce, Adobe Commerce, BigCommerce, Commerceflo</td><td className="fj"><span className="yes">Orders, customers, products</span></td><td><span className="partial">Replies, return records</span></td><td><span className="no">Refunds, discounts</span></td></tr>
                  <tr><td className="feat">Marketplaces: Amazon.co.uk, eBay UK</td><td className="fj"><span className="yes">Orders, listing errors</span></td><td><span className="partial">Listing updates</span></td><td><span className="no">Price changes</span></td></tr>
                  <tr><td className="feat">Channel and stock: Linnworks, Brightpearl, Mintsoft</td><td className="fj"><span className="yes">Stock, despatch, tracking</span></td><td><span className="partial">Purchase orders</span></td><td><span className="no">Supplier orders</span></td></tr>
                  <tr><td className="feat">Accounting: Xero, Sage 50, Sage 200, QuickBooks UK</td><td className="fj"><span className="yes">Invoices, payment status</span></td><td><span className="partial">Sales, refund and fee entries</span></td><td><span className="no">Account and tax code mapping</span></td></tr>
                  <tr><td className="feat">ERP: NetSuite, Business Central, Odoo, Sage Intacct</td><td className="fj"><span className="yes">Customer prices, credit terms</span></td><td><span className="partial">Quotes, sales orders</span></td><td><span className="no">Credit over limit</span></td></tr>
                  <tr><td className="feat">Payments: Stripe, GoCardless, Klarna, Clearpay</td><td className="fj"><span className="yes">Payment and refund status</span></td><td><span className="partial">Refund requests</span></td><td><span className="no">Every refund, at first</span></td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6" style={{ maxWidth: 820 }}>
              Brightpearl’s API documentation covers sales orders, products and price lists, goods-in and goods-out
              notes, stock transfers and journals, which is why it is a common place for an agent to read from. Linnworks
              publishes an API for applications built on Linnworks data. Where neither is in place, we read from the
              store or the ERP directly.
            </p>
            <Sources ids={['brightpearlApi', 'linnworksApi']} />
          </div>
        </section>

        <MidPageCTA
          headline={'Send us twenty real customer emails. We show you what an agent would have done.'}
          sub={'Pick one job: delivery questions, returns, listings or trade orders. On a short call with the founder we agree the systems it touches, then we run a first version on your own examples before you sign anything.'}
          label={'See a demo on my data'}
        />

        {/* ═══ 6. UK AND EU RULES ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 820 }}>
              <span className="eyebrow">Selling online from the UK</span>
              <h2>Four UK and EU rules an ecommerce agent has to respect</h2>
              <div className="stack mt-6">
                <p>
                  <b>Cancellations and returns.</b> GOV.UK says customers can cancel most online orders up to 14 days
                  after delivery. If you never told them about that right, they can cancel at any time in the next 12
                  months. A returns agent has to know the delivery date and whether the right was explained, so it
                  reads both from the order before it says yes or no.
                </p>
                <p>
                  <b>Making Tax Digital for VAT.</b> HMRC’s notice defines a digital link as data moved electronically
                  with no manual step, says copy and paste does not count, and says that once data sits in your VAT
                  records any further transfer must use digital links. An agent that posts orders and refunds to Xero
                  or Sage by API keeps that chain intact. One that writes a spreadsheet for someone to paste does not.
                </p>
                <p>
                  <b>UK GDPR after the Data (Use and Access) Act 2025.</b> The Act received Royal Assent on 19 June
                  2025, and the ICO says its data protection changes are now in force. The ICO’s draft guidance on
                  automated decisions lists four safeguards for significant decisions made solely by automation:
                  information, the chance to make representations, human intervention and the right to contest. We
                  design agents so that refusals go to a person.
                </p>
                <p>
                  <b>The EU AI Act, if you sell into the EU.</b> Article 2 reaches providers and deployers outside the
                  EU when an AI system’s output is used in the EU. Article 50 says systems that talk directly with
                  people must tell them they are dealing with an AI, unless that is obvious, and the Act’s timeline
                  applies it from 2 August 2026. Our shopper-facing agents say so in their first message.
                </p>
              </div>
              <Sources ids={['govDistance', 'hmrcMtd', 'icoDuaa', 'icoAdm', 'aiActArt2', 'aiActArt50']} />
              <p style={srcNote}>
                We are not lawyers or tax advisers. We map where an agent touches these rules, and you confirm the
                position with your accountant or solicitor.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ 7. APP OR CUSTOM ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <span className="eyebrow">Side by side</span>
            <h2 style={{ maxWidth: 760 }}>Off-the-shelf AI app or a custom ecommerce agent</h2>
            <p className="lead mt-4" style={{ maxWidth: 760 }}>
              We tell plenty of UK sellers to start with an app. This is how we decide which way a job should go.
            </p>
            <div className="card mt-8" style={{ padding: 0, overflow: 'hidden' }}>
              <table className="cmp-table">
                <thead>
                  <tr>
                    <th>Question</th>
                    <th className="fj">Custom agent (FactoryJet)</th>
                    <th>Helpdesk or platform AI app</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Job follows standard rules</td><td className="fj"><span className="partial">Works, may be more than you need</span></td><td><span className="yes">Usually the right start</span></td></tr>
                  <tr><td className="feat">Job crosses two systems (store and Linnworks, store and ERP)</td><td className="fj"><span className="yes">Built for it</span></td><td><span className="partial">Only if a connector exists</span></td></tr>
                  <tr><td className="feat">UK marketplaces beyond Amazon and eBay</td><td className="fj"><span className="yes">Scoped per channel</span></td><td><span className="no">Often not covered</span></td></tr>
                  <tr><td className="feat">Trade prices and credit terms</td><td className="fj"><span className="yes">Read from your ERP</span></td><td><span className="partial">Limited</span></td></tr>
                  <tr><td className="feat">Who owns the code</td><td className="fj"><span className="yes">You, from day one</span></td><td><span className="no">The vendor</span></td></tr>
                  <tr><td className="feat">Time to first answer</td><td className="fj"><span className="partial">Weeks, after a demo on your data</span></td><td><span className="yes">Days</span></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══ 8. PROOF ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">UK commerce work</span>
                <h2>Two UK trade sellers whose data an agent would work on</h2>
                <div className="stack mt-6">
                  <p>
                    <b>GPSUK</b> supplies branded promotional products to UK businesses, a trade where buyers reorder
                    the same lines and often need a quote first. FactoryJet built its trade storefront on Commerceflo,
                    where business buyers log in, see their own account prices and move from quote to order without
                    anyone retyping it. <a href="/case-studies/gpsuk-promotional-products" style={inlineLink}>Read the GPSUK case study</a>.
                  </p>
                  <p>
                    <b>Sow Easy</b> is a UK wholesale client with a WordPress WooCommerce trade store, where Odoo stays
                    the master for stock, pricing and product codes. The Odoo integration is still in build and being
                    tested on staging. <a href="/case-studies/sow-easy-distributor-portal" style={inlineLink}>Read the Sow Easy case study</a>.
                  </p>
                  <p>
                    Neither is described here as an AI agent project. They show the part that decides whether an
                    agent works: one owner for each fact, and clean links between the store and the system behind it.
                  </p>
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Our terms</span>
                <ul className="scope-list num-list mt-4">
                  <li><b>Demo before you sign.</b> Working software on your own data before any contract.</li>
                  <li><b>Fixed price per phase.</b> Each phase is scoped, priced and signed on its own.</li>
                  <li><b>You own it.</b> The code and the repository are yours from day one.</li>
                  <li><b>Your accounts, at cost.</b> AI and hosting can run in your own accounts at cost, with no markup.</li>
                  <li><b>Defect cover included.</b> Defects are fixed inside the build price for a cover period agreed before work starts.</li>
                  <li><b>Support is optional.</b> Each change is quoted and approved, with no monthly minimum.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 9. HOW WE BUILD (NUMBERED STEPS) ═══ */}
        <section className="sec-lg" id="how-we-build">
          <div className="wrap">
            <div style={{ maxWidth: 740 }}>
              <span className="eyebrow">How we work</span>
              <h2>How we build an ecommerce AI agent, in seven steps</h2>
              <p className="lead mt-4">
                The steps are the same for a delivery-question agent and a trade-order agent. What changes is how many
                systems step three has to cover.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {[
                { n: '01', t: 'Pick one job and count it', d: 'We take a month of the messages, returns, listing errors or trade orders behind the job and sort them by type. That count becomes the brief and the test set.' },
                { n: '02', t: 'Write down who owns each fact', d: 'Stock, prices, tracking, refunds and customer details each get one home: the store, Linnworks, the ERP or Xero. Where two systems disagree, the map says which wins.' },
                { n: '03', t: 'Agree the keys and the approvals', d: 'Each system gets an API key made for the agent, with the least access it needs. We list every action that waits for a person, and you sign that list.' },
                { n: '04', t: 'Show it on your own data', d: 'Before a contract, a first version runs on twenty or thirty of your real cases, with its drafts beside what your team sent. You decide from that.' },
                { n: '05', t: 'Build and test on a copy', d: 'The agent is built against a staging store or sandbox accounts. Awkward cases go through first: a part refund, a Klarna order, an EU customer, a missing SKU.' },
                { n: '06', t: 'Run beside the team', d: 'For the first weeks the agent drafts and your team sends. We compare the two daily and adjust the rules where they differ.' },
                { n: '07', t: 'Go live and stay on', d: 'Low-risk answers go out on their own. Money and prices stay with a person until you change that rule. The same team supports the agent, and you own the code.' },
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

        {/* ═══ 10. BRIEF / RFP ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Send us a brief</span>
                <h2>What to put in a brief or RFP for an ecommerce agent</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  The best leads we get are a page or two naming the job and the systems. An RFP from your
                  procurement team is welcome too. With either, we can reply with a fixed quote for the first phase.
                </p>
                <p className="mt-6" style={{ maxWidth: 560 }}>
                  FactoryJet quotes the build, and any support you choose, as fixed prices in writing after a short
                  scoping call. If you want, we keep managing the servers, AI models, API connections and maintenance.
                </p>
                <div className="mt-8">
                  <ModalCTAButton label="Send my brief" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Six things a good brief names</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">The first job</div><div className="scorecard-note">delivery questions, returns, listings, trade orders</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>1</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Store platform and marketplaces</div><div className="scorecard-note">every channel you sell on</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>2</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Stock and channel software</div><div className="scorecard-note">Linnworks, Brightpearl, Mintsoft or an ERP</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>3</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Accounting system</div><div className="scorecard-note">Xero, Sage, QuickBooks UK, NetSuite, Business Central</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>4</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Rough monthly volumes</div><div className="scorecard-note">orders, messages, returns, trade orders</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>5</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">What a person must approve</div><div className="scorecard-note">and a few anonymised examples</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>6</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 11. RELATED UK PAGES ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">Related</span>
              <h2>Agents across the business, and the store underneath them</h2>
              <div className="stack mt-6">
                <p>
                  If the agent is part of a wider plan outside the store, our <a href="/uk/ai-agents" style={inlineLink}>UK AI agents</a> page
                  covers sales, operations and finance work. If the store itself needs building or rebuilding first,
                  see <a href="/uk/ecommerce-development" style={inlineLink}>ecommerce development in the UK</a> and{' '}
                  <a href="/uk/woocommerce" style={inlineLink}>WooCommerce development</a>.
                </p>
                <p>
                  For US marketplaces, including Walmart, see the <a href="/services/ecommerce-ai-agents" style={inlineLink}>US ecommerce AI agents</a> page.
                </p>
              </div>
              <div className="flex-wrap mt-6">
                <a className="city-pill" href="/uk/ai-agents">AI agents UK</a>
                <a className="city-pill" href="/uk/ai-customer-service">AI customer service UK</a>
                <a className="city-pill" href="/uk/shopify-xero-integration">Shopify Xero integration</a>
                <a className="city-pill" href="/uk/b2b-ecommerce">B2B ecommerce UK</a>
                <a className="city-pill" href="/uk/ecommerce-development">Ecommerce development UK</a>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 12. SOURCES ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Method</span>
              <h2>Sources, read on {READ_ON}</h2>
              <p className="lead mt-4">
                Every rule, platform fact and price range on this page was read on the pages below on that day. Laws
                change and vendors update their pages, so open the linked page before you act on a figure.
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

        {/* ═══ 13. FAQ (canonical Linear Minimal) ═══ */}
        <section className="sec-lg" id="faq">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>Ecommerce AI agent questions from UK retailers and their finance teams</h2>
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

        {/* ═══ 14. FINAL CTA (the only dark section) ═══ */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Ready when you are</span>
            <h2>See an agent work on your own orders before you sign</h2>
            <p className="mt-4">
              Send your name and work email, or a brief. The founder replies within 24 hours to agree one job and
              the systems it touches, then we run a first version on your real examples. No obligation.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="See a demo on my data" region="uk" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/uk/ai-agents" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>See AI agents UK</a>
            </div>
          </div>
        </section>

      </main>
        <Footer />
      </div>
    </>
  );
}

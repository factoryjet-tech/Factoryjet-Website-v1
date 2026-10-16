import type { Metadata } from 'next';
import Link from 'next/link';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import HeroInlineForm from '@/components/HeroInlineForm';
import MidPageCTA from '@/components/v2/MidPageCTA';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/ai-quoting-software (new, 2026-10-17)

   Demand (DataForSEO, US, read 17 Oct 2026): "ai quoting" 2,900/mo KD 7,
   "ai quoting software" 1,900 KD 4 (CPC $79.64), "cpq software" 1,600 KD 44,
   "quoting software" 590 KD 21, "ai estimating software" 390 KD 23,
   "manufacturing quoting software" 210 KD 0, "sales quoting software" 170,
   "quote automation" 170 KD 0, "quote to cash software" 140 KD 0. The SERP is
   SaaS vendors and listicles with Reddit at #1, so a "tool or custom agent"
   page has room. This is the job behind the pricing-agent deals we quote.

   Vendor facts were read on each vendor's own page on 17 Oct 2026. Only
   published figures are quoted; vendors that publish none are said to publish
   none. No FactoryJet prices, no running-cost figures.

   Schema: WebPage + Service + FAQPage (from FAQ_ITEMS, the array <FAQ>
   renders) + BreadcrumbList (from BREADCRUMB_ITEMS).
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL_URL = 'https://factoryjet.com/services/ai-quoting-software';
const PAGE_TITLE = 'AI Quoting Software or a Custom Quoting Agent | FactoryJet';
const PAGE_DESC =
  'AI quoting software compared with a custom quoting agent built on your own price list. Salesforce, HubSpot, DealHub and Paperless Parts pricing as published, and when a custom agent is the better fit.';
const PAGE_PUBLISHED = '2026-10-17';
const PAGE_MODIFIED = '2026-10-17';
const CHECKED_ON = '17 October 2026';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: CANONICAL_URL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet: AI quoting software and custom quoting agents' }],
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: PAGE_TITLE, description: PAGE_DESC, images: ['https://factoryjet.com/og-default.png'] },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'AI Quoting Software', url: CANONICAL_URL },
];

/* ── Vendors, as each publishes on its own pricing page. ─────────────────── */
const SOURCES = {
  salesforce: 'https://www.salesforce.com/sales/revenue-lifecycle-management/pricing/',
  hubspot: 'https://www.hubspot.com/products/commerce/cpq',
  dealhub: 'https://dealhub.io/pricing/',
  paperless: 'https://www.paperlessparts.com/pricing/',
};

const VENDORS = [
  {
    name: 'Salesforce Revenue Cloud',
    fit: 'Teams already selling in Salesforce',
    price: 'Growth $150 and Advanced $200 per user a month, billed annually. Growth lists "Quoting & Configurator"; Advanced adds "AI & Analytics".',
    src: SOURCES.salesforce,
  },
  {
    name: 'HubSpot CPQ',
    fit: 'Teams already selling in HubSpot',
    price: 'CPQ needs a Revenue Hub Professional or Enterprise seat. The CPQ page sends you to a separate pricing page and states no figure.',
    src: SOURCES.hubspot,
  },
  {
    name: 'DealHub',
    fit: 'Sales teams with complex price books and approvals',
    price: 'No prices published. The pricing page offers "Request Pricing" and lists AI tools for conversational quoting.',
    src: SOURCES.dealhub,
  },
  {
    name: 'Paperless Parts',
    fit: 'Machine shops and contract manufacturers',
    price: 'No prices published. The pricing page asks you to request pricing information.',
    src: SOURCES.paperless,
  },
  {
    name: 'A custom quoting agent',
    fit: 'Pricing rules that live in spreadsheets, PDFs and people',
    price: 'One fixed price per phase, in writing, after a scoping call. Runs in your own accounts, with no per-seat license from us.',
    src: '',
  },
];

const PICK_A_TOOL = [
  'Your reps already work in Salesforce or HubSpot and the price book fits its product catalog.',
  'Every quote is built from a fixed list of SKUs, options and discount rules.',
  'Requests arrive through a form or the CRM, not as PDFs, drawings or long emails.',
  'A per-user license is fine for the number of people who quote.',
];

const BUILD_AN_AGENT = [
  'Your real pricing lives in a spreadsheet, an estimator’s head or a cost model the tools cannot hold.',
  'Requests arrive as emails, PDFs, drawings, spec sheets or site photos that someone reads by hand.',
  'The quote has to land in QuickBooks, NetSuite, Odoo or an ERP the tool does not write to.',
  'Margins, freight, lead times or install labor change the price line by line.',
  'Many people touch a quote, so per-seat pricing adds up faster than the quoting itself.',
];

const AGENT_STEPS = [
  { t: 'Reads the request', d: 'The email, PDF, RFQ, drawing or form, wherever it arrives.' },
  { t: 'Pulls out the lines', d: 'Products, quantities, specs and the dates the buyer needs.' },
  { t: 'Matches your catalog', d: 'Each line matched to your SKUs, or flagged when nothing matches.' },
  { t: 'Applies your price rules', d: 'Price list, customer tier, margin floor, freight and lead time.' },
  { t: 'Drafts the quote', d: 'In your CRM, ERP or QuickBooks, in your own quote template.' },
  { t: 'A person approves', d: 'Your estimator checks the draft and the reasons behind each price.' },
  { t: 'Learns from edits', d: 'Changes your team makes to drafts feed back into the rules, with your sign-off.' },
];

const WHO = [
  { t: 'Manufacturers', d: 'RFQs with drawings and tolerances, priced from material, machine time and margin.', href: '/services/manufacturing-ai-agents' },
  { t: 'Distributors and wholesalers', d: 'Long line-item requests priced from a customer-specific price list.', href: '/services/sales-order-automation-ai-agents' },
  { t: 'Contractors and installers', d: 'Project quotes built from site details, specs and labor rates.', href: '/services/construction-ai-agents' },
  { t: 'Bid and tender teams', d: 'RFQ packs read and summarized, with a draft bid for review.', href: '/services/ai-agent-development/rfq-bidding-agent' },
];

const PHASES = [
  { t: 'Scoping call', d: 'Bhavesh runs it. Where requests arrive, where your prices live, where the quote has to land, and who approves.' },
  { t: 'Demo on your data', d: 'Before you sign, the agent drafts quotes from a sample of your own past requests, so you compare its prices with what your team sent.' },
  { t: 'Pilot', d: 'One product line or one request channel live, with every draft approved by your team. Paid at milestones.' },
  { t: 'Production', d: 'More products, more channels and the edge cases the pilot found, with an alert when a request cannot be priced.' },
  { t: 'Rollout', d: 'More teams, locations or systems, each scoped and priced on its own. Support is optional, with no monthly minimum.' },
];

/* ── FAQ. One array: rendered by <FAQ> and used for the FAQPage JSON-LD. ── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'What it is' },
  { key: 'tools', label: 'Tools and cost' },
  { key: 'build', label: 'Custom agent' },
  { key: 'fit', label: 'Who it fits' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  { category: 'basics', question: 'What is AI quoting software?', answer: 'AI quoting software reads a quote request, fills in products and prices from your catalog and price rules, and drafts a quote for a person to approve. Some tools work only inside their own CRM. A custom quoting agent does the same job inside the systems and pricing rules a business already has.' },
  { category: 'basics', question: 'How is AI quoting different from CPQ software?', answer: 'CPQ, short for configure, price, quote, guides a rep through building a quote from a product catalog. AI quoting adds the reading: it takes the request as it arrives, an email, a PDF or a drawing, and does the first draft itself. Many CPQ tools now add AI features on top, such as Salesforce Revenue Cloud Advanced, which lists AI and analytics.' },
  { category: 'basics', question: 'Which AI tool is best for quoting?', answer: 'It depends on where your prices live. If your team sells in Salesforce or HubSpot and the price book fits their catalog, their CPQ tools are the shortest route. If your pricing sits in spreadsheets, cost models or an estimator’s experience, and requests arrive as PDFs or drawings, a quoting agent built on your own rules usually fits better.' },
  { category: 'basics', question: 'Can ChatGPT make a quotation?', answer: 'ChatGPT can write a quote document if you paste in the products and prices. It cannot see your price list, your customer tiers or your stock unless someone connects them, and nothing stops it inventing a price. A quoting agent connects to your real data, applies fixed price rules, and shows a person the reason for every line before anything is sent.' },
  { category: 'basics', question: 'Will the AI send quotes to customers on its own?', answer: 'Not on our builds unless you decide it should. The agent drafts the quote and a person on your team approves it. Some teams later let low-risk repeat quotes go out automatically, but that is a decision you make once the agent has a track record on your own requests.' },
  { category: 'basics', question: 'How accurate is AI quoting?', answer: 'Accuracy depends on how clear your price rules are. The agent applies fixed rules for the price itself and uses AI for reading the request. Before you sign, we run it on a sample of your past requests and compare its drafts with the quotes your team actually sent, so you see the accuracy on your own data.' },
  { category: 'tools', question: 'What does Salesforce Revenue Cloud cost?', answer: `On ${CHECKED_ON} Salesforce listed Revenue Cloud Growth at $150 and Revenue Cloud Advanced at $200 per user a month, billed annually. Growth lists quoting and a product configurator; Advanced adds contracts, invoicing and AI and analytics. Your own Salesforce licenses are a separate cost.` },
  { category: 'tools', question: 'Does HubSpot have quoting software?', answer: `Yes. On ${CHECKED_ON} HubSpot’s CPQ page said you need a Revenue Hub Professional or Enterprise seat to use its CPQ, and pointed to a separate pricing page rather than stating a price. It suits teams whose deals and products already live in HubSpot.` },
  { category: 'tools', question: 'What is the best quoting software for manufacturing?', answer: 'For machine shops quoting from CAD files, Paperless Parts is built for that job; it published no prices on its pricing page on 17 October 2026. Manufacturers whose costs depend on their own routings, materials and margins, or who quote from emailed RFQs, often need a quoting agent that uses their own cost model.' },
  { category: 'tools', question: 'Is there free quoting software?', answer: 'Basic quote templates exist in free invoicing and CRM tools, and they work when you type every line yourself. Free tools do not read requests or apply your price rules. The time AI quoting saves is in the reading and the first draft, which free templates leave to your team.' },
  { category: 'tools', question: 'Why do some vendors not publish prices?', answer: 'Enterprise quoting tools such as DealHub and Paperless Parts price by team size, features and integrations, so their pricing pages ask you to request a quote. That makes it hard to compare costs up front. Ask each vendor for the full yearly figure, including add-ons and implementation, before you compare.' },
  { category: 'tools', question: 'How much does a custom quoting agent cost?', answer: 'We quote one fixed price per phase in writing after a scoping call, starting with a pilot on one product line or one request channel. The agent runs in your own accounts, so there is no per-seat license from us. AI usage and hosting are billed to your accounts at cost.' },
  { category: 'build', question: 'What does a custom quoting agent do?', answer: 'It reads each request, pulls out the lines, matches them to your catalog, applies your price rules, drafts the quote in your CRM, ERP or QuickBooks, and sends it to a person to approve. Anything it cannot match or price is flagged with the reason, instead of being guessed.' },
  { category: 'build', question: 'Which systems can a quoting agent work with?', answer: 'The ones you already use: Salesforce, HubSpot, QuickBooks, NetSuite, Odoo and other ERPs, shared inboxes, PDFs, spreadsheets and drawing files. The quote lands where your team already looks, in your own quote template.' },
  { category: 'build', question: 'Can it read drawings and spec sheets?', answer: 'It can read PDFs, scans and common drawing exports to pull out part numbers, quantities, dimensions and notes. What it reads is checked against the source before it is used, and anything unclear goes to your estimator with the page attached.' },
  { category: 'build', question: 'Do we see it working before we sign?', answer: 'Yes. Before any contract, the agent drafts quotes from a sample of your own past requests, with names removed if you prefer. You compare its drafts with what your team sent and decide from that.' },
  { category: 'build', question: 'How long does a quoting agent take to build?', answer: 'The pilot covers one product line or one request channel, so it is the shortest phase. Each later phase adds products, channels or teams. You get a dated plan with the fixed price for each phase before it starts.' },
  { category: 'build', question: 'Who owns the agent and the data?', answer: 'You do. The code and repository are yours from day one, the agent runs in your own accounts, and your price lists and customer data stay in your systems. If you stop working with us, the agent keeps running and any developer can take it over.' },
  { category: 'build', question: 'What happens after launch?', answer: 'Defects found after launch are fixed inside the build price for a cover period agreed before work starts. After that, support is optional. Each change, such as a new product line or price rule, is quoted and approved before we do it, and there is no monthly minimum.' },
  { category: 'fit', question: 'Is AI quoting worth it for a small team?', answer: 'It is worth it when quoting is the bottleneck: requests wait days for a reply, or one estimator holds all the pricing knowledge. Count how many quotes you send each week and how long each takes. If that time is a large share of someone’s week, the agent pays for itself sooner.' },
  { category: 'fit', question: 'Does AI quoting work for contractors and installers?', answer: 'Yes, when quotes are built from site details, specs and labor rates that follow rules. The agent reads the request and the attached specs, applies your rates and margins, and drafts the project quote for your estimator to check.' },
  { category: 'fit', question: 'What about AI estimating software for construction takeoff?', answer: 'Takeoff tools such as those that measure quantities from plans solve a different step: counting. A quoting agent prices what has been counted and turns it into a quote in your systems. Some teams use both, with the agent picking up the takeoff output.' },
  { category: 'fit', question: 'How do we start?', answer: 'Use the form on this page or book a call with the founder. Name and email are enough to start. In the next step you can add the systems involved and attach a sample request or your current quote template. Bhavesh replies within 24 hours.' },
];

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL_URL}#webpage`,
      url: CANONICAL_URL,
      name: PAGE_TITLE,
      description: PAGE_DESC,
      datePublished: PAGE_PUBLISHED,
      dateModified: PAGE_MODIFIED,
      isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
    },
    {
      '@type': 'Service',
      name: 'Custom AI Quoting Agent Development',
      serviceType: 'AI Quoting Software',
      description: PAGE_DESC,
      provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
      areaServed: { '@type': 'Country', name: 'United States' },
      url: CANONICAL_URL,
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQ_ITEMS.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
  ],
};

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="h-4 w-4 flex-shrink-0">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AiQuotingSoftwarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />

      <SiteHeader />

      <main className="bg-fj-cream">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* 1. HERO (light) */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream pt-12 pb-14 md:pt-14 md:pb-16">
          <div className="mx-auto max-w-[1200px] px-6 md:px-8">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F05A28]/30 bg-white px-3 py-1.5">
                  <span className="font-fj-mono text-xs font-bold tracking-wide text-[#B23E13]">AI QUOTING &middot; UNITED STATES</span>
                </div>

                <h1 className="font-fj-display text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-fj-ink sm:text-5xl lg:text-[3.2rem]">
                  AI quoting software, or a quoting agent built on your own price list.
                </h1>

                <p className="mt-5 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-neutral-600">
                  Quoting tools such as Salesforce Revenue Cloud and HubSpot CPQ work when your prices fit their
                  catalog. When your prices live in spreadsheets and your requests arrive as PDFs and drawings, we build
                  a quoting agent that reads the request, applies your rules and drafts the quote for your team to
                  approve.
                </p>

                <p className="mt-4 max-w-2xl font-fj-body text-lg leading-relaxed text-fj-ink">
                  Before you sign, it drafts quotes from your own past requests, so you can compare them with what your
                  team actually sent.
                </p>

                <div className="mt-6">
                  <HeroInlineForm
                    region="us"
                    source="us_services_ai_quoting_hero"
                    service="AI Quoting Agent"
                    submitLabel="See a demo on my data"
                    trustText="Working software on your own data before you sign. Founder replies within 24 hours."
                  />
                </div>

                <div className="mt-5">
                  <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 font-fj-body text-sm font-semibold text-fj-ink hover:opacity-70">
                    Talk to the founder
                    <Arrow />
                  </Link>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-fj-neutral-200 pt-5 font-fj-mono text-xs text-fj-neutral-600">
                  <span>500+ businesses served</span>
                  <span>Founded 2014</span>
                  <span>Vendor prices read {CHECKED_ON}</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <figure className="rounded-2xl border border-fj-neutral-200 bg-white p-5 sm:p-6">
                  <figcaption className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">
                    Example: one emailed RFQ to a draft quote
                  </figcaption>
                  <ol className="mt-4 grid gap-3">
                    {[
                      { k: 'Request', v: 'An RFQ arrives with a PDF spec and 14 line items.' },
                      { k: 'Match', v: 'Each line matched to your catalog; two flagged as unknown.' },
                      { k: 'Price', v: 'Customer tier, margin floor and freight applied from your rules.' },
                      { k: 'Draft', v: 'Quote drafted in your own template, in your CRM or QuickBooks.' },
                      { k: 'Approve', v: 'Your estimator checks the two flagged lines and sends it.' },
                    ].map((s, i) => (
                      <li key={s.k} className="flex gap-3 rounded-xl border border-fj-neutral-200 bg-fj-cream p-3">
                        <span className="font-fj-mono text-xs font-bold text-[#B23E13]">{String(i + 1).padStart(2, '0')}</span>
                        <span className="font-fj-body text-[15px] leading-snug text-fj-ink">
                          <span className="font-semibold">{s.k}.</span> {s.v}
                        </span>
                      </li>
                    ))}
                  </ol>
                  <p className="mt-3 font-fj-body text-[13px] leading-snug text-fj-neutral-600">Illustrative. Your version uses your own catalog and price rules.</p>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SHORT ANSWER */}
        <section className="border-b border-fj-neutral-200 bg-white py-12">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <div className="rounded-2xl border-2 border-[#F05A28]/25 bg-fj-cream p-6 sm:p-8">
              <div className="mb-3 font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13]">Short answer</div>
              <p className="font-fj-body text-base leading-relaxed text-fj-ink sm:text-lg">
                AI quoting software reads a quote request, fills in products and prices from your price rules, and drafts
                a quote for a person to approve. CPQ tools from Salesforce and HubSpot do this inside their own CRM. A
                custom quoting agent does it inside the systems and price rules you already have, and is the better fit
                when your pricing lives outside a product catalog.
              </p>
            </div>
          </div>
        </section>

        {/* 3. TOOLS COMPARED */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Quoting software compared</p>
            <h2 className="mt-4 max-w-3xl font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              Four quoting tools and a custom agent, with prices as each vendor publishes them.
            </h2>
            <p className="mt-4 max-w-3xl font-fj-body text-base leading-relaxed text-fj-neutral-600">
              Read on each vendor&rsquo;s own page on {CHECKED_ON}. Where a vendor publishes no price, we say so instead
              of estimating one. Treat every figure as a reading taken on that date.
            </p>
            <div className="mt-10 overflow-x-auto rounded-2xl border border-fj-neutral-200 bg-white">
              <table className="w-full min-w-[640px] text-left font-fj-body text-[15px]">
                <thead className="bg-fj-cream font-fj-mono text-xs uppercase tracking-wider text-fj-neutral-600">
                  <tr>
                    <th scope="col" className="p-4 font-bold">Tool</th>
                    <th scope="col" className="p-4 font-bold">Best fit</th>
                    <th scope="col" className="p-4 font-bold">Published price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-fj-neutral-200 align-top text-fj-ink">
                  {VENDORS.map((v) => (
                    <tr key={v.name}>
                      <th scope="row" className="p-4 font-semibold">{v.name}</th>
                      <td className="p-4 text-fj-neutral-600">{v.fit}</td>
                      <td className="p-4">
                        {v.price}
                        {v.src && (
                          <>
                            {' '}
                            <a href={v.src} target="_blank" rel="noopener noreferrer" className="text-[#B23E13] underline underline-offset-2">Source</a>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 4. TOOL OR AGENT */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Tool or agent</p>
            <h2 className="mt-4 max-w-3xl font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">
              When quoting software fits, and when to build a quoting agent.
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
              <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 lg:col-span-5">
                <h3 className="font-fj-display text-xl font-semibold text-fj-ink">Pick a tool when</h3>
                <ol className="mt-4 grid list-decimal gap-3 pl-5 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
                  {PICK_A_TOOL.map((x) => <li key={x}>{x}</li>)}
                </ol>
              </div>
              <div className="rounded-2xl border-2 border-[#F05A28]/25 bg-white p-6 lg:col-span-7">
                <h3 className="font-fj-display text-xl font-semibold text-fj-ink">Build an agent when</h3>
                <ol className="mt-4 grid list-decimal gap-3 pl-5 font-fj-body text-[15px] leading-relaxed text-fj-ink">
                  {BUILD_AN_AGENT.map((x) => <li key={x}>{x}</li>)}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* 5. WHAT THE AGENT DOES */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">How it works</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">7 things a quoting agent does, in order.</h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  AI does the reading. Fixed rules set the price. A person approves before anything leaves.
                </p>
              </div>
              <ol className="grid gap-3 lg:col-span-8">
                {AGENT_STEPS.map((s, i) => (
                  <li key={s.t} className="flex gap-4 rounded-2xl border border-fj-neutral-200 bg-white p-5">
                    <span className="font-fj-mono text-sm font-bold text-[#B23E13]">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{s.t}</h3>
                      <p className="mt-1 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{s.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* 6. WHO USES IT */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="fj-eyebrow">Who it fits</p>
            <h2 className="mt-4 max-w-3xl font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">Quoting agents by team.</h2>
            <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
              {WHO.map((w) => (
                <li key={w.t}>
                  <Link href={w.href} className="group flex h-full flex-col rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 hover:border-[#F05A28]/50">
                    <span className="font-fj-display text-xl font-semibold text-fj-ink group-hover:text-[#B23E13]">{w.t}</span>
                    <span className="mt-2 flex-1 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{w.d}</span>
                    <span className="mt-4 text-fj-ink group-hover:text-[#B23E13]"><Arrow /></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 7. MID-PAGE CTA */}
        <MidPageCTA
          headline="Send us three past requests and the quotes you sent."
          sub="We run the agent on them and show you its drafts next to yours. If it is not close enough to be worth building, we say so."
          label="Talk to the founder"
          note="Bhavesh replies within 24 hours."
        />

        {/* 8. PHASES */}
        <section className="border-b border-fj-neutral-200 bg-fj-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="fj-eyebrow">How a project runs</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">Phase by phase, each priced on its own.</h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  You decide on the next phase after you have seen the last one work. Defects found after launch are fixed
                  inside the build price for an agreed cover period.
                </p>
              </div>
              <ol className="grid gap-3 lg:col-span-8">
                {PHASES.map((p, i) => (
                  <li key={p.t} className="flex gap-4 rounded-2xl border border-fj-neutral-200 bg-white p-5">
                    <span className="font-fj-mono text-sm font-bold text-[#B23E13]">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3 className="font-fj-display text-lg font-semibold text-fj-ink">{p.t}</h3>
                      <p className="mt-1 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{p.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* 9. WHAT YOU OWN */}
        <section className="border-b border-fj-neutral-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="fj-eyebrow">What you own</p>
                <h2 className="mt-4 font-fj-display text-3xl font-semibold text-fj-ink sm:text-4xl">Your prices stay in your systems.</h2>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-neutral-600">
                  Price lists and customer terms are the most sensitive data a business has. The agent reads them where
                  they already live and never needs a copy elsewhere.
                </p>
              </div>
              <ul className="grid gap-3 lg:col-span-7">
                {[
                  { t: 'Code and repository', d: 'Yours from day one.' },
                  { t: 'Accounts in your name', d: 'AI and hosting can run in your own accounts, at cost, with no markup from us.' },
                  { t: 'No per-seat license', d: 'Add estimators and reps without a new license from us.' },
                  { t: 'No monthly minimum', d: 'Support after launch is optional. Each change is quoted and approved before we do it.' },
                ].map((x) => (
                  <li key={x.t} className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-5">
                    <p className="font-fj-display text-lg font-semibold text-fj-ink">{x.t}</p>
                    <p className="mt-1 font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">{x.d}</p>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-10 max-w-3xl font-fj-body text-[15px] leading-relaxed text-fj-neutral-600">
              Related:{' '}
              <Link href="/services/ai-agent-development" className="font-semibold text-[#B23E13] underline underline-offset-2">AI agent development</Link>,{' '}
              <Link href="/services/ai-agent-development/rfq-bidding-agent" className="font-semibold text-[#B23E13] underline underline-offset-2">RFQ and bidding agent</Link>,{' '}
              <Link href="/services/sales-order-automation-ai-agents" className="font-semibold text-[#B23E13] underline underline-offset-2">sales order automation</Link> and{' '}
              <Link href="/services/shopify-quickbooks-integration" className="font-semibold text-[#B23E13] underline underline-offset-2">Shopify QuickBooks integration</Link>.
            </p>
          </div>
        </section>

        {/* 10. FAQ */}
        <FAQ
          eyebrow="AI quoting FAQ"
          headline="What buyers ask about AI quoting software."
          lead={`Vendor facts were read on each vendor's own page on ${CHECKED_ON}.`}
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-fj-cream"
        />

        {/* 11. FINAL CTA */}
        <FinalCTA
          variant="light"
          eyebrow="Start here"
          headline="See it quote from your own requests."
          sub="Send a few past requests and the quotes your team sent. We come back with the agent's drafts next to yours, and one fixed price in writing for the pilot."
          primaryCta={{ label: 'See a demo on my data', modal: true, region: 'us' }}
          secondaryCta={{ label: 'Talk to the founder', href: '/contact' }}
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}

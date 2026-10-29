import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import '../ai-agents/ai-agents.css';

/* /uk/shopify-ai-agents, built 2026-10-29.

   Truth rules for anyone editing this file.
   1. Every third-party fact (Shopify API rules, plan availability, GOV.UK and
      HMRC rules, ICO guidance, EU AI Act text, the market price range) was read
      on the owner's own page on 2026-10-29 and links to it through the SRC map
      below. Re-read the page before changing a figure, and update READ_ON.
   2. No FactoryJet price. The only money figures are a market range published
      by a named London firm (Cloudswitched), with its VAT position stated.
   3. Client proof: GPSUK (built on Commerceflo) and Sow Easy (WooCommerce plus
      Odoo, still in build). Neither is presented as Shopify or AI agent work.
   4. Structure mirrors /uk/ecommerce-consultant and /uk/shopify-xero-integration
      (imports, components, CSS, schema). The copy is written fresh for the UK
      and shares no paragraph with /services/shopify-ai-agents.
   5. The FAQ schema is generated from FAQ_ITEMS and the Service offers from
      AGENT_JOBS, the same arrays the page renders. Never add a second list.
   6. Search demand used to shape the title and FAQs (DataForSEO, United
      Kingdom, 29 October 2026): "shopify ai" 260 a month, "shopify flow" 260,
      "shopify inventory management" 110, "shopify xero" 110. Google question
      boxes for "shopify sidekick" and "shopify ai" fed the basics FAQs. */

const CANONICAL = 'https://factoryjet.com/uk/shopify-ai-agents';
const UPDATED = '2026-10-29';
const READ_ON = '29 October 2026';
const TITLE = 'Shopify AI Agents UK: Custom Agents for Store Ops | FactoryJet';
const H1 = 'Shopify AI Agents for UK Stores: Custom Agents That Work Your Orders, Returns, Stock and Books';
const DESCRIPTION =
  'Custom Shopify AI agents for UK stores: marketplace orders, trade POs, returns, Linnworks or Brightpearl stock and Xero or Sage checks. Demo on your data first.';
const OG_IMAGE = 'https://factoryjet.com/og-default.png';

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

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'Shopify AI Agents', url: CANONICAL },
];

/* Sources. One map, used by every inline source note AND the Sources list.
   Each page was opened on 2026-10-29 and the supporting words read first. */
const SRC = {
  shopifyRest: { label: 'shopify.dev: REST Admin API (legacy notice)', url: 'https://shopify.dev/docs/api/admin-rest' },
  shopifyLimits: { label: 'shopify.dev: GraphQL Admin API rate limits', url: 'https://shopify.dev/docs/apps/build/apis/graphql-admin/rate-limits' },
  shopifyWebhooks: { label: 'shopify.dev: About webhooks', url: 'https://shopify.dev/docs/apps/build/webhooks' },
  shopifyDupes: { label: 'shopify.dev: Ignore duplicate webhooks', url: 'https://shopify.dev/docs/apps/build/webhooks/ignore-duplicates' },
  shopifyFlow: { label: 'Shopify Help: Shopify Flow', url: 'https://help.shopify.com/en/manual/shopify-flow' },
  shopifySidekick: { label: 'Shopify Help: Sidekick', url: 'https://help.shopify.com/en/manual/shopify-admin/productivity-tools/sidekick' },
  shopifyB2b: { label: 'Shopify Help: B2B', url: 'https://help.shopify.com/en/manual/b2b' },
  govMtd: { label: 'GOV.UK: VAT Notice 700/22, Making Tax Digital for VAT', url: 'https://www.gov.uk/government/publications/vat-notice-70022-making-tax-digital-for-vat/vat-notice-70022-making-tax-digital-for-vat' },
  govDistance: { label: 'GOV.UK: Online and distance selling for businesses', url: 'https://www.gov.uk/online-and-distance-selling-for-businesses' },
  icoAdm: { label: 'ICO: Automated decision-making, including profiling (draft guidance)', url: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/automated-decision-making-and-profiling/' },
  aiActArt2: { label: 'European Commission AI Act Service Desk: Article 2, scope', url: 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-2' },
  aiActArt50: { label: 'European Commission AI Act Service Desk: Article 50, transparency', url: 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50' },
  ecAiFramework: { label: 'European Commission: AI Act regulatory framework', url: 'https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai' },
  royalMailDev: { label: 'Royal Mail Developer Portal', url: 'https://developer.royalmail.net/' },
  cloudswitched: { label: 'Cloudswitched: AI software development cost UK 2026', url: 'https://www.cloudswitched.com/blog/ai-software-development-cost-uk-2026' },
} as const;

type SrcKey = keyof typeof SRC;
const SOURCE_KEYS = Object.keys(SRC) as SrcKey[];

/* The agents we build for UK Shopify stores. Rendered as the listicle AND
   mapped into the Service schema offers. */
const AGENT_JOBS: { title: string; trigger: string; body: string; guard: string; systems: string }[] = [
  {
    title: 'Marketplace and order exception agent',
    trigger: 'An order lands from the web store, Amazon.co.uk, eBay or OnBuy',
    body: 'Reads each order against your rules: a postcode that does not match the town, a Highlands or Northern Ireland address on a mainland-only service, a quantity ten times the customer’s usual, a SKU the warehouse shows as nil. It tags the order in Shopify with a one-line reason and sends it to the person who owns that kind of problem.',
    guard: 'Tags and notes only. It never cancels, edits or ships an order.',
    systems: 'Shopify, Linnworks or your order hub, Mintsoft or your 3PL',
  },
  {
    title: 'Trade purchase order agent',
    trigger: 'A trade buyer emails a PO as a PDF or spreadsheet',
    body: 'Opens the attachment, finds the buyer’s company in Shopify B2B, matches each line to your SKUs and that company’s price list, and builds a draft order. A line it cannot match, such as an old part number or a price that differs from the catalogue, goes to your sales desk with the reason written out.',
    guard: 'Builds drafts. A person turns every draft into an order.',
    systems: 'Shopify B2B, Outlook or Gmail, your ERP price list',
  },
  {
    title: 'Returns and cancellations agent',
    trigger: 'A customer asks to cancel, return or swap an item',
    body: 'Finds the order, checks the delivery date against the 14-day cancellation window GOV.UK describes and against your own returns policy, and prepares the return with the right reason code. Clear cases wait for one click. Anything outside policy goes to a person with the policy line quoted beside the request.',
    guard: 'Refunds above the limit you set always need a person.',
    systems: 'Shopify returns, your helpdesk, Stripe, Klarna or Clearpay orders',
  },
  {
    title: 'Stock and reorder agent',
    trigger: 'Stock falls below a level, or every morning at a time you pick',
    body: 'Compares Shopify stock by location with what Brightpearl, Linnworks or your warehouse system holds, plus open supplier orders. Where the counts disagree it says by how much and since when. It then drafts a reorder list grouped by supplier for your buyer to check.',
    guard: 'Drafts reorder lists. Your buyer sends every purchase order.',
    systems: 'Shopify inventory, Brightpearl, Linnworks, Mintsoft, Odoo',
  },
  {
    title: 'Books and payout check agent',
    trigger: 'Every payout, and on every sync error',
    body: 'Compares Shopify orders, refunds and payouts with what reached Xero, Sage 50, Sage 200, Sage Intacct, QuickBooks UK, Dynamics 365 Business Central, NetSuite or Odoo. When a sale is missing or posted at the wrong VAT rate, it explains the gap in plain words and drafts the correction for your finance team to approve.',
    guard: 'Read-only on the ledger until a person approves a fix.',
    systems: 'Xero, Sage, QuickBooks UK, Business Central, NetSuite, Odoo',
  },
  {
    title: 'Delivery query agent',
    trigger: 'A where-is-my-parcel or change-of-address email arrives',
    body: 'Finds the order, reads the tracking status from Royal Mail, DPD or Evri, and drafts a reply in your helpdesk with the facts filled in. Address changes are checked against fulfilment status first, so a parcel already handed to the courier is never promised a new address.',
    guard: 'Complaints and lost parcels go to a person with the order attached.',
    systems: 'Royal Mail, DPD, Evri, Zendesk, Gorgias',
  },
];

/* Who owns each record in a typical UK Shopify stack. */
const OWNERS: { record: string; owner: string; agent: string }[] = [
  { record: 'Retail orders and customers', owner: 'Shopify', agent: 'Reads, tags and adds notes' },
  { record: 'Marketplace orders', owner: 'Amazon.co.uk, eBay UK, OnBuy, ManoMano or Zalando, often through Linnworks', agent: 'Reads, flags exceptions' },
  { record: 'Trade companies and price lists', owner: 'Shopify B2B or your ERP', agent: 'Reads, builds draft orders' },
  { record: 'Stock and warehouse bins', owner: 'Brightpearl, Linnworks, Mintsoft, Odoo or your 3PL', agent: 'Compares counts, drafts reorders' },
  { record: 'Sales ledger and VAT', owner: 'Xero, Sage, QuickBooks UK, Business Central or NetSuite', agent: 'Read-only, drafts corrections' },
  { record: 'Payments', owner: 'Shopify Payments, Stripe, GoCardless, Klarna or Clearpay', agent: 'Reads status, never moves money' },
  { record: 'Parcels and tracking', owner: 'Royal Mail, DPD or Evri', agent: 'Reads tracking, drafts replies' },
];

/* Sidekick, Flow, an app or a custom agent. */
const ROUTES: { feat: string; sidekick: string; flow: string; app: string; fj: string }[] = [
  { feat: 'What it is', sidekick: 'Shopify’s AI assistant inside your admin', flow: 'Shopify’s free rule-based automation app', app: 'A ready-made product for one job', fj: 'An agent built for your rules and systems' },
  { feat: 'Who starts it', sidekick: 'A person typing in the admin', flow: 'A store event and a rule', app: 'Depends on the app', fj: 'A store event, an email or a timer' },
  { feat: 'Reads systems outside Shopify', sidekick: 'Through Shopify and its apps', flow: 'Through connected apps', app: 'The ones the maker supports', fj: 'Any with an API or export: Xero, Sage, Linnworks, couriers' },
  { feat: 'Handles messy input such as PDFs and emails', sidekick: 'When a person pastes it in', flow: 'No, rules only', app: 'Sometimes', fj: 'Yes, with a test set from your own data' },
  { feat: 'Who owns it', sidekick: 'Shopify', flow: 'Shopify', app: 'The app maker', fj: 'You: code, prompts and logs' },
  { feat: 'Best first step when', sidekick: 'The job happens inside the admin', flow: 'The rule fits in one sentence', app: 'The job is common and the app fits', fj: 'The job crosses Shopify and another system' },
];

/* Project steps (numbered list). */
const STEPS: { n: string; t: string; d: string }[] = [
  { n: '01', t: 'Pick one job and count it', d: 'We sit with the person who does the job today and count a normal week: how many orders, emails or POs, how long each takes, and which ones go wrong. That count is the baseline the agent is judged against.' },
  { n: '02', t: 'Name an owner for every record', d: 'Orders, stock, trade prices, the ledger and parcels each get one home. The agent reads from the owner and never keeps a second copy of the same number.' },
  { n: '03', t: 'Build a test set from your data', d: 'We collect real past cases, including the awkward ones: split parcels, part refunds, a Northern Ireland address, a trade PO with a retired part. Your best person writes the right answer for each.' },
  { n: '04', t: 'Show it working before you sign', d: 'Before a contract, the agent runs on your own data against that test set, so you see its drafts, its tags and the cases it hands to a person.' },
  { n: '05', t: 'Agree limits and approvals', d: 'Which actions it can take alone, which need a click, and which it must never touch. Money decisions sit with your team. The rules go in writing with the fixed quote for the phase.' },
  { n: '06', t: 'Run it alongside your team', d: 'For the first weeks the agent drafts and your team decides, so every miss is caught and fed back into the test set before it is trusted with more.' },
  { n: '07', t: 'Go live and stay on', d: 'The same team supports the agent after launch if you choose, re-scores it against the test set and adjusts it when Shopify, a marketplace or your ERP changes.' },
];

/* FAQ source of truth (drives the visible FAQ and the FAQPage schema). */
const FAQ_CATEGORIES = [
  { key: 'basics', label: 'Shopify AI basics' },
  { key: 'uk', label: 'UK systems and rules' },
  { key: 'build', label: 'How the build works' },
  { key: 'working', label: 'Cost and working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // Shopify AI basics
  {
    category: 'basics',
    question: 'What is a Shopify AI agent?',
    answer:
      'It is software that does a store job in several steps, using a language model to read messy input and Shopify’s official API to act. A trade PO arrives by email; the agent reads it, finds the buyer, matches the lines and builds a draft order. A chatbot answers questions. An agent prepares work and hands it to your team, under limits you set.',
  },
  {
    category: 'basics',
    question: 'What does Shopify Sidekick do, and where does a custom agent fit?',
    answer:
      'Shopify calls Sidekick its AI-powered commerce assistant. Its help page says it can edit orders, build Shopify Flow workflows, summarise store data and create custom apps, and that it shows changes for your review before applying them. It works for the person sitting in the admin. A custom agent starts on its own when an email, order or timer fires, and reads systems such as Sage or Linnworks.',
  },
  {
    category: 'basics',
    question: 'What is the difference between Shopify Flow and an AI agent?',
    answer:
      'Shopify describes Flow as a free app on the Basic, Grow, Advanced and Plus plans that watches for store events and runs actions. It follows rules you write, and it should be your first stop. An agent handles what a rule cannot: reading a customer email, working out which order it means and choosing a next step. Many builds use both together.',
  },
  {
    category: 'basics',
    question: 'Which jobs should a UK Shopify store give an AI agent first?',
    answer:
      'Pick a job your team repeats every day, where the data already sits in Shopify, an inbox or your order hub, and where a person can check the result in seconds. For UK stores that is usually marketplace order exceptions, trade POs arriving by email, where-is-my-parcel replies or stock counts that disagree between Shopify and the warehouse. Leave anything that moves money until later.',
  },
  {
    category: 'basics',
    question: 'Do we need Shopify Plus for a custom AI agent?',
    answer:
      'No. An agent is a custom app on your store, and that works on standard plans too. Plus changes two things. Shopify’s GraphQL Admin API allows Plus stores 1,000 points a second against 100 on standard plans, so a busy agent has more room. And Shopify’s B2B help page says B2B features vary by plan, which matters for a trade PO agent.',
  },
  {
    category: 'basics',
    question: 'What is Shopify’s API, and which one does an agent use?',
    answer:
      'An API is the official door one piece of software uses to read and change data in another. Shopify’s developer site says its REST Admin API became legacy on 1 October 2024, and that from 1 April 2025 all new public apps must be built only on the GraphQL Admin API. We build new agents on GraphQL for that reason.',
  },
  // UK systems and rules
  {
    category: 'uk',
    question: 'Can an agent work with Xero, Sage or QuickBooks UK as well as Shopify?',
    answer:
      'Yes. The books check agent reads Shopify orders, refunds and payouts, then compares them with what reached Xero, Sage 50, Sage 200, Sage Intacct, QuickBooks UK, Dynamics 365 Business Central, NetSuite or Odoo. It stays read-only on the ledger. When it finds a gap, it drafts the correction and your finance team approves it. Posting rules stay with your accountant.',
  },
  {
    category: 'uk',
    question: 'Does an AI agent affect Making Tax Digital for VAT?',
    answer:
      'It can help or hurt, depending on how it moves data. HMRC’s VAT Notice 700/22 says a digital link needs no manual intervention, lists API transfer and CSV import among accepted links, and says copy and paste is not a digital link. So an agent that writes corrections through the accounting API keeps the chain digital. Ask your accountant to check the whole set-up.',
  },
  {
    category: 'uk',
    question: 'Can the agent handle orders from Amazon.co.uk, eBay and OnBuy?',
    answer:
      'Yes, where those orders reach a system it can read. Many UK sellers pull marketplace orders into Linnworks or into Shopify itself, and the agent reads them there. It checks each order against your rules, such as a postcode that does not match the town or a SKU with no stock, and tags exceptions for a person. It never cancels a marketplace order on its own.',
  },
  {
    category: 'uk',
    question: 'Can it read stock from Linnworks, Brightpearl or Mintsoft?',
    answer:
      'Yes, through whatever API or export your system offers, which we confirm in scoping before we quote. The stock agent compares Shopify stock by location with the warehouse count and open supplier orders. When the two disagree, it reports by how much and since when, and drafts a reorder list. The warehouse system stays the owner of stock; the agent never overwrites it.',
  },
  {
    category: 'uk',
    question: 'Does UK GDPR let an AI agent decide refunds or trade credit on its own?',
    answer:
      'Be careful here. The ICO’s draft guidance, updated on 31 March 2026 to reflect the Data (Use and Access) Act 2025, covers decisions based solely on automated processing that have a legal or similarly significant effect on a person. It lists safeguards such as human intervention and the right to contest. Our default keeps a person on every money decision, so that question rarely arises. Your lawyer decides the rest.',
  },
  {
    category: 'uk',
    question: 'We sell into the EU. Does the EU AI Act apply to us?',
    answer:
      'It can. Article 2 of the AI Act covers providers and deployers based outside the EU where the output of the AI system is used in the Union. Article 50 says systems meant to talk directly with people must tell them they are dealing with AI, unless that is obvious. The European Commission says these transparency rules come into effect in August 2026. Take legal advice for your case.',
  },
  {
    category: 'uk',
    question: 'Can a returns agent follow the UK 14-day cancellation rule?',
    answer:
      'Yes. GOV.UK says customers who buy online can cancel up to 14 days after their order is delivered, and if you never told them about that right, they can cancel at any time in the next 12 months. The agent checks the delivery date and your own returns policy, prepares the return, and sends anything outside policy to a person with the rule quoted.',
  },
  {
    category: 'uk',
    question: 'Can it answer delivery questions for Royal Mail, DPD and Evri parcels?',
    answer:
      'Yes. The delivery query agent finds the order, reads the tracking status and drafts a reply in Zendesk, Gorgias or your shared inbox with the facts filled in. Royal Mail’s developer portal describes APIs for generating postage and monitoring deliveries. Lost parcels and complaints go to a person. For agents that answer every kind of customer message, see our UK AI customer service page.',
  },
  // How the build works
  {
    category: 'build',
    question: 'How does the agent connect to our Shopify store?',
    answer:
      'Through a custom app installed on your store and owned by you. It gets its own access token and only the permissions the job needs, for example reading orders and writing draft orders. It reads and writes through the GraphQL Admin API and listens for store events through webhooks. Removing the app removes its access at once, without calling us.',
  },
  {
    category: 'build',
    question: 'What happens if Shopify sends the same event twice or misses one?',
    answer:
      'Shopify plans for both, and so do we. Its developer docs say an app might receive the same webhook more than once, that ordering within a topic is not guaranteed and that delivery is not always guaranteed. So the agent skips repeats using the X-Shopify-Webhook-Id header, re-reads the order before acting, and runs a scheduled reconciliation job that catches anything missed.',
  },
  {
    category: 'build',
    question: 'Will a busy agent slow down our other Shopify apps?',
    answer:
      'It should not, if it is paced. Shopify gives each app and store pair its own allowance on the GraphQL Admin API: 100 points a second on standard plans, 200 on Advanced and 1,000 on Plus, refilled continuously. A single query cannot exceed 1,000 points. We size each agent’s queries to stay well inside its allowance, so peak trading days do not hit the limit.',
  },
  {
    category: 'build',
    question: 'Can an agent build trade orders in Shopify B2B?',
    answer:
      'Yes, as drafts. Shopify’s help centre says B2B is available on the Basic, Grow, Advanced and Plus plans, with features that depend on the plan, and that buyers are set up as companies with their own catalogues and pricing. The PO agent matches each line to that company’s prices and builds a draft order. A person on your sales desk confirms it.',
  },
  {
    category: 'build',
    question: 'How do we know the agent is getting things right?',
    answer:
      'Before the build we agree a test set of your real past cases, each with the answer your best person would give, and a pass mark. The agent is scored against that set before launch and again after changes. Every input, decision and action is logged in an account you control, so your team can open any case and see why it was handled that way.',
  },
  // Cost and working with us
  {
    category: 'working',
    question: 'How much does a Shopify AI agent cost to build in the UK?',
    answer:
      'Cloudswitched, a London IT services firm, published UK ranges on 12 April 2026: £15,000 to £40,000 for what it calls a reactive agent, £35,000 to £80,000 for what it calls a task agent, and more for its reasoning and orchestrator tiers. Its page does not say whether VAT is included. FactoryJet quotes a fixed price per phase in writing after a short scoping call.',
  },
  {
    category: 'working',
    question: 'Can we see it working before we sign?',
    answer:
      'Yes. Before a contract, we show working software on your own data. For a Shopify agent that means a set of your real orders, emails or POs run through the agent, with its drafts, tags and hand-offs laid out for your team to check against what they would have done. You decide on the build after seeing it.',
  },
  {
    category: 'working',
    question: 'Who owns the agent, and who supports it after launch?',
    answer:
      'You own the code, the prompts, the test set and the logs from day one. The AI and hosting accounts can sit in your name, at cost with no markup. Defects are fixed inside the build price for a cover period agreed before work starts. Support is optional: each change is quoted and approved, with no monthly minimum.',
  },
  {
    category: 'working',
    question: 'We have a written brief or an RFP. What should it include?',
    answer:
      'Send it as it is; we read every brief. The useful parts are the job you want handled, your Shopify plan, every system involved (for example Xero, Linnworks, Royal Mail), a week of volumes, what goes wrong today and who approves money decisions. If you are running a formal tender, include the scoring criteria and deadline, and we answer in that format.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Shopify AI Agents UK',
      serviceType: 'Custom AI agent development for Shopify store operations in the United Kingdom',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      description:
        'FactoryJet designs, builds and supports custom AI agents for UK Shopify stores, built as a custom app on the GraphQL Admin API. Agents triage web and marketplace order exceptions, turn emailed trade POs into Shopify B2B draft orders, prepare returns inside UK cancellation rules, compare stock with Brightpearl, Linnworks or Mintsoft, check payouts against Xero, Sage, QuickBooks UK, Business Central, NetSuite or Odoo, and draft delivery replies from Royal Mail, DPD and Evri tracking. Money decisions stay with a person, and the client owns the code, prompts and logs.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Shopify AI agents for UK stores',
        itemListElement: AGENT_JOBS.map((job) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: job.title, description: `${job.body} ${job.guard}` },
        })),
      },
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
      'AI agents built for UK Shopify stores: marketplace order exceptions, trade POs into B2B drafts, returns, stock checks against Linnworks or Brightpearl, and payout checks against Xero or Sage.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'FactoryJet: Shopify AI agents for UK stores' }],
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

export default function ShopifyAiAgentsUKPage() {
  return (
    <>
      <script id="ld-uk-shopify-ai-agents" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="uk-aiagents">
      <main>

        <Breadcrumbs items={crumbs} />

        {/* 1. HERO */}
        <section className="sec-lg dot-grid" style={{ position: 'relative' }}>
          <div className="wrap">
            <div className="col-6040">
              <div>
                <div className="flex-wrap mb-6">
                  <span className="chip"><span className="dot dot-orange" />Shopify AI Agents UK</span>
                  <span className="chip">Orders, Returns, Stock, Books</span>
                  <span className="chip">Demo on Your Data</span>
                </div>
                <h1>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  Your Shopify store takes orders from the web, Amazon.co.uk and eBay. Stock lives in Linnworks or
                  Brightpearl, the books in Xero or Sage, and parcels go out with Royal Mail, DPD or Evri. Your team
                  spends its day moving facts between them. FactoryJet builds AI agents that do the checking and the
                  drafting, and hand every money decision to a person.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
                  <div className="upd">Last updated<br />{READ_ON}</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="uk" source="uk_shopify_ai_agents_hero" service="Shopify AI Agents" submitLabel="See a demo on my data" trustText="Working software on your own data before you sign. Founder replies within 24 hours." />
                </div>
              </div>

              <div className="card card-top-orange">
                <span className="eyebrow">What an agent hands your team each morning</span>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Order exceptions, tagged</div><div className="scorecard-note">web, Amazon.co.uk, eBay, OnBuy</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Flagged</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Trade POs as draft orders</div><div className="scorecard-note">matched to each company’s prices</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Drafted</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Stock gaps with Linnworks or Brightpearl</div><div className="scorecard-note">by how much, since when</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Listed</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Payouts checked against Xero or Sage</div><div className="scorecard-note">corrections waiting for approval</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Checked</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Refunds and price changes</div><div className="scorecard-note">always with a person</div></div>
                  <div className="scorecard-val" style={{ color: T.green, fontSize: 15 }}>Your call</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ANSWER-FIRST DEFINITION */}
        <section className="sec">
          <div className="wrap">
            <div className="def" style={{ maxWidth: 940 }} data-speakable="true">
              <span className="lab">What does a Shopify AI agent do for a UK store?</span>
              <p>
                A Shopify AI agent is custom software that reads store events, emails and files, decides what should
                happen under your rules, and prepares the work through Shopify’s official API. For UK stores the
                common jobs are marketplace order exceptions, trade POs, returns inside the 14-day cancellation
                window, stock checks against the warehouse system and payout checks against Xero or Sage.
              </p>
            </div>
            <Sources ids={['shopifyRest', 'govDistance']} />
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">Three terms we use a lot</span>
              <p>
                A <b>webhook</b> is a message Shopify sends the moment something happens, such as a new order. A
                <b> draft order</b> is an order a person still has to confirm before it counts. A <b>test set</b> is
                a batch of your real past cases, each with the right answer written down, used to score the agent
                before anyone trusts it.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              The model is the small part of the job. The large part is the plumbing a UK store already runs:
              marketplace feeds, a warehouse count that disagrees with Shopify by eleven units, a VAT rate set wrong
              on one product, a courier status that says delivered when the customer says otherwise. We scope that
              plumbing first, because it decides whether an agent saves your team time or creates new work.
            </p>
          </div>
        </section>

        {/* 3. FACTS BAND (each one sourced) */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              {[
                { v: '1,000', t: 'points a second is Shopify’s GraphQL Admin API allowance on Plus, against 100 on standard plans', s: 'shopify.dev, rate limits', u: SRC.shopifyLimits.url },
                { v: '1 Oct 2024', t: 'is when Shopify made its REST Admin API legacy, so new agents are built on GraphQL', s: 'shopify.dev, REST Admin API', u: SRC.shopifyRest.url },
                { v: '14 days', t: 'after delivery is how long UK customers can cancel most online orders', s: 'GOV.UK, distance selling', u: SRC.govDistance.url },
                { v: 'Aug 2026', t: 'is when the European Commission says the AI Act’s transparency rules come into effect', s: 'European Commission', u: SRC.ecAiFramework.url },
              ].map((r) => (
                <li key={r.t}>
                  <div style={{ fontFamily: T.fd, fontWeight: 800, fontSize: 26, color: T.orange }}>{r.v}</div>
                  <p style={{ fontSize: 13.5, color: T.ink, marginTop: 4 }}>{r.t}</p>
                  <a href={r.u} target="_blank" rel="noopener noreferrer" style={{ fontFamily: T.fm, fontSize: 12, color: T.n400, textDecoration: 'underline' }}>{r.s}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. THE AGENTS (LISTICLE) */}
        <section className="sec-lg dot-grid" id="agents">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">What we build</span>
              <h2>Six AI agents UK Shopify stores ask us for</h2>
              <p className="lead mt-4">
                Each one starts from a single trigger, does one job and stops at a line your team draws. Most stores
                start with one, prove it on their own data, then add the next.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 940 }}>
              {AGENT_JOBS.map((job, i) => (
                <li key={job.title} className="card">
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 13, color: T.small }}>{String(i + 1).padStart(2, '0')} · {job.trigger}</span>
                  <h3 className="mt-2" style={{ fontSize: 20 }}>{job.title}</h3>
                  <p className="mt-2">{job.body}</p>
                  <p className="mt-2"><b>Limit:</b> {job.guard}</p>
                  <p style={{ fontFamily: T.fm, fontSize: 12, color: T.n400, marginTop: 8 }}>Works with: {job.systems}</p>
                </li>
              ))}
            </ol>
            <p className="mt-8" style={{ maxWidth: 820 }}>
              For agents outside Shopify, such as HubSpot, Microsoft 365 or an ERP on its own, see our{' '}
              <a href="/uk/ai-agents" style={inlineLink}>UK AI agent development page</a>. For agents that answer
              every kind of customer message, see{' '}
              <a href="/uk/ai-customer-service" style={inlineLink}>AI customer service for UK businesses</a>.
            </p>
            <Sources ids={['govDistance', 'shopifyB2b', 'royalMailDev']} />
          </div>
        </section>

        {/* 5. WHO OWNS EACH RECORD */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">Start with owners</span>
              <h2>Which UK system owns each record, and what the agent may do with it</h2>
              <p className="lead mt-4">
                An agent goes wrong when it keeps its own copy of a number that another system is in charge of. So
                before any build we write down one owner per record. The agent reads from the owner and drafts
                changes for a person to approve.
              </p>
            </div>
            <div className="card mt-8" tabIndex={0} role="region" aria-label="Record owners table" style={{ padding: 0, overflowX: 'auto' }}>
              <table className="cmp-table" style={{ minWidth: 760 }}>
                <thead>
                  <tr>
                    <th>Record</th>
                    <th>Usual owner in a UK stack</th>
                    <th className="fj">What the agent may do</th>
                  </tr>
                </thead>
                <tbody>
                  {OWNERS.map((o) => (
                    <tr key={o.record}>
                      <td className="feat">{o.record}</td>
                      <td>{o.owner}</td>
                      <td className="fj">{o.agent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6" style={{ maxWidth: 820 }}>
              If the books link itself is the problem, fix that first: our{' '}
              <a href="/uk/shopify-xero-integration" style={inlineLink}>Shopify Xero integration page</a> covers VAT
              by rate, refunds and payouts. For trade buyers and company price lists, see{' '}
              <a href="/uk/b2b-ecommerce" style={inlineLink}>B2B ecommerce in the UK</a>.
            </p>
          </div>
        </section>

        {/* 6. UK RULES */}
        <section className="sec-lg dot-grid" id="uk-rules">
          <div className="wrap">
            <div style={{ maxWidth: 820 }}>
              <span className="eyebrow">UK and EU rules</span>
              <h2>Four rules a UK Shopify AI agent has to respect</h2>
              <p className="lead mt-4">
                None of these stops a store from using an agent. Each one changes how it is built. We map the
                question and point to the source; your accountant and lawyer give the advice.
              </p>
            </div>
            <div className="stack mt-8" style={{ maxWidth: 820 }}>
              <h3>Making Tax Digital: keep the chain digital</h3>
              <p>
                HMRC’s VAT Notice 700/22 says a digital link needs no manual intervention. It names API transfer
                and CSV import among the accepted methods, and says copy and paste does not count. An agent that
                finds a missing sale and has a person retype it into Sage breaks that chain. One that drafts the
                correction and posts it through the accounting API after approval keeps it.
              </p>
              <h3 className="mt-4">UK GDPR: a person on decisions that matter</h3>
              <p>
                The ICO’s draft guidance on automated decision-making, updated on 31 March 2026 to reflect the Data
                (Use and Access) Act 2025, covers decisions made solely by automated processing that have a legal or
                similarly significant effect on someone. Refusing a trade customer credit could be one. The
                guidance lists safeguards such as human intervention and a way to contest. Our agents keep a person
                on those decisions by default.
              </p>
              <h3 className="mt-4">EU AI Act: if you sell into the EU</h3>
              <p>
                Article 2 of the AI Act reaches providers and deployers outside the EU where an AI system’s output
                is used in the Union. Article 50 says systems meant to interact directly with people must tell
                them they are dealing with AI, unless that is obvious. The European Commission says the
                transparency rules come into effect in August 2026. A delivery agent replying to customers in
                Dublin or Lyon should say it is AI.
              </p>
              <h3 className="mt-4">Consumer cancellation rights</h3>
              <p>
                GOV.UK says customers can cancel most online orders up to 14 days after delivery, and up to 12
                months later if you never told them about that right. A returns agent works from the delivery date,
                not the order date, and quotes the rule when it hands a case to your team.
              </p>
            </div>
            <Sources ids={['govMtd', 'icoAdm', 'aiActArt2', 'aiActArt50', 'ecAiFramework', 'govDistance']} />
          </div>
        </section>

        <MidPageCTA
          headline={'Send one week of orders, emails or POs. We show you the agent on them.'}
          sub={'Tell us the job, your Shopify plan and the systems around it: Xero or Sage, Linnworks or Brightpearl, your couriers. On a short call with the founder we say which agent fits, and before you sign we show it working on your own data.'}
          label={'See a demo on my data'}
        />

        {/* 7. HOW IT CONNECTS (GUARDRAILS) */}
        <section className="sec-lg" id="how-it-connects">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">How it connects</span>
                <h2>Built the way Shopify tells app developers to build</h2>
                <div className="stack mt-6">
                  <p>
                    Each agent is a custom app on your store with its own token and only the permissions the job
                    needs. Shopify made its REST Admin API legacy on 1 October 2024 and requires new public apps to
                    use the GraphQL Admin API from 1 April 2025, so we build on GraphQL.
                  </p>
                  <p>
                    Shopify’s docs say a webhook can arrive twice, that order within a topic is not guaranteed and
                    that delivery is not always guaranteed. So every agent skips repeats by the
                    X-Shopify-Webhook-Id header, re-reads the order before acting, and runs a reconciliation job
                    that catches anything missed.
                  </p>
                  <p>
                    Queries are paced to your plan’s allowance (100 points a second on standard plans, 200 on
                    Advanced, 1,000 on Plus), so Black Friday traffic and your other apps keep their share.
                  </p>
                </div>
                <Sources ids={['shopifyRest', 'shopifyWebhooks', 'shopifyDupes', 'shopifyLimits']} />
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Limits built into every agent</span>
                <ul className="scope-list yes-list mt-4">
                  <li><b>Drafts, tags and notes by default.</b> Live changes only where you approve them.</li>
                  <li><b>Money stays with people.</b> Refunds, discounts and price changes sit behind a rule and a person above your limit.</li>
                  <li><b>A spend cap on the model.</b> A loop cannot run up a bill.</li>
                  <li><b>An off switch.</b> Your team can stop the agent without calling us.</li>
                  <li><b>A full log.</b> Every input, decision and change, kept in an account you control.</li>
                  <li><b>Prompt-injection tests.</b> Instructions hidden in a customer email are tested before launch.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 8. COMPARISON: SIDEKICK, FLOW, APP, CUSTOM */}
        <section className="sec-lg dot-grid" id="compare">
          <div className="wrap">
            <span className="eyebrow">Side by side</span>
            <h2 style={{ maxWidth: 780 }}>Sidekick, Shopify Flow, a ready-made app or a custom agent</h2>
            <p className="lead mt-4" style={{ maxWidth: 780 }}>
              Start with what Shopify already gives you. Sidekick and Flow cover a lot of admin work, and we will
              say so on the first call. A custom agent earns its place when the job crosses Shopify and a UK
              system it does not reach on its own.
            </p>
            <div className="card mt-8" tabIndex={0} role="region" aria-label="Comparison table" style={{ padding: 0, overflowX: 'auto' }}>
              <table className="cmp-table" style={{ minWidth: 900 }}>
                <thead>
                  <tr>
                    <th>Question</th>
                    <th>Shopify Sidekick</th>
                    <th>Shopify Flow</th>
                    <th>Ready-made app</th>
                    <th className="fj">Custom agent (FactoryJet)</th>
                  </tr>
                </thead>
                <tbody>
                  {ROUTES.map((r) => (
                    <tr key={r.feat}>
                      <td className="feat">{r.feat}</td>
                      <td>{r.sidekick}</td>
                      <td>{r.flow}</td>
                      <td>{r.app}</td>
                      <td className="fj">{r.fj}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6" style={{ maxWidth: 820 }}>
              Shopify’s help pages describe Sidekick as its AI-powered commerce assistant, which shows changes for
              your review before applying them, and Flow as a free app on the Basic, Grow, Advanced and Plus plans.
              If the store itself needs work first, see{' '}
              <a href="/uk/shopify-development" style={inlineLink}>Shopify development in the UK</a> or{' '}
              <a href="/uk/shopify-plus" style={inlineLink}>Shopify Plus</a>.
            </p>
            <Sources ids={['shopifySidekick', 'shopifyFlow']} />
          </div>
        </section>

        {/* 9. UK PROOF */}
        <section className="sec-lg" id="uk-work">
          <div className="wrap">
            <div style={{ maxWidth: 820 }}>
              <span className="eyebrow">UK work</span>
              <h2>Two UK trade builds where the record-owner question came first</h2>
              <p className="lead mt-4">
                Neither runs on Shopify. Both are UK trade businesses where we had to settle which system owns
                stock, price and the customer before anything was built, which is the same first step every agent
                on this page starts from.
              </p>
            </div>
            <div className="col-2 mt-8" style={{ gap: 20 }}>
              <div className="card">
                <span className="eyebrow">GPSUK · Commerceflo</span>
                <h3 className="mt-2" style={{ fontSize: 20 }}>Trade storefront for a UK promotional products supplier</h3>
                <p className="mt-2">
                  GPSUK sells branded pens, drinkware, bags and tech accessories to business customers. We built
                  its trade storefront on Commerceflo, so buyers log in, see their own account pricing and move from
                  quote to order without anyone retyping it. It is live, and SEO and AI search work continues.
                </p>
                <p className="mt-4"><a href="/case-studies/gpsuk-promotional-products" style={inlineLink}>Read the GPSUK case study</a></p>
              </div>
              <div className="card">
                <span className="eyebrow">Sow Easy · WooCommerce and Odoo</span>
                <h3 className="mt-2" style={{ fontSize: 20 }}>Trade store reading stock and prices from Odoo</h3>
                <p className="mt-2">
                  Sow Easy is a UK wholesale distributor that keeps stock, pricing and product data in Odoo. We are
                  building a WooCommerce trade store that reads all three from Odoo, so the website never holds a
                  second, conflicting copy. The store and the Odoo link are being tested on staging, and launch is
                  still ahead.
                </p>
                <p className="mt-4"><a href="/case-studies/sow-easy-distributor-portal" style={inlineLink}>Read the Sow Easy case study</a></p>
              </div>
            </div>
          </div>
        </section>

        {/* 10. HOUSE TERMS AND MARKET COST */}
        <section className="sec-lg dot-grid" id="terms">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Terms</span>
                <h2>How we work, and what the UK market charges</h2>
                <ul className="scope-list num-list mt-6" style={{ maxWidth: 580 }}>
                  <li><b>A demo on your data before you sign.</b> Working software on your own orders, emails or POs, so you judge the agent on your cases.</li>
                  <li><b>A fixed price per phase.</b> Each phase is scoped, priced and signed on its own. You can stop after the first.</li>
                  <li><b>You own it from day one.</b> The code, the repository, the prompts, the test set and the logs.</li>
                  <li><b>Your accounts, at cost.</b> AI and hosting can run in your own accounts, with no markup.</li>
                  <li><b>Defect cover in the build price.</b> For a cover period agreed before work starts.</li>
                  <li><b>Optional support, no monthly minimum.</b> Each change quoted and approved before we start.</li>
                </ul>
                <div className="mt-8">
                  <ModalCTAButton label="See a demo on my data" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Published UK market ranges</span>
                <p className="mt-2" style={{ fontSize: 14 }}>
                  Cloudswitched, a London-based IT services firm, published these build ranges for UK AI agents on
                  12 April 2026. Its page does not say whether VAT is included.
                </p>
                <div className="scorecard-row"><div><div className="scorecard-metric">Tier 1: Reactive Agent</div><div className="scorecard-note">Cloudswitched’s label</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>£15,000 to £40,000</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Tier 2: Task Agent</div><div className="scorecard-note">Cloudswitched’s label</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>£35,000 to £80,000</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Tier 3: Reasoning Agent</div><div className="scorecard-note">Cloudswitched’s label</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>£70,000 to £150,000</div></div>
                <p style={srcNote}>
                  Source, read on {READ_ON}: <a href={SRC.cloudswitched.url} target="_blank" rel="noopener noreferrer" style={srcLink}>{SRC.cloudswitched.label}</a>. FactoryJet quotes a fixed price in writing after a short scoping call.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 11. BRIEF OR RFP */}
        <section className="sec-lg" id="brief">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Send a brief</span>
                <h2>Have a brief or an RFP? Send it as it is.</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  Written briefs get the fastest, most exact answer. A page of notes is enough. If you are running a
                  formal tender, include the scoring criteria and the deadline, and we reply in your format.
                </p>
                <div className="mt-8">
                  <ModalCTAButton label="Send my brief" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What helps us quote</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">The job you want handled</div><div className="scorecard-note">and who does it today</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>1</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Your Shopify plan</div><div className="scorecard-note">Basic, Grow, Advanced or Plus</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>2</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Every system involved</div><div className="scorecard-note">Xero, Sage, Linnworks, couriers, marketplaces</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>3</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">One week of volumes</div><div className="scorecard-note">orders, emails, POs, returns</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>4</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Who approves money decisions</div><div className="scorecard-note">refunds, credit, price changes</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>5</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* 12. PROJECT STEPS (NUMBERED) */}
        <section className="sec-lg dot-grid" id="how-we-build">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">How we work</span>
              <h2>How a Shopify AI agent project runs, in seven steps</h2>
              <p className="lead mt-4">
                Step four comes before any contract. Each phase after it has its own fixed price.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {STEPS.map((s) => (
                <li key={s.n} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.small, minWidth: 34 }}>{s.n}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{s.t}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-8" style={{ maxWidth: 820 }}>
              Selling from the US as well? The same service for US stores is on our{' '}
              <a href="/services/shopify-ai-agents" style={inlineLink}>Shopify AI agent development page</a>.
            </p>
          </div>
        </section>

        {/* 13. SOURCES */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Method</span>
              <h2>Sources, read on {READ_ON}</h2>
              <p className="lead mt-4">
                Every Shopify rule, plan detail, UK and EU rule and price range on this page was read on the pages
                below on that day. Platforms and regulators change their pages, so open the link before you act on
                a figure.
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

        {/* 14. FAQ */}
        <section className="sec-lg dot-grid" id="faq">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>Shopify AI agent questions from UK store teams</h2>
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

        {/* 15. FINAL CTA (the only dark section) */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Next step</span>
            <h2>See an agent work on your own Shopify orders</h2>
            <p className="mt-4">
              Send your name and work email. Bhavesh replies within one business day to set up a short call about
              the job, your Shopify plan and the UK systems around it. Before you sign anything, you see the agent
              run on your own data.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="See a demo on my data" region="uk" modalVariant="default" btnVariant="primary-light" />
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

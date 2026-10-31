import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { twinAlternates } from '@/data/hreflangMap';
import '../ai-agents/ai-agents.css';

/* /uk/ai-automation, built 2026-10-29.

   Truth rules for anyone editing this file.
   1. Every law, tax rule, platform billing rule and market price on this page
      was read on the publisher's own page on 29 October 2026 and links to that
      page through the SRC map below. Re-read the page before changing a fact,
      and update READ_ON.
   2. No FactoryJet price and no running-cost figure. The only money figures
      are build ranges published by named UK agencies (Augustova, The AI
      Consultancy, Ronins), each linked, each with its VAT position stated.
   3. Client proof: GPSUK (built on Commerceflo) and Sow Easy (WooCommerce
      plus Odoo, build in progress per src/data/case-studies/index.ts), as
      cleared by Bhavesh on 29 Oct 2026. No metrics for either.
   4. /uk/ai-agents owns "AI automation agency UK" in its title. This page is
      the workflow tooling page (n8n, Make, Zapier), so its title leads with
      "AI Workflow Automation UK" to keep the two apart.
   5. Structure mirrors /uk/ecommerce-consultant and /uk/shopify-xero-integration
      (imports, components, CSS, schema). The copy is written fresh.
   6. The FAQ schema is generated from FAQ_ITEMS, the same array the visible
      FAQ renders. Never add a second list of questions.

   Search data (DataForSEO, United Kingdom, 29 Oct 2026, Google Ads volumes):
   ai automation 1,900; workflow automation 480; n8n automation 480;
   ai automation agency uk 210; n8n agency 170; n8n vs zapier 170;
   zapier agency 140. FAQ wording draws on UK People Also Ask boxes for
   "n8n vs zapier", "zapier agency", "ai automation" and "n8n agency". */

const CANONICAL = 'https://factoryjet.com/uk/ai-automation';
const UPDATED = '2026-10-31';
const UPDATED_LABEL = '31 October 2026';
const READ_ON = '29 October 2026';
const READ_ON_2 = '31 October 2026';
const TITLE = 'AI Workflow Automation UK: n8n, Make and Zapier | FactoryJet';
const H1 = 'AI Workflow Automation for UK Operations Teams';
const DESCRIPTION =
  'Workflow automation for UK teams in n8n, Make or Zapier. Orders, payouts, supplier bills and VAT records moved between Xero, Sage, Linnworks and your ERP.';

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
  { name: 'AI Automation', url: CANONICAL },
];

/* Sources. One map, used by every inline source note AND by the visible
   Sources list near the foot of the page. Each page was opened on
   2026-10-29 and the supporting words read before the claim was written. */
const SRC = {
  govNotice: { label: 'GOV.UK: VAT Notice 700/22, Making Tax Digital for VAT (section 3.2.1, digital links)', url: 'https://www.gov.uk/government/publications/vat-notice-70022-making-tax-digital-for-vat/vat-notice-70022-making-tax-digital-for-vat' },
  icoDuaa: { label: 'ICO: The Data (Use and Access) Act 2025', url: 'https://ico.org.uk/about-the-ico/what-we-do/legislation-we-cover/data-use-and-access-act-2025/' },
  icoAdm: { label: 'ICO: Automated decision-making, including profiling (draft guidance, updated 31 March 2026)', url: 'https://ico.org.uk/for-organisations/adm/' },
  ecAiAct: { label: 'European Commission: AI Act, regulatory framework', url: 'https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai' },
  aiActArt2: { label: 'AI Act Service Desk: Article 2, scope', url: 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-2' },
  aiActArt50: { label: 'AI Act Service Desk: Article 50, transparency obligations', url: 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50' },
  n8nHosting: { label: 'n8n Docs: self-hosting n8n', url: 'https://docs.n8n.io/hosting/' },
  n8nPricing: { label: 'n8n: pricing', url: 'https://n8n.io/pricing/' },
  zapierPricing: { label: 'Zapier: pricing', url: 'https://zapier.com/pricing' },
  makePricing: { label: 'Make: pricing', url: 'https://www.make.com/en/pricing' },
  augustovaPricing: { label: 'Augustova: pricing', url: 'https://www.augustova.co.uk/pricing' },
  augustovaIndex: { label: 'Augustova: UK AI Price Index', url: 'https://www.augustova.co.uk/uk-ai-price-index' },
  aiConsultancy: { label: 'The AI Consultancy: workflow automation', url: 'https://theaiconsultancy.ai/services/workflow-automation' },
  ronins: { label: 'Ronins: AI agency', url: 'https://www.ronins.co.uk/ai-agency/' },
  sage50Dev: { label: 'Sage UK knowledge base: Sage 50 Accounts, development basics (read 31 October 2026)', url: 'https://gb-kb.sage.com/portal/app/portlets/results/viewsolution.jsp?solutionid=200518071050312' },
  intacctWs: { label: 'Sage Intacct Developer: XML Web Services (read 31 October 2026)', url: 'https://developer.intacct.com/web-services/' },
  msPowerAutomate: { label: 'Microsoft Learn: Power Automate home page (read 31 October 2026)', url: 'https://learn.microsoft.com/en-us/power-automate/getting-started' },
  msDesktopFlows: { label: 'Microsoft Learn: Introduction to desktop flows (read 31 October 2026)', url: 'https://learn.microsoft.com/en-us/power-automate/desktop-flows/introduction' },
} as const;

type SrcKey = keyof typeof SRC;
const SOURCE_KEYS = Object.keys(SRC) as SrcKey[];

/* The systems UK operations teams name in their briefs. These are systems we
   connect, not partner or accreditation claims. */
const SYSTEMS: { group: string; items: string[] }[] = [
  { group: 'Accounts', items: ['Xero', 'Sage 50', 'Sage 200', 'Sage Intacct', 'QuickBooks UK'] },
  { group: 'ERP and stock', items: ['NetSuite', 'Dynamics 365 Business Central', 'Odoo', 'Brightpearl', 'Linnworks', 'Mintsoft'] },
  { group: 'Marketplaces', items: ['Amazon.co.uk', 'eBay UK', 'OnBuy', 'ManoMano', 'B&Q marketplace'] },
  { group: 'Payments', items: ['Stripe', 'GoCardless', 'Klarna', 'Clearpay'] },
  { group: 'Couriers', items: ['Royal Mail', 'DPD', 'Evri'] },
  { group: 'Workflow tools', items: ['n8n', 'Make', 'Zapier'] },
];

/* Six chains we are asked to automate most by UK operations teams. */
const CHAINS: { t: string; d: string }[] = [
  {
    t: 'Marketplace order to dispatch',
    d: 'Orders from Amazon.co.uk, eBay UK, OnBuy, ManoMano or the B&Q marketplace land in Linnworks, Mintsoft or your ERP once. The label is booked with Royal Mail, DPD or Evri, and the tracking number goes back to the channel that sold it.',
  },
  {
    t: 'Sales into the ledger, split by VAT rate',
    d: 'Daily takings post to Xero, Sage or QuickBooks UK as one summary per VAT rate, with returns credited at the original rate and charges kept apart from sales. Your accountant picks the accounts and tax codes before we build.',
  },
  {
    t: 'Payment provider payouts matched to the bank',
    d: 'Each of Stripe, GoCardless, Klarna and Clearpay gets its own clearing account in the ledger, so every bank line from them can be traced to the orders, refunds and fees behind it.',
  },
  {
    t: 'Supplier bills read and queued for approval',
    d: 'PDF invoices from the accounts inbox are read, matched to the purchase order and goods received, and drafted as bills. Anything that does not match waits for a named person, with the reason shown.',
  },
  {
    t: 'ERP and shop kept in step',
    d: 'Stock, prices and SKUs (stock codes) flow from NetSuite, Business Central, Odoo or Brightpearl to the shop and marketplaces, with one system named as the owner of each number so two copies never argue.',
  },
  {
    t: 'Monday numbers without a spreadsheet session',
    d: 'Sales by channel, cash collected, stock on order and late deliveries pulled from each system into one report on a fixed day, with any missing feed flagged in the report itself.',
  },
];

/* n8n, Make and Zapier side by side. Billing and hosting cells restate each
   maker's own page, read on 2026-10-29. "Where it fits" is our opinion. */
const TOOLS_CMP: { feat: string; n8n: string; make: string; zapier: string }[] = [
  {
    feat: 'What it bills on',
    n8n: 'Workflow executions on its cloud plans. One execution is one run of the whole workflow, however many steps it has',
    make: 'Credits. Most module actions use 1 credit; routers use none',
    zapier: 'Tasks. A task is a unit of work Zapier completes; triggers and polling do not count',
  },
  {
    feat: 'Free allowance listed',
    n8n: 'A self-hosted Community Edition, published on GitHub',
    make: '1,000 credits a month on the Free plan',
    zapier: '100 tasks a month on Free',
  },
  {
    feat: 'Can it run on your own servers?',
    n8n: 'Yes. n8n documents self-hosting on your own infrastructure, on premises or in a private cloud',
    make: 'No self-hosted option is listed on its pricing page',
    zapier: 'No self-hosted option is listed on its pricing page',
  },
  {
    feat: 'Where it fits, in our experience',
    n8n: 'High-volume or long multi-step workflows, and teams that want data kept on servers they choose',
    make: 'Visual, branching scenarios that operations staff want to read and adjust themselves',
    zapier: 'Short, linear workflows between popular apps, where the team already knows Zapier',
  },
];

/* Market build ranges, GBP. Each row restates the agency's own page, read on
   2026-10-29. Monthly tool, hosting and support figures on those pages are
   deliberately left out. */
const RANGES: { firm: string; job: string; range: string; vat: string; src: SrcKey }[] = [
  { firm: 'The AI Consultancy', job: 'No-code automation with no AI step', range: '£1,500 to £5,000 one-off', vat: 'Ex VAT, stated on the page', src: 'aiConsultancy' },
  { firm: 'Augustova', job: 'AI agents and automation: one repetitive job run by an AI agent', range: '£4,000 to £15,000', vat: 'Ex VAT, stated on the page', src: 'augustovaPricing' },
  { firm: 'The AI Consultancy', job: 'No-code workflow with an AI step', range: '£5,000 to £15,000 one-off', vat: 'Ex VAT, stated on the page', src: 'aiConsultancy' },
  { firm: 'Augustova', job: 'Custom AI system: several agents sharing data and hand-offs', range: '£8,000 to £25,000', vat: 'Ex VAT, stated on the page', src: 'augustovaPricing' },
  { firm: 'The AI Consultancy', job: 'Self-hosted n8n with AI integration', range: '£10,000 to £30,000 one-off', vat: 'Ex VAT, stated on the page', src: 'aiConsultancy' },
  { firm: 'Ronins', job: 'Proof of concept on your own data', range: '£12,000 to £30,000', vat: 'Not stated', src: 'ronins' },
];

/* FAQ source of truth (drives the visible FAQ and the FAQ schema). */
const FAQ_CATEGORIES = [
  { key: 'basics', label: 'What it is' },
  { key: 'tools', label: 'n8n, Make and Zapier' },
  { key: 'systems', label: 'UK systems' },
  { key: 'rules', label: 'MTD, GDPR and the AI Act' },
  { key: 'cost', label: 'Cost' },
  { key: 'working', label: 'Working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // What it is
  {
    category: 'basics',
    question: 'What is AI automation for a business?',
    answer:
      'AI automation is a set of workflows that move records between the systems you already run, so an order, an invoice or a payout is keyed in once and then travels on its own. Most steps follow a fixed rule. AI is added only where a step has to read something messy, such as a PDF purchase order or a customer email.',
  },
  {
    category: 'basics',
    question: 'What does an AI automation agency do?',
    answer:
      'An AI automation agency maps how a job moves between your systems today, then builds the workflows in a tool that suits the volume, inside accounts you own. Before go-live it tests the awkward cases, such as part refunds or a rejected courier address, and sets an alert on every step that can fail. Good agencies also tell you which steps need no AI at all.',
  },
  {
    category: 'basics',
    question: 'What is the difference between workflow automation and an AI agent?',
    answer:
      'A workflow does the same steps in the same order every time: an order arrives, stock is checked, a label is booked. An agent reads a situation and picks between several actions, such as deciding whether an emailed request is an order, a complaint or a quote. We use one test. If a person on your team follows a checklist, automate it. If they have to judge, that step is agent work, and our UK AI agents page covers it.',
  },
  {
    category: 'basics',
    question: 'Which workflows should a UK operations team automate first?',
    answer:
      'Pick the one your team does most often across two or more systems, where a mistake costs money. For most UK sellers and wholesalers that is marketplace orders into Linnworks, Mintsoft or the ERP, then payouts from Stripe, GoCardless, Klarna or Clearpay matched in Xero or Sage. Count how many times a week it happens and who does it today. That count is the first line of the brief.',
  },
  // n8n, Make and Zapier
  {
    category: 'tools',
    question: 'Which is better, Make, Zapier or n8n?',
    answer:
      'None wins every job. Zapier suits short, linear workflows between popular apps. Make suits visual scenarios with branches that operations staff want to read. n8n suits long or high-volume workflows, and teams that want to host it themselves. The billing unit matters too: Zapier counts tasks, Make counts credits per action, and n8n Cloud counts one execution per full run, whatever the number of steps, per each maker’s pricing page on 29 October 2026.',
  },
  {
    category: 'tools',
    question: 'Can Zapier replace n8n, or n8n replace Zapier?',
    answer:
      'For many workflows, yes, in both directions, because both connect the same common apps. The question is cost shape and control. Zapier’s pricing page says triggers and polling do not count as tasks, but each completed action does, so long workflows add up. n8n Cloud counts a whole run as one execution. We move high-volume zaps to n8n when the maths favours it, and leave short ones where they are.',
  },
  {
    category: 'tools',
    question: 'Where does Microsoft Power Automate fit next to n8n, Make and Zapier?',
    answer:
      'Microsoft describes Power Automate as a service for automated workflows between apps and services. Its desktop flows extend its robotic process automation (RPA), software that works through screens the way a person would, to legacy desktop apps. That helps when an old system has no API. Screen steps can break when a screen changes, so we prefer an API wherever a system offers one.',
  },
  {
    category: 'tools',
    question: 'Is n8n risky for a business to run?',
    answer:
      'The risk sits less in the tool than in who looks after it. n8n’s own documentation says you can self-host it on your own infrastructure, on premises or in a private cloud, using Docker Compose or other methods. Self-hosting means someone owns updates, backups, credentials and monitoring. If you choose it, we set those up in writing and can keep managing the servers after launch, or hand the runbook to your IT team.',
  },
  {
    category: 'tools',
    question: 'Can n8n run on servers in the UK or the EU?',
    answer:
      'Yes. n8n documents self-hosting on your own infrastructure or a private cloud, so the server sits wherever you rent it, including a UK or EU cloud region. That suits teams whose data protection officer wants personal data kept in a named location. Make and Zapier list no self-hosted option on their pricing pages, so for those you check each vendor’s own data processing terms with your DPO before customer data flows through them.',
  },
  {
    category: 'tools',
    question: 'We already have zaps, Make scenarios or an n8n setup built by a freelancer. Can you take them over?',
    answer:
      'Yes. We start with an inventory: every zap, scenario or n8n workflow, what triggers it, which accounts it logs in with and what breaks if it stops. That list usually shows a few that can be retired, a few to merge, and one or two that carry real business risk with no alert when they fail. We then quote the tidy-up or the move to n8n as a fixed price.',
  },
  // UK systems
  {
    category: 'systems',
    question: 'Can you connect Sage 50, Sage 200 or Sage Intacct to our other systems?',
    answer:
      'Yes, and the route depends on the edition. Sage says its Sage 50 Accounts developer tools, Sage Data Objects, are Windows libraries open only to members of its UK Developer Programme. Sage Intacct offers XML Web Services. For Sage 200 we confirm your version and hosting on the scoping call before promising a design. Your accountant still sets the account and VAT code for each kind of line.',
  },
  {
    category: 'systems',
    question: 'Can you automate Amazon.co.uk, eBay UK and OnBuy orders into Linnworks or Mintsoft?',
    answer:
      'Yes. Where Linnworks or Mintsoft already pulls the channel, we automate what happens around it: courier booking with Royal Mail, DPD or Evri, tracking sent back to the marketplace, stock pushed to each channel, and sales posted to the ledger. Where a channel is missing, such as ManoMano or the B&Q marketplace, we build the connector to the same rules. Every order keeps one reference from channel to bank.',
  },
  {
    category: 'systems',
    question: 'Can you match Stripe, GoCardless, Klarna and Clearpay payouts in Xero?',
    answer:
      'Yes. When one bank line covers many orders, refunds and fees, the fix is a clearing account for each provider in Xero or Sage. Each order, refund and fee lands in that account first; when the payout arrives, one transfer clears it to the bank and the statement line agrees. Direct Debit collections from GoCardless are matched against the invoices they settle.',
  },
  {
    category: 'systems',
    question: 'Can you connect NetSuite, Business Central, Odoo and Brightpearl to the shop?',
    answer:
      'Yes. In a business that runs one of these, it is usually the record for stock, prices and customers, and the shop and marketplaces follow it. The workflow work is deciding which system owns each number and then building the sync around that decision. For Sow Easy, a UK wholesale client, we are building a WooCommerce trade store that reads stock, pricing and SKUs from Odoo, now in testing on staging.',
  },
  // MTD, GDPR, AI Act
  {
    category: 'rules',
    question: 'Does an automated workflow count as a digital link for Making Tax Digital?',
    answer:
      'HMRC’s VAT Notice 700/22, section 3.2.1, lists API transfer, automated data transfer and CSV import and export among accepted digital links, and says copy and paste does not count. A workflow that moves figures between systems by API sits on that list. Whether your whole chain of records meets the rules is a question for your accountant, so we document each link for them to check.',
  },
  {
    category: 'rules',
    question: 'How does UK GDPR treat automated decisions after the Data (Use and Access) Act 2025?',
    answer:
      'The Act received Royal Assent on 19 June 2025, and the ICO says all its data protection provisions are now in force. The ICO’s draft guidance, updated 31 March 2026, treats articles 22A to 22D of UK GDPR as the automated decision-making rules, covering decisions with no meaningful human involvement that have a legal or similarly significant effect. Most back-office workflows make no such decision. Where one might, we add a human review step.',
  },
  {
    category: 'rules',
    question: 'Does the EU AI Act apply to a UK company?',
    answer:
      'It can. Article 2 covers providers placing AI systems on the EU market wherever they are established, and providers and deployers outside the EU where the system’s output is used in the EU. The European Commission says the transparency rules apply from August 2026. So a UK firm whose AI assistant talks to EU customers should tell them it is AI, as Article 50 requires, unless that is obvious.',
  },
  {
    category: 'rules',
    question: 'Where does our data go in an automated workflow?',
    answer:
      'Only where the design says it goes, and the design is written down before the build. Credentials are scoped to what each step needs. If personal data must stay in one location, we self-host n8n on servers you choose. If a step uses an AI model, it runs on your own AI account, so you hold the contract and the data terms. Your DPO sees the data map before go-live.',
  },
  // Cost
  {
    category: 'cost',
    question: 'How much does AI automation cost in the UK?',
    answer:
      'Published UK ranges, read on 29 October 2026: Augustova lists £4,000 to £15,000 for one repetitive job run by an AI agent, and £8,000 to £25,000 for a custom system of several agents sharing data and hand-offs, both ex VAT. The AI Consultancy lists £5,000 to £15,000 for a no-code workflow with an AI step and £10,000 to £30,000 for self-hosted n8n with AI, also ex VAT. Ronins lists £12,000 to £30,000 for a proof of concept and does not state VAT. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'cost',
    question: 'What makes one automation project cost more than another?',
    answer:
      'Four things, in our experience: the number of systems in the chain, whether a step has to read documents, how many exceptions need a human route, and how much history has to be loaded or cleaned first. A two-system order sync with clean SKUs is a small job. A purchase-order inbox feeding Business Central with three approval levels is a larger one. Each phase is scoped, priced and signed on its own.',
  },
  // Working with us
  {
    category: 'working',
    question: 'Can we see it working before we sign?',
    answer:
      'Yes. Before a contract, we show working software on your own data. For a workflow job that means a few of your real orders, invoices or payouts run through the proposed steps, with names removed if you prefer, so your operations lead and your accountant can see every record it creates and every case it hands to a person.',
  },
  {
    category: 'working',
    question: 'Who owns the workflows, the accounts and the code?',
    answer:
      'You do, from day one. The workflows are created under your company’s login for the tool, any custom code is pushed to a repository registered to you, and AI and hosting can run in your accounts at cost, with no markup from us. Defects found after launch are fixed inside the build price for a cover period agreed before work starts. Support after that is optional, each change is quoted and approved, and there is no monthly minimum.',
  },
  {
    category: 'working',
    question: 'What happens when a workflow fails at 2am?',
    answer:
      'It tells someone. Every workflow we build sends an alert to email or Slack when a step fails, with the record that failed and the reason, and the record waits in a queue rather than vanishing. The runbook says who acts and how to replay it. If you choose support, our team picks up those alerts; if not, your own team has the runbook.',
  },
  {
    category: 'working',
    question: 'What should our brief or request for proposal (RFP) include?',
    answer:
      'One page is enough to start. Name the workflow, what starts it, every system it touches with the version you run, how often it happens, who handles it today and what a mistake costs. Add three real examples, including one awkward case. Add it on the form’s second screen, or send your formal RFP, and we reply with a written scope and a fixed price per phase.',
  },
  {
    category: 'working',
    question: 'How long does an automation project take?',
    answer:
      'Length follows the chain. Two systems with clean SKUs is the quickest kind of job. Add a document-reading step, an ERP on one side and a ledger on the other, or approvals at three levels, and it grows. Loading a year of history adds more. Every phase carries its own end date on the written quote, so you know the go-live week before anything is signed.',
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
      name: 'AI Workflow Automation UK',
      serviceType: 'AI workflow automation in n8n, Make and Zapier: order, payout, supplier bill, ERP and reporting workflows, with support',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      description:
        'FactoryJet designs, builds and supports workflow automation for UK operations teams in n8n, Make or Zapier. Workflows connect Xero, Sage, QuickBooks UK, NetSuite, Business Central, Odoo, Brightpearl, Linnworks and Mintsoft with UK marketplaces, payment providers and couriers, with AI used only for steps that read documents or emails.',
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
      '@type': 'WebPage',
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
        '@id': 'https://factoryjet.com/author/bhavesh-barot#person',
        name: 'Bhavesh Barot',
        jobTitle: 'Founder & CEO',
        url: 'https://factoryjet.com/author/bhavesh-barot',
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
  alternates: { canonical: CANONICAL, languages: twinAlternates['ai-automation'] },
  openGraph: {
    title: TITLE,
    description:
      'How UK operations teams automate orders, payouts, supplier bills and reports in n8n, Make or Zapier, with MTD digital links, UK GDPR and the EU AI Act covered, and sourced UK build ranges.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
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

export default function AiAutomationUKPage() {
  return (
    <>
      <script id="ld-uk-ai-automation" type="application/ld+json"
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
                  <span className="chip"><span className="dot dot-orange" />AI Automation UK</span>
                  <span className="chip">n8n, Make, Zapier</span>
                  <span className="chip">Xero, Sage, ERP</span>
                </div>
                <h1>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  n8n, Make and Zapier workflows built around Xero, Sage and your ERP. Your orders arrive from Amazon.co.uk, eBay and your own shop. Stock lives in Linnworks, Mintsoft or
                  an ERP. Payouts land from Stripe, GoCardless and Klarna, and someone matches them in Xero or Sage
                  each week. FactoryJet designs, builds and supports the workflows that join those systems, in n8n,
                  Make or Zapier, so each record is entered once.
                </p>
                <p className="mt-4" style={{ maxWidth: 560 }}>
                  Before any contract, a few of your real records go through the proposed steps so you can check the
                  output. Each phase has its own fixed price in writing, and the workflows stay in your own accounts.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b><a href="/author/bhavesh-barot" style={{ textDecoration: 'underline' }}>Bhavesh Barot</a></b>, Founder<br /><span>500+ businesses served since 2014</span></div>
                  <div className="upd">Last updated<br />{UPDATED_LABEL}</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm
                    region="uk"
                    source="uk_ai_automation_hero"
                    service="AI Automation"
                    submitLabel="See a demo on my data"
                    trustText="Working software on your own data before you sign. Founder replies within one business day."
                  />
                  <p className="mt-4" style={{ fontSize: 14, maxWidth: 560 }}>
                    If you hold a process document, a written brief or a formal RFP (request for proposal), add it on the second screen of the
                    form and the reply comes back as a phased scope.
                  </p>
                </div>
              </div>

              <div className="card card-top-orange">
                <span className="eyebrow">Example: one Amazon.co.uk order</span>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">01 Order lands in Linnworks</div><div className="scorecard-note">one reference from channel to bank</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Once</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">02 Stock checked in the ERP</div><div className="scorecard-note">NetSuite, Business Central or Odoo</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Owner wins</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">03 Label booked</div><div className="scorecard-note">Royal Mail, DPD or Evri</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Tracked</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">04 Sale posted by VAT rate</div><div className="scorecard-note">Xero, Sage or QuickBooks UK</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Split</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">05 Odd cases to a person</div><div className="scorecard-note">with the reason attached</div></div>
                  <div className="scorecard-val" style={{ color: T.green, fontSize: 15 }}>Queued</div>
                </div>
                <p style={{ fontSize: 12.5, marginTop: 10 }}>
                  A sketch, not your build. We draw yours from the systems you name on the first call.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ANSWER-FIRST DEFINITION */}
        <section className="sec">
          <div className="wrap">
            <div className="def" style={{ maxWidth: 940 }} data-speakable="true">
              <span className="lab">What is AI workflow automation for a UK operations team?</span>
              <p>
                AI workflow automation is a set of workflows that pass orders, payouts, bills and stock between the systems a business
                already runs, such as Xero, Sage, Linnworks and an ERP, so nobody keys the same record twice. Most
                steps follow fixed rules. AI handles only the steps that read documents or emails. FactoryJet builds
                them in n8n, Make or Zapier, in accounts the client owns.
              </p>
            </div>
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">Three terms we use a lot</span>
              <p>
                A <b>trigger</b> is the event that starts a workflow, such as a new order or an email arriving in the
                accounts inbox. A <b>clearing account</b> is a holding account in your ledger where sales and fees
                wait until the payout that settles them reaches the bank. A <b>hand-off</b> is the point where the
                workflow stops and asks a named person to decide, with the reason shown.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              If you already run a few zaps (Zapier workflows) or scenarios (Make workflows), the usual trouble is one of them failing quietly on a
              Friday, so the VAT figures are short on Monday. So the first thing we
              design is what happens when a step fails, and the second is which system owns each number.
            </p>
          </div>
        </section>

        {/* 3. FACTS BAND (each one sourced) */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              {[
                { v: '500+', t: 'businesses served by FactoryJet since it was founded in 2014', s: 'About FactoryJet', u: '/about' },
                { v: 'API', t: 'transfer is on HMRC’s list of accepted digital links for Making Tax Digital; copy and paste is not', s: 'GOV.UK, VAT Notice 700/22', u: SRC.govNotice.url },
                { v: 'Aug 2026', t: 'is when the European Commission says the AI Act’s transparency rules apply', s: 'European Commission, AI Act', u: SRC.ecAiAct.url },
                { v: '1 run', t: 'counts as one execution on n8n Cloud, however many steps the workflow has', s: 'n8n, pricing', u: SRC.n8nPricing.url },
              ].map((r) => (
                <li key={r.t}>
                  <div style={{ fontFamily: T.fd, fontWeight: 800, fontSize: 26, color: T.orange }}>{r.v}</div>
                  <p style={{ fontSize: 13.5, color: T.ink, marginTop: 4 }}>{r.t}</p>
                  <a href={r.u} {...(r.u.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})} style={{ fontFamily: T.fm, fontSize: 12, color: T.n400, textDecoration: 'underline' }}>{r.s}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. WHAT WE AUTOMATE */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">What we automate</span>
              <h2>Six workflow chains UK operations teams ask us to build</h2>
              <p className="lead mt-4">
                Each one crosses at least two systems, runs every day, and costs money when a step is missed. That
                is the bar for automating anything.
              </p>
            </div>
            <ul className="col-2 mt-10">
              {CHAINS.map((c) => (
                <li key={c.t} className="card">
                  <h3>{c.t}</h3>
                  <p className="mt-4">{c.d}</p>
                </li>
              ))}
            </ul>
            <div className="card mt-10">
              <span className="eyebrow">Systems we connect for UK teams</span>
              <ul className="stack mt-4">
                {SYSTEMS.map((g) => (
                  <li key={g.group} style={{ fontSize: 14.5 }}>
                    <b>{g.group}:</b> {g.items.join(', ')}
                  </li>
                ))}
              </ul>
              <p className="mt-4" style={{ fontSize: 14 }}>
                Supplier bills are their own discipline, covered on our{' '}
                <a href="/uk/accounts-payable-automation" style={inlineLink}>UK accounts payable automation</a> page.
                For the Shopify and Xero pairing in detail, see{' '}
                <a href="/uk/shopify-xero-integration" style={inlineLink}>Shopify Xero integration</a>.
              </p>
            </div>
          </div>
        </section>

        {/* 5. AUTOMATE OR AGENT */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Rules first, AI second</span>
                <h2>Which steps need AI, and which need a plain rule</h2>
                <div className="stack mt-6">
                  <p>
                    A rule never guesses. If a GoCardless payout arrives, the matching step does the same thing every
                    time, and it should. Putting a language model there adds cost and a chance of a wrong answer for
                    no gain.
                  </p>
                  <p>
                    AI earns its place where the input has no fixed shape. A trade customer emails a purchase order as
                    a scanned PDF with their own part numbers. A supplier changes its invoice layout. A customer writes
                    one email that is half a return and half a new order. Those steps read, extract and propose, and a
                    person approves anything below the confidence line you set.
                  </p>
                  <p>
                    When a step has to choose between several actions on its own, that is agent work. Our{' '}
                    <a href="/uk/ai-agents" style={inlineLink}>UK AI agents page</a> covers it, and many projects start
                    as a workflow and add one agent step later.
                  </p>
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">A quick sort</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">Payout matched to bank line</div><div className="scorecard-note">same steps every time</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Rule</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Tracking sent to the marketplace</div><div className="scorecard-note">fixed fields, fixed order</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Rule</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Scanned PDF purchase order</div><div className="scorecard-note">read, then a person approves</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>AI step</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Mixed return and reorder email</div><div className="scorecard-note">has to pick an action</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Agent</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. n8n vs MAKE vs ZAPIER */}
        <section className="sec-lg dot-grid" id="n8n-make-zapier">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">Choosing the tool</span>
              <h2>n8n, Make and Zapier compared on billing, hosting and fit</h2>
              <p className="lead mt-4">
                We build in all three, so we have no reason to push one. The billing unit decides more than the
                feature list: a 12-step workflow that runs 3,000 times a month is priced differently on each.
              </p>
            </div>
            <p className="md:hidden mt-8" style={{ fontFamily: T.fm, fontSize: 12, color: T.n400 }}>Swipe sideways to see every column.</p>
            <div className="card mt-10" tabIndex={0} role="region" aria-label="n8n, Make and Zapier compared" style={{ padding: 0, overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}><table className="cmp-table" style={{ minWidth: 820 }} data-columns={4}>
                <thead>
                  <tr>
                    <th>Question</th>
                    <th>n8n</th>
                    <th>Make</th>
                    <th>Zapier</th>
                  </tr>
                </thead>
                <tbody>
                  {TOOLS_CMP.map((r) => (
                    <tr key={r.feat}>
                      <td className="feat">{r.feat}</td>
                      <td>{r.n8n}</td>
                      <td>{r.make}</td>
                      <td>{r.zapier}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={srcNote}>
              The first three rows restate each maker’s own pricing and hosting pages. The last row is our opinion
              from building in all three.
            </p>
            <Sources ids={['n8nPricing', 'n8nHosting', 'makePricing', 'zapierPricing']} />
            <div className="stack mt-10" style={{ maxWidth: 780 }}>
              <h3>n8n vs Zapier vs Make for a UK business</h3>
              <p>
                Start from the billing unit in the table. A short, linear job between popular apps usually fits
                Zapier, and a Zapier agency is the right call if your team already lives there. Branching
                jobs that operations staff want to read suit Make.com. Long, high-volume chains, or data that must
                stay on servers you name, point to n8n automation, self-hosted or on n8n Cloud.
              </p>
              <p>
                Hiring an n8n agency matters most when you self-host, because someone has to own the server
                updates and the backups. Building in-house works when you have a developer with time to keep the
                workflows alive after launch.
              </p>
              <h3 className="mt-6">Where Microsoft Power Automate fits</h3>
              <p>
                Microsoft describes Power Automate as a service for automated workflows between apps and services.
                Its desktop flows extend its robotic process automation (RPA), meaning software that works through
                screens the way a person would, to repetitive desktop tasks and legacy apps. That suits an old
                system with no API. Screen steps can break when a screen changes, so we use an API wherever the
                system offers one.
              </p>
              <p style={srcNote}>
                Sources, read on {READ_ON_2}:{' '}
                <a href={SRC.msPowerAutomate.url} target="_blank" rel="noopener noreferrer" style={srcLink}>Microsoft Learn: Power Automate home page</a>;{' '}
                <a href={SRC.msDesktopFlows.url} target="_blank" rel="noopener noreferrer" style={srcLink}>Microsoft Learn: Introduction to desktop flows</a>.
              </p>
            </div>
            <p className="mt-6" style={{ maxWidth: 780 }}>
              For a longer side-by-side, read our{' '}
              <a href="/blog/n8n-vs-zapier-vs-make-ai-workflow-automation-2026" style={inlineLink}>n8n vs Zapier vs Make guide</a>.
            </p>
          </div>
        </section>

        {/* 7. MTD, UK GDPR, EU AI ACT */}
        <section className="sec-lg" id="uk-rules">
          <div className="wrap">
            <div style={{ maxWidth: 820 }}>
              <span className="eyebrow">The rules a UK workflow touches</span>
              <h2>Making Tax Digital, UK GDPR and the EU AI Act, applied to workflows</h2>
            </div>
            <div className="stack mt-8" style={{ maxWidth: 820 }}>
              <h3>Making Tax Digital: the workflow is the digital link</h3>
              <p>
                HMRC’s VAT Notice 700/22, section 3.2.1, lists the methods it accepts as digital links between
                software, and says the list is not exhaustive. API transfer, automated data transfer and CSV import
                and export are on it. Copy and paste is not, and the notice rules out manual transfer within or
                between programs. A workflow that moves takings from Linnworks to Xero by API sits on the accepted
                side. One that exports a sheet for someone to retype figures does not. Your accountant checks the
                whole chain; we document each link so they can.
              </p>
              <Sources ids={['govNotice']} />

              <h3 className="mt-6">UK GDPR after the Data (Use and Access) Act 2025</h3>
              <p>
                The ICO says the Act received Royal Assent on 19 June 2025 and that all its provisions affecting
                data protection law are now in force. The ICO’s draft guidance on automated decision-making, updated
                31 March 2026 and still out for consultation, uses articles 22A to 22D of UK GDPR. It is aimed at
                decisions made with no meaningful human involvement that have a legal or similarly significant
                effect on a person. Matching a payout makes no such decision. Refusing a trade account
                automatically might. Where a workflow comes near that line, we put a person in the loop and log
                who approved what.
              </p>
              <Sources ids={['icoDuaa', 'icoAdm']} />

              <h3 className="mt-6">The EU AI Act, for UK firms that sell into the EU</h3>
              <p>
                Article 2 of the AI Act reaches providers placing AI systems on the EU market wherever they are
                based, and providers and deployers (businesses that use an AI system) outside the EU where the system’s output is used in the EU. The
                European Commission says the transparency rules apply from August 2026. Under Article 50, people
                who interact with an AI system should be told so, unless it is obvious. For a UK seller on Zalando
                or ManoMano with an AI step that writes to EU customers, that means telling those customers the
                messages come from AI. High-risk rules for the uses listed in Annex III, such as hiring and credit
                scoring, are dated 2 December 2027 on the Commission’s page. In our
                reading, most back-office workflows fall outside them. Your legal team makes the call; we build so they can.
              </p>
              <Sources ids={['aiActArt2', 'aiActArt50', 'ecAiAct']} />
            </div>
          </div>
        </section>

        <MidPageCTA
          headline={'One UK workflow, scoped and priced before you sign'}
          sub={'Tell us what starts it, the systems and versions involved, and how often it runs. On a short call we say whether any step needs AI and quote a fixed price for the first phase.'}
          label={'Book a scoping call'}
          note={'Bhavesh replies within one business day.'}
        />

        {/* 8. MARKET RANGES */}
        <section className="sec-lg dot-grid" id="cost">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">What it costs in the UK</span>
                <h2>Published UK build ranges, in pounds, with VAT stated</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  Three UK agencies publish build ranges for this work. We restate them exactly, with each one’s VAT
                  position, so you can compare like with like. FactoryJet quotes a fixed price in writing after a
                  short scoping call.
                </p>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">How to read a range</span>
                <p className="mt-4" style={{ fontSize: 14.5 }}>
                  Ranges move with the number of systems, whether a step reads documents, and how many exceptions
                  need a human route. A &ldquo;from&rdquo; figure is a floor. Augustova’s own UK AI Price Index
                  makes the same point about the prices it collects.
                </p>
                <Sources ids={['augustovaIndex']} />
              </div>
            </div>
            <p className="md:hidden mt-8" style={{ fontFamily: T.fm, fontSize: 12, color: T.n400 }}>Swipe sideways to see every column.</p>
            <div className="card mt-10" tabIndex={0} role="region" aria-label="UK AI automation build ranges" style={{ padding: 0, overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}><table className="cmp-table" style={{ minWidth: 820 }} data-columns={4}>
                <thead>
                  <tr>
                    <th>Agency</th>
                    <th>Job described</th>
                    <th className="fj">Published range</th>
                    <th>VAT</th>
                  </tr>
                </thead>
                <tbody>
                  {RANGES.map((r) => (
                    <tr key={`${r.firm}-${r.job}`}>
                      <td className="feat"><a href={SRC[r.src].url} target="_blank" rel="noopener noreferrer" style={srcLink}>{r.firm}</a></td>
                      <td>{r.job}</td>
                      <td className="fj">{r.range}</td>
                      <td>{r.vat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={srcNote}>
              Build prices only, as published on each agency’s own page. Tool subscriptions and AI usage are billed
              to your own accounts and are not part of these ranges.
            </p>
            <Sources ids={['augustovaPricing', 'aiConsultancy', 'ronins']} />
            <p className="mt-6" style={{ maxWidth: 780 }}>
              Comparing suppliers? Our list of the{' '}
              <a href="/blog/best-ai-automation-agencies-uk-2026" style={inlineLink}>best AI automation agencies in the UK</a>{' '}
              names other firms to send the same brief to.
            </p>
          </div>
        </section>

        {/* 9. PROOF */}
        <section className="sec-lg" id="proof">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">UK client work</span>
              <h2>UK trade builds where records move between systems without retyping</h2>
            </div>
            <ul className="col-2 mt-10">
              <li className="card">
                <span className="eyebrow">Promotional products · Commerceflo</span>
                <h3 className="mt-2">GPSUK</h3>
                <p className="mt-4">
                  A UK supplier of branded promotional products to business buyers. We built its trade storefront on
                  Commerceflo, where buyers log in, see their own account prices and move from quote to order with
                  nothing retyped from an email.
                </p>
                <p className="mt-4"><a href="/case-studies/gpsuk-promotional-products" style={inlineLink}>Read the GPSUK case study</a></p>
              </li>
              <li className="card">
                <span className="eyebrow">Wholesale · WooCommerce and Odoo</span>
                <h3 className="mt-2">Sow Easy</h3>
                <p className="mt-4">
                  A UK wholesale client. We are building a WordPress WooCommerce trade store that reads stock, pricing
                  and SKUs from Odoo, so the website never keeps a second copy of those numbers. The store and the
                  Odoo link are in build and being tested on staging.
                </p>
                <p className="mt-4"><a href="/case-studies/sow-easy-distributor-portal" style={inlineLink}>Read the Sow Easy case study</a></p>
              </li>
            </ul>
          </div>
        </section>

        {/* 10. HOW A PROJECT RUNS (NUMBERED) + HOUSE TERMS */}
        <section className="sec-lg dot-grid" id="how-we-build">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">How a project runs</span>
              <h2>Six steps from your brief to a supported workflow</h2>
              <p className="lead mt-4">
                Your accountant joins step three. Your data protection officer (DPO) or IT lead joins step four if personal data or self-hosting
                is involved.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {[
                { n: '01', t: 'A scoping call with the founder', d: 'Bhavesh asks which Sage or Xero edition you run, whether it is hosted or on premises, and which postings your accountant signs off. From those answers he says if any step needs AI, and whether n8n, Make or Zapier suits the volume.' },
                { n: '02', t: 'The workflow on your own data, before you sign', d: 'We run a few of your real orders, payouts or bills through the proposed steps, with names removed if you prefer, and show every record it writes and every case it hands to a person.' },
                { n: '03', t: 'Posting rules and owners agreed in writing', d: 'Your accountant names the account and VAT code for each kind of entry. Each record gets one owning system. Both go on a single page that you sign.' },
                { n: '04', t: 'A fixed price for each phase', d: 'Each phase is scoped, priced and signed on its own, with a dated schedule. Data location, credentials and any self-hosting are written into the scope.' },
                { n: '05', t: 'Build, test the awkward cases, go live', d: 'Part refunds, a zero-rated line, a rejected courier address and a duplicate webhook (the automatic message one system sends another when something happens) all run through before live data. Every failed step alerts email or Slack.' },
                { n: '06', t: 'Defect cover, then support only if you want it', d: 'Defects are fixed inside the build price for a cover period agreed before work starts. After that, each change is quoted and approved first, with no monthly minimum.' },
              ].map((s) => (
                <li key={s.n} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.small, minWidth: 34 }}>{s.n}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{s.t}</h3>
                    <p style={{ marginTop: 6 }}>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="col-6040 mt-12">
              <div>
                <h3>Terms</h3>
                <ul className="scope-list yes-list mt-4" style={{ maxWidth: 600 }}>
                  <li><b>Demo before you sign.</b> Working software on your own data before any contract.</li>
                  <li><b>You own it from day one.</b> The workflows, the code, the repository and the accounts they run in.</li>
                  <li><b>Your accounts, at cost.</b> AI and hosting can run in your own accounts, at cost, with no markup from us.</li>
                  <li><b>Defect cover inside the build price.</b> For a cover period agreed before work starts.</li>
                  <li><b>Support is optional.</b> Each change is quoted and approved. No monthly minimum.</li>
                  <li><b>Fixed price per phase.</b> Each phase scoped, priced and signed on its own.</li>
                </ul>
              </div>
              <div className="card card-top-orange" id="brief">
                <span className="eyebrow">Send us a brief or an RFP</span>
                <p className="mt-4" style={{ fontSize: 14.5 }}>
                  One page is enough, and it lets us reply with a scope rather than a sales call.
                </p>
                <div className="scorecard-row"><div><div className="scorecard-metric">The workflow and its trigger</div><div className="scorecard-note">what starts it, what ends it</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>1</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Every system, with version</div><div className="scorecard-note">e.g. Sage 200 on premises, Linnworks</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>2</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Volume and who does it today</div><div className="scorecard-note">times a week, which roles</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>3</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Three real examples</div><div className="scorecard-note">one of them awkward</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>4</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Data and compliance limits</div><div className="scorecard-note">where data may live, who signs off</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>5</div></div>
                <div className="mt-6">
                  <ModalCTAButton label="Send my brief" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11. RELATED UK PAGES */}
        <section className="sec">
          <div className="wrap">
            <div style={{ maxWidth: 820 }}>
              <span className="eyebrow">Related</span>
              <p className="mt-4">
                Deciding where AI fits before you build? See{' '}
                <a href="/uk/ai-consulting" style={inlineLink}>AI consulting in the UK</a>. Selling to trade buyers
                online? See <a href="/uk/b2b-ecommerce" style={inlineLink}>B2B ecommerce</a>. Need agent steps that
                judge rather than follow rules? See <a href="/uk/ai-agents" style={inlineLink}>AI agents</a>. Adding an AI
                model to software you already run? See{' '}
                <a href="/uk/ai-integration-services" style={inlineLink}>AI integration services</a>. Buying
                for a US entity as well? See our{' '}
                <a href="/services/ai-automation" style={inlineLink}>AI automation page for the US</a>.
              </p>
            </div>
          </div>
        </section>

        {/* 12. SOURCES */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Method</span>
              <h2>Sources and the dates we read them</h2>
              <p className="lead mt-4">
                Every law, tax rule, tool billing rule and market range on this page was read on the pages below on
                {' '}{READ_ON}. The Sage and Microsoft pages were read on {READ_ON_2}. Prices and guidance change, so
                open the linked page before you act on a figure.
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

        {/* 13. FAQ */}
        <section className="sec-lg" id="faq">
          <div className="wrap">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2>AI automation questions from UK operations and finance teams</h2>
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

        {/* 14. FINAL CTA (the only dark section) */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Next step</span>
            <h2>Pick one workflow. We will show it running on your records.</h2>
            <p className="mt-4">
              Send your name and work email, and attach a brief if you have one. Bhavesh answers within one business
              day and books a short call about the workflow and where your data may live. You leave knowing which tool
              fits and what the first phase costs.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="See a demo on my data" region="uk" modalVariant="default" btnVariant="primary-dark" />
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

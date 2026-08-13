import type { Metadata } from 'next';
import Link from 'next/link';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import { Heading } from '@/components/v2/Heading';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import CityContextSection from '@/components/v2/CityContextSection';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import ComparisonTable from '@/components/v2/ComparisonTable';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import MidPageCTA from '@/components/v2/MidPageCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata

   Note for future editors: this page targets essentially no organic search
   demand (measured 2026-08-06: the whole US vertical-agent keyword set is under
   1,000 searches a month, none with commercial intent). It exists as an
   LLM-citation and sales-collateral asset. Judge it on mention rate, never on
   rankings, and do not pad it to chase a keyword.
───────────────────────────────────────────────────────────────────────────── */

const PAGE_URL = 'https://factoryjet.com/services/ai-agent-development/rfq-bidding-agent';

export const metadata: Metadata = {
  title: 'RFQ Automation Agent for Quoting Teams | FactoryJet',
  description:
    'We build AI agents that read inbound RFQs from email, PDFs, buyer portals and EDI 840, match line items to your catalogue, and draft quotes for a human to approve.',
  keywords: [
    'RFQ automation agent',
    'AI agent for quoting',
    'automated RFQ processing',
    'quote automation for manufacturers',
    'RFQ to quote workflow',
    'EDI 840 automation',
    'bid response automation',
    'AI agent development company',
    'distributor quoting automation',
    'estimating automation',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'RFQ Automation Agent for Quoting Teams | FactoryJet',
    description:
      'AI agents that read inbound RFQs, extract line items, match them to your catalogue, apply your pricing rules, and draft a quote for approval.',
    url: PAGE_URL,
    images: [
      {
        url: 'https://factoryjet.com/images/services/ai-agent-development.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet AI agent development for RFQ and bidding workflows',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RFQ Automation Agent for Quoting Teams | FactoryJet',
    description: 'AI agents that read inbound RFQs, match line items to your catalogue, and draft quotes for approval.',
    images: ['https://factoryjet.com/images/services/ai-agent-development.webp'],
  },
  alternates: { canonical: PAGE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

/* Citations fetch-verified 2026-08-06 against the linked primary sources.
 * Do not edit a claim here without re-fetching the source page first.
 *  - TrueCommerce: EDI 840 is the Request for Quotation, and suppliers reply
 *    with an EDI 843 Response to Request for Quotation.
 *  - FAR 2.101: defines the Governmentwide point of entry and states it is
 *    located at https://www.sam.gov.
 *  - cxml.org: cXML is a protocol for exchanging business documents between
 *    procurement applications, e-commerce hubs and suppliers, including the
 *    widely used PunchOut feature.
 */
const SOURCED_REFERENCES = [
  {
    value: '840 / 843',
    label: 'The X12 EDI pair for quoting. Buyers send an 840 Request for Quotation; suppliers answer with an 843 Response to Request for Quotation.',
    sourceUrl: 'https://www.truecommerce.com/edi-transaction-codes/edi-840/',
    sourceLabel: 'TrueCommerce, EDI 840',
  },
  {
    value: 'SAM.gov',
    label: 'The Governmentwide point of entry defined in the Federal Acquisition Regulation, where federal opportunities and solicitations are published.',
    sourceUrl: 'https://www.acquisition.gov/far/2.101',
    sourceLabel: 'FAR 2.101',
  },
  {
    value: 'cXML',
    label: 'The protocol procurement applications, e-commerce hubs and suppliers use to exchange business documents, including the widely used PunchOut feature.',
    sourceUrl: 'https://cxml.org/',
    sourceLabel: 'cxml.org',
  },
];

const INTAKE_CHANNELS = [
  'Email to a shared sales or estimating inbox, detail in the attachment.',
  'PDF purchase specifications, bills of material, and scanned drawings with a title block.',
  'Excel and CSV line lists, every buyer using a different column order.',
  'Portal notifications from Coupa, SAP Ariba, Jaggaer, and Oracle Procurement.',
  'cXML punchout sessions and OCI catalogue calls that end in a requisition.',
  'EDI 840 request-for-quotation documents from accounts that will never use a portal.',
  'Public bid notices on SAM.gov, and state channels such as Texas SmartBuy.',
  'Web forms on your own site, usually missing half the information.',
  'CAD files (STEP, IGES, DXF), sometimes the only real description of the part.',
  'Photographs of a part, a nameplate, or a handwritten list, sent from a phone.',
  'Reorder requests written as free text against a purchase order from two years ago.',
  'Bid invitations forwarded by a rep, three replies deep, deadline buried in the middle.',
];

type PipelineStep = { n: string; title: string; body: string; points: string[] };

const PIPELINE: PipelineStep[] = [
  {
    n: '01',
    title: 'Intake and classification',
    body: 'Every channel lands in one queue. First the agent decides what the message is: a new request, a revision to one already open, a purchase order, or not a quote request at all.',
    points: [
      'Mailbox, portal, EDI, and web-form channels normalised into one record, original file kept.',
      'Duplicate and revision detection, so two estimators never price the same job.',
      'Routing by buyer account, region, and product line, using the ERP account master.',
    ],
  },
  {
    n: '02',
    title: 'Document parsing and OCR',
    body: 'Attachments become structured text. Native PDFs are read directly, scans and phone photos go through OCR, and drawings are evidence attached to a line, not a source of prices.',
    points: [
      'Native PDF text extraction first, OCR as the fallback for scans and photographs.',
      'Table detection for line grids running across pages or repeating their headers.',
      'STEP, IGES, and DXF files linked to the line they describe: title blocks read off the drawing, header and attribute metadata read off the model file.',
    ],
  },
  {
    n: '03',
    title: 'Line-item extraction',
    body: 'The agent pulls the fields an estimator would write down, and records how sure it is about each one. An unreadable part number is a different problem from an unreadable page.',
    points: [
      'Quantity, unit of measure, description, buyer part number, and revision, per line.',
      'Required date, delivery point, and Incoterms where the request states them.',
      'A confidence score on every extracted field, not just on the line.',
    ],
  },
  {
    n: '04',
    title: 'Part-number matching against your catalogue',
    body: 'This is where most quoting time goes, and where the gain is largest. The agent works down a ladder of looser matches and stops at the first one it can defend.',
    points: [
      'Exact match on your part number, then manufacturer part number, then GTIN.',
      'Retrieval over your catalogue for description-only lines, reading item data from the ERP or PIM.',
      'Cross-reference tables for competitor and customer part numbers, plus UNSPSC codes where buyers supply them.',
    ],
  },
  {
    n: '05',
    title: 'Quotability and exception checks',
    body: 'A matched part is not automatically a quotable part. Before any number exists, the agent asks your systems whether you can and should supply the item at all.',
    points: [
      'Catalogue status: active, superseded, obsolete, non-stock, or made to order.',
      'Compliance flags for country of origin, export-controlled items, and certification or material traceability.',
      'Lead-time and capacity checks against the ERP before a date is promised.',
    ],
  },
  {
    n: '06',
    title: 'Pricing rules and margin floors',
    body: 'The agent applies your rules and does not invent a price. Where the rules will not produce a defensible number, it stops and hands the line to a person.',
    points: [
      'Contract price lists, customer-specific pricing, and volume breaks read live from the ERP.',
      'Cost basis from current standard or landed cost, with freight, surcharge, and minimum-order rules on top.',
      'A margin floor per product line, below which the agent cannot produce a number and must escalate.',
    ],
  },
  {
    n: '07',
    title: 'Quote assembly and human approval',
    body: 'The output is a draft in your own template, shown to an estimator with its reasoning visible. Approval is a real gate, and it is the point of the whole design.',
    points: [
      'Every line traced back to the source document and page, checkable in seconds.',
      'An approval screen showing confidence, matched part, price rule applied, and resulting margin.',
      'Estimator edits captured as structured feedback, so a correction is not needed twice.',
    ],
  },
  {
    n: '08',
    title: 'Send, log, and follow up',
    body: 'An approved quote goes back through the channel it arrived on, and becomes a record in your systems rather than an attachment in a sent folder.',
    points: [
      'Quote written back to the ERP or quoting system, linked to the original request.',
      'EDI 843 returned where an EDI 840 came in, portal responses posted back to Coupa, Ariba, or Jaggaer.',
      'Follow-up on open quotes, with won, lost, and no-decision outcomes recorded.',
    ],
  },
];

const HUMAN_GATES = [
  'Any line where extraction confidence falls below the threshold you set.',
  'Any part the catalogue cannot match, and every substitution proposed.',
  'Any price that would land below the margin floor for that product line.',
  'Anything export controlled, certification bearing, or safety critical.',
  'New customers, and accounts on a credit hold or a past-due balance.',
  'Non-standard terms: liquidated damages, retainage, or a date the plant has not confirmed.',
  'Every quote above whatever value threshold you choose.',
  'The send itself, until you have watched enough approvals go through untouched.',
];

const ERP_SYSTEMS = [
  'NetSuite',
  'SAP Business One and S/4HANA',
  'Epicor Kinetic and Epicor Prophet 21',
  'Infor CloudSuite Industrial',
  'Acumatica',
  'Microsoft Dynamics 365 Business Central',
  'Odoo',
  'JobBOSS and E2 Shop, for shops running a shop system rather than a full ERP',
];

const CHANNEL_SYSTEMS = [
  'Coupa',
  'SAP Ariba',
  'Jaggaer',
  'Oracle Procurement',
  'SAM.gov, for federal opportunities',
  'State channels such as Texas SmartBuy and the Electronic State Business Daily',
  'Your own shared inboxes, web forms, and rep-forwarded threads',
];

const STANDARDS = [
  'EDI 840 request for quotation, and EDI 843 response to request for quotation',
  'EDI 850 purchase orders and EDI 855 acknowledgements, for when a quote becomes an order',
  'cXML punchout and OCI catalogue integration',
  'STEP, IGES, and DXF drawing files',
  'GS1 GTIN and manufacturer part numbers',
  'UNSPSC commodity classification on buyer-supplied lines',
  'Unit-of-measure and pack-quantity normalisation (each, box, case, foot, metre, pound, kilogram)',
  'Incoterms and delivery-point capture on international requests',
];

const MEASURES = [
  'Time from arrival to first quote sent, per channel.',
  'Share of inbound requests answered at all, including the ones you decline on purpose.',
  'Exception rate: how many lines needed a human before approval.',
  'Override rate: how often the estimator changed the price the rules produced.',
  'Match accuracy, sampled against estimator judgement on a fixed set of past requests.',
  'Margin on quoted work against margin on won work, by product line and buyer.',
  'Win rate by segment, so you can see which requests are worth answering.',
  'Backlog age: how long open requests sit before anyone touches them.',
];

const COMPARISON_COLUMNS = [
  { label: 'Agent-assisted quoting', isFactoryJet: true },
  { label: 'Manual quoting today' },
] as const;

const COMPARISON_ROWS = [
  {
    feature: 'Turnaround',
    values: [
      'Reading, extraction, and lookup happen on arrival. What remains is approval time.',
      'Bounded by estimator availability. A Friday afternoon request waits for Monday.',
    ],
  },
  {
    feature: 'Quote coverage',
    values: [
      'Every request parsed and logged, including the ones you decide not to bid.',
      'Awkward or low-value requests get skipped when the queue is long, with no record.',
    ],
  },
  {
    feature: 'Consistency of pricing',
    values: [
      'One versioned rule set, contract prices read from the ERP each time.',
      'Depends who quotes it and which spreadsheet or old quote they open.',
    ],
  },
  {
    feature: 'Auditability',
    values: [
      'Every extraction, match, and price decision logged against the source page.',
      'The reasoning lives in an email thread and in the memory of whoever quoted it.',
    ],
  },
  {
    feature: 'Where errors surface',
    values: [
      'At the approval screen, before the quote leaves the building.',
      'At the customer, after the quote is sent, or later at invoicing.',
    ],
  },
  {
    feature: 'Drawings and CAD files',
    values: [
      'Attached to the line they describe, unreadable pages flagged not assumed.',
      'Someone opens the PDF or STEP file and keeps the conclusion in their head.',
    ],
  },
  {
    feature: 'Portal and EDI requests',
    values: [
      'Ingested from the channel into the same queue as everything else.',
      'Re-keyed by hand out of Coupa, Ariba, Jaggaer, or SAM.gov.',
    ],
  },
  {
    feature: 'Capacity at peak',
    values: [
      'Queue depth is not limited by headcount. Approval throughput still is.',
      'Fixed by how many estimators are at their desks that week.',
    ],
  },
  {
    feature: 'What you can measure',
    values: [
      'Time to first quote, exception rate, override rate, win rate, backlog age.',
      'Rarely instrumented, so nobody knows which requests are worth answering.',
    ],
  },
];

const INDUSTRY_CARDS = [
  {
    name: 'Machine shops and job shops',
    description:
      'Drawings with a quantity and little else. The agent reads the drawing title block, links the STEP or DXF file to the line, checks material in JobBOSS or E2 Shop, and sends routing and setup estimates to a person.',
  },
  {
    name: 'Metal fabrication',
    description:
      'Bills of material spread across pages, mixed units of measure, grades written five ways. The agent normalises the lines, matches grade and gauge to your stock list, and flags traceability requirements.',
  },
  {
    name: 'Industrial distributors and MRO suppliers',
    description:
      'High line counts, competitor part numbers, contract pricing per account. The agent cross-references numbers, reads price lists from Epicor Prophet 21 or NetSuite, and hands inside sales a priced list to approve.',
  },
  {
    name: 'Contract manufacturers and OEM suppliers',
    description:
      'EDI 840 requests from national accounts beside spreadsheets from small buyers. Both land in one queue, both get the same rules, and the EDI side gets an EDI 843 back the same way.',
  },
  {
    name: 'Electrical, mechanical, and building contractors',
    description:
      'Bid invitations with addenda, deadlines buried in threads, takeoff lists in inconsistent formats. The agent tracks the deadline, keeps revisions attached to the invitation, and assembles the priced list.',
  },
  {
    name: 'Rubber, plastics, and process manufacturers',
    description:
      'Made-to-order items where quotability depends on tooling, minimum runs, and lead time. The agent checks catalogue status and capacity in the ERP, then escalates anything needing engineering input.',
  },
];

const JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Sample the real inbox',
    description: 'We take a batch of your actual requests, across every channel, and work out what share a machine could read reliably. That number sets the scope.',
  },
  {
    number: '02',
    title: 'Write down the rules',
    description: 'Pricing logic, margin floors, quotability checks, and escalation thresholds go into one document and get signed off before any code exists.',
  },
  {
    number: '03',
    title: 'Build the pipeline',
    description: 'Intake, parsing, extraction, catalogue matching, pricing, and the approval screen, connected to your ERP through its API or file interface.',
  },
  {
    number: '04',
    title: 'Run it in shadow mode',
    description: 'The agent quotes live requests while your team quotes them the normal way. You compare the two and tune thresholds before anything is customer facing.',
  },
  {
    number: '05',
    title: 'Open the gates gradually',
    description: 'Auto-approval starts on the narrowest safe slice, usually repeat catalogue items for existing accounts, and widens only when the numbers say it should.',
  },
];

const DARK_PILLARS = [
  {
    icon: '⏱',
    title: 'The reading is the bottleneck, not the pricing',
    body: 'Pricing a part you have identified is quick. Working out which part a buyer meant, from a scanned drawing and a number that is nearly yours, is where the day goes.',
  },
  {
    icon: '✉',
    title: 'Requests arrive in every format except a useful one',
    body: 'Email, PDF, spreadsheet, EDI 840, portal notification, phone photograph. Each needs a person to open, interpret, and re-key it. Nothing is normalised, so nothing can be queued or measured.',
  },
  {
    icon: '✕',
    title: 'The requests you skip never get counted',
    body: 'When the queue is long, awkward and low-value requests quietly go unanswered. Nobody logs them, so nobody knows how much work is being turned away.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ. The FAQPage schema below is generated by mapping over this exact array.
   Never hand-write a second copy of these questions.
───────────────────────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES = [
  { key: 'intake', label: 'Getting requests in' },
  { key: 'pipeline', label: 'How it quotes' },
  { key: 'control', label: 'Control and risk' },
  { key: 'systems', label: 'Systems and data' },
  { key: 'engagement', label: 'Working with us' },
];

const FAQ_ITEMS = [
  {
    category: 'intake',
    question: 'What is an RFQ and bidding agent?',
    answer:
      'Software that reads every incoming quote request, whatever form it arrives in, extracts the line items, matches them to your catalogue, applies your pricing rules, and drafts a quote for a person to approve. It does the reading and the lookup. Your estimator still decides.',
  },
  {
    category: 'intake',
    question: 'Our RFQs come in as PDFs and email attachments. Can it actually read those?',
    answer:
      'Yes. Native PDFs are read directly, scans and phone photographs go through OCR, and multi-page line tables are detected as tables rather than loose text. Anything it cannot read cleanly is flagged for a person, not guessed at.',
  },
  {
    category: 'intake',
    question: 'Can it pull requests out of buyer portals like Coupa, Ariba, and Jaggaer?',
    answer:
      'Yes, through the notification and API routes those platforms expose, plus cXML punchout and OCI where your catalogue is hosted for the buyer. Portal requests then land in the same queue as email, so you have one backlog instead of five.',
  },
  {
    category: 'intake',
    question: 'Do you handle EDI 840 request-for-quotation documents?',
    answer:
      'Yes. An EDI 840 is the cleanest input we get, because the lines are already structured. The agent prices it against your rules and returns an EDI 843 through the same connection, so the account keeps its existing workflow.',
  },
  {
    category: 'intake',
    question: 'Can it watch public bid channels like SAM.gov?',
    answer:
      'It can monitor SAM.gov and state channels such as Texas SmartBuy, filter notices against the categories you serve, and open a record for the ones worth reading. Whether to bid stays a human call. The agent stops you missing the notice.',
  },
  {
    category: 'intake',
    question: 'What about drawings? Can it read a STEP or DXF file?',
    answer:
      'It stores the file and links it to its line, then reads whatever that format actually carries: a title block on a drawing or DXF, header and attribute metadata on a STEP or IGES model. It does not infer a price from geometry. That judgement goes to your estimator with the file attached.',
  },
  {
    category: 'pipeline',
    question: 'How does it know which of our part numbers a customer means?',
    answer:
      'It works down a ladder: your part number, then manufacturer part number, then GTIN, then retrieval over your catalogue descriptions, then cross-reference tables for competitor and customer numbers. Each rung scores lower, and low confidence routes to a person.',
  },
  {
    category: 'pipeline',
    question: 'What happens when a line item has no match at all?',
    answer:
      'It becomes an exception on the approval screen, with the original text, the source page, and any near matches found. Nothing is dropped and nothing is invented. The estimator resolves it, and that resolution feeds back for next time.',
  },
  {
    category: 'pipeline',
    question: 'Can it decide whether a request is worth quoting at all?',
    answer:
      'It can apply your bid or no-bid rules: minimum value, product lines you serve, lead times you can meet, customers on credit hold, certifications you hold. It recommends, with reasons. Whether that is auto-applied is a threshold you set.',
  },
  {
    category: 'pipeline',
    question: 'Does the agent set the price?',
    answer:
      'No. It applies pricing you already have: contract price lists, customer-specific pricing, volume breaks, cost basis, freight and surcharge rules, all read from your ERP. Where the rules will not produce a defensible number, it escalates.',
  },
  {
    category: 'pipeline',
    question: 'Can it enforce a margin floor?',
    answer:
      'Yes, per product line or customer group. If the calculated price would fall below the floor, the agent cannot produce that line and routes it for approval with the shortfall shown. This is usually the first control a quoting manager asks for.',
  },
  {
    category: 'pipeline',
    question: 'Does it handle units of measure and pack quantities?',
    answer:
      'Yes, and this is where quiet errors come from. Buyers ask in eaches when you sell in boxes, in feet when your master is in metres. The agent normalises units against your item master and flags shaky conversions.',
  },
  {
    category: 'control',
    question: 'Where does a human have to stay involved?',
    answer:
      'At approval, always, at least at first. Also on low-confidence extractions, unmatched parts and substitutions, prices below the margin floor, anything export controlled or certification bearing, new customers, credit holds, and non-standard terms.',
  },
  {
    category: 'control',
    question: 'What stops it sending a wrong quote to a customer?',
    answer:
      'Three things. Nothing sends without approval until you turn that gate off. Confidence thresholds route uncertain lines to a person. And margin floors and quotability checks stop whole classes of bad quote being assembled at all.',
  },
  {
    category: 'control',
    question: 'Can we see why it produced a given number?',
    answer:
      'Yes. Every line records the source document and page, the extracted fields and their confidence, the match rung that produced the part, the price rule applied, and the margin. An auditor can reconstruct it months later.',
  },
  {
    category: 'control',
    question: 'What if our estimators override it constantly?',
    answer:
      'Then the rules are wrong, and the override rate tells you where. We track overrides by product line and by rule, so disagreements become a work list. A high override rate usually means one bad assumption, not a bad system.',
  },
  {
    category: 'systems',
    question: 'Which ERPs do you connect to?',
    answer:
      'NetSuite, SAP Business One and S/4HANA, Epicor Kinetic and Prophet 21, Infor CloudSuite Industrial, Acumatica, Microsoft Dynamics 365 Business Central, and Odoo. Where no connector exists, we build against the ERP API or its file interface.',
  },
  {
    category: 'systems',
    question: 'We run Epicor Prophet 21 and a separate shop system. Does that work?',
    answer:
      'Yes, and it is a common shape. Pricing, customers, and inventory read from Prophet 21, while routing and capacity go to the shop system, usually JobBOSS or E2 Shop. The agent reads both and writes the quote to the system of record.',
  },
  {
    category: 'systems',
    question: 'Do we have to replace our quoting software?',
    answer:
      'No. There are good quoting products in this market, and if one fits your shop, keep it. What we build sits in front of it, doing the intake, reading, and matching, then writes the quote into the system you already use.',
  },
  {
    category: 'systems',
    question: 'Where does our data live, and who can see it?',
    answer:
      'In your systems. The agent reads pricing, inventory, and customer records from your ERP through API integrations and writes quotes back there. We apply least-privilege access, keep an audit log, and document every data flow at handover.',
  },
  {
    category: 'engagement',
    question: 'How long does a build like this take?',
    answer:
      'It depends far more on your catalogue and pricing rules than on the AI. One channel with a clean item master takes weeks. Multi-channel intake with EDI, portals, and messy part data takes longer. We give a firm timeline after sampling.',
  },
  {
    category: 'engagement',
    question: 'What do you need from us to start?',
    answer:
      'A batch of real quote requests across every channel, read access to your ERP or quoting system, your item master and price lists, and an hour with whoever actually knows the pricing rules. That last one matters most.',
  },
  {
    category: 'engagement',
    question: 'Who owns the code and the integrations?',
    answer:
      'You do. Code, integrations, prompts, rule definitions, and documentation are handed over at delivery. There is no FactoryJet subscription holding the system hostage, and you can pass it to another team whenever you want.',
  },
  {
    category: 'engagement',
    question: 'How do you charge for this?',
    answer:
      'We scope it on a call, then send a fixed proposal before any work starts, so you can judge it before committing. No hourly billing, no surprises mid-build. If sampling shows the automation will not pay off, we say so.',
  },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD

   Every schema const declared below is rendered into a
   <script type="application/ld+json"> in the component. Declaring a schema
   const and never rendering it is a known past defect here, and tsc cannot
   catch it (docs/AI-SEO-RULEBOOK.md §8).
───────────────────────────────────────────────────────────────────────────── */

const PAGE_MODIFIED = '2026-08-06';

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: 'RFQ Automation Agent for Quoting Teams',
  description:
    'AI agents that read inbound RFQs from email, PDFs, buyer portals and EDI 840, match line items to your catalogue, apply your pricing rules, and draft quotes for human approval.',
  dateModified: PAGE_MODIFIED,
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
    jobTitle: 'Founder, FactoryJet',
  },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'RFQ and bidding agent development',
  name: 'RFQ and bidding agent development',
  description:
    'Custom AI agent development for quote request handling: multi-channel intake from email, PDF, spreadsheets, buyer portals and EDI 840, document parsing and OCR, line-item extraction, catalogue and part-number matching, pricing rules with margin floors, human approval, and quote generation written back to the ERP.',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'BusinessAudience', name: 'Manufacturers, fabricators, distributors and contractors' },
};

const HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How an RFQ and bidding agent turns an inbound request into a quote',
  description:
    'The end-to-end pipeline FactoryJet builds for quote request handling, from multi-channel intake through to a quote approved by a human and returned to the buyer.',
  step: PIPELINE.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.title,
    text: step.body,
  })),
};

const BREADCRUMB_ITEMS = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'AI Agent Development', url: 'https://factoryjet.com/services/ai-agent-development' },
  { name: 'RFQ & Bidding Agent', url: PAGE_URL },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Shared inline bits
───────────────────────────────────────────────────────────────────────────── */

const tick = (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
    <path d="M1 4l2.5 2.5L9 1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function TickList({ items }: { items: ReadonlyArray<string> }) {
  return (
    <ul className="mt-5 grid gap-3" role="list">
      {items.map((item) => (
        <li key={item} className="flex gap-3 font-fj-body text-fj-neutral-600" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
          <span
            className="mt-1 inline-flex h-[18px] w-[18px] flex-none items-center justify-center rounded-full"
            style={{ background: 'rgba(240,90,40,0.10)', color: '#B23E13' }}
          >
            {tick}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function RFQBiddingAgentPage() {
  return (
    <>
      <script id="rfq-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="rfq-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="rfq-howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }} />
      <script id="rfq-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />

      <main className="bg-fj-cream">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        <Hero
          eyebrow="RFQ & BIDDING AGENT"
          headline="Every quote request read, matched and drafted before an estimator opens it"
          lead="Quote requests arrive as email, PDF drawings, spreadsheets and portal notifications. Someone reads every one, finds the part numbers, checks whether it is quotable, prices it and replies. We build agents that do the reading and the lookup, then hand a draft to your estimator."
          formSlot={<HeroInlineForm region="us" source="us_rfq_bidding_agent_hero" submitLabel="Get a quoting workflow review" />}
          trustItems={['Reads email, PDF, EDI 840 and portal requests', 'Prices from your ERP, not a copy', 'A human approves before anything is sent']}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p className="font-fj-mono font-medium uppercase text-[#B23E13]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>
                ONE REQUEST, END TO END
              </p>
              <p className="mt-4 font-fj-display text-[1.75rem] font-medium leading-[1.12] tracking-[-0.025em] text-fj-ink">
                A scanned bill of material becomes a priced, traceable draft waiting for approval.
              </p>
              <ol className="mt-6 space-y-3" role="list">
                {[
                  'Buyer emails a 40-line scanned BOM at 6 pm on Friday.',
                  'OCR runs, the table is detected, 40 lines extracted with per-field confidence.',
                  'Part numbers matched against the item master, 3 lines flagged unmatched.',
                  'Contract pricing read from the ERP, 1 line falls under the margin floor.',
                  'Estimator opens Monday to a draft quote and 4 decisions, not 40.',
                ].map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#F05A28]/10 font-fj-mono text-[10px] font-bold text-[#B23E13]">
                      {i + 1}
                    </span>
                    <p className="font-fj-body text-[0.875rem] leading-[1.5] text-fj-neutral-600">{step}</p>
                  </li>
                ))}
              </ol>
              <div className="mt-6 border-t border-fj-neutral-100 pt-6">
                <p className="font-fj-body text-[0.8125rem] text-fj-neutral-400">
                  Illustrative walkthrough of the pipeline below, not a client result.
                </p>
              </div>
            </div>
          }
        />

        {/* ── Answer-first block ─────────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="THE SHORT ANSWER"
          headline="What an RFQ and bidding agent actually is"
          lead="An RFQ and bidding agent is software that reads every incoming quote request, whatever form it arrives in, extracts the line items, matches them to your catalogue, applies your pricing rules, and drafts a quote for a person to approve. It does the reading and the lookup. Your estimator still decides."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {['Intake', 'OCR & parsing', 'Line extraction', 'Part matching', 'Pricing rules', 'Margin floors', 'Human approval', 'Follow-up'].map((cap) => (
                  <span
                    key={cap}
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-semibold uppercase text-[#B23E13]"
                    style={{ fontSize: '10px', letterSpacing: '0.10em' }}
                  >
                    {cap}
                  </span>
                ))}
              </div>
              <p>
                Slow quotes lose work, and not because the price was wrong. The buyer accepted someone else&apos;s number
                first. Nobody in a quoting team is measured on the hours a request sits unopened, which is why those hours
                never get fixed.
              </p>
              <p>
                We build these against your ERP, your item master and your pricing rules, not as a hosted product you rent.
                You own the code and the integrations at handover. If an off-the-shelf quoting product already fits your
                shop, we will say so instead of selling you a build.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p className="font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>
                  What the agent does, and does not, decide
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { k: 'Agent', v: 'Reads the request, extracts lines, matches parts, applies your price rules, assembles a draft.' },
                  { k: 'Agent', v: 'Flags exceptions: unmatched parts, low confidence, margin-floor breaches, compliance holds.' },
                  { k: 'Human', v: 'Resolves exceptions, approves the draft, makes the bid or no-bid judgement calls.' },
                  { k: 'Human', v: 'Owns anything export controlled, certification bearing, or commercially non-standard.' },
                ].map((row) => (
                  <div key={row.v} className="px-7 py-4">
                    <p className="font-fj-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#B23E13]">{row.k}</p>
                    <p className="mt-1 font-fj-body text-fj-neutral-600" style={{ fontSize: '0.875rem', lineHeight: 1.55 }}>
                      {row.v}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        {/* ── Intake channels + fetch-verified references ────────────────── */}
        <CityContextSection
          eyebrow="WHERE REQUESTS COME FROM"
          headline="Twelve doors into one estimating inbox"
          leadParagraphs={[
            'Quoting is slow because a quote request is not a form. It is whatever the buyer happened to send, from whatever system their procurement team runs, and someone has to turn all of it into the same shape before a price can exist.',
            'An agent earns its place by normalising that on arrival. Every channel below lands in one queue with the original document kept, so the backlog is one list you can measure.',
          ]}
          bodySlot={
            <>
              <div className="border-l-2 border-[#F05A28] py-1 pl-5">
                <p className="font-fj-display font-semibold text-fj-ink" style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}>
                  If you cannot see one queue, you cannot see what you are turning away.
                </p>
              </div>
              <TickList items={INTAKE_CHANNELS} />
            </>
          }
          stats={SOURCED_REFERENCES}
        />

        {/* ── The pipeline ───────────────────────────────────────────────── */}
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="font-fj-mono font-medium uppercase text-[#B23E13]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>
              THE PIPELINE
            </p>
            <Heading as="h2" className="mt-3 max-w-[20ch] text-fj-ink">
              From an unread attachment to a draft quote
            </Heading>
            <p className="mt-5 max-w-[68ch] font-fj-body text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}>
              Eight steps, in order. Each one either produces a result the next step can use, or an exception a person has
              to look at. There is no step where the agent guesses to keep things moving.
            </p>

            <ol className="mt-12 grid gap-10 md:grid-cols-2 md:gap-x-12" role="list">
              {PIPELINE.map((step) => (
                <li key={step.n} className="border-t border-fj-neutral-200 pt-6">
                  <span className="font-fj-mono text-[11px] font-bold tracking-[0.14em] text-[#B23E13]">{step.n}</span>
                  <h3 className="mt-3 font-fj-display font-semibold text-fj-ink" style={{ fontSize: '1.3125rem', lineHeight: 1.25, letterSpacing: '-0.02em' }}>
                    {step.title}
                  </h3>
                  <p className="mt-3 font-fj-body text-fj-neutral-600" style={{ fontSize: '0.9375rem', lineHeight: 1.65 }}>
                    {step.body}
                  </p>
                  <ul className="mt-4 grid gap-2.5" role="list">
                    {step.points.map((point) => (
                      <li key={point} className="flex gap-3 font-fj-body text-fj-neutral-500" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
                        <span
                          className="mt-[7px] inline-block h-[5px] w-[5px] flex-none rounded-full"
                          style={{ backgroundColor: '#F05A28' }}
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Human in the loop ──────────────────────────────────────────── */}
        <section className="py-16 md:py-24" style={{ backgroundColor: '#FAFAF7' }}>
          <div className="mx-auto grid max-w-[1120px] gap-10 px-6 md:grid-cols-[7fr_5fr] md:gap-16 md:px-8">
            <div>
              <p className="font-fj-mono font-medium uppercase text-[#B23E13]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>
                HUMAN IN THE LOOP
              </p>
              <Heading as="h2" className="mt-3 max-w-[22ch] text-fj-ink">
                The gates we do not take out
              </Heading>
              <p className="mt-5 max-w-[62ch] font-fj-body text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}>
                Full autonomy is the wrong goal for quoting. A wrong quote is a contract you have to honour or a customer
                you have to win back. A person stays at the gate, and the automation is judged on how few decisions it
                puts in front of them.
              </p>
              <TickList items={HUMAN_GATES} />
            </div>
            <aside className="self-start rounded-2xl border border-fj-neutral-200 bg-white p-7 shadow-sm">
              <p className="font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>
                How autonomy widens
              </p>
              <ol className="mt-5 grid gap-4" role="list">
                {[
                  'Shadow mode. The agent quotes alongside your team. Nothing is sent.',
                  'Assisted mode. Drafts go to an estimator. Every quote approved by hand.',
                  'Narrow auto-approval. Repeat catalogue lines, existing accounts, inside the margin floor.',
                  'Wider auto-approval, one rule at a time, where the override rate says it earned it.',
                ].map((item, i) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full border border-[rgba(240,90,40,0.3)] font-fj-mono text-[10px] font-bold text-[#B23E13]">
                      {i + 1}
                    </span>
                    <p className="font-fj-body text-fj-neutral-600" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
                      {item}
                    </p>
                  </li>
                ))}
              </ol>
              <p className="mt-6 border-t border-fj-neutral-100 pt-5 font-fj-body text-fj-neutral-400" style={{ fontSize: '0.8125rem', lineHeight: 1.55 }}>
                Plenty of quoting teams stop at stage three on purpose.
              </p>
            </aside>
          </div>
        </section>

    

        <MidPageCTA
          headline={'Quoting team buried in RFQs?'}
          sub={'Tell us how many you handle a week and where they come from. We will map which parts an agent can safely take.'}
          label={'Talk about your RFQ flow'}
        />

        {/* ── Systems and standards ──────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="SYSTEMS AND STANDARDS"
          headline="What it has to plug into to be useful"
          lead="A quoting agent is only as good as the data it reads. Pricing, stock, lead time and account terms have to come from the system that owns them, not an export that went stale last quarter."
          reverseOnDesktop
          body={
            <>
              <p>
                Three connections do the work: the ERP or shop system holding your item master and pricing, the channels
                your buyers send through, and the document standards those requests are written in.
              </p>
              <h3 className="mt-8 font-fj-display font-semibold text-fj-ink" style={{ fontSize: '1.125rem', letterSpacing: '-0.015em' }}>
                ERP, quoting and shop systems
              </h3>
              <TickList items={ERP_SYSTEMS} />
              <h3 className="mt-8 font-fj-display font-semibold text-fj-ink" style={{ fontSize: '1.125rem', letterSpacing: '-0.015em' }}>
                Procurement portals and bid channels
              </h3>
              <TickList items={CHANNEL_SYSTEMS} />
              <h3 className="mt-8 font-fj-display font-semibold text-fj-ink" style={{ fontSize: '1.125rem', letterSpacing: '-0.015em' }}>
                Standards and formats
              </h3>
              <TickList items={STANDARDS} />
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p className="font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>
                  Which direction the data moves
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { k: 'Read from the ERP', v: 'Item master, contract and tiered price lists, cost basis, inventory by location, lead times, credit status.' },
                  { k: 'Read from the request', v: 'Line items, quantities, units of measure, buyer part numbers, revisions, required dates, attachments.' },
                  { k: 'Written back', v: 'The approved quote as an ERP record, an EDI 843 where an 840 came in, a portal response where a portal sent it.' },
                  { k: 'Logged either way', v: 'Every extraction, match, price rule and human override, kept against the source document.' },
                ].map((row) => (
                  <div key={row.k} className="px-7 py-4">
                    <p className="font-fj-body font-semibold text-fj-ink" style={{ fontSize: '0.9rem' }}>{row.k}</p>
                    <p className="mt-1 font-fj-body text-fj-neutral-500" style={{ fontSize: '0.8125rem', lineHeight: 1.6 }}>
                      {row.v}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        {/* ── Mid-page CTA ───────────────────────────────────────────────── */}
        <section
          className="py-14 md:py-16"
          style={{ backgroundColor: '#FAFAF7', borderTop: '1.5px solid rgba(240,90,40,0.18)', borderBottom: '1.5px solid rgba(240,90,40,0.18)' }}
        >
          <div className="mx-auto max-w-[720px] px-6 text-center md:px-8">
            <p className="font-fj-mono font-medium uppercase text-[#B23E13]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>
              BEFORE YOU SCOPE ANYTHING
            </p>
            <p
              className="mt-4 font-fj-display font-semibold text-fj-ink"
              style={{ fontSize: 'clamp(1.375rem, 2.6vw, 1.875rem)', lineHeight: 1.2, letterSpacing: '-0.02em' }}
            >
              Send us a week of real quote requests and we will tell you what share a machine could read.
            </p>
            <p className="mx-auto mt-4 max-w-[52ch] font-fj-body text-fj-neutral-600" style={{ fontSize: '0.9375rem', lineHeight: 1.65 }}>
              That number decides whether this is worth building for you. If it comes back low, we say so on the call.
            </p>
            <div className="mt-7">
              <ModalCTAButton label="Talk to the Founder" region="us" btnVariant="primary-light" />
            </div>
          </div>
        </section>

        {/* ── The problem (this page's single dark section) ──────────────── */}
        <StrategicDarkSection
          eyebrow="WHY QUOTES ARE SLOW"
          headline="Nobody is paid to fix the hours a request spends unopened"
          lead="Estimators are measured on the quotes they produce. The queue in front of them is invisible, so the delay that loses the work never becomes anyone's problem."
          pillars={DARK_PILLARS}
        />

        {/* ── Comparison ─────────────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="MANUAL VS AGENT-ASSISTED"
          headline="What changes structurally when an agent does the reading"
          lead="No percentages here, on purpose. We have not measured your shop, and invented time savings are worth nothing to you. This compares how the two paths behave and what each lets you see."
          pullQuote={{
            stat: 'Same rules, every time',
            caption:
              'The gain is not that a machine is cleverer than your estimator. It is that it applies the same rules to the hundredth request of the week as to the first, and writes down why.',
          }}
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
          footer="Structural comparison only. Timing and win-rate figures for your business come from your own baseline, measured before and after, not from this page."
        />

        {/* ── Measurement ────────────────────────────────────────────────── */}
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-[1120px] gap-10 px-6 md:grid-cols-[5fr_7fr] md:gap-16 md:px-8">
            <div>
              <p className="font-fj-mono font-medium uppercase text-[#B23E13]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>
                MEASUREMENT
              </p>
              <Heading as="h2" className="mt-3 max-w-[18ch] text-fj-ink">
                What we instrument on day one
              </Heading>
              <p className="mt-5 font-fj-body text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}>
                Most quoting operations have never measured themselves, which is why claims about time saved are easy to
                make and hard to check. We take a baseline from your own history first, then track the same numbers after.
              </p>
            </div>
            <div>
              <TickList items={MEASURES} />
              <p className="mt-7 border-t border-fj-neutral-200 pt-5 font-fj-body text-fj-neutral-400" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
                If the baseline shows quoting is already fast and win rate is limited by price rather than speed, an RFQ
                agent is the wrong investment, and we will say so before you spend anything.
              </p>
            </div>
          </div>
        </section>

        {/* ── Industries ─────────────────────────────────────────────────── */}
        <IndustriesGrid
          variant="cards"
          eyebrow="WHO THIS IS FOR"
          headline="Different shops, the same bottleneck"
          lead="The reading problem looks different in each of these, and the rules the agent applies differ too. The step that eats the day is the same one."
          sectors={INDUSTRY_CARDS}
        />

        {/* ── How we build ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="HOW WE BUILD IT"
          headline="Sample first, automate second"
          lead="We start by proving how much of your inbound volume is machine-readable at all, because that number decides whether the rest is worth doing."
          stages={JOURNEY_STAGES}
          closingNote="You watch the agent quote your own historic requests before it touches a live one."
        />

        <FAQ
          eyebrow="RFQ AGENT FAQ"
          headline="Questions quoting teams ask before they build"
          lead="The questions that come up on nearly every scoping call about RFQ automation, answered plainly."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        <div id="final-cta">
          <FinalCTA
            variant="light"
            eyebrow="NEXT STEP"
            headline="Find out what your quote queue is costing you"
            sub="Bring a week of real requests and whoever knows your pricing rules. We will map what an agent could read, where a human would still sit, and what a build would take."
            primaryCta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
            secondaryCta={{ label: 'See all AI agent services', href: '/services/ai-agent-development' }}
            objectionHandler="Fixed proposal before any work starts. You own the code and the integrations at handover."
          />
        </div>

        <section className="bg-fj-cream pb-16">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="font-fj-body text-fj-neutral-500" style={{ fontSize: '0.875rem', lineHeight: 1.7 }}>
              Related:{' '}
              <Link href="/services/ai-agent-development" style={{ color: '#B23E13', textDecoration: 'underline' }}>
                AI agent development
              </Link>
              ,{' '}
              <Link href="/b2b-ecommerce" style={{ color: '#B23E13', textDecoration: 'underline' }}>
                B2B e-commerce with ERP integration
              </Link>
              , and{' '}
              <Link href="/ecommerce-for-manufacturers" style={{ color: '#B23E13', textDecoration: 'underline' }}>
                e-commerce for manufacturers and distributors
              </Link>
              , which covers dealer portals, EDI and punchout on the ordering side.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

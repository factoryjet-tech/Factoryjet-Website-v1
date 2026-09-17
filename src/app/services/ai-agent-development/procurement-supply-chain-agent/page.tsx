import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

/* ─────────────────────────────────────────────────────────────────────────────
   Metadata
───────────────────────────────────────────────────────────────────────────── */

const PAGE_URL = 'https://factoryjet.com/services/ai-agent-development/procurement-supply-chain-agent';

export const metadata: Metadata = {
  title: 'Procurement & Supply Chain AI Agent Development | FactoryJet',
  description:
    'We build AI agents that triage supplier emails, parse acknowledgements, extract promised dates and reconcile open POs in NetSuite, SAP and Business Central.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Procurement & Supply Chain AI Agent Development | FactoryJet',
    description:
      'AI agents for purchasing teams: supplier email triage, acknowledgement parsing, promised-date reconciliation, delay alerting and three-way match exceptions, with approval-gated ERP write-back.',
    url: PAGE_URL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet, procurement and supply chain AI agent development' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Procurement & Supply Chain AI Agent Development | FactoryJet',
    description: 'AI agents that read supplier email, extract promised dates and reconcile them against your open purchase orders under approval.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ, single source of truth for both the visible section and FAQPage JSON-LD
───────────────────────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES = [
  { key: 'basics', label: 'The basics' },
  { key: 'safety', label: 'Safety & approval' },
  { key: 'data', label: 'Supplier data' },
  { key: 'systems', label: 'Systems & standards' },
  { key: 'working', label: 'Working together' },
];

const FAQ_ITEMS = [
  { category: 'basics', question: 'What is a procurement AI agent?', answer: 'Software that reads supplier emails received by your purchasing team. It extracts the order number, promised ship date, quantity, and contract pricing. Next, it compares each field against matching open purchase orders in your ERP. Anything that disagrees routes directly to a buyer exception queue for human in the loop review.' },
  { category: 'basics', question: 'How is this different from the alerts our ERP already has?', answer: 'Your ERP can only alert on data already inside it. The promised date often lives in an email nobody has opened. The agent works the inbox first and performs live ERP sync second. This matches the exact order that supplier information arrives in.' },
  { category: 'basics', question: 'Do we need EDI for this to work?', answer: 'No, and that is usually the point. Teams already receiving an EDI 855 acknowledgement from every supplier do not need an agent. They just need better data mapping. This agent exists for the long tail of suppliers who do not trade EDI and keep sending email and PDF attachments.' },
  { category: 'basics', question: 'Our suppliers send acknowledgements as PDF attachments. Does that work?', answer: 'Yes, that is the normal case. The agent reads the PDF, whether generated or scanned, and extracts line-level fields. Scan quality varies across suppliers. Low-confidence extractions route to an exception queue for a human buyer instead of being written into the ERP directly.' },
  { category: 'basics', question: 'Can it handle a supplier who never acknowledges anything?', answer: 'It handles the silence directly. When a PO passes your acknowledgement window with nothing back, the agent drafts a chase email. It names the PO, line, part number, bill of materials (BOM), and expected date. The draft waits for a buyer to click send.' },
  { category: 'safety', question: 'Will it change dates in our ERP without asking?', answer: 'Only inside strict limits you set, and only on fields you explicitly allow. Everything else routes to a buyer. Most teams start in propose-only mode where the agent writes nothing. You enable write-back on narrow fields once agreement rates pass ninety-five percent.' },
  { category: 'safety', question: 'What happens when the agent reads a date wrong?', answer: 'Two safeguards catch errors. Extraction confidence below your threshold prevents any write from occurring. Variances outside your tolerance rules route the line to a person. If a wrong value ever slips through, every write stores previous values so the entire batch can be reverted.' },
  { category: 'safety', question: 'What is a tolerance rule?', answer: 'A tolerance rule decides whether a variance is routine or requires a human buyer. A promised date three days later than the PO might apply automatically. A three-week delay goes straight to the buyer. You set separate tolerances for date, quantity, tiered pricing, and volume pricing.' },
  { category: 'safety', question: 'How do we roll back a bad batch?', answer: 'Every write records the source message, extracted values, confidence scores, previous values, run identifiers, and approver details. Reverting replays the previous values for that specific run. Field-level role-based access control (RBAC) ensures rollbacks cannot touch unmanaged data.' },
  { category: 'safety', question: 'Will it approve invoices or release payments?', answer: 'No. The agent surfaces three-way match exceptions by comparing purchase orders, goods receipts in the WMS, and supplier invoices. Approving, posting, and releasing payments stay strictly with your accounts payable team inside your existing financial controls.' },
  { category: 'safety', question: 'What about supplier bank detail change requests?', answer: 'The agent flags bank change requests instantly and never applies them. Bank detail changes arriving by email represent a major fraud risk. The message receives a high-priority alert, notifying buyers and finance for out-of-band phone verification.' },
  { category: 'safety', question: 'Does it send emails to our suppliers on its own?', answer: 'Not by default. Follow-up emails are drafted into the buyer thread with PO numbers, line items, and net terms pre-populated. Some teams later allow automatic sending for simple first chases after reviewing draft accuracy.' },
  { category: 'data', question: 'What happens when a supplier says something vague like end of month?', answer: 'It becomes a date range with an explicit ambiguity flag, never false precision. Inventing precision destroys trust across planning teams. A flagged range tells the truth about what the supplier actually said, keeping material requirements planning (MRP) models honest.' },
  { category: 'data', question: 'How does it know which purchase order an email belongs to?', answer: 'It matches multiple signals together: the PO number, part numbers, supplier domain, and open purchase orders. When matching confidence is low, it asks. A correct date placed on the wrong line is worse than no date at all.' },
  { category: 'data', question: 'Can it tell us which customer order a delay affects?', answer: 'Yes, where the link exists in your system. If a purchase order line is pegged to a work order or sales order, the alert names the exposed order, customer, and date at risk. It alerts stakeholders. It never reschedules factory machines or moves customer promise dates.' },
  { category: 'data', question: 'Can it handle price change notices?', answer: 'Yes. Price changes are classified as their own message type. Old and new unit prices are extracted and compared against contract pricing, tiered pricing, and price lists. Significant price movements route to a buyer for commercial renegotiation.' },
  { category: 'systems', question: 'Which ERPs can you write back to?', answer: 'Oracle NetSuite, SAP S/4HANA, SAP Business One, Microsoft Dynamics 365 Business Central, Acumatica, Epicor Prophet 21, and Infor CloudSuite. Where supported APIs exist, we use them. Where they do not, the agent stays in propose-only mode.' },
  { category: 'systems', question: 'Can it work inside Coupa, Ariba or Jaggaer instead of the ERP?', answer: 'Yes, and often alongside them. Requisition intake and approval routing usually live in Coupa, Ariba, or Jaggaer, while promised dates and receipts live in the ERP. We map which system is authoritative for each field before writing any code.' },
  { category: 'working', question: 'How long before it does anything useful?', answer: 'The first useful output is classification and an exception review queue. This can run against live email early because it writes nothing. Two-way ERP sync comes later, after measuring agreement on real buyer traffic.' },
  { category: 'working', question: 'What do you need from us to start?', answer: 'A representative sample of real supplier email, read access to your ERP for purchase orders and receipts, your item and supplier master, and one named buyer who will own the exception queue.' },
  { category: 'working', question: 'When is this the wrong thing to build?', answer: 'When your open PO volume is very small, when nearly all suppliers already send clean EDI 855 transactions, when email sits in personal inboxes, or when nobody can work an exception queue.' },
  { category: 'working', question: 'Who owns the code and the rules?', answer: 'You do. The extraction rules, prompts, tolerance settings, field allowlists, and infrastructure are yours. Tolerances and thresholds are configuration settings your team edits without calling us.' },
];

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD. Every const declared here is rendered in a script tag below.
───────────────────────────────────────────────────────────────────────────── */

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((i) => ({
    '@type': 'Question',
    name: i.question,
    acceptedAnswer: { '@type': 'Answer', text: i.answer },
  })),
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Procurement and supply chain AI agent development',
  name: 'Procurement and supply chain AI agent development',
  description:
    'Custom AI agents for purchasing and supply chain teams: supplier email triage, order acknowledgement parsing, promised-date extraction and ERP reconciliation, delay detection and impact alerting, supplier follow-up drafting, three-way match exception surfacing, requisition intake and routing, and supplier onboarding document chasing. Built with tolerance rules, confidence thresholds, exception queues, approval-gated ERP write-back and a full audit trail.',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'BusinessAudience', name: 'Manufacturers and distributors with in-house purchasing teams' },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet builds a procurement and supply chain AI agent',
  description: 'Our build sequence for a supplier-email agent that reconciles promised dates against open purchase orders without writing bad data into an ERP.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Sample the mailbox', text: 'We take a real sample of supplier email and measure the actual mix of acknowledgements, ship notices, delays, price changes and noise, instead of designing against an imagined inbox.' },
    { '@type': 'HowToStep', position: 2, name: 'Agree the limits', text: 'With your buyers we set the field allowlist, the date, quantity and price tolerances, the confidence thresholds and the escalation rules, before any code is written.' },
    { '@type': 'HowToStep', position: 3, name: 'Run propose-only', text: 'The agent parses live mail and proposes changes while writing nothing, so you can measure how often it agrees with the buyer who would have done the work.' },
    { '@type': 'HowToStep', position: 4, name: 'Enable narrow write-back', text: 'Once agreement is measured, write-back is switched on for the narrowest set of fields that pays for itself, with an audit trail and a revert path on every write.' },
    { '@type': 'HowToStep', position: 5, name: 'Widen one pipeline at a time', text: 'Delay alerting, follow-up drafting, three-way match exceptions and requisition intake are added one at a time, each with its own human checkpoint.' },
  ],
};

const PAGE_MODIFIED = '2026-08-06';

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: 'Procurement & Supply Chain AI Agent Development',
  description:
    'AI agents that triage supplier email, parse order acknowledgements, extract promised dates and reconcile them against open purchase orders under approval, with tolerance rules, exception queues and a full audit trail.',
  dateModified: PAGE_MODIFIED,
  author: { '@type': 'Person', name: 'Bhavesh Barot', url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/', jobTitle: 'Founder, FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
};

const BREADCRUMB_ITEMS = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'AI Agent Development', url: 'https://factoryjet.com/services/ai-agent-development' },
  { name: 'Procurement & Supply Chain Agent', url: PAGE_URL },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: BREADCRUMB_ITEMS.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: item.url,
  })),
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const ANSWER_FIRST = [
  'Reads the inbound message, whether it is email body text, a generated PDF or a scan.',
  'Extracts PO number, line, part number, quantity, unit price and promised date.',
  'Compares each field against the open purchase order line in your ERP integration.',
  'Routes anything outside your tolerance to a buyer instead of writing it.',
];

const PIPELINES = [
  {
    n: '01',
    t: 'Supplier email triage and classification.',
    d: 'Every message is classified on arrival, so nothing waits for a human to open it before it is understood.',
    source: 'Shared purchasing mailbox on Microsoft 365 via Graph API, or Google Workspace via the Gmail API.',
    output: 'A label per message: acknowledgement, ship notice, delay, price change, quote, invoice query, document request, noise.',
    check: 'Below the confidence threshold, a message stays unlabelled and lands in the exception queue rather than being guessed.',
  },
  {
    n: '02',
    t: 'Order acknowledgement parsing.',
    d: 'Free-text and PDF acknowledgements become line-level structured data, in the shape an EDI 855 would have arrived in.',
    source: 'Email bodies, PDF attachments, scans, and EDI 855 messages where a supplier does trade EDI and cXML.',
    output: 'Lines carrying PO number, PO line, supplier part, your part, quantity, unit price and promised date for bill of materials items.',
    check: 'Extracted fields are shown beside the current PO line, field by field, before anything is written by the human in the loop workflow.',
  },
  {
    n: '03',
    t: 'Promised-date extraction and ERP reconciliation.',
    d: 'The date the supplier committed to is compared against the date your ERP is showing your planners.',
    source: 'The parsed acknowledgement plus the open PO line in NetSuite, Business Central, Prophet 21, Acumatica or SAP for material requirements planning.',
    output: 'A proposed change on the PO line, with the variance in days stated explicitly for supply chain visibility.',
    check: 'Tolerance rules decide. Inside tolerance applies with an audit entry, outside goes to the buyer who owns the PO under role-based access control.',
  },
  {
    n: '04',
    t: 'Delay detection and impact alerting.',
    d: 'A late part matters because of what it holds up, so the alert names the thing at risk.',
    source: 'New promised dates compared against work order and sales order due dates pegged to the PO line in the order management system.',
    output: 'An alert naming the exposed work order or customer order, the customer, and the date at risk for warehouse management system dispatch.',
    check: 'The agent alerts. It never reschedules production, moves a customer promise date, or emails a customer.',
  },
  {
    n: '05',
    t: 'Supplier follow-up drafting.',
    d: 'The chase that normally depends on somebody remembering is generated when the acknowledgement window lapses.',
    source: 'Open PO lines unacknowledged past your agreed window, and lines whose promised date has passed for critical BOM items.',
    output: 'A draft reply in the existing thread, carrying PO, line, part number, quantity, volume pricing and the date you were told.',
    check: 'Drafts wait for a buyer with human in the loop signoff. Nothing reaches a supplier without a person clicking send.',
  },
  {
    n: '06',
    t: 'Three-way match exception surfacing.',
    d: 'The mismatches that normally surface at the payment run are listed the day the invoice arrives.',
    source: 'Purchase order, goods receipt and supplier invoice, read from the ERP integration and the accounts payable mailbox.',
    output: 'Exceptions grouped by type: quantity variance, contract pricing variance, missing receipt, duplicate invoice, unmatched invoice.',
    check: 'Accounts payable decides. The agent never approves, posts or pays an invoice.',
  },
  {
    n: '07',
    t: 'Requisition intake and routing.',
    d: 'Internal requests arriving as a sentence in an email become structured requisitions with a category and a route.',
    source: 'Internal email and form submissions, matched against your item master, punchout catalog and supplier master.',
    output: 'A structured requisition with a UNSPSC category, a suggested supplier, tiered pricing, and a route based on approval limits.',
    check: 'Approval happens where it already happens, in the ERP or in Coupa, Ariba, Jaggaer or Oracle procurement.',
  },
  {
    n: '08',
    t: 'Supplier onboarding document chasing.',
    d: 'The documents that expire quietly, then block a payment or an audit, are tracked and chased.',
    source: 'Your supplier master plus the checklist: tax forms, insurance certificates, quality management system certifications, resale certificates.',
    output: 'A live checklist per supplier, an expiry calendar, and drafted reminders ahead of each expiry for compliance.',
    check: 'Bank detail changes are never applied. They are flagged for out-of-band verification by a person under RBAC controls.',
  },
];

const COMPARE_ROWS = [
  { step: 'An acknowledgement arrives.', manual: 'It sits in a shared mailbox until somebody opens it.', agent: 'It is classified on arrival and parsed into PO, line, quantity, price and date.' },
  { step: 'The promised date differs from the PO.', manual: 'Found only if a buyer happens to compare the two by eye.', agent: 'Compared automatically, with the variance measured against a tolerance rule.' },
  { step: 'The change reaches the ERP.', manual: 'Re-keyed by hand, when there is time.', agent: 'Written back under approval, with the source message linked in the audit trail.' },
  { step: 'A delay becomes visible.', manual: 'On the day the part fails to arrive.', agent: 'On the day the acknowledgement is read, which is usually far earlier.' },
  { step: 'Who finds out first.', manual: 'Usually the person who needed the part.', agent: 'The buyer who owns the PO, plus whoever owns the affected order.' },
  { step: 'An unacknowledged PO.', manual: 'Chased if somebody remembers it.', agent: 'A chase draft is queued as soon as the acknowledgement window lapses.' },
  { step: 'An invoice mismatch.', manual: 'Surfaces at the payment run.', agent: 'Surfaces when the invoice arrives, matched against PO and receipt.' },
  { step: 'Coverage.', manual: 'Whatever the team gets through that week.', agent: 'Every message, every day, including the quiet suppliers.' },
  { step: 'The failure mode.', manual: 'Missed messages and silently stale dates.', agent: 'A wrong extraction, which is exactly why nothing writes without a checkpoint.' },
];

const INTAKE = [
  { t: 'Shared purchasing mailbox', d: 'Microsoft 365 through the Graph API, or Google Workspace through the Gmail API, reading the shared mailbox rather than personal inboxes.' },
  { t: 'Attachments', d: 'Generated PDFs, scans, spreadsheets and photographed printouts, each with its own extraction path and confidence score.' },
  { t: 'EDI messages', d: 'X12 855 acknowledgements, 856 ship notices and 865 seller-initiated change acknowledgements, normalised into the same internal shape as parsed email.' },
  { t: 'Supplier portals', d: 'Where a supplier only publishes status on their own portal, we pull it on a schedule instead of asking a buyer to log in.' },
  { t: 'ERP purchase order data', d: 'Open PO headers and lines, receipts, item master and supplier master, read live so comparisons run against current state.' },
  { t: 'Source-to-pay platforms', d: 'SAP Ariba, Coupa, Jaggaer and Oracle Fusion Cloud Procurement, where requisitions and approvals already live.' },
];

const WRITEBACK = [
  'A propose-only phase first: the agent parses live mail and writes nothing, so agreement with your buyers is measured before anything is automated.',
  'A field allowlist. Promised date, acknowledged quantity, acknowledged price, supplier reference. Payment terms, bank details, cost accounting and the item master sit outside it.',
  'Tolerance rules per field, and per supplier where one warrants its own: date variance in days, quantity variance in units or percent, price variance in percent.',
  'Confidence thresholds that override tolerance. Low extraction confidence means no write, even when the variance looks routine.',
  'An approval view putting the source message, the extracted fields and the current PO line side by side, approvable line by line or in bulk.',
  'An audit trail on every write: source message identifier, extracted value, confidence, previous value, new value, run identifier, approver.',
  'A revert path by run identifier, using stored previous values. Because writes are field-scoped, a revert cannot disturb data the agent never touched.',
  'A kill switch that drops the agent back to propose-only immediately, without a deployment and without losing the queue.',
];

const MESSY = [
  'The same supplier writes dates three ways, because three different people answer the mailbox.',
  'Week numbers and phrases like end of month are not dates. They are stored as a flagged range, never as false precision.',
  'Part numbers get mistyped, so matching runs against your item master and open PO lines rather than the string in the email.',
  'One acknowledgement covers a split shipment with two dates on one line, which has to become two commitments, not an average.',
  'Scans and photographed printouts vary in quality, so poor documents are queued for a human instead of guessed at.',
  'Units, currencies and date order differ on imports, and the Incoterms on the order change what a transit time even means.',
  'An agent that writes a bad date into an ERP is worse than no agent, because planners treat a date in the system as confirmed.',
];

const ERPS = [
  'Oracle NetSuite ERP.',
  'SAP S/4HANA enterprise.',
  'SAP Business One suite.',
  'Microsoft Dynamics 365 Business Central.',
  'Acumatica Cloud ERP.',
  'Epicor Prophet 21 distribution.',
  'Epicor Kinetic manufacturing.',
  'Infor CloudSuite industrial.',
  'QuickBooks Enterprise edition.',
  'Odoo open ERP platform.',
];

const PROCUREMENT_PLATFORMS = [
  'SAP Ariba procurement network.',
  'Coupa spend management.',
  'Jaggaer source-to-pay suite.',
  'Oracle Fusion Cloud Procurement.',
  'Microsoft 365 and Graph API mailboxes.',
  'Google Workspace and the Gmail API.',
];

const STANDARDS = [
  { t: 'EDI 850', d: 'Purchase Order. The record every later message is reconciled back to.' },
  { t: 'EDI 855', d: 'Purchase Order Acknowledgment. The structured version of what most suppliers send you as prose.' },
  { t: 'EDI 856', d: 'Ship Notice/Manifest, the advance ship notice. What is actually on the truck, before it arrives.' },
  { t: 'EDI 860 and 865', d: 'Purchase Order Change Request, buyer initiated, and its seller-initiated counterpart, the Purchase Order Change Acknowledgment/Request. The 860 goes out from you. The 865 comes back.' },
  { t: 'EDI 810', d: 'Invoice. One of the three documents in a three-way match, with the order and the goods receipt.' },
  { t: 'EDI 997', d: 'Functional Acknowledgment. Confirms a transmission was received and accepted syntactically, which is not the same as agreed.' },
  { t: 'AS2', d: 'A secure HTTP transport widely used between EDI trading partners, defined in RFC 4130 as Applicability Statement 2.' },
  { t: 'cXML and PunchOut', d: 'The protocol for exchanging business documents between procurement applications and suppliers, including the PunchOut session.' },
  { t: 'SAP OCI', d: 'Open Catalog Interface, the punchout route used by SAP SRM and SAP Ariba Catalog for supplier catalogues.' },
  { t: 'GS1 identifiers', d: 'GTIN for trade items and SSCC for logistic units, matching receipts to shipments without free-text descriptions.' },
  { t: 'UNSPSC', d: 'Commodity classification codes, so a requisition is categorised consistently and routing rules work.' },
  { t: 'Incoterms', d: 'The eleven three-letter trade terms deciding who carries cost and risk in transit, and so what a promised date means.' },
];

const BUILD_STEPS = [
  { n: '01', t: 'Sample the real mailbox', d: 'We measure the actual mix of message types across a real sample of supplier email, not an imagined inbox.' },
  { n: '02', t: 'Agree the limits before the code', d: 'Field allowlist, tolerances, thresholds and escalation rules are written down with your buyers first, because they are the product.' },
  { n: '03', t: 'Run in propose-only', d: 'The agent parses live mail and proposes changes while writing nothing, so agreement with your buyers is a measured number.' },
  { n: '04', t: 'Enable the narrowest write-back that pays', d: 'Write-back starts on one field set, with the audit trail and revert path proven before scope widens.' },
  { n: '05', t: 'Add one pipeline at a time', d: 'Delay alerting, follow-up drafting, three-way match and requisition intake are added individually, each with its own checkpoint.' },
];

const NOT_FOR = [
  'Your open purchase order volume is small enough that a calendar reminder and a spreadsheet genuinely cover it.',
  'Nearly every supplier already sends a clean EDI 855, in which case fix the mapping rather than layering an agent on it.',
  'Purchasing email lives in personal inboxes rather than a shared mailbox, which has to be fixed before anything can read it.',
  'Your ERP offers no supported write path, which limits the agent to alerting and a review queue.',
  'Nobody has the time or the authority to work an exception queue, because an unattended queue is just a second inbox.',
];

const HANDOVER = [
  'Source code and infrastructure running in your own accounts, not on a platform you rent from us.',
  'Extraction rules and prompts as versioned files your engineers can read and change.',
  'Tolerance and threshold configuration your buyers can edit without a developer.',
  'The field allowlist documented, with the reasoning for every field left out of it.',
  'The audit trail schema, plus the queries your finance team will be asked for during an audit.',
  'A runbook for the exception queue, written for the buyer who owns it rather than for an engineer.',
  'The propose-only switch and the kill switch, both documented and tested.',
  'Recorded walkthroughs for buyers and accounts payable, so a new starter does not need us.',
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function ProcurementSupplyChainAgentPage() {
  return (
    <>
      <script id="proc-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="proc-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="proc-howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script id="proc-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* ── Hero ── */}
        <section className="pp-dotgrid" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="pp-wrap" style={{ paddingTop: 'clamp(36px,5vh,72px)', paddingBottom: 'clamp(44px,6vh,84px)', position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">Procurement &amp; supply chain AI agents</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '19ch' }}>
                  Your supplier delays are sitting unread in an inbox.
                </h1>
                <p className="pp-lead" style={{ maxWidth: '48ch' }}>
                  Order acknowledgements, ship dates, delay notices and price changes arrive as free text from hundreds of
                  suppliers. Somebody has to read each one and update the ERP by hand, so delays get found late, usually by
                  the person who needed the part. We build agents that do the reading and the matching, and leave the
                  approving to your buyers.
                </p>
                <HeroInlineForm source="us_procurement_agent_hero" region="us" submitLabel="Scope a procurement agent" />
              </div>
              <div className="pp-stage" role="img" aria-label="A purchase order line showing the ERP promised date, the date extracted from a supplier acknowledgement, and the variance flagged for buyer approval.">
                <div className="pp-store" aria-hidden="true">
                  <div className="bar"><i /><i /><i /></div>
                  <div className="body">
                    <div className="row"><span className="k">PO 44812 · line 3</span><span className="v">ERP: 14 Sep</span></div>
                    <div className="row"><span className="k">Supplier ack (email)</span><span className="v">2 Oct</span></div>
                    <div className="row win"><span className="k">Variance · 18 days</span><span className="v">Buyer</span></div>
                    <div className="row"><span className="k">Exposed work order</span><span className="v">WO 9931</span></div>
                  </div>
                </div>
                <span className="pp-node" style={{ top: '4%', left: '-4%' }} aria-hidden="true"><span className="d" />Parsed on arrival</span>
                <span className="pp-node" style={{ bottom: '6%', right: '-6%', animationDelay: '.8s' }} aria-hidden="true"><span className="d" />Write needs approval</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Answer-first ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// the short answer'}</p>
            <h2 style={{ marginTop: '10px' }}>What a procurement and supply chain AI agent does</h2>
            <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '72ch' }}>
              A procurement and supply chain AI agent reads inbound supplier email, pulls out the order number, promised
              ship date, quantity and price, compares each one against the open purchase order line in your ERP, and flags
              anything outside tolerance for a buyer to approve. It does the reading and the matching. A person still
              approves the write.
            </p>
            <ul className="pp-bento n4" style={{ marginTop: '32px' }}>
              {ANSWER_FIRST.map((a, i) => (
                <li className="pp-card" key={a}>
                  <span className="ic" aria-hidden="true" style={{ fontFamily: 'var(--pp-mono)', fontSize: '14px' }}>{`0${i + 1}`}</span>
                  <p style={{ marginTop: '8px' }}>{a}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Pipelines ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// what we build'}</p>
            <h2 style={{ marginTop: '10px' }}>Eight pipelines, each with a data source and a human checkpoint</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '70ch' }}>
              An agent is not one thing. It is a set of narrow pipelines that each read something specific, produce
              something specific, and stop at a specific point where a person decides. Most teams start with two of these
              and add the rest once the exception queue is under control.
            </p>
            <ul className="pp-bento n2" style={{ marginTop: '36px' }}>
              {PIPELINES.map((p) => (
                <li className="pp-card" key={p.n}>
                  <span className="ic" aria-hidden="true" style={{ fontFamily: 'var(--pp-mono)', fontSize: '13px' }}>{p.n}</span>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{p.t}</h3>
                  <p>{p.d}</p>
                  <ul style={{ marginTop: '14px', display: 'grid', gap: '8px', listStyle: 'none', padding: 0 }}>
                    <li style={{ fontSize: '13.5px', lineHeight: 1.5, color: 'var(--pp-body)' }}>
                      <span style={{ fontFamily: 'var(--pp-mono)', fontSize: '10.5px', textTransform: 'uppercase', letterSpacing: '.07em', color: 'var(--pp-muted)', display: 'block' }}>Reads</span>
                      {p.source}
                    </li>
                    <li style={{ fontSize: '13.5px', lineHeight: 1.5, color: 'var(--pp-body)' }}>
                      <span style={{ fontFamily: 'var(--pp-mono)', fontSize: '10.5px', textTransform: 'uppercase', letterSpacing: '.07em', color: 'var(--pp-muted)', display: 'block' }}>Produces</span>
                      {p.output}
                    </li>
                    <li style={{ fontSize: '13.5px', lineHeight: 1.5, color: 'var(--pp-body)' }}>
                      <span style={{ fontFamily: 'var(--pp-mono)', fontSize: '10.5px', textTransform: 'uppercase', letterSpacing: '.07em', color: 'var(--pp-orange-dark)', display: 'block' }}>Human checkpoint</span>
                      {p.check}
                    </li>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Comparison ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// manual vs agent-assisted'}</p>
            <h2 style={{ marginTop: '10px' }}>The same purchase order, two paths</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              This compares structure, not savings. We are not going to invent a percentage for your team. What changes is
              when information becomes visible, and who has to be the one to notice it.
            </p>
            <div style={{ marginTop: '28px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead>
                  <tr><th>What happens</th><th>Manual path</th><th>Agent-assisted path</th></tr>
                </thead>
                <tbody>
                  {COMPARE_ROWS.map((r) => (
                    <tr key={r.step}>
                      <td className="name">{r.step}</td>
                      <td>{r.manual}</td>
                      <td>{r.agent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Intake ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// where the data comes from'}</p>
            <h2 style={{ marginTop: '10px' }}>Six intake channels, one internal shape</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              Supplier information arrives in more than one form, and the ones that arrive as prose are the ones causing
              the problem. Everything is normalised into the same internal record before it is compared to anything.
            </p>
            <ul className="pp-bento" style={{ marginTop: '36px' }}>
              {INTAKE.map((c) => (
                <li className="pp-card" key={c.t}>
                  <h3 style={{ fontSize: '16px' }}>{c.t}</h3>
                  <p>{c.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Write-back model ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">{'// the part that matters most'}</p>
            <h2 style={{ marginTop: '10px' }}>How write-back, approval and rollback actually work</h2>
            <p className="pp-lead" style={{ marginTop: '12px' }}>
              Every competitor page promises frictionless automation. The honest version is that writing to a live ERP is
              the risky part, and the design of the approval model is most of the engineering. Here is the model we build
              to, and we will not skip it because a project is in a hurry.
            </p>
            <ul style={{ marginTop: '22px', display: 'grid', gap: '12px' }}>
              {WRITEBACK.map((w) => (
                <li key={w} style={{ display: 'flex', gap: '12px', fontSize: '15px', lineHeight: 1.55, color: 'var(--pp-body)' }}>
                  <span aria-hidden="true" style={{ marginTop: '7px', flex: 'none', height: '6px', width: '6px', borderRadius: '999px', background: 'var(--pp-orange)' }} />
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Mid-page CTA ── */}
        <section className="pp-sec">
          <div className="pp-wrap" style={{ textAlign: 'center' }}>
            <p className="pp-mlabel">{'// before you scope it'}</p>
            <h2 style={{ marginTop: '10px' }}>Not sure which pipeline is worth building first?</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '54ch', marginLeft: 'auto', marginRight: 'auto' }}>
              Tell us how supplier acknowledgements reach your team today and which ERP holds the promised date. We will
              tell you which of the eight pipelines pays first, and which we would not build for you at all.
            </p>
            <div style={{ marginTop: '22px' }}>
              <ModalCTAButton label="Talk to the Founder" region="us" btnVariant="primary-light" />
            </div>
          </div>
        </section>

    

        <MidPageCTA
          headline={'Procurement drowning in supplier email?'}
          sub={'Tell us your systems and where the manual work sits. We will map what an agent can take and what stays human.'}
          label={'Talk about your procurement'}
        />

        {/* ── Messy data ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">{'// the hard part'}</p>
            <h2 style={{ marginTop: '10px' }}>Supplier data is messy, and pretending otherwise is how these projects fail</h2>
            <p className="pp-lead" style={{ marginTop: '12px' }}>
              The extraction is not the hard part. Deciding what to do when the message is ambiguous is the hard part, and
              a page that does not talk about it has not built one of these.
            </p>
            <ul style={{ marginTop: '22px', display: 'grid', gap: '12px' }}>
              {MESSY.map((m) => (
                <li key={m} style={{ display: 'flex', gap: '12px', fontSize: '15px', lineHeight: 1.55, color: 'var(--pp-body)' }}>
                  <span aria-hidden="true" style={{ marginTop: '7px', flex: 'none', height: '6px', width: '6px', borderRadius: '999px', background: 'var(--pp-orange)' }} />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Systems ── */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// systems we connect'}</p>
            <h2 style={{ marginTop: '10px' }}>The ERP and procurement systems we read from and write to</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              The ERP is authoritative for purchase orders, receipts and promised dates. The source-to-pay platform is
              usually authoritative for requisitions and approvals. We map which system owns which field before anything
              is built, because two systems both believing they own a date is how the current problem started.
            </p>
            <div className="pp-splitrow" style={{ marginTop: '32px' }}>
              <div>
                <h3 style={{ fontSize: '16px' }}>ERP and accounting systems</h3>
                <ul style={{ marginTop: '12px', display: 'grid', gap: '9px' }}>
                  {ERPS.map((e) => (
                    <li key={e} style={{ display: 'flex', gap: '10px', fontSize: '14.5px', lineHeight: 1.5, color: 'var(--pp-body)' }}>
                      <span aria-hidden="true" style={{ marginTop: '7px', flex: 'none', height: '6px', width: '6px', borderRadius: '999px', background: 'var(--pp-orange)' }} />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: '16px' }}>Procurement and mail platforms</h3>
                <ul style={{ marginTop: '12px', display: 'grid', gap: '9px' }}>
                  {PROCUREMENT_PLATFORMS.map((e) => (
                    <li key={e} style={{ display: 'flex', gap: '10px', fontSize: '14.5px', lineHeight: 1.5, color: 'var(--pp-body)' }}>
                      <span aria-hidden="true" style={{ marginTop: '7px', flex: 'none', height: '6px', width: '6px', borderRadius: '999px', background: 'var(--pp-orange)' }} />
                      {e}
                    </li>
                  ))}
                </ul>
                <p style={{ marginTop: '16px', fontSize: '14px', lineHeight: 1.55, color: 'var(--pp-muted)' }}>
                  Where an ERP offers no supported write path, the agent stays in propose-only mode and delivers a review
                  queue. We would rather say that up front than discover it in week six.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Standards ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// standards and formats'}</p>
            <h2 style={{ marginTop: '10px' }}>The standards a purchasing team actually runs on</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '70ch' }}>
              Your large accounts trade EDI. Your long tail sends email. An agent has to be fluent in both, and has to
              produce the same internal record either way.
            </p>
            <ul className="pp-bento" style={{ marginTop: '36px' }}>
              {STANDARDS.map((s) => (
                <li className="pp-card" key={s.t}>
                  <h3 style={{ color: 'var(--pp-orange-dark)', fontSize: '15px' }}>{s.t}</h3>
                  <p>{s.d}</p>
                </li>
              ))}
            </ul>
            <p style={{ marginTop: '24px', fontSize: '14px', lineHeight: 1.6, color: 'var(--pp-muted)', maxWidth: '78ch' }}>
              References:{' '}
              <a href="https://x12.org/products/transaction-sets" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>
                ASC X12 publishes the transaction set catalogue
              </a>{' '}
              that defines the 850, 855, 856, 860, 865, 810 and 997 documents named above.{' '}
              <a href="https://www.cxml.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>
                cXML
              </a>{' '}
              describes itself as a protocol for consistent communication of business documents between procurement
              applications, e-commerce hubs and suppliers, and covers the PunchOut feature.{' '}
              <a href="https://iccwbo.org/business-solutions/incoterms-rules/incoterms-2020/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>
                Incoterms 2020
              </a>{' '}
              is the International Chamber of Commerce set of eleven three-letter trade terms used in contracts for the
              sale and purchase of goods.
            </p>
          </div>
        </section>

        {/* ── Build process ── */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">{'// how we build it'}</p>
            <h2 style={{ marginTop: '10px' }}>From a mailbox sample to approval-gated write-back</h2>
            <div style={{ marginTop: '30px', display: 'grid', gap: '0' }}>
              {BUILD_STEPS.map((s, i) => (
                <div key={s.n} style={{ display: 'flex', gap: '16px', paddingBottom: i < BUILD_STEPS.length - 1 ? '26px' : '0', position: 'relative' }}>
                  {i < BUILD_STEPS.length - 1 && (
                    <div aria-hidden="true" style={{ position: 'absolute', left: '15px', top: '32px', bottom: 0, width: '2px', background: 'var(--pp-line)' }} />
                  )}
                  <div style={{ flex: 'none', width: '32px', height: '32px', borderRadius: '50%', border: '2px solid var(--pp-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', zIndex: 1 }}>
                    <span style={{ fontFamily: 'var(--pp-mono)', fontSize: '10px', fontWeight: 700, color: 'var(--pp-orange-dark)' }}>{s.n}</span>
                  </div>
                  <div style={{ paddingTop: '4px' }}>
                    <div style={{ fontFamily: 'var(--pp-display)', fontWeight: 700, fontSize: '16px', color: 'var(--pp-ink)' }}>{s.t}</div>
                    <p style={{ marginTop: '4px', fontSize: '14.5px', lineHeight: 1.55, color: 'var(--pp-body)' }}>{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── When not to ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">{'// when not to build this'}</p>
            <h2 style={{ marginTop: '10px' }}>Five situations where we would tell you not to</h2>
            <p className="pp-lead" style={{ marginTop: '12px' }}>
              A procurement agent is worth building when the reading volume is real and somebody will own the exceptions.
              If neither is true, it becomes an expensive way to generate a second inbox.
            </p>
            <ul style={{ marginTop: '22px', display: 'grid', gap: '12px' }}>
              {NOT_FOR.map((n) => (
                <li key={n} style={{ display: 'flex', gap: '12px', fontSize: '15px', lineHeight: 1.55, color: 'var(--pp-body)' }}>
                  <span aria-hidden="true" style={{ marginTop: '7px', flex: 'none', height: '6px', width: '6px', borderRadius: '999px', background: 'var(--pp-orange)' }} />
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Handover ── */}
        <section className="pp-sec">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">{'// what you get'}</p>
            <h2 style={{ marginTop: '10px' }}>What is handed over at the end</h2>
            <p className="pp-lead" style={{ marginTop: '12px' }}>
              You own the agent, including the rules that decide what it is allowed to do. That matters more here than on
              most builds, because the rules are the safety model.
            </p>
            <ul style={{ marginTop: '22px', display: 'grid', gap: '12px' }}>
              {HANDOVER.map((h) => (
                <li key={h} style={{ display: 'flex', gap: '12px', fontSize: '15px', lineHeight: 1.55, color: 'var(--pp-body)' }}>
                  <span aria-hidden="true" style={{ marginTop: '7px', flex: 'none', height: '6px', width: '6px', borderRadius: '999px', background: 'var(--pp-orange)' }} />
                  {h}
                </li>
              ))}
            </ul>
            <p style={{ marginTop: '28px', fontSize: '14px', color: 'var(--pp-muted)' }}>
              Related:{' '}
              <Link href="/services/ai-agent-development" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>AI agent development</Link>,{' '}
              <Link href="/services/ai-workflow-automation" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>AI workflow automation</Link>,{' '}
              <Link href="/b2b-ecommerce" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>B2B e-commerce</Link>, and{' '}
              <Link href="/ecommerce-for-manufacturers" style={{ fontWeight: 600, color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>e-commerce for manufacturers</Link>.
            </p>
          </div>
        </section>

        {/* ── Architecture & Governance ── */}
        <section className="pp-sec tint">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">{'// enterprise architecture & controls'}</p>
            <h2 style={{ marginTop: '10px' }}>Enterprise governance, security and verification controls</h2>
            <p className="pp-lead" style={{ marginTop: '12px' }}>
              Procurement systems hold sensitive supplier pricing, bank accounts, and critical production timelines.
              We build rigorous code-level gates around every AI agent pipeline.
            </p>
            <div style={{ marginTop: '28px', display: 'grid', gap: '20px' }}>
              <div style={{ padding: '20px', borderRadius: '12px', background: '#fff', border: '1px solid var(--pp-line)' }}>
                <h3 style={{ fontSize: '16px', color: 'var(--pp-ink)' }}>Deterministic validation and code-level schema gates.</h3>
                <p style={{ marginTop: '8px', fontSize: '14.5px', lineHeight: 1.6, color: 'var(--pp-body)' }}>
                  Language models never execute database writes directly. Every proposed change passes strict schema
                  validation, tolerance thresholds, and financial limits. If extraction confidence falls below threshold,
                  the update routes to a human buyer exception queue.
                </p>
              </div>
              <div style={{ padding: '20px', borderRadius: '12px', background: '#fff', border: '1px solid var(--pp-line)' }}>
                <h3 style={{ fontSize: '16px', color: 'var(--pp-ink)' }}>Role-based access control and immutable audit trails.</h3>
                <p style={{ marginTop: '8px', fontSize: '14.5px', lineHeight: 1.6, color: 'var(--pp-body)' }}>
                  Every transaction records a complete audit log. We store document hashes, confidence scores, previous values,
                  and approver identities. Role-based access control restricts sensitive supplier masters and payment terms
                  to authorized purchasing managers only.
                </p>
              </div>
              <div style={{ padding: '20px', borderRadius: '12px', background: '#fff', border: '1px solid var(--pp-line)' }}>
                <h3 style={{ fontSize: '16px', color: 'var(--pp-ink)' }}>Multi-protocol supplier integration and reconciliation.</h3>
                <p style={{ marginTop: '8px', fontSize: '14.5px', lineHeight: 1.6, color: 'var(--pp-body)' }}>
                  Our agent architecture normalizes inbound EDI 850, 855, and 856 transactions with cXML punchout catalogs and
                  PDF email attachments. It reconciles promised dates against warehouse management systems (WMS) and material
                  requirements planning (MRP) runs in real time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FAQ
          eyebrow="PROCUREMENT AI AGENT FAQ"
          headline="Questions purchasing and supply chain teams ask first"
          lead="The questions that come up on every scoping call, answered here instead of saved for the pitch."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="GET STARTED"
            headline="Scope a procurement agent"
            sub="Tell us how supplier acknowledgements reach your team, which ERP holds the promised date, and what the agent must never be allowed to touch. You get a straight read and a fixed proposal before any work starts."
            primaryCta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
            secondaryCta={{ label: 'See AI agent development', href: '/services/ai-agent-development' }}
            objectionHandler="Propose-only first. Field allowlist, tolerance rules and a full audit trail on every write. You own the code."
          />
        </div>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}

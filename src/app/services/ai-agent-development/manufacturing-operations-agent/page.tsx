import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata

   This page is a capability and sales-collateral asset, not a ranking bet. The
   vertical-agent keyword space was measured on 2026-08-06 at roughly 730
   searches/month across the whole US category with no commercial intent. Judge
   this page on LLM mention rate and on whether sales can send it, never on
   organic position.
───────────────────────────────────────────────────────────────────────────── */

const PAGE_URL =
  'https://factoryjet.com/services/ai-agent-development/manufacturing-operations-agent';

export const metadata: Metadata = {
  title: 'AI Agents for Manufacturing Operations | FactoryJet',
  description:
    'We build AI agents that read your ERP, CMMS, historian and shop-floor documents to answer questions, draft handovers and route issues. Information layer only, never machine control.',
  keywords: [
    'manufacturing operations agent',
    'AI agent for manufacturing',
    'shift handover automation',
    'downtime reason capture',
    'work order status AI',
    'maintenance request triage',
    'ERP AI agent manufacturing',
    'CMMS AI integration',
    'plant manager AI assistant',
    'production schedule Q and A',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Agents for Manufacturing Operations | FactoryJet',
    description:
      'AI agents that read ERP, CMMS, historian and SOP data to answer floor questions, draft shift handovers and route issues. Read-only by design.',
    url: PAGE_URL,
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet manufacturing operations AI agent development',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agents for Manufacturing Operations | FactoryJet',
    description:
      'Agents that answer floor questions from ERP, CMMS and historian data. Information layer only, never machine control.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: PAGE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

/* Freshness signal. Bump this when the page content actually changes, not on
   every unrelated deploy. */
const PAGE_MODIFIED = '2026-08-06';

/* External citations. Every URL below was fetched and the claim confirmed on
   the page on 2026-08-06. Do not edit a claim here without re-fetching. */
const CITATIONS = [
  {
    claim:
      'The OPC Foundation describes OPC UA as a platform-independent, service-oriented architecture folding the older OPC Classic specifications into one extensible framework.',
    label: 'OPC Foundation, OPC Unified Architecture',
    href: 'https://opcfoundation.org/about/opc-technologies/opc-ua/',
  },
  {
    claim:
      'MTConnect is read-only: machine data published over it cannot be modified and written back to the machine.',
    label: 'MachineMetrics, MTConnect vs OPC UA',
    href: 'https://www.machinemetrics.com/blog/what-is-the-difference-between-mtconnect-and-opc-ua',
  },
  {
    claim:
      'ISA-95 is built on the Purdue Reference Model and defines the interface between control functions and the enterprise functions above them, principally levels 3 and 4.',
    label: 'ISA, ISA-95 standards committee',
    href: 'https://www.isa.org/standards-and-publications/isa-standards/isa-standards-committees/isa95',
  },
];

const NEVER_DOES = [
  'Write a setpoint, speed, temperature or recipe value to any machine',
  'Start, stop, jog, home or reset a piece of equipment',
  'Sit inside a safety function, an interlock or an E-stop chain',
  'Replace or bypass a PLC, a SCADA server, an HMI or a safety relay',
  'Acknowledge an alarm so the alarm log stops being true',
  'Make a scrap, hold or ship decision without a named human approving it',
];

const DOES_DO = [
  'Read production, maintenance and quality data from the systems that hold it',
  'Summarise a shift into a handover a supervisor can correct in two minutes',
  'Answer a typed question about a work order, a job, a lot or a part number',
  'Draft a maintenance request, an NCR narrative or a downtime note for review',
  'Flag a pattern that spans the maintenance log and the downtime log',
  'Route an issue to a named human with the context already attached',
];

const USE_CASES = [
  {
    title: 'Shift handover summaries',
    reads: 'Job status from the ERP, downtime entries from the MES or shift log, open requests in the CMMS.',
    does: 'Assembles a handover per line: what ran, what did not, what is set up next, what is still open.',
    hands: 'The outgoing supervisor corrects and signs it. The incoming one reads it before the walk-around.',
  },
  {
    title: 'Downtime reason capture and rollup',
    reads: 'Stop events from the historian, the MES or an operator tablet, plus the free text the operator typed.',
    does: 'Maps messy text ("blew a seal again", "waiting on mats") onto your own reason codes, then rolls the week up by line, shift and asset.',
    hands: 'A rollup a plant manager can read, with unmapped entries listed rather than quietly bucketed as Other.',
  },
  {
    title: 'Work-order status answering',
    reads: 'Work orders, routers, operation steps and quantity complete from the ERP or MRP.',
    does: 'Answers "where is job 41882", "which operations are left", "is the outside process back yet".',
    hands: 'The answer plus the ERP record it came from, so the person can verify rather than trust.',
  },
  {
    title: 'Maintenance request triage',
    reads: 'New work requests in the CMMS, history for the same asset, parts availability from the ERP.',
    does: 'Groups duplicate requests, attaches the last repairs and the last failure, proposes a priority from your rules.',
    hands: 'A triaged queue the planner accepts or overrides. They still set priority, they just stop starting blank.',
  },
  {
    title: 'Quality-escape documentation drafting',
    reads: 'The nonconformance entry, the traveler, lot and supplier data from the ERP, and the relevant SOP.',
    does: 'Drafts the NCR narrative: what was found, on which lot, at which operation, against which spec.',
    hands: 'A draft for the quality engineer to edit and own. It never dispositions material and never closes a CAPA.',
  },
  {
    title: 'Production-schedule questions',
    reads: 'The released and firm-planned schedule from the ERP or MRP, work-center load, job progress.',
    does: 'Answers "what runs on press 2 Thursday", "what moves if we pull job 5511 forward", "where is the constraint".',
    hands: 'A read of the plan as it stands. Committing a date stays a scheduler decision, and the agent says so.',
  },
  {
    title: 'Supplier-delay impact summaries',
    reads: 'Purchase orders, promise dates and receipts from the ERP, plus the BOM and the jobs consuming the part.',
    does: 'Traces a late purchase order down to the jobs and customer orders it puts at risk, in date order.',
    hands: 'An impact note the buyer and scheduler can act on the morning the delay lands, not the week it bites.',
  },
];

const ERP_SYSTEMS = [
  'NetSuite',
  'SAP Business One',
  'Epicor Kinetic',
  'Infor CloudSuite Industrial',
  'Acumatica Manufacturing Edition',
  'Microsoft Dynamics 365 Business Central',
  'Odoo MRP',
  'Fishbowl Manufacturing',
  'Global Shop Solutions',
  'JobBOSS',
];

const FLOOR_SYSTEMS = [
  'Tulip, for operator apps and station-level records',
  'Plex, for MES and quality records',
  'MaintainX, Fiix, UpKeep and Limble, for CMMS work requests and asset history',
  'AVEVA PI System (formerly OSIsoft PI) and the Ignition tag historian, as time-series and tag sources',
  'SQL Server, PostgreSQL and ODBC sources, where a plant keeps its own tables',
  'SharePoint, network shares and PDF SOP libraries, for work instructions',
];

const STANDARDS = [
  'OPC UA, where a gateway or historian already exposes a UA server. We subscribe, we do not write.',
  'MQTT with Sparkplug B, where a broker already carries the plant topic namespace.',
  'MTConnect for machine-tool data. It is read-only by design, which suits an agent exactly.',
  'ISA-95 levels, as the map for saying out loud where the agent sits and where it stops.',
  'A unified namespace where one exists. It is a design pattern, not a product, and not a prerequisite.',
  'Plain REST APIs, webhooks and scheduled file drops, which is how most small plants integrate.',
];

const PIPELINE_STEPS = [
  'A person asks in plain language, in a chat window, a Teams or Slack channel, or a tablet at the line.',
  'The agent picks the sources the question needs: ERP, CMMS, historian, SOP library, or several.',
  'Structured tool calls run against those systems through a read-scoped service account.',
  'Retrieval pulls matching maintenance-log entries, SOP sections and shift notes as supporting text.',
  'The answer is composed with the record identifiers and document sections it came from.',
  'The audit log records who asked, what was read, what was returned, and when.',
];

const GOVERNANCE = [
  'Role-scoped read permissions. An operator sees job and quality data, not margin or supplier cost.',
  'A dedicated read-only service account per system, so the agent cannot exceed what it was granted.',
  'Single sign-on through your existing identity provider, so leavers lose access the day they leave.',
  'An exportable audit log of every question, every source read and every answer returned.',
  'Named escalation. Each topic has a human owner, and unresolved questions route to that person.',
  'A refusal path. When the data does not support an answer, the agent says so and names the gap.',
  'No writes to any control system. That is enforced in the integration layer, not by prompt wording.',
  'Your data stays in your systems, and production data is not contributed to model training.',
];

const HONEST_LIMITS = [
  'It cannot fix data that was never captured. No downtime reason recorded, no downtime summary.',
  'It will not make an undisciplined plant disciplined. It reflects the records, good or bad.',
  'It is not a scheduling optimiser. It reads the plan and explains it. Re-planning stays with your planner.',
  'It is not a vision system and it does not inspect parts.',
  'It does not replace a supervisor walking the floor. It removes the walk that was only to fetch a number.',
  'It cannot promise a percentage gain in OEE, MTTR or MTBF, and anyone quoting one has not seen your data.',
];

const READINESS = [
  'You run an ERP or MRP people actually enter jobs into, even if the reporting around it is weak.',
  'You have a CMMS or a maintenance log, even if it is a shared spreadsheet.',
  'Two or three people are the single point of knowledge for how the floor really runs.',
  'A simple question takes a walk, a phone call or a text message to answer.',
  'Shift handover happens verbally and half of it is lost by Monday.',
  'Downtime reasons are collected but nobody trusts the rollup.',
  'Your SOPs and work instructions are written down somewhere, even if they are PDFs in a folder.',
  'You are not expecting the agent to touch a PLC, because it will not.',
];

const JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Walk the floor and the data',
    description:
      'We sit with a supervisor for a shift and list the questions they get asked, then find where each answer lives: which ERP table, which CMMS field, which binder.',
  },
  {
    number: '02',
    title: 'Pick one question and scope it',
    description:
      'One use case, one line. Usually shift handover or work-order status. Sources, permissions and the escalation owner are written down before any code.',
  },
  {
    number: '03',
    title: 'Build the read path',
    description:
      'Read-scoped service accounts, structured tool calls into the ERP and CMMS, retrieval over SOP and maintenance-log text, audit log from the first commit.',
  },
  {
    number: '04',
    title: 'Test against real shifts',
    description:
      'We replay real shift questions against what the supervisor knows to be true. Wrong answers get traced to the source, not patched with prompt wording.',
  },
  {
    number: '05',
    title: 'Hand over and widen',
    description:
      'Your team gets the code, integrations and runbook. Once one use case is trusted, the next is configuration and testing, not a new project.',
  },
];

const COMPARISON_COLUMNS = [
  { label: 'Operations agent', isFactoryJet: true },
  { label: 'MES / SCADA' },
  { label: 'CMMS' },
  { label: 'BI dashboard' },
] as const;

const COMPARISON_ROWS = [
  {
    feature: 'Answers a typed question in plain language',
    values: [
      <CompareIcon key="a" kind="yes" />,
      <CompareIcon key="b" kind="no" />,
      <CompareIcon key="c" kind="no" />,
      <CompareIcon key="d" kind="no" />,
    ],
  },
  {
    feature: 'Writes setpoints or commands to equipment',
    values: [
      <CompareIcon key="a" kind="no" />,
      <CompareIcon key="b" kind="yes" />,
      <CompareIcon key="c" kind="no" />,
      <CompareIcon key="d" kind="no" />,
    ],
  },
  {
    feature: 'Reads ERP, CMMS, historian and documents in one answer',
    values: [
      <CompareIcon key="a" kind="yes" />,
      <CompareIcon key="b" kind="partial" />,
      <CompareIcon key="c" kind="no" />,
      <CompareIcon key="d" kind="partial" />,
    ],
  },
  {
    feature: 'Drafts a handover, a work request or an NCR narrative',
    values: [
      <CompareIcon key="a" kind="yes" />,
      <CompareIcon key="b" kind="no" />,
      <CompareIcon key="c" kind="partial" />,
      <CompareIcon key="d" kind="no" />,
    ],
  },
  {
    feature: 'Is the system of record for work orders',
    values: [
      <CompareIcon key="a" kind="no" />,
      <CompareIcon key="b" kind="partial" />,
      <CompareIcon key="c" kind="partial" />,
      <CompareIcon key="d" kind="no" />,
    ],
  },
  {
    feature: 'Useful with no machine connectivity at all',
    values: [
      <CompareIcon key="a" kind="yes" />,
      <CompareIcon key="b" kind="no" />,
      <CompareIcon key="c" kind="yes" />,
      <CompareIcon key="d" kind="partial" />,
    ],
  },
  {
    feature: 'Escalates to a named human when the data is thin',
    values: [
      <CompareIcon key="a" kind="yes" />,
      <CompareIcon key="b" kind="no" />,
      <CompareIcon key="c" kind="partial" />,
      <CompareIcon key="d" kind="no" />,
    ],
  },
  {
    feature: 'Logs every question, source and answer for audit',
    values: [
      <CompareIcon key="a" kind="yes" />,
      <CompareIcon key="b" kind="partial" />,
      <CompareIcon key="c" kind="partial" />,
      <CompareIcon key="d" kind="no" />,
    ],
  },
  {
    feature: 'Part of a safety-rated function',
    values: [
      <CompareIcon key="a" kind="no" />,
      <CompareIcon key="b" kind="no" />,
      <CompareIcon key="c" kind="no" />,
      <CompareIcon key="d" kind="no" />,
    ],
  },
  {
    feature: 'Role-scoped answers for operator, planner and plant manager',
    values: [
      <CompareIcon key="a" kind="yes" />,
      <CompareIcon key="b" kind="partial" />,
      <CompareIcon key="c" kind="partial" />,
      <CompareIcon key="d" kind="partial" />,
    ],
  },
];

const PLANT_TYPES = [
  {
    name: 'Job shops and contract machining',
    description:
      'Short runs, high job count, constant "where is my part" calls, answered from Epicor Kinetic, JobBOSS or Global Shop Solutions.',
  },
  {
    name: 'Metal fabrication and assembly',
    description:
      'Multi-operation routers with outside processing. The agent traces where a job sits and flags jobs stalled between operations.',
  },
  {
    name: 'Plastics and injection moulding',
    description:
      'Tooling changeovers and mould maintenance. Repeat requests grouped by tool in MaintainX or Fiix, so problem moulds are visible.',
  },
  {
    name: 'Food, beverage and packaging',
    description:
      'Lot traceability and sanitation windows. Quality-escape narratives drafted against the lot, line and SOP section, disposition left to the quality lead.',
  },
  {
    name: 'Industrial and electrical equipment',
    description:
      'Configured products with deep BOMs. A late purchase order traced through the BOM to the jobs at risk, from data already in NetSuite or Business Central.',
  },
  {
    name: 'Building products and millwork',
    description:
      'Order-driven production with seasonal load. Schedule questions answered against the released plan, naming the constrained work center.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ, single source of truth

   The FAQPage JSON-LD below is generated by mapping this array. There is no
   second FAQ array anywhere in this file. Do not add one.
───────────────────────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES = [
  { key: 'scope', label: 'Scope and limits' },
  { key: 'data', label: 'Systems and data' },
  { key: 'use', label: 'What it does daily' },
  { key: 'trust', label: 'Trust and security' },
  { key: 'working', label: 'Working together' },
];

const FAQ_ITEMS = [
  {
    category: 'scope',
    question: 'What is a manufacturing operations agent?',
    answer:
      'An AI agent that works on the information layer of a plant. It reads your ERP, CMMS, historian and written procedures, then answers questions, summarises shifts, drafts documents and routes issues. It does not run equipment and is not part of any control or safety function.',
  },
  {
    category: 'scope',
    question: 'Will the AI agent control my machines?',
    answer:
      'No. It never writes a setpoint, starts or stops equipment, or sits inside an interlock. Control stays with your PLC and SCADA layer. We enforce that with read-only accounts in the integration layer, not by hoping a prompt holds the line.',
  },
  {
    category: 'scope',
    question: 'Can it change a work order or a production schedule?',
    answer:
      'Not by default. Everything described here is read-only against the ERP and MRP. If you later want one narrow write, for example raising a CMMS maintenance request, that is scoped as its own decision with its own approval step.',
  },
  {
    category: 'scope',
    question: 'Is this the same thing as an MES?',
    answer:
      'No. An MES is a system of record for production execution. The agent owns no records, it reads what your MES, ERP and CMMS already hold. With no MES it still works, because most floor questions are ERP, CMMS and document questions.',
  },
  {
    category: 'scope',
    question: 'Do we need to replace our ERP first?',
    answer:
      'No, and we would push back if someone told you otherwise. The agent reads whatever you run today: Epicor Kinetic, Global Shop Solutions, Odoo MRP or NetSuite. A replatform is a much larger decision and should not be bundled into this one.',
  },
  {
    category: 'data',
    question: 'Which ERP and MRP systems can you read from?',
    answer:
      'NetSuite, SAP Business One, Epicor Kinetic, Infor CloudSuite Industrial, Acumatica Manufacturing Edition, Dynamics 365 Business Central, Odoo MRP, Fishbowl, Global Shop Solutions and JobBOSS. Where no API exists we read a reporting database or a scheduled export instead.',
  },
  {
    category: 'data',
    question: 'What if half our data is in a spreadsheet and a whiteboard?',
    answer:
      'That is the normal starting point, not a disqualifier. Spreadsheets are readable, whiteboards are not, so the first build covers the systems that already hold records and names the whiteboard gap out loud instead of pretending to close it.',
  },
  {
    category: 'data',
    question: 'Can it read our maintenance logs and SOPs?',
    answer:
      'Yes. Retrieval over maintenance-log text, work-request notes, SOPs and work instructions is one of the highest-value parts of the build, because that is where the knowledge of two long-serving supervisors is closest to being written down.',
  },
  {
    category: 'data',
    question: 'Do we need OPC UA or MTConnect on our machines?',
    answer:
      'No. Machine connectivity helps with downtime capture, but most of what a plant manager asks is answered from the ERP, CMMS and documents. If you already publish OPC UA, MQTT with Sparkplug B or MTConnect we subscribe to it. If not, we do not make you build it first.',
  },
  {
    category: 'data',
    question: 'What is a unified namespace and do we need one?',
    answer:
      'A design pattern where plant data is published once to a central broker, usually MQTT, and any system subscribes to what it needs. It is useful, and it is also a multi-year programme for most small plants, so we do not make it a prerequisite.',
  },
  {
    category: 'data',
    question: 'Our shop runs on an old on-premise SQL Server. Is that a problem?',
    answer:
      'No. A read-only account against SQL Server or an ODBC source is often the cleanest integration available, because the tables are stable and your own people understand them. We prefer a documented API where one exists, a read replica where one does not.',
  },
  {
    category: 'use',
    question: 'What does a shift handover summary actually look like?',
    answer:
      'A short structured note per line: jobs run and quantities, jobs behind and by how much, downtime events with reasons, open maintenance requests, quality holds, and what is set up next. The outgoing supervisor corrects and signs it in a couple of minutes.',
  },
  {
    category: 'use',
    question: 'Can it tell me why line 3 stopped?',
    answer:
      'It can tell you what was recorded: stop events, durations, reason codes and operator free text, plus any maintenance request raised around the same time. If nothing was recorded it says so. It reports the record, it does not diagnose the machine.',
  },
  {
    category: 'use',
    question: 'Can it answer "can we take this order"?',
    answer:
      'It can tell you what the current plan and load look like, which work center is constrained this week, and what is already committed. The commitment stays a human decision. An agent that promises a date it cannot control is a liability, not a feature.',
  },
  {
    category: 'use',
    question: 'How does downtime reason capture work in practice?',
    answer:
      'Operators keep entering reasons the way they already do, on a tablet, an MES screen or a paper log we digitise. The agent maps that free text onto your reason codes, rolls it up by line, shift and asset, and lists what it could not map.',
  },
  {
    category: 'use',
    question: 'Can it draft a nonconformance report?',
    answer:
      'It drafts the narrative: what was found, on which lot and operation, against which spec, with the relevant SOP section quoted. A quality engineer edits, owns and submits it. The agent never dispositions material and never closes a corrective action.',
  },
  {
    category: 'use',
    question: 'What happens when it does not know the answer?',
    answer:
      'It says so, names what is missing, and routes the question to the human who owns that topic. Every use case gets a named escalation owner during scoping. A silent wrong answer on a factory floor costs far more than an honest "I do not have that".',
  },
  {
    category: 'trust',
    question: 'How do you stop it from making things up?',
    answer:
      'Answers are grounded in retrieved records and tool-call results rather than generated from memory, each names the record or document section it came from, and unsupported questions are refused. In testing we replay real shift questions and trace every wrong answer to its source.',
  },
  {
    category: 'trust',
    question: 'Is our production data used to train a public model?',
    answer:
      'Not in the deployments we build. Data flows through the model to produce an answer and is not contributed to training. Where your customer contracts require it, we deploy against configurations that make that boundary contractual rather than a setting.',
  },
  {
    category: 'working',
    question: 'How long does a first build take?',
    answer:
      'A single use case on a single line, usually shift handover or work-order status, is weeks rather than quarters. The integration work is the slow part, not the agent. We give a firm timeline once we have seen the systems.',
  },
  {
    category: 'working',
    question: 'What if it does not work out?',
    answer:
      'Then you find out on one line, on one use case, with your data still exactly where it was. That is why we scope the first build narrowly. A pilot that fails cheaply beats a plant-wide rollout nobody trusts.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD. Every const declared here is rendered in the component below.
───────────────────────────────────────────────────────────────────────────── */

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Manufacturing operations AI agent development',
  name: 'Manufacturing operations AI agent development',
  description:
    'Development of AI agents for small and mid-sized manufacturers that read ERP, MRP, CMMS, historian and SOP data to answer operations questions, draft shift handovers, triage maintenance requests and summarise downtime. Read-only against production systems, with no machine control.',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: {
    '@type': 'BusinessAudience',
    name: 'Small and mid-sized manufacturers, plant managers and operations managers',
  },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: 'AI Agents for Manufacturing Operations',
  description:
    'How a manufacturing operations AI agent reads ERP, CMMS, historian and SOP data to answer floor questions, and why it never touches the control layer.',
  dateModified: PAGE_MODIFIED,
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    url: 'https://www.linkedin.com/in/bhaveshbarot/',
    jobTitle: 'Founder, FactoryJet',
  },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://factoryjet.com/#website',
    url: 'https://factoryjet.com',
    name: 'FactoryJet',
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   Shared inline bits
───────────────────────────────────────────────────────────────────────────── */

const CHECK = (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
    <path
      d="M1 4l2.5 2.5L9 1"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 font-fj-body text-fj-neutral-600" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
      <span
        className="mt-1 inline-flex h-[18px] w-[18px] flex-none items-center justify-center rounded-full"
        style={{ background: 'rgba(240,90,40,0.10)', color: '#B23E13' }}
      >
        {CHECK}
      </span>
      <span>{children}</span>
    </li>
  );
}

const BREADCRUMB_ITEMS = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  {
    name: 'AI Agent Development',
    url: 'https://factoryjet.com/services/ai-agent-development',
  },
  { name: 'Manufacturing Operations Agent', url: PAGE_URL },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function ManufacturingOperationsAgentPage() {
  return (
    <>
      <script
        id="mfg-ops-agent-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }}
      />
      <script
        id="mfg-ops-agent-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <script
        id="mfg-ops-agent-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />

      <main className="bg-fj-cream">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        <Hero
          eyebrow="MANUFACTURING OPERATIONS AGENT"
          headline="The answer is already in your systems. Getting it should not take a walk around the plant."
          lead="Schedules sit in the ERP, downtime sits in a spreadsheet, the next changeover is on a whiteboard, and the rest is in the heads of two long-serving supervisors. We build AI agents that read all of it and answer the question, without ever touching a machine."
          formSlot={
            <HeroInlineForm
              region="us"
              source="services_ai_agent_development_manufacturing_operations_agent_hero"
              submitLabel="Get an operations agent scope"
            />
          }
          trustItems={[
            'Read-only against production systems',
            'No PLC or SCADA control, ever',
            'Audit log on every answer',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p
                className="font-fj-mono font-medium uppercase text-[#B23E13]"
                style={{ fontSize: '11px', letterSpacing: '0.14em' }}
              >
                THREE EXAMPLE QUESTIONS, ANSWERED FROM RECORDS
              </p>
              <div className="mt-5 space-y-4">
                {[
                  {
                    q: '"Why did line 3 stop last night?"',
                    a: 'Four stop events, 63 minutes, two coded as material wait, one uncoded with the note "blew a seal again". A CMMS work request was raised at 02:14.',
                  },
                  {
                    q: '"Where is job 41882?"',
                    a: 'Operation 3 of 5, 220 of 500 pieces reported, at outside processing since Tuesday with no receipt against the purchase order.',
                  },
                  {
                    q: '"What moves if the casting is two weeks late?"',
                    a: 'Three jobs consume that part. Two have promise dates inside the delay window. Here they are, in date order.',
                  },
                ].map((item) => (
                  <div key={item.q} className="border-l-2 border-[#F05A28] pl-4">
                    <p
                      className="font-fj-body font-semibold text-fj-ink"
                      style={{ fontSize: '0.9rem', lineHeight: 1.45 }}
                    >
                      {item.q}
                    </p>
                    <p
                      className="mt-1 font-fj-body text-fj-neutral-500"
                      style={{ fontSize: '0.8125rem', lineHeight: 1.6 }}
                    >
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-fj-neutral-100 pt-5">
                <p className="font-fj-body text-fj-neutral-400" style={{ fontSize: '0.8125rem' }}>
                  Worked examples, not results from a named plant. Every answer names the record it
                  came from, so a supervisor can check it instead of trusting it.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 1. Answer-first definition ── */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p
                  className="font-fj-mono font-medium uppercase text-[#B23E13]"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  THE SHORT ANSWER
                </p>
                <h2
                  className="mt-4 font-fj-display font-bold text-fj-ink"
                  style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.03em' }}
                >
                  What a manufacturing operations agent is
                </h2>
                <div
                  className="mt-6 rounded-2xl border border-fj-neutral-200 bg-white p-6 md:p-7"
                  style={{ borderLeft: '3px solid #F05A28' }}
                >
                  <p
                    className="font-fj-body text-fj-ink"
                    style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}
                  >
                    A manufacturing operations agent is an AI agent that works on the information
                    layer of a plant. It reads your ERP, MRP, CMMS, historian and written procedures,
                    then answers questions, summarises shifts, drafts documents and routes issues to
                    named people. It does not run equipment, and it is not part of any control or
                    safety function.
                  </p>
                </div>
                <p
                  className="mt-6 font-fj-body text-fj-neutral-600"
                  style={{ fontSize: '1rem', lineHeight: 1.7 }}
                >
                  Most small plants do not have a data problem. They have a retrieval problem. What
                  you need to run the floor already exists, split across an ERP, a spreadsheet, a
                  whiteboard, a maintenance log and two long-serving supervisors. Answering something
                  as ordinary as &ldquo;why did line 3 stop&rdquo; means a person walking around
                  asking other people. That walk is what the agent removes. Not the supervisor, not
                  the judgement, not the decision. The walk.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-fj-neutral-200 bg-white p-7 shadow-sm">
                  <p
                    className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                    style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                  >
                    WHERE IT SITS
                  </p>
                  <ul className="mt-5 space-y-3">
                    {[
                      { lvl: 'Level 4', txt: 'Business planning and logistics. ERP and MRP. The agent reads here.' },
                      { lvl: 'Level 3', txt: 'Manufacturing operations management. MES, CMMS, quality records. The agent reads here.' },
                      { lvl: 'Level 2', txt: 'Monitoring, supervisory and automated control. SCADA, HMI and PLCs. The agent may read a historian tag mirrored from here. It writes nothing.' },
                      { lvl: 'Level 1', txt: 'Sensing and manipulating the process. Sensors and actuators. Out of scope.' },
                      { lvl: 'Level 0', txt: 'The production process itself. Out of scope.' },
                    ].map((row) => (
                      <li key={row.lvl} className="flex gap-3">
                        <span
                          className="mt-0.5 flex-none font-fj-mono font-bold uppercase text-[#B23E13]"
                          style={{ fontSize: '10px', letterSpacing: '0.08em', width: '52px' }}
                        >
                          {row.lvl}
                        </span>
                        <span
                          className="font-fj-body text-fj-neutral-600"
                          style={{ fontSize: '0.8125rem', lineHeight: 1.55 }}
                        >
                          {row.txt}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p
                    className="mt-5 border-t border-fj-neutral-100 pt-4 font-fj-body text-fj-neutral-400"
                    style={{ fontSize: '0.78125rem', lineHeight: 1.55 }}
                  >
                    The level names come from ISA-95, which is built on the Purdue Reference Model and
                    defines the interface between control functions and the enterprise functions above
                    them.{' '}
                    <a
                      href={CITATIONS[2].href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                      style={{ color: '#B23E13' }}
                    >
                      Source: {CITATIONS[2].label}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. The boundary ── */}
        <section className="py-12 md:py-16" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p
              className="font-fj-mono font-medium uppercase text-[#B23E13]"
              style={{ fontSize: '11px', letterSpacing: '0.14em' }}
            >
              THE LINE WE DRAW
            </p>
            <h2
              className="mt-4 max-w-[24ch] font-fj-display font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.03em' }}
            >
              An agent is not a control system
            </h2>
            <p
              className="mt-5 max-w-[68ch] font-fj-body text-fj-neutral-600"
              style={{ fontSize: '1rem', lineHeight: 1.7 }}
            >
              This is the first thing we say on a call, because it is the first thing a good plant
              manager asks. Control belongs to the PLC and SCADA layer: deterministic, validated, in
              places safety-rated. A language model is none of those things. The agent lives above
              that layer and only reads.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-fj-neutral-200 bg-white p-7">
                <h3
                  className="font-fj-display font-bold text-fj-ink"
                  style={{ fontSize: '1.125rem', letterSpacing: '-0.02em' }}
                >
                  What it never does
                </h3>
                <ul className="mt-5 space-y-3">
                  {NEVER_DOES.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 font-fj-body text-fj-neutral-600"
                      style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
                    >
                      <span
                        className="mt-1 inline-flex h-[18px] w-[18px] flex-none items-center justify-center rounded-full font-fj-mono text-[11px] font-bold"
                        style={{ background: 'rgba(20,17,15,0.06)', color: '#6E635A' }}
                        aria-hidden="true"
                      >
                        &times;
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-fj-neutral-200 bg-white p-7">
                <h3
                  className="font-fj-display font-bold text-fj-ink"
                  style={{ fontSize: '1.125rem', letterSpacing: '-0.02em' }}
                >
                  What it does instead
                </h3>
                <ul className="mt-5 space-y-3">
                  {DOES_DO.map((item) => (
                    <Bullet key={item}>{item}</Bullet>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className="mt-8 rounded-2xl border border-fj-neutral-200 p-6 md:p-7"
              style={{ backgroundColor: '#FFF8F5' }}
            >
              <h3
                className="font-fj-display font-bold text-fj-ink"
                style={{ fontSize: '1.0625rem', letterSpacing: '-0.02em' }}
              >
                The standards already agree with us
              </h3>
              <p
                className="mt-3 max-w-[76ch] font-fj-body text-fj-neutral-600"
                style={{ fontSize: '0.9375rem', lineHeight: 1.7 }}
              >
                MTConnect, the open standard for machine-tool data, is read-only. Data published over
                it cannot be modified and written back to the machine, which is exactly the shape an
                operations agent should have.{' '}
                <a
                  href={CITATIONS[1].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  style={{ color: '#B23E13' }}
                >
                  Source: {CITATIONS[1].label}
                </a>
                . OPC UA does support writes, which is precisely why we scope our OPC UA access as
                subscribe-only. The OPC Foundation describes it as a platform-independent,
                service-oriented architecture.{' '}
                <a
                  href={CITATIONS[0].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  style={{ color: '#B23E13' }}
                >
                  Source: {CITATIONS[0].label}
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ── 3. Use cases ── */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p
              className="font-fj-mono font-medium uppercase text-[#B23E13]"
              style={{ fontSize: '11px', letterSpacing: '0.14em' }}
            >
              WHAT WE ACTUALLY BUILD
            </p>
            <h2
              className="mt-4 max-w-[26ch] font-fj-display font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.03em' }}
            >
              Seven jobs, each with a real pipeline behind it
            </h2>
            <p
              className="mt-5 max-w-[68ch] font-fj-body text-fj-neutral-600"
              style={{ fontSize: '1rem', lineHeight: 1.7 }}
            >
              Each one reads from a source you already own and hands off to a person you already
              employ. None of them close a loop on their own.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {USE_CASES.map((uc) => (
                <article
                  key={uc.title}
                  className="rounded-2xl border border-fj-neutral-200 bg-white p-7"
                >
                  <h3
                    className="font-fj-display font-bold text-fj-ink"
                    style={{ fontSize: '1.125rem', letterSpacing: '-0.02em' }}
                  >
                    {uc.title}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {[
                      { k: 'Reads from', v: uc.reads },
                      { k: 'Does', v: uc.does },
                      { k: 'Hands off', v: uc.hands },
                    ].map((row) => (
                      <li key={row.k}>
                        <span
                          className="font-fj-mono font-bold uppercase text-[#B23E13]"
                          style={{ fontSize: '9.5px', letterSpacing: '0.12em' }}
                        >
                          {row.k}
                        </span>
                        <p
                          className="mt-1 font-fj-body text-fj-neutral-600"
                          style={{ fontSize: '0.875rem', lineHeight: 1.6 }}
                        >
                          {row.v}
                        </p>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. Systems and standards ── */}
        <ServiceExplanation
          eyebrow="SYSTEMS AND STANDARDS"
          headline="What we read from, and how"
          lead="We integrate against the systems a small manufacturer already runs, using read-scoped accounts. Where a plant has modern connectivity we use it. Where it does not, we do not make that a prerequisite."
          body={
            <>
              <h3
                className="font-fj-display font-bold text-fj-ink"
                style={{ fontSize: '1.0625rem', letterSpacing: '-0.02em' }}
              >
                ERP and MRP, read-only
              </h3>
              <ul className="flex flex-wrap gap-2">
                {ERP_SYSTEMS.map((sys) => (
                  <li
                    key={sys}
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-semibold uppercase text-[#B23E13]"
                    style={{ fontSize: '10px', letterSpacing: '0.08em' }}
                  >
                    {sys}
                  </li>
                ))}
              </ul>
              <p>
                Work orders, routers and operations, quantity complete and scrap, BOMs, purchase
                orders and promise dates, item masters, work-center load and the released schedule.
                Read, never written.
              </p>
              <h3
                className="font-fj-display font-bold text-fj-ink"
                style={{ fontSize: '1.0625rem', letterSpacing: '-0.02em' }}
              >
                Floor, maintenance and quality systems
              </h3>
              <ul className="space-y-3">
                {FLOOR_SYSTEMS.map((item) => (
                  <Bullet key={item}>{item}</Bullet>
                ))}
              </ul>
              <h3
                className="font-fj-display font-bold text-fj-ink"
                style={{ fontSize: '1.0625rem', letterSpacing: '-0.02em' }}
              >
                Interoperability standards, where they exist
              </h3>
              <ul className="space-y-3">
                {STANDARDS.map((item) => (
                  <Bullet key={item}>{item}</Bullet>
                ))}
              </ul>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  How a question gets answered
                </p>
              </div>
              <ol className="px-7 pt-6 pb-2">
                {PIPELINE_STEPS.map((step, i, arr) => (
                  <li key={step} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full"
                        style={{ backgroundColor: '#B23E13' }}
                      >
                        <span className="font-fj-mono text-[10px] font-bold text-white">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                      {i < arr.length - 1 && (
                        <div
                          className="mt-1 h-full w-px bg-fj-neutral-200"
                          style={{ minHeight: '1.75rem' }}
                        />
                      )}
                    </div>
                    <div className="pb-5">
                      <p
                        className="font-fj-body text-fj-neutral-600"
                        style={{ fontSize: '0.84375rem', lineHeight: 1.6 }}
                      >
                        {step}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="border-t border-fj-neutral-100 px-7 py-4">
                <p className="font-fj-body text-fj-neutral-400" style={{ fontSize: '0.8125rem' }}>
                  No step in that chain writes to a machine.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 5. Comparison ── */}
        <ComparisonTable
          eyebrow="HOW IT DIFFERS"
          headline="Operations agent vs MES, CMMS and a BI dashboard"
          lead="These are not competitors. They do different jobs, and the agent is worth least in a plant that has none of the others."
          pullQuote={{
            stat: 'Read-only',
            caption:
              'The agent owns no records and controls no equipment. It reads what your other systems already hold and turns it into an answer a person can check.',
          }}
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
          footer="An honest read: if you have no ERP and no maintenance records, fix that first. An agent reflects your records, it does not create them."
        />

        {/* ── 6. Governance ── */}
        <section className="py-12 md:py-16" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p
                  className="font-fj-mono font-medium uppercase text-[#B23E13]"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  PERMISSIONS, AUDIT, ESCALATION
                </p>
                <h2
                  className="mt-4 max-w-[24ch] font-fj-display font-bold text-fj-ink"
                  style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.03em' }}
                >
                  Built so a quality auditor can follow it
                </h2>
                <p
                  className="mt-5 max-w-[64ch] font-fj-body text-fj-neutral-600"
                  style={{ fontSize: '1rem', lineHeight: 1.7 }}
                >
                  If an agent touches a quality record or a customer commitment, someone will
                  eventually ask how it got there. We build the answer in from the start rather than
                  retrofitting it during an audit.
                </p>
                <ul className="mt-7 space-y-3">
                  {GOVERNANCE.map((item) => (
                    <Bullet key={item}>{item}</Bullet>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-5">
                <div
                  className="rounded-2xl border border-fj-neutral-200 p-7"
                  style={{ backgroundColor: '#FFF8F5' }}
                >
                  <h3
                    className="font-fj-display font-bold text-fj-ink"
                    style={{ fontSize: '1.0625rem', letterSpacing: '-0.02em' }}
                  >
                    What we will not promise you
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {HONEST_LIMITS.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 font-fj-body text-fj-neutral-600"
                        style={{ fontSize: '0.875rem', lineHeight: 1.6 }}
                      >
                        <span
                          className="mt-1 inline-flex h-[18px] w-[18px] flex-none items-center justify-center rounded-full font-fj-mono text-[11px] font-bold"
                          style={{ background: 'rgba(20,17,15,0.06)', color: '#6E635A' }}
                          aria-hidden="true"
                        >
                          &times;
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. Mid-page CTA ── */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-[820px] px-6 text-center md:px-8">
            <p
              className="font-fj-mono font-medium uppercase text-[#B23E13]"
              style={{ fontSize: '11px', letterSpacing: '0.14em' }}
            >
              BEFORE YOU SCOPE ANYTHING
            </p>
            <h2
              className="mt-4 font-fj-display font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.625rem, 3vw, 2.25rem)', lineHeight: 1.15, letterSpacing: '-0.03em' }}
            >
              Tell us the question your team asks most
            </h2>
            <p
              className="mx-auto mt-4 max-w-[54ch] font-fj-body text-fj-neutral-600"
              style={{ fontSize: '1rem', lineHeight: 1.7 }}
            >
              Send us the one question that costs your supervisors the most walking around. We will
              tell you honestly whether the data to answer it already exists, and what reading it
              would take.
            </p>
            <div className="mt-7">
              <ModalCTAButton
                label="Talk to the Founder"
                region="us"
                btnVariant="primary-light"
              />
            </div>
          </div>
        </section>

        {/* ── 8. Plant types ── */}
        <IndustriesGrid
          variant="cards"
          eyebrow="WHERE THIS FITS"
          headline="Plant types we build this for"
          lead="The pattern is the same everywhere. The systems, the vocabulary and the questions are not."
          sectors={PLANT_TYPES}
        />

        {/* ── 9. Readiness ── */}
        <section className="py-12 md:py-16" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p
              className="font-fj-mono font-medium uppercase text-[#B23E13]"
              style={{ fontSize: '11px', letterSpacing: '0.14em' }}
            >
              READINESS CHECK
            </p>
            <h2
              className="mt-4 max-w-[26ch] font-fj-display font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.03em' }}
            >
              Signs a plant is ready for this
            </h2>
            <p
              className="mt-5 max-w-[68ch] font-fj-body text-fj-neutral-600"
              style={{ fontSize: '1rem', lineHeight: 1.7 }}
            >
              You do not need a data lake, a unified namespace or a digital-twin programme. You need
              records that exist and people who will use the answers.
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
              {READINESS.map((item) => (
                <Bullet key={item}>{item}</Bullet>
              ))}
            </ul>
          </div>
        </section>

        {/* ── 10. How we build ── */}
        <ServiceJourneyRow
          eyebrow="HOW WE BUILD IT"
          headline="One question, one line, then widen"
          lead="Plant-wide rollouts of things nobody trusts yet are how AI projects die. We start narrow on purpose."
          stages={JOURNEY_STAGES}
          closingNote="You own the integrations, the configuration and the runbook at handover. Nothing here is rented from us."
        />

        {/* ── 11. FAQ ── */}
        <FAQ
          eyebrow="MANUFACTURING OPERATIONS AGENT FAQ"
          headline="Questions plant managers actually ask"
          lead="The questions that come up on every scoping call, answered the way we answer them on the call."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ── 12. Related and sources ── */}
        <section className="py-12 md:py-16" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="mx-auto max-w-[820px] px-6 md:px-8">
            <h2
              className="font-fj-display font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', lineHeight: 1.15, letterSpacing: '-0.03em' }}
            >
              Sources and related reading
            </h2>
            <p
              className="mt-4 font-fj-body text-fj-neutral-600"
              style={{ fontSize: '0.9375rem', lineHeight: 1.7 }}
            >
              Each URL below was fetched and the claim confirmed on {PAGE_MODIFIED}.
            </p>
            <ul className="mt-6 space-y-4">
              {CITATIONS.map((c) => (
                <li key={c.href}>
                  <p
                    className="font-fj-body text-fj-neutral-600"
                    style={{ fontSize: '0.9375rem', lineHeight: 1.65 }}
                  >
                    {c.claim}
                  </p>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block font-fj-mono underline"
                    style={{ fontSize: '11px', color: '#B23E13' }}
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
            <p
              className="mt-8 font-fj-body text-fj-neutral-500"
              style={{ fontSize: '0.875rem', lineHeight: 1.7 }}
            >
              Related:{' '}
              <Link
                href="/services/ai-agent-development"
                className="font-semibold underline"
                style={{ color: '#B23E13' }}
              >
                AI agent development
              </Link>
              ,{' '}
              <Link
                href="/services/ai-agent-development/ai-workflow-automation"
                className="font-semibold underline"
                style={{ color: '#B23E13' }}
              >
                AI workflow automation
              </Link>
              , and{' '}
              <Link
                href="/services/ai-agent-development/ai-customer-support"
                className="font-semibold underline"
                style={{ color: '#B23E13' }}
              >
                AI customer support agents
              </Link>
              . Written by Bhavesh Barot, founder of FactoryJet. Last reviewed {PAGE_MODIFIED}.
            </p>
          </div>
        </section>

        {/* ── 13. Final CTA (the single dark section on this page) ── */}
        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="GET STARTED"
            headline="Start with one question your floor keeps asking"
            sub="Tell us what your supervisors walk around to find out, and which systems hold the answer today. We will scope a first build against one line, read-only, with the escalation owner named before any code is written."
            primaryCta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
            secondaryCta={{ label: 'See all AI agents', href: '/services/ai-agent-development' }}
            objectionHandler="Read-only against your systems. No PLC or SCADA control. Audit log on every answer. You own the code."
          />
        </div>
      </main>

      <SiteFooter />
    </>
  );
}

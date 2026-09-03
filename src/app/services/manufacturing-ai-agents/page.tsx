import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import HeroInlineForm from '@/components/HeroInlineForm';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

const CANONICAL_URL = 'https://factoryjet.com/services/manufacturing-ai-agents';
const PAGE_TITLE = 'Manufacturing AI Agents & Supply Chain Automation | FactoryJet';
const PAGE_DESC =
  'Custom AI agents for US manufacturers. Automate RFQ quoting, supplier PO tracking, and shop-floor handovers with direct NetSuite & SAP ERP sync. Get an audit.';
const PAGE_MODIFIED = '2026-09-03';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'ai agents for manufacturing',
    'manufacturing ai automation',
    'ai rfq automation manufacturing',
    'ai supply chain automation',
    'erp ai integration manufacturing',
    'ai bill of materials extraction',
    'ai for precision machine shops',
    'industrial equipment ai agents',
    'netsuite manufacturing ai agent',
    'sap erp ai automation',
  ],
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: CANONICAL_URL,
    siteName: 'FactoryJet',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://factoryjet.com/images/manufacturing/manufacturing-plant-rfq-ai.jpg',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Manufacturing AI Agents and Industrial Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: ['https://factoryjet.com/images/manufacturing/manufacturing-plant-rfq-ai.jpg'],
  },
};

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'Basics & ROI' },
  { key: 'erp', label: 'ERP & Systems Sync' },
  { key: 'rfq', label: 'RFQ & Drawing Parsing' },
  { key: 'security', label: 'Security & Ownership' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  {
    category: 'basics',
    question: 'What is a manufacturing AI agent and how does it operate?',
    answer:
      'A manufacturing AI agent is an autonomous software system connected to your ERP, CRM, email inboxes, and document repositories. It reads incoming RFQ emails, extracts technical bill-of-materials from CAD or PDF drawings, matches line items to inventory masters, checks real-time machine capacity, and drafts quotes or purchase order reconciliations for human approval.',
  },
  {
    category: 'basics',
    question: 'How fast can our manufacturing plant achieve positive ROI?',
    answer:
      'Payback period depends on plant size and how much of the quoting and PO workflow moves to the agent, but many mid-market US machine shops and contract manufacturers report recovering their implementation investment within the first few months. ROI comes from cutting RFQ turnaround time, eliminating open PO expediting labor, and preventing costly manual data-entry errors into your ERP.',
  },
  {
    category: 'basics',
    question: 'Does the AI agent execute actions autonomously without human review?',
    answer:
      'No. FactoryJet engineers human-in-the-loop governance for all high-value manufacturing actions. The agent reads raw inputs, computes pricing tiers, checks machine run times, and stages the complete draft transaction inside NetSuite or SAP. Your estimating engineer or purchasing manager simply reviews and clicks approve.',
  },
  {
    category: 'basics',
    question: 'Can the AI agent handle complex multi-tier manufacturing assemblies?',
    answer:
      'Yes. Our agents parse multi-level bills of materials (BOM), identifying sub-assemblies, raw material stock requirements, outsourced finishing operations like anodizing or heat treating, and standard hardware components across your supplier catalogs. Each sub-assembly gets its own costed line rather than a single blended price, so your estimator can see exactly where labor, outsourced processing, and raw material drive the total, and adjust any one line without re-quoting the entire assembly from scratch.',
  },
  {
    category: 'erp',
    question: 'Which ERP systems do your manufacturing AI agents integrate with?',
    answer:
      'We engineer native REST, SOAP, and direct database connectors for NetSuite, SAP S/4HANA, SAP Business One, Epicor Prophet 21, Epicor Kinetic, Infor CloudSuite Industrial (SyteLine), Microsoft Dynamics 365 Business Central, Acumatica, and JobBOSS. If your shop runs an ERP outside this list, or a heavily customized version of one of these, we scope the connector against its API or database schema during discovery rather than treating it as a blocker to the project.',
  },
  {
    category: 'erp',
    question: 'How does the agent reconcile supplier purchase order acknowledgements?',
    answer:
      'When suppliers email order confirmations or PDF acknowledgements, the agent extracts the vendor PO number, line item pricing, shipped quantities, and promised ship dates. It compares these directly against the open purchase order in your ERP, automatically updating delivery schedules and flagging price discrepancies.',
  },
  {
    category: 'erp',
    question: 'Can the AI agent read legacy database tables or on-premise servers?',
    answer:
      'Yes. For manufacturers running legacy SQL Server, Oracle, or AS400 databases behind corporate firewalls, we deploy secure zero-trust proxy agents or direct VPN tunnels that allow the agent to query inventory tables without exposing internal networks to public internet risk.',
  },
  {
    category: 'erp',
    question: 'How does the agent handle custom inventory pricing tiers and contract terms?',
    answer:
      'The agent queries your ERP customer master record in real time. It retrieves specific contract discounts, negotiated freight terms, minimum order quantities (MOQ), and customer-specific markup rules before generating any quote draft. This runs on every quote, not just the first one for a new customer, so pricing stays accurate for a repeat customer even after your sales team updates contract terms mid-year, without anyone needing to re-key the new numbers.',
  },
  {
    category: 'rfq',
    question: 'How does the AI agent parse engineering drawings and PDF prints?',
    answer:
      'We build multi-modal vision pipelines that extract title blocks, part numbers, material callouts (such as 6061-T6 Aluminum or 304 Stainless Steel), dimensional tolerances, surface finish requirements, and GD&T notes from scanned PDF prints, DWG, and STEP files. Extracted values are linked back to their exact location on the drawing, so an estimator reviewing the draft quote can click a tolerance callout and see the source dimension line rather than re-reading the print to verify it.',
  },
  {
    category: 'rfq',
    question: 'What happens when an RFQ drawing contains unreadable or ambiguous dimensions?',
    answer:
      'When extraction confidence scores fall below mathematical safety thresholds, the agent flags the specific callout, generates a human clarification note, and routes the ticket to your senior estimator rather than guessing critical manufacturing dimensions. The flag includes the specific field the agent could not resolve and its best guess with a confidence score, so your estimator can confirm or correct it in seconds instead of re-reading the entire print to find what was ambiguous.',
  },
  {
    category: 'rfq',
    question: 'Can the agent calculate cycle times and raw material stock costs?',
    answer:
      'Yes. The agent references your internal feeds-and-speeds tables, standard machine hourly rates, setup times, and live raw material commodity index prices (such as scrap and metal spot prices) to construct accurate cost-plus or market-based quote calculations. Commodity index prices refresh on a schedule you control, typically daily, so a quote built on Monday reflects Monday\'s aluminum or steel spot price rather than a stale number from whenever the ERP was last updated manually.',
  },
  {
    category: 'rfq',
    question: 'Does the RFQ agent support customer portal submissions and email inboxes?',
    answer:
      'Yes. Our agents monitor shared sales inboxes (such as rfq@yourcompany.com) as well as customer portals like Coupa, Ariba, and government bidding boards, automatically ingesting RFQ packages as soon as they are posted. For portals that require a login and do not offer an API, we configure a scheduled, credentialed check rather than true real-time push, so nothing sits unnoticed for more than the polling interval you set, typically every fifteen minutes.',
  },
  {
    category: 'security',
    question: 'Is proprietary CAD and engineering data kept completely private?',
    answer:
      'Yes. We operate under strict enterprise zero-data-retention agreements. Your proprietary CAD geometry, part numbers, customer lists, and pricing margins are never used to train public LLM models and are encrypted at rest using AES-256 and in transit via TLS 1.3.',
  },
  {
    category: 'security',
    question: 'Does our manufacturing company own the custom AI agent code?',
    answer:
      'Yes. You receive 100 percent intellectual property and source code ownership. We deliver the complete Git repository, Python connectors, prompt orchestration scripts, and Docker containers. You never pay per-seat user taxes or runtime vendor licensing. That ownership is unconditional from day one, not contingent on a minimum contract term, so you could hand the repository to an internal developer or a different vendor at any point without needing our permission or a data export process.',
  },
  {
    category: 'security',
    question: 'How do you ensure IT compliance with CMMC and ITAR requirements?',
    answer:
      'For aerospace and defense manufacturers subject to ITAR or CMMC standards, we deploy AI models within sovereign AWS GovCloud or Azure Government enclaves with strict US-citizen engineering access controls and end-to-end audit logging. We also scope which specific data classes count as export-controlled technical data under your ITAR determination before implementation starts, so the boundary between what the agent can touch and what stays fully isolated is defined by your compliance team, not by us.',
  },
  {
    category: 'erp',
    question: 'Can the AI agent parse multi-level Bill of Materials (BOM) for complex assemblies?',
    answer:
      'Yes. The agent recursively traverses parent-child BOM assembly trees in your CAD or ERP database, breaking down sub-assemblies, weldments, raw stock cut pieces, standard off-the-shelf catalog hardware (fasteners, bearings, seals), and outside vendor plating processes into individual costed lines. Depth is not capped at a fixed number of levels; the agent keeps traversing until it hits a purchased part, so even a five-level weldment assembly gets costed as completely as a simple one.',
  },
  {
    category: 'erp',
    question: 'How do you integrate with older on-premise ERPs that lack modern REST APIs?',
    answer:
      'For legacy on-premise manufacturing ERPs (such as JobBOSS, Global Shop Solutions, or older SAP/Epicor versions), we deploy secure, local read-only ODBC/JDBC gateway agents or intermediate SQL staging tables behind your local network firewall with zero cloud exposure. The gateway agent runs inside your network and only pushes the specific fields a workflow needs, such as part numbers and open PO lines, keeping the rest of your database exactly as isolated as it is today.',
  },
  {
    category: 'security',
    question: 'How long does a full manufacturing AI agent deployment take?',
    answer:
      'A single focused workflow (such as RFQ email extraction or PO date reconciliation) deploys in 3 to 5 weeks. A comprehensive plant-wide integration across quoting, ERP synchronization, and shop-floor scheduling completes in 8 to 12 weeks. The biggest variable is ERP access: plants that can provision a sandbox and API credentials in week one move through testing fastest, while those waiting on IT or a third-party ERP consultant tend to land toward the longer end.',
  },
  {
    category: 'erp',
    question: 'Does the agent support AS9100 or IATF 16949 quality documentation requirements?',
    answer:
      'Yes. For aerospace suppliers operating under AS9100 and automotive suppliers under IATF 16949, the agent attaches required material certifications, first-article inspection reports, and lot traceability documentation to each quote or PO record, and flags any missing certificate before a quote goes out.',
  },
  {
    category: 'rfq',
    question: 'Can the agent handle RFQs that arrive as native CAD files instead of PDFs, such as SolidWorks or Inventor assemblies?',
    answer:
      'Yes, where customers grant file access. Beyond flattened PDF and STEP files, we build parsers for native SolidWorks, Autodesk Inventor, and Siemens NX assemblies, extracting dimensional and material data directly from the model tree rather than a rasterized drawing. Reading the native model tree instead of a flattened drawing also recovers metadata a rasterized PDF loses, like material assigned per part in a multi-material assembly, which improves quote accuracy on complex weldments and machined housings.',
  },
  {
    category: 'security',
    question: 'What happens to the agent and its data if we end the engagement?',
    answer:
      'You keep everything. Because you own the full Git repository, connector code, and Docker containers from day one, ending the engagement means we stop billing and hand over any remaining documentation. There is no data migration fire drill, because your ERP and your infrastructure never left your control in the first place.',
  },
  {
    category: 'basics',
    question: 'Do you support manufacturers running separate ERP instances across multiple plants?',
    answer:
      'Yes. Multi-plant manufacturers often run separate NetSuite or SAP instances per facility, or a mix of systems after an acquisition. We build a single agent layer that routes RFQs and PO reconciliations to the correct plant instance based on customer, part number, or requested ship-from location.',
  },
];

export default function ManufacturingAiAgentsPage() {
  const schemaWebPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${CANONICAL_URL}#webpage`,
    url: CANONICAL_URL,
    name: PAGE_TITLE,
    description: PAGE_DESC,
    dateModified: PAGE_MODIFIED,
    publisher: {
      '@type': 'Organization',
      name: 'FactoryJet',
      url: 'https://factoryjet.com',
      logo: 'https://factoryjet.com/FinalLogo.svg',
    },
    author: {
      '@type': 'Person',
      name: 'Bhavesh Barot',
      url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
      jobTitle: 'Founder & CEO, FactoryJet',
    },
  };

  const schemaService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${CANONICAL_URL}#service`,
    name: 'Manufacturing AI Agent Development & Supply Chain Automation',
    serviceType: 'Industrial AI Agent Development',
    provider: {
      '@type': 'Organization',
      name: 'FactoryJet',
      url: 'https://factoryjet.com',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    description: PAGE_DESC,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Industrial AI Automation Solutions',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Automated RFQ Quoting & CAD Drawing Extraction',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Supplier Purchase Order & Promised Date ERP Sync',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Shop Floor Shift Handover & CMMS Maintenance Intelligence',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Multi-Level BOM Material Costing & ERP Integration',
          },
        },
      ],
    },
  };

  const schemaHowTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How FactoryJet Engineers and Deploys Manufacturing AI Agents',
    description:
      'A 4-step engineering blueprint to automate quoting, ERP integration, and supply chain operations for American manufacturers.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'ERP Schema & Drawing Data Ingestion Audit',
        text: 'We map your existing NetSuite, SAP, or Epicor database schema, evaluate sample PDF/CAD drawing packages, and establish baseline pricing models.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Multi-Modal Vision & Parsing Pipeline Construction',
        text: 'We build vision extraction pipelines to parse title blocks, tolerances, GD&T notes, and line-item part numbers from raw customer RFQ packages.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Bi-Directional ERP Connector & Human Approval Workflow',
        text: 'We wire secure REST and database connectors to create draft quotes and PO reconciliations inside your ERP with human approval gates.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Shadow Mode Testing & Production Plant Deployment',
        text: 'The agent runs parallel shadow audits alongside your estimating team to verify pricing accuracy before full autonomous deployment.',
      },
    ],
  };

  const schemaBreadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://factoryjet.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://factoryjet.com/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Manufacturing AI Agents',
        item: CANONICAL_URL,
      },
    ],
  };

  const schemaFAQ = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaHowTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />

      <SiteHeader />

      <main className="min-h-screen bg-white text-[#14110F]">
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 border-b border-[#E7DED6] bg-[#FFFFFF] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#E7DED6_1px,transparent_1px)] [background-size:20px_20px] opacity-60 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFF8F5] border border-[#F05A28]/30 mb-6">
                  <span className="font-mono text-xs text-[#F05A28] font-bold tracking-wide">
                    // INDUSTRIAL AI AGENTS & ERP AUTOMATION
                  </span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#14110F] font-heading leading-tight mb-6">
                  Custom AI Agents for US Manufacturers with{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F05A28] to-[#C94A1A]">
                    Live ERP Synchronization.
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl text-[#46403B] mb-8 leading-relaxed">
                  We engineer autonomous AI agents for American machine shops, industrial equipment fabricators, and contract manufacturers. Automate RFQ quoting from complex CAD blueprints, reconcile supplier purchase order confirmations, and sync bi-directionally with NetSuite, SAP, Epicor, and Infor.
                </p>

                <div className="mb-8">
                  <HeroInlineForm
                    source="manufacturing-ai-agents-hero"
                    region="us"
                    submitLabel="Request Manufacturing AI Audit"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#E7DED6] text-xs font-mono text-[#6E655F]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F05A28]" />
                    <span>NetSuite & SAP ERP Sync</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F05A28]" />
                    <span>CAD & Drawing PDF Extraction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F05A28]" />
                    <span>Zero Data Retention SLA</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] p-3 shadow-xl">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] sm:aspect-[4/3] bg-[#E7DED6]">
                    <Image
                      src="/images/manufacturing/manufacturing-plant-rfq-ai.jpg"
                      alt="American manufacturing plant operations manager reviewing CAD blueprint on industrial tablet"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  <div className="mt-3 p-3 bg-white rounded-lg border border-[#E7DED6] text-xs">
                    <div className="flex items-center justify-between text-muted font-mono mb-1">
                      <span>LIVE ERP INGESTION FEED</span>
                      <span className="text-[#F05A28] font-bold">ACTIVE AGENT</span>
                    </div>
                    <div className="font-bold text-[#14110F]">
                      NetSuite ERP &bull; 42 RFQ Line Items Reconciled (0.8s)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ANSWER-FIRST DIRECT DEFINITION BLOCK (AEO & GEO OPTIMIZED) */}
        <section className="py-12 bg-[#FFF8F5] border-b border-[#E7DED6]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-[#F05A28]/30 bg-white p-6 sm:p-8 shadow-sm">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // EXECUTIVE SUMMARY & SYSTEM DEFINITION
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#14110F] font-heading mb-4">
                What is a Manufacturing AI Agent?
              </h2>
              <p className="text-base sm:text-lg text-[#46403B] leading-relaxed">
                A manufacturing AI agent is an enterprise automation system connecting directly to ERP platforms like NetSuite, SAP, Epicor, and Infor. It ingests customer RFQ packages, parses technical specifications from CAD drawings and PDF prints, validates raw material stock and machine run times, and stages approved quote drafts and purchase order reconciliations in seconds with complete audit trails.
              </p>
            </div>
          </div>
        </section>

        {/* STATS STRIP */}
        <section className="py-12 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#F05A28] font-mono mb-1">
                  60%+
                </div>
                <div className="text-xs sm:text-sm text-[#6E655F]">
                  Quoting turnaround reduction
                </div>
                <a
                  href="https://www.paperlessparts.com/facts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-[10px] font-mono text-[#F05A28] hover:underline"
                >
                  Source: manufacturing quoting-automation data &rarr;
                </a>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-mono mb-1">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-[#6E655F]">
                  Client code & IP ownership
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#F05A28] font-mono mb-1">
                  &lt; 20 Min
                </div>
                <div className="text-xs sm:text-sm text-[#6E655F]">
                  Typical RFQ package assembly
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-mono mb-1">
                  $0
                </div>
                <div className="text-xs sm:text-sm text-[#6E655F]">
                  Per-seat recurring user tax
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5 SUB-VERTICAL MANUFACTURING SHOWCASES */}
        <section className="py-20 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // TAILORED INDUSTRIAL VERTICALS
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">
                Engineered for High-Mix, High-Precision Manufacturing
              </h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                Generic chat tools fail when confronted with complex tolerances, custom tooling requirements, and nested BOM structures. We engineer purpose-built AI workflows tailored to your specific manufacturing trade.
              </p>
            </div>

            <div className="space-y-16">
              {/* VERTICAL 1: Precision CNC Machining & Tooling */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    01. PRECISION CNC MACHINING & CONTRACT TOOLING
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">
                    Automated RFQ Geometry Parsing & Machine Hourly Costing
                  </h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Machine shop estimating teams spend 15 to 25 hours weekly reviewing PDF drawings, manually extracting raw material dimensions, estimating 3-axis and 5-axis mill cycle times, and calling suppliers for raw bar stock pricing.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our AI quoting agent ingests CAD drawings and PDF packages, extracts material callouts (such as 6061 Aluminum, 4140 Steel, or Titanium), calculates stock volume, looks up machine rate tables, and generates comprehensive quote summaries in NetSuite or JobBOSS with full engineer approval gates.
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none">
                    <li className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      Haas & Mazak Rate Matching
                    </li>
                    <li className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      STEP & DWG Extraction
                    </li>
                    <li className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      Finishing & Anodizing Lookup
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/manufacturing/precision-machining-ai-quote.jpg"
                      alt="American CNC manufacturing engineer and machinist inspecting machined aerospace turbine component"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* VERTICAL 2: Industrial Equipment & Custom Machinery */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/manufacturing/industrial-equipment-supply-chain.webp"
                      alt="Industrial equipment supply chain director managing plant inventory and assembly line"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    02. INDUSTRIAL EQUIPMENT & HEAVY MACHINERY
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">
                    Supplier Purchase Order Tracking & Promised Date Reconciliations
                  </h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Custom equipment builds involve hundreds of long-lead purchased components like motors, pneumatic actuators, PLCs, and structural framing. When suppliers email delayed ship dates that sit unread in inboxes, assembly lines face sudden, expensive shutdowns.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our supply chain AI agent reads supplier order confirmations, pulls promised ship dates, verifies quantities against open purchase orders in SAP or Epicor, and alerts procurement managers to schedule slips before they impact customer delivery milestones.
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none">
                    <li className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      EDI 855 & PDF Ingestion
                    </li>
                    <li className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      Critical Path Delay Alerts
                    </li>
                    <li className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      3-Way Invoice Matching
                    </li>
                  </ul>
                </div>
              </div>

              {/* VERTICAL 3: Electronics Manufacturing & PCB Assembly */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    03. ELECTRONICS & PCB ASSEMBLY (PCBA)
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">
                    Multi-Distributor Component Sourcing & BOM Cross-Referencing
                  </h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Electronics manufacturing services (EMS) providers receive customer BOMs containing thousands of surface-mount components, ICs, and connectors across disparate manufacturer part numbers (MPNs).
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our electronics sourcing agent queries real-time distributor APIs (including DigiKey, Mouser, Newark, and Arrow) to verify live stock levels, price break points, and factory lead times. It automatically identifies obsolete components and suggests drop-in form-fit-function replacements.
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none">
                    <li className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      DigiKey & Mouser API Sync
                    </li>
                    <li className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      Lifecycle & EOL Detection
                    </li>
                    <li className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      Attrition Rate Costing
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/manufacturing/electronics-assembly-ai-qa.webp"
                      alt="Electronics assembly quality control technician inspecting circuit board"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* VERTICAL 4: Automotive Tier 1 & Replacement Parts */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/manufacturing/automotive-tier1-warehouse-ai.webp"
                      alt="Automotive parts warehouse logistics manager using barcode scanner and AI inventory platform"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    04. AUTOMOTIVE & AEROSPACE TIER 1 SUPPLIERS
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">
                    EDI 830/862 Forecast Parsing & JIT Production Scheduling
                  </h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Tier 1 automotive suppliers receive high-frequency EDI 830 planning schedules and EDI 862 daily shipping releases from OEM assembly plants. Manual translation errors cause costly expedites and plant line penalties.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our AI dispatch agents ingest raw EDI feeds, reconcile cumulative received quantities against shipment histories in your ERP, calculate safety buffer requirements, and generate release schedules directly into NetSuite or SAP.
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none">
                    <li className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      EDI 830 & 862 Ingestion
                    </li>
                    <li className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      Cum Quantity Reconciliation
                    </li>
                    <li className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      ASN Generation Verification
                    </li>
                  </ul>
                </div>
              </div>

              {/* VERTICAL 5: Custom Plastics, Injection Molding & Extrusion */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    05. PLASTICS INJECTION MOLDING & EXTRUSION
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">
                    Resin Pellet Indexing, Cavitation Costing & Tooling Triage
                  </h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Injection molders face volatile resin raw material pricing and complex multi-cavity tooling economics. Calculating shot size, cycle cooling times, runner regrind ratios, and amortization schedules manually slows down bid submissions.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our plastics quoting agent extracts part volume and wall thickness from 3D CAD models, queries live resin market spot prices (e.g. Polypropylene, ABS, PEEK, Polycarbonate), calculates press tonnage requirements, and structures tiered quotes across single-cavity prototype and multi-cavity production tooling.
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none">
                    <li className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      Resin Index Spot Pricing
                    </li>
                    <li className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      Tonnage & Clamp Matching
                    </li>
                    <li className="px-2.5 py-1 rounded bg-[#FFF8F5] border border-[#F05A28]/20">
                      Multi-Cavity Amortization
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/manufacturing/industrial-equipment-supply-chain.webp"
                      alt="Custom plastics and industrial tooling facility engineer reviewing production schedule"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline="Wondering how this maps to your ERP and drawings?"
          sub="Send us a sample RFQ package and your NetSuite, SAP, or Epicor setup. We'll show exactly where the agent reads, writes, and stops for your team's approval."
          label="Get a manufacturing AI audit"
        />

        {/* 10-POINT TECHNICAL ARCHITECTURE BLUEPRINT */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // SYSTEM ARCHITECTURE & INTEGRATION
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">
                Enterprise Industrial AI Engineering Blueprint
              </h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                How we architect secure, deterministic, and fault-tolerant AI agents for American manufacturing operations.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none">
              {[
                {
                  title: 'Multi-Modal CAD & Drawing Vision Pipeline',
                  desc: 'High-resolution OCR and vision models extract title blocks, GD&T tolerances, surface finish callouts, and notes from rasterized and vector PDF engineering drawings.',
                },
                {
                  title: 'Bi-Directional ERP REST & SQL Connectors',
                  desc: 'Deterministic connectors read live inventory tables, customer price matrices, and machine rate standards from NetSuite, SAP, Epicor, and Infor without manual exports.',
                },
                {
                  title: 'Multi-Tier Bill-of-Materials (BOM) Synthesis',
                  desc: 'Automated assembly tree breakdown separating raw materials, internal machining steps, outsourced processing, and standard commercial fasteners.',
                },
                {
                  title: 'Dynamic Scrap & Metal Commodity Indexing',
                  desc: 'Real-time pricing hooks query live metals exchange rates (aluminum, copper, stainless steel) ensuring material margins remain protected in volatile markets.',
                },
                {
                  title: 'Human-in-the-Loop Approval Console',
                  desc: 'Estimators review complete draft quotes in an intuitive web dashboard with confidence scoring, side-by-side drawing highlights, and one-click ERP publishing.',
                },
                {
                  title: 'Supplier Confirmation Email Triage',
                  desc: 'Natural language parsing extracts PO numbers, partial shipment quantities, and revised delivery dates from messy vendor email threads and PDF attachments.',
                },
                {
                  title: 'Shop Floor Shift Handover Synthesis',
                  desc: 'Agents aggregate machine telemetry, operator downtime notes, scrap counts, and open work orders into structured handover briefs for incoming shift supervisors.',
                },
                {
                  title: 'Zero-Data-Retention Security SLA',
                  desc: 'Proprietary engineering IP and CAD geometries are never stored on public AI models. All inference requests operate under signed non-disclosure agreements.',
                },
                {
                  title: 'ITAR & CMMC Sovereign Cloud Deployment',
                  desc: 'For defense and aerospace suppliers, models run inside US-sovereign AWS GovCloud or Azure Government enclaves with strict citizen-only access controls.',
                },
                {
                  title: '100% Client Code & Connector Ownership',
                  desc: 'You receive full Git repository access, Python backend services, and Docker orchestration files. Zero vendor lock-in or recurring per-seat user fees.',
                },
              ].map((item, idx) => (
                <li
                  key={item.title}
                  className="p-6 rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] hover:border-[#F05A28]/50 transition-colors"
                >
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">
                    ARCH-0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#46403B] leading-relaxed">
                    {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4-PHASE INDUSTRIAL IMPLEMENTATION LIFECYCLE */}
        <section className="py-20 bg-[#FFF8F5] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // DEPLOYMENT METHODOLOGY
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">
                4-Phase Industrial AI Agent Implementation Roadmap
              </h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                From CAD sample ingestion to live bi-directional ERP production rollout in 4 to 6 weeks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 rounded-2xl bg-white border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 01 // WEEKS 1-2</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">ERP Schema & CAD Audit</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We map your custom ERP tables, machine center hourly rates, standard raw stock SKUs, and historical quote packages. We establish secure read access to your NetSuite, SAP, or Epicor sandbox.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: API connector schema & GD&T extraction baseline
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 02 // WEEKS 2-3</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">Vision Pipeline & Quoting Logic</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We train multi-modal vision extraction on your historical 2D prints and STEP files. We encode your feeds-and-speeds math, setup amortization rules, and secondary finishing vendor matrices into deterministic state machines.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: Quoting calculation engine & OCR confidence scores
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 03 // WEEKS 3-4</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">Approval Console & ERP Staging</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We deploy your side-by-side human review console. Estimators review AI-extracted dimensions, verify machine run-time calculations, and test one-click draft quote creation directly inside your live ERP sandbox.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: Estimator web dashboard & ERP draft injection
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 04 // WEEKS 5-6</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">Live Production & Handoff</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We route active customer RFQ email inboxes to the production agent pipeline. We conduct staff training, deliver complete Git repository documentation, and execute full code and IP handover to your engineering team.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: Full source code, Docker configs & SLA handover
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON MATRIX: CUSTOM INDUSTRIAL AI VS GENERIC SOFTWARE */}
        <section className="py-20 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // VENDOR COMPARISON
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">
                FactoryJet Custom AI vs. Generic SaaS Quoting Tools
              </h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                Why enterprise manufacturers choose owned AI infrastructure over restrictive black-box SaaS software.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[#E7DED6] bg-white shadow-sm">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[#E7DED6] bg-[#FFF8F5]">
                    <th className="p-4 sm:p-6 font-bold text-[#14110F]">Capability / Feature</th>
                    <th className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      FactoryJet Custom AI Agent
                    </th>
                    <th className="p-4 sm:p-6 font-bold text-[#6E655F]">
                      Generic SaaS Quoting Software
                    </th>
                    <th className="p-4 sm:p-6 font-bold text-[#6E655F]">
                      Manual Estimator Process
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7DED6]">
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Average RFQ Turnaround</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Under 20 Minutes
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">1 to 2 Business Days</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">3 to 7 Business Days</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">CAD & Drawing Parsing</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Direct Multi-Modal Vision + GD&T
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Basic Title Block Text Only</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Manual Caliper & Ruler Review</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">ERP Bi-Directional Sync</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Native NetSuite, SAP, Epicor API
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Manual CSV Import / Export</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Double Data Entry into ERP</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Software Licensing & Fees</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      100% Owned, $0 Per-Seat Fee
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">$500 - $1,500 / seat / month</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">$85k - $120k / estimator salary</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Proprietary Data Privacy</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Private VPC & Zero Data Retention
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Shared Multi-Tenant Cloud</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Internal Filesystem Only</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* TEAM & FOUNDER LEADERSHIP SECTION */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] p-4 shadow-md max-w-md mx-auto">
                  <div className="relative rounded-xl overflow-hidden aspect-square">
                    <Image
                      src="/bhavesh_image.webp"
                      alt="Bhavesh Barot, Founder & CEO of FactoryJet"
                      fill
                      quality={95}
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  <div className="pt-4 text-center">
                    <div className="font-bold text-lg text-[#14110F]">Bhavesh Barot</div>
                    <div className="font-mono text-xs text-[#F05A28] font-bold">
                      Founder & CEO, FactoryJet
                    </div>
                    <div className="mt-3">
                      <a
                        href="https://www.linkedin.com/in/bhavesh-ai-gtm-expert/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-mono text-[#F05A28] hover:underline"
                      >
                        Connect on LinkedIn &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                  // DIRECT INDUSTRIAL ARCHITECTURE LEADERSHIP
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-6">
                  Direct Engineering Oversight with Founder Bhavesh Barot
                </h2>
                <p className="text-base sm:text-lg text-[#46403B] leading-relaxed mb-6">
                  Industrial systems demand absolute precision. At FactoryJet, founder Bhavesh Barot leads every manufacturing architecture and ERP scoping session personally. We evaluate your current NetSuite or SAP data structures, drawing formats, and quoting bottlenecks in the initial session.
                </p>
                <p className="text-base sm:text-lg text-[#46403B] leading-relaxed mb-8">
                  You work directly with senior systems architects who have engineered mission-critical ERP pipelines and enterprise integrations for over a decade. We build reliable, auditable software that your manufacturing enterprise owns and operates forever.
                </p>
                
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://calendly.com/bhavesh-factoryjet/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#F05A28] text-white font-bold hover:bg-[#D8441A] transition-colors shadow-md text-sm"
                  >
                    Schedule Direct Strategy Call with Bhavesh
                  </a>
                  <ModalCTAButton
                    label="Request Manufacturing AI Proposal"
                    region="us"
                    modalVariant="ai"
                    btnVariant="secondary-light"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RELATED MANUFACTURING SPOKES */}
        <section className="py-16 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-4">
              // DEEP DIVE INDUSTRIAL CAPABILITY SPOKES
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#14110F] font-heading mb-8">
              Explore Our Granular Industrial AI Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/services/ai-agent-development/rfq-bidding-agent"
                className="p-6 rounded-xl bg-white border border-[#E7DED6] hover:border-[#F05A28] transition-colors group"
              >
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">SPOKE 01</div>
                <h3 className="font-bold text-lg text-[#14110F] group-hover:text-[#F05A28] transition-colors mb-2">
                  RFQ Bidding & Quoting Agent &rarr;
                </h3>
                <p className="text-sm text-[#46403B]">
                  Inbound RFQ parsing from email, PDF drawing packages, buyer portals, and EDI 840.
                </p>
              </Link>

              <Link
                href="/services/ai-agent-development/procurement-supply-chain-agent"
                className="p-6 rounded-xl bg-white border border-[#E7DED6] hover:border-[#F05A28] transition-colors group"
              >
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">SPOKE 02</div>
                <h3 className="font-bold text-lg text-[#14110F] group-hover:text-[#F05A28] transition-colors mb-2">
                  Procurement & Supply Chain Agent &rarr;
                </h3>
                <p className="text-sm text-[#46403B]">
                  Supplier order confirmation triage, promised-date reconciliation, and ERP PO sync.
                </p>
              </Link>

              <Link
                href="/services/ai-agent-development/manufacturing-operations-agent"
                className="p-6 rounded-xl bg-white border border-[#E7DED6] hover:border-[#F05A28] transition-colors group"
              >
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">SPOKE 03</div>
                <h3 className="font-bold text-lg text-[#14110F] group-hover:text-[#F05A28] transition-colors mb-2">
                  Shop-Floor Operations Agent &rarr;
                </h3>
                <p className="text-sm text-[#46403B]">
                  Shift handover drafting, CMMS maintenance triage, and downtime reason telemetry.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* STRUCTURED FAQ SECTION */}
        <FAQ
          eyebrow="// MANUFACTURING AI QUESTIONS & ANSWERS"
          headline="Frequently Asked Questions on Manufacturing AI Agents"
          lead="Everything plant managers, operations executives, and chief estimating engineers need to know about ERP sync, drawing parsing, and code ownership."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-white"
        />

        {/* FINAL CTA SECTION */}
        <section className="py-20 bg-[#FFF8F5] border-t border-[#E7DED6]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#F05A28]/30 mb-6">
              <span className="font-mono text-xs text-[#F05A28] font-bold tracking-wide">
                // AUTOMATE RFQS &bull; ZERO SEAT TAXES &bull; 100% CODE OWNERSHIP
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14110F] font-heading mb-6">
              Ready to Modernize Your Manufacturing Operations with Custom AI?
            </h2>
            
            <p className="text-lg text-[#46403B] max-w-2xl mx-auto mb-10 leading-relaxed">
              Book a 30-minute technical architecture call with our founder. We will evaluate your current ERP database setup, review your drawing package formats, and deliver a fixed-scope implementation proposal within 24 hours.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4">
              <a
                href="https://calendly.com/bhavesh-factoryjet/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#F05A28] text-white font-bold hover:bg-[#D8441A] transition-colors shadow-lg text-base"
              >
                Book 30-Min Discovery Call
              </a>
              <ModalCTAButton
                label="Request Custom Plant Audit"
                region="us"
                modalVariant="ai"
                btnVariant="secondary-light"
              />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}

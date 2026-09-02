import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import HeroInlineForm from '@/components/HeroInlineForm';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

const CANONICAL_URL = 'https://factoryjet.com/services/legal-ai-agents';
const PAGE_TITLE = 'Legal AI Agents & Law Firm Automation | FactoryJet';
const PAGE_DESC =
  'Custom legal AI agents for US law firms. Automate client intake, contract redlining, and discovery with direct Clio, MyCase & Filevine sync. Get an audit.';
const PAGE_MODIFIED = '2026-09-01';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    'ai for law firms',
    'legal ai agents',
    'ai contract review automation',
    'legal client intake ai',
    'clio ai integration',
    'mycase ai automation',
    'filevine ai workflow',
    'ai document discovery legal',
    'law firm workflow automation',
    'attorney client privilege ai',
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
        url: 'https://factoryjet.com/images/legal/law-firm-contract-review-ai.jpg',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Legal AI Agents and Law Firm Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: ['https://factoryjet.com/images/legal/law-firm-contract-review-ai.jpg'],
  },
};

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'intake', label: 'Intake & Lead Qualification' },
  { key: 'contracts', label: 'Contract Review & Redlines' },
  { key: 'pms', label: 'Practice Management & Sync' },
  { key: 'security', label: 'Security & Legal Ethics' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  {
    category: 'intake',
    question: 'How do legal AI agents qualify prospective clients without giving unauthorized legal advice?',
    answer:
      'Our legal AI intake agents operate under strict deterministic guardrails configured to gather factual case details, assess jurisdiction, check statute of limitations dates, identify adverse parties for conflict checks, and match incident summaries against your firm specific case acceptance criteria. The agent explicitly informs callers that it is an administrative assistant and stages all qualified matter summaries for attorney review without offering legal opinions or guaranteed case valuations.',
  },
  {
    category: 'intake',
    question: 'Can the AI agent run real-time conflict of interest checks across our firm database?',
    answer:
      'Yes. The agent extracts all named individuals, opposing corporate entities, insurance carriers, and co-defendants from inbound forms or intake phone calls. It queries your practice management database (such as Clio, Filevine, or MyCase) via secure API to cross-reference existing client rosters, open matters, and closed files, flagging potential conflicts before an attorney conducts the formal initial consultation.',
  },
  {
    category: 'intake',
    question: 'How quickly does the AI intake agent respond to new web inquiries and phone calls?',
    answer:
      'The agent responds to web forms, text messages, and chat inquiries in under 15 seconds. For inbound phone calls, our voice agent answers on the first ring with sub-500ms acoustic response times, ensuring your law firm captures high-intent prospective claimants before they contact competing firms in your market.',
  },
  {
    category: 'intake',
    question: 'Does the AI intake agent support multilingual intake for non-English speaking claimants?',
    answer:
      'Yes. Our intake agents support fluent real-time voice and text translation across Spanish, Portuguese, Mandarin, Vietnamese, and French. Matter summaries and intake notes are transcribed and translated into English for attorney review alongside original audio recordings. This matters most for firms handling personal injury or immigration intake in diverse markets, where a same-day response in the claimant\'s own language is often the difference between booking the consultation and losing it to a competing firm.',
  },
  {
    category: 'contracts',
    question: 'How does the legal AI agent redline commercial agreements and vendor contracts?',
    answer:
      'The agent reviews inbound draft agreements against your law firm internal playbook of standard negotiating positions, preferred clauses, and risk thresholds. It identifies non-standard indemnification language, uncapped liability provisions, aggressive governing law clauses, and ambiguous termination triggers, inserting tracked redlines and explanatory lawyer comments directly into Word (.docx) documents.',
  },
  {
    category: 'contracts',
    question: 'Can the AI agent parse complex PDF lease agreements and multi-entity transaction bibles?',
    answer:
      'Yes. Using multi-page document parsing pipelines, the agent indexes hundreds of pages across commercial leases, promissory notes, operating agreements, and disclosure schedules. It extracts critical metadata, rent escalation schedules, commencement triggers, guarantor obligations, and renewal notice windows into structured JSON tables.',
  },
  {
    category: 'contracts',
    question: 'How does the agent prevent hallucinations when summarizing legal discovery records?',
    answer:
      'We engineer strict retrieval-augmented architectures that anchor every summary sentence to verifiable page and line citations in the source document. If a specific factual query cannot be verified in the uploaded deposition transcript or medical record, the agent explicitly flags the gap rather than generating speculative text.',
  },
  {
    category: 'contracts',
    question: 'Can the AI agent organize medical records and draft chronological injury summaries for personal injury cases?',
    answer:
      'Yes. The agent processes thousands of pages of disorganized medical bills, MRI reports, physical therapy notes, and hospital records. It categorizes documents by provider, extracts diagnostic ICD-10 codes, calculates total medical specials, and drafts a chronological treatment summary for demand letter preparation.',
  },
  {
    category: 'pms',
    question: 'Which legal practice management systems and document repositories do you integrate with?',
    answer:
      'We engineer native bi-directional connectors for Clio Manage and Clio Grow, Filevine, MyCase, PracticePanther, Smokeball, NetDocuments, iManage, Relativity, and Litify. The agent creates new contacts, opens matter folders, attaches indexed files, and logs time entries automatically. Sync runs on webhooks, not nightly batch exports, so a new contact or matter update reflects in your practice management system within seconds rather than the next business day.',
  },
  {
    category: 'pms',
    question: 'Can the AI agent create calendar events and calculate statutory court filing deadlines?',
    answer:
      'Yes. The agent parses served complaints, discovery requests, and scheduling orders, calculates jurisdictional response deadlines based on local court civil procedure rules, and stages calendar entries directly in your Outlook, Google Calendar, or practice management docketing system. Every calculated deadline includes the underlying procedural rule it was derived from, so the responsible attorney can verify the date before it goes on the docket rather than trusting a black-box calculation.',
  },
  {
    category: 'pms',
    question: 'How does the agent log billable and non-billable administrative time entries?',
    answer:
      'The agent tracks background document processing, record indexing, and intake verification tasks. It drafts UTBMS (LEDES) compliant billing narrative entries with precise task codes (such as A103 for document review or L110 for factual investigation) for paralegal and attorney approval.',
  },
  {
    category: 'pms',
    question: 'Can our law firm connect proprietary knowledge bases and precedent brief archives?',
    answer:
      'Yes. We build private, isolated vector databases indexing your firm historical motion practice, appellate briefs, discovery responses, and settlement negotiation memos, allowing your team to draft work product based on your firm proven work style. Each vector database is scoped to your firm alone and never shared across clients, so a junior associate drafting a motion gets suggestions grounded in your partners\' prior filings and phrasing, not generic boilerplate pulled from the open web.',
  },
  {
    category: 'security',
    question: 'How do you protect attorney-client privilege and confidentiality under ABA Model Rule 1.6?',
    answer:
      'We deploy enterprise AI architectures with strict Zero Data Retention (ZDR) agreements. Your client files, privileged communications, and work product are never used to train commercial foundation models. All data is encrypted in transit using TLS 1.3 and at rest with AES-256 keys within dedicated, isolated virtual private clouds.',
  },
  {
    category: 'security',
    question: 'Can our firm deploy the AI agent on private on-premise hardware or isolated sovereign clouds?',
    answer:
      'Yes. For boutique litigation firms, corporate defense practices, and governmental legal departments requiring strict physical data custody, we deploy open-source legal language models on local GPU servers behind your physical office firewalls or inside sovereign AWS GovCloud enclaves. This path costs more upfront in hardware and setup time than our standard cloud deployment, so we recommend it only when a client contract, government clearance, or internal policy mandates it rather than as a default choice.',
  },
  {
    category: 'security',
    question: 'Does our law firm own the custom AI agent code and prompt state machines?',
    answer:
      'Yes. FactoryJet provides 100 percent source code, Git repository, and intellectual property ownership. We build customized Python backend services, database connectors, and orchestration workflows that belong exclusively to your firm with zero per-user monthly software licensing fees. You can move the entire system to an in-house engineer or a different vendor at any time, since nothing is locked behind our proprietary platform or a recurring per-seat contract you would need to renegotiate to leave.',
  },
  {
    category: 'security',
    question: 'How long does it take to implement a custom legal AI agent for our firm?',
    answer:
      'A focused intake qualification agent or document redlining workflow deploys within 3 to 4 weeks. A comprehensive firm-wide implementation covering intake, practice management synchronization, discovery indexing, and custom precedent drafting completes in 6 to 8 weeks. Timelines depend mainly on how quickly your firm can provide API access to your practice management system and sample documents for the redlining playbook; firms that get us that access in the first week rarely slip past these ranges.',
  },
  {
    category: 'contracts',
    question: 'Can the AI agent manage e-discovery review and generate a defensible privilege log before documents go to opposing counsel?',
    answer:
      'Yes. The agent ingests native files and email threads, applies your firm responsiveness and privilege criteria, and flags attorney-client communications, work product, and third-party consultant materials for withholding. It generates a structured privilege log with document ID, date, author, recipients, and privilege basis for attorney sign-off before production.',
  },
  {
    category: 'intake',
    question: 'What happens after a lead is qualified? Does the agent actually open the matter file in our practice management system?',
    answer:
      'Yes. Once an attorney approves a qualified lead, the agent opens a new matter record directly in Clio, Filevine, or MyCase, assigns the matter number, links the client contact, attaches the signed engagement letter, and populates standard matter fields including practice area, responsible attorney, and originating source without paralegal re-keying.',
  },
  {
    category: 'pms',
    question: 'Can the agent draft and track litigation hold notices when a new lawsuit or regulatory inquiry begins?',
    answer:
      'Yes. When a matter is flagged as contentious, the agent drafts a litigation hold notice from your firm template, identifies custodians based on matter parties and department, distributes it for attorney review, and logs acknowledgment receipts so your firm has a defensible record of preservation efforts.',
  },
  {
    category: 'security',
    question: 'Does the AI agent keep an audit trail we could produce in response to a bar complaint or malpractice inquiry?',
    answer:
      'Yes. Every extraction, redline, and matter action the agent takes is logged with a timestamp, the source document citation, and the human reviewer who approved it. That audit trail is exportable and gives your firm a defensible record of what the AI proposed versus what an attorney actually approved and filed.',
  },
  {
    category: 'contracts',
    question: 'Can the agent process scanned or handwritten documents, not just clean digital PDFs?',
    answer:
      'Yes. The parsing pipeline runs OCR with legal-specific tuning before extraction, so scanned pleadings, faxed medical records, and handwritten intake notes still get indexed. Low-confidence OCR passages are flagged for human verification rather than silently guessed at, which keeps citation accuracy intact.',
  },
];

export default function LegalAiAgentsPage() {
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
    name: 'Legal AI Agent Development & Law Firm Workflow Automation',
    serviceType: 'Legal AI Agent Engineering',
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
      name: 'Legal AI Automation Solutions',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '24/7 AI Legal Client Intake & Real-Time Conflict Checks',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Playbook-Driven Contract Redlining & Risk Analysis',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Multi-Page Discovery & Medical Record Chronology Synthesis',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Bi-Directional Practice Management Sync (Clio, MyCase, Filevine)',
          },
        },
      ],
    },
  };

  const schemaHowTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How FactoryJet Builds and Deploys Custom Legal AI Agents for Law Firms',
    description:
      'A 4-step engineering methodology to automate legal intake, document review, and practice management synchronization while safeguarding attorney-client privilege.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Practice Management Schema & Privilege Architecture Audit',
        text: 'We map your firm practice management database schema (Clio, Filevine, MyCase), review standard intake qualification questionnaires, and establish strict zero-data-retention security protocols.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Deterministic Extraction & Legal Logic Pipeline Construction',
        text: 'We configure document parsing pipelines to index contracts, transcripts, and pleadings with exact page-and-line citation tracking and firm-specific negotiation playbooks.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Bi-Directional Practice Management Sync & Attorney Approval Console',
        text: 'We wire secure API connectors to automatically create contacts, open matter records, and stage redline drafts inside an intuitive human-in-the-loop review dashboard.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Shadow Testing, Ethics Compliance & Production Handoff',
        text: 'We conduct parallel shadow testing on historical matters to verify citation accuracy, train law firm staff, and hand over 100 percent source code and deployment infrastructure.',
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
        name: 'Legal AI Agents',
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
                    // PRIVILEGED LEGAL AI AGENTS &amp; LAW FIRM AUTOMATION
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#14110F] font-heading leading-tight mb-6">
                  Custom Legal AI Agents with Live Clio &amp; Filevine Sync.
                </h1>

                <p className="text-lg sm:text-xl text-[#46403B] mb-8 leading-relaxed">
                  We engineer secure, sovereign AI agents for American law firms and corporate legal departments. Automate 24/7 client intake qualification, execute playbook-driven contract redlining, synthesize multi-thousand page discovery binders, and synchronize matters bi-directionally with Clio, MyCase, Filevine, and NetDocuments.
                </p>

                <div className="mb-8">
                  <HeroInlineForm
                    source="legal-ai-agents-hero"
                    region="us"
                    submitLabel="Request Legal AI Architecture Audit"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#E7DED6] text-xs font-mono text-[#6E655F]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F05A28]" />
                    <span>Clio, MyCase &amp; Filevine Sync</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F05A28]" />
                    <span>Strict Attorney-Client Privilege Enclaves</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F05A28]" />
                    <span>Zero Data Retention Guarantee</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] p-3 shadow-xl">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] sm:aspect-[4/3] bg-[#E7DED6]">
                    <Image
                      src="/images/legal/law-firm-contract-review-ai.jpg"
                      alt="American law firm partner and senior attorney reviewing contract redlines on modern legal workstation"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  <div className="mt-3 p-3 bg-white rounded-lg border border-[#E7DED6] text-xs">
                    <div className="flex items-center justify-between text-muted font-mono mb-1">
                      <span>LIVE PRACTICE MANAGEMENT INGESTION</span>
                      <span className="text-[#F05A28] font-bold">PRIVILEGE ENCLAVE</span>
                    </div>
                    <div className="font-bold text-[#14110F]">
                      Clio Manage &bull; Inbound M&amp;A Agreement Redlined in 42s (0 Hallucinations)
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
                // EXECUTIVE SUMMARY &amp; SYSTEM DEFINITION
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#14110F] font-heading mb-4">
                What is a Legal AI Agent?
              </h2>
              <p className="text-base sm:text-lg text-[#46403B] leading-relaxed">
                A legal AI agent is an autonomous software system connecting directly to practice management software, document management platforms, email inboxes, and court docketing feeds. It triages incoming prospective client inquiries, verifies jurisdictional fit, checks adverse parties for conflicts of interest, indexes thousands of discovery pages with exact page-and-line citations, redlines commercial agreements against custom firm playbooks, and stages approved drafts inside your practice management system with complete audit trails.
              </p>
            </div>
          </div>
        </section>

        {/* VERIFIED LEGAL BENCHMARKS SECTION */}
        <section className="py-16 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // VERIFIED LEGAL INDUSTRY BENCHMARKS
              </div>
              <h2 className="text-3xl font-extrabold text-[#14110F] font-heading">
                The Economic Bottleneck in American Legal Practice
              </h2>
              <p className="text-base sm:text-lg text-[#46403B] mt-3">
                How manual document review and delayed client intake erode billable profitability and case capture rates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  &lt;3 Hrs
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  Billable Hours Captured in an 8-Hour Workday
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Clio&rsquo;s Legal Trends Report has repeatedly found that lawyers convert under 3 hours of an average 8-hour day into billable work, with the remainder consumed by intake, document formatting, and administrative record searches.
                </p>
                <a
                  href="https://www.clio.com/resources/legal-trends/benchmarks/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#F05A28] hover:underline"
                >
                  Source: Clio Legal Trends Report &rarr;
                </a>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  80%
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  Prospects Who Call a Competing Firm After 48 Hours of Silence
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Martindale-Avvo&rsquo;s legal consumer research finds that four in five prospective clients contact another attorney if a firm has not followed up within 48 hours of the initial inquiry.
                </p>
                <a
                  href="https://www.martindale-avvo.com/academy/research/understanding-the-legal-consumer-2024/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#F05A28] hover:underline"
                >
                  Source: Martindale-Avvo Legal Consumer Research &rarr;
                </a>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  190 Hrs
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  Reclaimed Per Lawyer Annually With AI-Assisted Review
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Thomson Reuters Institute&rsquo;s Future of Professionals research finds each lawyer stands to reclaim roughly 190 work-hours a year by shifting document drafting and contract review onto AI-assisted workflows.
                </p>
                <a
                  href="https://www.thomsonreuters.com/en-us/posts/legal/future-of-professionals-report-analysis-law-firm-economics/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#F05A28] hover:underline"
                >
                  Source: Thomson Reuters Institute &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 6-CARD CAPABILITY BENTO GRID */}
        <section className="py-20 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // ENTERPRISE LEGAL CAPABILITIES
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">
                Engineered for High-Stakes Law Firms and Corporate Counsel
              </h2>
              <p className="text-lg text-[#46403B]">
                Everything required to automate routine legal operations securely while preserving absolute attorney-client privilege.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  01
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">
                  24/7 AI Legal Client Intake &amp; Qualification
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Answers incoming telephone calls, website chats, and text inquiries instantly. Evaluates case criteria, captures incident facts, checks statute of limitations, and schedules attorney consultations.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Sub-500ms voice response
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Automated digital retainer dispatch
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Multi-lingual Spanish and English
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  02
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">
                  Playbook-Driven Contract Redlining
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Ingests inbound commercial agreements, compares clauses against your firm internal negotiating playbook, inserts tracked changes, and provides explanatory comments in Word documents.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Indemnity and liability cap triage
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Native Word (.docx) track changes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Governing law clause detection
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  03
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">
                  Discovery Indexing &amp; Line-Citation Synthesis
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Processes multi-thousand page deposition transcripts, interrogatories, and exhibit binders. Generates structured factual chronologies with exact page-and-line coordinates.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Verifiable page/line source pins
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Contradiction and impeachment flags
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Key witness timeline extraction
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  04
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">
                  Automated Conflict of Interest Scans
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Extracts adverse parties, corporate parents, subsidiaries, insurers, and witnesses from intake calls and filings, scanning your practice management database to alert attorneys to conflicts.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Direct Clio and Filevine query
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Corporate entity alias resolution
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Ethical wall compliance checks
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  05
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">
                  Medical Specials &amp; Chronology Extraction
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Processes disorganized medical records, billing ledgers, and physical therapy notes. Categorizes records by medical provider, tabulates specials, and drafts settlement demand outlines.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> ICD-10 and CPT code extraction
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Total medical billing tabulation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Injury progression timeline
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  06
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">
                  Court Deadline Docketing &amp; Calendar Sync
                </h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Parses served pleadings, scheduling orders, and discovery notices. Calculates statutory filing deadlines based on jurisdiction rules and stages events directly into practice calendars.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Federal and state rule calculation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Outlook and Google Calendar sync
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Automatic hearing reminders
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* MID-PAGE CTA */}
        <section className="py-16 bg-[#FFF8F5] border-b border-[#E7DED6]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#F05A28]/30 mb-6">
              <span className="font-mono text-xs text-[#F05A28] font-bold tracking-wide">
                // SEE IT RUN ON YOUR OWN MATTER TYPES
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#14110F] font-heading mb-6">
              Want to See These Capabilities Mapped to Your Practice Area?
            </h2>

            <p className="text-base sm:text-lg text-[#46403B] max-w-2xl mx-auto mb-8 leading-relaxed">
              Send us a sample contract, intake form, or discovery file. We will show you exactly how the agent would process it inside your Clio, MyCase, or Filevine environment before you commit to anything.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4">
              <a
                href="https://calendly.com/bhavesh-factoryjet/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#F05A28] text-white font-bold hover:bg-[#D8441A] transition-colors shadow-md text-sm"
              >
                Book 30-Min Discovery Call
              </a>
              <ModalCTAButton
                label="Send Us a Sample Document"
                region="us"
                modalVariant="ai"
                btnVariant="secondary-light"
              />
            </div>
          </div>
        </section>

        {/* 5 SUB-VERTICAL LEGAL SHOWCASES */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // TAILORED PRACTICE AREA WORKFLOWS
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">
                Engineered for High-Stakes Legal Practice Areas
              </h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                Generic legal SaaS tools fail when confronted with specialized jurisdictional rules, nuanced firm negotiating playbooks, and complex evidentiary records. We engineer purpose-built AI workflows tailored to your specific practice area.
              </p>
            </div>

            <div className="space-y-16">
              {/* VERTICAL 1: Corporate Transactional & M&A Due Diligence */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#FAFAF7] p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    01. CORPORATE TRANSACTIONAL &amp; M&amp;A DUE DILIGENCE
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">
                    Automated Data Room Analysis &amp; Disclosure Schedule Synthesis
                  </h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Corporate transactional attorneys spend hundreds of billable hours sifting through virtual data rooms containing thousands of commercial contracts, customer agreements, employment covenants, and debt instruments. Missing a single change of control provision or non-compete clause can jeopardize multi-million dollar acquisitions.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our M&amp;A due diligence agent ingests virtual data room archives, categorizes agreements by contract type, flags restrictive covenants, assigns risk scores based on deal parameters, and compiles comprehensive due diligence memos with direct links to source clauses.
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none">
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Change of Control Detection
                    </li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Indemnity &amp; Cap Analysis
                    </li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Disclosure Schedule Drafting
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/legal/corporate-ma-due-diligence-ai.jpg"
                      alt="Corporate legal team analyzing acquisition documents and financial schedules in law office"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* VERTICAL 2: Personal Injury & Mass Tort Intake */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#FAFAF7] p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/legal/personal-injury-client-intake-ai.jpg"
                      alt="Legal intake specialist in personal injury law firm consulting with client in conference room"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    02. PERSONAL INJURY &amp; MASS TORT LITIGATION
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">
                    24/7 Immediate Lead Qualification &amp; Medical Chronology Assembly
                  </h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Personal injury practices lose high-value cases when prospective claimants call after hours and encounter voicemail. When retainers are signed, paralegals spend months sorting through disorganized hospital records, billing summaries, and diagnostic imaging reports.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our personal injury AI agent answers inbound calls on the first ring, collects incident details, evaluates liability thresholds, sends digital retainer agreements via SMS, and synchronizes matter records directly into Filevine or MyCase. In litigation, it parses thousands of medical pages into organized treatment timelines.
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none">
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Instant E-Retainer Dispatch
                    </li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Medical Specials Calculation
                    </li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Filevine &amp; MyCase API Sync
                    </li>
                  </ul>
                </div>
              </div>

              {/* VERTICAL 3: Real Estate Title & Commercial Lease Abstraction */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#FAFAF7] p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    03. COMMERCIAL REAL ESTATE &amp; TITLE PRACTICE
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">
                    Automated Lease Abstraction &amp; Title Commitment Triage
                  </h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Commercial real estate portfolios involve hundred-page lease agreements with complex CAM reconciliation provisions, tenant option dates, co-tenancy requirements, and environmental indemnity covenants.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our real estate legal AI agent reads multi-property lease bundles, abstracts critical dates, calculates square footage base rent schedules, verifies tenant insurance compliance, and generates standardized lease abstraction summaries for property acquisitions and asset management teams.
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none">
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      CAM Reconciliation Parsing
                    </li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Option Date Docketing
                    </li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Title Exception Comparison
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/legal/real-estate-lease-abstraction-ai.jpg"
                      alt="Commercial real estate lawyer analyzing property title documents and lease agreements"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* VERTICAL 4: Intellectual Property & Trademark Discovery */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#FAFAF7] p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/legal/ip-trademark-discovery-ai.jpg"
                      alt="Intellectual property patent attorney reviewing trademark filings and prior art documentation"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    04. INTELLECTUAL PROPERTY &amp; TRADEMARK PROSECUTION
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">
                    USPTO Office Action Triage &amp; Prior Art Discovery Indexing
                  </h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    IP boutique law firms handle thousands of trademark renewals, USPTO office actions, and patent claim charts. Manually reviewing examiner rejections under Section 2(d) or 103 obviousness consumes valuable partner and associate time.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our IP automation agent parses incoming USPTO correspondence, cross-references cited registrations against trademark databases, matches goods and services classifications under the Nice Agreement, and drafts structured office action response outlines for attorney review.
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none">
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      USPTO TSDR Ingestion
                    </li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Section 2(d) Confusion Analysis
                    </li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Patent Claim Chart Extraction
                    </li>
                  </ul>
                </div>
              </div>

              {/* VERTICAL 5: Estate Planning & Family Law */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#FAFAF7] p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    05. ESTATE PLANNING &amp; FAMILY LAW PRACTICE
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">
                    Asset Inventory Compilation &amp; Standardized Document Assembly
                  </h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Estate planning attorneys spend excessive administrative hours collecting client asset questionnaires, verifying beneficiary designations, and formatting trusts, wills, powers of attorney, and healthcare directives.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our estate planning AI agent conducts structured conversational asset interviews with clients, organizes real estate deeds and brokerage accounts into structured estate schedules, and drafts customized estate planning packets using your firm approved templates.
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none">
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Conversational Asset Intake
                    </li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Trust Schedule Assembly
                    </li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Smokeball &amp; Clio Document Sync
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/legal/law-firm-contract-review-ai.jpg"
                      alt="Estate planning attorney and client reviewing trust documentation in private conference room"
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

        {/* 10-POINT TECHNICAL ARCHITECTURE BLUEPRINT */}
        <section className="py-20 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // SYSTEM ARCHITECTURE &amp; INTEGRATION
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">
                Enterprise Legal AI Engineering Blueprint
              </h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                How we architect secure, deterministic, and privilege-compliant AI agents for American law firms.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none">
              {[
                {
                  title: 'Zero Data Retention & Privilege Enclaves',
                  desc: 'Inference requests run on dedicated private instances with strict Zero Data Retention SLAs. Client records are never stored in public foundation models or used for model training.',
                },
                {
                  title: 'Bi-Directional Practice Management Sync',
                  desc: 'Deterministic REST connectors sync contacts, new matter records, activity logs, and billing codes with Clio Manage, MyCase, Filevine, and Smokeball without manual re-keying.',
                },
                {
                  title: 'Exact Page-and-Line Citation Tracking',
                  desc: 'Every extracted fact, contract clause analysis, and discovery summary is pinned to verifiable page, paragraph, and line coordinates in original court filings and PDF exhibits.',
                },
                {
                  title: 'Playbook-Driven Contract Redlining Engine',
                  desc: 'Incorporate your firm specific standard terms, fallback positions, risk tolerance scales, and unacceptable language triggers into automated Word (.docx) redlining pipelines.',
                },
                {
                  title: 'Automated Conflict Check & Party Extraction',
                  desc: 'Extract named individuals, adverse corporate entities, subsidiaries, and insurance carriers to run automated conflict scans against your existing firm database records.',
                },
                {
                  title: 'Sub-500ms Voice Telephony Receptionist',
                  desc: 'Inbound intake voice callers connect instantly with natural conversational voice agents that collect incident facts, qualify claims, and warm-transfer urgent callers to on-call counsel.',
                },
                {
                  title: 'Chronological Medical & Evidentiary Synthesis',
                  desc: 'OCR pipelines parse thousands of pages of medical records, deposition transcripts, and billing records, generating categorized treatment chronologies with total specials calculations.',
                },
                {
                  title: 'Private Isolated Vector Knowledge Bases',
                  desc: 'Index your firm past successful motions, appellate briefs, and settlement negotiation memos in encrypted single-tenant vector stores for bespoke brief drafting.',
                },
                {
                  title: 'On-Premise & Sovereign Cloud Deployment',
                  desc: 'For high-security litigation practices, deploy open-source legal models on private GPU servers behind your physical office firewalls or inside sovereign AWS GovCloud enclaves.',
                },
                {
                  title: '100% Source Code & Workflow Ownership',
                  desc: 'Your law firm receives complete Git repository access, Python backend code, Docker containers, and database schemas with zero recurring per-user software licensing fees.',
                },
              ].map((item, idx) => (
                <li
                  key={item.title}
                  className="p-6 rounded-2xl border border-[#E7DED6] bg-white hover:border-[#F05A28]/50 transition-colors shadow-sm"
                >
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">
                    LEGAL-ARCH-0{idx + 1}
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

        {/* 4-PHASE LEGAL IMPLEMENTATION LIFECYCLE */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // DEPLOYMENT METHODOLOGY
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">
                4-Phase Legal AI Agent Implementation Roadmap
              </h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                From practice management schema audit to live production rollout in 4 to 6 weeks.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 list-none">
              <li className="p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 01 // WEEKS 1-2</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">PMS Schema &amp; Privilege Audit</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We map your custom Clio, Filevine, or MyCase matter fields, intake questionnaires, document templates, and billing codes. We execute binding NDAs and establish private zero-data-retention environments.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: API connector schema &amp; security architecture documentation
                </div>
              </li>

              <li className="p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 02 // WEEKS 2-3</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">Parsing Pipeline &amp; Playbooks</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We construct multi-modal parsing pipelines for legal contracts, pleadings, and transcripts. We encode your firm negotiation playbooks, clause preferences, and intake qualification logic into deterministic state machines.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: Custom legal extraction models &amp; citation verification engine
                </div>
              </li>

              <li className="p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 03 // WEEKS 3-4</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">Approval Console &amp; PMS Staging</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We deploy your side-by-side human review console. Attorneys review AI-extracted matter details, verify contract redlines, test real-time conflict checking, and validate one-click matter staging in your live sandbox.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: Lawyer review dashboard &amp; staging environment integration
                </div>
              </li>

              <li className="p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 04 // WEEKS 5-6</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">Live Rollout &amp; Code Handover</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We route active client intake channels, telephony numbers, and document queues to the production agent pipeline. We conduct attorney and paralegal training, deliver complete Git repository documentation, and execute full IP handover.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: Full source code, Docker configs &amp; operations manual
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* COMPARISON MATRIX: CUSTOM LEGAL AI VS GENERIC SAAS */}
        <section className="py-20 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // VENDOR COMPARISON
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">
                FactoryJet Custom Legal AI vs. Generic SaaS Tools
              </h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                Why forward-thinking law firms build owned AI infrastructure rather than paying per-seat software licensing taxes.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[#E7DED6] bg-white shadow-sm">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[#E7DED6] bg-[#FFF8F5]">
                    <th className="p-4 sm:p-6 font-bold text-[#14110F]">Capability / Feature</th>
                    <th className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      FactoryJet Custom Legal AI
                    </th>
                    <th className="p-4 sm:p-6 font-bold text-[#6E655F]">
                      Generic SaaS Legal Tools
                    </th>
                    <th className="p-4 sm:p-6 font-bold text-[#6E655F]">
                      Manual Associate Review
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7DED6]">
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Contract Redline Speed</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Under 60 Seconds
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">5 to 15 Minutes</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">3 to 6 Billable Hours</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Practice Management Integration</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Native Clio, MyCase, Filevine Sync
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Isolated Browser Extension</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Manual Data Entry</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Citation &amp; Hallucination Control</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Exact Page/Line Coordinates
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">General Document Level Only</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Human Verification</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Software Cost Structure</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      100% Owned, $0 Per-Seat Fee
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">$200 - $600 / user / month</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">$150k - $225k associate salary</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Data Sovereignty &amp; Privacy</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Private VPC or On-Premise Enclave
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Shared Multi-Tenant Cloud</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Internal Filesystem</td>
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
                      alt="Bhavesh Barot, Founder &amp; CEO of FactoryJet"
                      fill
                      quality={95}
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  <div className="pt-4 text-center">
                    <div className="font-bold text-lg text-[#14110F]">Bhavesh Barot</div>
                    <div className="font-mono text-xs text-[#F05A28] font-bold">
                      Founder &amp; CEO, FactoryJet
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
                  // DIRECT LEGAL ARCHITECTURE LEADERSHIP
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-6">
                  Direct Engineering Oversight with Founder Bhavesh Barot
                </h2>
                <p className="text-base sm:text-lg text-[#46403B] leading-relaxed mb-6">
                  Legal workflows require zero-fault execution, airtight ethics compliance, and absolute privilege safeguards. At FactoryJet, founder Bhavesh Barot leads every legal AI architecture and practice management integration scoping session personally. We evaluate your current practice management database, document storage structures, and intake qualification bottlenecks in the initial session.
                </p>
                <p className="text-base sm:text-lg text-[#46403B] leading-relaxed mb-8">
                  You collaborate directly with senior systems architects who have engineered mission-critical enterprise data pipelines for over a decade. We build reliable, auditable software that your law firm owns and operates permanently.
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
                    label="Request Legal AI Proposal"
                    region="us"
                    modalVariant="ai"
                    btnVariant="secondary-light"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RELATED LEGAL SPOKES */}
        <section className="py-16 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-4">
              // DEEP DIVE LEGAL CAPABILITY SPOKES
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#14110F] font-heading mb-8">
              Explore Our Granular Legal Automation Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/services/law-firm-seo"
                className="p-6 rounded-xl bg-white border border-[#E7DED6] hover:border-[#F05A28] transition-colors group"
              >
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">SPOKE 01</div>
                <h3 className="font-bold text-lg text-[#14110F] group-hover:text-[#F05A28] transition-colors mb-2">
                  Law Firm SEO &amp; Client Acquisition &rarr;
                </h3>
                <p className="text-sm text-[#46403B]">
                  High-intent local and regional legal search engine optimization to capture qualified claimants.
                </p>
              </Link>

              <Link
                href="/services/law-firm-website-design"
                className="p-6 rounded-xl bg-white border border-[#E7DED6] hover:border-[#F05A28] transition-colors group"
              >
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">SPOKE 02</div>
                <h3 className="font-bold text-lg text-[#14110F] group-hover:text-[#F05A28] transition-colors mb-2">
                  Law Firm Website Design &rarr;
                </h3>
                <p className="text-sm text-[#46403B]">
                  Conversion-focused, high-authority web presence engineered for boutique practices and litigation firms.
                </p>
              </Link>

              <Link
                href="/services/ai-agent-development"
                className="p-6 rounded-xl bg-white border border-[#E7DED6] hover:border-[#F05A28] transition-colors group"
              >
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">SPOKE 03</div>
                <h3 className="font-bold text-lg text-[#14110F] group-hover:text-[#F05A28] transition-colors mb-2">
                  Custom AI Agent Development Hub &rarr;
                </h3>
                <p className="text-sm text-[#46403B]">
                  Enterprise-grade autonomous AI agents for operations, customer triage, and multi-system workflows.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* STRUCTURED FAQ SECTION */}
        <FAQ
          eyebrow="// LEGAL AI QUESTIONS &amp; ANSWERS"
          headline="Frequently Asked Questions on Legal AI Agents"
          lead="Everything managing partners, chief technology officers, and practice administrators need to know about privilege, practice management sync, and code ownership."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-white"
        />

        {/* FINAL CTA SECTION */}
        <section className="py-20 bg-[#FFF8F5] border-t border-[#E7DED6]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#F05A28]/30 mb-6">
              <span className="font-mono text-xs text-[#F05A28] font-bold tracking-wide">
                // AUTOMATE INTAKE &bull; ZERO SEAT FEES &bull; 100% PRIVACY ENCLAVES
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14110F] font-heading mb-6">
              Ready to Upgrade Your Law Firm with Custom Legal AI?
            </h2>

            <p className="text-lg text-[#46403B] max-w-2xl mx-auto mb-10 leading-relaxed">
              Book a 30-minute architecture consultation with our founder. We will evaluate your current practice management setup, review your document workflows, and deliver a fixed-scope implementation proposal within 24 hours.
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
                label="Request Custom Law Firm Audit"
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

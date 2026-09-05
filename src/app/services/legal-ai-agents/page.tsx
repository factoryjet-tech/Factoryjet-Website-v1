import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import HeroInlineForm from '@/components/HeroInlineForm';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

const CANONICAL_URL = 'https://factoryjet.com/services/legal-ai-agents';
const PAGE_TITLE = 'Legal AI Agents & Law Firm Automation | FactoryJet';
const PAGE_DESC =
  'Custom legal AI agents for US law firms. Automate client intake, contract redlining, and discovery with direct Clio, MyCase & Filevine sync. Get an audit.';
const PAGE_MODIFIED = '2026-09-01';

/** Single source of truth for the breadcrumb trail. Feeds BOTH the visible
 *  <Breadcrumbs> component and the BreadcrumbList JSON-LD below. So the two
 *  can never drift into showing a different path than the schema claims. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Legal AI Agents', url: CANONICAL_URL },
];

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
    languages: {
      'en-US': CANONICAL_URL,
      'x-default': CANONICAL_URL,
    },
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
  { key: 'intake', label: 'Intake & Lead Qualification.' },
  { key: 'contracts', label: 'Contract Review & Redlines.' },
  { key: 'pms', label: 'Practice Management & Sync.' },
  { key: 'security', label: 'Security & Legal Ethics' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  {
    category: 'intake',
    question: 'How do legal AI agents qualify prospective clients without giving unauthorized legal advice?',
    answer:
      'Our legal AI intake agents run on strict rules. They avoid open-ended chat. They gather the facts of the case. They verify jurisdiction quickly. They check statute of limitations dates. They flag adverse parties for conflict checks. They match incident summaries against your criteria. The agent states it is an assistant. It stages qualified summaries for attorney review. It never offers legal opinions. It never guarantees case value.',
  },
  {
    category: 'intake',
    question: 'Can the AI agent run real-time conflict of interest checks across our firm database?',
    answer:
      'Yes. The agent pulls every named party from intake forms. It checks opposing companies, insurers, and co-defendants. It queries practice management tools like Clio, Filevine, or MyCase. It connects via secure APIs. Larger firms use Intapp for conflict checks. The agent queries Intapp directly. Firm data stays in one place. Potential conflicts flag before the initial consultation.',
  },
  {
    category: 'intake',
    question: 'How quickly does the AI intake agent respond to new web inquiries and phone calls?',
    answer:
      'The agent responds to web forms in under 15 seconds. It replies to texts and chat instantly. For inbound phone calls, it answers on the first ring. It features sub-500ms voice response speed. That speed helps your firm capture high-intent claimants. It stops them from calling competitors.',
  },
  {
    category: 'intake',
    question: 'Does the AI intake agent support multilingual intake for non-English speaking claimants?',
    answer:
      'Yes. Our intake agents support real-time translation. They handle Spanish, Portuguese, Mandarin, Vietnamese, and French. Matter summaries get transcribed into English. Original audio stays attached for attorney review. This helps personal injury and immigration firms. A fast response in native language secures new clients. It prevents claimants from calling other firms.',
  },
  {
    category: 'contracts',
    question: 'How does the legal AI agent redline commercial agreements and vendor contracts?',
    answer:
      'The agent reviews draft agreements against your playbook. It checks preferred clauses and risk thresholds. It flags non-standard indemnification terms. It marks uncapped liability clauses. It detects aggressive governing law terms. It flags ambiguous termination triggers. Then it inserts tracked redlines into Word files. It adds explanatory notes for counsel.',
  },
  {
    category: 'contracts',
    question: 'Can the AI agent parse complex PDF lease agreements and multi-entity transaction bibles?',
    answer:
      'Yes. The agent runs multi-page parsing pipelines. It indexes commercial leases and promissory notes. It parses operating agreements and disclosure schedules. It extracts rent escalation tables. It finds commencement triggers and guarantor terms. It flags renewal notice windows. Every field lands in a structured table. Your team can search or export it easily.',
  },
  {
    category: 'contracts',
    question: 'How does the agent prevent hallucinations when summarizing legal discovery records?',
    answer:
      'We build strict RAG retrieval pipelines. We avoid free-form generation. Every summary sentence cites verifiable source lines. It links to exact deposition transcript pages. It references specific medical record lines. If a fact cannot be verified, the agent flags the gap. It never guesses facts.',
  },
  {
    category: 'contracts',
    question: 'Can the AI agent organize medical records and draft chronological injury summaries for personal injury cases?',
    answer:
      'Yes. The agent processes thousands of medical pages. It sorts bills, MRI reports, and therapy notes. It organizes records by medical provider. It extracts diagnostic ICD-10 codes. It totals all medical specials. Then it drafts a chronological treatment summary. You can insert it directly into demand letters.',
  },
  {
    category: 'pms',
    question: 'Which legal practice management systems and document repositories do you integrate with?',
    answer:
      'We engineer native bi-directional connectors. We connect Clio Manage and Clio Grow. We support Filevine, MyCase, PracticePanther, and Smokeball. We also integrate NetDocuments, iManage, Relativity, and Litify on Salesforce. Connectors authenticate over OAuth 2.0. The agent creates contacts and matter folders. It attaches indexed files. It logs time entries automatically. Sync runs on webhooks. New records appear within seconds.',
  },
  {
    category: 'pms',
    question: 'Can the AI agent create calendar events and calculate statutory court filing deadlines?',
    answer:
      'Yes. The agent monitors CM/ECF and PACER dockets. It tracks state portals like Tyler Odyssey. When a new filing posts, it calculates response deadlines. It applies local civil procedure rules. It stages deadlines in Outlook and Google Calendar. It syncs with practice management systems. Every entry lists the underlying court rule. Attorneys verify dates before docketing.',
  },
  {
    category: 'pms',
    question: 'How does the agent log billable and non-billable administrative time entries?',
    answer:
      'The agent tracks document processing tasks. It records file indexing and intake time. It drafts UTBMS LEDES billing narratives. It attaches exact task codes. A103 tags document review. L110 marks factual investigation. Paralegals or attorneys review each entry before posting.',
  },
  {
    category: 'pms',
    question: 'Can our law firm connect proprietary knowledge bases and precedent brief archives?',
    answer:
      'Yes. We build a private vector database. It indexes your motions and appellate briefs. It includes discovery responses and settlement memos. It indexes files directly from NetDocuments or iManage. Nothing requires manual re-uploading. Your team drafts in your firm style. The database stays isolated to your firm. Suggestions draw from partner filings. They never pull generic web text.',
  },
  {
    category: 'security',
    question: 'How do you protect attorney-client privilege and confidentiality under ABA Model Rule 1.6?',
    answer:
      'We deploy under strict Zero Data Retention agreements. Client files never train public commercial models. Privileged notes remain private. Data encrypts in transit via TLS 1.3. Files encrypt at rest with AES-256 keys. Everything runs in an isolated private cloud.',
  },
  {
    category: 'security',
    question: 'Can our firm deploy the AI agent on private on-premise hardware or isolated sovereign clouds?',
    answer:
      'Yes. Some boutique firms require physical data custody. Defense practices often need this too. We deploy open-source legal models for them. These run on local GPU servers. They operate behind your office firewall. They can also run in an AWS GovCloud enclave. This option costs more in hardware. It takes more setup time. We recommend it when client contracts require it. Internal policies may also demand it.',
  },
  {
    category: 'security',
    question: 'Does our law firm own the custom AI agent code and prompt state machines?',
    answer:
      'Yes. FactoryJet hands over 100 percent source code. We provide full Git repository access. You receive intellectual property ownership. The Python backend services belong to your firm. Database connectors belong to you too. There are zero per-user monthly licensing fees. You can move systems to in-house teams. You can switch vendors anytime. Nothing sits behind proprietary platforms. There are no per-seat contracts.',
  },
  {
    category: 'security',
    question: 'How long does it take to implement a custom legal AI agent for our firm?',
    answer:
      'A focused intake agent deploys in 3 to 4 weeks. Contract redlining workflows follow the same timeline. A full firm-wide build completes in 6 to 8 weeks. This covers practice management sync. It includes discovery indexing and precedent drafting. Timelines depend on API access speed. Providing sample documents speeds up delivery. Early access keeps builds on schedule.',
  },
  {
    category: 'contracts',
    question: 'Can the AI agent manage e-discovery review and generate a defensible privilege log before documents go to opposing counsel?',
    answer:
      'Yes. The agent ingests native files. It reads email threads accurately. It applies your firm privilege criteria. It flags attorney-client communications. It marks work product for withholding. It detects consultant materials. It generates a structured privilege log. Entries include document IDs and dates. They list authors, recipients, and privilege grounds. Attorneys review logs before production.',
  },
  {
    category: 'intake',
    question: 'What happens after a lead is qualified? Does the agent actually open the matter file in our practice management system?',
    answer:
      'Yes. Attorneys approve qualified leads first. Then the agent opens a new matter. It connects to Clio, Filevine, or MyCase. It assigns matter numbers automatically. It links client contact records. It attaches signed DocuSign engagement letters. It populates standard matter fields. It sets practice area and responsible counsel. Paralegals avoid manual data entry.',
  },
  {
    category: 'pms',
    question: 'Can the agent draft and track litigation hold notices when a new lawsuit or regulatory inquiry begins?',
    answer:
      'Yes. Contentious matters trigger litigation hold drafting. The agent uses your firm template. It identifies relevant custodians. It checks parties and departments. It routes notices for attorney review. It logs every acknowledgment receipt. Your firm maintains defensible preservation records.',
  },
  {
    category: 'security',
    question: 'Does the AI agent keep an audit trail we could produce in response to a bar complaint or malpractice inquiry?',
    answer:
      'Yes. Every extraction gets logged with timestamps. Redlines record source citations. Entries note human reviewers who approved them. Audit trails export on request. Your firm receives a defensible record. It proves what AI proposed. It verifies what counsel approved and filed.',
  },
  {
    category: 'contracts',
    question: 'Can the agent process scanned or handwritten documents, not just clean digital PDFs?',
    answer:
      'Yes. The parsing pipeline runs legal-tuned OCR. Scanned pleadings index cleanly. Faxed medical records get processed. Handwritten intake notes parse accurately. Low-confidence passages flag for human review. The system avoids silent guesses. Citation accuracy remains intact.',
  },
];


const webPageSchema = {
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

const serviceSchema = {
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

const howToSchema = {
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


const faqSchema = {
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


export default function LegalAiAgentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SiteHeader />

      <main className="min-h-screen bg-white text-[#14110F]">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 border-b border-[#E7DED6] bg-[#FFFFFF] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#E7DED6_1px,transparent_1px)] [background-size:20px_20px] opacity-60 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFF8F5] border border-[#F05A28]/30 mb-6">
                  <span className="font-mono text-xs text-[#F05A28] font-bold tracking-wide">
                    // PRIVILEGED LEGAL AI AGENTS &amp. LAW FIRM AUTOMATION
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#14110F] font-heading leading-tight mb-6">
                  Custom Legal AI Agents with Live Clio &amp. Filevine Sync.
                </h1>

                <p className="text-lg sm:text-xl text-[#46403B] mb-8 leading-relaxed">
                  We engineer secure, sovereign AI agents for American law firms and corporate legal departments. They run 24/7 client intake qualification, playbook-driven contract redlining, and multi-thousand page discovery synthesis. Then they sync matters bi-directionally with Clio, MyCase, Filevine, NetDocuments, PracticePanther, Smokeball, and iManage.
                </p>

                <div className="mb-8">
                  <HeroInlineForm
                    source="legal-ai-agents-hero"
                    region="us"
                    submitLabel="Request Legal AI Architecture Audit."
                  />
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#E7DED6] text-xs font-mono text-[#6E655F]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F05A28]" />
                    <span>Clio, MyCase &amp. Filevine Sync</span>
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
                      width={1344}
                      height={896}
                      priority
                      className="absolute inset-0 h-full w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  <div className="mt-3 p-3 bg-white rounded-lg border border-[#E7DED6] text-xs">
                    <div className="flex items-center justify-between text-muted font-mono mb-1">
                      <span>LIVE PRACTICE MANAGEMENT INGESTION</span>
                      <span className="text-[#F05A28] font-bold">PRIVILEGE ENCLAVE</span>
                    </div>
                    <div className="font-bold text-[#14110F]">
                      Clio Manage &bull. Inbound M&amp;A Agreement Redlined in 42s (0 Hallucinations)
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
                // EXECUTIVE SUMMARY &amp. SYSTEM DEFINITION
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#14110F] font-heading mb-4">
                What is a Legal AI Agent?.
              </h2>
              <p className="text-base sm:text-lg text-[#46403B] leading-relaxed">
                A legal AI agent is automated software. It connects to practice management platforms like Clio, Filevine, and MyCase. It also links with NetDocuments and iManage. It monitors email inboxes and court docketing feeds. It triages incoming client inquiries. It checks jurisdictional fit. It screens adverse parties for conflicts. It indexes discovery pages with page-and-line citations. It redlines agreements against your playbook. It stages approved drafts in your practice management system. It logs a complete audit trail.
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
              <h2 className="text-3xl font-extrabold text-[#14110F] font-heading">The Economic Bottleneck in American Legal Practice.</h2>
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
                  Billable Hours Captured in an 8-Hour Workday.
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Clio&rsquo;s Legal Trends Report has repeatedly found that lawyers convert under 3 hours of an average 8-hour day into billable work. The rest gets consumed by intake, document formatting, and administrative record searches.
                </p>
                <a
                  href="https://www.clio.com/resources/legal-trends/benchmarks/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#F05A28] hover:underline"
                >
                  Source: Clio Legal Trends Report &rarr;.
                </a>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  80%
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  Prospects Who Call a Competing Firm After 48 Hours of Silence.
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Legal consumer research shows high client drop-off. Four in five prospective clients contact another attorney. This occurs when firms do not follow up within 48 hours.
                </p>
                <a
                  href="https://www.martindale-avvo.com/academy/research/understanding-the-legal-consumer-2024/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#F05A28] hover:underline"
                >
                  Source: Martindale-Avvo Legal Consumer Research &rarr;.
                </a>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F05A28] font-heading mb-2">
                  190 Hrs
                </div>
                <div className="text-sm font-bold text-[#14110F] mb-3">
                  Reclaimed Per Lawyer Annually With AI-Assisted Review.
                </div>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Thomson Reuters Institute&rsquo;s Future of Professionals research finds each lawyer stands to reclaim roughly 190 work-hours a year by shifting document drafting and contract review onto AI-assisted workflows. Our{' '}
                  <Link href="/tools/ai-agent-roi-calculator" className="underline hover:text-[#F05A28]">
                    AI agent ROI calculator
                  </Link>{' '}
                  can help you estimate what that reclaimed time is worth for your firm.
                </p>
                <a
                  href="https://www.thomsonreuters.com/en-us/posts/legal/future-of-professionals-report-analysis-law-firm-economics/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#F05A28] hover:underline"
                >
                  Source: Thomson Reuters Institute &rarr;.
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
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">Engineered for High-Stakes Law Firms and Corporate Counsel..</h2>
              <p className="text-lg text-[#46403B]">
                Everything required to automate routine legal operations securely while preserving absolute attorney-client privilege.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-white border border-[#E7DED6] hover:border-[#F05A28]/50 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F5] border border-[#F05A28]/20 flex items-center justify-center text-[#F05A28] font-bold font-mono text-lg mb-6">
                  01
                </div>
                <h3 className="text-xl font-bold text-[#14110F] mb-3">24/7 AI Legal Client Intake &amp. Qualification.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Answers incoming telephone calls instantly. Replies to website chats and texts. Evaluates case criteria accurately. Captures incident facts. Checks statute of limitations dates. Schedules attorney consultations.
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
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Playbook-Driven Contract Redlining.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Ingests inbound commercial agreements. Compares clauses against your playbook. Inserts tracked changes into Word documents. Provides explanatory comments for counsel.
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
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Discovery Indexing &amp. Line-Citation Synthesis.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Processes large deposition transcripts. Indexes interrogatories and exhibit binders. Ingests exports from Relativity review platforms. Generates structured factual chronologies. Attaches exact page-and-line coordinates.
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
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Automated Conflict of Interest Scans.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Extracts adverse parties from intake calls. Checks corporate parents and subsidiaries. Identifies insurers and witnesses. Scans practice management databases. Alerts attorneys to potential conflicts immediately.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Direct Clio, Filevine &amp. MyCase query
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
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Medical Specials &amp. Chronology Extraction.</h3>
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
                <h3 className="text-xl font-bold text-[#14110F] mb-3">Court Deadline Docketing &amp. Calendar Sync.</h3>
                <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                  Watches your federal CM/ECF and PACER dockets, plus state e-filing portals, for new filings. Calculates statutory deadlines from jurisdiction rules and stages events directly into your practice calendar.
                </p>
                <ul className="space-y-2 text-xs font-mono text-[#6E655F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Federal and state rule calculation.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Outlook and Google Calendar sync.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#F05A28]">&bull;</span> Automatic hearing reminders.
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
              Send us a sample contract, intake form, or discovery file. We will show you exactly how the agent processes it inside your Clio, MyCase, or Filevine environment. No commitment needed.
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
                label="Send Us a Sample Document."
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
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">Engineered for High-Stakes Legal Practice Areas.</h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                Generic legal SaaS tools break down against specialized jurisdictional rules, a firm's own negotiating playbook, and complex evidentiary records. We engineer purpose-built AI workflows for your specific practice area instead.
              </p>
            </div>

            <div className="space-y-16">
              {/* VERTICAL 1: Corporate Transactional & M&A Due Diligence */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#FAFAF7] p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    01. CORPORATE TRANSACTIONAL &amp. M&amp;A DUE DILIGENCE
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">Automated Data Room Analysis &amp. Disclosure Schedule Synthesis.</h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Corporate lawyers review virtual data rooms. They check commercial contracts. They review customer agreements. They inspect employment covenants and debt instruments.. Missing one change of control provision or non-compete clause can jeopardize a multi-million dollar acquisition.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our M&amp;A due diligence agent ingests virtual data rooms. It indexes files stored in NetDocuments. It sorts agreements by contract type. It flags restrictive covenants. It assigns risk scores based on deal terms. It compiles a due diligence memo. It attaches direct links to source clauses.
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none">
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Change of Control Detection.
                    </li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Indemnity &amp. Cap Analysis.
                    </li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Disclosure Schedule Drafting.
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/legal/corporate-ma-due-diligence-ai.jpg"
                      alt="Corporate legal team analyzing acquisition documents and financial schedules in law office"
                      width={1200}
                      height={800}
                      className="absolute inset-0 h-full w-full object-cover"
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
                      width={1200}
                      height={896}
                      className="absolute inset-0 h-full w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    02. PERSONAL INJURY &amp. MASS TORT LITIGATION
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">24/7 Immediate Lead Qualification &amp. Medical Chronology Assembly.</h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Personal injury practices lose high-value cases after hours. Callers drop off when hitting voicemail. Once a retainer is signed, paralegals sort records. Disorganized hospital files and billing summaries consume months.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our personal injury AI agent answers on the first ring. It collects incident details. It evaluates liability thresholds. It sends digital retainers through DocuSign. It syncs new matters directly into Filevine or MyCase. Once litigation starts, it parses medical records. It builds an organized treatment timeline. The same 24/7 intake-capture pattern shows up across service businesses generally. see our{' '}
                    <Link href="/services/ai-customer-support-agents" className="underline hover:text-[#F05A28]">
                      AI customer support agents
                    </Link>{' '}
                    page for the general-purpose version.
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none">
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Instant E-Retainer Dispatch.
                    </li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Medical Specials Calculation.
                    </li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Filevine &amp. MyCase API Sync.
                    </li>
                  </ul>
                </div>
              </div>

              {/* VERTICAL 3: Real Estate Title & Commercial Lease Abstraction */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#FAFAF7] p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    03. COMMERCIAL REAL ESTATE &amp. TITLE PRACTICE
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">Automated Lease Abstraction &amp. Title Commitment Triage.</h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Commercial real estate deals involve long lease agreements. Each agreement carries CAM reconciliation terms. They include tenant option dates and co-tenancy rules. They also contain environmental indemnity covenants.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our real estate legal AI agent reads multi-property lease bundles. It abstracts critical milestone dates. It calculates square footage base rent schedules. It verifies tenant insurance compliance. Then it generates a standardized lease abstraction summary. It delivers reports to acquisitions and asset teams.
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none">
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      CAM Reconciliation Parsing.
                    </li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Option Date Docketing.
                    </li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Title Exception Comparison.
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/legal/real-estate-lease-abstraction-ai.jpg"
                      alt="Commercial real estate lawyer analyzing property title documents and lease agreements"
                      width={1280}
                      height={800}
                      className="absolute inset-0 h-full w-full object-cover"
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
                      width={1280}
                      height={800}
                      className="absolute inset-0 h-full w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    04. INTELLECTUAL PROPERTY &amp. TRADEMARK PROSECUTION
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">USPTO Office Action Triage &amp. Prior Art Discovery Indexing.</h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    IP boutique law firms handle thousands of trademark renewals, USPTO office actions, and patent claim charts. Manually reviewing examiner rejections under Section 2(d) or 103 obviousness consumes valuable partner and associate time.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our IP automation agent parses incoming USPTO correspondence and cross-references cited registrations against trademark databases. It matches goods and services classifications under the Nice Agreement. Then it drafts a structured office action response outline for attorney review.
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none">
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      USPTO TSDR Ingestion.
                    </li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Section 2(d) Confusion Analysis.
                    </li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Patent Claim Chart Extraction.
                    </li>
                  </ul>
                </div>
              </div>

              {/* VERTICAL 5: Estate Planning & Family Law */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#FAFAF7] p-8 rounded-2xl border border-[#E7DED6] shadow-sm">
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="font-mono text-xs text-[#F05A28] font-bold uppercase mb-2">
                    05. ESTATE PLANNING &amp. FAMILY LAW PRACTICE
                  </div>
                  <h3 className="text-2xl font-bold text-[#14110F] font-heading mb-4">Asset Inventory Compilation &amp. Standardized Document Assembly.</h3>
                  <p className="text-[#46403B] leading-relaxed mb-4">
                    Estate planning attorneys lose hours to admin work. That means client asset questionnaires, beneficiary checks, and formatting trusts, wills, powers of attorney, and healthcare directives.
                  </p>
                  <p className="text-[#46403B] leading-relaxed mb-6">
                    Our estate planning AI agent runs a structured, conversational asset interview with each client. It organizes real estate deeds and brokerage accounts into clean estate schedules. Then it drafts a customized estate planning packet using your firm's own approved templates.
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#6E655F] list-none">
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Conversational Asset Intake.
                    </li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Trust Schedule Assembly.
                    </li>
                    <li className="px-2.5 py-1 rounded bg-white border border-[#F05A28]/20">
                      Smokeball &amp. Clio Document Sync.
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#E7DED6]">
                    <Image
                      src="/images/legal/law-firm-contract-review-ai.jpg"
                      alt="Estate planning attorney and client reviewing trust documentation in private conference room"
                      width={1344}
                      height={896}
                      className="absolute inset-0 h-full w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRACTICE MANAGEMENT & DOCUMENT SYSTEM COVERAGE */}
        <section className="py-20 bg-white border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // SYSTEM COVERAGE
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">Which Practice Management, Document, and Discovery Systems We Connect To.</h2>
              <p className="text-lg text-[#46403B]">
                Every firm runs a different back-office stack. You may use Clio, Filevine, MyCase, PracticePanther, or Smokeball for matters. You may run NetDocuments, iManage, or Relativity for files. We meet you where you are.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <h3 className="text-lg font-bold text-[#14110F] mb-4">Practice Management &amp. Intake CRM.</h3>
                <ul className="space-y-3 text-sm text-[#46403B] leading-relaxed list-none">
                  <li><span className="font-bold text-[#14110F]">Clio Manage</span>: matter records, contacts, and billing entries sync after every qualified intake call.</li>
                  <li><span className="font-bold text-[#14110F]">Clio Grow</span>: for firms running Grow ahead of Manage, new leads land straight in its intake pipeline.</li>
                  <li><span className="font-bold text-[#14110F]">Filevine</span>: two-way sync for personal injury and mass tort dockets, with firm-specific matter phase mapping.</li>
                  <li><span className="font-bold text-[#14110F]">MyCase</span>: contact creation, matter opening, and document attachment for small and mid-size firms.</li>
                  <li><span className="font-bold text-[#14110F]">PracticePanther</span>: task and deadline sync built for solo practitioners and boutique firms.</li>
                  <li><span className="font-bold text-[#14110F]">Smokeball</span>: document assembly and time-entry sync for flat-fee billing workflows.</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <h3 className="text-lg font-bold text-[#14110F] mb-4">Document Management &amp. E-Discovery.</h3>
                <ul className="space-y-3 text-sm text-[#46403B] leading-relaxed list-none">
                  <li><span className="font-bold text-[#14110F]">NetDocuments</span>: cloud document management with matter-level folders. Redlines and signed engagement letters file into the right workspace on their own.</li>
                  <li><span className="font-bold text-[#14110F]">iManage</span>: enterprise document and email management for larger firms and corporate legal departments running iManage Work.</li>
                  <li><span className="font-bold text-[#14110F]">Relativity</span>: e-discovery review platform. Privilege log fields map to Relativity&rsquo;s own coding layout. So review teams do not re-key anything.</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6]">
                <h3 className="text-lg font-bold text-[#14110F] mb-4">Billing, Ops &amp. E-Signature.</h3>
                <ul className="space-y-3 text-sm text-[#46403B] leading-relaxed list-none">
                  <li><span className="font-bold text-[#14110F]">Litify</span>: a Salesforce-native legal operations platform. The agent writes matter and billing updates through Litify&rsquo;s own API.</li>
                  <li><span className="font-bold text-[#14110F]">QuickBooks</span>: for trust accounting kept outside the practice management suite, approved billing narratives export on the same schedule as the main sync.</li>
                  <li><span className="font-bold text-[#14110F]">DocuSign</span>: signed engagement letters and retainer agreements route back into the matter file the moment a client signs.</li>
                </ul>
                <p className="mt-6 text-sm text-[#6E655F] leading-relaxed border-t border-[#E7DED6] pt-4">
                  Not on this list? We build a custom connector against your system&apos;s published API. If it has none, we work from its scheduled export and import files instead.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 10-POINT TECHNICAL ARCHITECTURE BLUEPRINT */}
        <section className="py-20 bg-[#FAFAF7] border-b border-[#E7DED6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-[#F05A28] font-bold uppercase tracking-wider mb-2">
                // SYSTEM ARCHITECTURE &amp. INTEGRATION
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">Enterprise Legal AI Engineering Blueprint.</h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                How we architect secure, deterministic, and privilege-compliant AI agents for American law firms.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none">
              {[
                {
                  title: 'Zero Data Retention & Privilege Enclaves.',
                  desc: 'Inference requests run on private instances. They use strict Zero Data Retention SLAs. Client records are never stored in public models. They are never used for training.',
                },
                {
                  title: 'Bi-Directional Practice Management Sync.',
                  desc: 'REST connectors sync contacts and matter records. They sync activity logs and billing codes. They connect with Clio, MyCase, and Filevine. They support Smokeball, PracticePanther, and NetDocuments. Nothing gets re-keyed by hand.',
                },
                {
                  title: 'Exact Page-and-Line Citation Tracking.',
                  desc: 'Every extracted fact gets pinned to source pages. Clause analyses include paragraph and line coordinates. Citations point back to original court filings or PDF exhibits.',
                },
                {
                  title: 'Playbook-Driven Contract Redlining Engine.',
                  desc: 'Your standard terms load into the pipeline. Fallback positions and risk tolerance scales load too. Unacceptable language triggers an automatic redline in Word (.docx) files.',
                },
                {
                  title: 'Automated Conflict Check & Party Extraction.',
                  desc: 'Named individuals and adverse companies get extracted from intake. Subsidiaries and insurers are extracted too. Each party runs an automated conflict scan against your firm database.',
                },
                {
                  title: 'Sub-500ms Voice Telephony Receptionist.',
                  desc: 'Inbound callers connect instantly to our voice agent. It collects incident facts. It qualifies the claim. It warm-transfers urgent callers to on-call counsel.',
                },
                {
                  title: 'Chronological Medical & Evidentiary Synthesis.',
                  desc: 'OCR pipelines parse thousands of medical record pages. They parse deposition transcripts and billing files. Output is a categorized treatment chronology. Total specials calculate automatically.',
                },
                {
                  title: 'Private Isolated Vector Knowledge Bases.',
                  desc: 'Your firm past motions get indexed in a secure vector store. Appellate briefs and settlement memos are indexed too. Your team draws on it for brief drafting.',
                },
                {
                  title: 'On-Premise & Sovereign Cloud Deployment.',
                  desc: 'High-security litigation practices can run open-source models. They can host on private GPU servers behind an office firewall. They can also use an AWS GovCloud enclave.',
                },
                {
                  title: '100% Source Code & Workflow Ownership.',
                  desc: 'Your law firm gets full Git repository access. You receive the Python backend code and Docker containers. You own the database schemas. There is no recurring per-user licensing fee.',
                },
              ].map((item, idx) => (
                <li
                  key={item.title}
                  className="p-6 rounded-2xl border border-[#E7DED6] bg-white hover:border-[#F05A28]/50 transition-colors shadow-sm"
                >
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">
                    LEGAL-ARCH-0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-2">{item.title}.</h3>
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
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">4-Phase Legal AI Agent Implementation Roadmap.</h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                From practice management schema audit to live production rollout in 4 to 6 weeks.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 list-none">
              <li className="p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 01 // WEEKS 1-2.</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">PMS Schema &amp. Privilege Audit.</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We map custom matter fields. We support Clio, Filevine, and MyCase. We support PracticePanther and Smokeball. We map document templates in NetDocuments and iManage.. We execute binding NDAs and set up a private, zero-data-retention environment.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: API connector schema &amp; security architecture documentation.
                </div>
              </li>

              <li className="p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 02 // WEEKS 2-3.</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">Parsing Pipeline &amp. Playbooks.</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We construct multi-modal parsing pipelines for legal contracts, pleadings, and transcripts. We encode your firm negotiation playbooks, clause preferences, and intake qualification logic into deterministic state machines.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: Custom legal extraction models &amp. citation verification engine
                </div>
              </li>

              <li className="p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 03 // WEEKS 3-4.</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">Approval Console &amp. PMS Staging.</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We deploy a side-by-side human review console. It runs on role-based access control (RBAC) with single sign-on (SSO). So a paralegal sees drafts awaiting review while only partners can export the privileged audit trail. Attorneys verify contract redlines, test conflict checking, and validate matter staging in your live sandbox.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: Lawyer review dashboard &amp. staging environment integration
                </div>
              </li>

              <li className="p-6 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">PHASE 04 // WEEKS 5-6.</div>
                  <h3 className="text-lg font-bold text-[#14110F] font-heading mb-3">Live Rollout &amp. Code Handover.</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed mb-4">
                    We route active client intake channels, telephony numbers, and document queues to the production agent pipeline. We train your attorneys and paralegals, hand over complete Git repository documentation, and complete the full IP handover.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#6E655F] pt-4 border-t border-[#E7DED6]">
                  Deliverable: Full source code, Docker configs &amp. operations manual
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
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-4">FactoryJet Custom Legal AI vs. Generic SaaS Tools.</h2>
              <p className="text-base sm:text-lg text-[#46403B]">
                Why forward-thinking law firms build owned AI infrastructure rather than paying per-seat software licensing taxes.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[#E7DED6] bg-white shadow-sm">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[#E7DED6] bg-[#FFF8F5]">
                    <th className="p-4 sm:p-6 font-bold text-[#14110F]">Capability / Feature.</th>
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
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Contract Redline Speed.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Under 60 Seconds
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">5 to 15 Minutes.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">3 to 6 Billable Hours.</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Practice Management Integration.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Native Clio, MyCase, Filevine Sync
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Isolated Browser Extension.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Manual Data Entry.</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Citation &amp. Hallucination Control.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Exact Page/Line Coordinates
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">General Document Level Only.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Human Verification.</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Software Cost Structure.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      100% Owned, $0 Per-Seat Fee
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">$200 - $600 / user / month.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">$150k - $225k associate salary.</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-semibold text-[#14110F]">Data Sovereignty &amp. Privacy.</td>
                    <td className="p-4 sm:p-6 font-bold text-[#F05A28] bg-[#FFF8F5]">
                      Private VPC or On-Premise Enclave
                    </td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Shared Multi-Tenant Cloud.</td>
                    <td className="p-4 sm:p-6 text-[#6E655F]">Internal Filesystem.</td>
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
                      alt="Bhavesh Barot, Founder &amp. CEO of FactoryJet"
                      width={682}
                      height={1024}
                      quality={95}
                      className="absolute inset-0 h-full w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  <div className="pt-4 text-center">
                    <div className="font-bold text-lg text-[#14110F]">Bhavesh Barot.</div>
                    <div className="font-mono text-xs text-[#F05A28] font-bold">
                      Founder &amp. CEO, FactoryJet
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
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14110F] font-heading mb-6">Direct Engineering Oversight with Founder Bhavesh Barot.</h2>
                <p className="text-base sm:text-lg text-[#46403B] leading-relaxed mb-6">
                  Legal workflows demand zero-fault execution, airtight ethics compliance, and absolute privilege safeguards. At FactoryJet, founder Bhavesh Barot leads every legal AI architecture and practice management scoping session personally. In that first session, we evaluate your practice management database, document storage, and intake bottlenecks.
                </p>
                <p className="text-base sm:text-lg text-[#46403B] leading-relaxed mb-8">
                  You collaborate directly with senior systems architects who have engineered mission-critical enterprise data pipelines for over a decade. We build reliable, auditable software that your law firm owns and operates permanently. The same privilege-first discipline carries over to our{' '}
                  <Link href="/services/healthcare-ai-agents" className="underline hover:text-[#F05A28]">
                    healthcare AI agents
                  </Link>
                  , another compliance-heavy vertical built under the same zero-retention rules.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-[#14110F] font-heading mb-8">Explore Our Granular Legal Automation Capabilities.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/services/law-firm-seo"
                className="p-6 rounded-xl bg-white border border-[#E7DED6] hover:border-[#F05A28] transition-colors group"
              >
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">SPOKE 01.</div>
                <h3 className="font-bold text-lg text-[#14110F] group-hover:text-[#F05A28] transition-colors mb-2">Law Firm SEO &amp. Client Acquisition &rarr;.</h3>
                <p className="text-sm text-[#46403B]">
                  High-intent local and regional legal search engine optimization to capture qualified claimants.
                </p>
              </Link>

              <Link
                href="/services/law-firm-website-design"
                className="p-6 rounded-xl bg-white border border-[#E7DED6] hover:border-[#F05A28] transition-colors group"
              >
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">SPOKE 02.</div>
                <h3 className="font-bold text-lg text-[#14110F] group-hover:text-[#F05A28] transition-colors mb-2">Law Firm Website Design &rarr;.</h3>
                <p className="text-sm text-[#46403B]">
                  Conversion-focused, high-authority web presence engineered for boutique practices and litigation firms.
                </p>
              </Link>

              <Link
                href="/services/ai-agent-development"
                className="p-6 rounded-xl bg-white border border-[#E7DED6] hover:border-[#F05A28] transition-colors group"
              >
                <div className="font-mono text-xs text-[#F05A28] font-bold mb-2">SPOKE 03.</div>
                <h3 className="font-bold text-lg text-[#14110F] group-hover:text-[#F05A28] transition-colors mb-2">Custom AI Agent Development Hub &rarr;.</h3>
                <p className="text-sm text-[#46403B]">
                  Enterprise-grade autonomous AI agents for operations, customer triage, and multi-system workflows.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* STRUCTURED FAQ SECTION */}
        <FAQ
          eyebrow="// LEGAL AI QUESTIONS &amp. ANSWERS"
          headline="Frequently Asked Questions on Legal AI Agents."
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
                // AUTOMATE INTAKE &bull. ZERO SEAT FEES &bull. 100% PRIVACY ENCLAVES
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14110F] font-heading mb-6">
              Ready to Upgrade Your Law Firm with Custom Legal AI?
            </h2>

            <p className="text-lg text-[#46403B] max-w-2xl mx-auto mb-10 leading-relaxed">
              Book a 30-minute architecture consultation with our founder. We evaluate your practice management setup and document workflows. Then we deliver a fixed-scope implementation proposal within 24 hours.
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

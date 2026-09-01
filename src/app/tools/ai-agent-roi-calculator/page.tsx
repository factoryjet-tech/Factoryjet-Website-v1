import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import AiAgentRoiCalculator from '@/components/ai-agent/AiAgentRoiCalculator';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const PAGE_MODIFIED = '2026-09-01';

export const metadata: Metadata = {
  title: 'AI Agent ROI Calculator & Cost Estimator | FactoryJet',
  description:
    'Calculate custom AI agent development ROI, ticket deflection, labor savings, and token compute payback periods for your US business. Try the calculator.',
  keywords: [
    'ai agent cost calculator',
    'cost to build ai agent',
    'ai automation roi',
    'ai agent development cost',
    'ai customer support roi calculator',
    'custom ai agent pricing',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Agent Cost & ROI Calculator 2026 | FactoryJet',
    description:
      'Model custom AI agent development payback, automated ticket deflection, and net labor cost reduction across Zendesk, HubSpot, NetSuite, and Shopify.',
    url: 'https://factoryjet.com/tools/ai-agent-roi-calculator',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet AI Agent Cost and ROI Calculator' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agent Cost & ROI Calculator 2026 | FactoryJet',
    description: 'Calculate custom AI agent development payback periods, labor savings, and monthly run costs with our interactive model.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/tools/ai-agent-roi-calculator' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* ─────────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'roi', label: 'ROI & Payback Formula' },
  { key: 'costs', label: 'Development & Compute Costs' },
  { key: 'accuracy', label: 'Accuracy & Deflection Rates' },
  { key: 'ownership', label: 'Code Ownership & Infrastructure' },
];

const FAQ_ITEMS = [
  {
    category: 'roi',
    question: 'How do you calculate the return on investment for an AI agent?',
    answer:
      'AI agent ROI is calculated by multiplying monthly task volume by average minutes saved per task and fully loaded human labor rates, subtracting recurring LLM token compute and server hosting costs, and dividing net annual savings by initial one-time milestone development fees.',
  },
  {
    category: 'roi',
    question: 'What is the typical payback period for custom AI agent development?',
    answer:
      'For mid-market US teams processing 2,000 or more monthly customer inquiries, sales leads, or back-office transactions, the payback period typically ranges between 2.5 and 5 months from production deployment.',
  },
  {
    category: 'roi',
    question: 'How do labor cost offsets scale as ticket volume grows?',
    answer:
      'Unlike human staffing, which requires linear headcount additions and benefits overhead as volume expands, an AI agent handles 5x to 10x spikes in transaction volume with nominal increases in token compute costs.',
  },
  {
    category: 'roi',
    question: 'What qualitative business benefits are excluded from this calculator?',
    answer:
      'This model deliberately excludes indirect revenue gains such as 24/7 sub-minute response times, reduced customer churn, higher conversion rates on instant lead follow-ups, and improved employee retention resulting from removing repetitive data entry.',
  },
  {
    category: 'costs',
    question: 'What are the recurring token compute costs for running an AI agent in production?',
    answer:
      'For standard customer support and lead qualification workflows using frontier models from Anthropic and OpenAI behind semantic caching, token costs typically average between $0.02 and $0.07 per resolved conversation thread.',
  },
  {
    category: 'costs',
    question: 'Why build a custom AI agent instead of subscribing to a per-seat SaaS bot?',
    answer:
      'Per-seat SaaS vendors charge $50 to $150 per agent per month plus per-resolution surcharges that escalate rapidly as volume grows. Custom builds require zero per-seat software licenses, connect directly to private databases, and remain 100 percent owned by your company.',
  },
  {
    category: 'costs',
    question: 'How does FactoryJet structure development fees for custom AI agents?',
    answer:
      'We scope projects under transparent, fixed milestone pricing based on system integration complexity, custom tool calling logic, and evaluation datasets, rather than unpredictable open-ended hourly billing.',
  },
  {
    category: 'costs',
    question: 'Are there ongoing maintenance and monitoring fees after deployment?',
    answer:
      'Following launch and initial warranty verification, we offer optional monthly engineering retainers for prompt tuning, model version upgrades, API connector maintenance, and new workflow expansion.',
  },
  {
    category: 'accuracy',
    question: 'What automated ticket deflection rate can we realistically expect?',
    answer:
      'Realistic production deflection rates range from 65 percent to 80 percent for structured customer support and RMA queues. Unrealistic claims of 99 percent automation often indicate lack of human escalation safety boundaries.',
  },
  {
    category: 'accuracy',
    question: 'How do you prevent costly hallucinations and incorrect tool calls?',
    answer:
      'We implement strict JSON schema validation, transaction caps, allow-listed database update scopes, and automated human-in-the-loop escalation triggers for low-confidence or ambiguous requests.',
  },
  {
    category: 'accuracy',
    question: 'How is agent accuracy measured before going live to real customers?',
    answer:
      'We run automated regression evaluation suites against 500 or more historical customer service tickets or transaction transcripts, verifying precision, recall, and tool calling correctness prior to deployment.',
  },
  {
    category: 'accuracy',
    question: 'Can the AI agent handle complex edge cases and angry customers?',
    answer:
      'Yes. Sentiment analysis and rule-based escalation triggers immediately route agitated customers or edge cases to senior human representatives in Zendesk, Slack, or Freshdesk with an AI-generated situation summary.',
  },
  {
    category: 'ownership',
    question: 'Who owns the code, prompts, and connectors built during the project?',
    answer:
      'Your organization owns 100 percent of the Git repository, custom Model Context Protocol connectors, orchestration code, prompt architectures, and evaluation suites with zero proprietary runtime lock-in.',
  },
  {
    category: 'ownership',
    question: 'Where is the AI agent hosted and how is customer data protected?',
    answer:
      'Agents deploy inside your own AWS, Google Cloud, or Microsoft Azure private cloud infrastructure using zero-data-retention enterprise API endpoints, ensuring proprietary data never trains external public models.',
  },
  {
    category: 'ownership',
    question: 'Which enterprise systems can the AI agent connect to?',
    answer:
      'We build bi-directional connectors for Zendesk, Gorgias, Intercom, Freshdesk, HubSpot, Salesforce, NetSuite, Dynamics 365, Shopify Plus, and custom SQL databases.',
  },
  {
    category: 'ownership',
    question: 'How do we schedule an AI agent architectural review and custom ROI audit?',
    answer:
      'You can schedule a direct 30-minute scoping session with founder Bhavesh Barot. We will analyze your monthly ticket volume, current help desk software, and deliver a custom ROI and feasibility roadmap.',
  },
];

/* ─────────────────────────────────────────────
   SCHEMAS
───────────────────────────────────────────── */
const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const WEBAPP_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'AI Agent Cost & ROI Calculator',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description:
    'Interactive calculator modeling custom AI agent development costs, labor savings, monthly token compute, ticket deflection rates, and net payback periods for US businesses.',
  dateModified: `${PAGE_MODIFIED}T00:00:00Z`,
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
    jobTitle: 'Founder, FactoryJet',
  },
};

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://factoryjet.com/#organization',
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  sameAs: ['https://www.linkedin.com/company/factoryjet'],
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://factoryjet.com/services' },
    { '@type': 'ListItem', position: 3, name: 'AI Agent ROI Calculator', item: 'https://factoryjet.com/tools/ai-agent-roi-calculator' },
  ],
};

export default function AiAgentRoiCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBAPP_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader locale="us" />

      <main className="pp-page">
        {/* HERO SECTION */}
        <section className="pp-hero">
          <div className="pp-hero-grid">
            <div>
              <p className="pp-eyebrow">// FINANCIAL MODELING &amp; ROI BENCHMARKS</p>
              <h1 className="pp-h1">
                AI Agent <span className="pp-grad">Cost &amp; ROI</span> Calculator
              </h1>
              <HeroInlineForm
                source="tools_ai_agent_roi_calculator"
                region="us"
                submitLabel="Request Custom ROI Audit"
              />
            </div>

            <div className="pp-hero-card">
              <div className="flex items-center justify-between border-b border-[#E7DED6] pb-3 mb-4">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F05A28]">
                  Live Calculation Model
                </span>
                <span className="text-xs text-[#8C827A]">US Operations Benchmark</span>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-1 border-b border-[#F5EFEA]">
                  <span className="text-[#46403B]">Base Monthly Offset:</span>
                  <span className="font-semibold text-[#14110F]">Tiered Labor Deflection</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F5EFEA]">
                  <span className="text-[#46403B]">Direct LLM Token API:</span>
                  <span className="font-semibold text-[#14110F]">At-Cost Zero Markup</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F5EFEA]">
                  <span className="text-[#46403B]">Typical Payback Window:</span>
                  <span className="font-semibold text-[#14110F]">3 to 6 Months</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#46403B]">Code Ownership:</span>
                  <span className="font-semibold text-[#F05A28]">100% Client Owned</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ANSWER-FIRST DEFINITION SECTION */}
        <section className="pp-section pp-tint">
          <div className="pp-container">
            <div className="pp-card p-6 md:p-8 bg-white border-l-4 border-[#F05A28]">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F05A28] block mb-2">
                Executive Definition &amp; ROI Benchmark
              </span>
              <p className="text-base md:text-lg text-[#14110F] leading-relaxed font-medium">
                AI agent return on investment measures net operating cost reductions and revenue acceleration generated by autonomous agent workflows relative to custom engineering and token compute costs. For mid-market US brands, production customer support and sales agents typically achieve full capital payback within 90 to 180 days by automating 60% to 80% of routine workflows.
              </p>
            </div>
          </div>
        </section>

        {/* VERIFIED MARKET METRICS */}
        <section className="pp-section">
          <div className="pp-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="pp-h2 text-center">Industry Financial Benchmarks</h2>
              <p className="text-base text-[#46403B] mt-3">
                Third-party research on autonomous agent unit economics, deflection ratios, and labor productivity gains.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="pp-card p-6 bg-white">
                <span className="text-3xl font-extrabold text-[#F05A28] font-mono block mb-2">60-80%</span>
                <h3 className="text-base font-bold text-[#14110F] mb-2">Ticket Resolution Autonomy</h3>
                <p className="text-sm text-[#46403B] mb-4">
                  Autonomous agents resolve Tier-1 customer support requests without human agent intervention across retail and B2B sectors.
                </p>
                <a
                  href="https://www.gartner.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#F05A28] font-mono hover:underline"
                >
                  Source: Gartner Customer Service Research &rarr;
                </a>
              </div>

              <div className="pp-card p-6 bg-white">
                <span className="text-3xl font-extrabold text-[#F05A28] font-mono block mb-2">21x</span>
                <h3 className="text-base font-bold text-[#14110F] mb-2">Lead Qualification Speed</h3>
                <p className="text-sm text-[#46403B] mb-4">
                  Responding to inbound sales inquiries within 5 minutes increases qualified lead conversion rates by 21x compared to 30-minute response delays.
                </p>
                <a
                  href="https://hbr.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#F05A28] font-mono hover:underline"
                >
                  Source: Harvard Business Review &rarr;
                </a>
              </div>

              <div className="pp-card p-6 bg-white">
                <span className="text-3xl font-extrabold text-[#F05A28] font-mono block mb-2">72%</span>
                <h3 className="text-base font-bold text-[#14110F] mb-2">Lower Cost per Interaction</h3>
                <p className="text-sm text-[#46403B] mb-4">
                  AI-first customer contact routing reduces cost per resolution from $6.50 (live human rep) to under $0.45 per automated session.
                </p>
                <a
                  href="https://www.mckinsey.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#F05A28] font-mono hover:underline"
                >
                  Source: McKinsey &amp; Company GenAI Report &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* INTERACTIVE CALCULATOR SECTION */}
        <section className="pp-section pp-tint">
          <div className="pp-container">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="pp-h2 text-center">Interactive AI Agent ROI Model</h2>
              <p className="text-base text-[#46403B] mt-3">
                Adjust support ticket volume, team size, and integration tiers to calculate estimated net annual savings and payback timelines.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <AiAgentRoiCalculator />
            </div>
          </div>
        </section>

        {/* COMPARISON MATRIX SECTION */}
        <section className="pp-section">
          <div className="pp-container">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="pp-h2 text-center">Custom AI Agent vs. Generic SaaS Bots</h2>
              <p className="text-base text-[#46403B] mt-3">
                Why bespoke multi-agent state machines outperform off-the-shelf chatbot wrappers.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Capability</th>
                    <th>FactoryJet Custom AI Agent</th>
                    <th>Generic SaaS Support Bot</th>
                    <th>Offshore Support Outsourcing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tr-me">
                    <td className="font-bold">Code &amp; IP Ownership</td>
                    <td className="font-semibold text-[#F05A28]">100% Client Owned (Your Cloud)</td>
                    <td>Proprietary Vendor Lock-in</td>
                    <td>Zero Assets Built</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Direct API Tool Execution</td>
                    <td className="font-semibold text-[#14110F]">Shopify, NetSuite, SAP, Gorgias</td>
                    <td>Read-only basic FAQ search</td>
                    <td>Manual agent entry</td>
                  </tr>
                  <tr className="tr-me">
                    <td className="font-bold">Token Billing Model</td>
                    <td className="font-semibold text-[#F05A28]">Direct LLM pass-through at cost</td>
                    <td>$0.99 per resolution markup</td>
                    <td>$18-$35 / hour per head</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Data Privacy &amp; VPC</td>
                    <td className="font-semibold text-[#14110F]">Zero Data Retention, Private VPC</td>
                    <td>Shared cloud multi-tenant</td>
                    <td>Variable contractor NDAs</td>
                  </tr>
                  <tr className="tr-me">
                    <td className="font-bold">Autonomous Resolution Rate</td>
                    <td className="font-semibold text-[#F05A28]">65% - 85% Verified</td>
                    <td>15% - 30% Deflection</td>
                    <td>100% Manual Human</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQS SECTION */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Questions operations leaders ask before building agents"
          lead="Everything operations leaders need to know about AI agent pricing, financial modeling, and development timelines."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* FINAL CTA */}
        <section className="pp-section">
          <div className="pp-container">
            <div className="pp-card p-8 md:p-12 bg-[#FFF8F5] border border-[#F05A28]/20 text-center max-w-4xl mx-auto">
              <p className="pp-eyebrow">// READY TO MODEL YOUR WORKFLOW?</p>
              <h2 className="text-2xl md:text-4xl font-extrabold text-[#14110F] mb-4">
                Schedule a 30-Minute Custom ROI &amp; Feasibility Review
              </h2>
              <p className="text-base text-[#46403B] max-w-2xl mx-auto mb-8">
                Speak directly with founder Bhavesh Barot. We will review your current ticketing volume, help desk software, and provide a fixed-price integration roadmap with projected payback milestones.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#F05A28] text-white font-semibold text-sm hover:bg-[#D8441A] transition-colors shadow-sm"
                >
                  Book Strategy Call via Calendly &rarr;
                </a>
                <ModalCTAButton
                  label="Request Written Proposal"
                  region="us"
                  btnVariant="secondary-light"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}

import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import JsonLd from '@/components/JsonLd';
import FAQ, { type FAQCategory, type FAQItem } from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const PAGE_MODIFIED = '2026-09-17';
const CANONICAL_URL = 'https://factoryjet.com/services/ai-agent-monitoring';
const PAGE_TITLE = 'AI Agent Monitoring, Support & Maintenance | FactoryJet';
const PAGE_DESCRIPTION =
  'AI agent monitoring and support after launch: traces, evaluations, drift checks, model upgrades and fixes. What it includes and what drives monthly cost.';

interface SupportPlan {
  name: string;
  hours: string;
  criticalResponse: string;
  standardResponse: string;
  coverage: string;
  includes: string[];
}

// Plan terms: single source of truth. Edit values here only; the plan cards, FAQs and schema read from this constant.
const SUPPORT_PLANS = [
  {
    name: 'Monitor',
    hours: '8 engineering hours a month',
    criticalResponse: 'within 4 hours, 7 days a week',
    standardResponse: 'within 1 business day',
    coverage: "Weekly conversation log review and a monthly evaluation run against the agent's test set.",
    includes: [
      'Dashboards and alerts for latency, errors, cost and escalations',
      'Model retirement and API version tracking',
      'Small fixes and prompt changes within the included hours',
      'Monthly report',
    ],
  },
  {
    name: 'Improve',
    hours: '20 engineering hours a month',
    criticalResponse: 'within 2 hours, 7 days a week',
    standardResponse: 'within 8 business hours',
    coverage: 'Log review twice a week and an evaluation run before every prompt or model change.',
    includes: [
      'Everything in Monitor',
      'New failure cases added to the test set',
      'Prompt, retrieval and knowledge base tuning',
      'Integration fixes when a vendor changes its API',
    ],
  },
  {
    name: 'Operate',
    hours: '40 or more engineering hours a month',
    criticalResponse: 'within 1 hour, 24/7',
    standardResponse: 'within 4 business hours',
    coverage: 'Daily monitoring and alert triage, plus model upgrade and deprecation planning.',
    includes: [
      'Everything in Improve',
      'Security and access reviews',
      'Model upgrades tested side by side before the switch',
      'Incident reviews and rollback drills',
    ],
  },
] satisfies SupportPlan[];

const BUSINESS_HOURS_NOTE = 'Business hours are 9am to 6pm, Monday to Friday, in your US time zone.';

/** Joins one field across SUPPORT_PLANS as "PlanName value; PlanName value", so FAQ copy never retypes a plan term. */
function planPhrases(pick: (plan: SupportPlan) => string): string {
  return SUPPORT_PLANS.map((plan) => `${plan.name} ${pick(plan)}`).join('; ');
}

/* Primary sources shown as links in the copy. Each was fetched and checked on 2026-09-17. */
const SRC_OPENAI_DEPRECATIONS = 'https://developers.openai.com/api/docs/deprecations';
const SRC_ANTHROPIC_DEPRECATIONS = 'https://platform.claude.com/docs/en/about-claude/model-deprecations';
const SRC_DRIFT_STUDY = 'https://arxiv.org/abs/2307.09009';
const SRC_OWASP_LLM01 = 'https://genai.owasp.org/llmrisk/llm01-prompt-injection/';
const SRC_DATADOG_PRICING = 'https://www.datadoghq.com/pricing/?product=llm-observability';

const LINK_CLASS = 'underline underline-offset-2 text-[#B23E13] hover:text-[#14110F]';

function SourceLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
      {children}
    </a>
  );
}

/** Single source of truth for the breadcrumb trail: feeds the visible trail and the BreadcrumbList JSON-LD. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'AI Agent Monitoring and Support', url: CANONICAL_URL },
];

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    'ai agent monitoring',
    'ai agent observability',
    'ai agent maintenance',
    'ai agent support',
    'llm observability',
    'llm monitoring',
    'ai model drift',
    'ai agent evaluation',
    'ai agent monitoring tools',
    'managed ai agents',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: CANONICAL_URL,
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet AI agent monitoring, support and maintenance',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ai-agent-monitoring',
    languages: {
      'en-US': 'https://factoryjet.com/services/ai-agent-monitoring',
      'x-default': 'https://factoryjet.com/services/ai-agent-monitoring',
    },
  },
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

/* Page content */

const WATCHLIST = [
  { label: 'Traces', detail: 'Every step, tool call and handoff' },
  { label: 'Wait time and errors', detail: 'Per step, not just per request' },
  { label: 'Cost', detail: 'Per conversation or task' },
  { label: 'Escalations', detail: 'How often a person takes over' },
  { label: 'Quality', detail: 'Test set scores vs. last release' },
  { label: 'Vendor changes', detail: 'Model retirements and API versions' },
];

const STATS = [
  { b: '6 months', s: "OpenAI's stated minimum notice before retiring a generally available model" },
  { b: '60 days', s: "Anthropic's stated minimum notice before retiring a publicly released model" },
  { b: '84% to 51%', s: "GPT-4's accuracy on the same prime-number questions, March vs. June 2023" },
  { b: 'Aug 26, 2026', s: 'The day OpenAI shut down its Assistants API, a year after announcing it' },
];

const SUPPORT_JOBS: { title: string; body: ReactNode }[] = [
  {
    title: 'Monitoring',
    body: 'We trace every run: the prompt, each tool call, what came back and what the agent did next. We track latency (wait time), errors, cost per conversation or task and handoffs to people, with alerts when a number leaves its normal range.',
  },
  {
    title: 'Evaluations',
    body: 'Your agent gets a test set: real past conversations with the correct outcome written down. We rerun it to compare each new prompt or model version with the live one. A judge model (a second AI model that grades answers) scores them at scale, and a person spot-checks a sample, because judge models have biases, such as favoring longer answers.',
  },
  {
    title: 'Drift detection',
    body: 'Agents can get worse without anyone editing them. Customers ask new things, documents change and models shift. We compare topics, search results and test scores with last month, so a slow slide shows up in a report before it shows up in complaints.',
  },
  {
    title: 'Prompt and model updates',
    body: 'Providers retire models on a published schedule, and requests to a retired model fail. We track every model ID (the exact model version name) your agent calls and its retirement date, test the replacement on your test set, adjust prompts and switch before the deadline.',
  },
  {
    title: 'Integration upkeep',
    body: 'Help desks, CRMs, ERPs and ecommerce platforms change their APIs. Shopify, for example, releases a new API version every quarter and supports each for at least 12 months. We pin versions, read changelogs and update connectors before old versions stop working.',
  },
  {
    title: 'Knowledge base freshness',
    body: 'A retrieval agent (RAG, short for retrieval-augmented generation) looks up your documents before it answers, so a stale policy becomes a wrong answer. We confirm syncs ran, re-index edited pages, remove retired ones and retest the questions tied to what changed.',
  },
  {
    title: 'Security and access reviews',
    body: (
      <>
        Prompt injection, where text in a message, web page or file tries to give the agent new instructions, is first on the{' '}
        <SourceLink href={SRC_OWASP_LLM01}>OWASP Top 10 for LLM applications</SourceLink>. We test for it, keep every API key to the least access the agent needs, and check how long each system keeps conversation data.
      </>
    ),
  },
  {
    title: 'Incident response',
    body: 'When something breaks, we set a severity, pause risky actions or route conversations to your team, and roll back to the last version that passed the test set. Then we fix the cause and give your team the facts it needs to update customers.',
  },
  {
    title: 'Monthly report',
    body: 'One short report a month: what changed, what broke, what we fixed, cost per conversation, escalation rate, test scores, upcoming model retirements and hours used. It is written for the person who owns the agent, not only for engineers.',
  },
];

const METRIC_ROWS = [
  {
    metric: 'Task completion',
    tells: 'How often a conversation ends with the job done, such as an order found or a meeting booked',
    moves: 'Failing tool calls, changed API responses, a prompt edit that breaks the flow',
  },
  {
    metric: 'Escalation and handoff rate',
    tells: 'How often the agent passes the conversation to a person',
    moves: 'New question types, a policy the agent was never taught, an integration outage',
  },
  {
    metric: 'Latency per step',
    tells: 'Where the waiting happens: the model, the document search or a slow API',
    moves: 'Longer prompts, more retrieved text, a slow vendor API, a model change',
  },
  {
    metric: 'Error rate',
    tells: 'Failed model calls, timeouts and rejected API requests',
    moves: 'Usage caps, expired keys, API version changes, provider outages',
  },
  {
    metric: 'Cost per conversation or task',
    tells: 'What each finished job costs in model tokens (the chunks of text a model reads and writes) and tool calls',
    moves: 'Longer context, extra reasoning steps, retries, a more expensive model',
  },
  {
    metric: 'Test set score',
    tells: 'How the live version scores on your test set compared with the last release',
    moves: 'Prompt edits, model upgrades, knowledge base changes, drift',
  },
];

const DRIFT_SOURCES = [
  {
    title: 'Your customers change',
    body: 'A new product or promotion brings questions the agent was never tested on. This is data drift: the inputs moved, while the right answers did not.',
    detect: 'Group questions by topic each week, flag new or growing topics and add real examples to the test set.',
  },
  {
    title: 'Your rules and documents change',
    body: 'Return windows, prices and help articles get edited, so the same question now has a different right answer. This is concept drift.',
    detect: 'Check that syncs ran, watch for searches that find nothing relevant and rerun the tests tied to changed documents.',
  },
  {
    title: 'The model changes',
    body: 'A provider ships a new version or retires an old one. Even a pinned version can behave slightly differently when the provider updates the systems that serve it.',
    detect: 'Pin exact model versions and rerun the full test set on a schedule and before any upgrade.',
  },
];

const VENDOR_CHANGES = [
  'OpenAI shut down the Assistants API on August 26, 2026, a year after announcing it. Agents built on it had to move to the Responses and Conversations APIs.',
  'OpenAI removes older dated versions (snapshots) of GPT-5 and o3, including gpt-5-2025-08-07 and o3-2025-04-16, from its API on December 11, 2026.',
  "OpenAI's Evals platform goes read-only on October 31, 2026 and shuts down on November 30, 2026. Test suites stored there need a new home.",
  'Anthropic retired Claude Sonnet 4 and Claude Opus 4 on June 15, 2026, and Claude Opus 4.1 on August 5, 2026. Requests to retired models fail.',
  'On Claude Opus 4.7 and later models, a non-default temperature, top_p or top_k value returns a 400 error (the request is rejected), so settings copied from an older agent can break an upgrade.',
];

const SEVERITY_ROWS = [
  {
    level: 'Critical',
    examples:
      'The agent is down, an integration is failing (say, the help desk rejects every reply), or answers are wrong or unsafe at scale, such as an outdated policy sent to every customer.',
    first:
      'Pause autonomous actions or route conversations to your team, roll back to the last good version, then find the cause.',
  },
  {
    level: 'Standard',
    examples: 'One question type handled badly, latency or cost per conversation climbing, or a new help article missing from search.',
    first: 'Reproduce it, add it to the test set, fix it and ship once the test set passes.',
  },
  {
    level: 'Planned change',
    examples: 'New policy wording, a new question type, a tone change or a new report field.',
    first: "Scheduled into the month's hours and tested before release.",
  },
];

const FIRST_30_DAYS = [
  'Days 1 to 3, access and inventory: code, prompts, model IDs, logs and connected systems, with every API version written down.',
  'Days 3 to 7, baseline: turn on tracing if it is missing and record latency, error rate, cost per conversation and escalation rate.',
  'Days 5 to 12, test set: real conversations, failures included, each with its correct outcome, starting with anything that touches money or personal data.',
  'Days 10 to 14, first evaluation: score the live version and agree on pass thresholds with your team.',
  'Days 12 to 18, alerts: set alerts on the baseline and agree who gets called for a critical issue.',
  'Days 15 to 21, risk review: model retirement dates, API versions, key permissions, data retention and prompt injection tests.',
  'Days 21 to 28, rollback drill: version every prompt and setting, then practice rolling back.',
  'Day 30, first monthly report: baseline, findings, fixes and upcoming vendor deadlines.',
];

const NORMAL_WEEK = [
  'Sort alerts, and anything flagged since the last review, by urgency.',
  "Read a sample of real conversations at your plan's cadence, starting with escalations and low scores.",
  'Turn each new failure into a test case.',
  'Fix, test the change, ship only if scores hold, then watch the live numbers.',
  'Check changelogs and deprecation pages for your model, help desk, CRM, ERP and store APIs.',
  'Confirm knowledge base syncs ran and spot-check answers tied to changed documents.',
  'Log hours and changes for the monthly report.',
];

const COST_DRIVERS: { driver: string; why: ReactNode; lower: string }[] = [
  {
    driver: 'Model usage (tokens)',
    why: 'OpenAI and Anthropic bill per million tokens and price input and output separately: output costs more, cached input costs less. Long prompts, big retrieved documents and multi-step tool loops add tokens to every conversation.',
    lower: 'Cache repeated instructions, trim retrieved text and test a smaller model for simple steps.',
  },
  {
    driver: 'Conversation or task volume',
    why: 'Model spend and the volume of logs to store and review both rise with every conversation.',
    lower: 'Review a sample (escalations, low scores, new topics) rather than every log, and fix the help content behind repeat questions.',
  },
  {
    driver: 'Connected systems',
    why: 'Each help desk, CRM, ERP or store connection has its own API versions, credentials and failure modes.',
    lower: 'Connect only what the agent needs, pin API versions and grant the narrowest permissions.',
  },
  {
    driver: 'Evaluation cadence',
    why: 'Each run replays your test set through the model, and judge-model scoring adds calls. Testing before every change costs more than monthly testing and catches more.',
    lower: 'Run a quick check on a handful of key questions for every change, and the full test set before model upgrades.',
  },
  {
    driver: 'Observability tooling',
    why: (
      <>
        Tools charge by traces, spans, data or seats. Datadog, for example, prices LLM Observability by LLM spans (model calls): free up to 40K spans a month, and Pro from $160 a month with 100K spans included plus $3.50 per extra 10K, on annual pricing (
        <SourceLink href={SRC_DATADOG_PRICING}>Datadog pricing</SourceLink>, checked September 17, 2026).
      </>
    ),
    lower: 'Keep only the retention you need. Running an open source tool such as Langfuse on your own servers trades a subscription for server costs and upkeep.',
  },
  {
    driver: 'Compliance needs',
    why: 'If the agent handles patient data for a healthcare provider or health plan, HIPAA (the US health privacy law) applies: every vendor that receives, stores or transmits those conversations, support team and monitoring tool included, needs a business associate agreement, a contract that commits it to protect that data.',
    lower: 'Keep sensitive fields out of traces from day one and pick vendors that sign the agreements you need.',
  },
  {
    driver: 'Required response times',
    why: 'Faster first responses and round-the-clock coverage need engineers on call. It is the biggest difference between support plans.',
    lower: 'Match coverage to risk: an internal agent drafting replies for staff may not need it, while a customer-facing agent issuing refunds might.',
  },
];

const TOOL_ROWS = [
  {
    tool: 'LangSmith (LangChain)',
    does: 'Tracing, dashboards and alerts, automatic scoring of live traffic, datasets and queues where people label answers. Works with OpenAI, Anthropic, CrewAI, Vercel AI SDK and more.',
    hosting: 'Hosted by LangChain. Hybrid and self-hosted options are on the Enterprise plan.',
    fit: 'Teams building with LangChain or LangGraph',
    watch: 'Each plan has hourly limits on trace events and ingested data, so check them for high-volume agents.',
  },
  {
    tool: 'Langfuse',
    does: 'Tracing, prompt management, datasets, user feedback, manual labeling and LLM-as-a-judge evaluations.',
    hosting: 'Open source under the MIT license, with enterprise features licensed separately. Run it on your own servers or use Langfuse Cloud.',
    fit: 'Teams that want trace data on their own servers',
    watch: 'Self-hosting means you run, back up and upgrade it.',
  },
  {
    tool: 'Arize Phoenix',
    does: 'Tracing built on OpenTelemetry (an open standard for collecting traces), LLM-based evaluations for answers and retrieval, datasets and experiments.',
    hosting: "Source code is public under the Elastic License 2.0 and you host it. Arize AX is Arize's managed platform.",
    fit: 'Teams standardizing on OpenTelemetry',
    watch: 'The license does not allow offering Phoenix to others as a hosted service.',
  },
  {
    tool: 'Braintrust',
    does: 'Tracing and logs, dashboards and alerts, scorers (automated graders), playgrounds for testing prompts, experiments, scoring of live traffic and human review.',
    hosting: 'Hosted platform. Enterprise plans add deployment on your own servers (on-prem) or hosted.',
    fit: 'Teams that run evaluations on every release',
    watch: 'Check the data retention limit on your plan against how far back you need to look.',
  },
  {
    tool: 'Datadog LLM Observability',
    does: 'Traces LLM calls, workflows and agent runs; dashboards for cost, latency and tokens; evaluations; sensitive data scanning and prompt injection detection.',
    hosting: 'Hosted, part of Datadog. Its docs now call it Agent Observability.',
    fit: 'Teams already using Datadog',
    watch: "Not available on Datadog's US government sites.",
  },
];

const OPTION_ROWS = [
  {
    q: 'Who watches it day to day',
    inHouse: 'Your engineers',
    retainer: 'The developer, usually after something is reported',
    partner: 'The partner, on a set schedule',
    toolOnly: 'Whoever checks the dashboard',
  },
  {
    q: 'Who fixes problems',
    inHouse: 'Your engineers',
    retainer: 'The developer, within retainer hours',
    partner: 'The partner, within plan hours',
    toolOnly: 'Your team',
  },
  {
    q: 'Tests before every change',
    inHouse: 'If your team builds the habit',
    retainer: 'Depends on the contract',
    partner: 'Test cadence set by the plan',
    toolOnly: 'Runs the tests you write',
  },
  {
    q: 'Model retirement planning',
    inHouse: 'Your team tracks vendor notices',
    retainer: 'Depends on the contract',
    partner: 'Tracked for every model ID',
    toolOnly: 'Not included',
  },
  {
    q: 'After-hours coverage',
    inHouse: 'Needs someone on call after hours',
    retainer: 'Rare unless contracted',
    partner: 'Set by the plan',
    toolOnly: 'Alerts only',
  },
  {
    q: 'Best fit',
    inHouse: 'Companies with engineers who own the agent',
    retainer: 'Simple agents that rarely change',
    partner: 'Teams with no engineer assigned to the agent after launch',
    toolOnly: 'Teams with engineers and time to act on alerts',
  },
  {
    q: 'Main risk',
    inHouse: 'Agent upkeep loses to roadmap work',
    retainer: 'Slow replies while the developer builds something else',
    partner: 'Onboarding time and reliance on an outside team',
    toolOnly: 'Problems are visible but nobody is assigned to fix them',
  },
];

/* FAQ data: one array feeds both the visible FAQ and the FAQPage JSON-LD */

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'monitoring', label: 'Monitoring and observability' },
  { key: 'tools', label: 'Monitoring tools' },
  { key: 'drift', label: 'Drift and quality' },
  { key: 'cost', label: 'Cost' },
  { key: 'plans', label: 'Support plans' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  {
    category: 'monitoring',
    question: 'How do you monitor AI agents?',
    answer:
      'Trace every run: the prompt, each tool call, what came back and the final answer. Then track task completion, escalation rate, latency per step, error rate, cost per conversation and test set score over time. Alert when a number leaves its normal range, and read real conversations regularly, because some failures never show up in a metric.',
  },
  {
    category: 'monitoring',
    question: 'Can AI agents be monitored?',
    answer:
      'Yes. You cannot see inside the model, but you can record everything around it: the input, the documents it looked up, each tool call and its result, the output, how long each step took and the tokens used. That record, called a trace, is enough to find most failures. Evaluations and human review then show whether the answers were right.',
  },
  {
    category: 'monitoring',
    question: 'What is observability for LLMs and AI agents?',
    answer:
      'Observability means you can work out why an agent did something, not just that it did it. It combines traces of each step, prompts, retrieved text, tool calls, tokens, latency, errors and quality scores. Monitoring tells you a number changed. Observability gives you the detail to find the cause, such as a tool that returned nothing.',
  },
  {
    category: 'monitoring',
    question: 'What are the five pillars of LLM observability?',
    answer:
      'There is no official standard, and vendors list different pillars. A practical five: traces of every step and tool call; quality, measured with evaluations and human review; cost per conversation or task; performance, meaning latency and errors; and safety, covering prompt injection and sensitive data in logs. Together they explain most production problems.',
  },
  {
    category: 'monitoring',
    question: 'What should an AI agent trace include?',
    answer:
      "The user's input, the prompt version, the model ID, retrieved documents, each tool call with its arguments and response, the final output, token counts, latency per step and any errors, plus the conversation ID and the outcome, such as resolved or handed off. Without the prompt version and model ID, you cannot tell whether a change caused a problem.",
  },
  {
    category: 'tools',
    question: 'Which LLM observability tool is the best?',
    answer:
      'It depends on your stack. LangSmith suits teams on LangChain or LangGraph, Langfuse suits teams that want open source and self-hosting, Arize Phoenix suits teams standardizing on OpenTelemetry, Braintrust suits teams that evaluate every release, and Datadog suits teams already on Datadog. The tool matters less than whether someone reads its alerts and acts on them.',
  },
  {
    category: 'tools',
    question: 'Does Datadog have LLM observability?',
    answer:
      "Yes. Datadog LLM Observability, which its docs now call Agent Observability, traces LLM calls, workflows and agent runs. It has dashboards for cost, latency and token usage, quality evaluations, and scanning for sensitive data and prompt injection, and it links agent traces to the rest of your Datadog data. It is not available on Datadog's US government sites.",
  },
  {
    category: 'tools',
    question: 'Are there open source tools for AI agent observability?',
    answer:
      'Yes. Langfuse is open source under the MIT license, with enterprise features licensed separately, and runs self-hosted or in its cloud. Arize Phoenix publishes its source code under the Elastic License 2.0 and you host it yourself. Open source removes the subscription, not the work: you still run the servers, handle upgrades and decide who reads the traces.',
  },
  {
    category: 'tools',
    question: 'What is Langfuse used for?',
    answer:
      'Langfuse is used to trace, evaluate and debug LLM applications and agents. Teams use it to see each step of a run, version prompts, collect user feedback, label outputs by hand and score answers with LLM-as-a-judge evaluators, where an AI model grades answers against datasets. Because it is open source and can be self-hosted, it suits teams whose logs contain customer data.',
  },
  {
    category: 'tools',
    question: 'Do we still need a support team if we already use an observability tool?',
    answer:
      'Not always. A tool shows the problem: a failed tool call, a cost spike, a falling score. It does not edit the prompt, fix the connector, rerun the tests or plan a model migration. If engineers who know the agent have time to act on alerts, a tool may be enough. If nobody owns the agent, the alerts pile up unread.',
  },
  {
    category: 'drift',
    question: 'What is AI model drift?',
    answer:
      'Model drift is when an AI system gets worse over time although nobody changed its code. For agents it has three common causes: customers ask different things, the rules and documents behind correct answers change, or the model behaves differently after a provider update. It is usually gradual, so it needs scheduled checks rather than waiting for complaints.',
  },
  {
    category: 'drift',
    question: 'Can you give me an example of AI drift?',
    answer:
      'Researchers Lingjiao Chen, Matei Zaharia and James Zou tested GPT-4 in March and June 2023 on the same prime-number questions, and its accuracy fell from 84% to 51%. A business example is quieter: a support agent keeps quoting the old return window after a policy change because the knowledge base sync failed. Nothing errors. Customers just get wrong answers.',
  },
  {
    category: 'drift',
    question: 'What is concept drift in an LLM application?',
    answer:
      "Concept drift is when the right answer to the same question changes. A customer asks a familiar question, but your return policy, prices or eligibility rules changed, so last month's correct answer is now wrong. The model did not change at all. The fix is keeping the knowledge base and business rules current, then retesting the affected questions.",
  },
  {
    category: 'drift',
    question: 'What is the difference between model drift and concept drift?',
    answer:
      "Model drift is the broad term for results sliding over time. Concept drift is one cause of it: the link between a question and its correct answer changes, such as after a policy update. For LLM agents, name a second cause separately: the model's own behavior changing when a provider ships an update or you switch versions.",
  },
  {
    category: 'drift',
    question: 'What is the difference between model drift and data drift?',
    answer:
      'Data drift means the inputs changed: customers ask about a new product or use new terms, while the correct answers stay the same. The agent now sees questions it was never tested on. Model drift is the drop in quality that can follow. Catch data drift by grouping incoming questions by topic and flagging new or growing ones.',
  },
  {
    category: 'drift',
    question: 'How do you detect drift in an AI agent?',
    answer:
      'Compare against a baseline on a schedule. Rerun the same test set and compare scores with the last release. Group incoming questions by topic and watch for new ones. Track how often document search finds nothing relevant, along with escalation rate and user feedback. When one of these moves, read the conversations behind it before changing anything.',
  },
  {
    category: 'drift',
    question: 'How do you prevent AI model drift?',
    answer:
      'You cannot prevent all of it, but you can catch it early. Pin exact model versions instead of aliases that update. Test the replacement before a model retires. Keep the knowledge base synced and retest answers tied to changed documents. Add every real failure to the test set, and rerun it before each change and on a regular schedule.',
  },
  {
    category: 'drift',
    question: 'Is AI drift the same as hallucination?',
    answer:
      'No. A hallucination is one answer that states something false, and it can happen on day one. Drift is a trend: the share of wrong or weak answers rises over time. They are linked, because drift often shows up as more hallucinations, such as when document search stops finding the right page. You catch hallucinations per answer and drift across weeks.',
  },
  {
    category: 'cost',
    question: 'How much does AI agent maintenance cost?',
    answer:
      'It depends on seven things: model tokens, conversation or task volume, connected systems, evaluation cadence, your monitoring tool, compliance needs and required response times. We do not publish prices, because an agent handling a few internal requests and one handling thousands of customer conversations need very different support. We quote after an audit of your agent.',
  },
  {
    category: 'cost',
    question: 'How expensive are AI agents to run?',
    answer:
      'Running cost is mostly model usage. OpenAI and Anthropic bill per million tokens, price input and output separately, and charge more for output and less for cached input. Cost grows with volume, prompt length, retrieved text and steps per task. Add your monitoring tool and the people who review and fix the agent. Our AI agent cost guide has a worked example.',
  },
  {
    category: 'cost',
    question: 'What does it cost to maintain an AI agent each month?',
    answer:
      'Add up four parts: model usage for the month, your monitoring tool plan, the engineering hours to review, test and fix the agent, and compliance work such as HIPAA reviews. The engineering hours often decide the total, and they depend on how often the agent changes and how fast you need responses. That is why our plans are built around hours.',
  },
  {
    category: 'cost',
    question: 'Is it worth building an AI agent if it needs ongoing maintenance?',
    answer:
      'It can be, if maintenance is in the business case from the start. An agent doing a high-volume, repetitive job with clear rules usually covers its upkeep. One that runs a few times a week, touches risky systems and changes constantly may not. Before building, weigh monthly review and fix time against the expected savings, and name an owner.',
  },
  {
    category: 'plans',
    question: 'Who provides ongoing support and monitoring for AI agents after launch?',
    answer:
      'Usually one of four: your own engineers, the original developer on a retainer, a managed support partner, or nobody, with only a monitoring tool. Vendors such as LangSmith, Langfuse, Arize, Braintrust and Datadog provide software, not fixes. FactoryJet offers managed support plans for agents we built and agents built by others, so we are one of the options, not a neutral judge.',
  },
  {
    category: 'plans',
    question: 'How fast do you respond when an AI agent breaks?',
    answer: `It depends on the plan and the severity. First response times for critical issues: ${planPhrases((plan) => plan.criticalResponse)}. For standard requests: ${planPhrases((plan) => plan.standardResponse)}. ${BUSINESS_HOURS_NOTE} A first response means an engineer has reviewed the issue and replied with next steps. It is not a fix time.`,
  },
  {
    category: 'plans',
    question: 'How many engineering hours are included in each support plan?',
    answer: `${SUPPORT_PLANS.map((plan) => `${plan.name} includes ${plan.hours}`).join('. ')}. The hours cover log review, evaluation runs, fixes, integration upkeep and the monthly report. The right plan depends on how often your agent changes, how many systems it touches and how fast you need responses. We recommend one after an audit, and plans are quoted rather than priced on this page.`,
  },
  {
    category: 'plans',
    question: 'What counts as a critical issue?',
    answer:
      'A critical issue means the agent is down, an integration it depends on is failing, or it gives wrong or unsafe answers at scale. Examples: the help desk rejects every reply the agent posts, or the agent quotes an outdated policy to every customer after a failed sync. Critical issues get the fastest first response on every plan.',
  },
  {
    category: 'plans',
    question: 'What happens when OpenAI or Anthropic retires the model our agent uses?',
    answer:
      "Requests to a retired model fail, so the agent stops working on that date. OpenAI's stated minimum notice is 6 months for generally available models, and Anthropic's is 60 days for publicly released models. We log each model ID with its retirement date, test the recommended replacement on your test set, fix prompt or parameter differences and switch early.",
  },
  {
    category: 'plans',
    question: 'Can you support an AI agent that another company built?',
    answer:
      'Yes. We start with an audit: we read the code, prompts and logs, list every integration and model version, and check for a test set. If none exists, we build one first, because nothing can be changed safely without it. Then we recommend a plan. If the agent needs structural work before it can be supported, we say so up front.',
  },
];

/* JSON-LD */

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
  '@id': `${CANONICAL_URL}#service`,
  serviceType: 'AI agent monitoring, support and maintenance',
  name: 'AI Agent Monitoring, Support and Maintenance',
  description:
    'Ongoing support for AI agents after launch: tracing and monitoring, evaluations, drift detection, model retirement planning, integration upkeep, knowledge base freshness, security and access reviews, incident response and a monthly report.',
  provider: { '@id': 'https://factoryjet.com/#organization' },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: {
    '@type': 'BusinessAudience',
    name: 'US businesses running AI agents in customer support, sales, operations and healthcare',
  },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${CANONICAL_URL}#webpage`,
  url: CANONICAL_URL,
  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  datePublished: PAGE_MODIFIED,
  dateModified: PAGE_MODIFIED,
  inLanguage: 'en-US',
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
    jobTitle: 'Founder, FactoryJet',
  },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  about: { '@id': `${CANONICAL_URL}#service` },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#answer-first'] },
};

export default function AiAgentMonitoringPage() {
  return (
    <>
      <JsonLd id="service-jsonld" data={SERVICE_SCHEMA} />
      <JsonLd id="faq-jsonld" data={FAQ_SCHEMA} />
      <JsonLd id="webpage-jsonld" data={WEBPAGE_SCHEMA} />
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />

      <SiteHeader locale="us" />

      <main className="pp-page">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* HERO */}
        <section className="pp-hero">
          <div className="pp-hero-grid">
            <div>
              <p className="pp-eyebrow">{'// After launch: watch, test, fix'}</p>
              <h1 className="pp-h1">AI Agent Monitoring, Support and Maintenance</h1>
              <p className="text-base md:text-lg leading-relaxed text-[#46403B]">
                Launch is when the real questions start. Customers ask things your tests never covered, vendors change their APIs (the connections between software systems) and AI models get retired. We watch your agent&apos;s traces (the step-by-step record of every conversation), test each change before it ships and fix what breaks, with first response times written into each plan.
              </p>
              <HeroInlineForm
                source="services_ai_agent_monitoring"
                region="us"
                submitLabel="Request an agent support audit"
              />
            </div>

            <div className="pp-hero-card">
              <div className="flex items-center justify-between gap-4 border-b border-[#E7DED6] pb-3 mb-4">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#B23E13]">
                  What we watch on every agent
                </span>
                <span className="text-xs text-[#6E655F]">Every plan</span>
              </div>
              <ul className="space-y-3 text-sm list-none p-0 m-0">
                {WATCHLIST.map((row) => (
                  <li key={row.label} className="flex justify-between gap-4 py-1 border-b border-[#F5EFEA] last:border-b-0">
                    <span className="text-[#46403B]">{row.label}</span>
                    <span className="font-semibold text-[#14110F] text-right">{row.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* VERIFIED STATS */}
        <section className="pp-stat-band">
          <div className="pp-container">
            <ul className="pp-stat-grid list-none p-0 m-0">
              {STATS.map((stat) => (
                <li key={stat.b} className="pp-stat-item">
                  <span className="pp-stat-num">{stat.b}</span>
                  <span className="pp-stat-label">{stat.s}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-[#6E655F] leading-relaxed">
              Sources: <SourceLink href={SRC_OPENAI_DEPRECATIONS}>OpenAI API deprecations</SourceLink>,{' '}
              <SourceLink href={SRC_ANTHROPIC_DEPRECATIONS}>Anthropic model deprecations</SourceLink> and{' '}
              <SourceLink href={SRC_DRIFT_STUDY}>Chen, Zaharia and Zou (2023)</SourceLink>. Checked September 17, 2026.
            </p>
          </div>
        </section>

        {/* ANSWER FIRST */}
        <section className="pp-section pp-tint">
          <div className="pp-container">
            <div className="pp-card p-6 md:p-8 bg-white border-l-4 border-[#F05A28] max-w-4xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#B23E13] block mb-2">
                Short answer: what AI agent support includes and what drives the cost
              </span>
              <p id="answer-first" className="text-base md:text-lg text-[#14110F] leading-relaxed font-medium">
                Ongoing AI agent support means someone reads the agent&apos;s traces, tracks cost and escalation rates, reruns its test set when prompts or models change, and fixes integrations when vendors change them. The monthly cost depends on conversation volume, model usage, connected systems, how often you run evaluations, monitoring tools, compliance needs and how fast you need a response.
              </p>
              <p className="mt-4 text-xs text-[#6E655F]">
                Updated September 17, 2026. Written by Bhavesh Barot, Founder of FactoryJet.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT SUPPORT INCLUDES */}
        <section className="pp-section" id="what-support-includes">
          <div className="pp-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-10">
              <div className="lg:col-span-5">
                <p className="pp-eyebrow">{'// What the work is'}</p>
                <h2 className="pp-h2">What ongoing AI agent support includes</h2>
              </div>
              <p className="lg:col-span-7 text-base text-[#46403B] leading-relaxed self-end">
                An agent depends on a large language model (LLM) you do not control, systems that change and customers who keep asking new things. Support covers nine jobs, and your plan sets how much of each you get.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 list-none p-0 m-0">
              {SUPPORT_JOBS.map((job, index) => (
                <li
                  key={job.title}
                  className={`pp-card p-6 md:p-7 bg-white${index === SUPPORT_JOBS.length - 1 ? ' md:col-span-2' : ''}`}
                >
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#B23E13] block mb-2">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg font-bold text-[#14110F] mb-2">{job.title}</h3>
                  <p className="text-sm text-[#46403B] leading-relaxed">{job.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* METRICS */}
        <section className="pp-section pp-tint" id="metrics">
          <div className="pp-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-10">
              <div className="lg:col-span-5">
                <p className="pp-eyebrow">{'// What we measure'}</p>
                <h2 className="pp-h2">The six numbers we track on every agent</h2>
              </div>
              <p className="lg:col-span-7 text-base text-[#46403B] leading-relaxed self-end">
                A wall of charts does not tell you whether the agent is doing its job. These six numbers do, and each one points to a different fix.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="pp-table bg-white">
                <caption className="sr-only">
                  Six production metrics for an AI agent, what each tells you and what usually moves it
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Metric</th>
                    <th scope="col">What it tells you</th>
                    <th scope="col">What usually moves it</th>
                  </tr>
                </thead>
                <tbody>
                  {METRIC_ROWS.map((row) => (
                    <tr key={row.metric}>
                      <td className="font-bold text-[#14110F]">{row.metric}</td>
                      <td>{row.tells}</td>
                      <td>{row.moves}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <figure className="m-0">
                <div className="relative rounded-2xl overflow-hidden border border-[#E7DED6] aspect-[16/9]">
                  <Image
                    src="/images/ai-support/support-ops-ticket-dashboard.jpg"
                    alt="A man standing at a conference table with a laptop, looking at a dashboard on a wall-mounted screen"
                    width={1376}
                    height={768}
                    className="absolute inset-0 h-full w-full object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-[#6E655F] leading-relaxed">
                  A weekly review starts with the dashboard, then moves to the conversations behind any number that changed.
                </figcaption>
              </figure>
              <figure className="m-0">
                <div className="relative rounded-2xl overflow-hidden border border-[#E7DED6] aspect-[16/9]">
                  <Image
                    src="/images/ai-support/support-agent-desk-review.jpg"
                    alt="Close view of hands typing on a laptop while reviewing a written message, with a second monitor behind it"
                    width={1376}
                    height={768}
                    className="absolute inset-0 h-full w-full object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-[#6E655F] leading-relaxed">
                  Reading real transcripts still finds failures that no metric flags.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* DRIFT */}
        <section className="pp-section" id="drift">
          <div className="pp-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5">
                <p className="pp-eyebrow">{'// Drift'}</p>
                <h2 className="pp-h2">Drift: how an agent gets worse when nobody touches it</h2>
                <p className="mt-5 text-base text-[#46403B] leading-relaxed">
                  Drift is when an agent&apos;s answers get worse over time although nobody edited it. It has three sources, and each needs its own check.
                </p>
                <div className="pp-card mt-6 p-6 bg-[#FFF8F5] border-l-4 border-[#F05A28]">
                  <p className="text-sm text-[#14110F] leading-relaxed">
                    It happens to the largest models too. In a{' '}
                    <SourceLink href={SRC_DRIFT_STUDY}>2023 study by Chen, Zaharia and Zou</SourceLink>, GPT-4&apos;s accuracy on the same prime-number questions fell from 84% in March to 51% in June. The authors concluded that LLM services need continuous monitoring.
                  </p>
                </div>
              </div>

              <ul className="lg:col-span-7 space-y-5 list-none p-0 m-0">
                {DRIFT_SOURCES.map((source) => (
                  <li key={source.title} className="pp-card p-6 md:p-7 bg-white">
                    <h3 className="text-lg font-bold text-[#14110F] mb-2">{source.title}</h3>
                    <p className="text-sm text-[#46403B] leading-relaxed">{source.body}</p>
                    <p className="mt-3 text-sm text-[#46403B] leading-relaxed">
                      <span className="font-semibold text-[#14110F]">How we detect it: </span>
                      {source.detect}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* VENDOR CHANGES */}
        <section className="pp-section pp-tint" id="vendor-changes">
          <div className="pp-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5">
                <p className="pp-eyebrow">{'// Vendor changes'}</p>
                <h2 className="pp-h2">Model retirements and API changes on the calendar</h2>
                <p className="mt-5 text-base text-[#46403B] leading-relaxed">
                  Vendors announce deprecations, meaning planned retirements, in advance. These dates come from the <SourceLink href={SRC_OPENAI_DEPRECATIONS}>OpenAI API deprecations page</SourceLink> and{' '}
                  <SourceLink href={SRC_ANTHROPIC_DEPRECATIONS}>Anthropic&apos;s model deprecations page</SourceLink>, checked September 17, 2026. None is a bug in your agent, yet each one breaks agents nobody is watching.
                </p>
                <p className="mt-4 text-base text-[#46403B] leading-relaxed">
                  What we do: log every model ID and API version your agent uses with its retirement date, then test and switch well before each deadline.
                </p>
              </div>

              <ul className="lg:col-span-7 space-y-4 list-none p-0 m-0">
                {VENDOR_CHANGES.map((change) => (
                  <li key={change} className="pp-card p-5 md:p-6 bg-white text-sm text-[#46403B] leading-relaxed">
                    {change}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* MID-PAGE CTA */}
        <MidPageCTA
          headline="Not sure what your agent is doing in production?"
          sub="Tell us what your agent does and which systems it touches. We will look at how it behaves today, list the model and API deadlines coming up, and recommend a plan."
          label="Get an AI agent support audit"
          note="You talk to the founder, not a sales team."
        />

        {/* INCIDENTS */}
        <section className="pp-section" id="incidents">
          <div className="pp-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-10">
              <div className="lg:col-span-5">
                <p className="pp-eyebrow">{'// Incidents'}</p>
                <h2 className="pp-h2">When something breaks: severity, rollback and customer updates</h2>
              </div>
              <p className="lg:col-span-7 text-base text-[#46403B] leading-relaxed self-end">
                Every issue gets a severity before anyone starts fixing it. The severity decides what we do first, and your plan sets the first response time.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="pp-table">
                <caption className="sr-only">Incident severity levels for an AI agent, with examples and first actions</caption>
                <thead>
                  <tr>
                    <th scope="col">Severity</th>
                    <th scope="col">Examples</th>
                    <th scope="col">What we do first</th>
                  </tr>
                </thead>
                <tbody>
                  {SEVERITY_ROWS.map((row) => (
                    <tr key={row.level}>
                      <td className="font-bold text-[#14110F]">{row.level}</td>
                      <td>{row.examples}</td>
                      <td>{row.first}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-10">
              <div className="lg:col-span-7 pp-card p-6 md:p-7 bg-white">
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Rollback</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Every prompt, model ID, tool definition and retrieval setting is versioned and tagged with its test score, so rolling back means redeploying the last version that passed, not rebuilding under pressure.
                </p>
              </div>
              <div className="lg:col-span-5 pp-card p-6 md:p-7 bg-white">
                <h3 className="text-lg font-bold text-[#14110F] mb-2">Customer updates</h3>
                <p className="text-sm text-[#46403B] leading-relaxed">
                  Your team decides what to tell customers, and we supply the facts: what happened, when, who was affected and what changed. During an outage, the handoff message says a person will reply.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SUPPORT PLANS */}
        <section className="pp-section pp-tint" id="plans">
          <div className="pp-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-10">
              <div className="lg:col-span-5">
                <p className="pp-eyebrow">{'// Plans'}</p>
                <h2 className="pp-h2">Support plans: included hours and first response times</h2>
              </div>
              <p className="lg:col-span-7 text-base text-[#46403B] leading-relaxed self-end">
                Three plans, each scoped and quoted after we audit your agent, so there are no prices here. Times shown are first response times: an engineer has reviewed the issue and replied with next steps, which is not the same as a fix.
              </p>
            </div>

            <ul className="space-y-5 list-none p-0 m-0">
              {SUPPORT_PLANS.map((plan) => (
                <li key={plan.name} className="pp-card p-6 md:p-8 bg-white">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                    <div className="lg:col-span-5">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#B23E13] block mb-1">
                        Plan
                      </span>
                      <h3 className="text-2xl font-extrabold text-[#14110F]">{plan.name}</h3>
                      <p className="mt-2 text-base font-semibold text-[#14110F]">{plan.hours}</p>
                      <p className="mt-3 text-sm text-[#46403B] leading-relaxed">{plan.coverage}</p>
                    </div>
                    <div className="lg:col-span-7">
                      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 m-0">
                        <div className="rounded-xl border border-[#E7DED6] bg-[#FAFAF7] p-4">
                          <dt className="text-xs font-mono font-bold uppercase tracking-wider text-[#6E655F]">Critical issues</dt>
                          <dd className="mt-1 ml-0 text-sm font-semibold text-[#14110F]">First response {plan.criticalResponse}</dd>
                        </div>
                        <div className="rounded-xl border border-[#E7DED6] bg-[#FAFAF7] p-4">
                          <dt className="text-xs font-mono font-bold uppercase tracking-wider text-[#6E655F]">Standard requests</dt>
                          <dd className="mt-1 ml-0 text-sm font-semibold text-[#14110F]">First response {plan.standardResponse}</dd>
                        </div>
                      </dl>
                      <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-[#46403B] list-disc pl-5 marker:text-[#B23E13]">
                        {plan.includes.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-8 max-w-4xl text-sm text-[#46403B] leading-relaxed">
              {BUSINESS_HOURS_NOTE} Critical means the agent is down, an integration is failing, or the agent gives wrong or unsafe answers at scale. Everything else is a standard request or a planned change.
            </p>
          </div>
        </section>

        {/* RUNBOOK */}
        <section className="pp-section" id="runbook">
          <div className="pp-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-10">
              <div className="lg:col-span-5">
                <p className="pp-eyebrow">{'// Runbook'}</p>
                <h2 className="pp-h2">How a support engagement runs: the first 30 days, then a normal week</h2>
              </div>
              <p className="lg:col-span-7 text-base text-[#46403B] leading-relaxed self-end">
                Here is a typical first month. Agents with many integrations or no test set take longer, and the audit tells you before work starts.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 pp-card p-6 md:p-8 bg-white">
                <h3 className="text-xl font-bold text-[#14110F] mb-4">The first 30 days</h3>
                <ol className="list-decimal pl-6 space-y-3 text-sm text-[#46403B] leading-relaxed marker:font-bold marker:text-[#B23E13]">
                  {FIRST_30_DAYS.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
              <div className="lg:col-span-5 pp-card p-6 md:p-8 bg-white">
                <h3 className="text-xl font-bold text-[#14110F] mb-4">A normal week after that</h3>
                <ol className="list-decimal pl-6 space-y-3 text-sm text-[#46403B] leading-relaxed marker:font-bold marker:text-[#B23E13]">
                  {NORMAL_WEEK.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* COST DRIVERS */}
        <section className="pp-section pp-tint" id="cost">
          <div className="pp-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-10">
              <div className="lg:col-span-5">
                <p className="pp-eyebrow">{'// Cost'}</p>
                <h2 className="pp-h2">What drives the monthly cost of maintaining an AI agent</h2>
              </div>
              <p className="lg:col-span-7 text-base text-[#46403B] leading-relaxed self-end">
                There is no honest single number. Agents doing the same job differ in volume, integrations and risk, which is what you pay for. Here is what moves the bill and how to keep it down.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="pp-table bg-white">
                <caption className="sr-only">Monthly cost drivers for maintaining an AI agent, why each one matters and how to reduce it</caption>
                <thead>
                  <tr>
                    <th scope="col">Cost driver</th>
                    <th scope="col">Why it moves the cost</th>
                    <th scope="col">How to keep it down</th>
                  </tr>
                </thead>
                <tbody>
                  {COST_DRIVERS.map((row) => (
                    <tr key={row.driver}>
                      <td className="font-bold text-[#14110F]">{row.driver}</td>
                      <td>{row.why}</td>
                      <td>{row.lower}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-8 max-w-4xl text-base text-[#46403B] leading-relaxed">
              Building the agent is a separate cost. Our{' '}
              <Link href="/blog/what-is-an-ai-agent-cost-2026" className={LINK_CLASS}>
                guide to what an AI agent costs
              </Link>{' '}
              covers it, with a worked example of a monthly model bill. For agents that handle patient data, see how we build{' '}
              <Link href="/services/healthcare-ai-agents" className={LINK_CLASS}>
                healthcare AI agents
              </Link>
              .
            </p>
          </div>
        </section>

        {/* TOOLS */}
        <section className="pp-section" id="tools">
          <div className="pp-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-10">
              <div className="lg:col-span-5">
                <p className="pp-eyebrow">{'// Tools'}</p>
                <h2 className="pp-h2">AI agent monitoring tools compared</h2>
              </div>
              <p className="lg:col-span-7 text-base text-[#46403B] leading-relaxed self-end">
                Here are five tools teams use to monitor agents. Descriptions come from each vendor&apos;s documentation, checked September 17, 2026. We can work inside whichever one you use.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="pp-table">
                <caption className="sr-only">AI agent monitoring and LLM observability tools compared by features, hosting, fit and limits</caption>
                <thead>
                  <tr>
                    <th scope="col">Tool</th>
                    <th scope="col">What it does</th>
                    <th scope="col">Open source or hosted</th>
                    <th scope="col">Good fit</th>
                    <th scope="col">Watch out for</th>
                  </tr>
                </thead>
                <tbody>
                  {TOOL_ROWS.map((row) => (
                    <tr key={row.tool}>
                      <td className="font-bold text-[#14110F]">{row.tool}</td>
                      <td>{row.does}</td>
                      <td>{row.hosting}</td>
                      <td>{row.fit}</td>
                      <td>{row.watch}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="pp-card mt-10 p-6 md:p-8 bg-[#FFF8F5] border-l-4 border-[#F05A28] max-w-4xl">
              <h3 className="text-lg font-bold text-[#14110F] mb-2">A tool shows the problem. Someone still has to fix it.</h3>
              <p className="text-sm md:text-base text-[#46403B] leading-relaxed">
                Someone has to read the trace, find why the agent picked the wrong tool, change the prompt or connector, rerun the tests and ship. If the people who built your agent have time to own it, a tool may be enough. If nobody owns the agent after launch, a support team fills that gap.
              </p>
            </div>
          </div>
        </section>

        {/* OPTIONS COMPARISON */}
        <section className="pp-section pp-tint" id="options">
          <div className="pp-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-10">
              <div className="lg:col-span-5">
                <p className="pp-eyebrow">{'// Options'}</p>
                <h2 className="pp-h2">Who should support your agent: four options compared</h2>
              </div>
              <p className="lg:col-span-7 text-base text-[#46403B] leading-relaxed self-end">
                Each option works for someone. Pick by who will actually watch the agent six months after launch. FactoryJet sells the managed support option, so weigh this table with that in mind.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="pp-table bg-white">
                <caption className="sr-only">
                  In-house team, original developer on retainer, managed support partner and tool only, compared for AI agent support
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Question</th>
                    <th scope="col">In-house team</th>
                    <th scope="col">Original developer on retainer</th>
                    <th scope="col">Managed support partner</th>
                    <th scope="col">Tool only</th>
                  </tr>
                </thead>
                <tbody>
                  {OPTION_ROWS.map((row) => (
                    <tr key={row.q}>
                      <td className="font-bold text-[#14110F]">{row.q}</td>
                      <td>{row.inHouse}</td>
                      <td>{row.retainer}</td>
                      <td>{row.partner}</td>
                      <td>{row.toolOnly}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* WHO DOES THE WORK */}
        <section className="pp-section">
          <div className="pp-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-4">
                <div className="relative rounded-2xl border border-[#E7DED6] bg-[#FAFAF7] p-4 shadow-md max-w-xs">
                  <div className="relative rounded-xl overflow-hidden aspect-square">
                    <Image
                      src="/bhavesh_image.webp"
                      alt="Bhavesh Barot, Founder and CEO of FactoryJet"
                      width={682}
                      height={1024}
                      className="absolute inset-0 h-full w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 30vw"
                    />
                  </div>
                  <div className="pt-4">
                    <div className="font-bold text-base text-[#14110F]">Bhavesh Barot</div>
                    <div className="font-mono text-xs text-[#B23E13] font-bold">Founder and CEO, FactoryJet</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8">
                <p className="pp-eyebrow">{'// The team'}</p>
                <h2 className="pp-h2">Who does the work</h2>
                <p className="text-sm md:text-base text-[#46403B] leading-relaxed mt-4">
                  Every engagement starts with a call with founder Bhavesh Barot and an audit of how your agent behaves today. FactoryJet has worked with 500+ businesses, and the engineers who read your traces also build agents through our{' '}
                  <Link href="/services/ai-agent-development" className={LINK_CLASS}>
                    AI agent development
                  </Link>{' '}
                  practice.
                </p>
                <p className="text-sm md:text-base text-[#46403B] leading-relaxed mt-4">
                  We support agents we built and agents other teams built, including{' '}
                  <Link href="/services/ai-customer-support-agents" className={LINK_CLASS}>
                    AI customer support agents
                  </Link>
                  ,{' '}
                  <Link href="/services/ai-chatbot-development" className={LINK_CLASS}>
                    chatbots
                  </Link>
                  ,{' '}
                  <Link href="/services/ai-workflow-automation" className={LINK_CLASS}>
                    workflow automations
                  </Link>
                  ,{' '}
                  <Link href="/services/ai-sdr" className={LINK_CLASS}>
                    AI SDR agents
                  </Link>{' '}
                  and{' '}
                  <Link href="/services/healthcare-ai-agents" className={LINK_CLASS}>
                    healthcare AI agents
                  </Link>
                  . If an agent needs rebuilding before it can be supported, the audit says so.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Questions teams ask about AI agent monitoring and support"
          lead="Straight answers on monitoring, drift, tools, cost and what our support plans cover."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* FINAL CTA */}
        <section className="pp-section pp-tint" id="final-cta">
          <div className="pp-container">
            <div className="pp-card p-8 md:p-12 bg-white border border-[#F05A28]/20 text-center max-w-4xl mx-auto">
              <p className="pp-eyebrow">{'// Keep your agent working'}</p>
              <h2 className="text-2xl md:text-4xl font-extrabold text-[#14110F] mb-4">
                Book a 30-minute call about supporting your AI agent
              </h2>
              <p className="text-base text-[#46403B] max-w-2xl mx-auto mb-8">
                Talk to founder Bhavesh Barot about what your agent does, what it connects to and what has broken so far. We audit it, then recommend a plan with included hours and first response times.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#C2440F] text-white font-semibold text-base hover:bg-[#A63A0D] transition-colors shadow-sm"
                >
                  Book a call via Calendly &rarr;
                </a>
                <ModalCTAButton label="Request a support audit" region="us" btnVariant="secondary-light" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}

import { Fragment, type ReactNode } from 'react';
import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import JsonLd from '@/components/JsonLd';
import { ORG_ID } from '@/data/organization';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import '@/components/v2/AiAgentDevelopmentSections.css';

/* Claude AI agent development (W2-4, built 2026-10-29, QA fixes 2026-10-31).
   Demand: buyer question N18 ("who builds agents on Claude / the Anthropic API")
   named FactoryJet in 0 of 13 AI answers. No Google volume measured.
   Delivery of Claude-built agents, HubSpot and punchout work confirmed by
   Bhavesh on 29 Oct 2026; Salesforce on 17 Oct.
   Claude product facts were read from Anthropic's own docs on 2026-10-29
   (tool use overview, privacy center). The models overview and the Agent SDK
   overview were re-read on 2026-10-31: four current models (Fable 5.1, Opus 5.5,
   Sonnet 5.5, Haiku 5.5), every one with a 1M-token context window; Bedrock
   regional endpoints apply to Sonnet 4.5 and later. Model names change:
   re-check the models overview before editing.
   Build-route facts (2026-10-31): LangChain ChatAnthropic docs, n8n Anthropic
   Chat Model node docs, OpenAI Agents SDK models page (LiteLLM beta adapter),
   Microsoft Learn Copilot Studio overview ("graphical, low-code studio").
   Commerceflo claims re-read on commerceflo.ai/privacy-policy (section 4) and
   commerceflo.ai/pricing (FAQ "What AI models power the agents?") on 2026-10-31.
   This page must read as an independent services firm: no Anthropic logos or
   brand styling, no partner claim, and the "not affiliated" line appears once.
   Layout and classes mirror /services/ai-agent-development and reuse its
   stylesheet. No running-cost or token-price numbers, by rule. */

const url = 'https://factoryjet.com/services/claude-ai-agent-development';
const title = 'Claude AI Agent Development Services | FactoryJet';
const description =
  'We build custom AI agents on Anthropic’s Claude API, Agent SDK and MCP, wired into your ERP, CRM and help desk. Demo on your own data before you sign.';
const socialImage = 'https://factoryjet.com/images/us/services/ai-agent-definition-workbench.webp';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { type: 'website', siteName: 'FactoryJet', url, title, description, locale: 'en_US', images: [{ url: socialImage, width: 1400, height: 933, alt: 'AI agent connected to documents, data, tools, and human approval' }] },
  twitter: { card: 'summary_large_image', title, description, images: [socialImage] },
};

const breadcrumbs = [
  { name: 'Home', url: 'https://factoryjet.com/' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Claude AI Agent Development', url },
];

const LINK = { color: 'var(--accent-text)', textDecoration: 'underline', textUnderlineOffset: 3 } as const;
const LIST_RESET = { listStyle: 'none', margin: 0, padding: 0 } as const;

/* Primary sources. Fetch dates in the header comment. */
const SRC = {
  models: 'https://platform.claude.com/docs/en/about-claude/models/overview',
  tools: 'https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview',
  sdk: 'https://code.claude.com/docs/en/agent-sdk/overview',
  mcp: 'https://modelcontextprotocol.io/introduction',
  training: 'https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training',
  retention: 'https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data',
  cost: 'https://productcrafters.io/blog/how-much-does-it-cost-to-build-an-ai-agent/',
  cfPrivacy: 'https://commerceflo.ai/privacy-policy',
  cfPricing: 'https://commerceflo.ai/pricing',
  langchain: 'https://docs.langchain.com/oss/python/integrations/chat/anthropic',
  n8n: 'https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatanthropic/',
  openaiSdk: 'https://openai.github.io/openai-agents-python/models/',
  copilot: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio',
};

function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} style={LINK} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

const SHORT_ANSWERS: { tag: string; q: string; a: ReactNode }[] = [
  {
    tag: 'WHAT WE BUILD',
    q: 'What is a Claude AI agent, and what does it do for a business?',
    a: <>A Claude AI agent is agentic AI: software that plans its own steps and calls tools to finish a task, with Anthropic&apos;s Claude model doing the reading and deciding (<Ext href={SRC.sdk}>Agent SDK overview</Ext>). For a business, it takes one repeat job and does it inside your systems. Examples: drafting the sales order in NetSuite or Odoo from an emailed purchase order, or answering order tickets in Zendesk with live Shopify data. A person approves anything that moves money.</>,
  },
  {
    tag: 'BUILDING BLOCKS',
    q: 'Which parts of Claude do you build with?',
    a: <>Four, picked per job. The Claude API with tool use for most agents. MCP servers when several AI tools need the same data. The Claude Agent SDK when an agent works with files, code or long sessions. And Claude inside Amazon Bedrock, Google Cloud or Microsoft Foundry when your company already buys cloud there. Anthropic lists the cloud routes in its <Ext href={SRC.models}>models overview</Ext>, and documents <Ext href={SRC.tools}>tool use</Ext>, the <Ext href={SRC.sdk}>Agent SDK</Ext> and <Ext href={SRC.mcp}>MCP</Ext> separately.</>,
  },
  {
    tag: 'FIT',
    q: 'When is Claude the right model?',
    a: <>When the job means long documents, many tool calls in a row, or asking a person when something is missing. All four current Claude models read up to 1 million tokens at once. A token is a small piece of a word, and 1 million tokens is roughly 555,000 words, per Anthropic&apos;s models overview on 31 October 2026. When the job needs live Google search or your security team approved another provider, we build on that instead.</>,
  },
  {
    tag: 'YOUR DATA',
    q: 'Does Anthropic train on what our agent sends?',
    a: <>Not by default. Anthropic&apos;s <Ext href={SRC.training}>privacy center</Ext> says it does not use inputs or outputs from its commercial products to train its models by default, and it deletes API inputs and outputs within 30 days unless another term is agreed. Usage can run on an account in your company&apos;s name, and our code sends the model only the fields each step needs.</>,
  },
  {
    tag: 'COST',
    q: 'How much does a Claude agent cost to build?',
    a: <>As a market reference, development firm <Ext href={SRC.cost}>ProductCrafters</Ext> puts 2026 AI agent builds at about $5,000 to $180,000 or more. See Q21 below for what moves the price on a Claude build.</>,
  },
  {
    tag: 'TIMELINE',
    q: 'How long does it take?',
    a: <>Two to four weeks for a pilot on one workflow, six to twelve for production. Q15 below covers where the time goes.</>,
  },
];

const BLOCKS: { id: string; title: string; body: ReactNode; tags: string[] }[] = [
  {
    id: 'CAP‑01',
    title: 'Claude API with tool use',
    body: <>We describe each of your actions to Claude as a tool: a name, a plain description and an input format. Claude returns a structured request, and our code runs it against your system, checks the answer and sends it back. Anthropic calls these client tools, because they run in your application, not on Anthropic&apos;s servers (<Ext href={SRC.tools}>tool use docs</Ext>).</>,
    tags: ['Claude API', 'Tool use', 'Fixed input formats'],
  },
  {
    id: 'CAP‑02',
    title: 'MCP servers for your ERP or CRM',
    body: <>MCP, the Model Context Protocol, is an open standard for connecting AI apps to outside systems, and both Claude and ChatGPT support it (<Ext href={SRC.mcp}>MCP docs</Ext>). We write a small server that exposes only the actions you approve, such as &quot;look up order&quot; or &quot;create draft quote&quot;. Our <a href="/blog/custom-mcp-server-erp-crm-mid-sized-companies-2026" style={LINK}>custom MCP server guide</a> covers what it takes.</>,
    tags: ['NetSuite', 'Odoo', 'HubSpot', 'Salesforce'],
  },
  {
    id: 'CAP‑03',
    title: 'Claude Agent SDK',
    body: <>Anthropic&apos;s library for building agents in Python or TypeScript. It gives an agent the same loop that powers Claude Code, plus hooks (your own code that runs at set points, such as a check before a write), subagents (helper agents for one focused subtask) and permission rules that decide which tools run on their own and which wait for approval (<Ext href={SRC.sdk}>Agent SDK docs</Ext>).</>,
    tags: ['Python', 'TypeScript', 'Custom checks', 'Helper agents'],
  },
  {
    id: 'CAP‑04',
    title: 'Claude inside your cloud',
    body: <>Claude models are offered through the Claude API, Amazon Bedrock, Google Cloud and Microsoft Foundry. Running the agent in the cloud you already pay for keeps billing, access control and security review in one place. Bedrock also offers regional endpoints, which keep requests inside one region, for Claude Sonnet 4.5 and later (<Ext href={SRC.models}>models overview</Ext>).</>,
    tags: ['Amazon Bedrock', 'Google Cloud', 'Microsoft Foundry'],
  },
];

const JOBS: { title: string; body: string; href?: string }[] = [
  { title: 'Order intake from emailed POs', href: '/services/sales-order-automation-ai-agents', body: 'Reads the purchase order, matches each line to your SKUs and price list, and drafts the sales order in NetSuite, Odoo or Shopify. Lines that do not match go to a person with the reason.' },
  { title: 'RFQ to draft quote', body: 'Pulls quantities and specs from the request for quote (RFQ), applies your pricing rules in code, and holds the quote for an estimator to approve before it goes out.' },
  { title: 'Punchout and procurement orders', body: 'Handles the orders that arrive after a buyer shops your catalog from their procurement system, and flags any cart that breaks your contract prices.' },
  { title: 'Support tickets with live order data', href: '/services/ai-customer-support-agents', body: 'Answers where-is-my-order, returns and address changes in Zendesk or Gorgias from live store data. Refunds above your limit go to a person.' },
  { title: 'CRM lead triage', href: '/services/crm-ai-agents', body: 'Finds or creates the contact in HubSpot or Salesforce, logs the activity, scores the lead against your rules and drafts a reply for a rep to send.' },
  { title: 'Long document review', href: '/services/document-intake-ai-agents', body: 'Reads contracts, supplier terms or policy files in one pass and lists the clauses your team asked to see, with the page each came from.' },
];

const DATA_STEPS: string[] = [
  'Your systems stay behind our code. Claude asks for a tool, our code runs it, checks the answer and decides what goes back. The model never gets a database password.',
  'Each step sends only the fields it needs. A step that sorts an email by type does not need the customer’s address, so it does not get it.',
  'The account can be yours. When usage runs on your own Anthropic key or cloud account, your security team sees every request and holds the agreement. We still manage the servers, models, APIs and upkeep.',
  'Writes wait for a person. Anything that moves money, changes a price or emails a customer goes to an approval queue first, and every step is logged with what the agent saw and did.',
];

const MODEL_ROWS: { job: string; pick: string; why: string }[] = [
  { job: 'Sorting, extraction and routing at high volume', pick: 'Claude Haiku', why: 'Anthropic describes Haiku 5.5 as the model for high-volume, latency-sensitive tasks (jobs where speed matters most) such as classification, extraction and routing.' },
  { job: 'Most multi-step agents', pick: 'Claude Sonnet', why: 'Anthropic calls Sonnet 5.5 the best mix of speed and intelligence. Most production steps we test start here.' },
  { job: 'Hard cases and long tool chains', pick: 'Claude Opus', why: 'Anthropic’s tool use docs say Claude Opus is much more likely to notice a missing detail and ask for it, instead of guessing.' },
  { job: 'The hardest reasoning and long, many-step tasks', pick: 'Claude Fable 5.1', why: 'Anthropic describes Fable 5.1 as the model for demanding reasoning and long-horizon agentic work, meaning tasks with many steps over a long run. It is the slowest, so we keep it for the steps that need it.' },
  { job: 'Answers that need live Google search results', pick: 'Often Gemini', why: 'Our Washington Law Group agent runs on Gemini because the job is finding news stories fast. We pick the model per job.' },
  { job: 'Your security team approved one provider only', pick: 'That provider', why: 'A build that cannot pass your review helps nobody. We keep model calls behind one layer so you can switch later.' },
];

const PHASES = [
  { title: 'Scoping call', body: 'Bhavesh runs it. What starts the work, which systems it touches, how often it happens, where a person must approve, and whether Claude fits or a plain automation is enough.' },
  { title: 'Demo on your data', body: 'Before you sign, the agent runs on a sample of your own documents on Claude, and on a second model if the choice is still open. You see the results side by side.' },
  { title: 'Pilot', body: 'One workflow live in your systems. Tools limited to read and draft, every output approved by your team. Paid at milestones.' },
  { title: 'Production', body: 'More volume and the edge cases the pilot found, with logs, an alert when a step fails, and your test set run on every change.' },
  { title: 'Rollout', body: 'More workflows, or an MCP server so other AI tools can use the same actions. Each one scoped and priced on its own.' },
];

const TERMS = [
  { k: 'Before you sign', v: 'The agent working on a sample of your own data, before any contract.' },
  { k: 'How it is priced', v: 'One fixed price per phase, quoted in writing, paid at milestones. You decide on each next phase after seeing the last one work.' },
  { k: 'What you own', v: 'The code, prompts, tool definitions, test set and any MCP server, in your own repository from day one. No license fee from us.' },
  { k: 'Claude usage', v: 'Can run on your own Anthropic, Bedrock, Google Cloud or Foundry account, billed at cost with no markup, or we manage it for you. Either way, we keep managing the servers, AI models, APIs and maintenance, so your team does not have to.' },
  { k: 'After launch', v: 'Defects fixed inside the build price for a cover period agreed before work starts. Support is optional, each change quoted and approved per request, no monthly minimum.' },
  { k: 'Who you deal with', v: 'Bhavesh Barot, founder of FactoryJet. He replies within 24 hours.' },
];

const PROOF: { tag: string; title: string; body: ReactNode; href: string; label: string }[] = [
  {
    tag: 'BUILT ON CLAUDE',
    title: 'Commerceflo',
    body: <>Commerceflo is the AI commerce platform FactoryJet makes. Its <Ext href={SRC.cfPrivacy}>privacy policy</Ext> says its AI features run in part on the Claude API, and its <Ext href={SRC.cfPricing}>pricing page</Ext> says Claude Haiku handles fast, high-volume jobs while Claude Sonnet handles harder analysis, with routing that picks a model for each job. The GPSUK trade store runs on Commerceflo.</>,
    href: '/commerceflo',
    label: 'See how Commerceflo works',
  },
  {
    tag: 'AI AGENT · LIVE',
    title: 'Washington Law Group',
    body: <>An agent that reads news and police sources across all 50 states every two hours and emails the firm each crash that qualifies. It runs on Gemini because the job needed live search. Every name the model returns is checked against the article text before it is saved, and we build the same check into Claude agents.</>,
    href: '/case-studies/washington-law-group-accident-detection-agent',
    label: 'Read the case study',
  },
];

type FaqSource = { href: string; label: string; internal?: boolean };
type Faq = { id: string; category: string; question: string; answer: string; sources?: FaqSource[] };

const FAQ_CATEGORIES = [
  { id: 'faq-fit', label: 'Choosing Claude' },
  { id: 'faq-build', label: 'How we build' },
  { id: 'faq-data', label: 'Data and safety' },
  { id: 'faq-cost', label: 'Cost' },
  { id: 'faq-terms', label: 'Terms and next steps' },
];

/* Single source for the visible FAQ and the FAQPage JSON-LD. */
const FAQS: Faq[] = [
  { id: 'Q01', category: 'faq-fit', question: 'Why would we build our agent on Claude instead of GPT or Gemini?', answer: 'We pick the model for each job. Claude does well on long documents and on many tool calls in a row. Every current Claude model reads up to 1 million tokens at once, about 555,000 words, which suits contracts, catalogs and long email threads. GPT or Gemini can win on a given task, so during the demo we run your real examples on two models side by side before you commit.', sources: [{ href: SRC.models, label: 'Anthropic models overview' }] },
  { id: 'Q02', category: 'faq-fit', question: 'Is Claude an AI agent, or just a chatbot?', answer: 'Claude is a model, and the Claude chat app is an assistant you talk to. It becomes an agent when code gives it tools and a goal. Anthropic’s Agent SDK docs define an agent as an application that plans its own steps and calls tools to finish a task. That is the agentic AI we build: Claude reads a purchase order, calls your ERP and drafts the order for a person to approve.', sources: [{ href: SRC.sdk, label: 'Anthropic Agent SDK overview' }] },
  { id: 'Q03', category: 'faq-fit', question: 'Is a Claude agent the same as Claude Code?', answer: 'No. Claude Code is Anthropic’s tool for software development, used mostly from a terminal. The Claude Agent SDK gives your own application the same tools and agent loop that power Claude Code, in Python or TypeScript. We use that SDK, or the Claude API directly, to build agents for business jobs such as order intake. Anthropic’s branding rules say products built on the SDK must not call themselves Claude Code.', sources: [{ href: SRC.sdk, label: 'Anthropic Agent SDK overview' }] },
  { id: 'Q04', category: 'faq-fit', question: 'Which Claude model will our agent use?', answer: 'It depends on the step. Anthropic’s models overview, checked on 31 October 2026, lists four current models: Haiku 5.5 for fast, high-volume work such as sorting and extraction, Sonnet 5.5 for the best mix of speed and intelligence, Opus 5.5 for long-running agent and knowledge work, and Fable 5.1 for the hardest reasoning. Many agents use two: a fast one to sort work and a stronger one for hard cases.', sources: [{ href: SRC.models, label: 'Anthropic models overview' }] },
  { id: 'Q05', category: 'faq-fit', question: 'Can you build on Claude if our company already uses AWS, Google Cloud or Azure?', answer: 'Usually, yes. Anthropic lists Claude models on Amazon Bedrock, Google Cloud and Microsoft Foundry as well as its own API. Bedrock offers regional endpoints, which keep requests inside one region, for Claude Sonnet 4.5 and later. We confirm which models your cloud offers in your region before we quote.', sources: [{ href: SRC.models, label: 'Anthropic models overview' }] },
  { id: 'Q06', category: 'faq-fit', question: 'Can we switch from Claude to another model later?', answer: 'Yes. We put every model call behind one small layer in your code, so a switch means changing a setting and re-running the test set we built with you. The test set matters more than the switch, because it tells you whether the new model still gets your edge cases right. Prompts usually need some tuning after a move, and we quote that work before we start.' },
  { id: 'Q07', category: 'faq-fit', question: 'Our team already likes Claude in the chat app. Why do we need a developer?', answer: 'The chat app answers questions. An agent does work inside your systems: it reads a purchase order, checks stock in NetSuite, drafts the order and waits for approval. That takes code that calls the Claude API, tools that read and write your systems, permission rules, logs and tests. Anthropic also asks that products built on its Agent SDK use API keys rather than a claude.ai sign-in.', sources: [{ href: SRC.sdk, label: 'Anthropic Agent SDK overview, sign-in note' }] },
  { id: 'Q08', category: 'faq-fit', question: 'Should we use LangChain, n8n, the OpenAI Agents SDK or Copilot Studio instead?', answer: 'Each is a real route. LangChain has a ChatAnthropic integration, n8n has an Anthropic Chat Model node, and the OpenAI Agents SDK reaches other providers through beta adapters such as LiteLLM. Microsoft describes Copilot Studio as a graphical, low-code studio for agents. A no-code flow suits a simple job your team edits itself. We write code when the agent needs custom checks, an approval queue and a test set run on every change.', sources: [{ href: SRC.langchain, label: 'LangChain: ChatAnthropic' }, { href: SRC.n8n, label: 'n8n: Anthropic Chat Model node' }, { href: SRC.openaiSdk, label: 'OpenAI Agents SDK: models' }, { href: SRC.copilot, label: 'Microsoft Learn: Copilot Studio' }, { href: '/blog/copilot-studio-vs-custom-ai-agents-2026', label: 'Our Copilot Studio vs custom agents comparison', internal: true }] },
  { id: 'Q09', category: 'faq-build', question: 'What is the Claude Agent SDK, and will you use it?', answer: 'It is Anthropic’s library for building agents in Python or TypeScript, with built-in tools, sessions, permission rules and MCP connections. We use it when the agent works with files, runs code or needs long sessions. For a narrow job, such as reading one type of email, a direct Claude API call with a few tools is simpler to test.', sources: [{ href: SRC.sdk, label: 'Anthropic Agent SDK overview' }] },
  { id: 'Q10', category: 'faq-build', question: 'What is an MCP server, and do we need one?', answer: 'MCP, the Model Context Protocol, is an open standard for connecting AI apps to outside systems. An MCP server is a small program that exposes chosen actions from your ERP or CRM, such as look up order or create draft quote. You need one when more than one AI tool should use the same data, or when staff want Claude on their desktop to reach your systems. It exposes only the actions you approve.', sources: [{ href: SRC.mcp, label: 'Model Context Protocol introduction' }] },
  { id: 'Q11', category: 'faq-build', question: 'How does Claude actually use our software?', answer: 'Through tool use, which Anthropic also calls function calling. We describe each tool to Claude with a name, a description and an input format. When Claude decides it needs a tool, it returns a structured request. Our code runs that request against your system, checks the result and sends it back. Claude never touches your database directly. Our code sits in the middle and can refuse a request.', sources: [{ href: SRC.tools, label: 'Anthropic tool use overview' }] },
  { id: 'Q12', category: 'faq-build', question: 'Which business systems can a Claude agent connect to?', answer: 'Any system with an API. A Claude agent can reach NetSuite, Odoo, SAP Business One, Salesforce, HubSpot, Zendesk, Gorgias, Shopify, WooCommerce, QuickBooks or Xero through that system’s own API, plus email, Slack and punchout catalogs. If a system has no API, we tell you on the first call, because the agent may then need file exports or a person in the loop, and that changes the plan and the price.', sources: [{ href: '/services/netsuite-ai-agents', label: 'NetSuite AI agents', internal: true }, { href: '/services/odoo-ai-agents', label: 'Odoo AI agents', internal: true }] },
  { id: 'Q13', category: 'faq-build', question: 'Can a Claude agent work with our HubSpot or Salesforce records?', answer: 'Yes. A common job: read an inbound email or form, find or create the contact, log the activity, score the lead against your rules and draft a reply for a rep to approve. The agent works through the CRM’s own API, using an account that has only the permissions it needs. Every write is logged, so your admin can see what changed and why.', sources: [{ href: '/services/crm-ai-agents', label: 'CRM AI agents', internal: true }] },
  { id: 'Q14', category: 'faq-build', question: 'Can a Claude agent handle punchout orders and emailed POs?', answer: 'Yes. Punchout lets a buyer’s procurement system, such as Coupa or SAP Ariba, open your catalog and send back a cart. The agent checks each cart against your contract prices and drafts the order in your ERP. Any line it cannot match goes to a person.' },
  { id: 'Q15', category: 'faq-build', question: 'How long does a Claude agent project take?', answer: 'A pilot on one narrow workflow usually takes two to four weeks. A production agent with permissions, logs, approvals and monitoring usually takes six to twelve weeks. Most of that time goes into connecting your systems and testing edge cases. You see the demo on your own data before any contract, so you judge the agent before the clock starts.' },
  { id: 'Q16', category: 'faq-data', question: 'Will Anthropic train its models on our data?', answer: 'Not by default. Anthropic’s privacy center says it does not use inputs or outputs from its commercial products, which include the API, to train its models by default. Training can happen if you opt in, for example by sending feedback. We still send the model only the fields each step needs, and we keep customer details out of prompts wherever the job allows it.', sources: [{ href: SRC.training, label: 'Anthropic privacy center: model training' }] },
  { id: 'Q17', category: 'faq-data', question: 'How long does Anthropic keep what our agent sends?', answer: 'Anthropic says it deletes API inputs and outputs on its backend within 30 days by default. Some cases differ, such as content flagged in a policy review or a signed zero data retention agreement. A different retention term is an agreement between you and Anthropic or your cloud provider. So when your security team needs one, we set the agent up on an account in your company’s name.', sources: [{ href: SRC.retention, label: 'Anthropic privacy center: data retention' }] },
  { id: 'Q18', category: 'faq-data', question: 'Whose Claude account does the agent run on?', answer: 'Yours, if you want it. We set the agent up on your own Anthropic API key or your Bedrock, Google Cloud or Foundry account, so usage bills go straight to you at cost and you can see every request in your own console. If you prefer, we manage the account and pass usage through with no markup. Either way, we keep managing the servers, AI models, APIs and maintenance.' },
  { id: 'Q19', category: 'faq-data', question: 'How do you stop the agent from doing something wrong?', answer: 'The agent can only call the tools we give it, and each tool checks its inputs. Anything that moves money waits for a person, and we re-run a set of your real past cases after every change.' },
  { id: 'Q20', category: 'faq-data', question: 'Can a Claude agent make things up?', answer: 'Any language model can. So our code checks the output against the source. When an agent pulls a name, an amount or a SKU from a document, the code confirms that value exists in the document or in your system before saving it. Our Washington Law Group agent runs this check on every name it extracts, and it has caught and dropped invented names in real runs.' },
  { id: 'Q21', category: 'faq-cost', question: 'How much does it cost to build an AI agent on Claude?', answer: 'As a market reference, development firm ProductCrafters puts 2026 AI agent builds at about $5,000 to $180,000 or more. The number of systems the agent reads and writes moves the price far more than the choice of Claude, because connecting systems and testing edge cases is the same work on any model. Model choice changes your usage bill, which goes to your own account. FactoryJet quotes a fixed price in writing after one scoping call.', sources: [{ href: SRC.cost, label: 'ProductCrafters: AI agent development cost' }] },
  { id: 'Q22', category: 'faq-terms', question: 'Do we own the code and the prompts?', answer: 'Yes, from day one. The code lives in your own Git repository, along with the prompts, the tool definitions, the test set and any MCP server we write. There is no license fee from us. You can keep us on for support, hand the work to your own team or bring in another firm. Claude usage itself is between you and Anthropic or your cloud provider.' },
  { id: 'Q23', category: 'faq-terms', question: 'What happens after the agent goes live?', answer: 'Defects are fixed inside the build price for a cover period we agree before work starts. After that, support is optional: each change is quoted and approved before we start, with no monthly minimum. Agents drift when your prices, policies or data change, and Anthropic retires older models on a published schedule, so we can watch accuracy and move you to a newer model when one is due.', sources: [{ href: '/services/ai-agent-monitoring', label: 'AI agent monitoring and support', internal: true }] },
  { id: 'Q24', category: 'faq-terms', question: 'Can we send you an RFP or a written brief?', answer: 'Yes, please do. Email it to connect@factoryjet.com, or attach it at the second step of the form on this page. A useful brief names the job, the systems it touches, a rough weekly volume and who checks the work today. Bhavesh, our founder, reads every brief and replies within 24 hours with questions or a time for a scoping call.' },
  { id: 'Q25', category: 'faq-terms', question: 'Do you build Claude agents for companies outside the US?', answer: 'Yes. We work with clients in the US, the UK, Australia and other countries. If your data has to stay in one region, we check which Claude endpoints your cloud offers there before we design the agent, because that can decide whether the agent runs on the Claude API or inside Bedrock, Google Cloud or Foundry.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
};

// Freshness signal. Bump only when the page content actually changes.
const PAGE_PUBLISHED = '2026-10-29';
const PAGE_MODIFIED = '2026-10-31';
const PAGE_MODIFIED_LABEL = '31 October 2026';

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${url}#webpage`,
  url,
  name: title,
  description,
  datePublished: PAGE_PUBLISHED,
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': ORG_ID },
  about: { '@id': `${url}#service` },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${url}#service`,
  name: 'Claude AI Agent Development',
  serviceType: 'Claude AI agent development',
  description:
    'FactoryJet designs, builds, integrates and supports custom AI agents built on Anthropic’s Claude models through the Claude API, tool use, MCP servers and the Claude Agent SDK, connected through their APIs to systems such as NetSuite, Odoo, Salesforce, HubSpot, Zendesk and Shopify, with human approval on decisions that matter. The client owns the code.',
  provider: { '@id': ORG_ID },
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
  ],
  url,
};

const BRIEF_MAILTO = `mailto:connect@factoryjet.com?subject=${encodeURIComponent('Claude agent brief')}`;

const PAGE_STYLE = `
.aiAgentPage .claudeSwipeHint { display: none; margin: 0 0 10px; color: var(--muted); font-size: 13px; }
@media (max-width: 767px) { .aiAgentPage .claudeSwipeHint { display: block; } }
`;

function FaqAccordion() {
  return (
    <div className="faqlist">
      {FAQ_CATEGORIES.map((category) => (
        <Fragment key={category.id}>
          <div className="faq-category" id={category.id}>{category.label}</div>
          {FAQS.filter((faq) => faq.category === category.id).map((faq) => (
            <details className="faqitem" data-faq-item key={faq.id}>
              <summary data-faq-question>
                <span className="qid">{faq.id}</span>
                <span className="qtext">{faq.question}</span>
                <span className="chev" aria-hidden="true">+</span>
              </summary>
              <p className="ans" data-faq-answer>{faq.answer}</p>
              {faq.sources && faq.sources.length > 0 && (
                <p className="ans" style={{ marginTop: -12, fontSize: 13 }}>
                  {faq.sources.length > 1 ? 'Sources: ' : 'Source: '}
                  {faq.sources.map((s, i) => (
                    <Fragment key={s.href}>
                      {i > 0 && ', '}
                      {s.internal ? <a href={s.href} style={LINK}>{s.label}</a> : <Ext href={s.href}>{s.label}</Ext>}
                    </Fragment>
                  ))}
                  .
                </p>
              )}
            </details>
          ))}
        </Fragment>
      ))}
    </div>
  );
}

export default function ClaudeAiAgentDevelopmentPage() {
  return (
    <>
      <JsonLd id="claude-agent-faq-schema" data={faqSchema} />
      <JsonLd id="claude-agent-webpage-schema" data={webPageSchema} />
      <JsonLd id="claude-agent-service-schema" data={serviceSchema} />
      <BreadcrumbSchema items={breadcrumbs} />
      <style>{PAGE_STYLE}</style>
      <SiteHeader cta={{ label: 'See a demo on my data', href: '#tell-us' }} />
      <div className="aiAgentPage">
        <nav className="crumbs" aria-label="Breadcrumb">
          <div className="wrap">
            {breadcrumbs.map((item, index) => (
              <Fragment key={item.url}>
                {index > 0 && ' / '}
                {index === breadcrumbs.length - 1 ? <b aria-current="page">{item.name}</b> : <a href={item.url}>{item.name}</a>}
              </Fragment>
            ))}
          </div>
        </nav>
        <main id="claude-agent-content">
          <section className="hero" id="hero">
            <div className="wrap hero-grid">
              <div className="hero-copy">
                <div className="eyebrow">Service Specification</div>
                <h1>Claude AI Agent Development, <span className="hero-emphasis">Built Into the Systems You Already Run</span></h1>
                <p className="lead">FactoryJet is a Claude AI developer for businesses. We build custom agents on Anthropic&apos;s Claude models with the Claude API, tool use, MCP servers and the Claude Agent SDK, and connect them to NetSuite, Odoo, Salesforce, HubSpot, Zendesk or Shopify through each system&apos;s API. A person approves anything that matters. You own the code.</p>
                <p style={{ marginTop: 16, color: 'var(--muted)', fontSize: 14, lineHeight: 1.7 }}>FactoryJet is an independent development firm. We are not affiliated with Anthropic, and Claude is Anthropic&apos;s product.</p>
                <p style={{ marginTop: 8, color: 'var(--muted)', fontSize: 14, lineHeight: 1.7 }}>By Bhavesh Barot, founder of FactoryJet (founded 2014). Updated <time dateTime={PAGE_MODIFIED}>{PAGE_MODIFIED_LABEL}</time>.</p>
                <div className="actions">
                  <a className="btn btn-primary" href="#tell-us">See a demo on my data</a>
                  <a className="btn btn-ghost" href="#short-answers">Read the short answers</a>
                </div>
              </div>
              <div className="finalcta-form">
                <HeroInlineForm
                  region="us"
                  source="services_claude_ai_agent_development_hero"
                  service="Claude AI Agent Development"
                  submitLabel="See a demo on my data"
                  trustText="Working software on your own data before you sign. Founder replies within 24 hours."
                />
              </div>
            </div>
          </section>
          <div className="ledger">
            <div className="wrap">
              <div className="ledgercell">
                <div className="k">Founded</div>
                <div className="v">
                  <strong className="ledger-number">2014</strong>
                </div>
              </div>
              <div className="ledgercell">
                <div className="k">Before you sign</div>
                <div className="v">We show you the agent working on your own data before you sign a contract.</div>
              </div>
              <div className="ledgercell">
                <div className="k">Pricing</div>
                <div className="v">A fixed price per phase, quoted in writing. Changes quoted and approved per request. No monthly minimum.</div>
              </div>
              <div className="ledgercell">
                <div className="k">Track record</div>
                <div className="v"><strong className="ledger-number">500+</strong> businesses served across web, commerce, and AI engagements.</div>
              </div>
            </div>
          </div>

          <section className="section vlog" id="short-answers">
            <div className="wrap">
              <div className="section-head">
                <div className="eyebrow">Answer First</div>
                <h2>Claude AI Agent Development: The Short Answers</h2>
                <p style={{ marginTop: 18, color: 'var(--body)', fontSize: 16, lineHeight: 1.75 }}>The six things buyers ask us first about building on Claude.</p>
              </div>
              <ul className="ventries" style={LIST_RESET}>
                {SHORT_ANSWERS.map((item) => (
                  <li className="ventry" key={item.tag}>
                    <span className="vtag">{item.tag}</span>
                    <h3>{item.q}</h3>
                    <p>{item.a}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="section capabilities" id="building-blocks">
            <div className="wrap">
              <div className="section-head">
                <div className="eyebrow">Building Blocks</div>
                <h2>The Four Parts of Claude We Build With</h2>
                <p style={{ marginTop: 18, color: 'var(--body)', fontSize: 16, lineHeight: 1.75 }}>Each one solves a different problem. Most agents use one or two of them. We checked every fact in this section against Anthropic&apos;s own documentation, most recently on 31 October 2026.</p>
              </div>
              <ul className="capgrid" style={LIST_RESET}>
                {BLOCKS.map((b) => (
                  <li className="cap" key={b.id}>
                    <div className="caphead">
                      <span className="capid">{b.id}</span>
                    </div>
                    <h3>{b.title}</h3>
                    <p>{b.body}</p>
                    <ul className="systags" style={{ listStyle: 'none', padding: 0, marginBottom: 0 }}>
                      {b.tags.map((tag) => <li key={tag}><span>{tag}</span></li>)}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="section facts" id="jobs">
            <div className="wrap">
              <div className="section-head">
                <div className="eyebrow">§ Jobs</div>
                <h2>Six Jobs We Build Claude Agents to Do</h2>
              </div>
              <ol className="factlist" style={LIST_RESET}>
                {JOBS.map((job, i) => (
                  <li className="fact" key={job.title}>
                    <div className="sec">§{String(i + 1).padStart(2, '0')}</div>
                    <p>
                      <strong style={{ color: 'var(--ink)' }}>
                        {job.href ? <a href={job.href} style={LINK}>{job.title}</a> : job.title}.
                      </strong>{' '}
                      {job.body}
                    </p>
                  </li>
                ))}
              </ol>
              <p style={{ marginTop: 24, color: 'var(--body)', lineHeight: 1.75 }}>If the model is still an open question, our <a href="/services/ai-agent-development" style={LINK}>AI agent development</a> page covers the same work without a fixed model, and our <a href="/services/ai-integration-services" style={LINK}>AI integration services</a> connect Claude, GPT or Gemini to tools you already run.</p>
            </div>
          </section>

          <hr className="divider" />

          <section className="section comparison" id="claude-or-another-model">
            <div className="wrap">
              <div className="section-head">
                <div className="eyebrow">Compare</div>
                <h2>Claude or Another Model? How We Decide</h2>
              </div>
              <p className="claudeSwipeHint">Swipe sideways to see every column.</p>
              <div className="tablewrap" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
                <table style={{ minWidth: 740 }}>
                  <thead>
                    <tr>
                      <th>The job</th>
                      <th>What we usually test first</th>
                      <th>Why</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MODEL_ROWS.map((row) => (
                      <tr key={row.job}>
                        <th>{row.job}</th>
                        <td>{row.pick}</td>
                        <td>{row.why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p style={{ marginTop: 24, color: 'var(--body)', lineHeight: 1.75 }}>Model names come from Anthropic&apos;s <Ext href={SRC.models}>models overview</Ext> as of 31 October 2026, and they change. Your build document names the exact model ID, and the test set we build with you tells us when a newer model is worth the move.</p>
            </div>
          </section>

          <section className="finalcta" id="tell-us">
            <div className="wrap">
              <div>
                <div className="eyebrow">Next Step</div>
                <h2 style={{ marginTop: 16 }}>Send Your Claude Agent Brief or RFP</h2>
                <p>Email your written brief, RFP (request for proposal) or list of requirements to <a href={BRIEF_MAILTO} style={LINK}>connect@factoryjet.com</a>, or attach it at the second step of this form. If you have no brief yet, send three answers:</p>
                <ol style={{ margin: '22px 0 0', paddingLeft: 20, listStyle: 'decimal', color: 'var(--body)', fontSize: 15, lineHeight: 1.75 }}>
                  <li><strong style={{ color: 'var(--ink)' }}>What starts the work?</strong> An email, a form, a ticket, an RFQ or a punchout order.</li>
                  <li><strong style={{ color: 'var(--ink)' }}>Which systems does it touch?</strong> For example NetSuite, HubSpot, Salesforce or Shopify.</li>
                  <li><strong style={{ color: 'var(--ink)' }}>Is Claude already chosen?</strong> If your company has approved it, or buys it through AWS, Google Cloud or Microsoft, tell us.</li>
                </ol>
              </div>
              <div className="finalcta-form">
                <HeroInlineForm
                  region="us"
                  source="services_claude_ai_agent_development_tell_us"
                  service="Claude AI Agent Development"
                  submitLabel="See a demo on my data"
                  trustText="Working software on your own data before you sign."
                />
              </div>
            </div>
          </section>

          <section className="section facts" id="data-handling">
            <div className="wrap">
              <div className="section-head">
                <div className="eyebrow">§ Data</div>
                <h2>How Your Data Moves Through a Claude Agent</h2>
              </div>
              <ol className="factlist" style={LIST_RESET}>
                {DATA_STEPS.slice(0, 2).map((step, i) => (
                  <li className="fact" key={step}>
                    <div className="sec">§{String(i + 1).padStart(2, '0')}</div>
                    <p>{step}</p>
                  </li>
                ))}
                <li className="fact">
                  <div className="sec">§03</div>
                  <p>Anthropic says it does not train on inputs or outputs from its commercial products by default, and that it deletes API inputs and outputs within 30 days unless a different term, such as zero data retention, is agreed (<Ext href={SRC.retention}>Anthropic privacy center</Ext>).</p>
                </li>
                {DATA_STEPS.slice(2).map((step, i) => (
                  <li className="fact" key={step}>
                    <div className="sec">§{String(i + 4).padStart(2, '0')}</div>
                    <p>{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="section process" id="build">
            <div className="wrap">
              <div className="section-head">
                <div className="eyebrow">Process</div>
                <h2>How to Build an AI Agent With Claude: Our Five Steps</h2>
                <p>
                  To build an AI agent with Claude, we pick one repeat job, describe your systems to Claude as tools, test
                  the agent on your past cases, then put it live with a person approving each write. Each phase is
                  scoped, priced and signed on its own, in writing, and you decide on the next one after seeing the last
                  one work.
                </p>
              </div>
              <ol className="timeline" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {PHASES.map((p, i) => (
                  <li className="tnode" key={p.title}>
                    <div className="idx">{String(i + 1).padStart(2, '0')}</div>
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                  </li>
                ))}
              </ol>
              <div className="timelineAction">
                <a className="btn btn-primary" href="#tell-us">See a demo on my data</a>
              </div>
            </div>
          </section>

          <section className="section teamSummary" id="terms">
            <div className="wrap">
              <div className="section-head">
                <div className="eyebrow">For the person who signs</div>
                <h2>What a Claude Agent Contract With FactoryJet Includes</h2>
                <p>The same terms we use on every AI agent project, with the Claude account spelled out.</p>
              </div>
              <dl className="summarycard">
                {TERMS.map((row) => (
                  <div className="summaryrow" key={row.k}>
                    <dt>{row.k}</dt>
                    <dd>{row.v}</dd>
                  </div>
                ))}
              </dl>
              <p style={{ marginTop: 18, color: 'var(--body)', fontSize: 15, lineHeight: 1.75 }}>After launch we can watch accuracy and keep the agent current. Our <a href="/services/ai-agent-monitoring" style={LINK}>AI agent monitoring and support</a> page covers that work.</p>
            </div>
          </section>

          <section className="section proofByJob" id="proof">
            <div className="wrap">
              <div className="section-head">
                <div className="eyebrow">Proof</div>
                <h2>AI Agents We Have Built, and the Model Each Runs On</h2>
                <p>Commerceflo runs part of its AI on the Claude API. The Washington Law Group agent runs on Gemini, because that job needed live search.</p>
              </div>
              <ul className="proofgrid" style={LIST_RESET}>
                {PROOF.map((p) => (
                  <li className="ventry" key={p.title}>
                    <span className="vtag">{p.tag}</span>
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                    <p className="prooflinks">
                      <a href={p.href}>{p.label}</a>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="section faq" id="faq">
            <div className="wrap">
              <div className="faqwrap">
                <div className="faqintro">
                  <div className="eyebrow">FAQ</div>
                  <h2 className="faqHeading">Claude AI Agent Development FAQs</h2>
                  <p>Real questions buyers ask, no hedging.</p>
                  <nav className="faq-catnav" aria-label="FAQ categories">
                    {FAQ_CATEGORIES.map((category) => (
                      <a key={category.id} href={`#${category.id}`}>{category.label}</a>
                    ))}
                  </nav>
                </div>
                <FaqAccordion />
              </div>
            </div>
          </section>

          <section className="section referencesSection references" id="references">
            <div className="wrap">
              <div className="eyebrow">References</div>
              <ul className="refs" style={{ listStyle: 'none', padding: 0, marginBottom: 0 }}>
                <li><a href={SRC.models} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>Anthropic: Claude models overview</a></li>
                <li><a href={SRC.tools} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>Anthropic: Tool use with Claude</a></li>
                <li><a href={SRC.sdk} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>Anthropic: Agent SDK overview</a></li>
                <li><a href={SRC.mcp} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>Model Context Protocol: introduction</a></li>
                <li><a href={SRC.training} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>Anthropic privacy center: model training</a></li>
                <li><a href={SRC.retention} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>Anthropic privacy center: data retention</a></li>
                <li><a href={SRC.cost} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>ProductCrafters: AI agent development cost</a></li>
                <li><a href={SRC.cfPrivacy} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>Commerceflo: privacy policy, AI data processing</a></li>
                <li><a href={SRC.copilot} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>Microsoft Learn: Copilot Studio overview</a></li>
                <li><a href="/blog/custom-mcp-server-erp-crm-mid-sized-companies-2026" style={{ display: 'block' }}>Custom MCP server for your ERP or CRM</a></li>
              </ul>
            </div>
          </section>

          <section className="finalcta" id="finalcta">
            <div className="wrap">
              <div>
                <h2>Tell Us the Job, We&apos;ll Tell You If Claude Fits</h2>
                <p>Send the brief, the RFP or three lines about the workflow. We&apos;ll tell you whether it is a Claude agent, another model or a plain automation, before you spend anything.</p>
              </div>
              <div className="finalcta-form">
                <HeroInlineForm
                  region="us"
                  source="services_claude_ai_agent_development_final"
                  service="Claude AI Agent Development"
                  submitLabel="See a demo on my data"
                  trustText="Working software on your own data before you sign."
                />
              </div>
            </div>
          </section>
        </main>
      </div>
      <SiteFooter />
    </>
  );
}

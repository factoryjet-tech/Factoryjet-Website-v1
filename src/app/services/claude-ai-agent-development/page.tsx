import { Fragment, type ReactNode } from 'react';
import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import JsonLd from '@/components/JsonLd';
import { ORG_ID } from '@/data/organization';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import '@/components/v2/AiAgentDevelopmentSections.css';

/* Claude AI agent development (W2-4, built 2026-10-29).
   Demand: buyer question N18 ("who builds agents on Claude / the Anthropic API")
   named FactoryJet in 0 of 13 AI answers. No Google volume measured.
   Delivery of Claude-built agents, HubSpot and punchout work confirmed by
   Bhavesh on 29 Oct 2026; Salesforce on 17 Oct.
   Every Claude product fact below was read from Anthropic's own docs on
   2026-10-29 (models overview, tool use overview, Agent SDK overview, privacy
   center). Model names change: re-check the models overview before editing.
   This page must read as an independent services firm: no Anthropic logos or
   brand styling, no partner claim, and the "not affiliated" line appears once.
   Layout and classes mirror /services/ai-agent-development and reuse its
   stylesheet. Proof: Commerceflo (made by FactoryJet, AI features partly on the
   Claude API per commerceflo.ai) and Washington Law Group (runs on a different
   model, said plainly). No running-cost or token-price numbers, by rule. */

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

/* Primary sources, fetched 2026-10-29. */
const SRC = {
  models: 'https://platform.claude.com/docs/en/about-claude/models/overview',
  tools: 'https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview',
  sdk: 'https://code.claude.com/docs/en/agent-sdk/overview',
  mcp: 'https://modelcontextprotocol.io/introduction',
  training: 'https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training',
  retention: 'https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data',
  cost: 'https://productcrafters.io/blog/how-much-does-it-cost-to-build-an-ai-agent/',
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
    q: 'What does a Claude AI agent do for a business?',
    a: <>It takes one repeat job and does it inside your systems, using Claude to read and decide and your own rules to check the result. Examples: reading emailed purchase orders and drafting the sales order in NetSuite or Odoo, answering order tickets in Zendesk or Gorgias with live Shopify data, and logging and scoring inbound leads in HubSpot or Salesforce. A person approves anything that moves money.</>,
  },
  {
    tag: 'BUILDING BLOCKS',
    q: 'Which parts of Claude do you build with?',
    a: <>Four, picked per job. The Claude API with tool use for most agents. MCP servers when several AI tools need the same data. The Claude Agent SDK when an agent works with files, code or long sessions. And Claude inside Amazon Bedrock, Google Cloud or Microsoft Foundry when your company already buys cloud there. Anthropic lists all four routes in its <Ext href={SRC.models}>models overview</Ext>.</>,
  },
  {
    tag: 'FIT',
    q: 'When is Claude the right model?',
    a: <>When the job means long documents, many tool calls in a row, or asking a person when something is missing. Every current Claude model reads up to 1 million tokens at once, per Anthropic&apos;s docs on 29 October 2026. When the job needs live Google search or your security team has approved another provider, we build on that instead. We test both on your examples during the demo.</>,
  },
  {
    tag: 'YOUR DATA',
    q: 'Does Anthropic train on what our agent sends?',
    a: <>Not by default. Anthropic&apos;s <Ext href={SRC.training}>privacy center</Ext> says it does not use inputs or outputs from its commercial products to train its models by default, and it deletes API inputs and outputs within 30 days unless another term is agreed. The agent runs on your own account, and our code sends the model only the fields each step needs.</>,
  },
  {
    tag: 'COST',
    q: 'How much does a Claude agent cost to build?',
    a: <>As a market reference, development firm <Ext href={SRC.cost}>ProductCrafters</Ext> puts 2026 custom AI agent builds at about $5,000 to $180,000 or more. The number of systems the agent reads and writes to moves the price far more than picking Claude does. FactoryJet quotes a fixed price per phase, in writing, after one scoping call.</>,
  },
  {
    tag: 'TIMELINE',
    q: 'How long does it take?',
    a: <>A pilot on one narrow workflow usually takes two to four weeks. A production agent with permissions, logs, approvals and monitoring usually takes six to twelve weeks. Most of that time goes into connecting your systems and testing edge cases. The prompts are the small part.</>,
  },
];

const BLOCKS: { id: string; title: string; body: ReactNode; tags: string[] }[] = [
  {
    id: 'CAP‑01',
    title: 'Claude API with tool use',
    body: <>We describe each of your actions to Claude as a tool: a name, a plain description and an input format. Claude returns a structured request, and our code runs it against your system, checks the answer and sends it back. Anthropic calls these client tools, because they run in your application, not on Anthropic&apos;s servers (<Ext href={SRC.tools}>tool use docs</Ext>).</>,
    tags: ['Messages API', 'Tool use', 'Strict schemas'],
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
    body: <>Anthropic&apos;s library for building agents in Python or TypeScript. It gives an agent the same loop that powers Claude Code, with built-in tools, hooks, subagents, sessions and permission rules that decide which tools run on their own and which wait for approval (<Ext href={SRC.sdk}>Agent SDK docs</Ext>). We reach for it when the job involves files, code or long sessions.</>,
    tags: ['Python', 'TypeScript', 'Hooks', 'Subagents'],
  },
  {
    id: 'CAP‑04',
    title: 'Claude inside your cloud',
    body: <>Claude models are offered through the Claude API, Amazon Bedrock, Google Cloud and Microsoft Foundry. Running the agent in the cloud you already pay for keeps billing, access control and security review in one place. Anthropic notes that Bedrock offers regional endpoints with guaranteed data routing for recent models.</>,
    tags: ['Amazon Bedrock', 'Google Cloud', 'Microsoft Foundry'],
  },
];

const JOBS: { title: string; body: string }[] = [
  { title: 'Order intake from emailed POs', body: 'Reads the purchase order, matches each line to your SKUs and price list, and drafts the sales order in NetSuite, Odoo or Shopify. Lines that do not match go to a person with the reason.' },
  { title: 'RFQ to draft quote', body: 'Pulls quantities and specs from the request, applies your pricing rules in code, and holds the quote for an estimator to approve before it goes out.' },
  { title: 'Punchout and procurement orders', body: 'Handles the orders that arrive after a buyer shops your catalog from their procurement system, and flags any cart that breaks your contract prices.' },
  { title: 'Support tickets with live order data', body: 'Answers where-is-my-order, returns and address changes in Zendesk or Gorgias from live store data. Refunds above your limit go to a person.' },
  { title: 'CRM lead triage', body: 'Finds or creates the contact in HubSpot or Salesforce, logs the activity, scores the lead against your rules and drafts a reply for a rep to send.' },
  { title: 'Long document review', body: 'Reads contracts, supplier terms or policy files in one pass and lists the clauses your team asked to see, with the page each came from.' },
];

const MODEL_ROWS: { job: string; pick: string; why: string }[] = [
  { job: 'Sorting, extraction and routing at high volume', pick: 'Claude Haiku', why: 'Anthropic describes Haiku 5.5 as the model for high-volume, latency-sensitive tasks such as classification, extraction and routing.' },
  { job: 'Most multi-step agents', pick: 'Claude Sonnet', why: 'Anthropic calls Sonnet 5.5 the best mix of speed and intelligence. Most production steps we test start here.' },
  { job: 'Hard cases and long tool chains', pick: 'Claude Opus', why: 'Anthropic’s tool use docs say Claude Opus is much more likely to notice a missing detail and ask for it, instead of guessing.' },
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
  { k: 'How it is priced', v: 'One fixed price per phase, in writing, paid at milestones. You decide on each next phase after seeing the last one work.' },
  { k: 'What you own', v: 'The code, prompts, tool definitions, test set and any MCP server, in your own repository from day one. No license fee from us.' },
  { k: 'Claude usage', v: 'Runs on your own Anthropic, Bedrock, Google Cloud or Foundry account, billed to you at cost with no markup.' },
  { k: 'After launch', v: 'Defects fixed inside the build price for a cover period agreed before work starts. Support is optional, each change quoted and approved, no monthly minimum.' },
  { k: 'Who you deal with', v: 'Bhavesh Barot, founder of FactoryJet. He replies within 24 hours.' },
];

const PROOF: { tag: string; title: string; body: string; href: string; label: string }[] = [
  {
    tag: 'BUILT ON CLAUDE',
    title: 'Commerceflo',
    body: 'Commerceflo is the AI commerce platform FactoryJet makes. Its privacy policy says its AI features run in part on the Claude API, and its pricing page says Claude Haiku handles fast, high-volume jobs while Claude Sonnet handles harder analysis, with routing that picks a model for each job. The GPSUK trade store runs on Commerceflo.',
    href: '/commerceflo',
    label: 'See how Commerceflo works',
  },
  {
    tag: 'AI AGENT · LIVE',
    title: 'Washington Law Group',
    body: 'An agent that reads news and police sources across all 50 states every two hours and emails the firm each crash that qualifies. It runs on Gemini, not Claude, because the job needed live search. The guardrail carries over: every name the model returns is checked against the article text before it is saved.',
    href: '/case-studies/washington-law-group-accident-detection-agent',
    label: 'Read the case study',
  },
];

type Faq = { id: string; category: string; question: string; answer: string };

const FAQ_CATEGORIES = [
  { id: 'faq-fit', label: 'Choosing Claude' },
  { id: 'faq-build', label: 'How we build' },
  { id: 'faq-data', label: 'Data and safety' },
  { id: 'faq-cost', label: 'Cost' },
  { id: 'faq-terms', label: 'Terms and next steps' },
];

/* Single source for the visible FAQ and the FAQPage JSON-LD. */
const FAQS: Faq[] = [
  { id: 'Q01', category: 'faq-fit', question: 'Why would we build our agent on Claude instead of GPT or Gemini?', answer: 'Pick the model per job, not by brand. Claude does well on long documents and on many tool calls in a row, and every current Claude model reads up to 1 million tokens at once, which suits contracts, catalogs and long email threads. GPT or Gemini can win on a given task. During the demo we run your real examples on two models and show you the results side by side before you commit.' },
  { id: 'Q02', category: 'faq-fit', question: 'Which Claude model will our agent use?', answer: 'It depends on the step. Anthropic’s models overview, checked on 29 October 2026, describes Haiku 5.5 for high-volume sorting, extraction and routing, Sonnet 5.5 as the best mix of speed and intelligence, and Opus 5.5 for long agentic work. Many agents use two: a fast model to sort incoming work and a stronger one for the hard cases. We name the exact model ID in your build document.' },
  { id: 'Q03', category: 'faq-fit', question: 'Can you build on Claude if our company already uses AWS, Google Cloud or Azure?', answer: 'Usually, yes. Anthropic lists Claude models on the Claude API, Amazon Bedrock, Google Cloud and Microsoft Foundry. Running Claude in the cloud you already pay for keeps billing, access control and security review in one place, and Bedrock offers regional endpoints that keep data routing inside a region. We confirm which models your cloud offers in your region before we quote.' },
  { id: 'Q04', category: 'faq-fit', question: 'Can we switch from Claude to another model later?', answer: 'Yes. We put every model call behind one small layer in your code, so a switch means changing a setting and re-running the test set we built with you. The test set matters more than the switch, because it tells you whether the new model still gets your edge cases right. Prompts usually need some tuning after a move, and we quote that work before we start.' },
  { id: 'Q05', category: 'faq-fit', question: 'Our team already likes Claude in the chat app. Why do we need a developer?', answer: 'The chat app answers questions. An agent does work inside your systems: it reads a purchase order, checks stock in NetSuite, drafts the order and waits for approval. That takes code that calls the Claude API, tools that read and write your systems, permission rules, logs and tests. Anthropic also asks that products built on its Agent SDK use API keys rather than a claude.ai sign-in.' },
  { id: 'Q06', category: 'faq-build', question: 'What is the Claude Agent SDK, and will you use it?', answer: 'The Claude Agent SDK is Anthropic’s library for building agents in Python or TypeScript. It gives an agent the same tool loop that powers Claude Code, plus built-in tools, hooks, subagents, sessions, permissions and MCP connections. We use it when the agent works with files, runs code or needs long sessions. For a narrow job, such as reading one type of email, a direct Claude API call with a few tools is simpler to test.' },
  { id: 'Q07', category: 'faq-build', question: 'What is an MCP server, and do we need one?', answer: 'MCP, the Model Context Protocol, is an open standard for connecting AI apps to outside systems. An MCP server is a small program that exposes chosen actions from your ERP or CRM, such as look up order or create draft quote. You need one when more than one AI tool should use the same data, or when staff want Claude on their desktop to reach your systems. It exposes only the actions you approve.' },
  { id: 'Q08', category: 'faq-build', question: 'How does Claude actually use our software?', answer: 'Through tool use, which Anthropic also calls function calling. We describe each tool to Claude with a name, a description and an input format. When Claude decides it needs a tool, it returns a structured request. Our code runs that request against your system, checks the result and sends it back. Claude never touches your database directly. Our code sits in the middle and can refuse a request.' },
  { id: 'Q09', category: 'faq-build', question: 'Which business systems can a Claude agent connect to?', answer: 'Anything with an API. We connect agents to NetSuite, Odoo, SAP Business One, Salesforce, HubSpot, Zendesk, Gorgias, Shopify, WooCommerce, QuickBooks and Xero, plus email, Slack and punchout catalogs. If a system has no API, we tell you on the first call, because the agent may then need file exports or a person in the loop, and that changes the plan and the price.' },
  { id: 'Q10', category: 'faq-build', question: 'Can a Claude agent work with our HubSpot or Salesforce records?', answer: 'Yes. A common job: read an inbound email or form, find or create the contact, log the activity, score the lead against your rules and draft a reply for a rep to approve. The agent works through the CRM’s own API, using an account that has only the permissions it needs. Every write is logged, so your admin can see what changed and why.' },
  { id: 'Q11', category: 'faq-build', question: 'Can a Claude agent handle punchout orders and emailed POs?', answer: 'Yes. Punchout lets a buyer’s procurement system, such as Coupa or SAP Ariba, open your catalog and send back a cart. A Claude agent can read the purchase order that follows, match each line to your SKUs and price list, and draft the sales order in your ERP. Lines that do not match go to a person with the reason, so nothing is guessed.' },
  { id: 'Q12', category: 'faq-build', question: 'How long does a Claude agent project take?', answer: 'A pilot on one narrow workflow usually takes two to four weeks. A production agent with permissions, logs, approvals and monitoring usually takes six to twelve weeks. Most of that time goes into connecting your systems and testing edge cases, not into writing prompts. The demo on your own data comes first, before any contract, so you judge the agent before the clock starts.' },
  { id: 'Q13', category: 'faq-data', question: 'Will Anthropic train its models on our data?', answer: 'Not by default. Anthropic’s privacy center says it does not use inputs or outputs from its commercial products, which include the API, to train its models by default. Training can happen if you opt in, for example by sending feedback. We still send the model only the fields each step needs, and we keep customer details out of prompts wherever the job allows it.' },
  { id: 'Q14', category: 'faq-data', question: 'How long does Anthropic keep what our agent sends?', answer: 'Anthropic says it deletes API inputs and outputs on its backend within 30 days by default. Some cases differ, such as content flagged in a policy review or a signed zero data retention agreement. If your security team needs a different term, that agreement sits between you and Anthropic or your cloud provider, which is why we set the agent up on an account in your company’s name.' },
  { id: 'Q15', category: 'faq-data', question: 'Whose Claude account does the agent run on?', answer: 'Yours, if you want it. We set the agent up on your own Anthropic API key or your own Bedrock, Google Cloud or Foundry account, so usage bills go straight to you at cost, with no markup from us. You can see every request in your own console. If you prefer, we manage the account for you and pass the usage cost through without a markup.' },
  { id: 'Q16', category: 'faq-data', question: 'How do you stop the agent from doing something wrong?', answer: 'Three layers. First, the agent can only call the tools we give it, and each tool checks its inputs. Second, anything that moves money, changes a price or emails a customer waits for a person to approve it. Third, every step is logged, and we test the agent against a set of your real past cases before launch and again after every change.' },
  { id: 'Q17', category: 'faq-data', question: 'Can a Claude agent make things up?', answer: 'Any language model can. So our code checks the output against the source. When an agent pulls a name, an amount or a SKU from a document, the code confirms that value exists in the document or in your system before saving it. Our Washington Law Group agent runs this check on every name it extracts, and it has caught and dropped invented names in real runs.' },
  { id: 'Q18', category: 'faq-cost', question: 'How much does it cost to build an AI agent on Claude?', answer: 'As a market reference, development firm ProductCrafters puts 2026 custom AI agent builds at about $5,000 to $180,000 or more. The number of systems the agent reads and writes to moves the price far more than the choice of Claude. FactoryJet quotes a fixed price in writing for your scope after one scoping call, and you see the agent working on your own data first.' },
  { id: 'Q19', category: 'faq-cost', question: 'Does choosing Claude change the build price?', answer: 'Rarely by much. The build cost sits in connecting your systems, writing approval rules and testing edge cases, and that work is the same whichever model sits in the middle. Model choice changes your usage bill, which goes to your own account. For each step we pick the smallest model that passes your test set, and we show you the test results behind that choice.' },
  { id: 'Q20', category: 'faq-terms', question: 'Do we own the code and the prompts?', answer: 'Yes, from day one. The code lives in your own Git repository, along with the prompts, the tool definitions, the test set and any MCP server we write. There is no license fee from us. You can keep us on for support, hand the work to your own team or bring in another firm. Claude usage itself is between you and Anthropic or your cloud provider.' },
  { id: 'Q21', category: 'faq-terms', question: 'What happens after the agent goes live?', answer: 'Defects are fixed inside the build price for a cover period we agree before work starts. After that, support is optional: each change is quoted and approved before we start, with no monthly minimum. Agents drift when your prices, policies or data change, and Anthropic retires older models on a published schedule, so we can watch accuracy and move you to a newer model when one is due.' },
  { id: 'Q22', category: 'faq-terms', question: 'Can we send you an RFP or a written brief?', answer: 'Yes, please do. Email it to connect@factoryjet.com, or attach it at the second step of the form on this page. A useful brief names the job, the systems it touches, a rough weekly volume and who checks the work today. Bhavesh, our founder, reads every brief and replies within 24 hours with questions or a time for a scoping call.' },
  { id: 'Q23', category: 'faq-terms', question: 'Do you build Claude agents for companies outside the US?', answer: 'Yes. We work with clients in the US, the UK and other countries, and we schedule calls in your business hours. If your data has to stay in one region, we check which Claude endpoints your cloud offers there before we design the agent, because that can decide whether the agent runs on the Claude API or inside Bedrock, Google Cloud or Foundry.' },
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
const PAGE_MODIFIED = '2026-10-29';

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${url}#webpage`,
  url,
  name: title,
  description,
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
  serviceType: 'AI agent development',
  description:
    'FactoryJet designs, builds, integrates and supports custom AI agents built on Anthropic’s Claude models through the Claude API, tool use, MCP servers and the Claude Agent SDK, connected to NetSuite, Odoo, Salesforce, HubSpot, Zendesk and Shopify, with human approval on decisions that matter. The client owns the code.',
  provider: { '@id': ORG_ID },
  areaServed: { '@type': 'Country', name: 'United States' },
  url,
};

const BRIEF_MAILTO = `mailto:connect@factoryjet.com?subject=${encodeURIComponent('Claude agent brief')}`;

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
      <SiteHeader cta={{ label: 'Send us your brief', href: '#tell-us' }} />
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
                <p className="lead">Your team has picked Claude, or is leaning that way, and now someone has to build the agent, connect it to NetSuite, Odoo, Salesforce, HubSpot, Zendesk or Shopify, and keep it working. FactoryJet builds custom agents on Anthropic&apos;s Claude models with the Claude API, tool use, MCP servers and the Claude Agent SDK. A person approves anything that matters. You own the code.</p>
                <p style={{ marginTop: 16, color: 'var(--muted)', fontSize: 14, lineHeight: 1.7 }}>FactoryJet is an independent development firm. We are not affiliated with Anthropic, and Claude is Anthropic&apos;s product.</p>
                <div className="actions">
                  <a className="btn btn-primary" href="#tell-us">Send us your brief or RFP</a>
                  <a className="btn btn-ghost" href="#short-answers">Fit, data, cost, timeline</a>
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
                <div className="v">A fixed price per phase, in writing, quoted after one call. No hourly meter running in the background.</div>
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
              <div className="ventries">
                {SHORT_ANSWERS.map((item) => (
                  <div className="ventry" key={item.tag}>
                    <span className="vtag">{item.tag}</span>
                    <h3>{item.q}</h3>
                    <p>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section capabilities" id="building-blocks">
            <div className="wrap">
              <div className="section-head">
                <div className="eyebrow">Building Blocks</div>
                <h2>The Four Parts of Claude We Build With</h2>
                <p style={{ marginTop: 18, color: 'var(--body)', fontSize: 16, lineHeight: 1.75 }}>Each one solves a different problem. Most agents use one or two of them. We checked every fact in this section against Anthropic&apos;s own documentation on 29 October 2026.</p>
              </div>
              <div className="capgrid">
                {BLOCKS.map((b) => (
                  <div className="cap" key={b.id}>
                    <div className="caphead">
                      <span className="capid">{b.id}</span>
                    </div>
                    <h3>{b.title}</h3>
                    <p>{b.body}</p>
                    <div className="systags">
                      {b.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section facts" id="jobs">
            <div className="wrap">
              <div className="section-head">
                <div className="eyebrow">§ Jobs</div>
                <h2>Six Jobs We Build Claude Agents to Do</h2>
              </div>
              <div className="factlist">
                {JOBS.map((job, i) => (
                  <div className="fact" key={job.title}>
                    <div className="sec">§{String(i + 1).padStart(2, '0')}</div>
                    <p><strong style={{ color: 'var(--ink)' }}>{job.title}.</strong> {job.body}</p>
                  </div>
                ))}
              </div>
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
              <div className="tablewrap">
                <table>
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
              <p style={{ marginTop: 24, color: 'var(--body)', lineHeight: 1.75 }}>Model names come from Anthropic&apos;s <Ext href={SRC.models}>models overview</Ext> as of 29 October 2026, and they change. Your build document names the exact model ID, and the test set we build with you tells us when a newer model is worth the move.</p>
            </div>
          </section>

          <section className="finalcta" id="tell-us">
            <div className="wrap">
              <div>
                <div className="eyebrow">Next Step</div>
                <h2 style={{ marginTop: 16 }}>Send Us Your Brief or RFP</h2>
                <p>Already have a written brief, an RFP or a list of requirements? Email it to <a href={BRIEF_MAILTO} style={LINK}>connect@factoryjet.com</a> or attach it at the second step of this form. No brief yet? Send three answers:</p>
                <ol style={{ margin: '22px 0 0', paddingLeft: 20, color: 'var(--body)', fontSize: 15, lineHeight: 1.75 }}>
                  <li><strong style={{ color: 'var(--ink)' }}>What starts the work?</strong> An email, a form, a ticket, an RFQ or a punchout order.</li>
                  <li><strong style={{ color: 'var(--ink)' }}>Which systems does it touch?</strong> For example NetSuite, HubSpot, Salesforce or Shopify.</li>
                  <li><strong style={{ color: 'var(--ink)' }}>Is Claude already chosen?</strong> If your company has approved it, or buys it through AWS, Google Cloud or Microsoft, tell us.</li>
                </ol>
                <p style={{ marginTop: 18, fontSize: 14 }}>Bhavesh, our founder, reads every brief and replies within 24 hours.</p>
              </div>
              <div className="finalcta-form">
                <HeroInlineForm
                  region="us"
                  source="services_claude_ai_agent_development_tell_us"
                  service="Claude AI Agent Development"
                  submitLabel="See a demo on my data"
                  trustText="Working software on your own data before you sign. Founder replies within 24 hours."
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
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p>Your systems stay behind our code. Claude asks for a tool, our code runs it, checks the answer and decides what goes back. The model never gets a database password.</p>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <p>Each step sends only the fields it needs. A step that sorts an email by type does not need the customer&apos;s address, so it does not get it.</p>
                </div>
                <div className="fact">
                  <div className="sec">§03</div>
                  <p>Anthropic says it does not train on inputs or outputs from its commercial products by default, and that it deletes API inputs and outputs within 30 days unless a different term, such as zero data retention, is agreed (<Ext href={SRC.retention}>Anthropic privacy center</Ext>).</p>
                </div>
                <div className="fact">
                  <div className="sec">§04</div>
                  <p>The account is yours. Usage runs on your own Anthropic key or your own cloud account, so your security team sees every request and holds the agreement.</p>
                </div>
                <div className="fact">
                  <div className="sec">§05</div>
                  <p>Writes wait for a person. Anything that moves money, changes a price or emails a customer goes to an approval queue first, and every step is logged with what the agent saw and did.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="section process" id="build">
            <div className="wrap">
              <div className="section-head">
                <div className="eyebrow">Process</div>
                <h2>How a Claude Agent Project Runs, Phase by Phase</h2>
                <p>
                  Each phase is scoped, priced and signed on its own, in writing. You decide on the next phase after you
                  have seen the last one work.
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
                <h2>Our Terms, in Writing</h2>
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
                <h2>What We Have Built</h2>
                <p>One product we make that runs on Claude, and one client agent that runs on a different model, so you can see how we choose.</p>
              </div>
              <div className="proofgrid">
                {PROOF.map((p) => (
                  <div className="ventry" key={p.title}>
                    <span className="vtag">{p.tag}</span>
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                    <p className="prooflinks">
                      <a href={p.href}>{p.label}</a>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section faq" id="faq">
            <div className="wrap">
              <div className="faqwrap">
                <div className="faqintro">
                  <div className="eyebrow">FAQ</div>
                  <h2 className="faqHeading">Building on Claude, Answered Directly</h2>
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
              <div className="refs">
                <a href={SRC.models} target="_blank" rel="noopener noreferrer">Anthropic: Claude models overview</a>
                <a href={SRC.tools} target="_blank" rel="noopener noreferrer">Anthropic: Tool use with Claude</a>
                <a href={SRC.sdk} target="_blank" rel="noopener noreferrer">Anthropic: Agent SDK overview</a>
                <a href={SRC.mcp} target="_blank" rel="noopener noreferrer">Model Context Protocol: introduction</a>
                <a href={SRC.training} target="_blank" rel="noopener noreferrer">Anthropic privacy center: model training</a>
                <a href={SRC.retention} target="_blank" rel="noopener noreferrer">Anthropic privacy center: data retention</a>
                <a href={SRC.cost} target="_blank" rel="noopener noreferrer">ProductCrafters: AI agent development cost</a>
                <a href="/blog/custom-mcp-server-erp-crm-mid-sized-companies-2026">Custom MCP server for your ERP or CRM</a>
              </div>
            </div>
          </section>

          <section className="finalcta" id="finalcta">
            <div className="wrap">
              <div>
                <h2>Tell Us the Job, We&apos;ll Tell You If Claude Fits</h2>
                <p>Send the brief, the RFP or three lines about the workflow. We&apos;ll tell you whether it is a Claude agent, another model or a plain automation, before you spend anything. Bhavesh, our founder, reads every enquiry and replies within 24 hours.</p>
              </div>
              <div className="finalcta-form">
                <HeroInlineForm
                  region="us"
                  source="services_claude_ai_agent_development_final"
                  service="Claude AI Agent Development"
                  submitLabel="See a demo on my data"
                  trustText="Working software on your own data before you sign. Founder replies within 24 hours."
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

import type { Metadata } from 'next';
import { Fragment } from 'react';
import HeroInlineForm from '@/components/HeroInlineForm';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
import AuFaq from '../components/AuFaq';
import VisualSlot from '../components/VisualSlot';
import '@/components/v2/AiAgentDevelopmentSections.css';
import '../au-page.css';
import '../au-hub.css';

const CANONICAL = 'https://factoryjet.com/au/ai-agents';
const UPDATED = '2026-09-26';
const TITLE = 'AI Automation Agency Australia | AI Agents | FactoryJet';
/* Shortened 2026-09-26 so the hero form sits in the first desktop screen; "the tools you already
   run" moved into the hero lead. */
const H1 = 'AI Automation Agency Australia: Custom AI Agents Built Into Your Tools';
const DESCRIPTION =
  'FactoryJet is an AI automation agency for Australian businesses. We build custom AI agents inside Xero, HubSpot, ServiceM8 and Microsoft 365. You own them.';

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD, so the
   schema can never describe a trail a human cannot see. Never hand-copy a
   second list here. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'AI Agents & Automation', url: CANONICAL },
];

/* ─── External sources, each fetch-verified 2026-09-25 (HTTP 200, claim
       confirmed in the fetched body) ──────────────────────────────────── */
// ABS, Characteristics of Australian Business 2024-25: "Almost one in eight
// (12%) businesses indicated they used Artificial Intelligence (AI) in
// 2024–25, compared to 1% in 2021–22." Professional, Scientific and Technical
// Services 24%; Health Care 17%; Rental, Hiring and Real Estate 11%; Retail 9%;
// Construction 6%; Transport, Postal and Warehousing 1%. fetch-verified 2026-09-25
const SRC_ABS =
  'https://www.abs.gov.au/statistics/industry/technology-and-innovation/characteristics-australian-business/latest-release';
// OAIC, guidance on privacy and the use of commercially available AI products:
// privacy obligations apply to personal information input into AI and to AI
// output; APP 6 primary purpose rule; best practice = do not enter personal
// info into publicly available AI chatbots; public-facing AI tools (chatbots)
// should be clearly identified; not "set and forget"; privacy by design incl.
// a Privacy Impact Assessment. fetch-verified 2026-09-25
const SRC_OAIC_AI =
  'https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products';
// OAIC: "There are 13 Australian Privacy Principles", cornerstone of the
// Privacy Act 1988. fetch-verified 2026-09-25
const SRC_OAIC_APPS = 'https://www.oaic.gov.au/privacy/australian-privacy-principles';
// OAIC APP guidelines chapter 1: from 10 December 2026, APP 1.7 to 1.9
// (Privacy and Other Legislation Amendment Act 2024) require privacy policies
// to cover computer programs that use personal information to make decisions
// that could significantly affect individuals. fetch-verified 2026-09-25
const SRC_OAIC_APP1 =
  'https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-1-app-1-open-and-transparent-management-of-personal-information';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',   label: 'AI agents & automation basics' },
  { key: 'choosing', label: 'Choosing an AI automation agency' },
  { key: 'cost',     label: 'Cost, timing & process' },
  { key: 'data',     label: 'Privacy, data & ownership' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string; links?: { href: string; label: string }[] }[] = [
  // ── Basics ──
  { category: 'basics', question: 'What is an AI automation agency?',
    answer: 'An AI automation agency is a team that designs, builds and looks after AI systems that do repetitive work inside your business. That usually means AI agents and automated workflows connected to the software you already use, such as Xero, HubSpot or Microsoft 365. A good one maps your process first, builds with human approval where it matters, and supports the system after launch.' },
  { category: 'basics', question: 'What do AI automation agencies actually do day to day?',
    answer: 'They map how a job moves through your business today, find the slow and repetitive steps, and design an automation or AI agent for them. Then they connect it to your systems, test it on real examples, train your team, and watch it after launch. The weaker ones stop at a demo. The better ones stay accountable for the system working months later.' },
  { category: 'basics', question: 'What are AI agents?',
    answer: 'An AI agent is software that uses a large language model, the technology behind tools like ChatGPT and Claude, to read a situation, decide what to do next, and take an action in another system. For example, it can read an emailed purchase order, check stock, draft the order in your system and ask a person to approve it. It works within rules and permissions you set.' },
  { category: 'basics', question: 'What can an AI agent do for my business?',
    answer: 'The best jobs for an AI agent are repeated, rule-heavy and spread across several tools. Common examples are sorting and answering enquiries, turning emails and PDFs into records, chasing overdue invoices, qualifying leads in your CRM, booking jobs, and preparing reports. An agent handles the routine cases and passes anything unusual to a person with the context already attached.' },
  { category: 'basics', question: 'What is the difference between AI agents and agentic AI?',
    answer: 'They describe the same idea from two angles. An AI agent is one piece of software that can take actions on its own within set rules. Agentic AI is the wider approach of building systems out of such agents, sometimes several working together, where the software plans steps and acts rather than only answering questions. For a business buyer the practical question is the same: what can it do, and who approves it.' },
  { category: 'basics', question: 'How is AI automation different from business process automation?',
    answer: 'Business process automation, including robotic process automation or RPA, follows fixed rules: if this happens, do that. It is reliable but breaks when inputs vary. AI automation adds the ability to read messy inputs, such as free-text emails, scanned invoices or phone transcripts, and decide what they mean. Most good systems mix both: fixed rules for the predictable parts, AI only where judgement on messy input is needed.' },
  { category: 'basics', question: 'What are some examples of AI automations?',
    answer: 'Reading supplier invoices and drafting bills in Xero or MYOB. Turning a website enquiry into a HubSpot deal with a suggested reply. Booking a tradie job into ServiceM8 from an email. Answering order status questions using Shopify and courier tracking. Summarising a client meeting into your practice management system. Each one takes a repeated task off your team and keeps a person in charge of the decision.' },
  { category: 'basics', question: 'Are there AI customer service agents?',
    answer: 'Yes. AI customer service agents answer common questions by chat, email or phone, look up orders or bookings, and hand harder cases to a person. They work well for order status, booking changes and first-line questions. Under OAIC guidance, public-facing AI tools such as chatbots should be clearly identified as AI. For chat and email support, see our AI customer service page; for phone answering, see our AI receptionist service.',
    links: [
      { href: '/au/ai-customer-service', label: 'AI customer service agents' },
      { href: '/au/ai-receptionist', label: 'AI receptionist' },
    ] },
  { category: 'basics', question: 'What are the five types of agent in AI?',
    answer: 'The classic textbook list is simple reflex agents, model-based reflex agents, goal-based agents, utility-based agents and learning agents. It describes how an agent decides, from fixed reactions up to agents that improve with experience. Business AI agents today mostly use a large language model to plan, plus fixed rules and approval steps around it, so the textbook labels matter less than what the agent is allowed to do.' },
  { category: 'basics', question: 'Is AI automation still in demand in Australia?',
    answer: 'Yes, and it is early. The Australian Bureau of Statistics found about 12% of Australian businesses used AI in 2024–25, up from 1% in 2021–22. Use is highest in professional services at 24%, and still low in construction at 6% and transport, postal and warehousing at 1%. That gap is where practical, well-scoped automation tends to pay off first.' },

  { category: 'basics', question: 'What is business process automation?',
    answer: 'Business process automation means using software to run a repeatable business process from start to finish with less manual handling: a new order creates an invoice, a signed quote creates a job, a supplier bill gets coded and sent for approval. It works best on processes that happen often, follow clear steps and currently involve copying data between systems. Adding AI lets it handle messy inputs such as emails and PDFs.' },
  { category: 'basics', question: 'Can you give me an example of business process automation?',
    answer: 'A common Australian example is accounts payable. A supplier emails a PDF invoice. The automation reads it, pulls out the supplier, ABN, amounts and GST, matches it to the purchase order, creates a draft bill in Xero or MYOB and asks the right person to approve it. Another is order to cash: a web order creates the invoice, books the courier and sends tracking without anyone retyping.',
    links: [{ href: '/au/accounts-payable-automation', label: 'Accounts payable automation' }] },
  { category: 'basics', question: 'Is RPA better than AI?',
    answer: 'Neither is better, they do different jobs. IBM describes robotic process automation as rule-based software that follows the workflow you define, while AI learns patterns from data, including unstructured data. RPA is cheaper and more predictable when the screens and inputs never change. AI is better when inputs vary, such as emails, scanned documents and call notes. Most reliable builds use both.',
    links: [{ href: 'https://www.ibm.com/think/topics/rpa', label: 'IBM: what is RPA' }] },
  { category: 'basics', question: 'Is RPA still a thing?',
    answer: 'Yes. Robotic process automation is still widely used for high-volume, rule-based work in older systems that have no API, such as copying data between legacy screens. What has changed is that many new builds now connect systems directly through their APIs, and add AI where inputs are messy. We use RPA where a system offers no other way in, and avoid it where a direct connection exists, because screen-copying bots break when a screen changes.' },
  { category: 'basics', question: 'What is RPA, and is it the same as AI automation?',
    answer: 'No. RPA, robotic process automation, is software that copies the clicks and keystrokes a person makes in a system and repeats them exactly. It is fast and cheap for fixed, predictable steps, but it breaks when a screen changes or an input looks different. AI automation reads messy inputs such as emails, PDFs and call notes and decides what they mean. Most good builds use fixed rules or RPA for the predictable steps and AI only where judgement is needed.' },
  { category: 'basics', question: 'What is an AI automation consultant?',
    answer: 'An AI automation consultant looks at how work moves through your business and tells you which steps are worth automating, with what tools, in what order and at what risk. Some only advise and hand you a roadmap. Others, like us, also build and support what they recommend. If you hire an advice-only consultant, ask who will build the system and who will fix it when a connected tool changes.' },
  { category: 'basics', question: 'Is ChatGPT an AI agent?',
    answer: 'Not in the business sense, though it is heading that way. Plain ChatGPT answers questions and drafts text when you ask. An AI agent takes actions in your systems, such as creating an order in Shopify or a bill in Xero, within rules you set. OpenAI has added agent features that can browse and complete tasks, but they act on your behalf in a browser rather than inside your business systems with approval steps and logs.' },
  { category: 'basics', question: 'Can I get an AI agent for free?',
    answer: 'You can try one for free. ChatGPT, Claude and Gemini have free plans, and n8n can be self-hosted at no licence cost, so a confident owner can build a simple agent without paying for software. What is rarely free is the running cost: model usage fees once volume grows, hosting, and the time to fix it when a connected tool changes. Free tools suit learning and low-risk jobs, not customer or financial data.' },
  { category: 'basics', question: 'Which AI agents are best for business?',
    answer: 'The best ones do one repeated job well inside the tools you already use. The most reliable in our experience are inbox and enquiry triage, invoice and document reading into Xero or MYOB, order status answers for online stores, lead qualification into a CRM, and after-hours call answering. Agents that promise to run a whole department are the ones that disappoint. Start with one measurable job, prove it, then add the next.' },

  // ── Choosing ──
  { category: 'choosing', question: 'What is the leading AI automation agency in Australia?',
    answer: 'There is no single leader, and any agency that claims the title is marketing. The right choice depends on your size, your systems and whether you want strategy, a build or ongoing management. Team 400, Aivy, FlowWorks, Osher Digital, Advancer and IOTAI appear often in Australian search results and AI answers. We compare 13 of them, including us, in our guide to the best AI agencies in Australia, with each fact checked on the agency’s own site.',
    links: [{ href: '/blog/best-ai-agencies-australia-2026', label: 'Best AI agencies in Australia' }] },
  { category: 'choosing', question: 'Which AI automation agencies are located in Australia?',
    answer: 'Several have Australian offices, including Team 400, Osher Digital and Advancer (Brisbane), Aivy and FlowWorks (Melbourne), Edison AI (Sydney) and IOTAI (Sydney, Melbourne, Brisbane and the Gold Coast). FactoryJet serves Australian businesses remotely from our engineering team, with the founder involved in every project. Whoever you pick, ask where your data will be stored and who actually writes the code.' },
  { category: 'choosing', question: 'How do I choose an AI agent developer?',
    answer: 'Ask for systems they have put live, not demos. Ask who writes the code and whether that person supports it after launch. Ask how they handle personal information under the Privacy Act, how the agent asks a human for approval, and what you own at the end. A good AI agent developer answers all of these plainly and tells you when a simpler automation would do.' },
  { category: 'choosing', question: 'What does an AI agent developer do?',
    answer: 'An AI agent developer designs and builds the agent and everything around it. That means choosing the model, writing the instructions and rules, connecting the agent to your systems through their APIs with the least access it needs, testing it on real past cases, and adding approval steps, logs and an off switch. A good one also monitors the agent after launch and fixes it when your software or the model changes.' },
  { category: 'choosing', question: 'How do I hire an AI agent?',
    answer: 'You do not hire the agent itself; you hire a team to build it for your process, or you subscribe to a ready-made tool. Start by writing down one job, how often it happens and how you measure it today. Then talk to two or three developers, ask for systems they have put live, and get a fixed-scope quote with a supervised pilot. Check who owns the code and who supports it after launch.' },
  { category: 'choosing', question: 'Should I use Zapier, Make or n8n myself, or hire an agency?',
    answer: 'Do it yourself if the job is simple, low risk and someone on your team enjoys building it. No-code tools are great for moving data between two apps. Hire help when the job touches several systems, involves customer or financial data, needs an approval step, or would hurt if it silently broke. Many of our builds use n8n or similar tools underneath, set up properly and monitored.' },
  { category: 'choosing', question: 'Do you build with n8n, Make or Zapier?',
    answer: 'Yes, all three, and we pick per job. Zapier and Make are hosted tools that suit quick links between popular apps. n8n can run on n8n’s cloud or be self-hosted on your own server, which helps when data has to stay in an Australian region. For work that touches money, customer records or several systems, we often write custom code instead. Either way, you own the accounts, and we document and monitor what we build.',
    links: [{ href: 'https://docs.n8n.io/choose-how-to-use-n8n/', label: 'n8n: ways to use n8n' }] },
  { category: 'choosing', question: 'Which platform is best for AI automation?',
    answer: 'There is no single best platform. Microsoft 365 businesses often start with Copilot Studio and Power Automate. Teams on Google Workspace, HubSpot or Xero often use n8n, Make or custom code calling models from OpenAI, Anthropic or Google. We pick based on the systems you already run, where your data can live, and who will maintain it. We do not resell any platform.' },
  { category: 'choosing', question: 'Does Microsoft have an AI agent platform?',
    answer: 'Yes. Microsoft offers Copilot Studio for building agents inside Microsoft 365, and Microsoft Foundry Agent Service on Azure for developers building custom agents. If your business already runs on Microsoft 365 and SharePoint, they are often a sensible starting point. We build on them when they fit, and on other platforms when your systems or budget point elsewhere.' },
  { category: 'choosing', question: 'Can I build my own AI agent?',
    answer: 'Yes. Agent builders and no-code tools make a first agent achievable for a confident business owner, and it is a good way to learn. The hard parts come later: connecting safely to real systems, handling odd cases, keeping personal information protected, and fixing it when a tool changes. That is usually the point where businesses bring in an AI agent development team.' },
  { category: 'choosing', question: 'Do you work with businesses in Sydney, Melbourne, Brisbane and Perth?',
    answer: 'Yes. We work with businesses in Sydney, Melbourne, Brisbane, Perth, Adelaide, Canberra and regional Australia. Projects run remotely with video workshops, shared process maps and written plans, and we schedule calls in Australian business hours. AI automation work does not need anyone on site, so a business in Newcastle or Geelong gets the same senior team as one in the CBD.' },

  // ── Cost & process ──
  { category: 'cost', question: 'How much do AI automation agencies charge?',
    answer: 'Pricing varies widely because the work varies widely. The drivers are how many systems the agent connects to, how messy the inputs are, how much approval and logging it needs, how sensitive the data is, and whether you want ongoing support. We scope after a free call with the founder and give you a fixed quote per stage. Published Australian market ranges are in our AI cost guide.',
    links: [{ href: '/blog/ai-cost-australia-2026#ai-automation-cost', label: 'AI automation costs in Australia' }] },
  { category: 'cost', question: 'How much does it cost to build an AI agent in Australia?',
    answer: 'A focused agent that does one job in one or two systems costs far less than a multi-agent system spanning finance, CRM and operations. Add model usage fees, paid directly to the AI provider, and support if you want it. We map the process first, then give you a fixed-scope quote. Our AI agent cost guide for Australia sets out published market ranges and running costs.',
    links: [{ href: '/blog/ai-cost-australia-2026#ai-agent-cost', label: 'AI agent cost guide for Australia' }] },
  { category: 'cost', question: 'How are AI agents developed?',
    answer: 'In stages. We map the process and pick one job, design what the agent may and may not do, connect it to your systems with the least access it needs, and test it on real past examples. Then it runs alongside your team in a supervised pilot before it takes on live work. Monitoring, logs and a simple way to switch it off are built in from day one.' },
  { category: 'cost', question: 'How long does it take to build an AI agent?',
    answer: 'A single, well-defined agent in systems with good connections typically takes a few weeks from mapping to supervised pilot. Agents that touch older software, need data cleaned first, or span several teams take longer. We give you a timeline after the mapping stage, when we know what the systems and data actually look like, rather than guessing on the first call.' },
  { category: 'cost', question: 'What do you need from us to get started?',
    answer: 'An hour with the person who owns the process, access to a handful of real examples such as past emails, invoices or enquiries, and a read-only view of the systems involved. We also need one decision maker who can sign off on what the agent is allowed to do. That is enough to map the process and give you a fixed-scope plan.' },
  { category: 'cost', question: 'What happens after the AI agent goes live?',
    answer: 'We keep watching it. AI models, your software and your business all change, so agents drift if nobody looks after them. Our support covers monitoring, reviewing the cases it passed to a person, updating rules, and fixing breakages when a connected tool changes. You get a regular summary of what the agent did. This is the part many agencies do not offer.' },
  { category: 'cost', question: 'How do we know if the agent is working?',
    answer: 'We agree one measure before the build, based on a number you already track: hours spent on a task, time to first reply, invoices processed per week, or jobs booked. We record the starting point, then report against it. We also track how often the agent hands work to a person and why, because that shows where it needs improving.' },
  { category: 'cost', question: 'What happens if the AI agent makes a mistake?',
    answer: 'It will sometimes, so we design for it. Actions that matter, such as sending money, changing a customer record or replying to a complaint, go to a person for approval. Every action is logged, so you can see what it did and why. If something looks wrong, the agent can be paused with one switch while we fix the cause.' },

  // ── Privacy, data & ownership ──
  { category: 'data', question: 'Does the Privacy Act apply to AI agents?',
    answer: 'Yes, if the business is covered by the Privacy Act and the agent handles personal information. The OAIC says privacy obligations apply to personal information put into an AI system and to AI output that contains it. The 13 Australian Privacy Principles still apply, including APP 6, which limits using information for a purpose other than the one it was collected for.' },
  { category: 'data', question: 'Can our team paste customer details into ChatGPT?',
    answer: 'The OAIC recommends, as best practice, that organisations do not enter personal information, and especially sensitive information, into publicly available AI chatbots and generative AI tools. Business versions with proper data terms are a different matter, and a custom agent can be built to pass only the fields it needs. We set this up and write a short usage rule your team can follow.' },
  { category: 'data', question: 'What changes for automated decisions on 10 December 2026?',
    answer: 'From 10 December 2026, new APP 1 rules require your privacy policy to explain when a computer program uses personal information to make decisions that could significantly affect someone’s rights or interests. If an agent helps decide things like credit, pricing or eligibility, you will need to describe it. We document what each agent decides so your privacy policy can be updated accurately.' },
  { category: 'data', question: 'Can our data stay in Australia?',
    answer: 'Often, yes. Major cloud and AI providers offer Australian data regions for many services, and we can host the agent’s own code and logs in an Australian region. Some AI models are only available from overseas regions, so we check each one and tell you where your data would travel before anything is built. That lets you decide with the full picture.' },
  { category: 'data', question: 'Do we own the AI agent you build?',
    answer: 'Yes. The code, prompts, workflow definitions, integrations and documentation are yours. We are not a platform you rent. You pay AI model providers directly, with no markup through us, and if you ever move support in-house or to another provider, the agent keeps running. That is a deliberate choice, and it is how we would want to be treated as a client.' },
  { category: 'data', question: 'Will an AI agent take over my team’s jobs?',
    answer: 'That is not how we scope the work. We look for steps that are slow, repetitive and error-prone, such as copying data between screens or answering the same question many times a week, and build an agent to handle those with your team approving what matters. Your people keep the decisions, the relationships and the judgement calls. The goal is fewer hours lost to admin.' },
];

/* ─── Named Australian AI automation agencies (open self-disclosure,
       ItemList). Each company and note matches the fact-checked list in
       /blog/best-ai-agencies-australia-2026, where every agency's own site was
       opened on 2026-09-26 to confirm an Australian office and the services named. ───────────────────────────────────────────────────── */
const AGENCIES: { name: string; note: string }[] = [
  { name: 'FactoryJet', note: 'That is us. Senior engineers who map the process, build custom AI agents into your existing tools with human approval steps, and support them after launch. Founder involved on every project. Strongest where AI meets commerce, finance and operations systems. You own everything we build.' },
  { name: 'Aivy', note: 'Based in Kensington, Melbourne, working nationally with mid-market firms. Offers AI consulting, document and finance automation, Xero integration and chatbot development for accounting, ecommerce, healthcare, NDIS, professional services and real estate, with fixed-scope pilots.' },
  { name: 'Team 400', note: 'Brisbane head office, working across Sydney, Melbourne and Brisbane. Builds custom AI agents and the software around them, with strong Microsoft work (Azure OpenAI, Copilot Studio, Power Platform) plus .NET and React development, for mid-size and larger businesses.' },
  { name: 'FlowWorks', note: 'Based on St Kilda Road, Melbourne, working with SMEs in every capital city. Starts with an AI readiness assessment, then builds automations, agents and voice AI connected to tools such as Xero, HubSpot, Google Workspace and Microsoft 365, with ongoing operations support.' },
  { name: 'Edison AI', note: 'Based in Surry Hills, Sydney, serving small and medium businesses Australia-wide. Implements AI agents and workflow automation and trains staff to use AI, from readiness audits through to dashboards.' },
  { name: 'Osher Digital', note: 'Based on Eagle Street, Brisbane, working across Australia with small to mid-market businesses. Offers AI agent development, AI consulting, n8n automation, system integrations and custom ERP software.' },
  { name: 'Advancer', note: 'Based in Fortitude Valley, Brisbane. Offers AI training, AI consulting and readiness assessments, AI agents for workflows and CRM updates, voice AI for call handling and bookings, and data consulting, on fixed-scope pilots.' },
  { name: 'IOTAI', note: 'Offices in North Sydney, Melbourne, Brisbane and the Gold Coast. Builds workflow automation, AI agents and internal apps on Retool and n8n, rolls out Microsoft Copilot, and offers on-premise AI and a monthly managed service.' },
  { name: '13Labs', note: 'Based at Stone & Chalk on King Street, Melbourne, working Australia-wide. A founder-led team building AI software such as document search, information extraction and staff assistants, plus AI agents that answer from approved information, on fixed-price quotes.' },
  { name: 'Arinco', note: 'Offices in Melbourne, Sydney, Brisbane, Perth and Auckland. A Microsoft specialist building production copilots and agents on Azure, Microsoft 365 and Copilot Studio for enterprise and mid-market organisations.' },
];

/* ─── Build steps (rendered as <details> expanders) ─── */
const BUILD_STEPS: { n: string; t: string; d: string; out: string }[] = [
  { n: '01', t: 'Map the process as it runs today',
    d: 'We sit with the person who does the work and draw the process box by box: where the job arrives, which screens it touches, who approves what, and where it stalls. We collect real examples, such as last month’s emailed orders or enquiries.',
    out: 'A one-page process map and a short list of candidate steps to automate.' },
  { n: '02', t: 'Pick one job and agree the measure',
    d: 'We score each candidate on value and risk and pick the first one. Then we agree a single success measure you already track, such as hours per week on data entry or time to first reply, and record the starting number.',
    out: 'A fixed-scope plan and quote for one agent, with the success measure written down.' },
  { n: '03', t: 'Design the rules and approval points',
    d: 'We write down exactly what the agent may do on its own, what needs a person’s approval, and what it must never touch. We also check what personal information it will see and against which Australian Privacy Principles.',
    out: 'An agent specification: permissions, approval steps, privacy notes and a switch-off plan.' },
  { n: '04', t: 'Connect it to your systems with the least access needed',
    d: 'We connect the agent to Xero, MYOB, HubSpot, Salesforce, ServiceM8, Shopify, Microsoft 365 or Google Workspace through their official connections, using separate credentials with only the permissions the job requires.',
    out: 'Working integrations in a test environment, documented and owned by you.' },
  { n: '05', t: 'Test it on real past examples',
    d: 'Before it sees live work, the agent runs against dozens of real past cases, including the awkward ones. We compare its output to what your team actually did and fix the gaps.',
    out: 'A test report showing where it matched your team and where it hands off to a person.' },
  { n: '06', t: 'Run a supervised pilot alongside your team',
    d: 'The agent works on live tasks, but a person reviews every action for an agreed period. As trust builds, low-risk actions move to automatic and high-risk ones stay with approval.',
    out: 'Pilot results against the success measure, plus a go-live decision you make.' },
  { n: '07', t: 'Go live, monitor and keep improving',
    d: 'Once live, every action is logged and we monitor errors, hand-offs and drift. We update rules as your business changes and fix breakages when a connected tool changes. You get a regular summary.',
    out: 'A live agent you own, with support from the team that built it.' },
];

/* ─── JSON-LD ──────────────────────────────────────────────────────
   The Organization is defined sitewide (src/data/organization.ts). This page
   references it only by @id and never redefines it. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'AI Automation Agency Australia: AI Agent Development',
      serviceType: 'AI automation, AI agent development, AI workflow automation and business process automation',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'Australia' },
      url: CANONICAL,
      description:
        'AI automation agency for Australian businesses. We design, build, integrate and support custom AI agents and automations connected to Xero, MYOB, HubSpot, Salesforce, ServiceM8, Shopify, Microsoft 365 and Google Workspace, with human approval where it matters. The client owns what we build.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        item: c.url,
      })),
    },
    {
      '@type': ['WebPage', 'Article'],
      '@id': CANONICAL,
      url: CANONICAL,
      name: TITLE,
      headline: H1,
      description: DESCRIPTION,
      inLanguage: 'en-AU',
      datePublished: '2026-09-25',
      dateModified: UPDATED,
      image: 'https://factoryjet.com/images/au/ai-agents/ai-agents-og.webp',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['[data-speakable="true"]'] },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
      about: { '@id': `${CANONICAL}#service` },
      author: {
        '@type': 'Person',
        name: 'Bhavesh Barot',
        jobTitle: 'Founder & CEO',
        url: 'https://factoryjet.com/about',
        sameAs: [
          'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
          'https://github.com/factoryjet-tech',
        ],
      },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
    },
    {
      '@type': 'ItemList',
      '@id': `${CANONICAL}#agencies`,
      name: 'AI automation agencies serving Australian businesses',
      itemListElement: AGENCIES.map((a, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: a.name,
      })),
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: FAQ_ITEMS.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL, languages: { 'en-AU': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: TITLE,
    description:
      'AI agent development and AI automation services for Australian businesses. Agents wired into Xero, MYOB, HubSpot, ServiceM8, Shopify and Microsoft 365, with human approval. Built and supported by senior engineers. You own it.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: '/images/au/ai-agents/ai-agents-og.webp', width: 1200, height: 630, alt: 'AI automation agency Australia: a Sydney business owner approving the next step of an AI agent workflow on his laptop' }],
  },
  robots: { index: true, follow: true },
};

const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

/* Visual slot page key (route without /au/). */
const PAGE_KEY = 'ai-agents';

/* H1 split for the Family A hero emphasis. Same string as H1 (schema headline). */
const H1_SPLIT = H1.indexOf(': ');
const H1_LEAD = H1.slice(0, H1_SPLIT + 1);
const H1_EMPHASIS = H1.slice(H1_SPLIT + 2);

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

/* Hero spec panel icons (same order as the three spec rows). */
const HERO_ICONS = [
  'M5 12l4 4 10-10M4 20h16',
  'M12 3 4 7v5c0 5 8 9 8 9s8-4 8-9V7l-8-4Z',
  'm8 8-4 4 4 4M16 8l4 4-4 4M13 5l-2 14',
] as const;

/* What an AI automation agency should do (was the 8 numbered cards). */
const AGENCY_JOBS: { n: string; t: string; d: string }[] = [
  { n: '01', t: 'Map how the work runs today', d: 'Before any AI, someone should draw your process as it really runs, with the people who do it. The best automation targets are usually a step where someone copies information between two screens, or answers the same question many times a week.' },
  { n: '02', t: 'Tell you what not to automate', d: 'Some problems are a broken process or unfinished software setup, not an AI problem. An honest agency says so, even when it costs them a project.' },
  { n: '03', t: 'Design the agent’s rules and limits', d: 'What the agent may do alone, what needs approval, and what it must never touch. Written down, agreed with you, and reflected in the permissions it is given.' },
  { n: '04', t: 'Connect it to the tools you already use', d: 'Real integration with Xero, MYOB, HubSpot, ServiceM8, Shopify or Microsoft 365 through official connections, not a copy-paste workaround. You should not need to change software to get value.' },
  { n: '05', t: 'Check privacy before building', d: 'Which personal information the agent sees, which AI provider processes it, where it is stored, and how that fits the Australian Privacy Principles. The OAIC recommends a privacy by design approach, including a Privacy Impact Assessment.' },
  { n: '06', t: 'Test on real examples, then pilot with people watching', d: 'Past cases first, including the awkward ones. Then a supervised pilot where a person checks every action until the numbers show it is ready.' },
  { n: '07', t: 'Train your team and write simple usage rules', d: 'People trust an agent they understand. Short, role-specific training and a one-page rule sheet do more for adoption than any demo.' },
  { n: '08', t: 'Stay on after launch', d: 'Models, software and your business all change. Someone has to watch the logs, review the hand-offs, update the rules and fix breakages. The OAIC is clear that AI should not be a set-and-forget product.' },
];

/* Icons and visual-slot subjects for the eight cards (same order as AGENCY_JOBS). */
const JOB_ICONS = [
  'M4 5h6v6H4zM14 5h6M14 9h4M4 15h16M4 19h10',
  'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM6 6l12 12',
  'M4 6h16M4 12h10M4 18h6M17 15l3 3-3 3',
  'M9 15 15 9M8 11l-2 2a4 4 0 0 0 6 6l2-2M16 13l2-2a4 4 0 0 0-6-6l-2 2',
  'M12 3 4 7v5c0 5 8 9 8 9s8-4 8-9V7l-8-4Zm-3 9 2 2 4-4',
  'M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3',
  'M4 19V5h16v14H4Zm4-10h8M8 13h5',
  'M3 12h4l3 7 4-14 3 7h4',
] as const;
const JOB_SUBJECTS = [
  'AI-generated model: a white paper process map with sticky-note boxes and one orange arrow marking the slow step',
  'AI-generated model: a white workflow block with an orange stop sign placed in front of it',
  'AI-generated model: a white rule card with three rows (alone, approve, never) and an orange tick on the middle row',
  'AI-generated model: white software tiles joined to one small agent block by orange cables',
  'AI-generated model: a white document passing through an orange shield before reaching a small server',
  'AI-generated model: a row of white past-case cards run through a checker, a small human figure watching',
  'AI-generated model: a one-page white rule sheet pinned on a board beside a small group of figures',
  'AI-generated model: a white monitoring screen with a steady orange line and a small wrench beside it',
] as const;

/* Use cases by Australian industry (was the six service cards). */
const INDUSTRIES: { t: string; d: string }[] = [
  { t: 'Trades and home services', d: 'Turn emailed and web enquiries into booked jobs in ServiceM8, Simpro or Tradify, send quote follow-ups, chase overdue invoices from Xero, and collect photos and details before the visit. Construction sits at 6% AI use in the ABS data, so the head start is real.' },
  { t: 'Healthcare clinics', d: 'Admin only, never clinical decisions: sorting the practice inbox, drafting referral and recall letters, answering booking questions and preparing intake forms in tools like Cliniko. Health information is sensitive information under the Privacy Act, so approval steps and access limits are tighter.' },
  { t: 'Professional services', d: 'Accountants, law firms, advisers and agencies: client onboarding, collecting documents, summarising meetings into your practice management system, drafting routine letters and preparing month-end data from Xero or MYOB for a person to check.' },
  { t: 'Ecommerce and retail', d: 'Order status and returns questions answered from Shopify and courier tracking, product data cleaned and enriched, supplier purchase orders drafted from stock levels, and refunds routed for approval under your Australian Consumer Law returns policy.' },
  { t: 'Logistics and wholesale', d: 'Emailed purchase orders turned into sales orders, delivery exceptions flagged before the customer calls, proof-of-delivery matched to invoices, and B2B reorder reminders. Transport, postal and warehousing sits at 1% AI use in the ABS figures.' },
  { t: 'Property and real estate', d: 'Tenant maintenance requests sorted and passed to the right trade, rental enquiries answered and inspections booked, and routine notices drafted in tools like PropertyMe for a property manager to approve.' },
];

/* Where the agents plug in (was the eight integration cards). */
const INTEGRATIONS: { t: string; d: string }[] = [
  { t: 'Xero and MYOB', d: 'Read supplier invoices into draft bills, match payments, chase overdue invoices, prepare month-end data. GST coding suggested, never posted without approval.' },
  { t: 'HubSpot and Salesforce', d: 'Create and enrich leads and deals from enquiries, draft follow-ups, log calls and keep pipeline stages current.' },
  { t: 'ServiceM8, Simpro, Tradify', d: 'Turn enquiries into jobs, collect photos and site details, confirm bookings and send reminders.' },
  { t: 'Shopify', d: 'Answer order and returns questions, flag stock issues, draft purchase orders and tidy product data.' },
  { t: 'Microsoft 365', d: 'Outlook inbox triage, Teams hand-offs, SharePoint document search, Copilot Studio and Power Automate where they fit.' },
  { t: 'Google Workspace', d: 'Gmail sorting and drafting, Sheets reporting, Drive document filing and Calendar booking.' },
  { t: 'Practice and property tools', d: 'Cliniko, PropertyMe and practice management systems, through their official connections where available.' },
  { t: 'Your own systems', d: 'Older ERPs, databases and spreadsheets. If a system has an API or a structured export, an agent can usually work with it.' },
];

/* Related AI services directory (agentdir, as on /services/ai-agent-development). */
const RELATED: { h: string; t: string; d: string }[] = [
  { h: '/au/ai-customer-service', t: 'AI customer service', d: 'Chat and email answers, draft replies and ticket triage inside Zendesk, Gorgias or HubSpot.' },
  { h: '/au/ai-consulting', t: 'AI consulting', d: 'Not sure where AI fits? A readiness assessment ranks the use cases worth doing first.' },
  { h: '/au/ai-development', t: 'AI development', d: 'Larger builds: AI inside your product, custom apps and deeper system integration.' },
  { h: '/au/ai-receptionist', t: 'AI receptionist', d: 'A voice agent that answers, qualifies and books calls, day and night.' },
  { h: '/au/ai-seo', t: 'AI SEO', d: 'Get your business named in ChatGPT, Perplexity and Google AI answers.' },
  { h: '/blog/ai-cost-australia-2026', t: 'AI cost guide', d: 'Published Australian price ranges for AI agents, chatbots and receptionists, with sources and GST basis.' },
];

export default function AiAgentsAUPage() {
  return (
    <>
      <script id="ld-au-ai-agents" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SiteHeader locale="au" logoHref="/au" />

      <div className="aiAgentPage auPage">
      <nav className="crumbs" aria-label="Breadcrumb">
        <div className="wrap">
          {crumbs.map((item, index) => (
            <Fragment key={item.url}>
              {index > 0 && ' / '}
              {index === crumbs.length - 1 ? <b aria-current="page">{item.name}</b> : <a href={item.url}>{item.name}</a>}
            </Fragment>
          ))}
        </div>
      </nav>
      <main id="au-content">

        {/* ═══ HERO (US web-design hub hero: copy + inline form left, spec panel right) ═══ */}
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">AI Automation Agency Australia</div>
              <h1>{H1_LEAD} <span className="hero-emphasis">{H1_EMPHASIS}</span></h1>
              <p className="lead">
                FactoryJet is an AI automation agency for Australian businesses. We design, build and support custom
                AI agents built into the tools you already run: Xero, MYOB, HubSpot, Salesforce, ServiceM8, Shopify,
                Microsoft 365 and Google Workspace. People approve what matters, every action is logged, and you own the code.
              </p>
              <HeroInlineForm region="au" source="au_ai_agents_hero" submitLabel="Map my first AI agent" />
            </div>

            <form
              className="specpanel"
              aria-label="What every AI agent build includes"
              data-visual-slot={`${PAGE_KEY}:hero`}
              data-visual-kind="diagram"
              data-visual-subject="What every build includes: human approval steps on anything that matters, a Privacy Act and APP check before code, and code, prompts and integrations owned by the client"
              data-visual-ratio="1:1"
              data-visual-status="filled"
            >
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>INCLUDED · WHAT EVERY BUILD INCLUDES</span>
                <span className="sys"><span>AI AGENTS</span><span>APPROVAL</span></span>
              </div>
              <div className="workflow-controls">
                <label className="workflow-toggle" title="Pause or resume the animation">
                  <input type="checkbox" className="workflow-pause" aria-label="Pause animation" />
                  <svg className="pause-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path d="M5 3v10M11 3v10" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
                  <svg className="play-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path d="m5 3 8 5-8 5Z" fill="currentColor" /></svg>
                </label>
                <button type="reset" className="workflow-replay" aria-label="Replay animation" title="Replay animation">
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6a5 5 0 1 1 0 4M3 2v4h4" /></svg>
                </button>
              </div>
              <div className="specpanel-body" role="radiogroup" aria-label="Explore what every build includes">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="agents-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[0]} /></svg></span>
                  <span className="idx">on anything that matters</span>
                  <span className="title">Human approval steps</span>
                  <span className="tag">Built in</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="agents-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[1]} /></svg></span>
                  <span className="idx">before a line of code</span>
                  <span className="title">Privacy Act and APP check</span>
                  <span className="tag">Included</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="agents-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[2]} /></svg></span>
                  <span className="idx">no platform lock-in</span>
                  <span className="title">Code, prompts and integrations</span>
                  <span className="tag">Yours</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · Agents do the routine steps. People approve what matters.</div>
            </form>
          </div>
        </section>

        {/* ═══ LEDGER (was the facts band; verified only) ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: '12%', t: 'of Australian businesses used AI in 2024–25, up from 1% in 2021–22', s: 'ABS, 2024–25', u: SRC_ABS },
              { v: '24%', t: 'AI use in professional, scientific and technical services, the highest of any large sector', s: 'ABS, 2024–25', u: SRC_ABS },
              { v: '13', t: 'Australian Privacy Principles apply to personal information your AI agents handle', s: 'OAIC', u: SRC_OAIC_APPS },
              { v: '10 Dec 2026', t: 'new privacy policy rules start for computer programs that make significant decisions', s: 'OAIC, APP 1', u: SRC_OAIC_APP1 },
            ].map((r) => (
              <div className="ledgercell" key={r.t}>
                <div className="k"><a href={r.u} {...extLink}>{r.s}</a></div>
                <div className="v">
                  <strong className={r.v.length > 8 ? 'ledger-number ledger-long' : 'ledger-number'}>{r.v}</strong>
                  {r.t}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="wrap byline">
          <div className="av">BB</div>
          <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
          <div className="upd">Last updated<br />26 September 2026</div>
        </div>

        {/* ═══ ANSWER-FIRST (GEO) → Family A facts ═══ */}
        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <h2 data-speakable="true">What does an AI automation agency do for an Australian business?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p data-speakable="true">
                    <span className="stat">An AI automation agency maps the repetitive work in your business, then designs, builds and supports AI
                    agents that do it inside your existing software, such as Xero, HubSpot or ServiceM8.</span> A good one adds
                    human approval where it matters, follows the Privacy Act and the Australian Privacy Principles, and
                    stays on after launch to keep the system accurate.
                  </p>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <div>
                    <div className="factlabel">Three terms, in plain English</div>
                    <p>
                      An <b>AI agent</b> is software that reads a situation, decides the next step and takes an action in
                      another system, within rules you set. <b>AI automation</b> is any workflow where AI handles part of the
                      job, such as reading an invoice. <b>Business process automation</b> is the older, rules-only version:
                      if this happens, do that. Most good systems combine all three.
                    </p>
                  </div>
                </div>
                <div className="fact">
                  <div className="sec">§03</div>
                  <p>
                    Australian businesses are only getting started. The Australian Bureau of Statistics found about 12% of
                    businesses used AI in 2024–25, up from 1% in 2021–22. Use is highest in professional services and lowest
                    in construction and transport, the industries with the most phone calls, paperwork and double entry. That
                    is the gap an AI automation service is built to close.
                  </p>
                </div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts" kind="photo" ratio="3:2" className="factphoto"
                subject="A Sydney business owner approving the next step of an AI agent workflow on his laptop while his operations manager looks on">
                <img src="/images/au/ai-agents/ai-agents-hero.webp" width={1400} height={933} loading="lazy" decoding="async" alt="Over the shoulder of a Sydney business owner approving the next step of an AI agent workflow on his laptop while his operations manager looks on" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ WHAT AN AI AUTOMATION AGENCY DOES → capgrid (eight cards) ═══ */}
        <section className="section capabilities" id="what-you-get">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">The job, step by step</div>
              <h2>What an AI automation agency does: eight things you should get</h2>
              <p className="lead">
                Plenty of businesses now call themselves an AI automation agency, from solo course graduates to large IT
                firms. These eight things are what the work should actually include. Use the list to compare any
                agency, including us.
              </p>
            </div>
            <div className="capgrid">
              {AGENCY_JOBS.map((j, i) => (
                <div key={j.n} className={`cap cap-${i + 1}`}>
                  <div className="caphead"><span className="capid">CAP‑{j.n}</span><svg {...CAP_ICON}><path d={JOB_ICONS[i]} /></svg></div>
                  <VisualSlot page={PAGE_KEY} slot={`capability-${j.n}`} kind="diagram" ratio="11:4" className="cap-diagram" subject={JOB_SUBJECTS[i]} />
                  <h3>{j.t}</h3>
                  <p>{j.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ USE CASES BY AUSTRALIAN INDUSTRY → facts ═══ */}
        <section className="section facts au-top" id="industries">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">AI agents for business, by industry</div>
              <h2>Where AI agents earn their keep in Australian businesses</h2>
              <p className="lead">
                These are the AI agent examples we are asked about most. Each one keeps a person in charge of the
                decision and takes the repeated steps off their plate.
              </p>
            </div>
            <div className="factswrap">
              <div className="factlist">
                {INDUSTRIES.map((c, i) => (
                  <div className="fact" key={c.t}>
                    <div className="sec">§{String(i + 1).padStart(2, '0')}</div>
                    <div>
                      <h3>{c.t}</h3>
                      <p>{c.d}</p>
                      {i === INDUSTRIES.length - 1 ? (
                        <p className="au-note">
                          Industry AI use figures: <a href={SRC_ABS} {...extLink}>ABS, Characteristics of Australian Business, 2024–25</a>.
                        </p>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-2" kind="photo" ratio="3:2" className="factphoto" captionClassName="figcap"
                subject="A Perth property manager at the agency counter checking maintenance requests an AI agent has sorted, on a tablet"
                caption="A tenant emails about a leaking tap at 9pm. The agent logs the request in the property system, suggests the right tradie and drafts the reply. The property manager approves both in the morning.">
                <img src="/images/au/ai-agents/ai-agents-property.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Over the shoulder of a Perth property manager at the agency counter checking maintenance requests an AI agent has sorted, on a tablet" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ INTEGRATIONS → head with photo + ruled platform rows ═══ */}
        <section className="section platforms" id="integrations">
          <div className="wrap">
            <div className="head-media">
              <div className="section-head">
                <div className="eyebrow">Where our agents plug in</div>
                <h2>AI automation services built into Xero, MYOB, HubSpot, ServiceM8 and more</h2>
                <p className="lead">
                  You should not have to change software to get value from AI. We build the agent around the tools your
                  team already opens every morning, using each platform’s official connections and a separate login with
                  only the access the job needs.
                </p>
              </div>
              <VisualSlot page={PAGE_KEY} slot="platforms" kind="photo" ratio="3:2" captionClassName="figcap"
                subject="An Adelaide bookkeeper comparing a paper supplier invoice with the draft bill an AI agent prepared on his second monitor"
                caption="The agent reads the supplier invoice and prepares a draft bill in Xero or MYOB. The bookkeeper checks it against the paper and approves. Nothing posts on its own.">
                <img src="/images/au/ai-agents/ai-agents-integrations.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Over the shoulder of an Adelaide bookkeeper comparing a paper supplier invoice with the draft bill an AI agent prepared on his second monitor" />
              </VisualSlot>
            </div>
            <div className="platlist" role="list">
              {INTEGRATIONS.map((c, i) => (
                <div key={c.t} className="plat plat-2col" role="listitem">
                  <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                  <div className="plat-name"><h3>{c.t}</h3></div>
                  <p className="plat-build">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ HUMAN APPROVAL → facts with approval split rows ═══ */}
        <section className="section facts au-top" id="approval">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Human in the loop</div>
              <h2>Agents do the routine steps. People approve what matters.</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  The most common fear about agentic AI is that it will do something expensive or embarrassing on its
                  own. That fear is reasonable, and it is a design problem, not a reason to avoid AI. Every agent we
                  build has a written list of actions it may take alone, actions that need a person to approve, and
                  actions it can never take.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  Approval happens where your team already works: a Teams or Slack message, an email with approve and
                  edit buttons, or a queue inside your CRM. The agent does the reading, looking up and drafting. A
                  person makes the call. As the logs show the agent getting things right, you can move low-risk
                  actions to automatic. High-risk ones stay with a person for good.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  Every action is logged with what the agent saw and why it acted, and there is a single switch to
                  pause it. That record is also what you will want if you ever need to explain an automated decision
                  to a customer or to the OAIC.
                </p></div>
                <div className="fact"><div className="sec">§04</div><div>
                  <div className="factlabel">A typical approval split</div>
                  <ul className="trigrows">
                    <li><span className="m">Reading and sorting enquiries</span><span className="n">labels, routing, summaries</span><span className="t">Automatic</span></li>
                    <li><span className="m">Drafting replies and records</span><span className="n">emails, jobs, deals, bills</span><span className="t">Draft only</span></li>
                    <li><span className="m">Sending to a customer</span><span className="n">until trust is proven</span><span className="t">Approve</span></li>
                    <li><span className="m">Money, refunds, pricing</span><span className="n">payments, credits, discounts</span><span className="t">Always approve</span></li>
                    <li><span className="m">Deleting data, clinical advice</span><span className="n">outside the agent’s job</span><span className="t">Never</span></li>
                  </ul>
                </div></div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-3" kind="photo" ratio="3:2" className="factphoto" captionClassName="figcap"
                subject="A Melbourne operations lead approving an action an AI agent drafted, on her phone"
                caption="Approval arrives where your team already is. One tap to approve, one to send it back with a note.">
                <img src="/images/au/ai-agents/ai-agents-approval.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Over the shoulder of a Melbourne operations lead approving an action an AI agent drafted, on her phone, with a coffee in her other hand" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ PHOTOBREAK (US template visual, no AU image yet) ═══ */}
        <VisualSlot page={PAGE_KEY} slot="photobreak" kind="illustration" ratio="12:5" className="photobreak"
          subject="AI-generated model: white software tiles on a long table connected by orange cables to one small agent block, a hand resting on an approve switch" />

        {/* ═══ BUILD PROCESS → process timeline (steps stay openable, as the copy says) ═══ */}
        <section className="section process" id="how-we-build">
          <div className="wrap">
            <div className="head-media">
              <div className="section-head">
                <div className="eyebrow">How we build AI agents</div>
                <h2>AI agent development in seven steps, from process map to live system</h2>
                <p className="lead">
                  Open any step to see what happens and what you get at the end of it. Each stage has a fixed price, and
                  you can stop after any of them.
                </p>
              </div>
              <VisualSlot page={PAGE_KEY} slot="process" kind="photo" ratio="3:2" captionClassName="figcap"
                subject="A FactoryJet engineer and a physiotherapy clinic owner mapping her booking process with sticky notes on a large sheet of paper"
                caption="Step one is always paper, not code. We lay out the process with the people who do it, and the right first agent usually becomes obvious within the hour.">
                <img src="/images/au/ai-agents/ai-agents-workshop.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A FactoryJet engineer and a Brisbane physiotherapy clinic owner map her booking process with sticky notes and arrows on a large sheet of paper" />
              </VisualSlot>
            </div>
            <div className="timeline timeline-4">
              {BUILD_STEPS.map((s) => (
                <details key={s.n} className="tnode">
                  <summary>
                    <div className="idx">{s.n}</div>
                    <h3>{s.t}<span className="chev" aria-hidden="true">+</span></h3>
                  </summary>
                  <p>{s.d}</p>
                  <p><b>You get:</b> {s.out}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <div className="au-midcta">
          <MidPageCTA
            headline={'Which job in your business should an AI agent take first?'}
            sub={'Tell us which task eats your team’s week. On a short call with the founder, we will tell you whether an AI agent, a simpler automation or no AI at all is the right answer, and what a first build would involve.'}
            label={'Talk to the Founder'}
          />
        </div>

        {/* ═══ COMPARISON TABLE ═══ */}
        <section className="section comparison" id="comparison">
          <div className="wrap">
            <div className="section-head head-stack">
              <div className="eyebrow">Side by side</div>
              <h2>DIY no-code vs an automation reseller vs a freelancer vs FactoryJet</h2>
              <p className="lead">
                Each option is right for someone. The table shows where each one tends to be strong, so you can match the
                option to the job.
              </p>
            </div>
            <div className="tablewrap">
              <table>
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">FactoryJet</th>
                    <th>DIY no-code (Zapier, Make, n8n)</th>
                    <th>Automation reseller</th>
                    <th>Freelancer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th scope="row">Best fit</th><td className="fj">Multi-system jobs with real data</td><td>Simple two-app tasks</td><td>Standard, packaged workflows</td><td>One-off, well-defined builds</td></tr>
                  <tr><th scope="row">Process mapping first</th><td className="fj">Always</td><td>You do it</td><td>Sometimes</td><td>Varies</td></tr>
                  <tr><th scope="row">Custom AI agent development</th><td className="fj">Yes, senior engineers</td><td>Template agents</td><td>Their platform’s agents</td><td>Depends on the person</td></tr>
                  <tr><th scope="row">Human approval steps designed in</th><td className="fj">Every build</td><td>If you add them</td><td>Varies</td><td>Varies</td></tr>
                  <tr><th scope="row">Privacy Act and APP check</th><td className="fj">Before building</td><td>On you</td><td>Varies</td><td>Rarely formal</td></tr>
                  <tr><th scope="row">Tool-neutral advice</th><td className="fj">No resale deals</td><td>One tool</td><td>Tied to what they resell</td><td>Usually</td></tr>
                  <tr><th scope="row">Monitoring and fixes after launch</th><td className="fj">Same team</td><td>On you</td><td>Often, on their platform</td><td>If available</td></tr>
                  <tr><th scope="row">Who owns it</th><td className="fj">You: code, prompts, integrations</td><td>You, inside the tool</td><td>Often licensed to you</td><td>Check the contract</td></tr>
                  <tr><th scope="row">Risk if the builder disappears</th><td className="fj">Low: documented and yours</td><td>Depends on who built it</td><td>Platform dependency</td><td>High without documentation</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══ WHICH OPTION FITS (<details>) → vlog ═══ */}
        <section className="vlog" id="fit-check">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Which option fits you</div>
              <h2>A quick check: do you need an AI automation agency at all?</h2>
              <p>
                Open the description that sounds most like your business. The honest answer is not always us.
              </p>
              <VisualSlot page={PAGE_KEY} slot="proof" kind="illustration" ratio="3:2"
                subject="AI-generated model: six white signposts at a fork, one orange sign pointing to the right kind of AI help" />
            </div>
            <div className="ventries">
              <details className="ventry">
                <summary><h3>We want to move data between two apps, and nothing sensitive is involved</h3><span className="chev" aria-hidden="true">+</span></summary>
                <p><b>Try DIY first.</b> Zapier, Make or n8n will likely do it in an afternoon. Bring in help only if it keeps breaking or starts touching customer or financial data.</p>
              </details>
              <details className="ventry">
                <summary><h3>We are not sure where AI fits, and several teams have different ideas</h3><span className="chev" aria-hidden="true">+</span></summary>
                <p><b>Start with advice, not a build.</b> A short readiness assessment ranks the ideas by value and risk. See our <a href="/au/ai-consulting">AI consulting service for Australian businesses</a>.</p>
              </details>
              <details className="ventry">
                <summary><h3>One job is clearly eating hours, and it runs across two or more of our systems</h3><span className="chev" aria-hidden="true">+</span></summary>
                <p><b>This is what an AI automation agency is for.</b> A custom agent with approval steps, built into the systems you already run and supported after launch. This page is the right place.</p>
              </details>
              <details className="ventry">
                <summary><h3>Our problem is the phones: missed calls, after-hours enquiries, bookings</h3><span className="chev" aria-hidden="true">+</span></summary>
                <p><b>Look at a voice agent.</b> See our <a href="/au/ai-receptionist">AI receptionist for Australian businesses</a>, which answers, qualifies and books calls into your calendar or job system.</p>
              </details>
              <details className="ventry">
                <summary><h3>We need a bigger AI build: a new app, AI inside our product, or a data platform</h3><span className="chev" aria-hidden="true">+</span></summary>
                <p><b>That is software development with AI in it.</b> See our <a href="/au/ai-development">AI development service in Australia</a>.</p>
              </details>
              <details className="ventry">
                <summary><h3>We want ChatGPT and Google AI answers to recommend our business</h3><span className="chev" aria-hidden="true">+</span></summary>
                <p><b>That is AI search visibility, not automation.</b> See our <a href="/au/ai-seo">AI SEO service for Australian businesses</a>.</p>
              </details>
            </div>
          </div>
        </section>

        {/* ═══ PRIVACY ACT / APPs / OAIC → facts + ruled rows ═══ */}
        <section className="section facts" id="privacy">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Privacy Act, APPs and OAIC guidance</div>
              <h2>Australian privacy rules shape the agent before the code does</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  If your business is covered by the Privacy Act 1988 and an agent handles personal information, the
                  Australian Privacy Principles apply. Personal information means anything about an identifiable
                  person: a customer, a patient, a tenant or a staff member. There are 13 principles, and the Office of
                  the Australian Information Commissioner (OAIC) has published specific guidance on AI.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  That guidance makes a few points that directly change how an AI agent is built. Privacy obligations
                  apply to personal information you put into an AI system and to AI output that contains it. Under
                  APP 6, you can generally only use information for the purpose it was collected for, unless a
                  secondary use would be reasonably expected or you have consent. As best practice, the OAIC
                  recommends not entering personal information, and especially sensitive information, into publicly
                  available AI chatbots.
                </p></div>
                <div className="fact"><div className="sec">§03</div><div>
                  <p>
                    The OAIC also says public-facing AI tools such as chatbots should be clearly identified as AI, that
                    businesses should take a privacy by design approach including a Privacy Impact Assessment, and that
                    AI products should not be treated as set and forget. And from 10 December 2026, new APP 1 rules
                    require your privacy policy to explain when a computer program uses personal information to make
                    decisions that could significantly affect someone.
                  </p>
                  <p className="au-note">
                    Sources: <a href={SRC_OAIC_AI} {...extLink}>OAIC, guidance on privacy and the use of commercially available AI products</a>;{' '}
                    <a href={SRC_OAIC_APPS} {...extLink}>OAIC, Australian Privacy Principles</a>;{' '}
                    <a href={SRC_OAIC_APP1} {...extLink}>OAIC, APP guidelines chapter 1</a>.
                  </p>
                </div></div>
                <div className="fact"><div className="sec">§04</div><div>
                  <div className="factlabel">What that means in each build</div>
                  <ul className="trigrows">
                    <li><span className="m">Only the fields it needs</span><span className="n">names and details masked where possible</span><span className="t">APP 6</span></li>
                    <li><span className="m">Business AI terms, not consumer apps</span><span className="n">no training on your data</span><span className="t">OAIC</span></li>
                    <li><span className="m">Chatbots say they are AI</span><span className="n">clear to every customer</span><span className="t">OAIC</span></li>
                    <li><span className="m">Record of what each agent decides</span><span className="n">ready for your privacy policy</span><span className="t">APP 1</span></li>
                    <li><span className="m">Where data is stored and processed</span><span className="n">Australian regions where available</span><span className="t">Disclosed</span></li>
                  </ul>
                </div></div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-4" kind="photo" ratio="3:2" className="factphoto" captionClassName="figcap"
                subject="Two colleagues in a Canberra meeting room reviewing a printed data flow diagram before an AI agent is built"
                caption="Privacy is planned on paper first: which information the agent sees, where it goes, and who can check it.">
                <img src="/images/au/ai-agents/ai-agents-privacy.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Two colleagues in a calm Canberra meeting room review a printed data flow diagram before any AI agent is built" />
              </VisualSlot>
            </div>
            <div className="platlist span-all" role="list">
              <div className="plat plat-2col" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>What we do</h3></div><p className="plat-build">Map the personal information each agent touches, check which AI provider sees it and on what terms, keep access to the minimum, and draft the inputs for your Privacy Impact Assessment.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>What you keep</h3></div><p className="plat-build">You remain responsible for the personal information you hold. We make that easier with scoped access, logs of what the agent did, and a written usage policy your team can follow.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>What we do not do</h3></div><p className="plat-build">We are not lawyers and do not give legal sign-off. We build to the requirements you and your adviser set, and document everything they need to review.</p></div>
            </div>
          </div>
        </section>

        {/* ═══ COST DRIVERS + ENGAGEMENT SHAPES (no pricing) → list + scope panel ═══ */}
        <section className="section au-top" id="cost">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Scope, not packages</div>
              <h2>What decides the cost of an AI automation service</h2>
              <p className="lead">
                We do not publish prices, because two agents with the same name can be very different jobs. Every
                engagement is quoted after a free call, with a fixed price per stage. It usually takes one of four
                shapes.
              </p>
            </div>
            <div className="au-split">
              <div>
                <ol className="au-numlist">
                  <li><span><b>Process mapping sprint.</b> We map one or two processes, rank the automation options and hand you a written plan and quote. Some businesses take the plan to another builder, and that is fine.</span></li>
                  <li><span><b>Single-agent build.</b> One AI agent doing one job across your systems, taken through testing and a supervised pilot to go-live.</span></li>
                  <li><span><b>Automation programme.</b> Several agents and workflows across teams, built in order of value, sharing the same logging, approval and privacy setup.</span></li>
                  <li><span><b>Monthly support.</b> Monitoring, rule updates, fixes when connected tools change, and a regular report on what your agents did.</span></li>
                </ol>
                <ModalCTAButton label="Talk to the Founder" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              </div>
              <div className="au-panel">
                <div className="eyebrow">What moves the scope</div>
                <ul className="trigrows">
                  <li><span className="m">Number of systems to connect</span><span className="t">Reach</span></li>
                  <li><span className="m">How messy the inputs are</span><span className="t">Handling</span></li>
                  <li><span className="m">Approval and logging needs</span><span className="t">Control</span></li>
                  <li><span className="m">Sensitive or health information</span><span className="t">Privacy</span></li>
                  <li><span className="m">AI model usage</span><span className="t">Paid direct</span></li>
                  <li><span className="m">Support after launch</span><span className="t">Optional</span></li>
                  <li><span className="m">First call with the founder</span><span className="t">Free</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SYDNEY / MELBOURNE / BRISBANE + DEMAND → prose + demand bars ═══ */}
        <section className="section au-top" id="australia-wide">
          <div className="wrap au-split">
            <div className="au-prose">
              <div className="eyebrow">Australia-wide</div>
              <h2>An AI automation agency for Sydney, Melbourne, Brisbane, Perth and beyond</h2>
              <p>
                People search for an AI automation agency in Sydney or Melbourne expecting to need someone nearby.
                For this work you do not. We run projects remotely with video workshops, shared process maps and
                written plans, and we keep calls inside Australian business hours for Sydney, Melbourne, Brisbane,
                Perth, Adelaide, Canberra and regional towns.
              </p>
              <p>
                What matters more than a postcode is who does the work. FactoryJet has served more than 500
                businesses since 2014, with a decade-plus in commerce: B2B ordering for brands such as Bombay
                Petals and DTC stores such as Belle Maison. That is why our agents tend to sit where
                ecommerce, finance and operations meet. If your agent needs to live inside a store, see our{' '}
                <a href="/au/shopify-development">Shopify development</a> and{' '}
                <a href="/au/ecommerce-development">ecommerce development</a> work in Australia.
              </p>
              <p>
                For background reading, our guides on{' '}
                <a href="/blog/agentic-ai-vs-ai-agents">agentic AI vs AI agents</a>,{' '}
                <a href="/blog/ai-chatbots-vs-ai-agents-business">AI chatbots vs AI agents</a> and{' '}
                <a href="/blog/how-to-hire-an-ai-agent-developer-2026">how to hire an AI agent developer</a>{' '}
                go deeper on the questions buyers ask most.
              </p>
              <ul className="city-list">
                <li><a href="/au">FactoryJet Australia</a></li>
                <li><a href="/au/melbourne">Melbourne</a></li>
                <li><a href="/au/brisbane">Brisbane</a></li>
                <li><a href="/au/adelaide">Adelaide</a></li>
                <li><a href="/au/canberra">Canberra</a></li>
              </ul>
            </div>
            <div className="demand">
              <div className="demand-head"><span>Australia · Monthly Search Demand</span><b>DataForSEO</b></div>
              <ul>
                {[
                  { kw: 'ai agents', v: '6,600', w: '100%', kd: 'Mostly research, some buyers' },
                  { kw: 'ai automation', v: '1,000', w: '15%', kd: 'Growing, mixed intent' },
                  { kw: 'autonomous ai agents', v: '720', w: '11%', kd: 'Agentic AI research' },
                  { kw: 'ai automation agency', v: '390', w: '6%', kd: 'Buyer intent' },
                  { kw: 'business process automation', v: '260', w: '4%', kd: 'Buyer intent, higher value' },
                  { kw: 'ai agents australia', v: '140', w: '2%', kd: 'Local intent' },
                  { kw: 'ai automation service', v: '90', w: '1.4%', kd: 'Buyer intent' },
                  { kw: 'ai agent for business', v: '70', w: '1.1%', kd: 'Buyer intent' },
                ].map((r) => (
                  <li key={r.kw} className="demand-row">
                    <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<small> searches</small></span></div>
                    <div className="demand-bar"><i style={{ width: r.w }} /></div>
                    <div className="demand-kd">{r.kd}</div>
                  </li>
                ))}
              </ul>
              <p className="demand-src">Source: DataForSEO, Australia, September 2026</p>
            </div>
          </div>
        </section>

        {/* ═══ WORKED EXAMPLE (warehouse / operations story) → definition module ═══ */}
        <section className="definition" id="worked-example">
          <div>
            <VisualSlot page={PAGE_KEY} slot="definition" kind="photo" ratio="3:2" className="definition-image"
              subject="A customer service team member in an online store's back office working through an order inbox an AI agent has already sorted">
              <img src="/images/au/ai-agents/ai-agents-orders.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Over the shoulder of a customer service team member in a Melbourne online store’s back office, working through an order inbox an AI agent has already sorted" />
            </VisualSlot>
          </div>
          <div className="definition-copy">
            <div className="eyebrow">What good looks like</div>
            <h2>A worked example: the order inbox in an online store’s warehouse</h2>
            <p>
              Here is the kind of AI workflow automation we build, described step by step. It is an illustration,
              not a client case study.
            </p>
            <p>
              A Melbourne ecommerce business gets order questions by email and web chat: where is my parcel, can I
              change the size, how do I return this. Each one means opening Shopify, then the courier’s tracking,
              then writing a reply.
            </p>
            <p>
              The agent reads each message, finds the order in Shopify, checks tracking, and drafts a reply with
              the real status. Simple status questions go out after a person approves them in bulk. Returns are
              checked against the store’s policy and the Australian Consumer Law rules the business has set, then
              passed to a person with everything attached. Anything angry or unusual goes straight to a human.
            </p>
            <p>
              The coordinator starts the day with a short list of exceptions instead of a full inbox. The team
              still owns every customer relationship. They just spend less of the day copying order numbers.
            </p>
          </div>
        </section>

        {/* ═══ AGENCIES (self-disclosure, ItemList from AGENCIES) → ruled rows ═══ */}
        <section className="section platforms" id="agencies">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">The honest landscape</div>
                <h2>AI automation agencies in Australia worth knowing</h2>
              </div>
              <p>
                We are one option, not the only one. These Australian AI automation agencies show up when people search
                for AI agents or ask ChatGPT, Gemini and Perplexity for a recommendation. Each note is based on what the
                company says on its own website. Talk to two or three and pick the fit.
              </p>
            </div>
            <div className="platlist" role="list">
              {AGENCIES.map((a, i) => (
                <div key={a.name} className={a.name === 'FactoryJet' ? 'plat plat-2col plat-own' : 'plat plat-2col'} role="listitem">
                  <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                  <div className="plat-name"><h3>{a.name}</h3>{a.name === 'FactoryJet' && <span className="plat-flag">That is us</span>}</div>
                  <p className="plat-build">{a.note}</p>
                </div>
              ))}
            </div>
            <p className="sub-note">
              Agencies named from live Australian search results and AI assistant answers for AI automation agency queries, September 2026. Each company’s own website was checked on 26 September 2026 for an Australian office and the services named. Listing is not endorsement.
            </p>
            <p className="au-after">
              Want more detail on each one? We compare 13 of them, including us, by location, client size, platforms and
              published prices in our guide to the <a href="/blog/best-ai-agencies-australia-2026">best AI agencies in Australia</a>.
            </p>
          </div>
        </section>

        {/* ═══ RELATED AI SERVICES → agentdir (grouped directory, as on /services/ai-agent-development) ═══ */}
        <section className="section agentdir" id="related">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Related AI services in Australia</div>
              <h2>Not quite an AI agent? These may fit better</h2>
            </div>
            <div className="agentdir-group">
              <div className="agentdir-label">
                <h3>AI services in Australia</h3>
                <span className="mono agentdir-count">{RELATED.length} pages</span>
              </div>
              <ul className="agentdir-grid au-grid-2">
                {RELATED.map((c) => (
                  <li key={c.h}>
                    <a href={c.h}>
                      <span className="agentdir-t">{c.t}</span>
                      <span className="agentdir-l">{c.d}</span>
                      <span className="agentdir-go" aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ═══ FAQ (Family A accordion; same FAQ_ITEMS array as the FAQPage JSON-LD) ═══ */}
        <AuFaq
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          heading="AI agents and automation: questions Australian business owners ask"
          askLabel="Still have a question? Ask the founder →"
          askNote="Replies within 24 hours."
        />

        {/* ═══ FINAL CTA (light, US finalcta) ═══ */}
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <div className="eyebrow">Ready when you are</div>
              <h2>See which job an AI agent could take off your team’s plate</h2>
              <p>
                Send your name and work email. The founder replies within 24 hours to book a short call about your
                systems, the task you want to automate, and whether an AI agent is the right answer. No spam, no
                obligation.
              </p>
            </div>
            <div className="ctas">
              <ModalCTAButton label="Talk to the Founder" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              <a className="btn btn-ghost" href="/au/ai-consulting">Start with AI consulting</a>
            </div>
          </div>
        </section>

      </main>
      </div>

      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}

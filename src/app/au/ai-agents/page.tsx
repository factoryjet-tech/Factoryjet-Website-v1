import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
import '../au-service.css';

const CANONICAL = 'https://factoryjet.com/au/ai-agents';
const UPDATED = '2026-09-25';
const TITLE = 'AI Automation Agency Australia | AI Agents | FactoryJet';
const H1 = 'AI Automation Agency Australia: Custom AI Agents Built Into the Tools You Already Run';
const DESCRIPTION =
  'FactoryJet is an AI automation agency for Australian businesses. We build custom AI agents inside Xero, HubSpot, ServiceM8 and Microsoft 365. You own them.';

/* Design tokens, copied by value from ../au-service.css so inline styles stay
   on-system without CSS custom property references in this file. */
const T = {
  ink: '#0F0F12',
  n200: '#E5E5E0',
  n400: '#6E6E68',
  orange: '#F05A28',
  green: '#047857',
  small: '#B23E13',
  fm: "'Geist Mono',monospace",
  fd: "'Plus Jakarta Sans',sans-serif",
};

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

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
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
    answer: 'Yes. AI customer service agents answer common questions by chat, email or phone, look up orders or bookings, and hand harder cases to a person. They work well for order status, booking changes and first-line questions. Under OAIC guidance, public-facing AI tools such as chatbots should be clearly identified as AI. For phone answering specifically, see our AI receptionist service for Australian businesses.' },
  { category: 'basics', question: 'What are the five types of agent in AI?',
    answer: 'The classic textbook list is simple reflex agents, model-based reflex agents, goal-based agents, utility-based agents and learning agents. It describes how an agent decides, from fixed reactions up to agents that improve with experience. Business AI agents today mostly use a large language model to plan, plus fixed rules and approval steps around it, so the textbook labels matter less than what the agent is allowed to do.' },
  { category: 'basics', question: 'Is AI automation still in demand in Australia?',
    answer: 'Yes, and it is early. The Australian Bureau of Statistics found about 12% of Australian businesses used AI in 2024–25, up from 1% in 2021–22. Use is highest in professional services at 24%, and still low in construction at 6% and transport, postal and warehousing at 1%. That gap is where practical, well-scoped automation tends to pay off first.' },

  // ── Choosing ──
  { category: 'choosing', question: 'What is the leading AI automation agency in Australia?',
    answer: 'There is no single leader, and any agency that claims the title is marketing. The right choice depends on your size, your systems and whether you want strategy, a build or ongoing management. Aivy, Team 400, FlowWorks, Osher Digital, Advancer and AI Lab Australia appear often in Australian search results and AI answers. We list them, and ourselves, with a neutral note on each further up this page.' },
  { category: 'choosing', question: 'Which AI automation agencies are located in Australia?',
    answer: 'Several have Australian offices, including Aivy, Team 400 (Sydney, Brisbane, Melbourne), Osher Digital and Advancer (Brisbane), AI Lab Australia (Sydney), IOTAI and BRAIVE. FactoryJet serves Australian businesses remotely from our engineering team, with the founder involved in every project. Whoever you pick, ask where your data will be stored and who actually writes the code.' },
  { category: 'choosing', question: 'How do I choose an AI agent developer?',
    answer: 'Ask for systems they have put live, not demos. Ask who writes the code and whether that person supports it after launch. Ask how they handle personal information under the Privacy Act, how the agent asks a human for approval, and what you own at the end. A good AI agent developer answers all of these plainly and tells you when a simpler automation would do.' },
  { category: 'choosing', question: 'Should I use Zapier, Make or n8n myself, or hire an agency?',
    answer: 'Do it yourself if the job is simple, low risk and someone on your team enjoys building it. No-code tools are great for moving data between two apps. Hire help when the job touches several systems, involves customer or financial data, needs an approval step, or would hurt if it silently broke. Many of our builds use n8n or similar tools underneath, set up properly and monitored.' },
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
    answer: 'Pricing varies widely because the work varies widely. The main drivers are how many systems the agent connects to, how messy the inputs are, how much human approval and logging it needs, how sensitive the data is, and whether you want ongoing support. We do not publish a rate card. We scope after a free call with the founder and give you a fixed quote per stage.' },
  { category: 'cost', question: 'How much does it cost to build an AI agent in Australia?',
    answer: 'A focused agent that does one job in one or two systems costs far less than a multi-agent system spanning finance, CRM and operations. Add model usage fees, paid directly to the AI provider, and a monthly support plan if you want one. The honest way to price it is to map the process first. Talk to the founder and you will get a fixed-scope quote, not a range.' },
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
       ItemList). Each note is based on the company’s own homepage, fetched
       2026-09-25. ───────────────────────────────────────────────────── */
const AGENCIES: { name: string; note: string }[] = [
  { name: 'FactoryJet', note: 'That is us. Senior engineers who map the process, build custom AI agents into your existing tools with human approval steps, and support them after launch. Founder involved on every project. Strongest where AI meets commerce, finance and operations systems. You own everything we build.' },
  { name: 'Aivy', note: 'An Australian AI automation agency focused on six industries: accounting, ecommerce, healthcare, NDIS, real estate and professional services. Offers document and finance automation, Xero integrations and chatbots, and describes fixed-scope pilots.' },
  { name: 'Team 400', note: 'An AI agency and consultancy with a presence in Sydney, Brisbane and Melbourne. Covers AI agent development alongside Microsoft AI work (Azure AI Foundry, Copilot Studio, Power Automate) and .NET and React software development.' },
  { name: 'FlowWorks', note: 'An Australian AI consulting and automation firm that starts with an AI Readiness Review, then builds automations and agents connected to existing tools, with a focus on governance. Publishes a long guide to AI agents for Australian businesses.' },
  { name: 'Edison AI', note: 'An AI implementation and training partner for Australian SMBs. Audits workflows, automates repetitive work and trains teams to use AI, with a strong emphasis on staff capability.' },
  { name: 'Osher Digital', note: 'Brisbane-based business automation consultants offering AI agent development, robotic process automation, system integrations and custom ERP software, and says clients own the code outright.' },
  { name: 'Advancer', note: 'A Brisbane AI agency offering AI training, AI agents, voice AI, custom AI and data consulting, plus agent mapping and fractional AI director services.' },
  { name: 'AI Lab Australia', note: 'A Sydney AI automation agency building custom chatbots, AI voice assistants, agentic workflows and custom web applications, with AI strategy consulting and group training.' },
  { name: 'IOTAI', note: 'Describes itself as a managed intelligence provider that builds and manages AI agents, workflows and business tools, including n8n automation, Microsoft Copilot deployment and on-premise AI for legal, health and finance.' },
  { name: 'BRAIVE', note: 'Describes itself as one of Australia’s first AI agencies. Offers AI roadmaps and strategy, AI training and workshops, custom automation and agents, chatbots and pre-built automations.' },
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

const srcNote = { fontFamily: T.fm, fontSize: 11, color: T.n400, marginTop: 12 } as const;
const srcLink = { textDecoration: 'underline' } as const;

export default function AiAgentsAUPage() {
  return (
    <>
      <script id="ld-au-ai-agents" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SiteHeader locale="au" logoHref="/au" />

      <div className="au-svc">
      <main>

        <Breadcrumbs items={crumbs} />

        {/* ═══ 1. HERO ═══ */}
        <section className="sec-lg dot-grid" style={{ position: 'relative', paddingTop: 36 }}>
          <div className="wrap">
            <div className="col-6040">
              <div>
                <div className="flex-wrap mb-6">
                  <span className="chip"><span className="dot dot-orange" />AI Automation Agency Australia</span>
                  <span className="chip">AI Agent Development</span>
                  <span className="chip">Human Approval Built In</span>
                </div>
                <h1 style={{ fontSize: 'clamp(2.1rem, 3.9vw, 3.05rem)' }}>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  FactoryJet is an AI automation agency for Australian businesses. We design, build and support custom
                  AI agents that work inside Xero, MYOB, HubSpot, Salesforce, ServiceM8, Shopify, Microsoft 365 and
                  Google Workspace. People approve what matters, every action is logged, and you own the code.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
                  <div className="upd">Last updated<br />25 September 2026</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="au" source="au_ai_agents_hero" submitLabel="Map my first AI agent" />
                </div>
              </div>

              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/ai-agents/ai-agents-hero.webp" width={1400} height={933} fetchPriority="high" decoding="async" alt="Over the shoulder of a Sydney business owner approving the next step of an AI agent workflow on his laptop while his operations manager looks on" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">What every build includes</span>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Human approval steps</div><div className="scorecard-note">on anything that matters</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Built in</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Privacy Act and APP check</div><div className="scorecard-note">before a line of code</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Included</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Code, prompts and integrations</div><div className="scorecard-note">no platform lock-in</div></div>
                    <div className="scorecard-val" style={{ color: T.green, fontSize: 15 }}>Yours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 2. ANSWER-FIRST (GEO) ═══ */}
        <section className="sec">
          <div className="wrap">
            <div className="def" style={{ maxWidth: 940 }} data-speakable="true">
              <span className="lab">What does an AI automation agency do for an Australian business?</span>
              <p>
                An AI automation agency maps the repetitive work in your business, then designs, builds and supports AI
                agents that do it inside your existing software, such as Xero, HubSpot or ServiceM8. A good one adds
                human approval where it matters, follows the Privacy Act and the Australian Privacy Principles, and
                stays on after launch to keep the system accurate.
              </p>
            </div>
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">Three terms, in plain English</span>
              <p>
                An <b>AI agent</b> is software that reads a situation, decides the next step and takes an action in
                another system, within rules you set. <b>AI automation</b> is any workflow where AI handles part of the
                job, such as reading an invoice. <b>Business process automation</b> is the older, rules-only version:
                if this happens, do that. Most good systems combine all three.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              Australian businesses are only getting started. The Australian Bureau of Statistics found about 12% of
              businesses used AI in 2024–25, up from 1% in 2021–22. Use is highest in professional services and lowest
              in construction and transport, the industries with the most phone calls, paperwork and double entry. That
              is the gap an AI automation service is built to close.
            </p>
          </div>
        </section>

        {/* ═══ 3. FACTS BAND (verified only) ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              {[
                { v: '12%', t: 'of Australian businesses used AI in 2024–25, up from 1% in 2021–22', s: 'ABS, 2024–25', u: SRC_ABS },
                { v: '24%', t: 'AI use in professional, scientific and technical services, the highest of any large sector', s: 'ABS, 2024–25', u: SRC_ABS },
                { v: '13', t: 'Australian Privacy Principles apply to personal information your AI agents handle', s: 'OAIC', u: SRC_OAIC_APPS },
                { v: '10 Dec 2026', t: 'new privacy policy rules start for computer programs that make significant decisions', s: 'OAIC, APP 1', u: SRC_OAIC_APP1 },
              ].map((r) => (
                <li key={r.t}>
                  <div style={{ fontFamily: T.fd, fontWeight: 800, fontSize: 26, color: T.orange }}>{r.v}</div>
                  <p style={{ fontSize: 13.5, color: T.ink, marginTop: 4 }}>{r.t}</p>
                  <a href={r.u} target="_blank" rel="noopener noreferrer nofollow" style={{ fontFamily: T.fm, fontSize: 10, color: T.n400, textDecoration: 'underline' }}>{r.s}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ 4. LISTICLE: WHAT AN AI AUTOMATION AGENCY DOES ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">The job, step by step</span>
              <h2>What an AI automation agency does: eight things you should get</h2>
              <p className="lead mt-4">
                Plenty of businesses now call themselves an AI automation agency, from solo course graduates to large IT
                firms. These eight things are what the work should actually include. Use the list to compare any
                agency, including us.
              </p>
            </div>
            <ol className="col-2 mt-10" style={{ gap: 16 }}>
              {[
                { n: '01', t: 'Map how the work runs today', d: 'Before any AI, someone should draw your process as it really runs, with the people who do it. The best automation targets are usually a step where someone copies information between two screens, or answers the same question many times a week.' },
                { n: '02', t: 'Tell you what not to automate', d: 'Some problems are a broken process or unfinished software setup, not an AI problem. An honest agency says so, even when it costs them a project.' },
                { n: '03', t: 'Design the agent’s rules and limits', d: 'What the agent may do alone, what needs approval, and what it must never touch. Written down, agreed with you, and reflected in the permissions it is given.' },
                { n: '04', t: 'Connect it to the tools you already use', d: 'Real integration with Xero, MYOB, HubSpot, ServiceM8, Shopify or Microsoft 365 through official connections, not a copy-paste workaround. You should not need to change software to get value.' },
                { n: '05', t: 'Check privacy before building', d: 'Which personal information the agent sees, which AI provider processes it, where it is stored, and how that fits the Australian Privacy Principles. The OAIC recommends a privacy by design approach, including a Privacy Impact Assessment.' },
                { n: '06', t: 'Test on real examples, then pilot with people watching', d: 'Past cases first, including the awkward ones. Then a supervised pilot where a person checks every action until the numbers show it is ready.' },
                { n: '07', t: 'Train your team and write simple usage rules', d: 'People trust an agent they understand. Short, role-specific training and a one-page rule sheet do more for adoption than any demo.' },
                { n: '08', t: 'Stay on after launch', d: 'Models, software and your business all change. Someone has to watch the logs, review the hand-offs, update the rules and fix breakages. The OAIC is clear that AI should not be a set-and-forget product.' },
              ].map((s) => (
                <li key={s.n} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.small, minWidth: 34 }}>{s.n}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{s.t}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ═══ 5. USE CASES BY AUSTRALIAN INDUSTRY ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">AI agents for business, by industry</span>
                <h2>Where AI agents earn their keep in Australian businesses</h2>
                <p className="lead mt-4" style={{ maxWidth: 580 }}>
                  These are the AI agent examples we are asked about most. Each one keeps a person in charge of the
                  decision and takes the repeated steps off their plate.
                </p>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/ai-agents/ai-agents-property.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Over the shoulder of a Perth property manager at the agency counter checking maintenance requests an AI agent has sorted, on a tablet" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '12px 10px 6px' }}>
                  <p style={{ fontSize: 14 }}>
                    A tenant emails about a leaking tap at 9pm. The agent logs the request in the property system,
                    suggests the right tradie and drafts the reply. The property manager approves both in the morning.
                  </p>
                </div>
              </div>
            </div>
            <ul className="col-3 mt-12">
              <li className="svc-card">
                <h3>Trades and home services</h3>
                <p className="mt-4">Turn emailed and web enquiries into booked jobs in ServiceM8, Simpro or Tradify, send quote follow-ups, chase overdue invoices from Xero, and collect photos and details before the visit. Construction sits at 6% AI use in the ABS data, so the head start is real.</p>
              </li>
              <li className="svc-card">
                <h3>Healthcare clinics</h3>
                <p className="mt-4">Admin only, never clinical decisions: sorting the practice inbox, drafting referral and recall letters, answering booking questions and preparing intake forms in tools like Cliniko. Health information is sensitive information under the Privacy Act, so approval steps and access limits are tighter.</p>
              </li>
              <li className="svc-card">
                <h3>Professional services</h3>
                <p className="mt-4">Accountants, law firms, advisers and agencies: client onboarding, collecting documents, summarising meetings into your practice management system, drafting routine letters and preparing month-end data from Xero or MYOB for a person to check.</p>
              </li>
              <li className="svc-card">
                <h3>Ecommerce and retail</h3>
                <p className="mt-4">Order status and returns questions answered from Shopify and courier tracking, product data cleaned and enriched, supplier purchase orders drafted from stock levels, and refunds routed for approval under your Australian Consumer Law returns policy.</p>
              </li>
              <li className="svc-card">
                <h3>Logistics and wholesale</h3>
                <p className="mt-4">Emailed purchase orders turned into sales orders, delivery exceptions flagged before the customer calls, proof-of-delivery matched to invoices, and B2B reorder reminders. Transport, postal and warehousing sits at 1% AI use in the ABS figures.</p>
              </li>
              <li className="svc-card">
                <h3>Property and real estate</h3>
                <p className="mt-4">Tenant maintenance requests sorted and passed to the right trade, rental enquiries answered and inspections booked, and routine notices drafted in tools like PropertyMe for a property manager to approve.</p>
              </li>
            </ul>
            <p style={srcNote}>
              Industry AI use figures: <a href={SRC_ABS} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>ABS, Characteristics of Australian Business, 2024–25</a>.
            </p>
          </div>
        </section>

        {/* ═══ 6. INTEGRATIONS ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
              <span className="eyebrow">Where our agents plug in</span>
              <h2>AI automation services built into Xero, MYOB, HubSpot, ServiceM8 and more</h2>
              <p className="lead mt-4">
                You should not have to change software to get value from AI. We build the agent around the tools your
                team already opens every morning, using each platform’s official connections and a separate login with
                only the access the job needs.
              </p>
              </div>
              <figure className="card" style={{ padding: 8, margin: 0 }}>
                <img src="/images/au/ai-agents/ai-agents-integrations.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Over the shoulder of an Adelaide bookkeeper comparing a paper supplier invoice with the draft bill an AI agent prepared on his second monitor" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <figcaption style={{ padding: '12px 10px 6px', fontSize: 14 }}>
                  The agent reads the supplier invoice and prepares a draft bill in Xero or MYOB. The bookkeeper checks it against the paper and approves. Nothing posts on its own.
                </figcaption>
              </figure>
            </div>
            <ul className="col-4 mt-10" style={{ gap: 16 }}>
              {[
                { t: 'Xero and MYOB', d: 'Read supplier invoices into draft bills, match payments, chase overdue invoices, prepare month-end data. GST coding suggested, never posted without approval.' },
                { t: 'HubSpot and Salesforce', d: 'Create and enrich leads and deals from enquiries, draft follow-ups, log calls and keep pipeline stages current.' },
                { t: 'ServiceM8, Simpro, Tradify', d: 'Turn enquiries into jobs, collect photos and site details, confirm bookings and send reminders.' },
                { t: 'Shopify', d: 'Answer order and returns questions, flag stock issues, draft purchase orders and tidy product data.' },
                { t: 'Microsoft 365', d: 'Outlook inbox triage, Teams hand-offs, SharePoint document search, Copilot Studio and Power Automate where they fit.' },
                { t: 'Google Workspace', d: 'Gmail sorting and drafting, Sheets reporting, Drive document filing and Calendar booking.' },
                { t: 'Practice and property tools', d: 'Cliniko, PropertyMe and practice management systems, through their official connections where available.' },
                { t: 'Your own systems', d: 'Older ERPs, databases and spreadsheets. If a system has an API or a structured export, an agent can usually work with it.' },
              ].map((c) => (
                <li key={c.t} className="card">
                  <h3 style={{ fontSize: 16 }}>{c.t}</h3>
                  <p className="mt-2" style={{ marginTop: 8, fontSize: 14 }}>{c.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ 7. HUMAN APPROVAL ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Human in the loop</span>
                <h2>Agents do the routine steps. People approve what matters.</h2>
                <div className="stack mt-6">
                  <p>
                    The most common fear about agentic AI is that it will do something expensive or embarrassing on its
                    own. That fear is reasonable, and it is a design problem, not a reason to avoid AI. Every agent we
                    build has a written list of actions it may take alone, actions that need a person to approve, and
                    actions it can never take.
                  </p>
                  <p>
                    Approval happens where your team already works: a Teams or Slack message, an email with approve and
                    edit buttons, or a queue inside your CRM. The agent does the reading, looking up and drafting. A
                    person makes the call. As the logs show the agent getting things right, you can move low-risk
                    actions to automatic. High-risk ones stay with a person for good.
                  </p>
                  <p>
                    Every action is logged with what the agent saw and why it acted, and there is a single switch to
                    pause it. That record is also what you will want if you ever need to explain an automated decision
                    to a customer or to the OAIC.
                  </p>
                </div>
              </div>
              <div className="stack">
                <figure className="card" style={{ padding: 8, margin: 0 }}>
                  <img src="/images/au/ai-agents/ai-agents-approval.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Over the shoulder of a Melbourne operations lead approving an action an AI agent drafted, on her phone, with a coffee in her other hand" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                  <figcaption style={{ padding: '12px 10px 6px', fontSize: 14 }}>
                    Approval arrives where your team already is. One tap to approve, one to send it back with a note.
                  </figcaption>
                </figure>
              <div className="card card-top-orange">
                <span className="eyebrow">A typical approval split</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">Reading and sorting enquiries</div><div className="scorecard-note">labels, routing, summaries</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Automatic</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Drafting replies and records</div><div className="scorecard-note">emails, jobs, deals, bills</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Draft only</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Sending to a customer</div><div className="scorecard-note">until trust is proven</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Approve</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Money, refunds, pricing</div><div className="scorecard-note">payments, credits, discounts</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Always approve</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Deleting data, clinical advice</div><div className="scorecard-note">outside the agent’s job</div></div><div className="scorecard-val" style={{ color: T.small, fontSize: 14 }}>Never</div></div>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 8. BUILD PROCESS (interactive <details>) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">How we build AI agents</span>
                <h2>AI agent development in seven steps, from process map to live system</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  Open any step to see what happens and what you get at the end of it. Each stage has a fixed price, and
                  you can stop after any of them.
                </p>
                <div className="card mt-8" style={{ padding: '4px 22px' }}>
                  {BUILD_STEPS.map((s) => (
                    <details key={s.n}>
                      <summary><span><span style={{ fontFamily: T.fm, color: T.small, marginRight: 10 }}>{s.n}</span>{s.t}</span></summary>
                      <div style={{ paddingBottom: 18 }}>
                        <p style={{ fontSize: 15 }}>{s.d}</p>
                        <p style={{ fontSize: 14, marginTop: 8 }}><b>You get:</b> {s.out}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/ai-agents/ai-agents-workshop.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A FactoryJet engineer and a Brisbane physiotherapy clinic owner map her booking process with sticky notes and arrows on a large sheet of paper" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    Step one is always paper, not code. We lay out the process with the people who do it, and the
                    right first agent usually becomes obvious within the hour.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline={'Which job in your business should an AI agent take first?'}
          sub={'Tell us which task eats your team’s week. On a short call with the founder, we will tell you whether an AI agent, a simpler automation or no AI at all is the right answer, and what a first build would involve.'}
          label={'Talk to the Founder'}
        />

        {/* ═══ 9. COMPARISON TABLE ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <span className="eyebrow">Side by side</span>
            <h2 style={{ maxWidth: 760 }}>DIY no-code vs an automation reseller vs a freelancer vs FactoryJet</h2>
            <p className="lead mt-4" style={{ maxWidth: 760 }}>
              Each option is right for someone. The table shows where each one tends to be strong, so you can match the
              option to the job.
            </p>
            <div className="card mt-8" style={{ padding: 0, overflowX: 'auto' }}>
              <table className="cmp-table">
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
                  <tr><td className="feat">Best fit</td><td className="fj"><span className="yes">Multi-system jobs with real data</span></td><td><span className="partial">Simple two-app tasks</span></td><td><span className="partial">Standard, packaged workflows</span></td><td><span className="partial">One-off, well-defined builds</span></td></tr>
                  <tr><td className="feat">Process mapping first</td><td className="fj"><span className="yes">Always</span></td><td><span className="no">You do it</span></td><td><span className="partial">Sometimes</span></td><td><span className="partial">Varies</span></td></tr>
                  <tr><td className="feat">Custom AI agent development</td><td className="fj"><span className="yes">Yes, senior engineers</span></td><td><span className="partial">Template agents</span></td><td><span className="partial">Their platform’s agents</span></td><td><span className="partial">Depends on the person</span></td></tr>
                  <tr><td className="feat">Human approval steps designed in</td><td className="fj"><span className="yes">Every build</span></td><td><span className="partial">If you add them</span></td><td><span className="partial">Varies</span></td><td><span className="partial">Varies</span></td></tr>
                  <tr><td className="feat">Privacy Act and APP check</td><td className="fj"><span className="yes">Before building</span></td><td><span className="no">On you</span></td><td><span className="partial">Varies</span></td><td><span className="partial">Rarely formal</span></td></tr>
                  <tr><td className="feat">Tool-neutral advice</td><td className="fj"><span className="yes">No resale deals</span></td><td><span className="partial">One tool</span></td><td><span className="no">Tied to what they resell</span></td><td><span className="yes">Usually</span></td></tr>
                  <tr><td className="feat">Monitoring and fixes after launch</td><td className="fj"><span className="yes">Same team</span></td><td><span className="no">On you</span></td><td><span className="yes">Often, on their platform</span></td><td><span className="partial">If available</span></td></tr>
                  <tr><td className="feat">Who owns it</td><td className="fj"><span className="yes">You: code, prompts, integrations</span></td><td><span className="yes">You, inside the tool</span></td><td><span className="partial">Often licensed to you</span></td><td><span className="partial">Check the contract</span></td></tr>
                  <tr><td className="feat">Risk if the builder disappears</td><td className="fj"><span className="yes">Low: documented and yours</span></td><td><span className="partial">Depends on who built it</span></td><td><span className="partial">Platform dependency</span></td><td><span className="no">High without documentation</span></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══ 10. WHICH OPTION FITS (interactive checklist) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Which option fits you</span>
              <h2>A quick check: do you need an AI automation agency at all?</h2>
              <p className="lead mt-4">
                Open the description that sounds most like your business. The honest answer is not always us.
              </p>
            </div>
            <div className="card mt-8" style={{ padding: '4px 22px', maxWidth: 900 }}>
              <details>
                <summary>We want to move data between two apps, and nothing sensitive is involved</summary>
                <div style={{ paddingBottom: 18 }}>
                  <p style={{ fontSize: 15 }}><b>Try DIY first.</b> Zapier, Make or n8n will likely do it in an afternoon. Bring in help only if it keeps breaking or starts touching customer or financial data.</p>
                </div>
              </details>
              <details>
                <summary>We are not sure where AI fits, and several teams have different ideas</summary>
                <div style={{ paddingBottom: 18 }}>
                  <p style={{ fontSize: 15 }}><b>Start with advice, not a build.</b> A short readiness assessment ranks the ideas by value and risk. See our <a href="/au/ai-consulting" style={srcLink}>AI consulting service for Australian businesses</a>.</p>
                </div>
              </details>
              <details>
                <summary>One job is clearly eating hours, and it runs across two or more of our systems</summary>
                <div style={{ paddingBottom: 18 }}>
                  <p style={{ fontSize: 15 }}><b>This is what an AI automation agency is for.</b> A custom agent with approval steps, built into the systems you already run and supported after launch. This page is the right place.</p>
                </div>
              </details>
              <details>
                <summary>Our problem is the phones: missed calls, after-hours enquiries, bookings</summary>
                <div style={{ paddingBottom: 18 }}>
                  <p style={{ fontSize: 15 }}><b>Look at a voice agent.</b> See our <a href="/au/ai-receptionist" style={srcLink}>AI receptionist for Australian businesses</a>, which answers, qualifies and books calls into your calendar or job system.</p>
                </div>
              </details>
              <details>
                <summary>We need a bigger AI build: a new app, AI inside our product, or a data platform</summary>
                <div style={{ paddingBottom: 18 }}>
                  <p style={{ fontSize: 15 }}><b>That is software development with AI in it.</b> See our <a href="/au/ai-development" style={srcLink}>AI development service in Australia</a>.</p>
                </div>
              </details>
              <details>
                <summary>We want ChatGPT and Google AI answers to recommend our business</summary>
                <div style={{ paddingBottom: 18 }}>
                  <p style={{ fontSize: 15 }}><b>That is AI search visibility, not automation.</b> See our <a href="/au/ai-seo" style={srcLink}>AI SEO service for Australian businesses</a>.</p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* ═══ 11. PRIVACY ACT / APPs / OAIC ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Privacy Act, APPs and OAIC guidance</span>
                <h2>Australian privacy rules shape the agent before the code does</h2>
                <div className="stack mt-6">
                  <p>
                    If your business is covered by the Privacy Act 1988 and an agent handles personal information, the
                    Australian Privacy Principles apply. Personal information means anything about an identifiable
                    person: a customer, a patient, a tenant or a staff member. There are 13 principles, and the Office of
                    the Australian Information Commissioner (OAIC) has published specific guidance on AI.
                  </p>
                  <p>
                    That guidance makes a few points that directly change how an AI agent is built. Privacy obligations
                    apply to personal information you put into an AI system and to AI output that contains it. Under
                    APP 6, you can generally only use information for the purpose it was collected for, unless a
                    secondary use would be reasonably expected or you have consent. As best practice, the OAIC
                    recommends not entering personal information, and especially sensitive information, into publicly
                    available AI chatbots.
                  </p>
                  <p>
                    The OAIC also says public-facing AI tools such as chatbots should be clearly identified as AI, that
                    businesses should take a privacy by design approach including a Privacy Impact Assessment, and that
                    AI products should not be treated as set and forget. And from 10 December 2026, new APP 1 rules
                    require your privacy policy to explain when a computer program uses personal information to make
                    decisions that could significantly affect someone.
                  </p>
                </div>
                <p style={srcNote}>
                  Sources: <a href={SRC_OAIC_AI} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>OAIC, guidance on privacy and the use of commercially available AI products</a>;{' '}
                  <a href={SRC_OAIC_APPS} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>OAIC, Australian Privacy Principles</a>;{' '}
                  <a href={SRC_OAIC_APP1} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>OAIC, APP guidelines chapter 1</a>.
                </p>
              </div>
              <div className="stack">
                <figure className="card" style={{ padding: 8, margin: 0 }}>
                  <img src="/images/au/ai-agents/ai-agents-privacy.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Two colleagues in a calm Canberra meeting room review a printed data flow diagram before any AI agent is built" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                  <figcaption style={{ padding: '12px 10px 6px', fontSize: 14 }}>
                    Privacy is planned on paper first: which information the agent sees, where it goes, and who can check it.
                  </figcaption>
                </figure>
              <div className="card card-top-orange">
                <span className="eyebrow">What that means in each build</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">Only the fields it needs</div><div className="scorecard-note">names and details masked where possible</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>APP 6</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Business AI terms, not consumer apps</div><div className="scorecard-note">no training on your data</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>OAIC</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Chatbots say they are AI</div><div className="scorecard-note">clear to every customer</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>OAIC</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Record of what each agent decides</div><div className="scorecard-note">ready for your privacy policy</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>APP 1</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Where data is stored and processed</div><div className="scorecard-note">Australian regions where available</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Disclosed</div></div>
              </div>
              </div>
            </div>
            <ul className="col-3 mt-10">
              <li className="card"><h3>What we do</h3><p className="mt-4">Map the personal information each agent touches, check which AI provider sees it and on what terms, keep access to the minimum, and draft the inputs for your Privacy Impact Assessment.</p></li>
              <li className="card"><h3>What you keep</h3><p className="mt-4">You remain responsible for the personal information you hold. We make that easier with scoped access, logs of what the agent did, and a written usage policy your team can follow.</p></li>
              <li className="card"><h3>What we do not do</h3><p className="mt-4">We are not lawyers and do not give legal sign-off. We build to the requirements you and your adviser set, and document everything they need to review.</p></li>
            </ul>
          </div>
        </section>

        {/* ═══ 12. COST DRIVERS + ENGAGEMENT SHAPES (no pricing) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Scope, not packages</span>
                <h2>What decides the cost of an AI automation service</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  We do not publish prices, because two agents with the same name can be very different jobs. Every
                  engagement is quoted after a free call, with a fixed price per stage. It usually takes one of four
                  shapes.
                </p>
                <ul className="scope-list num-list mt-6" style={{ maxWidth: 580 }}>
                  <li><b>Process mapping sprint.</b> We map one or two processes, rank the automation options and hand you a written plan and quote. Some businesses take the plan to another builder, and that is fine.</li>
                  <li><b>Single-agent build.</b> One AI agent doing one job across your systems, taken through testing and a supervised pilot to go-live.</li>
                  <li><b>Automation programme.</b> Several agents and workflows across teams, built in order of value, sharing the same logging, approval and privacy setup.</li>
                  <li><b>Monthly support.</b> Monitoring, rule updates, fixes when connected tools change, and a regular report on what your agents did.</li>
                </ul>
                <div className="mt-8">
                  <ModalCTAButton label="Talk to the Founder" region="au" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What moves the scope</span>
                <div className="scorecard-row"><div className="scorecard-metric">Number of systems to connect</div><div className="scorecard-val" style={{ fontSize: 14 }}>Reach</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">How messy the inputs are</div><div className="scorecard-val" style={{ fontSize: 14 }}>Handling</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Approval and logging needs</div><div className="scorecard-val" style={{ fontSize: 14 }}>Control</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Sensitive or health information</div><div className="scorecard-val" style={{ fontSize: 14 }}>Privacy</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">AI model usage</div><div className="scorecard-val" style={{ fontSize: 14 }}>Paid direct</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Support after launch</div><div className="scorecard-val" style={{ fontSize: 14 }}>Optional</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">First call with the founder</div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Free</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 13. SYDNEY / MELBOURNE / BRISBANE + DEMAND ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Australia-wide</span>
                <h2>An AI automation agency for Sydney, Melbourne, Brisbane, Perth and beyond</h2>
                <div className="stack mt-6">
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
                    <a href="/au/shopify-development" style={srcLink}>Shopify development</a> and{' '}
                    <a href="/au/ecommerce-development" style={srcLink}>ecommerce development</a> work in Australia.
                  </p>
                  <p>
                    For background reading, our guides on{' '}
                    <a href="/blog/agentic-ai-vs-ai-agents" style={srcLink}>agentic AI vs AI agents</a>,{' '}
                    <a href="/blog/ai-chatbots-vs-ai-agents-business" style={srcLink}>AI chatbots vs AI agents</a> and{' '}
                    <a href="/blog/how-to-hire-an-ai-agent-developer-2026" style={srcLink}>how to hire an AI agent developer</a>{' '}
                    go deeper on the questions buyers ask most.
                  </p>
                </div>
                <div className="flex-wrap mt-6">
                  <a className="city-pill" href="/au">FactoryJet Australia</a>
                  <a className="city-pill" href="/au/melbourne">Melbourne</a>
                  <a className="city-pill" href="/au/brisbane">Brisbane</a>
                  <a className="city-pill" href="/au/adelaide">Adelaide</a>
                  <a className="city-pill" href="/au/canberra">Canberra</a>
                </div>
              </div>

              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${T.n200}`, padding: '14px 18px' }}>
                  <span style={{ fontFamily: T.fm, fontSize: 10, letterSpacing: '.13em', textTransform: 'uppercase', color: T.n400 }}>Australia · Monthly Search Demand</span>
                  <span style={{ background: T.small, color: '#fff', fontFamily: T.fm, fontSize: 10, borderRadius: 999, padding: '3px 9px' }}>DataForSEO</span>
                </div>
                <div style={{ padding: '4px 18px 14px' }}>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
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
                        <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<span style={{ fontSize: 9, color: T.n400 }}> searches</span></span></div>
                        <div className="demand-bar"><i style={{ width: r.w }} /></div>
                        <div className="demand-kd">{r.kd}</div>
                      </li>
                    ))}
                  </ul>
                  <p style={{ textAlign: 'center', fontFamily: T.fm, fontSize: 10, color: T.n400, marginTop: 10 }}>Source: DataForSEO, Australia, September 2026</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 14. WAREHOUSE / OPERATIONS STORY ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-4060">
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/ai-agents/ai-agents-orders.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Over the shoulder of a customer service team member in a Melbourne online store’s back office, working through an order inbox an AI agent has already sorted" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
              </div>
              <div>
                <span className="eyebrow">What good looks like</span>
                <h2>A worked example: the order inbox in an online store’s warehouse</h2>
                <div className="stack mt-6">
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
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 15. COMPETITOR LIST (self-disclosure, ItemList) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">The honest landscape</span>
              <h2>AI automation agencies in Australia worth knowing</h2>
              <p className="lead mt-4">
                We are one option, not the only one. These Australian AI automation agencies show up when people search
                for AI agents or ask ChatGPT, Gemini and Perplexity for a recommendation. Each note is based on what the
                company says on its own website. Talk to two or three and pick the fit.
              </p>
            </div>
            <ul className="col-2 mt-10" style={{ gap: 16 }}>
              {AGENCIES.map((a, i) => (
                <li key={a.name} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.small, minWidth: 30 }}>{i + 1}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{a.name}{a.name === 'FactoryJet' && <span style={{ fontFamily: T.fm, fontSize: 10, background: T.small, color: '#fff', borderRadius: 999, padding: '2px 8px', marginLeft: 8, verticalAlign: 'middle' }}>That is us</span>}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{a.note}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p style={srcNote}>
              Agencies named from live Australian search results and AI assistant answers for AI automation agency queries, September 2026. Notes reflect each company’s own homepage on 25 September 2026. Listing is not endorsement.
            </p>
          </div>
        </section>

        {/* ═══ 16. SIBLING SERVICES (hover cards) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Related AI services in Australia</span>
              <h2>Not quite an AI agent? These may fit better</h2>
            </div>
            <ul className="col-4 mt-10" style={{ gap: 16 }}>
              {[
                { h: '/au/ai-consulting', t: 'AI consulting', d: 'Not sure where AI fits? A readiness assessment ranks the use cases worth doing first.' },
                { h: '/au/ai-development', t: 'AI development', d: 'Larger builds: AI inside your product, custom apps and deeper system integration.' },
                { h: '/au/ai-receptionist', t: 'AI receptionist', d: 'A voice agent that answers, qualifies and books calls, day and night.' },
                { h: '/au/ai-seo', t: 'AI SEO', d: 'Get your business named in ChatGPT, Perplexity and Google AI answers.' },
              ].map((c) => (
                <li key={c.h}>
                  <a href={c.h} className="svc-card" style={{ display: 'block', height: '100%' }}>
                    <h3 style={{ fontSize: 17 }}>{c.t} <span aria-hidden="true" style={{ color: T.small }}>→</span></h3>
                    <p className="mt-2" style={{ marginTop: 8, fontSize: 14 }}>{c.d}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ 17. FAQ (canonical Linear Minimal) ═══ */}
        <section className="sec-lg" id="faq">
          <div className="wrap">
            <style>{'.au-svc .faq-item summary::after{content:none;display:none}'}</style>
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">FAQ</span>
              <h2>AI agents and automation: questions Australian business owners ask</h2>
            </div>
            <div className="faq-grid">
              <aside className="faq-sidebar">
                <span className="faq-sidebar-topics">Topics</span>
                <nav className="faq-sidebar-nav">
                  {FAQ_CATEGORIES.map((c) => (
                    <a key={c.key} href={`#faq-${c.key}`}>
                      {c.label}
                      <span className="faq-nav-count">{FAQ_ITEMS.filter((f) => f.category === c.key).length}</span>
                    </a>
                  ))}
                </nav>
                <div className="faq-sidebar-cta">
                  <ModalCTAButton label="Still have a question? Ask the founder →" region="au" modalVariant="default" btnVariant="secondary-light" />
                  <p>Replies within 24 hours.</p>
                </div>
              </aside>

              <div>
                {FAQ_CATEGORIES.map((c) => (
                  <div key={c.key} id={`faq-${c.key}`} style={{ marginBottom: 40 }}>
                    <div className="faq-cat-header">
                      <span className="faq-cat-bar" />
                      <p className="faq-cat-label">{c.label}</p>
                    </div>
                    <ul className="faq-list">{FAQ_ITEMS.filter((f) => f.category === c.key).map((f) => (
                      <li key={f.question}><details className="faq-item">
                        <summary>
                          <span className="q-text">{f.question}</span>
                          <span className="chevron">
                            <svg viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          </span>
                        </summary>
                        <div className="faq-ans"><p>{f.answer}</p></div>
                      </details></li>
                    ))}</ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 18. FINAL CTA (the only dark section) ═══ */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Ready when you are</span>
            <h2>See which job an AI agent could take off your team’s plate</h2>
            <p className="mt-4">
              Send your name and work email. The founder replies within 24 hours to book a short call about your
              systems, the task you want to automate, and whether an AI agent is the right answer. No spam, no
              obligation.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="Talk to the Founder" region="au" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/au/ai-consulting" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>Start with AI consulting</a>
            </div>
          </div>
        </section>

      </main>
      </div>

      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} variant="dark" tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}

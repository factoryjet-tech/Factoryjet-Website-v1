import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import './ai-agents.css';

const CANONICAL = 'https://factoryjet.com/uk/ai-agents';
const UPDATED = '2026-08-25';

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD, so the
   schema can never describe a trail a human cannot see. Never hand-copy a
   second list here. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'AI Automation Agency', url: CANONICAL },
];

/* ─── External sources, each fetch-verified 2026-08-25 (HTTP 200, claim
       confirmed in the fetched body) ──────────────────────────────────── */
const SRC_ONS =
  'https://www.ons.gov.uk/businessindustryandtrade/business/businessservices/articles/artificialintelligenceinukbusinesses/2023to2026';
const SRC_OFCOM =
  'https://www.ofcom.org.uk/media-use-and-attitudes/online-habits/from-apps-to-ai-search-how-the-uk-goes-online-in-2025';
const SRC_ICO =
  'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/what-are-the-accountability-and-governance-implications-of-ai/';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',       label: 'AI agents basics' },
  { key: 'build',        label: 'What we build' },
  { key: 'integrations', label: 'Integrations & ownership' },
  { key: 'results',      label: 'Results & working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── AI agents basics ──
  { category: 'basics', question: 'What is an AI automation agency?',
    answer: 'An AI automation agency builds AI into the way a business already works, instead of selling you a product to log into. The work is mapping which of your processes are worth automating, building an agent or workflow that handles one, connecting it to your existing systems, and keeping it accurate once it is live. It is engineering and integration work, not software resale.' },
  { category: 'basics', question: 'How many UK businesses actually use AI?',
    answer: 'The Office for National Statistics reports that self-reported AI use among UK businesses with 10 or more employees rose from around 12% in late 2023 to around 35% by June 2026. Use is uneven by sector: 58% in information and communication against 13% in construction. So roughly a third have started, and two thirds have not.' },
  { category: 'basics', question: 'Is most UK business AI use deep or shallow?',
    answer: 'Shallow, on the official numbers. The ONS found that the average number of AI technologies used per adopting business moved only from about 1.4 to about 1.6 between late 2023 and June 2026. Adoption spread sideways much faster than it went deep. Most firms bought one tool and stopped. That gap is where automation work still pays.' },
  { category: 'basics', question: 'What do AI automation agencies do?',
    answer: 'An AI automation agency designs, builds, and integrates AI agents and automated workflows for a business, rather than selling software off the shelf. That covers mapping which processes are worth automating, building the agent or workflow, wiring it into your existing tools, and keeping it running and accurate after launch.' },
  { category: 'basics', question: 'What is an AI agent versus a chatbot?',
    answer: 'A chatbot mostly answers questions inside a chat window, following a script or a language model reply. An AI agent goes further: it can take action across your systems on its own, looking up an order, updating a record, booking a slot, or escalating a case, without a person doing every step by hand.' },
  { category: 'basics', question: 'Is ChatGPT an agent or a language model?',
    answer: 'ChatGPT is a language model with some agent-like features layered on top, such as browsing or connecting to a calendar. It is not, by itself, an agent built around your business. An AI agent development company takes that same class of model and wires it into your specific tools, data, and rules.' },
  { category: 'basics', question: 'What is the difference between the big foundation model providers and an AI agent development agency?',
    answer: 'OpenAI, Google, and Anthropic build the underlying models. An AI agent development agency takes that model and builds the specific thing your business needs on top of it: the integrations, the guardrails, the testing, and the ongoing support. Most businesses need the second part far more than direct access to the first.' },
  { category: 'basics', question: 'What are the best AI automation agencies?',
    answer: 'It depends what you need automated and which systems you run. A strong AI automation agency should show real production builds, not just demos, explain exactly what it can integrate with, and be upfront about what an agent cannot yet do reliably. Ask any agency you are considering for examples, including us.' },
  { category: 'basics', question: 'How do companies typically adopt or roll out AI agents?',
    answer: 'Most businesses start with one narrow, well-defined process, often customer support or lead follow-up, run it alongside the existing team for a few weeks, then expand once it is proven. Rolling out several agents at once with no pilot is the most common way adoption goes wrong.' },
  { category: 'basics', question: 'Which companies are leading in AI agents?',
    answer: 'At the model layer, OpenAI, Google, and Anthropic are the names to know. At the application layer, where agents actually get built for real businesses, the field is far more fragmented and regional: strong UK and specialist teams often out-execute big-name platforms on the specific integration a business actually needs.' },
  { category: 'basics', question: 'What are the best AI agent development companies in 2026?',
    answer: 'Look past the marketing and check three things: can they show agents running in production, not just a demo, do they explain your integrations in plain language, and do you own what gets built. A lot of agencies in this space resell a template built by someone else. Ask directly whether yours does.' },

  // ── What we build ──
  { category: 'build', question: 'What can you actually automate for my business?',
    answer: 'Most of what we build falls into customer support, sales and scheduling, and internal operations: answering common questions, qualifying and booking leads, updating records, chasing follow-ups, and moving information between systems that currently need a person to copy and paste. We start with whichever of those costs you the most time.' },
  { category: 'build', question: 'Can you build a customer support agent?',
    answer: 'Yes. We build support agents trained on your real documentation and past conversations, and the work counts as AI chatbot development in practice: it can answer common questions, look up an order or account, and hand off to a person cleanly when a case needs one. It ships with monitoring so you can see what it answered.' },
  { category: 'build', question: 'Can you build a sales or scheduling agent?',
    answer: 'Yes. These agents qualify a lead, answer early questions, and book a call directly into your calendar, or chase a quote that has gone quiet. They are wired into your CRM and calendar so a booked meeting or updated deal stage happens automatically, not as a manual follow-up task.' },
  { category: 'build', question: 'Do you build custom agents or use no-code platforms?',
    answer: 'We build custom AI agents around your actual tools and rules rather than configuring a generic no-code template. No-code platforms are fine for a simple, single-step automation. Once logic branches, data needs handling carefully, or several systems need to talk to each other, a custom build holds up far better.' },
  { category: 'build', question: 'How long does it take to build one?',
    answer: 'It depends on how many systems the agent touches and how much of your data and process it needs to understand first. A focused single-process agent moves faster than one spanning several tools and edge cases. We give you a real timeline after the automation audit, not before.' },
  { category: 'build', question: 'Will an agent replace my staff?',
    answer: 'Usually it removes the repetitive part of a role, not the role. A support agent handling routine questions frees your team for the calls that need judgment. Most clients use the time it buys back to handle more volume with the same headcount, rather than to cut the team.' },
  { category: 'build', question: 'What happens if the AI gets something wrong?',
    answer: 'Every agent we build ships with monitoring, clear escalation rules, and a boundary around what it is allowed to decide on its own. Mistakes get caught early because you can see what the agent did, and anything outside its confidence or its rules hands off to a person automatically.' },

  // ── Integrations & ownership ──
  { category: 'integrations', question: 'Which tools do you integrate with?',
    answer: 'Most commonly your CRM, helpdesk, email, calendar, and WhatsApp, along with whatever else your team already relies on day to day. If a system has an API, or even just a well-structured export, we can usually connect an agent to it. We confirm exactly what is possible during the audit call.' },
  { category: 'integrations', question: 'Do I own the agent and the code after you build it?',
    answer: 'Yes. What we build is yours: the agent, the integrations, and the underlying code. We are not a platform you rent access to indefinitely. If you ever want to move the work in-house or to another team, you are not locked to us to keep it running.' },
  { category: 'integrations', question: 'Is my data secure?',
    answer: 'Access is scoped to exactly what each agent needs, credentials are handled properly, and your data is not used to train a model for anyone else. We agree the security requirements upfront, especially for anything touching customer or payment information, and build to that standard rather than a generic default.' },
  { category: 'integrations', question: 'What happens to the agent if we stop working together?',
    answer: 'It keeps running. Because you own the code and the integrations, an agent we build does not switch off if the engagement ends. We document the build so your own team, or another provider, can maintain it. That is different from a platform subscription that stops the moment you cancel.' },
  { category: 'integrations', question: 'Do you use my data to train a model?',
    answer: 'No. Your data is used to build and run your agent, not to train a model for anyone else. Where we use third-party AI providers, we use them on standard business terms that keep your data out of their training sets, and we are direct about which providers are involved in any build.' },
  { category: 'integrations', question: 'Do you build agents for regulated or sensitive industries?',
    answer: 'Yes, with the security and access controls scoped to what that sector actually requires. We ask about compliance and data-handling requirements at the audit stage, before any build starts, so the agent is designed around them from day one rather than retrofitted afterward.' },
  { category: 'integrations', question: 'Do we need a DPIA before an AI agent touches customer data?',
    answer: 'Often yes. The Information Commissioner’s Office says the accountability principle makes you responsible for complying with data protection law, and for showing that compliance, in any AI system that processes personal data. It names a data protection impact assessment, or DPIA, as the ideal way to demonstrate it. We raise this at the audit stage, not after launch.' },
  { category: 'integrations', question: 'Who is legally responsible for what the agent does, you or us?',
    answer: 'You remain the data controller for your own customer data, so the legal responsibility sits with your business. Our job is to build the agent so that responsibility is easy to meet: scoped access, a record of what the agent did, and clear limits on what it can decide alone. We document all of it as part of the build.' },
  { category: 'integrations', question: 'Can an agent work with a system that has no API?',
    answer: 'Sometimes. If the system exports a clean file on a schedule, or has a database we can read safely, an agent can usually still work with it. If it has neither, the honest answer is that the integration will be fragile and we will say so before you spend anything. We check this during the audit, not halfway through a build.' },

  // ── Results & working with us ──
  { category: 'results', question: 'How much does an AI automation agency charge?',
    answer: 'It depends on how many agents you need, how many systems they touch, and how complex the decisions inside each one are. A single support agent answering FAQs is a smaller job than a multi-agent system running sales, scheduling, and support together. We scope and quote after a free automation audit, not before.' },
  { category: 'results', question: 'How do you measure ROI?',
    answer: 'Against the outcome the agent exists for: tickets resolved without escalation, meetings booked, hours of manual work removed, leads followed up that previously went cold. We agree the number that matters before the build starts and report against it monthly, so you see the return, not just activity.' },
  { category: 'results', question: 'Do you support it after launch?',
    answer: 'Yes. Every agent ships with monitoring, and we review performance with you on a regular basis after launch, not just at handover. Businesses and their tools both change, so an agent that is tuned once and left alone drifts. We keep it accurate as your process evolves.' },
  { category: 'results', question: 'Do you work outside London?',
    answer: 'Yes. We work with UK businesses across London, Manchester, Birmingham, Leeds, and everywhere between, all handled remotely with regular video calls. Automation and integration work does not require anyone on-site, so a company anywhere in the UK gets the same senior team and the same build quality.' },
  { category: 'results', question: 'Who does the work?',
    answer: 'Senior engineers, with the founder involved on every build. We are not a sales team that hands your project to a junior team or an offshore subcontractor once the contract is signed. The people who scope your automation audit are the same people who build and support the agent.' },
  { category: 'results', question: 'How is this different from a generic AI automation agency reselling templates?',
    answer: 'A reseller configures a platform built by someone else and charges a markup. We design and build the agent and the integration ourselves, senior engineers, founder included, and you own the result. If an agency cannot show you a production build, only a demo, it is worth asking what you would actually own at the end.' },
  { category: 'results', question: 'What is the most common reason UK businesses stall on AI?',
    answer: 'A shortage of in-house expertise. The ONS found that among firms reporting any barrier to AI adoption, lack of expertise is one of the most cited, and 62% of those firms respond by training or retraining existing staff. Hiring an agency is the other route: you borrow the expertise for one build instead of trying to grow it from scratch.' },
  { category: 'results', question: 'What does an engagement with you look like in practice?',
    answer: 'Three shapes, depending on what you need. A one-off automation audit if you only want to know what is worth doing. A fixed-price milestone build if you have a specific process to automate. Or a monthly retainer if you want agents built and maintained on an ongoing basis. We recommend the shape that fits after the audit call.' },
  { category: 'results', question: 'What if an agent turns out not to be the right answer?',
    answer: 'We tell you. Plenty of problems that look like automation problems are really a broken process, a missing integration, or software your team never finished setting up. If that is what the audit finds, we say so rather than selling you an agent. It costs us a project and saves you a bad build.' },
  { category: 'results', question: 'How do we get started?',
    answer: 'Send your name and work email through the form on this page. The founder replies within 24 hours to book a short call, where we run a free automation audit on your business, show you which processes are worth automating first, and map what a build would involve. That first look costs nothing.' },
];

/* ─── Named UK AI automation / agent agencies (open self-disclosure, ItemList) ─ */
const AI_AUTOMATION_AGENCIES: { name: string; note: string }[] = [
  { name: 'FactoryJet', note: 'That is us. Engineers who design and build custom AI agents wired into your real tools, with the founder on every build and you owning what we ship, not a reseller of a template someone else built.' },
  { name: 'Ronins', note: 'A UK-based automation and AI agency working across workflow automation and AI integration projects for small and mid-sized businesses.' },
  { name: 'AI Automation Agency London', note: 'A London-focused automation agency named directly for the service, working on AI-driven process automation for local businesses.' },
  { name: 'Coding Sprint', note: 'A UK development studio offering AI automation and agent-building alongside broader software development work.' },
  { name: 'Elevate AI', note: 'An AI consultancy and automation provider working with UK businesses on AI adoption and workflow projects.' },
  { name: 'OpScaling', note: 'An operations-focused automation agency helping UK companies scale processes with AI and workflow tooling.' },
];

/* ─── JSON-LD ────────────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://factoryjet.com/#organization',
      name: 'FactoryJet',
      url: 'https://factoryjet.com',
      logo: 'https://factoryjet.com/logo.png',
      sameAs: [
        'https://www.linkedin.com/company/factoryjet',
        'https://www.crunchbase.com/organization/factoryjet',
      ],
    },
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'AI Automation Agency UK',
      serviceType: 'AI automation, AI agent development, and AI workflow integration',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      description:
        'AI automation agency in the UK. We design, build, and integrate custom AI agents for customer support, sales, scheduling, and operations, wired into the tools a business already runs.',
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
      name: 'AI Automation Agency UK | Custom AI Agents | FactoryJet',
      headline: 'The UK AI Automation Agency That Builds Agents Into Your Actual Tools',
      inLanguage: 'en-GB',
      datePublished: '2026-07-25',
      dateModified: UPDATED,
      author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    jobTitle: 'Chief Technical Architect',
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
      name: 'UK AI automation and AI agent development agencies',
      itemListElement: AI_AUTOMATION_AGENCIES.map((a, i) => ({
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
  title: 'AI Automation Agency UK | Custom AI Agents | FactoryJet',
  description:
    'FactoryJet is a UK AI automation agency building custom AI agents for support, sales and operations, wired into the tools you run. You own the build.',
  alternates: { canonical: CANONICAL, languages: { 'en-GB': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: 'AI Automation Agency UK | Custom AI Agents | FactoryJet',
    description:
      'A UK AI automation agency and AI agent development team. We design and build custom AI agents for customer support, sales, and operations, wired into the tools you already run. You own what we build. Free automation audit.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/uk/ai-agents-og.webp', width: 1200, height: 630, alt: 'AI automation agency UK, FactoryJet, building custom AI agents' }],
  },
  robots: { index: true, follow: true },
};

export default function AiAgentsUKPage() {
  return (
    <>
      <script id="ld-uk-ai-agents" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="uk-aiagents">
      <main>

        <Breadcrumbs items={crumbs} />

        {/* ═══ 1. HERO ═══ */}
        <section className="sec-lg dot-grid" style={{ position: 'relative' }}>
          <div className="wrap">
            <div className="col-6040">
              <div>
                <div className="flex-wrap mb-6">
                  <span className="chip"><span className="dot dot-orange" />UK AI Automation Agency</span>
                  <span className="chip">AI Agent Development</span>
                  <span className="chip">Custom Built, You Own It</span>
                </div>
                <h1>The UK AI Automation Agency That Builds Agents Into Your Actual Tools</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  FactoryJet is an AI automation agency working with businesses across the UK. We design and build
                  custom AI agents (customer support, sales, scheduling, ops, chatbots) that plug into the tools
                  you already run: your CRM, helpdesk, email, and WhatsApp. You own what we build, not us.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ projects delivered</span></div>
                  <div className="upd">Last updated<br />25 August 2026</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="uk" source="uk_ai_agents_hero" submitLabel="Get my free automation audit" />
                </div>
              </div>

              {/* Proof scorecard */}
              <div className="card card-top-orange">
                <span className="eyebrow">What we build</span>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Customer support agents</div><div className="scorecard-note">trained on your real knowledge base</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Built</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Sales &amp; scheduling agents</div><div className="scorecard-note">qualifying, booking, follow-up</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Built</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Workflow automations</div><div className="scorecard-note">CRM, helpdesk, email, WhatsApp</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Wired in</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Code and agent ownership</div><div className="scorecard-note">nothing licensed back to us</div></div>
                  <div className="scorecard-val" style={{ color: 'var(--green)', fontSize: 15 }}>100% yours</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Monitoring after launch</div><div className="scorecard-note">shipped with every agent</div></div>
                  <div className="scorecard-val" style={{ color: 'var(--green)' }}>Included</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 2. ANSWER-FIRST DEFINITION (GEO) ═══ */}
        <section className="sec">
          <div className="wrap">
            <div className="def" style={{ maxWidth: 940 }} data-speakable="true">
              <span className="lab">What is an AI automation agency?</span>
              <p>
                An AI automation agency builds AI into the way a business already works, rather than selling it a
                product to log into. The work is four things: finding which of your processes are worth
                automating, building an AI agent or workflow that handles one, connecting it to the systems you
                already run, and keeping it accurate after launch. FactoryJet does that for UK businesses.
              </p>
            </div>
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">And what is an AI agent?</span>
              <p>
                An AI agent is software that takes actions and completes multi-step tasks across your tools,
                rather than only answering questions in a chat window. It can look something up, update a record,
                send a message, or book a slot on its own. That is the difference between a chatbot and an agent.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              The question in 2026 is not whether a UK business uses AI. Around 35% of businesses with 10 or more
              employees now report using at least one AI technology, up from around 12% in late 2023, according
              to the Office for National Statistics. The question is whether that use has gone anywhere near deep
              enough to change how the business runs. On the same ONS figures, it has not. That gap, between AI
              you use and AI your business runs on, is the job an AI automation agency exists to close.
            </p>
          </div>
        </section>

        {/* ═══ 3. TRUST BAND ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              <li className="trust-pill"><span className="dot dot-orange" />Custom agents, built on your real tools</li>
              <li className="trust-pill"><span className="dot dot-orange" />Senior engineers, not a reseller playbook</li>
              <li className="trust-pill"><span className="dot dot-orange" />You own the code and the agent</li>
              <li className="trust-pill"><span className="dot dot-orange" />Founder involved on every build</li>
            </ul>
          </div>
        </section>

        {/* ═══ 4. WHY IT MATTERS NOW (cited external stats) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Why AI automation, why now</span>
                <h2>Your team already uses AI. Your business does not run on it yet.</h2>
                <div className="stack mt-6">
                  <p>
                    The Office for National Statistics tracks this directly. Self-reported AI use among UK
                    businesses with 10 or more employees has risen from around 12% in late 2023 to around 35% by
                    June 2026, almost tripling in under three years. Adoption is no longer the story. Most of
                    your competitors have started.
                  </p>
                  <p>
                    Here is the part almost nobody quotes. Over that same period, the average number of AI
                    technologies used per adopting business moved from about 1.4 to about 1.6. Adoption spread
                    sideways far faster than it went deep. In the ONS wording, adoption has been relatively
                    shallow. Most firms bought one tool, used it for one thing, and stopped.
                  </p>
                  <p>
                    That is the gap. Almost all of the AI in a typical UK business is personal: someone typing a
                    question into a browser tab and reading the reply. Ofcom recorded 1.8 billion UK ChatGPT
                    visits in the first eight months of 2025, up from 368 million a year earlier. Almost none of
                    it is operational: an agent that answers the customer, updates the record, or books the call
                    without a person doing the typing. Closing that gap is what an AI automation agency does.
                  </p>
                </div>

                <ul className="stack mt-8" style={{ maxWidth: 560 }}>
                  <li className="card" style={{ padding: '14px 18px' }}>
                    <p style={{ fontSize: 14 }}><b style={{ color: 'var(--ink)' }}>Sector matters more than size.</b> The ONS
                      puts AI use at 58% in information and communication against 13% in construction. If your
                      industry is at the low end, an agent is a competitive gap, not a tick-box exercise.</p>
                  </li>
                  <li className="card" style={{ padding: '14px 18px' }}>
                    <p style={{ fontSize: 14 }}><b style={{ color: 'var(--ink)' }}>Small firms are not locked out.</b> 28% of
                      UK businesses with 0 to 9 employees report using at least one AI technology, against 49% of
                      those with 250 or more. The gap is real but far smaller than most owners assume.</p>
                  </li>
                  <li className="card" style={{ padding: '14px 18px' }}>
                    <p style={{ fontSize: 14 }}><b style={{ color: 'var(--ink)' }}>Operations is the use case that wins.</b>{' '}
                      Improving business operations is the most common reported use of AI, named by over 60% of
                      larger businesses. That is exactly the work an agent does well.</p>
                  </li>
                  <li className="card" style={{ padding: '14px 18px' }}>
                    <p style={{ fontSize: 14 }}><b style={{ color: 'var(--ink)' }}>Expertise, not cost, is the usual blocker.</b>{' '}
                      Among UK firms reporting any barrier to AI adoption, lack of expertise is one of the most
                      cited, and 62% of them respond by training existing staff. Hiring the expertise for one
                      build is the faster route.</p>
                  </li>
                </ul>
                <p style={{ fontFamily: 'var(--fm)', fontSize: 11, color: 'var(--n400)', marginTop: 12 }}>
                  All four figures: <a href={SRC_ONS} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>ONS, Artificial intelligence in UK businesses: 2023 to 2026</a>, BICS Wave 159, June 2026.
                </p>
              </div>

              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--n200)', padding: '14px 18px' }}>
                  <span style={{ fontFamily: 'var(--fm)', fontSize: 10, letterSpacing: '.13em', textTransform: 'uppercase', color: 'var(--n400)' }}>UK · AI adoption in numbers</span>
                  <span style={{ background: '#B23E13', color: '#fff', fontFamily: 'var(--fm)', fontSize: 10, borderRadius: 999, padding: '3px 9px' }}>Sourced</span>
                </div>
                <ul style={{ padding: '6px 18px 16px', listStyle: 'none', margin: 0 }}>
                  {[
                    { v: '35%', t: 'of UK businesses with 10+ staff use at least one AI technology, up from 12% in late 2023', s: 'ONS, AI in UK businesses, 2023 to 2026', u: SRC_ONS },
                    { v: '1.6', t: 'AI technologies per adopting business, up only from 1.4. Adoption is wide, not deep', s: 'ONS, AI in UK businesses, 2023 to 2026', u: SRC_ONS },
                    { v: '1.8bn', t: 'UK ChatGPT visits, first 8 months of 2025, up from 368m', s: 'Ofcom, Online Nation, Dec 2025', u: SRC_OFCOM },
                    { v: '53%', t: 'of UK adults say they often see AI summaries in search results', s: 'Ofcom, Online Nation, Dec 2025', u: SRC_OFCOM },
                  ].map((r) => (
                    <li key={r.t} style={{ padding: '13px 0', borderBottom: '1px solid var(--n200)' }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                        <span style={{ fontFamily: 'var(--fd)', fontWeight: 800, fontSize: 22, color: 'var(--orange)' }}>{r.v}</span>
                        <span style={{ fontSize: 13, color: 'var(--ink)' }}>{r.t}</span>
                      </div>
                      <a href={r.u} target="_blank" rel="noopener noreferrer nofollow" style={{ fontFamily: 'var(--fm)', fontSize: 10, color: 'var(--n400)', textDecoration: 'underline' }}>{r.s}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 5. WHO BUILDS IT (E-E-A-T + photo) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Who actually builds it</span>
                <h2>Senior engineers ship your agents. Not a course, not a reseller.</h2>
                <div className="stack mt-6">
                  <p>
                    2026 has brought a wave of AI automation agency accounts selling the same thing: a reseller
                    dashboard, a rebranded template, and a course on the side. FactoryJet is not that. We are a
                    small team of engineers who design and ship production systems, and we say so plainly because
                    the difference shows up fast once an agent is actually running.
                  </p>
                  <p>
                    Bhavesh Barot, the founder, is personally involved in scoping and reviewing every build, not
                    just the sales call. There is no handoff to a junior team once the contract is signed. The
                    people who scope your automation audit are the same people who write the integration code and
                    watch the agent after launch.
                  </p>
                  <p>
                    Every agent we ship is wired into real systems, not a sandbox, and instrumented from day one
                    so you can see what it actually did: tickets it resolved, meetings it booked, hours it saved.
                    That is the standard we hold a build to before we call it finished.
                  </p>
                </div>
              </div>

              <div className="card" style={{ padding: 8 }}>
                <img src="/images/uk/shared/uk-team-collaborating.webp" width={900} height={672} loading="lazy" decoding="async" alt="A UK software team reviewing an automation dashboard together" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 6. WHAT AN AI AUTOMATION ENGAGEMENT INCLUDES ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 720 }}>
              <span className="eyebrow">The standard</span>
              <h2>What an AI automation engagement includes</h2>
              <p className="lead mt-4">
                Building AI agents for business is not one trick. It is a stack of engineering that makes an
                agent reliable, secure, and worth running in production. Every FactoryJet build covers all eight.
              </p>
            </div>
            <ul className="col-2 mt-12" style={{ gap: 24 }}>
              <li className="card">
                <h3>Workflow mapping</h3>
                <p className="mt-4">We find the process that is actually worth automating and where it breaks today, so the build targets real friction inside your business, not a generic use case.</p>
              </li>
              <li className="card">
                <h3>Custom agent design</h3>
                <p className="mt-4">The agent is designed around your CRM, helpdesk, inbox, or WhatsApp as they already exist, not a generic bot that expects you to change how you work.</p>
              </li>
              <li className="card">
                <h3>Customer support &amp; AI chatbot development</h3>
                <p className="mt-4">Trained on your real documentation so it can answer common questions directly, escalate cleanly when a case needs a person, and improve as it sees more of your traffic.</p>
              </li>
              <li className="card">
                <h3>AI workflow automation</h3>
                <p className="mt-4">Moving information between the tools you already run: updating a CRM, triggering a follow-up, syncing an order into fulfilment, without someone doing it by hand.</p>
              </li>
              <li className="card">
                <h3>Secure integration</h3>
                <p className="mt-4">Access scoped to exactly what each agent needs, credentials handled properly, and nothing touching a system you have not approved.</p>
              </li>
              <li className="card">
                <h3>Testing with real data</h3>
                <p className="mt-4">Before launch, every agent is run against your real conversations, tickets, or records, not a scripted demo, so it holds up on day one.</p>
              </li>
              <li className="card">
                <h3>Monitoring and guardrails</h3>
                <p className="mt-4">Every agent ships with monitoring and clear escalation rules, so you can see what it did and catch a mistake before a customer does.</p>
              </li>
              <li className="card">
                <h3>Ownership and ROI measurement</h3>
                <p className="mt-4">You own the agent, the code, and the integrations. We track the outcome that matters, tickets resolved, hours saved, meetings booked, and report it monthly.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* ═══ 6b. IN SCOPE / OUT OF SCOPE ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">The boundary</span>
              <h2>What is in a build, and what is not</h2>
              <p className="lead mt-4">
                Most disappointment with an AI automation agency comes from a boundary nobody drew at the start.
                So here is ours, written down before you ever speak to us.
              </p>
            </div>

            <div className="col-2 mt-10" style={{ gap: 32 }}>
              <div className="card">
                <span className="eyebrow">Included in every build</span>
                <ul className="scope-list yes-list mt-4">
                  <li><b>A workflow audit before anything is built.</b> We map the process, the systems it touches, and where it breaks now.</li>
                  <li><b>The agent itself,</b> designed around your rules rather than a template we reuse across clients.</li>
                  <li><b>Integrations into your live systems,</b> not a sandbox copy, with access scoped to what the agent needs.</li>
                  <li><b>Testing against your real data:</b> your tickets, your conversations, your records, before launch day.</li>
                  <li><b>Escalation rules</b> that define exactly what the agent may decide alone and when it must hand off to a person.</li>
                  <li><b>Monitoring from day one,</b> so you can read back what the agent actually did and when.</li>
                  <li><b>Written documentation of the build,</b> so your team or another provider can maintain it without us.</li>
                  <li><b>Full ownership of the code, the agent, and the integrations.</b> Nothing is licensed back to us.</li>
                  <li><b>An agreed success measure</b> set before the build starts, reported against monthly afterwards.</li>
                </ul>
              </div>

              <div className="card">
                <span className="eyebrow">Not included, and we will say so</span>
                <ul className="scope-list no-list mt-4">
                  <li><b>Model provider fees.</b> Running an agent means paying whichever AI provider it calls. That bill is yours and goes direct, with no markup through us.</li>
                  <li><b>Replacing software that already works.</b> If your helpdesk is fine, we integrate with it rather than rebuilding it.</li>
                  <li><b>Fixing a broken process by automating it.</b> Automating a bad process just produces bad outcomes faster. We flag it instead.</li>
                  <li><b>Agents that make final decisions on money, contracts, or people.</b> Those stay with a human by design, not by oversight.</li>
                  <li><b>Legal or compliance sign-off.</b> We build to the requirements you set and document what the agent does. Your data protection duties stay yours.</li>
                  <li><b>Guarantees of a specific percentage improvement.</b> Anyone quoting one before seeing your data is guessing.</li>
                  <li><b>Integrations into systems with no API and no usable export.</b> An API is the doorway a piece of software opens so other software can read and write its data. Without one, or a clean file export, an agent has no safe way in. We check this during the audit and tell you before you spend anything.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 7. LISTICLE ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 720 }}>
              <span className="eyebrow">How it works</span>
              <h2>Seven things we do to get your agent into production</h2>
              <p className="lead mt-4">
                A repeatable method, not a black box. Here is the work, in the order we do it.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {[
                { n: '01', t: 'Map the workflow', d: 'We find the process that is worth automating and where it currently breaks, so the plan targets real friction, not a buzzword.' },
                { n: '02', t: 'Design around your tools', d: 'The agent is designed to fit your CRM, helpdesk, inbox, or WhatsApp as they already exist, not the other way round.' },
                { n: '03', t: 'Build and test with real data', d: 'We build against your actual tickets, conversations, or records, not a scripted demo, so it holds up from day one.' },
                { n: '04', t: 'Integrate securely', d: 'Access is scoped to what the agent needs, credentials are handled properly, and nothing touches a system you have not approved.' },
                { n: '05', t: 'Launch with monitoring', d: 'Every agent ships with monitoring from day one, so you see what it did and catch a mistake before a customer does.' },
                { n: '06', t: 'Measure ROI monthly', d: 'Tickets resolved, hours saved, meetings booked, whatever the outcome is, we report it against a number, not a feeling.' },
                { n: '07', t: 'Iterate', d: 'Agents get tuned as your business changes. Nothing gets shipped once and left to drift.' },
              ].map((s) => (
                <li key={s.n} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--fm)', fontWeight: 700, fontSize: 15, color: 'var(--orange)', minWidth: 34 }}>{s.n}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{s.t}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

    

        <MidPageCTA
          headline={'Have a process eating your team alive?'}
          sub={'Describe the workflow and we will run a free automation audit on it. You get a straight answer on whether an AI agent genuinely helps here, or whether you just need better software. Plenty of times it is the second one.'}
          label={'Get my free automation audit'}
        />

        {/* ═══ 8. COMPARISON TABLE ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <span className="eyebrow">How we compare</span>
            <h2 style={{ maxWidth: 680 }}>FactoryJet vs a generic AI automation reseller vs DIY no-code</h2>
            <div className="card mt-8" style={{ padding: 0, overflow: 'hidden' }}>
              <table className="cmp-table">
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">FactoryJet</th>
                    <th>Generic AI automation reseller</th>
                    <th>DIY no-code</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Custom agents built for your actual tools</td><td className="fj"><span className="yes">Yes</span></td><td><span className="partial">Templates only</span></td><td><span className="partial">Limited</span></td></tr>
                  <tr><td className="feat">Real production integrations</td><td className="fj"><span className="yes">Yes</span></td><td><span className="no">Rarely</span></td><td><span className="partial">Depends on platform</span></td></tr>
                  <tr><td className="feat">You own the code and the agent</td><td className="fj"><span className="yes">Yes</span></td><td><span className="no">Rarely</span></td><td><span className="partial">Locked to platform</span></td></tr>
                  <tr><td className="feat">Security and reliability engineered in</td><td className="fj"><span className="yes">Yes</span></td><td><span className="partial">Varies</span></td><td><span className="no">Your responsibility</span></td></tr>
                  <tr><td className="feat">Measurable ROI tracking</td><td className="fj"><span className="yes">Yes</span></td><td><span className="no">No</span></td><td><span className="no">No</span></td></tr>
                  <tr><td className="feat">Who does the work</td><td className="fj"><span className="yes">Senior engineers + founder</span></td><td><span className="partial">Often subcontracted</span></td><td>You</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══ 9. PROCESS ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">How we work</span>
              <h2>From audit to running in four stages</h2>
            </div>
            <ol className="process-grid mt-12" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
              <li className="card"><span className="stage-num">01</span><h3>Automation audit</h3><p className="mt-4">We map your workflows and tools and find the highest-value process to automate first, free, before you commit to anything.</p></li>
              <li className="card"><span className="stage-num">02</span><h3>Design &amp; build</h3><p className="mt-4">The agent is designed around your systems, then built and tested against your real data, not a scripted demo.</p></li>
              <li className="card"><span className="stage-num">03</span><h3>Integrate &amp; launch</h3><p className="mt-4">Securely wired into your tools and launched with monitoring from day one, so you see what it does from the start.</p></li>
              <li className="card"><span className="stage-num">04</span><h3>Measure &amp; iterate</h3><p className="mt-4">Monthly reporting on the outcome that matters, with the agent tuned as your business and tools change.</p></li>
            </ol>
          </div>
        </section>

        {/* ═══ 10. WHO WE SERVE ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 720 }}>
              <span className="eyebrow">Who we work with</span>
              <h2>UK businesses ready to automate the repetitive part of the job</h2>
              <p className="lead mt-4">
                AI automation pays off fastest for businesses with a clear, repeated process eating up hours.
                Three groups make up most of our work.
              </p>
            </div>
            <ul className="col-3 mt-12">
              <li className="svc-card">
                <h3>Ecommerce and DTC brands</h3>
                <p className="mt-4">Order status, returns, and stock questions that eat up your support inbox. We build agents that answer them directly, and can work alongside your <a href="/uk/ecommerce-seo">ecommerce SEO</a> if visibility is also part of the goal.</p>
              </li>
              <li className="svc-card">
                <h3>Professional services and B2B</h3>
                <p className="mt-4">Firms where a lead goes cold waiting for a reply. We build agents that qualify, answer early questions, and book the call directly into your calendar.</p>
              </li>
              <li className="svc-card">
                <h3>Founders and small teams</h3>
                <p className="mt-4">Teams too small to have someone answering everything all day. An agent handles the volume so your best people spend time on the calls that actually need them.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* ═══ 10b. READINESS CHECKLIST + INTEGRATIONS ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Before you hire anyone</span>
                <h2>Nine signs a process is ready for an AI agent</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  Not every job is worth automating. Run your candidate process through this list first. If you
                  tick six or more, an agent will very likely pay for itself. If you tick two, it will not, and
                  we would rather you found that out here than after a build.
                </p>
                <ul className="scope-list num-list mt-6" style={{ maxWidth: 560 }}>
                  <li><b>It repeats.</b> The same shape of task happens many times a week, not once a quarter.</li>
                  <li><b>The rules can be written down.</b> If a competent new starter could follow a one-page instruction, an agent can follow it too.</li>
                  <li><b>The information already exists somewhere.</b> A help centre, past tickets, a product database, an order system.</li>
                  <li><b>Someone currently copies data between two screens.</b> That is the clearest signal of all.</li>
                  <li><b>Delay costs you something measurable.</b> A lead going cold, a customer churning, a refund escalating.</li>
                  <li><b>The systems involved have an API or a clean export.</b> Without one, an integration is fragile.</li>
                  <li><b>A wrong answer is recoverable.</b> Nothing irreversible happens if the agent gets one case wrong before a person catches it.</li>
                  <li><b>You can name the number that would improve.</b> Tickets resolved, meetings booked, hours returned.</li>
                  <li><b>Someone internally owns it.</b> Agents drift without an owner, the same way any other system does.</li>
                </ul>
              </div>

              <div className="card">
                <span className="eyebrow">Where agents plug in</span>
                <p className="mt-2" style={{ fontSize: 14 }}>
                  The tools UK teams bring us most often. If a system has an API, or even a well-structured
                  export, an agent can usually reach it. We confirm your exact stack on the audit call.
                </p>
                <div className="mt-6">
                  <p style={{ fontFamily: 'var(--fm)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: '#B23E13', marginBottom: 4 }}>Customer conversations</p>
                  <ul className="int-group">
                    <li><b>Helpdesk and ticketing.</b> Reading a ticket, drafting or sending the reply, tagging and routing it.</li>
                    <li><b>Shared inboxes.</b> Triaging what arrives and answering the routine half without a person.</li>
                    <li><b>WhatsApp and live chat.</b> Answering in the channel the customer already chose.</li>
                  </ul>
                </div>
                <div className="mt-6">
                  <p style={{ fontFamily: 'var(--fm)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: '#B23E13', marginBottom: 4 }}>Sales and scheduling</p>
                  <ul className="int-group">
                    <li><b>CRM.</b> The system holding your customer and deal records. An agent creates and updates records, moves a deal stage, and logs what was said.</li>
                    <li><b>Calendars.</b> Offering real availability and booking the slot, not just suggesting one.</li>
                    <li><b>Quote and proposal tools.</b> Chasing a quote that has gone quiet and flagging the ones worth a call.</li>
                  </ul>
                </div>
                <div className="mt-6">
                  <p style={{ fontFamily: 'var(--fm)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: '#B23E13', marginBottom: 4 }}>Operations and back office</p>
                  <ul className="int-group">
                    <li><b>Ecommerce and order systems.</b> Looking up an order, checking stock, starting a return.</li>
                    <li><b>Spreadsheets and internal databases.</b> Reading and writing the records a person updates by hand today.</li>
                    <li><b>Accounting and invoicing tools.</b> Matching, chasing, and flagging what does not reconcile.</li>
                    <li><b>Internal documentation.</b> Answering staff questions from your own written process, not a guess.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 11. UK MARKET + DEMAND ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <span className="eyebrow">The UK AI automation market</span>
            <h2 style={{ maxWidth: 780 }}>Businesses are already searching for this. Most agencies are not the engineers they claim to be</h2>
            <div className="col-6040 mt-8">
              <div>
                <div className="stack">
                  <p>
                    Look at what people actually type. &quot;AI automation agency&quot; is the phrase with real
                    demand behind it in the UK, and &quot;ai automation agency uk&quot; specifically is a
                    commercial-intent search: someone looking for a team to hire, not a definition to read.
                    Meanwhile &quot;ai agent development uk&quot;, the phrase most agencies write their pages
                    around, has effectively no search volume at all. We named this page after the search that
                    exists.
                  </p>
                  <p>
                    Whether you are searching for an AI automation agency UK-wide or specifically in London,
                    Manchester, Birmingham, or Leeds, this page exists to answer that search properly, with the
                    same senior team on every account and no reseller markup in between.
                  </p>
                </div>
                <div className="flex-wrap mt-6">
                  <a className="city-pill" href="/uk/london">AI Agents London</a>
                  <a className="city-pill" href="/uk/manchester">AI Agents Manchester</a>
                  <a className="city-pill" href="/uk/birmingham">AI Agents Birmingham</a>
                  <a className="city-pill" href="/uk/leeds">AI Agents Leeds</a>
                  <a className="city-pill" href="/uk/ai-seo">AI SEO</a>
                </div>
              </div>

              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--n200)', padding: '14px 18px' }}>
                  <span style={{ fontFamily: 'var(--fm)', fontSize: 10, letterSpacing: '.13em', textTransform: 'uppercase', color: 'var(--n400)' }}>UK · Monthly Search Demand</span>
                  <span style={{ background: '#B23E13', color: '#fff', fontFamily: 'var(--fm)', fontSize: 10, borderRadius: 999, padding: '3px 9px' }}>DataForSEO</span>
                </div>
                <div style={{ padding: '4px 18px 14px' }}>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    {[
                      { kw: 'ai automation agency', v: '720', w: '100%', kd: 'KD 10 · The head term' },
                      { kw: 'ai automation agency uk', v: '210', w: '29%', kd: 'KD 10 · Commercial intent' },
                      { kw: 'ai agents for business', v: '110', w: '15%', kd: 'KD 16 · Winnable' },
                      { kw: 'seo ai agents', v: '90', w: '13%', kd: 'KD 17 · Winnable' },
                      { kw: 'ai automation agency london', v: '70', w: '10%', kd: 'KD 10 · Local, winnable' },
                      { kw: 'ai chatbot development services', v: '40', w: '6%', kd: 'KD 0 · Quick win' },
                      { kw: 'ai agent development uk', v: '0', w: '1%', kd: 'No measurable demand' },
                    ].map((r) => (
                      <li key={r.kw} className="demand-row">
                        <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<span style={{ fontSize: 9, color: 'var(--n400)' }}> searches</span></span></div>
                        <div className="demand-bar"><i style={{ width: r.w }} /></div>
                        <div className="demand-kd">{r.kd}</div>
                      </li>
                    ))}
                  </ul>
                  <p style={{ textAlign: 'center', fontFamily: 'var(--fm)', fontSize: 10, color: 'var(--n400)', marginTop: 10 }}>Source: DataForSEO, United Kingdom, August 2026</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 12. COMPETITOR LISTICLE (self-disclosure, ItemList) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">The honest landscape</span>
              <h2>UK AI automation and agent agencies worth knowing</h2>
              <p className="lead mt-4">
                We would rather tell you the truth than pretend we are the only option. Here are UK teams doing
                real automation and agent-building work, including us. Talk to a few and pick the fit.
              </p>
            </div>
            <ul className="stack mt-10" style={{ maxWidth: 900 }}>
              {AI_AUTOMATION_AGENCIES.map((a, i) => (
                <li key={a.name} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--fm)', fontWeight: 700, fontSize: 15, color: 'var(--orange)', minWidth: 30 }}>{i + 1}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{a.name}{a.name === 'FactoryJet' && <span style={{ fontFamily: 'var(--fm)', fontSize: 10, background: '#B23E13', color: '#fff', borderRadius: 999, padding: '2px 8px', marginLeft: 8, verticalAlign: 'middle' }}>That is us</span>}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{a.note}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p style={{ fontFamily: 'var(--fm)', fontSize: 11, color: 'var(--n400)', marginTop: 14 }}>
              Agencies named from live UK search results for AI automation terms, July 2026. Listing is not endorsement, and we are one option among them.
            </p>
          </div>
        </section>

        {/* ═══ 13. WHAT SHAPES AN ENGAGEMENT (qualitative, no pricing) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Scope, not packages</span>
                <h2>What shapes an AI automation engagement</h2>
                <div className="stack mt-6">
                  <p>
                    We do not sell one-size AI automation packages, because a single support agent answering FAQs
                    and a multi-agent system running sales, scheduling, and support are different jobs. What
                    shapes the work is how many agents you need, how many systems they touch, and how complex the
                    logic behind each one is.
                  </p>
                  <p>
                    A business with one clear process to automate and modern tools already in place often needs a
                    focused build. A business still running on spreadsheets and email needs the integration work
                    first. We scope it after a short call and a free automation audit, so the plan matches what
                    you actually need rather than a fixed package.
                  </p>
                </div>

                <h3 className="mt-8">The three shapes an engagement takes</h3>
                <ul className="scope-list num-list mt-4">
                  <li><b>A one-off automation audit.</b> We map your workflows and tell you what is worth automating and what is not. Nothing gets built. Some businesses stop here, and that is a fine outcome.</li>
                  <li><b>A fixed-price milestone build.</b> One clearly defined process, scoped into stages with a fixed price agreed per stage, so you are never signing a blank cheque against an open-ended project.</li>
                  <li><b>A monthly retainer.</b> For businesses automating several processes over time, or where agents need continuous tuning as the business changes. Cancellable, and you keep everything already built.</li>
                </ul>

                <h3 className="mt-8">What the data rules add to any scope</h3>
                <p className="mt-4">
                  If an agent will touch customer data, UK data protection law shapes the build before the
                  engineering does. The Information Commissioner&rsquo;s Office is direct about it: the
                  accountability principle makes you responsible for complying with data protection law, and for
                  demonstrating that compliance, in any AI system that processes personal data. It points to a
                  data protection impact assessment, or DPIA, as the ideal way to show it. We raise that at the
                  audit stage rather than after launch, because retrofitting it is always the expensive route.
                </p>
                <p style={{ fontFamily: 'var(--fm)', fontSize: 11, color: 'var(--n400)', marginTop: 10 }}>
                  Source: <a href={SRC_ICO} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>ICO, Guidance on AI and data protection: accountability and governance implications of AI</a>.
                </p>

                <div className="mt-8">
                  <ModalCTAButton label="Get my free automation audit" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What moves the scope</span>
                <div className="scorecard-row"><div className="scorecard-metric">Number of agents you need</div><div className="scorecard-val" style={{ fontSize: 14 }}>Count</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Systems and tools they connect to</div><div className="scorecard-val" style={{ fontSize: 14 }}>Reach</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Complexity of the logic and decisions</div><div className="scorecard-val" style={{ fontSize: 14 }}>Depth</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Security and data requirements</div><div className="scorecard-val" style={{ fontSize: 14 }}>Base</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Free automation audit before you commit</div><div className="scorecard-val" style={{ color: 'var(--green)', fontSize: 14 }}>Always</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 14. FAQ (canonical Linear Minimal) ═══ */}
        <section className="sec-lg" id="faq">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>AI automation questions UK founders actually ask</h2>
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
                  <ModalCTAButton label="Still have a question? Ask the founder →" region="uk" modalVariant="default" btnVariant="secondary-light" />
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

        {/* ═══ 15. FINAL CTA ═══ */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Ready when you are</span>
            <h2>See what an agent could take off your plate</h2>
            <p className="mt-4">
              Send your name and work email. The founder replies within 24 hours with a free automation audit:
              which processes are worth automating first, and what a build would actually involve. No spam, no
              obligation.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="Get my free automation audit" region="uk" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/uk/web-design" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>See web design</a>
            </div>
          </div>
        </section>

      </main>
        <Footer />
      </div>
    </>
  );
}

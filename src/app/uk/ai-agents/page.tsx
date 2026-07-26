import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import './ai-agents.css';

const CANONICAL = 'https://factoryjet.com/uk/ai-agents';
const UPDATED = '2026-07-25';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',       label: 'AI agents basics' },
  { key: 'build',        label: 'What we build' },
  { key: 'integrations', label: 'Integrations & ownership' },
  { key: 'results',      label: 'Results & working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── AI agents basics ──
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
      name: 'AI Agent Development & AI Automation UK',
      serviceType: 'AI agent development, AI automation, and AI workflow integration',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      description:
        'AI automation agency in the UK. We design, build, and integrate custom AI agents for customer support, sales, scheduling, and operations, wired into the tools a business already runs.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
        { '@type': 'ListItem', position: 2, name: 'UK', item: 'https://factoryjet.com/uk' },
        { '@type': 'ListItem', position: 3, name: 'AI Agents', item: CANONICAL },
      ],
    },
    {
      '@type': ['WebPage', 'Article'],
      '@id': CANONICAL,
      url: CANONICAL,
      name: 'AI Agent Development & Automation Agency UK | FactoryJet',
      headline: 'AI Agents and Automation, Built for UK Businesses That Want Results, Not a Demo',
      inLanguage: 'en-GB',
      datePublished: '2026-07-25',
      dateModified: UPDATED,
      author: {
        '@type': 'Person',
        name: 'Bhavesh Barot',
        url: 'https://www.linkedin.com/in/bhaveshbarot/',
        jobTitle: 'Founder, FactoryJet',
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
  title: 'AI Agent Development & Automation Agency UK | FactoryJet',
  description:
    'FactoryJet is a UK AI automation agency. We build custom AI agents for support, sales, and ops, wired into your tools. You own the build. Free audit.',
  alternates: { canonical: CANONICAL, languages: { 'en-GB': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: 'AI Agent Development & Automation Agency UK | FactoryJet',
    description:
      'A UK AI automation agency and AI agent development team. We design and build custom AI agents for customer support, sales, and operations, wired into the tools you already run. You own what we build. Free automation audit.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/uk/ai-agents-og.webp', width: 1200, height: 630, alt: 'AI Agent Development & Automation Agency UK by FactoryJet' }],
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
                <h1>AI Agents and Automation, Built for UK Businesses That Want Results, Not a Demo</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  FactoryJet is a UK AI automation agency and AI agent development team. We design and build
                  custom AI agents (customer support, sales, scheduling, ops, chatbots) that plug into the tools
                  you already run: your CRM, helpdesk, email, and WhatsApp. You own what we build, not us.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ projects delivered</span></div>
                  <div className="upd">Last updated<br />25 July 2026</div>
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
              <span className="lab">What is an AI agent?</span>
              <p>
                An AI agent is software that can take actions and complete multi-step tasks across the tools a
                business relies on, not just answer questions in a chat window. It can look something up, update
                a record, send a message, or book a slot on its own. An AI automation agency builds these agents
                wired into your real systems, not a templated chatbot widget.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              The shift that matters in 2026 is not whether a UK business uses AI. Most already do, at least
              personally. It is whether that business has turned AI into something that acts on its behalf:
              answering a customer, updating a system, chasing a lead, without a person doing every step by hand.
              That is the gap between using AI and running on it. Closing it is the job an AI automation agency
              is built for.
            </p>
          </div>
        </section>

        {/* ═══ 3. TRUST BAND ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <div className="col-4" style={{ gap: 20 }}>
              <div className="trust-pill"><span className="dot dot-orange" />Custom agents, built on your real tools</div>
              <div className="trust-pill"><span className="dot dot-orange" />Senior engineers, not a reseller playbook</div>
              <div className="trust-pill"><span className="dot dot-orange" />You own the code and the agent</div>
              <div className="trust-pill"><span className="dot dot-orange" />Founder involved on every build</div>
            </div>
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
                    The adoption curve already happened. Ofcom, the UK communications regulator, found in its
                    Online Nation report, published in December 2025, that 54% of UK adults already use AI tools
                    such as ChatGPT, Copilot, or Gemini, up from 31% just a year earlier. That is not
                    early-adopter territory. That is most of the country.
                  </p>
                  <p>
                    The same report found that ChatGPT alone drew 1.8 billion UK visits in the first eight months
                    of 2025, up nearly five times year on year from 368 million. Your customers are already using
                    it. So, most likely, is whoever answers your phones and inboxes right now.
                  </p>
                  <p>
                    Here is the gap that matters. Almost all of that use is personal: someone typing a question
                    into a browser tab and reading the reply. Almost none of it is operational: an agent that
                    answers the customer, updates the record, or books the call without a person doing the typing.
                    Closing that gap, between AI you use and AI your business runs on, is what an AI automation
                    agency does. It is the whole of what we build.
                  </p>
                </div>
              </div>

              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--n200)', padding: '14px 18px' }}>
                  <span style={{ fontFamily: 'var(--fm)', fontSize: 10, letterSpacing: '.13em', textTransform: 'uppercase', color: 'var(--n400)' }}>UK · AI adoption in numbers</span>
                  <span style={{ background: '#B23E13', color: '#fff', fontFamily: 'var(--fm)', fontSize: 10, borderRadius: 999, padding: '3px 9px' }}>Sourced</span>
                </div>
                <div style={{ padding: '6px 18px 16px' }}>
                  {[
                    { v: '54%', t: 'of UK adults already use AI tools, up from 31% in 2024', s: 'Ofcom, Online Nation, Dec 2025', u: 'https://www.ofcom.org.uk/media-use-and-attitudes/online-habits/from-apps-to-ai-search-how-the-uk-goes-online-in-2025' },
                    { v: '1.8bn', t: 'UK ChatGPT visits, first 8 months of 2025, up from 368m', s: 'Ofcom, Online Nation, Dec 2025', u: 'https://www.ofcom.org.uk/media-use-and-attitudes/online-habits/from-apps-to-ai-search-how-the-uk-goes-online-in-2025' },
                  ].map((r) => (
                    <div key={r.t} style={{ padding: '13px 0', borderBottom: '1px solid var(--n200)' }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                        <span style={{ fontFamily: 'var(--fd)', fontWeight: 800, fontSize: 22, color: 'var(--orange)' }}>{r.v}</span>
                        <span style={{ fontSize: 13, color: 'var(--ink)' }}>{r.t}</span>
                      </div>
                      <a href={r.u} target="_blank" rel="noopener noreferrer nofollow" style={{ fontFamily: 'var(--fm)', fontSize: 10, color: 'var(--n400)', textDecoration: 'underline' }}>{r.s}</a>
                    </div>
                  ))}
                </div>
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
            <div className="col-2 mt-12" style={{ gap: 24 }}>
              <div className="card">
                <h3>Workflow mapping</h3>
                <p className="mt-4">We find the process that is actually worth automating and where it breaks today, so the build targets real friction inside your business, not a generic use case.</p>
              </div>
              <div className="card">
                <h3>Custom agent design</h3>
                <p className="mt-4">The agent is designed around your CRM, helpdesk, inbox, or WhatsApp as they already exist, not a generic bot that expects you to change how you work.</p>
              </div>
              <div className="card">
                <h3>Customer support &amp; AI chatbot development</h3>
                <p className="mt-4">Trained on your real documentation so it can answer common questions directly, escalate cleanly when a case needs a person, and improve as it sees more of your traffic.</p>
              </div>
              <div className="card">
                <h3>AI workflow automation</h3>
                <p className="mt-4">Moving information between the tools you already run: updating a CRM, triggering a follow-up, syncing an order into fulfilment, without someone doing it by hand.</p>
              </div>
              <div className="card">
                <h3>Secure integration</h3>
                <p className="mt-4">Access scoped to exactly what each agent needs, credentials handled properly, and nothing touching a system you have not approved.</p>
              </div>
              <div className="card">
                <h3>Testing with real data</h3>
                <p className="mt-4">Before launch, every agent is run against your real conversations, tickets, or records, not a scripted demo, so it holds up on day one.</p>
              </div>
              <div className="card">
                <h3>Monitoring and guardrails</h3>
                <p className="mt-4">Every agent ships with monitoring and clear escalation rules, so you can see what it did and catch a mistake before a customer does.</p>
              </div>
              <div className="card">
                <h3>Ownership and ROI measurement</h3>
                <p className="mt-4">You own the agent, the code, and the integrations. We track the outcome that matters, tickets resolved, hours saved, meetings booked, and report it monthly.</p>
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
            <div className="stack mt-10" style={{ maxWidth: 900 }}>
              {[
                { n: '01', t: 'Map the workflow', d: 'We find the process that is worth automating and where it currently breaks, so the plan targets real friction, not a buzzword.' },
                { n: '02', t: 'Design around your tools', d: 'The agent is designed to fit your CRM, helpdesk, inbox, or WhatsApp as they already exist, not the other way round.' },
                { n: '03', t: 'Build and test with real data', d: 'We build against your actual tickets, conversations, or records, not a scripted demo, so it holds up from day one.' },
                { n: '04', t: 'Integrate securely', d: 'Access is scoped to what the agent needs, credentials are handled properly, and nothing touches a system you have not approved.' },
                { n: '05', t: 'Launch with monitoring', d: 'Every agent ships with monitoring from day one, so you see what it did and catch a mistake before a customer does.' },
                { n: '06', t: 'Measure ROI monthly', d: 'Tickets resolved, hours saved, meetings booked, whatever the outcome is, we report it against a number, not a feeling.' },
                { n: '07', t: 'Iterate', d: 'Agents get tuned as your business changes. Nothing gets shipped once and left to drift.' },
              ].map((s) => (
                <div key={s.n} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--fm)', fontWeight: 700, fontSize: 15, color: 'var(--orange)', minWidth: 34 }}>{s.n}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{s.t}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

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
            <div className="process-grid mt-12" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
              <div className="card"><span className="stage-num">01</span><h3>Automation audit</h3><p className="mt-4">We map your workflows and tools and find the highest-value process to automate first, free, before you commit to anything.</p></div>
              <div className="card"><span className="stage-num">02</span><h3>Design &amp; build</h3><p className="mt-4">The agent is designed around your systems, then built and tested against your real data, not a scripted demo.</p></div>
              <div className="card"><span className="stage-num">03</span><h3>Integrate &amp; launch</h3><p className="mt-4">Securely wired into your tools and launched with monitoring from day one, so you see what it does from the start.</p></div>
              <div className="card"><span className="stage-num">04</span><h3>Measure &amp; iterate</h3><p className="mt-4">Monthly reporting on the outcome that matters, with the agent tuned as your business and tools change.</p></div>
            </div>
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
            <div className="col-3 mt-12">
              <div className="svc-card">
                <h3>Ecommerce and DTC brands</h3>
                <p className="mt-4">Order status, returns, and stock questions that eat up your support inbox. We build agents that answer them directly, and can work alongside your <a href="/uk/ecommerce-seo">ecommerce SEO</a> if visibility is also part of the goal.</p>
              </div>
              <div className="svc-card">
                <h3>Professional services and B2B</h3>
                <p className="mt-4">Firms where a lead goes cold waiting for a reply. We build agents that qualify, answer early questions, and book the call directly into your calendar.</p>
              </div>
              <div className="svc-card">
                <h3>Founders and small teams</h3>
                <p className="mt-4">Teams too small to have someone answering everything all day. An agent handles the volume so your best people spend time on the calls that actually need them.</p>
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
                    Search demand for AI automation in the UK is real and growing. Terms like &quot;ai automation
                    agency&quot; and &quot;ai agents for business&quot; draw hundreds of searches a month, and
                    interest in &quot;ai agent development&quot; is climbing as more owners look past the chatbot
                    demo stage. These are buyers looking for a team to hire, not people reading a definition.
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
                  {[
                    { kw: 'ai automation agency', v: '720', w: '100%', kd: 'KD 10 · Winnable now' },
                    { kw: 'ai agents for business', v: '110', w: '15%', kd: 'KD 16 · Winnable' },
                    { kw: 'seo ai agents', v: '90', w: '13%', kd: 'KD 17 · Winnable' },
                    { kw: 'ai automation agency london', v: '70', w: '10%', kd: 'KD 10 · Local, winnable' },
                    { kw: 'ai chatbot development services', v: '40', w: '6%', kd: 'KD 0 · Quick win' },
                  ].map((r) => (
                    <div key={r.kw} className="demand-row">
                      <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<span style={{ fontSize: 9, color: 'var(--n400)' }}> /mo</span></span></div>
                      <div className="demand-bar"><i style={{ width: r.w }} /></div>
                      <div className="demand-kd">{r.kd}</div>
                    </div>
                  ))}
                  <p style={{ textAlign: 'center', fontFamily: 'var(--fm)', fontSize: 10, color: 'var(--n400)', marginTop: 10 }}>Source: DataForSEO, United Kingdom, July 2026</p>
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
            <div className="stack mt-10" style={{ maxWidth: 900 }}>
              {AI_AUTOMATION_AGENCIES.map((a, i) => (
                <div key={a.name} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--fm)', fontWeight: 700, fontSize: 15, color: 'var(--orange)', minWidth: 30 }}>{i + 1}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{a.name}{a.name === 'FactoryJet' && <span style={{ fontFamily: 'var(--fm)', fontSize: 10, background: '#B23E13', color: '#fff', borderRadius: 999, padding: '2px 8px', marginLeft: 8, verticalAlign: 'middle' }}>That is us</span>}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{a.note}</p>
                  </div>
                </div>
              ))}
            </div>
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
                    {FAQ_ITEMS.filter((f) => f.category === c.key).map((f) => (
                      <details key={f.question} className="faq-item">
                        <summary>
                          <span className="q-text">{f.question}</span>
                          <span className="chevron">
                            <svg viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          </span>
                        </summary>
                        <div className="faq-ans"><p>{f.answer}</p></div>
                      </details>
                    ))}
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

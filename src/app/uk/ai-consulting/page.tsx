import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import '../ai-agents/ai-agents.css';

const CANONICAL = 'https://factoryjet.com/uk/ai-consulting';
const UPDATED = '2026-09-24';
const TITLE = 'AI Consultancy UK | Consultants Who Also Build | FactoryJet';
const H1 = 'AI Consultancy UK: Strategy That Ends in a Working System, Not a Slide Deck';

/* Design tokens, copied by value from ../ai-agents/ai-agents.css so inline
   styles stay on-system without CSS custom property references in this file. */
const T = {
  ink: '#0F0F12',
  n200: '#E5E5E0',
  n400: '#6E6E68',
  orange: '#FF5C00',
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
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'AI Consultancy', url: CANONICAL },
];

/* ─── External sources, each fetch-verified 2026-09-24 (HTTP 200, claim
       confirmed in the fetched body) ──────────────────────────────────── */
// ONS, released 20 July 2026: AI use 12% to 35% (10+ staff); 55% of employees
// use AI for work or education; top barriers = identifying use cases, cost,
// lack of expertise; 41% report no barriers. fetch-verified 2026-09-24
const SRC_ONS =
  'https://www.ons.gov.uk/businessindustryandtrade/business/businessservices/articles/artificialintelligenceinukbusinesses/2023to2026';
// ICO: accountability principle; "in the vast majority of cases" AI use will
// trigger the legal requirement to do a DPIA. fetch-verified 2026-09-24
const SRC_ICO =
  'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/what-are-the-accountability-and-governance-implications-of-ai/';
// ICO: "innovative technology ... (including AI)" listed as a high-risk
// indicator for DPIAs. fetch-verified 2026-09-24
const SRC_ICO_DPIA =
  'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/data-protection-impact-assessments-dpias/when-do-we-need-to-do-a-dpia/';
// European Commission: AI Act entered into force 1 August 2024, applicable
// 2 August 2026 with some exceptions. fetch-verified 2026-09-24
const SRC_EU_AI_ACT = 'https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',     label: 'AI consulting basics' },
  { key: 'choosing',   label: 'Choosing an AI consultant' },
  { key: 'engagement', label: 'Cost & how it works' },
  { key: 'data',       label: 'Data, governance & build' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── AI consulting basics ──
  { category: 'basics', question: 'What does an AI consultant do?',
    answer: 'An AI consultant helps a business work out where AI is worth using and how to use it safely. In practice that means looking at how your team works today, finding the two or three jobs where AI would save real time or money, checking your data and your legal duties, and recommending whether to buy a tool or build something. A good one also helps you get it live.' },
  { category: 'basics', question: 'What does an AI consulting company do?',
    answer: 'An AI consulting company does the same job as a single AI consultant, but with a team behind it. That usually means strategy, data and engineering skills in one place, so the company can assess your business, run a pilot, and in some cases build and support the system too. The big difference between firms is whether they stop at advice or carry on into delivery.' },
  { category: 'basics', question: 'What is an AI readiness assessment?',
    answer: 'An AI readiness assessment is a structured check of whether your business is ready to use AI well. It looks at five things: your goals, your data, the systems you run, your people and skills, and your governance, meaning the rules for how AI is used and checked. The output is a short list of use cases worth doing, what blocks them, and what to fix first.' },
  { category: 'basics', question: 'What are the five pillars of AI readiness?',
    answer: 'There is no single official list, and different frameworks use different names. Most of them cover the same ground: strategy (what you want AI to achieve), data (whether it is findable, accurate and allowed to be used), technology (whether your systems can connect), people (skills and willingness), and governance (who approves, checks and owns AI use). We assess all five in plain English.' },
  { category: 'basics', question: 'What is the difference between generative AI and agentic AI?',
    answer: 'Generative AI creates content: text, images, summaries or code, usually when a person asks it to. ChatGPT is the best known example. Agentic AI goes a step further. An AI agent can take actions across your systems on its own, such as looking up an order, updating a record, or booking a meeting, within rules you set. Many good first projects use generative AI. Agents come once the process is well understood.' },
  { category: 'basics', question: 'What does an AI strategy consultant do?',
    answer: 'An AI strategy consultant helps leadership decide what AI should do for the business and in what order. The work is prioritisation: which problems matter most, which ones AI can solve reliably today, what the risks are, and how success will be measured. The weak version ends with a slide deck. The useful version ends with a funded first project and a clear owner for it.' },
  { category: 'basics', question: 'Is AI replacing consultants?',
    answer: 'AI is changing what consultants spend time on, not removing the need for judgment. Research, first drafts and analysis are faster now. What AI cannot do is sit with your team, understand how your business actually runs, and take responsibility for a decision. That is why we think the useful AI consultancy of the next few years is one that can also engineer what it recommends.' },

  // ── Choosing an AI consultant ──
  { category: 'choosing', question: 'Who are the top AI consultancy companies in the UK?',
    answer: 'It depends on your size and what you need. For large enterprise transformation, the big strategy firms such as BCG and McKinsey (QuantumBlack) and the Big Four are the obvious names. For UK SMEs and mid-market firms, specialist consultancies such as The AI Consultancy, Fifty One Degrees, OpenKit, iwantmore.ai and Helium42 appear often. We list several, including us, further up this page, with a neutral note on each.' },
  { category: 'choosing', question: 'Should a mid-sized UK business hire a Big Four firm for AI?',
    answer: 'Usually not for a first project. Big Four and large strategy firms are built for enterprise programmes with many teams, board-level change and large budgets. For a business of 20 to 200 people, that model tends to be heavy and slow. You will get more from a smaller consultancy where senior people do the work and the same team can build the first system.' },
  { category: 'choosing', question: 'AI consultant vs AI agency vs freelancer: which should I pick?',
    answer: 'A freelancer is cheapest to start and fine for training or a quick opinion, but rarely builds and maintains a real system. An AI agency builds, but may skip the question of whether you should build at all. A consultancy that also engineers does both: it tells you what is worth doing, then builds and supports it. Pick based on whether you need advice, delivery, or both.' },
  { category: 'choosing', question: 'Is it worth hiring an AI consultant for a small business?',
    answer: 'Yes, if you have a clear problem and limited time to research it yourself. The ONS found that difficulty identifying business use cases, cost and lack of expertise are the most common reasons UK firms hold back on AI. A short AI readiness assessment answers the first and third directly. For a very small team, one focused use case is usually the right size of engagement.' },
  { category: 'choosing', question: 'How do I find a good AI consultant near me?',
    answer: 'Location matters less than you think, because most AI consulting work is done over video with shared documents. Look instead for three things: examples of systems they have actually put live, a clear view on when not to use AI, and a named senior person who will do the work. Ask to speak to the person who would run your assessment before you sign.' },
  { category: 'choosing', question: 'Do you work with businesses in London?',
    answer: 'Yes. We work with businesses in London and across the rest of the UK, including Manchester, Birmingham, Leeds and Scotland. The work is run remotely, with regular video calls, shared workshops and written outputs. AI consulting and engineering do not need anyone on-site, so a firm outside London gets the same senior team and the same depth of work.' },
  { category: 'choosing', question: 'Are you tied to one AI vendor?',
    answer: 'No. We do not resell any AI platform, so we have no reason to push one. We recommend Microsoft Copilot, ChatGPT Enterprise, Claude, or a custom build depending on what your team already uses, where your data lives, and what the job needs. Often the right answer is an off-the-shelf tool set up properly, not a build.' },
  { category: 'choosing', question: 'Will you tell us not to use AI?',
    answer: 'Yes, when that is the honest answer. Plenty of problems that look like AI problems are really a broken process, messy data, or software your team never finished setting up. If the assessment finds that, we say so and tell you what to fix instead. It costs us a project. It saves you from paying for a system that was never going to work.' },

  // ── Cost & how it works ──
  { category: 'engagement', question: 'How much does an AI consultant cost?',
    answer: 'It depends on scope, not a rate card. The main drivers are how many teams and processes are involved, how messy or scattered your data is, how many systems need to connect, how much governance work your sector needs, and whether you want advice only or advice plus a build. We scope after a free first call and give you a fixed quote per stage, so nothing is open-ended.' },
  { category: 'engagement', question: 'Should I pay for an AI service or use free tools?',
    answer: 'Free and low-cost tools are a great place to start for personal productivity. The problems appear when staff paste customer data into consumer tools, or when a team needs AI connected to its own systems. At that point you need business terms that keep your data private, clear rules for use, and sometimes a custom build. Paying for advice makes sense once those questions appear.' },
  { category: 'engagement', question: 'How long does an AI readiness assessment take?',
    answer: 'For most UK SMEs it takes days to a few weeks, depending on how many teams, processes and systems are in scope. A single department with a clear problem moves quickly. A whole business with several sites and older systems takes longer. We agree the scope and timeline on the first call, before you commit to anything.' },
  { category: 'engagement', question: 'What do we get at the end of an assessment?',
    answer: 'A short written report, not a thick deck. It names the two or three use cases worth doing first, the expected benefit of each, what data and systems each one needs, the governance steps (including whether a DPIA is needed), and a build or buy recommendation. You can take it to any provider. You are not locked in to us for the next step.' },
  { category: 'engagement', question: 'How do you pick which use cases to do first?',
    answer: 'We score each idea on value and risk. Value means time saved, money saved, or revenue helped. Risk covers data quality, how hard the systems are to connect, and what happens if the AI gets something wrong. The best first project is valuable, low risk, and easy to measure. Flashy ideas that touch sensitive decisions usually wait until later.' },
  { category: 'engagement', question: 'What is a pilot, and why not go straight to a full rollout?',
    answer: 'A pilot is a small, real trial of one use case with a small group of users and a clear success measure. It proves the idea works on your data before you spend more. Skipping it is the most common way AI projects go wrong, because problems with data, adoption or accuracy show up at full scale instead of while they are cheap to fix.' },
  { category: 'engagement', question: 'How do we get our staff to actually use it?',
    answer: 'Involve them from the start. We interview the people who do the work during the assessment, test the pilot with them, and write simple usage rules they can follow. The ONS found 55% of UK employees already use AI for work or education, so the job is often shaping habits that already exist, not starting from zero.' },
  { category: 'engagement', question: 'Who does the work?',
    answer: 'Senior engineers, with the founder, Bhavesh Barot, involved in every engagement. There is no handoff to a junior team after the contract is signed. The people who run your AI readiness assessment are the same people who design and build the system if you decide to go ahead, which means nothing gets lost between advice and delivery.' },
  { category: 'engagement', question: 'How do we get started?',
    answer: 'Send your name and work email through the form on this page. The founder replies within 24 hours to book a short call. On that call we talk through your business, the problems you think AI might help with, and whether an AI readiness assessment or a focused use-case sprint is the right first step. That first conversation costs nothing.' },

  // ── Data, governance & build ──
  { category: 'data', question: 'Do we need clean data before hiring an AI consultant?',
    answer: 'No. Finding out how clean your data is, and whether it is good enough for a given use case, is part of the job. Many useful first projects work with data you already have in documents, emails or your CRM. If a use case needs better data, we tell you exactly what to fix and in what order, rather than asking you to tidy everything first.' },
  { category: 'data', question: 'What about data protection and UK GDPR?',
    answer: 'It shapes the work from day one. The ICO says the accountability principle makes you responsible for complying with data protection law, and for showing that you comply, in any AI system that processes personal data. We check what personal data each use case touches, which AI providers would see it, and on what terms, before anything is built.' },
  { category: 'data', question: 'When do we need a DPIA for AI?',
    answer: 'Often. A DPIA, or data protection impact assessment, is a written check of the risks a project poses to people’s personal data. The ICO says that in the vast majority of cases, using AI involves processing likely to result in a high risk, which triggers the legal requirement to do one. We flag it at the assessment stage and help you prepare it.' },
  { category: 'data', question: 'Does the EU AI Act affect a UK business?',
    answer: 'It can, if you sell AI-powered products or services into the EU or your AI is used there. The European Commission says the AI Act became applicable on 2 August 2026, with some exceptions. Whether it applies to you depends on what you do and where, so we flag it during the assessment and recommend you confirm the position with your legal adviser.' },
  { category: 'data', question: 'Do you also build what you recommend?',
    answer: 'Yes, and that is the main reason to pick us. FactoryJet is an engineering company first. If the assessment points to a custom AI agent or integration, our team designs, builds, tests and supports it, and you own the code. If it points to an off-the-shelf tool, we help you set it up properly. You can also take our plan to someone else.' },
  { category: 'data', question: 'Build or buy: Copilot, ChatGPT Enterprise, or a custom agent?',
    answer: 'Buy when the job is general: writing, summarising, searching your own documents. Microsoft Copilot suits teams already on Microsoft 365, and ChatGPT Enterprise suits teams that want a strong general assistant. Build when the job is specific to your business, needs to act across several of your systems, or has rules no general tool knows. Most businesses end up with a mix.' },
  { category: 'data', question: 'Do we own what you build?',
    answer: 'Yes. The code, the integrations, the prompts and the documentation are yours. We are not a platform you rent. If you ever want to move the work in-house or to another provider, you can, and it keeps running. You pay any AI model provider directly, with no markup through us.' },
  { category: 'data', question: 'We already bought an AI tool that nobody uses. Can you help?',
    answer: 'Yes, and it is a common starting point. Usually the tool is fine and the problem is setup: it is not connected to the right data, nobody agreed what it is for, or staff were never shown how it fits their day. We look at what you have, fix what is fixable, and only suggest something new if the tool genuinely cannot do the job.' },
];

/* ─── Named UK AI consultancies (open self-disclosure, ItemList). Each note is
       based on the company’s own homepage, fetched 2026-09-24. ───────────── */
const AI_CONSULTANCIES: { name: string; note: string }[] = [
  { name: 'FactoryJet', note: 'That is us. A consultancy that also engineers: we run the AI readiness assessment, pick the use cases, check data and governance, and then design and build the system if a build is the right call. Founder involved on every engagement, and you own what we build.' },
  { name: 'The AI Consultancy', note: 'A London-based consultancy for UK SMEs and larger organisations focused on deploying Claude and ChatGPT, with AI training and governance. It describes itself as an Anthropic Consulting Partner.' },
  { name: 'Fifty One Degrees', note: 'A UK and US AI consultancy that embeds senior engineers to build production AI, and says it aims for a working proof of concept in two to four weeks.' },
  { name: 'OpenKit', note: 'A UK AI consulting firm that starts with an AI audit and a costed roadmap, and treats implementation as a separate decision. It also offers EU AI Act readiness work.' },
  { name: 'iwantmore.ai', note: 'A UK-based team of AI consultants offering AI strategy, automation strategy, AI training and implementation, focused on identifying and prioritising use cases.' },
  { name: 'Geeks Ltd', note: 'A software development company for mid-market and enterprise teams, with offices in London and Houston, covering AI consulting through to AI agent development and integration.' },
  { name: 'Helium42', note: 'A B2B AI consultancy based in London and Hamminkeln, Germany, combining AI education and implementation for mid-market firms across the UK and German-speaking Europe.' },
  { name: 'Faculty', note: 'A London-based AI company working with large organisations and public bodies, including NHS work shown on its site. Better suited to large, complex programmes than a first SME project.' },
  { name: 'Datatonic', note: 'A cloud data and AI consultancy with deep Google Cloud expertise, and a Google Cloud Partner of the Year award for data and analytics in EMEA.' },
];

/* ─── JSON-LD ────────────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'AI Consultancy UK',
      serviceType: 'AI consulting, AI readiness assessment, AI strategy and AI implementation',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      description:
        'AI consultancy for UK SMEs and mid-market businesses. We run an AI readiness assessment, prioritise the use cases worth doing, check data and governance including UK GDPR and DPIAs, decide build or buy, and can build and support the resulting system.',
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
      inLanguage: 'en-GB',
      datePublished: '2026-09-24',
      dateModified: UPDATED,
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
      '@id': `${CANONICAL}#consultancies`,
      name: 'UK AI consultancies',
      itemListElement: AI_CONSULTANCIES.map((a, i) => ({
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
  description:
    'FactoryJet is a UK AI consultancy that runs your AI readiness assessment, picks the use cases worth doing, then builds them. Founder-led. You own it.',
  alternates: { canonical: CANONICAL, languages: { 'en-GB': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: TITLE,
    description:
      'AI consultants for UK SMEs and mid-market firms. AI readiness assessment, use-case prioritisation, UK GDPR and DPIA checks, build or buy advice, and engineers who can build what we recommend.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/uk/ai-consulting/ai-consulting-og.webp', width: 1200, height: 630, alt: 'AI consultancy UK: a FactoryJet consultant mapping AI use cases with a business owner' }],
  },
  robots: { index: true, follow: true },
};

const srcNote = { fontFamily: T.fm, fontSize: 11, color: T.n400, marginTop: 12 } as const;
const srcLink = { textDecoration: 'underline' } as const;

export default function AiConsultingUKPage() {
  return (
    <>
      <script id="ld-uk-ai-consulting" type="application/ld+json"
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
                  <span className="chip"><span className="dot dot-orange" />UK AI Consultancy</span>
                  <span className="chip">AI Readiness Assessment</span>
                  <span className="chip">Consult, Then Build</span>
                </div>
                <h1>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  FactoryJet is an AI consultancy for UK SMEs and mid-market firms. We find the two or three places
                  where AI will genuinely pay off in your business, check your data and your legal duties, tell you
                  whether to buy a tool or build something, and then our engineers can build it. Advice and delivery
                  from the same senior team.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ projects delivered</span></div>
                  <div className="upd">Last updated<br />24 September 2026</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="uk" source="uk_ai_consulting_hero" submitLabel="Book my AI readiness call" />
                </div>
              </div>

              <div className="card" style={{ padding: 8 }}>
                <img src="/images/uk/ai-consulting/ai-consulting-hero.webp" width={1400} height={933} fetchPriority="high" decoding="async" alt="An AI consultant and a UK business owner mapping which processes to improve with AI, using sticky notes on a table" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">What you leave with</span>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Use cases worth doing</div><div className="scorecard-note">ranked by value and risk</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Two or three</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Build or buy decision</div><div className="scorecard-note">tool-neutral, no resale deals</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Written</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Data and DPIA check</div><div className="scorecard-note">UK GDPR from day one</div></div>
                    <div className="scorecard-val" style={{ color: T.green, fontSize: 15 }}>Included</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 2. ANSWER-FIRST DEFINITION (GEO) ═══ */}
        <section className="sec">
          <div className="wrap">
            <div className="def" style={{ maxWidth: 940 }} data-speakable="true">
              <span className="lab">What does an AI consultant do for a UK business?</span>
              <p>
                An AI consultant finds where AI will save your business real time or money, and where it will not.
                They review how your team works, pick the two or three best use cases, check your data and UK GDPR
                duties, and advise whether to buy a tool or build one. The best AI consultancies then help you put
                it live and keep it working.
              </p>
            </div>
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">Two terms we use a lot</span>
              <p>
                A <b>use case</b> is one specific job AI could do, such as drafting quote replies or sorting incoming
                invoices. An <b>AI readiness assessment</b> is a structured check of your goals, data, systems,
                people and rules, so you know which use cases you can do now and what has to be fixed first.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              Here is why this matters now. The Office for National Statistics says self-reported AI use among UK
              businesses with 10 or more staff has risen from around 12% in late 2023 to around 35%. But when firms
              explain why they hold back, the top reasons are difficulty identifying business use cases, cost, and a
              lack of expertise. Two of those three are exactly what an AI consultant is for.
            </p>
          </div>
        </section>

        {/* ═══ 3. FACTS BAND (verified only) ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              {[
                { v: '35%', t: 'of UK firms with 10+ staff report using AI, up from around 12% in late 2023', s: 'ONS, July 2026', u: SRC_ONS },
                { v: '55%', t: 'of UK employees say they use AI for work or education', s: 'ONS, July 2026', u: SRC_ONS },
                { v: 'No. 1', t: 'barrier to AI adoption: difficulty identifying business use cases', s: 'ONS, July 2026', u: SRC_ONS },
                { v: 'DPIA', t: 'needed in the vast majority of AI uses that process personal data', s: 'ICO guidance', u: SRC_ICO },
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

        {/* ═══ 4. THREE KINDS OF AI CONSULTANT ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Know what you are buying</span>
              <h2>There are three kinds of AI consultant in the UK. Only one of them builds.</h2>
              <p className="lead mt-4">
                Search for an AI consultant in the UK and the results mix three very different businesses. Each is
                right for someone. The trick is knowing which one you are talking to.
              </p>
            </div>
            <ul className="col-3 mt-12">
              <li className="svc-card">
                <h3>Big strategy firms and the Big Four</h3>
                <p className="mt-4">BCG, McKinsey (through QuantumBlack), EY and PwC hold most of the top search results for AI consulting. They are built for enterprise AI transformation: many teams, board-level change, long programmes. For a firm of 20 to 200 people, that model is usually heavier and slower than the problem needs.</p>
              </li>
              <li className="svc-card">
                <h3>Solo freelancers</h3>
                <p className="mt-4">An independent AI business consultant is quick to hire and often great at training staff or giving a fast second opinion. The limit is capacity. One person rarely has the engineering depth to build, integrate and support a real system, so the plan often stops at recommendations.</p>
              </li>
              <li className="svc-card">
                <h3>Consultancies that also engineer</h3>
                <p className="mt-4">This is where FactoryJet sits. We do the AI strategy consulting work, then our engineers build what we recommend and stay on to support it. The people who write the plan are accountable for making it work, which changes how carefully the plan gets written.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* ═══ 5. COMPARISON TABLE ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <span className="eyebrow">Side by side</span>
            <h2 style={{ maxWidth: 720 }}>Big firm vs freelancer vs a consultancy that builds</h2>
            <div className="card mt-8" style={{ padding: 0, overflow: 'hidden' }}>
              <table className="cmp-table">
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">FactoryJet</th>
                    <th>Big strategy firm / Big Four</th>
                    <th>Solo freelancer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Best fit</td><td className="fj"><span className="yes">UK SMEs and mid-market</span></td><td><span className="partial">Large enterprises</span></td><td><span className="partial">Small teams, training</span></td></tr>
                  <tr><td className="feat">Who does the work</td><td className="fj"><span className="yes">Senior engineers + founder</span></td><td><span className="partial">Mixed seniority, large teams</span></td><td>One person</td></tr>
                  <tr><td className="feat">AI readiness assessment</td><td className="fj"><span className="yes">Yes</span></td><td><span className="yes">Yes</span></td><td><span className="partial">Sometimes</span></td></tr>
                  <tr><td className="feat">Builds what it recommends</td><td className="fj"><span className="yes">Yes</span></td><td><span className="partial">Via separate delivery teams</span></td><td><span className="no">Rarely</span></td></tr>
                  <tr><td className="feat">Tool-neutral build or buy advice</td><td className="fj"><span className="yes">Yes, no resale deals</span></td><td><span className="partial">Often tied to alliances</span></td><td><span className="partial">Varies</span></td></tr>
                  <tr><td className="feat">UK GDPR and DPIA support</td><td className="fj"><span className="yes">Built into the assessment</span></td><td><span className="yes">Yes</span></td><td><span className="partial">Varies</span></td></tr>
                  <tr><td className="feat">Support after launch</td><td className="fj"><span className="yes">Yes, same team</span></td><td><span className="partial">Separate contract</span></td><td><span className="no">Rarely</span></td></tr>
                  <tr><td className="feat">Typical end product</td><td className="fj"><span className="yes">A working system you own</span></td><td><span className="partial">Strategy and programme plan</span></td><td><span className="partial">Recommendations, training</span></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══ 6. WHAT WE ASSESS (E-E-A-T + governance-aware) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">What an assessment covers</span>
                <h2>Our AI readiness assessment looks at five things</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  Most AI readiness checks you find online are a quiz. Ours is a working session with the people who
                  actually do the work, followed by a short written report you can act on.
                </p>
                <ul className="scope-list num-list mt-6" style={{ maxWidth: 560 }}>
                  <li><b>Goals.</b> What would a good result look like in six months? Hours saved, faster replies, fewer errors, more quotes sent. We pin it to a number you already track.</li>
                  <li><b>Data.</b> Where the information each use case needs lives, whether it is accurate, and whether you are allowed to use it for this purpose.</li>
                  <li><b>Systems.</b> Your CRM, finance software, helpdesk, ecommerce platform and shared drives, and whether they can connect to an AI tool safely.</li>
                  <li><b>People.</b> Who would use it, what they already do with AI today, and what would stop them trusting it.</li>
                  <li><b>Governance.</b> Governance simply means the rules for how AI is used, checked and owned in your business. We cover usage policy, UK GDPR, and whether a DPIA is needed.</li>
                </ul>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/uk/ai-consulting/ai-consulting-workshop.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A small AI strategy workshop in a bright UK office, with a consultant drawing a simple four-step process flow on a whiteboard" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    We start by drawing the process as it runs today, box by box. The best AI use case is usually a
                    step where someone copies information between two screens, or answers the same question many
                    times a week.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 7. ENGAGEMENT IN STAGES ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">How an engagement runs</span>
              <h2>From first call to a system that works, in six stages</h2>
            </div>
            <ol className="col-3 mt-12">
              <li className="card"><span className="stage-num">01</span><h3>Assessment</h3><p className="mt-4">We run the AI readiness assessment: interviews, process mapping, a look at your data and systems, and a governance check.</p></li>
              <li className="card"><span className="stage-num">02</span><h3>Prioritisation</h3><p className="mt-4">Every idea gets scored on value and risk. You get the two or three use cases worth doing first, and a clear reason for each one we drop.</p></li>
              <li className="card"><span className="stage-num">03</span><h3>Pilot</h3><p className="mt-4">One use case, a small group of real users, real data, and a success measure agreed upfront. It proves the idea before you spend more.</p></li>
              <li className="card"><span className="stage-num">04</span><h3>Build or buy</h3><p className="mt-4">If an off-the-shelf tool does the job, we set it up properly. If the job is specific to you, we design and build a custom system or <a href="/uk/ai-agents">AI agent</a>.</p></li>
              <li className="card"><span className="stage-num">05</span><h3>Rollout</h3><p className="mt-4">Usage rules, short training for each team, and monitoring, so you can see how the system is used and where it gets things wrong.</p></li>
              <li className="card"><span className="stage-num">06</span><h3>Support</h3><p className="mt-4">We stay on. Models, tools and your business all change, so we review results with you and keep the system accurate over time.</p></li>
            </ol>
          </div>
        </section>

        {/* ═══ 8. LISTICLE ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 740 }}>
              <span className="eyebrow">Before you sign anything</span>
              <h2>Eight questions to ask an AI consultant before you sign</h2>
              <p className="lead mt-4">
                Use these with any AI consulting firm, including us. A good AI consultant will enjoy answering them.
                A weak one will change the subject.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {[
                { n: '01', t: 'What have you actually put live?', d: 'Ask for systems running in a real business today, not demos or workshops. If everything they show you is a slide, that is what you will get too.' },
                { n: '02', t: 'Who will do the work?', d: 'Get the name of the person who runs your assessment. Then ask whether that same person, or their team, would build what they recommend.' },
                { n: '03', t: 'When would you tell us not to use AI?', d: 'An honest AI consultant has a clear answer. If they have never told a client no, their advice is really a sales process.' },
                { n: '04', t: 'Do you resell any AI platform?', d: 'Partnerships are fine if they are disclosed. What you want to avoid is a build or buy recommendation shaped by a commission.' },
                { n: '05', t: 'How will you handle our personal data?', d: 'Ask how they check UK GDPR, which AI providers would see your data and on what terms, and whether they will help with a DPIA.' },
                { n: '06', t: 'How will we measure success?', d: 'The answer should be a number you already track, agreed before any build starts. Not engagement, not usage, not a feeling.' },
                { n: '07', t: 'What do we own at the end?', d: 'Code, prompts, integrations and documentation should all be yours. If the answer involves an ongoing licence, know that before you sign.' },
                { n: '08', t: 'What happens after launch?', d: 'AI systems drift as tools and data change. Ask who watches it, who fixes it, and how quickly. This is the question most consultants do not want.' },
              ].map((s) => (
                <li key={s.n} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.orange, minWidth: 34 }}>{s.n}</span>
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
          headline={'Not sure where AI fits in your business?'}
          sub={'Tell us what takes up your team’s week. On a short call with the founder, we will tell you where AI would genuinely help, where it would not, and whether an AI readiness assessment is worth doing at all.'}
          label={'Book my AI readiness call'}
        />

        {/* ═══ 9. BUILD OR BUY ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">The decision most consultants skip</span>
                <h2>Build or buy: an off-the-shelf tool or a custom AI agent?</h2>
                <div className="stack mt-6">
                  <p>
                    Generative AI is AI that writes, summarises or creates content when you ask it to. Tools like
                    Microsoft Copilot and ChatGPT Enterprise are generative AI for the whole company, and for general
                    work such as drafting, summarising meetings or searching your own documents, they are often the
                    right answer. Buying is faster and cheaper than building. We will say so.
                  </p>
                  <p>
                    Agentic AI is different. An AI agent can take actions across your systems on its own, within rules
                    you set: checking an order, updating a record, chasing an invoice, routing a request. That is
                    where a custom build earns its place, because no general tool knows your pricing rules, your
                    stock system or your approval steps.
                  </p>
                  <p>
                    As a generative AI consultant and an engineering team, we have no reason to push either answer.
                    When the plan calls for a build, the work moves straight into our{' '}
                    <a href="/uk/ai-agents">UK AI agent development service</a>, with the same people. For more
                    depth on how we build agents, see our{' '}
                    <a href="/services/ai-agent-development">AI agent development hub</a>. Wider AI builds, such as
                    integrating AI into your CRM or ERP, run through our{' '}
                    <a href="/uk/ai-development">UK AI development service</a>, and if the plan points at your phones,
                    see our <a href="/uk/ai-receptionist">AI receptionist for UK businesses</a>.
                  </p>
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">A simple rule of thumb</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">General writing and summaries</div><div className="scorecard-note">Copilot, ChatGPT Enterprise, Claude</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Buy</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Searching your own documents</div><div className="scorecard-note">often covered by the tools above</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Buy first</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Work across several of your systems</div><div className="scorecard-note">CRM, finance, stock, helpdesk</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Build</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Rules only your business knows</div><div className="scorecard-note">pricing, approvals, exceptions</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Build</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">A tool you bought that nobody uses</div><div className="scorecard-note">usually a setup problem</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Fix it</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 10. GOVERNANCE ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">AI governance, in plain English</span>
              <h2>Data protection shapes the plan before the engineering does</h2>
              <div className="stack mt-6">
                <p>
                  If AI will touch personal data, meaning anything about a customer, a patient, a tenant or a member
                  of staff, UK GDPR applies. The Information Commissioner’s Office says the accountability principle
                  makes you responsible for complying with data protection law, and for showing that you comply, in
                  any AI system that processes personal data.
                </p>
                <p>
                  A DPIA, or data protection impact assessment, is a written check of the risks a project creates for
                  people’s data and how you will reduce them. The ICO is direct: in the vast majority of cases, using
                  AI involves processing likely to result in a high risk, which triggers the legal requirement to do a
                  DPIA. Its DPIA guidance also lists innovative technology, including AI, as a sign of likely high risk.
                </p>
                <p>
                  For UK firms that sell into Europe, there is one more thing to check. The European Commission says
                  the EU AI Act became applicable on 2 August 2026, with some exceptions. Whether it applies to you
                  depends on what your AI does and where it is used, so we flag it and suggest you confirm it with
                  your legal adviser.
                </p>
              </div>
              <p style={srcNote}>
                Sources: <a href={SRC_ICO} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>ICO, accountability and governance implications of AI</a>;{' '}
                <a href={SRC_ICO_DPIA} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>ICO, when do we need to do a DPIA?</a>;{' '}
                <a href={SRC_EU_AI_ACT} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>European Commission, AI Act</a>.
              </p>
            </div>
            <ul className="col-3 mt-10">
              <li className="card"><h3>What we do</h3><p className="mt-4">Map the personal data each use case touches, check which AI providers would see it and on what terms, and draft the inputs for your DPIA.</p></li>
              <li className="card"><h3>What you keep</h3><p className="mt-4">You stay the data controller. We make that duty easy to meet with scoped access, a record of what the system did, and a written usage policy.</p></li>
              <li className="card"><h3>What we do not do</h3><p className="mt-4">We are not lawyers and do not give legal sign-off. We build to the requirements you set and document everything your adviser needs.</p></li>
            </ul>
          </div>
        </section>

        {/* ═══ 11. WHO IT IS FOR ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 740 }}>
              <span className="eyebrow">Who we work with</span>
              <h2>AI consulting for UK small businesses and mid-market firms</h2>
              <p className="lead mt-4">
                Our AI consulting for small businesses and growing firms works best where there is a repeated,
                paper-heavy or inbox-heavy process eating up skilled people’s time. These five groups make up most
                of the conversations we have.
              </p>
            </div>
            <ul className="col-3 mt-12">
              <li className="svc-card"><h3>Professional services</h3><p className="mt-4">Accountants, law firms, recruiters and agencies. Drafting, document review, client onboarding and time recording are common first use cases.</p></li>
              <li className="svc-card"><h3>Manufacturers and distributors</h3><p className="mt-4">Quote requests, order entry from emailed purchase orders, stock questions and supplier chasing, often across an ERP that nobody wants to replace.</p></li>
              <li className="svc-card"><h3>Ecommerce brands</h3><p className="mt-4">Customer service, product data, returns and marketplace listings. This is our home ground; see our <a href="/uk/ecommerce-development">UK ecommerce development</a> work.</p></li>
              <li className="svc-card"><h3>Property</h3><p className="mt-4">Lettings and estate agents, block managers and developers. Tenant and buyer enquiries, maintenance requests and document handling.</p></li>
              <li className="svc-card"><h3>Healthcare admin</h3><p className="mt-4">Clinics and practices, on the admin side only: bookings, referrals, letters and inbox triage, with extra care on data protection and DPIAs.</p></li>
              <li className="svc-card"><h3>Anyone asking where to start</h3><p className="mt-4">If you are a small business asking &ldquo;should we even be doing AI?&rdquo;, the answer starts with one short, focused engagement, not a programme.</p></li>
            </ul>
          </div>
        </section>

        {/* ═══ 12. ENGAGEMENT SHAPES (no pricing) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Scope, not packages</span>
                <h2>Four ways to work with our AI consultants</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  Every engagement is quoted for your scope, with a fixed price per stage. Here are the shapes it
                  usually takes, from smallest to largest.
                </p>
                <ul className="scope-list num-list mt-6" style={{ maxWidth: 580 }}>
                  <li><b>AI readiness assessment.</b> A one-off check of goals, data, systems, people and governance, ending in a short written report and a ranked list of use cases. Some businesses stop here, and that is a fine outcome.</li>
                  <li><b>Use-case sprint.</b> You already know the problem. We go deep on one use case: design, data check, a working pilot with real users, and a build or buy recommendation.</li>
                  <li><b>Advisory retainer.</b> Ongoing senior AI advice for leadership: reviewing vendor pitches, setting policy, keeping an AI roadmap current, and training teams as tools change.</li>
                  <li><b>Consult and build.</b> The full path from assessment to a live system you own, with our engineers building and supporting it. This is where FactoryJet is most different from a pure AI consulting company.</li>
                </ul>
                <div className="mt-8">
                  <ModalCTAButton label="Book my AI readiness call" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What moves the scope</span>
                <div className="scorecard-row"><div className="scorecard-metric">Teams and processes in scope</div><div className="scorecard-val" style={{ fontSize: 14 }}>Breadth</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">State of your data</div><div className="scorecard-val" style={{ fontSize: 14 }}>Prep</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Systems to connect</div><div className="scorecard-val" style={{ fontSize: 14 }}>Reach</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Sector rules and DPIA work</div><div className="scorecard-val" style={{ fontSize: 14 }}>Governance</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Advice only, or advice plus build</div><div className="scorecard-val" style={{ fontSize: 14 }}>Delivery</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">First call with the founder</div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Free</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 13. LONDON + UK ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">London and UK-wide</span>
                <h2>AI consultancy in London, and everywhere else in the UK</h2>
                <div className="stack mt-6">
                  <p>
                    A lot of people search for an AI consultancy in London, or type &ldquo;AI consulting near
                    me&rdquo;, expecting to need someone down the road. For this kind of work you do not. We run
                    engagements remotely, with video workshops, shared process maps and written reports, for
                    businesses in London, Manchester, Birmingham, Leeds, Bristol, Scotland and everywhere between.
                  </p>
                  <p>
                    What matters more than a postcode is who turns up. At FactoryJet the founder is involved in every
                    engagement, and the senior engineers who run your AI readiness assessment are the ones who
                    build the system if you go ahead. The same applies whether you are in Shoreditch or Shetland.
                  </p>
                  <p>
                    If AI visibility is also on your list, meaning how your business shows up in ChatGPT, Perplexity and
                    Google AI answers, that is a separate service: see <a href="/uk/ai-seo">AI SEO in the UK</a>.
                  </p>
                </div>
                <div className="flex-wrap mt-6">
                  <a className="city-pill" href="/uk/ai-agents">AI agent development UK</a>
                  <a className="city-pill" href="/uk/ecommerce-development">Ecommerce development UK</a>
                  <a className="city-pill" href="/uk/ai-seo">AI SEO UK</a>
                  <a className="city-pill" href="/contact">Contact us</a>
                </div>
              </div>

              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${T.n200}`, padding: '14px 18px' }}>
                  <span style={{ fontFamily: T.fm, fontSize: 10, letterSpacing: '.13em', textTransform: 'uppercase', color: T.n400 }}>UK · Monthly Search Demand</span>
                  <span style={{ background: T.small, color: '#fff', fontFamily: T.fm, fontSize: 10, borderRadius: 999, padding: '3px 9px' }}>DataForSEO</span>
                </div>
                <div style={{ padding: '4px 18px 14px' }}>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    {[
                      { kw: 'ai consultancy / ai consultant', v: '2,400', w: '100%', kd: 'The head term cluster' },
                      { kw: 'ai consulting services / company', v: '320', w: '13%', kd: 'Buyer intent' },
                      { kw: 'ai consultancy uk', v: '170', w: '7%', kd: 'Buyer intent, UK' },
                      { kw: 'ai strategy consultant', v: '140', w: '6%', kd: 'Leadership searches' },
                      { kw: 'ai consultancy london', v: '110', w: '5%', kd: 'Local intent' },
                      { kw: 'ai readiness assessment', v: '110', w: '5%', kd: 'Where most start' },
                      { kw: 'ai implementation consultant', v: '90', w: '4%', kd: 'Wants delivery, not slides' },
                    ].map((r) => (
                      <li key={r.kw} className="demand-row">
                        <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<span style={{ fontSize: 9, color: T.n400 }}> searches</span></span></div>
                        <div className="demand-bar"><i style={{ width: r.w }} /></div>
                        <div className="demand-kd">{r.kd}</div>
                      </li>
                    ))}
                  </ul>
                  <p style={{ textAlign: 'center', fontFamily: T.fm, fontSize: 10, color: T.n400, marginTop: 10 }}>Source: DataForSEO, United Kingdom, September 2026</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 14. COMPETITOR LIST (self-disclosure, ItemList) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">The honest landscape</span>
              <h2>UK AI consultancies worth knowing</h2>
              <p className="lead mt-4">
                We are one option, not the only one. These are UK AI consulting firms that show up when people search
                for an AI consultancy or ask AI assistants for a recommendation. Each note is based on what the
                company says on its own website. Talk to a few and pick the fit.
              </p>
            </div>
            <ul className="stack mt-10" style={{ maxWidth: 900 }}>
              {AI_CONSULTANCIES.map((a, i) => (
                <li key={a.name} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.orange, minWidth: 30 }}>{i + 1}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{a.name}{a.name === 'FactoryJet' && <span style={{ fontFamily: T.fm, fontSize: 10, background: T.small, color: '#fff', borderRadius: 999, padding: '2px 8px', marginLeft: 8, verticalAlign: 'middle' }}>That is us</span>}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{a.note}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p style={srcNote}>
              Firms named from live UK search results and AI assistant answers for AI consultancy queries, September 2026. Notes reflect each company’s own homepage on 24 September 2026. Listing is not endorsement.
            </p>
          </div>
        </section>

        {/* ═══ 15. WHY IT STALLS (ONS) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">Why AI adoption stalls</span>
              <h2>Most UK firms are not stuck on technology. They are stuck on the first decision.</h2>
              <div className="stack mt-6">
                <p>
                  The ONS numbers tell a clear story. Around a third of UK businesses with 10 or more staff now use
                  some form of AI, and more than half of employees say they use it for work or education. So AI is
                  already inside most businesses, often through personal accounts and browser tabs, whether
                  leadership planned it or not.
                </p>
                <p>
                  What is missing is a plan. When the ONS looked at what holds firms back, the most common answers
                  were difficulty identifying business use cases, cost, and a lack of expertise. At the same time,
                  41% of firms with 10 or more staff report no barriers at all, which suggests many are simply not
                  looking closely yet.
                </p>
                <p>
                  That is the real job of an AI business consultant: turn scattered, personal AI use into two or three
                  decisions the business actually owns, with rules around them and a way to measure them. Then, if it
                  makes sense, build the thing.
                </p>
              </div>
              <p style={srcNote}>
                Source: <a href={SRC_ONS} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>ONS, Artificial intelligence in UK businesses: 2023 to 2026</a>, released 20 July 2026.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ 16. FAQ (canonical Linear Minimal) ═══ */}
        <section className="sec-lg" id="faq">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>AI consultancy questions UK business owners actually ask</h2>
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

        {/* ═══ 17. FINAL CTA (the only dark section) ═══ */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Ready when you are</span>
            <h2>Find out where AI will actually pay off in your business</h2>
            <p className="mt-4">
              Send your name and work email. The founder replies within 24 hours to book a short call about your
              business, the use cases worth looking at, and whether an AI readiness assessment is the right first
              step. No spam, no obligation.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="Book my AI readiness call" region="uk" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/uk/ai-agents" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>See AI agent development</a>
            </div>
          </div>
        </section>

      </main>
        <Footer />
      </div>
    </>
  );
}

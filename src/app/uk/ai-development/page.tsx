import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import '../ai-agents/ai-agents.css';

const CANONICAL = 'https://factoryjet.com/uk/ai-development';
const UPDATED = '2026-09-24';
const TITLE = 'AI Development Company UK | Custom AI You Own | FactoryJet';
const H1 = 'The UK AI Development Company That Builds Custom AI Into the Systems You Already Run';
const DESCRIPTION =
  'UK AI development company for SMEs and mid-market. Custom AI development, AI integration and AI implementation in your CRM, ERP and shop. You own the code.';

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
  { name: 'AI Development', url: CANONICAL },
];

/* ─── External sources, each fetch-verified 2026-09-24 (HTTP 200, claim
       confirmed in the fetched body) ──────────────────────────────────── */
// DSIT, AI Adoption Research (DSIT 2026/003), published 28 January 2026,
// updated 13 February 2026. Report PDF linked from this page. Confirmed in the
// PDF: 16% of UK businesses currently use at least one AI technology; large
// 36%, mid-sized 23%, micro 14%; 59% of current/prospective users plan to embed
// AI into existing tools or systems in the next 12 months (65% off-the-shelf);
// most adopters bought ready-to-use solutions, only a small minority fully
// outsourced development; 84% apply at least some human checking of outputs;
// only 34% of firms planning to adopt feel ready; most common barriers = lack of
// identified need and limited AI skills and expertise. fetch-verified 2026-09-24
const SRC_DSIT = 'https://www.gov.uk/government/publications/ai-adoption-research';
// ICO: accountability principle makes you responsible for complying and for
// demonstrating compliance in any AI system that processes personal data; "in
// the vast majority of cases" AI use triggers the legal requirement for a DPIA.
// fetch-verified 2026-09-24
const SRC_ICO =
  'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/what-are-the-accountability-and-governance-implications-of-ai/';
// ICO: "AI systems introduce new kinds of complexity not found in more
// traditional IT systems"; data minimisation = identify the minimum personal
// data you need and process only that. fetch-verified 2026-09-24
const SRC_ICO_SECURITY =
  'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/how-should-we-assess-security-and-data-minimisation-in-ai/';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',   label: 'AI development basics' },
  { key: 'choosing', label: 'Choosing an AI development company' },
  { key: 'delivery', label: 'Timelines, cost & how it works' },
  { key: 'data',     label: 'Data, security & UK rules' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── AI development basics ──
  { category: 'basics', question: 'What is AI development?',
    answer: 'AI development is the work of designing, building, testing and running software that uses artificial intelligence to do a useful job. For most businesses today that means software built around a large language model, the kind of AI behind ChatGPT, connected to your own data and systems. It covers the whole journey: picking the job, preparing data, building, checking accuracy, going live and keeping it working.' },
  { category: 'basics', question: 'What does an AI development company actually do?',
    answer: 'An AI development company turns a business problem into working AI software. It works out which job AI should do, checks your data, chooses a model, builds the software and the connections to your systems, tests how accurate it is, puts it live securely, and supports it afterwards. The good ones also tell you when a ready-made tool would do the job better than a build.' },
  { category: 'basics', question: 'What are AI development services?',
    answer: 'AI development services are the separate pieces of work an AI development company sells. The usual list is custom AI software development, AI integration into existing systems, AI implementation (taking an idea into live use), document search and question answering over your own files, data preparation, model evaluation, and ongoing support. Most projects use several of these together rather than one on its own.' },
  { category: 'basics', question: 'What is AI integration?',
    answer: 'AI integration means connecting AI to the software your business already uses, so it can read the right information and put results in the right place. Examples: AI that reads incoming emails and creates tickets in your helpdesk, drafts quotes inside your CRM, or tidies product data in your ecommerce platform. The value comes from the connection, not the AI on its own.' },
  { category: 'basics', question: 'What are some examples of AI integration?',
    answer: 'Common examples for UK businesses: a search box that answers staff questions from your policies and manuals; AI that reads emailed purchase orders and keys them into your ERP; summaries of long customer threads inside your helpdesk; product descriptions drafted from supplier data in your shop; and meeting notes that land as actions in Microsoft 365. Each one saves a repeated manual step.' },
  { category: 'basics', question: 'What is AI implementation?',
    answer: 'AI implementation is the step from a promising idea or demo to AI that your team uses every day. It covers the unglamorous work most demos skip: preparing real data, connecting to real systems, testing accuracy on real cases, setting permissions, meeting UK GDPR duties, training staff, monitoring results and fixing problems. It is where most AI projects succeed or stall.' },
  { category: 'basics', question: 'What is RAG, in plain English?',
    answer: 'RAG stands for retrieval-augmented generation. In plain English: before the AI answers a question, the system first looks up the relevant pages from your own documents, then asks the AI to answer using only those pages. It is how you get AI that answers from your price lists, policies or manuals instead of guessing from general knowledge, and it lets the answer show where it came from.' },
  { category: 'basics', question: 'Is an AI agent the same as AI development?',
    answer: 'An AI agent is one thing an AI development company can build. It is AI that takes actions across your systems within rules you set, such as updating a record or booking a slot. AI development is the wider discipline, which also covers document search, integrations, data tools and internal apps. For agents specifically, see our UK AI agents page.' },

  // ── Choosing an AI development company ──
  { category: 'choosing', question: 'Which is the best AI development company in the UK?',
    answer: 'There is no single best one; it depends on your size and the job. Large enterprises often use IBM or big global engineering firms such as ScienceSoft or Itransition. UK SMEs and mid-market firms more often look at UK specialists such as Geeks Ltd, Chilliapple, Imobisoft, Ronins or TechGropse. We list them, including us, on this page with a neutral note on each. Talk to two or three before you choose.' },
  { category: 'choosing', question: 'How do I choose an AI development company in the UK?',
    answer: 'Ask to see systems they have put live, not demos. Ask who will do the work and whether the same team supports it after launch. Check that you will own the code, prompts and data. Ask how they measure accuracy, how they handle UK GDPR, and when they would tell you to buy a tool instead. A clear answer to all six is a good sign.' },
  { category: 'choosing', question: 'Should I use a freelancer or an AI development company?',
    answer: 'A freelancer is fine for a small prototype or a single, contained script. A company makes more sense when the AI needs to connect to several systems, handle personal data, or run every day for years, because you need testing, security, cover for holidays and someone on call when things change. Many businesses start with a freelancer and move to a team once the idea proves itself.' },
  { category: 'choosing', question: 'Should we buy an off-the-shelf AI tool or build custom AI?',
    answer: 'Buy first when the job is general: writing, summarising or searching documents. Tools like Microsoft Copilot or ChatGPT Enterprise are quick to roll out. Build when the job depends on your own systems, rules or data, or when a tool cannot reach the software your team uses. The UK government’s own research found most firms adopting AI bought ready-made tools. Build only where buying falls short.' },
  { category: 'choosing', question: 'Do you work with businesses outside London?',
    answer: 'Yes. We work with businesses across the UK, including London, Manchester, Birmingham, Leeds, Bristol and Scotland. AI development is done well remotely: workshops over video, shared test environments, and regular demos of working software. Searching for AI development near me matters less than finding a team that answers quickly and stays involved after launch.' },
  { category: 'choosing', question: 'Are you tied to one AI model or vendor?',
    answer: 'No. We do not resell any AI platform. We choose between models from OpenAI, Anthropic, Google, open-source options and Microsoft Azure based on accuracy on your test cases, where your data needs to stay, and running cost. We build so the model can be swapped later without rewriting the whole system, because the best model today may not be the best next year.' },

  // ── Timelines, cost & how it works ──
  { category: 'delivery', question: 'How long does custom AI development take?',
    answer: 'A focused first project usually takes 6 to 14 weeks from kick-off to live use. Discovery takes 1 to 2 weeks, data preparation 1 to 4 weeks, a working prototype 2 to 4 weeks, the production build and integrations 3 to 8 weeks, and a pilot with real users 2 to 4 weeks. Messy data and older systems stretch the timeline; a clear, narrow job shortens it.' },
  { category: 'delivery', question: 'How much does it cost to build custom AI?',
    answer: 'It depends on scope, not a rate card. The biggest drivers are how many systems the AI must connect to, how clean your data is, how accurate it needs to be, how much personal data it touches, and whether you want ongoing support. We scope after a free first call and quote a fixed price per phase, so nothing is open-ended. Model usage is billed to you directly by the provider.' },
  { category: 'delivery', question: 'How do I implement AI in my company?',
    answer: 'Start with one job, not a strategy document. Pick a repeated task where mistakes are low-risk and results are easy to measure. Check the data it needs. Try a ready-made tool first. If that falls short, build a small prototype, test it on real cases, run a short pilot with the people who do the job, then roll out with training and monitoring. Add the next job only after the first one works.' },
  { category: 'delivery', question: 'What are the stages of the AI development lifecycle?',
    answer: 'We use seven: discovery (pick the job and the success measure), data preparation, model choice, prototype, production build and integration, evaluation and pilot, then launch with monitoring and support. Different firms name them differently, but every serious AI development lifecycle includes testing accuracy before launch and watching it after, because AI output can drift as data and models change.' },
  { category: 'delivery', question: 'What are the key principles when implementing AI?',
    answer: 'Five we hold to. Start with a measurable business problem. Keep a person checking outputs where mistakes matter. Use the least personal data you need. Test accuracy on real cases before launch and keep measuring after. And make sure you own and understand what was built, so you are never stuck with a black box only one supplier can touch.' },
  { category: 'delivery', question: 'Can I build my own AI for free?',
    answer: 'You can build a simple prototype at low cost using free tiers and no-code tools, and it is a good way to test an idea. Running AI properly in a business is different: model usage is billed, systems need secure connections, and someone has to test, monitor and fix it. Free is fine for learning. For anything customers or staff depend on, budget for the build and the upkeep.' },
  { category: 'delivery', question: 'What happens after the AI goes live?',
    answer: 'We stay on. Monthly support covers monitoring accuracy, fixing problems, updating prompts and connections when your systems change, and testing new models as they are released. You get a simple report of how the system is used and where it gets things wrong. You can also take support in-house at any point, because the code and documentation are yours.' },
  { category: 'delivery', question: 'Who does the work?',
    answer: 'Senior engineers, with the founder, Bhavesh Barot, involved in every engagement. FactoryJet has served 500+ businesses since 2014, mostly in commerce. The people who scope your project are the people who build it and support it. There is no hand-off to a junior team after the contract is signed.' },

  // ── Data, security & UK rules ──
  { category: 'data', question: 'Do we need perfect data before starting AI development?',
    answer: 'No. Checking how good your data is for a specific job is part of the work. Many useful first projects run on data you already have in documents, emails, your CRM or your shop. If a job needs better data, we tell you exactly what to fix and in what order. What you do need is someone who knows the process well enough to judge whether the AI got it right.' },
  { category: 'data', question: 'How does UK GDPR affect AI development?',
    answer: 'If the AI touches personal data, UK GDPR applies from the first design decision. The ICO says the accountability principle makes you responsible for complying, and for showing you comply, in any AI system that processes personal data. In practice we map what personal data each feature uses, limit it to what is needed, check which providers see it, and help you prepare a DPIA.' },
  { category: 'data', question: 'When do we need a DPIA for an AI project?',
    answer: 'Usually. A DPIA, or data protection impact assessment, is a written check of the risks a project creates for people’s data and how you reduce them. The ICO says that in the vast majority of cases, using AI involves processing likely to result in a high risk to people’s rights and freedoms, which triggers the legal requirement for one. We flag it at discovery.' },
  { category: 'data', question: 'Will our data be used to train public AI models?',
    answer: 'Not if the system is set up properly. We use AI providers through their business terms, which by default do not use your inputs for training, and where it matters we use UK or EU cloud regions that providers such as Microsoft Azure and AWS offer. We document which provider sees which data, so your data protection lead and your customers can get a straight answer.' },
  { category: 'data', question: 'Is there a law for AI in the UK?',
    answer: 'There is no single UK AI Act. AI is governed by existing law, above all UK GDPR and the Data Protection Act 2018, plus sector rules from regulators such as the FCA or the CQC where they apply. If you sell AI-powered services into the EU, the EU AI Act may also apply. We build to these requirements and suggest you confirm your position with a legal adviser.' },
  { category: 'data', question: 'Do we own the AI you build?',
    answer: 'Yes. The code, the integrations, the prompts, the test sets and the documentation are yours. We are not a platform you rent. If you move the work in-house or to another provider, it keeps running. You hold the accounts with the AI model providers and pay them directly, with no markup through us.' },
  { category: 'data', question: 'What stops the AI from making things up?',
    answer: 'Nothing removes the risk completely, so we design around it. We make the AI answer from your own documents (the RAG approach), show its sources, refuse when it does not know, and keep a person approving anything that matters. Before launch we test it against a set of real questions with known answers, and we keep scoring it after launch.' },
];

/* ─── Named UK AI development companies (open self-disclosure, ItemList).
       Each note is based on the company’s own homepage, fetched 2026-09-24. ── */
const AI_DEV_COMPANIES: { name: string; note: string }[] = [
  { name: 'FactoryJet', note: 'That is us. A founder-led UK AI development company for SMEs and mid-market firms, strongest where AI has to connect to commerce and operations systems: CRM, ERP, ecommerce, helpdesk and Microsoft 365. You own the code, and the same team supports it.' },
  { name: 'Geeks Ltd', note: 'An AI software development company with its headquarters in Sutton, London, and an office in Houston. It lists AI software development, AI agent development and AI integration as core services, alongside AI strategy.' },
  { name: 'Chilliapple', note: 'A UK software development agency with offices in Tunbridge Wells and London, building custom applications, AI automation for business workflows and AI-integrated web applications.' },
  { name: 'Imobisoft', note: 'A bespoke AI software development company based at Coventry University Technology Park, covering AI strategy, LLM and generative AI development, custom software, mobile apps and cloud.' },
  { name: 'Ronins', note: 'A digital growth agency based in London and Surrey that combines growth marketing, product thinking and AI, with AI consultancy, AI automation and AI development services.' },
  { name: 'TechGropse', note: 'An AI development company with UK offices in London and Manchester and teams in the USA, UAE and India. Its UK page sets out a six-phase build process from discovery to MLOps support.' },
  { name: 'ScienceSoft', note: 'A large software development and AI company headquartered in the Dallas area of Texas, with 750+ staff. Better suited to larger enterprise programmes than a first SME project.' },
  { name: 'Itransition', note: 'A global software engineering firm covering AI, data analytics, application development and managed IT, with a five-stage AI delivery pipeline and enterprise case studies.' },
];

/* ─── JSON-LD (Organization is referenced by @id only, defined sitewide) ── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'AI Development Services UK',
      serviceType: 'Custom AI development, AI integration and AI implementation',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      description:
        'Custom AI software development, AI integration into CRM, ERP, ecommerce, helpdesk and Microsoft 365, and AI implementation from proven idea to production: data preparation, retrieval over your documents, model choice, evaluation, security, UK GDPR, monitoring and support. The client owns the code and data.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'AI development services',
        itemListElement: [
          'Custom AI software development',
          'AI integration services',
          'AI implementation',
          'Document search and question answering (RAG)',
          'AI evaluation and monitoring',
          'AI support and maintenance',
        ].map((n) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: n } })),
      },
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
      inLanguage: 'en-GB',
      datePublished: '2026-09-24',
      dateModified: UPDATED,
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '[data-speakable="true"]'] },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
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
      about: { '@id': `${CANONICAL}#service` },
    },
    {
      '@type': 'ItemList',
      '@id': `${CANONICAL}#companies`,
      name: 'UK AI development companies',
      itemListElement: AI_DEV_COMPANIES.map((a, i) => ({
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
  alternates: { canonical: CANONICAL, languages: { 'en-GB': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: TITLE,
    description:
      'A UK AI development company for SMEs and mid-market firms. Custom AI software, AI integration services and AI implementation into the systems you already run, with UK GDPR built in. You own the code.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/uk/ai-development/ai-development-og.webp', width: 1200, height: 630, alt: 'AI development company UK: a FactoryJet developer and a business owner reviewing an internal AI tool on a large monitor' }],
  },
  robots: { index: true, follow: true },
};

const srcNote = { fontFamily: T.fm, fontSize: 11, color: T.n400, marginTop: 12 } as const;
const srcLink = { textDecoration: 'underline' } as const;

export default function AiDevelopmentUKPage() {
  return (
    <>
      <script id="ld-uk-ai-development" type="application/ld+json"
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
                  <span className="chip"><span className="dot dot-orange" />UK AI Development Company</span>
                  <span className="chip">AI Integration</span>
                  <span className="chip">You Own the Code</span>
                </div>
                <h1>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  FactoryJet is an AI development company for UK SMEs and mid-market firms. We design, build and
                  support custom AI software, connect it to the CRM, ERP, shop, helpdesk and Microsoft 365 tools your
                  team already uses, and take it from a promising idea to something people rely on every day. You own
                  the code and the data. The same senior team stays on after launch.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
                  <div className="upd">Last updated<br />24 September 2026</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="uk" source="uk_ai_development_hero" submitLabel="Talk to the Founder" />
                </div>
              </div>

              <div className="card" style={{ padding: 8 }}>
                <img src="/images/uk/ai-development/ai-development-hero.webp" width={1400} height={933} fetchPriority="high" decoding="async" alt="A FactoryJet developer and a UK business owner reviewing a custom internal AI tool on a large monitor in a bright office" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">What you get</span>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">AI built into your systems</div><div className="scorecard-note">CRM, ERP, shop, helpdesk, Microsoft 365</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Integrated</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Code, prompts and data</div><div className="scorecard-note">no platform lock-in, no licence</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Yours</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Accuracy tested before launch</div><div className="scorecard-note">and measured every month after</div></div>
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
              <span className="lab">What does an AI development company do?</span>
              <p>
                An AI development company builds software that uses AI to do a real job in your business, then keeps
                it working. It picks the task, prepares your data, chooses a model, connects it to your CRM or ERP,
                tests accuracy, handles UK GDPR and puts it live. A good one tells you when a ready-made tool is
                enough.
              </p>
            </div>
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">Three terms, in plain English</span>
              <p>
                <b>AI development</b> is building the software. <b>AI integration</b> is connecting AI to the tools you
                already use, so it reads the right information and writes results back in the right place. <b>AI
                implementation</b> is everything that turns a demo into daily use: real data, permissions, testing,
                training, monitoring and support.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              Why this matters now: the Department for Science, Innovation and Technology found that around one in
              six UK businesses (16%) currently use at least one AI technology, rising to 23% of mid-sized and 36% of
              large firms. Looking ahead 12 months, 59% of firms using or planning to use AI intend to embed it into
              their existing tools or systems. That is AI integration, and it is the part a ready-made chatbot cannot
              do on its own.
            </p>
            <p style={srcNote}>
              Source: <a href={SRC_DSIT} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>DSIT, AI Adoption Research (2026)</a>.
            </p>
          </div>
        </section>

        {/* ═══ 3. FACTS BAND (verified only) ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              {[
                { v: '16%', t: 'of UK businesses currently use at least one AI technology', s: 'DSIT, 2026', u: SRC_DSIT },
                { v: '59%', t: 'of current and planned AI users intend to embed AI into existing tools or systems', s: 'DSIT, 2026', u: SRC_DSIT },
                { v: '34%', t: 'of firms planning to adopt AI say they feel ready to implement it', s: 'DSIT, 2026', u: SRC_DSIT },
                { v: 'DPIA', t: 'legally required in the vast majority of AI uses that process personal data', s: 'ICO guidance', u: SRC_ICO },
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

        {/* ═══ 4. LISTICLE: WHAT WE BUILD ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Our AI development services</span>
              <h2>Eight kinds of custom AI we build for UK businesses</h2>
              <p className="lead mt-4">
                Every item on this list is a real job with a plain example. Most projects start with one of them and
                add the next once the first is working. None of them needs you to replace the software you run today.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 920 }}>
              {[
                { n: '01', t: 'Answers from your own documents', d: 'A private search box that answers staff or customer questions from your policies, manuals, contracts and price lists, and shows which page each answer came from. Example: a warehouse team asks about returns rules for a trade customer and gets the exact clause, not a guess.' },
                { n: '02', t: 'Document and email processing', d: 'AI that reads invoices, purchase orders, delivery notes or application forms and pulls the key details into your systems. Example: emailed purchase orders from trade buyers become draft sales orders in your ERP, ready for a person to approve.' },
                { n: '03', t: 'AI inside your CRM', d: 'Call and email summaries on the customer record, suggested next steps, first-draft quotes and follow-ups written in your tone. Example: after every sales call, the notes, actions and a draft reply are waiting in the CRM before the rep has hung up.' },
                { n: '04', t: 'AI for ecommerce operations', d: 'Product descriptions drafted from supplier data, cleaner attributes and categories, smarter on-site search, and returns reasons sorted into themes. This is our home ground; see our UK ecommerce development and Magento work.' },
                { n: '05', t: 'Helpdesk and inbox triage', d: 'Incoming tickets and emails sorted, tagged, prioritised and given a suggested reply, with anything sensitive routed straight to a person. Example: order status questions get a drafted answer with live tracking pulled in; complaints go to a manager.' },
                { n: '06', t: 'AI in Microsoft 365', d: 'Connections between AI and SharePoint, Outlook, Teams and Excel, so answers and actions happen where your team already works. Example: a Teams assistant that finds the latest signed version of a supplier contract in SharePoint.' },
                { n: '07', t: 'Internal AI tools and apps', d: 'Small, focused applications for one team: a quote builder, a compliance checker, a report writer that pulls numbers from three systems. Example: a weekly trading report drafted from your shop, ERP and ad accounts, checked by a person, sent on Monday.' },
                { n: '08', t: 'AI agents that take actions', d: 'AI that carries out multi-step tasks across your systems within rules you set, such as chasing an unpaid invoice or rebooking a delivery. Agents have their own page because they need extra design care: see AI agent development in the UK.' },
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
            <div className="flex-wrap mt-8">
              <a className="city-pill" href="/uk/ai-agents">AI agent development UK</a>
              <a className="city-pill" href="/uk/ai-receptionist">AI receptionist UK</a>
              <a className="city-pill" href="/uk/ecommerce-development">Ecommerce development UK</a>
              <a className="city-pill" href="/uk/magento">Magento UK</a>
            </div>
          </div>
        </section>

        {/* ═══ 5. RAG EXPLAINED + ENGINEER IMAGE ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">How custom AI knows your business</span>
                <h2>AI integration that answers from your data, not from the internet</h2>
                <div className="stack mt-6">
                  <p>
                    A general AI model knows a lot about the world and nothing about your business. It has never seen
                    your price list, your returns policy or last month’s supplier contract. Ask it about them and it
                    will either say it does not know or, worse, make up something that sounds right.
                  </p>
                  <p>
                    The fix most custom AI development uses is called <b>RAG</b>, short for retrieval-augmented
                    generation. Think of it as an open-book exam. Before the AI answers, the system looks up the most
                    relevant pages from your own documents and records, hands them to the AI, and tells it to answer
                    using only those pages. The answer can then show exactly where it came from.
                  </p>
                  <p>
                    Getting RAG right is most of the engineering. Documents have to be split sensibly, kept up to date
                    when files change, and filtered by permissions so the finance team’s files do not show up in a
                    warehouse answer. We build that plumbing, test it against real questions, and keep it current
                    after launch.
                  </p>
                </div>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/uk/ai-development/ai-development-engineer.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A FactoryJet AI engineer at a desk with two monitors showing the connected building blocks of a custom AI system" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">Inside a typical build</span>
                  <div className="scorecard-row"><div><div className="scorecard-metric">Your documents and records</div><div className="scorecard-note">shared drives, CRM, ERP, shop, helpdesk</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Source</div></div>
                  <div className="scorecard-row"><div><div className="scorecard-metric">Search and permissions layer</div><div className="scorecard-note">finds the right pages, hides the wrong ones</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Retrieve</div></div>
                  <div className="scorecard-row"><div><div className="scorecard-metric">AI model</div><div className="scorecard-note">chosen on your test cases, swappable</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Answer</div></div>
                  <div className="scorecard-row"><div><div className="scorecard-metric">A person, where it matters</div><div className="scorecard-note">approves anything customer-facing</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Check</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 6. DELIVERY PROCESS (step by step, with week ranges) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">The AI development lifecycle</span>
              <h2>AI implementation, step by step: seven phases and how long each takes</h2>
              <p className="lead mt-4">
                Most AI development companies show a process diagram with no timings. Here are ours, with honest
                ranges. A focused first project usually runs 6 to 14 weeks from kick-off to live use. Phases overlap,
                so the total is shorter than the sum.
              </p>
            </div>
            <ol className="col-3 mt-12">
              <li className="card"><span className="stage-num">01</span><h3>Discovery</h3><p className="mt-4"><b>1 to 2 weeks.</b> We sit with the people who do the job, map the process, agree one measurable goal (hours saved, reply time, error rate), and decide whether to buy a tool or build.</p></li>
              <li className="card"><span className="stage-num">02</span><h3>Data preparation</h3><p className="mt-4"><b>1 to 4 weeks.</b> We find where the information lives, check it is accurate and that you are allowed to use it this way, strip out personal data the job does not need, and set up secure access.</p></li>
              <li className="card"><span className="stage-num">03</span><h3>Model choice and prototype</h3><p className="mt-4"><b>2 to 4 weeks.</b> We build a working prototype on your real data and try two or three models against a test set of real cases with known right answers. You see it working, not a slide.</p></li>
              <li className="card"><span className="stage-num">04</span><h3>Production build and integration</h3><p className="mt-4"><b>3 to 8 weeks.</b> The prototype becomes proper software: connections to your CRM, ERP, shop, helpdesk or Microsoft 365, user permissions, logging, error handling and a simple screen for your team.</p></li>
              <li className="card"><span className="stage-num">05</span><h3>Evaluation and pilot</h3><p className="mt-4"><b>2 to 4 weeks.</b> A small group uses it on real work. We score accuracy, watch where it struggles, fix it, and confirm the goal from discovery is being met before anyone else gets access.</p></li>
              <li className="card"><span className="stage-num">06</span><h3>Launch</h3><p className="mt-4"><b>1 to 2 weeks.</b> Rollout to the wider team with short training, written usage rules, security checks and your DPIA inputs finished. The system goes live with monitoring switched on.</p></li>
              <li className="card"><span className="stage-num">07</span><h3>Monitoring and support</h3><p className="mt-4"><b>Ongoing, monthly.</b> We watch accuracy and usage, fix issues, update connections when your systems change, and test new models as they arrive. Same team that built it.</p></li>
            </ol>
            <p style={srcNote}>
              Ranges are typical for a single, focused use case at a UK SME or mid-market firm. Several integrations,
              older on-premise systems or heavily regulated data push toward the top of each range.
            </p>
          </div>
        </section>

        {/* ═══ 7. COMPARISON TABLE ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <span className="eyebrow">Side by side</span>
            <h2 style={{ maxWidth: 780 }}>Off-the-shelf AI tool vs freelancer vs big consultancy vs an AI development company</h2>
            <p className="lead mt-4" style={{ maxWidth: 760 }}>
              Each option is right for someone. This is how they compare on the five things that decide whether AI
              keeps working after month three.
            </p>
            <div className="card mt-8" style={{ padding: 0, overflowX: 'auto' }}>
              <table className="cmp-table">
                <thead>
                  <tr>
                    <th>What matters</th>
                    <th className="fj">FactoryJet</th>
                    <th>Off-the-shelf AI tool</th>
                    <th>Freelancer</th>
                    <th>Big consultancy or offshore dev shop</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Control over how it works</td><td className="fj"><span className="yes">Full: your rules, your data</span></td><td><span className="partial">Settings the vendor allows</span></td><td><span className="yes">Full</span></td><td><span className="partial">Full, via change requests</span></td></tr>
                  <tr><td className="feat">Integration depth</td><td className="fj"><span className="yes">Deep: CRM, ERP, shop, helpdesk, M365</span></td><td><span className="partial">Built-in connectors only</span></td><td><span className="partial">One or two systems</span></td><td><span className="yes">Deep</span></td></tr>
                  <tr><td className="feat">Speed to first result</td><td className="fj"><span className="yes">Prototype in weeks</span></td><td><span className="yes">Days</span></td><td><span className="yes">Weeks</span></td><td><span className="partial">Months, after procurement</span></td></tr>
                  <tr><td className="feat">Who owns it</td><td className="fj"><span className="yes">You: code, prompts, data</span></td><td><span className="no">The vendor; you rent it</span></td><td><span className="partial">Depends on the contract</span></td><td><span className="partial">Often yours, check licences</span></td></tr>
                  <tr><td className="feat">Support after launch</td><td className="fj"><span className="yes">Same team, monthly</span></td><td><span className="partial">Vendor help desk</span></td><td><span className="no">If they are available</span></td><td><span className="partial">Separate contract, new team</span></td></tr>
                  <tr><td className="feat">Who does the work</td><td className="fj"><span className="yes">Senior engineers + founder</span></td><td>You and your team</td><td>One person</td><td><span className="partial">Mixed seniority</span></td></tr>
                  <tr><td className="feat">Best fit</td><td className="fj"><span className="yes">UK SMEs and mid-market</span></td><td><span className="partial">General writing and search</span></td><td><span className="partial">Small prototypes</span></td><td><span className="partial">Large enterprise programmes</span></td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6" style={{ maxWidth: 780 }}>
              Our honest advice: try an off-the-shelf tool first for general jobs. The UK government’s research found
              that most businesses using AI bought ready-to-use solutions, and only a small minority fully outsourced
              development. Bring in an AI development company when the job needs your own systems, your own rules, or
              data you cannot paste into a public tool.
            </p>
            <p style={srcNote}>
              Source: <a href={SRC_DSIT} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>DSIT, AI Adoption Research (2026)</a>, how businesses adopted each AI technology.
            </p>
          </div>
        </section>

        <MidPageCTA
          headline={'Have an AI idea that needs to connect to your real systems?'}
          sub={'Tell us the job and the tools involved. On a short call with the founder, we will tell you whether a ready-made tool will do, what a custom build would involve, and roughly how many weeks each phase would take.'}
          label={'Talk to the Founder'}
        />

        {/* ═══ 8. WHAT CAN GO WRONG ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">The part most pages leave out</span>
              <h2>Six ways AI implementation goes wrong, and how we prevent each one</h2>
              <p className="lead mt-4">
                The UK government’s research found that only about a third of businesses planning to adopt AI feel
                ready to implement it. These are the problems that make people nervous, and they are all avoidable.
              </p>
            </div>
            <ul className="col-3 mt-12">
              <li className="svc-card"><h3>No clear job for it</h3><p className="mt-4">The most common barrier DSIT found was a lack of identified need. AI bought because it is new ends up unused. We start from one measurable task and a number you already track.</p></li>
              <li className="svc-card"><h3>It makes things up</h3><p className="mt-4">AI can state wrong answers confidently. We ground answers in your documents, show sources, make it say &ldquo;I don’t know&rdquo;, and keep a person approving anything customer-facing.</p></li>
              <li className="svc-card"><h3>The demo never meets real data</h3><p className="mt-4">A prototype on ten tidy examples says little about ten thousand messy ones. We test on your real cases from week three and publish accuracy before launch.</p></li>
              <li className="svc-card"><h3>Personal data leaks into the wrong place</h3><p className="mt-4">Staff pasting customer details into consumer tools is a UK GDPR problem. We use business terms that do not train on your data, limit access by role, and log what the system did.</p></li>
              <li className="svc-card"><h3>It quietly gets worse</h3><p className="mt-4">Models are updated, your data changes, and accuracy drifts. Monthly monitoring against a fixed test set catches that before your customers do.</p></li>
              <li className="svc-card"><h3>The builder disappears</h3><p className="mt-4">The classic agency failure: launch, invoice, gone. You own everything we build, it is documented, and the team that built it stays on to support it.</p></li>
            </ul>
            <p style={srcNote}>
              Source: <a href={SRC_DSIT} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>DSIT, AI Adoption Research (2026)</a>: 34% of firms planning to adopt AI feel ready; most common barriers are a lack of identified need and limited AI skills and expertise.
            </p>
          </div>
        </section>

        {/* ═══ 9. HOW TO CHOOSE CHECKLIST ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Before you sign anything</span>
              <h2>How to choose an AI development company in the UK: a ten-point checklist</h2>
              <p className="lead mt-4">
                Use this with any AI software development company, including us. A good one will enjoy the questions.
                A weak one will steer you back to the demo.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 920 }}>
              {[
                { n: '01', t: 'Show me something live', d: 'Ask for AI systems running in a real business today. Demos and proofs of concept are easy. Production systems that survived a year are not.' },
                { n: '02', t: 'Who exactly will build it?', d: 'Get names. Ask whether the people in the sales call are the people who write the code, and whether that team supports it after launch.' },
                { n: '03', t: 'When would you tell us to buy instead?', d: 'An honest custom AI development company has a clear answer. If every problem needs a custom build, the advice is a sales process.' },
                { n: '04', t: 'How will you measure accuracy?', d: 'You want a test set of real cases with known answers, a score before launch, and the same score tracked every month after.' },
                { n: '05', t: 'Which systems can you integrate with?', d: 'Name your CRM, ERP, shop and helpdesk. Ask how they would connect, and what happens when one of those systems updates.' },
                { n: '06', t: 'Where does our data go?', d: 'Which AI providers see it, on what terms, in which region, and does anyone train on it? Ask for this in writing.' },
                { n: '07', t: 'Will you help with UK GDPR and our DPIA?', d: 'They are not your lawyers, but they should map personal data, limit it, and give your data protection lead what a DPIA needs.' },
                { n: '08', t: 'What do we own at the end?', d: 'Code, prompts, integrations, test sets and documentation should all be yours, with no ongoing licence to keep using them.' },
                { n: '09', t: 'Can we switch models later?', d: 'A well-built system can change AI model without a rewrite. Being tied to one model is being tied to one price list.' },
                { n: '10', t: 'What does support look like after launch?', d: 'Ask who watches it, how fast they respond, and how they handle model updates. Most failures happen after the launch party.' },
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

        {/* ═══ 10. SECURITY + UK GDPR ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">Security and UK GDPR, in plain English</span>
              <h2>AI development services with data protection designed in, not bolted on</h2>
              <div className="stack mt-6">
                <p>
                  If your AI touches personal data, meaning anything about a customer, a patient, a tenant or a member
                  of staff, UK GDPR applies. The Information Commissioner’s Office says the accountability principle
                  makes you responsible for complying with data protection law, and for demonstrating that you comply,
                  in any AI system that processes personal data.
                </p>
                <p>
                  A DPIA, or data protection impact assessment, is a written check of the risks a project creates for
                  people’s data and how you reduce them. The ICO is direct: in the vast majority of cases, using AI
                  involves processing likely to result in a high risk to people’s rights and freedoms, which triggers
                  the legal requirement to do one.
                </p>
                <p>
                  The ICO also warns that AI systems bring new kinds of complexity not found in more traditional IT
                  systems, and its data minimisation principle means using only the personal data you actually need
                  for the purpose. Those two ideas shape how we design every build: less data in, tighter access, and
                  a clear record of what the system did.
                </p>
              </div>
              <p style={srcNote}>
                Sources: <a href={SRC_ICO} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>ICO, accountability and governance implications of AI</a>;{' '}
                <a href={SRC_ICO_SECURITY} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>ICO, security and data minimisation in AI</a>.
              </p>
            </div>
            <ul className="col-3 mt-10">
              <li className="card"><h3>What we do</h3><p className="mt-4">Map the personal data each feature uses, remove what it does not need, choose providers with business terms that do not train on your inputs, and draft your DPIA inputs.</p></li>
              <li className="card"><h3>How we secure it</h3><p className="mt-4">Role-based access, secrets kept out of code, UK or EU hosting where you need it, logs of every AI action, and a person approving anything with real consequences.</p></li>
              <li className="card"><h3>What we do not do</h3><p className="mt-4">We are not lawyers and do not give legal sign-off. You stay the data controller. We build to your requirements and document what your adviser needs.</p></li>
            </ul>
          </div>
        </section>

        {/* ═══ 11. WHY FACTORYJET (E-E-A-T) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Why FactoryJet</span>
                <h2>An AI software development company that grew up inside commerce systems</h2>
                <div className="stack mt-6">
                  <p>
                    FactoryJet was founded in 2014 by Bhavesh Barot and has served 500+ businesses since, most of them
                    in commerce: B2B wholesalers such as Bombay Petals, direct-to-consumer brands such as Belle Maison,
                    and the ERPs, CRMs and ecommerce platforms that sit behind them. That decade of integration work is
                    why our AI development starts from your systems, not from a model.
                  </p>
                  <p>
                    We are a services company. We design, build, implement and support AI, and you own what we build.
                    We do not sell a platform, take a cut of your model costs, or hand you to a junior team after the
                    contract is signed. The founder is involved in every engagement.
                  </p>
                  <p>
                    Not sure what to build yet? Start with our <a href="/uk/ai-consulting">UK AI consultancy</a>, which
                    runs an AI readiness assessment and hands the plan straight to the same engineers. Want to see how
                    we think about builds in more depth? Read our guide on{' '}
                    <a href="/blog/how-to-build-an-ai-agent-uk-2026">how to build an AI agent in the UK</a>, or our{' '}
                    <a href="/services/ai-integration-services">AI integration services</a> page.
                  </p>
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What sets the scope</span>
                <div className="scorecard-row"><div className="scorecard-metric">Number of systems to connect</div><div className="scorecard-val" style={{ fontSize: 14 }}>Reach</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">State of your data</div><div className="scorecard-val" style={{ fontSize: 14 }}>Prep</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Accuracy the job needs</div><div className="scorecard-val" style={{ fontSize: 14 }}>Testing</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Personal data and sector rules</div><div className="scorecard-val" style={{ fontSize: 14 }}>Governance</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Support after launch</div><div className="scorecard-val" style={{ fontSize: 14 }}>Monthly</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">First call with the founder</div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Free</div></div>
                <div className="mt-6">
                  <ModalCTAButton label="Talk to the Founder" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 12. ENGAGEMENT SHAPES (no pricing) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Scope, not packages</span>
              <h2>Four ways to work with our AI development team</h2>
              <p className="lead mt-4">
                Every engagement is quoted for your scope, with a fixed price per phase. These are the shapes it
                usually takes, from smallest to largest.
              </p>
            </div>
            <ul className="col-4 mt-10" style={{ gap: 20 }}>
              <li className="svc-card"><h3>Prototype sprint</h3><p className="mt-4">One job, your real data, a working prototype and an accuracy score in a few weeks. You decide whether to go further with evidence, not a pitch.</p></li>
              <li className="svc-card"><h3>Fixed-scope build</h3><p className="mt-4">From discovery to live use for one use case, including integrations, testing, training and launch. The most common starting point.</p></li>
              <li className="svc-card"><h3>AI integration project</h3><p className="mt-4">You already have an AI tool. We connect it properly to your CRM, ERP, shop, helpdesk or Microsoft 365 so it can actually do the job.</p></li>
              <li className="svc-card"><h3>Monthly support</h3><p className="mt-4">Monitoring, fixes, model updates and small improvements for systems we built, or for AI someone else built and then left behind.</p></li>
            </ul>
          </div>
        </section>

        {/* ═══ 13. DEMAND CARD ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">London and UK-wide</span>
                <h2>An AI development company for London, and everywhere else in the UK</h2>
                <div className="stack mt-6">
                  <p>
                    Plenty of people search for AI development near me, expecting to need a team down the road. For
                    this work you do not. We run discovery workshops over video, share a test environment from the
                    first weeks, and demo working software every fortnight, for businesses in London, Manchester,
                    Birmingham, Leeds, Bristol, Scotland and everywhere between.
                  </p>
                  <p>
                    What matters more than a postcode is who answers when something breaks. At FactoryJet that is the
                    same senior team that built your system, with the founder involved throughout.
                  </p>
                  <p>
                    If the job is a phone line rather than software, see our <a href="/uk/ai-receptionist">AI
                    receptionist service</a>. If you want AI to act on its own across your systems, see{' '}
                    <a href="/uk/ai-agents">UK AI agent development</a>. Ready to talk? <a href="/contact">Contact us</a>.
                  </p>
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
                      { kw: 'ai development', v: '590', w: '100%', kd: 'The head term' },
                      { kw: 'ai implementation', v: '590', w: '100%', kd: 'Idea to daily use' },
                      { kw: 'ai development company', v: '320', w: '54%', kd: 'Buyer intent' },
                      { kw: 'ai integration', v: '320', w: '54%', kd: 'Connect AI to your tools' },
                      { kw: 'ai development services', v: '260', w: '44%', kd: 'Buyer intent' },
                      { kw: 'ai integration services', v: '90', w: '15%', kd: 'Buyer intent' },
                      { kw: 'ai implementation consultant', v: '90', w: '15%', kd: 'Wants delivery, not slides' },
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
              <h2>UK AI development companies worth knowing</h2>
              <p className="lead mt-4">
                We are one option, not the only one. These AI development companies show up when UK buyers search for
                AI development services or custom AI development. Each note is based on what the company says on its
                own website. Talk to a few and pick the fit.
              </p>
            </div>
            <ul className="stack mt-10" style={{ maxWidth: 900 }}>
              {AI_DEV_COMPANIES.map((a, i) => (
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
              Companies named from live UK search results for AI development company and AI development services queries, September 2026. Notes reflect each company’s own website on 24 September 2026. Listing is not endorsement.
            </p>
          </div>
        </section>

        {/* ═══ 15. FAQ (canonical Linear Minimal) ═══ */}
        <section className="sec-lg" id="faq">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>AI development questions UK business owners actually ask</h2>
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

        {/* ═══ 16. FINAL CTA (the only dark section) ═══ */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Ready when you are</span>
            <h2>Turn your AI idea into software your team uses every day</h2>
            <p className="mt-4">
              Send your name and work email. The founder replies within 24 hours to book a short call about the job,
              the systems involved, and whether a ready-made tool or a custom build is the right answer. No spam, no
              obligation.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="Talk to the Founder" region="uk" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/uk/ai-consulting" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>Start with AI consulting</a>
            </div>
          </div>
        </section>

      </main>
        <Footer />
      </div>
    </>
  );
}

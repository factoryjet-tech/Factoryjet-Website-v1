import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
import '../au-service.css';

const CANONICAL = 'https://factoryjet.com/au/ai-consulting';
const UPDATED = '2026-09-25';
const TITLE = 'AI Consulting Australia | Consultants Who Build | FactoryJet';
const DESCRIPTION =
  'AI consulting for Australian SMEs: we find where AI pays off, check your data and Privacy Act duties, decide buy or build, then build it. Founder-led.';
const H1 = 'AI Consulting in Australia: Find Where AI Pays Off, Then Build It';

/* Design tokens, copied by value from ../au-service.css so inline styles stay
   on-system without CSS custom property references in this file. */
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
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'AI Consulting', url: CANONICAL },
];

/* ─── External sources, each fetch-verified 2026-09-25 (HTTP 200, claim
       confirmed in the fetched body) ──────────────────────────────────── */
// OAIC: "The Privacy Act applies to all uses of AI involving personal
// information"; best practice = do not enter personal (esp. sensitive)
// information into publicly available generative AI tools; privacy by design
// incl. a Privacy Impact Assessment; APP 10 accuracy; due diligence on
// products; mentions NAIC's Voluntary AI Safety Standard (10 guardrails).
const SRC_OAIC_AI =
  'https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products';
// OAIC: 13 Australian Privacy Principles, cornerstone of the Privacy Act 1988.
const SRC_OAIC_APPS = 'https://www.oaic.gov.au/privacy/australian-privacy-principles';
// OAIC: Privacy and Other Legislation Amendment Act 2024 ADM obligation. From
// 10 December 2026, APP entities using personal information in automated
// decisions with the potential to affect rights or interests must say so in
// their privacy policies.
const SRC_OAIC_ADM =
  'https://www.oaic.gov.au/engage-with-us/consultations/consultation-on-guidance-for-transparency-in-automated-decision-making';
// Allens (law firm) summary: NAIC's Guidance for AI Adoption "updates (and
// replaces) the VAISS"; six essential practices; Foundations + Implementation
// practices versions. (industry.gov.au and ai.gov.au timed out from our
// network on 2026-09-25, so this secondary source is the verified link.)
const SRC_AI6 =
  'https://www.allens.com.au/insights-news/insights/2025/11/governance-doesnt-stand-still-9-faqs-to-help-understand-the-governments-new-guidance-for-ai-adoption/';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',     label: 'AI consulting basics' },
  { key: 'choosing',   label: 'Choosing an AI consultant' },
  { key: 'engagement', label: 'Cost & how it works' },
  { key: 'data',       label: 'Privacy, data & build' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── AI consulting basics ──
  { category: 'basics', question: 'What does an AI consultant actually do?',
    answer: 'An AI consultant works out where AI is worth using in your business and how to use it safely. Day to day, that means sitting with the people who do the work, mapping how jobs flow today, finding the two or three tasks where AI saves real time, checking your data and Privacy Act duties, and recommending whether to buy a tool or build one. A good one then helps you put it live.' },
  { category: 'basics', question: 'What exactly is AI consulting?',
    answer: 'AI consulting is paid, expert advice on how a business should use artificial intelligence. It covers strategy (what AI should do for you), readiness (whether your data, systems and people are ready), governance (the rules for safe use) and implementation (getting a working system live). Some AI consulting services stop at advice. Others, like FactoryJet, also build what they recommend.' },
  { category: 'basics', question: 'What does an AI consulting company do?',
    answer: 'An AI consulting company does the same job as a single AI consultant but with a team behind it. That usually means strategy, data and engineering skills under one roof, so the firm can assess your business, run a pilot and sometimes build and support the system. The biggest difference between AI consulting firms is whether they stop at a report or carry on into delivery.' },
  { category: 'basics', question: 'What is an AI business consultant?',
    answer: 'An AI business consultant focuses on the business side of AI rather than the maths. Their job is to connect AI to things you already measure: hours spent on admin, time to reply to customers, quote turnaround, error rates. They help leadership choose where to start and how to judge success. The best ones understand both how a business runs and what current AI tools can reliably do.' },
  { category: 'basics', question: 'What is an AI implementation consultant?',
    answer: 'An AI implementation consultant turns an AI plan into a working system. They handle the practical steps: choosing the tool or designing the build, connecting it to your systems, testing it with real users, writing usage rules and training staff. Many businesses hire one after a strategy project stalls. At FactoryJet, AI implementation consulting and engineering are done by the same senior team.' },
  { category: 'basics', question: 'How is AI used in consulting?',
    answer: 'Consultants now use AI for research, first drafts, data analysis and summarising interviews, which makes that work faster. For clients, the more important use is what AI consultants help you build: tools that draft replies, read documents, sort requests or act across your systems. We use AI in our own work, and we still put a senior person on every judgment call.' },
  { category: 'basics', question: 'Is AI going to replace consulting?',
    answer: 'No, but it is changing what consultants are paid for. AI makes research and slide writing cheap, so advice that only repackages information is losing value. What AI cannot do is understand how your business actually runs, weigh trade-offs with your team, and take responsibility for the result. That is why we think the useful AI consultancy is one that can also engineer what it recommends.' },
  { category: 'basics', question: 'What is the 10-20-70 rule for AI?',
    answer: 'It is a rule of thumb, often attributed to Boston Consulting Group, that says roughly 10% of the effort in an AI project goes into the algorithms, 20% into technology and data, and 70% into people and processes. The exact numbers are not a law. The point holds: most AI projects fail on adoption and process, not on the model, so that is where we spend our time.' },

  // ── Choosing an AI consultant ──
  { category: 'choosing', question: 'What are some reputable AI consulting companies in Australia?',
    answer: 'It depends on your size and goal. For large enterprise programs, Mantel, RUBIX, V2 AI and the Big Four are common names. For SMEs and mid-market firms, AI Consulting Group and Kinetic Consultancy in Sydney, Real Minds AI and Arcadian Digital in Melbourne, and Advancer and Osher Digital in Brisbane appear often. We list several, including us, further up this page, with a neutral note on each.' },
  { category: 'choosing', question: 'Who are the Big Four consultants in Australia?',
    answer: 'The Big Four are Deloitte, PwC, EY and KPMG. All four run AI consulting practices in Australia, alongside global strategy firms and large technology consultancies. They suit large organisations with board-level transformation programs. For a business of 20 to 200 people, their model is usually heavier and slower than the problem needs, and senior partners rarely do the hands-on work.' },
  { category: 'choosing', question: 'Should a mid-sized Australian business hire a Big Four firm for AI?',
    answer: 'Usually not for a first project. Big Four and large consultancies are built for enterprise programs with many teams, formal change management and long timelines. A mid-sized business gets more from a smaller AI consulting firm where senior people do the work and the same team can build the first system. Save the big firm for when AI touches every division at once.' },
  { category: 'choosing', question: 'AI consultant, software vendor or agency: which should I pick?',
    answer: 'An independent AI consultant is quick to hire and great for training or a second opinion, but rarely builds and supports a real system. A software vendor sells one product, so its advice leans towards that product. An agency builds, but may skip whether you should build at all. A consultancy that also engineers gives tool-neutral advice and then delivers. Pick based on whether you need advice, delivery or both.' },
  { category: 'choosing', question: 'Is it worth hiring an AI consultant for a small business?',
    answer: 'Yes, if you have a clear problem and little time to research AI yourself. A focused AI consultant for small business can save you from buying the wrong tool, pasting customer data into a public chatbot, or building something that never gets used. For a small team, the right first engagement is usually one use case, done properly, not a company-wide strategy.' },
  { category: 'choosing', question: 'Do you work with businesses in Sydney and Melbourne?',
    answer: 'Yes. We work with businesses in Sydney, Melbourne, Brisbane, Perth, Adelaide, Canberra and regional Australia. Engagements run over video calls, shared workshops and written reports, with time zones planned around your business hours. AI consulting and engineering do not need anyone in your office every day, so a firm anywhere in Australia gets the same senior team.' },
  { category: 'choosing', question: 'How do I find a good AI consultant near me?',
    answer: 'Look for proof rather than a postcode. Ask for systems they have actually put live in a real business, a clear view on when not to use AI, and the name of the senior person who will do your work. Ask how they handle the Privacy Act. Then speak to that person before you sign. A good AI consultant will be glad you asked.' },
  { category: 'choosing', question: 'Are you tied to one AI vendor?',
    answer: 'No. We do not resell any AI platform, so we have no commission to protect. We recommend Microsoft Copilot, ChatGPT Enterprise, Claude, Google Gemini or a custom build depending on what your team already uses, where your data lives and what the job needs. Often the honest answer is an off-the-shelf tool set up properly, not a build.' },
  { category: 'choosing', question: 'Will you tell us not to use AI?',
    answer: 'Yes, when that is the honest answer. Plenty of problems that look like AI problems are really a broken process, messy data, or software your team never finished setting up. If our assessment finds that, we say so and tell you what to fix first. It costs us a project. It saves you from paying for a system that was never going to work.' },

  // ── Cost & how it works ──
  { category: 'engagement', question: 'How much does an AI consultant cost?',
    answer: 'It depends on scope, not a rate card. The main cost drivers are how many teams and processes are in scope, how scattered your data is, how many systems need connecting, how much privacy and governance work your sector needs, and whether you want advice only or advice plus a build. We scope after a free first call and quote a fixed price per stage.' },
  { category: 'engagement', question: 'How do AI consultants charge?',
    answer: 'Most AI consultants in Australia charge in one of three ways: a fixed price for a defined piece of work such as a readiness assessment, time and materials for open-ended work, or a monthly retainer for ongoing advice. We prefer fixed prices per stage, so you know the cost before each step starts and can stop after any stage without a penalty.' },
  { category: 'engagement', question: 'How long does an AI readiness assessment take?',
    answer: 'For most Australian SMEs it takes from a few days to a few weeks. A single team with one clear problem moves fast. A business with several sites, older systems or sensitive data takes longer because there is more to map and more privacy work to do. We agree the scope and timeline on the first call, before you commit to anything.' },
  { category: 'engagement', question: 'What do we get at the end of an assessment?',
    answer: 'A short written report, not a thick deck. It names the two or three use cases worth doing first, the benefit of each, the data and systems each one needs, the privacy steps including whether a Privacy Impact Assessment makes sense, and a buy or build recommendation. You own the report and can take it to any provider. You are not locked in to us.' },
  { category: 'engagement', question: 'How do you pick which AI use cases to do first?',
    answer: 'We score every idea on value and risk. Value means hours saved, faster replies, fewer errors or more revenue. Risk covers data quality, how hard the systems are to connect, what happens if the AI gets something wrong, and how much personal information is involved. The best first project is valuable, low risk and easy to measure. Flashy, sensitive ideas usually wait.' },
  { category: 'engagement', question: 'Why run a pilot instead of a full rollout?',
    answer: 'A pilot is a small, real trial of one use case with a few users and a success measure agreed upfront. It proves the idea works on your data before you spend more. Skipping it is the most common way AI projects go wrong, because problems with accuracy, data or adoption show up at full scale instead of while they are cheap to fix.' },
  { category: 'engagement', question: 'Who does the work?',
    answer: 'Senior engineers, with the founder, Bhavesh Barot, involved in every engagement. There is no handoff to a junior team after the contract is signed. The people who run your AI readiness assessment are the same people who design and build the system if you go ahead, so nothing gets lost between advice and delivery.' },
  { category: 'engagement', question: 'How do we get started?',
    answer: 'Send your name and work email through the form on this page. The founder replies within 24 hours to book a short call. We talk through your business, the jobs you think AI might help with, and whether a readiness assessment, a use-case sprint or nothing at all is the right first step. That first conversation costs nothing.' },

  // ── Privacy, data & build ──
  { category: 'data', question: 'Does the Privacy Act apply to our use of AI?',
    answer: 'If the AI touches personal information and your business is covered by the Privacy Act 1988, yes. The OAIC says the Privacy Act applies to all uses of AI involving personal information. That brings in the Australian Privacy Principles on collection, use, disclosure, accuracy and security. We map what personal information each use case touches before anything is built, and flag where you should take legal advice.' },
  { category: 'data', question: 'Can staff paste customer data into ChatGPT?',
    answer: 'They should not use public, consumer versions for it. The OAIC recommends, as best practice, that organisations do not enter personal information, and especially sensitive information, into publicly available generative AI tools. Business versions with the right contract terms, or a system built on your own accounts, are a different conversation. A written AI usage policy is usually one of our first deliverables.' },
  { category: 'data', question: 'What changes on 10 December 2026 for automated decisions?',
    answer: 'Under the Privacy and Other Legislation Amendment Act 2024, from 10 December 2026 organisations covered by the Privacy Act that use personal information in automated decisions that could affect people’s rights or interests must explain this in their privacy policy. If an AI system you plan will help make decisions about customers or staff, we flag it early so your policy can be updated.' },
  { category: 'data', question: 'What is the Australian Government’s guidance for safe and responsible AI?',
    answer: 'The National AI Centre published the Guidance for AI Adoption, which updates and replaces the earlier Voluntary AI Safety Standard. It sets out six essential practices: decide who is accountable, understand impacts and plan accordingly, measure and manage risks, share essential information, test and monitor, and maintain human control. It is voluntary, and we use it as the checklist for our governance work.' },
  { category: 'data', question: 'Do we need clean data before hiring an AI consultant?',
    answer: 'No. Finding out how clean your data is, and whether it is good enough for a given use case, is part of the job. Many useful first projects run on data you already have in documents, emails, Xero, MYOB or your CRM. If a use case needs better data, we tell you exactly what to fix and in what order, rather than asking you to tidy everything first.' },
  { category: 'data', question: 'Do you also build what you recommend?',
    answer: 'Yes, and that is the main reason to choose us. FactoryJet is an engineering company first. If the plan points to a custom AI agent or an integration, our team designs, builds, tests and supports it, and you own the code. If it points to an off-the-shelf tool, we help you set it up properly. You can also take our plan to someone else.' },
  { category: 'data', question: 'We bought an AI tool that nobody uses. Can you help?',
    answer: 'Yes, and it is a common starting point. Usually the tool is fine and the problem is setup: it is not connected to the right data, nobody agreed what it is for, or staff were never shown how it fits their day. We look at what you have, fix what is fixable, and only suggest something new if the tool genuinely cannot do the job.' },
];

/* ─── Named Australian AI consultancies (open self-disclosure, ItemList).
       Each note is based on the company’s own website, fetched 2026-09-25. ── */
const AI_CONSULTANCIES: { name: string; note: string }[] = [
  { name: 'FactoryJet', note: 'That is us. An AI consultancy that also engineers: we run the readiness assessment, pick the use cases, check data and Privacy Act duties, and then design and build the system if a build is the right call. Founder involved on every engagement, and you own what we build.' },
  { name: 'AI Consulting Group', note: 'A Sydney-based consultancy (head office in the CBD) covering data, IoT, machine learning and generative AI, with management consultants and project managers. It offers fixed-price and time-and-materials projects and serves clients in Australia, Europe and the Americas.' },
  { name: 'Mantel', note: 'An Australian and New Zealand owned technology and AI consultancy with 900+ specialists across AI, data, cloud, digital and cyber security. Built for enterprise programs rather than a first SME project.' },
  { name: 'RUBIX', note: 'An Australian data and AI consultancy with offices in Melbourne, Sydney and other capitals, focused on trusted data foundations, AI governance and practical AI delivery. It offers a free AI readiness check.' },
  { name: 'Red Marble AI', note: 'An Australian AI software development and strategy company working with AI since 2017, covering AI strategy, AI governance, engineering and agents for larger organisations.' },
  { name: 'Kinetic Consultancy', note: 'A Sydney-based AI consulting firm, with an office on Martin Place, focused on digital transformation and AI solutions for organisations of all sizes.' },
  { name: 'Real Minds AI', note: 'A Melbourne AI consultant for Australian SMEs, combining operational transformation (connecting systems, removing manual work) with hands-on AI training, including Claude Code training.' },
  { name: 'Arcadian Digital', note: 'A Melbourne engineering firm on Collins Street offering AI consulting, agentic AI, AI integrations and web applications, starting from the business bottleneck and working backwards.' },
  { name: 'Advancer', note: 'A Brisbane AI agency offering AI training, AI agents, AI consulting, voice AI and custom AI, including a fractional AI director service.' },
  { name: 'Osher Digital', note: 'Brisbane-based business automation consultants working across Australia, covering AI consulting, AI agent development, robotic process automation and system integrations.' },
];

/* ─── Readiness checklist (interactive <details>) ─────────────────── */
const READINESS: { area: string; lead: string; checks: string[] }[] = [
  { area: 'Goals', lead: 'Do you know what a good result looks like?', checks: [
    'You can name one job that eats hours every week (quotes, inbox triage, order entry, reporting).',
    'You already track a number that would move: reply time, hours spent, errors, quotes sent.',
    'One person in leadership owns the outcome, not just the idea.',
  ] },
  { area: 'Data', lead: 'Is the information the AI needs findable and usable?', checks: [
    'You know where the data lives: Xero or MYOB, your CRM, shared drives, email, your ecommerce platform.',
    'It is mostly accurate and up to date, or you know which parts are not.',
    'You have checked whether using it for this purpose fits what you told customers when you collected it.',
  ] },
  { area: 'Systems', lead: 'Can your tools connect safely?', checks: [
    'Your core systems have APIs (ways for software to talk to each other) or can export data.',
    'You know who administers each system and can grant scoped access.',
    'Nobody is planning to replace the core system in the next six months.',
  ] },
  { area: 'People', lead: 'Will the team actually use it?', checks: [
    'The people who do the work today are willing to test a pilot.',
    'You know which staff already use ChatGPT or Copilot, and for what.',
    'Someone has time to review AI output while trust is being built.',
  ] },
  { area: 'Governance', lead: 'Are the rules clear?', checks: [
    'You have (or will write) an AI usage policy saying which tools are allowed and what data can go in them.',
    'You know whether the Privacy Act covers your business and which Australian Privacy Principles apply.',
    'A human stays in charge of any decision that materially affects a customer or employee.',
  ] },
];

/* ─── Engagement stages (interactive <details>) ───────────────────── */
const STAGES: { n: string; t: string; d: string; out: string }[] = [
  { n: '01', t: 'Discovery call', d: 'A short conversation with the founder about your business, the jobs that take up your team’s week, and what you have already tried.', out: 'An honest view on whether AI consulting is worth doing at all, and the right first step.' },
  { n: '02', t: 'Readiness assessment', d: 'Interviews with the people who do the work, process mapping, a look at your data and systems, and a privacy and governance check against the APPs and the Guidance for AI Adoption.', out: 'A short written report and a ranked list of use cases.' },
  { n: '03', t: 'Prioritisation', d: 'Every idea is scored on value and risk. You get the two or three use cases worth doing first, with a clear reason for each one we drop.', out: 'A one-page AI roadmap with owners and success measures.' },
  { n: '04', t: 'Pilot', d: 'One use case, a small group of real users, real data and a success measure agreed upfront. It proves the idea before you spend more.', out: 'Evidence: what worked, what did not, and what it would take to scale.' },
  { n: '05', t: 'Buy or build', d: 'If an off-the-shelf tool does the job, we set it up properly. If the job is specific to you, our engineers design and build a custom system or AI agent.', out: 'A working system connected to your tools, owned by you.' },
  { n: '06', t: 'Rollout and support', d: 'Usage rules, short training for each team, monitoring of what the system does, and regular reviews as models, tools and your business change.', out: 'A system that stays accurate after launch, with the same team on call.' },
];

/* ─── Engagement shapes (interactive "which fits you") ────────────── */
const SHAPES: { t: string; d: string; fits: string[] }[] = [
  { t: 'AI readiness assessment', d: 'A one-off check of goals, data, systems, people and governance, ending in a short written report and a ranked list of use cases. Some businesses stop here, and that is a fine outcome.', fits: [
    'You know AI matters but not where to start.',
    'Staff are already using AI tools and you want rules around it.',
    'You want an independent view before talking to vendors.',
  ] },
  { t: 'Use-case sprint', d: 'You already know the problem. We go deep on one use case: process design, data check, a working pilot with real users, and a buy or build recommendation.', fits: [
    'One job clearly eats hours every week.',
    'You want proof on your own data before a bigger commitment.',
    'You need a decision within weeks, not months.',
  ] },
  { t: 'Advisory retainer', d: 'Ongoing senior AI advice for leadership: reviewing vendor pitches, keeping your AI roadmap and policy current, and training teams as tools change.', fits: [
    'You are being pitched AI products every week.',
    'Your board or owners want a steady view on AI risk.',
    'You have an internal team that needs a senior sounding board.',
  ] },
  { t: 'Consult and build', d: 'The full path from assessment to a live system you own, with our engineers building and supporting it. This is where FactoryJet differs most from a pure AI consulting company.', fits: [
    'You want one team accountable from advice to a working system.',
    'The job needs AI connected to several of your systems.',
    'You care about owning the code and documentation.',
  ] },
];

/* ─── Where the plan leads (hover cards to sibling AU pages) ──────── */
const NEXT_STEPS: { href: string; t: string; d: string }[] = [
  { href: '/au/ai-agents', t: 'AI agents for Australian businesses', d: 'When the plan calls for AI that acts across your systems: chasing invoices, updating orders, routing requests.' },
  { href: '/au/ai-development', t: 'Custom AI development in Australia', d: 'When you need AI built into your CRM, ERP, ecommerce platform or internal tools.' },
  { href: '/au/ai-receptionist', t: 'AI receptionist for Australian SMEs', d: 'When the biggest time sink is the phone: after-hours calls, bookings and common questions.' },
  { href: '/au/ai-seo', t: 'AI SEO in Australia', d: 'When the question is how your business shows up in ChatGPT, Perplexity and Google AI answers.' },
];

/* ─── JSON-LD ────────────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'AI Consulting Australia',
      serviceType: 'AI consulting, AI readiness assessment, AI strategy consulting and AI implementation consulting',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'Australia' },
      url: CANONICAL,
      description:
        'AI consulting for Australian SMEs and mid-market firms. We run an AI readiness assessment, prioritise the use cases worth doing, check data and Privacy Act duties, decide buy or build, and can build and support the resulting system.',
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
      image: 'https://factoryjet.com/images/au/ai-consulting/ai-consulting-og.webp',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['[data-speakable="true"]'] },
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
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
    },
    {
      '@type': 'ItemList',
      '@id': `${CANONICAL}#consultancies`,
      name: 'Australian AI consulting firms',
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
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL, languages: { 'en-AU': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: TITLE,
    description:
      'AI consultants for Australian SMEs and mid-market firms. Readiness assessment, use-case prioritisation, Privacy Act and APP checks, buy or build advice, and engineers who build what we recommend.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: '/images/au/ai-consulting/ai-consulting-og.webp', width: 1200, height: 630, alt: 'AI consulting in Australia: a FactoryJet consultant mapping AI use cases with a business owner in a bright Sydney office' }],
  },
  robots: { index: true, follow: true },
};

const srcNote = { fontFamily: T.fm, fontSize: 11, color: T.n400, marginTop: 12 } as const;
const srcLink = { textDecoration: 'underline' } as const;
const inLink = { color: T.small, textDecoration: 'underline' } as const;

export default function AiConsultingAUPage() {
  return (
    <>
      <script id="ld-au-ai-consulting" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SiteHeader locale="au" logoHref="/au" />

      <div className="au-svc">
      <main>

        <Breadcrumbs items={crumbs} />

        {/* ═══ 1. HERO ═══ */}
        <section className="sec-lg dot-grid" style={{ position: 'relative' }}>
          <div className="wrap">
            <div className="col-6040">
              <div>
                <div className="flex-wrap mb-6">
                  <span className="chip"><span className="dot dot-orange" />AI Consulting Australia</span>
                  <span className="chip">Readiness Assessment</span>
                  <span className="chip">Advise, Then Build</span>
                </div>
                <h1>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  FactoryJet offers AI consulting for Australian SMEs and mid-market firms. We find the two or three
                  places where AI will genuinely pay off, check your data and your Privacy Act duties, tell you
                  whether to buy a tool or build something, and then our engineers can build it. Advice and delivery
                  from one senior team.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ projects delivered since 2014</span></div>
                  <div className="upd">Last updated<br />25 September 2026</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="au" source="au_ai_consulting_hero" submitLabel="Book my AI readiness call" />
                </div>
              </div>

              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/ai-consulting/ai-consulting-hero.webp" width={1400} height={933} fetchPriority="high" decoding="async" alt="An AI consultant and an Australian business owner sorting blank sticky notes into three columns to choose which processes to improve with AI, in a bright Sydney office" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">What you leave with</span>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Use cases worth doing</div><div className="scorecard-note">ranked by value and risk</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Two or three</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Buy or build decision</div><div className="scorecard-note">tool-neutral, no resale deals</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Written</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Privacy Act and APP check</div><div className="scorecard-note">from day one, not after launch</div></div>
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
              <span className="lab">What does an AI consultant do for an Australian business?</span>
              <p>
                An AI consultant finds where AI will save your business real time or money, and where it will not.
                They review how your team works, pick the two or three best use cases, check your data and your
                duties under the Privacy Act, and advise whether to buy a tool or build one. The best AI consulting
                firms then help you put it live and keep it working.
              </p>
            </div>
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">Three terms we use a lot</span>
              <p>
                A <b>use case</b> is one specific job AI could do, such as drafting quote replies or sorting supplier
                invoices. An <b>AI readiness assessment</b> is a structured check of your goals, data, systems, people
                and rules, so you know which use cases you can do now. <b>Governance</b> simply means the rules for how
                AI is used, checked and owned in your business.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              Most Australian businesses we speak to are not short of AI tools. Staff already use ChatGPT or Copilot in
              a browser tab. What is missing is a decision: which jobs AI should do, with what data, under which rules,
              and who owns the result. That is what good AI consulting services deliver, and it is why we do the
              engineering too.
            </p>
          </div>
        </section>

        {/* ═══ 3. FACTS BAND (verified only, no count-ups) ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              {[
                { v: 'All', t: 'uses of AI involving personal information are covered by the Privacy Act', s: 'OAIC guidance', u: SRC_OAIC_AI },
                { v: '13', t: 'Australian Privacy Principles set the rules for collecting, using and securing personal information', s: 'OAIC', u: SRC_OAIC_APPS },
                { v: '10 Dec 2026', t: 'new privacy policy duty for automated decisions that use personal information', s: 'OAIC', u: SRC_OAIC_ADM },
                { v: '6', t: 'essential practices in the National AI Centre’s Guidance for AI Adoption', s: 'Allens summary', u: SRC_AI6 },
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

        {/* ═══ 4. LISTICLE: WHAT AN AI CONSULTANT DOES ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">The job, step by step</span>
              <h2>What an AI consultant actually does: eight jobs in plain English</h2>
              <p className="lead mt-4">
                &ldquo;What does an AI consultant actually do?&rdquo; is one of the most searched AI consulting questions in
                Australia. Here is the honest answer, in the order the work usually happens.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {[
                { n: '01', t: 'Listens before recommending anything', d: 'Interviews the people who do the work, not just the owner. The best use cases hide in the steps someone repeats forty times a week.' },
                { n: '02', t: 'Maps how the work flows today', d: 'Draws each process box by box: where requests arrive, who touches them, which systems they copy between. AI fits where information moves by hand.' },
                { n: '03', t: 'Finds the two or three use cases worth doing', d: 'Scores every idea on value and risk, then drops most of them. A long list of AI opportunities is not a strategy.' },
                { n: '04', t: 'Checks your data', d: 'Where the information lives (Xero, MYOB, your CRM, shared drives, email), whether it is accurate, and whether you are allowed to use it this way.' },
                { n: '05', t: 'Checks your legal and privacy duties', d: 'Which Australian Privacy Principles apply, what personal information each use case touches, and which AI providers would see it and on what terms.' },
                { n: '06', t: 'Decides buy or build', d: 'Recommends an off-the-shelf tool when one does the job, and a custom build only when the job is specific to your business.' },
                { n: '07', t: 'Proves it with a pilot', d: 'Runs one use case with real users and real data against a success measure agreed upfront, before anyone spends on a full rollout.' },
                { n: '08', t: 'Gets it live and keeps it working', d: 'Usage rules, training, monitoring and support. This is where most AI consulting stops, and where FactoryJet keeps going.' },
              ].map((s) => (
                <li key={s.n} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.orange, minWidth: 34 }}>{s.n}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{s.t}</h3>
                    <p style={{ marginTop: 6 }}>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ═══ 5. FOUR KINDS OF ADVICE + COMPARISON TABLE ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">Know what you are buying</span>
              <h2>Big Four, independent consultant, software vendor or an AI consulting firm that builds?</h2>
              <p className="lead mt-4">
                Search for an AI consultant in Australia and the results mix four very different businesses. Each is
                right for someone. The trick is knowing which one you are talking to before the proposal arrives.
              </p>
            </div>
            <div className="card mt-8" style={{ padding: 0, overflow: 'auto' }}>
              <table className="cmp-table">
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">FactoryJet</th>
                    <th>Big Four / large consultancy</th>
                    <th>Independent consultant</th>
                    <th>Software vendor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Best fit</td><td className="fj"><span className="yes">Australian SMEs and mid-market</span></td><td><span className="partial">Large enterprises and government</span></td><td><span className="partial">Small teams, training, second opinions</span></td><td><span className="partial">Buyers already sure of the product</span></td></tr>
                  <tr><td className="feat">Who does the work</td><td className="fj"><span className="yes">Senior engineers + founder</span></td><td><span className="partial">Mixed seniority, large teams</span></td><td>One person</td><td><span className="partial">Sales and onboarding staff</span></td></tr>
                  <tr><td className="feat">AI readiness assessment</td><td className="fj"><span className="yes">Yes</span></td><td><span className="yes">Yes</span></td><td><span className="partial">Sometimes</span></td><td><span className="no">Rarely independent</span></td></tr>
                  <tr><td className="feat">Tool-neutral buy or build advice</td><td className="fj"><span className="yes">Yes, no resale deals</span></td><td><span className="partial">Often tied to alliances</span></td><td><span className="partial">Varies</span></td><td><span className="no">Recommends its own product</span></td></tr>
                  <tr><td className="feat">Builds what it recommends</td><td className="fj"><span className="yes">Yes, same team</span></td><td><span className="partial">Via separate delivery teams</span></td><td><span className="no">Rarely</span></td><td><span className="partial">Configures its own tool only</span></td></tr>
                  <tr><td className="feat">Privacy Act and APP support</td><td className="fj"><span className="yes">Built into the assessment</span></td><td><span className="yes">Yes</span></td><td><span className="partial">Varies</span></td><td><span className="partial">For its own product</span></td></tr>
                  <tr><td className="feat">Support after launch</td><td className="fj"><span className="yes">Yes, same team</span></td><td><span className="partial">Separate contract</span></td><td><span className="no">Rarely</span></td><td><span className="yes">For its product, on its terms</span></td></tr>
                  <tr><td className="feat">Typical end product</td><td className="fj"><span className="yes">A working system you own</span></td><td><span className="partial">Strategy and program plan</span></td><td><span className="partial">Recommendations, training</span></td><td><span className="partial">A subscription</span></td></tr>
                </tbody>
              </table>
            </div>
            <ul className="col-2 mt-10">
              <li className="svc-card">
                <h3>When a big firm is the right call</h3>
                <p className="mt-4">If AI is changing every division at once, you need formal change management across thousands of staff, or your regulator expects a household name on the report, a Big Four firm or a large consultancy such as Mantel is a sensible choice. Most businesses of 20 to 200 people are not in that position.</p>
              </li>
              <li className="svc-card">
                <h3>When an independent consultant is enough</h3>
                <p className="mt-4">If you mainly want staff trained on ChatGPT or Copilot, or a quick second opinion on a vendor pitch, an independent AI consultant is quick to hire and often excellent. The limit is capacity: one person rarely builds, integrates and supports a real system.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* ═══ 6. READINESS CHECKLIST (interactive <details>) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Check yourself first</span>
                <h2>AI readiness checklist: five areas, fifteen questions</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  Open each area and tick off what is already true for your business. Three or more gaps in one area
                  is normal. It tells you where an AI readiness assessment should start.
                </p>
                <div className="card mt-6" style={{ maxWidth: 600, padding: '4px 22px' }}>
                  {READINESS.map((r) => (
                    <details key={r.area}>
                      <summary>{r.area}: {r.lead}</summary>
                      <ul className="scope-list" style={{ paddingBottom: 18 }}>
                        {r.checks.map((c) => (<li key={c}>{c}</li>))}
                      </ul>
                    </details>
                  ))}
                </div>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/ai-consulting/ai-consulting-readiness.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Over-the-shoulder view of an operations manager and an AI consultant reviewing a laptop and a blank checklist in a bright Melbourne warehouse office" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    A readiness assessment is a working session, not a quiz. We sit with the people who run the
                    process, look at the actual systems, and write down what is true today, gaps included.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 7. ENGAGEMENT STAGES (interactive <details>) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">How an engagement runs</span>
              <h2>AI implementation consulting in six stages, from first call to a working system</h2>
              <p className="lead mt-4">
                Open a stage to see what happens and what you get at the end of it. You can stop after any stage and
                keep everything we have produced.
              </p>
            </div>
            <div className="card mt-8" style={{ maxWidth: 900, padding: '4px 24px' }}>
              {STAGES.map((s) => (
                <details key={s.n}>
                  <summary><span><span style={{ fontFamily: T.fm, color: T.small, marginRight: 12 }}>{s.n}</span>{s.t}</span></summary>
                  <div style={{ paddingBottom: 18 }}>
                    <p>{s.d}</p>
                    <p style={{ marginTop: 8 }}><b style={{ color: T.ink }}>You leave with:</b> {s.out}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <MidPageCTA
          headline={'Not sure where AI fits in your business?'}
          sub={'Tell us what takes up your team’s week. On a short call with the founder, we will tell you where AI would genuinely help, where it would not, and whether an AI readiness assessment is worth doing at all.'}
          label={'Book my AI readiness call'}
        />

        {/* ═══ 8. BUY OR BUILD ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">The decision most consultants skip</span>
                <h2>Buy or build: an off-the-shelf AI tool or a custom AI agent?</h2>
                <div className="stack mt-6">
                  <p>
                    Generative AI is AI that writes, summarises or creates content when you ask it to. Microsoft
                    Copilot, ChatGPT Enterprise, Claude and Google Gemini are generative AI for the whole company. For
                    general work such as drafting emails, summarising meetings or searching your own documents, one of
                    them is often the right answer. Buying is faster and cheaper than building, and we will say so.
                  </p>
                  <p>
                    Agentic AI is different. An AI agent can take actions across your systems on its own, within rules
                    you set: checking an order, updating a record in Xero, chasing an overdue invoice, routing a
                    customer request. That is where a custom build earns its place, because no general tool knows your
                    pricing rules, your stock system or your approval steps.
                  </p>
                  <p>
                    When the plan calls for a build, the work moves straight into our{' '}
                    <a href="/au/ai-agents" style={inLink}>AI agent development service for Australian businesses</a>, with
                    the same people. Wider builds, such as adding AI to your CRM, ERP or ecommerce platform, run through{' '}
                    <a href="/au/ai-development" style={inLink}>custom AI development in Australia</a>. If the bottleneck is
                    the phone, see our <a href="/au/ai-receptionist" style={inLink}>AI receptionist for Australian SMEs</a>.
                    For the difference between chatbots and agents, read{' '}
                    <a href="/blog/ai-chatbots-vs-ai-agents-business" style={inLink}>AI chatbots vs AI agents</a>.
                  </p>
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">A simple rule of thumb</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">General writing and summaries</div><div className="scorecard-note">Copilot, ChatGPT Enterprise, Claude, Gemini</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Buy</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Searching your own documents</div><div className="scorecard-note">often covered by the tools above</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Buy first</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Work across several of your systems</div><div className="scorecard-note">Xero or MYOB, CRM, stock, helpdesk</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Build</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Rules only your business knows</div><div className="scorecard-note">pricing, approvals, exceptions</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Build</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">A tool you bought that nobody uses</div><div className="scorecard-note">usually a setup problem</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Fix it</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 9. WHERE THE PLAN LEADS (hover cards to sibling pages) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">After the advice</span>
                <h2>Where an AI strategy usually leads next</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  AI strategy consulting is only worth paying for if something ships at the end. These are the four
                  places our plans most often land, each handled by the same team that wrote the plan.
                </p>
                <ul className="col-2 mt-8">
                  {NEXT_STEPS.map((s) => (
                    <li key={s.href}>
                      <a className="svc-card" href={s.href} style={{ display: 'block', height: '100%' }}>
                        <h3 style={{ fontSize: 17 }}>{s.t} <span style={{ color: T.small }}>&rarr;</span></h3>
                        <p className="mt-4">{s.d}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/ai-consulting/ai-consulting-build.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Over-the-shoulder view of a FactoryJet engineer and a distribution business owner in a hi-vis vest reviewing a tablet together in a bright Brisbane warehouse" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    The engineer who helped write your plan is on the warehouse floor when it goes live. That is the
                    difference between AI consulting and a slide deck.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 10. PRIVACY & GOVERNANCE ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 800 }}>
              <span className="eyebrow">AI governance, in plain English</span>
              <h2>The Privacy Act and safe, responsible AI shape the plan before the engineering does</h2>
              <div className="stack mt-6">
                <p>
                  If AI will touch personal information, meaning anything about a customer, patient, tenant or
                  employee, the Privacy Act 1988 is the starting point. The Office of the Australian Information
                  Commissioner (OAIC) is direct: the Privacy Act applies to all uses of AI involving personal
                  information. The 13 Australian Privacy Principles (APPs) then set the rules for how that
                  information is collected, used, disclosed, kept accurate and kept secure.
                </p>
                <p>
                  The OAIC’s guidance on commercially available AI products gives three practical instructions we
                  build into every engagement. Do due diligence on any AI product before you adopt it. Take a
                  &ldquo;privacy by design&rdquo; approach, which includes a Privacy Impact Assessment (a written check of
                  the privacy risks a project creates and how you will reduce them). And, as best practice, do not
                  enter personal information, especially sensitive information, into publicly available generative AI
                  tools. The guidance also reminds businesses that APP 10 requires reasonable steps to keep personal
                  information accurate, which matters because AI can produce confident, wrong answers.
                </p>
                <p>
                  A new duty starts on 10 December 2026. Under the Privacy and Other Legislation Amendment Act 2024,
                  organisations covered by the Privacy Act that use personal information in automated decisions that
                  could affect people’s rights or interests must explain this in their privacy policy. If a system we
                  design will help make decisions about customers or staff, we flag it at the assessment stage.
                </p>
                <p>
                  On the wider &ldquo;safe and responsible AI&rdquo; front, the Australian Government’s National AI Centre
                  published the Guidance for AI Adoption, which updates and replaces the earlier Voluntary AI Safety
                  Standard. It is voluntary, and its six essential practices make a sensible governance checklist for
                  any business: decide who is accountable, understand impacts and plan accordingly, measure and manage
                  risks, share essential information, test and monitor, and maintain human control.
                </p>
              </div>
              <p style={srcNote}>
                Sources: <a href={SRC_OAIC_AI} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>OAIC, guidance on privacy and the use of commercially available AI products</a>;{' '}
                <a href={SRC_OAIC_APPS} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>OAIC, Australian Privacy Principles</a>;{' '}
                <a href={SRC_OAIC_ADM} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>OAIC, transparency in automated decision making</a>;{' '}
                <a href={SRC_AI6} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>Allens, FAQs on the Guidance for AI Adoption</a>.
              </p>
            </div>
            <ul className="col-3 mt-10">
              <li className="card"><h3>What we do</h3><p className="mt-4">Map the personal information each use case touches, check which AI providers would see it and on what terms, write your AI usage policy, and prepare the inputs for a Privacy Impact Assessment.</p></li>
              <li className="card"><h3>What you keep</h3><p className="mt-4">You stay accountable for your customers’ information. We make that easier to meet with scoped access, a record of what the system did, and a human in charge of decisions that matter.</p></li>
              <li className="card"><h3>What we do not do</h3><p className="mt-4">We are not lawyers and do not give legal sign-off. We build to the requirements you and your adviser set, and document everything your adviser needs to review.</p></li>
            </ul>
          </div>
        </section>

        {/* ═══ 11. WHO IT IS FOR ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Who we work with</span>
              <h2>AI consulting for small businesses and mid-market firms across Australia</h2>
              <p className="lead mt-4">
                Our AI consulting for small businesses and growing firms works best where a repeated, paper-heavy or
                inbox-heavy process eats up skilled people’s time. These groups make up most of our conversations.
              </p>
            </div>
            <ul className="col-3 mt-12">
              <li className="svc-card"><h3>Professional services</h3><p className="mt-4">Accounting practices, law firms, recruiters and agencies. Drafting, document review, client onboarding and time recording are common first use cases.</p></li>
              <li className="svc-card"><h3>Trades and field services</h3><p className="mt-4">Builders, electricians, plumbers and maintenance firms. Quoting, job booking, after-hours calls and turning site notes into invoices in Xero or MYOB.</p></li>
              <li className="svc-card"><h3>Wholesalers and distributors</h3><p className="mt-4">Order entry from emailed purchase orders, stock questions, supplier chasing and freight updates, often around an ERP nobody wants to replace.</p></li>
              <li className="svc-card"><h3>Ecommerce brands</h3><p className="mt-4">Customer service, returns under the Australian Consumer Law, product data and marketplace listings. This is our home ground; see our <a href="/au" style={inLink}>Australian services hub</a>.</p></li>
              <li className="svc-card"><h3>Property and real estate</h3><p className="mt-4">Agencies, strata managers and developers. Tenant and buyer enquiries, maintenance requests and document handling, with care over personal information.</p></li>
              <li className="svc-card"><h3>Clinics and allied health</h3><p className="mt-4">On the admin side only: bookings, referrals, letters and inbox triage. Health information is sensitive information under the Privacy Act, so the privacy work comes first.</p></li>
            </ul>
          </div>
        </section>

        {/* ═══ 12. ENGAGEMENT SHAPES + COST DRIVERS (no pricing) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Scope, not packages</span>
                <h2>Four ways to work with our AI consultants. Which one fits you?</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  Every engagement is quoted for your scope, with a fixed price per stage. Open each shape to see who it
                  suits.
                </p>
                <div className="card mt-6" style={{ maxWidth: 600, padding: '4px 22px' }}>
                  {SHAPES.map((s) => (
                    <details key={s.t}>
                      <summary>{s.t}</summary>
                      <div style={{ paddingBottom: 18 }}>
                        <p>{s.d}</p>
                        <p style={{ marginTop: 10, fontFamily: T.fm, fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: T.small }}>This fits you if</p>
                        <ul className="scope-list" style={{ marginTop: 6 }}>
                          {s.fits.map((f) => (<li key={f}>{f}</li>))}
                        </ul>
                      </div>
                    </details>
                  ))}
                </div>
                <div className="mt-8">
                  <ModalCTAButton label="Book my AI readiness call" region="au" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">How much does an AI consultant cost?</span>
                <p style={{ fontSize: 14, marginTop: 8, marginBottom: 6 }}>
                  There is no honest single number. These five things move the cost of AI consulting more than anything
                  else:
                </p>
                <div className="scorecard-row"><div className="scorecard-metric">Teams and processes in scope</div><div className="scorecard-val" style={{ fontSize: 14 }}>Breadth</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">State of your data</div><div className="scorecard-val" style={{ fontSize: 14 }}>Prep</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Systems to connect</div><div className="scorecard-val" style={{ fontSize: 14 }}>Reach</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Privacy and sector rules</div><div className="scorecard-val" style={{ fontSize: 14 }}>Governance</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Advice only, or advice plus build</div><div className="scorecard-val" style={{ fontSize: 14 }}>Delivery</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">First call with the founder</div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Free</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 13. SYDNEY + MELBOURNE ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">Sydney, Melbourne and Australia-wide</span>
              <h2>AI consulting in Sydney and Melbourne, and everywhere else in Australia</h2>
              <p className="lead mt-4">
                Plenty of people search for an AI consultant in Sydney or Melbourne, or type &ldquo;AI consulting near
                me&rdquo;, expecting to need someone down the road. For this kind of work you do not. What matters is who
                turns up to the workshop and who is still there after launch.
              </p>
            </div>
            <div className="col-2 mt-10">
              <div className="card">
                <h3>AI consulting Sydney</h3>
                <p className="mt-4">
                  Sydney has the deepest pool of AI consulting firms in the country, from Big Four practices in the CBD
                  to boutique builders. That makes choosing harder, not easier. Sydney businesses we talk to are often
                  in professional services, finance-adjacent work and distribution, where the first use cases are
                  document-heavy: reading contracts, drafting client letters, processing purchase orders. Privacy and
                  record-keeping expectations run high, so our Sydney engagements put the APP check and a written AI
                  usage policy right at the start.
                </p>
              </div>
              <div className="card">
                <h3>AI consulting Melbourne</h3>
                <p className="mt-4">
                  Melbourne has a strong mix of manufacturers, wholesalers, health and education providers and
                  ecommerce brands. Our Melbourne AI consulting work often starts in operations: order entry, stock and
                  supplier questions, customer service queues, and connecting Xero or MYOB to the systems around it.
                  Melbourne firms also tend to ask hard questions about ownership, which suits us, because everything we
                  build is yours: code, prompts, integrations and documentation.
                </p>
              </div>
            </div>
            <div className="col-6040 mt-10">
              <div className="stack">
                <p>
                  We run engagements remotely, with video workshops, shared process maps and written reports, and plan
                  sessions around Australian business hours. The same model serves Brisbane, Perth, Adelaide, Canberra
                  and regional businesses. The founder is involved in every engagement, and the senior engineers who run
                  your readiness assessment are the ones who build the system if you go ahead.
                </p>
                <p>
                  If AI visibility is also on your list, meaning how your business shows up in ChatGPT, Perplexity and
                  Google AI answers, that is a separate service: see <a href="/au/ai-seo" style={inLink}>AI SEO in Australia</a>.
                </p>
                <div className="flex-wrap">
                  <a className="city-pill" href="/au">FactoryJet Australia</a>
                  <a className="city-pill" href="/au/ai-agents">AI agents Australia</a>
                  <a className="city-pill" href="/au/ai-development">AI development Australia</a>
                  <a className="city-pill" href="/au/melbourne">Melbourne</a>
                  <a className="city-pill" href="/au/brisbane">Brisbane</a>
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
                      { kw: 'ai consulting / consultant / consultancy', v: '1,000', w: '100%', kd: 'The head term cluster' },
                      { kw: 'ai consulting services', v: '170', w: '17%', kd: 'Buyer intent' },
                      { kw: 'ai consulting firm / company', v: '140', w: '14%', kd: 'Comparing providers' },
                      { kw: 'ai consulting australia', v: '110', w: '11%', kd: 'National search' },
                      { kw: 'ai consulting sydney', v: '110', w: '11%', kd: 'Local intent' },
                      { kw: 'ai consulting melbourne', v: '110', w: '11%', kd: 'Local intent' },
                      { kw: 'ai strategy consulting', v: '70', w: '7%', kd: 'Leadership searches' },
                      { kw: 'ai implementation consulting', v: '50', w: '5%', kd: 'Wants delivery, not slides' },
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

        {/* ═══ 14. COMPETITOR LIST (self-disclosure, ItemList) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">The honest landscape</span>
              <h2>Australian AI consulting firms worth knowing</h2>
              <p className="lead mt-4">
                We are one option, not the only one. These AI consulting companies show up when Australians search for
                an AI consultancy or ask AI assistants for a recommendation. Each note is based on what the company says
                on its own website. Talk to a few and pick the fit.
              </p>
            </div>
            <ul className="stack mt-10" style={{ maxWidth: 900 }}>
              {AI_CONSULTANCIES.map((a, i) => (
                <li key={a.name} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.orange, minWidth: 30 }}>{i + 1}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{a.name}{a.name === 'FactoryJet' && <span style={{ fontFamily: T.fm, fontSize: 10, background: T.small, color: '#fff', borderRadius: 999, padding: '2px 8px', marginLeft: 8, verticalAlign: 'middle' }}>That is us</span>}</h3>
                    <p style={{ marginTop: 6 }}>{a.note}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p style={srcNote}>
              Firms named from live Australian search results and AI assistant answers for AI consulting queries, September 2026. Notes reflect each company’s own website on 25 September 2026. Listing is not endorsement.
            </p>
          </div>
        </section>

        {/* ═══ 15. QUESTIONS TO ASK + WORKSHOP IMAGE ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Before you sign anything</span>
                <h2>Six questions to ask any AI consulting firm</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  Use these with every AI consulting firm on your shortlist, including us. A good AI consultant will
                  enjoy answering them. A weak one will change the subject.
                </p>
                <ul className="scope-list num-list mt-6" style={{ maxWidth: 580 }}>
                  <li><b>What have you actually put live?</b> Ask for systems running in a real business today, not demos or workshop photos.</li>
                  <li><b>Who will do the work?</b> Get the name of the person who runs your assessment, and ask whether they would also build what they recommend.</li>
                  <li><b>When would you tell us not to use AI?</b> If they have never told a client no, their advice is really a sales process.</li>
                  <li><b>Do you resell any AI platform?</b> Partnerships are fine if disclosed. A buy or build recommendation shaped by a commission is not.</li>
                  <li><b>How will you handle our personal information?</b> Ask which APPs they check, which AI providers would see your data, and on what terms.</li>
                  <li><b>What do we own, and what happens after launch?</b> Code, prompts and documentation should be yours, and someone should be watching the system after go-live.</li>
                </ul>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/ai-consulting/ai-consulting-workshop.webp" width={1200} height={800} loading="lazy" decoding="async" alt="An AI strategy workshop in a bright Melbourne meeting room, with a consultant drawing a four-step process flow of empty boxes on a whiteboard while three colleagues take notes" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    We start by drawing the process as it runs today, box by box. The best AI use case is usually a step
                    where someone copies information between two screens, or answers the same question many times a
                    week.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 16. FAQ (canonical Linear Minimal) ═══ */}
        <section className="sec-lg dot-grid" id="faq">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>AI consulting questions Australian business owners actually ask</h2>
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
              <ModalCTAButton label="Book my AI readiness call" region="au" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/au/ai-agents" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>See AI agents for Australia</a>
            </div>
          </div>
        </section>

      </main>
      </div>

      <SiteFooter linkColumns={AU_FOOTER_COLUMNS} variant="dark" tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}

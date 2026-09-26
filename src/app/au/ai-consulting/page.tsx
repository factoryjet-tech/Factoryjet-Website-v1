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
import './page.css';

const CANONICAL = 'https://factoryjet.com/au/ai-consulting';
const UPDATED = '2026-09-26';
const TITLE = 'AI Consulting Australia | Consultants Who Build | FactoryJet';
const DESCRIPTION =
  'AI consulting for Australian SMEs: we find where AI pays off, check your data and Privacy Act duties, decide buy or build, then build it. Founder-led.';
const H1 = 'AI Consulting in Australia: Find Where AI Pays Off, Then Build It';

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
  { key: 'chatgpt',    label: 'ChatGPT for business' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string; links?: { href: string; label: string }[] }[] = [
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

  { category: 'basics', question: 'What is an AI strategy consultant?',
    answer: 'An AI strategy consultant helps leadership decide where AI fits in the business, in what order and with what rules. The output is a short plan: the use cases worth doing, the benefit and risk of each, the data and systems they need, and who is accountable. Strategy alone does not save any hours. Ask whether the same consultant will help put the first use case live, or who will.' },
  { category: 'basics', question: 'How can I use AI for my business?',
    answer: 'Start with a job your team repeats every week and dislikes. Good first uses are drafting replies to common enquiries, reading invoices and documents into Xero or MYOB, summarising meetings into your CRM, answering after-hours calls, and preparing weekly reports. Pick one, measure how long it takes today, try it with a business version of ChatGPT, Claude, Copilot or Gemini, and only build something custom once the simple option runs out.' },
  { category: 'basics', question: 'Which AI is best for small business owners?',
    answer: 'Usually the one that fits the software you already pay for. If your business runs on Microsoft 365, Copilot works inside Outlook, Word and Excel. On Google Workspace, Gemini does the same in Gmail and Docs. ChatGPT and Claude are strong general assistants for writing and analysis. Use a business plan with proper data terms rather than a free personal account once customer information is involved.' },
  { category: 'basics', question: 'Are AI consultants in high demand?',
    answer: 'Yes, and supply has grown just as fast. The Australian Bureau of Statistics found about 12% of Australian businesses used AI in 2024–25, up from 1% in 2021–22, so many owners are looking for help for the first time. The catch is that anyone can call themselves an AI consultant. Ask for systems they have put live in a real business, and the name of the person who will do your work.' },

  // ── Choosing an AI consultant ──
  { category: 'choosing', question: 'What are some reputable AI consulting companies in Australia?',
    answer: 'It depends on your size and goal. For large enterprise programs, Mantel Group, Arinco and the Big Four are common names. For SMEs and mid-market firms, AI Consulting Group in Sydney, FlowWorks and Aivy in Melbourne, and Advancer and Osher Digital in Brisbane appear often. For a fact-checked comparison of AI consultancies and agencies, see our guide to the best AI agencies in Australia.',
    links: [{ href: '/blog/best-ai-agencies-australia-2026', label: 'AI consultancies and agencies compared' }] },
  { category: 'choosing', question: 'What are the 10 best AI consulting firms?',
    answer: 'Any fixed top 10 is a marketing list, because the best firm for a bank is the wrong one for a 30-person distributor. Globally, the Big Four and firms such as Accenture and McKinsey lead on enterprise AI programs. For Australian SMEs and mid-market firms, we compare 13 AI agencies and consultancies, including us, by location, client size, platforms and published prices, each checked on the firm’s own website.',
    links: [{ href: '/blog/best-ai-agencies-australia-2026', label: 'Best AI agencies in Australia (2026)' }] },
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
    answer: 'It depends on scope, not a rate card. The drivers are how many teams and processes are in scope, how scattered your data is, how many systems need connecting, how much privacy and governance work your sector needs, and whether you want advice only or advice plus a build. We quote a fixed price per stage after a free first call. Published Australian hourly and day rates are in our AI cost guide.',
    links: [{ href: '/blog/ai-cost-australia-2026#ai-consultant-cost', label: 'What AI consultants charge in Australia' }] },
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
  // ── ChatGPT for business ──
  { category: 'chatgpt', question: 'Can I use ChatGPT for my business?',
    answer: 'Yes, and many Australian businesses already do, for drafting emails, quotes, job ads, policies and first-pass analysis of spreadsheets. The catch is data. The OAIC recommends businesses do not enter personal information, and particularly sensitive information, into publicly available generative AI tools. So set rules first: which account staff use, what they may paste in, and who checks the output before it reaches a customer.',
    links: [{ href: SRC_OAIC_AI, label: 'OAIC guidance on commercially available AI' }] },
  { category: 'chatgpt', question: 'Is it worth getting ChatGPT for business?',
    answer: 'Usually yes, if more than a couple of people already use AI through personal accounts. A business plan gives you central control of who has access and the data terms your privacy lead will want to read, instead of customer details sitting in private chats. It is worth it once you have picked three or four tasks to use it for. Buying seats with no use cases is the common way it ends up unused.' },
  { category: 'chatgpt', question: 'Should we choose ChatGPT, Microsoft Copilot or Google Gemini?',
    answer: 'Start from where your work already lives. Copilot sits inside Microsoft 365, so it suits businesses whose files are in SharePoint and Outlook. Gemini sits inside Google Workspace. ChatGPT and Claude are strong standalone assistants for writing and analysis. We test the two likeliest options on your own real tasks for a week or two, then recommend one. We do not resell any of them.' },
  { category: 'chatgpt', question: 'How do we roll out ChatGPT to our team safely?',
    answer: 'Keep it short and practical. Write a one-page AI use policy saying what staff may and may not paste in. Set up business accounts rather than personal ones. Pick a few tasks per role and share tested prompts for them. Name who checks AI output before it goes to a customer. Review after a month. We run this as a short engagement, and it often shows where custom AI is worth building next.' },
  { category: 'chatgpt', question: 'When is ChatGPT not enough, and custom AI worth building?',
    answer: 'When the job needs your own systems, rules and approvals. A general chat assistant is not set up to post orders into your ERP with an approval step, draft bills into Xero under your coding rules, or answer from your whole document library while respecting who may see what. If the same copy-paste task happens hundreds of times a week across systems, a custom build connected to those systems usually beats staff pasting into a chat window.',
    links: [{ href: '/au/ai-development', label: 'Custom AI development' }] },
];

/* ─── Named Australian AI consultancies (open self-disclosure, ItemList).
       Companies and notes match /blog/best-ai-agencies-australia-2026 (own sites
       checked 2026-09-26). ── */
const AI_CONSULTANCIES: { name: string; note: string }[] = [
  { name: 'FactoryJet', note: 'That is us. An AI consultancy that also engineers: we run the readiness assessment, pick the use cases, check data and Privacy Act duties, and then design and build the system if a build is the right call. Founder involved on every engagement, and you own what we build.' },
  { name: 'AI Consulting Group', note: 'Based on York Street, Sydney, with clients in Australia, New Zealand, Europe and the Americas. Covers data and AI strategy, machine learning, generative AI, AI governance and machine vision, on fixed-price or time-and-materials projects.' },
  { name: 'Mantel Group', note: 'An Australian and New Zealand technology consultancy covering AI, data, cloud, digital and cyber security, with 850+ tech experts according to its site. Built for enterprise programs rather than a first SME project.' },
  { name: 'Arinco', note: 'Offices in Melbourne, Sydney, Brisbane, Perth and Auckland. A Microsoft specialist building production copilots and agents on Azure, Microsoft 365 and Copilot Studio for enterprise and mid-market organisations.' },
  { name: 'FlowWorks', note: 'Based on St Kilda Road, Melbourne, working with SMEs in every capital city. Starts with an AI readiness assessment, then builds automations, agents and voice AI connected to tools such as Xero, HubSpot, Google Workspace and Microsoft 365, with ongoing operations support.' },
  { name: 'Aivy', note: 'Based in Kensington, Melbourne, working nationally with mid-market firms. Offers AI consulting, document and finance automation, Xero integration and chatbot development for accounting, ecommerce, healthcare, NDIS, professional services and real estate, with fixed-scope pilots.' },
  { name: 'Advancer', note: 'Based in Fortitude Valley, Brisbane. Offers AI training, AI consulting and readiness assessments, AI agents for workflows and CRM updates, voice AI for call handling and bookings, and data consulting, on fixed-scope pilots.' },
  { name: 'Edison AI', note: 'Based in Surry Hills, Sydney, serving small and medium businesses Australia-wide. Implements AI agents and workflow automation and trains staff to use AI, from readiness audits through to dashboards.' },
  { name: 'Team 400', note: 'Brisbane head office, working across Sydney, Melbourne and Brisbane. Builds custom AI agents and the software around them, with strong Microsoft work (Azure OpenAI, Copilot Studio, Power Platform) plus .NET and React development, for mid-size and larger businesses.' },
  { name: 'Osher Digital', note: 'Based on Eagle Street, Brisbane, working across Australia with small to mid-market businesses. Offers AI agent development, AI consulting, n8n automation, system integrations and custom ERP software.' },
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
    images: [{ url: '/images/au/ai-consulting/ai-consulting-og.webp', width: 1200, height: 630, alt: 'AI consulting in Australia: a consultant and a Sydney business owner choosing the three AI use cases worth doing first' }],
  },
  robots: { index: true, follow: true },
};

const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;
/* What an AI consultant does, in the order the work usually happens (was an inline card list). */
const CONSULTANT_JOBS: { n: string; t: string; d: string }[] = [
  { n: '01', t: 'Listens before recommending anything', d: 'Interviews the people who do the work, not just the owner. The best use cases hide in the steps someone repeats forty times a week.' },
  { n: '02', t: 'Maps how the work flows today', d: 'Draws each process box by box: where requests arrive, who touches them, which systems they copy between. AI fits where information moves by hand.' },
  { n: '03', t: 'Finds the two or three use cases worth doing', d: 'Scores every idea on value and risk, then drops most of them. A long list of AI opportunities is not a strategy.' },
  { n: '04', t: 'Checks your data', d: 'Where the information lives (Xero, MYOB, your CRM, shared drives, email), whether it is accurate, and whether you are allowed to use it this way.' },
  { n: '05', t: 'Checks your legal and privacy duties', d: 'Which Australian Privacy Principles apply, what personal information each use case touches, and which AI providers would see it and on what terms.' },
  { n: '06', t: 'Decides buy or build', d: 'Recommends an off-the-shelf tool when one does the job, and a custom build only when the job is specific to your business.' },
  { n: '07', t: 'Proves it with a pilot', d: 'Runs one use case with real users and real data against a success measure agreed upfront, before anyone spends on a full rollout.' },
  { n: '08', t: 'Gets it live and keeps it working', d: 'Usage rules, training, monitoring and support. This is where most AI consulting stops, and where FactoryJet keeps going.' },
];

/* Icons and visual-slot subjects for the eight job cards (same order as CONSULTANT_JOBS). */
const JOB_ICONS = [
  'M4 5h16v11H9l-5 4V5Zm4 5h8M8 13h5',
  'M4 5h5v5H4V5Zm11 9h5v5h-5v-5ZM6.5 10v4a2 2 0 0 0 2 2H15',
  'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z',
  'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3Zm0 0v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3',
  'M12 3 4 6v6c0 4.5 3.4 8 8 9 4.6-1 8-4.5 8-9V6l-8-3Zm-3 9 2 2 4-4',
  'M12 20v-7m0 0L6 6m6 7 6-7M4 6h4M16 6h4',
  'M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3M7.5 15h9',
  'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-4 9 3 3 5-6',
] as const;
const JOB_SUBJECTS = [
  'AI-generated model: a white speech bubble beside a small human figure at a workbench, with an orange note card being handed across',
  'AI-generated model: a row of white process boxes joined by lines, one orange box marking where information is copied by hand',
  'AI-generated model: a pile of white idea cards with three orange cards lifted out and set apart',
  'AI-generated model: white stacked data discs labelled by shape only, one orange disc being checked with a small magnifier',
  'AI-generated model: a white shield with an orange tick resting on a folder of customer record cards',
  'AI-generated model: a white path splitting in two, an orange box on the build side and a white box on the buy side',
  'AI-generated model: a small white test bench with one orange component under a measuring gauge',
  'AI-generated model: a white machine running on a plinth with an orange status light and a small maintenance tag',
] as const;

/* Visual slot page key (route without /au/). */
const PAGE_KEY = 'ai-consulting';

/* H1 split for the Family A hero emphasis. Same string as H1 (schema headline); only the
   benefit clause after the colon is wrapped in .hero-emphasis. */
const H1_SPLIT = H1.indexOf(': ');
const H1_LEAD = H1.slice(0, H1_SPLIT + 1);
const H1_EMPHASIS = H1.slice(H1_SPLIT + 2);

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

export default function AiConsultingAUPage() {
  return (
    <>
      <script id="ld-au-ai-consulting" type="application/ld+json"
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
              <div className="eyebrow">AI Consulting Australia</div>
              <h1>{H1_LEAD} <span className="hero-emphasis">{H1_EMPHASIS}</span></h1>
              <p className="lead">
                FactoryJet offers AI consulting for Australian SMEs and mid-market firms. We find the two or three
                places where AI will genuinely pay off, check your data and your Privacy Act duties, tell you
                whether to buy a tool or build something, and then our engineers can build it. Advice and delivery
                from one senior team.
              </p>
              <HeroInlineForm region="au" source="au_ai_consulting_hero" submitLabel="Book my AI readiness call" />
            </div>

            <form
              className="specpanel"
              aria-label="What you leave with after AI consulting"
              data-visual-slot={`${PAGE_KEY}:hero`}
              data-visual-kind="diagram"
              data-visual-subject="What a client leaves with: two or three ranked use cases, a written buy or build decision, and a Privacy Act and APP check"
              data-visual-ratio="1:1"
              data-visual-status="filled"
            >
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>INCLUDED · WHAT YOU LEAVE WITH</span>
                <span className="sys"><span>READINESS</span><span>ADVISE</span><span>BUILD</span></span>
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
              <div className="specpanel-body" role="radiogroup" aria-label="Explore what you leave with">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="aic-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={JOB_ICONS[2]} /></svg></span>
                  <span className="idx">ranked by value and risk</span>
                  <span className="title">Use cases worth doing</span>
                  <span className="tag">Two or three</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="aic-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={JOB_ICONS[5]} /></svg></span>
                  <span className="idx">tool-neutral, no resale deals</span>
                  <span className="title">Buy or build decision</span>
                  <span className="tag">Written</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="aic-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={JOB_ICONS[4]} /></svg></span>
                  <span className="idx">from day one, not after launch</span>
                  <span className="title">Privacy Act and APP check</span>
                  <span className="tag">Included</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · You can stop after any stage and keep everything we have produced.</div>
            </form>
          </div>
        </section>

        {/* ═══ LEDGER (was the facts band; verified only, no count-ups) ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: 'All', t: 'uses of AI involving personal information are covered by the Privacy Act', s: 'OAIC guidance', u: SRC_OAIC_AI },
              { v: '13', t: 'Australian Privacy Principles set the rules for collecting, using and securing personal information', s: 'OAIC', u: SRC_OAIC_APPS },
              { v: '10 Dec 2026', t: 'new privacy policy duty for automated decisions that use personal information', s: 'OAIC', u: SRC_OAIC_ADM },
              { v: '6', t: 'essential practices in the National AI Centre’s Guidance for AI Adoption', s: 'Allens summary', u: SRC_AI6 },
            ].map((r) => (
              <div className="ledgercell" key={r.t}>
                <div className="k"><a href={r.u} {...extLink}>{r.s}</a></div>
                <div className="v">
                  <strong className={/\d/.test(r.v) ? 'ledger-number' : 'ledger-word'}>{r.v}</strong>
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

        {/* ═══ ANSWER-FIRST DEFINITION (GEO) → Family A facts ═══ */}
        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <h2 data-speakable="true">What does an AI consultant do for an Australian business?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p data-speakable="true">
                    <span className="stat">An AI consultant finds where AI will save your business real time or money, and where it will not.</span>{' '}
                    They review how your team works, pick the two or three best use cases, check your data and your
                    duties under the Privacy Act, and advise whether to buy a tool or build one. The best AI consulting
                    firms then help you put it live and keep it working.
                  </p>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <div>
                    <div className="factlabel">Three terms we use a lot</div>
                    <p>
                      A <b>use case</b> is one specific job AI could do, such as drafting quote replies or sorting supplier
                      invoices. An <b>AI readiness assessment</b> is a structured check of your goals, data, systems, people
                      and rules, so you know which use cases you can do now. <b>Governance</b> simply means the rules for how
                      AI is used, checked and owned in your business.
                    </p>
                  </div>
                </div>
                <div className="fact">
                  <div className="sec">§03</div>
                  <p>
                    Most Australian businesses we speak to are not short of AI tools. Staff already use ChatGPT or Copilot in
                    a browser tab. What is missing is a decision: which jobs AI should do, with what data, under which rules,
                    and who owns the result. That is what good AI consulting services deliver, and it is why we do the
                    engineering too.
                  </p>
                </div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts" kind="photo" ratio="3:2" className="factphoto"
                subject="An AI consultant and a trades business owner picking three sticky notes out of a pile of ideas">
                <img src="/images/au/ai-consulting/ai-consulting-hero.webp" width={1400} height={933} loading="lazy" decoding="async" alt="An AI consultant and the owner of a Sydney trades business picking three sticky notes out of a pile of ideas to decide where AI will pay off first, with Sydney Harbour through the window" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ LISTICLE: WHAT AN AI CONSULTANT DOES → capgrid ═══ */}
        <section className="section capabilities" id="what-a-consultant-does">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">The job, step by step</div>
              <h2>What an AI consultant actually does: eight jobs in plain English</h2>
              <p className="lead">
                &ldquo;What does an AI consultant actually do?&rdquo; is one of the most searched AI consulting questions in
                Australia. Here is the honest answer, in the order the work usually happens.
              </p>
            </div>
            <div className="capgrid">
              {CONSULTANT_JOBS.map((j, i) => (
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

        {/* ═══ FOUR KINDS OF ADVICE + COMPARISON TABLE ═══ */}
        <section className="section comparison" id="comparison">
          <div className="wrap">
            <div className="section-head head-split">
              <div className="eyebrow">Know what you are buying</div>
              <div>
                <h2>Big Four, independent consultant, software vendor or an AI consulting firm that builds?</h2>
                <p className="lead">
                  Search for an AI consultant in Australia and the results mix four very different businesses. Each is
                  right for someone. The trick is knowing which one you are talking to before the proposal arrives.
                </p>
              </div>
            </div>
            <div className="tablewrap">
              <table>
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
                  <tr><th scope="row">Best fit</th><td className="fj">Australian SMEs and mid-market</td><td>Large enterprises and government</td><td>Small teams, training, second opinions</td><td>Buyers already sure of the product</td></tr>
                  <tr><th scope="row">Who does the work</th><td className="fj">Senior engineers + founder</td><td>Mixed seniority, large teams</td><td>One person</td><td>Sales and onboarding staff</td></tr>
                  <tr><th scope="row">AI readiness assessment</th><td className="fj">Yes</td><td>Yes</td><td>Sometimes</td><td>Rarely independent</td></tr>
                  <tr><th scope="row">Tool-neutral buy or build advice</th><td className="fj">Yes, no resale deals</td><td>Often tied to alliances</td><td>Varies</td><td>Recommends its own product</td></tr>
                  <tr><th scope="row">Builds what it recommends</th><td className="fj">Yes, same team</td><td>Via separate delivery teams</td><td>Rarely</td><td>Configures its own tool only</td></tr>
                  <tr><th scope="row">Privacy Act and APP support</th><td className="fj">Built into the assessment</td><td>Yes</td><td>Varies</td><td>For its own product</td></tr>
                  <tr><th scope="row">Support after launch</th><td className="fj">Yes, same team</td><td>Separate contract</td><td>Rarely</td><td>For its product, on its terms</td></tr>
                  <tr><th scope="row">Typical end product</th><td className="fj">A working system you own</td><td>Strategy and program plan</td><td>Recommendations, training</td><td>A subscription</td></tr>
                </tbody>
              </table>
            </div>
            <div className="platlist" role="list">
              <div className="plat plat-2col" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>When a big firm is the right call</h3></div><p className="plat-build">If AI is changing every division at once, you need formal change management across thousands of staff, or your regulator expects a household name on the report, a Big Four firm or a large consultancy such as Mantel is a sensible choice. Most businesses of 20 to 200 people are not in that position.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>When an independent consultant is enough</h3></div><p className="plat-build">If you mainly want staff trained on ChatGPT or Copilot, or a quick second opinion on a vendor pitch, an independent AI consultant is quick to hire and often excellent. The limit is capacity: one person rarely builds, integrates and supports a real system.</p></div>
            </div>
          </div>
        </section>

        {/* ═══ READINESS CHECKLIST (<details>) → vlog ═══ */}
        <section className="vlog" id="readiness">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Check yourself first</div>
              <h2>AI readiness checklist: five areas, fifteen questions</h2>
              <p>
                Open each area and tick off what is already true for your business. Three or more gaps in one area
                is normal. It tells you where an AI readiness assessment should start.
              </p>
              <VisualSlot page={PAGE_KEY} slot="proof" kind="photo" ratio="3:2" captionClassName="figcap"
                subject="An operations manager and an AI consultant reviewing a laptop and a blank checklist in a warehouse office"
                caption="A readiness assessment is a working session, not a quiz. We sit with the people who run the process, look at the actual systems, and write down what is true today, gaps included.">
                <img src="/images/au/ai-consulting/ai-consulting-readiness.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Over-the-shoulder view of an operations manager and an AI consultant reviewing a laptop and a blank checklist in a bright Melbourne warehouse office" />
              </VisualSlot>
            </div>
            <div className="ventries">
              {READINESS.map((r) => (
                <details key={r.area} className="ventry">
                  <summary><h3>{r.area}: {r.lead}</h3><span className="chev" aria-hidden="true">+</span></summary>
                  <ul className="chg-list">
                    {r.checks.map((c) => (<li key={c}><span>{c}</span></li>))}
                  </ul>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ PHOTOBREAK (US template visual, no AU image yet) ═══ */}
        <VisualSlot page={PAGE_KEY} slot="photobreak" kind="illustration" ratio="12:5" className="photobreak"
          subject="AI-generated model: a long white table of process boxes, three orange boxes lifted onto a small plinth for a pilot" />

        {/* ═══ ENGAGEMENT STAGES → process timeline (stages stay openable, as the copy says) ═══ */}
        <section className="section process" id="how-it-runs">
          <div className="wrap">
            <div className="head-media">
              <div className="section-head">
                <div className="eyebrow">How an engagement runs</div>
                <h2>AI implementation consulting in six stages, from first call to a working system</h2>
                <p className="lead">
                  Open a stage to see what happens and what you get at the end of it. You can stop after any stage and
                  keep everything we have produced.
                </p>
              </div>
              <VisualSlot page={PAGE_KEY} slot="process" kind="photo" ratio="3:2" captionClassName="figcap"
                subject="A consultant drawing a four-step process flow of empty boxes on a whiteboard while three staff look on"
                caption={<><b>Stage two in practice.</b> The readiness workshop starts by drawing the process as it runs today, box by box, with the people who do the work in the room. The best AI use case is usually a step where someone copies information between two screens, or answers the same question many times a week.</>}>
                <img src="/images/au/ai-consulting/ai-consulting-workshop.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A readiness workshop in a bright Melbourne meeting room: a consultant draws a four-step process flow of empty boxes on a whiteboard while three staff who do the work look on" />
              </VisualSlot>
            </div>
            <div className="timeline timeline-3">
              {STAGES.map((s) => (
                <details key={s.n} className="tnode">
                  <summary>
                    <div className="idx">{s.n}</div>
                    <h3>{s.t}<span className="chev" aria-hidden="true">+</span></h3>
                  </summary>
                  <p>{s.d}</p>
                  <p><b>You leave with:</b> {s.out}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <div className="au-midcta">
          <MidPageCTA
            headline={'Not sure where AI fits in your business?'}
            sub={'Tell us what takes up your team’s week. On a short call with the founder, we will tell you where AI would genuinely help, where it would not, and whether an AI readiness assessment is worth doing at all.'}
            label={'Book my AI readiness call'}
          />
        </div>

        {/* ═══ BUY OR BUILD → facts + rule-of-thumb panel ═══ */}
        <section className="section facts" id="buy-or-build">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">The decision most consultants skip</div>
              <h2>Buy or build: an off-the-shelf AI tool or a custom AI agent?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Generative AI is AI that writes, summarises or creates content when you ask it to. Microsoft
                  Copilot, ChatGPT Enterprise, Claude and Google Gemini are generative AI for the whole company. For
                  general work such as drafting emails, summarising meetings or searching your own documents, one of
                  them is often the right answer. Buying is faster and cheaper than building, and we will say so.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  Agentic AI is different. An AI agent can take actions across your systems on its own, within rules
                  you set: checking an order, updating a record in Xero, chasing an overdue invoice, routing a
                  customer request. That is where a custom build earns its place, because no general tool knows your
                  pricing rules, your stock system or your approval steps.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  When the plan calls for a build, the work moves straight into our{' '}
                  <a href="/au/ai-agents">AI agent development service for Australian businesses</a>, with
                  the same people. Wider builds, such as adding AI to your CRM, ERP or ecommerce platform, run through{' '}
                  <a href="/au/ai-development">custom AI development in Australia</a>. If the bottleneck is
                  the phone, see our <a href="/au/ai-receptionist">AI receptionist for Australian SMEs</a>.
                  For the difference between chatbots and agents, read{' '}
                  <a href="/blog/ai-chatbots-vs-ai-agents-business">AI chatbots vs AI agents</a>.
                </p></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">A simple rule of thumb</div>
                <ul className="trigrows">
                  <li><span className="m">General writing and summaries</span><span className="n">Copilot, ChatGPT Enterprise, Claude, Gemini</span><span className="t">Buy</span></li>
                  <li><span className="m">Searching your own documents</span><span className="n">often covered by the tools above</span><span className="t">Buy first</span></li>
                  <li><span className="m">Work across several of your systems</span><span className="n">Xero or MYOB, CRM, stock, helpdesk</span><span className="t">Build</span></li>
                  <li><span className="m">Rules only your business knows</span><span className="n">pricing, approvals, exceptions</span><span className="t">Build</span></li>
                  <li><span className="m">A tool you bought that nobody uses</span><span className="n">usually a setup problem</span><span className="t">Fix it</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ WHERE THE PLAN LEADS → definition module (photo left, copy + link tiles right) ═══ */}
        <section className="definition" id="next-steps">
          <div>
            <VisualSlot page={PAGE_KEY} slot="definition" kind="photo" ratio="3:2" className="definition-image"
              subject="A FactoryJet engineer and a distribution business owner reviewing a tablet together on a warehouse floor">
              <img src="/images/au/ai-consulting/ai-consulting-build.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Over-the-shoulder view of a FactoryJet engineer and a distribution business owner in a hi-vis vest reviewing a tablet together in a bright Brisbane warehouse" />
            </VisualSlot>
            <p className="figcap">
              The engineer who helped write your plan is on the warehouse floor when it goes live. That is the
              difference between AI consulting and a slide deck.
            </p>
          </div>
          <div className="definition-copy">
            <div className="eyebrow">After the advice</div>
            <h2>Where an AI strategy usually leads next</h2>
            <p>
              AI strategy consulting is only worth paying for if something ships at the end. These are the four
              places our plans most often land, each handled by the same team that wrote the plan.
            </p>
            <ul className="agentdir-grid">
              {NEXT_STEPS.map((s) => (
                <li key={s.href}>
                  <a href={s.href}>
                    <span className="agentdir-t">{s.t}</span>
                    <span className="agentdir-l">{s.d}</span>
                    <span className="agentdir-go" aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ PRIVACY & GOVERNANCE → facts + photo + ruled rows ═══ */}
        <section className="section facts" id="governance">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">AI governance, in plain English</div>
              <h2>The Privacy Act and safe, responsible AI shape the plan before the engineering does</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  If AI will touch personal information, meaning anything about a customer, patient, tenant or
                  employee, the Privacy Act 1988 is the starting point. The Office of the Australian Information
                  Commissioner (OAIC) is direct: the Privacy Act applies to all uses of AI involving personal
                  information. The 13 Australian Privacy Principles (APPs) then set the rules for how that
                  information is collected, used, disclosed, kept accurate and kept secure.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  The OAIC’s guidance on commercially available AI products gives three practical instructions we
                  build into every engagement. Do due diligence on any AI product before you adopt it. Take a
                  &ldquo;privacy by design&rdquo; approach, which includes a Privacy Impact Assessment (a written check of
                  the privacy risks a project creates and how you will reduce them). And, as best practice, do not
                  enter personal information, especially sensitive information, into publicly available generative AI
                  tools. The guidance also reminds businesses that APP 10 requires reasonable steps to keep personal
                  information accurate, which matters because AI can produce confident, wrong answers.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  A new duty starts on 10 December 2026. Under the Privacy and Other Legislation Amendment Act 2024,
                  organisations covered by the Privacy Act that use personal information in automated decisions that
                  could affect people’s rights or interests must explain this in their privacy policy. If a system we
                  design will help make decisions about customers or staff, we flag it at the assessment stage.
                </p></div>
                <div className="fact"><div className="sec">§04</div><div>
                  <p>
                    On the wider &ldquo;safe and responsible AI&rdquo; front, the Australian Government’s National AI Centre
                    published the Guidance for AI Adoption, which updates and replaces the earlier Voluntary AI Safety
                    Standard. It is voluntary, and its six essential practices make a sensible governance checklist for
                    any business: decide who is accountable, understand impacts and plan accordingly, measure and manage
                    risks, share essential information, test and monitor, and maintain human control.
                  </p>
                  <p className="au-note">
                    Sources: <a href={SRC_OAIC_AI} {...extLink}>OAIC, guidance on privacy and the use of commercially available AI products</a>;{' '}
                    <a href={SRC_OAIC_APPS} {...extLink}>OAIC, Australian Privacy Principles</a>;{' '}
                    <a href={SRC_OAIC_ADM} {...extLink}>OAIC, transparency in automated decision making</a>;{' '}
                    <a href={SRC_AI6} {...extLink}>Allens, FAQs on the Guidance for AI Adoption</a>.
                  </p>
                </div></div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-2" kind="photo" ratio="3:2" className="factphoto" captionClassName="figcap"
                subject="Three colleagues reading and marking up a printed draft AI usage policy together in a bright office"
                caption={<><b>What governance looks like.</b> Usually a short, plain-English AI usage policy that the owner, the privacy lead and the people who use the tools read and agree together. Which tools are allowed, what data can go in them, and who checks the output.</>}>
                <img src="/images/au/ai-consulting/ai-consulting-privacy.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Three colleagues in a calm, bright Canberra office reading and marking up a printed draft AI usage policy together, with Parliament House in the distance" />
              </VisualSlot>
            </div>
            <div className="platlist span-all" role="list">
              <div className="plat plat-2col" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>What we do</h3></div><p className="plat-build">Map the personal information each use case touches, check which AI providers would see it and on what terms, write your AI usage policy, and prepare the inputs for a Privacy Impact Assessment.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>What you keep</h3></div><p className="plat-build">You stay accountable for your customers’ information. We make that easier to meet with scoped access, a record of what the system did, and a human in charge of decisions that matter.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>What we do not do</h3></div><p className="plat-build">We are not lawyers and do not give legal sign-off. We build to the requirements you and your adviser set, and document everything your adviser needs to review.</p></div>
            </div>
          </div>
        </section>

        {/* ═══ WHO IT IS FOR → ruled rows ═══ */}
        <section className="section platforms" id="who-we-work-with">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Who we work with</div>
                <h2>AI consulting for small businesses and mid-market firms across Australia</h2>
              </div>
              <p>
                Our AI consulting for small businesses and growing firms works best where a repeated, paper-heavy or
                inbox-heavy process eats up skilled people’s time. These groups make up most of our conversations.
              </p>
            </div>
            <div className="platlist" role="list">
              <div className="plat plat-2col" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>Professional services</h3></div><p className="plat-build">Accounting practices, law firms, recruiters and agencies. Drafting, document review, client onboarding and time recording are common first use cases.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>Trades and field services</h3></div><p className="plat-build">Builders, electricians, plumbers and maintenance firms. Quoting, job booking, after-hours calls and turning site notes into invoices in Xero or MYOB.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>Wholesalers and distributors</h3></div><p className="plat-build">Order entry from emailed purchase orders, stock questions, supplier chasing and freight updates, often around an ERP nobody wants to replace.</p></div>
              <div className="plat plat-2col plat-own" role="listitem"><span className="capid">04</span><div className="plat-name"><h3>Ecommerce brands</h3></div><p className="plat-build">Customer service, returns under the Australian Consumer Law, product data and marketplace listings. This is our home ground; see our <a href="/au">Australian services hub</a>.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">05</span><div className="plat-name"><h3>Property and real estate</h3></div><p className="plat-build">Agencies, strata managers and developers. Tenant and buyer enquiries, maintenance requests and document handling, with care over personal information.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">06</span><div className="plat-name"><h3>Clinics and allied health</h3></div><p className="plat-build">On the admin side only: bookings, referrals, letters and inbox triage. Health information is sensitive information under the Privacy Act, so the privacy work comes first.</p></div>
            </div>
          </div>
        </section>

        {/* ═══ ENGAGEMENT SHAPES + COST DRIVERS (no pricing) → openable rows + cost panel ═══ */}
        <section className="section platforms" id="engagement">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Scope, not packages</div>
                <h2>Four ways to work with our AI consultants. Which one fits you?</h2>
              </div>
              <p>
                Every engagement is quoted for your scope, with a fixed price per stage. Open each shape to see who it
                suits.
              </p>
            </div>
            <div className="au-split">
              <div>
                <div className="ventries">
                  {SHAPES.map((s) => (
                    <details key={s.t} className="ventry">
                      <summary><h3>{s.t}</h3><span className="chev" aria-hidden="true">+</span></summary>
                      <p>{s.d}</p>
                      <span className="vtag">This fits you if</span>
                      <ul className="chg-list">
                        {s.fits.map((f) => (<li key={f}><span>{f}</span></li>))}
                      </ul>
                    </details>
                  ))}
                </div>
                <ModalCTAButton label="Book my AI readiness call" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              </div>
              <div className="au-panel">
                <div className="eyebrow">How much does an AI consultant cost?</div>
                <p>
                  There is no honest single number. These five things move the cost of AI consulting more than anything
                  else:
                </p>
                <ul className="trigrows">
                  <li><span className="m">Teams and processes in scope</span><span className="t">Breadth</span></li>
                  <li><span className="m">State of your data</span><span className="t">Prep</span></li>
                  <li><span className="m">Systems to connect</span><span className="t">Reach</span></li>
                  <li><span className="m">Privacy and sector rules</span><span className="t">Governance</span></li>
                  <li><span className="m">Advice only, or advice plus build</span><span className="t">Delivery</span></li>
                  <li><span className="m">First call with the founder</span><span className="t">Free</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SYDNEY + MELBOURNE → ruled rows + split (prose, links | demand) ═══ */}
        <section className="section platforms" id="locations">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Sydney, Melbourne and Australia-wide</div>
                <h2>AI consulting in Sydney and Melbourne, and everywhere else in Australia</h2>
              </div>
              <p>
                Plenty of people search for an AI consultant in Sydney or Melbourne, or type &ldquo;AI consulting near
                me&rdquo;, expecting to need someone down the road. For this kind of work you do not. What matters is who
                turns up to the workshop and who is still there after launch.
              </p>
            </div>
            <div className="platlist" role="list">
              <div className="plat plat-2col" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>AI consulting Sydney</h3></div><p className="plat-build">
                Sydney has the deepest pool of AI consulting firms in the country, from Big Four practices in the CBD
                to boutique builders. That makes choosing harder, not easier. Sydney businesses we talk to are often
                in professional services, finance-adjacent work and distribution, where the first use cases are
                document-heavy: reading contracts, drafting client letters, processing purchase orders. Privacy and
                record-keeping expectations run high, so our Sydney engagements put the APP check and a written AI
                usage policy right at the start.
              </p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>AI consulting Melbourne</h3></div><p className="plat-build">
                Melbourne has a strong mix of manufacturers, wholesalers, health and education providers and
                ecommerce brands. Our Melbourne AI consulting work often starts in operations: order entry, stock and
                supplier questions, customer service queues, and connecting Xero or MYOB to the systems around it.
                Melbourne firms also tend to ask hard questions about ownership, which suits us, because everything we
                build is yours: code, prompts, integrations and documentation.
              </p></div>
            </div>
            <div className="au-split">
              <div>
                <p>
                  We run engagements remotely, with video workshops, shared process maps and written reports, and plan
                  sessions around Australian business hours. The same model serves Brisbane, Perth, Adelaide, Canberra
                  and regional businesses. The founder is involved in every engagement, and the senior engineers who run
                  your readiness assessment are the ones who build the system if you go ahead.
                </p>
                <p>
                  If AI visibility is also on your list, meaning how your business shows up in ChatGPT, Perplexity and
                  Google AI answers, that is a separate service: see <a href="/au/ai-seo">AI SEO in Australia</a>.
                </p>
                <ul className="city-list">
                  <li><a href="/au">FactoryJet Australia</a></li>
                  <li><a href="/au/ai-agents">AI agents Australia</a></li>
                  <li><a href="/au/ai-development">AI development Australia</a></li>
                  <li><a href="/au/melbourne">Melbourne</a></li>
                  <li><a href="/au/brisbane">Brisbane</a></li>
                </ul>
              </div>
              <div className="demand">
                <div className="demand-head"><span>Australia · Monthly Search Demand</span><b>DataForSEO</b></div>
                <ul>
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
                      <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<small> searches</small></span></div>
                      <div className="demand-bar"><i style={{ width: r.w }} /></div>
                      <div className="demand-kd">{r.kd}</div>
                    </li>
                  ))}
                </ul>
                <p className="demand-src">Source: DataForSEO, Australia, September 2026</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ COMPETITOR LIST (self-disclosure, ItemList from AI_CONSULTANCIES) → ruled rows ═══ */}
        <section className="section platforms" id="providers">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">The honest landscape</div>
                <h2>Australian AI consulting firms worth knowing</h2>
              </div>
              <p>
                We are one option, not the only one. These AI consulting companies show up when Australians search for
                an AI consultancy or ask AI assistants for a recommendation. Each note is based on what the company says
                on its own website. Talk to a few and pick the fit.
              </p>
            </div>
            <div className="platlist" role="list">
              {AI_CONSULTANCIES.map((a, i) => (
                <div key={a.name} className={a.name === 'FactoryJet' ? 'plat plat-2col plat-own' : 'plat plat-2col'} role="listitem">
                  <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                  <div className="plat-name"><h3>{a.name}</h3>{a.name === 'FactoryJet' && <span className="plat-flag">That is us</span>}</div>
                  <p className="plat-build">{a.note}</p>
                </div>
              ))}
            </div>
            <p className="sub-note">
              Firms named from live Australian search results and AI assistant answers for AI consulting queries, September 2026. Each company’s own website was checked on 26 September 2026 for an Australian office and the services named. Listing is not endorsement.
            </p>
            <p className="sub-note">
              For a wider shortlist, we compare 13 Australian AI consultancies and agencies by location, client size,
              platforms and published prices in our <a href="/blog/best-ai-agencies-australia-2026">AI consultancies and agencies compared</a> guide.
            </p>
          </div>
        </section>

        {/* ═══ QUESTIONS TO ASK → facts + photo ═══ */}
        <section className="section facts" id="questions-to-ask">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Before you sign anything</div>
              <h2>Six questions to ask any AI consulting firm</h2>
              <p className="lead">
                Use these with every AI consulting firm on your shortlist, including us. A good AI consultant will
                enjoy answering them. A weak one will change the subject.
              </p>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">Q1</div><p><b>What have you actually put live?</b> Ask for systems running in a real business today, not demos or workshop photos.</p></div>
                <div className="fact"><div className="sec">Q2</div><p><b>Who will do the work?</b> Get the name of the person who runs your assessment, and ask whether they would also build what they recommend.</p></div>
                <div className="fact"><div className="sec">Q3</div><p><b>When would you tell us not to use AI?</b> If they have never told a client no, their advice is really a sales process.</p></div>
                <div className="fact"><div className="sec">Q4</div><p><b>Do you resell any AI platform?</b> Partnerships are fine if disclosed. A buy or build recommendation shaped by a commission is not.</p></div>
                <div className="fact"><div className="sec">Q5</div><p><b>How will you handle our personal information?</b> Ask which APPs they check, which AI providers would see your data, and on what terms.</p></div>
                <div className="fact"><div className="sec">Q6</div><p><b>What do we own, and what happens after launch?</b> Code, prompts and documentation should be yours, and someone should be watching the system after go-live.</p></div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-3" kind="photo" ratio="3:2" className="factphoto" captionClassName="figcap"
                subject="A wholesale business owner with pen and notepad questioning an AI consultant across a round table"
                caption="Interview the consultant the way you would interview a senior hire. Write their answers down, and compare them side by side with the other firms on your shortlist.">
                <img src="/images/au/ai-consulting/ai-consulting-questions.webp" width={1200} height={800} loading="lazy" decoding="async" alt="The owner of a Melbourne wholesale business, pen and notepad in hand, questions an AI consultant across a round table before deciding whether to hire him" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ FAQ (Family A accordion; same FAQ_ITEMS array as the FAQPage JSON-LD) ═══ */}
        <AuFaq
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          heading="AI consulting questions Australian business owners actually ask"
          askLabel="Still have a question? Ask the founder →"
          askNote="Replies within 24 hours."
        />

        {/* ═══ FINAL CTA (light, US finalcta) ═══ */}
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <div className="eyebrow">Ready when you are</div>
              <h2>Find out where AI will actually pay off in your business</h2>
              <p>
                Send your name and work email. The founder replies within 24 hours to book a short call about your
                business, the use cases worth looking at, and whether an AI readiness assessment is the right first
                step. No spam, no obligation.
              </p>
            </div>
            <div className="ctas">
              <ModalCTAButton label="Book my AI readiness call" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              <a className="btn btn-ghost" href="/au/ai-agents">See AI agents for Australia</a>
            </div>
          </div>
        </section>

      </main>
      </div>
      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}

import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

const PAGE_URL = 'https://factoryjet.com/blog/best-ai-agent-development-companies-uk-2026';
const IMG = '/blog-images/best-ai-agent-development-companies-uk-2026';

// Every fact about every firm below was read on that firm's own website on
// 9 October 2026 (URL in `source`; the quote behind each claim is in the
// research ledger kept outside the repo). Nothing here is paid placement.
// The order is NOT a ranking; firms are grouped by the kind of buyer they
// suit. The table, the profiles, the regional table and the ItemList schema
// all map from this same array.
interface Firm {
  name: string;
  url: string;
  source: string;
  group: 'first' | 'product' | 'sensitive' | 'systems' | 'commerce';
  region: string;
  based: string;
  type: string;
  clients: string;
  platforms: string;
  what: string;
  bestFor: string;
  ask: string;
}

const FIRMS: Firm[] = [
  {
    name: 'Happy Webs',
    url: 'https://happywebs.co.uk/',
    source: 'https://happywebs.co.uk/services/ai-agents/',
    group: 'first',
    region: 'Greater Manchester',
    based: 'Ashton-under-Lyne, Tameside, Greater Manchester, working UK-wide',
    type: 'B2B digital agency: AI agents, automation, websites and custom software',
    clients: 'Small B2B firms; its AI page shows a fabrication business, and it sells its own apps for trade suppliers and door contractors',
    platforms: 'Email, CRM, accounting and job management tools (no brands named on the page we read)',
    what: 'Its AI page sells one job at a time: sort enquiries, prepare replies, route documents, chase quotes and update job records, with a person approving anything uncertain. It prints its prices: from £2,000 for one focused automation, with most businesses spending £5,000 to £15,000 across several workflows, all excluding VAT. It also sells its own AI receptionist.',
    bestFor: 'A small office buried in admin that wants one workflow fixed at a price it can see before the first call.',
    ask: 'Which of your systems it has connected before, and what the optional monthly retainer covers.',
  },
  {
    name: 'Augustova',
    url: 'https://www.augustova.co.uk/',
    source: 'https://www.augustova.co.uk/',
    group: 'first',
    region: 'London',
    based: 'Fitzrovia, London (registered office on Tottenham Court Road)',
    type: 'AI consultancy that builds what it recommends: agents, software and startup MVPs',
    clients: 'UK small and mid-sized businesses',
    platforms: 'Custom builds; it runs two AI products of its own, GoRizzume and Onrolo',
    what: 'A fixed-price AI audit (£2,500 to £6,000), then a build. Its home page lists a first agent from £4,000, custom software from £8,000 to £30,000 with the code owned by the client from day one, and a startup MVP (a first working version of a product) from £10,000. It also offers AI training and adoption work.',
    bestFor: 'Small firms and founders who want an audit and a first agent from the same London team, with prices in the open.',
    ask: 'What the £4,000 first agent includes, and what it costs to run each month after launch.',
  },
  {
    name: 'Softomate Solutions',
    url: 'https://www.softomatesolutions.com/',
    source: 'https://www.softomatesolutions.com/agentic-ai-development-london/',
    group: 'first',
    region: 'London',
    based: 'Stanmore, London (HA7)',
    type: 'AI agents, chatbots, voice agents and business automation',
    clients: 'London businesses, with professional services firms named most often',
    platforms: 'LangGraph, CrewAI and OpenAI; it adds AI to Odoo, HubSpot, Salesforce and GoHighLevel',
    what: 'Agent systems that research, draft and act across CRM, email and internal tools, with approval gates and a log of each decision. Its page prices a single-agent proof of concept from £6,500 and a multi-agent platform up to £45,000, as fixed fees after a discovery workshop, with care from £399 a month. Prices exclude VAT. It also builds voice agents and WhatsApp chatbots.',
    bestFor: 'London professional services firms that want a fixed fee for a first agent and a named monthly care plan.',
    ask: 'Which approval gates stay on after the first month, and which platform and usage costs sit outside the fee.',
  },
  {
    name: 'Flowio',
    url: 'https://www.flowio.co.uk/',
    source: 'https://www.flowio.co.uk/',
    group: 'first',
    region: 'Glasgow',
    based: 'West George Street, Glasgow, working across the UK',
    type: 'Workflow automation, voice agents and AI agents',
    clients: 'Teams that have outgrown spreadsheets; trades, home services, construction and engineering are in its menu, and it says it has helped 20+ UK businesses',
    platforms: 'n8n (a workflow tool), Python and OpenAI; Xero and QuickBooks for invoice data',
    what: 'Custom n8n and Python workflows that move work between the tools a business already pays for, plus voice agents and chatbots that answer, look things up, book and transfer calls. Its site says it runs 340+ live automations and that it is an OpenAI Select Partner. Most clients start with a discovery step that maps their procedures before any code is written.',
    bestFor: 'Scottish and UK firms that want enquiries, bookings and invoices handled by workflows they own.',
    ask: 'Who hosts the workflows, and how a voice agent hands a caller to your team.',
  },
  {
    name: 'Supersede AI',
    url: 'https://supersede.media/',
    source: 'https://supersede.media/',
    group: 'first',
    region: 'Greater Manchester',
    based: 'Exchange Quay, Salford, Greater Manchester, working UK-wide',
    type: 'AI agency and consultancy: strategy, agents, automation, content and search',
    clients: 'Businesses whose founder, owner or a senior operations, finance or technology leader can join the first session',
    platforms: 'Not named on the page we read; builds are connected to the systems you already have',
    what: 'A paid 90-minute diagnostic for £250 that ends in a written report, then an on-site phase to pick what to build first, then delivery if you want it: its team designs and builds the solution, connects it to your systems, trains your staff and hands it over.',
    bestFor: 'Greater Manchester owners who want a small paid first step before any build is discussed.',
    ask: 'What the on-site phase costs after the £250 diagnostic, and who builds the pilot.',
  },
  {
    name: 'Pixelfield',
    url: 'https://pixelfield.co.uk/',
    source: 'https://pixelfield.co.uk/ai-development-services/ai-agents-development/',
    group: 'product',
    region: 'London',
    based: 'City Road, London, with studios in Prague and Amsterdam; trading since 2013',
    type: 'AI and product engineering studio',
    clients: 'CTOs and product leads who have proven an idea and need it running in production',
    platforms: 'Custom agents wired into client APIs; it runs its own agent, AgentWise, in production',
    what: 'Agent design, integration, guardrails and monitoring for agents that can change records or spend money. Irreversible actions go through human approval, and every agent ships with tracing and logs. Its page prices discovery from £5,000 and says production builds typically start around £30,000 and take six to ten weeks.',
    bestFor: 'Software companies and scale-ups adding an agent to a live product, where a mistake is expensive.',
    ask: 'What the monthly monitoring retainer covers, and how handover to your own engineers works.',
  },
  {
    name: 'Magora',
    url: 'https://magora-systems.com/',
    source: 'https://magora-systems.com/ai-agent-development-uk/',
    group: 'product',
    region: 'London',
    based: 'The Tea Building, Shoreditch, London; founded in London in 2010',
    type: 'Custom software and AI agent development',
    clients: 'From startup MVPs to enterprise apps; its about page lists 120+ engineers, designers and project managers',
    platforms: 'OpenAI, Anthropic Claude, Google Gemini, open models, LangChain and LlamaIndex',
    what: 'Document agents, workflow agents that work across CRM and ERP, customer service agents and knowledge agents. It builds a free coded prototype in 5 to 10 working days before any paid work. Its page, dated 29 September 2026, prices a one-workflow agent from £20,000 and says adding AI to an existing application typically runs £20,000 to £80,000.',
    bestFor: 'Teams that want to see a working prototype on their own documents before they commit a budget.',
    ask: 'Who owns the prototype if you stop there, and what the monthly support fee includes.',
  },
  {
    name: 'Geeks Ltd',
    url: 'https://www.geeks.ltd/',
    source: 'https://www.geeks.ltd/services/ai-development-implementation/ai-agent-development',
    group: 'product',
    region: 'London',
    based: 'Sutton, London (UK head office), with a US office in Houston',
    type: 'Bespoke software and AI consultancy',
    clients: 'Its site says 850+ businesses over 18+ years, across 12+ sectors',
    platforms: 'Custom builds, plus robotic process automation, bespoke CRM and ERP and systems integration',
    what: 'AI consulting, AI opportunity discovery, AI agent development, AI integration and model training, next to bespoke software, customer portals and CRM or ERP builds. Case studies on its site include casework software for MPs and an archive system for the Houses of Parliament. It does not publish prices.',
    bestFor: 'Larger SMEs that want one established firm for the agent and the bespoke software around it.',
    ask: 'What a first, small engagement looks like and who would lead it.',
  },
  {
    name: 'OpenKit',
    url: 'https://openkit.co.uk/',
    source: 'https://openkit.co.uk/ai-services/ai-agents',
    group: 'sensitive',
    region: 'Cambridge and Durham',
    based: 'Cambridge (Guildhall, Market Square) and Durham (Belmont Business Park)',
    type: 'AI audit, agent engineering, governance and private AI',
    clients: 'Organisations that want the first agent ranked and costed before they commit to building it',
    platforms: 'Agents inside your existing systems, deployed in a UK region or on your own infrastructure',
    what: 'An AI Audit from £10,000 ranks your workflows and costs the first agent; building it is a separate decision. Agents work under your own access controls, log every run and stop for sign-off where a person has to judge. It is ISO 27001 and ISO 9001 certified and holds Cyber Essentials, and its page lists the cases where it will talk you out of an agent.',
    bestFor: 'Firms with sensitive data that want the rules settled before anything is built.',
    ask: 'Whether the audit fee counts towards a build, and where the agent would be hosted.',
  },
  {
    name: 'Green Arrow Consultancy',
    url: 'https://greenarrow.app/',
    source: 'https://greenarrow.app/services/ai-agents/',
    group: 'sensitive',
    region: 'Cardiff',
    based: 'Cathedral Road, Cardiff; founded 2012',
    type: 'AI agency, web development and privacy consultancy',
    clients: 'Consumer brands and professional firms in the UK, USA, EU and Asia Pacific',
    platforms: 'Salesforce, SharePoint, WordPress, Shopify, ticketing and finance systems with an API',
    what: 'Agents that use tools with the least access they need, a human in the loop and every action logged, built by the same team that runs privacy, AI governance, security and accessibility work. Its page says a first agent in production usually takes eight to fourteen weeks, and that a plain script is sometimes the better answer.',
    bestFor: 'Welsh and UK firms that want the agent, the website it sits on and the privacy work from one team.',
    ask: 'How it tests an agent before it touches live systems, and what that test set-up adds to the timeline.',
  },
  {
    name: 'Ayoob AI',
    url: 'https://ayoob.ai/',
    source: 'https://ayoob.ai/ai-automation-uk',
    group: 'sensitive',
    region: 'Newcastle upon Tyne',
    based: 'New Bridge Street, Newcastle upon Tyne, delivering UK-wide',
    type: 'Custom-coded AI software and private, on-premise AI',
    clients: 'SMBs to enterprises; it names healthcare, dental and other regulated firms',
    platforms: 'Custom code, with on-premise deployment where data is sensitive',
    what: 'AI software written as code, with private set-ups on your own machines for firms that cannot send data to a cloud service. It is ISO 27001:2022 and Cyber Essentials certified. It sells on a 12-month retainer: its site says existing systems from £4,000 a month and new builds from £6,000. The client owns the code, and hosting and model costs are paid direct to the provider.',
    bestFor: 'North East firms and regulated businesses that want AI kept on their own machines and can commit to a 12-month term.',
    ask: 'How many engineering hours the retainer buys each month, and what happens to the system if you leave after the term.',
  },
  {
    name: 'Tom&Co',
    url: 'https://www.tomandco.co.uk/ai-agency-consultancy',
    source: 'https://www.tomandco.co.uk/ai-agency-consultancy',
    group: 'systems',
    region: 'London',
    based: 'Shad Thames, London',
    type: 'AI agency and consultancy with an ecommerce build background',
    clients: '15 sectors on its site, from manufacturers, distributors and field services to retail brands',
    platforms: 'Copilot, Gemini, ChatGPT, Claude or custom agents, connected to CRM, ERP, finance and job systems',
    what: 'Workflow automation, agents and small single-purpose apps. For manufacturers and distributors it reads purchase orders, RFQs (requests for a quote) and enquiries and enters them into the ERP for approval, and it matches supplier invoices and delivery notes to purchase orders. Every engagement starts with an audit, and its manufacturing page puts a first build at two to four weeks.',
    bestFor: 'Manufacturers, distributors and field-service firms whose orders arrive by email and PDF and get typed in again.',
    ask: 'Whether it has connected your ERP before, and who maintains the connection after the pilot.',
  },
  {
    name: 'New Icon',
    url: 'https://newicon.net/',
    source: 'https://newicon.net/capabilities/ai-software-development',
    group: 'systems',
    region: 'Bristol',
    based: 'Victoria Street, Redcliffe, Bristol',
    type: 'Bespoke software company with AI agent and language model integration work',
    clients: 'Organisations across the UK; its home page shows a manufacturing example',
    platforms: 'Custom software, cloud applications and large language model integration',
    what: 'Bespoke software and digital products, with AI agents for internal workflows, knowledge assistants tied to internal documents and AI built into cloud applications. Its home page describes a manufacturing system that predicts machine faults before they become failures.',
    bestFor: 'Bristol and South West organisations that want an agent built into bespoke software by a local engineering team.',
    ask: 'How much of the project is new software and how much is the agent, and how each part is priced.',
  },
  {
    name: 'BCN',
    url: 'https://bcn.co.uk/',
    source: 'https://bcn.co.uk/data-and-ai/ai-agents/',
    group: 'systems',
    region: 'Greater Manchester',
    based: 'Manchester Green, Manchester, with offices also listed in Leeds, Runcorn and Reading',
    type: 'Managed IT and Microsoft services with a data and AI practice',
    clients: 'Its site says it supports over 1,200 customers',
    platforms: 'Microsoft 365, Copilot, Copilot Studio and Azure',
    what: 'AI agents built in Microsoft Copilot Studio, next to managed IT, cloud and security. Its data and AI menu also lists a Pathfinder offer, a Copilot Chat Adoption Programme, AI Kickstarters and language model integration. Its site says it is one of a handful of UK Microsoft partners holding all six designations.',
    bestFor: 'Mid-size organisations in the North that already run on Microsoft 365 and want agents inside it.',
    ask: 'Which Microsoft licences the agents need, and whether your data is ready for Copilot.',
  },
  {
    name: 'FactoryJet (that is us)',
    url: 'https://factoryjet.com/uk/ai-agents',
    source: 'https://factoryjet.com/uk/ai-agents',
    group: 'commerce',
    region: 'Remote',
    based: 'No UK office. We work remotely with UK clients and keep UK working hours',
    type: 'AI agents, AI receptionists and AI inside ecommerce and operations',
    clients: 'Small and mid-size businesses; 500+ businesses served since 2014',
    platforms: 'Shopify, WooCommerce, Xero, Sage, HubSpot, Odoo, NetSuite, SAP Business One, ERPNext, and OpenAI, Anthropic and Google models',
    what: 'We map the process, then design, build and support custom AI agents, AI receptionists and customer service agents inside the tools you already use, with human approval steps. Our strongest ground is where AI meets online stores, order handling, finance and operations. The founder is involved in every project, you own what we build, and we show working software on your own data before a contract.',
    bestFor: 'Ecommerce and operations-heavy SMBs that want one team for the store, the integrations and the AI.',
    ask: 'Whether a remote team suits you. If you need someone on site, pick a UK firm from this list. Ask us, as you would any supplier outside the UK, how personal data is covered.',
  },
];

// One H2 per buyer group. Headings use the wording buyers typed into search
// and AI assistants (measured 9 Oct 2026).
const GROUPS: { key: Firm['group']; heading: string; intro: string }[] = [
  {
    key: 'first',
    heading: 'Which UK companies build custom AI agents for small and mid-size businesses?',
    intro: 'These five suit a small firm buying its first agent or automation. Four of them print the price of the first step on their own site, so you can budget before a call.',
  },
  {
    key: 'product',
    heading: 'I want to add AI agents to my product. Which UK companies can build this?',
    intro: 'These three are software engineering firms. They suit a team that already has a product or an internal system and wants an agent built into it, with logging, tests and a handover to its own developers.',
  },
  {
    key: 'sensitive',
    heading: 'Which UK AI agent developers suit sensitive data and regulated work?',
    intro: 'These three lead with governance: who can see what, where the data sits and how each action is logged. Two of them hold ISO 27001, the information security standard.',
  },
  {
    key: 'systems',
    heading: 'Who can integrate AI agents with our CRM and ERP in the UK?',
    intro: 'These three connect agents to the systems that hold customers, orders, stock and accounts. Read this group if you run a UK manufacturing business and want supplier emails and orders handled.',
  },
  {
    key: 'commerce',
    heading: 'Who provides reliable e-commerce AI agents for automation?',
    intro: 'One entry here, and it is ours, so read it with that in mind. Two firms above also know online retail: Tom&Co built ecommerce platforms for over a decade, and Green Arrow names Shopify among the systems its agents work in. Both have UK offices. We do not.',
  },
];

// Regional view. `where` matches Firm.region; the firm names are derived from
// FIRMS in the render so the two cannot drift. `seen` is what we measured on
// 9 Oct 2026 when we asked AI assistants the buyer question for that place.
const REGIONS: { where: string; seen: string }[] = [
  { where: 'London', seen: "We read 14 answers to the search 'ai agent development company in london'. The page cited most, seven times, was Magora's service page. A list published by an agency came next, with six." },
  { where: 'Greater Manchester', seen: "We read 14 answers to 'Can you recommend an AI agent development company in Manchester?'. The page cited most, six times, was the home page of an agency that is not in this guide. Supersede AI's home page was cited three times." },
  { where: 'Cardiff', seen: "We read 8 answers to 'best agentic ai providers cardiff'. One page, from AI Wales, was cited seven times." },
  { where: 'Bristol', seen: 'Not in our test set. We found and read this firm directly.' },
  { where: 'Glasgow', seen: 'Not in our test set. We found and read this firm directly.' },
  { where: 'Cambridge and Durham', seen: 'Not in our test set as a place. Its AI agents page was cited for two of the UK-wide questions.' },
  { where: 'Newcastle upon Tyne', seen: 'Not in our test set as a place. Its UK page was cited for a manufacturing question.' },
  { where: 'Remote', seen: 'FactoryJet was named or cited in 20 of the 273 answers we read on this topic.' },
];

// Published prices, copied from each firm's own page on 9 Oct 2026.
// These are the firms' figures, not FactoryJet prices.
const PRICES: { firm: string; figure: string; vat: string; source: string }[] = [
  { firm: 'Supersede AI', figure: '90-minute diagnostic with a follow-up report: £250', vat: 'Not stated', source: 'https://supersede.media/' },
  { firm: 'Happy Webs', figure: 'Agent projects from £2,000 for one focused automation; most businesses £5,000 to £15,000; optional retainer from £500 a month', vat: 'Excludes VAT', source: 'https://happywebs.co.uk/services/ai-agents/' },
  { firm: 'Augustova', figure: 'AI audit £2,500 to £6,000; first agent from £4,000; custom software £8,000 to £30,000', vat: 'Not stated', source: 'https://www.augustova.co.uk/' },
  { firm: 'Softomate Solutions', figure: 'Single-agent proof of concept from £6,500; multi-agent platform up to £45,000; care from £399 a month', vat: 'Excludes VAT', source: 'https://www.softomatesolutions.com/agentic-ai-development-london/' },
  { firm: 'Pixelfield', figure: 'Discovery from £5,000; production agent builds typically from around £30,000', vat: 'Not stated', source: 'https://pixelfield.co.uk/ai-development-services/ai-agents-development/' },
  { firm: 'OpenKit', figure: 'AI Audit from £10,000; the build is scoped and priced after the audit', vat: 'Not stated', source: 'https://openkit.co.uk/ai-services/ai-agents' },
  { firm: 'Magora', figure: 'Free prototype, then a discovery sprint from £3,000; one-workflow agent from £20,000; adding AI to an existing application typically £20,000 to £80,000; support £3,500 to £9,000 a month', vat: 'Not stated', source: 'https://magora-systems.com/ai-agent-development-uk/' },
  { firm: 'Ayoob AI', figure: '12-month retainer: existing systems from £4,000 a month, new builds from £6,000', vat: 'Not stated', source: 'https://ayoob.ai/' },
];

const FAQS: FAQItem[] = [
  {
    q: "Which UK companies build custom AI agents for small and mid-size businesses?",
    a: "Fourteen UK firms we checked on 9 October 2026 build agents for smaller businesses. For a small first project: Happy Webs (Greater Manchester), Augustova and Softomate Solutions (London), Flowio (Glasgow) and Supersede AI (Salford). For product teams: Pixelfield, Magora and Geeks Ltd (London). For sensitive data: OpenKit (Cambridge and Durham), Green Arrow (Cardiff) and Ayoob AI (Newcastle). For orders, ERP and Microsoft: Tom&Co (London), New Icon (Bristol) and BCN (Manchester). FactoryJet builds for UK firms remotely.",
  },
  {
    q: "Which companies build custom AI agents in the UK?",
    a: "Custom means the agent is written for your process, as opposed to a ready-made tool you subscribe to. UK firms that describe custom builds on their own sites include Pixelfield, Magora, Geeks Ltd, OpenKit, Ayoob AI, Green Arrow and New Icon. Smaller studios such as Happy Webs, Augustova and Softomate build custom agents at lower entry prices. Ask each one what you own at the end: the code, the prompts and the accounts the agent runs in.",
  },
  {
    q: "Who is the best AI automation agency in the UK?",
    a: "No independent ranking exists, and we do not crown one. On 9 October 2026 we opened six of the UK lists that AI assistants cite, and four put the publisher's own firm first. Choose by fit. Flowio and Happy Webs suit small firms that want their tools connected. Tom&Co suits order-heavy operations. BCN suits Microsoft organisations. Send the same one-page brief to three firms and compare the questions they ask you.",
  },
  {
    q: "What are the best AI automation companies in the UK?",
    a: "The ones worth shortlisting show a UK address, name the systems they connect and say what a first project involves. Among firms we checked: Flowio (Glasgow) for n8n workflows and voice agents, Happy Webs (Greater Manchester) for small-office admin, Softomate Solutions (London) for agent systems at a fixed fee, Tom&Co (London) for manufacturers and distributors, and BCN (Manchester) for Microsoft 365 organisations. Each profile in this guide links the page we read.",
  },
  {
    q: "Which AI automation agencies are considered the best?",
    a: "It depends who is doing the considering. AI assistants mostly repeat lists that agencies publish. When we asked this exact question on 9 October 2026, the eight pages cited most often were all list articles, and none came from a trade body or a regulator. Treat any list, this one included, as a starting point. Then check the firm's own site for an address, named examples and a clear first step.",
  },
  {
    q: "Can you recommend an AI agent development company in London?",
    a: "London firms we verified are Pixelfield on City Road, Magora in Shoreditch, Geeks Ltd in Sutton, Softomate Solutions in Stanmore, Augustova in Fitzrovia and Tom&Co in Shad Thames. Pixelfield and Magora suit product teams. Augustova and Softomate publish entry prices for small firms. Tom&Co suits order-heavy operations. Geeks Ltd suits larger SMEs that want bespoke software around the agent.",
  },
  {
    q: "Can you recommend an AI agent development company in Manchester?",
    a: "Three Greater Manchester options we verified are Happy Webs in Ashton-under-Lyne, Supersede AI at Exchange Quay in Salford, and BCN at Manchester Green. Happy Webs publishes agent prices from £2,000 excluding VAT. Supersede AI starts with a £250 diagnostic. BCN builds agents in Microsoft Copilot Studio for larger organisations. When we put this question to AI assistants, the page cited most often was cited six times across 14 answers and belongs to an agency outside this guide, so expect different names each time you ask.",
  },
  {
    q: "Who are the best agentic AI providers in Cardiff?",
    a: "Green Arrow Consultancy on Cathedral Road is the Cardiff firm on our list. It builds agents with human approval and full logging, and it was founded in 2012. In our test on 9 October 2026, the page cited most often for this question, seven times across eight answers, belonged to AI Wales, a community interest company offering consultancy and training in Cardiff. Agentic AI means software that plans and takes steps towards a goal within limits you set.",
  },
  {
    q: "Which AI agent developers are in Bristol?",
    a: "New Icon, on Victoria Street in Redcliffe, is the Bristol firm on our list. It is a bespoke software company that builds AI agents for internal workflows and knowledge assistants tied to company documents. Ghyston, on Marsh Street in Bristol, offers an AI enablement service that includes bespoke Microsoft Copilot features. Both are software engineering teams first, which suits a project where the agent sits inside a larger system.",
  },
  {
    q: "I want to add AI agents to my product. Which UK companies can build this?",
    a: "Look for a product engineering team, because the agent has to live inside your codebase. Pixelfield (London) writes for CTOs and product leads and prices discovery from £5,000. Magora (London) builds a free coded prototype in 5 to 10 working days. Geeks Ltd (London) pairs agent work with bespoke software. New Icon (Bristol) builds AI into cloud applications. Ask each one who owns the code and how the agent is monitored after release.",
  },
  {
    q: "I run a UK manufacturing business. Who can build an AI agent that handles supplier emails and orders?",
    a: "Tom&Co in London describes this exact job on its manufacturing page: it reads purchase orders, RFQs and enquiries, enters them into your ERP for approval and matches supplier invoices to purchase orders. Happy Webs in Greater Manchester shows a fabrication example on its AI page. Magora builds agents that work across CRM and ERP. FactoryJet builds order and RFQ agents remotely and has worked with Odoo, NetSuite, SAP Business One and ERPNext.",
  },
  {
    q: "Is there an AI automation agency for small UK manufacturers?",
    a: "Yes. Tom&Co lists manufacturing and distribution among its 15 sectors and puts a first build at two to four weeks. Happy Webs publishes prices and shows a fabrication firm on its AI page. New Icon in Bristol shows a system that predicts machine faults. Start with the paperwork around production, such as order entry or supplier invoice matching, which is where Tom&Co says its first builds usually begin.",
  },
  {
    q: "Who can integrate AI agents with our CRM and ERP in the UK?",
    a: "Tom&Co connects Copilot, Gemini, ChatGPT, Claude or custom agents to CRM, ERP, finance and job systems. Magora builds agents that work across CRM and ERP. Softomate adds AI to Odoo, HubSpot, Salesforce and GoHighLevel. Geeks Ltd builds bespoke CRM and ERP software as well as agents. BCN works inside Microsoft 365. Ask which of your systems each firm has connected before, and whether the agent writes records or only reads them.",
  },
  {
    q: "Who provides reliable e-commerce AI agents for automation?",
    a: "Reliable means the agent has been tested on your real orders and a person approves the risky actions. Among UK firms in this guide, Green Arrow in Cardiff names Shopify among the systems its agents work in, and Tom&Co in London built ecommerce platforms for over a decade before moving into AI. FactoryJet builds online stores and the agents inside them for UK brands, working remotely. Ask any provider to show logs from a live agent that handles refunds or stock changes.",
  },
  {
    q: "How much does it cost to build a custom AI agent in the UK?",
    a: "Figures the firms publish themselves, read on 9 October 2026, start at £2,000 for one focused automation (Happy Webs) and £4,000 for a first agent (Augustova). Softomate prices a single-agent proof of concept from £6,500. Magora prices a one-workflow agent from £20,000, and Pixelfield says production builds typically start around £30,000. Most exclude VAT or do not say. Our UK AI cost guide explains what moves the price up or down.",
  },
  {
    q: "Do UK AI agencies publish their prices?",
    a: "Eight of the fourteen UK firms we profile publish at least one figure on their own site. They run from a £250 diagnostic (Supersede AI) and £2,000 for one automation (Happy Webs) to £20,000 to £80,000 for adding AI to an existing application (Magora). The other six quote after a call. The price table in this guide copies each figure with a link to its source and notes whether VAT is included.",
  },
  {
    q: "What is an AI automation agency?",
    a: "An AI automation agency is a firm that connects AI to the software a business already uses, so routine steps such as reading emails, filling in records and drafting replies happen without retyping. It maps the process, builds the connections, tests them on real cases and looks after them once they are live. Unlike a software vendor, it shapes the work to your process, and you should own the result.",
  },
  {
    q: "What do AI automation agencies do?",
    a: "Day to day, they do four jobs. They map how a task runs today. They build the automation or agent inside your existing tools. They test it on your real, messy examples, with a person approving the risky steps. They watch it after launch, because the software it connects to changes and automations break quietly. Our explainer on what an AI automation agency does walks through each step for UK firms.",
  },
  {
    q: "What are the biggest AI companies in the UK?",
    a: "That is a different list from this one. The government's AI Sector Study 2024, published on 3 September 2025, counted more than 5,800 AI companies in the UK with revenue of £23.9 billion, and named Amazon, Google DeepMind, IBM and Meta as adding most to revenue and employment. Those are platform and research companies. A 20-person firm that wants a custom agent built usually needs an agency like the ones in this guide.",
  },
  {
    q: "How long does it take to build an AI agent in the UK?",
    a: "The firms that publish timelines give a wide range. Tom&Co puts a first build for a manufacturer at two to four weeks. Pixelfield says six to ten weeks to a live system after one to two weeks of discovery. Softomate quotes 4 to 16 weeks. Green Arrow says a first agent in production usually takes eight to fourteen weeks, and that the slow part is getting access to your systems and agreeing what the agent may do without a person.",
  },
  {
    q: "Should I choose a UK-based AI agency or a remote one?",
    a: "Choose a UK-based firm if you want workshops on site, or if your contract or sector requires a UK supplier. A remote team can work well when the project is software only. If a separate organisation outside the UK receives or can access personal data, the ICO calls that a restricted transfer, and it must be covered by one of the transfer mechanisms in its guide. Ask for that answer in writing. FactoryJet is remote and can host AI builds in the UK or EU.",
  },
  {
    q: "Do UK data protection rules apply to AI agents?",
    a: "Yes, whenever the agent handles personal data. The ICO's guidance on AI and data protection says the accountability principle makes you responsible for complying with data protection law, and for showing that you comply, in any AI system that processes personal data. It calls a data protection impact assessment an ideal way to show it. The ICO notes this guidance is under review after the Data (Use and Access) Act. Ask your agency who is the controller and who is the processor.",
  },
  {
    q: "Can an AI agent make decisions about customers on its own?",
    a: "Take care here. The ICO's draft guidance on automated decision-making, updated on 31 March 2026 after the Data (Use and Access) Act 2025, covers decisions made by software alone that have a significant effect on a person. Its safeguards section covers telling people about the decision, letting them make representations, human intervention and a way to contest it. The simple route for a small firm is to keep a person approving anything that affects a customer in a serious way.",
  },
  {
    q: "What is the difference between an AI agent and a chatbot?",
    a: "A chatbot answers questions. An agent takes actions in your systems, such as raising an order, updating a record or booking a job, and chooses the next step as it goes. Three UK firms on this list, OpenKit, Pixelfield and Green Arrow, say on their own pages that a simple workflow or script is sometimes the better choice. If the steps never change, you may not need an agent at all.",
  },
  {
    q: "Do I own the AI agent after it is built?",
    a: "You should, and several firms say so on their sites. Ayoob AI writes that the code is yours outright. Augustova says you own the code from day one. Flowio describes its work as owned by you, not rented. FactoryJet clients own what we build. Put it in the contract: the code, the prompts, the automation accounts and the data. If the agent lives in the agency's account, you are renting it.",
  },
  {
    q: "Which UK AI agencies build AI receptionists and voice agents?",
    a: "Flowio in Glasgow builds voice agents that take calls, look things up, book and transfer to your team. Softomate Solutions in London lists AI voice agent development and WhatsApp chatbots. Happy Webs in Greater Manchester sells its own AI receptionist. FactoryJet builds AI receptionists for UK firms remotely. Ask any of them how the agent hands a caller to a person and where call recordings are stored.",
  },
  {
    q: "Which UK AI agencies work with Microsoft Copilot Studio?",
    a: "BCN, based in Manchester, builds agents in Copilot Studio, and its site says it holds all six Microsoft partner designations. Tom&Co in London connects Microsoft Copilot to CRM, ERP and job systems. Ghyston in Bristol builds bespoke Copilot features. If your firm already pays for Microsoft 365, ask what extra licences an agent needs before you compare quotes.",
  },
  {
    q: "How many UK businesses use AI?",
    a: "The Office for National Statistics reported on 20 July 2026 that self-reported AI use among UK businesses with 10 or more employees rose from around 12% to around 35% since late 2023. Among businesses with 0 to 9 employees, 28% reported using at least one AI technology. The ONS lists difficulty identifying business use cases among the most common barriers, and that is the first thing a good agency should help you with.",
  },
  {
    q: "Is it safe to pick an agency that an AI assistant recommended?",
    a: "Treat it as a lead. In our test on 9 October 2026, list articles made up 48% of the small-firm pages Perplexity cited for these questions, 46% for the Gemini app, 38% for Google AI Mode and AI Overviews, and 18% for the ChatGPT app. Four of the six lists we opened put the publisher's own firm first. Check the firm's own site for a UK address and a company number, look for named examples, and ask to speak with a current client before you sign.",
  },
];

export const post: BlogPost = {
  id: '750',
  slug: 'best-ai-agent-development-companies-uk-2026',
  title: 'Best AI Agent Development Companies and AI Automation Agencies in the UK (2026): 15 Compared',
  excerpt:
    'A fact-checked guide to UK firms that build AI agents and AI automation for small and mid-size businesses, in London and the regions. Where each one is based, who it suits, which systems it works with, what it publishes about price, and how to choose. FactoryJet is on the list and says so.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Oct 9, 2026',
  readTime: '21 min read',
  imageUrl: `${IMG}-hero.webp`,
  imageAlt:
    'A grey-haired man at an oak desk looks at a monitor showing five coloured rows, three marked with green ticks, with a small workshop visible through a glass wall behind him',
  meta: {
    title: 'Best AI Agent Development Companies UK 2026 | FactoryJet',
    description:
      'Compare 15 UK AI agent development companies and AI automation agencies: where each is based, who it suits, published prices and how to choose.',
  },
  keyTakeaways: [
    'There is no single best AI agent development company in the UK. Match the firm to your size, your systems and how sensitive your data is.',
    "Every fact below was read on each firm's own website on 9 October 2026. None of them paid to be here, and the order is not a ranking.",
    'Eight of the fourteen UK firms publish a price on their own site. First steps run from a £250 diagnostic to a £10,000 audit, and build figures from £2,000 for one automation to £20,000 to £80,000 for adding AI to an existing application.',
    'The ONS says AI use among UK businesses with 10 or more employees rose from around 12% to around 35% since late 2023.',
    'FactoryJet is on this list. We have no UK office and work remotely; if you need someone on site, choose a UK firm.',
  ],
  faqs: FAQS,
  content: (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              '@id': PAGE_URL,
              url: PAGE_URL,
              name: 'Best AI Agent Development Companies and AI Automation Agencies in the UK (2026): 15 Compared',
              description:
                'Compare 15 UK AI agent development companies and AI automation agencies: where each is based, who it suits, published prices and how to choose.',
              inLanguage: 'en-GB',
              datePublished: '2026-10-09',
              dateModified: '2026-10-09',
              isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com' },
              publisher: { '@id': 'https://factoryjet.com/#organization' },
              about: { '@type': 'Thing', name: 'AI agent development companies and AI automation agencies in the United Kingdom' },
              speakable: {
                '@type': 'SpeakableSpecification',
                cssSelector: ['#answer-first', 'h1', 'h2'],
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'AI agent development companies and AI automation agencies in the UK compared (2026)',
              itemListOrder: 'https://schema.org/ItemListUnordered',
              numberOfItems: FIRMS.length,
              itemListElement: FIRMS.map((a, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: a.name,
                url: a.url,
              })),
            },
          ]),
        }}
      />

      <div id="answer-first" className="mb-8 rounded-2xl border border-gray-200 bg-gray-50 p-6 not-prose">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#B23E13] mb-2">The short answer</p>
        <p className="text-gray-800 leading-relaxed mb-3">
          There is no single best AI agent development company in the UK. For a small first agent with published prices, look at Happy Webs, Augustova and Softomate. For product teams, Pixelfield and Magora. For sensitive data, OpenKit and Ayoob AI. For orders and ERP, Tom&amp;Co. For Microsoft, BCN. For AI inside an online store, FactoryJet, which works remotely.
        </p>
        <p className="text-gray-800 leading-relaxed mb-3">
          We read every firm&rsquo;s own website on 9 October 2026: where it is based, what it builds, who it serves and any prices it publishes. Nobody paid to be listed and the order is not a ranking. FactoryJet wrote this guide and is on it, last.
        </p>
        <p className="text-gray-800 leading-relaxed">
          For a second opinion on your own shortlist, <a href="/contact" className="text-[#B23E13] underline font-semibold">talk to the founder</a>.
        </p>
      </div>

      <p className="mb-4">
        Ask ChatGPT, Perplexity or Gemini for an AI agent development company in the UK and you get different names each time. We know because we asked. On 9 October 2026 we put UK buyer questions about AI agents and AI automation to ChatGPT, Claude, Gemini, Perplexity, Google AI Mode and Google AI Overviews, and logged every page they cited. FactoryJet was named or cited in 20 of the 273 answers we read on this topic. List articles made up 48% of the small-firm pages Perplexity cited, 46% for the Gemini app, 38% for Google AI Mode and AI Overviews, and 18% for the ChatGPT app.
      </p>
      <p className="mb-4">
        So we opened six of those lists. Four put the publisher&rsquo;s own firm first. Two name Accenture, which is a fair answer for a bank and a poor one for a 20-person firm. This guide does the slow part. It covers 14 UK firms that build for small and mid-size businesses, each read on its own website, with every fact dated and linked to the page it came from.
      </p>
      <p className="mb-4">
        <strong>A note on honesty.</strong> FactoryJet builds AI agents, so we are on this list. We put ourselves last, we say plainly that we have no UK office, and we tell you when a UK firm will suit you better. Listing yourself is common on pages like this one. It is also a reason to read every list, ours included, with care.
      </p>
      <p className="mb-6">
        A few terms first, in plain English. An <strong>AI agent</strong> is software that takes actions in your systems, such as raising an order or booking a job, and does more than chat. An <strong>AI agent development company</strong> writes that software for you. An <strong>AI automation agency</strong> connects AI to the tools you already use so routine steps happen without retyping. A <strong>CRM</strong> is the system that holds your customers and deals, and an <strong>ERP</strong> is the one that holds orders, stock and accounts. Most firms below do some of each.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">The shortlist at a glance</h2>
      <p className="mb-4">
        Scan this first. Find the rows that match your size, your main software and where you are, then read those profiles in full.
      </p>
      <div className="overflow-x-auto mb-8 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Firm</th>
              <th className="p-3 text-left border border-gray-700">Focus</th>
              <th className="p-3 text-left border border-gray-700">Typical client</th>
              <th className="p-3 text-left border border-gray-700">Systems and tools named</th>
              <th className="p-3 text-left border border-gray-700">Where based</th>
            </tr>
          </thead>
          <tbody>
            {FIRMS.map((a) => (
              <tr key={a.name} className={a.name.startsWith('FactoryJet') ? 'bg-orange-50' : 'odd:bg-white even:bg-gray-50'}>
                <td className="p-3 border border-gray-200 font-semibold align-top">{a.name}</td>
                <td className="p-3 border border-gray-200 align-top">{a.type}</td>
                <td className="p-3 border border-gray-200 align-top">{a.clients}</td>
                <td className="p-3 border border-gray-200 align-top">{a.platforms}</td>
                <td className="p-3 border border-gray-200 align-top">{a.based}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">What is an AI automation agency, and what do AI automation agencies do?</h2>
      <p className="mb-4">
        An AI automation agency connects AI to the software your business already runs, so that reading an email, filling in a record or drafting a reply no longer needs a person to retype anything. The work has four parts: map how the task runs today, build the automation inside your existing tools, test it on your real examples with a person approving the risky steps, and look after it once it is live.
      </p>
      <p className="mb-6">
        An AI agent goes one step further than a fixed automation, because it chooses its next step as it goes. Three firms in this guide say on their own pages that you may not need one. OpenKit lists the cases where it will talk you out of an agent, Pixelfield says a workflow tool is enough for simple jobs, and Green Arrow says a plain script is sometimes the better answer. For the longer version, read <a href="/blog/what-does-an-ai-automation-agency-do-uk" className="text-[#B23E13] underline">what an AI automation agency does for a UK business</a>.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">How we built this list</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Start with what buyers ask.</strong> The questions came from our UK Search Console data, from the question boxes Google shows for searches such as &ldquo;ai automation agency&rdquo;, and from prompts we wrote for the UK market. We read the answers on 9 October 2026 and logged every company and page named.</li>
        <li><strong>Keep firms that show a UK base on their own site.</strong> All 14 name a UK street, building or district. Overseas firms with a UK landing page were left out, with one disclosed exception: us.</li>
        <li><strong>Builders only.</strong> Every firm here writes or configures the agent itself. Firms that only advise are on our sister guide to <a href="/blog/best-ai-consultancies-uk-2026" className="text-[#B23E13] underline">the best AI consultancies in the UK</a>.</li>
        <li><strong>Read the source.</strong> Every description comes from the firm&rsquo;s own pages, opened on 9 October 2026 and linked on each profile. One site refused our script, so we read it in a browser.</li>
        <li><strong>No scores we cannot prove.</strong> We have not hired these firms, so there are no star ratings. We tell you who each one suits and a question worth asking it.</li>
        <li><strong>Prices only from the firm.</strong> Where a firm publishes a price, we copy it and link the page. We never guess another company&rsquo;s price.</li>
      </ol>

      {GROUPS.map((g) => (
        <div key={g.key}>
          <h2 className="text-2xl font-bold mt-10 mb-4">{g.heading}</h2>
          <p className="mb-6">{g.intro}</p>
          {FIRMS.filter((a) => a.group === g.key).map((a) => (
            <section key={a.name} className="mb-8">
              <h3 className="text-xl font-bold mt-6 mb-2">{a.name}</h3>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Based:</strong> {a.based}. <strong>Type:</strong> {a.type}.
              </p>
              <p className="mb-3">{a.what}</p>
              <ul className="list-disc pl-6 mb-3 space-y-1">
                <li><strong>Best for:</strong> {a.bestFor}</li>
                <li><strong>Systems and tools named:</strong> {a.platforms}</li>
                <li><strong>Worth asking them:</strong> {a.ask}</li>
              </ul>
              <p className="text-sm text-gray-600">
                Source, read 9 October 2026: <a href={a.source} className="text-[#B23E13] underline" rel="noopener" target={a.source.startsWith('https://factoryjet.com') ? undefined : '_blank'}>{a.source.replace('https://', '')}</a>
              </p>
              {a.name === 'Supersede AI' && (
                <figure className="my-8 not-prose">
                  <img
                    src={`${IMG}-workshop.webp`}
                    width={1200}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    alt="Two people seen from behind at a white meeting table look at a wall screen showing six boxes joined by arrows, and one of them points at it with an orange pen"
                    className="w-full h-auto rounded-xl"
                  />
                  <figcaption className="text-sm text-gray-600 mt-2">A first session should end with one process drawn step by step, and the step an agent would take over marked on it.</figcaption>
                </figure>
              )}
              {a.name === 'Tom&Co' && (
                <figure className="my-8 not-prose">
                  <img
                    src={`${IMG}-orders.webp`}
                    width={1200}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    alt="A woman with red hair at a desk looks at a monitor showing a document beside a list of six rows, five with green ticks and one with an orange flag, with warehouse shelving behind"
                    className="w-full h-auto rounded-xl"
                  />
                  <figcaption className="text-sm text-gray-600 mt-2">Order entry is a common first job for an agent: it reads the document, fills in the lines it is sure of and flags the one it is not.</figcaption>
                </figure>
              )}
            </section>
          ))}
        </div>
      ))}

      <p className="mb-6">
        FactoryJet services for UK businesses: <a href="/uk/ai-agents" className="text-[#B23E13] underline">AI agent development in the UK</a>, <a href="/uk/ai-receptionist" className="text-[#B23E13] underline">AI receptionists</a>, <a href="/uk/ai-development" className="text-[#B23E13] underline">custom AI development</a> and <a href="/uk/ai-consulting" className="text-[#B23E13] underline">AI consulting</a>.
      </p>

      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 mb-8 not-prose">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#B23E13] mb-2">A free second opinion</p>
        <p className="text-gray-800 leading-relaxed mb-3">
          Send us the one task your team repeats most. On a free call, the founder will tell you whether it needs an AI agent, a simpler automation or no AI at all, and which kind of firm on this page fits, even if that is not us.
        </p>
        <a href="/contact" className="inline-block rounded-lg bg-[#B23E13] px-5 py-3 font-semibold text-white">Talk to the Founder</a>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">AI agent development companies in London, Manchester, Cardiff and Bristol</h2>
      <p className="mb-4">
        Buyers ask by city, so here is the same list by place. The right-hand column is what we saw on 9 October 2026 when we put that city&rsquo;s question to AI assistants.
      </p>
      <div className="overflow-x-auto mb-4 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Where</th>
              <th className="p-3 text-left border border-gray-700">Firms in this guide</th>
              <th className="p-3 text-left border border-gray-700">What AI assistants cited when we asked</th>
            </tr>
          </thead>
          <tbody>
            {REGIONS.map((r) => (
              <tr key={r.where} className={r.where === 'Remote' ? 'bg-orange-50' : 'odd:bg-white even:bg-gray-50'}>
                <td className="p-3 border border-gray-200 font-semibold align-top">{r.where}</td>
                <td className="p-3 border border-gray-200 align-top">{FIRMS.filter((a) => a.region === r.where).map((a) => a.name).join(', ')}</td>
                <td className="p-3 border border-gray-200 align-top">{r.seen}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-6">
        London has the most names, and the official figures explain why. The government&rsquo;s <a href="https://www.gov.uk/government/publications/artificial-intelligence-sector-study-2024/artificial-intelligence-sector-study-2024" className="text-[#B23E13] underline" rel="noopener" target="_blank">AI Sector Study 2024</a>, published on 3 September 2025, found that London, the South East and the East of England account for about 75% of AI companies&rsquo; registered offices, while the number of AI firms in other UK regions has been growing by 20% to 50% a year. If you are outside London, the choice near you is growing.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">How much does it cost to build a custom AI agent in the UK?</h2>
      <p className="mb-4">
        Most firms quote after a call. Eight of the fourteen UK firms in this guide publish at least one figure on their own site. We copied them on 9 October 2026. These are each firm&rsquo;s own published figures. They are not FactoryJet prices and they are not a market survey. Check the source before you rely on one, because firms change their prices.
      </p>
      <div className="overflow-x-auto mb-4 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Firm</th>
              <th className="p-3 text-left border border-gray-700">Published figure (GBP)</th>
              <th className="p-3 text-left border border-gray-700">VAT, as stated on the page</th>
              <th className="p-3 text-left border border-gray-700">Source (read 9 Oct 2026)</th>
            </tr>
          </thead>
          <tbody>
            {PRICES.map((p) => (
              <tr key={p.firm} className="odd:bg-white even:bg-gray-50">
                <td className="p-3 border border-gray-200 font-semibold align-top">{p.firm}</td>
                <td className="p-3 border border-gray-200 align-top">{p.figure}</td>
                <td className="p-3 border border-gray-200 align-top">{p.vat}</td>
                <td className="p-3 border border-gray-200 align-top">
                  <a href={p.source} className="text-[#B23E13] underline" rel="noopener" target="_blank">{p.source.replace('https://', '')}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-4">
        <strong>How to read this.</strong> The small figures buy a diagnostic, an audit or a single automation between two tools. The large ones buy custom software, several connected systems and support. Only two of the eight pages say their prices exclude VAT, so ask the other six. Two firms, Softomate and Ayoob AI, state that platform, hosting or model usage costs sit outside their fee. Assume the same of everyone until told otherwise.
      </p>
      <p className="mb-6">
        For sourced market ranges covering agents, chatbots, receptionists and consulting day rates, read our <a href="/blog/ai-cost-uk-2026" className="text-[#B23E13] underline">AI cost guide for the UK (2026)</a>. FactoryJet does not publish a rate card. We quote a fixed price in writing after a short scoping call.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Which type of UK AI firm fits your business?</h2>
      <p className="mb-4">The five groups above cover most buyers. Four more situations come up often. Find the line that sounds like you.</p>
      <div className="grid gap-3 mb-8 not-prose">
        <div className="rounded-xl border border-gray-200 p-4 hover:border-[#B23E13] transition-colors">
          <p className="font-semibold mb-1">&ldquo;We run on Microsoft 365 and want agents inside it.&rdquo;</p>
          <p className="text-gray-700 text-sm">BCN builds in Copilot Studio. Tom&amp;Co connects Copilot to your other systems.</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-4 hover:border-[#B23E13] transition-colors">
          <p className="font-semibold mb-1">&ldquo;We miss calls and want an AI receptionist or voice agent.&rdquo;</p>
          <p className="text-gray-700 text-sm">Flowio and Softomate build voice agents, and Happy Webs sells its own. FactoryJet builds <a href="/uk/ai-receptionist" className="text-[#B23E13] underline">AI receptionists</a> for UK firms.</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-4 hover:border-[#B23E13] transition-colors">
          <p className="font-semibold mb-1">&ldquo;We sell online and want AI in orders, support and the store itself.&rdquo;</p>
          <p className="text-gray-700 text-sm">A team that builds stores as well as agents. That is FactoryJet&rsquo;s main ground; see <a href="/uk/ai-development" className="text-[#B23E13] underline">custom AI development in the UK</a>.</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-4 hover:border-[#B23E13] transition-colors">
          <p className="font-semibold mb-1">&ldquo;We do not know yet what to automate.&rdquo;</p>
          <p className="text-gray-700 text-sm">Start with advice. See <a href="/uk/ai-consulting" className="text-[#B23E13] underline">AI consulting in the UK</a>, or one of the paid diagnostics in the price table above.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">How to choose an AI agent development company in the UK: 6 steps</h2>
      <p className="mb-4">Open each step for the detail.</p>
      <div className="space-y-3 mb-8 not-prose">
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">1. Write down one task</summary>
          <p className="mt-3 text-gray-700">Pick the task your team repeats most and complains about most. Note what starts it, which systems it touches, how often it happens and what a good result looks like. One page is enough. Happy Webs lists the kind of loop that works well as a first job: enquiry triage, quote follow-up, document routing, invoice checks and job updates.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">2. Compare the first paid step</summary>
          <p className="mt-3 text-gray-700">We found six different first steps on these sites: a free scoping call (Softomate), a £250 diagnostic (Supersede AI), an audit from £2,500 (Augustova), a discovery sprint from £3,000 after a free prototype (Magora), a discovery from £5,000 (Pixelfield) and an audit from £10,000 (OpenKit). Ask each firm what you hold at the end of that step if you go no further.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">3. Send the same brief to three firms</summary>
          <p className="mt-3 text-gray-700">Use the two tables above to pick three firms whose typical client looks like you. A 12-person fabricator and a 400-person Microsoft organisation need different firms. Send each the same page on the same day. Good firms ask about exceptions (&ldquo;what happens when the purchase order has no part number?&rdquo;), about data access and about who approves the output.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">4. Ask who builds it, and with what</summary>
          <p className="mt-3 text-gray-700">Meet the engineer as well as the salesperson. Pixelfield promises a named technical lead, and Magora says the same senior engineers stay from the first workshop to handover. Ask whether the agent is custom code or sits on a workflow tool such as n8n, because that decides who else could maintain it later.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">5. Settle ownership, hosting and data before price</summary>
          <p className="mt-3 text-gray-700">Get four answers in writing. Who owns the code, the prompts and the automation accounts? Where is your data stored and processed? Can the AI provider train on it? Who is the controller and who is the processor under UK data protection law? The next section links the ICO pages that cover this.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">6. Plan for month three</summary>
          <p className="mt-3 text-gray-700">The software your agent connects to will change, and automations break quietly. Published support fees on these sites run from £399 a month (Softomate) and £500 a month (Happy Webs) to £3,500 to £9,000 a month (Magora), which shows how far the scope can differ. Ask who watches for failed runs and how fast they respond.</p>
        </details>
      </div>

      <figure className="my-8 not-prose">
        <img
          src={`${IMG}-approve.webp`}
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          alt="A woman with curly silver hair stands at a packing bench holding a tablet that shows a green tick button and a grey cross button, beside three plain brown parcels"
          className="w-full h-auto rounded-xl"
        />
        <figcaption className="text-sm text-gray-600 mt-2">Keep a person on the approve button for anything that sends money, changes stock or speaks to a customer, at least for the first months.</figcaption>
      </figure>

      <h2 className="text-2xl font-bold mt-10 mb-4">UK firm, remote team or large consultancy: an honest comparison</h2>
      <div className="overflow-x-auto mb-8 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700"></th>
              <th className="p-3 text-left border border-gray-700">UK specialist firm</th>
              <th className="p-3 text-left border border-gray-700">Large consultancy</th>
              <th className="p-3 text-left border border-gray-700 bg-[#B23E13]">Remote specialist (e.g. FactoryJet)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Who you work with</td>
              <td className="p-3 border border-gray-200">A small team, often the founder or a named lead</td>
              <td className="p-3 border border-gray-200">A large team with partners and juniors</td>
              <td className="p-3 border border-gray-200 bg-orange-50">The founder on every project, with no handover to a junior team</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">On-site workshops</td>
              <td className="p-3 border border-gray-200">Easy in their region. Tom&amp;Co and Ayoob AI both offer discovery in person</td>
              <td className="p-3 border border-gray-200">Yes, nationally</td>
              <td className="p-3 border border-gray-200 bg-orange-50">No. Video workshops in UK working hours</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Best project size</td>
              <td className="p-3 border border-gray-200">One to a few workflows</td>
              <td className="p-3 border border-gray-200">Large programmes over several years</td>
              <td className="p-3 border border-gray-200 bg-orange-50">One workflow, up to store, integrations and agents together</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Data and hosting</td>
              <td className="p-3 border border-gray-200">UK entity and UK contract. Several offer UK-region or on-premise hosting</td>
              <td className="p-3 border border-gray-200">Formal frameworks and deep governance teams</td>
              <td className="p-3 border border-gray-200 bg-orange-50">UK or EU hosting on request. Ask how access from outside the UK is covered</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Watch out for</td>
              <td className="p-3 border border-gray-200">Reliance on one or two people in a small team</td>
              <td className="p-3 border border-gray-200">Budgets sized for large organisations</td>
              <td className="p-3 border border-gray-200 bg-orange-50">No UK office. Not right if you need people on site</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">UK rules every AI agency should raise with you</h2>
      <p className="mb-4">
        A good firm brings these up before you do. If yours does not, ask. We read each page below on 9 October 2026.
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><strong>You stay accountable.</strong> The ICO&rsquo;s <a href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/what-are-the-accountability-and-governance-implications-of-ai/" className="text-[#B23E13] underline" rel="noopener" target="_blank">guidance on AI and data protection</a> says the accountability principle makes you responsible for complying with data protection law, and for showing that you comply, in any AI system that processes personal data. It calls a data protection impact assessment an ideal way to show it. The ICO notes that this guidance is under review after the Data (Use and Access) Act.</li>
        <li><strong>Decisions made by software alone.</strong> The ICO&rsquo;s <a href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/automated-decision-making/what-are-the-adm-safeguards/" className="text-[#B23E13] underline" rel="noopener" target="_blank">draft guidance on automated decision-making</a>, updated on 31 March 2026, covers solely automated decisions with significant effects on a person. Its safeguards section covers information about the decision, a way to make representations, human intervention and a way to contest it.</li>
        <li><strong>Data that leaves the UK.</strong> The ICO&rsquo;s <a href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/international-transfers/a-brief-guide-to-international-transfers/" className="text-[#B23E13] underline" rel="noopener" target="_blank">brief guide to international transfers</a>, dated 15 January 2026, says people risk losing the protection of UK data protection law if their personal information is sent, or made accessible, outside the UK, and that every restricted transfer must be covered by a transfer mechanism. This applies to the AI provider behind the agent and to any supplier outside the UK, including us.</li>
        <li><strong>Registration.</strong> The ICO says organisations that use personal information need to pay a <a href="https://ico.org.uk/for-organisations/data-protection-fee/" className="text-[#B23E13] underline" rel="noopener" target="_blank">data protection fee</a> unless they are exempt. Asking a UK agency for its ICO registration number takes one email, and GOV.UK lets you <a href="https://www.gov.uk/get-information-about-a-company" className="text-[#B23E13] underline" rel="noopener" target="_blank">look up a company&rsquo;s details for free</a>.</li>
      </ul>
      <p className="mb-6">
        Some context on timing. The <a href="https://www.ons.gov.uk/businessindustryandtrade/business/businessservices/articles/artificialintelligenceinukbusinesses/2023to2026" className="text-[#B23E13] underline" rel="noopener" target="_blank">Office for National Statistics</a> reported on 20 July 2026 that self-reported AI use among UK businesses with 10 or more employees has risen from around 12% to around 35% since late 2023, and that 28% of businesses with 0 to 9 employees use at least one AI technology. More of your competitors have started than two years ago. Ask any firm for a real, running example before you trust a polished claim.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Five warning signs when you talk to an AI agency</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>A canned demo.</strong> A demo on someone else&rsquo;s data proves little. Ask to see it run on one of your own messy examples.</li>
        <li><strong>Nobody will say when an agent is the wrong tool.</strong> Three firms in this guide say so on their own pages. Treat silence on this point as a flag.</li>
        <li><strong>Vague ownership.</strong> If the automation lives in the agency&rsquo;s account, you are renting your own operations. Ask for admin access from day one.</li>
        <li><strong>No human approval step.</strong> Anything that sends money, gives advice or speaks to customers should have a person approving it, at least at first.</li>
        <li><strong>No UK base you can check.</strong> Every UK firm above names a street, building or district on its own site. If you cannot find one, or a company number, ask why.</li>
      </ol>

      <h2 className="text-2xl font-bold mt-10 mb-4">Where FactoryJet fits, and where it does not</h2>
      <p className="mb-4">
        We are FactoryJet. We have served 500+ businesses since 2014, most of that time in commerce: online stores, B2B ordering and the operations behind them. Our founder, Bhavesh Barot, is involved in every project. We design, build, integrate and support AI agents, AI receptionists and customer service agents, and you own everything we build.
      </p>
      <p className="mb-4">
        <strong>Where we fit:</strong> UK SMBs that sell online or run order-heavy operations and want one team for the store, the integrations (Shopify, Xero, Sage, HubSpot, Odoo) and the AI. Before a contract, we show working software on your own data. We quote a fixed price in writing after a short scoping call, and we stay on after launch.
      </p>
      <p className="mb-4">
        <strong>Where we do not:</strong> We have no UK office. We work remotely in UK working hours. If you need people in your building, choose one of the UK firms above. If your project is a Microsoft Copilot roll-out, BCN is a more natural fit. If your data must stay on your own machines, look at Ayoob AI or OpenKit. If your own engineers will maintain the agent inside your product, Pixelfield and Magora write for exactly that buyer.
      </p>
      <p className="mb-6">
        If you are still working out what you need, these explain the options in plain English: <a href="/blog/how-to-build-an-ai-agent-uk-2026" className="text-[#B23E13] underline">how to build an AI agent in the UK</a> and <a href="/blog/what-does-an-ai-automation-agency-do-uk" className="text-[#B23E13] underline">what an AI automation agency does</a>.
      </p>

      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 mb-8 not-prose">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#B23E13] mb-2">If you are not sure which type of firm you need</p>
        <p className="text-gray-800 leading-relaxed mb-3">
          Send us the one task your team repeats most. On a free call, the founder will tell you whether it needs an AI agent, a simpler automation or no AI at all, and which kind of firm fits, even if that is not us.
        </p>
        <a href="/contact" className="inline-block rounded-lg bg-[#B23E13] px-5 py-3 font-semibold text-white">Talk to the Founder</a>
      </div>
    </>
  ),
};

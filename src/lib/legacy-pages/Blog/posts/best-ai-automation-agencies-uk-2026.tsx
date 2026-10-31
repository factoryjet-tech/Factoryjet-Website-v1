import visualQa from './best-ai-automation-agencies-uk-2026.visual-qa.module.css';
import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

const PAGE_URL = 'https://factoryjet.com/blog/best-ai-automation-agencies-uk-2026';
const IMG = '/images/blog/best-ai-automation-agencies-uk-2026';
const TITLE = 'Best AI Automation Agencies in the UK (2026): 13 Compared, Including Us';
const META_DESCRIPTION =
  'Compare 13 AI automation agencies for UK small and mid-size businesses: where each is based, tools, published project prices and how to choose.';

// Every fact about every firm below was read on that firm's own website on
// 11 October 2026 (URL in `source`, plus `also` where a second page on the
// same site was used; the quote behind each claim is in the research ledger
// kept outside the repo). Nothing here is paid placement. The order is NOT a
// ranking; firms are grouped by the kind of buyer they suit. The shortlist
// table, the profiles, the by-place table and the ItemList schema all map
// from this same array.
interface Firm {
  name: string;
  url: string;
  source: string;
  also?: string;
  group: 'small' | 'sales' | 'engineers' | 'midsize' | 'commerce';
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
    name: 'Flowio',
    url: 'https://www.flowio.co.uk/',
    source: 'https://www.flowio.co.uk/',
    group: 'small',
    region: 'Scotland',
    based: '48 West George Street, Glasgow; registered in Scotland',
    type: 'Workflow automation, AI voice agents and custom internal tools',
    clients: 'Teams that have outgrown spreadsheets; it names trades and home services, property, construction and engineering, and marketing agencies, and says it has helped 20+ UK businesses',
    platforms: 'n8n, Python and OpenAI; Xero and QuickBooks for invoice data',
    what: 'Custom n8n and Python workflows that move work between the tools a business already pays for, plus voice agents and chatbots that answer, look things up, book and transfer calls. Its site says it runs 340+ live automations and that it is an OpenAI Select Partner. Most clients start with a discovery step that maps their procedures before any code is written. It says most basic automations go live within two weeks, and it publishes a starting price (see the price table below).',
    bestFor: 'Small firms in Scotland and across the UK that want enquiries, quotes and invoices handled by custom n8n workflows.',
    ask: 'Which of your tools it has connected before, and how a voice agent hands a caller to your team.',
  },
  {
    name: 'Antek Automation',
    url: 'https://www.antekautomation.com/',
    source: 'https://www.antekautomation.com/pricing',
    also: 'https://www.antekautomation.com/about',
    group: 'small',
    region: 'South East England',
    based: 'Chantry House, Chantry Way, Andover, Hampshire, working UK-wide',
    type: 'AI receptionists, website chatbots and n8n workflow automation',
    clients: 'UK small businesses; it lists receptionist set-ups for plumbers, electricians, heating and cooling firms, accountants, lawyers, vets, dentists and therapists',
    platforms: 'n8n and Retell AI; Google Workspace, Xero, HubSpot and Stripe as common connections',
    what: 'Founded by Andy Norman after 30+ years in managed technology services; its site says he personally oversees every project. Workflow jobs start with a discovery audit and are built on n8n, which is open source, so the client owns everything. It says simple workflows go live in one to two days and multi-system builds in one to two weeks. Workflow automation is priced per project (see the price table below). It also sells an AI receptionist and a website chatbot, and says it is a Certified Retell AI Partner.',
    bestFor: 'Trades and local service firms that miss calls while on a job and want a small, priced first project.',
    ask: 'What the entry-price project covers, and which of your jobs would need the larger multi-system build.',
  },
  {
    name: 'AutoMazen',
    url: 'https://www.automazen.ai/',
    source: 'https://www.automazen.ai/services/ai-automation-agency',
    also: 'https://www.automazen.ai/about',
    group: 'small',
    region: 'London',
    based: '167-169 Great Portland Street, London',
    type: 'Done-for-you automation for lead follow-up, admin and online shops',
    clients: 'Small and mid-sized UK businesses: trades, Shopify and direct-to-consumer brands, and professional services',
    platforms: 'Shopify, Klaviyo and Google Ads are named; no automation tool is named on the pages we read',
    what: 'A team of five that builds and then runs the automation: enquiry replies, quote chasing, review requests, payment reminders, weekly reporting and inbox sorting. Every engagement starts with a free audit. It says the first automation is typically live within one to two weeks, and that everything is built in your accounts so you own it outright. It also builds online shops and says it has built 100+ e-commerce sites. It publishes a typical one-off build price (see the price table below).',
    bestFor: 'Small firms and online shops that want follow-ups and admin handled by a small London team.',
    ask: 'Who on the team of five would build your automation, and for an example from a business like yours.',
  },
  {
    name: 'Aucta AI',
    url: 'https://auctaai.co.uk/',
    source: 'https://auctaai.co.uk/',
    also: 'https://auctaai.co.uk/about/',
    group: 'small',
    region: 'South East England',
    based: 'Dover, Kent, working UK-wide; founded in Kent in 2024 by Harry Norris',
    type: 'AI systems for enquiries, quoting and admin in owner-managed firms',
    clients: 'Owner-managed UK businesses; it names construction, renewables, manufacturing and ecommerce',
    platforms: 'Anthropic, OpenAI and Google models, Python, Supabase and Make; Sage, Xero or your ERP for purchase orders',
    what: 'Starts with a free 30-minute discovery conversation, then deploys a working prototype against your live data before any long-term commitment. For construction it lists tender tracking, subcontractor messages and document routing. For manufacturers it lists purchase order extraction into Sage, Xero or an ERP, custom quoting and supplier invoice matching. Its site promises fixed-price delivery and says most operational workflows are built and deployed within four to eight weeks.',
    bestFor: 'Construction, trades and manufacturing firms whose quotes and paperwork slow the office down.',
    ask: 'How the prototype is tested on your live enquiries, and what you keep if you stop after it.',
  },
  {
    name: 'MQLFlow',
    url: 'https://mqlflow.com/',
    source: 'https://mqlflow.com/',
    also: 'https://mqlflow.com/privacy-policy/',
    group: 'sales',
    region: 'Remote, UK',
    based: 'A UK-based remote team; its privacy policy gives company addresses in Hereford and St Albans',
    type: 'Marketing, sales and CRM automation, with Zapier builds',
    clients: 'Start-ups and small businesses in the UK, Europe and the USA',
    platforms: 'Zapier and HubSpot',
    what: 'Led by founder and automation consultant Pete Hogg. It builds marketing and sales workflows, connects separate apps, cleans CRM data and builds, fixes and improves Zaps (the name Zapier gives its workflows), including custom code for apps Zapier does not list. It also builds AI agents, live data dashboards and personalised outreach. Each service has a published starting price, all worked out from one day rate (see the price table below).',
    bestFor: 'Small sales and marketing teams on Zapier and HubSpot that want a named consultant and prices in the open.',
    ask: 'How many days your job is likely to take, and whether Zapier is the right tool for it.',
  },
  {
    name: 'Automaly',
    url: 'https://automaly.io/',
    source: 'https://automaly.io/pricing/',
    also: 'https://automaly.io/terms/',
    group: 'sales',
    region: 'London',
    based: 'Registered at Kemp House, 160 City Road, London',
    type: 'AI readiness assessments, then CRM, sales and operations automation',
    clients: 'Growing organisations; its use-case pages cover sales and marketing, finance, HR, legal and operations',
    platforms: 'Not named on the pages we read',
    what: 'Calls itself a consulting and implementation partner, and says it is not a software company. Every engagement starts with a paid AI Readiness Assessment that reviews your processes, systems and data. The fee is refunded if it finds fewer than five opportunities with a positive return, and credited in full against a build if you go ahead. Projects are then scoped and agreed upfront with milestone payments. Its site says it has delivered 250+ automations, and that everything it builds keeps running without it.',
    bestFor: 'Growing firms that want a paid assessment and a costed plan before any build.',
    ask: 'What the assessment report contains, and which opportunity it would build first for a firm your size.',
  },
  {
    name: 'OpScaling',
    url: 'https://www.opscaling.co.uk/',
    source: 'https://www.opscaling.co.uk/',
    also: 'https://www.opscaling.co.uk/about-us',
    group: 'sales',
    region: 'South West England',
    based: 'Newquay Orchard, Trevenson Road, Newquay (TR7 3BW)',
    type: 'No-code automation and systems integration, sold by the hour',
    clients: 'Small and medium-sized businesses across sales, marketing, finance and service delivery',
    platforms: 'Zapier, Make and n8n; OpenAI, Gemini and Claude; CRM and ERP systems',
    what: 'A specialist in no-code automation, systems integration and revenue operations (the work of joining up sales, marketing and service data). It connects the tools a business already has into one operating model on Zapier, Make or n8n, and adds AI from OpenAI, Gemini or Claude inside those workflows. A HubSpot reconfiguration is among the client reviews on its home page. It works at one fixed hourly rate with no long-term contract (see the price table below).',
    bestFor: 'Teams that want a no-code specialist by the hour, without a long contract.',
    ask: 'For an estimate of hours before work starts, and which of Zapier, Make or n8n it would pick for your job.',
  },
  {
    name: 'Original Objective',
    url: 'https://www.originalobjective.com/',
    source: 'https://www.originalobjective.com/about-us',
    also: 'https://www.originalobjective.com/automate-your-business/workflows',
    group: 'engineers',
    region: 'North West England',
    based: 'Manchester, with a registered office in Knutsford, Cheshire; founded in 2013',
    type: 'AI and software agency: workflow automation, chatbots, voice agents and custom software',
    clients: 'Its site says more than 100 production systems, for clients including Bet365, Kohler Mira and Ticketmaster',
    platforms: 'n8n, connecting tools such as HubSpot, Salesforce, Pipedrive, Mailchimp, Slack and Xero',
    what: 'Founded by Matt Perry, a software engineer with over 30 years of experience. It builds workflows on n8n so that your data stays on your own servers, adds error handling and monitoring, and tests before launch. It always starts with a small proof of concept. It says simple connections can be live in days and bigger projects usually take two to four weeks. Every project starts with a fixed quote, and it publishes typical ranges for workflow automation, chatbots and voice agents (see the price table below).',
    bestFor: 'Firms that want n8n workflows kept on their own servers, built by a software team at a fixed quote.',
    ask: 'What the first proof of concept would cover, and where the n8n workflows would be hosted.',
  },
  {
    name: 'BespokeWorks AI',
    url: 'https://bespokeworks.ai/',
    source: 'https://bespokeworks.ai/how-we-work/',
    also: 'https://bespokeworks.ai/development/integrations-and-automation/',
    group: 'engineers',
    region: 'West Midlands',
    based: 'Freeth Street, Birmingham (registered office)',
    type: 'Software development, consulting and training with AI built in',
    clients: 'Organisations in property, housing, care and the public sector',
    platforms: 'Not named; it connects the systems you already license through their published interfaces',
    what: 'Most engagements begin with a free demo of one workflow, built as a small working version on sample data. For integrations it uses the most stable interface each system offers: a published API (the official way one program talks to another) first, with screen automation as the last resort. Every connection logs what it sends, retries what fails and alerts a named owner. Its site says a request for AI may turn out to be a missing integration or an unclear process, and that it will say so. A founder is involved in every major project.',
    bestFor: 'Housing, care and public sector organisations that want to see one workflow working before they commit.',
    ask: 'Which workflow it would build as your free demo, and how the real system would differ from the demo.',
  },
  {
    name: 'Makeitfuture',
    url: 'https://www.makeitfuture.com/',
    source: 'https://www.makeitfuture.com/about-us',
    also: 'https://www.makeitfuture.com/ai-automation-agency',
    group: 'engineers',
    region: 'London',
    based: 'London office at 167-169 Great Portland Street; founded in Cluj-Napoca, Romania, with a further office in Paris',
    type: 'AI agents, workflow automation and custom integrations on Make, Zapier, n8n and Airtable',
    clients: 'Its site says over 500 customers worldwide',
    platforms: 'Make, Zapier, n8n, Airtable and HubSpot; OpenAI and Claude models',
    what: 'A team of about 30 automation developers, web developers, AI specialists and consultants. Its site says it is a Make Platinum Partner, an Airtable Gold Partner and a Zapier Certified Expert, and that it is ISO 27001 certified (the information security standard). It builds AI agents, workflows and connectors, and moves existing automations from one tool to another, for example from Make to n8n. It trains client teams, and says most clients run independently within four to six weeks of go-live.',
    bestFor: 'Teams already on Make, Zapier or Airtable that want certified specialists, or a move from one tool to another.',
    ask: 'Who would lead your project, and whether Make, n8n or Zapier suits your job best.',
  },
  {
    name: 'Ronins',
    url: 'https://www.ronins.co.uk/ai-agency/',
    source: 'https://www.ronins.co.uk/ai-agency/',
    also: 'https://www.ronins.co.uk/about-us/',
    group: 'midsize',
    region: 'London',
    based: 'Tavistock Street, London, and London Road, Guildford, Surrey',
    type: 'AI automation agency that also designs and builds digital products',
    clients: 'Mostly established businesses of 20 to 500 people; it says 50 to 250 is where it does its best work',
    platforms: 'Not named; it builds automated workflows, AI agents and bespoke platforms',
    what: 'Five people at its core. It starts by asking how the business should work now that automation exists, then builds the workflows and agents. One example on its page: it turned years of order history from a client ERP into a working CRM and put three research agents over it to find missed sales. It publishes price ranges for discovery workshops, a proof of concept on your own data and a production build (see the price table below), and says it does not compete on £1,000 automations.',
    bestFor: 'Established firms of 50 to 250 people that want a process rethought before it is automated.',
    ask: 'What the discovery workshops produce, and what would make your project a proof of concept or a full build.',
  },
  {
    name: 'Robiquity',
    url: 'https://robiquity.com/',
    source: 'https://robiquity.com/',
    also: 'https://robiquity.com/about',
    group: 'midsize',
    region: 'North West England',
    based: 'Transmission, Atherton Street, Manchester (head office)',
    type: 'AI and low-code solution development',
    clients: 'Large organisations and public bodies; its case studies name Evri, NHS Scotland, the Ministry of Justice and Durham Police',
    platforms: 'Microsoft Power Platform is named in its case studies',
    what: 'Builds AI agents, document processing and business applications on low-code platforms, and works through discovery, design, build, test and operate, often inside the client team. Its site says its people hold over 250 years of combined automation and AI experience. After launch you can choose its managed service, or have it help you build your own centre of excellence, which is an in-house team that owns automation across the company.',
    bestFor: 'Larger mid-size companies and public bodies that build on Microsoft Power Platform.',
    ask: 'What a first, small engagement looks like for an organisation your size, and which low-code platform it would use.',
  },
  {
    name: 'FactoryJet (that is us)',
    url: 'https://factoryjet.com/uk/ai-agents',
    source: 'https://factoryjet.com/uk/ai-agents',
    group: 'commerce',
    region: 'Remote',
    based: 'Works remotely with UK clients and schedules calls in UK business hours',
    type: 'Workflow automation and AI agents, with the online store or ERP around them',
    clients: 'Small and mid-size businesses; 500+ businesses served since 2014',
    platforms: 'n8n, Make, Zapier, Shopify, WooCommerce, Xero, HubSpot, WhatsApp, Odoo, NetSuite, SAP Business One and ERPNext',
    what: 'We map one workflow, then design, build and support it in n8n, Make or Zapier, with AI steps where someone would otherwise read and decide, and human approval steps. Our strongest ground is where automation meets online stores and order handling: quotes and RFQs (requests for a quote), purchase and sales orders, daily bookkeeping, and EDI (the format large buyers use to send orders from computer to computer). We also build AI voice agents. The founder is involved in every project, you own what we build, and we show working software on your own data before a contract.',
    bestFor: 'Online stores and order-heavy businesses that want one team for the store, the integrations and the automation.',
    ask: 'Which of your systems we have connected before, and to see the workflow run on a sample of your own orders before you sign.',
  },
];

// One H2 per buyer group. Headings use the wording buyers typed into search
// and AI assistants (9 Oct 2026 test) and the question boxes Google showed for
// "ai automation agency uk" on 11 Oct 2026.
const GROUPS: { key: Firm['group']; heading: string; intro: string }[] = [
  {
    key: 'small',
    heading: 'Which AI automation agency is best for small businesses in the UK?',
    intro: 'These four suit a small firm buying its first automation: missed calls answered, quotes chased, invoices keyed, reviews requested. Three of them publish a price for a first project on their own site, so you can budget before a call.',
  },
  {
    key: 'sales',
    heading: 'AI automation agencies for sales, marketing and CRM work',
    intro: 'These three start from the sales and marketing side: leads, follow-ups and the CRM (the system that holds your customers and deals). All three publish what they charge, as a day rate, an hourly rate or a fixed assessment fee.',
  },
  {
    key: 'engineers',
    heading: 'AI automation companies with software engineers and certified tool specialists',
    intro: 'These three suit a job that needs more than a few connected apps: workflows on your own servers, integrations between licensed systems, or a move from one automation tool to another.',
  },
  {
    key: 'midsize',
    heading: 'What are the best AI automation companies in the UK for a mid-size business?',
    intro: 'These two work with established organisations where a workflow crosses several teams. Both start with discovery before any build. One publishes its price ranges; the other shows named case studies.',
  },
  {
    key: 'commerce',
    heading: 'AI automation for online stores, orders and ERP: FactoryJet',
    intro: 'One entry here, and it is ours, so read it with that in mind. Two UK firms above also know online retail: AutoMazen says it has built 100+ e-commerce sites, and Aucta AI lists a Shopify storefront rebuild among its projects.',
  },
];

// By-place view. Order of the regions in the table; the rows are filtered and
// sorted from FIRMS in the render so the two cannot drift. FactoryJet's region
// ('Remote') is deliberately not in this list, so it is not shown as a UK place.
const REGIONS: string[] = [
  'London',
  'South East England',
  'South West England',
  'West Midlands',
  'North West England',
  'Scotland',
  'Remote, UK',
];

// Published one-off project prices, copied from each firm's own page on
// 11 Oct 2026. These are the firms' figures, not FactoryJet prices.
const PRICES: { firm: string; figure: string; vat: string; source: string }[] = [
  { firm: 'Antek Automation', figure: 'Workflow automation from £250 per project', vat: 'Excludes VAT', source: 'https://www.antekautomation.com/pricing' },
  { firm: 'AutoMazen', figure: 'A single well-scoped automation typically £500 to £2,000 as a one-off build', vat: 'Not stated', source: 'https://www.automazen.ai/services/ai-automation-agency' },
  { firm: 'Original Objective', figure: 'Workflow automation typically £500 to £5,000; AI chatbots £1,200 to £9,000; voice agents £1,800 to £7,000; every project starts with a fixed quote', vat: 'Not stated', source: 'https://www.originalobjective.com/about-us' },
  { firm: 'Flowio', figure: 'From £750 for a single workflow automation; most clients invest £1,500 to £15,000 for a complete automation solution', vat: 'Not stated', source: 'https://www.flowio.co.uk/' },
  { firm: 'MQLFlow', figure: 'Automation set-up from £800; automation strategy from £3,200; AI agents from £4,000; all priced at a day rate of £800', vat: 'Not stated', source: 'https://mqlflow.com/' },
  { firm: 'OpScaling', figure: 'One fixed rate of £90 per hour, with no long-term contract', vat: 'Plus VAT', source: 'https://www.opscaling.co.uk/' },
  { firm: 'Automaly', figure: 'AI Readiness Assessment £5,000, credited against a build; project-based delivery from £10,000', vat: 'Not stated', source: 'https://automaly.io/pricing/' },
  { firm: 'Ronins', figure: 'Discovery workshops around £3,000 to £8,500; a proof of concept on your own data £12,000 to £30,000; production builds from around £30,000', vat: 'Not stated', source: 'https://www.ronins.co.uk/ai-agency/' },
];

const FAQS: FAQItem[] = [
  {
    q: 'Who is the best AI automation agency in the UK?',
    a: 'No independent ranking exists, and we do not crown one. On 11 October 2026 we opened ten UK lists that AI assistants cite, and the publisher was on its own list in all ten. Choose by fit. Flowio, Antek Automation, AutoMazen and Aucta AI suit small firms. MQLFlow, Automaly and OpScaling suit sales and CRM work. Ronins and Robiquity suit mid-size companies. Send the same one-page brief to three firms and compare the questions they ask you.',
  },
  {
    q: 'What are the best AI automation companies in the UK?',
    a: 'The ones worth shortlisting show a UK base, name the tools they build on and say what a first project involves. Twelve we checked on 11 October 2026: Flowio (Glasgow), Antek Automation (Andover), AutoMazen, Automaly and Makeitfuture (London), Aucta AI (Dover), MQLFlow (a remote UK team), OpScaling (Newquay), Original Objective and Robiquity (Manchester), BespokeWorks AI (Birmingham) and Ronins (London and Guildford). FactoryJet builds automation for UK online stores and order-heavy businesses.',
  },
  {
    q: 'Which AI automation agencies are considered the best?',
    a: "It depends who is doing the considering. AI assistants mostly repeat lists that agencies publish about themselves. When we asked three versions of this question on 9 October 2026 and read 36 answers, 64% of the small-firm pages cited were lists or comparison pages. The ten lists we then opened name 53 different firms, and no firm appears on more than five of them. Treat any list, this one included, as a starting point, then read the firm's own site.",
  },
  {
    q: 'What do AI automation agencies do?',
    a: 'Four jobs. They map how a task runs today. They build the automation inside the tools you already use, often on n8n, Make or Zapier. They test it on your real, messy examples, with a person approving the risky steps. They look after it once it is live, because connected software changes. Flowio and AutoMazen both list quote follow-ups, review requests and late-payment chasing among the jobs small firms ask for.',
  },
  {
    q: 'What is an AI automation agency?',
    a: 'An AI automation agency is a firm that connects the software a business already uses so routine steps happen without retyping, and adds AI where a step needs reading or judgement, such as sorting emails or pulling figures from an invoice. It differs from a software vendor because it shapes the work to your process, and you should own the result. It differs from a consultancy because it builds what it recommends.',
  },
  {
    q: 'Which AI automation agency is best for small businesses?',
    a: "One that sells a small first project and builds in accounts you own. Among UK firms we checked: Antek Automation prices workflow automation from £250 per project, excluding VAT. AutoMazen says a single well-scoped automation typically costs £500 to £2,000. Flowio starts from £750 for a single workflow. Aucta AI focuses on trades, construction and manufacturing. FactoryJet builds for small online stores and order-heavy firms. All figures are from each firm's own site on 11 October 2026.",
  },
  {
    q: 'How much do AI automation agencies charge?',
    a: 'Eight of the 12 UK firms in this guide publish a project price. Read on 11 October 2026: workflow automation from £250 per project (Antek Automation), £500 to £2,000 for a single automation (AutoMazen), from £750 for one workflow (Flowio), £500 to £5,000 for workflow automation (Original Objective) and projects from £10,000 (Automaly). Ronins prices a proof of concept at £12,000 to £30,000. OpScaling charges £90 an hour plus VAT, and MQLFlow works at a day rate of £800.',
  },
  {
    q: 'How much does an AI automation cost?',
    a: 'For one workflow between two or three tools, UK firms that publish a figure put it between £250 and £5,000: Antek Automation from £250, AutoMazen £500 to £2,000, Flowio from £750, MQLFlow from £800 and Original Objective £500 to £5,000. A system that crosses several departments costs more. Automaly prices projects from £10,000, and Ronins says production builds start around £30,000. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    q: 'What are some AI automation agencies?',
    a: 'UK agencies that build automation for smaller businesses include Flowio in Glasgow, Antek Automation in Andover, AutoMazen and Automaly in London, Aucta AI in Dover, OpScaling in Newquay, Original Objective in Manchester and BespokeWorks AI in Birmingham. MQLFlow works as a remote UK team. Makeitfuture has a London office. Ronins and Robiquity take on larger projects. FactoryJet works remotely with UK clients. Each profile in this guide links the page we read.',
  },
  {
    q: 'What are the top companies in AI automation?',
    a: 'That phrase covers three different things. Software makers such as Zapier, Make, n8n and Microsoft sell the tools. Large consultancies run programmes for big organisations. Service agencies build automation for everyone else. This guide covers the third kind for UK small and mid-size buyers: 12 UK firms and our own. For firms that mainly advise, see our guide to the best AI consultancies in the UK.',
  },
  {
    q: 'How can I get started with AI automation?',
    a: 'Pick one task your team repeats every week and write down what starts it, which tools it touches and what a good result looks like. Then choose a route. Build it yourself on Zapier, Make or n8n if it is simple. Buy a few hours from a specialist if you get stuck. Ask an agency if it touches money, customer data or several systems. The ONS lists difficulty identifying business use cases among the most common barriers to adopting AI.',
  },
  {
    q: 'What are AI automation services?',
    a: 'They are the jobs an agency will take on for you. On the 12 UK sites we read, the services named were workflow automation between existing tools, AI voice agents and chatbots that answer and book, CRM and sales follow-up, document and invoice processing, and reporting dashboards. Some firms add custom software where no tool fits. Our guide to AI automation services for small UK businesses explains each one.',
  },
  {
    q: 'What is an AI automation consultant?',
    a: 'An AI automation consultant is a person or small firm that works out which of your tasks are worth automating and often builds the first ones. Some sell time by the hour or day: OpScaling charges a fixed £90 an hour plus VAT, and MQLFlow prices its work at a day rate of £800. Others sell a fixed assessment. Automaly charges £5,000 for one and refunds it if it finds fewer than five opportunities with a positive return.',
  },
  {
    q: 'What AI company is based in London?',
    a: "Among the automation agencies in this guide, AutoMazen and Makeitfuture both give an address on Great Portland Street, Automaly is registered on City Road, and Ronins lists Tavistock Street in London as well as Guildford. AI firms cluster in and around the capital. The government's AI Sector Study 2024, published on 3 September 2025, found that London, the South East and the East of England account for about 75% of AI companies' registered offices.",
  },
  {
    q: 'What are the major AI companies in the UK?',
    a: "That is a different list from this one. The government's AI Sector Study 2024, published on 3 September 2025, counted more than 5,800 AI companies in the UK with revenue of £23.9 billion, and named Amazon, Google DeepMind, IBM and Meta as adding most to revenue and employment. Those are platform and research companies. A 20-person firm that wants its quotes chased or its invoices keyed needs an agency like the ones in this guide.",
  },
  {
    q: 'Can I hire an AI agent?',
    a: "You hire a firm to build one, or you subscribe to a ready-made product. An AI agent is software that takes actions in your systems and chooses its next step as it goes. In this guide, Flowio, Antek Automation and Original Objective build voice agents that answer calls, and Ronins describes research agents working over a client's order history. For more builders, see our guide to AI agent development companies in the UK.",
  },
  {
    q: 'Is there an AI automation agency for trades and construction firms in the UK?',
    a: 'Yes. Aucta AI in Dover lists tender tracking, subcontractor messages and purchase order extraction into Sage, Xero or an ERP. Flowio in Glasgow names trades, home services, construction and engineering among its sectors. Antek Automation offers receptionist set-ups for plumbers, electricians and heating and cooling firms. AutoMazen names plumbers, electricians, builders and installers. The ONS found that 13% of construction businesses reported using AI, against 58% in information and communication.',
  },
  {
    q: 'Which UK AI automation agencies work with n8n, Make or Zapier?',
    a: 'Flowio, Antek Automation and Original Objective build on n8n, which is open source and can run on your own server. MQLFlow builds on Zapier. OpScaling works across Zapier, Make and n8n. Makeitfuture says it is a Make Platinum Partner and a Zapier Certified Expert, and it moves automations from one tool to another. FactoryJet builds on all three. Our comparison of n8n, Zapier and Make explains which suits which job.',
  },
  {
    q: 'Which UK AI automation agencies publish their prices?',
    a: 'Eight of the 12 UK firms we read publish a project price: Antek Automation, AutoMazen, Original Objective, Flowio, MQLFlow, OpScaling, Automaly and Ronins. The other four, Aucta AI, BespokeWorks AI, Makeitfuture and Robiquity, quote after a call, a demo or a scoping session. The price table in this guide copies each figure, links its source and notes whether VAT is included. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    q: 'How long does an AI automation project take?',
    a: 'Published timelines, read on 11 October 2026: Antek Automation says simple workflows go live in one to two days and multi-system builds in one to two weeks. Flowio says most basic automations go live within two weeks and complex projects take four to six weeks or longer. Original Objective says bigger projects usually take two to four weeks. Aucta AI says most operational workflows are built and deployed within four to eight weeks.',
  },
  {
    q: 'Do I own the automation after an agency builds it?',
    a: 'You should, and several firms say so on their own sites. Antek Automation builds on n8n and says you own everything. AutoMazen builds in your accounts so that you own it outright. Automaly says everything it builds keeps running without it. Original Objective keeps your data on your servers. FactoryJet clients own what we build. Put it in the contract: the workflows, the accounts they run in, the prompts and the data.',
  },
  {
    q: 'Should I use an agency, a freelancer or do it myself?',
    a: 'Do it yourself when the job is one workflow between two or three common apps and you can test it. Use a freelancer or an hourly specialist when you can describe the job in a page. Use an agency when the workflow touches money, customer data or several systems, or when losing the one person who understands it would hurt. Zapier keeps a Solution Partner directory, and n8n says its expert partner programme is still a closed pilot.',
  },
  {
    q: 'What is the difference between workflow automation and an AI agent?',
    a: 'Workflow automation follows fixed rules: when a form arrives, create a record and send an email. An AI agent is given a goal and chooses its own next step, such as deciding which supplier to chase. Many jobs need only rules, and rules are easier to test. BespokeWorks AI says on its own site that a request for AI may turn out to be a missing integration or an unclear process.',
  },
  {
    q: 'Do UK data protection rules apply to AI automation?',
    a: "Yes, whenever the automation handles personal data such as customer names, emails or call recordings. The ICO's guidance on AI and data protection says the accountability principle makes you responsible for complying with data protection law, and for demonstrating that compliance, in any AI system that processes personal data. The ICO notes the guidance is under review after the Data (Use and Access) Act. Ask your agency in writing who is the controller and who is the processor.",
  },
  {
    q: 'Does it matter where an automation agency stores my data?',
    a: "Yes. The ICO's brief guide to international transfers, last updated on 15 January 2026, says people risk losing the protection of UK data protection law if their personal information is sent, or made accessible, outside the UK, and that every restricted transfer must be covered by a transfer mechanism. That applies to the AI provider behind the automation as well as the agency. Ask where data is stored and processed. FactoryJet can host AI builds in the UK or EU.",
  },
  {
    q: 'Which AI automation agency suits an online store in the UK?',
    a: 'Pick a team that knows the store platform as well as the automation. AutoMazen says it has built 100+ e-commerce sites and serves Shopify and direct-to-consumer brands. Aucta AI lists a Shopify storefront rebuild among its projects. FactoryJet builds Shopify and WooCommerce stores and the order and accounting workflows behind them, including work on Xero, Odoo, NetSuite, SAP Business One and ERPNext. Ask any of them to run the workflow on a sample of your own orders.',
  },
  {
    q: 'How many UK businesses use AI?',
    a: 'The Office for National Statistics reported on 20 July 2026 that self-reported AI use among UK businesses with 10 or more employees rose from around 12% to around 35% since late 2023. Among businesses with 0 to 9 employees, 28% reported using at least one AI technology. Use is shallow so far: of the adopters with 10 or more employees, only 10% said they use AI extensively.',
  },
  {
    q: 'Is it safe to pick an agency that an AI assistant recommended?',
    a: "Treat it as a lead. The pages assistants cite for this topic are mostly lists written by agencies. On 11 October 2026 we opened ten of them. The publisher was on its own list in all ten and first in six, and four linked to none of the other firms they described. Check the firm's own site for a UK address or company number, look it up for free on GOV.UK, and ask to speak with a current client.",
  },
];

export const post: BlogPost = {
  id: '762',
  slug: 'best-ai-automation-agencies-uk-2026',
  title: TITLE,
  excerpt:
    'A fact-checked guide to AI automation agencies for UK small and mid-size businesses, grouped by the kind of buyer each suits: small firms and trades, sales and CRM teams, engineer-built systems, mid-size companies and online stores. Where each is based, which tools it names, what it publishes about price, and how to choose. FactoryJet is on the list and says so.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Oct 11, 2026',
  readTime: '22 min read',
  imageUrl: `${IMG}/hero.webp`,
  imageAlt:
    'A woman with auburn hair in a green jumper sorts blank pastel cards into five groups on an oak table, with a joinery workshop visible through the doorway behind her',
  meta: {
    title: 'Best AI Automation Agencies UK 2026: 13 Compared | FactoryJet',
    description: META_DESCRIPTION,
  },
  keyTakeaways: [
    'There is no single best AI automation agency in the UK. Match the firm to your size, your tools and the job you want done first.',
    "Every fact about every firm was read on its own website on 11 October 2026. Nobody paid to be listed, and the order is not a ranking.",
    'Eight of the 12 UK firms publish a project price. They run from £250 for one workflow (Antek Automation) to around £30,000 and up for a system in production (Ronins).',
    'We opened ten UK lists that AI assistants cite. The publisher was on its own list in all ten, and first in six.',
    'FactoryJet wrote this guide and is on it, last. We build automation for online stores and order-heavy businesses.',
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
              name: TITLE,
              description: META_DESCRIPTION,
              inLanguage: 'en-GB',
              datePublished: '2026-10-11',
              dateModified: '2026-10-31',
              isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com' },
              publisher: { '@id': 'https://factoryjet.com/#organization' },
              about: { '@type': 'Thing', name: 'AI automation agencies in the United Kingdom' },
              speakable: {
                '@type': 'SpeakableSpecification',
                cssSelector: ['#answer-first', 'h1', 'h2'],
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'AI automation agencies in the UK compared (2026)',
              itemListOrder: 'https://schema.org/ItemListUnordered',
              numberOfItems: FIRMS.length,
              itemListElement: FIRMS.map((a, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: a.name.replace(' (that is us)', ''),
                url: a.url,
              })),
            },
          ]),
        }}
      />

      <div id="answer-first" className="mb-8 rounded-2xl border border-gray-200 bg-gray-50 p-6 not-prose">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#B23E13] mb-2">The short answer</p>
        <p className="text-gray-800 leading-relaxed mb-3">
          There is no single best AI automation agency in the UK. For a first automation in a small business: Flowio, Antek Automation, AutoMazen or Aucta AI. For sales and CRM work: MQLFlow, Automaly or OpScaling. For engineer-built systems: Original Objective, BespokeWorks AI or Makeitfuture. For mid-size firms: Ronins or Robiquity. For online stores and order-heavy operations: FactoryJet.
        </p>
        <p className="text-gray-800 leading-relaxed mb-3">
          We read all 13 on their own websites on 11 October 2026: where each is based, what it builds, which tools it names and any project price it publishes. Nobody paid to be listed and the order is not a ranking. FactoryJet wrote this guide and is on it, last.
        </p>
        <p className="text-gray-800 leading-relaxed">
          If you are short on time, <a href="/contact" className="text-[#B23E13] underline font-semibold">send us the one task you want automated</a> and the founder will tell you which kind of firm fits.
        </p>
      </div>

      <p className="mb-4">
        Ask an AI assistant for the best AI automation agency in the UK and it will mostly hand you a list that an agency wrote about itself. On 9 October 2026 we put three versions of that question to ChatGPT, Claude, Gemini, Perplexity, Google AI Mode and Google AI Overviews, and read 36 answers. They cited pages from small and mid-size firms 215 times. Lists and comparison pages made up 64% of those citations, spread across 45 different pages.
      </p>
      <p className="mb-4">
        On 11 October 2026 we opened ten of those UK lists, each published by an agency. The publisher is on its own list in all ten. It is first in six and second in two. Between them the ten lists name 53 different firms, 42 of which appear on only one list, and no firm appears on more than five. Four of the ten link to none of the other firms they describe, which leaves a reader no quick way to check them.
      </p>
      <p className="mb-4">
        This guide does the slow part. It covers 12 UK firms that build automation for small and mid-size businesses, plus our own entry. Each was read on its own website on 11 October 2026, and every profile links the page the facts came from.
      </p>
      <p className="mb-4">
        <strong>A note on who wrote this.</strong> FactoryJet designs, builds, implements and supports workflow automation and AI agents, so we are on this list. We put ourselves last. Publishers listing themselves is the norm on pages like this one, so read every list with care, this one included.
      </p>
      <p className="mb-6">
        A few terms first, in plain English. An <strong>AI automation agency</strong> connects the software you already use so routine steps happen without retyping, and adds AI where a step needs reading or judgement. <strong>n8n, Make and Zapier</strong> are workflow tools, and seven of the 12 UK firms here name at least one of them: each tool watches for an event in one app and runs steps in others. An <strong>AI agent</strong> is software that takes actions in your systems, such as updating an order, and chooses its next step as it goes. A <strong>CRM</strong> holds your customers and deals. An <strong>ERP</strong> holds orders, stock and accounts. <strong>Low-code</strong> means building software from ready-made blocks with little hand-written code.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">The shortlist at a glance</h2>
      <p className="mb-4">
        Scan this first. Find the rows that match your size, your tools and where you are, then read those profiles in full.
      </p>
      <div className="overflow-x-auto mb-8 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Firm</th>
              <th className="p-3 text-left border border-gray-700">Focus</th>
              <th className="p-3 text-left border border-gray-700">Typical client</th>
              <th className="p-3 text-left border border-gray-700">Tools and systems named</th>
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
        An AI automation agency connects AI to the software your business already runs, so that answering an enquiry, chasing a quote or keying an invoice no longer waits for a person to retype something. The work has four parts: map how the task runs today, build the automation inside your existing tools, test it on your real examples with a person approving the risky steps, and look after it once it is live.
      </p>
      <p className="mb-4">
        The jobs are plainer than the name suggests. Flowio and AutoMazen publish the requests they get from small firms, and the two lists overlap: quotes followed up until the customer answers, a review request after every finished job, late payers chased and a weekly numbers report. Aucta AI adds the paperwork of a building firm: tenders, subcontractor messages and purchase orders.
      </p>
      <p className="mb-6">
        Some jobs need no AI at all. BespokeWorks AI says on its own site that a request for AI may turn out to be a missing integration or an unclear process. For the longer version, read <a href="/blog/what-does-an-ai-automation-agency-do-uk" className="text-[#B23E13] underline">what an AI automation agency does for a UK business</a> and our comparison of <a href="/blog/best-ai-automation-tools-small-business-uk-2026" className="text-[#B23E13] underline">AI automation tools for small UK businesses</a>.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">How we built this list</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Start with what buyers ask.</strong> The questions came from our UK Search Console data, from prompts we wrote for UK buyers, and from the question boxes Google showed on 11 October 2026 for &ldquo;ai automation agency&rdquo; and &ldquo;ai automation agency uk&rdquo;. The first of those gets 720 UK Google searches a month (DataForSEO, October 2026).</li>
        <li><strong>Read the lists assistants cite.</strong> We opened ten UK lists to see who gets named and what is missing. We did not copy them.</li>
        <li><strong>Keep firms that show a UK base on their own site.</strong> Each of the 12 gives a UK street, building or town, or a UK company registration. We left out any firm whose own pages gave no UK address or company detail, and one whose site refused both our script and our browser.</li>
        <li><strong>Builders only.</strong> Every firm here builds the automation itself. Firms that mainly advise are in our guide to <a href="/blog/best-ai-consultancies-uk-2026" className="text-[#B23E13] underline">the best AI consultancies in the UK</a>. Firms that write custom AI agents are in our guide to <a href="/blog/best-ai-agent-development-companies-uk-2026" className="text-[#B23E13] underline">AI agent development companies in the UK</a>. Of the 12 here, only Flowio is on both lists.</li>
        <li><strong>Read the source.</strong> Every description comes from the firm&rsquo;s own pages, opened on 11 October 2026 and linked on each profile. Numbers such as client counts are the firm&rsquo;s own claims, and we say so.</li>
        <li><strong>No scores we cannot prove.</strong> We have not hired these firms, so there are no star ratings. We tell you who each one suits and a question worth asking it.</li>
        <li><strong>Prices only from the firm.</strong> Where a firm publishes a project price, we copy it and link the page. We never guess another company&rsquo;s price.</li>
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
              <table className={visualQa.profileFacts} tabIndex={0} aria-label={a.name}><tbody>
                <tr><th scope="row"><strong>Best for:</strong></th><td> {a.bestFor}</td></tr>
                <tr><th scope="row"><strong>Typical client:</strong></th><td> {a.clients}.</td></tr>
                <tr><th scope="row"><strong>Tools and systems named:</strong></th><td> {a.platforms}.</td></tr>
                <tr><th scope="row"><strong>Worth asking them:</strong></th><td> {a.ask}</td></tr>
              </tbody></table>
              <p className="text-sm text-gray-600">
                Source, read 11 October 2026: <a href={a.source} className="text-[#B23E13] underline" rel="noopener" target={a.source.startsWith('https://factoryjet.com') ? undefined : '_blank'}>{a.source.replace('https://', '')}</a>
                {a.also && (
                  <>
                    {' '}| Also read: <a href={a.also} className="text-[#B23E13] underline" rel="noopener" target="_blank">{a.also.replace('https://', '')}</a>
                  </>
                )}
              </p>
              {a.name === 'Aucta AI' && (
                <figure className="my-8 not-prose">
                  <img
                    src={`${IMG}/trades.webp`}
                    width={1200}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    alt="A heating engineer in a navy polo shirt kneels at an open boiler cupboard holding a spanner, while a phone lies face down on the kitchen worktop behind him"
                    className="w-full h-auto rounded-xl"
                  />
                  <figcaption className="text-sm text-gray-600 mt-2">In a trade business the first automation is often the phone, so that a call arriving while both hands are busy still gets answered and logged.</figcaption>
                </figure>
              )}
              {a.name === 'Robiquity' && (
                <figure className="my-8 not-prose">
                  <img
                    src={`${IMG}/process-map.webp`}
                    width={1200}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    alt="Seen from behind, a grey-haired man holds a stack of blank notes while a woman in a mustard cardigan presses one onto a white wall, where a row of coloured notes is joined by strips of orange tape"
                    className="w-full h-auto rounded-xl"
                  />
                  <figcaption className="text-sm text-gray-600 mt-2">Discovery should end with one process laid out step by step, and the steps worth automating marked on it.</figcaption>
                </figure>
              )}
            </section>
          ))}
        </div>
      ))}

      <p className="mb-6">
        FactoryJet services for UK businesses: <a href="/uk/ai-agents" className="text-[#B23E13] underline">AI automation and AI agents in the UK</a>, <a href="/uk/ai-receptionist" className="text-[#B23E13] underline">AI receptionists</a>, <a href="/uk/ai-development" className="text-[#B23E13] underline">custom AI development</a>, <a href="/uk/whatsapp-ai-agents" className="text-[#B23E13] underline">WhatsApp AI agents</a> and <a href="/uk/ai-consulting" className="text-[#B23E13] underline">AI consulting</a>.
      </p>

      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 mb-8 not-prose">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#B23E13] mb-2">A free second opinion</p>
        <p className="text-gray-800 leading-relaxed mb-3">
          Send us the one task your team repeats most. On a free call, the founder will tell you whether it needs an AI agent, a simpler automation or no AI at all, and which kind of firm on this page fits.
        </p>
        <a href="/contact" className="inline-block rounded-lg bg-[#B23E13] px-5 py-3 font-semibold text-white">Talk to the Founder</a>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">AI automation agencies in London, Manchester, Glasgow and the rest of the UK</h2>
      <p className="mb-4">
        Buyers ask by place, so here is the same list by where each firm says it is. Every base in the third column is copied from the firm&rsquo;s own site.
      </p>
      <div className="overflow-x-auto mb-4 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Where</th>
              <th className="p-3 text-left border border-gray-700">Firm</th>
              <th className="p-3 text-left border border-gray-700">Base given on its own site</th>
              <th className="p-3 text-left border border-gray-700">Best for</th>
            </tr>
          </thead>
          <tbody>
            {FIRMS.filter((a) => REGIONS.indexOf(a.region) !== -1)
              .sort((x, y) => REGIONS.indexOf(x.region) - REGIONS.indexOf(y.region))
              .map((a) => (
                <tr key={a.name} className="odd:bg-white even:bg-gray-50">
                  <td className="p-3 border border-gray-200 font-semibold align-top">{a.region}</td>
                  <td className="p-3 border border-gray-200 align-top">{a.name}</td>
                  <td className="p-3 border border-gray-200 align-top">{a.based}</td>
                  <td className="p-3 border border-gray-200 align-top">{a.bestFor}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <p className="mb-6">
        London has the most names, and the official figures explain why. The government&rsquo;s <a href="https://www.gov.uk/government/publications/artificial-intelligence-sector-study-2024/artificial-intelligence-sector-study-2024" className="text-[#B23E13] underline" rel="noopener" target="_blank">AI Sector Study 2024</a>, published on 3 September 2025, found that London, the South East and the East of England account for about 75% of AI companies&rsquo; registered offices. It also found at least double the number of AI companies, compared with 2022, in the West Midlands, the North West, the East Midlands, Wales, and Yorkshire and the Humber. Distance matters less than the map suggests. Antek Automation says it works with businesses across the whole UK remotely, and MQLFlow operates as a remote team, so shortlist by typical client before you shortlist by postcode.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">How much do AI automation agencies charge in the UK?</h2>
      <p className="mb-4">
        Eight of the 12 UK firms in this guide publish a price for project work on their own site. We copied them on 11 October 2026. These are each firm&rsquo;s own published figures. They are not FactoryJet prices and they are not a market survey. Check the source before you rely on one, because firms change their prices.
      </p>
      <div className="overflow-x-auto mb-4 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Firm</th>
              <th className="p-3 text-left border border-gray-700">Published project price (GBP)</th>
              <th className="p-3 text-left border border-gray-700">VAT, as stated on the page</th>
              <th className="p-3 text-left border border-gray-700">Source (read 11 Oct 2026)</th>
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
        <strong>How to read this.</strong> The small figures buy one workflow between two or three tools. The larger ones buy a discovery phase, a proof of concept on your own data or a system in production. Only two of the eight pages say where VAT stands: Antek Automation quotes prices excluding VAT, and OpScaling adds VAT to its hourly rate. GOV.UK gives the <a href="https://www.gov.uk/vat-rates" className="text-[#B23E13] underline" rel="noopener" target="_blank">standard VAT rate as 20%</a>, so ask the other six before you compare totals.
      </p>
      <p className="mb-6">
        For sourced market ranges covering agents, chatbots, receptionists and consulting day rates, read our <a href="/blog/ai-cost-uk-2026" className="text-[#B23E13] underline">AI cost guide for the UK (2026)</a>. For project and retainer ranges by company size and job, see our <a href="/blog/ai-automation-agency-cost-2026" className="text-[#B23E13] underline">AI automation agency cost guide</a>. FactoryJet does not publish a rate card. We quote the build, and any support you choose, as fixed prices in writing after a short scoping call.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Which kind of UK automation firm fits your business?</h2>
      <p className="mb-4">The five groups above cover most buyers. Four more situations come up often. Find the line that sounds like you.</p>
      <div className="grid gap-3 mb-8 not-prose">
        <div className="rounded-xl border border-gray-200 p-4 hover:border-[#B23E13] transition-colors">
          <p className="font-semibold mb-1">&ldquo;We miss calls when we are out on jobs.&rdquo;</p>
          <p className="text-gray-700 text-sm">Flowio, Antek Automation and Original Objective build voice agents that answer and book. FactoryJet builds <a href="/uk/ai-receptionist" className="text-[#B23E13] underline">AI receptionists</a> and voice agents, for small offices and for call centres.</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-4 hover:border-[#B23E13] transition-colors">
          <p className="font-semibold mb-1">&ldquo;Orders and quotes arrive by email and get typed in again.&rdquo;</p>
          <p className="text-gray-700 text-sm">Aucta AI lists purchase order extraction into Sage, Xero or an ERP. FactoryJet builds quote, order and bookkeeping workflows and has worked on Odoo, NetSuite, SAP Business One and ERPNext; see <a href="/uk/ai-development" className="text-[#B23E13] underline">custom AI development in the UK</a>.</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-4 hover:border-[#B23E13] transition-colors">
          <p className="font-semibold mb-1">&ldquo;We already pay for Zapier or Make and it has grown messy.&rdquo;</p>
          <p className="text-gray-700 text-sm">MQLFlow fixes and improves existing Zaps. OpScaling works by the hour across Zapier, Make and n8n. Makeitfuture moves automations from one tool to another.</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-4 hover:border-[#B23E13] transition-colors">
          <p className="font-semibold mb-1">&ldquo;We do not know yet what to automate.&rdquo;</p>
          <p className="text-gray-700 text-sm">Start with a scoped first step: Automaly sells a fixed assessment, Ronins runs discovery workshops and BespokeWorks AI builds a free demo of one workflow. See also <a href="/uk/ai-consulting" className="text-[#B23E13] underline">AI consulting in the UK</a>.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">How to choose an AI automation agency in the UK: 6 steps</h2>
      <p className="mb-4">Open each step for the detail.</p>
      <div className="space-y-3 mb-8 not-prose">
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">1. Write down one task</summary>
          <p className="mt-3 text-gray-700">Pick the task your team repeats most and complains about most. Note what starts it, which tools it touches, how often it happens and what a good result looks like. One page is enough. The jobs small firms hand over first, going by what Flowio and AutoMazen publish, are quote follow-ups, review requests, late-payment chasing and the weekly numbers report.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">2. Compare the first step each firm offers</summary>
          <p className="mt-3 text-gray-700">We found five kinds of first step on these 12 sites: a free call or audit (Flowio, Antek Automation, AutoMazen), a free working demo on sample data (BespokeWorks AI), a prototype run against your live data (Aucta AI), paid discovery workshops (Ronins, around £3,000 to £8,500) and a paid assessment (Automaly, £5,000, credited against a build). Ask each firm what you hold at the end of that step if you go no further.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">3. Send the same brief to three firms</summary>
          <p className="mt-3 text-gray-700">Use the two tables above to pick three firms whose typical client looks like you. A six-van heating firm and a 300-person distributor need different firms. Send each the same page on the same day. Good firms ask about exceptions (&ldquo;what happens when the customer replies to the quote with a question?&rdquo;), about access to your data and about who approves the output.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">4. Ask who builds it, and on which tool</summary>
          <p className="mt-3 text-gray-700">The tool decides who else could look after the work later. Flowio, Antek Automation and Original Objective build on n8n. MQLFlow builds on Zapier. OpScaling and Makeitfuture work across Zapier, Make and n8n. Robiquity builds on low-code platforms. Our <a href="/blog/n8n-vs-zapier-vs-make-ai-workflow-automation-2026" className="text-[#B23E13] underline">comparison of n8n, Zapier and Make</a> explains which suits which job. Ask to meet the person who will build, as well as the person who sells.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">5. Settle ownership and data before price</summary>
          <p className="mt-3 text-gray-700">Get four answers in writing. Who owns the workflows, the prompts and the accounts they run in? Where is your data stored and processed? Can the AI provider train on it? Who is the controller and who is the processor under UK data protection law? Four firms here state their position on their own sites: Antek Automation and AutoMazen say the client owns the build, Automaly says its builds keep running without it, and Original Objective keeps data on the client&rsquo;s servers.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">6. Agree who looks after it once it is live</summary>
          <p className="mt-3 text-gray-700">The software an automation connects to will change, and a broken workflow can stop without telling anyone. Ask who watches for failed runs and who fixes them. BespokeWorks AI says every connection it builds logs what it sends, retries what fails and alerts a named owner. Robiquity offers its own managed service or helps you build an in-house team. FactoryJet can keep managing the servers, AI, APIs and maintenance after launch, so your team does not have to.</p>
        </details>
      </div>

      <figure className="my-8 not-prose">
        <img
          src={`${IMG}/orders.webp`}
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          alt="A man in a cream sweatshirt and grey apron folds the flaps of a plain cardboard box at a packing bench, with three more plain boxes on the bench and shelves of boxes behind him"
          className="w-full h-auto rounded-xl"
        />
        <figcaption className="text-sm text-gray-600 mt-2">Test any automation on real orders before it goes live. The parcel that splits into two boxes is the one that breaks a tidy demo.</figcaption>
      </figure>

      <h2 className="text-2xl font-bold mt-10 mb-4">Agency, hourly specialist or do it yourself: the three routes compared</h2>
      <div className="overflow-x-auto mb-4 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700"></th>
              <th className="p-3 text-left border border-gray-700">Do it yourself</th>
              <th className="p-3 text-left border border-gray-700">Freelancer or hourly specialist</th>
              <th className="p-3 text-left border border-gray-700">Automation agency</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Suits</td>
              <td className="p-3 border border-gray-200">One workflow between two or three common apps</td>
              <td className="p-3 border border-gray-200">One defined job you can describe in a page</td>
              <td className="p-3 border border-gray-200">Workflows that touch money, customer data or several systems</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Where to start</td>
              <td className="p-3 border border-gray-200">Sign up to Zapier, Make or n8n and build it</td>
              <td className="p-3 border border-gray-200">Zapier&rsquo;s Solution Partner directory, or a firm that sells time by the hour, such as OpScaling</td>
              <td className="p-3 border border-gray-200">Three firms from this guide whose typical client looks like you</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Who tests it</td>
              <td className="p-3 border border-gray-200">You</td>
              <td className="p-3 border border-gray-200">You, with the specialist on call</td>
              <td className="p-3 border border-gray-200">The agency, on your real cases, with a person approving the risky steps</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">What you need to supply</td>
              <td className="p-3 border border-gray-200">Time to learn the tool</td>
              <td className="p-3 border border-gray-200">A clear one-page brief</td>
              <td className="p-3 border border-gray-200">Access to your systems and one person who knows the task</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Watch out for</td>
              <td className="p-3 border border-gray-200">A workflow only you understand</td>
              <td className="p-3 border border-gray-200">Reliance on one person</td>
              <td className="p-3 border border-gray-200">A scope that grows; agree one workflow first</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-6">
        Two of the tool makers run their own lists of specialists. Zapier keeps a <a href="https://zapier.com/partnerdirectory" className="text-[#B23E13] underline" rel="noopener" target="_blank">Solution Partner directory</a>. n8n says its <a href="https://n8n.io/expert-partners/" className="text-[#B23E13] underline" rel="noopener" target="_blank">expert partner programme</a> is still a closed pilot, with the UK and Ireland among the regions it is recruiting in.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">UK rules every automation agency should raise with you</h2>
      <p className="mb-4">
        An automation that reads customer emails or answers the phone is handling personal data. A good firm brings these points up before you do. We read each page below on 11 October 2026.
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><strong>You stay accountable.</strong> The ICO&rsquo;s <a href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/what-are-the-accountability-and-governance-implications-of-ai/" className="text-[#B23E13] underline" rel="noopener" target="_blank">guidance on AI and data protection</a> says the accountability principle makes you responsible for complying with data protection law, and for demonstrating that compliance, in any AI system that processes personal data. It calls a data protection impact assessment an ideal way to demonstrate it. The ICO notes that this guidance is under review after the Data (Use and Access) Act.</li>
        <li><strong>Controller and processor.</strong> The ICO explains that the UK GDPR <a href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/controllers-and-processors/controllers-and-processors/what-are-controllers-and-processors/" className="text-[#B23E13] underline" rel="noopener" target="_blank">draws a distinction between a controller and a processor</a>, because organisations involved in processing personal data do not all carry the same degree of responsibility. Ask your agency which one it is for your project, and get the answer in the contract.</li>
        <li><strong>Data that leaves the UK.</strong> The ICO&rsquo;s <a href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/international-transfers/a-brief-guide-to-international-transfers/" className="text-[#B23E13] underline" rel="noopener" target="_blank">brief guide to international transfers</a>, last updated on 15 January 2026, says people risk losing the protection of UK data protection law if their personal information is sent, or made accessible, outside the UK, and that every restricted transfer must be covered by a transfer mechanism. This applies to the AI provider behind the automation and to any supplier outside the UK.</li>
        <li><strong>Registration.</strong> The ICO says organisations that use personal information need to pay a <a href="https://ico.org.uk/for-organisations/data-protection-fee/" className="text-[#B23E13] underline" rel="noopener" target="_blank">data protection fee</a> unless they are exempt. GOV.UK lets you <a href="https://www.gov.uk/get-information-about-a-company" className="text-[#B23E13] underline" rel="noopener" target="_blank">look up a company&rsquo;s details for free</a>, including its registered address and date of incorporation.</li>
      </ul>
      <p className="mb-6">
        Some context on timing. The <a href="https://www.ons.gov.uk/businessindustryandtrade/business/businessservices/articles/artificialintelligenceinukbusinesses/2023to2026" className="text-[#B23E13] underline" rel="noopener" target="_blank">Office for National Statistics</a> reported on 20 July 2026 that self-reported AI use among UK businesses with 10 or more employees has risen from around 12% to around 35% since late 2023, and that 28% of businesses with 0 to 9 employees use at least one AI technology. The spread between trades is wide: 58% in information and communication, 13% in construction. Use is also shallow. Of the adopters with 10 or more employees, only 10% said they use AI extensively. A firm that gets one workflow running well is ahead of most of its market.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Five warning signs when you talk to an automation agency</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>A demo on someone else&rsquo;s data.</strong> It proves little. Two firms in this guide show the alternative: BespokeWorks AI builds a demo of your own workflow, and Aucta AI runs a prototype against your live enquiries.</li>
        <li><strong>No named first workflow.</strong> A proposal that promises to automate the business, without naming the one task it starts with, has not been scoped.</li>
        <li><strong>The automation lives in the agency&rsquo;s account.</strong> Then you are renting your own operations. Ask for admin access to every account from day one.</li>
        <li><strong>No person approving the risky steps.</strong> Anything that sends money, gives advice or speaks to a customer should have a person approving it, at least at first.</li>
        <li><strong>No UK company you can look up.</strong> Every UK firm above shows a street, a town or a company registration on its own site. If you cannot find one, ask why.</li>
      </ol>

      <h2 className="text-2xl font-bold mt-10 mb-4">Where FactoryJet fits</h2>
      <p className="mb-4">
        We are FactoryJet. We have served 500+ businesses since 2014, most of that time in commerce: online stores, B2B ordering and the operations behind them. Our founder, Bhavesh Barot, is involved in every project. We design, build, implement and support workflow automation and AI agents, and you own what we build.
      </p>
      <p className="mb-4">
        <strong>Where we fit:</strong> UK small and mid-size businesses that sell online or run order-heavy operations and want one team for the store, the integrations and the automation. We build in n8n, Make and Zapier, and connect Shopify, WooCommerce, Xero, HubSpot and WhatsApp. We have worked on Odoo, NetSuite, SAP Business One, ERPNext and custom ERPs, on quoting and RFQs, purchase and sales orders, daily bookkeeping, EDI and punchout catalogues (your catalogue opened from inside a buyer&rsquo;s purchasing system). We also build AI voice agents, for small offices and for call centres.
      </p>
      <p className="mb-4">
        <strong>How we work:</strong> before a contract, we show working software on your own data. We quote the build, and any support you choose, as fixed prices in writing after a short scoping call. After launch we can keep managing the servers, AI, APIs and maintenance, so your team does not have to. We work remotely with UK clients, schedule calls in UK business hours and can host AI builds in the UK or EU.
      </p>
      <p className="mb-6">
        If you are still working out what you need, these explain the options in plain English: <a href="/blog/what-does-an-ai-automation-agency-do-uk" className="text-[#B23E13] underline">what an AI automation agency does</a>, <a href="/blog/best-ai-automation-tools-small-business-uk-2026" className="text-[#B23E13] underline">the best AI automation tools for small UK businesses</a> and <a href="/blog/ai-cost-uk-2026" className="text-[#B23E13] underline">what AI costs in the UK</a>.
      </p>

      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 mb-8 not-prose">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#B23E13] mb-2">If you are not sure which kind of firm you need</p>
        <p className="text-gray-800 leading-relaxed mb-3">
          Send us the one task your team repeats most. On a free call, the founder will tell you whether it needs an AI agent, a simpler automation or no AI at all, and what a first project would involve.
        </p>
        <a href="/contact" className="inline-block rounded-lg bg-[#B23E13] px-5 py-3 font-semibold text-white">Talk to the Founder</a>
      </div>
    </>
  ),
};

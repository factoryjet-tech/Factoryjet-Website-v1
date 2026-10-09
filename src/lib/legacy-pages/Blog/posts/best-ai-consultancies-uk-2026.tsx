import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

const SLUG = 'best-ai-consultancies-uk-2026';
const PAGE_URL = `https://factoryjet.com/blog/${SLUG}`;
const IMG = `/blog-images/${SLUG}`;
const TITLE = 'Best AI Consultancies in the UK and London (2026): 14 Compared, Including Us';
const META_DESCRIPTION =
  'Compare 14 UK AI consultancies for 2026 by the buyer they suit: small firms, 50-person companies, data teams and regulated businesses. London list included.';

// Every fact about every firm below was read on that firm's own website on
// 9 October 2026 (URL in `source`, plus `hqSource` where the location or the
// founding date came from a different page on the same site). Nothing here is
// paid placement. The order is NOT a ranking; firms are grouped by the kind of
// buyer they suit. The ItemList schema, the shortlist table and the London
// table all map from this same array, so list and schema cannot drift.
type Group =
  | 'A firm of about 10 people'
  | 'A company of about 50 people'
  | 'A mid-market company with a data team'
  | 'A regulated business'
  | 'Us';

interface Firm {
  name: string;
  url: string;
  source: string;
  hqSource?: string;
  group: Group;
  based: string;
  london?: string;
  type: string;
  clients: string;
  what: string;
  bestFor: string;
  ask: string;
}

const FIRMS: Firm[] = [
  {
    name: 'The AI Consultancy',
    url: 'https://theaiconsultancy.ai/',
    source: 'https://theaiconsultancy.ai/',
    hqSource: 'https://theaiconsultancy.ai/about',
    group: 'A firm of about 10 people',
    based: 'Hoxton, London, with a second office in Chelmsford, Essex',
    london: '20 Wenlock Road, Hoxton, N1 7GU',
    type: 'Claude and ChatGPT set-up, staff training and AI readiness work',
    clients: 'UK SMEs, scaleups and larger organisations',
    what: "It specialises in setting up Claude, the AI assistant made by Anthropic, across UK teams, and also works with ChatGPT. Services run from a two-week readiness review through to builds and staff training, plus a part-time Chief AI Officer. It has traded since June 2024 and publishes fixed fees for each stage.",
    bestFor: 'Small firms in or near London that want face-to-face workshops and a fixed fee for the first step.',
    ask: 'Whether Claude is the right tool for your job or one option among several, and what the handover covers.',
  },
  {
    name: 'AI Expert UK',
    url: 'https://www.ai-expert.co.uk/',
    source: 'https://www.ai-expert.co.uk/',
    hqSource: 'https://www.ai-expert.co.uk/ai-consulting-services',
    group: 'A firm of about 10 people',
    based: 'Worcester (92 Blakefield Road, WR2 5DP)',
    type: 'SME workshops, roadmaps, implementation, training and AI policy',
    clients: 'UK SMEs; its site quotes the managing directors of Scimitar Sports, Build Group and Hayward-Wright Accounts',
    what: "A three-step route: a fixed-fee AI Workshop, an AI Roadmap that says what to build and what it will cost, then implementation. It starts with a free two-minute AI Readiness Assessment and also offers training and AI policy help. It says it is an independent adviser and does not sell software.",
    bestFor: 'Owner-managed firms outside London that want a short paid workshop before they commit to anything bigger.',
    ask: 'What the monthly implementation fee covers and how long a typical roadmap takes to deliver.',
  },
  {
    name: 'Optimus Consulting',
    url: 'https://www.optimus-consulting.co.uk/',
    source: 'https://www.optimus-consulting.co.uk/',
    hqSource: 'https://www.optimus-consulting.co.uk/about/',
    group: 'A firm of about 10 people',
    based: 'Crewe, working UK-wide',
    type: 'Founder-led AI audits and builds for service businesses',
    clients: 'UK customer service SMEs, with a background in motor claims and insurance',
    what: "Run by founder Chris Latham, who spent 25 years in motor claims and insurance operations and founded the firm in 2021. His rule is \"Process before technology\": map the workflow, fix it, then automate what is left. Services include a three-step operational AI audit and an AI visibility audit. Its site lists 15 live builds.",
    bestFor: 'Small service firms, especially in insurance and claims, that want one experienced operator to do the work.',
    ask: 'How many audit days a firm your size needs, and how support works once a build is live.',
  },
  {
    name: 'iwantmore.ai',
    url: 'https://iwantmore.ai/',
    source: 'https://iwantmore.ai/',
    hqSource: 'https://iwantmore.ai/ai-consulting-uk-about-us/',
    group: 'A company of about 50 people',
    based: 'UK-based; East Anglian office at Stowmarket Innovation Gateway, Suffolk',
    type: 'AI strategy, use-case discovery, staff training and Microsoft Copilot',
    clients: 'Its site quotes leaders at FRP Advisory, Midwich Group, Opinium and Ecovis',
    what: "Founded in 2023; co-founder Craig Bird spent nine years at Microsoft. It runs readiness assessments and workshops that list and rank use cases, then trains staff, with courses on Microsoft Copilot and Power Platform. A quote on its site from FRP Advisory's finance chief says the process surfaced over a hundred use cases.",
    bestFor: 'Professional services firms on Microsoft 365 that need a ranked list of use cases and staff trained to use Copilot.',
    ask: 'How much of the build they do themselves once the use cases are chosen.',
  },
  {
    name: 'OpenKit',
    url: 'https://openkit.co.uk/',
    source: 'https://openkit.co.uk/',
    hqSource: 'https://openkit.co.uk/about/company',
    group: 'A company of about 50 people',
    based: 'Cambridge and Durham; founded 2020',
    type: 'AI audit with a costed roadmap, then an embedded delivery team',
    clients: 'Schools, law firms, clinics, financial services firms and manufacturers; named work includes FW Thorpe',
    what: "Most work starts with a fixed-scope AI Audit that ends in a written report and a costed roadmap. Carrying on is a separate decision: an Embedded AI Lead then builds the agreed automations inside your business. It also writes AI governance rules checked against UK GDPR and offers private set-ups on infrastructure you control. It says it holds ISO 27001, ISO 9001 and Cyber Essentials.",
    bestFor: 'Companies that must pass a security or procurement review before any AI work starts.',
    ask: 'What the monthly delivery allocation buys in days, and what the minimum commitment is.',
  },
  {
    name: 'Helium42',
    url: 'https://helium42.com/',
    source: 'https://helium42.com/',
    group: 'A company of about 50 people',
    based: 'London and Hamminkeln, Germany',
    london: '80A Uxbridge Road, W12 8LR',
    type: 'AI training, strategy, and marketing and sales systems',
    clients: 'Mid-market companies in the UK and German-speaking Europe',
    what: "It pairs training with building: discovery and education for two to four weeks, a build of six to twelve weeks, then handover, designed so your team can run the system alone by day 90. Its own products are an AI content system and an AI sales agent called Salesman Sam. Helium42 is a trading name of White Hat SEO Limited.",
    bestFor: 'Marketing-led and sales-led companies that want staff trained while the first system is built.',
    ask: 'Whether your project fits its content and sales products or needs custom work, and who does that work.',
  },
  {
    name: 'Generativ',
    url: 'https://www.generativ.co.uk/',
    source: 'https://www.generativ.co.uk/',
    group: 'A company of about 50 people',
    based: 'Nottingham (9A Beck Street, its primary office) and London',
    london: '66 Paul Street, EC2A 4NA (its primary office is in Nottingham)',
    type: 'AI consulting and integration for growing businesses',
    clients: 'Growing UK businesses, including professional services, ecommerce brands, agencies and recruiters',
    what: "It designs what it calls an AI operating system: a plan for how AI fits your workflows, then the integration work that connects CRMs, inboxes, automations and AI agents. It also builds AI lead generation systems and runs AI training. It publishes indicative prices.",
    bestFor: 'Growing companies with several disconnected AI tools that want them joined into one working system.',
    ask: 'Which platforms the integrations run on and who owns those accounts.',
  },
  {
    name: 'Fifty One Degrees',
    url: 'https://www.51d.co/',
    source: 'https://www.51d.co/',
    hqSource: 'https://www.51d.co/about/',
    group: 'A mid-market company with a data team',
    based: 'London and New York; founded 2023',
    london: '167 to 169 Great Portland Street, W1W 5PF',
    type: 'Embedded senior practitioners who build AI agents, voice AI and predictive models',
    clients: "Mid-market businesses, which it defines as about £5m to £250m in turnover; named work includes Heatable, Freddie's Flowers and Resi",
    what: "Senior people join your team and build AI agents, voice AI, data science models and data pipelines. It says a working proof of concept ships in two to four weeks. Its founders previously built the fintech Fluro and the credit risk consultancy 4most. It also offers a part-time AI officer.",
    bestFor: 'Mid-market companies, especially in financial services, that want models and agents built alongside their own analysts.',
    ask: 'How knowledge passes to your data team, and what a retained engagement costs after the proof of concept.',
  },
  {
    name: 'Winder.AI',
    url: 'https://winder.ai/locations/uk/ai-consulting/',
    source: 'https://winder.ai/locations/uk/ai-consulting/',
    hqSource: 'https://winder.ai/locations/uk/',
    group: 'A mid-market company with a data team',
    based: 'Yorkshire since 2013 (registered office in Harrogate); remote-first, no London office',
    type: 'Engineering-led AI consulting, language model systems, agents and MLOps',
    clients: 'Named UK work for Ofcom, Stability AI and Tractable',
    what: "Founder Phil Winder set the firm up in 2013 and still runs it. It ships generative AI, large language model applications, agents and MLOps, the pipelines that keep models running in production. Its UK page names the regulator for each kind of work: the FCA, the ICO and the MHRA. It publishes hourly rates and can contract through G-Cloud.",
    bestFor: 'Companies with their own engineers or data scientists that need senior specialists for a hard technical build.',
    ask: 'Which engineers would work on your project and where they are based.',
  },
  {
    name: 'Datatonic',
    url: 'https://datatonic.com/',
    source: 'https://datatonic.com/',
    hqSource: 'https://datatonic.com/about/',
    group: 'A mid-market company with a data team',
    based: 'London, with offices in Stockholm, Nyon, Barcelona and Montreal',
    london: 'Level 45, One Canada Square, E14 5AB',
    type: 'Google Cloud data and AI consultancy',
    clients: 'Large companies with big data estates; work shown on its site includes Vodafone and ASOS',
    what: "It builds data platforms, generative AI and marketing analytics on Google Cloud, including Gemini Enterprise roll-outs, Looker dashboards and cloud data migration. Its site says it is Google Cloud's 2026 Partner of the Year for the UK and Ireland and a 12-time Google Cloud Partner of the Year winner.",
    bestFor: 'Companies whose data already sits on Google Cloud, or is moving there, and that have a data team to work with.',
    ask: 'Whether the design ties you to Google Cloud, and what a move to another cloud would involve.',
  },
  {
    name: 'Faculty',
    url: 'https://faculty.ai/en-gb',
    source: 'https://faculty.ai/en-gb',
    hqSource: 'https://faculty.ai/en-gb/company',
    group: 'A regulated business',
    based: 'London; set up in 2014',
    london: 'Level 5, 160 Old Street, EC1V 9BW',
    type: 'Applied AI for government, defence, health and large companies',
    clients: 'Large organisations and public bodies; work on its site includes the NHS, NESO and the Defence Science and Technology Laboratory',
    what: "Its services run from AI strategy and design through development and operations to helping staff adopt the tools, plus AI due diligence and AI safety work. Its home page carries a quote from OpenAI's chief executive thanking it for red teaming, which means attacking a model on purpose to find weak points. It has its own AI operating system, Frontier, and calls itself a leading AI partner to government.",
    bestFor: 'Public bodies and large regulated organisations with complex, high-stakes decisions to support.',
    ask: 'Whether your project is large enough for them, and how much of the solution depends on their Frontier platform.',
  },
  {
    name: 'Aiimi',
    url: 'https://aiimi.com/',
    source: 'https://aiimi.com/',
    hqSource: 'https://aiimi.com/about',
    group: 'A regulated business',
    based: 'Milton Keynes (100 Avebury Boulevard, MK9 1FH); independently owned since 2007',
    type: 'Data governance platform plus AI, data and digital consulting',
    clients: 'Large enterprises; case studies on its site include KPMG, PwC, Jaguar Land Rover and Now: Pensions',
    what: "Aiimi sells a platform that finds, labels and governs company data so AI answers can be trusted, plus consultants who cover AI strategy, responsible AI, data engineering and building AI at scale. It says all its consultants are security-cleared and that it is on major public sector and government frameworks.",
    bestFor: 'Organisations with large stores of sensitive documents that must be put in order before AI touches them.',
    ask: 'Whether you need the platform, the consultants or both, and how each is priced.',
  },
  {
    name: 'Transparity',
    url: 'https://www.transparity.com/artificial-intelligence-consulting-services/',
    source: 'https://www.transparity.com/artificial-intelligence-consulting-services/',
    hqSource: 'https://www.transparity.com/contact-us/',
    group: 'A regulated business',
    based: 'London',
    london: '2 Kingdom Street, Paddington Central, W2 6BD',
    type: 'Microsoft-only AI, Copilot, Azure and security consultancy',
    clients: 'Financial services and insurance, manufacturing, professional services, non-profit, public sector and retail',
    what: "It describes itself as a pure-play Microsoft partner. Its consultants run a readiness assessment, then deliver Microsoft 365 Copilot roll-outs, AI agents and custom AI on Azure. It says it holds all six Microsoft Solutions Partner designations and that it is the UK's first Microsoft Frontier Partner.",
    bestFor: 'Regulated organisations standardised on Microsoft 365 and Azure that want Copilot rolled out with governance from the start.',
    ask: 'Which licences you need before work starts, and whether Microsoft funding applies to your project.',
  },
  {
    name: 'FactoryJet (that is us)',
    url: 'https://factoryjet.com/uk/ai-consulting',
    source: 'https://factoryjet.com/uk/ai-consulting',
    group: 'Us',
    based: 'Works remotely with UK clients, over video calls in UK working hours',
    type: 'AI consulting that leads into a build: AI agents and AI inside ecommerce and operations',
    clients: 'Small and mid-size businesses; 500+ businesses served since 2014',
    what: 'We advise and then build. We map one process, check the data and the UK GDPR position, tell you whether to buy a tool or build one, and then design, build and support the AI agent or integration if a build is the right call. Our strongest ground is where AI meets online stores, B2B ordering, finance and operations. The founder is involved in every project, we can host on UK or EU cloud, and you own what we build.',
    bestFor: 'Ecommerce and operations-heavy small and mid-size companies that want the advice and the build from one team.',
    ask: 'Whether a remote team suits you. If you need people in your office every week, security-cleared staff or a board paper from a known name, pick another firm from this list.',
  },
];

const GROUPS: Group[] = [
  'A firm of about 10 people',
  'A company of about 50 people',
  'A mid-market company with a data team',
  'A regulated business',
  'Us',
];

const GROUP_INTRO: Record<Group, string> = {
  'A firm of about 10 people':
    'You have no IT team and no time for a long project. You need someone who will look at how the work runs, fix one thing and show your staff how to use it. These three say plainly that they work with small firms, and all three publish a price for the first step.',
  'A company of about 50 people':
    'You have several teams, a handful of AI tools nobody coordinates and a board that wants a plan. Each of these four has a defined first step, such as an audit, a workshop or a discovery phase, and each then trains your staff, builds what the plan recommends, or does both.',
  'A mid-market company with a data team':
    'You already employ analysts or engineers. You need senior specialists who work next to them on something hard: predictive models, agents in production or a data platform. These three are set up for that.',
  'A regulated business':
    'Your data is sensitive, and a regulator, an auditor or a procurement team will ask how the AI was built. These three show public sector, defence, financial services or security credentials on their own sites.',
  Us: 'We advise on AI and then build it, so we are on this list. We put ourselves last and say where we do not fit.',
};

// Published prices, copied from each firm's own page on 9 Oct 2026.
// These are the firms' own figures, not FactoryJet prices.
const PRICES: { firm: string; figure: string; vat: string; source: string }[] = [
  {
    firm: 'The AI Consultancy',
    figure: 'Readiness Sprint from £3,500; Discovery and Pilot from £15,000; Build and Embed from £40,000; day rate £950 to £1,500',
    vat: 'Excludes VAT',
    source: 'https://theaiconsultancy.ai/pricing',
  },
  {
    firm: 'AI Expert UK',
    figure: 'AI Workshop from £2,999; AI Roadmap from £4,999; AI Implementation from £5,499 a month',
    vat: 'Not stated',
    source: 'https://www.ai-expert.co.uk/ai-consulting-services',
  },
  {
    firm: 'Optimus Consulting',
    figure: 'Operational AI audit at £1,250 a day; AI visibility audit and 90-day programme £1,995',
    vat: 'Visibility audit is plus VAT; day rate not stated',
    source: 'https://www.optimus-consulting.co.uk/services/',
  },
  {
    firm: 'OpenKit',
    figure: 'AI Audit £10,000 at standard scope; optional AI Charter adds £3,000; Embedded AI Lead from £5,000 a month',
    vat: 'Excludes VAT',
    source: 'https://openkit.co.uk/pricing',
  },
  {
    firm: 'Generativ',
    figure: 'Indicative: discovery £3,500; builds £3,000 to £15,000 or more; maintenance £200 to £500 a month',
    vat: 'Excludes VAT',
    source: 'https://www.generativ.co.uk/blog/ai-integration-cost-uk',
  },
  {
    firm: 'Fifty One Degrees',
    figure: 'Typical engagement £50,000 to £250,000, from its own comparison of London consultants',
    vat: 'Not stated',
    source: 'https://www.51d.co/top-10-ai-strategy-consultants-in-london-for-2026-a-comprehensive-guide',
  },
  {
    firm: 'Winder.AI',
    figure: '£150 to £300 an hour for most engineering work; £350 an hour with a £5,000 monthly minimum for specialist reinforcement learning consulting',
    vat: 'Not stated',
    source: 'https://winder.ai/locations/uk/ai-consulting/',
  },
];

// How each firm says it moves from advice to a running system. Durations are
// the firms' own, read on 9 Oct 2026.
const PATHS: { firm: string; first: string; then: string }[] = [
  {
    firm: 'The AI Consultancy',
    first: 'Readiness Sprint, two weeks',
    then: 'Discovery and Pilot with a working prototype (4 to 8 weeks), then Build and Embed in production (8 to 16 weeks)',
  },
  {
    firm: 'OpenKit',
    first: 'AI Audit with a costed roadmap',
    then: 'An Embedded AI Lead builds the agreed automations inside your business; carrying on is a separate decision',
  },
  {
    firm: 'Helium42',
    first: 'Discovery and education, 2 to 4 weeks',
    then: 'Build and integrate (6 to 12 weeks), then handover to your team (4 to 8 weeks)',
  },
  {
    firm: 'Generativ',
    first: 'Discovery',
    then: 'Build, then monthly maintenance, each budgeted separately',
  },
  {
    firm: 'Fifty One Degrees',
    first: 'Senior practitioners embed in your team',
    then: 'It says a working proof of concept ships in 2 to 4 weeks',
  },
  {
    firm: 'Winder.AI',
    first: 'Fixed-fee discovery, four to eight weeks',
    then: 'Design and delivery, led by senior engineers',
  },
  {
    firm: 'FactoryJet',
    first: 'Free first call, then an AI readiness assessment',
    then: 'We design, build and support the agent or integration, at a fixed quote per stage',
  },
];

// Third-party sources. Each link was opened on 9 Oct 2026.
const SOURCES = {
  ons: 'https://www.ons.gov.uk/businessindustryandtrade/business/businessservices/articles/artificialintelligenceinukbusinesses/2023to2026',
  ico: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/what-are-the-accountability-and-governance-implications-of-ai/',
  ranking: 'https://www.consultancy.uk/rankings/top-consulting-firms-in-the-uk-by-area-of-expertise/ai-genai',
  deloitte: 'https://www.deloitte.com/uk/en/services/consulting/services/artificial-intelligence-and-data.html',
  pwc: 'https://www.pwc.co.uk/services/technology/generative-artificial-intelligence.html',
  kpmg: 'https://kpmg.com/uk/en/services/ai.html',
  ey: 'https://www.ey.com/en_uk/services/ai',
  gpmd: 'https://www.gpmd.co.uk/services/ai-consultancy',
  tomoro: 'https://tomoro.ai/',
  meshai: 'https://www.mesh-ai.com/',
};

const FAQS: FAQItem[] = [
  {
    q: "What are the top AI consultancies in London in 2026?",
    a: "Seven firms in this guide list a London address on their own sites: The AI Consultancy (Hoxton), Generativ (Paul Street), Helium42 (Uxbridge Road), Fifty One Degrees (Great Portland Street), Datatonic (One Canada Square), Faculty (Old Street) and Transparity (Paddington). They suit different buyers, from 10-person firms to public bodies, so match by size first. We read every address on 9 October 2026.",
  },
  {
    q: "Best AI consultancy in London for implementing AI in a 50-person company?",
    a: "Call three. The AI Consultancy in Hoxton publishes fixed fees from a two-week readiness review up to a production build. Generativ has a London office and joins CRMs, inboxes and AI agents into one system. Helium42 trains your staff during the build. If a security review comes first, add OpenKit, which says it holds ISO 27001. Ask each one for a fixed first step in writing.",
  },
  {
    q: "Who is the best small business AI consultant in the UK?",
    a: "There is no single best one. For a firm of about 10 people, start with The AI Consultancy in London, AI Expert UK in Worcester and Optimus Consulting in Crewe. All three say they work with small firms and all three publish the price of a first step. Pick the one whose past clients look most like you, and buy one fixed-fee job before anything larger.",
  },
  {
    q: "What are the best AI consulting companies in the UK?",
    a: "It depends on your size. For small firms: The AI Consultancy, AI Expert UK and Optimus Consulting. For companies of about 50 people: OpenKit, iwantmore.ai, Helium42 and Generativ. For mid-market companies with a data team: Fifty One Degrees, Winder.AI and Datatonic. For regulated organisations: Faculty, Aiimi and Transparity. For the largest programmes, the Big Four and the strategy firms. FactoryJet suits ecommerce and operations work.",
  },
  {
    q: "Is there a list of AI consulting companies in the UK?",
    a: "Yes. This page lists 14, each checked on its own website on 9 October 2026 with a link to the source. For large firms, consultancy.uk publishes a ranking of AI and GenAI consulting firms that says it assessed more than 500 and named 35. Lists written by consultancies usually include the author, as this one does, so check who wrote any list you rely on.",
  },
  {
    q: "Which UK consultancies can help us go from AI strategy to a working product?",
    a: "Look for a firm whose first step leads into a build by the same people. The AI Consultancy runs a readiness sprint, a pilot and a production build. OpenKit runs an audit, then an embedded lead builds. Helium42 moves from discovery to a build of six to twelve weeks. Fifty One Degrees says a proof of concept ships in two to four weeks. Winder.AI and FactoryJet also build what they recommend.",
  },
  {
    q: "What consultancies can help an e-commerce business develop new AI-powered digital products?",
    a: "Pick a firm that builds stores as well as AI. GPMD in London offers AI consultancy for ecommerce businesses and builds custom agents alongside its Shopify and BigCommerce work. Generativ lists consumer and ecommerce brands among its industries. FactoryJet builds online stores, B2B ordering and the AI agents that sit inside them. Ask each one to show an AI feature running in a live store.",
  },
  {
    q: "Who are the generative AI consultants for business in London?",
    a: "Match the consultant to the assistant your company already pays for. For Claude or ChatGPT, The AI Consultancy sets up licences and trains staff. For Microsoft 365 Copilot, Transparity in Paddington describes itself as a pure-play Microsoft partner. For Gemini, Datatonic rolls out Gemini Enterprise on Google Cloud. Generativ and Helium42 cover strategy, training and builds for growing and mid-market companies. All five list London addresses.",
  },
  {
    q: "What are the best AI consulting firms near me?",
    a: "Near matters less than it used to, because most AI consulting runs over video. If you want people in the room, use the Where based column: London, Worcester, Crewe, Suffolk, Cambridge, Durham, Nottingham, Yorkshire and Milton Keynes are all covered by firms in this guide. Ask whether on-site days cost extra. The AI Consultancy says on-site delivery within Greater London is included in its fee.",
  },
  {
    q: "Who are the best AI consultants near the South Bank?",
    a: "No firm in this guide lists a South Bank office. The closest match is The AI Consultancy, based in Hoxton, which says it is most often on site in the City of London, Westminster, Canary Wharf, Shoreditch and the South Bank. Fifty One Degrees, Faculty, Generativ and Transparity also have London offices. Ask for the first workshop at your own premises.",
  },
  {
    q: "What is the best nearshore generative AI consulting firm for a UK company?",
    a: "Nearshore means a team in a nearby country and a similar time zone, which for a UK buyer usually means Europe. Helium42 works from London and Hamminkeln in Germany. Winder.AI says the engineers its founder works with most are in London and Italy. FactoryJet works remotely with UK clients and holds calls in UK working hours.",
  },
  {
    q: "I run a creative agency in Bristol. Who can train my team to use AI in real client workflows?",
    a: "We could not confirm a Bristol office for any firm in this guide, so plan for a trainer who travels or teaches over video. Four list staff training: The AI Consultancy (on site and remote, on Claude and ChatGPT), iwantmore.ai (courses including Microsoft Copilot), Helium42 (programmes for marketing teams) and AI Expert UK (built around the tools your staff use). Ask the trainer to teach on two of your real client jobs.",
  },
  {
    q: "What case studies exist of AI consultancies delivering real ROI for enterprise clients in the UK?",
    a: "These are on the firms' own sites, read on 9 October 2026. Fifty One Degrees says 48% of inbound aftercare at Heatable is resolved without a ticket. Aiimi says it cleaned up more than 350 million sensitive files at PwC. Datatonic shows AI platform work for Vodafone. Faculty shows hospital demand forecasting for the NHS. OpenKit says it validated about 6.5 million occupancy records for FW Thorpe. Ask each firm how the result was measured.",
  },
  {
    q: "What are the top AI consultancy companies in the UK?",
    a: "For large organisations, consultancy.uk puts Accenture, McKinsey, Deloitte, Bain, PwC, IBM Consulting and Boston Consulting Group at the top level of its AI and GenAI ranking. Among the smaller firms in this guide, the sites cited most in the 140 AI answers we read were The AI Consultancy (at least 21 times), Fifty One Degrees (6), and OpenKit and Generativ (5 each). Start with your size and your systems.",
  },
  {
    q: "What are some reputable AI consultants in the UK?",
    a: "Reputable shows up as things you can check. OpenKit says it holds ISO 27001 and ISO 9001. Winder.AI names public work for Ofcom. Faculty shows work for the NHS and the Defence Science and Technology Laboratory. Aiimi says all its consultants are security-cleared. The AI Consultancy and Optimus Consulting publish their prices. Ask any firm for a named client you can phone and for the certificate behind any badge.",
  },
  {
    q: "How much does an AI consultant cost in the UK?",
    a: "Seven of the 13 other firms in this guide publish figures. On 9 October 2026 a first step ran from £2,999 for a workshop at AI Expert UK and £3,500 for a two-week readiness review at The AI Consultancy to £10,000 for an audit at OpenKit. Published day rates were £950 to £1,500 at The AI Consultancy and £1,250 at Optimus Consulting. Most figures exclude VAT. Our UK AI cost guide covers builds and running costs.",
  },
  {
    q: "What does an AI consultant do?",
    a: "An AI consultant looks at how work moves through your business, finds the tasks where AI can save time safely, and plans how to bring it in: which tools, what data, what rules and who checks the output. Some stop at a report. Others train your staff or build the system. Ask which of those a firm does with its own people before you sign.",
  },
  {
    q: "What does an AI consultancy do?",
    a: "An AI consultancy does the consultant's job with a team: a readiness assessment, a ranked list of use cases, a plan with costs, rules for safe use and often staff training. Many now build as well. Ask each firm in this guide which parts it delivers with its own people: the advice, the training, the build or all of them. The answer tells you whether you will need a second supplier.",
  },
  {
    q: "Who are the Big 4 in AI?",
    a: "In consulting, the Big Four are Deloitte, PwC, EY and KPMG, the four largest accounting and professional services networks. All four have UK AI pages. Deloitte covers AI strategy through to custom builds. PwC describes a system for running AI agents across a large organisation. KPMG says it helps design, build and scale AI while managing risk. EY groups its work under AI-ready data, agentic AI and responsible AI.",
  },
  {
    q: "Who are the big 5 consultancy firms?",
    a: "The Big Four (Deloitte, PwC, EY and KPMG) are often grouped with Accenture as the big five for technology and change programmes. McKinsey, BCG and Bain are the main strategy firms and are usually counted separately. On consultancy.uk's AI ranking, Accenture, McKinsey, Deloitte, Bain, PwC, IBM Consulting and BCG share the top level, with KPMG, Capgemini and EY on the next one.",
  },
  {
    q: "What are the top 10 AI consulting companies?",
    a: "By size, the names are Accenture, Deloitte, PwC, EY, KPMG, McKinsey, BCG, Bain, IBM Consulting and Capgemini. All ten appear in the top two levels of consultancy.uk's UK ranking for AI and GenAI. They are built for large programmes. A UK company with fewer than a few hundred staff will usually get more senior attention from a specialist, because the people who scope the work also do it.",
  },
  {
    q: "What are some good AI consulting firms in London?",
    a: "By buyer: for a small firm, The AI Consultancy in Hoxton. For a growing company, Generativ on Paul Street or Helium42 on Uxbridge Road. For a mid-market company with analysts, Fifty One Degrees on Great Portland Street. For Google Cloud data work, Datatonic at One Canada Square. For Microsoft, Transparity in Paddington. For government and health, Faculty on Old Street. Each address comes from the firm's own site.",
  },
  {
    q: "Which companies offer generative AI consulting services?",
    a: "Most firms in this guide do. The AI Consultancy specialises in Claude and also works with ChatGPT. Transparity covers Microsoft 365 Copilot and Azure. Datatonic covers Gemini Enterprise on Google Cloud. Winder.AI builds large language model applications. OpenKit and Generativ start with an audit or a discovery phase and then connect generative AI to your own systems. Choose by the platform you already use.",
  },
  {
    q: "Should a small UK business hire a Big Four firm for AI?",
    a: "Usually not for a first project. None of the four UK AI pages we read shows a price for its services or a small fixed first step, and the client stories on PwC's page are organisations such as Virgin Money, SSE and Centrica. A firm of 10 or 50 people will move faster with a specialist that sells a two-week review or a single workshop. The Big Four fit when a board, an auditor or a regulator wants their sign-off.",
  },
  {
    q: "Is there a demand for AI consultants?",
    a: "Yes, because adoption is rising from a low base. The Office for National Statistics reported in July 2026 that AI use among UK businesses with 10 or more employees rose from around 12% to around 35% since late 2023. Its earlier analysis found that difficulty identifying use cases, cost and a lack of expertise were the most common reasons for holding back. Those are the gaps consultants are hired to fill.",
  },
  {
    q: "What is an AI readiness assessment?",
    a: "It is a short check of whether your goals, data, systems, people and rules are ready for AI, ending in a ranked list of jobs worth doing first. Three firms here offer a free online version: AI Expert UK (two minutes), iwantmore.ai (five minutes) and OpenKit (ten questions, no email needed). Paid versions go deeper. The AI Consultancy sells a two-week one and OpenKit sells a full audit.",
  },
  {
    q: "Do we need a DPIA before an AI project in the UK?",
    a: "Often, yes. A DPIA, or data protection impact assessment, is a written check of the risks a project poses to people's personal data. The Information Commissioner's Office says that in the vast majority of cases, using AI involves processing likely to result in a high risk, which triggers the legal requirement to do one. You assess it case by case. A good consultancy raises it before the build starts.",
  },
  {
    q: "Is it safe to pick a consultancy that an AI assistant recommended?",
    a: "Treat it as a lead. We read 140 AI answers to 13 UK buyer questions on 9 October 2026. Among the pages they cited most, comparison lists were cited 125 times, and three of the five rival lists we opened place the author's own firm first or second. Check the firm's own site, look for named clients and ask to speak to one before you commit.",
  },
  {
    q: "AI consultancy or AI agent development company: which do I need?",
    a: "Hire a consultancy when you do not yet know which job to give AI, or when staff need training and rules first. Hire a build firm when the job is already chosen and you need software that takes actions in your systems. Several firms do both. Our separate guide to AI agent development companies in the UK covers firms that mainly build.",
  },
];

const link = 'text-[#B23E13] underline';

export const post: BlogPost = {
  id: '751',
  slug: SLUG,
  title: TITLE,
  excerpt:
    'A fair, fact-checked guide to AI consultancies in the UK and London for 2026, grouped by the kind of buyer each one suits. Where each firm is based, what it does, what it publishes about price, where the Big Four fit, and how to choose. FactoryJet is on the list and says so.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Oct 9, 2026',
  dateModified: 'Oct 10, 2026',
  readTime: '24 min read',
  imageUrl: `${IMG}-hero.webp`,
  imageAlt:
    'Over-the-shoulder view of a woman at an oak desk looking at a laptop that shows six coloured cards, three of them ticked, with a notepad, an orange mug and brick terraced houses outside the window',
  meta: {
    title: 'Best AI Consultancies UK & London 2026: 14 Compared | FactoryJet',
    description: META_DESCRIPTION,
  },
  keyTakeaways: [
    'There is no single best AI consultancy in the UK. A 10-person firm, a 50-person company, a mid-market company with a data team and a regulated business each need a different kind of adviser.',
    "Every fact below was read on each firm's own website on 9 October 2026. Nobody paid to be listed, and the order is not a ranking.",
    'Seven of the 13 other firms publish prices. A first step runs from £2,999 for a workshop (AI Expert UK) to £10,000 for an audit (OpenKit). Most figures exclude VAT.',
    'Seven of the 14 list a London address on their own sites. The London table gives each postcode and its source.',
    'FactoryJet is on this list. We work remotely with UK clients, and we advise and then build. If you need people in your office every week, choose a firm near you.',
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
              datePublished: '2026-10-09',
              dateModified: '2026-10-10',
              isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com' },
              publisher: { '@id': 'https://factoryjet.com/#organization' },
              about: { '@type': 'Thing', name: 'AI consultancies in the United Kingdom' },
              speakable: {
                '@type': 'SpeakableSpecification',
                cssSelector: ['#answer-first', 'h1', 'h2'],
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'AI consultancies in the UK and London compared (2026)',
              itemListOrder: 'https://schema.org/ItemListUnordered',
              numberOfItems: FIRMS.length,
              itemListElement: FIRMS.map((f, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: f.name.replace(' (that is us)', ''),
                url: f.url,
              })),
            },
          ]),
        }}
      />

      <div id="answer-first" className="mb-8 rounded-2xl border border-gray-200 bg-gray-50 p-6 not-prose">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#B23E13] mb-2">The short answer</p>
        <p className="text-gray-800 leading-relaxed mb-3">
          The best AI consultancy in the UK depends on your size. For a firm of about 10 people: The AI Consultancy, AI Expert UK or Optimus Consulting. For about 50 people: OpenKit, iwantmore.ai, Helium42 or Generativ. With a data team: Fifty One Degrees, Winder.AI or Datatonic. For regulated work: Faculty, Aiimi or Transparity. For ecommerce and operations: FactoryJet.
        </p>
        <p className="text-gray-800 leading-relaxed mb-3">
          We checked all 14 on their own websites on 9 October 2026: where each is based, what it does, who it serves and any price it publishes. Nobody paid to be listed. Seven list a London address. Firms are grouped by the buyer they suit, and the order inside a group means nothing.
        </p>
        <p className="text-gray-800 leading-relaxed">
          If you are short on time, tell us your size and the job you have in mind. The founder will say which kind of firm fits, even when that is another firm on this page. <a href="/uk/ai-consulting" className={link}>Ask the founder</a>.
        </p>
      </div>

      <p className="mb-4">
        Ask an AI assistant for the best AI consultancy in the UK and the answer often leans on a ranking of global firms. We know because we checked. On 9 October 2026 we read 140 answers to 13 UK buyer questions from ChatGPT, Claude, Gemini, Perplexity and Google&rsquo;s AI results. Two sources tied as the most cited, with at least 21 citations each. One was The AI Consultancy&rsquo;s own website, across four questions. The other was <a href={SOURCES.ranking} className={link} rel="noopener" target="_blank">consultancy.uk&rsquo;s ranking of AI and GenAI consulting firms</a>, across three. The ranking&rsquo;s top level holds Accenture, McKinsey, Deloitte, Bain, PwC, IBM Consulting and Boston Consulting Group.
      </p>
      <p className="mb-4">
        That helps if you run a bank. It is little help to a 10-person surveying practice or a 50-person distributor. So we did the slow part. We took the UK firms that came up in those answers and in UK search results, opened each firm&rsquo;s own website, and wrote down only what the firm says about itself. Every profile links to its source. If we could not find a UK base on another firm&rsquo;s own site, that firm is not here.
      </p>
      <p className="mb-4">
        <strong>A note on honesty.</strong> FactoryJet advises on AI and then builds it, so we are on this list. We put ourselves last, and we tell you where another firm on this page will suit you better. Three of the five rival lists we read place the author&rsquo;s own firm first or second, so read every list with that in mind, including this one.
      </p>
      <p className="mb-6">
        A few terms first. An <strong>AI consultancy</strong> helps you decide where AI fits and how to bring it in safely. An <strong>AI agent</strong> is software that takes actions in your systems, such as updating an order or drafting a reply for approval, where a chatbot only talks. A <strong>DPIA</strong> (data protection impact assessment) is a written check of the risks to people&rsquo;s personal data. <strong>Mid-market</strong> means companies between small and corporate; one firm below defines it as £5m to £250m in turnover.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">The shortlist at a glance</h2>
      <p className="mb-4">
        Scan this first. Find the rows that match your size, then read those profiles in full.
      </p>
      <div className="overflow-x-auto mb-8 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Firm</th>
              <th className="p-3 text-left border border-gray-700">Suits</th>
              <th className="p-3 text-left border border-gray-700">Focus</th>
              <th className="p-3 text-left border border-gray-700">Where based</th>
              <th className="p-3 text-left border border-gray-700">Publishes prices</th>
            </tr>
          </thead>
          <tbody>
            {FIRMS.map((f) => (
              <tr key={f.name} className={f.group === 'Us' ? 'bg-orange-50' : 'odd:bg-white even:bg-gray-50'}>
                <td className="p-3 border border-gray-200 font-semibold align-top">{f.name}</td>
                <td className="p-3 border border-gray-200 align-top">{f.group === 'Us' ? 'Ecommerce and operations, remote' : f.group}</td>
                <td className="p-3 border border-gray-200 align-top">{f.type}</td>
                <td className="p-3 border border-gray-200 align-top">{f.based}</td>
                <td className="p-3 border border-gray-200 align-top">
                  {f.group === 'Us'
                    ? 'No. Fixed quote per stage after a call'
                    : PRICES.some((p) => p.firm === f.name)
                      ? 'Yes, see the price table'
                      : 'None on the pages we read'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">How we built this list</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Start with what buyers ask.</strong> Ten of our 13 questions came from Google Search Console, where searchers had been shown our pages for them. Three we wrote ourselves, such as &ldquo;Best small business AI consultant UK&rdquo;. We read 140 AI answers to them on 9 October 2026.</li>
        <li><strong>Note what the assistants cite.</strong> Among the pages cited most for each question, comparison lists were cited 125 times, service pages 98 times, home pages 34 times and articles 22 times. The AI Consultancy&rsquo;s own site was cited at least 21 times across four questions, the most of any consultancy in our sample.</li>
        <li><strong>Check each firm for a UK base.</strong> Each of the 13 other firms had to give a UK address or say it is UK-based on its own site. We also left out two names that older lists still carry: <a href={SOURCES.tomoro} className={link} rel="noopener" target="_blank">tomoro.ai</a> now redirects to deploy.co, a site titled The OpenAI Deployment Company, and the <a href={SOURCES.meshai} className={link} rel="noopener" target="_blank">Mesh-AI home page</a> says it is now part of Indicium AI.</li>
        <li><strong>Group by buyer, with no ranking.</strong> A list that puts a 10-person boutique next to a firm with thousands of staff helps nobody. We sorted firms into four groups by the buyer they describe on their own sites.</li>
        <li><strong>Read the source and keep the quote.</strong> Every description comes from the firm&rsquo;s own pages, opened on 9 October 2026. For each fact we saved the line that supports it: 170 lines in all. Client names and counts are the firm&rsquo;s own claims, and we say so.</li>
        <li><strong>Prices only from the firm.</strong> Where a firm publishes a price, we quote it and link the page. We never guess another company&rsquo;s price, and we give no star ratings, because we have not hired these firms.</li>
      </ol>

      <h2 className="text-2xl font-bold mt-10 mb-4">The best AI consultancies in the UK, by the kind of buyer they suit</h2>
      <p className="mb-6">
        Four groups, from the smallest buyer to the most regulated, with us last. Inside a group the order means nothing.
      </p>

      {GROUPS.map((g) => {
        const inGroup = FIRMS.filter((f) => f.group === g);
        return (
          <section key={g} className="mb-6">
            <h3 className="text-xl font-bold mt-8 mb-2">{g === 'Us' ? 'Advice, then the build: FactoryJet' : g}</h3>
            <p className="mb-4 text-gray-700">{GROUP_INTRO[g]}</p>
            {inGroup.map((f) => {
              const n = FIRMS.indexOf(f) + 1;
              return (
                <div key={f.name} className="mb-8">
                  <h4 className="text-lg font-bold mt-6 mb-2">{n}. {f.name}</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Based:</strong> {f.based}. <strong>Type:</strong> {f.type}.
                  </p>
                  <p className="mb-3">{f.what}</p>
                  <ul className="list-disc pl-6 mb-3 space-y-1">
                    <li><strong>Clients:</strong> {f.clients}</li>
                    <li><strong>Best for:</strong> {f.bestFor}</li>
                    <li><strong>Worth asking them:</strong> {f.ask}</li>
                  </ul>
                  <p className="text-sm text-gray-600">
                    Source:{' '}
                    <a href={f.source} className={link} rel="noopener" target={f.source.startsWith('https://factoryjet.com') ? undefined : '_blank'}>
                      {f.source.replace('https://', '')}
                    </a>
                    {f.hqSource && (
                      <>
                        {' '}| Also read:{' '}
                        <a href={f.hqSource} className={link} rel="noopener" target="_blank">
                          {f.hqSource.replace('https://', '')}
                        </a>
                      </>
                    )}
                  </p>
                </div>
              );
            })}
            {g === 'A firm of about 10 people' && (
              <figure className="my-8 not-prose">
                <img
                  src={`${IMG}-small-office.webp`}
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  alt="Two people at a standing table in a small office looking down at a tablet that shows four coloured boxes joined by arrows, with two colleagues working at desks behind them"
                  className="w-full h-auto rounded-xl"
                />
                <figcaption className="text-sm text-gray-600 mt-2">For a small firm the first job is one workflow drawn end to end. All three firms in this group publish what that step costs.</figcaption>
              </figure>
            )}
            {g === 'A company of about 50 people' && (
              <figure className="my-8 not-prose">
                <img
                  src={`${IMG}-workshop.webp`}
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  alt="A man draws boxes, circles and arrows in orange marker on a whiteboard while three colleagues watch from a meeting table with notebooks, water glasses and a white teapot"
                  className="w-full h-auto rounded-xl"
                />
                <figcaption className="text-sm text-gray-600 mt-2">At about 50 people the first step is usually a workshop or an audit. One client quoted on iwantmore.ai says the process surfaced over a hundred use cases; the work is choosing the first two.</figcaption>
              </figure>
            )}
          </section>
        );
      })}

      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 my-8 not-prose">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#B23E13] mb-2">A second opinion on your shortlist</p>
        <p className="text-gray-800 leading-relaxed mb-3">
          Our <a href="/uk/ai-consulting" className={link}>AI consulting service for UK businesses</a> starts with one workflow and ends with a system we build and support, if a build is the right call. The founder joins the first call and will tell you when a firm on this list fits you better.
        </p>
        <a href="/uk/ai-consulting" className="inline-block rounded-lg bg-[#B23E13] px-5 py-3 font-semibold text-white">Talk to the Founder</a>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">Top AI consultancies in London 2026</h2>
      <p className="mb-4">
        Seven of the 14 firms list a London address on their own sites. We copied each one on 9 October 2026.
      </p>
      <div className="overflow-x-auto mb-4 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Firm</th>
              <th className="p-3 text-left border border-gray-700">London address</th>
              <th className="p-3 text-left border border-gray-700">Suits</th>
            </tr>
          </thead>
          <tbody>
            {FIRMS.filter((f) => f.london).map((f) => (
              <tr key={f.name} className="odd:bg-white even:bg-gray-50">
                <td className="p-3 border border-gray-200 font-semibold align-top">
                  <a href={f.hqSource || f.source} className={link} rel="noopener" target="_blank">{f.name}</a>
                </td>
                <td className="p-3 border border-gray-200 align-top">{f.london}</td>
                <td className="p-3 border border-gray-200 align-top">{f.group}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-6">
        The other six UK firms are based outside London: OpenKit in Cambridge and Durham, iwantmore.ai in Suffolk, Aiimi in Milton Keynes, AI Expert UK in Worcester, Optimus Consulting in Crewe and Winder.AI in Yorkshire. Winder.AI says the engineers its founder works with most are in London and Italy. Ask any of them whether on-site days in London cost extra.
      </p>

      <h3 className="text-xl font-bold mt-8 mb-2">Best AI consultancy in London for implementing AI in a 50-person company?</h3>
      <p className="mb-4">
        Call three. <strong>The AI Consultancy</strong> in Hoxton publishes fixed fees for each stage, from a two-week readiness review to a production build, and runs workshops face to face. <strong>Generativ</strong> has a London office on Paul Street and joins CRMs, inboxes and AI agents into one system. <strong>Helium42</strong> on Uxbridge Road trains your staff during the build. If a security or procurement review comes first, add <strong>OpenKit</strong>, which is based in Cambridge and Durham and says it holds ISO 27001. FactoryJet fits when the work is tied to an online store or an order process.
      </p>

      <h3 className="text-xl font-bold mt-8 mb-2">Generative AI consultants for business in London</h3>
      <p className="mb-4">
        Match the consultant to the assistant your company already pays for: The AI Consultancy for Claude or ChatGPT, Transparity for Microsoft 365 Copilot, Datatonic for Gemini Enterprise on Google Cloud.
      </p>

      <h3 className="text-xl font-bold mt-8 mb-2">AI consultants near the South Bank</h3>
      <p className="mb-6">
        No firm in this guide lists a South Bank office. The AI Consultancy names the South Bank among the areas where it is most often on site, and says on-site delivery within Greater London is included in its fee.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Best small business AI consultant in the UK</h2>
      <p className="mb-4">
        For a firm of about 10 people, the three to call first are <strong>The AI Consultancy</strong> (London; Claude and ChatGPT set-up and training), <strong>AI Expert UK</strong> (Worcester; a fixed-fee workshop, then a roadmap) and <strong>Optimus Consulting</strong> (Crewe; a founder with 25 years in claims operations). All three publish what the first step costs.
      </p>
      <p className="mb-4">
        Small firms are behind on AI, and that is normal. The <a href={SOURCES.ons} className={link} rel="noopener" target="_blank">Office for National Statistics</a> found that 28% of UK businesses with 0 to 9 employees reported using at least one AI technology, against 49% of those with 250 or more. Catching up starts with one job done well.
      </p>
      <p className="mb-4">Three free checks you can run today, before you pay anyone:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>AI Expert UK</strong> has a free two-minute AI Readiness Assessment.</li>
        <li><strong>iwantmore.ai</strong> has a free five-minute online readiness questionnaire.</li>
        <li><strong>OpenKit</strong> has a free readiness check: ten questions, a score out of 100 and no email needed.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">Which UK consultancies take you from AI strategy to a working product?</h2>
      <p className="mb-4">
        The common complaint about consultants is a report with nothing running at the end. These seven describe, on their own sites, a first step that leads into a build. The durations are theirs.
      </p>
      <div className="overflow-x-auto mb-4 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Firm</th>
              <th className="p-3 text-left border border-gray-700">First step</th>
              <th className="p-3 text-left border border-gray-700">What follows</th>
            </tr>
          </thead>
          <tbody>
            {PATHS.map((p) => (
              <tr key={p.firm} className={p.firm === 'FactoryJet' ? 'bg-orange-50' : 'odd:bg-white even:bg-gray-50'}>
                <td className="p-3 border border-gray-200 font-semibold align-top">{p.firm}</td>
                <td className="p-3 border border-gray-200 align-top">{p.first}</td>
                <td className="p-3 border border-gray-200 align-top">{p.then}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-6">
        If the job is already chosen and you only need the build, our list of <a href="/blog/best-ai-agent-development-companies-uk-2026" className={link}>AI agent development companies in the UK</a> covers firms that mainly build agents and automation.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">What about the Big Four and the large firms?</h2>
      <p className="mb-4">
        Buyers ask about them, so here is what their own UK pages say. We read each page on 9 October 2026.
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><strong><a href={SOURCES.deloitte} className={link} rel="noopener" target="_blank">Deloitte UK</a></strong> says it covers the path from defining an AI strategy to building custom AI. Its listed capabilities include AI strategy, analytics and data modernisation, and robotics and intelligent automation.</li>
        <li><strong><a href={SOURCES.pwc} className={link} rel="noopener" target="_blank">PwC UK</a></strong> says it will help you design and build AI, describes its own system for running AI agents across a large organisation, and says it is investing US$1.5 billion across its network. Its client stories include Virgin Money, SSE and Centrica, plus work with Sage aimed at small and medium businesses.</li>
        <li><strong><a href={SOURCES.kpmg} className={link} rel="noopener" target="_blank">KPMG UK</a></strong> says it helps design, build and scale AI while managing risk. It also offers AI assurance, meaning checks on governance, controls and oversight.</li>
        <li><strong><a href={SOURCES.ey} className={link} rel="noopener" target="_blank">EY UK</a></strong> groups its AI work under AI-ready data, agentic AI, physical AI and responsible AI.</li>
      </ul>
      <p className="mb-4">
        The <a href={SOURCES.ranking} className={link} rel="noopener" target="_blank">consultancy.uk ranking</a> says it assessed more than 500 firms and named 35. Its top level has seven: Accenture, McKinsey &amp; Company, Deloitte, Bain &amp; Company, PwC, IBM Consulting and Boston Consulting Group. KPMG, Capgemini and EY sit one level down.
      </p>
      <p className="mb-4">
        <strong>Who they suit:</strong> large organisations running change across many teams and countries, and any business where a board, an auditor or a regulator wants a known name to sign off the approach. Their strength is depth, with audit, risk, legal and technology people under one roof.
      </p>
      <p className="mb-4">
        <strong>Who they do not suit:</strong> a firm of 10 or 50 people that wants one workflow fixed. None of the four pages shows a price for its services or a small fixed first step, and the client examples we saw are large organisations. That is our reading of four web pages. They may take smaller work, so ask them. We have not listed them as picks for a small business.
      </p>
      <div className="overflow-x-auto mb-8 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700"></th>
              <th className="p-3 text-left border border-gray-700">UK specialist consultancy</th>
              <th className="p-3 text-left border border-gray-700">Big Four or global firm</th>
              <th className="p-3 text-left border border-gray-700 bg-[#B23E13]">Remote specialist (e.g. FactoryJet)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Who you work with</td>
              <td className="p-3 border border-gray-200">Small senior team, often the founder</td>
              <td className="p-3 border border-gray-200">Large team with partners, managers and juniors</td>
              <td className="p-3 border border-gray-200 bg-orange-50">Senior engineers, founder on every project</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">First step</td>
              <td className="p-3 border border-gray-200">Often a fixed-fee audit, workshop or sprint; five firms here publish the fee</td>
              <td className="p-3 border border-gray-200">Scoped by proposal; no price on the four UK pages we read</td>
              <td className="p-3 border border-gray-200 bg-orange-50">Free first call, then a fixed quote per stage</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">On-site workshops</td>
              <td className="p-3 border border-gray-200">Yes, near their offices</td>
              <td className="p-3 border border-gray-200">Yes, nationwide</td>
              <td className="p-3 border border-gray-200 bg-orange-50">Video workshops in UK working hours</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Assurance and sign-off</td>
              <td className="p-3 border border-gray-200">Varies; ask for certificates and method</td>
              <td className="p-3 border border-gray-200">Deep, with audit, risk and assurance teams in house</td>
              <td className="p-3 border border-gray-200 bg-orange-50">Human approval steps and logs built in</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Watch out for</td>
              <td className="p-3 border border-gray-200">Key-person risk in the smallest teams</td>
              <td className="p-3 border border-gray-200">Programmes sized for large organisations</td>
              <td className="p-3 border border-gray-200 bg-orange-50">Not the right choice if you need people on site every week</td>
            </tr>
          </tbody>
        </table>
      </div>

      <figure className="my-8 not-prose">
        <img
          src={`${IMG}-video-call.webp`}
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          alt="Two colleagues seen from behind at a meeting table, on a video call with a man shown on a wall screen, with an orange notebook, two white mugs and a closed laptop on the table"
          className="w-full h-auto rounded-xl"
        />
        <figcaption className="text-sm text-gray-600 mt-2">Much of this work runs over video. Winder.AI calls itself remote-first and has no London office. What matters is who joins the call: the person who will build it, or only a salesperson.</figcaption>
      </figure>

      <h2 className="text-2xl font-bold mt-10 mb-4">What these consultancies publish about price</h2>
      <p className="mb-4">
        Most consultancies quote after a call. Seven of the 13 other firms on this list publish figures on their own sites, and we copied them on 9 October 2026. Each figure is the firm&rsquo;s own. None is a FactoryJet price and together they are not a market survey. Firms change prices, so check the source.
      </p>
      <div className="overflow-x-auto mb-4 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Firm</th>
              <th className="p-3 text-left border border-gray-700">Published figure (GBP)</th>
              <th className="p-3 text-left border border-gray-700">VAT</th>
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
                  <a href={p.source} className={link} rel="noopener" target="_blank">{p.source.replace('https://', '').split('/')[0]}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-4">
        <strong>How to read this.</strong> The low figures buy a diagnosis: a workshop, an audit or a two-week review. The high figures buy a working system connected to your software. Where VAT is not mentioned, ask. OpenKit and Generativ both say outside licences or usage charges sit on top of their fee, and that is common.
      </p>
      <p className="mb-6">
        For build costs, running costs and day rates across the UK market, read our <a href="/blog/ai-cost-uk-2026" className={link}>AI cost guide for the UK (2026)</a>. FactoryJet does not publish a rate card; we give a fixed quote per stage after a free call.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Which kind of AI consultancy fits your business?</h2>
      <p className="mb-4">Size is the first filter. These five lines are the second: the software you run and the job you need done.</p>
      <div className="grid gap-3 mb-8 not-prose">
        <div className="rounded-xl border border-gray-200 p-4">
          <p className="font-semibold mb-1">&ldquo;We run on Microsoft 365 and want Copilot done properly.&rdquo;</p>
          <p className="text-gray-700 text-sm">Transparity works only on Microsoft. iwantmore.ai runs Copilot training.</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-4">
          <p className="font-semibold mb-1">&ldquo;We have analysts and a hard modelling or engineering problem.&rdquo;</p>
          <p className="text-gray-700 text-sm">Fifty One Degrees or Winder.AI. On Google Cloud, Datatonic.</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-4">
          <p className="font-semibold mb-1">&ldquo;We are a public body, or we hold sensitive records.&rdquo;</p>
          <p className="text-gray-700 text-sm">Faculty for government and health programmes. Aiimi says all its consultants are security-cleared. Winder.AI can contract through G-Cloud.</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-4">
          <p className="font-semibold mb-1">&ldquo;We sell online and want AI in the store and the orders behind it.&rdquo;</p>
          <p className="text-gray-700 text-sm"><a href={SOURCES.gpmd} className={link} rel="noopener" target="_blank">GPMD</a> in London (163 City Road, EC1V 1NR) offers AI consultancy for ecommerce businesses. This is also FactoryJet&rsquo;s main ground; see <a href="/uk/ai-agents" className={link}>AI agents for UK businesses</a> and <a href="/uk/ai-development" className={link}>custom AI development</a>.</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-4">
          <p className="font-semibold mb-1">&ldquo;My team needs training before anything else.&rdquo;</p>
          <p className="text-gray-700 text-sm">Four firms list staff training: The AI Consultancy, iwantmore.ai, Helium42 and AI Expert UK.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">How to choose an AI consultancy in the UK: 7 steps</h2>
      <p className="mb-4">Open each step for the detail.</p>
      <div className="space-y-3 mb-8 not-prose">
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">1. Write down one task before any strategy</summary>
          <p className="mt-3 text-gray-700">Pick the task your team repeats most. Note what starts it, which software it touches, how often it happens and what a good result looks like. One page is enough. The ONS found that difficulty identifying use cases is among the most common reasons UK firms hold back, so a named task puts you ahead before the first call.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">2. Decide what you are buying</summary>
          <p className="mt-3 text-gray-700">Advice, training, a build, or all of them. If leaders cannot agree where AI fits, buy an audit or a workshop. If you already know the task, skip to a build.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">3. Pick your group</summary>
          <p className="mt-3 text-gray-700">Use the table at the top. A 12-person accountancy and a 400-person insurer need different partners. Cross off any firm whose named clients look nothing like you.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">4. Send the same brief to three firms</summary>
          <p className="mt-3 text-gray-700">Same page, same day, same questions. Good firms ask about exceptions (&ldquo;what happens when the invoice has no PO number?&rdquo;), data access and who approves the output. Weak ones jump straight to a demo.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">5. Ask for a fixed first step in writing</summary>
          <p className="mt-3 text-gray-700">Five firms on this page publish the price of theirs, from a workshop to a full audit, so it is a fair thing to ask of anyone. Get the scope, the fee and whether VAT is included. Three of the seven firms that publish any figure do not mention VAT on the page we read.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">6. Settle data, ownership and the DPIA before the build</summary>
          <p className="mt-3 text-gray-700">Who owns the code, the prompts and the accounts? Where is your data stored and processed, and does it train anyone&rsquo;s model? Who writes the DPIA? Get the answers in writing before work starts.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">7. Plan for month three and month twelve</summary>
          <p className="mt-3 text-gray-700">Software your AI connects to will change, and automations quietly break. Ask who watches for failed runs and what support costs. Helium42 designs for your team to run the system alone by day 90; OpenKit plans a handover with documentation. Ask every firm for its version of that.</p>
        </details>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">UK rules and numbers a consultancy should raise with you</h2>
      <p className="mb-4">
        A good consultancy brings these up before you do. If yours does not, ask.
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Adoption is rising from a low base.</strong> The <a href={SOURCES.ons} className={link} rel="noopener" target="_blank">Office for National Statistics</a> reported on 20 July 2026 that self-reported AI use among UK businesses with 10 or more employees rose from around 12% to around 35% since late 2023. Its earlier analysis found the most common reasons for holding back were difficulty identifying business use cases, cost and a lack of expertise.</li>
        <li><strong>You are responsible for personal data in an AI system.</strong> The <a href={SOURCES.ico} className={link} rel="noopener" target="_blank">Information Commissioner&rsquo;s Office</a> says the accountability principle makes you responsible for complying with data protection law, and for showing that you comply, in any AI system that processes personal data. The same guidance covers who is the controller and who is the processor, so ask your consultancy which one it will be.</li>
        <li><strong>A DPIA is usually needed.</strong> The ICO says that &ldquo;in the vast majority of cases&rdquo; the use of AI will involve processing likely to result in a high risk, which triggers the legal requirement to do a DPIA. You make that call case by case.</li>
        <li><strong>Ask where the data goes.</strong> OpenKit offers private set-ups that run inside infrastructure you control. The AI Consultancy says its pilots are deployed to a UK or EU cloud region. FactoryJet can host on UK or EU cloud. Whoever you hire, get the location in writing.</li>
        <li><strong>Name your regulator.</strong> Winder.AI sets its UK work against the FCA, the ICO and the MHRA. OpenKit names the SRA, the FCA and the NHS DSP Toolkit. A firm that works in your sector should name yours without being asked.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">Six warning signs when you talk to an AI consultancy</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>A ranking with the author on top.</strong> Three of the five rival lists we read place the author&rsquo;s own firm first or second, and a fourth is a comparison site that says it may earn commission from the providers it features. Check the sources on any list, ours included.</li>
        <li><strong>A plan with no build.</strong> A long strategy document with nothing running at the end is a report. Ask what will be live, and for whom, by week eight.</li>
        <li><strong>No fixed first step.</strong> Five firms here publish the price of theirs. A firm that will not put a fee and a written scope on the first piece of work is asking you to carry the risk.</li>
        <li><strong>Vague ownership.</strong> If the automation lives in the consultancy&rsquo;s account, you are renting your own operations. Ask for admin access from day one, and for the code and prompts at handover.</li>
        <li><strong>No mention of personal data.</strong> The ICO expects a DPIA in the vast majority of AI projects. A consultancy that never raises data protection is leaving that work to you.</li>
        <li><strong>No plan for month three.</strong> If support is missing from the proposal, expect to pay for surprises later.</li>
      </ol>

      <h2 className="text-2xl font-bold mt-10 mb-4">Where FactoryJet fits, and where it does not</h2>
      <p className="mb-4">
        We are FactoryJet. We have served 500+ businesses since 2014, most of that time in commerce: online stores, B2B ordering and the operations behind them. Our founder, Bhavesh Barot, is involved in every project. For UK clients we run an AI readiness assessment, tell you whether to buy a tool or build one, and then design, build and support the AI agent or integration if a build is the right call. You own what we build.
      </p>
      <p className="mb-4">
        <strong>Where we fit:</strong> UK small and mid-size businesses that sell online or run order-heavy operations and want the advice and the build from one team. Buyers who want to see working software on their own data before they sign a contract, a fixed quote per stage and a team that stays after launch.
      </p>
      <p className="mb-4">
        <strong>Where we do not:</strong> If you want workshops in your building, pick a firm near you. If you need security-cleared consultants, Aiimi says all of its are. If you buy through G-Cloud, Winder.AI can contract that way. For a Microsoft 365 Copilot roll-out, Transparity is the natural fit, and for Google Cloud data work, Datatonic. If your board wants a strategy paper from a known name, that is Big Four ground.
      </p>
      <p className="mb-6">
        Our services for UK businesses: <a href="/uk/ai-consulting" className={link}>AI consulting</a>, <a href="/uk/ai-agents" className={link}>AI agent development</a> and <a href="/uk/ai-development" className={link}>custom AI development</a>. If you are still working out what you need, read <a href="/blog/what-does-an-ai-automation-agency-do-uk" className={link}>what an AI automation agency does</a> and <a href="/blog/how-to-build-an-ai-agent-uk-2026" className={link}>how to build an AI agent in the UK</a>.
      </p>

      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 mb-8 not-prose">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#B23E13] mb-2">If you are unsure which kind of firm you need</p>
        <p className="text-gray-800 leading-relaxed mb-3">
          Send us the one task your team repeats most. On a free call, the founder will tell you whether it needs an AI agent, a simpler automation or no AI at all, and which kind of firm fits, even if that is not us.
        </p>
        <a href="/contact" className="inline-block rounded-lg bg-[#B23E13] px-5 py-3 font-semibold text-white">Talk to the Founder</a>
      </div>
    </>
  ),
};

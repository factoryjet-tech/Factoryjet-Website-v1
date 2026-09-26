import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

const PAGE_URL = 'https://factoryjet.com/blog/best-ai-agencies-australia-2026';
const IMG = '/blog-images/best-ai-agencies-australia-2026';

// Every fact about every agency below was read on that agency's own website on
// 26 September 2026 (homepage or main service page, URL in `source`). Nothing
// here is paid placement. The list order is NOT a ranking; it groups agencies
// by the kind of buyer they suit. The ItemList schema maps from this same array.
interface Agency {
  name: string;
  url: string;
  source: string;
  based: string;
  type: string;
  clients: string;
  platforms: string;
  what: string;
  bestFor: string;
  ask: string;
}

const AGENCIES: Agency[] = [
  {
    name: 'Team 400',
    url: 'https://team400.ai/',
    source: 'https://team400.ai/',
    based: 'Brisbane head office, working across Sydney, Melbourne and Brisbane',
    type: 'Custom AI agents and software engineering',
    clients: 'Mid-size to large Australian businesses',
    platforms: 'Microsoft (Azure OpenAI, Copilot Studio, Power Platform), Claude, ChatGPT, .NET, React',
    what: 'AI strategy, custom AI agent development, full software development, Microsoft platform work and AI training. Its site also offers forward-deployed engineers who sit with your team. Industries it names include transport and logistics, field services, financial services, healthcare, manufacturing and mortgage broking.',
    bestFor: 'Mid-size and larger businesses that want engineers to build custom agents and the software around them, especially on Microsoft.',
    ask: 'Which parts of the build are a packaged offer and which are custom, and who maintains the agent after go-live.',
  },
  {
    name: 'Edison AI',
    url: 'https://edisonai.au/',
    source: 'https://edisonai.au/',
    based: 'Surry Hills, Sydney, serving clients Australia-wide',
    type: 'SMB AI implementation, automation and training',
    clients: 'Growing Australian small and medium businesses',
    platforms: 'ChatGPT, Claude, Microsoft Copilot, Google Workspace, Make, Zapier, n8n, HubSpot, Shopify',
    what: 'AI agent implementation, workflow automation, multi-agent systems, operating dashboards, on-premise (edge) AI, AI marketing and search visibility, readiness audits and staff training. It lists industries from finance and insurance to trades, clinics and retail.',
    bestFor: 'Small and medium businesses that want automation and staff training from the same team.',
    ask: 'How much of the engagement is training versus building, and what you keep if you stop working together.',
  },
  {
    name: 'FlowWorks',
    url: 'https://flowworks.com.au/',
    source: 'https://flowworks.com.au/',
    based: 'St Kilda Road, Melbourne, working with clients in every capital city',
    type: 'SME AI automation, agents and voice AI',
    clients: 'Australian SMEs across more than 25 industries (it says 140+ businesses)',
    platforms: 'Xero, HubSpot, Slack, Google Workspace, Microsoft 365, Zapier, Make, QuickBooks, Notion, Airtable',
    what: 'AI readiness assessments, strategy and roadmaps, implementation, voice AI, governance, training, private AI set-ups and ongoing operations support.',
    bestFor: 'SMEs that run on Xero, HubSpot and Google or Microsoft office tools and want a staged start with an assessment first.',
    ask: 'What the assessment includes, and how the ongoing operations support is scoped after launch.',
  },
  {
    name: 'Aivy',
    url: 'https://aivy.com.au/',
    source: 'https://aivy.com.au/',
    based: 'Kensington, Melbourne (Australian-owned), working in Melbourne, Sydney and nationally',
    type: 'Mid-market AI consulting, document and finance automation, chatbots',
    clients: 'Mid-market Australian businesses',
    platforms: 'Xero, HubSpot, Salesforce, Shopify, WooCommerce, Stripe, WhatsApp Business, OpenAI, Anthropic, Azure, AWS',
    what: 'AI consulting and strategy, document automation, finance automation, Xero integration, AI chatbot development and generative engine optimisation. It names accounting, ecommerce, healthcare, NDIS providers, professional services and real estate as its industries, and quotes four to six weeks from discovery to a deployed pilot on fixed scope.',
    bestFor: 'Mid-market firms in regulated or paperwork-heavy sectors, such as accounting, healthcare and NDIS providers.',
    ask: 'Which compliance frameworks apply to your sector and how the pilot is measured.',
  },
  {
    name: 'Advancer',
    url: 'https://www.advancer.com.au/',
    source: 'https://www.advancer.com.au/',
    based: 'Fortitude Valley, Brisbane, serving Queensland and the rest of Australia',
    type: 'AI agents, voice AI, training and data consulting',
    clients: 'It says it has worked with over 100 organisations',
    platforms: 'Custom builds plus data lakehouse and business intelligence work',
    what: 'AI training workshops, AI consulting and readiness assessments, AI agents for workflows and CRM updates, voice AI for call handling and bookings, custom AI and data consulting. It offers a free AI readiness assessment tool and works on fixed-scope pilots.',
    bestFor: 'Queensland businesses that want training, a data clean-up and a first agent from one local team.',
    ask: 'Whether your data needs work before an agent can use it, and what the pilot covers.',
  },
  {
    name: 'IOTAI',
    url: 'https://www.iotai.com.au/',
    source: 'https://www.iotai.com.au/',
    based: 'Offices in North Sydney, Melbourne, Fortitude Valley (Brisbane) and Robina (Gold Coast)',
    type: 'Workflow automation, AI agents and internal apps',
    clients: 'Small business (10 to 50 staff), mid-market (50 to 200) and enterprise (200+)',
    platforms: 'n8n, Make, Zapier, Power Automate, Retool, OpenAI, Anthropic, Google, Microsoft, AWS, Azure',
    what: 'Workflow automation, AI agent development, custom internal apps built on Retool, n8n automation, system integration, sovereign or on-premise AI and Microsoft Copilot roll-outs. It sells a fixed-price one to two week strategy sprint and a monthly managed service.',
    bestFor: 'Businesses that want integration-heavy automation across many tools, with offices in four cities.',
    ask: 'Which platform the automation runs on, who owns that account, and what the monthly managed service covers.',
  },
  {
    name: 'Spark Interact',
    url: 'https://www.sparkinteract.com.au/services/ai-automation-agency/',
    source: 'https://www.sparkinteract.com.au/services/ai-automation-agency/',
    based: 'Pitt Street, Sydney, working Australia-wide',
    type: 'RPA, chatbots, document processing and BI automation',
    clients: 'SMEs and enterprises',
    platforms: 'Salesforce, Shopify; says it is a Microsoft Gold Partner and Google Cloud Premier Partner',
    what: 'Robotic process automation, AI chatbots and virtual assistants, workflow integration, intelligent document processing (reading contracts and invoices) and business intelligence automation. It names healthcare, financial services, manufacturing, logistics, retail, ecommerce and government.',
    bestFor: 'Businesses with document-heavy back offices that also want dashboards and reporting automated.',
    ask: 'Whether the solution uses screen-clicking RPA or API connections, since that changes how often it breaks.',
  },
  {
    name: 'Osher Digital',
    url: 'https://osher.com.au/',
    source: 'https://osher.com.au/',
    based: 'Eagle Street, Brisbane, working across Australia',
    type: 'AI agents, n8n automation, integrations and custom ERP',
    clients: 'Small to mid-market businesses',
    platforms: 'n8n, Claude, ChatGPT, Bullhorn, Notion, Docker',
    what: 'AI agent development, AI consulting, custom AI trained on your data, robotic process automation, system integrations, business process audits, n8n consulting and custom ERP software. Industries on its site include property inspection, field services, recruitment and law.',
    bestFor: 'Field-service, inspection and recruitment businesses whose off-the-shelf software no longer fits.',
    ask: 'Whether you own the code and the n8n instance outright, and how updates are handled.',
  },
  {
    name: '13Labs',
    url: 'https://www.13labs.au/services/ai-agency-melbourne',
    source: 'https://www.13labs.au/services/ai-agency-melbourne',
    based: 'Stone & Chalk, King Street, Melbourne, working with clients Australia-wide',
    type: 'Founder-led AI software, automation and agents',
    clients: 'Trades, professional services, healthcare, real estate, ecommerce, legal, hospitality and more',
    platforms: 'Large language models such as GPT and Claude, document processing and retrieval systems',
    what: 'AI software development (document search, information extraction, staff assistants), AI automation across existing tools, fixed-price custom software and AI agents that answer from approved information. The founder scopes each project.',
    bestFor: 'Melbourne businesses that want a founder-scoped fixed quote for a document or knowledge assistant.',
    ask: 'What approved information the agent can see, and how it is kept up to date.',
  },
  {
    name: 'Mantel Group',
    url: 'https://mantelgroup.com.au/',
    source: 'https://mantelgroup.com.au/',
    based: 'Australia and New Zealand, with hubs across the region',
    type: 'Enterprise AI, data, cloud and security consultancy',
    clients: 'Large organisations in banking, insurance, healthcare, public sector and retail',
    platforms: 'AWS, Google Cloud, Microsoft Azure, Databricks, Snowflake, OpenAI, Anthropic',
    what: 'AI, data, cloud, digital, cyber security and managed services, delivered by what its site describes as 850+ tech experts.',
    bestFor: 'Large organisations that need AI inside a wider data, cloud and security program.',
    ask: 'Who on the named team will do the work and how the program is governed.',
  },
  {
    name: 'Arinco',
    url: 'https://www.arinco.com.au/',
    source: 'https://www.arinco.com.au/',
    based: 'Melbourne, Sydney, Brisbane, Perth and Auckland; established 2019',
    type: 'Microsoft AI, copilots and agents',
    clients: 'Enterprise and mid-market; it says 400+ customers across Australia and New Zealand',
    platforms: 'Microsoft Azure, Microsoft 365, Power Platform, Copilot Studio, GitHub, Databricks',
    what: 'AI transformation with production copilots and agents, intelligent apps, data foundations, Microsoft 365 workplace modernisation, security and governance, plus its own agent governance platform.',
    bestFor: 'Organisations already standardised on Microsoft 365 and Azure.',
    ask: 'How agents are governed and monitored once live, and what licences you need.',
  },
  {
    name: 'AI Consulting Group',
    url: 'https://aiconsultinggroup.com.au/',
    source: 'https://aiconsultinggroup.com.au/',
    based: 'York Street, Sydney, with clients in Australia, New Zealand, Europe and the Americas',
    type: 'Data and AI strategy, machine learning and governance',
    clients: 'From small businesses to large enterprises in mining, finance, government, aged care, law and logistics',
    platforms: 'Azure, AWS, Google Cloud, Databricks, Snowflake, Power BI, Tableau, Qlik',
    what: 'Data and AI strategy, machine learning and predictive analytics, generative AI and large language models, AI governance and risk, machine vision and IoT, modern data platforms and Power BI. It offers fixed-price and time-and-materials projects.',
    bestFor: 'Businesses whose AI question is really a data question: forecasting, analytics or machine vision.',
    ask: 'Whether they recommend fixed price or time and materials for your project, and why.',
  },
  {
    name: 'FactoryJet (that is us)',
    url: 'https://factoryjet.com/au',
    source: 'https://factoryjet.com/au',
    based: 'No Australian office. We work remotely with Australian clients and schedule calls in Australian business hours',
    type: 'AI agents, AI receptionists and AI inside ecommerce and operations',
    clients: 'Small and mid-size businesses; 500+ businesses served since 2014',
    platforms: 'Shopify, custom Next.js commerce, Xero, MYOB, HubSpot, OpenAI, Anthropic, Google models',
    what: 'We map the process, then design, build and support custom AI agents, AI receptionists and customer service agents inside the tools you already use, with human approval steps. Our strongest ground is where AI meets online stores, order handling, finance and operations. The founder is involved in every project and you own what we build.',
    bestFor: 'Ecommerce and operations-heavy SMBs that want one team for the store, the integrations and the AI.',
    ask: 'Whether a remote team suits you. If you need someone on site every week, pick a local agency from this list.',
  },
];

// Published prices, copied from each agency's own page on 26 Sep 2026.
// These are the agencies' figures, not FactoryJet prices.
const PRICES: { agency: string; figure: string; gst: string; source: string }[] = [
  { agency: 'FlowWorks', figure: 'Assessments from A$1,500; implementations A$3,500 to A$25,000+', gst: 'Not stated', source: 'https://flowworks.com.au/' },
  { agency: 'IOTAI', figure: 'Workflow automation from A$2,500; custom business apps from A$5,000', gst: 'Not stated', source: 'https://www.iotai.com.au/' },
  { agency: 'Osher Digital', figure: 'Custom ERP software from A$15,000 + GST, fixed price', gst: 'Excludes GST', source: 'https://osher.com.au/' },
  { agency: 'Spark Interact', figure: 'A$15,000 to A$50,000 for small business; A$50,000 to A$150,000 for medium; A$150,000+ for large-scale', gst: 'Not stated', source: 'https://www.sparkinteract.com.au/services/ai-automation-agency/' },
  { agency: 'Team 400', figure: 'Packages from A$25,000; custom AI projects typically A$50,000 to A$250,000', gst: 'Not stated', source: 'https://team400.ai/' },
];

const FAQS: FAQItem[] = [
  {
    q: "What are the top 10 AI companies in Australia?",
    a: "If you mean agencies that build AI for other businesses, ten that AI assistants name often and that we checked are Team 400, Edison AI, FlowWorks, Aivy, Advancer, IOTAI, Spark Interact, Osher Digital, Arinco and Mantel Group. If you mean listed companies to invest in, that is a different question, and we do not give investment advice. For buying AI services, fit matters more than any top 10: match the agency to your size, systems and budget.",
  },
  {
    q: "Which AI company is the best in Australia?",
    a: "There is no single best one, and any list that crowns itself number one deserves a second look. The best choice depends on who you are. A 15-person trade business needs a different partner from a bank. Use the table in this guide to narrow by client size and platform, then ask two or three agencies to map one real workflow before you sign anything.",
  },
  {
    q: "What are some reputable AI consulting companies in Australia?",
    a: "For strategy and governance at scale, Mantel Group, Arinco and AI Consulting Group are established names, alongside the big consulting firms. For smaller businesses that want strategy plus a working build, FlowWorks, Aivy, Advancer and Edison AI all offer assessments or readiness audits that lead into implementation. Reputable means they show real examples, explain their method and let you own what they build.",
  },
  {
    q: "Are there any AI consulting firms that work with small businesses?",
    a: "Yes, plenty. FlowWorks, Edison AI, IOTAI, Osher Digital and 13Labs all describe small and medium businesses as their main clients. Several publish entry prices on their own sites, which helps you budget before a call. Look for a firm that starts with one workflow and a fixed scope, not a long strategy document.",
  },
  {
    q: "What are the 10 best AI consulting firms?",
    a: "Globally, the big consulting names are Accenture, Deloitte, PwC, EY, KPMG, McKinsey, BCG and IBM, and most have Australian AI practices. They suit large organisations with large budgets. For small and mid-size Australian businesses, specialist firms such as those in this guide are usually a better fit because the people who scope the work also build it.",
  },
  {
    q: "What are the top AI development companies in Australia?",
    a: "For custom AI development, meaning software written for your business rather than a configured tool, look at Team 400, 13Labs, Osher Digital, IOTAI and Arinco. Team 400 and Arinco lean towards Microsoft and larger clients. 13Labs and Osher Digital work with smaller businesses on fixed quotes. FactoryJet builds custom agents with a focus on ecommerce and operations, working remotely.",
  },
  {
    q: "What are the top AI software development companies in Australia?",
    a: "The same shortlist applies. Team 400 builds with .NET, React and Azure. 13Labs builds document search, extraction and staff assistant tools. Osher Digital builds custom ERP and n8n-based systems. IOTAI builds internal apps on Retool. Ask each one what language and platform the software is written in, because that decides who else could maintain it later.",
  },
  {
    q: "Which AI automation agency is located in Australia?",
    a: "Every agency in this guide except FactoryJet has an Australian office, which we confirmed on their own sites. They include Team 400 (Brisbane), Edison AI (Sydney), FlowWorks and Aivy (Melbourne), Advancer and Osher Digital (Brisbane), IOTAI (four offices), Spark Interact and AI Consulting Group (Sydney), 13Labs (Melbourne) and Arinco (four Australian capitals). FactoryJet works remotely and says so.",
  },
  {
    q: "What is the leading AI automation agency in Australia?",
    a: "No independent ranking exists. Two agencies that publish their own top lists, Team 400 and Edison AI, both include themselves, and both disclose it, as we do here. The names AI assistants mention most often for Australian buyers in our testing were Team 400, Edison AI, FlowWorks, Aivy and Advancer. Treat mentions as a starting point, not proof of quality.",
  },
  {
    q: "What are some AI automation agencies?",
    a: "An AI automation agency connects AI to the tools you already use so routine steps happen without retyping: reading emails, updating the CRM, drafting replies and filing invoices. In Australia, FlowWorks, IOTAI, Edison AI, Osher Digital, Spark Interact and Advancer all describe themselves this way. Our explainer on what an AI automation agency actually does walks through the work step by step.",
  },
  {
    q: "What are the top AI agencies?",
    a: "Top depends on the job. For Microsoft-heavy enterprises, Arinco and Team 400. For wide data and cloud programs, Mantel Group. For SME automation, FlowWorks, IOTAI and Edison AI. For regulated mid-market paperwork, Aivy. For voice agents, Advancer and FlowWorks. For AI inside an online store or order flow, FactoryJet. Pick the category first, then compare agencies within it.",
  },
  {
    q: "Which Australian companies build custom AI agents for small and mid-size businesses?",
    a: "Team 400, IOTAI, Osher Digital, Edison AI, Advancer, 13Labs and FlowWorks all list AI agent development for small or mid-size businesses on their sites. FactoryJet builds custom agents for Australian SMBs too, remotely. A custom agent is software that takes actions in your systems, such as updating an order or booking a job, rather than only chatting.",
  },
  {
    q: "Who is the best AI automation agency in Australia?",
    a: "The best one is the one that understands your workflow before it quotes. Shortlist three from this guide that match your size and software, send each the same one-page description of a task your team repeats every week, and compare how they respond. The agency that asks the sharpest questions about exceptions and data access is usually the right one.",
  },
  {
    q: "What is the best AI consultancy in Sydney for a mid-size company?",
    a: "Sydney-based options we verified include Edison AI in Surry Hills, Spark Interact on Pitt Street and AI Consulting Group on York Street, and IOTAI has a North Sydney office. Team 400, Arinco and Mantel Group also work with Sydney clients. For a mid-size company, ask for a paid discovery or pilot with a fixed price before any larger commitment.",
  },
  {
    q: "Which Australian agencies build AI chatbots and AI receptionists?",
    a: "Aivy and Spark Interact list chatbot development. Advancer and FlowWorks list voice AI for call handling and bookings. FactoryJet builds AI receptionists and AI customer service agents that answer calls and messages, book appointments and hand complex cases to a person. Ask any provider how the handover to a human works and where call recordings are stored.",
  },
  {
    q: "Can you recommend an AI development company in Melbourne?",
    a: "Melbourne-based options we verified are FlowWorks on St Kilda Road, Aivy in Kensington and 13Labs at Stone and Chalk on King Street. Arinco and Team 400 also work in Melbourne. 13Labs suits founder-scoped custom builds, FlowWorks suits SME automation with an assessment first, and Aivy suits mid-market finance and document work.",
  },
  {
    q: "Who are the big 4 consultants in Australia?",
    a: "The big four are Deloitte, PwC, EY and KPMG. All four run AI and data practices in Australia, mostly for large companies and government. Accenture is often grouped with them for technology work. They bring scale and governance depth, and they are priced for large programs, so smaller businesses usually get more direct attention from specialist agencies.",
  },
  {
    q: "What are the top 5 consulting firms in Australia?",
    a: "By size and reach, the usual answer is Deloitte, PwC, EY, KPMG and Accenture, with McKinsey, BCG and Bain as the main strategy firms. For AI work specifically, local specialists such as Mantel Group and Arinco compete with them on enterprise projects, and smaller agencies cover the SMB market that the large firms rarely serve.",
  },
  {
    q: "How do I hire an AI agent?",
    a: "You do not hire an agent the way you hire a person. You hire a team to build one, or you subscribe to a product. Start by writing down one task: what triggers it, which systems it touches and what a good result looks like. Share that with two or three agencies, ask for a fixed-scope first build, and agree who approves the agent's actions.",
  },
  {
    q: "Who is the best AI agent developer?",
    a: "The best AI agent developer for you is one who has connected agents to the same systems you run, such as Xero, MYOB, HubSpot, Shopify or Microsoft 365, and can show a working example. Ask to see logs of an agent in production, not just a demo. Our guide on how to hire an AI agent developer lists the questions that reveal real experience.",
  },
  {
    q: "How much do AI consulting firms charge in Australia?",
    a: "Published figures from the agencies themselves, checked on 26 September 2026, run from A$1,500 for an assessment (FlowWorks) and A$2,500 for a workflow automation (IOTAI) up to A$25,000 packages and A$50,000 to A$250,000 custom projects (Team 400). Most do not say whether GST is included. Our AI cost guide for Australia explains what drives the price.",
  },
  {
    q: "What does an AI consultant actually do?",
    a: "An AI consultant looks at how work flows through your business, finds the tasks where AI can save time safely, and plans how to introduce it: which tools, what data, what rules and who checks the output. A consultant who also builds will then set it up, test it on your real cases and train your team. Strategy without a build rarely changes anything on its own.",
  },
  {
    q: "Should I choose a local Australian agency or a remote one?",
    a: "Choose local if you want regular on-site workshops or your data must be handled by an Australian entity under a specific contract. A remote team can work well for software-only projects, since AI automation rarely needs anyone in the room. Either way, ask where your data is stored and processed, and check the answer against the Australian Privacy Principles.",
  },
  {
    q: "Do Australian privacy laws apply to AI projects?",
    a: "Yes. The Privacy Act 1988 and the Australian Privacy Principles apply whenever an AI system handles personal information, both what goes in and what comes out. The OAIC advises businesses not to put personal or sensitive information into public generative AI tools, and to tell customers when they are dealing with AI. A good agency builds these rules into the design.",
  },
  {
    q: "How many Australian businesses use AI?",
    a: "The Australian Bureau of Statistics reported that 12 percent of businesses used artificial intelligence in 2024 to 2025, up from 1 percent in 2022 to 2023. That means most of your competitors are still early, and a well-chosen first project can make a visible difference. It also means many agencies are new, so check their examples carefully.",
  },
  {
    q: "Is it safe to pick an agency that an AI assistant recommended?",
    a: "Treat it as a lead, not a reference. AI assistants often repeat lists that agencies publish about themselves, and they sometimes name companies that are not Australian. Check the agency's own site for an Australian address, look for named examples of their work, and ask to speak with a current client before you commit.",
  },
];

export const post: BlogPost = {
  id: '470',
  slug: 'best-ai-agencies-australia-2026',
  title: 'Best AI Agencies in Australia (2026): 13 Compared, Including Us',
  excerpt:
    'A fair, fact-checked guide to AI automation agencies, AI consultancies and AI developers in Australia. Where each one is based, who it suits, which platforms it uses, what it publishes about price, and how to choose. FactoryJet is on the list and says so.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Sep 26, 2026',
  readTime: '17 min read',
  imageUrl: `${IMG}-hero.webp`,
  imageAlt:
    'Over-the-shoulder view of a Sydney business owner comparing a shortlist of agencies on her laptop, with a notepad and an orange coffee cup on the desk',
  meta: {
    title: 'Best AI Agencies in Australia 2026: 13 Compared | FactoryJet',
    description:
      'Compare the best AI automation agencies in Australia for 2026: where each is based, who it suits, platforms, published prices and how to choose the right one.',
  },
  keyTakeaways: [
    'There is no single best AI agency in Australia. Match the agency to your size, your software and your budget first.',
    'Every fact below was read on each agency\'s own website on 26 September 2026. None of them paid to be here.',
    'Published entry prices run from A$1,500 for an assessment to A$50,000 to A$250,000 for large custom projects. Most agencies do not say whether GST is included.',
    'Only 12 percent of Australian businesses used AI in 2024 to 2025 (ABS), so a well-chosen first project still sets you apart.',
    'FactoryJet is on this list. We have no Australian office and work remotely; if you need someone on site, choose a local agency.',
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
              name: 'Best AI Agencies in Australia (2026): 13 Compared, Including Us',
              description:
                'Compare the best AI automation agencies in Australia for 2026: where each is based, who it suits, platforms, published prices and how to choose the right one.',
              inLanguage: 'en-AU',
              datePublished: '2026-09-26',
              dateModified: '2026-09-26',
              isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com' },
              publisher: { '@id': 'https://factoryjet.com/#organization' },
              about: { '@type': 'Thing', name: 'AI automation agencies in Australia' },
              speakable: {
                '@type': 'SpeakableSpecification',
                cssSelector: ['#answer-first', 'h1', 'h2'],
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'AI agencies in Australia compared (2026)',
              itemListOrder: 'https://schema.org/ItemListUnordered',
              numberOfItems: AGENCIES.length,
              itemListElement: AGENCIES.map((a, i) => ({
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
          The best AI automation agency in Australia depends on your size and your systems. For SME automation, look at FlowWorks, IOTAI and Edison AI. For mid-market paperwork and finance, Aivy. For Microsoft-based organisations, Arinco and Team 400. For large data and cloud programs, Mantel Group. For AI inside an online store or order flow, FactoryJet, which works remotely.
        </p>
        <p className="text-gray-800 leading-relaxed">
          We checked every company on its own website on 26 September 2026: where it is based, what it builds, who it serves and any prices it publishes. Nobody paid to be listed. The order below is not a ranking; use the table to match agencies to your situation.
        </p>
      </div>

      <p className="mb-4">
        Ask ChatGPT, Perplexity, Gemini or Claude which AI agency to use in Australia and you get a different list each time. We know because we asked. In September 2026 we ran six Australian buyer questions through all four assistants (&ldquo;Who is the best AI automation agency in Australia?&rdquo;, &ldquo;Can you recommend an AI development company in Melbourne?&rdquo; and four more) and recorded every company they named. Some answers mixed in overseas firms. Some cited lists that agencies had written about themselves.
      </p>
      <p className="mb-4">
        So we did the boring part. We took the Australian agencies that came up most often, opened each one&rsquo;s own website, and wrote down only what they say about themselves: where they are based, what they build, who they build it for, which platforms they use and any published prices. If we could not confirm an Australian address or a clear service, the company is not here.
      </p>
      <p className="mb-4">
        <strong>A note on honesty.</strong> FactoryJet builds AI agents, so we are on this list. We put ourselves last, we say plainly that we have no Australian office, and we tell you when a local agency will suit you better. Two other agencies that publish &ldquo;top AI agencies in Australia&rdquo; lists, Team 400 and Edison AI, include themselves too, and both disclose it. That is fair practice, and it is also a reason to read every list, including this one, with care.
      </p>
      <p className="mb-6">
        A few terms first, in plain English. An <strong>AI automation agency</strong> connects AI to the software you already use so routine steps happen without retyping. An <strong>AI consultancy</strong> helps you decide where AI fits and how to introduce it safely. An <strong>AI developer</strong> writes custom software. An <strong>AI agent</strong> is software that takes actions in your systems, such as updating an order or booking a job, rather than only chatting. Most agencies below do some of all four.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">The shortlist at a glance</h2>
      <p className="mb-4">
        Scan this first. Find the rows that match your size and your main software, then read those profiles in full.
      </p>
      <div className="overflow-x-auto mb-8 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Agency</th>
              <th className="p-3 text-left border border-gray-700">Focus</th>
              <th className="p-3 text-left border border-gray-700">Typical client</th>
              <th className="p-3 text-left border border-gray-700">Main platforms</th>
              <th className="p-3 text-left border border-gray-700">Where based</th>
            </tr>
          </thead>
          <tbody>
            {AGENCIES.map((a) => (
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

      <h2 className="text-2xl font-bold mt-10 mb-4">How we built this list</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Start with what buyers see.</strong> We collected every company named across 24 AI assistant answers to six Australian questions about AI agencies, consultancies, chatbots and developers.</li>
        <li><strong>Keep only Australian operators.</strong> Each company had to show an Australian office or clearly state it is Australian-based on its own site. Overseas firms with an Australian landing page were left out.</li>
        <li><strong>Read the source, not the summary.</strong> Every description below comes from the agency&rsquo;s own homepage or main AI service page, opened on 26 September 2026. We link that page on every profile.</li>
        <li><strong>No scores we cannot prove.</strong> We do not give star ratings, because we have not worked with these agencies as clients. We tell you who each one suits, and a question worth asking them.</li>
        <li><strong>Prices only from the agency.</strong> Where an agency publishes prices, we quote them and link the page. We never guess another company&rsquo;s price.</li>
      </ol>

      <h2 className="text-2xl font-bold mt-10 mb-4">The best AI agencies in Australia, profiled</h2>
      <p className="mb-6">
        The order is not a ranking. We start with the five agencies AI assistants named most often for Australian buyers, then smaller specialists, then enterprise consultancies, then us.
      </p>

      {AGENCIES.map((a, i) => (
        <section key={a.name} className="mb-8">
          <h3 className="text-xl font-bold mt-6 mb-2">{i + 1}. {a.name}</h3>
          <p className="text-sm text-gray-600 mb-3">
            <strong>Based:</strong> {a.based}. <strong>Type:</strong> {a.type}.
          </p>
          <p className="mb-3">{a.what}</p>
          <ul className="list-disc pl-6 mb-3 space-y-1">
            <li><strong>Best for:</strong> {a.bestFor}</li>
            <li><strong>Platforms named:</strong> {a.platforms}</li>
            <li><strong>Worth asking them:</strong> {a.ask}</li>
          </ul>
          <p className="text-sm text-gray-600">
            Source: <a href={a.source} className="text-[#B23E13] underline" rel="noopener" target={a.source.startsWith('https://factoryjet.com') ? undefined : '_blank'}>{a.source.replace('https://', '')}</a>
          </p>
          {a.name === 'IOTAI' && (
            <figure className="my-8 not-prose">
              <img
                src={`${IMG}-call.webp`}
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
                alt="Two colleagues in a bright Melbourne meeting room on a video call with an AI agency, seen from behind as they face the wall screen"
                className="w-full h-auto rounded-xl"
              />
              <figcaption className="text-sm text-gray-600 mt-2">Most AI agency work runs over video workshops. What matters is who joins the call: the person who will build it, or only a salesperson.</figcaption>
            </figure>
          )}
          {a.name === 'Mantel Group' && (
            <figure className="my-8 not-prose">
              <img
                src={`${IMG}-clinic.webp`}
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
                alt="Over the shoulder of a receptionist at an Adelaide physiotherapy clinic checking a tablet list of calls handled by an AI receptionist"
                className="w-full h-auto rounded-xl"
              />
              <figcaption className="text-sm text-gray-600 mt-2">Voice and chat agents are the most common first project for clinics and trades. Ask how the agent hands a caller to a person.</figcaption>
            </figure>
          )}
        </section>
      ))}

      <p className="mb-6">
        FactoryJet services for Australian businesses: <a href="/au/ai-agents" className="text-[#B23E13] underline">AI agent development in Australia</a>, <a href="/au/ai-receptionist" className="text-[#B23E13] underline">AI receptionists</a>, <a href="/au/ai-customer-service" className="text-[#B23E13] underline">AI customer service</a>, <a href="/au/ai-consulting" className="text-[#B23E13] underline">AI consulting</a> and <a href="/au/ai-development" className="text-[#B23E13] underline">custom AI development</a>. The <a href="/au" className="text-[#B23E13] underline">FactoryJet Australia</a> page shows everything we do for Australian clients.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">What these AI agencies publish about price</h2>
      <p className="mb-4">
        Most AI agencies quote after a call. Five on this list publish figures on their own sites. We copied them exactly on 26 September 2026. These are each agency&rsquo;s own published figures, not FactoryJet prices and not a market survey. Check the source before you rely on them, because agencies change prices.
      </p>
      <div className="overflow-x-auto mb-4 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Agency</th>
              <th className="p-3 text-left border border-gray-700">Published figure (AUD)</th>
              <th className="p-3 text-left border border-gray-700">GST</th>
              <th className="p-3 text-left border border-gray-700">Source (fetched Sep 2026)</th>
            </tr>
          </thead>
          <tbody>
            {PRICES.map((p) => (
              <tr key={p.agency} className="odd:bg-white even:bg-gray-50">
                <td className="p-3 border border-gray-200 font-semibold align-top">{p.agency}</td>
                <td className="p-3 border border-gray-200 align-top">{p.figure}</td>
                <td className="p-3 border border-gray-200 align-top">{p.gst}</td>
                <td className="p-3 border border-gray-200 align-top">
                  <a href={p.source} className="text-[#B23E13] underline" rel="noopener" target="_blank">{p.source.replace('https://', '')}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-4">
        <strong>How to read this.</strong> The low figures buy a scoped assessment or a single automation between two tools. The high figures buy custom software, several connected systems and ongoing support. Where a page does not say whether GST is included, assume a registered business will add 10 percent GST on top and ask. Model usage fees, paid to the AI provider, are usually extra.
      </p>
      <p className="mb-6">
        For the full picture, including AI chatbots, receptionists and consulting day rates in Australia, read our <a href="/blog/ai-cost-australia-2026" className="text-[#B23E13] underline">AI cost guide for Australia (2026)</a>. FactoryJet does not publish a rate card; we give a fixed quote per stage after a free call.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Which type of AI agency fits your business?</h2>
      <p className="mb-4">Tick the line that sounds most like you. It points to a type of agency, not one name.</p>
      <div className="grid gap-3 mb-8 not-prose">
        <div className="rounded-xl border border-gray-200 p-4 hover:border-[#B23E13] transition-colors">
          <p className="font-semibold mb-1">&ldquo;We are under 50 people and drowning in admin across Xero, Gmail and a CRM.&rdquo;</p>
          <p className="text-gray-700 text-sm">An SME automation specialist with published entry prices: FlowWorks, IOTAI, Edison AI or Osher Digital.</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-4 hover:border-[#B23E13] transition-colors">
          <p className="font-semibold mb-1">&ldquo;We run on Microsoft 365 and want Copilot and agents done properly.&rdquo;</p>
          <p className="text-gray-700 text-sm">A Microsoft specialist: Arinco or Team 400. IOTAI also lists Copilot roll-outs.</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-4 hover:border-[#B23E13] transition-colors">
          <p className="font-semibold mb-1">&ldquo;We are regulated and paperwork-heavy: accounting, health, NDIS.&rdquo;</p>
          <p className="text-gray-700 text-sm">A mid-market firm that names your sector and its rules: Aivy is the clearest fit on this list.</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-4 hover:border-[#B23E13] transition-colors">
          <p className="font-semibold mb-1">&ldquo;We miss calls and want an AI receptionist or voice agent.&rdquo;</p>
          <p className="text-gray-700 text-sm">Advancer and FlowWorks list voice AI. FactoryJet builds <a href="/au/ai-receptionist" className="text-[#B23E13] underline">AI receptionists</a> for clinics and trades.</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-4 hover:border-[#B23E13] transition-colors">
          <p className="font-semibold mb-1">&ldquo;We sell online and want AI in orders, support and the store itself.&rdquo;</p>
          <p className="text-gray-700 text-sm">An agency that builds stores as well as agents. That is FactoryJet&rsquo;s main ground; see <a href="/au/ecommerce-development" className="text-[#B23E13] underline">ecommerce development in Australia</a>.</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-4 hover:border-[#B23E13] transition-colors">
          <p className="font-semibold mb-1">&ldquo;We are a large organisation and AI is part of a data and cloud overhaul.&rdquo;</p>
          <p className="text-gray-700 text-sm">An enterprise consultancy: Mantel Group, Arinco, AI Consulting Group or one of the big four.</p>
        </div>
      </div>

      <figure className="my-8 not-prose">
        <img
          src={`${IMG}-shortlist.webp`}
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          alt="Two people at a round café table in Brisbane narrowing three blank cards to one, marked with an orange tick"
          className="w-full h-auto rounded-xl"
        />
        <figcaption className="text-sm text-gray-600 mt-2">Shortlist three, send each the same brief, pick the one that asks the best questions.</figcaption>
      </figure>

      <h2 className="text-2xl font-bold mt-10 mb-4">How to choose an AI agency in Australia: 7 steps</h2>
      <p className="mb-4">Open each step for the detail.</p>
      <div className="space-y-3 mb-8 not-prose">
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">1. Write down one task, not an AI strategy</summary>
          <p className="mt-3 text-gray-700">Pick the task your team repeats most and complains about most. Note what starts it, which software it touches, how often it happens and what a good result looks like. One page is enough. Agencies give far better answers to a real task than to &ldquo;we want to use AI&rdquo;.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">2. Filter by your size and your software</summary>
          <p className="mt-3 text-gray-700">Use the table above. A Microsoft shop and a Xero-and-Shopify business need different partners. So do a 12-person clinic and a 2,000-person insurer. Cross off anyone whose typical client looks nothing like you.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">3. Send the same brief to three agencies</summary>
          <p className="mt-3 text-gray-700">Same page, same day, same questions. Compare how they respond. Good agencies ask about exceptions (&ldquo;what happens when the invoice is missing a PO number?&rdquo;), data access and who approves the output. Weak ones jump straight to a demo.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">4. Ask who will actually build it</summary>
          <p className="mt-3 text-gray-700">Meet the engineer, not only the salesperson. Ask what language or platform the solution is written in, because that decides who else could maintain it if the agency disappears.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">5. Settle ownership and data before price</summary>
          <p className="mt-3 text-gray-700">Who owns the code, the automation accounts and the prompts? Where is your data stored and processed? Is it used to train anyone&rsquo;s model? Get the answers in writing. Under the Privacy Act 1988 you remain responsible for personal information your AI handles.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">6. Buy a fixed-scope first build</summary>
          <p className="mt-3 text-gray-700">Several agencies here sell an assessment, sprint or pilot at a fixed price. Take that route. Agree one measure of success before work starts, such as hours saved on the task or time to first reply, and record today&rsquo;s number.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">7. Plan for after launch</summary>
          <p className="mt-3 text-gray-700">Software your AI connects to will change, and automations quietly break. Ask what support looks like in month three and month twelve, who watches for failed runs and how fast they respond. The worst outcome is an agency that disappears after launch.</p>
        </details>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">Local, remote or big four: an honest comparison</h2>
      <div className="overflow-x-auto mb-8 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700"></th>
              <th className="p-3 text-left border border-gray-700">Local specialist agency</th>
              <th className="p-3 text-left border border-gray-700">Big four or global consultancy</th>
              <th className="p-3 text-left border border-gray-700 bg-[#B23E13]">Remote specialist (e.g. FactoryJet)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Who you work with</td>
              <td className="p-3 border border-gray-200">Small team, often the founder</td>
              <td className="p-3 border border-gray-200">Large team with partners and juniors</td>
              <td className="p-3 border border-gray-200 bg-orange-50">Senior engineers, founder on every project</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">On-site workshops</td>
              <td className="p-3 border border-gray-200">Easy in their city</td>
              <td className="p-3 border border-gray-200">Yes, nationally</td>
              <td className="p-3 border border-gray-200 bg-orange-50">No. Video workshops in Australian business hours</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Best project size</td>
              <td className="p-3 border border-gray-200">One to a few workflows</td>
              <td className="p-3 border border-gray-200">Large, multi-year programs</td>
              <td className="p-3 border border-gray-200 bg-orange-50">One workflow up to store, integrations and agents together</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Governance depth</td>
              <td className="p-3 border border-gray-200">Varies; ask for their method</td>
              <td className="p-3 border border-gray-200">Deep, formal frameworks</td>
              <td className="p-3 border border-gray-200 bg-orange-50">Human approval steps and logs built in</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Watch out for</td>
              <td className="p-3 border border-gray-200">Key-person risk in very small teams</td>
              <td className="p-3 border border-gray-200">Budgets sized for enterprises</td>
              <td className="p-3 border border-gray-200 bg-orange-50">No Australian office; not right if you need people on site</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">Australian rules every AI agency should raise with you</h2>
      <p className="mb-4">
        A good agency brings these up before you do. If yours does not, ask.
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><strong>The Privacy Act 1988 and the Australian Privacy Principles</strong> apply to AI the same way they apply to any other system that handles personal information, covering both the data going in and what the AI produces.</li>
        <li><strong>OAIC guidance</strong> tells businesses not to enter personal or sensitive information into publicly available generative AI tools, to update privacy policies to explain AI use, and to make sure customers know when they are dealing with AI. Read the <a href="https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products" className="text-[#B23E13] underline" rel="noopener" target="_blank">OAIC guidance on commercially available AI products</a>.</li>
        <li><strong>Data location.</strong> Ask where data is stored and processed, and whether the AI provider can use it for training. Several agencies here offer on-premise or private AI set-ups for sensitive data.</li>
        <li><strong>Sector rules.</strong> Health, finance and NDIS providers carry extra obligations. An agency that works in your sector should name them without prompting.</li>
      </ul>
      <p className="mb-6">
        Context helps too. The <a href="https://www.abs.gov.au/statistics/industry/technology-and-innovation/characteristics-australian-business/latest-release" className="text-[#B23E13] underline" rel="noopener" target="_blank">Australian Bureau of Statistics</a> reported that 12 percent of Australian businesses used artificial intelligence in 2024 to 2025, up from 1 percent in 2022 to 2023. Most businesses are still at the start, and so are many agencies. That is why examples of real, running work matter more than polished claims.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Six warning signs when you talk to an AI agency</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>A demo before any questions.</strong> If they show a slick demo before asking how your work runs today, the demo is the product and your business is an afterthought.</li>
        <li><strong>Vague ownership.</strong> If the automation lives in their account, you are renting your own operations. Ask for admin access from day one.</li>
        <li><strong>Big savings claims with no baseline.</strong> Headline numbers mean little unless they measured the task before the build. Ask how they measured it.</li>
        <li><strong>No human approval step.</strong> Anything that sends money, gives advice or speaks to customers should have a person approving it, at least at first.</li>
        <li><strong>Everything is an &ldquo;agent&rdquo;.</strong> Some products are ordinary rules with a new label. Ask to test it on one of your own messy examples.</li>
        <li><strong>No plan for month three.</strong> If support is not in the proposal, expect to pay for surprises later.</li>
      </ol>

      <h2 className="text-2xl font-bold mt-10 mb-4">Where FactoryJet fits, and where it does not</h2>
      <p className="mb-4">
        We are FactoryJet. We have served 500+ businesses since 2014, most of that time in commerce: online stores, B2B ordering and the operations behind them. Our founder, Bhavesh Barot, is involved in every project. We design, build, integrate and support AI agents, AI receptionists and customer service agents, and you own everything we build.
      </p>
      <p className="mb-4">
        <strong>Where we fit:</strong> Australian SMBs that sell online or run order-heavy operations and want one team for the store, the integrations (Shopify, Xero, MYOB, HubSpot) and the AI. Businesses that want a fixed quote per stage and a team that stays after launch.
      </p>
      <p className="mb-4">
        <strong>Where we do not:</strong> We have no Australian office. If you need people in your building every week, choose one of the local agencies above. If your project is a large Microsoft Copilot roll-out, a Microsoft specialist such as Arinco or Team 400 is a more natural fit. If your AI question is really forecasting or machine vision, a data-first firm such as AI Consulting Group will go deeper.
      </p>
      <p className="mb-6">
        If you are still working out what you need, these explain the options in plain English: <a href="/blog/what-does-an-ai-automation-agency-do" className="text-[#B23E13] underline">what an AI automation agency actually does</a>, <a href="/blog/ai-chatbots-vs-ai-agents-business" className="text-[#B23E13] underline">AI chatbots vs AI agents</a>, <a href="/blog/how-to-hire-an-ai-agent-developer-2026" className="text-[#B23E13] underline">how to hire an AI agent developer</a> and <a href="/blog/ai-agent-build-vs-buy-2026" className="text-[#B23E13] underline">whether to build or buy an AI agent</a>.
      </p>

      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 mb-8 not-prose">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#B23E13] mb-2">Not sure which agency type you need?</p>
        <p className="text-gray-800 leading-relaxed mb-3">
          Send us the one task your team repeats most. On a free call, the founder will tell you whether it needs an AI agent, a simpler automation or no AI at all, and which kind of agency fits, even if that is not us.
        </p>
        <a href="/contact" className="inline-block rounded-lg bg-[#B23E13] px-5 py-3 font-semibold text-white">Talk to the Founder</a>
      </div>
    </>
  ),
};

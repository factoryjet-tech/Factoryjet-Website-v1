import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

const SLUG = 'best-ai-agent-companies-financial-services';
const PAGE_URL = `https://factoryjet.com/blog/${SLUG}`;
const IMG = `/images/blog/${SLUG}`;
const TITLE = 'Best AI Agent Companies for Financial Services (2026)';
const META_DESCRIPTION =
  'Nine AI agent companies for banks, credit unions, lenders and fintechs: platforms, custom builders and bank consultants, with systems and addresses.';

// Every fact about every company below was read with curl on that company's own
// website on 24 November 2026. Quotes and URLs are logged in
// docs/reports/us-december-2026-11-24/best-ai-agent-companies-financial-services/verification.json
// in the main checkout. Security lines are each company's own words, never our
// assessment. No rival prices. Nobody paid to be listed and the order is not a
// ranking: FactoryJet, the publisher, is listed first, the rest are grouped by type.
// The ItemList schema maps from this same array, so the list and schema cannot drift.
type Kind = 'Us' | 'Platform' | 'Custom build and consulting';

interface Firm {
  name: string;
  url: string;
  source: string;
  whereSource?: string;
  whereSource2?: string;
  kind: Kind;
  label: string;
  where: string;
  type: string;
  serves: string;
  what: string;
  systems: string;
  security?: string;
  bestFor: string;
  ask: string;
}

const FIRMS: Firm[] = [
  {
    name: 'FactoryJet (that is us)',
    url: 'https://factoryjet.com/',
    source: 'https://factoryjet.com/services/financial-services-ai-agents',
    kind: 'Us',
    label: 'Custom builder',
    where: 'US clients, with calls held in US business hours',
    type: 'Services company that designs, builds, implements and supports custom AI agents',
    serves: '500+ businesses served since 2014, with 97% on-time delivery; its financial services pages cover lenders, banks and wealth firms',
    what: 'We build custom AI agents that operate inside the systems a team already uses, and anything that commits money waits for a person to approve it. The agent collects documents, checks them against your written rules and drafts the file; a named person at your institution decides on credit, advice and filings. We start with read-only access, run the agent beside your team for an agreed period, and show it working on your own past files before you sign.',
    systems: 'Each system is reached through its API or another access method your IT team signs off. Which systems the agent may write to is agreed in writing for each project',
    security: 'We design the agent to fit the controls you already follow, such as SOC 2. Because the agent can run in your own cloud account, your auditor can review it alongside the rest of your systems.',
    bestFor: 'Lenders, credit unions and fintechs that want one workflow built around their own systems, owned outright, with a fixed price per phase in writing.',
    ask: 'Can you show the agent working on our own past files, under our own rules, before we sign?',
  },
  {
    name: 'interface.ai',
    url: 'https://interface.ai/',
    source: 'https://interface.ai/',
    whereSource: 'https://interface.ai/contact-us',
    whereSource2: 'https://interface.ai/privacy-policy',
    kind: 'Platform',
    label: 'Platform',
    where: 'Palo Alto, California (3101 Park Blvd, on its contact page). Its privacy policy adds a mailing address in Covina, California',
    type: 'Subscription platform: voice, chat and staff-assist AI agents for credit unions and community banks',
    serves: 'Credit unions and community banks. Its homepage says 100+ of them use it and that 60%+ of interactions are handled by AI',
    what: 'interface.ai sells a voice agent that answers calls around the clock, verifies callers and resolves requests, plus a chat agent and a staff assistant. Its homepage says its AI completes the transaction on your core. It also lists a collections agent in alpha.',
    systems: 'Your core banking system, where its homepage says the AI completes transactions',
    security: 'Its menu reads “Bank-level security that stands scrutiny” and lists fraud prevention with biometric authentication and caller ID forensics.',
    bestFor: 'Credit unions and community banks that want member calls and chats finished on the core.',
    ask: 'Which of our core transactions can the voice agent complete today, and which still go to a person?',
  },
  {
    name: 'Posh',
    url: 'https://www.posh.ai/',
    source: 'https://www.posh.ai/ai-in-banking',
    whereSource: 'https://www.posh.ai/',
    kind: 'Platform',
    label: 'Platform',
    where: 'Boston, Massachusetts (33 Arch St, in the company details published in its homepage code)',
    type: 'Subscription platform: agentic AI for banks and credit unions, for customers and for staff',
    serves: 'Banks and credit unions. It says it has helped 150+ of them, and its banking page quotes an executive at Ion Bank',
    what: 'Posh sells a voice assistant that answers FAQs, routes calls and automates banking transactions around the clock, AI website search and outbound agents. For employees it offers a knowledge assistant, call practice and QA scoring of every conversation.',
    systems: 'Its banking page names subprocessors including Google, OpenAI, Twilio and Salesforce',
    security: 'Its banking page lists SOC 2 Type II, SOC 3 and CSA STAR, role-based access control, audit logging and encryption at rest and in transit. Its privacy notice says Posh will not use sensitive personal financial data to train models.',
    bestFor: 'Banks and credit unions that want customer and employee AI from one vendor that sells only to financial institutions.',
    ask: 'Which transactions can the voice assistant complete for a caller, and how does it verify the caller first?',
  },
  {
    name: 'Druid AI',
    url: 'https://www.druidai.com/',
    source: 'https://www.druidai.com/solutions/ai-agents-for-banking',
    whereSource: 'https://www.druidai.com/privacy-policy',
    kind: 'Platform',
    label: 'Platform',
    where: 'Bucharest, Romania (Opera Center, Costache Negri Street, in its privacy policy)',
    type: 'Enterprise AI agent platform with prebuilt banking agents',
    serves: 'Banks and credit unions, plus healthcare, education, insurance and retail. Its banking page quotes OTP Bank',
    what: 'Druid’s banking page shows agents for servicing requests, loan applications from quote to submission, outbound campaigns that recover abandoned applications, and bill payment reminders.',
    systems: 'It says Druid reaches core banking systems through prebuilt connectors, MCP, APIs and native platform integrations. Its demo screens label a core banking system, an LOS and a CRM',
    security: 'Its banking page heads its security section “Security and compliance that scale with you”.',
    bestFor: 'What its banking page calls “Global banks and credit unions” that want one platform for many service and lending agents.',
    ask: 'Which connectors exist today for our core and our LOS, and which would be custom work?',
  },
  {
    name: 'Zest AI',
    url: 'https://www.zest.ai/',
    source: 'https://www.zest.ai/industry/banks',
    whereSource: 'https://www.zest.ai/about-us',
    kind: 'Platform',
    label: 'Platform (lending)',
    where: 'Burbank, California, which its About page names as headquarters',
    type: 'Subscription software: AI credit underwriting, fraud detection and lending insights',
    serves: 'Credit unions, banks and specialty lenders. It says it has spent 15+ years serving financial institutions, and quotes First Hawaiian Bank',
    what: 'Zest AI builds credit scores from machine learning models trained on a lender’s own portfolio data. It also sells fraud detection and LuLu, a conversational lending insights tool. Its banks page says you can start with a proof of concept on past portfolio data and measure the effect before you sign.',
    systems: 'nCino, Fiserv, FIS, MeridianLink and Defi, which it names as loan origination systems it works with',
    security: 'It says every decision comes with full documentation, validation reports, transparent inputs, weightings and reason codes for your compliance team.',
    bestFor: 'Lenders and credit unions that want more automated, explainable credit decisions inside their current LOS.',
    ask: 'How do your reason codes map to the specific reasons on our adverse action notices?',
  },
  {
    name: 'Multimodal',
    url: 'https://www.multimodal.dev/',
    source: 'https://www.multimodal.dev/credit-unions',
    whereSource: 'https://www.multimodal.dev/contact',
    kind: 'Platform',
    label: 'Platform (back office)',
    where: 'New York, New York (205 Hudson Street, on its contact page)',
    type: 'Agentic AI platform for financial services (AgentFlow), mostly run as a managed service',
    serves: 'Banks, credit unions, lenders and other financial firms. It names FORUM Credit Union in a case study and Direct Mortgage Corp. in a testimonial',
    what: 'Multimodal sells AgentFlow, an agentic AI platform for credit unions, banks and other financial institutions. Its credit union page says the agents extract a loan packet, verify member identity, run risk assessment and draft an explainable credit decision. It says staff review and approve the work.',
    systems: 'Temenos, named as FORUM Credit Union’s core in its case study',
    security: 'It says AgentFlow runs as a managed platform with customer data separated by account, and that private cloud options are scoped separately.',
    bestFor: 'Lenders and credit unions that want loan files read and decisions drafted for staff to approve.',
    ask: 'Can we run a batch of our own past loan files through AgentFlow and compare its drafts with our final decisions?',
  },
  {
    name: 'Master of Code Global',
    url: 'https://masterofcode.com/',
    source: 'https://masterofcode.com/banking-ai-consulting',
    whereSource: 'https://masterofcode.com/contacts',
    kind: 'Custom build and consulting',
    label: 'Custom builder',
    where: 'Redwood City, California (541 Jefferson Ave) and Winnipeg, Manitoba, on its contacts page, which also lists offices in Toronto, Poland and Ukraine',
    type: 'Custom AI development and consulting firm with a banking practice',
    serves: 'Banking, finance, insurance and other industries. It says it was founded in 2004 and has delivered 1000+ projects',
    what: 'Master of Code’s banking AI consulting page covers conversational support, fraud and credit assessment, loan and onboarding automation, and staff assistants. Its banking portfolio names an AI-powered FAQ voicebot. It offers a 4-week AI Compass Sprint that ends in a 90-day roadmap, and pilots on a fixed budget and fixed timeline.',
    systems: 'Your core banking systems, described in general terms',
    security: 'Its homepage lists ISO 27001 beside information security, cybersecurity and privacy protection.',
    bestFor: 'Banks and fintechs that want a custom conversational or staff assistant build, with a fixed-budget pilot first.',
    ask: 'Which of your banking builds reached production, and who owns the code when the project ends?',
  },
  {
    name: 'Cornerstone Advisors',
    url: 'https://www.crnrstone.com/',
    source: 'https://www.crnrstone.com/bold-solutions/artificial-intelligence-consulting',
    whereSource: 'https://www.crnrstone.com/',
    kind: 'Custom build and consulting',
    label: 'Bank consultancy',
    where: 'Scottsdale, Arizona, with Raleigh, North Carolina and Orlando, Florida also listed in its site footer',
    type: 'Consulting firm for banks and credit unions, with an AI Accelerator program',
    serves: 'Community banks and credit unions. It says it has run Executive AI Education programs onsite at community banks and credit unions',
    what: 'Cornerstone’s AI Accelerator connects foundation, strategy, and deployment. Use cases are ranked by ROI and feasibility, and in deployment it switches on AI inside platforms you already own, tunes tools like Microsoft Copilot and builds custom solutions where needed.',
    systems: 'LOS, CRM and digital banking, which it names as core systems to connect AI across, plus Microsoft Copilot',
    security: 'It describes setting up security and privacy controls and clear guardrails for AI use in the foundation stage.',
    bestFor: 'Community banks and credit unions that want an AI plan and governance in place before picking vendors.',
    ask: 'Which parts of the roadmap do you build yourselves, and which do you hand to a vendor?',
  },
  {
    name: 'iuvo Technologies',
    url: 'https://www.iuvotech.com/',
    source: 'https://www.iuvotech.com/financial-institutions',
    whereSource: 'https://www.iuvotech.com/contact-us',
    kind: 'Custom build and consulting',
    label: 'IT and AI consultancy',
    where: 'Boston, Massachusetts (6 Liberty Square, on its contact page)',
    type: 'IT consulting and managed services firm with an AI consulting practice',
    serves: 'Banks, investment firms and fintechs, among other clients. It says its consultants have helped financial institutions since 2007',
    what: 'iuvo offers AI readiness assessments, custom AI development, retrieval-augmented generation (RAG) on your own documents, and chatbots and assistants with role-based access controls.',
    systems: 'Your internal knowledge, documentation and data sources, described in general terms',
    security: 'Its financial institutions page says it helps clients stay aligned with GLBA, SOX, PCI-DSS, FFIEC and SOC 2.',
    bestFor: 'Smaller banks, investment firms and fintechs that want AI added by the firm that also runs their IT and security.',
    ask: 'Which AI assistants have you put live for a financial institution, and what data could each one reach?',
  },
];

const KINDS: Kind[] = ['Us', 'Platform', 'Custom build and consulting'];

const KIND_HEADING: Record<Kind, string> = {
  Us: 'Custom agents built around your own systems: FactoryJet',
  Platform: 'AI agent platforms built for banks, credit unions and lenders',
  'Custom build and consulting': 'Custom AI builders and AI consulting for banks',
};

const KIND_INTRO: Record<Kind, string> = {
  Us: 'FactoryJet wrote this list and lists itself first, in the same template as the other eight.',
  Platform:
    'Software you subscribe to: interface.ai and Posh for voice and chat, Druid for building many agents, Zest AI for the credit score and Multimodal for the loan file.',
  'Custom build and consulting':
    'Firms that plan or build AI for you instead of renting you a product.',
};

const FAQS: FAQItem[] = [
  {
    q: 'Which companies build AI agents for financial services?',
    a: 'This list covers nine: FactoryJet, interface.ai, Posh, Druid AI, Zest AI, Multimodal, Master of Code Global, Cornerstone Advisors and iuvo Technologies. Five are platforms you subscribe to and four plan or build AI for you. We read every company on its own website on 24 November 2026.',
  },
  {
    q: 'What are the best AI companies for banking?',
    a: 'The best one depends on the job. For a workflow no product handles, a custom builder such as FactoryJet or Master of Code. For member calls and chats at a credit union or community bank, interface.ai and Posh sell agents built only for financial institutions. For credit decisions, Zest AI. For reading loan files, Multimodal. For a plan first, Cornerstone Advisors.',
  },
  {
    q: 'What is the best AI for banking customer service?',
    a: 'Look at products that finish the request, not ones that only answer questions. interface.ai says its AI completes transactions on your core. Posh lists a voice assistant that automates banking transactions. Druid shows servicing agents for balances, disputes and cards. Ask each to complete a real transaction on a test account.',
  },
  {
    q: 'What is an AI chatbot for banking, and how is an agent different?',
    a: 'An AI chatbot for banking answers questions such as branch hours or a CD rate. An AI agent also acts: it verifies the caller, moves money between the member’s own accounts, reorders a card or fills a loan application. Ask whether the product writes to your core or only reads from it.',
  },
  {
    q: 'Which AI development company for banking should a mid-sized bank pick?',
    a: 'Pick by job and by who will own the result. A development firm such as FactoryJet or Master of Code builds one workflow around your systems, and you can own the code. A platform such as Posh or Druid runs service agents on its own software.',
  },
  {
    q: 'Do banks need an AI agent development company, or can they buy a product?',
    a: 'Buy when the job is standard and the product already connects to your core and LOS, as with member service or credit scoring. Hire an AI agent development company when the workflow is your own, the systems are unusual or you want to own the agent outright.',
  },
  {
    q: 'What does AI consulting for banks include?',
    a: 'Usually a readiness review, a ranked list of use cases, governance rules and a roadmap. Cornerstone Advisors says its AI Accelerator connects foundation, strategy, and deployment. Master of Code sells a 4-week sprint that ends in a 90-day plan. Ask whether the consultant also builds.',
  },
  {
    q: 'Can AI agents make credit decisions?',
    a: 'They can prepare one, and a named person should decide. Multimodal says its agents draft an explainable credit decision for staff to approve. Zest AI returns a score to your decision engine. Regulation B still requires a statement of specific reasons when credit is denied, so a person must be able to explain the outcome.',
  },
  {
    q: 'What is an adverse action notice, and does AI change it?',
    a: 'It tells an applicant why credit was denied or offered on worse terms. Regulation B (12 CFR 1002.9) requires a statement of specific reasons, and says that failing to reach a qualifying score on the creditor’s scoring system is not a sufficient reason. An AI model does not change that duty.',
  },
  {
    q: 'What does the GLBA Safeguards Rule say about AI vendors?',
    a: 'The FTC’s Safeguards Rule covers mortgage lenders, finance companies and other firms not under another federal regulator. Section 314.4(f) tells them to choose capable service providers, require safeguards by contract and assess providers over time. Banks and credit unions should look to the agencies’ SR 23-4 guidance for vendor oversight.',
  },
  {
    q: 'What do bank regulators expect when a bank uses an AI vendor?',
    a: 'The Federal Reserve, FDIC and OCC issued joint guidance on third-party relationships on 7 June 2023, listed as Fed SR 23-4. It covers all stages in the life cycle of a third-party relationship and names fintech arrangements directly, so treat an AI agent vendor like any other critical vendor.',
  },
  {
    q: 'How much does an AI agent for financial services cost?',
    a: 'Market ranges vary widely. Development firm ProductCrafters puts a custom AI agent build between about $5,000 and more than $180,000 in its 2026 breakdown, and CMARIX puts North American chatbot builds at $50,000 to $200,000 or more. FactoryJet puts a fixed price in writing once a short scoping call is done.',
  },
  {
    q: 'How long until an AI agent is live at a bank or credit union?',
    a: 'It depends on access more than on code. Read access to your core or LOS, vendor due diligence and testing on past cases take most of the time. Posh says results come in weeks, not years, and Zest AI says weeks, not months. Ask for a written timeline.',
  },
  {
    q: 'Which AI agent companies work with credit unions?',
    a: 'FactoryJet can build a custom agent for a credit union workflow no product covers. interface.ai sells to credit unions and community banks. Posh names credit unions in its client stories. Zest AI sells to credit unions. Multimodal’s case study is FORUM Credit Union. Cornerstone Advisors runs AI education at credit union leagues.',
  },
  {
    q: 'Can an AI agent connect to Jack Henry, Fiserv or FIS?',
    a: 'Some vendors name these systems. Zest AI says it works with LOS platforms including nCino, Fiserv, FIS and MeridianLink. Multimodal names a Temenos core. Druid says it reaches core systems through prebuilt connectors and APIs. Ask whether the connection to your exact core can write as well as read.',
  },
  {
    q: 'What are the most common AI use cases in banking?',
    a: 'Among the companies on this list: member service by voice and chat (interface.ai, Posh), loan file and underwriting support (Multimodal, Zest AI), fraud detection (Zest AI) and staff assistants (Posh, iuvo). Start with the job that costs your team the most hours each week.',
  },
  {
    q: 'What is KYC and can an AI agent help with it?',
    a: 'KYC (know your customer) is the identity check before an account opens. Multimodal says its agents verify member identity during loan work. An agent can gather documents and flag gaps, and a trained person should clear any exception or suspicious case.',
  },
  {
    q: 'Do these AI vendors train their models on our customer data?',
    a: 'Ask each one in writing. Posh’s privacy notice says it will not use sensitive personal financial data to train models or improve applications. Zest AI says it trains custom models on your own portfolio data, which is a different use. Put training and retention terms in the contract.',
  },
  {
    q: 'Who owns an AI agent a vendor builds for us?',
    a: 'With a subscription platform, the vendor owns the software and you rent access. With a custom build, ownership depends on the contract. FactoryJet’s clients own the code we build for them. Get the list of code, prompts and connectors you receive written into the agreement.',
  },
  {
    q: 'What are the top AI companies in fintech?',
    a: 'Lists of top AI companies in fintech, and searches for AI for financial services companies, usually mix consumer apps, lenders and software vendors. This page lists only companies selling AI agents and custom AI to financial firms. For AI agent builders in every industry, see our list of AI agent development companies.',
  },
  {
    q: 'Does FactoryJet build AI agents for banks and lenders?',
    a: 'FactoryJet designs, builds, implements and supports custom AI agents, and its financial services pages cover lenders, banks and wealth firms. The agent gathers, checks and drafts. A named person approves anything that commits money and makes every credit or advice decision. We show the agent on your own past files before you sign, and you own the code.',
  },
  {
    q: 'Can a small lender or fintech startup use these companies?',
    a: 'Yes, though fit varies. interface.ai, Posh and Cornerstone name community banks and credit unions as their market. Zest AI names specialty lenders. A fintech building its own product often wants a development firm, because it needs code it owns. Ask each vendor about its smallest customer.',
  },
];

const link = 'text-[#B23E13] underline';

export const post: BlogPost = {
  id: '864',
  slug: SLUG,
  title: TITLE,
  excerpt:
    'Nine companies that build or sell AI agents to US banks, credit unions, lenders and fintechs, read on their own websites on 24 November 2026. FactoryJet wrote this list and lists itself first.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Nov 24, 2026',
  dateModified: 'Nov 24, 2026',
  readTime: '18 min read',
  imageUrl: `${IMG}/hero.webp`,
  imageAlt:
    'A man in his forties with a shaved head and a burgundy sweater compares two printed proposals side by side at a standing desk by a window, beside an orange folder',
  meta: {
    title: 'AI Agent Companies for Financial Services 2026 | FactoryJet',
    description: META_DESCRIPTION,
  },
  keyTakeaways: [
    'AI agent companies for financial services fall into three groups: custom builders, platforms you subscribe to, and consultants.',
    'Every fact comes from each company’s own pages, read on 24 November 2026. No company paid for a spot.',
    'Regulation B requires a statement of specific reasons for adverse action, and a qualifying-score failure alone is not enough, so a person must be able to state the reasons.',
    'The FTC Safeguards Rule, which covers mortgage lenders, finance companies and other firms not under another federal regulator, says to vet, contract with and reassess service providers. Banks and credit unions can use SR 23-4.',
    'Ask every vendor the same eight questions before you sign.',
  ],
  faqs: FAQS,
  content: (
    <div>
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
              inLanguage: 'en-US',
              datePublished: '2026-11-24',
              dateModified: '2026-11-24',
              isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com' },
              publisher: { '@id': 'https://factoryjet.com/#organization' },
              about: { '@type': 'Thing', name: 'Companies that build AI agents for banks, credit unions, lenders and fintechs' },
              speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#answer-first', 'h1'] },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'AI agent companies for financial services compared (2026)',
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
        <p className="text-gray-800 leading-relaxed">
          Pick the job before the vendor. For an agent written around your own systems, FactoryJet or Master of Code. For member calls and chats, interface.ai or Posh. For many agents on one platform, Druid AI. For credit scoring, Zest AI. For loan files, Multimodal. For an AI plan first, Cornerstone Advisors or iuvo Technologies.
        </p>
      </div>

      <p className="mb-4">
        We downloaded each company&rsquo;s own pages on 24 November 2026 and noted what it sells to financial firms, the systems it names, its security wording and every address it lists. No vendor paid to appear here. FactoryJet wrote this list and lists itself first.
      </p>
      <p className="mb-4">
        <strong>Who is behind this page.</strong> FactoryJet, a builder of custom AI agents, wrote it. Read it with that bias in mind. <a href="/contact" className={link}>Describe your workflow</a>, and our founder will point you to the type of vendor that suits it.
      </p>
      <p className="mb-6">
        Some words used below. An <strong>AI agent</strong> is a program that takes a request and carries out a step for it, such as checking a balance or filling a loan form. A <strong>core</strong> (core banking system) is the main ledger of accounts, such as those from Jack Henry, Fiserv or FIS. An <strong>LOS</strong> (loan origination system) runs a loan from application to closing; nCino is one. <strong>Underwriting</strong> is deciding whether to lend and on what terms, and an <strong>adverse action notice</strong> tells an applicant why credit was refused. A <strong>credit union</strong> is owned by its members, so vendors say &ldquo;members&rdquo;.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">The nine companies at a glance</h2>
      <p className="mb-4">&ldquo;Where it works&rdquo; repeats each company&rsquo;s own address details.</p>
      <p className="md:hidden mb-2 text-sm text-gray-600 not-prose">Swipe sideways to see every column.</p>
      <div className="mb-8 not-prose" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
        <table className="w-full border-collapse text-sm" style={{ minWidth: 760 }}>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">#</th>
              <th className="p-3 text-left border border-gray-700">Company</th>
              <th className="p-3 text-left border border-gray-700">Type</th>
              <th className="p-3 text-left border border-gray-700">What it is</th>
              <th className="p-3 text-left border border-gray-700">Where it works</th>
            </tr>
          </thead>
          <tbody>
            {FIRMS.map((f, i) => (
              <tr key={f.name} className={f.kind === 'Us' ? 'bg-orange-50' : 'odd:bg-white even:bg-gray-50'}>
                <td className="p-3 border border-gray-200 align-top">{i + 1}</td>
                <td className="p-3 border border-gray-200 font-semibold align-top">{f.name}</td>
                <td className="p-3 border border-gray-200 align-top">{f.label}</td>
                <td className="p-3 border border-gray-200 align-top">{f.type}</td>
                <td className="p-3 border border-gray-200 align-top">{f.where}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">How did we choose these companies?</h2>
      <p className="mb-4">
        On 24 November 2026 we pulled Google&rsquo;s US results for &ldquo;ai development company for banking&rdquo;, &ldquo;ai consulting for banks&rdquo;, &ldquo;best ai companies for banking&rdquo; and &ldquo;ai agent companies for financial services&rdquo;, then applied five rules:
      </p>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>It sells AI to financial firms on its own site.</strong> A banking, credit union, lending or fintech page had to exist.</li>
        <li><strong>It builds or runs agents, not only reports.</strong> Each company either sells software that acts in a bank&rsquo;s systems or builds AI for a client.</li>
        <li><strong>It states an address.</strong> We list every address the company gave, the same way for each.</li>
        <li><strong>A mix of types.</strong> Five platforms and four firms that plan or build for you.</li>
        <li><strong>Facts only from the company.</strong> We give no scores; every line is the company&rsquo;s own published wording.</li>
      </ol>

      <h2 className="text-2xl font-bold mt-10 mb-4">What do regulators expect from a bank&rsquo;s AI vendor?</h2>
      <p className="mb-4">
        Three documents answer most of it. The <a href="https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-314/section-314.4" className={link} rel="noopener" target="_blank">FTC&rsquo;s Safeguards Rule, section 314.4(f)</a>, under the Gramm-Leach-Bliley Act (GLBA), covers mortgage lenders, finance companies and other firms not under another federal regulator. It tells them to oversee service providers in three ways:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Take reasonable steps to choose and keep providers able to protect the customer information involved.</li>
        <li>Require those providers, by contract, to put and keep such safeguards in place.</li>
        <li>Assess each provider from time to time, based on the risk it presents.</li>
      </ul>
      <p className="mb-4">
        Banks and federally insured credit unions answer to other regulators. For vendor oversight, they can use the Federal Reserve, FDIC and OCC joint <a href="https://www.federalreserve.gov/supervisionreg/srletters/SR2304.htm" className={link} rel="noopener" target="_blank">guidance on third-party relationships (SR 23-4)</a>, which covers every stage of a vendor relationship and names fintech arrangements directly.
      </p>
      <p className="mb-6">
        For lending, <a href="https://www.ecfr.gov/current/title-12/chapter-X/part-1002/section-1002.9" className={link} rel="noopener" target="_blank">Regulation B (12 CFR 1002.9)</a> requires a statement of the specific reasons for adverse action, and says that failing to reach a qualifying score on the creditor&rsquo;s scoring system is not a sufficient reason. If an agent helps decide a loan, someone at the lender must still be able to state those reasons. Look for an agent that prepares the file and leaves the decision with a named person.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">The AI agent companies for financial services, profiled</h2>
      <p className="mb-6">
        Position says nothing about quality. Platforms come after our entry, then the firms that build or plan AI for you.
      </p>

      {KINDS.map((k) => {
        const inGroup = FIRMS.filter((f) => f.kind === k);
        return (
          <section key={k} className="mb-6">
            <h3 className="text-xl font-bold mt-8 mb-2">{KIND_HEADING[k]}</h3>
            <p className="mb-4 text-gray-700">{KIND_INTRO[k]}</p>
            {inGroup.map((f) => {
              const n = FIRMS.indexOf(f) + 1;
              return (
                <div key={f.name} className="mb-8">
                  <h4 className="text-lg font-bold mt-6 mb-2">{n}. {f.name}</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Where it works:</strong> {f.where}. <strong>Type:</strong> {f.type}.
                  </p>
                  <p className="mb-3">{f.what}</p>
                  <ul className="list-none pl-0 mb-3 space-y-1">
                    <li><strong>Best for:</strong> {f.bestFor}</li>
                    <li><strong>Who it serves:</strong> {f.serves}.</li>
                    <li><strong>Systems and services it names:</strong> {f.systems}.</li>
                    {f.security && <li><strong>On security, in its own words:</strong> {f.security}</li>}
                    <li><strong>Worth asking them:</strong> {f.ask}</li>
                  </ul>
                  <p className="text-sm text-gray-600 [overflow-wrap:anywhere]">
                    Source:{' '}
                    <a href={f.source} className={link} rel="noopener" target={f.source.startsWith('https://factoryjet.com') ? undefined : '_blank'}>
                      {f.source.replace('https://', '')}
                    </a>
                    {f.whereSource && f.whereSource !== f.source && (
                      <>
                        {' '}| Address:{' '}
                        <a href={f.whereSource} className={link} rel="noopener" target="_blank">
                          {f.whereSource.replace('https://', '')}
                        </a>
                        {f.whereSource2 && (
                          <>
                            {', '}
                            <a href={f.whereSource2} className={link} rel="noopener" target="_blank">
                              {f.whereSource2.replace('https://', '')}
                            </a>
                          </>
                        )}
                      </>
                    )}
                  </p>
                </div>
              );
            })}
            {k === 'Platform' && (
              <figure className="my-8 not-prose">
                <img
                  src={`${IMG}/member-service-call.webp`}
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  alt="A member service representative in his thirties with a headset and a grey sweater listens to a call at a bright desk beside an orange cable reel"
                  className="w-full h-auto rounded-2xl"
                />
                <figcaption className="text-sm text-gray-600 mt-2">interface.ai and Posh both lead their homepages with the voice agent.</figcaption>
              </figure>
            )}
          </section>
        );
      })}

      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 my-8 not-prose">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#B23E13] mb-2">If no product fits your workflow</p>
        <p className="text-gray-800 leading-relaxed mb-3">
          Our <a href="/services/financial-services-ai-agents" className={link}>AI agents for financial services</a> start with a short call about the workflow and the systems behind it. Bhavesh Barot, our founder, joins that first call. Before any contract, you see the agent run on your own closed files.
        </p>
        <a href="/contact" className="inline-block rounded-lg bg-[#B23E13] px-5 py-3 font-semibold text-white">Talk to the Founder</a>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">Platform, custom build or consultancy: how the three types usually differ</h2>
      <p className="mb-4">Typical patterns for each type of vendor, not facts about any one company above.</p>
      <p className="md:hidden mb-2 text-sm text-gray-600 not-prose">Swipe sideways to see every column.</p>
      <div className="mb-8 not-prose" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
        <table className="w-full border-collapse text-sm" style={{ minWidth: 720 }}>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Question</th>
              <th className="p-3 text-left border border-gray-700">Custom builder (FactoryJet&rsquo;s type)</th>
              <th className="p-3 text-left border border-gray-700">Subscription platform</th>
              <th className="p-3 text-left border border-gray-700">Bank consultancy</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-orange-50">
              <td className="p-3 border border-gray-200 font-semibold align-top">Who owns the result</td>
              <td className="p-3 border border-gray-200 align-top">Usually you, if the contract says so</td>
              <td className="p-3 border border-gray-200 align-top">The vendor; you rent access</td>
              <td className="p-3 border border-gray-200 align-top">You own the plan; tools belong to whoever sells them</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold align-top">Fits an unusual workflow</td>
              <td className="p-3 border border-gray-200 align-top">Yes, it is written around yours</td>
              <td className="p-3 border border-gray-200 align-top">Within the settings the product offers</td>
              <td className="p-3 border border-gray-200 align-top">Maps it, then picks or builds a tool</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold align-top">Speed to a first live agent</td>
              <td className="p-3 border border-gray-200 align-top">One workflow at a time, after testing on past cases</td>
              <td className="p-3 border border-gray-200 align-top">Fast when the product already connects to your core</td>
              <td className="p-3 border border-gray-200 align-top">Slower; the plan comes first</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold align-top">How it is usually priced</td>
              <td className="p-3 border border-gray-200 align-top">Per project or per phase</td>
              <td className="p-3 border border-gray-200 align-top">Subscription, often by volume</td>
              <td className="p-3 border border-gray-200 align-top">Per engagement</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold align-top">Best when</td>
              <td className="p-3 border border-gray-200 align-top">No product does the job, or you want to own the agent</td>
              <td className="p-3 border border-gray-200 align-top">The job is common across many institutions</td>
              <td className="p-3 border border-gray-200 align-top">You need a board-ready AI plan and governance</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">How should a bank choose an AI agent company? 8 questions to ask every vendor</h2>
      <p className="mb-4">Ask all eight of every vendor, including us.</p>
      <ol className="mb-8 not-prose list-none pl-0 space-y-3">
        <li className="rounded-xl border border-gray-200 p-4">
          <p className="font-semibold">1. What does the agent do with no person involved?</p>
          <p className="mt-2 text-gray-700">Get a written list of actions it takes alone and actions that wait for staff.</p>
        </li>
        <li className="rounded-xl border border-gray-200 p-4">
          <p className="font-semibold">2. Which of our systems does it write to?</p>
          <p className="mt-2 text-gray-700">Name your core, LOS and CRM. Reading a balance and posting a transfer need different approvals.</p>
        </li>
        <li className="rounded-xl border border-gray-200 p-4">
          <p className="font-semibold">3. How does it verify a customer or member?</p>
          <p className="mt-2 text-gray-700">Ask what happens after two failed checks.</p>
        </li>
        <li className="rounded-xl border border-gray-200 p-4">
          <p className="font-semibold">4. Where is our data stored, for how long, and does it train models?</p>
          <p className="mt-2 text-gray-700">Put retention and deletion terms in the contract. The FTC Safeguards Rule (for mortgage lenders, finance companies and other firms not under another federal regulator) expects safeguards by contract; banks and credit unions can use SR 23-4.</p>
        </li>
        <li className="rounded-xl border border-gray-200 p-4">
          <p className="font-semibold">5. What does the audit log record?</p>
          <p className="mt-2 text-gray-700">Every action, the data used, who approved it and when.</p>
        </li>
        <li className="rounded-xl border border-gray-200 p-4">
          <p className="font-semibold">6. Who decides credit, complaints and suspicious activity?</p>
          <p className="mt-2 text-gray-700">The answer should be a named person at your institution.</p>
        </li>
        <li className="rounded-xl border border-gray-200 p-4">
          <p className="font-semibold">7. Can we see it work on our own past files first?</p>
          <p className="mt-2 text-gray-700">Ask for a run on a batch of your own closed cases and compare it with what your team decided.</p>
        </li>
        <li className="rounded-xl border border-gray-200 p-4">
          <p className="font-semibold">8. What do we keep if we leave?</p>
          <p className="mt-2 text-gray-700">Code, prompts, connectors and logs, in writing before the pilot.</p>
        </li>
      </ol>

      <figure className="my-8 not-prose">
        <img
          src={`${IMG}/vendor-review-meeting.webp`}
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          alt="Three colleagues in their thirties to fifties sit at a pale meeting table comparing printed pages turned away from the camera beside an orange folder"
          className="w-full h-auto rounded-2xl"
        />
        <figcaption className="text-sm text-gray-600 mt-2">Compare the written answers side by side before any demo.</figcaption>
      </figure>

      <h2 className="text-2xl font-bold mt-10 mb-4">How much does an AI agent for financial services cost?</h2>
      <p className="mb-4">
        The ranges below are published market ranges, not quotes from any company on this list. Development firm ProductCrafters, in its <a href="https://productcrafters.io/blog/how-much-does-it-cost-to-build-an-ai-agent/" className={link} rel="noopener" target="_blank">2026 AI agent cost breakdown</a>, puts a custom AI agent build between about $5,000 and more than $180,000. CMARIX says a fully custom AI chatbot typically runs $20,000 to $80,000, and that chatbot builds in North America usually range from $50,000 to $200,000 or more. Layer3 Labs puts a single-workflow automation build at $5,000 to $15,000 and a multi-workflow project at $15,000 to $50,000.
      </p>
      <p className="mb-6">
        Cost rises with the systems the agent touches and the exceptions it routes to people. FactoryJet quotes build and support as fixed prices in writing after a short scoping call, and keeps managing the servers, AI models, APIs and maintenance after launch.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">What else ranks for &ldquo;ai agent companies for financial services&rdquo;?</h2>
      <p className="mb-4">
        On our 24 November 2026 US search, page one for this phrase held mostly lists and directories. AdviceScout and Appic Softwares published lists of fintech AI agent development companies. inven.ai and RevenueBase showed company databases for AI in financial services. ChatFin and Arahi AI wrote about AI agents for corporate finance teams. A Reddit thread in r/fintech also ranked.
      </p>
      <p className="mb-6">
        For the related phrase &ldquo;ai consulting for banks&rdquo;, the same day&rsquo;s results led with BCG, iuvo Technologies, Gain America and Cornerstone Advisors. For AI in your own finance team, read <a href="/blog/ai-agents-for-finance-accounting-teams-2026" className={link}>AI agents for finance and accounting teams</a>. For builders across every industry, see <a href="/blog/best-ai-agent-development-companies-2026" className={link}>the AI agent development companies we compared</a>, and for strategy firms, <a href="/blog/best-ai-consulting-firms-usa-2026" className={link}>our comparison of US AI consulting firms</a>.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">What FactoryJet builds for financial services</h2>
      <p className="mb-4">
        We are FactoryJet. Since 2014 we have served 500+ businesses with 97% on-time delivery, and we design, build, implement and support custom AI agents. Bhavesh Barot, who founded FactoryJet, takes part in every project.
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Lenders, banks and credit unions.</strong> An agent lists what does not match the record and hands the decision to a person. See <a href="/services/financial-services-ai-agents" className={link}>AI agents for financial services</a>.</li>
        <li><strong>Underwriting.</strong> The agent prepares and the underwriter decides; a person approves anything that commits money. See <a href="/services/ai-underwriting-agents" className={link}>AI underwriting agents</a>.</li>
        <li><strong>Wealth and advisory firms.</strong> Advice stays with the advisor. See <a href="/services/wealth-management-ai-agents" className={link}>wealth management AI agents</a>.</li>
      </ul>
      <p className="mb-6">
        Outside finance, our published AI agent work includes the <a href="/case-studies/washington-law-group-accident-detection-agent" className={link}>Washington Law Group agent</a>, which finds qualifying truck accident reports and sends the firm one summary per case. Every phase has a fixed price in writing, and you own the code. For how we build agents in general, see <a href="/services/ai-agent-development" className={link}>AI agent development</a>.
      </p>

      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 mb-8 not-prose">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#B23E13] mb-2">If you are still deciding</p>
        <p className="text-gray-800 leading-relaxed mb-3">
          Tell us your core, your LOS and the job that eats your team&rsquo;s week. On a free call, the founder will tell you whether a platform on this list will do or a custom agent is worth building.
        </p>
        <a href="/contact" className="inline-block rounded-lg bg-[#B23E13] px-5 py-3 font-semibold text-white">Talk to the Founder</a>
      </div>
    </div>
  ),
};

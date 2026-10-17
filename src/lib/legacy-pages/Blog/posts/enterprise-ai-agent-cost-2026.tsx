import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

/*
 * Enterprise AI agent cost (2026). Written 18 Oct 2026 from brief 08 (pipeline/research/page-briefs/).
 * Sweep questions N25 (enterprise AI agent project cost) and N11 (who builds enterprise agents with security,
 * audit logs and human approval steps), US, UK and Australia.
 * Target terms (DataForSEO Labs, 18 Oct 2026): enterprise ai agent US 2,400 KD 12 (Ads spike unconfirmed, so no
 * demand figure is printed), enterprise ai agent platform 140, ai agent for enterprise 140, ai agent development
 * cost 140, ai agent cost 90 (UK 20), how much does it cost to build an ai agent 90, how much does an ai agent
 * cost 90, ai agent enterprise 40, cost of ai agent 30, enterprise ai agent solutions 20.
 * Every outside figure was read on the publisher's own page on 18 Oct 2026 and is logged in the handback
 * sources.json. Build ranges are other firms' published estimates, never FactoryJet prices. Platform figures are
 * vendor list prices, quoted as list prices and never added up. Rule B followed: no after-launch figures for a custom agent.
 * The faqs array below is the single source for both the visible FAQ and the FAQPage JSON-LD.
 */

const SRC = {
  layer3: 'https://www.layer3labs.io/guides/ai-consulting-rates-pricing',
  productcrafters: 'https://productcrafters.io/blog/how-much-does-it-cost-to-build-an-ai-agent/',
  quokka: 'https://dev.to/quokkalabs/how-much-does-it-cost-to-build-an-enterprise-ai-agent-in-2026-3c5o',
  acceldata: 'https://www.acceldata.io/blog/enterprise-agentic-ai-implementation-price-cost-analysis',
  sparkout: 'https://www.sparkouttech.com/development-cost-of-ai-agent/',
  agentforce: 'https://www.salesforce.com/agentforce/pricing/',
  copilotStudio: 'https://www.microsoft.com/en-us/copilot/pricing/copilot-studio',
  copilotAudit: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-logging-copilot-studio',
  copilotApprovals: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/flows-advanced-approvals',
  agentcore: 'https://aws.amazon.com/bedrock/agentcore/pricing/',
  bedrockConfirm: 'https://docs.aws.amazon.com/bedrock/latest/userguide/agents-userconfirmation.html',
  bedrockTrail: 'https://docs.aws.amazon.com/bedrock/latest/userguide/logging-using-cloudtrail.html',
  googleLaunch: 'https://cloud.google.com/blog/products/ai-machine-learning/introducing-gemini-enterprise-agent-platform',
  googlePricing: 'https://cloud.google.com/gemini-enterprise-agent-platform/pricing',
  googleGovern: 'https://docs.cloud.google.com/gemini-enterprise-agent-platform/govern',
  servicenow: 'https://www.servicenow.com/products/ai-agents.html',
  nistRmf: 'https://www.nist.gov/itl/ai-risk-management-framework',
  nist600: 'https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence',
  ico: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/what-are-the-accountability-and-governance-implications-of-ai/',
  oaic: 'https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products',
  euTimeline: 'https://artificialintelligenceact.eu/implementation-timeline/',
  euArt14: 'https://artificialintelligenceact.eu/article/14/',
};

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;
const IMG = '/images/blog/enterprise-ai-agent-cost-2026';

function Table({ head, rows }: { head: string[]; rows: React.ReactNode[][] }) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-gray-800 text-white">
            {head.map((h) => (
              <th key={h} className="p-3 text-left border border-gray-700">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 ? 'bg-gray-50' : 'bg-white'}>
              {r.map((c, j) => (
                <td key={j} className={`p-3 border border-gray-200 align-top${j === 0 ? ' font-semibold' : ''}`}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const faqs: FAQItem[] = [
  {
    q: 'How much does an enterprise AI agent cost in 2026?',
    a: "Published 2026 estimates put a production enterprise AI agent between about $50,000 and $300,000 to build. Quokka Labs gives $50,000 to $125,000 for one production workflow and $125,000 to $300,000 for an agent that works across CRM, ERP and data systems. Layer3 Labs puts a full enterprise AI system at $50,000 to $200,000 or more. Regulated or multi-agent platforms can pass $1 million. These are firms' estimates, not FactoryJet prices.",
  },
  {
    q: 'What are enterprise AI agents?',
    a: 'An enterprise AI agent is software that reads a request, decides the steps, and takes actions inside your business systems, such as NetSuite, SAP, Salesforce or ServiceNow, under controls a large company needs. Those controls are sign-in through your identity provider, role-based permissions, a person approving risky actions, a log of every action, a test set the agent must pass, and a way to roll back. The controls are what separate it from a chatbot.',
  },
  {
    q: 'How much does it cost to build or develop an AI agent in 2026?',
    a: "ProductCrafters puts AI agent development cost at $5,000 to $180,000 or more in 2026, depending on the type of agent: $20,000 to $35,000 for a simple rule-based agent, $40,000 to $70,000 for one with memory, $80,000 to $120,000 for an autonomous agent that plans and uses tools, and $100,000 to $200,000 for a domain-specific agent in a regulated field. Add integrations and approval steps on top for enterprise work.",
  },
  {
    q: 'How much does an AI agent proof of concept cost?',
    a: 'Quokka Labs puts a focused enterprise proof of concept at $20,000 to $50,000 in 2026, to test one workflow. Layer3 Labs prices a discovery engagement, which maps the workflow and writes a plan without building anything, at $2,000 to $5,000. A good proof of concept runs on your own past records and ends with a pass or fail result against a test set you agreed in advance.',
  },
  {
    q: 'Why do enterprise AI agent quotes range from $50,000 to over $1 million?',
    a: 'Because the work around the AI varies far more than the AI itself. Each extra system the agent must read or write adds integration work, which Acceldata estimates at $5,000 to $20,000 per system. Regulated data adds compliance work, which Acceldata puts at $15,000 to $50,000. Multi-region rollout, many agents and round-the-clock support push the top tier past $1 million in both Acceldata and Quokka Labs estimates.',
  },
  {
    q: 'Why is AI expensive to implement?',
    a: 'Most of the money goes into connecting the agent to real systems and making it safe to let act. Quokka Labs lists the largest cost drivers as integrations, data readiness, evaluations, security, permissions, observability and exception handling. Messy data has to be cleaned, every action needs permission rules, and someone has to write the test cases the agent must pass before it touches live records.',
  },
  {
    q: 'What does adding human approval steps do to the cost?',
    a: 'It adds scope, mainly in design and testing. Sparkout Tech adds 15 to 20% to a build estimate for human-in-the-loop work. The work covers deciding which actions need sign-off, building the queue where a person approves or rejects, routing to the right approver, handling timeouts, and testing what happens when someone says no. Approval steps for money, customer records and outbound messages are worth that cost.',
  },
  {
    q: 'What do audit logs for an AI agent involve?',
    a: 'An audit log records every request the agent received, what it looked up, which tool it called, what it changed, who approved it, and which prompt and model version were live at the time. It must be stored where the agent cannot edit or delete it. Acceldata counts audit trail mechanisms inside its $15,000 to $50,000 estimate for governance and compliance work in regulated industries.',
  },
  {
    q: 'What is the best AI agent platform for enterprises?',
    a: 'The best enterprise AI agent platform is usually the one where your data and work already live. Salesforce shops start with Agentforce, Microsoft 365 shops with Copilot Studio, ServiceNow shops with ServiceNow AI Agents, and teams building on AWS or Google Cloud with Bedrock AgentCore or Gemini Enterprise Agent Platform. A custom agent fits when the job spans several of those systems or runs mostly in your ERP.',
  },
  {
    q: 'Is it cheaper to use Agentforce or Copilot Studio than to build an agent?',
    a: 'For a job that lives inside Salesforce or Microsoft 365, usually yes, because most of the integration is already done. On 18 October 2026 Salesforce listed Agentforce Flex Credits at $500 per 100,000 credits, and Microsoft listed Copilot Studio at $200 a month for a pack of 25,000 Copilot Credits. When the job depends on an ERP or other outside systems, the connection work is custom either way.',
  },
  {
    q: 'What is the difference between Gemini Enterprise Agent Platform and Vertex AI?',
    a: 'Google launched Gemini Enterprise Agent Platform on 22 April 2026 and calls it the evolution of Vertex AI. Google says all Vertex AI services and roadmap will now be delivered through the Agent Platform rather than as a standalone service. So Vertex AI Agent Builder questions now point to the Agent Platform, which adds governance, identity and gateway features for agents.',
  },
  {
    q: 'How much does Vertex AI Agent Builder cost now?',
    a: 'Vertex AI Agent Builder is now part of Gemini Enterprise Agent Platform. On its pricing page, read 18 October 2026, Google bills Agent Runtime at $0.085 per vCPU-hour of Agent Compute and $0.009 per GiB-hour of Agent Memory, with a free usage tier each month. Model use and other services are billed separately under their own lines, so check every line that applies to your design.',
  },
  {
    q: 'Which companies build enterprise AI agents with security, audit logs and human approval steps?',
    a: 'Platform vendors, large consultancies and specialist development firms all do. To tell them apart, ask each one to show a live approval step, show the action log, run the agent in your own cloud account, hand over the code repository, share a written test set, and put each phase on a fixed price. FactoryJet builds custom AI agents and shows working software on your own data before you sign.',
  },
  {
    q: 'Can an enterprise AI agent run in our own AWS, Azure or Google Cloud account?',
    a: 'Yes, and for most enterprises it should. Running the agent in your own cloud account keeps the data, the logs and the access keys under your security team, and lets you apply your existing identity, network and retention rules. Ask for it in the first scoping call, because it changes how the build is set up. FactoryJet can set the AI services and servers up in your own accounts, billed to you at cost.',
  },
  {
    q: 'How long does an enterprise AI agent project take?',
    a: 'Plan in phases rather than one date. A discovery phase maps the workflow and systems. A proof of concept tests one workflow on your own records. A production phase adds integrations, approval steps, logging and security review. Rollout trains the team and widens use. Each phase should end with a pass or fail test you agreed before it started, which keeps the timeline honest.',
  },
  {
    q: 'What should a mid-sized company budget for its first AI agent?',
    a: 'Budget for one workflow, not a platform. For a company of 50 to 500 staff, Layer3 Labs prices discovery at $2,000 to $5,000 and a production workflow at $5,000 to $25,000, while Quokka Labs starts enterprise production agents at $50,000. Fund discovery and a proof of concept first, then price production once the test results are in. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    q: 'How do we keep an enterprise AI agent within GDPR and UK GDPR?',
    a: 'Treat it like any system that processes personal data. The UK ICO says the accountability principle makes you responsible for complying with data protection law and demonstrating it in any AI system that processes personal data, and its guidance covers what a data protection impact assessment must include. Limit what the agent can read, log what it does, and agree who is controller and processor.',
  },
  {
    q: 'Does the EU AI Act apply to our AI agent?',
    a: 'If you sell into the EU or the agent affects people there, check it. The EU AI Act implementation timeline, last updated 31 August 2026, says the remainder of the Act applied from 2 August 2026, and the rules for high-risk systems listed in Annex III apply from 2 December 2027. Article 14 requires high-risk systems to be designed so people can oversee them while in use.',
  },
  {
    q: 'What is the NIST AI Risk Management Framework, and do we need it?',
    a: 'The NIST AI RMF is a free US framework, released on 26 January 2023 and intended for voluntary use, for managing risks from AI systems. NIST added a Generative AI Profile, NIST-AI-600-1, on 26 July 2024. You are not legally required to adopt it, but many enterprise security teams ask vendors to map their controls to it, so a vendor who can do that saves you review time.',
  },
  {
    q: 'Who owns the code and the data after an AI agent is built?',
    a: 'Settle it in the contract before work starts. You should own the code, the prompts, the test set and the logs, and the data should stay in your systems or your cloud account. With FactoryJet you own the code and the repository from day one, so you can change vendors, bring the work in house, or extend the agent without asking permission.',
  },
  {
    q: 'Should we build one big AI agent or several small ones?',
    a: 'Start with one small agent for one job. It is cheaper to test, easier to approve, and its mistakes are easier to trace. Acceldata prices single-agent systems at $15,000 to $40,000 and multi-agent orchestration at $90,000 to $150,000 or more, because every extra agent adds coordination and testing. Add agents once the first one passes its tests on live work.',
  },
  {
    q: 'How do we test an AI agent before it goes live?',
    a: 'Build a test set from your own past cases, with the right answer for each, and run the agent against it before every release. Include awkward cases: missing fields, duplicate records, requests it should refuse. Set a pass mark in advance. Then run it in shadow mode, where it drafts actions that a person checks, before it acts on live records.',
  },
  {
    q: 'What ongoing support does an enterprise AI agent need?',
    a: 'Models change, systems change and new cases appear, so someone must watch the logs, update the test set and adjust prompts and integrations. FactoryJet quotes the build, and any support you choose, as fixed prices in writing after a short scoping call. If you want, FactoryJet keeps managing the servers, AI models, APIs and maintenance so your team does not have to. Support is optional, with no monthly minimum.',
  },
  {
    q: 'Is there an AI cost estimator or calculator for AI agents?',
    a: "Sparkout Tech publishes an interactive AI agent cost estimator with add-ons such as human-in-the-loop and a compliance layer. You can also build your own estimate from published ranges: count the systems the agent must touch, multiply by Acceldata's $5,000 to $20,000 per integration, then add the controls you need. Treat any calculator as a starting point for a scoping call, not a quote.",
  },
  {
    q: 'Can we see the AI agent working on our own data before we commit?',
    a: 'You should ask for it. FactoryJet shows working software on your own data before you sign, so you judge the agent on your real orders, tickets or invoices rather than a demo script. Each phase after that is scoped, priced and signed on its own, and the founder replies to enquiries within 24 hours.',
  },
];

export const post: BlogPost = {
  id: '780',
  slug: 'enterprise-ai-agent-cost-2026',
  title: 'How Much Does an Enterprise AI Agent Cost in 2026?',
  excerpt:
    "Enterprise AI agent cost in 2026 from five firms' published estimates, read on 18 October 2026: build ranges by stage, what audit logs, human approval steps and security review add to scope, platform list prices for Agentforce, Copilot Studio, AWS Bedrock AgentCore and Gemini Enterprise Agent Platform, and an eight-point checklist for choosing who builds it.",
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Oct 18, 2026',
  dateModified: 'Oct 18, 2026',
  readTime: '20 min read',
  imageUrl: `${IMG}/hero.webp`,
  imageAlt:
    'In a glass-walled meeting room above an open-plan office, a woman in a green blazer and a bald man in a white shirt compare two thick printed proposal binders of grey bar charts at a high table.',
  meta: {
    title: 'Enterprise AI Agent Cost in 2026: Build Ranges and What Drives Them',
    description:
      'What an enterprise AI agent costs to build in 2026, from named sources, and what audit logs, human approval, SSO and security review add to scope.',
  },
  keyTakeaways: [
    'Quokka Labs puts a production enterprise AI agent at $50,000 to $125,000 for one workflow and $125,000 to $300,000 across CRM, ERP and data systems, with regulated or multi-agent platforms reaching $1 million or more (dev.to, 15 October 2026).',
    'Layer3 Labs prices AI discovery at $2,000 to $5,000, a production workflow at $5,000 to $25,000 and a full enterprise AI system at $50,000 to $200,000 or more (guide updated 9 September 2026).',
    'ProductCrafters puts AI agent development cost at $5,000 to $180,000 or more, with domain-specific agents for regulated fields at $100,000 to $200,000 (page modified 20 May 2026).',
    'Enterprise controls are priced as scope: Sparkout Tech adds 15 to 20% for human-in-the-loop work, and Acceldata puts governance and compliance work at $15,000 to $50,000 and each system integration at $5,000 to $20,000.',
    'Google launched Gemini Enterprise Agent Platform on 22 April 2026 as the evolution of Vertex AI; its Agent Runtime lists at $0.085 per vCPU-hour (Google pricing page, read 18 October 2026).',
    'ServiceNow publishes no list price for its AI agents; its page offers a demo and a sales contact.',
    'No figure on this page is a FactoryJet price. FactoryJet quotes a fixed price in writing after a short scoping call.',
  ],
  faqs,
  content: (
    <article>
      {/* Answer-first block */}
      <div className="bg-white border-2 border-[#E5DFD7] rounded-xl p-6 sm:p-8 mb-10">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-3">The short answer</p>
        <p className="text-lg leading-relaxed mb-0">
          An <strong>enterprise AI agent</strong> typically costs $50,000 to $200,000 or more to build in 2026,
          according to Layer3 Labs, and Quokka Labs puts agents that work across CRM, ERP and data systems at $125,000
          to $300,000. The spread comes from integrations, security review, audit logging and human approval steps,
          which take more of the build than the AI model itself.
        </p>
      </div>

      <div className="bg-[#FAF8F5] border-l-4 border-[#B23E13] p-5 rounded-r-lg mb-6">
        <p className="text-sm text-[#1F2937] leading-relaxed mb-0">
          <strong>We build custom AI agents, so weigh this page with that in mind.</strong> Every range below is another
          firm&apos;s published estimate, named and linked, and every platform price is the vendor&apos;s own list price,
          read on 18 October 2026. No figure here is a FactoryJet price.
        </p>
      </div>

      <div className="bg-white border border-[#E5DFD7] p-5 rounded-lg mb-10">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-2">How we made this page</p>
        <p className="text-sm text-[#1F2937] leading-relaxed mb-0">
          On 18 October 2026 we read the top 10 Google results and the People Also Ask questions for the main searches
          on this topic in the US, UK and Australia (DataForSEO). The same day we asked 36 buyer questions across
          ChatGPT, Gemini, Claude, Perplexity and Google&apos;s AI answers, and read the pages they cited. Then we opened
          each firm&apos;s and each vendor&apos;s own page and copied the figures from there. Author: Bhavesh Barot,
          founder of FactoryJet.
        </p>
      </div>

      <p>
        Ask &quot;how much does an AI agent cost&quot; and you will get answers from $5,000 to over $1 million. Both ends
        are honest. They describe different jobs. A single agent that drafts replies inside one help desk is a small
        build. An AI agent for enterprise work that reads a purchase order, checks stock in SAP, asks a manager to approve a
        discount, writes the order into NetSuite and logs every step is a different project, and most of its price sits
        in the plumbing and the controls.
      </p>
      <p>
        This guide is written for two readers: a mid-sized company (50 to 500 staff) planning its first agent, and an
        enterprise (500+) planning one that must pass a security review. It sets out what five development firms
        published about AI agent development cost in 2026, what each enterprise control adds to scope, what the big
        platforms list, and how to choose who builds it.
      </p>

      <h2 id="at-a-glance">Enterprise AI agent cost at a glance (2026)</h2>
      <p>
        These are build ranges published by development firms, grouped by project stage. Each row names its source. They
        are the firms&apos; own estimates, and they disagree, which is useful: the gap between them tells you where scope
        decisions move the price.
      </p>
      <Table
        head={['Project stage', 'Published range', 'Who published it']}
        rows={[
          ['Discovery: map the workflow, systems and data, no build', '$2,000 to $5,000', <a key="l3a" href={SRC.layer3} {...ext}>Layer3 Labs</a>],
          ['Discovery and design, with architecture and data review', '$5,000 to $15,000', <a key="pca" href={SRC.productcrafters} {...ext}>ProductCrafters</a>],
          ['Proof of concept for one workflow', '$20,000 to $50,000', <a key="qa" href={SRC.quokka} {...ext}>Quokka Labs</a>],
          ['Production agent, one workflow', '$50,000 to $125,000', <a key="qb" href={SRC.quokka} {...ext}>Quokka Labs</a>],
          ['Production workflow for a smaller business', '$5,000 to $25,000', <a key="l3b" href={SRC.layer3} {...ext}>Layer3 Labs</a>],
          ['Cross-system agent (CRM, ERP, data and actions)', '$125,000 to $300,000', <a key="qc" href={SRC.quokka} {...ext}>Quokka Labs</a>],
          ['Full enterprise AI system', '$50,000 to $200,000 or more', <a key="l3c" href={SRC.layer3} {...ext}>Layer3 Labs</a>],
          ['Regulated or multi-agent platform', '$300,000 to $1 million or more', <a key="qd" href={SRC.quokka} {...ext}>Quokka Labs</a>],
          ['Global rollout, multi-region', '$150,000 to $1,000,000 or more', <a key="ac" href={SRC.acceldata} {...ext}>Acceldata</a>],
        ]}
      />
      <p>
        Two things stand out. Layer3 Labs writes for smaller businesses and says its enterprise tier is relevant for
        practices with 50+ staff, so its numbers sit low. Quokka Labs writes for large enterprises and calls its figures
        planning ranges, not a rate card. If you run a 200-person distributor, your first agent probably sits between
        the two. If you run a 5,000-person bank, start from Quokka Labs&apos; regulated tier.
      </p>

      <figure className="my-8">
        <img src={`${IMG}/estimates.webp`}
          alt="A finance lead in a navy striped shirt marks one of five printed cost estimates laid side by side on a wooden desk with an orange highlighter, a black calculator beside them."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Lay the published estimates side by side before you read any single quote. The gaps show where scope moves the price.
        </figcaption>
      </figure>

      <h2 id="published-estimates">What published 2026 estimates say, firm by firm</h2>
      <p>
        This AI agent cost comparison covers the five pages we read in full on 18 October 2026. Three of them were cited
        most often when we asked AI assistants what an enterprise agent costs: Quokka Labs&apos; dev.to post,
        ProductCrafters and Acceldata. All five sell AI development or AI platforms, so read each range as that
        firm&apos;s estimate.
      </p>
      <Table
        head={['Firm and page', 'Headline range', 'How it splits the cost', 'Date on the page']}
        rows={[
          [<a key="q" href={SRC.quokka} {...ext}>Quokka Labs (dev.to)</a>, '$20,000 to $1 million or more', 'Four tiers: proof of concept, production single workflow, cross-system, regulated or multi-agent', 'Posted 15 October 2026'],
          [<a key="p" href={SRC.productcrafters} {...ext}>ProductCrafters</a>, '$5,000 to $180,000 or more', 'By agent type: simple rule-based $20,000 to $35,000; with memory $40,000 to $70,000; autonomous $80,000 to $120,000; domain-specific $100,000 to $200,000', 'Modified 20 May 2026'],
          [<a key="a" href={SRC.acceldata} {...ext}>Acceldata</a>, '$15,000 to $1,000,000 or more', 'Four tiers from Starter to Global Rollout, plus per-integration and compliance add-ons', '12 February 2026'],
          [<a key="s" href={SRC.sparkout} {...ext}>Sparkout Tech</a>, '$5,000 to $300,000', 'By agent type and industry, with add-ons: human-in-the-loop plus 15 to 20%, compliance layer plus $25,000 to $75,000', 'Read 18 October 2026'],
          [<a key="l" href={SRC.layer3} {...ext}>Layer3 Labs</a>, '$2,000 to $200,000 or more', 'By stage: discovery, single workflow, multi-workflow platform, enterprise system', 'Updated 9 September 2026'],
        ]}
      />
      <p>
        Read together, they agree on one thing more than any number: the model is a small share of the build. Quokka
        Labs lists the largest drivers as integrations, data readiness, evaluations, security, permissions,
        observability and exception handling. ProductCrafters puts integration and workflow orchestration at $20,000 to
        $50,000 of a build, the largest single stage it prices. Acceldata says each system integration adds $5,000 to
        $20,000.
      </p>
      <p>
        Other firms on Google&apos;s first page for these searches on 18 October 2026 included Aalpha, DevCom, Appinventiv,
        Cleveroad, SoftTeco, Data Science Society, SpotSaaS and, for UK readers, Zenfox&apos;s pricing comparison. We
        quote figures only from the five pages above, because those are the ones we read line by line.
      </p>

      <h2 id="what-makes-enterprise">What makes an AI agent &quot;enterprise&quot;?</h2>
      <p>
        An enterprise AI agent is an agent that acts inside business systems under the controls a security team will
        sign off. The AI part can be identical to a small business agent. These six controls are what change the
        scope, and therefore the cost of an AI agent at this level:
      </p>
      <ol className="list-decimal pl-6 space-y-3 mb-6">
        <li>
          <strong>Single sign-on and role-based access.</strong> Staff sign in through your identity provider, such as
          Microsoft Entra ID or Okta, and the agent can only do what that person&apos;s role allows. Layer3 Labs names
          enterprise SSO as part of what separates its $50,000 to $200,000 tier.
        </li>
        <li>
          <strong>Human approval steps.</strong> Before the agent issues a refund, changes a price, posts a journal or
          emails a customer, a named person approves it in a queue. Sparkout Tech prices this human-in-the-loop work at
          15 to 20% on top of a build.
        </li>
        <li>
          <strong>Audit logs.</strong> A record of each request, look-up, tool call, change and approval, with the
          prompt and model version in force, kept where the agent cannot alter it. Acceldata lists audit trail
          mechanisms inside its $15,000 to $50,000 range for governance and compliance work.
        </li>
        <li>
          <strong>Evaluation and testing.</strong> A test set built from your own past cases that the agent must pass
          before each release, plus red-team tests where someone tries to make it misbehave. ProductCrafters prices
          testing and validation at $5,000 to $15,000.
        </li>
        <li>
          <strong>Data residency and retention.</strong> The agent, its logs and its data stay in the region and the
          cloud account you choose, and are deleted on your schedule. Acceldata lists data residency controls in the
          same compliance range.
        </li>
        <li>
          <strong>Incident and rollback plan.</strong> A switch that stops the agent, a way to undo what it did, and a
          named person who is called when it misbehaves. This is mostly design and documentation, and it is the control
          buyers most often leave out of the scope.
        </li>
      </ol>

      <figure className="my-8">
        <img src={`${IMG}/approvals.webp`}
          alt="A man with a shaved head in a dark green overshirt reviews a queue of grey rows with small orange buttons on a monitor, an orange mug beside his keyboard."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          An approval queue: the agent proposes, a person signs off, and the log records both.
        </figcaption>
      </figure>

      <p>
        For the security side in depth, our guide to <a href="/blog/ai-agent-security-risks-controls-2026">AI agent security risks and controls</a>{' '}
        covers each one, and the <a href="/blog/ai-agent-governance-policy-mid-sized-companies-2026">AI agent governance policy guide</a>{' '}
        shows how to write the rules a mid-sized company needs.
      </p>

      <h2 id="price-drivers">Nine things that set the price of an enterprise AI agent</h2>
      <p>
        When two firms quote the same brief at $60,000 and $250,000, the gap almost always traces back to these nine
        decisions. Settle them before you ask for quotes and the quotes will converge.
      </p>
      <ol className="list-decimal pl-6 space-y-3 mb-6">
        <li>
          <strong>Number of systems.</strong> Every system the agent reads or writes (NetSuite, SAP, Salesforce,
          ServiceNow, HubSpot, a warehouse system) needs its own connection, permissions and tests. Acceldata estimates
          $5,000 to $20,000 per integration, and Layer3 Labs says a legacy ERP connection takes 40 to 80 hours where two
          modern SaaS tools take 4 to 8.
        </li>
        <li>
          <strong>Data quality.</strong> Duplicate customers, free-text fields and missing part numbers have to be
          cleaned or handled before the agent can act on them. Acceldata puts data preparation at about 20% of budget.
        </li>
        <li>
          <strong>Approval design.</strong> How many actions need sign-off, who approves each, and what happens when an
          approver is away. More approval paths mean more design and testing.
        </li>
        <li>
          <strong>Logging depth.</strong> Logging only the final action is quick. Logging every look-up, prompt and model
          version in a store the agent cannot edit is more work, and it is what an auditor will ask for.
        </li>
        <li>
          <strong>Security review and penetration test.</strong> Your security team, or a firm they hire, will test the
          agent for prompt injection (hidden instructions in a document or email that try to redirect it), data leaks
          and permission gaps. Budget time for findings and fixes.
        </li>
        <li>
          <strong>Evaluation set.</strong> Writing several hundred real test cases with correct answers takes your
          experts&apos; time as well as the builder&apos;s. Skip it and you cannot tell whether a change made the agent
          better or worse.
        </li>
        <li>
          <strong>Change management and training.</strong> The people who will approve the agent&apos;s work need to know
          what it does and when to overrule it. Layer3 Labs counts change management in its enterprise tier.
        </li>
        <li>
          <strong>Regions and languages.</strong> An agent serving the US, UK and Australia, or several languages, needs
          tests per region and sometimes data kept per region. Acceldata says hybrid cloud deployments add 15 to 30% to
          baseline costs.
        </li>
        <li>
          <strong>Regulated data.</strong> US health records, personal data under GDPR, UK GDPR or the
          Australian Privacy Act, and systems covered by the EU AI Act all add assessment and documentation work. Layer3
          Labs puts that overhead at 20 to 40% in healthcare and legal work.
        </li>
      </ol>

      <figure className="my-8">
        <img src={`${IMG}/integrations.webp`}
          alt="A woman with auburn hair in a grey sweater places a blank orange sticky note on a glass wall map of white and orange notes joined by grey lines, while a grey-haired man in glasses watches."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Mapping every system the agent will touch is the first cost decision, and the biggest.
        </figcaption>
      </figure>

      <h2 id="why-expensive">Why is AI expensive to implement in a large company?</h2>
      <p>
        Because the agent has to be trusted to act, and trust is built out of work the buyer rarely sees in a demo. A
        demo agent answers questions from one clean spreadsheet. A production agent reads from four systems with
        different field names, must refuse requests outside its role, must stop and ask a person before it moves money,
        and must leave a trail an auditor can follow a year later. Each of those is design, code and testing.
      </p>
      <p>
        The second reason is data. Acceldata estimates data preparation at about 20% of an agentic AI budget, and
        ProductCrafters warns that missing or messy data is a top driver of discovery cost. A company that cleans its
        customer and product records before the build pays for that once. A company that discovers the mess during the
        build pays for it in change requests.
      </p>
      <p>
        If your data and systems are not ready yet, our{' '}
        <a href="/blog/ai-readiness-assessment-checklist-mid-sized-companies-2026">AI readiness checklist</a> shows where
        to start.
      </p>

      <h2 id="platform-or-build">Build it, or switch on the enterprise AI agent platform you already have?</h2>
      <p>
        Most enterprises already pay for a platform with an agent builder inside it. If the job lives inside that
        platform, switching on its agents is usually the shorter project. These are the list prices on each
        vendor&apos;s own page, read on 18 October 2026. They are prices for using each platform, shown so you can
        compare units. Do not add them up into an estimate for a custom agent; your design decides which lines apply.
      </p>
      <Table
        head={['Enterprise AI agent platform', 'What it is', 'List price unit (read 18 Oct 2026)', 'Approval and logging features named by the vendor']}
        rows={[
          [
            <a key="af" href={SRC.agentforce} {...ext}>Salesforce Agentforce</a>,
            'Agents inside Salesforce CRM',
            'Flex Credits $500 per 100,000 credits (20 credits per standard action, $0.10); Conversations shown as Contact us; add-ons $125 per user per month',
            'Digital Wallet usage tracking; actions built from Salesforce flows and Apex',
          ],
          [
            <a key="cs" href={SRC.copilotStudio} {...ext}>Microsoft Copilot Studio</a>,
            'Agent builder for Microsoft 365 and Power Platform',
            '$200 per pack of 25,000 Copilot Credits a month, or a pay-as-you-go meter with no up-front commitment',
            <span key="csl">Activities logged in <a href={SRC.copilotAudit} {...ext}>Microsoft Purview</a>; <a href={SRC.copilotApprovals} {...ext}>multistage approvals</a> (preview)</span>,
          ],
          [
            <a key="ac" href={SRC.agentcore} {...ext}>AWS Bedrock AgentCore</a>,
            'Managed runtime and tools for agents on AWS',
            'Runtime $0.0895 per vCPU-hour and $0.00945 per GB-hour (v1); consumption-based, no minimum fees',
            <span key="acl"><a href={SRC.bedrockConfirm} {...ext}>User confirmation</a> before an action; API calls recorded in <a href={SRC.bedrockTrail} {...ext}>CloudTrail</a></span>,
          ],
          [
            <a key="gp" href={SRC.googlePricing} {...ext}>Google Gemini Enterprise Agent Platform</a>,
            'The evolution of Vertex AI, launched 22 April 2026',
            'Agent Runtime $0.085 per vCPU-hour and $0.009 per GiB-hour, free tier each month',
            <span key="gpl"><a href={SRC.googleGovern} {...ext}>Govern suite</a> with Agent Audit, Agent Identity and Agent Gateway</span>,
          ],
          [
            <a key="sn" href={SRC.servicenow} {...ext}>ServiceNow AI Agents</a>,
            'Agents inside the ServiceNow AI Platform, built in AI Agent Studio',
            'Price on request (no public list price; the page offers a demo and a sales contact)',
            'Guardrails set in AI Agent Studio; Control Tower to manage and monitor AI',
          ],
        ]}
      />

      <figure className="my-8">
        <img src={`${IMG}/platforms.webp`}
          alt="A flat software diagram with two panels: four grey boxes joined by thin lines to one orange box on the left, and a branching flow of grey boxes with three orange diamonds on the right."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Left: an agent that lives inside one platform. Right: a custom agent that branches across systems, with approval points.
        </figcaption>
      </figure>

      <h3 id="gemini-vs-vertex">Gemini Enterprise Agent Platform vs Vertex AI</h3>
      <p>
        If you searched for Vertex AI Agent Builder cost, the name has moved. Google&apos;s{' '}
        <a href={SRC.googleLaunch} {...ext}>launch post of 22 April 2026</a> calls Gemini Enterprise Agent Platform
        &quot;the evolution of Vertex AI&quot; and says all Vertex AI services and roadmap evolutions will be delivered
        through the Agent Platform rather than as a standalone service. Its pricing page bills Agent Runtime on compute
        and memory hours, with models and other services on their own lines.
      </p>

      <h3 id="when-custom">When a custom build is the better fit</h3>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>The job crosses systems: an order arrives by email or EDI, stock sits in the ERP, the customer sits in the CRM.</li>
        <li>Most of the data lives in an ERP the platform does not reach well, such as SAP Business One, Odoo, ERPNext or a custom ERP.</li>
        <li>You want to own the code, prompts, test set and logs, and choose or switch the model yourself.</li>
        <li>The approval rules are your own and span departments, such as finance sign-off before sales can change a price.</li>
      </ul>
      <p>
        Many enterprises end up with both: the platform agent for the conversation, and a custom connection or MCP
        server (a standard way for an agent to call another system) for the system it cannot reach. Our comparisons of{' '}
        <a href="/blog/agentforce-pricing-vs-custom-ai-agent-2026">Agentforce pricing against a custom agent</a> and{' '}
        <a href="/blog/copilot-studio-vs-custom-ai-agents-2026">Copilot Studio against custom AI agents</a> go through
        each platform line by line, and the{' '}
        <a href="/blog/enterprise-ai-agents-mid-sized-companies-buy-or-build-2026">buy or build guide for mid-sized companies</a>{' '}
        covers the choice department by department.
      </p>

      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg my-8">
        <h3 className="text-lg font-bold mb-3">Pricing an enterprise AI agent this quarter?</h3>
        <p className="mb-4">
          Bring the workflow, the systems behind it and the controls your security team will ask for. In a short call
          with founder Bhavesh Barot we will map the integrations and the approval points with you. See a demo on your
          own data before you sign. Founder replies within 24 hours.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors"
        >
          Talk to the Founder
        </a>
      </div>

      <h2 id="by-company-size">What to expect by company size: 10 to 50 staff, 50 to 500, and 500+</h2>
      <p>
        Company size changes which published range applies, because it changes how many systems, approvers and reviews
        the agent must pass. This table maps the ranges above to a typical first project at each size.
      </p>
      <Table
        head={['Company size', 'Typical first agent', 'Range that fits best', 'What usually drives the cost']}
        rows={[
          ['10 to 50 staff', 'One workflow across two modern tools, such as inbox to HubSpot', 'Layer3 Labs single workflow, $5,000 to $15,000', 'Clean setup; little approval design'],
          ['50 to 500 staff (mid-sized)', 'One workflow touching the ERP, such as order entry into NetSuite with a manager approval', 'Layer3 Labs complex workflow $15,000 to $25,000 up to Quokka Labs production $50,000 to $125,000', 'ERP connection, approval queue, action log'],
          ['500+ staff (enterprise)', 'Cross-system agent with SSO, audit logs and a security review', 'Quokka Labs cross-system, $125,000 to $300,000', 'Number of systems, security review, evaluation set'],
          ['500+ in a regulated industry', 'Agent touching health, financial or personal data across regions', 'Quokka Labs regulated or multi-agent, $300,000 to $1 million or more', 'Compliance work, data residency, multi-region tests'],
        ]}
      />
      <p>
        A 200-person manufacturer or distributor is the case most cost guides skip. It has an ERP, a CRM and a finance
        team that wants sign-off on anything touching prices, but it does not need a multi-region platform. Price it as
        one production workflow with full controls, and add the second workflow only when the first passes its tests.
        Our guide to <a href="/blog/agentic-ai-architecture-mid-sized-companies-2026">agentic AI architecture for mid-sized companies</a>{' '}
        shows how to lay out that first agent so the second reuses its connections.
      </p>

      <h2 id="checklist">Who builds enterprise AI agents with audit logs and approval steps: an eight-point checklist</h2>
      <p>
        Platform vendors, large consultancies and development firms all say they build enterprise AI agent solutions.
        Before any AI agent enterprise rollout, these eight checks separate the firms who will pass your security review from the ones who will not. Ask for each
        to be shown, not described.
      </p>
      <ol className="list-decimal pl-6 space-y-3 mb-6">
        <li>
          <strong>They show a live approval step.</strong> In the demo, the agent proposes an action, a person rejects
          it, and the agent stops and records why. If the demo only shows approvals that pass, ask to see a rejection.
        </li>
        <li>
          <strong>They show the log.</strong> Ask to open the record for one request and see the input, each look-up,
          each tool call, the approver and the prompt and model version. Ask where the log is stored and who can delete
          it.
        </li>
        <li>
          <strong>They name who reviews prompt and model changes.</strong> A change to a prompt or a switch of model can
          change behaviour as much as a code change. There should be a named reviewer and a test run before release.
        </li>
        <li>
          <strong>It runs in your cloud account.</strong> The agent, its data and its logs live in your AWS, Azure or
          Google Cloud account, under your identity and network rules, and AI services are billed to you.
        </li>
        <li>
          <strong>They hand over the repository.</strong> You own the code, prompts, test set and infrastructure
          scripts, in a repository you control, from the start of the project.
        </li>
        <li>
          <strong>They have a written evaluation set.</strong> A list of test cases with expected answers and a pass
          mark, agreed before the build, run before every release.
        </li>
        <li>
          <strong>They map controls to the NIST AI RMF.</strong> The{' '}
          <a href={SRC.nistRmf} {...ext}>NIST AI Risk Management Framework</a> is voluntary, but a vendor who can show
          which of its practices answer which parts of it, and of the{' '}
          <a href={SRC.nist600} {...ext}>Generative AI Profile (NIST-AI-600-1)</a>, saves your security team weeks.
        </li>
        <li>
          <strong>Each phase has a fixed price.</strong> Discovery, proof of concept and production are scoped, priced
          and signed separately, each with a pass or fail test, so you can stop after any phase with something you own.
        </li>
      </ol>

      <figure className="my-8">
        <img src={`${IMG}/review.webp`}
          alt="A woman with short white hair in a black turtleneck watches a wall display of grey rows with orange dots while a man in a charcoal polo points at one row, an orange pen in her hand."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Ask to see the action log for one real request, row by row, before you sign.
        </figcaption>
      </figure>

      <h2 id="uk-australia">What enterprise buyers in the UK, Australia and the EU add</h2>
      <p>
        The build work is the same in the US, UK and Australia. What changes is the assessment and documentation your
        own team must produce, and the platform prices in local currency.
      </p>
      <ul className="list-disc pl-6 space-y-3 mb-6">
        <li>
          <strong>United Kingdom.</strong> The <a href={SRC.ico} {...ext}>ICO&apos;s guidance on AI and data protection</a>{' '}
          says the accountability principle makes you responsible for complying with data protection law and for
          demonstrating that compliance in any AI system that processes personal data. Expect a data protection impact
          assessment (DPIA) before an agent touches customer or staff records.
        </li>
        <li>
          <strong>Australia.</strong> The{' '}
          <a href={SRC.oaic} {...ext}>OAIC&apos;s guidance on commercially available AI products</a> tells organisations
          to do due diligence before adopting one, including how human oversight can be built into processes. Plan the
          approval steps with that in mind.
        </li>
        <li>
          <strong>European Union.</strong> The{' '}
          <a href={SRC.euTimeline} {...ext}>EU AI Act timeline</a> (last updated 31 August 2026) shows the remainder of
          the Act applying from 2 August 2026, and the rules for high-risk systems listed in Annex III applying from 2
          December 2027. <a href={SRC.euArt14} {...ext}>Article 14</a> requires high-risk systems to be designed so that
          people can oversee them while they are in use.
        </li>
        <li>
          <strong>Local platform prices.</strong> The currency options on Salesforce&apos;s Agentforce pricing page list
          Flex Credits at £400 and AU$700 per 100,000 credits.
        </li>
      </ul>
      <p>
        For UK and Australian buyers, our <a href="/uk/ai-agents">UK AI agents page</a> and{' '}
        <a href="/au/ai-agents">Australian AI agents page</a> cover the local side.
      </p>

      <h2 id="estimate">Is there an AI agent cost calculator? A five-step build estimate</h2>
      <p>
        Sparkout Tech publishes an interactive estimator with add-ons for human-in-the-loop work and a compliance layer.
        You can also work up a first build estimate yourself from the published ranges. It will be rough, but it will
        tell you whether a quote is in the right band.
      </p>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li>Pick the stage you are buying (proof of concept, one production workflow, cross-system) and take its range from the first table.</li>
        <li>Count the systems the agent must read or write. Acceldata estimates $5,000 to $20,000 for each.</li>
        <li>If the agent needs human approval, add Sparkout Tech&apos;s 15 to 20% for that work.</li>
        <li>If the data is regulated, add Acceldata&apos;s $15,000 to $50,000 for governance and compliance work.</li>
        <li>Compare the result with the quotes you receive, and ask any quote far outside it which scope decisions explain the gap.</li>
      </ol>
      <p>
        Example: a mid-sized distributor wants one production workflow that reads emailed orders and writes them into
        NetSuite and Salesforce with a manager approval. Two systems at $5,000 to $20,000 each is $10,000 to $40,000 of
        integration inside the build, before approval work. That puts the job near the low end of Quokka Labs&apos; $50,000
        to $125,000 production tier, not the middle of its cross-system tier. This is arithmetic on published ranges, not
        a quote.
      </p>

      <h2 id="phased-budget">A phased budget that gets to production</h2>
      <p>
        The safest way to spend on an enterprise agent is in four phases, each with its own price and its own pass or
        fail test. You stop paying the moment a test fails, and you keep what was built.
      </p>
      <Table
        head={['Phase', 'What you get', 'Test to pass before the next phase', 'Published range for this stage']}
        rows={[
          ['1. Discovery', 'Workflow map, system list, data review, written scope and test set', 'Scope and test set signed off by the business owner', '$2,000 to $5,000 (Layer3 Labs)'],
          ['2. Proof of concept', 'One workflow running on your own past records', 'Pass mark met on the agreed test set', '$20,000 to $50,000 (Quokka Labs)'],
          ['3. Production', 'Integrations, approval queue, action log, SSO, security review fixes', 'Security review passed; shadow-mode results accepted', '$50,000 to $125,000 for one workflow (Quokka Labs)'],
          ['4. Rollout', 'Training, wider use, second workflow scoped', 'Approvers using the queue; error rate within agreed limit', 'Scoped and priced as its own phase'],
        ]}
      />

      <figure className="my-8">
        <img src={`${IMG}/phases.webp`}
          alt="Three colleagues stand at a wall board split into four columns by grey tape, where a man with a dark ponytail moves a blank orange card from the first column into the second."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Four phases, each priced and signed on its own. A card moves only when its test passes.
        </figcaption>
      </figure>

      <p>
        Our guide to moving <a href="/blog/ai-proof-of-concept-to-production-2026">an AI proof of concept to production</a>{' '}
        covers phase 2 to phase 3 in detail, and{' '}
        <a href="/blog/why-ai-agent-projects-fail-2026">why AI agent projects fail</a> lists the mistakes that stall
        projects between those phases.
      </p>

      <h2 id="how-factoryjet-scopes">How FactoryJet scopes an enterprise AI agent</h2>
      <p>
        FactoryJet designs, builds and supports custom AI agents and the integrations behind them. We have worked on
        NetSuite, SAP Business One, Odoo, ERPNext and custom ERPs, on EDI, punchout, HubSpot and Xero integrations, and we
        do Salesforce and Agentforce work. In the scoping call we map which actions need a person&apos;s approval and what
        the log must record.
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>We show working software on your own data before you sign.</li>
        <li>Each phase is scoped, priced and signed on its own.</li>
        <li>You own the code and the repository from day one.</li>
        <li>The AI services and servers can run in your own cloud accounts, billed to you at cost with no markup.</li>
        <li>Defects are fixed inside the build price for a cover period agreed before work starts.</li>
        <li>Support is optional: each change is quoted and approved, and there is no monthly minimum.</li>
      </ul>
      <p>
        FactoryJet quotes a fixed price in writing after a short scoping call. See{' '}
        <a href="/services/ai-agent-development">AI agent development</a>,{' '}
        <a href="/services/erp-ai-agents">AI agents for ERP systems</a>,{' '}
        <a href="/services/netsuite-ai-agents">NetSuite AI agents</a>,{' '}
        <a href="/services/ai-integration-services">AI integration services</a>,{' '}
        <a href="/services/ai-agent-monitoring">AI agent monitoring</a> and{' '}
        <a href="/services/ai-consulting">AI consulting</a>. For the small-business view of the same question, read{' '}
        <a href="/blog/what-is-an-ai-agent-cost-2026">what an AI agent costs</a>.
      </p>

      <div className="bg-[#FAF8F5] border border-[#E5DFD7] rounded-xl p-6 my-10">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-3">More 2026 decision guides</p>
        <ul className="mb-0">
          <li><a href="/blog/ai-mvp-development-cost-2026">AI MVP development cost in 2026</a>: what a first AI product costs to build, by scope.</li>
          <li><a href="/blog/ai-agency-vs-in-house-vs-freelancer-2026">AI agency vs in-house engineer vs freelancer</a>: which to pick for your company size.</li>
          <li><a href="/blog/questions-to-ask-ai-development-company-2026">15 questions to ask an AI development company</a>: and the red flags in the answers.</li>
          <li><a href="/blog/ai-agent-development-contract-checklist-2026">AI agent development contract checklist</a>: 14 clauses on data, ownership and support.</li>
          <li><a href="/blog/why-ai-agent-projects-fail-2026">Why AI agent projects fail</a>: what the research found and how to avoid it.</li>
          <li><a href="/blog/copilot-studio-vs-custom-ai-agents-2026">Copilot Studio vs a custom AI agent</a>: pricing and when each wins.</li>
        </ul>
      </div>

      <h2 id="sources">Sources</h2>
      <p className="text-sm text-gray-600">Every page below was opened and read on 18 October 2026.</p>
      <ul className="list-disc pl-6 space-y-1 text-sm mb-8">
        <li><a href={SRC.quokka} {...ext}>Quokka Labs on dev.to, How Much Does It Cost to Build an Enterprise AI Agent in 2026?</a> (posted 15 October 2026)</li>
        <li><a href={SRC.layer3} {...ext}>Layer3 Labs, AI Consulting Rates and Pricing in 2026</a> (updated 9 September 2026)</li>
        <li><a href={SRC.productcrafters} {...ext}>ProductCrafters, AI Agent Development Cost</a> (modified 20 May 2026)</li>
        <li><a href={SRC.acceldata} {...ext}>Acceldata, Enterprise Agentic AI Implementation Price: Cost Analysis</a> (12 February 2026)</li>
        <li><a href={SRC.sparkout} {...ext}>Sparkout Tech, AI Agent Development Cost in 2026</a></li>
        <li><a href={SRC.agentforce} {...ext}>Salesforce, Agentforce pricing</a></li>
        <li><a href={SRC.copilotStudio} {...ext}>Microsoft, Copilot Studio pricing</a>; <a href={SRC.copilotAudit} {...ext}>Copilot Studio audit logs in Purview</a>; <a href={SRC.copilotApprovals} {...ext}>multistage and AI approvals</a></li>
        <li><a href={SRC.agentcore} {...ext}>AWS, Amazon Bedrock AgentCore pricing</a>; <a href={SRC.bedrockConfirm} {...ext}>user confirmation before an action</a>; <a href={SRC.bedrockTrail} {...ext}>CloudTrail logging for Bedrock</a></li>
        <li><a href={SRC.googleLaunch} {...ext}>Google Cloud, Introducing Gemini Enterprise Agent Platform</a> (22 April 2026); <a href={SRC.googlePricing} {...ext}>Agent Platform pricing</a>; <a href={SRC.googleGovern} {...ext}>Govern overview</a></li>
        <li><a href={SRC.servicenow} {...ext}>ServiceNow, AI Agents</a></li>
        <li><a href={SRC.nistRmf} {...ext}>NIST, AI Risk Management Framework</a>; <a href={SRC.nist600} {...ext}>NIST-AI-600-1 Generative AI Profile</a> (26 July 2024)</li>
        <li><a href={SRC.ico} {...ext}>ICO, accountability and governance implications of AI</a></li>
        <li><a href={SRC.oaic} {...ext}>OAIC, privacy and commercially available AI products</a></li>
        <li><a href={SRC.euTimeline} {...ext}>EU AI Act implementation timeline</a> (last updated 31 August 2026); <a href={SRC.euArt14} {...ext}>Article 14, human oversight</a></li>
        <li>Our own measurement: Google results, People Also Ask and keyword data, DataForSEO, US, UK and Australia, 18 October 2026; 36 buyer questions asked across five AI assistants, 18 October 2026</li>
      </ul>

      <div className="bg-[#FAF8F5] border-2 border-[#E5DFD7] p-6 sm:p-8 rounded-xl my-10 shadow-sm">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-2">
          Enterprise AI agent scoping for US, UK and Australian companies
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] mb-3">
          See a demo on your own data before you sign
        </h3>
        <p className="text-[#4B5563] text-base leading-relaxed mb-6">
          Tell us the workflow, the systems and the controls your security team needs. We will map the integrations and
          approval points, show the agent working on your own records, and quote each phase as a fixed price in writing.
          Founder replies within 24 hours.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors shadow-sm"
          >
            Talk to the Founder
          </a>
          <a
            href="/services/ai-agent-development"
            className="inline-flex items-center gap-2 bg-white text-[#1F2937] border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            See AI agent development
          </a>
        </div>
      </div>
    </article>
  ),
};

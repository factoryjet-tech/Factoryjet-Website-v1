import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

/*
 * How much does it cost to build an AI agent (US, 2026). First written 19 Sep 2026; refreshed 18 Oct 2026 (batch 5 of
 * the mid-market plan, pipeline/research/BLOG-PLAN-MIDMARKET-AI-AGENTS-2026-10-17.md).
 * Target terms (DataForSEO, US, 17 Oct 2026): how much does it cost to build an ai agent 90/mo KD 1 (+950% yoy,
 * weakest page-one site 1 referring domain), ai agent cost 90 KD 13, how much does an ai agent cost 90 KD 1,
 * ai implementation cost 40, cost of ai agent 30, cost of an ai agent 10, how much does it cost to create an ai agent 10.
 * PAA and page one pulled 18 Oct 2026 (data/midmarket-agent-blog-2026-10-17/serp_paa_batch5.json).
 * Outside figures read on the publisher's own page on 18 Oct 2026: Layer3 Labs pricing guide (updated 9 Sep 2026),
 * ProductCrafters cost breakdown (dated 24 Feb 2026), Intercom Fin pricing, Salesforce Agentforce pricing.
 * Market ranges and vendor list prices only: no FactoryJet prices, and no running, hosting, model or maintenance
 * figures for a custom agent. The faqs array below is the single source for the visible FAQ and FAQPage JSON-LD.
 */

const SRC = {
  layer3: 'https://www.layer3labs.io/guides/ai-consulting-rates-pricing',
  productcrafters: 'https://productcrafters.io/blog/how-much-does-it-cost-to-build-an-ai-agent/',
  fin: 'https://fin.ai/pricing',
  agentforce: 'https://www.salesforce.com/agentforce/pricing/',
  gartner40: 'https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027',
};

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';

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
    q: 'How much does it cost to build an AI agent?',
    a: 'Published market ranges put a custom AI agent build at roughly $5,000 to $25,000 for a production MVP on one workflow and $50,000 to $200,000 or more for an enterprise system, per Layer3 Labs (updated 9 September 2026). ProductCrafters puts most mid-sized company projects at $15,000 to $100,000. Where yours lands depends on how many systems the agent connects to and how clean the data is.',
  },
  {
    q: 'How much does an AI agent cost?',
    a: 'It depends on whether you rent one or have one built. Rented agents bill per result on the vendor price list: Intercom charges $0.99 per Fin outcome, and a standard Salesforce Agentforce action uses 20 Flex Credits, which is $0.10 at $500 per 100,000 credits. A custom build is priced as a project, from about $5,000 for a single-workflow MVP to $200,000 or more for an enterprise system.',
  },
  {
    q: 'What is the cost of an AI agent for a mid-sized company?',
    a: 'ProductCrafters, a development firm, says implementing AI agents costs $15,000 to $100,000 for most mid-sized companies, covering discovery, development, integration with the CRM or ERP, testing and deployment. Layer3 Labs puts a multi-workflow platform with four to eight connected workflows at $25,000 to $75,000. Both are market ranges published by sellers, so treat them as a guide and ask for a fixed quote after scoping.',
  },
  {
    q: 'How much does it cost to create an AI agent from scratch?',
    a: 'Creating an AI agent from scratch costs the same as building one: the price follows the work, not the word. A single workflow with two or three system connections sits at $5,000 to $15,000 in the Layer3 Labs guide, and a workflow wired into a legacy ERP through a custom API at $15,000 to $25,000. Training your own model is rarely needed; most agents run on an existing model from OpenAI, Anthropic or Google.',
  },
  {
    q: 'What drives the cost of AI agent development?',
    a: 'Four things: how many systems the agent reads from and writes to, how messy or scattered the data is, how much approval and safety logic the job needs, and how much testing it takes to trust the result. In the ProductCrafters breakdown, integration and workflow orchestration is the largest phase at $20,000 to $50,000, ahead of model setup at $10,000 to $40,000.',
  },
  {
    q: 'Why is AI expensive to implement?',
    a: 'Most AI implementation cost is integration and testing, not the model. The agent has to read your systems through their APIs, respect who may see what, log every action, retry safely and hand the hard cases to a person. ProductCrafters says each API integration adds $3,000 to $10,000 and data preparation adds 20 to 40% to the timeline. A narrow first job keeps those costs small.',
  },
  {
    q: 'What does AI implementation cost for a business?',
    a: 'AI implementation costs for a business run from a $2,000 to $5,000 discovery engagement up to $50,000 to $200,000 or more for a multi-system enterprise deployment, according to the Layer3 Labs pricing guide updated 9 September 2026. The same guide notes quotes for the same project can differ by more than 400% between a freelancer and a large consultancy, so compare scope line by line.',
  },
  {
    q: 'Is an AI agent free?',
    a: 'No. Open-source frameworks such as LangChain are free to download, and several platforms offer a free tier for testing. What is never free is the work that makes an agent safe on real systems: connecting it through APIs, setting permissions, logging every action, testing it on your past cases and having a person review its escalations. That work is what the build price pays for.',
  },
  {
    q: 'Does it cost money to have an AI agent?',
    a: 'Yes, one way or another. You either rent an agent from a vendor and pay per result, such as $0.99 per Fin outcome at Intercom, or pay once to have one built and connected to your systems. A built agent also uses an AI model and hosting; at FactoryJet those accounts sit in your name and you pay the providers at cost.',
  },
  {
    q: 'How much does an AI agent cost per month?',
    a: 'A rented agent is billed monthly by usage on the vendor list price. For example, 1,200 resolved Fin conversations at $0.99 each is $1,188 before seat prices or minimum commitments. A custom agent has no standard monthly fee: the AI model and hosting are billed by the providers on your own accounts, and support is a choice you make, not a fixed minimum.',
  },
  {
    q: 'How much does a ChatGPT agent cost?',
    a: 'OpenAI includes agent features in its ChatGPT subscription plans rather than selling agents one at a time, and the plan line-up changes often, so check OpenAI\'s pricing page on the day you budget. A ChatGPT subscription does not connect an agent to your helpdesk, ERP or CRM with your permissions. For that, the agent has to be built and connected to those systems.',
  },
  {
    q: 'Can I build my own AI agent for free?',
    a: 'You can prototype one cheaply. A developer can wire a model to one tool with an open-source framework in a few days. What costs money is turning that prototype into something safe to run on real orders or invoices: permissions, retries that never repeat an action, logs, an evaluation set and someone watching the escalations. That gap is most of any build budget.',
  },
  {
    q: 'Are AI agents worth it?',
    a: 'An AI agent is worth it when it owns a queue you can count: at least a few hundred similar items a month, a rule a person could write down, and data the agent can reach. Gartner predicts over 40% of agentic AI projects will be canceled by the end of 2027 over cost, unclear value or weak risk controls, so prove the value on one queue first.',
  },
  {
    q: 'How much does an AI chatbot cost compared with an AI agent?',
    a: 'A chatbot costs less because it only answers questions and does not act on your systems, so there is no integration or permissions work to pay for. Layer3 Labs prices a simple workflow on standard SaaS tools at $5,000 to $8,000. Once the software must issue a refund, change an order or book a meeting, you are pricing an agent and the integration work that comes with it.',
  },
  {
    q: 'How much does an AI agent cost per hour?',
    a: 'AI agents are not billed by the hour. A rented agent bills per result, such as $0.99 per Fin outcome or $0.10 per Agentforce action. A custom build is priced as a project. Where hourly rates do appear is the people building it: Layer3 Labs lists AI consultants from $75 an hour for freelancers to $500 an hour at enterprise consulting firms.',
  },
  {
    q: 'Can a small or mid-sized business afford an AI agent?',
    a: 'Yes, if it has a real queue. Volume matters more than company size: roughly 200 or more repetitive items a month with a decision rule a person could write down. Below that, a workflow tool or a part-time hire is usually the cheaper answer. Above it, a single-workflow MVP in the $5,000 to $25,000 market range is a sensible first step.',
  },
  {
    q: 'Is it cheaper to rent an AI agent or build one?',
    a: 'Renting is cheaper to start and faster to test, because there is no build. Building wins when the agent must act on systems a vendor agent cannot reach, such as your ERP, a supplier portal or a custom database, or when per-result fees at your volume would exceed a one-time build. Run the vendor price list against your monthly volume before deciding.',
  },
  {
    q: 'How long does it take to build an AI agent?',
    a: 'A narrow pilot on one queue takes two to four weeks. A production agent with permissions, logging, escalation and monitoring usually takes six to twelve weeks, and most of that time goes on integration and edge cases rather than prompting. ProductCrafters gives 6 to 16 weeks for custom-built agents. A promise of a production agent in one week describes a demo.',
  },
  {
    q: 'Do you need coding to build an AI agent?',
    a: 'Not for a simple one. No-code builders can set up an agent that answers questions or runs a short workflow. Letting an agent act safely on your own systems, such as issuing refunds or updating orders in NetSuite, needs someone to write and test the tools it calls, handle permissions and log every action. That part is software engineering, and it is most of the cost.',
  },
  {
    q: 'What is an AI agent in simple terms?',
    a: 'Software you give a goal rather than a script. It decides its own steps, uses tools to act on real systems such as your helpdesk, store or CRM, checks whether it worked and keeps going until the job is done or it hits a limit you set. A chatbot replies to a message. An agent finishes a task and leaves a record of what it changed.',
  },
  {
    q: 'Do I need an AI agent or just automation?',
    a: 'If a person can write down every branch the software should take, build plain automation: it is cheaper, faster to audit and cannot make things up. Choose an agent when the input varies enough that listing every branch is the hard part, such as messy inbound email, unstructured PDFs or free-text support tickets. Many good projects combine both, with the agent reading and the code acting.',
  },
  {
    q: 'What should I ask before paying for an AI agent build?',
    a: 'Ask which queue it works on and how many items are in it, which systems it writes to and through which API, what the step limit and spend cap are per run, what happens when it is unsure, and who reviews the escalation queue. Also ask who owns the code and whose accounts the AI and hosting run in. Vague answers mean the vendor has not scoped your systems.',
  },
  {
    q: 'What is the cheapest way to start with an AI agent?',
    a: 'Start with a paid discovery or a pilot on one queue. Layer3 Labs puts a workflow discovery engagement at $2,000 to $5,000. At FactoryJet, the first step is a short scoping call and working software on your own data before you sign anything, followed by a fixed price in writing. Either route tells you whether the agent pays back before the larger spend.',
  },
  {
    q: 'Who owns an AI agent after it is built?',
    a: 'That depends on the contract, so check it before signing. At FactoryJet you own the code from day one, and the AI and hosting accounts are in your name, billed by the providers at cost. Some platforms and agencies keep the code and license it back to you, which makes switching vendors expensive later. Ask for repository access and admin rights in writing.',
  },
];

export const post: BlogPost = {
  id: '427',
  slug: 'what-is-an-ai-agent-cost-2026',
  title: 'How Much Does It Cost to Build an AI Agent in 2026?',
  excerpt:
    'Published market ranges put a custom AI agent at $5,000 to $25,000 for a one-workflow MVP and $50,000 to $200,000+ for an enterprise system. Here is where each figure comes from, what pushes a build up a tier, what renting one costs instead, and how to judge a proposal.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Sep 19, 2026',
  dateModified: 'Oct 18, 2026',
  readTime: '16 min read',
  imageUrl: '/blog-images/what-is-an-ai-agent-cost-2026.webp',
  imageAlt:
    'A desk with a laptop showing a support ticket queue beside a printed integration diagram and a calculator, representing the cost of renting or building an AI agent',
  meta: {
    title: 'How Much Does It Cost to Build an AI Agent? (2026)',
    description:
      'AI agent cost in 2026 from published market ranges: $5,000 to $25,000 for a one-workflow MVP, $50,000 to $200,000+ for enterprise, plus rented agent prices.',
  },
  keyTakeaways: [
    'Market ranges, not quotes: Layer3 Labs (updated 9 Sep 2026) puts a production MVP workflow at $5,000 to $25,000 and an enterprise AI system at $50,000 to $200,000+.',
    'ProductCrafters puts AI agent implementation at $15,000 to $100,000 for most mid-sized companies, with integration the largest single phase.',
    'Renting is the other route: Intercom charges $0.99 per Fin outcome, and a standard Agentforce action is $0.10 at Salesforce list price.',
    'What moves a build up a tier: the number of systems it touches, messy data, approval and safety logic, and testing.',
    'Gartner predicts over 40% of agentic AI projects will be canceled by the end of 2027. Prove one queue first.',
    'If a person can write out every branch, build automation instead of an agent.',
  ],
  faqs,
  content: (
    <article>
      {/* Answer-first block */}
      <div className="bg-white border-2 border-[#E5DFD7] rounded-xl p-6 sm:p-8 mb-10">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-3">The short answer</p>
        <p className="text-lg leading-relaxed mb-0">
          <strong>Building an AI agent costs roughly $5,000 to $25,000 for a production MVP on one workflow</strong> and
          $50,000 to $200,000 or more for a multi-system enterprise agent, per the Layer3 Labs pricing guide updated 9
          September 2026. Most of the money goes on connecting the agent to your systems and testing it. Renting an agent
          instead bills per result, from $0.10 an action.
        </p>
      </div>

      <div className="bg-[#FAF8F5] border-l-4 border-[#B23E13] p-5 rounded-r-lg mb-10">
        <p className="text-sm text-[#1F2937] leading-relaxed mb-0">
          <strong>We design, build and support custom AI agents, so weigh this page with that in mind.</strong> The build
          ranges are other firms&apos; published market figures, not FactoryJet prices. Vendor prices and the market
          ranges were read on the publishers&apos; own pages on 18 October 2026. Search figures are our own DataForSEO
          measurement for the US on 17 and 18 October 2026.
        </p>
      </div>

      <p>
        US searches for &quot;how much does it cost to build an ai agent&quot; rose 950% in a year, to about 90 a month
        (DataForSEO, 17 October 2026), and the weakest site on Google&apos;s first page for it had one referring domain.
        Plenty of people are asking and few sources answer with a number they can trace. Every figure below links to the
        page it came from. Gartner adds a warning worth reading first: it{' '}
        <a href={SRC.gartner40} {...ext}>predicts over 40% of agentic AI projects will be canceled by the end of 2027</a>{' '}
        over escalating costs, unclear business value or inadequate risk controls, and it estimates only about 130 of the
        thousands of agentic AI vendors are real, calling the rest &quot;agent washing&quot;.
      </p>

      <h2 id="market-ranges">How much does it cost to build an AI agent? The published market ranges</h2>
      <p>
        Two development firms publish ranges detailed enough to use. Both sell builds, so read them as a seller&apos;s
        ranges rather than a quote. They agree on the shape: one workflow is a five-figure project, and the price climbs
        with each system the agent has to reach.
      </p>
      <Table
        head={['Project type', 'Market range', 'What it covers', 'Source']}
        rows={[
          ['Workflow discovery', '$2,000 to $5,000', 'Map the workflow, tool stack and compliance needs; a roadmap', 'Layer3 Labs, 9 Sep 2026'],
          ['Single-workflow MVP', '$5,000 to $15,000', 'One automation with two or three system integrations', 'Layer3 Labs, 9 Sep 2026'],
          ['Workflow on a legacy ERP via custom API', '$15,000 to $25,000', 'Same job, but the agent writes to an ERP or practice system', 'Layer3 Labs, 9 Sep 2026'],
          ['Multi-workflow platform', '$25,000 to $75,000', 'Four to eight connected workflows plus staff training', 'Layer3 Labs, 9 Sep 2026'],
          ['AI agents for a mid-sized company', '$15,000 to $100,000', 'Discovery, development, CRM or ERP integration, testing, deployment', 'ProductCrafters, 24 Feb 2026'],
          ['Enterprise AI system', '$50,000 to $200,000+', 'Several systems, enterprise sign-on, governance, change management', 'Layer3 Labs, 9 Sep 2026'],
        ]}
      />
      <p>
        Layer3 Labs also found that quotes for the same project can differ by more than 400% between a freelancer and a
        large consultancy. Its example: a workflow quoted at $5,000 by a freelancer is regularly quoted at $20,000 by a
        large firm. The scope, not the label, is what you are comparing. If your first agent is also your first product,
        our guide to <a href="/blog/ai-mvp-development-cost-2026">AI MVP development cost in 2026</a> compares six
        published estimates.
      </p>

      <h3 id="phases">Where the money goes: the build phases</h3>
      <p>
        <a href={SRC.productcrafters} {...ext}>ProductCrafters</a> breaks a build into phases. The largest is not the AI
        model. It is plugging the agent into everything else.
      </p>
      <Table
        head={['Build phase (ProductCrafters)', 'Published range', 'Why it costs what it costs']}
        rows={[
          ['Model setup and training', '$10,000 to $40,000', 'Choosing a model, prompts, retrieval and any fine-tuning'],
          ['Integration and workflow orchestration', '$20,000 to $50,000', 'APIs, databases, CRMs and ERPs; one rate-limited API can cost weeks'],
          ['Testing and validation', '$5,000 to $15,000', 'Scoring the agent on real past cases before it touches live data'],
          ['Each extra API integration', '$3,000 to $10,000', 'Every system added is more permissions, error handling and tests'],
        ]}
      />
      <p>
        The same breakdown says data preparation adds 20 to 40% to the timeline. A catalog where one part has four names,
        or invoices that arrive as phone photos, is a data project before it is an AI project.
      </p>

      <h2 id="tiers">What pushes the cost of an AI agent up a tier</h2>
      <p>
        &quot;AI agent&quot; covers three different projects under one label, which is why the ranges are wide. Which
        tier yours lands in decides where in the range it sits.
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          <strong>Simple, single-workflow agent.</strong> One queue, one or two tools, systems with clean APIs (Shopify,
          Zendesk, HubSpot). A refund-and-reship agent on a single helpdesk is the standard example: fewest integration
          points, the simplest permission model, the cheapest build.
        </li>
        <li>
          <strong>Mid-complexity agent.</strong> Connects to one or two core business systems, and at least one tool moves
          money or changes a record, so it needs a permission gate, an audit log and idempotency (a retry cannot repeat the
          action). A quote agent that reads the CRM, checks stock and drafts an order is typical.
        </li>
        <li>
          <strong>Complex, multi-system agent.</strong> Several systems, usually including an ERP with messy or
          undocumented data (NetSuite, SAP Business One, Odoo or an on-premises database), compliance logic beyond a simple
          rule, and ongoing governance: monitoring, upkeep and re-testing whenever something changes. This tier fills the
          top of every published range.
        </li>
      </ul>
      <p>
        One requirement applies to all three: before launch you need a set of real past tickets or transactions and a way
        to score the agent&apos;s answers against them. Skipping it is how demos turn into incidents. The model choice
        rarely moves the price much. The systems, the data and the approval rules do. For a larger company that needs
        audit logs, approval steps and a security review, see our guide to{' '}
        <a href="/blog/enterprise-ai-agent-cost-2026">enterprise AI agent cost</a> in 2026. For what agencies charge to automate a workflow, see our <a href="/blog/ai-automation-agency-cost-2026">AI automation agency cost guide</a>.
      </p>

      <h2 id="rent">How much does an AI agent cost to rent instead?</h2>
      <p>
        You do not have to build at all. Helpdesk and CRM vendors rent agents by the result, which turns the cost into a
        price per ticket you can hold up against a build quote. Both prices below were read on the vendors&apos; own
        pricing pages on 18 October 2026.
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          <strong>Intercom Fin:</strong> <a href={SRC.fin} {...ext}>$0.99 per outcome</a>. An outcome is a resolution, a
          procedure handoff, a disqualification or a self-serve routing; a qualification costs $9.99. Conversations passed
          to your team without an outcome are not charged. Minimum commitments apply if you run Fin on another helpdesk.
        </li>
        <li>
          <strong>Salesforce Agentforce:</strong> <a href={SRC.agentforce} {...ext}>Flex Credits cost $500 per 100,000</a>,
          and a standard Agentforce action uses 20 credits, which is $0.10 an action. Voice actions use 30 credits. Salesforce
          also lists per-conversation and per-user options; check the page on the day you budget, because they change.
        </li>
      </ul>
      <p>
        Say a rented agent fully resolves 1,200 tickets in a month. Fin&apos;s bill is 1,200 x $0.99 = $1,188 before
        seats or minimums. Renting is faster, needs no build and is the sensible way to test whether a queue suits an
        agent at all. A custom build makes sense when the agent has to act on systems a vendor&apos;s agent cannot reach,
        or when per-result fees at your volume would pass the cost of a one-time build. Our{' '}
        <a href="/blog/agentforce-pricing-vs-custom-ai-agent-2026">Agentforce pricing vs a custom agent</a> guide works
        through that comparison for Salesforce shops.
      </p>

      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg my-8">
        <h3 className="text-lg font-bold mb-3">Get a fixed number for your agent instead of a range</h3>
        <p className="mb-4">
          Bring one queue and the systems it touches. In a 30-minute call with founder Bhavesh Barot we will tell you
          whether it needs an agent, a workflow or a process fix, then show working software on your own data before you
          sign anything. FactoryJet quotes a fixed price in writing after that call.
        </p>
        <a
          href={CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors"
        >
          Book a 30-minute scoping call
        </a>
      </div>

      <h2 id="chatbot-cost">AI chatbot cost vs AI agent cost</h2>
      <p>
        A chatbot that answers questions from your help docs costs less than an agent for one
        reason: it does not act on your systems. No integration, no permissions work, no refund tool
        to make safe. The difference is in the build.
      </p>
      <p>
        If all you need is answers on your website, <a href="/services/ai-chatbot-development">a
        chatbot</a> is the right buy. If you need the refund issued, the order changed or the
        meeting booked, you are pricing an agent, and the extra money goes into the integration
        work described above.
      </p>

      <h2 id="dividing-line">The dividing line, in one test</h2>
      <p>Ask one question about any system a vendor calls an AI agent:</p>
      <p>
        <strong>
          If the goal succeeded a different way than expected, would the software notice and change
          course?
        </strong>
      </p>
      <p>
        If yes, it is an agent. If it would run the same seven steps regardless, it is a workflow,
        and there is nothing wrong with that. Workflows are more predictable, cheaper, and easier to
        audit. Most businesses need three workflows and one agent, and are being sold four agents.
      </p>
      <p>Here is the same distinction across the four things people currently call AI agents.</p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">What it is</th>
              <th className="p-3 text-left border border-gray-700">Decides its own steps?</th>
              <th className="p-3 text-left border border-gray-700">Acts on outside systems?</th>
              <th className="p-3 text-left border border-gray-700">Recovers from failure?</th>
              <th className="p-3 text-left border border-gray-700">Honest name</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200">
                A chat window on your site with your FAQs loaded
              </td>
              <td className="p-3 border border-gray-200">No</td>
              <td className="p-3 border border-gray-200">No</td>
              <td className="p-3 border border-gray-200">No</td>
              <td className="p-3 border border-gray-200 font-semibold">Chatbot</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200">Zapier or n8n with a model in one step</td>
              <td className="p-3 border border-gray-200">No</td>
              <td className="p-3 border border-gray-200">Yes</td>
              <td className="p-3 border border-gray-200">No</td>
              <td className="p-3 border border-gray-200 font-semibold">
                Automation with an LLM step
              </td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200">
                A model that can call three tools inside one conversation
              </td>
              <td className="p-3 border border-gray-200">Sometimes</td>
              <td className="p-3 border border-gray-200">Yes</td>
              <td className="p-3 border border-gray-200">Rarely</td>
              <td className="p-3 border border-gray-200 font-semibold">Tool-using assistant</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200">
                Software given a goal, a toolset, and a stopping rule
              </td>
              <td className="p-3 border border-gray-200">Yes</td>
              <td className="p-3 border border-gray-200">Yes</td>
              <td className="p-3 border border-gray-200">Yes</td>
              <td className="p-3 border border-gray-200 font-semibold">AI agent</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        We wrote the longer comparison in{' '}
        <a href="/blog/ai-chatbots-vs-ai-agents-business">AI chatbots vs AI agents</a>. The
        terminology fight over the word "agentic" specifically is in{' '}
        <a href="/blog/what-is-agentic-ai">what is agentic AI</a>, with the head-to-head in{' '}
        <a href="/blog/agentic-ai-vs-ai-agents">agentic AI vs AI agents</a> and the separate
        generative question in{' '}
        <a href="/blog/agentic-ai-vs-generative-ai">agentic AI vs generative AI</a>. Read one of
        them if a vendor is leaning hard on the vocabulary. None of it changes the test above.
      </p>

      <h2 id="three-parts">The three parts every real agent has</h2>

      <h3 id="goal">1. A goal and a stopping rule</h3>
      <p>
        "Resolve this ticket or escalate it to a human within four exchanges." Not "be helpful."
      </p>
      <p>
        The stopping rule is the part that gets skipped and the part that causes the incidents. An
        agent without a budget, a retry limit and an escalation path will loop, spend, and
        confidently do the wrong thing at 3am. Every agent we ship has a hard ceiling on steps, a
        hard ceiling on spend, and a named human it hands to.
      </p>

      <h3 id="tools">2. Tools that change something</h3>
      <p>
        A tool is a function the agent can call: <code>look_up_order(order_id)</code>,{' '}
        <code>issue_refund(order_id, amount)</code>, <code>create_quote(line_items)</code>,{' '}
        <code>book_slot(date, time)</code>.
      </p>
      <p>
        This is where the real engineering lives, and it is why agent projects cost what they cost.
        The <code>issue_refund</code> function that
        talks to your payment processor, respects your policy, writes to your ledger, is idempotent
        so a retry does not refund twice, and logs enough to survive a chargeback dispute: that is
        the product.
      </p>

      <h3 id="check">3. A check on its own work</h3>
      <p>
        The agent proposes an action, something verifies it, and it retries or escalates on failure.
        In practice that means schema validation on every tool call, a permission gate on anything
        that moves money, and a confidence threshold below which it hands to a person.
      </p>
      <p>An agent without step 3 is a demo. Demos are why the category has a trust problem.</p>

      <h2 id="four-agents">Four agents doing real work in US businesses</h2>
      <p>
        Not hypotheticals. These are the four shapes that actually pay for themselves at small and
        mid-size scale. The wider survey of what is landing in US small businesses right now is in{' '}
        <a href="/blog/ai-agents-small-business-usa-2026">AI agents for small business</a>.
      </p>
      <p>
        <strong>Support deflection.</strong> Reads the ticket, retrieves the order and the policy,
        answers or acts (refund, reship, address change), replies in your voice, tags and closes.
        Escalates anything above a dollar threshold or below a confidence threshold. Lives inside
        Zendesk, Gorgias, Freshdesk or Help Scout. The architecture detail is in{' '}
        <a href="/blog/ai-customer-support-agent-architecture-guide">
          AI customer support agent architecture
        </a>{' '}
        and the service is{' '}
        <a href="/services/ai-customer-support-agents">AI customer support agents</a>.
      </p>
      <p>
        <strong>Quote and RFQ handling.</strong> Reads an inbound RFQ, usually a PDF or an email
        with a spreadsheet attached, extracts line items, matches them to your catalog and pricing
        rules, flags the ones it cannot match, and drafts the quote for a human to send. This is the
        highest-return agent in manufacturing and distribution and almost nobody has built it,
        because it requires knowing the customer's part numbering. See{' '}
        <a href="/services/ai-agent-development/rfq-bidding-agent">RFQ and bidding agents</a>.
      </p>
      <p>
        <strong>Lead follow-up.</strong> Watches the CRM for a new inbound, researches the company,
        drafts a first-touch email that references something real, sends, waits, follows up on a
        schedule, and books the meeting straight into the calendar. Stops the moment a human
        replies. Detail in{' '}
        <a href="/blog/how-to-build-custom-ai-sdr-b2b-sales-2026">how to build a custom AI SDR</a>;
        the service is <a href="/services/ai-sdr">AI SDR agents</a>.
      </p>
      <p>
        <strong>Back-office reconciliation.</strong> Matches purchase orders to invoices to
        receipts, flags the mismatches, and files the clean ones. Boring, unglamorous, and the one
        with the clearest payback, because you can count the hours it replaces. The plumbing under
        it is ordinary{' '}
        <a href="/services/ai-automation">workflow automation</a> with
        a judgment step in the middle.
      </p>
      <p>
        A fifth shape, voice, is the same architecture with speech in and speech out, and stricter
        latency requirements that change both the model choices and the cost. That one has its own
        page: <a href="/services/ai-receptionist">AI receptionists and voice agents</a>.
      </p>
      <p>
        Two patterns run through all of them. Each one owns a <strong>queue</strong> with a
        countable backlog, and each one <strong>hands off</strong> rather than guessing when it is
        unsure.
      </p>

      <h2 id="when-not-to">When not to build one</h2>
      <p>Straight answers, because this is the part the category never says out loud.</p>
      <p>
        <strong>Your queue is under about 200 items a month.</strong> The build will not pay back.
        Hire a part-timer or fix the process.
      </p>
      <p>
        <strong>The decision rule is fixed.</strong> If the answer is always "if X then
        Y," that is an <code>if</code> statement. It is cheaper, it is faster, it never
        hallucinates, and it does not need a reviewer.{' '}
        <a href="/blog/n8n-vs-zapier-vs-make-ai-workflow-automation-2026">
          n8n vs Zapier vs Make
        </a>{' '}
        covers that tier honestly.
      </p>
      <p>
        <strong>Your data is a mess.</strong> An agent reading a catalog where the same part has
        four names will produce four answers. Fix the catalog. That project is less exciting and
        worth more.
      </p>
      <p>
        <strong>You cannot tolerate a wrong answer and cannot afford review.</strong> Regulated
        advice, clinical decisions, anything where the error is unrecoverable. Use retrieval to help
        a human decide, rather than an agent to decide.
      </p>
      <p>
        <strong>What you actually want is a chatbot.</strong> If the job is answering questions on
        your website and nothing more, buy{' '}
        <a href="/services/ai-chatbot-development">a chatbot</a>. It costs a fraction and it will
        not disappoint you, because you have not asked it to do anything it cannot do.
      </p>

      <h2 id="proposal-test">How to tell whether an agent proposal is serious</h2>
      <p>Five questions. The answers are diagnostic.</p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          <strong>Which queue, and how many items are in it this month?</strong> No number means no
          business case.
        </li>
        <li>
          <strong>Which systems does it write to, and through which API?</strong> "We integrate with
          everything" means they have not looked at yours.
        </li>
        <li>
          <strong>What is the step limit and the spend cap per run?</strong> If there is not one,
          they have not run an agent in production.
        </li>
        <li>
          <strong>What happens when it is unsure?</strong> The answer has to be a named person and a
          route, not "it asks for clarification."
        </li>
        <li>
          <strong>Who reviews the escalation queue, and how often?</strong> If the answer is "you
          will," that belongs in the plan and in the budget.
        </li>
      </ul>
      <p>
        An honest agency will fail some of these on your project and tell you which ones. If you
        want it scoped against your actual systems,{' '}
        <a href="/services/ai-agent-development">AI agent development</a> is the page to read next.
        The first conversation should be about the queue, not the model.
      </p>
      <p>
        Two other routes, depending on where you are. If you need AI that drafts and answers rather
        than acts, our <a href="/services/ai-development">custom AI development</a> page covers scope
        and timelines. If you need help deciding what to build first, our{' '}
        <a href="/services/ai-consulting">AI consulting services</a> start with a fixed-scope
        readiness assessment.
      </p>

      <h2 id="what-else-ranks">What else ranks for &quot;how much does it cost to build an ai agent&quot;, and how this guide differs</h2>
      <p>
        These are the business sites on Google&apos;s first page for &quot;how much does it cost to build an ai agent&quot;
        in the US when we checked on 18 October 2026 (DataForSEO), with the title Google showed for each. We list them so
        you can compare; we have not reviewed their services, and the list leaves out forums and video sites.
      </p>
      <Table
        head={['Site', 'Page title shown in Google']}
        rows={[
          ['ampcome.com', 'How Much Does It Cost to Build an AI Agent? [2025 Guide]'],
          ['devcom.com', 'How Much Does It Cost to Build an AI Agent in 2026? - DevCom'],
          ['nocodefinder.com', 'AI Agent Pricing 2026: Complete Cost Guide & Calculator'],
          ['abhishekchauhan.it', 'How Much Does It Cost to Build an AI Agent? A Developer\'s ...'],
          ['raftlabs.com', 'AI Agent Development Cost in 2026: Full Breakdown'],
          ['ultimo-bots.com', 'AI Agent Cost: Plans, Usage & Your Monthly Budget'],
        ]}
      />
      <p>
        One of these titles still says 2025, and most come from firms quoting their own work. This guide uses two other
        firms&apos; published ranges side by side, links each figure to its page, and adds the per-result price of renting
        an agent so you can compare both routes on one page.
      </p>
      <p>
        The neighbouring searches tell the same story. On &quot;how much does an ai agent cost&quot; a Reddit thread ranked
        first on 18 October 2026, as it did when we first checked on 25 August, and the People Also Ask box carried
        questions such as &quot;Is AI agent free?&quot; and &quot;Are AI agents worth it?&quot;. On the definition query
        &quot;what is an ai agent&quot;, IBM, Google Cloud and AWS filled page one when we checked on 25 August. Once the question turns to price, the
        platforms step back and the answers come from development shops, which is why this page leads with sourced
        numbers.
      </p>

      <h2 id="how-factoryjet-scopes">How FactoryJet scopes an AI agent build</h2>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          <strong>A short scoping call first.</strong> We ask for the queue, a rough monthly count and the systems
          involved, and tell you if a rented agent or plain automation would do the job.
        </li>
        <li>
          <strong>Working software on your own data before you sign.</strong> You see the agent handle real examples from
          your queue before any contract.
        </li>
        <li>
          <strong>A fixed price in writing.</strong> One number per phase after scoping, not an hourly estimate.
        </li>
        <li>
          <strong>You own the code from day one.</strong> The AI and hosting accounts are in your name, billed by the
          providers at cost.
        </li>
        <li>
          <strong>Support only if you want it.</strong> No monthly minimum. Upkeep is described on our{' '}
          <a href="/services/ai-agent-monitoring">AI agent monitoring and support</a> page.
        </li>
      </ul>
      <p>
        If your project is larger than one queue, our guide to{' '}
        <a href="/blog/enterprise-ai-agents-mid-sized-companies-buy-or-build-2026">enterprise AI agents for mid-sized
        companies</a> covers what to buy and what to build, and{' '}
        <a href="/blog/ai-proof-of-concept-to-production-2026">AI proof of concept to production</a> covers how to scope
        the first paid step.
      </p>

      <h2 id="sources">Sources</h2>
      <ul className="list-disc pl-6 space-y-2 mb-6 text-sm">
        <li>
          <a href={SRC.layer3} {...ext}>Layer3 Labs, AI Consulting Rates and Pricing in 2026</a>, updated 9 September 2026,
          read 18 October 2026: project ranges, the 400% quote spread and hourly rates.
        </li>
        <li>
          <a href={SRC.productcrafters} {...ext}>ProductCrafters, AI Agent Development Cost: $5K to $180K+</a>, dated 24
          February 2026, read 18 October 2026: build phases, per-integration range and the mid-sized company range.
        </li>
        <li>
          <a href={SRC.fin} {...ext}>Intercom, Fin AI Agent pricing</a>, read 18 October 2026: $0.99 per outcome, $9.99 per
          qualification.
        </li>
        <li>
          <a href={SRC.agentforce} {...ext}>Salesforce, Agentforce pricing</a>, read 18 October 2026: $500 per 100,000
          Flex Credits, 20 credits per standard action, 30 per voice action.
        </li>
        <li>
          <a href={SRC.gartner40} {...ext}>Gartner, 25 June 2025</a>: over 40% of agentic AI projects predicted to be
          canceled by the end of 2027; about 130 real agentic AI vendors.
        </li>
        <li>Search volumes and Google page one: our own DataForSEO measurement, US, 17 and 18 October 2026.</li>
      </ul>

      <div className="bg-[#FAF8F5] border-2 border-[#E5DFD7] p-6 sm:p-8 rounded-xl my-10 shadow-sm">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-2">
          AI agent scoping call
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] mb-3">
          Price your agent against your real queue
        </h3>
        <p className="text-[#4B5563] text-base leading-relaxed mb-6">
          Bring one queue and a rough count of what is in it. In a 30-minute call with founder
          Bhavesh Barot we will tell you straight whether it needs an agent, a workflow or a process
          fix, and what a build would involve. You get a fixed price in writing after the call.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors shadow-sm"
          >
            Book a 30-Min Scoping Call
          </a>
          <a
            href="/services/ai-agent-development"
            className="inline-flex items-center gap-2 bg-white text-[#1F2937] border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Explore AI Agent Development
          </a>
        </div>
      </div>
    </article>
  ),
};

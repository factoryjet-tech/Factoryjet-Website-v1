import React from 'react';
import type { BlogPost } from '../data.types';

const faqs = [
  {
    q: 'How much does an AI agent cost?',
    a: 'It depends on whether you rent one or have one built. Renting one: Intercom charges $0.99 per Fin outcome and Salesforce Agentforce works out to $0.10 per action. Building one: development firm ProductCrafters puts builds at about $5,000 to $180,000+ in its 2026 breakdown, and integration is the biggest part.',
  },
  {
    q: 'Does it cost money to have an AI agent?',
    a: 'Yes. You either rent one from a vendor, usually billed per result, or you pay once to have one built and connected to your systems. A built agent also needs a person who reviews its escalations and keeps it working when your tools or policies change.',
  },
  {
    q: 'How much does an AI agent cost to run per month?',
    a: 'A rented agent bills per result on the vendor\'s price list: Intercom charges $0.99 per Fin outcome, and Salesforce Agentforce works out to $0.10 per action. For an agent built for you there is no single monthly figure, because it depends on the work the agent handles and the systems it connects to. FactoryJet quotes the build and the ongoing support as fixed prices in writing after a short scoping call, and keeps managing the servers, AI, APIs and maintenance so your team does not have to.',
  },
  {
    q: 'How much does it cost to build an AI agent?',
    a: 'Development firm ProductCrafters puts builds at about $5,000 to more than $180,000 in its 2026 breakdown. The largest build phase is integrating the agent with your systems, at $20,000 to $50,000, not setting up the AI model. Anything touching an ERP or messy data costs more and is hard to estimate before someone has looked at the data. A narrow pilot on one queue, two to four weeks long, is the sane way to find out.',
  },
  {
    q: 'How much does a ChatGPT agent cost?',
    a: 'OpenAI lists agent features as part of its ChatGPT subscription plans rather than selling agents one at a time, and which plan includes what changes often, so check OpenAI\'s pricing page before you budget. For a business, the bigger point is that a ChatGPT subscription does not connect an agent to your helpdesk, store or CRM with your permissions. For that you need an agent built and connected to those systems.',
  },
  {
    q: 'Can I build my own AI agent for free?',
    a: 'You can prototype one for very little. Frameworks like LangChain are open source. What is not free is making it safe to act on real systems: permissions, logging, retries, testing and monitoring. That is where the real cost starts.',
  },
  {
    q: 'How much does an AI chatbot cost?',
    a: 'Less than an agent, because a chatbot only answers questions and does not act on your systems, so there is no integration or permissions work to pay for. Some off-the-shelf support AI is priced per result: Intercom charges $0.99 per Fin outcome. If you need it to issue refunds, change orders or book meetings, you are pricing an agent, not a chatbot.',
  },
  {
    q: 'How much does an AI agent cost per hour?',
    a: 'Agents are not billed by the hour. A rented agent bills per result: Intercom charges $0.99 per Fin outcome, and Salesforce Agentforce works out to $0.10 per action. An agent built for you is priced as a project, and development firm ProductCrafters puts builds at about $5,000 to $180,000+ in its 2026 breakdown.',
  },
  {
    q: 'Is AI agent free?',
    a: 'No. Frameworks like LangChain are open source and free to download, and several platforms run a free tier. What is not free is the integration work, the permissions, the logging, the monitoring, and the person who reviews escalations.',
  },
  {
    q: 'Can a small business afford an AI agent?',
    a: 'Yes, if it has a real queue. The test is volume, not company size: roughly 200 or more repetitive items a month with a decision rule a person could write down. Below that, a workflow tool or a part-time person is the cheaper answer, and a decent agency will tell you so.',
  },
  {
    q: 'Do you need coding to build AI agents?',
    a: 'Not for a simple one. No-code tools and assistant builders can set up an agent that answers questions or runs a short workflow. To let an agent act safely on your own systems, such as issuing refunds or updating orders, someone has to write and test the tools it calls, handle permissions and log every action. That part is software engineering, and it is most of the cost.',
  },
  {
    q: 'What is an AI agent in simple terms?',
    a: 'Software you give a goal to rather than a script. It decides its own steps, uses tools to act on real systems like your helpdesk, your store or your CRM, checks whether it worked, and keeps going until the job is done or it hits a limit you set. A chatbot replies. An agent finishes a task.',
  },
  {
    q: 'What is the difference between an AI agent and a chatbot?',
    a: 'A chatbot produces text. An agent produces a changed state in a system: a refund issued, a meeting booked, a quote drafted, a ticket closed. If the software cannot write to anything outside the conversation, it is a chatbot no matter what it is marketed as.',
  },
  {
    q: 'Is an AI agent the same as a bot?',
    a: '"Bot" covers everything from a scripted chat widget to a scraper. An AI agent is a narrower thing: it gets a goal instead of a script, chooses its own sequence, and can act on outside systems. Most things called bots follow a fixed path, and when the path is fixed, "bot" is the more honest word.',
  },
  {
    q: 'Is ChatGPT an AI agent?',
    a: 'The base chat product is an assistant. When it browses, runs code, or calls tools to finish a multi-step task, it is behaving agentically. For a business the distinction that matters is whether it is connected to your systems with your permissions. A general chat product is not, and cannot be held to your refund policy.',
  },
  {
    q: 'What are the 5 types of agent in AI?',
    a: 'That list comes from the standard textbook, Russell and Norvig\'s "Artificial Intelligence: A Modern Approach": simple reflex, model-based reflex, goal-based, utility-based, and learning agents. It is a useful academic taxonomy and close to useless for a buying decision. What you need to know is which queue the thing works on and what it is allowed to touch.',
  },
  {
    q: 'What are the 7 types of AI agents?',
    a: 'The count depends entirely on who wrote the list. The textbook taxonomy has five. Vendor blog posts reach seven or more by adding hierarchical agents and multi-agent systems, which are architectures rather than agent types. Treat any numbered list of agent types as content marketing, not a standard.',
  },
  {
    q: 'What are the top 3 AI agents?',
    a: 'There is no leaderboard, because there is no single product category. The question usually means one of two things: which model should the agent run on, or which off-the-shelf agent product should I buy. Those have different answers and both depend on the job. Anyone who names three without asking what you do is guessing.',
  },
  {
    q: 'What is agentic AI, and is it different from an AI agent?',
    a: '"Agentic AI" is the property. "AI agent" is the thing that has it. In practice the terms get used interchangeably and most of the difference is vendor positioning. We take the terminology apart in a separate post. For a buying decision the useful question is what it can do and what it costs, not what it is called.',
  },
  {
    q: 'Can I hire an AI agent?',
    a: 'You can buy one as a product, have one built, or rent one as a per-seat or per-resolution subscription from a helpdesk vendor. What you cannot do is hire one the way you hire a person, because somebody still has to connect it to your systems, decide what it may touch, and own the escalations. That somebody is the actual hire.',
  },
  {
    q: 'How do I get my own personal AI agent?',
    a: 'For personal use, the assistant products from the major model vendors already browse, run code and call tools, and that is as close as consumer software currently gets. For a business, "personal" is the wrong frame. An agent is only useful once it is connected to a shared system with defined permissions, which is a project rather than a download.',
  },
  {
    q: 'What can AI agents actually do for a business today?',
    a: 'Four shapes work reliably at small and mid-size scale: support ticket deflection, quote and RFQ processing, outbound lead follow-up, and back-office reconciliation such as matching purchase orders to invoices. All four share one property, a countable backlog and a decision rule.',
  },
  {
    q: 'Do I need an AI agent or just automation?',
    a: 'If a human can write down every branch the software should take, build the automation. It is cheaper, faster, auditable, and it cannot hallucinate. Reach for an agent when the input varies enough that enumerating the branches is the hard part: messy inbound email, unstructured PDFs, free-text tickets.',
  },
  {
    q: 'What tools do AI agents connect to?',
    a: 'Whatever has an API and permission to be written to. Common in US small businesses: Shopify, Zendesk, Gorgias, HubSpot, Salesforce, Slack, Google Workspace, QuickBooks, NetSuite and Stripe. The integration is the expensive part of the project.',
  },
  {
    q: 'Are AI agents safe to let act on their own?',
    a: 'Only with limits: a hard step cap, a spend cap, schema validation on every action, a permission gate on anything that moves money, and a named human who owns the escalation queue. Agents with all five are safe in production. Agents with none of them are the reason people distrust the category.',
  },
  {
    q: 'What happens when an AI agent gets it wrong?',
    a: 'In a well-built system it detects the failure, retries once, and escalates to a person with the full context attached. In a badly built one it retries forever, burns budget, and closes the ticket anyway. Which one you have is decided at build time, not at incident time.',
  },
  {
    q: 'Do AI agents replace jobs?',
    a: 'They replace queues, and queues are usually the part of a job nobody wanted. In the deployments we run, the person who used to clear the ticket backlog ends up reviewing escalations and handling the hard cases that genuinely needed a human. Headcount reduction is a business decision, not a technical outcome.',
  },
  {
    q: 'Which model should an AI agent use?',
    a: 'Match the model to the decision. Routing, classification and extraction run fine on a small fast model. Anything requiring judgment across messy context wants a frontier model. Most production agents use two or three models at different steps.',
  },
  {
    q: 'What is an AI voice agent?',
    a: 'The same architecture with speech in and speech out. It answers or places calls, understands the caller, acts on your systems, and hands to a human when needed. It has stricter latency requirements than a text agent, which changes both the model choices and the cost.',
  },
  {
    q: 'How long does it take to build an AI agent?',
    a: 'A narrow pilot on one queue takes two to four weeks. A production agent with permissions, logging, escalation and monitoring typically takes six to twelve weeks, and most of that time goes on integration and edge cases, not on prompting. Anyone promising a production agent in a week is describing a demo.',
  },
  {
    q: 'Can I build an AI agent myself?',
    a: 'A competent developer can build a working single-tool agent in a week using an SDK. The gap between that and production is permissions, idempotency, retries, logging, evaluation and monitoring, which is most of the work. Prototype internally, then decide honestly whether you want to own that surface.',
  },
  {
    q: 'What is the difference between an AI agent and RPA?',
    a: 'RPA scripts a fixed path through user interfaces and breaks when a screen changes. An agent works through APIs and adapts when the situation differs from expectation. RPA is more predictable on stable systems. Agents handle variation. Plenty of real deployments use both.',
  },
  {
    q: 'How do I measure whether an AI agent is working?',
    a: 'Pick the numbers before you build: percentage of the queue resolved without a human, average handling time, escalation rate, and cost per resolved item. Compare them against the same four numbers from the month before launch. If nobody measured the baseline, the agent will be judged on vibes.',
  },
  {
    q: 'What should I do first if I want an AI agent?',
    a: 'Count one queue for two weeks. How many items, how long each takes, how many follow the same rule. That single spreadsheet decides whether you need an agent, a workflow, or a process fix, and it is worth more than any vendor demo you will sit through.',
  },
  {
    q: 'What determines which cost tier my AI agent falls into?',
    a: 'Four things push a build from simple to complex: how many systems it has to connect to, how much compliance or safety logic those systems require, how messy or large the data is, and how much ongoing monitoring the result needs. A single-workflow agent on one clean API, like a helpdesk, sits at the simple end. An agent touching an ERP with compliance requirements and an ongoing governance commitment sits at the complex end. See the build-cost tiers earlier in this article for the full breakdown, or "How much does it cost to build an AI agent?" above for the published dollar range.',
  },
];

export const post: BlogPost = {
  id: '427',
  slug: 'what-is-an-ai-agent-cost-2026',
  title: 'How Much Does AI Agent Development Cost in 2026? Rent One or Build One',
  excerpt:
    'You can get an AI agent two ways: rent one from a vendor, or have one built. Here is what each route costs, with the source named: vendor list prices for renting per result, and a published range for a build with its phase breakdown. Plus the one test that tells you whether you are buying an agent or a chatbot.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Sep 19, 2026',
  readTime: '17 min read',
  imageUrl: '/blog-images/what-is-an-ai-agent-cost-2026.webp',
  imageAlt:
    'A desk with a laptop showing a support ticket queue beside a printed integration diagram and a calculator, representing the cost of renting or building an AI agent',
  meta: {
    title: 'AI Agent Development Cost in 2026: Rent or Build',
    description:
      'AI agent development cost in 2026, with sources: rented agents at $0.99 per outcome, builds from $5,000 to $180,000+, and how to judge a proposal.',
  },
  keyTakeaways: [
    'You can get an AI agent two ways: rent an off-the-shelf one from a vendor, or have one built and connected to your systems.',
    'Renting is one route. Intercom charges $0.99 per Fin outcome, so 1,200 resolved tickets a month costs $1,188 with no build. Salesforce Agentforce works out to $0.10 per action.',
    'Building is the other route. Development firm ProductCrafters puts builds at about $5,000 to $180,000+, and integration with your systems is the biggest phase in its breakdown, ahead of model setup.',
    'Gartner predicts over 40% of agentic AI projects will be canceled by the end of 2027 over escalating costs, unclear business value or weak risk controls. A two-to-four-week pilot on one queue is the cheap way to avoid being one of them.',
    'An AI agent takes a goal, not a script. If a human can write out every branch it can take, build automation instead: it is cheaper, faster and easier to audit.',
    'If you cannot name the queue and count what is in it today, do not build an agent. Build the report that counts it first.',
  ],
  faqs,
  content: (
    <article>
      <div
        style={{
          background: 'linear-gradient(135deg, #fff7f0 0%, #fff3e8 100%)',
          border: '1.5px solid #FF6B0030',
          borderRadius: '12px',
          padding: '24px 28px',
          marginBottom: '40px',
        }}
      >
        <p
          style={{
            fontWeight: 700,
            color: '#B23E13',
            marginBottom: '8px',
            fontSize: '13px',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          }}
        >
          Quick Answer
        </p>
        <p style={{ margin: '0 0 12px', fontSize: '17px', lineHeight: '1.65', color: '#1a1a1a' }}>
          You can get an AI agent two ways, and each one is priced differently.
        </p>
        <p style={{ margin: '0 0 12px', fontSize: '17px', lineHeight: '1.65', color: '#1a1a1a' }}>
          <strong>Renting one:</strong> off-the-shelf agents bill per result. Intercom charges $0.99
          per Fin outcome, and Salesforce Agentforce works out to $0.10 per action.
        </p>
        <p style={{ margin: '0 0 12px', fontSize: '17px', lineHeight: '1.65', color: '#1a1a1a' }}>
          <strong>Building one:</strong> a build is priced as a project, because the agent has to be
          wired into your helpdesk, store or CRM with safe permissions. A 2026 breakdown from
          development firm ProductCrafters puts builds at about $5,000 to more than $180,000.
        </p>
        <p style={{ margin: 0, fontSize: '17px', lineHeight: '1.65', color: '#1a1a1a' }}>
          And what you are paying for: an AI agent is software given a goal. It decides its own
          steps, uses tools to act on real systems, and keeps going until the job is done or it hits
          a limit you set. A chatbot answers a message and stops.
        </p>
      </div>

      <p>
        Every vendor in America now sells AI agents. Gartner doubts most of them: it calls the
        rebranding of chatbots, assistants and automation tools as agents "agent washing," and{' '}
        <a
          href="https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027"
          target="_blank"
          rel="noopener noreferrer"
        >
          estimates only about 130 of the thousands of agentic AI vendors are real
        </a>
        . Below is what a real agent costs to rent and to have built, with the source of each
        price named. Then the test that separates an agent from a chatbot, four agents that pay for
        themselves at small-business scale, and when not to build one at all.
      </p>

      <h2 id="cost">How much does an AI agent cost? Rent one or have one built</h2>
      <p>
        Two routes, priced in different ways. A rented agent bills per result on a vendor's price
        list. A built agent is priced as a project, and the published range is wide.
      </p>

      <h3 id="rent">1. Renting one: pay per result instead of building</h3>
      <p>
        You do not have to build at all. Helpdesk and CRM vendors now rent agents by the result,
        which turns the cost into a price per ticket you can hold up against a build quote:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          <strong>Intercom Fin:</strong>{' '}
          <a href="https://fin.ai/pricing" target="_blank" rel="noopener noreferrer">
            $0.99 per outcome
          </a>
          . An outcome is a resolution, a handoff through a procedure you set up, or a disqualified
          lead, and a qualified lead costs $9.99. Conversations passed to your team without an
          outcome are not charged. Intercom seat prices, or minimum commitments if you run Fin on
          another helpdesk, come on top.
        </li>
        <li>
          <strong>Salesforce Agentforce:</strong>{' '}
          <a
            href="https://www.salesforce.com/agentforce/pricing/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Flex Credits cost $500 per 100,000
          </a>
          , and a standard Agentforce action uses 20 credits, which is $0.10 per action. Voice
          actions use 30 credits. Salesforce also lists a $2 per conversation option.
        </li>
      </ul>
      <p>
        To see what that adds up to, say the agent fully resolves 1,200 tickets in a month. Fin's
        bill is 1,200 × $0.99 = <strong>$1,188 a month</strong>, before seat prices or minimum
        commitments.
      </p>
      <p>
        Renting is faster, needs no build, and is the sensible way to test whether a queue suits an
        agent at all. Having one built makes sense when the agent has to act on systems a vendor's
        agent cannot reach.
      </p>

      <h3 id="build">2. Building it: AI agent development cost</h3>
      <p>
        This is the number that decides whether the project makes sense, and nobody can give it to
        you honestly without looking at your systems first.
      </p>
      <p>
        Development firms do publish ranges.{' '}
        <a
          href="https://productcrafters.io/blog/how-much-does-it-cost-to-build-an-ai-agent/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ProductCrafters
        </a>
        , which ranked second on Google in the US for "AI agent development cost" when we checked on
        17 Sep 2026, puts builds at $5,000 to $180,000+. The largest build phase in its breakdown is
        integration and workflow orchestration, at $20,000 to $50,000, ahead of model setup at
        $10,000 to $40,000. Treat those as a seller's ranges rather than a quote, but notice what
        they say: connecting the agent to your systems is a bigger phase than setting up the model.
      </p>
      <p>
        <strong>Three tiers, in practice.</strong> The ProductCrafters range above is wide because
        "AI agent" covers three different projects under one label, and which tier yours lands in
        decides where in that range it sits.
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          <strong>Simple, single-workflow agent.</strong> One queue, one or two tools, systems with
          clean APIs (Shopify, Zendesk, HubSpot). A refund-and-reship agent on a single helpdesk is
          the standard example. Fewest integration points, the simplest permission model, and the
          cheapest to build.
        </li>
        <li>
          <strong>Mid-complexity agent.</strong> Connects to one or two core business systems
          instead of one, and at least one tool moves money or changes a record, so it needs a
          permission gate, an audit log, and idempotency (a retry cannot repeat the action) on top
          of the model work. A quote or RFQ agent that reads a CRM, checks inventory and drafts an
          order is a typical example.
        </li>
        <li>
          <strong>Complex, multi-system agent.</strong> Several systems, usually including one
          legacy or ERP integration with messy or undocumented data (NetSuite, SAP, an on-prem
          system, or a database somebody's cousin designed in 2009), compliance or safety logic
          beyond a simple rule, and ongoing governance: continuous monitoring, a maintenance
          commitment, and re-testing against real data every time something changes, not just
          before launch. This is the tier that fills out the top of the ProductCrafters range.
        </li>
      </ul>
      <p>
        One requirement applies to all three tiers: before launch you need a set of real past
        tickets or transactions and a way to score the agent's answers against them. Skipping this
        step is how demos turn into incidents, regardless of tier.
      </p>
      <p>
        What moves a project up a tier is never the model. It is how many systems it has to touch,
        how much compliance or safety logic those systems require, how messy the data is, and how
        much ongoing monitoring the result needs.
      </p>
      <p>
        What we recommend first, every time: <strong>a pilot on one narrow queue, two to four weeks
        long, scoped to prove or kill the idea.</strong>{' '}
        <a
          href="https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gartner predicts
        </a>{' '}
        over 40% of agentic AI projects will be canceled by the end of 2027 due to escalating costs,
        unclear business value or inadequate risk controls. A pilot is the cheap way to find out
        which side of that prediction your project sits on.
      </p>

      <p>
        A built agent also needs upkeep after launch. Someone has to review its escalations, and it
        has to be updated when a vendor changes an API or your policy changes. An agent with nobody
        watching the escalation queue is an agent that quietly stops working and nobody notices for
        six weeks. What that upkeep includes is on our{' '}
        <a href="/services/ai-agent-monitoring">AI agent monitoring and support</a> page.
      </p>
      <p>
        The full comparison of doing it yourself against hiring it out, including what a competent
        internal developer can realistically ship, is in{' '}
        <a href="/blog/how-to-build-an-ai-agent-uk-2026">
          how to build an AI agent, step by step
        </a>
        .
      </p>

      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-8">
        <h3 className="text-lg font-bold mb-3">Want a real number for your agent?</h3>
        <p className="mb-4">
          The build figure is a range because the systems are what cost money. We scope AI agents
          against your actual queue and the systems it has to touch, and put the build and running
          costs in writing before any work starts.
        </p>
        <a
          href="/services/ai-agent-development"
          className="inline-block bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors"
        >
          See AI agent development &rarr;
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
        <a href="/services/ai-workflow-automation">workflow automation</a> with
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

      <h2 id="who-google-quotes">Who Google quotes for this today</h2>
      <p>
        Pulled live from Google US, logged out, on 25 Aug 2026. The interesting finding is not the
        ranking list. It is that the definitional query and the commercial query are two completely
        different competitive situations, and almost nobody writing about AI agents seems to have
        noticed.
      </p>
      <p>
        Search "what is an ai agent" and an AI Overview fires. It cites six sources, in this order:
        YouTube, IBM, Google Cloud, AWS, a Substack newsletter called The AI Engineer, and
        Snowflake. Organic underneath is a similar cast:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Reddit, a thread titled "What even is an AI agent?"</li>
        <li>IBM.</li>
        <li>McKinsey.</li>
        <li>Google Cloud.</li>
        <li>LangChain.</li>
        <li>AWS.</li>
        <li>The AI Engineer, on Substack.</li>
        <li>Salesforce.</li>
      </ul>
      <p>
        Look at who that is: a model and infrastructure vendor, three cloud platforms, a data
        warehouse, a consultancy, an orchestration framework, and a CRM. Every one of them sells
        something an agent runs on, is built with, or is bought through. The definition on page one
        is therefore the definition that makes the seller look necessary. That is not a conspiracy,
        it is just what happens when a dictionary term is also a product category. Reddit sits at
        number one because it is the only result written by somebody with nothing to sell.
      </p>
      <p>
        Now search "how much does an ai agent cost" the same day, in the same logged-out browser.
        Completely different world. The AI Overview cites{' '}
        <strong>seventeen sources</strong> and the first is Reddit, followed by bakedwith.com,
        softteco.com, thecrunch.io, braincuber.com, a Medium engineering publication, appinventiv,
        savibm, powercodegroup, aissist.io and several more in the same vein. The closest thing to a
        recognized name anywhere in that list is CloudZero, a cloud cost-monitoring company.
        Organic: Reddit again at number one ("Been running my businesses on AI agents for months"),
        then softteco, Retool with a piece arguing for hourly pricing, bakedwith, an AWS builder
        guide, YouTube, Medium, and azilen.
      </p>
      <p>
        IBM is gone. McKinsey is gone. Google Cloud, AWS as a marketing site, Salesforce, all gone.
        The moment the question turns into "what will this cost me," the platforms stop answering
        and the field is left to one Reddit thread and a long tail of development shops with no
        consistent authority between them. Seventeen citations in a single AI Overview is Google
        saying, in public, that it could not find a source it trusted enough to lean on.
      </p>
      <p>
        The definition is over-served by companies selling infrastructure, and the price is
        under-served by everybody. That gap is the reason this article exists, so this page leads
        with the prices and where each one comes from. When we checked the cost query again on 17
        Sep 2026, Reddit still ranked first, followed by SoftTeco, Retool and TheCrunch.
      </p>
      <p>
        One more detail from the same pull, because it tells you who is actually searching. The
        People Also Ask box under "what is an ai agent" carries "Do AI agents get paid?", "How to
        make $1000 a day using AI?" and "How much can I make selling AI agents?" Under the cost
        query it carries "Can you really make money with AI agents?" A meaningful share of the
        traffic on this term is not businesses trying to buy an agent. It is people trying to sell
        one. Worth remembering the next time a cold email arrives from an agency that discovered the
        category last month.
      </p>

      <h2 id="when-not-to">When not to build one</h2>
      <p>Straight answers, because this is the part the category never says out loud.</p>
      <p>
        <strong>Your queue is under about 200 items a month.</strong> The build will not pay back.
        Hire a part-timer or fix the process.
      </p>
      <p>
        <strong>The decision rule is genuinely fixed.</strong> If the answer is always "if X then
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
          fix, and what building and running the agent would involve.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://calendly.com/bhavesh-factoryjet/30min"
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

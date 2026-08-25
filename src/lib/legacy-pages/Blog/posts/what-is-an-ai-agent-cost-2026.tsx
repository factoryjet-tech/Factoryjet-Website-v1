import React from 'react';
import type { BlogPost } from '../data.types';

const faqs = [
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
    q: 'How much does an AI agent cost to run per month?',
    a: 'The model calls are usually the small number. On the worked example in this article, a support agent handling 2,000 tickets a month lands roughly between $22 and $112 a month in model calls, depending on the model and on whether prompt caching is used. Those are arithmetic on published rates and stated assumptions, not a quote. The build is the real spend.',
  },
  {
    q: 'Is AI agent free?',
    a: 'No, though the pieces look cheap in isolation. Model calls are billed by the token, frameworks like LangChain are open source and free to download, and several platforms run a free tier. What is not free is the integration work, the permissions, the logging, the monitoring, and the person who reviews escalations. Almost all of the cost sits there.',
  },
  {
    q: 'How much does it cost to run an AI agent on 24/7?',
    a: 'An agent does not bill for idle time the way a server does. It costs money when it does a unit of work, so the monthly number is driven by volume, not by hours online. The same support agent handling 2,000 tickets around the clock costs the same as one handling 2,000 tickets in business hours. Hosting and monitoring sit on top as a flat cost, and a small one.',
  },
  {
    q: 'How much does it cost to build an AI agent?',
    a: 'For one queue on systems with clean modern APIs, low to mid five figures is the band we see quoted in the US market. Anything touching an ERP or messy data costs more and is genuinely hard to estimate before somebody has looked at the data. A deliberately narrow pilot of two to four weeks, in the four figures, is the sane way to find out.',
  },
  {
    q: 'Can a small business afford an AI agent?',
    a: 'Yes, if it has a real queue. The test is volume, not company size: roughly 200 or more repetitive items a month with a decision rule a person could write down. Below that, a workflow tool or a part-time person is the cheaper answer, and a decent agency will tell you so.',
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
    a: 'Whatever has an API and permission to be written to. Common in US small businesses: Shopify, Zendesk, Gorgias, HubSpot, Salesforce, Slack, Google Workspace, QuickBooks, NetSuite and Stripe. The integration is the expensive part of the project. The model is the cheap part.',
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
    a: 'Match the model to the decision. Routing, classification and extraction run fine on a small fast model. Anything requiring judgment across messy context wants a frontier model. Most production agents use two or three models at different steps, which is also how the cost stays low.',
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
];

export const post: BlogPost = {
  id: '427',
  slug: 'what-is-an-ai-agent-cost-2026',
  title: 'What an AI Agent Actually Is, and What One Costs to Run',
  excerpt:
    'Every vendor in America now sells AI agents. Most of them are selling a chatbot with a longer sales cycle. Here is the actual dividing line, four agents doing real work, and what the monthly bill looks like when you do the token math instead of guessing.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Aug 25, 2026',
  readTime: '14 min read',
  imageUrl: '/blog-images/what-is-an-ai-agent-cost-2026.webp',
  imageAlt:
    'A desk with a laptop showing a support ticket queue beside a printed integration diagram and a calculator, representing the real cost of running an AI agent',
  meta: {
    title: 'What Is an AI Agent? Definition, Examples and Cost (2026)',
    description:
      'What an AI agent is, how it differs from a chatbot, the four that pay for themselves, and what one really costs to build and run in 2026.',
  },
  keyTakeaways: [
    'An AI agent takes a goal, not a script. If a human wrote out every branch it can take, you have automation with a language model bolted on, which is often the correct thing to build and cheaper.',
    'Three things make it an agent: it plans its own steps, it uses tools that change something outside the chat, and it checks its own work and retries.',
    'The model bill is almost never the expensive part. On published token rates, a support agent handling 2,000 tickets a month lands in the tens of dollars. The build runs to five figures, because the cost is the integrations.',
    'Agents earn their keep on queues, not conversations: tickets, quotes, RFQs, invoices, lead follow-up. Anything with a backlog and a decision rule.',
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
            color: '#FF6B00',
            marginBottom: '8px',
            fontSize: '13px',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          }}
        >
          Quick Answer
        </p>
        <p style={{ margin: 0, fontSize: '17px', lineHeight: '1.65', color: '#1a1a1a' }}>
          An AI agent is software that is given a goal, decides its own sequence of steps, uses
          tools to act on real systems, and keeps going until the job is done or it hits a limit you
          set. A chatbot answers a message and stops. An agent reads the ticket, looks up the order
          in Shopify, checks the policy, issues the refund in the payment system, replies to the
          customer, and closes the ticket. The difference is not intelligence. It is whether the
          software is allowed to do things, and whether it chooses the order itself.
        </p>
      </div>

      <p>
        Every vendor in America now sells AI agents. Most of them are selling a chatbot with a
        longer sales cycle. Below is the dividing line, four agents that actually pay for themselves
        at small-business scale, and what the monthly bill looks like when you do the token math
        instead of guessing.
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
        <strong>factoryjet.com appears in none of it, on either query.</strong> We are writing this
        from outside the results, not from inside them. That gap is the entire reason the article
        exists: the definition is over-served by companies selling infrastructure, and the price is
        under-served by everybody. So the second half of this page does the arithmetic.
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
        The model is a commodity you rent by the token. The <code>issue_refund</code> function that
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
        <a href="/services/ai-agent-development/ai-customer-support">AI customer support agents</a>.
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
        the service is <a href="/services/ai-agent-development/ai-sales-agent">AI sales agents</a>.
      </p>
      <p>
        <strong>Back-office reconciliation.</strong> Matches purchase orders to invoices to
        receipts, flags the mismatches, and files the clean ones. Boring, unglamorous, and the one
        with the clearest payback, because you can count the hours it replaces. The plumbing under
        it is ordinary{' '}
        <a href="/services/ai-agent-development/ai-workflow-automation">workflow automation</a> with
        a judgment step in the middle.
      </p>
      <p>
        A fifth shape, voice, is the same architecture with speech in and speech out, and stricter
        latency requirements that change both the model choices and the cost. That one has its own
        page: <a href="/services/ai-agent-development/ai-voice-agent">AI voice agents</a>.
      </p>
      <p>
        Two patterns run through all of them. Each one owns a <strong>queue</strong> with a
        countable backlog, and each one <strong>hands off</strong> rather than guessing when it is
        unsure.
      </p>

      <h2 id="cost">What one actually costs</h2>
      <p>
        Three separate numbers, and vendors love to quote you whichever one flatters them.
      </p>

      <h3 id="model-bill">1. The model bill, smaller than you expect</h3>
      <p>
        Worked example: a support agent handling <strong>2,000 tickets a month</strong>. Across
        roughly two model calls per ticket it reads about 16,000 input tokens (system prompt, your
        policy docs, product data, the ticket thread) and writes about 1,200 output tokens.
      </p>
      <p>
        The lever that matters is <strong>prompt caching</strong>. Your system prompt and policy
        documents are identical on every ticket, so they can be cached and re-read at roughly a
        tenth of the input price. Say 12,000 of those 16,000 input tokens are cached and 4,000 are
        fresh.
      </p>
      <p>
        Run that against Anthropic's published list prices as of August 2026. Model prices move, so
        check the current published rates before you build a budget on them.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Model</th>
              <th className="p-3 text-left border border-gray-700">
                Input / output per 1M tokens
              </th>
              <th className="p-3 text-left border border-gray-700">Cost per ticket</th>
              <th className="p-3 text-left border border-gray-700">2,000 tickets a month</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200">Claude Haiku 4.5</td>
              <td className="p-3 border border-gray-200">$1 / $5</td>
              <td className="p-3 border border-gray-200">about $0.011</td>
              <td className="p-3 border border-gray-200 font-semibold">about $22</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200">Claude Sonnet 5</td>
              <td className="p-3 border border-gray-200">$2 / $10</td>
              <td className="p-3 border border-gray-200">about $0.022</td>
              <td className="p-3 border border-gray-200 font-semibold">about $45</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200">Claude Opus 5</td>
              <td className="p-3 border border-gray-200">$5 / $25</td>
              <td className="p-3 border border-gray-200">about $0.056</td>
              <td className="p-3 border border-gray-200 font-semibold">about $112</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        The Sonnet 5 row worked out in full, so you can check it: 12,000 cached input tokens at
        roughly $0.20 per million is $0.0024, plus 4,000 fresh input tokens at $2 per million is
        $0.008, plus 1,200 output tokens at $10 per million is $0.012. That is $0.0224 a ticket, and
        $44.80 across 2,000 tickets. Those totals are arithmetic on the assumptions above, not a
        measurement of your business. Change the token counts and the answer changes.
      </p>
      <p>
        Read the table again anyway, because it reframes the whole decision.{' '}
        <strong>The model bill in this example is tens of dollars a month.</strong> Anyone quoting
        you a five-figure monthly fee "because of AI compute costs" is not describing this workload.
        Ask what the number is per unit of work, and watch what happens.
      </p>
      <p>
        Two things do move it. Skipping prompt caching roughly triples the input cost, and agents
        that loop pay for a full round trip on every retry. This is the second reason for a hard
        step limit. The first reason is safety. The second is your invoice.
      </p>

      <h3 id="build">2. The build, where the money actually goes</h3>
      <p>
        The bands we see quoted in the US market for a single production agent, integrated into live
        systems, with permissions, logging and a human handoff:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          <strong>A single-queue agent on systems with clean APIs</strong> (Shopify, Zendesk,
          HubSpot): low to mid five figures.
        </li>
        <li>
          <strong>Anything touching an ERP</strong> (NetSuite, SAP, an on-prem system, or a database
          somebody's cousin designed in 2009): meaningfully more, and the estimate is mostly a guess
          until someone has looked at the data.
        </li>
        <li>
          <strong>A pilot on one narrow queue, deliberately scoped to prove or kill the idea:</strong>{' '}
          four figures, two to four weeks. This is what we recommend first, every time.
        </li>
      </ul>
      <p>
        The variable is never the model. It is how many systems have to be touched and how bad their
        data is.
      </p>

      <h3 id="running">3. Running it</h3>
      <p>
        Model bill, plus monitoring, plus the human who reviews escalations, plus the maintenance
        when a vendor changes an API or your policy changes and the agent needs to know. Budget for
        the reviewer. An agent with nobody watching the escalation queue is an agent that quietly
        stops working and nobody notices for six weeks.
      </p>
      <p>
        The full comparison of doing it yourself against hiring it out, including what a competent
        internal developer can realistically ship, is in{' '}
        <a href="/blog/build-ai-agents-small-business-diy-vs-agency-2026">
          build AI agents, DIY vs agency
        </a>
        .
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
      <p>Six questions. The answers are diagnostic.</p>
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
          <strong>What does one unit of work cost in model calls?</strong> They should be able to do
          the arithmetic above for your workload in about five minutes.
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
    </article>
  ),
};

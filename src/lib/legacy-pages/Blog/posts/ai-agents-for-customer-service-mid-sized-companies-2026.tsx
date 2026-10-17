import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

/*
 * AI agents for customer service at mid-sized companies (US, 2026). Written 18 Oct 2026.
 * Target terms (DataForSEO, US, 17 Oct 2026): ai agents for customer service 720/mo KD 8 $461.99 CPC (no AI Overview on
 * the SERP), agentic ai for customer service 90, customer service agentic ai 70, best ai agents for customer service 50.
 * PAA (18 Oct): "How to build an AI agent for customer support?", "How can I use AI for customer service?", "What is
 * agentic AI vs chatbot?", "How much does an AI customer service agent cost?", "How to tell if a customer service agent
 * is AI?", "Which AI tool is best for customer support?".
 * Outside facts: Gartner 5 Mar 2025 and 25 Jun 2025 releases, Salesforce Agentforce pricing page (all read in the
 * built-in browser 17 and 18 Oct 2026). Vendor help desk agent prices are deliberately not restated here; the 11 Oct
 * comparison post holds them with its own read date.
 * No FactoryJet prices, no running-cost figures for custom agents, no team location.
 * The FAQ array below is the single source for the visible FAQ and FAQPage JSON-LD.
 */

const SRC = {
  gartnerCs: 'https://www.gartner.com/en/newsroom/press-releases/2025-03-05-gartner-predicts-agentic-ai-will-autonomously-resolve-80-percent-of-common-customer-service-issues-without-human-intervention-by-20290',
  gartner40: 'https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027',
  agentforcePricing: 'https://www.salesforce.com/agentforce/pricing/',
};

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;
const IMG = '/images/blog/ai-agents-for-customer-service-mid-sized-companies-2026';

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
    q: 'What are AI agents for customer service?',
    a: 'AI agents for customer service are AI systems that resolve customer requests end to end instead of only answering questions: they read the request, look up the order or account in your systems, take an allowed action such as updating an address or starting a return, and reply, or hand the case to a person with a summary when it falls outside their rules.',
  },
  {
    q: 'What is the difference between an AI agent and a chatbot in customer service?',
    a: 'A chatbot answers from scripts or a knowledge base. An AI agent can also act: check order status in your ERP, change a delivery address, issue a refund within a limit, or book a callback. Gartner describes the shift as agentic AI proactively resolving service requests rather than simply assisting users with information.',
  },
  {
    q: 'How can AI be used in customer service?',
    a: 'Three ways, in order of risk. Assist agents: draft replies and summarize tickets for a person to send. Answer: resolve common questions from your policies and order data. Act: take allowed actions such as address changes, returns or refunds within set limits. Most mid-sized companies start with the first two and add actions ticket type by ticket type.',
  },
  {
    q: 'What customer service tasks can an AI agent handle?',
    a: 'The ones with clear rules and data the agent can reach: order status, delivery changes before dispatch, returns within policy, invoice copies, password or account access, appointment booking and product questions answered from documentation. Complaints, disputes, exceptions to policy and anything emotional should reach a person, with the agent preparing the case.',
  },
  {
    q: 'What is the best AI agent for customer service?',
    a: 'Usually the one built into the help desk you already use, if your answers live there: Zendesk, Intercom, Salesforce Service Cloud and Gorgias all sell agents. A custom agent fits when resolving tickets needs systems the help desk agent cannot reach, such as your ERP, warehouse system or billing platform. Our comparison of Intercom Fin, Zendesk AI, Agentforce and a custom agent covers the details.',
  },
  {
    q: 'How much does an AI customer service agent cost?',
    a: 'Rented help desk agents bill per resolution, outcome, conversation or action. For example, Salesforce lists Agentforce actions at $0.10 each, and its own order-status example uses two actions per request (Salesforce pricing page, 18 October 2026). A custom build is a project price; FactoryJet quotes it as a fixed price in writing after a short scoping call.',
  },
  {
    q: 'How do I build an AI agent for customer support?',
    a: 'Export 90 days of tickets and sort them by type. For the five biggest types, list the systems a person opens to resolve each. Decide for each type whether the agent answers, acts or hands off. Connect only the systems needed, with limited permissions. Test on real past tickets, including ones it should refuse, before it talks to a customer.',
  },
  {
    q: 'Will AI agents resolve most customer service issues?',
    a: 'Gartner predicts that by 2029 agentic AI will autonomously resolve 80% of common customer service issues without human intervention, leading to a 30% reduction in operational costs (press release, 5 March 2025). That is a forecast about common issues, not a measured result. In a mid-sized company the share an agent can resolve depends on how many of your tickets have clear rules and reachable data.',
  },
  {
    q: 'How do you measure an AI customer service agent?',
    a: 'Track resolved without a person (confirmed as resolved, rather than merely closed), reopen rate within seven days, correct handoffs (cases it rightly passed on), customer satisfaction on agent-handled cases compared with human ones, and how often staff change its drafts. Measure by ticket type, because an agent that is excellent on order status may be weak on returns.',
  },
  {
    q: 'How do customers know if they are talking to AI?',
    a: 'Tell them. A clear line such as "I am an AI assistant; I can check orders and start returns, and I can pass you to a person at any time" sets expectations and avoids complaints. Always offer a way to reach a person, and make the handoff carry the conversation so the customer does not repeat themselves.',
  },
  {
    q: 'What makes a good handoff from an AI agent to a person?',
    a: 'The person should not have to start again. A good handoff includes the customer\'s request in one line, what the agent looked up (order, account, history), what it tried, why it stopped, and a suggested next step. It goes to the right queue with the right priority. Bad handoffs are the most common reason customers dislike AI support.',
  },
  {
    q: 'Can an AI agent issue refunds?',
    a: 'Yes, within limits you set: a maximum amount, approved reason codes and order conditions. Anything above the limit or outside the rules goes to a person for approval. Enforce the limit in the payment or order system too, not only in the agent\'s instructions, so the agent cannot be talked into a larger refund.',
  },
  {
    q: 'What are the risks of AI agents in customer service?',
    a: 'Wrong answers about policy given with confidence, actions taken outside policy (refunds, credits), customers manipulating the agent with crafted messages, private data shown to the wrong person, and frustrated customers stuck without a way to reach a person. Approval limits, identity checks before account actions, logging and a visible human option address most of them.',
  },
  {
    q: 'Do AI agents work for B2B customer service?',
    a: 'Yes, and often better, because B2B requests are repetitive and data-heavy: order status by PO number, invoice copies, delivery dates, price and stock questions, account changes. They usually need ERP access rather than only a help desk, which is why B2B companies more often need a custom connection or a custom agent.',
  },
  {
    q: 'Can an AI agent answer customer emails as well as chat?',
    a: 'Yes. Email is often the bigger channel for mid-sized and B2B companies. The agent reads the email and attachments, identifies the customer and request, looks up the data, and either replies, drafts a reply for approval, or routes it. Starting with drafts for approval is a safe first step on email.',
  },
  {
    q: 'What are machine customers?',
    a: 'Gartner uses the term for AI tools acting on behalf of customers: an AI assistant that contacts your support to cancel a membership or negotiate shipping rates for a business buyer. Its March 2025 release says service teams will need to support both human customers and a growing number of these machine customers.',
  },
  {
    q: 'Should we replace our customer service team with AI agents?',
    a: 'Set a different goal. A well-scoped agent takes the repetitive look-up and data-entry tickets so your team spends its time on complaints, exceptions and customers who need a person. Measure faster resolution and fewer repeat contacts, and keep a clear path to a human for every customer.',
  },
  {
    q: 'How long does it take to deploy an AI customer service agent?',
    a: 'A help desk\'s own agent can be switched on quickly for questions answered from your help center. Agents that take actions in other systems take longer, because each connection, permission and test case has to be set up. Start with one ticket type, prove it on past tickets, run it supervised, then add the next type.',
  },
  {
    q: 'What data does an AI customer service agent need?',
    a: 'Your help center and policies for answers, read access to order, account and billing data for look-ups, and limited write access only for the actions you allow. Plus 90 days of past tickets for testing. It does not need access to everything; each extra permission is extra risk.',
  },
  {
    q: 'How does FactoryJet build AI agents for customer service?',
    a: 'We map your ticket types to the systems behind them, decide with you which the agent answers, acts on or hands off, connect only what is needed with limited permissions, and test on your own past tickets. We can extend the agent in your help desk with a custom connection or build a custom agent. We show it working on your data before you sign.',
  },
];

export const post: BlogPost = {
  id: '773',
  slug: 'ai-agents-for-customer-service-mid-sized-companies-2026',
  title: 'AI Agents for Customer Service: What They Resolve, What They Hand to a Person (2026)',
  excerpt:
    'How mid-sized companies should use AI agents for customer service: which ticket types an agent can resolve and which go to a person, the systems each needs, rent or build, a good handoff, how to measure it, and Gartner\'s forecast for agentic AI in service.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Oct 18, 2026',
  dateModified: 'Oct 18, 2026',
  readTime: '14 min read',
  imageUrl: `${IMG}/hero.webp`,
  imageAlt:
    'Seen over her shoulder, a support agent with curly dark hair in a mustard sweater and a headset works through a list of conversations marked with green dots and one orange dot, an orange mug on her desk.',
  meta: {
    title: 'AI Agents for Customer Service: What They Resolve (2026)',
    description:
      'AI agents for customer service at mid-sized companies: which tickets they resolve, what goes to a person, rent vs build, handoffs and how to measure.',
  },
  keyTakeaways: [
    'An AI customer service agent resolves requests end to end: it looks up the order or account, takes an allowed action, and replies, or hands off with a summary.',
    'Decide ticket type by ticket type: answer, act or hand off. Order status and in-policy returns suit agents; complaints and exceptions go to a person.',
    'Gartner predicts agentic AI will autonomously resolve 80% of common customer service issues by 2029, with a 30% cut in operational costs (5 March 2025). It is a forecast, not a result.',
    'Rent the agent in your help desk when answers live there. Add a custom connection or build custom when tickets need your ERP, warehouse or billing system.',
    'A good handoff carries the request, what was looked up, what was tried and why it stopped, so the customer never repeats themselves.',
    'Measure by ticket type: confirmed resolutions, reopen rate, correct handoffs and satisfaction compared with human-handled cases.',
    'Start with one ticket type, test it on 90 days of your own past tickets, run it supervised, then add the next.',
  ],
  faqs,
  content: (
    <article>
      {/* Answer-first block */}
      <div className="bg-white border-2 border-[#E5DFD7] rounded-xl p-6 sm:p-8 mb-10">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-3">The short answer</p>
        <p className="text-lg leading-relaxed mb-0">
          <strong>AI agents for customer service</strong> resolve requests with clear rules and reachable data, such as
          order status, address changes and in-policy returns, by looking up your systems and taking allowed actions.
          Complaints, disputes and exceptions go to a person with a summary of what the agent found. Decide it ticket
          type by ticket type, and test on your own past tickets before go-live.
        </p>
      </div>

      <div className="bg-[#FAF8F5] border-l-4 border-[#B23E13] p-5 rounded-r-lg mb-10">
        <p className="text-sm text-[#1F2937] leading-relaxed mb-0">
          <strong>We design, build and support custom AI agents, so weigh this page with that in mind.</strong> Outside
          facts come from Gartner and Salesforce pages opened on 17 and 18 October 2026 and linked where they appear.
          Search figures are our own DataForSEO measurement for the US on 17 October 2026.
        </p>
      </div>

      <p>
        Advertisers paid about $462 a click in October 2026 for the US search &quot;ai agents for customer
        service&quot;, the highest click price in the 6,492 AI agent phrases we measured (DataForSEO, 17 October 2026).
        That number says how much a customer service buyer is worth to the vendors chasing them. Gartner{' '}
        <a href={SRC.gartnerCs} {...ext}>predicts</a> that by 2029 agentic AI will autonomously resolve 80% of common
        customer service issues without human intervention, leading to a 30% reduction in operational costs. That is a
        forecast. What a mid-sized company can do this quarter depends on its own tickets.
      </p>

      <h2 id="what-changes">What an agent does that a chatbot does not</h2>
      <p>
        Gartner&apos;s Daniel O&apos;Sullivan puts it this way in the same release: unlike traditional generative AI
        tools that simply assist users with information, agentic AI will proactively resolve service requests on behalf
        of customers. In practice that means three levels, each riskier than the last:
      </p>
      <Table
        head={['Level', 'What the AI does', 'Example', 'Risk']}
        rows={[
          ['Assist', 'Drafts replies and summarizes tickets for a person to send', 'A rep sends a reply the AI drafted', 'Low'],
          ['Answer', 'Replies directly from policies and order data', '"Your order shipped yesterday; here is the tracking link"', 'Medium'],
          ['Act', 'Takes allowed actions in your systems', 'Changes a delivery address before dispatch', 'Higher: needs limits and logs'],
        ]}
      />

      <h2 id="ticket-map">Which tickets an agent should resolve, and which go to a person</h2>
      <Table
        head={['Ticket type', 'Agent resolves when', 'Hand to a person when', 'Systems it needs']}
        rows={[
          ['Order status', 'The order is found and the carrier status is current', 'The order is missing or stuck past a set date', 'ERP or order system, carrier tracking'],
          ['Delivery or address change', 'Before dispatch and within policy', 'After dispatch, or a high-value order', 'Order system, warehouse system'],
          ['Return or exchange', 'Within the return window and policy', 'Outside the window, damaged goods, repeat returner', 'Order system, returns platform'],
          ['Refund or credit', 'Under a set amount with an approved reason', 'Above the limit or any dispute', 'Payment or billing system'],
          ['Invoice copy or billing question', 'The invoice is found and the question is factual', 'Disputed charges', 'ERP or billing system'],
          ['Product or how-to question', 'The answer is in your documentation', 'Safety, legal or warranty claims', 'Help center, product data'],
          ['Complaint', 'Never alone: prepare the case', 'Always', 'CRM or help desk history'],
        ]}
      />
      <p>
        The &quot;systems it needs&quot; column decides rent or build. If every system on a row connects to your help
        desk, its own agent may handle that row. If the row needs your ERP or warehouse system, you need a connection
        built.
      </p>

      <figure className="my-8">
        <img
          src={`${IMG}/routing.webp`}
          alt="A man with a grey ponytail points at the orange box in a flow diagram on a wall display while a woman in a blue hijab holding a tablet listens and colleagues work at desks in front of them."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Every ticket type gets one decision: answer, act or hand off.
        </figcaption>
      </figure>

      <h2 id="rent-or-build">Rent the help desk&apos;s agent, or build</h2>
      <Table
        head={['If', 'Start with', 'Add custom work when']}
        rows={[
          ['Your answers live in your help center and help desk', 'The help desk\'s own agent (Zendesk, Intercom Fin, Gorgias, Agentforce)', 'Tickets need data the help desk cannot reach'],
          ['Your cases already live in Salesforce', 'Salesforce Agentforce', 'Actions need your ERP, warehouse or billing system'],
          ['Most tickets are B2B: PO numbers, invoices, delivery dates', 'A custom agent or a custom connection to your ERP', 'From the start'],
          ['Most contact is by email, not chat', 'An agent that drafts email replies for approval', 'You want it to act as well as draft'],
        ]}
      />
      <p>
        For prices, Salesforce lists Agentforce at $0.10 per action, and its own order-status example uses two actions
        per request (<a href={SRC.agentforcePricing} {...ext}>Salesforce, 18 October 2026</a>). Our{' '}
        <a href="/blog/intercom-fin-vs-zendesk-ai-vs-custom-ai-agent-2026">comparison of Intercom Fin, Zendesk AI, Agentforce and a custom agent</a>{' '}
        covers the other vendors with their read dates, and{' '}
        <a href="/blog/agentforce-pricing-vs-custom-ai-agent-2026">Agentforce pricing vs a custom agent</a> goes deeper on
        Salesforce.
      </p>

      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg my-8">
        <h3 className="text-lg font-bold mb-3">Want your ticket types mapped?</h3>
        <p className="mb-4">
          Bring a 90-day ticket export or your five biggest ticket types and the systems behind them. In a 30-minute call
          with founder Bhavesh Barot we will mark each type answer, act or hand off, and tell you whether your help
          desk&apos;s agent can do it as sold or what needs connecting. FactoryJet quotes a fixed price in writing after
          that call, and we show working software on your own data before a contract.
        </p>
        <a
          href="https://calendly.com/bhavesh-factoryjet/30min"
          {...ext}
          className="inline-block bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors"
        >
          Talk to the Founder
        </a>
      </div>

      <h2 id="how-to-start">How to start: six steps from a ticket export</h2>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li>Export the last 90 days of tickets and sort them by type.</li>
        <li>Take the five biggest types. Next to each, write the systems a person opens to resolve it.</li>
        <li>Mark each type answer, act or hand off, using the table above.</li>
        <li>Connect only the systems the first type needs, with a limited service account.</li>
        <li>Test on 20 to 50 real past tickets of that type, including ones the agent should refuse.</li>
        <li>Go live supervised on that one type, then add the next.</li>
      </ol>
      <p>
        The technical side, from retrieval to actions to handoff, is in our{' '}
        <a href="/blog/ai-customer-support-agent-architecture-guide">AI customer support agent architecture guide</a>.
      </p>

      <h2 id="handoff">The handoff decides whether customers like it</h2>
      <p>A good handoff means the person picks up where the agent stopped. It carries:</p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>The customer&apos;s request in one line.</li>
        <li>What the agent looked up: order, account, history.</li>
        <li>What it tried, and why it stopped.</li>
        <li>A suggested next step and the right queue and priority.</li>
      </ul>
      <p>
        Also tell customers up front that they are talking to an AI assistant, what it can do, and that they can reach a
        person at any time.
      </p>

      <h2 id="measure">How to measure it, ticket type by ticket type</h2>
      <Table
        head={['Measure', 'Why it matters']}
        rows={[
          ['Confirmed resolutions', 'Closed and not reopened, rather than merely closed'],
          ['Reopen rate within seven days', 'Catches answers that looked right and were not'],
          ['Correct handoffs', 'Cases it rightly passed on, including the ones it should refuse'],
          ['Satisfaction vs human-handled cases', 'Same ticket type, side by side'],
          ['Staff edits to drafts', 'How often a person changes what the agent wrote'],
        ]}
      />

      <h2 id="risks">Risks to plan for</h2>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Confident wrong policy answers.</strong> Answer only from your own policies, and test against them.</li>
        <li><strong>Actions outside policy.</strong> Limits on refunds and credits, enforced in the payment system too.</li>
        <li><strong>Manipulative messages.</strong> Customers or bots trying to talk the agent into exceptions; see our <a href="/blog/ai-agent-security-risks-controls-2026">AI agent security guide</a>.</li>
        <li><strong>Wrong-account data.</strong> Verify identity before showing or changing account details.</li>
        <li><strong>Machine customers.</strong> Gartner expects AI tools to contact your support on customers&apos; behalf, so plan for requests that arrive from other agents.</li>
      </ul>
      <p>
        Gartner&apos;s{' '}
        <a href={SRC.gartner40} {...ext}>June 2025 forecast</a> that over 40% of agentic AI projects will be canceled by
        the end of 2027 names inadequate risk controls among the causes. In customer service, the controls above are the
        difference.
      </p>

      <h2 id="how-factoryjet-works">How FactoryJet builds customer service agents</h2>
      <p>
        We map your ticket types to the systems behind them, agree which the agent answers, acts on or hands off, and
        connect only what is needed. We can extend your help desk&apos;s agent with a custom connection, or build a
        custom agent when tickets live mostly outside the help desk. You own what we build, and we show it working on
        your own past tickets before you sign. FactoryJet quotes the build, and any support you choose, as fixed prices
        in writing after a short scoping call.
      </p>
      <p>
        See <a href="/services/ai-customer-support-agents">AI customer support agents</a>,{' '}
        <a href="/services/ai-call-center-agents">AI call center agents</a>,{' '}
        <a href="/services/ecommerce-ai-agents">ecommerce AI agents</a> and{' '}
        <a href="/services/ai-integration-services">AI integration services</a>.
      </p>

      <h2 id="sources">Sources</h2>
      <p className="text-sm text-gray-600">Pages opened and read on 17 and 18 October 2026.</p>
      <ul className="list-disc pl-6 space-y-1 text-sm mb-8">
        <li><a href={SRC.gartnerCs} {...ext}>Gartner, Gartner Predicts Agentic AI Will Autonomously Resolve 80% of Common Customer Service Issues Without Human Intervention by 2029</a> (5 March 2025)</li>
        <li><a href={SRC.gartner40} {...ext}>Gartner, Gartner Predicts Over 40% of Agentic AI Projects Will Be Canceled by End of 2027</a> (25 June 2025)</li>
        <li><a href={SRC.agentforcePricing} {...ext}>Salesforce, Agentforce pricing</a> (read 18 October 2026)</li>
        <li>Our own measurement: US search volumes and click prices across 6,492 AI agent phrases, DataForSEO, 17 October 2026</li>
      </ul>

      <div className="bg-[#FAF8F5] border-2 border-[#E5DFD7] p-6 sm:p-8 rounded-xl my-10 shadow-sm">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-2">
          Customer service agent scoping for mid-sized US companies
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] mb-3">
          See an AI agent resolve your own past tickets before you sign
        </h3>
        <p className="text-[#4B5563] text-base leading-relaxed mb-6">
          Send a sample of tickets and tell us your help desk and order system. We will show which types an agent can
          resolve, which it should hand off, and run it on your own tickets before any contract. FactoryJet quotes a fixed
          price in writing after a short scoping call.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://calendly.com/bhavesh-factoryjet/30min"
            {...ext}
            className="inline-flex items-center gap-2 bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors shadow-sm"
          >
            Talk to the Founder
          </a>
          <a
            href="/services/ai-customer-support-agents"
            className="inline-flex items-center gap-2 bg-white text-[#1F2937] border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            See AI customer support agents
          </a>
        </div>
      </div>
    </article>
  ),
};

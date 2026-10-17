import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

/*
 * Salesforce Agentforce pricing vs a custom AI agent (US, 2026). Written 18 Oct 2026.
 * Target terms (DataForSEO, US, 17 Oct 2026): salesforce agentforce pricing 390/mo KD 7, agentforce pricing 320 KD 4,
 * agentforce cost 70, how much does agentforce cost 40, agentforce roi calculator 40, salesforce einstein vs agentforce 40,
 * agentforce vs einstein 30 ($65 CPC), agentforce license 30, agentforce pricing calculator 20.
 * PAA (18 Oct): "How much does Agentforce cost?", "Is Agentforce free?", "Are Agentforce and Einstein the same?",
 * "What is the difference between Salesforce and Agentforce?", "Is unmetered Agentforce usage available for employees?".
 * Every Salesforce figure was read on salesforce.com/agentforce/pricing on 18 Oct 2026 (built-in browser).
 * The 11 Oct 2026 $2-per-conversation figure comes from our own earlier read for
 * intercom-fin-vs-zendesk-ai-vs-custom-ai-agent-2026.tsx; on 18 Oct the Conversations tier showed "Contact us".
 * No FactoryJet prices, no running-cost figures for custom agents, no partner status (FactoryJet does Salesforce
 * and Agentforce work; confirmed by Bhavesh 17 Oct 2026). The build range is Layer3 Labs' market range.
 * The FAQ array below is the single source for both the visible FAQ and the FAQPage JSON-LD.
 */

const SRC = {
  pricing: 'https://www.salesforce.com/agentforce/pricing/',
  layer3: 'https://www.layer3labs.io/guides/ai-consulting-rates-pricing',
  gartner40: 'https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027',
};

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;
const IMG = '/images/blog/agentforce-pricing-vs-custom-ai-agent-2026';

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
    q: 'How much does Salesforce Agentforce cost?',
    a: 'Salesforce lists three ways to pay. Flex Credits cost $500 per 100,000 credits, and each Agentforce action uses 20 credits ($0.10), or 30 for a voice action. Agentforce add-ons cost $125 per user per month for Sales, Service and Field Service, $150 for Industries, and Max Edition starts at $550 per user per month. An Agentforce user license is $5 per user per month and needs Flex Credits. Read on salesforce.com on 18 October 2026.',
  },
  {
    q: 'Is Agentforce free?',
    a: 'There is a $0 starting point. The Salesforce pricing page lists Salesforce Foundations as a way to get started with Agentforce for free, with tools such as Agentforce Builder and Prompt Builder. Production use is paid: by Flex Credits per action, by conversation for customer-facing agents (price on request as of 18 October 2026), or by per-user add-ons. Your Salesforce licenses are separate.',
  },
  {
    q: 'What are Agentforce Flex Credits?',
    a: 'Flex Credits are Salesforce\'s unit of payment for Agentforce. Each action an agent takes, such as updating a record, summarizing a case or answering a question from knowledge, draws credits from a shared pool: 20 credits for a standard action and 30 for a voice action. Credits list at $500 per 100,000 and can be bought pre-purchase, pre-commit or pay-as-you-go.',
  },
  {
    q: 'How much does one Agentforce action cost?',
    a: 'At list price, $0.10. A standard action uses 20 Flex Credits, and credits cost $500 per 100,000, so 20 credits is $0.10. A voice action uses 30 credits, or $0.15. A single customer request often takes several actions: Salesforce\'s own order-status example uses two actions, $0.20 per request.',
  },
  {
    q: 'How much does Agentforce cost per conversation?',
    a: 'On 18 October 2026 the Salesforce pricing page showed the Conversations model for customer-facing agents with "Contact us" instead of a public price. When we read the same page on 11 October 2026 it listed $2 per conversation. Ask your account executive for the current rate, and compare it against Flex Credits for your typical number of actions per conversation.',
  },
  {
    q: 'What is unmetered Agentforce usage for employees?',
    a: 'Salesforce says its Agentforce add-ons ($125 per user per month for Sales, Service and Field Service, $150 for Industries) and Max Edition enable unmetered employee agent usage for licensed users. That means staff-facing agents for those users are covered by the per-user price rather than drawn from Flex Credits. Customer-facing agents are billed separately.',
  },
  {
    q: 'What does the Agentforce user license include?',
    a: 'Salesforce lists the Salesforce Agentforce license for employees, called the Agentforce User License, at $5 per user per month. It gives an employee access to Agentforce agents and limited Salesforce CRM objects, with metered usage, so it requires Flex Credits for the actions those agents take. It suits employees who are not full Salesforce users but need to use an agent.',
  },
  {
    q: 'Are Agentforce and Einstein the same?',
    a: 'Salesforce now sells its AI under the Agentforce name. Its pricing page describes the Agentforce add-ons as Salesforce\'s full suite of predictive, generative and agentic AI. Einstein was Salesforce\'s earlier AI brand. If you are comparing an older Einstein contract with Agentforce, ask your account executive which features moved and how each is now billed.',
  },
  {
    q: 'What is the difference between Salesforce and Agentforce?',
    a: 'Agentforce vs Salesforce is not a choice between two products. Salesforce is the company and its CRM platform: Sales Cloud, Service Cloud and the rest. Agentforce is the AI agent layer that runs on that platform and acts on your Salesforce data. You need Salesforce to use Agentforce, and Agentforce pricing sits on top of your Salesforce licenses.',
  },
  {
    q: 'Is there an Agentforce ROI calculator?',
    a: 'You can work it out from Salesforce\'s own figures: actions per request times $0.10 per standard action times requests per month, compared with the staff time those requests take today. Salesforce\'s pricing page shows worked examples such as an order-status agent at $120 a month for 20 requests a day. Our AI agent ROI calculator helps with the time-saved side.',
  },
  {
    q: 'What does Agentforce cost for a typical customer service team?',
    a: 'It depends on volume and actions per request. Salesforce\'s own case-management example, 100 users each handling 3 cases a day for 20 days with 3 actions per case, comes to $1,800 a month in Flex Credits. Salesforce notes its examples do not include Data 360 credits or other consumption services, so confirm those with your account executive.',
  },
  {
    q: 'When is a custom AI agent better than Agentforce?',
    a: 'When the job lives mostly outside Salesforce: orders arriving by email, PDF or EDI, stock and pricing in an ERP, approval rules that span your ERP and CRM, or work that is not a case or a lead. It also fits when you want to own the code and choose the model. If the job lives inside Salesforce, Agentforce is usually the faster start.',
  },
  {
    q: 'Can Agentforce work with our ERP?',
    a: 'Yes, through actions. Agentforce builds its actions from your Salesforce flows, Apex code and APIs, so if your ERP has an API, or a custom API or MCP server is built in front of it, an Agentforce agent can check stock, look up an invoice or create a draft order there. That connection is usually the custom part of the project.',
  },
  {
    q: 'Do we need a Salesforce partner to set up Agentforce?',
    a: 'Not necessarily. An admin or developer who knows flows and Apex can configure agents, and Salesforce offers its own builder tools. Outside help is useful when actions must reach systems beyond Salesforce, when approval rules span systems, or when your team lacks time. Ask any firm to show an agent working on your own Salesforce data before you sign.',
  },
  {
    q: 'How do I estimate my Agentforce bill?',
    a: 'List each job the agent will do, count the actions per request (look up, update, reply), multiply by expected requests per month, and price at $0.10 per standard action or $0.15 per voice action. Add per-user add-ons for staff who need unmetered use, and ask about Data 360 and other consumption charges. Then run a pilot and compare the estimate with the Digital Wallet usage report.',
  },
  {
    q: 'What is Digital Wallet in Agentforce?',
    a: 'Digital Wallet is the Salesforce tool for tracking Agentforce consumption. The pricing page says it shows Flex Credit usage in near real time with threshold alerts and usage trends, and that all buying models work with it. Use it during a pilot to check your per-request action count against your estimate.',
  },
  {
    q: 'Should a mid-sized company start with Agentforce or a custom agent?',
    a: 'Start with Agentforce if your customers, cases and sales data live in Salesforce and the job stays there. Start custom, or with a custom connection for Agentforce to call, if the job depends on systems outside Salesforce. Either way, run a short proof of concept on your own past cases before committing to a volume.',
  },
  {
    q: 'What does a custom AI agent cost to build?',
    a: 'Market figures vary by scope. Layer3 Labs, in its AI consulting pricing guide updated 9 September 2026, puts a production MVP workflow at $5,000 to $25,000 and a full enterprise AI system at $50,000 to $200,000 or more. Those are market ranges, not FactoryJet prices. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    q: 'Can we use Agentforce and a custom agent together?',
    a: 'Yes, and it is often the best answer. Keep Agentforce for the conversation and the Salesforce work, and have a custom API, MCP server or small agent built for the system Salesforce cannot reach. The Agentforce agent calls it as an action. You keep one customer-facing agent and close the gap with the smallest piece of custom work.',
  },
  {
    q: 'Does FactoryJet do Salesforce and Agentforce work?',
    a: 'Yes. We do Salesforce and Agentforce work as well as custom AI agents and integrations, so we can set up Agentforce, build the connection it needs to your ERP or other systems, or build a custom agent when that fits better. We show working software on your own data before you sign, and quote a fixed price in writing after a short scoping call.',
  },
  {
    q: 'Is Salesforce still using Einstein?',
    a: 'Salesforce now markets its AI under the Agentforce name, and its pricing page describes the Agentforce add-ons as Salesforce\'s full suite of predictive, generative and agentic AI. If your contract still lists Einstein features, ask your account executive which ones moved into Agentforce and how each is billed today, before comparing quotes.',
  },
  {
    q: 'What are the different pricing models for Salesforce Agentforce?',
    a: 'Salesforce lists three: consumption through Flex Credits ($500 per 100,000 credits, 20 per action) or Conversations (price on request as of 18 October 2026); per-user add-ons ($125 or $150 per user per month, Max Edition from $550); and the Agentforce license for employees at $5 per user per month plus Flex Credits. Flex Credits can be pre-purchased, pre-committed or pay-as-you-go.',
  },
];

export const post: BlogPost = {
  id: '770',
  slug: 'agentforce-pricing-vs-custom-ai-agent-2026',
  title: 'Salesforce Agentforce Pricing vs a Custom AI Agent: What It Costs and When Each Wins (2026)',
  excerpt:
    'Salesforce Agentforce pricing read on 18 October 2026: Flex Credits, per-action costs, add-ons, Max Edition and the $5 user license, with Salesforce\'s own worked examples, how to estimate your bill, Einstein vs Agentforce, and when a custom agent or a custom connection is the better fit for a mid-sized company.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Oct 18, 2026',
  dateModified: 'Oct 18, 2026',
  readTime: '14 min read',
  imageUrl: `${IMG}/hero.webp`,
  imageAlt:
    'Seen from behind, a man in a grey suit jacket and a woman with a ponytail in a teal blouse study a monitor showing a dashboard of grey and orange charts, an orange mug on the desk.',
  meta: {
    title: 'Agentforce Pricing (2026) vs a Custom AI Agent',
    description:
      'Agentforce pricing read 18 Oct 2026: $0.10 per action, $125 add-ons, $5 user license, worked examples, and when a custom AI agent wins.',
  },
  keyTakeaways: [
    'Agentforce Flex Credits list at $500 per 100,000. A standard action uses 20 credits ($0.10) and a voice action 30 ($0.15). Salesforce pricing page, 18 October 2026.',
    'Per-user options: Agentforce add-ons at $125 per user per month (Sales, Service, Field Service), $150 for Industries, Max Edition from $550, and a $5 Agentforce user license that needs Flex Credits.',
    'The Conversations model showed "Contact us" on 18 October 2026. On 11 October 2026 the same page listed $2 per conversation. Vendor prices move; check on the day.',
    'Salesforce\'s own examples: an order-status agent at $120 a month for 20 requests a day, and case management for 100 users at $1,800 a month. They exclude Data 360 credits.',
    'Agentforce fits jobs that live inside Salesforce. A custom agent fits jobs that live mostly in your ERP, inbox, EDI or other systems.',
    'The middle route is common: keep Agentforce and have one API or MCP server built so it can act in the system it cannot reach.',
    'No figure on this page is a FactoryJet price. FactoryJet quotes a fixed price in writing after a short scoping call.',
  ],
  faqs,
  content: (
    <article>
      {/* Answer-first block */}
      <div className="bg-white border-2 border-[#E5DFD7] rounded-xl p-6 sm:p-8 mb-10">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-3">The short answer</p>
        <p className="text-lg leading-relaxed mb-0">
          <strong>Salesforce Agentforce</strong> costs $0.10 per standard action at list price ($500 per 100,000 Flex
          Credits, 20 credits an action), or $125 per user per month for unmetered employee use through an add-on
          (Salesforce, 18 October 2026). It is the right choice when the job lives inside Salesforce. A{' '}
          <strong>custom AI agent</strong>, or a custom connection Agentforce can call, fits when the job depends on
          systems outside it.
        </p>
      </div>

      <div className="bg-[#FAF8F5] border-l-4 border-[#B23E13] p-5 rounded-r-lg mb-10">
        <p className="text-sm text-[#1F2937] leading-relaxed mb-0">
          <strong>We do Salesforce and Agentforce work and build custom agents, so weigh this page with that in mind.</strong>{' '}
          Every Salesforce figure was read on the{' '}
          <a href={SRC.pricing} {...ext}>Agentforce pricing page</a> on 18 October 2026. Salesforce says the page is
          for information only and subject to change, so check it before you budget. No figure here is a FactoryJet
          price.
        </p>
      </div>

      <p>
        Around 710 people a month search Google in the US for &quot;agentforce pricing&quot; or &quot;salesforce
        agentforce pricing&quot; (DataForSEO, 17 October 2026). Most are Salesforce customers who have been offered
        Agentforce and want to know what it will cost and whether a custom agent would serve them better. This guide
        sets out the published prices, Salesforce&apos;s own worked examples, a way to estimate your bill, and the
        signals that point to Agentforce, a custom build, or both.
      </p>

      <h2 id="price-list">Agentforce pricing at a glance (read 18 October 2026)</h2>
      <Table
        head={['Option', 'List price', 'What it covers']}
        rows={[
          ['Salesforce Foundations', '$0', 'Get started with Agentforce, including Agentforce Builder and Prompt Builder'],
          ['Flex Credits', '$500 per 100,000 credits', 'Any Agentforce use: 20 credits per action ($0.10), 30 per voice action ($0.15)'],
          ['Conversations', 'Contact us', 'Customer-facing agents, priced per conversation ($2 when we read the page on 11 October 2026)'],
          ['Agentforce add-ons', '$125 per user per month', 'Sales, Service, Field Service and Operations; unmetered employee usage for licensed users'],
          ['Agentforce Industries add-ons', '$150 per user per month', 'Industries Clouds; unmetered employee usage'],
          ['Max Edition', 'From $550 per user per month', 'Add-on included, plus 2.75 million Flex Credits per org per year'],
          ['Agentforce User License', '$5 per user per month', 'Agent access for any employee with limited CRM objects; requires Flex Credits'],
        ]}
      />
      <p>
        The Agentforce pricing model has three parts: consumption (Flex Credits or Conversations), per-user add-ons, and the $5 Agentforce license for employees. Flex Credits can be bought three ways: pre-purchase (pay up front for the term, which Salesforce says saves the
        most), pre-commit, or pay-as-you-go. All three work with Digital Wallet, Salesforce&apos;s usage tracker. Your
        Salesforce licenses are separate, and Salesforce notes its examples leave out Data 360 credits and other
        consumption services.
      </p>

      <h2 id="examples">What Salesforce&apos;s own examples cost</h2>
      <Table
        head={['Salesforce example', 'Actions per request', 'Cost per request', 'Volume assumed', 'Per month']}
        rows={[
          ['Customer self-service: where is my order?', '2', '$0.20', '20 requests a day', '$120'],
          ['Service case management', '3', '$0.30', '100 users, 3 cases a day, 20 days', '$1,800'],
          ['Field service appointment scheduling', '5', '$0.50', '10 reps, 3 appointments a day, 20 days', '$300'],
          ['IT onboarding questions', '1', '$0.10', '20 new staff, 5 questions each', '$10'],
          ['Voice: reservation change', '4 voice actions', '$0.60 (120 credits)', '300 calls', '$180'],
        ]}
      />
      <p>
        The pattern to take away is actions per request. A request that needs five look-ups and updates costs five
        times one that needs a single answer. At list price, an order-status agent handling 1,000 requests a day at two
        actions each would use about $6,000 of Flex Credits a month (1,000 x $0.20 x 30). That is simple arithmetic on
        Salesforce&apos;s published rate, not a quote; pre-purchase discounts and your contract change it.
      </p>

      <figure className="my-8">
        <img
          src={`${IMG}/cost-review.webp`}
          alt="A grey-haired man in a white shirt sits thinking with a pen at a desk with a laptop, a printed sheet, a black desk calculator and an orange sticky pad."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Count actions per request first. That number drives the Agentforce bill more than anything else.
        </figcaption>
      </figure>

      <h2 id="estimate">How to estimate your Agentforce bill: an Agentforce pricing calculator in five steps</h2>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li>List each job the agent will do: answer, look up, update, schedule.</li>
        <li>For each, count the actions per request. Every look-up or update is one.</li>
        <li>Multiply by expected requests per month, and price at $0.10 per standard or $0.15 per voice action.</li>
        <li>Add per-user add-ons for staff who need unmetered use, and ask about Data 360 and other consumption charges.</li>
        <li>Run a pilot and compare your estimate with the Digital Wallet usage report before committing to a volume.</li>
      </ol>
      <p>
        For the time-saved side, which is what any Salesforce Agentforce ROI calculator needs, our <a href="/tools/ai-agent-roi-calculator">AI agent ROI calculator</a>{' '}
        works for Agentforce and custom agents alike.
      </p>

      <h2 id="einstein">Salesforce Einstein vs Agentforce</h2>
      <p>
        Salesforce now sells its AI under the Agentforce name. The pricing page describes the Agentforce add-ons as
        Salesforce&apos;s full suite of predictive, generative and agentic AI, unified in the flow of work. If you hold
        an older Einstein contract, ask your account executive which features moved, which are now Agentforce, and how
        each is billed, before you compare quotes line by line.
      </p>

      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg my-8">
        <h3 className="text-lg font-bold mb-3">Weighing an Agentforce quote?</h3>
        <p className="mb-4">
          Bring the jobs you want the agent to do and the systems behind them. In a 30-minute call with founder Bhavesh
          Barot we will count the actions per request with you, show which jobs Agentforce can do as sold, and which
          need a connection to a system outside Salesforce. FactoryJet quotes a fixed price in writing after that call.
        </p>
        <a
          href="https://calendly.com/bhavesh-factoryjet/30min"
          {...ext}
          className="inline-block bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors"
        >
          Talk to the Founder
        </a>
      </div>

      <h2 id="agentforce-wins">When Agentforce is the right call</h2>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Your customers, cases, leads and opportunities already live in Salesforce.</li>
        <li>The job starts and ends inside Salesforce: answer a case, update a record, schedule a field visit.</li>
        <li>Your admins know flows and Apex, which is how Agentforce gets its actions.</li>
        <li>You can forecast actions per request well enough to budget Flex Credits, or per-user add-ons fit your staff use.</li>
      </ul>

      <h2 id="custom-wins">When a custom AI agent is the right call</h2>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>The work arrives outside Salesforce: emailed purchase orders, PDFs, EDI feeds, supplier portals.</li>
        <li>The data lives in your ERP: stock, pricing, invoices, production schedules.</li>
        <li>Approval rules span systems, such as finance approval in the ERP before an order changes in Salesforce.</li>
        <li>You want to own the code, prompts and logs, and choose or switch the model yourself.</li>
      </ul>
      <p>
        Our guide to <a href="/blog/enterprise-ai-agents-mid-sized-companies-buy-or-build-2026">enterprise AI agents for mid-sized companies</a>{' '}
        covers this choice across Salesforce, Microsoft and help desk platforms. For the Microsoft version of this
        decision, see our guide to <a href="/blog/copilot-studio-vs-custom-ai-agents-2026">Copilot Studio vs a custom AI agent</a>.
      </p>

      <h2 id="middle-route">The middle route: Agentforce plus one custom connection</h2>
      <p>
        Agentforce builds its actions from your Salesforce flows, Apex code and APIs. So when the missing piece is one
        system, the smallest fix is usually a custom API or MCP server in front of it. The Agentforce agent then calls
        that as an action to check stock in the ERP, look up an invoice or create a draft order. You keep one agent, one
        conversation history and Salesforce reporting, and only the connection is custom.
      </p>
      <Table
        head={['Route', 'You keep', 'Custom work', 'Fits when']}
        rows={[
          ['Agentforce only', 'Everything in Salesforce', 'Flows and actions inside Salesforce', 'The job lives in Salesforce'],
          ['Agentforce plus a connection', 'Agentforce for the conversation and reporting', 'One API or MCP server for the outside system', 'One system is out of reach'],
          ['Custom agent', 'Your own code, model choice and logs', 'The agent and its tools', 'Most of the job lives outside Salesforce'],
        ]}
      />

      <h2 id="build-cost">What a custom agent costs to build</h2>
      <p>
        Layer3 Labs&apos;{' '}
        <a href={SRC.layer3} {...ext}>AI consulting pricing guide</a> (updated 9 September 2026) puts a production MVP
        workflow at $5,000 to $25,000 and a full enterprise AI system at $50,000 to $200,000 or more. Those are market
        ranges, not FactoryJet prices. FactoryJet quotes the build, and any support you choose, as fixed prices in
        writing after a short scoping call, and shows working software on your own data before you sign. For ranges
        across company sizes and the controls that move them, see{' '}
        <a href="/blog/enterprise-ai-agent-cost-2026">enterprise AI agent cost in 2026</a>.
      </p>

      <h2 id="before-signing">Five questions to ask before signing an Agentforce order</h2>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li>How many actions does each of our jobs take per request, in your estimate?</li>
        <li>Which jobs need data from outside Salesforce, and how will the agent reach it?</li>
        <li>Which consumption charges, such as Data 360 credits, apply on top of Flex Credits?</li>
        <li>What happens to unused pre-purchased credits at the end of the term?</li>
        <li>Can we run a pilot and check actual usage in Digital Wallet before committing to a volume?</li>
      </ol>
      <p>
        Gartner&apos;s{' '}
        <a href={SRC.gartner40} {...ext}>June 2025 forecast</a> names escalating costs as one of three reasons over 40%
        of agentic AI projects will be canceled by the end of 2027. Answering those five questions up front is the
        cheapest protection against it.
      </p>

      <h2 id="what-else-ranks">What else ranks for &quot;salesforce agentforce pricing&quot;, and how this guide differs</h2>
      <p>
        These are the business sites on Google&apos;s first page for &quot;salesforce agentforce pricing&quot; in the US when we checked on 17
        October 2026 (DataForSEO), with the title Google showed for each. We list them so you can compare; we have not
        reviewed their services, and the list leaves out forums and video sites.
      </p>
      <Table
        head={['Site', 'Page title shown in Google']}
        rows={[
          ['aquiva.com', 'Salesforce Agentforce Pricing (2026): Flex Credits ...'],
          ['ekfrazo.com', 'Salesforce Agentforce Pricing 2026: Tiers, Flex Credits & ...'],
          ['martech.org', 'Salesforce Agentforce pricing models continue to evolve'],
          ['cosupport.ai', 'Salesforce Agentforce Pricing in 2026'],
          ['salesfive.com', 'Agentforce: Costs, Tools & Integration Explained'],
          ['getmacha.com', 'Agentforce Pricing 2026: 10 Cents an Action, $2 a Resolution'],
        ]}
      />
      <p>Most of these summarise the price list. This guide adds Salesforce&apos;s own worked examples, a five-step way to estimate your bill, the change in the Conversations price between 11 and 18 October 2026, and when a custom connection is the smaller project.</p>

      <h2 id="how-factoryjet-works">How FactoryJet helps with Agentforce and custom agents</h2>
      <p>
        We do Salesforce and Agentforce work, build custom AI agents, and build the APIs and MCP servers that connect
        the two. That lets us recommend Agentforce alone, Agentforce plus a connection, or a custom agent, based on
        where your work lives. You own what we build: the code and repository from day one. We show working software on
        your own data before you sign.
      </p>
      <p>
        See <a href="/services/ai-customer-support-agents">AI customer support agents</a>,{' '}
        <a href="/services/ai-integration-services">AI integration services</a>,{' '}
        <a href="/services/erp-ai-agents">AI agents for ERP systems</a> and{' '}
        <a href="/services/ai-agent-development">AI agent development</a>. For help desk agents, compare{' '}
        <a href="/blog/intercom-fin-vs-zendesk-ai-vs-custom-ai-agent-2026">Intercom Fin, Zendesk AI and Agentforce</a>.
      </p>

      <h2 id="sources">Sources</h2>
      <p className="text-sm text-gray-600">Pages opened and read on 17 and 18 October 2026.</p>
      <ul className="list-disc pl-6 space-y-1 text-sm mb-8">
        <li><a href={SRC.pricing} {...ext}>Salesforce, Agentforce pricing</a> (read 18 October 2026; Conversations price as read on 11 October 2026)</li>
        <li><a href={SRC.layer3} {...ext}>Layer3 Labs, AI consulting rates and pricing</a> (updated 9 September 2026)</li>
        <li><a href={SRC.gartner40} {...ext}>Gartner, Gartner Predicts Over 40% of Agentic AI Projects Will Be Canceled by End of 2027</a> (25 June 2025)</li>
        <li>Our own measurement: US search volumes, DataForSEO, 17 October 2026</li>
      </ul>

      <div className="bg-[#FAF8F5] border-2 border-[#E5DFD7] p-6 sm:p-8 rounded-xl my-10 shadow-sm">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-2">
          Agentforce or custom review for mid-sized US companies
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] mb-3">
          Find out what Agentforce can do as sold, and what needs a connection
        </h3>
        <p className="text-[#4B5563] text-base leading-relaxed mb-6">
          Tell us the jobs and the systems behind them. We will count the actions, flag what sits outside Salesforce, and
          show the result working on your own data before you sign. FactoryJet quotes a fixed price in writing after a
          short scoping call.
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
            href="/services/ai-integration-services"
            className="inline-flex items-center gap-2 bg-white text-[#1F2937] border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            See AI integration services
          </a>
        </div>
      </div>
    </article>
  ),
};

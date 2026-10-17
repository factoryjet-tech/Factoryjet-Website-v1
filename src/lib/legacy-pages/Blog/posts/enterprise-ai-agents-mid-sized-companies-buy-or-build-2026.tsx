import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

/*
 * Enterprise AI agents for mid-sized companies: what to buy, what to build (US, 2026). Written 18 Oct 2026.
 * Target terms (DataForSEO, US, 17 Oct 2026): ai agents for business 3,600/mo KD 14 $87.72 (+5,556% yoy),
 * enterprise ai agents 2,400/mo KD 12 $88.75, best ai agents for business 140, ai agents for enterprise 140,
 * enterprise ai agent platform 140, agentic ai for enterprise 110, custom ai agents for business 20.
 * PAA (18 Oct): "What can an AI agent do for my business?", "Can I rent an AI agent?", "How much do AI agents cost?",
 * "What is the best AI agent for business?", "What is enterprise AI used for?".
 * Outside facts come only from pages opened on 17 and 18 Oct 2026 (Gartner, Salesforce, Anthropic, Layer3 Labs).
 * Vendor list prices are Salesforce's own; the build range is Layer3 Labs' market range. No FactoryJet prices,
 * no running-cost figures for custom agents, no team location, no partner status.
 * The FAQ array below is the single source for both the visible FAQ and the FAQPage JSON-LD.
 */

const SRC = {
  gartner40: 'https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027',
  agentforcePricing: 'https://www.salesforce.com/agentforce/pricing/',
  anthropic: 'https://www.anthropic.com/engineering/building-effective-agents',
  layer3: 'https://www.layer3labs.io/guides/ai-consulting-rates-pricing',
};

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;
const IMG = '/images/blog/enterprise-ai-agents-mid-sized-companies-buy-or-build-2026';

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
    q: 'What are enterprise AI agents?',
    a: 'Enterprise AI agents are AI systems that do a piece of business work end to end: they read a request, decide the steps, use your company systems through tools, and either finish the task or hand it to a person. Unlike a chat assistant, they act inside your CRM, ERP, help desk or inbox, under permissions and approval rules your company sets.',
  },
  {
    q: 'What can an AI agent do for my business?',
    a: 'Mostly the repeated work between your systems: turning emailed orders into draft sales orders, matching supplier invoices to purchase orders, answering order-status questions, sorting a shared inbox, preparing quotes from your price rules, and updating CRM records after calls. The best first jobs have high volume, written rules and data the agent can reach through an API.',
  },
  {
    q: 'What is the best AI agent for business?',
    a: 'The one built into the software where the job already lives, when the job stays inside it. If your sales and service run on Salesforce, start with Agentforce. If your staff live in Microsoft 365, look at Copilot Studio. If the job crosses several systems, such as an inbox, your ERP and your CRM, a custom agent or a custom tool the platform agent can call is usually the better fit.',
  },
  {
    q: 'Can I rent an AI agent?',
    a: 'Yes. Most large software vendors now sell agents inside their products, billed per action, per conversation, per resolution or per user. Salesforce, for example, lists Agentforce Flex Credits at $500 per 100,000 credits, with a standard action using 20 credits (Salesforce pricing page, 18 October 2026). Renting suits jobs that stay inside that vendor\'s product and data.',
  },
  {
    q: 'Should a mid-sized company build or buy AI agents?',
    a: 'Buy when the job lives inside one product that already sells an agent and the systems behind it have modern APIs. Build when the job crosses systems no single product reaches, needs approval rules spanning your ERP and CRM, or depends on data the vendor cannot connect to. Many companies do both: rent the platform agent and have only the missing connection built.',
  },
  {
    q: 'How much do enterprise AI agents cost?',
    a: 'It depends on whether you rent or build. Rented agents bill by usage or seat: Salesforce lists Agentforce add-ons at $125 per user per month and Flex Credits at $500 per 100,000 credits. For building, Layer3 Labs (updated 9 September 2026) puts a production MVP workflow at $5,000 to $25,000 and a full enterprise AI system at $50,000 to $200,000 or more. Those are market figures, not FactoryJet prices.',
  },
  {
    q: 'What is agent washing?',
    a: 'Gartner uses the term for vendors rebranding existing products, such as AI assistants, robotic process automation (RPA) and chatbots, as agents without substantial agentic capabilities. In its 25 June 2025 release Gartner estimated only about 130 of the thousands of agentic AI vendors are real. Ask any vendor to show the agent deciding steps and acting in your systems on your own data.',
  },
  {
    q: 'What is the difference between an AI agent, an AI assistant and automation?',
    a: 'Gartner\'s advice draws the line well: use AI agents when decisions are needed, automation for routine workflows and assistants for simple retrieval. An assistant answers questions. Automation follows fixed rules every time. An agent reads a messy situation, chooses the next step, and acts through tools, which is only worth its extra complexity when there is a real decision to make.',
  },
  {
    q: 'What is enterprise AI used for?',
    a: 'In mid-sized companies the common uses are customer service (answering and routing), sales (research, call notes, CRM updates), finance (invoice matching, collections follow-up), operations (order entry, scheduling, inventory questions) and IT (password and access requests). The agents that last are tied to one owner and one measurable job, not a general "AI for everything" rollout.',
  },
  {
    q: 'What is an enterprise AI agent platform?',
    a: 'A product for building, running and monitoring AI agents across a company: Salesforce Agentforce, Microsoft Copilot Studio and ServiceNow are examples tied to their own products, and there are horizontal platforms too. A platform helps when most of your agents live in its ecosystem. It does not remove the work of connecting the systems it does not reach, or of deciding limits and owners.',
  },
  {
    q: 'Are AI agents worth it for a mid-sized business?',
    a: 'They are when the job has volume, written rules, reachable data and an owner. Gartner predicts over 40% of agentic AI projects will be canceled by the end of 2027 because of escalating costs, unclear business value or inadequate risk controls, so the value case has to be written down first. A demo on your own past cases is the fastest honest test.',
  },
  {
    q: 'Which departments should get AI agents first?',
    a: 'The department with the most repeated, rule-based work between systems, and a leader who will own the result. In mid-sized companies that is often order entry, accounts payable or customer service. Start with one job in one team, measure it, then copy the pattern. Company-wide rollouts before one agent works tend to stall.',
  },
  {
    q: 'Do AI agents replace employees?',
    a: 'In practice, a well-scoped agent takes over the retyping and looking-up part of a job and hands the judgement calls to a person. Most first agents prepare work for a person to approve. The goal to set is a measurable change in how fast and how accurately the work gets done, with the team spending more time on the cases that need them.',
  },
  {
    q: 'How do I know if a vendor\'s AI agent is real?',
    a: 'Ask it to run on your own data, not a demo set. Ask which systems it can act in, what it does when a case falls outside its rules, how every action is logged, how permissions are enforced, and what happens when the model behind it changes. A rebranded chatbot struggles with the second and third questions.',
  },
  {
    q: 'Can an AI agent work across Salesforce and our ERP?',
    a: 'Yes, but usually not out of the box. Agentforce builds its actions from your Salesforce flows, Apex code and APIs, so an agent can act in your ERP if someone builds an API or tool for the ERP that Salesforce can call. That connection, plus the approval rules between the two systems, is the custom part.',
  },
  {
    q: 'What is a custom AI agent?',
    a: 'An agent designed for your process and systems rather than a product\'s, usually built on a model API with tools that connect to your ERP, CRM, inbox and files. You own the code, choose the model, and set the limits. It costs more up front than turning on a product feature, and pays off when the job crosses systems or rules no product handles.',
  },
  {
    q: 'How long does it take to roll out enterprise AI agents?',
    a: 'One agent for one job comes first. A sensible sequence is a proof of concept on your past cases, a supervised pilot on live work, then production with logging and monitoring, each with its own pass mark and end date. The second and third agents go faster because the tools, logs and approval queue already exist.',
  },
  {
    q: 'What risks come with enterprise AI agents?',
    a: 'Agents with too many permissions, agents tricked by hidden instructions in emails or documents, wrong answers reaching customers, and quality drifting after a model update. OWASP\'s Top 10 for Agentic Applications (December 2025) lists ten such risks. Most are handled by narrow permissions, approval for high-impact actions, logs and testing.',
  },
  {
    q: 'Do we need an AI governance policy before deploying agents?',
    a: 'Yes, and it can be short: who owns each agent, how much it may do alone, what a person must approve, what it may touch, what is logged and who can switch it off. Our free AI agent governance policy template covers those in 14 sections you can fill in before the first build.',
  },
  {
    q: 'What should we ask before signing an enterprise AI agent contract?',
    a: 'Who owns the code, prompts, test set and logs; whether model and hosting accounts can sit in your name; how usage is billed and capped; how permissions are scoped; how the agent is tested on your own cases; what happens when a model is retired; who responds to a serious incident and how fast; and whether you can see it working on your own data before you sign.',
  },
  {
    q: 'Is Microsoft Copilot an AI agent?',
    a: 'Microsoft 365 Copilot is mainly an assistant inside Office apps. Copilot Studio is Microsoft\'s tool for building agents that take actions. If your work lives in Microsoft 365 and the actions stay inside Microsoft\'s connectors, Copilot Studio is a natural starting point. Work that must act in systems outside that reach needs a custom connection.',
  },
];

export const post: BlogPost = {
  id: '769',
  slug: 'enterprise-ai-agents-mid-sized-companies-buy-or-build-2026',
  title: 'Enterprise AI Agents for Mid-Sized Companies: What to Buy, What to Build (2026)',
  excerpt:
    'How a company of 100 to 2,000 people should choose AI agents: Gartner\'s rule for agents vs automation vs assistants, when to rent the agent inside Salesforce, Microsoft or your help desk, when to build custom, the middle route, how to spot agent washing, and what each route costs in the market.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Oct 18, 2026',
  dateModified: 'Oct 18, 2026',
  readTime: '15 min read',
  imageUrl: `${IMG}/hero.webp`,
  imageAlt:
    'A white-bearded man in a navy sweater points at the one orange card among three columns of grey cards on a wall display while three seated colleagues watch from a meeting table.',
  meta: {
    title: 'Enterprise AI Agents: What Mid-Sized Companies Should Buy or Build',
    description:
      'Enterprise AI agents for mid-sized companies: when to rent the agent in Salesforce or Microsoft, when to build custom, agent washing, and market costs.',
  },
  keyTakeaways: [
    'Rent the agent built into the software where a job already lives. Build custom when the job crosses systems no single product reaches.',
    'Gartner\'s rule of thumb: use AI agents when decisions are needed, automation for routine workflows and assistants for simple retrieval.',
    'Gartner estimates only about 130 of the thousands of agentic AI vendors are real, and calls the rest "agent washing" (25 June 2025).',
    'Gartner also predicts 33% of enterprise software applications will include agentic AI by 2028, up from less than 1% in 2024. Many of your vendors will offer an agent soon.',
    'The middle route is common: keep the platform agent and have only the missing connection to your ERP or other system built.',
    'Salesforce lists Agentforce add-ons at $125 per user per month and Flex Credits at $500 per 100,000 credits (18 October 2026). Layer3 Labs puts a production MVP workflow build at $5,000 to $25,000.',
    'Start with one job, one owner and a demo on your own data before you sign anything bigger.',
  ],
  faqs,
  content: (
    <article>
      {/* Answer-first block */}
      <div className="bg-white border-2 border-[#E5DFD7] rounded-xl p-6 sm:p-8 mb-10">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-3">The short answer</p>
        <p className="text-lg leading-relaxed mb-0">
          A mid-sized company should <strong>rent the AI agent</strong> built into the software where a job already
          lives, such as Salesforce, Microsoft 365 or its help desk, when the job stays inside that product. It should{' '}
          <strong>build a custom agent</strong>, or a custom connection the platform agent can call, when the job
          crosses systems no single product reaches. Either way, start with one job and see it work on your own data.
        </p>
      </div>

      <div className="bg-[#FAF8F5] border-l-4 border-[#B23E13] p-5 rounded-r-lg mb-10">
        <p className="text-sm text-[#1F2937] leading-relaxed mb-0">
          <strong>We build custom agents and do Salesforce and Agentforce work, so weigh this page with that in mind.</strong>{' '}
          Outside facts come from Gartner, Salesforce, Anthropic and Layer3 Labs pages opened on 17 and 18 October 2026
          and linked where they appear. Prices are vendors&apos; list prices or a named market range, never ours. Search
          figures are our own DataForSEO measurement for the US on 17 October 2026.
        </p>
      </div>

      <p>
        US searches for &quot;ai agents for business&quot; reached about 3,600 a month in October 2026, up more than
        fifty-fold on a year earlier, and &quot;enterprise ai agents&quot; about 2,400, with advertisers paying close to
        $89 a click (DataForSEO, 17 October 2026). That click price tells you how hard vendors are competing for the
        same buyer you are. Gartner{' '}
        <a href={SRC.gartner40} {...ext}>predicts</a> that 33% of enterprise software applications will include agentic
        AI by 2028, up from less than 1% in 2024. In plain terms: most software you already pay for will soon offer you
        an agent.
      </p>
      <p>
        So the question for a company of a few hundred people is less &quot;should we use AI agents?&quot; and more
        &quot;which ones do we rent, which do we build, and in what order?&quot; This guide answers that.
      </p>

      <h2 id="agent-assistant-automation">Agent, assistant or automation: use the right tool for each job</h2>
      <p>
        The same Gartner release gives the clearest rule we have seen: start by using{' '}
        <strong>AI agents when decisions are needed, automation for routine workflows and assistants for simple
        retrieval</strong>. Most failed projects we hear about used an agent for a job that needed one of the other two.
      </p>
      <Table
        head={['Tool', 'Use it when', 'Example in a mid-sized company']}
        rows={[
          ['Assistant', 'Someone needs an answer from documents or data', 'Staff ask about the returns policy or a customer\'s last order'],
          ['Automation', 'The steps are the same every time', 'A paid invoice marks the deal closed in the CRM'],
          ['AI agent', 'Each case needs a judgement before acting', 'An emailed PO is read, matched, checked and turned into a draft sales order'],
        ]}
      />
      <p>
        Anthropic&apos;s engineering guide <a href={SRC.anthropic} {...ext}>Building effective agents</a> makes the same
        point from the builder&apos;s side: find the simplest solution possible and add agentic systems only when
        simpler ones fall short.
      </p>

      <h2 id="rent">When renting the agent inside your software is the right call</h2>
      <p>Rent first when all four of these are true:</p>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li>The job starts and ends inside one product: your CRM, help desk or Microsoft 365.</li>
        <li>The data the agent needs already lives in that product or in systems it connects to.</li>
        <li>The vendor&apos;s billing unit (action, conversation, resolution or seat) is something you can forecast.</li>
        <li>You are comfortable with the vendor&apos;s limits on what the agent can do and how it is tested.</li>
      </ol>
      <Table
        head={['If your work lives in', 'Rent first', 'What usually needs adding']}
        rows={[
          ['Salesforce', 'Salesforce Agentforce', 'Actions in your ERP, EDI or other systems outside Salesforce'],
          ['Microsoft 365', 'Microsoft Copilot Studio', 'Actions in line-of-business systems Microsoft does not connect to'],
          ['A help desk (Zendesk, Intercom, Gorgias)', 'The help desk\'s own AI agent', 'Order, stock or billing actions in systems the help desk cannot reach'],
          ['ServiceNow', 'ServiceNow\'s agents', 'Work that happens outside IT and HR service requests'],
        ]}
      />
      <p>
        We compare the support-desk agents in detail in{' '}
        <a href="/blog/intercom-fin-vs-zendesk-ai-vs-custom-ai-agent-2026">Intercom Fin vs Zendesk AI vs a custom agent</a>,
        and Salesforce&apos;s pricing in{' '}
        <a href="/blog/agentforce-pricing-vs-custom-ai-agent-2026">Agentforce pricing vs a custom AI agent</a>.
      </p>

      <h2 id="build">When a custom AI agent is the right call</h2>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li><strong>The job crosses systems.</strong> An emailed PO touches the inbox, the ERP, the price list and the CRM.</li>
        <li><strong>A system has no connector.</strong> An older ERP, an EDI feed or a database on your own server.</li>
        <li><strong>Approval rules span systems.</strong> A discount over a limit needs finance approval in one system before an order changes in another.</li>
        <li><strong>The work is not a ticket or a chat.</strong> Quoting, order entry, reconciliation and document intake often happen outside any help desk.</li>
        <li><strong>You need to own it.</strong> Code, prompts, test set and logs in your accounts, with the model swappable.</li>
      </ol>
      <p>
        Our <a href="/blog/agentic-ai-architecture-mid-sized-companies-2026">agentic AI architecture guide</a> shows how
        a custom agent sits on top of your ERP and CRM without changing them.
      </p>

      <figure className="my-8">
        <img
          src={`${IMG}/comparison.webp`}
          alt="Seen over her shoulder, a woman with short dark hair in a rust cardigan reviews a monitor showing a three-column comparison table, an orange folder beside her keyboard."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Lay the jobs out side by side: which product each lives in, and which systems it has to reach.
        </figcaption>
      </figure>

      <h2 id="middle-route">The middle route: rent the agent, build the missing piece</h2>
      <p>
        Many mid-sized companies end up here. Keep the platform agent for the conversation, the reporting and the parts
        that live in its product, and have one connection built for the system it cannot reach. Agentforce, for
        example, builds its actions from your Salesforce flows, Apex code and APIs, so a custom API or MCP server in
        front of your ERP lets an Agentforce agent check stock or create a draft order. It is usually the smallest
        project that closes the gap, and we do both halves: the Salesforce side and the{' '}
        <a href="/services/ai-integration-services">custom integration</a>.
      </p>

      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg my-8">
        <h3 className="text-lg font-bold mb-3">Not sure which of your jobs to rent and which to build?</h3>
        <p className="mb-4">
          Bring your three most repeated jobs and the systems each one touches. In a 30-minute call with founder Bhavesh
          Barot we will tell you which can be rented as sold, which need one connection built, and which need a custom
          agent. FactoryJet quotes a fixed price in writing after that call, and we can show working software on your own
          data before a contract.
        </p>
        <a
          href="https://calendly.com/bhavesh-factoryjet/30min"
          {...ext}
          className="inline-block bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors"
        >
          Talk to the Founder
        </a>
      </div>

      <h2 id="by-department">Rent or build, department by department</h2>
      <Table
        head={['Department', 'Common first job', 'Usually rent when', 'Usually build when']}
        rows={[
          ['Customer service', 'Order status, returns, routing', 'Tickets and answers live in one help desk', 'Answers need ERP, warehouse or billing data'],
          ['Sales', 'Call notes, CRM updates, lead research', 'Everything lives in the CRM', 'Quotes need your ERP price rules or stock'],
          ['Finance', 'Invoice matching, collections follow-up', 'Your accounting product sells the feature', 'Matching spans ERP, inbox and bank files'],
          ['Operations', 'Order entry from email or PDF', 'Rarely: orders arrive in too many formats', 'Orders come by email, EDI and portal'],
          ['IT and HR', 'Access requests, policy questions', 'You run ServiceNow or Microsoft 365', 'Requests need actions in many internal tools'],
        ]}
      />

      <h2 id="agent-washing">How to spot agent washing: six questions for any vendor</h2>
      <p>
        Gartner warns that many vendors are rebranding assistants, RPA and chatbots as agents, and{' '}
        <a href={SRC.gartner40} {...ext}>estimates</a> only about 130 of the thousands of agentic AI vendors are real.
        Six questions sort them quickly:
      </p>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li>Will you run it on our own data before we sign?</li>
        <li>Which of our systems can it act in, and through what?</li>
        <li>What does it do with a case outside its rules?</li>
        <li>How is every action logged, and can we search the log by order or invoice number?</li>
        <li>Where are permissions enforced: in the prompt, or in the system it acts on?</li>
        <li>What happens when the model behind it is retired?</li>
      </ol>

      <h2 id="cost">What each route costs in the market</h2>
      <p>The billing models differ, so compare what each counts rather than a headline number.</p>
      <Table
        head={['Route', 'How it is billed', 'Published figures']}
        rows={[
          [
            'Salesforce Agentforce',
            'Flex Credits per action, per-user add-ons, or an Agentforce user license that needs Flex Credits',
            <span key="a">
              $500 per 100,000 Flex Credits, 20 credits per standard action; add-ons $125 per user per month; user license
              $5 per user per month plus credits (<a href={SRC.agentforcePricing} {...ext}>Salesforce, read 18 October 2026</a>)
            </span>,
          ],
          ['Other platform agents', 'Per resolution, conversation, outcome or seat', 'Varies by vendor; read each vendor\'s own pricing page on the day'],
          [
            'Custom build',
            'A project price for the build',
            <span key="b">
              Production MVP workflow $5,000 to $25,000; full enterprise AI system $50,000 to $200,000 or more (
              <a href={SRC.layer3} {...ext}>Layer3 Labs, updated 9 September 2026</a>)
            </span>,
          ],
        ]}
      />
      <p>
        Those are market figures, not FactoryJet prices. FactoryJet quotes the build, and any support you choose, as
        fixed prices in writing after a short scoping call. For the long version, read{' '}
        <a href="/blog/what-is-an-ai-agent-cost-2026">what an AI agent costs</a>.
      </p>

      <h2 id="order">The order we suggest for a mid-sized company</h2>
      <ol className="list-decimal pl-6 space-y-3 mb-6">
        <li><strong>List the jobs.</strong> Every repeated job between systems, with weekly volume and an owner.</li>
        <li><strong>Mark each one</strong> assistant, automation or agent, using Gartner&apos;s rule above.</li>
        <li><strong>Turn on what you already pay for</strong> where a job lives inside one product.</li>
        <li><strong>Pick one cross-system job</strong> and run a <a href="/blog/ai-proof-of-concept-to-production-2026">proof of concept</a> on your own past cases.</li>
        <li><strong>Write the rules</strong> before the pilot, using our <a href="/blog/ai-agent-governance-policy-mid-sized-companies-2026">AI agent governance template</a>.</li>
        <li><strong>Secure it</strong> against the risks in our <a href="/blog/ai-agent-security-risks-controls-2026">AI agent security guide</a>, then go live and copy the pattern.</li>
      </ol>

      <h2 id="how-factoryjet-works">How FactoryJet helps mid-sized companies choose and build</h2>
      <p>
        We design, build, implement and support custom AI agents, and we do Salesforce and Agentforce work, so we can
        recommend renting, building or the middle route without a stake in only one. You own what we build: the code
        and repository from day one, with AI and hosting accounts in your name at cost if you want. We show working
        software on your own data before you sign.
      </p>
      <p>
        See <a href="/services/ai-agent-development">AI agent development</a>,{' '}
        <a href="/services/ai-consulting">AI consulting</a>,{' '}
        <a href="/services/erp-ai-agents">AI agents for ERP systems</a> and{' '}
        <a href="/services/ai-customer-support-agents">AI customer support agents</a>, or our broader{' '}
        <a href="/blog/ai-agent-build-vs-buy-2026">AI agent build versus buy guide</a>.
      </p>

      <h2 id="sources">Sources</h2>
      <p className="text-sm text-gray-600">Pages opened and read on 17 and 18 October 2026.</p>
      <ul className="list-disc pl-6 space-y-1 text-sm mb-8">
        <li><a href={SRC.gartner40} {...ext}>Gartner, Gartner Predicts Over 40% of Agentic AI Projects Will Be Canceled by End of 2027</a> (25 June 2025)</li>
        <li><a href={SRC.agentforcePricing} {...ext}>Salesforce, Agentforce pricing</a> (read 18 October 2026)</li>
        <li><a href={SRC.anthropic} {...ext}>Anthropic, Building effective agents</a> (19 December 2024)</li>
        <li><a href={SRC.layer3} {...ext}>Layer3 Labs, AI consulting rates and pricing</a> (updated 9 September 2026)</li>
        <li>Our own measurement: US search volumes, year-on-year change and click prices, DataForSEO, 17 October 2026</li>
      </ul>

      <div className="bg-[#FAF8F5] border-2 border-[#E5DFD7] p-6 sm:p-8 rounded-xl my-10 shadow-sm">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-2">
          Rent or build review for mid-sized US companies
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] mb-3">
          Find out which AI agents to rent, which to build, and see one work on your data
        </h3>
        <p className="text-[#4B5563] text-base leading-relaxed mb-6">
          Tell us your main systems and the jobs your team repeats. We will tell you straight which ones the software you
          already pay for can do, which need one connection built, and which need a custom agent. FactoryJet quotes a
          fixed price in writing after a short scoping call.
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

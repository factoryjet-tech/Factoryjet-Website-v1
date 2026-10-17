import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';
import GatedDownload from '@/components/blog/GatedDownload';

/*
 * AI agent governance for mid-sized companies (US, 2026). Written 17 Oct 2026.
 * Target terms (DataForSEO, US, 17 Oct 2026): ai agent governance 260/mo KD 7, agentic ai governance 260/mo KD 9,
 * agentic ai risks 110, agentic ai risk management 70, ai agent governance framework 40, human in the loop ai agents.
 * Outside facts come only from pages opened on 17 Oct 2026 (NIST, OWASP, ISO, Gartner), linked in SRC.
 * The gated download is public/downloads/ai-agent-governance-policy-template.docx, built by
 * pipeline/research/build_governance_template_2026_10_17.py.
 * No FactoryJet prices, no running-cost figures, no team location.
 * The FAQ array below is the single source for both the visible FAQ and the FAQPage JSON-LD
 * (the blog route maps post.faqs into schema).
 */

const SRC = {
  nistRmf: 'https://www.nist.gov/itl/ai-risk-management-framework',
  owaspLlm06: 'https://genai.owasp.org/llmrisk/llm062025-excessive-agency/',
  owaspAgentic: 'https://genai.owasp.org/resource/agentic-ai-threats-and-mitigations/',
  iso42001: 'https://www.iso.org/standard/42001',
  gartner40: 'https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027',
};

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

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
    q: 'What is AI agent governance?',
    a: 'AI agent governance is the set of written rules that decide who approves an AI agent, which systems and data it can touch, which actions need a person to approve, how its work is logged and watched, and who can switch it off. It differs from general AI governance because an agent takes actions in your systems, so the rules have to cover permissions and limits, not only how a model answers questions.',
  },
  {
    q: 'What is agentic AI governance?',
    a: 'It is the same idea applied to agentic AI, meaning AI that plans steps and calls tools on its own. In practice the two terms are used for the same thing. Agentic AI governance sets an autonomy level for each agent, limits what each tool can do, requires approval for high-impact actions, logs every action, and names an owner who answers for the outcome.',
  },
  {
    q: 'What are the biggest risks of agentic AI for a business?',
    a: 'For a mid-sized company the risks that actually bite are practical: an agent with more permissions than its job needs, an agent acting on hidden instructions inside an email or document, a wrong answer sent straight to a customer, money or data moved without a person checking, and nobody noticing quality drift after a model update. OWASP names the root cause of the damaging ones as excessive functionality, permissions or autonomy.',
  },
  {
    q: 'Is agentic AI a threat?',
    a: 'Agentic AI is a risk you manage, like giving a new hire system access. The threat comes from giving an agent broad access with no limits, no logs and no owner. Gartner predicts over 40% of agentic AI projects will be canceled by the end of 2027, and inadequate risk controls is one of the three reasons it gives, alongside cost and unclear value.',
  },
  {
    q: 'What does human in the loop mean for AI agents?',
    a: 'Human in the loop means a person approves the agent\'s work before it takes effect, for example clicking approve before a purchase order is sent. Human on the loop means the agent acts on its own and a person watches reports and alerts and can step in. Most first agents should start with a person in the loop and move to on the loop only after they meet their targets for a set period.',
  },
  {
    q: 'What is the difference between human-in-the-loop and human-on-the-loop?',
    a: 'In the loop: nothing happens until a person approves each item. On the loop: the agent acts within set limits and a person reviews samples, alerts and a daily or weekly report. In the loop is slower but safer for money, customers and master data. On the loop suits high-volume, low-risk work once the agent has a track record on your own cases.',
  },
  {
    q: 'Is human-in-the-loop still agentic AI?',
    a: 'Yes. The agent still reads the situation, plans the steps and prepares the action. A person only confirms the last step. Most of the time saved comes from the preparation, so an agent that drafts every purchase order for approval can still remove most of the manual work while the risk stays low.',
  },
  {
    q: 'What should an AI governance policy include?',
    a: 'At minimum: scope, named roles, a register of every agent, autonomy levels, access rules, written limits for when a person must approve, data handling, logging, testing before go-live, monitoring, an incident and switch-off procedure, change control, vendor terms and a sign-off page. Our free template covers each of these in about 1,600 words with blanks to fill in.',
  },
  {
    q: 'Is there an AI governance policy template I can use?',
    a: 'Yes. FactoryJet publishes a free, editable Word template for AI agents on this page. It has 14 sections, an agent register, an autonomy-level table, an approval-limits table and a go-live checklist, and it maps each section to the NIST AI RMF, OWASP LLM06 and ISO/IEC 42001. It is a starting point, not legal advice.',
  },
  {
    q: 'What are the four functions of the NIST AI Risk Management Framework?',
    a: 'Govern, Map, Measure and Manage. NIST released AI RMF 1.0 on 26 January 2023 for voluntary use, and added a Generative AI Profile (NIST-AI-600-1) on 26 July 2024. NIST says the framework is being revised as part of the White House AI Action Plan. For an agent, Govern covers owners and policy, Map covers what it touches, Measure covers testing, and Manage covers monitoring and response.',
  },
  {
    q: 'Do I need ISO 42001 to use AI agents?',
    a: 'No. ISO/IEC 42001:2023 is a voluntary standard for an AI management system. A mid-sized company can run agents safely with a written policy, named owners and the controls on this page. Certification makes sense when large customers or regulators ask for it, or when AI is a large part of what you sell.',
  },
  {
    q: 'What are the governance principles of agentic AI?',
    a: 'Four hold up in practice. Least privilege: the agent gets only the tools and permissions its job needs. Approval in proportion to impact: money, customers and master data need a person. Traceability: every action is logged and can be searched. Accountability: a named person owns each agent and can switch it off. Everything else in a policy supports one of these four.',
  },
  {
    q: 'What is a major governance challenge for agentic AI?',
    a: 'Permissions. Agents are often connected with an admin account or a person\'s login because it is quickest, which hands them far more power than the job needs. The fix is a dedicated service account per agent, read-only by default, with write access granted per action and checked inside the target system, not only in the agent\'s instructions.',
  },
  {
    q: 'How do you secure agentic AI?',
    a: 'Limit what it can do, not only what it is told. Give each agent its own service account, remove tools it does not need, keep secrets in a vault, require approval for high-impact actions, enforce permissions in the systems it calls, test it against documents with hidden instructions, and log every tool call. OWASP lists these among its mitigations for Excessive Agency.',
  },
  {
    q: 'Who should own AI agent governance in a mid-sized company?',
    a: 'One named agent owner per agent, usually the head of the team whose work the agent does, with a technical owner for access and logging and a security or data reviewer. Company-wide, one person (often the COO, CFO or head of IT) keeps the agent register and the policy. A committee is not needed until you run more than a handful of agents.',
  },
  {
    q: 'How long does it take to put AI agent governance in place?',
    a: 'For a first agent, about four weeks alongside the build: week one for roles, register and limits, week two for access and logging, week three for testing on your own past cases, week four for sign-off and a supervised start. Governance written after an agent is live usually takes longer, because access has to be pulled back.',
  },
  {
    q: 'Do I need an AI agent governance platform?',
    a: 'Not for your first few agents. Platforms help collect logs, show dashboards and send alerts, and they become useful as the number of agents grows. They do not decide your limits, owners or approval rules. Write the policy first, then pick tooling that records what the policy asks for.',
  },
  {
    q: 'Can an AI agent be tricked into doing something it should not?',
    a: 'Yes, through prompt injection: instructions hidden in an email, PDF or web page the agent reads. The defence is layered. The agent should ignore instructions found in content, its tools should not allow out-of-scope actions, high-impact actions should need approval, and the target system should refuse what the agent\'s account is not allowed to do. Test this before go-live.',
  },
  {
    q: 'What should an AI agent never be allowed to do?',
    a: 'Agree to contracts, prices or legal terms; make or schedule payments alone; delete or overwrite records alone; change its own instructions, permissions or logs; or share personal, financial or health data outside an approved list. Write these into the policy as hard rules and enforce them through permissions, not through instructions alone.',
  },
  {
    q: 'How do you monitor an AI agent in production?',
    a: 'Track a few numbers with alert levels: the share of cases handed to a person, how often approvers change the agent\'s drafts, failed tool calls, actions blocked by the target system, and complaints linked to the agent. Review a sample of its work daily at first, then weekly. Re-test against your test set whenever the model or instructions change.',
  },
  {
    q: 'What happens when the AI model behind an agent is updated or retired?',
    a: 'Its behavior can change even if nobody touches your agent. Model providers publish retirement dates, so the technical owner should track them for every model in use, re-run the agent against its test set before switching, and record the result. Our AI agent support page covers how we handle this for agents we run.',
  },
  {
    q: 'Does governance slow AI agent projects down?',
    a: 'It adds a few days of decisions up front and saves weeks later. Projects stall when nobody agreed who approves go-live, what the agent may touch, or what counts as good enough. Writing those down before the build gives the engineers clear limits to build to and gives the business a clear yes or no at sign-off.',
  },
  {
    q: 'What should I ask a vendor about governance before hiring them to build an agent?',
    a: 'Ask who owns the code, prompts, test set and logs; whether model and hosting accounts can be in your name; how permissions are scoped; what is logged; how the agent is tested on your own cases before go-live; who the named engineer is; how fast they respond to a serious incident; and whether they will show the agent working on your data before you sign.',
  },
  {
    q: 'What is an AI agent governance framework?',
    a: 'An AI agent governance framework is the structure behind your policy: who owns each agent, how autonomy is granted, how access is limited, how actions are logged and tested, and how incidents are handled. Most companies borrow the structure from the NIST AI RMF (Govern, Map, Measure, Manage) and the controls from OWASP\'s guidance on Excessive Agency, then write their own limits on top.',
  },
  {
    q: 'Is there an AI agent governance certification?',
    a: 'There is no single certification for AI agents. Organizations can be certified against ISO/IEC 42001:2023, the international standard for an AI management system, through accredited certification bodies. For individuals there are many courses. For a mid-sized company, a written policy, named owners and logs matter more than a certificate until a large customer asks for one.',
  },
];

export const post: BlogPost = {
  id: '766',
  slug: 'ai-agent-governance-policy-mid-sized-companies-2026',
  title: 'AI Agent Governance for Mid-Sized Companies: The Policy to Set Before an Agent Goes Live (2026)',
  excerpt:
    'A working AI agent governance policy for a company of roughly 100 to 2,000 people: four autonomy levels, written approval limits, access rules, logging, testing and an off switch, mapped to NIST AI RMF, OWASP LLM06 and ISO/IEC 42001. Includes a free, editable policy template.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Oct 17, 2026',
  dateModified: 'Oct 17, 2026',
  readTime: '16 min read',
  imageUrl: '/images/blog/ai-agent-governance-policy-mid-sized-companies-2026/hero.webp',
  imageAlt:
    'Three colleagues at a light oak meeting table review a single printed page, a woman in a navy blazer holding it while a grey-haired man points and a woman in a grey sweater takes notes beside an orange folder.',
  meta: {
    title: 'AI Agent Governance: A Policy for Mid-Sized Companies',
    description:
      'AI agent governance for mid-sized companies: autonomy levels, approval limits, access, logging and an off switch. Free editable policy template.',
  },
  keyTakeaways: [
    'AI agent governance answers four questions before go-live: who approves the agent, what it can touch, when a person must check its work, and who can switch it off.',
    'Start every agent at the lowest autonomy level that still saves time, usually "draft for approval", and move up one level only after it meets written targets on your own cases.',
    'OWASP names three root causes of damaging agent actions: excessive functionality, excessive permissions and excessive autonomy. Most of a good policy is limiting those three.',
    'Write limits as numbers and lists, not judgement calls. Payments, deletions, price changes and contract terms should never be done by an agent alone.',
    'Gartner predicts over 40% of agentic AI projects will be canceled by the end of 2027, and lists inadequate risk controls as one of three reasons (press release, 25 June 2025).',
    'A mid-sized company does not need ISO/IEC 42001 certification or a governance platform to start. It needs a written policy, named owners and logs.',
    'Download the free 14-section policy template on this page and fill in the blanks for your first agent.',
  ],
  faqs,
  content: (
    <article>
      {/* Answer-first block */}
      <div className="bg-white border-2 border-[#E5DFD7] rounded-xl p-6 sm:p-8 mb-10">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-3">The short answer</p>
        <p className="text-lg leading-relaxed mb-0">
          <strong>AI agent governance</strong> is a written policy that names an owner for each agent, sets how much it
          may do on its own, lists what a person must approve, limits its access to what the job needs, logs every
          action, and says who can switch it off. A mid-sized company can set one up in about four weeks alongside its
          first agent build.
        </p>
      </div>

      <div className="bg-[#FAF8F5] border-l-4 border-[#B23E13] p-5 rounded-r-lg mb-10">
        <p className="text-sm text-[#1F2937] leading-relaxed mb-0">
          <strong>We design, build and support custom AI agents, so weigh this page with that in mind.</strong> The
          outside facts come from NIST, OWASP, ISO and Gartner pages we opened on 17 October 2026, linked where they
          appear. Search figures are our own DataForSEO measurement for the US on the same day. The policy template is
          ours, free to adapt inside your company, and not legal advice.
        </p>
      </div>

      <p>
        US searches for &quot;ai agent governance&quot; ran about 260 a month in October 2026, up 586% on a year
        earlier, and &quot;agentic ai governance&quot; another 260, up 457% (DataForSEO, 17 October 2026). The people
        searching are mostly not at the largest enterprises, which already have AI committees. They are operations,
        finance and IT leads at companies of a few hundred people who have just approved a first agent and need rules
        for it by next month.
      </p>
      <p>
        This guide is for them. It covers what governance has to decide, a four-level autonomy scale, the limits worth
        writing down, the frameworks worth knowing (and which to skip at your size), and a 30-day plan. The{' '}
        <a href="#template">free policy template</a> turns all of it into blanks you can fill in.
      </p>

      <h2 id="what-it-is">What AI agent governance means, and how it differs from AI governance</h2>
      <p>
        An <strong>AI agent</strong> is software that uses a large language model (LLM, the kind of model behind
        ChatGPT or Claude) to decide its next step and then calls a tool: it reads a record, sends an email, updates an
        order. General AI governance mostly asks whether a model&apos;s answers are fair, accurate and safe to show
        people. <strong>Agent governance</strong> adds a harder question: what is this software allowed to do in our
        systems, and what happens when it gets it wrong?
      </p>
      <p>
        That is why agent policies read more like an access policy for a new hire than an ethics statement. You would
        not give a new accounts clerk the CFO&apos;s login on day one. The same logic applies to an agent, with one
        difference: an agent can repeat a mistake a thousand times an hour if nothing stops it.
      </p>

      <h2 id="four-questions">The four questions every AI agent governance policy must answer</h2>
      <ol className="list-decimal pl-6 space-y-3 mb-6">
        <li>
          <strong>Who approves it?</strong> One named agent owner per agent, plus a business approver for the job and
          limits, a technical owner for access and logs, and a security or data reviewer.
        </li>
        <li>
          <strong>What can it touch?</strong> Which systems it reads, which it writes to, which data types it sees, and
          which model provider receives that data.
        </li>
        <li>
          <strong>When must a person check?</strong> Written limits: values, record types and actions that always go to
          a person, and how fast that person must respond.
        </li>
        <li>
          <strong>How do we stop it?</strong> Who can switch it off, how, how fast, and which team does the work by hand
          while it is off.
        </li>
      </ol>
      <p>
        If your policy answers those four for every agent, you are ahead of most companies running agents today. The
        rest of this page is detail on each.
      </p>

      <h2 id="autonomy-levels">Four autonomy levels: decide how much the agent does alone</h2>
      <p>
        The single most useful decision is the autonomy level. Pick the lowest one that still saves real time, then
        move up one level only after the agent meets its targets for a period you set in advance.
      </p>
      <Table
        head={['Level', 'What the agent may do', 'Who checks', 'Typical first use']}
        rows={[
          ['0. Suggest', 'Reads data and suggests. Changes nothing.', 'A person acts on the suggestion', 'Drafting replies a rep can copy'],
          ['1. Draft for approval', 'Prepares the action. A person clicks approve before anything is sent or saved.', 'Named approver, every item', 'Purchase orders saved as drafts in the ERP'],
          ['2. Act within limits', 'Acts alone inside written limits. Anything outside goes to a person.', 'Daily sample plus alerts', 'Order status updates and customer emails'],
          ['3. Act and report', 'Acts alone across the whole job. A person reviews a report.', 'Weekly report review', 'Routine matched invoices'],
        ]}
      />
      <p>
        Most first agents we see belong at level 1. The time saving still comes through, because the slow part of
        most back-office work is gathering the information and preparing the record, not the final click. A level 1
        agent that prepares 200 purchase orders a week for one person to approve is a large win with little risk.
      </p>

      <h3 id="in-the-loop">Human in the loop vs human on the loop</h3>
      <p>
        Levels 0 and 1 keep a <strong>human in the loop</strong>: nothing happens until a person approves it. Levels 2
        and 3 put a <strong>human on the loop</strong>: the agent acts, and a person watches samples, alerts and reports
        and can step in. In the loop suits money, customers and master data. On the loop suits high-volume, low-risk
        work where the agent has a track record on your own cases.
      </p>

      <figure className="my-8">
        <img
          src="/images/blog/ai-agent-governance-policy-mid-sized-companies-2026/approval-queue.webp"
          alt="Seen over his shoulder, a man in an olive overshirt reviews a monitor showing a list of rows marked with green and orange dots, his hand on a black mouse beside an orange mug."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          At level 1 the agent prepares the work and a person approves each item from a queue.
        </figcaption>
      </figure>

      <h2 id="limits">Write limits as numbers, not judgement</h2>
      <p>
        &quot;Use good judgement on refunds&quot; is not a limit. &quot;Refunds under $200 with reason code 3 or 7;
        everything else to the support lead within four hours&quot; is. If a limit cannot be written down, the action
        needs a person. Here is the table we suggest starting from (the dollar values are placeholders for you to set).
      </p>
      <Table
        head={['Action', 'Agent may act alone when', 'Otherwise goes to']}
        rows={[
          ['Message a customer or supplier', 'Message uses an approved template and the record matches', 'Account owner'],
          ['Create or change an order, quote or invoice', 'Value under a limit you set', 'Team lead'],
          ['Refund, credit or discount', 'Under a limit, with an approved reason code', 'Support or finance lead'],
          ['Change a price, term or master record', 'Never alone', 'Business approver'],
          ['Delete or overwrite data', 'Never alone', 'Technical owner'],
          ['Make or schedule a payment', 'Never alone', 'Finance approver'],
        ]}
      />
      <p>And a short list the agent must never do, whatever its level:</p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Agree to a contract, price or legal term on the company&apos;s behalf.</li>
        <li>Share personal, financial or health data outside an approved list.</li>
        <li>Change its own instructions, permissions, limits or logs.</li>
        <li>Follow instructions found inside an email, document or web page when they ask for something outside its job.</li>
      </ul>

      <h2 id="risks">Agentic AI risks that actually happen in a mid-sized company</h2>
      <p>
        The OWASP Top 10 for LLM Applications 2025 calls the core problem{' '}
        <a href={SRC.owaspLlm06} {...ext}>Excessive Agency</a>: damaging actions taken in response to unexpected,
        ambiguous or manipulated model output. It traces the root cause to one or more of three things: excessive
        functionality, excessive permissions and excessive autonomy. Here is how those show up in ordinary companies. Agentic AI risk management, in practice, means giving each one a control and an owner.
      </p>
      <Table
        head={['Risk', 'What it looks like', 'The control']}
        rows={[
          ['Too many permissions', 'The agent connects with an admin account or a person\'s login because it was quickest', 'One service account per agent, read-only by default, write access per action'],
          ['Too many tools', 'A "run any query" or open web tool when the job needs two specific lookups', 'Narrow, purpose-built tools only; remove the rest'],
          ['Too much autonomy', 'Customer emails or ERP updates go out with no review in week one', 'Start at level 1; move up on evidence'],
          ['Hidden instructions', 'A supplier PDF contains text telling the agent to change bank details', 'Ignore instructions in content; approval on payment data; target system refuses'],
          ['Quiet drift', 'Answers get worse after a model update and nobody notices for a month', 'Alerts on handoff and override rates; re-test on every change'],
          ['No owner', 'The agent breaks, and IT, the vendor and the business each think another team owns it', 'Named agent owner and technical owner in the register'],
        ]}
      />
      <p>
        OWASP&apos;s Agentic Security Initiative goes further in its{' '}
        <a href={SRC.owaspAgentic} {...ext}>Agentic AI Threats and Mitigations</a> guide (17 February 2025), which is
        worth a read for your technical owner. For a policy, the six rows above cover what most mid-sized companies
        will meet in their first year. Our{' '}
        <a href="/blog/ai-agent-security-risks-controls-2026">AI agent security guide</a> walks through the full OWASP agentic
        Top 10 with a control for each.
      </p>

      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg my-8">
        <h3 className="text-lg font-bold mb-3">Planning your first agent and want the limits checked?</h3>
        <p className="mb-4">
          Bring the job you want automated and the systems it touches. In a 30-minute call with founder Bhavesh Barot we
          will suggest an autonomy level, the limits worth writing down and what to log. FactoryJet quotes a fixed price
          in writing after that call, and we can show working software on your own data before a contract.
        </p>
        <a
          href="https://calendly.com/bhavesh-factoryjet/30min"
          {...ext}
          className="inline-block bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors"
        >
          Talk to the Founder
        </a>
      </div>

      <h2 id="access">Access rules: least privilege, enforced where the data lives</h2>
      <p>OWASP&apos;s mitigations for Excessive Agency translate into seven rules a policy can state plainly:</p>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li>Each agent has its own service account. It never signs in as a person.</li>
        <li>Read-only is the default. Write access is granted per system and per action, and written in the register.</li>
        <li>No general-purpose tools (shell access, open web fetch, free-form database queries) without written sign-off.</li>
        <li>Permission checks happen in the target system, the ERP or CRM, not only in the agent&apos;s instructions. OWASP calls this complete mediation.</li>
        <li>When the agent acts for a specific person, it uses that person&apos;s permissions, not wider ones.</li>
        <li>Keys and passwords live in a secrets manager, never in prompts, code or chat logs.</li>
        <li>Access is reviewed on every review date and removed the day an agent retires.</li>
      </ol>
      <p>
        Rule 4 matters most. Instructions can be talked around. A permission the ERP refuses cannot. If your agent
        reaches your systems through a{' '}
        <a href="/services/ai-integration-services">custom integration or MCP server</a>, that is the layer where these
        checks belong.
      </p>

      <h2 id="frameworks">NIST AI RMF, ISO 42001 or OWASP: which AI agent governance framework fits a mid-sized company</h2>
      <Table
        head={['Framework', 'What it is', 'Use it for', 'At your size']}
        rows={[
          [
            <a key="n" href={SRC.nistRmf} {...ext}>NIST AI RMF 1.0</a>,
            'Voluntary US framework, released 26 January 2023, with four functions: Govern, Map, Measure, Manage. Generative AI Profile added 26 July 2024.',
            'Structuring your policy and showing customers you follow a recognized approach',
            'Use its four functions as headings. No certification exists.',
          ],
          [
            <a key="o" href={SRC.owaspLlm06} {...ext}>OWASP LLM06:2025</a>,
            'Security guidance on Excessive Agency, with eight named mitigations',
            'Access, tools and approval rules',
            'Hand it to your technical owner as the checklist for permissions.',
          ],
          [
            <a key="i" href={SRC.iso42001} {...ext}>ISO/IEC 42001:2023</a>,
            'International standard for an AI management system, published 2023',
            'Formal certification when customers or regulators ask',
            'Skip certification for now unless a large customer requires it.',
          ],
        ]}
      />
      <p>
        Whichever agentic AI governance framework you start from, it should end in the same place: named owners, written limits and logs. The template below maps each of its sections to one of these, so you can point to a recognized source if a
        customer or auditor asks where a rule came from.
      </p>

      <div id="template" />
      <GatedDownload
        fileHref="/downloads/ai-agent-governance-policy-template.docx"
        fileName="AI-Agent-Governance-Policy-Template-FactoryJet.docx"
        source="download_ai_agent_governance_template"
        eyebrow="Free template"
        heading="AI Agent Governance Policy Template"
        body="An editable Word document with every section on this page turned into blanks to fill in. Give it to your agent owner, your IT lead and your vendor before the build starts."
        contents={[
          '14 sections, about 1,600 words, written in plain English',
          'Agent register, roles table and four-level autonomy scale',
          'Approval-limits table and a list of never-allowed actions',
          'Testing, monitoring, incident and switch-off checklists',
          'Go-live sign-off page and a map to NIST AI RMF, OWASP LLM06 and ISO/IEC 42001',
        ]}
        formatNote="Word (.docx), opens in Microsoft Word, Google Docs and Pages. Not legal advice."
      />

      <h2 id="roles">Who owns AI agent governance at a company of 100 to 2,000 people</h2>
      <p>
        You do not need an AI committee for your first agents. You need four named people per agent, and one person
        who keeps the company-wide register, usually the COO, CFO or head of IT.
      </p>
      <Table
        head={['Role', 'Decides', 'Usually']}
        rows={[
          ['Agent owner', 'Signs off go-live, reads the monthly report, can switch the agent off', 'Head of the team whose work it is'],
          ['Business approver', 'The job the agent does and its limits', 'Same team, one level down or up'],
          ['Technical owner', 'Access, logging, testing and changes', 'IT lead or the vendor\'s named engineer'],
          ['Security and data reviewer', 'Data handling and access before go-live and after big changes', 'IT security, or an outside reviewer'],
        ]}
      />
      <p>
        One person can hold two roles in a small team, with one exception: the business approver and the technical
        owner should be different people, so the person setting the limits is not the person building around them.
      </p>

      <h2 id="testing">Testing before go-live: use your own past cases</h2>
      <p>
        Vendor demos run on clean examples. Your work is not clean. Before an agent goes live, run it against real
        past cases from your own records, including ones it should refuse or hand to a person, and agree the pass mark
        before testing starts. Add four specific tests:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Injection test:</strong> documents and emails with hidden instructions, to confirm the agent ignores them.</li>
        <li><strong>Permission test:</strong> the agent attempts an action it is not allowed, and the target system blocks it.</li>
        <li><strong>Limit test:</strong> cases just over each limit, to confirm they go to a person.</li>
        <li><strong>Switch-off test:</strong> the owner stops the agent and confirms nothing runs after.</li>
      </ul>
      <p>
        This is also the cheapest way to settle whether an agent is worth building at all. Our guide to{' '}
        <a href="/blog/ai-proof-of-concept-to-production-2026">scoping an AI proof of concept that reaches production</a>{' '}
        covers how to pick those cases.
      </p>

      <h2 id="monitoring">Monitoring: five numbers with alert levels</h2>
      <Table
        head={['Measure', 'Why it matters', 'Alert when']}
        rows={[
          ['Share of cases handed to a person', 'Rising handoffs mean the agent is meeting work it was not built for', 'Above a daily level you set'],
          ['Approver edit rate', 'How often a person changes the agent\'s draft before approving', 'Above a weekly level you set'],
          ['Failed tool calls', 'A system changed, a token expired, or an API is down', 'More than a set number per hour'],
          ['Actions blocked by the target system', 'The agent tried something outside its permissions', 'Any'],
          ['Complaints linked to the agent', 'The signal customers and staff give you for free', 'Any'],
        ]}
      />
      <p>
        Behavior also changes when the model underneath changes, even if nobody touches your agent. Providers publish
        retirement dates for their models, so the technical owner should track them and re-run the test set before any
        switch. Our page on <a href="/services/ai-agent-monitoring">AI agent monitoring and support</a> shows how we
        handle drift and model changes on agents we run.
      </p>

      <h2 id="thirty-days">A 30-day plan to put governance in place with your first agent</h2>
      <ol className="list-decimal pl-6 space-y-3 mb-6">
        <li>
          <strong>Week 1, decide.</strong> Name the four roles, add the agent to the register, set its autonomy level
          and fill in the limits table.
        </li>
        <li>
          <strong>Week 2, restrict.</strong> Create the service account, grant only the listed permissions, move keys to
          a secrets manager, turn on logging for every tool call and approval.
        </li>
        <li>
          <strong>Week 3, test.</strong> Run the agent on your own past cases plus the four specific tests. Fix, re-run,
          file the results.
        </li>
        <li>
          <strong>Week 4, start supervised.</strong> Sign off, go live at the agreed level, review a daily sample, set the
          alert levels, and book the first monthly review.
        </li>
      </ol>
      <p>
        Gartner&apos;s{' '}
        <a href={SRC.gartner40} {...ext}>25 June 2025 prediction</a> that over 40% of agentic AI projects will be
        canceled by the end of 2027 names three causes: escalating costs, unclear business value and inadequate risk
        controls. A month of governance work done alongside the build deals with the third one directly, and forces an
        honest answer on the second. For the full picture, see{' '}
        <a href="/blog/why-ai-agent-projects-fail-2026">what Gartner, MIT and RAND found about AI project failure</a>.
      </p>

      <h2 id="platforms">Governance platforms vs a written policy</h2>
      <p>
        Searches for &quot;ai agent governance platform&quot; carry one of the highest click prices in this topic,
        about $73 in the US (DataForSEO, 17 October 2026), which tells you vendors are competing hard for this buyer.
        Platforms collect logs, show dashboards and send alerts, and they earn their keep once you run many agents. They
        do not decide who owns an agent, what it may touch or when a person must approve. Write those down first, then
        choose tools that record what the policy asks for.
      </p>

      <h2 id="what-else-ranks">What else ranks for &quot;ai agent governance&quot;, and how this guide differs</h2>
      <p>
        These are the business sites on Google&apos;s first page for &quot;ai agent governance&quot; in the US when we checked on 17
        October 2026 (DataForSEO), with the title Google showed for each. We list them so you can compare; we have not
        reviewed their services, and the list leaves out forums and video sites.
      </p>
      <Table
        head={['Site', 'Page title shown in Google']}
        rows={[
          ['mckinsey.com', 'Agentic AI security: Risks & governance for enterprises'],
          ['acceldata.io', 'How Governance-Aware AI Agents Enforce Data Policies'],
          ['indatalabs.com', 'AI Agent Governance: How to Manage Agents at Scale'],
          ['covasant.com', 'What Is Agent Governance? The Three Questions'],
          ['opsinsecurity.com', 'AI Governance and Security: Keeping Agents on Task'],
          ['assistents.ai', 'AI Agent Governance'],
        ]}
      />
      <p>Most of these explain what AI agent governance is. This guide is written for a company of 100 to 2,000 people and comes with a fill-in policy template, a four-level autonomy scale and written approval limits you can adopt this month.</p>

      <h2 id="how-factoryjet-works">How FactoryJet handles governance on agents we build</h2>
      <p>
        We design, build, implement and support custom AI agents, and you own what we build: the code and repository
        from day one. AI and hosting accounts can run in your name, at cost. We agree the autonomy level, limits and
        test cases with your agent owner before the build, and we show working software on your own data before you
        sign. FactoryJet quotes the build, and any support you choose, as fixed prices in writing after a short scoping
        call.
      </p>
      <p>
        For one example, read about the{' '}
        <a href="/case-studies/washington-law-group-accident-detection-agent">accident detection agent</a> we built and
        still run for Washington Law Group. To see the work by system, start with{' '}
        <a href="/services/ai-agent-development">AI agent development</a>,{' '}
        <a href="/services/erp-ai-agents">AI agents for ERP systems</a> or{' '}
        <a href="/services/ai-consulting">AI consulting</a>. For the bigger choice of what to rent and what to build,
        read our <a href="/blog/ai-agent-build-vs-buy-2026">build versus buy guide for AI agents</a>, and for how the
        pieces connect, our guide to{' '}
        <a href="/blog/agentic-ai-architecture-mid-sized-companies-2026">agentic AI architecture for mid-sized companies</a>.
      </p>

      <h2 id="sources">Sources</h2>
      <p className="text-sm text-gray-600">All pages opened and read on 17 October 2026.</p>
      <ul className="list-disc pl-6 space-y-1 text-sm mb-8">
        <li><a href={SRC.nistRmf} {...ext}>NIST, AI Risk Management Framework</a> (AI RMF 1.0 released 26 January 2023; Generative AI Profile NIST-AI-600-1, 26 July 2024)</li>
        <li><a href={SRC.owaspLlm06} {...ext}>OWASP GenAI Security Project, LLM06:2025 Excessive Agency</a></li>
        <li><a href={SRC.owaspAgentic} {...ext}>OWASP Agentic Security Initiative, Agentic AI: Threats and Mitigations</a> (17 February 2025)</li>
        <li><a href={SRC.iso42001} {...ext}>ISO/IEC 42001:2023, Artificial intelligence: Management system</a></li>
        <li><a href={SRC.gartner40} {...ext}>Gartner, Gartner Predicts Over 40% of Agentic AI Projects Will Be Canceled by End of 2027</a> (25 June 2025)</li>
        <li>Our own measurement: US monthly search volumes, year-on-year change and click prices, DataForSEO, 17 October 2026</li>
      </ul>

      <div className="bg-[#FAF8F5] border-2 border-[#E5DFD7] p-6 sm:p-8 rounded-xl my-10 shadow-sm">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-2">
          AI agent scoping call for mid-sized US companies
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] mb-3">
          Get your first agent&apos;s limits, logs and autonomy level right before it is built
        </h3>
        <p className="text-[#4B5563] text-base leading-relaxed mb-6">
          Tell us the job, the systems and who signs off. We will tell you which level it should start at, what to log
          and what a person should always approve, and show it working on your own data before you sign. FactoryJet
          quotes a fixed price in writing after a short scoping call.
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

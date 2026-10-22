import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

/*
 * AI agent security: the risks and the controls for mid-sized companies (US, 2026). Written 18 Oct 2026.
 * Target terms (DataForSEO, US, 17 Oct 2026): agentic ai security 480/mo KD 14 $64.62, ai agent security 480 KD 21
 * $57.87, mcp server security 170 $41.72, agentic ai cybersecurity 140 $70.08, ai agent security risks 110 (+600%),
 * ai agent security best practices 30. PAA (18 Oct): "What are the top 10 agentic AI vulnerabilities according to
 * OWASP?", "What are the biggest security risks of AI agents?", "How secure are AI agents?", "What is an AI prompt
 * injection?", "Is prompt injection still possible?", "How to secure agentic AI?".
 * Outside facts come only from pages opened on 18 Oct 2026: OWASP Top 10 for Agentic Applications 2026 (resource page
 * dated 9 Dec 2025 and the PDF's table of contents for the ten titles), OWASP LLM01:2025 Prompt Injection, OWASP
 * LLM06:2025 Excessive Agency (17 Oct), MCP Security Best Practices. The plain-English gloss of each ASI risk is ours.
 * No compliance claims, no FactoryJet prices, no running-cost figures, no team location.
 * The FAQ array below is the single source for both the visible FAQ and the FAQPage JSON-LD.
 */

const SRC = {
  owaspAgentic: 'https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/',
  owaspLlm01: 'https://genai.owasp.org/llmrisk/llm01-prompt-injection/',
  owaspLlm06: 'https://genai.owasp.org/llmrisk/llm062025-excessive-agency/',
  mcpSecurity: 'https://modelcontextprotocol.io/docs/tutorials/security/security_best_practices',
};

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;
const IMG = '/images/blog/ai-agent-security-risks-controls-2026';

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
    q: 'What are the biggest security risks of AI agents?',
    a: 'For a mid-sized company: an agent tricked by hidden instructions in an email or document, an agent with more permissions or tools than its job needs, credentials stored where the agent or its logs can leak them, a third-party tool or MCP server that is not what it claims, and people trusting the agent\'s output without checking. OWASP\'s Top 10 for Agentic Applications 2026 lists these and more.',
  },
  {
    q: 'What are the top 10 agentic AI vulnerabilities according to OWASP?',
    a: 'The OWASP Top 10 for Agentic Applications 2026, published 9 December 2025, lists: ASI01 Agent Goal Hijack, ASI02 Tool Misuse and Exploitation, ASI03 Identity and Privilege Abuse, ASI04 Agentic Supply Chain Vulnerabilities, ASI05 Unexpected Code Execution, ASI06 Memory and Context Poisoning, ASI07 Insecure Inter-Agent Communication, ASI08 Cascading Failures, ASI09 Human-Agent Trust Exploitation, and ASI10 Rogue Agents.',
  },
  {
    q: 'What is an AI prompt injection?',
    a: 'OWASP defines a prompt injection vulnerability as user prompts altering an LLM\'s behavior or output in unintended ways. Direct injection comes from what a user types. Indirect injection comes from external content the model reads, such as websites or files. For agents, indirect injection is the bigger worry: a supplier PDF or customer email containing instructions the agent might follow.',
  },
  {
    q: 'Is prompt injection still possible?',
    a: 'Yes. No model is immune, so the defence is to limit what a successful injection can do. OWASP\'s mitigations include constraining model behavior, validating output formats, filtering inputs and outputs, least-privilege access, human approval for high-risk actions, separating and labelling external content, and adversarial testing. If the agent cannot take a damaging action, an injection cannot make it.',
  },
  {
    q: 'How secure are AI agents?',
    a: 'As secure as the permissions, tools and checks around them. An agent connected with an admin account and open-ended tools is risky however good the model is. An agent with its own narrow service account, purpose-built tools, approval for high-impact actions, logging of every action and permissions enforced in the target system is a manageable risk, similar to a new employee with limited access.',
  },
  {
    q: 'How do you secure agentic AI?',
    a: 'Limit what the agent can do rather than relying on what it is told. Give each agent its own service account, read-only by default. Offer only narrow tools. Keep secrets in a vault. Require a person to approve money, customer messages and master-data changes. Enforce permissions in the systems the agent calls. Log every tool call. Test with hidden-instruction documents before go-live.',
  },
  {
    q: 'What is agent goal hijack?',
    a: 'It is OWASP\'s first agentic risk, ASI01: an attacker changes what the agent is trying to achieve, usually by planting instructions in content the agent reads. An agent processing supplier invoices could be steered to change bank details or approve a payment. The defence is to treat content as data, never as instructions, and to put high-impact actions behind approval and target-system checks.',
  },
  {
    q: 'What is tool misuse in AI agents?',
    a: 'OWASP\'s ASI02 covers agents using their tools in harmful ways, whether tricked or by mistake: running a broad database query, sending data to the wrong place, or calling an action repeatedly. The fix is narrow tools ("create a draft sales order") instead of general ones ("run any query"), input validation on every tool, rate limits, and logging.',
  },
  {
    q: 'What is MCP server security?',
    a: 'MCP (Model Context Protocol) servers expose company systems to AI agents, so they are an access-control layer. The MCP security best practices cover the confused deputy problem, token passthrough (explicitly forbidden: servers must not accept tokens not issued for them), server-side request forgery, state handle hijacking, local server compromise and scope minimization. Build MCP servers with narrow scopes and validate every request.',
  },
  {
    q: 'What is token passthrough in MCP and why is it forbidden?',
    a: 'Token passthrough is when an MCP server accepts an access token that was issued for some other service and forwards it to a downstream API. The MCP security guidance says this is explicitly forbidden by the authorization specification, because it bypasses rate limits and validation, breaks the audit trail and lets a stolen token be used through the server. MCP servers must only accept tokens issued for them.',
  },
  {
    q: 'What is the confused deputy problem in AI agents?',
    a: 'A confused deputy is a component with legitimate access that is tricked into using it for someone else. The MCP security guidance describes it for MCP proxy servers that connect to third-party APIs with a static client ID: an attacker can obtain authorization without the user\'s consent. The required mitigation is per-client consent before the third-party authorization flow, plus strict redirect validation.',
  },
  {
    q: 'What is memory poisoning in AI agents?',
    a: 'OWASP\'s ASI06, Memory and Context Poisoning, covers corrupting what an agent remembers or retrieves, such as planting false information in a knowledge base, past-conversation memory or document store, so later decisions go wrong. Control who and what can write to the agent\'s memory and sources, keep provenance on stored content, and review what the agent retrieves for high-impact decisions.',
  },
  {
    q: 'What are cascading failures in agentic AI?',
    a: 'OWASP\'s ASI08 covers a fault in one agent or tool spreading through connected agents and systems: one bad extraction feeds a pricing step, which feeds an order, which feeds an invoice. Contain it with validation between steps, limits on how much one run can change, circuit breakers that stop a run when errors pile up, and an off switch with a named owner.',
  },
  {
    q: 'What is human-agent trust exploitation?',
    a: 'OWASP\'s ASI09 covers people trusting an agent too much: approving its drafts without reading them, or acting on a confident but wrong answer. An approval queue only works if approvers see what changed and why. Show the source document beside the draft, highlight anything unusual, and track how often approvers change the agent\'s work.',
  },
  {
    q: 'What is a rogue AI agent?',
    a: 'OWASP\'s ASI10 covers agents acting outside their intended purpose or control. In a company setting the practical controls are the same as for any risky automation: every agent registered with an owner, permissions limited to its job, every action logged, alerts on unusual activity, and an off switch someone can use straight away.',
  },
  {
    q: 'Are third-party MCP servers and agent plugins safe?',
    a: 'Treat them like any third-party software. OWASP lists agentic supply chain vulnerabilities as ASI04. Check who publishes the tool, pin versions, review what permissions it asks for, run it with the least access it needs, and prefer servers you or a trusted vendor built. The MCP guidance warns that local servers run with the same privileges as the client unless sandboxed.',
  },
  {
    q: 'Should AI agents have their own user accounts?',
    a: 'Yes. Each agent should have its own service account, never a person\'s login or a shared admin account. That lets you grant only the permissions its job needs, see its actions separately in logs, and switch it off without affecting staff. OWASP lists identity and privilege abuse as ASI03.',
  },
  {
    q: 'How do you test an AI agent for security before go-live?',
    a: 'Run it against your own past cases plus attack cases: documents and emails with hidden instructions, requests just outside its permissions, attempts to reach data it should not, and repeated or malformed inputs. Confirm the target systems refuse what the agent\'s account cannot do, and that the switch-off works. OWASP lists adversarial testing among its prompt injection mitigations.',
  },
  {
    q: 'What security questions should we ask an AI agent vendor?',
    a: 'Where are permissions enforced: in the prompt or in the target system? Does the agent have its own service account? Which tools can it call, and can any run arbitrary code or queries? How are secrets stored? What is logged and for how long? How is it tested against prompt injection? How are third-party tools vetted? Who responds to an incident, and how fast?',
  },
  {
    q: 'Do we need a security platform for AI agents?',
    a: 'Not to start. The controls that matter most for a first agent are design decisions: narrow permissions, narrow tools, approvals, logging and testing. Specialist AI security tools help with monitoring and testing as you run more agents. Write the controls into your AI agent governance policy first, then choose tools that check them.',
  },
  {
    q: 'What is agentic cybersecurity?',
    a: 'The phrase is used two ways. It can mean securing AI agents themselves, which is what this guide covers, or using AI agents inside a security team to triage alerts and investigate incidents. For a company deploying its first business agent, the first meaning is the one that matters: limiting what the agent can do and logging every action.',
  },
  {
    q: 'Do we need AI agent security tools?',
    a: 'Not to start. AI agent security tools and agentic AI security solutions help with monitoring, testing and policy enforcement as you run more agents. The controls that matter most for a first agent are design decisions: its own narrow account, narrow tools, approvals for high-impact actions, logging and testing. Put those in place first, then choose tools that check them.',
  },
];

export const post: BlogPost = {
  id: '771',
  slug: 'ai-agent-security-risks-controls-2026',
  title: 'AI Agent Security for Mid-Sized Companies: The OWASP Top 10 Risks and the Control for Each (2026)',
  excerpt:
    'The OWASP Top 10 for Agentic Applications 2026 explained in plain English for a mid-sized company, with the control for each risk, how prompt injection works and how to limit it, MCP server security, a seven-control checklist, and the security questions to ask any AI agent vendor.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Oct 18, 2026',
  dateModified: 'Oct 18, 2026',
  readTime: '15 min read',
  imageUrl: `${IMG}/hero.webp`,
  imageAlt:
    'Seen over her shoulder, a blonde woman in a navy turtleneck reviews two monitors, one with a list showing a single orange row and one with connected boxes, while a man in a black polo stands behind her.',
  meta: {
    title: 'AI Agent Security: OWASP Agentic Top 10 Risks and Controls',
    description:
      'AI agent security for mid-sized companies: the OWASP Agentic Top 10 in plain English, prompt injection, MCP server security and seven controls.',
  },
  keyTakeaways: [
    'Secure an AI agent by limiting what it can do, not by telling it to behave. Narrow permissions and narrow tools beat clever prompts.',
    'OWASP published the Top 10 for Agentic Applications 2026 on 9 December 2025, from ASI01 Agent Goal Hijack to ASI10 Rogue Agents.',
    'Prompt injection is still possible with every model. OWASP\'s mitigations include least privilege, human approval for high-risk actions, separating external content and adversarial testing.',
    'MCP servers are an access-control layer. The MCP security guidance says token passthrough is explicitly forbidden and calls for per-client consent and minimal scopes.',
    'Give every agent its own service account, read-only by default, and enforce permissions in the target system.',
    'Log every tool call and approval, and test with hidden-instruction documents before go-live.',
    'Put these controls in your AI agent governance policy before the first build.',
  ],
  faqs,
  content: (
    <article>
      {/* Answer-first block */}
      <div className="bg-white border-2 border-[#E5DFD7] rounded-xl p-6 sm:p-8 mb-10">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-3">The short answer</p>
        <p className="text-lg leading-relaxed mb-0">
          <strong>AI agent security</strong> comes from limiting what an agent can do: its own service account with
          read-only access by default, narrow tools, permissions enforced in the systems it calls, a person approving
          high-impact actions, every action logged, and testing against hidden instructions before go-live. OWASP&apos;s
          Top 10 for Agentic Applications 2026 is the best checklist for what can go wrong.
        </p>
      </div>

      <div className="bg-[#FAF8F5] border-l-4 border-[#B23E13] p-5 rounded-r-lg mb-10">
        <p className="text-sm text-[#1F2937] leading-relaxed mb-0">
          <strong>We design, build and support custom AI agents and MCP servers, so weigh this page with that in mind.</strong>{' '}
          The risk names come from OWASP and the MCP documentation, opened on 17 and 18 October 2026 and linked where
          they appear. The plain-English explanations and the controls for a mid-sized company are ours. This page is
          general guidance, not a security audit or a compliance claim.
        </p>
      </div>

      <p>
        Searches for &quot;agentic ai security&quot; and &quot;ai agent security&quot; run about 480 a month each in
        the US, &quot;ai agent security risks&quot; rose 600% in a year, and advertisers pay $58 to $70 a click across
        the topic (DataForSEO, 17 October 2026). Those buyers are mostly security vendors&apos; targets. This guide is for
        the operations or IT lead at a mid-sized company who has to sign off a first agent and wants to know what can go
        wrong and what to insist on.
      </p>

      <h2 id="principle">The one principle: limit what the agent can do</h2>
      <p>
        What is agentic AI security? It is the practice of keeping AI agents from taking harmful actions, whether they
        are tricked, misconfigured or simply wrong. It overlaps with, but is not the same as, agentic AI cybersecurity in
        the other sense: using agents to help a security team.
      </p>
      <p>
        OWASP&apos;s guidance on <a href={SRC.owaspLlm06} {...ext}>Excessive Agency</a> traces damaging agent actions
        to three root causes: excessive functionality, excessive permissions and excessive autonomy. Every control on
        this page shrinks one of those three. Instructions in a prompt can be talked around. A permission the ERP refuses
        cannot.
      </p>

      <h2 id="owasp-top-10">The OWASP Top 10 for Agentic Applications 2026, in plain English</h2>
      <p>
        The <a href={SRC.owaspAgentic} {...ext}>OWASP GenAI Security Project</a> published the list on 9 December 2025,
        developed with more than 100 industry experts, researchers and practitioners. The names below are OWASP&apos;s;
        the explanation and the control are how we apply them in a mid-sized company. It is the closest thing to a shared agentic AI security framework today, and the best checklist of agentic AI security risks.
      </p>
      <Table
        head={['OWASP risk', 'What it looks like in a mid-sized company', 'The control']}
        rows={[
          ['ASI01 Agent Goal Hijack', 'A supplier PDF tells the invoice agent to update bank details', 'Treat content as data; approval and target-system checks on payment data'],
          ['ASI02 Tool Misuse and Exploitation', 'A "run any query" tool pulls a whole customer table', 'Narrow, purpose-built tools with input validation and rate limits'],
          ['ASI03 Identity and Privilege Abuse', 'The agent connects with an admin or a person\'s login', 'Its own service account, read-only by default'],
          ['ASI04 Agentic Supply Chain Vulnerabilities', 'A third-party MCP server or plugin is not what it claims', 'Vet publishers, pin versions, least access, prefer servers you control'],
          ['ASI05 Unexpected Code Execution', 'The agent is allowed to write and run scripts on a server', 'No code execution unless sandboxed and signed off'],
          ['ASI06 Memory and Context Poisoning', 'False content planted in the knowledge base it searches', 'Control who writes to sources; keep provenance; review retrieval for big decisions'],
          ['ASI07 Insecure Inter-Agent Communication', 'One agent passes another an unchecked instruction', 'Authenticate and validate messages between agents'],
          ['ASI08 Cascading Failures', 'One bad extraction flows into pricing, order and invoice', 'Validation between steps, change limits per run, circuit breakers'],
          ['ASI09 Human-Agent Trust Exploitation', 'Approvers click approve without reading', 'Show the source beside the draft; track approver edit rates'],
          ['ASI10 Rogue Agents', 'An agent keeps acting outside its purpose', 'Register every agent with an owner, alerts, and an off switch'],
        ]}
      />

      <h2 id="prompt-injection">Prompt injection: why it still works, and how to limit it</h2>
      <p>
        OWASP&apos;s <a href={SRC.owaspLlm01} {...ext}>LLM01:2025 Prompt Injection</a> entry defines it as user prompts
        altering an LLM&apos;s behavior or output in unintended ways, and separates two kinds.{' '}
        <strong>Direct</strong> injection comes from what someone types. <strong>Indirect</strong> injection comes from
        external content the model reads, such as websites or files. Agents read a lot of external content (emails,
        PDFs, web pages, tickets), so indirect injection is the one to plan for.
      </p>
      <p>OWASP lists seven mitigations. Here is how each lands in practice:</p>
      <Table
        head={['OWASP mitigation', 'In a mid-sized company agent']}
        rows={[
          ['Constrain model behavior', 'Instructions define one job and say content is data, never instructions'],
          ['Define and validate expected output formats', 'The agent returns structured fields that code checks before any action'],
          ['Implement input and output filtering', 'Strip or flag suspicious instructions; block sensitive data leaving'],
          ['Enforce privilege control and least privilege access', 'Own service account, narrow tools, target system enforces limits'],
          ['Require human approval for high-risk actions', 'Payments, customer messages and master-data changes go to a person'],
          ['Segregate and identify external content', 'Documents and emails are labelled as untrusted input in the prompt'],
          ['Conduct adversarial testing and attack simulations', 'Hidden-instruction documents are part of the go-live test set'],
        ]}
      />

      <figure className="my-8">
        <img
          src={`${IMG}/trust-boundary.webp`}
          alt="A woman with long braids in a lavender sweater draws a dashed orange line around three connected boxes on a whiteboard while a bearded man in a denim shirt holding a closed laptop watches."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Draw the trust boundary first: which systems the agent may reach, and where a person must approve.
        </figcaption>
      </figure>

      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg my-8">
        <h3 className="text-lg font-bold mb-3">Signing off a first AI agent and want a second opinion on its access?</h3>
        <p className="mb-4">
          Bring the job, the systems it touches and the account it will use. In a 30-minute call with founder Bhavesh
          Barot we will walk the OWASP list against your design and point out where permissions, tools or approvals
          should be tighter. FactoryJet quotes a fixed price in writing for any build or fix after that call.
        </p>
        <a
          href="https://calendly.com/bhavesh-factoryjet/30min"
          {...ext}
          className="inline-block bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors"
        >
          Talk to the Founder
        </a>
      </div>

      <h2 id="mcp">MCP server security: the access layer most companies forget</h2>
      <p>
        An MCP (Model Context Protocol) server is how an agent reaches a system such as your ERP or CRM, so it is where
        access is granted or refused. The <a href={SRC.mcpSecurity} {...ext}>MCP security best practices</a> name
        several attacks. The ones that matter most for a company building its own servers:
      </p>
      <Table
        head={['Risk (MCP documentation)', 'What it means', 'What to require']}
        rows={[
          ['Token passthrough', 'The server accepts a token issued for another service and forwards it', 'Explicitly forbidden: servers must not accept tokens not issued to them'],
          ['Confused deputy', 'A proxy server with a static client ID is tricked into authorizing an attacker', 'Per-client consent before third-party authorization; exact redirect checks'],
          ['Server-side request forgery', 'A malicious server makes a client fetch internal addresses', 'HTTPS only, block private IP ranges, validate redirects'],
          ['State handle hijacking', 'Someone guesses a workflow or cart ID and uses another user\'s state', 'Random handles bound to the authenticated user; verify every request'],
          ['Local server compromise', 'A downloaded local server runs commands with the client\'s privileges', 'Consent before install, sandboxing, minimal privileges'],
          ['Over-broad scopes', 'One token can reach every tool', 'Minimal starting scopes, step up only when needed, log elevation'],
        ]}
      />
      <p>
        We build custom MCP servers and API integrations with these requirements in mind. See{' '}
        <a href="/services/ai-integration-services">AI integration services</a>, and our{' '}
        <a href="/blog/agentic-ai-architecture-mid-sized-companies-2026">agentic AI architecture guide</a> for where the
        tool layer sits.
      </p>

      <p>
        Choosing where the model runs? See{' '}
        <a href="/blog/private-ai-for-business-own-data-2026">private AI for business: nine options compared</a>.
      </p>

      <h2 id="seven-controls">AI agent security best practices: seven controls before go-live</h2>
      <ol className="list-decimal pl-6 space-y-3 mb-6">
        <li><strong>Own identity.</strong> A dedicated service account per agent, never a person&apos;s login or a shared admin account.</li>
        <li><strong>Least privilege.</strong> Read-only by default; each write action granted and listed.</li>
        <li><strong>Narrow tools.</strong> Purpose-built actions only; no open-ended query, shell or web tools without sign-off.</li>
        <li><strong>Enforcement where data lives.</strong> The ERP, CRM or bank portal refuses what the agent&apos;s account cannot do.</li>
        <li><strong>Approval for high impact.</strong> Money, customer messages, deletions and master data go to a named person.</li>
        <li><strong>Secrets in a vault.</strong> Keys never in prompts, code repositories or logs.</li>
        <li><strong>Logs and tests.</strong> Every tool call and approval logged; injection, permission and switch-off tests run before go-live and after every change.</li>
      </ol>
      <p>
        These map directly onto sections of our free{' '}
        <a href="/blog/ai-agent-governance-policy-mid-sized-companies-2026">AI agent governance policy template</a>, so
        security and governance sign-off can happen in one document.
      </p>

      <h2 id="vendor-questions">Eight security questions to ask any AI agent vendor</h2>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li>Where are permissions enforced: in the prompt or in the target system?</li>
        <li>Does each agent have its own service account?</li>
        <li>Which tools can it call, and can any run arbitrary code or queries?</li>
        <li>How are API keys and passwords stored?</li>
        <li>What is logged, for how long, and can we search it?</li>
        <li>How is the agent tested against prompt injection before release?</li>
        <li>How are third-party tools and MCP servers vetted and versioned?</li>
        <li>Who responds to a security incident, and how fast?</li>
      </ol>

      <h2 id="how-secure">So, how secure are AI agents?</h2>
      <p>
        About as secure as a new employee with the same access. Nobody gives a new hire the admin password on day one,
        lets them pay suppliers unchecked, or skips the audit trail. Apply the same rules to an agent and most of the
        OWASP list becomes manageable. Skip them, and no model is good enough to make up for it. If you are weighing
        whether to rent or build, our guide to{' '}
        <a href="/blog/enterprise-ai-agents-mid-sized-companies-buy-or-build-2026">enterprise AI agents for mid-sized companies</a>{' '}
        covers how security questions differ between platform agents and custom ones.
      </p>

      <h2 id="what-else-ranks">What else ranks for &quot;agentic ai security&quot;, and how this guide differs</h2>
      <p>
        These are the business sites on Google&apos;s first page for &quot;agentic ai security&quot; in the US when we checked on 17
        October 2026 (DataForSEO), with the title Google showed for each. We list them so you can compare; we have not
        reviewed their services, and the list leaves out forums and video sites.
      </p>
      <Table
        head={['Site', 'Page title shown in Google']}
        rows={[
          ['cloudsecurityalliance.org', 'Agentic AI Identity & Access Management'],
          ['keyfactor.com', 'What Is Agentic AI Security?'],
          ['checkpoint.com', 'Agentic AI Common Security Risks'],
          ['zenity.io', 'Agentic AI Security for Enterprise AI Governance'],
          ['airia.com', 'Agentic AI Security: The Risk Nobody is Talking About'],
          ['nhimg.org', 'Agentic AI in cyber security: what it means for security teams'],
        ]}
      />
      <p>Many of these are written by security software vendors. This guide maps every OWASP agentic risk to a control a mid-sized company can put in place without buying a platform, and adds the MCP server rules most guides skip.</p>

      <h2 id="how-factoryjet-works">How FactoryJet builds agents with these controls</h2>
      <p>
        We design, build, implement and support custom AI agents and the MCP servers and integrations they use, and you
        own what we build: the code and repository from day one. AI and hosting accounts can run in your name, at cost.
        We show working software on your own data before you sign. FactoryJet quotes the build, and any support you
        choose, as fixed prices in writing after a short scoping call.
      </p>
      <p>
        See <a href="/services/ai-agent-development">AI agent development</a>,{' '}
        <a href="/services/ai-agent-monitoring">AI agent monitoring and support</a> and{' '}
        <a href="/services/ai-consulting">AI consulting</a>.
      </p>

      <h2 id="sources">Sources</h2>
      <p className="text-sm text-gray-600">Pages opened and read on 17 and 18 October 2026.</p>
      <ul className="list-disc pl-6 space-y-1 text-sm mb-8">
        <li><a href={SRC.owaspAgentic} {...ext}>OWASP GenAI Security Project, OWASP Top 10 for Agentic Applications for 2026</a> (9 December 2025; risk titles from the published document)</li>
        <li><a href={SRC.owaspLlm01} {...ext}>OWASP GenAI Security Project, LLM01:2025 Prompt Injection</a></li>
        <li><a href={SRC.owaspLlm06} {...ext}>OWASP GenAI Security Project, LLM06:2025 Excessive Agency</a></li>
        <li><a href={SRC.mcpSecurity} {...ext}>Model Context Protocol, Security Best Practices</a></li>
        <li>Our own measurement: US search volumes, year-on-year change and click prices, DataForSEO, 17 October 2026</li>
      </ul>

      <div className="bg-[#FAF8F5] border-2 border-[#E5DFD7] p-6 sm:p-8 rounded-xl my-10 shadow-sm">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-2">
          AI agent design review for mid-sized US companies
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] mb-3">
          Get your first agent&apos;s access, tools and approvals right before it goes live
        </h3>
        <p className="text-[#4B5563] text-base leading-relaxed mb-6">
          Tell us the job, the systems and the account it will use. We will check the design against the OWASP list and
          show the agent working on your own data before you sign. FactoryJet quotes a fixed price in writing after a
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

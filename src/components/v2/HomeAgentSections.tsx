import HeroInlineForm from '@/components/HeroInlineForm';

/*
 * Homepage AI agent sections (2026-10-04): the agent run illustration (the
 * page's one dark section), agents listed by job, buy versus build, and a
 * mid-page lead form. Server components; the only client code is HeroInlineForm.
 * Styles: HomeExtraSections.css (imported by HomeSections).
 *
 * Each agent row links to the page that owns that term. Keep the row copy in
 * line with its owner page when either changes.
 */

const AGENTS = [
  {
    id: 'AGT‑01',
    name: 'Quoting and Pricing Agent',
    href: '/services/ai-agent-development/rfq-bidding-agent',
    reads: 'RFQ emails, drawings, your price book, and past quotes in the ERP.',
    does: 'Drafts the quote line by line and shows the pricing rule behind each line.',
    approves: 'A person reviews every quote before it is sent.',
  },
  {
    id: 'AGT‑02',
    name: 'Customer Support Agent',
    href: '/services/ai-customer-support-agents',
    reads: 'Tickets in Zendesk or Gorgias, order status in Shopify, and your help articles.',
    does: 'Answers order and product questions and drafts refunds or replacements.',
    approves: 'Refunds above your limit and anything it is unsure about go to your team.',
  },
  {
    id: 'AGT‑03',
    name: 'Shopify and Marketplace Agent',
    href: '/services/shopify-ai-agents',
    reads: 'Your catalog, stock counts, and the health of each marketplace listing.',
    does: "Lists new products in each channel's format, fixes suppressed listings, and reprices.",
    approves: 'Any price change outside the limits you set.',
  },
  {
    id: 'AGT‑04',
    name: 'ERP and Procurement Agent',
    href: '/services/ai-agent-development/procurement-supply-chain-agent',
    reads: 'Stock levels, purchase orders, and supplier lead times in NetSuite, SAP Business One, or Odoo.',
    does: 'Drafts purchase orders and flags suppliers that are running late.',
    approves: 'A buyer signs off every purchase order.',
  },
  {
    id: 'AGT‑05',
    name: 'Sales Follow-Up Agent',
    href: '/services/ai-sdr',
    reads: 'New leads and the account history in HubSpot or Salesforce.',
    does: 'Qualifies the lead, replies, and books the meeting.',
    approves: 'You choose which replies go out without review.',
  },
  {
    id: 'AGT‑06',
    name: 'AI Receptionist and Voice Agent',
    href: '/services/ai-receptionist',
    reads: 'Your calendar, your services, and your call scripts.',
    does: 'Answers calls, books appointments, and routes urgent calls.',
    approves: 'Hands the call to a person when the caller asks or the agent is unsure.',
  },
  {
    id: 'AGT‑07',
    name: 'Workflow Automation Agent',
    href: '/services/ai-workflow-automation',
    reads: 'The documents, emails, and forms that arrive every day.',
    does: 'Pulls out the data and enters it into the right system.',
    approves: 'Fields it is not confident about go to a person.',
  },
  {
    id: 'AGT‑08',
    name: 'Monitoring and Alert Agent',
    href: '/case-studies/washington-law-group-accident-detection-agent',
    reads: 'Published news and police sources, checked every two hours.',
    does: 'Keeps only the events that match your rules, checks the facts against the source, and sends one alert per event.',
    approves: 'Your team decides what to act on.',
    live: 'LIVE · WASHINGTON LAW GROUP',
  },
] as const;

export function AgentRunSection() {
  return (
    <section className="agentsec" id="ai-agents">
      <div className="wrap">
        <div className="section-head splithead">
          <div>
            <div className="eyebrow">AI Agent Development</div>
            <h2>AI Development Services: Custom AI Agents for the Work Your Team Repeats</h2>
          </div>
          <div>
            <p className="answer">An AI development company builds software that reads your data, makes a decision, and takes action inside the tools you already run. We build custom AI agents wired into NetSuite, SAP, Odoo, Salesforce, HubSpot, Zendesk, and Shopify, with a human approval step wherever the decision matters. Most well-scoped agents reach production in 3 to 12 weeks.</p>
            <div className="svc-links">
              <a className="btn btn-primary" href="/services/ai-agent-development">AI agent development</a>
              <a className="btn btn-ghost" href="/services/ai-integration-services">AI integration services</a>
            </div>
          </div>
        </div>
        <div className="runpanel">
          <div className="runbar">
            <span className="statusdot"></span>
            <span>AGENT RUN · FROM RFQ TO QUOTE</span>
            <span className="runflag">ILLUSTRATION</span>
          </div>
          <div className="runbody">
            <ol className="runsteps" aria-label="How a quoting agent handles one request for quote">
              <li><span className="rs-tag">READ</span><div><b>An RFQ email arrives</b><span className="d">The agent pulls the drawing, quantities, and delivery date from the email and its attachment.</span></div></li>
              <li><span className="rs-tag">LOOK UP</span><div><b>Your price book and past quotes</b><span className="d">It fetches material costs and similar jobs from the ERP.</span></div></li>
              <li><span className="rs-tag">DECIDE</span><div><b>Your pricing rules, applied</b><span className="d">Volume tier, margin floor, and rush lead time are checked line by line.</span></div></li>
              <li><span className="rs-tag">DRAFT</span><div><b>The quote is written</b><span className="d">Each line shows the rule that set its price, so a reviewer can check it in seconds.</span></div></li>
              <li className="hold"><span className="rs-tag">HOLD</span><div><b>A person approves</b><span className="d">Nothing reaches the customer until someone on your team signs off.</span></div></li>
            </ol>
            <div className="quotecard" aria-hidden="true">
              <div className="qc-head"><span>QUOTE DRAFT</span><span className="qc-state">WAITING FOR APPROVAL</span></div>
              <div className="qc-line"><span className="n">LINE 1</span><span className="rule">rule: volume tier 2</span><span className="amt"></span></div>
              <div className="qc-line"><span className="n">LINE 2</span><span className="rule">rule: rush lead time</span><span className="amt"></span></div>
              <div className="qc-line"><span className="n">LINE 3</span><span className="rule">rule: margin floor</span><span className="amt"></span></div>
              <div className="qc-flag">One line needs review: the material cost changed since the last quote.</div>
              <div className="qc-actions"><span className="qc-btn primary">Approve</span><span className="qc-btn">Edit</span><span className="qc-btn">Send back</span></div>
            </div>
          </div>
          <div className="runfoot">RULE · the agent drafts, a person approves, and every decision is logged with the rule it used.</div>
        </div>
      </div>
    </section>
  );
}

export function AgentCatalog() {
  return (
    <section className="section agentjobs" id="agents-by-job">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">AI Agents by Job</div>
          <h2>AI Agents We Build, by the Job They Do</h2>
          <p className="answer">Every agent has one job, a list of systems it can read, a short list of things it may change, and a point where a person signs off. Here are eight we build.</p>
        </div>
        <div className="agentlist">
          <div className="agentrow-head" aria-hidden="true">
            <span>ID</span><span>Agent</span><span>What it reads</span><span>What it does</span><span>Where a person approves</span><span></span>
          </div>
          {AGENTS.map((a) => (
            <article className="agentrow" key={a.id}>
              <span className="capid">{a.id}</span>
              <div className="aname">
                <h3><a href={a.href}>{a.name}</a></h3>
                {'live' in a && <span className="live">{a.live}</span>}
              </div>
              <p><span className="k">Reads</span>{a.reads}</p>
              <p className="does"><span className="k">Does</span>{a.does}</p>
              <p className="approves"><span className="k">A person approves</span>{a.approves}</p>
              <span className="plat-go" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
        <div className="sectionfoot">
          <span>We also build agents for healthcare, legal, manufacturing, and property management teams, and we support every agent after it goes live.</span>
          <span className="linkrow">
            <a href="/services/ai-agent-monitoring">Agent monitoring and support ↗</a>
            <a href="/services/manufacturing-ai-agents">Manufacturing agents ↗</a>
            <a href="/services/ai-consulting">AI consulting ↗</a>
          </span>
        </div>
      </div>
    </section>
  );
}

export function BuildVsBuy() {
  return (
    <section className="section buildbuy" id="build-vs-buy">
      <div className="wrap">
        <div className="section-head splithead">
          <div>
            <div className="eyebrow">Build vs Buy</div>
            <h2>Buy an AI Tool, or Build a Custom AI Agent?</h2>
          </div>
          <p className="answer">Buy a product when the job is common and the tool already connects to your systems. Build a custom agent when the work depends on your own rules, such as a price book or an approval limit, or when it crosses several systems that no single product covers.</p>
        </div>
        <div className="tablewrap">
          <table>
            <thead><tr><th>Question</th><th>Buy a product</th><th>Build a custom agent</th></tr></thead>
            <tbody>
              <tr><th>What is the job?</th><td>A common one: support chat, meeting booking, basic order questions</td><td>One that is specific to you: quoting from your price book, your purchasing rules</td></tr>
              <tr><th>How many systems?</th><td>One or two, and the product has a ready connector</td><td>Three or more, or an ERP with custom fields</td></tr>
              <tr><th>Whose rules?</th><td>The vendor&apos;s defaults are good enough</td><td>Your own approval limits, exceptions, and wording</td></tr>
              <tr><th>How do you pay?</th><td>A monthly fee per seat or per resolved conversation</td><td>A one-time build, then hosting and support</td></tr>
              <tr><th>Examples</th><td>Gorgias, Intercom Fin, Shopify Flow</td><td>RFQ to quote, ERP purchasing, marketplace repricing</td></tr>
            </tbody>
          </table>
        </div>
        <div className="sectionfoot">
          <span>On a scoping call we say so when an off-the-shelf tool is the better buy.</span>
          <span className="linkrow">
            <a href="/blog/ai-agent-build-vs-buy-2026">Build vs buy guide ↗</a>
            <a href="/blog/best-ai-agents-for-ecommerce-2026">Best AI agents for ecommerce ↗</a>
          </span>
        </div>
      </div>
    </section>
  );
}

export function AgentMidCta() {
  return (
    <section className="midcta" id="agent-assessment">
      <div className="wrap">
        <div className="midcta-card">
          <div>
            <div className="eyebrow">Free Assessment</div>
            <h2>Name One Task Your Team Repeats Every Day</h2>
            <p>We&apos;ll tell you whether an agent can take it, whether a tool you can buy already does it, and what a build would need. Before you sign, we build a demo agent that runs on your own sample files, so you can check its output against a job you have already done by hand. Bhavesh, our founder, reads every enquiry and usually replies within 2 to 3 hours.</p>
            <ol>
              <li>The task, in one or two sentences</li>
              <li>The systems it touches, such as your ERP, store, or help desk</li>
              <li>Who approves the result today</li>
            </ol>
          </div>
          <div className="finalcta-form">
            <HeroInlineForm
              region="us"
              source="us_home_mid_ai_agent"
              service="AI Agent Development"
              submitLabel="Assess my task"
              formId="home-agent-form"
              trustText="Name and email is enough. We follow up with the three questions."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

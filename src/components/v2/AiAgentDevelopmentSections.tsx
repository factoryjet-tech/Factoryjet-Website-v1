import { Fragment } from 'react';
import { AI_AGENT_FAQ_CATEGORIES, AI_AGENT_FAQS } from './AiAgentDevelopmentFaqs';
import './AiAgentDevelopmentSections.css';

export const breadcrumbs = [
  { name: 'Home', url: 'https://factoryjet.com/' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'AI Agent Development', url: 'https://factoryjet.com/services/ai-agent-development' },
];

function AiAgentFaqAccordion() {
  return (
    <div className="faqlist">
      {AI_AGENT_FAQ_CATEGORIES.map((category) => (
        <Fragment key={category.id}>
          <div className="faq-category" id={category.id}>{category.label}</div>
          {AI_AGENT_FAQS.filter((faq) => faq.category === category.id).map((faq) => (
            <details className="faqitem" data-faq-item key={faq.id}>
              <summary data-faq-question>
                <span className="qid">{faq.id}</span>
                <span className="qtext">{faq.question}</span>
                <span className="chev" aria-hidden="true">+</span>
              </summary>
              <p className="ans" data-faq-answer>{faq.answer}</p>
            </details>
          ))}
        </Fragment>
      ))}
    </div>
  );
}

function WorkflowIcon({ step }: { step: number }) {
  const paths = [
    'M6 3h8l4 4v14H6V3Zm8 0v5h4M9 12h6M9 16h4',
    'M4 5h16M4 12h16M4 19h16M8 3v4M16 10v4M10 17v4',
    'M5 3h14v18H5V3Zm3 5h8M8 12h3M8 16h3M14 12h2M14 16h2',
    'M12 3 3 7v5c0 5 9 9 9 9s9-4 9-9V7l-9-4Zm-4 9 3 3 5-6',
  ];
  return (
    <span className="workflow-icon" aria-hidden="true">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d={paths[step]} />
      </svg>
    </span>
  );
}

function CapabilityDiagram({ kind }: { kind: number }) {
  return (
    <div className={`cap-diagram diagram-${kind}`} aria-hidden="true">
      <svg viewBox="0 0 440 160" fill="none" stroke="currentColor" strokeWidth="1.5">
        {kind === 0 && <>
          <path className="diagram-wire" d="M112 80h62m92 0h62" />
          <rect className="diagram-surface" x="36" y="31" width="76" height="98" rx="8" />
          <path d="M54 55h40M54 69h40M54 83h24M54 106h16" />
          <rect className="diagram-core" x="174" y="43" width="92" height="74" rx="12" />
          <path d="M201 80h38m-19-19v38M207 67l26 26m0-26-26 26" />
          <rect className="diagram-surface" x="328" y="31" width="76" height="98" rx="8" />
          <path d="M345 55h40M345 69h40m-32 31 9 9 16-18" />
        </>}
        {kind === 1 && <>
          <rect className="diagram-surface" x="45" y="24" width="350" height="112" rx="10" />
          <path className="diagram-faint" d="M65 52h310M65 80h310M65 108h310M105 40v80m76-80v80m76-80v80m76-80v80" />
          <path className="diagram-wire" d="M65 101h38l13-31 19 42 25-63 22 35h38l15-19 18 32 24-41 17 26h61l20-18" />
          <circle className="diagram-core" cx="375" cy="64" r="7" />
        </>}
        {kind === 2 && <>
          <path className="diagram-faint" d="M30 80h380" />
          {[20,32,48,28,62,90,116,82,46,66,98,120,76,38,58,86,56,32,18].map((height,index) => (
            <rect key={index} className="diagram-wave" x={46+index*19} y={80-height/2} width="5" height={height} rx="2.5" stroke="none" />
          ))}
        </>}
        {kind === 3 && <>
          <path className="diagram-wire" d="M134 50h43q15 0 15 15v30q0 15 15 15h44m55 0h30V50h40" />
          <rect className="diagram-surface" x="30" y="22" width="104" height="58" rx="10" />
          <path d="M48 41h68M48 55h42" />
          <rect className="diagram-surface" x="54" y="97" width="80" height="40" rx="8" />
          <path d="M69 116h48" />
          <rect className="diagram-core" x="251" y="82" width="55" height="55" rx="12" />
          <path d="m267 110 8 8 15-18" />
          <rect className="diagram-surface" x="366" y="28" width="44" height="44" rx="8" />
          <path d="M379 50h18m-9-9v18" />
        </>}
        {kind === 4 && <>
          <path className="diagram-wire" d="M105 80h52m125 0h52" />
          {[35,170,305].map((x,index) => <g key={x}>
            <rect className={index===2?'diagram-core':'diagram-surface'} x={x} y="35" width="100" height="90" rx="10" />
            <circle cx={x+50} cy="62" r="11" />
            <path d={`M${x+30} 99c0-24 40-24 40 0M${x+22} 112h56`} />
          </g>)}
        </>}
        {kind === 5 && <>
          <path className="diagram-wire" d="M90 40h58q20 0 20 20v20h104V60q0-20 20-20h58M90 120h58q20 0 20-20V80m104 0v20q0 20 20 20h58" />
          {[24,104].map(y=><g key={y}><rect className="diagram-surface" x="46" y={y} width="44" height="32" rx="6" /><rect className="diagram-surface" x="350" y={y} width="44" height="32" rx="6" /></g>)}
          <rect className="diagram-core" x="193" y="53" width="54" height="54" rx="12" />
          <path d="m214 69-9 11 9 11m12-22 9 11-9 11" />
        </>}
      </svg>
    </div>
  );
}

export default function AiAgentDevelopmentSections() {
  return (
    <div className="aiAgentPage">
      <nav className="crumbs" aria-label="Breadcrumb">
        <div className="wrap">
          {breadcrumbs.map((item, index) => (
            <Fragment key={item.url}>
              {index > 0 && ' / '}
              {index === breadcrumbs.length - 1 ? <b aria-current="page">{item.name}</b> : <a href={item.url}>{item.name}</a>}
            </Fragment>
          ))}
        </div>
      </nav>
      <main id="ai-agent-content">
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Service Specification</div>
              <h1>AI Agent Development That Survives Contact With <span className="hero-emphasis">Your Real Systems</span></h1>
              <p className="lead">Custom AI agent development and agentic AI development built to plan, decide, and act inside the tools you already run, NetSuite, SAP, Odoo, Salesforce, HubSpot, Zendesk, not a chatbot wearing an agent's name.</p>
              <div className="actions">
                <a className="btn btn-primary" href="/contact">Scope your AI agent</a>
                <a className="btn btn-ghost" href="#build">See how we build</a>
              </div>
            </div>
            <form className="specpanel" aria-label="Interactive RFQ workflow illustration">
              <div className="specpanel-bar">
                <span className="statusdot" />
                <span>PIPELINE &#8212; RFQ TO QUOTE</span>
                <span className="sys">
                  <span>NETSUITE</span>
                  <span>SAP</span>
                  <span>ODOO</span>
                </span>
              </div>
              <div className="workflow-controls">
                <label className="workflow-toggle" title="Pause or resume the workflow animation">
                  <input type="checkbox" className="workflow-pause" aria-label="Pause workflow animation" />
                  <svg className="pause-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path d="M5 3v10M11 3v10" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
                  <svg className="play-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path d="m5 3 8 5-8 5Z" fill="currentColor" /></svg>
                </label>
                <button type="reset" className="workflow-replay" aria-label="Replay automatic workflow" title="Replay automatic workflow">
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6a5 5 0 1 1 0 4M3 2v4h4" /></svg>
                </button>
              </div>
              <div className="specpanel-body" role="radiogroup" aria-label="Explore workflow steps">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="rfq-step" value="1" />
                  <WorkflowIcon step={0} />
                  <span className="idx">STEP 01</span>
                  <span className="title">Read incoming RFQ</span>
                  <span className="tag">READ</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="rfq-step" value="2" />
                  <WorkflowIcon step={1} />
                  <span className="idx">STEP 02</span>
                  <span className="title">Check pricing rules &amp; live inventory</span>
                  <span className="tag">VERIFY</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="rfq-step" value="3" />
                  <WorkflowIcon step={2} />
                  <span className="idx">STEP 03</span>
                  <span className="title">Compute and write quote</span>
                  <span className="tag">WRITE</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="rfq-step" value="4" />
                  <WorkflowIcon step={3} />
                  <span className="idx">STEP 04</span>
                  <span className="title">Human approval before send</span>
                  <span className="tag">HOLD</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE &#8212; a missing rate is flagged on the price sheet, never guessed.</div>
            </form>
          </div>
        </section>
        <div className="ledger">
          <div className="wrap">
            <div className="ledgercell">
              <div className="k">Founded</div>
              <div className="v">
                <strong className="ledger-number">2020</strong>
              </div>
            </div>
            <div className="ledgercell">
              <div className="k">Team</div>
              <div className="v">Senior AI engineers who've shipped production systems, not a training bench.</div>
            </div>
            <div className="ledgercell">
              <div className="k">Market rate context</div>
              <div className="v">Published industry rates run $25–150+/hr. We scope to a fixed outcome, not an hourly meter.</div>
            </div>
            <div className="ledgercell">
              <div className="k">Track record</div>
              <div className="v"><strong className="ledger-number">500+</strong> businesses served across web, commerce, and AI engagements.</div>
            </div>
          </div>
        </div>
        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">§ Key Facts</div>
              <h2>What Actually Matters Before You Hire an AI Development Company</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p>An AI agent plans and acts across multiple steps. A chatbot answers one message at a time. If a vendor can't explain the difference, they're selling the second thing.</p>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <p>Most AI agent development vendors fail at integration, not at the model. The agent has to read your real data, follow your real policies, and survive weeks of real use, not a demo.</p>
                </div>
                <div className="fact">
                  <div className="sec">§03</div>
                  <p>Custom AI agent development typically runs $10,000 to $100,000+ depending on complexity, and most well-scoped projects reach a first production deployment in 3 to 12 weeks. Broader AI development services, outside the agent category, follow a similar range.</p>
                </div>
                <div className="fact">
                  <div className="sec">§04</div>
                  <p>The three vendor categories are platforms (you build it yourself with LangGraph, CrewAI, or AutoGen), enterprise consultancies (large-scale, slow, expensive), and specialist agentic AI development companies (custom-built, production-focused, faster than a consultancy, more accountable than a platform).</p>
                </div>
                <div className="fact">
                  <div className="sec">§05</div>
                  <p>FactoryJet is an AI development company that works in the third category: custom agents wired into your ERP, CRM, and internal systems, with a human approval step wherever the decision actually matters.</p>
                </div>
              </div>
              <div className="factphoto">
                <img width="1000" height="667" src="/images/us/services/ai-agent-review-signoff.webp" alt="AI-generated illustration of a person reviewing and approving a connected workflow on a tablet" loading="lazy" decoding="async" />
                <div className="cap">FIELD REFERENCE &#8212; REVIEW &amp; SIGN‑OFF</div>
              </div>
            </div>
          </div>
        </section>
        <hr className="divider" />
        <section className="section comparison" id="comparison">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Compare</div>
              <h2>How to Choose an AI Agent Development Company</h2>
            </div>
            <div className="tablewrap">
              <table>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>What they are</th>
                    <th>Best for</th>
                    <th>Trade‑off</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Platforms &amp; frameworks<br /><span className="mono tableSubLabel">LangGraph, CrewAI, AutoGen</span></th>
                    <td>Tools and SDKs for building agents yourself</td>
                    <td>Teams with strong internal engineering</td>
                    <td>You own security, integration, and maintenance</td>
                  </tr>
                  <tr>
                    <th>Enterprise consultancies<br /><span className="mono tableSubLabel">Accenture / IBM scale</span></th>
                    <td>Agentic AI as part of a larger transformation program</td>
                    <td>Large, regulated enterprises</td>
                    <td>Slower pilots, higher cost, less flexibility</td>
                  </tr>
                  <tr className="us">
                    <th>Specialist development partners<br /><span className="mono tableSubLabel tableSubLabelAccent">FactoryJet</span></th>
                    <td>Custom agents built and wired into your real systems</td>
                    <td>Mid-market teams that want a working agent, not a platform to manage</td>
                    <td>Vendor diligence matters more, the category is still maturing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section className="definition" id="definition">
          <div className="definition-image">
            <img className="kenburns" width="1400" height="933" src="/images/us/services/ai-agent-definition-workbench.webp" alt="AI-generated model of an agent connected to documents, a database, tools, and human approval" loading="lazy" decoding="async" />
          </div>
          <div className="definition-copy">
            <div className="eyebrow">Term</div>
            <h2 className="term">AI Agent</h2>
            <p>Software that plans toward a goal, decides what to do next based on context, takes actions across your tools, and adapts when something fails or escalates to a person when it should. That's different from a chatbot (answers one question), traditional automation (if X happens, do Y, no judgment involved), and a fully autonomous AI agent with no human check at all, which isn't what most businesses actually want running against real data. If a vendor's "agent" can't explain what it does when data is missing, it's an automation with better marketing.</p>
          </div>
        </section>
        <section className="section capabilities" id="capabilities">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Capabilities</div>
              <h2>AI Agent Development Services</h2>
            </div>
            <div className="capgrid">
              <a className="cap cap-1" href="/contact">
                <div className="caphead">
                  <span className="capid">CAP‑01</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C94A1A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
                    <path d="M14 3v5h5" />
                    <path d="m9 15 2 2 4-4" />
                  </svg>
                </div>
                <CapabilityDiagram kind={0} />
                <h3>ERP &amp; Procurement</h3>
                <p>Reads RFQs, checks pricing rules and inventory, and turns a request into a quote inside NetSuite, SAP, or Odoo.</p>
                <div className="systags">
                  <span>NetSuite</span>
                  <span>SAP</span>
                  <span>Odoo</span>
                </div>
              </a>
              <a className="cap cap-2" href="/contact">
                <div className="caphead">
                  <span className="capid">CAP‑02</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C94A1A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m12 14 4-4" />
                    <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                  </svg>
                </div>
                <CapabilityDiagram kind={1} />
                <h3>Manufacturing Operations</h3>
                <p>Watches production data and surfaces exactly what a person needs to act on.</p>
                <div className="systags">
                  <span>MES</span>
                  <span>SCADA</span>
                </div>
              </a>
              <a className="cap cap-3" href="/contact">
                <div className="caphead">
                  <span className="capid">CAP‑03</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C94A1A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2z" />
                  </svg>
                </div>
                <CapabilityDiagram kind={2} />
                <h3>AI Voice Agents</h3>
                <p>Answers and routes business calls, hands off to a human the moment confidence drops.</p>
                <div className="systags">
                  <span>Telephony</span>
                </div>
              </a>
              <a className="cap cap-4" href="/contact">
                <div className="caphead">
                  <span className="capid">CAP‑04</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C94A1A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
                    <rect x="2" y="13" width="4" height="6" rx="1.5" />
                    <rect x="18" y="13" width="4" height="6" rx="1.5" />
                  </svg>
                </div>
                <CapabilityDiagram kind={3} />
                <h3>Customer Support Agents</h3>
                <p>Resolves tickets against your real knowledge base, integrates with Zendesk and Shopify or Salesforce, escalates with full context.</p>
                <div className="systags">
                  <span>Zendesk</span>
                  <span>Shopify</span>
                  <span>Salesforce</span>
                </div>
              </a>
              <a className="cap cap-5" href="/contact">
                <div className="caphead">
                  <span className="capid">CAP‑05</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C94A1A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 17 9 11 13 15 21 6" />
                    <path d="M15 6h6v6" />
                  </svg>
                </div>
                <CapabilityDiagram kind={4} />
                <h3>Sales &amp; SDR Agents</h3>
                <p>Qualifies leads and books meetings against your actual pipeline rules.</p>
                <div className="systags">
                  <span>HubSpot</span>
                  <span>Salesforce</span>
                </div>
              </a>
              <a className="cap cap-6" href="/contact">
                <div className="caphead">
                  <span className="capid">CAP‑06</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C94A1A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="6" cy="6" r="2.5" />
                    <circle cx="18" cy="18" r="2.5" />
                    <circle cx="18" cy="6" r="2.5" />
                    <path d="M8.2 6h7.6" />
                    <path d="M18 8.5V15.5" />
                  </svg>
                </div>
                <CapabilityDiagram kind={5} />
                <h3>Integration Services</h3>
                <p>Connecting an agent (yours or one we build) into CRMs, ERPs, and internal APIs.</p>
                <div className="systags">
                  <span>API</span>
                  <span>Webhooks</span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="photobreak" id="photobreak">
          <img className="kenburns" width="2000" height="667" src="/images/us/services/ai-agent-tolerance-check.webp" alt="AI-generated model of a software workflow moving through architecture, processing, verification, and output" loading="lazy" decoding="async" />
          <div className="caption"><span className="dot" />FIELD REFERENCE &#8212; TOLERANCE CHECK</div>
        </section>
        <section className="section process" id="build">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Process</div>
              <h2>How We Build</h2>
            </div>
            <div className="timeline">
              <div className="tnode">
                <div className="idx">01</div>
                <h3>Scope</h3>
                <p>What the agent needs to decide, and where it stops to ask a person.</p>
              </div>
              <div className="tnode">
                <div className="idx">02</div>
                <h3>Architect</h3>
                <p>Decision logic and every human-approval gate designed before code.</p>
              </div>
              <div className="tnode">
                <div className="idx">03</div>
                <h3>Build</h3>
                <p>Engineering against real systems. Working software on a short cycle.</p>
              </div>
              <div className="tnode">
                <div className="idx">04</div>
                <h3>Verify</h3>
                <p>Every stated fact gets checked against its source before ship.</p>
              </div>
              <div className="tnode">
                <div className="idx">05</div>
                <h3>Launch</h3>
                <p>Deployed with monitoring, and a plan for when something fails.</p>
              </div>
            </div>
            <div className="timelineAction">
              <a className="btn btn-primary" href="/contact">Scope your AI agent</a>
            </div>
          </div>
        </section>
        <section className="vlog" id="vlog">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow eyebrowBlue">Verification Log</div>
              <h2>An Agent Is Only as Good as What It Refuses to Guess</h2>
              <p>Three things every agent we build has to get right before it ships, not after.</p>
            </div>
            <div className="ventries">
              <div className="ventry">
                <span className="vtag">VERIFIED</span>
                <h3>Not invented</h3>
                <p>Every fact an agent we build reports gets checked against its actual source before it's used or sent anywhere. It won't invent a name, a number, or a detail.</p>
              </div>
              <div className="ventry">
                <span className="vtag">INTEGRATED</span>
                <h3>Built into your systems</h3>
                <p>A specialty equipment contractor needed complex retrofit pricing. We built an agent that computes every job live from one rule book, reading and writing real data.</p>
              </div>
              <div className="ventry">
                <span className="vtag">DISCLOSED</span>
                <h3>Honest when it doesn't know</h3>
                <p>Tested against a job priced by hand, the agent landed within a fraction of a percent. When a rate is missing, it says so instead of guessing.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section faq" id="faq">
          <div className="wrap">
            <div className="faqwrap">
              <div className="faqintro">
                <div className="eyebrow">FAQ</div>
                <h2 className="faqHeading">AI Agent Development, Answered Directly</h2>
                <p>Real questions buyers ask, no hedging.</p>
                <nav className="faq-catnav" aria-label="FAQ categories">
                  <a href="#faq-vendor">Vendor Selection</a>
                  <a href="#faq-definitions">Definitions</a>
                  <a href="#faq-cost">Cost &amp; Timeline</a>
                  <a href="#faq-support">Build, Buy &amp; Support</a>
                </nav>
              </div>
              <AiAgentFaqAccordion />
            </div>
          </div>
        </section>
        <section className="section referencesSection references" id="references">
          <div className="wrap">
            <div className="eyebrow">References</div>
            <div className="refs">
              <a href="/services/ai-automation">Compare: AI Agent Development vs. AI Automation vs. AI Integration Services</a>
              <a href="/blog/what-is-agentic-ai">What Is Agentic AI? A Plain-Language Guide</a>
              <a href="/tools/ai-agent-roi-calculator">AI Agent Cost Calculator</a>
            </div>
          </div>
        </section>
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <h2>Tell Us the Workflow, We'll Tell You the Truth</h2>
              <p>Tell us the workflow you want an agent to run. We'll tell you honestly whether that's a build, a buy, or something in between, before you spend anything.</p>
            </div>
            <a className="btn btn-primary" href="/contact">Scope your AI agent</a>
          </div>
        </section>
      </main>
    </div>
  );
}

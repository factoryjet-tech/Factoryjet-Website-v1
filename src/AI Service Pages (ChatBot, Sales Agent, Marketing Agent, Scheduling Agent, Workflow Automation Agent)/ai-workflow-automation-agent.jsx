import { useState, useEffect, useRef } from "react";

const C = {
  blue: "#0052CC",
  blueLight: "#E6F0FF",
  blueDark: "#0042A3",
  blue800: "#002152",
  orange: "#FF6B35",
  orangeLight: "#FFF3EE",
  green: "#10B981",
  greenLight: "#ECFDF5",
  navy: "#0F172A",
  slate: "#334155",
  gray: "#64748B",
  light: "#E2E8F0",
  offWhite: "#F8FAFC",
};

function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function Reveal({ children, delay = 0 }) {
  const [ref, vis] = useReveal();
  return (
    <div ref={ref} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? "translateY(0)" : "translateY(32px)",
      transition: `opacity 0.7s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.7s cubic-bezier(.16,1,.3,1) ${delay}s`,
    }}>{children}</div>
  );
}

function Label({ children, light }) {
  return (
    <span style={{
      display: "inline-block", fontSize: 13, fontWeight: 600,
      letterSpacing: "0.08em", textTransform: "uppercase",
      color: light ? C.orange : C.blue,
      background: light ? "rgba(255,107,53,0.12)" : C.blueLight,
      padding: "6px 16px", borderRadius: 100, marginBottom: 16,
    }}>{children}</span>
  );
}

function Title({ children, light, align = "center" }) {
  return (
    <h2 style={{
      fontFamily: "Inter, sans-serif",
      fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700,
      lineHeight: 1.15, letterSpacing: "-0.02em",
      color: light ? "#fff" : C.navy, textAlign: align,
      margin: "0 0 16px", maxWidth: 800,
      marginLeft: align === "center" ? "auto" : 0,
      marginRight: align === "center" ? "auto" : 0,
    }}>{children}</h2>
  );
}

function Sub({ children, light, align = "center" }) {
  return (
    <p style={{
      fontFamily: "Inter, sans-serif",
      fontSize: "clamp(16px, 2vw, 18px)", lineHeight: 1.65,
      color: light ? "rgba(255,255,255,0.75)" : C.gray,
      textAlign: align, maxWidth: 680,
      margin: align === "center" ? "0 auto" : 0,
    }}>{children}</p>
  );
}

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke={C.green} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
    <path d="M22 4L12 14.01l-3-3" />
  </svg>
);

const ArrowIcon = ({ color = "#fff" }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const ChevronIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

function Btn({ children, variant = "primary", style: extra }) {
  const [hov, setHov] = useState(false);
  const v = {
    primary: { background: C.blue, color: "#fff", border: "none" },
    orange: { background: C.orange, color: "#fff", border: "none" },
    outline: { background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.3)" },
  };
  return (
    <a href="#" onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 600,
        padding: "14px 28px", borderRadius: 8, textDecoration: "none",
        cursor: "pointer", transition: "all 0.25s ease",
        transform: hov ? "translateY(-2px)" : "none",
        boxShadow: hov ? "0 8px 24px rgba(0,82,204,0.18)" : "none",
        ...v[variant], ...extra,
      }}>{children}</a>
  );
}

function FAQItem({ q, a, open, toggle }) {
  return (
    <div style={{ borderBottom: `1px solid ${C.light}` }}>
      <button onClick={toggle} style={{
        width: "100%", display: "flex", justifyContent: "space-between",
        alignItems: "center", padding: "20px 0", background: "none",
        border: "none", cursor: "pointer", fontFamily: "Inter, sans-serif",
        fontSize: 16, fontWeight: 600, color: C.navy, textAlign: "left", gap: 16,
      }}>
        <span style={{ flex: 1 }}>{q}</span>
        <span style={{ transition: "transform 0.3s", transform: open ? "rotate(180deg)" : "rotate(0)" }}>
          <ChevronIcon />
        </span>
      </button>
      <div style={{ maxHeight: open ? 600 : 0, overflow: "hidden", transition: "max-height 0.4s ease" }}>
        <p style={{
          fontFamily: "Inter, sans-serif", fontSize: 15, lineHeight: 1.7,
          color: C.gray, padding: "0 0 20px", margin: 0,
        }}>{a}</p>
      </div>
    </div>
  );
}

function PricingCard({ tier, price, desc, features, popular }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        position: "relative", background: "#fff", borderRadius: 16,
        padding: "36px 28px",
        border: popular ? `2px solid ${C.orange}` : `1px solid ${C.light}`,
        boxShadow: hov ? "0 20px 60px rgba(0,82,204,0.12)" : "0 4px 16px rgba(0,0,0,0.04)",
        transition: "all 0.35s ease",
        transform: hov ? "translateY(-4px)" : "none",
        flex: "1 1 300px", maxWidth: 380,
      }}>
      {popular && (
        <div style={{
          position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)",
          background: C.orange, color: "#fff", fontSize: 12, fontWeight: 700,
          padding: "4px 16px", borderRadius: 100, letterSpacing: "0.05em", textTransform: "uppercase",
        }}>Most Popular</div>
      )}
      <div style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: popular ? C.orange : C.blue, marginBottom: 12 }}>{tier}</div>
      <div style={{ fontSize: 36, fontWeight: 700, color: C.navy, letterSpacing: "-0.02em" }}>
        {price} <span style={{ fontSize: 14, fontWeight: 500, color: C.gray }}>starting from</span>
      </div>
      <p style={{ fontSize: 14, color: C.gray, lineHeight: 1.6, margin: "12px 0 24px", minHeight: 42 }}>{desc}</p>
      <div style={{ height: 1, background: C.light, margin: "0 0 20px" }} />
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 12 }}>
        {features.map((f, i) => (
          <li key={i} style={{ display: "flex", gap: 10, fontSize: 14, color: C.slate, lineHeight: 1.5 }}>
            <span style={{ flexShrink: 0, marginTop: 2 }}><CheckIcon /></span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Btn variant={popular ? "orange" : "primary"} style={{ width: "100%", justifyContent: "center" }}>
        Get Started <ArrowIcon />
      </Btn>
    </div>
  );
}

function StatBar({ stats }) {
  return (
    <section style={{ background: C.blue, padding: "48px 24px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 32 }}>
        {stats.map((s, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff" }}>{s.v}</div>
            <div style={{ fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Nav({ links }) {
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, background: "rgba(15,23,42,0.92)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <a href="/" style={{ fontSize: 22, fontWeight: 700, color: "#fff", textDecoration: "none" }}>
          <span style={{ color: C.blue }}>Factory</span><span style={{ color: C.orange }}>Jet</span>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {links.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>{item}</a>
          ))}
          <Btn variant="primary" style={{ padding: "10px 20px", fontSize: 13 }}>Free Assessment <ArrowIcon /></Btn>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#080E1A", padding: "64px 24px 32px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 48, marginBottom: 48 }}>
          <div>
            <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>
              <span style={{ color: C.blue }}>Factory</span><span style={{ color: C.orange }}>Jet</span>
            </div>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>AI-native digital transformation for businesses ready to scale.</p>
          </div>
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>AI Agent Services</h4>
            {["Customer Support", "Voice Agent", "AI Chatbot", "Sales Agent", "Scheduling", "Marketing", "Workflow Automation"].map((s) => (
              <a key={s} href="#" style={{ display: "block", fontSize: 14, color: "rgba(255,255,255,0.55)", textDecoration: "none", marginBottom: 10 }}>{s}</a>
            ))}
          </div>
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>Contact</h4>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>connect@factoryjet.com</p>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>+91 9103398557</p>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>factoryjet.com</p>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24, textAlign: "center" }}>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>© 2026 FactoryJet Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function AIWorkflowAutomationPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const capabilities = [
    { icon: "👤", title: "Employee Onboarding", desc: "Document collection, system access, training assignment, equipment requests, welcome sequences — all orchestrated." },
    { icon: "📄", title: "Document Processing", desc: "AI extracts data from invoices, contracts, and forms. Validates, populates systems, flags discrepancies." },
    { icon: "💰", title: "Invoice & AP Automation", desc: "Three-way matching, approval routing, payment scheduling, vendor communication, exception handling." },
    { icon: "✅", title: "Compliance Auditing", desc: "Continuous monitoring against regulations. Flags non-compliance, generates audit trails, triggers remediation." },
    { icon: "🔧", title: "IT Service Management", desc: "Ticket routing, password resets, software provisioning, access requests — resolved automatically." },
    { icon: "📦", title: "Supply Chain Coordination", desc: "Inventory monitoring, reorder triggers, supplier communication, delivery tracking, demand forecasting." },
  ];
  const faqs = [
    { q: "What workflows can an AI agent automate?", a: "Any multi-step process involving information gathering, decisions, system updates, and communication — onboarding, invoicing, compliance, IT tickets, supply chain, and more." },
    { q: "How is this different from Zapier or Make?", a: "Zapier connects apps with if/then rules. An AI agent reads unstructured documents, makes judgment calls, handles exceptions, and orchestrates multi-step workflows." },
    { q: "Can it handle our specific processes?", a: "Yes. We build custom agents for your exact workflows — rules, exceptions, and edge cases. No two implementations are the same." },
    { q: "What systems does it integrate with?", a: "200+ including Salesforce, SAP, Oracle, ERPNext, HubSpot, Slack, Teams, Google Workspace, Jira, ServiceNow, QuickBooks, and more." },
    { q: "How much does it cost?", a: "Starting from $2,499 for single-process. Growth at $5,999. Enterprise at $14,999." },
    { q: "What ROI can we expect?", a: "40–60% efficiency gains, 35% cost reduction. Most achieve ROI in 4–6 months." },
    { q: "How long does implementation take?", a: "Single-process: 3–4 weeks. Multi-process: 5–8 weeks. Enterprise-wide: phased over 3–6 months." },
    { q: "What about error handling?", a: "Robust exception handling — flags anomalies, routes edge cases to humans with context, maintains audit trails, and learns from corrections." },
  ];
  const pricingPlans = [
    { tier: "Starter", price: "$2,499", desc: "Best for automating a single process.", features: ["Single-process AI automation", "2 system integrations", "Error handling and alerts", "Basic analytics", "Documentation", "30 days support"] },
    { tier: "Growth", price: "$5,999", desc: "Best for multi-process across 2–3 departments.", features: ["Up to 5 workflow automations", "Multi-system integration", "Exception handling and routing", "Audit trail and compliance logs", "Performance dashboard", "60 days support"], popular: true },
    { tier: "Enterprise", price: "$14,999", desc: "Organization-wide process automation.", features: ["Unlimited workflows", "200+ system integrations", "Custom business rule engine", "Cross-department orchestration", "Advanced analytics", "Dedicated account manager", "90 days support"] },
  ];

  return (
    <div style={{ fontFamily: "Inter, sans-serif", overflow: "hidden", background: "#fff" }}>
      <Nav links={["Workflows", "Integrations", "Pricing", "FAQ"]} />

      <section style={{ position: "relative", background: `linear-gradient(170deg, ${C.navy} 0%, #091528 50%, ${C.navy} 100%)`, padding: "140px 24px 100px", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div style={{ position: "absolute", top: "30%", right: "8%", width: 400, height: 400, background: `radial-gradient(circle, rgba(0,82,204,0.08) 0%, transparent 70%)`, borderRadius: "50%", filter: "blur(60px)" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Reveal>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.45)", marginBottom: 32 }}>
              <a href="/" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Home</a><span>›</span>
              <a href="/ai-agent-development-services" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>AI Agent Development</a><span>›</span>
              <span style={{ color: "rgba(255,255,255,0.7)" }}>AI Workflow Automation</span>
            </div>
          </Reveal>
          <div style={{ maxWidth: 820 }}>
            <Reveal delay={0.1}>
              <Label light>AI Workflow Automation Agent</Label>
              <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(36px, 5.5vw, 60px)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#fff", margin: "16px 0 0" }}>
                Your Team Shouldn't Be Doing Work a Machine Can Do Better.{" "}
                <span style={{ color: C.orange }}>Deploy AI Agents That Automate Your Most Tedious Business Processes.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.25}>
              <p style={{ fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.7, color: "rgba(255,255,255,0.72)", maxWidth: 640, marginTop: 28 }}>
                FactoryJet builds custom AI workflow automation agents that handle employee onboarding, document processing, invoice reconciliation, compliance auditing, and more — across departments and systems. 40–60% efficiency gains. 35% cost reduction.
              </p>
            </Reveal>
            <Reveal delay={0.35}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 32 }}>
                <Btn variant="orange">Get a Free Workflow Assessment <ArrowIcon /></Btn>
                <Btn variant="outline">See Automation in Action</Btn>
              </div>
            </Reveal>
            <Reveal delay={0.45}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 24, marginTop: 32 }}>
                {["40–60% efficiency gains", "200+ system integrations", "Cross-department automation", "ROI in 4–6 months"].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.65)" }}>
                    <CheckIcon /><span>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <StatBar stats={[{ v: "60%", l: "Efficiency Gains" }, { v: "35%", l: "Cost Reduction" }, { v: "200+", l: "Integrations" }, { v: "90%", l: "Faster Processing" }]} />

      <section style={{ background: "#fff", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <Label>The Problem</Label>
              <Title>Your Best People Are Stuck Doing Your Worst Work</Title>
              <Sub>71% of organizations report employees spend 4+ hours daily on repetitive manual tasks.</Sub>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {[{ stat: "71%", text: "of organizations say employees waste 4+ hours daily on repetitive manual tasks" }, { stat: "$1.8T", text: "annual cost of manual processes to US businesses" }, { stat: "60%", text: "of occupations have 30%+ of activities automatable with current AI" }].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div style={{ background: C.offWhite, borderRadius: 12, padding: "32px 28px", border: `1px solid ${C.light}` }}>
                  <div style={{ fontSize: 36, fontWeight: 700, color: C.blue, letterSpacing: "-0.02em", marginBottom: 12 }}>{item.stat}</div>
                  <p style={{ fontSize: 15, color: C.slate, lineHeight: 1.6, margin: 0 }}>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" style={{ background: C.offWhite, padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <Label>Workflows We Automate</Label>
              <Title>From Tedious to Autonomous</Title>
              <Sub>Not simple triggers and zaps. Intelligent agents that handle complex, multi-step processes end-to-end.</Sub>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
            {capabilities.map((cap, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div style={{ background: "#fff", borderRadius: 12, padding: "32px 28px", border: `1px solid ${C.light}`, height: "100%" }}>
                  <div style={{ fontSize: 32, marginBottom: 16 }}>{cap.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: C.navy, margin: "0 0 8px" }}>{cap.title}</h3>
                  <p style={{ fontSize: 15, color: C.gray, lineHeight: 1.6, margin: 0 }}>{cap.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      
      <section id="integrations" style={{ background: "#fff", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Reveal><div style={{ textAlign: "center", marginBottom: 56 }}><Label>Integrations</Label><Title>200+ Systems. One Intelligent Agent.</Title></div></Reveal>
          <Reveal delay={0.1}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
              {[
                { cat: "CRM", tools: "Salesforce, HubSpot, Zoho, Pipedrive" },
                { cat: "ERP", tools: "SAP, Oracle, ERPNext, NetSuite" },
                { cat: "Communication", tools: "Slack, Teams, Email, WhatsApp" },
                { cat: "HR/HRIS", tools: "Workday, BambooHR, Gusto, Rippling" },
                { cat: "Finance", tools: "QuickBooks, Xero, Stripe, Square" },
                { cat: "IT/DevOps", tools: "Jira, ServiceNow, PagerDuty, GitHub" },
                { cat: "Documents", tools: "Google Workspace, Microsoft 365, Notion" },
                { cat: "Storage", tools: "AWS S3, Google Cloud, Dropbox, Box" },
              ].map((int, i) => (
                <div key={i} style={{ background: C.offWhite, borderRadius: 12, padding: "20px", border: `1px solid ${C.light}` }}>
                  <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: C.blue, marginBottom: 8 }}>{int.cat}</div>
                  <div style={{ fontSize: 14, color: C.gray, lineHeight: 1.5 }}>{int.tools}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="pricing" style={{ background: C.offWhite, padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <Label>Pricing</Label>
              <Title>Transparent, Value-Based Pricing</Title>
              <Sub>No hidden fees. No per-interaction charges. Complete build with transparent costs.</Sub>
            </div>
          </Reveal>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 24, alignItems: "stretch" }}>
            {pricingPlans.map((p, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <PricingCard tier={p.tier} price={p.price} desc={p.desc} features={p.features} popular={p.popular} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" style={{ background: "#fff", padding: "96px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <Label>FAQ</Label>
              <Title>Frequently Asked Questions</Title>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              {faqs.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} open={openFaq === i} toggle={() => setOpenFaq(openFaq === i ? null : i)} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ background: C.navy, padding: "96px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: -80, left: "50%", transform: "translateX(-50%)", width: 500, height: 250, background: "radial-gradient(circle, rgba(0,82,204,0.1) 0%, transparent 70%)", borderRadius: "50%" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <Reveal>
            <Label light>Ready to Automate?</Label>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, lineHeight: 1.12, letterSpacing: "-0.02em", color: "#fff", margin: "16px 0 20px" }}>
              Every Manual Process Is a Bottleneck. Every Bottleneck Costs Money.
            </h2>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", lineHeight: 1.65, marginBottom: 36 }}>
              Book a free Workflow Assessment. We'll map your processes and identify the highest-impact automation opportunities.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
              <Btn variant="orange">Get Your Free Assessment <ArrowIcon /></Btn>
              <Btn variant="outline">See Automation in Action</Btn>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

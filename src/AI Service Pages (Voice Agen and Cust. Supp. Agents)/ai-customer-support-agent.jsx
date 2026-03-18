import { useState, useEffect, useRef } from "react";

/* FactoryJet — AI Customer Support Agent Service Page
   Design System: Inter only, Jet Blue #0052CC, Jet Orange #FF6B35, Jet Green #10B981
   Layout: Dark hero → alternating white/off-white sections
   Anti-slop: No gradient text, no rainbow, no particles, no spinning counters */

const COLORS = {
  blue: "#0052CC", blueLight: "#E6F0FF", blueDark: "#0042A3", blue800: "#002152",
  orange: "#FF6B35", orangeLight: "#FFF3EE",
  green: "#10B981", greenLight: "#ECFDF5",
  navy: "#0F172A", slate: "#334155", gray: "#64748B",
  light: "#E2E8F0", offWhite: "#F8FAFC",
};

/* ─── Intersection Observer Hook ─── */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); }}, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)", transition: `opacity 0.7s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.7s cubic-bezier(.16,1,.3,1) ${delay}s` }}>
      {children}
    </div>
  );
}

/* ─── Reusable Components ─── */
function SectionLabel({ children, light }) {
  return (
    <span style={{ display: "inline-block", fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: light ? COLORS.orange : COLORS.blue, background: light ? "rgba(255,107,53,0.12)" : COLORS.blueLight, padding: "6px 16px", borderRadius: 100, marginBottom: 16 }}>
      {children}
    </span>
  );
}

function SectionTitle({ children, light, align = "center" }) {
  return <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em", color: light ? "#fff" : COLORS.navy, textAlign: align, margin: "0 0 16px", maxWidth: 800, marginLeft: align === "center" ? "auto" : 0, marginRight: align === "center" ? "auto" : 0 }}>{children}</h2>;
}

function SectionSub({ children, light, align = "center" }) {
  return <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(16px, 2vw, 18px)", lineHeight: 1.65, color: light ? "rgba(255,255,255,0.75)" : COLORS.gray, textAlign: align, maxWidth: 680, margin: align === "center" ? "0 auto" : 0 }}>{children}</p>;
}

function Button({ children, variant = "primary", href = "#", onClick, style: s }) {
  const styles = {
    primary: { background: COLORS.blue, color: "#fff", border: "none" },
    orange: { background: COLORS.orange, color: "#fff", border: "none" },
    outline: { background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.3)" },
    outlineDark: { background: "transparent", color: COLORS.blue, border: `2px solid ${COLORS.light}` },
  };
  const [hovered, setHovered] = useState(false);
  return (
    <a href={href} onClick={onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 600, padding: "14px 28px", borderRadius: 8, textDecoration: "none", cursor: "pointer", transition: "all 0.25s ease", transform: hovered ? "translateY(-2px)" : "none", boxShadow: hovered ? "0 8px 24px rgba(0,82,204,0.18)" : "none", ...styles[variant], ...s }}>
      {children}
    </a>
  );
}

/* ─── Icons (inline SVG) ─── */
const CheckIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={COLORS.green} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>;
const ArrowRight = ({ color = "#fff" }) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>;
const ChevronDown = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>;

/* ─── FAQ Accordion ─── */
function FAQItem({ q, a, open, toggle }) {
  return (
    <div style={{ borderBottom: `1px solid ${COLORS.light}` }}>
      <button onClick={toggle} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0", background: "none", border: "none", cursor: "pointer", fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 600, color: COLORS.navy, textAlign: "left", gap: 16 }}>
        <span style={{ flex: 1 }}>{q}</span>
        <span style={{ transition: "transform 0.3s", transform: open ? "rotate(180deg)" : "rotate(0)" }}><ChevronDown /></span>
      </button>
      <div style={{ maxHeight: open ? 600 : 0, overflow: "hidden", transition: "max-height 0.4s ease" }}>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, lineHeight: 1.7, color: COLORS.gray, padding: "0 0 20px", margin: 0 }}>{a}</p>
      </div>
    </div>
  );
}

/* ─── Stats Counter ─── */
function StatItem({ value, label, suffix = "" }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff" }}>{value}{suffix}</div>
      <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>{label}</div>
    </div>
  );
}

/* ─── Pricing Card ─── */
function PricingCard({ tier, price, desc, features, popular, color = COLORS.blue }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ position: "relative", background: "#fff", borderRadius: 16, padding: "36px 28px", border: popular ? `2px solid ${COLORS.orange}` : `1px solid ${COLORS.light}`, boxShadow: hovered ? "0 20px 60px rgba(0,82,204,0.12)" : "0 4px 16px rgba(0,0,0,0.04)", transition: "all 0.35s ease", transform: hovered ? "translateY(-4px)" : "none", flex: "1 1 300px", maxWidth: 380 }}>
      {popular && <div style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", background: COLORS.orange, color: "#fff", fontSize: 12, fontWeight: 700, padding: "4px 16px", borderRadius: 100, letterSpacing: "0.05em", textTransform: "uppercase" }}>Most Popular</div>}
      <div style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: popular ? COLORS.orange : COLORS.blue, marginBottom: 12 }}>{tier}</div>
      <div style={{ fontSize: 36, fontWeight: 700, color: COLORS.navy, letterSpacing: "-0.02em" }}>{price} <span style={{ fontSize: 14, fontWeight: 500, color: COLORS.gray }}>starting from</span></div>
      <p style={{ fontSize: 14, color: COLORS.gray, lineHeight: 1.6, margin: "12px 0 24px", minHeight: 42 }}>{desc}</p>
      <div style={{ height: 1, background: COLORS.light, margin: "0 0 20px" }} />
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 12 }}>
        {features.map((f, i) => (
          <li key={i} style={{ display: "flex", gap: 10, fontSize: 14, color: COLORS.slate, lineHeight: 1.5 }}>
            <span style={{ flexShrink: 0, marginTop: 2 }}><CheckIcon /></span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Button variant={popular ? "orange" : "primary"} style={{ width: "100%", justifyContent: "center" }}>Get Started <ArrowRight /></Button>
    </div>
  );
}

/* ════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ════════════════════════════════════════════════════ */
export default function AICustomerSupportAgentPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const faqs = [
    { q: "What exactly is an AI customer support agent, and how is it different from a regular chatbot?", a: "A traditional chatbot follows pre-programmed decision trees — if a customer asks something outside the script, it breaks. An AI customer support agent uses large language models to understand natural language, maintain context across a conversation, access your business data in real time, and take actions like processing refunds or updating orders. It reasons through problems rather than matching keywords to canned responses." },
    { q: "How much does an AI customer service agent cost for a small business?", a: "FactoryJet's AI customer support agent development starts from $2,999 for single-channel deployment. Costs vary based on the number of channels, complexity of integrations, knowledge base size, and custom functionality required. Unlike SaaS tools that charge per resolution or per agent seat with monthly fees that scale unpredictably, our pricing covers the complete build with transparent ongoing costs." },
    { q: "Can AI really handle customer support as well as a human agent?", a: "For routine inquiries — which typically make up 70% to 85% of total support volume — yes, and often better. AI responds instantly at any hour, never has a bad day, maintains perfect consistency, and can handle dozens of conversations simultaneously. For complex, emotional, or novel situations that require human judgment and empathy, AI seamlessly escalates to your team with full context." },
    { q: "How long does it take to deploy an AI customer support agent?", a: "FactoryJet's typical deployment timeline is three to five weeks from kickoff to launch. Simple implementations with a single channel and straightforward knowledge base can go live in as little as two weeks. Complex multi-channel deployments with deep system integrations typically take six to eight weeks." },
    { q: "Is AI customer support secure? What about customer data privacy?", a: "Security is foundational, not optional. FactoryJet builds AI agents with end-to-end encryption, role-based access controls, SOC 2-compliant hosting infrastructure, and data handling practices aligned with GDPR, CCPA, and PIPEDA requirements." },
    { q: "What is the ROI of an AI customer support agent for an SMB?", a: "Most SMB clients see positive ROI within two to three months. A single full-time support agent costs $45,000 to $75,000 annually. An AI customer support agent handling 70% to 85% of your ticket volume costs a fraction of that, while providing 24/7 availability and instant response times." },
    { q: "What channels can AI customer support agents operate on?", a: "FactoryJet deploys AI customer support agents across website live chat, email, Facebook Messenger, Instagram DM, WhatsApp Business, SMS, Slack, Microsoft Teams, and custom messaging platforms. Each channel is configured for its unique interaction patterns." },
    { q: "Can the AI agent integrate with our existing CRM and helpdesk tools?", a: "Yes. FactoryJet integrates AI customer support agents with Salesforce, HubSpot, Zoho CRM, Freshdesk, Zendesk, Intercom, ServiceNow, Jira Service Management, and custom systems via API. The agent reads and writes to your existing tools — no parallel systems required." },
    { q: "What happens when the AI agent can't answer a question?", a: "The agent recognizes its limitations and escalates seamlessly to a human team member — with the full conversation history, customer profile, and its own analysis of the issue. No customer has to repeat themselves. Your team picks up exactly where the AI left off." },
    { q: "Do you offer ongoing support after deployment?", a: "Every plan includes post-launch optimization. Starter includes 30 days, Growth includes 60 days, and Enterprise includes 90 days. We also offer ongoing optimization retainers for businesses that want continuous improvement, knowledge base expansion, and performance monitoring." },
  ];

  const capabilities = [
    { icon: "💬", title: "Omnichannel Deployment", desc: "Web chat, WhatsApp, email, voice, social media — your AI agent meets customers wherever they are." },
    { icon: "🧠", title: "Knowledge Integration", desc: "Access your product docs, policies, order history, and CRM data to give accurate, contextual answers." },
    { icon: "⚡", title: "System Actions", desc: "Process refunds, update orders, modify subscriptions, reset passwords — not just answers, actions." },
    { icon: "📊", title: "Sentiment Analysis", desc: "Detect frustration, urgency, and satisfaction in real time. Escalate before problems worsen." },
    { icon: "🎯", title: "Personalization", desc: "Tailor every response based on customer history, purchase patterns, and individual preferences." },
    { icon: "🌍", title: "Multilingual Support", desc: "Serve customers in 100+ languages with native-quality understanding and response generation." },
  ];

  const process = [
    { step: "01", title: "Discovery & Assessment", desc: "We audit your current support workflows, ticket categories, resolution patterns, and systems to identify the highest-impact automation opportunities.", duration: "Week 1" },
    { step: "02", title: "Architecture & Design", desc: "Custom conversation flows, integration specifications, knowledge base structure, escalation logic, and agent personality — all designed around your brand.", duration: "Week 2" },
    { step: "03", title: "Build & Train", desc: "Our AI engineers build your agent, train it on your knowledge base, integrate with your systems, and test across hundreds of real-world scenarios.", duration: "Weeks 2–4" },
    { step: "04", title: "Test & Validate", desc: "Comprehensive QA including edge cases, security audit, load testing, and red-teaming for hallucination prevention. You review before anything goes live.", duration: "Week 4" },
    { step: "05", title: "Launch & Optimize", desc: "Phased rollout with real-time monitoring. We analyze every conversation, refine responses, expand capabilities, and optimize for better outcomes.", duration: "Ongoing" },
  ];

  const integrations = [
    "Salesforce", "HubSpot", "Zoho CRM", "Freshdesk", "Zendesk", "Intercom",
    "ServiceNow", "Shopify", "WooCommerce", "Slack", "Microsoft Teams", "WhatsApp Business",
    "Stripe", "QuickBooks", "Jira", "BigCommerce"
  ];

  return (
    <div style={{ fontFamily: "Inter, sans-serif", overflow: "hidden", background: "#fff" }}>

      {/* ════════ NAVIGATION ════════ */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, background: "rgba(15,23,42,0.92)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <a href="/" style={{ fontSize: 22, fontWeight: 700, color: "#fff", textDecoration: "none", letterSpacing: "-0.02em" }}>
            <span style={{ color: COLORS.blue }}>Factory</span><span style={{ color: COLORS.orange }}>Jet</span>
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {["Services", "Process", "Pricing", "FAQ"].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{ fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.7)", textDecoration: "none", transition: "color 0.2s" }}>{item}</a>
            ))}
            <Button variant="primary" style={{ padding: "10px 20px", fontSize: 13 }}>Free Assessment <ArrowRight /></Button>
          </div>
        </div>
      </nav>

      {/* ════════ HERO SECTION ════════ */}
      <section style={{ position: "relative", background: `linear-gradient(170deg, ${COLORS.navy} 0%, ${COLORS.blue800} 50%, ${COLORS.navy} 100%)`, padding: "140px 24px 100px", overflow: "hidden" }}>
        {/* Subtle grid background */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`, backgroundSize: "40px 40px" }} />
        {/* Glow accent */}
        <div style={{ position: "absolute", top: "20%", right: "10%", width: 400, height: 400, background: `radial-gradient(circle, rgba(0,82,204,0.15) 0%, transparent 70%)`, borderRadius: "50%", filter: "blur(60px)" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          {/* Breadcrumb */}
          <Reveal>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.45)", marginBottom: 32 }}>
              <a href="/" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Home</a>
              <span>›</span>
              <a href="/ai-agent-development-services" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>AI Agent Development</a>
              <span>›</span>
              <span style={{ color: "rgba(255,255,255,0.7)" }}>AI Customer Support Agent</span>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 48, maxWidth: 820 }}>
            <Reveal delay={0.1}>
              <SectionLabel light>AI Customer Support Agent</SectionLabel>
              <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(36px, 5.5vw, 60px)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#fff", margin: "16px 0 0" }}>
                Your Customers Deserve Instant Answers. Your Team Deserves Sleep.{" "}
                <span style={{ color: COLORS.orange }}>An AI Customer Support Agent Delivers Both.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.25}>
              <p style={{ fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.7, color: "rgba(255,255,255,0.72)", maxWidth: 640 }}>
                FactoryJet builds custom AI customer support agents that resolve up to 80% of support tickets autonomously — handling refunds, tracking orders, troubleshooting issues, and answering product questions around the clock. No templates. No generic bots. A purpose-built AI agent trained on your business, your products, and your brand voice.
              </p>
            </Reveal>

            <Reveal delay={0.35}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
                <Button variant="orange">Get a Free Support Assessment <ArrowRight /></Button>
                <Button variant="outline">See a Live Demo</Button>
              </div>
            </Reveal>

            <Reveal delay={0.45}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 24, marginTop: 8 }}>
                {["Built for North American SMBs", "87% avg. resolution rate", "11-second first response", "Deploys in 3–5 weeks"].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.65)" }}>
                    <CheckIcon />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════ STATS BAR ════════ */}
      <section style={{ background: COLORS.blue, padding: "48px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 32 }}>
          <StatItem value="87%" label="Avg. Resolution Rate" />
          <StatItem value="11" suffix="s" label="First Response Time" />
          <StatItem value="70" suffix="%" label="Cost Reduction" />
          <StatItem value="24/7" label="Availability" />
        </div>
      </section>

      {/* ════════ PROBLEM / SOLUTION ════════ */}
      <section style={{ background: "#fff", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <SectionLabel>The Problem</SectionLabel>
              <SectionTitle>Your Support Team Is Drowning. Your Customers Are Waiting.</SectionTitle>
              <SectionSub>Most SMBs are stuck in a painful cycle — growing customer expectations, limited support staff, and tools that weren't built for the volume or complexity of modern customer service.</SectionSub>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {[
              { stat: "60%", text: "of customers say they'll switch brands after just two bad support experiences" },
              { stat: "72%", text: "expect responses within 30 minutes — but average SMB response time is 12+ hours" },
              { stat: "$1.6T", text: "lost annually by US businesses due to poor customer service" },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div style={{ background: COLORS.offWhite, borderRadius: 12, padding: "32px 28px", border: `1px solid ${COLORS.light}` }}>
                  <div style={{ fontSize: 36, fontWeight: 700, color: COLORS.blue, letterSpacing: "-0.02em", marginBottom: 12 }}>{item.stat}</div>
                  <p style={{ fontSize: 15, color: COLORS.slate, lineHeight: 1.6, margin: 0 }}>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CAPABILITIES ════════ */}
      <section id="services" style={{ background: COLORS.offWhite, padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <SectionLabel>Capabilities</SectionLabel>
              <SectionTitle>What Your AI Customer Support Agent Can Do</SectionTitle>
              <SectionSub>Not a chatbot with a fancy label. A genuine AI agent that understands intent, takes actions, and resolves issues end-to-end.</SectionSub>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
            {capabilities.map((cap, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div style={{ background: "#fff", borderRadius: 12, padding: "32px 28px", border: `1px solid ${COLORS.light}`, height: "100%", transition: "box-shadow 0.3s, transform 0.3s" }}>
                  <div style={{ fontSize: 32, marginBottom: 16 }}>{cap.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: COLORS.navy, margin: "0 0 8px", letterSpacing: "-0.01em" }}>{cap.title}</h3>
                  <p style={{ fontSize: 15, color: COLORS.gray, lineHeight: 1.6, margin: 0 }}>{cap.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ SERVICE AREAS ════════ */}
      <section style={{ background: "#fff", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <SectionLabel>Service Areas</SectionLabel>
              <SectionTitle>Every Support Scenario, Handled</SectionTitle>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            {[
              "Account management & profile updates", "Order tracking & modification",
              "Billing inquiries & payment processing", "Product information & recommendations",
              "Warranty claims & returns processing", "Appointment scheduling & reminders",
              "Technical troubleshooting & support", "Complaint handling & resolution",
              "Password resets & access recovery", "Subscription management",
              "Shipping status & delivery updates", "Feedback collection & surveys",
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 20px", background: COLORS.offWhite, borderRadius: 8, border: `1px solid ${COLORS.light}` }}>
                  <span style={{ flexShrink: 0 }}><CheckIcon /></span>
                  <span style={{ fontSize: 14, fontWeight: 500, color: COLORS.slate }}>{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ PROCESS ════════ */}
      <section id="process" style={{ background: COLORS.navy, padding: "96px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 72 }}>
              <SectionLabel light>Our Process</SectionLabel>
              <SectionTitle light>From Discovery to Deployment in 3–5 Weeks</SectionTitle>
              <SectionSub light>A proven implementation methodology built from dozens of enterprise AI deployments.</SectionSub>
            </div>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {process.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 24, padding: "32px 0", borderBottom: i < process.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: `rgba(0,82,204,0.2)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 700, color: COLORS.blue, border: `1px solid rgba(0,82,204,0.3)` }}>{p.step}</div>
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                      <h3 style={{ fontSize: 18, fontWeight: 600, color: "#fff", margin: 0 }}>{p.title}</h3>
                      <span style={{ fontSize: 12, fontWeight: 600, color: COLORS.green, background: "rgba(16,185,129,0.1)", padding: "3px 10px", borderRadius: 100 }}>{p.duration}</span>
                    </div>
                    <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ INTEGRATIONS ════════ */}
      <section style={{ background: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <SectionLabel>Integrations</SectionLabel>
              <SectionTitle>Connects With Your Existing Tools</SectionTitle>
              <SectionSub>No rip-and-replace. Your AI agent plugs into the systems you already use.</SectionSub>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
              {integrations.map((name, i) => (
                <div key={i} style={{ padding: "10px 20px", background: COLORS.offWhite, borderRadius: 8, border: `1px solid ${COLORS.light}`, fontSize: 14, fontWeight: 500, color: COLORS.slate }}>
                  {name}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════ PRICING ════════ */}
      <section id="pricing" style={{ background: COLORS.offWhite, padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <SectionLabel>Pricing</SectionLabel>
              <SectionTitle>Transparent, Value-Based Pricing</SectionTitle>
              <SectionSub>No hidden fees. No per-resolution charges that spike unpredictably. Complete AI agent build with transparent ongoing costs.</SectionSub>
            </div>
          </Reveal>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 24, alignItems: "stretch" }}>
            <Reveal delay={0}>
              <PricingCard
                tier="Starter" price="$2,999"
                desc="Best for small businesses handling up to 500 monthly support interactions."
                features={["Single-channel AI agent (chat or email)", "Knowledge base training (up to 50 articles)", "Basic CRM integration", "Standard escalation workflows", "30 days post-launch support"]}
              />
            </Reveal>
            <Reveal delay={0.12}>
              <PricingCard popular
                tier="Growth" price="$5,999"
                desc="Best for growing businesses handling 500–2,500 monthly interactions across multiple channels."
                features={["Multi-channel AI agent (chat + email + 1 platform)", "Knowledge base training (up to 200 articles)", "Advanced CRM and help desk integration", "Custom escalation logic & sentiment analysis", "Analytics dashboard", "60 days post-launch support"]}
              />
            </Reveal>
            <Reveal delay={0.24}>
              <PricingCard
                tier="Enterprise" price="$12,999"
                desc="For businesses with complex support operations, multiple product lines, or regulatory requirements."
                features={["Full omnichannel AI agent", "Unlimited knowledge base training", "Custom system integrations", "Proactive outreach capabilities", "Advanced analytics & reporting", "Dedicated account manager", "90 days post-launch support"]}
              />
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <p style={{ textAlign: "center", marginTop: 32, fontSize: 15, color: COLORS.gray }}>
              All plans include a <strong style={{ color: COLORS.navy }}>free AI Support Assessment</strong> to determine the right scope and pricing for your specific needs.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ════════ CASE STUDY HIGHLIGHT ════════ */}
      <section style={{ background: "#fff", padding: "96px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Reveal>
            <div style={{ background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.blue800} 100%)`, borderRadius: 20, padding: "56px 48px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, background: `radial-gradient(circle, rgba(0,82,204,0.2) 0%, transparent 70%)`, borderRadius: "50%" }} />
              <SectionLabel light>Case Study</SectionLabel>
              <h3 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, color: "#fff", lineHeight: 1.2, margin: "16px 0 20px", letterSpacing: "-0.02em" }}>
                Retail Chain Reduces Support Call Volume by 65%
              </h3>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: 32 }}>
                A multi-location retail brand deployed FactoryJet's AI customer support agent on WhatsApp and web. Within 12 months, customer service call volume dropped 65%, NPS improved 12 points, and the company saved an estimated ₹4.5 crore annually — while redeploying 3 FTEs to strategic initiatives.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 24 }}>
                {[{ v: "65%", l: "Fewer calls" }, { v: "+12", l: "NPS points" }, { v: "₹4.5Cr", l: "Annual savings" }, { v: "3", l: "FTEs redeployed" }].map((s, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 28, fontWeight: 700, color: COLORS.orange }}>{s.v}</div>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", marginTop: 4 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════ FAQ ════════ */}
      <section id="faq" style={{ background: COLORS.offWhite, padding: "96px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <SectionLabel>FAQ</SectionLabel>
              <SectionTitle>Frequently Asked Questions</SectionTitle>
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

      {/* ════════ FINAL CTA ════════ */}
      <section style={{ background: COLORS.navy, padding: "96px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: -100, left: "50%", transform: "translateX(-50%)", width: 600, height: 300, background: `radial-gradient(circle, rgba(0,82,204,0.12) 0%, transparent 70%)`, borderRadius: "50%" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <Reveal>
            <SectionLabel light>Ready to Get Started?</SectionLabel>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, lineHeight: 1.12, letterSpacing: "-0.02em", color: "#fff", margin: "16px 0 20px" }}>
              Deploy Your AI Customer Support Agent in Weeks, Not Months
            </h2>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", lineHeight: 1.65, marginBottom: 36 }}>
              Book a free AI Support Assessment. We'll audit your current support workflows, identify automation opportunities, and show you exactly what an AI agent could handle — with projected ROI.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
              <Button variant="orange">Get Your Free Assessment <ArrowRight /></Button>
              <Button variant="outline">Talk to an AI Specialist</Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════ FOOTER ════════ */}
      <footer style={{ background: "#080E1A", padding: "64px 24px 32px", borderTop: `1px solid rgba(255,255,255,0.05)` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 48, marginBottom: 48 }}>
            <div>
              <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>
                <span style={{ color: COLORS.blue }}>Factory</span><span style={{ color: COLORS.orange }}>Jet</span>
              </div>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>AI-native digital transformation for businesses ready to scale. Web design, e-commerce, AI agents, and intelligent automation.</p>
            </div>
            <div>
              <h4 style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>AI Agent Services</h4>
              {["Customer Support Agent", "Voice Agent", "AI Chatbot", "Sales Agent", "Scheduling Agent", "Marketing Agent", "Workflow Automation"].map(s => (
                <a key={s} href="#" style={{ display: "block", fontSize: 14, color: "rgba(255,255,255,0.55)", textDecoration: "none", marginBottom: 10 }}>{s}</a>
              ))}
            </div>
            <div>
              <h4 style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>Company</h4>
              {["About", "Services", "Pricing", "Blog", "Contact"].map(s => (
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
    </div>
  );
}

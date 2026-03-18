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

export default function AIChatbotPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const capabilities = [
    { icon: "🗨️", title: "Intelligent Conversations", desc: "Not a decision-tree bot. Your AI chatbot understands natural language, maintains multi-turn context, and handles follow-up questions naturally." },
    { icon: "🎯", title: "Lead Capture & Qualification", desc: "Every visitor becomes a potential lead. Your chatbot asks qualifying questions, captures contact info, and routes hot prospects to sales instantly." },
    { icon: "🛒", title: "E-commerce Guidance", desc: "Product recommendations, size guides, inventory checks, shipping estimates, cart recovery, and checkout assistance — turning browsers into buyers." },
    { icon: "📚", title: "Knowledge Base Trained", desc: "Trained on your products, pricing, policies, and documentation. Not generic answers — your answers, delivered consistently every time." },
    { icon: "🔗", title: "Deep Integrations", desc: "Connects to your CRM, help desk, e-commerce platform, booking system, and payment processor. Your chatbot takes action, not just talks." },
    { icon: "📊", title: "Analytics & Insights", desc: "Conversation analytics, lead conversion tracking, popular question reports, and sentiment trends." },
  ];
  const faqs = [
    { q: "How is a custom AI chatbot different from Drift or Intercom?", a: "SaaS tools give you templates and drag-and-drop flows that break on unexpected questions. A FactoryJet chatbot uses LLMs trained on your business — it understands intent, handles novel questions, and takes real actions in your systems." },
    { q: "How much does a custom AI chatbot cost?", a: "Starting from $1,999 for single-channel. Growth at $4,499 adds multi-channel. Enterprise at $9,999 covers omnichannel with unlimited knowledge base training. No per-conversation fees." },
    { q: "How long does deployment take?", a: "Most deploy in 2–3 weeks. Simple single-channel bots can go live in under two weeks. Complex multi-channel deployments typically take 4–5 weeks." },
    { q: "Can it handle multiple languages?", a: "Yes. 100+ languages with native-quality understanding. A single chatbot automatically detects and responds in the visitor's preferred language." },
    { q: "Will it match our brand voice?", a: "Absolutely. We customize the widget design and train the AI's tone, vocabulary, and personality to match your brand voice." },
    { q: "What happens when it can't answer?", a: "Smooth handoff to your human team via live chat transfer, email escalation, or callback scheduling — with full conversation context." },
    { q: "Can it book appointments and process orders?", a: "Yes. With integrations, your chatbot books appointments, processes orders, handles returns, and manages subscriptions within the conversation." },
    { q: "Do you provide ongoing optimization?", a: "Every plan includes post-launch optimization (30–90 days). We analyze data, identify gaps, improve accuracy, and expand capabilities." },
  ];
  const pricingPlans = [
      { tier: "Starter", price: "$1,999", desc: "Best for small business websites with up to 1,000 monthly conversations.", features: ["AI chatbot for your website", "Training on up to 30 articles", "Lead capture and email notification", "Basic CRM integration", "Branded chat widget", "30 days post-launch support"] },
      { tier: "Growth", price: "$4,499", desc: "Best for growing businesses with 1,000–5,000 monthly conversations.", features: ["Everything in Starter, plus:", "Multi-channel deployment", "Advanced lead qualification", "E-commerce integration", "Appointment scheduling", "Analytics dashboard", "60 days post-launch support"], popular: true },
      { tier: "Enterprise", price: "$9,999", desc: "Best for high-traffic websites or complex requirements.", features: ["Everything in Growth, plus:", "Omnichannel deployment", "Unlimited knowledge base", "Deep multi-system integrations", "Custom chat interface design", "A/B testing capabilities", "Dedicated account manager", "90 days post-launch support"] },
    ];

  return (
    <div style={{ fontFamily: "Inter, sans-serif", overflow: "hidden", background: "#fff" }}>
      <Nav links={["Capabilities", "Pricing", "FAQ"]} />

      {/* HERO */}
      <section style={{ position: "relative", background: `linear-gradient(170deg, ${C.navy} 0%, #0D1A2F 50%, ${C.navy} 100%)`, padding: "140px 24px 100px", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div style={{ position: "absolute", top: "35%", left: "60%", width: 350, height: 350, background: `radial-gradient(circle, rgba(0,82,204,0.12) 0%, transparent 70%)`, borderRadius: "50%", filter: "blur(60px)" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Reveal>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.45)", marginBottom: 32 }}>
              <a href="/" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Home</a><span>›</span>
              <a href="/ai-agent-development-services" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>AI Agent Development</a><span>›</span>
              <span style={{ color: "rgba(255,255,255,0.7)" }}>AI Chatbot</span>
            </div>
          </Reveal>
          <div style={{ maxWidth: 820 }}>
            <Reveal delay={0.1}>
              <Label light>AI Chatbot</Label>
              <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(36px, 5.5vw, 60px)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#fff", margin: "16px 0 0" }}>
                Turn Every Website Visitor into a Conversation.{" "}
                <span style={{ color: C.orange }}>Turn Every Conversation into a Customer.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.25}>
              <p style={{ fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.7, color: "rgba(255,255,255,0.72)", maxWidth: 640, marginTop: 28 }}>
                FactoryJet builds custom AI chatbots that do more than answer questions — they understand your business, engage visitors with real conversations, capture and qualify leads, provide instant support, and guide prospects toward purchase decisions. Not a generic template. A purpose-built AI chat agent trained on your products, your pricing, and your customer journey.
              </p>
            </Reveal>
            <Reveal delay={0.35}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 32 }}>
                <Btn variant="orange">Get a Free Chatbot Assessment <ArrowIcon /></Btn>
                <Btn variant="outline">See a Live Demo</Btn>
              </div>
            </Reveal>
            <Reveal delay={0.45}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 24, marginTop: 32 }}>
                {["Purpose-built for North American SMBs", "3x average lead capture increase", "24/7 visitor engagement", "Deploys in 2–3 weeks"].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.65)" }}>
                    <CheckIcon /><span>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <StatBar stats={[{ v: "3x", l: "Lead Capture Increase" }, { v: "< 2s", l: "Response Time" }, { v: "80%", l: "Questions Resolved" }, { v: "24/7", l: "Visitor Engagement" }]} />

      {/* PROBLEM */}
      <section style={{ background: "#fff", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <Label>The Problem</Label>
              <Title>98% of Your Website Visitors Leave Without Converting</Title>
              <Sub>They had questions. Nobody answered. They left. Your competitors\' chatbot caught them instead.</Sub>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {[
      { stat: "98%", text: "of website visitors leave without taking any action — no form fill, no purchase, no contact" },
      { stat: "53%", text: "of customers will abandon a purchase if they can't find a quick answer to their question" },
      { stat: "79%", text: "prefer live chat to any other support channel because of immediacy" },
    ].map((item, i) => (
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

      {/* CAPABILITIES */}
      <section id="capabilities" style={{ background: C.offWhite, padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <Label>Capabilities</Label>
              <Title>What Your AI Chatbot Can Do</Title>
              <Sub>Not a glorified FAQ page. A purpose-built AI agent that engages, qualifies, converts, and supports.</Sub>
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

      
      {/* COMPARISON TABLE */}
      <section style={{ background: "#fff", padding: "96px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <Label>Why FactoryJet</Label>
              <Title>Custom AI Chatbot vs. SaaS Templates</Title>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ borderRadius: 16, overflow: "hidden", border: `1px solid ${C.light}` }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: C.navy }}>
                <div style={{ padding: "16px 24px", fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.5)" }}>Feature</div>
                <div style={{ padding: "16px 24px", fontSize: 14, fontWeight: 600, color: C.orange, textAlign: "center" }}>FactoryJet AI</div>
                <div style={{ padding: "16px 24px", fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.5)", textAlign: "center" }}>SaaS Templates</div>
              </div>
              {[
                ["Understands natural language", "✓", "Limited"],
                ["Trained on your business", "✓", "✗"],
                ["Takes real actions", "✓", "✗"],
                ["Custom integrations", "✓", "Pre-built only"],
                ["Handles unexpected questions", "✓", "Breaks"],
                ["Pricing model", "One-time build", "Monthly/seat"],
                ["Brand voice customization", "Full", "Template only"],
              ].map((row, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderTop: `1px solid ${C.light}`, background: i % 2 === 0 ? "#fff" : C.offWhite }}>
                  <div style={{ padding: "14px 24px", fontSize: 14, fontWeight: 500, color: C.navy }}>{row[0]}</div>
                  <div style={{ padding: "14px 24px", fontSize: 14, fontWeight: 600, color: C.green, textAlign: "center" }}>{row[1]}</div>
                  <div style={{ padding: "14px 24px", fontSize: 14, color: C.gray, textAlign: "center" }}>{row[2]}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRICING */}
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

      {/* FAQ */}
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

      {/* CTA */}
      <section style={{ background: C.navy, padding: "96px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: -80, left: "50%", transform: "translateX(-50%)", width: 500, height: 250, background: "radial-gradient(circle, rgba(0,82,204,0.1) 0%, transparent 70%)", borderRadius: "50%" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <Reveal>
            <Label light>Ready to Convert More Visitors?</Label>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, lineHeight: 1.12, letterSpacing: "-0.02em", color: "#fff", margin: "16px 0 20px" }}>
              Your Website Gets Traffic. Now Make It Convert.
            </h2>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", lineHeight: 1.65, marginBottom: 36 }}>
              Book a free Chatbot Assessment. We'll analyze your traffic, visitor behavior, and conversion gaps — then show you how a custom AI chatbot would capture more leads.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
              <Btn variant="orange">Get Your Free Assessment <ArrowIcon /></Btn>
              <Btn variant="outline">See a Live Demo</Btn>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

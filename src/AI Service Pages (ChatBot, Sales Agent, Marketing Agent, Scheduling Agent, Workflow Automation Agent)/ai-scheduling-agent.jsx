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

export default function AISchedulingAgentPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const capabilities = [
    { icon: "📅", title: "Smart Calendar Management", desc: "Real-time availability across multiple providers, staff, and locations. No double bookings." },
    { icon: "🔄", title: "Automated Reminders", desc: "SMS, email, and WhatsApp reminders at customizable intervals. Reduce no-shows by up to 75%." },
    { icon: "🔀", title: "Intelligent Rescheduling", desc: "Customers reschedule through natural conversation — no portal logins, no phone tag." },
    { icon: "👥", title: "Multi-Provider Routing", desc: "Route to the right staff based on service type, expertise, location, or preference." },
    { icon: "💳", title: "Deposit Collection", desc: "Collect deposits or payments at booking. Integrated with Stripe, Square, PayPal." },
    { icon: "📊", title: "Booking Analytics", desc: "Utilization rates, no-show patterns, peak demand, revenue per slot." },
  ];
  const faqs = [
    { q: "How is this different from Calendly?", a: "Calendly gives you a booking page. An AI scheduling agent has a conversation — it understands natural language, handles rescheduling, collects intake info, and integrates beyond just a calendar." },
    { q: "Can it handle multiple providers and services?", a: "Yes. Multi-provider availability, service-specific slots, location routing, buffer times, and resource dependencies — all in real time." },
    { q: "How much does it cost?", a: "Starting from $2,499. Growth at $5,499. Enterprise at $11,999." },
    { q: "Will it reduce our no-show rate?", a: "Clients typically see 50–75% reduction through automated reminders, easy rescheduling, and deposit collection." },
    { q: "What calendars does it integrate with?", a: "Google Calendar, Outlook/365, Apple Calendar, Mindbody, Jane App, Acuity, Square Appointments, ServiceTitan, and more." },
    { q: "Can customers book through voice?", a: "Yes. Paired with our Voice Agent, callers book through natural conversation." },
    { q: "How quickly can it be deployed?", a: "Standard 3–4 weeks. Simple setups in 2 weeks." },
    { q: "Does it handle recurring appointments?", a: "Yes — weekly, biweekly, monthly, or custom intervals with exception handling." },
  ];
  const pricingPlans = [
    { tier: "Starter", price: "$2,499", desc: "Best for single-provider businesses.", features: ["Single-provider scheduling", "One channel (chat or SMS)", "Calendar integration", "Automated reminders", "Basic analytics", "30 days support"] },
    { tier: "Growth", price: "$5,499", desc: "Best for multi-provider businesses with 100+ bookings/month.", features: ["Multi-provider routing", "Multi-channel (chat + SMS + voice)", "Rescheduling and cancellation", "Deposit collection via Stripe", "Waitlist management", "Advanced analytics", "60 days support"], popular: true },
    { tier: "Enterprise", price: "$11,999", desc: "For multi-location operations.", features: ["Multi-location support", "Unlimited providers", "Custom booking workflows", "EHR / PMS integration", "HIPAA-compliant architecture", "Recurring appointments", "Dedicated account manager", "90 days support"] },
  ];

  return (
    <div style={{ fontFamily: "Inter, sans-serif", overflow: "hidden", background: "#fff" }}>
      <Nav links={["Capabilities", "Industries", "Pricing", "FAQ"]} />

      <section style={{ position: "relative", background: `linear-gradient(170deg, ${C.navy} 0%, #0B1829 50%, ${C.navy} 100%)`, padding: "140px 24px 100px", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div style={{ position: "absolute", top: "30%", right: "8%", width: 400, height: 400, background: `radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)`, borderRadius: "50%", filter: "blur(60px)" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Reveal>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.45)", marginBottom: 32 }}>
              <a href="/" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Home</a><span>›</span>
              <a href="/ai-agent-development-services" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>AI Agent Development</a><span>›</span>
              <span style={{ color: "rgba(255,255,255,0.7)" }}>AI Scheduling Agent</span>
            </div>
          </Reveal>
          <div style={{ maxWidth: 820 }}>
            <Reveal delay={0.1}>
              <Label light>AI Scheduling Agent</Label>
              <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(36px, 5.5vw, 60px)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#fff", margin: "16px 0 0" }}>
                Every Missed Appointment Is Lost Revenue.{" "}
                <span style={{ color: C.orange }}>Deploy an AI Scheduling Agent That Books, Reminds, and Fills Your Calendar 24/7.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.25}>
              <p style={{ fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.7, color: "rgba(255,255,255,0.72)", maxWidth: 640, marginTop: 28 }}>
                FactoryJet builds custom AI scheduling agents that handle appointment booking, rescheduling, reminders, and waitlist management through natural conversation — on chat, voice, text, or WhatsApp. Reduce no-shows by up to 75%.
              </p>
            </Reveal>
            <Reveal delay={0.35}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 32 }}>
                <Btn variant="orange">Get a Free Scheduling Assessment <ArrowIcon /></Btn>
                <Btn variant="outline">See a Live Demo</Btn>
              </div>
            </Reveal>
            <Reveal delay={0.45}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 24, marginTop: 32 }}>
                {["75% fewer no-shows", "24/7 booking", "Multi-provider routing", "Deploys in 3–4 weeks"].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.65)" }}>
                    <CheckIcon /><span>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <StatBar stats={[{ v: "75%", l: "Fewer No-Shows" }, { v: "40%", l: "More Bookings" }, { v: "24/7", l: "Availability" }, { v: "< 3s", l: "Booking Speed" }]} />

      <section style={{ background: "#fff", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <Label>The Problem</Label>
              <Title>No-Shows Cost You $150–$300 Per Empty Slot</Title>
              <Sub>And most businesses lose 15–30% of appointments to no-shows and last-minute cancellations.</Sub>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {[{ stat: "23%", text: "average no-show rate for service businesses without automated reminders" }, { stat: "$150+", text: "average revenue lost per empty appointment slot across service industries" }, { stat: "67%", text: "of customers prefer self-service booking over calling to schedule" }].map((item, i) => (
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
              <Label>Capabilities</Label>
              <Title>What Your AI Scheduling Agent Can Do</Title>
              <Sub>Not just a booking page. An intelligent agent that manages your calendar end-to-end.</Sub>
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

      
      <section id="industries" style={{ background: "#fff", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal><div style={{ textAlign: "center", marginBottom: 64 }}><Label>Industries</Label><Title>Purpose-Built for Service Businesses</Title></div></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
            {[
              { name: "Healthcare & Dental", desc: "Patient intake, appointment booking, insurance verification, follow-up scheduling" },
              { name: "Salons & Spas", desc: "Service selection, stylist matching, multi-service bookings, recurring appointments" },
              { name: "Professional Services", desc: "Consultation scheduling, multi-attendee coordination, timezone handling" },
              { name: "Home Services", desc: "Service window selection, technician routing, emergency scheduling" },
              { name: "Fitness & Wellness", desc: "Class reservations, trainer booking, package management, waitlists" },
              { name: "Automotive", desc: "Service appointments, loaner coordination, multi-service scheduling" },
            ].map((uc, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div style={{ background: C.offWhite, borderRadius: 12, padding: "28px 24px", border: `1px solid ${C.light}`, height: "100%" }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: C.blue, marginBottom: 10 }}>{uc.name}</div>
                  <p style={{ fontSize: 14, color: C.gray, lineHeight: 1.65, margin: 0 }}>{uc.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
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
            <Label light>Ready to Fill Your Calendar?</Label>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, lineHeight: 1.12, letterSpacing: "-0.02em", color: "#fff", margin: "16px 0 20px" }}>
              Empty Slots Cost Money. No-Shows Cost More. Fix Both.
            </h2>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", lineHeight: 1.65, marginBottom: 36 }}>
              Book a free Scheduling Assessment. We'll analyze your booking patterns and no-show rates.
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

import { useState, useEffect, useRef } from "react";

const C = {
  blue: "#0052CC", blueLight: "#E6F0FF", blueDark: "#0042A3", blue800: "#002152",
  orange: "#FF6B35", orangeLight: "#FFF3EE",
  green: "#10B981", greenLight: "#ECFDF5",
  navy: "#0F172A", slate: "#334155", gray: "#64748B",
  light: "#E2E8F0", offWhite: "#F8FAFC",
};

function useReveal(t = 0.15) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => { const el = ref.current; if (!el) return; const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); o.disconnect(); }}, { threshold: t }); o.observe(el); return () => o.disconnect(); }, [t]);
  return [ref, v];
}
function Reveal({ children, delay = 0, className = "" }) {
  const [ref, v] = useReveal();
  return <div ref={ref} className={className} style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(32px)", transition: `opacity 0.7s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.7s cubic-bezier(.16,1,.3,1) ${delay}s` }}>{children}</div>;
}
const Label = ({ children, light }) => <span style={{ display: "inline-block", fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: light ? C.orange : C.blue, background: light ? "rgba(255,107,53,0.12)" : C.blueLight, padding: "6px 16px", borderRadius: 100, marginBottom: 16 }}>{children}</span>;
const Title = ({ children, light, align = "center" }) => <h2 style={{ fontFamily: "Inter,sans-serif", fontSize: "clamp(28px,4vw,42px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em", color: light ? "#fff" : C.navy, textAlign: align, margin: "0 0 16px", maxWidth: 800, marginLeft: align === "center" ? "auto" : 0, marginRight: align === "center" ? "auto" : 0 }}>{children}</h2>;
const Sub = ({ children, light, align = "center" }) => <p style={{ fontFamily: "Inter,sans-serif", fontSize: "clamp(16px,2vw,18px)", lineHeight: 1.65, color: light ? "rgba(255,255,255,0.75)" : C.gray, textAlign: align, maxWidth: 680, margin: align === "center" ? "0 auto" : 0 }}>{children}</p>;
const Check = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.green} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>;
const Arrow = ({ color = "#fff" }) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>;
const Chevron = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>;

function Btn({ children, variant = "primary", style: s }) {
  const [h, setH] = useState(false);
  const styles = { primary: { background: C.blue, color: "#fff", border: "none" }, orange: { background: C.orange, color: "#fff", border: "none" }, outline: { background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.3)" }, outlineDark: { background: "transparent", color: C.blue, border: `2px solid ${C.light}` }};
  return <a href="#" onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Inter,sans-serif", fontSize: 15, fontWeight: 600, padding: "14px 28px", borderRadius: 8, textDecoration: "none", cursor: "pointer", transition: "all 0.25s ease", transform: h ? "translateY(-2px)" : "none", boxShadow: h ? "0 8px 24px rgba(0,82,204,0.18)" : "none", ...styles[variant], ...s }}>{children}</a>;
}

function FAQ({ q, a, open, toggle }) {
  return (
    <div style={{ borderBottom: `1px solid ${C.light}` }}>
      <button onClick={toggle} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0", background: "none", border: "none", cursor: "pointer", fontFamily: "Inter,sans-serif", fontSize: 16, fontWeight: 600, color: C.navy, textAlign: "left", gap: 16 }}>
        <span style={{ flex: 1 }}>{q}</span>
        <span style={{ transition: "transform 0.3s", transform: open ? "rotate(180deg)" : "rotate(0)" }}><Chevron /></span>
      </button>
      <div style={{ maxHeight: open ? 600 : 0, overflow: "hidden", transition: "max-height 0.4s ease" }}>
        <p style={{ fontFamily: "Inter,sans-serif", fontSize: 15, lineHeight: 1.7, color: C.gray, padding: "0 0 20px", margin: 0 }}>{a}</p>
      </div>
    </div>
  );
}

function PricingCard({ tier, price, desc, features, popular }) {
  const [h, setH] = useState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ position: "relative", background: "#fff", borderRadius: 16, padding: "36px 28px", border: popular ? `2px solid ${C.orange}` : `1px solid ${C.light}`, boxShadow: h ? "0 20px 60px rgba(0,82,204,0.12)" : "0 4px 16px rgba(0,0,0,0.04)", transition: "all 0.35s ease", transform: h ? "translateY(-4px)" : "none", flex: "1 1 300px", maxWidth: 380 }}>
      {popular && <div style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", background: C.orange, color: "#fff", fontSize: 12, fontWeight: 700, padding: "4px 16px", borderRadius: 100, letterSpacing: "0.05em", textTransform: "uppercase" }}>Most Popular</div>}
      <div style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: popular ? C.orange : C.blue, marginBottom: 12 }}>{tier}</div>
      <div style={{ fontSize: 36, fontWeight: 700, color: C.navy, letterSpacing: "-0.02em" }}>{price} <span style={{ fontSize: 14, fontWeight: 500, color: C.gray }}>starting from</span></div>
      <p style={{ fontSize: 14, color: C.gray, lineHeight: 1.6, margin: "12px 0 24px", minHeight: 42 }}>{desc}</p>
      <div style={{ height: 1, background: C.light, margin: "0 0 20px" }} />
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 12 }}>
        {features.map((f, i) => <li key={i} style={{ display: "flex", gap: 10, fontSize: 14, color: C.slate, lineHeight: 1.5 }}><span style={{ flexShrink: 0, marginTop: 2 }}><Check /></span><span>{f}</span></li>)}
      </ul>
      <Btn variant={popular ? "orange" : "primary"} style={{ width: "100%", justifyContent: "center" }}>Get Started <Arrow /></Btn>
    </div>
  );
}

/* ═══════ PAGE 2: AI VOICE AGENT ═══════ */
export default function AIVoiceAgentPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const features = [
    { icon: "📞", title: "Inbound Call Handling", desc: "Your AI voice agent answers every call instantly — no hold music, no voicemail, no missed opportunities. It greets callers by name when integrated with your CRM." },
    { icon: "📤", title: "Outbound Campaigns", desc: "Proactive calling for appointment reminders, payment follow-ups, customer surveys, and lead nurture. Your AI calls at scale without burning out your team." },
    { icon: "📅", title: "Appointment Booking", desc: "Real-time calendar integration. Your AI voice agent checks availability, books appointments, sends confirmations, and handles rescheduling — all within the phone call." },
    { icon: "🎯", title: "Lead Qualification", desc: "Every inbound call becomes a qualified lead. The AI asks your custom qualification questions, scores the lead, and routes to the right sales rep with full context." },
    { icon: "🌐", title: "Multilingual Support", desc: "Natural-sounding conversations in 30+ languages with regional accent options. Serve diverse customer bases without hiring multilingual staff." },
    { icon: "🔄", title: "Seamless Handoff", desc: "When a call needs a human touch, the AI transfers to your team with complete conversation context — the customer never repeats themselves." },
  ];

  const useCases = [
    { industry: "Healthcare", examples: "Patient intake, appointment scheduling, prescription refill requests, insurance verification, after-hours triage routing" },
    { industry: "Home Services", examples: "Emergency dispatch, service scheduling, quote requests, follow-up calls, customer satisfaction surveys" },
    { industry: "Legal", examples: "Client intake screening, appointment booking, case status updates, after-hours call handling, lead qualification" },
    { industry: "Real Estate", examples: "Property inquiry handling, showing scheduling, buyer qualification, listing updates, market report requests" },
    { industry: "Automotive", examples: "Service appointment booking, parts inquiries, recall notifications, test drive scheduling, customer follow-up" },
    { industry: "Financial Services", examples: "Account inquiries, payment reminders, loan application status, compliance-approved outreach, fraud alert verification" },
  ];

  const faqs = [
    { q: "How natural does the AI voice agent sound?", a: "Modern voice AI uses neural text-to-speech that is virtually indistinguishable from human speech in most contexts. Our agents support multiple voice profiles, regional accents, and speaking styles. Callers frequently don't realize they're speaking with an AI until told." },
    { q: "Can the AI handle complex, multi-step phone conversations?", a: "Yes. Our voice agents maintain full conversational context, handle interruptions, ask clarifying questions, and navigate multi-step workflows like appointment booking, lead qualification, or order processing — all within a single call." },
    { q: "What happens if the caller gets frustrated or asks for a human?", a: "The AI detects sentiment changes in real time. If a caller expresses frustration, confusion, or explicitly requests a human, the agent transfers immediately with full context — no customer has to repeat their issue." },
    { q: "How does pricing work for AI voice agents?", a: "FactoryJet charges for the build (starting from $3,499) plus ongoing per-minute usage costs that are significantly lower than human agent costs. No per-seat fees. No minimum commitments beyond the initial build." },
    { q: "Can the voice agent integrate with our phone system?", a: "Yes. We integrate with all major VoIP providers and phone systems, including RingCentral, Twilio, Vonage, Grasshopper, and traditional PBX systems via SIP trunking. Your existing phone numbers are preserved." },
    { q: "Is there a HIPAA-compliant option for healthcare?", a: "Yes. Our Enterprise tier includes HIPAA-compliant architecture with encrypted call data, BAA agreements, compliant transcription storage, and audit logging. Several healthcare clients are already using our voice agents for patient intake and scheduling." },
    { q: "How long does deployment take?", a: "Standard deployment is 4–6 weeks. Simple single-flow implementations (e.g., appointment booking only) can launch in 3 weeks. Complex multi-flow, multi-location deployments may take 8–10 weeks." },
    { q: "What's the difference between an AI voice agent and an IVR?", a: "An IVR forces callers through rigid menu trees ('Press 1 for sales, press 2 for support'). An AI voice agent has a natural conversation — callers speak normally, and the agent understands intent, asks follow-ups, and takes actions. It's the difference between a phone tree and a phone call." },
  ];

  return (
    <div style={{ fontFamily: "Inter,sans-serif", overflow: "hidden", background: "#fff" }}>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, background: "rgba(15,23,42,0.92)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <a href="/" style={{ fontSize: 22, fontWeight: 700, color: "#fff", textDecoration: "none" }}><span style={{ color: C.blue }}>Factory</span><span style={{ color: C.orange }}>Jet</span></a>
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {["Features", "Use Cases", "Pricing", "FAQ"].map(i => <a key={i} href={`#${i.toLowerCase().replace(" ", "-")}`} style={{ fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>{i}</a>)}
            <Btn variant="primary" style={{ padding: "10px 20px", fontSize: 13 }}>Free Assessment <Arrow /></Btn>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: "relative", background: `linear-gradient(170deg, ${C.navy} 0%, #0A1628 50%, ${C.navy} 100%)`, padding: "140px 24px 100px", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`, backgroundSize: "40px 40px" }} />
        {/* Voice waveform-inspired accent */}
        <div style={{ position: "absolute", top: "30%", right: "5%", width: 300, height: 300, background: `radial-gradient(circle, rgba(255,107,53,0.08) 0%, transparent 70%)`, borderRadius: "50%", filter: "blur(60px)" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Reveal>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.45)", marginBottom: 32 }}>
              <a href="/" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Home</a><span>›</span>
              <a href="/ai-agent-development-services" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>AI Agent Development</a><span>›</span>
              <span style={{ color: "rgba(255,255,255,0.7)" }}>AI Voice Agent</span>
            </div>
          </Reveal>

          <div style={{ maxWidth: 820 }}>
            <Reveal delay={0.1}>
              <Label light>AI Voice Agent</Label>
              <h1 style={{ fontFamily: "Inter,sans-serif", fontSize: "clamp(36px,5.5vw,60px)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#fff", margin: "16px 0 0" }}>
                Stop Losing Customers to Voicemail.{" "}
                <span style={{ color: C.orange }}>Deploy an AI Voice Agent That Answers Every Call, Books Every Appointment, and Never Takes a Day Off.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.25}>
              <p style={{ fontSize: "clamp(16px,2vw,19px)", lineHeight: 1.7, color: "rgba(255,255,255,0.72)", maxWidth: 640, marginTop: 28 }}>
                FactoryJet builds custom AI voice agents that sound natural, handle complex conversations, and take real actions — scheduling appointments, qualifying leads, processing orders, and routing urgent calls to your team. 24/7, in a voice that represents your brand.
              </p>
            </Reveal>

            <Reveal delay={0.35}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 32 }}>
                <Btn variant="orange">Get a Free Voice AI Assessment <Arrow /></Btn>
                <Btn variant="outline">Hear a Live Demo Call</Btn>
              </div>
            </Reveal>

            <Reveal delay={0.45}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 24, marginTop: 32 }}>
                {["Built for North American SMBs", "Sub-second response latency", "24/7 call handling", "HIPAA-compliant options"].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.65)" }}><Check /><span>{item}</span></div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: C.blue, padding: "48px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 32 }}>
          {[{ v: "100%", l: "Calls Answered" }, { v: "<1s", l: "Response Latency" }, { v: "65%", l: "Fewer Missed Calls" }, { v: "24/7", l: "Availability" }].map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "clamp(32px,5vw,48px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff" }}>{s.v}</div>
              <div style={{ fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEM */}
      <section style={{ background: "#fff", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <Label>The Problem</Label>
              <Title>Every Missed Call Is a Lost Customer</Title>
              <Sub>62% of calls to small businesses go unanswered. Each missed call costs an average of $1,200 in lifetime customer value. Voicemail isn't a strategy — it's a leak in your revenue pipeline.</Sub>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {[
              { stat: "62%", text: "of calls to small businesses go unanswered during business hours" },
              { stat: "$1,200", text: "average lifetime value lost per missed call from a potential customer" },
              { stat: "85%", text: "of callers who reach voicemail won't call back — they'll call your competitor" },
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

      {/* FEATURES */}
      <section id="features" style={{ background: C.offWhite, padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <Label>Features</Label>
              <Title>What Your AI Voice Agent Can Do</Title>
              <Sub>Not an IVR menu tree. A real conversational AI that understands natural speech, takes actions, and sounds human.</Sub>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
            {features.map((f, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div style={{ background: "#fff", borderRadius: 12, padding: "32px 28px", border: `1px solid ${C.light}`, height: "100%" }}>
                  <div style={{ fontSize: 32, marginBottom: 16 }}>{f.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: C.navy, margin: "0 0 8px" }}>{f.title}</h3>
                  <p style={{ fontSize: 15, color: C.gray, lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section id="use-cases" style={{ background: "#fff", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <Label>Industry Use Cases</Label>
              <Title>Built for Your Industry</Title>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
            {useCases.map((uc, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div style={{ background: C.offWhite, borderRadius: 12, padding: "28px 24px", border: `1px solid ${C.light}`, height: "100%" }}>
                  <div style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: C.blue, marginBottom: 10 }}>{uc.industry}</div>
                  <p style={{ fontSize: 14, color: C.gray, lineHeight: 1.65, margin: 0 }}>{uc.examples}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: C.navy, padding: "96px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 72 }}>
              <Label light>Our Process</Label>
              <Title light>From Call Audit to Live Agent in 4–6 Weeks</Title>
            </div>
          </Reveal>
          {[
            { n: "01", t: "Call Audit & Strategy", d: "We analyze your call patterns, common inquiries, peak volumes, and current handling gaps to design the optimal voice AI strategy.", w: "Week 1" },
            { n: "02", t: "Voice Design & Flow Architecture", d: "Custom conversation flows, voice personality selection, integration specs, and escalation logic — all mapped to your brand voice.", w: "Week 2" },
            { n: "03", t: "Build, Train & Integrate", d: "AI engineers build your voice agent, integrate with your phone system and business tools, and train on your specific scenarios.", w: "Weeks 2–5" },
            { n: "04", t: "Test & Launch", d: "Comprehensive testing across call scenarios, load testing, quality assurance, then phased rollout with real-time monitoring.", w: "Week 5–6" },
          ].map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 24, padding: "32px 0", borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(0,82,204,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 700, color: C.blue, border: "1px solid rgba(0,82,204,0.3)" }}>{p.n}</div>
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                    <h3 style={{ fontSize: 18, fontWeight: 600, color: "#fff", margin: 0 }}>{p.t}</h3>
                    <span style={{ fontSize: 12, fontWeight: 600, color: C.green, background: "rgba(16,185,129,0.1)", padding: "3px 10px", borderRadius: 100 }}>{p.w}</span>
                  </div>
                  <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.65, margin: 0 }}>{p.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ background: C.offWhite, padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <Label>Pricing</Label>
              <Title>Transparent Voice AI Pricing</Title>
              <Sub>Build cost + per-minute usage. No per-seat fees. No minimum commitments beyond the initial build.</Sub>
            </div>
          </Reveal>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 24, alignItems: "stretch" }}>
            <Reveal><PricingCard tier="Starter" price="$3,499" desc="Best for small businesses receiving up to 200 calls per month." features={["AI voice agent for inbound call answering", "Up to 3 conversation flows", "Calendar integration", "Basic CRM integration", "Call recording and transcription", "30 days post-launch support"]} /></Reveal>
            <Reveal delay={0.12}><PricingCard popular tier="Growth" price="$6,999" desc="Best for businesses receiving 200–1,000 calls per month with multiple call types." features={["Everything in Starter, plus:", "Up to 10 conversation flows", "Outbound calling capability", "Advanced lead qualification", "Multi-system integration", "Call analytics dashboard", "SMS follow-up after calls", "60 days post-launch support"]} /></Reveal>
            <Reveal delay={0.24}><PricingCard tier="Enterprise" price="$14,999" desc="Best for high-volume businesses or multi-location operations." features={["Everything in Growth, plus:", "Unlimited conversation flows", "Multi-location support", "Advanced call routing logic", "Custom voice development", "HIPAA-compliant architecture", "Dedicated account manager", "90 days post-launch support"]} /></Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: "#fff", padding: "96px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Reveal><div style={{ textAlign: "center", marginBottom: 56 }}><Label>FAQ</Label><Title>Frequently Asked Questions</Title></div></Reveal>
          <Reveal delay={0.1}>
            <div>{faqs.map((f, i) => <FAQ key={i} q={f.q} a={f.a} open={openFaq === i} toggle={() => setOpenFaq(openFaq === i ? null : i)} />)}</div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: C.navy, padding: "96px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: -100, left: "50%", transform: "translateX(-50%)", width: 600, height: 300, background: "radial-gradient(circle, rgba(255,107,53,0.08) 0%, transparent 70%)", borderRadius: "50%" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <Reveal>
            <Label light>Ready to Answer Every Call?</Label>
            <h2 style={{ fontFamily: "Inter,sans-serif", fontSize: "clamp(28px,4vw,42px)", fontWeight: 700, lineHeight: 1.12, letterSpacing: "-0.02em", color: "#fff", margin: "16px 0 20px" }}>Your Competitors Are Missing Calls Right Now. You Don't Have To.</h2>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", lineHeight: 1.65, marginBottom: 36 }}>Book a free Voice AI Assessment. We'll analyze your call patterns, identify automation opportunities, and demonstrate exactly how an AI voice agent would handle your most common calls.</p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
              <Btn variant="orange">Get Your Free Assessment <Arrow /></Btn>
              <Btn variant="outline">Hear a Demo Call</Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#080E1A", padding: "64px 24px 32px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 48, marginBottom: 48 }}>
            <div>
              <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}><span style={{ color: C.blue }}>Factory</span><span style={{ color: C.orange }}>Jet</span></div>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>AI-native digital transformation for businesses ready to scale.</p>
            </div>
            <div>
              <h4 style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>AI Agent Services</h4>
              {["Customer Support Agent", "Voice Agent", "AI Chatbot", "Sales Agent", "Scheduling Agent", "Marketing Agent", "Workflow Automation"].map(s => <a key={s} href="#" style={{ display: "block", fontSize: 14, color: "rgba(255,255,255,0.55)", textDecoration: "none", marginBottom: 10 }}>{s}</a>)}
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

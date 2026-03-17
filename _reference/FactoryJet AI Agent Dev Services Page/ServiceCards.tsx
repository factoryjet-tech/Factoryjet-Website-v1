// app/services/ai-agent-development/components/ServiceCards.tsx
export function ServiceCards() {
  const services = [
    {
      icon: "🎧",
      title: "Customer Support AI Agents",
      desc: "Deploy intelligent AI agents that resolve customer inquiries autonomously across web chat, WhatsApp, email, voice, and social media. Our agents understand intent, access your knowledge base, take actions like processing returns and updating accounts, detect sentiment, and escalate complex issues with full context.",
      stats: ["87% resolution without humans", "11s first response", "30–40% cost reduction"],
      color: "#0052CC",
    },
    {
      icon: "📞",
      title: "Voice AI Agents",
      desc: "Build natural-sounding voice AI agents that handle inbound and outbound calls with ultra-low latency and human-like conversation. Perfect for call centers, appointment scheduling, customer intake, payment reminders, and outbound campaigns. Multiple languages with regional accent options.",
      stats: ["65% call volume reduction", "Sub-3s response latency", "24/7 availability"],
      color: "#7C3AED",
    },
    {
      icon: "🎯",
      title: "Sales & Lead Qualification Agents",
      desc: "Stop losing leads to slow response times. Our AI sales agents engage with inbound leads instantly, conduct intelligent qualification conversations, gather key information, and route qualified opportunities to the right sales reps with full context.",
      stats: ["28–40% AI-qualified conversion", "60–90 day ROI payback", "50%+ time reclaimed"],
      color: "#FF6B35",
    },
    {
      icon: "⚙️",
      title: "Workflow Automation Agents",
      desc: "Automate complex, multi-step business processes spanning departments and systems. From employee onboarding and document processing to invoice reconciliation and compliance auditing. Integrates with Salesforce, HubSpot, SAP, ERPNext, Slack, Teams, and 200+ systems.",
      stats: ["40–60% efficiency gains", "35% cost reduction", "95%+ accuracy"],
      color: "#10B981",
    },
    {
      icon: "🔗",
      title: "Multi-Agent Orchestration Systems",
      desc: "For enterprises requiring sophisticated AI capabilities, we design multi-agent orchestration systems where specialized agents collaborate, share context, and coordinate to handle complex workflows no single agent can manage alone. Built with LangGraph, CrewAI, and custom orchestration layers.",
      stats: ["45% of enterprise AI by 2026", "Complex workflow handling", "Human-in-the-loop"],
      color: "#0F172A",
    },
    {
      icon: "🧭",
      title: "AI Agent Strategy & Consulting",
      desc: "Not sure where to start? We help you identify the highest-impact automation opportunities, build a business case with ROI projections, select the right technology stack, and create a phased implementation roadmap. AI readiness assessments, workflow audits, and competitive analysis.",
      stats: ["Free strategy session", "ROI-first approach", "Phased roadmaps"],
      color: "#0052CC",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="text-sm font-bold text-[#FF6B35] uppercase tracking-wider">
            What We Build
          </span>
          <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-extrabold text-[#0F172A] leading-tight mt-3 mb-4">
            AI Agent Solutions for Every Business Function
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            From single-purpose agents to enterprise-wide multi-agent orchestration systems, we deliver solutions tailored to your specific workflows and goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={i}
              className="group bg-[#F9FAFB] hover:bg-white border border-gray-100 hover:border-gray-200 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-gray-100 flex flex-col"
            >
              <span className="text-3xl mb-4 block">{s.icon}</span>
              <h3 className="text-lg font-bold text-[#0F172A] mb-3">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">{s.desc}</p>
              <div className="space-y-2 pt-4 border-t border-gray-100">
                {s.stats.map((stat, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm">
                    <svg
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: s.color }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600 font-medium">{stat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="#consultation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0052CC] hover:bg-[#003d99] text-white font-bold rounded-lg transition-all duration-200 shadow-lg shadow-[#0052CC]/20"
          >
            Discuss Your AI Agent Needs
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

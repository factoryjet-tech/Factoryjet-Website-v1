// app/services/ai-agent-development/components/ProcessSection.tsx
export function ProcessSection() {
  const phases = [
    {
      num: "01",
      title: "Discover",
      timeline: "Week 1",
      subtitle: "AI Readiness Assessment & Strategy",
      desc: "We start by understanding your business — not your technology stack. Through stakeholder workshops, workflow mapping, and data landscape assessment, we identify where AI agents will create maximum impact and fastest ROI. We define clear success criteria and KPIs before a single line of code is written.",
      deliverables: [
        "AI readiness scorecard",
        "Workflow priority matrix",
        "Use case roadmap with ROI projections",
        "Technical architecture blueprint",
        "Project plan with milestones",
      ],
    },
    {
      num: "02",
      title: "Design",
      timeline: "Weeks 2–3",
      subtitle: "Agent Architecture & Experience Design",
      desc: "This is where our design-first approach shines. We architect the agent's conversation flows, decision trees, integration points, and user experience. We design how the agent thinks, what tools it uses, how it escalates, and how users interact with it across every channel — web, mobile, WhatsApp, voice, email, and more.",
      deliverables: [
        "Conversation architecture diagrams",
        "Integration specifications",
        "UX wireframes for agent interfaces",
        "Escalation logic and routing rules",
        "Security and compliance plan",
      ],
    },
    {
      num: "03",
      title: "Build & Test",
      timeline: "Weeks 3–6",
      subtitle: "Development, Integration & QA",
      desc: "Our AI engineers build your agents using enterprise-grade frameworks — LangChain, LangGraph, CrewAI — with the best-fit LLM for your use case. We integrate with your existing systems, implement guardrails and safety layers, and conduct rigorous testing across edge cases, load scenarios, and adversarial inputs.",
      deliverables: [
        "Production-ready AI agents",
        "System integrations configured",
        "Comprehensive QA testing",
        "Security audit completed",
        "Staging environment deployed",
      ],
    },
    {
      num: "04",
      title: "Deploy & Optimize",
      timeline: "Week 6+",
      subtitle: "Launch, Monitor & Continuously Improve",
      desc: "Phased rollout starting with a pilot group before expanding organization-wide. Your team receives comprehensive training on working alongside AI agents. Post-launch, we monitor performance, analyze interactions, retrain models, and implement enhancements — agents improve continuously.",
      deliverables: [
        "Production deployment",
        "Team training & documentation",
        "Performance dashboards",
        "Ongoing optimization cycles",
        "Monthly performance reviews",
      ],
    },
  ];

  return (
    <section className="bg-[#0a0f1c] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="text-sm font-bold text-[#10B981] uppercase tracking-wider">
            Our Process
          </span>
          <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-extrabold text-white leading-tight mt-3 mb-4">
            From Concept to Production in Weeks — The FactoryJet AI Agent Development Process
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Our battle-tested four-phase methodology delivers production-ready AI agents with clear deliverables, transparent timelines, and defined success criteria. No black boxes. No surprises.
          </p>
        </div>

        <div className="space-y-6">
          {phases.map((phase, i) => (
            <div
              key={i}
              className="relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 md:p-8 hover:bg-white/[0.05] transition-all duration-300 group"
            >
              <div className="grid md:grid-cols-[140px_1fr_260px] gap-6 items-start">
                {/* Phase Number & Timeline */}
                <div>
                  <div className="text-4xl font-black text-[#0052CC]/60 mb-1">
                    {phase.num}
                  </div>
                  <div className="text-sm font-bold text-white">{phase.title}</div>
                  <div className="inline-flex px-3 py-1 mt-2 rounded-full bg-[#0052CC]/10 border border-[#0052CC]/20 text-xs font-semibold text-[#0052CC]">
                    {phase.timeline}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">{phase.subtitle}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{phase.desc}</p>
                </div>

                {/* Deliverables */}
                <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                    Deliverables
                  </div>
                  <div className="space-y-2">
                    {phase.deliverables.map((d, j) => (
                      <div key={j} className="flex items-start gap-2 text-sm text-gray-300">
                        <svg className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="#consultation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF6B35] hover:bg-[#e55a25] text-white font-bold rounded-lg transition-all duration-200 shadow-lg shadow-[#FF6B35]/20"
          >
            Start Your AI Agent Journey
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

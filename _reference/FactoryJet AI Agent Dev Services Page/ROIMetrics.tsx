// app/services/ai-agent-development/components/ROIMetrics.tsx
export function ROIMetrics() {
  const headlineMetrics = [
    {
      value: "74%",
      label: "of executives achieve ROI within the first year of AI agent deployment",
      source: "Google Cloud 2025",
    },
    {
      value: "340%",
      label: "average first-year ROI from AI chatbot and agent implementations",
      source: "Juniper Research",
    },
    {
      value: "55%",
      label: "higher operational efficiency reported by companies using AI agents",
      source: "Industry Average",
    },
  ];

  const categories = [
    {
      title: "Customer Support ROI",
      color: "#0052CC",
      items: [
        "87% inquiry resolution without human intervention",
        "First response: 11 seconds vs. 4+ hours for email",
        "30–40% reduction in customer service costs",
        "12+ point improvement in NPS scores",
      ],
    },
    {
      title: "Sales & Lead Qualification ROI",
      color: "#FF6B35",
      items: [
        "28–40% conversion rates for AI-qualified leads vs. 2–3% for traditional forms",
        "60–90 day typical payback period",
        "40%+ increase in pipeline value",
        "Sales reps reclaim 50%+ of time previously spent on admin",
      ],
    },
    {
      title: "Workflow Automation ROI",
      color: "#10B981",
      items: [
        "40–60% operational efficiency gains",
        "35% average cost reduction across automated processes",
        "95%+ accuracy in automated tasks vs. 82% manual accuracy",
        "71% of organizations now deploying AI for process automation",
      ],
    },
    {
      title: "Voice AI ROI",
      color: "#7C3AED",
      items: [
        "65% reduction in call center volume for routine inquiries",
        "24/7 availability without overtime or shift premiums",
        "Sub-3-second response latency for natural voice interactions",
        "Per-minute pricing makes adoption accessible for every size",
      ],
    },
  ];

  return (
    <section className="bg-[#0a0f1c] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="text-sm font-bold text-[#FF6B35] uppercase tracking-wider">
            The Business Case
          </span>
          <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-extrabold text-white leading-tight mt-3 mb-4">
            AI Agents Are an Investment, Not an Expense
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Here are the numbers that enterprise buyers and growing businesses need to see.
          </p>
        </div>

        {/* Headline Metrics */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {headlineMetrics.map((m, i) => (
            <div key={i} className="text-center bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 md:p-8">
              <div className="text-4xl md:text-5xl font-black text-[#FF6B35] mb-3">
                {m.value}
              </div>
              <p className="text-sm text-gray-300 leading-relaxed mb-2">{m.label}</p>
              <span className="text-xs text-gray-500 font-medium">{m.source}</span>
            </div>
          ))}
        </div>

        {/* Category Breakdowns */}
        <div className="grid md:grid-cols-2 gap-5">
          {categories.map((cat, i) => (
            <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4" style={{ color: cat.color }}>
                {cat.title}
              </h3>
              <div className="space-y-3">
                {cat.items.map((item, j) => (
                  <div key={j} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: cat.color }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF6B35] hover:bg-[#e55a25] text-white font-bold rounded-lg transition-all duration-200 shadow-lg shadow-[#FF6B35]/20"
          >
            Calculate Your AI Agent ROI — Talk to Our Team
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

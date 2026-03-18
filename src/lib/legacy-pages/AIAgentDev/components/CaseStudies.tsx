// app/services/ai-agent-development/components/CaseStudies.tsx
"use client";

import { useContactModal } from "@/context/ContactModalContext";

export function CaseStudies() {
  const { openModal } = useContactModal();
  const handleCTA = () => openModal("in", "ai");
  const studies = [
    {
      badge: "Customer Support",
      badgeColor: "#0052CC",
      title: "E-Commerce Brand — AI Customer Support Agent",
      challenge:
        "A growing e-commerce brand was drowning in 2,000+ monthly support tickets with an average 8-hour response time. CSAT scores dropped to 3.2/5 and the company was losing customers to competitors with faster support.",
      solution:
        "FactoryJet deployed an AI customer support agent across web chat, email, and WhatsApp, integrated with the client's Shopify store and Zendesk helpdesk. The agent handles order tracking, returns, product questions, and account updates autonomously.",
      results: [
        { metric: "78%", label: "Tickets resolved without human intervention" },
        { metric: "14s", label: "Average first response time (down from 8 hours)" },
        { metric: "4.6/5", label: "CSAT score (up from 3.2)" },
        { metric: "$180K", label: "Annual savings in support costs" },
      ],
    },
    {
      badge: "Sales Automation",
      badgeColor: "#FF6B35",
      title: "B2B SaaS Company — Sales Lead Qualification Agent",
      challenge:
        "A B2B SaaS company was generating 500+ inbound leads per month but sales reps were spending 60% of their time on qualification calls with unqualified prospects. Only 2.8% of leads converted to opportunities.",
      solution:
        "We built an AI lead qualification agent that engages with every inbound lead within seconds, conducts intelligent qualification conversations, scores leads against custom criteria, and routes qualified opportunities to the right sales reps with full context.",
      results: [
        { metric: "34%", label: "Conversion rate for AI-qualified leads" },
        { metric: "72 days", label: "Full ROI payback period" },
        { metric: "52%", label: "Sales rep time reclaimed for closing" },
        { metric: "3.2x", label: "Pipeline value increase" },
      ],
    },
    {
      badge: "Workflow Automation",
      badgeColor: "#10B981",
      title: "Mid-Market Company — Operations Workflow Agents",
      challenge:
        "A mid-market company processing 800+ orders daily had an order accuracy rate of 82%, and administrative tasks consumed 40+ hours per week across the operations team.",
      solution:
        "FactoryJet deployed a suite of workflow automation agents including an order management agent, inventory tracking agent, and shipping notification agent — all integrated with the client's existing ERP system and customer communication channels.",
      results: [
        { metric: "97%", label: "Order processing accuracy (up from 82%)" },
        { metric: "35 hrs", label: "Administrative time saved per week" },
        { metric: "$240K", label: "Estimated annual operational savings" },
        { metric: "0", label: "Unplanned downtime since deployment" },
      ],
    },
  ];

  return (
    <section id="case-studies" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="text-sm font-bold text-[#FF6B35] uppercase tracking-wider">
            Proven Results
          </span>
          <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-extrabold text-[#0F172A] leading-tight mt-3 mb-4">
            Real AI Agents Delivering Real Business Results
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Every project we deliver comes with measurable outcomes. Here&apos;s how our AI agents are transforming operations for businesses like yours.
          </p>
        </div>

        <div className="space-y-6">
          {studies.map((study, i) => (
            <div
              key={i}
              className="bg-[#F9FAFB] border border-gray-100 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="grid lg:grid-cols-[1fr_320px] gap-8">
                {/* Left — Story */}
                <div>
                  <span
                    className="inline-flex px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
                    style={{
                      backgroundColor: `${study.badgeColor}15`,
                      color: study.badgeColor,
                    }}
                  >
                    {study.badge}
                  </span>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4">{study.title}</h3>
                  <div className="space-y-3 text-sm text-gray-500 leading-relaxed">
                    <div>
                      <span className="font-bold text-[#0F172A]">Challenge: </span>
                      {study.challenge}
                    </div>
                    <div>
                      <span className="font-bold text-[#0F172A]">Solution: </span>
                      {study.solution}
                    </div>
                  </div>
                </div>

                {/* Right — Metrics */}
                <div className="grid grid-cols-2 gap-3">
                  {study.results.map((r, j) => (
                    <div key={j} className="bg-white rounded-xl p-4 border border-gray-100 text-center">
                      <div
                        className="text-2xl font-extrabold mb-1"
                        style={{ color: study.badgeColor }}
                      >
                        {r.metric}
                      </div>
                      <div className="text-xs text-gray-500 leading-snug">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <button
            onClick={handleCTA}
            className="inline-flex items-center gap-2 text-[#0052CC] font-bold text-base hover:gap-3 transition-all duration-200 cursor-pointer"
          >
            Want Results Like These? Let&apos;s Discuss Your Project
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

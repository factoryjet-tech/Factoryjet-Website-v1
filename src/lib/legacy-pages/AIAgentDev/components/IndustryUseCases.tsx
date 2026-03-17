// app/services/ai-agent-development/components/IndustryUseCases.tsx
"use client";

import { useState } from "react";
import { useContactModal } from "@/context/ContactModalContext";

const industries = [
  {
    id: "ecommerce",
    tab: "E-Commerce & Retail",
    icon: "🛒",
    headline: "AI agents for e-commerce handle product recommendations, order tracking, returns processing, inventory queries, and personalized shopping assistance at scale.",
    detail: "Our agents integrate with Shopify, WooCommerce, and custom platforms to deliver 24/7 customer service that drives both satisfaction and revenue. Retail leads AI agent adoption at 27% of all implementations.",
    agents: ["Shopping assistant", "Order management agent", "Returns automation", "Inventory query agent", "Personalized recommendation engine"],
  },
  {
    id: "financial",
    tab: "Financial Services",
    icon: "🏦",
    headline: "Build HIPAA and PCI DSS-compliant AI agents for banking, insurance, and fintech.",
    detail: "Our agents handle account inquiries, payment processing, KYC verification, fraud detection alerting, loan qualification screening, and portfolio reporting. Financial services represents 23% of AI agent adoption.",
    agents: ["Customer account agent", "KYC automation agent", "Claims processing agent", "Financial advisory agent", "Fraud alert agent"],
  },
  {
    id: "healthcare",
    tab: "Healthcare",
    icon: "🏥",
    headline: "Deploy HIPAA-compliant AI agents for patient scheduling, appointment reminders, and administrative workflow automation.",
    detail: "Healthcare AI agents handle insurance eligibility verification, symptom triage, appointment management, and administrative tasks while maintaining strict compliance with patient data regulations.",
    agents: ["Patient scheduling agent", "Insurance verification agent", "Symptom triage agent", "Administrative workflow agent", "Follow-up care agent"],
  },
  {
    id: "saas",
    tab: "SaaS & Technology",
    icon: "💻",
    headline: "AI agents for SaaS companies handle onboarding, technical support, feature adoption, and churn prevention at scale.",
    detail: "Reduce support ticket volume by up to 65% while improving user activation rates. Our agents understand your product deeply and guide users through complex workflows proactively.",
    agents: ["Onboarding assistant", "Technical support agent", "Feature adoption agent", "Churn prevention agent", "Billing support agent"],
  },
  {
    id: "realestate",
    tab: "Real Estate",
    icon: "🏠",
    headline: "AI agents qualify leads, schedule property viewings, answer listing questions, and nurture prospects throughout the buying journey.",
    detail: "Real estate AI agents engage with hundreds of leads simultaneously, ensuring no inquiry goes unanswered and every qualified buyer reaches an agent with full context on their preferences and budget.",
    agents: ["Lead qualification agent", "Property matching agent", "Viewing scheduler", "Mortgage pre-qualification agent", "Follow-up nurture agent"],
  },
  {
    id: "professional",
    tab: "Professional Services",
    icon: "⚖️",
    headline: "AI agents for law firms, accounting firms, and consulting practices automate client intake, document processing, and routine communications.",
    detail: "Free your professionals from administrative burden so they can focus on billable work. Our agents handle scheduling, document collection, preliminary assessments, and client communication with professional precision.",
    agents: ["Client intake agent", "Document processing agent", "Scheduling agent", "Billing assistant", "Research agent"],
  },
];

export function IndustryUseCases() {
  const [active, setActive] = useState("ecommerce");
  const current = industries.find((i) => i.id === active)!;
  const { openModal } = useContactModal();
  const handleCTA = () => openModal("in");

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="text-sm font-bold text-[#0052CC] uppercase tracking-wider">
            Industry Solutions
          </span>
          <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-extrabold text-[#0F172A] leading-tight mt-3 mb-4">
            AI Agent Solutions Built for Your Industry
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Every industry has unique workflows, compliance requirements, and customer expectations. We build AI agents with deep understanding of your sector.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {industries.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setActive(ind.id)}
              className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                active === ind.id
                  ? "bg-[#0052CC] text-white shadow-lg shadow-[#0052CC]/20"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <span className="mr-1.5">{ind.icon}</span>
              {ind.tab}
            </button>
          ))}
        </div>

        {/* Active Industry Detail */}
        <div className="bg-[#F9FAFB] border border-gray-100 rounded-2xl p-6 md:p-10">
          <div className="grid md:grid-cols-[1fr_300px] gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">{current.headline}</h3>
              <p className="text-gray-500 leading-relaxed mb-6">{current.detail}</p>
              <button
                onClick={handleCTA}
                className="inline-flex items-center gap-2 text-[#0052CC] font-semibold text-sm hover:gap-3 transition-all duration-200 cursor-pointer"
              >
                Explore {current.tab} AI Agents
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                Key Agents We Build
              </div>
              <div className="space-y-3">
                {current.agents.map((agent, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0052CC] flex-shrink-0" />
                    {agent}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

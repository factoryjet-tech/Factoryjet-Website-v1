// app/services/ai-agent-development/components/FAQSection.tsx
"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What exactly are AI agents, and how are they different from chatbots?",
    a: "AI agents are autonomous software systems that understand context, make decisions, and take actions across your business systems. Unlike traditional chatbots that follow scripted responses, AI agents use large language models to understand nuanced requests, access multiple systems simultaneously, and execute complex multi-step workflows. They learn from interactions, improve over time, and handle edge cases that would stump a rule-based bot.",
  },
  {
    q: "How long does it take to deploy an AI agent?",
    a: "A single-function AI agent typically takes 4–8 weeks from discovery to deployment. Multi-agent implementations across departments take 3–6 months. We use a phased approach — starting with a pilot, measuring results, then scaling — so you see value quickly while minimizing risk. Our fastest engagements deliver a working agent in as little as 4 weeks.",
  },
  {
    q: "How much does AI agent development cost?",
    a: "AI agent development costs vary based on complexity, number of integrations, deployment channels, and ongoing optimization needs. Simple single-agent implementations require a different investment level than enterprise multi-agent orchestration systems. The best way to get an accurate estimate is to book a free strategy call where we assess your specific requirements and provide a custom quote with projected ROI.",
  },
  {
    q: "What happens when an AI agent can't handle a request?",
    a: "Graceful escalation is built into every agent we deploy. When an agent encounters a request outside its confidence threshold, it seamlessly transfers the conversation to a human agent with full context — including conversation history, sentiment analysis, identified issues, actions taken, and recommended next steps. The human agent picks up exactly where the AI left off. We configure escalation triggers based on complexity, sentiment, specific topics, and regulatory requirements. Most clients find 60–80% of interactions are resolved by AI.",
  },
  {
    q: "Is our data safe with AI agents?",
    a: "Security is foundational to every agent we build. We implement data encryption in transit (TLS 1.3) and at rest (AES-256), role-based access controls, secure authentication for all integrations, data isolation across client projects, comprehensive audit logging, and regular security assessments. Our architecture supports SOC 2, GDPR, HIPAA, and PCI DSS compliance frameworks. For sensitive verticals, we offer zero-knowledge architecture and on-premises deployment options.",
  },
  {
    q: "Can AI agents integrate with our existing systems (CRM, ERP, etc.)?",
    a: "Yes — our AI agents integrate with 200+ enterprise systems including Salesforce, HubSpot, ZOHO, SAP, ERPNext, Slack, Microsoft Teams, Zendesk, Freshdesk, ServiceNow, and more. We use the Model Context Protocol (MCP), REST APIs, webhooks, and custom middleware for seamless data flow. For older legacy systems without modern APIs, we implement adapter layers or screen-based automation.",
  },
  {
    q: "What ROI can I expect from AI agents?",
    a: "74% of executives achieve ROI within the first year of AI agent deployment, with implementations averaging 340% first-year ROI according to Juniper Research. Customer support agents typically reduce costs by 30–40%, sales qualification agents deliver ROI payback in 60–90 days, and workflow automation agents produce 40–60% operational efficiency gains. We establish clear ROI metrics during the planning phase and track them throughout deployment.",
  },
  {
    q: "Will AI agents replace our employees?",
    a: "AI agents augment your team, not replace them. They handle high-volume, repetitive tasks — like answering routine inquiries, qualifying leads, and processing standard requests — so employees can focus on complex problem-solving, relationship building, and strategic work that drives greater business value. Most of our clients redeploy affected staff to higher-value roles rather than reduce headcount. The organizations that succeed with AI view it as a force multiplier for their workforce.",
  },
  {
    q: "Can AI agents learn and improve over time?",
    a: "Yes — continuous improvement is a core characteristic of AI agents. They improve through supervised learning from human feedback, pattern recognition across thousands of interactions, knowledge base updates, A/B testing of response approaches, and regular model updates. Our team monitors performance continuously and conducts monthly optimization cycles. Clients typically see measurable improvement in resolution rates, customer satisfaction, and efficiency metrics quarter-over-quarter.",
  },
  {
    q: "What if our business processes are unique or complex?",
    a: "Complex and unique processes are exactly where custom AI agents provide the greatest value. Unlike off-the-shelf solutions, FactoryJet develops agents specifically tailored to your business logic, terminology, and workflows. During discovery, we map your processes in detail — understanding decision trees, exceptions, edge cases, and integration requirements. The more complex your processes, the greater the competitive advantage from AI agents that handle that complexity effectively.",
  },
  {
    q: "How do you measure the success of AI agent deployment?",
    a: "We establish clear success metrics during the planning phase, tailored to your objectives. Common KPIs include automation rate, average handling time, first contact resolution rate, customer satisfaction scores (CSAT, NPS), cost per interaction, employee productivity metrics, error rates, and revenue impact. We implement analytics dashboards with real-time visibility and conduct monthly review sessions to assess performance against targets.",
  },
  {
    q: "How do I get started?",
    a: "Book a free AI Strategy Session where our team evaluates your current processes, identifies high-impact automation opportunities, and provides preliminary recommendations. There's no obligation — this 30-minute session helps you understand what's possible and whether AI agents are right for your situation. If you decide to proceed, we move into formal Discovery with detailed process mapping and a comprehensive proposal.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#F9FAFB] py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-[#0052CC] uppercase tracking-wider">
            Frequently Asked Questions
          </span>
          <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-extrabold text-[#0F172A] leading-tight mt-3 mb-4">
            Everything You Need to Know About AI Agents
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-4 p-5 md:p-6 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-base font-semibold text-[#0F172A] leading-snug pr-2">
                    {faq.q}
                  </h3>
                  <svg
                    className={`w-5 h-5 flex-shrink-0 text-gray-400 transition-transform duration-200 mt-0.5 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isOpen ? "500px" : "0",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="px-5 md:px-6 pb-5 md:pb-6">
                    <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA below FAQ */}
        <div className="text-center mt-10">
          <p className="text-gray-500 mb-4">Still have questions?</p>
          <a
            href="#consultation"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0052CC] hover:bg-[#003d99] text-white font-bold rounded-lg transition-all duration-200 shadow-lg shadow-[#0052CC]/20"
          >
            Talk to an AI Expert
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

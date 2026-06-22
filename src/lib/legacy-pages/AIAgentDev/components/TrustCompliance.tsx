// app/services/ai-agent-development/components/TrustCompliance.tsx
export function TrustCompliance() {
  const features = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ),
      title: "Data Encryption",
      desc: "AES-256 encryption at rest, TLS 1.3 in transit. Zero-knowledge architecture available for sensitive verticals.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
      title: "Access Control",
      desc: "Enterprise SSO, RBAC, comprehensive audit logging. Granular permissions for every agent and user.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      title: "Compliance Frameworks",
      desc: "SOC 2 Type II architecture. GDPR, HIPAA, PCI DSS, CCPA compliant. Regular third-party security audits.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
        </svg>
      ),
      title: "Flexible Deployment",
      desc: "Cloud, on-premise, or hybrid deployment. Your data stays exactly where your policy requires it.",
    },
  ];

  const guardrails = [
    "NVIDIA NeMo Guardrails for content filtering",
    "Promptfoo for automated red-teaming",
    "Automatic PII redaction in logs",
    "AI-specific guardrails preventing data exposure",
    "Model explainability and bias detection",
    "Data isolation across client projects",
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-sm font-bold text-[#0052CC] uppercase tracking-wider">
            Security & Governance
          </span>
          <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-extrabold text-[#0F172A] leading-tight mt-3 mb-4">
            Enterprise-Grade Security at Every Layer
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Deploying AI agents means trusting a system with your customer data and brand reputation. Security and compliance are foundational to every agent we build.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {features.map((f, i) => (
            <div key={i} className="p-5">
              <div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-400 flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="text-sm font-bold text-[#0F172A] mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* AI-Specific Guardrails */}
        <div className="bg-[#F9FAFB] border border-gray-100 rounded-2xl p-6 md:p-8">
          <h3 className="text-base font-bold text-[#0F172A] mb-4">AI-Specific Safety Guardrails</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {guardrails.map((g, i) => (
              <div key={i} className="flex items-center gap-2.5 text-sm text-gray-600">
                <svg className="w-4 h-4 text-[#10B981] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {g}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// app/services/ai-agent-development/components/WhyFactoryJet.tsx
export function WhyFactoryJet() {
  const differentiators = [
    {
      title: "Enterprise Processes, Startup Speed",
      desc: "Our AI-native workflows and senior-only team deliver in weeks what traditional agencies take months to produce. Operational efficiency enables enterprise quality at accessible pricing — overhead is eliminated, not quality.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
    {
      title: "Design-First AI Agents",
      desc: "Most AI shops write code but don't think about the humans who use the agent. We lead with UX design, conversation architecture, and user adoption strategy. The result: agents people actually want to use.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      ),
    },
    {
      title: "Full-Stack Ownership",
      desc: "Discovery, design, development, deployment, optimization — one team, one relationship, zero handoffs. You get a complete AI engineering team at a fraction of in-house cost.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
    },
    {
      title: "Framework-Agnostic, Best-of-Breed Technology",
      desc: "We build with LangChain, LangGraph, CrewAI, OpenAI, Claude, Gemini, and open-source models depending on what your use case demands. Your agent runs on the best tools for your needs.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
        </svg>
      ),
    },
    {
      title: "Security & Compliance Built In",
      desc: "42% of enterprises hesitate on AI due to security concerns. We architect every agent with SOC 2, GDPR, HIPAA, and PCI DSS compliance frameworks from day one — not bolted on as an afterthought.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-[#F9FAFB] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-sm font-bold text-[#0052CC] uppercase tracking-wider">
            The FactoryJet Difference
          </span>
          <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-extrabold text-[#0F172A] leading-tight mt-3 mb-4">
            Why Companies Choose FactoryJet for AI Agent Development
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            We sit in the sweet spot between Big 4 consultancies that charge $200K+ for strategy decks and offshore shops that ship broken chatbots.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {differentiators.map((d, i) => (
            <div
              key={i}
              className={`bg-white border border-gray-100 rounded-2xl p-6 md:p-8 hover:border-[#0052CC]/20 hover:shadow-lg hover:shadow-[#0052CC]/5 transition-all duration-300 ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="w-12 h-12 rounded-xl bg-[#0052CC]/[0.08] text-[#0052CC] flex items-center justify-center mb-5">
                {d.icon}
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-3">{d.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

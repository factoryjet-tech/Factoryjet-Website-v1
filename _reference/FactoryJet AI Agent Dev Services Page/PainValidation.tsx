// app/services/ai-agent-development/components/PainValidation.tsx
export function PainValidation() {
  const pains = [
    {
      icon: "🎧",
      quote: "Our support team is drowning in tickets, and customers are waiting hours for simple answers.",
      stat: "68% of customer interactions will be handled by AI agents by 2028.",
      detail:
        "Every minute a customer waits, your CSAT drops and churn increases. AI customer support agents resolve inquiries in 11 seconds — compared to 4+ hours for email.",
    },
    {
      icon: "📊",
      quote: "We spent six figures on an AI pilot with a big consultancy and got nothing but strategy decks.",
      stat: "Big 4 consultancies charge $200K–$500K for AI engagements.",
      detail:
        "Those engagements stretch 12–18 months and deliver PowerPoint presentations, not production-ready agents. You need a team that builds, not one that advises.",
    },
    {
      icon: "🔧",
      quote: "We tried an offshore team and got a half-built chatbot that broke in production.",
      stat: "42% of organizations cite quality concerns as a barrier to AI investment.",
      detail:
        "Cheap development leads to expensive rework. You need senior engineers who understand your business, not junior developers cycling through tickets.",
    },
    {
      icon: "💼",
      quote: "Our sales reps spend more time on admin than actual selling.",
      stat: "Sales teams spend less than 30% of their time on actual selling.",
      detail:
        "AI lead qualification agents engage with inbound leads instantly, score them against your criteria, and route qualified opportunities to the right reps with full context — delivering typical ROI payback in 60 to 90 days.",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="text-sm font-bold text-[#FF6B35] uppercase tracking-wider">
            Sound Familiar?
          </span>
          <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-extrabold text-[#0F172A] leading-tight mt-3 mb-4">
            Your Business Is Losing Money Every Day Without Intelligent AI Agents
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            If any of these sound familiar, you&apos;re leaving revenue, efficiency, and competitive advantage on the table.
          </p>
        </div>

        {/* Pain Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {pains.map((pain, i) => (
            <div
              key={i}
              className="group relative bg-[#F9FAFB] hover:bg-white border border-gray-100 hover:border-[#0052CC]/20 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-[#0052CC]/5"
            >
              <span className="text-2xl mb-4 block">{pain.icon}</span>
              <p className="text-base font-semibold text-[#0F172A] italic mb-3 leading-relaxed">
                &ldquo;{pain.quote}&rdquo;
              </p>
              <div className="text-sm font-bold text-[#0052CC] mb-2">{pain.stat}</div>
              <p className="text-sm text-gray-500 leading-relaxed">{pain.detail}</p>
            </div>
          ))}
        </div>

        {/* Transition */}
        <div className="text-center mt-12">
          <p className="text-xl font-bold text-[#0F172A]">There is a better way.</p>
          <svg className="w-6 h-6 mx-auto mt-4 text-[#FF6B35] animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}

// app/services/ai-agent-development/components/TrustBar.tsx
export function TrustBar() {
  const stats = [
    { value: "87%", label: "Avg. Inquiry Resolution Rate" },
    { value: "11s", label: "First Response Time" },
    { value: "340%", label: "Average First-Year ROI" },
    { value: "4", label: "Countries Served" },
  ];

  return (
    <section className="bg-[#0d1321] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-extrabold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        {/* Technology partner logos */}
        <div className="mt-8 pt-6 border-t border-white/5">
          <p className="text-xs text-gray-500 text-center uppercase tracking-widest mb-4 font-semibold">
            Built With Enterprise-Grade Technology
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-gray-500 text-sm font-medium">
            {["OpenAI", "Anthropic Claude", "Google Gemini", "LangChain", "AWS", "Azure", "Meta Llama"].map(
              (name) => (
                <span key={name} className="hover:text-gray-300 transition-colors">
                  {name}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

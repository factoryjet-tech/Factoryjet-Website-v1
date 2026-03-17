// app/services/ai-agent-development/components/TechnologyStack.tsx
export function TechnologyStack() {
  const categories = [
    {
      title: "Large Language Models",
      items: ["OpenAI GPT-4o & GPT-5", "Anthropic Claude 4.5", "Google Gemini", "Meta Llama 4", "Mistral", "DeepSeek", "Custom Fine-Tuned Models"],
    },
    {
      title: "Agentic Frameworks",
      items: ["LangChain", "LangGraph", "CrewAI", "AutoGen / AG2", "Semantic Kernel", "Custom Orchestration"],
    },
    {
      title: "Vector Databases & RAG",
      items: ["Pinecone", "Qdrant", "Weaviate", "pgvector", "LlamaIndex", "Custom RAG Pipelines"],
    },
    {
      title: "Integration Layer",
      items: ["Model Context Protocol (MCP)", "REST APIs", "GraphQL", "Webhooks", "OAuth 2.0", "Custom Middleware"],
    },
    {
      title: "Cloud & Infrastructure",
      items: ["AWS Bedrock", "Azure AI Foundry", "Google Vertex AI", "Docker", "Kubernetes", "On-Premises"],
    },
    {
      title: "Observability & Security",
      items: ["LangSmith", "Langfuse", "NVIDIA NeMo Guardrails", "Promptfoo", "Custom Dashboards", "Audit Logging"],
    },
  ];

  return (
    <section className="bg-[#F9FAFB] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-sm font-bold text-[#0052CC] uppercase tracking-wider">
            Built with Enterprise-Grade Technology
          </span>
          <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-extrabold text-[#0F172A] leading-tight mt-3 mb-4">
            The Technology Behind Our AI Agents
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Our framework-agnostic approach means your agent runs on the best tools for your needs, not on whatever platform pays us the highest commission.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-base font-bold text-[#0F172A] mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, j) => (
                  <span
                    key={j}
                    className="bg-gray-50 border border-gray-200 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

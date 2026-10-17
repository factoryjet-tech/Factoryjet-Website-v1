/**
 * LLM Development Services FAQ (/services/llm-development): the single source for the
 * visible accordion in LlmDevelopmentSections.tsx AND the FAQPage JSON-LD in
 * src/app/services/llm-development/page.tsx. Never duplicate these strings elsewhere.
 *
 * Questions: Google People Also Ask and related searches, US (location 2840), pulled
 * 18 Oct 2026 for llm development services, llm development company, custom llm development,
 * llm development, llm fine tuning services and llm integration services
 * (pipeline/research/data/midmarket-agent-blog-2026-10-17/serp_paa_batch5.json), plus buyer
 * questions. Coding-career and degree questions were left out.
 *
 * Every outside figure links to the page it came from (read 18 Oct 2026). Cost answers use
 * other firms' published market ranges only: no FactoryJet prices, no running or model-usage figures.
 */

export const LLM_DEV_FAQ_CATEGORIES = [
  { id: 'faq-basics', label: 'LLM development basics' },
  { id: 'faq-build', label: 'RAG, fine-tuning & models' },
  { id: 'faq-cost', label: 'Cost, timelines & ownership' },
  { id: 'faq-data', label: 'Data, privacy & security' },
  { id: 'faq-choose', label: 'Choosing an LLM development company' },
] as const;

export interface LlmDevFaq {
  id: string;
  category: (typeof LLM_DEV_FAQ_CATEGORIES)[number]['id'];
  question: string;
  answer: string;
  /** Optional link rendered after the answer (external source or internal page). Not part of the schema text. */
  link?: { url: string; label: string; external?: boolean };
}

export const SRC_OPENAI_DATA = 'https://platform.openai.com/docs/guides/your-data';
export const SRC_ANTHROPIC_TRAINING = 'https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training';
export const SRC_OWASP_TOP10 = 'https://genai.owasp.org/llm-top-10/';
export const SRC_LORA_PAPER = 'https://arxiv.org/abs/2106.09685';
export const SRC_PRODUCTCRAFTERS = 'https://productcrafters.io/blog/how-much-does-it-cost-to-build-an-ai-agent/';
export const SRC_LAYER3 = 'https://www.layer3labs.io/guides/ai-consulting-rates-pricing';

export const LLM_DEV_FAQS: LlmDevFaq[] = [
  // ── Basics ──
  { id: 'Q01', category: 'faq-basics', question: 'What are LLM development services?',
    answer: 'LLM development services are the work of turning a large language model, the kind of AI behind ChatGPT and Claude, into software a business can rely on. The usual list: choosing and testing a model, grounding it in company data with retrieval (RAG), fine-tuning where needed, building the app or API around it, connecting it to existing systems, and testing accuracy before launch.' },
  { id: 'Q02', category: 'faq-basics', question: 'What is LLM development?',
    answer: 'LLM development means building software around a large language model so it does one job well: answering from your documents, drafting replies, extracting fields from invoices or classifying tickets. For most businesses it does not mean training a new model from scratch. It means picking an existing model, giving it the right data and limits, and measuring its answers against real cases.' },
  { id: 'Q03', category: 'faq-basics', question: 'What does an LLM development company do?',
    answer: 'An LLM development company scopes one measurable job, finds and cleans the data the model needs, compares models on your own examples, builds the retrieval, prompts and code around the chosen model, connects it to your systems through their APIs, and sets a pass mark before launch. After launch it re-tests the system whenever the model, the data or the job changes.' },
  { id: 'Q04', category: 'faq-basics', question: 'What are LLM developers?',
    answer: 'LLM developers are software engineers who build applications on large language models. Their daily work is retrieval pipelines, prompt and tool design, evaluation sets, model comparisons, API integrations, guardrails and logging. Most write Python or TypeScript, and the job is ordinary LLM software development with a test set attached. Training a frontier model is a separate research job done by a handful of labs; LLM application development is the part businesses hire for.' },
  { id: 'Q05', category: 'faq-basics', question: 'What is LLM application development?',
    answer: 'LLM application development, or LLM app development, is building a product or internal tool whose core is a language model: a support assistant over your policies, a contract reviewer, a quote drafter, an internal search over manuals. The model is one component. The rest is the interface, the data connections, permissions, evaluation and the handoff to a person when the model is unsure.' },
  { id: 'Q06', category: 'faq-basics', question: 'What are the uses of an LLM in a business?',
    answer: 'The uses that pay back first are the repeated reading and writing jobs: answering staff or customer questions from your own documents, drafting replies and product content, extracting fields from emails, PDFs and invoices, summarizing long tickets or calls, and classifying incoming requests. Each one works best when a person can check the result in seconds and the source is linked.' },
  { id: 'Q07', category: 'faq-basics', question: 'Is ChatGPT an LLM or generative AI?',
    answer: 'Both. ChatGPT is a generative AI product, and the engine inside it is a large language model from OpenAI. "Generative AI" is the broad category of AI that creates text, images or code. An LLM is the type of generative model that works with language. LLM development services build business software on models like these, usually through the provider\'s API rather than the chat app.' },

  // ── RAG, fine-tuning & models ──
  { id: 'Q08', category: 'faq-build', question: 'Should we fine-tune an LLM or use RAG?',
    answer: 'Start with RAG when the answers must come from your documents or records, because they change and RAG keeps answers current without retraining. Fine-tune when you need a fixed format, tone or classification that prompting cannot hold and you have hundreds to thousands of good examples. Fine-tuning does not reliably teach new facts, so many production systems use both together.' },
  { id: 'Q09', category: 'faq-build', question: 'What are LLM fine-tuning services?',
    answer: 'LLM fine-tuning services train an existing model further on your own examples so it follows your format, vocabulary or decisions more consistently. The work is mostly data: collecting and cleaning examples, splitting off a test set, training, then comparing the tuned model against the base model on cases it never saw. Techniques such as LoRA tune a small set of added weights instead of the whole model.',
    link: { url: SRC_LORA_PAPER, label: 'Hu et al., the LoRA paper', external: true } },
  { id: 'Q10', category: 'faq-build', question: 'Can I build my own large language model?',
    answer: 'You can, but almost no business should. Training a model from scratch takes huge amounts of data and computing time, and the result usually trails the models you can already rent. ProductCrafters puts training custom models at $50,000 to $200,000 or more. The practical route is an existing model plus your data through RAG, and fine-tuning only where tests show it is needed.',
    link: { url: SRC_PRODUCTCRAFTERS, label: 'ProductCrafters cost breakdown', external: true } },
  { id: 'Q11', category: 'faq-build', question: 'What is the best LLM for business use?',
    answer: 'There is no single best LLM. The right one depends on the job, the accuracy you need, how fast it must answer, the data terms and the price per call. We score two or three candidates from OpenAI, Anthropic, Google and open-weight families on your own test cases, then choose. Keeping the model layer swappable means a better option later is a configuration change.' },
  { id: 'Q12', category: 'faq-build', question: 'Should we use an open-weight model or an API model?',
    answer: 'An API model from OpenAI, Anthropic or Google is faster to start and usually more capable. An open-weight model, such as a Llama, Mistral or Qwen family model, runs on infrastructure you control, which helps when data must stay inside your cloud or network. Open weights mean more hosting and upkeep work. Decide on data rules and test scores, not on habit.' },
  { id: 'Q13', category: 'faq-build', question: 'How do you stop an LLM from making things up?',
    answer: 'You reduce it by design and measure what remains. Ground answers in retrieved sources and show the source, tell the model to say it does not know when the sources are silent, check outputs against rules in code, and keep a person on anything with money or legal impact. Then score the system on a test set of real questions, including ones it should refuse.' },
  { id: 'Q14', category: 'faq-build', question: 'What are the four types of LLM?',
    answer: 'Lists vary, but a common split is by how the model is offered and trained: general-purpose base models, instruction-tuned chat models, domain or task-tuned models, and smaller models built to run on modest hardware. For a business decision the useful split is simpler: hosted API models versus open-weight models you run yourself, and general models versus ones tuned on your examples.' },
  { id: 'Q15', category: 'faq-build', question: 'Do LLM apps use LangChain?',
    answer: 'Some do. LangChain and LlamaIndex are popular open-source frameworks for LLM application development, and the model providers now ship their own SDKs for tools and agents. We pick per project: a framework helps with common retrieval patterns, while plain code is easier to test and debug for a narrow job. What matters more is the evaluation set and the logging around it.' },

  // ── Cost, timelines & ownership ──
  { id: 'Q16', category: 'faq-cost', question: 'How much do LLM development services cost?',
    answer: 'Published market ranges: Layer3 Labs puts a production MVP workflow at $5,000 to $25,000 and an enterprise AI system at $50,000 to $200,000 or more (updated 9 September 2026). ProductCrafters puts fine-tuning an OpenAI or Anthropic model at $10,000 to $50,000, needing 1,000 or more examples. These are other firms\' figures, not FactoryJet prices. We quote a fixed price after scoping.',
    link: { url: SRC_LAYER3, label: 'Layer3 Labs pricing guide', external: true } },
  { id: 'Q17', category: 'faq-cost', question: 'How long does an LLM development project take?',
    answer: 'A working prototype on your real data, with two or three models scored on your test set, usually takes three to five weeks. A production build with integrations, permissions, logging and a pilot with real users adds five to eight weeks for one job on one or two systems, and eight to fourteen weeks across several systems. Data cleanup is the usual cause of delay.' },
  { id: 'Q18', category: 'faq-cost', question: 'Who owns the model, prompts and data after the build?',
    answer: 'At FactoryJet you own the code from day one, together with the prompts, evaluation sets, any fine-tuned weights and the documentation, in your repository. The AI and hosting accounts are in your name and billed by the providers at cost. Check this in any contract: some vendors keep the code or the tuned model and license it back, which makes switching expensive later.' },

  // ── Data, privacy & security ──
  { id: 'Q19', category: 'faq-data', question: 'Will our data be used to train the model provider\'s models?',
    answer: 'Not on business API terms. OpenAI says data sent to its API has not been used to train its models since 1 March 2023 unless you opt in, and Anthropic says it does not use inputs or outputs from its commercial products, including the Anthropic API, for training by default. We build on those business terms and never on personal chat accounts.',
    link: { url: SRC_OPENAI_DATA, label: 'OpenAI: your data', external: true } },
  { id: 'Q20', category: 'faq-data', question: 'What are the main security risks in an LLM application?',
    answer: 'The OWASP Top 10 for LLM applications (2025) lists them, starting with prompt injection, where text hidden in an email or document tries to redirect the model, followed by sensitive information disclosure. Others include data and model poisoning, improper output handling and excessive agency. The defenses are least-privilege access, actions run in code with checks, and a person approving consequential steps.',
    link: { url: SRC_OWASP_TOP10, label: 'OWASP Top 10 for LLM applications', external: true } },
  { id: 'Q21', category: 'faq-data', question: 'Can an LLM run inside our own cloud?',
    answer: 'Yes. Open-weight models can be deployed in your own AWS, Azure or Google Cloud account, and the major API models are also sold through those clouds under your account. That keeps prompts, documents and logs inside infrastructure you control. It adds hosting and patching work, so we recommend it when your data rules require it rather than by default.' },

  // ── Choosing ──
  { id: 'Q22', category: 'faq-choose', question: 'What is LLM integration?',
    answer: 'LLM integration connects a language model to the software you already run so it can read the right information and put its output where people work. Examples: an LLM reading emailed purchase orders and creating draft orders in NetSuite, or drafting a Zendesk reply from your policy pages. LLM integration services do this through official APIs; LLM API integration means calling the model through the provider\'s API from your own code with your keys.',
    link: { url: '/services/ai-integration-services', label: 'AI integration services' } },
  { id: 'Q23', category: 'faq-choose', question: 'How do I choose an LLM development company?',
    answer: 'Ask four things. Will they show working software on your own data before you sign? Will they agree a test set and pass mark before the build? Who owns the code, prompts and any tuned model? Whose accounts do the AI and hosting run in? Then ask for the systems they have connected an LLM to. Vague answers on any of these are a warning.' },
  { id: 'Q24', category: 'faq-choose', question: 'Is LLM development the same as AI agent development?',
    answer: 'No. LLM development builds software where the model reads and writes: answers, drafts, extractions and classifications that a person or code then uses. AI agent development goes further, letting the model take several steps across systems within rules and approvals. Most agents are built on the same LLM work, so a project often starts as LLM development and adds an agent later.',
    link: { url: '/services/ai-agent-development', label: 'AI agent development' } },
];

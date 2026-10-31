import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

/*
 * Private AI for business: nine ways to use AI on your own data, compared (US first, UK/AU/EU compliance). Written 22 Oct 2026.
 * Distinct from /services/llm-development (the build service) and /blog/ai-agent-security-risks-controls-2026 (OWASP agent
 * risks): this is the buyer's decision page on WHICH private option to pick and what "private" means for each.
 * Target terms (DataForSEO Google Ads, US, 22 Oct 2026): rag 74,000/mo, private ai 40,500, vertex ai 22,200, chatgpt business
 * 12,100 ($42.66), amazon bedrock 12,100, chatgpt enterprise 8,100, claude enterprise 8,100, retrieval augmented generation
 * 8,100, hipaa compliant ai 6,600 ($41.88), secure ai for business 4,400, private llm 3,600, azure openai 3,600, self hosted llm
 * 3,600, on premise ai 3,600, private chatgpt 2,900, on premise llm 2,900, private ai for business 2,400 ($45.23), chatgpt team
 * 2,400, ai data residency 1,900, claude for work 1,300. PAA (22 Oct, two clicks deep, 5 seeds) in
 * pipeline/research/data/private-ai-2026-10-22/paa.csv. Script: pipeline/research/dfs_private_ai_2026_10_22.py ($0.10).
 * Vendor terms: every page in SRC opened on 22 Oct 2026 (openai.com and hhs.gov in a browser, the rest by fetch with the key
 * sentences rechecked against raw page text). Notes: scratchpad vendor-terms.md and compliance.md of that session.
 * No FactoryJet prices, no running-cost figures, no team location, no compliance claims about FactoryJet.
 * The FAQ array below is the single source for both the visible FAQ and the FAQPage JSON-LD.
 */

const SRC = {
  openaiEnterprise: 'https://openai.com/enterprise-privacy/',
  openaiBusiness: 'https://openai.com/business-data/',
  openaiApi: 'https://platform.openai.com/docs/guides/your-data',
  copilot: 'https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy',
  claudeTraining: 'https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training',
  claudeZdr: 'https://privacy.claude.com/en/articles/8956058-i-have-a-zero-data-retention-agreement-with-anthropic-what-products-does-it-apply-to',
  claudeBaa: 'https://privacy.claude.com/en/articles/8114513-business-associate-agreements-baa-for-commercial-customers',
  claudeResidency: 'https://platform.claude.com/docs/en/manage-claude/data-residency',
  gemini: 'https://knowledge.workspace.google.com/admin/gemini/generative-ai-in-google-workspace-privacy-hub',
  bedrock: 'https://aws.amazon.com/bedrock/faqs/',
  bedrockSecurity: 'https://aws.amazon.com/bedrock/security-compliance/',
  azure: 'https://learn.microsoft.com/en-us/azure/ai-foundry/responsible-ai/openai/data-privacy',
  vertex: 'https://docs.cloud.google.com/vertex-ai/generative-ai/docs/data-governance',
  vertexResidency: 'https://docs.cloud.google.com/vertex-ai/generative-ai/docs/learn/data-residency',
  llama: 'https://www.llama.com/llama4/license/',
  mistral: 'https://mistral.ai/news/mistral-3',
  hhs: 'https://www.hhs.gov/hipaa/for-professionals/special-topics/health-information-technology/cloud-computing/index.html',
  soc2: 'https://www.aicpa-cima.com/topic/audit-assurance/audit-and-assurance-greater-than-soc-2',
  icoAi: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/',
  icoDpia: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/data-protection-impact-assessments-dpias/when-do-we-need-to-do-a-dpia/',
  icoTransfers: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/international-transfers/international-transfers-a-guide/',
  oaicApp8: 'https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-8-app-8-cross-border-disclosure-of-personal-information',
  oaicAi: 'https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products',
  gdpr28: 'https://gdpr-info.eu/art-28-gdpr/',
  dpf: 'https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/eu-us-data-transfers_en',
  aiAct50: 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50',
  aiAct113: 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-113',
  omnibus: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj',
  copilotPricing: 'https://www.microsoft.com/en-us/microsoft-365-copilot/pricing',
  claudePricing: 'https://claude.com/pricing',
  vllm: 'https://docs.vllm.ai/',
  ollama: 'https://ollama.com/',
  pgvector: 'https://github.com/pgvector/pgvector',
  scalacode: 'https://www.scalacode.com/blog/rag-development-cost/',
  raftlabs: 'https://www.raftlabs.com/blog/rag-development-cost',
};

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;
const IMG = '/images/blog/private-ai-for-business-own-data-2026';

function Table({ head, rows }: { head: string[]; rows: React.ReactNode[][] }) {
  return (
    <div className="my-6">
      <p className="md:hidden text-xs text-gray-500 mb-2">Swipe sideways to see every column.</p>
      <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
      <table className="w-full border-collapse text-sm" style={{ minWidth: head.length > 3 ? 720 : 560 }}>
        <thead>
          <tr className="bg-gray-800 text-white">
            {head.map((h) => (
              <th key={h} className="p-3 text-left border border-gray-700">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 ? 'bg-gray-50' : 'bg-white'}>
              {r.map((c, j) => (
                <td key={j} className={`p-3 border border-gray-200 align-top${j === 0 ? ' font-semibold' : ''}`}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

const faqs: FAQItem[] = [
  {
    q: 'Is there an AI that is completely private?',
    a: "Only one you run yourself. An open-weight model such as Llama or Mistral, hosted on your own servers or in your own cloud account, sends nothing to an AI vendor. Every business plan from OpenAI, Microsoft, Anthropic, Google and AWS says it does not train on your data by default, but your prompts still pass through their systems and some are kept for a set time.",
  },
  {
    q: 'Can I have my own private AI?',
    a: "Yes. A business can get private AI three ways: buy business seats (ChatGPT Enterprise or Business, Microsoft Copilot, Claude for Work, Gemini for Workspace), call a model through its own cloud account (Amazon Bedrock, Azure OpenAI, Google Vertex AI), or host an open model itself. Most companies then connect their own documents with RAG so answers come from their files.",
  },
  {
    q: 'What does private AI mean?',
    a: "Private AI means an AI system where your prompts, files and answers are not used to train the vendor's models, are kept only as long as you allow, stay in a region you choose, are encrypted, and can only be seen by people you authorise. A tool can pass one of those tests and fail another, so check all five rather than trusting the word private.",
  },
  {
    q: 'Does ChatGPT Enterprise train on your data?',
    a: "No, not by default. OpenAI's enterprise privacy page, read on 22 October 2026, says: \"By default, we do not use your business data for training our models.\" The same applies to ChatGPT Business and the OpenAI API. Admins on Enterprise control how long data is kept, and deleted chats are removed from OpenAI's systems within 30 days.",
  },
  {
    q: 'Is ChatGPT Enterprise safe for confidential information?',
    a: "It is built for it: no training on business data by default, AES-256 encryption at rest, TLS 1.2 or higher in transit, admin-set retention, SOC 2 Type 2, and data storage in regions including the US, Europe, the UK and Australia for eligible customers. It is not a HIPAA answer, though. OpenAI's BAA sentence names ChatGPT for Healthcare and the API, not Enterprise.",
  },
  {
    q: 'Will ChatGPT keep my data private?',
    a: "It depends on the plan. Business plans (Business, Enterprise, API) do not train on your data by default. Consumer accounts work differently and have their own settings, so customer data pasted into a personal ChatGPT login sits outside your admin controls. Give people a business account and a written rule on what may go in it.",
  },
  {
    q: 'What is the difference between ChatGPT and ChatGPT Enterprise?',
    a: "For privacy, three things: Enterprise does not train on your business data by default, admins control retention, and eligible customers can keep data at rest in their own region, with in-region processing in the US or Europe. Enterprise also adds single sign-on, admin controls and customer-held encryption keys. ChatGPT Business shares the no-training default but is not on OpenAI's residency list.",
  },
  {
    q: 'Is Microsoft Copilot private for company data?',
    a: "Microsoft says prompts, responses and data reached through Microsoft Graph are not used to train foundation models. Copilot only sees what each user can already open, so messy SharePoint permissions become an AI problem. EU traffic stays in the EU Data Boundary, but Microsoft notes that Anthropic models used inside Copilot fall outside it. Fix file permissions before switching it on.",
  },
  {
    q: 'Does Claude use my business data for training?',
    a: "No, by default. Anthropic's privacy centre says it will not use inputs or outputs from commercial products such as Claude for Work and the API to train its models unless you explicitly opt in. Deleted data goes within 30 days. Zero data retention is available for the API and Claude Code on Enterprise, not for chat in Claude Team or Enterprise.",
  },
  {
    q: 'Is Gemini for Google Workspace private?',
    a: "Google's Workspace privacy hub says your content is not reviewed or used for model training outside your domain without permission, and admins set how long Gemini prompts are kept, from 90 days to indefinitely. Google also says Gemini in Workspace can support HIPAA workloads and holds FedRAMP High. The same hub lists SOC 1, 2 and 3 and ISO/IEC 27001 for Gemini in Workspace.",
  },
  {
    q: 'What is the most private way to use GPT or Claude models?',
    a: "Call them through your own cloud account. Azure OpenAI runs OpenAI models inside Azure, and Amazon Bedrock and Google Vertex AI run Claude and other models inside AWS and Google Cloud. Each says your data is not used to train models, you pick the region, and you can use your own encryption keys. Your existing cloud contract and BAA then cover it.",
  },
  {
    q: 'How do I set up a private LLM?',
    a: "Pick the model and the place first: an API model in your own cloud account, or an open-weight model on your own servers. Then connect your documents with RAG, put single sign-on and role-based access in front of it, log every question and answer, set retention, and test it on 50 to 100 real questions with known answers before staff use it.",
  },
  {
    q: 'Is an LLM private?',
    a: "A model itself is just a file. Privacy comes from where it runs and who holds the data you send it. The same Claude model is used through claude.ai, the Anthropic API, Amazon Bedrock and Google Vertex AI, each with different retention and region rules. An open model on your own hardware is the only setup where no vendor sees anything.",
  },
  {
    q: 'Is self-hosting an open-source LLM worth it for a business?',
    a: "Only when data cannot leave your network by rule or contract, or when usage is high and steady. Self-hosting means you own servers, updates, security patches and model upgrades. Open models are also usually behind the best API models. Most companies under 1,000 staff get enough privacy from an API model inside their own AWS, Azure or Google Cloud account.",
  },
  {
    q: 'Can businesses use Llama and Mistral models commercially?',
    a: "Yes, with conditions. The Llama 4 licence lets businesses use it, but companies above 700 million monthly active users must ask Meta for a licence, and you must show \"Built with Llama\" where you use it. Mistral released its Mistral 3 family under the Apache 2.0 licence, though a few other Mistral models carry different terms, so check each model's page.",
  },
  {
    q: 'What is RAG in AI?',
    a: "RAG, short for retrieval-augmented generation, means the AI looks up passages from your own documents before it answers, then writes the answer from those passages and can show which file each fact came from. Your documents stay in a store you control. The model only sees the few passages fetched for each question, and it is not retrained on them.",
  },
  {
    q: 'Can a private AI only show staff the files they are allowed to see?',
    a: "Yes, if the retrieval step checks permissions. Each passage in the search index carries the access rules of the file it came from, and the assistant only fetches passages the person asking may open. Microsoft Copilot does this with your existing Microsoft 365 permissions. A custom RAG build has to copy those rules from SharePoint, Drive or your CRM and test them before launch.",
  },
  {
    q: 'Is RAG better than training a model on our own data?',
    a: "For most business questions, yes. RAG updates the moment a document changes, can respect each user's permissions, and shows its sources. Fine-tuning bakes data into the model, so it cannot be removed per document and does not respect permissions. Fine-tune to change how a model writes or formats; use RAG to change what it knows.",
  },
  {
    q: 'Is there a HIPAA compliant AI?',
    a: "No AI tool is HIPAA compliant on its own. What you need is a vendor that will sign a business associate agreement (BAA) for the specific product, plus your own safeguards. OpenAI signs BAAs for the API and ChatGPT for Healthcare, Anthropic for the API and for Claude Enterprise once HIPAA mode is switched on, and AWS lists Bedrock as HIPAA eligible.",
  },
  {
    q: 'Do UK companies need a DPIA before using AI on personal data?',
    a: "Often, yes. The ICO says a DPIA is required where processing is likely to result in a high risk, and lists innovative technology, including artificial intelligence, as one trigger when combined with another factor such as large-scale or sensitive data. If the AI vendor stores data outside the UK, you also need a transfer mechanism such as the IDTA.",
  },
  {
    q: 'Can Australian businesses put customer data into ChatGPT?',
    a: "Not into public tools. The OAIC's October 2024 guidance tells organisations not to enter personal information, and particularly sensitive information, into publicly available generative AI tools. With a business plan, APP 8 still applies when data goes overseas, so you must take reasonable steps to make sure the vendor handles it to Australian standards. Prefer an Australian data region.",
  },
  {
    q: 'What does the EU AI Act require for a private AI assistant?',
    a: "Transparency, for most internal assistants. Article 50 has applied since 2 August 2026: AI systems that talk to people must tell them they are dealing with AI unless it is obvious. GDPR still governs the data itself, so you need an Article 28 processor contract with the vendor and a valid basis for any transfer outside the EU.",
  },
  {
    q: 'How much does a private AI system cost to build?',
    a: "Market ranges, not our prices: ScalaCode's July 2026 guide puts a basic RAG system at $10,000 to $25,000, production RAG at $25,000 to $60,000 and enterprise agentic RAG at $60,000 to $150,000 or more. RaftLabs gives $12,000 to $30,000 for simple document Q&A. FactoryJet quotes a fixed price in writing after a short scoping call.",
  },
  {
    q: 'How much do business AI seats cost per user?',
    a: "Vendor list prices, read on 31 October 2026: Microsoft 365 Copilot Business lists at $21 per user a month on a yearly plan, cut to $18 for the first year on sign-ups from 1 July to 31 December 2026, or $25.20 month to month. Claude Team is $20 a seat a month billed yearly for 2 to 150 seats. Claude Enterprise is $20 a seat a month, 20 seats minimum, plus usage at API rates. Check each vendor's page before you buy.",
  },
  {
    q: 'Which private AI option is best for a small business?',
    a: "Under about 50 staff, buy business seats in the suite you already use: Copilot for Microsoft 365 shops, Gemini for Google Workspace shops, or ChatGPT Business or Claude Team otherwise. Write a one-page rule on what data may go in. Build a custom RAG assistant only when staff need answers from a large body of your own documents.",
  },
];

export const post: BlogPost = {
  id: '820',
  slug: 'private-ai-for-business-own-data-2026',
  title: 'Private AI for Business: 9 Ways to Use AI on Your Own Data, Compared (2026)',
  excerpt:
    'Nine ways to use AI on your own data, from ChatGPT Enterprise to self-hosted Llama, compared on training, retention, region and encryption, with US, UK, Australian and EU rules.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Oct 22, 2026',
  dateModified: 'Oct 31, 2026',
  readTime: '16 min read',
  imageUrl: `${IMG}/hero.webp`,
  imageAlt:
    'Seen over his shoulder, a man in his 40s with black hair and glasses in a charcoal sweater reads a chat screen on a monitor, with a grey folder and a small black padlock beside his keyboard.',
  meta: {
    title: 'Private AI for Business: 9 Options Compared (2026)',
    description:
      'Private AI on your own data: ChatGPT Enterprise, Copilot, Claude, Gemini, Bedrock, Azure OpenAI, Vertex and self-hosted LLMs compared, plus HIPAA and GDPR.',
  },
  keyTakeaways: [
    'Every business AI plan we checked on 22 October 2026 (OpenAI, Microsoft, Anthropic, Google, AWS) says it does not train on your data by default. The real differences are retention, region and who can see what.',
    'Check five things for each option: training use, retention, data region, encryption, and access control. "Private" on a sales page covers some of them, rarely all.',
    'Business seats (ChatGPT, Copilot, Claude, Gemini) are the fastest route. A model in your own AWS, Azure or Google Cloud account is the most private route most companies need. Self-hosting is for data that cannot leave your network.',
    'RAG connects the AI to your own documents without retraining it, respects permissions and shows sources. It sits on top of any of the options.',
    'No AI tool is HIPAA compliant by itself. You need a business associate agreement (BAA) for the specific product. OpenAI names the API and ChatGPT for Healthcare, not ChatGPT Enterprise.',
    'Outside the US, UK firms often need a data protection impact assessment (DPIA) and an International Data Transfer Agreement (IDTA). Australian firms must meet Australian Privacy Principle 8 (APP 8) for overseas vendors. EU AI Act Article 50 transparency has applied since 2 August 2026.',
    'Market build ranges for a private RAG system run from about $10,000 for a basic setup to $150,000 or more for enterprise scale (ScalaCode, July 2026).',
  ],
  faqs,
  content: (
    <article>
      {/* Answer-first block */}
      <div className="bg-white border-2 border-[#E5DFD7] rounded-xl p-6 sm:p-8 mb-10">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-3">The short answer</p>
        <p className="text-lg leading-relaxed mb-0">
          <strong>Private AI for business</strong>{' '}means the vendor does not train on your prompts and files, keeps them
          only as long as you allow, stores them in your chosen region, encrypts them, and shows them only to people you
          authorise. Most companies get there with a GPT, Claude or Gemini model inside their AWS, Azure or Google Cloud
          account, linked to their files with RAG. Self-host an open model only when data cannot leave your network.
        </p>
      </div>

      <div className="bg-[#FAF8F5] border-l-4 border-[#B23E13] p-5 rounded-r-lg mb-10">
        <p className="text-sm text-[#1F2937] leading-relaxed mb-0">
          <strong>We design, build and support private AI assistants and agents, so weigh this page with that in mind.</strong>{' '}
          Every vendor term below was read on the vendor&apos;s own page on 22 October 2026 and is linked where it
          appears. Terms change, so check the link before you sign. This is general guidance, not legal advice or a
          compliance opinion.
        </p>
      </div>

      <p>
        The usual buyer is an operations, IT or compliance lead who has found staff pasting customer data into personal
        AI accounts. Most vendor pages describe one route. This guide compares nine, from ChatGPT Business (formerly
        ChatGPT Team) to models on your own servers, on the same five tests.
      </p>

      <h2 id="what-private-means">What &quot;private&quot; actually means: the five tests</h2>
      <p>
        Vendors use &quot;private&quot; and &quot;secure&quot; loosely. Ask these five questions of every option, and get
        the answer from the vendor&apos;s terms, not the sales deck.
      </p>
      <ol className="list-decimal pl-6 space-y-3 mb-6">
        <li><strong>Training use.</strong>{' '}Are your prompts, files or answers used to train or improve the vendor&apos;s models? By default, and after any setting change?</li>
        <li><strong>Retention.</strong>{' '}How long does the vendor keep prompts and answers, who sets that, and is there a zero data retention (ZDR) option, meaning nothing is stored after the answer is returned?</li>
        <li><strong>Data region.</strong>{' '}Where is data stored and where is it processed? Can you pin both to the US, UK, EU or Australia? This is what AI data residency means in a contract.</li>
        <li><strong>Encryption.</strong>{' '}Is data encrypted at rest and in transit, and can you hold your own encryption keys (customer-managed keys)?</li>
        <li><strong>Access control.</strong>{' '}Can the AI only see what each user is already allowed to see, with single sign-on and a log of every question and answer?</li>
      </ol>
      <p>
        The fifth test depends on your own file permissions, not on the vendor. If every employee can open
        the HR folder, an AI assistant connected to that folder will happily summarise salaries for anyone who asks.
      </p>

      <h2 id="nine-options">The nine options compared (vendor terms read 22 October 2026)</h2>
      <Table
        head={['Option', 'Trains on your data by default?', 'Retention', 'Data region', 'HIPAA BAA']}
        rows={[
          ['ChatGPT Enterprise', 'No', 'Admin-set; deleted chats gone within 30 days', 'At rest in US, Europe, UK, Australia and 6 more for eligible customers; in-region processing US or Europe', 'Not named (OpenAI names ChatGPT for Healthcare and API)'],
          ['ChatGPT Business (was Team)', 'No', 'Deleted or unsaved chats gone within 30 days', 'Not on OpenAI\'s residency list', 'Not named'],
          ['Microsoft Copilot (Microsoft 365)', 'No (not used to train foundation models)', 'Admin-set in Microsoft Purview', 'EU Data Boundary for EU traffic; Anthropic models excluded', 'HIPAA listed; check your Microsoft agreement'],
          ['Claude Team and Enterprise', 'No, unless you opt in', 'Deleted within 30 days; ZDR not available for chat', 'Not stated for chat plans', 'Enterprise, once HIPAA mode is switched on'],
          ['Gemini for Google Workspace', 'No, not outside your domain without permission', 'Admin-set, 90 days to indefinite', 'Not stated on the privacy hub', 'Google says it can support HIPAA workloads'],
          ['Amazon Bedrock', 'No; not shared with model providers', 'Set per AWS Region; zero retention possible', 'The AWS Region you choose', 'HIPAA eligible'],
          ['Azure OpenAI (Azure AI Foundry)', 'No, without your permission', 'Stored data deletable by you', 'Your chosen geography, or a US or EU Data Zone', 'Check your Azure agreement'],
          ['Google Vertex AI', 'No, without your prior permission', 'Cache up to 24 hours; ZDR with set-up steps', 'US, EU, UK (europe-west2), Australia (australia-southeast1) and more', 'Check your Google Cloud agreement'],
          ['Self-hosted Llama or Mistral', 'Not applicable: no vendor sees data', 'You decide', 'Wherever you run it', 'Your own safeguards'],
        ]}
      />
      <p>
        The table covers options 1 to 8: (1) ChatGPT, (2) Copilot, (3) Claude, (4) Gemini, (5) Bedrock, (6) Azure
        OpenAI, (7) Vertex AI and (8) self-hosted models. Option 9, RAG over your own documents, sits on top of any of
        them and has its own section <a href="#rag">below</a>.
      </p>

      <h3 id="seats">1 to 4: business AI seats (fastest, least control)</h3>
      <p>
        <strong>ChatGPT Enterprise and Business.</strong>{' '}OpenAI&apos;s{' '}
        <a href={SRC.openaiEnterprise} {...ext}>enterprise privacy page</a>{' '}says: &quot;By default, we do not use your
        business data for training our models.&quot; Enterprise adds AES-256 encryption at rest, TLS 1.2 or higher in
        transit, customer-held keys, SOC 2 Type 2 and ISO/IEC 27001, and data at rest in ten regions including the US,
        UK, Europe and Australia for eligible customers. The <a href={SRC.openaiBusiness} {...ext}>business data page</a>{' '}
        offers BAAs to &quot;ChatGPT for Healthcare and API healthcare customers&quot;, so do not assume Enterprise is
        covered for patient data.
      </p>
      <p>
        <strong>Microsoft Copilot.</strong>{' '}<a href={SRC.copilot} {...ext}>Microsoft&apos;s Copilot privacy page</a>{' '}says
        prompts, responses and data accessed through Microsoft Graph &quot;aren&apos;t used to train foundation
        LLMs&quot;. Copilot respects the permissions users already have, which is both its strength and its risk. EU calls
        stay in the EU Data Boundary, with the exception Microsoft names for Anthropic models used inside Copilot. If you
        are deciding between Copilot&apos;s own agent builder and a custom build, see{' '}
        <a href="/blog/copilot-studio-vs-custom-ai-agents-2026">Copilot Studio vs custom AI agents</a>.
      </p>
      <p>
        <strong>Claude for Work (Claude Team and Claude Enterprise).</strong>{' '}Anthropic&apos;s{' '}
        <a href={SRC.claudeTraining} {...ext}>privacy centre</a>{' '}says it will not use inputs or outputs from commercial
        products, including Claude for Work, to train models unless you explicitly opt in. Zero data
        retention <a href={SRC.claudeZdr} {...ext}>covers the API and Claude Code on Enterprise, not chat</a>, and a{' '}
        <a href={SRC.claudeBaa} {...ext}>BAA covers Claude Enterprise</a>{' '}only after the primary owner switches on HIPAA
        mode.
      </p>
      <p>
        <strong>Gemini for Google Workspace.</strong>{' '}Google&apos;s <a href={SRC.gemini} {...ext}>Workspace privacy hub</a>{' '}
        says content is not used for model training outside your domain without permission, lets admins keep Gemini
        prompts from 90 days to indefinitely, and lists SOC 1, 2 and 3, ISO/IEC 27001 and FedRAMP High.
      </p>

      <h3 id="cloud">5 to 7: models inside your own cloud account (the usual sweet spot)</h3>
      <p>
        Here you call GPT, Claude, Gemini, Llama or Mistral models through the cloud you already pay for, under the
        contract, region, keys and audit logs you already have. This is what most companies mean when they ask for a
        &quot;private ChatGPT&quot; or a &quot;private GPT&quot;.
      </p>
      <ul className="list-disc pl-6 space-y-3 mb-6">
        <li>
          <strong>Amazon Bedrock.</strong>{' '}AWS&apos;s <a href={SRC.bedrock} {...ext}>Bedrock FAQ</a>{' '}says your content
          &quot;is not used to improve the base models and is not shared with any model providers&quot;, is encrypted in
          transit and at rest, and can use your own keys. AWS lists Bedrock as{' '}
          <a href={SRC.bedrockSecurity} {...ext}>HIPAA eligible and in scope for ISO and SOC</a>. It runs Claude, Llama,
          Mistral and others.
        </li>
        <li>
          <strong>Azure OpenAI (Azure AI Foundry).</strong>{' '}Microsoft&apos;s{' '}
          <a href={SRC.azure} {...ext}>data privacy page</a>{' '}says prompts and completions are not used to train any
          generative AI foundation models without your permission, encrypts with AES-256 by default with a customer
          managed key option, and keeps data in your chosen geography unless you pick a Global or Data Zone deployment.
        </li>
        <li>
          <strong>Google Vertex AI.</strong>{' '}Google&apos;s <a href={SRC.vertex} {...ext}>data governance page</a>{' '}says
          Google won&apos;t use your data to train or fine-tune models without prior permission. Its{' '}
          <a href={SRC.vertexResidency} {...ext}>residency list</a>{' '}includes the UK (europe-west2) and Australia
          (australia-southeast1), which matters for the compliance section below. A <code>global</code>{' '}
          endpoint carries no residency promise, so pick a regional one.
        </li>
      </ul>
      <p>
        Direct APIs sit between seats and cloud. The <a href={SRC.openaiApi} {...ext}>OpenAI API</a>{' '}does not train on
        API data, keeps abuse-monitoring logs up to 30 days, and offers regional storage including the UK and Australia.
        Outside the US, zero data retention or modified abuse monitoring needs OpenAI&apos;s approval, and newer models
        cost 10% more there. The <a href={SRC.claudeResidency} {...ext}>Anthropic API</a>{' '}offers US-only or
        global processing, with US-only priced at 1.1 times standard, so UK, EU and Australian buyers who need data held
        in-country usually reach Claude through Bedrock or Vertex instead.
      </p>

      <figure className="my-8">
        <img
          src={`${IMG}/options.webp`}
          alt="Seen from behind, a woman in a mustard turtleneck points at the second of four boxes drawn on a whiteboard, outlined in orange, while a grey-bearded man in a green shirt watches."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Pick where the model runs before you pick the model: seats, your own cloud, or your own servers.
        </figcaption>
      </figure>

      <h3 id="self-hosted">8: a private LLM on your own servers (self-hosted Llama or Mistral; most control, most work)</h3>
      <p>
        An open-weight model is a model file you download and run on your own servers or cloud machines. Nothing goes to
        an AI vendor. In exchange you own the hardware, security patches, upgrades and evaluation, and open models
        often trail the best API models on hard reasoning.
      </p>
      <p>
        Teams usually serve these models with open-source tools such as{' '}
        <a href={SRC.vllm} {...ext}>vLLM</a>{' '}or <a href={SRC.ollama} {...ext}>Ollama</a>. Llama and Mistral are the
        two families covered below. Qwen, DeepSeek and Google&apos;s Gemma are other open-weight families, each under its
        own licence, so read the licence before you build on one.
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          <strong>Llama 4 (Meta).</strong>{' '}The <a href={SRC.llama} {...ext}>licence</a>{' '}allows commercial use, requires
          companies over 700 million monthly active users to request a licence from Meta, and asks you to show
          &quot;Built with Llama&quot; where you use it.
        </li>
        <li>
          <strong>Mistral.</strong>{' '}Mistral says its <a href={SRC.mistral} {...ext}>Mistral 3 models</a>{' '}are &quot;released
          under the Apache 2.0 license&quot;, a permissive licence with no user cap. Some other Mistral models carry
          different licences, including one non-commercial voice model, so check each model card.
        </li>
      </ul>

      <h2 id="rag">Option 9, RAG (retrieval-augmented generation): how private AI answers from your own documents</h2>
      <p>
        RAG is how an AI answers from your contracts, policies, product sheets or tickets without being retrained on
        them. Here is the business version, in five steps:
      </p>
      <ol className="list-decimal pl-6 space-y-3 mb-6">
        <li><strong>Collect.</strong>{' '}Pull documents from SharePoint, Google Drive, your ERP, CRM or help desk, and drop duplicates and stale versions.</li>
        <li><strong>Index.</strong>{' '}Split each document into short passages and store a searchable version (a vector) in a database inside your own cloud account. Common choices are{' '}<a href={SRC.pgvector} {...ext}>pgvector</a>{' '}on PostgreSQL, Azure AI Search, Vertex AI Vector Search, Amazon OpenSearch Service and Pinecone.</li>
        <li><strong>Retrieve, with permissions.</strong>{' '}When someone asks, fetch only the passages that person is allowed to see. Skip this filter and the assistant can quote files the person asking could never open.</li>
        <li><strong>Answer.</strong>{' '}Send the question and those few passages to the model you chose above. The model sees snippets, not your whole library.</li>
        <li><strong>Cite and log.</strong>{' '}Show which document each fact came from, and log the question, the passages and the answer for audit.</li>
      </ol>
      <p>
        RAG beats fine-tuning (retraining a model on your data) for most business knowledge: it updates the moment a file
        changes, a deleted document stops appearing in answers, and permissions carry through. We build RAG systems and
        model integrations as part of our <a href="/services/llm-development">LLM development services</a>; when the assistant also
        takes actions, such as drafting an order or updating a record, it becomes an agent (see{' '}
        <a href="/services/ai-agent-development">AI agent development</a>).
      </p>

      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg my-8">
        <h3 className="text-lg font-bold mb-3">Not sure which of the nine fits your data rules?</h3>
        <p className="mb-4">
          Bring your data types, your regions and the systems the AI must read. In a 30-minute call with founder Bhavesh
          Barot we will point to the option that meets your rules with the least work, and we show working software on
          your own data before you sign anything.
        </p>
        <a
          href="https://calendly.com/bhavesh-factoryjet/30min"
          {...ext}
          className="inline-block bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors"
        >
          Talk to the Founder
        </a>
      </div>

      <h2 id="compliance">Compliance by country: US, UK, Australia, EU</h2>
      <p>
        Each of these rules asks two things: know where the data goes, and hold the right contract with whoever stores
        it. The laws differ by country, but UK GDPR and EU GDPR turn on the same two points.
      </p>
      <Table
        head={['Country', 'Rule that bites', 'What it means for private AI']}
        rows={[
          ['US (healthcare)', <><a href={SRC.hhs} {...ext}>HHS cloud computing guidance</a>{' '}under HIPAA</>, 'A cloud provider holding patient data is a business associate even if it stores only encrypted data and lacks the key. You need a signed BAA for the exact product.'],
          ['US (B2B buyers)', <><a href={SRC.soc2} {...ext}>SOC 2</a>{' '}(AICPA)</>, 'An audit report, not a law, covering security, availability, processing integrity, confidentiality and privacy. Enterprise customers will ask for your vendor\'s report.'],
          ['UK', <><a href={SRC.icoAi} {...ext}>ICO AI guidance</a>, <a href={SRC.icoDpia} {...ext}>DPIA rules</a>, <a href={SRC.icoTransfers} {...ext}>transfer rules</a></>, 'AI is listed as an innovative technology trigger for a DPIA alongside one other factor. Data stored outside the UK needs a transfer mechanism such as the IDTA plus a transfer risk assessment. The ICO notes its AI guidance is under review after the Data (Use and Access) Act.'],
          ['Australia', <><a href={SRC.oaicApp8} {...ext}>APP 8</a>{' '}and <a href={SRC.oaicAi} {...ext}>OAIC AI guidance</a></>, 'Before personal information goes to an overseas vendor, take reasonable steps so it is handled to Australian standards. The OAIC says not to enter personal information into publicly available AI tools.'],
          ['EU', <><a href={SRC.gdpr28} {...ext}>GDPR Article 28</a>, <a href={SRC.dpf} {...ext}>EU-US Data Privacy Framework</a>, <a href={SRC.aiAct50} {...ext}>AI Act Article 50</a></>, 'A processor contract with the vendor; US transfers can rely on the Data Privacy Framework if the vendor is certified. Article 50 transparency (tell people they are talking to AI) has applied since 2 August 2026.'],
        ]}
      />
      <p>
        On the EU dates: the AI Act Service Desk shows the Act applying from 2 August 2026 under{' '}
        <a href={SRC.aiAct113} {...ext}>Article 113</a>. The 2026 Digital Omnibus,{' '}
        <a href={SRC.omnibus} {...ext}>Regulation (EU) 2026/1744</a>, in force since 27 July 2026, moved the
        high-risk deadlines to 2 December 2027 and 2 August 2028 but left Article 50 on 2 August 2026. A private internal
        assistant is rarely high-risk; one used for hiring or credit decisions can be.
      </p>

      <h3 id="hipaa">HIPAA compliant AI: which products sign a BAA</h3>
      <p>
        HHS treats a cloud provider that holds patient data as a business associate, so a US healthcare company needs a
        signed BAA for the exact product it uses. Per the vendor pages above, OpenAI offers BAAs for the API and
        ChatGPT for Healthcare, not ChatGPT Enterprise. Anthropic covers its API and Claude Enterprise once HIPAA mode is
        on. AWS lists Amazon Bedrock as HIPAA eligible. Google says Gemini in Workspace can support HIPAA workloads. For
        Copilot, Azure OpenAI and Vertex AI, check the BAA terms in your existing Microsoft or Google Cloud agreement.
      </p>

      <h2 id="by-size">Which option fits your company size</h2>
      <Table
        head={['Company size', 'Usual best fit', 'Why', 'Watch out for']}
        rows={[
          ['Under 50 staff', 'Business seats in the suite you already use', 'Live in a day; no-training default; admin controls', 'Staff still using personal accounts; no written AI rule'],
          ['50 to 250 staff', 'Seats for general use, plus one RAG assistant in your cloud for your own documents', 'Answers from your files with sources; your region and keys', 'Shared-drive permissions that are too open'],
          ['250 to 1,000 staff', 'Models in your AWS, Azure or Google Cloud account, RAG with single sign-on and role-based access', 'One contract, one audit trail, region pinned', 'Several teams buying separate tools; no owner'],
          ['Regulated, any size (health, finance, legal)', 'Cloud models under your existing BAA or regulator-approved contract; self-host only if rules demand it', 'Contract coverage matters more than the model', 'Assuming a chat plan is covered by a BAA when only the API is'],
        ]}
      />

      <figure className="my-8">
        <img
          src={`${IMG}/sizes.webp`}
          alt="Three colleagues talk at a pale wood table: a woman with dark wavy hair in a white blouse, a white-haired man in a navy cardigan behind a laptop, and a red-haired woman in a grey hoodie, with an orange binder on the table."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          The data rule comes first: what may go into AI, who can see the answers, and where it is stored.
        </figcaption>
      </figure>

      <h2 id="cost">Private AI cost: what a build costs (market ranges)</h2>
      <p>
        Seats are priced per user by each vendor. On 31 October 2026,{' '}
        <a href={SRC.copilotPricing} {...ext}>Microsoft&apos;s pricing page</a>{' '}listed Microsoft 365 Copilot Business
        at $21 per user a month on a yearly plan ($18 for the first year under a promotion running to 31 December 2026), and{' '}
        <a href={SRC.claudePricing} {...ext}>Anthropic&apos;s pricing page</a>{' '}listed Claude Team and Claude Enterprise
        seats at $20 a month billed yearly, with Enterprise usage billed on top at API rates. A custom private assistant
        over your documents is a build project.
        These are published market ranges, not our prices:
      </p>
      <Table
        head={['Source', 'Scope', 'Published range']}
        rows={[
          [<a key="s" href={SRC.scalacode} {...ext}>ScalaCode (July 2026)</a>, 'Basic RAG', '$10,000 to $25,000'],
          ['ScalaCode', 'Production RAG', '$25,000 to $60,000'],
          ['ScalaCode', 'Enterprise agentic RAG', '$60,000 to $150,000+'],
          [<a key="r" href={SRC.raftlabs} {...ext}>RaftLabs (August 2025)</a>, 'Simple document Q&A', '$12,000 to $30,000'],
          ['RaftLabs', 'Enterprise RAG platform', '$70,000 to $120,000+'],
        ]}
      />
      <p>
        Both are development firms pricing their own market, so treat the ranges as a sense of scale. What moves a
        project up the range: the number of source systems, per-user permissions, the accuracy bar, and whether the
        assistant only answers or also acts. FactoryJet quotes the build, and any support you choose, as fixed prices in
        writing after a short scoping call. For agent build ranges, see our{' '}
        <a href="/blog/enterprise-ai-agent-cost-2026">enterprise AI agent cost guide</a>.
      </p>

      <h2 id="red-flags">Eight red flags when a vendor says &quot;private AI&quot;</h2>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li>They cannot link to the clause that says your data is not used for training.</li>
        <li>&quot;Private&quot; means a password on a shared consumer account.</li>
        <li>No answer on retention, or retention only the vendor can change.</li>
        <li>A <code>global</code>{' '}or unspecified region when your rules need the UK, EU or Australia.</li>
        <li>A BAA promised for a product the model maker does not list as covered.</li>
        <li>The AI sees every document regardless of who is asking.</li>
        <li>No log of questions, sources and answers you can export.</li>
        <li>You do not own the code, prompts, index and test set at the end of the project. Our{' '}
          <a href="/blog/ai-agent-development-contract-checklist-2026">AI development contract checklist</a>{' '}covers the clauses.</li>
      </ol>

      <h2 id="questions">Seven questions to ask before you sign</h2>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li>Which model provider and which product (seat, API, or cloud platform) will process our data?</li>
        <li>Where is data stored and processed, and can both be pinned to our region?</li>
        <li>How long are prompts and answers kept, and can we turn retention off?</li>
        <li>Who holds the encryption keys?</li>
        <li>How are our existing file permissions enforced in answers?</li>
        <li>Which agreement covers us (BAA, Article 28 contract, IDTA), and for which features?</li>
        <li>How will accuracy be tested on our own questions before staff use it?</li>
      </ol>
      <p>
        For the wider security checklist once an assistant can take actions, read{' '}
        <a href="/blog/ai-agent-security-risks-controls-2026">AI agent security: the OWASP Top 10 risks and controls</a>,
        and put the answers into your{' '}
        <a href="/blog/ai-agent-governance-policy-mid-sized-companies-2026">AI governance policy</a>.
      </p>

      <h2 id="what-else-ranks">Other private AI vendors and guides, and how they differ</h2>
      <p>
        A US buyer searching Google for private AI on 22 October 2026 found these business pages on the first page. We
        list them so you can compare. We have not reviewed their services, and the list leaves out forums.
      </p>
      <Table
        head={['Site', 'What they sell', 'Page title shown in Google']}
        rows={[
          ['coresite.com', 'Data centre colocation', 'Private AI: The Smart Choice for Many Enterprises'],
          ['digitalrealty.com', 'Data centre colocation', 'What is Private AI? The Next Step in Privacy-First Innovation'],
          ['cloudera.com', 'Data platform software', 'What Is Private AI?'],
          ['wezom.com', 'Software development agency', 'Private AI for Business: How to Protect Sensitive Data in AI'],
          ['hpe.com', 'Servers and hardware', 'What is Private AI? | Glossary'],
          ['teradata.com', 'Data analytics platform', 'What Is Private AI? The Enterprise Playbook'],
          ['suse.com', 'Linux and container platform software', 'Private AI: Securing Innovation for the Future of Enterprise'],
        ]}
      />
      <p>
        Most of these come from data-centre, hardware or platform vendors, and several define private AI as running it on
        their infrastructure. This guide compares the nine routes a mid-sized company actually chooses between, quotes
        each vendor&apos;s own terms with the date we read them, and adds the US, UK, Australian and EU rules on one page.
      </p>

      <h2 id="how-factoryjet-works">How FactoryJet builds private AI on your data</h2>
      <p>
        We design, build, implement and support private AI assistants and agents: model choice, RAG over your documents
        with your permissions, single sign-on, logging, and testing on your own questions. AI and hosting accounts can
        run in your name, at cost, in the region you need, and we keep managing the servers, models, APIs and updates
        after launch. You own the code, prompts, index and test set. We show working software on your own data before
        you sign.
      </p>
      <p>
        See <a href="/services/llm-development">LLM development</a>,{' '}
        <a href="/services/ai-agent-development">AI agent development</a>{' '}and{' '}
        <a href="/services/ai-integration-services">AI integration services</a>.
      </p>

      <h2 id="sources">Sources</h2>
      <p className="text-sm text-gray-600">Pages opened and read on 22 October 2026 unless marked otherwise.</p>
      <ul className="list-disc pl-6 space-y-1 text-sm mb-8">
        <li><a href={SRC.openaiEnterprise} {...ext}>OpenAI, Enterprise privacy</a>{' '}and <a href={SRC.openaiBusiness} {...ext}>Business data privacy, security and compliance</a></li>
        <li><a href={SRC.openaiApi} {...ext}>OpenAI, Data controls in the OpenAI platform</a></li>
        <li><a href={SRC.copilot} {...ext}>Microsoft Learn, Data, privacy and security for Microsoft Copilot</a></li>
        <li><a href={SRC.claudeTraining} {...ext}>Anthropic privacy centre: model training</a>, <a href={SRC.claudeZdr} {...ext}>zero data retention</a>, <a href={SRC.claudeBaa} {...ext}>BAAs</a>; <a href={SRC.claudeResidency} {...ext}>Claude API data residency</a></li>
        <li><a href={SRC.gemini} {...ext}>Google Workspace, Generative AI in Google Workspace privacy hub</a></li>
        <li><a href={SRC.bedrock} {...ext}>AWS, Amazon Bedrock FAQs</a>{' '}and <a href={SRC.bedrockSecurity} {...ext}>Bedrock security and compliance</a></li>
        <li><a href={SRC.azure} {...ext}>Microsoft Learn, Data, privacy and security for Azure OpenAI</a></li>
        <li><a href={SRC.vertex} {...ext}>Google Cloud, Vertex AI data governance</a>{' '}and <a href={SRC.vertexResidency} {...ext}>data residency</a></li>
        <li><a href={SRC.llama} {...ext}>Meta, Llama 4 Community License</a>; <a href={SRC.mistral} {...ext}>Mistral AI, Introducing Mistral 3</a></li>
        <li><a href={SRC.hhs} {...ext}>US HHS, Guidance on HIPAA and Cloud Computing</a>; <a href={SRC.soc2} {...ext}>AICPA, SOC 2</a></li>
        <li><a href={SRC.icoAi} {...ext}>ICO, Guidance on AI and data protection</a>, <a href={SRC.icoDpia} {...ext}>When do we need to do a DPIA?</a>, <a href={SRC.icoTransfers} {...ext}>International transfers</a></li>
        <li><a href={SRC.oaicApp8} {...ext}>OAIC, APP guidelines chapter 8</a>; <a href={SRC.oaicAi} {...ext}>OAIC, Guidance on privacy and commercially available AI products</a></li>
        <li><a href={SRC.gdpr28} {...ext}>GDPR Article 28</a>; <a href={SRC.dpf} {...ext}>European Commission, EU-US data transfers</a>; <a href={SRC.aiAct50} {...ext}>AI Act Service Desk, Article 50</a>{' '}and <a href={SRC.aiAct113} {...ext}>Article 113</a></li>
        <li><a href={SRC.scalacode} {...ext}>ScalaCode, RAG development cost</a>; <a href={SRC.raftlabs} {...ext}>RaftLabs, RAG development cost</a></li>
        <li><a href={SRC.omnibus} {...ext}>EUR-Lex, Regulation (EU) 2026/1744 (Digital Omnibus on AI)</a></li>
        <li><a href={SRC.copilotPricing} {...ext}>Microsoft 365 Copilot pricing</a>; <a href={SRC.claudePricing} {...ext}>Claude pricing</a>{' '}(both read 31 October 2026)</li>
        <li><a href={SRC.vllm} {...ext}>vLLM documentation</a>; <a href={SRC.ollama} {...ext}>Ollama</a>; <a href={SRC.pgvector} {...ext}>pgvector</a></li>
        <li>Google first-page results for the comparison table, checked through DataForSEO on 22 October 2026</li>
      </ul>

      <div className="bg-[#FAF8F5] border-2 border-[#E5DFD7] p-6 sm:p-8 rounded-xl my-10 shadow-sm">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-2">
          Private AI on your own data, for US, UK and Australian companies
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] mb-3">
          See a private assistant answer from your own documents before you commit
        </h3>
        <p className="text-[#4B5563] text-base leading-relaxed mb-6">
          Tell us your data rules, your region and the systems it must read. We will recommend the route and show it
          working on your own data before you sign. FactoryJet quotes a fixed price in writing after a short scoping call.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://calendly.com/bhavesh-factoryjet/30min"
            {...ext}
            className="inline-flex items-center gap-2 bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors shadow-sm"
          >
            Talk to the Founder
          </a>
          <a
            href="/services/llm-development"
            className="inline-flex items-center gap-2 bg-white text-[#1F2937] border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            See LLM development
          </a>
        </div>
      </div>
    </article>
  ),
};

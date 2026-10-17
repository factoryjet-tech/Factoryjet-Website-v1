import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

/*
 * Questions to ask an AI development company before you hire or sign, and the red flags (US, UK, AU, 2026).
 * Written 18 Oct 2026 from brief 03 (pipeline/research/page-briefs/03-questions-to-ask-ai-development-company-2026.md).
 * Buyer questions: sweep ids N29 and N30 (18 Oct 2026). Google demand (Google Ads via DataForSEO, 18 Oct 2026):
 * "ai development company" US 2,400 / UK 210 / AU 110; "ai automation agency" US 4,400 / UK 720 / AU 390;
 * "ai agent development company" US 720; "ai vendor questionnaire" US 20.
 * Every outside fact was read on its own page on 18 Oct 2026; the ledger is in the page hand-back (sources.json).
 * No FactoryJet prices, no rule B figures, no compliance or certification claims about FactoryJet.
 * The faqs array below is the single source for both the visible FAQ and the FAQPage JSON-LD.
 */

const SRC = {
  nistRmf: 'https://www.nist.gov/itl/ai-risk-management-framework',
  nist600: 'https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf',
  owasp: 'https://genai.owasp.org/llm-top-10/',
  owasp01: 'https://genai.owasp.org/llmrisk/llm01-prompt-injection/',
  owasp03: 'https://genai.owasp.org/llmrisk/llm032025-supply-chain/',
  owasp06: 'https://genai.owasp.org/llmrisk/llm062025-excessive-agency/',
  ico: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/what-are-the-accountability-and-governance-implications-of-ai/',
  icoContract: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/contracts-and-liabilities-between-controllers-and-processors-multi/what-needs-to-be-included-in-the-contract/',
  oaic: 'https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products',
  govuk: 'https://www.gov.uk/government/publications/guidelines-for-ai-procurement/guidelines-for-ai-procurement',
  gartner: 'https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027',
  ftc: 'https://www.ftc.gov/news-events/news/press-releases/2024/09/ftc-announces-crackdown-deceptive-ai-claims-schemes',
  anthropic: 'https://docs.anthropic.com/en/docs/about-claude/model-deprecations',
  iso42001: 'https://www.iso.org/standard/42001',
  botscrew: 'https://botscrew.com/blog/12-questions-to-ask-before-hiring-an-ai-development-company/',
  sparked: 'https://thesparkedgroup.com/guides/ai-automation-agency-scorecard/',
  dancumberland: 'https://dancumberlandlabs.com/blog/8-questions-ask-ai-consultant/',
  telliant: 'https://www.telliant.com/selecting-an-ai-development-company-a-practical-guide/',
  oneup: 'https://1up.ai/blog/ai-vendor-questionnaire-example',
  letsviz: 'https://lets-viz.com/blogs/ai-vendor-due-diligence-checklist-for-small-business-a-6-step-process',
  apsco: 'https://au.apsco.org/resources/due-diligence-checklist-top-10-questions-to-ask-ai-system-suppliers-squire-patton-boggs-255928662213',
};

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;
const IMG = '/images/blog/questions-to-ask-ai-development-company-2026';

function Table({ head, rows }: { head: string[]; rows: React.ReactNode[][] }) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
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
  );
}

function Answer({ good, flag }: { good: React.ReactNode; flag: React.ReactNode }) {
  return (
    <ul className="list-none pl-0 space-y-3 mb-6">
      <li className="bg-white border border-[#E5DFD7] rounded-lg p-4">
        <span className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#1F6F43] block mb-1">A good answer</span>
        {good}
      </li>
      <li className="bg-white border border-[#E5DFD7] rounded-lg p-4">
        <span className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] block mb-1">Red flag</span>
        {flag}
      </li>
    </ul>
  );
}

const faqs: FAQItem[] = [
  {
    q: 'What questions should I ask an AI development company before signing a contract?',
    a: "Ask five things first. Can you show an agent you built running in production? Will you build a demo on our data before we sign? Who owns the code, prompts and test set? How do you test for wrong answers and prompt injection? What happens after launch, including when the model is retired? Then ask about your data role under privacy law and whether each phase is priced and signed on its own. Get every answer in writing.",
  },
  {
    q: 'How do I vet an AI automation agency?',
    a: "Score three or four agencies against the same list. Ask each for a live agent in production, a short demo on a sample of your own data, named people, and written answers on ownership, data and security. Call two past clients. Then compare scores in one table and drop anyone who fails a veto, such as refusing a demo or keeping ownership of the code. The scorecard on this page has ten weighted rows.",
  },
  {
    q: 'What are the red flags when hiring an AI agency?',
    a: "The loudest ones: a slide deck and no live agent, a price you only get after paying for a long discovery, everything running in the agency's own accounts, no named people, no written answer on who owns the prompts and code, no test set, and claims such as \"it learns on its own\" with no explanation of what changes and who approves it. Gartner also warns about agent washing: chatbots rebranded as agents.",
  },
  {
    q: "How do I check an AI company's references?",
    a: "Ask for two clients whose projects went live at least six months ago, then call them without the vendor on the line. Ask what the agent does today, what broke after launch and how fast it was fixed, whether the team that sold the work also built it, who owns the code now, and whether they would hire the firm again for a second project. Silence or a polished script on the last question tells you a lot.",
  },
  {
    q: 'Should an AI company build a demo before I pay?',
    a: "A short demo on a sample of your own records is a fair ask before you sign a build contract, and some firms offer it. It shows whether the team can handle your real documents, emails or orders, which slides cannot. Keep it small: one job, a few dozen real examples, a fixed time. If a firm will only show a demo after a paid discovery phase, weigh that against firms that will.",
  },
  {
    q: 'What is agent washing?',
    a: "Agent washing is Gartner's term for vendors rebranding existing products, such as AI assistants, robotic process automation and chatbots, as AI agents without real agentic abilities. In its June 2025 press release Gartner estimated that only about 130 of the thousands of agentic AI vendors are real. The test is simple: ask the vendor to show the agent deciding and acting on a task, live, with your data.",
  },
  {
    q: 'Who should own the prompts and the code?',
    a: "You should. The code, the prompts, the evaluation set and the logs are what make your agent work, and you need all of them to switch vendors, audit the system or keep improving it. Put ownership in the contract, with the code in a repository in your own account from the first day. NIST AI 600-1 action GV-6.1-004 asks for contracts that specify content ownership and usage rights.",
  },
  {
    q: 'Is an AI vendor a data controller or processor?',
    a: "It depends on who decides why and how the personal data is used. The UK ICO says a provider that acts only on a client's instructions is likely a processor, while a provider that decides how to create and train its own model is likely a controller for that part of the processing. Ask the vendor which role it takes for each use of your data, and get it in writing.",
  },
  {
    q: 'Do I need a data processing agreement with my AI developer?',
    a: "If the developer will handle personal data for you under UK GDPR or EU GDPR, yes. Article 28(3) lists what the contract between a controller and its processor must include, as the ICO explains. Ask for the agreement before the demo uses any customer records, and check it covers which model providers receive the data, where it is stored, and how it is deleted at the end. In Australia, read the OAIC guidance on AI products as well.",
  },
  {
    q: 'What is prompt injection and why should I ask about it?',
    a: "Prompt injection is when text the AI reads changes what it does in ways nobody intended. OWASP lists it first (LLM01) in its 2025 Top 10 for LLM applications, and notes the hidden instructions do not need to be visible to people. An agent that reads customer emails or supplier PDFs can be fed such text. Ask the vendor to show the tests they run for it and what the agent is blocked from doing.",
  },
  {
    q: 'What is the OWASP Top 10 for LLM applications?',
    a: "It is a free list from the OWASP Gen AI Security Project of the ten biggest security risks in apps built on large language models. The 2025 edition starts with LLM01 Prompt Injection and includes LLM03 Supply Chain and LLM06 Excessive Agency, which is an agent allowed to do more than it should. It gives you a shared vocabulary for security questions, so a vendor's answer can be checked.",
  },
  {
    q: 'What is the NIST AI Risk Management Framework?',
    a: "It is a voluntary US framework from NIST, released on 26 January 2023, for managing risks in AI systems. NIST says it is being revised as part of the White House AI Action Plan. Its July 2024 Generative AI Profile, NIST AI 600-1, lists concrete actions for buyers, including updating vendor due diligence to cover intellectual property, data privacy and security (GV-6.1-009).",
  },
  {
    q: 'How do I compare proposals from three AI firms?',
    a: "Put them in one table with the same ten criteria, weight each row before you read any proposal, and score each firm 1, 3 or 5 on evidence you have seen, not on promises. Treat two rows as vetoes: no live demo, and the vendor keeping ownership of the code or prompts. Then compare what each firm puts in phase one, because a smaller first phase with a clear exit is safer.",
  },
  {
    q: 'How many AI companies should I talk to?',
    a: "Three is enough for most companies with 10 to 500 staff. Fewer gives you no comparison, and more than four turns into a month of calls. Start with a long list of six to eight from referrals, review sites and lists such as our best AI agent development companies guide, cut to three on written answers, then ask those three for a demo on your data.",
  },
  {
    q: 'Should I pay for a discovery phase?',
    a: "A short, fixed-price discovery can be worth it on a large or unclear project, as long as you own everything it produces: the process map, the data review and the plan. Avoid an open-ended discovery that has to finish before you see a price or any working software. Ask whether the firm will show a small demo on your data first, then decide whether discovery is still needed.",
  },
  {
    q: 'What should an AI development proposal include?',
    a: "A plain description of the one job the agent will do, the systems it reads and writes, what needs a person's approval, the test set and pass mark, who owns the code and prompts, which accounts hold the model keys and servers, your data role and agreement, the named team, the phases with a fixed price for each, defect cover after launch, and how support and changes are priced. Anything missing is a question to ask.",
  },
  {
    q: 'How can I tell if an AI agency is just reselling ChatGPT?',
    a: "Ask what they build around the model. A real build has connections to your systems, rules for what the agent may do, a test set, logs and an approval step. Ask to see the code repository structure and the test results, and ask what happens if you switch from one model provider to another. If the answer is a chat window with your logo and a prompt, you are paying for a wrapper.",
  },
  {
    q: 'What certifications should an AI development company have?',
    a: "No single certificate proves a firm builds good agents. Ask instead for evidence you can read: an independent security audit report with its date and scope, their data processing agreement, and their written security practices. ISO/IEC 42001, published in 2023, is an international standard for AI management systems, so ask whether a firm follows it or holds it, and ask to see the scope of any certificate.",
  },
  {
    q: 'How long should vetting an AI vendor take?',
    a: "Two to four weeks is typical for a mid-sized company: a week to send written questions to a long list, a week for calls and reference checks with three firms, and a week or two for demos on your data. Lets-viz describes a due diligence review for a small business that takes two to three working days once the paperwork is in hand. Rushing past the demo is the costly shortcut.",
  },
  {
    q: 'What should I ask about support after launch?',
    a: "Ask how defects found after launch are fixed and for how long that is covered inside the build price, what happens when the model provider retires the model, who reruns the test set before each change, how changes are quoted and approved, and whether there is any monthly minimum you must pay. Ask for the support terms in the contract, not in a sales email.",
  },
  {
    q: 'Are there extra checks for UK or Australian companies?',
    a: "Yes. In the UK, settle whether the vendor is your processor or a controller under UK GDPR, as the ICO describes, and sign a data processing agreement. Public bodies should also read the government's Guidelines for AI procurement. In Australia, the OAIC says the Privacy Act applies to all uses of AI involving personal information and recommends not entering personal information into publicly available AI tools.",
  },
  {
    q: 'What is the single most useful question to ask?',
    a: "\"Will you show us an agent working on our own data before we sign?\" It tests skill, honesty and fit at the same time. A firm that says yes has to handle your real documents, connect to a sample of your systems and explain what the agent does when it is unsure. A firm that says no, or only after a paid phase, has told you something too.",
  },
  {
    q: 'How do I choose an AI agent development company?',
    a: "Pick the job first, then the firm. Write down the one task, the systems it touches and what needs approval. Send that brief and the 15 questions on this page to three firms, score the written answers, call their references, and ask the top two for a demo on a sample of your data. Choose the firm whose demo worked and whose contract gives you the code and a phase-one exit.",
  },
  {
    q: 'What is an AI vendor questionnaire?',
    a: "It is a written list of questions you send to an AI supplier before you buy, covering data handling, security, model providers, testing, ownership and support. Sales teams at AI software firms see the same questions in deal after deal, as 1up notes in its list of 20. For a custom build, add questions about who owns the code and prompts and whether you get a demo on your own data.",
  },
];

export const post: BlogPost = {
  id: '783',
  slug: 'questions-to-ask-ai-development-company-2026',
  title: '15 Questions to Ask an AI Development Company Before You Hire or Sign, and the Red Flags (2026)',
  excerpt:
    'The 15 questions to ask an AI development company or AI automation agency before you hire or sign, what a good answer sounds like, twelve red flags, a weighted scorecard for three firms, reference-call questions, and the NIST, OWASP, ICO and OAIC checks for the US, UK and Australia.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Oct 18, 2026',
  dateModified: 'Oct 18, 2026',
  readTime: '19 min read',
  imageUrl: `${IMG}/hero.webp`,
  imageAlt:
    'A buyer in a white shirt ticks boxes on a printed checklist during a video call with two people from an AI development firm shown on a wall screen, an orange mug on the round table.',
  meta: {
    title: 'Questions to Ask an AI Development Company Before You Sign',
    description:
      '15 questions to ask an AI development or automation company before you hire or sign, good answers, red flags and a free scorecard. US, UK and Australia.',
  },
  keyTakeaways: [
    'Gartner estimated in June 2025 that only about 130 of the thousands of agentic AI vendors are real, and called the rest of the rebranding "agent washing" (Gartner press release, 25 June 2025).',
    'OWASP lists Prompt Injection as LLM01 and Excessive Agency as LLM06 in its 2025 Top 10 for LLM applications. Ask every vendor how they test for both (genai.owasp.org, read 18 October 2026).',
    'NIST AI 600-1 (July 2024) asks buyers to update vendor due diligence to cover intellectual property, data privacy and security (GV-6.1-009), and to write contracts that set content ownership and usage rights (GV-6.1-004).',
    'The UK ICO says an AI provider acting only on your instructions is likely your processor, but a provider that decides how to train its own model is likely a controller for that part (ICO guidance, read 18 October 2026).',
    'The OAIC recommends that Australian organisations do not enter personal information into publicly available generative AI tools (OAIC guidance, published 21 October 2024, updated 17 January 2025).',
    'The most useful single question: will you show us an agent working on our own data before we sign? It tests skill, honesty and fit at once.',
    'Use a weighted scorecard with two vetoes, no live demo and vendor-kept ownership, so three proposals are compared on evidence rather than on the pitch.',
  ],
  faqs,
  content: (
    <article>
      {/* Answer-first block */}
      <div className="bg-white border-2 border-[#E5DFD7] rounded-xl p-6 sm:p-8 mb-10">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-3">The short answer</p>
        <p className="text-lg leading-relaxed mb-0">
          Before you sign with an <strong>AI development company</strong>, ask to see an agent working on your own data,
          who owns the code, prompts and keys, how they test for wrong answers and prompt injection, whether they act as
          your data processor, and what happens after launch. A firm that cannot answer these in writing is a red flag.
        </p>
      </div>

      <div className="bg-[#FAF8F5] border-l-4 border-[#B23E13] p-5 rounded-r-lg mb-6">
        <p className="text-sm text-[#1F2937] leading-relaxed mb-0">
          <strong>FactoryJet builds custom AI agents, so we are one of the firms you might vet with this list.</strong>{' '}
          Use every question on us too. Each outside fact links to the page we read on 18 October 2026, and the last
          section shows how we answer the 15 questions ourselves.
        </p>
      </div>

      <div className="bg-white border border-[#E5DFD7] p-5 rounded-lg mb-10">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-2">How we made this page</p>
        <p className="text-sm text-[#1F2937] leading-relaxed mb-0">
          On 18 October 2026 we read the top 10 Google results and the People Also Ask boxes for the main searches on
          this topic in the US, the UK and Australia (DataForSEO). The same day we asked 36 buyer questions across
          ChatGPT, Gemini, Claude, Perplexity and Google&apos;s AI answers, and read the pages they cited. Written by
          Bhavesh Barot, founder of FactoryJet.
        </p>
      </div>

      <p>
        &quot;AI development company&quot; gets about 2,400 Google searches a month in the US, 210 in the UK and 110 in
        Australia, and &quot;AI automation agency&quot; gets 4,400, 720 and 390 (Google Ads data through DataForSEO, read
        18 October 2026). The question buyers ask next, what to ask that company before signing, barely shows up on
        Google at all. People ask ChatGPT instead.
      </p>
      <p>
        When we put the two buyer versions of that question to the ChatGPT app in the US, UK and Australia on 18 October 2026, 6 of its 13 web searches named the NIST AI
        Risk Management Framework, one named the OWASP Top 10 for LLM applications and two named the UK ICO. Google, by
        contrast, still reads the phrase as a job interview: 5 of the 8 US results for &quot;questions to ask ai
        development company&quot; were interview-question pages or interview software. This page is for the buyer
        before you hire or sign, and it puts the NIST, OWASP and ICO checks next to the plain business questions.
      </p>
      <p>
        It works the same whether you are vetting a custom AI development company, an AI agent development company, an
        AI software development company, an AI chatbot development company, an AI app development company, an AI
        consulting agency, or an AI automation agency that builds workflows in tools such as n8n or Make.
        It suits a firm of 10 to 50 staff hiring its first AI vendor, a company of 50 to 500 running a formal
        selection, and a 500+ enterprise adding AI to an existing vendor risk assessment. If you are hiring one person
        rather than a company, read our guide on{' '}
        <a href="/blog/how-to-hire-an-ai-agent-developer-2026">how to hire an AI agent developer</a> instead.
      </p>

      <h2 id="at-a-glance">The 15 questions at a glance</h2>
      <p>Four groups. Send them in writing before the first call, and keep the answers for your scorecard.</p>
      <p className="font-semibold mb-1">Proof: can they show it working?</p>
      <ol className="list-decimal pl-6 space-y-1 mb-4">
        <li>Can you show me an agent you built that is running in production today?</li>
        <li>Will you build a working demo on our data before we sign?</li>
        <li>Who exactly will do the work, and can we meet them?</li>
        <li>Tell me about a project that went wrong. What did you change afterwards?</li>
      </ol>
      <p className="font-semibold mb-1">Ownership and data</p>
      <ol start={5} className="list-decimal pl-6 space-y-1 mb-4">
        <li>Who owns the code, the prompts and the evaluation set?</li>
        <li>Whose accounts hold the model API keys and the cloud servers?</li>
        <li>Are you our data controller or our processor, and will you sign a data processing agreement?</li>
        <li>Will our data train anything of yours, or anyone else&apos;s?</li>
      </ol>
      <p className="font-semibold mb-1">Security and testing</p>
      <ol start={9} className="list-decimal pl-6 space-y-1 mb-4">
        <li>How do you test for prompt injection (OWASP LLM01)?</li>
        <li>What can the agent do without a person approving it (OWASP LLM06)?</li>
        <li>Show us your test set and the pass mark.</li>
        <li>What logs do we get, and where do they live?</li>
      </ol>
      <p className="font-semibold mb-1">After launch, and the money</p>
      <ol start={13} className="list-decimal pl-6 space-y-1 mb-6">
        <li>What happens when the model provider retires the model you built on?</li>
        <li>How is support priced, and is there a monthly minimum?</li>
        <li>Is each phase scoped, priced and signed on its own?</li>
      </ol>

      <h2 id="what-ranks">What the guides that rank already ask, and what they leave out</h2>
      <p>
        On 18 October 2026 we read the buyer guides that Google ranks and the assistants cite for this question, then
        searched each page&apos;s text for OWASP, prompt injection, NIST, the ICO, the OAIC and &quot;test set&quot;.
      </p>
      <Table
        head={['Guide', 'Date shown', 'Shape', 'Mentions OWASP, NIST, ICO or a test set']}
        rows={[
          [<a key="b" href={SRC.botscrew} {...ext}>BotsCrew, 12 questions before hiring an AI development company</a>, 'Updated 6 May 2026', '12 questions, each with good signs and red flags', 'None of them'],
          [<a key="s" href={SRC.sparked} {...ext}>The Sparked Group, AI automation agency scorecard</a>, 'Published 16 Oct 2026', 'Ten weighted criteria, 1, 3 and 5 anchors, vetoes', 'None of them'],
          [<a key="d" href={SRC.dancumberland} {...ext}>Dan Cumberland Labs, questions to ask an AI consultant</a>, '12 Aug 2026', '8 questions with good answers and red flags', 'None of them'],
          [<a key="t" href={SRC.telliant} {...ext}>Telliant, selecting an AI development company</a>, '3 Jul 2026', 'Practical guide', 'None of them'],
          [<a key="o" href={SRC.oneup} {...ext}>1up, AI vendor compliance: top 20 questions</a>, '22 May 2025', '20 questionnaire items sales teams receive', 'OWASP once, prompt injection, NIST once'],
        ]}
      />
      <p>
        That gap matters because the assistants go looking for the standards. Across the 335 citations the five engines gave
        for these two buyer questions, NIST pages took 18 and ICO pages 10. The questions below keep
        the business checks the rankers share and add the security, testing and privacy-law checks they skip.
      </p>

      <h2 id="proof">Proof: can they show it working?</h2>
      <p>
        These four answers sort real builders from resellers fastest. Gartner&apos;s{' '}
        <a href={SRC.gartner} {...ext}>25 June 2025 press release</a> estimated that only about 130 of the thousands of
        agentic AI vendors are real, and named the rest of the rebranding &quot;agent washing&quot;.
      </p>

      <h3>1. Can you show me an agent you built that is running in production today?</h3>
      <p>
        Production means real users or real documents, every day, with someone accountable when it fails. A video or a
        sandbox does not count.
      </p>
      <Answer
        good="They share a screen into a live system (with client data masked), show a recent run, the log of what the agent read and did, and the step where a person approved or corrected it. They can tell you what the agent does when it is unsure."
        flag="Only a recorded video, a slide, or a demo on made-up data. Every past project is under a non-disclosure agreement and there is no masked version they can show."
      />

      <h3>2. Will you build a working demo on our data before we sign?</h3>
      <p>
        A small demo on a sample of your real records, say a few dozen past emails, orders or invoices, shows whether
        the team can cope with your mess. Slides cannot.
      </p>
      <Answer
        good="Yes, for one job, on a sample you choose, in a fixed short time. They tell you exactly which records they need, how they will hold them and when they will delete them."
        flag="A demo only after a paid discovery phase, or a demo on generic sample data that looks nothing like your documents."
      />
      <figure className="my-8">
        <img
          src={`${IMG}/live-demo.webp`}
          alt="A woman with long braids in a lavender shirt shows a bald man with a white beard in a brown corduroy jacket a chart of grey boxes with one orange box on a laptop."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          A demo on a sample of your own records shows how the agent copes with real documents before any contract.
        </figcaption>
      </figure>

      <h3>3. Who exactly will do the work, and can we meet them?</h3>
      <p>
        The UK government&apos;s <a href={SRC.govuk} {...ext}>Guidelines for AI procurement</a> (8 June 2020) tell
        public buyers to require the supplier to assemble a team with the right skill sets. Private buyers should ask
        the same thing.
      </p>
      <Answer
        good="Names and roles, including the person who will write the prompts and the integration code. That person joins a call before you sign. They say who takes over if someone leaves."
        flag="Only the sales lead appears. &quot;Our team&quot; has no names. Parts of the work go to a subcontractor you only hear about later."
      />

      <h3>4. Tell me about a project that went wrong. What did you change afterwards?</h3>
      <p>
        BotsCrew asks a version of this too: can the vendor name three reasons its last AI projects failed. The answer
        shows whether a firm learns.
      </p>
      <Answer
        good="A specific project (no client name needed), the cause, such as messy source data or an approval step left out, and the process change that followed."
        flag="&quot;None of our projects has failed.&quot; Or a story where the client was the only problem."
      />

      <h2 id="ownership">Ownership and data: who holds what when the project ends?</h2>
      <p>
        An agent is the code, the prompts that steer the model, the evaluation set that checks it, the logs and the
        accounts that hold the model keys. Lose any one and switching vendors means starting again. NIST&apos;s Generative AI Profile,{' '}
        <a href={SRC.nist600} {...ext}>NIST AI 600-1</a> (July 2024), asks organisations to draft contracts and service
        level agreements that specify content ownership, usage rights, quality standards and security requirements
        (action GV-6.1-004).
      </p>

      <h3>5. Who owns the code, the prompts and the evaluation set?</h3>
      <p>
        An evaluation set is a list of real inputs with the answer you expect for each. It is how anyone checks the
        agent after a change, so it is as valuable as the code.
      </p>
      <Answer
        good="You own all of it, written into the contract, with the code in a repository in your own account from the first day."
        flag="The code is &quot;licensed&quot; to you, the prompts are the vendor&apos;s intellectual property, or the agent lives on a platform you cannot export from."
      />

      <h3>6. Whose accounts hold the model API keys and the cloud servers?</h3>
      <Answer
        good="Your accounts. The vendor gets access you can see and switch off. You can read the usage and the bills yourself."
        flag="Everything runs in the vendor&apos;s accounts and you receive one bundled invoice. If you leave, the agent stops."
      />
      <figure className="my-8">
        <img
          src={`${IMG}/ownership.webp`}
          alt="Seen from behind, a man with dark wavy hair and glasses in an olive polo shirt reviews a list of accounts with orange toggles on a monitor, an orange key fob on his desk."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Keys and servers in your own accounts mean you can see usage and switch off a vendor&apos;s access yourself.
        </figcaption>
      </figure>

      <h3>7. Are you our data controller or our processor, and will you sign a data processing agreement?</h3>
      <p>
        Under UK GDPR, the controller decides why and how personal data is used and the processor acts on its
        instructions. The ICO&apos;s{' '}
        <a href={SRC.ico} {...ext}>guidance on AI accountability and governance</a> (last updated 15 March 2023, under
        review) says that if a firm has no purpose of its own and only acts on a client&apos;s instructions, it is likely
        a processor. Its{' '}
        <a href={SRC.icoContract} {...ext}>contract guidance</a> lists the terms UK GDPR Article 28(3) requires in a
        controller and processor contract. The accountability guidance gives the example of a provider that trains its own model (likely a controller for that part)
        and then runs it on each client&apos;s data (likely a processor for that part).
      </p>
      <Answer
        good="A clear role for each use of your data, a data processing agreement ready before the demo touches customer records, and a list of the model providers and other subprocessors that will see the data."
        flag="&quot;We are GDPR friendly&quot; with no agreement, or a vague answer about which companies receive your data."
      />

      <h3>8. Will our data train anything of yours, or anyone else&apos;s?</h3>
      <Answer
        good="No, in writing, plus the settings they use with each model provider so that your prompts and records are not used for training."
        flag="&quot;We may use anonymised data to improve our services.&quot; That is the line that, in the ICO&apos;s reasoning, can make the vendor a controller of your data."
      />

      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg my-8">
        <h3 className="text-lg font-bold mb-3">Test us with these questions</h3>
        <p className="mb-4">
          Send us one job you want an AI agent to do and a sample of the records it would read. We will show you
          working software on your own data before you sign, and FactoryJet quotes a fixed price in writing after a
          short scoping call. Founder replies within 24 hours.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors"
        >
          See a demo on your own data before you sign
        </a>
      </div>

      <h2 id="security">Security and testing: how will they prove it behaves?</h2>
      <p>
        Most buyer guides stop at &quot;ask about security&quot;. Better to ask about named risks. The{' '}
        <a href={SRC.owasp} {...ext}>OWASP Top 10 for LLM applications 2025</a>, from the OWASP Gen AI Security
        Project, gives you the names. An LLM, or large language model, is the AI model behind tools such as ChatGPT and
        Claude.
      </p>

      <h3>9. How do you test for prompt injection (OWASP LLM01)?</h3>
      <p>
        OWASP <a href={SRC.owasp01} {...ext}>defines prompt injection</a> as prompts that alter the model&apos;s
        behaviour or output in unintended ways, and notes the hidden text does not need to be visible to people. If
        your agent reads customer emails, supplier PDFs or web pages, someone can plant instructions in them.
      </p>
      <Answer
        good="They show test cases with planted instructions in documents and emails, explain what the agent is blocked from doing even if it is fooled, and rerun those tests before every change."
        flag="&quot;The model provider handles that.&quot; Model providers add their own guards, but your agent&apos;s tools and permissions are the builder&apos;s job."
      />

      <h3>10. What can the agent do without a person approving it (OWASP LLM06)?</h3>
      <p>
        OWASP calls this <a href={SRC.owasp06} {...ext}>Excessive Agency</a> and says its root cause is usually one or
        more of excessive functionality, excessive permissions or excessive autonomy. One of its listed fixes is to
        require a human to approve high-impact actions before they are taken.
      </p>
      <Answer
        good="A written list of every action the agent can take, which ones need a person to approve (a refund, a message to a customer, a posting to the ledger) and the narrow account permissions it runs with."
        flag="The agent connects with an admin account &quot;to keep it simple&quot;, or nobody can tell you what it is allowed to change."
      />

      <h3>11. Show us your test set and the pass mark.</h3>
      <p>
        A test set is a batch of real cases from your business with the expected answer for each. The pass mark is the
        score the agent must reach before it goes live or before any change ships. The FTC&apos;s{' '}
        <a href={SRC.ftc} {...ext}>Operation AI Comply</a> (25 September 2024) shows why this matters: its complaint
        against DoNotPay alleged the company did not test whether its AI chatbot&apos;s output matched the level of a
        human lawyer, the expertise it claimed to stand in for.
      </p>
      <Answer
        good="They show a test set from a past project, agree with you how yours will be built from your own cases, and put the pass mark in the statement of work."
        flag="&quot;We tested it and it works well.&quot; Or a single accuracy number with no cases behind it."
      />
      <figure className="my-8">
        <img
          src={`${IMG}/testing.webp`}
          alt="A young man with curly red hair in a grey hoodie works at two monitors showing a grid of test rows and a bar chart with one orange bar, orange sticky notes on the desk."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          A test set of your own past cases, rerun before every change, is what proves the agent still behaves.
        </figcaption>
      </figure>

      <h3>12. What logs do we get, and where do they live?</h3>
      <p>
        NIST AI 600-1 action GV-6.1-008 asks organisations to keep records of changes third parties make to content,
        including sources and timestamps. For an agent that means a record of every input, tool call, output and
        approval.
      </p>
      <Answer
        good="Every run is logged in your own account, kept for as long as your policy says, and searchable by your team without asking the vendor."
        flag="Logs exist only in the vendor&apos;s dashboard, are deleted after a few days, or cost extra to export."
      />

      <h2 id="after-launch">After launch, and the money</h2>

      <h3>13. What happens when the model provider retires the model you built on?</h3>
      <p>
        Models are retired on a schedule. Anthropic&apos;s{' '}
        <a href={SRC.anthropic} {...ext}>model deprecations page</a> says it regularly retires older models and that
        requests to retired models will fail. OWASP lists the third-party models and libraries an agent depends on
        under <a href={SRC.owasp03} {...ext}>LLM03 Supply Chain</a>, and NIST AI 600-1 action GV-6.2-007 asks buyers to
        consider system changes over time, such as drift and decay, when they review vendor contracts.
      </p>
      <Answer
        good="They watch the providers&apos; retirement notices, rerun your test set on the replacement model before switching, and the contract says how that work is scoped and priced."
        flag="No plan, or the agent is tied to one model in a way that means a rebuild when it is retired."
      />

      <h3>14. How is support priced, and is there a monthly minimum?</h3>
      <p>
        Expect some mix of defects fixed inside the build price for a set cover period, changes quoted one at a time,
        and an ongoing support plan. Get the structure in writing before you sign.
      </p>
      <Answer
        good="The cover period for defects is stated in the contract, each change is quoted before work starts, and any ongoing plan is optional and explained in plain words."
        flag="Support terms appear only after launch, or a support plan must start before anything is live."
      />

      <h3>15. Is each phase scoped, priced and signed on its own?</h3>
      <p>
        Gartner&apos;s same release predicts that over 40% of agentic AI projects will be canceled by the end of 2027,
        due to escalating costs, unclear business value or inadequate risk controls. Phases signed one at a time give
        you a clean exit after each one.
      </p>
      <Answer
        good="Phase one is one job with its own fixed price and a clear finish line. You decide on phase two after you have seen phase one work."
        flag="One contract for the whole programme, with most of the money due before anything is live."
      />

      <h2 id="red-flags">Twelve AI agency red flags</h2>
      <p>
        These patterns recur across the rival guides, the Reddit threads the assistants cited and the regulators&apos;
        pages we read on 18 October 2026. One is a reason to ask harder questions. Three is a reason to walk away.
      </p>
      <figure className="my-8">
        <img
          src={`${IMG}/red-flags.webp`}
          alt="A man in a charcoal suit presents a slide of grey circles and arrows while a woman in a teal blouse sits with folded arms beside an older man in a tweed jacket."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          A long deck and no live agent is the most common red flag in an AI vendor pitch.
        </figcaption>
      </figure>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li><strong>Agent washing.</strong> A chatbot or scripted automation sold as an agent. Gartner puts the real agentic vendors at about 130 of thousands.</li>
        <li><strong>A 20-slide deck and no live agent.</strong> If they cannot show one running, assume there is not one.</li>
        <li><strong>&quot;It learns on its own.&quot;</strong> Ask what exactly changes, who approves it and how it is tested. Most agents change only when someone edits the prompts, data or code.</li>
        <li><strong>Keys and servers only in their account.</strong> You cannot see usage, and leaving means a rebuild.</li>
        <li><strong>No named people.</strong> You meet a salesperson and never the builder.</li>
        <li><strong>A price only after a long paid discovery.</strong> You pay to learn whether you can afford the project.</li>
        <li><strong>No exit or handover clause.</strong> Nothing says what you receive if the work stops: code, prompts, test set, logs.</li>
        <li><strong>A support plan that starts before anything is live.</strong> Ongoing fees before there is anything to support.</li>
        <li><strong>A single accuracy number with no test set.</strong> &quot;95% accurate&quot; on what, measured how?</li>
        <li><strong>No answer on prompt injection.</strong> Or a reply that it is the model provider&apos;s problem.</li>
        <li><strong>An admin account for the agent.</strong> No list of actions, no approval step for the risky ones.</li>
        <li><strong>Claims the agent replaces a profession.</strong> The FTC said in its September 2024 Operation AI Comply release that there is no AI exemption from the laws on the books. Big claims need tests behind them.</li>
      </ol>
      <p>
        Several of these line up with our guide to{' '}
        <a href="/blog/why-ai-agent-projects-fail-2026">why AI agent projects fail</a>: the failure usually starts in
        the contract, long before the first line of code.
      </p>

      <h2 id="scorecard">A scorecard you can use on three AI companies</h2>
      <p>
        The Sparked Group&apos;s scorecard, published 16 October 2026, uses ten weighted criteria and treats a score
        of 1 on diagnosis, governance or ownership as a veto. Ours keeps the idea of weights and vetoes, and builds
        the rows from the 15 questions above, so prompt injection, approvals, the test set and data roles each get a
        score. Set the weights before you read any proposal. Score each firm 1, 3 or 5 per row on what you have seen,
        then multiply by the weight and divide by 5. The best possible total is 100.
      </p>
      <Table
        head={['Criterion', 'Weight', 'Scores 1', 'Scores 3', 'Scores 5']}
        rows={[
          ['Live agent in production (Q1). VETO at 1', '15', 'Video or slides only', 'Live system, but not similar to your job', 'Live system on a similar job, with logs and an approval step shown'],
          ['Demo on your data (Q2)', '10', 'Only after a paid phase', 'Demo on generic data', 'Demo on a sample of your records before you sign'],
          ['Ownership of code, prompts, test set (Q5). VETO at 1', '15', 'Vendor keeps it or licenses it to you', 'You own the code, not the prompts or tests', 'You own all of it, in your repository from day one'],
          ['Accounts and keys (Q6)', '10', 'All in the vendor account', 'Mixed, with a transfer plan', 'All in your accounts, vendor access you control'],
          ['Data role and agreement (Q7, Q8)', '10', 'No clear role, no agreement', 'Agreement offered, role vague', 'Role named per use, agreement and subprocessor list ready'],
          ['Security tests (Q9, Q10)', '10', 'No answer', 'General answer, no test cases', 'Injection tests shown, written action list with approvals'],
          ['Test set and pass mark (Q11)', '10', 'None', 'Test set exists, no agreed pass mark', 'Test set from your cases, pass mark in the contract'],
          ['Logs (Q12)', '5', 'Vendor dashboard only', 'Exportable on request', 'In your account, searchable by your team'],
          ['After launch (Q13, Q14)', '10', 'No written terms', 'Terms exist, model change not covered', 'Defect cover, change pricing and model change all written'],
          ['Named team and references (Q3, Q4)', '5', 'No names, no references', 'Names, references not yet called', 'Builders met, two references called'],
        ]}
      />
      <p>
        Arithmetic, so you can check it: a firm scoring 5 on every row reaches 100. A firm scoring 3 on every row
        reaches 60. A firm scoring 5 everywhere except a 1 on ownership has 88 points, and still fails, because a 1 on
        a veto row ends the review whatever the total says. Our working rule is to take firms above 75 to a demo. That
        threshold is our own, not an industry standard.
      </p>
      <figure className="my-8">
        <img
          src={`${IMG}/scorecard.webp`}
          alt="Three scorecard columns of grey and orange bars and boxes on a cream background, one column for each AI development company being compared."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          One column per firm, the same ten rows for each, weights set before any proposal is read.
        </figcaption>
      </figure>

      <h3>How vetting changes with company size</h3>
      <Table
        head={['Company size', 'Firms to compare', 'Who should score', 'Questions to weigh most']}
        rows={[
          ['10 to 50 staff', 'Two or three', 'The owner and the person who does the job today', 'Q2 demo, Q5 ownership, Q6 accounts, Q15 phases'],
          ['50 to 500 staff', 'Three', 'Operations lead, IT lead, finance, and whoever handles data protection', 'All 15, with Q7 data role and Q10 approvals in writing'],
          ['500+ staff', 'Three, after a written questionnaire to six to eight', 'Procurement, security, legal, IT and the business owner', 'All 15 inside your existing vendor risk assessment, mapped to NIST AI 600-1'],
        ]}
      />

      <h2 id="questionnaire">Turning the questions into an AI vendor questionnaire</h2>
      <p>
        An AI vendor questionnaire is the written form of this list, sent before any call. Larger companies already run
        one as part of AI vendor due diligence. 1up&apos;s{' '}
        <a href={SRC.oneup} {...ext}>list of the top 20 questions</a> (22 May 2025) shows what AI software sellers
        receive in deal after deal: legal, security and data questions. Lets-viz&apos;s{' '}
        <a href={SRC.letsviz} {...ext}>six-gate checklist for small businesses</a> runs from data flow mapping to exit
        rights and says the review takes two to three working days.
      </p>
      <p>
        For a custom build, those templates miss the parts that decide whether you can ever leave. Add three lines to
        whichever AI vendor risk assessment you already use:
      </p>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li>List every item we will own at the end of each phase: code, prompts, test set, logs, documentation.</li>
        <li>Name the account that will hold each model key, server and database, and who can switch access off.</li>
        <li>Describe the demo you will build on a sample of our data before we sign, and how you will delete that sample afterwards.</li>
      </ol>
      <p>
        NIST AI 600-1 action GV-6.1-009 backs this up: it asks organisations to update due diligence for generative AI
        procurement to include intellectual property, data privacy, security and other risks. Our{' '}
        <a href="/blog/ai-agent-governance-policy-mid-sized-companies-2026">AI agent governance policy guide</a> shows
        where the answers go once you have them.
      </p>

      <h2 id="references">Reference-call questions to ask a past client</h2>
      <p>
        Ask the vendor for two clients whose projects went live at least six months ago. Call them without the vendor
        on the line. Six questions:
      </p>
      <figure className="my-8">
        <img
          src={`${IMG}/reference-call.webp`}
          alt="A bearded man with a shaved head in a white shirt listens on a phone by an office window, an open notepad and an orange pen on the desk."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Call references without the vendor on the line, and ask about the months after launch.
        </figcaption>
      </figure>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li>What does the agent do today, and how many people use it or rely on it each week?</li>
        <li>What broke in the first three months after launch, and how fast was it fixed?</li>
        <li>Were the people who built it the same people who sold it to you?</li>
        <li>Do you hold the code, prompts and logs in your own accounts today?</li>
        <li>How were changes after launch priced, and were there any surprises on the invoice?</li>
        <li>Would you hire them again for a second project, and what would you change in the contract?</li>
      </ol>

      <h2 id="uk-au">Extra checks in the UK and Australia</h2>
      <Table
        head={['Country', 'Read this', 'What it adds to your questions']}
        rows={[
          ['United States', <a key="n" href={SRC.nistRmf} {...ext}>NIST AI Risk Management Framework</a>, 'Voluntary framework released 26 January 2023, now being revised under the White House AI Action Plan. Its Generative AI Profile (AI 600-1) gives contract and due diligence actions such as GV-6.1-004 and GV-6.1-009.'],
          ['United Kingdom', <a key="i" href={SRC.ico} {...ext}>ICO, accountability and governance of AI</a>, 'Settle controller or processor for each use of your data, then sign a data processing agreement under UK GDPR.'],
          ['United Kingdom, public sector', <a key="g" href={SRC.govuk} {...ext}>Guidelines for AI procurement</a>, 'Top 10 considerations, including a data assessment before procurement and strategies to avoid vendor lock-in and black-box systems.'],
          ['Australia', <a key="a" href={SRC.oaic} {...ext}>OAIC, privacy and commercially available AI products</a>, 'The Privacy Act applies to all uses of AI involving personal information. The OAIC recommends not entering personal information into publicly available generative AI tools.'],
          ['Australia', <a key="p" href={SRC.apsco} {...ext}>APSCO Australia, top 10 questions for AI system suppliers</a>, 'A Squire Patton Boggs due diligence checklist, published 13 November 2025 for APSCO members, for use before first engagement or at renewal.'],
        ]}
      />
      <p>
        For UK firms, our list of{' '}
        <a href="/blog/best-ai-agent-development-companies-uk-2026">AI agent development companies in the UK</a> and the{' '}
        <a href="/uk/ai-agents">UK AI agents page</a> are a starting point for the long list. In Australia, start with
        our guide to <a href="/blog/best-ai-agencies-australia-2026">AI agencies in Australia</a> and the{' '}
        <a href="/au/ai-agents">Australian AI agents page</a>. US buyers can compare our lists of{' '}
        <a href="/blog/best-ai-agent-development-companies-2026">AI agent development companies</a> and{' '}
        <a href="/blog/best-ai-automation-agencies-usa-2026">AI automation agencies in the USA</a>. Whichever best AI
        agency list you start from, run every name through the same 15 questions.
      </p>

      <h2 id="related">Related decisions before you sign</h2>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Still deciding who should build it? Read <a href="/blog/ai-agency-vs-in-house-vs-freelancer-2026">AI agency vs in-house vs freelancer</a>.</li>
        <li>Ready for the paperwork? Use the <a href="/blog/ai-agent-development-contract-checklist-2026">AI agent development contract checklist</a>.</li>
        <li>Weighing the security answers? See <a href="/blog/ai-agent-security-risks-controls-2026">AI agent security risks and controls</a>.</li>
        <li>Want the services side? See <a href="/services/ai-agent-development">AI agent development</a>, <a href="/services/ai-automation">AI automation</a> and <a href="/services/ai-consulting">AI consulting</a>.</li>
      </ul>

      <h2 id="how-factoryjet-answers">How FactoryJet answers these 15 questions</h2>
      <p>
        We build custom AI agents, AI voice agents, and integrations with Odoo, NetSuite, SAP Business One, ERPNext,
        Salesforce, HubSpot, Xero, WhatsApp and EDI. Here is where our standard terms answer the questions above.
        Bring the rest to the scoping call and score us like anyone else.
      </p>
      <Table
        head={['Question', 'Our answer']}
        rows={[
          ['Q2. Demo on our data before we sign?', 'You see working software on your own data before you sign.'],
          ['Q5. Who owns the code?', 'You own the code and the repository from day one.'],
          ['Q6. Whose accounts?', 'AI and cloud bills can run in your own accounts, at cost, with no markup.'],
          ['Q14. Support and minimums', 'Defects are fixed inside the build price for a cover period we agree before work starts. Support is optional: each change is quoted and approved, with no monthly minimum.'],
          ['Q15. Phases', 'Each phase is scoped, priced and signed on its own.'],
          ['Price', 'FactoryJet quotes a fixed price in writing after a short scoping call.'],
        ]}
      />

      <div className="bg-[#FAF8F5] border border-[#E5DFD7] rounded-xl p-6 my-10">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-3">More 2026 decision guides</p>
        <ul className="mb-0">
          <li><a href="/blog/ai-mvp-development-cost-2026">AI MVP development cost in 2026</a>: what a first AI product costs to build, by scope.</li>
          <li><a href="/blog/ai-agency-vs-in-house-vs-freelancer-2026">AI agency vs in-house engineer vs freelancer</a>: which to pick for your company size.</li>
          <li><a href="/blog/ai-agent-development-contract-checklist-2026">AI agent development contract checklist</a>: 14 clauses on data, ownership and support.</li>
          <li><a href="/blog/why-ai-agent-projects-fail-2026">Why AI agent projects fail</a>: what the research found and how to avoid it.</li>
          <li><a href="/blog/copilot-studio-vs-custom-ai-agents-2026">Copilot Studio vs a custom AI agent</a>: pricing and when each wins.</li>
          <li><a href="/blog/enterprise-ai-agent-cost-2026">Enterprise AI agent cost in 2026</a>: build ranges and what drives them.</li>
        </ul>
      </div>

      <h2 id="sources">Sources</h2>
      <p className="text-sm text-gray-600">Every page below was opened and read on 18 October 2026.</p>
      <ul className="list-disc pl-6 space-y-1 text-sm mb-8">
        <li><a href={SRC.nistRmf} {...ext}>NIST, AI Risk Management Framework</a> (released 26 January 2023, being revised)</li>
        <li><a href={SRC.nist600} {...ext}>NIST AI 600-1, Generative AI Profile</a> (July 2024): GV-6.1-004, GV-6.1-008, GV-6.1-009, GV-6.2-007</li>
        <li><a href={SRC.owasp} {...ext}>OWASP Gen AI Security Project, Top 10 for LLM Applications 2025</a>, with <a href={SRC.owasp01} {...ext}>LLM01</a>, <a href={SRC.owasp03} {...ext}>LLM03</a> and <a href={SRC.owasp06} {...ext}>LLM06</a></li>
        <li><a href={SRC.ico} {...ext}>ICO, What are the accountability and governance implications of AI?</a> (updated 15 March 2023)</li>
        <li><a href={SRC.icoContract} {...ext}>ICO, What needs to be included in the contract?</a> (UK GDPR Article 28(3))</li>
        <li><a href={SRC.oaic} {...ext}>OAIC, Guidance on privacy and the use of commercially available AI products</a> (21 October 2024, updated 17 January 2025)</li>
        <li><a href={SRC.govuk} {...ext}>UK Government, Guidelines for AI procurement</a> (8 June 2020)</li>
        <li><a href={SRC.gartner} {...ext}>Gartner, Over 40% of Agentic AI Projects Will Be Canceled by End of 2027</a> (25 June 2025)</li>
        <li><a href={SRC.ftc} {...ext}>FTC, Crackdown on Deceptive AI Claims and Schemes (Operation AI Comply)</a> (25 September 2024)</li>
        <li><a href={SRC.anthropic} {...ext}>Anthropic, Model deprecations</a></li>
        <li><a href={SRC.iso42001} {...ext}>ISO, ISO/IEC 42001:2023 AI management systems</a></li>
        <li>Buyer guides compared: <a href={SRC.botscrew} {...ext}>BotsCrew</a>, <a href={SRC.sparked} {...ext}>The Sparked Group</a>, <a href={SRC.dancumberland} {...ext}>Dan Cumberland Labs</a>, <a href={SRC.telliant} {...ext}>Telliant</a>, <a href={SRC.oneup} {...ext}>1up</a>, <a href={SRC.letsviz} {...ext}>Lets-viz</a>, <a href={SRC.apsco} {...ext}>APSCO Australia</a></li>
        <li>Our own measurements: Google volumes and results for the US, UK and Australia (DataForSEO), and 36 buyer questions across five AI engines, all on 18 October 2026</li>
      </ul>

      <div className="bg-[#FAF8F5] border-2 border-[#E5DFD7] p-6 sm:p-8 rounded-xl my-10 shadow-sm">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-2">
          Vetting AI development companies in the US, UK or Australia
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] mb-3">
          Put us through the 15 questions
        </h3>
        <p className="text-[#4B5563] text-base leading-relaxed mb-6">
          Send one job and a sample of the records it would use. You see working software on your own data before you
          sign, and FactoryJet quotes a fixed price in writing after a short scoping call. Founder replies within 24
          hours.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors shadow-sm"
          >
            See a demo on your own data before you sign
          </a>
          <a
            href="/services/ai-agent-development"
            className="inline-flex items-center gap-2 bg-white text-[#1F2937] border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            See AI agent development
          </a>
        </div>
      </div>
    </article>
  ),
};

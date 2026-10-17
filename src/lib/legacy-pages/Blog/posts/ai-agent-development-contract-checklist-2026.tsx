import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

/*
 * AI agent development contract checklist (US, UK, Australia, 2026). Written 18 Oct 2026.
 * Answers sweep question N32: "What should an AI agent development contract include about data ownership
 * and ongoing support?" Buyer terms (DataForSEO, 18 Oct 2026): software development agreement (Google Ads
 * exact: US 110, UK 50, AU 20; Labs: US 320, UK 70), software development agreement example / sample / form
 * (US 170 each), software development agreement template / format (US 90), ai contract (US 320, UK 70).
 * Related searches: ai development contract template, ai development contract example, ai development
 * agreement clauses sample. We give sample wording and a checklist, not a downloadable template.
 * Every legal statement was read on the official page on 18 Oct 2026: US Copyright Office Circular 30 and
 * Part 2 report, UK IPO ownership guidance, ICO controller/processor and Article 28 contract pages,
 * business.gov.au contractor contract page, OAIC guidance on commercially available AI products.
 * Model notice periods read on OpenAI, Anthropic and Google Cloud pages on 18 Oct 2026.
 * Rule B: no figures for what the agent costs to operate. No FactoryJet price. Not legal advice (said near top and at end).
 * The FAQ array below is the single source for both the visible FAQ and the FAQPage JSON-LD.
 */

const SRC = {
  mayer: 'https://www.mayerbrown.com/en/insights/publications/2026/06/key-contract-issues-in-agentic-ai-implementation-and-integration-deals',
  ml1: 'https://www.morganlewis.com/blogs/sourcingatmorganlewis/2025/09/contracts-for-ai-agent-development-and-implementation-part-1-setting-the-stage',
  ml2: 'https://www.morganlewis.com/blogs/sourcingatmorganlewis/2025/10/contracts-for-ai-agent-development-and-implementation-part-2-governance-and-accountability',
  mlip: 'https://www.morganlewis.com/blogs/sourcingatmorganlewis/2024/11/service-agreements-who-should-own-developed-intellectual-property',
  circ30: 'https://www.copyright.gov/circs/circ30.pdf',
  usco2: 'https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf',
  ipo: 'https://www.gov.uk/guidance/ownership-of-copyright-works',
  ico: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/controllers-and-processors/controllers-and-processors/what-are-controllers-and-processors/',
  ico28: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/contracts-and-liabilities-between-controllers-and-processors-multi/what-needs-to-be-included-in-the-contract/',
  bizgov: 'https://business.gov.au/people/contractors/prepare-a-contract',
  oaic: 'https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products',
  ftc: 'https://www.ftc.gov/news-events/news/press-releases/2024/09/ftc-announces-crackdown-deceptive-ai-claims-schemes',
  nist: 'https://www.nist.gov/itl/ai-risk-management-framework',
  openai: 'https://developers.openai.com/api/docs/deprecations',
  anthropic: 'https://platform.claude.com/docs/en/about-claude/model-deprecations',
  google: 'https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/model-versions',
  orbilon: 'https://orbilontech.com/ai-development-contract-clauses/',
  lucent: 'https://www.lucentinnovation.com/resources/technology-posts/ai-development-contract-checklist',
};

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;
const IMG = '/images/blog/ai-agent-development-contract-checklist-2026';

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

function Sample({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white border border-[#E5DFD7] rounded-xl p-5 my-6">
      <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-2">Plain sample wording</p>
      <p className="text-[#1F2937] leading-relaxed mb-0">{children}</p>
    </div>
  );
}

const faqs: FAQItem[] = [
  {
    q: 'What should an AI agent development contract include?',
    a: 'At minimum, 14 things: ownership of the code; ownership of prompts and evaluation sets; limits on how your data is used; return and deletion of data at the end; accounts and API keys in your name; what happens when a model is retired or repriced; acceptance criteria for answers that vary; security and incident notice; human approval and audit logs; liability and indemnity; how ongoing support is structured; change requests; exit and handover; and governing law.',
  },
  {
    q: 'Who owns the code when an agency builds my AI agent?',
    a: 'Whoever the contract says. Without a written clause, the default often favours the developer. The UK IPO says the creator of a commissioned work is the first owner of copyright unless you agree otherwise in writing, and business.gov.au says an Australian contractor automatically owns the IP they create unless the contract says otherwise. Put a clear assignment of the code and repository to your company in the agreement.',
  },
  {
    q: 'Who owns the prompts and evaluation sets?',
    a: 'Settle it in writing, asset by asset. Mayer Brown, in its 16 June 2026 note on agentic AI deals, says the contract should define rights to custom code, configurations, prompts, evaluation sets, fine-tuned weights and other artifacts. For most buyers the prompts and the evaluation set hold the knowledge of how your business works, so ask for ownership, or at least a permanent licence and a copy at handover.',
  },
  {
    q: 'Can the developer use my data to train their own models?',
    a: 'Only if you agree to it, so say no in the contract unless you have a reason to say yes. Mayer Brown advises that if the expectation is no training, the contract should say so expressly and require the developer to choose AI provider tiers, settings and sub-processors that match that promise. Cover prompts, outputs, logs and evaluation sets as well as your raw data.',
  },
  {
    q: 'What happens to my data when the contract ends?',
    a: 'The contract decides, so write it down. Under UK GDPR, the ICO says a processor contract must require the processor, at the controller’s choice, to delete or return all the personal data and delete existing copies unless the law requires storage. A good AI contract applies the same idea to every copy: databases, vector stores, logs, backups and test sets, with written confirmation and a date.',
  },
  {
    q: 'Should the OpenAI or Anthropic account be in my name or theirs?',
    a: 'Yours, wherever you can. If the AI provider account, the cloud account and the API keys sit in your company’s name, you control access, see every bill directly, and keep the agent running if you change developers. The developer works inside your accounts with its own named logins, which you can remove on the day the work ends.',
  },
  {
    q: 'What happens if the AI model we use is retired?',
    a: 'The provider sets the notice period, so the contract should say who moves the agent to the new model and who pays. On 18 October 2026, OpenAI listed at least 6 months notice for generally available models, Anthropic at least 60 days for publicly released models, and Google Cloud at least 45 days for its shorter-term models. Retest the agent against your evaluation set before switching.',
  },
  {
    q: 'How do you write acceptance criteria for an AI agent?',
    a: 'Agree a test set and a pass rate before the build starts. Collect 50 to 200 real past cases from your own records, write down the correct result for each, and agree what share the agent must get right and which errors are never allowed. Mayer Brown notes that one successful test is not enough because AI output varies, and suggests acceptance against an agreed evaluation set.',
  },
  {
    q: 'What should an AI agent SLA cover?',
    a: 'Severity levels, response times and fix times for each level, who can switch the agent off, how drift is spotted, and what reports you get. An AI service level agreement should not promise that every answer will be right. Accuracy is measured against your test set on a schedule. Morgan Lewis describes newer terms such as a customer kill switch and shadow-mode testing.',
  },
  {
    q: 'How should ongoing support be priced in an AI contract?',
    a: 'There are four common structures: a standing monthly support plan, hourly billing per change, a fixed quote for each change that you approve first, and AI and cloud bills passed through at cost in your own accounts. Pick the one that matches how often you expect changes. Ask for the structure in writing, and for the right to switch structures after launch.',
  },
  {
    q: 'Do I have to sign a monthly support contract for an AI agent?',
    a: 'No. A monthly plan suits a company that expects steady changes, but it is a choice, not a rule. Many buyers prefer each change quoted and approved, with no monthly minimum, and the AI and cloud accounts in their own name. What you do need in writing is a defect cover period after launch and a clear path for asking for changes.',
  },
  {
    q: 'Is the developer a data controller or processor under UK GDPR?',
    a: 'Usually a processor, when it handles personal data only on your instructions to build and run your agent. The ICO defines a processor as one that processes personal data on behalf of the controller. If the developer decides for itself why or how data is used, such as training its own product, it becomes a controller for that use. The ICO notes this guidance is under review after the Data (Use and Access) Act.',
  },
  {
    q: 'In the UK, who owns software I commission?',
    a: 'The developer, unless you agree otherwise in writing. The UK IPO says that when you commission a copyright work, the first legal owner is the person or organisation that created it, not you. Courts may find an implied licence to use it, but that does not necessarily transfer ownership. A written assignment in the software development agreement fixes this.',
  },
  {
    q: 'In the US, is custom software automatically work for hire?',
    a: 'Not when an outside firm writes it. US Copyright Office Circular 30 says a commissioned work is made for hire only if it falls into one of nine listed categories and both parties sign a written agreement saying so. Computer programs are not one of the nine. Code written by your own employees within their duties is different. For contractors, use a written assignment of copyright.',
  },
  {
    q: 'What privacy rules apply to AI projects in Australia?',
    a: 'The Privacy Act 1988 and the Australian Privacy Principles. The OAIC says privacy obligations apply to personal information put into an AI system and to AI output that contains personal information, including wrong or invented details about a real person. Its guidance asks businesses to check who can access that data, whether the product was tested for the use, and how human oversight works.',
  },
  {
    q: 'Who is liable if the AI agent makes a costly mistake?',
    a: 'The contract allocates it, and the usual starting point is to match risk to control. Mayer Brown suggests the party that decides something should carry more of the risk for that decision. Agree who chose the model and the workflow, cap liability at a level that fits the harm the agent could cause, and add a human approval step for actions such as payments, refunds or contract changes.',
  },
  {
    q: 'Should the contract require human approval steps?',
    a: 'Yes, for any action that moves money, changes a customer record in a way that is hard to undo, or sends something legally binding. Name those actions in the contract, say who approves them, and require an audit log of every action the agent takes. Mayer Brown lists approval gates for privileged actions and tool-use logging among the security terms to cover.',
  },
  {
    q: 'What should the exit and handover clause say?',
    a: 'List what you receive: the repository, prompts and system instructions, evaluation sets, configurations, documentation and runbooks, plus a data export in a format you name. Add a transition period with help from the developer, and credential rotation on the last day. Mayer Brown advises negotiating these exit rights at signing, when the buyer has the most bargaining power.',
  },
  {
    q: 'Do I need a separate data processing agreement?',
    a: 'If the developer handles personal data for you under UK or EU GDPR, you need processor terms, either in a separate data processing agreement or inside the main contract. The ICO lists the minimum terms: documented instructions, confidentiality, security, sub-processors, data subject rights, assistance, end-of-contract deletion or return, and audits. In the US and Australia it is good practice even where not named in law.',
  },
  {
    q: 'What red flags should I look for in an AI development contract?',
    a: 'Eight common ones: the vendor owns the prompts; your data can train their product; API keys sit only in their account; a monthly minimum starts before go-live; no exit clause; acceptance is at the vendor’s discretion; liability caps protect only the vendor; and automatic renewal without notice. Any of these is worth a question before you sign.',
  },
  {
    q: 'Is a standard software development agreement enough for an AI project?',
    a: 'It covers the basics such as scope, payment, warranty and IP, but it usually misses what makes AI different: prompts and evaluation sets as owned assets, training on your data, model retirement, answers that vary, and monitoring for drift. Start from the agreement you already use and add the AI clauses in the 14-clause checklist on this page.',
  },
  {
    q: 'Is there an AI development contract template I can use?',
    a: 'Law publishers sell software development agreement templates, and some rank on Google for that phrase. A template is only as good as the gaps you fill. Use the 14 clauses and the plain sample wording on this page as a list of what your template must cover, then have a lawyer in your country adapt it to your project.',
  },
  {
    q: 'Should a lawyer review my AI development contract?',
    a: 'Yes. This page is a buyer’s checklist, not legal advice. Ownership defaults, privacy law and liability rules differ between the US, the UK and Australia, and between states. Bring the checklist to a lawyer who reviews technology contracts, so the meeting is spent on your answers rather than on finding the questions.',
  },
  {
    q: 'Who owns the output an AI agent produces?',
    a: 'Between you and the developer, the contract decides. Copyright itself is narrower: the US Copyright Office Part 2 report (29 January 2025) says copyright does not extend to purely AI-generated material, so an assignment of output may convey less than you expect. Agree who may use, keep and reuse outputs, and protect valuable ones as confidential information.',
  },
];

export const post: BlogPost = {
  id: '781',
  slug: 'ai-agent-development-contract-checklist-2026',
  title: 'What Should an AI Agent Development Contract Include? A 14-Clause Checklist for 2026',
  excerpt:
    'A buyer’s checklist for an AI agent development contract in 2026: who owns the code, prompts and evaluation sets, how your data is used, returned and deleted, what happens when a model is retired, acceptance criteria, four ways to structure ongoing support, service levels, exit and handover, and the US, UK and Australian rules that change the contract.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Oct 18, 2026',
  dateModified: 'Oct 18, 2026',
  readTime: '19 min read',
  imageUrl: `${IMG}/hero.webp`,
  imageAlt:
    'At a walnut table in front of a red brick wall, a bald man with a white beard in a dark green cardigan reads a contract page while a young woman with long braids in an olive shirt sticks an orange tab on another page.',
  meta: {
    title: 'AI Development Contract Checklist: 14 Clauses to Agree (2026)',
    description:
      'What an AI agent development contract should say about data ownership, IP, model changes and ongoing support, with US, UK and Australian rules, 2026.',
  },
  keyTakeaways: [
    'In the UK, the first owner of a commissioned work is the person or organisation that created it, not the commissioner, unless agreed otherwise in writing (UK IPO, read 18 October 2026).',
    'In the US, a commissioned work is made for hire only if it is in one of nine listed categories and both parties sign a written agreement saying so; computer programs are not on the list (US Copyright Office Circular 30).',
    'In Australia, a contractor automatically owns the IP they create unless the contract says the hirer owns it (business.gov.au, read 18 October 2026).',
    'Under UK GDPR, a processor contract must require deletion or return of personal data at the end, at the controller’s choice (ICO, Article 28 guidance, under review after the Data (Use and Access) Act).',
    'Model providers set retirement notice: at least 6 months for generally available OpenAI models, at least 60 days for publicly released Anthropic models, at least 45 days for shorter-term Google Cloud models (provider pages, 18 October 2026).',
    'Mayer Brown (16 June 2026) recommends acceptance testing against an agreed evaluation set, because one successful test does not prove an AI agent will perform in production.',
    'Ongoing support can be structured four ways; the contract should name the structure, a defect cover period, and how changes are requested and approved.',
  ],
  faqs,
  content: (
    <article>
      {/* Answer-first block */}
      <div className="bg-white border-2 border-[#E5DFD7] rounded-xl p-6 sm:p-8 mb-10">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-3">The short answer</p>
        <p className="text-lg leading-relaxed mb-0">
          An <strong>AI agent development contract</strong> should state who owns the code, prompts, evaluation sets
          and any fine-tuned model; that your data is used only for your project and returned or deleted at the end;
          which accounts and API keys sit in your name; how model changes are handled; and how support after launch is
          structured and priced.
        </p>
      </div>

      <div className="bg-[#FAF8F5] border-l-4 border-[#B23E13] p-5 rounded-r-lg mb-6">
        <p className="text-sm text-[#1F2937] leading-relaxed mb-0">
          <strong>This is a buyer&apos;s checklist, not legal advice.</strong> We build custom AI agents, so we sit on
          the other side of these contracts; weigh the page with that in mind. Every legal point below was read on the
          government or regulator page that states it, on 18 October 2026, and is linked. Have a lawyer in your country
          review your contract.
        </p>
      </div>

      <div className="bg-gray-50 border border-gray-200 p-5 rounded-lg mb-10">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-2">How we made this page</p>
        <p className="text-sm text-[#1F2937] leading-relaxed mb-0">
          On 18 October 2026 we read the top 10 Google results and the People Also Ask questions for the main contract
          searches in the US, UK and Australia (DataForSEO). The same day we asked 36 buyer questions across ChatGPT,
          Gemini, Claude, Perplexity and Google&apos;s AI answers, and read the pages they cited. One of those questions
          is the one this page answers: what an AI agent development contract should include about data ownership and
          ongoing support. Written by Bhavesh Barot, founder of FactoryJet.
        </p>
      </div>

      <p>
        When ChatGPT answers that question, it searches for clause names, for each country&apos;s own government
        guidance, and for four phrases in particular: data ownership, service level agreement, return and deletion, and
        controller and processor. The law-firm pages it cites, from Mayer Brown and Morgan Lewis, are written for large
        enterprises and their lawyers. This page is for a company of 20 to 500 people signing its first AI build: a
        founder, an operations lead or a finance director who has a software development agreement on the desk and
        wants to know what to add before signing it.
      </p>
      <p>
        The page covers the 14 clauses, then the two halves of the question most guides skip: how ongoing support can
        be structured, and which rules change in the US, the UK and Australia.
      </p>

      <h2 id="at-a-glance">The 14 clauses at a glance</h2>
      <p>
        Read the table as a checklist. The middle column is what the AI contract should say; the right column is the
        wording that should make you stop and ask a question.
      </p>
      <Table
        head={['Clause', 'What to write', 'Red flag']}
        rows={[
          ['1. Ownership of code', 'All custom code and the repository are assigned to you on payment, or from day one', 'Vendor keeps the code and grants you a licence'],
          ['2. Prompts and evaluation sets', 'Prompts, system instructions and test sets built for you are yours', 'Prompts called vendor know-how'],
          ['3. Data use limits', 'Your data, prompts, outputs and logs are used only for your project; no training', 'Data may be used to improve services'],
          ['4. Data return and deletion', 'Return or delete every copy at the end, at your choice, with written confirmation', 'Silence on what happens at the end'],
          ['5. Accounts and API keys', 'AI provider and cloud accounts in your company name', 'Keys only in the vendor account'],
          ['6. Model retirement or repricing', 'Who moves the agent to a new model, who retests, who pays', 'Vendor may change models at will'],
          ['7. Acceptance criteria', 'Agreed test set, pass rate and forbidden errors, signed off by you', 'Acceptance at vendor discretion'],
          ['8. Security and incident notice', 'Least-privilege access, named sub-processors, incident notice within an agreed time', 'Generic security wording'],
          ['9. Human approval and audit logs', 'Named actions need a person to approve; every action is logged and you can read the log', 'Agent acts on payments with no review'],
          ['10. Liability and indemnity', 'Caps that fit the harm the agent could cause; indemnity for IP claims on delivered work', 'Caps that protect only the vendor'],
          ['11. Ongoing support structure', 'Named structure, defect cover period, response times by severity', 'Monthly minimum starting before go-live'],
          ['12. Change requests', 'Each change described, quoted and approved in writing before work starts', 'Changes billed after the fact'],
          ['13. Exit and handover', 'List of what you receive, transition help, credential rotation, data export format', 'No exit clause'],
          ['14. Governing law', 'Your country, or one you can afford to dispute in', 'A court far from your business'],
        ]}
      />

      <h2 id="why-standard-agreements-fall-short">Why a standard software development agreement is not enough</h2>
      <p>
        A standard software development agreement (also sold as a software development contract agreement template,
        form, format, sample or example) handles scope, milestones, payment, warranty and a general IP clause. Those still matter. What
        it was not written for is software whose behaviour depends on a model you do not control, whose answers vary
        from run to run, and whose most valuable parts are text files: prompts, instructions and test cases.
      </p>
      <p>
        Mayer Brown&apos;s note of{' '}
        <a href={SRC.mayer} {...ext}>16 June 2026 on agentic AI integration deals</a> lists eight contract issues:
        deal structure, performance commitments, technology stack selection, project governance, liability, security
        and data use, IP rights, and exit. Morgan Lewis, in{' '}
        <a href={SRC.ml1} {...ext}>part 1</a> and <a href={SRC.ml2} {...ext}>part 2</a> of its 2025 series on AI agent
        contracts, adds decision-making risk, ownership of outputs, further training, drift and regulatory change. Two
        practical guides also get cited by AI assistants: Orbilon&apos;s{' '}
        <a href={SRC.orbilon} {...ext}>eight-clause list of 7 October 2026</a> and Lucent Innovation&apos;s{' '}
        <a href={SRC.lucent} {...ext}>12-point AI development contract checklist</a>. On Google, LexisNexis&apos;s AI
        agreements checklist and Lexology&apos;s &quot;Eight essential clauses for AI contracts&quot; rank for
        &quot;ai development agreement clauses&quot;.
      </p>
      <p>This checklist differs from those in three ways:</p>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li>It compares structures for ongoing support, the half of the data-and-support question the cited pages answer least.</li>
        <li>It states the default ownership rule in each of the US, the UK and Australia, with the government page that says it.</li>
        <li>It is written for a first AI build at a 10 to 50 or 50 to 500 person company, with plain sample wording you can hand to your lawyer.</li>
      </ol>

      <h2 id="ownership">Ownership, asset by asset: who owns the code?</h2>
      <p>
        &quot;Who owns the code&quot; is the question buyers ask first, and it is the wrong unit. An AI agent is several
        assets, and a contract that assigns &quot;the deliverables&quot; can leave half of them unassigned. Mayer
        Brown&apos;s note says the contract should define rights to background IP, company-specific deliverables,
        custom code, configurations, prompts, evaluation sets and fine-tuned weights. Split it out:
      </p>
      <Table
        head={['Asset', 'What it is', 'What to ask for']}
        rows={[
          ['Custom code and repository', 'The software written for your project, with its history', 'Assignment to you; repository in your company account'],
          ['Prompts and system instructions', 'The written rules that tell the model how to behave for your business', 'Ownership, or a permanent licence plus a copy at handover'],
          ['Evaluation set', 'Your past cases with the correct answers, used to test the agent', 'Ownership; it is built from your data'],
          ['Fine-tuned model weights', 'A model adjusted on your data, if the project makes one', 'Ownership, or a licence plus the right to move it'],
          ['Configurations and workflows', 'Settings, connectors, approval rules, orchestration logic', 'Included in the handover list'],
          ['Vendor background tools', 'Reusable code the developer brought from earlier work', 'A permanent licence to use it inside your agent'],
          ['Agent output', 'Replies, drafts, documents and records the agent creates', 'Rights to use and keep it, and confidentiality'],
        ]}
      />
      <p>
        Background tools are the honest exception. Morgan Lewis&apos;s{' '}
        <a href={SRC.mlip} {...ext}>November 2024 post on who should own developed IP</a> separates a supplier&apos;s
        background IP and reusable developer tools from project-specific work, and notes that a customer who owns the
        bespoke work still needs a licence to anything the supplier brought with it. Expect that split and ask for the
        licence to be permanent.
      </p>
      <p>
        Agent output is the newer question. The US Copyright Office&apos;s{' '}
        <a href={SRC.usco2} {...ext}>Part 2 report of 29 January 2025</a> concludes that copyright does not extend to
        purely AI-generated material. So an assignment of &quot;all rights in the output&quot; may convey less than it
        sounds; protect valuable outputs as confidential information as well.
      </p>
      <figure className="my-8">
        <img src={`${IMG}/ownership.webp`}
          alt="A man in a green sweater places grey folders into a cardboard archive box while a woman in a white shirt ticks items on a clipboard, with an orange notebook and a black USB drive on the table."
          width={1200}
          height={800}
          loading="lazy"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Ownership is easier to check as a list: code, prompts, test set, settings, each one handed over and ticked off.
        </figcaption>
      </figure>
      <Sample>
        &quot;All software, prompts, system instructions, evaluation sets, configurations and model weights created for
        the Customer under this Agreement are assigned to the Customer on payment of the related invoice. The Developer
        keeps its pre-existing tools and grants the Customer a permanent, royalty-free licence to use them as part of
        the delivered system.&quot;
      </Sample>

      <h2 id="data">Data: use, location, return and deletion</h2>
      <p>
        Data ownership is the clause buyers assume is covered and often is not. Your company owns its data; the question
        is what the developer, and every AI provider it plugs in, may do with it. Write four things down.
      </p>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li>
          <strong>Use.</strong> Your data, prompts, outputs, logs and evaluation sets are used only to build and run your
          agent. Mayer Brown advises that if the expectation is &quot;no training&quot;, the contract should say so
          expressly and require provider tiers, settings and sub-processors that keep that promise.
        </li>
        <li>
          <strong>Location.</strong> Name the countries or cloud regions where data may be stored and processed, and the
          sub-processors (the AI provider, the cloud provider, any logging tool).
        </li>
        <li>
          <strong>Roles.</strong> Under UK GDPR, the{' '}
          <a href={SRC.ico} {...ext}>ICO defines a controller</a> as the party that determines the purposes and means
          of processing, and a processor as one that processes personal data on behalf of the controller. When a
          developer builds your agent on your instructions, it is usually your processor. If it decides for itself to
          use the data, for example to train its own product, it becomes a controller for that use. The ICO flags that
          this guidance is under review because of the Data (Use and Access) Act.
        </li>
        <li>
          <strong>Return and deletion.</strong> The ICO&apos;s page on{' '}
          <a href={SRC.ico28} {...ext}>what an Article 28 processor contract must include</a> says that at the end the
          processor must, at the controller&apos;s choice, delete or return all the personal data, and delete existing
          copies unless the law requires storage. For an AI agent, &quot;every copy&quot; means databases, vector stores
          (the search index an agent reads from), logs, backups and test sets.
        </li>
      </ol>
      <p>
        Those Article 28 minimum terms are what a data processing agreement holds: processing only on documented
        instructions, confidentiality, security, sub-processors, data subject rights, assistance to the controller,
        end-of-contract deletion or return, and audits. Buyers covered by GDPR need them in writing; US and Australian
        buyers lose nothing by using the same list.
      </p>
      <figure className="my-8">
        <img src={`${IMG}/data.webp`}
          alt="Seen over her shoulder, a woman with a silver bob in a burgundy cardigan holds a black external drive while her monitor shows grey boxes emptying and an orange progress bar, an orange mug beside the keyboard."
          width={1200}
          height={800}
          loading="lazy"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Return and deletion should cover every copy, including logs, backups and the test set, with a written confirmation.
        </figcaption>
      </figure>
      <Sample>
        &quot;The Developer will process Customer Data only to perform this Agreement and will not use it, or any
        prompts, outputs, logs or evaluation sets, to train or improve any model or service. Within 30 days of the end of
        this Agreement the Developer will, at the Customer&apos;s choice, return or delete all Customer Data and confirm
        deletion in writing.&quot;
      </Sample>
      <p className="text-sm text-gray-600">
        The 30 days in the sample is a placeholder for you and your lawyer to set; it is not a legal requirement.
      </p>

      <h2 id="accounts">Accounts and API keys in your name</h2>
      <p>
        This clause is short and protects more than any other. If the AI provider account (OpenAI, Anthropic, Google),
        the cloud account (AWS, Azure, Google Cloud) and the code repository sit in your company&apos;s name, three
        things follow. You see every bill directly. You decide who has access. And if the relationship ends, the agent
        keeps running while you choose what happens next. The developer works inside your accounts with named logins
        you can remove. Ask for the account list as a schedule to the contract, with the owner of each one.
      </p>

      <h2 id="model-changes">Model changes: what happens when OpenAI, Anthropic or Google retires a model</h2>
      <p>
        Your agent runs on a model you rent, and the provider can retire it. The notice period is set by the provider,
        not by your developer, so the contract has to say what happens inside that window. These are the published
        minimums as we read them on 18 October 2026:
      </p>
      <Table
        head={['Provider', 'Minimum notice before retirement', 'Source']}
        rows={[
          ['OpenAI', 'At least 6 months for generally available models; at least 3 months for specialised variants; preview models may go with notice as short as 2 weeks', <a key="o" href={SRC.openai} {...ext}>OpenAI deprecations page</a>],
          ['Anthropic', 'At least 60 days for publicly released models, by email to customers with active deployments', <a key="a" href={SRC.anthropic} {...ext}>Anthropic model deprecations page</a>],
          ['Google Cloud (Gemini)', 'Some models available at least 12 months after release; shorter-term models get a fixed retirement date at least 45 days ahead', <a key="g" href={SRC.google} {...ext}>Google Cloud model versions page</a>],
        ]}
      />
      <p>
        OpenAI also states that it may retire a model sooner if safety or compliance concerns require it. Anthropic
        notes that partner platforms such as Amazon Bedrock and Google Cloud set their own schedules. So the model
        clause should cover four points: who watches for deprecation notices, who moves the agent to the replacement,
        who reruns the evaluation set before the switch, and who pays for that work. Add a line on repricing too: if a
        provider changes its price or its data terms, Mayer Brown suggests the contract give you migration rights.
        Avoid preview models for anything a customer depends on.
      </p>

      <h2 id="acceptance">Acceptance criteria for answers that are never the same twice</h2>
      <p>
        Ordinary software is accepted when it does the same right thing every time. An AI agent can answer the same
        question two ways. Mayer Brown puts it plainly: a single successful test is not enough, and acceptance should
        rest on statistical performance against an agreed evaluation set. In practice:
      </p>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li>Collect 50 to 200 real past cases from your own records: emails, orders, tickets, invoices.</li>
        <li>Write down the correct result for each, signed off by the person who does that job today.</li>
        <li>Agree the pass rate before the build starts, and list the errors that fail the build outright (a wrong price, a refund to the wrong account).</li>
        <li>Run the set at handover and after every model change, and keep the results.</li>
        <li>Name who on your side signs acceptance. Never the developer alone.</li>
      </ol>
      <figure className="my-8">
        <img src={`${IMG}/acceptance.webp`}
          alt="Seen from behind, a bald man in a charcoal polo and a woman with a red ponytail in a mustard blouse study a monitor grid of grey boxes with orange ticks and two grey crosses."
          width={1200}
          height={800}
          loading="lazy"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Acceptance against a test set: most cases pass, and the two that fail are the ones to discuss before sign-off.
        </figcaption>
      </figure>
      <p>
        Weak acceptance terms are one of the patterns behind stalled projects; we cover the others in{' '}
        <a href="/blog/why-ai-agent-projects-fail-2026">why AI agent projects fail</a>, and the path from a test to live
        use in <a href="/blog/ai-proof-of-concept-to-production-2026">AI proof of concept to production</a>.
      </p>

      <h2 id="security-governance">Security, human approval and audit logs</h2>
      <p>
        An agent that can read your systems and act in them needs security terms written for agents. Mayer Brown lists
        least-privilege access, credential management, approval gates for privileged actions, tool-use logging, human
        review thresholds for high-risk actions, and testing against prompt injection and data poisoning. Morgan Lewis
        part 2 describes three newer rights: a customer kill switch to suspend the agent even if the vendor disagrees,
        shadow-mode running alongside staff before the agent touches live decisions, and retraining windows when
        behaviour drifts.
      </p>
      <p>For a mid-sized company, five lines cover most of it:</p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>The agent gets only the access its job needs, through accounts you can switch off.</li>
        <li>Named actions (payments, refunds, price changes, anything sent to a customer as binding) wait for a person to approve.</li>
        <li>Every action is logged, and you can read and export the log.</li>
        <li>The developer tells you about a security incident within an agreed time, and names its sub-processors.</li>
        <li>You can pause the agent at any time.</li>
      </ul>
      <p>
        The <a href={SRC.nist} {...ext}>NIST AI Risk Management Framework</a>, released 26 January 2023 for voluntary
        use, and its Generative AI Profile of 26 July 2024 give your team a shared vocabulary for these risks. Our{' '}
        <a href="/blog/ai-agent-security-risks-controls-2026">AI agent security guide</a> and{' '}
        <a href="/blog/ai-agent-governance-policy-mid-sized-companies-2026">AI governance policy for mid-sized companies</a>{' '}
        turn them into controls.
      </p>

      <h2 id="liability">Liability and indemnity</h2>
      <p>
        Mayer Brown&apos;s suggested principle is to align responsibility with control: the party that makes a
        decision carries more of the risk for it. If you insist on a model the developer advised against, expect
        relief for the developer when that model fails. If the developer chose the stack and designed the workflow, it
        should stand behind the result where better design or monitoring would have prevented the harm. The note also
        warns that caps set as a multiple of fees can be small next to the harm an agent acting at speed could cause,
        and that traditional IP indemnities may not cover claims arising from what an agent does. Two practical asks:
        caps that apply to both sides, and an indemnity for third-party IP claims on the code delivered to you.
      </p>
      <p>
        On the US side, the FTC&apos;s{' '}
        <a href={SRC.ftc} {...ext}>Operation AI Comply announcement of 25 September 2024</a> quoted Chair Lina M. Khan:
        &quot;there is no AI exemption from the laws on the books.&quot; That applies to what your agent tells your
        customers. Keep claims about the agent in your own marketing as careful as any other claim.
      </p>

      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg my-8">
        <h3 className="text-lg font-bold mb-3">See a demo on your own data before you sign</h3>
        <p className="mb-4">
          Send us one job you want an agent to do. We build a working version on a sample of your own records, so you
          can test it against your cases before any contract. FactoryJet quotes a fixed price in writing after a short
          scoping call. Founder replies within 24 hours.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors"
        >
          See a demo on my data
        </a>
      </div>

      <h2 id="ongoing-support">Ongoing support: four ways to structure it</h2>
      <p>
        Half of the buyer question is about support after launch, and it is the half the ranking pages say least
        about. Mayer Brown separates primary support (the developer runs, monitors and adapts the agent) from secondary
        support (the developer trains your team and handles escalations). Inside either, payment usually takes one of
        four shapes:
      </p>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li><strong>A standing monthly support plan.</strong> A set amount each month for an agreed scope of monitoring and changes.</li>
        <li><strong>Hourly billing per change.</strong> You ask for a change and pay for the hours it takes.</li>
        <li><strong>Each change quoted and approved.</strong> The developer describes and prices each change in writing; work starts only after you approve it.</li>
        <li><strong>AI and cloud bills passed through at cost.</strong> AI provider and cloud bills sit in your own accounts and you pay the providers directly, with no markup, whichever of the three above you choose for the people time.</li>
      </ol>
      <Table
        head={['Structure', 'Suits', 'Protects you from', 'Ask about']}
        rows={[
          ['Standing monthly plan', '500+ staff, or an agent that changes every week', 'Waiting in a queue when something breaks', 'What happens to unused time; how you leave the plan'],
          ['Hourly per change', 'Teams with their own technical lead who can scope work', 'Paying for capacity you do not use', 'Estimates before work starts; who approves overruns'],
          ['Quoted and approved per change', '10 to 50 and 50 to 500 person firms with occasional changes', 'Surprise bills; open-ended work', 'Turnaround time for a quote; how urgent fixes are handled'],
          ['Pass-through in your accounts', 'Any buyer', 'Markup on usage; losing access if the vendor goes', 'Which accounts are yours; who has admin rights'],
        ]}
      />
      <p>
        Whatever you pick, two lines belong in every AI contract. First, a defect cover period after launch, agreed
        before work starts, during which bugs in the delivered work are fixed inside the build price. Second, the right
        to change structure later: many companies start with changes quoted one by one and move to a monthly plan once
        they know their pace. A monthly minimum that starts before the agent is live is the term to question.
      </p>
      <figure className="my-8">
        <img src={`${IMG}/support.webp`}
          alt="A woman in a teal dress arranges four columns of blank orange and grey sticky notes on a whiteboard while a man in a denim shirt holding an orange marker listens from the table."
          width={1200}
          height={800}
          loading="lazy"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Four support structures, side by side: choose one in writing before launch, and keep the right to switch.
        </figcaption>
      </figure>
      <p>
        One example of the third and fourth structures together is how we work, set out in full in the FactoryJet
        section below. For a wider view of who should run the agent after launch, see{' '}
        <a href="/blog/ai-agency-vs-in-house-vs-freelancer-2026">AI agency vs in-house vs freelancer</a> and our{' '}
        <a href="/services/ai-agent-monitoring">AI agent monitoring</a> service.
      </p>

      <h2 id="sla">Service levels: what an AI service level agreement can and cannot promise</h2>
      <p>
        An AI service level agreement can promise what the developer controls: how fast someone responds, how fast a
        fix lands, and how often the agent is checked against your test set. It cannot honestly promise that every
        answer will be correct. Morgan Lewis part 1 describes contracts that commit to response times for critical
        errors while avoiding guarantees of specific outcomes; part 2 adds monitoring for outputs that drift away from
        expected results, with a duty to pause or fix the agent even when it is technically up.
      </p>
      <p>A workable AI SLA has five parts:</p>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li>Severity levels defined by business effect: agent down, agent wrong on money or customers, agent slow, cosmetic.</li>
        <li>A response time and a fix or workaround time for each level, set with your lawyer.</li>
        <li>An accuracy check against the evaluation set on a fixed schedule, with results shared with you.</li>
        <li>A named person on each side and a path for escalation.</li>
        <li>Your right to pause the agent, and what happens to the work it was doing while paused.</li>
      </ol>
      <figure className="my-8">
        <img src={`${IMG}/sla.webp`}
          alt="A monitor on a white desk shows an abstract support queue of grey bars in three groups led by orange, dark grey and light grey blocks, joined by thin lines to boxes on the right, beside an orange mug."
          width={1200}
          height={800}
          loading="lazy"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Severity first: each level gets its own response and fix time, and the most serious issues reach a person fastest.
        </figcaption>
      </figure>

      <h2 id="exit">Exit and handover</h2>
      <p>
        Mayer Brown notes that the operating knowledge of an agent lives in prompts, configurations, orchestration
        logic, evaluation sets, monitoring rules, runbooks and integration documents, and that without clear terms a
        company can find at exit that it lacks what it needs to run the agent. Its advice is to negotiate exit rights at
        signing, while you have the most bargaining power. The handover list:
      </p>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li>The code repository, transferred to your account with its full history.</li>
        <li>Prompts, system instructions and agent configurations.</li>
        <li>The evaluation set and the latest test results.</li>
        <li>Architecture notes, runbooks and support procedures in plain language.</li>
        <li>A list of every account, API key and sub-processor, with keys rotated on the last day.</li>
        <li>A data export in a format named in the contract (for example CSV or JSON), plus logs.</li>
        <li>A transition period during which the developer answers questions from you or your next provider.</li>
      </ol>
      <figure className="my-8">
        <img src={`${IMG}/handover.webp`}
          alt="A young man in a black hoodie hands a black security key across a desk to a woman with grey hair in a beige jacket and orange lanyard, beside a laptop showing a tree of grey boxes with one orange branch."
          width={1200}
          height={800}
          loading="lazy"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          A clean exit: the repository, the keys and the documents change hands, and the old logins stop working.
        </figcaption>
      </figure>

      <h2 id="us-uk-australia">US, UK and Australia: the rules that change the contract</h2>
      <p>
        The ownership default is the rule that most surprises buyers, and it differs by country. In all three, the fix
        is the same: a written assignment in the agreement for software development.
      </p>
      <Table
        head={['Country', 'Who owns commissioned code by default', 'Data rule to check', 'Read on']}
        rows={[
          [
            'United States',
            'Work made for hire covers commissioned work only in nine listed categories, with a signed written agreement; computer programs are not listed, so use a written assignment',
            'Sector and state privacy laws; FTC rules on AI claims',
            <a key="us" href={SRC.circ30} {...ext}>US Copyright Office Circular 30</a>,
          ],
          [
            'United Kingdom',
            'The creator is the first owner, not the commissioner, unless agreed in writing',
            'UK GDPR controller and processor roles; Article 28 processor terms',
            <a key="uk" href={SRC.ipo} {...ext}>UK IPO, ownership of copyright works</a>,
          ],
          [
            'Australia',
            'The contractor automatically owns the IP they create; the contract must say if the hirer owns it',
            'Privacy Act 1988 and the Australian Privacy Principles',
            <a key="au" href={SRC.bizgov} {...ext}>business.gov.au, prepare a contract</a>,
          ],
        ]}
      />
      <h3>United States</h3>
      <p>
        <a href={SRC.circ30} {...ext}>Circular 30</a> says a specially ordered or commissioned work is made for hire
        only if all four tests are met: it falls in one of nine categories (such as a contribution to a collective work,
        a translation, a compilation or a test), there is a written agreement, it expressly says the work is made for
        hire, and all parties sign it. If any test fails, it is not a work made for hire. Code written by your own
        employees within their regular duties is treated differently. For an outside developer, ask for an assignment
        of copyright in addition to any work-for-hire label.
      </p>
      <h3>United Kingdom</h3>
      <p>
        The <a href={SRC.ipo} {...ext}>UK IPO</a> says that when you commission someone to create a copyright work,
        &quot;the first legal owner of copyright is the person or organisation that created the work and not you the
        commissioner, unless you otherwise agree it in writing&quot;. It adds that courts may find an implied licence
        where the contract is silent, which does not necessarily transfer ownership. On data, the ICO pages above set the
        controller, processor and Article 28 rules; check both for updates under the Data (Use and Access) Act. See our{' '}
        <a href="/uk/ai-agents">AI agents for UK businesses</a> page for how we work with UK teams.
      </p>
      <h3>Australia</h3>
      <p>
        <a href={SRC.bizgov} {...ext}>business.gov.au</a> says that under IP laws the contractor automatically owns any
        IP they create, and if the hirer wants to own it, the contract must state this. On privacy, the{' '}
        <a href={SRC.oaic} {...ext}>OAIC&apos;s guidance on commercially available AI products</a> (published 21 October
        2024) says privacy obligations apply to personal information put into an AI system and to output that contains
        it, and asks businesses to check whether the product was tested for the use, how human oversight is built in,
        and who can access the data. As best practice it recommends not entering personal information, particularly
        sensitive information, into publicly available generative AI tools. More on hiring in Australia in{' '}
        <a href="/blog/hire-ai-developers-australia-cost-2026">hiring AI developers in Australia</a> and on our{' '}
        <a href="/au/ai-agents">AI agents for Australian businesses</a> page.
      </p>

      <h2 id="refuse">Eight clauses to refuse</h2>
      <p>
        Each of these is common in an AI vendor contract, and each one shifts a risk onto you that the developer is
        better placed to carry, or removes a right you will need later.
      </p>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li><strong>The vendor owns the prompts.</strong> They encode how your business works. Ask for ownership or a permanent licence.</li>
        <li><strong>Your data can train their product.</strong> Replace &quot;to improve our services&quot; with an express no-training promise.</li>
        <li><strong>API keys only in their account.</strong> You lose control of access and of the bills.</li>
        <li><strong>A monthly minimum before go-live.</strong> You pay for support on something that does not run yet.</li>
        <li><strong>No exit clause.</strong> Without a handover list, leaving means starting again.</li>
        <li><strong>Acceptance &quot;at the vendor&apos;s discretion&quot;.</strong> Acceptance should rest on your test set and your sign-off.</li>
        <li><strong>Liability caps that protect only them.</strong> Caps and exclusions should apply to both sides.</li>
        <li><strong>Automatic renewal without notice.</strong> Ask for written notice before any renewal and a simple way to end it.</li>
      </ol>
      <p>
        For the questions to ask before the contract stage, see{' '}
        <a href="/blog/questions-to-ask-ai-development-company-2026">questions to ask an AI development company</a> and{' '}
        <a href="/blog/how-to-hire-an-ai-agent-developer-2026">how to hire an AI agent developer</a>.
      </p>

      <h2 id="one-page-checklist">The one-page checklist: 14 yes or no questions</h2>
      <p>Print this and answer each line against the draft contract. Every &quot;no&quot; is a question for the developer.</p>
      <ol className="list-decimal pl-6 space-y-1 mb-6">
        <li>Is the code and repository assigned to us in writing?</li>
        <li>Are the prompts, instructions and evaluation set ours, or permanently licensed to us?</li>
        <li>Does the contract forbid training on our data, prompts, outputs and logs?</li>
        <li>Does it require return or deletion of every copy at the end, with written confirmation?</li>
        <li>Are the AI provider, cloud and repository accounts in our company name?</li>
        <li>Does it say who moves the agent to a new model, who retests, and who pays?</li>
        <li>Is acceptance based on an agreed test set and pass rate, signed off by us?</li>
        <li>Are sub-processors named, and is there an incident notice time?</li>
        <li>Are human approval steps and audit logs written in for named actions?</li>
        <li>Do liability caps and indemnities work for both sides?</li>
        <li>Is the support structure named, with a defect cover period agreed before work starts?</li>
        <li>Is every change described, quoted and approved in writing before work begins?</li>
        <li>Is there a handover list, a transition period and a data export format?</li>
        <li>Is the governing law one we can live with?</li>
      </ol>

      <h2 id="how-factoryjet-works">How FactoryJet&apos;s contracts handle this</h2>
      <p>
        We design, build and support custom AI agents, including integrations with Odoo, NetSuite, SAP Business One,
        ERPNext, Salesforce, HubSpot, Xero and WhatsApp. Our standard terms answer most of the checklist above:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>You own the code and the repository from day one.</li>
        <li>The AI and cloud accounts can run in your own name, at cost, with no markup.</li>
        <li>Defects are fixed inside the build price for a cover period we agree before work starts.</li>
        <li>Support is optional: each change is quoted and approved before we start it, and there is no monthly minimum.</li>
        <li>Each phase is scoped, priced and signed on its own.</li>
        <li>We show working software on your own data before you sign.</li>
      </ul>
      <p>
        If you would rather not run it yourselves, we can keep managing the servers, AI models and APIs so your team
        does not have to. FactoryJet quotes a fixed price in writing after a short scoping call. See{' '}
        <a href="/services/ai-agent-development">AI agent development</a> and{' '}
        <a href="/services/ai-consulting">AI consulting</a>. If you are still weighing build cost, read{' '}
        <a href="/blog/enterprise-ai-agent-cost-2026">what an enterprise AI agent costs</a> and{' '}
        <a href="/blog/ai-mvp-development-cost-2026">AI MVP development cost</a>.
      </p>

      <div className="bg-[#FAF8F5] border border-[#E5DFD7] rounded-xl p-6 my-10">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-3">More 2026 decision guides</p>
        <ul className="mb-0">
          <li><a href="/blog/ai-mvp-development-cost-2026">AI MVP development cost in 2026</a>: what a first AI product costs to build, by scope.</li>
          <li><a href="/blog/ai-agency-vs-in-house-vs-freelancer-2026">AI agency vs in-house engineer vs freelancer</a>: which to pick for your company size.</li>
          <li><a href="/blog/questions-to-ask-ai-development-company-2026">15 questions to ask an AI development company</a>: and the red flags in the answers.</li>
          <li><a href="/blog/why-ai-agent-projects-fail-2026">Why AI agent projects fail</a>: what the research found and how to avoid it.</li>
          <li><a href="/blog/copilot-studio-vs-custom-ai-agents-2026">Copilot Studio vs a custom AI agent</a>: pricing and when each wins.</li>
          <li><a href="/blog/enterprise-ai-agent-cost-2026">Enterprise AI agent cost in 2026</a>: build ranges and what drives them.</li>
        </ul>
      </div>

      <h2 id="sources">Sources</h2>
      <p className="text-sm text-gray-600">Pages opened and read on 18 October 2026.</p>
      <ul className="list-disc pl-6 space-y-1 text-sm mb-8">
        <li><a href={SRC.mayer} {...ext}>Mayer Brown, Key Contract Issues in Agentic AI Implementation and Integration Deals</a> (16 June 2026)</li>
        <li><a href={SRC.ml1} {...ext}>Morgan Lewis, Contracts for AI Agent Development and Implementation, Part 1</a> (September 2025)</li>
        <li><a href={SRC.ml2} {...ext}>Morgan Lewis, Contracts for AI Agent Development and Implementation, Part 2</a> (October 2025)</li>
        <li><a href={SRC.mlip} {...ext}>Morgan Lewis, Service Agreements: Who Should Own Developed Intellectual Property?</a> (November 2024)</li>
        <li><a href={SRC.circ30} {...ext}>US Copyright Office, Circular 30: Works Made for Hire</a></li>
        <li><a href={SRC.usco2} {...ext}>US Copyright Office, Copyright and Artificial Intelligence, Part 2: Copyrightability</a> (29 January 2025)</li>
        <li><a href={SRC.ipo} {...ext}>UK Intellectual Property Office, Ownership of copyright works</a></li>
        <li><a href={SRC.ico} {...ext}>ICO, What are controllers and processors?</a></li>
        <li><a href={SRC.ico28} {...ext}>ICO, What needs to be included in the contract?</a></li>
        <li><a href={SRC.bizgov} {...ext}>business.gov.au, Prepare a contract</a></li>
        <li><a href={SRC.oaic} {...ext}>OAIC, Guidance on privacy and the use of commercially available AI products</a> (21 October 2024)</li>
        <li><a href={SRC.ftc} {...ext}>FTC, FTC Announces Crackdown on Deceptive AI Claims and Schemes</a> (25 September 2024)</li>
        <li><a href={SRC.nist} {...ext}>NIST, AI Risk Management Framework</a></li>
        <li><a href={SRC.openai} {...ext}>OpenAI, Deprecations</a>; <a href={SRC.anthropic} {...ext}>Anthropic, Model deprecations</a>; <a href={SRC.google} {...ext}>Google Cloud, Model versions and lifecycle</a></li>
        <li><a href={SRC.orbilon} {...ext}>Orbilon, AI Development Contract: 8 Clauses B2B Buyers Need</a> (7 October 2026); <a href={SRC.lucent} {...ext}>Lucent Innovation, AI development contract checklist</a></li>
        <li>Our own research: Google results, People Also Ask and keyword volumes for the US, UK and Australia (DataForSEO), and 36 buyer questions across five AI assistants, all on 18 October 2026</li>
      </ul>

      <div className="bg-[#FAF8F5] border-2 border-[#E5DFD7] p-6 sm:p-8 rounded-xl my-10 shadow-sm">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-2">
          Before you sign an AI development agreement
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] mb-3">
          See a demo on your own data before you sign
        </h3>
        <p className="text-[#4B5563] text-base leading-relaxed mb-6">
          Tell us the job and the systems behind it. We show the agent working on your own records first, then send
          a fixed price in writing with the terms above. Founder replies within 24 hours.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors shadow-sm"
          >
            See a demo on my data
          </a>
          <a
            href="/services/ai-agent-development"
            className="inline-flex items-center gap-2 bg-white text-[#1F2937] border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            See AI agent development
          </a>
        </div>
      </div>

      <p className="text-sm text-gray-600">
        This is a buyer&apos;s checklist, not legal advice. Have a lawyer in your country review the contract.
      </p>
    </article>
  ),
};

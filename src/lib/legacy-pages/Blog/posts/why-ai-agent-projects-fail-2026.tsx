import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

/*
 * Why AI agent projects fail, and how to avoid it when you hire (2026). Written 18 Oct 2026.
 * Brief: pipeline/research/page-briefs/05-why-ai-agent-projects-fail-2026.md (sweep questions N31 and N13).
 * Target terms (DataForSEO Google Ads, 18 Oct 2026, US / UK): what percentage of ai projects fail 70/10,
 * what is a common reason for ai project failure 50, why do ai projects fail 40/10, why ai projects fail 30/10,
 * ai project failure rate 30/10, ai failure rate 30, how many ai projects fail 20/10, what percent of ai projects fail 20,
 * ai projects fail 20, mit ai projects fail 20, percentage of ai projects that fail 20, ai project failure 20,
 * ai pilot failure 20, why do multi agent llm systems fail 210 (Labs, KD 16).
 * PAA (18 Oct): "Is it true that 80% of AI projects fail?", "Is it true that 95% of AI projects don't make money?",
 * "Why does AI fail so much?", "What are the failure statistics for AI projects?", "What is the fail rate of AI?",
 * "Why do most AI projects fail?", "Why may 85% of your AI models fail?".
 * Every outside figure was read on its primary page on 18 Oct 2026 and is logged in the build sources.json.
 * Gartner pages and S&P Global were read in a browser (curl returns 403). RAND's 80 percent sentence contains a
 * dash, so it is paraphrased. HBR's article is behind a paywall: only its title, author and date are used.
 * No FactoryJet prices, no running-cost figures, no partner status, no team location, no invented rescue story.
 * The FAQ array below is the single source for both the visible FAQ and the FAQPage JSON-LD.
 */

const SRC = {
  gartner40: 'https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027',
  gartner50: 'https://www.gartner.com/en/articles/genai-project-failure',
  gartner85: 'https://www.gartner.com/en/newsroom/press-releases/2018-02-13-gartner-says-nearly-half-of-cios-are-planning-to-deploy-artificial-intelligence',
  mit: 'https://www.artificialintelligence-news.com/wp-content/uploads/2025/08/ai_report_2025.pdf',
  rand: 'https://www.rand.org/pubs/research_reports/RRA2680-1.html',
  sp: 'https://www.spglobal.com/market-intelligence/en/news-insights/research/ai-experiences-rapid-adoption-but-with-mixed-outcomes-highlights-from-vote-ai-machine-learning',
  ibm: 'https://www.ibm.com/think/insights/why-ai-projects-fail-science-experiment-trap',
  uq: 'https://business.uq.edu.au/momentum/why-80-per-cent-ai-projects-fail',
  hbr: 'https://hbr.org/2025/10/why-agentic-ai-projects-fail-and-how-to-set-yours-up-for-success',
  mast: 'https://arxiv.org/abs/2503.13657',
  nist: 'https://www.nist.gov/itl/ai-risk-management-framework',
  owasp: 'https://genai.owasp.org/llmrisk/llm062025-excessive-agency/',
  ico: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/what-are-the-accountability-and-governance-implications-of-ai/',
  oaic: 'https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products',
};

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;
const IMG = '/images/blog/why-ai-agent-projects-fail-2026';

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

const faqs: FAQItem[] = [
  {
    q: 'Why do most AI agent projects fail?',
    a: "Most fail before production, for business reasons more than technical ones. RAND's 65 interviews found the most common cause is a misunderstood or miscommunicated problem. Gartner's agentic AI forecast names escalating costs, unclear business value and inadequate risk controls. In agent projects we add two more: no human approval step for risky actions, and no test set, so nobody can tell whether a change made the agent better or worse.",
  },
  {
    q: 'What percentage of AI projects fail?',
    a: "There is no single measured number. The best measured figure is S&P Global's 2025 survey of 1,006 IT and business staff in North America and Europe: on average, organizations said 46% of projects are scrapped between proof of concept and broad adoption, and 42% of companies abandoned most of their AI initiatives before production, up from 17% a year earlier. RAND cites estimates of more than 80%, but did not measure that itself.",
  },
  {
    q: 'Is it true that 80% of AI projects fail?',
    a: "It is an estimate that RAND reports and did not measure. RAND's August 2024 report says that by some estimates more than 80 percent of AI projects fail, twice the rate of IT projects without AI, and footnotes the claim to other sources. RAND's own work was 65 interviews about root causes. The University of Queensland's Dr Evan Shellshear uses the same 80% figure from a literature review in his book with Doug Gray.",
  },
  {
    q: "Is it true that 95% of AI projects don't make money?",
    a: "Only in part. MIT NANDA's July 2025 report says 95% of organizations are getting zero return from generative AI, and that just 5% of integrated pilots extract millions in value. It counts organizations rather than projects, and covers generative AI broadly rather than AI agents. The sample was 52 interviews, 153 survey responses and 300+ public initiatives, and the authors call their figures directionally accurate.",
  },
  {
    q: 'Where does the "Gartner 85% of AI projects fail" figure come from?',
    a: "We traced it to a Gartner press release of 13 February 2018. It says Gartner predicts that through 2022, 85 percent of AI projects will deliver erroneous outcomes due to bias in data, algorithms or the teams responsible for managing them. That was a prediction about wrong outputs over the following five years, and it counted no canceled projects. We found no Gartner page that says 85% of AI projects fail.",
  },
  {
    q: 'What did Gartner say about agentic AI projects being canceled?',
    a: "On 25 June 2025 Gartner predicted that over 40% of agentic AI projects will be canceled by the end of 2027, due to escalating costs, unclear business value or inadequate risk controls. It is a forecast. The 3,412-person Gartner poll in the same release measured investment plans: 19% had made significant investments in agentic AI and 42% conservative ones. Nobody has measured the 2027 outcome yet.",
  },
  {
    q: 'What is a common reason for AI project failure?',
    a: "A fuzzy problem. RAND's report says misunderstandings and miscommunications about the intent and purpose of a project are the most common reasons AI projects fail. In practice that looks like an agent built to answer every customer question instead of one job, such as order status, with a number that says whether it worked. Data the agent cannot reach is the second most common cause we see.",
  },
  {
    q: 'Why does AI fail so much?',
    a: "Because a demo is easy and production is hard. A model can answer well on ten hand-picked examples and still fail on the messy cases: an invoice in an odd format, a customer who changes their mind, a record missing in the ERP. Gartner's January 2026 article lists five failure points: lack of business value, data that is not ready, escalating total cost of ownership, responsible AI as an afterthought, and poor change management.",
  },
  {
    q: 'What is agent washing?',
    a: "Agent washing is Gartner's term for rebranding existing products, such as AI assistants, robotic process automation and chatbots, as AI agents without real agentic capability. In its June 2025 release Gartner estimated that only about 130 of the thousands of agentic AI vendors are real. Before you buy, ask the vendor to show the agent deciding and acting in your own systems, not following a fixed script.",
  },
  {
    q: 'Do AI projects fail more often than normal IT projects?',
    a: "By the estimates RAND cites, yes: more than 80 percent of AI projects fail, about twice the rate of IT projects that do not involve AI. Treat that as a widely quoted estimate rather than a measured fact. The structural reason is real: an AI project has every risk a normal software project has, plus the risk that the model gives a wrong answer on inputs nobody tested.",
  },
  {
    q: 'Is it safer to buy an AI tool or have one built?',
    a: "MIT NANDA's sample found external partnerships reached deployment about 67% of the time against about 33% for internal builds, roughly twice the rate. The report itself warns that this correlation does not necessarily prove causation, because firms that buy may differ in other ways. Our reading: buy when a product does the job as sold; have it built when the job crosses your own systems.",
  },
  {
    q: 'Why do AI pilots work in the demo and fail in production?',
    a: "Most AI pilot failure comes from the gap between sample data and real data. A demo runs on clean, chosen examples. Production brings scanned PDFs, missing fields, edge cases and users who phrase things differently. Gartner's 2025 release says most agentic AI projects are early-stage experiments or proofs of concept driven by hype, which can blind organizations to the real cost and complexity of deploying agents at scale.",
  },
  {
    q: 'How do I know if my AI pilot has failed?',
    a: "Check five things. Can anyone name the one job it was meant to do? Can it reach the live data it needs? Is there a written pass mark and a set of test cases? Are the intended users choosing to use it? Has it run past its agreed end date with no decision? Two or more answers going the wrong way means the pilot has stalled, whatever the status report says.",
  },
  {
    q: 'Can a failed AI pilot be rescued?',
    a: "Often, if the job was worth doing and the data exists. A pilot that failed on scope, missing tests or a weak connection to your systems can usually be fixed with a narrower first phase. A pilot that failed because the problem was too hard for current models, or because nobody needed it, should be stopped. The kill, fix or restart table on this page walks through the decision.",
  },
  {
    q: 'Who fixes AI projects that never made it to production?',
    a: "Usually one of three groups: the original vendor with a new scope and a written pass mark, an internal team that takes over the code, or a new AI development firm. Whichever you pick, ask them to review the code, data access and test results first, then quote a fixed first phase. FactoryJet reviews a stalled project the same way it scopes a new one, and shows working software on your own data before you sign.",
  },
  {
    q: 'Should we restart with a different vendor?',
    a: "Restart with someone new when the original vendor holds the code or keys, cannot explain why the pilot failed, or wants more money without a written test of success. Stay if they can show what went wrong and propose a smaller, testable next phase. Either way, make sure you own the repository, the prompts and the model accounts before any new work starts.",
  },
  {
    q: 'How long should an AI pilot run before we decide?',
    a: "Set the end date before it starts. For one narrow job, such as triaging inbound emails or matching invoices, six to twelve weeks on live data is usually enough to see whether it passes your test set. MIT NANDA measured return six months after the pilot. What matters most is a kill date written into the plan, so the pilot cannot drift on with no decision.",
  },
  {
    q: 'Why do multi-agent LLM systems fail?',
    a: "A Berkeley-led paper, Why Do Multi-Agent LLM Systems Fail? (Cemri and others, arXiv, revised October 2025), studied 1,600+ traces across 7 frameworks and found 14 failure modes in 3 groups: system design issues, misalignment between agents, and weak task verification. In plain terms, agents get unclear roles, talk past each other, and nobody checks the final answer. Start with one agent unless the job needs more.",
  },
  {
    q: "How do I choose an AI vendor that won't fail?",
    a: "Ask for a demo on your own data, not their sample. Ask how they test the agent and what the written pass mark is. Ask who owns the code, the prompts and the model accounts. Ask which actions need a human to approve them. Ask for a fixed price per phase and an exit clause. A vendor who will not answer these in writing is a risk.",
  },
  {
    q: 'What should the contract say to protect us from a failed AI project?',
    a: "Five things: acceptance tests written into the contract, with the test cases attached; ownership of code, prompts and data in your name from day one; model and cloud accounts in your name or transferable; phased fixed prices, so you can stop after any phase; and an exit clause covering handover of everything built. Our AI agent development contract checklist covers the wording in more detail.",
  },
  {
    q: 'How do you test an AI agent so it does not fail after launch?',
    a: "Build an evaluation set: 50 to 200 real past cases with the correct outcome for each, including the awkward ones. Run the agent against it before launch and after every change, and track the pass rate. Log every live action so a person can review it. NIST's AI Risk Management Framework, released 26 January 2023, gives a structure for this testing and governance work.",
  },
  {
    q: 'Do small and mid-sized companies fail at AI more than big ones?',
    a: "The research does not answer that cleanly. MIT NANDA found big firms lead in pilot volume but lag in scale-up. A company with 10 to 50 staff or 50 to 500 staff usually has fewer systems and a shorter approval chain, which helps, but less spare time to test, which hurts. The fix is the same at every size: one job, your data, a written pass mark.",
  },
  {
    q: 'Are AI failure rates different in the UK or Australia?',
    a: "We could not find a measured figure for either. S&P Global's 2025 sample covered North America and Europe, so it includes European firms but reports no UK-only number. The University of Queensland's 80% figure comes from a literature review, not an Australian survey. The rules differ more than the rates: UK buyers answer to the ICO under UK GDPR, Australian buyers to the OAIC.",
  },
  {
    q: 'What is the AI project failure rate in 2026?',
    a: "No study has published a 2026 measured rate yet. The latest primary figures are S&P Global's May 2025 survey (42% of companies abandoning most AI initiatives before production; 46% of projects scrapped between proof of concept and broad adoption) and Gartner's January 2026 finding that at least 50% of generative AI projects were abandoned after proof of concept by the end of the previous year.",
  },
  {
    q: 'Can we see the agent work on our data before we commit?',
    a: "With FactoryJet, yes. We show working software on your own data before you sign, so you judge the agent on your real emails, invoices or tickets rather than a sample. After a short scoping call, FactoryJet quotes a fixed price in writing, and each phase is scoped, priced and signed on its own. Founder Bhavesh Barot replies to enquiries within 24 hours.",
  },
];

export const post: BlogPost = {
  id: '779',
  slug: 'why-ai-agent-projects-fail-2026',
  title: 'Why AI Agent Projects Fail: 7 Causes and How to Avoid Them (2026)',
  excerpt:
    'Why most AI agent projects stall before production, what Gartner, MIT, RAND and S&P Global actually measured, where the 80%, 85% and 95% figures come from, and how to choose a vendor, write a contract and decide whether to kill, fix or restart a failed AI pilot.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Oct 18, 2026',
  dateModified: 'Oct 18, 2026',
  readTime: '17 min read',
  imageUrl: `${IMG}/hero.webp`,
  imageAlt:
    'In a brick-walled meeting room, a man in a charcoal sweater points at a wall screen where a row of grey boxes breaks off before an orange box, while a red-haired woman and an older man in a tan cardigan listen at a wooden table.',
  meta: {
    title: 'Why AI Agent Projects Fail: 7 Causes and Fixes (2026)',
    description:
      'Why most AI agent projects stall before production, what Gartner, MIT, RAND and S&P Global actually found, and how to pick a vendor and contract that avoid it.',
  },
  keyTakeaways: [
    'S&P Global (May 2025, 1,006 respondents in North America and Europe): 42% of companies abandoned most of their AI initiatives before production, up from 17% a year earlier, and on average 46% of projects were scrapped between proof of concept and broad adoption.',
    'Gartner (25 June 2025) predicts over 40% of agentic AI projects will be canceled by the end of 2027, due to escalating costs, unclear business value or inadequate risk controls. It is a forecast; nobody has measured the 2027 outcome yet.',
    'RAND (August 2024) cites estimates that more than 80% of AI projects fail, about twice the rate of non-AI IT projects, and names a misunderstood problem as the most common root cause.',
    'MIT NANDA (July 2025) found 95% of organizations getting zero return from generative AI. It measured organizations and generative AI in general, not AI agent projects.',
    'The "Gartner 85%" figure is a February 2018 prediction that 85% of AI projects would deliver erroneous outcomes through 2022. It was never a measured failure rate.',
    'Most failures are decided before the build starts: one narrow job, live data access, a written pass mark, human approval on risky actions and a kill date prevent most of them.',
    'A failed pilot is worth fixing when the job matters, the data exists and the gap is scope or testing; it should be stopped when the problem is too hard for current models or nobody uses it.',
  ],
  faqs,
  content: (
    <article>
      {/* Answer-first block */}
      <div className="bg-white border-2 border-[#E5DFD7] rounded-xl p-6 sm:p-8 mb-10">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-3">The short answer</p>
        <p className="text-lg leading-relaxed mb-0">
          Most AI agent projects fail before they ever reach production. S&amp;P Global found 42% of companies
          abandoned most of their AI initiatives before production in 2025, up from 17% a year earlier. The usual causes
          are a vague job, data the agent cannot reach, no agreed test of good enough, and nobody owning the agent after
          launch.
        </p>
      </div>

      <div className="bg-[#FAF8F5] border-l-4 border-[#B23E13] p-5 rounded-r-lg mb-6">
        <p className="text-sm text-[#1F2937] leading-relaxed mb-0">
          <strong>We build custom AI agents, so weigh this page with that in mind.</strong>{' '}
          Every outside figure links to the page we read it on, and each was re-read on 18 October 2026. Where a widely
          quoted number does not say what people think it says, we quote what the source does say.
        </p>
      </div>

      <div className="bg-white border border-[#E5DFD7] p-5 rounded-lg mb-10">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-2">How we made this page</p>
        <p className="text-sm text-[#1F2937] leading-relaxed mb-0">
          On 18 October 2026 we read the top 10 Google results and the People Also Ask questions for the main searches
          (&quot;why do ai projects fail&quot;, &quot;why ai agent projects fail&quot;, &quot;ai project failure
          rate&quot;) in the US, UK and Australia, using DataForSEO. The same day we asked 36 buyer questions across
          ChatGPT, Gemini, Claude, Perplexity and Google&apos;s AI answers, and read the pages they cited. Then we
          opened each primary source (Gartner, MIT NANDA, RAND, S&amp;P Global, NIST, the ICO and the OAIC) and copied
          the exact wording.
        </p>
      </div>

      <p>
        People type the question many ways: &quot;why do AI projects fail&quot;, &quot;what percentage of AI projects
        fail&quot;, &quot;how many AI projects fail&quot;, &quot;what percent of AI projects fail&quot;, &quot;AI project
        failure rate&quot;, &quot;MIT AI projects fail&quot;. When we asked ChatGPT,
        Claude and the others why AI agent projects fail, they went looking for three names: Gartner, MIT and RAND. Most
        pages that rank quote at least one of the three, and several quote them in ways the source does not support.
        This guide gives each figure with its exact wording, what it measured and who it sampled. Then it covers the
        seven causes behind most failures, the vendor-side causes nobody likes to name, a 10-point checklist for hiring,
        and what to do when your pilot has already stalled.
      </p>
      <p>
        It is written for buyers at companies of 10 to 50 staff, 50 to 500 and 500+ in the US, UK and Australia who are
        about to hire an AI development firm in 2026, or who already did and are looking at a pilot that never shipped.
      </p>

      <h2 id="research">What percentage of AI projects fail? What the research says, and what it does not</h2>
      <p>
        Four sources do most of the work in every article on this topic. Here is what each one says, word for word
        where we can quote it, and what it measured.
      </p>
      <Table
        head={['Source', 'What it says', 'What it measured', 'Use it as']}
        rows={[
          [
            <a key="sp" href={SRC.sp} {...ext}>S&amp;P Global, Voice of the Enterprise: AI &amp; ML Use Cases 2025 (30 May 2025)</a>,
            'Companies "abandoning the majority of their AI initiatives before they reach production" rose "from 17% to 42% year over year"; on average "46% of projects are scrapped between proof of concept and broad adoption".',
            'A survey of 1,006 midlevel and senior IT and line-of-business professionals across North America and Europe.',
            'The best measured AI project failure rate. Name the sample region.',
          ],
          [
            <a key="g40" href={SRC.gartner40} {...ext}>Gartner press release (25 June 2025)</a>,
            '"Over 40% of agentic AI projects will be canceled by the end of 2027, due to escalating costs, unclear business value or inadequate risk controls."',
            'A prediction. The 3,412-person poll in the same release measured how much firms had invested, not cancellations.',
            'A forecast about agentic AI. It measures no failure rate.',
          ],
          [
            <a key="g50" href={SRC.gartner50} {...ext}>Gartner article by Arun Chandrasekaran (26 January 2026)</a>,
            '"At least 50% of generative AI projects were abandoned after proof of concept due to poor data quality, inadequate risk controls, escalating costs or unclear business value."',
            'Gartner says it analyzed hundreds of generative AI implementations. It does not publish the sample.',
            'Generative AI after proof of concept, as of the end of 2025.',
          ],
          [
            <a key="mit" href={SRC.mit} {...ext}>MIT NANDA, The GenAI Divide: State of AI in Business 2025 (July 2025)</a>,
            '"95% of organizations are getting zero return." External partnerships reached deployment "~67% of the time, compared to ~33% for internally built tools".',
            '52 interviews, 153 survey responses and 300+ public initiatives. Success meant deployment beyond pilot with measurable KPIs, 6 months after the pilot. The authors call the figures "directionally accurate".',
            'Generative AI in general, counted by organization. Not "95% of pilots fail".',
          ],
          [
            <a key="rand" href={SRC.rand} {...ext}>RAND, RR-A2680-1 (13 August 2024)</a>,
            'RAND writes that, by some estimates, more than 80 percent of AI projects fail, which it puts at twice the failure rate of IT projects without AI.',
            "65 interviews with data scientists and engineers with at least five years of experience. The 80% is other sources' estimate, footnoted.",
            'Five root causes, measured. Write "RAND cites estimates of more than 80%".',
          ],
        ]}
      />
      <p>
        So what is the real AI failure rate? The honest answer for 2026 is a range of measured and predicted figures,
        each about a different thing. If you need one number for the percentage of AI projects that fail, for a board paper, use S&amp;P Global&apos;s: 46% of
        projects scrapped between proof of concept and broad adoption, from 1,006 respondents. It was measured, it says
        who was asked, and it describes the stage where most agent projects die.
      </p>

      <h3 id="misquotes">Three figures people quote that the sources do not support</h3>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li>
          <strong>&quot;Gartner says 85% of AI projects fail.&quot;</strong> The only Gartner source we found is a{' '}
          <a href={SRC.gartner85} {...ext}>press release of 13 February 2018</a>, which predicted that through 2022, 85
          percent of AI projects would deliver erroneous outcomes due to bias in data, algorithms or the teams managing
          them. It forecast wrong outputs, five years out. It did not count failed projects.
        </li>
        <li>
          <strong>&quot;MIT says 95% of AI pilots fail.&quot;</strong> MIT NANDA says 95% of organizations are getting
          zero return from generative AI. It counts organizations, it is about generative AI broadly, and success meant
          measurable P&amp;L impact six months after the pilot.
        </li>
        <li>
          <strong>&quot;RAND found 80% of AI projects fail.&quot;</strong> RAND reports that estimate from other sources
          and footnotes it. What RAND measured is why projects fail, from 65 interviews.
        </li>
      </ol>

      <figure className="my-8">
        <img
          src={`${IMG}/research.webp`}
          alt="A man with curly greying hair and round glasses in an olive sweater compares two thick printed reports at a desk, holding an orange highlighter."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Read what each study measured before you quote its headline number.
        </figcaption>
      </figure>

      <h2 id="seven-causes">Why do most AI projects fail? Seven causes behind AI agent failures</h2>
      <p>
        The first five come from RAND&apos;s root causes, which held up across its 65 interviews. The last two are
        specific to AI agents, which act in your systems rather than only answering questions. Each one is decided
        before or during the build, which is the useful news: the buyer can prevent most of them.
      </p>
      <ol className="list-decimal pl-6 space-y-4 mb-6">
        <li>
          <strong>The problem is fuzzy.</strong> This is the most common reason for AI project failure. RAND says misunderstandings and miscommunications about the intent and
          purpose of a project are the most common reasons AI projects fail. An agent briefed to &quot;handle customer
          service&quot; has no finish line. An agent briefed to answer &quot;where is my order&quot; from Shopify and the
          carrier&apos;s tracking data, with a target share of tickets closed without a person, does.
        </li>
        <li>
          <strong>The data is missing, messy or locked away.</strong> RAND&apos;s second cause is lacking the data to
          train an effective model. For agents the usual version is access: the stock level lives in NetSuite, the price
          rules in a spreadsheet, the customer history in HubSpot, and the agent can reach only one of them. Gartner&apos;s
          2026 article lists data that is not ready as failure point number two.
        </li>
        <li>
          <strong>The technology came first.</strong> RAND&apos;s third cause is focusing on the latest technology over
          the user&apos;s problem. Gartner makes the same point about agents: &quot;Many use cases positioned as agentic
          today don&apos;t require agentic implementations.&quot; If a fixed workflow or a simple integration does the
          job, an agent adds risk without adding value.
        </li>
        <li>
          <strong>There is nowhere to run it.</strong> RAND&apos;s fourth cause is weak infrastructure to manage data and
          deploy models. For an agent that means logging, access control, secrets management, a staging copy of your
          systems to test against, and somebody watching it in production.
        </li>
        <li>
          <strong>The task is too hard for current models.</strong> RAND&apos;s fifth cause. Some jobs need judgment a
          model cannot give reliably: a disputed insurance claim, a contract negotiation, a safety decision on a factory
          line. An agent can prepare the work. A person should decide.
        </li>
        <li>
          <strong>No human approval step on risky actions.</strong> An agent that can issue a refund, post a journal
          entry or email a customer can do damage at speed. OWASP&apos;s{' '}
          <a href={SRC.owasp} {...ext}>2025 Top 10 for LLM applications</a> calls this Excessive Agency and recommends
          human-in-the-loop control so a person approves high-impact actions before they happen. Projects without that
          step tend to be shut down after the first expensive mistake.
        </li>
        <li>
          <strong>No evaluation set, so nobody can tell if a change helped.</strong> An evaluation set is a fixed list of
          real past cases with the right answer for each. Without one, every prompt tweak or model upgrade is a guess,
          quality drifts, and trust drains away until users quietly stop using the agent.
        </li>
      </ol>

      <figure className="my-8">
        <img
          src={`${IMG}/data-gap.webp`}
          alt="A woman with long black hair in a grey fleece vest looks at a monitor showing a diagram of grey boxes and one orange box, beside a tall stack of paper forms and an orange stapler, a warehouse visible through the window."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          The second cause in practice: the data the agent needs sits in systems and paper it cannot reach.
        </figcaption>
      </figure>

      <p>
        Other ranking pages group causes differently. IBM&apos;s{' '}
        <a href={SRC.ibm} {...ext}>October 2025 piece by Neil Dhar</a> calls it the science experiment trap and cites
        IBM&apos;s 2025 CEO Study: just 16% of AI initiatives have achieved scale at the enterprise level. The University
        of Queensland&apos;s <a href={SRC.uq} {...ext}>interview with Dr Evan Shellshear</a> names the two biggest causes
        as not building a need for the project inside the organisation, and not having the right data in the right
        place at the right quality. Informatica, LexisNexis and Cutter also rank for &quot;why do AI projects fail&quot;
        in the US with their own lists. The causes overlap more than the numbering suggests.
      </p>

      <h2 id="vendor-causes">Which causes sit with the vendor?</h2>
      <p>
        Research reports describe failure from the buyer&apos;s side. When a firm is hired to build the agent, four more
        causes show up, and each is visible before you sign.
      </p>
      <Table
        head={['Vendor-side cause', 'What it looks like', 'What to ask for instead']}
        rows={[
          ['Demo on sample data only', "A polished demo on the vendor's own examples; your data first appears after the contract", 'A demo on a sample of your own emails, invoices or tickets before you sign'],
          ['Nobody owns production', 'The build team leaves at launch; no named person watches errors or user feedback', 'A named owner after launch and a written support option, priced per change'],
          ["Keys and code in the vendor's accounts", "The repository, model API keys and cloud accounts sit in the vendor's name", 'Code, prompts and accounts in your name from day one'],
          ['Agent washing', 'A chatbot or RPA script sold as an agent', 'A live run where the agent reads your data, decides and acts, with logs'],
        ]}
      />
      <p>
        Agent washing is Gartner&apos;s term. Its <a href={SRC.gartner40} {...ext}>June 2025 release</a> defines it as
        the rebranding of existing products, such as AI assistants, robotic process automation and chatbots, without
        substantial agentic capabilities, and estimates that only about 130 of the thousands of agentic AI vendors are
        real. Our guide to <a href="/blog/questions-to-ask-ai-development-company-2026">questions to ask an AI
        development company</a> turns these four causes into interview questions.
      </p>

      <figure className="my-8">
        <img
          src={`${IMG}/vendor-demo.webp`}
          alt="A young presenter in a black t-shirt stands by a wall display of grey cards and orange bars while a woman with auburn hair sits with arms folded and an older bald man leans forward, an orange bottle on the table."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          A demo on the vendor&apos;s own sample data tells you little about how the agent will handle yours.
        </figcaption>
      </figure>

      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg my-8">
        <h3 className="text-lg font-bold mb-3">See a demo on your own data before you sign</h3>
        <p className="mb-4">
          Send us the one job you want an agent to do and a handful of real examples. We will show it working on your
          own data before you sign anything, and FactoryJet quotes a fixed price in writing after a short scoping call.
          Founder replies within 24 hours.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors"
        >
          See a demo on my data
        </a>
      </div>

      <h2 id="checklist">How do you avoid AI project failure when you hire? A 10-point checklist</h2>
      <p>
        S&amp;P Global found that organizations with lower failure rates were more likely to weigh compliance, risk and
        data availability when choosing projects. This checklist turns that into ten things to settle in writing before
        the build starts.
      </p>
      <ol className="list-decimal pl-6 space-y-3 mb-6">
        <li><strong>One job.</strong> Name a single task with a start and an end, such as &quot;match supplier invoices to purchase orders in Xero&quot;.</li>
        <li><strong>Your data in the demo.</strong> The vendor runs the agent on a sample of your real records before you sign.</li>
        <li><strong>A written pass mark.</strong> For example: 90% of the test cases handled correctly, the rest handed to a person with a reason.</li>
        <li><strong>An evaluation set.</strong> 50 to 200 real past cases with the right outcome for each, rerun after every change.</li>
        <li><strong>Human approval on money and customer actions.</strong> Refunds, payments, journal entries and outbound emails wait for a person to approve.</li>
        <li><strong>Logs of every action.</strong> What the agent read, what it decided and what it did, kept where your team can read them.</li>
        <li><strong>Phased fixed prices.</strong> Each phase scoped, priced and signed on its own, so you can stop after any phase.</li>
        <li><strong>Code and keys in your name.</strong> Repository, prompts, model API keys and cloud accounts belong to you from day one, which settles data ownership.</li>
        <li><strong>A named owner after launch.</strong> One person on your side and one on the vendor&apos;s side, with a support option you can choose or decline.</li>
        <li><strong>An exit clause and a kill date.</strong> A handover of everything built if you part ways, and a date when the pilot is judged against the pass mark.</li>
      </ol>
      <p>
        Points 7 to 10 belong in the contract itself. Our{' '}
        <a href="/blog/ai-agent-development-contract-checklist-2026">AI agent development contract checklist</a> covers
        the clauses. For the governance side, our{' '}
        <a href="/blog/ai-agent-governance-policy-mid-sized-companies-2026">AI agent governance policy guide</a> and{' '}
        <a href="/blog/ai-agent-security-risks-controls-2026">AI agent security risks and controls</a> go deeper. If
        you have not yet checked whether your data and team are ready, start with the{' '}
        <a href="/blog/ai-readiness-assessment-checklist-mid-sized-companies-2026">AI readiness assessment checklist</a>.
      </p>

      <figure className="my-8">
        <img
          src={`${IMG}/contract.webp`}
          alt="At a desk, a woman with braided hair in a mustard cardigan points an orange pen at a printed agreement while a man with a grey crew cut in a white shirt and dark tie holds a second page."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Acceptance tests, ownership and an exit clause belong in the signed contract.
        </figcaption>
      </figure>

      <h3 id="testing">What a written pass mark looks like</h3>
      <p>
        A pass mark is only useful if anyone can check it. Write it as three numbers: the share of test cases the agent
        must handle correctly, the share it may hand to a person, and the share of wrong actions you will accept (for
        anything touching money, zero, because a person approves first). Run it on the evaluation set before launch and
        again every time the prompt, the model or a connected system changes. NIST&apos;s{' '}
        <a href={SRC.nist} {...ext}>AI Risk Management Framework</a>, released 26 January 2023, and its Generative AI
        Profile (NIST-AI-600-1, 26 July 2024) give a free structure for this testing and governance work that US, UK and
        Australian firms can all use.
      </p>

      <figure className="my-8">
        <img
          src={`${IMG}/eval-dashboard.webp`}
          alt="An abstract testing dashboard with a column of grey rows ending in orange or grey squares, a bar chart with two orange bars and a partly filled orange progress track."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          An evaluation run: each row is a real past case, each square a pass or a miss.
        </figcaption>
      </figure>

      <h2 id="kill-fix-restart">Your AI pilot already failed: should you kill it, fix it or restart?</h2>
      <p>
        AI pilot failure is common enough that S&amp;P Global could average it: 46% of projects scrapped between proof
        of concept and broad adoption. A stalled pilot needs a decision. Answer these five questions
        honestly and the answer usually picks itself.
      </p>
      <Table
        head={['Question', 'If yes', 'If no']}
        rows={[
          ['Was the job clear and is it still worth doing?', 'Keep going to the next question', 'Kill it. No amount of engineering fixes a job nobody needs'],
          ['Can the agent reach the live data it needs?', 'Fix: the data path works', 'Fix if a connection or API can be built; kill if the data does not exist'],
          ['Is there a test set and a written pass mark?', 'Fix: you can measure the gap', 'Fix: build the evaluation set first, then judge the pilot against it'],
          ['Did the intended users adopt it?', 'Fix the accuracy and widen it', 'Restart with the users in the room, starting from their real workflow'],
          ['Is fixing cheaper than starting over?', 'Fix with the current code', 'Restart, and keep the evaluation set and lessons from the first attempt'],
        ]}
      />
      <p>
        Two signs point straight to a restart with someone new: the original vendor holds your code or keys and will not
        hand them over, or nobody can explain why the pilot missed. Two signs point to stopping altogether: RAND&apos;s
        fifth cause (the task is too hard for current models) and Gartner&apos;s point that many use cases positioned as
        agentic do not need an agent at all.
      </p>

      <figure className="my-8">
        <img
          src={`${IMG}/kill-fix-restart.webp`}
          alt="Three people stand at a white wall board sorting blank orange, grey and white sticky notes into three loose columns."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Sort the stalled work into kill, fix and restart before anyone writes more code.
        </figcaption>
      </figure>

      <h3 id="rescue">Who fixes AI projects that never made it to production?</h3>
      <p>
        When we asked the assistants who rescues a failed AI pilot, few of the pages they cited dealt with rescue at all;
        tkxel.com&apos;s page on failed AI pilot recovery was one. The work itself follows a set order, whoever does it:
      </p>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li>Collect what exists: the repository, prompts, model and cloud accounts, test results and user feedback.</li>
        <li>Rerun the agent on a fresh sample of your real cases and record where it fails.</li>
        <li>Sort each failure into scope, data, testing or adoption, using the table above.</li>
        <li>Agree one narrow first phase with a written pass mark and a kill date.</li>
        <li>Fix or rebuild that phase, test it against the evaluation set, then widen the scope.</li>
      </ol>
      <p>
        A rescue with FactoryJet starts the same way as a new build. FactoryJet quotes a fixed price in writing after a
        short scoping call, each phase is scoped, priced and signed on its own, and we show working software on your own
        data before you sign. Our <a href="/services/ai-consulting">AI consulting</a> service covers the review, and our{' '}
        <a href="/blog/ai-proof-of-concept-to-production-2026">guide to taking an AI proof of concept to production</a>{' '}
        covers scoping the next attempt.
      </p>

      <h2 id="departments">Where do AI agents fail by department?</h2>
      <p>
        The same seven causes show up differently in each team. These are the patterns to check for in the four places
        mid-sized companies most often start.
      </p>
      <Table
        head={['Department', 'Typical failure', 'What prevents it']}
        rows={[
          [<a key="cs" href="/services/ai-customer-support-agents">Customer service</a>, 'The agent answers from an out-of-date help center, or cannot hand a frustrated customer to a person with context', 'A live link to orders and tracking, a clear handoff rule, and test cases drawn from real tickets in Zendesk, Gorgias or your help desk'],
          [<a key="ap" href="/services/accounts-payable-automation">Finance and accounts payable</a>, 'The agent posts entries or approves invoices with no person checking, and one mismatch erodes trust', 'Human approval before anything posts to Xero, NetSuite or SAP Business One, and logs of every match'],
          [<a key="so" href="/services/sales-order-automation-ai-agents">Sales and order entry</a>, 'Purchase orders arrive as PDFs, emails and EDI, and the agent was only tested on one format', 'An evaluation set covering every format customers send, and a person approving orders over a set value'],
          [<a key="ops" href="/services/erp-ai-agents">Operations and procurement</a>, 'Stock, prices and supplier data live in an ERP the agent cannot reach, so it guesses', 'A read connection to Odoo, NetSuite or ERPNext first, and write access only after the reads pass testing'],
        ]}
      />
      <p>
        For worked examples by team, see our guides to{' '}
        <a href="/blog/ai-agents-for-customer-service-mid-sized-companies-2026">AI agents for customer service</a>,{' '}
        <a href="/blog/ai-agents-for-finance-accounting-teams-2026">AI agents for finance and accounting teams</a> and{' '}
        <a href="/blog/ai-agents-for-procurement-supply-chain-2026">AI agents for procurement and supply chain</a>.
      </p>

      <figure className="my-8">
        <img
          src={`${IMG}/approval-queue.webp`}
          alt="A white-haired man in rimless glasses and a pale pink shirt reviews rows of grey bars with orange and grey squares on a monitor, an orange mug beside a tray of invoices."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          In finance, a person approves before anything posts. Agents without that step rarely survive their first error.
        </figcaption>
      </figure>

      <h3 id="multi-agent">Why do multi-agent LLM systems fail?</h3>
      <p>
        Some vendors pitch a team of agents that hand work to each other. A paper led by University of California,
        Berkeley researchers, <a href={SRC.mast} {...ext}>Why Do Multi-Agent LLM Systems Fail?</a> (Cemri and 12 others,
        arXiv, revised 26 October 2025), annotated more than 1,600 traces across 7 popular frameworks and sorted the
        failures into 14 modes in 3 groups: system design issues, misalignment between agents, and weak task
        verification. In plain words, agents get unclear roles, talk past each other, and nobody checks the final
        result. Start with one agent and one job unless the work splits into separate jobs. Our guide to{' '}
        <a href="/blog/multi-agent-workflows-langgraph-n8n-enterprise-erp-2026">multi-agent workflows with LangGraph and n8n</a>{' '}
        covers when more than one is worth it.
      </p>

      <h2 id="uk-au">What changes for UK and Australian buyers?</h2>
      <p>
        The failure research is mostly American and European. S&amp;P Global sampled North America and Europe. RAND
        wrote for the US Department of Defense and others. We could not find a measured AI project failure rate for the
        UK or Australia alone. The University of Queensland&apos;s 80% comes from a literature review in a book, and
        Canon Business Services Australia&apos;s page ranked first in Google Australia for &quot;why ai projects fail&quot;
        on 18 October 2026.
      </p>
      <p>
        What does change is the regulator. In the UK, the ICO&apos;s{' '}
        <a href={SRC.ico} {...ext}>guidance on accountability and governance in AI</a> says the accountability principle
        makes you responsible for complying with data protection law, and for demonstrating it, in any AI system that
        processes personal data; it calls a data protection impact assessment (DPIA) an ideal way to show that under UK
        GDPR. In Australia, the OAIC&apos;s{' '}
        <a href={SRC.oaic} {...ext}>guidance on commercially available AI products</a> (published 21 October 2024,
        updated 17 January 2025) says organisations should do due diligence, including how human oversight can be
        embedded and who will have access to personal information. Both line up with points 5, 6 and 8 of the checklist
        above. When the AI services and servers run in your own cloud account, you choose the region, including the UK or the EU. See our{' '}
        <a href="/uk/ai-agents">UK AI agents</a> and <a href="/au/ai-agents">Australian AI agents</a> pages.
      </p>

      <h2 id="what-ranks">What else ranks for &quot;why do AI projects fail&quot;</h2>
      <p>
        These pages ranked on Google&apos;s first page or were cited by AI assistants for this topic on 18 October 2026
        (DataForSEO and our own assistant runs). We list them so you can read them alongside this guide.
      </p>
      <Table
        head={['Page', 'Where it showed up', 'What it covers']}
        rows={[
          ['rand.org, The Root Causes of Failure for Artificial Intelligence Projects', 'Number 1 in Google US for "why do ai projects fail"', 'Five root causes from 65 interviews'],
          ['business.canon.com.au, Why AI projects fail', 'Number 1 in Google Australia for "why ai projects fail"', 'Written for Australian businesses by Canon Business Services Australia'],
          ['hbr.org, Why Agentic AI Projects Fail (Anushree Verma, 21 October 2025)', 'Number 1 in Google US for "why ai agent projects fail"', 'Written by the Gartner analyst quoted in the 40% release'],
          ['gartner.com, Why 50% of GenAI Projects Fail', 'Top 4 in Google Australia', 'Five failure points for generative AI'],
          ['ibm.com, the science experiment trap', 'Top 10 in Google US and Australia', 'Silos and scale, with IBM CEO Study figures'],
          ['softermii.com, beam.ai, tkxel.com', 'Cited by AI assistants for agent failure and rescue questions', 'Agent failure patterns, partner checklists and pilot recovery'],
        ]}
      />
      <p>
        What this guide adds: each headline figure checked against its primary source on the day, the origin of the
        Gartner 85% figure, a kill, fix or restart decision table, and the contract terms that stop the vendor-side
        causes.
      </p>

      <h2 id="how-factoryjet-works">How FactoryJet keeps agent projects out of the 42%</h2>
      <p>
        We design, build and support custom AI agents for companies of 10 to 50 staff, 50 to 500 and 500+, and connect
        them to the systems they work in: Odoo, NetSuite, SAP Business One, ERPNext and custom ERPs, Salesforce,
        HubSpot, Xero, EDI and WhatsApp. The terms below exist because of the causes above.
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>We show working software on your own data before you sign.</li>
        <li>You own the code and the repository from day one.</li>
        <li>The AI and cloud accounts can run in your own name, at cost, with no markup.</li>
        <li>Defects are fixed inside the build price for a cover period agreed before work starts.</li>
        <li>Each phase is scoped, priced and signed on its own.</li>
        <li>Support is optional: each change is quoted and approved, with no monthly minimum.</li>
      </ul>
      <p>
        See <a href="/services/ai-agent-development">AI agent development</a> and{' '}
        <a href="/services/ai-agent-monitoring">AI agent monitoring</a>. If you are weighing the budget, our{' '}
        <a href="/blog/enterprise-ai-agent-cost-2026">enterprise AI agent cost guide</a> covers market build ranges, and{' '}
        <a href="/blog/copilot-studio-vs-custom-ai-agents-2026">Copilot Studio vs custom AI agents</a> covers when a
        Microsoft tool is the smaller project.
      </p>

      <div className="bg-[#FAF8F5] border border-[#E5DFD7] rounded-xl p-6 my-10">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-3">More 2026 decision guides</p>
        <ul className="mb-0">
          <li><a href="/blog/ai-mvp-development-cost-2026">AI MVP development cost in 2026</a>: what a first AI product costs to build, by scope.</li>
          <li><a href="/blog/ai-agency-vs-in-house-vs-freelancer-2026">AI agency vs in-house engineer vs freelancer</a>: which to pick for your company size.</li>
          <li><a href="/blog/questions-to-ask-ai-development-company-2026">15 questions to ask an AI development company</a>: and the red flags in the answers.</li>
          <li><a href="/blog/ai-agent-development-contract-checklist-2026">AI agent development contract checklist</a>: 14 clauses on data, ownership and support.</li>
          <li><a href="/blog/copilot-studio-vs-custom-ai-agents-2026">Copilot Studio vs a custom AI agent</a>: pricing and when each wins.</li>
          <li><a href="/blog/enterprise-ai-agent-cost-2026">Enterprise AI agent cost in 2026</a>: build ranges and what drives them.</li>
        </ul>
      </div>

      <h2 id="sources">Sources</h2>
      <p className="text-sm text-gray-600">Every page below was opened and read on 18 October 2026.</p>
      <ul className="list-disc pl-6 space-y-1 text-sm mb-8">
        <li><a href={SRC.sp} {...ext}>S&amp;P Global Market Intelligence, AI experiences rapid adoption, but with mixed outcomes: Highlights from VotE: AI &amp; Machine Learning</a> (30 May 2025)</li>
        <li><a href={SRC.gartner40} {...ext}>Gartner, Gartner Predicts Over 40% of Agentic AI Projects Will Be Canceled by End of 2027</a> (25 June 2025)</li>
        <li><a href={SRC.gartner50} {...ext}>Gartner, Why 50% of GenAI Projects Fail, Arun Chandrasekaran</a> (26 January 2026)</li>
        <li><a href={SRC.gartner85} {...ext}>Gartner, Gartner Says Nearly Half of CIOs Are Planning to Deploy Artificial Intelligence</a> (13 February 2018)</li>
        <li><a href={SRC.mit} {...ext}>MIT NANDA, The GenAI Divide: State of AI in Business 2025</a> (July 2025, PDF copy)</li>
        <li><a href={SRC.rand} {...ext}>RAND, The Root Causes of Failure for Artificial Intelligence Projects and How They Can Succeed, RR-A2680-1</a> (13 August 2024)</li>
        <li><a href={SRC.ibm} {...ext}>IBM, Why AI projects fail: The science experiment trap, Neil Dhar</a> (23 October 2025)</li>
        <li><a href={SRC.uq} {...ext}>University of Queensland Business School, Question the hype: why 80% of AI projects fail</a></li>
        <li><a href={SRC.hbr} {...ext}>Harvard Business Review, Why Agentic AI Projects Fail, Anushree Verma</a> (21 October 2025; title, author and date only)</li>
        <li><a href={SRC.mast} {...ext}>Cemri and others, Why Do Multi-Agent LLM Systems Fail?, arXiv 2503.13657</a> (v3, 26 October 2025)</li>
        <li><a href={SRC.owasp} {...ext}>OWASP Gen AI Security Project, LLM06:2025 Excessive Agency</a></li>
        <li><a href={SRC.nist} {...ext}>NIST, AI Risk Management Framework</a></li>
        <li><a href={SRC.ico} {...ext}>ICO, What are the accountability and governance implications of AI?</a></li>
        <li><a href={SRC.oaic} {...ext}>OAIC, Guidance on privacy and the use of commercially available AI products</a> (updated 17 January 2025)</li>
        <li>Our own measurement: Google results, People Also Ask and search volumes in the US, UK and Australia (DataForSEO), and 36 buyer questions asked across five AI assistants, 18 October 2026</li>
      </ul>

      <div className="bg-[#FAF8F5] border-2 border-[#E5DFD7] p-6 sm:p-8 rounded-xl my-10 shadow-sm">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-2">
          New agent or stalled pilot
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] mb-3">
          See a demo on your own data before you sign
        </h3>
        <p className="text-[#4B5563] text-base leading-relaxed mb-6">
          Tell us the job, the systems behind it and, if there was a first attempt, what happened. We will show the agent
          working on your own data before you commit, and FactoryJet quotes a fixed price in writing after a short
          scoping call. Founder replies within 24 hours.
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
    </article>
  ),
};

import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';
import GatedDownload from '@/components/blog/GatedDownload';

/*
 * AI readiness assessment for mid-sized companies, with a gated 25-question scorecard (US, 2026). Written 18 Oct 2026.
 * Target terms (DataForSEO, US, 17 Oct 2026): ai readiness 880/mo KD 27, ai readiness assessment 720 KD 13 $31.59,
 * what is ai readiness 70, ai readiness framework 70, ai readiness checklist 50, ai readiness audit 40, ai readiness score 20.
 * PAA (18 Oct): "What is an AI readiness assessment?", "What are the five pillars of AI readiness?", "How to measure AI
 * readiness?", "What does AI-ready mean?", "What are the five levels of AI maturity?", "What is the AI readiness
 * assessment framework?".
 * Gated download: public/downloads/ai-readiness-assessment-scorecard.docx, built by
 * pipeline/research/build_readiness_scorecard_2026_10_18.py.
 * Outside facts come only from pages opened on 17 Oct 2026 (RAND, Gartner, NIST). No FactoryJet prices, no running-cost
 * figures, no team location. The FAQ array below is the single source for the visible FAQ and FAQPage JSON-LD.
 */

const SRC = {
  rand: 'https://www.rand.org/pubs/research_reports/RRA2680-1.html',
  gartner30: 'https://www.gartner.com/en/newsroom/press-releases/2024-07-29-gartner-predicts-30-percent-of-generative-ai-projects-will-be-abandoned-after-proof-of-concept-by-end-of-2025',
  nistRmf: 'https://www.nist.gov/itl/ai-risk-management-framework',
};

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;
const IMG = '/images/blog/ai-readiness-assessment-checklist-mid-sized-companies-2026';

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
    q: 'What is an AI readiness assessment?',
    a: 'An AI readiness assessment checks whether a company can put AI to work on a specific job now: whether the data exists and can be reached, whether the systems have usable APIs, whether the process has written rules and an owner, whether people will use and review it, and whether rules exist for what the AI may do. It ends with a score, the gaps, and the first job worth trying.',
  },
  {
    q: 'What are the five pillars of AI readiness?',
    a: 'We use data, systems, process, people and governance. Data asks whether the records exist and can be pulled. Systems asks whether your ERP, CRM or help desk has an API and can give the AI its own account. Process asks whether one job has volume, rules and a clear trigger. People asks who owns it. Governance asks what the AI may never do and how it is logged and switched off.',
  },
  {
    q: 'How do you measure AI readiness?',
    a: 'Score specific, checkable statements rather than general feelings. Our scorecard has 25 statements, five per pillar, each scored 0 (no), 1 (partly) or 2 (yes, with evidence today), for a total out of 50. Any pillar under 4 out of 10 is a warning on its own, because one weak pillar can stop a project that looks strong elsewhere.',
  },
  {
    q: 'What does AI-ready mean for a business?',
    a: 'It means a company can take one repeated job, give an AI the data and system access it needs under clear limits, test it on real past cases, and have someone own the result. It does not mean having a data lake, an AI team or a company-wide strategy. Most mid-sized companies are AI-ready for one or two jobs well before they are ready for many.',
  },
  {
    q: 'What is an AI readiness checklist?',
    a: 'A list of yes or no checks to run before starting an AI project: can we export the records, does the system have an API, can we create a limited service account, are the rules written down, is there an owner, do we know what the AI may never do. Our free scorecard turns those checks into 25 scored statements.',
  },
  {
    q: 'What is an AI readiness framework?',
    a: 'A structure for checking readiness across the areas that decide whether AI works: usually data, technology, process, people and governance. NIST\'s AI Risk Management Framework groups the work into Govern, Map, Measure and Manage. A framework is only useful if it ends in a decision about a specific job, not a general maturity label.',
  },
  {
    q: 'What are the levels of AI maturity?',
    a: 'Models differ, but a common five-step version runs from unaware, to exploring, to experimenting with pilots, to operating at least one AI system with an owner, to scaling the pattern across teams. Most mid-sized companies sit between exploring and experimenting. The step that matters is moving one job into production with logs and an owner.',
  },
  {
    q: 'Why do AI projects fail if the company was not ready?',
    a: 'RAND\'s 2024 report found the most common root cause is misunderstanding what problem the AI should solve, followed by missing data, chasing technology, weak infrastructure and problems too hard for AI. Gartner cited poor data quality, inadequate risk controls, escalating costs and unclear business value for generative AI projects abandoned after proof of concept. A readiness check catches most of these before money is spent.',
  },
  {
    q: 'How long does an AI readiness assessment take?',
    a: 'Our scorecard takes about 30 minutes with the person who owns the job you want to automate. A fuller assessment by an outside team, which also checks your systems\' APIs and pulls sample data, takes longer because someone has to actually test access. Either way, it should end with one named job and the gaps to close.',
  },
  {
    q: 'How much does an AI readiness assessment cost?',
    a: 'Our scorecard is free. Paid assessments vary by scope; Layer3 Labs, in its AI consulting pricing guide updated 9 September 2026, puts a workflow discovery engagement at $2,000 to $5,000. That is a market range, not a FactoryJet price. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    q: 'Do we need clean data before using AI?',
    a: 'You need reachable data for the job you pick, not a company-wide clean-up. If you can pull 50 to 200 real past cases of that job, including the messy ones, you can test whether AI handles them. Many document and email jobs work on messy data because reading messy input is exactly what the AI does well.',
  },
  {
    q: 'What is the first thing to fix if our AI readiness score is low?',
    a: 'The lowest pillar. If data scores low, start by getting exports or API access for one job. If process scores low, write down the rules for one job with examples. If governance scores low, decide what the AI may never do and who owns it. Fixing one pillar for one job usually takes weeks, not months.',
  },
  {
    q: 'Can a small or mid-sized company be AI-ready without an AI team?',
    a: 'Yes. You need a process owner who knows the job, someone who can connect systems through APIs (in-house or a vendor), and leadership agreement on what success looks like. Model expertise matters less than integration and testing, which is why many mid-sized companies keep the process owner in-house and hire the engineering.',
  },
  {
    q: 'Is there a free AI readiness assessment?',
    a: 'Yes. This page offers a free, editable AI readiness scorecard: 25 statements in five pillars with a scoring guide and result bands. Some software vendors also offer free assessments focused on their own products, which are useful if you already know you will use that product.',
  },
  {
    q: 'What is the difference between AI readiness and digital transformation?',
    a: 'Digital transformation is the broad move of a business onto digital systems and processes. AI readiness is narrower: whether a specific AI use can work now on the systems and data you already have. A company can be partway through digital transformation and still be ready for AI on one well-defined job.',
  },
  {
    q: 'Who should take part in an AI readiness assessment?',
    a: 'The person who owns the job you want to automate, someone who knows the systems and their access, and the person who will approve going to production. For governance questions, add whoever handles data and security. Keep it small: three or four people who can answer from evidence, not opinion.',
  },
  {
    q: 'What comes after an AI readiness assessment?',
    a: 'If the score is good for one job, a proof of concept on your own past cases with a pass mark agreed in advance. If one pillar is weak, fix it for that job first. Either way, write the governance rules before any pilot touches live work.',
  },
  {
    q: 'How often should we reassess AI readiness?',
    a: 'Before each new AI job, and whenever a major system changes, such as a new ERP or CRM. Readiness is per job and per system, so a company that scored well for order entry may score differently for customer service. Re-running the scorecard takes half an hour.',
  },
  {
    q: 'Does AI readiness include security?',
    a: 'Yes, under governance and systems: whether the AI can have its own limited account, whether permissions are enforced in the target system, whether actions are logged, and whether someone can switch it off. Our AI agent security guide covers the specific risks OWASP lists for agents.',
  },
  {
    q: 'What does FactoryJet do in an AI readiness assessment?',
    a: 'We go through the five pillars with your job owner, test API access to the systems involved, pull a sample of past cases, and tell you whether AI can do the job now, what to fix first, or whether a tool you can buy already does it. We show working software on your own data before you sign anything bigger.',
  },
];

export const post: BlogPost = {
  id: '772',
  slug: 'ai-readiness-assessment-checklist-mid-sized-companies-2026',
  title: 'AI Readiness Assessment for Mid-Sized Companies: A 25-Question Scorecard (2026)',
  excerpt:
    'A practical AI readiness assessment for companies of 100 to 2,000 people: five pillars (data, systems, process, people, governance), 25 scored statements, result bands, what to fix first, and a free editable scorecard to download.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Oct 18, 2026',
  dateModified: 'Oct 18, 2026',
  readTime: '13 min read',
  imageUrl: `${IMG}/hero.webp`,
  imageAlt:
    'A grey-haired woman in a green blazer marks a large printed sheet on a standing table while a bearded man in a blue shirt and a woman with a black bob holding an orange clipboard look on.',
  meta: {
    title: 'AI Readiness Assessment: 25-Question Scorecard (2026)',
    description:
      'AI readiness assessment for mid-sized companies: five pillars, 25 scored questions, result bands, what to fix first. Free editable scorecard.',
  },
  keyTakeaways: [
    'Assess readiness for one job, not the whole company. Most mid-sized companies are ready for one or two jobs long before they are ready for many.',
    'Five pillars decide it: data, systems, process, people and governance.',
    'Score checkable statements 0, 1 or 2. Any pillar under 4 out of 10 is a warning on its own, whatever the total.',
    'RAND found the most common cause of AI project failure is misunderstanding the problem; Gartner cited poor data quality among the reasons generative AI projects were abandoned after proof of concept.',
    'You need reachable data for the job you pick, not a company-wide data clean-up.',
    'A good score leads to a proof of concept on your own past cases; a low pillar tells you exactly what to fix first.',
    'Download the free 25-question scorecard on this page and complete it in about 30 minutes with the job owner.',
  ],
  faqs,
  content: (
    <article>
      {/* Answer-first block */}
      <div className="bg-white border-2 border-[#E5DFD7] rounded-xl p-6 sm:p-8 mb-10">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-3">The short answer</p>
        <p className="text-lg leading-relaxed mb-0">
          An <strong>AI readiness assessment</strong> checks whether your company can put AI to work on one specific job
          now. Score five pillars (data, systems, process, people and governance) with checkable statements, look for
          any pillar that scores low, and end with a decision: start a proof of concept, fix one gap first, or pick a
          different job.
        </p>
      </div>

      <div className="bg-[#FAF8F5] border-l-4 border-[#B23E13] p-5 rounded-r-lg mb-10">
        <p className="text-sm text-[#1F2937] leading-relaxed mb-0">
          <strong>We design, build and support custom AI agents, so weigh this page with that in mind.</strong> The
          scorecard is ours and free to adapt. Outside facts come from RAND, Gartner and NIST pages opened on 17 October
          2026. Search figures are our own DataForSEO measurement for the US on the same day.
        </p>
      </div>

      <p>
        About 720 people a month in the US search for &quot;ai readiness assessment&quot;, and another 880 for &quot;ai
        readiness&quot; (DataForSEO, 17 October 2026). Many of the assessments they find are long surveys that end in a
        maturity label such as &quot;exploring&quot; or &quot;emerging&quot;. A label does not tell an operations lead
        what to do on Monday. This guide uses a narrower question: <strong>is this company ready to put AI on this
        job?</strong>
      </p>

      <h2 id="why">Why readiness decides whether AI projects survive</h2>
      <p>
        RAND interviewed 65 experienced data scientists and engineers for its{' '}
        <a href={SRC.rand} {...ext}>August 2024 report</a> and found five leading root causes of AI project failure:
        misunderstanding the problem, missing data, chasing technology over the user&apos;s problem, weak infrastructure,
        and problems too hard for AI. Gartner&apos;s{' '}
        <a href={SRC.gartner30} {...ext}>July 2024 prediction</a> that at least 30% of generative AI projects would be
        abandoned after proof of concept cited poor data quality, inadequate risk controls, escalating costs and unclear
        business value. Nearly every item on both lists can be checked before a project starts. That is what a readiness
        assessment is for.
      </p>

      <h2 id="pillars">The five pillars of AI readiness</h2>
      <Table
        head={['Pillar', 'The question', 'A failing sign']}
        rows={[
          ['Data', 'Can we pull real past cases of this job, including the messy ones?', 'The records live in inboxes, paper or one person\'s head'],
          ['Systems', 'Do our systems have usable APIs, and can the AI get its own limited account?', 'The only way in is a shared admin login'],
          ['Process', 'Does the job have volume, written rules, a clear trigger and catchable mistakes?', '"It depends" with no examples'],
          ['People', 'Is there a named owner, and will the team help test and review?', 'Three teams each own a part of it'],
          ['Governance', 'Do we know what the AI may never do, how it is logged and who can stop it?', 'Nobody has decided who approves go-live'],
        ]}
      />
      <p>
        NIST&apos;s <a href={SRC.nistRmf} {...ext}>AI Risk Management Framework 1.0</a> groups the same work into four
        functions (Govern, Map, Measure, Manage). The five pillars are a practical way to run those checks for one job.
      </p>

      <h2 id="checklist">The checklist: 25 statements, scored 0, 1 or 2</h2>
      <p>Score each line 0 (no, or we do not know), 1 (partly) or 2 (yes, with evidence today).</p>
      <h3 id="data">Data</h3>
      <ol className="list-decimal pl-6 space-y-1 mb-4">
        <li>The records the AI would need exist in digital form for at least the last six months.</li>
        <li>Someone can export or query them without a manual clean-up project.</li>
        <li>The same customer, product or supplier has one ID across our main systems, or a cross-reference exists.</li>
        <li>We know which data is personal, financial or confidential, and where it lives.</li>
        <li>We could pull 50 to 200 real past cases of the job, including awkward ones, within a week.</li>
      </ol>
      <h3 id="systems">Systems</h3>
      <ol className="list-decimal pl-6 space-y-1 mb-4">
        <li>Our ERP, CRM or help desk has a documented API we are licensed to use.</li>
        <li>We can create a separate service account with limited permissions in each system.</li>
        <li>We know which system is the source of truth for prices, stock, customers and orders.</li>
        <li>Our main systems are not due to be replaced in the next 12 months.</li>
        <li>We have, or can open, a cloud account where an AI service and its logs could run in our name.</li>
      </ol>
      <h3 id="process">Process</h3>
      <ol className="list-decimal pl-6 space-y-1 mb-4">
        <li>We can name one job our team repeats at least dozens of times a week.</li>
        <li>Its rules are written down, or one person can explain them in an hour with examples.</li>
        <li>We know how long the job takes today and how often it goes wrong.</li>
        <li>A mistake can be caught by a person before it reaches a customer or the books.</li>
        <li>The job starts from a clear trigger: an email, a form, a file or a schedule.</li>
      </ol>
      <h3 id="people">People</h3>
      <ol className="list-decimal pl-6 space-y-1 mb-4">
        <li>One named person will own the result of the first AI project.</li>
        <li>The people who do the job will help pick test cases and review results.</li>
        <li>Someone, in-house or a vendor, can connect systems through APIs and fix what breaks.</li>
        <li>Leadership has agreed what result would justify going to production.</li>
        <li>Staff have a way to flag a wrong AI answer and see it fixed.</li>
      </ol>
      <h3 id="governance">Governance</h3>
      <ol className="list-decimal pl-6 space-y-1 mb-6">
        <li>We have decided which actions an AI may never take alone (payments, deletions, contract terms).</li>
        <li>We know which model providers may receive our data, and under which account.</li>
        <li>Every AI action can be logged and searched by order, ticket or invoice number.</li>
        <li>Someone can switch the AI off, and another team can do the work by hand meanwhile.</li>
        <li>We will re-test the AI on our own cases whenever the model or instructions change.</li>
      </ol>

      <figure className="my-8">
        <img
          src={`${IMG}/pillar-scores.webp`}
          alt="Seen over his shoulder, a man with glasses in a navy cardigan looks at a monitor showing five horizontal bars, four grey and one orange, an orange notebook by the keyboard."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Read the pillars side by side. The lowest bar is where to start, whatever the total.
        </figcaption>
      </figure>

      <h2 id="results">Reading your score</h2>
      <Table
        head={['Total out of 50', 'What it usually means', 'Next step']}
        rows={[
          ['40 to 50', 'Ready for a first proof of concept on the job you named', 'Pull the past cases and agree a pass mark'],
          ['25 to 39', 'Ready in parts; one or two pillars will slow you down', 'Fix the lowest pillar, or pick a job that avoids it'],
          ['0 to 24', 'Not ready for an agent yet; simpler automation may still fit', 'Start with data access and written rules for one job'],
        ]}
      />
      <p>
        <strong>Any pillar under 4 out of 10 is a warning on its own.</strong> A company can score 38 overall and still
        stall because governance scored 2: nobody agreed who approves go-live, so the pilot never ends.
      </p>

      <div id="scorecard" />
      <GatedDownload
        fileHref="/downloads/ai-readiness-assessment-scorecard.docx"
        fileName="AI-Readiness-Assessment-Scorecard-FactoryJet.docx"
        source="download_ai_readiness_scorecard"
        eyebrow="Free scorecard"
        heading="AI Readiness Assessment Scorecard"
        body="An editable Word document with all 25 statements, a scoring guide, pillar totals and the result bands. Fill it in with the person who owns the job you want to automate."
        contents={[
          '25 statements in five pillars: data, systems, process, people, governance',
          'Scoring guide, pillar totals and a results table',
          'Result bands with the next step for each',
          'Notes on why each pillar matters, with sources',
          'Takes about 30 minutes to complete',
        ]}
        formatNote="Word (.docx), opens in Microsoft Word, Google Docs and Pages."
      />

      <h2 id="fix-first">What to fix first, pillar by pillar</h2>
      <Table
        head={['Low pillar', 'Fix for one job', 'Usually takes']}
        rows={[
          ['Data', 'Get an export or API access for the records that job uses; pull 50 to 200 past cases', 'Days to a few weeks'],
          ['Systems', 'Create a limited service account; confirm the API covers the fields you need', 'Days'],
          ['Process', 'Write the rules down with ten worked examples, including exceptions', 'A week'],
          ['People', 'Name one owner and agree what result would justify production', 'One meeting'],
          ['Governance', 'Decide the never-allowed actions, logging and who can switch it off', 'A week, with our template'],
        ]}
      />
      <p>
        The governance fix is quickest with our free{' '}
        <a href="/blog/ai-agent-governance-policy-mid-sized-companies-2026">AI agent governance policy template</a>, and
        the security side of the systems pillar is covered in our{' '}
        <a href="/blog/ai-agent-security-risks-controls-2026">AI agent security guide</a>.
      </p>

      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg my-8">
        <h3 className="text-lg font-bold mb-3">Want a second opinion on your score?</h3>
        <p className="mb-4">
          Bring your completed scorecard and the job you have in mind. In a 30-minute call with founder Bhavesh Barot we
          will tell you whether AI can do that job now, what to fix first, or whether a tool you can buy already does it.
          FactoryJet quotes a fixed price in writing after that call, and we show working software on your own data
          before a contract.
        </p>
        <a
          href="https://calendly.com/bhavesh-factoryjet/30min"
          {...ext}
          className="inline-block bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors"
        >
          Talk to the Founder
        </a>
      </div>

      <h2 id="after">After the assessment</h2>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li>Pick the job that scored best, not the one that sounds most impressive. Ideas by team: <a href="/blog/ai-agents-for-finance-accounting-teams-2026">finance</a>, <a href="/blog/ai-agents-for-procurement-supply-chain-2026">procurement</a> and <a href="/blog/agentic-ai-in-manufacturing-use-cases-2026">manufacturing</a>.</li>
        <li>Run a <a href="/blog/ai-proof-of-concept-to-production-2026">proof of concept</a> on your own past cases with a pass mark agreed in advance.</li>
        <li>Decide whether to rent the agent in software you already use or build one, using our guide to <a href="/blog/enterprise-ai-agents-mid-sized-companies-buy-or-build-2026">enterprise AI agents for mid-sized companies</a>.</li>
        <li>Sketch how it connects to your systems with our <a href="/blog/agentic-ai-architecture-mid-sized-companies-2026">agentic AI architecture guide</a>.</li>
      </ol>

      <h2 id="how-factoryjet-works">How FactoryJet runs an AI readiness assessment</h2>
      <p>
        We go through the five pillars with your job owner, test API access to the systems involved, pull a sample of
        past cases and tell you straight whether AI can do the job now. We design, build, implement and support custom
        AI agents, and you own what we build. FactoryJet quotes the build, and any support you choose, as fixed prices
        in writing after a short scoping call.
      </p>
      <p>
        See <a href="/services/ai-consulting">AI consulting</a>,{' '}
        <a href="/services/ai-agent-development">AI agent development</a> and{' '}
        <a href="/services/ai-integration-services">AI integration services</a>.
      </p>

      <h2 id="sources">Sources</h2>
      <p className="text-sm text-gray-600">All pages opened and read on 17 October 2026.</p>
      <ul className="list-disc pl-6 space-y-1 text-sm mb-8">
        <li><a href={SRC.rand} {...ext}>RAND, The Root Causes of Failure for Artificial Intelligence Projects and How They Can Succeed</a> (13 August 2024)</li>
        <li><a href={SRC.gartner30} {...ext}>Gartner, Gartner Predicts 30% of Generative AI Projects Will Be Abandoned After Proof of Concept By End of 2025</a> (29 July 2024)</li>
        <li><a href={SRC.nistRmf} {...ext}>NIST, AI Risk Management Framework</a> (AI RMF 1.0 released 26 January 2023)</li>
        <li>Our own measurement: US search volumes and Google &quot;People also ask&quot; questions, DataForSEO, 17 and 18 October 2026</li>
      </ul>

      <div className="bg-[#FAF8F5] border-2 border-[#E5DFD7] p-6 sm:p-8 rounded-xl my-10 shadow-sm">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-2">
          AI readiness review for mid-sized US companies
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] mb-3">
          Find out whether AI can take your job on now, and see it working on your data
        </h3>
        <p className="text-[#4B5563] text-base leading-relaxed mb-6">
          Name one job your team repeats every week. We will check the five pillars for it and tell you what to fix first,
          or build a demo on your own sample files before any contract. FactoryJet quotes a fixed price in writing after a
          short scoping call.
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
            href="/services/ai-consulting"
            className="inline-flex items-center gap-2 bg-white text-[#1F2937] border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            See AI consulting
          </a>
        </div>
      </div>
    </article>
  ),
};

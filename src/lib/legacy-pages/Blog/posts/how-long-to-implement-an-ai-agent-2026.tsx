import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

const SLUG = 'how-long-to-implement-an-ai-agent-2026';
const PAGE_URL = `https://factoryjet.com/blog/${SLUG}`;
const IMG = `/images/blog/${SLUG}`;
const TITLE = 'How Long Does It Take to Implement an AI Agent? Timelines From 11 Firms Compared (2026)';
const META_DESCRIPTION =
  'A pilot AI agent takes 2 to 6 weeks and a production agent 6 to 12. We compared timelines from 11 firms by agent type, plus what slows a project down.';

// Every timeline below was read on the publisher's own page on 24 October 2026
// and each quote was matched word for word against the live page text. Every
// publisher sells what it is timing; the `type` column says so. Gartner and
// RAND figures were read on their own pages the same day.
interface Timeline {
  publisher: string;
  type: string;
  url: string;
  scope: string;
  figure: string;
}

const TIMELINES: Timeline[] = [
  { publisher: 'Braincuber Technologies', type: 'Agent development firm', url: 'https://www.braincuber.com/blog/how-long-does-ai-take-to-implement-honest-timeline', scope: 'Pilot, production MVP, enterprise rollout', figure: 'Pilot 2 weeks; production MVP 8 weeks; enterprise 12 to 18 months' },
  { publisher: 'Attract Group', type: 'Agent development firm', url: 'https://attractgroup.com/blog/how-to-choose-ai-agent-development-company/', scope: 'Proof of concept, production with integrations, multi-agent', figure: 'Proof of concept 2 to 4 weeks; production 6 to 12 weeks; multi-agent 3 to 6 months' },
  { publisher: 'The Pedowitz Group', type: 'Consultancy', url: 'https://www.pedowitzgroup.com/how-long-does-it-take-to-implement-ai-agents', scope: 'Pilot, production, multi-workflow program', figure: 'Pilot 2 to 6 weeks; production 6 to 12 weeks; program 3 to 6 months' },
  { publisher: 'Master of Code Global', type: 'Agent development firm', url: 'https://masterofcode.com/ai-pilot', scope: 'Fixed-budget pilot tested with real users', figure: '30 days' },
  { publisher: 'Anyreach', type: 'Agent platform vendor', url: 'https://blog.anyreach.ai/how-long-does-agentic-ai-implementation-take-for-enterprises/', scope: 'Enterprise proof of concept and production', figure: 'Proof of concept 4 to 6 weeks; production 3 to 6 months' },
  { publisher: 'Klevere AI', type: 'Agent development firm', url: 'https://www.klevere.ai/blog/how-long-to-deploy-ai-agent-small-business', scope: 'First custom agent for a small or mid-sized business', figure: '3 to 8 weeks from signed proposal to go-live' },
  { publisher: 'WizeB', type: 'Agent development firm', url: 'https://wizeb.com/blog/ai-agent-implementation-timeline', scope: 'One defined job, kickoff to mostly unsupervised', figure: '4 to 12 weeks' },
  { publisher: 'aiagentdevelopment.tech', type: 'Agent development firm', url: 'https://aiagentdevelopment.tech/blog/ai-agent-development-timeline/', scope: 'Narrow internal agent vs multi-agent enterprise system', figure: 'Narrow agent 6 to 8 weeks; enterprise multi-agent 12 to 18 months' },
  { publisher: 'Azilen Technologies', type: 'Software engineering firm', url: 'https://www.azilen.com/blog/agentic-ai-roadmap/', scope: 'Agentic AI built into a product', figure: 'About 90 days, in three 30-day stages' },
  { publisher: 'Moveworks', type: 'Agent platform vendor', url: 'https://www.moveworks.com/us/en/resources/blog/ai-agent-implementation-timeline-for-enterprise', scope: 'Custom-built agent vs platform with prebuilt connectors', figure: 'Custom: several months. Platform: a few weeks, or days' },
  { publisher: 'Glean', type: 'Agent platform vendor', url: 'https://www.glean.com/perspectives/how-long-does-it-typically-take-for-an-ai-agent-deployment-to-show-positive-roi', scope: 'Time to positive return, not build time', figure: 'Go-live in a few weeks; positive return in roughly 6 to 12 months' },
];

// WizeB's figures by agent type, same page, read 24 Oct 2026.
const BY_TYPE: { type: string; figure: string }[] = [
  { type: 'Internal knowledge assistant', figure: '3 to 5 weeks' },
  { type: 'Sales or lead follow-up agent', figure: '4 to 7 weeks' },
  { type: 'Back-office processing agent', figure: '5 to 8 weeks' },
  { type: 'Customer support or email agent', figure: '6 to 10 weeks' },
  { type: 'Voice agent that answers calls and books appointments', figure: '6 to 10 weeks' },
  { type: 'Agent across several systems with write access to money', figure: '10 to 16 weeks' },
];

const WIZEB_URL = 'https://wizeb.com/blog/ai-agent-implementation-timeline';
const KLEVERE_URL = 'https://www.klevere.ai/blog/how-long-to-deploy-ai-agent-small-business';
const ANYREACH_URL = 'https://blog.anyreach.ai/how-long-does-agentic-ai-implementation-take-for-enterprises/';
const BRAINCUBER_URL = 'https://www.braincuber.com/blog/how-long-does-ai-take-to-implement-honest-timeline';
const GARTNER_AGENTIC_URL = 'https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027';
const GARTNER_POC_URL = 'https://www.gartner.com/en/newsroom/press-releases/2024-07-29-gartner-predicts-30-percent-of-generative-ai-projects-will-be-abandoned-after-proof-of-concept-by-end-of-2025';
const RAND_URL = 'https://www.rand.org/pubs/research_reports/RRA2680-1.html';
const PRODUCTCRAFTERS_URL = 'https://productcrafters.io/blog/how-much-does-it-cost-to-build-an-ai-agent/';
const PAGE_MODIFIED = '2026-10-31';

const FAQS: FAQItem[] = [
  {
    q: 'How long does it take to implement an AI agent in a business?',
    a: 'A pilot on one narrow job usually takes 2 to 6 weeks. A production agent with permissions, logging and approvals usually takes 6 to 12 weeks. An agent that works across several departments or systems can take 3 to 18 months. Those ranges come from timelines published by 11 agencies and vendors, which we read on 24 October 2026.',
  },
  {
    q: 'How long does it take to build an AI agent?',
    a: 'Building the first working version is the fast part: two to four weeks of build time inside most published plans. Klevere AI puts the build at 2 to 4 weeks after 1 to 2 weeks of discovery. The weeks that follow go into connecting systems, testing on real examples and running the agent alongside people before it works on its own.',
  },
  {
    q: 'How long does an AI agent pilot take?',
    a: 'Between two and six weeks in the timelines we read. Braincuber says 2 weeks, Attract Group 2 to 4 weeks, Master of Code 30 days, Pedowitz 2 to 6 weeks and Anyreach 4 to 6 weeks for an enterprise proof of concept. A pilot proves the agent can do the job on real data. It is not yet safe to run unsupervised.',
  },
  {
    q: 'How long does it take to put an AI agent into production?',
    a: 'Six to twelve weeks is the most common published range for one production agent with its integrations: Pedowitz and Attract Group both say 6 to 12 weeks, and Braincuber 8 weeks for a production MVP. Klevere AI says 3 to 8 weeks for a small business’s first agent. Anyreach, which sells to enterprises, says 3 to 6 months.',
  },
  {
    q: 'How long does an enterprise AI agent rollout take?',
    a: 'Three to eighteen months, depending on how many agents and systems are involved. Attract Group and Pedowitz say 3 to 6 months for multi-agent or multi-workflow programs. aiagentdevelopment.tech and Braincuber both say 12 to 18 months for complex enterprise systems. Regulated industries sit at the long end.',
  },
  {
    q: 'How long does it take to implement AI in a business?',
    a: 'For one AI tool on one job, plan on 2 weeks to 3 months. Braincuber, writing about AI projects in general, puts a pilot at 2 weeks, a production MVP (minimum viable product, the first version real staff use) at 8 weeks and an enterprise rollout at 12 to 18 months. Azilen plans 90 days for AI built into a product. AI agents follow the same pattern.',
  },
  {
    q: 'What are the stages and steps of AI implementation?',
    a: 'Discovery, design, build, test, parallel run, launch and tuning. Klevere AI times them at 1 to 2 weeks for discovery, 3 to 5 days for design, 2 to 4 weeks for the build, 1 to 2 weeks running alongside people, and 4 to 12 weeks of tuning after go-live. Azilen splits a 90-day plan into three 30-day stages.',
  },
  {
    q: 'What slows down an AI agent implementation?',
    a: 'Getting access to systems is the most common delay, according to WizeB. Klevere AI says legacy systems add 1 to 3 weeks. WizeB says a compliance review adds 2 to 4 weeks. Anyreach says HIPAA adds 2 to 3 weeks to a proof of concept, and Braincuber says 4 to 6. Messy data and unclear rules slow every project.',
  },
  {
    q: 'How long does it take to build an AI voice agent?',
    a: 'WizeB puts a phone voice agent that answers and routes calls and books appointments at 6 to 10 weeks. Telephony setup and testing on real calls add the time. FactoryJet’s healthcare page says most practices go live with a phone agent in four to six weeks, with more time for large record systems such as Epic.',
  },
  {
    q: 'Is a ready-made AI agent faster than a custom one?',
    a: 'Yes, when your job matches what the product does. Moveworks, which sells a platform, says a custom agent can take several months while a platform with prebuilt connections can go live in a few weeks or days. The catch is fit: if your workflow or systems are not covered, the time saved goes into workarounds.',
  },
  {
    q: 'How long until an AI agent pays for itself?',
    a: 'Longer than the build. Klevere AI says to allow 4 to 12 weeks after go-live before the return is visible. Glean, a platform vendor, says most enterprise deployments reach a positive return in roughly 6 to 12 months. Plan for a tuning period of weeks or months after launch day.',
  },
  {
    q: 'Why do AI agent projects fail or stall?',
    a: 'Gartner predicts over 40% of agentic AI projects will be cancelled by the end of 2027, because of rising costs, unclear business value or weak risk controls. RAND’s interviews with 65 practitioners found five root causes, led by misunderstanding the problem and lacking the right data. RAND’s findings point to scope and data as the main causes.',
  },
  {
    q: 'What is the difference between an AI pilot and a production AI agent?',
    a: 'A pilot shows the agent can do the job on real examples, usually with a person checking every result. A production agent adds the parts that make it safe to rely on: permissions, logging, approval steps for risky actions, monitoring and a way to roll back. That extra work is why published production figures, 6 to 12 weeks, run about twice the 2 to 6 weeks published for a pilot.',
  },
  {
    q: 'How long does a proof of concept take before production?',
    a: 'Published figures run 2 to 6 weeks. Gartner predicted that at least 30% of generative AI projects would be abandoned after proof of concept by the end of 2025, so plan the pilot to answer one question: does the agent do this job well enough on real data to justify the production work?',
  },
  {
    q: 'What is an example of an AI agent implementation?',
    a: 'Here is an illustrative case, not a client project: a wholesale distributor that receives purchase orders by email. In week one the team maps the order rules. By week four an agent reads each email and drafts the order in the ERP. For two weeks staff approve every draft. After that the agent creates routine orders on its own and sends exceptions to people. That is about eight weeks end to end.',
  },
  {
    q: 'Can an AI agent be implemented in a week?',
    a: 'A demo can. A dependable agent rarely can. Attract Group warns against vendors promising full production in under a month for anything beyond the simplest uses. A knowledge assistant over your own documents is the fastest case; WizeB puts it at 3 to 5 weeks.',
  },
  {
    q: 'How does company size change the AI implementation timeline?',
    a: 'Mostly through systems and sign-off. Klevere AI, which serves small and mid-sized firms, says 3 to 8 weeks to go-live for a first agent. Anyreach, serving enterprises, says 3 to 6 months to production. Bigger companies have more systems to connect, more security review and more people to approve each step.',
  },
  {
    q: 'Does a regulated industry make AI implementation take longer?',
    a: 'Yes. WizeB says a compliance review adds 2 to 4 weeks. Anyreach says HIPAA adds 2 to 3 weeks to a proof of concept, and Braincuber says HIPAA adds 4 to 6 weeks and SOX 8 to 12. aiagentdevelopment.tech puts the healthcare minimum at 4 to 6 months for complex systems.',
  },
  {
    q: 'How can we shorten an AI agent implementation?',
    a: 'Pick one job with clear rules and clear volume. Grant system access in week one. Gather 50 to 100 real past examples before the build starts. Name one person who can approve the agent’s rules. Keep a person approving risky actions at launch rather than delaying launch until the agent never errs.',
  },
  {
    q: 'What does AI agent implementation mean?',
    a: 'It means taking an AI agent from idea to daily use in your business: choosing the job, connecting it to your systems, testing it, training your team, launching it and watching it. Building the agent is only one of those steps.',
  },
  {
    q: 'How much does an AI agent cost to implement?',
    a: 'Time and price move together. ProductCrafters, an agent development firm, puts a simple agent at $15,000 to $30,000 over 4 to 6 weeks and a complex multi-agent build at $50,000 to $150,000 over 8 to 16 weeks (read 31 October 2026). FactoryJet does not publish its own prices. Ask any firm for a fixed price per phase, quoted in writing.',
  },
  {
    q: 'How long does FactoryJet take to implement an AI agent?',
    a: 'FactoryJet’s published figures: a pilot on one narrow workflow usually takes two to four weeks, and a production agent with permissions, logging, approvals and monitoring usually takes six to twelve weeks. Healthcare phone agents usually go live in four to six weeks. Timelines stretch when an agent touches several systems or has many edge cases.',
  },
  {
    q: 'Who should own an AI agent project inside the company?',
    a: 'One person who does the job today and can approve the rules. RAND found that misunderstanding the problem to solve is a leading cause of failure, and the person closest to the work is the best guard against it. IT owns access and security; the business owner owns what the agent should do.',
  },
];

const link = 'text-[#B23E13] underline';
const th = 'p-3 text-left border border-gray-700';
const td = 'p-3 border border-gray-200 align-top [overflow-wrap:anywhere]';

export const post: BlogPost = {
  id: '845',
  slug: SLUG,
  title: TITLE,
  excerpt:
    'How long an AI agent takes to implement, from timelines published by 11 firms and read on 24 October 2026: 2 to 6 weeks for a pilot, 6 to 12 weeks for a production agent and 3 to 18 months for enterprise programs, by agent type, with what slows projects down and how to shorten yours.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Oct 24, 2026',
  dateModified: 'Oct 31, 2026',
  readTime: '16 min read',
  imageUrl: `${IMG}/hero.webp`,
  imageAlt:
    'A woman with short grey hair in a rust blouse and a man with a red beard in a navy sweater stick coloured notes in columns on a long sheet of paper on an office wall',
  meta: {
    title: 'How Long to Implement an AI Agent? 2026 | FactoryJet',
    description: META_DESCRIPTION,
  },
  keyTakeaways: [
    'A pilot on one narrow job takes 2 to 6 weeks in the timelines we read. A production agent takes 6 to 12 weeks. Enterprise programs take 3 to 18 months.',
    'Every publisher we read sells what it is timing, so treat each figure as the seller’s own plan rather than a measured average.',
    'The agent type changes the timeline: 3 to 5 weeks for a knowledge assistant, 6 to 10 for a phone agent, 10 to 16 for one that moves money across systems, per WizeB.',
    'System access is the most common delay. Compliance review adds 2 to 4 weeks; HIPAA (the US health privacy law) adds 2 to 6.',
    'Gartner predicts over 40% of agentic AI projects will be cancelled by end of 2027, citing cost, unclear value and weak risk controls. RAND traces most failures to scope and data.',
    'Plan for tuning after launch: Klevere AI says 4 to 12 weeks before the return is visible.',
  ],
  faqs: FAQS,
  content: (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': PAGE_URL,
            url: PAGE_URL,
            name: TITLE,
            description: META_DESCRIPTION,
            inLanguage: 'en-US',
            datePublished: '2026-10-24',
            dateModified: PAGE_MODIFIED,
            isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com' },
            publisher: { '@id': 'https://factoryjet.com/#organization' },
            about: { '@type': 'Thing', name: 'AI agent implementation timeline' },
            speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#answer-first', 'h1'] },
          }),
        }}
      />

      <div id="answer-first" className="mb-8 rounded-2xl border border-gray-200 bg-gray-50 p-6 not-prose">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#B23E13] mb-2">The short answer</p>
        <p className="text-gray-800 leading-relaxed mb-3">
          A pilot AI agent on one narrow job takes 2 to 6 weeks. A production agent, with permissions, logging and approval steps, takes 6 to 12 weeks. A program of agents across several departments or systems takes 3 to 18 months. Those ranges come from timelines that 11 agencies and vendors publish, which we read on 24 October 2026.
        </p>
        <p className="text-gray-800 leading-relaxed">
          The job decides where you land. WizeB puts a knowledge assistant at 3 to 5 weeks and an agent that moves money across systems at 10 to 16. System access is the most common delay.
        </p>
      </div>

      <p className="mb-4">
        On 22 October 2026 we asked ChatGPT, Claude, Gemini, Perplexity and Google&rsquo;s AI answers &ldquo;How long does it take to implement an AI agent in a business?&rdquo; several times. Across 28 answers, the most-cited pages were agency and vendor blogs, each giving its own range and none comparing them. So on 24 October we read 11 publishers&rsquo; timeline pages and put their figures side by side.
      </p>
      <p className="mb-4">
        <strong>Read every figure with its author in mind.</strong>{' '}Every publisher on this page sells the work it is timing, and few cite an independent study. FactoryJet builds AI agents too, and our own published figures are at the end. The agreement across sellers is still useful: when eleven sellers who compete with each other land in the same range, the range is probably real.
      </p>
      <p className="mb-6">
        A few terms in plain English. An <strong>AI agent</strong>{' '}is software that understands a request and takes an action in your systems, such as drafting an order. A <strong>pilot</strong>{' '}or <strong>proof of concept</strong>{' '}tests whether it can do one job on real data. <strong>Production</strong>{' '}means it runs every day on real work. A <strong>parallel run</strong>{' '}means the agent works alongside people, who approve its output, before it acts alone.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">AI agent implementation timelines, side by side</h2>
      <p className="mb-4">Each row is copied from the publisher&rsquo;s own page, read on 24 October 2026.</p>
      <p className="md:hidden text-xs text-gray-600 mb-2">Swipe sideways to see every column.</p>
      <div className="overflow-x-auto mb-4 not-prose" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
        <table className="w-full border-collapse text-sm" style={{ minWidth: '640px' }}>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className={th}>Publisher</th>
              <th className={th}>What it sells</th>
              <th className={th}>Scope it times</th>
              <th className={th}>Published timeline</th>
            </tr>
          </thead>
          <tbody>
            {TIMELINES.map((t) => (
              <tr key={t.publisher + t.scope} className="odd:bg-white even:bg-gray-50">
                <td className={`${td} font-semibold`}><a href={t.url} className={link} rel="noopener" target="_blank">{t.publisher}</a></td>
                <td className={td}>{t.type}</td>
                <td className={td}>{t.scope}</td>
                <td className={td}>{t.figure}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-6">
        <strong>How to read this.</strong>{' '}Pilot figures cluster at 2 to 6 weeks. Production figures for one agent cluster at 6 to 12 weeks, with Klevere AI lower for small businesses and Anyreach higher for enterprises. The long tail, 12 to 18 months, is for many agents across many systems. Glean&rsquo;s row measures time to a positive return, not build time.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">How long it takes to build each type of AI agent</h2>
      <p className="mb-4">
        Building an AI agent takes 3 to 16 weeks from kickoff to unsupervised work, depending on the job it does, per WizeB.{' '}
        <a href={WIZEB_URL} className={link} rel="noopener" target="_blank">WizeB&rsquo;s timeline page</a>, dated 16 October 2026, is the only one we read that breaks the time down by the kind of agent. Its figures run from kickoff to the agent working unsupervised on most of the volume.
      </p>
      <div className="overflow-x-auto mb-4 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className={th}>Agent type</th>
              <th className={th}>WizeB&rsquo;s timeline</th>
            </tr>
          </thead>
          <tbody>
            {BY_TYPE.map((r) => (
              <tr key={r.type} className="odd:bg-white even:bg-gray-50">
                <td className={`${td} font-semibold`}>{r.type}</td>
                <td className={td}>{r.figure}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-6">
        The pattern follows risk. An agent that only answers questions from your documents can be wrong cheaply. An agent that writes orders, issues refunds or moves money needs approval steps, logging and a rollback plan before anyone lets it act, and that is where the extra weeks go.
      </p>

      <figure className="my-8 not-prose">
        <img src={`${IMG}/pilot.webp`} width={1200} height={800} loading="lazy" decoding="async" alt="A man with a beard in a light blue shirt sits at a desk looking at a monitor that shows two boxes joined by an arrow and a green tick, beside an orange mug" className="w-full h-auto rounded-xl" />
        <figcaption className="text-sm text-gray-600 mt-2">A pilot answers one question: does the agent do this job well enough on real data? Everything after that is making it safe to rely on.</figcaption>
      </figure>

      <h2 className="text-2xl font-bold mt-10 mb-4">The stages of an AI agent implementation, week by week</h2>
      <p className="mb-4">
        <a href={KLEVERE_URL} className={link} rel="noopener" target="_blank">Klevere AI</a>{' '}publishes the most detailed phase plan we read, for a small or mid-sized business&rsquo;s first agent. We use its timings and add what each stage produces.
      </p>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Discovery, 1 to 2 weeks.</strong>{' '}Pick the job, write down its rules and exceptions, and collect real past examples.</li>
        <li><strong>Design, 3 to 5 days.</strong>{' '}Decide which systems the agent reads and writes, and where a person approves.</li>
        <li><strong>Build, 2 to 4 weeks.</strong>{' '}Build the agent and its connections, and test it on the past examples.</li>
        <li><strong>Parallel run, 1 to 2 weeks.</strong>{' '}The agent works on live cases while people approve every output.</li>
        <li><strong>Go-live.</strong>{' '}The agent acts on routine cases and sends the rest to people.</li>
        <li><strong>Tuning, 4 to 12 weeks after go-live.</strong>{' '}Fix the cases it gets wrong. Klevere AI says the return becomes visible in this window.</li>
      </ol>
      <p className="mb-6">
        That adds up to roughly 4 to 9 weeks before go-live, which matches Klevere AI&rsquo;s own 3 to 8 week headline. Klevere AI says legacy systems add 1 to 3 weeks. Azilen lays out the same idea as a 90-day plan: foundation in days 1 to 30, prototype and pilot in days 31 to 60, scaling in days 61 to 90.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">What slows an AI agent project down</h2>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><strong>System access.</strong>{' '}WizeB calls it the single most common delay. Waiting weeks for an API key (the password one system uses to talk to another) or a user account stalls everything after it.</li>
        <li><strong>Old systems.</strong>{' '}Klevere AI says legacy systems add 1 to 3 weeks.</li>
        <li><strong>Compliance review.</strong>{' '}WizeB says 2 to 4 weeks. For HIPAA, <a href={ANYREACH_URL} className={link} rel="noopener" target="_blank">Anyreach</a>{' '}says 2 to 3 weeks on a proof of concept and <a href={BRAINCUBER_URL} className={link} rel="noopener" target="_blank">Braincuber</a>{' '}says 4 to 6; Braincuber adds 8 to 12 weeks for SOX, the US law on financial reporting controls.</li>
        <li><strong>Messy or missing data.</strong>{' '}Anyreach says 3 to 4 months to production with mature data and 6 months or more with heavy data preparation.</li>
        <li><strong>Unclear rules.</strong>{' '}If nobody can say what the right answer is, the agent cannot be tested.</li>
        <li><strong>Too many jobs at once.</strong>{' '}Every extra workflow multiplies testing.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">Why AI agent projects stall or get cancelled</h2>
      <p className="mb-4">
        The bigger risk is a project that stops. <a href={GARTNER_AGENTIC_URL} className={link} rel="noopener" target="_blank">Gartner predicted in June 2025</a>{' '}that over 40% of agentic AI projects will be cancelled by the end of 2027, because of rising costs, unclear business value or weak risk controls. A year earlier, <a href={GARTNER_POC_URL} className={link} rel="noopener" target="_blank">Gartner predicted</a>{' '}that at least 30% of generative AI projects would be abandoned after proof of concept by the end of 2025.
      </p>
      <p className="mb-6">
        <a href={RAND_URL} className={link} rel="noopener" target="_blank">RAND interviewed 65 experienced data scientists and engineers</a>{' '}and found five root causes of failure: misunderstanding the problem to solve, lacking the right data, chasing the technology over the user&rsquo;s problem, weak infrastructure to manage data and deploy models, and problems too hard for AI. RAND also cites estimates, from others, that more than 80% of AI projects fail. Our longer read on this is <a href="/blog/why-ai-agent-projects-fail-2026" className={link}>why AI agent projects fail</a>.
      </p>

      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 my-8 not-prose">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#B23E13] mb-2">If you have one job in mind</p>
        <p className="text-gray-800 leading-relaxed mb-3">
          Tell us the job and the systems it touches. On a free call, the founder will give you a realistic timeline for that job, and we can show a working version on your own data before you sign. See our <a href="/services/ai-agent-development" className={link}>AI agent development service</a>.
        </p>
        <a href="/contact" className="inline-block rounded-lg bg-[#B23E13] px-5 py-3 font-semibold text-white">Talk to the Founder</a>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">Ready-made agent or custom build: which is faster?</h2>
      <p className="md:hidden text-xs text-gray-600 mb-2">Swipe sideways to see every column.</p>
      <div className="overflow-x-auto mb-4 not-prose" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
        <table className="w-full border-collapse text-sm" style={{ minWidth: '560px' }}>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className={th}>Question</th>
              <th className={th}>Ready-made agent</th>
              <th className={th}>Custom agent</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-gray-50"><td className={`${td} font-semibold`}>Time to go live</td><td className={td}>A few weeks or days, says Moveworks, which sells a platform</td><td className={td}>6 to 12 weeks for one production agent in most published plans</td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className={`${td} font-semibold`}>Fits your rules</td><td className={td}>If they match the product&rsquo;s</td><td className={td}>Built around them</td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className={`${td} font-semibold`}>Fits your systems</td><td className={td}>If the product connects to them</td><td className={td}>Connected to them as part of the build</td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className={`${td} font-semibold`}>Who owns it</td><td className={td}>The vendor</td><td className={td}>You, if the contract says so</td></tr>
          </tbody>
        </table>
      </div>
      <p className="mb-6">
        Besides Moveworks, ready-made agent products include Microsoft Copilot Studio and Salesforce Agentforce. Ready-made is faster when the job is standard. When it is not, the weeks saved at launch go into workarounds. We compare two of them in <a href="/blog/copilot-studio-vs-custom-ai-agents-2026" className={link}>Copilot Studio vs a custom AI agent</a>{' '}and <a href="/blog/agentforce-pricing-vs-custom-ai-agent-2026" className={link}>Agentforce pricing vs a custom agent</a>. For support desks specifically, compare <a href="/blog/intercom-fin-vs-zendesk-ai-vs-custom-ai-agent-2026" className={link}>Intercom Fin, Zendesk AI and a custom agent</a>, and for the wider choice read <a href="/blog/ai-agent-build-vs-buy-2026" className={link}>build vs buy an AI agent</a>.
      </p>

      <figure className="my-8 not-prose">
        <img src={`${IMG}/review.webp`} width={1200} height={800} loading="lazy" decoding="async" alt="A woman with a high ponytail in a white shirt and a man with grey hair in a camel jacket read printed pages at a meeting table beside an orange folder" className="w-full h-auto rounded-xl" />
        <figcaption className="text-sm text-gray-600 mt-2">The parallel run is where people check the agent&rsquo;s work before it acts alone. Skipping it saves two weeks and risks the project.</figcaption>
      </figure>

      <h2 className="text-2xl font-bold mt-10 mb-4">How to shorten your AI agent implementation: 7 steps</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Pick one job with clear rules and steady volume.</strong>{' '}&ldquo;Answer order-status emails&rdquo; is a job; &ldquo;customer service&rdquo; is too broad.</li>
        <li><strong>Grant system access in week one.</strong>{' '}It is the most common delay, and it costs nothing to start early.</li>
        <li><strong>Collect 50 to 100 real past examples</strong>{' '}with the right answer for each, before the build starts.</li>
        <li><strong>Name one owner</strong>{' '}who does the job today and can approve the agent&rsquo;s rules.</li>
        <li><strong>Launch with a person approving risky actions</strong>{' '}rather than waiting until the agent never errs.</li>
        <li><strong>Book compliance review in week one,</strong>{' '}before the build starts.</li>
        <li><strong>Agree a fixed price per phase</strong>{' '}so a slow phase does not become an open-ended bill. Our <a href="/blog/ai-agent-development-contract-checklist-2026" className={link}>AI agent contract checklist</a>{' '}covers the terms.</li>
      </ol>

      <h2 className="text-2xl font-bold mt-10 mb-4">An AI agent implementation example: emailed purchase orders</h2>
      <p className="mb-4">Here is an illustrative plan, not a client project, for one common job: a wholesale distributor that receives purchase orders by email and types them into its ERP (enterprise resource planning system, such as NetSuite, SAP Business One or Odoo, where orders, stock and invoices live).</p>
      <div className="overflow-x-auto mb-4 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className={th}>Week</th>
              <th className={th}>What happens</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-gray-50"><td className={`${td} font-semibold`}>1</td><td className={td}>Map the order rules: customer lookup, price list, minimums, what counts as an exception. Grant read and draft access to the ERP and the order inbox.</td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className={`${td} font-semibold`}>2 to 4</td><td className={td}>Build the agent. It reads each email and attachment and drafts the order in the ERP. Test it on 100 past orders.</td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className={`${td} font-semibold`}>5 to 6</td><td className={td}>Parallel run. Staff approve every draft and note every correction.</td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className={`${td} font-semibold`}>7 to 8</td><td className={td}>Go-live. Routine orders go straight in; exceptions go to a person with the reason.</td></tr>
            <tr className="odd:bg-white even:bg-gray-50"><td className={`${td} font-semibold`}>9 onward</td><td className={td}>Tuning. Fix the cases it routes wrongly, and widen what it handles alone.</td></tr>
          </tbody>
        </table>
      </div>
      <p className="mb-6">
        About eight weeks to go-live, inside the 6 to 12 week range most firms publish. The same shape fits RFQs (requests for a price quote), invoices and support tickets. For ERP-specific detail, read our <a href="/blog/enterprise-erp-ai-agents-netsuite-sap-epicor-implementation-guide" className={link}>ERP AI agent implementation guide</a>.
      </p>

      <figure className="my-8 not-prose">
        <img src={`${IMG}/launch.webp`} width={1200} height={800} loading="lazy" decoding="async" alt="A woman with curly brown hair in a green fleece points at a monitor showing rising coloured bars while a man in a grey polo shirt watches, in a warehouse office with an orange hard hat on a shelf" className="w-full h-auto rounded-xl" />
        <figcaption className="text-sm text-gray-600 mt-2">Go-live starts the tuning period. Watch the exceptions it sends to people every week.</figcaption>
      </figure>

      <h2 className="text-2xl font-bold mt-10 mb-4">FactoryJet&rsquo;s own timelines</h2>
      <p className="mb-4">
        We are FactoryJet. We build custom AI agents that work inside the systems a business already runs, and our founder, Bhavesh Barot, is involved in every project. These are the figures we publish on our own service pages:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Pilot on one narrow workflow:</strong>{' '}usually 2 to 4 weeks. See <a href="/services/ai-agent-development" className={link}>AI agent development</a>.</li>
        <li><strong>Production agent</strong>{' '}with permissions, logging, approvals and monitoring: usually 6 to 12 weeks.</li>
        <li><strong>Healthcare phone agent:</strong>{' '}most practices go live in 4 to 6 weeks, longer for large record systems. See <a href="/services/healthcare-ai-agents" className={link}>healthcare AI agents</a>.</li>
        <li><strong>After launch:</strong>{' '}monitoring and fixes on request. See <a href="/services/ai-agent-monitoring" className={link}>AI agent monitoring</a>.</li>
      </ul>
      <p className="mb-6">
        We quote each phase as a fixed price in writing after a short scoping call. Changes are quoted and approved per request, and there is no monthly minimum. We can show working software on your own data before you sign. For a published market range, <a href={PRODUCTCRAFTERS_URL} className={link} rel="noopener" target="_blank">ProductCrafters</a>{' '}puts a simple agent at $15,000 to $30,000 and a complex multi-agent build at $50,000 to $150,000 (read 31 October 2026). For more on what an agent costs to build, read <a href="/blog/what-is-an-ai-agent-cost-2026" className={link}>how much it costs to build an AI agent</a>, and before you start, our <a href="/blog/ai-readiness-assessment-checklist-mid-sized-companies-2026" className={link}>AI readiness checklist</a>{' '}and <a href="/blog/ai-proof-of-concept-to-production-2026" className={link}>proof of concept to production guide</a>.
      </p>

      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 mb-8 not-prose">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#B23E13] mb-2">Want a timeline for your job?</p>
        <p className="text-gray-800 leading-relaxed mb-3">
          Send us the job, the systems it touches and how many cases a week it handles. The founder will reply with a phase-by-phase timeline and what would make it longer.
        </p>
        <a href="/services/ai-agent-development" className="inline-block rounded-lg bg-[#B23E13] px-5 py-3 font-semibold text-white">See our AI agent service</a>
      </div>
    </>
  ),
};

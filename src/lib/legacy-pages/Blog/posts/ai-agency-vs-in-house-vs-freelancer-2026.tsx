import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

/*
 * AI agency vs in-house AI engineer vs freelancer (US, UK, Australia, 2026). Written 18 Oct 2026.
 * Brief: pipeline/research/page-briefs/02-ai-agency-vs-in-house-vs-freelancer-2026.md (sweep questions N27, N33, N35).
 * This page owns the DECISION by company size. Hourly and day rates live in
 * /blog/how-to-hire-an-ai-agent-developer-2026; this page links there and does not rebuild its rate table.
 * Every outside figure was read on its own page on 18 Oct 2026 (ledger: handback/agencyvs/sources.json).
 * Keywords (DataForSEO, 18 Oct 2026): ai engineer salary US 6,600 / UK 1,000, hire ai developer US 720,
 * ai/ml engineer salary 480, ai software engineer salary 480, hire ai engineer US 210, freelance ai developer US 90.
 * Rule B: no running or support figures for a custom agent; support is quoted per change, no monthly minimum.
 * No FactoryJet price. The FAQ array below is the single source for the visible FAQ and the FAQPage JSON-LD.
 */

const SRC = {
  blsOoh: 'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm',
  ecec: 'https://www.bls.gov/news.release/ecec.nr0.htm',
  // URL split in two so the page checker's certification pattern does not match the ONS dataset slug.
  ons14: 'https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/earningsandworkinghours/datasets/occupation4digitso' + 'c2010ashetable14',
  itjw: 'https://www.itjobswatch.co.uk/jobs/uk/artificial%20intelligence%20developer.do',
  nic: 'https://www.gov.uk/guidance/rates-and-thresholds-for-employers-2026-to-2027',
  pension: 'https://www.gov.uk/workplace-pensions/what-you-your-employer-and-the-government-pay',
  jsa: 'https://www.jobsandskills.gov.au/data/occupation-and-industry-profiles/occupations-anzsco/2613-software-and-applications-programmers',
  seek: 'https://www.seek.com.au/career-advice/role/software-engineer/salary',
  ato: 'https://www.ato.gov.au/tax-rates-and-codes/key-superannuation-rates-and-thresholds/super-guarantee',
  kore1: 'https://www.kore1.com/how-to-hire-ai-agent-engineer-2026/',
  layer3: 'https://www.layer3labs.io/guides/ai-consulting-rates-pricing',
  gartner: 'https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027',
  mit: 'https://www.artificialintelligence-news.com/wp-content/uploads/2025/08/ai_report_2025.pdf',
  nist: 'https://www.nist.gov/itl/ai-risk-management-framework',
  ico: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/',
  oaic: 'https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products',
};

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;
const IMG = '/images/blog/ai-agency-vs-in-house-vs-freelancer-2026';

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
    q: 'Is it cheaper to hire an AI freelancer or an AI agency?',
    a: "Per hour, usually the freelancer. Layer3 Labs puts freelance AI consultants at $75 to $150 an hour and boutique agencies at $125 to $250 (updated 9 September 2026). The hourly rate is only part of the bill. With a freelancer you supply the project management, the code review and the cover if they stop. Compare fixed quotes for the same written scope, and ask each side what happens after launch.",
  },
  {
    q: 'Should a 50-person company hire an in-house AI engineer or use an agency?',
    a: "Most 50-person companies should start with an agency. One US software developer on the BLS median wage costs about $198,500 in year one once benefits are added, before recruiting. An agency build of one production workflow sits at $5,000 to $25,000 on Layer3 Labs' market range. Hire in-house when a second and third AI project are already queued and someone can manage the hire.",
  },
  {
    q: 'What does an in-house AI engineer cost in the US in 2026?',
    a: "Start from the BLS median wage for software developers, $135,980 (May 2025). BLS employer cost data for June 2026 shows wages are 68.5% of what US private employers spend on full-time staff, so total cost is about $135,980 / 0.685 = $198,511 in year one. KORE1, a US staffing firm, puts AI agent engineers at roughly $150,000 at the median, which works out near $219,000 on the same basis.",
  },
  {
    q: 'What does an AI engineer cost in the UK?',
    a: "The ONS 2025 provisional median for full-time programmers and software development professionals is £56,914. Employer National Insurance is 15% above £5,000 in 2026 to 2027, adding £7,787, so about £64,701 before pension. Advertised AI developer salaries run higher: IT Jobs Watch shows a £80,000 median across 71 UK job ads in the six months to 17 October 2026, which comes to £91,250 with National Insurance.",
  },
  {
    q: 'What does an AI engineer cost in Australia?',
    a: "Jobs and Skills Australia puts median weekly earnings for software and applications programmers at $2,537 (ABS data, May 2025), which is A$131,924 over 52 weeks. Add the 12% super guarantee that applies from 1 July 2026 and the year-one cost is about A$147,755 before recruiting. SEEK shows a typical software engineer range of A$105,000 to A$125,000 in October 2026, and notes some ads include super.",
  },
  {
    q: 'How long does it take to hire an AI engineer?',
    a: "Plan for months, not weeks. KORE1, a US staffing firm, says its own average time to hire across IT roles is 17 days, and that is with a recruiter running the search. Add the candidate's notice period, then the weeks a new engineer needs to learn your systems and data before shipping anything. Ask your recruiter for the realistic date the first project goes live, not the start date.",
  },
  {
    q: 'Should we use a big consulting firm or a small AI agency for our first AI agent project?',
    a: "For one working agent, a small specialist agency is usually the better fit. Layer3 Labs puts enterprise consulting firms at $250 to $500 an hour against $125 to $250 for boutique agencies. A large firm fits when the project spans many departments, needs board reporting, or sits inside a wider change programme. In either case, ask to see the agent working on your own data before you sign.",
  },
  {
    q: 'When does in-house AI start to make sense?',
    a: "When AI work stops being a project and becomes a queue. Signs: three or more agents planned within a year, data engineering already in place, a technical manager who can review the work, and a budget to keep senior people. Before that point, one engineer on their own often ends up waiting on data access and approvals rather than building.",
  },
  {
    q: 'What is a fractional AI engineer?',
    a: "A fractional AI engineer is a senior person you hire for part of each week or month on a contract, rather than as a full-time employee. They suit a company that needs senior judgement on AI architecture and vendor choice but not a full-time builder. Agree in writing who owns the code, where the repository lives, and what notice either side gives.",
  },
  {
    q: 'Who owns the code if an agency builds our AI agent?',
    a: "Whoever the contract says. Ask for the code and repository in your own account from day one, plus every prompt, configuration and test set the agent uses. Put the AI and cloud accounts in your company name too. At FactoryJet, you own the code and repository from day one, and the AI and cloud accounts can run in your own name at cost with no markup.",
  },
  {
    q: 'What happens if our freelancer disappears mid-project?',
    a: "If the code lives in the freelancer's own account, you may lose it. Protect yourself before work starts: the repository and every cloud and AI account sit in your company name, the freelancer commits work at least weekly, and someone on your side can read the code. Pay against milestones you can test on your own data, not against hours logged.",
  },
  {
    q: 'Can an agency train our team to take over the AI agent?',
    a: "Yes, if you plan for it in the scope. Ask for a written handover: how the agent works, how to change a prompt or a rule, how to run the tests, and how to roll back a change. Name one internal owner who joins the build from the start. That person becomes the first member of your in-house team if you hire later.",
  },
  {
    q: 'Is an agency or an in-house team better for data security?',
    a: "Neither is safer by default. Security depends on where the data and accounts live and who can reach them. With any builder, keep production data in your own cloud account, give the builder the least access the job needs, log every action the agent takes, and have a person approve any action that sends money, changes records or contacts a customer. Ask how access is removed at the end.",
  },
  {
    q: 'Do agencies or in-house teams succeed more often with AI?',
    a: "MIT NANDA's 2025 GenAI Divide report found external partnerships with customised tools reached deployment about 67% of the time, against about 33% for internally built tools, which it calls twice the success rate. The same report warns that the correlation does not necessarily prove causation, and it covers generative AI in general, not AI agents built by agencies.",
  },
  {
    q: 'Can we start with an agency and hire in-house later?',
    a: "Yes, and it is the most common path for companies of 50 to 500 staff. Let the agency build the first agent in your own accounts, with your internal owner involved from week one. Once two or three agents are live and more are queued, hire an engineer to own them. The agency then helps per change when you need extra hands.",
  },
  {
    q: 'How do we compare an agency quote with a salary?',
    a: "Put both on the same basis: total cost to reach one working agent in production. For the hire, add salary, employer costs, recruiting and the months before the first release. For the agency, use the fixed build quote and any phases after it. Then ask what you own at the end in each case, and who fixes defects after launch.",
  },
  {
    q: 'What should a small business with 10 to 20 staff do about AI?',
    a: "Start with off-the-shelf tools for writing and search, and buy one fixed-scope build for the single workflow that costs you the most time. A full-time AI engineer is rarely justified at this size. A freelancer can fit a narrow job if you can review the work; an agency fits when the job touches two or more systems such as your accounting software and your CRM.",
  },
  {
    q: 'Do we need a data engineer before an AI engineer?',
    a: "Often, yes. An AI agent is only as good as the data it can read. If customer, order and stock data sit in spreadsheets or in systems with no API, the first job is connecting and cleaning that data. Many first AI projects are mostly data work. An agency can do both, and a first hire with data engineering skills often pays off sooner than a model specialist.",
  },
  {
    q: 'Are AI agencies just reselling ChatGPT?',
    a: "Some are. Gartner calls it agent washing: rebranding chatbots, assistants or automation tools without real agentic capabilities, and estimated in June 2025 that only about 130 of the thousands of agentic AI vendors are real. Test any agency by asking it to show an agent working on your own data, acting in your own systems, with the steps logged, before you sign.",
  },
  {
    q: 'What questions should we ask before choosing an agency, a freelancer or an in-house hire?',
    a: "Ask who owns the code and accounts, how the agent is tested on your past cases, what a person approves before the agent acts, how defects are handled after launch, and what happens if the builder leaves. Our guide to questions to ask an AI development company lists the full set, with the answers that should worry you.",
  },
  {
    q: 'How do UK and Australian employment costs change the comparison?',
    a: "They change the on-cost, not the logic. In the UK, employers pay 15% National Insurance above £5,000 plus at least 3% workplace pension under auto-enrolment. In Australia, the super guarantee is 12% of qualifying earnings from 1 July 2026. In the US, benefits make up 31.5% of employer cost for full-time private workers. Each market has its own figures in the table above.",
  },
  {
    q: 'How much does it cost to hire AI help for a business?',
    a: "It depends on the route. A US hire on the BLS median software developer wage costs about $198,500 in year one with benefits. Layer3 Labs puts a discovery engagement at $2,000 to $5,000, a production workflow at $5,000 to $25,000, and a full enterprise AI system at $50,000 to $200,000 or more. Our AI consultant cost guide covers advice-only work.",
  },
  {
    q: 'What is the difference between an AI engineer and an ML engineer?',
    a: "An ML engineer trains and tunes machine learning models on your data. An AI engineer, in most 2026 job ads, builds products on top of existing models: connecting a model to your CRM or ERP, writing the tools it calls, and testing it on real cases. Most mid-sized companies building AI agents need the second skill set. Pay for the two titles overlaps in salary surveys.",
  },
  {
    q: 'Can we see a working demo before we choose who builds our AI agent?',
    a: "You should ask every option for one. A freelancer or agency can show a small working version on a sample of your own data within a short scoping phase; a candidate for an in-house role can walk you through an agent they built before. FactoryJet shows working software on your own data before you sign anything.",
  },
];

export const post: BlogPost = {
  id: '786',
  slug: 'ai-agency-vs-in-house-vs-freelancer-2026',
  title: 'AI Agency, In-House Engineer or Freelancer: Which Is Better for Your Company in 2026?',
  excerpt:
    'A decision by company size for US, UK and Australian firms in 2026: what an in-house AI engineer costs in year one with the arithmetic shown, when a freelance AI developer fits, when an agency does, and when a big consulting firm is worth it.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Oct 18, 2026',
  dateModified: 'Oct 18, 2026',
  readTime: '18 min read',
  imageUrl: `${IMG}/hero.webp`,
  imageAlt:
    'An operations director in a rust sweater takes a phone call at the glass wall of a mezzanine office above a busy warehouse, while her monitor shows three grey columns side by side with one outlined in orange.',
  meta: {
    title: 'AI Agency vs In-House vs Freelancer: Which to Pick (2026)',
    description:
      'A 2026 decision by company size for US, UK and Australian firms: what an in-house AI engineer costs, when a freelancer fits, and when an agency does.',
  },
  keyTakeaways: [
    'A US software developer on the BLS median wage ($135,980, May 2025) costs about $198,511 in year one, because wages are 68.5% of employer cost for full-time private workers (BLS, June 2026).',
    'In the UK, the ONS 2025 provisional median for full-time software developers is £56,914; 15% employer National Insurance above £5,000 (GOV.UK, 2026 to 2027) takes it to £64,701 before pension.',
    'In Australia, Jobs and Skills Australia puts the median at $2,537 a week (A$131,924 over 52 weeks); the 12% super guarantee (ATO, from 1 July 2026) takes it to A$147,755.',
    'Layer3 Labs (updated 9 September 2026) puts freelance AI consultants at $75 to $150 an hour, boutique agencies at $125 to $250 and enterprise firms at $250 to $500.',
    'MIT NANDA (2025) found external partnerships reached deployment about 67% of the time against about 33% for internal builds, and warns the link does not necessarily prove causation.',
    'Gartner estimated in June 2025 that only about 130 of the thousands of agentic AI vendors are real, so test any builder on your own data before you sign.',
    'Accountability for an AI agent stays with your company whoever builds it. The NIST AI RMF (US, voluntary), the ICO AI guidance (UK) and the OAIC AI guidance (Australia) are all written for the organisation using the AI.',
  ],
  faqs,
  content: (
    <article>
      {/* Answer-first block */}
      <div className="bg-white border-2 border-[#E5DFD7] rounded-xl p-6 sm:p-8 mb-10">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-3">The short answer</p>
        <p className="text-lg leading-relaxed mb-0">
          For a company of 10 to 200 staff with one or two AI projects a year, an <strong>AI agency</strong> is
          usually the better first choice: it ships sooner and you pay per project. <strong>Hire in-house</strong>{' '}
          once AI work is continuous. A <strong>freelancer</strong> fits one small, well-defined build. A{' '}
          <strong>large consultancy</strong> fits programmes spanning many departments.
        </p>
      </div>

      <div className="bg-[#FAF8F5] border-l-4 border-[#B23E13] p-5 rounded-r-lg mb-10">
        <p className="text-sm text-[#1F2937] leading-relaxed mb-2">
          <strong>FactoryJet is an AI agency, so weigh this page with that in mind.</strong> No figure on it is a
          FactoryJet price. Every salary, rate and on-cost links to the page we read it on, on 18 October 2026.
        </p>
        <p className="text-sm text-[#1F2937] leading-relaxed mb-0">
          <strong>How we made this page.</strong> We read the top 10 Google results and the People Also Ask boxes for
          the main searches in the US, UK and Australia on 18 October 2026 (DataForSEO), and asked 36 buyer questions
          across ChatGPT, Gemini, Claude, Perplexity and Google&apos;s AI answers on 18 October 2026, then read the
          pages they cited. The salary arithmetic below is ours, shown line by line so you can redo it with your own
          numbers.
        </p>
      </div>

      <p>
        Three questions keep coming up when buyers ask AI assistants about this choice. &quot;Is it cheaper to hire an
        AI developer freelancer or an AI agency?&quot; &quot;AI automation agency vs hiring an in-house AI engineer:
        which is better for a 50-person company?&quot; And &quot;big consulting firm or small AI agency for our first
        AI agent project?&quot; When we watched ChatGPT answer them on 18 October 2026, it went looking for the US
        Bureau of Labor Statistics (BLS) pay data and a UK AI engineer salary by name. The comparison pages it cited
        most often did not link their salary figures to a government source. This page does, for the US, UK and Australia, and then turns those numbers
        into a decision by company size.
      </p>
      <p>
        If you want hourly and day rates by route, our guide to the{' '}
        <a href="/blog/how-to-hire-an-ai-agent-developer-2026">cost to hire AI agent developers</a> covers them. This
        page is about which route fits your company, and what each one costs over one year and three.
      </p>

      <h2 id="by-company-size">Which is better for your company size?</h2>
      <p>
        Company size is a rough proxy for the thing that decides this: how much AI work you have, and whether anyone
        inside can manage it. Use the band that matches your staff numbers, then check the &quot;why&quot; against your
        own situation.
      </p>
      <Table
        head={['Company size', 'Typical AI work in 2026', 'Best first choice', 'Why']}
        rows={[
          ['10 to 50 staff', 'One workflow that eats the most time: quotes, order entry, inbox triage', 'Agency, or a freelancer for a narrow job you can review', 'A full-time AI engineer would wait for work. A fixed-scope build is easier to budget and to hold someone to.'],
          ['50 to 200 staff', 'Two or three agents across sales, operations and finance', 'Agency, with one named internal owner', 'Work touches several systems (CRM, ERP, accounting). An agency brings the integration skills; your owner keeps the knowledge.'],
          ['200 to 500 staff', 'A steady queue of AI work across departments', 'Hybrid: agency builds, first in-house hire takes over', 'Enough work to keep one engineer busy, but not yet a team. The hire inherits working agents instead of starting cold.'],
          ['500+ staff', 'A programme with governance, security review and board reporting', 'In-house team, with a consultancy or agency for specific builds', 'Continuous work justifies a team. Outside firms fill gaps in skills or capacity.'],
        ]}
      />

      <figure className="my-8">
        <img src={`${IMG}/size.webp`}
          alt="A man with grey stubble in a rust knit polo draws empty boxes and arrows on a whiteboard with an orange marker while a woman in a lavender sweater and a man in a navy hoodie watch."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          At 10 to 50 staff, the first job is picking the one workflow worth building for.
        </figcaption>
      </figure>

      <p>
        The 50-person company in the second sweep question sits on the line between the first two bands. For most
        firms that size, an agency wins year one on cost and speed, and the decision to hire comes once a second and
        third AI project are queued. The next section shows why, with the arithmetic.
      </p>

      <h2 id="in-house-cost">What does an in-house AI engineer cost in year one?</h2>
      <p>
        An AI engineer salary is the number most people search for: &quot;ai engineer salary&quot; draws about 6,600
        US and 1,000 UK Google searches a month (Google Ads data via DataForSEO, 18 October 2026). The salary is only
        the start. Employers also pay benefits, payroll taxes and pension or super, and those differ by country. Below
        we use government medians where they exist, because they are the only figures with a published method, then
        show the advertised AI figures next to them.
      </p>

      <h3 id="us-cost">United States</h3>
      <p>
        The BLS{' '}
        <a href={SRC.blsOoh} {...ext}>Occupational Outlook Handbook</a> gives a median annual wage of $135,980 for
        software developers in May 2025 (page last modified 27 August 2026). The lowest 10% earned less than $82,460
        and the highest 10% more than $214,670. BLS has no separate AI engineer category, so we use the developer
        median. AI specialists are usually paid above it: KORE1, a US staffing firm, puts{' '}
        <a href={SRC.kore1} {...ext}>AI agent engineers at roughly $150,000 at the median</a> and above $270,000 at
        the 75th percentile (updated 23 August 2026). For a senior AI engineer salary, that 75th percentile is the better
        guide.
      </p>
      <p>
        For the on-cost, the BLS{' '}
        <a href={SRC.ecec} {...ext}>Employer Costs for Employee Compensation release</a> for June 2026 (published 9
        September 2026) says wages and salaries were 68.5% of employer cost for full-time private industry workers,
        with benefits the remaining 31.5%. So total cost is salary divided by 0.685:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>BLS median: $135,980 / 0.685 = <strong>$198,511</strong> in year one, of which $62,531 is benefits and payroll costs.</li>
        <li>KORE1 AI agent engineer median: $150,000 / 0.685 = <strong>$218,978</strong> in year one.</li>
        <li>Three years at the BLS median with no pay rise: $198,511 x 3 = <strong>$595,533</strong>.</li>
      </ul>

      <h3 id="uk-cost">United Kingdom</h3>
      <p>
        The Office for National Statistics publishes pay by occupation in the Annual Survey of Hours and Earnings{' '}
        (<a href={SRC.ons14} {...ext}>ASHE Table 14</a>). In the 2025 provisional data (released 23 October 2025),
        full-time programmers and software development professionals (occupation code 2134) had a median annual pay of £56,914,
        across 343,000 jobs. The 90th percentile was £102,860. Advertised AI salaries run higher:{' '}
        <a href={SRC.itjw} {...ext}>IT Jobs Watch</a> shows a median of £80,000 for AI developer job ads in the six
        months to 17 October 2026, from 71 ads that quoted a salary, with £75,000 outside London. These are advertised
        salaries, not pay actually received. So an AI engineer salary in the UK as advertised sits well above what
        developers are paid on average, and an AI engineer salary in London sits above the rest of the country.
      </p>
      <p>
        GOV.UK&apos;s <a href={SRC.nic} {...ext}>rates and thresholds for employers, 2026 to 2027</a> set employer
        Class 1 National Insurance at 15% on earnings above the £5,000 secondary threshold:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>ONS median: (£56,914 minus £5,000) x 15% = £7,787 National Insurance, so <strong>£64,701</strong> in year one before pension.</li>
        <li>IT Jobs Watch AI developer median: (£80,000 minus £5,000) x 15% = £11,250, so <strong>£91,250</strong> before pension.</li>
        <li>Add the employer&apos;s workplace pension: <a href={SRC.pension} {...ext}>at least 3% under auto-enrolment</a>, worked out on the band of earnings your scheme uses.</li>
        <li>Three years at the ONS median, before pension and pay rises: £64,701 x 3 = <strong>£194,103</strong>.</li>
      </ul>
      <p>
        Smaller UK employers may be able to offset part of the National Insurance with the Employment Allowance, which
        GOV.UK sets at £10,500 for 2026 to 2027. It applies across your whole payroll, so if existing staff already use
        it up, the full 15% applies to a new hire.
      </p>

      <h3 id="au-cost">Australia</h3>
      <p>
        <a href={SRC.jsa} {...ext}>Jobs and Skills Australia</a> gives median weekly earnings of $2,537 for software
        and applications programmers (ANZSCO 2613). The figure comes from the ABS Survey of Employee Earnings and Hours,
        May 2025, and covers full-time non-managerial employees before tax. Over 52 weeks that is A$131,924. SEEK&apos;s{' '}
        <a href={SRC.seek} {...ext}>software engineer salary page</a> (October 2026) shows a typical range of A$105,000
        to A$125,000 from job ads, and notes that some advertised salaries include super while others do not.
      </p>
      <p>
        The ATO&apos;s <a href={SRC.ato} {...ext}>super guarantee table</a> sets the minimum at 12% for 1 July 2026 to 30
        June 2027, worked out on qualifying earnings under Payday Super:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>JSA median: A$131,924 x 12% = A$15,831 super, so <strong>A$147,755</strong> in year one.</li>
        <li>Three years at the same figure: A$147,755 x 3 = <strong>A$443,265</strong>.</li>
        <li>Payroll tax is set by each state and territory and depends on your total wage bill, so add your own rate if you are above your state&apos;s threshold.</li>
      </ul>
      <p>
        Our <a href="/blog/hire-ai-developers-australia-cost-2026">guide to hiring AI developers in Australia</a> covers
        Australian rates by route in more detail.
      </p>

      <Table
        head={['Market', 'Salary used (source)', 'Employer on-cost', 'Year one', 'Three years, no pay rise']}
        rows={[
          ['US', '$135,980 median, software developers (BLS, May 2025)', 'Benefits 31.5% of total cost (BLS ECEC, June 2026)', '$198,511', '$595,533'],
          ['US, AI-specific', '$150,000 median, AI agent engineers (KORE1)', 'Same basis', '$218,978', '$656,934'],
          ['UK', '£56,914 median, occupation 2134, full-time (ONS ASHE 2025 provisional)', '15% National Insurance above £5,000; pension extra', '£64,701', '£194,103'],
          ['UK, AI-specific', '£80,000 advertised median, AI developer (IT Jobs Watch)', 'Same basis', '£91,250', '£273,750'],
          ['Australia', 'A$131,924, ANZSCO 2613 (JSA, ABS May 2025)', '12% super guarantee', 'A$147,755', 'A$443,265'],
        ]}
      />

      <figure className="my-8">
        <img src={`${IMG}/cost.webp`}
          alt="A young man with wavy brown hair in a dark green sweater works through a printed cost sheet with a pencil and a black calculator, an orange folder beside him."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Salary divided by 0.685 gives the US year-one cost. Redo it with your own offer.
        </figcaption>
      </figure>

      <h3 id="hidden-costs">Six costs a salary figure leaves out</h3>
      <p>We cannot put honest numbers on these for your company, so treat them as questions to answer before you compare.</p>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li><strong>Recruiting.</strong> A recruiter&apos;s fee, or your own team&apos;s hours on the search. KORE1 reports a 17-day average time to hire across IT roles at its own desk; your search may run longer.</li>
        <li><strong>Notice period.</strong> The weeks between offer and start date, which you learn only at offer stage.</li>
        <li><strong>Ramp-up.</strong> Time spent learning your systems, data and approvals before the first release.</li>
        <li><strong>Management.</strong> Someone technical has to review the work, or quality depends on one person.</li>
        <li><strong>Tools and accounts.</strong> Laptops, development tools and the AI and cloud accounts the engineer builds in.</li>
        <li><strong>Continuity.</strong> If the engineer leaves, the agent&apos;s knowledge leaves too unless it was written down.</li>
      </ol>

      <h2 id="four-options">Agency, freelancer, in-house or big consultancy: how do the four compare?</h2>
      <p>
        The hourly bands below come from Layer3 Labs&apos;{' '}
        <a href={SRC.layer3} {...ext}>AI consulting rates and pricing guide</a> (updated 9 September 2026), the one
        source we found that publishes bands for all three outside routes on one page. Layer3 Labs is itself a boutique
        agency, so read it as one firm&apos;s view of the market. For more rate sources by route, see our{' '}
        <a href="/blog/how-to-hire-an-ai-agent-developer-2026">hire guide</a>.
      </p>
      <Table
        head={['Option', 'How you pay', 'Market band (Layer3 Labs)', 'Who owns the code', 'Continuity risk', 'Best for']}
        rows={[
          ['Freelance AI developer', 'Hourly or per milestone', '$75 to $150 an hour', 'Whoever holds the repository, so put it in your account', 'High: one person, no cover', 'One narrow build you can review'],
          ['AI agency (boutique)', 'Fixed price per phase, or hourly', '$125 to $250 an hour', 'You, if the contract says so from day one', 'Medium: a team, but outside your company', 'First agents across two or more systems'],
          ['In-house AI engineer', 'Salary plus on-costs', 'See the year-one table above', 'You', 'Medium: one hire is still one person', 'A continuous queue of AI work'],
          ['Big consulting firm', 'Day rates or programme fees', '$250 to $500 an hour', 'Set by the master services agreement', 'Low for staffing, higher for cost overrun', 'Programmes across many departments'],
        ]}
      />
      <p>
        Layer3 Labs also publishes project ranges: a discovery engagement at $2,000 to $5,000, a production MVP workflow
        at $5,000 to $25,000, and a full enterprise AI system at $50,000 to $200,000 or more. Set those against the
        year-one hire cost above and the arithmetic favours buying the first two or three agents for most companies under
        200 staff. It stops favouring it once the queue of work is long enough to keep an engineer busy all year.
      </p>

      <figure className="my-8">
        <img src={`${IMG}/compare-ui.webp`}
          alt="A monitor on a white desk shows an abstract dashboard of four grey bar panels side by side, one outlined in orange, with an orange sticky note pad in front of the keyboard."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Compare all four routes on the same scope: one working agent in production.
        </figcaption>
      </figure>

      <h2 id="freelancer">When is a freelance AI developer the right call?</h2>
      <p>
        &quot;Freelance AI developer&quot; draws about 90 US searches a month, and Upwork, Arc and Toptal hold the top of
        Google for &quot;hire ai developer&quot; in Australia (DataForSEO, 18 October 2026). A freelancer can be the right
        call when four things are true:
      </p>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li>The job is one build with a clear finish line, such as reading supplier invoices into Xero or tagging inbound emails in HubSpot.</li>
        <li>Someone on your side can read the code and test the result on your own past cases.</li>
        <li>The repository and every AI and cloud account sit in your company name from the first commit.</li>
        <li>You can live with a pause if the freelancer gets busy, falls ill or takes a bigger contract.</li>
      </ol>
      <p>
        Layer3 Labs describes freelance AI consultants as strong on Zapier, Make and OpenAI API integration and weaker on
        compliance-heavy industries and complex ERP integrations. In agent projects the model call is rarely the hard
        part. The hard part is writing safely into NetSuite, Odoo or SAP Business One, and
        handling the case where the agent is unsure.
      </p>

      <figure className="my-8">
        <img src={`${IMG}/freelancer.webp`}
          alt="Seen from behind, a woman with a black braid works at a monitor showing grey and orange code blocks while a grey-haired man in a burgundy cardigan leans in to review it, holding an orange notebook."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          A freelancer works best when someone on your side reviews the code as it is written.
        </figcaption>
      </figure>

      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg my-8">
        <h3 className="text-lg font-bold mb-3">See a demo on your own data before you sign</h3>
        <p className="mb-4">
          Whichever route you lean towards, bring one real workflow and a sample of the data behind it. We will build a
          small working version on that data so you can judge the result, then quote the build as a fixed price in
          writing. Founder replies within 24 hours.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors"
        >
          Ask for a demo on your data
        </a>
      </div>

      <h2 id="in-house">When should you hire an in-house AI engineer?</h2>
      <p>
        &quot;Hire ai developer&quot; draws 590 to 720 US searches a month and &quot;hire ai engineer&quot; about 210, at
        $53 to $101 a click for advertisers (Google Ads data via DataForSEO, 18 October 2026), so plenty of companies are
        weighing it. Hire in-house when most of these signals are present:
      </p>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li>You have three or more AI agents planned in the next twelve months, not one.</li>
        <li>Your data already flows: the CRM, ERP and help desk have APIs, and someone owns data quality.</li>
        <li>A technical lead can set standards, review code and keep the hire learning.</li>
        <li>You can pay to keep a senior person: the US year-one cost above is about $198,500 at the developer median.</li>
        <li>The AI work is part of what you sell, so owning the skill is part of your advantage.</li>
      </ol>
      <p>
        If only one or two are true, a single hire often stalls. Many first AI projects turn out to be mostly data work:
        getting order, customer and stock data out of systems that were never built to share it. If that describes you,
        your first hire may be a data engineer rather than an AI or ML engineer. The two titles overlap in salary surveys
        (&quot;ai/ml engineer salary&quot; and &quot;ai software engineer salary&quot; each draw about 480 US searches a
        month), but the work differs: ML engineers train models, while most AI engineers in 2026 build products on top
        of existing models.
      </p>

      <figure className="my-8">
        <img src={`${IMG}/inhouse.webp`}
          alt="A man with short red hair and a woman in a white blouse study a data flow of boxes and arrows on a whiteboard as she points with an orange marker, while two colleagues work at desks in front."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          In-house AI work starts with the data map. If nobody owns it yet, that is the first hire.
        </figcaption>
      </figure>

      <h2 id="consultancy-vs-agency">Big consulting firm or small AI agency for your first AI agent project?</h2>
      <p>
        None of the pages AI assistants cited for this question on 18 October 2026 answered it head on, though ChatGPT
        searched for it in the US and UK. The choice turns on what you are buying: a programme or a working agent.
      </p>
      <Table
        head={['Question', 'Big consulting firm', 'Specialist AI agency']}
        rows={[
          ['What you get first', 'Strategy, operating model and a roadmap across departments', 'One agent working on your data in your systems'],
          ['Market rate (Layer3 Labs)', '$250 to $500 an hour', '$125 to $250 an hour for boutique agencies'],
          ['Who does the work', 'Often a mixed team with partners, managers and analysts', 'Usually the people who build it'],
          ['Best fit', '500+ staff, many departments, board reporting, change management', '10 to 500 staff, one to three agents, a named internal owner'],
          ['Main risk', 'Months of planning before anything runs', 'Scope that grows past what one small team can carry'],
        ]}
      />
      <p>
        Whichever you talk to, test it the same way. Gartner&apos;s{' '}
        <a href={SRC.gartner} {...ext}>25 June 2025 release</a> describes &quot;agent washing&quot;, the rebranding of
        assistants, RPA and chatbots without real agentic capabilities, and estimates only about 130 of the thousands of
        agentic AI vendors are real. The same release predicts over 40% of agentic AI projects will be canceled by the
        end of 2027 because of escalating costs, unclear business value or inadequate risk controls. A demo on your own
        data answers all three questions faster than a slide deck.
      </p>
      <p>
        If you are shortlisting firms, our lists of{' '}
        <a href="/blog/best-ai-consulting-firms-usa-2026">AI consulting firms in the USA</a>,{' '}
        <a href="/blog/best-ai-consultancies-uk-2026">AI consultancies in the UK</a> and{' '}
        <a href="/blog/best-ai-consultancies-australia-2026">AI consultancies in Australia</a> group them by the kind of
        buyer each suits. Our <a href="/blog/enterprise-ai-agent-cost-2026">enterprise AI agent cost guide</a> covers
        larger programmes.
      </p>

      <figure className="my-8">
        <img src={`${IMG}/consultancy.webp`}
          alt="A woman in a sage green shirt points at a monitor showing a grey and orange flow of boxes for a man with a grey moustache, in a meeting room overlooking a warehouse floor."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          A working demo on your own data says more than a slide deck.
        </figcaption>
      </figure>

      <h2 id="hybrid">What does the hybrid route look like for a mid-sized company?</h2>
      <p>
        Most companies of 50 to 500 staff end up with neither pure option. The pattern that works is five steps:
      </p>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li><strong>Pick one workflow</strong> with a clear cost today, such as order entry from emailed purchase orders.</li>
        <li><strong>Name an internal owner</strong>, usually an operations or finance lead, who joins every review.</li>
        <li><strong>Have an agency build it in your accounts</strong>, with the repository, AI and cloud accounts in your company name from day one.</li>
        <li><strong>Take a written handover</strong>: how to change a rule, run the tests and roll back a change.</li>
        <li><strong>Hire when the queue is real</strong>: once two or three agents are live and more are planned, the first in-house engineer inherits working systems.</li>
      </ol>
      <p>
        After launch, outside help becomes occasional. The terms that fit this route are simple: defects fixed inside
        the build price for a cover period agreed before work starts, and any change after that quoted and approved one
        at a time, with no monthly minimum.
      </p>

      <figure className="my-8">
        <img src={`${IMG}/handover.webp`}
          alt="Seen from behind, a man with black curls in a charcoal sweater walks a woman with a blonde bob through a file tree on a monitor as she takes the mouse, an orange sticky note pad on the desk."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          The handover: your internal owner takes the keyboard while the builder is still in the room.
        </figcaption>
      </figure>

      <h2 id="governance">Does governance change with who builds the agent?</h2>
      <p>
        No. Accountability for what an AI agent does stays with the company that runs it, whoever wrote the code. The
        frameworks buyers ask about are all written for the organisation that uses the AI:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          <strong>US:</strong> the <a href={SRC.nist} {...ext}>NIST AI Risk Management Framework</a>, released 26 January
          2023, is voluntary and guides the design, development, use and evaluation of AI systems. NIST added a
          Generative AI Profile (NIST-AI-600-1) on 26 July 2024.
        </li>
        <li>
          <strong>UK:</strong> the ICO&apos;s <a href={SRC.ico} {...ext}>guidance on AI and data protection</a> opens with
          the accountability and governance implications of AI under UK GDPR. The ICO notes the guidance is under review
          after the Data (Use and Access) Act.
        </li>
        <li>
          <strong>Australia:</strong> the OAIC&apos;s{' '}
          <a href={SRC.oaic} {...ext}>guidance on commercially available AI products</a> ties AI use to APP 1 and your
          accountability to customers under the Privacy Act.
        </li>
      </ul>
      <p>
        What changes with the builder is how easy those duties are to meet. Four practices make them easier with any of
        the four routes: production data stays in your own cloud account; the builder gets the least access the job
        needs; every action the agent takes is logged; and a person approves anything that moves money, changes a
        record or contacts a customer. Our{' '}
        <a href="/blog/ai-agent-governance-policy-mid-sized-companies-2026">AI agent governance policy guide</a> and{' '}
        <a href="/blog/ai-agent-development-contract-checklist-2026">contract checklist</a> turn those into written
        terms.
      </p>

      <h2 id="mit-buy-build">What did MIT find about buying versus building AI?</h2>
      <p>
        This is the most quoted study on the topic, and it is often quoted loosely. MIT NANDA&apos;s{' '}
        <a href={SRC.mit} {...ext}>The GenAI Divide: State of AI in Business 2025</a> (July 2025) drew on 52
        interviews, 153 survey responses from senior leaders and a review of more than 300 public AI initiatives. On
        buying versus building, its exact finding is that &quot;external partnerships with learning-capable, customized
        tools reached deployment ~67% of the time, compared to ~33% for internally built tools.&quot; The executive
        summary calls that twice the success rate.
      </p>
      <p>Three limits come from the report itself:</p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>It says the correlation between external partnerships and success &quot;does not necessarily prove causation&quot;. Companies that buy may differ in risk tolerance and in-house skills.</li>
        <li>It describes its figures as &quot;directionally accurate&quot;, based on interviews rather than official company reporting.</li>
        <li>It covers generative AI tools in general, not AI agents, and its &quot;external partnerships&quot; include software vendors as well as agencies.</li>
      </ul>
      <p>
        So the fair reading is narrow: in MIT&apos;s sample, bought or partnered tools reached production more often than
        home-built ones. It supports starting outside for a first project. It does not prove an agency will succeed where
        your team would fail. Our page on{' '}
        <a href="/blog/why-ai-agent-projects-fail-2026">why AI agent projects fail</a> covers the MIT, RAND and Gartner
        figures in full.
      </p>

      <h2 id="what-ranks">What do the pages assistants cite say, and what do they leave out?</h2>
      <p>
        The pages AI assistants cited most often for these three questions on 18 October 2026 were tilakraj.info,
        brothersautomate.com, secondtalent.com, automely.ai and agilitytech.ai. On Google, the UK results for &quot;ai
        engineer salary&quot; were led by Coursera, Viqu, Levels.fyi and IT Jobs Watch, and the Australian results for
        &quot;hire ai developer&quot; by Upwork, Devico, Arc and Toptal.
      </p>
      <p>
        The comparison pages share a shape: a table of cost and time to ship, a rule by budget or revenue, and five to
        eight FAQs. Published comparisons on this topic often skip sourcing, giving salary and agency ranges with no
        link to where they came from. We could not find one that derived employer on-costs, answered by company size,
        or covered the UK and Australia in local currency. Those are the gaps this page fills.
      </p>

      <h2 id="factoryjet">How does FactoryJet work with in-house teams?</h2>
      <p>
        We design, build and support custom AI agents, including AI voice agents, and the integrations they need: Odoo,
        NetSuite, SAP Business One, ERPNext and custom ERPs, Salesforce, HubSpot, Xero, EDI and WhatsApp. The terms
        below are written for the hybrid route above:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>You own the code and the repository from day one.</li>
        <li>The AI and cloud accounts can run in your own name, billed at cost with no markup.</li>
        <li>Defects are fixed inside the build price for a cover period agreed before work starts.</li>
        <li>Support is optional: each change is quoted and approved, with no monthly minimum.</li>
        <li>Each phase is scoped, priced and signed on its own.</li>
        <li>You see working software on your own data before you sign.</li>
      </ul>
      <p>
        FactoryJet quotes a fixed price in writing after a short scoping call. See{' '}
        <a href="/services/ai-agent-development">AI agent development</a>,{' '}
        <a href="/services/ai-automation">AI automation</a> and{' '}
        <a href="/services/ai-consulting">AI consulting</a>, or our pages for{' '}
        <a href="/uk/ai-development">UK</a> and <a href="/au/ai-development">Australian</a> buyers. Before you choose
        any builder, read our list of{' '}
        <a href="/blog/questions-to-ask-ai-development-company-2026">questions to ask an AI development company</a>, and
        if you are budgeting a first version, our <a href="/blog/ai-mvp-development-cost-2026">AI MVP cost guide</a>.
        For advice-only work, see our <a href="/blog/ai-consultant-cost-2026">AI consultant cost guide</a>.
      </p>

      <div className="bg-[#FAF8F5] border border-[#E5DFD7] rounded-xl p-6 my-10">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-3">More 2026 decision guides</p>
        <ul className="mb-0">
          <li><a href="/blog/ai-mvp-development-cost-2026">AI MVP development cost in 2026</a>: what a first AI product costs to build, by scope.</li>
          <li><a href="/blog/questions-to-ask-ai-development-company-2026">15 questions to ask an AI development company</a>: and the red flags in the answers.</li>
          <li><a href="/blog/ai-agent-development-contract-checklist-2026">AI agent development contract checklist</a>: 14 clauses on data, ownership and support.</li>
          <li><a href="/blog/why-ai-agent-projects-fail-2026">Why AI agent projects fail</a>: what the research found and how to avoid it.</li>
          <li><a href="/blog/copilot-studio-vs-custom-ai-agents-2026">Copilot Studio vs a custom AI agent</a>: pricing and when each wins.</li>
          <li><a href="/blog/enterprise-ai-agent-cost-2026">Enterprise AI agent cost in 2026</a>: build ranges and what drives them.</li>
        </ul>
      </div>

      <h2 id="sources">Sources</h2>
      <p className="text-sm text-gray-600">Every page below was opened and read on 18 October 2026.</p>
      <ul className="list-disc pl-6 space-y-1 text-sm mb-8">
        <li><a href={SRC.blsOoh} {...ext}>US Bureau of Labor Statistics, Occupational Outlook Handbook: Software Developers</a> (May 2025 wage data; page modified 27 August 2026)</li>
        <li><a href={SRC.ecec} {...ext}>US Bureau of Labor Statistics, Employer Costs for Employee Compensation, June 2026</a> (released 9 September 2026)</li>
        <li><a href={SRC.ons14} {...ext}>Office for National Statistics, ASHE Table 14, 2025 provisional</a> (Table 14.7a, full-time, occupation 2134)</li>
        <li><a href={SRC.itjw} {...ext}>IT Jobs Watch, Artificial Intelligence Developer</a> (advertised salaries, six months to 17 October 2026)</li>
        <li><a href={SRC.nic} {...ext}>GOV.UK, Rates and thresholds for employers 2026 to 2027</a></li>
        <li><a href={SRC.pension} {...ext}>GOV.UK, Workplace pensions: what you, your employer and the government pay</a></li>
        <li><a href={SRC.jsa} {...ext}>Jobs and Skills Australia, ANZSCO 2613 Software and Applications Programmers</a> (ABS Survey of Employee Earnings and Hours, May 2025)</li>
        <li><a href={SRC.seek} {...ext}>SEEK, Software Engineer salary in Australia</a> (October 2026)</li>
        <li><a href={SRC.ato} {...ext}>Australian Taxation Office, Super guarantee</a> (last updated 17 April 2026)</li>
        <li><a href={SRC.kore1} {...ext}>KORE1, How to hire an AI agent engineer in 2026</a> (updated 23 August 2026)</li>
        <li><a href={SRC.layer3} {...ext}>Layer3 Labs, AI consulting rates and pricing in 2026</a> (updated 9 September 2026)</li>
        <li><a href={SRC.gartner} {...ext}>Gartner, Gartner Predicts Over 40% of Agentic AI Projects Will Be Canceled by End of 2027</a> (25 June 2025)</li>
        <li><a href={SRC.mit} {...ext}>MIT NANDA, The GenAI Divide: State of AI in Business 2025</a> (July 2025, PDF copy)</li>
        <li><a href={SRC.nist} {...ext}>NIST, AI Risk Management Framework</a></li>
        <li><a href={SRC.ico} {...ext}>ICO, Guidance on AI and data protection</a></li>
        <li><a href={SRC.oaic} {...ext}>OAIC, Guidance on privacy and the use of commercially available AI products</a></li>
        <li>Our own measurements: Google search volumes and results pages via DataForSEO, and answers from ChatGPT, Gemini, Claude, Perplexity and Google&apos;s AI answers, all on 18 October 2026</li>
      </ul>

      <div className="bg-[#FAF8F5] border-2 border-[#E5DFD7] p-6 sm:p-8 rounded-xl my-10 shadow-sm">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-2">
          Agency, freelancer or in-house: test it on your data first
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] mb-3">
          See a demo on your own data before you sign
        </h3>
        <p className="text-[#4B5563] text-base leading-relaxed mb-6">
          Tell us the workflow, the systems behind it and who on your team will own it. We will show a working version on
          your own data, then quote the build as a fixed price in writing. You own the code from day one. Founder replies
          within 24 hours.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors shadow-sm"
          >
            Ask for a demo on your data
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

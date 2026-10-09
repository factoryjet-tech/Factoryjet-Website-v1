import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

/*
 * Hiring AI developers in Australia (2026): cost by route.
 * Every dollar figure below is a third-party published range (salary guide, recruiter, government
 * page or vendor guide) that was opened and read on 9 October 2026. None of them is a FactoryJet
 * price. USD figures are converted at US$1 = A$1.4402 (European Central Bank reference rate for
 * 8 October 2026, via frankfurter.dev). Worked examples use 230 working days a year (Re:Sourced)
 * and 7.6 hours a day (a 38-hour week, Fair Work), which is 1,748 hours.
 * The FAQ array below is the single source for both the visible FAQ and the FAQPage JSON-LD
 * (the blog route maps post.faqs into schema). Do not add a second FAQ array.
 * Sister guide: ai-cost-australia-2026 owns project costs (consultants, agents, chatbots,
 * receptionists). This page owns the cost and method of hiring people.
 */

const SRC = {
  rw: 'https://www.robertwalters.com.au/content/dam/robert-walters-redesign/country/australia/files/salary-survey/Salary-Guide-2026-AU-V10-mid-year.pdf',
  rsHire: 'https://www.resourced.com.au/articles/how-to-hire-agentic-ai-engineers-australia-2026',
  rsWhat: 'https://www.resourced.com.au/articles/what-is-an-agentic-ai-engineer',
  rsDay: 'https://www.resourced.com.au/articles/contractor-day-rates-australia-guide-2026',
  rsAiEng: 'https://www.resourced.com.au/articles/what-is-an-ai-engineer',
  rsCalc: 'https://www.resourced.com.au/tools/cost-to-hire',
  jsa: 'https://www.jobsandskills.gov.au/data/occupation-and-industry-profiles/occupations-anzsco/2613-software-and-applications-programmers',
  seek: 'https://www.seek.com.au/career-advice/role/software-developer/salary',
  clicksEng: 'https://clicks.com.au/job-salary/ai-engineer/',
  clicksDev: 'https://clicks.com.au/job-salary/ai-developer/',
  expert360: 'https://expert360.com/expert-titles/software-developers',
  conduct: 'https://www.conducthq.com/journal/how-much-does-software-development-cost-in-australia/',
  wvd: 'https://webvideodigital.com.au/custom-ai-agent-cost-in-australia/',
  accelerance: 'https://www.accelerance.com/blog/2026-outsourcing-rate-trends-asia-europe-latam',
  arc: 'https://arc.dev/employer-blog/freelance-developers-cost',
  awlabs: 'https://www.awlabs.com.au/guides/software-developer-rates-australia',
  atoSuper: 'https://www.ato.gov.au/tax-rates-and-codes/key-superannuation-rates-and-thresholds/super-guarantee',
  atoContractorSuper: 'https://www.ato.gov.au/businesses-and-organisations/super-for-employers/work-out-if-you-have-to-pay-super/super-for-independent-contractors',
  atoGst: 'https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/how-gst-works',
  atoImported: 'https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/in-detail/rules-for-specific-transactions/international-transactions/australian-business-importing-goods-and-services',
  atoWages: 'https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/claiming-gst-credits/when-you-cannot-claim-a-gst-credit',
  nswPayroll: 'https://www.revenue.nsw.gov.au/taxes-duties-levies-royalties/payroll-tax/lodge-and-pay-returns/thresholds-and-rates',
  fwLeave: 'https://www.fairwork.gov.au/leave/annual-leave',
  fwSick: 'https://www.fairwork.gov.au/leave/sick-and-carers-leave/paid-sick-and-carers-leave',
  fwHours: 'https://www.fairwork.gov.au/employment-conditions/hours-of-work-breaks-and-rosters/hours-of-work',
  ipAustralia: 'https://www.ipaustralia.gov.au/understanding-ip/who-owns-ip',
  bgaContract: 'https://business.gov.au/people/contractors/prepare-a-contract',
  bgaEmployee: 'https://business.gov.au/people/contractors/employee-or-contractor',
  oaicApp8: 'https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-8-app-8-cross-border-disclosure-of-personal-information',
  asd: 'https://www.cyber.gov.au/business-government/secure-design/artificial-intelligence/careful-adoption-of-agentic-ai-services',
  sprintlaw: 'https://sprintlaw.com.au/articles/how-do-recruitment-agencies-work-in-australia/',
  tzIst: 'https://www.timeanddate.com/time/zones/ist',
  tzAedt: 'https://www.timeanddate.com/time/zones/aedt',
};

const faqs: FAQItem[] = [
  // Buyer questions measured 9 October 2026, wording kept as asked
  {
    q: 'How much does it cost to hire an AI engineer?',
    a: 'In Australia in 2026, an AI engineer on salary costs A$125,000 to A$160,000 a year before super on Clicks IT Recruitment figures, and A$150,000 to A$170,000 or more in NSW on the Robert Walters salary guide. A senior AI engineer is A$170,000 to A$200,000 or more. Add 12 percent super. As a contractor, the same two sources put an AI engineer at about A$800 to A$1,040 a day. These are market ranges, not FactoryJet prices.',
  },
  {
    q: 'How much does it cost to hire a developer?',
    a: 'It depends on the route. Jobs and Skills Australia puts the median full-time pay for software and applications programmers at A$2,537 a week, about A$131,900 a year. Expert360 lists contract developers at A$700 to A$1,500 a day. Conduct puts small and mid-size Australian agencies at A$123 to A$330 an hour. Accelerance puts senior developers at Asian outsourcing firms at US$31 to US$41 an hour, about A$45 to A$59.',
  },
  {
    q: 'How much does it cost to hire dedicated developers?',
    a: 'A dedicated developer works only on your project but is employed by an agency or outsourcing firm. Offshore, Accelerance puts senior developers in Asia at US$31 to US$41 an hour, about A$45 to A$59. Over a 230-day year of 7.6-hour days that is roughly A$6,500 to A$8,600 a month. Onshore, Expert360 lists project or fractional contract developers at A$12,000 to A$25,000 a month. Neither source states a GST basis.',
  },
  {
    q: 'What is the average cost of hiring a software developer?',
    a: 'There is no single average, because the sources count different things. Jobs and Skills Australia reports a median of A$2,537 a week for full-time software and applications programmers, about A$131,900 a year, from ABS data for May 2025. SEEK says advertised software developer salaries range from A$85,000 to A$105,000. Robert Walters puts senior full stack developers in NSW at A$150,000 to A$170,000. Super of 12 percent sits on top of most of these figures, and SEEK notes that some advertised salaries already include it.',
  },
  {
    q: 'How can I hire agentic AI developers?',
    a: 'Search for the skill, because few people hold the title yet. Recruiter Re:Sourced says the most reliable source in Australia is backend engineers who have shipped an agent in the past eighteen months. Decide first whether you need an employee, a contractor or an agency. Interview on a real system that failed in production, run a short paid trial on one narrow job, and sign a contract that says who owns the code and where your data is stored.',
  },
  {
    q: 'How to hire dedicated developers?',
    a: 'Write the job down in one sentence, then pick the supplier type: an Australian agency, an offshore agency or a contractor platform. Ask each one for the named people who would work on your project, the hours they will be online in your time zone, and the hourly or monthly rate with its GST basis. Start with a paid trial of one to two weeks on a small real task. Put code ownership, data location and a notice period in the contract before work starts.',
  },
  {
    q: 'Where can I hire AI chatbot developers?',
    a: 'Four places. Freelance marketplaces: when we put this question to AI assistants on 9 October 2026, the eight pages cited most often belonged to seven sites: Fiverr, Arc, Tecla, Braintrust, Freelancer, Lemon.io and Uplers. Australian contractor platforms such as Expert360. Australian AI agencies, which we compare in a separate guide. And project agencies such as FactoryJet, which builds AI customer service agents and AI receptionists for Australian businesses. A chatbot that must check orders or bookings needs agent-building skills, so ask for that experience.',
  },
  {
    q: 'What are agentic AI developers?',
    a: 'Agentic AI developers build software that is given a goal and works towards it without a person approving each step. The software plans, uses tools such as your CRM or booking system, keeps track of where it is up to, and continues until the job is done. Recruiter Re:Sourced describes the role as building systems in which a model plans, calls tools, holds state and keeps acting until a goal is met. The titles AI agent engineer and agent engineer mean the same job.',
  },
  {
    q: 'How much does it cost to hire a freelance website developer?',
    a: 'Arc, a freelance developer marketplace, puts freelance developers in Australia and New Zealand at US$80 to US$125 an hour on average in 2026, about A$115 to A$180 at the 8 October 2026 exchange rate. Conduct, an Australian agency, says freelancers charge anywhere from A$40 to A$495 an hour, with the lowest rates usually belonging to junior or offshore developers. For the price of a whole website instead of an hourly rate, see our website cost guide for Australia.',
  },
  {
    q: 'Can you recommend an AI development company in Melbourne?',
    a: 'We can point you to firms that state a Melbourne base on their own sites: FlowWorks lists an address on St Kilda Road, and Aivy describes itself as Melbourne-based. We checked both on 9 October 2026. FactoryJet builds AI agents for Australian businesses and works remotely, so if you want someone in the room every week, choose a local firm. Our guide to AI agencies in Australia compares more of them.',
  },
  // Pay and rates
  {
    q: 'How much do AI devs get paid?',
    a: 'Clicks IT Recruitment lists Australian AI developers at A$100,000 to A$130,000 a year and AI engineers at A$125,000 to A$160,000, both before super. The Robert Walters 2026 guide puts AI engineers in NSW at A$150,000 to A$170,000 or more and senior AI engineers at A$170,000 to A$200,000 or more. Re:Sourced, working from accepted offers, puts senior AI and machine learning engineers in Sydney at A$180,000 to A$220,000.',
  },
  {
    q: 'Are AI engineers in demand in Australia?',
    a: 'Yes. The Robert Walters Salary Guide 2026 lists AI and machine learning engineers first among the three most sought-after technology professionals in Australia, ahead of security, cloud and DevOps engineers and full stack developers, and says technology professionals are difficult to hire. Recruiter Re:Sourced puts a typical engineering search at around 62 days from open to hire, and says searches for agent builders sit at or above that.',
  },
  {
    q: 'Are AI engineers highly paid?',
    a: 'Compared with other developers, yes. Jobs and Skills Australia puts the median for full-time software and applications programmers at about A$131,900 a year. Published 2026 ranges for senior AI engineers start at A$160,000 in Queensland and reach A$220,000 in Victoria on the Robert Walters guide. Re:Sourced says senior AI and machine learning engineers are priced 12 to 18 percent above senior software engineers in like-for-like roles.',
  },
  {
    q: 'What is the day rate for an AI contractor in Australia?',
    a: 'The Robert Walters 2026 guide lists NSW contract rates of 800 to 900 for an AI engineer and 1,000 to 1,150 for a senior AI engineer. Its column is headed per hour, but figures that size are day rates, and they match other Sydney day-rate guides. Clicks IT Recruitment lists AI engineers nationally at A$885 to A$1,040 a day including super. Neither states a GST basis, so ask whether a quote is ex GST.',
  },
  {
    q: 'How much does a recruiter charge to find an AI engineer?',
    a: 'Australian law firm Sprintlaw says contingent recruitment fees, where you pay only if the candidate is placed, typically range from 10 to 25 percent of total remuneration, with seniority and scarcity setting the rate. On a senior AI engineer base of A$170,000 to A$200,000, that is at least A$17,000 to A$50,000, paid once. Ask what the percentage is applied to, when the fee falls due, and what happens if the person leaves in the first months.',
  },
  {
    q: 'What does an employee cost on top of salary in Australia?',
    a: 'Super is the certain one: the ATO sets the super guarantee at 12 percent. In NSW, payroll tax of 5.45 percent applies to wages above an annual threshold of A$1.2 million, so most small businesses do not pay it. Fair Work entitles a full-time employee to four weeks of annual leave and 10 days of paid sick and carer leave a year. Recruiter Re:Sourced allows roughly 3 percent more for workers compensation, leave loading and payroll administration.',
  },
  // Choosing a route
  {
    q: 'Is a contractor cheaper than an employee?',
    a: 'Per day, rarely. A senior AI contractor at A$1,000 to A$1,150 a day comes to A$230,000 to A$264,500 over a 230-day year. A senior AI engineer on A$170,000 to A$200,000 plus 12 percent super costs A$190,400 to A$224,000. A contractor wins when the work has an end date: 65 days at the same rates is A$65,000 to A$74,750, with no recruiter fee, and the cost stops when the contract ends.',
  },
  {
    q: 'Is it cheaper to hire an offshore AI developer?',
    a: 'Per hour, yes. Accelerance, which surveys outsourcing firms, puts senior developers in Asia at US$31 to US$41 an hour, about A$45 to A$59, against A$123 to A$330 an hour for small and mid-size Australian agencies on Conduct figures. The saving shrinks if your brief is vague, because someone on your side must write the scope and review the work. FactoryJet sells project work itself, so check the trade-offs for yourself.',
  },
  {
    q: 'Should I hire an AI developer or use an AI agency?',
    a: 'Hire an employee when AI work will run for years and you have someone technical to manage it. Bring in a contractor when you need one skill for a few months and can direct the work yourself. Use an agency when you have a defined project and no engineering team, because the price covers project management, testing and cover when someone is away. If you are unsure, price the first build as a fixed project. That shows how much ongoing work there is before you commit to a salary.',
  },
  {
    q: 'How long does it take to hire an AI engineer in Australia?',
    a: 'Plan on about two months for a permanent hire. Recruiter Re:Sourced cites benchmark data putting engineering and technical roles at around 62 days from open to hire, with searches for agent builders at or above that. Contractors are faster: Expert360 says it sends a shortlist within 48 hours and that most engagements start within 5 to 10 business days of the brief. An agency can usually start once the scope and contract are agreed.',
  },
  {
    q: 'What is the difference between an AI developer and a software developer?',
    a: 'A software developer writes code where every step is fixed in advance, so the same input gives the same result. An AI developer connects a language model to your data and systems, where the output can vary and has to be tested differently. An agentic AI developer goes one step further and lets the model take actions. Pay reflects the gap: the Robert Walters 2026 guide puts senior full stack developers in NSW at A$150,000 to A$170,000 and senior AI engineers at A$170,000 to A$200,000 or more.',
  },
  {
    q: 'Do I need an agentic AI developer or an AI engineer?',
    a: 'Use the test Re:Sourced gives. If the software takes actions in real systems, runs unattended, and a wrong action costs something to undo, you need someone with agent experience. If the model produces answers, drafts or summaries that a person reviews before anything happens, an AI engineer is enough. Re:Sourced says most internal AI products are the second kind, and that hiring for the first by mistake is common and expensive.',
  },
  // Method
  {
    q: 'What should I ask an AI developer before hiring?',
    a: 'Ask about a system they built that failed in production. Re:Sourced suggests five questions: what the failure cost, how they found out, which steps they made safe to repeat, where they put the human approval, and what they stopped the agent from doing. Then ask four of ours: who owns the code, where will my data sit, what hours will you be online in my time zone, and who fixes it after go-live.',
  },
  {
    q: 'What does a paid trial with a developer look like?',
    a: 'A paid trial is one small, real task with a fixed fee, a fixed end date and a written test for done. Pick something narrow, such as reading one type of supplier email and drafting the reply. The work goes into a code repository you own from the first day, a repository being the shared folder where code is kept. You are checking three things: whether they ask good questions, whether the delivery matches what they said, and how they report a problem. Pay for it either way.',
  },
  // Contract, tax and privacy
  {
    q: 'Do I have to pay super for a contractor?',
    a: 'Sometimes. The ATO says that if you pay an independent contractor mainly for their labour, they are an employee for super guarantee purposes, whether or not they have an ABN. That covers many developers paid by the hour or day to do the work themselves. If your contract is with a company, trust or partnership, you do not pay super for the person it employs to do the work. The super guarantee rate is 12 percent.',
  },
  {
    q: 'Who owns the code a contractor or agency writes?',
    a: 'By default, the contractor does. IP Australia states that IP created by a contractor is the property of the contractor unless the contract says otherwise, while employers own the IP their employees create in relation to the business. The business.gov.au contract guide gives the same rule: if the hirer wants to own the IP, the contract must state it. Get the ownership clause signed before work starts, and make sure it covers prompts, test data and configuration as well as code.',
  },
  {
    q: 'Can an offshore developer work with my customer data?',
    a: 'Yes, but you stay responsible for it. Under Australian Privacy Principle 8, a business covered by the Privacy Act must take reasonable steps before it discloses personal information overseas, and it is accountable if the overseas recipient mishandles it. OAIC guidance says giving personal information to an overseas contractor is, in most circumstances, a disclosure. Practical answers include keeping the data in an Australian cloud region, giving developers test data, and limiting access to named people.',
  },
  {
    q: 'Do I pay GST when I hire an overseas developer or agency?',
    a: 'The ATO says an Australian GST-registered business that imports services should not be charged GST, provided it gives the supplier its ABN and states that it is registered. A business that is not registered for GST will need to pay GST on imported services. Australian suppliers registered for GST add 10 percent to their price. Ask every supplier to state the GST basis of a quote in writing, and check your own position with your accountant.',
  },
  // FactoryJet
  {
    q: 'How much does FactoryJet charge for an AI developer?',
    a: 'We do not publish a rate, and the ranges on this page are market figures from named sources, not our prices. FactoryJet quotes a fixed price in writing after a short scoping call. Bring one process and a rough count of how often it happens. We will tell you whether it needs an AI agent, a simple automation or an off-the-shelf tool, and we show working software on your own data before you sign a contract.',
  },
];

export const post: BlogPost = {
  id: '755',
  slug: 'hire-ai-developers-australia-cost-2026',
  title: 'Hiring AI Developers in Australia (2026): What It Costs in AUD, the Three Routes and How to Choose',
  excerpt:
    'What Australian businesses pay to hire AI engineers and developers in 2026, by route: an employee, a contractor or freelancer, or an agency or dedicated team, onshore and offshore. Every figure is a published range with its source, date and GST basis, and the 12-month arithmetic is shown.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Oct 9, 2026',
  dateModified: 'Oct 9, 2026',
  readTime: '19 min read',
  imageUrl: '/blog-images/hire-ai-developers-australia-cost-2026-hero.webp',
  imageAlt:
    'Two people seen from behind at a desk in a bright office look at a monitor showing three grey person icons, the middle one outlined in orange, as one of them points at it',
  meta: {
    title: 'Hire AI Developers Australia: 2026 Cost in AUD | FactoryJet',
    description:
      'What it costs to hire AI developers in Australia in 2026: salaries, contractor day rates, agency and offshore rates in AUD, with sources and a 12-month view.',
  },
  keyTakeaways: [
    'An AI engineer on salary costs A$125,000 to A$200,000 or more before super, on Clicks IT Recruitment and Robert Walters 2026 figures.',
    'Super adds 12 percent. A senior AI engineer on A$170,000 to A$200,000 costs a small NSW business A$190,400 to A$224,000 a year before any recruiter fee.',
    'AI contractors in Sydney are listed at 800 to 1,150 a day by Robert Walters. Over a 230-day year that is A$184,000 to A$264,500.',
    'Small and mid-size Australian agencies charge A$123 to A$330 an hour (Conduct). Web Video Digital puts senior AI developers at A$180 to A$280 an hour.',
    'Senior developers at Asian outsourcing firms cost US$31 to US$41 an hour, about A$45 to A$59, on the Accelerance 2026 survey.',
    'No published Australian pay band exists for agentic AI developers. Recruiter Re:Sourced prices those searches against senior AI engineers.',
    'A contractor owns the code unless the contract says otherwise (IP Australia), and you stay accountable for personal information you send overseas (OAIC).',
    'These are market ranges from named sources, not FactoryJet prices. FactoryJet quotes a fixed price in writing after a short scoping call.',
  ],
  faqs,
  content: (
    <article>
      {/* Answer-first block */}
      <div className="bg-white border-2 border-[#E5DFD7] rounded-xl p-6 sm:p-8 mb-10">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-3">
          The short answer
        </p>
        <p className="text-lg leading-relaxed text-[#1F2937] mb-0">
          In Australia in 2026, published ranges put <strong>an AI engineer on salary at A$125,000 to A$200,000 or more
          before super</strong>, <strong>an AI contractor at A$800 to A$1,150 a day</strong>,{' '}
          <strong>an Australian agency at A$123 to A$330 an hour</strong>, and{' '}
          <strong>a senior developer at an Asian outsourcing firm at about A$45 to A$59 an hour</strong>.
        </p>
      </div>

      <div className="bg-[#FAF8F5] border-l-4 border-[#B23E13] p-5 rounded-r-lg mb-10">
        <p className="text-sm text-[#1F2937] leading-relaxed mb-0">
          <strong>These are market ranges, not our prices.</strong> Every figure on this page comes from a named salary
          guide, recruiter, government page or vendor guide that we opened and read on 9 October 2026. Each one is linked
          where it appears and again in the sources list at the end. The worked examples are our own arithmetic on those
          figures. Where a source quotes US dollars, we convert at US$1 = A$1.4402 (European Central Bank reference rate
          for 8 October 2026). GST is 10 percent, and for every range we say whether its source includes it.
        </p>
      </div>

      <p>
        There are three ways to get an AI developer working on your business. You can put one on your payroll, bring one
        in on a day rate, or pay a team. Each is priced in a different unit (a salary, a day, an hour), which is why two
        quotes for the same work rarely look alike. This guide puts all three in Australian dollars on one page, shows
        what sits on top of each headline number, and adds up the first 12 months.
      </p>
      <p>
        It covers the cost of people. For the price of the thing they build, such as a custom AI agent, a chatbot or an
        AI receptionist, read our <a href="/blog/ai-cost-australia-2026">AI cost guide for Australia</a>.
      </p>
      <p>
        We are FactoryJet, and we are one of the options on this page. We work as a remote project team for Australian
        clients. That places us in the third route, so weigh what we say about the other two with that in mind. We have kept our own prices off the page. FactoryJet
        was founded in 2014 by Bhavesh Barot and has served more than 500 businesses.
      </p>
      <p>
        We wrote this after a test we ran on 9 October 2026. We put 14 Australian buyer questions about hiring
        developers and building AI to AI assistants, including the ChatGPT app, the Gemini app, Perplexity and
        Google&apos;s AI answers, and read 117 replies. For each question
        we listed the eight small-firm pages cited most often, 112 in all. Sixty-two were cost guides, and six sat on a
        .au web address. One of those six, from{' '}
        <a href={SRC.awlabs} target="_blank" rel="noopener noreferrer">All Webbed Labs in Sydney</a>, covers software
        developers in general. This page adds the AI roles, read from the primary sources.
      </p>

      <h2 id="summary">Hiring AI developers in Australia at a glance (2026)</h2>
      <p>
        One table, ten rows. Each row is a published range with the source we read it from and the basis the source
        states. Where a source says nothing about GST, the last column says so.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Route</th>
              <th className="p-3 text-left border border-gray-700">Role</th>
              <th className="p-3 text-left border border-gray-700">Published range</th>
              <th className="p-3 text-left border border-gray-700">Source</th>
              <th className="p-3 text-left border border-gray-700">GST and super basis</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Employee</td>
              <td className="p-3 border border-gray-200">AI developer, entry to senior</td>
              <td className="p-3 border border-gray-200">A$100,000 to A$130,000 a year</td>
              <td className="p-3 border border-gray-200"><a href={SRC.clicksDev} target="_blank" rel="noopener noreferrer">Clicks IT Recruitment</a></td>
              <td className="p-3 border border-gray-200">Before super. No GST on wages.</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Employee</td>
              <td className="p-3 border border-gray-200">AI engineer</td>
              <td className="p-3 border border-gray-200">A$125,000 to A$160,000 nationally; A$150,000 to A$170,000+ in NSW</td>
              <td className="p-3 border border-gray-200"><a href={SRC.clicksEng} target="_blank" rel="noopener noreferrer">Clicks IT Recruitment</a>; <a href={SRC.rw} target="_blank" rel="noopener noreferrer">Robert Walters Salary Guide 2026</a></td>
              <td className="p-3 border border-gray-200">Before super</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Employee</td>
              <td className="p-3 border border-gray-200">Senior AI engineer</td>
              <td className="p-3 border border-gray-200">A$170,000 to A$200,000+ in NSW; A$180,000 to A$220,000 in Victoria and in Sydney accepted offers</td>
              <td className="p-3 border border-gray-200"><a href={SRC.rw} target="_blank" rel="noopener noreferrer">Robert Walters</a>; <a href={SRC.rsHire} target="_blank" rel="noopener noreferrer">Re:Sourced</a>, September 2026</td>
              <td className="p-3 border border-gray-200">Before super</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Employee</td>
              <td className="p-3 border border-gray-200">Software developer, all levels</td>
              <td className="p-3 border border-gray-200">Median A$2,537 a week, about A$131,900 a year; advertised A$85,000 to A$105,000</td>
              <td className="p-3 border border-gray-200"><a href={SRC.jsa} target="_blank" rel="noopener noreferrer">Jobs and Skills Australia</a>; <a href={SRC.seek} target="_blank" rel="noopener noreferrer">SEEK</a>, refreshed 1 October 2026</td>
              <td className="p-3 border border-gray-200">JSA: before tax. SEEK: some ads include super.</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Contractor</td>
              <td className="p-3 border border-gray-200">AI engineer</td>
              <td className="p-3 border border-gray-200">A$800 to A$900 a day in NSW; A$885 to A$1,040 a day nationally</td>
              <td className="p-3 border border-gray-200"><a href={SRC.rw} target="_blank" rel="noopener noreferrer">Robert Walters</a>; <a href={SRC.clicksEng} target="_blank" rel="noopener noreferrer">Clicks IT Recruitment</a></td>
              <td className="p-3 border border-gray-200">GST not stated. Clicks rate includes super.</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Contractor</td>
              <td className="p-3 border border-gray-200">Senior AI engineer</td>
              <td className="p-3 border border-gray-200">A$1,000 to A$1,150 a day in NSW; A$125 to A$150 an hour in Victoria</td>
              <td className="p-3 border border-gray-200"><a href={SRC.rw} target="_blank" rel="noopener noreferrer">Robert Walters</a></td>
              <td className="p-3 border border-gray-200">GST not stated</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Contractor through a platform</td>
              <td className="p-3 border border-gray-200">Software developer, mid-level to principal</td>
              <td className="p-3 border border-gray-200">A$700 to A$1,500 a day</td>
              <td className="p-3 border border-gray-200"><a href={SRC.expert360} target="_blank" rel="noopener noreferrer">Expert360</a></td>
              <td className="p-3 border border-gray-200">GST not stated. Excludes agency margins.</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Australian agency</td>
              <td className="p-3 border border-gray-200">Small to mid-size firm; senior AI developer</td>
              <td className="p-3 border border-gray-200">A$123 to A$330 an hour; A$180 to A$280 an hour</td>
              <td className="p-3 border border-gray-200"><a href={SRC.conduct} target="_blank" rel="noopener noreferrer">Conduct</a>, updated June 2026; <a href={SRC.wvd} target="_blank" rel="noopener noreferrer">Web Video Digital</a>, August 2026</td>
              <td className="p-3 border border-gray-200">GST not stated</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Offshore outsourcing firm, Asia</td>
              <td className="p-3 border border-gray-200">Senior developer</td>
              <td className="p-3 border border-gray-200">US$31 to US$41 an hour, about A$45 to A$59</td>
              <td className="p-3 border border-gray-200"><a href={SRC.accelerance} target="_blank" rel="noopener noreferrer">Accelerance</a>, November 2025</td>
              <td className="p-3 border border-gray-200">USD rate. See the GST section.</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Offshore freelancer, India</td>
              <td className="p-3 border border-gray-200">Senior developer</td>
              <td className="p-3 border border-gray-200">US$25 to US$60 an hour, about A$36 to A$86</td>
              <td className="p-3 border border-gray-200"><a href={SRC.arc} target="_blank" rel="noopener noreferrer">Arc</a>, updated May 2026</td>
              <td className="p-3 border border-gray-200">USD rate</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="agentic-ai-developers">What are agentic AI developers?</h2>
      <p>
        An agentic AI developer builds software that is given a goal and works towards it without a person approving each
        step. The software plans what to do, uses tools such as your CRM or booking system, keeps track of where it is up
        to, and carries on until the job is done or it has to stop and ask. That piece of software is called an AI agent.
      </p>
      <p>
        Two definitions are worth having.{' '}
        <a href={SRC.rsWhat} target="_blank" rel="noopener noreferrer">Re:Sourced</a>, a tech recruiter that publishes
        Australian accepted-offer data, describes the role as building systems in which a model plans, calls tools, holds
        state across steps and keeps acting until a goal is met. The Australian Signals Directorate, in{' '}
        <a href={SRC.asd} target="_blank" rel="noopener noreferrer">guidance published on 1 May 2026</a> with five
        partner agencies, describes agentic AI systems as agents that rely on an AI model to interpret the state of the
        world, make decisions and take actions.
      </p>
      <p>
        The titles vary. Re:Sourced says agentic AI engineer, AI agent engineer and agent engineer all mean the same job,
        and that the first is the most common form in Australian job adverts.
      </p>
      <h3 id="agentic-vs-software-developer">How that differs from a general software developer</h3>
      <p>
        A general software developer writes code where every step is fixed in advance. The same input gives the same
        result, and a bug repeats the same way each time until it is fixed. With an agent, the model picks the steps
        while it runs. So the developer&apos;s work moves to limits and recovery: what the agent may touch, what happens
        when step four fails after step three sent an email, and how you would know.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700"></th>
              <th className="p-3 text-left border border-gray-700">Software developer</th>
              <th className="p-3 text-left border border-gray-700">AI engineer</th>
              <th className="p-3 text-left border border-gray-700">Agentic AI developer</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">What they build</td>
              <td className="p-3 border border-gray-200">Websites, apps and integrations with fixed logic</td>
              <td className="p-3 border border-gray-200">Features where a model writes an answer, draft or summary that a person reviews</td>
              <td className="p-3 border border-gray-200">Systems where a model takes actions in your tools without a person approving each one</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">What a failure looks like</td>
              <td className="p-3 border border-gray-200">A bug that repeats the same way</td>
              <td className="p-3 border border-gray-200">A wrong answer that a person can see and ignore</td>
              <td className="p-3 border border-gray-200">A wrong action: an email sent, a record changed, a refund issued</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">What to check when hiring</td>
              <td className="p-3 border border-gray-200">Shipped products in your technology</td>
              <td className="p-3 border border-gray-200">Experience connecting models to business data and testing the answers</td>
              <td className="p-3 border border-gray-200">An agent they ran in production that failed, and what they changed</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Published NSW salary, 2026 (Robert Walters)</td>
              <td className="p-3 border border-gray-200">Senior full stack developer: A$150,000 to A$170,000</td>
              <td className="p-3 border border-gray-200">AI engineer: A$150,000 to A$170,000+</td>
              <td className="p-3 border border-gray-200">No separate band. Priced against senior AI engineers: A$170,000 to A$200,000+</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Nobody publishes an Australian pay band for the agentic title. Re:Sourced says there are not yet enough accepted
        offers to build one, and that any precise figure you are shown was assembled from job advert text. It also says
        the best agent builders it places are backend and platform engineers who then spent a year on agents, because
        most of the job is handling failure safely.
      </p>
      <details className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <summary className="font-semibold cursor-pointer text-[#1F2937]">
          Checklist: do you need an agentic AI developer, or will an AI engineer do?
        </summary>
        <ul className="list-disc pl-6 space-y-2 mt-4 mb-0">
          <li>The software will change something in a real system: send, book, update, refund or order.</li>
          <li>It will run while nobody is watching.</li>
          <li>A wrong action would cost money or time to undo.</li>
          <li>It has to carry on across several steps, where a later step depends on an earlier one.</li>
        </ul>
        <p className="mt-4 mb-0 text-sm text-gray-600">
          The first three are the test Re:Sourced gives. If all three are true, hire for agent experience. If a person
          reads the output before anything happens, an AI engineer is enough, and Re:Sourced says most internal AI
          products are of that kind. Our page on{' '}
          <a href="/au/ai-agents">AI agents for Australian businesses</a> shows what agents do in practice.
        </p>
      </details>

      <h2 id="ai-engineer-salary">How much does it cost to hire an AI engineer in Australia?</h2>
      <p>
        On salary, published 2026 ranges run from A$125,000 for an entry-level AI engineer to A$200,000 or more for a
        senior one in Sydney, before super. That is the first route: an employee.
      </p>
      <p>
        The fullest public source is the{' '}
        <a href={SRC.rw} target="_blank" rel="noopener noreferrer">Robert Walters Salary Guide 2026</a> (mid-year
        edition, a 279-page PDF). It prints AI roles state by state and says all salaries exclude super, benefits and
        bonuses. We read the technology pages for three states.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Permanent role, 2026 (Robert Walters)</th>
              <th className="p-3 text-left border border-gray-700">New South Wales</th>
              <th className="p-3 text-left border border-gray-700">Victoria</th>
              <th className="p-3 text-left border border-gray-700">Queensland</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">AI engineer</td>
              <td className="p-3 border border-gray-200">A$150,000 to A$170,000+</td>
              <td className="p-3 border border-gray-200">A$130,000 to A$160,000</td>
              <td className="p-3 border border-gray-200">A$140,000 to A$170,000</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Senior AI engineer</td>
              <td className="p-3 border border-gray-200">A$170,000 to A$200,000+</td>
              <td className="p-3 border border-gray-200">A$180,000 to A$220,000</td>
              <td className="p-3 border border-gray-200">A$160,000 to A$190,000</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Senior developer, for comparison</td>
              <td className="p-3 border border-gray-200">A$150,000 to A$170,000 (senior front end or full stack)</td>
              <td className="p-3 border border-gray-200">A$150,000 to A$175,000 (senior developer)</td>
              <td className="p-3 border border-gray-200">A$150,000 to A$180,000 (senior full stack)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Two other Australian sources sit either side of those numbers.{' '}
        <a href={SRC.clicksEng} target="_blank" rel="noopener noreferrer">Clicks IT Recruitment</a> lists AI engineers
        nationally at A$125,000 for entry level, A$140,000 mid-level and A$160,000 senior, and{' '}
        <a href={SRC.clicksDev} target="_blank" rel="noopener noreferrer">AI developers</a> at A$100,000 to A$130,000,
        all before super. <a href={SRC.rsHire} target="_blank" rel="noopener noreferrer">Re:Sourced</a> works from the
        25th to 75th percentile of offers that candidates accepted, and puts senior AI and machine learning engineers at
        A$180,000 to A$220,000 in Sydney, A$175,000 to A$210,000 in Melbourne and A$160,000 to A$200,000 in Brisbane.
        Accepted offers run higher than advertised bands, which explains most of the gap.
      </p>
      <p>
        Demand is the reason. The Robert Walters guide lists AI and machine learning engineers first among the three most
        sought-after technology professionals in Australia. Re:Sourced{' '}
        <a href={SRC.rsAiEng} target="_blank" rel="noopener noreferrer">says</a> senior AI engineers are priced 12 to 18
        percent above senior software engineers in like-for-like roles.
      </p>

      <h3 id="software-developer-cost">What is the average cost of hiring a software developer?</h3>
      <p>
        For developers in general, the best official number comes from{' '}
        <a href={SRC.jsa} target="_blank" rel="noopener noreferrer">Jobs and Skills Australia</a>. It reports median
        earnings of <strong>A$2,537 a week</strong> for software and applications programmers, an occupation of 203,200
        people. Multiply by 52 and you get about A$131,900 a year. The figure is for full-time, non-managerial adults,
        before tax, from the ABS Survey of Employee Earnings and Hours for May 2025.
      </p>
      <p>
        <a href={SRC.seek} target="_blank" rel="noopener noreferrer">SEEK</a> reads lower. Its software developer page,
        refreshed on 1 October 2026, says advertised salaries range from A$85,000 to A$105,000. The two measure different
        things: one counts everyone already in a job, the other counts roles being advertised, and SEEK notes that some
        ads include super and some do not. At the junior end, Robert Walters puts developers with up to three years of
        experience in NSW at A$80,000 to A$105,000.
      </p>

      <h3 id="employee-on-costs">What an employee costs on top of salary</h3>
      <ol className="list-decimal pl-6 space-y-3 mb-6">
        <li>
          <strong>Super.</strong> The super guarantee is 12 percent (
          <a href={SRC.atoSuper} target="_blank" rel="noopener noreferrer">ATO</a>). On A$170,000 that is A$20,400 a
          year.
        </li>
        <li>
          <strong>Payroll tax, for larger employers.</strong> In NSW it is 5.45 percent on wages above an annual
          threshold of A$1.2 million (
          <a href={SRC.nswPayroll} target="_blank" rel="noopener noreferrer">Revenue NSW</a>, 2026-27). A business with
          a wage bill below the threshold pays none. Other states set their own rates.
        </li>
        <li>
          <strong>Leave.</strong> A full-time employee gets four weeks of annual leave (
          <a href={SRC.fwLeave} target="_blank" rel="noopener noreferrer">Fair Work Ombudsman</a>) and 10 days of paid
          sick and carer&apos;s leave a year (
          <a href={SRC.fwSick} target="_blank" rel="noopener noreferrer">Fair Work Ombudsman</a>). You pay the salary
          through both.
        </li>
        <li>
          <strong>Other on-costs.</strong> Re:Sourced&apos;s{' '}
          <a href={SRC.rsCalc} target="_blank" rel="noopener noreferrer">cost-to-hire method</a> allows roughly 3 percent
          for workers compensation, leave loading and payroll administration. With super and NSW payroll tax included,
          it puts a senior AI engineer on a A$180,000 to A$220,000 base at A$217,000 to A$265,000 a year.
        </li>
        <li>
          <strong>A recruiter, if you use one.</strong> Australian law firm{' '}
          <a href={SRC.sprintlaw} target="_blank" rel="noopener noreferrer">Sprintlaw</a> puts contingent recruitment
          fees at 10 to 25 percent of total remuneration. On a base of A$170,000 to A$200,000 that is at least A$17,000
          to A$50,000, paid once.
        </li>
        <li>
          <strong>Time.</strong> Re:Sourced cites benchmark data that puts engineering searches at around 62 days from
          open to hire.
        </li>
      </ol>
      <p>
        We found no readable Australian source for equipment, software licences or the hours a manager spends on a new
        hire, so those are left out of every total on this page. They are real. Count them yourself.
      </p>
      <p>
        <strong>The trade-off.</strong> An employee learns your business and stays with it, and IP Australia says
        employers own the IP their employees create in relation to the business. Against that, hiring is slow, one person
        brings one set of skills, and the knowledge leaves when they do. This route suits a business with AI work that
        will run for years and someone technical to manage it.
      </p>

      <h2 id="contractor-freelancer-cost">How much does a contractor or freelance AI developer cost?</h2>
      <p>
        Published 2026 rates for AI contractors in Australia run from about A$800 a day for an AI engineer to A$1,150 a
        day for a senior one in Sydney. That is the second route: you pay for days worked, and the person stays their
        own boss.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Source</th>
              <th className="p-3 text-left border border-gray-700">Role</th>
              <th className="p-3 text-left border border-gray-700">Published contract rate, 2026</th>
              <th className="p-3 text-left border border-gray-700">Basis the source states</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold"><a href={SRC.rw} target="_blank" rel="noopener noreferrer">Robert Walters</a>, NSW</td>
              <td className="p-3 border border-gray-200">AI engineer; generative AI engineer; senior AI engineer</td>
              <td className="p-3 border border-gray-200">800 to 900; 900 to 1,000; 1,000 to 1,150</td>
              <td className="p-3 border border-gray-200">Column headed &quot;per hour&quot; (see note below). GST not stated.</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Robert Walters, Victoria</td>
              <td className="p-3 border border-gray-200">AI engineer; senior AI engineer</td>
              <td className="p-3 border border-gray-200">A$74 to A$90 an hour; A$125 to A$150 an hour</td>
              <td className="p-3 border border-gray-200">Per hour. GST not stated.</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Robert Walters, Queensland</td>
              <td className="p-3 border border-gray-200">AI engineer; senior AI engineer</td>
              <td className="p-3 border border-gray-200">A$90 to A$110 an hour; A$110 to A$130 an hour</td>
              <td className="p-3 border border-gray-200">Per hour. GST not stated.</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold"><a href={SRC.clicksEng} target="_blank" rel="noopener noreferrer">Clicks IT Recruitment</a>, national</td>
              <td className="p-3 border border-gray-200">AI developer; AI engineer</td>
              <td className="p-3 border border-gray-200">A$725 to A$935 a day; A$885 to A$1,040 a day</td>
              <td className="p-3 border border-gray-200">Eight-hour day, paid to the contractor, super included. Excludes agency margin and payroll tax. GST not stated.</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold"><a href={SRC.rsDay} target="_blank" rel="noopener noreferrer">Re:Sourced</a>, July 2026</td>
              <td className="p-3 border border-gray-200">Senior software contractor</td>
              <td className="p-3 border border-gray-200">Sydney A$800 to A$1,100 a day; Melbourne A$750 to A$1,050; Brisbane A$700 to A$950</td>
              <td className="p-3 border border-gray-200">Excludes GST. AI work is priced above this band, case by case.</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold"><a href={SRC.expert360} target="_blank" rel="noopener noreferrer">Expert360</a></td>
              <td className="p-3 border border-gray-200">Software developer: mid-level; senior; principal or lead</td>
              <td className="p-3 border border-gray-200">A$700 to A$950 a day; A$950 to A$1,200; A$1,200 to A$1,500</td>
              <td className="p-3 border border-gray-200">Indicative. Excludes agency margins. GST not stated.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <strong>A note on the Robert Walters NSW column.</strong> On page 210 of the PDF, the NSW contract column is
        headed &quot;Contract (per hour)&quot;, yet it prints 1,000 to 1,150 for a senior AI engineer. Nobody bills that
        by the hour. We read those NSW figures as day rates, for two reasons. The Victorian page of the same guide lists
        A$125 to A$150 an hour for the same role, and at 7.6 hours a day that is A$950 to A$1,140. And Re:Sourced&apos;s
        Sydney day rates fall in the same range. If you quote the guide in a negotiation, check which unit the other
        person means.
      </p>
      <p>
        Freelancers on global marketplaces are priced in US dollars.{' '}
        <a href={SRC.arc} target="_blank" rel="noopener noreferrer">Arc</a> puts senior freelance developers in
        Australia at US$90 to US$145 an hour on average, about A$130 to A$209, and in India at US$25 to US$60, about A$36
        to A$86. Arc says its ranges reflect broad market observations and are not fixed bands.
      </p>

      <figure className="my-8">
        <img
          src="/blog-images/hire-ai-developers-australia-cost-2026-contractor.webp"
          alt="A woman in a mustard jumper works alone at a white desk in a home office, typing at a monitor that shows grey boxes joined by arrows with one orange box"
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          A contractor sells days. The planning, testing and cover around those days are yours to supply.
        </figcaption>
      </figure>

      <h3 id="day-rate-hides">Four things a day rate does not show</h3>
      <ol className="list-decimal pl-6 space-y-3 mb-6">
        <li>
          <strong>GST.</strong> Day rates are usually quoted without it. Re:Sourced says so for its own table. A
          contractor registered for GST adds 10 percent, which a GST-registered business can normally claim back as a
          credit (<a href={SRC.atoGst} target="_blank" rel="noopener noreferrer">ATO</a>).
        </li>
        <li>
          <strong>Super you may still owe.</strong> The{' '}
          <a href={SRC.atoContractorSuper} target="_blank" rel="noopener noreferrer">ATO</a> says that if you pay an
          independent contractor mainly for their labour, they are an employee for super guarantee purposes, ABN or no
          ABN. A developer paid by the day to do the work personally can fall inside that rule. A contract with a
          company, trust or partnership does not carry it.
        </li>
        <li>
          <strong>Who owns the code.</strong>{' '}
          <a href={SRC.ipAustralia} target="_blank" rel="noopener noreferrer">IP Australia</a> states that IP created by
          a contractor belongs to the contractor unless the contract says otherwise. Without a clause, you have paid for
          code you do not own.
        </li>
        <li>
          <strong>Whether they are a contractor at all.</strong>{' '}
          <a href={SRC.bgaEmployee} target="_blank" rel="noopener noreferrer">business.gov.au</a> lists it as a myth
          that an ABN, an invoice or a written agreement makes someone a contractor, and says that calling an employee a
          contractor (sham contracting) is illegal. If one person works your hours under your direction for a year, get
          advice.
        </li>
      </ol>
      <p>
        <strong>The trade-off.</strong> Contractors start fast. Expert360 says it sends a shortlist within 48 hours and
        that most engagements begin within 5 to 10 business days. You pay only while the work lasts. You also do the
        managing yourself: writing the brief, reviewing the work and finding cover if they are sick. This route suits a
        defined piece of work lasting a few months, run by someone on your side who can judge the result.
      </p>

      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg my-8">
        <h3 className="text-lg font-bold mb-3">Not sure which route your job needs?</h3>
        <p className="mb-4">
          Bring one process and a rough count of how often it happens. In a 30-minute call with founder Bhavesh Barot we
          will tell you whether it needs an AI agent, a simple automation or an off-the-shelf tool, and whether an
          employee, a contractor or a team is the sensible way to get it built. FactoryJet quotes a fixed price in
          writing after a short scoping call.
        </p>
        <a
          href="https://calendly.com/bhavesh-factoryjet/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors"
        >
          Talk to the Founder
        </a>
      </div>

      <h2 id="dedicated-developers-cost">How much does it cost to hire dedicated developers?</h2>
      <p>
        A dedicated developer works only on your project but is employed by someone else: an agency or an outsourcing
        firm that pays them, equips them and replaces them if they leave. You are billed by the hour or the month. Two or
        more of them make a dedicated team. This is the third route, and the price depends mostly on where the firm is.
      </p>
      <h3 id="onshore-agency-rates">Australian agencies</h3>
      <p>
        <a href={SRC.conduct} target="_blank" rel="noopener noreferrer">Conduct</a>, an Australian software agency,
        publishes hourly bands by size of firm: <strong>A$123 to A$330</strong> for small and mid-size firms, A$330 to
        A$495 for large ones, and A$577 to A$1,402 for enterprise consultancies. For AI work specifically,{' '}
        <a href={SRC.wvd} target="_blank" rel="noopener noreferrer">Web Video Digital</a> says senior AI developers in
        Australia generally bill around <strong>A$180 to A$280 an hour</strong>. Neither page says whether GST is
        included.
      </p>
      <p>
        An agency hour costs more than a contractor hour because it buys more than one person. Someone plans the work,
        someone else tests it, and the firm carries the risk when a person is away. If you already have that in-house,
        you are paying for it twice.
      </p>
      <h3 id="offshore-rates">Offshore agencies and outsourcing firms</h3>
      <p>
        <a href={SRC.accelerance} target="_blank" rel="noopener noreferrer">Accelerance</a> surveyed 60 software
        development firms for its 2026 rates guide. It puts developers at outsourcing firms in Asia at US$24 to US$31 an
        hour for juniors and <strong>US$31 to US$41 for seniors</strong>. At A$1.4402 to the US dollar, that is about
        A$35 to A$45 and <strong>A$45 to A$59</strong>. Accelerance does not split out AI roles, so treat those as rates
        for general developers.
      </p>
      <p>
        To turn an hourly rate into a month, we use one working year for every route on this page: 230 working days, the
        figure Re:Sourced uses for a contractor&apos;s year, at 7.6 hours a day, which is the 38-hour week in the{' '}
        <a href={SRC.fwHours} target="_blank" rel="noopener noreferrer">National Employment Standards</a> spread over
        five days. That is 1,748 hours. A senior developer at Accelerance&apos;s Asian rates then comes to about A$78,000
        to A$103,000 a year, or roughly A$6,500 to A$8,600 a month.
      </p>

      <figure className="my-8">
        <img
          src="/blog-images/hire-ai-developers-australia-cost-2026-team.webp"
          alt="Four developers sit around a table with open laptops in a bright office while one of them points at a wall screen showing grey boxes joined by arrows with one orange box"
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          With a team, the hourly rate covers planning, testing and cover as well as the code.
        </figcaption>
      </figure>

      <h3 id="offshore-trade-offs">The trade-offs of going offshore</h3>
      <p>
        FactoryJet sells project work delivered remotely, so read this section as coming from an interested party. These
        are the trade-offs we would want a buyer to know.
      </p>
      <ul className="list-disc pl-6 space-y-3 mb-6">
        <li>
          <strong>The overlap can be an afternoon.</strong> Take a team in India, the most common offshore base. India is on UTC+5:30 all year. Sydney is on UTC+10, and UTC+11
          during daylight saving (<a href={SRC.tzIst} target="_blank" rel="noopener noreferrer">timeanddate</a>,{' '}
          <a href={SRC.tzAedt} target="_blank" rel="noopener noreferrer">timeanddate</a>). So a nine-to-six Indian day
          runs from 1:30 pm to 10:30 pm in Sydney, or from 2:30 pm in summer. That leaves two and a half to three and a
          half shared hours in a nine-to-five Sydney day. Ask any remote team which hours they will be online for you.
        </li>
        <li>
          <strong>You stay accountable for personal information.</strong> Under{' '}
          <a href={SRC.oaicApp8} target="_blank" rel="noopener noreferrer">Australian Privacy Principle 8</a>, a business
          covered by the Privacy Act must take reasonable steps before it discloses personal information overseas, and
          it is accountable if the overseas recipient mishandles it. The OAIC says handing personal information to an
          overseas contractor is, in most circumstances, a disclosure.
        </li>
        <li>
          <strong>The brief has to be written down.</strong> A team you cannot walk over to needs the job in writing:
          what goes in, what comes out, and what counts as done. A vague brief costs more offshore than it does in the
          next room.
        </li>
        <li>
          <strong>Nobody is on site.</strong> Workshops and handover happen on video. If you want a person in the
          building, this is the wrong route.
        </li>
      </ul>
      <p>
        A local firm is the better choice when the work needs security-cleared staff, when data must never leave
        Australia, or when you want to sit in the same room. We compare Australian firms in{' '}
        <a href="/blog/best-ai-agencies-australia-2026">the best AI agencies in Australia</a> and{' '}
        <a href="/blog/best-ai-consultancies-australia-2026">the best AI consultancies in Australia</a>.
      </p>

      <h2 id="twelve-month-comparison">Employee, contractor or agency: the first 12 months compared</h2>
      <p>
        Here is one senior AI engineer&apos;s worth of work for a year, priced four ways. Every input is a published
        range from the sections above, and the working is in the middle column so you can redo it with your own numbers.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Route</th>
              <th className="p-3 text-left border border-gray-700">How we added it up</th>
              <th className="p-3 text-left border border-gray-700">First 12 months</th>
              <th className="p-3 text-left border border-gray-700">GST basis</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Employee, small NSW business</td>
              <td className="p-3 border border-gray-200">Salary A$170,000 to A$200,000 (Robert Walters) + 12% super (A$20,400 to A$24,000)</td>
              <td className="p-3 border border-gray-200 font-semibold">A$190,400 to A$224,000</td>
              <td className="p-3 border border-gray-200">No GST on wages (<a href={SRC.atoWages} target="_blank" rel="noopener noreferrer">ATO</a>)</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">The same hire, found by a recruiter</td>
              <td className="p-3 border border-gray-200">The row above + a fee of 10% to 25% of the base salary (A$17,000 to A$50,000, Sprintlaw)</td>
              <td className="p-3 border border-gray-200 font-semibold">A$207,400 to A$274,000</td>
              <td className="p-3 border border-gray-200">Fee: GST not stated by the source</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Employee, larger NSW employer</td>
              <td className="p-3 border border-gray-200">Re:Sourced&apos;s own total on a A$180,000 to A$220,000 base: super 12%, payroll tax 5.45%, about 3% other on-costs</td>
              <td className="p-3 border border-gray-200 font-semibold">A$217,000 to A$265,000</td>
              <td className="p-3 border border-gray-200">No GST on wages</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Contractor, Sydney</td>
              <td className="p-3 border border-gray-200">A$1,000 to A$1,150 a day (Robert Walters) x 230 days</td>
              <td className="p-3 border border-gray-200 font-semibold">A$230,000 to A$264,500</td>
              <td className="p-3 border border-gray-200">Not stated. If ex GST, A$253,000 to A$290,950 with GST.</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Australian agency, time and materials</td>
              <td className="p-3 border border-gray-200">A$180 to A$280 an hour (Web Video Digital) x 1,748 hours</td>
              <td className="p-3 border border-gray-200 font-semibold">A$314,640 to A$489,440</td>
              <td className="p-3 border border-gray-200">Not stated</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Offshore outsourcing firm, Asia</td>
              <td className="p-3 border border-gray-200">US$31 to US$41 an hour (Accelerance) x 1.4402 x 1,748 hours</td>
              <td className="p-3 border border-gray-200 font-semibold">about A$78,000 to A$103,000</td>
              <td className="p-3 border border-gray-200">A GST-registered buyer should not be charged GST (<a href={SRC.atoImported} target="_blank" rel="noopener noreferrer">ATO</a>)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Read the table with three cautions. The offshore row is a general senior developer, because Accelerance publishes
        no AI band, so it is a floor. The agency row includes planning and testing that the contractor and offshore rows
        leave to you. And an employee&apos;s year is shorter than it looks: 52 weeks of five days is 260 days, less 20
        days of annual leave is 240, before public holidays and personal leave.
      </p>
      <h3 id="three-month-view">Three months is the fairer test</h3>
      <p>
        Few businesses need a full year of anyone for a first AI project. Thirteen weeks is 65 working days, or 494
        hours. On the same rates:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          <strong>Contractor, Sydney:</strong> 65 days x A$1,000 to A$1,150 = A$65,000 to A$74,750. Expert360&apos;s own
          estimate for a senior developer over three months is A$60,000 to A$95,000.
        </li>
        <li>
          <strong>Australian agency:</strong> 494 hours x A$180 to A$280 = A$88,920 to A$138,320.
        </li>
        <li>
          <strong>Offshore outsourcing firm:</strong> 494 hours x US$31 to US$41 x 1.4402 = about A$22,100 to A$29,200.
        </li>
        <li>
          <strong>Employee:</strong> not available for three months. The search alone takes about two.
        </li>
      </ul>
      <p>
        Many agencies, onshore and offshore, price a first build as a fixed project instead of by the hour. Published
        Australian ranges for those projects are in our{' '}
        <a href="/blog/ai-cost-australia-2026">AI cost guide for Australia</a>.
      </p>

      <h2 id="which-route">Which route fits you?</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700"></th>
              <th className="p-3 text-left border border-gray-700">Employee</th>
              <th className="p-3 text-left border border-gray-700">Contractor or freelancer</th>
              <th className="p-3 text-left border border-gray-700">Australian agency</th>
              <th className="p-3 text-left border border-gray-700">Offshore agency or dedicated team</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Best for</td>
              <td className="p-3 border border-gray-200">AI work that will run for years</td>
              <td className="p-3 border border-gray-200">One skill for a few months</td>
              <td className="p-3 border border-gray-200">A defined project, with people on site</td>
              <td className="p-3 border border-gray-200">A defined project or steady build work on a written brief</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">How you pay</td>
              <td className="p-3 border border-gray-200">Salary plus 12% super</td>
              <td className="p-3 border border-gray-200">Day or hourly rate</td>
              <td className="p-3 border border-gray-200">Hourly rate or fixed project price</td>
              <td className="p-3 border border-gray-200">Hourly or monthly rate, or fixed project price</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Time to start</td>
              <td className="p-3 border border-gray-200">About 62 days to hire (Re:Sourced)</td>
              <td className="p-3 border border-gray-200">Shortlist in 48 hours, start in 5 to 10 business days (Expert360)</td>
              <td className="p-3 border border-gray-200">Once scope and contract are agreed</td>
              <td className="p-3 border border-gray-200">Once scope and contract are agreed</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Who manages the work</td>
              <td className="p-3 border border-gray-200">You</td>
              <td className="p-3 border border-gray-200">You</td>
              <td className="p-3 border border-gray-200">The agency</td>
              <td className="p-3 border border-gray-200">The agency, with a written brief from you</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Who owns the code by default</td>
              <td className="p-3 border border-gray-200">You (IP Australia)</td>
              <td className="p-3 border border-gray-200">The contractor, unless the contract says otherwise</td>
              <td className="p-3 border border-gray-200">The agency, unless the contract says otherwise</td>
              <td className="p-3 border border-gray-200">The agency, unless the contract says otherwise</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Main risk</td>
              <td className="p-3 border border-gray-200">A slow, costly hire that is hard to undo</td>
              <td className="p-3 border border-gray-200">One person, no cover, and the super and IP traps</td>
              <td className="p-3 border border-gray-200">The highest hourly cost</td>
              <td className="p-3 border border-gray-200">Limited shared hours, and privacy duties you keep</td>
            </tr>
          </tbody>
        </table>
      </div>
      <details className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <summary className="font-semibold cursor-pointer text-[#1F2937]">
          Quick guide: which route should you price first?
        </summary>
        <ul className="list-disc pl-6 space-y-2 mt-4 mb-0">
          <li><strong>You have a technical lead and years of AI work ahead:</strong> price an employee, and brief a recruiter.</li>
          <li><strong>You have a technical lead and one job to finish:</strong> price a contractor for three months.</li>
          <li><strong>You have no engineers and want someone in the room:</strong> price an Australian agency on a fixed scope.</li>
          <li><strong>You have no engineers, a clear process and a tight budget:</strong> price an offshore agency on a fixed scope, and check the privacy and time zone points above.</li>
        </ul>
      </details>

      <h2 id="how-to-hire">How to hire dedicated developers or an AI developer in 7 steps</h2>
      <ol className="list-decimal pl-6 space-y-3 mb-6">
        <li>
          <strong>Write the job in one sentence.</strong> Say what the software will do and what it must never do
          unattended. &quot;Read supplier invoices and draft the bill in Xero, and never approve a payment&quot; is a
          brief. &quot;Use AI in finance&quot; is a wish.
        </li>
        <li>
          <strong>Decide whether it acts or answers.</strong> Use the checklist above. It changes who you need and what
          you pay.
        </li>
        <li>
          <strong>Pick the route.</strong> Employee, contractor or team, using the table above.
        </li>
        <li>
          <strong>Shortlist three from the right place.</strong> The places differ by route, and they are listed below.
        </li>
        <li>
          <strong>Interview on a failure.</strong> Ask about a system that went wrong after launch. The questions are
          below.
        </li>
        <li>
          <strong>Run a paid trial.</strong> One narrow task, a fixed fee and an end date.
        </li>
        <li>
          <strong>Sign a contract that covers four things:</strong> who owns the code, where data is stored, whether the
          person is an employee or a contractor, and what happens after go-live.
        </li>
      </ol>
      <h3 id="where-to-look">Where can I hire AI chatbot developers and AI agent developers?</h3>
      <ul className="list-disc pl-6 space-y-3 mb-6">
        <li>
          <strong>For an employee:</strong> a specialist recruiter or a job board. Re:Sourced&apos;s advice is to search
          for backend and platform engineers who have shipped an agent in the past eighteen months, because few people
          carry the agentic title yet.
        </li>
        <li>
          <strong>For a contractor in Australia:</strong> a contractor platform or a recruiter&apos;s contract desk.
          Expert360 describes itself as a local network of more than 40,000 vetted experts.
        </li>
        <li>
          <strong>For a freelancer anywhere:</strong> global marketplaces. When we put &quot;Where can I hire AI chatbot
          developers?&quot; to AI assistants on 9 October 2026, we read eight answers. The eight pages cited most often
          belonged to seven sites: Fiverr, Arc, Tecla, Braintrust, Freelancer, Lemon.io and Uplers. None had a .au
          address.
        </li>
        <li>
          <strong>For a team:</strong> an agency. Australian firms are compared in the two guides linked above. Remote
          project teams, FactoryJet among them, sell the same work delivered over video.
        </li>
      </ul>
      <h3 id="what-to-ask">What to ask before you hire</h3>
      <p>
        Re:Sourced argues against take-home tests for agent builders, because the visible part of an agent project is an
        afternoon of work and the hard part is failure handling. It suggests asking about a real system that went wrong.
        These are its five questions, in our words:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>What did it cost when it failed?</li>
        <li>How did you find out it was failing?</li>
        <li>Which steps did you make safe to run twice, and which could you not?</li>
        <li>Where did you put the human approval, and who decided that?</li>
        <li>What did you stop the agent from being able to do?</li>
      </ul>
      <p>
        Add four of ours for any contractor or agency: who owns the code, where will my data sit, what hours will you be
        online in my time zone, and who fixes it after go-live.
      </p>
      <h3 id="paid-trial">What a paid trial looks like</h3>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>One small, real task.</strong> For example, read one type of supplier email and draft the reply. Not a puzzle, and not free work.</li>
        <li><strong>A fixed fee and an end date,</strong> agreed in writing before it starts.</li>
        <li><strong>A written test for done.</strong> Ten real examples and the result you expect for each.</li>
        <li><strong>Your repository from day one.</strong> A repository is the shared folder where code is kept. If the code lives in your account, the trial leaves you with something whether or not you continue.</li>
        <li><strong>Test data, not live customer records,</strong> unless the privacy terms are already signed.</li>
      </ul>
      <p>
        A trial tells you three things an interview cannot: whether they ask good questions, whether the delivery
        matches what they said, and how they tell you about a problem.
      </p>

      <h2 id="contract-checks">What to check in the contract</h2>

      <figure className="my-8">
        <img
          src="/blog-images/hire-ai-developers-australia-cost-2026-contract.webp"
          alt="A woman with short silver hair holds an orange pen over a printed document while a man in a green polo shirt rests a finger on the page at a timber table"
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Four clauses decide whether you keep what you paid for: ownership, data, status and support.
        </figcaption>
      </figure>

      <h3 id="who-owns-code">Who owns the code</h3>
      <p>
        The default runs against the buyer. <a href={SRC.ipAustralia} target="_blank" rel="noopener noreferrer">IP
        Australia</a> says IP created by a contractor is the property of the contractor unless the contract states
        otherwise, and the{' '}
        <a href={SRC.bgaContract} target="_blank" rel="noopener noreferrer">business.gov.au contract guide</a> says the
        same: if the hirer wants to own the IP, the contract must say so. For an AI build, ask for the clause to name the
        code, the prompts, the test cases and the configuration. Ask too that cloud and AI accounts are opened in your
        name.
      </p>
      <h3 id="where-data-stored">Where data is stored and who can see it</h3>
      <p>
        Write down the cloud region, the named people with access, and whether real customer records or test data will
        be used during the build. If any personal information goes to a person or firm overseas, Australian Privacy
        Principle 8 applies and you remain accountable for how they handle it. That holds for an offshore agency, an
        offshore freelancer and an Australian agency that subcontracts abroad.
      </p>
      <h3 id="employee-or-contractor">Employee or contractor</h3>
      <p>
        State which one the person is, and make the working arrangement match. A written label does not settle it:
        business.gov.au says an agreement calling someone a contractor does not override an employment relationship or
        remove an employer&apos;s tax and super obligations. If you pay an individual mainly for their labour, check the
        ATO&apos;s super rule before the first invoice.
      </p>
      <h3 id="after-go-live">What happens after go-live</h3>
      <p>
        An AI agent needs upkeep, because the tools around it change. The contract should say how long defects are fixed
        at no charge, what a change costs after that, how much notice ends the arrangement, and what is handed over on
        the last day: code, credentials, documentation and a walkthrough.
      </p>

      <h2 id="gst-usd">GST and US dollars: the Australian details that change the number</h2>
      <ul className="list-disc pl-6 space-y-3 mb-6">
        <li>
          <strong>GST.</strong> It is 10 percent on most goods and services (
          <a href={SRC.atoGst} target="_blank" rel="noopener noreferrer">ATO</a>). There is no GST on wages. Of the
          rate sources on this page, only Re:Sourced states its basis (ex GST). Ask every contractor and agency to put
          the GST basis in the quote.
        </li>
        <li>
          <strong>Overseas suppliers.</strong> The{' '}
          <a href={SRC.atoImported} target="_blank" rel="noopener noreferrer">ATO</a> says a GST-registered Australian
          business that imports services should not be charged GST, provided it gives the supplier its ABN and states
          that it is registered. A business that is not registered will need to pay GST on those services. Check your own
          position with your accountant.
        </li>
        <li>
          <strong>US dollar billing.</strong> Offshore firms and marketplaces often quote in US dollars. At the rate we
          used, each US$10 an hour is A$14.40, and your cost moves with the exchange rate between quote and invoice.
        </li>
      </ul>

      <h2 id="where-factoryjet-fits">Where FactoryJet fits, and where it does not</h2>
      <p>
        We are the agency route. FactoryJet works as a remote project team on a fixed scope. We
        design, build, test and support AI agents and the systems around them, and you own what we build: the code, the
        prompts and the accounts. Bills for AI usage and hosting can sit in your own accounts at cost while we keep
        managing the servers, models and maintenance. We show working software on your own data before you sign a
        contract.
      </p>
      <p>
        We do not publish a rate card. FactoryJet quotes a fixed price in writing after a short scoping call. If an
        employee or a local contractor would suit you better, we will say so.
      </p>
      <p>
        Choose someone else if you need a person on site every week or staff with a security clearance. For a
        permanent in-house team, a recruiter is the right call.
      </p>
      <p>
        To see the work, read about{' '}
        <a href="/au/ai-development">custom AI development for Australian businesses</a>,{' '}
        <a href="/au/ai-agents">AI agent services in Australia</a> and{' '}
        <a href="/au/ai-consulting">AI consulting</a>. For project prices, use the{' '}
        <a href="/blog/ai-cost-australia-2026">AI cost guide for Australia</a>.
      </p>

      <h2 id="sources">Sources</h2>
      <p className="text-sm text-gray-600">
        All pages opened and read on 9 October 2026. Salary guides and rate cards change; check the source before you
        budget.
      </p>
      <ul className="list-disc pl-6 space-y-1 text-sm mb-8">
        <li><a href={SRC.rw} target="_blank" rel="noopener noreferrer">Robert Walters, Salary Guide 2026: Australia and New Zealand (mid-year edition, PDF)</a>, technology pages for NSW, Victoria and Queensland</li>
        <li><a href={SRC.rsHire} target="_blank" rel="noopener noreferrer">Re:Sourced, How to Hire Agentic AI Engineers in Australia</a>, <a href={SRC.rsWhat} target="_blank" rel="noopener noreferrer">What Is an Agentic AI Engineer?</a>, <a href={SRC.rsAiEng} target="_blank" rel="noopener noreferrer">What Is an AI Engineer?</a> (September 2026), <a href={SRC.rsDay} target="_blank" rel="noopener noreferrer">Tech Contractor Day Rates in Australia</a> (July 2026) and its <a href={SRC.rsCalc} target="_blank" rel="noopener noreferrer">cost-to-hire method</a></li>
        <li><a href={SRC.jsa} target="_blank" rel="noopener noreferrer">Jobs and Skills Australia, Software and Applications Programmers (ANZSCO 2613)</a>, median earnings from the ABS Survey of Employee Earnings and Hours, May 2025</li>
        <li><a href={SRC.seek} target="_blank" rel="noopener noreferrer">SEEK, Software Developer salary</a>, refreshed 1 October 2026</li>
        <li><a href={SRC.clicksEng} target="_blank" rel="noopener noreferrer">Clicks IT Recruitment, AI Engineer salary and rates</a> and <a href={SRC.clicksDev} target="_blank" rel="noopener noreferrer">AI Developer salary and rates</a></li>
        <li><a href={SRC.expert360} target="_blank" rel="noopener noreferrer">Expert360, software developers hiring guide</a></li>
        <li><a href={SRC.conduct} target="_blank" rel="noopener noreferrer">Conduct, How much does software development cost in Australia in 2026?</a> and <a href={SRC.wvd} target="_blank" rel="noopener noreferrer">Web Video Digital, Custom AI Agent Cost in Australia</a> (August 2026)</li>
        <li><a href={SRC.accelerance} target="_blank" rel="noopener noreferrer">Accelerance, 2026 outsourcing rate trends</a> (November 2025) and <a href={SRC.arc} target="_blank" rel="noopener noreferrer">Arc, Freelance Developer Rates in 2026</a></li>
        <li><a href={SRC.atoSuper} target="_blank" rel="noopener noreferrer">ATO, Super guarantee</a>, <a href={SRC.atoContractorSuper} target="_blank" rel="noopener noreferrer">Super for independent contractors</a>, <a href={SRC.atoGst} target="_blank" rel="noopener noreferrer">How GST works</a>, <a href={SRC.atoImported} target="_blank" rel="noopener noreferrer">GST on imported services</a> and <a href={SRC.atoWages} target="_blank" rel="noopener noreferrer">When you cannot claim a GST credit</a></li>
        <li><a href={SRC.nswPayroll} target="_blank" rel="noopener noreferrer">Revenue NSW, Payroll tax thresholds and rates</a></li>
        <li><a href={SRC.fwLeave} target="_blank" rel="noopener noreferrer">Fair Work Ombudsman, Annual leave</a>, <a href={SRC.fwSick} target="_blank" rel="noopener noreferrer">Paid sick and carer&apos;s leave</a> and <a href={SRC.fwHours} target="_blank" rel="noopener noreferrer">Hours of work</a></li>
        <li><a href={SRC.ipAustralia} target="_blank" rel="noopener noreferrer">IP Australia, Who owns intellectual property?</a>, <a href={SRC.bgaContract} target="_blank" rel="noopener noreferrer">business.gov.au, Prepare a contract</a> and <a href={SRC.bgaEmployee} target="_blank" rel="noopener noreferrer">Employee or contractor</a></li>
        <li><a href={SRC.oaicApp8} target="_blank" rel="noopener noreferrer">OAIC, APP Guidelines Chapter 8: cross-border disclosure of personal information</a></li>
        <li><a href={SRC.asd} target="_blank" rel="noopener noreferrer">Australian Signals Directorate, Careful adoption of agentic AI services</a> (1 May 2026)</li>
        <li><a href={SRC.sprintlaw} target="_blank" rel="noopener noreferrer">Sprintlaw, How do recruitment agencies work in Australia?</a> (December 2025)</li>
        <li><a href={SRC.awlabs} target="_blank" rel="noopener noreferrer">All Webbed Labs, Software developer rates in Australia (2026)</a>, which pointed us to several of the primary sources above</li>
        <li>Time zones: <a href={SRC.tzIst} target="_blank" rel="noopener noreferrer">India Standard Time</a> and <a href={SRC.tzAedt} target="_blank" rel="noopener noreferrer">Australian Eastern Daylight Time</a>, timeanddate</li>
        <li>Exchange rate: European Central Bank reference rate for 8 October 2026, US$1 = A$1.4402</li>
        <li>Our own measurements: 117 AI assistant answers to 14 Australian buyer questions, read on 9 October 2026</li>
      </ul>

      <div className="bg-[#FAF8F5] border-2 border-[#E5DFD7] p-6 sm:p-8 rounded-xl my-10 shadow-sm">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-2">
          AI scoping call for Australian businesses
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] mb-3">
          Get a fixed price for your first AI build
        </h3>
        <p className="text-[#4B5563] text-base leading-relaxed mb-6">
          Tell us the one process you want handled. We will tell you straight whether it needs a custom agent, an
          automation or an off-the-shelf tool, and whether hiring, contracting or a team is the sensible route. If it is
          a job for us, you get a fixed price in writing.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://calendly.com/bhavesh-factoryjet/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors shadow-sm"
          >
            Talk to the Founder
          </a>
          <a
            href="/au/ai-development"
            className="inline-flex items-center gap-2 bg-white text-[#1F2937] border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            See AI development in Australia
          </a>
        </div>
      </div>
    </article>
  ),
};

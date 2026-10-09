import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

/*
 * AI cost guide for the UK (2026).
 * Every pound figure below is a third-party UK market range, a vendor's published list price, an
 * advertised pay figure from ITJobsWatch, or an official rate from NHS Employers or GOV.UK. Each
 * page was fetched and read on 9 October 2026. None of the figures is a FactoryJet price.
 * Prices that a vendor bills in US dollars or euros stay in that currency on purpose: they are
 * not converted to pounds. The FAQ array below is the single source for both the visible FAQ and
 * the FAQPage JSON-LD (the blog route maps post.faqs into schema).
 */

const SRC = {
  augustovaAgent: 'https://www.augustova.co.uk/guides/what-an-ai-agent-costs-to-build-and-run',
  augustovaAuto: 'https://www.augustova.co.uk/guides/ai-automation-cost-uk',
  fulminous: 'https://fulminous.co.uk/ai-agent-development-cost-uk',
  leverx: 'https://leverx.com/en-gb/blog/ai-agent-development-cost-uk',
  spotdev: 'https://www.spotdev.co.uk/blog/how-much-do-ai-agents-cost-uk',
  aiAgencyPlus: 'https://aiagencyplus.com/ai-automation-cost-uk/',
  ronins: 'https://www.ronins.co.uk/ai-agency/',
  helium42: 'https://helium42.com/blog/ai-consultant-london',
  swDevUk: 'https://www.softwaredevelopment.co.uk/blog/how-much-do-uk-software-developers-charge-per-day',
  foresight: 'https://foresightmobile.com/blog/how-much-does-it-cost-to-build-an-app',
  openkit: 'https://openkit.co.uk/ai-services/large-language-model-development',
  aiIndex: 'https://hai.stanford.edu/ai-index/2024-ai-index-report',
  claude: 'https://claude.com/pricing',
  openai: 'https://developers.openai.com/api/docs/pricing',
  twilio: 'https://www.twilio.com/en-us/voice/pricing/gb',
  tidio: 'https://www.tidio.com/pricing/',
  intercom: 'https://www.intercom.com/pricing',
  zapier: 'https://zapier.com/pricing',
  n8n: 'https://n8n.io/pricing/',
  a1Chatbot: 'https://aiautomationagencylondon.co.uk/blog/ai-chatbot-cost-in-uk/',
  fasthosts: 'https://www.fasthosts.co.uk/spark/ai-receptionist',
  fasthostsGuide: 'https://www.fasthosts.co.uk/blog/how-much-does-an-ai-receptionist-cost/',
  voipShop: 'https://www.thevoipshop.co.uk/ai-receptionist-for-gp-clinics',
  softomate: 'https://www.softomatesolutions.com/blog/ai-receptionist-pricing-uk/',
  mbe: 'https://www.mbe.co.uk/business/telephone-answering',
  connect: 'https://www.connect-communications.co.uk/cost-calculator/call-answering-service-costs/',
  nhsEmployers: 'https://www.nhsemployers.org/articles/pay-scales-202627',
  nhsCareers: 'https://www.healthcareers.nhs.uk/explore-roles/wider-healthcare-team/roles-wider-healthcare-team/administration/receptionist',
  parliament: 'https://questions-statements.parliament.uk/written-questions/detail/2021-02-25/159040',
  govWage: 'https://www.gov.uk/national-minimum-wage-rates',
  govEmployer: 'https://www.gov.uk/guidance/rates-and-thresholds-for-employers-2026-to-2027',
  govPension: 'https://www.gov.uk/workplace-pensions/what-you-your-employer-and-the-government-pay',
  govVat: 'https://www.gov.uk/vat-rates',
  govVatThreshold: 'https://www.gov.uk/how-vat-works/vat-thresholds',
  ico: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/',
  ijwAiEngineerContract: 'https://www.itjobswatch.co.uk/contracts/uk/artificial%20intelligence%20engineer.do',
  ijwAiEngineerPerm: 'https://www.itjobswatch.co.uk/jobs/uk/artificial%20intelligence%20engineer.do',
  ijwAiDeveloperContract: 'https://www.itjobswatch.co.uk/contracts/uk/artificial%20intelligence%20developer.do',
  ijwAiDeveloperPerm: 'https://www.itjobswatch.co.uk/jobs/uk/artificial%20intelligence%20developer.do',
  ijwAiConsultantContract: 'https://www.itjobswatch.co.uk/contracts/uk/artificial%20intelligence%20consultant.do',
  ijwAiConsultantPerm: 'https://www.itjobswatch.co.uk/jobs/uk/artificial%20intelligence%20consultant.do',
  ijwSoftwareDeveloperContract: 'https://www.itjobswatch.co.uk/contracts/uk/software%20developer.do',
  ijwSoftwareDeveloperPerm: 'https://www.itjobswatch.co.uk/jobs/uk/software%20developer.do',
  ijwSoftwareEngineerContract: 'https://www.itjobswatch.co.uk/contracts/uk/software%20engineer.do',
  ijwDeveloperContract: 'https://www.itjobswatch.co.uk/contracts/uk/developer.do',
  ijwDeveloperPerm: 'https://www.itjobswatch.co.uk/jobs/uk/developer.do',
  ijwIosContract: 'https://www.itjobswatch.co.uk/contracts/uk/ios%20developer.do',
  ijwIosPerm: 'https://www.itjobswatch.co.uk/jobs/uk/ios%20developer.do',
  ijwAndroidContract: 'https://www.itjobswatch.co.uk/contracts/uk/android%20developer.do',
  ijwAndroidPerm: 'https://www.itjobswatch.co.uk/jobs/uk/android%20developer.do',
};

const faqs: FAQItem[] = [
  // AI agents: build
  {
    q: 'How much do AI agents cost?',
    a: 'In the UK in 2026, published build prices run from about £750 for an agent that does one job on one system to £200,000 or more for an enterprise multi-agent system. Augustova, which surveyed UK agencies with public price lists in September 2026, puts a single agent at £750 to £15,000 before VAT. Fulminous and LeverX, two software development firms, put a single-task agent at £8,000 to £30,000. Running costs come on top.',
  },
  {
    q: 'How much does it cost to build a custom AI agent?',
    a: 'It depends on how many systems the agent reads from and writes to. Fulminous, in its September 2026 UK guide, prices a simple single-task agent at £8,000 to £25,000 before VAT, a mid-range agent with several integrations at £25,000 to £75,000, and an advanced multi-agent system at £75,000 to £200,000 or more. Smaller UK agencies with public price lists start far lower, from £750 on the Augustova survey.',
  },
  {
    q: 'How much does it cost to build a custom AI agent in the UK?',
    a: 'Three UK guides we read on 9 October 2026 give three answers. Augustova says £750 to £15,000 for one agent, before VAT, at agencies that publish prices. Fulminous says £8,000 to £200,000 or more before VAT, by complexity. LeverX says £10,000 to £200,000 or more and does not state a VAT basis. The low figures are one-system agents built on existing platforms. The high figures are custom software with testing, security and compliance work included.',
  },
  {
    q: 'How much will it cost to develop an AI agent in 2026?',
    a: 'LeverX, whose UK guide was published on 4 October 2026, gives three bands: £10,000 to £30,000 for a single-workflow agent built in 5 to 9 weeks, £30,000 to £80,000 for a multi-step agent with integrations built in 10 to 18 weeks, and £80,000 to £200,000 or more for an enterprise multi-agent system built in 5 to 9 months. LeverX calls these indicative market benchmarks and says they are not its own fixed pricing.',
  },
  {
    q: 'How much does it cost to develop AI?',
    a: 'For most UK businesses, developing AI means building on a model that already exists, such as Claude or GPT, and connecting it to their own systems. Published UK prices for that run from about £750 for a one-job agent (Augustova, September 2026) to £200,000 or more for enterprise systems (Fulminous and LeverX). Training a new model from scratch is a different order of cost. The 2024 AI Index from Stanford estimated the computing bill for GPT-4 at US$78 million.',
  },
  // AI agents: running
  {
    q: 'How much do AI agents cost to run each month?',
    a: 'You pay for model usage, hosting, monitoring and upkeep. On the prices Anthropic publishes, our worked example of 2,000 conversations a month costs US$1.10 to US$44 in model usage, depending on the model. AI Agency Plus puts model usage for a typical UK small business at £5 to £100 a month. Fulminous budgets £150 to £5,000 or more a month for busier agents, plus 15 to 25 per cent of the build cost each year for maintenance.',
  },
  // Custom LLM
  {
    q: 'How much does it cost to develop a custom LLM?',
    a: 'Almost no small business should train one. The 2024 AI Index from Stanford estimated the training compute at US$78 million for GPT-4 and US$191 million for Gemini Ultra. The practical routes cost far less. OpenKit, a UK AI firm, puts fine-tuning an open model on your own data at £20,000 to £80,000 and a retrieval system that answers from your documents at £15,000 to £50,000, with 10 to 20 per cent more in regulated settings.',
  },
  {
    q: 'Can I make my own LLM model?',
    a: 'You can, but training a large language model from scratch is work for companies with tens of millions of dollars to spend on computing. The 2024 AI Index from Stanford put GPT-4 at an estimated US$78 million. A small business can get what it needs by building on an existing model. OpenKit, a UK firm, prices fine-tuning an open model at £20,000 to £80,000 and a document retrieval system at £15,000 to £50,000.',
  },
  // Chatbots
  {
    q: 'How much does it cost to develop a chatbot?',
    a: 'Ready-made chatbot software starts free. Tidio lists a free plan and paid plans from US$24.17 a month on annual billing. A custom AI chatbot connected to your own systems is a build. A1 Automation London, in a guide updated in July 2026, puts UK setup at £8,000 to £60,000 or more, with £100 to £2,000 or more a month to run. It puts a rule-based FAQ bot at £0 to £5,000 to set up.',
  },
  {
    q: 'Which AI chatbot is totally free?',
    a: 'Several have free plans with limits. Tidio lists a free plan at US$0 a month, and every Tidio account starts with 50 conversations with its AI agent, Lyro. Claude lists a free plan on its pricing page. Free tiers suit testing and low volume. A business site usually outgrows them because of conversation caps and the need to train the bot on its own content. The paid Lyro plan starts at US$32.50 a month.',
  },
  // Hiring
  {
    q: 'How much does it cost to hire an AI engineer?',
    a: 'ITJobsWatch, which tracks UK job adverts, shows a median advertised AI engineer salary of £87,500 for the six months to 9 October 2026, with the 10th to 90th percentile running from £52,000 to £112,500 across 487 quoted salaries. Contractors advertised a median of £600 a day, in a band of £422 to £881. Employer National Insurance at 15 per cent above £5,000 adds £12,375 to the median salary.',
  },
  {
    q: 'What is the average salary for an AI developer in the UK?',
    a: 'ITJobsWatch shows a median advertised salary of £75,000 for jobs titled AI developer in the six months to 9 October 2026, from 65 quoted salaries, with the 10th to 90th percentile at £57,750 to £142,500. Jobs titled AI engineer, a larger sample of 487 salaries, had a median of £87,500. These are advertised salaries, so they show what employers offer in adverts and may differ from what people in post are paid.',
  },
  {
    q: 'How much does it cost to hire an AI consultant?',
    a: 'ITJobsWatch shows UK contract AI consultants advertising a median of £564 a day in the six months to 9 October 2026, with the 10th to 90th percentile at £443 to £717 across 68 quoted rates. Consultancies charge by the project. Ronins, a UK agency, publishes £3,000 to £8,500 for discovery workshops and £12,000 to £30,000 for a proof of concept built on your own data.',
  },
  {
    q: 'How much does it cost to hire a developer?',
    a: 'For a UK developer in general, ITJobsWatch shows a median advertised salary of £60,000 across 6,590 quoted salaries in the six months to 9 October 2026, with the 10th to 90th percentile at £40,000 to £90,000. Contract developers advertised a median of £510 a day, in a band of £370 to £725. Software Development UK says agency rates typically run 40 to 80 per cent higher because they include testing, project management and delivery cover.',
  },
  {
    q: 'How much does it cost to hire an app developer in the UK?',
    a: 'On ITJobsWatch figures for the six months to 9 October 2026, contract iOS developers advertised £321 to £537 a day (10th to 90th percentile, median £401) and Android developers a median of £450 a day. Both samples are small, at 44 quoted rates each. An agency prices the whole app. Foresight Mobile, a UK app agency, says most business apps cost £15,000 to £80,000, in a guide updated on 6 October 2026.',
  },
  {
    q: 'What is the average hourly rate for software developers in the UK?',
    a: 'ITJobsWatch shows a median advertised contract rate of £50 an hour for UK software developers in the six months to 9 October 2026, with the 25th to 90th percentile at £43.75 to £70.60. That rests on only 37 hourly quotes, because most UK contracts are priced by the day: the median day rate was £525 across 254 quotes. Jobs titled software engineer advertised a median of £65 an hour across 320 quotes.',
  },
  // Receptionists
  {
    q: 'What is the cost of a GP receptionist in the UK?',
    a: 'NHS Health Careers says a receptionist is typically paid at Agenda for Change band 2 or 3. On the NHS Employers pay scales for 2026/27 that is £25,272 to £27,476 a year, or £12.92 to £14.05 an hour. Employer National Insurance at 15 per cent above £5,000 adds £3,040.80 to £3,371.40, before pension and holiday cover. GP practices are independent employers and set their own pay, so check the job advert.',
  },
  {
    q: 'What NHS band is a GP receptionist?',
    a: 'NHS Health Careers says receptionists are typically paid at Agenda for Change band 2 or 3. For GP surgeries that is a guide and not a rule. A Department of Health and Social Care answer to Parliament on 9 March 2021 said GP practices are self-employed contractors to the NHS and that pay and benefits for their staff are a matter for each practice. A surgery may pay above or below the band figures.',
  },
  {
    q: 'How much do AI receptionists cost?',
    a: 'UK plans we read on 9 October 2026 start at £30 to £39 a month before VAT. Fasthosts lists £39, £69 and £99 a month for 30 calls, 100 calls and unlimited calls. The VoIP Shop lists £30 and £120 a month for 50 and 200 calls on its plans for GP clinics. A July 2026 market guide from Fasthosts says most UK businesses pay £30 to £500 or more a month.',
  },
  {
    q: 'How much does a call answering service cost in the UK?',
    a: 'Human call answering in the UK is usually priced per call or per message. Mail Boxes Etc. lists live answering at £47.94 plus VAT a month for 20 calls, with extra calls at £1.50 falling to £1.10 each as volume rises. Connect Communications says its entry-level packages start from £14.99 a month plus VAT. AI receptionist plans are priced by calls included and start at £30 to £39 a month before VAT.',
  },
  {
    q: 'Is there an AI receptionist available in the UK?',
    a: 'Yes. Fasthosts sells an AI Receptionist on UK plans from £39 a month before VAT and says it handles calls in English and more than 30 other languages. The VoIP Shop sells an AI receptionist for GP clinics from £30 a month before VAT. Larger practices and multi-site businesses usually need a build that connects to their booking or clinical system, which is priced as a project.',
  },
  {
    q: 'Is there a free AI receptionist?',
    a: 'We did not find a permanently free AI receptionist plan among the UK providers we checked on 9 October 2026. Fasthosts offers the first month free on all three of its plans, then charges £39 to £99 a month before VAT. Phone answering uses paid telephone minutes and a phone number, so a free plan that takes real calls is unlikely. Use a trial to test your five most common call types.',
  },
  {
    q: 'Are AI receptionists worth it?',
    a: 'They are worth it when missed calls cost you work: callers who ring out of hours, at lunch, or while every line is busy. An AI receptionist answers each call, takes the details, books into a calendar and passes urgent calls to a person. It does not do the front desk half of a receptionist job. If you get few calls, a human answering service from £14.99 to £47.94 a month plus VAT (Connect Communications and Mail Boxes Etc.) may fit better.',
  },
  // Automation and prototypes
  {
    q: 'What are the best affordable AI automation platforms for small businesses under $5,000?',
    a: 'Zapier and n8n both publish entry prices far under that. Zapier lists a free plan with 100 tasks a month and paid plans from US$19.99 a month. n8n lists a hosted Starter plan at €20 a month, billed annually, for 2,500 workflow runs. If you want an agency to build the first workflow for you, the Augustova survey of twelve UK agencies puts that at £800 to £5,000 before VAT.',
  },
  {
    q: 'What is affordable automation software for small and mid-sized businesses?',
    a: 'The common choices are workflow tools that connect the apps you already use. Zapier has a free plan and paid plans from US$19.99 a month. n8n starts at €20 a month hosted, and its Pro plan is €50 a month for 10,000 workflow runs. AI Agency Plus, a UK firm, says running costs for automation sit at £40 to £400 a month depending on volume, on top of the build.',
  },
  {
    q: 'Who offers fixed-price development for building AI prototypes in under 30 days?',
    a: 'Several UK firms publish fixed prices and short timelines. SpotDev lists fixed packages from £8,000 to £45,000 and says a first rollout is typically live in two to three weeks. Fulminous gives 4 to 8 weeks for a simple agent and LeverX 5 to 9 weeks, so under 30 days suits a narrow first build only. FactoryJet quotes a fixed price in writing after a short scoping call, and shows working software on your own data before a contract.',
  },
  {
    q: 'Can I build my own AI for free?',
    a: 'You can test one for close to nothing. Zapier has a free plan with 100 tasks a month, Tidio has a free chatbot plan, and model usage for a small test costs cents. On the smallest current Claude model, 100 test conversations in our worked example cost under six US cents. What costs money is making it safe for customers: permissions, testing, data protection, monitoring and upkeep.',
  },
  // Overall and VAT
  {
    q: 'How much does AI cost in the UK?',
    a: 'It depends on which of five things you are buying. On figures we read on 9 October 2026: an AI receptionist subscription from £30 a month before VAT, chatbot software from free, a contract AI consultant at £443 to £717 a day, an AI engineer at £52,000 to £112,500 a year in salary, and a custom AI agent build from £750 to £200,000 or more. Each figure is sourced in the tables on this page.',
  },
  {
    q: 'Do UK AI prices include VAT?',
    a: 'Usually not. Fasthosts, The VoIP Shop, Mail Boxes Etc. and Connect Communications all quote before VAT, and Fulminous and Augustova state that their agent build ranges exclude VAT. LeverX, SpotDev and Foresight Mobile do not state a basis on the pages we read. The standard UK VAT rate is 20 per cent. Ask every supplier to state the basis in writing, and ask your accountant how much of the VAT you can reclaim.',
  },
];

export const post: BlogPost = {
  id: '752',
  slug: 'ai-cost-uk-2026',
  title: 'AI Cost in the UK (2026): What AI Agents, Consultants, Developers, Chatbots and AI Receptionists Cost, in Pounds',
  excerpt:
    'What UK businesses pay for AI in 2026, in pounds: custom AI agent builds, monthly running costs, AI consultant day rates, AI engineer and developer pay, chatbots, AI receptionists and the cost of a GP receptionist. Every figure is a published market range, vendor price or official rate with its source, date and VAT basis.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Oct 9, 2026',
  dateModified: 'Oct 9, 2026',
  readTime: '21 min read',
  imageUrl: '/blog-images/ai-cost-uk-2026-hero.webp',
  imageAlt:
    'Two people seen from behind at a pale oak table look at a laptop showing three grey cards and one orange card, with a calculator, a printed page and an orange mug beside it and a brick terrace outside the window',
  meta: {
    title: 'AI Agent, Consultant & Chatbot Cost UK 2026 | FactoryJet',
    description:
      'AI cost in the UK for 2026, in pounds: AI agent builds, consultant day rates, developer pay, chatbots and AI receptionists, with sources and VAT basis.',
  },
  keyTakeaways: [
    'A custom AI agent build in the UK runs from about £750 for one job on one system (Augustova survey, September 2026) to £200,000 or more for an enterprise multi-agent system (Fulminous and LeverX).',
    'Contract AI consultants advertised £443 to £717 a day and AI engineers £422 to £881 a day on ITJobsWatch in the six months to 9 October 2026.',
    'An employed AI engineer was advertised at £52,000 to £112,500 a year, median £87,500. Employer National Insurance at 15 per cent above £5,000 adds £12,375 to the median.',
    'Published UK AI receptionist plans start at £30 to £39 a month before VAT. A GP receptionist on NHS band 2 or 3 is £25,272 to £27,476 a year before employer costs.',
    'Model usage is usually the smallest running cost. Our worked example of 2,000 conversations a month costs US$1.10 to US$44 on the prices Anthropic publishes.',
    'Almost no small business should train its own LLM. Fine-tuning an open model runs £20,000 to £80,000 on OpenKit figures; training GPT-4 took an estimated US$78 million of computing.',
    'Most UK prices are quoted before VAT at 20 per cent. These are market ranges from named sources. FactoryJet quotes a fixed price in writing after a short scoping call.',
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
          Published UK prices in 2026 put a <strong>custom AI agent build at £750 to £200,000 or more</strong>, a{' '}
          <strong>contract AI consultant at £443 to £717 a day</strong>, an{' '}
          <strong>AI engineer at £52,000 to £112,500 a year</strong> in salary, and an{' '}
          <strong>AI receptionist from £30 a month</strong> before VAT. Chatbot software starts free. Running costs and
          VAT come on top.
        </p>
      </div>

      <div className="bg-[#FAF8F5] border-l-4 border-[#B23E13] p-5 rounded-r-lg mb-10">
        <p className="text-sm text-[#1F2937] leading-relaxed mb-0">
          <strong>These are market ranges, not our prices.</strong> Every figure on this page comes from a named UK guide, a
          vendor&apos;s public price page, ITJobsWatch, NHS Employers or GOV.UK. We opened and read each page on 9 October
          2026, and each one is linked in the sources list at the end. The worked examples are our own arithmetic on those
          published figures. Where a vendor bills in US dollars or euros we have left the price in that currency, because a
          pound figure would move with the exchange rate. Every table says whether its source quotes with or without VAT,
          or that the source does not state it.
        </p>
      </div>

      <p>
        On 9 October 2026 we read 175 answers that AI assistants gave to 19 cost questions UK buyers ask. For &quot;How much
        does it cost to build a custom AI agent?&quot; we read eight answers, and the eight small-firm pages they cited
        most were all cost guides. We opened seven of them the same day. The eighth sat behind a bot check, so we did not
        read it. All seven priced in US dollars. Across those seven pages we counted zero pound signs and zero mentions of
        VAT. This page is the pound version, with the source beside every number.
      </p>
      <p>
        It covers the seven things UK buyers price: building a custom AI agent, running it each month, an AI consultant, an
        AI engineer or developer (employee, contractor or agency), an AI chatbot, an AI receptionist set beside the cost of
        a human one, and a custom LLM. LLM stands for large language model, the kind of AI behind ChatGPT and Claude.
      </p>
      <p>
        We are FactoryJet, an AI services company that designs, builds and supports AI agents, automation and websites. We
        work remotely with UK clients. We are one of the firms you
        might compare, so we have kept our own prices off this page on purpose. FactoryJet was founded in 2014 by Bhavesh
        Barot and has served more than 500 businesses.
      </p>

      <h2 id="summary">AI cost in the UK at a glance (2026)</h2>
      <p>
        One table, twelve rows. Each row shows the UK range, where it comes from, and whether the source includes VAT.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">What you are buying</th>
              <th className="p-3 text-left border border-gray-700">UK range</th>
              <th className="p-3 text-left border border-gray-700">Source and date</th>
              <th className="p-3 text-left border border-gray-700">VAT basis</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Custom AI agent build</td>
              <td className="p-3 border border-gray-200">£750 to £15,000 for one agent (Augustova); £8,000 to £200,000+ by complexity (Fulminous); £10,000 to £200,000+ (LeverX)</td>
              <td className="p-3 border border-gray-200"><a href={SRC.augustovaAgent} target="_blank" rel="noopener noreferrer">Augustova</a>, 14 September 2026; <a href={SRC.fulminous} target="_blank" rel="noopener noreferrer">Fulminous</a>, 23 September 2026; <a href={SRC.leverx} target="_blank" rel="noopener noreferrer">LeverX</a>, 4 October 2026</td>
              <td className="p-3 border border-gray-200">Augustova and Fulminous exclude VAT; LeverX does not state it</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">AI agent running cost</td>
              <td className="p-3 border border-gray-200">Model usage £5 to £100 a month for a small business (AI Agency Plus) or £150 to £5,000+ a month for busier agents (Fulminous); maintenance 15% to 25% of the build cost a year (Fulminous)</td>
              <td className="p-3 border border-gray-200"><a href={SRC.aiAgencyPlus} target="_blank" rel="noopener noreferrer">AI Agency Plus</a>, 31 July 2026; <a href={SRC.fulminous} target="_blank" rel="noopener noreferrer">Fulminous</a></td>
              <td className="p-3 border border-gray-200">AI Agency Plus does not state it; Fulminous excludes VAT</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">AI consultant, contract day rate</td>
              <td className="p-3 border border-gray-200">£443 to £717 a day, median £564</td>
              <td className="p-3 border border-gray-200"><a href={SRC.ijwAiConsultantContract} target="_blank" rel="noopener noreferrer">ITJobsWatch</a>, six months to 9 October 2026</td>
              <td className="p-3 border border-gray-200">Not stated (advertised rates)</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">AI consultancy project</td>
              <td className="p-3 border border-gray-200">£3,000 to £8,500 for discovery workshops; £12,000 to £30,000 for a proof of concept</td>
              <td className="p-3 border border-gray-200"><a href={SRC.ronins} target="_blank" rel="noopener noreferrer">Ronins</a>, read 9 October 2026</td>
              <td className="p-3 border border-gray-200">Not stated</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">AI engineer, employee</td>
              <td className="p-3 border border-gray-200">£52,000 to £112,500 a year, median £87,500</td>
              <td className="p-3 border border-gray-200"><a href={SRC.ijwAiEngineerPerm} target="_blank" rel="noopener noreferrer">ITJobsWatch</a>, six months to 9 October 2026</td>
              <td className="p-3 border border-gray-200">Salary. Employer National Insurance is extra</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">AI engineer, contractor</td>
              <td className="p-3 border border-gray-200">£422 to £881 a day, median £600</td>
              <td className="p-3 border border-gray-200"><a href={SRC.ijwAiEngineerContract} target="_blank" rel="noopener noreferrer">ITJobsWatch</a>, six months to 9 October 2026</td>
              <td className="p-3 border border-gray-200">Not stated (advertised rates)</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Software developer, contractor</td>
              <td className="p-3 border border-gray-200">£365 to £612 a day, median £525; median £50 an hour</td>
              <td className="p-3 border border-gray-200"><a href={SRC.ijwSoftwareDeveloperContract} target="_blank" rel="noopener noreferrer">ITJobsWatch</a>, six months to 9 October 2026</td>
              <td className="p-3 border border-gray-200">Not stated (advertised rates)</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">App built by a UK agency</td>
              <td className="p-3 border border-gray-200">£15,000 to £80,000 for most business apps</td>
              <td className="p-3 border border-gray-200"><a href={SRC.foresight} target="_blank" rel="noopener noreferrer">Foresight Mobile</a>, updated 6 October 2026</td>
              <td className="p-3 border border-gray-200">Not stated</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">AI chatbot</td>
              <td className="p-3 border border-gray-200">Free plans; paid software from US$24.17 a month; custom build £8,000 to £60,000+</td>
              <td className="p-3 border border-gray-200"><a href={SRC.tidio} target="_blank" rel="noopener noreferrer">Tidio pricing</a>; <a href={SRC.a1Chatbot} target="_blank" rel="noopener noreferrer">A1 Automation London</a>, updated 14 July 2026</td>
              <td className="p-3 border border-gray-200">US dollar list price; build range does not state it</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">AI receptionist subscription</td>
              <td className="p-3 border border-gray-200">£30 to £120 a month on plans with a call limit; market guides say £30 to £500+</td>
              <td className="p-3 border border-gray-200"><a href={SRC.fasthosts} target="_blank" rel="noopener noreferrer">Fasthosts</a> and <a href={SRC.voipShop} target="_blank" rel="noopener noreferrer">The VoIP Shop</a>, read 9 October 2026</td>
              <td className="p-3 border border-gray-200">Excluded</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">GP receptionist, employee</td>
              <td className="p-3 border border-gray-200">£25,272 to £27,476 a year on NHS bands 2 and 3</td>
              <td className="p-3 border border-gray-200"><a href={SRC.nhsEmployers} target="_blank" rel="noopener noreferrer">NHS Employers</a> pay scales for 2026/27</td>
              <td className="p-3 border border-gray-200">Salary. Employer National Insurance is extra</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Custom LLM work</td>
              <td className="p-3 border border-gray-200">Fine-tuning £20,000 to £80,000; retrieval system £15,000 to £50,000</td>
              <td className="p-3 border border-gray-200"><a href={SRC.openkit} target="_blank" rel="noopener noreferrer">OpenKit</a>, read 9 October 2026</td>
              <td className="p-3 border border-gray-200">Not stated</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="ai-agent-cost">How much does it cost to build a custom AI agent in the UK?</h2>
      <p>
        An AI agent is software you give a goal to. It decides its own steps and uses tools to act on your systems: it
        books the appointment, updates the CRM, drafts the quote or checks the order. A chatbot answers a question. An
        agent finishes a task. That is why agents cost more to build.
      </p>
      <p>
        Three UK guides publish ranges in pounds, and at the low end they disagree by a factor of ten or more. Here they are side
        by side.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Size of agent</th>
              <th className="p-3 text-left border border-gray-700">Augustova (14 September 2026)</th>
              <th className="p-3 text-left border border-gray-700">Fulminous (23 September 2026)</th>
              <th className="p-3 text-left border border-gray-700">LeverX (4 October 2026)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">One job, one system</td>
              <td className="p-3 border border-gray-200">£750 to £5,000</td>
              <td className="p-3 border border-gray-200">£8,000 to £25,000, in 4 to 8 weeks</td>
              <td className="p-3 border border-gray-200">£10,000 to £30,000, in 5 to 9 weeks</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Several steps, several systems</td>
              <td className="p-3 border border-gray-200">£4,000 to £15,000</td>
              <td className="p-3 border border-gray-200">£25,000 to £75,000, in 2 to 4 months</td>
              <td className="p-3 border border-gray-200">£30,000 to £80,000, in 10 to 18 weeks</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Several agents working together</td>
              <td className="p-3 border border-gray-200">£5,000 to £25,000</td>
              <td className="p-3 border border-gray-200">£75,000 to £200,000+, in 4 to 9 months</td>
              <td className="p-3 border border-gray-200">£80,000 to £200,000+, in 5 to 9 months</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">VAT</td>
              <td className="p-3 border border-gray-200">Excluded</td>
              <td className="p-3 border border-gray-200">Excluded</td>
              <td className="p-3 border border-gray-200">Not stated</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Where the figures come from</td>
              <td className="p-3 border border-gray-200">Published 2026 prices at UK agencies</td>
              <td className="p-3 border border-gray-200">Its own indicative UK ranges</td>
              <td className="p-3 border border-gray-200">Indicative market benchmarks, not its own price list</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The gap has a plain cause. <a href={SRC.augustovaAgent} target="_blank" rel="noopener noreferrer">Augustova</a>{' '}
        collected the prices of UK agencies that publish a rate card. It says an agent that reads messages and takes
        one action is a few days of work on a platform such as n8n, Make or Zapier, and that integration is what you pay
        for after that.{' '}
        <a href={SRC.fulminous} target="_blank" rel="noopener noreferrer">Fulminous</a> and{' '}
        <a href={SRC.leverx} target="_blank" rel="noopener noreferrer">LeverX</a> are software development firms pricing
        custom code with discovery, testing, security and deployment inside the number. Augustova gives a rule you can use
        on any quote: a one-system agent sits under £5,000 and a several-system agent at £4,000 to £15,000, so a £12,000
        quote for an agent that reads a form and creates a CRM record needs a question about what else is in it.
      </p>
      <p>
        One UK consultancy publishes fixed packages instead of ranges.{' '}
        <a href={SRC.spotdev} target="_blank" rel="noopener noreferrer">SpotDev</a> says most businesses planning a build
        should budget <strong>£8,000 to £45,000</strong>, with a first rollout typically live in two to three weeks. Its
        page does not state a VAT basis.
      </p>
      <p>
        Fulminous also prices by the job the agent does, before VAT: a customer service agent at £20,000 to £70,000, a
        sales agent that qualifies leads and books meetings at £25,000 to £80,000, a back-office agent for data entry and
        invoices at £30,000 to £90,000, and a research agent at £20,000 to £65,000.
      </p>

      <figure className="my-8">
        <img
          src="/blog-images/ai-cost-uk-2026-build.webp"
          alt="A woman in a mustard cardigan lays blank white, grey and orange cards in a row on a white table while a man in a green jumper points at one card"
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Laying the steps out before anyone writes code is the lowest-cost way to shrink an AI agent quote.
        </figcaption>
      </figure>

      <h3 id="cost-drivers">7 things that move the price of an AI agent</h3>
      <ol className="list-decimal pl-6 space-y-3 mb-6">
        <li>
          <strong>How many systems it connects to.</strong> Each connection, such as your booking tool, CRM, Shopify store
          or Xero, adds build and testing time. Fulminous puts tool and API integration at 25 to 35 per cent of a build and
          calls it usually the largest line.
        </li>
        <li>
          <strong>Whether it only reads or also writes.</strong> An agent that looks up an order is simpler and safer than
          one that can issue a refund. Write access needs permissions, approvals and logs.
        </li>
        <li>
          <strong>How clean your data is.</strong> Scattered spreadsheets, old PDFs and duplicate customer records mean
          groundwork before the agent can start.
        </li>
        <li>
          <strong>How many exceptions the job has.</strong> The main path is quick to build. The edge cases, such as a
          customer in the Highlands or an order over a set value, are where the hours go.
        </li>
        <li>
          <strong>Testing.</strong> Fulminous puts testing and evaluation at 15 to 20 per cent of a build and calls it the
          line people cut and regret, because an agent that takes a wrong action can email the wrong person or change the
          wrong record.
        </li>
        <li>
          <strong>Data protection.</strong> Anything touching health, financial or other personal information needs extra
          design and testing under UK GDPR. OpenKit adds 10 to 20 per cent for regulated environments.
        </li>
        <li>
          <strong>Voice or text.</strong> Phone agents add telephony, speech and call transfers, and every minute is
          billed. Text chat has none of those costs.
        </li>
      </ol>

      <details className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <summary className="font-semibold cursor-pointer text-[#1F2937]">
          Checklist: is your first AI agent likely to sit at the low end of the range?
        </summary>
        <ul className="list-disc pl-6 space-y-2 mt-4 mb-0">
          <li>It does one job, such as booking, answering product questions or qualifying leads.</li>
          <li>It connects to one or two systems, not five.</li>
          <li>It can start read-only, with a person approving anything it changes.</li>
          <li>You can write down the rules a new member of staff would follow for this job.</li>
          <li>The data it needs is already in one place and mostly up to date.</li>
          <li>It does not handle health records, payment card details or other sensitive information.</li>
        </ul>
        <p className="mt-4 mb-0 text-sm text-gray-600">
          Four or more ticks usually means a narrow first build. Two or fewer means you should budget toward the middle of
          the range, or start with a paid discovery to cut the scope down.
        </p>
      </details>

      <h2 id="ai-agent-running-cost">How much do AI agents cost to run each month?</h2>
      <p>
        Once an agent is live you pay for four things: <strong>model usage</strong> (the AI provider bills per token, a
        token being roughly three quarters of a word), <strong>hosting</strong>, <strong>monitoring</strong> and{' '}
        <strong>maintenance</strong>. If the agent sends texts or takes phone calls, those are billed too. Most buyers
        overestimate the first line and forget the last.
      </p>
      <h3 id="model-usage">Model usage: a worked example on published prices</h3>
      <p>
        Anthropic publishes its Claude prices in US dollars per million tokens. We took a support agent handling{' '}
        <strong>2,000 conversations a month</strong>, assumed each one reads about 3,000 tokens (the question, your
        policies and the order details) and writes about 500, and worked out the bill. That is 6 million input tokens and
        1 million output tokens a month.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Model (Anthropic, read 9 October 2026)</th>
              <th className="p-3 text-left border border-gray-700">Price per million tokens, input / output</th>
              <th className="p-3 text-left border border-gray-700">Sum</th>
              <th className="p-3 text-left border border-gray-700">2,000 conversations a month</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200">Claude Haiku 5.5 (prompts up to 100,000 tokens)</td>
              <td className="p-3 border border-gray-200">US$0.10 / US$0.50</td>
              <td className="p-3 border border-gray-200">6 x 0.10 + 1 x 0.50</td>
              <td className="p-3 border border-gray-200 font-semibold">US$1.10</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200">Claude Sonnet 5.5</td>
              <td className="p-3 border border-gray-200">US$2 / US$10</td>
              <td className="p-3 border border-gray-200">6 x 2 + 1 x 10</td>
              <td className="p-3 border border-gray-200 font-semibold">US$22</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200">Claude Opus 5.5</td>
              <td className="p-3 border border-gray-200">US$4 / US$20</td>
              <td className="p-3 border border-gray-200">6 x 4 + 1 x 20</td>
              <td className="p-3 border border-gray-200 font-semibold">US$44</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-600">
        Arithmetic on the list prices at <a href={SRC.claude} target="_blank" rel="noopener noreferrer">claude.com/pricing</a>,
        read 9 October 2026, and our stated assumptions. It is not a quote. The bill arrives in US dollars, so the pound
        cost depends on the exchange rate on the day your card is charged.
      </p>
      <p>
        UK guides give wider figures because they assume different volumes.{' '}
        <a href={SRC.aiAgencyPlus} target="_blank" rel="noopener noreferrer">AI Agency Plus</a> says £5 to £100 a month is
        the realistic range for a typical small business running a few automations. Fulminous says £150 to £5,000 or more
        a month, because agents that reason over many steps use more tokens than a simple chatbot. Both can be true. Ask
        any supplier to model your own monthly volume before the build starts.
      </p>

      <figure className="my-8">
        <img
          src="/blog-images/ai-cost-uk-2026-running.webp"
          alt="A woman with a ponytail sits at a kitchen table holding an orange mug and looks at a laptop showing a bar chart of grey bars and one orange bar, with an open blank notebook beside her"
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Usage bills grow with volume. A quiet month costs less than a busy one.
        </figcaption>
      </figure>

      <h3 id="hosting-monitoring-maintenance">Hosting, monitoring and maintenance</h3>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          <strong>Hosting.</strong> We found no UK guide that prices hosting for a custom agent on its own, so we give no
          range for it. Two published data points for agents built on a workflow platform:{' '}
          <a href={SRC.n8n} target="_blank" rel="noopener noreferrer">n8n</a> lists hosted plans at €20 a month for 2,500
          workflow runs and €50 a month for 10,000, billed annually, and AI Agency Plus says the free self-hosted edition
          runs on a small server for £5 to £15 a month.
        </li>
        <li>
          <strong>Monitoring.</strong> No UK source we read prices monitoring by itself. It is sold inside a support
          retainer. The <a href={SRC.augustovaAuto} target="_blank" rel="noopener noreferrer">Augustova survey of twelve UK agencies</a>{' '}
          puts retainers at £350 to £2,000 a month before VAT. AI Agency Plus says £400 to £1,200 a month for a business
          running several workflows in production.
        </li>
        <li>
          <strong>Maintenance.</strong> Fulminous budgets <strong>15 to 25 per cent of the build cost each year</strong>{' '}
          for prompt changes, test updates and keeping pace with new models.
        </li>
        <li>
          <strong>Texts and calls.</strong> AI Agency Plus puts a UK text message at roughly 4p to 5p and a minute of AI
          voice at 15p to 20p. The raw parts cost less:{' '}
          <a href={SRC.openai} target="_blank" rel="noopener noreferrer">OpenAI</a> lists its gpt-live-1 voice sessions at
          US$0.05 a minute with backend model and tool usage charged separately, and{' '}
          <a href={SRC.twilio} target="_blank" rel="noopener noreferrer">Twilio</a> lists US$0.01 a minute to receive a
          call on a UK local number plus US$3.50 a month for the number.
        </li>
      </ul>
      <p>
        Augustova worked two examples at stated volumes and found the model was the smallest line in both. Its inbound
        enquiry agent, at 400 written enquiries and 300 calls a month, came to about £187 to £232 a month, of which the
        model was £5.91. Without the phone channel it was about £40. One design decision, whether the agent talks on the
        phone, moved the bill more than the choice of model did.
      </p>

      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg my-8">
        <h3 className="text-lg font-bold mb-3">Get the number for your own business</h3>
        <p className="mb-4">
          Bring one process and a rough count of how often it happens. In a 30-minute call with founder Bhavesh Barot we
          will tell you whether it needs an agent, a simple automation or an off-the-shelf tool, and what building and
          running it would involve. FactoryJet quotes a fixed price in writing after a short scoping call.
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

      <h2 id="ai-consultant-cost">How much does it cost to hire an AI consultant in the UK?</h2>
      <p>
        An AI consultant helps you decide where AI will pay off, what to build or buy, and how to do it safely. Some only
        advise. Others advise and then build. You can buy that help three ways: a contractor by the day, a consultancy by
        the project, or an employee.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Way of buying</th>
              <th className="p-3 text-left border border-gray-700">UK range</th>
              <th className="p-3 text-left border border-gray-700">Source</th>
              <th className="p-3 text-left border border-gray-700">VAT basis</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Contract AI consultant, per day</td>
              <td className="p-3 border border-gray-200">£443 to £717 (10th to 90th percentile), median £564, from 68 advertised rates</td>
              <td className="p-3 border border-gray-200"><a href={SRC.ijwAiConsultantContract} target="_blank" rel="noopener noreferrer">ITJobsWatch</a>, six months to 9 October 2026</td>
              <td className="p-3 border border-gray-200">Not stated</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">AI, machine learning or security specialist through an agency or consultancy, per day</td>
              <td className="p-3 border border-gray-200">£1,100 to £1,600</td>
              <td className="p-3 border border-gray-200"><a href={SRC.swDevUk} target="_blank" rel="noopener noreferrer">Software Development UK</a>, 2026 guide (its own typical ranges)</td>
              <td className="p-3 border border-gray-200">Not stated</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Automation work, per hour</td>
              <td className="p-3 border border-gray-200">£75 to £150</td>
              <td className="p-3 border border-gray-200"><a href={SRC.aiAgencyPlus} target="_blank" rel="noopener noreferrer">AI Agency Plus</a>, 31 July 2026</td>
              <td className="p-3 border border-gray-200">Not stated</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Audit at a small UK agency</td>
              <td className="p-3 border border-gray-200">Free to £2,000, often credited against the build</td>
              <td className="p-3 border border-gray-200"><a href={SRC.augustovaAuto} target="_blank" rel="noopener noreferrer">Augustova</a>, twelve agencies, 12 September 2026</td>
              <td className="p-3 border border-gray-200">Excluded</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Discovery workshops</td>
              <td className="p-3 border border-gray-200">£3,000 to £8,500</td>
              <td className="p-3 border border-gray-200"><a href={SRC.ronins} target="_blank" rel="noopener noreferrer">Ronins</a>, read 9 October 2026</td>
              <td className="p-3 border border-gray-200">Not stated</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Proof of concept on your own data</td>
              <td className="p-3 border border-gray-200">£12,000 to £30,000</td>
              <td className="p-3 border border-gray-200"><a href={SRC.ronins} target="_blank" rel="noopener noreferrer">Ronins</a>, read 9 October 2026</td>
              <td className="p-3 border border-gray-200">Not stated</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Employed AI consultant, per year</td>
              <td className="p-3 border border-gray-200">£60,000 to £100,000 (10th to 90th percentile), median £82,500, from 147 advertised salaries</td>
              <td className="p-3 border border-gray-200"><a href={SRC.ijwAiConsultantPerm} target="_blank" rel="noopener noreferrer">ITJobsWatch</a>, six months to 9 October 2026</td>
              <td className="p-3 border border-gray-200">Salary</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        London sits above all of this. <a href={SRC.helium42} target="_blank" rel="noopener noreferrer">Helium42</a>, a
        London consultancy, says boutique consultants there charge £200 to £500 an hour and that executive strategy
        workshops cost £5,000 to £15,000 a day. That is one firm describing the top of its own market, so treat it as a
        ceiling.
      </p>
      <p>
        Software Development UK is open about the limit of its figures: it says no UK trade body publishes what agencies
        charge, so its consultancy column is a typical market range and not a survey. The ITJobsWatch rows are counted
        from adverts, which is why we show how many rates sit behind each one.
      </p>
      <p>
        A good discovery engagement ends with a written list of use cases ranked by value and effort, the systems each one
        touches, the data protection risks, and a fixed-price quote for the first build. If you pay for discovery and
        leave with slides and no scope, you paid for a conversation. To compare firms, see our list of{' '}
        <a href="/blog/best-ai-consultancies-uk-2026">AI consultancies in the UK</a>.
      </p>

      <h2 id="ai-engineer-cost">How much does it cost to hire an AI engineer or developer in the UK?</h2>
      <p>
        ITJobsWatch counts the pay figures in UK IT job adverts over a rolling six months. The table below is its picture
        for the six months to 9 October 2026. Each cell shows the 10th to 90th percentile with the median in brackets. Where
        the site does not publish a percentile because the sample is thin, we say so.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Job title in the advert</th>
              <th className="p-3 text-left border border-gray-700">Contractor, per day</th>
              <th className="p-3 text-left border border-gray-700">Employee, per year</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">AI engineer</td>
              <td className="p-3 border border-gray-200"><a href={SRC.ijwAiEngineerContract} target="_blank" rel="noopener noreferrer">£422 to £881 (£600)</a>, 336 rates</td>
              <td className="p-3 border border-gray-200"><a href={SRC.ijwAiEngineerPerm} target="_blank" rel="noopener noreferrer">£52,000 to £112,500 (£87,500)</a>, 487 salaries</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">AI developer</td>
              <td className="p-3 border border-gray-200"><a href={SRC.ijwAiDeveloperContract} target="_blank" rel="noopener noreferrer">£460 to £638 (£538)</a>, 32 rates</td>
              <td className="p-3 border border-gray-200"><a href={SRC.ijwAiDeveloperPerm} target="_blank" rel="noopener noreferrer">£57,750 to £142,500 (£75,000)</a>, 65 salaries</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Software developer</td>
              <td className="p-3 border border-gray-200"><a href={SRC.ijwSoftwareDeveloperContract} target="_blank" rel="noopener noreferrer">£365 to £612 (£525)</a>, 254 rates</td>
              <td className="p-3 border border-gray-200"><a href={SRC.ijwSoftwareDeveloperPerm} target="_blank" rel="noopener noreferrer">£40,000 to £95,000 (£65,000)</a>, 1,240 salaries</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Developer (any kind)</td>
              <td className="p-3 border border-gray-200"><a href={SRC.ijwDeveloperContract} target="_blank" rel="noopener noreferrer">£370 to £725 (£510)</a>, 3,492 rates</td>
              <td className="p-3 border border-gray-200"><a href={SRC.ijwDeveloperPerm} target="_blank" rel="noopener noreferrer">£40,000 to £90,000 (£60,000)</a>, 6,590 salaries</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">iOS developer</td>
              <td className="p-3 border border-gray-200"><a href={SRC.ijwIosContract} target="_blank" rel="noopener noreferrer">£321 to £537 (£401)</a>, 44 rates</td>
              <td className="p-3 border border-gray-200"><a href={SRC.ijwIosPerm} target="_blank" rel="noopener noreferrer">£47,000 to £90,000 (£85,000)</a>, 10th to 75th percentile, 46 salaries; 90th not published</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Android developer</td>
              <td className="p-3 border border-gray-200"><a href={SRC.ijwAndroidContract} target="_blank" rel="noopener noreferrer">£363 to £585 (£450)</a>, 25th to 90th percentile, 44 rates; 10th not published</td>
              <td className="p-3 border border-gray-200"><a href={SRC.ijwAndroidPerm} target="_blank" rel="noopener noreferrer">£47,000 to £90,000 (£82,500)</a>, 10th to 75th percentile, 36 salaries; 90th not published</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-600">
        These are advertised figures, not agreed ones, and ITJobsWatch does not state a VAT basis for day rates. Outside
        London the AI engineer medians were lower: £513 a day and £80,000 a year.
      </p>

      <h3 id="employee-cost">What an employed AI engineer costs on top of salary</h3>
      <p>
        Salary is the start. <a href={SRC.govEmployer} target="_blank" rel="noopener noreferrer">GOV.UK</a> sets employer
        National Insurance for 2026 to 2027 at 15 per cent on earnings above £5,000 a year. On the median AI engineer
        salary that is (£87,500 minus £5,000) x 15 per cent = <strong>£12,375</strong>, which makes £99,875 before anything
        else. The legal minimum employer pension contribution is{' '}
        <a href={SRC.govPension} target="_blank" rel="noopener noreferrer">3 per cent</a>. Equipment, recruitment fees and
        the months before a new hire ships anything come after that. Eligible employers can take up to £10,500 off their
        National Insurance bill with the Employment Allowance for 2026 to 2027.
      </p>
      <p>
        A contractor at the median £600 a day costs £12,000 for a 20-day month, and £8,440 to £17,620 across the 10th to
        90th percentile. You pay only for the days you book, and you carry the job of checking the work.
      </p>

      <h3 id="app-developer-cost">How much does it cost to hire an app developer in the UK?</h3>
      <p>
        By the day, the two rows at the bottom of the table apply: contract iOS developers advertised a median of £401 and
        Android developers £450. Both rest on 44 rates, so read them as a rough guide. By the project,{' '}
        <a href={SRC.foresight} target="_blank" rel="noopener noreferrer">Foresight Mobile</a>, a UK app agency, says in a
        guide updated on 6 October 2026 that most business apps cost <strong>£15,000 to £80,000</strong>: £15,000 to
        £40,000 for a simple app, £40,000 to £80,000 for one with accounts, payments and integrations, and £80,000 or more
        for complex builds. Those are the prices it quotes, for one codebase that ships to both iPhone and Android.
      </p>

      <h3 id="hourly-rate">What is the average hourly rate for software developers in the UK?</h3>
      <p>
        Few UK contracts are advertised by the hour, so the samples are thin. On{' '}
        <a href={SRC.ijwSoftwareDeveloperContract} target="_blank" rel="noopener noreferrer">ITJobsWatch</a>, adverts for a
        software developer showed a median of <strong>£50 an hour</strong> from 37 hourly quotes, with the 25th to 90th
        percentile at £43.75 to £70.60. Adverts for a{' '}
        <a href={SRC.ijwSoftwareEngineerContract} target="_blank" rel="noopener noreferrer">software engineer</a> showed a
        median of £65 an hour from 320 quotes, with the 10th to 90th percentile at £51.75 to £75. Software Development UK
        gives a similar picture for freelancers: £40 to £55 an hour for mid-weight work and £60 to £95 for senior.
      </p>

      <h3 id="agency-rates">What an agency charges per day</h3>
      <p>
        Software Development UK says UK agency and consultancy rates typically run 40 to 80 per cent above the contractor
        rate for the same seniority, because they include testing, project management and delivery cover. Its 2026 table
        puts a mid-weight developer through an agency at £600 to £850 a day and a senior at £800 to £1,150. For a list of
        firms that build AI agents for UK businesses, see our guide to{' '}
        <a href="/blog/best-ai-agent-development-companies-uk-2026">AI agent development companies in the UK</a>.
      </p>

      <h2 id="ai-chatbot-cost">How much does it cost to develop a chatbot?</h2>
      <p>
        A chatbot answers questions in a chat window on your website. It does not change anything in your systems, so it
        costs much less than an agent. Most businesses buy chatbot software. The well-known tools bill in US dollars, so
        those rows stay in dollars.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Option</th>
              <th className="p-3 text-left border border-gray-700">Published price</th>
              <th className="p-3 text-left border border-gray-700">How it is billed</th>
              <th className="p-3 text-left border border-gray-700">Source</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Tidio Free</td>
              <td className="p-3 border border-gray-200">US$0 a month</td>
              <td className="p-3 border border-gray-200">Free plan with limits</td>
              <td className="p-3 border border-gray-200"><a href={SRC.tidio} target="_blank" rel="noopener noreferrer">Tidio pricing</a></td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Tidio Starter</td>
              <td className="p-3 border border-gray-200">US$24.17 a month</td>
              <td className="p-3 border border-gray-200">Annual billing</td>
              <td className="p-3 border border-gray-200"><a href={SRC.tidio} target="_blank" rel="noopener noreferrer">Tidio pricing</a></td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Tidio Lyro AI agent</td>
              <td className="p-3 border border-gray-200">From US$32.50 a month</td>
              <td className="p-3 border border-gray-200">By AI conversations a month</td>
              <td className="p-3 border border-gray-200"><a href={SRC.tidio} target="_blank" rel="noopener noreferrer">Tidio pricing</a></td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Intercom Essential with Fin AI Agent</td>
              <td className="p-3 border border-gray-200">US$19 a seat a month, plus US$0.99 per outcome</td>
              <td className="p-3 border border-gray-200">Annual billing; per resolved conversation</td>
              <td className="p-3 border border-gray-200"><a href={SRC.intercom} target="_blank" rel="noopener noreferrer">Intercom pricing</a></td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Rule-based FAQ chatbot, UK</td>
              <td className="p-3 border border-gray-200">£0 to £5,000 to set up; £30 to £200 a month</td>
              <td className="p-3 border border-gray-200">Setup plus monthly</td>
              <td className="p-3 border border-gray-200"><a href={SRC.a1Chatbot} target="_blank" rel="noopener noreferrer">A1 Automation London</a>, updated 14 July 2026</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Custom AI chatbot connected to your systems, UK</td>
              <td className="p-3 border border-gray-200">£8,000 to £60,000+ to set up; £100 to £2,000+ a month</td>
              <td className="p-3 border border-gray-200">Project fee plus monthly</td>
              <td className="p-3 border border-gray-200"><a href={SRC.a1Chatbot} target="_blank" rel="noopener noreferrer">A1 Automation London</a>, updated 14 July 2026</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        A1 Automation London calls its figures planning ranges and does not state a VAT basis. The per-outcome model is
        worth a sum of your own. At US$0.99 a resolution, 1,000 resolved chats a month is US$990 before helpdesk seats.
        That can be good value for a busy online shop and poor value for a business with a handful of chats a day.
      </p>
      <p>
        If the chatbot needs to check orders, change bookings or issue refunds, you are pricing an AI agent. Fulminous puts
        a customer service agent that resolves queries end to end at £20,000 to £70,000 before VAT.
      </p>

      <h2 id="ai-receptionist-cost">AI receptionist cost in the UK, next to the cost of a GP receptionist</h2>
      <p>
        An AI receptionist answers your phone, talks to the caller, takes the details, books into a calendar and passes
        urgent calls to a person. Two UK providers publish plan prices that we could read on 9 October 2026.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Provider and plan</th>
              <th className="p-3 text-left border border-gray-700">Monthly price</th>
              <th className="p-3 text-left border border-gray-700">Included</th>
              <th className="p-3 text-left border border-gray-700">Extra calls</th>
              <th className="p-3 text-left border border-gray-700">VAT</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold"><a href={SRC.fasthosts} target="_blank" rel="noopener noreferrer">Fasthosts AI Receptionist</a>: Lite, Plus, Unlimited</td>
              <td className="p-3 border border-gray-200">£39 / £69 / £99</td>
              <td className="p-3 border border-gray-200">30 calls / 100 calls / unlimited calls; first month free</td>
              <td className="p-3 border border-gray-200">£0.49 / £0.39 per call / none</td>
              <td className="p-3 border border-gray-200">Excluded</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold"><a href={SRC.voipShop} target="_blank" rel="noopener noreferrer">The VoIP Shop</a>, AI receptionist for GP clinics: Premium, Ultimate</td>
              <td className="p-3 border border-gray-200">£30 / £120</td>
              <td className="p-3 border border-gray-200">50 calls / 200 calls</td>
              <td className="p-3 border border-gray-200">£0.30 per call</td>
              <td className="p-3 border border-gray-200">Excluded</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Two market guides widen the picture. <a href={SRC.fasthostsGuide} target="_blank" rel="noopener noreferrer">Fasthosts</a>,
        in a guide dated 9 July 2026, says most UK businesses pay £30 to £500 or more a month, and that custom-built voice
        agents can cost £2,000 to £4,000 or more to set up before monthly fees.{' '}
        <a href={SRC.softomate} target="_blank" rel="noopener noreferrer">Softomate</a>, in a guide updated on 1 October
        2026, says most UK businesses pay £150 to £500 a month for a receptionist that also books appointments, and that
        UK services add VAT at 20 per cent to quoted prices. Both firms sell AI receptionists.
      </p>
      <p>
        Count your calls before you pick a plan. On the Fasthosts Lite plan, 60 calls in a month is £39 plus 30 extra
        calls at £0.49, which is £53.70 before VAT. The Plus plan at £69 covers 100.
      </p>

      <figure className="my-8">
        <img
          src="/blog-images/ai-cost-uk-2026-receptionist.webp"
          alt="A receptionist with short silver hair and a telephone headset sits at a surgery front desk looking at a calendar of grey and orange blocks on her monitor, with a desk phone, an orange folder and empty waiting room chairs beyond"
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          A receptionist does far more than answer the phone, which is why the two costs are not like for like.
        </figcaption>
      </figure>

      <h3 id="gp-receptionist-cost">What is the cost of a GP receptionist in the UK?</h3>
      <p>
        <a href={SRC.nhsCareers} target="_blank" rel="noopener noreferrer">NHS Health Careers</a> says a receptionist is
        typically paid at Agenda for Change band 2 or 3 and works about 37.5 hours a week. Agenda for Change is the NHS
        pay system. These are the figures on the{' '}
        <a href={SRC.nhsEmployers} target="_blank" rel="noopener noreferrer">NHS Employers pay scales for 2026/27</a>,
        effective from 1 April 2026.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Measure</th>
              <th className="p-3 text-left border border-gray-700">Band 2</th>
              <th className="p-3 text-left border border-gray-700">Band 3</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Annual pay</td>
              <td className="p-3 border border-gray-200">£25,272</td>
              <td className="p-3 border border-gray-200">£25,760 to £27,476</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Hourly rate</td>
              <td className="p-3 border border-gray-200">£12.92</td>
              <td className="p-3 border border-gray-200">£13.17 to £14.05</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Annual pay with the inner London supplement</td>
              <td className="p-3 border border-gray-200">£31,066</td>
              <td className="p-3 border border-gray-200">£31,554 to £33,270</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Employer National Insurance, our sum at 15% above £5,000</td>
              <td className="p-3 border border-gray-200">£3,040.80</td>
              <td className="p-3 border border-gray-200">£3,114 to £3,371.40</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Pay plus employer National Insurance</td>
              <td className="p-3 border border-gray-200">£28,312.80</td>
              <td className="p-3 border border-gray-200">£28,874 to £30,847.40</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        So a GP receptionist on band 2 or 3 costs about <strong>£28,300 to £30,850 a year</strong> in pay and employer
        National Insurance, before pension, holiday cover and training. Two cautions. GP surgeries are not bound by these
        bands: a{' '}
        <a href={SRC.parliament} target="_blank" rel="noopener noreferrer">Department of Health and Social Care answer to Parliament</a>{' '}
        on 9 March 2021 said GP practices are self-employed contractors to the NHS and that pay for their staff is a matter
        for each practice. And no surgery can pay anyone aged 21 or over less than the{' '}
        <a href={SRC.govWage} target="_blank" rel="noopener noreferrer">National Living Wage</a>, which has been £12.71 an
        hour since April 2026. At 37.5 hours a week for 52 weeks that floor is £24,784.50 a
        year.
      </p>
      <p>
        The two costs buy different things. A receptionist greets patients, handles prescriptions and queries at the desk,
        and uses judgement a phone system does not have. An AI receptionist takes calls: the 8am rush, the lunch hour and
        the evening. Set beside the front desk team, it gives callers an answer while staff deal with the people in
        front of them. That is the kind of system we build on our{' '}
        <a href="/uk/ai-receptionist">AI receptionist service for UK businesses</a>.
      </p>

      <h3 id="call-answering-cost">How this compares with a human call answering service</h3>
      <p>
        Human answering services in the UK are usually priced per call or per message.{' '}
        <a href={SRC.mbe} target="_blank" rel="noopener noreferrer">Mail Boxes Etc.</a> lists live answering at £47.94 plus
        VAT a month for 20 calls, with extra calls at £1.50 each from the 21st, falling to £1.10 from the 101st.{' '}
        <a href={SRC.connect} target="_blank" rel="noopener noreferrer">Connect Communications</a> says its entry-level
        packages start from £14.99 a month plus VAT. For a business with a handful of calls a month, a human service can be
        the lower-cost answer. As calls grow, a plan with 100 or more calls included usually costs less per call.
      </p>

      <h2 id="custom-llm-cost">How much does it cost to develop a custom LLM?</h2>
      <p>
        Almost no small business should. Training a large language model from scratch is a job for a handful of companies.{' '}
        <a href={SRC.aiIndex} target="_blank" rel="noopener noreferrer">Stanford&apos;s 2024 AI Index</a> estimated that
        GPT-4 used US$78 million of computing to train and Gemini Ultra US$191 million. Those figures are in US dollars and
        cover computing alone.
      </p>
      <p>
        When a buyer asks for a custom LLM, they usually mean an AI that knows their business. There are three ways to get
        that, and none of them trains a model from nothing.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Route</th>
              <th className="p-3 text-left border border-gray-700">What it is</th>
              <th className="p-3 text-left border border-gray-700">UK range</th>
              <th className="p-3 text-left border border-gray-700">Source</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Use an existing model with your own instructions and tools</td>
              <td className="p-3 border border-gray-200">An AI agent or chatbot built on Claude, GPT or a similar model</td>
              <td className="p-3 border border-gray-200">£750 to £200,000+, as in the agent table above</td>
              <td className="p-3 border border-gray-200">Augustova, Fulminous, LeverX</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Retrieval system</td>
              <td className="p-3 border border-gray-200">The model looks up your documents before it answers</td>
              <td className="p-3 border border-gray-200">£15,000 to £50,000</td>
              <td className="p-3 border border-gray-200"><a href={SRC.openkit} target="_blank" rel="noopener noreferrer">OpenKit</a>, read 9 October 2026</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Fine-tuning and adaptation</td>
              <td className="p-3 border border-gray-200">An open model is trained further on your data and terms</td>
              <td className="p-3 border border-gray-200">£20,000 to £80,000</td>
              <td className="p-3 border border-gray-200"><a href={SRC.openkit} target="_blank" rel="noopener noreferrer">OpenKit</a>, read 9 October 2026</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        OpenKit, a UK AI firm, adds 10 to 20 per cent for regulated environments and says building a frontier model from
        scratch costs millions and is almost never the right answer. Its page does not state a VAT basis. One more thing we
        read on 9 October 2026 points the same way: OpenAI&apos;s price page says it is winding down its fine-tuning
        platform and that the platform is no longer open to new users. Start with the first route. Move to the second or
        third only when you have measured that the first is not accurate enough.
      </p>

      <h2 id="twelve-month-total">What does AI cost over the first 12 months?</h2>
      <p>
        The monthly price rarely tells you the real cost. These worked examples use only the published figures above. They
        are arithmetic on public prices and ranges, not quotes.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Scenario</th>
              <th className="p-3 text-left border border-gray-700">How we added it up</th>
              <th className="p-3 text-left border border-gray-700">First 12 months</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Human answering service (Mail Boxes Etc., 20 calls a month)</td>
              <td className="p-3 border border-gray-200">12 x £47.94, before extra calls</td>
              <td className="p-3 border border-gray-200 font-semibold">£575.28 + VAT (£690.34 with VAT)</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">AI receptionist (Fasthosts Plus, 100 calls a month)</td>
              <td className="p-3 border border-gray-200">12 x £69, before the free first month and extra calls</td>
              <td className="p-3 border border-gray-200 font-semibold">£828 + VAT (£993.60 with VAT)</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">AI receptionist for a GP clinic (The VoIP Shop Ultimate, 200 calls a month)</td>
              <td className="p-3 border border-gray-200">12 x £120, before extra calls</td>
              <td className="p-3 border border-gray-200 font-semibold">£1,440 + VAT (£1,728 with VAT)</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">One workflow built by a small UK agency</td>
              <td className="p-3 border border-gray-200">AI Agency Plus gives this figure itself: build, running costs and light support for one well-chosen workflow</td>
              <td className="p-3 border border-gray-200 font-semibold">£5,000 to £8,000</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Simple custom agent from a development firm</td>
              <td className="p-3 border border-gray-200">
                Fulminous build of £8,000 to £25,000 + 15% to 25% maintenance (£1,200 to £6,250) + token usage at its lowest
                figure of £150 a month (£1,800)
              </td>
              <td className="p-3 border border-gray-200 font-semibold">£11,000 to £33,050 + VAT</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Employed AI engineer at the median</td>
              <td className="p-3 border border-gray-200">£87,500 salary + £12,375 employer National Insurance, before pension, equipment and recruitment</td>
              <td className="p-3 border border-gray-200 font-semibold">£99,875</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        From year two the custom agent drops to its running cost. On the same Fulminous figures that is maintenance plus
        usage, or £3,000 to £8,050 a year before VAT. That is the number to weigh against what the agent does for you.
      </p>

      <h2 id="build-buy-consult">Buy, consult, hire or build: which fits you?</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700"></th>
              <th className="p-3 text-left border border-gray-700">Buy off-the-shelf</th>
              <th className="p-3 text-left border border-gray-700">Consultant only</th>
              <th className="p-3 text-left border border-gray-700">Employ an engineer</th>
              <th className="p-3 text-left border border-gray-700 bg-[#B23E13]">Build with a services firm</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Best for</td>
              <td className="p-3 border border-gray-200">Common jobs: phone answering, website chat, simple automations</td>
              <td className="p-3 border border-gray-200">Deciding where AI fits before spending on a build</td>
              <td className="p-3 border border-gray-200">A product or system you will keep changing for years</td>
              <td className="p-3 border border-gray-200 bg-[#FFF4EC]">Jobs specific to how your business runs, across your own systems</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Cost shape</td>
              <td className="p-3 border border-gray-200">Monthly subscription plus usage</td>
              <td className="p-3 border border-gray-200">Day rate or a fixed discovery fee</td>
              <td className="p-3 border border-gray-200">Salary, National Insurance, pension, kit</td>
              <td className="p-3 border border-gray-200 bg-[#FFF4EC]">Fixed-price build, then running and support costs</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Time to live</td>
              <td className="p-3 border border-gray-200">Days</td>
              <td className="p-3 border border-gray-200">A plan, not a live system</td>
              <td className="p-3 border border-gray-200">After recruitment and a notice period</td>
              <td className="p-3 border border-gray-200 bg-[#FFF4EC]">Weeks for a narrow first agent</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Who owns it</td>
              <td className="p-3 border border-gray-200">The vendor; you rent access</td>
              <td className="p-3 border border-gray-200">You own the plan</td>
              <td className="p-3 border border-gray-200">You own everything</td>
              <td className="p-3 border border-gray-200 bg-[#FFF4EC]">You should own the code, prompts and accounts. Put it in the contract.</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Main risk</td>
              <td className="p-3 border border-gray-200">Does not fit your edge cases or systems</td>
              <td className="p-3 border border-gray-200">Advice with nobody to build it</td>
              <td className="p-3 border border-gray-200">One person holds all the knowledge</td>
              <td className="p-3 border border-gray-200 bg-[#FFF4EC]">A firm that disappears after launch</td>
            </tr>
          </tbody>
        </table>
      </div>
      <details className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <summary className="font-semibold cursor-pointer text-[#1F2937]">
          Quick guide: which option should you price first?
        </summary>
        <ul className="list-disc pl-6 space-y-2 mt-4 mb-0">
          <li><strong>You miss phone calls and mostly need details taken and bookings made:</strong> price an off-the-shelf AI receptionist first.</li>
          <li><strong>Customers ask the same website questions all day:</strong> price chatbot software first, then an agent if it needs to check orders.</li>
          <li><strong>You are not sure where AI helps at all:</strong> pay for a fixed discovery before any build.</li>
          <li><strong>The job crosses your shop, Xero, CRM or custom tools:</strong> price a custom agent, starting with one narrow process.</li>
        </ul>
      </details>

      <h2 id="vat-dollars-data">VAT, US dollars and data protection: the UK details that change the number</h2>
      <ul className="list-disc pl-6 space-y-3 mb-6">
        <li>
          <strong>VAT.</strong> The <a href={SRC.govVat} target="_blank" rel="noopener noreferrer">standard UK rate is 20 per cent</a>.
          Every UK subscription price on this page is quoted before VAT. Fulminous and Augustova state that their build
          ranges exclude it. LeverX, SpotDev, Foresight Mobile, Ronins and OpenKit do not say. The VAT registration
          threshold is <a href={SRC.govVatThreshold} target="_blank" rel="noopener noreferrer">£90,000 of taxable turnover</a>.
          Ask every supplier to state the basis in writing, and ask your accountant how much you can reclaim.
        </li>
        <li>
          <strong>US dollar and euro billing.</strong> Anthropic, OpenAI, Tidio, Intercom, Zapier and Twilio showed us
          prices in US dollars, and n8n in euros. Your pound cost moves with the exchange rate, and your bank may add a
          foreign transaction fee. Ask your accountant how VAT applies to services bought from overseas suppliers.
        </li>
        <li>
          <strong>Employer costs.</strong> A salary is not the full cost of a hire. Employer National Insurance is 15
          per cent above £5,000 a year for 2026 to 2027, and the minimum employer pension contribution is 3 per cent.
        </li>
        <li>
          <strong>Data protection.</strong> UK GDPR applies to how an AI tool handles personal data. The Information
          Commissioner&apos;s Office publishes{' '}
          <a href={SRC.ico} target="_blank" rel="noopener noreferrer">guidance on AI and data protection</a>, and says on
          that page that it is under review because of the Data (Use and Access) Act. Building those protections into an
          agent is real work, and it is part of why regulated builds cost more. We can host AI builds in UK or EU cloud
          regions when a client needs that.
        </li>
        <li>
          <strong>Call recording.</strong> AI receptionists transcribe calls, and a transcript is personal data. Tell
          callers, and write down how long you keep recordings.
        </li>
      </ul>

      <h2 id="accurate-quote">How to get an accurate AI quote in 5 steps</h2>
      <ol className="list-decimal pl-6 space-y-3 mb-6">
        <li><strong>Name one process.</strong> &quot;Answer out-of-hours calls and book them in&quot; can be priced. &quot;Use AI in the business&quot; cannot.</li>
        <li><strong>Count it.</strong> How many calls, chats, emails or orders a month? Volume drives running cost.</li>
        <li><strong>List the systems it touches</strong> and whether it needs to read or change anything in each one.</li>
        <li><strong>Ask for build and running costs separately</strong>, with the VAT basis stated and the maintenance plan written out.</li>
        <li><strong>Ask who owns what at the end:</strong> code, prompts, accounts and data. If the answer is vague, so is the quote.</li>
      </ol>

      <h2 id="factoryjet-pricing">How FactoryJet prices AI work</h2>
      <p>
        We do not publish a price list, because an AI receptionist for a dental practice and an agent that syncs a trade
        store with Xero are different jobs. FactoryJet quotes a fixed price in writing after a short scoping call. Before a
        contract, we show working software on your own data. We design, build, test and support the agent, and you own it:
        the code, the prompts and the accounts.
      </p>
      <p>
        Bills for AI usage and hosting can sit in your own accounts at cost. We keep managing the servers, AI models, APIs
        and maintenance, so you do not have to. If an off-the-shelf tool from the tables above will do the job, we will
        tell you so. And a firm near you is the better choice if you
        need someone on site.
      </p>
      <p>
        To see the work behind these numbers, read about our{' '}
        <a href="/uk/ai-agents">AI agent services in the UK</a>,{' '}
        <a href="/uk/ai-development">custom AI development</a>,{' '}
        <a href="/uk/ai-consulting">AI consulting for UK businesses</a> and the{' '}
        <a href="/uk/ai-receptionist">AI receptionist we build for UK practices and trades</a>. To compare us with other
        firms, see our lists of{' '}
        <a href="/blog/best-ai-agent-development-companies-uk-2026">AI agent development companies in the UK</a> and{' '}
        <a href="/blog/best-ai-consultancies-uk-2026">AI consultancies in the UK</a>, or start at{' '}
        <a href="/uk">FactoryJet UK</a>.
      </p>

      <h2 id="sources">Sources</h2>
      <p className="text-sm text-gray-600">All pages opened and read on 9 October 2026. Prices change; check the source before you budget.</p>
      <ul className="list-disc pl-6 space-y-1 text-sm mb-8">
        <li><a href={SRC.augustovaAgent} target="_blank" rel="noopener noreferrer">Augustova, What an AI agent costs to build and run in the UK (14 September 2026)</a> and <a href={SRC.augustovaAuto} target="_blank" rel="noopener noreferrer">How much does AI automation cost in the UK (12 September 2026)</a></li>
        <li><a href={SRC.fulminous} target="_blank" rel="noopener noreferrer">Fulminous Software, AI agent development cost UK (last updated 23 September 2026)</a></li>
        <li><a href={SRC.leverx} target="_blank" rel="noopener noreferrer">LeverX, AI agent development cost in the UK (4 October 2026)</a></li>
        <li><a href={SRC.spotdev} target="_blank" rel="noopener noreferrer">SpotDev, How much do AI agents cost in the UK</a></li>
        <li><a href={SRC.aiAgencyPlus} target="_blank" rel="noopener noreferrer">AI Agency Plus, How much does AI automation cost in the UK (last updated 31 July 2026)</a></li>
        <li><a href={SRC.ronins} target="_blank" rel="noopener noreferrer">Ronins, AI agency</a>, <a href={SRC.helium42} target="_blank" rel="noopener noreferrer">Helium42, AI consultant London</a>, <a href={SRC.swDevUk} target="_blank" rel="noopener noreferrer">Software Development UK, UK software developer day rates in 2026</a></li>
        <li>ITJobsWatch, six months to 9 October 2026: AI engineer (<a href={SRC.ijwAiEngineerContract} target="_blank" rel="noopener noreferrer">contract</a>, <a href={SRC.ijwAiEngineerPerm} target="_blank" rel="noopener noreferrer">permanent</a>), AI developer (<a href={SRC.ijwAiDeveloperContract} target="_blank" rel="noopener noreferrer">contract</a>, <a href={SRC.ijwAiDeveloperPerm} target="_blank" rel="noopener noreferrer">permanent</a>), AI consultant (<a href={SRC.ijwAiConsultantContract} target="_blank" rel="noopener noreferrer">contract</a>, <a href={SRC.ijwAiConsultantPerm} target="_blank" rel="noopener noreferrer">permanent</a>), software developer (<a href={SRC.ijwSoftwareDeveloperContract} target="_blank" rel="noopener noreferrer">contract</a>, <a href={SRC.ijwSoftwareDeveloperPerm} target="_blank" rel="noopener noreferrer">permanent</a>), <a href={SRC.ijwSoftwareEngineerContract} target="_blank" rel="noopener noreferrer">software engineer contract</a>, developer (<a href={SRC.ijwDeveloperContract} target="_blank" rel="noopener noreferrer">contract</a>, <a href={SRC.ijwDeveloperPerm} target="_blank" rel="noopener noreferrer">permanent</a>), iOS developer (<a href={SRC.ijwIosContract} target="_blank" rel="noopener noreferrer">contract</a>, <a href={SRC.ijwIosPerm} target="_blank" rel="noopener noreferrer">permanent</a>), Android developer (<a href={SRC.ijwAndroidContract} target="_blank" rel="noopener noreferrer">contract</a>, <a href={SRC.ijwAndroidPerm} target="_blank" rel="noopener noreferrer">permanent</a>)</li>
        <li><a href={SRC.foresight} target="_blank" rel="noopener noreferrer">Foresight Mobile, How much does it cost to build an app in the UK (updated 6 October 2026)</a></li>
        <li><a href={SRC.a1Chatbot} target="_blank" rel="noopener noreferrer">A1 Automation London, How much does an AI chatbot cost in the UK (updated 14 July 2026)</a>, <a href={SRC.tidio} target="_blank" rel="noopener noreferrer">Tidio pricing</a>, <a href={SRC.intercom} target="_blank" rel="noopener noreferrer">Intercom pricing</a></li>
        <li><a href={SRC.fasthosts} target="_blank" rel="noopener noreferrer">Fasthosts AI Receptionist</a>, <a href={SRC.fasthostsGuide} target="_blank" rel="noopener noreferrer">Fasthosts, How much does an AI receptionist cost (9 July 2026)</a>, <a href={SRC.voipShop} target="_blank" rel="noopener noreferrer">The VoIP Shop, AI receptionist for GP clinics</a>, <a href={SRC.softomate} target="_blank" rel="noopener noreferrer">Softomate, AI receptionist pricing UK (updated 1 October 2026)</a></li>
        <li><a href={SRC.mbe} target="_blank" rel="noopener noreferrer">Mail Boxes Etc., telephone answering</a>, <a href={SRC.connect} target="_blank" rel="noopener noreferrer">Connect Communications, call answering service costs</a></li>
        <li><a href={SRC.nhsEmployers} target="_blank" rel="noopener noreferrer">NHS Employers, Pay scales for 2026/27</a>, <a href={SRC.nhsCareers} target="_blank" rel="noopener noreferrer">NHS Health Careers, Receptionist</a>, <a href={SRC.parliament} target="_blank" rel="noopener noreferrer">UK Parliament, written question 159040, answered 9 March 2021</a></li>
        <li>GOV.UK: <a href={SRC.govWage} target="_blank" rel="noopener noreferrer">National Minimum Wage and National Living Wage rates</a>, <a href={SRC.govEmployer} target="_blank" rel="noopener noreferrer">Rates and thresholds for employers 2026 to 2027</a>, <a href={SRC.govPension} target="_blank" rel="noopener noreferrer">Workplace pensions</a>, <a href={SRC.govVat} target="_blank" rel="noopener noreferrer">VAT rates</a>, <a href={SRC.govVatThreshold} target="_blank" rel="noopener noreferrer">VAT thresholds</a></li>
        <li><a href={SRC.openkit} target="_blank" rel="noopener noreferrer">OpenKit, LLM development services and fine-tuning</a>, <a href={SRC.aiIndex} target="_blank" rel="noopener noreferrer">Stanford HAI, AI Index Report 2024</a></li>
        <li><a href={SRC.claude} target="_blank" rel="noopener noreferrer">Anthropic, Claude pricing</a>, <a href={SRC.openai} target="_blank" rel="noopener noreferrer">OpenAI, API pricing</a>, <a href={SRC.twilio} target="_blank" rel="noopener noreferrer">Twilio, UK voice pricing</a>, <a href={SRC.zapier} target="_blank" rel="noopener noreferrer">Zapier pricing</a>, <a href={SRC.n8n} target="_blank" rel="noopener noreferrer">n8n pricing</a></li>
        <li><a href={SRC.ico} target="_blank" rel="noopener noreferrer">Information Commissioner&apos;s Office, Guidance on AI and data protection</a></li>
      </ul>

      <div className="bg-[#FAF8F5] border-2 border-[#E5DFD7] p-6 sm:p-8 rounded-xl my-10 shadow-sm">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-2">
          AI scoping call for UK businesses
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] mb-3">
          Get a fixed price for your first AI agent
        </h3>
        <p className="text-[#4B5563] text-base leading-relaxed mb-6">
          Tell us the one process you want handled. We will tell you straight whether it needs a custom agent, an automation
          or an off-the-shelf tool. FactoryJet quotes a fixed price in writing after a short scoping call, with the running
          costs set out beside it.
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
            href="/uk/ai-agents"
            className="inline-flex items-center gap-2 bg-white text-[#1F2937] border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            See AI agent services in the UK
          </a>
        </div>
      </div>
    </article>
  ),
};

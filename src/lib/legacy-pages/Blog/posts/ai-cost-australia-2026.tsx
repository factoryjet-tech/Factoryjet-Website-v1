import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

/*
 * AI cost guide for Australia (2026).
 * Every dollar figure below is a third-party Australian market range or a vendor's published
 * list price, fetched and read on 26 September 2026. None of them is a FactoryJet price.
 * USD figures are converted at US$1 = A$1.4224 (European Central Bank reference rate,
 * 25 September 2026, via frankfurter.dev). The FAQ array below is the single source for both
 * the visible FAQ and the FAQPage JSON-LD (the blog route maps post.faqs into schema).
 * 21 Oct 2026 refresh (AU page plan R10): Flowtivity and Web Video Digital re-read on 21 October
 * 2026; Web Video Digital's summary now says regulated or enterprise builds "can run past AUD
 * 200,000" (its table: A$150,000 to A$300,000+). All Webbed Labs' chatbot guide (updated
 * 28 September 2026) added for chatbot build tiers. Build ranges only, no running-cost figures.
 * Question ownership with the sister guide hire-ai-developers-australia-cost-2026: this page owns
 * what a PROJECT costs (9 Oct sweep B162 AI consultant, B168 AI chatbot build; 18 Oct N24 AI
 * consultant hourly rate). The hire guide owns what PEOPLE cost (B161, B163 to B167, B169).
 */

const SRC = {
  flowtivity: 'https://flowtivity.ai/blog/ai-agent-cost-pricing-guide-australia-2026/',
  awlabsChatbot: 'https://www.awlabs.com.au/guides/ai-chatbot-cost-australia',
  wvd: 'https://webvideodigital.com.au/custom-ai-agent-cost-in-australia/',
  claude: 'https://claude.com/pricing',
  openai: 'https://platform.openai.com/docs/pricing',
  vereo: 'https://vereo.com.au/pricing',
  giday: 'https://giday.com.au/pricing/',
  frontly: 'https://www.frontly.com.au/pricing',
  valory: 'https://www.valory.com.au/resources/ai-receptionist-cost-australia',
  virtualAddress: 'https://www.virtualaddress.com.au/pricingreceptionist.php',
  officehq: 'https://www.officehq.com.au/service/live-call-answering/',
  tidio: 'https://www.tidio.com/pricing/',
  intercom: 'https://www.intercom.com/pricing',
  zapier: 'https://zapier.com/pricing',
  oaic: 'https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products',
};

const faqs: FAQItem[] = [
  // AI consultants
  {
    q: 'How much does an AI consultant cost in Australia?',
    a: 'Flowtivity\'s March 2026 Australian guide puts AI consulting at A$150 to A$400 an hour and A$1,500 to A$3,000 a day. It lists a discovery or strategy engagement at A$3,000 to A$8,000 and a proof of concept at A$5,000 to A$15,000. These are market ranges from one published source, not our prices, and the guide does not say whether they include GST.',
  },
  {
    q: 'How much do AI consultants charge?',
    a: 'Australian AI consultants usually charge in one of four ways: by the hour, by the day, a fixed fee for a scoped piece of work such as discovery, or a monthly retainer once something is live. Fixed-scope work is easiest to budget because you know the number before work starts.',
  },
  {
    q: 'How much does an AI consultant charge per hour?',
    a: 'Published Australian figures sit at about A$150 to A$400 an hour for AI consulting (Flowtivity, March 2026), and the same guide says most experienced consultants charge A$200 to A$300. Web Video Digital\'s August 2026 guide puts senior AI developers at about A$180 to A$280 an hour. Check whether a quote is ex-GST or GST-inclusive before you compare two rates.',
  },
  {
    q: 'What does an AI consultant charge per day in Australia?',
    a: 'Flowtivity\'s March 2026 Australian guide puts AI consultant day rates at A$1,500 to A$3,000. On its hourly band of A$150 to A$400, it says most experienced consultants sit at A$200 to A$300 an hour. A day rate suits short advisory work. For a defined piece of work, such as a strategy workshop, the same guide says project pricing starts at about A$5,000. Ask whether the rate is ex-GST.',
  },
  {
    q: 'What is the market rate for an AI consultant?',
    a: 'On published Australian 2026 figures, the market rate is roughly A$150 to A$400 an hour or A$1,500 to A$3,000 a day. Where a consultant sits in that band depends on seniority, whether they can build as well as advise, and how specialised your industry is. Health, finance and anything with personal data tends to sit higher because of the privacy work involved.',
  },
  {
    q: 'How much do AI consulting firms charge?',
    a: 'Firms tend to quote per project rather than per hour. Flowtivity\'s 2026 Australian guide lists discovery at A$3,000 to A$8,000, a proof of concept at A$5,000 to A$15,000 and full implementation from A$15,000 to A$50,000 or more. Larger firms with enterprise clients usually quote above these ranges.',
  },
  // AI agents
  {
    q: 'How much should an AI agent cost?',
    a: 'It depends on what the agent is allowed to do. Two Australian 2026 guides disagree on the floor: Flowtivity puts custom agents at A$5,000 to A$50,000 or more, while Web Video Digital puts them at A$15,000 to A$150,000, with most small and mid-size projects at A$30,000 to A$80,000. A single-task agent sits at the low end. Every system it connects to pushes the price up.',
  },
  {
    q: 'How much does an AI agent cost per month?',
    a: 'Running costs have three parts: model usage, hosting and upkeep. The amount depends on how often the agent is used and how many systems it connects to. FactoryJet quotes the build, and any support you choose, as fixed prices in writing after a short scoping call, and can keep managing the servers, AI, APIs and maintenance so your team does not have to.',
  },
  {
    q: 'Does it cost money to run an AI agent?',
    a: 'Yes. Every time the agent reads or writes text, the model provider bills you per token, a token being roughly three quarters of a word. You also pay for hosting, monitoring and someone to update the agent when your tools, prices or policies change.',
  },
  {
    q: 'Are AI agents free to use?',
    a: 'Not for business work. Consumer chat apps have free tiers, and Claude, for example, lists a free plan on its pricing page. An agent that acts on your own systems, such as your booking tool, CRM or Xero, needs paid API access, a build that connects it safely, and upkeep. The software frameworks are often free. The engineering and the usage are not.',
  },
  {
    q: 'How much does it cost to build a custom AI?',
    a: 'For most Australian businesses, a custom AI means a custom agent or assistant built on an existing model, not a new model trained from scratch. Published 2026 Australian ranges run from about A$5,000 for a narrow single-task agent to A$150,000 for an autonomous one, and A$150,000 to A$300,000 or more for regulated or enterprise builds. Training your own model from scratch is a different order of cost and rarely makes sense for a small business.',
  },
  {
    q: 'How much money does it cost to build an AI?',
    a: 'Building on an existing model such as Claude or GPT is the practical route, and Australian 2026 guides put those builds at roughly A$5,000 to A$150,000 or more depending on scope. Web Video Digital notes that building on an existing model is far cheaper than training one from scratch. The biggest cost is connecting the AI to your systems and data.',
  },
  {
    q: 'How much does it cost to build a custom AI agent in Australia?',
    a: 'Web Video Digital\'s August 2026 guide puts most small and mid-size projects at A$30,000 to A$80,000, with simple single-task agents from A$15,000 and regulated or enterprise builds at A$150,000 to A$300,000 or more. Its summary says those builds can run past A$200,000. Flowtivity\'s March 2026 guide is lower, at A$5,000 to A$50,000 or more, for example A$5,000 to A$10,000 for an appointment booking agent. The gap mostly reflects how much each firm includes.',
  },
  {
    q: 'Does it cost money to build an AI agent?',
    a: 'Yes, when a firm builds it for you. Two Australian guides publish ranges for a custom build: Flowtivity (March 2026) at A$5,000 to A$50,000 or more, and Web Video Digital (August 2026) at A$15,000 to A$150,000, with most small and mid-size projects at A$30,000 to A$80,000. Most of that pays for connecting the agent to your systems and testing it. If you would rather hire people than pay a project fee, our guide to hiring AI developers in Australia covers salaries and contractor day rates.',
  },
  {
    q: 'How much does ChatGPT agents cost?',
    a: 'OpenAI does not sell an agent at a separate price. Its help centre, read on 9 October 2026, says ChatGPT agent is no longer available and points users to ChatGPT Work, which is included in ChatGPT plans. It lists Plus at $20 a month and Pro at $100, $200 or $500 a month, and labels the Pro prices USD. In Australia OpenAI bills in Australian dollars, so check its pricing page for the local figure. A custom agent is built to work inside your own systems, which Flowtivity and Web Video Digital put at about A$5,000 to A$150,000 or more.',
  },
  // Chatbots
  {
    q: 'How much does a chatbot cost?',
    a: 'Off-the-shelf chatbot software starts at tens of dollars a month. Tidio lists a free plan and paid plans from US$24.17 a month on annual billing, about A$34. Intercom charges US$0.99, about A$1.41, per conversation its Fin AI agent resolves, on top of helpdesk seats. A custom chatbot connected to your own systems is a build project, which Flowtivity puts at A$10,000 to A$25,000 for customer service automation.',
  },
  {
    q: 'How expensive are AI chatbots?',
    a: 'Less expensive than most people expect for the software, and more expensive than expected once you connect them to real systems. Tidio\'s AI agent, Lyro, starts at US$32.50 a month, about A$46. Pricing per resolved conversation, like Intercom\'s US$0.99, grows with volume. If the chatbot needs to check orders, change bookings or issue refunds, you are really pricing an AI agent build.',
  },
  {
    q: 'Are AI chatbots free to use?',
    a: 'Many have a free tier. Tidio lists a free plan, and consumer assistants such as Claude have free plans for personal use. Free tiers suit testing and very low volume. For a business website you usually outgrow them quickly because of conversation limits, branding and the need to train the bot on your own content. Budget for a paid plan once real customers use it.',
  },
  {
    q: 'What is the cheapest AI chatbot?',
    a: 'A free plan is the cheapest, and several website chat tools offer one, Tidio among them. The cheapest option that actually works for your business is the one that answers your customers\' real questions correctly with the least setup. A free bot that gives wrong answers about delivery times or returns costs you more in refunds and complaints than a paid plan would.',
  },
  {
    q: 'How much does it cost to develop an AI chatbot?',
    a: 'In Australia, All Webbed Labs\' September 2026 guide puts a simple custom FAQ chatbot at A$10,000 to A$30,000 ex GST, and A$30,000 to A$80,000 once it reads your knowledge base and connects to orders, bookings or a CRM. Flowtivity puts customer service automation at A$10,000 to A$25,000. If the bot only answers from your website, chatbot software is cheaper: Tidio has a free plan and paid plans from US$24.17 a month, about A$34.',
  },
  // Receptionists and voice
  {
    q: 'How much does an AI receptionist cost in Australia?',
    a: 'Published Australian plans start at about A$49 a month and run to A$499 a month for managed plans, with enterprise tiers above that. Giday lists A$49 to A$399 a month GST included. Vereo lists A$79 plus GST a month for 100 minutes, plus a A$295 plus GST setup fee. Frontly starts at A$149 plus GST a month on annual billing. Always compare minutes included and overage rates.',
  },
  {
    q: 'How much should an AI receptionist cost?',
    a: 'For a small business with a few dozen calls a week, published Australian plans in September 2026 cluster between about A$49 and A$300 a month. Pay attention to what is included: minutes per month, per-minute overage (A$0.49 to A$0.50 plus GST on the plans we read), setup fees, and whether bookings go straight into your calendar. A cheap plan with heavy overage can cost more than a mid-tier plan.',
  },
  {
    q: 'How much does it cost for a small business to hire an AI receptionist?',
    a: 'You subscribe rather than hire. On published September 2026 prices, a small business can start from A$49 a month GST included (Giday Starter, 30 minutes) or A$79 plus GST a month (Vereo Starter, 100 minutes plus a A$295 plus GST setup). Over 12 months, the Vereo Starter plan with setup comes to A$1,243 plus GST before any extra minutes.',
  },
  {
    q: 'Is there a free AI receptionist?',
    a: 'We did not find a free ongoing AI receptionist plan from the Australian providers we checked. Several offer a free trial or first week free, Giday among them. Phone answering uses paid voice minutes and phone numbers, so a permanently free plan is unlikely to include real calls. Use the trial to test your five most common call types before committing.',
  },
  {
    q: 'How much does a virtual receptionist cost?',
    a: 'Human virtual receptionist services in Australia are usually priced per call. Virtual Address lists a plan from A$33 a month plus A$3.89 per call answered, 20 calls for A$80 a month and 50 calls for A$185 a month, all excluding GST. OfficeHQ lists call answering from A$25 a month excluding GST. AI receptionists are usually priced per minute or per plan instead.',
  },
  {
    q: 'How much does an AI call answering service cost?',
    a: 'Australian AI call answering plans we read in September 2026 run from A$49 a month GST included for 30 minutes (Giday) to A$449 a month plus GST for 800 minutes on annual billing (Frontly Answer 800). Extra minutes cost A$1.65 to A$3.00 on Giday depending on plan, and about A$0.50 plus GST on Vereo and Frontly. Compare on cost per expected month, not headline price.',
  },
  {
    q: 'How much do AI voice agents cost?',
    a: 'Packaged Australian voice agent services price by plan and by minute. They bundle the voice model with phone numbers, booking, transfers and support, and plans such as Vereo charge A$0.49 plus GST per extra minute. Custom voice agents are build projects.',
  },
  {
    q: 'How much does it cost to hire an AI call center agent?',
    a: 'An AI call centre agent is bought as a service, not hired. Off-the-shelf plans price by included minutes: for example Frontly\'s outbound Reach plans start at A$249 a month plus GST, and inbound plans at A$149. A custom agent that works inside your CRM and follows your scripts is a build, which Flowtivity\'s March 2026 guide puts at A$10,000 to A$25,000 for customer service automation.',
  },
  // Automation and SEO
  {
    q: 'How much do AI automations cost?',
    a: 'Simple automations can run on tools like Zapier, which has a free plan with 100 tasks a month and paid plans from US$19.99 a month, about A$28. Flowtivity lists Make at A$15 to A$100 a month. Custom multi-system automation, for example linking your store, Xero and CRM with AI steps, is a build that Flowtivity puts at A$20,000 to A$50,000 or more.',
  },
  {
    q: 'How much do AI automation agencies charge?',
    a: 'Most charge a project fee to build, then a monthly retainer to run and improve it. Flowtivity\'s 2026 Australian guide puts implementation at A$15,000 to A$50,000 or more, with typical per-integration costs of A$1,000 to A$3,000. Ask for the build and the running cost as two separate numbers so you can compare quotes.',
  },
  {
    q: 'How much does AI SEO cost?',
    a: 'AI SEO, also called generative engine optimisation, is priced like SEO: a monthly retainer or a fixed project, and it is usually bundled with regular SEO work. We cover the published Australian ranges in our separate SEO cost guide rather than repeat them here. The drivers are how many pages need work, how competitive your topic is, and whether you need new content or fixes to existing pages.',
  },
  {
    q: 'Can I build my own AI for free?',
    a: 'You can prototype one for close to nothing. Frameworks and no-code builders often have free tiers. What is not free is making it safe for customers: permissions, testing, privacy under Australian law, monitoring and upkeep.',
  },
  {
    q: 'Are AI receptionists worth it?',
    a: 'They are worth it when missed calls cost you work. If callers ring after hours, while you are on the tools, or during busy clinic sessions, an AI receptionist can answer every call, book into your calendar and pass urgent calls to a person. If you get very few calls, or most calls need a complex human conversation, a cheaper per-call human answering service may fit better.',
  },
  {
    q: 'What ongoing costs should I budget for after an AI project goes live?',
    a: 'Budget for four things: model usage billed per token or minute, hosting, monitoring, and maintenance. Also budget time for someone on your team to review escalations. FactoryJet quotes the build, and any support you choose, as fixed prices in writing after a short scoping call, and can keep managing the servers, AI, APIs and maintenance so your team does not have to.',
  },
];

export const post: BlogPost = {
  id: '465',
  slug: 'ai-cost-australia-2026',
  title: 'How Much Does AI Cost in Australia? 2026 Guide to AI Consultant, Agent, Chatbot and Receptionist Costs',
  excerpt:
    'What Australian businesses actually pay for AI in 2026: AI consultant rates, custom AI agent builds, chatbots, AI receptionists and voice agents. Every figure is a published market range or vendor price with its source, date and GST basis.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Sep 26, 2026',
  dateModified: 'Oct 21, 2026',
  readTime: '18 min read',
  imageUrl: '/blog-images/ai-cost-australia-2026-hero.webp',
  imageAlt:
    'Two people in a bright Brisbane office reviewing a laptop screen showing three grey cards and one orange card, with a calculator and printed page beside it, comparing AI cost options',
  meta: {
    title: 'AI Consultant & Agent Cost Australia 2026 | FactoryJet',
    description:
      'AI cost in Australia for 2026: consultant rates, AI agent builds, chatbots and AI receptionists in AUD, with sources and GST notes.',
  },
  keyTakeaways: [
    'Australian AI consultants charge about A$150 to A$400 an hour or A$1,500 to A$3,000 a day, on Flowtivity\'s March 2026 figures.',
    'Custom AI agent builds range from about A$5,000 for a narrow single-task agent to A$150,000, and A$150,000 to A$300,000 or more for regulated builds. Web Video Digital puts most small and mid-size projects at A$30,000 to A$80,000.',
    'A custom AI chatbot costs A$10,000 to A$30,000 to build as a simple FAQ bot and A$30,000 to A$80,000 once it connects to your systems, on All Webbed Labs\' September 2026 figures.',
    'AI receptionist plans from Australian providers start at A$49 a month GST included (Giday) and A$79 plus GST (Vereo), with managed plans up to A$499 a month.',
    'Check the GST basis on every quote. Some Australian vendors list prices ex-GST, some include it, and many overseas tools bill in US dollars.',
    'These are market ranges from named sources, not FactoryJet prices. We quote fixed scope after a short discovery call.',
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
          In Australia in 2026, published market ranges put <strong>AI consultants at A$150 to A$400 an hour</strong>,{' '}
          <strong>custom AI agent builds at about A$5,000 to A$150,000 or more</strong> (most small and mid-size projects
          A$30,000 to A$80,000), <strong>AI receptionists at A$49 to A$499 a month</strong>, and chatbot software from a
          free plan up to tens of dollars a month. Running costs and maintenance sit on top.
        </p>
      </div>

      <div className="bg-[#FAF8F5] border-l-4 border-[#B23E13] p-5 rounded-r-lg mb-10">
        <p className="text-sm text-[#1F2937] leading-relaxed mb-0">
          <strong>These are market ranges, not our prices.</strong> Every price on this page comes from a named Australian
          guide or a vendor&apos;s public pricing page that we opened and read on 26 September 2026 (the agent and chatbot build guides again on 21 October 2026), and each one is linked in
          the sources list at the end. The worked examples are our own arithmetic on those published figures. Where a source quotes US dollars, we convert at US$1 = A$1.4224 (European
          Central Bank reference rate, 25 September 2026). GST in Australia is 10 percent: add it to any ex-GST figure
          before you compare.
        </p>
      </div>

      <p>
        Buyers price AI in four separate pieces, and many guides cover only one of them. This guide covers all four: AI
        consultants, custom AI agents, AI chatbots, and AI receptionists and voice agents. For each one we show what it costs
        to build or buy. We also cover AI
        automation and AI SEO briefly, and the Australian GST and privacy points that change the real number.
      </p>
      <p>
        We are FactoryJet, an AI services company that designs, builds and supports AI agents, automation and websites for
        Australian businesses. We are one of the options you might compare, so we have kept our own pricing off this page on
        purpose. FactoryJet was founded in 2014 by Bhavesh Barot, has more than a decade in commerce, and has served more than 500
        businesses.
      </p>

      <h2 id="summary">AI cost in Australia at a glance (2026)</h2>
      <p>
        The table below is the one to screenshot. It shows the typical Australian market range for each type of AI work, the
        source, and whether the source states prices with or without GST.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">What you are buying</th>
              <th className="p-3 text-left border border-gray-700">Typical Australian market range</th>
              <th className="p-3 text-left border border-gray-700">Source and date</th>
              <th className="p-3 text-left border border-gray-700">GST basis</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">AI consultant (hourly)</td>
              <td className="p-3 border border-gray-200">A$150 to A$400 an hour</td>
              <td className="p-3 border border-gray-200"><a href={SRC.flowtivity} target="_blank" rel="noopener noreferrer">Flowtivity</a>, March 2026</td>
              <td className="p-3 border border-gray-200">Not stated</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">AI consultant (daily)</td>
              <td className="p-3 border border-gray-200">A$1,500 to A$3,000 a day</td>
              <td className="p-3 border border-gray-200"><a href={SRC.flowtivity} target="_blank" rel="noopener noreferrer">Flowtivity</a>, March 2026</td>
              <td className="p-3 border border-gray-200">Not stated</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Custom AI agent build</td>
              <td className="p-3 border border-gray-200">A$5,000 to A$50,000+ (Flowtivity); A$15,000 to A$150,000, most SMB projects A$30,000 to A$80,000 (Web Video Digital)</td>
              <td className="p-3 border border-gray-200"><a href={SRC.flowtivity} target="_blank" rel="noopener noreferrer">Flowtivity</a>, March 2026; <a href={SRC.wvd} target="_blank" rel="noopener noreferrer">Web Video Digital</a>, August 2026</td>
              <td className="p-3 border border-gray-200">Not stated</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Custom AI chatbot build</td>
              <td className="p-3 border border-gray-200">A$10,000 to A$30,000 simple FAQ bot; A$30,000 to A$80,000 connected to your systems</td>
              <td className="p-3 border border-gray-200"><a href={SRC.awlabsChatbot} target="_blank" rel="noopener noreferrer">All Webbed Labs</a>, September 2026</td>
              <td className="p-3 border border-gray-200">Ex GST</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Chatbot software</td>
              <td className="p-3 border border-gray-200">Free plan; paid from US$24.17 a month (about A$34) on annual billing</td>
              <td className="p-3 border border-gray-200"><a href={SRC.tidio} target="_blank" rel="noopener noreferrer">Tidio pricing</a>, September 2026</td>
              <td className="p-3 border border-gray-200">USD list price</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">AI receptionist subscription</td>
              <td className="p-3 border border-gray-200">A$49 to A$399 a month (Giday); A$79 + GST (Vereo); A$149 to A$499 managed (Valory)</td>
              <td className="p-3 border border-gray-200">Vendor pricing pages, September 2026</td>
              <td className="p-3 border border-gray-200">Mixed: see the receptionist table</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="ai-consultant-cost">How much does an AI consultant cost in Australia?</h2>
      <p>
        An AI consultant helps you decide where AI will pay off in your business, what to build or buy, and how to do it
        safely. Some only advise. Others advise and then build. That difference matters more to the price than the job title.
      </p>
      <p>
        Flowtivity&apos;s March 2026 guide for Australian businesses says AI consultants typically charge{' '}
        <strong>A$150 to A$400 an hour</strong>, with day rates of <strong>A$1,500 to A$3,000</strong>. Web Video
        Digital&apos;s August 2026 guide puts senior AI developers in Australia at about <strong>A$180 to A$280 an
        hour</strong>. Neither source states whether GST is included, so ask.
      </p>
      <h3 id="consultant-day-rate">What does an AI consultant charge per hour or per day in Australia?</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">How the consultant bills</th>
              <th className="p-3 text-left border border-gray-700">Published Australian range</th>
              <th className="p-3 text-left border border-gray-700">Source</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Hourly, full band</td>
              <td className="p-3 border border-gray-200">A$150 to A$400 an hour</td>
              <td className="p-3 border border-gray-200"><a href={SRC.flowtivity} target="_blank" rel="noopener noreferrer">Flowtivity</a>, March 2026</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Hourly, most experienced consultants</td>
              <td className="p-3 border border-gray-200">A$200 to A$300 an hour</td>
              <td className="p-3 border border-gray-200"><a href={SRC.flowtivity} target="_blank" rel="noopener noreferrer">Flowtivity</a>, March 2026</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Day rate</td>
              <td className="p-3 border border-gray-200">A$1,500 to A$3,000 a day</td>
              <td className="p-3 border border-gray-200"><a href={SRC.flowtivity} target="_blank" rel="noopener noreferrer">Flowtivity</a>, March 2026</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Senior AI developer who builds as well</td>
              <td className="p-3 border border-gray-200">A$180 to A$280 an hour</td>
              <td className="p-3 border border-gray-200"><a href={SRC.wvd} target="_blank" rel="noopener noreferrer">Web Video Digital</a>, August 2026</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        A day rate is a sum of hours: at A$200 to A$300 an hour, a 7.6-hour day comes to A$1,520 to A$2,280, inside
        Flowtivity&apos;s day band. Pay by the hour for a few questions answered. Pay by the day for a workshop. For
        anything with a deliverable, ask for a fixed fee, which the next table shows. If you would rather put an AI
        engineer on your own payroll or bring in a contractor, salaries and contractor day rates are in our{' '}
        <a href="/blog/hire-ai-developers-australia-cost-2026#ai-engineer-rates">guide to AI engineer rates in Australia</a>.
      </p>
      <h3 id="consultant-engagements">The three project stages AI consultants price</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Engagement</th>
              <th className="p-3 text-left border border-gray-700">What you get</th>
              <th className="p-3 text-left border border-gray-700">Typical Australian range (Flowtivity, March 2026)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Discovery or strategy</td>
              <td className="p-3 border border-gray-200">A review of your processes, a shortlist of AI use cases and a plan</td>
              <td className="p-3 border border-gray-200">A$3,000 to A$8,000</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Proof of concept</td>
              <td className="p-3 border border-gray-200">A small working version on one process, to test before you commit</td>
              <td className="p-3 border border-gray-200">A$5,000 to A$15,000</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Full implementation</td>
              <td className="p-3 border border-gray-200">A production build, testing, handover and team training</td>
              <td className="p-3 border border-gray-200">A$15,000 to A$50,000+</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        A good discovery engagement should end with a written list of use cases ranked by value and effort, the systems each
        one touches, the privacy risks, and a fixed-scope quote for the first build. If you pay for discovery and walk away with
        slides but no scope, you paid for a conversation.
      </p>

      <h2 id="ai-agent-cost">How much does it cost to build a custom AI agent in Australia?</h2>
      <p>
        An AI agent is software you give a goal to, not a fixed script. It decides its own steps and uses tools to act on your
        systems: it books the appointment, updates the CRM, drafts the quote or checks the order. A chatbot answers. An agent
        gets something done. That is why agents cost more to build.
      </p>
      <p>
        Two Australian guides that AI assistants cited when we asked them this question publish different ranges, and it helps
        to see them side by side.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Agent type or use case</th>
              <th className="p-3 text-left border border-gray-700">Flowtivity (March 2026)</th>
              <th className="p-3 text-left border border-gray-700">Web Video Digital (August 2026)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Simple, single task (for example appointment booking)</td>
              <td className="p-3 border border-gray-200">A$5,000 to A$10,000</td>
              <td className="p-3 border border-gray-200">A$15,000 to A$35,000</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Lead qualification and follow-up</td>
              <td className="p-3 border border-gray-200">A$8,000 to A$20,000</td>
              <td className="p-3 border border-gray-200" rowSpan={2}>Context-aware, multi-step: A$35,000 to A$80,000</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Customer service automation</td>
              <td className="p-3 border border-gray-200">A$10,000 to A$25,000</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Document processing</td>
              <td className="p-3 border border-gray-200">A$12,000 to A$30,000</td>
              <td className="p-3 border border-gray-200" rowSpan={2}>Autonomous, uses your systems end to end: A$80,000 to A$150,000</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Multi-system workflow automation</td>
              <td className="p-3 border border-gray-200">A$20,000 to A$50,000+</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Industry-specific or regulated</td>
              <td className="p-3 border border-gray-200">A$25,000 to A$50,000+</td>
              <td className="p-3 border border-gray-200">A$150,000 to A$300,000+</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Why the gap? Web Video Digital&apos;s lowest tier starts where Flowtivity&apos;s middle tier sits, and it says most
        small and mid-size projects land at <strong>A$30,000 to A$80,000</strong>. The honest reading is that a narrow,
        well-defined agent on clean data can be built for five figures at the low end, and that the price climbs quickly with
        every system the agent touches and every rule it must follow. When two quotes differ by tens of thousands of dollars,
        the difference is almost always in what is included: testing, privacy work, monitoring and handover.
      </p>

      <figure className="my-8">
        <img
          src="/blog-images/ai-cost-australia-2026-build.webp"
          alt="Three colleagues in a bright Sydney office at a whiteboard, one drawing an AI agent workflow of boxes and arrows in orange marker while the others watch"
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Mapping the workflow before anyone writes code is the cheapest way to shrink an AI agent quote.
        </figcaption>
      </figure>

      <h3 id="cost-drivers">7 things that move the price of an AI agent</h3>
      <ol className="list-decimal pl-6 space-y-3 mb-6">
        <li>
          <strong>How many systems it connects to.</strong> Each integration, such as your booking tool, CRM, Shopify store or
          Xero, adds build and testing time. Flowtivity puts a typical integration at A$1,000 to A$3,000 on its own.
        </li>
        <li>
          <strong>Whether it only reads or also writes.</strong> An agent that looks up an order is far simpler and safer than
          one that can issue a refund. Write access needs permissions, approvals and logs.
        </li>
        <li>
          <strong>How clean your data is.</strong> Scattered spreadsheets, old PDFs and duplicate customer records mean
          groundwork before the agent can start.
        </li>
        <li>
          <strong>How many exceptions the job has.</strong> The main path is quick to build. The edge cases, such as a customer
          in a remote postcode or an order over a set value, are where the hours go.
        </li>
        <li>
          <strong>Privacy and compliance.</strong> Anything touching health, financial or other personal information needs
          extra design and testing to meet the Privacy Act 1988 and the Australian Privacy Principles.
        </li>
        <li>
          <strong>Voice or text.</strong> Phone agents add telephony, speech, transfers and call recording consent, which text
          chat does not need.
        </li>
        <li>
          <strong>Who looks after it afterwards.</strong> A quote that includes monitoring and a support period costs more up
          front than a hand-over-and-leave build, and much less over the year.
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
          <li>You can write down the rules a new staff member would follow for this job.</li>
          <li>The data it needs is already in one place and mostly up to date.</li>
          <li>It does not handle health records, payment card details or other sensitive information.</li>
        </ul>
        <p className="mt-4 mb-0 text-sm text-gray-600">
          Four or more ticks usually means a narrow first build. Two or fewer means you should budget toward the middle of the
          range, or start with a paid discovery to cut the scope down.
        </p>
      </details>

      <h2 id="ai-agent-running-cost">What happens after an AI agent goes live?</h2>
      <p>
        Once an agent is live, you pay for three things: <strong>model usage</strong> (the AI provider bills per token, a
        token being roughly three quarters of a word), <strong>hosting and monitoring</strong>, and{' '}
        <strong>maintenance</strong>.
      </p>

      <figure className="my-8">
        <img
          src="/blog-images/ai-cost-australia-2026-running.webp"
          alt="An Adelaide online store owner at his desk, seen from behind, looking at a simple bar chart on his monitor with shelves of boxes behind him"
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Usage bills grow with volume, not hours online. A quiet month costs less than a busy one.
        </figcaption>
      </figure>

      <p>
        Maintenance is not optional padding. Agents break quietly when the tools around them change: a Shopify app updates its
        API, Xero changes a field, your returns policy changes and nobody tells the agent. Someone has to notice and fix it.
      </p>
      <p>
        FactoryJet quotes the build, and any support you choose, as fixed prices in writing after a short scoping call, and
        can keep managing the servers, AI, APIs and maintenance so your team does not have to.
      </p>

      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg my-8">
        <h3 className="text-lg font-bold mb-3">Want the real number for your business?</h3>
        <p className="mb-4">
          Bring one process and a rough count of how often it happens. In a 30-minute call with founder Bhavesh Barot we will
          tell you whether it needs an agent, a simple automation or an off-the-shelf tool, and what building and running it
          would involve. We quote a fixed scope before any work starts.
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

      <h2 id="ai-chatbot-cost">How much does an AI chatbot cost in Australia?</h2>
      <p>
        A chatbot answers questions in a chat window on your website. It does not change anything in your systems, so it costs
        much less than an agent. Most businesses buy chatbot software rather than build it.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Option</th>
              <th className="p-3 text-left border border-gray-700">Published price (September 2026)</th>
              <th className="p-3 text-left border border-gray-700">About, in AUD</th>
              <th className="p-3 text-left border border-gray-700">How it is billed</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Tidio Free</td>
              <td className="p-3 border border-gray-200">US$0</td>
              <td className="p-3 border border-gray-200">A$0</td>
              <td className="p-3 border border-gray-200">Free plan with limits</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Tidio Starter</td>
              <td className="p-3 border border-gray-200">US$24.17 a month</td>
              <td className="p-3 border border-gray-200">A$34</td>
              <td className="p-3 border border-gray-200">Annual billing, 100 billable conversations</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Tidio Lyro AI agent</td>
              <td className="p-3 border border-gray-200">From US$32.50 a month</td>
              <td className="p-3 border border-gray-200">A$46</td>
              <td className="p-3 border border-gray-200">From 50 AI conversations</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Intercom Fin AI Agent</td>
              <td className="p-3 border border-gray-200">US$0.99 per outcome, plus helpdesk from US$19 a seat a month</td>
              <td className="p-3 border border-gray-200">A$1.41 per outcome; A$27 a seat</td>
              <td className="p-3 border border-gray-200">Per resolved conversation</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Custom chatbot connected to your systems</td>
              <td className="p-3 border border-gray-200">A$10,000 to A$25,000 build (customer service automation)</td>
              <td className="p-3 border border-gray-200">A$10,000 to A$25,000</td>
              <td className="p-3 border border-gray-200">Project fee, Flowtivity March 2026</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The per-outcome model is worth understanding. At US$0.99 a resolution, 1,000 resolved chats a month is US$990, about
        A$1,408, before helpdesk seats. That can be good value for a busy online store and poor value for a business with a
        handful of chats a day. Always model your own volume before you choose between a flat plan and per-outcome pricing.
      </p>
      <h3 id="ai-chatbot-build-cost">How much does it cost to develop a custom AI chatbot in Australia?</h3>
      <p>
        Once a chatbot has to read your own documents or look up an order, you are paying for a build, not a plan. All
        Webbed Labs, a Sydney software firm, published the clearest Australian tiers in September 2026, drawing on Team
        400&apos;s April 2026 figures. Its prices are ex GST.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">What the chatbot does</th>
              <th className="p-3 text-left border border-gray-700">Build cost (AUD, ex GST)</th>
              <th className="p-3 text-left border border-gray-700">Source</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Helpdesk AI configured inside Intercom, Zendesk or Freshdesk</td>
              <td className="p-3 border border-gray-200">A$5,000 to A$20,000 setup, content and testing</td>
              <td className="p-3 border border-gray-200"><a href={SRC.awlabsChatbot} target="_blank" rel="noopener noreferrer">All Webbed Labs</a> (its own estimate)</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Simple custom FAQ bot</td>
              <td className="p-3 border border-gray-200">A$10,000 to A$30,000</td>
              <td className="p-3 border border-gray-200"><a href={SRC.awlabsChatbot} target="_blank" rel="noopener noreferrer">All Webbed Labs</a>, from Team 400</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Custom bot on your knowledge base, connected to orders, bookings or CRM</td>
              <td className="p-3 border border-gray-200">A$30,000 to A$80,000</td>
              <td className="p-3 border border-gray-200"><a href={SRC.awlabsChatbot} target="_blank" rel="noopener noreferrer">All Webbed Labs</a>, from Team 400</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Customer service automation</td>
              <td className="p-3 border border-gray-200">A$10,000 to A$25,000</td>
              <td className="p-3 border border-gray-200"><a href={SRC.flowtivity} target="_blank" rel="noopener noreferrer">Flowtivity</a>, March 2026 (GST not stated)</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Enterprise agent that signs customers in and takes actions</td>
              <td className="p-3 border border-gray-200">A$80,000 to A$250,000+</td>
              <td className="p-3 border border-gray-200"><a href={SRC.awlabsChatbot} target="_blank" rel="noopener noreferrer">All Webbed Labs</a>, from Team 400</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Integrations move the number most. The same guide cites Team 400&apos;s estimate of A$5,000 to A$20,000 for each
        added integration, depending on how good the other system&apos;s API is. A bot that reads but never writes stays
        in the lower rows. Give it the right to change a booking or issue a refund and it becomes an agent, priced in the
        agent table above.
      </p>

      <h2 id="ai-receptionist-cost">AI receptionist and AI voice agent cost in Australia</h2>
      <p>
        An AI receptionist answers your phone, talks to the caller, books appointments into your calendar and passes urgent calls
        to a person. This is the most clearly priced part of the Australian AI market, because several local providers publish
        their plans. Here is what we found on their pricing pages on 26 September 2026.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Provider and plan</th>
              <th className="p-3 text-left border border-gray-700">Monthly price</th>
              <th className="p-3 text-left border border-gray-700">Included</th>
              <th className="p-3 text-left border border-gray-700">Extra usage and setup</th>
              <th className="p-3 text-left border border-gray-700">GST</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold"><a href={SRC.giday} target="_blank" rel="noopener noreferrer">Giday</a> Starter to Flat Out</td>
              <td className="p-3 border border-gray-200">A$49 / A$99 / A$199 / A$399</td>
              <td className="p-3 border border-gray-200">30 / 60 / 120 / 300 minutes</td>
              <td className="p-3 border border-gray-200">A$3.00 down to A$1.65 a minute by plan</td>
              <td className="p-3 border border-gray-200">Included</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold"><a href={SRC.vereo} target="_blank" rel="noopener noreferrer">Vereo</a> Starter</td>
              <td className="p-3 border border-gray-200">A$79</td>
              <td className="p-3 border border-gray-200">100 inbound minutes</td>
              <td className="p-3 border border-gray-200">A$0.49 a minute; A$295 setup for most setups</td>
              <td className="p-3 border border-gray-200">Excluded</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold"><a href={SRC.frontly} target="_blank" rel="noopener noreferrer">Frontly</a> Answer 200 / 400 / 800</td>
              <td className="p-3 border border-gray-200">A$149 / A$249 / A$449 (annual); A$179 / A$299 / A$539 (monthly)</td>
              <td className="p-3 border border-gray-200">200 / 400 / 800 minutes</td>
              <td className="p-3 border border-gray-200">A$0.50 a minute</td>
              <td className="p-3 border border-gray-200">Excluded</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold"><a href={SRC.valory} target="_blank" rel="noopener noreferrer">Valory</a> managed plans</td>
              <td className="p-3 border border-gray-200">A$149 / A$299 / A$499; enterprise from A$1,299</td>
              <td className="p-3 border border-gray-200">Core: 250 voice minutes and 150 SMS</td>
              <td className="p-3 border border-gray-200">A$0.70 a minute on Core; setup from A$990</td>
              <td className="p-3 border border-gray-200">Not stated</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        So the typical Australian market range for an off-the-shelf AI receptionist in September 2026 is{' '}
        <strong>about A$49 to A$499 a month</strong>, plus setup fees from nothing to around A$1,000 and per-minute overage.
        Because some providers quote GST-inclusive and others ex-GST, add 10 percent to the ex-GST plans before comparing.
      </p>

      <figure className="my-8">
        <img
          src="/blog-images/ai-cost-australia-2026-receptionist.webp"
          alt="A Melbourne physiotherapy clinic owner at her front desk checking a tablet of booked appointments, with a cordless phone on the counter"
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          For clinics and trades, the value of an AI receptionist is in the calls that used to ring out.
        </figcaption>
      </figure>

      <h3 id="virtual-receptionist">How this compares with a human virtual receptionist service</h3>
      <p>
        Human answering services in Australia are usually priced per call rather than per minute.{' '}
        <a href={SRC.virtualAddress} target="_blank" rel="noopener noreferrer">Virtual Address</a> lists a plan from A$33 a
        month plus A$3.89 per call, 20 calls for A$80 a month and 50 calls for A$185 a month, all excluding GST.{' '}
        <a href={SRC.officehq} target="_blank" rel="noopener noreferrer">OfficeHQ</a> lists call answering from A$25 a month
        excluding GST. For a business with a handful of calls a month, a per-call human service can be the cheaper answer. As
        call volume grows, per-minute AI plans usually cost less per call, and they book into your calendar mid-call.
      </p>

      <h2 id="ai-automation-cost">How much does AI automation cost?</h2>
      <p>
        AI automation means connecting your apps so work moves between them without someone copying and pasting, with an AI step
        where judgement is needed, such as reading an email and sorting it. Simple automations run on tools:{' '}
        <a href={SRC.zapier} target="_blank" rel="noopener noreferrer">Zapier</a> has a free plan with 100 tasks a month and paid
        plans from US$19.99 a month (about A$28), and Flowtivity lists Make at A$15 to A$100 a month. Custom multi-system
        automation, for example linking your online store, Xero and CRM, is a build that Flowtivity puts at{' '}
        <strong>A$20,000 to A$50,000 or more</strong>. AI automation agencies usually charge a project fee plus a monthly
        retainer.
      </p>

      <h2 id="ai-seo-cost">How much does AI SEO cost?</h2>
      <p>
        AI SEO, also called generative engine optimisation (GEO), is the work of getting your business named and cited in
        answers from ChatGPT, Google AI Overviews, Perplexity and similar tools. It is priced like SEO, as a monthly retainer or
        a fixed project, and it is usually bundled with regular SEO. We cover the published Australian ranges in our{' '}
        <a href="/blog/seo-cost-australia-2026">SEO cost in Australia guide</a>, and what the work involves on our{' '}
        <a href="/au/ai-seo">AI SEO services page for Australia</a>.
      </p>

      <h2 id="twelve-month-total">What does AI cost over the first 12 months?</h2>
      <p>
        The monthly price rarely tells you the real cost. Here are three worked examples for off-the-shelf subscriptions,
        using only the published figures above. They are arithmetic on public prices, not quotes.
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
              <td className="p-3 border border-gray-200 font-semibold">Off-the-shelf AI receptionist (Vereo Starter)</td>
              <td className="p-3 border border-gray-200">12 x A$79 + A$295 setup, before extra minutes</td>
              <td className="p-3 border border-gray-200 font-semibold">A$1,243 + GST (A$1,367.30 inc GST)</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Off-the-shelf AI receptionist (Giday Steady)</td>
              <td className="p-3 border border-gray-200">12 x A$99, no setup fee listed, before extra minutes</td>
              <td className="p-3 border border-gray-200 font-semibold">A$1,188 inc GST</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Website AI chatbot (Tidio Lyro entry)</td>
              <td className="p-3 border border-gray-200">12 x US$32.50 at A$1.4224</td>
              <td className="p-3 border border-gray-200 font-semibold">about A$555</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="build-buy-consult">Build, buy or bring in a consultant: which fits you?</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700"></th>
              <th className="p-3 text-left border border-gray-700">Buy off-the-shelf</th>
              <th className="p-3 text-left border border-gray-700">Consultant only</th>
              <th className="p-3 text-left border border-gray-700 bg-[#B23E13]">Build with a services partner</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Best for</td>
              <td className="p-3 border border-gray-200">Common jobs: phone answering, website chat, simple automations</td>
              <td className="p-3 border border-gray-200">Deciding where AI fits before spending on a build</td>
              <td className="p-3 border border-gray-200 bg-[#FFF4EC]">Jobs specific to how your business runs, across your own systems</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Cost shape</td>
              <td className="p-3 border border-gray-200">Monthly subscription plus usage</td>
              <td className="p-3 border border-gray-200">Hourly, daily or fixed discovery fee</td>
              <td className="p-3 border border-gray-200 bg-[#FFF4EC]">Fixed-scope build, then running and support costs</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Time to live</td>
              <td className="p-3 border border-gray-200">Days</td>
              <td className="p-3 border border-gray-200">A plan, not a live system</td>
              <td className="p-3 border border-gray-200 bg-[#FFF4EC]">Weeks for a narrow first agent</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Who owns it</td>
              <td className="p-3 border border-gray-200">The vendor; you rent access</td>
              <td className="p-3 border border-gray-200">You own the plan</td>
              <td className="p-3 border border-gray-200 bg-[#FFF4EC]">You should own the code, prompts and accounts. Put it in the contract.</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Main risk</td>
              <td className="p-3 border border-gray-200">Does not fit your edge cases or systems</td>
              <td className="p-3 border border-gray-200">Advice with nobody to build it</td>
              <td className="p-3 border border-gray-200 bg-[#FFF4EC]">A partner who disappears after launch</td>
            </tr>
          </tbody>
        </table>
      </div>
      <details className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <summary className="font-semibold cursor-pointer text-[#1F2937]">
          Quick guide: which option should you price first?
        </summary>
        <ul className="list-disc pl-6 space-y-2 mt-4 mb-0">
          <li><strong>You miss phone calls and mostly need bookings taken:</strong> price an off-the-shelf AI receptionist first.</li>
          <li><strong>Customers ask the same website questions all day:</strong> price chatbot software first, then an agent if it needs to check orders.</li>
          <li><strong>You are not sure where AI helps at all:</strong> pay for a fixed discovery before any build.</li>
          <li><strong>The job crosses your store, Xero, CRM or custom tools:</strong> price a custom agent, starting with one narrow process.</li>
        </ul>
      </details>

      <h2 id="gst-privacy">GST, US dollars and privacy: the Australian details that change the number</h2>
      <ul className="list-disc pl-6 space-y-3 mb-6">
        <li>
          <strong>GST.</strong> Australian vendors are split. Giday quotes GST-inclusive; Vereo and Frontly quote ex-GST. The
          two consultant and agent-build guides we read do not say. Ask every supplier to state it in writing.
        </li>
        <li>
          <strong>US dollar billing.</strong> Model providers and many chatbot tools bill in US dollars, so your cost moves with
          the exchange rate and your bank may add a foreign transaction fee. Overseas suppliers may also add Australian GST to
          your invoice. Check with your accountant how that interacts with your own GST registration.
        </li>
        <li>
          <strong>Privacy.</strong> The Privacy Act 1988 applies to how your AI tools handle personal information. The Office of
          the Australian Information Commissioner recommends, as best practice, that organisations do not enter personal
          information, and particularly sensitive information, into publicly available generative AI tools (
          <a href={SRC.oaic} target="_blank" rel="noopener noreferrer">OAIC guidance on commercially available AI products</a>).
          Building that protection into an agent is real work, and it is part of why regulated builds cost more.
        </li>
        <li>
          <strong>Call recording.</strong> AI receptionists record and transcribe calls. Make sure callers are told, and check
          the recording consent rules for your state.
        </li>
      </ul>

      <h2 id="accurate-quote">How to get an accurate AI quote in 5 steps</h2>
      <ol className="list-decimal pl-6 space-y-3 mb-6">
        <li><strong>Name one process.</strong> Not &quot;use AI in the business&quot;, but &quot;answer after-hours calls and book them in&quot;.</li>
        <li><strong>Count it.</strong> How many calls, chats, emails or orders a month? Volume drives running cost.</li>
        <li><strong>List the systems it touches</strong> and whether it needs to read or change anything in each one.</li>
        <li><strong>Ask for build and running costs separately</strong>, with GST basis stated, and the maintenance plan written out.</li>
        <li><strong>Ask who owns what at the end:</strong> code, prompts, accounts and data. If the answer is vague, so is the quote.</li>
      </ol>

      <h2 id="factoryjet-pricing">How FactoryJet prices AI work</h2>
      <p>
        We do not publish a price list, because an AI receptionist for a dental clinic and an agent that syncs a B2B store with
        Xero are different jobs. We start with a short discovery conversation, then quote a fixed scope for the first build
        before any work begins. We design, build, test and support the agent, and you own it: the code, the prompts and the
        accounts. If an off-the-shelf tool from the tables above will do the job, we will tell you so.
      </p>
      <p>
        To see the work behind these numbers, read about our{' '}
        <a href="/au/ai-agents">AI agent services in Australia</a>,{' '}
        <a href="/au/ai-development">custom AI development</a>,{' '}
        <a href="/au/ai-consulting">AI consulting for Australian businesses</a>, the{' '}
        <a href="/au/ai-receptionist">AI receptionist we build for Australian clinics and trades</a>, and{' '}
        <a href="/au/ai-customer-service">AI customer service</a>. For the wider picture, see{' '}
        <a href="/blog/best-ai-agencies-australia-2026">the best AI agencies in Australia</a>, or start at{' '}
        <a href="/au">FactoryJet Australia</a>. If you are pricing a website at the same time, our{' '}
        <a href="/blog/website-cost-australia-2026">website cost in Australia guide</a> uses the same sourcing rules.
      </p>

      <h2 id="sources">Sources</h2>
      <p className="text-sm text-gray-600">All pages opened and read on 26 September 2026. Flowtivity and Web Video Digital were read again on 21 October 2026, when All Webbed Labs was added. Prices change; check the source before you budget.</p>
      <ul className="list-disc pl-6 space-y-1 text-sm mb-8">
        <li><a href={SRC.flowtivity} target="_blank" rel="noopener noreferrer">Flowtivity, AI agent cost and pricing guide for Australia (March 2026)</a></li>
        <li><a href={SRC.wvd} target="_blank" rel="noopener noreferrer">Web Video Digital, Custom AI Agent Cost in Australia (August 2026)</a></li>
        <li><a href={SRC.awlabsChatbot} target="_blank" rel="noopener noreferrer">All Webbed Labs, How much does an AI chatbot cost in Australia? (updated 28 September 2026)</a></li>
        <li><a href={SRC.claude} target="_blank" rel="noopener noreferrer">Anthropic, Claude pricing</a></li>
        <li><a href={SRC.giday} target="_blank" rel="noopener noreferrer">Giday pricing</a>, <a href={SRC.vereo} target="_blank" rel="noopener noreferrer">Vereo pricing</a>, <a href={SRC.frontly} target="_blank" rel="noopener noreferrer">Frontly pricing</a>, <a href={SRC.valory} target="_blank" rel="noopener noreferrer">Valory AI receptionist cost guide</a></li>
        <li><a href={SRC.virtualAddress} target="_blank" rel="noopener noreferrer">Virtual Address receptionist pricing</a>, <a href={SRC.officehq} target="_blank" rel="noopener noreferrer">OfficeHQ live call answering</a></li>
        <li><a href={SRC.tidio} target="_blank" rel="noopener noreferrer">Tidio pricing</a>, <a href={SRC.intercom} target="_blank" rel="noopener noreferrer">Intercom pricing</a>, <a href={SRC.zapier} target="_blank" rel="noopener noreferrer">Zapier pricing</a></li>
        <li><a href={SRC.oaic} target="_blank" rel="noopener noreferrer">OAIC, Guidance on privacy and the use of commercially available AI products</a></li>
        <li>Exchange rate: European Central Bank reference rate for 25 September 2026, US$1 = A$1.4224</li>
      </ul>

      <div className="bg-[#FAF8F5] border-2 border-[#E5DFD7] p-6 sm:p-8 rounded-xl my-10 shadow-sm">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-2">
          AI scoping call for Australian businesses
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] mb-3">
          Get a fixed quote for your first AI agent
        </h3>
        <p className="text-[#4B5563] text-base leading-relaxed mb-6">
          Tell us the one process you want handled. We will tell you straight whether it needs a custom agent, an automation or
          an off-the-shelf tool, and quote a fixed scope for the build and the running costs.
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
            href="/au/ai-agents"
            className="inline-flex items-center gap-2 bg-white text-[#1F2937] border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            See AI agent services in Australia
          </a>
        </div>
      </div>
    </article>
  ),
};

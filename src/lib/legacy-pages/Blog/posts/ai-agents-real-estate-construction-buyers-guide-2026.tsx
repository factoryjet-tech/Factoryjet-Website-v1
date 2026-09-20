import React from 'react';
import type { BlogPost } from '../data.types';

export const post: BlogPost = {
  id: '455',
  slug: 'ai-agents-real-estate-construction-buyers-guide-2026',
  title: 'AI Agents for Real Estate and Construction: What They Actually Do in 2026',
  excerpt:
    'A plain-language, vendor-neutral guide to AI agents in real estate and construction. What they actually do, how to evaluate a vendor or tool, and an honest answer to the "will this replace me" question, for agents, brokers, GCs, and project managers.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Sep 20, 2026',
  readTime: '15 min read',
  imageUrl: '/blog-images/ai-agents-real-estate-construction-buyers-guide-2026.webp',
  meta: {
    title: 'AI Agents for Real Estate and Construction: What They Actually Do (2026)',
    description:
      'A vendor-neutral buyer\'s guide to AI agents in real estate and construction. What they actually do, how to evaluate a vendor or tool, and an honest answer on job security.',
  },
  keyTakeaways: [
    'An AI agent is software that can take action, not just answer a question. In real estate that means answering a lead, booking a showing, or updating a CRM record on its own. In construction it means tracking an RFI (a formal question sent when something on a drawing is unclear), routing a submittal for approval, or pulling up a spec sheet, without someone doing every step by hand.',
    'Most people searching for these terms right now are not ready to hire anyone. Real search data shows people mostly comparing tools or asking whether AI will take their job, not shopping for a developer. That is a normal, honest place to start, and this guide is written for that stage, not to rush anyone past it.',
    'Real estate agents are not being replaced. The National Association of REALTORS® reports 68% of agents already use AI tools in their work, mostly for writing and lead response, and licensed, accountable humans still handle the transaction itself (NAR, 2025 Technology Survey).',
    'Construction is earlier in adoption but moving. McKinsey\'s 2026 research on the industry points specifically at RFIs, drawings, specs, and close-out reports as the proprietary data construction firms can use AI to work with, and estimates AI could eventually automate a meaningful share of the industry\'s nonphysical, administrative work (McKinsey, July 2026).',
    'Before buying or building anything, ask four questions: how does it handle a wrong answer, what happens when it hands off to a human, what data does it need access to, and who owns the lead or project history it creates. A vendor or developer who cannot answer these clearly is not ready for a live client or a live job site.',
    'FactoryJet has a dedicated, shipped AI agent build for real estate lead response and follow-up. We have not shipped a construction AI agent as of this writing, so anything said here about construction is how we would approach it, not a claim of finished work.',
  ],
  faqs: [
    {
      q: 'What is an AI agent, in plain terms?',
      a: 'It is software that can look something up, make a small decision, and take an action, one step after another, instead of just replying to a message. A chatbot tells you the office hours. An agent checks a calendar, books the appointment, and writes it to your CRM. The difference is that an agent actually does something in a system you use, not just talks.',
    },
    {
      q: 'Is an AI agent the same thing as ChatGPT?',
      a: 'No. ChatGPT and similar tools are very good at writing and answering questions inside a chat window, but on their own they cannot see your CRM, your calendar, or your project management software. An AI agent is built to connect to those systems and act inside them. Some agents use a model like ChatGPT underneath, but the model alone is not an agent.',
    },
    {
      q: 'Why does this term suddenly show up everywhere in real estate and construction?',
      a: 'Because general AI tools got good enough, and cheap enough, that connecting them to everyday business systems became realistic for smaller teams, not just large companies. Both industries also have a lot of repetitive, time sensitive communication work (answering leads, chasing paperwork) that is a natural fit for this kind of tool.',
    },
    {
      q: 'What does an AI agent actually do for a real estate agent or brokerage?',
      a: 'The common jobs are answering a new lead within seconds instead of hours, asking a few honest qualifying questions, booking a showing against a real calendar, keeping a long nurture campaign going for buyers who are months from being ready, and writing clean updates back into the CRM instead of leaving records stale.',
    },
    {
      q: 'What does an AI agent actually do on a construction project?',
      a: 'The clearest, currently real use cases are tracking RFIs (a formal request for clarification when a drawing or spec is unclear) so nothing sits unanswered, routing submittals (the documents a contractor sends for approval before installing a product) to the right reviewer, helping coordinate subcontractor scheduling across trades, and finding the right page in a large set of specs or drawings quickly.',
    },
    {
      q: 'What is an RFI, and why does it matter for AI in construction?',
      a: 'RFI stands for Request for Information. It is a formal question sent when something on a drawing or in a spec is unclear or conflicts with something else. RFIs matter here because they are exactly the kind of repetitive, document heavy, deadline driven task an AI agent is well suited to track, draft, and route, while a licensed engineer or architect still gives the actual answer.',
    },
    {
      q: 'What is a submittal, in plain language?',
      a: 'A submittal is a document, sample, or drawing a contractor sends to an architect or engineer for approval before installing or ordering something, to confirm it matches the design. Submittal tracking is largely a status and deadline problem across many trades and products, which is why it is one of the more mature current uses of AI agents in construction.',
    },
    {
      q: 'Will AI replace real estate agents?',
      a: 'Not currently, and not in the way the question implies. Buying or selling a home involves licensing, fiduciary duty (a legal obligation to act in the client\'s interest), negotiation, and a large emotional decision. AI is taking over the administrative middle of the job, like answering an enquiry at midnight, not the licensed, accountable parts a client is actually paying for.',
    },
    {
      q: 'Will AI replace construction project managers?',
      a: 'No credible research says that today. What is changing is how much of the paperwork and coordination side of the job (tracking RFIs, chasing submittal approvals, updating schedules) can be handled by software, freeing a project manager to spend more time on judgment calls, site problems, and relationships with subcontractors and owners.',
    },
    {
      q: 'Is it fair to be worried about AI taking my job in either of these industries?',
      a: 'Yes, and it deserves a straight answer instead of a sales pitch. The honest pattern so far in both industries is that AI is absorbing repetitive, low judgment tasks, not licensed, relationship, or safety critical ones. That is a real shift in what the job looks like day to day. It is not evidence that the job itself is going away.',
    },
    {
      q: 'How many real estate agents are actually using AI right now?',
      a: 'According to NAR\'s 2025 Technology Survey, 68% of REALTORS® have used AI tools in their business. Most of that use is writing (listing descriptions, emails) and basic lead response, not full agents that act inside a CRM on their own, which is still a smaller, newer category.',
    },
    {
      q: 'How much of construction work could AI actually automate?',
      a: 'McKinsey\'s July 2026 research on the architecture, engineering, and construction industry points to nonphysical, administrative work (paperwork, coordination, document handling) as the near term opportunity, and specifically names RFIs, drawings, specs, and close-out reports as the kind of proprietary data firms can put AI to work on. Physical, on site trade work is a separate question this research does not claim to answer.',
    },
    {
      q: 'What is the difference between "AI in construction" generally and an "AI agent for construction" specifically?',
      a: '"AI in construction" is a broad category that includes things like computer vision cameras for safety, generative design software, and cost estimating tools. An AI agent, specifically, takes action inside your existing systems, like updating an RFI log or notifying a subcontractor, rather than just producing an analysis or an image for a person to act on.',
    },
    {
      q: 'Can ChatGPT do a construction takeoff?',
      a: 'Not reliably on its own. A takeoff means measuring quantities of materials from drawings, and general chat tools are not built to read scaled drawings precisely. Some newer tools connect a model like this to drawing files with added precision layers, but a takeoff used for bidding or ordering should still be checked by a qualified estimator before it is trusted.',
    },
    {
      q: 'Can an AI tool actually read construction plans and drawings?',
      a: 'Increasingly, yes, in a limited way. Some AI agents can search across a large set of drawings and specs and pull up the relevant page or clause faster than a person flipping through binders or PDFs. Reliably interpreting a complex drawing the way a trained engineer does, especially where a mistake is costly, is a different and much harder bar that most tools have not clearly cleared yet.',
    },
    {
      q: 'How can a real estate agent use AI day to day?',
      a: 'Four common uses, roughly in order of how widely they are used today: writing listing copy and follow-up emails, answering website and portal leads quickly, summarizing calls and cleaning up CRM notes, and pulling together comparable properties for a pricing conversation. The first three are settled, everyday practice. The fourth still benefits from a careful human check.',
    },
    {
      q: 'Is there a real, working example of an AI agent handling real estate leads?',
      a: 'Yes. Instant lead response, showing scheduling against a live calendar, and long-cycle nurture campaigns are shipped, working categories today, not a future promise. FactoryJet has built this specific kind of agent; see our real estate AI agent service page for exactly what that build covers.',
    },
    {
      q: 'Is there a real, working example of an AI agent handling construction RFIs or submittals?',
      a: 'The use case is real and documented in industry research, and several construction technology vendors sell products built around it. FactoryJet has not shipped a construction AI agent as of this writing. What we can offer is how we would approach a build like this, using the same evaluation questions in this guide, not a finished case study.',
    },
    {
      q: 'What should I ask any vendor before trusting an AI agent to talk to a real client or subcontractor?',
      a: 'Ask exactly what happens when it does not know an answer. A well built agent says so and hands off, rather than guessing confidently, which is called hallucination (a model stating something false as if it were fact). If a vendor cannot describe, in plain terms, how their system avoids or catches that, treat it as a real gap, not a detail to sort out later.',
    },
    {
      q: 'What does "human handoff" mean, and why does it matter so much here?',
      a: 'It means the point where the AI agent stops and a real, accountable person takes over. In real estate that should include pricing advice, contract terms, and anything touching fair housing (the law against discriminatory statements in housing). In construction it should include any answer with safety, structural, or contractual weight. Ask exactly where that line is drawn before you rely on either.',
    },
    {
      q: 'What data does an AI agent need access to in real estate?',
      a: 'Typically your CRM (to read and write lead and client records), your calendar (to check real availability before booking), and your MLS or IDX feed (the licensed listing data feed that keeps property details current). Each one comes with its own access rules and, for MLS data, specific display rules your board sets, which any legitimate vendor should ask about upfront.',
    },
    {
      q: 'What data does an AI agent need access to in construction?',
      a: 'Usually your project management software (for RFI and submittal logs), your document and drawing repository, and sometimes your scheduling tool for subcontractor coordination. The sensitive part is less about privacy and more about accuracy. Bad or outdated drawings feeding an agent produce confidently wrong answers, so data quality matters as much as data access.',
    },
    {
      q: 'Who owns the lead or project history an AI agent creates?',
      a: 'That should be you, in writing, before you sign anything. Ask directly what happens to your lead conversations, client notes, or RFI history if you cancel the tool, and whether you can export it in a usable format. A vendor that cannot answer this clearly is asking you to build months or years of records inside a system you might not be able to leave cleanly.',
    },
    {
      q: 'Should I buy an off-the-shelf tool or build a custom AI agent?',
      a: 'Buy first if your workflow is common and you need it running in weeks. Build only if your process has real branches a generic tool cannot handle, or if you need full control over where client or project data lives. Most teams in both industries are better served starting with a bought tool and only building later, once a specific gap is proven, not assumed.',
    },
    {
      q: 'Does real estate have any legal limits an AI agent has to respect?',
      a: 'Yes, and they are not optional. The Fair Housing Act makes it unlawful to publish any statement about the sale or rental of a dwelling that indicates a preference or limitation based on a protected characteristic, and an automated message counts as a statement. A real estate AI agent should never describe an area by who lives there or answer demographic questions, full stop.',
    },
    {
      q: 'Does construction have similar hard limits an AI agent should respect?',
      a: 'Yes, though the specific rules differ. An AI agent should never be the final word on anything with safety, structural, or code compliance weight. That means RFI answers involving load bearing changes, life safety systems, or code interpretation should always route to a licensed engineer or architect, with the agent handling the tracking and routing, not the technical judgment call.',
    },
    {
      q: 'How much does an AI agent for real estate or construction cost?',
      a: 'It genuinely depends on how many systems it connects to, how much conversation or document handling it needs to do, and whether you buy a subscription tool or commission a custom build. Any generic number published without seeing your setup is aimed at an average, not at you. Ask a vendor or developer for a real quote against your actual workflow instead.',
    },
    {
      q: 'How long does it take to get an AI agent live in either industry?',
      a: 'An off-the-shelf tool for a standard job, like lead response, can often be configured in days to a few weeks. A custom build, connecting a CRM or project system plus a calendar or scheduling tool, usually takes longer because of integration and testing. Adding MLS data, document search across drawings, or voice conversations extends the timeline further in both industries.',
    },
    {
      q: 'What is the biggest mistake teams make when adopting an AI agent in either industry?',
      a: 'Turning it on for everything at once and removing the human safety net on day one. The pattern that actually works is picking one queue (one lead source, or one RFI category), running the agent in shadow mode where a person approves its first drafts, and only letting it act alone once you have watched it handle real cases correctly for a while.',
    },
    {
      q: 'Where should I start if I am just exploring this, not ready to hire anyone?',
      a: 'Start by naming the one task costing you the most time or the most lost business today, whether that is slow lead response or a backlog of unanswered RFIs. Then look at whether an existing tool already solves that specific problem before considering anything custom. Most people at this stage do not need a vendor call yet. They need a clearer problem statement.',
    },
  ],
  content: (
    <>
      {/* Short Answer Callout */}
      <div className="bg-[#FFF3EE] border-l-4 border-[#F05A28] p-5 md:p-6 rounded-r-xl mb-8">
        <p className="font-bold text-gray-900 text-base md:text-lg mb-2">The Short Answer</p>
        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          An AI agent is software that takes action inside systems you already use, not just software that answers a question. In real estate, that means answering a new lead in seconds, qualifying it honestly, booking a showing, and keeping a long follow-up going without a person doing every step by hand. In construction, that means tracking an RFI (a formal question sent when a drawing is unclear) until it gets answered, routing a submittal for approval, helping coordinate subcontractor schedules, and finding the right page in a large set of specs or drawings. Neither replaces the licensed, accountable person in the room. Both are genuinely useful for the repetitive, time sensitive parts of these jobs that people tend to drop first when they get busy.
        </p>
      </div>

      {/* Section 1: What it means */}
      <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mt-10 mb-4">
        What an &quot;AI Agent&quot; Actually Means, in Plain Language
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        People use &quot;AI agent&quot; loosely, so it is worth being precise once. A chatbot answers a question using information it is given. It cannot look anything up in a real system or change anything. An AI agent is different because it can take multi-step action: check a calendar, read a record, make a small decision, and carry out a task, like booking an appointment or updating a status, without a person doing each step manually.
      </p>
      <p className="mb-4 text-gray-700 leading-relaxed">
        That extra ability to act, not just reply, is exactly why this matters more in real estate and construction than it would for a basic website chat widget. Both industries run on records that have to stay accurate (a CRM, a project log) and on deadlines that slip when nobody follows up. An agent that can actually touch those systems is solving a different problem than a chat window that just talks.
      </p>
      <p className="mb-6 text-gray-700 leading-relaxed">
        This guide covers two industries at once on purpose. The underlying idea, an AI system that takes action instead of just answering, is the same in both. What differs is the specific workflow, the specific software it needs to connect to, and the specific limits it has to respect. We will walk through both, honestly, without pretending either industry has this fully figured out yet.
      </p>

      {/* Section 2: The honest PAA-skew addressing */}
      <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mt-12 mb-4">
        Most People Searching This Are Not Ready to Buy Anything, and That Is Fine
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Here is something most pages like this will not tell you plainly. When people search for AI agents in real estate or construction, the questions that come up alongside it are mostly about comparing tools or wondering what this means for their own job, not &quot;who do I hire to build this.&quot; That is a normal, sensible place to be, and it deserves a straight answer rather than being funneled straight into a sales pitch.
      </p>
      <p className="mb-4 text-gray-700 leading-relaxed">
        If you are a real estate agent wondering whether AI is coming for your job, or a general contractor or project manager wondering the same thing, you deserve a direct answer: it is not, at least not in the way that question usually means. What is actually happening in both industries follows the same honest pattern, described in the next section with real numbers behind it, not vague reassurance.
      </p>

      {/* Section 3: Job security, real numbers */}
      <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mt-12 mb-4">
        Will AI Replace Real Estate Agents or Construction Project Managers?
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Start with real estate, where the data is clearer. The National Association of REALTORS® 2025 Technology Survey found that{' '}
        <strong>68% of agents have already used AI tools in their business</strong>, mostly for writing and basic lead response (
        <a
          href="https://www.nar.realtor/press-releases/realtors-embrace-ai-digital-tools-to-enhance-client-service-nar-survey-finds"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="text-[#F05A28] underline"
        >
          NAR, 2025 Technology Survey
        </a>
        ). That is not a story about agents being replaced. It is a story about agents already using these tools to do the same job faster, while the license, the fiduciary duty (a legal obligation to act in the client&apos;s interest), the negotiation, and the relationship stay firmly human.
      </p>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Construction is earlier in this shift, but the direction is similar. McKinsey&apos;s July 2026 research on the architecture, engineering, and construction industry does not describe AI replacing project managers or superintendents. It points specifically at administrative, nonphysical work, and names <strong>RFIs, drawings, specs, and close-out reports</strong> as the kind of data-heavy tasks firms can put AI to work on now (
        <a
          href="https://www.constructiondive.com/news/ai-report-construction-mckinsey-engineering-build-buy/825927/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="text-[#F05A28] underline"
        >
          McKinsey, reported by Construction Dive, July 2026
        </a>
        ). The research frames this as a shift in what the paperwork side of the job looks like, not a case for removing the people who make judgment calls on a live job site.
      </p>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Neither industry has a credible study saying the job itself is disappearing. What both have is a real, ongoing shift in which parts of the job take up a person&apos;s time. The parts moving to software are the repetitive, deadline driven, paperwork heavy ones. The parts staying human are the ones involving licensing, negotiation, safety, and judgment calls that carry real consequences.
      </p>

      {/* Section 4: What it does in real estate */}
      <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mt-12 mb-4">
        What an AI Agent Actually Does in Real Estate
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        This part of the category is genuinely mature, so we will keep it brief here rather than repeat a full breakdown. The core jobs an AI agent handles for a brokerage or team are answering a new lead within seconds instead of hours, asking a short set of honest qualifying questions rather than an interrogation, booking a showing against a real calendar, keeping a long nurture campaign alive for buyers who are months from being ready, and writing clean, accurate updates back into the CRM instead of leaving records to rot.
      </p>
      <div className="bg-slate-50 rounded-lg p-5 mb-6">
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-[#F05A28] font-bold">&#8226;</span>
            <span>Answers a portal enquiry the moment it lands, in your brokerage&apos;s voice, at any hour.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#F05A28] font-bold">&#8226;</span>
            <span>Qualifies with a few conversational questions, not a form dressed up as a chat.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#F05A28] font-bold">&#8226;</span>
            <span>Books against real calendar availability, and works with tools like ShowingTime or BrokerBay where a brokerage already uses one.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#F05A28] font-bold">&#8226;</span>
            <span>Keeps a twelve month nurture cadence running long after a person would have quietly stopped.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#F05A28] font-bold">&#8226;</span>
            <span>Writes clean updates to named CRM fields, instead of a database nobody trusts.</span>
          </li>
        </ul>
      </div>
      <p className="mb-6 text-gray-700 leading-relaxed">
        If you want the full picture for real estate specifically, including how fair housing limits get enforced in the tools rather than just in a prompt, and which CRMs and MLS connections are supported, see{' '}
        <a href="/services/ai-agents-for-real-estate" className="text-[#F05A28] font-semibold hover:underline">
          our real estate AI agent service page
        </a>
        , which lays out exactly what this looks like built out for a brokerage or team.
      </p>

      {/* Section 5: What it does in construction (original, thorough) */}
      <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mt-12 mb-4">
        What an AI Agent Actually Does in Construction
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Construction has no shortage of AI marketing, but a much shorter list of use cases that are actually real, verifiable, and in production today, rather than a demo. Three hold up under scrutiny, and we will explain each one in plain language since this is genuinely new territory for a lot of readers.
      </p>
      <div className="space-y-4 mb-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h3 className="font-bold text-gray-900 text-base mb-2">RFI tracking and drafting</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            An RFI, short for Request for Information, is a formal question sent when something on a drawing or in a spec is unclear or contradicts something else. RFIs are a natural fit for an AI agent because the work around them is mostly repetitive: drafting the question clearly, routing it to the right person, and following up when it goes quiet. The technical answer itself should still come from a licensed engineer or architect, not the agent.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h3 className="font-bold text-gray-900 text-base mb-2">Submittal routing</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            A submittal is a document, sample, or drawing a contractor sends for approval before installing or ordering something, to confirm it matches the design. On a mid-sized project there can be hundreds of these moving across many trades at once. An agent tracking status and deadlines across that volume, and flagging what is stuck, is largely a coordination problem, which is exactly what this kind of software is good at.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h3 className="font-bold text-gray-900 text-base mb-2">Subcontractor scheduling coordination and document lookup</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Coordinating which trade is on site when, and finding the right clause in a large set of specs or drawings, are both slow by hand and well suited to an agent that can search across documents and cross-check a schedule. This is where McKinsey&apos;s July 2026 research specifically points, naming drawings, specs, and close-out reports as the proprietary data construction firms are starting to put AI to work on.
          </p>
        </div>
      </div>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Two related questions come up constantly, and deserve an honest answer rather than an optimistic one. Can ChatGPT do a construction takeoff, meaning measure quantities of materials from drawings for a bid? Not reliably on its own. General chat tools are not built to read scaled drawings precisely, and a takeoff used for real bidding or ordering should still be checked by a qualified estimator. Can an AI tool read construction plans at all? In a limited but genuinely useful way, yes, mainly for finding the right page or clause quickly across a large document set. Interpreting a complex drawing the way a trained engineer does is a much higher bar most tools have not clearly cleared.
      </p>
      <p className="mb-6 text-gray-700 leading-relaxed">
        We are being direct here rather than stretching a thin list: this is the honest current state of the category, not a longer list padded out with speculation. If a vendor claims their construction AI agent already handles structural judgment calls or final code compliance decisions unsupervised, that claim is worth challenging directly.
      </p>

      {/* Mid-page nudge */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 md:p-6 my-10 text-sm text-gray-700">
        <p>
          Whichever industry you are in, the questions in the next section matter more than any feature list a vendor shows you. We use the same questions internally, on our own{' '}
          <a href="/services/ai-agent-development" className="text-[#F05A28] font-semibold hover:underline">
            AI agent development work
          </a>
          , before recommending a build over an existing tool.
        </p>
      </div>

      {/* Section 6: Evaluation framework */}
      <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mt-12 mb-4">
        How to Evaluate an AI Agent Vendor or Tool
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        This is the part most vendor pages skip, because the honest answers are less flattering than a feature list. Ask these four questions directly, whether you are looking at a real estate lead response tool, a construction RFI assistant, or anything in between.
      </p>
      <div className="space-y-4 mb-8">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h3 className="font-bold text-gray-900 text-base mb-2">
            1. What happens when it does not know the answer?
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            A well built agent says so and hands off to a person, rather than guessing confidently. That guessing has a name, hallucination, which means a model stating something false as if it were true. If a vendor cannot explain, in plain terms, how their system catches or avoids this before it reaches a real client or subcontractor, that is a real gap, not a minor detail.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h3 className="font-bold text-gray-900 text-base mb-2">
            2. Where exactly does human handoff happen?
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Get this in specifics, not a vague &quot;a human reviews it.&quot; In real estate, that line should include pricing advice, contract terms, and anything touching fair housing. In construction, it should include anything with safety, structural, or code compliance weight. Ask for the actual list of what the agent will never answer alone.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h3 className="font-bold text-gray-900 text-base mb-2">
            3. What data does it need, and what does it do with it?
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            In real estate that usually means your CRM, your calendar, and your MLS or IDX feed, each with its own access rules. In construction it usually means your project management software, your document repository, and sometimes a scheduling tool. Ask specifically how the agent stays current when that underlying data changes, since a stale drawing or a stale listing produces a confidently wrong answer either way.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h3 className="font-bold text-gray-900 text-base mb-2">
            4. Who owns the lead or project history it creates?
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Get this in writing before you sign anything. Ask what happens to your lead conversations, client notes, or RFI history if you ever cancel, and whether you can export it in a format you can actually use elsewhere. A vendor who cannot answer this clearly is asking you to build months of records inside a system you might not be able to leave cleanly later.
          </p>
        </div>
      </div>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Real estate carries one legal limit worth naming outright. The Fair Housing Act makes it unlawful to make, print, or publish any statement about the sale or rental of a dwelling that indicates a preference or limitation based on a protected characteristic (
        <a
          href="https://www.law.cornell.edu/uscode/text/42/3604"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="text-[#F05A28] underline"
        >
          42 U.S.C. &sect; 3604(c)
        </a>
        ), and an automated message counts as a statement. Ask any real estate AI vendor directly how that gets enforced in the tool itself, not just discouraged in a prompt.
      </p>

      {/* Section 7: Build vs buy quick take */}
      <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mt-12 mb-4">
        Buy an Existing Tool, or Build Something Custom?
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        In both industries, the honest starting point is the same: buy first, on a common workflow, if you need something running quickly and your process is not unusual. Build only once you have proven the use case is worth investing in, and a generic tool genuinely cannot handle how your business or your projects actually work. We cover this decision in full, with a real cost breakdown, in our{' '}
        <a href="/blog/ai-agent-build-vs-buy-2026" className="text-[#F05A28] font-semibold hover:underline">
          build versus buy guide for AI agents
        </a>
        .
      </p>
      <p className="mb-6 text-gray-700 leading-relaxed">
        On the real estate side, this is a build we have shipped: instant lead response, honest qualification, showing scheduling, and long-cycle CRM follow-up, with fair housing limits enforced in the tools themselves. See{' '}
        <a href="/services/ai-agents-for-real-estate" className="text-[#F05A28] font-semibold hover:underline">
          our real estate AI agent service page
        </a>{' '}
        for the specifics. On the construction side, we have not shipped a dedicated construction AI agent as of this writing, so what we can offer honestly is an approach: using the same evaluation questions above, starting with one queue like RFI tracking rather than everything at once, and running any agent in shadow mode before it acts without a person checking its work.
      </p>

      {/* Internal link hub */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-10">
        <h3 className="text-lg font-bold text-gray-900 mb-3">
          Related Reading on AI Agents
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          <a href="/services/ai-agents-for-real-estate" className="text-[#F05A28] hover:underline">AI Agents for Real Estate Teams</a>
          <a href="/blog/ai-agent-build-vs-buy-2026" className="text-[#F05A28] hover:underline">Build vs. Buy for AI Agents</a>
          <a href="/blog/what-is-an-ai-agent-cost-2026" className="text-[#F05A28] hover:underline">What Does an AI Agent Cost?</a>
          <a href="/blog/ai-chatbots-vs-ai-agents-business" className="text-[#F05A28] hover:underline">AI Chatbots vs. AI Agents</a>
        </div>
      </div>

      {/* Final Closing CTA */}
      <div className="bg-[#FFF3EE] border-2 border-[#F05A28] rounded-2xl p-6 md:p-8 text-center my-10">
        <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
          Still Deciding Whether This Is Worth Pursuing?
        </h3>
        <p className="text-gray-700 max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-6">
          Talk it through with an engineer, not a sales script. We will give you a straight answer on whether an AI agent fits your specific workflow in real estate or construction, including telling you when it does not.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://calendly.com/bhavesh-factoryjet/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#F05A28] hover:bg-[#C94818] text-white font-bold text-sm md:text-base px-8 py-3.5 rounded-xl shadow-md transition-all hover:scale-[1.02]"
          >
            Book 30-Min Technical Call
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 font-semibold text-sm md:text-base px-6 py-3.5 rounded-xl transition-colors"
          >
            Submit Project Details
          </a>
        </div>
      </div>
    </>
  ),
};

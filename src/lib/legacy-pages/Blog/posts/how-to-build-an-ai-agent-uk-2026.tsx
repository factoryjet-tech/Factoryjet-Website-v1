import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

// Keyword and PAA research: pipeline/research/data/market-uk-2026-09-24/brief_build_ai_agent.json
// (DataForSEO, location GB, fetched 2026-09-24). Brief: pipeline/research/briefs/UK-WAVE3-AGENT-BRIEF-2026-09-24.md
//
// The FAQPage schema is generated centrally by the blog route (src/app/blog/[slug]/page.tsx)
// FROM this exact array, so the visible FAQs and the structured data can never drift apart.
// Do not add a second, hand-written FAQPage script anywhere in this file.
const faqs: FAQItem[] = [
  {
    q: 'Can I build my own AI agent?',
    a: "Yes. If you can describe one repetitive job step by step, you can build a first version yourself. No-code builders such as n8n, Zapier, Make and Microsoft Copilot Studio let a non-developer connect a model to real tools in an afternoon. The hard part is not the first demo. It is making the agent safe on real customer data, testing it on real past cases, and keeping it working after launch.",
  },
  {
    q: 'Can I create an AI agent for free?',
    a: "You can start for free, but you cannot run one for free. Most no-code builders have a free tier or trial, and the coding frameworks (OpenAI Agents SDK, LangGraph, the Claude Agent SDK) are free to download. You still pay the model provider every time the agent thinks, plus hosting and your own time. Treat free tiers as a place to prototype, not a place to run a business process.",
  },
  {
    q: 'Can you build an AI agent with ChatGPT?',
    a: "Partly. Inside ChatGPT you can set up a custom assistant with its own instructions and files, and ChatGPT has its own agent mode for browsing and tasks. That is useful for personal work. For a business agent that reads your systems, acts on them and hands off to staff, you normally build with OpenAI's models through their API and the OpenAI Agents SDK, or through a no-code builder that calls those models.",
  },
  {
    q: 'Is it hard to build an AI agent?',
    a: "A simple AI agent is not hard. Connecting a model to one tool and giving it clear instructions takes hours, not weeks. It gets hard when the agent has to act on money, orders or personal data, handle messy real cases, and fail safely. Most of the effort in a production agent goes into permissions, testing, hand-offs to people and monitoring, not the AI part itself.",
  },
  {
    q: 'What is the best tool to build AI agents?',
    a: "There is no single best tool, only the best fit for your skills and job. For non-developers, n8n, Zapier, Make and Copilot Studio are the usual starting points (Copilot Studio suits businesses already on Microsoft 365). For developers, the OpenAI Agents SDK, LangGraph and the Claude Agent SDK give more control. Pick the tool that already connects to the systems your agent must use.",
  },
  {
    q: 'Can I build AI agents with n8n?',
    a: "Yes. n8n has a dedicated AI Agent node that sits inside a normal n8n workflow. You choose a chat model, give it tools (other n8n nodes, such as reading a Google Sheet or creating a ticket) and optional memory, and the agent decides which tool to call. You can use n8n's cloud service or host it yourself, which some UK businesses prefer for keeping data on servers they control.",
  },
  {
    q: 'Is n8n really AI?',
    a: "n8n itself is a workflow automation tool, not an AI model. It becomes an AI agent builder when you add its AI Agent node and connect a model from a provider such as OpenAI, Anthropic or Google. The model does the reasoning. n8n does the plumbing: triggers, connections to your apps, retries and logging. That split is actually helpful, because the fixed steps stay predictable.",
  },
  {
    q: 'How can I build an AI agent using MCP?',
    a: "MCP (Model Context Protocol) is an open standard for connecting AI applications to tools and data. To build with it, you either use an existing MCP server (many apps now publish one) or write a small server that exposes your own actions, such as look up an order. Then you point an MCP-aware agent, built with the Claude Agent SDK, OpenAI Agents SDK or similar, at that server.",
  },
  {
    q: 'Is MCP basically an API for AI?',
    a: "Close. An API is a door into one system. MCP is a shared plug shape for those doors, so any MCP-aware AI application can use any MCP server without custom glue each time. The official MCP site compares it to a USB-C port for AI applications. Under the hood, an MCP server usually calls a normal API. MCP just standardises how the agent discovers and calls it.",
  },
  {
    q: 'Can MCP be used with OpenAI?',
    a: "Yes. MCP started at Anthropic but is an open standard, and OpenAI's tools support it, including the OpenAI Agents SDK. The official MCP documentation lists ChatGPT and Claude among the AI applications that can connect to MCP servers. In practice this means you can build one MCP server for your stock system and use it from agents running on different model providers.",
  },
  {
    q: 'Can you create an AI agent in Python?',
    a: "Yes, and Python is the most common language for it. The OpenAI Agents SDK, LangGraph and the Claude Agent SDK all have Python versions, and the Claude Agent SDK also supports TypeScript. A basic Python agent is a loop: send the task to the model, let it pick a tool, run the tool, send the result back, and stop when the job is done or a limit is hit.",
  },
  {
    q: 'Can I build an AI agent from scratch without a framework?',
    a: "Yes. Anthropic's own engineering guidance suggests developers start by using model APIs directly, because many agent patterns take only a few lines of code. Building from scratch teaches you exactly what the agent is doing. Frameworks earn their place later, when you need things like saved state, retries, human approval steps or several agents working together, and do not want to rebuild them yourself.",
  },
  {
    q: 'What are the main components of an AI agent?',
    a: "OpenAI's practical guide names three core parts: the model (the AI that reasons and decides), tools (the functions or APIs it can use to act) and instructions (the rules and guardrails for how it behaves). Most real business agents add two more: memory, so it remembers context across steps, and a human hand-off, so a person takes over when the agent is unsure or the action is risky.",
  },
  {
    q: 'What are the 7 types of AI agents?',
    a: "Textbooks usually list simple reflex, model-based, goal-based, utility-based and learning agents, and many lists add hierarchical and multi-agent systems to make seven. The labels are useful for exams, less so for building. For a business build, the practical question is simpler: does this job follow fixed steps (build a workflow) or does it need the AI to choose its own steps (build an agent)?",
  },
  {
    q: 'What is a simple AI agent?',
    a: "A simple AI agent is one model, a short set of instructions and one or two tools. For example: read each new enquiry from your website form, decide whether it is a sales lead, support question or spam, and log it in the right place with a one-line summary. It has a clear job, limited permissions and an obvious way to check whether it got each case right.",
  },
  {
    q: 'How long does it take to build an AI agent?',
    a: "A no-code prototype of a single job can run within a day. A tested agent that touches one business system, with guardrails and a human hand-off, usually takes a few weeks including testing on real past cases. Agents that connect to several systems, handle personal data or take money-related actions take longer, mostly because of integration, testing and sign-off, not the AI itself.",
  },
  {
    q: 'How much does it cost to build your own AI agent?',
    a: "The cost depends on four things: which model you use and how often the agent runs (you pay per use), which builder or hosting you pick, how many systems it must connect to, and how much of your or a developer's time goes into testing and upkeep. Our separate guide on what an AI agent costs breaks these drivers down with worked examples, so we will not guess a figure here.",
  },
  {
    q: 'Can I build a personal AI agent?',
    a: "Yes, and it is a good way to learn. A personal agent that sorts your inbox, drafts replies for you to approve or pulls together a weekly summary is low risk, because you are the only user and you check its work. Keep it on your own accounts, give it read access first, and only let it send or change things once you trust its results.",
  },
  {
    q: 'Should I build one AI agent or a team of agents?',
    a: "Start with one. OpenAI's guide recommends getting the most out of a single agent, adding tools one at a time, before splitting work across several agents. A team of agents (one triages, others handle specialist tasks) makes sense only when one agent's instructions have become too long and tangled to follow reliably. More agents means more places for things to go wrong and harder testing.",
  },
  {
    q: 'Do I need to know how to code to build an AI agent?',
    a: "Not for a first version. No-code builders cover a lot of ground for common jobs. Coding skills start to matter when you need to connect a system that has no ready-made connector, control exactly what the agent can and cannot do, run proper automated tests, or host it in your own environment for data protection reasons. That is usually the point where people bring in a developer.",
  },
  {
    q: 'Which AI model is best for building agents?',
    a: "Use the most capable model you can while you prototype, measure how well it does on real cases, then try smaller, faster models for the simpler steps. That is the approach OpenAI's guide recommends. Models from OpenAI, Anthropic and Google all handle tool use well. Pick based on test results for your job, your data processing terms, and where the provider will process your data.",
  },
  {
    q: 'Is it legal to build an AI agent that uses customer data in the UK?',
    a: "Yes, as long as you follow UK GDPR and the Data Protection Act 2018 like any other system that handles personal data. You need a lawful basis, clear privacy information, a data processing agreement with your model provider, and security that fits the risk. The ICO has detailed guidance on AI and data protection covering lawfulness, transparency, fairness and automated decisions.",
  },
  {
    q: 'Do I need a DPIA for an AI agent?',
    a: "Often, yes. A DPIA (data protection impact assessment) is a written check of the risks a system poses to people's data and how you reduce them. UK GDPR requires one for processing likely to be high risk, and the ICO's AI guidance covers what to consider in a DPIA for AI. If your agent makes decisions about people or handles sensitive data, plan one before launch.",
  },
  {
    q: 'How do I test an AI agent before it goes live?',
    a: "Collect 30 to 100 real past cases for the job, such as old tickets, orders or enquiries, with the right outcome for each. Run the agent on them and score every answer. Include awkward cases: angry customers, missing details, requests it should refuse. Only launch when it meets the accuracy you agreed in advance, then keep adding new real cases to the test set.",
  },
  {
    q: 'When should I get help building an AI agent?',
    a: "Get help when the agent must write to a core system such as your ecommerce platform, ERP or accounts, when it handles personal or payment data, when you have spent more time fighting a no-code tool than it saves, or when nobody in the business can own it after launch. A short consultation often confirms whether you can finish it yourself.",
  },
  {
    q: 'If FactoryJet builds an AI agent for us, who owns it?',
    a: "You do. We design, build, integrate and support the agent, and the code, prompts, configuration and accounts belong to your business from day one. It runs on your accounts with your model provider. If you ever want to maintain it in-house or move to another supplier, you can, and we hand over documentation so the next person is not starting from scratch.",
  },
];

export const post: BlogPost = {
  id: '456',
  slug: 'how-to-build-an-ai-agent-uk-2026',
  title: 'How to Build an AI Agent: A Step-by-Step Guide for UK Businesses (and When to Hire Help)',
  excerpt:
    'How to build an AI agent in 10 practical steps: pick the job, map the rules, choose a model, choose no-code (n8n, Zapier, Make, Copilot Studio) or code (OpenAI Agents SDK, LangGraph, Claude Agent SDK), connect tools and data, add guardrails, test, monitor and stay on the right side of UK GDPR.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Sep 24, 2026',
  readTime: '16 min read',
  imageUrl: '/images/blog/how-to-build-an-ai-agent-uk-2026/how-to-build-an-ai-agent-uk-hero.webp',
  imageAlt:
    'A UK small business owner and a developer at a laptop, sketching an AI agent workflow of boxes and arrows on paper',
  meta: {
    title: 'How to Build an AI Agent: UK Step-by-Step Guide | FactoryJet',
    description:
      'How to build an AI agent in 10 steps: pick the job, choose no-code or code, connect tools, add guardrails, test and meet UK GDPR. Honest guide for UK teams.',
  },
  keyTakeaways: [
    'To build an AI agent, start with one narrow, repetitive job, write its steps and rules down, then give a model the tools and instructions to do it. OpenAI describes every agent as three parts: a model, tools and instructions.',
    'No-code builders (n8n, Zapier, Make, Microsoft Copilot Studio) get a first version running fastest. Coding frameworks (OpenAI Agents SDK, LangGraph, Claude Agent SDK) give more control over permissions, testing and hosting.',
    'The AI is the easy part. Most of the real work is connecting tools safely, adding guardrails and a human hand-off, and testing on real past cases before launch.',
    'MCP (Model Context Protocol) is an open standard that lets one set of tool connections work across different AI applications and model providers.',
    'In the UK, an agent that touches personal data falls under UK GDPR. Check your lawful basis, sign a processing agreement with your model provider, and consider a DPIA. The ICO publishes specific guidance on AI.',
    'Build it yourself when the job is simple and low risk. Get help when the agent writes to core systems, handles personal or payment data, or has no clear owner after launch.',
  ],
  faqs,
  content: (
    <>
      {/* Structured data: WebPage + Service + ItemList. FAQPage and BreadcrumbList are emitted
          once, centrally, by the blog route (src/app/blog/[slug]/page.tsx) from post.faqs above.
          The Organization is referenced by @id only and is never defined here. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              '@id': 'https://factoryjet.com/blog/how-to-build-an-ai-agent-uk-2026#webpage',
              url: 'https://factoryjet.com/blog/how-to-build-an-ai-agent-uk-2026',
              name: 'How to Build an AI Agent: A Step-by-Step Guide for UK Businesses',
              description:
                'A practical, vendor-neutral guide to building an AI agent: choosing the job, the model, no-code or code tools, connecting data, guardrails, testing, monitoring and UK GDPR.',
              inLanguage: 'en-GB',
              datePublished: '2026-09-24',
              dateModified: '2026-09-24',
              author: { '@type': 'Person', name: 'Bhavesh Barot', jobTitle: 'Founder & CEO' },
              publisher: { '@id': 'https://factoryjet.com/#organization' },
              primaryImageOfPage:
                'https://factoryjet.com/images/blog/how-to-build-an-ai-agent-uk-2026/how-to-build-an-ai-agent-uk-hero.webp',
              speakable: {
                '@type': 'SpeakableSpecification',
                cssSelector: ['h1', '.answer-first'],
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: 'AI Agent Development',
              name: 'Custom AI agent design, build, integration and support',
              description:
                'FactoryJet designs, builds, integrates and supports custom AI agents for UK businesses, connected to ecommerce platforms, CRMs, help desks and back-office systems. The client owns the code and configuration.',
              provider: { '@id': 'https://factoryjet.com/#organization' },
              areaServed: { '@type': 'Country', name: 'United Kingdom' },
              url: 'https://factoryjet.com/uk/ai-agents',
            },
            {
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'Tools for building an AI agent',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'n8n', url: 'https://n8n.io/' },
                { '@type': 'ListItem', position: 2, name: 'Zapier Agents', url: 'https://zapier.com/agents' },
                { '@type': 'ListItem', position: 3, name: 'Make AI Agents', url: 'https://www.make.com/en/ai-agents' },
                {
                  '@type': 'ListItem',
                  position: 4,
                  name: 'Microsoft Copilot Studio',
                  url: 'https://www.microsoft.com/en-gb/microsoft-copilot/microsoft-copilot-studio',
                },
                {
                  '@type': 'ListItem',
                  position: 5,
                  name: 'OpenAI Agents SDK',
                  url: 'https://openai.github.io/openai-agents-python/',
                },
                { '@type': 'ListItem', position: 6, name: 'LangGraph', url: 'https://www.langchain.com/langgraph' },
                {
                  '@type': 'ListItem',
                  position: 7,
                  name: 'Claude Agent SDK',
                  url: 'https://code.claude.com/docs/en/agent-sdk/overview',
                },
              ],
            },
          ]),
        }}
      />

      {/* Answer-first block */}
      <div className="answer-first bg-[#FFF3EE] border-l-4 border-[#F05A28] p-5 md:p-6 rounded-r-xl mb-8">
        <p className="font-bold text-gray-900 text-base md:text-lg mb-2">The short answer: how to build an AI agent</p>
        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          To build an AI agent, pick one repetitive job, write down its steps and rules, choose a model, then build
          it in a no-code tool (n8n, Zapier, Make, Copilot Studio) or a coding framework (OpenAI Agents SDK,
          LangGraph). Connect only the tools it needs, add a human hand-off, test on real past cases, and monitor
          it after launch.
        </p>
      </div>

      <p className="mb-4 text-gray-700 leading-relaxed">
        This is a practical guide to how to build an AI agent, written for UK business owners and the people who
        end up doing the building: an operations lead, a tech-minded founder, or a developer asked to &quot;try
        this AI agent thing&quot;. It is useful wherever you are, but the data protection section is written for
        UK GDPR. We cover the whole path in order, from choosing the job to keeping the agent healthy after launch,
        and then, briefly and fairly, how to tell when it is worth getting outside help.
      </p>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Quick vocabulary, once. An <strong>AI agent</strong> is software that is given a goal and a set of tools,
        and decides its own steps to reach that goal: it can look something up, make a decision, and act in a real
        system, such as updating an order or creating a support ticket. A <strong>model</strong> (or LLM, large
        language model) is the AI that does the reasoning, such as OpenAI&apos;s GPT models, Anthropic&apos;s
        Claude or Google&apos;s Gemini. A <strong>tool</strong> is anything the agent can call to act, usually an
        app&apos;s API (the way one piece of software talks to another). A <strong>workflow</strong> is a fixed
        sequence of steps that always runs the same way.
      </p>
      <p className="mb-6 text-gray-700 leading-relaxed">
        If you are still deciding whether to build at all or rent an off-the-shelf tool, read our{' '}
        <a href="/blog/ai-agent-build-vs-buy-2026" className="text-[#B23E13] font-semibold underline">
          build vs. buy framework for AI agents
        </a>{' '}
        first. This guide assumes you have decided to create an AI agent and want to do it properly.
      </p>

      <div className="bg-gray-50 p-6 rounded-2xl mb-8 border border-gray-200">
        <p className="text-lg font-bold mb-3 text-gray-900">What this guide covers</p>
        <ol className="list-decimal pl-5 space-y-1 text-gray-700 text-sm md:text-base">
          <li><a href="#what-you-are-building" className="text-[#B23E13] underline">What you are actually building</a></li>
          <li><a href="#ten-steps" className="text-[#B23E13] underline">How to build an AI agent in 10 steps</a></li>
          <li><a href="#tools" className="text-[#B23E13] underline">AI agent builders: no-code tools and coding frameworks</a></li>
          <li><a href="#mcp" className="text-[#B23E13] underline">Building an AI agent with MCP</a></li>
          <li><a href="#uk-gdpr" className="text-[#B23E13] underline">UK GDPR and data protection</a></li>
          <li><a href="#compare" className="text-[#B23E13] underline">No-code vs code vs developer vs agency</a></li>
          <li><a href="#mistakes" className="text-[#B23E13] underline">Common mistakes when building AI agents</a></li>
          <li><a href="#get-help" className="text-[#B23E13] underline">Signs it is time to get help</a></li>
        </ol>
      </div>

      {/* Section: what you are building */}
      <h2 id="what-you-are-building" className="text-2xl md:text-3xl font-display font-bold text-gray-900 mt-10 mb-4">
        What you are actually building when you build an AI agent
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Strip away the hype and every AI agent has the same three parts. OpenAI&apos;s{' '}
        <a
          href="https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="text-[#B23E13] underline"
        >
          A practical guide to building agents
        </a>{' '}
        names them as the <strong>model</strong> that reasons and decides, the <strong>tools</strong> it can use
        to take action, and the <strong>instructions</strong> that set its rules and guardrails. Almost every
        useful business agent adds two more: <strong>memory</strong>, so it keeps track of what has happened in a
        conversation or task, and a <strong>human hand-off</strong>, so a person takes over when it gets stuck.
      </p>
      <p className="mb-4 text-gray-700 leading-relaxed">
        The other idea worth getting straight before you start is the difference between a workflow and an agent.
        Anthropic&apos;s engineering team, in{' '}
        <a
          href="https://www.anthropic.com/engineering/building-effective-agents"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="text-[#B23E13] underline"
        >
          Building effective agents
        </a>
        , describes workflows as systems where the model and tools follow predefined code paths, and agents as
        systems where the model directs its own process and tool use. Their advice is to find the simplest
        solution that works and only add complexity when you need it.
      </p>
      <p className="mb-6 text-gray-700 leading-relaxed">
        That matters for you because many jobs people call &quot;AI agents&quot; are better built as a workflow
        with one AI step in the middle. Sorting enquiries into three buckets? A workflow with an AI classifier is
        simpler to run, faster and easier to test. Handling a return where the agent has to check the order, read the
        policy, look at the photos and decide what to offer? That is where a true agent earns its place.
      </p>

      {/* Section: 10 steps */}
      <h2 id="ten-steps" className="text-2xl md:text-3xl font-display font-bold text-gray-900 mt-12 mb-4">
        How to build an AI agent in 10 steps
      </h2>
      <p className="mb-6 text-gray-700 leading-relaxed">
        These steps apply whether you build an AI agent from scratch in Python or click one together in a no-code
        builder. Skipping the early ones is the most common reason agents look great in a demo and then fail on
        real work.
      </p>

      <div className="space-y-5 mb-8">
        <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
          <h3 className="font-bold text-gray-900 text-lg mb-2">1. Pick one narrow, repetitive job</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Good first jobs happen often, follow rules a person could write down, and have an outcome you can check.
            Examples from UK small businesses: triaging website enquiries, answering &quot;where is my order&quot;
            emails using your ecommerce and Royal Mail tracking data, chasing unpaid invoices politely, or drafting
            product descriptions from a supplier spreadsheet for someone to approve.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Bad first jobs are vague (&quot;help with marketing&quot;), rare, or high stakes with no easy way to check
            the result. Write the job as one sentence: &quot;When X arrives, the agent does Y, and hands to a person
            when Z.&quot; If you cannot write that sentence, you are not ready to build yet.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
          <h3 className="font-bold text-gray-900 text-lg mb-2">2. Map the steps, rules and exceptions</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Sit with the person who does the job today and write down exactly what they do: what they look at, in
            which system, what they decide, and what they do when something is odd. Draw it as boxes and arrows.
            OpenAI&apos;s guide recommends basing agent instructions on existing documents such as operating
            procedures, support scripts or policy documents, so gather those too.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The exceptions are the valuable part. &quot;If the customer is in the Channel Islands, shipping rules
            differ.&quot; &quot;If the order is over a set value, a manager approves the refund.&quot; Every
            exception you write down now is a failure you avoid later.
          </p>
        </div>

        <figure className="my-2">
          <img
            src="/images/blog/how-to-build-an-ai-agent-uk-2026/agent-workflow-whiteboard.webp"
            alt="A whiteboard showing a branching AI agent workflow drawn as connected boxes and arrows, with one box highlighted in orange for the human hand-off"
            width={1200}
            height={800}
            loading="lazy"
            decoding="async"
            className="w-full h-auto rounded-xl border border-gray-200"
          />
          <figcaption className="text-xs text-gray-500 mt-2">
            Map the job as boxes and arrows before you open any tool. Mark the point where a person takes over.
          </figcaption>
        </figure>

        <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
          <h3 className="font-bold text-gray-900 text-lg mb-2">3. Decide exactly what the agent may touch</h3>
          <p className="text-gray-700 leading-relaxed">
            List every system the agent needs and whether it needs to <strong>read</strong> or <strong>write</strong>.
            Start with read-only access wherever you can. An agent that can look up orders but not issue refunds
            is far safer to launch than one that can do both. Create a separate account or API key for the agent
            with the smallest permissions that let it do the job, so you can see its actions in logs and switch
            it off without affecting anyone else.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
          <h3 className="font-bold text-gray-900 text-lg mb-2">4. Choose a model</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            OpenAI&apos;s guide gives a sensible rule: build your prototype with the most capable model, measure how
            well it does, then try swapping in smaller, faster models for the steps that are simple. Classifying an
            email is easy. Deciding whether a refund meets your policy is harder. Different steps can use different
            models.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For a UK business, also check the boring things: the provider&apos;s business terms, whether they use
            your data to train their models (business API terms usually say no, but read them), where data is
            processed, and whether they offer a data processing agreement. Those answers matter more than a small
            difference in test scores.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
          <h3 className="font-bold text-gray-900 text-lg mb-2">5. Choose how you will build it: no-code or code</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            An <strong>AI agent builder</strong> (no-code or low-code tool) lets you create an AI agent by dragging
            steps onto a canvas and filling in settings. A <strong>coding framework</strong> is a library a developer
            uses to write the agent in Python or TypeScript. The right choice depends on who will build it and,
            more importantly, who will maintain it.
          </p>
          <p className="text-gray-700 leading-relaxed">
            A fair rule of thumb: if the job is common, the systems already have connectors in the tool, and the
            person building it is not a developer, start no-code. If you need tight control over permissions, custom
            connections, automated testing or hosting in your own environment, use code. We compare the main
            options in the <a href="#tools" className="text-[#B23E13] underline">tools section below</a>.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
          <h3 className="font-bold text-gray-900 text-lg mb-2">6. Connect tools and data</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Tools are how the agent does things. Each tool should do one clear job with a clear name and description,
            such as <em>get_order_status(order_number)</em> or <em>create_support_ticket(summary, priority)</em>. The
            model reads these descriptions to decide which tool to call, so vague descriptions cause wrong choices.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For knowledge the agent needs to answer from, such as your returns policy or product specs, give it a
            clean, current source rather than everything you have. Out-of-date documents are one of the quietest
            causes of wrong answers. If a system has no connector, this is where you either write a small bit of
            code or use <a href="#mcp" className="text-[#B23E13] underline">MCP</a>.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
          <h3 className="font-bold text-gray-900 text-lg mb-2">7. Write clear instructions</h3>
          <p className="text-gray-700 leading-relaxed">
            Instructions (sometimes called the system prompt) tell the agent who it is working for, what the job is,
            what steps to follow, what it must never do, and when to stop and hand over. Write them the way you
            would brief a sensible new starter: short numbered steps, the rules from step 2, and examples of good and
            bad outcomes. Put the tone of voice in plain words (&quot;friendly, brief, British spelling&quot;) and tell
            it what to say when it does not know.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
          <h3 className="font-bold text-gray-900 text-lg mb-2">8. Add guardrails and a human hand-off</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Guardrails are checks that stop the agent doing something it should not. OpenAI&apos;s guide describes
            them as layered defences: no single check is enough, but several together make the agent much safer.
            Practical guardrails include a limit on how many steps or retries it can take, blocking personal data
            from being sent where it should not go, checking outputs before they reach a customer, and requiring
            approval for anything that cannot be undone.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The same guide names two triggers for handing to a person: when the agent keeps failing (for example, it
            cannot understand what the customer wants after several tries), and when the action is high risk, such
            as cancelling orders, authorising large refunds or making payments. Decide who receives the hand-off,
            in which channel, and with what summary, so the person does not have to start from scratch.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
          <h3 className="font-bold text-gray-900 text-lg mb-2">9. Test on real past cases</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Before any customer sees it, collect a set of real past cases (old tickets, orders, enquiries) with the
            correct outcome for each. This is called an evaluation set, or evals. Run the agent against all of them
            and score the results. Include the awkward ones: missing details, angry messages, requests it should
            refuse, and attempts to trick it into ignoring its instructions.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Agree the pass mark before you run the tests, not after. Keep the test set and rerun it every time you
            change the instructions, the tools or the model, because a fix in one place often breaks something
            elsewhere.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
          <h3 className="font-bold text-gray-900 text-lg mb-2">10. Launch small, then monitor</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Launch to a slice of the work first: one inbox, one product range, or a draft mode where a person approves
            every action. Log every decision the agent makes and every tool it calls. Review a sample each week and
            add the failures to your test set.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Agents drift for reasons that have nothing to do with your build: a connected app changes its API, the
            model provider updates or retires a model, or your own policies change. Name one person who owns the
            agent after launch. An agent with no owner is the one that quietly starts giving wrong answers in month
            three.
          </p>
        </div>
      </div>

      {/* Section: tools */}
      <h2 id="tools" className="text-2xl md:text-3xl font-display font-bold text-gray-900 mt-12 mb-4">
        AI agent builders: no-code tools and coding frameworks
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        There are dozens of ways to build AI agents. These are the ones UK teams ask us about most, grouped by who
        they suit. All of them are real, maintained products; we have no commercial tie to any of them, and the
        right one depends on the systems you already use.
      </p>

      <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">No-code and low-code AI agent builders</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
          <p className="font-bold text-gray-900 mb-1">
            <a href="https://n8n.io/" target="_blank" rel="noopener noreferrer nofollow" className="hover:underline">n8n</a>
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            A workflow automation tool with an AI Agent node. Strong when you want fixed workflow steps around an
            AI decision. Can be self-hosted, which appeals to teams that want data on their own servers. Popular for
            &quot;n8n build AI agent&quot; projects because the steps stay visible.
          </p>
        </div>
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
          <p className="font-bold text-gray-900 mb-1">
            <a href="https://zapier.com/agents" target="_blank" rel="noopener noreferrer nofollow" className="hover:underline">Zapier Agents</a>
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Agents that act across the very large library of apps Zapier already connects to. The easiest start if
            your business already runs on Zapier and the apps you need are in its catalogue.
          </p>
        </div>
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
          <p className="font-bold text-gray-900 mb-1">
            <a href="https://www.make.com/en/ai-agents" target="_blank" rel="noopener noreferrer nofollow" className="hover:underline">Make</a>
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Builds AI agents directly on the Make visual canvas alongside normal automations. Good for people who
            like to see branching logic laid out as a diagram.
          </p>
        </div>
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
          <p className="font-bold text-gray-900 mb-1">
            <a
              href="https://www.microsoft.com/en-gb/microsoft-copilot/microsoft-copilot-studio"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="hover:underline"
            >
              Microsoft Copilot Studio
            </a>
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Microsoft&apos;s platform for building and managing agents in natural language or a graphical
            interface. The natural fit if your business lives in Microsoft 365, Teams and SharePoint.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Coding frameworks for developers</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
          <p className="font-bold text-gray-900 mb-1">
            <a href="https://openai.github.io/openai-agents-python/" target="_blank" rel="noopener noreferrer nofollow" className="hover:underline">OpenAI Agents SDK</a>
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            A lightweight Python library for agents, tools, hand-offs between agents and guardrails. The examples in
            OpenAI&apos;s practical guide use it.
          </p>
        </div>
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
          <p className="font-bold text-gray-900 mb-1">
            <a href="https://www.langchain.com/langgraph" target="_blank" rel="noopener noreferrer nofollow" className="hover:underline">LangGraph</a>
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            A lower-level framework for designing agents as graphs of steps, with human-in-the-loop controls. Suits
            longer, stateful processes that pause for approval.
          </p>
        </div>
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
          <p className="font-bold text-gray-900 mb-1">
            <a href="https://code.claude.com/docs/en/agent-sdk/overview" target="_blank" rel="noopener noreferrer nofollow" className="hover:underline">Claude Agent SDK</a>
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Anthropic&apos;s library in Python and TypeScript, with built-in tools, permissions, hooks and MCP
            support. You can also call the Claude API directly and write the loop yourself.
          </p>
        </div>
      </div>
      <p className="mb-6 text-gray-700 leading-relaxed">
        You can also build an AI agent from scratch with no framework at all: a loop that sends the task to a model,
        runs whichever tool it asks for, and sends back the result. It is a great way to learn, and for small agents
        it is often enough.
      </p>

      {/* Section: MCP */}
      <h2 id="mcp" className="text-2xl md:text-3xl font-display font-bold text-gray-900 mt-12 mb-4">
        Building an AI agent with MCP
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        MCP stands for Model Context Protocol. The{' '}
        <a
          href="https://modelcontextprotocol.io/docs/getting-started/intro"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="text-[#B23E13] underline"
        >
          official MCP documentation
        </a>{' '}
        describes it as an open-source standard for connecting AI applications to external systems, and compares
        it to a USB-C port: one shared plug shape instead of a different cable for every device.
      </p>
      <p className="mb-4 text-gray-700 leading-relaxed">
        In practice, an <strong>MCP server</strong> is a small program that exposes a set of actions, such as
        &quot;search products&quot; or &quot;create a delivery note&quot;, in a standard way. An agent that speaks
        MCP can discover and use those actions without custom glue code. Many apps now publish their own MCP
        servers, and you can write one for an in-house system in a short piece of code.
      </p>
      <p className="mb-6 text-gray-700 leading-relaxed">
        To build an AI agent using MCP: pick an agent framework that supports it (the Claude Agent SDK and OpenAI
        Agents SDK both do), connect it to the MCP servers for your tools, and apply the same permission rules from
        step 3. MCP makes connecting easier; it does not make an unsafe permission safe. Only connect servers you
        trust, because a server can see whatever the agent sends it.
      </p>

      {/* Mid-page CTA */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 md:p-6 my-10 text-sm md:text-base text-gray-700">
        <p className="font-bold text-gray-900 mb-2">Halfway through a build and stuck on the integration?</p>
        <p className="mb-4">
          Most DIY agents stall at step 6: the system you need has no connector, or the agent needs write access you
          are not comfortable giving it. Our{' '}
          <a href="/uk/ai-agents" className="text-[#B23E13] font-semibold underline">
            UK AI agent team
          </a>{' '}
          can review what you have built and tell you honestly whether to finish it yourself or get help with one
          piece.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          Talk to the Founder
        </a>
      </div>

      {/* Section: UK GDPR */}
      <h2 id="uk-gdpr" className="text-2xl md:text-3xl font-display font-bold text-gray-900 mt-12 mb-4">
        UK GDPR and data protection when you create an AI agent
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        If your agent reads or acts on information about people (customers, staff, suppliers who are sole traders),
        it is processing personal data, and UK GDPR and the Data Protection Act 2018 apply just as they do to your
        CRM. The Information Commissioner&apos;s Office publishes detailed{' '}
        <a
          href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="text-[#B23E13] underline"
        >
          guidance on AI and data protection
        </a>
        , covering lawfulness, transparency, fairness, accountability, DPIAs and solely automated decisions under
        Article 22. A plain checklist before launch:
      </p>
      <ol className="list-decimal pl-6 space-y-2 mb-6 text-gray-700 leading-relaxed">
        <li>
          <strong>Know your lawful basis</strong> for each use of personal data, and update your privacy notice so
          people know an AI system is involved.
        </li>
        <li>
          <strong>Sign a data processing agreement</strong> with your model provider and any builder platform, and
          check where they process and store data, and whether they keep it.
        </li>
        <li>
          <strong>Send the minimum.</strong> If the agent only needs an order number and postcode, do not send the
          whole customer record to the model.
        </li>
        <li>
          <strong>Consider a DPIA</strong> (data protection impact assessment), a written check of risks and how you
          reduce them. It is required where processing is likely to be high risk.
        </li>
        <li>
          <strong>Keep a person in the loop</strong> for decisions with legal or similarly significant effects on
          someone, such as refusing credit or a job application. Solely automated decisions like that have extra
          rules under UK GDPR.
        </li>
        <li>
          <strong>Log and secure it.</strong> Keep records of what the agent did, restrict who can change its
          instructions, and store API keys securely, not in a shared spreadsheet.
        </li>
      </ol>

      {/* Comparison table */}
      <h2 id="compare" className="text-2xl md:text-3xl font-display font-bold text-gray-900 mt-12 mb-4">
        No-code builder vs coding framework vs developer vs agency
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Four realistic ways to build AI agents, compared on what actually decides the outcome. None is right for
        everyone.
      </p>
      <div className="overflow-x-auto my-6 border border-gray-200 rounded-xl shadow-sm">
        <table className="min-w-full border-collapse bg-white text-sm">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="p-3.5 border-b text-left font-semibold">Factor</th>
              <th className="p-3.5 border-b text-left font-semibold">No-code builder (DIY)</th>
              <th className="p-3.5 border-b text-left font-semibold">Coding framework (DIY)</th>
              <th className="p-3.5 border-b text-left font-semibold">Freelance developer</th>
              <th className="p-3.5 border-b text-left font-semibold">Agency</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700">
            <tr>
              <td className="p-3.5 font-semibold text-gray-900">Skills you need</td>
              <td className="p-3.5">Clear process thinking, comfort with app settings</td>
              <td className="p-3.5">Python or TypeScript, APIs, testing</td>
              <td className="p-3.5">A clear brief and time to review their work</td>
              <td className="p-3.5">A clear brief and a named owner in your business</td>
            </tr>
            <tr>
              <td className="p-3.5 font-semibold text-gray-900">Speed to a first version</td>
              <td className="p-3.5">Fastest, often a day for a simple job</td>
              <td className="p-3.5">Days to weeks, depending on experience</td>
              <td className="p-3.5">Weeks, depending on their availability</td>
              <td className="p-3.5">Weeks, including discovery and testing</td>
            </tr>
            <tr>
              <td className="p-3.5 font-semibold text-gray-900">Control</td>
              <td className="p-3.5">Limited to what the tool allows</td>
              <td className="p-3.5">Full control over logic, permissions and hosting</td>
              <td className="p-3.5">Full, if the contract gives you the code</td>
              <td className="p-3.5">Full, if the contract gives you the code</td>
            </tr>
            <tr>
              <td className="p-3.5 font-semibold text-gray-900">Maintenance</td>
              <td className="p-3.5">You, plus the platform&apos;s updates</td>
              <td className="p-3.5">You, including model and API changes</td>
              <td className="p-3.5">Depends on one person staying available</td>
              <td className="p-3.5">A team on a support agreement</td>
            </tr>
            <tr>
              <td className="p-3.5 font-semibold text-gray-900">Best for</td>
              <td className="p-3.5">Common, low-risk jobs on popular apps</td>
              <td className="p-3.5">Teams with developer time and custom systems</td>
              <td className="p-3.5">One well-defined build on a tight scope</td>
              <td className="p-3.5">Agents that touch core systems or personal data</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-6 text-gray-700 leading-relaxed">
        If you are weighing the last two columns, our guide on{' '}
        <a href="/blog/how-to-hire-an-ai-agent-developer-2026" className="text-[#B23E13] font-semibold underline">
          how to hire an AI agent developer
        </a>{' '}
        covers the questions to ask and the red flags to watch for, so we will not repeat it here.
      </p>

      {/* Section: mistakes */}
      <h2 id="mistakes" className="text-2xl md:text-3xl font-display font-bold text-gray-900 mt-12 mb-4">
        Common mistakes when building AI agents
      </h2>
      <div className="bg-slate-50 rounded-lg p-5 mb-6">
        <ul className="space-y-3 text-sm md:text-base text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-[#B23E13] font-bold">&#10005;</span>
            <span><strong>Starting with a big, vague goal.</strong> &quot;An AI agent for customer service&quot; is a department, not a job. Start with one queue.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#B23E13] font-bold">&#10005;</span>
            <span><strong>Building a team of agents on day one.</strong> One agent with good tools beats five agents passing work around.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#B23E13] font-bold">&#10005;</span>
            <span><strong>Giving write access too early.</strong> Read first, draft second, act last, and only once tests pass.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#B23E13] font-bold">&#10005;</span>
            <span><strong>Testing on made-up examples.</strong> Real past cases expose the problems invented ones never will.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#B23E13] font-bold">&#10005;</span>
            <span><strong>No owner after launch.</strong> Someone has to read the logs, update the policy documents and rerun the tests.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#B23E13] font-bold">&#10005;</span>
            <span><strong>Leaving data protection until the end.</strong> Changing what data flows where is much harder after you have built around it.</span>
          </li>
        </ul>
      </div>

      {/* Section: signs to get help */}
      <h2 id="get-help" className="text-2xl md:text-3xl font-display font-bold text-gray-900 mt-12 mb-4">
        Signs it is time to get help building your AI agent
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Plenty of businesses build a useful AI agent themselves, and if yours is a simple, low-risk job, you should
        try. It is worth bringing in outside help when one or more of these is true:
      </p>
      <div className="bg-slate-50 rounded-lg p-5 mb-6">
        <ul className="space-y-2 text-sm md:text-base text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-[#B23E13] font-bold">&#10003;</span>
            <span>The agent must write to a core system: your Shopify or Magento store, ERP, accounts or warehouse system.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#B23E13] font-bold">&#10003;</span>
            <span>It handles personal, health or payment data, and you are not confident about the UK GDPR side.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#B23E13] font-bold">&#10003;</span>
            <span>You are spending more time working around the limits of a no-code tool than the agent saves.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#B23E13] font-bold">&#10003;</span>
            <span>The prototype works in a demo but you have no way to test it properly on real past cases.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#B23E13] font-bold">&#10003;</span>
            <span>Nobody in the business has the time or skills to own it after launch.</span>
          </li>
        </ul>
      </div>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Not sure which applies? An hour with an independent adviser often saves weeks. Our{' '}
        <a href="/uk/ai-consulting" className="text-[#B23E13] font-semibold underline">
          UK AI consulting
        </a>{' '}
        work starts exactly there: which jobs are worth automating, and whether you can build them yourself.
      </p>

      {/* Section: where FactoryJet fits */}
      <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mt-12 mb-4">
        Where FactoryJet fits
      </h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        We are one option among many, and for simple agents we will often tell you to build it yourself with one of
        the tools above. Where we help is the harder end: agents that connect to ecommerce platforms, CRMs, help
        desks and back-office systems, and need proper permissions, testing and support.
      </p>
      <p className="mb-4 text-gray-700 leading-relaxed">
        We design, build, integrate and support custom AI agents, and you own them: the code, the instructions, the
        configuration and the accounts sit with your business from day one. We stay on after launch on a monthly
        support agreement if you want us to, monitoring the agent, rerunning tests when models change and fixing
        integrations when a connected app updates. What we will not do is launch something and disappear.
      </p>
      <p className="mb-6 text-gray-700 leading-relaxed">
        FactoryJet was founded in 2014 and has worked with more than 500 businesses, most of them in commerce, from
        B2B wholesalers such as Bombay Petals to direct-to-consumer brands such as Belle Maison. If you want to know
        what an agent like this involves in practice, our guide to{' '}
        <a href="/blog/what-is-an-ai-agent-cost-2026" className="text-[#B23E13] font-semibold underline">
          what an AI agent costs
        </a>{' '}
        explains the cost drivers.
      </p>

      {/* Author box */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8">
        <p className="text-sm text-gray-700 leading-relaxed">
          <strong className="text-gray-900">About the author.</strong> Bhavesh Barot is the Founder &amp; CEO of
          FactoryJet. He has spent more than a decade building commerce systems and now leads the team that designs,
          builds and supports custom AI agents for UK, US and international businesses.
        </p>
      </div>

      {/* Further reading */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-10">
        <h3 className="text-lg font-bold text-gray-900 mb-3">Further reading on AI agents</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          <a href="/blog/ai-agent-build-vs-buy-2026" className="text-[#B23E13] hover:underline">Build vs. buy for AI agents: an honest framework</a>
          <a href="/blog/how-to-hire-an-ai-agent-developer-2026" className="text-[#B23E13] hover:underline">How to hire an AI agent developer</a>
          <a href="/blog/what-is-an-ai-agent-cost-2026" className="text-[#B23E13] hover:underline">What does an AI agent cost?</a>
          <a href="/uk/ai-agents" className="text-[#B23E13] hover:underline">AI agent development in the UK</a>
          <a href="/uk/ai-consulting" className="text-[#B23E13] hover:underline">AI consulting for UK businesses</a>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-[#FFF3EE] border-2 border-[#F05A28] rounded-2xl p-6 md:p-8 my-10">
        <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
          Built a prototype and want a second opinion?
        </h3>
        <p className="text-gray-700 max-w-2xl text-sm md:text-base leading-relaxed mb-6">
          Show us the job, the tools and what you have so far. We will tell you plainly whether to finish it
          yourself, get help with one piece, or have us design, build and support it, with you owning the result.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://calendly.com/bhavesh-factoryjet/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white font-bold text-sm md:text-base px-8 py-3.5 rounded-xl transition-colors"
          >
            Talk to the Founder
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 font-semibold text-sm md:text-base px-6 py-3.5 rounded-xl transition-colors"
          >
            Send project details
          </a>
        </div>
      </div>
    </>
  ),
};

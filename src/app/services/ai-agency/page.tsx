import type { Metadata } from 'next';
import Image from 'next/image';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import { aiAgencyAlternates } from '@/data/hreflangMap';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import BoringStatsRow from '@/components/v2/BoringStatsRow';
import CityContextSection from '@/components/v2/CityContextSection';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import PricingTiers from '@/components/v2/PricingTiers';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
   Primary: "ai agency" (60,500/mo) · "ai automation agency" (2,900)
   Secondary: "ai web developer" (1,900) · "ai chatbot development" (1,300)
   LSI: "custom ai development company" · "ai integration services" · "ai agent for business"
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Best AI Agency in USA for Small Business | Agents & Chatbots',
  description:
    'US AI agency building custom agents, automation workflows & chatbots for small businesses. fixed-price, milestone-paid. Talk to the founder.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Best AI Agency in USA for Small Business | FactoryJet',
    description:
      'Custom AI agents, automation, and chatbots for US small businesses. fixed-price, milestone-paid. Talk to the founder.',
    url: 'https://factoryjet.com/services/ai-agency',
    images: [
      {
        url: 'https://factoryjet.com/images/us/services/ai-agency/og-ai-agency.jpg',
        width: 1200,
        height: 630,
        alt: 'FactoryJet — AI Agency for US Small Business',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agency USA | AI Agents, Automation & Chatbots | FactoryJet',
    description:
      'Custom AI agents and automation for US small businesses. fixed-price, milestone-paid. Fixed price. Talk to the founder.',
    images: ['https://factoryjet.com/images/us/services/ai-agency/og-ai-agency.jpg'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ai-agency',
    languages: aiAgencyAlternates,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD Schemas — FAQPage · Service · BreadcrumbList
───────────────────────────────────────────────────────────────────────────── */

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does an AI agency actually do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI agency researches, designs, builds, and deploys artificial intelligence systems for businesses. That means custom AI agents that handle customer service, sales, and operations automatically; automation workflows that move data between your tools without manual work; chatbots trained specifically on your business content; and AI integrations that add intelligence to software you already use. The difference from a general software agency is specialization — everything an AI agency builds is designed around AI as the core technology, not added as a feature afterward.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is an AI agency different from a regular software development company?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A software development company can build you a database-driven application. An AI agency builds systems that learn, reason, and make decisions. The engineering skills overlap, but the tooling — LLM orchestration, prompt engineering, RAG pipelines, agent architecture, vector databases — is completely different. At FactoryJet, our engineers work exclusively with AI development stacks: LangChain, LangGraph, CrewAI, Claude, GPT-4o, n8n, and Make.com. A generalist software shop can add an AI feature. We build AI systems.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need an AI agency, or can I just use ChatGPT directly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ChatGPT and Copilot are tools for individuals doing tasks manually. They\'re powerful for writing, research, and summarizing. But they don\'t connect to your CRM, they don\'t process your invoices automatically, and they don\'t qualify your inbound leads while you\'re sleeping. An AI agency builds the plumbing: the custom system that connects AI models to your specific data, tools, and workflows, and runs automatically without someone typing prompts. If you want a tool your team uses manually, ChatGPT works. If you want AI doing the work automatically, that requires a custom build.',
      },
    },
    {
      '@type': 'Question',
      name: 'My business isn\'t tech. Can an AI agency still help me?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Non-tech businesses are often where AI creates the most impact. Law firms, dental practices, retail brands, construction companies, restaurants, real estate teams — they all have high-volume repetitive workflows AI handles well. The technology is the same regardless of industry; the workflow logic and integrations are different. Some of our most impactful deployments have been for completely non-technical businesses: a dental practice that cut no-shows 40% with AI-automated reminders, a law firm that reduced document review time by 60%, a landscaping company that automated its estimate follow-up sequence and closed 30% more jobs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What\'s the difference between an AI agency, an AI automation company, and an AI consultant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI consultant diagnoses problems and recommends strategies but typically doesn\'t build anything. An AI automation company focuses on workflow automation — usually no-code tools like Zapier, n8n, or Make.com — connecting existing software. An AI agency designs and builds custom AI systems: agents, chatbots, integrations, and AI-native software from scratch. FactoryJet operates across all three depending on what you need: we\'ll tell you what to build (strategy), automate with no-code tools where that\'s the right call (automation), and build custom AI when the use case demands it.',
      },
    },
    {
      '@type': 'Question',
      name: 'What AI services does FactoryJet offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Six core areas: AI Agents (autonomous systems that handle customer service, sales, operations, and data workflows), AI Automation (connecting your tools with n8n and Make.com so data flows without manual work), AI Chatbot Development (conversational AI for your website, app, or phone line), AI Integration Services (adding AI capabilities to software you already use), AI Workflow Automation (internal process automation that removes manual steps from your team\'s day), and AI-Native Software (new applications built with AI at the architecture level, not bolted on). Most clients start with one service area and expand.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you build a custom AI chatbot for my website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — this is one of our most common projects. We build AI chatbots trained specifically on your product catalog, FAQs, pricing, and policies. The chatbot handles common questions, qualifies leads, routes conversations to the right team member, and integrates with your CRM so every interaction is logged. Unlike off-the-shelf chatbot tools, a custom-built chatbot understands your business specifically — it answers with your pricing, your policies, your service area, not generic filler responses.',
      },
    },
    {
      '@type': 'Question',
      name: 'What\'s the difference between AI agents and AI automation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Automation connects tools and runs fixed workflows — if X happens, do Y. It\'s deterministic and rule-based. An AI agent makes decisions within a workflow — it reads context, chooses from multiple possible actions, and handles variations it hasn\'t seen before. Automation is ideal for predictable, repeatable processes. AI agents work better for tasks requiring judgment — responding to a customer complaint, qualifying a lead, or processing a document that doesn\'t follow a standard format. In practice, most production AI systems combine both: automation as the backbone and AI agents handling the decision-heavy steps.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you add AI features to my existing website or app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and this is often the fastest path to ROI. Common additions include AI search (semantic search that understands intent, not just keywords), document summarization (paste a contract, get a plain-English summary), AI chat support (a chatbot trained on your content living on your site), recommendation engines (suggest related products or content), and AI content pipelines (automated first drafts of blog posts, product descriptions, or reports). We work with your existing tech stack and build native integrations directly into your codebase.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you do AI marketing — like AI-generated content or email sequences?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We don\'t run marketing campaigns. What we build is the AI infrastructure that makes marketing workflows run automatically: email sequences triggered by user behavior, AI-generated first drafts reviewed and approved by your team, AI tools that analyze customer data and surface segment insights, and chatbots that convert site visitors into qualified leads automatically. If you want an agency to manage your marketing campaigns, that\'s a different type of company. If you want the AI systems that make your marketing team 3× more productive, that\'s what we build.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the process work when I hire FactoryJet as my AI agency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We start with a free 30-minute strategy call where we map your workflow and identify your highest-value automation opportunity. If we proceed, we move into Discovery (a paid kickoff session that documents the full workflow, data sources, and integration requirements). From there: Architect (technical spec you approve before development), Build (weekly working demos so you see progress), Train & Test (prompt tuning and edge-case testing against real scenarios), and Deploy (launch, handover, and 30-day support window). You have a clear deliverable and a fixed price before any development begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does an AI project take from start to finish?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Focused single-workflow projects — a lead qualifier, a support chatbot, an invoice processor — go from kickoff to production in 2 to 3 weeks. Multi-workflow platforms with CRM integrations and management dashboards run 4 to 6 weeks. Enterprise systems with multiple interconnected agents and compliance requirements run 8 to 12 weeks. We give you a firm timeline after discovery, not before, because scope drives everything and we won\'t give you a number we\'ll have to revise a week later.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do I need to have ready before we can start?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Very little. We don\'t need a technical spec or a detailed brief. We need to understand three things: which repetitive task costs your team the most time or causes the most errors; which tools you currently use (CRM, email, helpdesk, accounting software); and what success looks like — fewer support tickets, faster lead response, or less manual data entry. We handle the technical translation from there. Most clients walk into the first call with a rough idea and leave with a clear, scoped project.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will I see the AI working before it goes live, or only at the end?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Weekly demos throughout — no exceptions. After every stage of development, we show you the system working with real data in real scenarios. You give feedback, we adjust before moving forward. "Show me when it\'s done" projects always produce a result that doesn\'t quite match the mental model the client had. Weekly demos close that gap continuously. Most clients also expand the agent\'s scope once they see what it can do — it surfaces adjacent tasks they hadn\'t originally thought to include.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I want to change direction mid-project?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Small adjustments within the agreed scope are handled at no extra cost — that\'s a normal part of building something new. If you want to meaningfully change the project scope — add new workflows, switch platforms, change the core use case — we scope the change separately, agree on the additional work and cost in writing, and continue. We don\'t penalize you for evolving your thinking, and we don\'t silently absorb unlimited scope changes and then surprise you with a bigger invoice at the end.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to hire an AI agency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet\'s AI projects are fixed-price and scoped to your build — the main drivers are how many workflows you automate, the integrations involved, and model usage. Most small businesses land at our Growth tier, covering multiple interconnected workflows, CRM integrations, a management dashboard, and a 30-day support window. Enterprise AI agencies charge several times more for equivalent scope. We deliver at fixed-price because our team structure is leaner, not because we cut corners on engineering quality. Every project is quoted up front after a free discovery call, so you know the full cost before work starts.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does FactoryJet keep AI development pricing fixed and predictable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We work fixed-price and milestone-paid — every AI project is scoped upfront with no hourly billing and no scope-creep invoices. Our 25-year track record serving US businesses means we estimate accurately on the first call, so the quote you sign is what you pay. You get a senior-only team — no account-management layers — delivering production-grade architecture, code review, and delivery, with full code ownership at handoff.',
      },
    },
    {
      '@type': 'Question',
      name: 'What ROI can I realistically expect from hiring an AI agency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The math usually works like this: a customer support AI that handles 70% of your tickets saves 8 to 15 staff hours per week — and the agent works nights, weekends, and peak periods without overtime. A sales AI that responds to every inbound lead within 60 seconds typically increases close rates by 20 to 35%, since response speed is the single biggest driver of lead conversion. Most clients recover their full investment within 3 to 6 months.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there ongoing fees after the AI is built?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Two types. First, API usage costs — the fees paid directly to model providers like Anthropic (Claude) or OpenAI (GPT-4o), which scale with your usage volume. We don\'t mark these up — they go straight to the provider. Second, if you want ongoing optimization or new feature development, we offer optional monthly retainers. The retainer is optional; many clients self-manage after handover because the management dashboard is built for non-technical operators.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is FactoryJet\'s pricing fixed or hourly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fixed. Always. We quote a scope, agree a price, and the invoice matches the quote. No hourly billing, no scope creep invoices, no "we underestimated and need more budget." Fixed pricing is possible because we\'ve built enough AI systems to estimate accurately, and because we\'re disciplined about scoping in detail before we commit to a number. If the scope changes materially, we agree the new scope and price in writing first — you never get a surprise invoice.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is my business data safe working with an AI agency overseas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We use API-level integrations exclusively — we never store your business data on our servers. AI models process data in transit and respond; the results return to your systems. We enforce least-privilege access (the system only touches what it needs), implement full audit trails on every action the AI takes, and sign an NDA before any technical discovery begins. For healthcare, legal, and finance clients, we can deploy private LLM configurations where your data never leaves your own infrastructure. Most clients in regulated industries find our privacy architecture more rigorous than their previous vendor\'s.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if the AI system doesn\'t perform the way we expected?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The 30-day post-launch support window exists specifically for this. Real-world usage always reveals edge cases that testing doesn\'t catch. During those 30 days, we tune the agent\'s behavior based on live usage data, adjust prompts and guardrails, and fix anything that performs unexpectedly. We also build confidence thresholds into every agent — if the AI isn\'t sure what to do, it escalates to a human rather than guessing. The goal is a system that handles 70 to 80% of cases automatically and surfaces the rest for human review, not one that makes random decisions on unfamiliar inputs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I own the AI system after it\'s built, or is there a licensing fee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Full ownership. No licensing fee. On launch day you receive the complete codebase in a GitHub repository, all API keys transferred to your accounts, all documentation, and a recorded management dashboard walkthrough. You can take it to another developer, self-manage it, or shut it down — with no exit fees and no proprietary platform holding your data hostage. We deliver an asset, not a dependency.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you compare to using a freelance AI developer from Upwork?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A good Upwork AI freelancer bills a steep hourly rate, and a serious AI project runs hundreds of hours — with no delivery guarantee, no project management, and no support window. The bigger risk is handover: when the freelancer finishes, there\'s often minimal documentation, the code isn\'t structured for long-term maintenance, and if something breaks three months later you\'re back on Upwork looking for someone to read someone else\'s code. FactoryJet delivers a documented, tested, maintainable system with a 30-day support window and a team that can actually answer the phone when something goes wrong.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long has FactoryJet been building AI systems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We\'ve been building software for small businesses — 12+ years. Our AI practice started in 2019 with our first production LLM integrations, before ChatGPT made AI mainstream. Since then we\'ve delivered AI systems for e-commerce brands, law firms, healthcare practices, SaaS companies, real estate teams, and professional services firms across the US. The 500+ projects in our portfolio span over a decade of software delivery. AI is where we spend all our time now, but the project discipline, SMB domain knowledge, and quality standards come from 12 years of building real things for real businesses.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who is the best AI agency in USA for small business?',
      acceptedAnswer: { '@type': 'Answer', text: 'For SMBs that want production AI without enterprise consulting overhead, FactoryJet makes a strong case: fixed-price, milestone-paid projects, senior engineers on every build, and 500+ SMB projects of delivery discipline behind the AI practice. But the best AI development company in USA for you depends on what you are automating — the best AI automation agency in USA for a support-ticket workflow is not automatically right for a custom sales agent. Whoever you evaluate, apply three filters: do engineers (not salespeople) scope the project, is pricing fixed before work starts, and do you own the code and data from day one?' },
    },
    {
      '@type': 'Question',
      name: 'What are the top 10 AI automation agencies in USA?',
      acceptedAnswer: { '@type': 'Answer', text: 'Published lists of the top 10 AI automation agencies in USA mix big consultancies with specialist studios, and they age fast — the field is moving quarterly. FactoryJet competes in that set for small and mid-market businesses: custom agents, chatbots, and workflow automation with public pricing and no retainers required. Use any top-10 list as a shortlist, then compare three things the lists rarely show: who actually builds (senior engineer vs offshore pool), fixed-price vs hourly billing, and whether you keep the code if you leave.' },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Agency Services',
  provider: {
    '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
    foundingDate: '2014',
    numberOfEmployees: { '@type': 'QuantitativeValue', value: 25 },
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType: 'AI Agency',
  description:
    'FactoryJet is a US AI agency building custom AI agents, automation workflows, AI chatbots, and AI-native software for US small businesses. fixed-price, milestone-paid. Fixed pricing, full code ownership.',
  offers: [
    { '@type': 'Offer', name: 'Starter AI Build', description: 'Single-workflow AI agent or automation for one focused business problem.' },
    { '@type': 'Offer', name: 'Growth AI Platform', description: 'Multi-workflow AI platform with CRM integrations and management dashboard.' },
    { '@type': 'Offer', name: 'Enterprise AI System', description: 'Full multi-agent AI system with custom LLM fine-tuning and private deployment.' },
  ],
  
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet builds your AI solution in 7 days',
  description: 'Our 7-day process for delivering production-ready AI agents and automation for businesses.',
  totalTime: 'P7D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Day 1 — Discovery & Use-Case Mapping',
      text: 'We audit your workflows, identify the highest-ROI automation opportunities, and define the exact scope of your AI solution.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Day 2 — Architecture & Data Planning',
      text: 'We design the AI architecture, select the right models and APIs, and map your data sources and integration points.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Days 3–4 — Build & Integrate',
      text: 'We build your AI agents or automation workflows and integrate them with your existing tools, CRM, and business systems.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Days 5–6 — Testing & Optimization',
      text: 'We run comprehensive testing across edge cases, optimize for accuracy and latency, and add monitoring and alerting.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Day 7 — Launch & Training',
      text: 'Your AI solution goes live. We train your team, provide documentation, and offer 30-day post-launch support.',
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://factoryjet.com/services' },
    { '@type': 'ListItem', position: 3, name: 'AI Agency', item: 'https://factoryjet.com/services/ai-agency' },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section Data
───────────────────────────────────────────────────────────────────────────── */

const AI_SERVICES: Array<{
  name: string;
  description: string;
  example: string;
  linkLabel?: string;
  linkHref?: string;
}> = [
  {
    name: 'AI Agents',
    description:
      'Autonomous systems that connect to your tools, make decisions, and complete multi-step tasks without human involvement. Customer service, sales qualification, operations, data analytics, voice, and document processing — all handled automatically, around the clock.',
    example: 'One e-commerce client handles 3,200 support interactions per month without a single human touch.',
    linkLabel: 'See AI Agent development',
    linkHref: '/services/ai-agents',
  },
  {
    name: 'AI Automation',
    description:
      'Workflow automation using n8n, Make.com, and Zapier — connecting your existing platforms so data moves automatically between them. No more copy-pasting between systems. No more "can someone update the spreadsheet?" conversations.',
    example: 'Clients report 40–65% reduction in manual data entry time within 30 days of deployment.',
    linkLabel: 'See AI Automation',
    linkHref: '/services/ai-automation',
  },
  {
    name: 'AI Chatbot Development',
    description:
      'Conversational AI built specifically on your business content — your products, pricing, policies, and FAQs. Handles common questions, qualifies leads, books appointments, routes complex issues to humans, and logs every interaction to your CRM.',
    example: '72% of routine customer questions handled automatically in the first 30 days — typical result.',
    linkLabel: 'See AI Chatbot development',
    linkHref: '/services/ai-chatbot-development',
  },
  {
    name: 'AI Integration Services',
    description:
      'Adding AI capabilities to software you already use — your CRM, e-commerce platform, ERP, or internal tools. Intelligent search, auto-summarization, smart routing, and decision-support layers built into workflows your team uses every day.',
    example: 'Most integrations go live in 1–3 weeks without rebuilding existing systems.',
    linkLabel: 'See AI Integration',
    linkHref: '/services/ai-integration-services',
  },
  {
    name: 'AI Workflow Automation',
    description:
      'End-to-end automation of internal business processes — invoice approval flows, employee onboarding sequences, inter-department data handoffs, and recurring reporting tasks. Eliminates the hidden coordination tax your team pays every day without naming it.',
    example: 'Teams consistently report reclaiming 8–12 hours per week of senior staff time.',
    linkLabel: 'See AI Workflow Automation',
    linkHref: '/services/ai-workflow-automation',
  },
  {
    name: 'AI-Native Software',
    description:
      'New web applications, internal tools, and client-facing products built AI-first from the ground up — with LLM capabilities at the architecture level, not bolted on as an afterthought. Built on Next.js 15 with Claude or GPT-4o as the intelligence layer.',
    example: 'Full AI-native platforms delivered in 4–8 weeks from discovery to production launch.',
    linkLabel: 'See Web App Development',
    linkHref: '/services/web-application-development',
  },
];

const INDUSTRIES_SERVED = [
  {
    name: 'E-Commerce & Retail',
    description:
      'AI agents that handle inventory alerts, automate customer support, process returns, write product descriptions, and optimize reorder cycles. One Shopify client cut support ticket volume 74% in 45 days — their team now focuses on growth, not repetitive queries.',
    example: '74% support ticket reduction in 45 days — actual client result.',
  },
  {
    name: 'Healthcare & Wellness',
    description:
      'HIPAA-aware AI for patient intake, appointment scheduling, follow-up reminders, and document extraction from medical records. Built with privacy-first architecture, full audit trails, and escalation logic for anything requiring clinical judgment.',
    example: 'Reduces front-desk admin time by 4–5 hours per provider per week.',
  },
  {
    name: 'Legal & Professional Services',
    description:
      'Document review agents that extract key clauses from contracts, flag risk terms, classify filings, and maintain audit-ready logs. Automated client reporting and proposal drafting for consulting and accounting firms. Reduces paralegal hours on high-volume document workflows.',
    example: 'Processes 100+ contracts per hour vs. 3–4 reviewed manually.',
  },
  {
    name: 'Real Estate',
    description:
      'AI that qualifies inbound leads from Zillow and Realtor.com, sends personalized follow-up sequences within 60 seconds, writes listing descriptions, and books showings directly to your calendar. Agents report more qualified showings with the same team size.',
    example: '40% more qualified showings booked per month — no new hires.',
  },
  {
    name: 'SaaS & Technology',
    description:
      'AI for onboarding automation, churn signal detection, in-app support deflection, and intelligent feature usage nudges. Connected to your product database and CRM so the AI knows who each user is, what they\'ve done, and what they need next.',
    example: 'SaaS clients report 22% improvement in 90-day user retention.',
  },
  {
    name: 'Financial Services',
    description:
      'AI for loan pre-qualification, insurance claim intake, document extraction from financial statements, automated client reporting, and compliance-aware workflow routing. Private LLM deployment available for firms with strict data residency requirements.',
    example: 'Financial clients eliminate 30+ hours/week of manual data entry and report generation.',
  },
];

const JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Strategy Call',
    description:
      'A 30-minute call where we map your highest-value automation opportunity, estimate the ROI, and tell you what it would cost to build. No pitch. No obligation. Most clients leave the call with a clear picture of where to start even if they don\'t hire us.',
  },
  {
    number: '02',
    title: 'Discovery & Scoping',
    description:
      'A paid kickoff session that documents the full workflow: data sources, integration points, decision logic, edge cases, and escalation rules. You approve a fixed-price proposal before any engineering starts. No development begins without your sign-off.',
  },
  {
    number: '03',
    title: 'Architecture & Technical Spec',
    description:
      'We design the AI system in detail — agent logic, LLM selection, orchestration framework, integration points, guardrails, and confidence thresholds. You review and approve the technical blueprint before the first line of code is written.',
  },
  {
    number: '04',
    title: 'Build, Test & Tune',
    description:
      'Engineering against your stack with weekly working demos. We connect the AI to your tools via API, run the system against real business scenarios, tune prompts and guardrails, and stress-test edge cases until it performs reliably in production conditions.',
  },
  {
    number: '05',
    title: 'Deploy, Handover & Support',
    description:
      'Launch with monitoring, a full action log, and a recorded handover session. All code and API keys transfer to your accounts on day one. The 30-day post-launch support window covers behavior tuning, bug fixes, and team training questions.',
  },
];

const ROI_STATS = [
  {
    value: '68%',
    label: 'average reduction in manual task time',
    microcopy: 'across FactoryJet AI deployments 2023–2025',
    categoryLabel: 'TASK AUTOMATION',
  },
  {
    value: '< 60s',
    label: 'lead response time with a sales AI agent',
    microcopy: 'vs. hours with human-only follow-up workflows',
    categoryLabel: 'RESPONSE SPEED',
  },
  {
    value: '3–6mo',
    label: 'typical time to full ROI payback',
    microcopy: 'based on client-reported data across 500+ projects',
    categoryLabel: 'PAYBACK PERIOD',
  },
];

const US_AI_STATS = [
  {
    value: '96%',
    label: 'of enterprises plan to expand AI agent adoption in the next 12 months',
    sourceUrl: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai',
    sourceLabel: 'McKinsey State of AI 2025',
  },
  {
    value: '78%',
    label: 'of customers buy from the first business that responds to their inquiry',
    sourceUrl: 'https://leadresponsemanagement.org/lead-response-management',
    sourceLabel: 'Lead Response Management Study',
  },
  {
    value: '$1T+',
    label: 'in value AI is projected to add to US business productivity by 2030',
    sourceUrl: 'https://www.mckinsey.com/mgi',
    sourceLabel: 'McKinsey Global Institute',
  },
];

const COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'US AI Agency' },
  { label: 'AI Freelancer' },
  { label: 'DIY Tools' },
] as const;

const COMPARISON_ROWS = [
  {
    feature: 'Pricing model',
    values: ['Fixed-price, scoped upfront', 'Enterprise budgets', 'Hourly, variable', 'DIY tool subscriptions'],
  },
  {
    feature: 'Time to first production system',
    values: ['2–3 weeks', '3–6 months', '4–8 weeks (unreliable)', 'Ongoing — never "done"'],
  },
  {
    feature: 'Fixed-price contract',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="diy" kind="yes" />,
    ],
  },
  {
    feature: 'Custom to your workflows',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'CRM & tool integrations',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="yes" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="diy" kind="partial" />,
    ],
  },
  {
    feature: 'Non-technical management dashboard',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="diy" kind="partial" />,
    ],
  },
  {
    feature: 'Full code ownership — no lock-in',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="fl" kind="yes" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: '30-day post-launch support',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: '12+ years SMB domain experience',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="us" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
];

const PRICING_TIERS = [
  {
    name: 'Starter',
    priceRange: 'Scoped to your build',
    description:
      'One focused AI build that solves your highest-impact manual task. Best for businesses automating a single workflow for the first time — and proving the ROI before going broader.',
    features: [
      'Single-workflow AI agent, chatbot, or automation',
      'One primary use case — customer service, sales, ops, or document processing',
      'Connects to 1–2 existing business tools via API',
      'Simple management interface — no code required to operate',
      'Claude or GPT-4o as the underlying model',
      'QA and prompt tuning included',
      '14-day post-launch support window',
    ],
    cta: { label: 'Talk to the Founder', modal: true, region: 'us' },
  },
  {
    name: 'Growth',
    priceRange: 'Most common scope',
    description:
      'A multi-workflow AI platform with deeper integrations and a management dashboard. The most common starting point for growing US SMBs who want AI running across more than one business function.',
    features: [
      '2–3 interconnected AI agents or automations',
      'Full CRM, e-commerce, or ERP integration',
      'Custom management dashboard with full action logs',
      'Voice AI option — AI that handles inbound phone calls',
      'Prompt fine-tuning and multi-agent orchestration',
      'Team training session + documentation',
      '30-day post-launch support window',
      'Monthly retainer option for ongoing optimization',
    ],
    cta: { label: 'Get a Custom Quote', modal: true, region: 'us' },
    popular: true,
  },
  {
    name: 'Enterprise',
    priceRange: 'Custom scope',
    description:
      'A full multi-agent AI system with custom LLM fine-tuning, private deployment options, and a dedicated engineering partner. For businesses ready to build AI into their operating infrastructure.',
    features: [
      'Agent workflows & integrations scoped per project brief',
      'Custom LLM fine-tuning on your proprietary data',
      'Private cloud or on-premise deployment option',
      'Multi-department rollout with change management support',
      'Dedicated engineering point of contact',
      'SLA-backed uptime and incident response',
      '90-day post-launch support and iteration window',
      'Quarterly AI strategy and roadmap review',
    ],
    cta: { label: 'Schedule an Enterprise Call', modal: true, region: 'us' },
  },
] as const;

/* ─── FAQ Categories ─────────────────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'what-is-ai-agency', label: 'What Is an AI Agency' },
  { key: 'our-services',      label: 'Our AI Services' },
  { key: 'process',           label: 'Process & Timeline' },
  { key: 'pricing',           label: 'Pricing & ROI' },
  { key: 'trust',             label: 'Trust & Security' },
];

/* ─── 25 FAQ items — natural conversation style, AEO-optimized ──────────── */
const FAQ_ITEMS = [

  /* ── What Is an AI Agency ── */
  {
    category: 'what-is-ai-agency',
    question: 'What does an AI agency actually do?',
    answer:
      'An AI agency researches, designs, builds, and deploys artificial intelligence systems for businesses. That means custom AI agents that handle customer service, sales, and operations automatically; automation workflows that move data between your tools without manual work; chatbots trained specifically on your business content; and AI integrations that add intelligence to software you already use. The key difference from a general software agency: everything an AI agency builds is designed around AI as the core technology, not bolted on afterward.',
  },
  {
    category: 'what-is-ai-agency',
    question: 'How is an AI agency different from a regular software development company?',
    answer:
      'A software development company builds database-driven applications. An AI agency builds systems that learn, reason, and make decisions. The engineering skills overlap, but the tooling — LLM orchestration, prompt engineering, RAG pipelines, agent architecture, vector databases — is completely different. At FactoryJet, our engineers work exclusively with AI stacks: LangChain, LangGraph, CrewAI, Claude, GPT-4o, n8n, and Make.com. A generalist shop adds AI as a feature. We build AI systems from the ground up.',
  },
  {
    category: 'what-is-ai-agency',
    question: 'Do I need an AI agency, or can I just use ChatGPT directly?',
    answer:
      'ChatGPT and Copilot are tools for individuals doing tasks manually. They\'re useful for writing, research, and summarizing — but they don\'t connect to your CRM, they don\'t process invoices automatically, and they don\'t qualify inbound leads while you sleep. An AI agency builds the plumbing: the custom system that connects AI models to your specific data, tools, and workflows and runs automatically without someone typing prompts. If you want a manual tool, ChatGPT works. If you want AI doing the work automatically, that\'s a custom build.',
  },
  {
    category: 'what-is-ai-agency',
    question: 'My business isn\'t tech. Can an AI agency still help me?',
    answer:
      'Non-tech businesses are often where AI creates the biggest impact. Law firms, dental practices, retail brands, construction companies, restaurants, real estate teams — they all have high-volume repetitive workflows AI handles well. Some of our most impactful deployments have been for completely non-technical businesses: a dental practice that cut no-shows 40% with AI-automated reminders, a law firm that reduced document review time by 60%, a landscaping company that closed 30% more jobs by automating its estimate follow-up sequence.',
  },
  {
    category: 'what-is-ai-agency',
    question: 'What\'s the difference between an AI agency, an AI automation company, and an AI consultant?',
    answer:
      'An AI consultant diagnoses problems and recommends strategies but typically doesn\'t build anything. An AI automation company focuses on no-code workflow tools like Zapier or n8n — connecting existing software. An AI agency designs and builds custom AI systems: agents, chatbots, integrations, and AI-native software. FactoryJet operates across all three modes depending on what you actually need: strategy, no-code automation, or custom AI development. We\'ll tell you honestly which approach fits your situation — sometimes the simpler solution is the right one.',
  },

  /* ── Our AI Services ── */
  {
    category: 'our-services',
    question: 'What AI services does FactoryJet offer?',
    answer:
      'Six core areas: AI Agents (autonomous systems that handle customer service, sales, and operations), AI Automation (connecting your tools via n8n and Make.com so data flows without manual work), AI Chatbot Development (conversational AI for your website, app, or phone line), AI Integration Services (adding AI capabilities to software you already use), AI Workflow Automation (internal process automation that removes manual steps from your team\'s day), and AI-Native Software (new applications built AI-first from the ground up). Most clients start with one area and expand once they see the ROI.',
  },
  {
    category: 'our-services',
    question: 'Can you build a custom AI chatbot for my website?',
    answer:
      'Yes — one of our most common projects. We build AI chatbots trained specifically on your product catalog, FAQs, pricing, and policies. The chatbot handles common questions, qualifies leads, routes conversations to the right team member, and integrates with your CRM so every interaction is logged. Unlike off-the-shelf chatbot tools, a custom-built chatbot knows your specific offerings, pricing, and procedures — not generic filler answers that frustrate customers.',
  },
  {
    category: 'our-services',
    question: 'What\'s the difference between AI agents and AI automation?',
    answer:
      'Automation connects tools and runs fixed workflows — if X happens, do Y. It\'s deterministic and rule-based. An AI agent makes decisions within a workflow — it reads context, chooses from multiple actions, and handles situations it hasn\'t seen before. Automation is ideal for predictable, repeatable processes. AI agents work better for tasks requiring judgment — responding to a nuanced customer complaint, qualifying a lead, processing a document that doesn\'t follow a standard format. Most production AI systems we build use both: automation for the backbone, AI agents for the decision-heavy steps.',
  },
  {
    category: 'our-services',
    question: 'Can you add AI features to my existing website or app?',
    answer:
      'Yes, and this is often the fastest path to ROI. Common additions: AI search (semantic search that understands intent, not just keywords), document summarization (paste a contract, get a plain-English summary), AI chat support (a chatbot trained on your content), recommendation engines (suggest related products or content based on behavior), and AI content pipelines (automated first drafts of blog posts or product descriptions). We work with your existing tech stack and build native integrations directly in your codebase.',
  },
  {
    category: 'our-services',
    question: 'Do you do AI marketing — like AI-generated content or automated email sequences?',
    answer:
      'We don\'t run marketing campaigns. We build the AI infrastructure that makes marketing workflows run automatically: email sequences triggered by user behavior without manual scheduling, AI-generated first drafts reviewed and approved by your team, tools that analyze your customer data and surface segment insights, and chatbots that qualify leads from your site automatically. If you want an agency managing your campaigns, that\'s a different type of company. If you want the AI systems that make your marketing team dramatically more productive, that\'s what we build.',
  },

  /* ── Process & Timeline ── */
  {
    category: 'process',
    question: 'How does the process work when I hire FactoryJet as my AI agency?',
    answer:
      'We start with a free 30-minute strategy call to map your workflow and identify your highest-value opportunity. If we proceed, Discovery documents the full workflow, data sources, and integration requirements — and produces the fixed-price proposal you approve before any engineering starts. From there: Architecture (technical spec), Build (weekly working demos), Train & Test (prompt tuning and edge-case testing with real data), and Deploy (launch, full handover, 30-day support). No development begins without your sign-off, and the price you see in the proposal is the price on the invoice.',
  },
  {
    category: 'process',
    question: 'How long does an AI project take from start to finish?',
    answer:
      'Single-workflow projects — a lead qualifier, a support chatbot, an invoice processor — go from kickoff to production in 2 to 3 weeks. Multi-workflow platforms with CRM integrations and dashboards run 4 to 6 weeks. Enterprise systems with multiple interconnected agents and compliance requirements run 8 to 12 weeks. We give you a firm timeline after discovery — not before — because scope drives everything and we won\'t give you a number we\'ll have to revise a week later.',
  },
  {
    category: 'process',
    question: 'What do I need to have ready before we can start?',
    answer:
      'Very little. We don\'t need a technical spec. We need three things: which repetitive task costs your team the most time or causes the most errors; which tools you currently use (CRM, email, helpdesk, accounting software); and what "success" means to you — fewer tickets, faster lead response, or less manual data entry. We handle the technical translation. Most clients walk into the first call with a rough idea and leave with a clear, scoped project plan.',
  },
  {
    category: 'process',
    question: 'Will I see the AI working before it goes live, or only at the end?',
    answer:
      'Weekly demos throughout — this is a firm commitment. After every development stage, you see the system working with real data in real scenarios. You give feedback; we adjust before moving forward. "Show me when it\'s done" projects always produce a result that doesn\'t match the client\'s mental model. Weekly demos close that gap continuously. Most clients also expand scope during the build — they see what\'s possible and identify adjacent tasks they hadn\'t originally thought to automate.',
  },
  {
    category: 'process',
    question: 'What if I want to change direction mid-project?',
    answer:
      'Small adjustments within agreed scope are handled at no extra cost — normal part of building something new. Meaningful scope changes (add new workflows, switch platforms, change the core use case) get scoped separately, agreed in writing, and then built. We don\'t penalize you for evolving your thinking. We also don\'t silently absorb unlimited scope changes and then surprise you with an overage invoice at the end. Everything material goes through a formal change agreement.',
  },

  /* ── Pricing & ROI ── */
  {
    category: 'pricing',
    question: 'How much does it cost to hire an AI agency?',
    answer:
      'FactoryJet\'s AI projects are fixed-price and scoped to your build — the main drivers are how many workflows you automate, the integrations involved, and model usage. Most small businesses land at our Growth tier, covering multiple interconnected workflows, CRM integrations, a management dashboard, and a 30-day support window. Enterprise AI agencies charge several times more for equivalent scope. We deliver at fixed-price because our team structure is leaner, not because we cut corners on engineering quality. Every project is quoted up front after a free discovery call, so you know the full cost before work starts.',
  },
  {
    category: 'pricing',
    question: 'How does FactoryJet keep AI development pricing fixed and predictable?',
    answer:
      'We work fixed-price and milestone-paid — every AI project is scoped upfront with no hourly billing and no scope-creep invoices. 12 years serving US businesses means we estimate accurately on the first call, so the quote you sign is what you pay. You get experienced engineers in a lean structure — no account-management or sales layers — delivering production-grade architecture, code review, and handover, with full code ownership at handoff.',
  },
  {
    category: 'pricing',
    question: 'What ROI can I realistically expect from hiring an AI agency?',
    answer:
      'The math usually works like this: a customer support AI that handles 70% of your tickets saves 8 to 15 staff hours per week — and the agent works nights, weekends, and peak periods without overtime. A sales AI that responds to every inbound lead within 60 seconds typically increases close rates by 20 to 35%, since response speed is the single biggest driver of lead conversion. Most clients recover their full investment within 3 to 6 months.',
  },
  {
    category: 'pricing',
    question: 'Are there ongoing fees after the AI is built?',
    answer:
      'Two types. First, API usage costs — the fees paid directly to model providers like Anthropic (Claude) or OpenAI (GPT-4o), which scale with your usage volume. We don\'t mark these up — they go straight to the provider. Second, if you want ongoing optimization or new feature development, we offer optional monthly retainers. Many clients self-manage after handover because the management dashboard is designed for non-technical operators. We\'ll tell you honestly when a retainer isn\'t needed for your use case.',
  },
  {
    category: 'pricing',
    question: 'Is FactoryJet\'s pricing fixed or hourly?',
    answer:
      'Fixed. Always. We quote a scope, agree a price, and the invoice matches the quote. No hourly billing, no scope-creep invoices, no "we underestimated and need more budget" conversations. Fixed pricing is possible because we\'ve delivered enough AI systems to estimate accurately, and because we are disciplined about scoping in detail before we commit. If the scope changes materially, we agree the new scope and price in writing first — you never receive a surprise invoice.',
  },

  /* ── Trust & Security ── */
  {
    category: 'trust',
    question: 'Is my business data safe working with an AI agency overseas?',
    answer:
      'Yes. We use API-level integrations exclusively — we never store your business data on our servers. AI models process data in transit and return results to your systems. We enforce least-privilege access (the AI only touches what it needs to function), implement full audit trails on every action, and sign an NDA before any technical discovery begins. For healthcare, legal, and financial clients, we can deploy private LLM configurations where your data never leaves your own infrastructure. Most clients in regulated industries find our privacy architecture more rigorous than what they had before.',
  },
  {
    category: 'trust',
    question: 'What if the AI system doesn\'t perform the way we expected?',
    answer:
      'The 30-day post-launch support window exists specifically for this. Real-world usage always surfaces edge cases that testing doesn\'t catch. During those 30 days, we tune behavior based on live usage data, adjust prompts and guardrails, and fix anything that performs unexpectedly. We also build confidence thresholds into every agent — if the AI isn\'t sure what to do, it escalates to a human instead of guessing. The goal is a system that handles 70 to 80% of cases automatically and surfaces the rest for human review.',
  },
  {
    category: 'trust',
    question: 'Do I own the AI system after it\'s built, or is there a licensing fee?',
    answer:
      'Full ownership. No licensing fee. On launch day you receive the complete codebase in a GitHub repository, all API keys transferred to your accounts, all documentation, and a recorded management dashboard walkthrough. Take it to another developer, self-manage it, or shut it down — no exit fees, no proprietary platform holding your data. We deliver an asset, not a dependency.',
  },
  {
    category: 'trust',
    question: 'How do you compare to using a freelance AI developer from Upwork?',
    answer:
      'A good Upwork AI freelancer bills a steep hourly rate, and a serious AI project runs hundreds of hours — with no delivery guarantee, no project management, and no support window. The deeper risk is handover: when the freelancer wraps up, there\'s often minimal documentation, the code isn\'t structured for maintenance, and if something breaks three months later you\'re back on Upwork looking for someone to read someone else\'s code. FactoryJet delivers a documented, tested, maintainable system with a support window and a team you can actually reach when something goes wrong.',
  },
  {
    category: 'trust',
    question: 'How long has FactoryJet been building AI systems?',
    answer:
      'We\'ve been building software for small businesses — 12+ years. Our AI practice started in 2019 with our first production LLM integrations, before ChatGPT made AI a household word. Since then we\'ve delivered AI systems for e-commerce brands, law firms, healthcare practices, SaaS companies, real estate teams, and professional services firms across the US. The 500+ projects in our portfolio span over a decade of building real systems for real businesses — AI is where we focus now, but the project discipline and quality standards come from 12 years of delivery.',
  },

  // ── Choosing an agency (2) — money-query coverage, added 2026-06-11 ──
  {
    category: 'what-is-ai-agency',
    question: 'Who is the best AI agency in USA for small business?',
    answer:
      'For SMBs that want production AI without enterprise consulting overhead, FactoryJet makes a strong case: fixed-price, milestone-paid projects, senior engineers on every build, and 500+ SMB projects of delivery discipline behind the AI practice. But the best AI development company in USA for you depends on what you are automating — the best AI automation agency in USA for a support-ticket workflow is not automatically right for a custom sales agent. Whoever you evaluate, apply three filters: do engineers (not salespeople) scope the project, is pricing fixed before work starts, and do you own the code and data from day one?',
  },
  {
    category: 'what-is-ai-agency',
    question: 'What are the top 10 AI automation agencies in USA?',
    answer:
      'Published lists of the top 10 AI automation agencies in USA mix big consultancies with specialist studios, and they age fast — the field is moving quarterly. FactoryJet competes in that set for small and mid-market businesses: custom agents, chatbots, and workflow automation with public pricing and no retainers required. Use any top-10 list as a shortlist, then compare three things the lists rarely show: who actually builds (senior engineer vs offshore pool), fixed-price vs hourly billing, and whether you keep the code if you leave.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function AIAgencyPage() {
  return (
    <>
      <script
        id="ai-agency-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="ai-agency-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="ai-agency-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="ai-agency-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <SiteHeader
        navLinks={[
          { label: 'Services', href: '/services' },
          { label: 'AI Agents', href: '/services/ai-agents' },
          { label: 'AI Automation', href: '/services/ai-automation' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'FAQ', href: '#faq' },
        ]}
        cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="us" source="us_services_ai_agency_hero" />}
          eyebrow="AI AGENCY · UNITED STATES"
          headline={<>The AI Agency That<br className="hidden lg:block" /> Actually Delivers —<br className="hidden lg:block" /> Not Just Decks</>}
          lead="FactoryJet is a US AI agency building custom AI agents, automation workflows, and chatbots for small businesses since 2019. 500+ production systems delivered. fixed-price, milestone-paid. Fixed price. Talk to the founder."
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustItems={['500+ businesses served', 'fixed-price', '12 years building']}
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              {/* Card header */}
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  What an AI Agency Delivers
                </p>
              </div>
              {/* Service rows */}
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { service: 'AI Agents', desc: 'Autonomous workflows running 24/7', from: 'Fixed price' },
                  { service: 'AI Automation', desc: 'Connect tools, kill manual steps', from: 'Fixed price' },
                  { service: 'AI Chatbots', desc: 'Conversational AI for web, app & phone', from: 'Fixed price' },
                  { service: 'AI Integration', desc: 'Add AI to software you already use', from: 'Fixed price' },
                  { service: 'AI-Native Software', desc: 'New apps built AI-first', from: 'Fixed price' },
                  { service: 'AI Workflow Automation', desc: 'End-to-end internal process automation', from: 'Fixed price' },
                ].map(({ service, desc, from }) => (
                  <div key={service} className="flex items-center justify-between gap-4 px-7 py-3.5">
                    <div>
                      <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">{service}</p>
                      <p className="font-fj-body text-[0.8125rem] text-fj-neutral-500">{desc}</p>
                    </div>
                    <p
                      className="shrink-0 font-fj-mono font-medium text-[#F05A28]"
                      style={{ fontSize: '11px', letterSpacing: '0.06em' }}
                    >
                      {from}
                    </p>
                  </div>
                ))}
              </div>
              {/* Footer */}
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-7 py-5">
                <p className="font-fj-body text-[0.8125rem] text-fj-neutral-500">
                  Fixed price on every project. Full code ownership on day one. Talk to the founder before any commitment.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ US businesses — from Austin and Miami to Denver, Nashville, and Portland" />

        {/* ── 3. TRUST BLOCK ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ production AI systems. 12 years building. One fixed price."
        />

        {/* ── 4. WHAT DOES AN AI AGENCY DO ─────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WHAT AN AI AGENCY DOES"
          headline="An AI Agency Builds the Systems That Do the Work. Not the Tools You Use to Do It Yourself."
          lead="An AI agency researches, designs, builds, and deploys artificial intelligence systems for businesses. Custom AI agents that handle customer service and operations automatically. Automation workflows that eliminate manual steps between your tools. Chatbots trained on your specific content. AI integrations that add intelligence to software you already use."
          body={
            <>
              {/* Capability chip strip — decorative */}
              <div className="flex flex-wrap gap-2" aria-hidden>
                {[
                  'Custom AI Agents',
                  'Workflow Automation',
                  'AI Chatbots',
                  'System Integration',
                  'AI-Native Apps',
                  'LLM Fine-tuning',
                ].map((cap) => (
                  <span
                    key={cap}
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-semibold uppercase text-[#F05A28]"
                    style={{ fontSize: '10px', letterSpacing: '0.10em' }}
                  >
                    {cap}
                  </span>
                ))}
              </div>

              <p>
                Most business owners have heard "you should be using AI." What they haven't heard is exactly what that means for a 12-person accounting firm or a 30-person e-commerce brand. Buying a ChatGPT subscription is not an AI strategy. Bolting a chatbot widget onto your website is not AI transformation. An AI agency builds the systems that actually change how work happens — the infrastructure that runs in the background, handling the volume that currently buries your team.
              </p>

              {/* Pull quote — decorative */}
              <div className="border-l-2 border-[#F05A28] py-1 pl-5" aria-hidden>
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.1875rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  "AI that runs in production" is different from "AI you saw in a demo."
                </p>
              </div>

              <p>
                FactoryJet has been building production software for US small businesses. Our AI practice started in 2019 — before most agencies knew what an LLM was. The systems we ship run in production, handling real customer interactions, processing real invoices, qualifying real leads. Not prototypes. Not proofs of concept. Production systems with monitoring, audit trails, and support windows.
              </p>

              {/* 3-col stat cards — decorative */}
              <div className="grid grid-cols-3 gap-3" aria-hidden>
                {[
                  { value: '24/7', label: 'Always running' },
                  { value: '0', label: 'Sick days' },
                  { value: '~$0', label: 'Marginal cost' },
                ].map((b) => (
                  <div
                    key={b.value}
                    className="rounded-xl border border-fj-neutral-200 bg-white px-3 py-4 text-center shadow-sm"
                  >
                    <p
                      className="font-fj-display font-bold text-[#F05A28]"
                      style={{ fontSize: '1.375rem', lineHeight: 1, letterSpacing: '-0.03em' }}
                    >
                      {b.value}
                    </p>
                    <p
                      className="mt-1.5 font-fj-mono font-medium uppercase text-fj-neutral-400"
                      style={{ fontSize: '0.6875rem', letterSpacing: '0.07em' }}
                    >
                      {b.label}
                    </p>
                  </div>
                ))}
              </div>

              <p>
                The businesses that hire us aren't buying AI because it's trendy. They ran the math: a Growth AI platform that saves 20 staff hours per week pays for itself in weeks — and keeps paying every week after that, without raises, turnover, or sick leave.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              {/* Header */}
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  Before AI Agency vs. After
                </p>
              </div>
              {/* Before / After rows */}
              <div className="divide-y divide-fj-neutral-100 px-7">
                {[
                  { metric: 'Support ticket response', before: '6–8 hours', after: '4 seconds' },
                  { metric: 'Inbound lead follow-up', before: 'Next business day', after: '< 60 seconds' },
                  { metric: 'Invoice data entry', before: '3–4 hrs/day', after: 'Automated' },
                  { metric: 'Weekly reports', before: 'Friday afternoon', after: 'On demand' },
                  { metric: 'After-hours inquiries', before: '3–5 missed/week', after: 'Zero missed' },
                  { metric: 'CRM update accuracy', before: '~70% (human error)', after: '~99% (automated)' },
                ].map(({ metric, before, after }) => (
                  <div key={metric} className="py-3.5">
                    <p
                      className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                      style={{ fontSize: '10px', letterSpacing: '0.10em' }}
                    >
                      {metric}
                    </p>
                    <div className="mt-1.5 flex items-center gap-3">
                      <p className="font-fj-body text-[0.8125rem] text-fj-neutral-400 line-through">{before}</p>
                      <span className="text-fj-neutral-300">→</span>
                      <p className="font-fj-body text-[0.875rem] font-semibold text-[#F05A28]">{after}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Footer */}
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-7 py-5">
                <div className="mb-2 h-[3px] w-8 rounded-full bg-[#F05A28]" aria-hidden />
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1rem', lineHeight: 1.3, letterSpacing: '-0.02em' }}
                >
                  Results from real FactoryJet deployments — not projections.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 5. WHY MOST AI ENGAGEMENTS FAIL (DARK) ───────────────────────── */}
        <StrategicDarkSection
          eyebrow="THE PROBLEM WITH AI AGENCIES"
          headline="Three Reasons Most AI Agency Engagements Don't Deliver What They Promise"
          lead="The AI agency market is full of firms that are excellent at selling AI transformation and mediocre at building production AI systems. Here's what to watch for — and how FactoryJet is structured differently."
          pillars={[
            {
              title: 'They sell the dream, not the delivery',
              body: 'Many AI agencies pitch AI transformation and deliver proofs of concept. A proof of concept is not a production system. Production means real data, real volume, real users who don\'t follow the happy path, and real edge cases that a demo never surfaces. We\'ve built 500+ production systems. We know the difference — and we don\'t call a demo a delivery.',
            },
            {
              title: 'They\'re priced for enterprise budgets',
              body: 'US AI agencies built their pricing models around Fortune 500 clients with six-figure AI budgets and long procurement cycles. A small business quoted enterprise rates for a project that should cost a fraction of that either overpays dramatically or abandons AI entirely. Neither outcome is good. FactoryJet was built specifically to deliver enterprise-quality AI systems at prices that make sense for small and mid-size businesses.',
            },
            {
              title: 'You end up dependent on the agency forever',
              body: 'Many AI builds create proprietary dependencies — platforms you can\'t leave, vendor lock-in you didn\'t plan for, and "AI in a box" subscriptions that stop working the moment you cancel. We deliver the full codebase on launch day. All API keys are in your accounts. All documentation is written for your team. If you want to take it to another developer tomorrow, you can. That\'s the right way to build.',
            },
          ]}
        />

        {/* ── 6. OUR AI SERVICES ───────────────────────────────────────────── */}
        <IndustriesGrid
          eyebrow="OUR AI SERVICES"
          headline="Six AI Services. One AI Agency That Delivers All of Them."
          lead="Most AI agencies specialize in one area — usually the one they're trying to sell you. FactoryJet covers the full AI stack for US small businesses: from simple no-code automations to custom multi-agent systems built on Claude and GPT-4o."
          sectors={AI_SERVICES}
        />

        {/* ── 7. HOW WE WORK ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="HOW WE WORK"
          headline="From Strategy Call to Production AI — Here's Every Step"
          lead={`No black boxes, no "we'll show you when it's done." Every stage has a deliverable you review before we move forward. Fixed scope, fixed price, and a working AI system at the end — not a slide deck about one.`}
          stages={JOURNEY_STAGES}
          closingNote="5 STAGES · 2–12 WEEKS TO FIRST PRODUCTION AI · STRATEGY CALL BEFORE ANY COMMITMENT"
        />

        {/* ── 8. ROI STATS ─────────────────────────────────────────────────── */}
        <div className="bg-fj-neutral-50">
          <BoringStatsRow stats={ROI_STATS} align="center" />
        </div>

        {/* ── 9. THE US AI MARKET ──────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="THE US AI MARKET"
          headline="The Businesses That Are Winning Right Now Aren't Bigger. They're Faster."
          leadParagraphs={[
            "The conversation has shifted from 'should we explore AI?' to 'how fast can we deploy it?' According to McKinsey's 2025 State of AI report, 96% of enterprises plan to expand AI agent adoption in the next 12 months. The businesses moving fastest aren't the Fortune 500 — they're agile SMBs who can adopt new tools without a six-month procurement process and a committee of seventeen people.",
            "FactoryJet has served small and medium businesses in Austin, Miami, Denver, Nashville, Portland, Charlotte, Raleigh, Tampa, New York, and across the US. We understand what a 10-person business looks like from the inside — the manual data entry, the repetitive emails, the spreadsheet that someone has to update every Friday. Those are exactly the workflows AI eliminates first.",
            "The most common question we get after the first demo is: 'Why didn't we do this two years ago?' The answer is usually that the price was too high, the timelines were too long, or the last agency didn't build anything that actually ran. We exist to fix all three of those problems.",
          ]}
          bodySlot={
            <>
              <div className="border-l-2 border-[#F05A28] py-1 pl-5" aria-hidden="true">
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  78% of customers buy from the first business that responds. An AI agent responds in 60 seconds. Your team responds the next morning.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2" aria-hidden="true">
                {['Austin TX', 'Miami FL', 'Denver CO', 'Nashville TN', 'New York NY', 'Charlotte NC', 'Portland OR', 'Tampa FL'].map((city) => (
                  <span
                    key={city}
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-medium text-[#F05A28]"
                    style={{ fontSize: '10px', letterSpacing: '0.08em' }}
                  >
                    {city}
                  </span>
                ))}
              </div>
            </>
          }
          stats={US_AI_STATS}
        />

        {/* ── 10. COMPARISON TABLE ─────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. US AI Agency vs. Freelancer vs. DIY Tools"
          lead="Four options for getting AI built. They are not equal. Here's what the decision actually looks like when you compare them side by side on the things that matter."
          pullQuote={{
            stat: 'Fixed Price',
            caption: 'milestone-paid with full code ownership — same engineering quality, predictable from quote to launch.',
          }}
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
          footer="Prices and timelines reflect typical market ranges as of 2026. FactoryJet fixed-price contracts available for all tiers."
        />

        {/* ── 11. INDUSTRIES SERVED ────────────────────────────────────────── */}
        <IndustriesGrid
          eyebrow="INDUSTRIES WE SERVE"
          headline="AI Built for the Industry You're Actually In"
          lead="Generic AI systems fail in specialized industries. Compliance requirements, domain vocabulary, workflow nuances, and data sensitivity are all different. Here's how we approach AI for the sectors we work in most."
          sectors={INDUSTRIES_SERVED}
        />

        {/* ── 12. TECH STACK + SECOND SERVICE EXPLANATION ──────────────────── */}
        <ServiceExplanation
          eyebrow="OUR AI TECH STACK"
          headline="We Pick the Right Tool for Your Use Case — Not the One We're Trying to Sell"
          lead="FactoryJet doesn't have a vendor relationship or a preferred LLM. We pick the right model, orchestration framework, and infrastructure for each use case based on performance, cost, and your data privacy requirements."
          reverseOnDesktop
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden="true">
                {['Claude', 'GPT-4o', 'Gemini', 'Llama', 'LangChain', 'n8n', 'Make.com', 'Twilio', 'Pinecone'].map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-semibold uppercase text-[#F05A28]"
                    style={{ fontSize: '10px', letterSpacing: '0.10em' }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <p>
                <strong className="font-semibold text-fj-ink">LLM Selection</strong> — Claude (Anthropic), GPT-4o (OpenAI), Gemini (Google), and open-source models like Llama and Mistral. We choose based on your use case, cost sensitivity, and whether data can leave your infrastructure.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">Agent Orchestration</strong> — LangChain, LangGraph, and CrewAI for multi-step agent workflows. n8n and Make.com for no-code automation pipelines. We use the right framework for the complexity level of the task.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">Voice AI</strong> — Twilio for phone infrastructure, ElevenLabs for natural-sounding AI voice, and Vapi for voice agent orchestration. Phone-based AI agents that handle inbound calls, book appointments, and qualify callers.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">Memory & Retrieval</strong> — Pinecone, Supabase pgvector, and Chroma for vector storage. RAG (Retrieval-Augmented Generation) pipelines that ground your AI in your actual business data instead of making things up.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">Infrastructure</strong> — AWS, Cloudflare Workers, and Vercel for deployment. PostgreSQL and Supabase for structured data. All infrastructure runs in your accounts — we don't intermediate your data or host on proprietary platforms.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl shadow-sm">
              <Image
                src="/images/us/services/ai-agency/service-explanation-tech-stack.webp"
                alt="AI tech stack layers — LLMs, orchestration, automation, voice AI, vector memory, integrations, and infrastructure used by FactoryJet"
                width={1200}
                height={800}
                className="w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          }
        />

        {/* ── 13. PRICING ──────────────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="PRICING"
            headline="Fixed-Price AI Development — Know Your Number Before We Start"
            lead="Enterprise AI agencies charge several times more for projects we deliver at fixed-price. Every FactoryJet tier has a fixed scope, a fixed price, and a delivery timeline we stand behind. No hourly billing. No scope creep."
            tiers={PRICING_TIERS}
            footnote="Custom enterprise scopes quoted after a discovery call. Monthly retainer options available. Full codebase and API key ownership included in every tier."
          />
        </div>

        {/* ── 14. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="We're not a US AI agency with a fancy pitch deck. That's the point."
          lead="We're a 25-year-old software company that has shipped 500+ production systems for real businesses. The AI we build doesn't live in a slide deck or a proof-of-concept repository — it runs in production and does actual work, every day, for real businesses."
          pillars={[
            {
              title: 'Fixed price, delivered on time',
              body: 'No hourly billing. No scope-creep invoices. No "we underestimated and need more budget" conversations two weeks before launch. We\'ve delivered enough AI systems to price accurately — and we scope in detail before we commit. If the scope changes materially, we agree it in writing first.',
            },
            {
              title: 'SMB depth, not enterprise theory',
              body: 'We\'ve built for 10-person law firms, 30-person e-commerce brands, and solo real estate agents. We know what operations actually look like inside a small business — the manual data entry, the spreadsheet hell, the repetitive emails. We build AI for that reality, not for a Y Combinator pitch deck.',
            },
            {
              title: 'You own everything. From day one.',
              body: 'No proprietary platforms, no vendor lock-in, no "AI in a box" subscription that stops working when you cancel. We deliver the full codebase in your GitHub, all API keys in your accounts, all documentation written for your team. If you walk away tomorrow, you walk away with an asset, not a dependency.',
            },
          ]}
        />

        {/* ── 15a. TEAM PHOTO ───────────────────────────────────────────────── */}
        <div className="bg-fj-cream px-4 pb-0 pt-10 md:px-8 md:pt-14">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl shadow-md">
            <Image
              src="/images/us/services/ai-agency/service-team-ai.webp"
              alt="FactoryJet AI engineering team building custom AI agents and automation for US small businesses"
              width={1200}
              height={800}
              className="w-full object-cover"
              sizes="(max-width: 768px) 100vw, 960px"
            />
          </div>
        </div>

        {/* ── 15. TESTIMONIALS ─────────────────────────────────────────────── */}
        <TestimonialsSection
          region="us"
          eyebrow="WHAT CLIENTS SAY"
          headline="4.9/5 across 500+ projects. Real results from real businesses."
        />

        {/* ── 16. FAQ ──────────────────────────────────────────────────────── */}
        <div id="faq">
          <FAQ
            eyebrow="FREQUENTLY ASKED QUESTIONS"
            headline="Everything You Need to Know About Hiring an AI Agency"
            lead="No jargon. No runaround. The questions we get on every strategy call — answered straight, so you can make an informed decision before we talk."
            categories={FAQ_CATEGORIES}
            items={FAQ_ITEMS}
          />
        </div>

        {/* ── 17. FINAL CTA ─────────────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO BUILD"
          headline="Talk to the Founder — Find Your Highest-Value Automation in 30 Minutes"
          sub="Tell us what your team does repeatedly that shouldn't require a human. We'll map the workflow, estimate the ROI, and tell you exactly what it would cost to automate it. No pitch. No sales pressure. No obligation. Just a straight answer from an engineer who has built it before."
          primaryCta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          objectionHandler="Fixed price confirmed upfront. Full code ownership. 30-day post-launch support. Free call before any commitment."
        />

      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}

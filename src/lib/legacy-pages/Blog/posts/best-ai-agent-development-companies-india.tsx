import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

const PAGE_URL = 'https://factoryjet.com/blog/best-ai-agent-development-companies-india';

// Every fact about every other firm below was read on that firm's own website
// on 24 November 2026. The URL in `source` is the page read; the quote behind
// each claim is kept in the research ledger outside the repo. Nothing here is
// paid placement. The order is not a ranking: FactoryJet, the publisher, is
// listed first and the rest are grouped by the kind of buyer they suit. The
// table, the profiles and the ItemList schema all map from this one array.
interface Firm {
  name: string;
  url: string;
  source: string;
  group: 'first' | 'agency' | 'engineering' | 'enterprise';
  offices: string;
  type: string;
  scale: string;
  what: string;
  bestFor: string;
  ask: string;
}

const FIRMS: Firm[] = [
  {
    name: 'FactoryJet (that is us)',
    url: 'https://factoryjet.com/ai-agent-development',
    source: 'https://factoryjet.com/ai-agent-development',
    group: 'first',
    offices: 'We work with businesses across India and run scoping, demos and reviews over video calls',
    type: 'Custom AI agents for one job at a time: calls, WhatsApp replies, documents, support and lead follow-up',
    scale: 'Rated 5.0 on Clutch from 4 reviews and 5.0 on GoodFirms from 5 reviews',
    what: 'We scope one job on a short call, test the agent on real samples of your documents, emails or calls before you sign, then build it in phases. Each phase has one fixed price in writing, paid at milestones. Early phases keep a person approving every draft, and you choose where approval stays. The code and repository are yours from the first day, and later support is optional with no monthly minimum. Two named examples: Sow Easy, where WooCommerce trade ordering is connected to Odoo, and GPSUK, online ordering for trade buyers who reorder the same promotional products again and again.',
    bestFor: 'A mid-sized business that wants one workflow working first, with the price and code ownership settled in writing.',
    ask: 'Ask us what we would not automate in your process. A short answer to that tells you whether we have thought about your job.',
  },
  {
    name: 'Maruti Techlabs',
    url: 'https://marutitech.com/',
    source: 'https://marutitech.com/services/ai-agent-development-services/',
    group: 'agency',
    offices: 'Ahmedabad, Gujarat, and Plano, Texas (its contact page lists both)',
    type: 'AI, machine learning and custom software company with a dedicated AI agent service',
    scale: 'Its home page lists 250+ skilled professionals, 14+ years and 100+ projects delivered',
    what: 'Its AI agent page says it builds agents that automate tasks, reduce manual effort and improve execution speed across business operations, connected to CRMs, ERPs, APIs, databases and cloud platforms. The page also describes approval and validation steps that keep a person in control where needed, and agents that keep their context across long-running workflows.',
    bestFor: 'A company that wants an agent plus the product engineering around it from one established team.',
    ask: 'Which of your own systems it has connected an agent to before, and who owns the prompts and workflow definitions at handover.',
  },
  {
    name: 'InnovationM',
    url: 'https://www.innovationm.com/',
    source: 'https://www.innovationm.com/services/ai/development/agents/',
    group: 'agency',
    offices: 'Noida, Uttar Pradesh (marked HQ), with offices in New Canaan, Connecticut and Oxted, Surrey',
    type: 'Software engineering firm with an AI agent development service',
    scale: 'Its home page says it was established in 2011',
    what: 'Its agent page describes systems that perceive the context of an operation, make autonomous decisions and carry out multi-step workflows in real time. Its home page lists application engineering, custom product development and software integration as separate capabilities.',
    bestFor: 'Worth a look if you expect the agent to sit inside a wider custom software project.',
    ask: 'Who on its team would run your project week to week, and how a handover to your own developers works.',
  },
  {
    name: 'Trigma',
    url: 'https://trigma.com/',
    source: 'https://trigma.com/',
    group: 'agency',
    offices: 'Mohali and Las Vegas, Nevada (its home page lists both)',
    type: 'Custom AI and software development: agentic AI, multi-agent systems and agent observability',
    scale: 'Its home page states 1000+ projects delivered and 17+ years of expertise',
    what: 'Its home page says it designs and deploys agentic AI systems with reasoning, planning and tool-integrating capabilities for end-to-end business workflows. Its services menu lists Multi Agent and AI Agent Observability, which means watching what an agent did and why. One case study on the home page is titled AI Voice Agents for Healthcare Claims Follow-Up, for a US healthcare RCM company.',
    bestFor: 'A team that already knows it needs several agents working together and wants monitoring built in.',
    ask: 'How it measures whether an agent is right after launch, and what that monitoring costs to run each month.',
  },
  {
    name: 'Ksolves',
    url: 'https://www.ksolves.com/',
    source: 'https://www.ksolves.com/',
    group: 'agency',
    offices: 'Delivery centres in Noida, Pune and Indore, as its home page states',
    type: 'Software company with tailored AI agents and Salesforce, Odoo and open source practices',
    scale: 'Its home page lists 14+ years in business, 750+ projects and 200+ clients, and says it is stock market listed',
    what: 'Its home page presents tailored AI agents for marketing, HR, operations, design and finance, and a Build Your Own Agent option. Beyond agents its home page names practice areas including open source, Salesforce and Odoo.',
    bestFor: 'A business that runs Odoo or Salesforce and wants an agent added to that system by the same firm.',
    ask: 'Which of the agent types on its home page it has shipped for a business of your size, and what the support terms are after launch.',
  },
  {
    name: 'Quytech',
    url: 'https://www.quytech.com/',
    source: 'https://www.quytech.com/',
    group: 'agency',
    offices: 'Gurgaon (Delhi NCR), Haryana, and Walnut, California (its site lists both)',
    type: 'Software and AI development with agentic AI, AI voice agent and AI sales agent services',
    scale: 'Its home page shows a 98% client retention rate',
    what: 'Its service menu lists Agentic AI Development, AI Sales Agent Development and AI Voice Agent Development, next to generative AI, LLM development, chatbots and computer vision. Its menu also lists AI Agent Developers and Hire Dedicated Developers.',
    bestFor: 'A company that wants a sales or voice agent and is open to hiring dedicated developers instead of a fixed-scope project.',
    ask: 'Whether it prefers a fixed scope or dedicated developers for your job, and who owns the code in each case.',
  },
  {
    name: 'LeewayHertz',
    url: 'https://www.leewayhertz.com/',
    source: 'https://www.leewayhertz.com/ai-agent-development-company/',
    group: 'engineering',
    offices: 'Not stated on the pages we read, so we name no city',
    type: 'AI development firm with AI agent, AI copilot and generative AI services and a list of its own AI products',
    scale: 'No team or project figure read on the pages we opened',
    what: 'Its agent page says it helps enterprises build and deploy AI agents and multi-agent systems that automate complex workflows and coordinate work across applications, data and teams. It describes support for the whole agent lifecycle, from use-case analysis and technical design to development, governed deployment and AgentOps, the day-to-day running and monitoring of agents.',
    bestFor: 'Worth a look if you want a firm that describes the whole agent lifecycle and lists its own AI products.',
    ask: 'Which parts of your agent would come from its listed AI products and which would be written fresh for you.',
  },
  {
    name: 'Simform',
    url: 'https://www.simform.com/',
    source: 'https://www.simform.com/about-us/',
    group: 'engineering',
    offices: 'Its about page has a Headquarters heading but the city did not appear in the text we read',
    type: 'AI-native digital engineering company with agentic AI services',
    scale: 'Its about page lists founded 2010, 1200+ employees and 350+ platform certified engineers',
    what: 'Its home page says it was a global finalist at the 2026 Microsoft Partner of the Year Awards, for work on AI agents in field operations, in the Innovate with Azure AI Apps and Agents category. Its services menu lists agentic AI next to product engineering, data and cloud and platform work.',
    bestFor: 'Worth a look if you build on Microsoft Azure and want agents inside a wider engineering programme.',
    ask: 'What size of project it takes on at the low end, and who leads the work after the sales call.',
  },
  {
    name: 'Fractal Analytics',
    url: 'https://www.fractal.ai/',
    source: 'https://www.fractal.ai/about-us/',
    group: 'enterprise',
    offices: 'Not read on the pages we opened, so we name no city',
    type: 'Enterprise AI company with an agentic AI platform and data-led AI services',
    scale: 'Its about page says it was founded in 2000 and supports large global enterprises',
    what: 'Its about page says it aims to power human decisions in its clients' enterprises with AI. Its home page says its work is powered by its own enterprise agentic AI platform, and talks about moving AI beyond pilots.',
    bestFor: 'Worth a look if you are a large enterprise that wants agents tied to a data programme.',
    ask: 'Whether it takes a small first piece of work from a mid-sized company.',
  },
  {
    name: 'Yellow.ai',
    url: 'https://yellow.ai/',
    source: 'https://yellow.ai/about-us/',
    group: 'enterprise',
    offices: 'Not read on the pages we opened, so we name no city',
    type: 'Agentic AI platform for customer and employee service automation',
    scale: 'Its about page says it was founded by three friends and caters to enterprises globally',
    what: 'Its home page presents it as a platform, with an AI Agent Builder for creating enterprise-ready agents for any channel and a Nexus EDGE agentic desktop ally for employee experience automation. The about page calls it an agentic AI platform for service automation.',
    bestFor: 'A business whose main need is customer or employee service across many channels, and that wants a product rather than a project.',
    ask: 'What the platform does when your process needs a rule it does not support, and who owns the conversation data.',
  },
];

// One H2 per buyer group, worded like the questions buyers type into search
// boxes and AI assistants.
const GROUPS: { key: Firm['group']; heading: string; intro: string }[] = [
  {
    key: 'first',
    heading: 'Which Indian firm can build a custom AI agent for a mid-sized business?',
    intro: 'We wrote this guide, so read our own entry with that in mind. It comes from our AI agent development page, and we say below when another firm may suit you better.',
  },
  {
    key: 'agency',
    heading: 'Which Indian software firms describe AI agent development on their own sites?',
    intro: 'These five are software and AI firms that describe agent work on their own sites. Each profile gives the Indian city or delivery centres its site lists, and any office abroad it lists.',
  },
  {
    key: 'engineering',
    heading: 'Which engineering-led AI firms in India list agent services?',
    intro: 'These two describe agents next to wider AI and engineering services on their own sites.',
  },
  {
    key: 'enterprise',
    heading: 'Which AI platform and analytics firms in India offer agents?',
    intro: 'These two describe their work for enterprises on their own sites. One presents an agentic platform for service automation, the other an enterprise AI company with its own agentic platform.',
  },
];

const FAQS: FAQItem[] = [
  {
    q: 'What is the best AI agent development company in India?',
    a: 'Nobody publishes an independent ranking and we will not invent one. We read the websites of ten firms on 24 November 2026. Choose by fit: the profiles group Maruti Techlabs, InnovationM, Trigma, Ksolves and Quytech as software firms with agent services, LeewayHertz and Simform as engineering-led, and Fractal and Yellow.ai as platform and analytics firms. We wrote this list, and we suit a single workflow in a mid-sized business.',
  },
  {
    q: 'Which are the best AI agent development companies in India?',
    a: 'Start with Maruti Techlabs, InnovationM, Trigma, Ksolves, Quytech and FactoryJet, which each describe agent work for businesses. Add LeewayHertz and Simform if the agent sits inside wider engineering, and Fractal Analytics or Yellow.ai if you want a platform or analytics firm. We read each firm\'s own site on 24 November 2026 and list what it states.',
  },
  {
    q: 'Which Indian company could build a bespoke AI agent for my business?',
    a: 'Most of the ten can, and the agency group describes custom agent work most plainly. Write down the job, the systems it touches and who approves the result. Then ask each firm what it would build first and how it would test that on your own records.',
  },
  {
    q: 'Which companies are the top AI agent development firms in India?',
    a: 'AI assistants repeat a familiar set: Infosys, TCS, Wipro, Fractal, Persistent and a long tail of agencies. We checked a different slice on purpose, firms that describe agent work for businesses of varied sizes. Top here means well suited to a stated kind of buyer, not a scored position.',
  },
  {
    q: 'Which AI company is best in India?',
    a: 'It depends what you need the AI to do. Enterprise analytics, a service platform and a custom agent for one workflow are three different purchases with different best answers. Name the job first, then compare firms that have described that job on their own sites.',
  },
  {
    q: 'What company is developing AI agents?',
    a: 'Many do. Among Indian firms we read, Maruti Techlabs, InnovationM, Trigma, Ksolves, Quytech, LeewayHertz, Simform and FactoryJet build agents for clients, Fractal describes its own enterprise agentic platform, and Yellow.ai describes an agentic platform for service automation. Each says this on its own pages.',
  },
  {
    q: 'Where do I find good AI agent developers to hire in India?',
    a: 'Look for people who have run an agent in a live business and can explain how it stops safely when it errs. Quytech's menu lists AI Agent Developers among the developers you can hire. A project firm suits a fixed scope, and a freelancer suits a small trial.',
  },
  {
    q: 'Is there a good AI agent development company in Bangalore?',
    a: 'We did not verify a firm headquartered in Bengaluru for this list, so we name none. Four of the ten list addresses or delivery centres in Noida, Gurgaon, Mohali, Pune or Indore, and Maruti Techlabs lists Ahmedabad. Agent projects are scoped and reviewed over video calls, so the city matters less than the answers to the questions below.',
  },
  {
    q: 'Does this list include Infosys, TCS and Wipro?',
    a: 'No. AI assistants name them often, but we did not open their sites for this guide, so they carry no entry here. If you want them considered, add them to your own shortlist and ask them the same seven questions.',
  },
  {
    q: 'Is FactoryJet really the right choice, or is that just marketing?',
    a: 'We wrote this list and put ourselves first, which is a conflict of interest. We suit a mid-sized business that wants one workflow built, demonstrated on its own data before signing, with a fixed price per phase and code ownership in writing. If you want a platform or an analytics firm, another entry fits better.',
  },
  {
    q: 'How did you choose the firms on this list?',
    a: 'We started with the firms AI assistants and Google results named for Indian agent buyers, then opened each firm\'s own site on 24 November 2026 and kept those that load and describe agent services. Nobody paid to be listed. We state only what each site says, and name no city where a site did not give one.',
  },
  {
    q: 'What should I ask an AI agent development company before hiring it?',
    a: 'Ask about five things: who does the coding, whether you get a demo on your own data first, whether the price is fixed in writing, who holds the finished code and how the agent behaves when it errs. Clear written answers to all five earn a second call.',
  },
  {
    q: 'Should I pay for a proof of concept before a full build?',
    a: 'A small first phase is sensible, because it shows whether the agent works on your real data. Check that the price is stated up front, that the code is yours if you stop there, and that the firm can say what it would do differently in the next phase.',
  },
  {
    q: 'How do I compare AI agent development quotes from Indian firms?',
    a: 'Put each quote into the same frame: the job, the systems connected, who approves what, the number of phases, what is fixed and what is hourly, who owns the code and what support costs after launch. Two quotes with different scopes cannot be compared on price alone.',
  },
  {
    q: 'How much does it cost to build an AI agent in India?',
    a: 'Prices follow the job, and published ranges differ from source to source. We keep the sourced rupee ranges in a separate guide so each figure carries its source. FactoryJet quotes a fixed price in writing after a short scoping call, one price per phase.',
  },
  {
    q: 'Does it cost money to use an AI agent?',
    a: 'Yes, twice over: once to build it, then monthly for the AI model, hosting and upkeep. Get both the build price and the monthly bill in writing from any firm.',
  },
  {
    q: 'What is the difference between an AI agent and a chatbot?',
    a: 'A chatbot replies to questions. An agent goes further and acts: it reads a document, updates a CRM record or books a slot. For jobs that call for nothing more than a chatbot, see our AI chatbot development page.',
  },
  {
    q: 'Do Indian AI agent companies build WhatsApp and voice agents?',
    a: 'Some do. Quytech lists an AI voice agent service, Trigma shows a voice agent case study, and FactoryJet builds agents that reply on WhatsApp and answer calls. Ask for a working demo in your language and your call flow before you pay anything.',
  },
  {
    q: 'Which firm suits a business that runs Odoo or Salesforce?',
    a: 'Ksolves lists Odoo and Salesforce among its practice areas on its home page. FactoryJet connected WooCommerce trade ordering to Odoo for Sow Easy. Ask any firm to show an agent connected to your system, not only a similar one.',
  },
  {
    q: 'Is a platform like Yellow.ai better than a custom agent?',
    a: 'A platform and a custom agent are different purchases. Yellow.ai describes an agentic platform for service automation. A custom agent is written around your own process. Ask each option to show your actual job working, and ask what happens when your process needs something the product or the first build does not cover.',
  },
  {
    q: 'Are the firms on this list vetted by you?',
    a: 'We checked that each site loads and says what we report. We have not hired these firms, tested their agents or seen their contracts, so there are no scores. Treat this list as a starting shortlist and run your own check on any firm you contact.',
  },
  {
    q: 'Who owns the code when an Indian firm builds my AI agent?',
    a: 'It depends on the contract, so ask before you sign. FactoryJet hands you the code and the repository on the first day. For any other firm, get the answer in writing, including prompts, workflow definitions and the data the agent produces.',
  },
  {
    q: 'How long does an AI agent project take in India?',
    a: 'Time follows the scope and the number of systems the agent must reach. Sorting one kind of document is quick next to a phone agent that writes into your CRM. Ask each firm for dates in writing, tied to milestones, before work begins.',
  },
  {
    q: 'Where can I read the cost of building an AI agent in India with sources?',
    a: 'Our guide to AI agent development cost in India lists rupee ranges with the source of each figure. Read it next to this list, because a firm that fits your job at the wrong price is no use, and the reverse is true too.',
  },
];

export const post: BlogPost = {
  id: '858',
  slug: 'best-ai-agent-development-companies-india',
  title: 'Best AI Agent Development Companies India 2026: 10 Compared',
  excerpt:
    'Ten firms that build AI agents for Indian businesses, each read on its own website on 24 November 2026. What each one offers, the offices it lists, who it suits and what to ask it. We are on the list and say so.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Nov 24, 2026',
  dateModified: 'Nov 24, 2026',
  readTime: '12 min read',
  imageUrl: '/blog-images/best-ai-agent-development-companies-india.webp',
  imageAlt: 'A laptop with a dark screen and a desk phone on a wooden table in a small stockroom, with stacked cartons beside it',
  meta: {
    title: 'Best AI Agent Development Companies India 2026',
    description:
      'Ten AI agent development companies in India compared from their own websites: what each offers, who it suits and what to ask before you hire.',
  },
  keyTakeaways: [
    'No one firm is the best for everybody. Match the firm to your size, your software and the job you want done.',
    'We took every fact below from each firm\'s own website on 24 November 2026. No firm paid for a place, and the order carries no ranking.',
    'Five firms describe agent services as software companies: Maruti Techlabs, InnovationM, Trigma, Ksolves and Quytech. Two are engineering-led, and two are a platform and an analytics firm.',
    'Yellow.ai presents itself as an agentic platform, so its buying questions differ from those for a project firm.',
    'We wrote this guide and put ourselves first. Ask every firm the same five things: who does the coding, whether you get a demo on your data, whether the price is fixed in writing, who holds the code, and how the agent behaves when it errs.',
  ],
  faqs: FAQS,
  cta: {
    eyebrow: 'A second opinion',
    heading: 'Tell us the task your team repeats most',
    body: 'On a short call we will tell you if an agent is the right tool, if plain automation would do, or if you need neither, and which group of firms here fits you, including when it is not us.',
    button: 'Book a scoping call',
    serviceHref: '/ai-agent-development',
    serviceLabel: 'AI agent development in India',
    region: 'in',
    modalVariant: 'ai',
  },
  content: (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              '@id': PAGE_URL,
              url: PAGE_URL,
              name: 'Best AI Agent Development Companies India 2026: 10 Compared',
              description:
                'Ten AI agent development companies in India compared from their own websites: what each offers, who it suits and what to ask before you hire.',
              inLanguage: 'en-IN',
              datePublished: '2026-11-24',
              dateModified: '2026-11-24',
              isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com' },
              publisher: { '@id': 'https://factoryjet.com/#organization' },
              about: { '@type': 'Thing', name: 'AI agent development companies in India' },
              speakable: {
                '@type': 'SpeakableSpecification',
                cssSelector: ['#answer-first', 'h1', 'h2'],
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'AI agent development companies in India compared (2026)',
              itemListOrder: 'https://schema.org/ItemListUnordered',
              numberOfItems: FIRMS.length,
              itemListElement: FIRMS.map((a, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: a.name,
                url: a.url,
              })),
            },
          ]),
        }}
      />

      <div id="answer-first" className="mb-8 rounded-2xl border border-gray-200 bg-gray-50 p-6 not-prose">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#B23E13] mb-2">The short answer</p>
        <p className="text-gray-800 leading-relaxed mb-3">
          No one firm is the best AI agent development company in India for everybody. Maruti Techlabs, InnovationM, Trigma, Ksolves, Quytech and FactoryJet each describe agent work for businesses. LeewayHertz and Simform are engineering-led. Fractal Analytics is an enterprise AI company, and Yellow.ai is an agentic platform.
        </p>
        <p className="text-gray-800 leading-relaxed">
          We read every firm&rsquo;s own website on 24 November 2026. No firm paid for a place and the order carries no ranking. We wrote this guide and put ourselves first.
        </p>
      </div>

      <p className="mb-4">
        Ask ChatGPT, Gemini or Perplexity for the best AI agent development companies in India and the answers lean on the same big names. We know because we asked. On 24 November 2026 we put four Indian buyer questions to eight AI search tools. Infosys, TCS, Wipro, Fractal and Persistent came up again and again, along with a long tail of agencies that change from tool to tool.
      </p>
      <p className="mb-4">
        A big name is a fair answer for a bank. It is a poor answer for a 60-person distributor that wants one job automated. So this guide covers ten firms that describe agent work on their own sites, and tells you which kind of buyer each one suits. For each firm we give the offices it lists, one fact it states about itself, and one question worth asking it.
      </p>
      <p className="mb-4">
        <strong>A note on honesty.</strong> We build AI agents, so we appear here, and we also wrote the list, so we put ourselves at the top. That is a conflict of interest. Where another firm will suit you better, we say so. Read every list of this kind with the same doubt, ours included.
      </p>
      <p className="mb-6">
        Two terms, in plain words. An <strong>AI agent</strong> is software that carries out a task in your tools, like logging an order or booking a call, instead of only chatting. An <strong>AI agent development company</strong> writes that software for you, connects it to your tools and keeps it running. If you want the buying detail for your own project, see our page on <a href="/ai-agent-development" className="text-[#B23E13] underline">AI agent development in India</a>.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">The shortlist at a glance</h2>
      <p className="mb-4">
        Start here. Pick out the rows that fit your size and your software, then read those profiles in full.
      </p>
      <div className="overflow-x-auto mb-8 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Firm</th>
              <th className="p-3 text-left border border-gray-700">What it offers</th>
              <th className="p-3 text-left border border-gray-700">Scale it states</th>
              <th className="p-3 text-left border border-gray-700">Offices it lists</th>
            </tr>
          </thead>
          <tbody>
            {FIRMS.map((a) => (
              <tr key={a.name} className={a.name.startsWith('FactoryJet') ? 'bg-orange-50' : 'odd:bg-white even:bg-gray-50'}>
                <td className="p-3 border border-gray-200 font-semibold align-top">{a.name}</td>
                <td className="p-3 border border-gray-200 align-top">{a.type}</td>
                <td className="p-3 border border-gray-200 align-top">{a.scale}</td>
                <td className="p-3 border border-gray-200 align-top">{a.offices}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">How we built this list</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Start with what buyers ask.</strong> We used the questions Google shows for searches such as &ldquo;best ai agent development company in india&rdquo; and the prompts we put to AI search tools on 24 November 2026.</li>
        <li><strong>Keep firms that sell agent work.</strong> Each firm here describes agent development, or an agent platform, on its own site.</li>
        <li><strong>Read the source.</strong> Every description comes from the firm&rsquo;s own pages, opened on 24 November 2026 and linked on each profile.</li>
        <li><strong>Name a city only where the firm does.</strong> Where a page did not give one in the text we read, the table says so.</li>
        <li><strong>No scores we cannot prove.</strong> We have not hired these firms. We did not read review-site figures for the other firms, so we state a review figure for no firm but our own.</li>
        <li><strong>No prices for other firms.</strong> None of the ten pages we read gave a project price we could copy, so this list carries none.</li>
      </ol>

      {GROUPS.map((g) => (
        <div key={g.key}>
          <h2 className="text-2xl font-bold mt-10 mb-4">{g.heading}</h2>
          <p className="mb-6">{g.intro}</p>
          {FIRMS.filter((a) => a.group === g.key).map((a) => (
            <section key={a.name} className="mb-8">
              <h3 className="text-xl font-bold mt-6 mb-2">{a.name}</h3>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Offices:</strong> {a.offices}. <strong>Type:</strong> {a.type}.
              </p>
              <p className="mb-3">{a.what}</p>
              <ul className="list-disc pl-6 mb-3 space-y-1">
                <li><strong>Best for:</strong> {a.bestFor}</li>
                <li><strong>Scale it states:</strong> {a.scale}</li>
                <li><strong>Worth asking them:</strong> {a.ask}</li>
              </ul>
              <p className="text-sm text-gray-600">
                Source, read 24 November 2026:{' '}
                <a href={a.source} className="text-[#B23E13] underline" rel="noopener" target={a.source.startsWith('https://factoryjet.com') ? undefined : '_blank'}>
                  {a.source.replace('https://', '')}
                </a>
              </p>
            </section>
          ))}
        </div>
      ))}

      <h2 className="text-2xl font-bold mt-10 mb-4">Which kind of firm fits your business?</h2>
      <p className="mb-4">Match the sentence that sounds like you to the group that fits it.</p>
      <div className="grid gap-3 mb-8 not-prose">
        <div className="rounded-xl border border-gray-200 p-4">
          <p className="font-semibold mb-1">&ldquo;I have one job that eats my team&rsquo;s week and I want it fixed first.&rdquo;</p>
          <p className="text-gray-700 text-sm">Start with the agency group, or with FactoryJet. Ask for the agent running on a sample of your own data.</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-4">
          <p className="font-semibold mb-1">&ldquo;The agent is one piece of a larger product or platform build.&rdquo;</p>
          <p className="text-gray-700 text-sm">Look at InnovationM, Maruti Techlabs, LeewayHertz or Simform, where agents sit next to wider engineering.</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-4">
          <p className="font-semibold mb-1">&ldquo;My need is support across chat, voice and email, and I want a product.&rdquo;</p>
          <p className="text-gray-700 text-sm">Yellow.ai&rsquo;s site presents an agentic platform for service automation. Ask whether its set-up fits how you work.</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-4">
          <p className="font-semibold mb-1">&ldquo;We run Odoo or Salesforce and the agent must live inside it.&rdquo;</p>
          <p className="text-gray-700 text-sm">Ksolves lists both on its home page. FactoryJet has connected WooCommerce ordering to Odoo for Sow Easy.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">What should you ask any AI agent development company?</h2>
      <p className="mb-4">
        Take these seven questions to every call. Written answers beat a confident voice.
      </p>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Who does the coding?</strong> Your project may be handed to a different team than the one that sold it.</li>
        <li><strong>Will I see the agent on my own data before I sign?</strong> A slide deck shows nothing about your documents.</li>
        <li><strong>Is the price fixed in writing?</strong> Ask what happens to it if the scope shifts.</li>
        <li><strong>Who holds the code, prompts and workflow definitions?</strong> Get the answer in the contract.</li>
        <li><strong>What happens when the agent is wrong?</strong> Look for human approval steps, hand-off to a person and an alert when a step fails.</li>
        <li><strong>Which of my systems have you connected before?</strong> Similar is not the same as the same.</li>
        <li><strong>What does it cost to run each month?</strong> The AI model, hosting and upkeep are billed on top of the build.</li>
      </ol>

      <p className="mb-6">
        For the money side, read our guide to <a href="/blog/ai-agent-development-cost-india" className="text-[#B23E13] underline">AI agent development cost in India</a>, where each rupee figure carries its source. FactoryJet publishes no rate card, and quotes a fixed price in writing after a short scoping call.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Which pages did we read?</h2>
      <p className="mb-4">These are the pages behind the profiles above, all opened on 24 November 2026.</p>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Maruti Techlabs: <a href="https://marutitech.com/services/ai-agent-development-services/" className="text-[#B23E13] underline" rel="noopener" target="_blank">marutitech.com/services/ai-agent-development-services/</a></li>
        <li>InnovationM: <a href="https://www.innovationm.com/services/ai/development/agents/" className="text-[#B23E13] underline" rel="noopener" target="_blank">www.innovationm.com/services/ai/development/agents/</a></li>
        <li>Trigma: <a href="https://trigma.com/" className="text-[#B23E13] underline" rel="noopener" target="_blank">trigma.com/agentic-ai-services/</a></li>
        <li>Ksolves: <a href="https://www.ksolves.com/" className="text-[#B23E13] underline" rel="noopener" target="_blank">www.ksolves.com/</a></li>
        <li>Quytech: <a href="https://www.quytech.com/" className="text-[#B23E13] underline" rel="noopener" target="_blank">www.quytech.com/</a></li>
        <li>LeewayHertz: <a href="https://www.leewayhertz.com/ai-agent-development-company/" className="text-[#B23E13] underline" rel="noopener" target="_blank">www.leewayhertz.com/ai-agent-development-company/</a></li>
        <li>Simform: <a href="https://www.simform.com/about-us/" className="text-[#B23E13] underline" rel="noopener" target="_blank">www.simform.com/about-us/</a></li>
        <li>Fractal Analytics: <a href="https://www.fractal.ai/about-us/" className="text-[#B23E13] underline" rel="noopener" target="_blank">www.fractal.ai/about-us/</a></li>
        <li>Yellow.ai: <a href="https://yellow.ai/about-us/" className="text-[#B23E13] underline" rel="noopener" target="_blank">yellow.ai/about-us/</a></li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">Where does this guide stop?</h2>
      <p className="mb-4">
        We checked that each site loads, and that it says what we report. We did not test any firm&rsquo;s agents, read any contract or speak to any firm&rsquo;s clients. Review platforms such as Clutch and GoodFirms are worth a look for each firm you shortlist, and so are references you can call. The only review figures we state are our own: 5.0 on <a href="https://clutch.co/profile/factoryjet-private" className="text-[#B23E13] underline" rel="noopener" target="_blank">Clutch from 4 reviews</a> and 5.0 on <a href="https://www.goodfirms.co/company/factoryjet-private-limited" className="text-[#B23E13] underline" rel="noopener" target="_blank">GoodFirms from 5 reviews</a>.
      </p>
      <p className="mb-6">
        If you want a second opinion on a shortlist, <a href="/ai-agent-development" className="text-[#B23E13] underline">describe the job to FactoryJet</a>. We will say whether an agent fits and which type of firm on this page to call, even when it is not us.
      </p>
    </>
  ),
};

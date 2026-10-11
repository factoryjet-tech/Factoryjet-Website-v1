import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

/*
 * Intercom Fin vs Zendesk AI agents vs Salesforce Agentforce vs Gorgias AI Agent vs a custom-built agent (US, 2026).
 * Every statement about a vendor comes from that vendor's own pricing, product or help page, opened and read on
 * 11 October 2026. Dollar figures are the vendors' published list prices, plus one market range for a BUILD from
 * ProductCrafters. None of them is a FactoryJet price.
 * This page carries no figure for what a custom agent costs to run or maintain, and no per-ticket or payback sums.
 * The general build or buy choice lives in ai-agent-build-vs-buy-2026.tsx and is linked, not repeated.
 * The FAQ array below is the single source for both the visible FAQ and the FAQPage JSON-LD
 * (the blog route maps post.faqs into schema).
 */

const SRC = {
  intercomPricing: 'https://www.intercom.com/pricing',
  finPricing: 'https://fin.ai/pricing',
  finOutcomes: 'https://www.intercom.com/help/en/articles/8205718-fin-ai-agent-outcomes',
  finIntegrations: 'https://fin.ai/integrations',
  finZendesk: 'https://fin.ai/integrations/zendesk',
  finHelpdesk: 'https://fin.ai/integrations/helpdesk',
  finProcedures: 'https://fin.ai/procedures',
  zendeskPricing: 'https://www.zendesk.com/pricing/',
  zendeskAgents: 'https://www.zendesk.com/service/ai/ai-agents/',
  zendeskTiers: 'https://support.zendesk.com/hc/en-us/articles/9570369117338-About-automated-resolution-tiers',
  zendeskPriorPlatform:
    'https://support.zendesk.com/hc/en-us/articles/5352026794010-About-the-automated-resolutions-platform-prior-to-resolution-tiers',
  zendeskAgentic: 'https://support.zendesk.com/hc/en-us/articles/8966284087066-About-AI-agents-with-agentic-AI',
  zendeskIntegration:
    'https://support.zendesk.com/hc/en-us/articles/8357756844442-About-the-integration-builder-for-AI-agents',
  zendeskVoice: 'https://support.zendesk.com/hc/en-us/articles/10169333291290-About-voice-AI-agents',
  agentforcePricing: 'https://www.salesforce.com/agentforce/pricing/',
  agentforceHow: 'https://www.salesforce.com/agentforce/how-it-works/',
  agentforceVoice: 'https://www.salesforce.com/agentforce/voice/',
  servicePricing: 'https://www.salesforce.com/service/pricing/',
  gorgiasPricing: 'https://www.gorgias.com/pricing',
  gorgiasAgent: 'https://www.gorgias.com/ai-agent',
  gorgiasDocs: 'https://docs.gorgias.com/en-US/ai-agent-explained-497772',
  productCrafters: 'https://productcrafters.io/blog/how-much-does-it-cost-to-build-an-ai-agent/',
};

const faqs: FAQItem[] = [
  // The buyer questions, in the buyer's own words
  {
    q: 'What is the best AI agent for customer service?',
    a: 'There is no single best one. The right fit depends on where your tickets live. If your team works in Zendesk, start with Zendesk AI agents, which are included in every Suite and Support plan. If you want to keep your help desk and add an agent, Intercom Fin runs on Zendesk, Salesforce, HubSpot and Freshdesk. Shopify brands should look at Gorgias AI Agent, and companies run on Salesforce at Agentforce. A custom agent fits when the work needs systems those four cannot reach.',
  },
  {
    q: 'Should I build or buy an AI agent for customer support?',
    a: 'Buy first if your tickets are common ones and the systems behind them have a modern API. Fin, Zendesk AI agents, Agentforce and Gorgias AI Agent can all take actions in connected systems, and their makers say setup takes minutes or under an hour. Build when a system the agent needs has no API the vendor can call, when a rule crosses several systems and needs approval, or when the work happens outside the help desk. You can also keep the rented agent and have only the missing piece built.',
  },
  {
    q: 'I\'m weighing a no-code AI agent platform versus hiring developers to build bots. What\'s the real cost and ROI difference?',
    a: 'A no-code platform has no build fee and bills by result: $0.99 per Fin outcome, $1.50 to $2.00 per Zendesk automated resolution beyond the plan allowance, $0.85 to $1.00 per Gorgias automated interaction (vendor pages, 11 October 2026). A custom build is a project price. Development firm ProductCrafters puts initial development of a customer service agent at $10,000 to $50,000. The return depends on what the agent can finish. A platform pays back fastest on common tickets. A build pays when the tickets that reach your team need systems or rules the platform cannot handle.',
  },
  // Named products: price and what they are
  {
    q: 'How much does Fin AI cost?',
    a: 'Intercom lists Fin at $0.99 per outcome on every plan. With the Intercom help desk you also pay for seats: $19, $85 or $132 per seat per month on the Essential, Advanced and Expert plans, paid annually. On another help desk such as Zendesk or Salesforce there are no seat costs, and a minimum of 50 outcomes a month applies. Intercom says you are charged at most once per conversation. Prices read on intercom.com and fin.ai on 11 October 2026.',
  },
  {
    q: 'What is Fin vs Intercom?',
    a: 'Intercom is the company and its help desk: the shared inbox, tickets, help center and reporting your team works in. Fin is the AI agent Intercom built, which answers customers and can take actions. You can buy them together, or buy Fin alone and run it on a help desk you already have. Intercom lists Zendesk, Salesforce Service Cloud, HubSpot Service Hub and Freshdesk, plus any other help desk over an API.',
  },
  {
    q: 'How much does Intercom cost per month?',
    a: 'The Intercom pricing page lists three help desk plans, paid annually: Essential at $19 per seat per month, Advanced at $85 and Expert at $132. Usage comes on top. Fin is $0.99 per outcome, the Copilot assistant is $29 per teammate per month, and channels such as SMS, WhatsApp and phone are billed by use. Advanced includes 20 free Lite seats and Expert 50. Figures read on 11 October 2026.',
  },
  {
    q: 'Does Zendesk have an AI agent?',
    a: 'Yes. Zendesk says its AI agents are included in every Suite and Support plan and work on messaging, email and voice. They follow procedures generated from a plain-language description of your policy, and they can call outside systems through custom actions and API integrations. Voice AI agents need Zendesk voice. Zendesk also sells Forethought AI agents for teams on other service platforms.',
  },
  {
    q: 'How much does a Zendesk AI agent cost?',
    a: 'You pay for agent seats, then for automated resolutions beyond an allowance. Seats list at $19, $55 or $115 per agent per month, paid yearly, for Support Team, Suite Team and Suite Professional. Those plans include 5, 5 and 10 automated resolutions per agent per month. Extra resolutions list at $1.50 each if committed in advance or $2.00 pay-as-you-go. On the resolution tiers Zendesk introduced on 18 May 2026, only verified resolutions draw on the allowance. Read on zendesk.com on 11 October 2026.',
  },
  {
    q: 'What are the pricing plans for Zendesk?',
    a: 'The Zendesk US pricing page showed four customer service plans on 11 October 2026. Support Team is $19 per agent per month, Suite Team $55 and Suite Professional $115, all paid yearly, or $25, $69 and $149 paid monthly. Suite Enterprise is sold through the sales team. Add-ons include Copilot at $50 per agent per month and Contact Center at $83. AI agents are in every plan, with extra automated resolutions at $1.50 to $2.00 each.',
  },
  {
    q: 'How much does Agentforce cost?',
    a: 'Salesforce lists three ways to pay. Flex Credits cost $500 per 100,000 credits, and a standard action uses 20 credits, which the examples on the Salesforce pricing page price at $0.10. Conversations cost $2 each for customer-facing agents. For staff use, Agentforce add-ons list at $125 per user per month and Max editions from $550. Salesforce licenses are separate, and the page says its examples leave out Data 360 credits. Read on salesforce.com on 11 October 2026.',
  },
  {
    q: 'What do I need before I can use Agentforce?',
    a: 'You need Salesforce. Agentforce runs on the Salesforce Platform and builds its actions from your existing flows, prompt templates, Apex code and APIs. Salesforce says customers can try it through Salesforce Foundations, a $0 add-on for Enterprise Edition and higher that includes credits for the first 1,000 conversations with Agentforce for Service. You also need an admin or developer who knows flows, because that is how the agent gets its actions.',
  },
  {
    q: 'How much does Gorgias charge?',
    a: 'Gorgias prices its help desk by ticket volume. On 11 October 2026 its page listed Starter at $10 a month for 50 tickets, then Basic at $50, Pro at $300 and Advanced at $750 a month when billed annually, for 300, 2,000 and 5,000 tickets. AI Agent is extra: $1.00 per automated interaction on Starter, $0.90 on Basic and Pro, and $0.85 on Advanced. Gorgias says its help desk is never priced per agent.',
  },
  // Alternatives and head-to-head searches
  {
    q: 'What are the best Zendesk alternatives?',
    a: 'It depends on what you want to leave behind. If the issue is the AI agent, you can keep Zendesk and add Intercom Fin on top, which Intercom says needs no migration. If the issue is per-agent pricing and you sell on Shopify, Gorgias prices by ticket volume. If your company already runs on Salesforce, Service Cloud with Agentforce keeps support next to your CRM. If the gap is one action Zendesk cannot take, a custom action or a custom agent fills it.',
  },
  {
    q: 'Who is Zendesk\'s biggest competitor?',
    a: 'We found no single rival named on the Zendesk pages we read. Going by what US buyers search, the comparison made most often among the products in this guide is Zendesk vs Intercom, at about 320 searches a month, against about 50 for Gorgias vs Zendesk (DataForSEO, 11 October 2026). On AI agents the lines are blurring. Intercom sells Fin to run on top of Zendesk, and Zendesk sells Forethought AI agents for other platforms.',
  },
  {
    q: 'Is Zendesk the same as Salesforce?',
    a: 'No. They are separate companies with separate products. Zendesk sells a customer service help desk priced per agent. Salesforce sells a CRM platform, and Service Cloud is its customer service product, with Agentforce as its AI agent layer. A company can run either one for support. Intercom Fin can be added on top of both.',
  },
  {
    q: 'What are the best Intercom alternatives?',
    a: 'For the help desk, this guide covers three: Zendesk for general support teams, Gorgias for Shopify brands, and Salesforce Service Cloud for companies whose customer records already live in Salesforce. For the AI agent, Zendesk AI agents and Gorgias AI Agent come with their own help desks, and Zendesk sells Forethought for other platforms. A custom agent is the alternative when none of them can reach your systems.',
  },
  {
    q: 'Who are Gorgias competitors?',
    a: 'Gorgias names the firms it compares itself with in its own site footer, among them Zendesk, Kustomer, Gladly, Intercom, Richpanel, Re:amaze, Zowie, Ada, Siena and Yuma. This guide covers Zendesk and Intercom from that list. For a Shopify brand the practical choice is between Gorgias with its order actions, a general help desk plus an agent such as Fin, or a custom agent when orders and stock live outside Shopify.',
  },
  {
    q: 'What are the key differences between Gorgias and Zendesk?',
    a: 'The main differences are on their own pricing pages. Gorgias prices by ticket volume and says it never charges per agent, while Zendesk charges per agent seat. The Gorgias AI Agent is set up per Shopify store with a library of order actions, while Zendesk AI agents are not tied to a store platform and reach other systems through custom actions. Zendesk sells voice AI agents. Gorgias sells voice and SMS as add-ons to its help desk.',
  },
  {
    q: 'Can I use Intercom Fin without moving off Zendesk?',
    a: 'Yes. Intercom sells Fin for Zendesk. Its page says Fin connects to your Zendesk instance via API, works on Zendesk tickets and messaging, updates tickets and custom fields, and hands off to your agents inside Zendesk. Pricing is $0.99 per outcome with minimum commitments and no per-agent cost from Intercom. You still pay Zendesk for your seats. Intercom says most teams go live in under an hour.',
  },
  {
    q: 'I already use Zendesk. Should I choose Zendesk AI agents or Fin?',
    a: 'Test both on the same tickets. Zendesk AI agents are already in your plan with a monthly allowance of automated resolutions, so there is no second contract. Fin for Zendesk bills $0.99 per outcome with a minimum commitment and adds no seats. The two count results differently, so a price per unit will not settle it. Run each on 20 real tickets, including a few it should refuse, and compare what reaches your team.',
  },
  // What each can and cannot do
  {
    q: 'Can a rented support agent issue refunds or change orders?',
    a: 'Yes, on the right plan and with the right connection. Gorgias lists refund, cancel, edit order and update address among its AI Agent actions, on the Basic plan or higher. Intercom says Fin can issue refunds through Procedures and Data Connectors. Zendesk AI agents and Agentforce run actions you define against your systems. In every case someone must connect the system, set the limits and test the action before it goes live.',
  },
  {
    q: 'What can a custom AI agent do that Fin or Zendesk AI agents cannot?',
    a: 'It can work where their builders cannot reach. Fin connects to tools that have an API or an MCP server, and the Zendesk integration builder sends JSON requests. A custom agent can also read EDI files, query a database on your own server, apply approval rules that span your help desk and your ERP, and do work that is not a support ticket, such as quoting or order entry. You also own what is built.',
  },
  {
    q: 'Can I keep Fin or Zendesk AI agents and add custom work on top?',
    a: 'Yes, and it is usually the smaller project. Fin accepts custom REST API connectors and custom MCP servers. Zendesk AI agents call custom actions and API integrations. Gorgias lets you build a custom action to any API or app, and Agentforce turns your APIs into agent actions. So a developer can build one API in front of your ERP or order system, and the rented agent calls it. You keep the vendor for the conversation and the reporting.',
  },
  {
    q: 'Which AI support agents can answer the phone?',
    a: 'Intercom offers Fin Voice through its sales team. Zendesk voice AI agents need Zendesk voice and add telephony, connection-time and recording charges. Salesforce sells Agentforce Voice, where a voice action uses 30 Flex Credits. Gorgias docs list email, chat, SMS and social channels for its AI Agent, and Gorgias sells voice as a help desk add-on. FactoryJet builds custom AI voice agents for call centers as well as small offices, for calls that must read and write your own systems.',
  },
  // Building one
  {
    q: 'How much does it cost to build a custom AI customer service agent?',
    a: 'As a market reference, development firm ProductCrafters puts initial development of a customer service AI agent at $10,000 to $50,000, and at $25,000 to $50,000 for agents that handle refunds, access order data and escalate complex issues (page modified 20 May 2026, read 11 October 2026). Those are market figures and no FactoryJet price. FactoryJet quotes the build and the ongoing support as fixed prices in writing after a short scoping call.',
  },
  {
    q: 'What does it cost to run and maintain a custom AI agent?',
    a: 'It depends on the systems, the channels and the volume in your scope, so we quote it for your case. FactoryJet quotes the build and the ongoing support as fixed prices in writing after a short scoping call, so you see both numbers before you commit. After launch we keep managing the servers, the AI, the APIs and the maintenance, so your team does not have to.',
  },
  {
    q: 'How long does a custom support agent take to build?',
    a: 'Longer than switching on a rented one. As a guide, a pilot on one narrow workflow usually takes two to four weeks, and a production agent with permissions, logging and monitoring usually takes six to twelve weeks. The vendors in this guide say their agents can be set up in minutes or under an hour, though writing procedures and connecting systems takes longer. Build only when the rented route cannot do the job.',
  },
  {
    q: 'Who owns a custom-built support agent?',
    a: 'You do. With FactoryJet the client owns what we build. That differs from a rented agent, where your procedures and settings live inside the vendor product. Ownership matters most when you expect to change help desk or add channels later. We design, build, implement and support the agent, and we stay on after launch.',
  },
  {
    q: 'Can we see a custom agent working before we sign?',
    a: 'Yes. FactoryJet can show working software on your own data before a contract. For a support agent that means a sample of your real tickets and policies, so you can read the answers and see which conversations it hands to a person. The rented agents offer trials too. Intercom and Zendesk each list a 14-day free trial, and Gorgias offers a free trial.',
  },
  {
    q: 'How does FactoryJet price a custom support agent?',
    a: 'We do not publish a price list, and nothing on this page is a FactoryJet price. FactoryJet quotes the build and the ongoing support as fixed prices in writing after a short scoping call. After launch we keep managing the servers, the AI, the APIs and the maintenance. We work remotely with US clients and schedule calls in US business hours.',
  },
];

export const post: BlogPost = {
  id: '757',
  slug: 'intercom-fin-vs-zendesk-ai-vs-custom-ai-agent-2026',
  title: 'Intercom Fin vs Zendesk AI vs a Custom AI Agent: What Each Can and Cannot Do (2026)',
  excerpt:
    'Intercom Fin, Zendesk AI agents, Salesforce Agentforce and Gorgias AI Agent compared with a custom-built support agent: the help desk each runs on, the channels it answers, the systems it can act on, what each vendor bills for, and when renting or building is the right call. Every vendor fact was read on that vendor\'s own page on 11 October 2026.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Oct 11, 2026',
  dateModified: 'Oct 11, 2026',
  readTime: '23 min read',
  imageUrl: '/images/blog/intercom-fin-vs-zendesk-ai-vs-custom-ai-agent-2026/hero.webp',
  imageAlt:
    'A woman in a navy sweater and a man in a gray shirt stand at a wooden table looking down at five blank cards in a row, four gray and one orange, as she touches the orange card.',
  meta: {
    title: 'Intercom Fin vs Zendesk AI vs Custom AI Agent (2026)',
    description:
      'Fin, Zendesk AI agents, Agentforce and Gorgias compared with a custom build: list prices, channels and the systems each can act on. Read 11 Oct 2026.',
  },
  keyTakeaways: [
    'Rent when your tickets are common ones and the systems behind them have a modern API. Build when the work crosses systems the vendor builders cannot reach, needs approval rules across systems, or happens outside the help desk.',
    'Intercom Fin lists at $0.99 per outcome and runs on Intercom, Zendesk, Salesforce Service Cloud, HubSpot Service Hub and Freshdesk. On another help desk a minimum of 50 outcomes a month applies (intercom.com and fin.ai, 11 October 2026).',
    'Zendesk AI agents are in every Suite and Support plan. Extra automated resolutions list at $1.50 committed or $2.00 pay-as-you-go. Since 18 May 2026 Zendesk sorts results into three tiers, and only verified resolutions draw on the allowance.',
    'Salesforce Agentforce lists at $500 per 100,000 Flex Credits, with 20 credits per standard action, or $2 per conversation. It builds its actions from flows, Apex and APIs you already have in Salesforce.',
    'Gorgias AI Agent lists at $0.85 to $1.00 per automated interaction and is set up per connected Shopify store. Its order actions need the Basic plan or higher.',
    'The four billing units are four different things, so the prices cannot be lined up as dollars per ticket. Read what each vendor counts before you compare.',
    'You can keep a rented agent and have only the missing piece built. All four accept custom actions or API connectors.',
    'No figure on this page is a FactoryJet price. FactoryJet quotes the build and the ongoing support as fixed prices in writing after a short scoping call.',
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
          <strong>Rent a support agent</strong> when your tickets sit in one help desk and the answers live in your help
          center plus systems with a modern API. Intercom Fin, Zendesk AI agents, Salesforce Agentforce and Gorgias AI
          Agent all do that job. <strong>Have an agent built</strong> when the work crosses systems their builders
          cannot reach, or happens outside the help desk.
        </p>
      </div>

      <div className="bg-[#FAF8F5] border-l-4 border-[#B23E13] p-5 rounded-r-lg mb-10">
        <p className="text-sm text-[#1F2937] leading-relaxed mb-0">
          <strong>We build custom agents, so weigh this page with that in mind.</strong> Every statement about Intercom,
          Zendesk, Salesforce and Gorgias comes from that company&apos;s own pricing, product or help page, opened and
          read on 11 October 2026 and linked where it appears. The dollar figures are those vendors&apos; published list
          prices, plus one market range for a build from a named firm. None of them is a FactoryJet price. Vendors
          change prices and plan names often, so check the linked page before you budget.
        </p>
      </div>

      <p>
        Four vendors sell a ready-made AI support agent that US buyers search for by name: Intercom (Fin), Zendesk (AI
        agents), Salesforce (Agentforce) and Gorgias (AI Agent). On 11 October 2026 we opened 21 pages on those four
        companies&apos; own sites, a mix of pricing pages, product pages and help articles. This guide sets what we read
        next to a fifth option, an agent built for you.
      </p>
      <p>
        Several of the comparison pages we read line these products up by price per ticket. That does not work, because
        the four bill in four different units and a custom build is priced as a project. So this guide compares them on
        what each can do: the help desk it runs on, the channels it answers, the systems it can act on, and what it needs
        from you.
      </p>
      <p>
        The general choice between building and buying, with builders such as n8n, Make and Copilot Studio, is in our{' '}
        <a href="/blog/ai-agent-build-vs-buy-2026">build versus buy guide for AI agents</a>. We do not repeat it here.
      </p>
      <p>
        We are FactoryJet, an AI services company that designs, builds, implements and supports custom AI agents and the
        integrations behind them. FactoryJet was founded in 2014 by Bhavesh Barot and has served more than 500
        businesses. A custom build is what we sell, so this page also says plainly where a rented agent is the better
        choice.
      </p>

      <h2 id="at-a-glance">Fin, Zendesk AI, Agentforce, Gorgias and a custom agent at a glance</h2>
      <p>
        Start with the column on the right. The best first choice is usually the agent that belongs to the place your
        tickets already live.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Option</th>
              <th className="p-3 text-left border border-gray-700">Runs on</th>
              <th className="p-3 text-left border border-gray-700">Bills by (list price)</th>
              <th className="p-3 text-left border border-gray-700">Best starting point</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">
                <a href={SRC.finPricing} target="_blank" rel="noopener noreferrer">Intercom Fin</a>
              </td>
              <td className="p-3 border border-gray-200">
                Intercom, or the help desk you have: Zendesk, Salesforce Service Cloud, HubSpot Service Hub, Freshdesk,
                or any other over an API
              </td>
              <td className="p-3 border border-gray-200">
                $0.99 per outcome. On another help desk, a minimum of 50 outcomes a month
              </td>
              <td className="p-3 border border-gray-200">You want to keep your help desk and add an agent on top</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">
                <a href={SRC.zendeskPricing} target="_blank" rel="noopener noreferrer">Zendesk AI agents</a>
              </td>
              <td className="p-3 border border-gray-200">Zendesk Suite and Support plans</td>
              <td className="p-3 border border-gray-200">
                Automated resolutions: an allowance in the plan, then $1.50 committed or $2.00 pay-as-you-go
              </td>
              <td className="p-3 border border-gray-200">Your team already works in Zendesk</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">
                <a href={SRC.agentforcePricing} target="_blank" rel="noopener noreferrer">Salesforce Agentforce</a>
              </td>
              <td className="p-3 border border-gray-200">The Salesforce Platform</td>
              <td className="p-3 border border-gray-200">
                $500 per 100,000 Flex Credits at 20 credits per standard action, or $2 per conversation
              </td>
              <td className="p-3 border border-gray-200">
                Your cases, flows and customer records already live in Salesforce
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">
                <a href={SRC.gorgiasPricing} target="_blank" rel="noopener noreferrer">Gorgias AI Agent</a>
              </td>
              <td className="p-3 border border-gray-200">
                The Gorgias help desk, with one AI Agent per connected Shopify store
              </td>
              <td className="p-3 border border-gray-200">$0.85 to $1.00 per automated interaction, by plan</td>
              <td className="p-3 border border-gray-200">A Shopify brand whose tickets are about orders</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">A custom-built agent</td>
              <td className="p-3 border border-gray-200">
                Inside your help desk through its API, or in a channel of your own
              </td>
              <td className="p-3 border border-gray-200">
                A project price. FactoryJet quotes the build and the ongoing support as fixed prices in writing
              </td>
              <td className="p-3 border border-gray-200">
                The work crosses systems the rented builders cannot reach, or happens outside the help desk
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="pricing-units">What each vendor charges, and what counts as a billable result</h2>
      <p>
        Read the unit before the price. An outcome, an automated resolution, an action and an automated interaction are
        four different things, and each vendor writes its own definition.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Vendor</th>
              <th className="p-3 text-left border border-gray-700">Unit and list price</th>
              <th className="p-3 text-left border border-gray-700">What you also pay the vendor</th>
              <th className="p-3 text-left border border-gray-700">Counted when</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">
                <a href={SRC.intercomPricing} target="_blank" rel="noopener noreferrer">Intercom Fin</a>
              </td>
              <td className="p-3 border border-gray-200">Outcome, $0.99</td>
              <td className="p-3 border border-gray-200">
                Intercom seats at $19, $85 or $132 per seat per month, paid annually. Or no seats and a 50-outcome
                monthly minimum on another help desk
              </td>
              <td className="p-3 border border-gray-200">
                The customer confirms the answer helped or leaves without asking for more, or Fin completes a Procedure
                you set to end in a handoff. At most one per conversation
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">
                <a href={SRC.zendeskPricing} target="_blank" rel="noopener noreferrer">Zendesk AI agents</a>
              </td>
              <td className="p-3 border border-gray-200">
                Automated resolution. 5, 5 and 10 per agent per month are included on Support Team, Suite Team and Suite
                Professional, then $1.50 committed or $2.00 pay-as-you-go
              </td>
              <td className="p-3 border border-gray-200">
                Agent seats at $19, $55 or $115 per agent per month, paid yearly
              </td>
              <td className="p-3 border border-gray-200">
                The customer asks for nothing more and a model check at the end of the conversation confirms the request
                was resolved
              </td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">
                <a href={SRC.agentforcePricing} target="_blank" rel="noopener noreferrer">Salesforce Agentforce</a>
              </td>
              <td className="p-3 border border-gray-200">
                Action: $500 per 100,000 Flex Credits, at 20 credits per standard action and 30 per voice action. Or
                conversation: $2 each
              </td>
              <td className="p-3 border border-gray-200">
                Salesforce licenses.{' '}
                <a href={SRC.servicePricing} target="_blank" rel="noopener noreferrer">Service Cloud editions</a> list at
                $25 to $550 per user per month
              </td>
              <td className="p-3 border border-gray-200">
                Each action the agent runs draws credits. Salesforce says its examples leave out Data 360 credits and
                other consumption services
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">
                <a href={SRC.gorgiasPricing} target="_blank" rel="noopener noreferrer">Gorgias AI Agent</a>
              </td>
              <td className="p-3 border border-gray-200">
                Automated interaction: $1.00 on Starter, $0.90 on Basic and Pro, $0.85 on Advanced
              </td>
              <td className="p-3 border border-gray-200">
                A help desk plan by ticket volume: $10 a month for 50 tickets, up to $750 a month for 5,000 when billed
                annually
              </td>
              <td className="p-3 border border-gray-200">
                Gorgias says you pay only when the AI Agent resolves a conversation
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Four details in those definitions change what a bill looks like.</p>
      <ul className="list-disc pl-6 space-y-3 mb-6">
        <li>
          <strong>Fin bills an assumed resolution.</strong>{' '}
          <a href={SRC.finOutcomes} target="_blank" rel="noopener noreferrer">Intercom&apos;s outcomes article</a>{' '}
          counts a resolution when the customer confirms the answer helped, and also when the customer leaves without
          asking for more. A handoff counts too if you wrote it into a Procedure. Intercom says it does not bill when a
          customer asks for a human or a Procedure fails, and that it deducts the charge if the customer comes back to
          the same conversation for more help.
        </li>
        <li>
          <strong>Zendesk changed how it counts on 18 May 2026.</strong> Its help center now describes{' '}
          <a href={SRC.zendeskTiers} target="_blank" rel="noopener noreferrer">three resolution tiers</a>. An assisted
          escalation (the agent helped, a person finished) and a contained resolution (the customer asked for nothing
          more, but the model check did not confirm the fix) do not count against your allowance. A verified
          resolution, which passed the check, does. Accounts on{' '}
          <a href={SRC.zendeskPriorPlatform} target="_blank" rel="noopener noreferrer">the earlier platform</a> stay
          there until they move, so ask Zendesk which one yours is on.
        </li>
        <li>
          <strong>Agentforce meters work done.</strong> Each action draws Flex Credits, and the worked examples on the
          Salesforce pricing page price one standard action at $0.10. We found nothing on that page that ties the
          charge to a resolved conversation. The $2 per conversation option is the alternative for customer-facing
          agents.
        </li>
        <li>
          <strong>Gorgias gates actions by plan.</strong> Its plan comparison table shows Actions and brand voice
          controls on Basic, Pro and Advanced, and a dash under Starter.
        </li>
      </ul>

      <h3 id="headline-rates">The headline resolution rates are not measured the same way</h3>
      <p>
        Each vendor leads with a number. Intercom says{' '}
        <a href={SRC.finZendesk} target="_blank" rel="noopener noreferrer">Fin resolves 76 percent of customer queries
        on average</a>. Zendesk&apos;s pricing page says its AI agents resolve up to 80 percent or more of service
        issues. Gorgias shows{' '}
        <a href={SRC.gorgiasAgent} target="_blank" rel="noopener noreferrer">48 to 53 percent of conversations
        automated</a> across five industries. One is an average, one is a ceiling and one is a set of industry figures,
        and each vendor counts a resolution its own way.
      </p>
      <p>
        The Gorgias page is the most useful of the three, because it breaks the number down by type of conversation.
        For fashion and apparel brands over the last 90 days it shows 82 percent of product questions closed by the AI
        Agent, and 31 percent of billing and account conversations. Questions answered from content close at a high
        rate. Conversations that need a billing or account system close at a much lower one. That gap is where
        connectors, custom actions and custom builds earn their place.
      </p>

      <h3 id="custom-build-price">What a custom build costs to commission</h3>
      <p>
        A custom agent is priced as a project. As a market reference, development firm{' '}
        <a href={SRC.productCrafters} target="_blank" rel="noopener noreferrer">ProductCrafters</a> puts initial
        development of a customer service AI agent at $10,000 to $50,000, and at $25,000 to $50,000 for agents that
        handle refunds, access order data and escalate complex issues (page modified 20 May 2026). That is a market
        range from a named firm and no FactoryJet price. FactoryJet quotes the build and the ongoing support as fixed
        prices in writing after a short scoping call, and we keep managing the servers, the AI, the APIs and the
        maintenance so your team does not have to.
      </p>

      <h2 id="channels-systems">Which channels each agent answers, and which systems it can act on</h2>
      <p>
        All four rented agents can now take actions, and none of them is limited to quoting help articles. So the old
        split between a chatbot and an agent no longer separates them from a custom build. Two narrower questions do:
        whether the vendor&apos;s builder can reach the system, and whether it can express your rule.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Option</th>
              <th className="p-3 text-left border border-gray-700">Channels it answers on</th>
              <th className="p-3 text-left border border-gray-700">How it acts on your other systems</th>
              <th className="p-3 text-left border border-gray-700">What it needs from you</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Intercom Fin</td>
              <td className="p-3 border border-gray-200">
                Chat, email, WhatsApp, SMS, Instagram, Facebook Messenger, Slack and Discord, plus phone through Fin
                Voice
              </td>
              <td className="p-3 border border-gray-200">
                Data Connectors over MCP or a REST API. Its{' '}
                <a href={SRC.finIntegrations} target="_blank" rel="noopener noreferrer">integrations page</a> listed 60
                connectors on 11 October 2026: 45 APIs and MCP, 6 help desks and 9 channels
              </td>
              <td className="p-3 border border-gray-200">
                Help center content, someone to write Procedures in plain language, and an API or MCP server for each
                system Fin should act on
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Zendesk AI agents</td>
              <td className="p-3 border border-gray-200">
                Messaging (web, in-app chat and social), email, and voice if you have Zendesk voice
              </td>
              <td className="p-3 border border-gray-200">
                Custom actions and API integrations set up in a{' '}
                <a href={SRC.zendeskIntegration} target="_blank" rel="noopener noreferrer">no-code builder</a>. Request
                bodies are JSON only
              </td>
              <td className="p-3 border border-gray-200">
                A Zendesk Suite or Support plan, a Client Admin to build integrations, and a clear written description
                of each API
              </td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Salesforce Agentforce</td>
              <td className="p-3 border border-gray-200">
                Your website, WhatsApp, Messenger and the CRM itself, plus phone through Agentforce Voice
              </td>
              <td className="p-3 border border-gray-200">
                Actions made from your{' '}
                <a href={SRC.agentforceHow} target="_blank" rel="noopener noreferrer">existing flows, prompt templates,
                Apex code and APIs</a>, with MuleSoft for outside systems
              </td>
              <td className="p-3 border border-gray-200">
                Salesforce licenses, plus an admin or developer who knows flows and Apex
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Gorgias AI Agent</td>
              <td className="p-3 border border-gray-200">
                Email, chat, SMS, Instagram DMs, Facebook Messenger and WhatsApp
              </td>
              <td className="p-3 border border-gray-200">
                A library of more than 130 actions centered on Shopify orders, plus custom actions to any API or app.
                Actions need the Basic plan or higher
              </td>
              <td className="p-3 border border-gray-200">
                A Shopify store, written policies, and a support lead to set up skills
              </td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">A custom-built agent</td>
              <td className="p-3 border border-gray-200">
                The channels you choose: your help desk, your site, email, WhatsApp or the phone
              </td>
              <td className="p-3 border border-gray-200">
                Through whatever each system exposes: an API, a database, a file drop, EDI messages or an inbox
              </td>
              <td className="p-3 border border-gray-200">
                Ticket history or an export, written policies, access to each system, and a named owner on your side
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <figure className="my-8">
        <img
          src="/images/blog/intercom-fin-vs-zendesk-ai-vs-custom-ai-agent-2026/systems.webp"
          alt="A gray-haired man in a gray work shirt stands between white stock room shelves holding a plain cardboard box under one arm and reading a clipboard, with an orange crate on a low shelf."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Most support answers end in a system of record: the order, the stock count, the return. The agent is only as
          useful as its reach into that system.
        </figcaption>
      </figure>

      <h2 id="intercom-fin">Intercom Fin: an agent you can add to the help desk you already have</h2>
      <p>
        Fin is the AI agent made by Intercom. It runs inside the Intercom help desk, and Intercom also sells it on its
        own for teams on another help desk. Its integrations page lists Zendesk, Salesforce Service Cloud, HubSpot
        Service Hub and Freshdesk, plus{' '}
        <a href={SRC.finHelpdesk} target="_blank" rel="noopener noreferrer">any other help desk over an API</a>. On
        Zendesk, <a href={SRC.finZendesk} target="_blank" rel="noopener noreferrer">Intercom says</a> Fin connects
        through the API, updates tickets and custom fields, and hands off to your agents inside Zendesk.
      </p>
      <p>
        For multi-step work Fin uses{' '}
        <a href={SRC.finProcedures} target="_blank" rel="noopener noreferrer">Procedures</a>. Your support team writes
        the steps in plain language, adds if/else rules, uses code where a rule must be exact, and connects systems
        such as Stripe or Shopify through Data Connectors. Intercom says Procedures need &quot;no engineering or custom
        builds&quot;. Its ecommerce example has Fin checking an order, confirming the change and issuing a refund.
      </p>
      <p>
        <strong>Where it fits.</strong> You want to keep your help desk, your help center content is in good shape, and
        the systems Fin must act on have an API or an MCP server (a standard way for AI tools to call other software).
      </p>
      <p>
        <strong>Where it stops.</strong> Every connector goes through an API or MCP. The Fin integrations FAQ says,
        &quot;If your tool has an API, you can connect it to Fin.&quot; A system with no API needs one built in front of
        it first. On a help desk other than Intercom, a minimum of 50 outcomes a month applies.
      </p>
      <p>
        Confirm phone pricing in writing. The Intercom pricing page lists Fin Voice at $1.99 per voice outcome through
        its sales team, while the Fin pricing page says voice is on a custom pricing plan for select customers.
      </p>

      <h2 id="zendesk-ai-agents">Zendesk AI agents: included in the plan, billed on verified resolutions</h2>
      <p>
        Zendesk says AI agents are included in every Suite and Support plan. They{' '}
        <a href={SRC.zendeskAgentic} target="_blank" rel="noopener noreferrer">answer on messaging, email and voice</a>.
        You describe a policy in plain language, Zendesk generates a procedure from it, and the agent follows that
        procedure while it reasons through the conversation. The pricing page lists support for more than 80 languages.
      </p>
      <p>
        To act on other systems, a Zendesk AI agent calls custom actions and API integrations. The help article on the
        no-code integration builder lists six ways to sign in to an API (API key, bearer token, basic auth, OAuth 2.0,
        AWS signature and a custom option) and says request bodies support JSON only so far. The same article says new
        integrations should now be created as custom actions, and that access is limited to Client Admins.
      </p>
      <p>
        Voice needs Zendesk voice.{' '}
        <a href={SRC.zendeskVoice} target="_blank" rel="noopener noreferrer">Zendesk says</a> voice AI agent calls carry
        telephony charges, a charge for the time the agent is on the call and a recording charge, and can also use
        automated resolutions.
      </p>
      <p>
        <strong>Where it fits.</strong> Your team already works in Zendesk. The agent is in the plan, the allowance is
        in the plan, and there is one vendor to deal with.
      </p>
      <p>
        <strong>Where it stops.</strong> Seats are priced per human agent, and the systems the agent can reach are the
        ones with a JSON API. For teams on another platform, Zendesk now sells Forethought AI agents, which its pricing
        page describes as working whether you use Zendesk or another service provider.
      </p>

      <figure className="my-8">
        <img
          src="/images/blog/intercom-fin-vs-zendesk-ai-vs-custom-ai-agent-2026/rented.webp"
          alt="A woman with curly dark hair in a green cardigan sits at a white desk wearing black headphones and writing in a paper notebook, with an orange mug and a green plant beside her."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          With a rented agent, your support lead writes the procedures. Clear written policies are what every one of
          these products runs on.
        </figcaption>
      </figure>

      <h2 id="agentforce">Salesforce Agentforce: actions built from what already lives in Salesforce</h2>
      <p>
        Agentforce is the agent layer of the Salesforce Platform.{' '}
        <a href={SRC.agentforceHow} target="_blank" rel="noopener noreferrer">Salesforce says</a> you can turn your
        existing workflows, prompt templates, Apex code and APIs into agent actions, with MuleSoft, Slack and Data 360
        available as tools. It offers ready-made agents for service, sales, marketing and commerce, and says agents
        connect to your website, WhatsApp, Messenger and the CRM itself.{' '}
        <a href={SRC.agentforceVoice} target="_blank" rel="noopener noreferrer">Agentforce Voice</a> covers phone calls.
      </p>
      <p>
        There are three ways to pay. Flex Credits cost $500 per 100,000, at 20 credits per standard action.
        Conversations cost $2 each for customer-facing agents. Per-user licenses cover staff-facing use, with add-ons
        at $125 per user per month and Agentforce Max editions from $550. The Salesforce licenses underneath are
        separate. Service Cloud editions listed at $25 to $550 per user per month when we read the page.
      </p>
      <p>
        The edition names differ between two Salesforce pages. The Service Cloud pricing page lists Starter Suite, Pro
        Suite, Core, Advanced and Max. The Agentforce FAQ says Foundations, the $0 way to try it with credits for the
        first 1,000 Agentforce for Service conversations, is an add-on for &quot;Enterprise Edition and higher&quot;.
        Ask your account executive which editions qualify today.
      </p>
      <p>
        <strong>Where it fits.</strong> Your cases, customer records and automations already live in Salesforce, and you
        have an admin or developer who knows flows.
      </p>
      <p>
        <strong>Where it stops.</strong> Outside Salesforce. The agent reaches other systems through APIs and MuleSoft,
        which is integration work whichever tool does it. The pricing page also notes that its worked examples leave
        out Data 360 credits and other consumption services.
      </p>

      <h2 id="gorgias">Gorgias AI Agent: built around a Shopify store</h2>
      <p>
        Gorgias is a help desk made for ecommerce. Its pricing page says the help desk is &quot;never priced per
        agent&quot;. Plans go by ticket volume, from 50 tickets a month to 5,000.
      </p>
      <p>
        The AI Agent is tied to the store.{' '}
        <a href={SRC.gorgiasDocs} target="_blank" rel="noopener noreferrer">Gorgias docs</a> say, &quot;You get a
        dedicated AI Agent for each Shopify store you connect.&quot; It answers on email, chat, SMS, Instagram DMs,
        Facebook Messenger and WhatsApp, in more than 80 languages. It plays two roles: support agent after the
        purchase and shopping assistant before it.
      </p>
      <p>
        Its actions are about orders. The{' '}
        <a href={SRC.gorgiasAgent} target="_blank" rel="noopener noreferrer">product page</a> shows refund, cancel,
        edit or replace an order, update an address, start a return, apply a discount, and pause or skip a
        subscription, from a library of more than 130 actions, plus custom actions to any API or app. Gorgias says a
        support team can set it up with no engineers and be live in under an hour.
      </p>
      <p>
        Plan gating matters here. Actions and brand voice controls start on Basic. The help desk connects to Shopify and
        WooCommerce on every plan, to BigCommerce from Basic and to Magento from Pro.
      </p>
      <p>
        <strong>Where it fits.</strong> A Shopify brand whose tickets are about orders, with a support lead and no
        developer.
      </p>
      <p>
        <strong>Where it stops.</strong> When orders, stock or customer prices live outside Shopify, for example in an
        ERP that serves wholesale accounts. Ask Gorgias what the AI Agent can act on in that case before you plan
        around it.
      </p>

      <h2 id="custom-build">A custom-built agent: for work that leaves the help desk</h2>
      <p>
        A custom agent is software written for your process. It can sit inside Zendesk, Gorgias or Intercom through
        their APIs, so your team keeps its inbox, or it can run in a channel of your own. FactoryJet designs, builds,
        implements and supports agents like this, and the client owns what we build.
      </p>
      <p>
        It starts from the other end. A rented agent starts with the vendor&apos;s builder and reaches out to your
        systems. A custom agent starts with your systems and rules: the ERP that holds customer prices, the approval a
        refund needs, the warehouse feed that says where the parcel is.
      </p>
      <p>
        It is the slower route. Intercom and Gorgias both say setup takes under an hour, and Zendesk says minutes. As a
        guide, a custom pilot on one narrow workflow usually takes two to four weeks, and a production agent with
        permissions, logging and monitoring six to twelve weeks. So build only when one of the five conditions further
        down holds.
      </p>

      <figure className="my-8">
        <img
          src="/images/blog/intercom-fin-vs-zendesk-ai-vs-custom-ai-agent-2026/custom-build.webp"
          alt="A woman with a black ponytail in a white shirt draws empty boxes joined by lines on a whiteboard while a bearded man in an olive sweater watches, holding an orange folder."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          A custom build starts with a map of the systems one ticket touches, before anyone picks a tool.
        </figcaption>
      </figure>

      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg my-8">
        <h3 className="text-lg font-bold mb-3">Not sure whether to rent or build?</h3>
        <p className="mb-4">
          Bring your three most common ticket types and the systems a person opens to resolve each one. In a 30-minute
          call with founder Bhavesh Barot we will tell you whether Fin, Zendesk AI, Agentforce or Gorgias can do it as
          sold, or whether a piece needs building. FactoryJet quotes a fixed price in writing after that call, and we
          can show working software on your own data before a contract.
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

      <h2 id="when-to-rent">When a rented agent is the right call</h2>
      <p>Rent if most of these five describe you.</p>
      <ol className="list-decimal pl-6 space-y-3 mb-6">
        <li>
          <strong>Your tickets are common ones.</strong> Order status, returns, product questions, password resets and
          plan questions. These are the types the vendors built for, and the Gorgias figures above show where they close
          best.
        </li>
        <li>
          <strong>Your team already lives in that vendor&apos;s product.</strong> A Zendesk team has an allowance of
          automated resolutions in its plan. A Salesforce team can reuse the flows it already built.
        </li>
        <li>
          <strong>The systems the agent must touch have a modern API or a listed connector.</strong> Fin listed 60
          connectors on the day we read its page, and Gorgias a library of more than 130 actions.
        </li>
        <li>
          <strong>Nobody on your side wants to own software.</strong> The vendor runs the models and the hosting, and
          ships the updates.
        </li>
        <li>
          <strong>You need to be live this month.</strong> Every vendor here offers a way to try it first: a 14-day
          trial at Intercom and at Zendesk, a free trial at Gorgias, and Salesforce Foundations with credits for the
          first 1,000 Agentforce for Service conversations.
        </li>
      </ol>
      <p>
        If that is you, rent. If an off-the-shelf agent will do the job, we will tell you so.
      </p>

      <figure className="my-8">
        <img
          src="/images/blog/intercom-fin-vs-zendesk-ai-vs-custom-ai-agent-2026/customer.webp"
          alt="A red-haired man in a cream sweater sits on a gray sofa looking down at a black phone in his hands, with an open cardboard box of tissue paper on the table and an orange cushion beside him."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          What the customer notices is whether the return gets started in this conversation.
        </figcaption>
      </figure>

      <h2 id="when-to-build">When a custom build is the right call</h2>
      <p>Build when at least one of these five is true. Each one names something the vendor pages told us.</p>
      <ol className="list-decimal pl-6 space-y-3 mb-6">
        <li>
          <strong>A system the agent needs has no API that a vendor builder can call.</strong> The Zendesk builder sends
          JSON request bodies only, and Fin connects to tools that have an API or an MCP server. An older ERP that
          trades EDI files, a SQL database on your own server or a supplier portal with no API needs code in between.
        </li>
        <li>
          <strong>The rule crosses systems and needs approval.</strong> Take a refund above your limit. It has to wait
          for a manager to approve it, then post a credit note in the accounting system, then update the order and the
          ticket. A rented agent can do the pieces its connectors reach. When the chain runs through systems they
          do not reach, or the approval lives in a tool outside the help desk, holding it together with a record of who
          approved what is custom work.
        </li>
        <li>
          <strong>The work is not a support conversation.</strong> Quote requests, purchase and sales orders and daily
          bookkeeping arrive by email and end in an ERP. FactoryJet has worked on Odoo, NetSuite, SAP Business One,
          ERPNext and custom ERPs on jobs like these. See{' '}
          <a href="/services/erp-ai-agents">AI agents for ERP systems</a>.
        </li>
        <li>
          <strong>You want to own the agent.</strong> With a rented agent, your procedures and settings live inside the
          vendor&apos;s product. With a build, the client owns what we build, which matters if you expect to change help
          desk or add channels later.
        </li>
        <li>
          <strong>You already rent one, and the same ticket types keep reaching your team.</strong> Pull the handover
          report. If two or three types make up most of it, and each needs a system from point 1 or a rule from point 2,
          that is the piece to build.
        </li>
      </ol>

      <h2 id="middle-route">The middle route: keep the rented agent and have the missing piece built</h2>
      <p>
        Renting and building are not exclusive. Every vendor in this guide lets its agent call something you supply.
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          <strong>Fin</strong> accepts a custom REST API Data Connector or a custom MCP server.
        </li>
        <li>
          <strong>Zendesk AI agents</strong> call custom actions and API integrations.
        </li>
        <li>
          <strong>Agentforce</strong> turns your APIs into agent actions.
        </li>
        <li>
          <strong>Gorgias AI Agent</strong> lets you build a custom action to any API or app.
        </li>
      </ul>
      <p>
        So the build can be small. One API in front of the ERP that answers three questions (where is this order, can
        this item be returned, what price does this customer pay) and performs one action can be enough to start. The
        rented agent keeps the conversation and the reporting. For a team that already pays for Fin or Zendesk,
        this is usually a smaller project than a full custom agent.
      </p>
      <p>
        FactoryJet builds these connecting pieces. EDI integration, punchout catalogs, Xero, HubSpot and WhatsApp
        integrations are among them, along with{' '}
        <a href="/services/ai-integration-services">AI integration work</a> on systems the vendors do not list.
      </p>

      <h2 id="alternatives">Zendesk, Intercom and Gorgias alternatives: when you can keep your help desk and change the agent</h2>
      <p>
        The table below takes four common reasons for looking at an alternative. Two of them do not need a new help
        desk. Intercom sells Fin to run on Zendesk, Salesforce, HubSpot and Freshdesk, and its page
        for Zendesk says you can deploy it &quot;without adding per-agent costs or upgrading to a higher platform
        tier&quot;. Zendesk sells Forethought AI agents for other platforms. The agent and the help desk can now be
        bought separately.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">If you are looking because</th>
              <th className="p-3 text-left border border-gray-700">Look at</th>
              <th className="p-3 text-left border border-gray-700">Do you have to migrate?</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">The AI agent closes too little</td>
              <td className="p-3 border border-gray-200">
                A second agent on the same help desk: Fin on Zendesk, Salesforce, HubSpot or Freshdesk, or Forethought
                from Zendesk
              </td>
              <td className="p-3 border border-gray-200">No</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">One action is missing</td>
              <td className="p-3 border border-gray-200">
                A custom action or API built for the agent you have (the middle route above)
              </td>
              <td className="p-3 border border-gray-200">No</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Per-agent seat pricing does not suit you</td>
              <td className="p-3 border border-gray-200">
                Gorgias, if you sell on Shopify: priced by ticket volume, with up to 500 user seats from the Basic plan
              </td>
              <td className="p-3 border border-gray-200">Yes</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">
                Support should sit next to your CRM
              </td>
              <td className="p-3 border border-gray-200">Salesforce Service Cloud with Agentforce</td>
              <td className="p-3 border border-gray-200">Yes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id="zendesk-vs-intercom">Zendesk vs Intercom</h3>
      <p>
        Both sell a help desk by the seat and an AI agent billed on results. Zendesk seats list at $19, $55 and $115 per
        agent per month paid yearly, and Intercom seats at $19, $85 and $132 per seat per month paid annually. Zendesk
        includes an allowance of automated resolutions in the plan and bills $1.50 to $2.00 beyond it. Intercom bills
        $0.99 per outcome from the first one. The two count a result differently, as the section on billing units
        shows, so the unit prices do not settle the choice. Run both on the same tickets.
      </p>

      <h3 id="gorgias-vs-zendesk">Gorgias vs Zendesk</h3>
      <p>
        Gorgias prices by ticket volume and Zendesk by agent seat. The Gorgias AI Agent is set up per Shopify store and
        its action library is about orders. Zendesk AI agents are not tied to one store platform, reach other systems
        through custom actions, and include voice AI agents. Gorgias describes its help desk as &quot;designed
        specifically for ecommerce and Shopify&quot;. Zendesk describes plans for support teams of any kind, from
        teams that have outgrown a shared inbox to complex contact centers.
      </p>

      <h2 id="how-to-choose">How to choose in one afternoon</h2>
      <p>You can settle most of this with a ticket export and a spreadsheet.</p>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li>Export the last 90 days of tickets and sort them by type.</li>
        <li>Take the five biggest types. Next to each, write the systems a person opens to resolve it.</li>
        <li>Mark each system one of three ways: listed connector, has an API, or neither.</li>
        <li>Start a trial of the agent that belongs to your help desk, using the trial routes listed above.</li>
        <li>Run the same 20 real tickets through it, including a few it should refuse.</li>
        <li>
          Whatever sits in the &quot;neither&quot; column, or fails step 5, is the list to bring to a builder.
        </li>
      </ol>
      <p>
        Our <a href="/blog/ai-agent-build-vs-buy-2026">build versus buy guide</a> lists the four failure cases worth
        adding to that test. For how a support agent connects to a help desk under the hood, read the{' '}
        <a href="/blog/ai-customer-support-agent-architecture-guide">support agent architecture guide</a>. For store-side
        tools beyond support, see{' '}
        <a href="/blog/best-ai-agents-for-ecommerce-2026">the best AI agents for ecommerce</a>.
      </p>

      <h2 id="how-factoryjet-works">How FactoryJet works on a custom support agent</h2>
      <p>
        We design, build, implement and support the agent, and you own what we build. To scope one we ask for three
        things: read access to your help desk or an export of your last 90 days of tickets, your written return, refund
        and shipping policies, and a list of the systems the agent would need to check.
      </p>
      <p>
        We can show working software on your own data before a contract. FactoryJet quotes the build and the ongoing
        support as fixed prices in writing after a short scoping call. After launch we keep managing the servers, the
        AI, the APIs and the maintenance, so your team does not have to. We work remotely with US clients and schedule
        calls in US business hours.
      </p>
      <p>
        To see the work, read about our{' '}
        <a href="/services/ai-customer-support-agents">AI customer support agents</a>,{' '}
        <a href="/services/shopify-ai-agents">Shopify AI agents</a> and{' '}
        <a href="/services/ai-agent-development">AI agent development</a>. For phone work, see{' '}
        <a href="/services/ai-receptionist">our AI receptionist and phone answering service</a>. For a UK business, see{' '}
        <a href="/uk/ai-customer-service">renting or building AI customer service in the UK</a>.
      </p>

      <h2 id="sources">Sources</h2>
      <p className="text-sm text-gray-600">
        All pages opened and read on 11 October 2026. Vendors change prices and plan names often, so check the source
        before you budget.
      </p>
      <ul className="list-disc pl-6 space-y-1 text-sm mb-8">
        <li>
          Intercom: <a href={SRC.intercomPricing} target="_blank" rel="noopener noreferrer">Intercom pricing</a>,{' '}
          <a href={SRC.finPricing} target="_blank" rel="noopener noreferrer">Fin AI Agent pricing</a>,{' '}
          <a href={SRC.finOutcomes} target="_blank" rel="noopener noreferrer">Fin AI Agent outcomes (help article)</a>,{' '}
          <a href={SRC.finIntegrations} target="_blank" rel="noopener noreferrer">Fin integrations</a>,{' '}
          <a href={SRC.finZendesk} target="_blank" rel="noopener noreferrer">Fin for Zendesk</a>,{' '}
          <a href={SRC.finHelpdesk} target="_blank" rel="noopener noreferrer">Fin for any helpdesk</a> and{' '}
          <a href={SRC.finProcedures} target="_blank" rel="noopener noreferrer">Fin Procedures</a>
        </li>
        <li>
          Zendesk: <a href={SRC.zendeskPricing} target="_blank" rel="noopener noreferrer">Zendesk pricing (US page)</a>,{' '}
          <a href={SRC.zendeskAgents} target="_blank" rel="noopener noreferrer">AI agents for service</a>,{' '}
          <a href={SRC.zendeskTiers} target="_blank" rel="noopener noreferrer">About automated resolution tiers</a>,{' '}
          <a href={SRC.zendeskPriorPlatform} target="_blank" rel="noopener noreferrer">About the automated resolutions platform (prior to resolution tiers)</a>,{' '}
          <a href={SRC.zendeskAgentic} target="_blank" rel="noopener noreferrer">About AI agents with agentic AI</a>,{' '}
          <a href={SRC.zendeskIntegration} target="_blank" rel="noopener noreferrer">About the integration builder for AI agents</a> and{' '}
          <a href={SRC.zendeskVoice} target="_blank" rel="noopener noreferrer">About voice AI agents</a>
        </li>
        <li>
          Salesforce: <a href={SRC.agentforcePricing} target="_blank" rel="noopener noreferrer">Agentforce pricing</a>,{' '}
          <a href={SRC.agentforceHow} target="_blank" rel="noopener noreferrer">How Agentforce works</a>,{' '}
          <a href={SRC.agentforceVoice} target="_blank" rel="noopener noreferrer">Agentforce Voice</a> and{' '}
          <a href={SRC.servicePricing} target="_blank" rel="noopener noreferrer">Service Cloud pricing</a>
        </li>
        <li>
          Gorgias: <a href={SRC.gorgiasPricing} target="_blank" rel="noopener noreferrer">Gorgias pricing</a>,{' '}
          <a href={SRC.gorgiasAgent} target="_blank" rel="noopener noreferrer">AI Agent product page</a> and{' '}
          <a href={SRC.gorgiasDocs} target="_blank" rel="noopener noreferrer">AI Agent explained (docs)</a>
        </li>
        <li>
          <a href={SRC.productCrafters} target="_blank" rel="noopener noreferrer">ProductCrafters, AI Agent Development Cost (modified 20 May 2026)</a>, for the market range on building a customer service agent
        </li>
        <li>
          Our own measurement: US monthly search volumes for the named comparisons, DataForSEO, 11 October 2026
        </li>
      </ul>

      <div className="bg-[#FAF8F5] border-2 border-[#E5DFD7] p-6 sm:p-8 rounded-xl my-10 shadow-sm">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-2">
          Support agent scoping call for US businesses
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] mb-3">
          Find out what your rented agent cannot reach, and what it would take to fix
        </h3>
        <p className="text-[#4B5563] text-base leading-relaxed mb-6">
          Tell us your help desk, your top ticket types and the systems behind them. We will tell you straight whether
          Fin, Zendesk AI, Agentforce or Gorgias covers it, whether one custom action closes the gap, or whether it
          needs a custom agent. FactoryJet quotes a fixed price in writing after a short scoping call.
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
            href="/services/ai-customer-support-agents"
            className="inline-flex items-center gap-2 bg-white text-[#1F2937] border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            See AI customer support agents
          </a>
        </div>
      </div>
    </article>
  ),
};

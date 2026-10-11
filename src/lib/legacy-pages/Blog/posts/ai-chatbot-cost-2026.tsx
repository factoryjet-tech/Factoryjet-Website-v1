import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

/*
 * AI chatbot cost guide for the United States (2026).
 * Two kinds of figure only, each opened and read on 11 October 2026:
 *   1. the list price of a named chatbot product, from that vendor's own pricing page;
 *   2. a published market range for having a custom chatbot BUILT, from a named source.
 * None of them is a FactoryJet price. The page gives no figure for running, hosting or
 * maintaining a custom chatbot (rule B, 11 Oct 2026): where upkeep comes up, the only lines
 * are that FactoryJet quotes the build and the ongoing support as fixed prices in writing and
 * keeps managing the servers, AI, APIs and maintenance.
 * Vendor prices were read twice (direct fetch and a second reader). Intercom's Essential seat
 * differed between the two readings ($29 and $19); the page says so. Re-read before changing a figure.
 * The Clutch tally is our own count of the first page of its US chatbot list (58 distinct firms).
 * The FAQ array below is the single source for both the visible FAQ and the FAQPage JSON-LD
 * (the blog route maps post.faqs into schema).
 */

const SRC = {
  // vendor pricing pages
  intercom: 'https://www.intercom.com/pricing',
  fin: 'https://fin.ai/pricing',
  zendesk: 'https://www.zendesk.com/pricing/',
  agentforce: 'https://www.salesforce.com/agentforce/pricing/',
  freshdesk: 'https://www.freshworks.com/freshdesk/pricing/',
  gorgias: 'https://www.gorgias.com/pricing',
  tidio: 'https://www.tidio.com/pricing/',
  crisp: 'https://crisp.chat/en/pricing/',
  chatbotCom: 'https://www.chatbot.com/pricing/',
  chatbase: 'https://www.chatbase.co/pricing',
  botpress: 'https://botpress.com/pricing',
  quickchatPricing: 'https://quickchat.ai/pricing',
  kommunicate: 'https://www.kommunicate.io/pricing',
  elfsightPricing: 'https://elfsight.com/ai-chatbot-widget/pricing/',
  chatfuel: 'https://chatfuel.com/pricing',
  copilotStudio: 'https://www.microsoft.com/en-us/microsoft-365-copilot/pricing/copilot-studio',
  shopifyInbox: 'https://apps.shopify.com/inbox',
  voiceflow: 'https://www.voiceflow.com/pricing',
  liveperson: 'https://www.liveperson.com/pricing/',
  // build cost sources
  clutch: 'https://clutch.co/developers/artificial-intelligence/chatbots',
  clutchUs: 'https://clutch.co/us/developers/artificial-intelligence/chatbots',
  cmarix: 'https://www.cmarix.com/blog/ai-chatbot-development-cost/',
  codiant: 'https://codiant.com/blog/ai-chatbot-development-cost-2026/',
  spaculus: 'https://spaculus.com/blog/ai-chatbot-development-cost-2026/',
  raftlabs: 'https://www.raftlabs.com/blog/chatbot-development-cost/',
  kumo: 'https://www.kumohq.co/blog/ai-chatbot-development-cost',
  cleveroad: 'https://www.cleveroad.com/blog/chatbot-development-cost/',
  orangemantra: 'https://www.orangemantra.com/blog/how-much-does-it-cost-to-develop-chatbot/',
  easycomm: 'https://easycomm.io/blog/ai-chatbot-development-cost-2026/',
  topflight: 'https://topflightapps.com/ideas/chatbot-development-cost/',
  masterOfCode: 'https://masterofcode.com/blog/chatbot-pricing',
  elfsightGuide: 'https://elfsight.com/blog/how-much-does-a-chatbot-cost/',
  crescendo: 'https://www.crescendo.ai/blog/how-much-do-chatbots-cost',
  bland: 'https://www.bland.ai/blog/how-much-does-a-chatbot-cost',
  quickchatGuide: 'https://quickchat.ai/post/how-much-does-chatbot-cost',
};

const faqs: FAQItem[] = [
  // The buyer questions, in the buyer's own words
  {
    q: 'How much does it cost to develop an AI chatbot?',
    a: 'Clutch, on its chatbot companies page updated 11 October 2026, says a simple proof of concept often starts around $10,000 and an enterprise build can reach $250,000. Development firm CMARIX puts a basic rule-based bot at $8,000 to $25,000, an AI chatbot with one to three system connections at $30,000 to $80,000 and an enterprise system at $150,000 to more than $300,000. Spaculus says most US businesses should budget $25,000 to $80,000. These are published market ranges, not FactoryJet prices.',
  },
  {
    q: 'How much would it cost to build an AI chatbot?',
    a: 'It depends on what the chatbot must do. Codiant, in a guide updated 2 September 2026, puts a rule-based bot at $4,000 to $25,000, a first AI chatbot at $15,000 to $50,000 and a custom chatbot that answers from your documents and systems at $35,000 to $150,000. It prints the hours behind each figure. Kumo puts a chatbot that takes actions across several systems at $50,000 to $100,000. List the systems the bot must reach before you ask for a quote, because each one adds work.',
  },
  {
    q: 'How much does an AI chat bot cost?',
    a: 'A ready-made AI chat bot usually starts under $50 a month: 12 of the 14 monthly price lists we read on 11 October 2026 do. Elfsight starts at $5 a month, Tidio at $24.17, Chatbase at $40 and Crisp at $45. AI agents billed by usage cost $0.99 per outcome at Intercom and $2.00 per automated resolution at Zendesk on pay-as-you-go. A custom build is a one-time project, which Clutch puts at about $10,000 for a proof of concept and up to $250,000 for an enterprise system.',
  },
  // Questions Google shows under chatbot cost searches (11 October 2026)
  {
    q: 'How much do AI chatbots sell for?',
    a: 'As a product, they sell by the month or by the conversation. The 14 monthly price lists we read on 11 October 2026 start at $5 to $200 a month, and higher printed plans include $750 a month at Botpress and $999 at Quickchat AI. As a built project, development firms publish $4,000 to $25,000 for a rule-based bot and $150,000 to more than $300,000 for an enterprise platform (Codiant and CMARIX). If you plan to sell chatbots yourself, those are the two sets of figures your buyers will compare you with.',
  },
  {
    q: 'Do you have to pay for an AI chatbot?',
    a: 'No, not to start. Shopify Inbox is free. Tidio, Crisp, Chatbase, Botpress and Elfsight each printed a free plan on 11 October 2026, with limits: Elfsight allows 50 messages a month, Chatbase 50 message credits and Botpress 100 conversations. Quickchat AI has a free plan for personal, non-commercial use only. You start paying when you pass those limits, need more seats, or want the bot to do more than answer from a few pages.',
  },
  {
    q: 'What are the four types of chatbots?',
    a: 'Sorted by what they can do, which is also what sets the build price: a rule-based bot that follows a script ($4,000 to $25,000 on Codiant figures), a knowledge chatbot that answers from your own documents ($20,000 to $45,000, Spaculus), an integrated chatbot that reads or changes records in your systems ($35,000 to $80,000, Spaculus), and a voice or multi-channel assistant ($50,000 to $120,000, Spaculus). Enterprise platforms sit above all four at $150,000 to more than $300,000 (CMARIX).',
  },
  {
    q: 'Can I buy my own AI bot?',
    a: 'Yes, in two ways. You can rent one: 16 products printed a US dollar price on 11 October 2026, most of them starting under $50 a month, and you keep the bot for as long as you pay. Or you can have one built and own it. Kumo, a development firm, describes its custom builds as deployed in your own cloud account with the code yours from day one, at $15,000 to $50,000. Ask any builder who owns the code and the data. With FactoryJet, the client owns what we build.',
  },
  {
    q: 'Can I build my own AI chatbot?',
    a: 'Yes. Builder products exist for exactly that. Chatbase has a free plan and charges $40 a month for its Hobby plan, Botpress has a free plan with 100 conversations, and Microsoft Copilot Studio sells packs of 25,000 credits at $200 a month. They suit a bot that answers from your own pages. The harder work is connecting the bot to your systems and testing what it says. Codiant sizes a simple connection at about $3,000 to $15,000 of development work when a firm does it for you.',
  },
  {
    q: 'Which is the cheapest AI chatbot?',
    a: 'Among the 16 price lists we read on 11 October 2026, Shopify Inbox is free and five more products print a free plan. The lowest paid plans were Elfsight Basic at $5 a month billed yearly, Quickchat AI Starter at $9, Gorgias Starter at $10 for 50 tickets and Chatfuel Business at $18 billed yearly. Each of those plans has a cap: Elfsight Basic allows 300 messages a month and Quickchat AI Starter 150 AI credits. Compare the cap with your monthly conversations before you compare the price.',
  },
  {
    q: 'What is the average cost of a chatbot?',
    a: 'No source we read publishes a true average, and one would not help, because a $5 widget and a $300,000 platform are both called chatbots. The middle of the market is easier to state. For products, 12 of the 14 monthly price lists we read start under $50 a month. For builds, Spaculus says most US businesses should budget $25,000 to $80,000, and on Clutch the most common minimum project sizes among 58 US chatbot firms were $25,000 (18 firms) and $10,000 (17 firms).',
  },
  {
    q: 'Is it difficult to build a chatbot?',
    a: 'A simple one is not, and the published timelines show where the difficulty sits. CMARIX gives 3 to 6 weeks for a rule-based bot, 8 to 14 weeks for an AI chatbot with one to three system connections and 16 to 24 weeks or more for an enterprise system. Spaculus gives 4 to 8 weeks for a basic AI chatbot and 10 to 18 weeks once it connects to a customer database, help desk, payment or booking system. The connections and the testing take the time.',
  },
  {
    q: 'What are the chatbot pricing models?',
    a: 'We found five on the 16 price lists we read on 11 October 2026. Nine products sell a monthly allowance of conversations, messages or credits. Four charge per seat and add a price for each AI resolution. One, Salesforce Agentforce, is usage only at $2 per conversation. One, Crisp, is a flat price per workspace. One, Shopify Inbox, is free. A custom build is a sixth model: a one-time project price for software you own.',
  },
  // Searches this page covers
  {
    q: 'How much does an AI chatbot cost per month?',
    a: 'For a ready-made product, the monthly plans we read on 11 October 2026 start at $5 to $200. Elfsight starts at $5, Tidio at $24.17, Chatbase at $40, Crisp at $45 and Botpress at $150. Helpdesks with an AI agent charge $19 to $132 per seat a month and bill AI usage on top. For a custom build there is no list price to quote. FactoryJet quotes the build and the ongoing support as fixed prices in writing after a short scoping call, and keeps managing the servers, AI, APIs and maintenance so your team does not have to.',
  },
  {
    q: 'How much does chatbot development cost in the US?',
    a: 'Spaculus, writing about the United States on 10 August 2026, gives $8,000 to more than $150,000 and says most US businesses should budget $25,000 to $80,000. CMARIX puts North American projects at $50,000 to $200,000 or more. US rates explain part of the gap with global guides. Cleveroad puts North American developers at $100 to $200 an hour, and on the first page of the Clutch US list, 25 of the 55 chatbot firms that disclose a rate charge $100 an hour or more.',
  },
  {
    q: 'How much does Intercom Fin cost?',
    a: 'Fin costs $0.99 per outcome, on the Intercom and Fin pricing pages we read on 11 October 2026. An outcome is counted once per conversation, for example when a customer asks for no further help after the last answer. Used with another helpdesk, Fin has a minimum of 50 outcomes a month. Used with the Intercom helpdesk, you also pay per seat: Advanced is $85 and Expert $132 a month, paid annually. The Essential seat showed $29 on one reading and $19 on another that day, so check it yourself.',
  },
  {
    q: 'How much does a Zendesk AI agent cost?',
    a: 'Zendesk includes AI agents in its plans and bills them by automated resolution. On the pricing page we read on 11 October 2026, Support Team is $19, Suite Team $55 and Suite Professional $115 per agent a month, paid yearly. Each plan includes 5 or 10 automated resolutions per agent per month, and pay-as-you-go resolutions cost $2.00 each. Zendesk counts a resolution only when the AI agent solves the request without passing it to a human agent.',
  },
  {
    q: 'What does per resolution pricing mean?',
    a: 'You pay each time the AI finishes a customer conversation, and vendors define finished differently. Intercom charges one outcome per conversation and does not charge when the conversation is simply passed to your team. Zendesk charges for requests resolved without any escalation to a human agent. Freshdesk counts sessions, and treats all AI replies to one email thread within 72 hours as a single session. Read the definition on the pricing page before you compare $0.99 with $2.00.',
  },
  {
    q: 'How long does it take to build a custom chatbot?',
    a: 'From a few weeks to several months, on published timelines. Codiant gives 2 to 6 weeks for a rule-based bot, 6 to 12 weeks for a first AI chatbot and 3 to 6 months for a custom chatbot that answers from business documents and systems. RaftLabs gives 3 to 5 weeks, 8 to 14 weeks and 16 to 28 weeks for its three tiers. Kumo says its first production version typically takes 2 to 3 months. A subscription product is faster to switch on: Intercom says Fin sets up in under an hour.',
  },
  {
    q: 'Why do chatbot cost guides disagree so much?',
    a: 'Partly because of who is writing. We read 14 guides on 11 October 2026. Nine firms that build chatbots start an AI chatbot at $10,000 to $35,000. Five other guides start it at $75,000, and four of those five sell a ready-made chatbot or voice product. The same four print an identical $5,000 to $30,000 band for a rule-based bot, and one names another as its source. Guides also assume different hourly rates, from $35 to $40 an hour at RaftLabs to $50 to $99 at Codiant.',
  },
  {
    q: 'What do US chatbot development companies charge per hour?',
    a: 'Clutch says hourly rates among the chatbot firms it lists run from under $25 to roughly $200, with $50 to $99 the most common band. We tallied the first page of its United States list on 11 October 2026. Of the 55 firms that disclosed a rate, 8 listed $25 to $49, 22 listed $50 to $99, 14 listed $100 to $149, 9 listed $150 to $199 and 2 listed $200 to $300. Three more did not disclose one.',
  },
  {
    q: 'What is the smallest project a chatbot development company will take?',
    a: 'On the first page of the Clutch list of US chatbot firms, read on 11 October 2026, no firm listed a minimum project size under $5,000. Seven of the 58 firms listed $5,000, 17 listed $10,000, 18 listed $25,000 and 15 listed $50,000 or more. One did not disclose it. That minimum covers any project the firm takes, so treat it as a floor for the conversation and not as a chatbot quote. With a budget under $5,000, a subscription product is the realistic route.',
  },
  {
    q: 'Should I buy a chatbot subscription or have one built?',
    a: 'Start with what the bot must touch. If it only needs to answer from your help pages, a subscription does that. Kumo, which sells builds, says a platform product handles that case for a per-seat or per-resolution fee with no build at all, and RaftLabs says renting is the right answer for many businesses. A build earns its price when the bot must work inside your own systems or follow rules no product can be set up to follow. Test a product on a free trial first, then ask a builder for a fixed price.',
  },
  {
    q: 'Are there ongoing costs after a custom chatbot is built?',
    a: 'Yes. A chatbot is software that keeps running, so someone has to look after it once it is live, and how that is charged differs from firm to firm. FactoryJet quotes the build and the ongoing support as two fixed prices in writing after a short scoping call. After launch we keep managing the servers, AI, APIs and maintenance, so your team does not have to.',
  },
  {
    q: 'How much does a WhatsApp or Instagram chatbot cost?',
    a: 'Chatfuel, a chatbot product for WhatsApp, Instagram and Facebook, printed its Business plan at $18 a month billed yearly on 11 October 2026. For a custom build, Cleveroad puts a chatbot for a single messenger such as WhatsApp or Facebook Messenger at $2,000 to more than $5,000 of development, and one that runs across web, messengers and a mobile app at $8,000 to more than $25,000. Cleveroad bases its estimates on $50 an hour. On the Clutch US list we tallied, 47 of 55 firms listed $50 an hour or more.',
  },
  {
    q: 'How much does a chatbot cost for a Shopify store?',
    a: 'Shopify Inbox, the AI sales associate app made by Shopify, is free. Gorgias sells its helpdesk for online brands by ticket volume, from $10 a month for 50 tickets to $900 a month for 5,000 on monthly billing, and charges $0.85 to $1.00 for each interaction its AI Agent automates. For a custom build, Easycomm puts an AI chatbot for ecommerce at $15,000 to $80,000 and Master of Code puts ecommerce and retail chatbots at $25,000 to $50,000. The systems behind the store, such as inventory and payments, drive the build price.',
  },
  {
    q: 'Can I see a chatbot working before I pay for a build?',
    a: 'With a product, yes. Intercom, Tidio, ChatBot.com and Kommunicate all printed free trials on 11 October 2026, from 7 to 30 days. With a build, ask. It is a FactoryJet practice to show working software on your own data before a contract, so you can judge what the chatbot says with your real questions and documents before you commit to a price.',
  },
  {
    q: 'How much does FactoryJet charge for an AI chatbot?',
    a: 'We do not publish a price list, and nothing on this page is a FactoryJet price. FactoryJet quotes the build and the ongoing support as fixed prices in writing after a short scoping call. We can show working software on your own data before you sign a contract, and after launch we keep managing the servers, AI, APIs and maintenance so your team does not have to. You own what we build. We work remotely with US clients and schedule calls in US business hours.',
  },
];

export const post: BlogPost = {
  id: '759',
  slug: 'ai-chatbot-cost-2026',
  title: 'How Much Does an AI Chatbot Cost in 2026? US Chatbot Pricing and Build Costs, With Sources',
  excerpt:
    'What an AI chatbot costs US businesses in 2026, in two parts. First, the list prices of 16 named chatbot products, each read on the vendor pricing page on 11 October 2026. Second, what it costs to have a custom chatbot built, from 14 published guides and our own tally of 58 US chatbot firms on Clutch. Every figure carries its source and date.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Oct 11, 2026',
  dateModified: 'Oct 11, 2026',
  readTime: '22 min read',
  imageUrl: '/images/blog/ai-chatbot-cost-2026/hero.webp',
  imageAlt:
    'A woman with dark curly hair in a mustard cardigan sits at a pale wood desk, seen over her shoulder, with grey and orange chat bubbles on her laptop screen and an orange mug beside it.',
  meta: {
    title: 'Chatbot Pricing 2026: AI Chatbot Cost in the US, Sourced',
    description:
      'AI chatbot cost in the US, 2026: list prices of 16 chatbot products read on 11 October, and custom build ranges from $10,000 to $250,000. All sourced.',
  },
  keyTakeaways: [
    'A ready-made chatbot product starts at $5 to $200 a month on the 14 monthly price lists we read on 11 October 2026. Nine of the 14 start under $30, and six of the 16 products we priced are free or print a free plan.',
    'AI agents sold by usage cost $0.50 to $2.00 per resolution or conversation: Quickchat AI from $0.50, Gorgias $0.85 to $1.00, Intercom Fin and ChatBot.com $0.99, Zendesk pay-as-you-go and Salesforce Agentforce $2.',
    'Having a custom chatbot built starts around $10,000 for a proof of concept and reaches $250,000 for an enterprise build, on the rule of thumb Clutch printed on 11 October 2026.',
    'Across nine guides from firms that build chatbots, a rule-based bot costs $2,000 to $25,000 and an AI chatbot connected to your systems $10,000 to $150,000. Spaculus says most US businesses should budget $25,000 to $80,000.',
    'Five other guides start an AI chatbot at $75,000. Four of those five sell a ready-made chatbot or voice product, so check who is quoting before you rely on a build range.',
    'On the first page of the Clutch list of US chatbot firms, 35 of 58 set their minimum project at $10,000 or $25,000, and none listed a minimum under $5,000.',
    'These are vendor list prices and published market ranges, not FactoryJet prices. FactoryJet quotes the build and the ongoing support as fixed prices in writing after a short scoping call.',
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
          In the US in 2026, a ready-made AI chatbot starts at <strong>$5 to $200 a month</strong> on the 14 monthly
          price lists we read on 11 October 2026, or <strong>$0.99 to $2.00</strong> for each conversation the AI handles
          at Intercom, Zendesk and Salesforce. Having a custom chatbot built starts around <strong>$10,000</strong> for a
          proof of concept and reaches <strong>$250,000</strong> for an enterprise build, according to Clutch.
        </p>
      </div>

      <div className="bg-[#FAF8F5] border-l-4 border-[#B23E13] p-5 rounded-r-lg mb-10">
        <p className="text-sm text-[#1F2937] leading-relaxed mb-0">
          <strong>These are list prices and market ranges, not our prices.</strong> Every dollar figure on this page is
          either a vendor&apos;s own list price or a build range from a named guide or directory, opened and read on 11
          October 2026. Each one is linked where it first appears and again in the sources list at the end. Most of the
          guides come from firms that sell chatbots or chatbot builds, which is normal for this market and is why every
          range carries its source. We sell builds too, so FactoryJet prices are left off the page on purpose.
        </p>
      </div>

      <p>
        Two prices, one word. On 11 October 2026 the Elfsight price list showed an AI chatbot at $5 a month. On the same
        day a published guide put a custom AI chatbot at $75,000 to more than $500,000. Neither is wrong. The first is a
        product you rent, and the second is software built for one company.
      </p>
      <p>
        This guide gives both sets of numbers for US buyers. Part one is the list price of 16 named chatbot products,
        each read on the vendor&apos;s own pricing page. Part two is what it costs to have a custom chatbot built, from
        14 published guides and from our own tally of 58 US chatbot firms listed on Clutch. After that it shows how to
        tell which of the two you need.
      </p>
      <p>
        How we checked: every vendor price was read twice on 11 October 2026, once in a direct fetch of the page and once
        through a second reader. Fifteen of the 16 matched. Intercom&apos;s entry seat price did not, and we say so where
        it appears. Eight more vendor pages printed no US dollar price we could use, and they are listed too.
      </p>
      <p>
        One note on the word itself. Google showed us 72 question boxes under eight chatbot cost searches on 11 October
        2026, and &quot;Is there a better chatbot than ChatGPT?&quot; appeared under seven of the eight. So this page is
        about business chatbots, the kind that sit on a website or inside a help desk and answer customers. It does not
        price consumer apps.
      </p>
      <p>
        We are FactoryJet, an AI services company that designs, builds, implements and supports AI chatbots and agents
        for US businesses. FactoryJet was founded in 2014 by Bhavesh Barot and has served more than 500 businesses. We
        sell custom builds, so we are one of the options in part two.
      </p>

      <h2 id="summary">AI chatbot cost in the US at a glance (2026)</h2>
      <p>
        The table below is the one to screenshot. The top four rows are products you rent. The bottom six are builds you
        own.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">What you are buying</th>
              <th className="p-3 text-left border border-gray-700">Published US price</th>
              <th className="p-3 text-left border border-gray-700">Source, read 11 Oct 2026</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Free product or free plan</td>
              <td className="p-3 border border-gray-200">$0, with limits</td>
              <td className="p-3 border border-gray-200">Shopify Inbox, Tidio, Crisp, Chatbase, Botpress, Elfsight</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Lowest paid plan of a chatbot product</td>
              <td className="p-3 border border-gray-200">$5 to $200 a month. Nine of 14 start under $30.</td>
              <td className="p-3 border border-gray-200">14 vendor price lists, in the next section</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Helpdesk seat that comes with an AI agent</td>
              <td className="p-3 border border-gray-200">$19 to $132 per seat a month</td>
              <td className="p-3 border border-gray-200">Intercom, Zendesk, Freshdesk, ChatBot.com</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">AI agent billed by usage</td>
              <td className="p-3 border border-gray-200">$0.50 to $2.00 per resolution or conversation</td>
              <td className="p-3 border border-gray-200">
                Quickchat AI, Gorgias, Intercom, ChatBot.com, Zendesk, Salesforce
              </td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Custom build, rule-based bot</td>
              <td className="p-3 border border-gray-200">$4,000 to $25,000 (Codiant); $8,000 to $25,000 (CMARIX)</td>
              <td className="p-3 border border-gray-200">
                <a href={SRC.codiant} target="_blank" rel="noopener noreferrer">Codiant</a> and{' '}
                <a href={SRC.cmarix} target="_blank" rel="noopener noreferrer">CMARIX</a>, both updated 2 Sep 2026
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Custom build, AI chatbot connected to your systems</td>
              <td className="p-3 border border-gray-200">$30,000 to $80,000 (CMARIX); $35,000 to $80,000 (Spaculus)</td>
              <td className="p-3 border border-gray-200">
                CMARIX; <a href={SRC.spaculus} target="_blank" rel="noopener noreferrer">Spaculus</a>, 10 Aug 2026
              </td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Custom build, enterprise platform</td>
              <td className="p-3 border border-gray-200">$150,000 to $300,000 or more</td>
              <td className="p-3 border border-gray-200">CMARIX and Codiant</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Rule of thumb for any build</td>
              <td className="p-3 border border-gray-200">
                About $10,000 for a proof of concept, up to $250,000 for an enterprise build
              </td>
              <td className="p-3 border border-gray-200">
                <a href={SRC.clutch} target="_blank" rel="noopener noreferrer">Clutch</a>, updated 11 Oct 2026
              </td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Chatbot developer, per hour</td>
              <td className="p-3 border border-gray-200">Under $25 to roughly $200; $50 to $99 is the most common band</td>
              <td className="p-3 border border-gray-200">Clutch</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Minimum project size, US chatbot firms</td>
              <td className="p-3 border border-gray-200">$5,000 to $100,000. 35 of 58 firms set it at $10,000 or $25,000.</td>
              <td className="p-3 border border-gray-200">
                Our tally of the first page of the{' '}
                <a href={SRC.clutchUs} target="_blank" rel="noopener noreferrer">Clutch US list</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="chatbot-pricing">Chatbot pricing: what 16 named products charge</h2>
      <p>
        Here is every US dollar price list we could read on 11 October 2026. The prices are the vendors&apos; own. The
        third column matters as much as the second, because it tells you what makes the bill grow.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Product</th>
              <th className="p-3 text-left border border-gray-700">List price on the vendor&apos;s page</th>
              <th className="p-3 text-left border border-gray-700">What the price is counted in</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">
                <a href={SRC.intercom} target="_blank" rel="noopener noreferrer">Intercom Fin</a>
              </td>
              <td className="p-3 border border-gray-200">
                $0.99 per outcome. Intercom helpdesk seats: Essential $29 (see the note below), Advanced $85, Expert $132
                a month, paid annually.
              </td>
              <td className="p-3 border border-gray-200">
                Seats, plus each conversation Fin finishes. With another helpdesk, a 50 outcome monthly minimum.
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">
                <a href={SRC.zendesk} target="_blank" rel="noopener noreferrer">Zendesk AI agents</a>
              </td>
              <td className="p-3 border border-gray-200">
                Support Team $19, Suite Team $55, Suite Professional $115 per agent a month, paid yearly. Pay-as-you-go
                automated resolutions $2.00 each.
              </td>
              <td className="p-3 border border-gray-200">
                Agents, plus automated resolutions beyond the 5 or 10 per agent a month that each plan includes.
              </td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">
                <a href={SRC.freshdesk} target="_blank" rel="noopener noreferrer">Freshdesk Freddy AI Agent</a>
              </td>
              <td className="p-3 border border-gray-200">
                Growth $19, Pro $55, Enterprise $89 per agent a month, billed annually. Extra AI Agent sessions $49 per
                100.
              </td>
              <td className="p-3 border border-gray-200">Agents, plus sessions after the first 500 that are included.</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">
                <a href={SRC.chatbotCom} target="_blank" rel="noopener noreferrer">ChatBot.com</a>
              </td>
              <td className="p-3 border border-gray-200">
                Essential $19, Growth $79 per user a month, billed yearly ($25 and $99 billed monthly). Extra AI
                resolutions $0.99 each.
              </td>
              <td className="p-3 border border-gray-200">
                Users, plus AI resolutions beyond the 10 or 200 a month that the plans include.
              </td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">
                <a href={SRC.agentforce} target="_blank" rel="noopener noreferrer">Salesforce Agentforce</a>
              </td>
              <td className="p-3 border border-gray-200">$2 per conversation, or $500 per 100,000 Flex Credits.</td>
              <td className="p-3 border border-gray-200">Conversations, or actions paid for in credits.</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">
                <a href={SRC.gorgias} target="_blank" rel="noopener noreferrer">Gorgias</a>
              </td>
              <td className="p-3 border border-gray-200">
                Helpdesk $10 a month (50 tickets), $60 (300), $360 (2,000) or $900 (5,000) on monthly billing. AI Agent
                $0.85 to $1.00 per automated interaction, depending on the plan.
              </td>
              <td className="p-3 border border-gray-200">
                Tickets, plus each interaction the AI Agent automates. Gorgias says it is never priced per agent.
              </td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">
                <a href={SRC.tidio} target="_blank" rel="noopener noreferrer">Tidio and Lyro AI Agent</a>
              </td>
              <td className="p-3 border border-gray-200">
                Free plan. Starter $24.17 a month, Growth from $49.17, Plus from $300. Lyro AI Agent from $32.50 a month
                for 50 AI conversations. Shown with annual billing.
              </td>
              <td className="p-3 border border-gray-200">
                Conversations your team replies to, and AI conversations as a separate allowance.
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">
                <a href={SRC.crisp} target="_blank" rel="noopener noreferrer">Crisp</a>
              </td>
              <td className="p-3 border border-gray-200">Free plan. Mini $45, Essentials $95, Plus $295 a month.</td>
              <td className="p-3 border border-gray-200">
                One workspace, at a flat rate. Crisp says the price is the same whatever the number of conversations.
              </td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">
                <a href={SRC.kommunicate} target="_blank" rel="noopener noreferrer">Kommunicate</a>
              </td>
              <td className="p-3 border border-gray-200">Starter $40 a month, Professional $200 a month, billed monthly.</td>
              <td className="p-3 border border-gray-200">Conversations: 250 a month on Starter, 2,000 on Professional.</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">
                <a href={SRC.chatfuel} target="_blank" rel="noopener noreferrer">Chatfuel</a>
              </td>
              <td className="p-3 border border-gray-200">Business $18 a month, billed yearly.</td>
              <td className="p-3 border border-gray-200">
                One business on WhatsApp, Instagram and Facebook, with a monthly AI credit allowance.
              </td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">
                <a href={SRC.elfsightPricing} target="_blank" rel="noopener noreferrer">Elfsight AI Chatbot</a>
              </td>
              <td className="p-3 border border-gray-200">
                Free plan. Basic $5, Pro $10, Premium $20 a month, billed yearly.
              </td>
              <td className="p-3 border border-gray-200">
                Messages and page views: 300 messages and 5,000 views a month on Basic.
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">
                <a href={SRC.shopifyInbox} target="_blank" rel="noopener noreferrer">Shopify Inbox</a>
              </td>
              <td className="p-3 border border-gray-200">Free.</td>
              <td className="p-3 border border-gray-200">An AI sales associate app from Shopify, for Shopify stores.</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">
                <a href={SRC.chatbase} target="_blank" rel="noopener noreferrer">Chatbase</a>
              </td>
              <td className="p-3 border border-gray-200">Free plan. Hobby $40, Standard $150, Pro $500 a month.</td>
              <td className="p-3 border border-gray-200">
                Message credits: 700 a month on Hobby, 4,000 on Standard, 15,000 on Pro.
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">
                <a href={SRC.botpress} target="_blank" rel="noopener noreferrer">Botpress</a>
              </td>
              <td className="p-3 border border-gray-200">
                Free plan. Plus $150 a month, Team $750 a month, billed annually.
              </td>
              <td className="p-3 border border-gray-200">
                Conversations: 100 on Free, 250 a month on Plus, 1,500 on Team.
              </td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">
                <a href={SRC.quickchatPricing} target="_blank" rel="noopener noreferrer">Quickchat AI</a>
              </td>
              <td className="p-3 border border-gray-200">
                $9, $29, $99, $299 or $999 a month. Enterprise from $0.50 per resolution, starting from 2,000 resolutions
                a month. Its free plan is for personal use.
              </td>
              <td className="p-3 border border-gray-200">AI credits: 150 a month on the $9 plan, 30,000 on the $999 plan.</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">
                <a href={SRC.copilotStudio} target="_blank" rel="noopener noreferrer">Microsoft Copilot Studio</a>
              </td>
              <td className="p-3 border border-gray-200">$200 a month per pack of 25,000 Copilot Credits.</td>
              <td className="p-3 border border-gray-200">Credits, used up as the agent answers and acts.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Four things to take from the table.</p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          <strong>Entry prices are low.</strong> Fourteen of the 16 sell by the month. Their lowest paid plans run from $5
          to $200, nine start under $30 and 12 start under $50.
        </li>
        <li>
          <strong>The AI is often a second line.</strong> Intercom charges for seats and then for Fin outcomes. Tidio
          sells Lyro conversations as their own allowance. Gorgias prices the helpdesk and the AI Agent separately. Add
          both lines before you compare two vendors.
        </li>
        <li>
          <strong>The units differ.</strong> A seat, a user, a workspace and a credit are four different things. Some
          prices assume you pay for a year up front (Tidio, Elfsight, Botpress, Chatfuel) and some are month to month
          (Kommunicate, Gorgias).
        </li>
        <li>
          <strong>Check what happens at the cap.</strong> Elfsight says passing the monthly view limit temporarily
          deactivates the app. Quickchat AI says its agent stops replying when the credits run out, until the allowance
          resets. Botpress prints &quot;No top-ups or overages&quot; on its free plan.
        </li>
      </ul>
      <p>
        A note on Intercom. Its Essential seat showed $29 a month on one of our readings and $19 on the other, on the same
        day. A <a href={SRC.kumo} target="_blank" rel="noopener noreferrer">guide from Kumo</a> recorded $29 on 29
        September 2026. The $0.99 outcome price and the other two seat prices matched every time. Prices on these pages
        move, so read the page yourself on the day you budget.
      </p>

      <h3 id="billable-outcome">What counts as a resolution, an outcome or a session</h3>
      <p>
        Usage prices look comparable and are not, because each vendor counts a different event. These definitions are
        from the pricing pages themselves.
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          <strong><a href={SRC.fin} target="_blank" rel="noopener noreferrer">Intercom Fin</a></strong> charges one
          outcome per conversation, even if Fin takes several actions. A resolution means the customer asks for no
          further help after Fin&apos;s last answer. A handoff Fin completes by following a procedure you set up also
          counts. A conversation simply passed to your team does not. A sales qualification is priced separately at
          $9.99.
        </li>
        <li>
          <strong>Zendesk</strong> says you pay only for requests the AI agent resolved without any escalation to a
          human agent.
        </li>
        <li>
          <strong>Freshdesk</strong> counts sessions. A session is one interaction between a customer and the AI Agent,
          and for email it is a 72-hour window from the customer&apos;s first email, however many replies the AI sends.
        </li>
        <li>
          <strong>Tidio</strong> bills a conversation only once your team replies or starts it. Unanswered spam does not
          count toward the limit.
        </li>
      </ul>

      <figure className="my-8">
        <img
          src="/images/blog/ai-chatbot-cost-2026/support.webp"
          alt="A woman with braided hair wearing a headset sits and talks with a standing man in a burgundy sweater who holds an orange notebook."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          On the Zendesk price list, a resolution counts only when no human agent had to step in.
        </figcaption>
      </figure>

      <h3 id="no-price">Eight vendor pages with no price we could use</h3>
      <p>We opened 24 vendor pages in all. Eight gave us nothing to put in the table.</p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          <strong>Sold through sales, with no printed price:</strong>{' '}
          <a href={SRC.voiceflow} target="_blank" rel="noopener noreferrer">Voiceflow</a> (&quot;Request pricing&quot;),{' '}
          <a href={SRC.liveperson} target="_blank" rel="noopener noreferrer">LivePerson</a> (&quot;Request a
          quote&quot;) and Salesloft, whose site says it has moved from Drift to a new chat product and sent our request
          for a pricing page to a sales page.
        </li>
        <li>
          <strong>Closed to our reader:</strong> ManyChat showed a bot check and Ada returned a block page. We quote no
          figure for either.
        </li>
        <li>
          <strong>Prices that did not load:</strong> the HubSpot and Zoho SalesIQ pricing pages opened without their
          numbers, in both of our readings.
        </li>
        <li>
          <strong>Priced in euros:</strong> Landbot, so it is left out of a US dollar table.
        </li>
      </ul>
      <p>
        This is one reason older guides drift. The{' '}
        <a href={SRC.elfsightGuide} target="_blank" rel="noopener noreferrer">Elfsight comparison</a>, which dates its
        prices to February 2026, lists Voiceflow at $60 a month per editor. The Voiceflow page showed no price at all on
        11 October.
      </p>

      <h2 id="pricing-models">Chatbot pricing models: five ways vendors bill, plus a sixth</h2>
      <p>
        Sort the 16 price lists by how they charge and five models appear. A custom build is the sixth. The model decides
        what your bill is tied to, which is a better thing to compare than the entry price.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Pricing model</th>
              <th className="p-3 text-left border border-gray-700">Products on our list</th>
              <th className="p-3 text-left border border-gray-700">What the bill is tied to</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Monthly allowance</td>
              <td className="p-3 border border-gray-200">
                9 of 16: Tidio, Gorgias, Kommunicate, Chatfuel, Elfsight, Chatbase, Botpress, Quickchat AI, Copilot
                Studio
              </td>
              <td className="p-3 border border-gray-200">
                Volume. You buy a number of conversations, messages, tickets or credits, and move up a plan when you
                pass it.
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Per seat, plus per AI resolution</td>
              <td className="p-3 border border-gray-200">4 of 16: Intercom, Zendesk, Freshdesk, ChatBot.com</td>
              <td className="p-3 border border-gray-200">
                The size of your support team, and the number of conversations the AI finishes.
              </td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Usage only</td>
              <td className="p-3 border border-gray-200">1 of 16: Salesforce Agentforce</td>
              <td className="p-3 border border-gray-200">Every conversation, or every action paid for in credits.</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Flat per workspace</td>
              <td className="p-3 border border-gray-200">1 of 16: Crisp</td>
              <td className="p-3 border border-gray-200">The plan you pick. Conversation count does not change it.</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Free</td>
              <td className="p-3 border border-gray-200">1 of 16: Shopify Inbox</td>
              <td className="p-3 border border-gray-200">Nothing, if you already run a Shopify store.</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">One-time build</td>
              <td className="p-3 border border-gray-200">A custom chatbot from a development firm</td>
              <td className="p-3 border border-gray-200">
                Scope: what the bot must do and how many of your systems it must reach. You own the result.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The same vendor can be the lowest price for one business and the highest for another. So count two numbers
        before you open a pricing page: how many people need a login, and how many customer conversations you have in a
        month.
      </p>

      <figure className="my-8">
        <img
          src="/images/blog/ai-chatbot-cost-2026/shop.webp"
          alt="A grey-haired man in a dark green apron hands a brown paper bag across a wooden counter to a woman in a denim jacket, with two bicycles hanging on the wall behind him and an orange helmet on the counter."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          A shop that hears the same few questions every day can start on a subscription product.
        </figcaption>
      </figure>

      <h2 id="build-cost">How much does it cost to build an AI chatbot?</h2>
      <p>
        <a href={SRC.clutch} target="_blank" rel="noopener noreferrer">Clutch</a>, a directory that listed 9,873 chatbot
        companies when we read it on 11 October 2026, gives this rule of thumb: a simple proof of concept often starts
        around $10,000, and an enterprise-grade build can reach $250,000. A proof of concept is a small first version
        that shows the idea works.
      </p>
      <p>
        The firms that do the building publish finer ranges. Here are nine of them, sorted into three sizes of job. All
        nine are development firms describing a build. None of these figures is a subscription.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Source and page date</th>
              <th className="p-3 text-left border border-gray-700">Simple or rule-based bot</th>
              <th className="p-3 text-left border border-gray-700">AI chatbot that answers from your content and connects to your systems</th>
              <th className="p-3 text-left border border-gray-700">Enterprise or many systems</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">
                <a href={SRC.codiant} target="_blank" rel="noopener noreferrer">Codiant</a>, 2 Sep 2026
              </td>
              <td className="p-3 border border-gray-200">$4,000 to $25,000</td>
              <td className="p-3 border border-gray-200">$15,000 to $50,000 for a first version; $35,000 to $150,000 custom</td>
              <td className="p-3 border border-gray-200">$150,000 to $300,000 or more</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">
                <a href={SRC.cmarix} target="_blank" rel="noopener noreferrer">CMARIX</a>, 2 Sep 2026
              </td>
              <td className="p-3 border border-gray-200">$8,000 to $25,000</td>
              <td className="p-3 border border-gray-200">$30,000 to $80,000</td>
              <td className="p-3 border border-gray-200">$150,000 to $300,000 or more</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">
                <a href={SRC.spaculus} target="_blank" rel="noopener noreferrer">Spaculus</a>, 10 Aug 2026, US figures
              </td>
              <td className="p-3 border border-gray-200">$8,000 to $20,000</td>
              <td className="p-3 border border-gray-200">$20,000 to $45,000 answering from documents; $35,000 to $80,000 integrated</td>
              <td className="p-3 border border-gray-200">$80,000 to $150,000 or more</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">
                <a href={SRC.raftlabs} target="_blank" rel="noopener noreferrer">RaftLabs</a>, 14 Jun 2026
              </td>
              <td className="p-3 border border-gray-200">$4,500 to $12,000</td>
              <td className="p-3 border border-gray-200">$24,000 to $60,000</td>
              <td className="p-3 border border-gray-200">$72,000 to $210,000</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">
                <a href={SRC.kumo} target="_blank" rel="noopener noreferrer">Kumo</a>, 9 Oct 2026
              </td>
              <td className="p-3 border border-gray-200">Not given</td>
              <td className="p-3 border border-gray-200">$15,000 to $50,000</td>
              <td className="p-3 border border-gray-200">$50,000 to $100,000</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">
                <a href={SRC.cleveroad} target="_blank" rel="noopener noreferrer">Cleveroad</a>, 20 Sep 2026
              </td>
              <td className="p-3 border border-gray-200">$2,000 to $15,000 or more</td>
              <td className="p-3 border border-gray-200">$18,000 to $80,000 or more</td>
              <td className="p-3 border border-gray-200">$50,000 to $250,000 or more</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">
                <a href={SRC.orangemantra} target="_blank" rel="noopener noreferrer">OrangeMantra</a>, 17 Aug 2026
              </td>
              <td className="p-3 border border-gray-200">$2,000 to $10,000</td>
              <td className="p-3 border border-gray-200">$10,000 to $35,000</td>
              <td className="p-3 border border-gray-200">$35,000 to $100,000 or more</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">
                <a href={SRC.easycomm} target="_blank" rel="noopener noreferrer">Easycomm</a>, 23 Jun 2026
              </td>
              <td className="p-3 border border-gray-200">$5,000 to $15,000</td>
              <td className="p-3 border border-gray-200">$20,000 to $60,000</td>
              <td className="p-3 border border-gray-200">$60,000 to $200,000 or more</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">
                <a href={SRC.topflight} target="_blank" rel="noopener noreferrer">Topflight Apps</a>, Dec 2024
              </td>
              <td className="p-3 border border-gray-200">$5,000 to $15,000</td>
              <td className="p-3 border border-gray-200">$35,000 to $85,000</td>
              <td className="p-3 border border-gray-200">$80,000 to $150,000 or more</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Read down each column. A rule-based bot, which follows a script of buttons and keywords, runs $2,000 to $25,000
        across the eight firms that price one. An AI chatbot that answers from your own content and connects to your systems starts between
        $10,000 and $35,000 and tops out between $35,000 and $150,000. Spaculus, the one guide in the table that prices the United
        States by name, says most US businesses should budget $25,000 to $80,000.
      </p>
      <p>
        The same guides give build times. CMARIX puts a rule-based bot at 3 to 6 weeks and an AI chatbot with one to
        three system connections at 8 to 14 weeks. Spaculus gives 10 to 18 weeks once the bot connects to a customer
        database, help desk, payment or booking system.
      </p>

      <h3 id="two-camps">Why the guides disagree: 14 guides, two camps</h3>
      <p>
        We read five more guides than the table shows, and they sit far from it. All nine firms in the table start an AI
        chatbot between $10,000 and $35,000. The other five start the same tier at $75,000:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          <a href={SRC.elfsightGuide} target="_blank" rel="noopener noreferrer">Elfsight</a>: $75,000 to $150,000
        </li>
        <li>
          <a href={SRC.masterOfCode} target="_blank" rel="noopener noreferrer">Master of Code</a>: $75,000 to $150,000 or
          more
        </li>
        <li>
          <a href={SRC.quickchatGuide} target="_blank" rel="noopener noreferrer">Quickchat AI</a>: $75,000 to $500,000
        </li>
        <li>
          <a href={SRC.crescendo} target="_blank" rel="noopener noreferrer">Crescendo</a>: $75,000 to $500,000 or more
        </li>
        <li>
          <a href={SRC.bland} target="_blank" rel="noopener noreferrer">Bland</a>: $75,000 to $500,000
        </li>
      </ul>
      <p>
        Two facts about that second camp. Four of the five (all but Master of Code) sell a ready-made chatbot or voice
        product, so a custom build is the alternative to what they sell. And the same four print an identical $5,000 to
        $30,000 band for a rule-based bot, with Bland naming Crescendo as a source. Identical numbers on four sites
        suggest one origin.
      </p>
      <p>
        We cannot tell you which camp is right for your project. We can say the first camp shows more of its working.
        Codiant prints the hours behind each tier, such as 300 to 500 hours for a first AI chatbot, multiplied by $50 to
        $99 an hour. RaftLabs prints the rate it used, $35 to $40 an hour per person. Cleveroad says its estimates use an
        average of $50 an hour.
      </p>
      <p>
        That gives a US buyer a check to run. Take Codiant&apos;s 300 to 500 hours and price them at $100 to $149 an
        hour, the band that 14 of the 58 US firms in our Clutch tally list. The result is $30,000 to $74,500, which sits
        inside the $25,000 to $80,000 Spaculus gives for most US businesses. Two separate routes reach a similar
        range. This is arithmetic on published figures, and it is not a quote.
      </p>

      <h3 id="clutch-tally">What 58 US chatbot firms list on Clutch</h3>
      <p>
        Guides describe a market. A directory lets you count it. On 11 October 2026 the{' '}
        <a href={SRC.clutchUs} target="_blank" rel="noopener noreferrer">Clutch list of chatbot companies in the United
        States</a> held 2,284 firms. We tallied the first page: 58 different firms once repeated sponsored rows were
        removed. Each firm states the smallest project it takes and an hourly rate band.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Minimum project size</th>
              <th className="p-3 text-left border border-gray-700">Firms</th>
              <th className="p-3 text-left border border-gray-700">Hourly rate band</th>
              <th className="p-3 text-left border border-gray-700">Firms</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">$5,000 or more</td>
              <td className="p-3 border border-gray-200">7</td>
              <td className="p-3 border border-gray-200 font-semibold">$25 to $49</td>
              <td className="p-3 border border-gray-200">8</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">$10,000 or more</td>
              <td className="p-3 border border-gray-200">17</td>
              <td className="p-3 border border-gray-200 font-semibold">$50 to $99</td>
              <td className="p-3 border border-gray-200">22</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">$25,000 or more</td>
              <td className="p-3 border border-gray-200">18</td>
              <td className="p-3 border border-gray-200 font-semibold">$100 to $149</td>
              <td className="p-3 border border-gray-200">14</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">$50,000 or more</td>
              <td className="p-3 border border-gray-200">11</td>
              <td className="p-3 border border-gray-200 font-semibold">$150 to $199</td>
              <td className="p-3 border border-gray-200">9</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">$75,000 or more</td>
              <td className="p-3 border border-gray-200">3</td>
              <td className="p-3 border border-gray-200 font-semibold">$200 to $300</td>
              <td className="p-3 border border-gray-200">2</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">$100,000 or more</td>
              <td className="p-3 border border-gray-200">1</td>
              <td className="p-3 border border-gray-200 font-semibold">Undisclosed</td>
              <td className="p-3 border border-gray-200">3</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Undisclosed</td>
              <td className="p-3 border border-gray-200">1</td>
              <td className="p-3 border border-gray-200 font-semibold">Total</td>
              <td className="p-3 border border-gray-200">58</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Two readings. On minimums, no firm on the page listed less than $5,000, and 35 of the 58 set theirs at $10,000
        or $25,000, which fits the Clutch rule of thumb that a proof of concept starts around $10,000. On rates, 25 of
        the 55 firms that disclose one list $100 an hour or more, so nearly half of these US-listed firms sit above the
        $50 to $99 band that Clutch calls the most common.
      </p>
      <p className="text-sm text-gray-600">
        What this tally cannot show. It is the first page of 2,284 firms, in the order Clutch chose, and Clutch says it
        may earn a fee for some placements. The minimum is each firm&apos;s floor for any project, so it is not a
        chatbot price. Rate bands are self-declared. Treat the table as a picture of where US firms set the bar, and
        expect your own quotes to differ.
      </p>

      <figure className="my-8">
        <img
          src="/images/blog/ai-chatbot-cost-2026/scope.webp"
          alt="A bearded man in a light blue shirt and a red-haired woman in a charcoal sweater arrange a row of blank white cards on a table while she holds one orange card."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          A build quote follows the scope. Each system the chatbot must reach is one more card on the table.
        </figcaption>
      </figure>

      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg my-8">
        <h3 className="text-lg font-bold mb-3">Want a fixed price for your chatbot?</h3>
        <p className="mb-4">
          Bring the questions your customers ask most and the systems the answers live in. In a 30-minute call with
          founder Bhavesh Barot we will tell you whether a subscription product will do the job or whether it needs a
          build. FactoryJet quotes the build and the ongoing support as fixed prices in writing after that call, and we
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

      <h2 id="chatbot-types">The four types of chatbot, and what each costs to build</h2>
      <p>
        Google shows &quot;What are the four types of chatbots?&quot; under chatbot pricing searches, and the answer is
        the fastest way to place your own project. The types below are sorted by what the bot can do, with published
        build ranges for each.
      </p>
      <ol className="list-decimal pl-6 space-y-3 mb-6">
        <li>
          <strong>Rule-based bot.</strong> It follows a script of buttons and keywords and gives the same answer every
          time. Codiant puts it at $4,000 to $25,000 and RaftLabs at $4,500 to $12,000. Tidio, Crisp and ChatBot.com each
          list a flow or workflow builder on their price pages, so check a product before you commission one.
        </li>
        <li>
          <strong>Knowledge chatbot.</strong> It reads your documents and help pages and answers in plain words. You may
          see this called RAG, short for retrieval-augmented generation, which means the bot looks up your content before
          it writes an answer. Spaculus puts it at $20,000 to $45,000.
        </li>
        <li>
          <strong>Integrated chatbot.</strong> It also reads or changes records in your systems: an order status, a
          booking, a customer record. Spaculus puts it at $35,000 to $80,000 and CMARIX at $30,000 to $80,000 with one to
          three connections. Kumo puts a bot that takes actions across several systems at $50,000 to $100,000.
        </li>
        <li>
          <strong>Voice or multi-channel assistant.</strong> The same brain on the phone, the website, a mobile app and
          WhatsApp. Spaculus puts it at $50,000 to $120,000 and CMARIX at $80,000 to $150,000.
        </li>
      </ol>
      <p>
        Above all four sit enterprise platforms for regulated or high-volume operations, at $150,000 to $300,000 or more
        on the Codiant and CMARIX figures. If you are unsure whether you need a chatbot or an agent
        that can take on whole tasks, read{' '}
        <a href="/blog/ai-chatbots-vs-ai-agents-business">AI chatbots versus AI agents</a>.
      </p>

      <h2 id="price-drivers">What moves a chatbot build price up or down</h2>
      <p>Five things, each with a number from a page we read on 11 October 2026.</p>
      <ol className="list-decimal pl-6 space-y-3 mb-6">
        <li>
          <strong>Whether it answers or acts.</strong> Kumo prices a chatbot that answers from your knowledge and
          connects to one or two systems at $15,000 to $50,000. Once it takes actions across several systems, such as
          updating a customer record or issuing a refund, the band becomes $50,000 to $100,000.
        </li>
        <li>
          <strong>How many systems it connects to.</strong> Codiant sizes a simple connection to a well-documented system
          at about $3,000 to $15,000, and a complex one to a customer database, an ERP (the system that runs orders and
          stock) or an older system at $15,000 to $50,000 or more each. Crescendo says integration adds 20 to 50 percent
          to a budget.
        </li>
        <li>
          <strong>How many channels it runs on.</strong> Cleveroad puts a chatbot for a single messenger at $2,000 to
          more than $5,000 and one that runs across web, messengers and a mobile app at $8,000 to more than $25,000.
        </li>
        <li>
          <strong>Who builds it, and at what rate.</strong> Clutch lists chatbot firms from under $25 to roughly $200 an
          hour. Cleveroad puts North American firms at $100 to $200 and OrangeMantra at $120 to $250. In our tally of 58
          US-listed firms, 25 of the 55 that disclose a rate charge $100 or more.
        </li>
        <li>
          <strong>Your industry.</strong> Master of Code puts ecommerce and retail chatbots at $25,000 to $50,000,
          healthcare at $50,000 to $100,000 or more and finance at $75,000 or more, because of the rules those bots must
          follow and the systems they must reach.
        </li>
      </ol>
      <p>
        You control most of this before anyone quotes. Write down the 20 questions customers ask most, list each system
        an answer depends on, and decide which channels matter in the first version. A builder who reads that page can
        give you a tighter number.
      </p>

      <h2 id="buy-or-build">Subscription or custom build: which one do you need?</h2>
      <p>
        Start with a product if answering from your help pages is the whole job. Two firms that sell builds say so in
        print.{' '}
        <a href={SRC.kumo} target="_blank" rel="noopener noreferrer">Kumo</a> says that if you only need answers from a
        help center, a platform product does it for a per-seat or per-resolution fee and no build at all.{' '}
        <a href={SRC.raftlabs} target="_blank" rel="noopener noreferrer">RaftLabs</a> says renting is the right answer
        for many businesses, and that a build is for a bot that must understand your own processes, data or products.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Your situation</th>
              <th className="p-3 text-left border border-gray-700">Route that fits</th>
              <th className="p-3 text-left border border-gray-700">Published price to expect</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">The bot only answers from your help pages</td>
              <td className="p-3 border border-gray-200">A chatbot product</td>
              <td className="p-3 border border-gray-200">
                From $5 to $45 a month at Elfsight, Chatbase, Kommunicate and Crisp
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">You already run a helpdesk</td>
              <td className="p-3 border border-gray-200">Switch on its AI agent</td>
              <td className="p-3 border border-gray-200">
                $0.99 per outcome at Intercom; $2.00 per pay-as-you-go resolution at Zendesk; first 500 sessions included
                at Freshdesk
              </td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">
                The bot must look up or change records in one or two of your systems
              </td>
              <td className="p-3 border border-gray-200">A product that can reach them, or a first build</td>
              <td className="p-3 border border-gray-200">$15,000 to $50,000 for the build (Kumo)</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">
                It must act across several systems, or handle regulated data
              </td>
              <td className="p-3 border border-gray-200">A build</td>
              <td className="p-3 border border-gray-200">
                $50,000 to $100,000 (Kumo); healthcare $50,000 to $100,000 or more (Master of Code)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>To get to a decision without guessing, work through these five steps.</p>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li>List the questions your customers ask most, and mark the ones that need a look-up in one of your systems.</li>
        <li>
          Try a product on your own content. Intercom, Tidio, ChatBot.com and Kommunicate all print free trials of 7 to
          30 days.
        </li>
        <li>Note every question the product could not finish, and why.</li>
        <li>
          If that list is short, stay on the product. If it is long, it is your written scope. Send it to a builder and
          ask for a fixed price.
        </li>
        <li>Ask to see the chatbot working on your own data before you sign.</li>
      </ol>
      <p>
        For the wider version of this choice, covering agents that do work as well as bots that answer, see{' '}
        <a href="/blog/ai-agent-build-vs-buy-2026">build versus buy for AI agents</a>. For what the people who build
        these systems charge, see <a href="/blog/ai-consultant-cost-2026">AI consultant cost in 2026</a>.
      </p>

      <figure className="my-8">
        <img
          src="/images/blog/ai-chatbot-cost-2026/choice.webp"
          alt="A silver-haired woman in glasses and a navy blazer holds a grey folder in one hand and an orange folder in the other while a man in an olive shirt sits beside her with his hands clasped."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Two routes, one decision. Rent a product, or own a build.
        </figcaption>
      </figure>

      <h2 id="factoryjet-pricing">How FactoryJet prices chatbot work</h2>
      <p>
        We do not publish a price list, and nothing above is a FactoryJet price. FactoryJet quotes the build and the
        ongoing support as fixed prices in writing after a short scoping call. We can also show working software on your
        own data before a contract, so you can judge the chatbot before you judge the proposal.
      </p>
      <p>
        After launch we keep managing the servers, AI, APIs and maintenance, so your team does not have to. We design,
        build, implement and support the work, and you own what we build for you.
      </p>
      <p>
        We build chatbots and customer support agents, and we connect them to the systems a business already runs,
        including Shopify, HubSpot and WhatsApp. If a subscription product will do the job, we will say so on the call.
      </p>
      <p>
        To see the work behind these numbers, read about our{' '}
        <a href="/services/ai-chatbot-development">AI chatbot development</a>,{' '}
        <a href="/services/ai-customer-support-agents">AI customer support agents</a> and{' '}
        <a href="/services/ai-agent-development">AI agent development</a>. For what a full AI agent costs to build, see{' '}
        <a href="/blog/what-is-an-ai-agent-cost-2026">AI agent development cost in 2026</a>.
      </p>

      <h2 id="sources">Sources</h2>
      <p className="text-sm text-gray-600">
        All pages opened and read on 11 October 2026. Prices change, so check the source before you budget.
      </p>
      <ul className="list-disc pl-6 space-y-1 text-sm mb-8">
        <li>
          Vendor pricing pages:{' '}
          <a href={SRC.intercom} target="_blank" rel="noopener noreferrer">Intercom</a> and{' '}
          <a href={SRC.fin} target="_blank" rel="noopener noreferrer">Fin</a>,{' '}
          <a href={SRC.zendesk} target="_blank" rel="noopener noreferrer">Zendesk</a>,{' '}
          <a href={SRC.agentforce} target="_blank" rel="noopener noreferrer">Salesforce Agentforce</a>,{' '}
          <a href={SRC.freshdesk} target="_blank" rel="noopener noreferrer">Freshdesk</a>,{' '}
          <a href={SRC.gorgias} target="_blank" rel="noopener noreferrer">Gorgias</a>,{' '}
          <a href={SRC.tidio} target="_blank" rel="noopener noreferrer">Tidio</a>,{' '}
          <a href={SRC.crisp} target="_blank" rel="noopener noreferrer">Crisp</a>,{' '}
          <a href={SRC.chatbotCom} target="_blank" rel="noopener noreferrer">ChatBot.com</a>,{' '}
          <a href={SRC.kommunicate} target="_blank" rel="noopener noreferrer">Kommunicate</a>,{' '}
          <a href={SRC.chatfuel} target="_blank" rel="noopener noreferrer">Chatfuel</a>,{' '}
          <a href={SRC.elfsightPricing} target="_blank" rel="noopener noreferrer">Elfsight AI Chatbot</a>,{' '}
          <a href={SRC.shopifyInbox} target="_blank" rel="noopener noreferrer">Shopify Inbox</a>,{' '}
          <a href={SRC.chatbase} target="_blank" rel="noopener noreferrer">Chatbase</a>,{' '}
          <a href={SRC.botpress} target="_blank" rel="noopener noreferrer">Botpress</a>,{' '}
          <a href={SRC.quickchatPricing} target="_blank" rel="noopener noreferrer">Quickchat AI</a> and{' '}
          <a href={SRC.copilotStudio} target="_blank" rel="noopener noreferrer">Microsoft Copilot Studio</a>
        </li>
        <li>
          Vendor pages with no printed price:{' '}
          <a href={SRC.voiceflow} target="_blank" rel="noopener noreferrer">Voiceflow</a> and{' '}
          <a href={SRC.liveperson} target="_blank" rel="noopener noreferrer">LivePerson</a>
        </li>
        <li>
          <a href={SRC.clutch} target="_blank" rel="noopener noreferrer">Clutch, Top Chatbot Companies (ratings updated 11 October 2026)</a> and{' '}
          <a href={SRC.clutchUs} target="_blank" rel="noopener noreferrer">Top Chatbot Companies in the United States</a>
        </li>
        <li>
          <a href={SRC.codiant} target="_blank" rel="noopener noreferrer">Codiant, AI Chatbot Development Cost in 2026 (updated 2 September 2026)</a>
        </li>
        <li>
          <a href={SRC.cmarix} target="_blank" rel="noopener noreferrer">CMARIX, AI Chatbot Development Cost in 2026 (updated 2 September 2026)</a>
        </li>
        <li>
          <a href={SRC.spaculus} target="_blank" rel="noopener noreferrer">Spaculus, AI Chatbot Development Cost in 2026 (10 August 2026)</a>
        </li>
        <li>
          <a href={SRC.raftlabs} target="_blank" rel="noopener noreferrer">RaftLabs, AI Chatbot Development Services: 2026 Cost Guide (updated 14 June 2026)</a>
        </li>
        <li>
          <a href={SRC.kumo} target="_blank" rel="noopener noreferrer">Kumo, Chatbot Cost to Build in 2026 (updated 9 October 2026)</a>
        </li>
        <li>
          <a href={SRC.cleveroad} target="_blank" rel="noopener noreferrer">Cleveroad, Chatbot Development Cost Guide for 2026 (updated 20 September 2026)</a>,{' '}
          <a href={SRC.orangemantra} target="_blank" rel="noopener noreferrer">OrangeMantra, Chatbot Development Cost Breakdown (updated 17 August 2026)</a>,{' '}
          <a href={SRC.easycomm} target="_blank" rel="noopener noreferrer">Easycomm, AI Chatbot Development Cost Guide 2026 (updated 23 June 2026)</a>,{' '}
          <a href={SRC.topflight} target="_blank" rel="noopener noreferrer">Topflight Apps, chatbot development cost (December 2024)</a>
        </li>
        <li>
          <a href={SRC.masterOfCode} target="_blank" rel="noopener noreferrer">Master of Code, Chatbot Pricing (updated 30 September 2026)</a>,{' '}
          <a href={SRC.elfsightGuide} target="_blank" rel="noopener noreferrer">Elfsight, How Much Does a Chatbot Cost in 2026 (updated 20 August 2026)</a>,{' '}
          <a href={SRC.quickchatGuide} target="_blank" rel="noopener noreferrer">Quickchat AI, How Much Does an AI Chatbot Cost (updated 14 July 2026)</a>,{' '}
          <a href={SRC.crescendo} target="_blank" rel="noopener noreferrer">Crescendo, How Much Do AI Chatbots Cost (10 April 2026)</a>,{' '}
          <a href={SRC.bland} target="_blank" rel="noopener noreferrer">Bland, How much does a chatbot cost (updated 21 May 2026)</a>
        </li>
        <li>
          Our own measurements, all on 11 October 2026: two readings of each vendor price list, a tally of the 58 firms
          on the first page of the Clutch US chatbot list, and the question boxes Google showed under eight US chatbot
          cost searches
        </li>
      </ul>

      <div className="bg-[#FAF8F5] border-2 border-[#E5DFD7] p-6 sm:p-8 rounded-xl my-10 shadow-sm">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-2">
          Chatbot scoping call for US businesses
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] mb-3">
          Get a fixed price for your chatbot
        </h3>
        <p className="text-[#4B5563] text-base leading-relaxed mb-6">
          Tell us what your customers ask and which systems hold the answers. We will tell you straight whether a
          subscription product will do it or whether it needs a build, and FactoryJet quotes the build and the ongoing
          support as fixed prices in writing after a short scoping call.
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
            href="/services/ai-chatbot-development"
            className="inline-flex items-center gap-2 bg-white text-[#1F2937] border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            See AI chatbot development
          </a>
        </div>
      </div>
    </article>
  ),
};

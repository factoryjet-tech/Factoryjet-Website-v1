import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

/*
 * Microsoft Copilot Studio vs a custom AI agent (US, UK, Australia, 2026). Written 18 Oct 2026 (brief 06).
 * Target terms (DataForSEO Google Ads, 18 Oct 2026, US / UK): copilot studio 40,500 / 14,800; microsoft copilot studio 18,100;
 * what is copilot studio 1,900; microsoft copilot studio pricing 1,000; copilot studio pricing 720 / 260; copilot studio
 * license(ing) 720 / 260 (KD 16); copilot studio agents 720 ($37.91 CPC); microsoft 365 copilot studio 880; copilot studio cost
 * 320 / 110; copilot vs copilot studio 260 (KD 1); copilot studio lite 260 / 140; microsoft 365 copilot studio license 390;
 * copilot studio license cost 210; microsoft copilot studio free trial 320; how to access copilot studio 260.
 * PAA (18 Oct): "Is Copilot Studio free or paid?", "Is Copilot Studio expensive?", "Is Copilot Studio different from Copilot?",
 * "Is Copilot Studio included in Microsoft 365?", "What are the limitations of Copilot Studio?", "Do you need a separate license
 * for Copilot Studio?", "What type of license is required to use Copilot Studio?", "What is the difference between Copilot agent
 * and Copilot Studio?", "Do I need Copilot Studio to build an agent?".
 * Every Microsoft figure was read on Microsoft's own pages on 18 Oct 2026 (curl of the raw HTML plus a second read).
 * Rule B: Microsoft list prices only. No running-cost figure for a custom agent anywhere on this page.
 * FactoryJet does NOT claim Copilot Studio work or Microsoft partner status. Build ranges are ProductCrafters and Layer3 Labs.
 * The FAQ array below is the single source for both the visible FAQ and the FAQPage JSON-LD.
 */

const SRC = {
  pricing: 'https://www.microsoft.com/en-us/copilot/pricing/copilot-studio',
  pricingUk: 'https://www.microsoft.com/en-gb/microsoft-365-copilot/pricing/copilot-studio',
  pricingAu: 'https://www.microsoft.com/en-au/microsoft-365-copilot/pricing/copilot-studio',
  m365Business: 'https://www.microsoft.com/en-us/microsoft-365-copilot/business',
  billingRates: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-messages-management',
  licensing: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/billing-licensing',
  quotas: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-quotas',
  overview: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio',
  agentBuilder: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/copilot-studio-experience',
  customEngine: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/overview-custom-engine-agent',
  mcp: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-extend-action-mcp',
  security: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/security-and-governance',
  residency: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/geo-data-residency',
  estimator: 'https://microsoft.github.io/copilot-studio-estimator/',
  productcrafters: 'https://productcrafters.io/blog/how-much-does-it-cost-to-build-an-ai-agent/',
  layer3: 'https://www.layer3labs.io/guides/ai-consulting-rates-pricing',
  nist: 'https://www.nist.gov/itl/ai-risk-management-framework',
  ico: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/',
  oaic: 'https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products',
};

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;
const IMG = '/images/blog/copilot-studio-vs-custom-ai-agents-2026';

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
    q: 'Should we use Microsoft Copilot Studio or hire a firm to build custom AI agents?',
    a: 'Use Copilot Studio when the agent serves your own staff inside Microsoft 365, answers from SharePoint and Teams, and those staff already hold Microsoft 365 Copilot licences, because Microsoft does not charge credits for that use. Hire a firm for a custom agent when it talks to customers at volume, depends on systems outside Microsoft, or needs your own choice of model, approval steps and code.',
  },
  {
    q: 'Is Copilot Studio free or paid?',
    a: 'Mostly paid, with three free doors. Staff with a Microsoft 365 Copilot licence can build and use internal agents at no extra cost. The trial licence lets you build and test but not publish. Agent Builder is free for agents grounded on web knowledge only. Anything else, including customer-facing agents, uses Copilot Credits: $200 for a 25,000-credit pack each month or pay-as-you-go (Microsoft, read 18 October 2026).',
  },
  {
    q: 'How much does Copilot Studio cost in 2026?',
    a: 'Microsoft lists a capacity pack of 25,000 Copilot Credits at $200 per pack per month, a pay-as-you-go meter billed through Azure, and a one-year pre-purchase plan that saves up to 20%. Microsoft 365 Copilot, which includes Copilot Studio for internal use, is $30 per user per month paid yearly for enterprises. All figures read on microsoft.com on 18 October 2026, before tax.',
  },
  {
    q: 'Is Copilot Studio expensive?',
    a: 'It depends on who uses the agent. For staff who already hold Microsoft 365 Copilot licences, internal use carries no credit charge, so it is cheap to try. For a customer-facing agent, every answer costs credits. Microsoft’s own website support example uses 7,200 credits a day for 900 customers, which our arithmetic puts at nine packs, $1,800 a month at list price.',
  },
  {
    q: 'What is a Copilot Credit?',
    a: 'A Copilot Credit is the unit Microsoft bills Copilot Studio agents in. A scripted answer costs 1 credit, an AI-written answer 2, an agent action 5, and grounding an answer on your whole Microsoft 365 tenant 10. Voice costs 10 to 75 credits a minute. Microsoft’s estimator prices one credit at $0.01, and a $200 pack of 25,000 works out to $0.008 each.',
  },
  {
    q: 'Is Copilot Studio different from Copilot?',
    a: 'Yes. Microsoft 365 Copilot is the AI assistant inside Word, Excel, Outlook and Teams that each licensed person uses. Copilot Studio is the low-code tool for building agents: assistants with their own instructions, knowledge and actions. A Microsoft 365 Copilot licence includes Copilot Studio for internal agents. Building agents for customers or outside channels needs Copilot Studio’s own licence or pay-as-you-go.',
  },
  {
    q: 'Is Copilot Studio included in Microsoft 365?',
    a: 'Partly. It is included with the Microsoft 365 Copilot add-on, not with ordinary Microsoft 365 plans on their own. Microsoft says licensed users can build and use internal agents in Microsoft 365 at no extra cost. Publishing to websites, apps or social channels needs the standalone Copilot Studio licence, which Microsoft sells as $200 credit packs or pay-as-you-go.',
  },
  {
    q: 'Do you need a separate license for Copilot Studio?',
    a: 'Only for some jobs. Internal agents used by Microsoft 365 Copilot-licensed staff need nothing extra. You need the standalone licence, credit packs, pre-purchase or pay-as-you-go to publish to external channels or to serve staff without Copilot licences. Makers then get a free Copilot Studio user licence, but only after the tenant holds a prepaid credit pack.',
  },
  {
    q: 'What type of license is required to use Copilot Studio?',
    a: 'Microsoft lists four ways in: a Copilot Studio user licence (free, assigned by your admin once the tenant has a prepaid pack), the Copilot Studio authors role in Power Platform, a Microsoft 365 Copilot licence, or a trial licence. Running agents in production then needs Copilot Credits from packs, the pre-purchase plan or the pay-as-you-go meter linked to an Azure subscription.',
  },
  {
    q: 'What is the difference between a Copilot agent and Copilot Studio?',
    a: 'A Copilot agent is the thing your staff talk to inside Microsoft 365 Copilot. Copilot Studio is one of the tools that builds it. Microsoft offers two builders: Agent Builder, inside the Microsoft 365 Copilot app for quick question-and-answer agents for a person or small team, and Copilot Studio, a separate web portal for agents with workflows, connectors, external customers and admin controls.',
  },
  {
    q: 'Do I need Copilot Studio to build an agent?',
    a: 'No. Inside Microsoft you can use Agent Builder for simple agents, or the Microsoft 365 Agents SDK, Teams SDK or Microsoft Foundry for pro-code agents. Microsoft itself says to pick a pro-code route if you need full control over AI models or orchestration. Outside Microsoft, a custom agent can be built in ordinary code on any model and still appear in Teams.',
  },
  {
    q: 'What happens when we run out of Copilot Credits?',
    a: 'Microsoft allows some overage, then switches agents off. When a tenant on prepaid capacity reaches 125% of it, custom agents are disabled after the current conversation ends, and users see a message such as "This agent is currently unavailable. It has reached its usage limit." Adding packs, moving capacity between environments or linking pay-as-you-go avoids the switch-off.',
  },
  {
    q: 'Do unused Copilot Credits roll over?',
    a: 'No. Microsoft Learn states that Copilot Studio enforces purchased capacity monthly and unused Copilot Credits do not carry over to the next month. That makes pack size a forecasting decision: buy too many and the surplus expires; buy too few and the 125% switch-off applies. Pay-as-you-go avoids both, at the higher per-credit rate.',
  },
  {
    q: 'What are the limitations of Copilot Studio?',
    a: 'The ones that bite in production: AI request limits of 50 a minute per environment on 1 to 10 prepaid packs; 500 knowledge sources and 1,000 topics per agent; a 7 MB SharePoint file limit for makers without a Microsoft 365 Copilot licence; files with confidential sensitivity labels are skipped; agents cannot write and run code over spreadsheets; and the 125% capacity switch-off.',
  },
  {
    q: 'Can a Copilot Studio agent talk to customers on our website?',
    a: 'Yes, with the standalone licence. Microsoft’s pricing page lists external channels such as websites, apps and social platforms under the paid plans, not under the Microsoft 365 Copilot inclusion. Every customer conversation then uses credits. Plan for the rate limit too: Microsoft warns that customer-facing agents can hit requests-per-minute limits even when monthly volume looks manageable.',
  },
  {
    q: 'Can Copilot Studio connect to NetSuite, Salesforce or SAP?',
    a: 'Through connectors, yes, where one exists for your system and the actions you need. Microsoft says Copilot Studio offers prebuilt and custom connectors, and it can call tools on a Model Context Protocol (MCP) server. Salesforce knowledge articles can be added as a knowledge source. Where no connector covers your NetSuite, SAP or custom ERP job, someone has to build the API or MCP server.',
  },
  {
    q: 'Copilot Studio vs Azure AI Foundry: what is the difference?',
    a: 'Copilot Studio is low-code and Microsoft-managed: you configure an agent in a web portal and Microsoft runs it. Microsoft Foundry is for developers who want their own models and orchestration, in Python or C#. Microsoft’s own example: a law firm building a case-law agent on a custom-trained model uses Foundry, while an HR onboarding helper uses Copilot Studio.',
  },
  {
    q: 'What is a custom engine agent?',
    a: 'Microsoft’s name for an agent that appears inside Microsoft 365 Copilot or Teams but brings its own orchestration and AI model. Microsoft says these agents give full control over orchestration, AI models and data integrations. You can build one in Copilot Studio, the Microsoft 365 Agents SDK, the Teams SDK or Foundry. Your staff open it in Teams like any other agent, while the logic sits in your own code.',
  },
  {
    q: 'Which models can Copilot Studio use?',
    a: 'Copilot Studio supplies its own language models for agents, and its billing rates apply to all of them. You can also bring your own model, including Azure Foundry models, which Microsoft bills separately from Copilot Credits. Reasoning models add a premium meter on top of the normal feature rate. A fully custom agent can use any provider, including OpenAI, Anthropic Claude or Google Gemini.',
  },
  {
    q: 'Is Copilot Studio secure enough for regulated data?',
    a: 'Microsoft gives admins strong tools: data loss prevention (DLP) policies, Microsoft Purview audit logs, Entra ID sign-in, customer-managed encryption keys, sensitivity labels and controls on data leaving the United States. Whether that is enough depends on your rules, not Microsoft’s. Check UK GDPR guidance from the ICO, Australian privacy guidance from the OAIC, and the NIST AI Risk Management Framework against your own use.',
  },
  {
    q: 'Who owns an agent built in Copilot Studio vs a custom one?',
    a: 'Microsoft says any agent you create in Copilot Studio is your own product, but it runs on Microsoft’s platform and stops if your licence or credits stop. A custom agent is code in your repository that you can move between clouds and models. Ask any builder to put code, prompt and data ownership in the contract before work starts.',
  },
  {
    q: 'Can we start in Copilot Studio and move to a custom agent later?',
    a: 'Yes, and many teams should. Start with an internal Copilot Studio agent for licensed staff, measure what questions arrive and which systems it must reach, then decide. Microsoft lets you copy an Agent Builder agent into Copilot Studio. Moving from Copilot Studio to code is a rebuild of the logic, but your knowledge sources, test questions and usage data carry across.',
  },
  {
    q: 'What does a custom AI agent cost to build?',
    a: 'Market ranges vary by scope. ProductCrafters puts AI agent development at $5,000 to $180,000 or more (February 2026). Layer3 Labs, updated 9 September 2026, puts a production MVP workflow at $5,000 to $25,000 and a full enterprise AI system at $50,000 to $200,000 or more. These are market ranges, not FactoryJet prices. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    q: 'Is Copilot Studio priced the same in the UK and Australia?',
    a: 'Each country page shows its own local price. On 18 October 2026 Microsoft listed the 25,000-credit pack at £153.80 a month in the UK before VAT and AU$299.30 a month in Australia before GST, against $200 in the US. Microsoft 365 Copilot was £23.10 and AU$44.90 per user per month paid yearly. Check your own country page before budgeting.',
  },
  {
    q: 'Can FactoryJet help us decide between Copilot Studio and a custom agent?',
    a: 'Yes. FactoryJet builds custom AI agents and the integrations behind them, including APIs and MCP servers for ERP, CRM and other business systems. In a short call we map each job to the route that fits: Microsoft out of the box, a custom back end, or a custom agent. We show working software on your own data before you sign, and quote a fixed price in writing.',
  },
];

export const post: BlogPost = {
  id: '784',
  slug: 'copilot-studio-vs-custom-ai-agents-2026',
  title: 'Microsoft Copilot Studio vs a Custom AI Agent: What It Costs and When Each Wins (2026)',
  excerpt:
    'Microsoft Copilot Studio pricing read on 18 October 2026: $200 credit packs, pay-as-you-go, what each Copilot Credit buys, the 125% switch-off, rate limits, UK and Australian prices, and when a custom AI agent or a custom back end is the better call for a mid-sized company.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Oct 18, 2026',
  dateModified: 'Oct 18, 2026',
  readTime: '17 min read',
  imageUrl: `${IMG}/hero.webp`,
  imageAlt:
    'Seen from behind, a woman with short silver hair in a navy blazer points a pen at a monitor showing a stacked grey layout on the left and a branching orange and grey flow on the right, while a bearded man in a light blue shirt watches, an orange notebook on the table.',
  meta: {
    title: 'Copilot Studio vs Custom AI Agents: Pricing (2026)',
    description:
      'Microsoft Copilot Studio pricing as of October 2026, what the credits buy, its limits, and when a custom AI agent is the better call for a mid-sized company.',
  },
  keyTakeaways: [
    'Copilot Studio sells 25,000 Copilot Credits for $200 per pack per month, or pay-as-you-go through Azure; pre-purchase saves up to 20% (Microsoft pricing page, read 18 October 2026).',
    'Internal agents used by staff with a Microsoft 365 Copilot licence ($30 per user per month, paid yearly) are billed at "No charge" when the agent runs under that user’s identity (Microsoft Learn billing rates).',
    'Per-answer rates: 1 credit for a scripted answer, 2 for an AI-written answer, 5 for an agent action, 10 for tenant graph grounding, 10 to 75 a minute for voice (Microsoft Learn, updated 15 October 2026).',
    'Custom agents are disabled when a tenant reaches 125% of prepaid capacity, and unused credits do not roll over to the next month (Microsoft Learn billing and licensing pages).',
    'Microsoft’s own advice: "If you need full control over AI models or orchestration, opt for a pro-code approach with Microsoft 365 Agents SDK or Foundry" (Microsoft Learn, custom engine agents).',
    'A custom agent fits customer-facing work at volume, systems outside Microsoft such as NetSuite, Odoo or Shopify, and teams that want their own model choice, approval steps and code.',
    'No figure on this page is a FactoryJet price. FactoryJet quotes a fixed price in writing after a short scoping call.',
  ],
  faqs,
  content: (
    <article>
      {/* Answer-first block */}
      <div className="bg-white border-2 border-[#E5DFD7] rounded-xl p-6 sm:p-8 mb-10">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-3">The short answer</p>
        <p className="text-lg leading-relaxed mb-0">
          Use <strong>Microsoft Copilot Studio</strong> when the agent serves your own staff inside Microsoft 365, answers
          from SharePoint and Teams, and those staff already hold Microsoft 365 Copilot licences, because Microsoft does not
          charge credits for their internal use. Have a <strong>custom AI agent</strong> built when it faces customers at
          volume, needs systems outside Microsoft, or must control the model and logic.
        </p>
      </div>

      <div className="bg-[#FAF8F5] border-l-4 border-[#B23E13] p-5 rounded-r-lg mb-10">
        <p className="text-sm text-[#1F2937] leading-relaxed mb-0">
          <strong>FactoryJet builds custom AI agents and integrations, so weigh this page with that in mind.</strong>{' '}
          Every Microsoft figure below was read on Microsoft&apos;s own pages on 18 October 2026 and is linked where it
          appears. Prices are list prices before tax and change often. No figure here is a FactoryJet price.
        </p>
      </div>

      <div className="bg-white border border-[#E5DFD7] rounded-xl p-5 mb-10">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-2">How we made this page</p>
        <ul className="list-disc pl-6 space-y-1 text-sm mb-0">
          <li>We read the top 10 Google results and People Also Ask for the main Copilot Studio searches in the US, UK and Australia on 18 October 2026 (DataForSEO).</li>
          <li>We asked 36 buyer questions across ChatGPT, Gemini, Claude, Perplexity and Google&apos;s AI answers on 18 October 2026 and read the pages they cited.</li>
          <li>We opened every Microsoft pricing and Microsoft Learn page quoted here on 18 October 2026 and copied the figures from the page itself.</li>
          <li>Where we did arithmetic on Microsoft&apos;s numbers, the sum is shown so you can check it.</li>
        </ul>
      </div>

      <p>
        Microsoft Copilot Studio (also searched as MS Copilot Studio or Copilot Agent Studio) is Microsoft&apos;s low-code
        tool for building AI agents: assistants with their own
        instructions, knowledge and actions that run in Teams, Microsoft 365 Copilot, websites and apps. It is also one of
        the most searched AI tools in business software. Around 40,500 people a month search Google in the US for
        &quot;copilot studio&quot;, 14,800 in the UK, and another 1,900 in the US ask &quot;what is copilot studio&quot;
        (DataForSEO, 18 October 2026). The searches that carry buying intent are about money: &quot;microsoft copilot
        studio pricing&quot; (1,000 a month in the US), &quot;copilot studio pricing&quot; (720 US, 260 UK), &quot;copilot
        studio license&quot; (720 US) and &quot;copilot studio cost&quot; (320 US).
      </p>
      <p>
        When we asked AI assistants whether a company should use Copilot Studio or hire a firm for custom AI agents, the
        ChatGPT app searched for Microsoft&apos;s &quot;official&quot; pricing and licensing pages on every run, in all
        three countries. Several pages that rank for this question quote Microsoft&apos;s older per-message pricing, which
        Microsoft replaced with Copilot Credits on 1 September 2025. So this guide quotes Microsoft&apos;s own current
        figures, with dates and links, then sets out the limits, the Microsoft ladder of build tools, and when a custom
        agent is the better buy for a company of 10 to 50 staff, 50 to 500, or 500 and up.
      </p>

      <h2 id="what-is">What is Microsoft Copilot Studio?</h2>
      <p>
        Microsoft&apos;s <a href={SRC.overview} {...ext}>Copilot Studio overview</a> (updated 17 October 2026) calls it
        &quot;a graphical, low-code studio for building and managing AI-powered agents and workflows&quot;. Low-code means
        you build by describing the agent, filling in forms and drawing flows, with little or no programming. Microsoft Copilot Studio AI agents
        follow your instructions, answer from the knowledge sources you connect, and take actions through
        tools and connectors. Microsoft says agents can work with employees and customers across Microsoft Teams, Microsoft
        Copilot, websites and mobile apps.
      </p>
      <p>
        How to access Copilot Studio: open copilotstudio.microsoft.com in a modern browser and sign in with your work
        account. The Microsoft Copilot Studio free trial lets one person sign up and build agents, test them in the test
        chat panel, and stop there, because a trial agent cannot be published. Admins can block these individual sign-ups,
        which Microsoft&apos;s admin documentation calls viral sign-ups; the &quot;Microsoft Copilot Studio viral trial&quot;
        people search for is this same individual trial. For Copilot Studio training, Microsoft Learn&apos;s
        own documentation is free and is the source for most figures on this page.
      </p>

      <h2 id="pricing">Copilot Studio pricing at a glance (read 18 October 2026)</h2>
      <p>
        Microsoft prices Copilot Studio in two layers. People who build or use agents need a licence or a role. The
        agents themselves draw down <strong>Copilot Credits</strong>, a usage unit pooled across your whole Microsoft 365
        tenant (the tenant is your company&apos;s Microsoft account space). Here is the Copilot Studio license cost and the Microsoft Copilot Studio price per credit as the{' '}
        <a href={SRC.pricing} {...ext}>Microsoft Copilot Studio pricing page</a> and its sister pages listed them on 18 October 2026.
      </p>
      <Table
        head={['Item', 'US list price', 'What it gives you', 'Source']}
        rows={[
          ['Copilot Studio capacity pack', '$200 per pack per month', '25,000 Copilot Credits pooled across the tenant; agents on any supported channel, premium connectors', <a key="p1" href={SRC.pricing} {...ext}>Microsoft pricing page</a>],
          ['Pay-as-you-go meter', 'Billed through Azure each month; Microsoft’s estimator shows 1 credit = $0.01', 'No upfront commitment; pay for credits used; needs an Azure subscription', <a key="p2" href={SRC.estimator} {...ext}>Copilot Credit Estimator</a>],
          ['Pre-purchase plan', 'Up to 20% off', 'One-year prepaid Copilot Credit Commit Units, with pay-as-you-go cover when they run out', <a key="p3" href={SRC.licensing} {...ext}>Microsoft Learn licensing</a>],
          ['Microsoft 365 Copilot (enterprise add-on)', '$30 per user per month, paid yearly', 'Copilot in Word, Excel, Teams and Outlook, plus internal agents in Copilot Studio at no additional cost', <a key="p4" href={SRC.pricing} {...ext}>Microsoft pricing page</a>],
          ['Microsoft 365 Copilot Business (up to 300 users)', '$21 per user per month paid yearly ($18 in the first year on offers bought 1 July to 31 December 2026); $25.20 paid monthly', 'Copilot for smaller firms on an eligible Microsoft 365 Business plan', <a key="p5" href={SRC.m365Business} {...ext}>Microsoft 365 Copilot Business page</a>],
          ['Copilot Studio user licence', '$0', 'Lets a maker build; your admin can assign it only after the tenant holds a prepaid pack', <a key="p6" href={SRC.licensing} {...ext}>Microsoft Learn licensing</a>],
          ['Trial licence', '$0', 'Build and test agents in the test panel; you cannot publish', <a key="p7" href={SRC.licensing} {...ext}>Microsoft Learn licensing</a>],
        ]}
      />
      <p>
        Two numbers are worth working out. A $200 pack of 25,000 credits is $0.008 a credit, so packs run about 20%
        cheaper than the $0.01 pay-as-you-go rate shown in Microsoft&apos;s estimator, if you use the whole pack. And
        Microsoft says the switch from &quot;messages&quot; to &quot;Copilot Credits&quot; on 1 September 2025 changed
        neither the quantity per pack nor the pay-as-you-go rate (
        <a href={SRC.licensing} {...ext}>Microsoft Learn, standard licensing page</a>). Any guide still quoting a separate
        per-message price list is describing the same money under the old name.
      </p>

      <figure className="my-8">
        <img
          src={`${IMG}/pricing.webp`}
          alt="A grey-haired man in glasses and a white shirt holds a printed sheet beside a laptop showing grey bars with three orange bars, with a black calculator and an orange stapler on the desk."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Copilot Studio has two price lines to check: licences for people and credits for agents.
        </figcaption>
      </figure>

      <h2 id="copilot-vs-studio">Copilot vs Copilot Studio: which one you are paying for</h2>
      <p>
        &quot;Copilot vs Copilot Studio&quot; is a common search (260 a month in the US) because the names overlap.{' '}
        <strong>Microsoft 365 Copilot</strong> is the assistant each licensed person uses inside Word, Excel, Outlook and
        Teams. <strong>Copilot Studio</strong> is the workshop where agents get built. Microsoft&apos;s pricing page puts
        the line here: Copilot Studio included with Microsoft 365 Copilot lets licensed users &quot;build and use internal
        agents within Microsoft 365&quot; at no additional cost, while the standalone Copilot Studio licence is what lets
        you publish to external channels such as websites, apps and social platforms.
      </p>
      <p>
        So the Microsoft 365 Copilot Studio license question has a short answer. If your agent only serves staff who
        already pay $30 a month for Microsoft 365 Copilot, you may need nothing more. If it serves customers, partners, or
        staff without that licence, the Microsoft Copilot Studio license you need is the standalone one: credit packs or
        pay-as-you-go. On 18 October 2026, Microsoft&apos;s pricing page
        mentioned <strong>Copilot Studio Lite</strong> only in a footnote, with no price of its own; the lightweight builder
        it describes in the same section is Agent Builder, covered in the ladder below.
      </p>

      <h2 id="credits">What a Copilot Credit buys</h2>
      <p>
        Microsoft Learn&apos;s <a href={SRC.billingRates} {...ext}>billing rates page</a> (updated 15 October 2026) sets
        the credit price of each thing an agent does. The third column is the one most guides skip.
      </p>
      <Table
        head={['Agent feature', 'Copilot Credits', 'When used by a Microsoft 365 Copilot-licensed user']}
        rows={[
          ['Classic answer (a reply you wrote in advance)', '1', 'No charge'],
          ['Generative answer (a reply the AI writes from your knowledge)', '2', 'No charge'],
          ['Agent action (a trigger, reasoning step or topic change)', '5', 'No charge'],
          ['Tenant graph grounding (searching your whole Microsoft 365 tenant)', '10', 'No charge'],
          ['Agent flow actions', '13 per 100 actions', 'No charge, only when the flow starts from the agent'],
          ['Content processing tools', '8 per page', 'No charge'],
          ['Classic voice', '10 per minute', 'Core activity included in the minute rate'],
          ['Generative AI voice', '35 per minute', 'Core activity included'],
          ['Premium generative AI voice', '75 per minute', 'Core activity included'],
        ]}
      />
      <p>
        The &quot;No charge&quot; column has conditions. Microsoft says it covers employee-facing use when the user holds a
        Microsoft 365 Copilot licence and the agent runs under that user&apos;s own sign-in, within fair usage limits.
        Computer-using agents (agents that click through screens like a person) are not included. Reasoning models add a
        premium meter on top of the feature rate. Copilot Studio vs Power Automate is a billing question as well: Microsoft
        says ordinary Power Automate cloud flows use Power Automate licensing, not Copilot Credits, while agent flows built
        inside Copilot Studio draw credits.
      </p>
      <p>
        Microsoft&apos;s own worked examples show how fast the numbers move. A{' '}
        <strong>website customer support agent</strong> giving four classic answers and two generative answers per visitor,
        for 900 customers a day, uses [(4 x 1) + (2 x 2)] x 900 = 7,200 credits a day, in Microsoft&apos;s words. Our
        arithmetic on Microsoft&apos;s list prices: 7,200 x 30 days is 216,000 credits a month, which needs nine $200 packs
        ($1,800 a month), or about $2,160 on pay-as-you-go at $0.01 a credit. A{' '}
        <strong>sales performance agent</strong> grounded on Microsoft Graph, used by 50 licensed and 100 unlicensed
        staff, is billed only for the 100 unlicensed users: 4,800 credits a day. The licensed 50 cost nothing extra.
      </p>

      <h2 id="estimate">How to estimate your Copilot Studio cost in five steps</h2>
      <p>
        Searches for a &quot;copilot studio pricing calculator&quot; lead to Microsoft&apos;s free{' '}
        <a href={SRC.estimator} {...ext}>Copilot Credit Estimator</a>. Microsoft&apos;s own disclaimer on it says it
        &quot;should not be used as a pricing calculator&quot;, and the estimate is not a binding offer. Use it as a
        forecast, then check against real usage. These five steps use only Microsoft&apos;s rates and your own volumes.
      </p>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li>Split users into two groups: staff with Microsoft 365 Copilot licences (internal use not charged) and everyone else, including customers.</li>
        <li>For one typical conversation, count classic answers, generative answers, agent actions and graph-grounded answers, and price each at 1, 2, 5 and 10 credits.</li>
        <li>Multiply credits per conversation by conversations a month for the charged group only.</li>
        <li>Divide by 25,000 and round up to get packs at $200 each, or multiply by $0.01 for pay-as-you-go. Add 20% headroom, because unused credits expire monthly and the switch-off sits at 125%.</li>
        <li>Pilot for a month, read actual use in the Power Platform admin center, and set a per-agent monthly cap there before going wide.</li>
      </ol>

      <figure className="my-8">
        <img
          src={`${IMG}/estimate.webp`}
          alt="A woman with long dark curly hair in a mustard cardigan sticks an orange note at the top of the fifth of five columns of blank sticky notes on a white board, while a red-haired man in a grey hoodie watches from a desk."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Five columns, five steps: split users, count credits per conversation, multiply, size the packs, then pilot.
        </figcaption>
      </figure>

      <h2 id="limits">Five Copilot Studio limitations to know before you build</h2>
      <p>
        These come from Microsoft Learn&apos;s <a href={SRC.quotas} {...ext}>quotas and limits page</a> (updated 15
        October 2026) and the <a href={SRC.billingRates} {...ext}>billing rates page</a>. None of them is a reason to avoid
        Copilot Studio. Each is a reason to size the plan before launch.
      </p>
      <ol className="list-decimal pl-6 space-y-3 mb-6">
        <li>
          <strong>The 125% switch-off.</strong> When a tenant on prepaid capacity reaches 125% of it, custom agents are
          disabled once the current conversation ends. Users then see &quot;There is a billing issue&quot; or &quot;This
          agent is currently unavailable. It has reached its usage limit.&quot; Environments on pay-as-you-go are not cut
          off this way.
        </li>
        <li>
          <strong>AI request limits.</strong> Generative requests are capped at 50 a minute and 1,000 an hour per environment
          on 1 to 10 prepaid packs, 80 a minute on 11 to 50 packs, and 100 a minute on pay-as-you-go. Trial and developer
          environments get 10 a minute. Microsoft warns customer-facing and autonomous agents can hit these even when monthly
          volume looks fine.
        </li>
        <li>
          <strong>Knowledge and topic caps.</strong> 500 knowledge sources and 1,000 topics per agent, 25 SharePoint site
          addresses per agent with generative orchestration, and SharePoint list answers drawn from the first 2,048 rows.
        </li>
        <li>
          <strong>The SharePoint file rule.</strong> For makers without a Microsoft 365 Copilot licence in the same tenant,
          generative answers can only use SharePoint files under 7 MB. With the licence and tenant graph grounding,
          Microsoft supports files up to 200 MB. Documents labelled confidential or highly confidential are not indexed.
        </li>
        <li>
          <strong>Publishing outside the company needs the paid licence.</strong> The Microsoft 365 Copilot inclusion
          covers internal agents. Websites, apps and social channels need packs, pre-purchase or pay-as-you-go, and a trial
          licence cannot publish at all.
        </li>
      </ol>

      <figure className="my-8">
        <img
          src={`${IMG}/limits.webp`}
          alt="A man with a shaved head in a dark green polo shirt stands at a desk studying a monitor with a long orange bar almost full and three small grey line charts, an orange mug beside him."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Watch capacity in the admin center. At 125% of prepaid credits, custom agents switch off.
        </figcaption>
      </figure>

      <h2 id="ladder">Copilot, Agent Builder, Copilot Studio, Foundry, Agents SDK: the Microsoft ladder</h2>
      <p>
        &quot;Agent Builder vs Copilot Studio vs Foundry&quot; is one of Google&apos;s related searches for this topic,
        and Microsoft has five rungs, simplest first. Microsoft&apos;s{' '}
        <a href={SRC.agentBuilder} {...ext}>Agent Builder vs Copilot Studio page</a> and its{' '}
        <a href={SRC.customEngine} {...ext}>custom engine agents overview</a> (both updated 30 September 2026) set out the
        differences.
      </p>
      <Table
        head={['Rung', 'Who builds', 'Fits', 'Microsoft’s own example']}
        rows={[
          ['Microsoft 365 Copilot', 'Nobody; you use it', 'One person working in Word, Excel, Outlook and Teams', 'Pre-built agents such as Researcher and Analyst'],
          ['Agent Builder', 'Information workers, no code', 'Question-and-answer agents for a person or small team', 'A project FAQ bot answering from project documents'],
          ['Copilot Studio', 'Makers and developers, low-code', 'Departments, the whole company or external customers; workflows, connectors, approvals', 'An employee onboarding assistant answering HR questions'],
          ['Microsoft 365 Agents SDK', 'Developers in C#, JavaScript or Python', 'Full control of orchestration and any AI model, across Teams, Copilot and websites', 'Tailored multi-channel agents for organisations and software vendors'],
          ['Microsoft Foundry', 'Developers in Python or C#', 'Custom models and orchestration, published into Microsoft 365', 'A law firm agent using a custom-trained model for case-law analysis'],
        ]}
      />
      <p>
        The sentence most competing guides leave out is Microsoft&apos;s own: &quot;If you need full control over AI models
        or orchestration, opt for a pro-code approach with Microsoft 365 Agents SDK or Foundry via Agents Toolkit.&quot;
        Pro-code here means a developer writes the agent in ordinary code. That is what a custom AI agent is, whether it is
        published into Microsoft 365 or runs on its own.
      </p>

      <figure className="my-8">
        <img
          src={`${IMG}/ladder.webp`}
          alt="Five rounded blocks rise from left to right like steps, four in shades of grey and the tallest in orange, joined by a thin grey line through small circles."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Five rungs from using Copilot to coding your own agent. Each step up adds control and adds build work.
        </figcaption>
      </figure>

      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg my-8">
        <h3 className="text-lg font-bold mb-3">Not sure which rung your agent belongs on?</h3>
        <p className="mb-4">
          Bring the job, the people who will use the agent and the systems behind it. We will tell you which parts
          Microsoft covers as sold and which need custom work. See a demo on your own data before you sign. Founder replies
          within 24 hours.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors"
        >
          See a demo on your own data
        </a>
      </div>

      <h2 id="studio-wins">When Copilot Studio is the right call</h2>
      <p>
        Copilot Studio agents are strongest where Microsoft already holds the data and the identity. Pick it when most of
        these are true:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>The users are your own staff, and many already hold Microsoft 365 Copilot licences, so their use is not charged.</li>
        <li>The answers live in SharePoint, OneDrive, Teams or Dataverse, which Copilot Studio reads natively.</li>
        <li>The actions are standard: create a ticket, start a Power Automate flow, route an approval, update a Dataverse row.</li>
        <li>A prebuilt connector exists for each outside system the agent must touch.</li>
        <li>Your IT team already runs the Power Platform admin center and wants agents governed in the same place.</li>
        <li>You want a working internal pilot fast, built by a maker in your own team rather than a developer.</li>
      </ul>
      <p>
        A 50-person accounting firm in Manchester or a 300-person distributor in Ohio whose staff live in Teams and
        SharePoint fits this profile well. So does an HR or IT help desk agent in a 2,000-person company. Microsoft&apos;s
        own Copilot Studio examples are an IT help desk triage agent, a customer support agent that raises tickets and
        hands over to a person, and a sales assistant that reads CRM data and starts an approval.
      </p>

      <h2 id="custom-wins">When a custom AI agent is the right call</h2>
      <p>
        A custom agent is code written for your job, on the model you choose, connected to your systems through their
        APIs. It is the right buy when the job does not sit inside Microsoft, or when credit pricing and platform limits
        would shape the product more than your customers do.
      </p>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li><strong>Customer-facing at volume.</strong> Website chat, WhatsApp or voice for thousands of customers a day, where every answer would otherwise draw credits and the 50-a-minute limit on small pack counts matters.</li>
        <li><strong>Systems outside Microsoft.</strong> Orders in NetSuite, Odoo, SAP Business One or ERPNext, stock in Shopify, deals in HubSpot or Salesforce, invoices in Xero, or EDI feeds from trading partners.</li>
        <li><strong>Model choice.</strong> You want to pick or switch between OpenAI, Anthropic Claude and Google Gemini, or run a model in your own cloud account.</li>
        <li><strong>Custom approval steps and audit logs.</strong> A person must approve before an order, refund or price change posts, and every step must be logged in a format your auditors already use.</li>
        <li><strong>Code in your own repository.</strong> You want the agent to keep running if you change software vendors, with no dependency on a monthly credit pool.</li>
        <li><strong>Work that is not a conversation.</strong> Reading emailed purchase orders and PDFs, matching invoices, or building quotes from a rule book, where the agent works in the background.</li>
      </ol>
      <p>
        Our guides to <a href="/blog/enterprise-ai-agents-mid-sized-companies-buy-or-build-2026">buying or building enterprise AI agents</a>{' '}
        and <a href="/blog/ai-agent-build-vs-buy-2026">AI agent build vs buy</a> cover the same decision across Microsoft,
        Salesforce and help desk platforms. For the Salesforce version of this page, see{' '}
        <a href="/blog/agentforce-pricing-vs-custom-ai-agent-2026">Agentforce pricing vs a custom AI agent</a>.
      </p>

      <h2 id="compare">Copilot Studio vs a custom AI agent, side by side</h2>
      <Table
        head={['Question', 'Copilot Studio', 'Custom AI agent']}
        rows={[
          ['Who builds it', 'A maker in your team, low-code', 'Developers, in code'],
          ['How you pay Microsoft', 'Credit packs ($200 per 25,000), pay-as-you-go or pre-purchase; internal use free for Copilot-licensed staff', 'No Copilot Studio credits; a build price, plus your own cloud and AI accounts'],
          ['Models', 'Copilot Studio’s models, or your own Foundry model, which Microsoft bills separately', 'Any provider: OpenAI, Anthropic Claude, Google Gemini, or open models'],
          ['Systems it reaches', 'Microsoft 365 natively; others through prebuilt or custom connectors and MCP tools', 'Any system with an API, including custom ERPs and EDI'],
          ['Channels', 'Teams, Microsoft 365 Copilot, websites, apps, social (external needs paid licence)', 'Any: website, WhatsApp, voice, email, Teams via the Agents SDK'],
          ['Limits', '125% capacity switch-off; 50 to 100 AI requests a minute per environment; 500 knowledge sources', 'Set by your own design and cloud account'],
          ['Governance', 'DLP, Purview audit logs, Entra ID, environment policies in Microsoft admin centers', 'Built to your rules: approval queue, logs, role-based access'],
          ['Who owns it', 'Your agent, on Microsoft’s platform', 'Your code and repository'],
        ]}
      />

      <h2 id="middle-route">The middle route: Copilot Studio front end, custom back end</h2>
      <p>
        Many companies do not need to pick one side. Copilot Studio agents can call tools on a{' '}
        <a href={SRC.mcp} {...ext}>Model Context Protocol (MCP) server</a>, a standard way of exposing a system&apos;s
        actions to an AI agent. Microsoft says each tool an MCP server publishes becomes available in Copilot Studio
        automatically, once generative orchestration is turned on. So a Copilot Studio agent in Teams can check stock in
        NetSuite or draft an order in Odoo, if someone builds the MCP server or API in front of that system.
      </p>
      <p>
        The other middle route runs the opposite way. A <strong>custom engine agent</strong>, in Microsoft&apos;s words,
        provides &quot;full control over orchestration, AI models, and data integrations&quot; while still appearing in
        Microsoft 365 Copilot and Teams. Built with the Microsoft 365 Agents SDK, the logic lives in your code and staff
        still open it in Teams. Our guide to a{' '}
        <a href="/blog/custom-mcp-server-erp-crm-mid-sized-companies-2026">custom MCP server for ERP and CRM</a> shows
        what that back end involves.
      </p>
      <Table
        head={['Route', 'Front door', 'Where the logic lives', 'Fits when']}
        rows={[
          ['Copilot Studio only', 'Teams, Copilot, website', 'Copilot Studio', 'The job lives in Microsoft 365 and has a connector'],
          ['Copilot Studio plus custom MCP server or API', 'Teams, Copilot, website', 'Copilot Studio, calling your custom tools', 'One or two systems have no connector'],
          ['Custom engine agent (Agents SDK)', 'Teams and Microsoft 365 Copilot', 'Your code, any model', 'Staff live in Teams but you need model and logic control'],
          ['Fully custom agent', 'Any channel', 'Your code and cloud accounts', 'Customers at volume, or most of the job sits outside Microsoft'],
        ]}
      />

      <figure className="my-8">
        <img
          src={`${IMG}/middle.webp`}
          alt="A woman with a black bob in a cream sweater types on a laptop showing grey and orange chat bubbles while a white-bearded man in a denim shirt points at a second monitor showing orange boxes linked to four grey boxes, an orange cable reel on the desk."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          The chat window stays in Microsoft. The flow behind it can be your own code.
        </figcaption>
      </figure>

      <h2 id="governance">Governance and security in each route</h2>
      <p>
        Governance means who can build agents, what data they can touch, and who can see what they did. On the Microsoft
        side, the <a href={SRC.security} {...ext}>Copilot Studio security and governance page</a> (updated 15 October 2026)
        lists the controls an admin gets: data loss prevention (DLP) policies that decide which connectors, knowledge sources
        and channels an agent may use; maker audit logs in Microsoft Purview; alerts in Microsoft Sentinel; Entra ID sign-in;
        customer-managed encryption keys; sensitivity labels on SharePoint answers; and a switch to stop generative AI data
        moving outside the United States. Microsoft also notes that its content moderation covers predefined harmful-content
        categories, not subjects your admin defines.
      </p>
      <p>
        On a custom agent, you build the same controls on purpose, and you decide their shape. The ones we would expect in
        any written plan:
      </p>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li>An approval queue, so a person approves before the agent posts an order, refund, price or payment.</li>
        <li>A log of every prompt, tool call and answer, kept in your own account for the period your auditors set.</li>
        <li>Role-based access, so the agent can only read and change what the signed-in person could.</li>
        <li>Data kept in your own cloud and AI accounts, with a written answer on where it is processed.</li>
        <li>A test set of real past cases, run before each release, with the pass rate recorded.</li>
      </ol>
      <p>
        Our <a href="/blog/ai-agent-governance-policy-mid-sized-companies-2026">AI agent governance policy guide</a> and{' '}
        <a href="/blog/ai-agent-security-risks-controls-2026">AI agent security risks and controls</a> go deeper. For an
        outside reference, the US <a href={SRC.nist} {...ext}>NIST AI Risk Management Framework</a> is intended for
        voluntary use and gives a shared vocabulary for these risks.
      </p>

      <figure className="my-8">
        <img
          src={`${IMG}/governance.webp`}
          alt="A woman with grey hair in a low bun and a burgundy blouse works at a monitor showing a list of grey rows, each ending in an orange box, two of them ticked, with an orange water bottle on the desk."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          An approval queue: the agent proposes, a person approves before anything posts.
        </figcaption>
      </figure>

      <h2 id="uk-au">Copilot Studio pricing in the UK and Australia</h2>
      <p>
        Microsoft publishes a local page for each country, and the local price is not a straight currency conversion of
        the US figure on the day you read it. On 18 October 2026:
      </p>
      <Table
        head={['Item', 'US', 'UK (before VAT)', 'Australia (before GST)']}
        rows={[
          ['Copilot Studio pack, 25,000 credits a month', '$200', '£153.80', 'AU$299.30'],
          ['Microsoft 365 Copilot, per user per month, paid yearly', '$30', '£23.10', 'AU$44.90'],
          ['Source', <a key="u1" href={SRC.pricing} {...ext}>microsoft.com/en-us</a>, <a key="u2" href={SRC.pricingUk} {...ext}>microsoft.com/en-gb</a>, <a key="u3" href={SRC.pricingAu} {...ext}>microsoft.com/en-au</a>],
        ]}
      />
      <p>
        For UK firms the bigger question is usually data, not price. The ICO&apos;s{' '}
        <a href={SRC.ico} {...ext}>guidance on AI and data protection</a> sets out what UK GDPR expects on accountability,
        transparency and accuracy when you deploy AI. Microsoft documents where Copilot Studio stores and processes data on
        its <a href={SRC.residency} {...ext}>geographic data residency page</a>. In Australia, the OAIC&apos;s{' '}
        <a href={SRC.oaic} {...ext}>guidance on commercially available AI products</a> covers the privacy duties when staff
        use tools like Copilot Studio. Whichever route you take, write down where customer data goes before launch. See our{' '}
        <a href="/uk/ai-agents">UK AI agents page</a> and <a href="/au/ai-agents">Australian AI agents page</a>.
      </p>

      <h2 id="build-cost">What a custom AI agent costs to build</h2>
      <p>
        Market ranges vary by scope, so treat any single number with care. ProductCrafters&apos;{' '}
        <a href={SRC.productcrafters} {...ext}>AI agent development cost guide</a> (February 2026) puts building an AI
        agent at $5,000 to $180,000 or more. Layer3 Labs&apos;{' '}
        <a href={SRC.layer3} {...ext}>AI consulting pricing guide</a> (updated 9 September 2026) puts a production MVP
        workflow at $5,000 to $25,000 and a full enterprise AI system at $50,000 to $200,000 or more. Those are market
        ranges, not FactoryJet prices. Our <a href="/blog/enterprise-ai-agent-cost-2026">enterprise AI agent cost guide</a>{' '}
        breaks the build side down further.
      </p>
      <p>
        Before comparing any build quote with a Copilot Studio plan, ask the builder five things in writing: what is in each
        phase, who owns the code, where the AI and cloud bills sit, what happens when a defect appears after launch, and
        whether you can see it working on your own data first. Our{' '}
        <a href="/blog/questions-to-ask-ai-development-company-2026">questions to ask an AI development company</a> and{' '}
        <a href="/blog/why-ai-agent-projects-fail-2026">why AI agent projects fail</a> cover the rest.
      </p>

      <figure className="my-8">
        <img
          src={`${IMG}/buildcost.webp`}
          alt="A man with short brown hair in a charcoal sweater and a woman with a brown ponytail in a white blouse each read a printed proposal at a meeting table, with a grey folder, an orange folder and a glass of water beside them."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Compare build quotes phase by phase, and ask who owns the code at the end.
        </figcaption>
      </figure>

      <h2 id="what-else-ranks">What else ranks for &quot;copilot studio pricing&quot;, and how this guide differs</h2>
      <p>
        These are business sites on Google&apos;s first page for &quot;copilot studio pricing&quot; (US and UK) and
        &quot;copilot studio vs custom ai agent&quot; (US) when we checked on 18 October 2026 (DataForSEO), with the title
        Google showed. Microsoft&apos;s own pages held the top spots in both countries. Forums and video sites are left out.
      </p>
      <Table
        head={['Site', 'Page title shown in Google']}
        rows={[
          ['cloudzero.com', 'Microsoft Copilot Studio Pricing In 2026: Credits, Plans ...'],
          ['coworker.ai', 'Copilot Studio Pricing in 2026: What Credits Actually Cost'],
          ['velosio.com', 'Your Guide to Microsoft Copilot Studio Licensing'],
          ['hso.com', 'Microsoft Copilot vs Copilot Studio + Cowork: Key Differences'],
          ['aguidetocloud.com', 'Is Copilot Studio Free? Pricing, Credits & PAYG Explained'],
          ['calsoft.com', 'Microsoft Copilot Studio Licensing Explained'],
          ['peafowlit.com', 'Microsoft Copilot Studio vs Foundry for AI Agents'],
          ['braincuber.com', 'Copilot Studio vs Custom AI Agent: Cost Math (2026)'],
        ]}
      />
      <p>
        Most of these explain the price list or the Microsoft product family. This guide adds the &quot;No charge&quot;
        rule for Copilot-licensed staff, the 125% switch-off and the rate limits from Microsoft Learn, UK and Australian
        list prices read the same day, Microsoft&apos;s own pro-code advice, and the two middle routes.
      </p>

      <h2 id="how-factoryjet-helps">How FactoryJet helps you choose and build</h2>
      <p>
        FactoryJet builds custom AI agents and the integrations behind them: APIs and MCP servers for Odoo, NetSuite, SAP
        Business One, ERPNext and custom ERPs, plus EDI, punchout, Xero, HubSpot and WhatsApp connections, Salesforce and
        Agentforce work, and AI voice agents. That means we can build the custom back end a Microsoft front end calls, or a
        custom agent when that fits better. How we work:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>You own the code and the repository from day one.</li>
        <li>AI and cloud bills can run in your own accounts, at cost, with no markup.</li>
        <li>Each phase is scoped, priced and signed on its own.</li>
        <li>Defects are fixed inside the build price for a cover period agreed before work starts.</li>
        <li>Support is optional: each change is quoted and approved, with no monthly minimum.</li>
        <li>You see working software on your own data before you sign.</li>
      </ul>
      <p>
        See <a href="/services/ai-agent-development">AI agent development</a>,{' '}
        <a href="/services/ai-integration-services">AI integration services</a>,{' '}
        <a href="/services/erp-ai-agents">AI agents for ERP systems</a> and{' '}
        <a href="/services/ai-customer-support-agents">AI customer support agents</a>. For the time-saved side of the
        decision, try our <a href="/tools/ai-agent-roi-calculator">AI agent ROI calculator</a>.
      </p>

      <div className="bg-[#FAF8F5] border border-[#E5DFD7] rounded-xl p-6 my-10">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-3">More 2026 decision guides</p>
        <ul className="mb-0">
          <li><a href="/blog/ai-mvp-development-cost-2026">AI MVP development cost in 2026</a>: what a first AI product costs to build, by scope.</li>
          <li><a href="/blog/ai-agency-vs-in-house-vs-freelancer-2026">AI agency vs in-house engineer vs freelancer</a>: which to pick for your company size.</li>
          <li><a href="/blog/questions-to-ask-ai-development-company-2026">15 questions to ask an AI development company</a>: and the red flags in the answers.</li>
          <li><a href="/blog/ai-agent-development-contract-checklist-2026">AI agent development contract checklist</a>: 14 clauses on data, ownership and support.</li>
          <li><a href="/blog/why-ai-agent-projects-fail-2026">Why AI agent projects fail</a>: what the research found and how to avoid it.</li>
          <li><a href="/blog/enterprise-ai-agent-cost-2026">Enterprise AI agent cost in 2026</a>: build ranges and what drives them.</li>
        </ul>
      </div>

      <h2 id="sources">Sources</h2>
      <p className="text-sm text-gray-600">Every page below was opened and read on 18 October 2026.</p>
      <ul className="list-disc pl-6 space-y-1 text-sm mb-8">
        <li><a href={SRC.pricing} {...ext}>Microsoft, Copilot Studio plans and pricing (US)</a></li>
        <li><a href={SRC.pricingUk} {...ext}>Microsoft, Copilot Studio pricing (UK)</a> and <a href={SRC.pricingAu} {...ext}>(Australia)</a></li>
        <li><a href={SRC.m365Business} {...ext}>Microsoft, Microsoft 365 Copilot Business</a></li>
        <li><a href={SRC.billingRates} {...ext}>Microsoft Learn, Billing rates and management</a> (updated 15 October 2026)</li>
        <li><a href={SRC.licensing} {...ext}>Microsoft Learn, Standard licensing for Copilot Studio</a> (updated 15 October 2026)</li>
        <li><a href={SRC.quotas} {...ext}>Microsoft Learn, Quotas and limits</a> (updated 15 October 2026)</li>
        <li><a href={SRC.overview} {...ext}>Microsoft Learn, Copilot Studio overview</a> (updated 17 October 2026)</li>
        <li><a href={SRC.agentBuilder} {...ext}>Microsoft Learn, Choose between Agent Builder and Copilot Studio</a> (30 September 2026)</li>
        <li><a href={SRC.customEngine} {...ext}>Microsoft Learn, Custom engine agents for Microsoft 365</a> (30 September 2026)</li>
        <li><a href={SRC.mcp} {...ext}>Microsoft Learn, Extend your agent with Model Context Protocol</a></li>
        <li><a href={SRC.security} {...ext}>Microsoft Learn, Security and governance in Copilot Studio</a></li>
        <li><a href={SRC.residency} {...ext}>Microsoft Learn, Geographic data residency in Copilot Studio</a></li>
        <li><a href={SRC.estimator} {...ext}>Microsoft, Copilot Credit Estimator</a></li>
        <li><a href={SRC.productcrafters} {...ext}>ProductCrafters, AI agent development cost</a> (February 2026)</li>
        <li><a href={SRC.layer3} {...ext}>Layer3 Labs, AI consulting rates and pricing</a> (updated 9 September 2026)</li>
        <li><a href={SRC.nist} {...ext}>NIST, AI Risk Management Framework</a></li>
        <li><a href={SRC.ico} {...ext}>ICO, Guidance on AI and data protection</a></li>
        <li><a href={SRC.oaic} {...ext}>OAIC, Guidance on privacy and commercially available AI products</a></li>
        <li>Our own measurement: Google search volumes and search results, DataForSEO, 18 October 2026</li>
      </ul>

      <div className="bg-[#FAF8F5] border-2 border-[#E5DFD7] p-6 sm:p-8 rounded-xl my-10 shadow-sm">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-2">
          Copilot Studio or custom: a second opinion for mid-sized companies
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] mb-3">
          See which parts Microsoft covers, and which need custom work
        </h3>
        <p className="text-[#4B5563] text-base leading-relaxed mb-6">
          Tell us the job, who will use the agent and the systems behind it. We will map it to the right route and show the
          custom part working on your own data before you sign. FactoryJet quotes a fixed price in writing after a short
          scoping call. Founder replies within 24 hours.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors shadow-sm"
          >
            See a demo on your own data before you sign
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

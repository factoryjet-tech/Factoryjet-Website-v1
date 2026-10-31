import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

/*
 * AI automation agency cost (US first, with UK and Australia notes), 2026. DRAFTED 21 Oct 2026,
 * published 22 Oct 2026 (originally the US week 2 slot in docs/reports/2026-10-21-research-to-content-inventory.md).
 * Evidence for the shape: pipeline/research/AI-DEMAND-ASSISTANTS-2026-10-18.md (twocore.ai's cost page won 9
 * answers across 4 engines; winning cost pages carry a year, company sizes, countries, platforms and risk words).
 * Also absorbs opportunity #20 "how much does ai cost" (480 US searches a month, DataForSEO 21 Oct 2026).
 * Two kinds of figure only, every one opened and read on 21 October 2026:
 *   1. a published market range for agency work, from a named source;
 *   2. the list price of a named platform, from the vendor's own page.
 * No FactoryJet price. Rule B (11 Oct 2026): no running, hosting, token, maintenance or monitoring figure for a
 * custom build. Agency retainer ranges for ongoing BUILD work are shown because buyers ask "project or retainer";
 * maintenance-only and monitoring-only bands seen in sources (Aumiqx, Vantaige, Digital Agency Network) are left out
 * on purpose, as are API token prices (OpenAI, Anthropic) and every "what it costs to run" sum.
 * Price reading notes: chatgpt.com and shopify.com/pricing served INR to our network, so the ChatGPT Business USD
 * price comes from OpenAI's help centre (read through a search index, the page blocks direct fetches) and Shopify's
 * from its own US blog. Make's prices were read in a browser (the plain fetch got 403). HubSpot Starter printed two
 * figures with no label, so only Free, Professional and Enterprise are quoted.
 * The FAQ array below is the single source for the visible FAQ and the FAQPage JSON-LD (the blog route maps
 * post.faqs into schema).
 */

const SRC = {
  // market ranges for agency work
  layer3: 'https://www.layer3labs.io/roi/ai-automation-agency-cost',
  layer3Rates: 'https://www.layer3labs.io/guides/ai-consulting-rates-pricing',
  aumiqx: 'https://aumiqx.com/services/ai-automation-agency/',
  codewave: 'https://codewave.com/feeds/blog/ai-automation-agency-pricing',
  vantaige: 'https://vantaige.io/blog/2026-ai-automation-rate-card-operators-charge',
  twocore: 'https://twocore.ai/blog/ai-automation-agency-cost',
  productCrafters: 'https://productcrafters.io/blog/how-much-does-it-cost-to-build-an-ai-agent/',
  cmarix: 'https://www.cmarix.com/blog/ai-chatbot-development-cost/',
  webfx: 'https://www.webfx.com/martech/pricing/ai/',
  fiverr: 'https://www.fiverr.com/resources/guides/costs/ai-automation-experts',
  crox: 'https://crox.io/learn/ai-automation-cost',
  sandlabs: 'https://sandlabs.com.au/blog/ai-agent-development-cost',
  flowtivity: 'https://flowtivity.ai/blog/ai-agent-cost-pricing-guide-australia-2026/',
  // vendor pricing pages
  n8n: 'https://n8n.io/pricing/',
  zapier: 'https://zapier.com/pricing',
  make: 'https://www.make.com/en/pricing',
  chatgptBusiness: 'https://help.openai.com/en/articles/8792828-chatgpt-business-overview',
  claude: 'https://claude.com/pricing',
  hubspot: 'https://www.hubspot.com/pricing/sales',
  salesCloud: 'https://www.salesforce.com/sales/pricing/',
  agentforce: 'https://www.salesforce.com/agentforce/pricing/',
  shopify: 'https://www.shopify.com/blog/ecommerce-website-cost',
  // governance
  nist: 'https://www.nist.gov/itl/ai-risk-management-framework',
  ico: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/',
  oaic: 'https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products',
};

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;
const IMG = '/blog-images/ai-automation-agency-cost-2026';

function Table({ head, rows }: { head: string[]; rows: React.ReactNode[][] }) {
  return (
    <div className="my-6">
      <p className="md:hidden text-xs text-gray-500 mb-2">Swipe sideways to see every column.</p>
      <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
      <table className="w-full border-collapse text-sm" style={{ minWidth: head.length > 3 ? '720px' : '560px' }}>
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
    </div>
  );
}

const faqs: FAQItem[] = [
  // The core cost questions, in the words buyers use
  {
    q: 'How much does an AI automation agency cost?',
    a: 'In the US, Layer3 Labs (guide updated 2 July 2026) puts an AI automation agency project at $5,000 to $75,000: $5,000 to $15,000 for one workflow, $15,000 to $50,000 for three to six connected workflows, and $50,000 to $150,000 or more to automate a whole function such as finance or support. It puts retainers for ongoing work at $3,000 to $20,000 a month. These are published market ranges, not FactoryJet prices.',
  },
  {
    q: 'How much do AI automation agencies charge per month?',
    a: 'Layer3 Labs puts monthly retainers at $3,000 to $20,000 for ongoing automation work across teams. Codewave (August 2026) splits typical monthly agency spend by company size: $1,000 to $3,500 for small businesses, $4,000 to $12,000 for mid-market firms and $15,000 to $60,000 or more for enterprises. A retainer buys a team’s time for new builds and changes each month. It makes sense when you have a steady queue of that work.',
  },
  {
    q: 'How much does AI automation cost for a small business?',
    a: 'A first project is usually one workflow. Layer3 Labs puts that at $5,000 to $15,000 and two to four weeks for US agencies. Aumiqx, which collected the published prices of 48 agencies (updated 23 September 2026), found a median entry price of $1,000 per workflow across 21 agencies, with the middle half starting between $467 and $2,002. Those are “from” prices. Aumiqx itself says real quotes land higher once scope is known.',
  },
  {
    q: 'What is the cheapest way to start with an AI automation agency?',
    a: 'Pick one workflow that runs often and costs your team measurable time, and scope only that. Layer3 Labs suggests capping a first build at $5,000 to $15,000. Some agencies charge for a short discovery first: Aumiqx counted 8 that do, with a median of $1,283, and notes several deduct it from the build. Ask whether the discovery fee is credited before you pay it.',
  },
  {
    q: 'Is a fixed project or a monthly retainer better for AI automation?',
    a: 'A fixed project fits one defined job with a clear end. A retainer fits a steady stream of new workflows and changes. TwoCore’s guide (9 September 2026) gives a rule of thumb: under one change a month, buy projects; two to eight changes a month, a retainer usually works better. Whichever you pick, get the scope, the owner of the code and the exit terms in writing.',
  },
  {
    q: 'How much does AI implementation cost for a business?',
    a: 'Layer3 Labs’ consulting price guide (updated 9 September 2026) splits it into three steps: discovery at $2,000 to $5,000, a production workflow at $5,000 to $25,000, and a full enterprise AI system at $50,000 to $200,000 or more. Almost no business trains its own model. Implementation means building on an existing model such as GPT or Claude, connected to your own systems. ProductCrafters (modified 20 May 2026) puts custom AI agent development at $5,000 to more than $180,000.',
  },
  {
    q: 'How long does an AI automation project take?',
    a: 'Layer3 Labs (updated 2 July 2026) puts one workflow at two to four weeks, three to six connected workflows at six to twelve weeks, and a whole function such as finance or support at three to six months. CMARIX puts a custom support assistant connected to one to three systems at 8 to 14 weeks. Slow reviews on your side stretch every one of these, so book your testers before the build starts.',
  },
  {
    q: 'Who owns the workflows after an AI automation project ends?',
    a: 'Whoever the contract says. Layer3 Labs lists silence on ownership of the code and accounts as a red flag. Before you sign, get three things in writing: you own the code and the workflows, the platform and AI accounts sit in your name or move to you at the end, and the agency hands over the credentials and notes your team needs to run it without them.',
  },
  {
    q: 'How much does AI cost for a business per month?',
    a: 'WebFX’s 2026 survey found AI solutions cost $100 to $5,000 a month for 57% of the businesses it asked, and AI tools $50 to $10,000 a year for 69% (page modified 27 May 2026). Seat-based assistants sit at the low end: ChatGPT Business is $20 a user a month billed annually or $25 monthly, and Claude Team’s standard seat is the same, on prices read on 21 October 2026.',
  },
  {
    q: 'How much does an AI subscription cost?',
    a: 'On the vendor pages we read on 21 October 2026: Claude Pro is $17 a month billed annually or $20 monthly; ChatGPT Business and Claude Team standard seats are $20 a user a month billed annually or $25 monthly; Zapier Professional starts at $19.99 a month; Make’s paid plan starts at $9 a month billed annually; and n8n Cloud Starter is €20 a month billed annually. A subscription gives you the tool. Having an agency design and connect the workflow is a separate, one-time cost.',
  },
  {
    q: 'Is it worth paying for AI automation services?',
    a: 'It is worth paying when the process runs often, follows rules you can write down and costs measurable time today. Before you ask for quotes, count how many times a month the job happens and how long each takes. Layer3 Labs gives the same advice: measure the current hours and error rate first, then set one success metric for the build. If you cannot name those numbers yet, start with a short discovery.',
  },
  {
    q: 'How much does it cost to hire an AI consultant?',
    a: 'Layer3 Labs (updated 9 September 2026) puts freelance AI consultants at $75 to $150 an hour, boutique AI agencies at $125 to $250 and enterprise firms at $250 to $500. Advice and a written plan cost less than a build: the same guide prices a workflow discovery at $2,000 to $5,000. Our AI consultant cost guide has US day and project rates.',
  },
  {
    q: 'What does an AI automation agency charge per hour?',
    a: 'Layer3 Labs puts senior US-based agency talent at $100 to $300 an hour. Vantaige’s rate card (July 2026) reports $75 to $200 an hour for individual operators and $150 to $300 for senior specialists. Aumiqx found the midpoints of published hourly ranges run from $37 to $250, with a median of $74, among agencies that print prices. Layer3 warns against hourly-only billing on a build you could define up front.',
  },
  {
    q: 'How much does an n8n, Zapier or Make automation cost?',
    a: 'Two parts. The platform: n8n Cloud runs €20, €50 or €667 a month billed annually, and n8n can be self-hosted from its Community edition; Zapier has a free plan and paid plans from $19.99 a month; Make has a free plan and a paid plan from $9 a month billed annually (all read 21 October 2026). The build: Layer3 Labs puts a Zapier workflow connecting two software tools at $5,000 to $8,000 when an agency designs, tests and deploys it.',
  },
  {
    q: 'Can I build my own AI automation for free?',
    a: 'You can start for free. n8n publishes a self-hosted Community edition on GitHub, Zapier’s free plan includes 100 tasks a month, and Make’s free plan includes 1,000 credits a month. What you pay an agency for is the design and integration work: mapping the real process, connecting your CRM or ERP, deciding what happens when the AI is unsure, and testing on your own data.',
  },
  // By job
  {
    q: 'How much does AI customer support automation cost?',
    a: 'A custom AI support assistant that connects to one to three of your systems costs $30,000 to $80,000 and takes 8 to 14 weeks to build, according to CMARIX (updated 2 September 2026). Rented options charge per conversation instead: Salesforce lists Agentforce at $2 per conversation on its pricing page, read 21 October 2026. A single deflection workflow (one that answers a common question so it never reaches a person) is cheaper, inside Layer3 Labs’ $5,000 to $25,000 band for one production workflow.',
  },
  {
    q: 'How much does sales and CRM automation cost?',
    a: 'Lead routing is one of Layer3 Labs’ single-workflow examples at $5,000 to $15,000. The CRM licence is separate. On 21 October 2026 HubSpot listed Sales Hub Professional from $90 to $100 a seat a month, depending on billing, plus a required one-time $1,500 onboarding fee, and Salesforce listed Sales Cloud from $25 a user a month (Starter Suite) up to $550 (Max). Ask whether your CRM’s built-in AI already covers the job before you pay for a build.',
  },
  {
    q: 'How much does accounts payable or back-office automation cost?',
    a: 'Invoice intake is one of Layer3 Labs’ single-workflow examples, at $5,000 to $15,000. Its worked accounts payable example for a mid-sized firm prices the core build at $12,000 and two integrations at $4,000. Flowtivity, writing for Australia, puts document processing and data entry at A$12,000 to A$30,000. Writing into an ERP such as NetSuite, Odoo or SAP Business One costs more than reading from it.',
  },
  {
    q: 'How much does ecommerce AI automation cost?',
    a: 'CMARIX puts AI chatbot development for retail and ecommerce at $20,000 to $80,000 or more (updated 2 September 2026), covering jobs such as order tracking and customer service. Order and back-office workflows fall inside Layer3 Labs’ single-workflow and multi-workflow bands. The store platform is a separate fee: Shopify lists Basic at $29, Grow at $79 and Advanced at $299 a month paid yearly.',
  },
  // Drivers and risk
  {
    q: 'Why did one agency quote me $5,000 and another $20,000 for the same automation?',
    a: 'Layer3 Labs names data quality, the number of integrations and the amount of custom logic as the biggest drivers, and says quotes for the same workflow can differ by more than 400% between a freelancer and a large consultancy. Sandlabs, writing for Australia, adds A$3,000 to A$8,000 per integration and 20% to 40% for security or compliance work. Line up quotes by what each one includes, item by item.',
  },
  {
    q: 'What are the red flags in an AI automation agency quote?',
    a: 'Layer3 Labs lists six, led by no written scope, hourly-only billing on work you could define, and no word on who owns the code at the end. Add a seventh: no working demo on your own data before you sign.',
  },
  {
    q: 'Is an AI automation agency cheaper than hiring in-house?',
    a: 'For the first few builds it usually is: Layer3 Labs puts a senior in-house automation engineer at $120,000 to $200,000 or more a year in loaded cost (salary plus benefits, tax and tools), against $5,000 to $75,000 for an agency project. In-house starts to make sense once AI work is continuous.',
  },
  // Country notes
  {
    q: 'How much does an AI automation agency cost in the UK?',
    a: 'Crox, a UK firm, puts connected automation for one process at £5,000 to £25,000 as a one-off project in its August 2026 guide. Check whether each quote includes 20% VAT before you compare.',
  },
  {
    q: 'How much does an AI automation agency cost in Australia?',
    a: 'Sandlabs (9 May 2026) puts a simple single-workflow automation at A$5,000 to A$15,000 and a production AI agent at A$15,000 to A$40,000. Ask whether a quote includes the 10% GST.',
  },
  {
    q: 'Does FactoryJet publish its AI automation prices?',
    a: 'No. FactoryJet quotes a fixed price in writing after a short scoping call, phase by phase. We show working software on your own data before you sign. The AI and cloud accounts can sit in your name, billed at cost. Defects are fixed inside the build price for an agreed cover period, and support is optional, quoted per change, with no monthly minimum.',
  },
];

export const post: BlogPost = {
  id: '796',
  slug: 'ai-automation-agency-cost-2026',
  title: 'How Much Does an AI Automation Agency Cost in 2026? Project vs Retainer Pricing, by Company Size and Job',
  excerpt:
    'What US businesses pay an AI automation agency in 2026: project and retainer ranges from named 2026 guides, a table by company size and by job (support, sales ops, back office, ecommerce), the list prices of n8n, Zapier, Make, ChatGPT, Claude, HubSpot, Salesforce and Shopify read on 21 October 2026, what moves a quote, red flags, and UK and Australia notes.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Oct 22, 2026',
  dateModified: 'Oct 31, 2026',
  readTime: '14 min read',
  hideExcerptOnPage: true,
  imageUrl: `${IMG}-hero.webp`,
  imageAlt:
    'In a cabinet workshop office with a glass wall onto the shop floor, an older man in a work apron and a younger woman in a cream sweater compare two printed quotes beside a laptop showing two grey columns, one outlined in orange.',
  meta: {
    title: 'AI Automation Agency Cost in 2026: Projects vs Retainers',
    description:
      'AI automation agency cost in 2026: $5,000 to $75,000 a project, $3,000 to $20,000 a month on retainer. By company size and job, with platform prices.',
  },
  keyTakeaways: [
    'US AI automation agencies charge $5,000 to $75,000 a project and $3,000 to $20,000 a month on retainer, according to Layer3 Labs (updated 2 July 2026).',
    'One workflow costs $5,000 to $15,000, three to six connected workflows $15,000 to $50,000, and a whole function $50,000 to $150,000 or more (Layer3 Labs).',
    'Agencies that print their prices start lower: Aumiqx collected prices from 48 agencies (23 September 2026), and among the 21 that print a per-workflow price, the median entry price was $1,000. Real quotes land higher once scope is known.',
    'Monthly agency spend runs $1,000 to $3,500 for small businesses, $4,000 to $12,000 for mid-market and $15,000 to $60,000 or more for enterprises, according to Codewave.',
    'The platform is the small line: on 21 October 2026 n8n Cloud started at €20 a month, Zapier at $19.99, Make at $9, and ChatGPT Business and Claude Team at $20 a seat billed annually.',
    'Quotes for the same workflow can differ by more than 400% between a freelancer and a large consultancy (Layer3 Labs). Data quality, integration count and custom logic explain most of it.',
    'These are market ranges and list prices, not FactoryJet prices. FactoryJet quotes a fixed price in writing after a short scoping call and shows working software on your data before you sign.',
  ],
  faqs,
  content: (
    <article>
      {/* Answer-first block */}
      <div className="bg-white border-2 border-[#E5DFD7] rounded-xl p-6 sm:p-8 mb-10">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-3">The short answer</p>
        <p className="text-lg leading-relaxed mb-0">
          In the US in 2026, an AI automation agency charges <strong>$5,000 to $75,000 for a project</strong> and{' '}
          <strong>$3,000 to $20,000 a month on retainer</strong>, according to{' '}
          <a href={SRC.layer3} {...ext}>Layer3 Labs</a> (updated 2 July 2026). One workflow is $5,000 to $15,000.
          Three to six connected workflows are $15,000 to $50,000. Automating a whole function, such as finance or
          customer support, runs $50,000 to $150,000 or more.
        </p>
      </div>

      <div className="bg-[#FAF8F5] border-l-4 border-[#B23E13] p-5 rounded-r-lg mb-10">
        <p className="text-sm text-[#1F2937] leading-relaxed mb-2 max-w-none">
          <strong>These are market ranges and list prices, not our prices.</strong> FactoryJet is an AI automation
          agency, so weigh this page with that in mind. Every dollar figure is either a range from a named 2026 guide or
          a vendor&apos;s own list price, and every page behind them was opened and read on 21 October 2026. Each source
          is linked where it first appears and again at the end.
        </p>
        <p className="text-sm text-[#1F2937] leading-relaxed mb-0 max-w-none">
          <strong>How we made this page.</strong> We read the top Google results and the People Also Ask boxes for six
          US cost searches on 21 October 2026 (DataForSEO), and the pages AI assistants cited when we asked them about
          AI agency costs in the US, UK and Australia on 18 October 2026. Most price guides in this market come from
          agencies that sell the work, which is why every range below names its source.
        </p>
      </div>

      <p>
        An AI automation agency is a firm that designs, builds and connects software workflows in which an AI model
        does part of the job, such as reading an invoice or answering a customer. Our guide to{' '}
        <a href="/blog/what-does-an-ai-automation-agency-do">what an AI automation agency does</a> covers the work
        itself; this page covers what it costs.
      </p>
      <p>
        Two numbers for the same thing. Aumiqx, which collected the published prices of 48 automation agencies, found
        the median agency starts a single workflow at $1,000. Layer3 Labs, describing what US agencies quote once the
        scope is written down, puts the same single workflow at $5,000 to $15,000. Both can be true. The first is a
        &quot;from&quot; price on a website. The second is a scoped quote with integrations, testing and handover in it.
      </p>
      <p>
        This guide is for US companies of 10 to 2,000 staff buying their first or second automation project. It covers
        the four ways agencies bill, ranges by company size and by job, what the platforms themselves cost, what moves a
        quote up, and the red flags that sources agree on. Short notes for UK and Australian buyers come near the end,
        with links to our longer guides in pounds and Australian dollars.
      </p>
      <p>
        We are FactoryJet, an AI services company that designs, builds, implements and supports AI agents and
        automations. FactoryJet was founded in 2014 by Bhavesh Barot and has served more than 500 businesses. We build
        on <a href="/n8n-automation">n8n</a> and in code, and connect to HubSpot, Salesforce, Shopify, NetSuite, Odoo,
        SAP Business One and custom ERPs through their APIs.
      </p>

      <h2 id="at-a-glance">AI automation agency cost at a glance (US, 2026)</h2>
      <Table
        head={['What you buy', 'Typical range', 'Source (read 21 Oct 2026)']}
        rows={[
          ['One workflow, such as invoice intake or lead routing', '$5,000 to $15,000, two to four weeks', <a key="a" href={SRC.layer3} {...ext}>Layer3 Labs, agency cost guide</a>],
          ['Three to six connected workflows in one department', '$15,000 to $50,000, six to twelve weeks', <a key="b" href={SRC.layer3} {...ext}>Layer3 Labs</a>],
          ['A whole function, such as finance or support', '$50,000 to $150,000+, three to six months', <a key="c" href={SRC.layer3} {...ext}>Layer3 Labs</a>],
          ['Monthly retainer for ongoing build work', '$3,000 to $20,000 a month', <a key="d" href={SRC.layer3} {...ext}>Layer3 Labs</a>],
          ['Discovery before a build', '$2,000 to $5,000', <a key="e" href={SRC.layer3Rates} {...ext}>Layer3 Labs, consulting rates guide</a>],
          ['Senior US agency talent, by the hour', '$100 to $300 an hour', <a key="f" href={SRC.layer3} {...ext}>Layer3 Labs</a>],
          ['Median “from” price, 21 agencies that publish prices', '$1,000 per workflow', <a key="g" href={SRC.aumiqx} {...ext}>Aumiqx survey of 48 agencies</a>],
        ]}
      />

      <h2 id="pricing-models">Project vs retainer: the four ways AI automation agencies charge</h2>
      <p>
        Layer3 Labs groups agency pricing into four models. Most firms quote one of the first two. The model tells you
        who carries the risk if the work takes longer than planned, so ask which one a firm uses before the first call.
      </p>
      <Table
        head={['Model', 'Typical US range', 'Fits', 'Main risk to you']}
        rows={[
          ['Fixed project', '$5,000 to $75,000 a project', 'One defined build with a clear end', 'Scope creep if the written scope is loose'],
          ['Monthly retainer', '$3,000 to $20,000 a month', 'A steady queue of new workflows and changes', 'Paying for months with little work in them'],
          ['Per workflow', '$2,000 to $12,000 each', 'Standard builds repeated across teams', 'Costs add up across many workflows'],
          ['Hourly', '$100 to $300 an hour', 'Small tasks with no clear spec yet', 'Open-ended hours and surprise bills'],
        ]}
      />
      <p className="text-sm text-gray-600 mb-6">
        Ranges and risks from <a href={SRC.layer3} {...ext}>Layer3 Labs</a> (updated 2 July 2026). Codewave puts
        fixed-fee projects at $10,000 to $75,000 or more and retainers at $1,000 to $12,000 a month, in its{' '}
        <a href={SRC.codewave} {...ext}>agency pricing guide</a> (August 2026).
      </p>
      <p>
        <strong>When a project fits.</strong> You can describe the job in a paragraph, you know which systems it reads
        and writes, and success is a number you can check. Most first purchases are projects.
      </p>
      <p>
        <strong>When a retainer fits.</strong> You already have several workflows live and a list of changes waiting.
        TwoCore&apos;s cost guide (9 September 2026) gives a usable rule of thumb: under one change a month, buy
        projects; two to eight changes a month, a retainer usually works better. A retainer buys a team&apos;s time,
        so ask what it covers each month in hours or deliverables.
      </p>
      <p>
        Either way, three things belong in the contract: who owns the code and the accounts, what happens to your data,
        and how either side can end the arrangement. Our{' '}
        <a href="/blog/ai-agent-development-contract-checklist-2026">AI agent development contract checklist</a> lists
        the clauses.
      </p>

      <figure className="my-8">
        <img src={`${IMG}-models.webp`}
          alt="In a bright meeting room, a woman with shoulder-length red hair in an olive blazer draws two boxes joined by an arrow on a whiteboard with an orange marker while a young man in a grey hoodie watches from the table."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          A fixed project prices one defined job. A retainer prices a team&apos;s time for the next ones.
        </figcaption>
      </figure>

      <h2 id="by-company-size">AI automation agency pricing by company size</h2>
      <p>
        Company size moves the price mostly through the number of systems and approvals a workflow has to pass.
        Codewave says the same: pricing scales with workflow count and integration depth. The table combines the two
        sources that split their figures by size.
      </p>
      <Table
        head={['Company size', 'Typical first project', 'Typical monthly agency spend', 'What usually drives the number']}
        rows={[
          [
            'Small business (under 50 staff)',
            '$5,000 to $15,000 for one workflow (Layer3 Labs); published “from” prices start near $1,000 (Aumiqx)',
            '$1,000 to $3,500 (Codewave)',
            'One or two tools with ready APIs, such as HubSpot, Shopify or QuickBooks',
          ],
          [
            'Mid-size company (50 to 1,000 staff)',
            '$15,000 to $50,000 for three to six connected workflows (Layer3 Labs)',
            '$4,000 to $12,000 (Codewave)',
            'Writing records back into an ERP or CRM, approval steps, several departments',
          ],
          [
            'Enterprise (1,000+ staff)',
            '$50,000 to $150,000+ for a whole function (Layer3 Labs); some providers set minimums of $25,000 to $100,000+ (Codewave, citing Clutch)',
            '$15,000 to $60,000+ (Codewave)',
            'Security review, single sign-on, legacy systems, audit trails, change management',
          ],
        ]}
      />
      <p className="text-sm text-gray-600 mb-6">
        Sources: <a href={SRC.layer3} {...ext}>Layer3 Labs</a> (2 July 2026),{' '}
        <a href={SRC.codewave} {...ext}>Codewave</a> (modified 10 August 2026),{' '}
        <a href={SRC.aumiqx} {...ext}>Aumiqx</a> (23 September 2026). The staff bands are ours; the sources use
        &quot;small business&quot;, &quot;mid-market&quot; and &quot;enterprise&quot; without head counts.
      </p>
      <p>
        If you run a mid-size company and want the build-or-buy question answered first, our guide to{' '}
        <a href="/blog/enterprise-ai-agents-mid-sized-companies-buy-or-build-2026">enterprise AI agents for mid-sized
        companies</a> covers it. Larger programmes are priced in our{' '}
        <a href="/blog/enterprise-ai-agent-cost-2026">enterprise AI agent cost guide</a>.
      </p>

      <figure className="my-8">
        <img src={`${IMG}-sizes.webp`}
          alt="Seen from behind on a warehouse mezzanine, a man in rimless glasses and a navy pullover and a woman with a short white pixie cut in a burgundy cardigan study a monitor showing three grey bars of different heights."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          A mid-size distributor pays more than a shop for the same workflow mainly because the ERP and the approvals
          come with it.
        </figcaption>
      </figure>

      <h2 id="by-job">AI automation cost by job: support, sales ops, back office and ecommerce</h2>
      <p>
        Buyers rarely ask for &quot;automation&quot;. They ask for help with one job. These are the four jobs US buyers
        ask about most, with the closest published range for each.
      </p>
      <Table
        head={['Job', 'Typical build range', 'Source', 'Platform list price it often sits on (21 Oct 2026)']}
        rows={[
          [
            'Customer support (answering, triage, order status)',
            '$30,000 to $80,000 for an AI assistant connected to 1 to 3 systems, 8 to 14 weeks; one deflection workflow from $5,000',
            <span key="s1"><a href={SRC.cmarix} {...ext}>CMARIX</a> (2 Sep 2026); <a href={SRC.layer3Rates} {...ext}>Layer3 Labs</a></span>,
            'Salesforce Agentforce: $2 per conversation, or Flex Credits (credits used up per AI action) at $500 per 100,000',
          ],
          [
            'Sales ops (lead routing, CRM updates, follow-ups)',
            '$5,000 to $15,000 for a single lead-routing workflow',
            <a key="s2" href={SRC.layer3} {...ext}>Layer3 Labs</a>,
            'HubSpot Sales Hub Professional from $90 to $100 a seat a month by billing option, plus $1,500 one-time onboarding',
          ],
          [
            'Back office (invoices, accounts payable, data entry)',
            '$5,000 to $15,000 for invoice intake; a mid-size AP example at $12,000 core build plus $4,000 for two integrations',
            <a key="s3" href={SRC.layer3} {...ext}>Layer3 Labs</a>,
            'n8n Cloud from €20 a month billed annually, or self-hosted Community edition',
          ],
          [
            'Ecommerce (order questions, returns, catalogue and order workflows)',
            '$20,000 to $80,000+ for a retail and ecommerce AI chatbot',
            <a key="s4" href={SRC.cmarix} {...ext}>CMARIX</a>,
            'Shopify Basic $29, Grow $79, Advanced $299 a month paid yearly',
          ],
        ]}
      />
      <p>
        Two notes on reading this table. The support and ecommerce figures come from a chatbot development firm, and a
        full assistant is a bigger build than one workflow, so the ranges sit higher. And the platform column is the
        software you rent, which is separate from what the agency charges to design and connect the workflow.
      </p>
      <p>
        For each job we have a longer page. Support:{' '}
        <a href="/services/ai-customer-support-agents">AI customer support agents</a> and our{' '}
        <a href="/blog/ai-chatbot-cost-2026">AI chatbot cost guide</a>. Back office:{' '}
        <a href="/services/accounts-payable-automation">accounts payable automation</a> and{' '}
        <a href="/services/sales-order-automation-ai-agents">sales order automation</a>. The full list of workflows we
        automate is on our <a href="/services/ai-automation">AI automation services</a> page.
      </p>

      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg my-8">
        <h3 className="text-lg font-bold mb-3">See a demo on your own data before you sign</h3>
        <p className="mb-4">
          Bring one workflow and a sample of the data behind it. We will build a small working version on that data so
          you can judge the result, then quote the build as a fixed price in writing. Bhavesh replies within 24 hours.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors"
        >
          Ask for a demo on your data
        </a>
      </div>

      <h2 id="platforms">What the platforms cost: n8n, Zapier, Make, ChatGPT, Claude, HubSpot, Salesforce and Shopify</h2>
      <p>
        Most of an automation quote is design and integration work. The platforms underneath are priced separately and
        published openly. We read each price below on the vendor&apos;s own page on 21 October 2026.
      </p>
      <Table
        head={['Platform', 'List price read on 21 Oct 2026', 'Notes']}
        rows={[
          [<a key="p1" href={SRC.n8n} {...ext}>n8n</a>, 'Starter €20, Pro €50, Business €667 a month, billed annually; Enterprise on request', '2,500, 10,000 and 40,000 workflow executions. A self-hosted Community edition is published on GitHub'],
          [<a key="p2" href={SRC.zapier} {...ext}>Zapier</a>, 'Free $0; Professional from $19.99 a month; Team from $69 a month', 'Free includes 100 tasks a month. Zapier Agents and Chatbots are priced as separate add-ons'],
          [<a key="p3" href={SRC.make} {...ext}>Make</a>, 'Free $0; Make Plan $9 a month billed annually at 5,000 credits; Enterprise custom', 'Extra credits at $1.80 per 1,000 on the page we read. Free includes 1,000 credits a month'],
          [<a key="p4" href={SRC.chatgptBusiness} {...ext}>ChatGPT Business</a>, '$20 a user a month billed annually, $25 monthly (standard seat)', 'Premium seat $100 annually or $125 monthly. Read in OpenAI’s help centre; chatgpt.com showed local currency to us'],
          [<a key="p5" href={SRC.claude} {...ext}>Claude (Anthropic)</a>, 'Pro $17 a month billed annually or $20 monthly; Team $20 a seat billed annually or $25 monthly', 'Team premium seat $100 or $125. Enterprise $20 a seat a month plus usage, 20-seat minimum'],
          [<a key="p6" href={SRC.hubspot} {...ext}>HubSpot Sales Hub</a>, 'Free for up to 2 users; Professional from $90 to $100 a seat a month by billing option; Enterprise from $150', 'Required one-time onboarding: $1,500 Professional, $3,500 Enterprise. Extra HubSpot Credits $0.010 each'],
          [<a key="p7" href={SRC.salesCloud} {...ext}>Salesforce Sales Cloud</a>, 'Starter Suite $25, Pro Suite $100 a user a month; Core $195, Advanced $395, Max $550 billed annually', <span key="p7n"><a href={SRC.agentforce} {...ext}>Agentforce</a>: $2 per conversation, Flex Credits (credits used up per AI action) $500 per 100,000, add-ons from $125 a user a month</span>],
          [<a key="p8" href={SRC.shopify} {...ext}>Shopify</a>, 'Basic $29, Grow $79, Advanced $299 a month paid yearly; Plus $2,300 a month on a three-year term', 'From Shopify’s US cost guide; the pricing page showed local currency to us'],
        ]}
      />
      <p>
        Prices change often, and several of these pages show a different currency depending on where you open them. Check
        the vendor page on the day you buy. We left out the per-token API prices of OpenAI and Anthropic on purpose:
        what a custom build spends on models depends on its volume, and a quote should state that line on its own.
      </p>
      <p>
        If you are choosing between the three workflow tools, our comparison of{' '}
        <a href="/blog/n8n-vs-zapier-vs-make-ai-workflow-automation-2026">n8n, Zapier and Make for AI workflows</a>{' '}
        covers where each one fits. If your sales team already lives in Salesforce, read{' '}
        <a href="/blog/agentforce-pricing-vs-custom-ai-agent-2026">Agentforce pricing vs a custom AI agent</a> before
        you ask anyone for a build quote.
      </p>

      <h2 id="cost-drivers">What drives an AI automation quote up or down</h2>
      <p>
        Layer3 Labs says quotes for the same workflow can differ by more than 400%: a project a freelancer quotes at
        $5,000 is regularly quoted at $20,000 by a large consultancy. Most of the gap comes from six things.
      </p>
      <ol className="list-decimal pl-6 space-y-3 mb-6">
        <li>
          <strong>How many systems the workflow touches.</strong> Layer3 Labs prices a Zapier workflow joining two
          software tools at $5,000 to $8,000, and one that talks to a legacy ERP or practice system through a custom API
          at $15,000 to $25,000. Sandlabs, writing for Australia, adds A$3,000 to A$8,000 per integration.
        </li>
        <li>
          <strong>Reading versus writing.</strong> An automation that reads from NetSuite or Odoo is cheaper than one
          that creates orders or posts invoices there, because every write needs checks and a way back.
        </li>
        <li>
          <strong>Data quality.</strong> Clean, structured data pushes cost down. Scattered spreadsheets and free-text
          fields push it up, and Layer3 Labs notes that cleaning data before the build can cut weeks off the timeline.
        </li>
        <li>
          <strong>What happens when the AI is unsure.</strong> Hand-off rules, a review queue and a log of every action
          take longer to build than the AI step itself. TwoCore makes the same point from its own builds.
        </li>
        <li>
          <strong>Security and compliance.</strong> Sandlabs adds 20% to 40% for security or compliance requirements.
          Patient records, payment data and regulated advice all sit at the top of that range.
        </li>
        <li>
          <strong>Your team&apos;s time for testing.</strong> Layer3 Labs calls this neutral but important: slow reviews
          stretch timelines, and longer timelines cost more.
        </li>
      </ol>

      <h2 id="red-flags">Red flags in an AI automation agency quote</h2>
      <p>
        Layer3 Labs lists six signs you are overpaying or taking on avoidable risk. We agree with all six and add a
        seventh from our own buying conversations.
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>No written scope or list of deliverables before you sign.</li>
        <li>Hourly-only billing on a build you could define up front.</li>
        <li>No word on who owns the code, the workflows and the accounts when the project ends.</li>
        <li>Promised results with no measurement plan attached.</li>
        <li>Long lock-in terms with no exit clause.</li>
        <li>No plan for data privacy or the vendor&apos;s data processing terms.</li>
        <li>No working demo on your own data before the contract. A slide deck is not a demo.</li>
      </ul>
      <p>
        A demo on your own records is the quickest way to see whether a firm can do the work. For the full list of
        questions to put to any firm, see our{' '}
        <a href="/blog/questions-to-ask-ai-development-company-2026">questions to ask an AI development company</a>, and
        for the case against each route, our{' '}
        <a href="/blog/why-ai-agent-projects-fail-2026">guide to why AI agent projects fail</a>.
      </p>

      <figure className="my-8">
        <img src={`${IMG}-redflags.webp`}
          alt="In a quiet home office with a window onto trees, a woman with long dark wavy hair in a white linen shirt reads a stapled contract with a pen in her hand, an orange mug beside her."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Read the contract for a demo clause as closely as the price: a slide deck is not a demo.
        </figcaption>
      </figure>

      <h2 id="agency-or-in-house">AI automation agency, freelancer or in-house?</h2>
      <p>
        Layer3 Labs puts a senior in-house automation engineer at $120,000 to $200,000 or more a year in loaded cost,
        freelancers at $50 to $150 an hour and agency projects at $5,000 to $75,000. Its advice is the common one: use
        an agency for the first two or three builds, then bring on one in-house owner once automation is continuous.
        Our guide to an{' '}
        <a href="/blog/ai-agency-vs-in-house-vs-freelancer-2026">AI agency, in-house engineer or freelancer</a> works
        through that choice by company size, with salary sources and the on-cost arithmetic for the US, UK and Australia.
      </p>

      <h2 id="us-uk-au">US, UK and Australia: what changes by country</h2>
      <h3>United States</h3>
      <p>
        All ranges above are US figures in US dollars. Sales tax on services varies by state, so ask whether a quote is
        before tax. Where a workflow touches patient records, card data or consumer data, say so on the first call: it
        changes the build and the price. The{' '}
        <a href={SRC.nist} {...ext}>NIST AI Risk Management Framework</a> is the voluntary reference most US buyers use
        to write AI controls.
      </p>
      <h3>United Kingdom</h3>
      <p>
        Crox, a UK firm, puts connected automation for one process at £5,000 to £25,000 as a one-off project in its{' '}
        <a href={SRC.crox} {...ext}>August 2026 guide</a>: £5,000 to £10,000 for a well-scoped process on mainstream
        tools, and £15,000 to £25,000 for multi-system work or regulated data. It puts off-the-shelf assistants at
        about £15 to £60 a user a month. Check whether each quote includes 20% VAT. The{' '}
        <a href={SRC.ico} {...ext}>ICO guidance on AI and data protection</a> applies to the company using the AI,
        whoever builds it. Our <a href="/blog/ai-cost-uk-2026">AI cost guide for the UK</a> has agent, consultant and
        chatbot ranges in pounds.
      </p>
      <h3>Australia</h3>
      <p>
        Sandlabs (<a href={SRC.sandlabs} {...ext}>9 May 2026</a>) puts a simple single-workflow automation at A$5,000 to
        A$15,000 and a production AI agent at A$15,000 to A$40,000. Flowtivity (
        <a href={SRC.flowtivity} {...ext}>March 2026</a>) prices by job: lead qualification A$8,000 to A$20,000,
        customer service automation A$10,000 to A$25,000, document processing A$12,000 to A$30,000 and multi-system
        workflows A$20,000 to A$50,000 or more. Ask whether a quote includes the 10% GST. The{' '}
        <a href={SRC.oaic} {...ext}>OAIC guidance on commercially available AI products</a> sets out privacy duties.
        Our <a href="/blog/ai-cost-australia-2026">AI cost guide for Australia</a> has more ranges in Australian dollars.
      </p>

      <h2 id="how-to-budget">How to budget a first AI automation project</h2>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li>Pick one workflow that runs every day or every week and that your team dislikes doing.</li>
        <li>Write down today&apos;s numbers: how often it runs, minutes per run, and how often it goes wrong.</li>
        <li>List every system it reads from and writes to. Each one is a line in the quote.</li>
        <li>Decide what the AI may do alone and what a person must approve.</li>
        <li>Ask two or three firms for a fixed quote on that scope, and for a demo on a sample of your data.</li>
        <li>Agree ownership of the code and accounts, and the exit terms, before work starts.</li>
      </ol>
      <p>
        If you are budgeting a first AI product rather than an internal workflow, our{' '}
        <a href="/blog/ai-mvp-development-cost-2026">AI MVP development cost guide</a> is the closer match, and for a
        single custom agent see{' '}
        <a href="/blog/what-is-an-ai-agent-cost-2026">how much it costs to build an AI agent</a>. To draw up a shortlist
        of firms to ask for quotes, see our lists of the{' '}
        <a href="/blog/best-ai-automation-agencies-usa-2026">best AI automation agencies in the USA</a> and the{' '}
        <a href="/blog/best-ai-automation-agencies-uk-2026">best AI automation agencies in the UK</a>.
      </p>

      <h2 id="what-ranks">What other cost guides leave out</h2>
      <p>
        When we asked AI assistants about agency costs on 18 October 2026, the cost page cited most often was
        TwoCore&apos;s, named in 9 answers across four engines. Few US guides we read split the price by the job being
        automated, and none put platform list prices next to agency ranges with the date each was read. TwoCore credits
        its retainer bands by company size to Digital Agency Network; we could not find those bands on the page it
        links to on 21 October 2026, so we left them out. Fiverr&apos;s marketplace averages ($75 to $520 a project)
        price gig work rather than agency projects, which is why they sit far below every other source here.
      </p>

      <h2 id="factoryjet">How FactoryJet prices AI automation work</h2>
      <p>
        We design, build, implement and support AI automations and agents, on n8n and in code, with the integrations
        they need. We connect to HubSpot, Salesforce, Shopify, NetSuite, Odoo, SAP Business One and ERPNext through their
        APIs. We
        do not publish a price list, because the systems involved set the number. Our terms are written for the buyer
        this page is for:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>You see working software on your own data before you sign.</li>
        <li>Each phase is scoped, priced and signed on its own, as a fixed price in writing.</li>
        <li>You own the code and the workflows from day one.</li>
        <li>The AI and cloud accounts can sit in your name, billed at cost with no markup.</li>
        <li>Defects are fixed inside the build price for a cover period agreed before work starts.</li>
        <li>Support is optional: each change is quoted and approved, with no monthly minimum.</li>
      </ul>
      <p>
        FactoryJet quotes a fixed price in writing after a short scoping call. We keep managing the servers, AI models,
        APIs and maintenance after launch if you want us to, so your team does not have to. See{' '}
        <a href="/services/ai-automation">AI automation</a> and{' '}
        <a href="/services/ai-agent-development">AI agent development</a>,{' '}
        <a href="/services/ai-integration-services">AI integration services</a>, or our pages for{' '}
        <a href="/uk/ai-development">UK</a> and <a href="/au/ai-development">Australian</a> buyers.
      </p>

      <h2 id="sources">Sources</h2>
      <p className="text-sm text-gray-600">Every page below was opened and read on 21 October 2026.</p>
      <ul className="list-disc pl-6 space-y-1 text-sm mb-8">
        <li><a href={SRC.layer3} {...ext}>Layer3 Labs, AI Automation Agency Cost: What You Actually Pay in 2026</a> (updated 2 July 2026)</li>
        <li><a href={SRC.layer3Rates} {...ext}>Layer3 Labs, AI Consulting Rates and Pricing in 2026</a> (updated 9 September 2026)</li>
        <li><a href={SRC.aumiqx} {...ext}>Aumiqx, AI automation agency: prices from 48 agencies</a> (updated 23 September 2026; 177 price points)</li>
        <li><a href={SRC.codewave} {...ext}>Codewave, AI automation agency pricing</a> (modified 10 August 2026)</li>
        <li><a href={SRC.vantaige} {...ext}>Vantaige, The 2026 AI Automation Rate Card</a> (modified 7 July 2026)</li>
        <li><a href={SRC.twocore} {...ext}>TwoCore, How Much Does an AI Automation Agency Cost? Project vs Retainer vs In-House</a> (9 September 2026)</li>
        <li><a href={SRC.productCrafters} {...ext}>ProductCrafters, AI Agent Development Cost</a> (modified 20 May 2026)</li>
        <li><a href={SRC.cmarix} {...ext}>CMARIX, AI Chatbot Development Cost</a> (last updated 2 September 2026)</li>
        <li><a href={SRC.webfx} {...ext}>WebFX, AI Pricing: How Much Does AI Cost in 2026?</a> (modified 27 May 2026)</li>
        <li><a href={SRC.fiverr} {...ext}>Fiverr, How Much Does It Cost to Hire an AI Automation Expert?</a> (modified 3 August 2026)</li>
        <li><a href={SRC.crox} {...ext}>Crox, AI automation cost for UK businesses</a> (August 2026)</li>
        <li><a href={SRC.sandlabs} {...ext}>Sandlabs, AI Agent Development Cost 2026 (AUD)</a> (9 May 2026)</li>
        <li><a href={SRC.flowtivity} {...ext}>Flowtivity, How Much Does an AI Agent Cost in 2026? Australian Pricing Guide</a> (5 March 2026)</li>
        <li><a href={SRC.n8n} {...ext}>n8n pricing</a>; <a href={SRC.zapier} {...ext}>Zapier pricing</a>; <a href={SRC.make} {...ext}>Make pricing</a></li>
        <li><a href={SRC.chatgptBusiness} {...ext}>OpenAI, ChatGPT Business overview</a>; <a href={SRC.claude} {...ext}>Claude pricing</a></li>
        <li><a href={SRC.hubspot} {...ext}>HubSpot Sales Hub pricing</a>; <a href={SRC.salesCloud} {...ext}>Salesforce Sales Cloud pricing</a>; <a href={SRC.agentforce} {...ext}>Agentforce pricing</a></li>
        <li><a href={SRC.shopify} {...ext}>Shopify, Ecommerce Website Cost: Full Guide for 2026</a></li>
        <li><a href={SRC.nist} {...ext}>NIST, AI Risk Management Framework</a>; <a href={SRC.ico} {...ext}>ICO, Guidance on AI and data protection</a>; <a href={SRC.oaic} {...ext}>OAIC, Guidance on commercially available AI products</a></li>
        <li>Our own measurements: Google results and People Also Ask boxes for six US cost searches via DataForSEO on 21 October 2026, and answers from ChatGPT, Gemini, Claude, Perplexity and Google&apos;s AI answers on 18 October 2026</li>
      </ul>

      <div className="bg-[#FAF8F5] border-2 border-[#E5DFD7] p-6 sm:p-8 rounded-xl my-10 shadow-sm">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-2">
          Budgeting an AI automation project?
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] mb-3">
          Get a fixed price after a demo on your own data
        </h3>
        <p className="text-[#4B5563] text-base leading-relaxed mb-6">
          Tell us the workflow, the systems behind it and who on your team will own it. We will show a working version on
          your own data, then quote the build as a fixed price in writing. You own the code from day one. Bhavesh replies
          within 24 hours.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors shadow-sm"
          >
            Ask for a demo on your data
          </a>
          <a
            href="/services/ai-automation"
            className="inline-flex items-center gap-2 bg-white text-[#1F2937] border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            See AI automation services
          </a>
        </div>
      </div>
    </article>
  ),
};

import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

const PAGE_URL = 'https://factoryjet.com/blog/best-ai-automation-agencies-india';

// Every fact about another firm below was read as visible text on that firm's
// own home page on 24 November 2026, and each phrase was matched against the
// raw page text. The matched text is kept in the research ledger outside the
// repo (docs/reports/india-briefs/best-ai-automation-agencies-india-verification.json).
// Nothing here is paid placement. The order is not a ranking. FactoryJet, the
// publisher, comes first, and the others sit in groups by the automation work
// each page describes. The table, the profiles, the job table and the ItemList
// schema all map from this one array.
interface Firm {
  name: string;
  url: string;
  group: 'workflow' | 'agents' | 'accounts' | 'wider';
  place: string;
  tools: string;
  lists: string;
  profile: string;
  stated: string[];
}

const FIRMS: Firm[] = [
  {
    name: 'FactoryJet',
    url: 'https://factoryjet.com/ai-automation',
    group: 'workflow',
    place: 'Businesses across India',
    tools: 'n8n, Make, Zapier, Tally, Zoho, Razorpay, WhatsApp',
    lists: 'Rule-based workflows, document reading, drafting agents and reports, scoped one workflow at a time',
    profile:
      'Our work is n8n, Make and Zapier workflows, with a language model added to any step that must read a document or make a call. Indian tools we connect include Tally, Zoho, Razorpay and WhatsApp. A few of your real records go through the workflow before you commit, with names stripped if you like. Scope, one fixed price and dates are then written down, and the build and testing happen inside your own accounts. Faults that show up after launch are repaired within the build price for a cover period set at the start.',
    stated: [
      'Rated 5.0 on Clutch from 4 reviews and 5.0 on GoodFirms from 5 reviews',
      'The workflows sit in your accounts and the code is yours',
      'Other named projects on our site: Sow Easy (WooCommerce trade ordering connected to Odoo) and GPSUK (online ordering for trade buyers who reorder)',
    ],
  },
  {
    name: 'Amatec',
    url: 'https://amatec.in/',
    group: 'workflow',
    place: 'Vadodara',
    tools: 'Make.com, n8n, Zoho, monday.com',
    lists: 'Automated workflows for small and mid-sized companies',
    profile:
      'The home page calls Amatec a workflow automation agency in Vadodara. It says it builds and runs workflows on Make.com, n8n, Zoho and monday.com for small and mid-sized companies, most of them in the US and Europe. It adds that the person on the first call is the engineer who would build the workflow.',
    stated: [
      'Says it has worked this way since 2020',
      'Says it has published two extensions on the Zoho Marketplace and an app on Make',
      'Offers a fixed-scope quote before building and a free workflow audit',
    ],
  },
  {
    name: 'SynkrAI',
    url: 'https://www.synkrai.com/',
    group: 'workflow',
    place: 'Ahmedabad',
    tools: 'n8n, Make, Zapier, LangChain, CrewAI',
    lists: 'AI automation consulting, workflow builds, AI SaaS product development',
    profile:
      'SynkrAI lists four services on its home page: AI automation consulting, n8n, Make and Zapier automation, LangChain and CrewAI automation, and AI SaaS product development. LangChain and CrewAI are code libraries for building AI agents. A products menu names a Sales Calling Agent, a CRM Agent and a Proposal Generator, and the main button offers a free strategy call.',
    stated: [
      'Address given as Makarba, Ahmedabad',
      'Products menu includes a Sales Calling Agent, a CRM Agent and a Proposal Generator',
    ],
  },
  {
    name: 'Innovatrix Infotech',
    url: 'https://www.innovatrixinfotech.com/',
    group: 'workflow',
    place: 'Kolkata',
    tools: 'Self-hosted n8n, Python, LLM APIs',
    lists: 'Shopify stores, automation workflows and business systems',
    profile:
      'The page describes one Kolkata team with fixed prices, a working demo every two weeks and support after launch. For automation it names self-hosted n8n and Python wired into LLM APIs. It publishes a payment pattern of 40 percent to start, 40 percent at a mid-project review and 20 percent on handover, and says it hands over every credential at launch.',
    stated: [
      'Gives its own starting figure for an automation workflow: ₹1.7 lakh',
      'Lists itself as a Shopify Partner and an AWS Partner',
      'Shows a client result as stated on its page: for Bandbox, 84% of WhatsApp queries auto-resolved and 130+ hours saved every month',
    ],
  },
  {
    name: 'Hexagon Digital',
    url: 'https://www.hexagondigital.in/',
    group: 'agents',
    place: 'Mumbai',
    tools: 'WhatsApp, voice calls, CRM tools',
    lists: 'Custom AI agents, voice agents, chatbots and WhatsApp bots, workflow and CRM automation',
    profile:
      'Hexagon Digital describes itself as an AI automation agency in Mumbai. Its voice agents answer calls, qualify leads and book appointments, and its chatbot and WhatsApp bot work sits beside workflow and CRM automation. It says a project goes from first call to live system in 4 to 10 weeks, with fixed scope, timeline and price and a working demo every week.',
    stated: [
      'One case on the page: AV Properties, a Mumbai property agency that received listings and requirements in WhatsApp broker groups and typed each one into its website by hand',
      'Also lists marketing automation, website development and mobile app development',
    ],
  },
  {
    name: 'InfyOm Technologies',
    url: 'https://infyom.com/',
    group: 'agents',
    place: 'Surat',
    tools: 'n8n, WhatsApp, voice AI',
    lists: 'AI automation, n8n workflow automation, AI agent development, voice AI agent development',
    profile:
      'The menu on the home page lists AI Automation Services, n8n Workflow Automation, AI Agent Development and Voice AI Agent Development. It also shows ready-to-use WhatsApp AI agents for restaurants, salons and clinics, and a case study titled WhatsApp Chatbot with n8n, described as automated rewards, feedback and loyalty for restaurant chains.',
    stated: [
      'The address on the page is in Surat',
      'The page shows 8800+ Customers and describes software development since 2015',
    ],
  },
  {
    name: 'Pragyantra',
    url: 'https://pragyantra.com/',
    group: 'accounts',
    place: 'Bengaluru',
    tools: 'Tally, Zoho, Odoo, Vyapar, QuickBooks',
    lists: 'Tally and Zoho integration, accounting and ERP setup, an AI business dashboard',
    profile:
      'Pragyantra lists Tally API Integration and Zoho API Integration as services. It says it designs secure, two-way integrations that remove manual data entry, and that its accounting and ERP work is for Indian SMEs. Two products carry the AI and WhatsApp angle: Tally with WhatsApp, and an AI Business Dashboard.',
    stated: [
      'Names Tally, Zoho, Odoo, Vyapar and QuickBooks for its accounting and ERP work',
      'Says the dashboard connects with Tally, Zoho, Oracle and SAP',
      'The address on the page is in HSR Layout, Bengaluru',
    ],
  },
  {
    name: 'Appmetry',
    url: 'https://appmetry.com/',
    group: 'accounts',
    place: 'Chennai (engineering centre offer)',
    tools: 'Odoo, Tally, WhatsApp Business API, CRM, ERP',
    lists: 'AI agents, Odoo ERP, WhatsApp automation, voice and calling agents',
    profile:
      'Appmetry says its agents act in your CRM, ERP, WhatsApp and email, with guardrails and human approval. Odoo is an ERP, a single system for stock, orders and accounts. The page pairs Odoo work with Tally and WhatsApp Business API links, and lists two products: Bizbotify for WhatsApp, AI and CRM, and BizFinAI for asking questions of your Tally books.',
    stated: [
      'Lists Voice AI and Calling Agents among its services',
      'Offers to set up your own engineering centre in Chennai, as a pilot pod, build-operate-transfer or captive setup',
    ],
  },
  {
    name: 'Softlabs Group',
    url: 'https://softlabsgroup.com/',
    group: 'wider',
    place: 'Mumbai',
    tools: 'UiPath, Excel, email, business systems',
    lists: 'Workflow automation, AI agent development and private LLM development inside a wider software offer',
    profile:
      'Softlabs lists Workflow Automation, AI Agent Development and Private LLM Development under AI and automation, alongside custom software and staff augmentation. Two case entries are about automation: Excel report automation for Nippon India Mutual Fund, and email-to-system automation for Clipper Oil in the United States, which the page calls rule-based and built on UiPath.',
    stated: [
      'Gives a Mumbai head office address in Lower Parel',
      'Lists custom software development and IT staff augmentation next to its AI work',
      'Says it works with businesses in India and overseas',
    ],
  },
];

const GROUPS: { key: Firm['group']; heading: string; intro: string }[] = [
  {
    key: 'workflow',
    heading: 'Which agencies build workflows on n8n, Make and Zapier?',
    intro:
      'Four agencies whose pages put platform workflows first. These tools are visual builders that pass a record from one app to the next when something happens. FactoryJet wrote this page, so weigh its own entry accordingly. It is taken from our AI automation page.',
  },
  {
    key: 'agents',
    heading: 'Which firms build AI agents for WhatsApp and phone calls?',
    intro:
      'Two firms whose pages lead with agents that talk to customers, by chat or by voice. Both also list workflow work, so read the full profile before you decide.',
  },
  {
    key: 'accounts',
    heading: 'Which firms connect AI to Tally, Zoho and Odoo?',
    intro:
      'Two firms whose pages are closest to the accounts and ERP side of a business. Tally is the accounting package many Indian firms use for books and GST. Zoho and Odoo are business software suites.',
  },
  {
    key: 'wider',
    heading: 'Which wider software firm also lists AI automation?',
    intro:
      'One firm that sells automation as one part of a broad software offer. Its page mentions older rule-based tools next to newer AI work, which is a useful contrast for a buyer.',
  },
];

const JOBS: { job: string; firms: string }[] = [
  { job: 'Workflows on n8n', firms: 'FactoryJet, Amatec, SynkrAI, Innovatrix Infotech, InfyOm Technologies' },
  { job: 'Workflows on Make', firms: 'FactoryJet, Amatec, SynkrAI' },
  { job: 'Workflows on Zapier', firms: 'FactoryJet, SynkrAI' },
  { job: 'Tally in the loop', firms: 'FactoryJet, Pragyantra, Appmetry' },
  { job: 'Zoho in the loop', firms: 'FactoryJet, Amatec, Pragyantra' },
  { job: 'Odoo in the loop', firms: 'Appmetry, Pragyantra' },
  { job: 'WhatsApp agent or bot', firms: 'Hexagon Digital, InfyOm Technologies, Appmetry, Innovatrix Infotech, Pragyantra (Tally with WhatsApp)' },
  { job: 'Phone-call or voice agent', firms: 'Hexagon Digital, InfyOm Technologies, Appmetry, SynkrAI (sales calling agent)' },
  { job: 'Older rule-based tools such as UiPath', firms: 'Softlabs Group' },
];

const FAQS: FAQItem[] = [
  {
    q: 'Which AI automation agency is best in India?',
    a: 'Nobody can crown one, because buyers want different things. We opened nine home pages on 24 November 2026 and sorted the firms by the automation work each describes. FactoryJet, Amatec, SynkrAI and Innovatrix Infotech lead with platform workflows. Hexagon Digital and InfyOm Technologies lead with agents. Pragyantra and Appmetry sit nearest to Tally, Zoho and Odoo. Pick by your job first.',
  },
  {
    q: 'What are the top 5 automation companies in India?',
    a: 'No body publishes an official one, and buyers mean different things by the phrase. Some mean robotic process automation, which is software robots that click through screens. Others mean AI workflow automation. For AI workflow work, five pages worth reading first in this guide are FactoryJet, Amatec, SynkrAI, Innovatrix Infotech and Hexagon Digital, because each describes building automations. That is a reading list, not a ranking.',
  },
  {
    q: 'Which company should I pick for AI work in India?',
    a: 'It depends on whether you want a customer-facing agent, a back-office workflow or a model built from scratch. A shop owner wiring orders into Tally and a bank rolling out a contact-centre bot are two different purchases. State the job in one sentence, then compare firms whose own pages describe that job.',
  },
  {
    q: 'What is an AI automation agency?',
    a: 'A team that designs and builds automations for other businesses, and puts AI into the steps that need reading or judgement. A rule moves an order into your books. A language model reads a supplier email and fills the fields. The agency connects the tools, tests the result and keeps it running.',
  },
  {
    q: 'What do AI automation services include?',
    a: 'Usually four things: a review of which tasks to automate, the build itself, testing on real records, and support after launch. Some firms add ready-made agents for chat or calls. Ask each one which of the four sits inside the quoted price and which is extra.',
  },
  {
    q: 'What does an AI automation company in India do day to day?',
    a: 'It maps a business task, picks a platform such as n8n, Make or Zapier, writes the steps, connects your apps, adds a language model where text must be read, and sets alerts for failures. After launch it fixes breaks when an app changes its connection and adjusts the rules as your work changes.',
  },
  {
    q: 'Which Indian agency builds on n8n?',
    a: 'Five pages in this guide name n8n: FactoryJet, Amatec, SynkrAI, Innovatrix Infotech and InfyOm Technologies. Innovatrix names self-hosted n8n with Python, and Amatec names n8n beside Make.com, Zoho and monday.com. n8n can run on your own server or in its cloud, so ask where each firm would host yours.',
  },
  {
    q: 'Which firms connect AI automation to Tally and Zoho?',
    a: 'Pragyantra lists Tally API Integration and Zoho API Integration. Appmetry pairs Odoo work with Tally and WhatsApp links. FactoryJet builds n8n workflows that touch Tally and Zoho, and confirms your setup fits before it quotes. Amatec names Zoho as a partner platform. Whichever you meet, ask for a live example on your own Tally version.',
  },
  {
    q: 'Can AI read data out of Tally?',
    a: 'Often. Tally publishes its own help on XML integration, and a workflow tool can send requests to TallyPrime once that feature is switched on. Where Tally runs on an office PC, the network path to that machine is the first thing to check. Your version and setup decide the rest.',
  },
  {
    q: 'Which agency can build a WhatsApp or voice agent?',
    a: 'Hexagon Digital lists voice agents that answer calls, qualify leads and book appointments, plus WhatsApp bots. InfyOm Technologies shows ready-to-use WhatsApp agents for restaurants, salons and clinics and lists voice AI agent development. Appmetry lists voice and calling agents. Ask each to demonstrate on a call script or chat history you supply.',
  },
  {
    q: 'How were these nine firms picked?',
    a: 'We began with the searches Indian buyers type, such as best AI automation agency in India, then added the Tally, Zoho and n8n variants. A firm stayed only if its home page described automation or agent work and loaded when we fetched it on 24 November 2026. We then wrote down what each page says and left everything else out.',
  },
  {
    q: 'FactoryJet wrote this and is listed first. Is that fair?',
    a: 'Doubt it a little, as you would with any list written by a firm on it. The order is not a ranking, our profile comes from our own service page, and every other fact comes from the firm itself. Check any claim against the page linked under its profile.',
  },
  {
    q: 'How is this list different from your lists of AI agent and AI development companies?',
    a: 'This one is about automation: moving work between tools and putting AI inside the steps that need it. The agent guide is about software that acts on its own, and the development guide is about custom AI and generative AI builds. Different firms suit each, and a few turn up in more than one.',
  },
  {
    q: 'Are Wipro, Infosys and TCS on this list?',
    a: 'No. The nine here are firms whose pages describe AI workflow, agent or Tally and Zoho automation for business teams. The large IT services companies serve a different kind of programme. If you want them weighed, add them to your shortlist and give them the same checks as everyone else.',
  },
  {
    q: 'How much does AI automation cost in India?',
    a: 'It follows the job: how many tools it crosses, whether a step reads documents, how many odd cases need a person. Innovatrix Infotech publishes its own starting figure for an automation workflow. The rupee ranges we found from two Indian vendor guides sit on our AI automation page. FactoryJet gives a fixed written price once a short scoping call is done.',
  },
  {
    q: 'Does AI automation cost money to run after launch?',
    a: 'Yes. Expect the platform plan if you use a paid one, usage charges from the model provider, hosting if you self-host, and someone to fix breaks when an app changes. Ask each firm to list those lines separately from the build price.',
  },
  {
    q: 'Is n8n, Make or Zapier the better choice?',
    a: 'Zapier suits simple triggers between two apps. Make handles branching and reshaping data. n8n suits teams that want custom code or to host the tool themselves. A good firm picks per workflow and tells you why, rather than selling one tool for every job.',
  },
  {
    q: 'What is the difference between workflow automation and RPA?',
    a: 'Workflow automation passes data between apps through their connections. Robotic process automation, or RPA, drives screens the way a person would, which helps when an app has no connection to use. Softlabs Group describes one email-to-system case as rule-based and built on UiPath, an RPA product.',
  },
  {
    q: 'What is the difference between an LLM and an agent?',
    a: 'A large language model (LLM) reads and writes text and nothing more. An agent wraps a model in software that lets it do things, such as change a record or draft a reply for someone to approve. In practice a lot of automations call a model once and let plain rules do the rest.',
  },
  {
    q: 'Is ChatGPT an agent or an LLM?',
    a: 'ChatGPT is a chat product built on language models. On its own it answers in text. It acts like an agent only where it is given tools to call, and a business automation needs those tools set up, limited and logged. That setup is what an agency builds.',
  },
  {
    q: 'How long does an automation project take?',
    a: 'It varies with scope. Hexagon Digital says its projects go from first call to live system in 4 to 10 weeks. Ask every firm for dates in writing for the first workflow, and what happens to the dates if the scope grows.',
  },
  {
    q: 'What should a proof of concept show?',
    a: 'One real workflow running on a sample of your own records, with the cases where it hands over to a person. Agree the pass mark before it starts and confirm who owns the output if you stop afterwards. FactoryJet runs the workflow on a few of your records before you sign.',
  },
  {
    q: 'Who owns the workflows and the accounts?',
    a: 'Settle it before signing. At FactoryJet the workflows live in your own accounts and you own the code. Innovatrix Infotech says on its home page that it hands over every credential at launch. Ask every firm to state ownership in the contract.',
  },
  {
    q: 'Should I hire an agency, a freelancer or build it myself?',
    a: 'For two apps and a simple trigger, building it yourself on a free plan can be enough. Once a workflow spans several systems, reads documents or needs error handling, an agency or specialist saves repair time. Whichever route you take, test on real records before you rely on it.',
  },
  {
    q: 'What happens when an app changes and a workflow breaks?',
    a: 'It stops, unless alerts and a fix plan exist. Ask who is told, how fast someone looks, and whether fixes are inside a support plan or billed per job. FactoryJet turns each workflow on with Slack or email alerts for failed steps.',
  },
  {
    q: 'Do these firms publish prices?',
    a: 'Innovatrix Infotech publishes its own starting figure for an automation workflow on its home page. We report no prices for the other firms, so check each one directly. FactoryJet publishes no rate card and quotes after scoping.',
  },
  {
    q: 'Which firms on this list mention Zoho?',
    a: 'Amatec names Zoho as a platform and calls itself a Zoho partner. Pragyantra lists Zoho API Integration and a dashboard that connects with Zoho. FactoryJet builds workflows around Zoho CRM and Books. Check the Zoho edition and fields each firm has worked with.',
  },
];

export const post: BlogPost = {
  id: '860',
  slug: 'best-ai-automation-agencies-india',
  title: 'Best AI Automation Agency in India 2026: 9 Compared, Including Us',
  excerpt:
    'Nine AI automation firms in India, from their own home pages on 24 November 2026: what each describes, a table, a job guide and checks to run before you sign.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Nov 24, 2026',
  dateModified: 'Nov 24, 2026',
  readTime: '11 min read',
  imageUrl: '/blog-images/best-ai-automation-agencies-india.webp',
  imageAlt: 'A person at a desk with two monitors showing workflow diagrams',
  meta: {
    title: 'Best AI Automation Agency in India 2026: 9 Compared',
    description:
      'Nine AI automation agencies in India as their home pages described them on 24 November 2026, plus a job guide and six pre-signing checks.',
  },
  keyTakeaways: [
    'Pick the best AI automation agency in India by job, because no single firm suits every business: platform workflows, WhatsApp and voice agents, or links to Tally, Zoho and Odoo.',
    'Facts about the other eight firms come from their home pages, read on 24 November 2026. No slot was bought, and the order carries no rank.',
    'Pages for FactoryJet, Amatec, SynkrAI and Innovatrix Infotech lead with platform workflows. Hexagon Digital and InfyOm Technologies lead with agents. Pragyantra and Appmetry sit closest to Tally and Odoo.',
    'Innovatrix Infotech publishes its own starting figure for an automation workflow. We report no prices for the others. Ask every firm to split the build price from monthly running costs.',
    'FactoryJet wrote the guide and sits first. Put the same six checks to every firm, ourselves included.',
  ],
  faqs: FAQS,
  cta: {
    eyebrow: 'A second opinion',
    heading: 'Describe the one workflow you want automated',
    body: 'One call can settle whether the job suits n8n, Make or Zapier or needs something heavier. If a firm in this guide fits better, we will say so.',
    button: 'Book a scoping call',
    serviceHref: '/ai-automation',
    serviceLabel: 'AI automation in India',
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
              name: 'Best AI Automation Agency in India 2026: 9 Compared',
              description:
                'Nine AI automation agencies in India, as their own home pages described them on 24 November 2026, with a job guide and pre-signing checks.',
              inLanguage: 'en-IN',
              datePublished: '2026-11-24',
              dateModified: '2026-11-24',
              isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com' },
              publisher: { '@id': 'https://factoryjet.com/#organization' },
              about: { '@type': 'Thing', name: 'AI automation agencies in India' },
              speakable: {
                '@type': 'SpeakableSpecification',
                cssSelector: ['#answer-first', 'h1', 'h2'],
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'Nine AI automation firms in India, 2026',
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
        <p className="text-sm font-semibold uppercase tracking-wide text-[#B23E13] mb-2">In brief</p>
        <p className="text-gray-800 leading-relaxed mb-3">
          Nobody holds the title of best AI automation agency in India across the board. For workflows built on n8n, Make and Zapier, the pages we read describe FactoryJet, Amatec, SynkrAI and Innovatrix Infotech. For AI agents that talk on WhatsApp or the phone, they describe Hexagon Digital and InfyOm Technologies. For links into Tally, Zoho and Odoo, they describe Pragyantra and Appmetry. Softlabs Group lists automation inside a wider software offer.
        </p>
        <p className="text-gray-800 leading-relaxed">
          We opened each home page on 24 November 2026. Nobody bought a place and the order is no ranking. FactoryJet wrote the page, so it comes first.
        </p>
      </div>

      <p className="mb-4">
        Searches for an AI automation agency, AI automation services or an AI automation company in India return a mixed bag: agency directories, city pages from marketing firms, and listicles from the firms they rank. This guide narrows that to nine firms that describe building automations or AI agents for business teams, and reports one set of facts for each, taken from the firm itself.
      </p>
      <p className="mb-4">
        Two terms in plain words. An <strong>automation</strong> is a chain of steps that runs by itself when something happens, like a paid order creating an invoice. <strong>AI automation</strong> adds a language model to the steps that need reading or judgement, like pulling the fields out of a supplier email. An <strong>AI automation agency</strong> builds and maintains those chains for you.
      </p>
      <p className="mb-6">
        <strong>A note on bias.</strong> FactoryJet builds automations and wrote this page, so it sits first. That is a conflict of interest, so read our entry with the doubt you would give any firm describing itself.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Who counts as the best AI automation agency in India? The nine at a glance</h2>
      <p className="mb-4">
        Four columns: the firm, the place its page names, the tools it names, and what it lists. Scroll sideways on a phone.
      </p>
      <div className="overflow-x-auto mb-8 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Firm</th>
              <th className="p-3 text-left border border-gray-700">Place its page names</th>
              <th className="p-3 text-left border border-gray-700">Tools it names</th>
              <th className="p-3 text-left border border-gray-700">What it lists</th>
            </tr>
          </thead>
          <tbody>
            {FIRMS.map((a) => (
              <tr key={a.name} className={a.name === 'FactoryJet' ? 'bg-orange-50' : 'odd:bg-white even:bg-gray-50'}>
                <td className="p-3 border border-gray-200 font-semibold align-top">{a.name}</td>
                <td className="p-3 border border-gray-200 align-top">{a.place}</td>
                <td className="p-3 border border-gray-200 align-top">{a.tools}</td>
                <td className="p-3 border border-gray-200 align-top">{a.lists}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">How did we pick the nine?</h2>
      <dl className="mb-6 space-y-3">
        <div>
          <dt className="font-semibold">Where the names came from</dt>
          <dd>Buyer searches such as &ldquo;best ai automation agency in india&rdquo; and its Tally, Zoho and n8n variants, read from Google results and from the answers AI tools give to them.</dd>
        </div>
        <div>
          <dt className="font-semibold">What got a firm in</dt>
          <dd>Its own home page describes automation or AI agent work for businesses, and the page loaded when fetched on 24 November 2026.</dd>
        </div>
        <div>
          <dt className="font-semibold">What we wrote down</dt>
          <dd>Phrases visible on that page. Places appear as the firm names them. Review scores appear only for FactoryJet.</dd>
        </div>
        <div>
          <dt className="font-semibold">What we left out</dt>
          <dd>Opinions about quality. We report what a firm says, and you judge the work through references and a trial.</dd>
        </div>
      </dl>

      {GROUPS.map((g) => (
        <div key={g.key}>
          <h2 className="text-2xl font-bold mt-10 mb-4">{g.heading}</h2>
          <p className="mb-6">{g.intro}</p>
          {FIRMS.filter((a) => a.group === g.key).map((a) => (
            <section key={a.name} className="mb-8 border-l-4 border-gray-200 pl-4">
              <h3 className="text-xl font-bold mt-2 mb-2">{a.name}</h3>
              <p className="mb-3">{a.profile}</p>
              <ul className="list-disc pl-6 mb-3 space-y-1">
                {a.stated.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <p className="text-sm text-gray-600">
                Page read on 24 November 2026:{' '}
                <a href={a.url} className="text-[#B23E13] underline" rel="noopener" target={a.url.startsWith('https://factoryjet.com') ? undefined : '_blank'}>
                  {a.url.replace('https://', '')}
                </a>
              </p>
            </section>
          ))}
        </div>
      ))}

      <h2 className="text-2xl font-bold mt-10 mb-4">Which firm fits which job?</h2>
      <p className="mb-4">
        This table reads the nine pages by job. A name appears in a row only where its home page names that tool or that kind of agent.
      </p>
      <div className="overflow-x-auto mb-8 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">If your job is</th>
              <th className="p-3 text-left border border-gray-700">Pages that mention it</th>
            </tr>
          </thead>
          <tbody>
            {JOBS.map((j) => (
              <tr key={j.job} className="odd:bg-white even:bg-gray-50">
                <td className="p-3 border border-gray-200 font-semibold align-top">{j.job}</td>
                <td className="p-3 border border-gray-200 align-top">{j.firms}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">What are the top 5 automation companies in India?</h2>
      <p className="mb-4">
        No official top five exists, and the phrase covers two different markets. Robotic process automation, or RPA, means software robots that click through screens, and UiPath is one product in that group. AI workflow automation means connecting apps and adding a language model to some steps. This guide is about the second.
      </p>
      <p className="mb-6">
        If you need five pages to read first for AI workflow automation, start with FactoryJet, Amatec, SynkrAI, Innovatrix Infotech and Hexagon Digital. Each describes building automations. That is a reading list drawn from what the pages say, not a ranking of quality.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">What does AI automation cost in India?</h2>
      <p className="mb-4">
        Innovatrix Infotech puts its own starting figure for an automation workflow at ₹1.7 lakh, and says one fixed price is agreed after a discovery call. We report no prices for the other firms, so check each directly.
      </p>
      <p className="mb-6">
        Our <a href="/ai-automation" className="text-[#B23E13] underline">AI automation page</a> lists sourced rupee ranges from two Indian vendor guides, each labelled the way its source labels it. We publish no rate card. Scoping starts with a short call, and one fixed price in writing follows it. Whatever the build price, ask for running costs as a separate line: platform plan, model usage, hosting and fixes.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">What should you check before you sign with an AI automation company?</h2>
      <p className="mb-4">
        Put these six to every firm on your shortlist and get the replies in writing.
      </p>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>One workflow, named.</strong> Can the firm describe your first workflow in a few lines, with its trigger, tools and end result?</li>
        <li><strong>A trial on real records.</strong> Will it run on a sample of your own data before you commit?</li>
        <li><strong>A path for odd cases.</strong> Who takes over when the automation cannot decide, and how are they told?</li>
        <li><strong>Accounts and code.</strong> Do the workflows live in your accounts, and do you own what is built?</li>
        <li><strong>Failure alerts.</strong> What tells a person when a step stops?</li>
        <li><strong>Monthly running costs.</strong> What will platform, model and upkeep cost once it is live?</li>
      </ol>
      <p className="mb-6">
        Tally has its own help pages on <a href="https://help.tallysolutions.com/xml-integration/" className="text-[#B23E13] underline" rel="noopener" target="_blank">XML integration</a>, which is worth reading before any call about linking your books to a workflow. For the wider picture, see our guides to <a href="/blog/best-ai-agent-development-companies-india" className="text-[#B23E13] underline">AI agent development companies in India</a> and <a href="/blog/top-ai-development-companies-india" className="text-[#B23E13] underline">top AI development companies in India</a>.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Which pages are behind the profiles?</h2>
      <p className="mb-4">Each home page below was opened on 24 November 2026.</p>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        {FIRMS.filter((a) => a.name !== 'FactoryJet').map((a) => (
          <li key={a.name}>
            {a.name}:{' '}
            <a href={a.url} className="text-[#B23E13] underline" rel="noopener" target="_blank">
              {a.url.replace('https://', '')}
            </a>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">What does this list leave out?</h2>
      <p className="mb-4">
        It covers nine firms whose home pages describe AI workflow, agent or Tally and Zoho automation for business teams and loaded on the day. Large IT services companies, product platforms and freelancers are outside its scope. It reports what firms say on a single day, and it carries no review scores except FactoryJet&rsquo;s own: 5.0 on <a href="https://clutch.co/profile/factoryjet-private" className="text-[#B23E13] underline" rel="noopener" target="_blank">Clutch</a> from 4 reviews and 5.0 on <a href="https://www.goodfirms.co/company/factoryjet-private-limited" className="text-[#B23E13] underline" rel="noopener" target="_blank">GoodFirms</a> from 5 reviews.
      </p>
      <p className="mb-6">
        Tell FactoryJet the workflow you have in mind through our <a href="/ai-automation" className="text-[#B23E13] underline">AI automation page</a> or read how we build on <a href="/n8n-automation" className="text-[#B23E13] underline">n8n</a>. We will tell you whether it needs a platform workflow or something heavier, and name a firm above if it suits you better.
      </p>
    </>
  ),
};

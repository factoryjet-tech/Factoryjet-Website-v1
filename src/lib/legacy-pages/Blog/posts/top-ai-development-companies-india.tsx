import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

const PAGE_URL = 'https://factoryjet.com/blog/top-ai-development-companies-india';

// Every fact about another firm below was read on that firm's own website on
// 24 November 2026. The URL in `source` is the page read, and the quote behind
// each claim sits in the research ledger outside the repo. Nothing is paid
// placement. FactoryJet, the publisher, is listed first and the rest are
// grouped by the kind of AI work each firm describes. The table, the profiles
// and the ItemList schema all map from this one array.
interface Firm {
  name: string;
  url: string;
  source: string;
  group: 'first' | 'builders' | 'enterprise';
  work: string;
  detail: string;
  what: string;
  suits: string;
  ask: string;
}

const FIRMS: Firm[] = [
  {
    name: 'FactoryJet (that is us)',
    url: 'https://factoryjet.com/ai-development',
    source: 'https://factoryjet.com/ai-development',
    group: 'first',
    work: 'Custom AI software for one business job at a time: answers from your documents, AI inside your CRM or store, generative AI apps',
    detail: 'Rated 5.0 on Clutch from 4 reviews and 5.0 on GoodFirms from 5 reviews',
    what: 'We start with one job and a test set of real cases from your business, then agree a pass mark before building. We try models from OpenAI, Anthropic, Google and open-weight families on those cases and pick on accuracy, cost and data terms. We fine-tune late, once better prompts and retrieval have failed to give the format you need. Each phase has one fixed price in writing, and the code, prompts and test sets sit in your own repository and cloud account. Two named examples: Sow Easy, where WooCommerce trade ordering is connected to Odoo, and GPSUK, online ordering for trade buyers who reorder the same promotional products again and again.',
    suits: 'A mid-sized business with one clear use case that wants to see it scored on its own data before committing.',
    ask: 'Ask us which of your ideas we would tell you to drop. A firm that has built things will have an opinion.',
  },
  {
    name: 'Maruti Techlabs',
    url: 'https://marutitech.com/',
    source: 'https://marutitech.com/services/artificial-intelligence-consulting/',
    group: 'builders',
    work: 'AI consulting plus custom AI and machine learning development',
    detail: 'Its home page lists 250+ skilled professionals, 14+ years and 100+ projects delivered; its contact page lists an office in Ahmedabad',
    what: 'Its AI consulting page says it helps organisations evaluate foundation models, RAG architectures and generative AI opportunities. RAG means the AI looks things up in your own files before it answers. The same page lists a working AI proof of concept tailored to a use case, and its services list names Custom AI/ML Development.',
    suits: 'A company that wants advice on what to build first and a team that can then build it.',
    ask: 'What the proof of concept is scored on, and what you keep if you stop after it.',
  },
  {
    name: 'LeewayHertz',
    url: 'https://www.leewayhertz.com/',
    source: 'https://www.leewayhertz.com/generative-ai-development-company/',
    group: 'builders',
    work: 'Generative AI solution development, model fine-tuning and LLM-powered applications',
    detail: 'Its page lists proof of concept and MVP work, and two LLM application case studies by title',
    what: 'Its generative AI page says it develops governed generative AI solutions grounded in enterprise data, and that it fine-tunes pre-trained models, including GPT-4, for specific applications and domains. It also says it builds PoCs and MVPs to validate generative AI use cases before full-scale implementation. Two case studies are titled LLM-powered App for Compliance and Security Access and LLM-powered Application for Safer Machinery Troubleshooting.',
    suits: 'A team that already knows it wants a generative AI app and expects to fine-tune a model.',
    ask: 'Whether fine-tuning is needed for your job at all, or whether better retrieval would do.',
  },
  {
    name: 'Talentica',
    url: 'https://www.talentica.com/',
    source: 'https://www.talentica.com/',
    group: 'builders',
    work: 'Product engineering with AI for technology companies, including agentic systems and AI productization',
    detail: 'Its home page lists 600 AI-native engineers and 50+ AI solutions in production; its about page says it was founded in 2003',
    what: 'Its home page says it helps technology companies build, productionize and reinvent products with AI. It lists productionizing AI, enterprise AI services, agentic systems engineering and AI productization as offers, and its about page lists Gen AI Development Services under its capabilities.',
    suits: 'A software company that wants AI built into its own product by an engineering team.',
    ask: 'Whether it takes on an internal business tool as readily as a product for software customers.',
  },
  {
    name: 'Fractal Analytics',
    url: 'https://www.fractal.ai/',
    source: 'https://www.fractal.ai/',
    group: 'enterprise',
    work: 'Enterprise AI consulting and AI engineering',
    detail: 'Its home page lists 6,000+ Fractalites; its about page says it was founded in 2000',
    what: 'Its home page calls it a leading AI consulting firm delivering scalable enterprise AI solutions and strategy. A news item on the same page says it introduced LLM Studio on NVIDIA infrastructure, and its about page says it supports large global enterprises.',
    suits: 'A large business that wants strategy and delivery from one AI-focused firm.',
    ask: 'Whether it takes a first project from a company with a few hundred staff.',
  },
  {
    name: 'Persistent Systems',
    url: 'https://www.persistent.com/',
    source: 'https://www.persistent.com/',
    group: 'enterprise',
    work: 'Digital engineering and enterprise modernisation with GenAI platforms and agentic AI services',
    detail: 'Its home page lists 29,500+ employees across 21 countries and 36+ years in software engineering',
    what: 'Its home page describes it as a trusted Digital Engineering and Enterprise Modernization partner. It names three AI platforms, GenAI Hub, iAURA and SASVA, and lists Agentic AI and Enterprise AI Readiness among its services. A news headline on the page covers a third facility opened in Hyderabad to strengthen AI and modernization delivery.',
    suits: 'A large company modernising its software estate where AI is one strand of a bigger programme.',
    ask: 'Which of its three named platforms would touch your project, and which parts would be written fresh.',
  },
  {
    name: 'Quantiphi',
    url: 'https://quantiphi.com/',
    source: 'https://quantiphi.com/generative-ai/',
    group: 'enterprise',
    work: 'Generative AI platforms and applied AI for enterprises',
    detail: 'Its home page shows 86 patents filed and 19 granted for its research arm, Phi Labs',
    what: 'Its generative AI page lists baioniq, an enterprise-ready modular Gen AI platform built on AWS, QDox, a Gen AI-powered document processing platform, and QChat, a Gen AI-powered conversational solution. Its home page says it helps enterprises own their intelligence and build lasting AI capability.',
    suits: 'An enterprise on AWS that wants a ready-made generative AI platform as a starting point.',
    ask: 'What you would need to buy or licence, and what you would own once the project ends.',
  },
  {
    name: 'Tiger Analytics',
    url: 'https://www.tigeranalytics.com/',
    source: 'https://www.tigeranalytics.com/',
    group: 'enterprise',
    work: 'AI and analytics: data science, AI engineering, ML products and platforms, and a GenAI function',
    detail: 'Its home page lists Leading Gen AI Service Provider at Gen AI Conclave 2025',
    what: 'Its home page says it brings the best of AI and analytics together. Under Differentiate with AI/ML it lists Data Science, AI Engineering and ML Products and Platforms, and it lists GenAI as a business function. It also describes reusable accelerators, built to speed up AI development.',
    suits: 'A data-heavy business whose AI work starts from analytics and forecasting.',
    ask: 'Which parts of your build would come from its accelerators and who would maintain them.',
  },
  {
    name: 'Happiest Minds',
    url: 'https://www.happiestminds.com/',
    source: 'https://www.happiestminds.com/about-us/',
    group: 'enterprise',
    work: 'AI-first digital engineering with agentic and generative AI business services',
    detail: 'Its about page says it is headquartered in Bengaluru and listed on BSE and NSE, with 6,450+ people across 47 global offices',
    what: 'Its home page calls it an AI First, customer-centric digital engineering company. Its service pillars include Agentic AI and Generative AI Business Services, and it lists Gen AI Based Companions as a featured solution.',
    suits: 'A larger company that wants AI inside a wider digital engineering programme from a listed firm.',
    ask: 'What size of project it accepts at the low end, and who leads the work after the sales stage.',
  },
];

// One H2 per buyer group, worded like the questions buyers type into search
// boxes and AI assistants.
const GROUPS: { key: Firm['group']; heading: string; intro: string }[] = [
  {
    key: 'first',
    heading: 'Which company builds custom AI software for a mid-sized business?',
    intro: 'We wrote this guide, so read our own entry with that in mind. It comes from our AI development page, and we say below when another firm may suit you better.',
  },
  {
    key: 'builders',
    heading: 'Which firms build custom AI and generative AI apps?',
    intro: 'These three describe hands-on building on their own sites: consulting and custom machine learning, LLM apps and fine-tuning, and AI inside software products.',
  },
  {
    key: 'enterprise',
    heading: 'Which large AI and analytics firms do buyers get pointed to?',
    intro: 'These five describe enterprise programmes, platforms or analytics on their own sites. AI assistants name several of them often, and they suit a different buyer from a single-job project.',
  },
];

const FAQS: FAQItem[] = [
  {
    q: 'What are the top AI development companies in India?',
    a: 'No independent ranking exists, and we will not invent one. On 24 November 2026 we read the websites of nine firms and grouped them by the AI work they describe: FactoryJet, Maruti Techlabs, LeewayHertz and Talentica build custom AI, and Fractal, Persistent, Quantiphi, Tiger Analytics and Happiest Minds run larger programmes. We wrote this list and put ourselves first, so check it against your own shortlist.',
  },
  {
    q: 'Which AI company is best in India?',
    a: 'It depends what you want built. A bank modernising its software, a retailer wanting answers from its own product files and a startup adding AI to its app are three different purchases. Name the job first, then compare firms that describe that job on their own sites.',
  },
  {
    q: 'Which AI company suits a small or mid-sized business in India?',
    a: 'Look for a team that tests on your own records before you sign, puts the price in writing and hands over the code. We list firms that fit that profile and larger ones that suit a different buyer. We suit one clear job at a mid-sized company, and the profiles say when another firm fits better.',
  },
  {
    q: 'What are the top 5 AI companies in India?',
    a: 'There is no official top five. When we asked ChatGPT on 24 November 2026 for top AI development companies in India, it numbered TCS, Infosys, HCLTech, Wipro and Tech Mahindra from 1 to 5, then Persistent, Fractal and Quantiphi. Other tools gave other orders, which tells you the list changes with the question. Treat any top five as one tool\'s opinion.',
  },
  {
    q: 'Which is the top AI company in India?',
    a: 'Nobody holds an agreed title. Across the 32 answers we collected to four buyer questions, Infosys and TCS were each named in 19, Persistent Systems in 15, and Sarvam AI and Quantiphi in 14 each. That shows what assistants repeat, not who does the best work for you.',
  },
  {
    q: 'Which companies in India say they work on AI?',
    a: 'A great many. Big IT firms, analytics houses, platform vendors and small software teams all describe AI work on their own sites. In this guide, Maruti Techlabs, LeewayHertz, Talentica, Fractal, Persistent, Quantiphi, Tiger Analytics, Happiest Minds and FactoryJet each say so, in the words quoted on their profiles.',
  },
  {
    q: 'How were these nine firms picked?',
    a: 'Step one was the names that AI assistants and Google throw up for Indian buyers of AI development. Step two was dropping any firm whose own site does not describe custom AI, generative AI or machine learning work. Step three was reading each remaining site on 24 November 2026. No money changed hands, and every claim is a line from that firm\'s page.',
  },
  {
    q: 'How is this list different from your list of AI agent companies?',
    a: 'Our guide to AI agent development companies in India covers firms that build software that acts, such as logging an order or booking a call. This list is about AI development in general: custom software, generative AI apps and machine learning. Three firms appear in both, and each has a fresh profile here.',
  },
  {
    q: 'Which Indian company is best for generative AI development?',
    a: 'LeewayHertz and Quantiphi describe generative AI work in the most detail on their own pages. LeewayHertz lists fine-tuning and LLM apps, and Quantiphi lists three named Gen AI platforms. For a mid-sized business wanting answers from its own documents, FactoryJet is another option. Ask each for a working demo on your data.',
  },
  {
    q: 'Are Infosys, TCS and Wipro on this list?',
    a: 'No. This list covers nine firms that describe custom AI or generative AI development, and none of the three is among them. AI assistants name them often, so if you want them weighed, put them on your own shortlist and give them the seven questions further down.',
  },
  {
    q: 'Where does Sarvam AI fit?',
    a: 'Sarvam describes itself as India\'s Full-Stack Sovereign AI Platform, with models built for India\'s languages, culture and context. It also lists forward deployed engineering, where its engineers work alongside yours. It sits closer to a model and platform provider than to a project firm, so it is outside this list. Read its site if Indian-language models matter to you.',
  },
  {
    q: 'You list yourselves first, so can I trust this list?',
    a: 'Fair doubt. The author of a list who also tops it has a bias. Our fit is narrow: a mid-sized business with one clear use case, a scored prototype on its own data, a fixed price per phase and the code in its own repository. A bank or a telecom running a multi-year programme should look further down.',
  },
  {
    q: 'What should I ask an AI development company before hiring it?',
    a: 'Ask who writes the code, whether a sample of your own records goes through the system before you sign, how accuracy is scored, who owns the code, prompts and test set, what the price covers and what happens when the AI gets an answer wrong. Plain written answers to all of them earn a second call.',
  },
  {
    q: 'What does a generative AI development company actually build?',
    a: 'Software that writes or answers: replies to customers, summaries of long contracts, product descriptions in your style, or answers drawn from your own documents with the source shown. Profiles above give each firm\'s own examples. Ask for one that resembles your job.',
  },
  {
    q: 'Do I need to fine-tune a model to get good results?',
    a: 'Often not. Fine-tuning means training a model further on your examples. Many business jobs work with a well-written prompt and retrieval from your own files. LeewayHertz lists fine-tuning as a service, and we use it late, once better prompts and retrieval have failed to give the format you need. Ask any firm to show the saving.',
  },
  {
    q: 'Is a paid proof of concept worth it?',
    a: 'Usually yes, if it is small. One cheap phase on your real records shows whether the idea survives contact with your data. Before you pay, confirm the price, the pass mark and who owns the output if you stop there. Maruti Techlabs and LeewayHertz both list proof of concept work.',
  },
  {
    q: 'How do I compare AI development quotes from Indian firms?',
    a: 'Line the quotes up on one sheet with the same rows: the job, the systems touched, the test set and pass mark, the phases, fixed versus hourly work, code ownership and the monthly cost of support. Totals alone mislead when the scopes differ.',
  },
  {
    q: 'What does AI development cost in India?',
    a: 'It follows the job. Our AI development page carries sourced rupee ranges from two Indian agency guides, with the labels each source uses. FactoryJet publishes no rate card. After a short scoping call it puts one fixed price per phase in writing.',
  },
  {
    q: 'What is the difference between AI development and AI agent development?',
    a: 'AI development is the wider field: custom software that uses AI to answer, write or predict. An agent goes a step further and acts, for instance by updating a record. For agents, read our AI agent development page and the companion list of firms.',
  },
  {
    q: 'Which firm suits a business that wants AI added to its own product?',
    a: 'Talentica describes helping technology companies build and reinvent products with AI, and Persistent lists AI platforms inside a digital engineering offer. If the AI is for your internal team rather than your customers, a custom-software firm such as FactoryJet or Maruti Techlabs may fit better.',
  },
  {
    q: 'Which firms suit a business that already runs on AWS?',
    a: 'Quantiphi says its baioniq platform is built on AWS, so it is the clearest match on its own pages. Other firms here may also work on AWS, but we do not state that for any of them. Ask each which cloud it has built on before.',
  },
  {
    q: 'Who owns the code when a firm builds my AI system?',
    a: 'It depends on the contract, so ask before you sign. With FactoryJet you own the code, prompts and test sets in your own repository and cloud account, with no licence fee to us. For any other firm, get the answer in writing, including what is built on its own platform.',
  },
  {
    q: 'Are the firms on this list vetted by you?',
    a: 'We checked that each site loads and says what we report. We have not hired these firms, tested their systems or seen their contracts, so there are no scores. Use it as a first shortlist, and call references for any firm you contact.',
  },
  {
    q: 'Is a ready-made AI platform better than custom AI development?',
    a: 'A platform such as Quantiphi\'s baioniq or Persistent\'s GenAI Hub gives you a head start that you then adapt. Custom software is written around how your team works. Whichever you consider, ask to see your own task running, and ask what the plan is for the day you need a feature the platform lacks.',
  },
];

export const post: BlogPost = {
  id: '859',
  slug: 'top-ai-development-companies-india',
  title: 'Top AI Development Companies India 2026: 9 Compared',
  excerpt:
    'Nine firms with custom AI, generative AI or machine learning work on their own sites, each opened on 24 November 2026. A profile for each, a comparison table and a question to put to every one. The author is on the list too.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Nov 24, 2026',
  dateModified: 'Nov 24, 2026',
  readTime: '11 min read',
  imageUrl: '/blog-images/top-ai-development-companies-india.webp',
  imageAlt: 'Two developers working side by side at desks, one with code on a laptop screen',
  meta: {
    title: 'Top AI Development Companies India 2026',
    description:
      'Nine top AI development companies in India, read from their own sites on 24 November 2026, with a table, profiles and questions to ask.',
  },
  keyTakeaways: [
    'There is no single best AI company in India. Fit depends on your size, your software and the job in hand.',
    'Each fact about another firm comes from its own website, opened on 24 November 2026. Nobody paid, and the order is not a ranking.',
    'Four firms describe hands-on custom AI work: FactoryJet, Maruti Techlabs, LeewayHertz and Talentica. Five describe larger enterprise or analytics programmes.',
    'When we asked ChatGPT for top AI development companies in India, it numbered TCS, Infosys, HCLTech, Wipro and Tech Mahindra 1 to 5. Other tools gave other orders.',
    'The author sits first on the list, so weigh our entry with care. Put the same seven questions to every firm before signing.',
  ],
  faqs: FAQS,
  cta: {
    eyebrow: 'A second opinion',
    heading: 'Tell us the one AI job you want built',
    body: 'A short call is enough for an honest view on whether custom AI is the right tool or a ready-made product would do. We will also point to a firm below if one suits you better.',
    button: 'Book a scoping call',
    serviceHref: '/ai-development',
    serviceLabel: 'AI development in India',
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
              name: 'Top AI Development Companies India 2026: 9 Compared',
              description:
                'Nine top AI development companies in India, read from their own sites on 24 November 2026, with a table, profiles and questions to ask.',
              inLanguage: 'en-IN',
              datePublished: '2026-11-24',
              dateModified: '2026-11-24',
              isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com' },
              publisher: { '@id': 'https://factoryjet.com/#organization' },
              about: { '@type': 'Thing', name: 'AI development companies in India' },
              speakable: {
                '@type': 'SpeakableSpecification',
                cssSelector: ['#answer-first', 'h1', 'h2'],
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'Top AI development companies in India compared (2026)',
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
          No one firm is the best AI company in India for everybody. For hands-on custom AI and generative AI apps, the sites we read describe FactoryJet, Maruti Techlabs, LeewayHertz and Talentica. For larger enterprise or analytics programmes they describe Fractal Analytics, Persistent Systems, Quantiphi, Tiger Analytics and Happiest Minds.
        </p>
        <p className="text-gray-800 leading-relaxed">
          All nine sites were opened on 24 November 2026. The order is not a ranking and nobody paid for a slot. The author is FactoryJet, which is why it comes first.
        </p>
      </div>

      <p className="mb-4">
        We asked eight AI search tools for the top AI development companies in India on 24 November 2026. ChatGPT gave a numbered table: TCS first, then Infosys, HCLTech, Wipro and Tech Mahindra, with Persistent, Fractal and Quantiphi at 6 to 8. Perplexity and Claude cited a different crop of agencies. Several of the top Google results for &ldquo;ai development company in india&rdquo; are &ldquo;Top 10&rdquo; lists published by agencies.
      </p>
      <p className="mb-4">
        Nobody agrees, because the question hides a second one: top for whom? A national bank and a 60-person distributor both want AI, and they should not call the same firm. This guide covers nine firms that describe custom AI, generative AI or machine learning work on their own sites. For each we give one fact it states about itself, who it seems to suit, and one question worth asking it.
      </p>
      <p className="mb-4">
        <strong>A note on bias.</strong> We build custom AI and we wrote the list, so we put ourselves first. Treat that as a conflict of interest. If another firm fits you better, the profile says so. Apply the same doubt to every list like this one.
      </p>
      <p className="mb-6">
        Two terms, in plain words. <strong>Generative AI</strong> is software that writes or summarises, such as drafting a reply or answering from your files. An <strong>AI development company</strong> builds that kind of software for you, connects it to your tools and keeps it working. For the buying detail on your own project, see our page on <a href="/ai-development" className="text-[#B23E13] underline">AI development in India</a>. If your job is software that acts rather than answers, our list of <a href="/blog/best-ai-agent-development-companies-india" className="text-[#B23E13] underline">AI agent development companies in India</a> and our <a href="/ai-agent-development" className="text-[#B23E13] underline">AI agent development page</a> cover that.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">The top AI development companies at a glance</h2>
      <p className="mb-4">
        Find the rows that match your size and the job, then read those profiles in full.
      </p>
      <div className="overflow-x-auto mb-8 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Firm</th>
              <th className="p-3 text-left border border-gray-700">AI work it describes</th>
              <th className="p-3 text-left border border-gray-700">A detail it states</th>
              <th className="p-3 text-left border border-gray-700">Seems to suit</th>
            </tr>
          </thead>
          <tbody>
            {FIRMS.map((a) => (
              <tr key={a.name} className={a.name.startsWith('FactoryJet') ? 'bg-orange-50' : 'odd:bg-white even:bg-gray-50'}>
                <td className="p-3 border border-gray-200 font-semibold align-top">{a.name}</td>
                <td className="p-3 border border-gray-200 align-top">{a.work}</td>
                <td className="p-3 border border-gray-200 align-top">{a.detail}</td>
                <td className="p-3 border border-gray-200 align-top">{a.suits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">What did the AI assistants name for top AI companies in India?</h2>
      <p className="mb-4">
        We put four buyer questions to eight AI search tools on 24 November 2026, which gave 32 answers. Counting how many of the 32 answers name each company, Infosys and TCS appear in 19, Persistent Systems in 15, Sarvam AI and Quantiphi in 14, and Fractal Analytics in 13. LeewayHertz appears in 5 answers and Maruti Techlabs in 3.
      </p>
      <p className="mb-6">
        Two cautions. The counts show what assistants repeat, not quality, and eight tools asked four ways is a small sample. Sarvam AI sits outside this list because it describes itself as a platform of models and products, covered in the FAQs below.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">How we built this list</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Start with what buyers ask.</strong> We used searches such as &ldquo;top ai development companies in india&rdquo; and &ldquo;best ai development company in india&rdquo;, and the answers eight AI tools gave on 24 November 2026.</li>
        <li><strong>Keep firms that describe AI development.</strong> Each firm here lists custom AI, generative AI or machine learning work on its own site.</li>
        <li><strong>Read the source.</strong> Every description comes from the firm&rsquo;s own pages, opened on 24 November 2026 and linked on each profile.</li>
        <li><strong>Name a city only where the firm does.</strong> Where a page gave none in the text we read, we name none.</li>
        <li><strong>No scores we cannot prove.</strong> We have not hired these firms. The only review figures here are our own.</li>
        <li><strong>No prices for other firms.</strong> None of the nine pages gave a project price we could copy.</li>
      </ol>

      {GROUPS.map((g) => (
        <div key={g.key}>
          <h2 className="text-2xl font-bold mt-10 mb-4">{g.heading}</h2>
          <p className="mb-6">{g.intro}</p>
          {FIRMS.filter((a) => a.group === g.key).map((a) => (
            <section key={a.name} className="mb-8">
              <h3 className="text-xl font-bold mt-6 mb-2">{a.name}</h3>
              <p className="text-sm text-gray-600 mb-3">
                <strong>AI work it describes:</strong> {a.work}.
              </p>
              <p className="mb-3">{a.what}</p>
              <ul className="list-disc pl-6 mb-3 space-y-1">
                <li><strong>A detail it states:</strong> {a.detail}.</li>
                <li><strong>Seems to suit:</strong> {a.suits}</li>
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

      <h2 className="text-2xl font-bold mt-10 mb-4">Which type of AI firm matches your situation?</h2>
      <p className="mb-4">Find the sentence that sounds like you.</p>
      <div className="grid gap-3 mb-8 not-prose">
        <div className="rounded-xl border border-gray-200 p-4">
          <p className="font-semibold mb-1">&ldquo;We have one use case and want to see it work on our own records first.&rdquo;</p>
          <p className="text-gray-700 text-sm">Start with the hands-on builders, or with FactoryJet. Ask for a scored prototype built on a sample of your records.</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-4">
          <p className="font-semibold mb-1">&ldquo;We want a generative AI app and expect to fine-tune a model.&rdquo;</p>
          <p className="text-gray-700 text-sm">LeewayHertz lists fine-tuning and LLM apps. Ask it to show why your job needs a tuned model.</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-4">
          <p className="font-semibold mb-1">&ldquo;AI must be built into the software product we sell.&rdquo;</p>
          <p className="text-gray-700 text-sm">Talentica&rsquo;s home page is aimed at technology companies. Persistent lists AI platforms inside digital engineering.</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-4">
          <p className="font-semibold mb-1">&ldquo;Our AI work starts from forecasting and analytics across a large company.&rdquo;</p>
          <p className="text-gray-700 text-sm">Tiger Analytics and Fractal describe analytics-led AI for enterprises. Ask how a first project would be sized.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">What should you ask any AI development company?</h2>
      <p className="mb-4">
        Bring this list of seven to every first call, and ask for the replies in an email afterwards.
      </p>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Who writes the code?</strong> The person on the sales call may never touch your project.</li>
        <li><strong>Will it run on a sample of my own records before I sign?</strong> Slides cannot tell you how it reads your files.</li>
        <li><strong>How will accuracy be measured?</strong> Ask for a test set of real cases and a pass mark agreed in advance.</li>
        <li><strong>Is the price fixed in writing?</strong> Find out what changes it if the job grows.</li>
        <li><strong>Who owns the code, prompts and test set?</strong> Get the answer in the contract.</li>
        <li><strong>Where does my data go?</strong> Ask which model providers see it and on what terms.</li>
        <li><strong>What will the monthly bill be once it is live?</strong> Model usage, hosting and upkeep come on top of the build.</li>
      </ol>

      <p className="mb-6">
        FactoryJet publishes no rate card. A short scoping call comes first, then one fixed price per phase goes in writing. The sourced rupee ranges we found for AI builds are on our <a href="/ai-development" className="text-[#B23E13] underline">AI development page</a>, each with the name of the guide it came from.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Which pages are behind the profiles?</h2>
      <p className="mb-4">Each was opened on 24 November 2026.</p>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Maruti Techlabs: <a href="https://marutitech.com/services/artificial-intelligence-consulting/" className="text-[#B23E13] underline" rel="noopener" target="_blank">marutitech.com/services/artificial-intelligence-consulting/</a></li>
        <li>LeewayHertz: <a href="https://www.leewayhertz.com/generative-ai-development-company/" className="text-[#B23E13] underline" rel="noopener" target="_blank">www.leewayhertz.com/generative-ai-development-company/</a></li>
        <li>Talentica: <a href="https://www.talentica.com/" className="text-[#B23E13] underline" rel="noopener" target="_blank">www.talentica.com/</a></li>
        <li>Fractal Analytics: <a href="https://www.fractal.ai/" className="text-[#B23E13] underline" rel="noopener" target="_blank">www.fractal.ai/</a></li>
        <li>Persistent Systems: <a href="https://www.persistent.com/" className="text-[#B23E13] underline" rel="noopener" target="_blank">www.persistent.com/</a></li>
        <li>Quantiphi: <a href="https://quantiphi.com/generative-ai/" className="text-[#B23E13] underline" rel="noopener" target="_blank">quantiphi.com/generative-ai/</a></li>
        <li>Tiger Analytics: <a href="https://www.tigeranalytics.com/" className="text-[#B23E13] underline" rel="noopener" target="_blank">www.tigeranalytics.com/</a></li>
        <li>Happiest Minds: <a href="https://www.happiestminds.com/about-us/" className="text-[#B23E13] underline" rel="noopener" target="_blank">www.happiestminds.com/about-us/</a></li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">What does this guide leave out?</h2>
      <p className="mb-4">
        Our check was narrow: does each site load, and does it say what we quote. Nothing here comes from using a firm&rsquo;s software, reading a contract or phoning a client. Clutch and GoodFirms profiles help for each firm you shortlist, and so do references you can phone. Review scores appear only for us: 5.0 on <a href="https://clutch.co/profile/factoryjet-private" className="text-[#B23E13] underline" rel="noopener" target="_blank">Clutch</a> from 4 reviews and 5.0 on GoodFirms from 5 reviews.
      </p>
      <p className="mb-6">
        Holding a shortlist of your own? <a href="/ai-development" className="text-[#B23E13] underline">Describe the job to FactoryJet</a> and we will say whether custom AI is the right fit and which kind of firm here to ring first, even when that firm is not us.
      </p>
    </>
  ),
};

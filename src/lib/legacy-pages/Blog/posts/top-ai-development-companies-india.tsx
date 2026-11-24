import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

const PAGE_URL = 'https://factoryjet.com/blog/top-ai-development-companies-india';

// Every fact about another firm below was read as visible text on that firm's
// own website on 24 November 2026, and each phrase was matched against the raw
// page text. The URL in `source` is the page read, and the matched text is kept
// in the research ledger outside the repo. Nothing is paid placement. The order
// is not a ranking: FactoryJet, the publisher, comes first and the others sit in
// two groups by the AI work each describes. The table, the profiles and the
// ItemList schema all map from this one array.
interface Firm {
  name: string;
  url: string;
  source: string;
  group: 'first' | 'builders' | 'enterprise';
  work: string;
  detail: string;
  what: string;
}

const FIRMS: Firm[] = [
  {
    name: 'FactoryJet',
    url: 'https://factoryjet.com/ai-development',
    source: 'https://factoryjet.com/ai-development',
    group: 'first',
    work: 'Custom AI software for one business job at a time: answers from your documents, AI inside your CRM or store, generative AI apps',
    detail: 'Rated 5.0 on Clutch from 4 reviews and 5.0 on GoodFirms from 5 reviews',
    what: 'We start with one job and a test set of real cases from your business, then agree a pass mark before building. We try models from OpenAI, Anthropic, Google and open-weight families on those cases and pick on accuracy, cost and data terms. We fine-tune late, once better prompts and retrieval have failed to give the format you need. Each phase has one fixed price in writing, and the code, prompts and test sets sit in your own repository and cloud account. Other named projects on our site (ecommerce work): Sow Easy, where WooCommerce trade ordering connected to Odoo is now being tested on staging, and GPSUK, online ordering for trade buyers who reorder the same promotional products again and again.',
  },
  {
    name: 'Maruti Techlabs',
    url: 'https://marutitech.com/',
    source: 'https://marutitech.com/services/artificial-intelligence-consulting/',
    group: 'builders',
    work: 'AI consulting plus custom AI and machine learning development',
    detail: 'Its home page shows 250+ skilled professionals, 14+ years of experience and 100+ projects delivered; its contact page gives an address in Ahmedabad',
    what: 'On its AI consulting page it says it helps organisations evaluate foundation models, RAG architectures and generative AI opportunities. RAG means the AI looks things up in your own files before it answers. The page also lists a working AI proof of concept built for a use case, and Custom AI/ML Development appears in its services menu.',
  },
  {
    name: 'LeewayHertz',
    url: 'https://www.leewayhertz.com/',
    source: 'https://www.leewayhertz.com/generative-ai-development-company/',
    group: 'builders',
    work: 'Generative AI solution development, model fine-tuning and LLM-powered applications',
    detail: 'Its generative AI page lists proof of concept and MVP work and gives two LLM application case studies by title',
    what: 'Its generative AI page says it develops governed generative AI solutions grounded in enterprise data, and that it fine-tunes pre-trained models, including GPT-4, for specific applications and domains. It also lists PoCs and MVPs to validate generative AI use cases before full-scale implementation. The two case studies are titled LLM-powered App for Compliance and Security Access and LLM-powered Application for Safer Machinery Troubleshooting.',
  },
  {
    name: 'Talentica',
    url: 'https://www.talentica.com/',
    source: 'https://www.talentica.com/',
    group: 'builders',
    work: 'Product engineering with AI for technology companies, including agentic systems and AI productization',
    detail: 'Its home page lists 600 AI-native engineers and 50+ AI solutions in production; its about page says Talentica was founded in 2003',
    what: 'Its home page says it helps technology companies build, productionize and reinvent products with AI. Productionizing AI, enterprise AI services, agentic systems engineering and AI productization are listed as offers, and its about page names Gen AI Development Services among its capabilities.',
  },
  {
    name: 'Fractal Analytics',
    url: 'https://www.fractal.ai/',
    source: 'https://www.fractal.ai/about-us/',
    group: 'enterprise',
    work: 'Enterprise AI company working with data, analytics and AI engineering',
    detail: 'Its home page shows 6,000+ Fractalites; its about page says it was founded in 2000',
    what: 'Its about page calls it a globally recognized enterprise AI company and says it supports large global enterprises. A news item on its home page covers LLM Studio, introduced on NVIDIA infrastructure.',
  },
  {
    name: 'Quantiphi',
    url: 'https://quantiphi.com/',
    source: 'https://quantiphi.com/generative-ai/',
    group: 'enterprise',
    work: 'Generative AI platforms and applied AI for enterprises',
    detail: 'Its home page shows 86 patents filed and 19 granted',
    what: 'Its generative AI page lists baioniq, a modular Gen AI platform built on AWS, QDox, a Gen AI-powered document processing platform, and QChat, a Gen AI-powered conversational solution. Its home page speaks of helping enterprises own their intelligence.',
  },
  {
    name: 'Tiger Analytics',
    url: 'https://www.tigeranalytics.com/',
    source: 'https://www.tigeranalytics.com/',
    group: 'enterprise',
    work: 'AI and analytics: data science, AI engineering, ML products and platforms, and a GenAI function',
    detail: 'Its home page lists the award Leading Gen AI Service Provider at Gen AI Conclave 2025',
    what: 'Its home page speaks of bringing the best of AI and analytics together. Under Differentiate with AI/ML it lists Data Science, AI Engineering and ML Products and Platforms. It also describes easy-to-assemble accelerators and foundations that help speed up AI development.',
  },
  {
    name: 'Happiest Minds',
    url: 'https://www.happiestminds.com/',
    source: 'https://www.happiestminds.com/about-us/',
    group: 'enterprise',
    work: 'AI-first digital engineering with agentic and generative AI business services',
    detail: 'Its about page says it is headquartered in Bengaluru and listed on BSE and NSE, with 6,450+ people across 47 global offices',
    what: 'Its home page calls it an AI First, customer-centric digital engineering company. Agentic AI and Generative AI Business Services appear among its services, and Gen AI Based Companions is shown as a featured solution.',
  },
];

// One H2 per group, worded like the questions buyers type into search boxes and
// AI assistants.
const GROUPS: { key: Firm['group']; heading: string; intro: string }[] = [
  {
    key: 'first',
    heading: 'Which company builds custom AI software for a mid-sized business?',
    intro: 'FactoryJet wrote this page, so weigh this entry accordingly. It is drawn from our AI development page.',
  },
  {
    key: 'builders',
    heading: 'Which firms build custom AI and generative AI apps?',
    intro: 'Three firms whose own pages describe hands-on building: consulting with custom machine learning, LLM apps with fine-tuning, and AI inside software products.',
  },
  {
    key: 'enterprise',
    heading: 'Which larger AI and analytics firms should you also know?',
    intro: 'Four firms whose own pages describe enterprise AI, platforms, analytics or digital engineering.',
  },
];

const FAQS: FAQItem[] = [
  {
    q: 'What are the top AI development companies in India?',
    a: 'No independent ranking exists, and we will not invent one. On 24 November 2026 we read the websites of eight firms and grouped them by the AI work they describe. FactoryJet, Maruti Techlabs, LeewayHertz and Talentica describe hands-on custom AI. Fractal, Quantiphi, Tiger Analytics and Happiest Minds describe larger enterprise or analytics programmes. We wrote this list and put ourselves first.',
  },
  {
    q: 'Which AI company is best in India?',
    a: 'It depends what you want built. A bank modernising its software, a retailer wanting answers from its own product files and a startup adding AI to its app are three different purchases. Name the job first, then compare firms that describe that job on their own sites.',
  },
  {
    q: 'Which AI company suits a small or mid-sized business in India?',
    a: 'Look for a team that tests on your own records before you sign, puts the price in writing and hands over the code. FactoryJet works that way for one clear use case at a time. Ask every firm on your shortlist for the same three things.',
  },
  {
    q: 'What are the top 5 AI companies in India?',
    a: 'There is no official top five. Lists published by agencies and answers from AI tools each name a different five, and the order changes with how the question is worded. Treat any top five as one source\'s opinion, and shortlist by the job you need done.',
  },
  {
    q: 'Which is the top AI company in India?',
    a: 'Nobody holds an agreed title. Large IT services firms, analytics houses, model builders and project firms are judged on different things. Pick the type that matches your job, then compare two or three firms of that type.',
  },
  {
    q: 'Which companies in India say they work on AI?',
    a: 'A great many. Big IT firms, analytics houses, platform vendors and small software teams all describe AI work on their own sites. In this guide, Maruti Techlabs, LeewayHertz, Talentica, Fractal, Quantiphi, Tiger Analytics, Happiest Minds and FactoryJet each do, in the words quoted on their profiles.',
  },
  {
    q: 'How were these eight firms picked?',
    a: 'Step one was the names that AI assistants and Google throw up for Indian buyers of AI development. Step two was dropping any firm whose own site does not describe custom AI, generative AI or machine learning work. Step three was reading each remaining site on 24 November 2026. No money changed hands, and every claim is a line from that firm\'s page.',
  },
  {
    q: 'How is this list different from your list of AI agent companies?',
    a: 'Our guide to AI agent development companies in India covers firms that build software that acts, such as logging an order or booking a call. This list is about AI development in general: custom software, generative AI apps and machine learning. Maruti Techlabs, LeewayHertz and Fractal appear in both, with fresh profiles here.',
  },
  {
    q: 'Which Indian company is best for generative AI development?',
    a: 'LeewayHertz and Quantiphi describe generative AI work in the most detail on their own pages. LeewayHertz lists fine-tuning and LLM apps, and Quantiphi lists three named Gen AI platforms. For a mid-sized business wanting answers from its own documents, FactoryJet is another option. Ask each for a working demo on your data.',
  },
  {
    q: 'Are Infosys, TCS and Wipro on this list?',
    a: 'No. This list covers eight firms that describe custom AI or generative AI development, and none of the three is among them. If you want them weighed, put them on your own shortlist and give them the seven questions further down.',
  },
  {
    q: 'Where does Sarvam AI fit?',
    a: 'Sarvam describes itself as India\'s Full-Stack Sovereign AI Platform, with models built for India\'s languages, culture and context. Its site also says its engineers work alongside yours. It reads as a model and platform provider, so it sits outside this list. Read its site if Indian-language models matter to you.',
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
    a: 'Software that writes or answers: replies to customers, summaries of long contracts, product descriptions in your style, or answers drawn from your own documents with the source shown. The profiles above give each firm\'s own examples. Ask for one that resembles your job.',
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
    q: 'How does AI development differ from AI agent development?',
    a: 'AI development is the wider field: custom software that uses AI to answer, write or predict. An agent goes a step further and acts, for instance by updating a record. For agents, read our AI agent development page and the companion list of firms.',
  },
  {
    q: 'Which firm suits a business that wants AI added to its own product?',
    a: 'Talentica describes helping technology companies build and reinvent products with AI. If the AI is for your internal team rather than your customers, a custom-software firm such as FactoryJet or Maruti Techlabs describes work of that kind.',
  },
  {
    q: 'Which firms mention AWS on their own pages?',
    a: 'Quantiphi says its baioniq platform is built on AWS. Ask any other firm on your list which cloud it has built on before.',
  },
  {
    q: 'Who owns the code when a firm builds my AI system?',
    a: 'The contract decides, so read that clause first. At FactoryJet the code, prompts and test sets live in your repository and your cloud account, and we charge no licence for them. With any other firm, have the answer written down, along with anything that stays on its own platform.',
  },
  {
    q: 'What does this list tell me, and what should I check myself?',
    a: 'It reports what each firm says about itself, as read from its own site on 24 November 2026, so there are no scores. To test any firm, ask for references you can phone and for a trial on a sample of your own records.',
  },
  {
    q: 'Is a ready-made AI platform better than custom AI development?',
    a: 'A platform such as Quantiphi\'s baioniq gives you a head start that you then adapt. Custom software is written around how your team works. Whichever you consider, ask to see your own task running, and ask what the plan is for the day you need a feature the platform lacks.',
  },
];

export const post: BlogPost = {
  id: '859',
  slug: 'top-ai-development-companies-india',
  title: 'Top AI Development Companies India 2026: 8 Compared',
  excerpt:
    'Eight firms with custom AI, generative AI or machine learning work on their own sites, each opened on 24 November 2026. A profile for each, a comparison table and seven questions to put to every one. The author is on the list too.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Nov 24, 2026',
  dateModified: 'Nov 24, 2026',
  readTime: '10 min read',
  imageUrl: '/blog-images/top-ai-development-companies-india.webp',
  imageAlt: 'Two developers working side by side at desks, one with code on a laptop screen',
  meta: {
    title: 'Top AI Development Companies India 2026',
    description:
      'Eight top AI development companies in India, read from their own sites on 24 November 2026, with a table, profiles and questions to ask.',
  },
  keyTakeaways: [
    'There is no single best AI company in India. Fit depends on your size, your software and the job in hand.',
    'Each fact about another firm comes from its own website, opened on 24 November 2026. Nobody paid, and the order is not a ranking.',
    'Four firms describe hands-on custom AI work: FactoryJet, Maruti Techlabs, LeewayHertz and Talentica. Four describe larger enterprise or analytics programmes.',
    'Lists of top AI companies differ by source, so shortlist by the job you need done.',
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
              name: 'Top AI Development Companies India 2026: 8 Compared',
              description:
                'Eight top AI development companies in India, read from their own sites on 24 November 2026, with a table, profiles and questions to ask.',
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
          No one firm is the best AI company in India for everybody. For hands-on custom AI and generative AI apps, the sites we read describe FactoryJet, Maruti Techlabs, LeewayHertz and Talentica. For larger enterprise or analytics programmes they describe Fractal Analytics, Quantiphi, Tiger Analytics and Happiest Minds.
        </p>
        <p className="text-gray-800 leading-relaxed">
          All eight sites were opened on 24 November 2026. The order is not a ranking and nobody paid for a slot. The author is FactoryJet, which is why it comes first.
        </p>
      </div>

      <p className="mb-4">
        Buyers now put the question of who the top AI development companies in India are to AI assistants as well as to Google, and the answers shift from one tool to the next. Several of the top Google results for &ldquo;ai development company in india&rdquo; are &ldquo;Top 10&rdquo; lists published by agencies, so each list tends to reflect its author.
      </p>
      <p className="mb-4">
        The wording of the question matters. A national bank and a 60-person distributor both want AI, and they should not call the same firm. This guide covers eight firms that describe custom AI, generative AI or machine learning work on their own sites, with one stated fact per firm and what its page says it does.
      </p>
      <p className="mb-4">
        <strong>A note on bias.</strong> We build custom AI and we wrote the list, so we put ourselves first. Treat that as a conflict of interest, and apply the same doubt to every list like this one.
      </p>
      <p className="mb-6">
        Two terms, in plain words. <strong>Generative AI</strong> is software that writes or summarises, such as drafting a reply or answering from your files. An <strong>AI development company</strong> builds that kind of software for you, connects it to your tools and keeps it working. For the buying detail on your own project, see our page on <a href="/ai-development" className="text-[#B23E13] underline">AI development in India</a>. If your job is software that acts rather than answers, our list of <a href="/blog/best-ai-agent-development-companies-india" className="text-[#B23E13] underline">AI agent development companies in India</a> and our <a href="/ai-agent-development" className="text-[#B23E13] underline">AI agent development page</a> cover that.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">The top AI development companies at a glance</h2>
      <p className="mb-4">
        Three columns: who, what its page says it does, and one detail it states.
      </p>
      <div className="overflow-x-auto mb-8 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Firm</th>
              <th className="p-3 text-left border border-gray-700">AI work it describes</th>
              <th className="p-3 text-left border border-gray-700">A detail it states</th>
            </tr>
          </thead>
          <tbody>
            {FIRMS.map((a) => (
              <tr key={a.name} className={a.name === 'FactoryJet' ? 'bg-orange-50' : 'odd:bg-white even:bg-gray-50'}>
                <td className="p-3 border border-gray-200 font-semibold align-top">{a.name}</td>
                <td className="p-3 border border-gray-200 align-top">{a.work}</td>
                <td className="p-3 border border-gray-200 align-top">{a.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">How was this list put together?</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Buyer searches first.</strong> We began with &ldquo;top ai development companies in india&rdquo;, &ldquo;best ai development company in india&rdquo; and the answers AI tools give to them.</li>
        <li><strong>A filter on the firm&rsquo;s own words.</strong> A firm stayed only if its own site lists custom AI, generative AI or machine learning work.</li>
        <li><strong>Visible text only.</strong> Each phrase quoted or paraphrased below is text shown on the page linked under that profile.</li>
        <li><strong>Cities as stated.</strong> A city appears only where the firm names it on a page we cite.</li>
        <li><strong>No scores and no prices.</strong> We report what firms say about themselves, and give no ratings or project prices for any firm but our own.</li>
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
              <p className="mb-3"><strong>A detail it states:</strong> {a.detail}.</p>
              <p className="text-sm text-gray-600">
                Page read on 24 November 2026:{' '}
                <a href={a.source} className="text-[#B23E13] underline" rel="noopener" target={a.source.startsWith('https://factoryjet.com') ? undefined : '_blank'}>
                  {a.source.replace('https://', '')}
                </a>
              </p>
            </section>
          ))}
        </div>
      ))}

      <h2 className="text-2xl font-bold mt-10 mb-4">What should you ask every AI development company?</h2>
      <p className="mb-4">
        Bring these seven to every first call, and ask for the replies in an email afterwards.
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
        <li>Fractal Analytics: <a href="https://www.fractal.ai/about-us/" className="text-[#B23E13] underline" rel="noopener" target="_blank">www.fractal.ai/about-us/</a></li>
        <li>Quantiphi: <a href="https://quantiphi.com/generative-ai/" className="text-[#B23E13] underline" rel="noopener" target="_blank">quantiphi.com/generative-ai/</a></li>
        <li>Tiger Analytics: <a href="https://www.tigeranalytics.com/" className="text-[#B23E13] underline" rel="noopener" target="_blank">www.tigeranalytics.com/</a></li>
        <li>Happiest Minds: <a href="https://www.happiestminds.com/about-us/" className="text-[#B23E13] underline" rel="noopener" target="_blank">www.happiestminds.com/about-us/</a></li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">How far should you rely on this list?</h2>
      <p className="mb-4">
        It reports what each firm says about itself on a single day. For the quality of any firm&rsquo;s work, use references you can phone and a trial on your own records. Clutch and GoodFirms profiles are another input. Review figures appear here only for FactoryJet: 5.0 on <a href="https://clutch.co/profile/factoryjet-private" className="text-[#B23E13] underline" rel="noopener" target="_blank">Clutch</a> from 4 reviews and 5.0 on GoodFirms from 5 reviews.
      </p>
      <p className="mb-6">
        Send a shortlist and the job to FactoryJet through <a href="/ai-development" className="text-[#B23E13] underline">our AI development page</a>, and we will say whether custom AI is the right fit and which kind of firm here to ring first, even when that firm is not us.
      </p>
    </>
  ),
};

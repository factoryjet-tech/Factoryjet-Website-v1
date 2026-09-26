import type { Metadata } from 'next';
import { Fragment } from 'react';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import AuFaq from '../components/AuFaq';
import VisualSlot from '../components/VisualSlot';
import '@/components/v2/AiAgentDevelopmentSections.css';
import '../au-page.css';
import './page.css';

/* /au/ai-seo: AI SEO and generative engine optimisation (GEO) for Australian
   businesses. Built 2026-09-25 from brief_au_ai_seo.json and the AU market
   pass (pipeline/research/data/market-au-2026-09-24/: analysis.json,
   llm_calls.json). Classic SEO terms belong to /au/seo; this page links there
   instead of targeting them. */

const CANONICAL = 'https://factoryjet.com/au/ai-seo';
const UPDATED = '2026-09-25';
const TITLE = 'AI SEO Agency Australia | GEO & AEO Services | FactoryJet';
const DESCRIPTION =
  'AI SEO agency in Australia. Generative engine optimisation (GEO) and AEO to get you named in ChatGPT, Perplexity and AI Overviews. Free AI visibility check.';
const H1 = 'AI SEO Agency Australia: Get Named When Buyers Ask ChatGPT';

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'AI SEO', url: CANONICAL },
];

/* ─── External sources, each fetch-verified 2026-09-25 (HTTP 200, claim
       confirmed in the fetched body) ──────────────────────────────────── */
// Google Search Central: "There are no additional requirements to appear in AI
// Overviews or AI Mode, nor other special optimizations necessary."
const SRC_GOOGLE = 'https://developers.google.com/search/docs/appearance/ai-features';
// OpenAI: OAI-SearchBot surfaces sites in ChatGPT search; sites opted out of it
// "will not be shown in ChatGPT search answers". GPTBot is the training crawler.
const SRC_OPENAI = 'https://platform.openai.com/docs/bots';
// Anthropic: Claude-SearchBot improves search result quality; disabling it
// prevents indexing for search and may reduce visibility.
const SRC_ANTHROPIC =
  'https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler';
// Perplexity: PerplexityBot surfaces and links websites in Perplexity results;
// recommends allowing it in robots.txt to appear.
const SRC_PERPLEXITY = 'https://docs.perplexity.ai/guides/bots';
// Aggarwal et al., "GEO: Generative Engine Optimization", arXiv:2311.09735
// (KDD 2024): strategies can boost visibility "by up to 40%"; efficacy varies
// across domains.
const SRC_GEO_PAPER = 'https://arxiv.org/abs/2311.09735';
// ACCC: "It's against the law for a business to create fake or misleading
// reviews or to arrange for others to do so." (fetched via WebFetch; the site
// blocks plain curl)
const SRC_ACCC = 'https://www.accc.gov.au/business/advertising-and-promotions/online-product-and-service-reviews';

/* ─── Our own measurement (DataForSEO, Australia, 24–25 September 2026).
       Source files: analysis.json (aio_rate, llm.top_cited_domains) and
       llm_calls.json (68 answers: 17 buyer questions x ChatGPT, Claude,
       Gemini, Perplexity). Gemini hides its sources behind redirect links,
       so source counts use the 51 answers from the other three. ──────── */
const CITED_SOURCES: { name: string; kind: string; n: number }[] = [
  { name: 'Clutch', kind: 'Agency directory and reviews', n: 20 },
  { name: 'GoodFirms', kind: 'Agency directory and reviews', n: 9 },
  { name: 'DesignRush', kind: 'Agency directory', n: 9 },
  { name: 'Semrush agency directory', kind: 'Agency directory', n: 7 },
  { name: 'Sortlist', kind: 'Agency directory', n: 6 },
  { name: 'Agency “top 10” blog lists', kind: 'Listicles on agency and review sites', n: 26 },
];

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics', label: 'AI SEO and GEO basics' },
  { key: 'future', label: 'Is SEO dead?' },
  { key: 'how', label: 'How it works' },
  { key: 'choosing', label: 'Choosing an agency & cost' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string; links?: { href: string; label: string }[] }[] = [
  // ── Basics ──
  { category: 'basics', question: 'What is AI SEO?',
    answer: 'AI SEO is the work of getting your business found in Google and named in the answers AI assistants give. That covers ChatGPT, Claude, Gemini, Perplexity and Google AI Overviews. It keeps the classic parts of SEO, such as a fast site, clear pages and good links, and adds work aimed at being quoted: plain answers, structured data, and a consistent story about your business across the web.' },
  { category: 'basics', question: 'What is an AI SEO agency?',
    answer: 'An AI SEO agency is a search agency that works on two scoreboards at once: your Google rankings and whether AI assistants mention you when buyers ask for a recommendation. A good one measures both before it starts, shows you the exact questions it tested, and reports on both every month. A weak one relabels old SEO work as AI SEO and reports nothing new.' },
  { category: 'basics', question: 'What is generative engine optimisation (GEO)?',
    answer: 'Generative engine optimisation, or GEO, is the practice of making your business easier for AI assistants to find, understand and mention in the answers they write. The term comes from a 2023 research paper by Princeton and Georgia Tech researchers, among others. You will also see it spelt “generative engine optimization”. It is the same thing. In Australia the two spellings get similar search volume.' },
  { category: 'basics', question: 'What is answer engine optimisation (AEO)?',
    answer: 'Answer engine optimisation, or AEO, is about the shape of your pages. It means stating the answer to a buyer’s question plainly near the top, using question-style headings, and adding structured data so an engine can lift a clean answer. AEO makes your page quotable. GEO is broader and includes your reputation on other websites. In practice we do both together.' },
  { category: 'basics', question: 'What is the difference between SEO and GEO?',
    answer: 'SEO aims to rank your page in Google’s list of results. GEO aims to get your business named inside an AI-written answer. They share most of the groundwork: a site that crawlers can read, clear pages, and a trustworthy reputation. The difference is the finish line. SEO counts positions and clicks. GEO counts mentions and citations in answers, which you can only see by asking the assistants directly.' },
  { category: 'basics', question: 'What is AI SEO called now?',
    answer: 'It goes by several names, which is confusing for buyers. You will see AI SEO, generative engine optimisation (GEO), answer engine optimisation (AEO), AI search optimisation, LLM SEO and ChatGPT SEO. They overlap heavily. What matters is not the label but whether the agency measures your visibility in real AI answers, and whether it keeps your Google rankings healthy at the same time.' },
  { category: 'basics', question: 'What is a GEO agency?',
    answer: 'A GEO agency helps businesses get mentioned in answers from ChatGPT, Gemini, Claude, Perplexity and Google AI Overviews. Some are specialists that only do GEO. Most are SEO agencies that added it. We think splitting them rarely makes sense, because AI assistants lean on the same things classic SEO builds. Ask any GEO agency to show your starting position before you sign.' },
  { category: 'basics', question: 'What does an AI visibility audit include?',
    answer: 'An AI visibility audit checks how AI assistants talk about your business today. We run the questions your buyers ask across ChatGPT, Claude, Gemini, Perplexity and Google, record whether you are named, which competitors are named instead, and which websites the answers cite. We also check whether AI crawlers can read your site. You get the baseline every later report is compared against.' },

  { category: 'basics', question: 'What does AI visibility mean?',
    answer: 'AI visibility is how often, and how accurately, AI assistants mention your business when people ask about what you sell. It covers three things: whether you are named at all, whether the details they give are correct, and whether they link to your site as a source. It is the AI version of search rankings, except there is no single position to check, because answers vary by assistant, question and day.' },
  { category: 'basics', question: 'What is the difference between a geo audit and a SEO audit?',
    answer: 'An SEO audit checks whether Google can crawl, index and rank your pages: technical faults, page structure, speed and links. A GEO audit checks whether AI assistants name and cite you: it runs your buyers’ real questions through ChatGPT, Claude, Gemini, Perplexity and Google AI Overviews, records who gets named and which sources are quoted, and checks that AI crawlers can read your site. Fix the SEO faults first.',
    links: [{ href: '/au/seo', label: 'SEO audits in Australia' }] },

  // ── Is SEO dead? ──
  { category: 'future', question: 'Is SEO dead because of ChatGPT?',
    answer: 'No. AI assistants still search the web to write their answers, and Google says the same SEO best practices apply to its AI Overviews, with no special extra requirements. What has changed is where buyers read the result. More of them see an AI summary before they see a link, so being named in that summary now matters alongside ranking below it.' },
  { category: 'future', question: 'Will AI replace SEO?',
    answer: 'AI is replacing some clicks, not the work. Someone still has to make your business easy for machines to read, publish pages that answer real questions, and earn mentions on sites that AI assistants trust. That is SEO work, aimed at a new place. The agencies at risk are the ones selling rankings reports for searches that now end in an AI answer.' },
  { category: 'future', question: 'Is SEO still worth it in 2026?',
    answer: 'Yes, for most Australian businesses. In our September 2026 check of 154 Australian buyer searches, Google showed an AI Overview on 68% of them, and those overviews mostly cited pages that already ranked well. So ranking is still the entry ticket. The change is that you should now measure AI mentions too, not only positions and traffic.' },
  { category: 'future', question: 'Can ChatGPT do SEO for me?',
    answer: 'ChatGPT can help draft content, suggest page titles and explain technical issues. It cannot make other websites mention you, fix your site’s crawling problems, or decide which of your services deserve a page. It also cannot measure how often it names you across many questions. Use it as a helper. The judgment, the technical work and the reputation building still need people.' },
  { category: 'future', question: 'Can ChatGPT do an SEO audit?',
    answer: 'It can give a rough checklist if you paste in a page, but it cannot crawl your whole site, see how Google indexes it, or compare you against the competitors ranking for your searches. A real audit uses crawl data, search data and live results. For the AI side, an audit also needs repeated tests across several assistants, because one answer on one day proves very little.' },
  { category: 'future', question: 'Is AI-generated content bad for SEO?',
    answer: 'Not by itself. Google judges content on whether it is helpful, not how it was written. The problem is that most AI-written content says what a thousand other pages already say, and neither Google nor AI assistants have a reason to quote it. Pages that get cited usually contain something specific: real data, first-hand experience, or a clear answer nobody else gave.' },

  // ── How it works ──
  { category: 'how', question: 'How do AI assistants decide which businesses to recommend?',
    answer: 'Nobody outside the AI companies knows the exact rules, and anyone who claims to is guessing. What we can observe is this: the assistants search the web when you ask for a recommendation, and they lean heavily on agency directories, review sites and “best of” lists. In our tests, 35 of 51 Australian answers with visible sources cited a directory or a listicle.' },
  { category: 'how', question: 'How do I get my business mentioned by ChatGPT?',
    answer: 'Start by making sure ChatGPT can read your site at all: OpenAI says sites that block its OAI-SearchBot crawler will not appear in ChatGPT search answers. Then make your pages answer buyer questions plainly, keep your business details consistent everywhere, and get listed accurately on the directories and review sites ChatGPT cites for your category. Measure before and after so you know what moved.' },
  { category: 'how', question: 'How do I show up in Google AI Overviews?',
    answer: 'Google says there are no extra requirements for AI Overviews beyond normal SEO best practice. In practice that means ranking well for the question, answering it clearly near the top of the page, and backing the answer with facts. The overviews we checked for AI SEO searches in Australia mostly cited agency pages that already ranked on page one.' },
  { category: 'how', question: 'Why does Clutch matter so much for AI answers?',
    answer: 'Because the assistants keep citing it. In our September 2026 tests of Australian buyer questions, Clutch was the most cited source, appearing in 20 answers, ahead of GoodFirms and DesignRush with nine each. If an assistant reads a directory to build its shortlist, a complete, accurate, well-reviewed profile there is part of your visibility, whether you like directories or not.' },
  { category: 'how', question: 'Should my website block AI crawlers?',
    answer: 'Usually not the ones that power AI search. OpenAI, Anthropic and Perplexity each run separate crawlers for search and for model training. Blocking the search crawlers, such as OAI-SearchBot, Claude-SearchBot and PerplexityBot, can remove you from their answers. Blocking training crawlers is a separate business decision. We check your robots.txt file line by line so nothing is blocked by accident.' },
  { category: 'how', question: 'Does schema markup help with AI search?',
    answer: 'It helps, though it is not magic. Schema is structured data that tells machines what a page is about: a service, a FAQ, a product, an organisation. It removes guesswork for Google and makes your facts easier to lift. We add it in the page’s HTML so crawlers see it without running JavaScript, and we make sure it matches what visitors actually see.' },
  { category: 'how', question: 'What is llms.txt and do I need one?',
    answer: 'llms.txt is a plain text file at the root of your site that lists your key pages with a one-line description of each, written for AI tools. It is cheap to add and harmless. There is no public proof yet that the major assistants rely on it, so we treat it as a small extra, not a strategy. Clear pages and a readable site matter far more.' },
  { category: 'how', question: 'What if AI assistants say something wrong about my business?',
    answer: 'It happens, often because old or inconsistent information is floating around the web. We find where the wrong detail comes from: an old directory listing, an out-of-date page on your own site, or a third-party article. Then we correct what we can control and ask others to update theirs. We re-test the same questions afterwards to confirm the answers have changed.' },
  { category: 'how', question: 'How long does AI SEO take to work?',
    answer: 'Technical fixes, such as unblocking crawlers and adding structured data, can change what AI tools can read within weeks. Being named more often usually takes a few months, because it depends on new content being indexed and on other sites mentioning you. We agree a set of test questions at the start and report on the same set every month, so progress is visible.' },

  { category: 'how', question: 'How to measure your AI visibility?',
    answer: 'Write down 20 to 50 questions your buyers really ask, such as “best Shopify agency in Melbourne”. Run each one several times in ChatGPT, Claude, Gemini, Perplexity and Google, because answers vary. Record whether you are named, where, which competitors appear and which websites are cited. Repeat the same set each month. Our free AI visibility checker runs a first scan across the main assistants for you.',
    links: [{ href: '/ai-visibility-checker', label: 'Free AI visibility checker' }] },

  // ── Choosing an agency & cost ──
  { category: 'choosing', question: 'What are some good AI SEO agencies in Australia?',
    answer: 'Well-known names include StudioHawk, Impressive Digital, Prosperity Media, Luminary, Click Click Media, Firewire, 23 Digital and Pivotal Agency, and we are one of the options too. We list each with a neutral note further up this page. Interestingly, when we asked four AI assistants the same question, they named different agencies, so talk to a few and ask each for evidence.' },
  { category: 'choosing', question: 'How much does AI SEO cost in Australia?',
    answer: 'It depends on scope, not a price list. The main drivers are how many buyer questions and services you want to cover, how much content needs writing or fixing, the state of your site’s technical setup, how many directory and review profiles need work, and whether you want a one-off audit or ongoing monthly work. We scope after a free first call and quote in writing. Our SEO cost guide shows how Australian providers price AI SEO today.',
    links: [
      { href: '/blog/seo-cost-australia-2026#ai-seo-cost', label: 'AI SEO cost in Australia' },
      { href: '/blog/ai-cost-australia-2026#ai-seo-cost', label: 'AI cost guide' },
    ] },
  { category: 'choosing', question: 'What is the best GEO agency?',
    answer: 'There is no best GEO agency in general, only the best fit for your market. The test is evidence: ask each agency to run your buyers’ questions across several AI assistants before you sign, show you the starting results, and report on the same questions every month. Be wary of guaranteed ChatGPT placement. An agency that can also fix your website and content will usually move faster than one that only advises.' },
  { category: 'choosing', question: 'Can an agency guarantee my business will appear in ChatGPT?',
    answer: 'No, and you should be wary of any agency that does. AI answers change between assistants, between days and even between two people asking the same thing. Nobody controls them. An honest agency promises measurable work and transparent testing: the same questions, run the same way, reported every month, so you can see whether mentions are rising.' },
  { category: 'choosing', question: 'Do I need a separate GEO agency as well as my SEO agency?',
    answer: 'Usually not. GEO leans on the same content, technical setup and reputation that SEO builds, so two suppliers often end up duplicating audits and briefing each other. One team running both keeps the work pointing in the same direction. If your current SEO agency does not measure AI visibility, ask them to start before you hire a second supplier.' },
  { category: 'choosing', question: 'Will AI SEO work for a small business?',
    answer: 'Often very well. AI assistants reward clear, specific answers, and a focused small business can be far more precise about what it does and where than a large generalist competitor. A plumber in one Brisbane suburb or a specialist homewares store has a narrower set of questions to win. We pick the questions where you can realistically be the best answer and start there.' },
  { category: 'choosing', question: 'Do you work with businesses across Australia?',
    answer: 'Yes. We work with businesses in Sydney, Melbourne, Brisbane, Perth, Adelaide, Canberra and regional Australia. AI SEO work is done remotely with video reviews and shared reports, so where you are makes no difference to the work. The test questions we run are phrased the way Australian buyers ask, with Australian spelling and places, because that changes the answers.' },
  { category: 'choosing', question: 'How do we get started?',
    answer: 'Run the free AI visibility checker on our site for a quick snapshot, or send your name and work email through the form on this page. The founder replies within 24 hours to book a short call. We look at where you stand in Google and in AI answers today, and tell you honestly whether AI SEO is worth doing for your business right now.' },
];

/* ─── Named Australian AI SEO / GEO agencies (open self-disclosure,
       ItemList). Each note is based on the company’s own website, fetched
       2026-09-25. Names drawn from live AU results for "ai seo agency" and
       AI assistant answers in llm_calls.json. ──────────────────────────── */
const AU_AGENCIES: { name: string; note: string }[] = [
  { name: 'FactoryJet', note: 'That is us. We measure your AI visibility before we sell anything, run classic SEO and GEO as one programme, and report on the same buyer questions every month. Founder involved on every engagement. We also build websites, stores and AI agents, so technical fixes do not wait on a second supplier.' },
  { name: 'StudioHawk', note: 'Describes itself as a specialist SEO and AI search agency in Australia, with a dedicated AI SEO service and SEO teams serving cities across Australia. It appeared in Google AI Overviews for most of the AI SEO searches we checked.' },
  { name: 'Impressive Digital', note: 'A Melbourne digital marketing agency and certified B Corp offering AI SEO and ChatGPT GEO alongside paid media, SEO and conversion work. Better suited to businesses that want a broad performance marketing partner.' },
  { name: 'Prosperity Media', note: 'A Sydney-based SEO, GEO, content and digital PR agency. Its site lists a Best Large SEO Agency in APAC 2025 award and a strong digital PR practice.' },
  { name: 'Luminary', note: 'A digital agency that offers GEO audits, strategy, implementation and training alongside web design and development. It works with mid-size and enterprise organisations, including well-known Australian not-for-profits.' },
  { name: 'Click Click Media', note: 'An Australian SEO agency running organic search since 2008 that frames AI SEO as a layer on top of existing SEO work. It offers a free AI visibility audit and says it works month to month.' },
  { name: 'Firewire', note: 'An Australian search marketing agency that runs SEO, Google Ads and GEO together and measures results against revenue. It also offers ChatGPT Ads management.' },
  { name: '23 Digital', note: 'A Melbourne agency that offers AI SEO alongside web design, ecommerce builds and ERP integration. A fit for businesses that want AI search work and platform work in one place.' },
  { name: 'Pivotal Agency', note: 'A Gold Coast and Brisbane full-service digital agency with over 20 years in business, offering AI SEO next to web development, apps, Google Ads and AI automation.' },
];

/* ─── JSON-LD. Organization referenced by @id only (never defined here). ── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'AI SEO and Generative Engine Optimisation, Australia',
      serviceType: 'AI SEO, generative engine optimisation (GEO), answer engine optimisation (AEO) and AI visibility audits',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'Australia' },
      url: CANONICAL,
      description:
        'AI SEO for Australian businesses: an AI visibility audit across ChatGPT, Claude, Gemini, Perplexity and Google AI Overviews, then technical, content, entity and directory work so AI assistants can find and name you, while classic Google rankings are protected.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        item: c.url,
      })),
    },
    {
      '@type': 'WebPage',
      '@id': CANONICAL,
      url: CANONICAL,
      name: TITLE,
      headline: H1,
      description: DESCRIPTION,
      inLanguage: 'en-AU',
      datePublished: UPDATED,
      dateModified: UPDATED,
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['[data-speakable="true"]'] },
      primaryImageOfPage: { '@type': 'ImageObject', url: 'https://factoryjet.com/images/au/ai-seo/ai-seo-og.webp' },
      author: {
        '@type': 'Person',
        name: 'Bhavesh Barot',
        jobTitle: 'Founder & CEO',
        url: 'https://factoryjet.com/about',
        sameAs: [
          'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
          'https://github.com/factoryjet-tech',
        ],
      },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
    },
    {
      '@type': 'ItemList',
      '@id': `${CANONICAL}#agencies`,
      name: 'Australian AI SEO and GEO agencies',
      itemListElement: AU_AGENCIES.map((a, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: a.name,
      })),
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: FAQ_ITEMS.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL, languages: { 'en-AU': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: TITLE,
    description:
      'Generative engine optimisation for Australian businesses. We measure how ChatGPT, Claude, Gemini, Perplexity and Google AI Overviews talk about you, then fix it, without losing your Google rankings.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: '/images/au/ai-seo/ai-seo-og.webp', width: 1200, height: 630, alt: 'AI SEO in Australia: a marketing manager in Brisbane comparing an AI assistant answer on her phone with search results on her laptop' }],
  },
  robots: { index: true, follow: true },
};

const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

/* Visual slot page key (route without /au/). */
const PAGE_KEY = 'ai-seo';

/* H1 split for the Family A hero emphasis. Same string as H1 (schema headline); only the
   short benefit phrase is wrapped in .hero-emphasis. */
const H1_EMPHASIS = 'Get Named';
const H1_AT = H1.indexOf(H1_EMPHASIS);
const H1_LEAD = H1.slice(0, H1_AT).trimEnd();
const H1_REST = H1.slice(H1_AT + H1_EMPHASIS.length);

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;

/* Hero spec-panel icons (AI answers tested, AI Overviews seen, FactoryJet named). */
const HERO_ICONS = [
  'M4 5h16v11H9l-5 4V5Zm4 5h8M8 13h5',
  'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm9 16-4-4',
  'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-4 9h8',
] as const;

/* Seven-step process (steps open, as the copy says). */
const STEPS: { n: string; t: string; d: string }[] = [
  { n: '01', t: 'Agree the buyer questions', d: 'We write 20 to 50 questions your customers really ask, the way Australians phrase them: “best ecommerce agency in Melbourne”, “who can fix my Shopify store in Brisbane?”, “how much does an AI receptionist cost in Australia?”. You approve the list. It becomes the test we re-run every month.' },
  { n: '02', t: 'Measure where you stand', d: 'We run every question across ChatGPT, Claude, Gemini, Perplexity and Google, and record whether you are named, which competitors are named, what the answer says about you, and which websites are cited. This is your baseline. Our free AI visibility checker gives you a quick first look.' },
  { n: '03', t: 'Fix what machines cannot read', d: 'We check robots.txt so AI search crawlers are allowed, make sure key content is in the page HTML rather than hidden behind scripts, add accurate structured data, and fix speed and indexing problems. This is technical SEO with AI crawlers added to the list.' },
  { n: '04', t: 'Make your business facts consistent', d: 'Your name, services, locations and details should say the same thing on your site, your Google Business Profile, Clutch, GoodFirms, LinkedIn and every directory the assistants cite for your category. Mixed facts confuse machines. We clean them up and complete what is missing.' },
  { n: '05', t: 'Write pages that answer questions', d: 'For each important question, a page that answers it plainly near the top, then backs it up with specifics: your process, real examples, honest limits and sources. Question-style headings and FAQs make the answer easy to lift. No filler written to hit a word count.' },
  { n: '06', t: 'Earn mentions on sites AI reads', d: 'Directory profiles with genuine reviews, inclusion in honest “best of” lists where you deserve it, industry associations, local media and partner pages. We never buy fake reviews or write them for you. Under Australian Consumer Law that is illegal, and it would put your reputation at risk.' },
  { n: '07', t: 'Re-test, report and adjust', d: 'Every month we re-run the same questions and show you what changed: mentions, accuracy, competitors, citations, alongside Google rankings, traffic and enquiries. When something is not working, we say so and change the plan.' },
];

const SIBLINGS: { href: string; t: string; d: string; go: string }[] = [
  { href: '/au/seo', t: 'SEO services Australia', d: 'Classic rankings, technical SEO and local search. The foundation that AI Overviews draw from.', go: 'Explore SEO →' },
  { href: '/au/ai-agents', t: 'AI agent development', d: 'Custom AI agents that answer enquiries, handle orders and connect to Xero, MYOB and your CRM.', go: 'Explore AI agents →' },
  { href: '/au/ecommerce-development', t: 'Ecommerce development', d: 'Stores built with clean product data and structured data, so both Google and AI assistants can read them.', go: 'Explore ecommerce →' },
  { href: '/au/ai-consulting', t: 'AI consulting', d: 'Not sure where AI fits in your business beyond search? Start with a focused AI readiness assessment.', go: 'Explore AI consulting →' },
  { href: '/au/ai-development', t: 'AI development', d: 'AI built into your existing systems, from document handling to customer service tools.', go: 'Explore AI development →' },
  { href: '/au', t: 'FactoryJet Australia', d: 'Everything we do for Australian businesses: ecommerce, AI agents, websites and AI search.', go: 'Visit the Australia hub →' },
];

export default function AiSeoAUPage() {
  return (
    <>
      <script id="ld-au-ai-seo" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SiteHeader locale="au" logoHref="/au" />
      <div className="aiAgentPage auPage">
      <nav className="crumbs" aria-label="Breadcrumb">
        <div className="wrap">
          {crumbs.map((item, index) => (
            <Fragment key={item.url}>
              {index > 0 && ' / '}
              {index === crumbs.length - 1 ? <b aria-current="page">{item.name}</b> : <a href={item.url}>{item.name}</a>}
            </Fragment>
          ))}
        </div>
      </nav>
      <main id="au-content">

        {/* ═══ HERO (US web-design hub hero: copy + inline form left, spec panel right) ═══ */}
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">AI SEO Australia</div>
              <h1>{H1_LEAD} <span className="hero-emphasis">{H1_EMPHASIS}</span>{H1_REST}</h1>
              <p className="lead">
                FactoryJet is an AI SEO agency for Australian businesses that want to be named, not only found on
                Google. We use generative engine optimisation (GEO) and answer engine optimisation (AEO) to get you
                named when buyers ask ChatGPT, Claude, Gemini, Perplexity or Google AI Overviews for a recommendation,
                while keeping the Google rankings you already have. And we measure where you stand before we sell you
                anything.
              </p>
              <HeroInlineForm region="au" source="au_ai_seo_hero" submitLabel="Get my AI visibility check" />
            </div>

            <form
              className="specpanel"
              aria-label="What we measured before writing this page"
              data-visual-slot={`${PAGE_KEY}:hero`}
              data-visual-kind="diagram"
              data-visual-subject="What we measured before writing this page: 68 AI answers to Australian buyer questions, AI Overviews on 18 of 18 AI SEO searches, and FactoryJet named 0 times"
              data-visual-ratio="1:1"
              data-visual-status="filled"
            >
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>MEASURED · WHAT WE MEASURED BEFORE WRITING THIS PAGE</span>
                <span className="sys"><span>Generative Engine Optimisation</span><span>Measured Before We Sell</span></span>
              </div>
              <div className="workflow-controls">
                <label className="workflow-toggle" title="Pause or resume the animation">
                  <input type="checkbox" className="workflow-pause" aria-label="Pause animation" />
                  <svg className="pause-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path d="M5 3v10M11 3v10" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
                  <svg className="play-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path d="m5 3 8 5-8 5Z" fill="currentColor" /></svg>
                </label>
                <button type="reset" className="workflow-replay" aria-label="Replay animation" title="Replay animation">
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6a5 5 0 1 1 0 4M3 2v4h4" /></svg>
                </button>
              </div>
              <div className="specpanel-body" role="radiogroup" aria-label="Explore what we measured">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="aiseo-au-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[0]} /></svg></span>
                  <span className="idx">ChatGPT, Claude, Gemini, Perplexity</span>
                  <span className="title">AI answers to Australian buyer questions</span>
                  <span className="tag">68</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="aiseo-au-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[1]} /></svg></span>
                  <span className="idx">Google Australia, September 2026</span>
                  <span className="title">AI SEO searches with an AI Overview</span>
                  <span className="tag">18 of 18</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="aiseo-au-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[2]} /></svg></span>
                  <span className="idx">yes, we test ourselves too</span>
                  <span className="title">Answers that named FactoryJet</span>
                  <span className="tag">0</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · AI answers vary from run to run. A single screenshot proves little.</div>
            </form>
          </div>
        </section>

        {/* ═══ LEDGER (our measurement, sourced) ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: '68%', t: 'of 154 Australian buyer searches showed a Google AI Overview', s: 'FactoryJet test, Sep 2026' },
              { v: '20', t: 'AI answers cited Clutch, the single most cited source for Australian buyers', s: 'FactoryJet test, Sep 2026' },
              { v: '35 of 51', t: 'answers with visible sources cited an agency directory or a “best of” list', s: 'FactoryJet test, Sep 2026' },
              { v: '25+', t: 'agencies named by four assistants asked the same AI SEO question, and none by all four', s: 'FactoryJet test, Sep 2026' },
            ].map((r) => (
              <div className="ledgercell" key={r.t}>
                <div className="k">{r.s}</div>
                <div className="v">
                  <strong className={/\d/.test(r.v) ? 'ledger-number' : 'ledger-word'}>{r.v}</strong>
                  {r.t}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="wrap byline">
          <div className="av">BB</div>
          <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
          <div className="upd">Last updated<br />25 September 2026</div>
        </div>

        {/* ═══ ANSWER-FIRST DEFINITION (GEO) → Family A facts ═══ */}
        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <h2 data-speakable="true">What does an AI SEO agency do for an Australian business?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p data-speakable="true">
                    <span className="stat">An AI SEO agency gets your business named in answers from ChatGPT, Gemini, Claude, Perplexity and
                    Google AI Overviews, as well as ranked on Google.</span> It tests the questions your buyers ask, records
                    who gets named and which sources are cited, then fixes your site, content and directory listings
                    so AI assistants can find you and trust what they read.
                  </p>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <div>
                    <div className="factlabel">Three terms, in plain English</div>
                    <p>
                      <b>Generative engine optimisation (GEO)</b> means making your business easy for AI assistants to
                      mention. <b>Answer engine optimisation (AEO)</b> means shaping your pages so an engine can lift a
                      clear answer from them. <b>AI visibility</b> is simply how often, and how accurately, AI answers
                      mention you when buyers ask about what you sell.
                    </p>
                  </div>
                </div>
                <div className="fact">
                  <div className="sec">§03</div>
                  <p>
                    Here is why this matters now. Search interest in AI SEO and GEO in Australia has doubled in a year,
                    and when we checked 154 Australian buyer searches in September 2026, Google showed an AI Overview on
                    68% of them. Buyers increasingly read a written answer before they see a single link. If that answer
                    names three of your competitors and not you, you lose the job before you know it existed.
                  </p>
                </div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts" kind="photo" ratio="3:2" className="factphoto"
                subject="A marketing manager comparing an AI assistant answer on her phone with search results on her laptop, a FactoryJet specialist beside her">
                <img src="/images/au/ai-seo/ai-seo-hero.webp" width={1400} height={933} loading="lazy" decoding="async" alt="Over-the-shoulder view of an Australian marketing manager in a Brisbane office comparing an AI assistant's answer on her phone with a search results page on her laptop, with a FactoryJet AI SEO specialist beside her" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ HOW AI ASSISTANTS CHOOSE WHO TO NAME → facts + "observed" panel ═══ */}
        <section className="section facts" id="how-ai-chooses">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">What we know, and what nobody knows</div>
              <h2>How AI assistants choose which businesses to name</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Let us start with the honest part. OpenAI, Anthropic, Google and Perplexity do not publish the
                  rules their assistants use to pick one business over another. Any agency that tells you it
                  knows the exact formula is guessing, and some of the confident advice online contradicts itself.
                  So we stick to what can be observed and tested.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  <b>They look things up.</b> When you ask an AI assistant for a recommendation, it usually
                  searches the web first, reads a handful of pages and then writes its answer from them. Each
                  company runs its own search crawler for this: OpenAI’s is called OAI-SearchBot, Anthropic’s is
                  Claude-SearchBot and Perplexity’s is PerplexityBot. OpenAI states plainly that sites blocking
                  OAI-SearchBot will not be shown in ChatGPT search answers. If your site blocks these crawlers,
                  you have taken yourself out of the running.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  <b>They lean on lists.</b> For “who should I hire” questions, the pages they read are very often
                  agency directories and “top 10” blog lists, not the agencies’ own websites. That pattern shows
                  up clearly in our Australian data further down.
                </p></div>
                <div className="fact"><div className="sec">§04</div><p>
                  <b>They disagree with each other.</b> We asked ChatGPT, Claude, Gemini and Perplexity the same
                  question: which Australian agencies help businesses show up in ChatGPT and Google AI Overviews?
                  Between them they named more than 25 agencies. No agency appeared in all four answers, and
                  ChatGPT’s shortlist shared no names with the other three. Visibility in one assistant tells you
                  little about the others, which is why we test all of them.
                </p></div>
                <div className="fact"><div className="sec">§05</div><div>
                  <p>
                    <b>Google keeps it simple.</b> For AI Overviews, Google’s own documentation says there are no
                    additional requirements and no special optimisations needed beyond normal SEO best practice.
                    That is useful: it means your classic SEO foundations, covered on our{' '}
                    <a href="/au/seo">SEO services Australia</a> page, are also your entry ticket to
                    AI Overviews.
                  </p>
                  <p className="au-note">
                    Sources: <a href={SRC_OPENAI} {...extLink}>OpenAI, overview of OpenAI crawlers</a>;{' '}
                    <a href={SRC_ANTHROPIC} {...extLink}>Anthropic, web crawling and site owners</a>;{' '}
                    <a href={SRC_PERPLEXITY} {...extLink}>Perplexity crawlers</a>;{' '}
                    <a href={SRC_GOOGLE} {...extLink}>Google Search Central, AI features and your website</a>.
                  </p>
                </div></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">Observed, not assumed</div>
                <ul className="trigrows">
                  <li><span className="m">They search the web live</span><span className="n">blocked crawlers mean no mention</span><span className="t">Known</span></li>
                  <li><span className="m">They cite directories and lists</span><span className="n">35 of 51 Australian answers</span><span className="t">Measured</span></li>
                  <li><span className="m">They name different businesses</span><span className="n">no agency named by all four</span><span className="t">Measured</span></li>
                  <li><span className="m">AI Overviews follow SEO basics</span><span className="n">Google’s own documentation</span><span className="t">Stated</span></li>
                  <li><span className="m">The exact ranking formula</span><span className="n">not published by anyone</span><span className="t">Unknown</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ REAL DATA: WHICH SOURCES AI CITES → split (bars + prose) + ruled rows ═══ */}
        <section className="section platforms" id="cited-sources">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Real Australian data</div>
              <h2>Which websites AI assistants cite when Australians ask who to hire</h2>
              <p className="lead">
                In September 2026 we asked ChatGPT, Claude, Gemini and Perplexity 17 questions Australian buyers
                really ask, from “who is the best AI automation agency in Australia?” to “which SEO agencies are best
                for small businesses?”. That gave us 68 answers. Gemini hides its sources behind redirect links, so
                the counts below come from the 51 answers where we could see every source.
              </p>
            </div>
            <div className="au-split au-split-top">
              <div className="demand">
                <div className="demand-head"><span>Sources cited · 51 AI answers</span><b>FactoryJet test</b></div>
                <ul>
                  {CITED_SOURCES.map((r) => (
                    <li key={r.name} className="demand-row">
                      <div className="demand-top"><span className="demand-kw">{r.name}</span><span className="demand-v">{r.n}<small> answers</small></span></div>
                      <div className="demand-bar"><i style={{ width: `${Math.round((r.n / 51) * 100)}%` }} /></div>
                      <div className="demand-kd">{r.kind}</div>
                    </li>
                  ))}
                </ul>
                <p className="demand-src">Answers from ChatGPT, Claude and Perplexity to 17 Australian buyer questions, 24–25 September 2026</p>
              </div>
              <div>
                <p>
                  Clutch appeared in 20 answers. GoodFirms and DesignRush appeared in nine each, the Semrush agency
                  directory in seven and Sortlist in six. Separately, 26 answers cited a “best agencies” or “top 10”
                  blog list, usually published by another agency or a review site. Put together, 35 of the 51 answers
                  leaned on a directory, a list, or both.
                </p>
                <p>
                  Google’s AI Overviews behaved differently. For AI SEO searches, they mostly cited agency pages that
                  already ranked on page one, such as StudioHawk and 23 Digital. For broader searches they also cited
                  YouTube, Reddit, Upwork and Airtasker.
                </p>
                <p>
                  We are not immune to this. Across all 68 answers, FactoryJet was named zero times. We publish that
                  number because it is the same test we would run for you, and it is the honest starting point for
                  any AI visibility audit.
                </p>
              </div>
            </div>
            <h3 className="au-subhead">What this means for your business</h3>
            <div className="platlist" role="list">
              <div className="plat plat-2col" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>Your directory profiles are now marketing</h3></div><p className="plat-build">If assistants build shortlists from Clutch, GoodFirms and similar sites, an empty or out-of-date profile is a missed mention. Complete profiles with accurate services, locations and genuine reviews matter more than they used to.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>Being on the lists matters</h3></div><p className="plat-build">“Best of” lists feed a large share of answers. You cannot buy your way onto honest ones, but you can make sure the people who write them know you exist and can check your claims easily.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>Your own site still has to be readable</h3></div><p className="plat-build">Assistants check the businesses they name. A site that blocks AI crawlers, hides key facts in images, or never says plainly what you do and where makes that check harder.</p></div>
            </div>
          </div>
        </section>

        {/* ═══ COMPARISON TABLE: CLASSIC SEO VS AI SEO / GEO ═══ */}
        <section className="section comparison" id="comparison">
          <div className="wrap">
            <div className="section-head head-split">
              <div className="eyebrow">Side by side</div>
              <div>
                <h2>Classic SEO vs AI SEO and generative engine optimisation: what changes</h2>
                <p className="lead">
                  AI SEO does not replace classic SEO. It changes the scoreboard and adds new work on top. This table
                  shows where the two differ, and how we run them together.
                </p>
              </div>
            </div>
            <div className="tablewrap">
              <table>
                <thead>
                  <tr>
                    <th>What matters</th>
                    <th>Classic SEO</th>
                    <th>AI SEO / GEO</th>
                    <th className="fj">How FactoryJet runs it</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th scope="row">The goal</th><td>Rank a page in Google’s results</td><td>Be named or cited inside an AI answer</td><td className="fj">Both, on one plan</td></tr>
                  <tr><th scope="row">Where buyers see you</th><td>Google results and Maps</td><td>ChatGPT, Claude, Gemini, Perplexity, AI Overviews</td><td className="fj">All of them, tested monthly</td></tr>
                  <tr><th scope="row">What gets measured</th><td>Positions, clicks, traffic, enquiries</td><td>Mentions, citations, accuracy, competitors named</td><td className="fj">One report, both sets</td></tr>
                  <tr><th scope="row">Research starts with</th><td>Keywords and search volume</td><td>Questions buyers ask assistants</td><td className="fj">Keywords mapped to real questions</td></tr>
                  <tr><th scope="row">Crawler access</th><td>Googlebot</td><td>OAI-SearchBot, Claude-SearchBot, PerplexityBot and others</td><td className="fj">Checked line by line</td></tr>
                  <tr><th scope="row">Off-site work</th><td>Backlinks</td><td>Directory profiles, reviews, lists, consistent business facts</td><td className="fj">Links plus directory and list work</td></tr>
                  <tr><th scope="row">Content style</th><td>Topic coverage for ranking</td><td>Plain answers near the top, easy to quote</td><td className="fj">Answer first, then depth</td></tr>
                  <tr><th scope="row">Speed of feedback</th><td>Weeks to months</td><td>Varies by assistant and by day</td><td className="fj">Same questions, re-run every month</td></tr>
                  <tr><th scope="row">Guarantees</th><td>None honest</td><td>None honest</td><td className="fj">Transparent testing, no promises</td></tr>
                </tbody>
              </table>
            </div>
            <p className="tablenote">
              If most of your enquiries come from Google Maps or local searches, classic local SEO is still the
              bigger lever, and our <a href="/au/seo">SEO services for Australian businesses</a> page
              covers that in depth. If your buyers research on ChatGPT before they call, or you sell a service where
              people ask an assistant “who should I use?”, AI SEO deserves a place in the plan.
            </p>
          </div>
        </section>

        {/* ═══ PHOTOBREAK (US template visual, no AU image yet) ═══ */}
        <VisualSlot page={PAGE_KEY} slot="photobreak" kind="illustration" ratio="12:5" className="photobreak"
          subject="AI-generated model: white question cards feeding into four white answer panels, one orange card naming a business in all four" />

        {/* ═══ PROCESS (<details>) → timeline, photo beside the head ═══ */}
        <section className="section process" id="process">
          <div className="wrap">
            <div className="head-media">
              <div className="section-head">
                <div className="eyebrow">Our process</div>
                <h2>Our AI SEO process in seven steps</h2>
                <p className="lead">
                  Tap any step to see what happens and what you get. Steps one and two are the AI visibility audit.
                  Some businesses stop there, and that is a fine outcome.
                </p>
              </div>
              <VisualSlot page={PAGE_KEY} slot="process" kind="photo" ratio="3:2" captionClassName="figcap"
                subject="Two people at a meeting table sorting index cards of buyer questions into three columns"
                caption="Step one happens at a table, not in a tool. We sort buyer questions into piles by how close each one is to a sale. “What is GEO?” is research. “Best GEO agency in Sydney” is someone ready to call.">
                <img src="/images/au/ai-seo/ai-seo-workshop.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Two people at a timber meeting table in a Melbourne office sorting blank index cards of buyer questions into three columns" />
              </VisualSlot>
            </div>
            <div className="timeline timeline-4">
              {STEPS.map((s) => (
                <details key={s.n} className="tnode">
                  <summary>
                    <div className="idx">{s.n}</div>
                    <h3>{s.t}<span className="chev" aria-hidden="true">+</span></h3>
                  </summary>
                  <p>{s.d}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <div className="au-midcta">
          <MidPageCTA
            headline={'Want to know what ChatGPT says about your business?'}
            sub={'Tell us what you sell and where. On a short call with the founder we will show you how AI assistants answer your buyers’ questions today, who they name instead of you, and whether AI SEO is worth doing for you right now.'}
            label={'Get my AI visibility check'}
          />
        </div>

        {/* ═══ WHAT WE MEASURE → facts + monthly report panel ═══ */}
        <section className="section facts" id="what-we-measure">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">We measure before we sell</div>
              <h2>What we measure, and how you will see it</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Most AI SEO reports are either a vague “AI visibility score” from a tool, or nothing at all. We
                  think you should see the actual questions, the actual answers and the actual names. So that is
                  what our reports show.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  Before any engagement, we run your buyer questions and show you the results. If you want a
                  quick look on your own first, our free{' '}
                  <a href="/ai-visibility-checker">AI visibility checker</a> scans how ChatGPT,
                  Perplexity and Google AI Overviews respond for your business. It takes a couple of minutes and
                  you do not need to talk to anyone.
                </p></div>
                <div className="fact"><div className="sec">§03</div><div>
                  <p>
                    One caution we give every client: AI answers vary from run to run. A single screenshot proves
                    little. That is why we use a fixed set of questions, run them the same way every month, and look
                    at the trend rather than any one answer.
                  </p>
                  <a className="btn btn-primary fact-cta" href="/ai-visibility-checker">Run the free AI visibility checker</a>
                </div></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">Your monthly report</div>
                <ul className="trigrows">
                  <li><span className="m">Mention rate</span><span className="n">share of test questions where you are named</span><span className="t">Per assistant</span></li>
                  <li><span className="m">Accuracy</span><span className="n">is what they say about you correct?</span><span className="t">Checked</span></li>
                  <li><span className="m">Competitors named</span><span className="n">who gets the mention instead</span><span className="t">Listed</span></li>
                  <li><span className="m">Sources cited</span><span className="n">which sites the answers lean on</span><span className="t">Listed</span></li>
                  <li><span className="m">AI Overview presence</span><span className="n">shown, and are you cited in it?</span><span className="t">Tracked</span></li>
                  <li><span className="m">Google rankings and enquiries</span><span className="n">the classic scoreboard, kept</span><span className="t">Included</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ WHICH OPTION FITS YOU (<details open>) → vlog ═══ */}
        <section className="vlog" id="fit-check">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Be honest with yourself</div>
              <h2>Do you need AI SEO now, or classic SEO first?</h2>
              <p>
                Read the list that sounds most like you (tap a heading to fold it away). If you tick three or more in
                one list, that is probably where to start.
              </p>
              <VisualSlot page={PAGE_KEY} slot="proof" kind="photo" ratio="3:2"
                subject="A business owner at a café table reading a short AI assistant answer on her phone next to a Google Maps listing" />
            </div>
            <div className="ventries">
              <details open className="ventry">
                <summary><h3>AI SEO is worth doing now if...</h3><span className="chev" aria-hidden="true">+</span></summary>
                <ul className="chg-list chg-list-1col">
                  <li><span>Your buyers are business owners or managers who research suppliers before calling.</span></li>
                  <li><span>You sell a considered service or product where people ask “who should I use?”.</span></li>
                  <li><span>New customers have mentioned finding you, or a competitor, through ChatGPT.</span></li>
                  <li><span>You already rank reasonably well on Google but competitors get named in AI answers.</span></li>
                  <li><span>Your details on directories and review sites are thin, old or inconsistent.</span></li>
                  <li><span>You want one agency to handle Google and AI search together.</span></li>
                </ul>
              </details>
              <details open className="ventry">
                <summary><h3>Classic SEO should come first if...</h3><span className="chev" aria-hidden="true">+</span></summary>
                <ul className="chg-list chg-list-1col">
                  <li><span>Most of your work comes from Google Maps and “near me” searches.</span></li>
                  <li><span>Your website is slow, hard to crawl, or barely indexed.</span></li>
                  <li><span>You do not yet rank on page one for anything your buyers search.</span></li>
                  <li><span>Your Google Business Profile is incomplete or unverified.</span></li>
                  <li><span>You have fewer than a handful of genuine reviews anywhere.</span></li>
                </ul>
                <p>If this sounds like you, start with <a href="/au/seo">SEO services Australia</a>. The same foundations feed AI answers later.</p>
              </details>
            </div>
          </div>
        </section>

        {/* ═══ WHO WE HELP + TRADIE STORY → definition module (image left, copy right) ═══ */}
        <section className="definition" id="where-questions-are-asked">
          <div>
            <VisualSlot page={PAGE_KEY} slot="definition" kind="photo" ratio="3:2" className="definition-image"
              subject="A tradesman in his work van asking an AI assistant a question on his phone">
              <img src="/images/au/ai-seo/ai-seo-tradie.webp" width={1200} height={800} loading="lazy" decoding="async" alt="An Australian tradesman in his work van on a Brisbane street asking an AI assistant a question on his phone" />
            </VisualSlot>
            <p className="figcap">
              Your next customer may be asking an assistant between jobs. The answer they get is written in
              seconds, from pages and listings that already exist.
            </p>
          </div>
          <div className="definition-copy">
            <div className="eyebrow">Where the questions are asked</div>
            <h2>AI search happens in the van, the café and the boardroom</h2>
            <p>
              It is easy to picture AI search as something only tech buyers do. In practice, the question
              “who is a good electrician in Paddington who can start this week?” gets typed into a phone
              between jobs. So does “best Shopify agency in Australia for a homewares store” and “which
              accountants in Adelaide use Xero?”.
            </p>
            <p>
              Each of those is a moment where an assistant writes a short list, and the businesses on it get
              the call. Local businesses still win most of their work through Google Maps, so we never ignore
              it. But the higher the value of the job, the more research buyers do, and the more likely that
              research now includes an AI assistant.
            </p>
            <p>
              For deeper reading, our guides on{' '}
              <a href="/blog/how-to-get-chatgpt-to-recommend-your-business-2026">how to get ChatGPT to recommend your business</a>{' '}
              and{' '}
              <a href="/blog/how-to-show-up-in-google-ai-overviews-small-business">showing up in Google AI Overviews as a small business</a>{' '}
              go step by step, and our{' '}
              <a href="/blog/generative-engine-optimization-guide">generative engine optimisation guide</a>{' '}
              covers the research behind GEO.
            </p>
          </div>
        </section>

        {/* ═══ ECOMMERCE + SIBLING SERVICES → facts + photo + directory tiles ═══ */}
        <section className="section facts" id="built-by-engineers">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Built by engineers</div>
              <h2>AI SEO works better when the same team can fix the site</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  A lot of AI SEO advice ends with a list of changes your developer “should make”. Then nothing
                  happens for three months. FactoryJet is an engineering company first. We build websites,
                  ecommerce stores and AI agents, so when the audit says your product pages hide their details
                  in scripts, or your store blocks a crawler, we fix it ourselves.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  That matters most for online stores. Shoppers now ask assistants which Australian brand makes the
                  best linen sheets or where to buy a specific part with fast shipping. Clear product data,
                  accurate stock and delivery details, and consistent reviews give an assistant something solid to
                  repeat. Our <a href="/au/ecommerce-development">ecommerce development in Australia</a>{' '}
                  and <a href="/au/shopify-development">Shopify development</a> teams build stores
                  that are readable by machines from day one. For stores, this sits inside our{' '}
                  <a href="/au/ecommerce-seo">ecommerce SEO services</a>, alongside collection pages and
                  Google Shopping.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  Health practices have extra rules to follow. See{' '}
                  <a href="/au/dental-website-design#ahpra">how the Ahpra advertising guidelines shape a dental website</a>.
                </p></div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-2" kind="photo" ratio="3:2" className="factphoto" captionClassName="figcap"
                subject="A web engineer checking a product page on his laptop beside the owner of a linen brand holding a folded sheet"
                caption="Product facts an assistant can repeat start on the product page: clear names, sizes, materials, stock and delivery details, written as text and marked up with structured data.">
                <img src="/images/au/ai-seo/ai-seo-warehouse.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A FactoryJet web engineer checking a product page on his laptop while the owner of a Melbourne linen brand stands beside him holding a folded sheet" />
              </VisualSlot>
            </div>
            <ul className="agentdir-grid span-all">
              {SIBLINGS.map((s) => (
                <li key={s.href}>
                  <a href={s.href}>
                    <span className="agentdir-t">{s.t}</span>
                    <span className="agentdir-l">{s.d}</span>
                    <span className="agentdir-more">{s.go}</span>
                    <span className="agentdir-go" aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ HONEST LIMITS + ACCC → facts + photo + three ruled rows ═══ */}
        <section className="section facts" id="what-we-will-not-do">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">What we will not do</div>
              <h2>Shortcuts that can hurt your business, and why we avoid them</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Because directories and reviews feed AI answers, some agencies now sell shortcuts: batches of
                  reviews, planted comments on forums, or pages stuffed with the same phrases. We stay away from all
                  of it, for two reasons.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  First, it is often illegal. The ACCC is clear that it is against the law for a business to create
                  fake or misleading reviews, or to arrange for others to do so. Offering incentives for positive
                  reviews also risks breaching the Australian Consumer Law. An AI assistant repeating a fake review
                  does not make it any less fake.
                </p></div>
                <div className="fact"><div className="sec">§03</div><div>
                  <p>
                    Second, it tends not to work. The research paper that named generative engine optimisation found
                    that some methods, such as adding sources and statistics, could lift visibility in AI answers by up
                    to 40% in its tests, while old-style keyword stuffing performed poorly. The authors also found the
                    best method changes from topic to topic. Real substance beats tricks.
                  </p>
                  <p className="au-note">
                    Sources: <a href={SRC_ACCC} {...extLink}>ACCC, online product and service reviews</a>;{' '}
                    <a href={SRC_GEO_PAPER} {...extLink}>Aggarwal et al., GEO: Generative Engine Optimization (arXiv:2311.09735)</a>.
                  </p>
                </div></div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-3" kind="photo" ratio="3:2" className="factphoto" captionClassName="figcap"
                subject="The owner of a small bakery chatting with a regular customer as she hands him his bread across the counter"
                caption="The reviews worth having come from moments like this one. We help you ask real customers at the right time. We never write a review for you or pay for one.">
                <img src="/images/au/ai-seo/ai-seo-reviews.webp" width={1200} height={800} loading="lazy" decoding="async" alt="The owner of a small Adelaide bakery chatting with a regular customer as she hands him his bread across the counter" />
              </VisualSlot>
            </div>
            <div className="platlist span-all" role="list">
              <div className="plat plat-2col" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>What we do</h3></div><p className="plat-build">Help you ask real customers for honest reviews, complete your listings, and publish pages with facts an assistant can check.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>What we never do</h3></div><p className="plat-build">Write reviews, buy reviews, post as customers on forums, or promise you a place in ChatGPT answers.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>What you keep</h3></div><p className="plat-build">Every page, profile and piece of content we create is yours. If you stop working with us, it all keeps working.</p></div>
            </div>
          </div>
        </section>

        {/* ═══ AUSTRALIAN DEMAND → full-width head + split (prose + links | photo + demand) ═══ */}
        <section className="section platforms" id="australia-wide">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Australia-wide</div>
              <h2>AI SEO services across Sydney, Melbourne, Brisbane and beyond</h2>
            </div>
            <div className="au-split au-split-top">
              <div>
                <p>
                  Australians search for this service under a lot of different names: AI SEO, AI SEO services,
                  generative engine optimisation, GEO agency, answer engine optimisation, ChatGPT SEO and LLM SEO.
                  Interest in the topic has roughly doubled in a year. Most of these searches are still small,
                  which tells you the market is early and buyers are still learning the language.
                </p>
                <p>
                  We run AI SEO remotely for businesses in Sydney, Melbourne, Brisbane, Perth, Adelaide, Canberra
                  and regional Australia, with video reviews and shared reports. Where you are makes no difference
                  to the work. What does matter is that the test questions sound Australian, because an assistant
                  answering “best agency in Parramatta” reads different sources from one answering a US question.
                </p>
                <ul className="city-list">
                  <li><a href="/au">FactoryJet Australia</a></li>
                  <li><a href="/au/seo">SEO services Australia</a></li>
                  <li><a href="/au/ai-agents">AI agents Australia</a></li>
                  <li><a href="/au/ecommerce-development">Ecommerce development Australia</a></li>
                  <li><a href="/au/melbourne">Melbourne</a></li>
                  <li><a href="/au/brisbane">Brisbane</a></li>
                  <li><a href="/au/adelaide">Adelaide</a></li>
                  <li><a href="/au/canberra">Canberra</a></li>
                </ul>
                <VisualSlot page={PAGE_KEY} slot="platforms" kind="photo" ratio="3:2" className="au-split-photo" captionClassName="figcap"
                  subject="A business owner on a video call with the FactoryJet team, reviewing a shared AI visibility report on his laptop"
                  caption="Perth, Hobart or Parramatta: the monthly review is a video call over the same shared report, in your business hours.">
                  <img src="/images/au/ai-seo/ai-seo-remote.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A Perth business owner on a video call with the FactoryJet team, reviewing a shared AI visibility report on his laptop, with the Swan River outside his office window" />
                </VisualSlot>
              </div>
              <div className="demand">
                <div className="demand-head"><span>Australia · Monthly Search Demand</span><b>DataForSEO</b></div>
                <ul>
                  {[
                    { kw: 'ai seo / ai for seo', v: '1,000', w: '100%', kd: 'The head term cluster' },
                    { kw: 'ai seo agency', v: '390', w: '39%', kd: 'Buyer intent' },
                    { kw: 'ai seo services', v: '320', w: '32%', kd: 'Buyer intent' },
                    { kw: 'generative engine optimization', v: '260', w: '26%', kd: 'US spelling, still common here' },
                    { kw: 'generative engine optimisation', v: '210', w: '21%', kd: 'Australian spelling' },
                    { kw: 'geo agency', v: '170', w: '17%', kd: 'Buyer intent' },
                    { kw: 'answer engine optimisation', v: '110', w: '11%', kd: 'Research stage' },
                    { kw: 'ai seo audit', v: '40', w: '4%', kd: 'Where most start' },
                  ].map((r) => (
                    <li key={r.kw} className="demand-row">
                      <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<small> searches</small></span></div>
                      <div className="demand-bar"><i style={{ width: r.w }} /></div>
                      <div className="demand-kd">{r.kd}</div>
                    </li>
                  ))}
                </ul>
                <p className="demand-src">Source: DataForSEO, Australia, September 2026</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ AGENCY LIST (self-disclosure, ItemList from AU_AGENCIES) → ruled rows ═══ */}
        <section className="section platforms" id="agencies">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">The honest landscape</div>
                <h2>Australian AI SEO and GEO agencies worth knowing</h2>
              </div>
              <p>
                We are one option, not the only one. These agencies show up when Australians search for an AI SEO
                agency or ask AI assistants for a recommendation. Each note is based on what the company says on its
                own website. Talk to a few, and ask every one of them, including us, to show you your starting
                position before you sign.
              </p>
            </div>
            <div className="platlist" role="list">
              {AU_AGENCIES.map((a, i) => (
                <div key={a.name} className={a.name === 'FactoryJet' ? 'plat plat-2col plat-own' : 'plat plat-2col'} role="listitem">
                  <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                  <div className="plat-name"><h3>{a.name}</h3>{a.name === 'FactoryJet' && <span className="plat-flag">That is us</span>}</div>
                  <p className="plat-build">{a.note}</p>
                </div>
              ))}
            </div>
            <p className="sub-note">
              Agencies named from live Australian search results and AI assistant answers for AI SEO queries, September 2026. Notes reflect each company’s own website on 25 September 2026. Listing is not endorsement.
            </p>
            <div className="au-panel au-panel-wide">
              <h3 className="au-panel-title">Six questions to ask any AI SEO agency</h3>
              <ol className="au-numlist">
                <li><span><b>Can you show me where I stand today?</b> Ask for the exact questions they ran and the answers they got.</span></li>
                <li><span><b>Which assistants do you test?</b> ChatGPT alone is not enough. Ask about Claude, Gemini, Perplexity and AI Overviews.</span></li>
                <li><span><b>How do you handle answers changing from day to day?</b> A good answer involves a fixed question set and trends over time.</span></li>
                <li><span><b>What will you change on my website, and who does it?</b> Recommendations without implementation go nowhere.</span></li>
                <li><span><b>How do you get mentions on other sites?</b> Listen for honest reviews, listings and PR, not bought reviews.</span></li>
                <li><span><b>Do you guarantee results?</b> The right answer is no, with a clear explanation of what they can influence.</span></li>
              </ol>
            </div>
          </div>
        </section>

        {/* ═══ FAQ (Family A accordion; same FAQ_ITEMS array as the FAQPage JSON-LD) ═══ */}
        <AuFaq
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          heading="AI SEO questions Australian business owners actually ask"
          askLabel="Still have a question? Ask the founder →"
          askNote="Replies within 24 hours."
        />

        {/* ═══ FINAL CTA (light, US finalcta) ═══ */}
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <div className="eyebrow">Ready when you are</div>
              <h2>Find out what AI assistants say about your business</h2>
              <p>
                Send your name and work email. The founder replies within 24 hours to book a short call. We will run
                your buyers’ questions across ChatGPT, Claude, Gemini, Perplexity and Google, show you who gets named,
                and tell you honestly whether AI SEO is worth doing for you. No spam, no obligation.
              </p>
            </div>
            <div className="ctas">
              <ModalCTAButton label="Get my AI visibility check" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              <a className="btn btn-ghost" href="/ai-visibility-checker">Try the free checker</a>
            </div>
          </div>
        </section>

      </main>
      </div>
      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}

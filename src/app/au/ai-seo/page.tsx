import type { Metadata } from 'next';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
import HeroInlineForm from '@/components/HeroInlineForm';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import '../au-service.css';

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
const H1 = 'AI SEO Agency Australia: Get Named When Buyers Ask ChatGPT, Not Only Found on Google';

/* Design tokens, copied by value from ../au-service.css so inline styles stay
   on-system. */
const T = {
  ink: '#0F0F12',
  n200: '#E5E5E0',
  n400: '#6E6E68',
  orange: '#FF5C00',
  green: '#047857',
  small: '#B23E13',
  fm: "'Geist Mono',monospace",
  fd: "'Plus Jakarta Sans',sans-serif",
};

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

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
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

  // ── Choosing an agency & cost ──
  { category: 'choosing', question: 'What are some good AI SEO agencies in Australia?',
    answer: 'Well-known names include StudioHawk, Impressive Digital, Prosperity Media, Luminary, Click Click Media, Firewire, 23 Digital and Pivotal Agency, and we are one of the options too. We list each with a neutral note further up this page. Interestingly, when we asked four AI assistants the same question, they named different agencies, so talk to a few and ask each for evidence.' },
  { category: 'choosing', question: 'How much does AI SEO cost in Australia?',
    answer: 'It depends on scope, not a price list. The main drivers are how many buyer questions and services you want to cover, how much content needs writing or fixing, the state of your site’s technical setup, how many directory and review profiles need work, and whether you want a one-off audit or ongoing monthly work. We scope after a free first call and quote in writing.' },
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

/* Page-scoped fixes from the 2026-09-25 visual QA pass. Rendered only on this
   page, so the shared au-service.css is untouched:
   1. FAQ rows showed two open/close icons (the chevron AND the generic "+"
      that au-service.css adds to every summary). Keep the chevron only.
   2. au-service.css hides every <nav> inside .au-svc below 768px, which also
      hid the breadcrumb trail on phones. Bring the trail back.
   3. Comparison table: give it a minimum width and let it scroll sideways on
      phones instead of squashing the FactoryJet column off-screen. */
const PAGE_CSS = `
.au-svc details.faq-item summary::after,.au-svc details.faq-item[open] summary::after{content:none}
.au-svc .cmp-scroll{overflow-x:auto;-webkit-overflow-scrolling:touch}
.au-svc .cmp-scroll .cmp-table{min-width:720px}
.au-svc .tbl-hint{display:none;font-family:'Geist Mono',monospace;font-size:11px;color:#6E6E68;margin-top:10px}
@media(max-width:768px){.au-svc nav[aria-label="Breadcrumb"]{display:block!important}.au-svc .tbl-hint{display:block}}
`;

const srcNote = { fontFamily: T.fm, fontSize: 11, color: T.n400, marginTop: 12 } as const;
const srcLink = { textDecoration: 'underline' } as const;
const inLink = { color: T.small, textDecoration: 'underline' } as const;

export default function AiSeoAUPage() {
  return (
    <>
      <script id="ld-au-ai-seo" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

      <SiteHeader locale="au" logoHref="/au" />
      <div className="au-svc">
      <main>

        <Breadcrumbs items={crumbs} />

        {/* ═══ 1. HERO ═══ */}
        <section className="sec-lg dot-grid" style={{ position: 'relative' }}>
          <div className="wrap">
            <div className="col-6040">
              <div>
                <div className="flex-wrap mb-6">
                  <span className="chip"><span className="dot dot-orange" />AI SEO Australia</span>
                  <span className="chip">Generative Engine Optimisation</span>
                  <span className="chip">Measured Before We Sell</span>
                </div>
                <h1>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  FactoryJet is an AI SEO agency for Australian businesses. We use generative engine optimisation
                  (GEO) and answer engine optimisation (AEO) to get you named when buyers ask ChatGPT, Claude,
                  Gemini, Perplexity or Google AI Overviews for a recommendation, while keeping the Google rankings
                  you already have. And we measure where you stand before we sell you anything.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
                  <div className="upd">Last updated<br />25 September 2026</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="au" source="au_ai_seo_hero" submitLabel="Get my AI visibility check" />
                </div>
              </div>

              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/ai-seo/ai-seo-hero.webp" width={1400} height={933} fetchPriority="high" decoding="async" alt="Over-the-shoulder view of an Australian marketing manager in a Brisbane office comparing an AI assistant's answer on her phone with a search results page on her laptop, with a FactoryJet AI SEO specialist beside her" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">What we measured before writing this page</span>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">AI answers to Australian buyer questions</div><div className="scorecard-note">ChatGPT, Claude, Gemini, Perplexity</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>68</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">AI SEO searches with an AI Overview</div><div className="scorecard-note">Google Australia, September 2026</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>18 of 18</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Answers that named FactoryJet</div><div className="scorecard-note">yes, we test ourselves too</div></div>
                    <div className="scorecard-val" style={{ color: T.small, fontSize: 15 }}>0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 2. ANSWER-FIRST DEFINITION (GEO) ═══ */}
        <section className="sec">
          <div className="wrap">
            <div className="def" style={{ maxWidth: 940 }} data-speakable="true">
              <span className="lab">What does an AI SEO agency do for an Australian business?</span>
              <p>
                An AI SEO agency gets your business named in answers from ChatGPT, Gemini, Claude, Perplexity and
                Google AI Overviews, as well as ranked on Google. It tests the questions your buyers ask, records
                who gets named and which sources are cited, then fixes your site, content and directory listings
                so AI assistants can find you and trust what they read.
              </p>
            </div>
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">Three terms, in plain English</span>
              <p>
                <b>Generative engine optimisation (GEO)</b> means making your business easy for AI assistants to
                mention. <b>Answer engine optimisation (AEO)</b> means shaping your pages so an engine can lift a
                clear answer from them. <b>AI visibility</b> is simply how often, and how accurately, AI answers
                mention you when buyers ask about what you sell.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              Here is why this matters now. Search interest in AI SEO and GEO in Australia has doubled in a year,
              and when we checked 154 Australian buyer searches in September 2026, Google showed an AI Overview on
              68% of them. Buyers increasingly read a written answer before they see a single link. If that answer
              names three of your competitors and not you, you lose the job before you know it existed.
            </p>
          </div>
        </section>

        {/* ═══ 3. FACTS BAND (our measurement, sourced) ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              {[
                { v: '68%', t: 'of 154 Australian buyer searches showed a Google AI Overview', s: 'FactoryJet test, Sep 2026' },
                { v: '20', t: 'AI answers cited Clutch, the single most cited source for Australian buyers', s: 'FactoryJet test, Sep 2026' },
                { v: '35 of 51', t: 'answers with visible sources cited an agency directory or a “best of” list', s: 'FactoryJet test, Sep 2026' },
                { v: '25+', t: 'agencies named by four assistants asked the same AI SEO question, and none by all four', s: 'FactoryJet test, Sep 2026' },
              ].map((r) => (
                <li key={r.t}>
                  <div style={{ fontFamily: T.fd, fontWeight: 800, fontSize: 26, color: T.orange }}>{r.v}</div>
                  <p style={{ fontSize: 13.5, color: T.ink, marginTop: 4 }}>{r.t}</p>
                  <span style={{ fontFamily: T.fm, fontSize: 10, color: T.n400 }}>{r.s}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ 4. HOW AI ASSISTANTS CHOOSE WHO TO NAME ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">What we know, and what nobody knows</span>
                <h2>How AI assistants choose which businesses to name</h2>
                <div className="stack mt-6">
                  <p>
                    Let us start with the honest part. OpenAI, Anthropic, Google and Perplexity do not publish the
                    rules their assistants use to pick one business over another. Any agency that tells you it
                    knows the exact formula is guessing, and some of the confident advice online contradicts itself.
                    So we stick to what can be observed and tested.
                  </p>
                  <p>
                    <b>They look things up.</b> When you ask an AI assistant for a recommendation, it usually
                    searches the web first, reads a handful of pages and then writes its answer from them. Each
                    company runs its own search crawler for this: OpenAI’s is called OAI-SearchBot, Anthropic’s is
                    Claude-SearchBot and Perplexity’s is PerplexityBot. OpenAI states plainly that sites blocking
                    OAI-SearchBot will not be shown in ChatGPT search answers. If your site blocks these crawlers,
                    you have taken yourself out of the running.
                  </p>
                  <p>
                    <b>They lean on lists.</b> For “who should I hire” questions, the pages they read are very often
                    agency directories and “top 10” blog lists, not the agencies’ own websites. That pattern shows
                    up clearly in our Australian data further down.
                  </p>
                  <p>
                    <b>They disagree with each other.</b> We asked ChatGPT, Claude, Gemini and Perplexity the same
                    question: which Australian agencies help businesses show up in ChatGPT and Google AI Overviews?
                    Between them they named more than 25 agencies. No agency appeared in all four answers, and
                    ChatGPT’s shortlist shared no names with the other three. Visibility in one assistant tells you
                    little about the others, which is why we test all of them.
                  </p>
                  <p>
                    <b>Google keeps it simple.</b> For AI Overviews, Google’s own documentation says there are no
                    additional requirements and no special optimisations needed beyond normal SEO best practice.
                    That is useful: it means your classic SEO foundations, covered on our{' '}
                    <a href="/au/seo" style={inLink}>SEO services Australia</a> page, are also your entry ticket to
                    AI Overviews.
                  </p>
                </div>
                <p style={srcNote}>
                  Sources: <a href={SRC_OPENAI} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>OpenAI, overview of OpenAI crawlers</a>;{' '}
                  <a href={SRC_ANTHROPIC} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>Anthropic, web crawling and site owners</a>;{' '}
                  <a href={SRC_PERPLEXITY} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>Perplexity crawlers</a>;{' '}
                  <a href={SRC_GOOGLE} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>Google Search Central, AI features and your website</a>.
                </p>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Observed, not assumed</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">They search the web live</div><div className="scorecard-note">blocked crawlers mean no mention</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Known</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">They cite directories and lists</div><div className="scorecard-note">35 of 51 Australian answers</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Measured</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">They name different businesses</div><div className="scorecard-note">no agency named by all four</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Measured</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">AI Overviews follow SEO basics</div><div className="scorecard-note">Google’s own documentation</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Stated</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">The exact ranking formula</div><div className="scorecard-note">not published by anyone</div></div><div className="scorecard-val" style={{ color: T.small, fontSize: 14 }}>Unknown</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 5. REAL DATA: WHICH SOURCES AI CITES ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">Real Australian data</span>
              <h2>Which websites AI assistants cite when Australians ask who to hire</h2>
              <p className="lead mt-4">
                In September 2026 we asked ChatGPT, Claude, Gemini and Perplexity 17 questions Australian buyers
                really ask, from “who is the best AI automation agency in Australia?” to “which SEO agencies are best
                for small businesses?”. That gave us 68 answers. Gemini hides its sources behind redirect links, so
                the counts below come from the 51 answers where we could see every source.
              </p>
            </div>
            <div className="col-6040 mt-10">
              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${T.n200}`, padding: '14px 18px' }}>
                  <span style={{ fontFamily: T.fm, fontSize: 10, letterSpacing: '.13em', textTransform: 'uppercase', color: T.n400 }}>Sources cited · 51 AI answers</span>
                  <span style={{ background: T.small, color: '#fff', fontFamily: T.fm, fontSize: 10, borderRadius: 999, padding: '3px 9px' }}>FactoryJet test</span>
                </div>
                <div style={{ padding: '4px 18px 14px' }}>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    {CITED_SOURCES.map((r) => (
                      <li key={r.name} className="demand-row">
                        <div className="demand-top"><span className="demand-kw">{r.name}</span><span className="demand-v">{r.n}<span style={{ fontSize: 9, color: T.n400 }}> answers</span></span></div>
                        <div className="demand-bar"><i style={{ width: `${Math.round((r.n / 51) * 100)}%` }} /></div>
                        <div className="demand-kd">{r.kind}</div>
                      </li>
                    ))}
                  </ul>
                  <p style={{ textAlign: 'center', fontFamily: T.fm, fontSize: 10, color: T.n400, marginTop: 10 }}>Answers from ChatGPT, Claude and Perplexity to 17 Australian buyer questions, 24–25 September 2026</p>
                </div>
              </div>
              <div className="stack">
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

            <h3 className="mt-12" style={{ maxWidth: 760 }}>What this means for your business</h3>
            <ul className="col-3 mt-6">
              <li className="card"><h3>Your directory profiles are now marketing</h3><p className="mt-4">If assistants build shortlists from Clutch, GoodFirms and similar sites, an empty or out-of-date profile is a missed mention. Complete profiles with accurate services, locations and genuine reviews matter more than they used to.</p></li>
              <li className="card"><h3>Being on the lists matters</h3><p className="mt-4">“Best of” lists feed a large share of answers. You cannot buy your way onto honest ones, but you can make sure the people who write them know you exist and can check your claims easily.</p></li>
              <li className="card"><h3>Your own site still has to be readable</h3><p className="mt-4">Assistants check the businesses they name. A site that blocks AI crawlers, hides key facts in images, or never says plainly what you do and where makes that check harder.</p></li>
            </ul>
          </div>
        </section>

        {/* ═══ 6. COMPARISON TABLE: CLASSIC SEO VS AI SEO / GEO ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <span className="eyebrow">Side by side</span>
            <h2 style={{ maxWidth: 760 }}>Classic SEO vs AI SEO and generative engine optimisation: what changes</h2>
            <p className="lead mt-4" style={{ maxWidth: 760 }}>
              AI SEO does not replace classic SEO. It changes the scoreboard and adds new work on top. This table
              shows where the two differ, and how we run them together.
            </p>
            <div className="card mt-8 cmp-scroll" style={{ padding: 0 }}>
              <table className="cmp-table">
                <thead>
                  <tr>
                    <th>What matters</th>
                    <th>Classic SEO</th>
                    <th>AI SEO / GEO</th>
                    <th className="fj">How FactoryJet runs it</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">The goal</td><td>Rank a page in Google’s results</td><td>Be named or cited inside an AI answer</td><td className="fj"><span className="yes">Both, on one plan</span></td></tr>
                  <tr><td className="feat">Where buyers see you</td><td>Google results and Maps</td><td>ChatGPT, Claude, Gemini, Perplexity, AI Overviews</td><td className="fj"><span className="yes">All of them, tested monthly</span></td></tr>
                  <tr><td className="feat">What gets measured</td><td>Positions, clicks, traffic, enquiries</td><td>Mentions, citations, accuracy, competitors named</td><td className="fj"><span className="yes">One report, both sets</span></td></tr>
                  <tr><td className="feat">Research starts with</td><td>Keywords and search volume</td><td>Questions buyers ask assistants</td><td className="fj"><span className="yes">Keywords mapped to real questions</span></td></tr>
                  <tr><td className="feat">Crawler access</td><td>Googlebot</td><td>OAI-SearchBot, Claude-SearchBot, PerplexityBot and others</td><td className="fj"><span className="yes">Checked line by line</span></td></tr>
                  <tr><td className="feat">Off-site work</td><td>Backlinks</td><td>Directory profiles, reviews, lists, consistent business facts</td><td className="fj"><span className="yes">Links plus directory and list work</span></td></tr>
                  <tr><td className="feat">Content style</td><td>Topic coverage for ranking</td><td>Plain answers near the top, easy to quote</td><td className="fj"><span className="yes">Answer first, then depth</span></td></tr>
                  <tr><td className="feat">Speed of feedback</td><td>Weeks to months</td><td>Varies by assistant and by day</td><td className="fj"><span className="partial">Same questions, re-run every month</span></td></tr>
                  <tr><td className="feat">Guarantees</td><td>None honest</td><td>None honest</td><td className="fj"><span className="partial">Transparent testing, no promises</span></td></tr>
                </tbody>
              </table>
            </div>
            <p className="tbl-hint">Swipe sideways to see the FactoryJet column →</p>
            <p className="mt-6" style={{ maxWidth: 780 }}>
              If most of your enquiries come from Google Maps or local searches, classic local SEO is still the
              bigger lever, and our <a href="/au/seo" style={inLink}>SEO services for Australian businesses</a> page
              covers that in depth. If your buyers research on ChatGPT before they call, or you sell a service where
              people ask an assistant “who should I use?”, AI SEO deserves a place in the plan.
            </p>
          </div>
        </section>

        {/* ═══ 7. PROCESS LISTICLE (interactive <details>) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Our process</span>
                <h2>Our AI SEO process in seven steps</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  Tap any step to see what happens and what you get. Steps one and two are the AI visibility audit.
                  Some businesses stop there, and that is a fine outcome.
                </p>
                <div className="mt-6" style={{ maxWidth: 580 }}>
                  {[
                    { n: '01', t: 'Agree the buyer questions', d: 'We write 20 to 50 questions your customers really ask, the way Australians phrase them: “best ecommerce agency in Melbourne”, “who can fix my Shopify store in Brisbane?”, “how much does an AI receptionist cost in Australia?”. You approve the list. It becomes the test we re-run every month.' },
                    { n: '02', t: 'Measure where you stand', d: 'We run every question across ChatGPT, Claude, Gemini, Perplexity and Google, and record whether you are named, which competitors are named, what the answer says about you, and which websites are cited. This is your baseline. Our free AI visibility checker gives you a quick first look.' },
                    { n: '03', t: 'Fix what machines cannot read', d: 'We check robots.txt so AI search crawlers are allowed, make sure key content is in the page HTML rather than hidden behind scripts, add accurate structured data, and fix speed and indexing problems. This is technical SEO with AI crawlers added to the list.' },
                    { n: '04', t: 'Make your business facts consistent', d: 'Your name, services, locations and details should say the same thing on your site, your Google Business Profile, Clutch, GoodFirms, LinkedIn and every directory the assistants cite for your category. Mixed facts confuse machines. We clean them up and complete what is missing.' },
                    { n: '05', t: 'Write pages that answer questions', d: 'For each important question, a page that answers it plainly near the top, then backs it up with specifics: your process, real examples, honest limits and sources. Question-style headings and FAQs make the answer easy to lift. No filler written to hit a word count.' },
                    { n: '06', t: 'Earn mentions on sites AI reads', d: 'Directory profiles with genuine reviews, inclusion in honest “best of” lists where you deserve it, industry associations, local media and partner pages. We never buy fake reviews or write them for you. Under Australian Consumer Law that is illegal, and it would put your reputation at risk.' },
                    { n: '07', t: 'Re-test, report and adjust', d: 'Every month we re-run the same questions and show you what changed: mentions, accuracy, competitors, citations, alongside Google rankings, traffic and enquiries. When something is not working, we say so and change the plan.' },
                  ].map((s) => (
                    <details key={s.n}>
                      <summary><span><span style={{ fontFamily: T.fm, color: T.small, marginRight: 12 }}>{s.n}</span>{s.t}</span></summary>
                      <p style={{ paddingBottom: 18 }}>{s.d}</p>
                    </details>
                  ))}
                </div>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/ai-seo/ai-seo-workshop.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Two people at a timber meeting table in a Melbourne office sorting blank index cards of buyer questions into three columns" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    Step one happens at a table, not in a tool. We sort buyer questions into piles by how close each
                    one is to a sale. “What is GEO?” is research. “Best GEO agency in Sydney” is someone ready to call.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline={'Want to know what ChatGPT says about your business?'}
          sub={'Tell us what you sell and where. On a short call with the founder we will show you how AI assistants answer your buyers’ questions today, who they name instead of you, and whether AI SEO is worth doing for you right now.'}
          label={'Get my AI visibility check'}
        />

        {/* ═══ 8. WHAT WE MEASURE ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">We measure before we sell</span>
                <h2>What we measure, and how you will see it</h2>
                <div className="stack mt-6">
                  <p>
                    Most AI SEO reports are either a vague “AI visibility score” from a tool, or nothing at all. We
                    think you should see the actual questions, the actual answers and the actual names. So that is
                    what our reports show.
                  </p>
                  <p>
                    Before any engagement, we run your buyer questions and show you the results. If you want a
                    quick look on your own first, our free{' '}
                    <a href="/ai-visibility-checker" style={inLink}>AI visibility checker</a> scans how ChatGPT,
                    Perplexity and Google AI Overviews respond for your business. It takes a couple of minutes and
                    you do not need to talk to anyone.
                  </p>
                  <p>
                    One caution we give every client: AI answers vary from run to run. A single screenshot proves
                    little. That is why we use a fixed set of questions, run them the same way every month, and look
                    at the trend rather than any one answer.
                  </p>
                </div>
                <div className="mt-8">
                  <a className="btn btn-primary" href="/ai-visibility-checker">Run the free AI visibility checker</a>
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Your monthly report</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">Mention rate</div><div className="scorecard-note">share of test questions where you are named</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Per assistant</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Accuracy</div><div className="scorecard-note">is what they say about you correct?</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Checked</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Competitors named</div><div className="scorecard-note">who gets the mention instead</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Listed</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Sources cited</div><div className="scorecard-note">which sites the answers lean on</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Listed</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">AI Overview presence</div><div className="scorecard-note">shown, and are you cited in it?</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Tracked</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Google rankings and enquiries</div><div className="scorecard-note">the classic scoreboard, kept</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Included</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 9. WHICH OPTION FITS YOU (interactive checklist) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Be honest with yourself</span>
              <h2>Do you need AI SEO now, or classic SEO first?</h2>
              <p className="lead mt-4">
                Read the list that sounds most like you (tap a heading to fold it away). If you tick three or more in
                one list, that is probably where to start.
              </p>
            </div>
            <div className="col-2 mt-8" style={{ gap: 24 }}>
              <div className="card">
                <details open>
                  <summary>AI SEO is worth doing now if...</summary>
                  <ul className="scope-list" style={{ paddingBottom: 12 }}>
                    <li>Your buyers are business owners or managers who research suppliers before calling.</li>
                    <li>You sell a considered service or product where people ask “who should I use?”.</li>
                    <li>New customers have mentioned finding you, or a competitor, through ChatGPT.</li>
                    <li>You already rank reasonably well on Google but competitors get named in AI answers.</li>
                    <li>Your details on directories and review sites are thin, old or inconsistent.</li>
                    <li>You want one agency to handle Google and AI search together.</li>
                  </ul>
                </details>
              </div>
              <div className="card">
                <details open>
                  <summary>Classic SEO should come first if...</summary>
                  <ul className="scope-list" style={{ paddingBottom: 12 }}>
                    <li>Most of your work comes from Google Maps and “near me” searches.</li>
                    <li>Your website is slow, hard to crawl, or barely indexed.</li>
                    <li>You do not yet rank on page one for anything your buyers search.</li>
                    <li>Your Google Business Profile is incomplete or unverified.</li>
                    <li>You have fewer than a handful of genuine reviews anywhere.</li>
                  </ul>
                  <p style={{ paddingBottom: 18 }}>If this sounds like you, start with <a href="/au/seo" style={inLink}>SEO services Australia</a>. The same foundations feed AI answers later.</p>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 10. WHO WE HELP + TRADIE STORY ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Where the questions are asked</span>
                <h2>AI search happens in the van, the café and the boardroom</h2>
                <div className="stack mt-6">
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
                    <a href="/blog/how-to-get-chatgpt-to-recommend-your-business-2026" style={inLink}>how to get ChatGPT to recommend your business</a>{' '}
                    and{' '}
                    <a href="/blog/how-to-show-up-in-google-ai-overviews-small-business" style={inLink}>showing up in Google AI Overviews as a small business</a>{' '}
                    go step by step, and our{' '}
                    <a href="/blog/generative-engine-optimization-guide" style={inLink}>generative engine optimisation guide</a>{' '}
                    covers the research behind GEO.
                  </p>
                </div>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/ai-seo/ai-seo-tradie.webp" width={1200} height={800} loading="lazy" decoding="async" alt="An Australian tradesman in his work van on a Brisbane street asking an AI assistant a question on his phone" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    Your next customer may be asking an assistant between jobs. The answer they get is written in
                    seconds, from pages and listings that already exist.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 11. ECOMMERCE + SIBLING SERVICES (hover cards) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Built by engineers</span>
                <h2>AI SEO works better when the same team can fix the site</h2>
                <div className="stack mt-6">
                  <p>
                    A lot of AI SEO advice ends with a list of changes your developer “should make”. Then nothing
                    happens for three months. FactoryJet is an engineering company first. We build websites,
                    ecommerce stores and AI agents, so when the audit says your product pages hide their details
                    in scripts, or your store blocks a crawler, we fix it ourselves.
                  </p>
                  <p>
                    That matters most for online stores. Shoppers now ask assistants which Australian brand makes the
                    best linen sheets or where to buy a specific part with fast shipping. Clear product data,
                    accurate stock and delivery details, and consistent reviews give an assistant something solid to
                    repeat. Our <a href="/au/ecommerce-development" style={inLink}>ecommerce development in Australia</a>{' '}
                    and <a href="/au/shopify-development" style={inLink}>Shopify development</a> teams build stores
                    that are readable by machines from day one.
                  </p>
                </div>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/ai-seo/ai-seo-warehouse.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A FactoryJet web engineer checking a product page on his laptop while the owner of a Melbourne linen brand stands beside him holding a folded sheet" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    Product facts an assistant can repeat start on the product page: clear names, sizes, materials,
                    stock and delivery details, written as text and marked up with structured data.
                  </p>
                </div>
              </div>
            </div>
            <ul className="col-3 mt-12">
              <li><a className="svc-card" href="/au/seo" style={{ display: 'block', height: '100%' }}><h3>SEO services Australia</h3><p className="mt-4">Classic rankings, technical SEO and local search. The foundation that AI Overviews draw from.</p><span className="eyebrow mt-4">Explore SEO →</span></a></li>
              <li><a className="svc-card" href="/au/ai-agents" style={{ display: 'block', height: '100%' }}><h3>AI agent development</h3><p className="mt-4">Custom AI agents that answer enquiries, handle orders and connect to Xero, MYOB and your CRM.</p><span className="eyebrow mt-4">Explore AI agents →</span></a></li>
              <li><a className="svc-card" href="/au/ecommerce-development" style={{ display: 'block', height: '100%' }}><h3>Ecommerce development</h3><p className="mt-4">Stores built with clean product data and structured data, so both Google and AI assistants can read them.</p><span className="eyebrow mt-4">Explore ecommerce →</span></a></li>
              <li><a className="svc-card" href="/au/ai-consulting" style={{ display: 'block', height: '100%' }}><h3>AI consulting</h3><p className="mt-4">Not sure where AI fits in your business beyond search? Start with a focused AI readiness assessment.</p><span className="eyebrow mt-4">Explore AI consulting →</span></a></li>
              <li><a className="svc-card" href="/au/ai-development" style={{ display: 'block', height: '100%' }}><h3>AI development</h3><p className="mt-4">AI built into your existing systems, from document handling to customer service tools.</p><span className="eyebrow mt-4">Explore AI development →</span></a></li>
              <li><a className="svc-card" href="/au" style={{ display: 'block', height: '100%' }}><h3>FactoryJet Australia</h3><p className="mt-4">Everything we do for Australian businesses: ecommerce, AI agents, websites and AI search.</p><span className="eyebrow mt-4">Visit the Australia hub →</span></a></li>
            </ul>
          </div>
        </section>

        {/* ═══ 12. HONEST LIMITS + ACCC ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
            <div>
              <span className="eyebrow">What we will not do</span>
              <h2>Shortcuts that can hurt your business, and why we avoid them</h2>
              <div className="stack mt-6">
                <p>
                  Because directories and reviews feed AI answers, some agencies now sell shortcuts: batches of
                  reviews, planted comments on forums, or pages stuffed with the same phrases. We stay away from all
                  of it, for two reasons.
                </p>
                <p>
                  First, it is often illegal. The ACCC is clear that it is against the law for a business to create
                  fake or misleading reviews, or to arrange for others to do so. Offering incentives for positive
                  reviews also risks breaching the Australian Consumer Law. An AI assistant repeating a fake review
                  does not make it any less fake.
                </p>
                <p>
                  Second, it tends not to work. The research paper that named generative engine optimisation found
                  that some methods, such as adding sources and statistics, could lift visibility in AI answers by up
                  to 40% in its tests, while old-style keyword stuffing performed poorly. The authors also found the
                  best method changes from topic to topic. Real substance beats tricks.
                </p>
              </div>
              <p style={srcNote}>
                Sources: <a href={SRC_ACCC} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>ACCC, online product and service reviews</a>;{' '}
                <a href={SRC_GEO_PAPER} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>Aggarwal et al., GEO: Generative Engine Optimization (arXiv:2311.09735)</a>.
              </p>
            </div>
            <div className="card" style={{ padding: 8 }}>
              <img src="/images/au/ai-seo/ai-seo-reviews.webp" width={1200} height={800} loading="lazy" decoding="async" alt="The owner of a small Adelaide bakery chatting with a regular customer as she hands him his bread across the counter" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
              <div style={{ padding: '14px 12px 8px' }}>
                <p style={{ fontSize: 14 }}>
                  The reviews worth having come from moments like this one. We help you ask real customers at the
                  right time. We never write a review for you or pay for one.
                </p>
              </div>
            </div>
            </div>
            <ul className="col-3 mt-10">
              <li className="card"><h3>What we do</h3><p className="mt-4">Help you ask real customers for honest reviews, complete your listings, and publish pages with facts an assistant can check.</p></li>
              <li className="card"><h3>What we never do</h3><p className="mt-4">Write reviews, buy reviews, post as customers on forums, or promise you a place in ChatGPT answers.</p></li>
              <li className="card"><h3>What you keep</h3><p className="mt-4">Every page, profile and piece of content we create is yours. If you stop working with us, it all keeps working.</p></li>
            </ul>
          </div>
        </section>

        {/* ═══ 13. AUSTRALIAN DEMAND ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Australia-wide</span>
                <h2>AI SEO services across Sydney, Melbourne, Brisbane and beyond</h2>
                <div className="stack mt-6">
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
                </div>
                <div className="flex-wrap mt-6">
                  <a className="city-pill" href="/au">FactoryJet Australia</a>
                  <a className="city-pill" href="/au/seo">SEO services Australia</a>
                  <a className="city-pill" href="/au/ai-agents">AI agents Australia</a>
                  <a className="city-pill" href="/au/ecommerce-development">Ecommerce development Australia</a>
                  <a className="city-pill" href="/au/melbourne">Melbourne</a>
                  <a className="city-pill" href="/au/brisbane">Brisbane</a>
                  <a className="city-pill" href="/au/adelaide">Adelaide</a>
                  <a className="city-pill" href="/au/canberra">Canberra</a>
                </div>
              </div>

              <div className="stack">
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/ai-seo/ai-seo-remote.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A Perth business owner on a video call with the FactoryJet team, reviewing a shared AI visibility report on his laptop, with the Swan River outside his office window" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    Perth, Hobart or Parramatta: the monthly review is a video call over the same shared report, in
                    your business hours.
                  </p>
                </div>
              </div>
              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${T.n200}`, padding: '14px 18px' }}>
                  <span style={{ fontFamily: T.fm, fontSize: 10, letterSpacing: '.13em', textTransform: 'uppercase', color: T.n400 }}>Australia · Monthly Search Demand</span>
                  <span style={{ background: T.small, color: '#fff', fontFamily: T.fm, fontSize: 10, borderRadius: 999, padding: '3px 9px' }}>DataForSEO</span>
                </div>
                <div style={{ padding: '4px 18px 14px' }}>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
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
                        <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<span style={{ fontSize: 9, color: T.n400 }}> searches</span></span></div>
                        <div className="demand-bar"><i style={{ width: r.w }} /></div>
                        <div className="demand-kd">{r.kd}</div>
                      </li>
                    ))}
                  </ul>
                  <p style={{ textAlign: 'center', fontFamily: T.fm, fontSize: 10, color: T.n400, marginTop: 10 }}>Source: DataForSEO, Australia, September 2026</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 14. COMPETITOR LIST (self-disclosure, ItemList) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">The honest landscape</span>
              <h2>Australian AI SEO and GEO agencies worth knowing</h2>
              <p className="lead mt-4">
                We are one option, not the only one. These agencies show up when Australians search for an AI SEO
                agency or ask AI assistants for a recommendation. Each note is based on what the company says on its
                own website. Talk to a few, and ask every one of them, including us, to show you your starting
                position before you sign.
              </p>
            </div>
            <ul className="col-2 mt-10">
              {AU_AGENCIES.map((a, i) => (
                <li key={a.name} className={a.name === 'FactoryJet' ? 'card card-top-orange' : 'card'} style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.orange, minWidth: 30 }}>{i + 1}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{a.name}{a.name === 'FactoryJet' && <span style={{ fontFamily: T.fm, fontSize: 10, background: T.small, color: '#fff', borderRadius: 999, padding: '2px 8px', marginLeft: 8, verticalAlign: 'middle' }}>That is us</span>}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{a.note}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p style={srcNote}>
              Agencies named from live Australian search results and AI assistant answers for AI SEO queries, September 2026. Notes reflect each company’s own website on 25 September 2026. Listing is not endorsement.
            </p>

            <div className="card mt-10" style={{ maxWidth: 900 }}>
              <h3 style={{ fontSize: 18 }}>Six questions to ask any AI SEO agency</h3>
              <ol className="scope-list num-list mt-4">
                <li><b>Can you show me where I stand today?</b> Ask for the exact questions they ran and the answers they got.</li>
                <li><b>Which assistants do you test?</b> ChatGPT alone is not enough. Ask about Claude, Gemini, Perplexity and AI Overviews.</li>
                <li><b>How do you handle answers changing from day to day?</b> A good answer involves a fixed question set and trends over time.</li>
                <li><b>What will you change on my website, and who does it?</b> Recommendations without implementation go nowhere.</li>
                <li><b>How do you get mentions on other sites?</b> Listen for honest reviews, listings and PR, not bought reviews.</li>
                <li><b>Do you guarantee results?</b> The right answer is no, with a clear explanation of what they can influence.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* ═══ 15. FAQ ═══ */}
        <section className="sec-lg" id="faq">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>AI SEO questions Australian business owners actually ask</h2>
            </div>
            <nav className="faq-pill-nav" aria-label="FAQ categories">
              {FAQ_CATEGORIES.map((c) => (
                <a key={c.key} href={`#faq-${c.key}`}>
                  {c.label}{' '}
                  <span className="pill-count">{FAQ_ITEMS.filter((f) => f.category === c.key).length}</span>
                </a>
              ))}
            </nav>
            <div className="faq-grid">
              <aside className="faq-sidebar">
                <span className="faq-sidebar-topics">Topics</span>
                <nav className="faq-sidebar-nav">
                  {FAQ_CATEGORIES.map((c) => (
                    <a key={c.key} href={`#faq-${c.key}`}>
                      {c.label}
                      <span className="faq-nav-count">{FAQ_ITEMS.filter((f) => f.category === c.key).length}</span>
                    </a>
                  ))}
                </nav>
                <div className="faq-sidebar-cta">
                  <ModalCTAButton label="Still have a question? Ask the founder →" region="au" modalVariant="default" btnVariant="secondary-light" />
                  <p>Replies within 24 hours.</p>
                </div>
              </aside>

              <div>
                {FAQ_CATEGORIES.map((c) => (
                  <div key={c.key} id={`faq-${c.key}`} style={{ marginBottom: 40 }}>
                    <div className="faq-cat-header">
                      <span className="faq-cat-bar" />
                      <p className="faq-cat-label">{c.label}</p>
                    </div>
                    <ul className="faq-list">{FAQ_ITEMS.filter((f) => f.category === c.key).map((f) => (
                      <li key={f.question}><details className="faq-item">
                        <summary>
                          <span className="q-text">{f.question}</span>
                          <span className="chevron">
                            <svg viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          </span>
                        </summary>
                        <div className="faq-ans"><p>{f.answer}</p></div>
                      </details></li>
                    ))}</ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 16. FINAL CTA (the only dark section) ═══ */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Ready when you are</span>
            <h2>Find out what AI assistants say about your business</h2>
            <p className="mt-4">
              Send your name and work email. The founder replies within 24 hours to book a short call. We will run
              your buyers’ questions across ChatGPT, Claude, Gemini, Perplexity and Google, show you who gets named,
              and tell you honestly whether AI SEO is worth doing for you. No spam, no obligation.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="Get my AI visibility check" region="au" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/ai-visibility-checker" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>Try the free checker</a>
            </div>
          </div>
        </section>

      </main>
      </div>
      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} variant="dark" tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}

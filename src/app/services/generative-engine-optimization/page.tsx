import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/generative-engine-optimization

   Targets GEO / AEO / AIO / LLM SEO specifically. It deliberately does NOT
   target "ai seo agency" or "ai seo services". /services/ai-seo owns those
   and we are not re-running the cannibalisation that got the old thin version
   of this URL retired. One link back to /services/ai-seo, no title collision.

   Every vendor claim in SURFACES and SOURCED was fetch-verified against the
   vendor's own documentation on 2026-08-06. Do not edit a quote or a claim in
   those arrays without re-opening the source page first. See
   docs/AI-SEO-RULEBOOK.md §1 and §5 for why this rule exists.
───────────────────────────────────────────────────────────────────────────── */

const PAGE_MODIFIED = '2026-08-06';

export const metadata: Metadata = {
  title: 'AI Search Optimization & GEO Services | FactoryJet',
  description:
    'AI search optimization services: GEO, AEO, and LLM SEO getting your brand cited across ChatGPT, Perplexity, Claude, and Google AI Overviews.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Search Optimization Services | GEO & LLM SEO | FactoryJet',
    description:
      'GEO, AEO and LLM SEO services: crawler access, extractable structure, entity work and answer-share measurement across ChatGPT, Claude, Perplexity and Google AI Overviews.',
    url: 'https://factoryjet.com/services/generative-engine-optimization',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet generative engine optimization services' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Search Optimization Services | GEO & LLM SEO | FactoryJet',
    description: 'GEO, AEO and LLM SEO services for US brands. Get named in AI answers, not just ranked on a results page.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/generative-engine-optimization',
    languages: {
      'en-US': 'https://factoryjet.com/services/generative-engine-optimization',
      'x-default': 'https://factoryjet.com/services/generative-engine-optimization',
    },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ. The visible component and the FAQPage JSON-LD both read FAQ_ITEMS.
   There is exactly one array. Never add a second one.
───────────────────────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES = [
  { key: 'basics', label: 'GEO basics' },
  { key: 'terms', label: 'GEO vs AEO vs SEO' },
  { key: 'engines', label: 'Engines & crawlers' },
  { key: 'work', label: 'What the work is' },
  { key: 'results', label: 'Results & measurement' },
  { key: 'working', label: 'Working together' },
];

const FAQ_ITEMS = [
  { category: 'basics', question: 'What is generative engine optimization?', answer: 'Generative engine optimization ensures your pages are cited inside AI answers. Instead of competing for ranked blue links, you compete for direct citations. Your brand gets named when engines write answers in ChatGPT, Perplexity, Claude, or Google AI Overviews.' },
  { category: 'basics', question: 'What does a generative engine optimization agency actually do?', answer: 'Four core tasks. It confirms retrieval crawlers can access your pages. It restructures content so an answer can be lifted cleanly. It strengthens entity signals so engines name your brand with confidence. And it tracks your actual mention frequency across models.' },
  { category: 'basics', question: 'What is answer engine optimization?', answer: 'Answer engine optimization is the older sibling of GEO. It began as writing pages so direct answers could be pulled into featured snippets and voice replies. That same extractable structure now feeds AI answers, so AEO and GEO have largely converged.' },

  { category: 'terms', question: 'What is the difference between GEO and AEO?', answer: 'GEO is about being a source inside a generated answer. AEO is about having a clean extractable answer on the page in the first place. AEO is a component of GEO, not a rival to it. Anyone selling them as two separate retainers is selling the same work twice.' },
  { category: 'terms', question: 'What is the difference between GEO and traditional SEO?', answer: 'Traditional SEO competes for a ranked position and is measured in clicks. GEO competes to be quoted inside an answer and is measured in mentions. The underlying index is largely shared, so the technical foundations overlap heavily, but the winning page shape and the reporting are different.' },
  { category: 'terms', question: 'Should I hire a GEO agency or an AI SEO agency?', answer: 'It depends what you need first. If your organic foundation is weak, start there, and our broader AI SEO services page covers that programme. If you already rank and are simply not being named in AI answers, this page is the right starting point. Most brands do both, in that order.' },
  { category: 'terms', question: 'Does schema markup get me cited by AI?', answer: 'Not on its own, and we will not tell you otherwise. Google states there is no special schema.org structured data you need to add to appear in its AI features. We still ship correct schema because it is cheap and helps entity resolution. We just do not sell it as a citation lever.' },

  { category: 'engines', question: 'Which AI engines can you actually influence?', answer: 'We influence engines that retrieve live web pages. These include ChatGPT search, Perplexity, Claude, Google AI Overviews, and Bing chat. We cannot alter static model training data. We optimize what models fetch, read, and cite in live queries.' },
  { category: 'engines', question: 'How does ChatGPT decide which sites it can cite?', answer: 'Access is the first gate and OpenAI documents it. Sites opted out of the OAI-SearchBot crawler will not be shown in ChatGPT search answers, though they can still appear as navigational links. That makes robots.txt the cheapest and most damaging mistake in the whole discipline.' },
  { category: 'engines', question: 'Does blocking AI crawlers hurt my visibility?', answer: 'It depends which bot. Blocking a training crawler such as GPTBot or ClaudeBot is a rights decision with no documented effect on search citation. Blocking a retrieval crawler such as OAI-SearchBot, Claude-SearchBot or PerplexityBot removes you from that engine. Many sites block both by accident with one broad rule.' },
  { category: 'engines', question: 'What is Google-Extended and should I allow it?', answer: 'Google-Extended is a robots.txt control token, not a crawler. Google documents that it has no separate user agent, and that it does not affect inclusion in Google Search and is not a ranking signal. It governs training and grounding in Gemini apps and the Vertex AI API. Allowing it is a rights call.' },
  { category: 'engines', question: 'How do I stay in Bing chat answers?', answer: 'By doing nothing, according to Microsoft. Bing published that no action is needed to remain in its chat answers. They confirmed that content tagged NOARCHIVE will not be included or linked. If someone added NOARCHIVE years ago, it costs you answer inclusion now.' },
  { category: 'engines', question: 'Do AI crawlers run the JavaScript on my site?', answer: 'We do not assume they do, and neither should you. Google tells site owners to make sure important content is available in textual form. Other retrieval crawlers publish nothing at all about rendering. So anything load bearing gets server rendered. If your key content only exists after hydration, treat it as invisible.' },

  { category: 'work', question: 'What happens in the first few weeks?', answer: 'We start with an access and extraction audit. We verify every retrieval crawler token in robots.txt. We test server rendering with JavaScript disabled. Then we run a baseline prompt sweep across major engines to measure initial mention share.' },
  { category: 'work', question: 'Do you rewrite our existing pages or build new ones?', answer: 'Mostly rewrite. A page that already ranks and already has links is a far better citation candidate than a new page with neither. We restructure it into extractable units, raise the density of named systems and standards, add a real FAQ block, and fix the schema. New pages come later.' },
  { category: 'work', question: 'What actually makes a page more likely to be cited?', answer: 'Self contained factual sentences that survive being lifted out of context. Real list structure instead of long prose. Specific named systems and standards rather than generic claims. An honest last updated date, and a named author. Those are the traits that recur across the pages we measured as cited.' },

  { category: 'results', question: 'How long before we get cited?', answer: 'Crawler access fixes can register within about a day, since OpenAI documents that robots.txt changes take roughly twenty four hours to be picked up. Content and entity work is slower and usually shows in months rather than weeks. Anyone promising ChatGPT citations in thirty days is guessing.' },
  { category: 'results', question: 'How do you measure AI visibility?', answer: 'We run target buyer questions repeatedly across ChatGPT, Claude, Gemini, and Perplexity. We track how often your brand is mentioned, your citation order, and which competitors appear. We run multiple iterations per prompt to ensure statistical consistency.' },
  { category: 'results', question: 'Can you guarantee we will be cited in ChatGPT?', answer: 'No, and a guarantee would be a red flag. Answers vary between runs on the same prompt. No engine publishes its selection criteria. What we commit to is a measured baseline and a specific set of changes. Then we repeat measurements on the same prompts so you can see progress.' },
  { category: 'results', question: 'Is AI traffic worth chasing if the volume is small?', answer: 'The visit count is the wrong metric. An answer that names you reaches a buyer at the moment they are building a shortlist, and it works even when nobody clicks. Judge it on mention share across your buying questions, and on how many sales conversations open with a recommendation.' },

  { category: 'working', question: 'How do we start?', answer: 'A short call where we look at your robots.txt, your top pages, and the questions your buyers actually ask an assistant. You leave knowing whether you are blocked, whether your pages are extractable, and what a realistic programme looks like. You can also run our free AI visibility check first.' },

  /* ── AI search optimization / LLM SEO ── */
  { category: 'terms', question: 'What are AI search optimization services?', answer: 'AI search optimization services get your business named in AI answers rather than ranked on a page of links. We ensure AI crawlers can reach your site. We restructure pages so models can lift answers cleanly. We build entity signals so engines trust your brand. Finally, we track monthly mention share across ChatGPT, Claude, and Perplexity.' },
  { category: 'terms', question: 'What is LLM SEO, and how is it different from GEO?', answer: 'They describe the same discipline under two names. LLM SEO emphasizes crawler access, llms.txt, and content chunking. GEO emphasizes extractable phrasing, credible data, and named entities. Any agency selling them as separate services is charging twice for the same work.' },
  { category: 'terms', question: 'Are AI search optimization services just SEO with a new name?', answer: 'No. Classic SEO targets clicks on blue links. AI search optimization targets citations when no link is clicked. This changes content structure, schemas, and analytics. If an agency cannot show per-engine citation counts, they are reporting classic SEO under a new label.' },
  { category: 'results', question: 'How do you price AI search optimization services?', answer: 'We offer fixed milestone pricing on a month-to-month basis. Pricing reflects how many pages need restructuring and how many prompts are tracked. We run a free AI visibility check first. This establishes your baseline before any contract begins.' },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Schema. Every const declared below is rendered in the component. Do not add
   one without a matching <script> tag (see rulebook §8, silent-schema bug).
───────────────────────────────────────────────────────────────────────────── */

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((i) => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })),
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Generative engine optimization',
  name: 'Generative engine optimization services',
  description:
    'GEO, answer engine optimization and LLM SEO services: retrieval crawler access across OAI-SearchBot, Claude-SearchBot, PerplexityBot and Applebot, extractable answer structure, schema.org entity work, llms.txt and IndexNow, and repeat mention measurement across ChatGPT, Claude, Gemini, Perplexity and Google AI Overviews.',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'BusinessAudience', name: 'Ecommerce, B2B and professional services brands' },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/generative-engine-optimization#webpage',
  url: 'https://factoryjet.com/services/generative-engine-optimization',
  name: 'Generative Engine Optimization Services',
  description: 'Generative engine optimization, answer engine optimization and LLM SEO services for US brands.',
  dateModified: PAGE_MODIFIED,
  author: { '@type': 'Person', name: 'Bhavesh Barot', url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/', jobTitle: 'Founder, FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  about: { '@id': 'https://factoryjet.com/#organization' },
};

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://factoryjet.com/#organization',
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  description: 'FactoryJet is a search and AI visibility agency that builds commerce and services websites for US brands and works on how those brands appear in AI answers.',
  sameAs: ['https://www.linkedin.com/company/factoryjet'],
};

/** Single source of truth for the breadcrumb trail. Feeds BOTH the visible
 *  <Breadcrumbs> component and the BreadcrumbList JSON-LD below, so the two
 *  can never drift into showing a different path than the schema claims. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Generative Engine Optimization', url: 'https://factoryjet.com/services/generative-engine-optimization' },
];

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: BREADCRUMB_ITEMS.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
};

/* ─────────────────────────────────────────────────────────────────────────────
   Content data
───────────────────────────────────────────────────────────────────────────── */

const STATS = [
  { b: '4 engines', s: 'Measured: ChatGPT, Claude, Gemini, Perplexity.' },
  { b: '12 surfaces', s: 'Audited one by one, never by wildcard.' },
  { b: 'Mentions', s: 'The metric, not ranking position.' },
  { b: 'Vendor docs', s: 'Every claim traced to the source.' },
];

// Citations fetch-verified 2026-08-06 against the linked primary sources.
// Do not edit a quote here without re-opening the source page first.
const SOURCED = [
  {
    v: 'The access gate',
    d: 'OpenAI states that sites blocking OAI-SearchBot cannot appear in search answers. One robots.txt line decides whether AI citation is possible.',
    src: 'OpenAI, Crawlers',
    href: 'https://developers.openai.com/api/docs/bots',
  },
  {
    v: 'No secret markup',
    d: 'Google states that AI Overviews require no special optimization or schema. Standard technical quality drives inclusion.',
    src: 'Google Search Central',
    href: 'https://developers.google.com/search/docs/appearance/ai-features',
  },
  {
    v: 'Two different bots',
    d: 'Anthropic uses ClaudeBot for model training and Claude-SearchBot for web retrieval. Naming only ClaudeBot leaves search bots unmanaged.',
    src: 'Anthropic Support',
    href: 'https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler',
  },
];

const TERMS = [
  {
    term: 'Generative engine optimization (GEO)',
    means: 'Getting your pages used and named as a source inside a generated answer.',
    where: 'ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews.',
    read: 'The broadest of the labels, and the one with real buyer search demand behind it.',
  },
  {
    term: 'Answer engine optimization (AEO)',
    means: 'Writing pages so a direct answer can be lifted out cleanly.',
    where: 'Featured snippets, People Also Ask, voice assistants, AI answers.',
    read: 'Predates GEO. It is a component of GEO now, not a competing service.',
  },
  {
    term: 'AI optimization (AIO)',
    means: 'Either GEO and AEO together, or Google AI Overviews specifically.',
    where: 'Mostly Google search surfaces.',
    read: 'The vaguest label of the four. Always ask which of the two meanings is intended.',
  },
  {
    term: 'LLM SEO',
    means: 'The same work, named after the model instead of the surface.',
    where: 'ChatGPT, Claude, Gemini, and Copilot.',
    read: 'A synonym for GEO in practice. No separate methodology exists.',
  },
  {
    term: 'Classic SEO',
    means: 'Ranking a link on a results page, measured in clicks.',
    where: 'Google and Bing organic results.',
    read: 'Still the foundation. Google requires a page to be indexed in Search before it can be a supporting link in an AI Overview.',
  },
];

// Every claim in this table was fetch-verified against the vendor's own
// documentation on 2026-08-06. Quotes are verbatim. Re-verify before editing.
const SURFACES = [
  { surface: 'ChatGPT search', token: 'OAI-SearchBot', says: 'Sites opted out will not appear in ChatGPT search answers.', src: 'OpenAI', href: 'https://developers.openai.com/api/docs/bots' },
  { surface: 'ChatGPT live fetches', token: 'ChatGPT-User', says: 'Used when questions require live web content.', src: 'OpenAI', href: 'https://developers.openai.com/api/docs/bots' },
  { surface: 'OpenAI model training', token: 'GPTBot', says: 'Crawls content used to train foundation models.', src: 'OpenAI', href: 'https://developers.openai.com/api/docs/bots' },
  { surface: 'Claude search results', token: 'Claude-SearchBot', says: 'Navigates the web to improve user search quality.', src: 'Anthropic', href: 'https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler' },
  { surface: 'Claude live fetches', token: 'Claude-User', says: 'Accesses web pages for user-directed search queries.', src: 'Anthropic', href: 'https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler' },
  { surface: 'Anthropic model training', token: 'ClaudeBot', says: 'Collects training data rather than serving search.', src: 'Anthropic', href: 'https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler' },
  { surface: 'Perplexity answers', token: 'PerplexityBot', says: 'Surfaces and links sources in search answers.', src: 'Perplexity', href: 'https://docs.perplexity.ai/guides/bots' },
  { surface: 'Perplexity live fetches', token: 'Perplexity-User', says: 'Visits pages to provide accurate live sources.', src: 'Perplexity', href: 'https://docs.perplexity.ai/guides/bots' },
  { surface: 'Google AI Overviews and AI Mode', token: 'Googlebot', says: 'Requires no special optimization or schema.', src: 'Google', href: 'https://developers.google.com/search/docs/appearance/ai-features' },
  { surface: 'Gemini training and grounding', token: 'Google-Extended', says: 'Controls training without affecting search indexing.', src: 'Google', href: 'https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers' },
  { surface: 'Bing chat answers', token: 'bingbot, NOARCHIVE, NOCACHE', says: 'Pages marked NOARCHIVE are excluded from chat.', src: 'Bing Webmaster Blog', href: 'https://blogs.bing.com/webmaster/september-2023/Announcing-new-options-for-webmasters-to-control-usage-of-their-content-in-Bing-Chat' },
  { surface: 'Spotlight, Siri and Safari', token: 'Applebot, Applebot-Extended', says: 'Applebot powers search. Extended controls training.', src: 'Apple', href: 'https://support.apple.com/en-us/119829' },
];

const PAINS = [
  { i: '⛔', t: 'A robots.txt rule nobody reread.', d: 'One broad disallow written to stop scrapers also catches the retrieval bots. The site is absent from an entire engine, with no error anywhere to notice.' },
  { i: '▤', t: 'Pages that cannot be quoted.', d: 'The answer is buried in paragraph six of unbroken prose. Nothing can be lifted out as a self contained unit, so a competitor gets lifted instead.' },
  { i: '◌', t: 'The brand is not a resolvable entity.', d: 'The engine has no confident sense of what your company is or what it sells, so it names one it does have that confidence about.' },
  { i: '☍', t: 'Nobody is counting mentions.', d: 'Reporting shows rankings and sessions, so an answer that recommends a competitor to a ready buyer every day is invisible in the numbers.' },
];

const AUDIT_CHECKS = [
  'Every retrieval crawler token named explicitly in robots.txt, never inheriting from a wildcard.',
  'OAI-SearchBot, Claude-SearchBot, Claude-User, PerplexityBot and Perplexity-User checked one by one.',
  'Training bot policy (GPTBot, ClaudeBot, Google-Extended, Applebot-Extended) stated deliberately, not by accident.',
  'Legacy NOARCHIVE and NOCACHE meta tags found and reviewed against Bing chat inclusion.',
  'nosnippet, data-nosnippet and max-snippet directives audited for over-restriction.',
  'Server rendered HTML in Next.js checked with JavaScript disabled, so nothing load bearing depends on hydration.',
  'Canonical tag validation, 301 redirect chains, and status codes checked, single hop only.',
  'schema.org structured data coverage: Organization, WebPage, Service, Product, BreadcrumbList, Person, FAQPage in JSON-LD.',
  'sameAs entity links pointed at real verified profiles, never invented ones.',
  'Honest dateModified on anything time sensitive, and a named author with Person schema.',
  'sitemap.xml, llms.txt, hreflang tags, and IndexNow submission wired and actually returning what they claim.',
  'Core Web Vitals sampled on the pages that matter, because a page that fails to load cannot be cited.',
];

const FEATURES = [
  { t: 'Retrieval access audit.', d: 'Every AI crawler token checked by hand: OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User, Googlebot, bingbot, Applebot.' },
  { t: 'Answer extraction rewrite.', d: 'Pages restructured into self contained factual units, real list markup, and definitions an engine can lift without the surrounding paragraph.' },
  { t: 'Named capability density.', d: 'Generic claims replaced with real system names, standards and versions, because specificity is what separates a page an engine will quote.' },
  { t: 'Entity and schema work.', d: 'Organization, Service, Product, BreadcrumbList, Person and FAQPage JSON-LD, with sameAs pointed at real verified profiles so your brand resolves as one entity.' },
  { t: 'FAQ and question coverage.', d: 'Buyer questions phrased the way buyers ask them, answered in extractable blocks, mirrored into FAQPage markup with zero drift between the two.' },
  { t: 'Technical foundations.', d: 'Server rendered HTML, single hop redirects, correct canonicals, clean sitemaps, llms.txt, IndexNow submission, and Core Web Vitals kept out of the way.' },
  { t: 'Comparison and shortlist assets.', d: 'The pages engines reach for on "which vendor should I use" questions: honest comparisons, selection criteria, category explainers that name real alternatives.' },
  { t: 'Mention measurement.', d: 'Repeat runs of your real buyer prompts across ChatGPT, Claude, Gemini and Perplexity, recording mention rate, position, and which domains own the answer instead.' },
  { t: 'Competitor answer teardown.', d: 'The domains currently cited on your questions, pulled apart page by page, so the gap is a specific list rather than a feeling.' },
  { t: 'Search console & crawler intelligence.', d: 'Log file analysis and Google Search Console (GSC) crawl budget tracking across Cloudflare edge caching, Next.js routes, and verified retrieval bots.' },
  { t: 'Tooling & platform integration.', d: 'Benchmarking through Screaming Frog, Ahrefs, and Semrush alongside LangChain and vector search pipelines in Pinecone and Weaviate.' },
  { t: 'Multi-model prompt testing.', d: 'Testing variations across OpenAI GPT-4o, Anthropic Claude 3.5, Google Gemini 1.5, Llama, and Mistral to verify extractable citation share.' },
];

const BENEFITS = [
  { i: '◉', t: 'You are in the shortlist.', d: 'When a buyer asks an assistant who to consider, your name appears rather than being absent.' },
  { i: '⌁', t: 'Visibility without a click.', d: 'An answer that names you does work even when nobody visits, which is exactly what classic reporting misses.' },
  { i: '⚑', t: 'Blocked engines get unblocked.', d: 'The access audit usually finds a retrieval bot excluded by an old rule. Fixing it is the fastest win available.' },
  { i: '◫', t: 'Pages that answer, not waffle.', d: 'The rewrite that makes a page extractable also makes it faster to read, so conversion and citation move together.' },
  { i: '⌸', t: 'A number to argue with.', d: 'Mention rate per engine on your own buyer prompts, measured the same way each cycle, instead of one lucky screenshot.' },
  { i: '⌘', t: 'Your entity resolves cleanly.', d: 'Consistent naming, real profile links and correct schema stop engines confusing you with a similarly named company.' },
];

const MEASURE = [
  'A fixed prompt set built from the questions your buyers actually type, not keyword strings.',
  'Each prompt run repeatedly, because the same question returns different sources run to run.',
  'Mention rate per engine: ChatGPT, Claude, Gemini and Perplexity measured separately.',
  'Prompt engineering evaluation across OpenAI GPT-4o, Anthropic Claude, and Google Gemini.',
  'Position within the answer, since being named third is not the same as being named first.',
  'Linked versus unlinked mentions recorded separately across all target queries.',
  'The competitor domains currently owning each answer, tracked over time.',
  'Google AI Overview presence and Google Search Console indexing checked on the same question set.',
  'Crawler access status per retrieval bot, rechecked every cycle in case a deploy changed robots.txt.',
  'Vector search, embeddings context, and retrieval augmented generation (RAG) chunking evaluation.',
];

const STEPS = [
  { n: '01', t: 'Baseline.', d: 'We measure where you stand before touching anything: mention rate per engine on your real buyer prompts, plus a full retrieval access audit. Zeros are common and are a start line, not a verdict.' },
  { n: '02', t: 'Unblock.', d: 'Crawler access, rendering and technical foundations first, because content work is wasted if an engine cannot fetch the page. OpenAI documents roughly a day for robots.txt changes to register.' },
  { n: '03', t: 'Rewrite.', d: 'Your strongest existing pages restructured for extraction and specificity, schema corrected, FAQ blocks added, entity links cleaned up. Existing pages first, new pages second.' },
  { n: '04', t: 'Remeasure.', d: 'The same prompts run again, the same way, and the diff reported honestly including the ones that did not move. Then the next set of pages.' },
];

const SEGMENTS = [
  { t: 'Ecommerce and DTC brands.', d: 'Buying guides, category explainers and comparison pages are what assistants reach for on "which brand should I buy" questions. Product pages alone rarely get cited.' },
  { t: 'B2B and SaaS.', d: 'The assistant is often consulted before a vendor list exists. Category definition pages, integration and standards coverage, and honest alternative comparisons get named.' },
  { t: 'Professional services.', d: 'Legal, accounting, medical and consulting answers lean on trust signals. Named authors, credentials, jurisdiction specifics and clean entity resolution beat volume here.' },
  { t: 'Marketplaces and platforms.', d: 'When a category has a famous incumbent, the engine defaults to it. The route in is depth on use cases the incumbent covers thinly, named precisely.' },
  { t: 'Local and multi location businesses.', d: 'Assistants answer near me questions from the index plus local data. Consistent naming across profiles, correct location schema and genuinely distinct location pages.' },
  { t: 'Publishers and content sites.', d: 'Access decisions matter most here, because training and retrieval are separate rights choices. We help make both deliberately rather than by accident.' },
];

const checkIcon = (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
    <path d="M1 4l2.5 2.5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const linkStyle: CSSProperties = { color: 'var(--pp-orange-dark)', textDecoration: 'underline' };
const bulletStyle: CSSProperties = {
  marginTop: '3px', flex: 'none', display: 'inline-flex', height: '18px', width: '18px',
  alignItems: 'center', justifyContent: 'center', borderRadius: '999px',
  background: 'rgba(240,90,40,0.1)', color: 'var(--pp-orange-dark)',
};
const bulletRowStyle: CSSProperties = { display: 'flex', gap: '10px', fontSize: '15px', lineHeight: 1.55, color: 'var(--pp-body)' };

export default function GenerativeEngineOptimizationPage() {
  return (
    <>
      <script id="geo-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="geo-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="geo-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="geo-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="geo-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* Hero */}
        <section className="pp-dotgrid" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="pp-wrap" style={{ paddingTop: 'clamp(44px,6vh,84px)', paddingBottom: 'clamp(44px,6vh,84px)', position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">Generative engine optimization services</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '19ch' }}>
                  Generative engine optimization that gets you named in the answer.
                </h1>
                <p className="pp-lead" style={{ maxWidth: '50ch' }}>
                  A generative engine optimization agency working on one outcome: your brand appearing inside the answers
                  ChatGPT, Claude, Perplexity, Gemini and Google AI Overviews write for your buyers. Access first, then
                  extractable pages, then a mention number you can check.
                </p>
                <HeroInlineForm source="us_geo_hero" region="us" submitLabel="Get an AI visibility audit" />
              </div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--pp-line)', boxShadow: '0 24px 48px -28px rgba(20,17,15,0.28)' }}>
                <Image
                  src="/images/us/shared/factoryjet-audit-call.webp"
                  alt="A consultant walking through search and AI visibility reporting on a video call"
                  width={768}
                  height={512}
                  priority
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stat band */}
        <section className="pp-sec tint" style={{ paddingTop: 'clamp(32px,4vh,52px)', paddingBottom: 'clamp(32px,4vh,52px)' }}>
          <div className="pp-wrap">
            <div className="pp-stats">
              {STATS.map((s) => (<div className="pp-stat" key={s.b}><b>{s.b}</b><span>{s.s}</span></div>))}
            </div>
          </div>
        </section>

        {/* Answer-first definition */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-mlabel">{'// the basics'}</p>
                <h2 style={{ marginTop: '10px' }}>What is generative engine optimization?</h2>
                <div style={{ marginTop: '18px', display: 'grid', gap: '14px' }} className="pp-lead">
                  <p>
                    Generative engine optimization gets your pages named as sources in AI answers. You do not just compete for a spot on a results page. You compete to be one of the few sources an engine cites when writing an answer.
                  </p>
                  <p>
                    It splits into four jobs, in this order. Can the engine fetch your page? Can it lift a clean answer from it? Does it know who you are to put your name next to it? And do you count how often that happens?
                  </p>
                  <p>
                    Most programmes skip the first and the last. Access often depends on an old robots.txt file. Measurement is often reduced to a single screenshot. Both are fixable in days. Both are where we start.
                  </p>
                  <p>
                    This page covers GEO, answer engine optimization and LLM SEO specifically. If your organic foundation
                    is the bigger problem, start with our{' '}
                    <Link href="/services/ai-seo" style={linkStyle}>AI SEO services</Link>{' '}
                    instead, or read the longer{' '}
                    <Link href="/blog/generative-engine-optimization-guide" style={linkStyle}>guide to generative engine optimization</Link>.
                  </p>
                </div>
              </div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--pp-line)', boxShadow: '0 24px 48px -28px rgba(20,17,15,0.28)' }}>
                <Image
                  src="/images/services/ai-seo.webp"
                  alt="A performance dashboard showing load and engagement metrics used to track AI visibility work"
                  width={800}
                  height={450}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Terminology table */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// the labels'}</p>
            <h2 style={{ marginTop: '10px' }}>GEO, AEO, AIO and LLM SEO, in plain English</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              Four labels, heavy overlap, and a lot of agencies selling them as four separate retainers. Here is what each
              one means and where it applies, so you can read a proposal properly.
            </p>
            <div style={{ marginTop: '32px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead>
                  <tr><th>Term</th><th>What people mean by it</th><th>Where it shows up</th><th>Our read</th></tr>
                </thead>
                <tbody>
                  {TERMS.map((t) => (
                    <tr key={t.term}>
                      <td className="name">{t.term}</td>
                      <td>{t.means}</td>
                      <td>{t.where}</td>
                      <td>{t.read}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="pp-lead" style={{ marginTop: '20px', maxWidth: '68ch' }}>
              Short version: GEO and LLM SEO describe the same work. AEO is a subset focusing on direct answers. Neither replaces classic SEO. They build on top of indexed search foundations.
            </p>
          </div>
        </section>

        {/* Sourced statements from the engines */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// primary sources'}</p>
            <h2 style={{ marginTop: '10px' }}>What the engines themselves publish</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              Most GEO advice in circulation is folklore. These three statements come from the vendors themselves, and
              each was opened and checked before it went on this page.
            </p>
            <ul className="pp-bento" style={{ marginTop: '32px' }}>
              {SOURCED.map((s) => (
                <li className="pp-card" key={s.v}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{s.v}</h3>
                  <p>{s.d}</p>
                  <p style={{ marginTop: '10px', fontSize: '13px' }}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>{s.src}</a>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Surfaces table */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// the surfaces'}</p>
            <h2 style={{ marginTop: '10px' }}>The retrieval surfaces and crawlers we work against</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '70ch' }}>
              Every answer surface has its own crawler token, and the retrieval bot is usually not the one people assume.
              This is the working reference we audit against, quoted from the vendors.
            </p>
            <div style={{ marginTop: '32px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead>
                  <tr><th>Surface</th><th>robots.txt token</th><th>What the vendor documents</th><th>Source</th></tr>
                </thead>
                <tbody>
                  {SURFACES.map((s) => (
                    <tr key={s.surface}>
                      <td className="name">{s.surface}</td>
                      <td>{s.token}</td>
                      <td>{s.says}</td>
                      <td><a href={s.href} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>{s.src}</a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="pp-lead" style={{ marginTop: '20px', maxWidth: '70ch' }}>
              Two traps show up constantly. ClaudeBot is Anthropic&rsquo;s training crawler, not its search crawler, so
              naming only ClaudeBot leaves Claude-SearchBot on a wildcard. And GPTBot is training only, so blocking it
              costs nothing in ChatGPT search, while blocking OAI-SearchBot costs everything.
            </p>
          </div>
        </section>

        {/* Problem */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// the problem'}</p>
            <h2 style={{ marginTop: '10px' }}>Why brands do not show up in AI answers</h2>
            <ul className="pp-bento n4" style={{ marginTop: '32px' }}>
              {PAINS.map((p) => (
                <li className="pp-card" key={p.t}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}><span aria-hidden="true">{p.i}</span> {p.t}</h3><p>{p.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

    

        <MidPageCTA
          headline={'Want to know what AI says about you?'}
          sub={'We will run your brand and your main terms through ChatGPT, Perplexity and Google AI Overviews and send you the raw answers.'}
          label={'Check your AI visibility'}
          href="/contact"
        />

        {/* Audit checklist */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'start' }} className="pp-herogrid">
              <div>
                <p className="pp-mlabel">{'// the audit'}</p>
                <h2 style={{ marginTop: '10px' }}>The twelve checks we run before writing anything</h2>
                <p className="pp-lead" style={{ marginTop: '14px' }}>
                  Content work is the visible part of GEO and the second thing that matters. This list is the first. It is
                  cheap, fast, and where most of the damage we find has already been done, usually by a well meant rule
                  written for another reason.
                </p>
                <div style={{ marginTop: '20px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <Link href="/contact" style={linkStyle}>Book an AI visibility audit &rarr;</Link>
                  <Link href="/ai-visibility-checker" style={linkStyle}>Run the free AI visibility check</Link>
                </div>
              </div>
              <ol style={{ display: 'grid', gap: '10px', listStyle: 'none', margin: 0, padding: 0 }}>
                {AUDIT_CHECKS.map((item) => (
                  <li key={item} style={bulletRowStyle}>
                    <span style={bulletStyle}>{checkIcon}</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// what we do'}</p>
            <h2 style={{ marginTop: '10px' }}>What generative engine optimization services include</h2>
            <ul className="pp-bento n8" style={{ marginTop: '32px' }}>
              {FEATURES.map((f) => (
                <li className="pp-card" key={f.t}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{f.t}</h3><p>{f.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Benefits */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// the outcome'}</p>
            <h2 style={{ marginTop: '10px' }}>What changes when it works</h2>
            <ul className="pp-bento" style={{ marginTop: '32px' }}>
              {BENEFITS.map((b) => (
                <li className="pp-card" key={b.t}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}><span aria-hidden="true">{b.i}</span> {b.t}</h3><p>{b.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Mid-page CTA */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <div className="pp-card" style={{ padding: 'clamp(28px,4vw,44px)', textAlign: 'left' }}>
              <h2 style={{ marginTop: 0 }}>Want to know if you are blocked right now?</h2>
              <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '62ch' }}>
                It is the cheapest question in this discipline and almost nobody has checked. Send us your domain and we
                will tell you which retrieval crawlers can reach you, which cannot, and whether your top pages can be
                quoted at all.
              </p>
              <div style={{ marginTop: '20px', display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#F05A28] px-6 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Check your retrieval access &rarr;
                </Link>
                <ModalCTAButton label="Talk to the Founder" region="us" btnVariant="primary-light" />
              </div>
            </div>
          </div>
        </section>

        {/* Measurement */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'start' }} className="pp-herogrid">
              <div>
                <p className="pp-mlabel">{'// measurement'}</p>
                <h2 style={{ marginTop: '10px' }}>How we measure AI visibility</h2>
                <p className="pp-lead" style={{ marginTop: '14px' }}>
                  Rankings do not tell you whether an assistant recommends you. Mentions do. The awkward part is that the
                  same prompt returns different sources on different runs, so one answer proves nothing. Everything below
                  is built around repeating the measurement, not capturing it once.
                </p>
                <ul style={{ marginTop: '20px', display: 'grid', gap: '10px' }}>
                  {MEASURE.map((item) => (
                    <li key={item} style={bulletRowStyle}>
                      <span style={bulletStyle}>{checkIcon}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--pp-line)', boxShadow: '0 24px 48px -28px rgba(20,17,15,0.28)' }}>
                <Image
                  src="/images/us/shared/factoryjet-senior-engineer.webp"
                  alt="An engineer reviewing structured page markup and crawler access settings"
                  width={768}
                  height={512}
                  loading="lazy"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// how it runs'}</p>
            <h2 style={{ marginTop: '10px' }}>How a GEO engagement runs</h2>
            <ul className="pp-bento n4" style={{ marginTop: '36px' }}>
              {STEPS.map((s) => (
                <li className="pp-card" key={s.n}>
                  <p className="pp-mlabel" style={{ marginBottom: '8px' }}>{s.n}</p>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{s.t}</h3><p>{s.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Segments */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// who we do this for'}</p>
            <h2 style={{ marginTop: '10px' }}>Where answer engine optimization pays off</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '66ch' }}>
              The method is the same everywhere. What changes is which pages carry the citations, and that changes a lot.
            </p>
            <ul className="pp-bento" style={{ marginTop: '36px' }}>
              {SEGMENTS.map((u) => (
                <li className="pp-card" key={u.t}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{u.t}</h3><p>{u.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Honest positioning */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// straight answers'}</p>
            <h2 style={{ marginTop: '10px' }}>What we will not tell you about GEO</h2>
            <ul style={{ marginTop: '24px', display: 'grid', gap: '10px', maxWidth: '76ch' }}>
              {[
                'That there is a secret AI ranking factor. Google states there are no additional requirements or special optimizations for AI Overviews and AI Mode.',
                'That FAQPage schema buys citations. It is worth shipping because it is honest and cheap, not because it is a lever.',
                'That llms.txt is a technical necessity. We ship one because it costs nothing, and we will not build a strategy on it.',
                'That longer is better. The pages we measured as cited cluster well below the word counts most agencies pitch.',
                'That we can guarantee a ChatGPT citation. Answers vary run to run and no engine publishes its selection criteria.',
                'That AI visibility replaces SEO. Google states a page has to be indexed. It must be eligible to show in Search with a snippet before it can be a supporting link in AI Overviews or AI Mode.',
              ].map((item) => (
                <li key={item} style={bulletRowStyle}>
                  <span style={bulletStyle}>{checkIcon}</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="pp-lead" style={{ marginTop: '20px', maxWidth: '70ch' }}>
              We would rather lose a pitch than win it on a claim we cannot source. For how we test this, see our
              writeups on{' '}
              <Link href="/blog/best-geo-ai-visibility-tools-2026" style={linkStyle}>GEO and AI visibility tools</Link>{' '}
              and on{' '}
              <Link href="/blog/best-ai-seo-agencies-usa" style={linkStyle}>US AI SEO agencies</Link>{' '}
              show the method rather than the sales deck.
            </p>
          </div>
        </section>

        <FAQ
          eyebrow="GENERATIVE ENGINE OPTIMIZATION FAQ"
          headline="Questions buyers ask about GEO and AEO"
          items={FAQ_ITEMS}
          categories={FAQ_CATEGORIES}
        />

        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="GENERATIVE ENGINE OPTIMIZATION"
            headline="Find out whether AI answers can even see you."
            sub="Send us your domain. We check every retrieval crawler by name. We check whether your best pages can be quoted. Then we run a baseline mention sweep across ChatGPT, Claude, Gemini and Perplexity."
            primaryCta={{ label: 'Get an AI visibility audit', modal: true, region: 'us' }}
            secondaryCta={{ label: 'Run the free AI visibility check', href: '/ai-visibility-checker' }}
            objectionHandler="No retainer to start. You get the findings whether or not you work with us."
          />
        </div>

      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}

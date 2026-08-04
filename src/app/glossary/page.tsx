import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import JsonLd from '@/components/JsonLd';

/* ─────────────────────────────────────────────────────────────────────────────
   /glossary, Commerce & AI glossary (built 2026-07-07)

   GEO/AI-search asset: plain-language, self-contained definitions of the terms
   FactoryJet's buyers ask AI assistants about ("what is GEO / headless commerce /
   an AI agent"). Definition-first prose is the pattern AI answer engines extract,
   and DefinedTermSet/DefinedTerm schema types the whole set so ChatGPT, Perplexity,
   and Google AI Overviews can cite individual entries.

   Static server component. Schema emitted via the native <JsonLd> helper (never
   next/script, enforced by validate-build.mjs check 7).
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL = 'https://factoryjet.com/glossary';
const ORANGE = '#B23E13';

export const metadata: Metadata = {
  title: 'Commerce & AI Glossary: GEO, Headless, AI Agents & More | FactoryJet',
  description:
    'Plain-language definitions of the commerce, AI, and AI-search terms that matter, from generative engine optimization (GEO) and headless commerce to AI agents and unified commerce. A reference by FactoryJet.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Commerce & AI Glossary | FactoryJet',
    description:
      'Clear definitions of commerce, AI, and AI-search terms: GEO, AEO, headless and unified commerce, AI agents, MCP, Core Web Vitals, and more.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet Commerce & AI Glossary' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commerce & AI Glossary | FactoryJet',
    description: 'Clear definitions of the commerce, AI, and AI-search terms that matter.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* ── glossary data ──────────────────────────────────────────────────────────── */
interface Term { slug: string; term: string; def: string; see?: string }
interface Category { key: string; title: string; blurb: string; terms: ReadonlyArray<Term> }

const CATEGORIES: ReadonlyArray<Category> = [
  {
    key: 'ai-search',
    title: 'AI Search & Generative Engine Optimization',
    blurb: 'How content earns citations in AI answer engines like ChatGPT, Perplexity, and Google AI Overviews.',
    terms: [
      { slug: 'generative-engine-optimization', term: 'Generative Engine Optimization (GEO)', def: `Generative Engine Optimization (GEO) is the practice of structuring and writing content so that generative AI answer engines such as ChatGPT, Perplexity, Google AI Overviews, Claude, and Gemini quote and cite it. Unlike traditional SEO, which optimizes to rank a link, GEO optimizes to be the source an AI extracts its answer from.` },
      { slug: 'answer-engine-optimization', term: 'Answer Engine Optimization (AEO)', def: `Answer Engine Optimization (AEO) is optimizing content to be served as the direct answer to a question, whether in a featured snippet, a voice-assistant reply, or an AI-generated answer. It emphasizes clear question-and-answer structure, concise definitions, and FAQ schema.` },
      { slug: 'ai-overviews', term: 'Google AI Overviews', def: `Google AI Overviews are AI-generated summaries shown at the top of Google results that synthesize information from multiple pages and link to their sources. Appearing as a cited source inside an AI Overview is a primary goal of generative engine optimization.` },
      { slug: 'llms-txt', term: 'llms.txt', def: `llms.txt is a plain-text file placed at a website's root that gives large language models a curated, machine-readable summary of the site, its key facts, and its most important URLs. It helps AI systems understand and cite a site accurately.` },
      { slug: 'structured-data', term: 'Structured data', def: `Structured data is standardized, machine-readable markup added to a page that describes its content to search engines and AI systems. On the web it is usually expressed with the Schema.org vocabulary in JSON-LD format.`, see: 'schema-org' },
      { slug: 'schema-org', term: 'Schema.org', def: `Schema.org is a shared vocabulary of types and properties, such as Organization, Product, FAQPage, and Article, used to mark up web content so machines can understand it. It is maintained collaboratively by Google, Microsoft, Yahoo, and Yandex.` },
      { slug: 'json-ld', term: 'JSON-LD', def: `JSON-LD (JavaScript Object Notation for Linked Data) is the format Google and AI engines prefer for structured data. It places a block of schema markup in a script tag, kept separate from the visible page content, and should be server-rendered so non-JavaScript crawlers can read it.` },
      { slug: 'knowledge-graph', term: 'Knowledge graph', def: `A knowledge graph is a network of real-world entities (people, companies, places, concepts) and the relationships between them. Search and AI systems use it to disambiguate and connect information; the sameAs property links a website's entity to its profiles elsewhere to strengthen that connection.` },
      { slug: 'entity-seo', term: 'Entity SEO', def: `Entity SEO is optimizing for a clearly defined entity, such as a brand, person, or product, rather than only for keywords. It relies on consistent naming, structured data, and authoritative references so search and AI systems recognize the entity as a single trusted node.` },
      { slug: 'eeat', term: 'E-E-A-T', def: `E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness, the qualities Google's quality raters, and increasingly AI systems, use to judge content. Named authors with credentials, cited sources, and a transparent organization all strengthen it.` },
      { slug: 'rag', term: 'Retrieval-Augmented Generation (RAG)', def: `Retrieval-Augmented Generation (RAG) is an AI technique that retrieves relevant documents from a knowledge source and feeds them to a language model, so its answer is grounded in specific, up-to-date information rather than only its training data.` },
      { slug: 'semantic-search', term: 'Semantic search', def: `Semantic search interprets the meaning and intent behind a query rather than matching keywords literally. It uses embeddings and language models to return conceptually related results, which is how most AI answer engines find their sources.` },
    ],
  },
  {
    key: 'ai',
    title: 'AI & Automation',
    blurb: 'The building blocks of language models, agents, and automated workflows.',
    terms: [
      { slug: 'llm', term: 'Large Language Model (LLM)', def: `A large language model (LLM) is an AI model trained on vast amounts of text to understand and generate human language. Models such as Claude, GPT, and Gemini power chatbots, AI search, and agentic systems.` },
      { slug: 'ai-agent', term: 'AI agent', def: `An AI agent is a software system that uses a language model to pursue a goal by planning, calling tools or APIs, and taking actions with limited or no human intervention, rather than only answering a single prompt.`, see: 'agentic-ai' },
      { slug: 'agentic-ai', term: 'Agentic AI', def: `Agentic AI refers to AI systems that act autonomously toward goals, making decisions, using tools, and completing multi-step tasks. It contrasts with a passive assistant that only responds to direct instructions.` },
      { slug: 'multi-agent-system', term: 'Multi-agent system', def: `A multi-agent system coordinates several specialized AI agents that each handle part of a task and communicate to reach an outcome no single agent would complete alone, for example separate agents for research, drafting, and review.` },
      { slug: 'mcp', term: 'Model Context Protocol (MCP)', def: `The Model Context Protocol (MCP) is an open standard that lets AI models connect to external tools, data sources, and services through a consistent interface. It standardizes how an agent reads context and takes actions across systems.` },
      { slug: 'workflow-automation', term: 'Workflow automation', def: `Workflow automation uses software to run multi-step business processes with little manual effort. AI automation adds language models to tools like n8n, Zapier, and Make so workflows can interpret content and make decisions, not just move data between apps.` },
      { slug: 'ai-chatbot', term: 'AI chatbot', def: `An AI chatbot is a conversational interface powered by a language model that answers questions and completes tasks in natural language. On a business site it can handle support, qualify leads, or guide product discovery.` },
      { slug: 'prompt-engineering', term: 'Prompt engineering', def: `Prompt engineering is the practice of writing and structuring instructions to get reliable, accurate output from a language model. It includes providing context, examples, constraints, and a clear task definition.` },
      { slug: 'fine-tuning', term: 'Fine-tuning', def: `Fine-tuning adapts a pre-trained language model to a specific domain or task by training it further on a curated dataset, improving accuracy and tone for that use case.` },
      { slug: 'embeddings', term: 'Embeddings', def: `Embeddings are numerical representations of text or other data that capture meaning, so similar items sit close together in a mathematical space. They power semantic search, recommendations, and retrieval for AI systems.` },
      { slug: 'vector-database', term: 'Vector database', def: `A vector database stores embeddings and retrieves the items most semantically similar to a query. It is a core component of retrieval-augmented generation and semantic search.` },
    ],
  },
  {
    key: 'commerce',
    title: 'Commerce',
    blurb: 'The platforms, models, and metrics behind modern DTC and B2B commerce.',
    terms: [
      { slug: 'ecommerce', term: 'E-commerce', def: `E-commerce is the buying and selling of goods and services online, including a brand's own store, online marketplaces, and B2B ordering portals.` },
      { slug: 'dtc', term: 'Direct-to-consumer (DTC)', def: `Direct-to-consumer (DTC) is a model in which a brand sells straight to shoppers through its own channels, bypassing wholesalers and retailers to own the customer relationship and data.` },
      { slug: 'b2b-commerce', term: 'B2B commerce', def: `B2B commerce is the online sale of products or services between businesses. It typically involves account-specific pricing, bulk ordering, approval workflows, and purchase-order payment, alongside or instead of a consumer storefront.` },
      { slug: 'omnichannel-commerce', term: 'Omnichannel commerce', def: `Omnichannel commerce gives customers a consistent, connected experience across every channel, a brand's website, marketplaces, social shops, and physical stores, with inventory, orders, and customer data kept in sync.`, see: 'unified-commerce' },
      { slug: 'unified-commerce', term: 'Unified commerce', def: `Unified commerce runs every sales channel on a single real-time platform and data source rather than stitching separate systems together, so inventory, orders, pricing, and customers stay consistent across store, marketplaces, and B2B at once.` },
      { slug: 'headless-commerce', term: 'Headless commerce', def: `Headless commerce separates the storefront that shoppers see from the commerce engine behind it, connecting them through APIs. This lets teams build a fast, custom front end while keeping a proven backend for catalog, cart, and checkout.`, see: 'composable-commerce' },
      { slug: 'composable-commerce', term: 'Composable commerce', def: `Composable commerce builds a store from independent, best-of-breed components (search, checkout, CMS, payments) connected by APIs, so each piece can be swapped or upgraded without replatforming the whole system.` },
      { slug: 'marketplace', term: 'Marketplace', def: `A marketplace is an online platform such as Amazon, eBay, Walmart, or TikTok Shop where many third-party sellers list products to a shared audience. Selling on marketplaces alongside an owned store is a common multichannel strategy.` },
      { slug: 'shopify-plus', term: 'Shopify Plus', def: `Shopify Plus is the enterprise tier of Shopify, aimed at high-volume and complex merchants. It adds higher API limits, checkout customization, multi-store management, and automation tools on top of standard Shopify.` },
      { slug: 'adobe-commerce', term: 'Adobe Commerce (Magento)', def: `Adobe Commerce, formerly Magento, is an open-source-based commerce platform known for deep customization and strong B2B features. It suits merchants with complex catalogs and workflows that need extensive control.` },
      { slug: 'bigcommerce', term: 'BigCommerce', def: `BigCommerce is a SaaS commerce platform with strong native and headless capabilities, known for flexible APIs and no added transaction fees. It is often chosen by mid-market and B2B merchants.` },
      { slug: 'woocommerce', term: 'WooCommerce', def: `WooCommerce is an open-source commerce plugin for WordPress that turns a WordPress site into an online store, offering wide flexibility through themes and plugins and full control of hosting and code.` },
      { slug: 'pos', term: 'Point of sale (POS)', def: `A point-of-sale (POS) system is the hardware and software a business uses to take in-person payments and record sales. In unified commerce it shares inventory and customer data with the online store in real time.` },
      { slug: 'replatforming', term: 'Replatforming', def: `Replatforming, or migration, is moving a store from one commerce platform to another, transferring catalog, customers, orders, content, and URLs while preserving SEO and minimizing downtime.` },
      { slug: 'aov', term: 'Average order value (AOV)', def: `Average order value (AOV) is the average amount a customer spends per order, calculated as total revenue divided by number of orders. Raising AOV through bundling, upsells, and free-shipping thresholds is a common growth lever.` },
      { slug: 'cro', term: 'Conversion rate optimization (CRO)', def: `Conversion rate optimization (CRO) is the practice of increasing the share of visitors who take a desired action, such as buying or submitting a lead, by testing and improving design, copy, and flow.` },
      { slug: 'commerce-ai-operator', term: 'Commerce AI operator', def: `A commerce AI operator is software that does the operating work of running a store, not just reporting on it. It audits the storefront, ranks issues by revenue impact, and executes approved fixes across every channel. FactoryJet's Commerceflo is an example.` },
    ],
  },
  {
    key: 'web',
    title: 'Web & Development',
    blurb: 'The rendering, performance, and technical-SEO concepts behind a fast, discoverable site.',
    terms: [
      { slug: 'nextjs', term: 'Next.js', def: `Next.js is a React framework for building fast, production-grade websites and web apps. It supports server-side rendering and static generation, which deliver complete HTML that search engines and AI crawlers can read without executing JavaScript.` },
      { slug: 'ssr', term: 'Server-side rendering (SSR)', def: `Server-side rendering (SSR) generates a page's full HTML on the server for each request, so browsers, search engines, and AI crawlers receive complete content immediately rather than a blank shell filled in later by JavaScript.` },
      { slug: 'ssg', term: 'Static site generation (SSG)', def: `Static site generation (SSG) builds every page's HTML ahead of time at build and serves the pre-rendered files from a CDN. It is fast, reliable, and fully readable by crawlers.` },
      { slug: 'core-web-vitals', term: 'Core Web Vitals', def: `Core Web Vitals are Google's user-experience metrics for loading (Largest Contentful Paint), interactivity (Interaction to Next Paint), and visual stability (Cumulative Layout Shift). They influence search rankings and reflect real-world speed.` },
      { slug: 'lighthouse', term: 'Lighthouse', def: `Lighthouse is an open-source tool from Google that audits a page's performance, accessibility, best practices, and SEO, scoring each out of 100. A 100 out of 100 performance score signals a highly optimized page.` },
      { slug: 'pwa', term: 'Progressive Web App (PWA)', def: `A Progressive Web App (PWA) is a website that behaves like a native app: it can work offline, load instantly, and be installed on a device, while still being reached through a normal URL.` },
      { slug: 'canonical-url', term: 'Canonical URL', def: `A canonical URL tells search engines which version of a page is the primary one when similar or duplicate content exists at multiple addresses. It consolidates ranking signals and prevents duplicate-content dilution.` },
      { slug: 'hreflang', term: 'hreflang', def: `hreflang is an HTML annotation that tells search engines which language and region a page targets, so the right version is shown to the right audience. It is essential for sites serving multiple countries.` },
      { slug: 'web-accessibility', term: 'Web accessibility (WCAG)', def: `Web accessibility is designing sites so people with disabilities can use them, guided by the Web Content Accessibility Guidelines (WCAG). It covers keyboard navigation, color contrast, screen-reader support, and clear structure.` },
    ],
  },
];

const ALL_TERMS = CATEGORIES.flatMap((c) => c.terms);

/* ── schema ─────────────────────────────────────────────────────────────────── */
const DEFINED_TERM_SET = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': `${CANONICAL}#termset`,
  name: 'FactoryJet Commerce & AI Glossary',
  description:
    'Plain-language definitions of commerce, AI, and AI-search terms, maintained by FactoryJet.',
  url: CANONICAL,
  hasDefinedTerm: ALL_TERMS.map((t) => ({
    '@type': 'DefinedTerm',
    '@id': `${CANONICAL}#${t.slug}`,
    name: t.term,
    description: t.def,
    inDefinedTermSet: `${CANONICAL}#termset`,
  })),
};

const BREADCRUMB = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/' },
    { '@type': 'ListItem', position: 2, name: 'Glossary', item: CANONICAL },
  ],
};

const WEBPAGE = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': CANONICAL,
  name: 'Commerce & AI Glossary',
  url: CANONICAL,
  isPartOf: { '@type': 'WebSite', name: 'FactoryJet', url: 'https://factoryjet.com' },
  about: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization' },
  inLanguage: 'en',
};

/* ── page ───────────────────────────────────────────────────────────────────── */
export default function GlossaryPage() {
  return (
    <>
      <JsonLd id="glossary-schema" data={[DEFINED_TERM_SET, BREADCRUMB, WEBPAGE]} />

      <SiteHeader locale="us" />

      <main className="bg-fj-cream text-fj-ink">
        {/* Hero */}
        <section className="border-b border-fj-neutral-200">
          <div className="mx-auto max-w-[1100px] px-6 py-16 md:px-8 md:py-24">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.16em]" style={{ color: ORANGE }}>
              Glossary
            </p>
            <h1 className="fj-display mt-4 max-w-[20ch] text-[clamp(2.2rem,5vw,3.6rem)] font-bold leading-[1.05]">
              The commerce &amp; AI glossary
            </h1>
            <p className="mt-6 max-w-[62ch] font-fj-body text-[17px] leading-[1.6] text-fj-neutral-600">
              Plain-language definitions of the commerce, AI, and AI-search terms that come up when you
              are building or scaling a modern store. Written to be accurate and quotable, for people and
              for the AI assistants they ask.
            </p>

            {/* Category jump-nav */}
            <nav aria-label="Glossary categories" className="mt-10 flex flex-wrap gap-3">
              {CATEGORIES.map((c) => (
                <a
                  key={c.key}
                  href={`#${c.key}`}
                  className="rounded-full border border-fj-neutral-200 bg-white px-4 py-2 font-fj-body text-[14px] text-fj-ink transition-colors hover:border-fj-ink hover:text-[#F05A28]"
                >
                  {c.title}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* Categories */}
        {CATEGORIES.map((cat) => (
          <section key={cat.key} id={cat.key} className="scroll-mt-24 border-b border-fj-neutral-200">
            <div className="mx-auto max-w-[1100px] px-6 py-16 md:px-8 md:py-20">
              <header className="max-w-[62ch]">
                <h2 className="fj-display text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold leading-tight">
                  {cat.title}
                </h2>
                <p className="mt-3 font-fj-body text-[16px] leading-[1.6] text-fj-neutral-600">
                  {cat.blurb}
                </p>
              </header>

              <dl className="mt-10 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
                {cat.terms.map((t) => (
                  <div key={t.slug} id={t.slug} className="scroll-mt-24">
                    <dt className="fj-display text-[19px] font-semibold leading-snug">
                      {t.term}
                    </dt>
                    <dd className="mt-2 font-fj-body text-[15px] leading-[1.65] text-fj-neutral-600">
                      {t.def}
                      {t.see && (
                        <>
                          {' '}
                          <a href={`#${t.see}`} className="font-medium text-fj-ink underline decoration-fj-neutral-200 underline-offset-2 hover:decoration-[#F05A28]">
                            See {ALL_TERMS.find((x) => x.slug === t.see)?.term ?? t.see}.
                          </a>
                        </>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        ))}

        {/* Closing CTA */}
        <section>
          <div className="mx-auto max-w-[1100px] px-6 py-16 text-center md:px-8 md:py-20">
            <h2 className="fj-display text-[clamp(1.5rem,3vw,2.1rem)] font-bold leading-tight">
              Building something in commerce or AI?
            </h2>
            <p className="mx-auto mt-3 max-w-[54ch] font-fj-body text-[16px] leading-[1.6] text-fj-neutral-600">
              FactoryJet designs, builds, and scales commerce and AI for DTC and B2B brands. Tell us what
              you are working on and we will scope it on a short call.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="rounded-full px-6 py-3 font-fj-body text-[15px] font-semibold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: ORANGE }}>
                Talk to the founder
              </Link>
              <Link href="/commerceflo" className="rounded-full border border-fj-neutral-200 bg-white px-6 py-3 font-fj-body text-[15px] font-semibold text-fj-ink transition-colors hover:border-fj-ink">
                Explore Commerceflo
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale="us" />
    </>
  );
}
